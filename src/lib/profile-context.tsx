import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import type { ReactNode } from 'react'

/** Which side of Hypeman is in front. Each mode has its own pages and nav. */
export type ProfileMode = 'teaching' | 'running'

export const PROFILE_MODES: { id: ProfileMode; label: string; hint: string; home: string }[] = [
  { id: 'teaching', label: 'Teaching', hint: 'Students, classes, homework and points', home: '/students' },
  { id: 'running', label: 'Running', hint: 'Log runs, track distance and pace', home: '/running' },
]

const STORAGE_KEY = 'hypeman.profile.mode'

function readMode(): ProfileMode {
  try {
    const v = localStorage.getItem(STORAGE_KEY)
    return v === 'running' ? 'running' : 'teaching'
  } catch {
    return 'teaching'
  }
}

type ProfileContextValue = { mode: ProfileMode; setMode: (mode: ProfileMode) => void }

const ProfileContext = createContext<ProfileContextValue | null>(null)

export function ProfileProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<ProfileMode>(() => (typeof window === 'undefined' ? 'teaching' : readMode()))

  const setMode = useCallback((next: ProfileMode) => {
    setModeState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* blocked storage — the mode just won't survive a reload */
    }
  }, [])

  const value = useMemo(() => ({ mode, setMode }), [mode, setMode])
  return <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
}

export function useProfile() {
  const ctx = useContext(ProfileContext)
  if (!ctx) throw new Error('useProfile must be used within ProfileProvider')
  return ctx
}
