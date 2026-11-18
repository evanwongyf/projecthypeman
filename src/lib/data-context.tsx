import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { api } from './api'
import type { TerminalData } from './types'
import { nameKey } from './format'
import { useDesign } from './design-context'

type DataContextValue = {
  data: TerminalData
  loading: boolean
  error: string | null
  /** Re-read everything from R2. Mutations call this so every view stays in step. */
  reload: () => Promise<void>
  /** Monotonic counter, bumped on every reload — used to bust photo caches. */
  version: number
}

const EMPTY: TerminalData = {
  classes: [],
  students: [],
  homework: [],
  behaviours: [],
  awards: [],
  seatingPlans: [],
  settings: {},
}

const DataContext = createContext<DataContextValue | null>(null)

export function DataProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<TerminalData>(EMPTY)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [version, setVersion] = useState(0)
  const { adopt } = useDesign()

  const reload = useCallback(async () => {
    try {
      const next = await api.data()
      setData(next)
      setError(null)
      setVersion((v) => v + 1)
      // Pick up a design saved from another device.
      adopt(next.settings?.design)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not load the terminal.')
    } finally {
      setLoading(false)
    }
  }, [adopt])

  useEffect(() => {
    void reload()
  }, [reload])

  return (
    <DataContext.Provider value={{ data, loading, error, reload, version }}>{children}</DataContext.Provider>
  )
}

export function useData() {
  const ctx = useContext(DataContext)
  if (!ctx) throw new Error('useData must be used within DataProvider')
  return ctx
}

/** Classes in alphabetical order. */
export function useClasses() {
  const { data } = useData()
  return useMemo(() => [...data.classes].sort((a, b) => a.name.localeCompare(b.name)), [data.classes])
}

/** The roster of one class, by name. */
export function useRoster(classId: string | null) {
  const { data } = useData()
  return useMemo(
    () => data.students.filter((s) => s.classId === classId).sort((a, b) => nameKey(a.fullName).localeCompare(nameKey(b.fullName))),
    [data.students, classId]
  )
}
