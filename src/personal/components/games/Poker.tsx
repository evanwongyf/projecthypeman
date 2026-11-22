import { useState } from 'react'
import { Card, CardRow, Pills, Slider, Stat, soft, type Suit } from './shared'

// ── hand rankings ────────────────────────────────────────────────────────

type HandRank = { name: string; ways: number; prob: number; cards: { rank: string; suit: Suit }[]; note: string }

const HANDS: HandRank[] = [
  { name: 'Royal flush', ways: 4, prob: 0.000154, note: 'A, K, Q, J, 10, all one suit, the best possible hand.', cards: [{ rank: '10', suit: '♠' }, { rank: 'J', suit: '♠' }, { rank: 'Q', suit: '♠' }, { rank: 'K', suit: '♠' }, { rank: 'A', suit: '♠' }] },
  { name: 'Straight flush', ways: 36, prob: 0.00139, note: 'Five cards in a row, all one suit (royal flush is the highest example).', cards: [{ rank: '5', suit: '♥' }, { rank: '6', suit: '♥' }, { rank: '7', suit: '♥' }, { rank: '8', suit: '♥' }, { rank: '9', suit: '♥' }] },
  { name: 'Four of a kind', ways: 624, prob: 0.0240, note: 'All four cards of one rank, plus any fifth card.', cards: [{ rank: '9', suit: '♠' }, { rank: '9', suit: '♥' }, { rank: '9', suit: '♦' }, { rank: '9', suit: '♣' }, { rank: 'K', suit: '♠' }] },
  { name: 'Full house', ways: 3744, prob: 0.1441, note: 'Three of one rank plus two of another ("trips full of a pair").', cards: [{ rank: 'J', suit: '♠' }, { rank: 'J', suit: '♥' }, { rank: 'J', suit: '♦' }, { rank: '4', suit: '♣' }, { rank: '4', suit: '♠' }] },
  { name: 'Flush', ways: 5108, prob: 0.1965, note: 'Five cards of one suit, not in sequence.', cards: [{ rank: '2', suit: '♣' }, { rank: '5', suit: '♣' }, { rank: '9', suit: '♣' }, { rank: 'J', suit: '♣' }, { rank: 'K', suit: '♣' }] },
  { name: 'Straight', ways: 10200, prob: 0.3925, note: 'Five cards in sequence, mixed suits (ace can be high or low, not both at once).', cards: [{ rank: '4', suit: '♠' }, { rank: '5', suit: '♥' }, { rank: '6', suit: '♦' }, { rank: '7', suit: '♣' }, { rank: '8', suit: '♠' }] },
  { name: 'Three of a kind', ways: 54912, prob: 2.1128, note: 'Three cards of one rank, plus two unrelated cards.', cards: [{ rank: '7', suit: '♠' }, { rank: '7', suit: '♥' }, { rank: '7', suit: '♦' }, { rank: '2', suit: '♣' }, { rank: 'K', suit: '♠' }] },
  { name: 'Two pair', ways: 123552, prob: 4.7539, note: 'Two cards of one rank, two of another, plus any fifth card.', cards: [{ rank: '10', suit: '♠' }, { rank: '10', suit: '♥' }, { rank: '3', suit: '♦' }, { rank: '3', suit: '♣' }, { rank: 'K', suit: '♠' }] },
  { name: 'One pair', ways: 1098240, prob: 42.2569, note: 'Two cards of one rank, plus three unrelated cards, the most common "made" hand.', cards: [{ rank: 'Q', suit: '♠' }, { rank: 'Q', suit: '♥' }, { rank: '4', suit: '♦' }, { rank: '8', suit: '♣' }, { rank: 'K', suit: '♠' }] },
  { name: 'High card', ways: 1302540, prob: 50.1177, note: 'No pair, flush or straight, ranked by the highest card, then the next, and so on.', cards: [{ rank: '2', suit: '♠' }, { rank: '5', suit: '♥' }, { rank: '9', suit: '♦' }, { rank: 'J', suit: '♣' }, { rank: 'K', suit: '♠' }] },
]

export function HandRanks({ color }: { color: string }) {
  const [sel, setSel] = useState(8) // default to "one pair"
  const h = HANDS[sel]
  const oneIn = Math.round(100 / h.prob)
  return (
    <Card title="Poker hand rankings, best to worst" color={color} note="These are the odds of being dealt each hand in a random 5-card hand from a 52-card deck, exactly what a 5-card draw hand sees, and close to the frequency of final hands in other poker variants too. Click a hand to see an example and its exact odds.">
      <div className="flex flex-col gap-1">
        {HANDS.map((hand, i) => (
          <button
            key={hand.name}
            type="button"
            onClick={() => setSel(i)}
            className="flex items-center justify-between gap-2 rounded-[var(--radius)] border px-2.5 py-1.5 text-left text-xs font-bold sm:text-sm"
            style={{
              borderColor: 'var(--line)',
              background: i === sel ? `color-mix(in srgb, ${color} 28%, var(--surface))` : 'var(--surface)',
            }}
          >
            <span>
              {HANDS.length - i}. {hand.name}
            </span>
            <span className="font-mono text-[10px] font-normal sm:text-xs" style={soft}>
              {hand.prob.toFixed(hand.prob < 1 ? 4 : 2)}%
            </span>
          </button>
        ))}
      </div>
      <CardRow cards={h.cards} size="lg" />
      <p className="text-xs leading-relaxed" style={soft}>
        {h.note}
      </p>
      <div className="grid grid-cols-3 gap-2">
        <Stat label="ways to make it" value={h.ways.toLocaleString()} />
        <Stat label="probability" value={`${h.prob.toFixed(h.prob < 1 ? 4 : 2)}%`} tone={color} />
        <Stat label="odds against" value={`1 in ${oneIn.toLocaleString()}`} />
      </div>
      <p className="text-xs" style={soft}>
        Out of all 2,598,960 possible 5-card hands, {h.ways.toLocaleString()} of them are a {h.name.toLowerCase()} (or better, for straight/flush this is the exact count for that hand only).
      </p>
    </Card>
  )
}

// ── pot odds and outs ────────────────────────────────────────────────────

function nCr(n: number, r: number) {
  if (r < 0 || r > n) return 0
  let result = 1
  for (let i = 0; i < r; i++) result = (result * (n - i)) / (i + 1)
  return result
}

export function OddsCalculator({ color }: { color: string }) {
  const [outs, setOuts] = useState(9)
  const [streets, setStreets] = useState<'two' | 'one'>('two')
  const [pot, setPot] = useState(100)
  const [toCall, setToCall] = useState(25)

  const unseen = streets === 'two' ? 47 : 46
  const exactWin = streets === 'two' ? (1 - nCr(unseen - outs, 2) / nCr(unseen, 2)) * 100 : (outs / unseen) * 100
  const ruleOfThumb = streets === 'two' ? outs * 4 : outs * 2
  const potOddsBreakeven = (toCall / (pot + toCall)) * 100
  const profitable = exactWin > potOddsBreakeven

  return (
    <Card title="Pot odds and outs calculator" color={color} note={'"Outs" are the cards left in the deck that complete your hand. Compare your real equity (win chance) against the equity the pot is offering you, if your equity is higher than the breakeven number, calling makes money over the long run.'}>

      <Pills label="cards still to come" value={streets} onChange={setStreets} options={[['two', 'Flop → river (2 cards)'], ['one', 'Turn → river (1 card)']]} />
      <div className="flex flex-wrap gap-3">
        <Slider label="your outs" value={outs} min={1} max={20} step={1} onChange={setOuts} />
        <Slider label="pot size (before your call)" value={pot} min={10} max={500} step={5} onChange={setPot} show={`$${pot}`} />
        <Slider label="amount you must call" value={toCall} min={5} max={300} step={5} onChange={setToCall} show={`$${toCall}`} />
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="exact win chance" value={`${exactWin.toFixed(1)}%`} tone={color} />
        <Stat label="rule of 4-and-2 estimate" value={`≈${ruleOfThumb}%`} />
        <Stat label="pot odds need" value={`${potOddsBreakeven.toFixed(1)}%`} />
        <Stat label="verdict" value={profitable ? 'Call is +EV' : 'Call is −EV'} tone={profitable ? '#2f9e6e' : '#d9534f'} />
      </div>
      <p className="text-xs leading-relaxed" style={soft}>
        The "rule of 4 and 2" (outs × 4 with two cards to come, outs × 2 with one) is a fast mental shortcut players use at the table, compare it above to the exact combinatorial number to see how close it gets (it is most accurate for outs around 8–12, and overestimates slightly for very high out counts).
      </p>
    </Card>
  )
}

// ── bluffing frequency (game theory) ─────────────────────────────────────

export function BluffFrequency({ color }: { color: string }) {
  const [betFrac, setBetFrac] = useState(100) // bet as % of pot
  const pot = 100
  const bet = pot * (betFrac / 100)
  const bluffShare = (bet / (pot + 2 * bet)) * 100 // of the bettor's total betting range
  const mdf = (pot / (pot + bet)) * 100 // opponent's minimum defence frequency

  return (
    <Card title="GTO bluffing frequency" color={color} note="On a river bet, game theory says both players should mix value bets with bluffs (and calls with folds) in a ratio that leaves the other player indifferent, otherwise they could exploit you by always calling or always folding. These are the two matching numbers for a given bet size, derived from that indifference condition.">
      <Slider label="bet size, as % of the pot" value={betFrac} min={10} max={300} step={5} onChange={setBetFrac} show={`${betFrac}% of pot ($${bet.toFixed(0)} into $${pot})`} />
      <div className="grid grid-cols-2 gap-2">
        <Stat label="bettor's optimal bluff share" value={`${bluffShare.toFixed(1)}%`} tone={color} />
        <Stat label="opponent's minimum defence" value={`${mdf.toFixed(1)}%`} />
      </div>
      <p className="text-xs leading-relaxed" style={soft}>
        Bigger bets let (and need) a higher bluff percentage in the bettor's range, but also let the opponent fold more often and still be unexploitable. Smaller bets force a lower bluff frequency, but demand the opponent defend (call) much more often. Neither side is "right" or "wrong" in isolation, these are the break-even points; real decisions also depend on each player's actual hand strength, not just the size of the bet.
      </p>
    </Card>
  )
}
