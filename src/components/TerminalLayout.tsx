import { useState } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../lib/auth-context'
import { useData } from '../lib/data-context'
import { isOverdue, displayState } from '../lib/status'
import { useNow } from '../lib/useNow'
import { Logo } from './Logo'
import { IconArchive, IconBook, IconClass, IconHomework, IconLab, IconLogout, IconRoster, IconRun, IconSettings } from './Icons'
import { useProfile } from '../lib/profile-context'
import { LemonAvatar } from './profile/LemonAvatar'
import { ModeMedal } from './profile/ModeMedal'
import { ProfileModal } from './profile/ProfileModal'

const NAV = {
  teaching: [
    { to: '/students', label: 'Students', Icon: IconRoster },
    { to: '/classes', label: 'Classes', Icon: IconClass },
    { to: '/homework', label: 'Homework', Icon: IconHomework },
    { to: '/settings', label: 'Settings', Icon: IconSettings },
  ],
  personal: [
    { to: '/personal/archive', label: 'Archive', Icon: IconBook },
    { to: '/settings', label: 'Settings', Icon: IconSettings },
  ],
  running: [
    { to: '/running', label: 'Runs', Icon: IconRun, end: true },
    { to: '/running/race-lab', label: 'Race Lab', Icon: IconLab },
    { to: '/running/archive', label: 'Archive', Icon: IconArchive },
    { to: '/settings', label: 'Settings', Icon: IconSettings },
  ],
}

export function TerminalLayout() {
  const { user, logout } = useAuth()
  const { data, loading, error } = useData()
  const navigate = useNavigate()
  const [signingOut, setSigningOut] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const { mode } = useProfile()

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
          <div className="flex min-w-0 items-center gap-3 lg:flex-col lg:items-start">
            <button
              type="button"
              className="avatar-btn shrink-0"
              onClick={() => setProfileOpen(true)}
              aria-label="Profile options"
              title="Profile options"
            >
              <LemonAvatar className="h-9 w-9" />
            </button>
            <div className="flex min-w-0 flex-col items-start gap-1.5">
              <Logo />
              <ModeMedal mode={mode} />
            </div>
          </div>
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
          {NAV[mode].map(({ to, label, Icon, ...rest }) => (
            <NavLink
              key={to}
              to={to}
              end={'end' in rest ? rest.end : undefined}
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
          {mode === 'teaching' && (
            <dl className="grid grid-cols-3 gap-3">
              <SideStat label="outstanding" value={loading ? '-' : outstanding} tone={outstanding ? 'var(--assigned)' : 'var(--ink-faint)'} />
              <SideStat label="past due" value={loading ? '-' : overdueCount} tone={overdueCount ? 'var(--overdue)' : 'var(--ink-faint)'} />
              <SideStat label="students" value={loading ? '-' : data.students.length} tone="var(--ink-soft)" />
            </dl>
          )}

          <div className={mode === 'teaching' ? 'mt-5 border-t pt-4 hairline' : ''}>
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

      {profileOpen && (
        <ProfileModal
          onClose={() => setProfileOpen(false)}
          onSignOut={() => {
            setProfileOpen(false)
            void signOut()
          }}
        />
      )}
    </div>
  )
}

function SideStat({ label, value, tone }: { label: string; value: number | string; tone: string }) {
  return (
    <div className="min-w-0">
      <dt className="label truncate">{label}</dt>
      <dd className="mono mt-1 text-sm font-semibold" style={{ color: tone }}>
        {value}
      </dd>
    </div>
  )
}
