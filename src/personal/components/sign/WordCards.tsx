import { useMemo } from 'react'
import { WORDS } from '../../lib/sign/words'
import type { Word } from '../../lib/sign/words'
import { Rich } from '../archive/GuideBlocks'
import { signerClip } from '../../lib/sign/clip'
import { SignPlayer } from './SignPlayer'

function WordCard({ w, color }: { w: Word; color: string }) {
  const clip = useMemo(() => signerClip(w.keys), [w])
  return (
    <div className="card-surface flex flex-col gap-3 rounded-[var(--radius)] p-3">
      <SignPlayer clip={clip} label={w.word} still={w.keys[1]?.t ?? 0} background={`color-mix(in srgb, ${color} 12%, var(--surface))`} />
      <div className="px-1">
        <p className="text-lg font-bold leading-tight">{w.word}</p>
        {w.also && (
          <p className="text-xs" style={{ color: 'var(--ink-soft)' }}>
            also: {w.also.join(', ')}
          </p>
        )}
        <dl className="mt-2 grid grid-cols-[4.5rem_1fr] gap-x-2 gap-y-1 text-sm leading-snug">
          <dt className="font-bold">Shape</dt>
          <dd>{w.shape}</dd>
          <dt className="font-bold">Where</dt>
          <dd>{w.where}</dd>
          <dt className="font-bold">Move</dt>
          <dd>{w.move}</dd>
          {w.palm && (
            <>
              <dt className="font-bold">Palm</dt>
              <dd>{w.palm}</dd>
            </>
          )}
        </dl>
        {w.hint && (
          <p className="mt-2 rounded-[var(--radius)] px-2 py-1.5 text-xs leading-relaxed" style={{ background: `color-mix(in srgb, ${color} 18%, var(--surface))` }}>
            <Rich text={w.hint} />
          </p>
        )}
      </div>
    </div>
  )
}

export function WordCards({ words, color }: { words: string[]; color: string }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
      {words.map((id) => (WORDS[id] ? <WordCard key={id} w={WORDS[id]} color={color} /> : null))}
    </div>
  )
}
