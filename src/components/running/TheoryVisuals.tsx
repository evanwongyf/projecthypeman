import { useState } from 'react'
import type { TheoryArticle } from '../../data/theory'
import { BarChart, ChartFrame, LineChart } from '../charts/Charts'
import { Field } from '../Field'
import { formatPaceSec } from '../../lib/racelab'

/** The chart or calculator an article asks for. Everything is computed from formulas or published guidelines. */
export function TheoryVisual({ id }: { id: NonNullable<TheoryArticle['visual']> }) {
  switch (id) {
    case 'hr-zones':
      return <HeartRateZones />
    case 'ramp':
      return <MileageRamp />
    case 'taper':
      return <TaperChart />
    case 'carbs':
      return <CarbChart />
    case 'sweat':
      return <SweatRate />
    case 'cadence':
      return <CadenceChart />
    case 'energy-availability':
      return <EnergyAvailability />
  }
}

function NumberField({ label, hint, value, onChange }: { label: string; hint?: string; value: string; onChange: (v: string) => void }) {
  return (
    <Field label={label} hint={hint}>
      <input className="field mono" inputMode="decimal" value={value} onChange={(e) => onChange(e.target.value)} />
    </Field>
  )
}

const num = (s: string) => {
  const n = Number(s)
  return s.trim() !== '' && Number.isFinite(n) ? n : NaN
}

// ---------- heart-rate zones ----------

const ZONES = [
  { name: 'Zone 1 · recovery', lo: 0.5, hi: 0.6 },
  { name: 'Zone 2 · easy aerobic', lo: 0.6, hi: 0.7 },
  { name: 'Zone 3 · steady / marathon', lo: 0.7, hi: 0.8 },
  { name: 'Zone 4 · threshold', lo: 0.8, hi: 0.9 },
  { name: 'Zone 5 · VO₂max', lo: 0.9, hi: 1.0 },
]

function HeartRateZones() {
  const [age, setAge] = useState('30')
  const [rest, setRest] = useState('55')
  const [max, setMax] = useState('')
  const a = num(age)
  const r = num(rest)
  const measured = num(max)
  const hrMax = Number.isFinite(measured) ? measured : 208 - 0.7 * a
  const ok = Number.isFinite(hrMax) && Number.isFinite(r) && hrMax > r
  const hrr = hrMax - r

  return (
    <ChartFrame
      title="Your heart-rate zones (Karvonen)"
      subtitle={ok ? `HRmax ${Math.round(hrMax)} bpm${Number.isFinite(measured) ? ' (measured)' : ' (Tanaka estimate)'} · reserve ${Math.round(hrr)} bpm` : 'Enter age and resting heart rate'}
      table={{
        head: ['zone', '% of reserve', 'bpm'],
        rows: ok ? ZONES.map((z) => [z.name, `${z.lo * 100}–${z.hi * 100}%`, `${Math.round(r + z.lo * hrr)}–${Math.round(r + z.hi * hrr)}`]) : [],
      }}
      interpretation={
        <p>
          Each band is resting heart rate plus a percentage of your reserve. Because the reserve shrinks with a high resting
          rate, two runners with the same maximum but different resting rates get different zones — that is the point of
          the Karvonen method. The five-band split is a common coaching convention, not a physiological law; your real
          thresholds may sit a few beats either side.
        </p>
      }
      source="HRmax estimate: Tanaka et al. (2001). Zones: Karvonen et al. (1957)."
    >
      <div className="grid gap-3 sm:grid-cols-3">
        <NumberField label="Age" value={age} onChange={setAge} />
        <NumberField label="Resting HR" hint="bpm" value={rest} onChange={setRest} />
        <NumberField label="Max HR" hint="optional, if measured" value={max} onChange={setMax} />
      </div>
      {ok && (
        <ul className="mt-4 space-y-2">
          {ZONES.map((z) => {
            const lo = r + z.lo * hrr
            const hi = r + z.hi * hrr
            const left = ((lo - r) / hrr) * 100
            const width = ((hi - lo) / hrr) * 100
            return (
              <li key={z.name} className="grid grid-cols-[minmax(8rem,12rem)_1fr_4.5rem] items-center gap-3 text-xs">
                <span style={{ color: 'var(--ink-soft)' }}>{z.name}</span>
                <span className="relative block h-3.5" style={{ background: 'var(--panel-2)', borderRadius: 4 }}>
                  <span className="absolute inset-y-0" style={{ left: `${left}%`, width: `${width}%`, background: 'var(--series-1)', borderRadius: 4 }} />
                </span>
                <span className="mono text-right">
                  {Math.round(lo)}–{Math.round(hi)}
                </span>
              </li>
            )
          })}
        </ul>
      )}
    </ChartFrame>
  )
}

// ---------- mileage ramp ----------

function rampSeries(start: number, weeks: number) {
  const steady: { x: number; y: number }[] = []
  const stepped: { x: number; y: number }[] = []
  let a = start
  let level = start
  for (let w = 1; w <= weeks; w++) {
    if (w > 1) a *= 1.1
    // Every fourth week is a down week at 75% of the current level; the
    // build resumes from that level afterwards.
    let b: number
    if (w % 4 === 0) b = level * 0.75
    else {
      if (w > 1) level *= 1.1
      b = level
    }
    steady.push({ x: w, y: Math.round(a * 10) / 10 })
    stepped.push({ x: w, y: Math.round(b * 10) / 10 })
  }
  return { steady, stepped }
}

function MileageRamp() {
  const [start, setStart] = useState('30')
  const s = num(start) > 0 ? num(start) : 30
  const { steady, stepped } = rampSeries(s, 16)
  const series = [
    { name: '+10% every week', points: steady },
    { name: '3 weeks up, 1 down', points: stepped },
  ]
  const endA = steady[steady.length - 1].y
  const endB = stepped[stepped.length - 1].y

  return (
    <ChartFrame
      title="Two ways to build from the same start"
      subtitle="Weekly distance over 16 weeks — a worked example, not a plan"
      legend={series.map((x) => x.name)}
      table={{ head: ['week', ...series.map((x) => `${x.name} (km)`)], rows: steady.map((p, i) => [p.x, p.y, stepped[i].y]) }}
      interpretation={
        <p>
          Compounding is the hidden danger of a fixed weekly percentage: starting at {s} km, +10% every week reaches{' '}
          <b>{endA.toFixed(0)} km</b> by week 16 — {(endA / s).toFixed(1)}× the start. The stepped pattern (build three
          weeks, then drop 25%) ends at <b>{endB.toFixed(0)} km</b> and gives tendons and bones a lighter week every month to
          catch up. Most runners also plateau for a few weeks at a new level before building again.
        </p>
      }
    >
      <div className="mb-3 max-w-[10rem]">
        <NumberField label="Starting week" hint="km" value={start} onChange={setStart} />
      </div>
      <LineChart series={series} xLabel="week" yLabel="km per week" yMin={0} xFormat={(v) => String(v)} />
    </ChartFrame>
  )
}

// ---------- taper ----------

function TaperChart() {
  const pts = [
    { x: -4, y: 100 },
    { x: -3, y: 100 },
    { x: -2, y: 75 },
    { x: -1, y: 55 },
    { x: 0, y: 40 },
  ]
  return (
    <ChartFrame
      title="An example progressive taper"
      subtitle="Weekly volume as % of normal training, final four weeks before a race (week 0 = race week)"
      table={{ head: ['week', 'volume %'], rows: pts.map((p) => [p.x, `${p.y}%`]) }}
      interpretation={
        <p>
          The shape follows the meta-analysis finding: a progressive cut of roughly 40–60% over about two weeks, with
          intensity kept. In the final two weeks this example averages a {(100 - (75 + 55) / 2).toFixed(0)}% reduction,
          then drops further in race week. Keep a short race-pace session each week — it is the volume that comes down, not
          the speed.
        </p>
      }
      source="Volume guidance: Bosquet et al. (2007), Medicine & Science in Sports & Exercise."
    >
      <LineChart series={[{ name: 'Volume', points: pts }]} xLabel="weeks to race" yLabel="% of normal volume" yMin={0} yMax={110} yFormat={(v) => `${v}%`} />
    </ChartFrame>
  )
}

// ---------- carbohydrate ----------

function CarbChart() {
  const [hours, setHours] = useState('3.5')
  const h = num(hours)
  const rate = !Number.isFinite(h) ? 0 : h < 0.75 ? 0 : h < 1.25 ? 0 : h <= 2 ? 30 : h <= 2.5 ? 60 : 90
  const rows = [
    { label: 'Under 45 min', value: 0, note: 'not needed' },
    { label: '45–75 min', value: 0, note: 'small amounts or a mouth rinse' },
    { label: '1–2 hours', value: 30 },
    { label: '2–3 hours', value: 60 },
    { label: 'Over 2.5 hours', value: 90, note: 'glucose + fructose' },
  ]
  return (
    <ChartFrame
      title="Carbohydrate during exercise"
      subtitle="Upper guideline intake, grams per hour, by event duration"
      table={{ head: ['duration', 'g per hour', 'note'], rows: rows.map((r) => [r.label, r.value, r.note ?? '']) }}
      interpretation={
        <p>
          The recommendation steps up with duration because glycogen only runs short in longer efforts. The 90 g/h tier is
          only reachable with glucose–fructose mixtures, which use two gut transporters. These are upper ranges for trained
          guts — start lower and build up in training.
          {Number.isFinite(h) && h > 0 && (
            <>
              {' '}
              For a <b>{h} h</b> effort that is up to <b>{rate} g/h</b> — about <b>{Math.round(rate * h)} g</b> in total
              {rate ? `, or roughly ${Math.round((rate * h) / 25)} gels of 25 g` : ''}.
            </>
          )}
        </p>
      }
      source="Guidelines: Jeukendrup (2014), Sports Medicine."
    >
      <div className="mb-4 max-w-[12rem]">
        <NumberField label="Your race duration" hint="hours" value={hours} onChange={setHours} />
      </div>
      <BarChart rows={rows} unit="g/h" />
    </ChartFrame>
  )
}

// ---------- sweat rate ----------

function SweatRate() {
  const [before, setBefore] = useState('65.0')
  const [after, setAfter] = useState('64.1')
  const [drank, setDrank] = useState('0.3')
  const [urine, setUrine] = useState('0')
  const [mins, setMins] = useState('60')
  const b = num(before)
  const a = num(after)
  const d = num(drank) || 0
  const u = num(urine) || 0
  const m = num(mins)
  const ok = [b, a, m].every(Number.isFinite) && m > 0
  const loss = ok ? b - a + d - u : 0
  const rate = ok ? loss / (m / 60) : 0
  const pct = ok ? ((b - a) / b) * 100 : 0

  return (
    <ChartFrame
      title="Sweat-rate calculator"
      table={{ head: ['measure', 'value'], rows: ok ? [['sweat lost', `${loss.toFixed(2)} L`], ['sweat rate', `${rate.toFixed(2)} L/h`], ['body mass change', `${pct.toFixed(1)}%`]] : [] }}
      interpretation={
        ok ? (
          <p>
            You lost about <b>{rate.toFixed(2)} L per hour</b>, and your body mass fell <b>{pct.toFixed(1)}%</b>.{' '}
            {pct >= 2
              ? 'That is past the ~2% level where performance tends to suffer — plan to drink more on runs this long in these conditions.'
              : pct < 0
                ? 'You gained mass — you drank more than you sweated. Over long events that raises the risk of hyponatraemia.'
                : 'That is under the ~2% level, so your current drinking is roughly enough for this run.'}{' '}
            To keep losses under 2% over a longer run, drink roughly{' '}
            <b>{Math.max(0, rate - (b * 0.02) / 3).toFixed(2)} L/h</b> for a three-hour effort.
          </p>
        ) : (
          <p>Fill in your weights and duration.</p>
        )
      }
      source="Method and the 2% guideline: Sawka et al. (2007), ACSM position stand."
    >
      <div className="grid gap-3 sm:grid-cols-5">
        <NumberField label="Before" hint="kg" value={before} onChange={setBefore} />
        <NumberField label="After" hint="kg" value={after} onChange={setAfter} />
        <NumberField label="Drank" hint="L" value={drank} onChange={setDrank} />
        <NumberField label="Urine" hint="L" value={urine} onChange={setUrine} />
        <NumberField label="Duration" hint="min" value={mins} onChange={setMins} />
      </div>
    </ChartFrame>
  )
}

// ---------- cadence ----------

function CadenceChart() {
  const steps = [1.0, 1.1, 1.2]
  const cadences = Array.from({ length: 9 }, (_, i) => 150 + i * 5)
  const series = steps.map((sl) => ({
    name: `${sl.toFixed(1)} m steps`,
    points: cadences.map((c) => ({ x: c, y: 1000 / (c * sl) * 60 })),
  }))
  return (
    <ChartFrame
      title="Pace from cadence and step length"
      subtitle="Each line holds step length constant; pace in min:sec per km"
      legend={series.map((s) => s.name)}
      table={{
        head: ['cadence', ...series.map((s) => s.name)],
        rows: cadences.map((c, i) => [c, ...series.map((s) => formatPaceSec(s.points[i].y))]),
      }}
      interpretation={
        <p>
          Lower is faster. At 170 steps per minute, lengthening the step from 1.0 to 1.2 m takes pace from{' '}
          {formatPaceSec(1000 / (170 * 1.0) * 60)} to {formatPaceSec(1000 / (170 * 1.2) * 60)} per km. Raising cadence by 5%
          at the same step length speeds you up by about 5% too — but in practice step length shortens a little when cadence
          rises, which is exactly why a cadence nudge reduces overstriding.
        </p>
      }
    >
      <LineChart series={series} xLabel="cadence (steps/min)" yLabel="pace (min/km)" yFormat={(v) => formatPaceSec(v)} />
    </ChartFrame>
  )
}

// ---------- energy availability ----------

function EnergyAvailability() {
  const [intake, setIntake] = useState('2400')
  const [exercise, setExercise] = useState('700')
  const [mass, setMass] = useState('60')
  const [fat, setFat] = useState('15')
  const ffm = num(mass) * (1 - num(fat) / 100)
  const ea = (num(intake) - num(exercise)) / ffm
  const ok = Number.isFinite(ea) && ffm > 0
  const band = !ok ? '' : ea >= 45 ? 'adequate' : ea >= 30 ? 'reduced' : 'low'

  return (
    <ChartFrame
      title="Energy availability calculator"
      table={{ head: ['measure', 'value'], rows: ok ? [['fat-free mass', `${ffm.toFixed(1)} kg`], ['energy availability', `${ea.toFixed(1)} kcal/kg FFM/day`], ['band', band]] : [] }}
      interpretation={
        ok ? (
          <p>
            Energy availability is <b>{ea.toFixed(0)} kcal per kg of fat-free mass per day</b> — <b>{band}</b>. Around 45 is
            generally adequate for active adults; laboratory studies found hormonal disruption below about 30. This is a
            screening estimate: food and exercise energy are hard to measure precisely, so use it as a prompt, not a
            diagnosis.
          </p>
        ) : (
          <p>Fill in the fields.</p>
        )
      }
      source="Thresholds: Loucks & Thuma (2003); Mountjoy et al. (2018), IOC consensus on RED-S."
    >
      <div className="grid gap-3 sm:grid-cols-4">
        <NumberField label="Energy intake" hint="kcal/day" value={intake} onChange={setIntake} />
        <NumberField label="Exercise energy" hint="kcal/day" value={exercise} onChange={setExercise} />
        <NumberField label="Body mass" hint="kg" value={mass} onChange={setMass} />
        <NumberField label="Body fat" hint="%" value={fat} onChange={setFat} />
      </div>
      {ok && (
        <div className="mt-4">
          <div className="relative h-4" style={{ background: 'var(--panel-2)', borderRadius: 4 }}>
            {[30, 45].map((t) => (
              <span key={t} className="absolute inset-y-0" style={{ left: `${(t / 70) * 100}%`, width: 1, background: 'var(--viz-axis)' }} />
            ))}
            <span
              className="absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{ left: `${Math.min(Math.max(ea, 0), 70) / 70 * 100}%`, background: 'var(--series-1)', border: '2px solid var(--panel)' }}
            />
          </div>
          <div className="mono mt-1 flex justify-between text-[10px]" style={{ color: 'var(--ink-faint)' }}>
            <span>0</span>
            <span>30 · low below</span>
            <span>45 · adequate above</span>
            <span>70</span>
          </div>
        </div>
      )}
    </ChartFrame>
  )
}
