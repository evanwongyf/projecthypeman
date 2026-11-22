import { useState } from 'react'
import { PlotChart } from '../../finance/PlotChart'
import { Btn, Card, Pills, Slider, Stat, soft } from '../shared'

const f1 = (n: number) => (Number.isFinite(n) ? n.toFixed(1) : '–')

// ── F1 downforce and drag ──────────────────────────────────────────────────

export function DownforceExplorer({ color }: { color: string }) {
  const [speed, setSpeed] = useState(250)
  const [drs, setDrs] = useState(false)
  // Simplified coefficients (illustrative, tuned to the right order of magnitude for a
  // modern F1 car: roughly 1,800 kg of downforce and under 1,000 kg of drag at 350 km/h).
  const kDown = 0.15 // N per (km/h)^2
  const kDrag = 0.08
  const dragCut = drs ? 0.72 : 1 // DRS removes roughly a quarter of the drag
  const downCut = drs ? 0.88 : 1 // and a smaller share of the rear downforce
  const downforceN = kDown * speed * speed * downCut
  const dragN = kDrag * speed * speed * dragCut
  const weightN = 798 * 9.81 // 2024 minimum car+driver weight, kg
  const totalLoadKg = (weightN + downforceN) / 9.81
  // Illustrative max cornering speed for a fixed-radius corner, limited by tyre grip.
  const muTyre = 1.6
  const cornerRadius = 120
  const vCornerMs = Math.sqrt((muTyre * (weightN + downforceN) * cornerRadius) / 798)
  const vCornerKmh = vCornerMs * 3.6
  return (
    <Card title="Downforce, drag and DRS" color={color} note="Both downforce (which pushes the car onto the track, adding grip) and aerodynamic drag (which resists forward motion) grow with the square of speed, so they matter far more at 300 km/h than at 100. DRS opens a flap in the rear wing on straights to cut drag for more top speed, at a small cost in rear downforce, which is why it is switched off again before braking into a corner.">
      <PlotChart
        block={{
          t: 'plot',
          x: [0, 350],
          y: [0, 20000],
          xLabel: 'speed (km/h)',
          yLabel: 'force (newtons)',
          curves: [
            { f: (v: number) => kDown * v * v, color: '#3b6fd8', label: 'downforce, DRS closed' },
            { f: (v: number) => kDown * v * v * 0.88, color: '#3b6fd8', dashed: true, label: 'downforce, DRS open' },
            { f: (v: number) => kDrag * v * v, color: '#e07b2a', label: 'drag, DRS closed' },
            { f: (v: number) => kDrag * v * v * 0.72, color: '#e07b2a', dashed: true, label: 'drag, DRS open' },
          ],
          vlines: [{ x: speed, label: `${speed} km/h` }],
        }}
      />
      <div className="flex flex-wrap items-center gap-3">
        <Slider label="speed (km/h)" value={speed} min={50} max={350} step={5} onChange={setSpeed} />
        <Btn onClick={() => setDrs(!drs)} active={drs}>DRS {drs ? 'open' : 'closed'}</Btn>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="downforce" value={`${Math.round(downforceN)} N`} tone={color} />
        <Stat label="drag" value={`${Math.round(dragN)} N`} />
        <Stat label="total vertical load" value={`${Math.round(totalLoadKg)} kg`} />
        <Stat label="theoretical max corner speed*" value={`${f1(vCornerKmh)} km/h`} />
      </div>
      <p className="text-xs" style={soft}>*For an illustrative {cornerRadius} m-radius corner with a tyre friction coefficient of {muTyre}, at the current speed&apos;s downforce level, a simplification of real tyre behaviour, which is far more complex, but it shows the right idea: more downforce at a given corner allows a higher cornering speed.</p>
    </Card>
  )
}

// ── tyre degradation and strategy ──────────────────────────────────────────

const COMPOUNDS: Record<string, { name: string; base: number; deg: number; color: string }> = {
  soft: { name: 'Soft', base: 92.0, deg: 0.09, color: '#d9534f' },
  medium: { name: 'Medium', base: 92.6, deg: 0.05, color: '#f0c419' },
  hard: { name: 'Hard', base: 93.3, deg: 0.025, color: '#8a6d1e' },
}

function stintTime(compound: string, laps: number) {
  const c = COMPOUNDS[compound]
  // Arithmetic series: base pace each lap, plus degradation accumulating lap by lap.
  return laps * c.base + c.deg * (laps * (laps - 1)) / 2
}

export function TyreStrategy({ color }: { color: string }) {
  const RACE_LAPS = 56
  const PIT_LOSS = 22 // seconds lost per pit stop, roughly typical for an F1 pit lane
  const [stintLaps, setStintLaps] = useState(20)
  const [compound, setCompound] = useState<'soft' | 'medium' | 'hard'>('medium')
  const c = COMPOUNDS[compound]
  const lapTimes = Array.from({ length: Math.min(stintLaps, 40) }, (_, i) => [i + 1, c.base + c.deg * i] as [number, number])

  const oneStop = (() => {
    // Soft-to-hard split roughly optimising for a single pit stop.
    const firstLaps = Math.round(RACE_LAPS * 0.38)
    const secondLaps = RACE_LAPS - firstLaps
    return stintTime('soft', firstLaps) + stintTime('hard', secondLaps) + PIT_LOSS
  })()
  const twoStop = (() => {
    const each = Math.round(RACE_LAPS / 3)
    const last = RACE_LAPS - 2 * each
    return stintTime('soft', each) + stintTime('medium', each) + stintTime('medium', last) + 2 * PIT_LOSS
  })()
  const noStop = stintTime('hard', RACE_LAPS)

  return (
    <Card title="Tyre degradation and pit strategy" color={color} note="Softer tyres grip better (a faster base lap time) but degrade faster, losing a little more time each lap as the stint goes on. A pit stop costs real time (track position and the stop itself) but resets the clock on a fresh, fast tyre, the whole art of strategy is picking when that trade pays off.">
      <Pills label="Compound" value={compound} options={[['soft', 'Soft'], ['medium', 'Medium'], ['hard', 'Hard']]} onChange={setCompound} />
      <PlotChart
        block={{
          t: 'plot',
          title: `Lap time over a stint on ${c.name.toLowerCase()} tyres`,
          x: [0, 40],
          y: [91, 97],
          xLabel: 'lap of the stint',
          yLabel: 'lap time (s)',
          curves: [{ f: (l: number) => c.base + c.deg * l, color: c.color }],
          data: [{ pts: lapTimes, dots: true, color: c.color }],
          vlines: [{ x: stintLaps, label: `pit after lap ${stintLaps}` }],
        }}
      />
      <Slider label="stint length before pitting (laps)" value={stintLaps} min={5} max={40} step={1} onChange={setStintLaps} />
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        <Stat label={`${stintLaps}-lap stint time`} value={`${(stintTime(compound, stintLaps) / 60).toFixed(1)} min`} tone={color} />
        <Stat label="pit stop cost" value={`${PIT_LOSS} s`} />
        <Stat label="degradation / lap" value={`+${c.deg.toFixed(3)} s`} />
      </div>
      <p className="text-xs font-bold">Comparing full-race strategies over {RACE_LAPS} laps (illustrative):</p>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
        <Stat label="no stop (hard only, illegal in a real race)" value={`${(noStop / 60).toFixed(2)} min`} />
        <Stat label="one stop (soft → hard)" value={`${(oneStop / 60).toFixed(2)} min`} tone={oneStop < twoStop ? color : undefined} />
        <Stat label="two stops (soft → med → med)" value={`${(twoStop / 60).toFixed(2)} min`} tone={twoStop < oneStop ? color : undefined} />
      </div>
      <p className="text-xs" style={soft}>Real teams run this exact kind of lap-time model, tuned with real data, thousands of times before and during a race to choose a strategy.</p>
    </Card>
  )
}
