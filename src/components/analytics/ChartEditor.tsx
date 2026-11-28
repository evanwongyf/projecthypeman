import { useEffect, useMemo, useState } from 'react'
import { buildOption, checkFields } from '../../lib/analytics/chartOption'
import { checkReadOnly, query, quoteIdent } from '../../lib/analytics/duck'
import { CHART_TYPES, type ChartSize, type ChartSpec, type ChartType, type QueryResult, type TableProfile } from '../../lib/analytics/types'
import { Modal } from '../Modal'
import { Select } from '../Select'
import { EChart, useChartTheme } from './EChart'
import { ResultTable } from './ChartCard'

type Draft = Omit<ChartSpec, 'id' | 'updatedAt' | 'createdBy'>

const AGGS = ['SUM', 'AVG', 'COUNT', 'MIN', 'MAX', 'MEDIAN'] as const
const NONE = '__none__'

/** Build or edit a chart by hand: pick fields to generate SQL, or write the SQL yourself. */
export function ChartEditor({
  initial,
  profiles,
  onSave,
  onClose,
}: {
  initial?: ChartSpec
  profiles: TableProfile[]
  onSave: (draft: Draft) => void
  onClose: () => void
}) {
  const theme = useChartTheme()
  const [draft, setDraft] = useState<Draft>(
    initial
      ? { title: initial.title, type: initial.type, sql: initial.sql, x: initial.x, y: initial.y, series: initial.series, size: initial.size, description: initial.description }
      : { title: '', type: 'bar', sql: '', size: 'm' }
  )
  const [result, setResult] = useState<QueryResult | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [running, setRunning] = useState(false)

  // Field builder state.
  const [table, setTable] = useState(profiles[0]?.table ?? '')
  const profile = profiles.find((p) => p.table === table)
  const [bx, setBx] = useState(NONE)
  const [by, setBy] = useState(NONE)
  const [agg, setAgg] = useState<(typeof AGGS)[number]>('SUM')
  const [bs, setBs] = useState(NONE)

  const set = (patch: Partial<Draft>) => setDraft((d) => ({ ...d, ...patch }))

  async function run(sql = draft.sql) {
    const guard = checkReadOnly(sql)
    if (guard) {
      setError(guard)
      setResult(null)
      return
    }
    setRunning(true)
    setError(null)
    try {
      setResult(await query(sql.replace(/;+\s*$/, '')))
    } catch (err) {
      setResult(null)
      setError(err instanceof Error ? err.message : String(err))
    } finally {
      setRunning(false)
    }
  }

  useEffect(() => {
    if (initial?.sql) void run(initial.sql)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function generate() {
    if (!profile) return
    const t = quoteIdent(profile.table)
    const xCol = bx !== NONE ? bx : undefined
    const sCol = bs !== NONE ? bs : undefined
    const yCol = by !== NONE ? by : undefined
    const yName = yCol ? `${agg.toLowerCase()}_${yCol}`.replace(/[^a-zA-Z0-9_]/g, '_') : 'rows'
    const yExpr = agg === 'COUNT' || !yCol ? 'COUNT(*)' : `${agg}(${quoteIdent(yCol)})`
    let sql: string
    if (draft.type === 'histogram' || draft.type === 'scatter') {
      const cols = [xCol, yCol, sCol].filter(Boolean).map((c) => quoteIdent(c!))
      sql = `SELECT ${cols.join(', ') || '*'} FROM ${t}${draft.type === 'scatter' ? ' USING SAMPLE 2000 ROWS' : ''}`
      set({ sql, x: draft.type === 'scatter' ? xCol : undefined, y: yCol ? [yCol] : undefined, series: sCol })
    } else if (draft.type === 'kpi' || !xCol) {
      sql = `SELECT ${yExpr} AS ${quoteIdent(yName)} FROM ${t}`
      set({ sql, x: undefined, y: [yName], series: undefined })
    } else {
      const xExpr = quoteIdent(xCol)
      const groups = sCol ? `${xExpr}, ${quoteIdent(sCol)}` : xExpr
      const order = draft.type === 'line' || draft.type === 'area' ? '1' : `${sCol ? 3 : 2} DESC`
      sql = `SELECT ${groups}, ${yExpr} AS ${quoteIdent(yName)} FROM ${t} GROUP BY ${sCol ? '1, 2' : '1'} ORDER BY ${order}`
      set({ sql, x: xCol, y: [yName], series: sCol })
    }
    if (!draft.title) set({ title: yCol ? `${agg.toLowerCase()} of ${yCol}${xCol ? ` by ${xCol}` : ''}` : `Rows${xCol ? ` by ${xCol}` : ''}` })
    void run(sql)
  }

  const resultCols = result?.columns.map((c) => ({ value: c.name, label: c.name })) ?? []
  const colOptions = (allowNone: boolean) => [...(allowNone ? [{ value: NONE, label: 'none' }] : []), ...resultCols]
  const profileCols = [{ value: NONE, label: 'none' }, ...(profile?.columns.map((c) => ({ value: c.name, label: `${c.name} · ${c.role}` })) ?? [])]

  const preview = useMemo(() => {
    if (!result || !draft.sql) return null
    const spec: ChartSpec = { ...draft, id: 'preview', createdBy: 'user', updatedAt: '' }
    try {
      checkFields(spec, result)
      if (draft.type === 'kpi' || draft.type === 'table') return { kind: 'table' as const }
      return { kind: 'chart' as const, option: buildOption(spec, result, theme) }
    } catch (err) {
      return { kind: 'error' as const, message: err instanceof Error ? err.message : String(err) }
    }
  }, [result, draft, theme])

  const canSave = !!draft.title.trim() && !!draft.sql.trim() && !!result && preview?.kind !== 'error'

  return (
    <Modal
      xl
      title={initial ? 'Edit chart' : 'New chart'}
      eyebrow="Chart builder"
      onClose={onClose}
      footer={
        <>
          <button type="button" className="btn btn-ghost" onClick={onClose}>
            Cancel
          </button>
          <button type="button" className="btn btn-primary" disabled={!canSave} onClick={() => onSave({ ...draft, title: draft.title.trim() })}>
            {initial ? 'Save chart' : 'Add to dashboard'}
          </button>
        </>
      }
    >
      <div className="grid gap-5 lg:grid-cols-[minmax(0,20rem)_1fr]">
        <div className="space-y-4">
          <label className="block">
            <span className="label mb-1.5 block">Title</span>
            <input className="field" value={draft.title} onChange={(e) => set({ title: e.target.value })} placeholder="What the chart shows" />
          </label>
          <div className="grid grid-cols-2 gap-3">
            <label className="block">
              <span className="label mb-1.5 block">Type</span>
              <Select value={draft.type} onChange={(v) => set({ type: v as ChartType })} options={CHART_TYPES.map((t) => ({ value: t, label: t }))} />
            </label>
            <label className="block">
              <span className="label mb-1.5 block">Width</span>
              <Select
                value={draft.size}
                onChange={(v) => set({ size: v as ChartSize })}
                options={[
                  { value: 's', label: 'Third' },
                  { value: 'm', label: 'Half' },
                  { value: 'l', label: 'Full' },
                ]}
              />
            </label>
          </div>

          {profiles.length > 0 && (
            <fieldset className="space-y-3 border-t pt-4 hairline">
              <legend className="label pr-2">Build from fields</legend>
              <Select value={table} onChange={setTable} options={profiles.map((p) => ({ value: p.table, label: p.table }))} ariaLabel="Table" />
              <div className="grid grid-cols-2 gap-3">
                <label className="block">
                  <span className="label mb-1.5 block">Group by (x)</span>
                  <Select value={bx} onChange={setBx} options={profileCols} />
                </label>
                <label className="block">
                  <span className="label mb-1.5 block">Split by</span>
                  <Select value={bs} onChange={setBs} options={profileCols} />
                </label>
                <label className="block">
                  <span className="label mb-1.5 block">Measure (y)</span>
                  <Select value={by} onChange={setBy} options={profileCols} />
                </label>
                <label className="block">
                  <span className="label mb-1.5 block">Aggregate</span>
                  <Select value={agg} onChange={(v) => setAgg(v as (typeof AGGS)[number])} options={AGGS.map((a) => ({ value: a, label: a }))} />
                </label>
              </div>
              <button type="button" className="btn w-full" onClick={generate}>
                Generate SQL
              </button>
            </fieldset>
          )}

          {result && (
            <fieldset className="space-y-3 border-t pt-4 hairline">
              <legend className="label pr-2">Map result columns</legend>
              <div className="grid grid-cols-2 gap-3">
                <label className="block">
                  <span className="label mb-1.5 block">x</span>
                  <Select value={draft.x ?? NONE} onChange={(v) => set({ x: v === NONE ? undefined : v })} options={colOptions(true)} />
                </label>
                <label className="block">
                  <span className="label mb-1.5 block">y</span>
                  <Select value={draft.y?.[0] ?? NONE} onChange={(v) => set({ y: v === NONE ? undefined : [v] })} options={colOptions(true)} />
                </label>
                <label className="col-span-2 block">
                  <span className="label mb-1.5 block">Series</span>
                  <Select value={draft.series ?? NONE} onChange={(v) => set({ series: v === NONE ? undefined : v })} options={colOptions(true)} />
                </label>
              </div>
            </fieldset>
          )}
        </div>

        <div className="min-w-0 space-y-3">
          <label className="block">
            <span className="label mb-1.5 block">SQL (DuckDB, read-only)</span>
            <textarea
              className="field min-h-32 font-mono text-xs"
              value={draft.sql}
              spellCheck={false}
              onChange={(e) => set({ sql: e.target.value })}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) void run()
              }}
              placeholder={profiles[0] ? `SELECT * FROM ${profiles[0].table} LIMIT 100` : 'Upload a table first'}
            />
          </label>
          <div className="flex items-center gap-3">
            <button type="button" className="btn" onClick={() => void run()} disabled={running || !draft.sql.trim()}>
              {running ? 'Running…' : 'Run query'}
            </button>
            <span className="label">ctrl + enter</span>
            {result && <span className="label ml-auto">{result.rows.length.toLocaleString('en-US')} rows · {result.ms} ms</span>}
          </div>

          <div className="panel min-h-72 p-3" style={{ background: 'var(--panel-2)' }}>
            {error ? (
              <p className="font-mono text-xs leading-relaxed" style={{ color: 'var(--overdue)' }}>
                {error}
              </p>
            ) : !result ? (
              <p className="label p-2">Run a query to preview the chart.</p>
            ) : preview?.kind === 'error' ? (
              <>
                <p className="mb-3 font-mono text-xs" style={{ color: 'var(--assigned)' }}>
                  {preview.message}
                </p>
                <ResultTable result={result} max={50} />
              </>
            ) : preview?.kind === 'chart' ? (
              <EChart option={preview.option} className="h-72 w-full" ariaLabel="Chart preview" />
            ) : (
              <ResultTable result={result} max={50} />
            )}
          </div>
        </div>
      </div>
    </Modal>
  )
}
