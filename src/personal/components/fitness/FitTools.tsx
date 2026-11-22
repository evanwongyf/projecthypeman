import { useEffect, useMemo, useRef, useState } from 'react'
import { GOALS, RACES, buildPlan, cooperVo2, fmtTime, hrZones, maxHr, oneRepMax, parseTime, raceTimeFor, repsAt, riegel, trainingPaces, vdot } from '../../lib/fitness/calc'
import type { Goal } from '../../lib/fitness/calc'
import { NativeSelect } from '../../../components/NativeSelect'

// The fitness calculators and the interval timer.

const card = 'card-surface flex max-w-3xl flex-col gap-3 rounded-[var(--radius)] p-4'
const soft = { color: 'var(--ink-soft)' }

function Field({ label, children, hint }: { label: string; children: React.ReactNode; hint?: string }) {
  return (
    <label className="flex min-w-0 flex-col gap-1 text-sm font-bold">
      {label}
      {children}
      {hint && (
        <span className="text-xs font-normal" style={soft}>
          {hint}
        </span>
      )}
    </label>
  )
}

function Table({ head, rows, color }: { head: string[]; rows: (string | number)[][]; color: string }) {
  return (
    <div className="overflow-x-auto rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)' }}>
      <table className="w-full border-collapse text-left text-xs sm:text-sm">
        <thead>
          <tr style={{ background: `color-mix(in srgb, ${color} 35%, var(--surface))` }}>
            {head.map((h) => (
              <th key={h} className="border-b-2 px-2 py-1.5 sm:px-3 sm:py-2 font-bold" style={{ borderColor: 'var(--line)' }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} style={{ background: i % 2 ? 'var(--paper-2)' : 'var(--surface)' }}>
              {r.map((c, j) => (
                <td key={j} className={`px-2 py-1.5 sm:px-3 sm:py-2 align-top ${j === 0 ? 'font-bold' : ''}`}>
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const DISTANCES = [...RACES, { name: '400 m', m: 400 }, { name: '3 km', m: 3000 }, { name: '2.4 km', m: 2400 }]

// ── pace ───────────────────────────────────────────────────────────────────

export function PaceCalculator({ color }: { color: string }) {
  const [km, setKm] = useState('10')
  const [time, setTime] = useState('55:00')
  const d = Number(km)
  const t = parseTime(time)
  const ok = d > 0 && t > 0
  const pace = ok ? t / d : NaN
  return (
    <div className={card}>
      <p className="font-bold">Pace calculator</p>
      <div className="grid gap-3 sm:grid-cols-3">
        <Field label="Distance (km)">
          <input className="input-field" inputMode="decimal" value={km} onChange={(e) => setKm(e.target.value)} list="fit-dist" />
          <datalist id="fit-dist">
            {DISTANCES.map((x) => (
              <option key={x.name} value={+(x.m / 1000).toFixed(4)}>
                {x.name}
              </option>
            ))}
          </datalist>
        </Field>
        <Field label="Time" hint="mm:ss or h:mm:ss">
          <input className="input-field" value={time} onChange={(e) => setTime(e.target.value)} />
        </Field>
        <div className="flex flex-col justify-end gap-1 rounded-[var(--radius)] p-2.5" style={{ background: `color-mix(in srgb, ${color} 18%, var(--surface))` }}>
          <span className="text-2xl font-bold">{ok ? `${fmtTime(pace)} /km` : '–'}</span>
          <span className="text-xs" style={soft}>
            {ok ? `${fmtTime(pace * 1.60934)} /mile · ${((d / t) * 3600).toFixed(1)} km/h` : 'Enter a distance and time'}
          </span>
        </div>
      </div>
      {ok && (
        <Table
          color={color}
          head={['Split', 'Time']}
          rows={[1, 5, 10, 21.0975, 42.195].filter((x) => x <= d + 0.01 || x === 1).map((x) => [x === 21.0975 ? 'Half' : x === 42.195 ? 'Marathon' : `${x} km`, fmtTime(pace * x)])}
        />
      )}
    </div>
  )
}

// ── race times and VDOT ────────────────────────────────────────────────────

export function RacePredictor({ color }: { color: string }) {
  const [dist, setDist] = useState(1)
  const [time, setTime] = useState('25:00')
  const t = parseTime(time)
  const from = RACES[dist]
  const ok = t > 0
  const v = ok ? vdot(from.m, t) : NaN
  return (
    <div className={card}>
      <p className="font-bold">Race predictor and training paces</p>
      <div className="grid gap-3 sm:grid-cols-2">
        <Field label="A recent race or time trial">
          <NativeSelect className="input-field" value={dist} onChange={(e) => setDist(Number(e.target.value))}>
            {RACES.map((r, i) => (
              <option key={r.name} value={i}>
                {r.name}
              </option>
            ))}
          </NativeSelect>
        </Field>
        <Field label="Your time" hint="mm:ss or h:mm:ss">
          <input className="input-field" value={time} onChange={(e) => setTime(e.target.value)} />
        </Field>
      </div>
      {ok && v > 15 && v < 90 ? (
        <>
          <p className="text-sm">
            Your <b>VDOT</b> is about <b className="text-lg">{v.toFixed(1)}</b>: a running fitness score from Jack Daniels, roughly your VO2max as it shows up in race
            performance.
          </p>
          <Table
            color={color}
            head={['Race', 'Daniels (VDOT)', 'Riegel']}
            rows={RACES.map((r) => [r.name, fmtTime(raceTimeFor(v, r.m)), fmtTime(riegel(t, from.m, r.m))])}
          />
          <Table color={color} head={['Pace zone', 'Per km', 'Used for']} rows={trainingPaces(v).map((p) => [p.zone, `${fmtTime(p.from)}–${fmtTime(p.to)}`, p.what])} />
          <p className="text-xs" style={soft}>
            Predictions assume you train properly for the longer distance. Most people run their marathon slower than predicted from a 5K unless they have the mileage behind them.
          </p>
        </>
      ) : (
        <p className="text-sm" style={soft}>
          Enter a realistic time to see predictions.
        </p>
      )}
    </div>
  )
}

// ── VO2max from a test ─────────────────────────────────────────────────────

export function Vo2Estimator({ color }: { color: string }) {
  const [metres, setMetres] = useState('2400')
  const m = Number(metres)
  const est = m > 600 ? cooperVo2(m) : NaN
  const bands = [
    ['Below average', '< 35'],
    ['Average', '35–42'],
    ['Good', '42–50'],
    ['Very good', '50–58'],
    ['Excellent', '58+'],
  ]
  return (
    <div className={card}>
      <p className="font-bold">Cooper 12-minute test</p>
      <p className="text-sm" style={soft}>
        After a warm-up, run as far as you can in 12 minutes on a track or a measured route, and enter the distance.
      </p>
      <Field label="Distance in 12 minutes (metres)">
        <input className="input-field" inputMode="numeric" value={metres} onChange={(e) => setMetres(e.target.value)} />
      </Field>
      {Number.isFinite(est) && (
        <div className="rounded-[var(--radius)] p-3" style={{ background: `color-mix(in srgb, ${color} 18%, var(--surface))` }}>
          <p className="text-sm">
            Estimated VO2max: <b className="text-2xl">{est.toFixed(1)}</b> ml/kg/min
          </p>
          <p className="mt-1 text-xs" style={soft}>
            A rough guide for adults aged 20–39 (lower for older age groups and, on average, for women):
          </p>
          <p className="mt-1 flex flex-wrap gap-1">
            {bands.map(([n, r]) => (
              <span key={n} className="rounded-full border px-2 py-0.5 text-[11px] font-bold" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}>
                {n}: {r}
              </span>
            ))}
          </p>
        </div>
      )}
    </div>
  )
}

// ── heart rate zones ───────────────────────────────────────────────────────

export function HeartZones({ color }: { color: string }) {
  const [age, setAge] = useState('30')
  const [rest, setRest] = useState('')
  const [measured, setMeasured] = useState('')
  const a = Number(age)
  const max = Number(measured) > 100 ? Number(measured) : a > 5 ? maxHr(a) : NaN
  const r = Number(rest) > 30 ? Number(rest) : undefined
  const zones = Number.isFinite(max) ? hrZones(max, r) : []
  return (
    <div className={card}>
      <p className="font-bold">Heart rate zones</p>
      <div className="grid gap-3 sm:grid-cols-3">
        <Field label="Age">
          <input className="input-field" inputMode="numeric" value={age} onChange={(e) => setAge(e.target.value)} />
        </Field>
        <Field label="Resting HR (optional)" hint="Count on waking, before getting up">
          <input className="input-field" inputMode="numeric" value={rest} onChange={(e) => setRest(e.target.value)} placeholder="e.g. 60" />
        </Field>
        <Field label="Measured max HR (optional)" hint="Overrides the age estimate">
          <input className="input-field" inputMode="numeric" value={measured} onChange={(e) => setMeasured(e.target.value)} placeholder="e.g. 192" />
        </Field>
      </div>
      {zones.length > 0 && (
        <>
          <p className="text-sm">
            Max heart rate: <b>{Math.round(max)}</b> bpm {Number(measured) > 100 ? '(measured)' : '(estimated as 208 − 0.7 × age)'}
            {r ? '. Zones use your heart rate reserve (Karvonen method).' : '.'}
          </p>
          <Table color={color} head={['Zone', 'Beats per minute', 'Feels like']} rows={zones.map((z) => [z.zone, `${z.from}–${z.to}`, z.feel])} />
          <p className="text-xs" style={soft}>
            Age formulas can be off by 10–20 beats for an individual. If your zones feel wrong, trust the talk test and how hard it feels.
          </p>
        </>
      )}
    </div>
  )
}

// ── plan builder ───────────────────────────────────────────────────────────

export function PlanBuilder({ color }: { color: string }) {
  const [goal, setGoal] = useState<Goal>('10k')
  const [weeks, setWeeks] = useState(10)
  const [runs, setRuns] = useState(4)
  const [long, setLong] = useState('6')
  const plan = useMemo(() => buildPlan(goal, weeks, runs, Math.max(2, Number(long) || 3)), [goal, weeks, runs, long])
  return (
    <div className={`${card} max-w-4xl`}>
      <p className="font-bold">Build a running plan</p>
      <div className="grid gap-3 sm:grid-cols-4">
        <Field label="Goal race">
          <NativeSelect className="input-field" value={goal} onChange={(e) => setGoal(e.target.value as Goal)}>
            {(Object.keys(GOALS) as Goal[]).map((g) => (
              <option key={g} value={g}>
                {GOALS[g].name}
              </option>
            ))}
          </NativeSelect>
        </Field>
        <Field label="Weeks to race">
          <input className="input-field" type="number" min={6} max={24} value={weeks} onChange={(e) => setWeeks(Math.max(6, Math.min(24, Number(e.target.value) || 6)))} />
        </Field>
        <Field label="Runs per week">
          <NativeSelect className="input-field" value={runs} onChange={(e) => setRuns(Number(e.target.value))}>
            {[3, 4, 5, 6].map((n) => (
              <option key={n}>{n}</option>
            ))}
          </NativeSelect>
        </Field>
        <Field label="Longest recent run (km)">
          <input className="input-field" inputMode="decimal" value={long} onChange={(e) => setLong(e.target.value)} />
        </Field>
      </div>
      <Table
        color={color}
        head={['Week', 'Phase', 'Long run', 'Key session', `Easy runs`, '≈ km']}
        rows={plan.map((w) => [w.week, w.phase, `${w.long} km`, w.quality + (w.note ? ` (${w.note})` : ''), w.easyCount ? `${w.easyCount} × ${w.easy} km` : '–', w.total])}
      />
      <p className="text-xs leading-relaxed" style={soft}>
        Run the long run and easy runs at an easy, conversational pace. Put a rest or easy day after the key session and the long run. If you are new to running, start
        with <b>couch to 5K</b> first. This is a general template: adjust it to how you feel, and drop back if anything hurts.
      </p>
    </div>
  )
}

// ── one-rep max ────────────────────────────────────────────────────────────

export function OneRepMax({ color }: { color: string }) {
  const [w, setW] = useState('60')
  const [reps, setReps] = useState('5')
  const est = oneRepMax(Number(w), Math.round(Number(reps)))
  const ok = Number(w) > 0 && Number(reps) >= 1 && Number(reps) <= 15
  return (
    <div className={card}>
      <p className="font-bold">One-rep max estimate</p>
      <div className="grid gap-3 sm:grid-cols-3">
        <Field label="Weight lifted">
          <input className="input-field" inputMode="decimal" value={w} onChange={(e) => setW(e.target.value)} />
        </Field>
        <Field label="Reps done" hint="1–15 good reps">
          <input className="input-field" inputMode="numeric" value={reps} onChange={(e) => setReps(e.target.value)} />
        </Field>
        <div className="flex flex-col justify-end rounded-[var(--radius)] p-2.5" style={{ background: `color-mix(in srgb, ${color} 18%, var(--surface))` }}>
          <span className="text-xs" style={soft}>
            Estimated 1RM
          </span>
          <span className="text-2xl font-bold">{ok ? est.toFixed(1) : '–'}</span>
        </div>
      </div>
      {ok && (
        <Table
          color={color}
          head={['% of 1RM', 'Weight', 'About this many reps', 'Good for']}
          rows={[
            [95, 'Max strength'],
            [90, 'Max strength'],
            [85, 'Strength'],
            [80, 'Strength'],
            [75, 'Strength and size'],
            [70, 'Muscle size'],
            [65, 'Muscle size'],
            [60, 'Technique, endurance'],
          ].map(([p, use]) => [`${p}%`, ((est * (p as number)) / 100).toFixed(1), repsAt((p as number) / 100), use])}
        />
      )}
      <p className="text-xs" style={soft}>
        Estimates are most accurate from sets of 3–8. You do not need to test a true max to train well.
      </p>
    </div>
  )
}

// ── interval timer ─────────────────────────────────────────────────────────

const PRESETS = [
  { name: 'Tabata (20/10 × 8)', work: 20, rest: 10, rounds: 8 },
  { name: 'HIIT (40/20 × 10)', work: 40, rest: 20, rounds: 10 },
  { name: 'Circuit (45/15 × 12)', work: 45, rest: 15, rounds: 12 },
  { name: 'Boxing rounds (3 min / 1 min × 3)', work: 180, rest: 60, rounds: 3 },
  { name: 'Run intervals (90 s / 90 s × 6)', work: 90, rest: 90, rounds: 6 },
]

function beep(freq: number, ms = 160) {
  try {
    const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
    const ctx = (beep as unknown as { ctx?: AudioContext }).ctx ?? new Ctx()
    ;(beep as unknown as { ctx?: AudioContext }).ctx = ctx
    const o = ctx.createOscillator()
    const g = ctx.createGain()
    o.frequency.value = freq
    g.gain.setValueAtTime(0.2, ctx.currentTime)
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + ms / 1000)
    o.connect(g).connect(ctx.destination)
    o.start()
    o.stop(ctx.currentTime + ms / 1000)
  } catch {
    // no audio; the timer still works visually
  }
}

export function IntervalTimer({ color }: { color: string }) {
  const [cfg, setCfg] = useState(PRESETS[0])
  const [sound, setSound] = useState(true)
  const [state, setState] = useState<{ running: boolean; phase: 'ready' | 'work' | 'rest' | 'done'; round: number; left: number }>({ running: false, phase: 'ready', round: 0, left: 10 })
  const end = useRef(0)

  const now = useRef(state)
  useEffect(() => {
    now.current = state
  }, [state])

  useEffect(() => {
    if (!state.running) return
    const id = window.setInterval(() => {
      const s = now.current
      const left = Math.max(0, (end.current - performance.now()) / 1000)
      if (left > 0) {
        if (sound && Math.ceil(left) !== Math.ceil(s.left) && Math.ceil(left) <= 3) beep(660, 90)
        setState({ ...s, left })
      } else if (s.phase === 'ready' || s.phase === 'rest') {
        if (sound) beep(990, 300)
        end.current = performance.now() + cfg.work * 1000
        setState({ ...s, phase: 'work', round: s.round + 1, left: cfg.work })
      } else if (s.round >= cfg.rounds) {
        if (sound) beep(523, 600)
        setState({ running: false, phase: 'done', round: s.round, left: 0 })
      } else {
        if (sound) beep(440, 300)
        end.current = performance.now() + cfg.rest * 1000
        setState({ ...s, phase: 'rest', left: cfg.rest })
      }
    }, 100)
    return () => window.clearInterval(id)
  }, [state.running, cfg, sound])

  function start() {
    if (state.phase === 'done' || (state.phase === 'ready' && state.round === 0 && !state.running)) {
      end.current = performance.now() + 10000
      setState({ running: true, phase: 'ready', round: 0, left: 10 })
    } else {
      end.current = performance.now() + state.left * 1000
      setState((s) => ({ ...s, running: true }))
    }
  }

  const bg = state.phase === 'work' ? color : state.phase === 'rest' ? 'var(--paper-2)' : 'var(--surface)'
  const label = { ready: 'Get ready', work: 'Work', rest: 'Rest', done: 'Done!' }[state.phase]
  return (
    <div className={card}>
      <p className="font-bold">Interval timer</p>
      <div className="flex flex-wrap gap-2">
        <NativeSelect
          className="input-field"
          style={{ width: 'auto' }}
          value={cfg.name}
          onChange={(e) => {
            setCfg(PRESETS.find((p) => p.name === e.target.value) ?? PRESETS[0])
            setState({ running: false, phase: 'ready', round: 0, left: 10 })
          }}
          aria-label="Interval preset"
        >
          {PRESETS.map((p) => (
            <option key={p.name}>{p.name}</option>
          ))}
        </NativeSelect>
        <label className="flex items-center gap-1.5 text-sm font-bold">
          <input type="checkbox" checked={sound} onChange={(e) => setSound(e.target.checked)} /> Beeps
        </label>
      </div>
      <div className="flex flex-col items-center gap-1 rounded-[var(--radius)] border py-6 transition-colors" style={{ borderColor: 'var(--line)', background: bg }} aria-live="polite">
        <span className="eyebrow font-bold">{label}</span>
        <span className="font-mono text-6xl font-bold tabular-nums">{fmtTime(Math.ceil(state.left))}</span>
        <span className="text-sm font-bold">
          Round {Math.max(1, state.round)} of {cfg.rounds}
        </span>
      </div>
      <div className="flex gap-2">
        {state.running ? (
          <button type="button" className="btn btn-primary px-4 py-2 text-sm" onClick={() => setState((s) => ({ ...s, running: false }))}>
            ❚❚ Pause
          </button>
        ) : (
          <button type="button" className="btn btn-primary px-4 py-2 text-sm" onClick={start}>
            ▶ {state.phase === 'ready' && state.round === 0 ? 'Start' : state.phase === 'done' ? 'Again' : 'Resume'}
          </button>
        )}
        <button type="button" className="btn btn-ghost px-4 py-2 text-sm" onClick={() => setState({ running: false, phase: 'ready', round: 0, left: 10 })}>
          Reset
        </button>
      </div>
    </div>
  )
}
