import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { IconBack } from './Icons'
import { useProfile, type ProfileMode } from '../lib/profile-context'

/** Each mode has its own phosphor, so the screen tells you where you are. */
const PHOSPHOR: Record<ProfileMode, string> = {
  teaching: 'crt-amber',
  personal: 'crt-green',
  running: 'crt-blue',
}

export function PageHeader({
  eyebrow,
  title,
  meta,
  back,
  actions,
}: {
  eyebrow?: string
  title: string
  meta?: ReactNode
  back?: { to: string; label: string }
  actions?: ReactNode
}) {
  const { mode } = useProfile()
  return (
    <header className="px-5 pt-5 pb-4 sm:px-8 sm:pt-7 sm:pb-5">
      <div className={`crt ${PHOSPHOR[mode]} px-5 py-5 sm:px-7 sm:py-6`}>
        {back && (
          <Link
            to={back.to}
            className="label mb-4 inline-flex items-center gap-1.5 transition-colors hover:text-[var(--ink)]"
          >
            <IconBack className="h-3 w-3" />
            {back.label}
          </Link>
        )}
        <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-4">
          <div className="min-w-0">
            {eyebrow && <p className="label mb-2">&gt; {eyebrow}</p>}
            <h1>{title}</h1>
            {meta && <div className="mt-3 flex flex-wrap items-start gap-x-6 gap-y-2 text-sm">{meta}</div>}
          </div>
          {actions && <div className="flex flex-wrap items-center gap-2">{actions}</div>}
        </div>
      </div>
    </header>
  )
}

export function MetaItem({ label, children }: { label: string; children: ReactNode }) {
  return (
    <span className="inline-flex flex-col gap-0.5">
      <span className="label">{label}</span>
      <span className="mono" style={{ color: 'var(--ink-soft)' }}>{children}</span>
    </span>
  )
}
