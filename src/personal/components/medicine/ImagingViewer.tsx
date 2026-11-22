import { useMemo, useRef, useState } from 'react'
import { IMAGING_CASES } from '../../lib/medicine/imaging-data'
import { IMAGING_SETS } from '../../lib/medicine/imaging'
import type { ImagingCase, ImagingFinding } from '../../lib/medicine/imaging'
import { Btn, Card, Pills, Slider, soft } from '../sports/shared'
import { AnnotLayer, AnnotToolbar, useAnnotations } from './annotate'
import type { Tool } from './annotate'

type Mode = 'learn' | 'quiz'

const overlaps = (f: ImagingFinding, pts: [number, number][]) => {
  const [x, y, w, h] = f.box
  const cx = x + w / 2, cy = y + h / 2
  const xs = pts.map((p) => p[0]), ys = pts.map((p) => p[1])
  const [bx0, bx1, by0, by1] = [Math.min(...xs), Math.max(...xs), Math.min(...ys), Math.max(...ys)]
  const inside = cx >= bx0 && cx <= bx1 && cy >= by0 && cy <= by1
  const ix = Math.max(0, Math.min(bx1, x + w) - Math.max(bx0, x))
  const iy = Math.max(0, Math.min(by1, y + h) - Math.max(by0, y))
  const inter = ix * iy
  const uni = (bx1 - bx0) * (by1 - by0) + w * h - inter
  return inside || (uni > 0 && inter / uni > 0.15)
}

export default function ImagingViewer({ set, caseId, color }: { set?: ImagingCase['set']; caseId?: string; color: string }) {
  const cases = useMemo(() => IMAGING_CASES.filter((c) => (caseId ? c.id === caseId : set ? c.set === set : true)), [set, caseId])
  const [ci, setCi] = useState(0)
  const c = cases[Math.min(ci, cases.length - 1)]
  const [vi, setVi] = useState(0)
  const variant = c.variants[Math.min(vi, c.variants.length - 1)]
  const [mode, setMode] = useState<Mode>('learn')
  const [showAll, setShowAll] = useState(true)
  const [pick, setPick] = useState<string | null>(null)
  const [revealed, setRevealed] = useState(false)
  const [bright, setBright] = useState(100)
  const [contrast, setContrast] = useState(100)
  const [invert, setInvert] = useState(false)
  const [zoom, setZoom] = useState(1)
  const [on, setOn] = useState(false)
  const [tool, setTool] = useState<Tool>('box')
  const [pen, setPen] = useState('#ffd23f')
  const [anns, setAnns] = useAnnotations(`studytubby-annot-${c.id}-${variant.id}`)
  const imgRef = useRef<HTMLImageElement>(null)

  const visible = c.findings.filter((f) => !f.seq || f.seq.includes(variant.id))
  const abnormal = visible.filter((f) => f.kind === 'finding')
  const hidden = mode === 'quiz' && !revealed
  const userBoxes = anns.filter((a) => a.t === 'box' || a.t === 'ellipse')
  const targets = abnormal.length ? abnormal : visible
  const found = targets.filter((f) => userBoxes.some((a) => overlaps(f, a.pts)))
  const rulers = anns.filter((a) => a.t === 'ruler').map((a) => Math.hypot(a.pts[0][0] - a.pts[a.pts.length - 1][0], a.pts[0][1] - a.pts[a.pts.length - 1][1]))

  const download = () => {
    const img = imgRef.current
    if (!img) return
    const cv = document.createElement('canvas')
    cv.width = 1024
    cv.height = 1024
    const g = cv.getContext('2d')
    if (!g) return
    g.filter = `brightness(${bright}%) contrast(${contrast}%) ${invert ? 'invert(1)' : ''}`
    g.drawImage(img, 0, 0, 1024, 1024)
    g.filter = 'none'
    g.lineWidth = 4
    g.lineCap = 'round'
    g.font = 'bold 36px sans-serif'
    for (const a of anns) {
      g.strokeStyle = a.c
      g.fillStyle = a.c
      const [p0, p1] = [a.pts[0], a.pts[a.pts.length - 1]]
      const P = (p: [number, number]) => [p[0] * 1024, p[1] * 1024] as const
      if (a.t === 'box') g.strokeRect(P(p0)[0], P(p0)[1], (p1[0] - p0[0]) * 1024, (p1[1] - p0[1]) * 1024)
      else if (a.t === 'ellipse') {
        g.beginPath()
        g.ellipse(((p0[0] + p1[0]) / 2) * 1024, ((p0[1] + p1[1]) / 2) * 1024, Math.abs(p1[0] - p0[0]) * 512, Math.abs(p1[1] - p0[1]) * 512, 0, 0, 7)
        g.stroke()
      } else if (a.t === 'pen') {
        g.globalAlpha = 0.45
        g.lineWidth = 16
        g.beginPath()
        a.pts.forEach((p, i) => (i ? g.lineTo(...P(p)) : g.moveTo(...P(p))))
        g.stroke()
        g.globalAlpha = 1
        g.lineWidth = 4
      } else if (a.t === 'text') g.fillText(a.text ?? '', ...P(p0))
      else {
        g.beginPath()
        g.moveTo(...P(p0))
        g.lineTo(...P(p1))
        g.stroke()
      }
    }
    const link = document.createElement('a')
    link.download = `${c.id}-${variant.id}-annotated.png`
    link.href = cv.toDataURL('image/png')
    link.click()
  }

  const boxColor = (f: ImagingFinding) => (f.kind === 'finding' ? '#ff5a5f' : '#4cc9f0')

  return (
    <Card title={c.title} color={color} note="These pictures are computer-generated teaching phantoms, not patient scans. Real images vary far more, and reading them is a clinical skill that needs training and supervision. Nothing here is for diagnosis.">
      {cases.length > 1 && <Pills value={String(ci)} options={cases.map((x, i) => [String(i), x.title] as [string, string])} onChange={(v) => { setCi(+v); setVi(0); setPick(null); setRevealed(false) }} label="Case" />}
      <p className="text-sm leading-relaxed" style={soft}>
        {c.summary}
      </p>
      <div className="flex flex-wrap items-center gap-2">
        {c.variants.length > 1 && <Pills value={String(vi)} options={c.variants.map((v, i) => [String(i), v.label] as [string, string])} onChange={(v) => setVi(+v)} label="Sequence or view" />}
        <Pills value={mode} options={[['learn', 'Learn'], ['quiz', 'Quiz me']]} onChange={(m) => { setMode(m); setRevealed(false); setPick(null) }} label="Mode" />
      </div>
      <div className="flex flex-col gap-3 lg:flex-row">
        <div className="min-w-0 flex-1">
          <div className="overflow-auto rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)', background: '#000', maxHeight: 640 }}>
            <div className="relative mx-auto" style={{ width: `${zoom * 100}%`, aspectRatio: '1 / 1' }}>
              <img ref={imgRef} src={variant.src} alt={`${c.title}, ${variant.label}`} className="absolute inset-0 h-full w-full select-none" draggable={false} style={{ filter: `brightness(${bright}%) contrast(${contrast}%)${invert ? ' invert(1)' : ''}` }} />
              <AnnotLayer
                anns={anns}
                setAnns={setAnns}
                tool={tool}
                color={pen}
                active={on}
                unit={(f) => `${(f * 100).toFixed(1)}% of width`}
                extra={
                  !hidden && showAll
                    ? visible.map((f) => (
                        <g key={f.id} style={{ pointerEvents: 'none' }}>
                          <rect x={f.box[0]} y={f.box[1]} width={f.box[2]} height={f.box[3]} fill={pick === f.id ? boxColor(f) : 'none'} fillOpacity={0.18} stroke={boxColor(f)} strokeWidth={pick === f.id ? 3.5 : 1.8} vectorEffect="non-scaling-stroke" strokeDasharray={f.kind === 'structure' ? '5 3' : undefined} />
                          {(pick === f.id || visible.length <= 4) && (
                            <text x={f.box[0] + 0.004} y={Math.max(0.035, f.box[1] - 0.008)} fontSize="0.032" fontWeight="700" fill={boxColor(f)} stroke="#000" strokeWidth="0.006" paintOrder="stroke">
                              {f.label}
                            </text>
                          )}
                        </g>
                      ))
                    : null
                }
              />
            </div>
          </div>
          <div className="mt-2 flex flex-wrap gap-3">
            <Slider label="Brightness" value={bright} min={40} max={200} step={5} onChange={setBright} show={`${bright}%`} />
            <Slider label="Contrast" value={contrast} min={40} max={250} step={5} onChange={setContrast} show={`${contrast}%`} />
            <Slider label="Zoom" value={zoom} min={1} max={3} step={0.25} onChange={setZoom} show={`${zoom}×`} />
          </div>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <Btn onClick={() => setInvert(!invert)} active={invert}>
              Invert
            </Btn>
            <Btn onClick={() => { setBright(100); setContrast(100); setZoom(1); setInvert(false) }}>Reset view</Btn>
            {mode === 'learn' && (
              <Btn onClick={() => setShowAll(!showAll)} active={showAll}>
                Labels {showAll ? 'on' : 'off'}
              </Btn>
            )}
            <Btn onClick={download}>Save annotated PNG</Btn>
          </div>
          <div className="mt-2">
            <AnnotToolbar tool={tool} setTool={setTool} color={pen} setColor={setPen} anns={anns} setAnns={setAnns} on={on} setOn={setOn} />
          </div>
          {rulers.length > 0 && (
            <p className="mt-2 text-xs" style={soft}>
              Ruler lengths (fraction of the image width): {rulers.map((r) => r.toFixed(3)).join(', ')}
              {rulers.length > 1 && ` · first ÷ second = ${(rulers[0] / rulers[1]).toFixed(2)} (for a cardiothoracic ratio, measure the heart first, then the inside of the chest)`}
            </p>
          )}
        </div>
        <div className="flex min-w-0 flex-col gap-2 lg:w-80">
          {mode === 'quiz' && (
            <div className="rounded-[var(--radius)] border p-3 text-sm" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}>
              <p className="font-bold">Quiz: find {targets.length === 1 ? 'the abnormality' : `${targets.length} features`}</p>
              <p className="mt-1" style={soft}>
                Turn on <b>Draw</b>, choose <b>Box</b> or <b>Circle</b>, and mark where you think each one is. Then check.
              </p>
              <div className="mt-2 flex gap-2">
                <Btn onClick={() => setRevealed(true)}>Check and reveal</Btn>
                <Btn onClick={() => { setRevealed(false); setAnns(() => []) }}>Try again</Btn>
              </div>
              {revealed && (
                <p className="mt-2 font-bold">
                  You marked {found.length} of {targets.length}.
                </p>
              )}
            </div>
          )}
          <div className="flex flex-col gap-1.5">
            {(hidden ? [] : visible).map((f) => (
              <button key={f.id} type="button" onClick={() => setPick(pick === f.id ? null : f.id)} className="rounded-[var(--radius)] border p-2 text-left text-sm" style={{ borderColor: pick === f.id ? boxColor(f) : 'var(--ink)', background: 'var(--surface)' }}>
                <span className="font-bold" style={{ color: f.kind === 'finding' ? '#d9534f' : 'var(--ink)' }}>
                  {f.kind === 'finding' ? '⚠ ' : ''}
                  {f.label}
                  {revealed && userBoxes.length > 0 && targets.includes(f) ? (found.includes(f) ? ' ✓' : ' ✗') : ''}
                </span>
                {pick === f.id && <span className="mt-1 block leading-relaxed">{f.detail}</span>}
              </button>
            ))}
            {hidden && <p className="text-sm" style={soft}>Answers are hidden in quiz mode.</p>}
          </div>
          {c.approach.length > 0 && !hidden && (
            <div className="rounded-[var(--radius)] border p-3 text-sm" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}>
              <p className="font-bold">A systematic approach</p>
              <ol className="mt-1 list-decimal pl-5">
                {c.approach.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ol>
            </div>
          )}
          <p className="text-xs" style={soft}>
            {IMAGING_SETS[c.set]} · dashed blue = normal structure, red = abnormal finding
          </p>
        </div>
      </div>
    </Card>
  )
}
