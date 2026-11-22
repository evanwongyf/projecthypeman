import { useMemo, useState } from 'react'
import { spellKeys } from '../../lib/sign/letters'
import { handClip } from '../../lib/sign/clip'
import { SignPlayer } from './SignPlayer'

const PACE = [
  { label: 'Slow', ms: 900 },
  { label: 'Steady', ms: 560 },
  { label: 'Fluent', ms: 320 },
]

// Type a word and watch it fingerspelled, with the letter being shown lit up.
export function Fingerspeller({ color }: { color: string }) {
  const [text, setText] = useState('hello')
  const [word, setWord] = useState('hello')
  const [pace, setPace] = useState(1)
  const [play, setPlay] = useState(0)
  const [at, setAt] = useState(-1)

  const plan = useMemo(() => spellKeys(word, PACE[pace].ms, Math.round(PACE[pace].ms * 0.4)), [word, pace])
  const clip = useMemo(() => handClip(plan.keys.length ? plan.keys : spellKeys('a').keys), [plan])
  const skipped = /[^a-z\s]/i.test(word)

  function spell(e?: React.FormEvent) {
    e?.preventDefault()
    setWord(text.trim().slice(0, 40) || 'hello')
    setPlay((n) => n + 1)
  }

  function onTime(t: number) {
    let i = -1
    plan.starts.forEach((s, j) => {
      if (t >= s) i = j
    })
    setAt(i)
  }

  return (
    <div className="card-surface flex max-w-3xl flex-col gap-4 rounded-[var(--radius)] p-4 sm:flex-row">
      <div className="mx-auto w-full max-w-64 shrink-0">
        <SignPlayer clip={clip} label={`"${word}" fingerspelled`} play={play} onTime={onTime} onEnd={() => setAt(-1)} background={`color-mix(in srgb, ${color} 14%, var(--surface))`} />
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-3">
        <form onSubmit={spell} className="flex gap-2">
          <label className="sr-only" htmlFor="fs-word">
            Word to fingerspell
          </label>
          <input id="fs-word" value={text} onChange={(e) => setText(e.target.value)} maxLength={40} className="input-field min-w-0 flex-1" placeholder="Type a word or your name" autoComplete="off" />
          <button type="submit" className="btn btn-primary px-4 py-2 text-sm">
            Spell it
          </button>
        </form>
        <div className="flex flex-wrap items-center gap-1.5" role="radiogroup" aria-label="Pace">
          {PACE.map((p, i) => (
            <button
              key={p.label}
              type="button"
              role="radio"
              aria-checked={pace === i}
              onClick={() => setPace(i)}
              className="rounded-full border px-3 py-1 text-xs font-bold pointer-coarse:min-h-10"
              style={{ borderColor: 'var(--line)', background: pace === i ? 'var(--ink)' : 'var(--surface)', color: pace === i ? 'var(--surface)' : 'var(--ink)' }}
            >
              {p.label}
            </button>
          ))}
          <button type="button" onClick={() => setPlay((n) => n + 1)} className="btn btn-ghost ml-auto px-3 py-1 text-xs">
            ↻ Replay
          </button>
        </div>
        <div className="flex flex-wrap gap-1" aria-live="polite">
          {plan.letters.map((ch, i) => (
            <span
              key={i}
              className="flex h-9 w-8 items-center justify-center rounded-[var(--radius)] border font-mono text-base font-bold transition-transform"
              style={{
                borderColor: 'var(--line)',
                background: i === at ? color : 'var(--surface)',
                transform: i === at ? 'translateY(-3px)' : 'none',
              }}
            >
              {ch}
            </span>
          ))}
        </div>
        <p className="text-xs leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
          A repeated letter, as in <b>LL</b>, slides a little to the side so the watcher can see there are two.
          {skipped ? ' Numbers and punctuation are skipped: spell them with number signs instead.' : ''}
        </p>
      </div>
    </div>
  )
}
