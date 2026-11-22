import type { Item, Prim } from '../../lib/sign/hand'
import { palette, pts, sortItems } from '../../lib/sign/render'
import type { Palette } from '../../lib/sign/render'

// Draws a frame of a sign (see lib/sign) as an inline SVG.

function PrimEl({ p, pal }: { p: Prim; pal: Palette }) {
  switch (p.k) {
    case 'line': {
      const d = pts(p.pts)
      return (
        <>
          {p.outline && <polyline points={d} fill="none" stroke={pal.ink} strokeWidth={p.w + p.outline * 2} strokeLinecap="round" strokeLinejoin="round" />}
          <polyline points={d} fill="none" stroke={pal[p.fill]} strokeWidth={p.w} strokeOpacity={p.opacity} strokeLinecap="round" strokeLinejoin="round" />
        </>
      )
    }
    case 'poly':
      return <polygon points={pts(p.pts)} fill={pal[p.fill]} stroke={pal.ink} strokeWidth={(p.outline ?? 0) * 2} strokeLinejoin="round" />
    case 'circle':
      return <circle cx={p.c[0]} cy={p.c[1]} r={p.r} fill={pal[p.fill]} stroke={p.outline ? pal.ink : undefined} strokeWidth={p.outline ? p.outline * 2 : undefined} />
    case 'path':
      return <path d={p.d} fill={pal[p.fill]} stroke={p.stroke ? pal[p.stroke] : undefined} strokeWidth={p.w} strokeLinecap="round" strokeLinejoin="round" />
  }
}

export function SignSvg({ items, box, tone, label, className }: { items: Item[]; box: [number, number, number, number]; tone: number; label: string; className?: string }) {
  const pal = palette(tone)
  return (
    <svg viewBox={box.join(' ')} role="img" aria-label={label} className={className} style={{ display: 'block', width: '100%', height: 'auto' }}>
      {sortItems(items).map((it, i) => (
        <g key={i}>
          {it.prims.map((p, j) => (
            <PrimEl key={j} p={p} pal={pal} />
          ))}
        </g>
      ))}
    </svg>
  )
}
