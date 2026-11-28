import { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { api } from '../lib/api'
import { useAuth } from '../lib/auth-context'
import { Field } from '../components/Field'
import { Logo } from '../components/Logo'

export function Login() {
  const { user, loading, serverError, refresh } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)
  const [signupOpen, setSignupOpen] = useState(false)

  // Only offered while it would actually succeed, so it is not a dead link
  // on every install that already has an account.
  useEffect(() => {
    api
      .signupOpen()
      .then((r) => setSignupOpen(r.open))
      .catch(() => setSignupOpen(false))
  }, [])

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
    <div className="desktop flex flex-1 items-center justify-center p-5">
      <div className="w-full max-w-sm">
        <div className="crt crt-green mb-6 flex flex-col items-start gap-3 p-5">
          <Logo />
          <p className="text-sm" style={{ color: 'var(--ink-soft)' }}>
            Teaching terminal, classes, rosters and homework in one panel.
          </p>
        </div>

        {serverError && (
          <div
            className="panel mb-4 p-4"
            style={{ borderColor: 'var(--overdue)', background: 'var(--overdue-dim)' }}
            role="alert"
          >
            <p className="label" style={{ color: 'var(--overdue)' }}>
              server not ready
            </p>
            <p className="mt-1.5 text-sm leading-relaxed" style={{ color: 'var(--ink)' }}>
              {serverError}
            </p>
          </div>
        )}

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

          <button type="submit" className="btn btn-primary w-full" disabled={busy || !!serverError}>
            {busy ? 'Signing in…' : 'Sign in'}
          </button>
        </form>

        {signupOpen && (
          <div className="panel mt-4 p-4">
            <p className="label">no account yet</p>
            <p className="mt-1.5 text-sm" style={{ color: 'var(--ink-soft)' }}>
              This terminal has no account. Claim it now, sign-up closes once one exists.
            </p>
            <Link to="/signup" className="btn mt-3 w-full">
              Create the account
            </Link>
          </div>
        )}

        <p className="label mt-6 text-center" style={{ color: '#dbe4ff' }}>projecthypeman</p>
      </div>
    </div>
  )
}
