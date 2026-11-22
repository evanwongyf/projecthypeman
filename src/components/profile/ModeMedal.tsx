import type { ProfileMode } from '../../lib/profile-context'

const LABELS: Record<ProfileMode, string> = { teaching: 'Teaching', running: 'Running' }

/** A small medal: ribbon, disc, then the mode's name. */
export function ModeMedal({ mode }: { mode: ProfileMode }) {
  return (
    <span className="medal" data-mode-medal={mode}>
      <svg viewBox="0 0 14 18" className="h-3.5 w-3 shrink-0" aria-hidden="true">
        <path d="M2 0h4l2 6H4zM8 0h4l-2 6H6z" fill="currentColor" opacity="0.55" />
        <circle cx="7" cy="11.5" r="5" fill="currentColor" />
        <path d="M7 9l.9 1.8 2 .3-1.45 1.4.35 2L7 13.55 5.2 14.5l.35-2L4.1 11.1l2-.3z" fill="var(--panel)" />
      </svg>
      {LABELS[mode]}
    </span>
  )
}
