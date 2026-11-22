import type { Block, DiagramTone } from '../../lib/archive/guide'
import { Rich } from './GuideBlocks'

// Two general-purpose diagram types, used wherever a plain top-to-bottom flow would misrepresent
// the thing being drawn: a freely laid out flowchart (DiagramBlock) whose arrows curve in from
// whichever side is nearest, so branches can run left, right or up as well as down, and a
// radial mindmap (MindmapBlock). Both lay themselves out from the actual size of their content
// (node text, branch count) rather than a fixed pitch, specifically so nothing overlaps or runs
// off the edge regardless of how much text a particular diagram carries.

export const DIAGRAM_TONE: Record<DiagramTone, string> = {
  orange: 'var(--orange)',
  mustard: 'var(--mustard)',
  teal: 'var(--teal)',
  pink: 'var(--pink)',
  mint: 'var(--mint)',
  lavender: 'var(--lavender)',
  ink: 'var(--ink)',
}
const tint = (color: string, pct = 24) => `color-mix(in srgb, ${color} ${pct}%, var(--surface))`

type DiagramT = Extract<Block, { t: 'diagram' }>
type MindmapT = Extract<Block, { t: 'mindmap' }>
type DNode = DiagramT['nodes'][number]

// Minimum gap between adjacent columns/rows. Generous on purpose: an edge label (roughly
// 60-100px wide) has to fit in whichever gap its edge crosses without touching either node.
const GAP_X = 92
const GAP_Y = 58

function sizeOf(n: DNode) {
  const base = n.shape === 'diamond' ? 150 : n.shape === 'circle' ? 108 : 150
  // A rough estimate of how wide the label needs to be: about 6.4px per character at this
  // font size, plus the shorter of the two lines if there's a sub-label underneath.
  const textW = Math.max(n.label.length, (n.sub?.length ?? 0) * 0.85) * 6.4 + 28
  const w = n.w ?? Math.max(base, n.shape === 'diamond' ? Math.min(textW, 210) : Math.min(textW, 220))
  const h = n.shape === 'diamond' ? 118 : n.shape === 'circle' ? 108 : n.sub ? 74 : 56
  return { w, h }
}

/** Lay nodes out on their (col, row) grid using each column's/row's own widest or tallest
 * node, so columns and rows are only as big as they need to be, with a fixed gap between them,
 * instead of every column being the same fixed pitch regardless of what's actually in it. */
function layout(nodes: DNode[]) {
  const sizes = new Map(nodes.map((n) => [n.id, sizeOf(n)]))
  const cols = [...new Set(nodes.map((n) => n.col))].sort((a, b) => a - b)
  const rows = [...new Set(nodes.map((n) => n.row))].sort((a, b) => a - b)
  const colW = new Map(cols.map((c) => [c, Math.max(...nodes.filter((n) => n.col === c).map((n) => sizes.get(n.id)!.w))]))
  const rowH = new Map(rows.map((r) => [r, Math.max(...nodes.filter((n) => n.row === r).map((n) => sizes.get(n.id)!.h))]))
  const colX = new Map<number, number>()
  const rowY = new Map<number, number>()
  let x = GAP_X / 2
  for (const c of cols) {
    colX.set(c, x + colW.get(c)! / 2)
    x += colW.get(c)! + GAP_X
  }
  let y = GAP_Y / 2
  for (const r of rows) {
    rowY.set(r, y + rowH.get(r)! / 2)
    y += rowH.get(r)! + GAP_Y
  }
  const pos = new Map<string, { cx: number; cy: number; w: number; h: number }>()
  for (const n of nodes) pos.set(n.id, { cx: colX.get(n.col)!, cy: rowY.get(n.row)!, ...sizes.get(n.id)! })
  return { pos, W: x - GAP_X + GAP_X / 2, H: y - GAP_Y + GAP_Y / 2 }
}

/** A point on a cubic bezier at t=0.5, the true midpoint of the curve, not an average of its
 * four control points (which sits noticeably off-curve and, for a short curve, can land right
 * on top of one of the end nodes). */
function curveMidpoint(p0: number, c1: number, c2: number, p3: number) {
  return 0.125 * p0 + 0.375 * c1 + 0.375 * c2 + 0.125 * p3
}

export function DiagramBlock({ block, color }: { block: DiagramT; color: string }) {
  const { pos, W, H } = layout(block.nodes)
  const byId = new Map(block.nodes.map((n) => [n.id, n]))

  const paths = block.edges
    .map((e, i) => {
      const s = pos.get(e.from)
      const t = pos.get(e.to)
      if (!s || !t) return null
      const dx = t.cx - s.cx
      const dy = t.cy - s.cy
      const horizDominant = Math.abs(dx) >= Math.abs(dy) * 1.05
      let sx: number, sy: number, tx: number, ty: number, c1x: number, c1y: number, c2x: number, c2y: number
      if (horizDominant && Math.abs(dx) > 4) {
        const sign = dx >= 0 ? 1 : -1
        sx = s.cx + sign * (s.w / 2)
        sy = s.cy + dy * 0.22
        tx = t.cx - sign * (t.w / 2)
        ty = t.cy - dy * 0.22
        const bend = Math.max(28, Math.abs(tx - sx) * 0.45)
        c1x = sx + sign * bend
        c1y = sy
        c2x = tx - sign * bend
        c2y = ty
      } else {
        const sign = dy >= 0 ? 1 : -1
        sx = s.cx + dx * 0.18
        sy = s.cy + sign * (s.h / 2)
        tx = t.cx - dx * 0.18
        ty = t.cy - sign * (t.h / 2)
        const bend = Math.max(24, Math.abs(ty - sy) * 0.5)
        c1x = sx
        c1y = sy + sign * bend
        c2x = tx
        c2y = ty - sign * bend
      }
      const mx = curveMidpoint(sx, c1x, c2x, tx)
      const my = curveMidpoint(sy, c1y, c2y, ty)
      const col = e.tone ? DIAGRAM_TONE[e.tone] : 'var(--ink)'
      return { key: i, d: `M ${sx},${sy} C ${c1x},${c1y} ${c2x},${c2y} ${tx},${ty}`, col, dashed: e.dashed, label: e.label, mx, my }
    })
    .filter((x): x is NonNullable<typeof x> => !!x)

  return (
    <figure className="flex min-w-0 max-w-4xl flex-col gap-2">
      {block.title && (
        <p className="text-sm font-bold">
          <Rich text={block.title} />
        </p>
      )}
      <div className="min-w-0 overflow-x-auto rounded-[var(--radius)] border p-2" style={{ borderColor: 'var(--line)', background: 'var(--paper-2)' }}>
        <svg
          viewBox={`0 0 ${W} ${H}`}
          role="img"
          aria-label={block.title ?? 'Flowchart'}
          style={{ display: 'block', width: '100%', maxWidth: Math.max(W, 560), aspectRatio: `${W} / ${H}` }}
        >
          <defs>
            {Object.entries(DIAGRAM_TONE).map(([k, v]) => (
              <marker key={k} id={`diag-arrow-${k}`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                <path d="M0,0 L10,5 L0,10 z" fill={v} />
              </marker>
            ))}
            <marker id="diag-arrow-ink" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0,0 L10,5 L0,10 z" fill="var(--ink)" />
            </marker>
          </defs>
          {paths.map((p) => (
            <path key={p.key} d={p.d} fill="none" stroke={p.col} strokeWidth={2.5} strokeDasharray={p.dashed ? '7 5' : undefined} markerEnd="url(#diag-arrow-ink)" opacity={0.9} />
          ))}
          {block.nodes.map((n) => {
            const p = pos.get(n.id)!
            const fill = tint(n.tone ? DIAGRAM_TONE[n.tone] : color, 38)
            const shape = n.shape ?? 'rect'
            return (
              <g key={n.id} transform={`translate(${p.cx},${p.cy})`}>
                {shape === 'diamond' && (
                  <polygon points={`0,${-p.h / 2} ${p.w / 2},0 0,${p.h / 2} ${-p.w / 2},0`} fill={fill} stroke="var(--ink)" strokeWidth={2} />
                )}
                {shape === 'rect' && <rect x={-p.w / 2} y={-p.h / 2} width={p.w} height={p.h} rx={14} fill={fill} stroke="var(--ink)" strokeWidth={2} />}
                {shape === 'pill' && <rect x={-p.w / 2} y={-p.h / 2} width={p.w} height={p.h} rx={p.h / 2} fill={fill} stroke="var(--ink)" strokeWidth={2} />}
                {shape === 'circle' && <circle r={p.h / 2} fill={fill} stroke="var(--ink)" strokeWidth={2} />}
                <foreignObject x={-p.w / 2 + 6} y={-p.h / 2 + 4} width={p.w - 12} height={p.h - 8}>
                  <div className="flex h-full flex-col items-center justify-center text-center leading-tight" style={{ color: 'var(--ink)' }}>
                    <span className="text-[12px] font-bold">{byId.get(n.id)?.label}</span>
                    {n.sub && (
                      <span className="mt-0.5 text-[10.5px]" style={{ color: 'var(--ink-soft)' }}>
                        {n.sub}
                      </span>
                    )}
                  </div>
                </foreignObject>
              </g>
            )
          })}
          {paths.map(
            (p) =>
              p.label && (
                <g key={`label-${p.key}`} transform={`translate(${p.mx},${p.my})`}>
                  <rect x={-(p.label.length * 3.6 + 8)} y={-11} width={p.label.length * 7.2 + 16} height={22} rx={11} fill="var(--surface)" stroke="var(--ink)" strokeWidth={1.5} />
                  <text textAnchor="middle" dominantBaseline="central" fontSize={11} fontWeight={700} fill="var(--ink)">
                    {p.label}
                  </text>
                </g>
              ),
          )}
        </svg>
      </div>
      {block.caption && (
        <figcaption className="text-xs" style={{ color: 'var(--ink-soft)' }}>
          <Rich text={block.caption} />
        </figcaption>
      )}
    </figure>
  )
}

export function MindmapBlock({ block, color }: { block: MindmapT; color: string }) {
  const n = block.branches.length
  // More branches need both a wider ring (so neighbours clear each other) and, past about six,
  // an alternating near/far radius so consecutive cards, which sit close together in angle,
  // are not also at the same distance from the centre, which is what causes them to collide.
  const crowded = n > 5
  const dense = n > 7
  // The card's width is a percentage of the container, not a fixed pixel size, so that however
  // narrow the container gets (a phone screen), a branch this far from the centre is
  // geometrically guaranteed to still fit, RX plus half the card's width never exceeds 50.
  const cardWidthPct = dense ? 17 : crowded ? 20 : 24
  const RX = dense ? 38 : crowded ? 36 : 32
  const RY = dense ? 30 : crowded ? 23 : 20
  // Neighbouring cards sit close together in angle, so each ring in the cycle needs to put them
  // at a clearly different distance from the centre too, or tall cards collide anyway. Three
  // rings (rather than two) are needed once there are enough branches that immediate neighbours
  // can end up on the same ring with only two.
  const ringFactor = dense ? [1, 0.58, 0.8] : crowded ? [1, 0.7] : [1, 1]
  const CY = dense ? 44 : crowded ? 40 : 34
  const boxH = dense ? 108 : crowded ? 92 : 80
  const itemCap = dense ? 2 : 3
  const pts = block.branches.map((b, i) => {
    const angle = -90 + (360 / n) * i
    const rad = (angle * Math.PI) / 180
    const ring = ringFactor[i % ringFactor.length]
    const x = 50 + RX * ring * Math.cos(rad)
    const y = CY + RY * ring * Math.sin(rad)
    return { ...b, x, y, angle }
  })
  const palette: DiagramTone[] = ['orange', 'teal', 'pink', 'mint', 'lavender', 'mustard']
  return (
    <figure className="flex min-w-0 max-w-4xl flex-col gap-2">
      <div className="relative w-full min-w-0 rounded-[var(--radius)] border p-2" style={{ borderColor: 'var(--line)', background: 'var(--paper-2)', paddingBottom: `${boxH}%` }}>
        <svg viewBox={`0 0 100 ${boxH}`} preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden>
          {pts.map((p, i) => {
            const perpx = -(p.y - CY) * 0.12
            const perpy = (p.x - 50) * 0.12
            return (
              <path
                key={i}
                d={`M 50,${CY} C ${50 + (p.x - 50) * 0.35 + perpx},${CY + (p.y - CY) * 0.35 + perpy} ${50 + (p.x - 50) * 0.7},${CY + (p.y - CY) * 0.7} ${p.x},${p.y}`}
                fill="none"
                stroke={DIAGRAM_TONE[p.tone ?? palette[i % palette.length]]}
                strokeWidth={0.8}
                strokeLinecap="round"
                opacity={0.85}
                style={{ vectorEffect: 'non-scaling-stroke' } as React.CSSProperties}
              />
            )
          })}
        </svg>
        <div
          className="absolute flex max-w-[9rem] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border px-3 py-2 text-center text-sm font-bold shadow-sm"
          style={{ left: '50%', top: `${(CY / boxH) * 100}%`, borderColor: 'var(--line)', background: tint(color, 45), boxShadow: 'var(--shadow-card)' }}
        >
          <Rich text={block.center} />
        </div>
        {pts.map((p, i) => {
          const tone = DIAGRAM_TONE[p.tone ?? palette[i % palette.length]]
          return (
            <div
              key={i}
              className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-[var(--radius)] border p-2 leading-snug ${dense ? 'text-[10.5px]' : 'text-xs'}`}
              style={{
                left: `${p.x}%`,
                // y is in viewBox units (0..boxH), like the connector lines, so scale it to %.
                top: `${(p.y / boxH) * 100}%`,
                width: `${cardWidthPct}%`,
                maxWidth: '12rem',
                borderColor: 'var(--line)',
                background: tint(tone, 30),
                boxShadow: 'var(--shadow-card)',
                zIndex: 1,
              }}
            >
              <p className="font-bold">
                <Rich text={p.label} />
              </p>
              {p.items && p.items.length > 0 && (
                <ul className="mt-1 flex flex-col gap-0.5" style={{ color: 'var(--ink-soft)' }}>
                  {p.items.slice(0, itemCap).map((it, j) => (
                    <li key={j} className="flex gap-1">
                      <span aria-hidden>·</span>
                      <span className="min-w-0 break-words">
                        <Rich text={it} />
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )
        })}
      </div>
      {block.caption && (
        <figcaption className="text-xs" style={{ color: 'var(--ink-soft)' }}>
          <Rich text={block.caption} />
        </figcaption>
      )}
    </figure>
  )
}
