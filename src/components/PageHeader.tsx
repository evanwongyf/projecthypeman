import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { IconBack } from './Icons'

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
  return (
    <header className="border-b px-5 py-6 sm:px-8 sm:py-8 hairline">
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
          {eyebrow && <p className="label mb-2">{eyebrow}</p>}
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h1>
          {meta && <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm">{meta}</div>}
        </div>
        {actions && <div className="flex flex-wrap items-center gap-2">{actions}</div>}
      </div>
    </header>
  )
}

export function MetaItem({ label, children }: { label: string; children: ReactNode }) {
  return (
    <span className="inline-flex items-baseline gap-2">
      <span className="label">{label}</span>
      <span style={{ color: 'var(--ink-soft)' }}>{children}</span>
    </span>
  )
}
