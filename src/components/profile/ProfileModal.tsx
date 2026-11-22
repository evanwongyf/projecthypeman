import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../lib/auth-context'
import { PROFILE_MODES, useProfile, type ProfileMode } from '../../lib/profile-context'
import { Modal } from '../Modal'
import { LemonAvatar } from './LemonAvatar'
import { ModeMedal } from './ModeMedal'

/** Opened from the lemon in the rail: who you are and which Hypeman you're in. */
export function ProfileModal({ onClose, onSignOut }: { onClose: () => void; onSignOut: () => void }) {
  const { user } = useAuth()
  const { mode, setMode } = useProfile()
  const navigate = useNavigate()

  function choose(next: ProfileMode) {
    setMode(next)
    const home = PROFILE_MODES.find((m) => m.id === next)?.home ?? '/'
    navigate(home)
    onClose()
  }

  return (
    <Modal
      eyebrow="Profile"
      title="Profile options"
      onClose={onClose}
      footer={
        <button type="button" className="btn btn-ghost" onClick={onSignOut}>
          Sign out
        </button>
      }
    >
      <div className="flex items-center gap-4">
        <LemonAvatar className="h-16 w-16 shrink-0" />
        <div className="min-w-0">
          <p className="truncate text-base font-semibold">{user?.name ?? '-'}</p>
          <p className="label mt-1 truncate">{user?.email ?? user?.username}</p>
        </div>
      </div>

      <fieldset className="mt-6">
        <legend className="label mb-2">Mode</legend>
        <div className="grid gap-2">
          {PROFILE_MODES.map((m) => (
            <button key={m.id} type="button" className="pick" aria-pressed={mode === m.id} onClick={() => choose(m.id)}>
              <span className="flex items-center gap-2">
                <ModeMedal mode={m.id} />
              </span>
              <span className="mono mt-1.5 block text-[11px] leading-snug" style={{ color: 'var(--ink-faint)' }}>
                {m.hint}
              </span>
            </button>
          ))}
        </div>
      </fieldset>
    </Modal>
  )
}
