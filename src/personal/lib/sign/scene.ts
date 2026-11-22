import {
  add, anchorPoint, apply, blendPose, dot, drawHand, lerp, lerp3, len, mul, norm, project, rotation, solvePose, sub, toPose, view,
} from './hand'
import type { Anchor, Camera, Item, Pose, Prim, Shape, V2, V3 } from './hand'
import { SHAPES } from './shapes'
import type { ShapeName } from './shapes'

// Animation for signs: a clip is a list of keyframes, and any moment in between is found
// by blending the two keyframes either side of it. There are two kinds of view: a close-up
// of one hand (letters and numbers) and a signer from the waist up (words).

const ease = (t: number) => t * t * (3 - 2 * t)
const shapeOf = (s: ShapeName | Shape): Shape => (typeof s === 'string' ? SHAPES[s] : s)

// ── close-up ───────────────────────────────────────────────────────────────

export type CloseKey = {
  // When this keyframe is reached, in milliseconds from the start.
  t: number
  shape: ShapeName | Shape
  rot: V3
  // Moves the hand from its resting spot, in hand units (a hand is about 190 long).
  off?: V3
  // Move to this keyframe in a straight, even line instead of easing in and out.
  lin?: boolean
}

type Resolved = { pose: Pose; rot: V3; at: V3; look: V3 }

function poseCentre(pose: Pose, rot: V3): V3 {
  const s = solvePose(pose)
  const R = rotation(rot)
  const pts = [[0, 30, 0] as V3, ...Object.values(s.fingers).map((f) => f.pts[3]), s.thumb[3]].map((p) => apply(R, p))
  const lo = pts.reduce((a, p) => [Math.min(a[0], p[0]), Math.min(a[1], p[1]), 0] as V3)
  const hi = pts.reduce((a, p) => [Math.max(a[0], p[0]), Math.max(a[1], p[1]), 0] as V3)
  return mul(add(lo, hi), 0.5)
}

function at<T>(keys: T[], time: number, getT: (k: T) => number): [T, T, number] {
  if (time <= getT(keys[0])) return [keys[0], keys[0], 0]
  for (let i = 1; i < keys.length; i++) {
    const a = getT(keys[i - 1])
    const b = getT(keys[i])
    if (time <= b) return [keys[i - 1], keys[i], b > a ? (time - a) / (b - a) : 1]
  }
  const last = keys[keys.length - 1]
  return [last, last, 0]
}

export type CloseClip = { keys: CloseKey[]; resolved: Resolved[]; duration: number }

export function closeClip(keys: CloseKey[]): CloseClip {
  const resolved = keys.map((k) => {
    const pose = toPose(shapeOf(k.shape))
    return { pose, rot: k.rot, at: k.off ?? [0, 0, 0], look: poseCentre(pose, k.rot) }
  })
  // The camera follows the hand's resting spot, not the movement, so movement shows.
  let look = resolved[0].look
  resolved.forEach((r, i) => {
    if (i > 0 && keys[i].shape === keys[i - 1].shape && sameRot(keys[i].rot, keys[i - 1].rot)) r.look = look
    look = r.look
  })
  return { keys, resolved, duration: keys[keys.length - 1].t }
}

const sameRot = (a: V3, b: V3) => a.every((v, i) => Math.abs(v - b[i]) < 25)

export const CLOSE_BOX = 260

export function closeFrame(clip: CloseClip, time: number, cam: Camera = {}): { items: Item[]; box: [number, number, number, number] } {
  const idx = clip.keys.map((_, i) => i)
  const [ia, ib, t0] = at(idx, time, (i) => clip.keys[i].t)
  const t = clip.keys[ib].lin ? t0 : ease(t0)
  const a = clip.resolved[ia]
  const b = clip.resolved[ib]
  const pose = blendPose(a.pose, b.pose, t)
  const rot = lerp3(a.rot, b.rot, t)
  const look = lerp3(a.look, b.look, ease(t0))
  const items = drawHand(solvePose(pose), { rot, at: lerp3(a.at, b.at, t), scale: 1, arm: true }, cam)
  const cx = cam.mirror ? -look[0] : look[0]
  return { items, box: [cx - CLOSE_BOX / 2, -look[1] - CLOSE_BOX / 2, CLOSE_BOX, CLOSE_BOX] }
}

// ── the signer ─────────────────────────────────────────────────────────────

// Places on the body, from the signer's point of view: "d" is the side of the dominant
// hand (the right, for most people) and "n" the other side. A hand on the n side of the
// body uses these mirrored.
export const LOCATIONS = {
  forehead: [0, 200, 36],
  temple: [-32, 192, 24],
  eye: [-15, 175, 38],
  nose: [0, 160, 46],
  cheek: [-27, 150, 32],
  mouth: [0, 143, 40],
  chin: [0, 126, 34],
  ear: [-43, 168, 4],
  neck: [0, 106, 24],
  'shoulder-d': [-62, 82, 14],
  'shoulder-n': [62, 82, 14],
  chest: [0, 62, 26],
  'chest-d': [-30, 62, 26],
  'chest-n': [30, 62, 26],
  stomach: [0, 12, 28],
  neutral: [-24, 40, 72],
  centre: [0, 42, 80],
  low: [-14, 6, 62],
  side: [-78, 38, 42],
  rest: [-92, -120, 10],
} satisfies Record<string, V3>

export type Loc = keyof typeof LOCATIONS

// A point on the other hand, already placed: "R:palm" or "L:i2".
export type HandRef = `${'R' | 'L'}:${Anchor}`

export type HandKey = {
  shape: ShapeName | Shape
  rot: V3
  at: Loc | HandRef | V3
  // Which point of this hand goes to `at` (default: the wrist).
  by?: Anchor
  off?: V3
}

export type Face = { brows?: number; mouth?: 'smile' | 'flat' | 'o' | 'frown' | 'pressed' | 'open'; head?: V2 }

export type BodyKey = {
  t: number
  R?: HandKey
  L?: HandKey
  face?: Face
  lin?: boolean
}

export const HAND_SCALE = 0.42
export const REST: HandKey = { shape: 'open-B', rot: [0, 90, 180], at: 'rest' }

type HandState = { pose: Pose; rot: V3; wrist: V3 }
type BodyResolved = { R: HandState; L: HandState; face: Required<Face> }

const mirror = (p: V3): V3 => [-p[0], p[1], p[2]]

function locate(k: HandKey, placed: Partial<Record<'R' | 'L', HandState>>, left: boolean): HandState {
  const pose = toPose(shapeOf(k.shape))
  let target: V3
  if (typeof k.at === 'string' && k.at.includes(':')) {
    const [h, a] = k.at.split(':') as ['R' | 'L', Anchor]
    const other = placed[h]
    if (!other) throw new Error(`Place hand ${h} before referring to it`)
    const p = handPoint(other, a, h === 'L')
    target = left ? mirror(p) : p
  } else target = Array.isArray(k.at) ? k.at : LOCATIONS[k.at as Loc]
  target = add(target, k.off ?? [0, 0, 0])
  const anchor = anchorPoint(solvePose(pose), k.by ?? 'wrist')
  const wrist = sub(target, mul(apply(rotation(k.rot), anchor), HAND_SCALE))
  return { pose, rot: k.rot, wrist: left ? mirror(wrist) : wrist }
}

// Where a named point of a placed hand is, in the scene.
function handPoint(h: HandState, a: Anchor, left: boolean): V3 {
  const local = mul(apply(rotation(h.rot), anchorPoint(solvePose(h.pose), a)), HAND_SCALE)
  return add(h.wrist, left ? mirror(local) : local)
}

export type BodyClip = { keys: BodyKey[]; resolved: BodyResolved[]; duration: number }

export function bodyClip(keys: BodyKey[]): BodyClip {
  let R: HandKey = REST
  let L: HandKey = REST
  let face: Required<Face> = { brows: 0, mouth: 'flat', head: [0, 0] }
  const resolved = keys.map((k) => {
    R = k.R ?? R
    L = k.L ?? L
    face = { ...face, head: [0, 0], ...k.face }
    // A hand that points at the other is placed second.
    const rFirst = !(typeof R.at === 'string' && R.at.startsWith('L:'))
    const placed: Partial<Record<'R' | 'L', HandState>> = {}
    if (rFirst) {
      placed.R = locate(R, placed, false)
      placed.L = locate(L, placed, true)
    } else {
      placed.L = locate(L, placed, true)
      placed.R = locate(R, placed, false)
    }
    return { R: placed.R!, L: placed.L!, face }
  })
  return { keys, resolved, duration: keys[keys.length - 1].t }
}

const FOCAL = 900
const SHOULDER: Record<'R' | 'L', V3> = { R: [-66, 84, 0], L: [66, 84, 0] }
const ARM = [84, 80]

function elbow(s: V3, w: V3, side: number): V3 {
  const d = sub(w, s)
  const dist = Math.min(len(d), ARM[0] + ARM[1] - 0.01)
  const dir = norm(d)
  const a = (ARM[0] ** 2 - ARM[1] ** 2 + dist ** 2) / (2 * dist)
  const h = Math.sqrt(Math.max(0, ARM[0] ** 2 - a * a))
  const pole: V3 = [side * 0.55, -1, -0.2]
  const perp = norm(sub(pole, mul(dir, dot(pole, dir))))
  return add(add(s, mul(dir, a)), mul(perp, h))
}

export const BODY_BOX: [number, number, number, number] = [-175, -272, 350, 330]

export function bodyFrame(clip: BodyClip, time: number, cam: Camera = {}): Item[] {
  const idx = clip.keys.map((_, i) => i)
  const [ia, ib, t0] = at(idx, time, (i) => clip.keys[i].t)
  const t = clip.keys[ib].lin ? t0 : ease(t0)
  const A = clip.resolved[ia]
  const B = clip.resolved[ib]
  const c: Camera = { ...cam, focal: FOCAL, pitch: 12 }
  const V = (p: V3) => view(p, c)
  const P = (p: V3) => project(V(p), c).at
  const items: Item[] = []

  // Face: blend numbers, and switch the mouth halfway.
  const head: V2 = [lerp(A.face.head[0], B.face.head[0], t), lerp(A.face.head[1], B.face.head[1], t)]
  const brows = lerp(A.face.brows, B.face.brows, t)
  const mouth = t < 0.5 ? A.face.mouth : B.face.mouth
  items.push(...drawBody(P, head, brows, mouth))

  for (const side of ['R', 'L'] as const) {
    const h: HandState = {
      pose: blendPose(A[side].pose, B[side].pose, t),
      rot: lerp3(A[side].rot, B[side].rot, t),
      wrist: lerp3(A[side].wrist, B[side].wrist, t),
    }
    const s = SHOULDER[side]
    const e = elbow(s, h.wrist, side === 'R' ? -1 : 1)
    const cuff = lerp3(e, h.wrist, 0.82)
    const k = (p: V3) => project(V(p), c).k
    items.push({
      z: (V(s)[2] + V(e)[2]) / 2 - 30,
      prims: [{ k: 'line', pts: [P(s), P(e)], w: 30 * k(e), fill: 'shirt', outline: 2.4 }],
    })
    items.push({
      z: (V(e)[2] + V(h.wrist)[2]) / 2 - 20,
      prims: [
        { k: 'line', pts: [P(lerp3(e, h.wrist, 0.6)), P(h.wrist)], w: 17 * k(h.wrist), fill: 'skin', outline: 2.4 },
        { k: 'line', pts: [P(e), P(cuff)], w: 25 * k(e), fill: 'shirt', outline: 2.4 },
      ],
    })
    items.push(...drawHand(solvePose(h.pose), { rot: h.rot, at: h.wrist, scale: HAND_SCALE, left: side === 'L' }, c))
  }
  return items
}

const HEAD: V3 = [0, 172, 0]
const HEAD_R = 43

function drawBody(P: (p: V3) => V2, [hx, hy]: V2, brows: number, mouth: Required<Face>['mouth']): Item[] {
  const hc: V3 = [HEAD[0] + hx, HEAD[1] + hy, 0]
  const face = (x: number, y: number): V3 => [hc[0] + x, hc[1] + y, 40]
  const d = (pts: V3[], close = false) => 'M' + pts.map((p) => P(p).map((n) => Math.round(n * 10) / 10).join(' ')).join(' L') + (close ? 'Z' : '')
  const curve = (a: V3, ctl: V3, b: V3) => {
    const [p, q, r] = [P(a), P(ctl), P(b)]
    return `M${p[0]} ${p[1]} Q${q[0]} ${q[1]} ${r[0]} ${r[1]}`
  }

  const torso: V3[] = [
    [-112, -80, -20], [-104, 30, -20], [-88, 78, -20], [-62, 94, -20], [-20, 104, -20], [20, 104, -20], [62, 94, -20], [88, 78, -20],
    [104, 30, -20], [112, -80, -20],
  ]
  const hair: V3[] = []
  for (let a = 200; a >= -20; a -= 10) hair.push([hc[0] + Math.cos((a * Math.PI) / 180) * (HEAD_R + 3), hc[1] + Math.sin((a * Math.PI) / 180) * (HEAD_R + 3), 0])
  hair.push([hc[0] + 38, hc[1] + 12, 0], [hc[0] + 16, hc[1] + 24, 0], [hc[0] - 6, hc[1] + 20, 0], [hc[0] - 26, hc[1] + 26, 0], [hc[0] - 40, hc[1] + 6, 0])

  const mouths: Record<Required<Face>['mouth'], Prim> = {
    flat: { k: 'path', d: curve(face(-9, -29), face(0, -31), face(9, -29)), fill: 'none', stroke: 'ink', w: 3 },
    smile: { k: 'path', d: curve(face(-11, -27), face(0, -38), face(11, -27)), fill: 'none', stroke: 'ink', w: 3 },
    frown: { k: 'path', d: curve(face(-10, -33), face(0, -25), face(10, -33)), fill: 'none', stroke: 'ink', w: 3 },
    pressed: { k: 'path', d: d([face(-7, -30), face(7, -30)]), fill: 'none', stroke: 'ink', w: 4 },
    o: { k: 'circle', c: P(face(0, -30)), r: 5, fill: 'ink' },
    open: { k: 'path', d: curve(face(-10, -27), face(0, -44), face(10, -27)) + 'Z', fill: 'ink', stroke: 'ink', w: 2.5 },
  }

  // Brows go up for yes/no questions and down (and in) for wh- questions.
  const up = Math.max(0, brows) * 6
  const down = Math.max(0, -brows) * 5
  const brow = (s: number) => ({
    k: 'line' as const,
    pts: [P(face(s * 9, 16 + up - down)), P(face(s * 22, 16 + up + down * 0.6))],
    w: 3.2,
    fill: 'ink' as const,
  })

  return [
    { z: -130, prims: [{ k: 'line', pts: [P([0, 92, -30]), P([hc[0], hc[1] - 30, -30])], w: 30, fill: 'skin', outline: 2.4 }] },
    {
      z: -120,
      prims: [
        { k: 'path', d: d(torso, true), fill: 'shirt', stroke: 'ink', w: 4.8 },
        { k: 'path', d: curve([-22, 103, -20], [0, 88, -20], [22, 103, -20]), fill: 'none', stroke: 'ink', w: 2.4 },
      ],
    },
    {
      z: -100,
      prims: [
        { k: 'circle', c: P([hc[0] - HEAD_R, hc[1] - 4, 0]), r: 9, fill: 'skin', outline: 2.4 },
        { k: 'circle', c: P([hc[0] + HEAD_R, hc[1] - 4, 0]), r: 9, fill: 'skin', outline: 2.4 },
        { k: 'circle', c: P(hc), r: HEAD_R, fill: 'skin', outline: 2.4 },
        { k: 'path', d: d(hair, true), fill: 'hair', stroke: 'ink', w: 2.4 },
        { k: 'circle', c: P(face(-24, -16)), r: 6, fill: 'cheek' },
        { k: 'circle', c: P(face(24, -16)), r: 6, fill: 'cheek' },
        { k: 'circle', c: P(face(-15, 2)), r: 4, fill: 'ink' },
        { k: 'circle', c: P(face(15, 2)), r: 4, fill: 'ink' },
        brow(-1),
        brow(1),
        mouths[mouth],
      ],
    },
  ]
}
