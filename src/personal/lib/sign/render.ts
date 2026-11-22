import type { Item, Paint, Prim, V2 } from './hand'

// Skin tones the viewer can pick, plus the fixed colours of the drawing.
export const TONES = [
  { name: 'Light', skin: '#f6d2b4', palm: '#fbe1cc', crease: '#d9a585' },
  { name: 'Medium light', skin: '#e9b48c', palm: '#f3c9a7', crease: '#c08562' },
  { name: 'Medium', skin: '#c98d62', palm: '#dca47c', crease: '#9c6542' },
  { name: 'Medium dark', skin: '#9a6440', palm: '#b77f59', crease: '#704426' },
  { name: 'Dark', skin: '#6b4329', palm: '#8a5d40', crease: '#4a2c19' },
] as const

export type Palette = Record<Paint, string>

export function palette(tone = 1): Palette {
  const t = TONES[tone] ?? TONES[1]
  return {
    skin: t.skin,
    palm: t.palm,
    crease: t.crease,
    nail: '#fff3ea',
    sleeve: '#7cc4c0',
    shirt: '#7cc4c0',
    hair: '#3a2a20',
    ink: '#2a1d16',
    cheek: '#f2939366',
    none: 'none',
  }
}

const f = (n: number) => Math.round(n * 10) / 10
export const pts = (p: V2[]) => p.map(([x, y]) => `${f(x)},${f(y)}`).join(' ')

// One drawing primitive as SVG markup. Lines with an outline are drawn twice: a wider dark
// stroke underneath, then the fill colour on top.
export function primSvg(p: Prim, pal: Palette): string {
  const ink = pal.ink
  switch (p.k) {
    case 'line': {
      const d = `points="${pts(p.pts)}" fill="none" stroke-linecap="round" stroke-linejoin="round"`
      const op = p.opacity !== undefined ? ` stroke-opacity="${f(p.opacity)}"` : ''
      return (
        (p.outline ? `<polyline ${d} stroke="${ink}" stroke-width="${f(p.w + p.outline * 2)}"/>` : '') +
        `<polyline ${d} stroke="${pal[p.fill]}" stroke-width="${f(p.w)}"${op}/>`
      )
    }
    case 'poly':
      return `<polygon points="${pts(p.pts)}" fill="${pal[p.fill]}" stroke="${ink}" stroke-width="${f((p.outline ?? 0) * 2)}" stroke-linejoin="round"/>`
    case 'circle':
      return `<circle cx="${f(p.c[0])}" cy="${f(p.c[1])}" r="${f(p.r)}" fill="${pal[p.fill]}"${p.outline ? ` stroke="${ink}" stroke-width="${f(p.outline * 2)}"` : ''}/>`
    case 'path':
      return `<path d="${p.d}" fill="${pal[p.fill]}"${p.stroke ? ` stroke="${pal[p.stroke]}" stroke-width="${f(p.w ?? 2)}" stroke-linecap="round" stroke-linejoin="round"` : ''}/>`
  }
}

export function sortItems(items: Item[]) {
  return [...items].sort((a, b) => a.z - b.z)
}

export function sceneSvg(items: Item[], box: [number, number, number, number], pal: Palette, size = 240) {
  const body = sortItems(items)
    .flatMap((it) => it.prims.map((p) => primSvg(p, pal)))
    .join('')
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${box.map(f).join(' ')}" width="${size}" height="${f((size * box[3]) / box[2])}">${body}</svg>`
}
