import { useMemo, useState } from 'react'
import type { Block } from '../../lib/archive/guide'
import { DECK, SPREADS, SUITS } from '../../lib/tarot/deck'
import type { Card as TCard, Suit } from '../../lib/tarot/deck'
import { Btn, Card, Pills, Stat, soft } from '../sports/shared'

type TarotT = Extract<Block, { t: 'tarot' }>

export default function TarotBlock({ block, color }: { block: TarotT; color: string }) {
  if (block.mode === 'spread') return <SpreadLab color={color} />
  if (block.mode === 'quiz') return <QuizLab color={color} />
  return <DeckBrowser color={color} suit={block.suit} />
}

function SuitIcon({ suit, c }: { suit: Suit; c: string }) {
  switch (suit) {
    case 'wands':
      return (
        <g stroke={c} strokeWidth={3} strokeLinecap="round" fill="none">
          <line x1={-14} y1={16} x2={14} y2={-16} />
          <path d="M8,-10 q8,-2 10,-10 M2,-3 q-8,-2 -10,-10" strokeWidth={2} />
        </g>
      )
    case 'cups':
      return (
        <g stroke={c} strokeWidth={3} strokeLinejoin="round" fill="none">
          <path d="M-14,-14 h28 q0,22 -14,22 q-14,0 -14,-22 z" />
          <line x1={0} y1={8} x2={0} y2={16} />
          <line x1={-9} y1={16} x2={9} y2={16} strokeLinecap="round" />
        </g>
      )
    case 'swords':
      return (
        <g stroke={c} strokeWidth={3} strokeLinecap="round" fill="none">
          <line x1={0} y1={-18} x2={0} y2={14} />
          <line x1={-10} y1={6} x2={10} y2={6} />
          <path d="M-3,-14 L0,-20 L3,-14" strokeWidth={2} />
        </g>
      )
    case 'pentacles':
      return (
        <g stroke={c} strokeWidth={2.5} fill="none" strokeLinejoin="round">
          <circle r={17} />
          <path d="M0,-13 L7.6,10.5 L-12.4,-4 L12.4,-4 L-7.6,10.5 Z" strokeWidth={2} />
        </g>
      )
    default:
      return null
  }
}

function wrap(name: string, max = 14): string[] {
  const words = name.split(' ')
  const out: string[] = []
  let line = ''
  for (const w of words) {
    if ((line + ' ' + w).trim().length > max && line) { out.push(line); line = w } else line = (line + ' ' + w).trim()
  }
  if (line) out.push(line)
  return out
}

/** The scans live in public/tarot, one per card id. */
export const cardArt = (c: TCard) => `/tarot/${c.id}.webp`

export function CardFace({ card, reversed, back, size = 96, selected }: { card?: TCard; reversed?: boolean; back?: boolean; size?: number; selected?: boolean }) {
  const [failed, setFailed] = useState(false)
  const w = 100
  const h = 160
  const col = card ? SUITS[card.suit].color : '#7d5fff'
  const height = Math.round((size * h) / w)
  // The scans are 420x724, so the picture keeps the deck's own proportions.
  const artHeight = Math.round((size * 724) / 420)
  if (card && !back && !failed) {
    // The real card: a Rider-Waite-Smith scan at the deck's own proportions.
    return (
      <span
        className="inline-block overflow-hidden rounded-[var(--radius)] align-top"
        style={{ width: size, height: artHeight, flex: 'none', border: `${selected ? 3 : 2}px solid ${selected ? 'var(--ink)' : col}`, background: '#fdf8ee', boxShadow: selected ? '0 0 0 2px var(--orange)' : undefined }}
      >
        <img
          src={cardArt(card)}
          alt={`${card.name}${reversed ? ', reversed' : ''}`}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transform: reversed ? 'rotate(180deg)' : undefined, display: 'block' }}
        />
      </span>
    )
  }
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width={size} height={height} role="img" aria-label={back ? 'Face-down card' : `${card!.name}${reversed ? ', reversed' : ''}`} style={{ flex: 'none' }}>
      <rect x={2} y={2} width={w - 4} height={h - 4} rx={8} fill="var(--surface)" stroke={selected ? 'var(--ink)' : col} strokeWidth={selected ? 4 : 3} />
      {back || !card ? (
        <g>
          <rect x={10} y={10} width={w - 20} height={h - 20} rx={5} fill="none" stroke="#7d5fff" strokeWidth={2} />
          {[...Array(5)].map((_, i) => (
            <circle key={i} cx={50} cy={80} r={8 + i * 8} fill="none" stroke="#7d5fff" strokeWidth={1.5} opacity={0.75 - i * 0.12} />
          ))}
          <path d="M50,56 L56,76 L76,80 L56,84 L50,104 L44,84 L24,80 L44,76 Z" fill="#7d5fff" opacity={0.35} />
        </g>
      ) : (
        <g transform={reversed ? `rotate(180 ${w / 2} ${h / 2})` : undefined}>
          <rect x={8} y={8} width={w - 16} height={h - 16} rx={5} fill="none" stroke={col} strokeWidth={1} opacity={0.6} />
          <text x={50} y={30} textAnchor="middle" fontSize={16} fontWeight={700} fill={col} fontFamily="Georgia, serif">{card.num}</text>
          <g transform="translate(50,78)">
            {card.suit === 'major' ? (
              <text textAnchor="middle" dominantBaseline="central" fontSize={40} fill={col}>{card.glyph}</text>
            ) : (
              <g transform="scale(1.3)">
                <SuitIcon suit={card.suit} c={col} />
              </g>
            )}
          </g>
          {(card.suit === 'major' ? wrap(card.name, 13) : [card.name.split(' of ')[0], 'of ' + SUITS[card.suit].name]).map((t, i, a) => (
            <text key={i} x={50} y={128 + (i - (a.length - 1) / 2) * 12 + 6} textAnchor="middle" fontSize={a.length > 2 ? 9 : 10.5} fontWeight={700} fill="var(--ink)" fontFamily="Georgia, serif">{t}</text>
          ))}
        </g>
      )}
    </svg>
  )
}

function Detail({ card, reversed }: { card: TCard; reversed?: boolean }) {
  return (
    <div className="flex min-w-56 flex-1 flex-col gap-1.5">
      <p className="font-bold">{card.name} <span className="font-normal" style={soft}>· {SUITS[card.suit].name}, {SUITS[card.suit].element}</span></p>
      <p className="text-sm leading-relaxed">{card.meaning}</p>
      <p className="text-sm leading-relaxed"><strong>Upright: </strong>{card.up}.</p>
      <p className="text-sm leading-relaxed"><strong>Reversed: </strong>{card.rev}.</p>
      <p className="text-sm leading-relaxed"><strong>Ask yourself: </strong>{card.ask}</p>
      {reversed && <p className="text-xs" style={soft}>Drawn reversed. Some readers read the reversed meaning, others read it as the upright energy blocked, internal or excessive.</p>}
    </div>
  )
}

function DeckBrowser({ color, suit }: { color: string; suit?: Suit }) {
  const [s, setS] = useState<Suit | 'all'>(suit ?? 'all')
  const list = DECK.filter((c) => s === 'all' || c.suit === s)
  const [sel, setSel] = useState<string>(list[0].id)
  const cur = DECK.find((c) => c.id === sel && (s === 'all' || c.suit === s)) ?? list[0]
  return (
    <Card title="The deck: tap a card" color={color} note="The pictures are the 1909 Rider-Waite-Smith deck, drawn by Pamela Colman Smith and long out of copyright. Meanings follow the common tradition; other decks and readers differ, and a card is a prompt for reflection, not a fact about the future.">
      <Pills<Suit | 'all'> value={s} options={[['all', 'All 78'], ...(Object.keys(SUITS) as Suit[]).map((k) => [k, SUITS[k].name] as [Suit, string])]} onChange={(v) => { setS(v); const f = DECK.filter((c) => v === 'all' || c.suit === v)[0]; setSel(f.id) }} label="Suit" />
      <div className="flex flex-wrap gap-2" role="group" aria-label="Cards">
        {list.map((c) => (
          <button key={c.id} type="button" onClick={() => setSel(c.id)} aria-pressed={cur.id === c.id} aria-label={c.name} className="rounded-[var(--radius)]" style={{ padding: 0, border: 0, background: 'none', cursor: 'pointer' }}>
            <CardFace card={c} size={s === 'all' ? 68 : 86} selected={cur.id === c.id} />
          </button>
        ))}
      </div>
      <div className="flex flex-wrap items-start gap-4 rounded-[var(--radius)] border p-3" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}>
        <CardFace card={cur} size={190} />
        <Detail card={cur} />
      </div>
    </Card>
  )
}

function shuffle<T>(a: T[]): T[] {
  const x = [...a]
  for (let i = x.length - 1; i > 0; i--) {
    const buf = new Uint32Array(1)
    crypto.getRandomValues(buf)
    const j = buf[0] % (i + 1)
    ;[x[i], x[j]] = [x[j], x[i]]
  }
  return x
}

type Drawn = { card: TCard; reversed: boolean; up: boolean }[]

function SpreadLab({ color }: { color: string }) {
  const [id, setId] = useState('three-sca')
  const [rev, setRev] = useState(true)
  const spread = SPREADS.find((s) => s.id === id)!
  const [drawn, setDrawn] = useState<Drawn>([])
  const keyOf = (spreadId: string) => `tarot-journal-${spreadId}`
  const load = (spreadId: string) => {
    try { return localStorage.getItem(keyOf(spreadId)) ?? '' } catch { return '' }
  }
  const [note, setNote] = useState(() => load('three-sca'))
  const key = keyOf(id)
  const saveNote = (v: string) => {
    setNote(v)
    try { localStorage.setItem(key, v) } catch { /* private mode */ }
  }
  const draw = () => {
    const d = shuffle(DECK).slice(0, spread.positions.length)
    setDrawn(d.map((card) => ({ card, reversed: rev && Math.random() < 0.5, up: false })))
  }
  const flip = (i: number) => setDrawn(drawn.map((d, k) => (k === i ? { ...d, up: !d.up } : d)))
  const revealAll = () => setDrawn(drawn.map((d) => ({ ...d, up: true })))
  const celtic = id === 'celtic'
  const cell: Record<number, [number, number]> = { 0: [2, 2], 2: [3, 2], 3: [2, 1], 4: [1, 2], 5: [2, 3], 6: [4, 5], 7: [3, 5], 8: [2, 5], 9: [1, 5] }
  const [pos, setPos] = useState(0)
  const cur = drawn[pos]
  const allUp = drawn.length > 0 && drawn.every((d) => d.up)
  const counts = useMemo(() => ({ major: drawn.filter((d) => d.up && d.card.suit === 'major').length, rev: drawn.filter((d) => d.up && d.reversed).length }), [drawn])
  return (
    <Card title="Draw a spread" color={color} note="This is for reflection and practice, not prediction. Cards are drawn at random from a shuffled 78-card deck, and your notes are saved only in this browser.">
      <Pills<string> value={id} options={SPREADS.map((s) => [s.id, s.name] as [string, string])} onChange={(v) => { setId(v); setNote(load(v)); setDrawn([]); setPos(0) }} label="Spread" />
      <p className="text-sm leading-relaxed">{spread.blurb}</p>
      <label className="flex items-center gap-2 text-sm font-bold">
        <input type="checkbox" checked={rev} onChange={(e) => setRev(e.target.checked)} /> Include reversed cards
      </label>
      <div className="flex flex-wrap gap-2">
        <Btn onClick={draw}>{drawn.length ? 'Shuffle and draw again' : 'Shuffle and draw'}</Btn>
        {drawn.length > 0 && <Btn onClick={revealAll} disabled={allUp}>Reveal all</Btn>}
      </div>
      {drawn.length > 0 && (
        <>
          {celtic ? (
            <div className="grid gap-2 overflow-x-auto" style={{ gridTemplateColumns: 'repeat(5, minmax(0, 76px))', gridTemplateRows: 'repeat(4, auto)' }}>
              {drawn.map((d, i) => {
                const [r, c] = cell[i === 1 ? 0 : i]
                return (
                  <button key={i} type="button" onClick={() => { flip(i); setPos(i) }} aria-label={`${spread.positions[i].name}${d.up ? ': ' + d.card.name : ': face down'}`} className="relative" style={{ gridRow: r, gridColumn: c, padding: 0, border: 0, background: 'none', zIndex: i === 1 ? 2 : 1, transform: i === 1 ? 'rotate(90deg)' : undefined, cursor: 'pointer', justifySelf: 'center' }}>
                    <CardFace card={d.card} reversed={d.reversed} back={!d.up} size={78} selected={pos === i} />
                  </button>
                )
              })}
            </div>
          ) : (
            <div className="flex flex-wrap gap-4">
              {drawn.map((d, i) => (
                <div key={i} className="flex flex-col items-center gap-1" style={{ width: 92 }}>
                  <button type="button" onClick={() => { flip(i); setPos(i) }} aria-label={`${spread.positions[i].name}${d.up ? ': ' + d.card.name : ': face down'}`} style={{ padding: 0, border: 0, background: 'none', cursor: 'pointer' }}>
                    <CardFace card={d.card} reversed={d.reversed} back={!d.up} size={104} selected={pos === i} />
                  </button>
                  <span className="text-center text-xs font-bold leading-tight">{spread.positions[i].name}</span>
                </div>
              ))}
            </div>
          )}
          <p className="text-xs" style={soft}>Tap a card to turn it over and read it.</p>
          {cur && (
            <div className="flex flex-col gap-2 rounded-[var(--radius)] border p-3" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}>
              <p className="text-sm"><strong>{spread.positions[pos].name}</strong> <span style={soft}>({spread.positions[pos].prompt})</span></p>
              {cur.up ? (
                <div className="flex flex-wrap items-start gap-4">
                  <CardFace card={cur.card} reversed={cur.reversed} size={150} />
                  <Detail card={cur.card} reversed={cur.reversed} />
                </div>
              ) : (
                <p className="text-sm" style={soft}>This card is face down. Tap it to reveal.</p>
              )}
            </div>
          )}
          {allUp && (
            <div className="flex flex-wrap gap-2">
              <Stat label="Major arcana in the spread" value={`${counts.major} of ${drawn.length}`} />
              <Stat label="Reversed" value={`${counts.rev} of ${drawn.length}`} />
            </div>
          )}
          <label className="flex flex-col gap-1 text-sm font-bold">
            Your reading (a few sentences linking the cards to your question)
            <textarea value={note} onChange={(e) => saveNote(e.target.value)} rows={4} className="rounded-[var(--radius)] border p-2 text-sm font-normal" style={{ borderColor: 'var(--line)', background: 'var(--paper)' }} placeholder="What story do these cards tell? What stands out? What will you do?" />
          </label>
        </>
      )}
    </Card>
  )
}

function QuizLab({ color }: { color: string }) {
  const [suit, setSuit] = useState<Suit | 'all'>('major')
  const [round, setRound] = useState(0)
  const [score, setScore] = useState({ right: 0, total: 0 })
  const [picked, setPicked] = useState<string | null>(null)
  const pool = DECK.filter((c) => suit === 'all' || c.suit === suit)
  const q = useMemo(() => {
    const card = shuffle(pool)[0]
    const wrong = shuffle(pool.filter((c) => c.id !== card.id)).slice(0, 3)
    return { card, options: shuffle([card, ...wrong]) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [suit, round])
  const answer = (id: string) => {
    if (picked) return
    setPicked(id)
    setScore({ right: score.right + (id === q.card.id ? 1 : 0), total: score.total + 1 })
  }
  return (
    <Card title="Learn the cards: which card is this?" color={color} note="Read the meaning, then choose the card it belongs to. Repeating this builds the vocabulary faster than rereading a list.">
      <Pills<Suit | 'all'> value={suit} options={[['major', 'Major Arcana'], ['wands', 'Wands'], ['cups', 'Cups'], ['swords', 'Swords'], ['pentacles', 'Pentacles'], ['all', 'All 78']]} onChange={(v) => { setSuit(v); setPicked(null); setRound(round + 1) }} label="Quiz set" />
      <div className="rounded-[var(--radius)] border p-3" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}>
        <p className="text-sm leading-relaxed"><strong>Upright: </strong>{q.card.up}.</p>
        <p className="text-sm leading-relaxed"><strong>Reversed: </strong>{q.card.rev}.</p>
      </div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Answers">
        {q.options.map((o) => {
          const right = picked && o.id === q.card.id
          const wrong = picked === o.id && o.id !== q.card.id
          return (
            <button key={o.id} type="button" onClick={() => answer(o.id)} className="rounded-[var(--radius)] border px-3 py-2 text-sm font-bold pointer-coarse:min-h-10" style={{ borderColor: 'var(--line)', background: right ? 'color-mix(in srgb, var(--mint) 55%, var(--surface))' : wrong ? 'color-mix(in srgb, var(--pink) 45%, var(--surface))' : 'var(--surface)' }}>
              {o.name}
            </button>
          )
        })}
      </div>
      {picked && (
        <div className="flex flex-wrap items-start gap-4">
          <CardFace card={q.card} size={128} />
          <Detail card={q.card} />
        </div>
      )}
      <div className="flex flex-wrap items-center gap-2">
        <Btn onClick={() => { setPicked(null); setRound(round + 1) }} disabled={!picked}>Next card</Btn>
        <Stat label="Score" value={`${score.right} / ${score.total}`} />
      </div>
    </Card>
  )
}
