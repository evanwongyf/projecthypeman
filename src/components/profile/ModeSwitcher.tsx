import { useEffect, useRef, useState } from 'react'
import { PROFILE_MODES } from '../../lib/profile-context'
import { useTabs } from '../../lib/tabs-context'
import { IconCheck } from '../Icons'
import { ModeMedal } from './ModeMedal'

/**
 * The mode badge under the wordmark, as a dropdown. Picking a mode brings
 * back that mode's tabs exactly as you left them (or its home page, first time).
 */
export function ModeSwitcher() {
  const { mode, switchMode, state } = useTabs()
  const [open, setOpen] = useState(false)
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onDown = (e: MouseEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div ref={root} className="relative">
      <button
        type="button"
        className="mode-switch inline-flex items-center gap-1.5"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        title="Switch mode"
      >
        <ModeMedal mode={mode} />
        <svg viewBox="0 0 10 6" className="select-caret" data-open={open} aria-hidden="true">
          <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      </button>

      {open && (
        <ul role="menu" className="select-menu !w-64 !whitespace-normal">
          {PROFILE_MODES.map((m) => {
            const tabs = state[m.id].tabs.length
            return (
              <li key={m.id} role="none">
                <button
                  type="button"
                  role="menuitemradio"
                  aria-checked={mode === m.id}
                  className="select-option w-full !items-start !whitespace-normal text-left"
                  data-active={mode === m.id}
                  onClick={() => {
                    setOpen(false)
                    switchMode(m.id)
                  }}
                >
                  <span className="min-w-0">
                    <ModeMedal mode={m.id} />
                    <span className="mt-1 block text-[11px] leading-snug" style={{ color: 'var(--ink-faint)' }}>
                      {m.hint}
                      {tabs > 0 && ` · ${tabs} tab${tabs === 1 ? '' : 's'} open`}
                    </span>
                  </span>
                  {mode === m.id && <IconCheck className="mt-0.5 h-3.5 w-3.5 shrink-0" />}
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
