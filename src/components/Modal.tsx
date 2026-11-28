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
      style={{ background: 'rgba(5, 4, 4, 0.72)' }}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        className={`panel my-auto w-full ${xl ? 'max-w-4xl' : wide ? 'max-w-2xl' : 'max-w-md'}`}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        <header className="flex items-start justify-between gap-4 border-b p-5 hairline">
          <div>
            {eyebrow && <p className="label mb-1">{eyebrow}</p>}
            <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
          </div>
          <button type="button" className="btn btn-ghost -mt-1 -mr-1 !px-2" onClick={onClose} aria-label="Close">
            <IconClose />
          </button>
        </header>
        <div className="p-5">{children}</div>
        {footer && <footer className="flex items-center justify-end gap-2 border-t p-5 hairline">{footer}</footer>}
      </div>
    </div>
  )
}
