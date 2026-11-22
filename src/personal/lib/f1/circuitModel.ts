// A quasi-steady-state lap model for the circuit atlas. A circuit centreline goes in; out
// come its curvature, its corners, the fastest speed a car can hold at every metre, and a
// lap time. Everything the atlas draws is computed here, so the graphs, the tables and the
// worked examples in the guides can never disagree with each other.
//
// The centrelines come from the MIT-licensed bacinger/f1-circuits dataset (see
// circuitGeo.ts). The car is a simplified 2025-style car; nothing here is team data.

const G = 9.81
const R_EARTH = 6371008.8
const DS = 5 // resampling step along the track, metres
const VTOP = 105 // m/s, a hard stop for the solver where a corner has no speed limit at all

export type Vec = [number, number]

export type Track = {
  id: string
  n: number
  ds: number
  length: number
  // Resampled centreline in metres (x east, y north), one point every `ds` metres.
  x: Float64Array
  y: Float64Array
  // Distance from the start/finish line.
  s: Float64Array
  // Signed curvature in 1/m: positive for a left-hander, negative for a right-hander.
  kappa: Float64Array
  // The racing line: where a driver runs within the track width. Sample i of the line is
  // sample i of the centreline pushed sideways by alpha[i] (left positive), so every array
  // here lines up index for index with the centreline.
  alpha: Float64Array
  lx: Float64Array
  ly: Float64Array
  // Distance along the line from sample i to sample i + 1, and the line's curvature.
  dsl: Float64Array
  kLine: Float64Array
  // Altitude of the circuit above sea level, metres.
  altitude: number
}

// ── geometry ──────────────────────────────────────────────────────────────

// Longitude and latitude to metres on a flat plane centred on the first point. Over a few
// kilometres the flat-earth error is far below the accuracy of the centreline itself.
export function project(lonlat: Vec[]): Vec[] {
  const [lon0, lat0] = lonlat[0]
  const k = Math.cos((lat0 * Math.PI) / 180)
  return lonlat.map(([lon, lat]) => [((lon - lon0) * Math.PI * R_EARTH * k) / 180, ((lat - lat0) * Math.PI * R_EARTH) / 180])
}

const wrapAngle = (a: number) => {
  while (a > Math.PI) a -= 2 * Math.PI
  while (a <= -Math.PI) a += 2 * Math.PI
  return a
}

// Circular Gaussian smoothing of a closed signal sampled every `ds` metres.
export function gaussian(values: Float64Array, ds: number, sigma: number): Float64Array {
  const n = values.length
  const half = Math.ceil((3 * sigma) / ds)
  const w: number[] = []
  let total = 0
  for (let j = -half; j <= half; j++) {
    const wt = Math.exp(-0.5 * ((j * ds) / sigma) ** 2)
    w.push(wt)
    total += wt
  }
  const out = new Float64Array(n)
  for (let i = 0; i < n; i++) {
    let acc = 0
    for (let j = -half; j <= half; j++) acc += w[j + half] * values[(i + j + n * 4) % n]
    out[i] = acc / total
  }
  return out
}

// Centripetal Catmull-Rom spline through the vertices of a closed loop, sampled about every
// metre. It passes through every vertex and bends smoothly between them, so a gentle bend
// that the dataset marks with one widely spaced vertex is not mistaken for a sharp kink.
function spline(ring: Vec[]): Vec[] {
  const m = ring.length
  const out: Vec[] = []
  const lerp = (a: Vec, b: Vec, ta: number, tb: number, t: number): Vec => {
    const d = tb - ta || 1e-9
    return [(a[0] * (tb - t) + b[0] * (t - ta)) / d, (a[1] * (tb - t) + b[1] * (t - ta)) / d]
  }
  for (let i = 0; i < m; i++) {
    const p0 = ring[(i - 1 + m) % m]
    const p1 = ring[i]
    const p2 = ring[(i + 1) % m]
    const p3 = ring[(i + 2) % m]
    const t0 = 0
    const t1 = t0 + Math.hypot(p1[0] - p0[0], p1[1] - p0[1]) ** 0.5
    const t2 = t1 + Math.hypot(p2[0] - p1[0], p2[1] - p1[1]) ** 0.5
    const t3 = t2 + Math.hypot(p3[0] - p2[0], p3[1] - p2[1]) ** 0.5
    const len = Math.hypot(p2[0] - p1[0], p2[1] - p1[1])
    const steps = Math.max(1, Math.ceil(len))
    for (let k = 0; k < steps; k++) {
      const t = t1 + ((t2 - t1) * k) / steps
      const a1 = lerp(p0, p1, t0, t1, t)
      const a2 = lerp(p1, p2, t1, t2, t)
      const a3 = lerp(p2, p3, t2, t3, t)
      const b1 = lerp(a1, a2, t0, t2, t)
      const b2 = lerp(a2, a3, t1, t3, t)
      out.push(lerp(b1, b2, t1, t2, t))
    }
  }
  return out
}

export type TrackOptions = {
  // Slides the start/finish line this many metres along the lap.
  offset?: number
  // Racing-line offsets from the centreline in metres (left positive), one per 10 m of lap.
  alpha?: number[]
  // Gaussian smoothing of the curvature, metres.
  sigma?: number
}

// Headings, step lengths and signed curvature of a closed path sampled at (x, y).
function curvatureOf(x: Float64Array, y: Float64Array, sigma: number, ds: number) {
  const n = x.length
  const heading = new Float64Array(n)
  for (let i = 0; i < n; i++) {
    const j = (i + 1) % n
    const h = (i - 1 + n) % n
    heading[i] = Math.atan2(y[j] - y[h], x[j] - x[h])
  }
  const step = new Float64Array(n)
  const turn = new Float64Array(n)
  for (let i = 0; i < n; i++) {
    const j = (i + 1) % n
    step[i] = Math.hypot(x[j] - x[i], y[j] - y[i])
    turn[i] = wrapAngle(heading[j] - heading[i])
  }
  // Curvature is the rate at which the heading turns per metre: the heading change
  // between neighbouring samples, smoothed lightly to take out the numerical noise.
  const smooth = gaussian(turn, ds, sigma)
  const kappa = new Float64Array(n)
  for (let i = 0; i < n; i++) kappa[i] = smooth[i] / step[i]
  return { heading, step, kappa }
}

// Builds the resampled, smoothed track from raw polyline vertices (metres, closed: the last
// vertex repeats the first). `length` is the official lap length, which the traced path is
// rescaled to match.
export function buildTrack(id: string, pts: Vec[], length: number, altitude: number, opt: TrackOptions = {}): Track {
  const sigma = opt.sigma ?? 6
  const dense = spline(pts.slice(0, -1))
  const m = dense.length
  const cum = new Float64Array(m + 1)
  for (let i = 0; i < m; i++) cum[i + 1] = cum[i] + Math.hypot(dense[(i + 1) % m][0] - dense[i][0], dense[(i + 1) % m][1] - dense[i][1])
  const pathLen = cum[m]
  const scale = length / pathLen
  // An even sample count, so every second sample is a node of the racing-line solution.
  const n = 2 * Math.round(length / (2 * DS))
  const ds = length / n

  const x = new Float64Array(n)
  const y = new Float64Array(n)
  let seg = 0
  const start = ((((opt.offset ?? 0) % length) + length) % length) / scale // in path metres
  for (let i = 0; i < n; i++) {
    const d = (start + (i * ds) / scale) % pathLen
    while (seg > 0 && cum[seg] > d) seg--
    while (seg < m - 1 && cum[seg + 1] <= d) seg++
    const f = (d - cum[seg]) / (cum[seg + 1] - cum[seg] || 1e-9)
    const a = dense[seg]
    const b = dense[(seg + 1) % m]
    x[i] = (a[0] + (b[0] - a[0]) * f) * scale
    y[i] = (a[1] + (b[1] - a[1]) * f) * scale
  }
  const c = curvatureOf(x, y, sigma, ds)
  const s = new Float64Array(n)
  for (let i = 0; i < n; i++) s[i] = i * ds

  // The racing line: the centreline shifted along its left normal by alpha.
  const alpha = new Float64Array(n)
  const nodes = opt.alpha
  if (nodes && nodes.length === n / 2) {
    for (let k = 0; k < nodes.length; k++) {
      alpha[2 * k] = nodes[k]
      alpha[2 * k + 1] = (nodes[k] + nodes[(k + 1) % nodes.length]) / 2
    }
  }
  const lx = new Float64Array(n)
  const ly = new Float64Array(n)
  for (let i = 0; i < n; i++) {
    lx[i] = x[i] - Math.sin(c.heading[i]) * alpha[i]
    ly[i] = y[i] + Math.cos(c.heading[i]) * alpha[i]
  }
  const l = curvatureOf(lx, ly, sigma, ds)
  return { id, n, ds, length, x, y, s, kappa: c.kappa, alpha, lx, ly, dsl: l.step, kLine: l.kappa, altitude }
}

// The minimum-curvature racing line: the offsets from the centreline, one per 10 m, that
// make the path through the track as gentle as the track width allows. The objective is the
// sum of squared second differences of the path's points, which is (for evenly spaced
// points) proportional to the sum of squared curvatures; because each point only moves
// along a fixed normal, it is a quadratic in the offsets, solved here exactly with the
// offsets that hit the track edge pinned there. Used by the build script only.
export function optimiseLine(t: Track, halfWidth: number): number[] {
  const m = t.n / 2
  const cx = new Float64Array(m)
  const cy = new Float64Array(m)
  for (let k = 0; k < m; k++) { cx[k] = t.x[2 * k]; cy[k] = t.y[2 * k] }
  const nx = new Float64Array(m)
  const ny = new Float64Array(m)
  for (let k = 0; k < m; k++) {
    const a = (k - 1 + m) % m
    const b = (k + 1) % m
    const h = Math.atan2(cy[b] - cy[a], cx[b] - cx[a])
    nx[k] = -Math.sin(h)
    ny[k] = Math.cos(h)
  }
  // Minimise the sum over nodes k of |e_k|^2, e_k = b_k + alpha[k-1] n[k-1] - 2 alpha[k] n[k] + alpha[k+1] n[k+1].
  const M = new Float64Array(m * m)
  const r = new Float64Array(m)
  for (let k = 0; k < m; k++) {
    const idx = [(k - 1 + m) % m, k, (k + 1) % m]
    const co = [1, -2, 1]
    const bx = cx[idx[0]] - 2 * cx[k] + cx[idx[2]]
    const by = cy[idx[0]] - 2 * cy[k] + cy[idx[2]]
    for (let p = 0; p < 3; p++) {
      const a = idx[p]
      r[a] -= co[p] * (nx[a] * bx + ny[a] * by)
      for (let q = 0; q < 3; q++) {
        const b = idx[q]
        M[a * m + b] += co[p] * co[q] * (nx[a] * nx[b] + ny[a] * ny[b])
      }
    }
  }
  let tr = 0
  for (let i = 0; i < m; i++) tr += M[i * m + i]
  const ridge = (1e-5 * tr) / m
  for (let i = 0; i < m; i++) M[i * m + i] += ridge

  const alpha = new Float64Array(m)
  const pinned = new Int8Array(m) // 0 free, +1 at the left edge, -1 at the right edge
  for (let round = 0; round < 80; round++) {
    const free: number[] = []
    for (let i = 0; i < m; i++) if (!pinned[i]) free.push(i)
    const f = free.length
    // Cholesky of the free block, with the pinned offsets moved to the right-hand side.
    const L = new Float64Array(f * f)
    const rhs = new Float64Array(f)
    for (let a = 0; a < f; a++) {
      let acc = r[free[a]]
      for (let i = 0; i < m; i++) if (pinned[i]) acc -= M[free[a] * m + i] * alpha[i]
      rhs[a] = acc
      for (let b = 0; b <= a; b++) L[a * f + b] = M[free[a] * m + free[b]]
    }
    for (let j = 0; j < f; j++) {
      let d = L[j * f + j]
      for (let k = 0; k < j; k++) d -= L[j * f + k] ** 2
      const dj = Math.sqrt(Math.max(d, 1e-12))
      L[j * f + j] = dj
      for (let i = j + 1; i < f; i++) {
        let v = L[i * f + j]
        for (let k = 0; k < j; k++) v -= L[i * f + k] * L[j * f + k]
        L[i * f + j] = v / dj
      }
    }
    const z = new Float64Array(f)
    for (let i = 0; i < f; i++) {
      let v = rhs[i]
      for (let k = 0; k < i; k++) v -= L[i * f + k] * z[k]
      z[i] = v / L[i * f + i]
    }
    for (let i = f - 1; i >= 0; i--) {
      let v = z[i]
      for (let k = i + 1; k < f; k++) v -= L[k * f + i] * z[k]
      z[i] = v / L[i * f + i]
    }
    let violated = false
    for (let a = 0; a < f; a++) {
      const v = z[a]
      if (v > halfWidth) { alpha[free[a]] = halfWidth; pinned[free[a]] = 1; violated = true }
      else if (v < -halfWidth) { alpha[free[a]] = -halfWidth; pinned[free[a]] = -1; violated = true }
      else alpha[free[a]] = v
    }
    if (violated) continue
    // Release any pinned offset the objective would rather move back inside the track.
    let released = false
    for (let i = 0; i < m; i++) {
      if (!pinned[i]) continue
      let g = -r[i]
      for (let j = 0; j < m; j++) g += M[i * m + j] * alpha[j]
      if ((pinned[i] > 0 && g > 1e-9) || (pinned[i] < 0 && g < -1e-9)) { pinned[i] = 0; released = true }
    }
    if (!released) break
  }
  return Array.from(alpha, (v) => Math.round(v * 20) / 20)
}

// ── corners ───────────────────────────────────────────────────────────────

export type CornerOptions = {
  // A stretch counts as a corner while its radius is below 1/kMin metres.
  kMin?: number
  // Two stretches turning the same way, closer together than this (metres), are one corner.
  merge?: number
  // Corners that turn the car through less than this many degrees are dropped.
  minAngle?: number
  // Apex distances (metres from the start line, to within 12 m) of detected corners to
  // remove: kinks the official map does not number.
  drop?: number[]
}

export type Corner = {
  n: number
  s0: number
  sApex: number
  s1: number
  dir: 'left' | 'right'
  // Total heading change through the corner, degrees.
  angle: number
  // Smallest radius, metres.
  rMin: number
}

export function detectCorners(t: Track, opt: CornerOptions = {}): Corner[] {
  const kMin = opt.kMin ?? 1 / 330
  const merge = opt.merge ?? 35
  const minAngle = opt.minAngle ?? 9
  const n = t.n
  const sign = (i: number) => (t.kappa[i] >= kMin ? 1 : t.kappa[i] <= -kMin ? -1 : 0)

  // Find runs of same-sign tight curvature around the closed loop, starting from a
  // straight so no run is split by the start line.
  let first = 0
  for (let i = 0; i < n; i++) if (sign(i) === 0) { first = i; break }
  type Run = { a: number; b: number; dir: number }
  const runs: Run[] = []
  let cur: Run | null = null
  for (let step = 0; step < n; step++) {
    const i = (first + step) % n
    const sg = sign(i)
    if (sg === 0) {
      if (cur) { runs.push(cur); cur = null }
    } else if (cur && cur.dir === sg) {
      cur.b = step
    } else {
      if (cur) runs.push(cur)
      cur = { a: step, b: step, dir: sg }
    }
  }
  if (cur) runs.push(cur)

  // Join neighbouring runs that turn the same way across a short gap.
  const gapSteps = merge / t.ds
  const joined: Run[] = []
  for (const r of runs) {
    const last = joined[joined.length - 1]
    if (last && last.dir === r.dir && r.a - last.b <= gapSteps) last.b = r.b
    else joined.push({ ...r })
  }
  const lastJ = joined[joined.length - 1]
  if (joined.length > 1 && lastJ.dir === joined[0].dir && joined[0].a + n - lastJ.b <= gapSteps) {
    joined[0].a = lastJ.a - n
    joined.pop()
  }

  const corners: Corner[] = []
  for (const r of joined) {
    let sum = 0
    let apex = r.a
    let kBest = 0
    for (let step = r.a; step <= r.b; step++) {
      const i = (((first + step) % n) + n) % n
      sum += t.kappa[i] * t.ds
      if (Math.abs(t.kappa[i]) > kBest) { kBest = Math.abs(t.kappa[i]); apex = step }
    }
    const angle = Math.abs((sum * 180) / Math.PI)
    if (angle < minAngle) continue
    const at = (step: number) => ((((first + step) % n) + n) % n) * t.ds
    corners.push({ n: 0, s0: at(r.a), sApex: at(apex), s1: at(r.b), dir: r.dir > 0 ? 'left' : 'right', angle, rMin: 1 / kBest })
  }
  corners.sort((p, q) => p.sApex - q.sApex)
  const dropped = opt.drop ?? []
  const kept = corners.filter((c) => !dropped.some((d) => Math.abs(d - c.sApex) < 12))
  kept.forEach((c, i) => (c.n = i + 1))
  return kept
}

// Picks the `count` corners that make up a circuit's official turn list: every bend of the
// centreline tighter than a 700 m radius is a candidate, same-direction neighbours a few
// metres apart are joined, and the gentlest ones are dropped until `count` remain. The
// result is numbered in order from the start line.
export function pickCorners(t: Track, count: number): Corner[] {
  const cs = detectCorners(t, { kMin: 1 / 700, merge: 0, minAngle: 3 })
  for (let again = true; again; ) {
    again = false
    for (let i = 0; i + 1 < cs.length && cs.length > count; i++) {
      const a = cs[i]
      const b = cs[i + 1]
      if (a.dir === b.dir && b.s0 - a.s1 < 50) {
        cs.splice(i, 2, { ...a, s1: b.s1, angle: a.angle + b.angle, rMin: Math.min(a.rMin, b.rMin), sApex: a.rMin < b.rMin ? a.sApex : b.sApex })
        again = true
        break
      }
    }
  }
  while (cs.length > count) {
    let k = 0
    for (let i = 1; i < cs.length; i++) if (cs[i].angle < cs[k].angle) k = i
    cs.splice(k, 1)
  }
  cs.forEach((c, i) => (c.n = i + 1))
  return cs
}

// ── the car ───────────────────────────────────────────────────────────────

export type Setup = {
  // Car, driver and half a tank, kg.
  mass: number
  // Tyre friction coefficient (the whole tyre force divided by the load on it).
  mu: number
  // Lift coefficient times frontal area: how much downforce per unit of dynamic pressure, m².
  clA: number
  // Drag coefficient times frontal area, m².
  cdA: number
  // Power at the wheels the driver can use, kW.
  power: number
  // Strongest braking the discs can manage whatever the tyres could take, in g.
  brakeG: number
  // The most lateral acceleration the car can use however much downforce it has, in g: tyre
  // grip stops growing in proportion once the load on them is very high.
  latCap: number
}

export const BASE_SETUP: Setup = { mass: 800, mu: 2.2, clA: 4.25, cdA: 1.4, power: 630, brakeG: 5.6, latCap: 6.3 }

// Wing level 0 is the skinniest Monza-style package, 1 is a full Monaco-style one. It
// slides downforce and drag together, which is why the two always travel as a pair.
export function setupForWing(level: number, base: Setup = BASE_SETUP): Setup {
  return { ...base, clA: 3.4 + 1.7 * level, cdA: 1.08 + 0.65 * level }
}

const RHO0 = 1.2
const REAR_SHARE = 0.55 // fraction of the tyre load that sits on the driven rear wheels
const CRR = 0.015 // rolling resistance coefficient

export const airDensity = (altitude: number) => RHO0 * Math.max(0.3, 1 - 2.2558e-5 * altitude) ** 4.2559

export type Sim = {
  track: Track
  setup: Setup
  rho: number
  v: Float64Array // m/s
  vLimit: Float64Array // the pure cornering limit before braking and accelerating are considered
  vForward: Float64Array // the limit after the acceleration pass, before the braking pass
  aLat: Float64Array // lateral acceleration, g
  aLong: Float64Array // longitudinal acceleration, g (negative while braking)
  throttle: Float64Array // 0..1
  brake: Float64Array // 0..1
  t: Float64Array // cumulative time at each sample, s
  lapTime: number
  vMax: number
  vMin: number
  vAvg: number
  // Length of the racing line, metres: a little under the centreline lap.
  lineLength: number
  fullThrottle: number // share of the lap at full throttle, 0..1
  braking: number // share of the lap spent braking, 0..1
  brakingTime: number // seconds
}

// The car's capabilities at a given air density, as functions of speed v (m/s) and the
// curvature k (1/m) of the path being followed. All the lap maths is in here.
export function dynamics(setup: Setup, rho: number) {
  const m = setup.mass
  const mu = setup.mu
  const kDown = 0.5 * rho * setup.clA // downforce per (m/s)^2, N
  const dragK = (0.5 * rho * setup.cdA) / m // drag deceleration per (m/s)^2
  const crr = CRR * G
  const brakeCap = setup.brakeG * G
  const pOverM = (setup.power * 1000) / m
  const latCap = setup.latCap * G
  // The most sideways acceleration the tyres can give at speed v: grip times the weight plus
  // the downforce, capped where tyre grip stops growing with load.
  const latMax = (v: number) => Math.min(latCap, mu * (G + (kDown * v * v) / m))
  // 1 when the car is going straight, 0 when cornering has used up all the tyre's grip.
  const share = (v: number, k: number) => {
    const r = Math.min(1, (v * v * Math.abs(k)) / latMax(v))
    return Math.sqrt(1 - r * r)
  }
  // The most the driven wheels can push the car, from the engine or the tyres, whichever is less.
  const driveMax = (v: number, k: number) => {
    const traction = latMax(v) * REAR_SHARE * share(v, k)
    return Math.min(pOverM / Math.max(v, 1), traction)
  }
  const accel = (v: number, k: number) => driveMax(v, k) - dragK * v * v - crr
  const decel = (v: number, k: number) => Math.min(brakeCap, latMax(v) * share(v, k)) + dragK * v * v + crr
  // The fastest steady speed round a bend of curvature k: the lower of the grip-plus-downforce
  // limit and the cap on lateral acceleration.
  const limit = (k: number) => {
    const kk = Math.abs(k)
    const denom = kk - (mu * kDown) / m
    const free = denom <= 1e-9 ? VTOP : Math.sqrt((mu * G) / denom)
    return Math.min(VTOP, free, kk > 1e-9 ? Math.sqrt(latCap / kk) : VTOP)
  }
  return { latMax, share, driveMax, accel, decel, limit, kDown, dragK, crr, brakeCap, pOverM }
}

export function simulate(track: Track, setup: Setup): Sim {
  const { n, dsl } = track
  const kappa = track.kLine
  const rho = airDensity(track.altitude)
  const { latMax, share, accel, decel, limit, dragK, crr, brakeCap, pOverM } = dynamics(setup, rho)

  const vLimit = new Float64Array(n)
  for (let i = 0; i < n; i++) vLimit[i] = limit(kappa[i])
  let i0 = 0
  for (let i = 1; i < n; i++) if (vLimit[i] < vLimit[i0]) i0 = i

  const v = Float64Array.from(vLimit)
  // Forward pass: how fast can the car be, given what the engine and tyres can add each step.
  for (let step = 0; step < n; step++) {
    const i = (i0 + step) % n
    const j = (i + 1) % n
    const k = (Math.abs(kappa[i]) + Math.abs(kappa[j])) / 2
    const v2 = v[i] * v[i] + 2 * accel(v[i], k) * dsl[i]
    v[j] = Math.min(v[j], Math.sqrt(Math.max(v2, 0)))
  }
  const vForward = Float64Array.from(v)
  // Backward pass: how fast can the car be and still slow enough for what is ahead.
  for (let step = 0; step < n; step++) {
    const j = (((i0 - step) % n) + n) % n
    const i = (j - 1 + n) % n
    const k = (Math.abs(kappa[i]) + Math.abs(kappa[j])) / 2
    const v2 = v[j] * v[j] + 2 * decel(v[j], k) * dsl[i]
    v[i] = Math.min(v[i], Math.sqrt(v2))
  }

  const aLat = new Float64Array(n)
  const aLong = new Float64Array(n)
  const throttle = new Float64Array(n)
  const brake = new Float64Array(n)
  const t = new Float64Array(n)
  let time = 0
  let full = 0
  let braking = 0
  let brakingTime = 0
  let vMax = 0
  let vMin = Infinity
  let lineLen = 0
  for (let i = 0; i < n; i++) lineLen += dsl[i]
  for (let i = 0; i < n; i++) {
    const j = (i + 1) % n
    const k = (Math.abs(kappa[i]) + Math.abs(kappa[j])) / 2
    const a = (v[j] * v[j] - v[i] * v[i]) / (2 * dsl[i])
    aLong[i] = a / G
    aLat[i] = (v[i] * v[i] * kappa[i]) / G
    const resist = dragK * v[i] * v[i] + crr
    const need = a + resist
    if (need >= 0) {
      // Pedal position: the share of the engine's power the car is using to make the
      // acceleration it needs. Where the tyres, not the engine, limit the acceleration the
      // driver is feathering the pedal, so the number stays below one.
      throttle[i] = Math.min(1, need / (pOverM / Math.max(v[i], 1)))
    } else if (-need > 0.12 * G) {
      const avail = Math.min(brakeCap, latMax(v[i]) * share(v[i], k))
      brake[i] = Math.min(1, -need / avail)
    }
    t[i] = time
    const dt = (2 * dsl[i]) / (v[i] + v[j])
    time += dt
    if (throttle[i] >= 0.97) full += dsl[i]
    if (brake[i] > 0) { braking += dsl[i]; brakingTime += dt }
    vMax = Math.max(vMax, v[i])
    vMin = Math.min(vMin, v[i])
  }
  return { track, setup, rho, v, vLimit, vForward, aLat, aLong, throttle, brake, t, lapTime: time, vMax, vMin, vAvg: lineLen / time, lineLength: lineLen, fullThrottle: full / lineLen, braking: braking / lineLen, brakingTime }
}

// ── reading a simulated lap ───────────────────────────────────────────────

export type CornerStats = Corner & {
  vApex: number // km/h at the slowest point of the corner
  vEntry: number // km/h where the corner begins
  vExit: number // km/h where it ends
  gLat: number // peak lateral g
  rLine: number // tightest radius of the racing line through the corner, metres
  brakeFrom: number | null // km/h when braking starts for this corner, null if there is no real braking
  brakeDist: number // metres of braking before the corner
  // slow / medium / fast / flat, from the apex speed.
  speed: 'slow' | 'medium' | 'fast' | 'flat'
  // Description of the shape, for the table and labels.
  shape: 'hairpin' | 'chicane' | 'sweeper' | 'corner' | 'kink'
  gear: number
}

const kmh = (v: number) => v * 3.6

// An approximate 8-speed gearbox: the speed at which each gear runs out of revs.
const GEAR_TOPS = [0, 85, 115, 145, 175, 205, 238, 275, 400]
export const gearAt = (v: number) => {
  const k = kmh(v)
  for (let g = 1; g <= 8; g++) if (k < GEAR_TOPS[g]) return g
  return 8
}

export function cornerStats(sim: Sim, corners: Corner[]): CornerStats[] {
  const { track: t, v, brake, aLat } = sim
  const n = t.n
  const at = (s: number) => ((Math.round(s / t.ds) % n) + n) % n
  return corners.map((c, idx) => {
    const a = at(c.s0)
    const b = at(c.s1)
    const len = (b - a + n) % n
    let iMin = a
    let gMax = 0
    let kLine = 0
    for (let k = 0; k <= len; k++) {
      const i = (a + k) % n
      kLine = Math.max(kLine, Math.abs(t.kLine[i]))
      if (v[i] < v[iMin]) iMin = i
      gMax = Math.max(gMax, Math.abs(aLat[i]))
    }
    // Walk back from the corner to find where the braking zone for it begins.
    let k = 0
    let first = -1
    for (; k < 400; k++) {
      const i = (a - k + n) % n
      if (brake[i] > 0) first = i
      else if (first >= 0 && k > 0) break
      else if (first < 0 && k > 24) break
    }
    const brakeDist = first >= 0 ? (((a - first) % n) + n) % n * t.ds : 0
    const vApex = kmh(v[iMin])
    const speed: CornerStats['speed'] = vApex < 110 ? 'slow' : vApex < 170 ? 'medium' : vApex < 260 ? 'fast' : 'flat'
    const prev = corners[(idx - 1 + corners.length) % corners.length]
    const next = corners[(idx + 1) % corners.length]
    const gapPrev = (c.s0 - prev.s1 + t.length) % t.length
    const gapNext = (next.s0 - c.s1 + t.length) % t.length
    const flips = (o: Corner, gap: number) => o.dir !== c.dir && gap < 90
    const shape: CornerStats['shape'] =
      c.angle > 115 && c.rMin < 45 ? 'hairpin' : flips(prev, gapPrev) || flips(next, gapNext) ? 'chicane' : c.angle < 22 && vApex > 200 ? 'kink' : c.angle > 70 && c.s1 - c.s0 > 160 ? 'sweeper' : 'corner'
    return {
      ...c,
      vApex,
      vEntry: kmh(v[a]),
      vExit: kmh(v[b]),
      gLat: gMax,
      rLine: kLine > 0 ? 1 / kLine : Infinity,
      brakeFrom: first >= 0 && brakeDist > 20 ? kmh(v[first]) : null,
      brakeDist,
      speed,
      shape,
      gear: gearAt(v[iMin]),
    }
  })
}

// A run of near-full-throttle track at least `minLen` metres long: the straights.
export type Straight = { s0: number; s1: number; length: number; vEnd: number }
export function straights(sim: Sim, minLen = 450): Straight[] {
  const { track: t, throttle, v } = sim
  const n = t.n
  let first = 0
  for (let i = 0; i < n; i++) if (throttle[i] < 0.97) { first = i; break }
  const out: Straight[] = []
  let a = -1
  for (let step = 0; step <= n; step++) {
    const i = (first + step) % n
    const on = step < n && throttle[i] >= 0.97
    if (on && a < 0) a = step
    if (!on && a >= 0) {
      const len = (step - a) * t.ds
      if (len >= minLen) out.push({ s0: ((first + a) % n) * t.ds, s1: ((first + step) % n) * t.ds, length: len, vEnd: kmh(v[(first + step - 1) % n]) })
      a = -1
    }
  }
  return out
}

// Sector boundaries, as distances from the start line, at the points where the lap is one
// third and two thirds done by the clock. The FIA's timing loops are not published as
// geometry, so this is the nearest honest stand-in.
export function sectorSplits(sim: Sim): [number, number] {
  const { t: time, track } = sim
  const find = (target: number) => {
    for (let i = 0; i < time.length; i++) if (time[i] >= target) return track.s[i]
    return track.length
  }
  return [find(sim.lapTime / 3), find((2 * sim.lapTime) / 3)]
}

export const mmss = (sec: number) => {
  const m = Math.floor(sec / 60)
  const s = sec - m * 60
  return `${m}:${s.toFixed(3).padStart(6, '0')}`
}
