import { query, quoteIdent } from './duck'
import type { ColumnProfile, ColumnRole, Row, TableProfile } from './types'

/**
 * The profile is what lets the copilot understand a table without reading
 * it: types, what each column means, how values are spread, and a few sample
 * rows with personal data masked. It is computed once per upload.
 */

const NUMERIC = /^(tinyint|smallint|integer|int|bigint|hugeint|utinyint|usmallint|uinteger|ubigint|float|double|real|decimal)/i
const TEMPORAL = /^(date|timestamp|time)/i

const GEO_NAMES = /^(country|nation|state|province|region|city|town|county|postcode|postal_code|zip|zipcode|lat|latitude|lon|lng|longitude|continent)$/i
const ID_NAMES = /(^id$|_id$|^id_|uuid|guid|^key$|_key$|code$)/i
const TIME_NAMES = /(date|time|month|year|day|week|quarter|period|_at$|timestamp)/i
const PII_NAMES = /(email|e_mail|phone|mobile|tel|nric|ssn|passport|address|first_?name|last_?name|full_?name|surname|^name$|dob|birth)/i
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function norm(name: string): string {
  return name.trim().toLowerCase().replace(/[\s-]+/g, '_')
}

function roleOf(name: string, type: string, distinct: number, rows: number): ColumnRole {
  const n = norm(name)
  if (/^bool/i.test(type)) return 'boolean'
  if (TEMPORAL.test(type)) return 'time'
  if (GEO_NAMES.test(n)) return 'geo'
  if (NUMERIC.test(type)) {
    if (ID_NAMES.test(n) && distinct > rows * 0.9) return 'id'
    if (/^(year)$/i.test(n) && distinct < 200) return 'time'
    return 'measure'
  }
  if (ID_NAMES.test(n) && distinct > rows * 0.5) return 'id'
  if (TIME_NAMES.test(n) && distinct > 1) return 'time'
  if (distinct <= Math.max(50, rows * 0.05)) return 'category'
  if (distinct > rows * 0.9) return 'id'
  return 'text'
}

export async function profileTable(table: string, fileName: string): Promise<TableProfile> {
  const t = quoteIdent(table)
  const summary = await query(`SUMMARIZE ${t}`)
  // SUMMARIZE's distinct counts are estimates; the category logic needs exact ones.
  const names = summary.rows.map((r) => String(r.column_name))
  const countRes = await query(
    `SELECT COUNT(*) AS __n${names.map((n, i) => `, COUNT(DISTINCT ${quoteIdent(n)}) AS d${i}`).join('')} FROM ${t}`
  )
  const rowCount = Number(countRes.rows[0]?.__n ?? 0)
  const exact = new Map(names.map((n, i) => [n, Number(countRes.rows[0]?.[`d${i}`] ?? 0)]))

  const columns: ColumnProfile[] = summary.rows.map((r) => {
    const name = String(r.column_name)
    const type = String(r.column_type)
    const distinct = exact.get(name) ?? Number(r.approx_unique ?? 0)
    const nullPct = Number.parseFloat(String(r.null_percentage ?? '0')) || 0
    const mean = r.avg === null || r.avg === undefined ? undefined : Number(r.avg)
    return {
      name,
      type,
      role: roleOf(name, type, distinct, rowCount),
      nullPct: Math.round(nullPct * 10) / 10,
      distinct,
      min: r.min === null || r.min === undefined ? undefined : String(r.min),
      max: r.max === null || r.max === undefined ? undefined : String(r.max),
      mean: Number.isFinite(mean) ? mean : undefined,
      pii: PII_NAMES.test(norm(name)),
    }
  })

  // Most common values for the columns people group and filter by.
  for (const c of columns) {
    if (c.role !== 'category' && c.role !== 'geo' && c.role !== 'boolean') continue
    const q = quoteIdent(c.name)
    const top = await query(
      `SELECT CAST(${q} AS VARCHAR) AS v, COUNT(*) AS n FROM ${t} WHERE ${q} IS NOT NULL GROUP BY 1 ORDER BY 2 DESC LIMIT 8`
    )
    c.topValues = top.rows.map((r) => ({ value: String(r.v), count: Number(r.n) }))
  }

  const sampleRes = await query(`SELECT * FROM ${t} USING SAMPLE 5 ROWS`)
  // A column of email addresses is personal data whatever it is called.
  for (const c of columns) {
    if (c.pii) continue
    if (sampleRes.rows.some((row) => typeof row[c.name] === 'string' && EMAIL.test(row[c.name] as string))) c.pii = true
  }
  const sample = sampleRes.rows.map((row) => maskRow(row, columns))

  return { table, fileName, rowCount, columns, sample }
}

function maskRow(row: Row, columns: ColumnProfile[]): Row {
  const out: Row = {}
  for (const c of columns) out[c.name] = c.pii && row[c.name] !== null ? '«masked»' : row[c.name]
  return out
}

/** A compact text version of a profile, for the copilot's system prompt. */
export function profileForPrompt(p: TableProfile, includeSample: boolean): string {
  const lines = [`TABLE ${p.table} (from ${p.fileName}), ${p.rowCount.toLocaleString('en-US')} rows`]
  for (const c of p.columns) {
    const bits = [`${c.name}: ${c.type}, ${c.role}`]
    bits.push(`${c.distinct.toLocaleString('en-US')} distinct`)
    if (c.nullPct > 0) bits.push(`${c.nullPct}% null`)
    // Ranges mean something for numbers and dates, not for text sorted alphabetically.
    if (!c.pii && c.min !== undefined && (c.role === 'measure' || c.role === 'time' || c.role === 'id'))
      bits.push(`range ${trim(c.min)} to ${trim(c.max ?? '')}`)
    if (c.mean !== undefined && c.role === 'measure') bits.push(`mean ${round(c.mean)}`)
    if (c.topValues?.length && !c.pii) bits.push(`top: ${c.topValues.map((t) => `${trim(t.value, 24)} (${t.count})`).join(', ')}`)
    if (c.pii) bits.push('personal data, values hidden')
    lines.push(`  - ${bits.join('; ')}`)
  }
  if (includeSample && p.sample.length) {
    lines.push('  sample rows:')
    for (const r of p.sample) lines.push(`    ${JSON.stringify(r, (_k, v) => (typeof v === 'string' ? trim(v, 40) : v))}`)
  }
  return lines.join('\n')
}

function trim(s: string, n = 32): string {
  return s.length > n ? `${s.slice(0, n - 1)}…` : s
}

function round(n: number): string {
  const a = Math.abs(n)
  return a >= 100 ? n.toFixed(0) : a >= 1 ? n.toFixed(2) : n.toPrecision(3)
}
