import { useMemo, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { usePageBreadcrumb } from '../lib/breadcrumbContext'
import { norm, tokenize } from '../lib/search'
import { ARCHIVE_TOPICS, archiveHref, archivePath, countGuides, countRead, isGuide, isReady, resolvePath, trailColor, trailGlyph } from '../lib/archive/topics'
import { useReadGuides, useRecentGuides } from '../lib/archive/progress'
import type { ArchiveNode } from '../lib/archive/topics'
import { GuideView } from '../components/archive/GuideView'
import { ReferencesWalkthrough } from '../components/archive/ReferencesWalkthrough'
import { ReadTick } from '../components/archive/MarkRead'

// Serves every archive address: the shelf of topics, any collection inside it however
// deep, and the guides at the ends.
export function ArchivePage() {
  const splat = useParams()['*'] ?? ''
  const slugs = splat.split('/').filter(Boolean)
  const navigate = useNavigate()
  // Formula 1 used to be its own shelf at /archive/f1; it now lives under Sports.
  const moved = slugs[0] === 'f1'
  const trail = slugs.length ? resolvePath(slugs) : []

  const crumbs = useMemo(
    () =>
      trail && trail.length
        ? [
            { label: 'Archive', onClick: () => navigate('/personal/archive') },
            ...trail.map((n, i) => (i === trail.length - 1 ? { label: n.title } : { label: n.title, onClick: () => navigate(archiveHref(trail.slice(0, i + 1))) })),
          ]
        : [],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [splat, navigate],
  )
  usePageBreadcrumb(crumbs)

  const node = trail?.[trail.length - 1]

  if (moved) return <Navigate to={`/personal/archive/sports/${slugs.join('/')}`} replace />

  if (!trail || (node && !isReady(node))) {
    const back = trail ? archiveHref(trail.slice(0, -1)) : '/personal/archive'
    return (
      <div className="card-surface rounded-[var(--radius)] p-6 text-center">
        <p className="text-sm" style={{ color: 'var(--ink-soft)' }}>
          {trail ? `${node!.title} is coming soon.` : 'Nothing in the archive at this address.'}
        </p>
        <Link to={back} className="eyebrow mt-3 inline-block font-bold underline">
          go back
        </Link>
      </div>
    )
  }

  if (node?.custom === 'references') return <ReferencesWalkthrough />
  if (node && isGuide(node)) return <GuideView key={splat} trail={trail} />
  return <CollectionView key={splat} trail={trail} />
}

function CollectionView({ trail }: { trail: ArchiveNode[] }) {
  const node = trail[trail.length - 1]
  const children = node ? (node.children ?? []) : ARCHIVE_TOPICS
  const [query, setQuery] = useState('')
  // The whole tree is a few hundred nodes, so filtering on every keystroke is cheap.
  const matches = findGuides(children, trail, query)

  const shelves = children.filter((c) => !isGuide(c) && (c.children?.length || !node))
  const guides = children.filter((c) => isGuide(c) || (!c.children && node))
  const total = node ? countGuides(node) : ARCHIVE_TOPICS.reduce((n, t) => n + countGuides(t), 0)
  const readSet = useReadGuides()
  const done = node ? countRead(node, archivePath(trail), readSet) : ARCHIVE_TOPICS.reduce((n, t) => n + countRead(t, t.slug, readSet), 0)
  const parent = trail.slice(0, -1)

  return (
    <div className="flex flex-col gap-6">
      <div className="crt crt-green px-5 py-5 sm:px-7 sm:py-6">
        {node ? (
          <Link to={archiveHref(parent)} className="eyebrow font-bold">
            ← {parent.length ? parent[parent.length - 1].title.toLowerCase() : 'archive'}
          </Link>
        ) : (
          <span className="eyebrow font-bold">archive</span>
        )}
        <h1 className="mt-1 text-3xl sm:text-4xl" style={{ fontFamily: 'var(--font-hero)' }}>
          {node ? node.title : 'Skills and techniques'}
        </h1>
        <p className="mt-2 max-w-2xl text-sm sm:text-base" style={{ color: 'var(--ink-soft)' }}>
          {node ? node.blurb : 'Guides on how to study and how to teach, from the theory behind learning to step by step techniques. Pick a topic to start, or search every guide.'}
        </p>
        <p className="eyebrow mt-2 font-bold">
          {total} guide{total === 1 ? '' : 's'} ready{done > 0 ? ` · ${done} read` : ''}
        </p>
      </div>

      <label className="block max-w-xl">
        <span className="sr-only">Search {node ? node.title : 'the archive'}</span>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={node ? `Search ${node.title.toLowerCase()}…` : 'Search the archive… try “feynman” or “dyslexia”'}
          className="input-field w-full"
        />
      </label>

      {query.trim() ? (
        <SearchResults matches={matches} />
      ) : (
        <>
          {!node && <StartHere />}
          {/* Loose guides at a level are usually introductions, so they come first. */}
          {guides.length > 0 && (
            <ol className="flex flex-col gap-3">
              {guides.map((g, i) => (
                <GuideRow key={g.slug} trail={[...trail, g]} n={i + 1} />
              ))}
            </ol>
          )}
          {shelves.length > 0 &&
            (shelves.some((c) => c.group) ? (
              // Shelves with a group heading are listed under it, in the order the groups first appear.
              Array.from(new Set(shelves.map((c) => c.group ?? ''))).map((g) => (
                <section key={g} className="flex flex-col gap-3">
                  {g && (
                    <h2 className="text-xl" style={{ fontFamily: 'var(--font-hero)' }}>
                      {g}
                    </h2>
                  )}
                  <div className="grid gap-4 sm:grid-cols-2">
                    {shelves
                      .filter((c) => (c.group ?? '') === g)
                      .map((c) => (
                        <ShelfCard key={c.slug} trail={[...trail, c]} />
                      ))}
                  </div>
                </section>
              ))
            ) : (
              <div className="grid gap-4 sm:grid-cols-2">
                {shelves.map((c) => (
                  <ShelfCard key={c.slug} trail={[...trail, c]} />
                ))}
              </div>
            ))}
        </>
      )}
    </div>
  )
}

const soft = { color: 'var(--ink-soft)' }

// A few entry points on the archive's front page, for learners and for teachers.
const STARTERS = [
  { path: 'exams/revision-methods', who: 'for learners' },
  { path: 'memory/active-recall', who: 'for learners' },
  { path: 'habits/procrastination', who: 'for learners' },
  { path: 'teaching/start-here', who: 'for teachers' },
]

function StartHere() {
  const recent = useRecentGuides()
  // Once someone has been reading, their recent guides replace the generic suggestions.
  const items = recent.length ? recent.map((path) => ({ path, who: '' })) : STARTERS
  return (
    <section aria-label={recent.length ? 'Continue reading' : 'Good places to start'}>
      <p className="eyebrow mb-2 font-bold">{recent.length ? 'continue reading' : 'good places to start'}</p>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ path, who }) => {
          const trail = resolvePath(path.split('/'))
          if (!trail) return null
          const n = trail[trail.length - 1]
          return (
            <Link
              key={path}
              to={archiveHref(trail)}
              className="flex flex-col gap-0.5 rounded-[var(--radius)] border p-3.5 pointer-coarse:min-h-16"
              style={{ borderColor: 'var(--line)', background: `color-mix(in srgb, ${trailColor(trail)} 20%, var(--surface))` }}
            >
              <span className="text-[11px] font-bold uppercase" style={soft}>
                {trail[0].title}
                {who ? ` · ${who}` : trail.length > 2 ? ` · ${trail[trail.length - 2].title}` : ''}
              </span>
              <span className="font-bold">{n.title} →</span>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

function Soon() {
  return (
    <span className="rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase" style={{ borderColor: 'var(--ink-soft)', color: 'var(--ink-soft)' }}>
      coming soon
    </span>
  )
}

function ShelfCard({ trail }: { trail: ArchiveNode[] }) {
  const node = trail[trail.length - 1]
  const ready = isReady(node)
  const count = countGuides(node)
  const all = countAll(node)
  const done = countRead(node, archivePath(trail), useReadGuides())
  const body = (
    <>
      <span
        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[var(--radius)] border text-2xl font-bold"
        style={{ borderColor: 'var(--line)', background: trailColor(trail), color: '#1c1410', boxShadow: 'var(--shadow-card)' }}
        aria-hidden
      >
        {trailGlyph(trail)}
      </span>
      <span className="min-w-0 flex-1">
        <span className="flex flex-wrap items-center gap-2">
          <span className="text-xl font-bold">{node.title}</span>
          {!ready && <Soon />}
        </span>
        <span className="mt-1 block text-sm" style={soft}>
          {node.blurb}
        </span>
        {ready && (
          <span className="eyebrow mt-2 block font-bold">
            {count} guide{count === 1 ? '' : 's'}
            {all > count ? ` · ${all - count} coming` : ''}
            {done > 0 ? ` · ${done} read` : ''}
          </span>
        )}
      </span>
      {ready && (
        <span aria-hidden className="self-center text-xl font-bold">
          →
        </span>
      )}
    </>
  )
  return ready ? (
    <Link to={archiveHref(trail)} className="card-surface flex items-start gap-4 rounded-[var(--radius)] p-5 pointer-coarse:min-h-24">
      {body}
    </Link>
  ) : (
    <div className="flex items-start gap-4 rounded-[var(--radius)] border border-dashed p-5 opacity-70" style={{ borderColor: 'var(--ink-soft)' }} aria-disabled>
      {body}
    </div>
  )
}

function GuideRow({ trail, n, path }: { trail: ArchiveNode[]; n?: number; path?: string }) {
  const node = trail[trail.length - 1]
  const ready = isGuide(node)
  const isRead = useReadGuides().has(archivePath(trail))
  const body = (
    <>
      <span
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border font-mono text-sm font-bold"
        style={{ borderColor: 'var(--line)', background: ready ? trailColor(trail) : 'transparent', color: '#1c1410' }}
        aria-hidden
      >
        {n ?? trailGlyph(trail)}
      </span>
      <span className="min-w-0 flex-1">
        {path && (
          <span className="eyebrow block font-bold" style={soft}>
            {path}
          </span>
        )}
        <span className="flex flex-wrap items-center gap-2">
          <span className="text-lg font-bold">{node.title}</span>
          {!ready && <Soon />}
          {isRead && <ReadTick />}
        </span>
        <span className="mt-0.5 block text-sm" style={soft}>
          {node.blurb}
        </span>
        {ready && <span className="eyebrow mt-1.5 block font-bold">about {node.minutes ?? 8} min</span>}
      </span>
      {ready && (
        <span aria-hidden className="self-center text-xl font-bold">
          →
        </span>
      )}
    </>
  )
  return (
    <li>
      {ready ? (
        <Link to={archiveHref(trail)} className="card-surface flex items-start gap-4 rounded-[var(--radius)] p-4 sm:p-5 pointer-coarse:min-h-20">
          {body}
        </Link>
      ) : (
        <div className="flex items-start gap-4 rounded-[var(--radius)] border border-dashed p-4 opacity-70 sm:p-5" style={{ borderColor: 'var(--ink-soft)' }} aria-disabled>
          {body}
        </div>
      )}
    </li>
  )
}

function SearchResults({ matches }: { matches: ArchiveNode[][] }) {
  if (!matches.length)
    return (
      <p className="text-sm" style={soft}>
        No guides match that yet.
      </p>
    )
  return (
    <ol className="flex flex-col gap-3">
      {matches.map((t) => (
        <GuideRow key={archiveHref(t)} trail={t} path={t.slice(0, -1).map((n) => n.title).join(' › ')} />
      ))}
    </ol>
  )
}

// Every guide or planned guide somewhere under a node.
function countAll(node: ArchiveNode): number {
  if (!node.children) return 1
  return node.children.reduce((n, c) => n + countAll(c), 0)
}

// Guides under `nodes` whose title, blurb, tags or shelf names contain every word of the
// query. Ready guides come first, then titles that match before ones that only match
// elsewhere.
function findGuides(nodes: ArchiveNode[], base: ArchiveNode[], query: string): ArchiveNode[][] {
  const words = tokenize(query)
  if (!words.length) return []
  const hits: { trail: ArchiveNode[]; score: number }[] = []
  const walk = (list: ArchiveNode[], trail: ArchiveNode[]) => {
    for (const n of list) {
      const next = [...trail, n]
      if (n.children) {
        walk(n.children, next)
        continue
      }
      const title = norm(n.title)
      const rest = norm([n.blurb, ...(n.tags ?? []), ...next.slice(0, -1).map((p) => p.title)].join(' '))
      if (!words.every((w) => title.includes(w) || rest.includes(w))) continue
      const score = (isGuide(n) ? 10 : 0) + words.filter((w) => title.includes(w)).length
      hits.push({ trail: next, score })
    }
  }
  walk(nodes, base)
  return hits.sort((a, b) => b.score - a.score).slice(0, 40).map((h) => h.trail)
}
