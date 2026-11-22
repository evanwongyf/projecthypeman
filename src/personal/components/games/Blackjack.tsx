import { useEffect, useRef, useState } from 'react'
import { Btn, Card, Pills, Slider, Stat, soft, PlayingCard, type Suit } from './shared'

// ── basic strategy data ──────────────────────────────────────────────────
// Standard basic strategy for a common online/casino rule set: 4-8 decks,
// dealer stands on soft 17, double after split allowed, no surrender.
// H = hit, S = stand, D = double (else hit), Ds = double (else stand), P = split.

const DEALER = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'A']

const HARD: Record<number, string[]> = {
  20: ['S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S'],
  19: ['S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S'],
  18: ['S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S'],
  17: ['S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S'],
  16: ['S', 'S', 'S', 'S', 'S', 'H', 'H', 'H', 'H', 'H'],
  15: ['S', 'S', 'S', 'S', 'S', 'H', 'H', 'H', 'H', 'H'],
  14: ['S', 'S', 'S', 'S', 'S', 'H', 'H', 'H', 'H', 'H'],
  13: ['S', 'S', 'S', 'S', 'S', 'H', 'H', 'H', 'H', 'H'],
  12: ['H', 'H', 'S', 'S', 'S', 'H', 'H', 'H', 'H', 'H'],
  11: ['D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'H'],
  10: ['D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'H', 'H'],
  9: ['H', 'D', 'D', 'D', 'D', 'H', 'H', 'H', 'H', 'H'],
  8: ['H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H'],
  7: ['H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H'],
  6: ['H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H'],
  5: ['H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H'],
}

// Soft totals, keyed by total (A+2 = 13 ... A+9 = 20).
const SOFT: Record<number, string[]> = {
  20: ['S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S'],
  19: ['S', 'S', 'S', 'S', 'Ds', 'S', 'S', 'S', 'S', 'S'],
  18: ['S', 'D', 'D', 'D', 'D', 'S', 'S', 'H', 'H', 'H'],
  17: ['H', 'D', 'D', 'D', 'D', 'H', 'H', 'H', 'H', 'H'],
  16: ['H', 'H', 'D', 'D', 'D', 'H', 'H', 'H', 'H', 'H'],
  15: ['H', 'H', 'D', 'D', 'D', 'H', 'H', 'H', 'H', 'H'],
  14: ['H', 'H', 'H', 'D', 'D', 'H', 'H', 'H', 'H', 'H'],
  13: ['H', 'H', 'H', 'D', 'D', 'H', 'H', 'H', 'H', 'H'],
}

const PAIR: Record<string, string[]> = {
  A: ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
  '10': ['S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S'],
  '9': ['P', 'P', 'P', 'P', 'P', 'S', 'P', 'P', 'S', 'S'],
  '8': ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
  '7': ['P', 'P', 'P', 'P', 'P', 'P', 'H', 'H', 'H', 'H'],
  '6': ['P', 'P', 'P', 'P', 'P', 'H', 'H', 'H', 'H', 'H'],
  '5': ['D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'H', 'H'],
  '4': ['H', 'H', 'H', 'P', 'P', 'H', 'H', 'H', 'H', 'H'],
  '3': ['P', 'P', 'P', 'P', 'P', 'P', 'H', 'H', 'H', 'H'],
  '2': ['P', 'P', 'P', 'P', 'P', 'P', 'H', 'H', 'H', 'H'],
}

const ACTION: Record<string, { label: string; short: string; color: string }> = {
  H: { label: 'Hit', short: 'H', color: '#e07b2a' },
  S: { label: 'Stand', short: 'S', color: '#3b6fd8' },
  D: { label: 'Double (hit if not allowed)', short: 'D', color: '#2f9e6e' },
  Ds: { label: 'Double (stand if not allowed)', short: 'Ds', color: '#2f9e6e' },
  P: { label: 'Split', short: 'P', color: '#7b4fc9' },
}

function Grid({ rows, table, selRow, selCol }: { rows: (number | string)[]; table: Record<string | number, string[]>; selRow: number | string; selCol: number }) {
  return (
    <div className="overflow-x-auto">
      <table className="border-separate text-center text-[10px] sm:text-xs" style={{ borderSpacing: 2 }}>
        <thead>
          <tr>
            <th className="px-1 text-left font-bold" style={soft}>
              you
            </th>
            {DEALER.map((d) => (
              <th key={d} className="px-1 font-bold" style={soft}>
                {d}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r}>
              <td className="px-1.5 py-0.5 text-left font-bold">{r}</td>
              {table[r].map((a, ci) => {
                const sel = r === selRow && ci === selCol
                return (
                  <td
                    key={ci}
                    className="h-6 w-6 rounded font-bold sm:h-7 sm:w-7"
                    style={{
                      background: `color-mix(in srgb, ${ACTION[a].color} ${sel ? 55 : 28}%, var(--surface))`,
                      outline: sel ? '2px solid var(--ink)' : undefined,
                      outlineOffset: -1,
                    }}
                  >
                    {ACTION[a].short}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function StrategyChart({ color }: { color: string }) {
  const [type, setType] = useState<'hard' | 'soft' | 'pair'>('hard')
  const [hardTotal, setHardTotal] = useState(16)
  const [softOther, setSoftOther] = useState(7)
  const [pairRank, setPairRank] = useState('8')
  const [dealerIdx, setDealerIdx] = useState(5)

  const softTotal = 11 + softOther
  let action: string
  let youLabel: string
  if (type === 'hard') {
    action = HARD[hardTotal][dealerIdx]
    youLabel = `hard ${hardTotal}`
  } else if (type === 'soft') {
    action = SOFT[softTotal][dealerIdx]
    youLabel = `soft ${softTotal} (A, ${softOther})`
  } else {
    action = PAIR[pairRank][dealerIdx]
    youLabel = `${pairRank}, ${pairRank}`
  }
  const info = ACTION[action]

  return (
    <Card
      title="Basic strategy chart"
      color={color}
      note="Rules assumed: 4–8 decks, dealer stands on soft 17, double after split allowed, no surrender, the most common online and Strip rule set. Exact charts shift slightly if your table's rules differ (e.g. dealer hits soft 17, or surrender is offered)."
    >
      <Pills
        label="Your hand"
        value={type}
        onChange={(v) => setType(v)}
        options={[
          ['hard', 'Hard total'],
          ['soft', 'Soft total (has an ace)'],
          ['pair', 'Pair'],
        ]}
      />
      {type === 'hard' && <Slider label="your total" value={hardTotal} min={5} max={20} step={1} onChange={setHardTotal} />}
      {type === 'soft' && <Slider label="other card (A + this)" value={softOther} min={2} max={9} step={1} onChange={setSoftOther} show={`A,${softOther} = ${softTotal}`} />}
      {type === 'pair' && <Pills label="pair rank" value={pairRank} onChange={setPairRank} options={[['2', '2'], ['3', '3'], ['4', '4'], ['5', '5'], ['6', '6'], ['7', '7'], ['8', '8'], ['9', '9'], ['10', '10/J/Q/K'], ['A', 'A']]} />}
      <Pills label="dealer's upcard" value={DEALER[dealerIdx]} onChange={(v) => setDealerIdx(DEALER.indexOf(v))} options={DEALER.map((d) => [d, d] as [string, string])} />

      <div className="flex items-center gap-3 rounded-[var(--radius)] border p-3" style={{ borderColor: 'var(--line)', background: `color-mix(in srgb, ${info.color} 18%, var(--surface))` }}>
        <p className="text-xs" style={soft}>
          You have {youLabel} vs dealer {DEALER[dealerIdx]}:
        </p>
        <p className="text-lg font-bold">{info.label}</p>
      </div>

      {type === 'hard' && <Grid rows={[20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5]} table={HARD} selRow={hardTotal} selCol={dealerIdx} />}
      {type === 'soft' && <Grid rows={[20, 19, 18, 17, 16, 15, 14, 13]} table={SOFT} selRow={softTotal} selCol={dealerIdx} />}
      {type === 'pair' && <Grid rows={['A', '10', '9', '8', '7', '6', '5', '4', '3', '2']} table={PAIR} selRow={pairRank} selCol={dealerIdx} />}
    </Card>
  )
}

// ── card counting (Hi-Lo) ────────────────────────────────────────────────

const SUITS: Suit[] = ['♠', '♥', '♦', '♣']
const RANKS = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

function hiLoValue(rank: string) {
  if (['2', '3', '4', '5', '6'].includes(rank)) return 1
  if (['7', '8', '9'].includes(rank)) return 0
  return -1
}

function freshShoe(decks: number) {
  const shoe: { rank: string; suit: Suit }[] = []
  for (let d = 0; d < decks; d++) for (const suit of SUITS) for (const rank of RANKS) shoe.push({ rank, suit })
  for (let i = shoe.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shoe[i], shoe[j]] = [shoe[j], shoe[i]]
  }
  return shoe
}

const SPREAD = [
  { tc: -99, units: 1 },
  { tc: 1, units: 1 },
  { tc: 2, units: 2 },
  { tc: 3, units: 4 },
  { tc: 4, units: 6 },
  { tc: 5, units: 8 },
]

export function CountSimulator({ color }: { color: string }) {
  const decks = 6
  const penetration = 0.75
  const [shoe, setShoe] = useState(() => freshShoe(decks))
  const [idx, setIdx] = useState(0)
  const [running, setRunning] = useState(0)
  const [history, setHistory] = useState<{ rank: string; suit: Suit }[]>([])
  const [auto, setAuto] = useState(false)
  const timer = useRef<ReturnType<typeof setInterval> | null>(null)

  const cutCard = Math.floor(shoe.length * penetration)

  function reset() {
    setShoe(freshShoe(decks))
    setIdx(0)
    setRunning(0)
    setHistory([])
  }

  function deal() {
    setIdx((prevIdx) => {
      if (prevIdx >= cutCard) {
        setShoe(freshShoe(decks))
        setRunning(0)
        setHistory([])
        return 0
      }
      const card = shoe[prevIdx]
      setRunning((r) => r + hiLoValue(card.rank))
      setHistory((h) => [...h.slice(-11), card])
      return prevIdx + 1
    })
  }

  useEffect(() => {
    if (!auto) {
      if (timer.current) clearInterval(timer.current)
      return
    }
    timer.current = setInterval(deal, 700)
    return () => {
      if (timer.current) clearInterval(timer.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auto, shoe, idx])

  const decksRemaining = Math.max(0.5, (shoe.length - idx) / 52)
  const trueCount = running / decksRemaining
  const spreadUnits = [...SPREAD].reverse().find((s) => trueCount >= s.tc)?.units ?? 1
  const edgeEstimate = -0.5 + Math.max(0, trueCount - 1) * 0.5

  return (
    <Card
      title="Hi-Lo card counting simulator"
      color={color}
      note="Hi-Lo values: 2–6 = +1, 7–9 = 0, 10/J/Q/K/A = −1. True count = running count ÷ decks remaining; it tracks the deck's richness in tens and aces far better than the running count alone, which is why counters bet off the true count. The edge estimate (roughly −0.5% at true count 0, +0.5% per point above 1) is a widely used teaching approximation, not an exact figure, real edge depends on the specific rules and count system."
    >
      <div className="flex flex-wrap gap-1.5">
        {history.length === 0 && (
          <p className="text-xs" style={soft}>
            Press "deal" to start dealing from a fresh 6-deck shoe.
          </p>
        )}
        {history.map((c, i) => (
          <PlayingCard key={`${idx}-${i}`} rank={c.rank} suit={c.suit} size="sm" faded={i < history.length - 1} highlight={i === history.length - 1 ? color : undefined} />
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        <Btn onClick={deal}>deal next card</Btn>
        <Btn onClick={() => setAuto((a) => !a)} active={auto}>
          {auto ? 'stop auto-deal' : 'auto-deal'}
        </Btn>
        <Btn onClick={reset}>reshuffle shoe</Btn>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
        <Stat label="cards dealt" value={`${idx} / ${shoe.length}`} />
        <Stat label="running count" value={running > 0 ? `+${running}` : running} tone={color} />
        <Stat label="decks remaining" value={decksRemaining.toFixed(1)} />
        <Stat label="true count" value={trueCount > 0 ? `+${trueCount.toFixed(1)}` : trueCount.toFixed(1)} tone={color} />
        <Stat label="suggested bet" value={`${spreadUnits} unit${spreadUnits > 1 ? 's' : ''}`} />
      </div>
      <Stat label="estimated player edge (illustrative)" value={`${edgeEstimate >= 0 ? '+' : ''}${edgeEstimate.toFixed(1)}%`} tone={edgeEstimate > 0 ? '#2f9e6e' : '#d9534f'} />
      <p className="text-xs" style={soft}>
        The shoe reshuffles automatically at {Math.round(penetration * 100)}% penetration (the "cut card"), matching how real tables limit how deep the dealer deals before shuffling, which is also the main defence casinos have against counting.
      </p>
    </Card>
  )
}
