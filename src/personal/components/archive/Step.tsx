import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'

export type StepInfo = { id: string; title: string }

export function Step({
  n,
  id,
  title,
  lead,
  next,
  color = 'var(--orange)',
  children,
}: {
  n: number
  id: string
  title: string
  lead?: string
  next?: StepInfo
  color?: string
  children: ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-24 flex flex-col gap-4">
      <div className="flex items-start gap-3">
        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border font-mono text-sm font-bold"
          style={{ borderColor: 'var(--line)', background: color, color: '#1c1410', boxShadow: 'var(--shadow-card)' }}
          aria-hidden
        >
          {n}
        </span>
        <div className="min-w-0">
          <h2 className="text-2xl sm:text-3xl" style={{ fontFamily: 'var(--font-hero)' }}>
            {title}
          </h2>
          {lead && (
            <p className="mt-1 text-sm sm:text-base" style={{ color: 'var(--ink-soft)' }}>
              {lead}
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-4">{children}</div>

      {next && (
        <a href={`#${next.id}`} className="btn btn-ghost self-start px-4 py-2.5 text-sm pointer-coarse:min-h-11">
          Next step: {next.title} ↓
        </a>
      )}
    </section>
  )
}

// Which step is currently in view, so the rail can highlight it.
export function useActiveStep(ids: string[]) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter((e): e is HTMLElement => !!e)
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-15% 0px -70% 0px' },
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join('|')])
  return active
}

// Desktop only: a sticky list of the steps to jump between. On phones the "Next step"
// buttons and the step numbers do this job.
export function StepRail({ steps, active, label = 'steps' }: { steps: StepInfo[]; active: string; label?: string }) {
  return (
    <nav aria-label="Steps" className="sticky top-20 hidden flex-col gap-1 self-start lg:flex">
      <span className="eyebrow mb-1 font-bold">{label}</span>
      {steps.map((s, i) => {
        const on = s.id === active
        return (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="flex items-center gap-2.5 rounded-[var(--radius)] border px-2.5 py-2 text-sm font-bold"
            style={{
              borderColor: on ? 'var(--ink)' : 'transparent',
              background: on ? 'var(--surface)' : 'transparent',
              color: on ? 'var(--ink)' : 'var(--ink-soft)',
              boxShadow: on ? '0 0 0 1px var(--accent)' : 'none',
            }}
          >
            <span className="w-5 shrink-0 text-center font-mono text-xs">{i + 1}</span>
            {s.title}
          </a>
        )
      })}
    </nav>
  )
}
