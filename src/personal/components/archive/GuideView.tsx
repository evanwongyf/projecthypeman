import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import type { Guide } from '../../lib/archive/guide'
import { archiveHref, archivePath, isGuide, trailColor } from '../../lib/archive/topics'
import { noteGuideOpened, useReadGuides } from '../../lib/archive/progress'
import type { ArchiveNode } from '../../lib/archive/topics'
import { GuideBlock, Rich } from './GuideBlocks'
import { MarkRead, ReadTick } from './MarkRead'
import { MakeCards } from './MakeCards'
import { Step, StepRail, useActiveStep } from './Step'
import { ReadAloud } from './ReadAloud'

type Load = { node: ArchiveNode; guide?: Guide; failed?: boolean }

export function GuideView({ trail }: { trail: ArchiveNode[] }) {
  const node = trail[trail.length - 1]
  const parentTrail = trail.slice(0, -1)
  const parent = parentTrail[parentTrail.length - 1]
  const color = trailColor(trail)
  const path = archivePath(trail)
  const isRead = useReadGuides().has(path)

  // Keyed by node so moving to another guide never shows the old one's text.
  const [load, setLoad] = useState<Load>({ node })
  useEffect(() => {
    let live = true
    node.guide?.().then(
      (guide) => live && setLoad({ node, guide }),
      () => live && setLoad({ node, failed: true }),
    )
    window.scrollTo({ top: 0 })
    noteGuideOpened(path)
    return () => {
      live = false
    }
  }, [node, path])
  const guide = load.node === node ? load.guide : undefined
  const failed = load.node === node && load.failed

  const sections = useMemo(() => guide?.sections ?? [], [guide])
  const active = useActiveStep(sections.map((s) => s.id))

  // Neighbouring guides on the same shelf, for the footer.
  const siblings = (parent?.children ?? []).filter(isGuide)
  const at = siblings.indexOf(node)
  const prev = at > 0 ? siblings[at - 1] : undefined
  const next = at >= 0 && at < siblings.length - 1 ? siblings[at + 1] : undefined

  return (
    <div className="flex flex-col gap-6">
      <div>
        <Link to={archiveHref(parentTrail)} className="eyebrow font-bold">
          ← {parent?.title.toLowerCase() ?? 'archive'}
        </Link>
        <h1 className="mt-1 text-3xl sm:text-4xl" style={{ fontFamily: 'var(--font-hero)' }}>
          {node.title}
        </h1>
        <p className="mt-2 max-w-2xl text-sm sm:text-base" style={{ color: 'var(--ink-soft)' }}>
          {guide ? <Rich text={guide.intro} /> : node.blurb}
        </p>
        <p className="eyebrow mt-2 flex flex-wrap items-center gap-2 font-bold">
          <span>
            about {node.minutes ?? 8} minutes{guide ? ` · ${sections.length} parts` : ''}
          </span>
          {isRead && <ReadTick />}
        </p>
      </div>

      {failed && (
        <div className="card-surface rounded-[var(--radius)] p-6 text-center">
          <p className="text-sm" style={{ color: 'var(--ink-soft)' }}>
            This guide could not be loaded. Check your connection and try again.
          </p>
          <button type="button" onClick={() => window.location.reload()} className="btn btn-ghost mt-3 px-4 py-2 text-sm">
            Reload
          </button>
        </div>
      )}

      {!guide && !failed && (
        <div className="flex flex-col gap-3" aria-busy>
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-24 animate-pulse rounded-[var(--radius)]" style={{ background: 'var(--paper-2)' }} />
          ))}
        </div>
      )}

      {guide && (
        <>
          <ReadAloud key={path} guide={guide} title={node.title} color={color} />
          {guide.nutshell && (
            <div className="max-w-3xl rounded-[var(--radius)] border p-4 sm:p-5" style={{ borderColor: 'var(--line)', background: `color-mix(in srgb, ${color} 18%, var(--surface))`, boxShadow: 'var(--shadow-card)' }}>
              <p className="eyebrow font-bold">in a nutshell</p>
              <ul className="mt-2 flex flex-col gap-1.5 text-sm leading-relaxed sm:text-base">
                {guide.nutshell.map((line, i) => (
                  <li key={i} className="flex gap-2">
                    <span aria-hidden className="font-bold">
                      →
                    </span>
                    <span>
                      <Rich text={line} />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="grid gap-8 lg:grid-cols-[13rem_minmax(0,1fr)]">
            <StepRail steps={sections} active={active} label="parts" />

            <div className="flex min-w-0 flex-col gap-12">
              {sections.map((s, i) => (
                <Step key={s.id} n={i + 1} id={s.id} title={s.title} lead={s.lead} color={color} next={sections[i + 1]}>
                  {s.blocks.map((b, j) => (
                    <GuideBlock key={j} block={b} color={color} />
                  ))}
                </Step>
              ))}

              <MarkRead path={path} color={color} />
              <MakeCards guide={guide} title={node.title} color={color} />

              {!!guide.sources?.length && (
                <div className="card-surface rounded-[var(--radius)] p-4 sm:p-5">
                  <p className="eyebrow font-bold">sources and further reading</p>
                  <ul className="mt-2 flex flex-col gap-1.5 text-xs leading-relaxed [overflow-wrap:anywhere]" style={{ color: 'var(--ink-soft)' }}>
                    {guide.sources.map((s, i) => (
                      <li key={i} className="pl-4 -indent-4">
                        <Rich text={s} />
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {(prev || next) && (
                <nav aria-label="More on this shelf" className="grid gap-3 sm:grid-cols-2">
                  {prev ? (
                    <Link to={archiveHref([...parentTrail, prev])} className="card-surface flex flex-col rounded-[var(--radius)] p-4 pointer-coarse:min-h-16">
                      <span className="eyebrow font-bold">← previous</span>
                      <span className="mt-0.5 font-bold">{prev.title}</span>
                    </Link>
                  ) : (
                    <span />
                  )}
                  {next && (
                    <Link to={archiveHref([...parentTrail, next])} className="card-surface flex flex-col rounded-[var(--radius)] p-4 text-right pointer-coarse:min-h-16">
                      <span className="eyebrow font-bold">next →</span>
                      <span className="mt-0.5 font-bold">{next.title}</span>
                    </Link>
                  )}
                </nav>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
