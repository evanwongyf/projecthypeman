import { useState } from 'react'
import { Btn, Card, Pills, Stat, soft, MahjongTile, TileRow } from './shared'

// ── tile set ──────────────────────────────────────────────────────────────

const SUITS: Record<'man' | 'pin' | 'sou', { label: string; glyphs: string[] }> = {
  man: { label: 'Characters (man/wan) 1–9', glyphs: Array.from('🀇🀈🀉🀊🀋🀌🀍🀎🀏') },
  pin: { label: 'Dots (pin/circles) 1–9', glyphs: Array.from('🀙🀚🀛🀜🀝🀞🀟🀠🀡') },
  sou: { label: 'Bamboo (sou) 1–9', glyphs: Array.from('🀐🀑🀒🀓🀔🀕🀖🀗🀘') },
}
const WINDS = { label: 'Winds', glyphs: Array.from('🀀🀁🀂🀃'), names: ['East', 'South', 'West', 'North'] }
const DRAGONS = { label: 'Dragons', glyphs: Array.from('🀄🀅🀆'), names: ['Red', 'Green', 'White'] }

const MELDS = [
  { name: 'Sequence (shuntsu)', glyphs: [SUITS.man.glyphs[0], SUITS.man.glyphs[1], SUITS.man.glyphs[2]], note: '3 tiles in numeric order, same suit. Honor tiles can never form a sequence.', color: '#3b6fd8' },
  { name: 'Triplet (kōtsu)', glyphs: [SUITS.pin.glyphs[6], SUITS.pin.glyphs[6], SUITS.pin.glyphs[6]], note: '3 identical tiles.', color: '#2f9e6e' },
  { name: 'Quad (kantsu)', glyphs: [SUITS.sou.glyphs[8], SUITS.sou.glyphs[8], SUITS.sou.glyphs[8], SUITS.sou.glyphs[8]], note: '4 identical tiles, counts as a triplet for hand shape, draws a bonus replacement tile, and reveals a new dora indicator.', color: '#7b4fc9' },
  { name: 'Pair (jantou)', glyphs: [DRAGONS.glyphs[0], DRAGONS.glyphs[0]], note: 'Exactly 2 identical tiles, every complete hand needs exactly one pair, no more, no less (outside seven pairs).', color: '#e07b2a' },
]

export function TileExplorer({ color }: { color: string }) {
  const [cat, setCat] = useState<'man' | 'pin' | 'sou' | 'winds' | 'dragons'>('man')
  return (
    <Card title="The 136-tile set" color={color} note="34 distinct tile types, 4 copies of each (3 suits × 9 ranks × 4 = 108, plus 4 winds + 3 dragons = 7 honor types × 4 = 28; 108 + 28 = 136). Some rule sets add a few red five tiles as bonus dora.">
      <Pills
        label="tile category"
        value={cat}
        onChange={setCat}
        options={[
          ['man', 'Characters'],
          ['pin', 'Dots'],
          ['sou', 'Bamboo'],
          ['winds', 'Winds'],
          ['dragons', 'Dragons'],
        ]}
      />
      {cat === 'man' && <TileRow size="lg" tiles={SUITS.man.glyphs.map((g, i) => ({ glyph: g, label: String(i + 1) }))} />}
      {cat === 'pin' && <TileRow size="lg" tiles={SUITS.pin.glyphs.map((g, i) => ({ glyph: g, label: String(i + 1) }))} />}
      {cat === 'sou' && <TileRow size="lg" tiles={SUITS.sou.glyphs.map((g, i) => ({ glyph: g, label: String(i + 1) }))} />}
      {cat === 'winds' && <TileRow size="lg" tiles={WINDS.glyphs.map((g, i) => ({ glyph: g, label: WINDS.names[i] }))} />}
      {cat === 'dragons' && <TileRow size="lg" tiles={DRAGONS.glyphs.map((g, i) => ({ glyph: g, label: DRAGONS.names[i] }))} />}

      <p className="mt-2 text-sm font-bold">The four meld shapes</p>
      <div className="flex flex-wrap gap-3">
        {MELDS.map((m) => (
          <div key={m.name} className="flex flex-col gap-1.5 rounded-[var(--radius)] border p-2.5" style={{ borderColor: m.color, background: `color-mix(in srgb, ${m.color} 12%, var(--surface))` }}>
            <p className="text-xs font-bold">{m.name}</p>
            <div className="flex gap-1">
              {m.glyphs.map((g, i) => (
                <MahjongTile key={i} glyph={g} size="md" />
              ))}
            </div>
            <p className="max-w-40 text-[11px] leading-snug" style={soft}>
              {m.note}
            </p>
          </div>
        ))}
      </div>
    </Card>
  )
}

// ── winning hand decomposition ───────────────────────────────────────────

type Group = { label: string; glyphs: string[]; color: string }
type Preset = { name: string; groups: Group[]; note: string }

const PRESETS: Preset[] = [
  {
    name: 'Standard hand (4 sets + a pair)',
    note: 'The default winning shape: four sets (sequence or triplet) plus one pair, 14 tiles total. This example hand also qualifies for yakuhai (a triplet of dragons), so it has a valid yaku and can legally win.',
    groups: [
      { label: 'Sequence: 1-2-3 characters', glyphs: [SUITS.man.glyphs[0], SUITS.man.glyphs[1], SUITS.man.glyphs[2]], color: '#3b6fd8' },
      { label: 'Sequence: 4-5-6 characters', glyphs: [SUITS.man.glyphs[3], SUITS.man.glyphs[4], SUITS.man.glyphs[5]], color: '#3b6fd8' },
      { label: 'Triplet: 8-dots', glyphs: [SUITS.pin.glyphs[7], SUITS.pin.glyphs[7], SUITS.pin.glyphs[7]], color: '#2f9e6e' },
      { label: 'Triplet: 9-bamboo', glyphs: [SUITS.sou.glyphs[8], SUITS.sou.glyphs[8], SUITS.sou.glyphs[8]], color: '#2f9e6e' },
      { label: 'Pair: Red dragons', glyphs: [DRAGONS.glyphs[0], DRAGONS.glyphs[0]], color: '#e07b2a' },
    ],
  },
  {
    name: 'Seven pairs (chiitoitsu)',
    note: 'A special hand shape: seven distinct pairs instead of four sets and a pair. It is its own yaku worth 2 han, but cannot be mixed with the standard 4-sets-plus-pair structure, and no tile may be used as a triplet (all 7 pairs must be different tiles).',
    groups: [
      { label: 'Pair: 1-characters', glyphs: [SUITS.man.glyphs[0], SUITS.man.glyphs[0]], color: '#3b6fd8' },
      { label: 'Pair: 5-characters', glyphs: [SUITS.man.glyphs[4], SUITS.man.glyphs[4]], color: '#3b6fd8' },
      { label: 'Pair: 3-dots', glyphs: [SUITS.pin.glyphs[2], SUITS.pin.glyphs[2]], color: '#2f9e6e' },
      { label: 'Pair: 8-dots', glyphs: [SUITS.pin.glyphs[7], SUITS.pin.glyphs[7]], color: '#2f9e6e' },
      { label: 'Pair: 2-bamboo', glyphs: [SUITS.sou.glyphs[1], SUITS.sou.glyphs[1]], color: '#7b4fc9' },
      { label: 'Pair: East wind', glyphs: [WINDS.glyphs[0], WINDS.glyphs[0]], color: '#e07b2a' },
      { label: 'Pair: White dragons', glyphs: [DRAGONS.glyphs[2], DRAGONS.glyphs[2]], color: '#d9534f' },
    ],
  },
  {
    name: 'Thirteen orphans (kokushi musou)',
    note: 'One of every terminal (1 and 9) in each suit, one of every wind, one of every dragon, 13 distinct tile types, plus a duplicate of any one of them to form the pair. Extremely rare (odds often quoted around 1 in several hundred thousand deals), it is a yakuman: the highest-scoring hand in the game, worth a full-value win on its own.',
    groups: [
      { label: 'Terminals: 1 & 9 of each suit', glyphs: [SUITS.man.glyphs[0], SUITS.man.glyphs[8], SUITS.pin.glyphs[0], SUITS.pin.glyphs[8], SUITS.sou.glyphs[0], SUITS.sou.glyphs[8]], color: '#3b6fd8' },
      { label: 'All four winds', glyphs: WINDS.glyphs, color: '#e07b2a' },
      { label: 'All three dragons', glyphs: DRAGONS.glyphs, color: '#d9534f' },
      { label: 'Pair: duplicate 1-character', glyphs: [SUITS.man.glyphs[0]], color: '#7b4fc9' },
    ],
  },
]

export function HandBuilder({ color }: { color: string }) {
  const [sel, setSel] = useState(0)
  const p = PRESETS[sel]
  const total = p.groups.reduce((n, g) => n + g.glyphs.length, 0)
  return (
    <Card title="Decomposing a winning hand" color={color} note="Every complete hand is 14 tiles, grouped into either 4 sets + 1 pair, or the seven-pairs / thirteen-orphans special shapes. Switch between examples to see how the same 14 tiles can be grouped completely differently.">
      <Pills label="example hand" value={String(sel)} onChange={(v) => setSel(Number(v))} options={PRESETS.map((pr, i) => [String(i), pr.name] as [string, string])} />
      <div className="flex flex-wrap gap-3">
        {p.groups.map((g, i) => (
          <div key={i} className="flex flex-col gap-1.5 rounded-[var(--radius)] border p-2" style={{ borderColor: g.color, background: `color-mix(in srgb, ${g.color} 12%, var(--surface))` }}>
            <p className="text-[11px] font-bold">{g.label}</p>
            <div className="flex gap-1">
              {g.glyphs.map((gl, j) => (
                <MahjongTile key={j} glyph={gl} size="md" />
              ))}
            </div>
          </div>
        ))}
      </div>
      <Stat label="tiles in this hand" value={`${total} / 14`} tone={total === 14 ? '#2f9e6e' : '#d9534f'} />
      <p className="text-xs leading-relaxed" style={soft}>
        {p.note}
      </p>
    </Card>
  )
}

// ── gameplay walkthrough ─────────────────────────────────────────────────

const M = SUITS.man.glyphs
const P = SUITS.pin.glyphs
const S = SUITS.sou.glyphs
const EAST = WINDS.glyphs[0]
const RED = DRAGONS.glyphs[0]

type T = { glyph: string; label?: string; highlight?: string }
const t = (glyph: string, label?: string, highlight?: string): T => ({ glyph, label, highlight })

type Scene = {
  title: string
  hand: T[]
  discard?: T
  narration: string
  flag?: 'riichi' | 'win'
}

const SCENES: Scene[] = [
  {
    title: '1. The deal',
    hand: [t(M[0], '1m'), t(M[1], '2m'), t(M[2], '3m'), t(M[3], '4m'), t(M[4], '5m'), t(M[6], '7m'), t(P[5], '6p'), t(P[7], '8p'), t(P[7], '8p'), t(S[8], '9s'), t(S[8], '9s'), t(EAST, 'E'), t(RED, 'red'), t(RED, 'red')],
    discard: t(EAST, 'E'),
    narration: 'As dealer (East), you start with 14 tiles and must discard one. Already visible: a complete sequence (1-2-3 characters), a pair each of 8-dots and 9-bamboo one away from a triplet, and a pair of red dragons. The isolated East wind, no pair, no sequence potential this early, is the easiest tile to let go.',
  },
  {
    title: '2. You draw',
    hand: [t(M[0], '1m'), t(M[1], '2m'), t(M[2], '3m'), t(M[3], '4m'), t(M[4], '5m'), t(M[6], '7m'), t(P[5], '6p'), t(P[7], '8p', '#2f9e6e'), t(P[7], '8p'), t(P[7], '8p'), t(S[8], '9s'), t(S[8], '9s'), t(RED, 'red'), t(RED, 'red')],
    discard: t(P[5], '6p'),
    narration: 'A third 8-dot, the pair just became a complete triplet. The lone 6-dot no longer fits the hand’s shape, so it is discarded instead.',
  },
  {
    title: '3. You draw, and declare riichi',
    hand: [t(M[0], '1m'), t(M[1], '2m'), t(M[2], '3m'), t(M[3], '4m'), t(M[4], '5m'), t(M[6], '7m'), t(P[7], '8p'), t(P[7], '8p'), t(P[7], '8p'), t(S[8], '9s'), t(S[8], '9s', '#2f9e6e'), t(S[8], '9s'), t(RED, 'red'), t(RED, 'red')],
    discard: t(M[6], '7m'),
    narration: 'A third 9-bamboo completes that triplet too. Discarding the now-useless 7-characters leaves exactly 13 tiles in a tenpai (ready) shape: 1-2-3 characters complete, 4-5 characters waiting on a 3 or a 6 to finish a second sequence, two complete triplets, and a pair of dragons. Since the hand is closed (no calls made at all), you declare riichi here, staking 1000 points and locking the hand.',
    flag: 'riichi',
  },
  {
    title: '4. Turns pass',
    hand: [t(M[0], '1m'), t(M[1], '2m'), t(M[2], '3m'), t(M[3], '4m'), t(M[4], '5m'), t(P[7], '8p'), t(P[7], '8p'), t(P[7], '8p'), t(S[8], '9s'), t(S[8], '9s'), t(S[8], '9s'), t(RED, 'red'), t(RED, 'red')],
    narration: 'Once in riichi, the hand is locked, every tile drawn that doesn’t win is discarded automatically, face up, revealing nothing new about strategy, only luck. Several turns pass with no one discarding a 3 or a 6 of characters; the wait (called a ryanmen, or "two-sided wait") is a good one, with up to 8 live tiles that could complete it, but none have appeared yet.',
  },
  {
    title: '5. You draw a 6-characters, tsumo!',
    hand: [t(M[0], '1m'), t(M[1], '2m'), t(M[2], '3m'), t(M[3], '4m'), t(M[4], '5m'), t(M[5], '6m', '#d9534f'), t(P[7], '8p'), t(P[7], '8p'), t(P[7], '8p'), t(S[8], '9s'), t(S[8], '9s'), t(S[8], '9s'), t(RED, 'red'), t(RED, 'red')],
    narration: 'The very tile the hand was waiting for, drawn yourself rather than discarded by an opponent, a self-draw win (tsumo), not a ron. The hand is complete: 1-2-3 characters, 4-5-6 characters, a triplet of 8-dots, a triplet of 9-bamboo, and a pair of red dragons. 14 tiles, 4 sets and a pair.',
    flag: 'win',
  },
]

export function GameplayWalkthrough({ color }: { color: string }) {
  const [i, setI] = useState(0)
  const scene = SCENES[i]
  const last = i === SCENES.length - 1

  return (
    <Card title="A full hand, start to finish" color={color} note="One illustrative hand played out from the deal to a winning tsumo, narrated step by step, the same hand used as the worked scoring example at the end.">
      <div className="flex items-center justify-between gap-2">
        <p className="text-sm font-bold">{scene.title}</p>
        <div className="flex gap-1.5">
          <Btn onClick={() => setI((n) => Math.max(0, n - 1))} disabled={i === 0}>
            ← prev
          </Btn>
          <Btn onClick={() => setI((n) => Math.min(SCENES.length - 1, n + 1))} disabled={last}>
            next →
          </Btn>
        </div>
      </div>
      <p className="text-xs" style={soft}>
        Step {i + 1} of {SCENES.length}
      </p>
      <TileRow size="md" tiles={scene.hand} />
      {scene.discard && (
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold" style={soft}>
            discards:
          </span>
          <MahjongTile glyph={scene.discard.glyph} label={scene.discard.label} size="sm" faded />
        </div>
      )}
      {scene.flag === 'riichi' && (
        <div className="rounded-[var(--radius)] border px-3 py-1.5 text-sm font-bold" style={{ borderColor: 'var(--line)', background: 'color-mix(in srgb, #e07b2a 25%, var(--surface))' }}>
          Riichi declared, 1000 points staked, hand locked
        </div>
      )}
      {scene.flag === 'win' && (
        <div className="rounded-[var(--radius)] border px-3 py-1.5 text-sm font-bold" style={{ borderColor: 'var(--line)', background: 'color-mix(in srgb, #2f9e6e 25%, var(--surface))' }}>
          Tsumo! Hand complete.
        </div>
      )}
      <p className="text-sm leading-relaxed">{scene.narration}</p>
      {last && (
        <div className="flex flex-col gap-1.5 rounded-[var(--radius)] border p-3" style={{ borderColor: 'var(--line)', background: 'var(--paper-2)' }}>
          <p className="text-xs font-bold">Scoring this hand (see the full scoring page for the formula)</p>
          <p className="text-xs leading-relaxed" style={soft}>
            Yaku: riichi (1 han) + menzen tsumo (1 han) + 1 dora = <strong>3 han</strong>. Fu: 20 base + 2 (tsumo) + 4 (closed triplet, 8-dots) + 4 (closed triplet, 9-bamboo) = <strong>30 fu</strong>. Base points = 30 × 2⁵ = 960, rounded up to 1000. As dealer winning by tsumo, every other player pays double the base: <strong>2000 points each, 6000 total</strong>, plus the 1000-point riichi stick returns to you.
          </p>
        </div>
      )}
    </Card>
  )
}
