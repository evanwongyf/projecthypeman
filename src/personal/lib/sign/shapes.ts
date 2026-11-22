import type { Finger, Shape } from './hand'

// Handshapes, written as joint bends (see hand.ts). Letters and numbers follow American
// Sign Language, whose one-handed alphabet is also used in Singapore, Malaysia, the
// Philippines and many other countries.

const EXT: Finger = [0, 0, 0]
const FIST: Finger = [86, 100, 55]
const CURL_O: Finger = [55, 70, 50]
const DRAPE: Finger = [70, 98, 45]
const BENT: Finger = [88, 0, 0]
const CLAW: Finger = [28, 62, 42]
const C: Finger = [30, 46, 30]
const FLAT_O: Finger = [100, 30, 5]

const spread = (f: Finger, s: number): Finger => [f[0], f[1], f[2], s]
const fist = (t: Shape['t'], extra: Partial<Shape> = {}): Shape => ({ i: FIST, m: FIST, r: FIST, p: FIST, t, ...extra })

// Thumb positions used by several shapes.
const T_SIDE = [39, 86, 24] as const // up against the side of the index finger (A)
const T_FRONT = [-2, 74, 50] as const // across the front of the curled fingers (S)
const T_PALM = [-4, 52, 20] as const // folded across the palm (B, 4)
const T_OUT = [84, 66, 16] as const // out to the side (5, L)

export const SHAPES = {
  A: fist([...T_SIDE]),
  B: { i: spread(EXT, -1), m: EXT, r: spread(EXT, 1), p: spread(EXT, 3), t: [...T_PALM] },
  C: { i: C, m: C, r: C, p: spread(C, 2), t: [32, 58, 62] },
  D: { i: EXT, m: CURL_O, r: CURL_O, p: CURL_O, t: { to: 'm', off: [0, -3, 5] } },
  E: { i: [70, 105, 75], m: [70, 105, 75], r: [70, 105, 75], p: [70, 105, 75], t: [2, 50, 26] },
  F: { i: CURL_O, m: spread(EXT, 6), r: spread(EXT, -2), p: spread(EXT, -8), t: { to: 'i', off: [0, -3, 5] } },
  G: fist([40, 108, 10], { i: EXT }),
  H: fist([-4, 70, 46], { i: spread(EXT, -3), m: spread(EXT, 1) }),
  I: fist([...T_FRONT], { p: spread(EXT, -4) }),
  K: fist({ to: 'm', j: 1, off: [4, 0, 2] }, { i: spread(EXT, 8), m: [38, 0, 0, -8] }),
  L: fist([...T_OUT], { i: EXT }),
  M: { i: DRAPE, m: DRAPE, r: DRAPE, p: FIST, t: [-17, 64, 30] },
  N: { i: DRAPE, m: DRAPE, r: FIST, p: FIST, t: [0, 64, 30] },
  O: { i: CURL_O, m: CURL_O, r: CURL_O, p: CURL_O, t: { to: 'i', off: [-4, -2, 6] } },
  R: fist([-4, 70, 46], { i: spread(EXT, -12), m: spread(EXT, 12) }),
  S: fist([...T_FRONT]),
  T: fist([17, 80, 46], { i: [80, 110, 60] }),
  U: fist([-4, 70, 46], { i: spread(EXT, -3), m: spread(EXT, 1) }),
  V: fist([-4, 70, 46], { i: spread(EXT, 9), m: spread(EXT, -8) }),
  W: { i: spread(EXT, 12), m: EXT, r: spread(EXT, -11), p: CURL_O, t: { to: 'p', off: [3, -3, 5] } },
  X: fist({ to: 'm', j: 1, off: [6, -8, 12] }, { i: [20, 95, 65] }),
  Y: fist([...T_OUT], { p: spread(EXT, -14) }),

  // Numbers that are not letters.
  '1': fist({ to: 'm', j: 1, off: [6, -8, 12] }, { i: EXT }),
  '3': fist([...T_OUT], { i: spread(EXT, 9), m: spread(EXT, -8) }),
  '4': { i: spread(EXT, 10), m: spread(EXT, 2), r: spread(EXT, -6), p: spread(EXT, -14), t: [...T_PALM] },
  '5': { i: spread(EXT, 10), m: spread(EXT, 2), r: spread(EXT, -6), p: spread(EXT, -14), t: [...T_OUT] },
  '6': { i: spread(EXT, 10), m: spread(EXT, 0), r: spread(EXT, -9), p: CURL_O, t: { to: 'p', off: [3, -3, 5] } },
  '7': { i: spread(EXT, 10), m: spread(EXT, 0), r: CURL_O, p: spread(EXT, -14), t: { to: 'r', off: [3, -3, 5] } },
  '8': { i: spread(EXT, 10), m: CURL_O, r: spread(EXT, -6), p: spread(EXT, -14), t: { to: 'm', off: [3, -3, 5] } },
  '10': fist([30, 120, 12]),

  // Shapes that come up in common words.
  'open-B': { i: EXT, m: EXT, r: EXT, p: spread(EXT, 2), t: [70, 68, 10] },
  'bent-B': { i: BENT, m: BENT, r: BENT, p: BENT, t: [38, 72, 18] },
  'flat-O': { i: FLAT_O, m: FLAT_O, r: FLAT_O, p: FLAT_O, t: { to: 'm', off: [2, 0, 4] } },
  claw: { i: spread(CLAW, 10), m: spread(CLAW, 2), r: spread(CLAW, -6), p: spread(CLAW, -14), t: [62, 58, 46] },
  ILY: fist([...T_OUT], { i: EXT, p: spread(EXT, -14) }),
  'open-8': { i: spread(EXT, 10), m: [50, 10, 0], r: spread(EXT, -6), p: spread(EXT, -14), t: [...T_OUT] },
  '8-closed': { i: spread(EXT, 10), m: [50, 30, 20], r: spread(EXT, -6), p: spread(EXT, -14), t: { to: 'm', off: [2, -2, 4] } },
  'bent-V': fist([-4, 70, 46], { i: [10, 80, 50, 9], m: [10, 80, 50, -8] }),
  'baby-O': fist({ to: 'i', off: [-3, -2, 5] }, { i: CURL_O }),
  // NO: index, middle and thumb open, then snapped shut.
  'snap-open': fist([62, 100, 30], { i: spread(EXT, -2), m: spread(EXT, 1) }),
  'snap-shut': fist({ to: 'i', off: [-4, -2, 5] }, { i: [50, 40, 20, -2], m: [50, 40, 20, 1] }),
  'bent-L': fist([...T_OUT], { i: [0, 70, 50] }),
  'bent-5': { i: [55, 0, 0, 10], m: [55, 0, 0, 2], r: [55, 0, 0, -6], p: [55, 0, 0, -14], t: [70, 60, 30] },
} satisfies Record<string, Shape>

export type ShapeName = keyof typeof SHAPES
