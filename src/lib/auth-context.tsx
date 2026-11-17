import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { api } from './api'

export type Session = {
  username: string
  email: string
  name: string
  role: 'admin' | 'user'
}

type AuthContextValue = {
  user: Session | null
  loading: boolean
  /** Set when the server reports it is missing configuration, so the login
   *  screen can say so rather than just refusing to sign anyone in. */
  serverError: string | null
  refresh: () => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)
  const [serverError, setServerError] = useState<string | null>(null)

  const refresh = useCallback(async () => {
    try {
      const res = await fetch('/api/session')
      if (res.ok) {
        setUser(((await res.json()) as { user: Session }).user)
        setServerError(null)
        return
      }
      setUser(null)
      // 401 is the ordinary "not signed in" case; anything else is the server
      // telling us something the person needs to read.
      if (res.status !== 401) {
        const body = (await res.json().catch(() => null)) as { error?: string } | null
        setServerError(body?.error ?? `The server returned ${res.status}.`)
      } else {
        setServerError(null)
      }
    } catch {
      setUser(null)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    void refresh()
  }, [refresh])

  const logout = useCallback(async () => {
    await api.logout().catch(() => {})
    setUser(null)
  }, [])

  return (
    <AuthContext.Provider value={{ user, loading, serverError, refresh, logout }}>{children}</AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
