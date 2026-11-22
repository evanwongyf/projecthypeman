import { useMemo, useState } from 'react'
import { PHRASES, WORDS, sequenceKeys } from '../../lib/sign/words'
import { signerClip } from '../../lib/sign/clip'
import { SignPlayer } from './SignPlayer'
import { NativeSelect } from '../../../components/NativeSelect'

// Short sentences signed sign by sign, with the gloss (the signs in ASL order) lit up as
// each one plays.
export function Phrases({ color }: { color: string }) {
  const [pick, setPick] = useState(0)
  const [play, setPlay] = useState(0)
  const [at, setAt] = useState(-1)
  const phrase = PHRASES[pick]
  const plan = useMemo(() => sequenceKeys(phrase.words), [phrase])
  const clip = useMemo(() => signerClip(plan.keys), [plan])

  function onTime(t: number) {
    let i = -1
    plan.starts.forEach((s, j) => {
      if (t >= s) i = j
    })
    setAt(i)
  }

  return (
    <div className="card-surface flex max-w-4xl flex-col gap-4 rounded-[var(--radius)] p-4 md:flex-row">
      <div className="mx-auto w-full max-w-80 shrink-0">
        <SignPlayer clip={clip} label={phrase.text} play={play} onTime={onTime} onEnd={() => setAt(-1)} background={`color-mix(in srgb, ${color} 12%, var(--surface))`} />
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-3">
        <label className="flex flex-col gap-1 text-sm font-bold">
          Phrase
          <NativeSelect
            value={pick}
            onChange={(e) => {
              setPick(Number(e.target.value))
              setPlay((n) => n + 1)
            }}
            className="input-field"
          >
            {PHRASES.map((p, i) => (
              <option key={p.text} value={i}>
                {p.text}
              </option>
            ))}
          </NativeSelect>
        </label>
        <div>
          <p className="eyebrow font-bold">in ASL order</p>
          <p className="mt-1 flex flex-wrap gap-1.5" aria-live="polite">
            {phrase.words.map((w, i) => (
              <span
                key={i}
                className="rounded-[var(--radius)] border px-2 py-1 font-mono text-sm font-bold uppercase"
                style={{ borderColor: 'var(--line)', background: i === at ? color : 'var(--surface)' }}
              >
                {WORDS[w]?.word ?? w}
              </span>
            ))}
          </p>
        </div>
        {phrase.note && (
          <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
            {phrase.note}
          </p>
        )}
        <button type="button" onClick={() => setPlay((n) => n + 1)} className="btn btn-primary self-start px-4 py-2 text-sm">
          ▶ Play the phrase
        </button>
      </div>
    </div>
  )
}
