import { useMemo, useRef, useState } from 'react'
import type { ReactElement } from 'react'
import { LEADS, RHYTHMS, TERRITORIES, TWELVE_LEAD_PATTERNS, makeStrip, rhythmInfo, stOf } from '../../lib/medicine/ecg'
import type { LeadId, RhythmId, Strip } from '../../lib/medicine/ecg'
import { Btn, Card, Pills, Slider, soft } from '../sports/shared'
import { AnnotLayer, AnnotToolbar, useAnnotations } from './annotate'
import type { Tool } from './annotate'

const PAPER = '#fff4f1'
const MINOR = '#f6c3bd'
const MAJOR = '#e88f88'

// Draws ECG paper (1 mm squares, 5 mm heavy lines) for a viewBox measured in millimetres.
function Grid({ w, h }: { w: number; h: number }) {
  const lines: ReactElement[] = []
  for (let x = 0; x <= w; x++) lines.push(<line key={`x${x}`} x1={x} y1={0} x2={x} y2={h} stroke={x % 5 === 0 ? MAJOR : MINOR} strokeWidth={x % 5 === 0 ? 0.22 : 0.1} />)
  for (let y = 0; y <= h; y++) lines.push(<line key={`y${y}`} x1={0} y1={y} x2={w} y2={y} stroke={y % 5 === 0 ? MAJOR : MINOR} strokeWidth={y % 5 === 0 ? 0.22 : 0.1} />)
  return (
    <g>
      <rect x={0} y={0} width={w} height={h} fill={PAPER} />
      {lines}
    </g>
  )
}

// One trace as an SVG path, 25 mm/s and 10 mm/mV, baseline at y0 (mm).
function tracePath(mv: number[], fs: number, from: number, to: number, x0: number, y0: number) {
  const i0 = Math.max(0, Math.floor(from * fs)), i1 = Math.min(mv.length, Math.ceil(to * fs))
  let d = ''
  for (let i = i0; i < i1; i++) d += `${i === i0 ? 'M' : 'L'}${(x0 + ((i - i0) / fs) * 25).toFixed(2)} ${(y0 - mv[i] * 10).toFixed(2)}`
  return d
}

// ---------------------------------------------------------------------------------------------
// Strip lab
// ---------------------------------------------------------------------------------------------

export function EcgStripLab({ color, rhythm = 'sinus' as RhythmId }: { color: string; rhythm?: RhythmId }) {
  const [id, setId] = useState<RhythmId>(rhythm)
  const info = rhythmInfo(id)
  const [hr, setHr] = useState(info.hr ? info.hr[2] : 75)
  const [labels, setLabels] = useState(false)
  const [calOn, setCalOn] = useState(false)
  const [cal, setCal] = useState<[number, number]>([1.0, 1.8])
  const [on, setOn] = useState(false)
  const [tool, setTool] = useState<Tool>('box')
  const [pen, setPen] = useState('#2b6cd9')
  const [anns, setAnns] = useAnnotations(`studytubby-ecg-annot-${id}`)
  const drag = useRef<number | null>(null)
  const svgRef = useRef<SVGSVGElement>(null)
  const seconds = 6
  const strip: Strip = useMemo(() => makeStrip(id, { hr, seconds, lead: id === 'stemi-ant' ? 'V2' : 'II' }), [id, hr])
  const W = seconds * 25, H = 44, y0 = 24

  const pick = (e: React.PointerEvent) => {
    const r = svgRef.current!.getBoundingClientRect()
    return Math.min(seconds, Math.max(0, ((e.clientX - r.left) / r.width) * seconds))
  }
  const down = (e: React.PointerEvent) => {
    if (!calOn || on) return
    const t = pick(e)
    drag.current = Math.abs(t - cal[0]) < Math.abs(t - cal[1]) ? 0 : 1
    ;(e.target as Element).setPointerCapture?.(e.pointerId)
    setCal((c) => (drag.current === 0 ? [t, c[1]] : [c[0], t]))
  }
  const move = (e: React.PointerEvent) => {
    if (drag.current === null) return
    const t = pick(e)
    setCal((c) => (drag.current === 0 ? [t, c[1]] : [c[0], t]))
  }
  const up = () => (drag.current = null)

  const dt = Math.abs(cal[1] - cal[0])
  const marked = strip.beats.filter((b) => b.r > 0 && b.kind === 'normal').slice(1, 3)

  return (
    <Card title="ECG rhythm strip lab" color={color} note="A simulated lead II trace at the standard 25 mm/s and 10 mm/mV (one small square is 40 ms and 0.1 mV; one large square is 200 ms and 0.5 mV). Teaching traces, not patient recordings.">
      <div className="flex flex-wrap gap-1.5">
        {RHYTHMS.map((r) => (
          <button key={r.id} type="button" aria-pressed={r.id === id} onClick={() => { setId(r.id); if (r.hr) setHr(r.hr[2]) }} className="rounded-full border px-2.5 py-1 text-xs font-bold pointer-coarse:min-h-10" style={{ borderColor: 'var(--line)', background: r.id === id ? 'var(--ink)' : 'var(--surface)', color: r.id === id ? 'var(--surface)' : 'var(--ink)' }}>
            {r.name.replace(/ \(.*\)/, '')}
          </button>
        ))}
      </div>
      {info.hr && <Slider label="Heart rate" value={hr} min={info.hr[0]} max={info.hr[1]} step={1} onChange={setHr} show={`${hr} /min`} />}
      <div className="relative overflow-hidden rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)', aspectRatio: `${W} / ${H}` }}>
        <svg ref={svgRef} viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" className="absolute inset-0 h-full w-full" role="img" aria-label={`${info.name} rhythm strip`} onPointerDown={down} onPointerMove={move} onPointerUp={up} style={{ touchAction: calOn && !on ? 'none' : 'auto' }}>
          <Grid w={W} h={H} />
          <path d={tracePath(strip.mv, strip.fs, 0, seconds, 0, y0)} fill="none" stroke="#1a1a1a" strokeWidth={0.38} strokeLinejoin="round" />
          {labels &&
            marked.map((b, i) => (
              <g key={i} fontSize="2.6" fontWeight="700" fill="#1f4fbf">
                {b.pOn !== undefined && b.pOff !== undefined && (
                  <>
                    <text x={((b.pOn + b.pOff) / 2) * 25} y={y0 - 5.5} textAnchor="middle">P</text>
                    <path d={`M${b.pOn * 25} ${y0 + 8}H${b.qOn * 25}`} stroke="#1f4fbf" strokeWidth={0.4} />
                    <text x={((b.pOn + b.qOn) / 2) * 25} y={y0 + 11} textAnchor="middle" fontSize="2.2">PR</text>
                  </>
                )}
                <path d={`M${b.qOn * 25} ${y0 - 15.5}H${b.qOff * 25}`} stroke="#c0392b" strokeWidth={0.5} />
                <text x={((b.qOn + b.qOff) / 2) * 25} y={y0 - 17} textAnchor="middle" fill="#c0392b">QRS</text>
                <text x={((b.qOff + b.tOff) / 2) * 25 + 2} y={y0 - 8} textAnchor="middle" fill="#1b8a5a">T</text>
                <path d={`M${b.qOn * 25} ${y0 + 14}H${b.tOff * 25}`} stroke="#1b8a5a" strokeWidth={0.4} />
                <text x={((b.qOn + b.tOff) / 2) * 25} y={y0 + 17} textAnchor="middle" fill="#1b8a5a" fontSize="2.2">QT</text>
              </g>
            ))}
          {calOn && (
            <g>
              {cal.map((c, i) => (
                <g key={i}>
                  <line x1={c * 25} y1={0} x2={c * 25} y2={H} stroke="#2b6cd9" strokeWidth={0.5} strokeDasharray="1.5 1" />
                  <polygon points={`${c * 25 - 1.8},0 ${c * 25 + 1.8},0 ${c * 25},3.4`} fill="#2b6cd9" />
                </g>
              ))}
              <rect x={Math.min(cal[0], cal[1]) * 25} y={H - 3} width={dt * 25} height={3} fill="#2b6cd9" opacity={0.25} />
            </g>
          )}
        </svg>
        <AnnotLayer anns={anns} setAnns={setAnns} tool={tool} color={pen} aspect={W / H} active={on} />
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Btn onClick={() => setLabels(!labels)} active={labels}>
          Label P, QRS, T
        </Btn>
        <Btn onClick={() => setCalOn(!calOn)} active={calOn}>
          Calipers
        </Btn>
      </div>
      {calOn && (
        <p className="text-sm" style={soft}>
          Drag the two blue lines. Interval <b>{(dt * 1000).toFixed(0)} ms</b> = {((dt * 1000) / 40).toFixed(1)} small squares. If this were one R-R interval the rate would be <b>{dt > 0.05 ? Math.round(60 / dt) : '–'} per minute</b>.
        </p>
      )}
      <AnnotToolbar tool={tool} setTool={setTool} color={pen} setColor={setPen} anns={anns} setAnns={setAnns} on={on} setOn={setOn} tools={[['box', 'Box'], ['ellipse', 'Circle'], ['arrow', 'Arrow'], ['pen', 'Highlighter'], ['text', 'Label']]} />
      <div className="rounded-[var(--radius)] border p-3 text-sm" style={{ borderColor: info.urgent ? '#d9534f' : 'var(--ink)', background: 'var(--surface)' }}>
        <p className="font-bold">
          {info.name} {info.urgent && <span style={{ color: '#d9534f' }}>· can be dangerous</span>}
        </p>
        <p className="mt-1">{info.summary}</p>
        <ul className="mt-2 list-disc pl-5">
          {info.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
        <p className="mt-2 text-xs" style={soft}>
          Measured by the tool: rate about {strip.hr} /min · {strip.regular ? 'regular' : 'irregular'} rhythm{strip.pr ? ` · PR about ${strip.pr} ms` : ''} · QRS about {strip.qrs} ms
        </p>
      </div>
    </Card>
  )
}

// ---------------------------------------------------------------------------------------------
// Anatomy of one beat
// ---------------------------------------------------------------------------------------------

const PARTS: { id: string; label: string; from: number; to: number; y: [number, number]; text: string }[] = [
  { id: 'p', label: 'P wave', from: -0.2, to: -0.11, y: [-0.6, 0.4], text: 'Atrial depolarisation: the atria squeeze. Small and rounded, lasts under 120 ms.' },
  { id: 'pr', label: 'PR interval', from: -0.205, to: -0.04, y: [0.5, 0.9], text: 'From the start of the P wave to the start of the QRS: the time for the impulse to cross the AV node. Normal 120 to 200 ms (3 to 5 small squares).' },
  { id: 'qrs', label: 'QRS complex', from: -0.04, to: 0.05, y: [-0.5, 1.2], text: 'Ventricular depolarisation: the big squeeze. Narrow (under 120 ms), because the impulse spreads fast through the conducting system.' },
  { id: 'st', label: 'ST segment', from: 0.05, to: 0.16, y: [-0.4, 0.3], text: 'The flat line between the QRS and the T wave, when the ventricle is fully depolarised. It sits on the baseline; lifting or sagging suggests ischaemia or injury.' },
  { id: 't', label: 'T wave', from: 0.16, to: 0.34, y: [-0.4, 0.6], text: 'Ventricular repolarisation: the muscle resets. Usually upright in most leads, a smooth asymmetrical hump.' },
  { id: 'qt', label: 'QT interval', from: -0.04, to: 0.36, y: [-1.05, -0.7], text: 'From the start of the QRS to the end of the T wave: total ventricular activity. A long QT predisposes to dangerous arrhythmias; it is corrected for heart rate (QTc).' },
]

export function EcgAnatomy({ color }: { color: string }) {
  const [pick, setPick] = useState('qrs')
  const strip = useMemo(() => makeStrip('sinus', { hr: 60, seconds: 1.6, seed: 3 }), [])
  const rIdx = strip.beats.find((b) => b.r > 0.45)?.r ?? 0.6
  const W = 40 * 1.0, H = 52, x0 = 0
  void x0
  const part = PARTS.find((p) => p.id === pick)!
  // Window of 0.8 s around the beat: 80 mm wide at 100 mm/s (4x zoom).
  const from = rIdx - 0.32, to = rIdx + 0.48
  const scale = 100
  const vw = (to - from) * scale
  const trace = (() => {
    const mv = strip.mv, fs = strip.fs
    let d = ''
    for (let i = Math.floor(from * fs); i < Math.ceil(to * fs); i++) d += `${d ? 'L' : 'M'}${((i / fs - from) * scale).toFixed(2)} ${(26 - mv[i] * 22).toFixed(2)}`
    return d
  })()
  void W; void H
  const px = (rel: number) => (rel + 0.32) * scale
  return (
    <Card title="Anatomy of one heartbeat" color={color} note="Select a part to see what it means. The trace is magnified four times; each big square is 200 ms across.">
      <div className="flex flex-wrap gap-1.5">
        {PARTS.map((p) => (
          <button key={p.id} type="button" aria-pressed={p.id === pick} onClick={() => setPick(p.id)} className="rounded-full border px-3 py-1 text-xs font-bold pointer-coarse:min-h-10" style={{ borderColor: 'var(--line)', background: p.id === pick ? 'var(--ink)' : 'var(--surface)', color: p.id === pick ? 'var(--surface)' : 'var(--ink)' }}>
            {p.label}
          </button>
        ))}
      </div>
      <div className="overflow-hidden rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)' }}>
        <svg viewBox={`0 0 ${vw} 52`} className="block w-full" role="img" aria-label="One ECG beat with its parts labelled">
          <Grid w={vw} h={52} />
          <path d={trace} fill="none" stroke="#1a1a1a" strokeWidth={0.55} strokeLinejoin="round" />
          <rect x={px(part.from)} y={part.id === 'pr' || part.id === 'qt' ? (part.id === 'pr' ? 38 : 44) : 2} width={(part.to - part.from) * scale} height={part.id === 'pr' || part.id === 'qt' ? 3 : 48} fill="#2b6cd9" opacity={0.28} stroke="#2b6cd9" strokeWidth={0.6} />
          <text x={px(part.from)} y={part.id === 'qt' ? 42 : part.id === 'pr' ? 36 : 8} fontSize="4.6" fontWeight="700" fill="#1f4fbf">
            {part.label}
          </text>
        </svg>
      </div>
      <div className="rounded-[var(--radius)] border p-3 text-sm" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}>
        <p className="font-bold">{part.label}</p>
        <p className="mt-1 leading-relaxed">{part.text}</p>
      </div>
    </Card>
  )
}

// ---------------------------------------------------------------------------------------------
// Twelve leads
// ---------------------------------------------------------------------------------------------

const GRID_LEADS: LeadId[][] = [
  ['I', 'aVR', 'V1', 'V4'],
  ['II', 'aVL', 'V2', 'V5'],
  ['III', 'aVF', 'V3', 'V6'],
]
const TERR_COLOR: Record<string, string> = { anterior: '#d9534f', inferior: '#2b9d6e', lateral: '#7b4fc9' }

export function Ecg12Lead({ color, pattern = 'sinus' as RhythmId }: { color: string; pattern?: RhythmId }) {
  const [id, setId] = useState<RhythmId>(pattern)
  const [terr, setTerr] = useState(false)
  const [on, setOn] = useState(false)
  const [tool, setTool] = useState<Tool>('ellipse')
  const [pen, setPen] = useState('#2b6cd9')
  const [anns, setAnns] = useAnnotations(`studytubby-ecg12-annot-${id}`)
  const info = rhythmInfo(id)
  const leads = useMemo(() => Object.fromEntries(LEADS.map((l) => [l, makeStrip(id, { lead: l, seconds: 10, seed: 5 })])) as Record<LeadId, Strip>, [id])
  const W = 250, H = 108
  const colW = 62.5, rowH = 25
  const st = LEADS.filter((l) => Math.abs(stOf(id, l)) >= 0.08)
  const territoryOf = (l: LeadId) => Object.entries(TERRITORIES).find(([, v]) => v.leads.includes(l))?.[0]

  return (
    <Card title="Twelve-lead ECG" color={color} note="The standard layout: four columns of 2.5 seconds each (limb leads and chest leads) and a lead II rhythm strip underneath. Simulated, not a real patient.">
      <Pills value={id} options={TWELVE_LEAD_PATTERNS.map((p) => [p.id, p.name] as [RhythmId, string])} onChange={setId} label="Pattern" />
      <div className="relative overflow-hidden rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)', aspectRatio: `${W} / ${H}` }}>
        <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" className="absolute inset-0 h-full w-full" role="img" aria-label={`Twelve-lead ECG: ${info.name}`}>
          <Grid w={W} h={H} />
          {GRID_LEADS.map((row, r) =>
            row.map((l, c) => {
              const x0 = c * colW
              const y0 = r * rowH + 14
              const t = territoryOf(l)
              return (
                <g key={l}>
                  {terr && t && <rect x={x0 + 0.5} y={r * rowH + 1} width={colW - 1} height={rowH - 2} fill={TERR_COLOR[t]} opacity={0.14} />}
                  <path d={tracePath(leads[l].mv, 250, c * 2.5, (c + 1) * 2.5, x0, y0)} fill="none" stroke="#1a1a1a" strokeWidth={0.35} strokeLinejoin="round" />
                  <text x={x0 + 2} y={r * rowH + 5.5} fontSize="3.6" fontWeight="700" fill={st.includes(l) ? '#c0392b' : '#333'}>
                    {l}
                  </text>
                </g>
              )
            }),
          )}
          <path d={tracePath(leads.II.mv, 250, 0, 10, 0, 92)} fill="none" stroke="#1a1a1a" strokeWidth={0.35} strokeLinejoin="round" />
          <text x={2} y={80} fontSize="3.6" fontWeight="700" fill="#333">
            II (rhythm)
          </text>
        </svg>
        <AnnotLayer anns={anns} setAnns={setAnns} tool={tool} color={pen} aspect={W / H} active={on} />
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Btn onClick={() => setTerr(!terr)} active={terr}>
          Show territories
        </Btn>
        {terr && (
          <span className="flex flex-wrap gap-2 text-xs font-bold">
            {Object.entries(TERRITORIES).map(([k, v]) => (
              <span key={k} style={{ color: TERR_COLOR[k] }}>
                ■ {v.label}
              </span>
            ))}
          </span>
        )}
      </div>
      <AnnotToolbar tool={tool} setTool={setTool} color={pen} setColor={setPen} anns={anns} setAnns={setAnns} on={on} setOn={setOn} tools={[['box', 'Box'], ['ellipse', 'Circle'], ['arrow', 'Arrow'], ['pen', 'Highlighter'], ['text', 'Label']]} />
      <div className="rounded-[var(--radius)] border p-3 text-sm" style={{ borderColor: info.urgent ? '#d9534f' : 'var(--ink)', background: 'var(--surface)' }}>
        <p className="font-bold">{info.name}</p>
        <p className="mt-1">{info.summary}</p>
        {st.length > 0 && (
          <p className="mt-2">
            Leads with a clear ST change in this pattern: <b style={{ color: '#c0392b' }}>{st.join(', ')}</b> (red labels).
          </p>
        )}
      </div>
    </Card>
  )
}

// ---------------------------------------------------------------------------------------------
// Mystery strip quiz
// ---------------------------------------------------------------------------------------------

export function EcgQuiz({ color }: { color: string }) {
  const pool = RHYTHMS.filter((r) => r.id !== 'brady' && r.id !== 'tachy' && r.id !== 'stemi-inf' && r.id !== 'pericarditis')
  const [seed, setSeed] = useState(1)
  const [answer, setAnswer] = useState<RhythmId | null>(null)
  const correct = pool[(seed * 7 + 3) % pool.length]
  const options = useMemo(() => {
    const others = pool.filter((r) => r.id !== correct.id)
    const picks = [correct, others[(seed * 3) % others.length], others[(seed * 5 + 1) % others.length], others[(seed * 11 + 2) % others.length], others[(seed * 13 + 4) % others.length]]
    const uniq = [...new Map(picks.map((p) => [p.id, p])).values()]
    return uniq.sort((a, b) => ((a.id.charCodeAt(0) * seed) % 7) - ((b.id.charCodeAt(0) * seed) % 7))
  }, [seed, correct, pool])
  const strip = useMemo(() => makeStrip(correct.id, { lead: correct.id === 'stemi-ant' ? 'V2' : 'II', seed: seed + 11, seconds: 6, hr: correct.hr ? correct.hr[2] + ((seed * 5) % 11) - 5 : undefined }), [correct, seed])
  const W = 150, H = 44
  return (
    <Card title="Mystery rhythm" color={color} note="Look at the trace, then choose the rhythm. Each new strip is a different pattern.">
      <div className="overflow-hidden rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)' }}>
        <svg viewBox={`0 0 ${W} ${H}`} className="block w-full" role="img" aria-label="Mystery ECG rhythm strip">
          <Grid w={W} h={H} />
          <path d={tracePath(strip.mv, strip.fs, 0, 6, 0, 24)} fill="none" stroke="#1a1a1a" strokeWidth={0.38} strokeLinejoin="round" />
        </svg>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {options.map((o) => (
          <button key={o.id} type="button" disabled={answer !== null} onClick={() => setAnswer(o.id)} className="rounded-full border px-3 py-1 text-xs font-bold disabled:opacity-70 pointer-coarse:min-h-10" style={{ borderColor: answer && o.id === correct.id ? '#2b9d6e' : answer === o.id ? '#d9534f' : 'var(--ink)', background: 'var(--surface)', color: 'var(--ink)' }}>
            {o.name.replace(/ \(.*\)/, '')}
          </button>
        ))}
      </div>
      {answer && (
        <div className="rounded-[var(--radius)] border p-3 text-sm" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}>
          <p className="font-bold">{answer === correct.id ? 'Correct.' : `Not quite: this is ${correct.name}.`}</p>
          <ul className="mt-1 list-disc pl-5">
            {correct.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
      )}
      <Btn onClick={() => { setSeed(seed + 1); setAnswer(null) }}>Next strip</Btn>
    </Card>
  )
}
