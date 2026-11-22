import { useState } from 'react'
import { Card, Slider, Stat, soft } from './shared'

// ── the heart and circulation ────────────────────────────────────────────

const PATH_RIGHT = 'M 160,278 C 90,278 48,205 48,150 C 48,95 90,38 160,28'
const PATH_LEFT = 'M 160,28 C 230,38 272,95 272,150 C 272,205 230,278 160,278'

function FlowDots({ path, color, dur, count = 3 }: { path: string; color: string; dur: number; count?: number }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <circle key={i} r={5} fill={color} stroke="var(--ink)" strokeWidth={1}>
          <animateMotion dur={`${dur}s`} begin={`${(i * dur) / count}s`} repeatCount="indefinite" path={path} />
        </circle>
      ))}
    </>
  )
}

export function HeartFlow({ color }: { color: string }) {
  const [bpm, setBpm] = useState(70)
  const beatDur = 60 / bpm
  const strokeVolume = 70
  const cardiacOutput = ((bpm * strokeVolume) / 1000).toFixed(1)

  return (
    <Card title="The heart and circulation" color={color} note="One continuous loop, two pumps: the right side of the heart pushes oxygen-poor blood to the lungs (the pulmonary circuit), and the left side pushes newly oxygenated blood out to the whole body (the systemic circuit), both halves beat together, once per heartbeat.">
      <svg viewBox="0 0 320 320" className="mx-auto block h-auto w-full max-w-sm" role="img" aria-label="Heart and circulation diagram">
        <rect x={115} y={6} width={90} height={38} rx={10} fill="color-mix(in srgb, #3b6fd8 16%, var(--surface))" stroke="var(--ink)" strokeWidth={2} />
        <text x={160} y={30} textAnchor="middle" fontSize={12} fontWeight={700}>Lungs</text>
        <rect x={110} y={282} width={100} height={34} rx={10} fill="color-mix(in srgb, #d9534f 16%, var(--surface))" stroke="var(--ink)" strokeWidth={2} />
        <text x={160} y={303} textAnchor="middle" fontSize={12} fontWeight={700}>Rest of the body</text>

        <path d={PATH_RIGHT} fill="none" stroke="#3b6fd8" strokeWidth={5} strokeLinecap="round" opacity={0.3} />
        <path d={PATH_LEFT} fill="none" stroke="#d9534f" strokeWidth={5} strokeLinecap="round" opacity={0.3} />
        <FlowDots path={PATH_RIGHT} color="#3b6fd8" dur={beatDur * 3} />
        <FlowDots path={PATH_LEFT} color="#d9534f" dur={beatDur * 3} />

        {[
          { x: 48, y: 205, label: 'RA', sub: 'right atrium' },
          { x: 48, y: 95, label: 'RV', sub: 'right ventricle' },
          { x: 272, y: 95, label: 'LA', sub: 'left atrium' },
          { x: 272, y: 205, label: 'LV', sub: 'left ventricle' },
        ].map((c) => (
          <g key={c.label} style={{ transformOrigin: `${c.x}px ${c.y}px`, animation: `med-heartbeat ${beatDur}s ease-in-out infinite` }}>
            <circle cx={c.x} cy={c.y} r={26} fill="var(--surface)" stroke="var(--ink)" strokeWidth={2.5} />
            <text x={c.x} y={c.y - 1} textAnchor="middle" fontSize={13} fontWeight={700}>{c.label}</text>
          </g>
        ))}
        <text x={160} y={155} textAnchor="middle" fontSize={10} fill="var(--ink-soft)">pulmonary (right) ⇄ systemic (left)</text>
      </svg>
      <style>{`@keyframes med-heartbeat { 0%, 100% { transform: scale(1) } 35% { transform: scale(1.12) } 55% { transform: scale(0.97) } }`}</style>

      <Slider label="heart rate" value={bpm} min={40} max={180} step={1} onChange={setBpm} show={`${bpm} bpm`} />
      <div className="grid grid-cols-3 gap-2">
        <Stat label="heart rate" value={`${bpm} bpm`} tone={color} />
        <Stat label="typical stroke volume" value="70 mL/beat" />
        <Stat label="≈ cardiac output" value={`${cardiacOutput} L/min`} />
      </div>
      <p className="text-xs leading-relaxed" style={soft}>
        Cardiac output (blood pumped per minute) is simply heart rate × stroke volume, raise the slider and watch it climb, exactly what happens during exercise, when both heart rate and stroke volume increase together to move far more blood per minute than at rest (typically 4–6 L/min resting, up to 20–25 L/min in a trained athlete at maximum effort).
      </p>
    </Card>
  )
}

const BP_CATEGORIES = [
  { name: 'Normal', range: 'below 120 / 80', color: '#2f9e6e' },
  { name: 'Elevated', range: '120–129 / below 80', color: '#8a6d1e' },
  { name: 'High (stage 1)', range: '130–139 / 80–89', color: '#e07b2a' },
  { name: 'High (stage 2)', range: '140+ / 90+', color: '#d9534f' },
  { name: 'Hypertensive crisis', range: 'above 180 / above 120', color: '#7b4fc9' },
]

export function BloodPressureChart({ color }: { color: string }) {
  return (
    <Card title="Reading a blood pressure number" color={color} note="Blood pressure is written systolic/diastolic, the pressure in the arteries while the heart contracts (systole) over the pressure while it relaxes between beats (diastole). Both numbers matter, and either one alone crossing a threshold is enough to move up a category.">
      <div className="flex flex-col gap-1.5">
        {BP_CATEGORIES.map((c) => (
          <div key={c.name} className="flex items-center justify-between gap-2 rounded-[var(--radius)] border px-3 py-2" style={{ borderColor: 'var(--line)', background: `color-mix(in srgb, ${c.color} 18%, var(--surface))` }}>
            <span className="text-sm font-bold">{c.name}</span>
            <span className="font-mono text-xs">{c.range} mmHg</span>
          </div>
        ))}
      </div>
      <p className="text-xs leading-relaxed" style={soft}>
        Figures follow the American Heart Association's categories. A single high reading is not a diagnosis, blood pressure genuinely varies through the day with stress, activity and even the conversation of being measured ("white coat" effect), which is why clinical guidelines rely on an average of several readings over time, not one number.
      </p>
    </Card>
  )
}

// ── the lungs and breathing ──────────────────────────────────────────────

export function LungAirflow({ color }: { color: string }) {
  const [rate, setRate] = useState(14)
  const breathDur = 60 / rate
  const [inhaling, setInhaling] = useState(true)

  return (
    <Card title="The lungs and breathing" color={color} note="Breathing moves air in and out; the actual work happens at the alveoli, millions of tiny air sacs where oxygen crosses into the blood and carbon dioxide crosses out, both simply following the gas that is less concentrated on the other side (diffusion).">
      <svg viewBox="0 0 320 260" className="mx-auto block h-auto w-full max-w-sm" role="img" aria-label="Lungs and airflow diagram">
        <line x1={160} y1={10} x2={160} y2={60} stroke="var(--ink)" strokeWidth={6} strokeLinecap="round" />
        <path d="M 160,60 L 110,100" stroke="var(--ink)" strokeWidth={5} strokeLinecap="round" fill="none" />
        <path d="M 160,60 L 210,100" stroke="var(--ink)" strokeWidth={5} strokeLinecap="round" fill="none" />
        {[0, 1].map((side) => {
          const dir = side === 0 ? -1 : 1
          const cx = 160 + dir * 80
          return (
            <g key={side} style={{ transformOrigin: `${cx}px 150px`, animation: `med-breathe ${breathDur}s ease-in-out infinite` }}>
              <ellipse cx={cx} cy={150} rx={55} ry={75} fill={`color-mix(in srgb, ${color} 18%, var(--surface))`} stroke="var(--ink)" strokeWidth={2.5} />
              {Array.from({ length: 6 }).map((_, i) => (
                <circle key={i} cx={cx + dir * (10 + (i % 3) * 14)} cy={110 + Math.floor(i / 3) * 70} r={7} fill="color-mix(in srgb, #e07b2a 30%, var(--surface))" stroke="var(--ink)" strokeWidth={1.5} />
              ))}
            </g>
          )
        })}
        <circle r={5} fill="#3b6fd8">
          <animateMotion dur={`${breathDur}s`} repeatCount="indefinite" path="M 160,20 L 160,140" keyPoints="0;1;0" keyTimes="0;0.5;1" calcMode="linear" />
        </circle>
        <text x={160} y={235} textAnchor="middle" fontSize={11} fontWeight={700} fill="var(--ink)">
          alveoli (gas exchange) shown as small circles inside each lung
        </text>
      </svg>
      <style>{`@keyframes med-breathe { 0%, 100% { transform: scale(0.88) } 50% { transform: scale(1.04) } }`}</style>

      <Slider label="breathing rate" value={rate} min={6} max={40} step={1} onChange={setRate} show={`${rate} breaths/min`} />
      <div className="flex gap-2">
        <button type="button" onClick={() => setInhaling(true)} className="rounded-full border px-3 py-1 text-xs font-bold" style={{ borderColor: 'var(--line)', background: inhaling ? 'var(--ink)' : 'var(--surface)', color: inhaling ? 'var(--surface)' : 'var(--ink)' }}>
          inhale: O₂ in
        </button>
        <button type="button" onClick={() => setInhaling(false)} className="rounded-full border px-3 py-1 text-xs font-bold" style={{ borderColor: 'var(--line)', background: !inhaling ? 'var(--ink)' : 'var(--surface)', color: !inhaling ? 'var(--surface)' : 'var(--ink)' }}>
          exhale: CO₂ out
        </button>
      </div>
      <p className="text-xs leading-relaxed" style={soft}>
        {inhaling
          ? 'Breathing in: the diaphragm contracts and flattens, the ribcage expands, and air pressure inside the lungs drops below atmospheric pressure, air rushes in to equalise it, carrying oxygen down to the alveoli, where it diffuses into the blood because blood arriving from the body is relatively oxygen-poor.'
          : 'Breathing out: the diaphragm relaxes back into its dome shape, the ribcage contracts, and air pressure inside the lungs rises above atmospheric pressure, pushing air (now relatively carbon-dioxide-rich, having picked it up from the blood) back out.'}
      </p>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        <Stat label="breathing rate" value={`${rate}/min`} tone={color} />
        <Stat label="typical resting range" value="12–20/min" />
        <Stat label="alveoli in both lungs" value="≈480 million" />
      </div>
    </Card>
  )
}
