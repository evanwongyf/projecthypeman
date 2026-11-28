import { useEffect } from 'react'
import type { ReactNode } from 'react'
import { IconClose } from './Icons'

export function Modal({
  title,
  eyebrow,
  onClose,
  children,
  footer,
  wide,
  xl,
}: {
  title: string
  eyebrow?: string
  onClose: () => void
  children: ReactNode
  footer?: ReactNode
  wide?: boolean
  /** For long reads with charts, such as theory articles. */
  xl?: boolean
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-4 sm:p-8"
      style={{ background: 'rgba(12, 24, 52, 0.62)' }}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        className={`panel my-auto w-full p-[3px] ${xl ? 'max-w-4xl' : wide ? 'max-w-2xl' : 'max-w-md'}`}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        <header className="titlebar flex items-center justify-between gap-4 px-3 py-2">
          <div>
            {eyebrow && <p className="label mb-0.5">{eyebrow}</p>}
            <h2>{title}</h2>
          </div>
          <button type="button" className="btn" onClick={onClose} aria-label="Close">
            <IconClose />
          </button>
        </header>
        <div className="p-5">{children}</div>
        {footer && <footer className="flex items-center justify-end gap-2 border-t p-5 hairline">{footer}</footer>}
      </div>
    </div>
  )
}
