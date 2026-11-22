import { useEffect, useId, useRef, useState } from 'react'

export type SelectOption = { value: string; label: string }

/**
 * The house dropdown. Replaces the native <select>, whose menu is drawn by the
 * device and ignores the theme. Behaves like a listbox: arrows move, Enter or
 * Space picks, Escape closes, typing a letter jumps to the first match.
 */
export function Select({
  value,
  onChange,
  options,
  className,
  ariaLabel,
  fit,
}: {
  value: string
  onChange: (value: string) => void
  options: SelectOption[]
  className?: string
  ariaLabel?: string
  /** Size to the content instead of filling the row. */
  fit?: boolean
}) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(0)
  const rootRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLUListElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const listId = useId()

  const selectedIndex = Math.max(
    0,
    options.findIndex((o) => o.value === value)
  )
  const selected = options.find((o) => o.value === value)

  useEffect(() => {
    if (!open) return
    const onDown = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onDown)
    return () => document.removeEventListener('mousedown', onDown)
  }, [open])

  useEffect(() => {
    if (!open) return
    const el = listRef.current?.children[active] as HTMLElement | undefined
    el?.scrollIntoView({ block: 'nearest' })
  }, [open, active])

  function openList() {
    setActive(selectedIndex)
    setOpen(true)
  }

  function pick(i: number) {
    const o = options[i]
    if (o) onChange(o.value)
    setOpen(false)
    buttonRef.current?.focus()
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (!open) {
      if (['ArrowDown', 'ArrowUp', 'Enter', ' '].includes(e.key)) {
        e.preventDefault()
        openList()
      }
      return
    }
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setActive((i) => Math.min(options.length - 1, i + 1))
        break
      case 'ArrowUp':
        e.preventDefault()
        setActive((i) => Math.max(0, i - 1))
        break
      case 'Home':
        e.preventDefault()
        setActive(0)
        break
      case 'End':
        e.preventDefault()
        setActive(options.length - 1)
        break
      case 'Enter':
      case ' ':
        e.preventDefault()
        pick(active)
        break
      case 'Escape':
        // Stop a surrounding modal from closing too.
        e.preventDefault()
        e.stopPropagation()
        setOpen(false)
        break
      case 'Tab':
        setOpen(false)
        break
      default:
        if (e.key.length === 1) {
          const k = e.key.toLowerCase()
          const i = options.findIndex((o) => o.label.toLowerCase().startsWith(k))
          if (i >= 0) setActive(i)
        }
    }
  }

  return (
    <div ref={rootRef} className={`relative ${fit ? 'inline-block' : 'block w-full'} ${className ?? ''}`} onKeyDown={onKeyDown}>
      <button
        ref={buttonRef}
        type="button"
        className="field select-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={open ? listId : undefined}
        aria-label={ariaLabel}
        onClick={(e) => {
          // A wrapping <label> would otherwise re-dispatch the click.
          e.preventDefault()
          if (open) setOpen(false)
          else openList()
        }}
      >
        <span className="truncate">{selected?.label ?? '—'}</span>
        <svg viewBox="0 0 10 6" className="select-caret" aria-hidden="true" data-open={open}>
          <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      </button>

      {open && (
        <ul ref={listRef} id={listId} role="listbox" className="select-menu" aria-label={ariaLabel}>
          {options.map((o, i) => (
            <li
              key={o.value}
              role="option"
              aria-selected={o.value === value}
              data-active={i === active}
              className="select-option"
              onMouseEnter={() => setActive(i)}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => pick(i)}
            >
              <span className="truncate">{o.label}</span>
              {o.value === value && (
                <svg viewBox="0 0 12 10" className="h-2.5 w-3 shrink-0" aria-hidden="true">
                  <path d="M1 5l3.5 3.5L11 1" fill="none" stroke="currentColor" strokeWidth="1.6" />
                </svg>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
