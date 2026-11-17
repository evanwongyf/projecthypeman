import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { api } from '../lib/api'
import { useAuth } from '../lib/auth-context'
import { Field } from '../components/Field'
import { Logo } from '../components/Logo'

export function Login() {
  const { user, loading, refresh } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)

  if (!loading && user) return <Navigate to="/students" replace />

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setBusy(true)
    setError(null)
    try {
      await api.login(email.trim(), password)
      await refresh()
      navigate('/students', { replace: true })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not sign in.')
      setBusy(false)
    }
  }

  return (
    <div className="grid-field flex flex-1 items-center justify-center p-5">
      <div className="w-full max-w-sm">
        <div className="mb-8 flex flex-col gap-3">
          <Logo />
          <p className="text-sm" style={{ color: 'var(--ink-soft)' }}>
            Teaching terminal — classes, rosters and homework in one panel.
          </p>
        </div>

        <form onSubmit={submit} className="panel space-y-4 p-6">
          <Field label="Email">
            <input
              className="field"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              autoCapitalize="none"
              spellCheck={false}
              placeholder="you@example.com"
              required
            />
          </Field>
          <Field label="Password">
            <input
              className="field"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
          </Field>

          {error && (
            <p className="font-mono text-xs" style={{ color: 'var(--overdue)' }}>
              {error}
            </p>
          )}

          <button type="submit" className="btn btn-primary w-full" disabled={busy}>
            {busy ? 'Signing in…' : 'Sign in'}
          </button>
        </form>

        <p className="label mt-6 text-center">projecthypeman</p>
      </div>
    </div>
  )
}
