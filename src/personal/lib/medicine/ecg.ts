// A small ECG simulator. Each beat is a sum of Gaussian waves (P, Q, R, S, T) plus an ST shift, and a
// rhythm decides when the atria and ventricles fire. It draws teaching traces, not patient recordings.

export type RhythmId =
  | 'sinus' | 'brady' | 'tachy' | 'afib' | 'flutter' | 'avb1' | 'mobitz1' | 'mobitz2' | 'chb' | 'svt' | 'pvc' | 'vt' | 'vf' | 'asystole'
  | 'stemi-ant' | 'stemi-inf' | 'hyperk' | 'lbbb' | 'pericarditis'

export type LeadId = 'I' | 'II' | 'III' | 'aVR' | 'aVL' | 'aVF' | 'V1' | 'V2' | 'V3' | 'V4' | 'V5' | 'V6'
export const LEADS: LeadId[] = ['I', 'II', 'III', 'aVR', 'aVL', 'aVF', 'V1', 'V2', 'V3', 'V4', 'V5', 'V6']

export type RhythmInfo = {
  id: RhythmId
  name: string
  group: 'Normal' | 'Rate and rhythm' | 'Heart block' | 'Dangerous' | 'Ischaemia and other'
  hr: [number, number, number] | null // min, max, default; null = fixed
  urgent: boolean
  summary: string
  features: string[]
}

export const RHYTHMS: RhythmInfo[] = [
  { id: 'sinus', name: 'Normal sinus rhythm', group: 'Normal', hr: [55, 100, 72], urgent: false, summary: 'Each beat starts at the sinus node: a P wave, then a narrow QRS, then a T wave, evenly spaced.', features: ['A P wave before every QRS', 'PR interval 120 to 200 ms (3 to 5 small squares)', 'QRS under 120 ms (3 small squares)', 'Regular R-R intervals, rate 60 to 100'] },
  { id: 'brady', name: 'Sinus bradycardia', group: 'Rate and rhythm', hr: [30, 59, 44], urgent: false, summary: 'Normal sinus rhythm but slow: under 60 beats per minute.', features: ['Normal P, QRS and T', 'Rate under 60', 'Normal in athletes and in sleep; can be drugs or a conduction problem'] },
  { id: 'tachy', name: 'Sinus tachycardia', group: 'Rate and rhythm', hr: [101, 170, 125], urgent: false, summary: 'Normal sinus rhythm but fast: over 100 beats per minute, usually a response to fever, pain, anxiety, bleeding or exercise.', features: ['Normal P before every QRS', 'Rate over 100, usually under 150', 'Gradual change, treat the cause'] },
  { id: 'afib', name: 'Atrial fibrillation', group: 'Rate and rhythm', hr: [60, 160, 110], urgent: false, summary: 'The atria quiver chaotically, so there are no true P waves and the ventricles beat in an irregularly irregular rhythm.', features: ['No P waves, a wobbly baseline', 'Irregularly irregular R-R intervals', 'Narrow QRS', 'Raises the risk of stroke'] },
  { id: 'flutter', name: 'Atrial flutter (2:1 and 4:1)', group: 'Rate and rhythm', hr: null, urgent: false, summary: 'A fast, regular atrial circuit gives a sawtooth pattern. The ventricles follow every second or fourth flutter wave.', features: ['Sawtooth baseline at about 300 a minute', 'Regular ventricular rate of 150 (2:1) or 75 (4:1)', 'A ventricular rate fixed near 150 should make you think of flutter'] },
  { id: 'svt', name: 'Supraventricular tachycardia (SVT)', group: 'Rate and rhythm', hr: [150, 220, 180], urgent: true, summary: 'A very fast, regular, narrow-complex rhythm from a re-entry circuit above the ventricles.', features: ['Regular, rate 150 to 220', 'Narrow QRS', 'P waves hidden or not seen', 'Sudden onset and offset'] },
  { id: 'avb1', name: 'First-degree AV block', group: 'Heart block', hr: [50, 90, 65], urgent: false, summary: 'Every P wave is followed by a QRS, but the PR interval is long: over 200 ms (more than one large square).', features: ['PR interval over 200 ms, constant', 'Every P conducts', 'Usually harmless'] },
  { id: 'mobitz1', name: 'Second-degree AV block, Mobitz I (Wenckebach)', group: 'Heart block', hr: null, urgent: false, summary: 'The PR interval gets longer with each beat until a P wave fails to conduct and a beat is dropped, then the cycle restarts.', features: ['PR lengthens progressively', 'A P wave with no QRS after it', 'Grouped beating', 'Often benign (vagal, drugs)'] },
  { id: 'mobitz2', name: 'Second-degree AV block, Mobitz II', group: 'Heart block', hr: null, urgent: true, summary: 'The PR interval is constant, but some P waves suddenly fail to conduct. It can progress to complete block.', features: ['Constant PR, then a dropped QRS', 'More dangerous than Mobitz I', 'May need a pacemaker'] },
  { id: 'chb', name: 'Third-degree (complete) heart block', group: 'Heart block', hr: null, urgent: true, summary: 'No P waves conduct to the ventricles. The atria and ventricles beat independently, the ventricles slowly from an escape rhythm.', features: ['P waves regular, unrelated to QRS', 'Ventricular rate often 30 to 40', 'Wide QRS if the escape is ventricular', 'Needs urgent treatment'] },
  { id: 'pvc', name: 'Ventricular ectopics (PVCs)', group: 'Rate and rhythm', hr: [55, 100, 72], urgent: false, summary: 'An early, wide, odd-looking beat with no P wave, followed by a pause. Common and often benign.', features: ['Early wide QRS (over 120 ms)', 'No preceding P wave', 'T wave opposite in direction to the QRS', 'Compensatory pause afterwards'] },
  { id: 'vt', name: 'Ventricular tachycardia', group: 'Dangerous', hr: null, urgent: true, summary: 'A fast, regular, wide-complex rhythm from the ventricles. It can cause collapse and can turn into ventricular fibrillation.', features: ['Rate 150 to 250', 'Wide, regular QRS complexes', 'No P waves', 'Treat as an emergency'] },
  { id: 'vf', name: 'Ventricular fibrillation', group: 'Dangerous', hr: null, urgent: true, summary: 'Chaotic, disorganised electrical activity with no effective heartbeat. The patient is in cardiac arrest.', features: ['Irregular, chaotic waves, no QRS', 'No pulse: a cardiac arrest', 'Needs immediate CPR and defibrillation'] },
  { id: 'asystole', name: 'Asystole', group: 'Dangerous', hr: null, urgent: true, summary: 'A flat line: no electrical activity. Always check the leads and the gain before accepting it.', features: ['Flat line (a little wandering baseline)', 'Check the leads are connected and the gain is up', 'Cardiac arrest: CPR'] },
  { id: 'stemi-ant', name: 'Anterior STEMI (ST elevation)', group: 'Ischaemia and other', hr: [60, 110, 85], urgent: true, summary: 'A blocked coronary artery to the front of the heart lifts the ST segment in the anterior leads (V1 to V4). This is the V2 trace.', features: ['ST elevation (a dome that merges with the T wave)', 'In V1 to V4 for anterior; reciprocal depression in the inferior leads', 'A time-critical emergency'] },
  { id: 'stemi-inf', name: 'Inferior STEMI (ST elevation)', group: 'Ischaemia and other', hr: [50, 100, 70], urgent: true, summary: 'A blocked artery to the underside of the heart lifts the ST segment in II, III and aVF. This is the lead II trace.', features: ['ST elevation in II, III and aVF', 'Reciprocal ST depression in I and aVL', 'Often with slow heart rate or heart block'] },
  { id: 'hyperk', name: 'Hyperkalaemia (high potassium)', group: 'Ischaemia and other', hr: [50, 100, 75], urgent: true, summary: 'Too much potassium makes tall, narrow, peaked T waves, then flat P waves and a widening QRS.', features: ['Tall, narrow, peaked T waves', 'Flat or absent P waves, wide QRS in severe cases', 'Can lead to a sine-wave pattern and arrest'] },
  { id: 'lbbb', name: 'Left bundle branch block', group: 'Ischaemia and other', hr: [55, 100, 70], urgent: false, summary: 'The left ventricle is activated late, so the QRS is wide (over 120 ms) and notched. A new LBBB with chest pain is treated like a STEMI.', features: ['QRS over 120 ms', 'Broad, notched R wave in I and V6; deep S in V1', 'The T wave is opposite in direction to the QRS (secondary changes)'] },
  { id: 'pericarditis', name: 'Pericarditis', group: 'Ischaemia and other', hr: [60, 110, 85], urgent: false, summary: 'Inflammation of the sac around the heart gives widespread, saddle-shaped ST elevation and PR depression.', features: ['Widespread ST elevation, concave upwards', 'PR segment depression', 'No reciprocal changes (unlike a STEMI)'] },
]

export const rhythmInfo = (id: RhythmId) => RHYTHMS.find((r) => r.id === id)!

// -------------------------------------------------------------------------------------------
// Waves
// -------------------------------------------------------------------------------------------

type Morph = {
  pAmp: number
  pDur: number
  q: number
  r: number
  s: number
  qrsW: number
  tAmp: number
  tW: number
  st: number
  prDep: number // PR segment depression (pericarditis)
}

const g = (t: number, c: number, s: number) => Math.exp(-0.5 * ((t - c) / s) ** 2)
const sig = (x: number) => 1 / (1 + Math.exp(-x))

// A lead's normal shape, in millivolts.
const NORMAL: Record<LeadId, { p: number; q: number; r: number; s: number; t: number }> = {
  I: { p: 0.1, q: -0.05, r: 0.8, s: -0.1, t: 0.25 },
  II: { p: 0.15, q: -0.06, r: 1.0, s: -0.12, t: 0.35 },
  III: { p: 0.06, q: -0.04, r: 0.4, s: -0.2, t: 0.12 },
  aVR: { p: -0.1, q: 0, r: 0.08, s: -0.7, t: -0.3 },
  aVL: { p: 0.05, q: -0.03, r: 0.4, s: -0.1, t: 0.12 },
  aVF: { p: 0.1, q: -0.05, r: 0.7, s: -0.15, t: 0.25 },
  V1: { p: 0.07, q: 0, r: 0.25, s: -1.0, t: -0.05 },
  V2: { p: 0.06, q: 0, r: 0.5, s: -1.2, t: 0.45 },
  V3: { p: 0.06, q: 0, r: 0.8, s: -0.8, t: 0.45 },
  V4: { p: 0.06, q: -0.04, r: 1.3, s: -0.4, t: 0.4 },
  V5: { p: 0.07, q: -0.06, r: 1.2, s: -0.15, t: 0.3 },
  V6: { p: 0.06, q: -0.06, r: 0.9, s: -0.08, t: 0.25 },
}

const ANT: LeadId[] = ['V1', 'V2', 'V3', 'V4']
const INF: LeadId[] = ['II', 'III', 'aVF']
const LAT: LeadId[] = ['I', 'aVL', 'V5', 'V6']

function morphFor(id: RhythmId, lead: LeadId): Morph {
  const n = NORMAL[lead]
  const m: Morph = { pAmp: n.p, pDur: 0.09, q: n.q, r: n.r, s: n.s, qrsW: 1, tAmp: n.t, tW: 0.045, st: 0, prDep: 0 }
  if (id === 'stemi-ant' && ANT.includes(lead)) { m.st = 0.35; m.tAmp = Math.abs(n.t) + 0.3; m.r *= 0.7 }
  if (id === 'stemi-ant' && (INF.includes(lead))) { m.st = -0.1 }
  if (id === 'stemi-inf' && INF.includes(lead)) { m.st = 0.3; m.tAmp = Math.abs(n.t) + 0.25 }
  if (id === 'stemi-inf' && (lead === 'I' || lead === 'aVL' || ANT.slice(0, 3).includes(lead))) { m.st = -0.12 }
  if (id === 'hyperk') { m.tAmp = Math.sign(n.t || 1) * Math.max(Math.abs(n.t) * 2.4, 0.5); m.tW = 0.028; m.pAmp *= 0.25; m.qrsW = 1.35 }
  if (id === 'lbbb') {
    m.qrsW = 1.75
    const pos = LAT.includes(lead) || lead === 'II' || lead === 'aVF' || lead === 'V4'
    if (pos) { m.r = Math.max(Math.abs(n.r), 0.9); m.s = -0.05; m.q = 0; m.st = -0.12; m.tAmp = -0.3 }
    else if (lead === 'aVR') { m.r = 0.05; m.s = -0.7 }
    else { m.r = 0.1; m.s = -1.4; m.st = 0.25; m.tAmp = 0.35 }
  }
  if (id === 'pericarditis') { m.st = (lead === 'aVR' || lead === 'V1') ? -0.12 : 0.18; m.prDep = (lead === 'aVR') ? -0.1 : 0.08 }
  if (id === 'svt') { m.st = -0.1; m.tAmp *= 0.4; m.pAmp = 0 }
  if (id === 'afib') m.pAmp = 0
  return m
}

// One ventricular beat (QRS, ST and T), with time t measured from the R peak.
function qrst(t: number, m: Morph, qt: number) {
  const w = m.qrsW
  const q = m.q * g(t, -0.024 * w, 0.008 * w)
  const r = m.r * g(t, 0, 0.011 * w)
  const s = m.s * g(t, 0.03 * w, 0.011 * w)
  let notch = 0
  if (w > 1.5 && m.r > 0.4) notch = -0.18 * m.r * g(t, 0.012 * w, 0.01 * w) // notched ("M") R wave in a bundle branch block
  const j = 0.045 * w
  const tc = j + Math.max(0.12, (qt - 0.1 * w)) * 0.62
  const stShape = sig((t - j) / 0.012) * (1 - sig((t - (tc + 0.07)) / 0.035))
  const st = m.st * stShape
  const tw = m.tW * (qt / 0.4)
  const tt = m.tAmp * g(t, tc, tw * 1.25) * (1 + 0.0)
  return q + r + s + notch + st + tt
}

// -------------------------------------------------------------------------------------------
// Rhythms
// -------------------------------------------------------------------------------------------

function rng(seed: number) {
  let a = seed >>> 0
  return () => {
    a = (a + 0x6d2b79f5) >>> 0
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

type Ev = { t: number; pr: number; kind: 'normal' | 'pvc' | 'escape' }
type Plan = { atrial: number[]; ven: Ev[]; flutter?: number; fib?: boolean; fixed?: Partial<Morph> }

function plan(id: RhythmId, hr: number, seconds: number, rand: () => number): Plan {
  const ven: Ev[] = []
  const atrial: number[] = []
  const rr = 60 / hr
  const T = seconds + 1
  const sinus = (pr: number, jitter = 0.025) => {
    let t = 0.5
    while (t < T) {
      atrial.push(t - pr)
      ven.push({ t, pr, kind: 'normal' })
      t += rr * (1 + (rand() - 0.5) * jitter)
    }
  }
  switch (id) {
    case 'sinus': case 'brady': case 'tachy': case 'stemi-ant': case 'stemi-inf': case 'hyperk': case 'lbbb': case 'pericarditis':
      sinus(0.16)
      break
    case 'avb1':
      sinus(0.34, 0.02)
      break
    case 'afib': {
      let t = 0.4
      while (t < T) {
        ven.push({ t, pr: 0, kind: 'normal' })
        t += rr * (0.55 + rand() * 0.9)
      }
      return { atrial, ven, fib: true }
    }
    case 'flutter': {
      const fl = 0.2
      const split = T / 2
      let t = 0.1
      let k = 0
      let reset = true
      while (t < T) {
        atrial.push(t)
        const ratio = t < split ? 2 : 4
        if (t >= split && reset) {
          k = 0
          reset = false
        }
        if (k % ratio === 0) ven.push({ t: t + 0.12, pr: 0.12, kind: 'normal' })
        k++
        t += fl
      }
      return { atrial, ven, flutter: fl }
    }
    case 'svt': {
      let t = 0.3
      while (t < T) {
        ven.push({ t, pr: 0, kind: 'normal' })
        t += rr
      }
      return { atrial, ven }
    }
    case 'mobitz1': {
      const prs = [0.18, 0.28, 0.38]
      let t = 0.3
      const pp = 0.9
      let k = 0
      while (t < T) {
        const pr = prs[k % 4]
        atrial.push(t)
        if (k % 4 < 3) ven.push({ t: t + pr - 0.005, pr, kind: 'normal' })
        t += pp * 0.92
        k++
      }
      return { atrial, ven }
    }
    case 'mobitz2': {
      let t = 0.3
      let k = 0
      while (t < T) {
        atrial.push(t)
        if (k % 3 !== 2) ven.push({ t: t + 0.235, pr: 0.24, kind: 'normal' })
        t += 0.78
        k++
      }
      return { atrial, ven }
    }
    case 'chb': {
      let t = 0.2
      while (t < T) {
        atrial.push(t)
        t += 0.78
      }
      t = 0.9
      while (t < T) {
        ven.push({ t, pr: 0.3, kind: 'escape' })
        t += 1.62
      }
      return { atrial, ven }
    }
    case 'pvc': {
      let t = 0.5
      let k = 0
      while (t < T) {
        if (k % 4 === 3) {
          // premature beat, then a compensatory pause
          const early = t - rr * 0.38
          ven.push({ t: early, pr: 0, kind: 'pvc' })
          atrial.push(t - 0.16)
          t += rr * 1.0
          k++
          continue
        }
        atrial.push(t - 0.16)
        ven.push({ t, pr: 0.16, kind: 'normal' })
        t += rr
        k++
      }
      ven.sort((a, b) => a.t - b.t)
      return { atrial, ven }
    }
    default:
      break
  }
  return { atrial, ven }
}

export type BeatMark = { pOn?: number; pOff?: number; qOn: number; qOff: number; tOff: number; r: number; kind: Ev['kind'] }
export type Strip = { fs: number; seconds: number; mv: number[]; beats: BeatMark[]; hr: number; rr: number[]; pr?: number; qrs: number; qt: number; regular: boolean }

export function makeStrip(id: RhythmId, opts: { lead?: LeadId; hr?: number; seconds?: number; seed?: number; fs?: number } = {}): Strip {
  const seconds = opts.seconds ?? 6
  const fs = opts.fs ?? 250
  const lead = opts.lead ?? 'II'
  const info = rhythmInfo(id)
  const hr = opts.hr ?? (info.hr ? info.hr[2] : 75)
  const rand = rng((opts.seed ?? 7) * 31 + id.length)
  const N = Math.round(seconds * fs)
  const mv = new Array<number>(N).fill(0)
  const base = morphFor(id, lead)
  const pl = plan(id, hr, seconds, rand)
  const rrNominal = 60 / hr
  const beats: BeatMark[] = []
  const rrList: number[] = []

  const special = id === 'vt' || id === 'vf' || id === 'asystole'
  const phase = [rand() * 6.28, rand() * 6.28, rand() * 6.28, rand() * 6.28, rand() * 6.28, rand() * 6.28]

  for (let i = 0; i < N; i++) {
    const t = i / fs
    let v = 0.03 * Math.sin(2 * Math.PI * 0.25 * t + phase[0]) + 0.008 * Math.sin(2 * Math.PI * 50 * t + phase[1])
    if (id === 'vt') {
      const f = 3.1
      const x = Math.sin(2 * Math.PI * f * t + phase[2])
      v += 1.2 * (x + 0.35 * Math.sin(3 * (2 * Math.PI * f * t + phase[2]) + 0.7)) * (0.9 + 0.1 * Math.sin(2 * Math.PI * 0.3 * t))
    } else if (id === 'vf') {
      const amp = 0.25 + 0.2 * Math.sin(2 * Math.PI * 0.4 * t + phase[3])
      for (let k = 0; k < 5; k++) v += amp * 0.5 * Math.sin(2 * Math.PI * (3.4 + k * 1.3) * t + phase[k % 6] + Math.sin(t * (1.1 + k * 0.37)) * 2)
    } else if (id === 'asystole') {
      v += 0.015 * Math.sin(2 * Math.PI * 0.3 * t)
    }
    if (pl.fib) {
      v += 0.06 * Math.sin(2 * Math.PI * 6.4 * t + phase[2]) * (0.6 + 0.4 * Math.sin(2 * Math.PI * 0.7 * t)) + 0.035 * Math.sin(2 * Math.PI * 8.9 * t + phase[3]) + 0.03 * Math.sin(2 * Math.PI * 4.3 * t + phase[4])
    }
    if (pl.flutter) {
      const ph = ((t + 0.1) % pl.flutter) / pl.flutter
      v += 0.13 * (ph < 0.8 ? ph / 0.8 - 0.5 : (1 - ph) / 0.2 * 0.9 - 0.5) * 1
    }
    mv[i] = v
  }

  if (!special) {
    const qtOf = (rr: number) => Math.min(0.5, 0.4 * Math.sqrt(Math.max(rr, 0.3)))
    let lastR = -1
    for (const e of pl.ven) {
      const rr = lastR < 0 ? rrNominal : e.t - lastR
      lastR = e.t
      rrList.push(rr)
      const m: Morph = e.kind === 'pvc' ? { ...base, qrsW: 2.1, r: Math.max(Math.abs(base.r), 0.6) * 1.2, s: base.s * 0.3, tAmp: -Math.abs(base.tAmp || 0.3) * 1.2, st: 0, pAmp: 0 } : e.kind === 'escape' ? { ...base, qrsW: 1.7, tAmp: -base.tAmp * 0.6, st: 0 } : { ...base }
      const qt = qtOf(rr) * (id === 'hyperk' ? 0.9 : 1)
      const lo = Math.floor((e.t - 0.3) * fs), hi = Math.ceil((e.t + 0.62) * fs)
      for (let i = Math.max(0, lo); i < Math.min(N, hi); i++) mv[i] += qrst(i / fs - e.t, m, qt)
      const w = m.qrsW
      const j = 0.045 * w
      const tc = j + Math.max(0.12, qt - 0.1 * w) * 0.62
      beats.push({ pOn: e.pr && e.kind === 'normal' ? e.t - 0.04 * w + 0.045 - e.pr - 0.045 : undefined, pOff: e.pr && e.kind === 'normal' ? e.t - 0.04 * w + 0.045 - e.pr + 0.045 : undefined, qOn: e.t - 0.04 * w, qOff: e.t + j, tOff: e.t + tc + m.tW * 2.4 * (qt / 0.4), r: e.t, kind: e.kind })
    }
    for (const ta of pl.atrial) {
      // an atrial event shows as a P wave at its own time, whether or not a QRS follows
      const pc = ta
      const m: Morph = { ...base, pAmp: id === 'hyperk' ? base.pAmp : base.pAmp || NORMAL[lead].p }
      if (pl.flutter) continue
      const lo = Math.floor((pc - 0.12) * fs), hi = Math.ceil((pc + 0.12) * fs)
      for (let i = Math.max(0, lo); i < Math.min(N, hi); i++) mv[i] += m.pAmp * g(i / fs, pc, m.pDur / 4)
      if (id === 'mobitz1' || id === 'mobitz2' || id === 'chb') {
        beats.push({ pOn: pc - 0.045, pOff: pc + 0.045, qOn: pc, qOff: pc, tOff: pc, r: -1, kind: 'normal' })
      }
    }
  }

  const rrs = rrList.slice(1)
  const meanRR = rrs.length ? rrs.reduce((a, b) => a + b, 0) / rrs.length : rrNominal
  const regular = rrs.length > 1 ? Math.max(...rrs) - Math.min(...rrs) < 0.12 * meanRR : true
  const showHr = id === 'asystole' ? 0 : id === 'vf' ? 0 : id === 'vt' ? 186 : Math.round(60 / meanRR)
  const qrsMs = id === 'lbbb' ? 140 : id === 'hyperk' ? 108 : id === 'vt' ? 160 : 90
  return {
    fs,
    seconds,
    mv,
    beats,
    hr: showHr,
    rr: rrs,
    pr: id === 'avb1' ? 340 : id === 'afib' || id === 'svt' || id === 'vt' || id === 'vf' || id === 'asystole' ? undefined : 160,
    qrs: qrsMs,
    qt: Math.round(Math.min(0.5, 0.4 * Math.sqrt(meanRR)) * 1000),
    regular,
  }
}

// Which leads show a given pattern, for the 12-lead view.
export const TERRITORIES: Record<string, { leads: LeadId[]; label: string }> = {
  anterior: { leads: ['V1', 'V2', 'V3', 'V4'], label: 'Anterior (LAD)' },
  inferior: { leads: ['II', 'III', 'aVF'], label: 'Inferior (usually the right coronary)' },
  lateral: { leads: ['I', 'aVL', 'V5', 'V6'], label: 'Lateral (circumflex)' },
}

export const TWELVE_LEAD_PATTERNS: { id: RhythmId; name: string }[] = [
  { id: 'sinus', name: 'Normal' },
  { id: 'stemi-ant', name: 'Anterior STEMI' },
  { id: 'stemi-inf', name: 'Inferior STEMI' },
  { id: 'lbbb', name: 'LBBB' },
  { id: 'afib', name: 'Atrial fibrillation' },
  { id: 'hyperk', name: 'Hyperkalaemia' },
  { id: 'pericarditis', name: 'Pericarditis' },
  { id: 'brady', name: 'Sinus bradycardia' },
]

// The ST shift this pattern gives in a lead, in millivolts (used to flag the affected leads).
export const stOf = (id: RhythmId, lead: LeadId) => morphFor(id, lead).st
