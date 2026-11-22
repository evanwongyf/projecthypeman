import { useState } from 'react'
import { Field } from '../Field'
import { Select } from '../Select'
import { formatClock, formatPaceSec, parsePace } from '../../lib/racelab'
import { parseDuration } from '../../lib/running'
import {
  DANIELS_ZONES,
  JOULES_PER_ML_O2,
  acsmVo2,
  danielsFraction,
  danielsVo2,
  paceAtFraction,
  predictFromVdot,
  riegel,
  timeAfterEconomyGain,
  vdot,
} from '../../lib/economy'
import { BarChart, ChartFrame, LineChart } from '../charts/Charts'
import { FOAM_ENERGY_RETURN } from '../../data/materials'

const RACES = [
  { value: '1609.34', label: 'Mile' },
  { value: '5000', label: '5K' },
  { value: '10000', label: '10K' },
  { value: '21097.5', label: 'Half marathon' },
  { value: '42195', label: 'Marathon' },
]

export function EconomyMath() {
  return (
    <div className="max-w-4xl space-y-10">
      <Section title="What running economy is">
        <p>
          Running economy is the energy it costs to cover ground at a given speed. It is usually measured as oxygen used
          per kilogram per kilometre, or as energy per kilogram per metre.
        </p>
        <Formula>Economy = VO₂ ÷ speed   →   ml O₂ · kg⁻¹ · km⁻¹</Formula>
        <p>
          Trained runners typically use around <b>180–220 ml O₂/kg/km</b>. At roughly 20 J per ml of oxygen, that is about{' '}
          <b>4 J/kg/m</b>, or close to <b>1 kcal per kg per km</b> — so a 70 kg runner burns about 70 kcal per km, almost
          regardless of pace.
        </p>
      </Section>

      <Section title="The three pillars">
        <p>Michael Joyner's model says sustained race speed comes from three things multiplied together:</p>
        <Formula>Race speed ≈ VO₂max × fraction sustainable ÷ cost per metre</Formula>
        <p>
          <b>VO₂max</b> is the size of the engine, the <b>fraction</b> (set mainly by lactate threshold) is how much of it
          you can hold for the race, and <b>economy</b> is the fuel efficiency. Improve any one and you go faster at the same
          effort.
        </p>
      </Section>

      <Section title="The ACSM running equation">
        <Formula>VO₂ = 0.2 · v + 0.9 · v · grade + 3.5</Formula>
        <p>
          v is speed in metres per minute, grade is the incline as a decimal (5% = 0.05), and 3.5 is resting oxygen use. The
          0.2 ml/kg per metre horizontal term is the average cost of running; every 1% of grade adds 4.5% more on top of that
          term.
        </p>
        <AcsmCalculator />
        <CostCurveChart />
      </Section>

      <Section title="VDOT — Daniels & Gilbert">
        <p>
          Jack Daniels and Jimmy Gilbert fitted two curves to racing data. The first is the oxygen cost of a speed, the second
          the fraction of VO₂max you can hold for a duration:
        </p>
        <Formula>VO₂(v) = −4.60 + 0.182258 · v + 0.000104 · v²</Formula>
        <Formula>%max(t) = 0.8 + 0.1894393 · e^(−0.012778 · t) + 0.2989558 · e^(−0.1932605 · t)</Formula>
        <Formula>VDOT = VO₂(v) ÷ %max(t)</Formula>
        <p>
          v is in m/min and t in minutes. VDOT is an "effective VO₂max" that bundles economy in — two runners with the same
          VDOT race the same times even if their lab numbers differ. The v² term is partly air resistance, which is why the
          cost rises faster than speed.
        </p>
        <FractionChart />
        <VdotCalculator />
      </Section>

      <Section title="Riegel's formula">
        <Formula>T₂ = T₁ × (D₂ ÷ D₁)^1.06</Formula>
        <p>
          Peter Riegel found that race time grows slightly faster than distance. The exponent 1.06 captures the slowdown as
          races get longer. It works best between 1.5 km and the half marathon; for the marathon, under-trained runners
          usually run slower than it predicts.
        </p>
      </Section>

      <Section title="What an economy gain is worth">
        <p>
          If you sustain the same oxygen uptake but each metre costs less, you go faster. A 4% economy gain — about what the
          first carbon-plated super shoes showed in lab tests — does not give a full 4% faster time, because the cost of
          running rises faster than speed itself (air resistance is part of that). Using the Daniels cost curve:
        </p>
        <EconomyGainCalculator />
        <EconomyGainChart />
        <FoamReturnChart />
        <ul className="mt-4 space-y-1.5">
          <li>— Shoe mass: roughly 1% more energy per 100 g added to each shoe.</li>
          <li>— Drafting behind other runners cuts the air-resistance part of the cost.</li>
          <li>— Heavy strength and plyometric training typically improve economy by a few percent.</li>
        </ul>
      </Section>

      <Section title="Metabolic power">
        <Formula>Power (W/kg) ≈ cost (J/kg/m) × speed (m/s)</Formula>
        <p>
          At about 4 J/kg/m, running 4 m/s (4:10 per km) takes roughly 16 W/kg of metabolic power. Running power meters
          estimate a related mechanical figure, which is far smaller because muscles are only about a quarter efficient.
        </p>
      </Section>
    </div>
  )
}

// ---------- calculators ----------

function AcsmCalculator() {
  const [pace, setPace] = useState('5:30')
  const [grade, setGrade] = useState('0')
  const [mass, setMass] = useState('65')

  const p = parsePace(pace)
  const g = Number(grade) / 100
  const kg = Number(mass)
  const v = p ? 60000 / p : 0 // m/min
  const vo2 = p ? acsmVo2(v, Number.isFinite(g) ? g : 0) : 0
  const perKm = p ? ((vo2 - 3.5) * (p / 60)) : 0 // net ml/kg/km
  const kcalKm = p && kg ? (perKm * kg * JOULES_PER_ML_O2) / 4184 : 0
  const watts = p ? (vo2 * JOULES_PER_ML_O2) / 60 : 0

  return (
    <Calc>
      <div className="grid gap-3 sm:grid-cols-3">
        <Field label="Pace" hint="/km">
          <input className="field mono" value={pace} onChange={(e) => setPace(e.target.value)} />
        </Field>
        <Field label="Grade" hint="%">
          <input className="field mono" inputMode="decimal" value={grade} onChange={(e) => setGrade(e.target.value)} />
        </Field>
        <Field label="Body mass" hint="kg">
          <input className="field mono" inputMode="decimal" value={mass} onChange={(e) => setMass(e.target.value)} />
        </Field>
      </div>
      <Results
        items={[
          ['VO₂', p ? `${vo2.toFixed(1)} ml/kg/min` : '—'],
          ['net cost', p ? `${perKm.toFixed(0)} ml/kg/km` : '—'],
          ['energy', kcalKm ? `${kcalKm.toFixed(0)} kcal/km` : '—'],
          ['metabolic power', p ? `${watts.toFixed(1)} W/kg` : '—'],
        ]}
      />
    </Calc>
  )
}

function VdotCalculator() {
  const [race, setRace] = useState('5000')
  const [time, setTime] = useState('25:00')
  const d = Number(race)
  const t = parseDuration(time)
  const score = t ? vdot(d, t) : null

  return (
    <Calc>
      <div className="grid gap-3 sm:grid-cols-2">
        <Field label="Race">
          <Select value={race} onChange={setRace} options={RACES} />
        </Field>
        <Field label="Your time" hint="mm:ss or h:mm:ss">
          <input className="field mono" value={time} onChange={(e) => setTime(e.target.value)} />
        </Field>
      </div>
      <Results items={[['VDOT', score ? score.toFixed(1) : '—']]} />
      {score && t && (
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr>
                <th className="label pr-4 pb-2 font-medium">distance</th>
                <th className="label pr-4 pb-2 font-medium">VDOT prediction</th>
                <th className="label pr-4 pb-2 font-medium">Riegel prediction</th>
                <th className="label pr-4 pb-2 font-medium">pace (VDOT)</th>
              </tr>
            </thead>
            <tbody className="mono">
              {RACES.map((r) => {
                const dist = Number(r.value)
                const pv = predictFromVdot(score, dist)
                const pr = riegel(t, d, dist)
                return (
                  <tr key={r.value} className="border-t hairline">
                    <td className="py-2 pr-4 font-sans">{r.label}</td>
                    <td className="py-2 pr-4">{formatClock(pv)}</td>
                    <td className="py-2 pr-4">{formatClock(pr)}</td>
                    <td className="py-2 pr-4">{formatPaceSec(pv / (dist / 1000))} /km</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}
      {score && (
        <div className="mt-5">
          <p className="label">training paces from this VDOT</p>
          <div className="mt-2 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr>
                  <th className="label pr-4 pb-2 font-medium">zone</th>
                  <th className="label pr-4 pb-2 font-medium">% of VO₂max</th>
                  <th className="label pr-4 pb-2 font-medium">pace /km</th>
                  <th className="label pr-4 pb-2 font-medium">use</th>
                </tr>
              </thead>
              <tbody>
                {DANIELS_ZONES.map((z) => (
                  <tr key={z.id} className="border-t hairline">
                    <td className="py-2 pr-4">{z.name}</td>
                    <td className="mono py-2 pr-4">
                      {Math.round(z.lo * 100)}–{Math.round(z.hi * 100)}%
                    </td>
                    <td className="mono py-2 pr-4">
                      {formatPaceSec(paceAtFraction(score, z.lo))}–{formatPaceSec(paceAtFraction(score, z.hi))}
                    </td>
                    <td className="py-2 text-xs" style={{ color: 'var(--ink-soft)' }}>
                      {z.purpose}
                    </td>
                  </tr>
                ))}
                <tr className="border-t hairline">
                  <td className="py-2 pr-4">Marathon</td>
                  <td className="mono py-2 pr-4">—</td>
                  <td className="mono py-2 pr-4">{formatPaceSec(predictFromVdot(score, 42195) / 42.195)}</td>
                  <td className="py-2 text-xs" style={{ color: 'var(--ink-soft)' }}>
                    Predicted marathon pace
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs" style={{ color: 'var(--ink-faint)' }}>
            Paces solve the Daniels cost curve for each fraction of your VDOT. Intensity bands after Daniels’ Running
            Formula.
          </p>
        </div>
      )}
    </Calc>
  )
}

function EconomyGainCalculator() {
  const [race, setRace] = useState('42195')
  const [time, setTime] = useState('4:00:00')
  const [gain, setGain] = useState(4)
  const d = Number(race)
  const t = parseDuration(time)
  const after = t ? timeAfterEconomyGain(d, t, gain / 100) : null

  return (
    <Calc>
      <div className="grid gap-3 sm:grid-cols-3">
        <Field label="Race">
          <Select value={race} onChange={setRace} options={RACES} />
        </Field>
        <Field label="Current time">
          <input className="field mono" value={time} onChange={(e) => setTime(e.target.value)} />
        </Field>
        <Field label={`Economy gain — ${gain}%`}>
          <input
            type="range"
            min={0}
            max={10}
            step={0.5}
            value={gain}
            onChange={(e) => setGain(Number(e.target.value))}
            className="mt-3 w-full"
            style={{ accentColor: 'var(--accent)' }}
          />
        </Field>
      </div>
      <Results
        items={[
          ['new time', after ? formatClock(after) : '—'],
          ['saved', after && t ? formatClock(t - after) : '—'],
          ['time improvement', after && t ? `${(((t - after) / t) * 100).toFixed(2)}%` : '—'],
        ]}
      />
    </Calc>
  )
}

// ---------- charts ----------

function CostCurveChart() {
  const speeds = Array.from({ length: 15 }, (_, i) => 8 + i) // km/h
  const toMpm = (kmh: number) => (kmh * 1000) / 60
  const series = [
    { name: 'ACSM (linear)', points: speeds.map((k) => ({ x: k, y: acsmVo2(toMpm(k)) })) },
    { name: 'Daniels–Gilbert (curved)', points: speeds.map((k) => ({ x: k, y: danielsVo2(toMpm(k)) })) },
  ]
  const at = (k: number) => [acsmVo2(toMpm(k)), danielsVo2(toMpm(k))]
  const [a10, d10] = at(10)
  const [a20, d20] = at(20)
  return (
    <ChartFrame
      title="Oxygen cost rises with speed"
      subtitle="Estimated VO₂ on flat ground, ml/kg/min, from 8 to 22 km/h (7:30 to 2:44 per km)"
      legend={series.map((s) => s.name)}
      table={{ head: ['km/h', 'pace /km', ...series.map((s) => s.name)], rows: speeds.map((k, i) => [k, formatPaceSec(3600 / k), series[0].points[i].y.toFixed(1), series[1].points[i].y.toFixed(1)]) }}
      interpretation={
        <p>
          ACSM is a straight line: every extra km/h costs the same oxygen. The Daniels–Gilbert curve is steeper and bends
          upward because of its v² term — partly air resistance, which grows with the square of speed. At slow speeds ACSM
          reads much higher ({a10.toFixed(1)} vs {d10.toFixed(1)} at 10 km/h), partly because it adds 3.5 ml/kg/min of
          resting metabolism and was built for general fitness testing. By 20 km/h the two nearly meet ({a20.toFixed(1)} vs{' '}
          {d20.toFixed(1)}). Daniels–Gilbert was fitted to trained runners racing, so it is the better guide for race pace;
          neither is your personal value — only a lab test gives that.
        </p>
      }
      source="ACSM Guidelines for Exercise Testing and Prescription; Daniels & Gilbert (1979), Oxygen Power."
    >
      <LineChart series={series} xLabel="speed (km/h)" yLabel="VO₂ (ml/kg/min)" />
    </ChartFrame>
  )
}

function FractionChart() {
  // Starts at 10 minutes: below that the fitted curve exceeds 100%, because very
  // short races also draw heavily on anaerobic energy.
  const ts = Array.from({ length: 47 }, (_, i) => 10 + i * 5)
  const pts = ts.map((t) => ({ x: t, y: danielsFraction(t) * 100 }))
  const f = (t: number) => (danielsFraction(t) * 100).toFixed(1)
  return (
    <ChartFrame
      title="How much of VO₂max you can sustain"
      subtitle="Daniels–Gilbert fraction of VO₂max against race duration (minutes)"
      table={{ head: ['minutes', '% of VO₂max'], rows: pts.map((p) => [p.x, p.y.toFixed(1)]) }}
      interpretation={
        <p>
          The curve falls steeply over the first half hour and then flattens towards 80%. A 15-minute race (a fast 5K) uses
          about {f(15)}% of VO₂max, a one-hour effort about {f(60)}%, and a three-hour marathon about {f(180)}%. That flattening
          is why marathon pace is not dramatically slower than half-marathon pace for trained runners — and why threshold
          training, which raises the fraction you can hold, matters so much for longer races. Below about 10 minutes the
          formula passes 100%, because races that short also draw heavily on anaerobic energy, so the chart starts there.
        </p>
      }
      source="Daniels & Gilbert (1979), Oxygen Power."
    >
      <LineChart series={[{ name: '% of VO₂max', points: pts }]} xLabel="race duration (min)" yLabel="% of VO₂max" yFormat={(v) => `${v.toFixed(0)}%`} />
    </ChartFrame>
  )
}

function EconomyGainChart() {
  const gains = Array.from({ length: 11 }, (_, i) => i)
  const times = [
    { name: '2:30 marathon', sec: 2.5 * 3600 },
    { name: '3:30 marathon', sec: 3.5 * 3600 },
    { name: '4:30 marathon', sec: 4.5 * 3600 },
  ]
  const saved = (sec: number, g: number) => (sec - timeAfterEconomyGain(42195, sec, g / 100)) / 60
  const pct = (sec: number, g: number) => ((sec - timeAfterEconomyGain(42195, sec, g / 100)) / sec) * 100
  // Minutes saved separates the runners clearly; % faster is nearly identical for all three, so it goes in the table and text.
  const series = times.map((t) => ({ name: t.name, points: gains.map((g) => ({ x: g, y: saved(t.sec, g) })) }))
  const pct4 = times.map((t) => pct(t.sec, 4))
  const min4 = times.map((t) => saved(t.sec, 4))
  const fasterGainsMore = pct4[0] > pct4[2]
  return (
    <ChartFrame
      title="What an economy gain is worth in time"
      subtitle="Minutes saved in a marathon for a given % improvement in running economy (Daniels cost curve, same oxygen uptake)"
      legend={series.map((s) => s.name)}
      table={{
        head: ['economy gain %', ...times.flatMap((t) => [`${t.name} (min)`, `${t.name} (%)`])],
        rows: gains.map((g) => [g, ...times.flatMap((t) => [saved(t.sec, g).toFixed(1), `${pct(t.sec, g).toFixed(2)}%`])]),
      }}
      interpretation={
        <p>
          A 4% economy gain saves about <b>{min4[0].toFixed(1)}</b>, <b>{min4[1].toFixed(1)}</b> and <b>{min4[2].toFixed(1)}</b>{' '}
          minutes at 2:30, 3:30 and 4:30 — slower runners save more time simply because they are out there longer. As a
          percentage the gain is almost the same for everyone ({pct4[0].toFixed(2)}%, {pct4[1].toFixed(2)}% and{' '}
          {pct4[2].toFixed(2)}%), with {fasterGainsMore ? 'faster' : 'slower'} runners gaining very slightly more in this model.
          In every case it is less than the 4% economy gain itself, because the cost of running rises faster than speed.
          Kipp, Kram and Hoogkamer reached the same conclusion: the percentage speed gain is smaller than the percentage
          metabolic saving.
        </p>
      }
      source="Model: Daniels & Gilbert (1979). Comparison: Kipp, Kram & Hoogkamer (2019), Frontiers in Physiology."
    >
      <LineChart series={series} xLabel="economy improvement (%)" yLabel="minutes saved" yMin={0} yFormat={(v) => v.toFixed(0)} />
    </ChartFrame>
  )
}

function FoamReturnChart() {
  return (
    <ChartFrame
      title="Energy returned by three midsole foams"
      subtitle="Mechanical test, % of energy returned on rebound"
      table={{ head: ['foam', 'energy return %'], rows: FOAM_ENERGY_RETURN.map((r) => [r.label, r.value]) }}
      interpretation={
        <p>
          In the lab tests behind the first super-shoe study, the PEBA foam returned {FOAM_ENERGY_RETURN[0].value}% of the
          energy put into it, against {FOAM_ENERGY_RETURN[1].value}% for TPU and {FOAM_ENERGY_RETURN[2].value}% for EVA. That
          extra rebound — combined with a stiff plate and low weight — is a large part of why the prototype shoe lowered the
          energy cost of running by about 4% on average in the same study.
        </p>
      }
      source="Hoogkamer W et al. (2018). A comparison of the energetic cost of running in marathon racing shoes. Sports Medicine."
    >
      <BarChart rows={FOAM_ENERGY_RETURN} unit="%" />
    </ChartFrame>
  )
}

// ---------- layout bits ----------

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
        {children}
      </div>
    </section>
  )
}

function Formula({ children }: { children: React.ReactNode }) {
  return (
    <p className="panel mono overflow-x-auto px-4 py-3 text-sm whitespace-nowrap" style={{ color: 'var(--ink)' }}>
      {children}
    </p>
  )
}

function Calc({ children }: { children: React.ReactNode }) {
  return (
    <div className="panel p-4" style={{ color: 'var(--ink)' }}>
      <p className="label mb-3">calculator</p>
      {children}
    </div>
  )
}

function Results({ items }: { items: [string, string][] }) {
  return (
    <dl className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
      {items.map(([k, v]) => (
        <div key={k}>
          <dt className="label">{k}</dt>
          <dd className="mono mt-1 text-base font-semibold">{v}</dd>
        </div>
      ))}
    </dl>
  )
}
