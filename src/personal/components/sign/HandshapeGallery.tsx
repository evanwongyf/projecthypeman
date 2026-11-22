import { useMemo, useState } from 'react'
import { LETTERS, NUMBERS, signKeys } from '../../lib/sign/letters'
import type { Letter } from '../../lib/sign/letters'
import { useSignPrefs } from '../../lib/sign/prefs'
import { Rich } from '../archive/GuideBlocks'
import { handClip } from '../../lib/sign/clip'
import { SignPlayer } from './SignPlayer'
import { SignSvg } from './SignSvg'

type Entry = { label: string; title: string; sign: Pick<Letter, 'shape' | 'rot' | 'move'>; how: string; watch?: string }

function entries(set: 'alphabet' | 'numbers', only?: string[]): Entry[] {
  const all: Entry[] =
    set === 'numbers'
      ? NUMBERS.map((n) => ({ label: n.n, title: `Number ${n.n}`, sign: n, how: n.how }))
      : Object.entries(LETTERS).map(([ch, l]) => ({ label: ch, title: `Letter ${ch}`, sign: l, how: l.how, watch: l.watch }))
  return only ? only.map((o) => all.find((e) => e.label === o)).filter((e): e is Entry => !!e) : all
}

function DetailCard({ e, color }: { e: Entry; color: string }) {
  const clip = useMemo(() => handClip(signKeys(e.sign, 0, 900)), [e])
  return (
    <div className="card-surface grid gap-4 rounded-[var(--radius)] p-4 sm:grid-cols-[minmax(0,15rem)_1fr]">
      <div className="mx-auto w-full max-w-60">
        <SignPlayer clip={clip} label={e.title} background={`color-mix(in srgb, ${color} 14%, var(--surface))`} />
      </div>
      <div className="min-w-0">
        <p className="flex items-baseline gap-2">
          <span className="text-4xl leading-none" style={{ fontFamily: 'var(--font-hero)' }}>
            {e.label}
          </span>
          {e.sign.move && <span className="eyebrow font-bold">moves</span>}
        </p>
        <p className="mt-2 text-sm leading-relaxed">
          <Rich text={e.how} />
        </p>
        {e.watch && (
          <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
            <b style={{ color: 'var(--ink)' }}>Watch for: </b>
            <Rich text={e.watch} />
          </p>
        )}
      </div>
    </div>
  )
}

// The whole alphabet (or numbers) as small pictures; picking one shows it large with how
// to make it. A short list (letters that look alike, say) is shown as full cards instead.
export function HandshapeGallery({ set, only, color }: { set: 'alphabet' | 'numbers'; only?: string[]; color: string }) {
  const list = useMemo(() => entries(set, only), [set, only])
  const [pick, setPick] = useState(0)
  const { tone, lefty } = useSignPrefs()
  const thumbs = useMemo(() => list.map((e) => handClip(signKeys(e.sign, 0, 10)).frame(0, { mirror: lefty })), [list, lefty])

  if (list.length <= 6)
    return (
      <div className="flex flex-col gap-3">
        {list.map((e) => (
          <DetailCard key={e.label} e={e} color={color} />
        ))}
      </div>
    )

  const current = list[pick]
  return (
    <div className="flex flex-col gap-3">
      <div className="grid grid-cols-4 gap-2 sm:grid-cols-7 lg:grid-cols-9" role="listbox" aria-label={set === 'numbers' ? 'Numbers' : 'Letters'}>
        {list.map((e, i) => (
          <button
            key={e.label}
            type="button"
            role="option"
            aria-selected={i === pick}
            onClick={() => setPick(i)}
            className="flex flex-col items-center rounded-[var(--radius)] border p-1 pb-1.5 transition-transform hover:-translate-y-0.5"
            style={{
              borderColor: 'var(--line)',
              background: i === pick ? `color-mix(in srgb, ${color} 40%, var(--surface))` : 'var(--surface)',
              boxShadow: i === pick ? '0 0 0 1px var(--accent)' : 'none',
            }}
          >
            <SignSvg items={thumbs[i].items} box={thumbs[i].box} tone={tone} label={e.title} />
            <span className="font-mono text-sm font-bold">{e.label}</span>
          </button>
        ))}
      </div>
      <DetailCard e={current} color={color} />
    </div>
  )
}
