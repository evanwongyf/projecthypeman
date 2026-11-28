import * as duckdb from '@duckdb/duckdb-wasm'
import mvpWasm from '@duckdb/duckdb-wasm/dist/duckdb-mvp.wasm?url'
import mvpWorker from '@duckdb/duckdb-wasm/dist/duckdb-browser-mvp.worker.js?url'
import ehWasm from '@duckdb/duckdb-wasm/dist/duckdb-eh.wasm?url'
import ehWorker from '@duckdb/duckdb-wasm/dist/duckdb-browser-eh.worker.js?url'
import type { Column, QueryResult, Row } from './types'

/**
 * DuckDB running in the browser. All analysis happens here: the files never
 * leave the device, and every number on a chart or in the copilot's answer is
 * the output of a real query.
 */

let dbPromise: Promise<duckdb.AsyncDuckDB> | null = null

function db(): Promise<duckdb.AsyncDuckDB> {
  dbPromise ??= (async () => {
    const bundle = await duckdb.selectBundle({
      mvp: { mainModule: mvpWasm, mainWorker: mvpWorker },
      eh: { mainModule: ehWasm, mainWorker: ehWorker },
    })
    const worker = new Worker(bundle.mainWorker!)
    const instance = new duckdb.AsyncDuckDB(new duckdb.VoidLogger(), worker)
    await instance.instantiate(bundle.mainModule, bundle.pthreadWorker)
    return instance
  })()
  return dbPromise
}

/** Turn Arrow values into plain JSON-friendly ones. */
function plain(v: unknown): unknown {
  if (typeof v === 'bigint') return Number(v)
  if (v instanceof Date) return v.toISOString()
  if (v instanceof Uint8Array) return `<${v.length} bytes>`
  if (v && typeof v === 'object' && 'toJSON' in v && typeof (v as { toJSON: unknown }).toJSON === 'function') {
    return plain((v as { toJSON: () => unknown }).toJSON())
  }
  if (Array.isArray(v)) return v.map(plain)
  return v
}

export async function query(sql: string, limit = 5000): Promise<QueryResult> {
  const instance = await db()
  const conn = await instance.connect()
  const t0 = performance.now()
  try {
    const table = await conn.query(sql)
    const columns: Column[] = table.schema.fields.map((f) => ({ name: f.name, type: String(f.type) }))
    // Arrow hands dates and timestamps back as epoch milliseconds; make them readable.
    const kind = columns.map((c) => (/^Date/i.test(c.type) ? 'date' : /^Timestamp/i.test(c.type) ? 'ts' : null))
    const rows: Row[] = []
    const n = Math.min(table.numRows, limit)
    for (let i = 0; i < n; i++) {
      const r = table.get(i)
      if (!r) continue
      const obj: Row = {}
      columns.forEach((c, j) => {
        const v = plain(r[c.name])
        if (kind[j] && typeof v === 'number' && Number.isFinite(v)) {
          const iso = new Date(v).toISOString()
          obj[c.name] = kind[j] === 'date' || iso.endsWith('T00:00:00.000Z') ? iso.slice(0, 10) : iso.slice(0, 19).replace('T', ' ')
        } else obj[c.name] = v
      })
      rows.push(obj)
    }
    return { columns, rows, truncated: table.numRows > limit, ms: Math.round(performance.now() - t0) }
  } finally {
    await conn.close()
  }
}

const READ_ONLY = /^\s*(select|with|summarize|describe|show|from|values|explain)\b/i
const WRITES = /\b(insert|update|delete|drop|alter|create|copy|attach|detach|install|load|export|import|pragma|set|call|checkpoint|vacuum)\b/i

/** The copilot's guard: one read-only statement, nothing that writes or reaches out. */
export function checkReadOnly(sql: string): string | null {
  const trimmed = sql.trim().replace(/;+\s*$/, '')
  if (!READ_ONLY.test(trimmed)) return 'Only read-only queries (SELECT, WITH, SUMMARIZE, DESCRIBE) are allowed.'
  // Strip string literals before looking for keywords, so WHERE note = 'drop' is fine.
  const bare = trimmed.replace(/'(?:[^']|'')*'/g, "''").replace(/"(?:[^"]|"")*"/g, '""')
  if (bare.includes(';')) return 'Send one statement at a time.'
  const hit = bare.match(WRITES)
  if (hit && !/^\s*(summarize|describe|show)\b/i.test(bare)) return `"${hit[1].toUpperCase()}" is not allowed in a read-only query.`
  return null
}

export function quoteIdent(name: string): string {
  return `"${name.replace(/"/g, '""')}"`
}

/** A safe table name from a file name: sales_2024.csv -> sales_2024 */
export function tableNameFor(fileName: string, taken: Set<string>): string {
  let base = fileName
    .replace(/\.[^.]+$/, '')
    .toLowerCase()
    .replace(/[^a-z0-9_]+/g, '_')
    .replace(/^_+|_+$/g, '')
  if (!base || /^\d/.test(base)) base = `t_${base || 'data'}`
  let name = base
  for (let i = 2; taken.has(name); i++) name = `${base}_${i}`
  return name
}

export type FileFormat = 'csv' | 'parquet' | 'json' | 'xlsx'

export function formatOf(fileName: string): FileFormat | null {
  const ext = fileName.toLowerCase().split('.').pop()
  if (ext === 'csv' || ext === 'tsv' || ext === 'txt') return 'csv'
  if (ext === 'parquet') return 'parquet'
  if (ext === 'json' || ext === 'jsonl' || ext === 'ndjson') return 'json'
  if (ext === 'xlsx') return 'xlsx'
  return null
}

/** Register a file and materialise it as a table. */
export async function loadTable(table: string, fileName: string, bytes: Uint8Array, format: FileFormat): Promise<void> {
  const instance = await db()
  const virtual = `${table}__${fileName.replace(/[^a-zA-Z0-9._-]/g, '_')}`
  await instance.registerFileBuffer(virtual, bytes)
  const src = `'${virtual.replace(/'/g, "''")}'`
  const reader =
    format === 'csv'
      ? `read_csv_auto(${src}, sample_size = -1)`
      : format === 'parquet'
        ? `read_parquet(${src})`
        : format === 'json'
          ? `read_json_auto(${src})`
          : `read_xlsx(${src})`
  const conn = await instance.connect()
  try {
    if (format === 'xlsx') {
      try {
        await conn.query('INSTALL excel; LOAD excel;')
      } catch {
        throw new Error('Excel support could not be loaded in this browser. Save the sheet as CSV and upload that.')
      }
    }
    await conn.query(`CREATE OR REPLACE TABLE ${quoteIdent(table)} AS SELECT * FROM ${reader}`)
  } finally {
    await conn.close()
  }
}

export async function dropTable(table: string): Promise<void> {
  const instance = await db()
  const conn = await instance.connect()
  try {
    await conn.query(`DROP TABLE IF EXISTS ${quoteIdent(table)}`)
  } finally {
    await conn.close()
  }
}
