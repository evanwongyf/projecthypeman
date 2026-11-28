import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { MetaItem, PageHeader } from '../components/PageHeader'
import { NotFound } from './NotFound'
import { CHAPTER, DECKS, findDeck, type Deck, type DeckKind } from '../lessons/decks'
import { Player, deckStars, lastSlide, useLessonFonts } from '../lessons/Player'
import { Backdrop } from '../lessons/scenes'
import { Sprite } from '../lessons/pixel'
import '../lessons/lessons.css'

const GROUPS: { kind: DeckKind; title: string; body: string }[] = [
  { kind: 'class', title: 'Class slides', body: 'Present on the board. Story beats, teaching cards and drag-and-drop activities, with notes and questions to ask.' },
  { kind: 'story', title: 'Story run-through', body: 'The whole chapter told as one adventure. Good for a hook, a recap or a reading corner.' },
  { kind: 'student', title: 'Student packages', body: 'Self-paced quests with on-screen number pads, instant feedback and stars.' },
  { kind: 'tool', title: 'Toolkit', body: 'One-screen manipulatives to pull up in any lesson.' },
]

/** The lessons library, or a single deck when the address names one. */
export function LessonsPage() {
  const { deckId } = useParams()
  if (deckId) {
    const deck = findDeck(deckId)
    if (!deck) return <NotFound />
    return <Player deck={deck} key={deck.id} />
  }
  return <Library />
}

function Library() {
  useLessonFonts()
  const [section, setSection] = useState<string | null>(null)
  const activities = DECKS.reduce((n, d) => n + d.slides.length, 0)
  const shown = DECKS.filter((d) => !section || d.sections.includes(section))

  return (
    <>
      <PageHeader
        eyebrow="Teaching assets"
        title="Lessons"
        meta={
          <>
            <MetaItem label="chapter">
              {CHAPTER.level} · {CHAPTER.title}
            </MetaItem>
            <MetaItem label="decks">{DECKS.filter((d) => d.kind !== 'tool').length}</MetaItem>
            <MetaItem label="tools">{DECKS.filter((d) => d.kind === 'tool').length}</MetaItem>
            <MetaItem label="slides">{activities}</MetaItem>
          </>
        }
      />

      <div className="p-5 sm:p-8">
        <section className="panel mb-8 p-5">
          <p className="label">Chapter 1 · learning outcomes</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <button type="button" className={`chip ${section === null ? 'chip-assigned' : 'chip-neutral'}`} onClick={() => setSection(null)}>
              all
            </button>
            {CHAPTER.sections.map((s) => (
              <button
                type="button"
                key={s.id}
                className={`chip ${section === s.id ? 'chip-assigned' : 'chip-neutral'}`}
                onClick={() => setSection(section === s.id ? null : s.id)}
                title={s.name}
              >
                {s.id} · {s.name}
              </button>
            ))}
          </div>
        </section>

        {GROUPS.map((g) => {
          const decks = shown.filter((d) => d.kind === g.kind)
          if (!decks.length) return null
          return (
            <section key={g.kind} className="mb-10">
              <div className="mb-4">
                <h2 className="text-lg font-semibold tracking-tight">{g.title}</h2>
                <p className="mt-1 text-sm" style={{ color: 'var(--ink-soft)' }}>
                  {g.body}
                </p>
              </div>
              <div className={`grid gap-4 ${g.kind === 'tool' ? 'sm:grid-cols-2 lg:grid-cols-4' : 'sm:grid-cols-2 xl:grid-cols-3'}`}>
                {decks.map((d) => (
                  <DeckCard key={d.id} deck={d} />
                ))}
              </div>
            </section>
          )
        })}
      </div>
    </>
  )
}

function DeckCard({ deck }: { deck: Deck }) {
  const at = lastSlide(deck.id)
  const stars = deck.kind === 'student' ? deckStars(deck) : null
  const tool = deck.kind === 'tool'
  return (
    <Link to={`/lessons/${deck.id}`} className="panel lx-deckcard group block overflow-hidden">
      <div className={`lx-cover ${tool ? 'lx-cover-sm' : ''}`}>
        <Backdrop scene={deck.cover.scene} quiet />
        <div className="lx-cover-sprites">
          {deck.cover.sprites.map((s, i) => (
            <Sprite key={i} name={s} size={tool ? 2.6 : i === 0 ? 5 : 3} />
          ))}
        </div>
        {!tool && <span className="lx-cover-title">{deck.title}</span>}
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-semibold">{deck.title}</h3>
          {stars && stars.got > 0 && (
            <span className="label whitespace-nowrap" style={{ color: 'var(--assigned)' }}>
              ★ {stars.got}/{stars.max}
            </span>
          )}
        </div>
        <p className="mt-1.5 text-sm" style={{ color: 'var(--ink-soft)' }}>
          {deck.blurb}
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-1.5">
          {deck.sections.map((s) => (
            <span key={s} className="chip chip-neutral">
              {s}
            </span>
          ))}
          {deck.refs.map((r) => (
            <span key={r} className="label">
              {r}
            </span>
          ))}
        </div>
        {!tool && (
          <div className="mt-3 flex items-center justify-between">
            <span className="label">
              {deck.slides.length} slides · ~{deck.minutes} min
            </span>
            <span className="label" style={{ color: 'var(--accent)' }}>
              {at > 0 ? `resume at ${at + 1} →` : deck.kind === 'student' ? 'start quest →' : 'present →'}
            </span>
          </div>
        )}
      </div>
    </Link>
  )
}
