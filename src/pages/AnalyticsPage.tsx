import { useMemo, useState } from 'react'
import { ChartCard } from '../components/analytics/ChartCard'
import { ChartEditor } from '../components/analytics/ChartEditor'
import { CopilotPanel } from '../components/analytics/CopilotPanel'
import { DataPanel } from '../components/analytics/DataPanel'
import { IconChart, IconPlus, IconTrash } from '../components/Icons'
import { PageHeader } from '../components/PageHeader'
import { Select } from '../components/Select'
import type { CopilotEnv } from '../lib/analytics/copilot'
import { useTables, useWorkspace } from '../lib/analytics/hooks'
import type { ChartSpec } from '../lib/analytics/types'

/**
 * Analytics: upload data, build dashboards by hand or with the copilot.
 * Data on the left, the dashboard in the middle, the copilot on the right.
 */
export function AnalyticsPage() {
  const tables = useTables()
  const ws = useWorkspace()
  const [editing, setEditing] = useState<ChartSpec | 'new' | null>(null)
  const [dataVersion, setDataVersion] = useState(0)

  const env: CopilotEnv = useMemo(
    () => ({
      profiles: () => tables.profilesRef.current,
      dashboard: ws.active,
      addChart: ws.addChart,
      updateChart: ws.updateChart,
      removeChart: ws.removeChart,
      renameDashboard: ws.renameDashboard,
    }),
    // ws.active reads refs, so it is stable in practice.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [ws.addChart, ws.updateChart, ws.removeChart, ws.renameDashboard]
  )

  const dashboard = ws.dashboard
  const saveLabel = ws.saveState === 'saving' ? 'saving…' : ws.saveState === 'error' ? 'not saved, check connection' : 'saved'

  return (
    <>
      <PageHeader
        eyebrow="Analytics"
        title="Dashboard builder"
        meta={<span className="label">Your data stays in this browser · {saveLabel}</span>}
      />

      <div className="grid gap-5 px-5 pb-8 sm:px-8 xl:grid-cols-[17rem_minmax(0,1fr)_22rem]">
        <aside className="min-w-0">
          <DataPanel
            profiles={tables.profiles}
            busy={tables.busy}
            error={tables.error}
            onDismissError={() => tables.setError(null)}
            onFiles={(files) => void tables.addFiles(files).then(() => setDataVersion((v) => v + 1))}
            onRemove={(t) => void tables.removeTable(t).then(() => setDataVersion((v) => v + 1))}
            onAddSuggestion={(s) =>
              ws.addChart({ title: s.title, type: s.type, sql: s.sql, x: s.x, y: s.y, series: s.series, size: s.size, description: s.reason, createdBy: 'user' })
            }
          />
        </aside>

        <section className="min-w-0">
          {dashboard && (
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <input
                className="field min-w-0 flex-1 !bg-transparent text-lg font-semibold"
                style={{ borderColor: 'transparent' }}
                value={dashboard.title}
                onChange={(e) => ws.renameDashboard(e.target.value)}
                aria-label="Dashboard title"
              />
              {ws.workspace.dashboards.length > 1 && (
                <Select
                  fit
                  value={dashboard.id}
                  onChange={ws.setActiveId}
                  ariaLabel="Switch dashboard"
                  options={ws.workspace.dashboards.map((d) => ({ value: d.id, label: d.title || 'Untitled' }))}
                />
              )}
              <button type="button" className="btn" onClick={ws.createDashboard} title="New dashboard">
                <IconPlus className="h-3.5 w-3.5" /> Dashboard
              </button>
              <button type="button" className="btn btn-primary" onClick={() => setEditing('new')} disabled={!tables.profiles.length}>
                <IconChart className="h-3.5 w-3.5" /> Add chart
              </button>
              <button
                type="button"
                className="btn btn-ghost btn-danger"
                title="Delete this dashboard"
                onClick={() => {
                  if (window.confirm(`Delete "${dashboard.title}" and its charts?`)) ws.deleteDashboard(dashboard.id)
                }}
              >
                <IconTrash className="h-3.5 w-3.5" />
              </button>
            </div>
          )}

          {!ws.loaded ? (
            <p className="label">loading dashboards…</p>
          ) : !dashboard?.charts.length ? (
            <div className="grid-field panel flex flex-col items-center justify-center gap-3 px-6 py-16 text-center">
              <IconChart className="h-6 w-6" />
              <p className="label">empty dashboard</p>
              <p className="max-w-md text-sm" style={{ color: 'var(--ink-soft)' }}>
                {tables.profiles.length
                  ? 'Ask the copilot to build one, add a suggested chart from the data panel, or build a chart by hand.'
                  : 'Upload a CSV, Parquet, JSON or Excel file to begin. It is loaded into a database inside your browser.'}
              </p>
            </div>
          ) : (
            <>
              {tables.profiles.length === 0 && !tables.busy && (
                <p className="panel mb-4 px-4 py-3 text-xs" style={{ color: 'var(--assigned)' }}>
                  These charts read tables that are not loaded in this browser. Upload the same files to bring them back.
                </p>
              )}
              <div className="grid grid-cols-12 gap-4">
                {dashboard.charts.map((c) => (
                  <ChartCard
                    key={c.id}
                    spec={c}
                    dataVersion={dataVersion}
                    onEdit={() => setEditing(c)}
                    onRemove={() => ws.removeChart(c.id)}
                    onMove={(d) => ws.moveChart(c.id, d)}
                    onResize={(size) => ws.updateChart(c.id, { size })}
                  />
                ))}
              </div>
            </>
          )}
        </section>

        <aside className="panel min-w-0 xl:sticky xl:top-4 xl:h-[calc(100vh-2rem)]" style={{ minHeight: '32rem' }}>
          <CopilotPanel env={env} profiles={tables.profiles} />
        </aside>
      </div>

      {editing && (
        <ChartEditor
          initial={editing === 'new' ? undefined : editing}
          profiles={tables.profiles}
          onClose={() => setEditing(null)}
          onSave={(draft) => {
            if (editing === 'new') ws.addChart({ ...draft, createdBy: 'user' })
            else ws.updateChart(editing.id, { ...draft, createdBy: 'user' })
            setEditing(null)
          }}
        />
      )}
    </>
  )
}
