import { useMemo, useState } from 'react'
import { BASE_SETUP, CIRCUIT_IDS, SENS_LABELS, analyse, defaultSetup, featureFor, mmss, sensitivities, setupForWing, shortName } from '../../../lib/f1/circuits'
import type { Setup } from '../../../lib/f1/circuits'
import { Btn, Card, Slider, Stat, soft } from '../shared'
import { SECTOR_COLORS, SPEED_CLASS, TraceChart, f0, f1, f2 } from './chartKit'

// Every numbered corner of a circuit with what the lap model says about it.
export function CornerTable({ id, color }: { id: string; color: string }) {
  const a = useMemo(() => analyse(id), [id])
  const [sel, setSel] = useState<number | null>(null)
  return (
    <Card title={`${a.notes.name}: corner by corner`} color={color} note="Radius is the tightest point of the bend. The centreline is the middle of the track; the racing line is the wider path the car follows, so its radius is bigger and it can carry more speed. Gears are estimates from an approximate eight-speed ratio set.">
      <div className="overflow-x-auto rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)' }}>
        <table className="w-full min-w-[46rem] border-collapse text-left text-xs">
          <thead>
            <tr style={{ background: 'var(--paper-2)' }}>
              {['Turn', 'Type', 'Turns', 'Radius (track / line)', 'Brakes from', 'Brake distance', 'Apex', 'Exit', 'Gear', 'Peak g'].map((h) => (
                <th key={h} className="px-2 py-1.5 font-bold whitespace-nowrap">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {a.corners.map((c) => {
              const f = featureFor(id, c.n)
              const sector = a.sectors.findIndex((s) => s.corners.includes(c.n))
              return (
                <tr key={c.n} onClick={() => setSel(sel === c.n ? null : c.n)} className="cursor-pointer border-t" style={{ borderColor: 'var(--line)', background: sel === c.n ? 'color-mix(in srgb, var(--orange) 22%, var(--surface))' : undefined }}>
                  <td className="px-2 py-1.5 font-bold whitespace-nowrap">
                    <span className="mr-1.5 inline-block h-2.5 w-2.5 rounded-full align-middle" style={{ background: SECTOR_COLORS[sector] }} title={`Sector ${sector + 1}`} />
                    {c.n}
                    {f && f.at[0] === f.at[1] && <span className="ml-1 font-normal" style={soft}>{f.name}</span>}
                  </td>
                  <td className="px-2 py-1.5 whitespace-nowrap">
                    <span className="font-bold" style={{ color: SPEED_CLASS[c.speed].color }}>{SPEED_CLASS[c.speed].label}</span> {c.dir} {c.shape === 'corner' ? 'bend' : c.shape}
                  </td>
                  <td className="px-2 py-1.5 whitespace-nowrap">{f0(c.angle)}°</td>
                  <td className="px-2 py-1.5 whitespace-nowrap">{f0(c.rMin)} / {Number.isFinite(c.rLine) ? f0(c.rLine) : '–'} m</td>
                  <td className="px-2 py-1.5 whitespace-nowrap">{c.brakeFrom ? `${f0(c.brakeFrom)} km/h` : '–'}</td>
                  <td className="px-2 py-1.5 whitespace-nowrap">{c.brakeFrom ? `${f0(c.brakeDist)} m` : '–'}</td>
                  <td className="px-2 py-1.5 font-bold whitespace-nowrap">{f0(c.vApex)} km/h</td>
                  <td className="px-2 py-1.5 whitespace-nowrap">{f0(c.vExit)} km/h</td>
                  <td className="px-2 py-1.5">{c.gear}</td>
                  <td className="px-2 py-1.5">{f1(c.gLat)}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <p className="text-xs" style={soft}>The dot beside each turn number shows its sector. Click a row to highlight it.</p>
    </Card>
  )
}

// How much one percent more of each ingredient changes the lap at this circuit.
export function SensitivityBars({ id, color }: { id: string; color: string }) {
  const rows = useMemo(() => sensitivities(id), [id])
  const max = Math.max(...rows.map((r) => Math.abs(r.dt)), 0.001)
  const best = [...rows].sort((p, q) => p.dt - q.dt)[0]
  return (
    <Card
      title={`What is worth most at ${analyse(id).notes.name}`}
      color={color}
      note={`Each bar re-runs the whole simulated lap with one ingredient changed by 1% and everything else held, and shows the change in lap time. Left (green) is faster, right (red) is slower. The biggest bar is the thing this track pays most for: here, ${best.label.toLowerCase()}.`}
    >
      <div className="flex flex-col gap-1.5">
        {rows.map((r) => (
          <div key={r.key} className="grid grid-cols-[8.5rem_1fr_4.5rem] items-center gap-2 text-xs sm:grid-cols-[12rem_1fr_5rem]">
            <span className="font-bold">{r.label}</span>
            <span className="relative h-4 rounded-sm" style={{ background: 'var(--paper-2)' }}>
              <span className="absolute top-0 bottom-0 left-1/2 w-px" style={{ background: 'var(--ink)' }} />
              <span className="absolute top-0.5 bottom-0.5 rounded-sm" style={{ background: r.dt < 0 ? '#2f9e6e' : '#d9534f', width: `${(Math.abs(r.dt) / max) * 50}%`, [r.dt < 0 ? 'right' : 'left']: '50%' }} />
            </span>
            <span className="text-right font-mono">{r.dt > 0 ? '+' : ''}{Math.abs(r.dt * 1000) < 10 ? (r.dt * 1000).toFixed(1) : (r.dt * 1000).toFixed(0)} ms</span>
          </div>
        ))}
      </div>
    </Card>
  )
}

// The same six sensitivities for every circuit, so the pattern across the calendar shows.
export function SensitivityMatrix({ color }: { color: string }) {
  const keys = Object.keys(SENS_LABELS)
  const data = useMemo(() => CIRCUIT_IDS.map((id) => ({ id, name: analyse(id).notes.name, rows: sensitivities(id) })), [])
  // Shading is relative to the biggest effect in each column, so the pattern within an ingredient shows.
  const hi: Record<string, number> = Object.fromEntries(keys.map((k) => [k, Math.max(...data.map((d) => Math.abs(d.rows.find((r) => r.key === k)!.dt)), 1e-9)]))
  return (
    <Card title="What each circuit pays for" color={color} note="Change in lap time for a 1% improvement in each ingredient, in milliseconds (negative is faster; each column is shaded relative to its own biggest effect, so the pattern within an ingredient stands out). Read across a row for one circuit and down a column for one ingredient: compare the power and drag columns at the long-straight circuits with the downforce and grip columns at the tight ones.">
      <div className="overflow-x-auto rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)' }}>
        <table className="w-full min-w-[34rem] border-collapse text-xs">
          <thead>
            <tr style={{ background: 'var(--paper-2)' }}>
              <th className="px-2 py-1.5 text-left font-bold">Circuit</th>
              {keys.map((k) => (
                <th key={k} className="px-2 py-1.5 text-right font-bold">{SENS_LABELS[k]}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((d) => (
              <tr key={d.id} className="border-t" style={{ borderColor: 'var(--line)' }}>
                <td className="px-2 py-1 font-bold whitespace-nowrap">{shortName(d.id)}</td>
                {d.rows.map((r) => {
                  const v = Math.min(1, Math.abs(r.dt) / hi[r.key])
                  return (
                    <td key={r.key} className="px-2 py-1 text-right font-mono" style={{ background: `color-mix(in srgb, ${r.dt < 0 ? '#2f9e6e' : '#d9534f'} ${Math.round(v * 55)}%, var(--surface))` }}>
                      {(r.dt * 1000).toFixed(0)}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}

type Preset = { label: string; set: (s: Setup, wing: number) => { s: Setup; wing: number } }

// A what-if bench: change the car and watch the lap, the speed trace and the time lost or gained.
export function Explorer({ id, color }: { id: string; color: string }) {
  const base = useMemo(() => analyse(id), [id])
  const w0 = base.notes.wing
  const [wing, setWing] = useState(w0)
  const [power, setPower] = useState(BASE_SETUP.power)
  const [mu, setMu] = useState(BASE_SETUP.mu)
  const [mass, setMass] = useState(BASE_SETUP.mass)
  const [cursor, setCursor] = useState<number | null>(null)
  const setup: Setup = useMemo(() => ({ ...setupForWing(wing), power, mu, mass }), [wing, power, mu, mass])
  const cur = useMemo(() => analyse(id, setup), [id, setup])
  const same = setup.clA === defaultSetup(id).clA && power === BASE_SETUP.power && mu === BASE_SETUP.mu && mass === BASE_SETUP.mass
  const dt = cur.sim.lapTime - base.sim.lapTime

  const delta = useMemo(() => Float64Array.from(cur.sim.t, (t, i) => t - base.sim.t[i]), [cur, base])
  const spread = Math.max(0.2, Math.ceil(Math.max(...delta.map(Math.abs)) * 5) / 5)
  const kmhNow = useMemo(() => Float64Array.from(cur.sim.v, (v) => v * 3.6), [cur])
  const kmhBase = useMemo(() => Float64Array.from(base.sim.v, (v) => v * 3.6), [base])

  const reset = () => {
    setWing(w0)
    setPower(BASE_SETUP.power)
    setMu(BASE_SETUP.mu)
    setMass(BASE_SETUP.mass)
  }
  const presets: Preset[] = [
    { label: 'Monza wings', set: (s) => ({ s, wing: 0 }) },
    { label: 'Monaco wings', set: (s) => ({ s, wing: 1 }) },
    { label: '+10% power', set: (s, w) => ({ s: { ...s, power: s.power * 1.1 }, wing: w }) },
    { label: 'Worn tyres (−8% grip)', set: (s, w) => ({ s: { ...s, mu: s.mu * 0.92 }, wing: w }) },
    { label: 'Damp track (−35% grip)', set: (s, w) => ({ s: { ...s, mu: s.mu * 0.65 }, wing: w }) },
  ]
  const apply = (p: Preset) => {
    const r = p.set({ ...setup }, wing)
    setWing(r.wing)
    setPower(Math.round(r.s.power))
    setMu(+r.s.mu.toFixed(2))
    setMass(r.s.mass)
  }

  return (
    <Card
      title={`Build a car for ${base.notes.name}`}
      color={color}
      note="Move the sliders and the whole lap is re-simulated: the grey dashed line is the standard car, the blue line is yours. The lower graph is the running time difference: where it slopes down you are gaining, where it climbs you are losing. Watch where each change pays off, then compare with the sensitivity bars."
    >
      <div className="flex flex-wrap gap-1.5">
        {presets.map((p) => (
          <Btn key={p.label} onClick={() => apply(p)}>{p.label}</Btn>
        ))}
        <Btn onClick={reset} disabled={same}>Reset</Btn>
      </div>
      <div className="flex flex-wrap gap-3">
        <Slider label="wing level (0 = skinny, 1 = full)" value={wing} min={0} max={1} step={0.05} onChange={setWing} show={wing.toFixed(2)} />
        <Slider label="power at the wheels (kW)" value={power} min={500} max={800} step={5} onChange={setPower} />
        <Slider label="tyre grip (μ)" value={mu} min={1.2} max={2.4} step={0.02} onChange={setMu} show={mu.toFixed(2)} />
        <Slider label="car mass (kg)" value={mass} min={740} max={880} step={2} onChange={setMass} />
      </div>
      <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-4">
        <Stat label="your lap" value={mmss(cur.sim.lapTime)} tone={color} />
        <Stat label="against the standard car" value={`${dt >= 0 ? '+' : ''}${f2(dt)} s`} tone={dt < -0.005 ? '#2f9e6e' : dt > 0.005 ? '#d9534f' : undefined} />
        <Stat label="top speed" value={`${f0(cur.sim.vMax * 3.6)} km/h`} />
        <Stat label="downforce at 250 km/h" value={`${f2((0.5 * cur.sim.rho * setup.clA * (250 / 3.6) ** 2) / (setup.mass * 9.81))}× weight`} />
      </div>
      <div className="grid grid-cols-3 gap-1.5">
        {cur.sectors.map((s, k) => {
          const d = s.time - base.sectors[k].time
          return <Stat key={s.n} label={`sector ${s.n}`} value={`${d >= 0 ? '+' : ''}${f2(d)} s`} tone={SECTOR_COLORS[k]} />
        })}
      </div>
      <TraceChart a={cur} cursor={cursor} onCursor={setCursor} title="Speed" unit="km/h" y={[0, Math.ceil(Math.max(cur.sim.vMax, base.sim.vMax) * 3.6 / 50) * 50]} series={[{ label: 'standard car', values: kmhBase, color: '#8a8478', dashed: true, width: 1.5 }, { label: 'your car', values: kmhNow, color: '#3b6fd8', width: 2 }]} height={170} />
      <TraceChart a={cur} cursor={cursor} onCursor={setCursor} title="Time gained (down) or lost (up) so far" unit="s" y={[-spread, spread]} zero markers={false} series={[{ label: 'running difference', values: delta, color: color, fill: true }]} height={120} />
    </Card>
  )
}
