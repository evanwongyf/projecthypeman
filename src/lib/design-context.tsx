import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import {
  DEFAULT_DESIGN,
  applyDesign,
  normalizeDesign,
  readStoredDesign,
  storeDesign,
  type DesignSettings,
} from './design'

type DesignContextValue = {
  design: DesignSettings
  /** Change one or more axes. Applies instantly, then saves. */
  set: (patch: Partial<DesignSettings>) => void
  reset: () => void
  saving: boolean
  error: string | null
}

const DENSE_MIGRATION_KEY = 'hypeman.migrated.dense'

const DesignContext = createContext<DesignContextValue | null>(null)

/**
 * The design lives in two places on purpose: localStorage so the boot script
 * can apply it before first paint, and the user's R2 blob so it follows the
 * account to another device. localStorage wins at boot; the server copy is
 * adopted once it arrives.
 */
export function DesignProvider({ children }: { children: ReactNode }) {
  const [design, setDesign] = useState<DesignSettings>(() =>
    typeof window === 'undefined' ? { ...DEFAULT_DESIGN } : readStoredDesign()
  )
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Follow the device when the mode is 'system'.
  useEffect(() => {
    if (design.mode !== 'system' || !window.matchMedia) return
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => applyDesign(design)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [design])

  const persist = useCallback(async (next: DesignSettings) => {
    setSaving(true)
    setError(null)
    try {
      const res = await fetch('/api/settings', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ design: next }),
      })
      if (!res.ok) throw new Error('Could not save your design to the server.')
    } catch (err) {
      // The look is already applied and stored locally; only syncing failed.
      setError(err instanceof Error ? err.message : 'Could not save your design.')
    } finally {
      setSaving(false)
    }
  }, [])

  const set = useCallback(
    (patch: Partial<DesignSettings>) => {
      setDesign((prev) => {
        const next = normalizeDesign({ ...prev, ...patch })
        applyDesign(next)
        storeDesign(next)
        void persist(next)
        return next
      })
    },
    [persist]
  )

  const reset = useCallback(() => set(DEFAULT_DESIGN), [set])

  /**
   * Adopt what another device saved. Merged over the current settings rather
   * than replacing them, so a blob written by an older build — one that
   * predates an axis — leaves that axis alone instead of resetting it.
   */
  const adopt = useCallback((raw: unknown) => {
    if (!raw || typeof raw !== 'object') return
    setDesign((prev) => {
      const incoming = normalizeDesign({
        ...prev,
        ...(raw as Record<string, unknown>),
        // A blob saved before the Dense migration must not undo it.
        ...(migratedNow.current ? { density: 'dense' } : {}),
      })
      if (JSON.stringify(prev) === JSON.stringify(incoming)) return prev
      applyDesign(incoming)
      storeDesign(incoming)
      return incoming
    })
  }, [])

  /**
   * One-time move to Dense, the smallest density, for anyone who saved a look
   * before it existed. Runs once per browser; the choice is then theirs.
   */
  const migratedNow = useRef(false)
  useEffect(() => {
    try {
      if (localStorage.getItem(DENSE_MIGRATION_KEY)) return
      localStorage.setItem(DENSE_MIGRATION_KEY, '1')
    } catch {
      return
    }
    migratedNow.current = true
    if (design.density !== 'dense') set({ density: 'dense' })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    applyDesign(design)
    // Only on mount: later changes apply inside `set`.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const value = useMemo(
    () => ({ design, set, reset, saving, error, adopt }),
    [design, set, reset, saving, error, adopt]
  )

  return <DesignContext.Provider value={value}>{children}</DesignContext.Provider>
}

export function useDesign() {
  const ctx = useContext(DesignContext)
  if (!ctx) throw new Error('useDesign must be used within DesignProvider')
  return ctx as DesignContextValue & { adopt: (raw: unknown) => void }
}
