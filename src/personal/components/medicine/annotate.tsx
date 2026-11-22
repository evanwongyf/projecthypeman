import { useEffect, useRef, useState } from 'react'
import type { PointerEvent as RPointerEvent, ReactNode } from 'react'
import { Btn } from '../sports/shared'

// Freehand and shape annotation over a normalised (0..1) drawing surface, shared by the image and
// ECG tools. Annotations are kept per surface key in localStorage.

export type Tool = 'pen' | 'box' | 'ellipse' | 'arrow' | 'text' | 'ruler'
export type Ann = { t: Tool; c: string; pts: [number, number][]; text?: string }

export const COLORS: [string, string][] = [
  ['#ffd23f', 'Yellow'],
  ['#ff5a5f', 'Red'],
  ['#2bd9a0', 'Green'],
  ['#4cc9f0', 'Blue'],
  ['#ffffff', 'White'],
]

export const TOOLS: [Tool, string][] = [
  ['box', 'Box'],
  ['ellipse', 'Circle'],
  ['arrow', 'Arrow'],
  ['pen', 'Highlighter'],
  ['text', 'Label'],
  ['ruler', 'Ruler'],
]

const load = (key: string): Ann[] => {
  try {
    const raw = window.localStorage.getItem(key)
    return raw ? (JSON.parse(raw) as Ann[]) : []
  } catch {
    return []
  }
}

export function useAnnotations(key: string) {
  const [anns, setAnns] = useState<Ann[]>(() => load(key))
  const keyRef = useRef(key)
  useEffect(() => {
    keyRef.current = key
    setAnns(load(key))
  }, [key])
  useEffect(() => {
    try {
      window.localStorage.setItem(keyRef.current, JSON.stringify(anns))
    } catch {
      // storage can be blocked; annotations then live only for this visit
    }
  }, [anns])
  return [anns, setAnns] as const
}

const dist = (a: [number, number], b: [number, number], aspect: number) => Math.hypot((a[0] - b[0]) * aspect, a[1] - b[1])

// The SVG layer. `aspect` is width / height of the surface so ellipses and rulers are measured in
// true proportions; `unit` formats a ruler length given as a fraction of the surface width.
export function AnnotLayer({ anns, setAnns, tool, color, aspect = 1, active, extra, unit }: { anns: Ann[]; setAnns: (f: (a: Ann[]) => Ann[]) => void; tool: Tool; color: string; aspect?: number; active: boolean; extra?: ReactNode; unit?: (frac: number) => string }) {
  const ref = useRef<SVGSVGElement>(null)
  const [draft, setDraft] = useState<Ann | null>(null)
  const pos = (e: RPointerEvent): [number, number] => {
    const r = ref.current!.getBoundingClientRect()
    return [Math.min(1, Math.max(0, (e.clientX - r.left) / r.width)), Math.min(1, Math.max(0, (e.clientY - r.top) / r.height))]
  }
  const down = (e: RPointerEvent) => {
    if (!active) return
    e.preventDefault()
    ;(e.target as Element).setPointerCapture?.(e.pointerId)
    const p = pos(e)
    if (tool === 'text') {
      const text = window.prompt('Label text')
      if (text) setAnns((a) => [...a, { t: 'text', c: color, pts: [p], text }])
      return
    }
    setDraft({ t: tool, c: color, pts: [p, p] })
  }
  const move = (e: RPointerEvent) => {
    if (!draft) return
    const p = pos(e)
    setDraft((d) => (d ? { ...d, pts: d.t === 'pen' ? [...d.pts, p] : [d.pts[0], p] } : d))
  }
  const up = () => {
    if (!draft) return
    const long = draft.pts.length > 2 || dist(draft.pts[0], draft.pts[draft.pts.length - 1], aspect) > 0.01
    if (long) setAnns((a) => [...a, draft])
    setDraft(null)
  }
  const all = draft ? [...anns, draft] : anns
  const sw = 0.006
  return (
    <svg ref={ref} viewBox="0 0 1 1" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" style={{ touchAction: active ? 'none' : 'auto', cursor: active ? 'crosshair' : 'default', pointerEvents: active ? 'auto' : 'none' }} onPointerDown={down} onPointerMove={move} onPointerUp={up} onPointerCancel={up}>
      {extra}
      {all.map((a, i) => {
        const [p0, p1] = [a.pts[0], a.pts[a.pts.length - 1]]
        const common = { stroke: a.c, strokeWidth: sw, fill: 'none', vectorEffect: 'non-scaling-stroke' as const }
        const style = { strokeWidth: 2.5 }
        if (a.t === 'box') return <rect key={i} x={Math.min(p0[0], p1[0])} y={Math.min(p0[1], p1[1])} width={Math.abs(p1[0] - p0[0])} height={Math.abs(p1[1] - p0[1])} {...common} style={style} />
        if (a.t === 'ellipse') return <ellipse key={i} cx={(p0[0] + p1[0]) / 2} cy={(p0[1] + p1[1]) / 2} rx={Math.abs(p1[0] - p0[0]) / 2} ry={Math.abs(p1[1] - p0[1]) / 2} {...common} style={style} />
        if (a.t === 'pen') return <polyline key={i} points={a.pts.map((q) => q.join(',')).join(' ')} {...common} style={{ strokeWidth: 9, strokeOpacity: 0.45, strokeLinecap: 'round', strokeLinejoin: 'round' }} />
        if (a.t === 'arrow' || a.t === 'ruler') {
          const ang = Math.atan2((p1[1] - p0[1]) * 1, (p1[0] - p0[0]) * aspect)
          const hx = 0.025 / aspect, hy = 0.025
          const l1: [number, number] = [p1[0] - (Math.cos(ang + 0.45) * hx), p1[1] - Math.sin(ang + 0.45) * hy]
          const l2: [number, number] = [p1[0] - (Math.cos(ang - 0.45) * hx), p1[1] - Math.sin(ang - 0.45) * hy]
          const len = dist(p0, p1, aspect) / aspect
          return (
            <g key={i}>
              <line x1={p0[0]} y1={p0[1]} x2={p1[0]} y2={p1[1]} {...common} style={style} strokeDasharray={a.t === 'ruler' ? '0.012 0.008' : undefined} />
              {a.t === 'arrow' && <polyline points={`${l1.join(',')} ${p1.join(',')} ${l2.join(',')}`} {...common} style={style} />}
              {a.t === 'ruler' && (
                <text x={(p0[0] + p1[0]) / 2} y={(p0[1] + p1[1]) / 2 - 0.012} textAnchor="middle" fontSize="0.034" fontWeight="700" fill={a.c} stroke="#000" strokeWidth="0.006" paintOrder="stroke">
                  {unit ? unit(len) : `${(len * 100).toFixed(1)}% W`}
                </text>
              )}
            </g>
          )
        }
        return (
          <text key={i} x={p0[0]} y={p0[1]} fontSize="0.04" fontWeight="700" fill={a.c} stroke="#000" strokeWidth="0.008" paintOrder="stroke">
            {a.text}
          </text>
        )
      })}
    </svg>
  )
}

export function AnnotToolbar({ tool, setTool, color, setColor, anns, setAnns, on, setOn, tools = TOOLS }: { tool: Tool; setTool: (t: Tool) => void; color: string; setColor: (c: string) => void; anns: Ann[]; setAnns: (f: (a: Ann[]) => Ann[]) => void; on: boolean; setOn: (b: boolean) => void; tools?: [Tool, string][] }) {
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      <Btn onClick={() => setOn(!on)} active={on}>
        {on ? 'Drawing on' : 'Draw'}
      </Btn>
      {on &&
        tools.map(([t, l]) => (
          <Btn key={t} onClick={() => setTool(t)} active={tool === t}>
            {l}
          </Btn>
        ))}
      {on &&
        COLORS.map(([c, name]) => (
          <button key={c} type="button" aria-label={`${name} pen`} aria-pressed={color === c} onClick={() => setColor(c)} className="h-7 w-7 rounded-full border pointer-coarse:h-10 pointer-coarse:w-10" style={{ background: c, borderColor: color === c ? 'var(--ink)' : 'transparent', outline: '1px solid var(--ink)' }} />
        ))}
      <Btn onClick={() => setAnns((a) => a.slice(0, -1))} disabled={!anns.length}>
        Undo
      </Btn>
      <Btn onClick={() => setAnns(() => [])} disabled={!anns.length}>
        Clear
      </Btn>
    </div>
  )
}
