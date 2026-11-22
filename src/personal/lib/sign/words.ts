import type { Anchor, V3 } from './hand'
import { REST } from './scene'
import type { BodyKey, Face, HandKey, HandRef, Loc } from './scene'
import type { ShapeName } from './shapes'

// Everyday ASL signs, animated on the cartoon signer. Each sign is also described by the
// four things that make up any sign (handshape, location, movement and palm orientation),
// so the written steps and the animation back each other up.
//
// Hands are written from the signer's side: R is the dominant hand. A left hand is
// written as if it were a right hand, and mirrored, so the same numbers make the mirror
// image. Useful turns (see hand.ts): [0,0,0] palm forward, fingers up; [0,180,0] palm
// towards the signer; [0,90,0] palm towards the middle; [0,90,-90] fingers pointing to
// the middle, palm down; [0,-55,-90] the same, palm up; [90,0,0] fingers forward, palm down.

export type Word = {
  word: string
  // Other English words this sign covers.
  also?: string[]
  keys: BodyKey[]
  shape: string
  where: string
  move: string
  palm?: string
  // A way to remember it.
  hint?: string
}

// ── helpers for writing movement ───────────────────────────────────────────

const h = (shape: ShapeName, rot: V3, at: Loc | HandRef | V3, by?: Anchor, off?: V3): HandKey => ({ shape, rot, at, by, off })

const shift = (k: HandKey, d: V3): HandKey => ({ ...k, off: [(k.off?.[0] ?? 0) + d[0], (k.off?.[1] ?? 0) + d[1], (k.off?.[2] ?? 0) + d[2]] })

// Back and forth between two placements, `times` times, starting at t0.
function taps(t0: number, a: Partial<BodyKey>, b: Partial<BodyKey>, times = 2, beat = 220): BodyKey[] {
  const out: BodyKey[] = []
  for (let i = 0; i < times; i++) {
    out.push({ ...b, t: t0 + beat * (2 * i + 1) })
    out.push({ ...a, t: t0 + beat * (2 * i + 2) })
  }
  return out
}

// A hand moving in circles where it is, in the picture plane or flat ('xz').
function circles(t0: number, side: 'R' | 'L', k: HandKey, r: number, turns = 2, ms = 650, plane: 'xy' | 'xz' = 'xy', extra: Partial<BodyKey> = {}): BodyKey[] {
  const out: BodyKey[] = []
  const steps = 12
  for (let i = 1; i <= turns * steps; i++) {
    const a = (i / steps) * Math.PI * 2
    const d: V3 = plane === 'xy' ? [Math.sin(a) * r, Math.cos(a) * r - r, 0] : [Math.sin(a) * r, 0, Math.cos(a) * r - r]
    out.push({ ...extra, t: t0 + (i * ms) / steps, [side]: shift(k, d), lin: true })
  }
  return out
}

// Starts with a held first pose and ends with a held last pose, so replays read clearly.
const clip = (first: Omit<BodyKey, 't'>, ...rest: BodyKey[]): BodyKey[] => {
  const keys = [{ t: 0, ...first }, { t: 250 }, ...rest.map((k) => ({ ...k, t: k.t + 250 }))]
  return [...keys, { t: keys[keys.length - 1].t + 600 }]
}

const both = (k: HandKey) => ({ R: k, L: k })

// Placements used by many signs.
const BASE_UP = h('B', [0, -55, -90], 'centre', undefined, [-4, -20, -14]) // flat, palm up, fingers in
const BASE_DOWN = h('B', [0, 90, -90], 'centre', undefined, [-4, -14, -16]) // flat, palm down
const smile: Face = { mouth: 'smile' }
const wh: Face = { brows: -1 } // what, where, who…: brows down

export const WORDS: Record<string, Word> = {
  // ── greetings and courtesy ──
  hello: {
    word: 'Hello',
    also: ['hi'],
    shape: 'B (flat hand)',
    where: 'Side of the forehead',
    move: 'Out and away from the head, like a small salute',
    palm: 'Forward',
    hint: 'A friendly salute.',
    keys: clip(
      { R: h('B', [0, 10, -28], 'temple', 'i', [-2, 8, 4]), face: smile },
      { t: 450, R: h('B', [0, 10, -10], 'temple', 'i', [-56, 0, 50]) },
    ),
  },
  goodbye: {
    word: 'Goodbye',
    also: ['bye'],
    shape: 'Open hand',
    where: 'Beside the shoulder',
    move: 'Fold the fingers down and up together a few times: a wave',
    palm: 'Forward',
    keys: clip(
      { R: h('B', [0, 0, 0], 'shoulder-d', 'palm', [-6, 56, 60]), face: smile },
      ...taps(0, { R: h('B', [0, 0, 0], 'shoulder-d', 'palm', [-6, 56, 60]) }, { R: h('bent-B', [0, 0, 0], 'shoulder-d', 'palm', [-6, 56, 60]) }, 3, 190),
    ),
  },
  'thank-you': {
    word: 'Thank you',
    also: ['thanks'],
    shape: 'B (flat hand)',
    where: 'Fingertips start at the chin',
    move: 'Forward and down towards the person you are thanking',
    palm: 'Towards you, turning to face up',
    hint: 'Like blowing a kiss of thanks.',
    keys: clip({ R: h('B', [0, 180, 0], 'chin', 'm', [0, 2, 4]), face: smile }, { t: 550, R: h('B', [70, 180, 0], 'chin', 'm', [-10, -60, 90]) }),
  },
  please: {
    word: 'Please',
    shape: 'B (flat hand)',
    where: 'Centre of the chest',
    move: 'Rub in a circle on the chest',
    palm: 'On the chest',
    keys: clip({ R: h('B', [0, 180, -80], 'chest', 'palm', [-6, 0, 2]), face: smile }, ...circles(0, 'R', h('B', [0, 180, -80], 'chest', 'palm', [-6, 0, 2]), 14, 2, 1300)),
  },
  sorry: {
    word: 'Sorry',
    also: ['apologise'],
    shape: 'A or S (fist)',
    where: 'Centre of the chest',
    move: 'Rub in a circle on the chest',
    palm: 'On the chest',
    hint: 'Like PLEASE, but with a fist and a sorry face.',
    keys: clip({ R: h('A', [0, 180, -20], 'chest', 'knuckles', [-4, 0, 6]), face: { mouth: 'frown', brows: 0.6 } }, ...circles(0, 'R', h('A', [0, 180, -20], 'chest', 'knuckles', [-4, 0, 6]), 14, 2, 1300)),
  },
  yes: {
    word: 'Yes',
    shape: 'S (fist)',
    where: 'In front of the shoulder',
    move: 'Bend the wrist down and up, like a head nodding',
    palm: 'Forward',
    hint: 'Your fist is a head nodding yes. Nod your real head too.',
    keys: clip(
      { R: h('S', [-10, 0, 0], 'neutral', 'palm', [-6, 30, -10]) },
      ...taps(0, { R: h('S', [-10, 0, 0], 'neutral', 'palm', [-6, 30, -10]), face: { head: [0, 0] } }, { R: h('S', [45, 0, 0], 'neutral', 'palm', [-6, 30, -10]), face: { head: [0, -9] } }, 3, 200),
    ),
  },
  no: {
    word: 'No',
    shape: 'Index, middle finger and thumb',
    where: 'In front of the shoulder',
    move: 'Snap the two fingers shut onto the thumb, twice',
    palm: 'Forward and down',
    hint: 'A mouth snapping shut on "no". Shake your head too.',
    keys: clip(
      { R: h('snap-open', [20, 30, 0], 'neutral', 'palm', [-6, 40, -10]) },
      ...taps(0, { R: h('snap-open', [20, 30, 0], 'neutral', 'palm', [-6, 40, -10]), face: { head: [-5, 0] } }, { R: h('snap-shut', [20, 30, 0], 'neutral', 'palm', [-6, 40, -10]), face: { head: [5, 0] } }, 2, 200),
    ),
  },
  nice: {
    word: 'Nice',
    also: ['clean'],
    shape: 'B (flat hand), both hands',
    where: 'The dominant palm on the other palm',
    move: 'Slide the top hand across the bottom one, from the heel to the fingertips',
    palm: 'Top hand down, bottom hand up',
    keys: clip(
      { L: BASE_UP, R: h('B', [0, 90, -90], 'L:palm', 'palm', [20, 4, 0]), face: smile },
      { t: 550, R: h('B', [0, 90, -90], 'L:palm', 'palm', [-40, 4, 4]) },
    ),
  },
  meet: {
    word: 'Meet',
    shape: '1 (index finger), both hands',
    where: 'In front of the body',
    move: 'Bring the two hands together until they touch, like two people meeting',
    palm: 'Facing each other',
    keys: clip({ ...both(h('1', [0, 90, 0], 'centre', 'palm', [-42, 0, 0])), face: smile }, { t: 450, ...both(h('1', [0, 90, 0], 'centre', 'palm', [-8, 0, 0])) }),
  },
  welcome: {
    word: 'Welcome',
    also: ["you're welcome"],
    shape: 'B (flat hand)',
    where: 'Out to the side',
    move: 'Sweep the open hand in towards the body, as if inviting someone in',
    palm: 'Up',
    keys: clip({ R: h('B', [90, 180, 0], 'side', 'palm', [-10, 0, 20]), face: smile }, { t: 600, R: h('B', [90, 180, 0], 'stomach', 'palm', [0, 10, 40]) }),
  },
  'i-love-you': {
    word: 'I love you',
    shape: 'ILY: thumb, index and little finger out',
    where: 'In front of the shoulder',
    move: 'Hold it up, often with a small shake',
    palm: 'Forward',
    hint: 'It combines the letters I, L and Y.',
    keys: clip(
      { R: h('ILY', [0, 0, 0], 'neutral', 'palm', [-10, 20, -10]), face: smile },
      ...taps(0, { R: h('ILY', [0, 0, 0], 'neutral', 'palm', [-10, 20, -10]) }, { R: h('ILY', [0, 0, 6], 'neutral', 'palm', [-14, 20, -10]) }, 2, 200),
    ),
  },
  fine: {
    word: 'Fine',
    shape: '5 (open hand, fingers spread)',
    where: 'Thumb on the chest',
    move: 'Tap the thumb on the chest, twice',
    palm: 'Sideways',
    keys: clip(
      { R: h('5', [0, 40, 0], 'chest', 't', [-6, 0, 14]), face: smile },
      ...taps(0, { R: h('5', [0, 40, 0], 'chest', 't', [-6, 0, 14]) }, { R: h('5', [0, 40, 0], 'chest', 't', [-6, 0, 2]) }),
    ),
  },
  good: {
    word: 'Good',
    shape: 'B (flat hand)',
    where: 'Fingertips start at the chin',
    move: 'Move the hand down and forward from the chin, often landing in the other palm',
    palm: 'Towards you, then up',
    hint: 'Something tasted good: it came from the mouth.',
    keys: clip(
      { R: h('B', [0, 180, 0], 'chin', 'm', [0, 2, 4]), L: BASE_UP, face: smile },
      { t: 550, R: h('B', [70, 180, 0], 'L:palm', 'back', [10, 4, 0]) },
    ),
  },
  bad: {
    word: 'Bad',
    shape: 'B (flat hand)',
    where: 'Fingertips start at the chin',
    move: 'Move the hand down, flipping it over so the palm faces down',
    palm: 'Towards you, then down',
    hint: 'GOOD lands palm up; BAD throws it away palm down.',
    keys: clip({ R: h('B', [0, 180, 0], 'chin', 'm', [0, 2, 4]), face: { mouth: 'frown' } }, { t: 500, R: h('B', [70, 0, 0], 'chin', 'm', [-10, -64, 60]) }),
  },

  // ── questions ──
  what: {
    word: 'What',
    shape: '5 (open hands), both hands',
    where: 'In front of the body',
    move: 'Shake both open hands a little from side to side',
    palm: 'Up',
    hint: 'Hands up in a shrug. Lower your eyebrows, as in every wh- question.',
    keys: clip(
      { ...both(h('5', [70, 180, 0], 'centre', 'palm', [-40, -4, -10])), face: wh },
      ...taps(0, both(h('5', [70, 180, 0], 'centre', 'palm', [-40, -4, -10])), both(h('5', [70, 180, -14], 'centre', 'palm', [-48, -4, -10])), 2, 180),
    ),
  },
  where: {
    word: 'Where',
    shape: '1 (index finger)',
    where: 'In front of the shoulder',
    move: 'Shake the finger from side to side',
    palm: 'Forward',
    keys: clip(
      { R: h('1', [0, 0, 0], 'neutral', 'palm', [-6, 30, -10]), face: wh },
      ...taps(0, { R: h('1', [0, 0, 14], 'neutral', 'palm', [-12, 30, -10]) }, { R: h('1', [0, 0, -14], 'neutral', 'palm', [0, 30, -10]) }, 3, 160),
    ),
  },
  who: {
    word: 'Who',
    shape: 'L, with the index finger bending',
    where: 'Thumb on the chin',
    move: 'Bend the index finger up and down a few times',
    palm: 'Sideways',
    keys: clip(
      { R: h('L', [0, 90, 0], 'chin', 't', [0, 0, 4]), face: wh },
      ...taps(0, { R: h('L', [0, 90, 0], 'chin', 't', [0, 0, 4]) }, { R: h('bent-L', [0, 90, 0], 'chin', 't', [0, 0, 4]) }, 3, 170),
    ),
  },
  why: {
    word: 'Why',
    shape: 'Bent hand, changing to Y',
    where: 'Fingertips on the forehead',
    move: 'Pull the hand forward from the forehead, changing to a Y hand',
    palm: 'Towards you',
    keys: clip({ R: h('bent-B', [0, 180, 0], 'forehead', 'm', [-10, 0, 0]), face: wh }, { t: 500, R: h('Y', [0, 180, 0], 'forehead', 'palm', [-20, -20, 70]) }),
  },
  when: {
    word: 'When',
    shape: '1 (index finger), both hands',
    where: 'In front of the body',
    move: 'Circle the dominant fingertip around the other, then touch the tips together',
    palm: 'Base hand facing in',
    keys: clip(
      { L: h('1', [0, 160, -20], 'centre', 'i', [-6, 0, 0]), R: h('1', [60, 0, 0], 'L:i', 'i', [0, 16, 4]), face: wh },
      ...circles(0, 'R', h('1', [60, 0, 0], 'L:i', 'i', [0, 16, 4]), 14, 1, 700),
      { t: 950, R: h('1', [60, 0, 0], 'L:i', 'i', [0, 2, 4]) },
    ),
  },
  how: {
    word: 'How',
    shape: 'Bent hands, both hands',
    where: 'In front of the chest, knuckles touching',
    move: 'Roll the hands forward together so the palms turn up',
    palm: 'Down, turning up',
    keys: clip({ ...both(h('bent-B', [90, 180, -90], 'centre', 'knuckles', [-2, 0, -10])), face: wh }, { t: 550, ...both(h('bent-B', [-30, 180, -90], 'centre', 'knuckles', [-10, 0, 0])) }),
  },
  which: {
    word: 'Which',
    shape: 'A (fist, thumb up), both hands',
    where: 'In front of the body',
    move: 'Move the two hands up and down, taking turns, like weighing two choices',
    palm: 'Facing each other',
    keys: clip(
      { ...both(h('A', [0, 90, 0], 'centre', undefined, [-34, -30, -10])), face: wh },
      ...taps(
        0,
        { R: h('A', [0, 90, 0], 'centre', undefined, [-34, -16, -10]), L: h('A', [0, 90, 0], 'centre', undefined, [-34, -44, -10]) },
        { R: h('A', [0, 90, 0], 'centre', undefined, [-34, -44, -10]), L: h('A', [0, 90, 0], 'centre', undefined, [-34, -16, -10]) },
        2,
        260,
      ),
    ),
  },

  // ── people ──
  me: {
    word: 'Me',
    also: ['I'],
    shape: '1 (index finger)',
    where: 'Your own chest',
    move: 'Point to yourself, touching the chest',
    palm: 'Sideways',
    keys: clip({ R: h('1', [-45, 150, 30], 'chest', 'i', [-6, 6, 24]) }, { t: 300, R: h('1', [-45, 150, 30], 'chest', 'i', [0, 0, 2]) }),
  },
  you: {
    word: 'You',
    shape: '1 (index finger)',
    where: 'In front of the body',
    move: 'Point at the person you mean',
    palm: 'Down',
    keys: clip({ R: h('1', [50, 0, 0], 'neutral', 'wrist', [4, -10, -30]) }, { t: 350, R: h('1', [60, 0, 0], 'neutral', 'wrist', [8, -6, 10]) }),
  },
  'he-she': {
    word: 'He, she, they',
    also: ['him', 'her', 'it', 'they'],
    shape: '1 (index finger)',
    where: 'To the side',
    move: 'Point to the person, or to a spot you have set up for them',
    palm: 'Down',
    hint: 'ASL does not mark gender in pronouns: one point covers he, she and they.',
    keys: clip({ R: h('1', [0, 90, -90], 'side', 'wrist', [40, -6, 0]) }, { t: 350, R: h('1', [10, 70, -100], 'side', 'wrist', [10, -6, 10]) }),
  },
  we: {
    word: 'We',
    also: ['us'],
    shape: '1 (index finger)',
    where: 'The chest, one side then the other',
    move: 'Touch the dominant side of the chest, then arc over to touch the other side',
    palm: 'Towards you',
    keys: clip({ R: h('1', [-60, 180, 0], 'chest-d', 'i', [0, 6, 4]) }, { t: 300, R: h('1', [-60, 180, 0], 'chest', 'i', [0, 20, 22]) }, { t: 600, R: h('1', [-60, 180, 0], 'chest-n', 'i', [0, 6, 4]) }),
  },
  father: {
    word: 'Father',
    also: ['dad'],
    shape: '5 (open hand, fingers spread)',
    where: 'Thumb on the forehead',
    move: 'Tap the thumb on the forehead, twice',
    palm: 'Sideways',
    hint: 'Male signs are made around the forehead; female signs around the chin.',
    keys: clip(
      { R: h('5', [0, 50, 0], 'forehead', 't', [0, -4, 12]), face: smile },
      ...taps(0, { R: h('5', [0, 50, 0], 'forehead', 't', [0, -4, 12]) }, { R: h('5', [0, 50, 0], 'forehead', 't', [0, -4, 2]) }),
    ),
  },
  mother: {
    word: 'Mother',
    also: ['mum', 'mom'],
    shape: '5 (open hand, fingers spread)',
    where: 'Thumb on the chin',
    move: 'Tap the thumb on the chin, twice',
    palm: 'Sideways',
    hint: 'Female signs are made around the chin; male signs around the forehead.',
    keys: clip({ R: h('5', [0, 50, 0], 'chin', 't', [0, 0, 12]), face: smile }, ...taps(0, { R: h('5', [0, 50, 0], 'chin', 't', [0, 0, 12]) }, { R: h('5', [0, 50, 0], 'chin', 't', [0, 0, 2]) })),
  },
  brother: {
    word: 'Brother',
    shape: 'L, both hands',
    where: 'Starts at the forehead',
    move: 'Bring the L down from the forehead to land on top of the other L',
    palm: 'Sideways',
    hint: 'The male area (forehead) plus SAME (two matching hands).',
    keys: clip(
      { R: h('L', [80, 90, 0], 'forehead', 't', [-4, 0, 6]), L: h('L', [80, 90, 0], 'centre', undefined, [-20, -40, -40]) },
      { t: 550, R: h('L', [80, 90, 0], 'L:i1', 'i1', [0, 14, 0]) },
    ),
  },
  sister: {
    word: 'Sister',
    shape: 'L, both hands',
    where: 'Starts at the jaw',
    move: 'Bring the L down from the chin to land on top of the other L',
    palm: 'Sideways',
    hint: 'The female area (chin) plus SAME.',
    keys: clip(
      { R: h('L', [80, 90, 0], 'cheek', 't', [4, -14, 6]), L: h('L', [80, 90, 0], 'centre', undefined, [-20, -40, -40]) },
      { t: 550, R: h('L', [80, 90, 0], 'L:i1', 'i1', [0, 14, 0]) },
    ),
  },
  baby: {
    word: 'Baby',
    shape: 'Flat hands, one resting on the other arm',
    where: 'In front of the body',
    move: 'Rock the arms from side to side, as if cradling a baby',
    palm: 'Up',
    keys: clip(
      { R: shift(BASE_UP, [-12, 4, 10]), L: shift(BASE_UP, [-12, -4, 0]), face: smile },
      ...taps(
        0,
        { R: { ...shift(BASE_UP, [-2, 10, 10]), rot: [0, -55, -75] }, L: { ...shift(BASE_UP, [-22, -10, 0]), rot: [0, -55, -105] } },
        { R: { ...shift(BASE_UP, [-22, -2, 10]), rot: [0, -55, -105] }, L: { ...shift(BASE_UP, [-2, 2, 0]), rot: [0, -55, -75] } },
        2,
        320,
      ),
    ),
  },
  friend: {
    word: 'Friend',
    shape: 'X (hooked index), both hands',
    where: 'In front of the body',
    move: 'Hook the index fingers together, then swap which hand is on top and hook again',
    palm: 'Top hand down, bottom hand up',
    hint: 'Two people linked together.',
    keys: clip(
      { L: h('X', [-20, -60, -90], 'centre', 'i', [0, -10, 0]), R: h('X', [20, 90, -90], 'L:i', 'i', [0, 6, 0]), face: smile },
      { t: 350, L: h('X', [-20, -60, -90], 'centre', 'i', [0, -4, 0]), R: h('X', [20, 90, -90], 'centre', 'i', [0, -20, 0]) },
      { t: 700, L: h('X', [20, 90, -90], 'R:i', 'i', [0, 6, 0]), R: h('X', [-20, -60, -90], 'centre', 'i', [0, -10, 0]) },
    ),
  },
  family: {
    word: 'Family',
    shape: 'F, both hands',
    where: 'In front of the body',
    move: 'Start with the index fingers touching, then circle the hands outwards until the little fingers meet',
    palm: 'Forward, turning to face you',
    hint: 'A circle of people, made with F for family.',
    keys: clip(
      { ...both(h('F', [0, 30, 0], 'centre', 'i', [-4, 0, 0])), face: smile },
      { t: 350, ...both(h('F', [0, 90, 0], 'centre', 'i', [-40, 0, 20])) },
      { t: 700, ...both(h('F', [0, 160, 0], 'centre', 'p', [-6, 0, 30])) },
    ),
  },
  man: {
    word: 'Man',
    shape: '5 (open hand)',
    where: 'Thumb starts on the forehead',
    move: 'Move from the forehead down to touch the chest',
    palm: 'Sideways',
    keys: clip({ R: h('5', [0, 50, 0], 'forehead', 't', [0, -4, 2]) }, { t: 550, R: h('5', [0, 50, 0], 'chest', 't', [0, 0, 2]) }),
  },
  woman: {
    word: 'Woman',
    shape: '5 (open hand)',
    where: 'Thumb starts on the chin',
    move: 'Move from the chin down to touch the chest',
    palm: 'Sideways',
    keys: clip({ R: h('5', [0, 50, 0], 'chin', 't', [0, 0, 2]) }, { t: 550, R: h('5', [0, 50, 0], 'chest', 't', [0, 0, 2]) }),
  },
  deaf: {
    word: 'Deaf',
    shape: '1 (index finger)',
    where: 'The cheek near the ear, then near the mouth',
    move: 'Touch near the ear, then near the corner of the mouth',
    palm: 'Towards you',
    hint: 'Many Deaf people write Deaf with a capital D to mean the community and culture.',
    keys: clip({ R: h('1', [-40, 180, 30], 'cheek', 'i', [-8, 14, 0]) }, { t: 450, R: h('1', [-40, 180, 30], 'cheek', 'i', [-8, 14, 12]) }, { t: 700, R: h('1', [-40, 180, 30], 'mouth', 'i', [-14, -6, 0]) }),
  },
  hearing: {
    word: 'Hearing (person)',
    shape: '1 (index finger)',
    where: 'In front of the mouth',
    move: 'Roll the finger forward in small circles, like words coming out',
    palm: 'Down',
    hint: 'In Deaf culture, "hearing" means someone who is not Deaf.',
    keys: clip({ R: h('1', [0, 90, -90], 'mouth', 'i', [2, 0, 18]) }, ...circles(0, 'R', h('1', [0, 90, -90], 'mouth', 'i', [2, 0, 18]), 10, 2, 800, 'xy')),
  },

  // ── feelings ──
  happy: {
    word: 'Happy',
    also: ['glad'],
    shape: 'B (flat hand)',
    where: 'The chest',
    move: 'Brush up the chest in small forward circles, twice',
    palm: 'Towards you',
    keys: clip(
      { R: h('B', [0, 180, -80], 'chest', 'palm', [-4, -14, 2]), face: smile },
      { t: 260, R: h('B', [0, 180, -80], 'chest', 'palm', [-4, 14, 2]) },
      { t: 450, R: h('B', [0, 180, -80], 'chest', 'palm', [-4, -14, 22]) },
      { t: 700, R: h('B', [0, 180, -80], 'chest', 'palm', [-4, 14, 2]) },
    ),
  },
  sad: {
    word: 'Sad',
    shape: '5 (open hands), both hands',
    where: 'In front of the face',
    move: 'Drop both hands slowly down in front of the face, with a sad face',
    palm: 'Towards you',
    keys: clip({ ...both(h('5', [0, 180, 0], 'eye', 'm', [-6, 10, 10])), face: { mouth: 'frown', brows: 0.8 } }, { t: 700, ...both(h('5', [0, 180, 0], 'eye', 'm', [-6, -50, 14])) }),
  },
  love: {
    word: 'Love',
    shape: 'S (fists), both hands',
    where: 'Crossed over the chest',
    move: 'Cross the fists over the heart, as if hugging something close',
    palm: 'Towards you',
    keys: clip(
      { ...both(h('S', [0, 180, 0], 'chest', 'back', [0, -10, 60])), face: smile },
      { t: 500, R: h('S', [0, 180, -40], 'chest-n', 'palm', [-8, 0, 4]), L: h('S', [0, 180, -40], 'chest-n', 'palm', [-8, 0, 16]) },
    ),
  },
  like: {
    word: 'Like',
    shape: 'Open 8, closing',
    where: 'The chest',
    move: 'Pull the hand away from the chest, closing the middle finger and thumb together',
    palm: 'Towards you',
    keys: clip({ R: h('open-8', [0, 180, 0], 'chest', 'm', [0, 0, 2]), face: smile }, { t: 500, R: h('8-closed', [0, 180, 0], 'chest', 'm', [0, 0, 50]) }),
  },
  angry: {
    word: 'Angry',
    also: ['mad'],
    shape: 'Claw hand',
    where: 'In front of the face',
    move: 'Pull the clawed hand up and away from the face, tensely',
    palm: 'Towards you',
    keys: clip({ R: h('claw', [0, 180, 0], 'mouth', 'palm', [0, -10, 18]), face: { mouth: 'frown', brows: -1 } }, { t: 400, R: h('claw', [0, 180, 0], 'mouth', 'palm', [0, 14, 40]) }),
  },
  tired: {
    word: 'Tired',
    shape: 'Bent hands, both hands',
    where: 'Fingertips on the chest',
    move: 'Let the hands droop down, rolling on the fingertips',
    palm: 'Towards you',
    keys: clip({ ...both(h('bent-B', [0, 180, -90], 'chest-d', 'i', [6, 0, 0])), face: { brows: 0.5, mouth: 'flat' } }, { t: 600, ...both(h('bent-B', [0, 180, -150], 'chest-d', 'i', [6, -6, 0])) }),
  },
  scared: {
    word: 'Scared',
    also: ['afraid', 'frightened'],
    shape: 'S changing to 5, both hands',
    where: 'In front of the chest',
    move: 'Snap the fists open towards each other, as if startled',
    palm: 'Towards you',
    keys: clip({ ...both(h('S', [0, 180, 0], 'chest-d', undefined, [-10, -30, 20])), face: { mouth: 'o', brows: 1 } }, { t: 260, ...both(h('5', [0, 180, -25], 'chest-d', undefined, [-8, -20, 30])) }),
  },

  // ── everyday needs ──
  eat: {
    word: 'Eat',
    also: ['food'],
    shape: 'Flat O',
    where: 'The mouth',
    move: 'Tap the fingertips on the lips, twice',
    palm: 'Towards you',
    keys: clip({ R: h('flat-O', [-20, 180, 0], 'mouth', 'm', [0, 0, 14]) }, ...taps(0, { R: h('flat-O', [-20, 180, 0], 'mouth', 'm', [0, 0, 14]) }, { R: h('flat-O', [-20, 180, 0], 'mouth', 'm', [0, 0, 2]) })),
  },
  drink: {
    word: 'Drink',
    shape: 'C',
    where: 'The chin',
    move: 'Tip the C towards the mouth, like drinking from a cup',
    palm: 'Sideways',
    keys: clip({ R: h('C', [0, 80, 0], 'chin', 't', [0, 0, 6]) }, { t: 500, R: h('C', [0, 80, 40], 'chin', 't', [4, 4, 2]) }),
  },
  water: {
    word: 'Water',
    shape: 'W',
    where: 'The chin',
    move: 'Tap the index finger on the chin, twice',
    palm: 'Sideways',
    hint: 'W for water, at the mouth because you drink it.',
    keys: clip({ R: h('W', [0, 80, 0], 'chin', 'i', [0, 0, 12]) }, ...taps(0, { R: h('W', [0, 80, 0], 'chin', 'i', [0, 0, 12]) }, { R: h('W', [0, 80, 0], 'chin', 'i', [0, 0, 2]) })),
  },
  bathroom: {
    word: 'Bathroom',
    also: ['toilet'],
    shape: 'T',
    where: 'In front of the shoulder',
    move: 'Shake the T from side to side by twisting the wrist',
    palm: 'Forward',
    hint: 'T for toilet.',
    keys: clip(
      { R: h('T', [0, 0, 0], 'neutral', 'palm', [-6, 24, -10]) },
      ...taps(0, { R: h('T', [0, -30, 0], 'neutral', 'palm', [-6, 24, -10]) }, { R: h('T', [0, 30, 0], 'neutral', 'palm', [-6, 24, -10]) }, 3, 150),
    ),
  },
  help: {
    word: 'Help',
    shape: 'A (thumb up) on a flat hand',
    where: 'In front of the body',
    move: 'Rest the fist on the flat palm, then lift both hands up together',
    palm: 'Bottom hand up',
    hint: 'The bottom hand gives the other a lift.',
    keys: clip({ L: BASE_UP, R: h('A', [0, 90, 0], 'L:palm', 'side', [6, 0, 0]) }, { t: 500, L: shift(BASE_UP, [0, 30, 0]), R: h('A', [0, 90, 0], 'L:palm', 'side', [6, 0, 0]) }),
  },
  finish: {
    word: 'Finish',
    also: ['done', 'already'],
    shape: '5 (open hands), both hands',
    where: 'In front of the chest',
    move: 'Flick both hands outwards, turning the palms from facing you to facing down',
    palm: 'Towards you, flipping out',
    hint: 'Also used to show something already happened.',
    keys: clip({ ...both(h('5', [0, 180, 0], 'centre', 'palm', [-30, -6, -30])) }, { t: 350, ...both(h('5', [70, 40, 0], 'centre', 'palm', [-56, -10, -10])) }),
  },
  want: {
    word: 'Want',
    shape: 'Claw hands, both hands',
    where: 'In front of the body',
    move: 'Pull both clawed hands in towards you',
    palm: 'Up',
    keys: clip({ ...both(h('claw', [80, 180, 0], 'centre', 'palm', [-30, -20, 20])) }, { t: 450, ...both(h('claw', [80, 180, 0], 'centre', 'palm', [-30, -10, -30])) }),
  },
  need: {
    word: 'Need',
    also: ['must', 'should'],
    shape: 'X (hooked index)',
    where: 'In front of the body',
    move: 'Bend the wrist down sharply, twice',
    palm: 'Down',
    keys: clip({ R: h('X', [60, 0, 0], 'neutral', 'palm', [0, 0, -20]) }, ...taps(0, { R: h('X', [60, 0, 0], 'neutral', 'palm', [0, 0, -20]) }, { R: h('X', [100, 0, 0], 'neutral', 'palm', [0, -8, -20]) })),
  },
  more: {
    word: 'More',
    shape: 'Flat O, both hands',
    where: 'In front of the body',
    move: 'Tap the fingertips of both hands together, twice',
    palm: 'Facing each other',
    keys: clip(
      { ...both(h('flat-O', [0, 140, -90], 'centre', 'm', [-16, -12, 0])) },
      ...taps(0, both(h('flat-O', [0, 140, -90], 'centre', 'm', [-16, -12, 0])), both(h('flat-O', [0, 140, -90], 'centre', 'm', [-3, -12, 0]))),
    ),
  },
  stop: {
    word: 'Stop',
    shape: 'B (flat hand), both hands',
    where: 'The other hand is held flat, palm up',
    move: 'Chop the side of the dominant hand down onto the palm, once, sharply',
    palm: 'Dominant palm faces sideways',
    keys: clip({ L: BASE_UP, R: h('B', [0, 70, 0], 'L:palm', 'side', [0, 50, 0]) }, { t: 220, R: h('B', [0, 70, 0], 'L:palm', 'side', [0, 3, 0]), lin: true }),
  },
  wait: {
    word: 'Wait',
    shape: '5 (open hands), both hands',
    where: 'To one side of the body',
    move: 'Hold both hands up, palms up, and wiggle the fingers',
    palm: 'Up',
    keys: clip(
      { R: h('5', [60, 180, 0], 'side', 'palm', [10, 0, 0]), L: h('5', [60, 180, 0], 'centre', 'palm', [20, -10, -20]) },
      ...taps(
        0,
        { R: h('5', [60, 180, 0], 'side', 'palm', [10, 0, 0]), L: h('5', [60, 180, 0], 'centre', 'palm', [20, -10, -20]) },
        { R: h('bent-5', [60, 180, 0], 'side', 'palm', [10, 0, 0]), L: h('bent-5', [60, 180, 0], 'centre', 'palm', [20, -10, -20]) },
        3,
        150,
      ),
    ),
  },
  again: {
    word: 'Again',
    also: ['repeat'],
    shape: 'Bent hand onto a flat hand',
    where: 'In front of the body',
    move: 'Arc the bent hand over and land its fingertips in the flat palm',
    palm: 'Bottom hand up',
    keys: clip({ L: BASE_UP, R: h('bent-B', [0, -60, -90], 'L:palm', 'm', [-10, 30, 0]) }, { t: 300, R: h('bent-B', [40, 0, -90], 'L:palm', 'm', [-10, 50, 0]) }, { t: 600, R: h('bent-B', [0, 120, -90], 'L:palm', 'm', [0, 4, 0]) }),
  },
  sleep: {
    word: 'Sleep',
    shape: 'Open hand closing to a flat O',
    where: 'In front of the face',
    move: 'Draw the hand down over the face, closing it, as the eyes close',
    palm: 'Towards you',
    keys: clip({ R: h('5', [0, 180, 0], 'eye', 'palm', [-12, 4, 14]) }, { t: 600, R: h('flat-O', [0, 180, 0], 'chin', 'palm', [-6, -20, 24]), face: { mouth: 'pressed', brows: -0.2 } }),
  },
  home: {
    word: 'Home',
    shape: 'Flat O',
    where: 'Corner of the mouth, then the cheek',
    move: 'Touch the fingertips at the corner of the mouth, then higher on the cheek',
    palm: 'Towards you',
    hint: 'Where you eat (mouth) and sleep (cheek on a pillow).',
    keys: clip({ R: h('flat-O', [-20, 180, 0], 'mouth', 'm', [-12, 0, 0]) }, { t: 300, R: h('flat-O', [-20, 180, 0], 'mouth', 'm', [-18, 6, 14]) }, { t: 600, R: h('flat-O', [-20, 180, 0], 'cheek', 'm', [0, 8, 0]) }),
  },
  understand: {
    word: 'Understand',
    shape: 'S, flicking to 1',
    where: 'Beside the forehead',
    move: 'Flick the index finger up from the fist, like a light coming on',
    palm: 'Towards you',
    keys: clip({ R: h('S', [0, 180, 0], 'temple', 'knuckles', [-10, -4, 10]) }, { t: 220, R: h('1', [0, 180, 0], 'temple', 'knuckles', [-10, -4, 10]) }),
  },
  know: {
    word: 'Know',
    shape: 'Bent hand',
    where: 'The forehead',
    move: 'Tap the fingertips on the forehead, at the side',
    palm: 'Towards you',
    hint: 'The knowledge is in your head.',
    keys: clip({ R: h('bent-B', [-20, 180, 0], 'temple', 'm', [10, 4, 16]) }, ...taps(0, { R: h('bent-B', [-20, 180, 0], 'temple', 'm', [10, 4, 16]) }, { R: h('bent-B', [-20, 180, 0], 'temple', 'm', [10, 4, 4]) })),
  },
  'dont-know': {
    word: "Don't know",
    shape: 'Bent hand, then open hand',
    where: 'The forehead',
    move: 'Touch the forehead as in KNOW, then flip the hand away, palm out',
    palm: 'Towards you, flipping out',
    hint: 'Many negatives work this way: the sign, then a twist away.',
    keys: clip({ R: h('bent-B', [-20, 180, 0], 'temple', 'm', [10, 4, 4]), face: { brows: 0.5, mouth: 'frown', head: [-4, 0] } }, { t: 450, R: h('B', [0, 0, -20], 'temple', 'palm', [-40, -10, 40]), face: { brows: 0.5, mouth: 'frown', head: [4, 0] } }),
  },
  'sign-language': {
    word: 'Sign (language)',
    also: ['ASL', 'signing'],
    shape: '1 (index fingers), both hands',
    where: 'In front of the chest',
    move: 'Circle the index fingers around each other, backwards, taking turns',
    palm: 'Facing out',
    keys: clip(
      { R: h('1', [0, 0, -30], 'centre', 'i', [-14, 26, 0]), L: h('1', [0, 0, -30], 'centre', 'i', [-14, 14, 0]) },
      ...circles(0, 'R', h('1', [0, 0, -30], 'centre', 'i', [-14, 26, 0]), 10, 2, 900, 'xy', {}),
    ).map((k, i, all) => (i > 0 && i < all.length - 1 && k.R ? { ...k, L: shift(k.R, [0, -12, 0]) } : k)),
  },

  name: {
    word: 'Name',
    shape: 'H (two fingers together), both hands',
    where: 'In front of the body',
    move: 'Tap the middle finger of the top hand on the index finger of the other hand, twice',
    palm: 'Both palms angled in',
    hint: 'Like signing an X: making your mark.',
    keys: clip(
      { L: h('H', [0, 200, -95], 'centre', undefined, [-34, -10, 0]), R: h('H', [0, 160, -130], 'L:i2', 'm2', [0, 12, 8]) },
      ...taps(0, { R: h('H', [0, 160, -130], 'L:i2', 'm2', [0, 12, 8]) }, { R: h('H', [0, 160, -130], 'L:i2', 'm2', [0, 3, 6]) }, 2, 200),
    ),
  },

  // ── school ──
  school: {
    word: 'School',
    shape: 'B (flat hands), both hands',
    where: 'In front of the body',
    move: 'Clap the top hand down onto the bottom palm, twice',
    palm: 'Top hand down, bottom hand up',
    hint: 'The teacher clapping for attention.',
    keys: clip({ L: BASE_UP, R: h('B', [0, 90, -90], 'L:palm', 'palm', [-6, 30, 0]) }, ...taps(0, { R: h('B', [0, 90, -90], 'L:palm', 'palm', [-6, 30, 0]) }, { R: h('B', [0, 90, -90], 'L:palm', 'palm', [-6, 3, 0]) })),
  },
  learn: {
    word: 'Learn',
    shape: 'Open hand closing to a flat O',
    where: 'From the other palm to the forehead',
    move: 'Pick up from the flat palm and bring it to the forehead, closing to a flat O',
    palm: 'Down',
    hint: 'Taking information from a book and putting it in your head.',
    keys: clip({ L: BASE_UP, R: h('bent-5', [80, 0, 0], 'L:palm', 'm', [0, 8, 0]) }, { t: 200, R: h('flat-O', [80, 0, 0], 'L:palm', 'm', [0, 4, 0]) }, { t: 650, R: h('flat-O', [10, 180, 0], 'forehead', 'm', [-6, -12, 4]) }),
  },
  teacher: {
    word: 'Teacher',
    shape: 'Flat O, both hands, then flat hands',
    where: 'Beside the forehead, then down the sides of the body',
    move: 'Move both flat O hands forward from the forehead (TEACH), then the flat hands down the sides (the person sign)',
    palm: 'Facing each other',
    hint: 'Many jobs are a verb plus the person sign: teach + person, learn + person (student).',
    keys: clip(
      { ...both(h('flat-O', [0, 90, 0], 'temple', 'm', [-8, -8, 12])) },
      { t: 300, ...both(h('flat-O', [20, 90, 0], 'temple', 'm', [-8, -16, 56])) },
      { t: 550, ...both(h('B', [0, 90, 0], 'chest-d', 'palm', [-20, 0, 30])) },
      { t: 950, ...both(h('B', [0, 90, 0], 'chest-d', 'palm', [-20, -60, 30])) },
    ),
  },
  student: {
    word: 'Student',
    also: ['learner', 'pupil'],
    shape: 'Open hand to flat O, then flat hands',
    where: 'From the other palm to the forehead, then down the sides',
    move: 'Sign LEARN, then the person sign: both flat hands moving down the sides',
    palm: 'Facing each other at the end',
    keys: clip(
      { L: BASE_UP, R: h('bent-5', [80, 0, 0], 'L:palm', 'm', [0, 8, 0]) },
      { t: 200, R: h('flat-O', [80, 0, 0], 'L:palm', 'm', [0, 4, 0]) },
      { t: 600, R: h('flat-O', [10, 180, 0], 'forehead', 'm', [-6, -12, 4]) },
      { t: 850, ...both(h('B', [0, 90, 0], 'chest-d', 'palm', [-20, 0, 30])) },
      { t: 1250, ...both(h('B', [0, 90, 0], 'chest-d', 'palm', [-20, -60, 30])) },
    ),
  },
  book: {
    word: 'Book',
    shape: 'B (flat hands), both hands',
    where: 'In front of the body',
    move: 'Start with the palms pressed together, then open them like a book',
    palm: 'Together, then up',
    keys: clip({ ...both(h('B', [80, 90, 0], 'centre', 'palm', [-2, -10, 0])) }, { t: 500, ...both(h('B', [80, 160, 0], 'centre', 'side', [-2, -10, 0])) }),
  },
  read: {
    word: 'Read',
    shape: 'V over a flat hand',
    where: 'Above the other palm',
    move: 'Move the V down over the flat hand, like eyes scanning a page',
    palm: 'Down',
    keys: clip({ L: h('B', [0, 180, -20], 'centre', undefined, [0, -40, -10]), R: h('V', [90, 0, 0], 'L:m', 'i', [0, 0, 20]) }, { t: 500, R: h('V', [90, 0, 0], 'L:palm', 'i', [0, -20, 20]) }),
  },
  write: {
    word: 'Write',
    shape: 'Pinched fingers on a flat hand',
    where: 'On the other palm',
    move: 'Scribble across the palm, as if holding a pen',
    palm: 'Bottom hand up',
    keys: clip(
      { L: BASE_UP, R: h('baby-O', [90, 90, 0], 'L:palm', 'i', [20, 2, 0]) },
      { t: 250, R: h('baby-O', [90, 90, 0], 'L:palm', 'i', [4, 2, 6]) },
      { t: 500, R: h('baby-O', [90, 90, 0], 'L:palm', 'i', [-12, 2, -2]) },
      { t: 750, R: h('baby-O', [90, 90, 0], 'L:palm', 'i', [-28, 2, 6]) },
    ),
  },
  study: {
    word: 'Study',
    shape: '5 (open hand) above a flat hand',
    where: 'Above the other palm',
    move: 'Point the fingers at the palm and wiggle them',
    palm: 'Down',
    keys: clip(
      { L: BASE_UP, R: h('5', [100, 0, 0], 'L:palm', 'm', [0, 30, 0]) },
      ...taps(0, { R: h('5', [100, 0, 0], 'L:palm', 'm', [0, 30, 0]) }, { R: h('bent-5', [100, 0, 0], 'L:palm', 'm', [0, 30, 0]) }, 3, 150),
    ),
  },
  practice: {
    word: 'Practise',
    also: ['practice', 'rehearse'],
    shape: 'A (fist) brushing a 1 hand',
    where: 'In front of the body',
    move: 'Brush the knuckles back and forth along the other index finger',
    palm: 'Down',
    keys: clip(
      { L: h('1', [0, 180, -90], 'centre', undefined, [-20, -20, 0]), R: h('A', [90, 0, 0], 'L:i1', 'knuckles', [10, 4, 0]) },
      ...taps(0, { R: h('A', [90, 0, 0], 'L:i1', 'knuckles', [10, 4, 0]) }, { R: h('A', [90, 0, 0], 'L:i1', 'knuckles', [-20, 4, 0]) }, 2, 200),
    ),
  },

  // ── time ──
  now: {
    word: 'Now',
    also: ['today'],
    shape: 'Bent hands (or Y), both hands',
    where: 'In front of the body',
    move: 'Drop both hands down slightly, once',
    palm: 'Up',
    hint: 'Time signs sit in a line: forward is the future, behind you is the past.',
    keys: clip({ ...both(h('bent-B', [60, 180, 0], 'centre', 'palm', [-30, -6, -10])) }, { t: 300, ...both(h('bent-B', [60, 180, 0], 'centre', 'palm', [-30, -24, -10])) }),
  },
  tomorrow: {
    word: 'Tomorrow',
    shape: 'A (thumb up)',
    where: 'Thumb on the cheek',
    move: 'Arc the thumb forward from the cheek: into the future',
    palm: 'Sideways',
    keys: clip({ R: h('A', [0, 90, 0], 'cheek', 't', [0, 0, 2]) }, { t: 500, R: h('A', [40, 90, 0], 'cheek', 't', [-14, -6, 60]) }),
  },
  yesterday: {
    word: 'Yesterday',
    shape: 'A or Y',
    where: 'Thumb on the cheek near the mouth',
    move: 'Move the thumb back along the cheek towards the ear: into the past',
    palm: 'Sideways',
    keys: clip({ R: h('A', [0, 90, 0], 'cheek', 't', [8, -8, 4]) }, { t: 500, R: h('A', [-30, 90, 0], 'ear', 't', [6, -2, 10]) }),
  },
  morning: {
    word: 'Morning',
    shape: 'Flat hand rising behind the other arm',
    where: 'In front of the body',
    move: 'With the other arm flat across you, raise the hand up past it, palm up, like the sun rising',
    palm: 'Towards you',
    keys: clip({ L: BASE_DOWN, R: h('B', [-20, 180, 0], 'L:palm', 'palm', [-30, -50, 20]) }, { t: 600, R: h('B', [-40, 180, 0], 'L:palm', 'palm', [-30, 20, 20]) }),
  },
  night: {
    word: 'Night',
    shape: 'Bent hand over the other arm',
    where: 'In front of the body',
    move: 'Tap the wrist of the bent hand on the back of the other wrist, like the sun going down over the horizon',
    palm: 'Down',
    keys: clip({ L: BASE_DOWN, R: h('bent-B', [60, 0, 0], 'L:back', 'wrist', [-34, 30, 0]) }, ...taps(0, { R: h('bent-B', [60, 0, 0], 'L:back', 'wrist', [-34, 30, 0]) }, { R: h('bent-B', [90, 0, 0], 'L:back', 'wrist', [-34, 14, 0]) })),
  },
  later: {
    word: 'Later',
    shape: 'L',
    where: 'In front of the shoulder',
    move: 'Tip the L forward, pivoting on the thumb',
    palm: 'Forward',
    keys: clip({ R: h('L', [0, 0, 0], 'neutral', 'palm', [-10, 0, -10]) }, { t: 450, R: h('L', [40, 0, 50], 'neutral', 'palm', [-10, 0, 10]) }),
  },

  // ── colours ──
  red: {
    word: 'Red',
    shape: '1 (index finger)',
    where: 'The lips',
    move: 'Brush the fingertip down the lips, twice',
    palm: 'Towards you',
    keys: clip({ R: h('1', [-30, 180, 0], 'mouth', 'i', [0, 6, 2]) }, ...taps(0, { R: h('1', [-30, 180, 0], 'mouth', 'i', [0, 6, 2]) }, { R: h('1', [-30, 180, 0], 'mouth', 'i', [0, -14, 6]) })),
  },
  blue: {
    word: 'Blue',
    shape: 'B',
    where: 'In front of the shoulder',
    move: 'Shake the B by twisting the wrist',
    palm: 'Forward',
    hint: 'Many colours are the first letter, shaken: B blue, G green, Y yellow, P purple.',
    keys: clip({ R: h('B', [0, 0, 0], 'neutral', 'palm', [-6, 24, -10]) }, ...taps(0, { R: h('B', [0, -35, 0], 'neutral', 'palm', [-6, 24, -10]) }, { R: h('B', [0, 35, 0], 'neutral', 'palm', [-6, 24, -10]) }, 3, 150)),
  },
  green: {
    word: 'Green',
    shape: 'G',
    where: 'In front of the shoulder',
    move: 'Shake the G by twisting the wrist',
    palm: 'In',
    keys: clip({ R: h('G', [0, -60, -70], 'neutral', 'palm', [-6, 24, -10]) }, ...taps(0, { R: h('G', [0, -90, -70], 'neutral', 'palm', [-6, 24, -10]) }, { R: h('G', [0, -30, -70], 'neutral', 'palm', [-6, 24, -10]) }, 3, 150)),
  },
  yellow: {
    word: 'Yellow',
    shape: 'Y',
    where: 'In front of the shoulder',
    move: 'Shake the Y by twisting the wrist',
    palm: 'Forward',
    keys: clip({ R: h('Y', [0, 0, 0], 'neutral', 'palm', [-6, 24, -10]) }, ...taps(0, { R: h('Y', [0, -35, 0], 'neutral', 'palm', [-6, 24, -10]) }, { R: h('Y', [0, 35, 0], 'neutral', 'palm', [-6, 24, -10]) }, 3, 150)),
  },
  purple: {
    word: 'Purple',
    shape: 'P',
    where: 'In front of the shoulder',
    move: 'Shake the P by twisting the wrist',
    palm: 'Down',
    keys: clip({ R: h('K', [142, -40, 0], 'neutral', 'palm', [-6, 30, -10]) }, ...taps(0, { R: h('K', [142, -70, 0], 'neutral', 'palm', [-6, 30, -10]) }, { R: h('K', [142, -10, 0], 'neutral', 'palm', [-6, 30, -10]) }, 3, 150)),
  },
  black: {
    word: 'Black',
    shape: '1 (index finger)',
    where: 'The forehead',
    move: 'Draw the side of the index finger across the forehead',
    palm: 'Down',
    keys: clip({ R: h('1', [0, 90, -90], 'forehead', 'i1', [20, 0, 0]) }, { t: 500, R: h('1', [0, 90, -90], 'forehead', 'i1', [-24, 0, 0]) }),
  },
  white: {
    word: 'White',
    shape: '5 closing to flat O',
    where: 'The chest',
    move: 'Pull the open hand away from the chest, closing the fingers together',
    palm: 'Towards you',
    keys: clip({ R: h('5', [0, 180, 0], 'chest', 'palm', [0, 0, 2]) }, { t: 500, R: h('flat-O', [-40, 180, 0], 'chest', 'm', [0, 0, 50]) }),
  },
  orange: {
    word: 'Orange',
    shape: 'S, squeezing',
    where: 'In front of the chin',
    move: 'Open and squeeze the hand twice, like squeezing an orange',
    palm: 'Towards you',
    hint: 'The same sign means the fruit and the colour.',
    keys: clip({ R: h('C', [0, 180, -20], 'chin', 'palm', [0, -6, 20]) }, ...taps(0, { R: h('C', [0, 180, -20], 'chin', 'palm', [0, -6, 20]) }, { R: h('S', [0, 180, -20], 'chin', 'palm', [0, -6, 14]) })),
  },
  pink: {
    word: 'Pink',
    shape: 'P',
    where: 'The lips',
    move: 'Brush the middle finger down across the lips',
    palm: 'Towards you',
    hint: 'Like RED, but with a P.',
    keys: clip({ R: h('K', [80, 180, 0], 'mouth', 'm', [0, 8, 2]) }, ...taps(0, { R: h('K', [80, 180, 0], 'mouth', 'm', [0, 8, 2]) }, { R: h('K', [80, 180, 0], 'mouth', 'm', [0, -10, 6]) })),
  },
  brown: {
    word: 'Brown',
    shape: 'B',
    where: 'The cheek',
    move: 'Slide the B down the cheek',
    palm: 'Forward',
    keys: clip({ R: h('B', [0, 40, 0], 'cheek', 'i', [-4, 20, 0]) }, { t: 500, R: h('B', [0, 40, 0], 'cheek', 'i', [-4, -6, 0]) }),
  },
}

// Short phrases built from the words above, for practice.
export const PHRASES: { text: string; words: string[]; note?: string }[] = [
  { text: 'Hello, nice to meet you.', words: ['hello', 'nice', 'meet', 'you'] },
  { text: 'What is your name?', words: ['you', 'name', 'what'], note: 'Literally YOUR NAME WHAT, with brows down on WHAT.' },
  { text: 'Thank you, see you later.', words: ['thank-you', 'later'] },
  { text: 'I am learning sign language.', words: ['sign-language', 'learn', 'me'], note: 'The topic, SIGN, comes first.' },
  { text: 'Where is the bathroom?', words: ['bathroom', 'where'], note: 'The question word goes at the end.' },
  { text: 'Please help me.', words: ['please', 'help', 'me'] },
  { text: 'Do you understand?', words: ['you', 'understand'], note: 'A yes/no question: raise your brows the whole time.' },
  { text: 'Sorry, I don’t know.', words: ['sorry', 'dont-know'] },
  { text: 'I am tired; I want to sleep.', words: ['me', 'tired', 'want', 'sleep'] },
  { text: 'My mother is Deaf.', words: ['mother', 'deaf'] },
]

// Several signs one after another, with when each one starts. Each sign starts from its own
// first pose: a hand it does not use goes back to rest, and the face resets.
export function sequenceKeys(ids: string[], gap = 280): { keys: BodyKey[]; starts: number[] } {
  const keys: BodyKey[] = []
  const starts: number[] = []
  let t = 0
  for (const id of ids) {
    const w = WORDS[id]
    if (!w) continue
    const t0 = keys.length ? t + gap : 0
    starts.push(t0)
    w.keys.forEach((k, i) => {
      const first = i === 0 ? { R: k.R ?? REST, L: k.L ?? REST, face: { brows: 0, mouth: 'flat' as const, ...k.face } } : {}
      // Skip the last hold of each sign except the final one; the gap does that job.
      if (i === w.keys.length - 1 && id !== ids[ids.length - 1]) return
      keys.push({ ...k, ...first, t: t0 + k.t })
    })
    t = keys[keys.length - 1].t
  }
  return { keys, starts }
}
