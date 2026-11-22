import { useState } from 'react'
import { Field } from '../Field'
import { Select } from '../Select'
import { formatClock, formatPaceSec, parsePace } from '../../lib/racelab'
import { parseDuration } from '../../lib/running'
import { JOULES_PER_ML_O2, acsmVo2, predictFromVdot, riegel, timeAfterEconomyGain, vdot } from '../../lib/economy'

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
          first carbon-plated super shoes showed in lab tests — does not give a full 4% faster time, because air resistance
          rises with the square of speed. Using the Daniels cost curve:
        </p>
        <EconomyGainCalculator />
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
                <th className="label pb-2 font-medium">distance</th>
                <th className="label pb-2 font-medium">VDOT prediction</th>
                <th className="label pb-2 font-medium">Riegel prediction</th>
                <th className="label pb-2 font-medium">pace (VDOT)</th>
              </tr>
            </thead>
            <tbody className="mono">
              {RACES.map((r) => {
                const dist = Number(r.value)
                const pv = predictFromVdot(score, dist)
                const pr = riegel(t, d, dist)
                return (
                  <tr key={r.value} className="border-t hairline">
                    <td className="py-2 font-sans">{r.label}</td>
                    <td className="py-2">{formatClock(pv)}</td>
                    <td className="py-2">{formatClock(pr)}</td>
                    <td className="py-2">{formatPaceSec(pv / (dist / 1000))} /km</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
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
