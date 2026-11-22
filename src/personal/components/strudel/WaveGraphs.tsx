import { useEffect, useState } from 'react'
import { SPEC_HI, SPEC_LO, ZOOM_MS, loadWave } from '../../lib/strudel/waves'
import type { WaveData } from '../../lib/strudel/waves'

const W = 600
const soft = { color: 'var(--ink-soft)' }
const A_COLOR = 'var(--ink-soft)'

function Envelope({ d, scale, color, label }: { d: WaveData; scale: number; color: string; label: string }) {
  const H = 64
  const n = d.hi.length
  const x = (i: number) => (i / (n - 1)) * W
  const y = (v: number) => H / 2 - (v / scale) * (H / 2 - 2)
  const top = d.hi.map((v, i) => `${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(' ')
  const bottom = d.lo.map((v, i) => `${x(i).toFixed(1)},${y(v).toFixed(1)}`).reverse().join(' ')
  const zx = (d.zt / d.dur) * W
  const zw = (ZOOM_MS / 1000 / d.dur) * W
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-[10px] font-bold uppercase tracking-wide" style={soft}>
        {label} · peak {d.peak.toFixed(2)} · RMS {(20 * Math.log10(Math.max(d.rms, 1e-5))).toFixed(1)} dB
      </span>
      <svg viewBox={`0 0 ${W} ${H}`} className="h-16 w-full" preserveAspectRatio="none" role="img" aria-label={`${label} waveform`}>
        <rect x={0} y={0} width={W} height={H} rx={6} fill="#16142a" />
        <line x1={0} x2={W} y1={H / 2} y2={H / 2} stroke="#ffffff22" />
        <rect x={zx} y={1} width={Math.max(zw, 2)} height={H - 2} fill="#ffffff18" />
        <polygon points={`${top} ${bottom}`} fill={color} opacity={0.9} />
      </svg>
    </div>
  )
}

function Zoom({ d, scale, color, label }: { d: WaveData; scale: number; color: string; label: string }) {
  const H = 70
  const n = d.zoom.length
  const pts = d.zoom.map((v, i) => `${((i / (n - 1)) * 300).toFixed(1)},${(H / 2 - (v / scale) * (H / 2 - 3)).toFixed(1)}`).join(' ')
  return (
    <figure className="flex min-w-0 flex-1 flex-col gap-0.5">
      <svg viewBox={`0 0 300 ${H}`} className="h-[70px] w-full" preserveAspectRatio="none" role="img" aria-label={`${label} close-up of the waveform`}>
        <rect x={0} y={0} width={300} height={H} rx={6} fill="#16142a" />
        <line x1={0} x2={300} y1={H / 2} y2={H / 2} stroke="#ffffff22" />
        <polyline points={pts} fill="none" stroke={color} strokeWidth={1.6} vectorEffect="non-scaling-stroke" />
      </svg>
      <figcaption className="text-[10px] font-bold uppercase tracking-wide" style={soft}>
        {label}
      </figcaption>
    </figure>
  )
}

const TICKS = [50, 100, 200, 500, 1000, 2000, 5000, 10000]
const fx = (f: number) => (Math.log(f / SPEC_LO) / Math.log(SPEC_HI / SPEC_LO)) * W

function Spectrum({ a, b, color }: { a: WaveData; b?: WaveData; color: string }) {
  const H = 120
  const all = [...a.spec, ...(b?.spec ?? [])]
  const max = Math.ceil(Math.max(...all) / 10) * 10
  const min = max - 80
  const n = a.spec.length
  const line = (spec: number[]) => spec.map((v, i) => `${((i + 0.5) / n) * W},${(((max - Math.max(v, min)) / (max - min)) * (H - 14) + 2).toFixed(1)}`).join(' ')
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="h-32 w-full" preserveAspectRatio="none" role="img" aria-label="Spectrum: energy at each frequency">
      <rect x={0} y={0} width={W} height={H} rx={6} fill="#16142a" />
      {TICKS.map((t) => (
        <g key={t}>
          <line x1={fx(t)} x2={fx(t)} y1={0} y2={H - 12} stroke="#ffffff1a" />
          <text x={fx(t) + 2} y={H - 3} fontSize={9} fill="#ffffff88">
            {t >= 1000 ? `${t / 1000}k` : t}
          </text>
        </g>
      ))}
      {[0, 20, 40, 60].map((db) => (
        <text key={db} x={W - 4} y={((db) / 80) * (H - 14) + 10} fontSize={8} fill="#ffffff66" textAnchor="end">
          {max - db} dB
        </text>
      ))}
      <polyline points={line(a.spec)} fill="none" stroke={b ? A_COLOR : color} strokeWidth={b ? 1.5 : 2} strokeDasharray={b ? '4 3' : undefined} vectorEffect="non-scaling-stroke" />
      {b && <polyline points={line(b.spec)} fill="none" stroke={color} strokeWidth={2} vectorEffect="non-scaling-stroke" />}
    </svg>
  )
}

// Sound pictures for a demo: whole-clip waveforms, a close-up of the wave shape, and the spectrum,
// for one clip or a without/with pair drawn on shared scales.
export function WaveGraphs({ code, withCode }: { code: string; withCode?: string }) {
  const [data, setData] = useState<{ a: WaveData | null; b: WaveData | null } | null>(null)
  const [open, setOpen] = useState(true)
  useEffect(() => {
    let alive = true
    Promise.all([loadWave(code), withCode ? loadWave(withCode) : Promise.resolve(null)]).then(([a, b]) => alive && setData({ a, b }))
    return () => {
      alive = false
    }
  }, [code, withCode])
  if (!data?.a && !data?.b) return null
  const { a, b } = data
  const both = [a, b].filter((x): x is WaveData => !!x)
  const scale = Math.max(0.05, ...both.map((d) => Math.max(...d.hi.map(Math.abs), ...d.lo.map(Math.abs))))
  const zscale = Math.max(0.05, ...both.map((d) => Math.max(...d.zoom.map(Math.abs))))
  const color = 'var(--mint)'
  return (
    <div className="flex flex-col gap-2 rounded-[var(--radius)] border p-2" style={{ borderColor: 'var(--line)' }}>
      <button type="button" onClick={() => setOpen((o) => !o)} className="flex items-center gap-1 text-left text-xs font-bold" aria-expanded={open}>
        {open ? '▾' : '▸'} Sound pictures <span className="font-normal" style={soft}>rendered from this demo’s actual audio</span>
      </button>
      {open && (
        <>
          <div className="flex flex-col gap-1.5">
            {a && <Envelope d={a} scale={scale} color={b ? '#b9b3d6' : color} label={withCode ? 'Waveform · without' : 'Waveform'} />}
            {b && <Envelope d={b} scale={scale} color={color} label="Waveform · with" />}
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-bold uppercase tracking-wide" style={soft}>
              Close-up · {ZOOM_MS.toFixed(0)} ms from the highlighted moment
            </span>
            <div className="flex gap-2">
              {a && <Zoom d={a} scale={zscale} color={b ? '#b9b3d6' : color} label={withCode ? 'without' : 'wave shape'} />}
              {b && <Zoom d={b} scale={zscale} color={color} label="with" />}
            </div>
          </div>
          {a && (
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase tracking-wide" style={soft}>
                Spectrum (30 Hz – 11 kHz){b ? ' · dashed grey = without, colour = with' : ''}
              </span>
              <Spectrum a={a} b={b ?? undefined} color={color} />
            </div>
          )}
          {!a && b && <Spectrum a={b} color={color} />}
        </>
      )}
    </div>
  )
}
