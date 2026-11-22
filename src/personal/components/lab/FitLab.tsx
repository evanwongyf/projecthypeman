import { useMemo, useState } from 'react'
import type { Block } from '../../lib/archive/guide'
import { PlotChart } from '../finance/PlotChart'
import { Card, Pills, Slider, Stat } from './kit'

type FitBlockType = Extract<Block, { t: 'fit-lab' }>

export default function FitLab({ block, color }: { block: FitBlockType; color: string }) {
  switch (block.viz) {
    case 'macros':
      return <Macros color={color} />
    case 'volume':
      return <Volume color={color} />
    case 'periodisation':
      return <Periodisation color={color} />
    case 'banister':
      return <Banister color={color} />
    case 'fuelling':
      return <Fuelling color={color} />
  }
}

const ACTIVITY: [string, string, number][] = [['1.2', 'Desk, little exercise', 1.2], ['1.375', 'Light: 1–3 sessions', 1.375], ['1.55', 'Moderate: 3–5 sessions', 1.55], ['1.725', 'Hard: 6–7 sessions', 1.725]]

function Macros({ color }: { color: string }) {
  const [sex, setSex] = useState<'m' | 'f'>('m')
  const [age, setAge] = useState(25)
  const [h, setH] = useState(172)
  const [w, setW] = useState(68)
  const [act, setAct] = useState('1.55')
  const [goal, setGoal] = useState<'cut' | 'hold' | 'lean' | 'bulk'>('lean')
  const [prot, setProt] = useState(1.8)
  const [fatPct, setFatPct] = useState(25)
  const bmr = 10 * w + 6.25 * h - 5 * age + (sex === 'm' ? 5 : -161)
  const tdee = bmr * Number(act)
  const adj = { cut: -0.15, hold: 0, lean: 0.08, bulk: 0.15 }[goal]
  const kcal = tdee * (1 + adj)
  const pG = prot * w
  const fG = (kcal * (fatPct / 100)) / 9
  const cG = Math.max(0, (kcal - pG * 4 - fG * 9) / 4)
  return (
    <Card title="Calories and macronutrients for your goal" color={color} note="Muscle gain needs energy and protein; fat loss needs an energy deficit with enough protein to protect muscle. This calculator uses the Mifflin–St Jeor equation for resting energy, multiplies by an activity factor for total daily energy expenditure (TDEE), adds a modest surplus or deficit, sets protein in grams per kilogram of body weight, takes fat as a share of calories, and fills the rest with carbohydrate. It gives a starting estimate to adjust against the scale over two to three weeks, not a prescription.">
      <div className="flex flex-wrap gap-3">
        <Pills label="sex" value={sex} onChange={setSex} options={[['m', 'Male'], ['f', 'Female']]} />
        <Slider label="age" value={age} min={16} max={70} step={1} onChange={setAge} />
        <Slider label="height (cm)" value={h} min={140} max={205} step={1} onChange={setH} />
        <Slider label="body weight (kg)" value={w} min={40} max={140} step={1} onChange={setW} />
      </div>
      <Pills label="activity" value={act} onChange={setAct} options={ACTIVITY.map(([v, l]) => [v, l] as [string, string])} />
      <Pills label="goal" value={goal} onChange={setGoal} options={[['cut', 'Fat loss −15%'], ['hold', 'Maintain'], ['lean', 'Lean gain +8%'], ['bulk', 'Faster gain +15%']]} />
      <div className="flex flex-wrap gap-3">
        <Slider label="protein (g per kg body weight)" value={prot} min={1.2} max={2.6} step={0.1} onChange={setProt} show={`${prot.toFixed(1)} g/kg`} />
        <Slider label="fat (% of calories)" value={fatPct} min={15} max={40} step={1} onChange={setFatPct} />
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="resting energy (BMR)" value={`${Math.round(bmr)} kcal`} />
        <Stat label="maintenance (TDEE)" value={`${Math.round(tdee)} kcal`} />
        <Stat label="target intake" value={`${Math.round(kcal)} kcal`} tone={color} />
        <Stat label="rate of weight change" value={`${(((kcal - tdee) * 7) / 7700).toFixed(2)} kg/week`} />
      </div>
      <div className="grid grid-cols-3 gap-2">
        <Stat label="protein" value={`${Math.round(pG)} g (${Math.round(pG / 4 > 0 ? ((pG * 4) / kcal) * 100 : 0)}%)`} tone={color} />
        <Stat label="fat" value={`${Math.round(fG)} g (${fatPct}%)`} />
        <Stat label="carbohydrate" value={`${Math.round(cG)} g (${Math.round(((cG * 4) / kcal) * 100)}%)`} />
      </div>
      <p className="text-xs" style={{ color: 'var(--ink-soft)' }}>In four meals, protein is about {Math.round(pG / 4)} g each, comfortably above the roughly 0.3 g/kg ({Math.round(0.3 * w)} g) per meal that maximally stimulates muscle protein synthesis.</p>
    </Card>
  )
}

function Volume({ color }: { color: string }) {
  const [sets, setSets] = useState(12)
  const [sessions, setSessions] = useState(2)
  const gain = (s: number) => 100 * (1 - Math.exp(-s / 9)) - Math.max(0, s - 22) ** 2 * 0.12
  const per = sets / sessions
  const marg = gain(sets + 1) - gain(sets)
  const zone = sets < 6 ? 'below the minimum effective dose for most trainees' : sets <= 10 ? 'productive: a good start' : sets <= 20 ? 'near the productive range for many' : 'high: recovery becomes the limit'
  return (
    <Card title="Training volume and diminishing returns (illustrative model)" color={color} note="Meta-analyses find a dose-response relationship between weekly hard sets per muscle and growth: more sets generally produce more growth, with clearly diminishing returns, and eventually more is no better or worse as recovery runs out. The curve here is a smooth illustration of that shape, not a measurement of you. The numbers that matter in practice are the weekly sets per muscle group, how they are split across sessions, and how close to failure each set is taken.">
      <div className="flex flex-wrap gap-3">
        <Slider label="hard sets per muscle per week" value={sets} min={0} max={36} step={1} onChange={setSets} />
        <Slider label="sessions per week for that muscle" value={sessions} min={1} max={5} step={1} onChange={setSessions} />
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="sets per session" value={per.toFixed(1)} tone={per > 10 ? '#d9534f' : color} />
        <Stat label="relative growth (illustrative)" value={`${gain(sets).toFixed(0)} / 100`} />
        <Stat label="gain from one more set" value={`${marg >= 0 ? '+' : ''}${marg.toFixed(1)}`} />
        <Stat label="zone" value={zone} />
      </div>
      <PlotChart block={{ t: 'plot', title: 'Relative growth against weekly sets (illustrative)', x: [0, 36], y: [0, 100], xLabel: 'hard sets per muscle per week', yLabel: 'relative growth', curves: [{ f: gain, color, label: 'dose-response' }], vlines: [{ x: 6, label: '~6' }, { x: 10, label: '~10' }, { x: 20, label: '~20' }], points: [{ x: sets, y: gain(sets), label: 'you' }] }} />
    </Card>
  )
}

function Periodisation({ color }: { color: string }) {
  const [kind, setKind] = useState<'linear' | 'dup' | 'block'>('linear')
  const weeks = 12
  const rows = useMemo(() => {
    const vol: [number, number][] = []
    const inten: [number, number][] = []
    for (let w = 1; w <= weeks; w++) {
      const deload = w % 4 === 0
      let v = 0
      let i = 0
      if (kind === 'linear') {
        i = 65 + (25 * (w - 1)) / (weeks - 1)
        v = 100 - (55 * (w - 1)) / (weeks - 1)
      } else if (kind === 'dup') {
        const day = (w - 1) % 3
        i = [70, 80, 88][day]
        v = [100, 80, 60][day]
      } else {
        const blk = Math.floor((w - 1) / 4)
        i = [68, 80, 92][blk]
        v = [100, 75, 50][blk]
      }
      if (deload) {
        v *= 0.55
        i -= 6
      }
      vol.push([w, v])
      inten.push([w, i])
    }
    return { vol, inten }
  }, [kind])
  return (
    <Card title="Periodisation: how volume and intensity change over a plan" color={color} note="Periodisation plans the variation of training over weeks and months. In linear periodisation, volume falls while intensity (load as a percentage of your maximum) rises. In undulating schemes they vary within each week. In block periodisation, a block emphasises one quality at a time, accumulation then intensification then realisation. A planned lighter deload week every few weeks allows fatigue to dissipate. Studies find periodised plans beat non-periodised ones modestly, and the differences between the types of periodisation are small compared with consistency and effort.">
      <Pills label="model" value={kind} onChange={setKind} options={[['linear', 'Linear'], ['dup', 'Undulating (varies weekly)'], ['block', 'Block']]} />
      <PlotChart block={{ t: 'plot', title: '12 weeks of training, deloads every fourth week', x: [1, weeks], y: [30, 105], xLabel: 'week', yLabel: 'relative load (volume as % of peak; intensity as % of max)', data: [{ pts: rows.vol, color, label: 'volume', dots: true }, { pts: rows.inten, color: '#d9534f', label: 'intensity (% of max)', dots: true, dashed: true }] }} />
    </Card>
  )
}

function Banister({ color }: { color: string }) {
  const [weekly, setWeekly] = useState(100)
  const [taper, setTaper] = useState(2)
  const [taperCut, setTaperCut] = useState(50)
  const days = 112
  const sim = useMemo(() => {
    const t1 = 42
    const t2 = 7
    const k1 = 1
    const k2 = 2
    const fit: [number, number][] = []
    const fat: [number, number][] = []
    const perf: [number, number][] = []
    let F = 0
    let G = 0
    const w = weekly / 7
    for (let d = 1; d <= days; d++) {
      const inTaper = d > days - taper * 7
      const load = (inTaper ? w * (1 - taperCut / 100) : w) * (d % 7 === 0 ? 0.3 : 1.1)
      F = F * Math.exp(-1 / t1) + load
      G = G * Math.exp(-1 / t2) + load
      fit.push([d, k1 * F])
      fat.push([d, k2 * G])
      perf.push([d, k1 * F - k2 * G])
    }
    return { fit, fat, perf }
  }, [weekly, taper, taperCut])
  const peak = sim.perf.reduce((a, b) => (b[1] > a[1] ? b : a))
  return (
    <Card title="The fitness–fatigue model and why tapering works" color={color} note="Banister’s model treats each training session as adding to two effects that decay at different speeds: a slowly fading ‘fitness’ benefit (time constant about 42 days) and a quickly fading ‘fatigue’ cost (about 7 days, and larger per unit of load). Performance is fitness minus fatigue. Because fatigue disappears faster, cutting training in the last one to three weeks lets performance rise to a peak: a taper. The parameters vary between people and the model is a simplification, but it explains why heavy training can lower performance in the short term while building it in the long term.">
      <div className="flex flex-wrap gap-3">
        <Slider label="weekly training load (arbitrary units)" value={weekly} min={40} max={200} step={5} onChange={setWeekly} />
        <Slider label="taper length (weeks)" value={taper} min={0} max={4} step={1} onChange={setTaper} />
        <Slider label="load reduction in taper (%)" value={taperCut} min={20} max={80} step={5} onChange={setTaperCut} />
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        <Stat label="performance peak on day" value={`${peak[0]} of ${days}`} tone={color} />
        <Stat label="peak performance index" value={peak[1].toFixed(0)} />
        <Stat label="race day performance index" value={sim.perf[days - 1][1].toFixed(0)} />
      </div>
      <PlotChart block={{ t: 'plot', title: '16 weeks of training', x: [1, days], y: [Math.min(...sim.perf.map((p) => p[1]), 0) - 10, Math.max(...sim.fit.map((p) => p[1])) + 10], xLabel: 'day', yLabel: 'index', data: [{ pts: sim.fit, color: '#2f9e6e', label: 'fitness' }, { pts: sim.fat, color: '#d9534f', label: 'fatigue', dashed: true }, { pts: sim.perf, color, label: 'performance (fitness − fatigue)' }] }} />
    </Card>
  )
}

function Fuelling({ color }: { color: string }) {
  const [hours, setHours] = useState(2)
  const [intensity, setIntensity] = useState<'easy' | 'mod' | 'hard'>('mod')
  const [mass, setMass] = useState(68)
  const [sweat, setSweat] = useState(1.0)
  const [temp, setTemp] = useState<'cool' | 'hot'>('hot')
  const carbHr = hours < 1 ? 0 : hours <= 2 ? (intensity === 'easy' ? 30 : 45) : hours <= 2.5 ? 60 : 90
  const sweatRate = sweat * (temp === 'hot' ? 1 : 0.7)
  const fluidHr = Math.min(sweatRate * 0.7, 1)
  const naHr = sweatRate * 800
  const carbBurnHr = { easy: 40, mod: 70, hard: 110 }[intensity] * (mass / 68)
  const store = 450 * (mass / 68) // g of glycogen, muscle + liver, trained athlete
  const without = store / carbBurnHr
  const loss = Math.max(0, sweatRate - fluidHr) * hours
  return (
    <Card title="Fuelling and hydrating for endurance (estimates)" color={color} note="Muscle and liver glycogen hold roughly 400 to 500 g of carbohydrate (about 1,600 to 2,000 kcal), enough for 1.5 to 2 hours of hard effort. Beyond about an hour, eating carbohydrate during exercise spares glycogen and delays fatigue: commonly 30 to 60 g per hour up to 2.5 hours, and up to 90 g per hour beyond that when mixing glucose and fructose, which use different gut transporters. Sweat losses vary widely, so measure yours by weighing before and after a session. The figures here are rule-of-thumb starting points, not individual advice.">
      <div className="flex flex-wrap gap-3">
        <Slider label="duration (hours)" value={hours} min={0.5} max={6} step={0.5} onChange={setHours} />
        <Slider label="body mass (kg)" value={mass} min={40} max={110} step={1} onChange={setMass} />
        <Slider label="your sweat rate in mild conditions (L per hour)" value={sweat} min={0.4} max={2.0} step={0.1} onChange={setSweat} />
      </div>
      <div className="flex flex-wrap gap-3">
        <Pills label="intensity" value={intensity} onChange={setIntensity} options={[['easy', 'Easy (zone 2)'], ['mod', 'Moderate / tempo'], ['hard', 'Hard / race effort']]} />
        <Pills label="conditions" value={temp} onChange={setTemp} options={[['cool', 'Cool or indoors'], ['hot', 'Hot and humid (e.g. Singapore)']]} />
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="carbohydrate during exercise" value={`${carbHr} g/h (${carbHr * hours} g total)`} tone={color} />
        <Stat label="fluid per hour" value={`${Math.round(fluidHr * 1000)} ml`} />
        <Stat label="sodium per hour (≈800 mg/L sweat)" value={`${Math.round(naHr * (fluidHr / sweatRate))} mg`} />
        <Stat label="estimated sweat loss" value={`${(sweatRate * hours).toFixed(1)} L`} />
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        <Stat label="glycogen store (rough)" value={`${Math.round(store)} g`} />
        <Stat label="hours until glycogen is empty, no feeding" value={`${without.toFixed(1)} h`} />
        <Stat label="body-mass loss if you drink as suggested" value={`${((loss / mass) * 100).toFixed(1)}%`} />
      </div>
      <p className="text-xs" style={{ color: 'var(--ink-soft)' }}>Aim to finish within about 2% of starting body mass. Losses much beyond that, especially in heat, reduce performance and raise heat illness risk; drinking far more than you sweat risks hyponatraemia.</p>
    </Card>
  )
}
