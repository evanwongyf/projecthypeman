import { useState } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../lib/auth-context'
import { useData } from '../lib/data-context'
import { isOverdue, displayState } from '../lib/status'
import { useNow } from '../lib/useNow'
import { Logo } from './Logo'
import { IconClass, IconHomework, IconLogout, IconRoster, IconSettings } from './Icons'

const NAV = [
  { to: '/students', label: 'Students', Icon: IconRoster },
  { to: '/classes', label: 'Classes', Icon: IconClass },
  { to: '/homework', label: 'Homework', Icon: IconHomework },
  { to: '/settings', label: 'Settings', Icon: IconSettings },
]

export function TerminalLayout() {
  const { user, logout } = useAuth()
  const { data, loading, error } = useData()
  const navigate = useNavigate()
  const [signingOut, setSigningOut] = useState(false)

  const now = useNow()
  const outstanding = data.homework.reduce((sum, hw) => {
    const roster = data.students.filter((s) => s.classId === hw.classId)
    return sum + roster.filter((s) => displayState(hw, s.id, now) !== 'collected').length
  }, 0)
  const overdueCount = data.homework.filter((hw) => isOverdue(hw, now)).length

  async function signOut() {
    setSigningOut(true)
    await logout()
    navigate('/login', { replace: true })
  }

  return (
    <div className="flex min-h-full flex-1 flex-col lg:flex-row">
      {/* ---- rail ---- */}
      <aside
        className="flex shrink-0 flex-col border-b lg:h-screen lg:w-60 lg:border-r lg:border-b-0 lg:sticky lg:top-0"
        style={{ borderColor: 'var(--line)', background: 'var(--panel)' }}
      >
        <div className="flex items-center justify-between gap-3 border-b px-5 py-4 hairline">
          <Logo />
          <button
            type="button"
            className="btn btn-ghost !px-2 lg:hidden"
            onClick={signOut}
            disabled={signingOut}
            aria-label="Sign out"
          >
            <IconLogout />
          </button>
        </div>

        <nav className="flex gap-1 overflow-x-auto p-3 lg:flex-col lg:overflow-visible">
          {NAV.map(({ to, label, Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-2.5 border px-3 py-2 font-mono text-[11px] font-medium tracking-[0.1em] uppercase whitespace-nowrap transition-colors ${
                  isActive ? '' : 'border-transparent'
                }`
              }
              style={({ isActive }) => ({
                background: isActive ? 'var(--panel-3)' : 'transparent',
                borderColor: isActive ? 'var(--line)' : 'transparent',
                color: isActive ? 'var(--ink)' : 'var(--ink-soft)',
              })}
            >
              <Icon />
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto hidden border-t p-5 lg:block hairline">
          <dl className="space-y-2.5">
            <div className="flex items-baseline justify-between gap-3">
              <dt className="label">outstanding</dt>
              <dd className="mono text-sm font-semibold" style={{ color: outstanding ? 'var(--assigned)' : 'var(--ink-faint)' }}>
                {loading ? '—' : outstanding}
              </dd>
            </div>
            <div className="flex items-baseline justify-between gap-3">
              <dt className="label">past due</dt>
              <dd className="mono text-sm font-semibold" style={{ color: overdueCount ? 'var(--overdue)' : 'var(--ink-faint)' }}>
                {loading ? '—' : overdueCount}
              </dd>
            </div>
            <div className="flex items-baseline justify-between gap-3">
              <dt className="label">students</dt>
              <dd className="mono text-sm font-semibold" style={{ color: 'var(--ink-soft)' }}>
                {loading ? '—' : data.students.length}
              </dd>
            </div>
          </dl>

          <div className="mt-5 border-t pt-4 hairline">
            <p className="truncate text-sm font-medium">{user?.name}</p>
            <p className="label mt-0.5 truncate">{user?.username}</p>
            <button type="button" className="btn btn-ghost mt-3 w-full" onClick={signOut} disabled={signingOut}>
              <IconLogout />
              {signingOut ? 'Signing out' : 'Sign out'}
            </button>
          </div>
        </div>
      </aside>

      {/* ---- content ---- */}
      <main className="min-w-0 flex-1">
        {error && (
          <div
            className="border-b px-5 py-3 font-mono text-xs sm:px-8"
            style={{ borderColor: 'var(--overdue)', background: 'var(--overdue-dim)', color: 'var(--overdue)' }}
          >
            {error}
          </div>
        )}
        <Outlet />
      </main>
    </div>
  )
}
