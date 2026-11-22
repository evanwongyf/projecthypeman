import type { V3 } from './hand'
import type { CloseKey } from './scene'
import type { ShapeName } from './shapes'

// The ASL manual alphabet and numbers, as you see them on someone facing you: their right
// hand, palm towards you, thumb on your right.

export type Letter = {
  shape: ShapeName
  rot: V3
  how: string
  // Letters it is easy to confuse it with, and how to tell them apart.
  watch?: string
  // A movement, as keyframes after the hand is in place. Offsets and turns are from the start.
  move?: { dt: number; off: V3; rot?: V3; lin?: boolean }[]
}

export const LETTERS: Record<string, Letter> = {
  A: { shape: 'A', rot: [0, 0, 0], how: 'Make a fist with your palm facing forward. Keep your thumb straight, resting against the side of your index finger.', watch: 'In **S** the thumb wraps across the front of the fingers; in **A** it stays at the side, pointing up.' },
  B: { shape: 'B', rot: [0, 0, 0], how: 'Hold your four fingers straight up and together, palm forward. Fold your thumb across your palm.', watch: 'Keep the fingers together; spread, it starts to look like **4**.' },
  C: { shape: 'C', rot: [0, 62, 0], how: 'Curve all your fingers and your thumb into a C, as if holding a can. Turn your palm sideways so the C shape faces the person watching.', watch: 'Do not close it: when the fingertips touch the thumb, it becomes **O**.' },
  D: { shape: 'D', rot: [0, 18, 0], how: 'Point your index finger straight up. Curve the other three fingers down so their tips touch the tip of your thumb, making a little circle.', watch: 'Only the index stands up. With the index and thumb touching instead, it would be **F**-like; with nothing touching, it is **1**.' },
  E: { shape: 'E', rot: [0, 0, 0], how: 'Bend all four fingers at every joint so the fingertips rest on top of your thumb, which is folded across your palm. You will see a row of fingernails.', watch: 'In **S** the fingers make a tight fist; in **E** they are bent down onto the thumb with the nails showing.' },
  F: { shape: 'F', rot: [0, 12, 0], how: 'Touch the tips of your index finger and thumb together to make a circle. Hold the other three fingers up and slightly apart.', watch: 'This is also the number **9**. A circle with *all* fingers touching the thumb is **O**.' },
  G: { shape: 'G', rot: [0, -60, -90], how: 'Point your index finger and thumb sideways, parallel to each other, with the other fingers closed and the palm facing in.', watch: '**H** is the same but with two fingers out. **Q** is a G pointing down.' },
  H: { shape: 'H', rot: [0, -60, -90], how: 'Hold your index and middle fingers together and point them sideways. Tuck the other fingers and the thumb in, with the palm facing in.', watch: '**U** is the same two fingers pointing up; **H** points sideways.' },
  I: { shape: 'I', rot: [0, 12, 0], how: 'Make a fist and raise only your little finger straight up. Your thumb rests across the front of your fingers.', watch: '**J** starts as an **I** and then moves.' },
  J: {
    shape: 'I',
    rot: [0, 12, 0],
    how: 'Make an **I**, then use your little finger to draw a J in the air: move down, then curve and twist your wrist so your palm turns towards you.',
    watch: 'J is one of only two letters that move (the other is **Z**). The movement *is* the letter.',
    move: [
      { dt: 260, off: [0, -40, 0], rot: [0, 30, 0] },
      { dt: 260, off: [24, -58, 0], rot: [0, 85, 0] },
      { dt: 220, off: [46, -40, 0], rot: [0, 130, 0] },
    ],
  },
  K: { shape: 'K', rot: [0, -14, 0], how: 'Point your index finger up and your middle finger up and forward, in a V. Put the tip of your thumb against the inside of the middle finger, between the two.', watch: 'Like **V**, but with the thumb tucked up between the fingers. **P** is a K pointing down.' },
  L: { shape: 'L', rot: [0, 0, 0], how: 'Point your index finger up and your thumb out to the side, making an L. Close the other fingers.', watch: 'Seen from your side, it is a backwards L; that is normal.' },
  M: { shape: 'M', rot: [0, 0, 0], how: 'Fold your thumb across your palm. Drape your index, middle and ring fingers down over it, so the thumb tip pokes out between your ring and little fingers.', watch: '**M** has three fingers over the thumb, **N** has two. Count the humps.' },
  N: { shape: 'N', rot: [0, 0, 0], how: 'Fold your thumb across your palm and drape just your index and middle fingers over it. The thumb tip pokes out between the middle and ring fingers.', watch: 'Two fingers over the thumb. Three would be **M**; one, with the thumb peeking between index and middle, is **T**.' },
  O: { shape: 'O', rot: [0, 62, 0], how: 'Curve all your fingers so their tips meet the tip of your thumb, making an O. Turn your palm a little to the side so the round shape shows.', watch: 'If there is a gap between the fingers and the thumb, it is **C**.' },
  P: { shape: 'K', rot: [142, -40, 0], how: 'Make a **K** and tip your hand forward from the wrist so the middle finger points down and the index points forward.', watch: 'P is K pointing down, just as **Q** is G pointing down.' },
  Q: { shape: 'G', rot: [140, -30, 0], how: 'Make a **G** and turn it so your index finger and thumb point down at the floor.', watch: 'Point down from the wrist, not by bending the fingers.' },
  R: { shape: 'R', rot: [0, 0, 0], how: 'Cross your middle finger over your index finger, as if wishing for luck, with the other fingers closed.', watch: 'Fingers crossed is **R**; side by side is **U**; apart is **V**.' },
  S: { shape: 'S', rot: [0, 0, 0], how: 'Make a fist, palm forward, and wrap your thumb across the front of your fingers.', watch: 'Thumb across the front: **S**. Thumb at the side: **A**. Thumb tucked under one finger: **T**.' },
  T: { shape: 'T', rot: [0, 0, 0], how: 'Make a fist and tuck your thumb between your index and middle fingers, so the tip just shows.', watch: 'The thumb sits under the index finger only. Under two fingers is **N**.' },
  U: { shape: 'U', rot: [0, 0, 0], how: 'Hold your index and middle fingers up and together. The thumb holds the other two fingers down.', watch: 'Together is **U**, apart is **V**, crossed is **R**, sideways is **H**.' },
  V: { shape: 'V', rot: [0, 0, 0], how: 'Hold your index and middle fingers up and apart, in a V, palm forward. The thumb holds the others down.', watch: 'This is also the number **2**, though numbers 1 to 5 are often shown with the palm facing you.' },
  W: { shape: 'W', rot: [0, 0, 0], how: 'Hold your index, middle and ring fingers up and apart. Your thumb touches the tip of your little finger.', watch: 'This is also the number **6**.' },
  X: { shape: 'X', rot: [0, 20, 0], how: 'Make a fist and raise your index finger, then bend it into a hook. The thumb rests against the middle finger.', watch: 'A hooked finger, not a straight one. Straight would be **1**, or **D** with the circle.' },
  Y: { shape: 'Y', rot: [0, 0, 0], how: 'Stick out your thumb and little finger, with the three middle fingers folded down.', watch: 'Add the index finger and it becomes **I love you**.' },
  Z: {
    shape: '1',
    rot: [0, 0, 0],
    how: 'Point your index finger forward and draw a Z in the air: across, diagonally down and back, then across again.',
    watch: 'You draw a normal Z from your own side, so the person watching sees it backwards.',
    move: [
      { dt: 0, off: [30, 30, 0] },
      { dt: 260, off: [-30, 30, 0], lin: true },
      { dt: 300, off: [30, -24, 0], lin: true },
      { dt: 260, off: [-30, -24, 0], lin: true },
    ],
  },
}

export type NumberSign = { n: string; shape: ShapeName; rot: V3; how: string; move?: Letter['move'] }

// Numbers 1 to 5 are shown palm towards the signer when counting; 6 to 9 face out.
export const NUMBERS: NumberSign[] = [
  { n: '0', shape: 'O', rot: [0, 62, 0], how: 'An **O** shape, held with the palm to the side.' },
  { n: '1', shape: '1', rot: [0, 180, 0], how: 'Index finger up, palm facing you.' },
  { n: '2', shape: 'V', rot: [0, 180, 0], how: 'Index and middle fingers up and apart, palm facing you.' },
  { n: '3', shape: '3', rot: [0, 180, 0], how: 'Thumb, index and middle fingers out, palm facing you. (Not the index, middle and ring: that is W, or 6.)' },
  { n: '4', shape: '4', rot: [0, 180, 0], how: 'Four fingers up and apart, thumb folded into the palm, palm facing you.' },
  { n: '5', shape: '5', rot: [0, 180, 0], how: 'All five fingers spread, palm facing you.' },
  { n: '6', shape: 'W', rot: [0, 0, 0], how: 'Thumb touches the tip of the little finger; the other three fingers are up. Palm forward.' },
  { n: '7', shape: '7', rot: [0, 0, 0], how: 'Thumb touches the tip of the ring finger.' },
  { n: '8', shape: '8', rot: [0, 0, 0], how: 'Thumb touches the tip of the middle finger.' },
  { n: '9', shape: 'F', rot: [0, 0, 0], how: 'Thumb touches the tip of the index finger (the same shape as F).' },
  {
    n: '10',
    shape: '10',
    rot: [0, 0, 0],
    how: 'A fist with the thumb pointing up, given a little shake by twisting the wrist.',
    move: [
      { dt: 160, off: [0, 0, 0], rot: [0, -20, -14] },
      { dt: 160, off: [0, 0, 0], rot: [0, 20, 14] },
      { dt: 160, off: [0, 0, 0], rot: [0, -20, -14] },
      { dt: 160, off: [0, 0, 0], rot: [0, 0, 0] },
    ],
  },
]

// Keyframes for one letter or number starting at time t0 and held for `hold` ms.
export function signKeys(s: Pick<Letter, 'shape' | 'rot' | 'move'>, t0: number, hold = 520, nudge: V3 = [0, 0, 0]): CloseKey[] {
  const keys: CloseKey[] = [{ t: t0, shape: s.shape, rot: s.rot, off: nudge }]
  let t = t0
  if (s.move) {
    for (const m of s.move) {
      t += m.dt
      keys.push({ t, shape: s.shape, rot: m.rot ? [s.rot[0] + m.rot[0], s.rot[1] + m.rot[1], s.rot[2] + m.rot[2]] : s.rot, off: [nudge[0] + m.off[0], nudge[1] + m.off[1], nudge[2] + m.off[2]], lin: m.lin })
    }
    keys.push({ ...keys[keys.length - 1], t: t + 260 })
  } else keys.push({ t: t0 + hold, shape: s.shape, rot: s.rot, off: nudge })
  return keys
}

// A word spelled letter by letter, with when each letter starts. A doubled letter moves a
// little to the side, the way signers mark it. Anything that is not a letter is skipped.
export function spellKeys(word: string, perLetter = 520, gap = 200): { keys: CloseKey[]; letters: string[]; starts: number[] } {
  const keys: CloseKey[] = []
  const letters: string[] = []
  const starts: number[] = []
  let t = 0
  let prev = ''
  let nudge = 0
  for (const ch of word.toUpperCase()) {
    const l = LETTERS[ch]
    if (!l) continue
    nudge = ch === prev ? (nudge === 0 ? -26 : 0) : 0
    const t0 = keys.length ? t + gap : 0
    const part = signKeys(l, t0, perLetter, [nudge, 0, 0])
    keys.push(...part)
    letters.push(ch)
    starts.push(t0 - (keys.length > part.length ? gap / 2 : 0))
    t = part[part.length - 1].t
    prev = ch
  }
  return { keys, letters, starts }
}
