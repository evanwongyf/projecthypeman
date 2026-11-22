import type { Block } from '../../lib/archive/guide'

// A small plotting component for teaching diagrams: curves from functions, data lines,
// labelled points, reference lines and shaded x-ranges, with axes and labels.

type PlotBlock = Extract<Block, { t: 'plot' }>

const PALETTE = ['#3b6fd8', '#e07b2a', '#2f9e6e', '#7b4fc9', '#d9534f', '#8a6d1e']
const W = 640
const H = 340
const M = { l: 54, r: 18, t: 18, b: 44 }

function ticks(lo: number, hi: number) {
  const raw = (hi - lo) / 5
  const mag = 10 ** Math.floor(Math.log10(raw || 1))
  const step = [1, 2, 2.5, 5, 10].map((m) => m * mag).find((t) => t >= raw) ?? raw
  const out: number[] = []
  for (let t = Math.ceil(lo / step) * step; t <= hi + 1e-9; t += step) out.push(Math.round(t * 1e6) / 1e6)
  return out
}

const fmt = (n: number) => (Math.abs(n) >= 1000 ? `${(n / 1000).toFixed(n % 1000 ? 1 : 0)}k` : String(+n.toFixed(2)))

export function PlotChart({ block }: { block: PlotBlock }) {
  const { x: [x0, x1], y: [y0, y1] } = block
  const sx = (v: number) => M.l + ((v - x0) / (x1 - x0)) * (W - M.l - M.r)
  const sy = (v: number) => M.t + ((y1 - v) / (y1 - y0)) * (H - M.t - M.b)
  const clipY = (v: number) => Math.max(y0 - (y1 - y0) * 0.05, Math.min(y1 + (y1 - y0) * 0.05, v))
  const curves = block.curves ?? []
  const data = block.data ?? []
  return (
    <figure className="flex max-w-3xl flex-col gap-1.5">
      <div className="overflow-hidden rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}>
        {block.title && <p className="px-3 pt-2 text-sm font-bold">{block.title}</p>}
        <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full" role="img" aria-label={block.title ?? block.caption ?? 'Diagram'}>
          <defs>
            <clipPath id="plot-area">
              <rect x={M.l} y={M.t} width={W - M.l - M.r} height={H - M.t - M.b} />
            </clipPath>
          </defs>
          {(block.shade ?? []).map((s, i) => (
            <g key={`s${i}`}>
              <rect x={sx(s.from)} y={M.t} width={sx(s.to) - sx(s.from)} height={H - M.t - M.b} fill={s.color ?? 'var(--lavender)'} opacity={0.25} />
              {s.label && (
                <text x={(sx(s.from) + sx(s.to)) / 2} y={M.t + 14} fontSize={11.5} fontWeight={700} textAnchor="middle" fill="var(--ink)" paintOrder="stroke" stroke="var(--surface)" strokeWidth={3.5} strokeLinejoin="round">
                  {s.label}
                </text>
              )}
            </g>
          ))}
          {ticks(y0, y1).map((t) => (
            <g key={`y${t}`}>
              <line x1={M.l} x2={W - M.r} y1={sy(t)} y2={sy(t)} stroke="var(--line)" />
              <text x={M.l - 6} y={sy(t) + 4} fontSize={11} textAnchor="end" fill="var(--ink-soft)">
                {fmt(t)}
              </text>
            </g>
          ))}
          {ticks(x0, x1).map((t) => (
            <text key={`x${t}`} x={sx(t)} y={H - M.b + 16} fontSize={11} textAnchor="middle" fill="var(--ink-soft)">
              {fmt(t)}
            </text>
          ))}
          {y0 < 0 && y1 > 0 && <line x1={M.l} x2={W - M.r} y1={sy(0)} y2={sy(0)} stroke="var(--ink)" strokeWidth={1.2} />}
          {x0 < 0 && x1 > 0 && <line x1={sx(0)} x2={sx(0)} y1={M.t} y2={H - M.b} stroke="var(--ink)" strokeWidth={1.2} />}
          <line x1={M.l} x2={M.l} y1={M.t} y2={H - M.b} stroke="var(--ink)" strokeWidth={1.5} />
          <line x1={M.l} x2={W - M.r} y1={H - M.b} y2={H - M.b} stroke="var(--ink)" strokeWidth={1.5} />
          {(block.hlines ?? []).map((h, i) => (
            <g key={`h${i}`}>
              <line x1={M.l} x2={W - M.r} y1={sy(h.y)} y2={sy(h.y)} stroke="var(--ink)" strokeDasharray="6 4" />
              {h.label && (
                <text x={W - M.r - 4} y={sy(h.y) - 5} fontSize={11.5} fontWeight={700} textAnchor="end" fill="var(--ink)" paintOrder="stroke" stroke="var(--surface)" strokeWidth={3.5} strokeLinejoin="round">
                  {h.label}
                </text>
              )}
            </g>
          ))}
          {(block.vlines ?? []).map((v, i) => (
            <g key={`v${i}`}>
              <line x1={sx(v.x)} x2={sx(v.x)} y1={M.t} y2={H - M.b} stroke="var(--ink)" strokeDasharray="6 4" />
              {v.label && (
                <text x={sx(v.x) + 5} y={M.t + 28} fontSize={11.5} fontWeight={700} fill="var(--ink)" paintOrder="stroke" stroke="var(--surface)" strokeWidth={3.5} strokeLinejoin="round">
                  {v.label}
                </text>
              )}
            </g>
          ))}
          <g clipPath="url(#plot-area)">
            {curves.map((c, i) => {
              const a = c.from ?? x0
              const b = c.to ?? x1
              let d = ''
              for (let k = 0; k <= 200; k++) {
                const xv = a + ((b - a) * k) / 200
                const yv = c.f(xv)
                if (!Number.isFinite(yv)) continue
                d += `${d ? 'L' : 'M'}${sx(xv).toFixed(1)},${sy(clipY(yv)).toFixed(1)}`
              }
              return <path key={`c${i}`} d={d} fill="none" stroke={c.color ?? PALETTE[i % PALETTE.length]} strokeWidth={2.5} strokeDasharray={c.dashed ? '7 5' : undefined} />
            })}
            {data.map((s, i) => (
              <g key={`d${i}`}>
                <path
                  d={s.pts.map(([px, py], k) => `${k ? 'L' : 'M'}${sx(px).toFixed(1)},${sy(py).toFixed(1)}`).join('')}
                  fill="none"
                  stroke={s.color ?? PALETTE[(i + curves.length) % PALETTE.length]}
                  strokeWidth={2.5}
                  strokeDasharray={s.dashed ? '7 5' : undefined}
                />
                {s.dots && s.pts.map(([px, py], k) => <circle key={k} cx={sx(px)} cy={sy(py)} r={3.5} fill={s.color ?? PALETTE[(i + curves.length) % PALETTE.length]} />)}
              </g>
            ))}
          </g>
          {(block.points ?? []).map((p, i) => (
            <g key={`p${i}`}>
              <circle cx={sx(p.x)} cy={sy(p.y)} r={5} fill="var(--ink)" />
              <text x={sx(p.x) + 8} y={sy(p.y) - 8} fontSize={12} fontWeight={700} fill="var(--ink)" paintOrder="stroke" stroke="var(--surface)" strokeWidth={3.5} strokeLinejoin="round">
                {p.label}
              </text>
            </g>
          ))}
          {block.xLabel && (
            <text x={(M.l + W - M.r) / 2} y={H - 8} fontSize={12} fontWeight={700} textAnchor="middle" fill="var(--ink)" paintOrder="stroke" stroke="var(--surface)" strokeWidth={3.5} strokeLinejoin="round">
              {block.xLabel}
            </text>
          )}
          {block.yLabel && (
            <text x={14} y={(M.t + H - M.b) / 2} fontSize={12} fontWeight={700} textAnchor="middle" fill="var(--ink)" transform={`rotate(-90 14 ${(M.t + H - M.b) / 2})`} paintOrder="stroke" stroke="var(--surface)" strokeWidth={3.5} strokeLinejoin="round">
              {block.yLabel}
            </text>
          )}
        </svg>
        {(curves.some((c) => c.label) || data.some((d) => d.label)) && (
          <div className="flex flex-wrap gap-3 px-3 pb-2 text-xs">
            {[...curves.map((c, i) => [c.label, c.color ?? PALETTE[i % PALETTE.length], c.dashed] as const), ...data.map((d, i) => [d.label, d.color ?? PALETTE[(i + curves.length) % PALETTE.length], d.dashed] as const)]
              .filter(([l]) => l)
              .map(([l, col, dashed]) => (
                <span key={l} className="flex items-center gap-1.5 font-bold">
                  <svg width="22" height="6" aria-hidden>
                    <line x1="0" x2="22" y1="3" y2="3" stroke={col} strokeWidth="3" strokeDasharray={dashed ? '5 3' : undefined} />
                  </svg>
                  {l}
                </span>
              ))}
          </div>
        )}
      </div>
      {block.caption && (
        <figcaption className="text-xs" style={{ color: 'var(--ink-soft)' }}>
          {block.caption}
        </figcaption>
      )}
    </figure>
  )
}
