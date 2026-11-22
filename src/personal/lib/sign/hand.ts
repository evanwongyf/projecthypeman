// A cartoon hand as a tiny 3D skeleton. Fingers bend at three joints, the thumb is placed
// by aiming its tip at a point (or at a spot on a finger) and solving the bones to reach
// it, and the result is drawn as outlined capsules sorted by depth. Everything is plain
// numbers so poses can be blended frame by frame for animation.
//
// Hand space: the wrist is at the origin, fingers point up (+y), the palm faces the viewer
// (+z), and for a right hand the thumb is on the viewer's right (+x).

export type V3 = [number, number, number]
export type V2 = [number, number]

export const add = (a: V3, b: V3): V3 => [a[0] + b[0], a[1] + b[1], a[2] + b[2]]
export const sub = (a: V3, b: V3): V3 => [a[0] - b[0], a[1] - b[1], a[2] - b[2]]
export const mul = (a: V3, s: number): V3 => [a[0] * s, a[1] * s, a[2] * s]
export const dot = (a: V3, b: V3) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
export const len = (a: V3) => Math.hypot(a[0], a[1], a[2])
export const norm = (a: V3): V3 => {
  const l = len(a) || 1
  return [a[0] / l, a[1] / l, a[2] / l]
}
export const lerp = (a: number, b: number, t: number) => a + (b - a) * t
export const lerp3 = (a: V3, b: V3, t: number): V3 => [lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t)]
const rad = (d: number) => (d * Math.PI) / 180

export type Mat = [V3, V3, V3]
export const apply = (m: Mat, v: V3): V3 => [dot(m[0], v), dot(m[1], v), dot(m[2], v)]
const mm = (a: Mat, b: Mat): Mat => {
  const col = (j: number): V3 => [b[0][j], b[1][j], b[2][j]]
  return [0, 1, 2].map((i) => [0, 1, 2].map((j) => dot(a[i], col(j)))) as Mat
}

// Turn the forearm (ry, so 180 shows the back of the hand), then bend the wrist forward
// (rx, so 90 points the fingers at the viewer), then tilt in the picture plane (rz).
export function rotation([rx, ry, rz]: V3): Mat {
  const [cx, sx, cy, sy, cz, sz] = [Math.cos(rad(rx)), Math.sin(rad(rx)), Math.cos(rad(ry)), Math.sin(rad(ry)), Math.cos(rad(rz)), Math.sin(rad(rz))]
  const X: Mat = [[1, 0, 0], [0, cx, -sx], [0, sx, cx]]
  const Y: Mat = [[cy, 0, sy], [0, 1, 0], [-sy, 0, cy]]
  const Z: Mat = [[cz, -sz, 0], [sz, cz, 0], [0, 0, 1]]
  return mm(Z, mm(X, Y))
}

// ── poses ──────────────────────────────────────────────────────────────────

export type FingerKey = 'i' | 'm' | 'r' | 'p'
export const FINGERS: FingerKey[] = ['i', 'm', 'r', 'p']

// Bend at the knuckle, middle and end joints in degrees, and spread (+ is towards the thumb).
export type Finger = [number, number, number, number?]

// Where the thumb tip goes: a point in hand space, or a joint of a finger (0 knuckle,
// 1 and 2 the middle joints, 3 the tip) plus an offset.
export type Thumb = V3 | { to: FingerKey; j?: number; off?: V3 }

export type Shape = { i: Finger; m: Finger; r: Finger; p: Finger; t: Thumb }

// A shape with the thumb resolved to a point, so two shapes can be blended.
export type Pose = { i: Finger; m: Finger; r: Finger; p: Finger; t: V3 }

const BASE: Record<FingerKey, V3> = { i: [25, 88, 0], m: [8, 92, 0], r: [-9, 89, 0], p: [-24, 81, 0] }
const BONES: Record<FingerKey, V3> = { i: [42, 25, 19], m: [46, 28, 20], r: [43, 26, 19], p: [34, 20, 17] }
const WIDTH: Record<FingerKey, number> = { i: 16.5, m: 17, r: 16, p: 14 }
const FAN: Record<FingerKey, number> = { i: 3, m: 0, r: -3, p: -7 }
const CMC: V3 = [19, 22, 6]
const THUMB_BONES = [38, 31, 25]

// The joints of a finger, knuckle to tip, and the direction its nail faces.
export function fingerJoints(k: FingerKey, [a, b, c, s = 0]: Finger): { pts: V3[]; nail: V3 } {
  const spread = rad(FAN[k] + s)
  const u: V3 = [Math.sin(spread), Math.cos(spread), 0]
  const z: V3 = [0, 0, 1]
  const pts: V3[] = [BASE[k]]
  let bend = 0
  ;[a, b, c].forEach((angle, j) => {
    bend += rad(angle)
    const dir = add(mul(u, Math.cos(bend)), mul(z, Math.sin(bend)))
    pts.push(add(pts[j], mul(dir, BONES[k][j])))
  })
  return { pts, nail: add(mul(u, Math.sin(bend)), mul(z, -Math.cos(bend))) }
}

export function resolveThumb(shape: Shape): V3 {
  const t = shape.t
  if (Array.isArray(t)) return t
  const { pts } = fingerJoints(t.to, shape[t.to])
  return add(pts[t.j ?? 3], t.off ?? [0, 0, 0])
}

export const toPose = (s: Shape): Pose => ({ i: s.i, m: s.m, r: s.r, p: s.p, t: resolveThumb(s) })

export function blendPose(a: Pose, b: Pose, t: number): Pose {
  const f = (x: Finger, y: Finger): Finger => [lerp(x[0], y[0], t), lerp(x[1], y[1], t), lerp(x[2], y[2], t), lerp(x[3] ?? 0, y[3] ?? 0, t)]
  return { i: f(a.i, b.i), m: f(a.m, b.m), r: f(a.r, b.r), p: f(a.p, b.p), t: lerp3(a.t, b.t, t) }
}

// Bends the thumb bones to reach the target. Starting from a bow that bulges out and
// forward keeps the answer looking like a thumb rather than a hairpin.
function solveThumb(target: V3): V3[] {
  const total = THUMB_BONES.reduce((a, b) => a + b, 0)
  const toT = sub(target, CMC)
  const dist = len(toT)
  const dir = norm(toT)
  const pole = norm(sub([1, 0.15, 0.55], mul(dir, dot([1, 0.15, 0.55], dir))))
  const bow = Math.max(0, total - dist) * 0.55
  const pts: V3[] = [CMC]
  let along = 0
  for (let j = 0; j < 3; j++) {
    along += THUMB_BONES[j]
    const f = Math.min(1, along / total)
    pts.push(add(add(CMC, mul(dir, dist * f)), mul(pole, bow * Math.sin(Math.PI * f))))
  }
  if (dist >= total) {
    let p = CMC
    return [CMC, ...THUMB_BONES.map((b) => (p = add(p, mul(dir, b))))]
  }
  for (let it = 0; it < 16; it++) {
    pts[3] = target
    for (let j = 2; j >= 0; j--) pts[j] = add(pts[j + 1], mul(norm(sub(pts[j], pts[j + 1])), THUMB_BONES[j]))
    pts[0] = CMC
    for (let j = 1; j <= 3; j++) pts[j] = add(pts[j - 1], mul(norm(sub(pts[j], pts[j - 1])), THUMB_BONES[j - 1]))
  }
  return pts
}

export type Solved = { fingers: Record<FingerKey, { pts: V3[]; nail: V3 }>; thumb: V3[]; thumbNail: V3 }

export function solvePose(pose: Pose): Solved {
  const fingers = Object.fromEntries(FINGERS.map((k) => [k, fingerJoints(k, pose[k])])) as Solved['fingers']
  const thumb = solveThumb(pose.t)
  const d = norm(sub(thumb[3], thumb[2]))
  const mid = mul(add(thumb[1], thumb[3]), 0.5)
  const bulge = sub(thumb[2], mid)
  const side = add(mul(bulge, 0.25), [0.6, 0, -0.7])
  return { fingers, thumb, thumbNail: norm(sub(side, mul(d, dot(side, d)))) }
}

// Named points on the hand, used to place it ("fingertips at the chin").
export type Anchor = 'wrist' | 'palm' | 'back' | 'knuckles' | 'side' | `${FingerKey | 't'}${'' | '1' | '2'}`

export function anchorPoint(s: Solved, a: Anchor): V3 {
  switch (a) {
    case 'wrist':
      return [0, 0, 0]
    case 'palm':
      return [2, 50, 11]
    case 'back':
      return [2, 50, -11]
    case 'knuckles':
      return [4, 92, -4]
    case 'side':
      return [-31, 48, 0]
  }
  const k = a[0] as FingerKey | 't'
  const pts = k === 't' ? s.thumb : s.fingers[k].pts
  return pts[a.length === 1 ? 3 : Number(a[1])]
}

// ── drawing ────────────────────────────────────────────────────────────────

// Fills are named so the viewer can pick a skin tone.
export type Paint = 'skin' | 'palm' | 'nail' | 'crease' | 'sleeve' | 'shirt' | 'hair' | 'ink' | 'cheek' | 'none'

export type Prim =
  | { k: 'line'; pts: V2[]; w: number; fill: Paint; outline?: number; opacity?: number }
  | { k: 'poly'; pts: V2[]; fill: Paint; outline?: number }
  | { k: 'circle'; c: V2; r: number; fill: Paint; outline?: number }
  | { k: 'path'; d: string; fill: Paint; stroke?: Paint; w?: number }

export type Item = { z: number; prims: Prim[] }

// Maps a point in the scene to the picture: flips y for SVG and, for the full-body view,
// adds a little perspective so moving towards the viewer reads as getting bigger.
// The camera can also look down a little (pitch, in degrees) so flat, palm-up hands show.
export type Camera = { focal?: number; mirror?: boolean; pitch?: number }

const PIVOT_Y = 60

// A direction or point in the scene, as the camera sees it.
export function viewDir(v: V3, cam: Camera): V3 {
  if (!cam.pitch) return v
  const a = rad(cam.pitch)
  return [v[0], v[1] * Math.cos(a) - v[2] * Math.sin(a), v[1] * Math.sin(a) + v[2] * Math.cos(a)]
}

export function view(p: V3, cam: Camera): V3 {
  if (!cam.pitch) return p
  const q = viewDir([p[0], p[1] - PIVOT_Y, p[2]], cam)
  return [q[0], q[1] + PIVOT_Y, q[2]]
}

// Takes a point the camera already sees (see view).
export function project(p: V3, cam: Camera): { at: V2; k: number } {
  const k = cam.focal ? cam.focal / (cam.focal - p[2]) : 1
  return { at: [(cam.mirror ? -p[0] : p[0]) * k, -p[1] * k], k }
}

const PALM: V2[] = [
  [-22, 4], [-29, 30], [-31, 60], [-29, 80], [-17, 90], [0, 94], [16, 93], [30, 88], [33, 62], [31, 32], [23, 4],
]
const CREASES: V2[][] = [
  [[30, 58], [14, 42], [6, 22]],
  [[-29, 66], [-8, 70], [16, 76]],
]

function hull(pts: V2[]): V2[] {
  const p = [...pts].sort((a, b) => a[0] - b[0] || a[1] - b[1])
  const cross = (o: V2, a: V2, b: V2) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0])
  const lower: V2[] = []
  for (const q of p) {
    while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], q) <= 0) lower.pop()
    lower.push(q)
  }
  const upper: V2[] = []
  for (const q of p.reverse()) {
    while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], q) <= 0) upper.pop()
    upper.push(q)
  }
  return [...lower.slice(0, -1), ...upper.slice(0, -1)]
}

export type Placement = {
  rot: V3
  // Where the wrist goes in the scene, and how big the hand is there.
  at: V3
  scale: number
  // A left hand is a mirrored right hand.
  left?: boolean
  // Draw a forearm from the wrist (the close-up view; the body view draws its own arms).
  arm?: boolean
}

export function toScene(local: V3, pl: Placement, R: Mat): V3 {
  const q = add(mul(apply(R, local), pl.scale), pl.at)
  if (!pl.left) return q
  return [2 * pl.at[0] - q[0], q[1], q[2]]
}

const OUT = 2.6

// The hand as depth-sorted items. Anything on the far side of the palm is drawn before it.
export function drawHand(solved: Solved, pl: Placement, cam: Camera): Item[] {
  const R = rotation(pl.rot)
  const S = (v: V3) => view(toScene(v, pl, R), cam)
  const dirS = (v: V3): V3 => {
    const d = apply(R, v)
    return viewDir(pl.left ? [-d[0], d[1], d[2]] : d, cam)
  }
  const P = (v: V3) => project(S(v), cam)
  const w = (base: number, pts: V3[]) => base * pl.scale * (pts.reduce((a, p) => a + P(p).k, 0) / pts.length)

  const normal = dirS([0, 0, 1])
  const facing = normal[2] >= 0
  const centre = S([0, 50, 0])
  const front: Item[] = []
  const behind: Item[] = []
  const place = (item: Item, pts: V3[]) => {
    const m = pts.reduce((acc, p) => add(acc, S(p)), [0, 0, 0] as V3)
    const side = dot(sub(mul(m, 1 / pts.length), centre), normal) / pl.scale
    ;(side * (facing ? 1 : -1) > -5 ? front : behind).push(item)
  }

  const items: Item[] = []

  if (pl.arm) {
    const elbow: V3 = [0, -170, 0]
    const cuff: V3 = [0, -100, 0]
    items.push({
      z: S([0, -60, 0])[2] - 400,
      prims: [
        { k: 'line', pts: [P([0, 6, 0]).at, P(elbow).at], w: w(42, [cuff]), fill: 'skin', outline: OUT },
        { k: 'line', pts: [P(cuff).at, P([0, -200, 0]).at], w: w(52, [cuff]), fill: 'sleeve', outline: OUT },
      ],
    })
  }

  // Palm: the outline of a slab, so it still has width when seen edge on.
  const slab: V3[] = PALM.flatMap(([x, y]) => [[x, y, 9], [x, y, -9]] as V3[])
  const palm: Prim[] = [{ k: 'poly', pts: hull(slab.map((p) => P(p).at)), fill: facing ? 'palm' : 'skin', outline: OUT }]
  if (normal[2] > 0.35)
    for (const c of CREASES)
      palm.push({ k: 'line', pts: c.map(([x, y]) => P([x, y, 9]).at), w: 1.6 * pl.scale, fill: 'crease', opacity: Math.min(1, (normal[2] - 0.35) * 2.5) })
  const palmItem: Item = { z: centre[2], prims: palm }

  // Thumb: a fat base bone (the ball of the thumb) and then the thumb itself.
  const th = solved.thumb
  const thumbItem: Item = {
    z: 0,
    prims: [
      { k: 'line', pts: [P(th[0]).at, P(th[1]).at], w: w(25, th.slice(0, 2)), fill: facing ? 'palm' : 'skin', outline: OUT },
      { k: 'line', pts: th.slice(1).map((p) => P(p).at), w: w(18.5, th.slice(1)), fill: 'skin', outline: OUT },
      ...nail(th[2], th[3], solved.thumbNail, 18.5),
    ],
  }
  thumbItem.z = S(th[2])[2]
  place(thumbItem, th.slice(1))

  for (const k of FINGERS) {
    const f = solved.fingers[k]
    const item: Item = {
      z: f.pts.slice(1).reduce((a, p) => a + S(p)[2], 0) / 3,
      prims: [{ k: 'line', pts: f.pts.map((p) => P(p).at), w: w(WIDTH[k], f.pts), fill: 'skin', outline: OUT }, ...nail(f.pts[2], f.pts[3], f.nail, WIDTH[k])],
    }
    place(item, f.pts.slice(1))
  }

  function nail(from: V3, tip: V3, facingDir: V3, width: number): Prim[] {
    const n = dirS(facingDir)
    if (n[2] < 0.15) return []
    const along = sub(tip, from)
    const lift = mul(norm(facingDir), width * 0.28)
    const a = add(add(from, mul(along, 0.48)), lift)
    const b = add(add(from, mul(along, 0.86)), lift)
    return [{ k: 'line', pts: [P(a).at, P(b).at], w: w(width * 0.5, [a, b]), fill: 'nail', opacity: Math.min(1, (n[2] - 0.15) * 3) }]
  }

  const byZ = (a: Item, b: Item) => a.z - b.z
  return [...items, ...behind.sort(byZ), palmItem, ...front.sort(byZ)].map((it, i, all) => ({
    // Keep the hand's own order when it is merged with the rest of a scene.
    z: (pl.arm ? 0 : centre[2]) + (i - all.length / 2) * 0.001,
    prims: it.prims,
  }))
}
