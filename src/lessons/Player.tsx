import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTabVisible } from '../lib/tabs-context'
import { Sprite } from './pixel'
import { Btn, Confetti, SlideCtx, type SlideApi } from './kit'
import { Backdrop } from './scenes'
import type { Deck } from './decks'
import { isMuted, setMuted, sfx } from './sfx'
import './lessons.css'

const POS_KEY = 'hypeman.lessons.pos.v1'
const SCORE_KEY = 'hypeman.lessons.scores.v1'

function load<T>(key: string, fallback: T): T {
  try {
    return { ...fallback, ...JSON.parse(localStorage.getItem(key) ?? '{}') }
  } catch {
    return fallback
  }
}
function save(key: string, patch: Record<string, unknown>) {
  try {
    localStorage.setItem(key, JSON.stringify({ ...load(key, {}), ...patch }))
  } catch {
    /* fine */
  }
}

export function lastSlide(deckId: string): number {
  return load<Record<string, number>>(POS_KEY, {})[deckId] ?? 0
}

export function deckStars(deck: Deck): { got: number; max: number } {
  const s = load<Record<string, Record<string, number>>>(SCORE_KEY, {})[deck.id] ?? {}
  const scored = deck.slides.filter((x) => x.scored)
  return { got: scored.reduce((sum, x) => sum + starsFor(s[x.id]), 0), max: scored.length * 3 }
}

function starsFor(score: number | undefined) {
  if (score === undefined) return 0
  return score >= 0.95 ? 3 : score >= 0.55 ? 2 : 1
}

const FONT_HREF = 'https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400;500;600;700&family=Press+Start+2P&display=swap'
export function useLessonFonts() {
  useEffect(() => {
    if (document.querySelector(`link[data-lessons-font]`)) return
    const l = document.createElement('link')
    l.rel = 'stylesheet'
    l.href = FONT_HREF
    l.dataset.lessonsFont = ''
    document.head.appendChild(l)
  }, [])
}

export function Player({ deck }: { deck: Deck }) {
  useLessonFonts()
  const visible = useTabVisible()
  const student = deck.kind === 'student'
  const isTool = deck.kind === 'tool'
  const total = deck.slides.length + (student ? 1 : 0)
  const [idx, setIdx] = useState(() => Math.min(lastSlide(deck.id), total - 1))
  const [scores, setScores] = useState<Record<string, number>>(() => load<Record<string, Record<string, number>>>(SCORE_KEY, {})[deck.id] ?? {})
  const [notes, setNotes] = useState(!student && !isTool)
  const [overview, setOverview] = useState(false)
  const [muted, setMute] = useState(isMuted())
  const [full, setFull] = useState(false)
  const [nonce, setNonce] = useState(0)
  const root = useRef<HTMLDivElement>(null)
  const stepFn = useRef<(() => boolean) | null>(null)

  const slide = deck.slides[idx]
  const onSummary = student && idx === deck.slides.length

  const go = useCallback(
    (i: number) => {
      const n = Math.max(0, Math.min(total - 1, i))
      if (n !== idx) sfx.whoosh()
      setIdx(n)
      stepFn.current = null
      save(POS_KEY, { [deck.id]: n })
    },
    [total, deck.id, idx]
  )

  const next = useCallback(() => {
    if (stepFn.current?.()) return
    go(idx + 1)
  }, [go, idx])
  const prev = useCallback(() => go(idx - 1), [go, idx])

  const onStep = useCallback((fn: (() => boolean) | null) => {
    stepFn.current = fn
  }, [])

  const report = useCallback(
    (score: number) => {
      if (!slide) return
      setScores((s) => {
        // Keep the best attempt.
        const best = Math.max(score, s[slide.id] ?? 0)
        const nextScores = { ...s, [slide.id]: best }
        const all = load<Record<string, Record<string, number>>>(SCORE_KEY, {})
        all[deck.id] = nextScores
        try {
          localStorage.setItem(SCORE_KEY, JSON.stringify(all))
        } catch {
          /* fine */
        }
        return nextScores
      })
    },
    [slide, deck.id]
  )

  const api: SlideApi = useMemo(() => ({ student, active: visible && !overview, report, onStep, next }), [student, visible, overview, report, onStep, next])

  const toggleFull = useCallback(() => {
    if (document.fullscreenElement) void document.exitFullscreen()
    else void root.current?.requestFullscreen?.()
  }, [])

  useEffect(() => {
    const f = () => setFull(document.fullscreenElement === root.current)
    document.addEventListener('fullscreenchange', f)
    return () => document.removeEventListener('fullscreenchange', f)
  }, [])

  // Keyboard and presentation clickers.
  useEffect(() => {
    if (!visible) return
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement
      if (t.closest('input, textarea, select, [contenteditable="true"]')) return
      if (e.ctrlKey || e.metaKey || e.altKey) return
      const k = e.key
      if (overview) {
        if (k === 'Escape' || k === 'g') setOverview(false)
        return
      }
      if (k === 'ArrowRight' || k === 'PageDown' || k === ' ' || k === 'Enter') {
        if (k === 'Enter' && t.closest('button')) return
        e.preventDefault()
        next()
      } else if (k === 'ArrowLeft' || k === 'PageUp' || k === 'Backspace') {
        e.preventDefault()
        prev()
      } else if (k === 'Home') go(0)
      else if (k === 'End') go(total - 1)
      else if (k === 'f') toggleFull()
      else if (k === 'n') setNotes((v) => !v)
      else if (k === 'g') setOverview(true)
      else if (k === 'r') setNonce((x) => x + 1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [visible, overview, next, prev, go, total, toggleFull])

  const stars = deck.slides.filter((s) => s.scored).reduce((sum, s) => sum + starsFor(scores[s.id]), 0)
  const maxStars = deck.slides.filter((s) => s.scored).length * 3

  return (
    <div ref={root} className={`lx-root ${full ? 'is-full' : ''}`}>
      <div className="lx-topbar">
        <Link to="/lessons" className="lx-top-back">
          ← lessons
        </Link>
        <div className="lx-top-title">
          <span className={`lx-kind lx-kind-${deck.kind}`}>{deck.kind === 'class' ? 'class slides' : deck.kind === 'student' ? 'student package' : deck.kind === 'story' ? 'story' : 'tool'}</span>
          <b>{deck.title}</b>
          {!isTool && (
            <span className="lx-top-count">
              {idx + 1} / {total}
            </span>
          )}
        </div>
        <div className="lx-top-actions">
          {student && (
            <span className="lx-top-stars">
              <Sprite name="star" size={1} /> {stars} / {maxStars}
            </span>
          )}
          <button type="button" className="lx-icon-btn" title="Restart this slide (R)" onClick={() => setNonce((x) => x + 1)}>
            ↺
          </button>
          {!isTool && (
            <button type="button" className="lx-icon-btn" title="All slides (G)" onClick={() => setOverview((v) => !v)}>
              ▦
            </button>
          )}
          {!isTool && !student && (
            <button type="button" className={`lx-icon-btn ${notes ? 'is-on' : ''}`} title="Teacher notes (N)" onClick={() => setNotes((v) => !v)}>
              ✎
            </button>
          )}
          <button
            type="button"
            className="lx-icon-btn"
            title={muted ? 'Sound off' : 'Sound on'}
            onClick={() => {
              setMuted(!muted)
              setMute(!muted)
            }}
          >
            {muted ? '🔇' : '🔊'}
          </button>
          <button type="button" className="lx-icon-btn" title="Fullscreen (F)" onClick={toggleFull}>
            ⛶
          </button>
        </div>
      </div>

      <div className="lx-frame">
        <div className="lx-stage">
          <SlideCtx.Provider value={api}>
            <div className="lx-slide" key={`${idx}-${nonce}`}>
              {onSummary ? <Summary deck={deck} scores={scores} onReplay={() => go(1)} /> : slide.render()}
            </div>
          </SlideCtx.Provider>
          {overview && (
            <div className="lx-overview" onClick={() => setOverview(false)}>
              <div className="lx-overview-grid">
                {deck.slides.map((s, i) => (
                  <button
                    type="button"
                    key={s.id}
                    className={`lx-overview-item ${i === idx ? 'is-on' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation()
                      go(i)
                      setOverview(false)
                    }}
                  >
                    <span className="lx-overview-n">{i + 1}</span>
                    <span>{s.title}</span>
                    {s.ref && <small>{s.ref}</small>}
                    {student && s.scored && <small>{'★'.repeat(starsFor(scores[s.id])) || '·'}</small>}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {!isTool && (
          <div className="lx-nav">
            <button type="button" className="lx-nav-btn" onClick={prev} disabled={idx === 0} aria-label="Previous slide">
              ◀
            </button>
            <div className="lx-progress">
              {[...Array(total)].map((_, i) => {
                const s = deck.slides[i]
                const done = student && s?.scored && scores[s.id] !== undefined
                return <button type="button" key={i} className={`lx-progress-seg ${i === idx ? 'is-on' : ''} ${i < idx ? 'is-past' : ''} ${done ? 'is-done' : ''}`} onClick={() => go(i)} aria-label={`Slide ${i + 1}`} />
              })}
            </div>
            <button type="button" className="lx-nav-btn lx-nav-next" onClick={next} disabled={idx === total - 1} aria-label="Next slide">
              ▶
            </button>
          </div>
        )}
      </div>

      {notes && !full && slide && (
        <div className="lx-notes">
          <div className="lx-notes-head">
            <b>{slide.title}</b>
            {slide.ref && <span className="lx-ref">{slide.ref}</span>}
            <span className="lx-keys">→ next · ← back · F fullscreen · G slides · N notes · R restart slide</span>
          </div>
          {(slide.notes?.length || slide.ask?.length) ? (
            <div className="lx-notes-body">
              {slide.notes && (
                <ul>
                  {slide.notes.map((n, i) => (
                    <li key={i}>{n}</li>
                  ))}
                </ul>
              )}
              {slide.ask && (
                <div>
                  <span className="lx-ask">Ask</span>
                  <ul>
                    {slide.ask.map((n, i) => (
                      <li key={i}>“{n}”</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <p className="lx-dim-note">No notes for this slide.</p>
          )}
        </div>
      )}
    </div>
  )
}

function Summary({ deck, scores, onReplay }: { deck: Deck; scores: Record<string, number>; onReplay: () => void }) {
  const scored = deck.slides.filter((s) => s.scored)
  const got = scored.reduce((sum, s) => sum + starsFor(scores[s.id]), 0)
  const max = scored.length * 3
  const pct = max ? got / max : 0
  return (
    <div className="lx-summary">
      <Backdrop scene="space" />
      <Confetti n={48} />
      <h2 className="lx-title">Quest complete!</h2>
      <div className="lx-stars-row">
        {[0, 1, 2].map((k) => (
          <Sprite key={k} name="star" size={6} style={{ opacity: pct > k / 3 ? 1 : 0.2 }} />
        ))}
      </div>
      <p className="lx-sub">
        {got} of {max} stars
      </p>
      <div className="lx-summary-list">
        {scored.map((s) => (
          <span key={s.id} className="lx-summary-item">
            {s.title}
            <b>{scores[s.id] === undefined ? 'skipped' : '★'.repeat(starsFor(scores[s.id]))}</b>
          </span>
        ))}
      </div>
      <Btn tone="go" big onClick={onReplay}>
        play again
      </Btn>
    </div>
  )
}
