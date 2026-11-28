import { useEffect, useMemo, useState } from 'react'
import { buildOption, formatNumber } from '../../lib/analytics/chartOption'
import { query } from '../../lib/analytics/duck'
import type { ChartSize, ChartSpec, QueryResult } from '../../lib/analytics/types'
import { IconBack, IconCode, IconEdit, IconSpark, IconTrash } from '../Icons'
import { EChart, useChartTheme } from './EChart'

const SPAN: Record<ChartSize, string> = {
  s: 'col-span-12 md:col-span-6 xl:col-span-4',
  m: 'col-span-12 xl:col-span-6',
  l: 'col-span-12',
}

/**
 * One chart on the dashboard. It runs its own SQL, so it always shows live
 * numbers from the loaded data, and the query is one click away.
 */
export function ChartCard({
  spec,
  dataVersion,
  onEdit,
  onRemove,
  onMove,
  onResize,
}: {
  spec: ChartSpec
  /** Bumps when tables are added or removed, to re-run the query. */
  dataVersion: number
  onEdit: () => void
  onRemove: () => void
  onMove: (delta: number) => void
  onResize: (size: ChartSize) => void
}) {
  const theme = useChartTheme()
  const [result, setResult] = useState<QueryResult | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [showSql, setShowSql] = useState(false)

  useEffect(() => {
    let cancelled = false
    setError(null)
    query(spec.sql)
      .then((r) => !cancelled && setResult(r))
      .catch((err) => !cancelled && (setResult(null), setError(err instanceof Error ? err.message : String(err))))
    return () => {
      cancelled = true
    }
  }, [spec.sql, dataVersion])

  const drawn = useMemo(() => {
    if (!result || spec.type === 'kpi' || spec.type === 'table') return null
    try {
      return { option: buildOption(spec, result, theme), error: null }
    } catch (err) {
      return { option: null, error: err instanceof Error ? err.message : String(err) }
    }
  }, [result, spec, theme])

  const problem = error ?? drawn?.error ?? null

  return (
    <article className={`panel flex min-w-0 flex-col ${SPAN[spec.size]}`}>
      <header className="flex items-start justify-between gap-3 border-b px-4 py-3 hairline">
        <div className="min-w-0">
          <h3 className="truncate text-sm font-semibold" title={spec.title}>
            {spec.title}
          </h3>
          <p className="label mt-1 flex items-center gap-1.5">
            {spec.type}
            {spec.createdBy === 'ai' && (
              <span className="inline-flex items-center gap-1" title="Built by the copilot">
                <IconSpark className="h-3 w-3" /> copilot
              </span>
            )}
            {result && <span>· {result.rows.length.toLocaleString('en-US')}{result.truncated ? '+' : ''} rows · {result.ms} ms</span>}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-0.5">
          <button type="button" className="btn btn-ghost !px-1.5 !py-1" onClick={() => setShowSql((v) => !v)} aria-pressed={showSql} title="Show the SQL">
            <IconCode className="h-3.5 w-3.5" />
          </button>
          <button type="button" className="btn btn-ghost !px-1.5 !py-1" onClick={onEdit} title="Edit chart">
            <IconEdit className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            className="btn btn-ghost !px-1.5 !py-1 font-mono text-[10px]"
            onClick={() => onResize(spec.size === 's' ? 'm' : spec.size === 'm' ? 'l' : 's')}
            title="Change width"
          >
            {spec.size.toUpperCase()}
          </button>
          <button type="button" className="btn btn-ghost !px-1.5 !py-1" onClick={() => onMove(-1)} title="Move earlier">
            <IconBack className="h-3 w-3" />
          </button>
          <button type="button" className="btn btn-ghost !px-1.5 !py-1" onClick={() => onMove(1)} title="Move later">
            <IconBack className="h-3 w-3 rotate-180" />
          </button>
          <button type="button" className="btn btn-ghost btn-danger !px-1.5 !py-1" onClick={onRemove} title="Remove chart">
            <IconTrash className="h-3.5 w-3.5" />
          </button>
        </div>
      </header>

      {showSql && (
        <pre className="max-h-48 overflow-auto border-b px-4 py-3 font-mono text-[11px] leading-relaxed whitespace-pre-wrap hairline" style={{ background: 'var(--panel-2)', color: 'var(--ink-soft)' }}>
          {spec.sql}
        </pre>
      )}

      <div className="min-h-0 flex-1 p-3">
        {problem ? (
          <p className="font-mono text-xs leading-relaxed" style={{ color: 'var(--overdue)' }}>
            {problem}
          </p>
        ) : !result ? (
          <p className="label p-2">running query…</p>
        ) : spec.type === 'kpi' ? (
          <Kpi spec={spec} result={result} />
        ) : spec.type === 'table' ? (
          <ResultTable result={result} />
        ) : drawn?.option ? (
          <EChart option={drawn.option} className="h-72 w-full" ariaLabel={spec.title} />
        ) : null}
      </div>

      {spec.description && (
        <p className="border-t px-4 py-2.5 text-xs leading-relaxed hairline" style={{ color: 'var(--ink-soft)' }}>
          {spec.description}
        </p>
      )}
    </article>
  )
}

function Kpi({ spec, result }: { spec: ChartSpec; result: QueryResult }) {
  const y = spec.y?.[0] ?? result.columns[0]?.name
  const row = result.rows[0] ?? {}
  const value = row[y]
  const exact = typeof value === 'number' ? value.toLocaleString('en-US', { maximumFractionDigits: 2 }) : String(value ?? '-')
  return (
    <div className="flex h-full min-h-28 flex-col justify-center px-2">
      <p className="mono text-4xl font-semibold tracking-tight" title={exact}>
        {formatNumber(value)}
      </p>
      <p className="label mt-2">{y}</p>
    </div>
  )
}

export function ResultTable({ result, max = 200 }: { result: QueryResult; max?: number }) {
  return (
    <div className="max-h-80 overflow-auto">
      <table className="w-full border-collapse text-left text-xs">
        <thead className="sticky top-0" style={{ background: 'var(--panel)' }}>
          <tr>
            {result.columns.map((c) => (
              <th key={c.name} className="label border-b px-2 py-1.5 whitespace-nowrap hairline">
                {c.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {result.rows.slice(0, max).map((r, i) => (
            <tr key={i} className="row-hover">
              {result.columns.map((c) => {
                const v = r[c.name]
                return (
                  <td key={c.name} className={`border-b px-2 py-1 whitespace-nowrap ${typeof v === 'number' ? 'mono text-right' : ''}`} style={{ borderColor: 'var(--line-soft)' }}>
                    {typeof v === 'number' ? v.toLocaleString('en-US', { maximumFractionDigits: 4 }) : v === null || v === undefined ? <span style={{ color: 'var(--ink-faint)' }}>null</span> : String(v)}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
      {result.rows.length > max && <p className="label px-2 py-2">showing {max} of {result.rows.length.toLocaleString('en-US')} rows</p>}
    </div>
  )
}
