/**
 * The maths behind running economy and race prediction.
 *
 * - ACSM running equation (metabolic cost of running at a speed and grade)
 * - Daniels & Gilbert equations (the basis of VDOT)
 * - Riegel's endurance formula
 */

/** ACSM: VO₂ (ml·kg⁻¹·min⁻¹) = 0.2·v + 0.9·v·grade + 3.5, with v in m/min. */
export function acsmVo2(speedMpm: number, grade = 0) {
  return 0.2 * speedMpm + 0.9 * speedMpm * grade + 3.5
}

/** Daniels & Gilbert: oxygen cost of running at v m/min. */
export function danielsVo2(speedMpm: number) {
  return -4.6 + 0.182258 * speedMpm + 0.000104 * speedMpm * speedMpm
}

/** Daniels & Gilbert: fraction of VO₂max sustainable for t minutes. */
export function danielsFraction(minutes: number) {
  return 0.8 + 0.1894393 * Math.exp(-0.012778 * minutes) + 0.2989558 * Math.exp(-0.1932605 * minutes)
}

/** VDOT from a race result. */
export function vdot(distanceM: number, timeSec: number) {
  const t = timeSec / 60
  return danielsVo2(distanceM / t) / danielsFraction(t)
}

/** Predict a time (s) at a distance for a given VDOT, by bisection. */
export function predictFromVdot(v: number, distanceM: number) {
  let lo = distanceM / 1000 // absurdly fast, minutes
  let hi = distanceM / 50 // absurdly slow
  for (let i = 0; i < 80; i++) {
    const mid = (lo + hi) / 2
    // Faster time → higher implied VDOT.
    if (vdot(distanceM, mid * 60) > v) lo = mid
    else hi = mid
  }
  return ((lo + hi) / 2) * 60
}

/** Riegel: T₂ = T₁ · (D₂ / D₁)^1.06 */
export function riegel(timeSec: number, fromM: number, toM: number, exponent = 1.06) {
  return timeSec * Math.pow(toM / fromM, exponent)
}

/**
 * New race time after an economy gain, holding the sustainable oxygen uptake
 * constant. Uses the Daniels cost curve so air resistance (the v² term) is
 * accounted for, that is why a 4% economy gain gives a bit less than 4%.
 */
export function timeAfterEconomyGain(distanceM: number, timeSec: number, gainFraction: number) {
  const v = distanceM / (timeSec / 60)
  const target = danielsVo2(v)
  let lo = v
  let hi = v * 1.5
  for (let i = 0; i < 80; i++) {
    const mid = (lo + hi) / 2
    if (danielsVo2(mid) * (1 - gainFraction) < target) lo = mid
    else hi = mid
  }
  const v2 = (lo + hi) / 2
  return (distanceM / v2) * 60
}

/**
 * Speed (m/min) whose Daniels oxygen cost equals `fraction` × VDOT,
 * the inverse of the cost curve, solved from the quadratic.
 */
export function speedAtFraction(v: number, fraction: number) {
  const a = 0.000104
  const b = 0.182258
  const c = -(4.6 + fraction * v)
  return (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a)
}

/** Seconds per km at a fraction of VDOT. */
export function paceAtFraction(v: number, fraction: number) {
  return 60000 / speedAtFraction(v, fraction)
}

/** Training intensities as fractions of VO₂max, after Daniels' Running Formula. */
export const DANIELS_ZONES = [
  { id: 'E', name: 'Easy', lo: 0.59, hi: 0.74, purpose: 'Aerobic base, recovery, long runs' },
  { id: 'T', name: 'Threshold', lo: 0.83, hi: 0.88, purpose: 'Tempo runs and cruise intervals' },
  { id: 'I', name: 'Interval', lo: 0.95, hi: 1.0, purpose: 'VO₂max intervals of 3–5 minutes' },
]

/** ≈ 20.1 J per ml O₂ (respiratory exchange ratio around 0.9). */
export const JOULES_PER_ML_O2 = 20.1
