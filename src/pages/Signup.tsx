import { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { api } from '../lib/api'
import { useAuth } from '../lib/auth-context'
import { Field } from '../components/Field'
import { Logo } from '../components/Logo'

/**
 * Claims an empty terminal. The route closes itself once an account exists,
 * so this page is only ever useful once.
 */
export function Signup() {
  const { user, loading, refresh } = useAuth()
  const navigate = useNavigate()

  const [open, setOpen] = useState<boolean | null>(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)

  useEffect(() => {
    api
      .signupOpen()
      .then((r) => setOpen(r.open))
      .catch(() => setOpen(false))
  }, [])

  if (!loading && user) return <Navigate to="/students" replace />

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    if (password !== confirm) {
      setError('The two passwords do not match.')
      return
    }
    setBusy(true)
    setError(null)
    try {
      await api.signup({ name: name.trim(), email: email.trim(), password })
      await refresh()
      navigate('/students', { replace: true })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not create the account.')
      setBusy(false)
    }
  }

  return (
    <div className="desktop flex flex-1 items-center justify-center p-5">
      <div className="w-full max-w-sm">
        <div className="crt crt-green mb-6 flex flex-col items-start gap-3 p-5">
          <Logo />
          <p className="text-sm" style={{ color: 'var(--ink-soft)' }}>
            Create the account for this terminal.
          </p>
        </div>

        {open === false ? (
          <div className="panel p-6">
            <p className="label" style={{ color: 'var(--overdue)' }}>
              signups closed
            </p>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
              This terminal already has an account, so sign-up is permanently closed. Sign in
              instead, or add another account with <span className="mono">npm run seed</span>.
            </p>
            <Link to="/login" className="btn btn-primary mt-5 w-full">
              Go to sign in
            </Link>
          </div>
        ) : (
          <form onSubmit={submit} className="panel space-y-4 p-6">
            <Field label="Your name" required>
              <input className="field" value={name} onChange={(e) => setName(e.target.value)} autoFocus required />
            </Field>
            <Field label="Email" required hint="you will sign in with this">
              <input
                className="field"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                autoCapitalize="none"
                spellCheck={false}
                required
              />
            </Field>
            <Field label="Password" required hint="at least 8 characters">
              <input
                className="field"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"
                minLength={8}
                required
              />
            </Field>
            <Field label="Confirm password" required>
              <input
                className="field"
                type="password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                autoComplete="new-password"
                required
              />
            </Field>

            {error && (
              <p className="font-mono text-xs" style={{ color: 'var(--overdue)' }}>
                {error}
              </p>
            )}

            <button type="submit" className="btn btn-primary w-full" disabled={busy || open === null}>
              {busy ? 'Creating…' : 'Create account'}
            </button>

            <p className="text-xs" style={{ color: 'var(--ink-faint)' }}>
              This page works only while the terminal has no account. Once yours exists, sign-up
              closes for good.
            </p>
          </form>
        )}

        <p className="mt-6 text-center">
          <Link to="/login" className="label hover:text-[var(--ink)]">
            back to sign in
          </Link>
        </p>
      </div>
    </div>
  )
}
