// A tiny rope renderer for knot diagrams. A diagram is a list of strands (ropes and spars)
// whose control points carry a depth `z`; the renderer smooths each rope through its points,
// finds every place two ropes cross in the picture, and redraws the strand that is nearer the
// viewer on top with a dark outline, so over-and-under reads the way it does on a real knot.

export type Pt = [number, number, number?]

export type Strand = {
  pts: Pt[]
  // 'rope' is smoothed through its points; 'spar' is a straight pole or stick between two points.
  kind?: 'rope' | 'spar'
  w?: number
  color?: string
  // From this control point onwards the rope is drawn in another colour (the working end).
  tail?: { from: number; color: string }
  // Depth of a spar; ropes use the z of each point instead.
  z?: number
  // Draw this rope without end caps rounded (used for a rope that disappears into the frame).
  flat?: boolean
}

export type Arrow = { from: [number, number]; to: [number, number]; bend?: number; color?: string }
export type Label = { x: number; y: number; text: string; anchor?: 'start' | 'middle' | 'end' }

export type Diagram = {
  strands: Strand[]
  arrows?: Arrow[]
  labels?: Label[]
  // Draw a faint dotted outline here (a path d string) to show a position to aim for.
  ghost?: string[]
}

type Sample = { x: number; y: number; z: number; t: number }

const OUTLINE = 'var(--ink)'

function catmull(pts: Pt[], per = 10): Sample[] {
  const n = pts.length
  const out: Sample[] = []
  if (n < 2) return out
  const at = (i: number) => pts[Math.max(0, Math.min(n - 1, i))]
  for (let i = 0; i < n - 1; i++) {
    const p0 = at(i - 1), p1 = at(i), p2 = at(i + 1), p3 = at(i + 2)
    for (let s = 0; s < per; s++) {
      const u = s / per
      const u2 = u * u, u3 = u2 * u
      const f = (a: number, b: number, c: number, d: number) => 0.5 * (2 * b + (-a + c) * u + (2 * a - 5 * b + 4 * c - d) * u2 + (-a + 3 * b - 3 * c + d) * u3)
      const z = (p1[2] ?? 0) + ((p2[2] ?? 0) - (p1[2] ?? 0)) * u
      out.push({ x: f(p0[0], p1[0], p2[0], p3[0]), y: f(p0[1], p1[1], p2[1], p3[1]), z, t: i + u })
    }
  }
  const l = pts[n - 1]
  out.push({ x: l[0], y: l[1], z: l[2] ?? 0, t: n - 1 })
  return out
}

type Piece = { strand: number; samples: Sample[]; band: number; startsCut: boolean; endsCut: boolean }

const f1 = (n: number) => (Math.round(n * 10) / 10).toString()
const poly = (s: Sample[]) => 'M' + s.map((p) => `${f1(p.x)} ${f1(p.y)}`).join('L')

function segIntersect(a: Sample, b: Sample, c: Sample, d: Sample) {
  const r = { x: b.x - a.x, y: b.y - a.y }
  const s = { x: d.x - c.x, y: d.y - c.y }
  const den = r.x * s.y - r.y * s.x
  if (Math.abs(den) < 1e-9) return null
  const t = ((c.x - a.x) * s.y - (c.y - a.y) * s.x) / den
  const u = ((c.x - a.x) * r.y - (c.y - a.y) * r.x) / den
  if (t < 0 || t > 1 || u < 0 || u > 1) return null
  return { t, u }
}

export function diagramSvg(d: Diagram, size: [number, number] = [360, 240], id = 'k'): string {
  const [W, H] = size
  const strands = d.strands
  const sparZ = [...new Set(strands.filter((s) => s.kind === 'spar').map((s) => s.z ?? 0))].sort((a, b) => a - b)
  const bandOf = (z: number) => sparZ.filter((t) => z > t + 1e-9).length

  // Sample every rope and cut it into pieces that each sit in one depth band between spars.
  const pieces: Piece[] = []
  strands.forEach((st, si) => {
    if (st.kind === 'spar') return
    const ss = catmull(st.pts)
    let cur: Sample[] = []
    let band = -1
    let startsCut = false
    const flush = (endsCut: boolean) => {
      if (cur.length > 1) pieces.push({ strand: si, samples: cur, band, startsCut, endsCut })
      cur = []
    }
    for (let i = 0; i < ss.length; i++) {
      const p = ss[i]
      const b = bandOf(p.z)
      if (band === -1) {
        band = b
        cur = [p]
        continue
      }
      if (b === band) {
        cur.push(p)
        continue
      }
      // z crosses a spar's depth between the previous sample and this one: cut at the midpoint.
      const q = ss[i - 1]
      const m: Sample = { x: (p.x + q.x) / 2, y: (p.y + q.y) / 2, z: (p.z + q.z) / 2, t: (p.t + q.t) / 2 }
      cur.push(m)
      flush(true)
      band = b
      startsCut = true
      cur = [m, p]
    }
    flush(false)
    startsCut = false
  })

  const style = (s: Strand) => ({ w: s.w ?? (s.kind === 'spar' ? 30 : 9), color: s.color ?? (s.kind === 'spar' ? '#b9854f' : '#e07b2a') })
  const colorAt = (s: Strand, t: number) => (s.tail && t >= s.tail.from ? s.tail.color : style(s).color)

  const drawRun = (pc: Piece, from: number, to: number, cut0: boolean, cut1: boolean) => {
    const st = strands[pc.strand]
    const { w } = style(st)
    const ss = pc.samples.slice(from, to + 1)
    if (ss.length < 2) return ''
    // Outline: a single path with round caps unless the end is a cut.
    let out = ''
    const capStyle = cut0 || cut1 || st.flat ? 'butt' : 'round'
    out += `<path d="${poly(ss)}" fill="none" stroke="${OUTLINE}" stroke-width="${w + 3.2}" stroke-linecap="${capStyle}" stroke-linejoin="round"/>`
    // Fill, split into colour runs.
    let start = 0
    for (let i = 1; i <= ss.length; i++) {
      const prev = colorAt(st, ss[Math.max(i - 1, 0)].t)
      const here = i < ss.length ? colorAt(st, ss[i].t) : prev
      if (i === ss.length || here !== prev) {
        const run = ss.slice(start, Math.min(i + 1, ss.length))
        out += `<path d="${poly(run)}" fill="none" stroke="${prev}" stroke-width="${w}" stroke-linecap="${start === 0 ? capStyle : 'butt'}" stroke-linejoin="round"/>`
        start = i
      }
    }
    out += `<path d="${poly(ss)}" fill="none" stroke="#000" stroke-opacity=".2" stroke-width="${w}" stroke-dasharray="1.4 3.1" stroke-linecap="butt"/>`
    out += `<path d="${poly(ss)}" fill="none" stroke="#fff" stroke-opacity=".28" stroke-width="${Math.max(1.5, w * 0.22)}" stroke-linecap="round" transform="translate(0 -${f1(w * 0.18)})"/>`
    return out
  }

  const spar = (s: Strand) => {
    const { w, color } = style(s)
    const a = s.pts[0], b = s.pts[1]
    const dl = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1
    const nx = -(b[1] - a[1]) / dl, ny = (b[0] - a[0]) / dl
    return (
      `<line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}" stroke="${OUTLINE}" stroke-width="${w + 3.2}" stroke-linecap="butt"/>` +
      `<line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}" stroke="${color}" stroke-width="${w}" stroke-linecap="butt"/>` +
      `<line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}" stroke="#000" stroke-opacity=".12" stroke-width="${w * 0.35}" stroke-linecap="butt" transform="translate(${f1(nx * w * 0.22)} ${f1(ny * w * 0.22)})"/>`
    )
  }

  // Crossings inside a band: redraw the nearer piece over the farther one.
  const byBand = new Map<number, Piece[]>()
  pieces.forEach((p) => byBand.set(p.band, [...(byBand.get(p.band) ?? []), p]))
  const arcWindow = (pc: Piece, i: number, r: number) => {
    let a = i
    let acc = 0
    while (a > 0 && acc < r) {
      acc += Math.hypot(pc.samples[a].x - pc.samples[a - 1].x, pc.samples[a].y - pc.samples[a - 1].y)
      a--
    }
    let b = i
    acc = 0
    while (b < pc.samples.length - 1 && acc < r) {
      acc += Math.hypot(pc.samples[b + 1].x - pc.samples[b].x, pc.samples[b + 1].y - pc.samples[b].y)
      b++
    }
    return [a, b] as const
  }
  const overlays: { band: number; z: number; svg: string }[] = []
  for (const [band, ps] of byBand) {
    for (let a = 0; a < ps.length; a++) {
      for (let b = a; b < ps.length; b++) {
        const A = ps[a], B = ps[b]
        for (let i = 0; i < A.samples.length - 1; i++) {
          for (let j = a === b ? i + 2 : 0; j < B.samples.length - 1; j++) {
            if (a !== b && A.strand === B.strand && Math.abs(A.samples[i].t - B.samples[j].t) < 1.2) continue
            const hit = segIntersect(A.samples[i], A.samples[i + 1], B.samples[j], B.samples[j + 1])
            if (!hit) continue
            const za = A.samples[i].z + (A.samples[i + 1].z - A.samples[i].z) * hit.t
            const zb = B.samples[j].z + (B.samples[j + 1].z - B.samples[j].z) * hit.u
            const [over, idx, other] = za >= zb ? [A, i, B] : [B, j, A]
            const wOver = style(strands[over.strand]).w
            const wOther = style(strands[other.strand]).w
            const [s0, s1] = arcWindow(over, idx, Math.max(wOther * 0.62 + 4, wOver * 0.5 + 3))
            overlays.push({ band, z: Math.max(za, zb), svg: drawRun(over, s0, s1, true, true) })
          }
        }
      }
    }
  }

  let body = ''
  const bands = sparZ.length + 1
  for (let b = 0; b < bands; b++) {
    for (const pc of byBand.get(b) ?? []) body += drawRun(pc, 0, pc.samples.length - 1, pc.startsCut, pc.endsCut)
    for (const o of overlays.filter((o) => o.band === b).sort((p, q) => p.z - q.z)) body += o.svg
    if (b < sparZ.length) {
      for (const s of strands.filter((s) => s.kind === 'spar' && (s.z ?? 0) === sparZ[b])) body += spar(s)
    }
  }

  const arrows = (d.arrows ?? [])
    .map((a) => {
      const [x1, y1] = a.from, [x2, y2] = a.to
      const mx = (x1 + x2) / 2, my = (y1 + y2) / 2
      const dx = x2 - x1, dy = y2 - y1
      const len = Math.hypot(dx, dy) || 1
      const b = a.bend ?? 0
      const cx = mx - (dy / len) * b, cy = my + (dx / len) * b
      const col = a.color ?? 'var(--ink)'
      return `<path d="M${f1(x1)} ${f1(y1)}Q${f1(cx)} ${f1(cy)} ${f1(x2)} ${f1(y2)}" fill="none" stroke="${col}" stroke-width="2.4" stroke-dasharray="5 4" marker-end="url(#${id}-ar)" style="color:${col}"/>`
    })
    .join('')
  const ghosts = (d.ghost ?? []).map((g) => `<path d="${g}" fill="none" stroke="var(--ink)" stroke-opacity=".35" stroke-width="2" stroke-dasharray="2 5"/>`).join('')
  const labels = (d.labels ?? [])
    .map((l) => `<text x="${l.x}" y="${l.y}" text-anchor="${l.anchor ?? 'middle'}" font-size="12" font-weight="700" fill="var(--ink)" stroke="var(--surface)" stroke-width="3.2" paint-order="stroke" stroke-linejoin="round">${l.text}</text>`)
    .join('')
  return (
    `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" role="img" style="width:100%;height:auto;display:block">` +
    `<defs><marker id="${id}-ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 1L9 5L0 9z" fill="currentColor"/></marker></defs>` +
    ghosts +
    body +
    arrows +
    labels +
    `</svg>`
  )
}

// Points on a helix around a vertical pole, for wraps and lashings. `cx` is the pole's centre
// line, `turn` angles are measured from the front (0 = nearest the viewer, positive towards the
// viewer's right), `y` falls linearly as the angle grows.
export function wrapPts(cx: number, r: number, a0: number, a1: number, y0: number, y1: number, step = 30): Pt[] {
  const out: Pt[] = []
  const n = Math.max(2, Math.ceil(Math.abs(a1 - a0) / step) + 1)
  for (let i = 0; i < n; i++) {
    const u = i / (n - 1)
    const a = ((a0 + (a1 - a0) * u) * Math.PI) / 180
    out.push([cx + r * Math.sin(a), y0 + (y1 - y0) * u, r * Math.cos(a)])
  }
  return out
}
