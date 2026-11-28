import { useCallback, useEffect, useRef, useState } from 'react'
import { dropTable, formatOf, loadTable, tableNameFor } from './duck'
import { deleteFile, listFiles, saveFile } from './files'
import { profileTable } from './profile'
import type { ChartSpec, Dashboard, TableProfile, Workspace } from './types'

const MAX_FILE_BYTES = 500 * 1024 * 1024

// ------------------------------------------------------------ tables

export function useTables() {
  const [profiles, setProfiles] = useState<TableProfile[]>([])
  const [busy, setBusy] = useState<string | null>('Starting the database…')
  const [error, setError] = useState<string | null>(null)
  const profilesRef = useRef(profiles)
  profilesRef.current = profiles

  // Reload whatever was uploaded in this browser before.
  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        const files = await listFiles()
        const loaded: TableProfile[] = []
        for (const f of files) {
          if (cancelled) return
          setBusy(`Loading ${f.fileName}…`)
          try {
            await loadTable(f.table, f.fileName, f.bytes, f.format)
            loaded.push(await profileTable(f.table, f.fileName))
          } catch (err) {
            setError(`${f.fileName} could not be reloaded: ${err instanceof Error ? err.message : String(err)}`)
          }
        }
        if (!cancelled) setProfiles(loaded)
      } finally {
        if (!cancelled) setBusy(null)
      }
    })()
    return () => {
      cancelled = true
    }
  }, [])

  const addFiles = useCallback(async (files: File[]) => {
    setError(null)
    for (const file of files) {
      const format = formatOf(file.name)
      if (!format) {
        setError(`${file.name}: use CSV, TSV, Parquet, JSON or Excel (.xlsx).`)
        continue
      }
      if (file.size > MAX_FILE_BYTES) {
        setError(`${file.name} is over 500 MB, too large to analyse in the browser.`)
        continue
      }
      setBusy(`Reading ${file.name}…`)
      try {
        const bytes = new Uint8Array(await file.arrayBuffer())
        const table = tableNameFor(file.name, new Set(profilesRef.current.map((p) => p.table)))
        await loadTable(table, file.name, bytes, format)
        setBusy(`Profiling ${file.name}…`)
        const profile = await profileTable(table, file.name)
        await saveFile({ table, fileName: file.name, format, bytes, addedAt: new Date().toISOString() })
        setProfiles((prev) => [...prev, profile])
      } catch (err) {
        setError(`${file.name}: ${err instanceof Error ? err.message : String(err)}`)
      }
    }
    setBusy(null)
  }, [])

  const removeTable = useCallback(async (table: string) => {
    await dropTable(table)
    await deleteFile(table)
    setProfiles((prev) => prev.filter((p) => p.table !== table))
  }, [])

  return { profiles, profilesRef, busy, error, setError, addFiles, removeTable }
}

// ------------------------------------------------------------ workspace

function newDashboard(title = 'Untitled dashboard'): Dashboard {
  return { id: crypto.randomUUID(), title, charts: [], updatedAt: new Date().toISOString() }
}

export function useWorkspace() {
  const [workspace, setWorkspace] = useState<Workspace>({ dashboards: [] })
  const [activeId, setActiveId] = useState<string | null>(null)
  const [loaded, setLoaded] = useState(false)
  const [saveState, setSaveState] = useState<'saved' | 'saving' | 'error'>('saved')
  const wsRef = useRef(workspace)
  wsRef.current = workspace
  const activeRef = useRef(activeId)
  activeRef.current = activeId
  const dirty = useRef(false)

  useEffect(() => {
    fetch('/api/analytics/workspace')
      .then((r) => (r.ok ? (r.json() as Promise<Workspace>) : { dashboards: [] }))
      .catch(() => ({ dashboards: [] }) as Workspace)
      .then((ws) => {
        const dashboards = ws.dashboards?.length ? ws.dashboards : [newDashboard()]
        setWorkspace({ dashboards })
        setActiveId(dashboards[0].id)
        setLoaded(true)
      })
  }, [])

  // Save a second after the last change.
  useEffect(() => {
    if (!loaded || !dirty.current) return
    setSaveState('saving')
    const timer = setTimeout(async () => {
      try {
        const res = await fetch('/api/analytics/workspace', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(workspace),
        })
        setSaveState(res.ok ? 'saved' : 'error')
        if (res.ok) dirty.current = false
      } catch {
        setSaveState('error')
      }
    }, 1000)
    return () => clearTimeout(timer)
  }, [workspace, loaded])

  /** Apply a change to the active dashboard. Synchronous on the ref, so tool calls in a row see each other. */
  const mutateActive = useCallback((fn: (d: Dashboard) => Dashboard) => {
    const id = activeRef.current
    const next = {
      dashboards: wsRef.current.dashboards.map((d) => (d.id === id ? { ...fn(d), updatedAt: new Date().toISOString() } : d)),
    }
    wsRef.current = next
    dirty.current = true
    setWorkspace(next)
  }, [])

  const active = (): Dashboard => wsRef.current.dashboards.find((d) => d.id === activeRef.current) ?? newDashboard()

  const addChart = useCallback(
    (spec: Omit<ChartSpec, 'id' | 'updatedAt'>): ChartSpec => {
      const chart: ChartSpec = { ...spec, id: crypto.randomUUID().slice(0, 8), updatedAt: new Date().toISOString() }
      mutateActive((d) => ({ ...d, charts: [...d.charts, chart] }))
      return chart
    },
    [mutateActive]
  )

  const updateChart = useCallback(
    (id: string, patch: Partial<ChartSpec>): ChartSpec | null => {
      let updated: ChartSpec | null = null
      mutateActive((d) => ({
        ...d,
        charts: d.charts.map((c) => (c.id === id ? (updated = { ...c, ...patch, id, updatedAt: new Date().toISOString() }) : c)),
      }))
      return updated
    },
    [mutateActive]
  )

  const removeChart = useCallback(
    (id: string): boolean => {
      const exists = active().charts.some((c) => c.id === id)
      if (exists) mutateActive((d) => ({ ...d, charts: d.charts.filter((c) => c.id !== id) }))
      return exists
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [mutateActive]
  )

  const moveChart = useCallback(
    (id: string, delta: number) =>
      mutateActive((d) => {
        const i = d.charts.findIndex((c) => c.id === id)
        const j = i + delta
        if (i < 0 || j < 0 || j >= d.charts.length) return d
        const charts = [...d.charts]
        ;[charts[i], charts[j]] = [charts[j], charts[i]]
        return { ...d, charts }
      }),
    [mutateActive]
  )

  const renameDashboard = useCallback((title: string) => mutateActive((d) => ({ ...d, title })), [mutateActive])

  const createDashboard = useCallback(() => {
    const d = newDashboard()
    const next = { dashboards: [...wsRef.current.dashboards, d] }
    wsRef.current = next
    dirty.current = true
    setWorkspace(next)
    setActiveId(d.id)
    activeRef.current = d.id
  }, [])

  const deleteDashboard = useCallback((id: string) => {
    let dashboards = wsRef.current.dashboards.filter((d) => d.id !== id)
    if (!dashboards.length) dashboards = [newDashboard()]
    const next = { dashboards }
    wsRef.current = next
    dirty.current = true
    setWorkspace(next)
    if (activeRef.current === id) {
      setActiveId(dashboards[0].id)
      activeRef.current = dashboards[0].id
    }
  }, [])

  const dashboard = workspace.dashboards.find((d) => d.id === activeId) ?? null

  return {
    loaded,
    workspace,
    dashboard,
    activeId,
    setActiveId: (id: string) => {
      activeRef.current = id
      setActiveId(id)
    },
    saveState,
    active,
    addChart,
    updateChart,
    removeChart,
    moveChart,
    renameDashboard,
    createDashboard,
    deleteDashboard,
  }
}
