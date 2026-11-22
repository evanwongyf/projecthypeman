// Poses for the 3D exercise figure, as joint angles in degrees, and looped animation
// between them. Plain numbers only, so this file has no three.js in it.
//
// Angles are anatomical, the same for both sides:
//   hip      [flexion (thigh forward), abduction (out to the side), rotation (toes out)]
//   knee     flexion (heel towards bottom)
//   ankle    dorsiflexion (toes up); negative points the toes
//   shoulder [flexion (arm forward and up), abduction (out to the side), rotation (forearm up)]
//   elbow    flexion
//   spine    [flexion (bend forward), side bend (to the figure's right), twist (chest to the right)]
//   neck     [flexion (chin down), side, turn]
// The root is the whole body: pitch tips it forward about the hips (90 is face down),
// roll tips it sideways, yaw turns it, and lift raises it off the ground (jumps).

export type Side = { hip: number[]; knee: number; ankle: number; shoulder: number[]; elbow: number; wrist: number; grip: number }
export type Pose = {
  pitch: number
  roll: number
  yaw: number
  lift: number
  // Moves the body forward/back and sideways (metres), for lunges, steps and footwork.
  x: number
  z: number
  spine: number[]
  neck: number[]
  L: Side
  R: Side
}

type DeepPartial<T> = { [K in keyof T]?: T[K] extends number[] ? number[] : T[K] extends object ? DeepPartial<T[K]> : T[K] }
export type PosePart = DeepPartial<Pose>

const side = (): Side => ({ hip: [0, 4, 6], knee: 4, ankle: 0, shoulder: [4, 8, 0], elbow: 12, wrist: 0, grip: 0.3 })
export const STAND: Pose = { pitch: 0, roll: 0, yaw: 0, lift: 0, x: 0, z: 0, spine: [0, 0, 0], neck: [0, 0, 0], L: side(), R: side() }

function mergeSide(base: Side, p?: DeepPartial<Side>): Side {
  if (!p) return base
  const arr = (a: number[], b?: number[]) => (b ? a.map((v, i) => b[i] ?? v) : a)
  return {
    hip: arr(base.hip, p.hip),
    knee: p.knee ?? base.knee,
    ankle: p.ankle ?? base.ankle,
    shoulder: arr(base.shoulder, p.shoulder),
    elbow: p.elbow ?? base.elbow,
    wrist: p.wrist ?? base.wrist,
    grip: p.grip ?? base.grip,
  }
}

// A pose from a partial one. `both` sets the same values on each side.
export function pose(p: PosePart & { both?: DeepPartial<Side> } = {}, base: Pose = STAND): Pose {
  const arr = (a: number[], b?: number[]) => (b ? a.map((v, i) => b[i] ?? v) : a)
  return {
    pitch: p.pitch ?? base.pitch,
    roll: p.roll ?? base.roll,
    yaw: p.yaw ?? base.yaw,
    lift: p.lift ?? base.lift,
    x: p.x ?? base.x,
    z: p.z ?? base.z,
    spine: arr(base.spine, p.spine),
    neck: arr(base.neck, p.neck),
    L: mergeSide(mergeSide(base.L, p.both), p.L),
    R: mergeSide(mergeSide(base.R, p.both), p.R),
  }
}

// Swaps the two sides, for the other-leg half of an exercise.
export function mirror(p: Pose): Pose {
  return { ...p, roll: -p.roll, yaw: -p.yaw, x: -p.x, spine: [p.spine[0], -p.spine[1], -p.spine[2]], neck: [p.neck[0], -p.neck[1], -p.neck[2]], L: p.R, R: p.L }
}

// ── as flat number lists, for blending ──────────────────────────────────────

const sideVec = (s: Side) => [...s.hip, s.knee, s.ankle, ...s.shoulder, s.elbow, s.wrist, s.grip]
const toVec = (p: Pose) => [p.pitch, p.roll, p.yaw, p.lift, p.x, p.z, ...p.spine, ...p.neck, ...sideVec(p.L), ...sideVec(p.R)]

function fromVec(v: number[]): Pose {
  let i = 0
  const n = () => v[i++]
  const s = (): Side => ({ hip: [n(), n(), n()], knee: n(), ankle: n(), shoulder: [n(), n(), n()], elbow: n(), wrist: n(), grip: n() })
  return { pitch: n(), roll: n(), yaw: n(), lift: n(), x: n(), z: n(), spine: [n(), n(), n()], neck: [n(), n(), n()], L: s(), R: s() }
}

// One rep of an exercise: poses at points through the cycle (0 to 1). The motion loops,
// passing smoothly through every key (a Catmull-Rom curve). A key with `hold` stays put
// for that share of the cycle.
export type Key = { at: number; pose: Pose }

export type Track = { keys: { at: number; v: number[] }[] }

export function track(keys: Key[]): Track {
  return { keys: [...keys].sort((a, b) => a.at - b.at).map((k) => ({ at: k.at, v: toVec(k.pose) })) }
}

export function sample(tr: Track, phase: number): Pose {
  const ks = tr.keys
  const n = ks.length
  if (n === 1) return fromVec(ks[0].v)
  const t = ((phase % 1) + 1) % 1
  let i = n - 1
  for (let j = 0; j < n; j++) if (ks[j].at <= t) i = j
  const k1 = ks[i]
  const k2 = ks[(i + 1) % n]
  const span = (k2.at - k1.at + 1) % 1 || 1
  const u = ((t - k1.at + 1) % 1) / span
  const k0 = ks[(i - 1 + n) % n]
  const k3 = ks[(i + 2) % n]
  // Centripetal-free Catmull-Rom on each number; good enough for joint angles.
  const u2 = u * u
  const u3 = u2 * u
  return fromVec(
    k1.v.map((p1, j) => {
      const p0 = k0.v[j]
      const p2 = k2.v[j]
      const p3 = k3.v[j]
      return 0.5 * (2 * p1 + (-p0 + p2) * u + (2 * p0 - 5 * p1 + 4 * p2 - p3) * u2 + (-p0 + 3 * p1 - 3 * p2 + p3) * u3)
    }),
  )
}

// A symmetric gait (running, skipping, marching): keys describe the right side through the
// cycle; the left side does the same half a cycle later.
export function gait(keys: Key[]): Key[] {
  const right = track(keys)
  const phases = [...new Set(keys.flatMap((k) => [k.at, (k.at + 0.5) % 1]))].sort((a, b) => a - b)
  return phases.map((at) => {
    const now = sample(right, at)
    const later = sample(right, at + 0.5)
    return { at, pose: { ...now, L: later.R } }
  })
}
