/**
 * The Document Lab's typesetter.
 *
 * Blocks go in, pages of positioned draw operations come out, measured in
 * PostScript points against the same font metrics the PDF is drawn with. Both
 * the on-screen A4 preview and the downloaded file render this one display
 * list, so the preview is not an approximation of the document: it is the
 * document, drawn to a screen instead of to a file.
 *
 * Two things the flow takes care of, because they are what separates a
 * generated form from a professional one:
 *
 * - **A heading never ends a page.** Fragments can ask to be kept with what
 *   follows, and the chain moves to the next page together.
 * - **A table that splits repeats its headings.** Page two of a roster says
 *   what its columns are instead of leaving the reader to scroll back.
 */
import type { Align, Block } from './types'
import { ASCENT, DESCENT, winAnsi, type Face, type Family, type FontId, type Metrics } from './fonts'

// A4 at 72dpi, which is the unit PDF itself works in.
export const PAGE_W = 595.28
export const PAGE_H = 841.89
export const MARGIN_X = 54
export const MARGIN_TOP = 50
export const MARGIN_BOTTOM = 52
const FOOTER_GAP = 24

export const CONTENT_X = MARGIN_X
export const CONTENT_W = PAGE_W - MARGIN_X * 2
export const CONTENT_TOP = MARGIN_TOP
export const CONTENT_H = PAGE_H - MARGIN_TOP - MARGIN_BOTTOM - FOOTER_GAP

export const INK = '#111111'
export const SOFT = '#4a4a4a'
export const FAINT = '#7d7d7d'
export const RULE = '#b9b9b9'
export const HAIR = '#d8d8d8'
export const BAND = '#eeeeee'
export const ZEBRA = '#f7f7f7'

export type Op =
  /** `y` is the baseline, never a box edge: that is what keeps SVG and PDF in step. */
  | { t: 'text'; x: number; y: number; size: number; font: FontId; text: string; color: string }
  | { t: 'rect'; x: number; y: number; w: number; h: number; fill?: string; stroke?: string; lw?: number }
  | { t: 'line'; x: number; y: number; x2: number; y2: number; color: string; lw: number }
  | { t: 'image'; x: number; y: number; w: number; h: number; src: string }

export type Page = { ops: Op[] }

export type DocLayout = {
  pages: Page[]
  width: number
  height: number
  family: Family
}

export type Shell = {
  family: Family
  /** Shown in the running header from page two on. */
  runningTitle: string
  footerLeft: string
}

// ---------------------------------------------------------------- text

const lineHeight = (size: number) => size * 1.34

function fid(family: Family, face: Face): FontId {
  return `${family}-${face}`
}

/** Greedy wrap, honouring explicit newlines and breaking words too long to fit. */
function wrap(m: Metrics, text: string, size: number, font: FontId, width: number): string[] {
  const out: string[] = []
  for (const para of winAnsi(text).split('\n')) {
    const words = para.split(/\s+/).filter((w) => w.length > 0)
    if (words.length === 0) {
      out.push('')
      continue
    }
    let line = ''
    for (const word of words) {
      const candidate = line ? `${line} ${word}` : word
      if (m.width(candidate, size, font) <= width || !line) {
        // A single word wider than the column is cut rather than allowed to
        // run into the margin.
        if (!line && m.width(word, size, font) > width) {
          let chunk = ''
          for (const ch of word) {
            if (m.width(chunk + ch, size, font) > width && chunk) {
              out.push(chunk)
              chunk = ch
            } else {
              chunk += ch
            }
          }
          line = chunk
          continue
        }
        line = candidate
      } else {
        out.push(line)
        line = word
      }
    }
    if (line) out.push(line)
  }
  return out
}

function alignX(m: Metrics, text: string, size: number, font: FontId, x: number, w: number, align: Align): number {
  if (align === 'l') return x
  const tw = m.width(text, size, font)
  return align === 'c' ? x + (w - tw) / 2 : x + w - tw
}

/** One line of text, clipped with an ellipsis rather than overflowing its cell. */
function clip(m: Metrics, text: string, size: number, font: FontId, width: number): string {
  const clean = winAnsi(text).replace(/\s+/g, ' ').trim()
  if (m.width(clean, size, font) <= width) return clean
  let out = ''
  for (const ch of clean) {
    if (m.width(`${out + ch}...`, size, font) > width) break
    out += ch
  }
  return `${out.trimEnd()}...`
}

function text(x: number, baseline: number, size: number, font: FontId, value: string, color = INK): Op {
  return { t: 'text', x, y: baseline, size, font, text: winAnsi(value), color }
}

// ---------------------------------------------------------------- fragments

type Frag = {
  h: number
  /** Keep with the fragment that follows: headings, labels, table headings. */
  keepWithNext?: boolean
  /** Re-drawn at the top of the next page when a table splits. */
  repeatHeader?: Frag
  /** A spacer, dropped when it would otherwise open a page. */
  spacer?: boolean
  pagebreak?: boolean
  draw: (top: number) => Op[]
}

const spacer = (h: number): Frag => ({ h, spacer: true, draw: () => [] })

function tick(x: number, y: number, size: number): Op[] {
  // Two strokes, because a glyph tick is not in WinAnsi at a usable weight.
  return [
    { t: 'line', x: x + size * 0.2, y: y + size * 0.55, x2: x + size * 0.42, y2: y + size * 0.78, color: INK, lw: 1.1 },
    { t: 'line', x: x + size * 0.42, y: y + size * 0.78, x2: x + size * 0.82, y2: y + size * 0.22, color: INK, lw: 1.1 },
  ]
}

/** Column widths from weights, filling the available width exactly. */
function columns(total: number, weights: number[] | undefined, count: number): number[] {
  const w = weights && weights.length === count ? weights : Array.from({ length: count }, () => 1)
  const sum = w.reduce((a, b) => a + b, 0) || 1
  return w.map((x) => (x / sum) * total)
}

function blockFragments(m: Metrics, block: Block, family: Family): Frag[] {
  const W = CONTENT_W
  const X = CONTENT_X

  switch (block.k) {
    // ---- masthead ----
    case 'masthead': {
      const frags: Frag[] = []
      const school = block.school.trim()
      const metaRows = (block.meta ?? []).filter((p) => p.value.trim())
      const titleSize = 17
      const schoolH = school ? lineHeight(9) : 0
      const titleLines = wrap(m, block.title, titleSize, fid(family, 'b'), W)
      const subLines = block.subtitle?.trim() ? wrap(m, block.subtitle, 10, fid(family, 'i'), W) : []
      // Label above value, not beside it: a long label and a long value in one
      // row is the one way a masthead can collide with itself.
      const metaCols = Math.min(3, Math.max(1, metaRows.length))
      const metaPerCol = Math.ceil(metaRows.length / metaCols)
      const META_ROW_H = 23
      const metaH = metaRows.length ? 10 + metaPerCol * META_ROW_H : 0
      const h =
        schoolH + titleLines.length * lineHeight(titleSize) + (subLines.length ? 3 + subLines.length * lineHeight(10) : 0) + 9 + metaH + 12

      frags.push({
        h,
        draw: (top) => {
          const ops: Op[] = []
          let y = top
          if (school) {
            y += 9 * ASCENT[family]
            ops.push(text(X, y, 9, fid(family, 'b'), school.toUpperCase(), FAINT))
            y += lineHeight(9) - 9 * ASCENT[family]
          }
          for (const line of titleLines) {
            y += titleSize * ASCENT[family]
            ops.push(text(X, y, titleSize, fid(family, 'b'), line, INK))
            y += lineHeight(titleSize) - titleSize * ASCENT[family]
          }
          if (subLines.length) {
            y += 3
            for (const line of subLines) {
              y += 10 * ASCENT[family]
              ops.push(text(X, y, 10, fid(family, 'i'), line, SOFT))
              y += lineHeight(10) - 10 * ASCENT[family]
            }
          }
          y += 7
          ops.push({ t: 'line', x: X, y, x2: X + W, y2: y, color: INK, lw: 1.2 })
          if (metaRows.length) {
            y += 10
            const colW = W / metaCols
            metaRows.forEach((pair, i) => {
              const col = Math.floor(i / metaPerCol)
              const row = i % metaPerCol
              const cx = X + col * colW
              const by = y + row * META_ROW_H
              const inner = colW - 12
              ops.push(
                text(cx, by + 7.5 * ASCENT[family], 7.5, fid(family, 'b'), clip(m, pair.label.toUpperCase(), 7.5, fid(family, 'b'), inner), FAINT)
              )
              ops.push(
                text(cx, by + 11 + 9.5 * ASCENT[family], 9.5, fid(family, 'r'), clip(m, pair.value, 9.5, fid(family, 'r'), inner), INK)
              )
            })
          }
          return ops
        },
      })
      return frags
    }

    // ---- headings ----
    case 'heading': {
      const level = block.level ?? 1
      const size = level === 1 ? 11 : 10
      const face: Face = 'b'
      const label = level === 1 ? block.text.toUpperCase() : block.text
      const lines = wrap(m, label, size, fid(family, face), W)
      const ruleH = level === 1 ? 6 : 0
      return [
        {
          h: 12 + lines.length * lineHeight(size) + ruleH,
          keepWithNext: true,
          draw: (top) => {
            const ops: Op[] = []
            let y = top + 12
            for (const line of lines) {
              y += size * ASCENT[family]
              ops.push(text(X, y, size, fid(family, face), line, INK))
              y += lineHeight(size) - size * ASCENT[family]
            }
            if (level === 1) {
              ops.push({ t: 'line', x: X, y: y + 3, x2: X + W, y2: y + 3, color: RULE, lw: 0.8 })
            }
            return ops
          },
        },
        // The gap belongs to the heading: without this the chain ends at the
        // spacer and the heading can still be left alone at the page foot.
        { ...spacer(level === 1 ? 7 : 4), keepWithNext: true },
      ]
    }

    // ---- paragraphs ----
    case 'para': {
      const size = block.size ?? 10
      const face = block.face ?? 'r'
      const font = fid(family, face)
      const align = block.align ?? 'l'
      const lines = wrap(m, block.text, size, font, W)
      const frags: Frag[] = lines.map((line) => ({
        h: lineHeight(size),
        draw: (top) => [text(alignX(m, line, size, font, X, W, align), top + size * ASCENT[family], size, font, line, face === 'i' ? SOFT : INK)],
      }))
      frags.push(spacer(6))
      return frags
    }

    // ---- label / value grid ----
    case 'kv': {
      const cols = block.cols ?? 2
      const pairs = block.rows
      const groups: { label: string; value: string }[][] = []
      for (let i = 0; i < pairs.length; i += cols) groups.push(pairs.slice(i, i + cols))
      const cellW = W / cols
      const labelW = 86
      const valueW = cellW - labelW - 14
      const valueFont = fid(family, 'r')

      const frags: Frag[] = groups.map((group, gi) => {
        const wrapped = group.map((p) => wrap(m, p.value || '-', 9.5, valueFont, valueW))
        const rowH = Math.max(21, ...wrapped.map((lines) => 10 + lines.length * lineHeight(9.5)))
        return {
          h: rowH,
          draw: (top) => {
            const ops: Op[] = [
              { t: 'rect', x: X, y: top, w: W, h: rowH, stroke: HAIR, lw: 0.7 },
            ]
            if (gi === 0) ops.push({ t: 'line', x: X, y: top, x2: X + W, y2: top, color: RULE, lw: 0.9 })
            group.forEach((pair, ci) => {
              const cx = X + ci * cellW
              if (ci > 0) ops.push({ t: 'line', x: cx, y: top, x2: cx, y2: top + rowH, color: HAIR, lw: 0.7 })
              ops.push(
                text(
                  cx + 7,
                  top + 5 + 7.5 * ASCENT[family],
                  7.5,
                  fid(family, 'b'),
                  clip(m, pair.label.toUpperCase(), 7.5, fid(family, 'b'), labelW - 14),
                  FAINT
                )
              )
              let vy = top + 5
              for (const line of wrapped[ci]) {
                vy += 9.5 * ASCENT[family]
                ops.push(text(cx + labelW, vy, 9.5, valueFont, line, INK))
                vy += lineHeight(9.5) - 9.5 * ASCENT[family]
              }
            })
            return ops
          },
        }
      })
      frags.push(spacer(10))
      return frags
    }

    // ---- label + body, ruled when empty ----
    case 'prose': {
      const frags: Frag[] = []
      const body = block.text.trim()
      if (block.label) {
        frags.push({
          h: 14,
          keepWithNext: true,
          draw: (top) => [text(X, top + 4 + 8 * ASCENT[family], 8, fid(family, 'b'), block.label!.toUpperCase(), FAINT)],
        })
      }
      if (body) {
        const font = fid(family, 'r')
        for (const line of wrap(m, body, 10, font, W)) {
          frags.push({ h: lineHeight(10), draw: (top) => [text(X, top + 10 * ASCENT[family], 10, font, line, INK)] })
        }
      } else {
        const n = Math.max(1, block.minLines ?? 3)
        for (let i = 0; i < n; i++) {
          frags.push({
            h: 19,
            draw: (top) => [{ t: 'line', x: X, y: top + 15, x2: X + W, y2: top + 15, color: RULE, lw: 0.6 }],
          })
        }
      }
      frags.push(spacer(10))
      return frags
    }

    // ---- tables ----
    case 'table': {
      const count = Math.max(1, block.head?.length ?? block.rows[0]?.length ?? 1)
      const widths = columns(W, block.widths, count)
      const aligns: Align[] = Array.from({ length: count }, (_, i) => block.align?.[i] ?? 'l')
      const pad = 6
      const headFont = fid(family, 'b')
      const cellFont = fid(family, 'r')

      const cellLines = (row: string[]) => row.map((cell, i) => wrap(m, cell ?? '', 9, cellFont, widths[i] - pad * 2))
      const rowHeight = (lines: string[][]) => Math.max(19, 8 + Math.max(...lines.map((l) => l.length)) * lineHeight(9))

      const drawRow = (row: string[], lines: string[][], top: number, h: number, opts: { head?: boolean; zebra?: boolean }): Op[] => {
        const ops: Op[] = []
        if (opts.head) ops.push({ t: 'rect', x: X, y: top, w: W, h, fill: BAND })
        else if (opts.zebra) ops.push({ t: 'rect', x: X, y: top, w: W, h, fill: ZEBRA })
        let cx = X
        row.forEach((_, i) => {
          const font = opts.head ? headFont : cellFont
          let ty = top + 4
          for (const line of lines[i]) {
            ty += 9 * ASCENT[family]
            ops.push(text(alignX(m, line, 9, font, cx + pad, widths[i] - pad * 2, aligns[i]), ty, 9, font, line, opts.head ? INK : INK))
            ty += lineHeight(9) - 9 * ASCENT[family]
          }
          if (i > 0) ops.push({ t: 'line', x: cx, y: top, x2: cx, y2: top + h, color: HAIR, lw: 0.6 })
          cx += widths[i]
        })
        ops.push({ t: 'rect', x: X, y: top, w: W, h, stroke: opts.head ? RULE : HAIR, lw: opts.head ? 0.9 : 0.6 })
        return ops
      }

      const frags: Frag[] = []
      let header: Frag | undefined
      if (block.head) {
        const lines = cellLines(block.head)
        const h = rowHeight(lines)
        header = {
          h,
          keepWithNext: true,
          draw: (top) => drawRow(block.head!, lines, top, h, { head: true }),
        }
        frags.push(header)
      }
      block.rows.forEach((row, ri) => {
        const padded = Array.from({ length: count }, (_, i) => row[i] ?? '')
        const lines = cellLines(padded)
        const h = rowHeight(lines)
        frags.push({
          h,
          repeatHeader: header,
          draw: (top) => drawRow(padded, lines, top, h, { zebra: block.zebra && ri % 2 === 1 }),
        })
      })
      if (block.rows.length === 0 && !block.head) return [spacer(0)]
      frags.push(spacer(10))
      return frags
    }

    // ---- checklist ----
    case 'checklist': {
      const cols = block.cols ?? 1
      const cellW = W / cols
      const box = 9
      const groups: { text: string; checked?: boolean }[][] = []
      for (let i = 0; i < block.items.length; i += cols) groups.push(block.items.slice(i, i + cols))

      const frags: Frag[] = groups.map((group) => {
        const wrapped = group.map((item) => wrap(m, item.text, 9.5, fid(family, 'r'), cellW - box - 16))
        const h = Math.max(16, ...wrapped.map((l) => l.length * lineHeight(9.5) + 3))
        return {
          h,
          draw: (top) => {
            const ops: Op[] = []
            group.forEach((item, ci) => {
              const cx = X + ci * cellW
              ops.push({ t: 'rect', x: cx, y: top + 2, w: box, h: box, stroke: INK, lw: 0.8 })
              if (item.checked) ops.push(...tick(cx, top + 2, box))
              let ty = top
              for (const line of wrapped[ci]) {
                ty += 9.5 * ASCENT[family]
                ops.push(text(cx + box + 7, ty, 9.5, fid(family, 'r'), line, INK))
                ty += lineHeight(9.5) - 9.5 * ASCENT[family]
              }
            })
            return ops
          },
        }
      })
      frags.push(spacer(9))
      return frags
    }

    // ---- rating matrix ----
    case 'rating': {
      const scale = block.scale
      const boxCol = Math.min(46, Math.max(30, (W * 0.52) / Math.max(1, scale.length)))
      const labelW = W - boxCol * scale.length
      const headFont = fid(family, 'b')
      const headLines = scale.map((s) => wrap(m, s, 7.5, headFont, boxCol - 6))
      const headH = Math.max(18, 7 + Math.max(...headLines.map((l) => l.length)) * lineHeight(7.5))

      const header: Frag = {
        h: headH,
        keepWithNext: true,
        draw: (top) => {
          const ops: Op[] = [{ t: 'rect', x: X, y: top, w: W, h: headH, fill: BAND, stroke: RULE, lw: 0.9 }]
          scale.forEach((_, i) => {
            const cx = X + labelW + i * boxCol
            ops.push({ t: 'line', x: cx, y: top, x2: cx, y2: top + headH, color: HAIR, lw: 0.6 })
            let ty = top + 4
            for (const line of headLines[i]) {
              ty += 7.5 * ASCENT[family]
              ops.push(text(alignX(m, line, 7.5, headFont, cx + 3, boxCol - 6, 'c'), ty, 7.5, headFont, line, INK))
              ty += lineHeight(7.5) - 7.5 * ASCENT[family]
            }
          })
          return ops
        },
      }

      const frags: Frag[] = [header]
      block.rows.forEach((row) => {
        const lines = wrap(m, row.text, 9.5, fid(family, 'r'), labelW - 12)
        const h = Math.max(20, 7 + lines.length * lineHeight(9.5))
        frags.push({
          h,
          repeatHeader: header,
          draw: (top) => {
            const ops: Op[] = [{ t: 'rect', x: X, y: top, w: W, h, stroke: HAIR, lw: 0.6 }]
            let ty = top + 3
            for (const line of lines) {
              ty += 9.5 * ASCENT[family]
              ops.push(text(X + 6, ty, 9.5, fid(family, 'r'), line, INK))
              ty += lineHeight(9.5) - 9.5 * ASCENT[family]
            }
            scale.forEach((point, i) => {
              const cx = X + labelW + i * boxCol
              ops.push({ t: 'line', x: cx, y: top, x2: cx, y2: top + h, color: HAIR, lw: 0.6 })
              const bx = cx + boxCol / 2 - 4.5
              const by = top + h / 2 - 4.5
              ops.push({ t: 'rect', x: bx, y: by, w: 9, h: 9, stroke: INK, lw: 0.8 })
              if (row.value && row.value.toLowerCase() === point.toLowerCase()) ops.push(...tick(bx, by, 9))
            })
            return ops
          },
        })
      })
      frags.push(spacer(10))
      return frags
    }

    // ---- bullets ----
    case 'bullets': {
      const indent = 16
      const font = fid(family, 'r')
      const frags: Frag[] = []
      block.items.forEach((item, i) => {
        const lines = wrap(m, item, 9.5, font, W - indent)
        lines.forEach((line, li) => {
          frags.push({
            h: lineHeight(9.5),
            keepWithNext: li < lines.length - 1,
            draw: (top) => {
              const baseline = top + 9.5 * ASCENT[family]
              const ops: Op[] = [text(X + indent, baseline, 9.5, font, line, INK)]
              if (li === 0) {
                ops.push(text(X + 3, baseline, 9.5, block.ordered ? font : fid(family, 'b'), block.ordered ? `${i + 1}.` : '·', SOFT))
              }
              return ops
            },
          })
        })
      })
      frags.push(spacer(8))
      return frags
    }

    // ---- ruled writing lines ----
    case 'lines': {
      const frags: Frag[] = []
      if (block.label) {
        frags.push({
          h: 14,
          keepWithNext: true,
          draw: (top) => [text(X, top + 4 + 8 * ASCENT[family], 8, fid(family, 'b'), block.label!.toUpperCase(), FAINT)],
        })
      }
      for (let i = 0; i < Math.max(1, block.n); i++) {
        frags.push({ h: 19, draw: (top) => [{ t: 'line', x: X, y: top + 15, x2: X + W, y2: top + 15, color: RULE, lw: 0.6 }] })
      }
      frags.push(spacer(10))
      return frags
    }

    // ---- boxed notice ----
    case 'notice': {
      const strong = block.tone === 'strong'
      const font = fid(family, strong ? 'b' : 'r')
      const lines = wrap(m, block.text, 9, font, W - 24)
      const h = 14 + lines.length * lineHeight(9)
      return [
        {
          h,
          draw: (top) => {
            const ops: Op[] = [
              { t: 'rect', x: X, y: top, w: W, h, fill: strong ? undefined : ZEBRA, stroke: strong ? INK : HAIR, lw: strong ? 1 : 0.7 },
            ]
            let ty = top + 7
            for (const line of lines) {
              ty += 9 * ASCENT[family]
              ops.push(text(X + 12, ty, 9, font, line, INK))
              ty += lineHeight(9) - 9 * ASCENT[family]
            }
            return ops
          },
        },
        spacer(10),
      ]
    }

    // ---- figure row ----
    case 'stats': {
      const items = block.items.slice(0, 5)
      if (items.length === 0) return [spacer(0)]
      const cellW = W / items.length
      const h = 46
      return [
        {
          h,
          draw: (top) => {
            const ops: Op[] = []
            items.forEach((item, i) => {
              const cx = X + i * cellW
              ops.push({ t: 'rect', x: cx, y: top, w: cellW, h, stroke: HAIR, lw: 0.7 })
              const value = clip(m, item.value, 18, fid(family, 'b'), cellW - 16)
              ops.push(text(alignX(m, value, 18, fid(family, 'b'), cx, cellW, 'c'), top + 12 + 18 * ASCENT[family], 18, fid(family, 'b'), value, INK))
              const label = clip(m, item.label.toUpperCase(), 7.5, fid(family, 'b'), cellW - 10)
              ops.push(text(alignX(m, label, 7.5, fid(family, 'b'), cx, cellW, 'c'), top + 38, 7.5, fid(family, 'b'), label, FAINT))
            })
            return ops
          },
        },
        spacer(12),
      ]
    }

    // ---- signature blocks ----
    case 'signatures': {
      const perRow = Math.min(2, Math.max(1, block.slots.length))
      const groups: { name: string; role: string }[][] = []
      for (let i = 0; i < block.slots.length; i += perRow) groups.push(block.slots.slice(i, i + perRow))
      const frags: Frag[] = groups.map((group) => ({
        h: 56,
        draw: (top) => {
          const ops: Op[] = []
          const cellW = W / perRow
          group.forEach((slot, ci) => {
            const cx = X + ci * cellW
            const inner = cellW - (ci < perRow - 1 ? 28 : 0)
            ops.push({ t: 'line', x: cx, y: top + 26, x2: cx + inner, y2: top + 26, color: INK, lw: 0.8 })
            ops.push(text(cx, top + 26 + 11 + 9 * ASCENT[family] - 9, 9.5, fid(family, 'b'), clip(m, slot.name || ' ', 9.5, fid(family, 'b'), inner), INK))
            ops.push(text(cx, top + 48, 8, fid(family, 'r'), clip(m, slot.role, 8, fid(family, 'r'), inner), FAINT))
          })
          return ops
        },
      }))
      frags.push(spacer(6))
      return frags
    }

    // ---- photo ----
    case 'photo': {
      const w = block.w ?? 96
      const ratio = block.ratio && block.ratio > 0 ? block.ratio : 0.8
      const h = w / ratio
      const capLines = block.caption ? wrap(m, block.caption, 8, fid(family, 'r'), w) : []
      const total = h + (capLines.length ? 3 + capLines.length * lineHeight(8) : 0)
      return [
        {
          h: total,
          draw: (top) => {
            const ops: Op[] = [
              { t: 'image', x: X, y: top, w, h, src: block.src },
              { t: 'rect', x: X, y: top, w, h, stroke: HAIR, lw: 0.7 },
            ]
            let ty = top + h + 3
            for (const line of capLines) {
              ty += 8 * ASCENT[family]
              ops.push(text(X, ty, 8, fid(family, 'r'), line, FAINT))
              ty += lineHeight(8) - 8 * ASCENT[family]
            }
            return ops
          },
        },
        spacer(10),
      ]
    }

    case 'divider':
      return [
        { h: 1, draw: (top) => [{ t: 'line', x: X, y: top, x2: X + W, y2: top, color: HAIR, lw: 0.7 }] },
        spacer(12),
      ]

    case 'space':
      return [spacer(Math.max(0, block.h))]

    case 'pagebreak':
      return [{ h: 0, pagebreak: true, draw: () => [] }]
  }
}

// ---------------------------------------------------------------- flow

/**
 * How tall the chain starting at `i` is, following keepWithNext. A heading that
 * asks to stay with its first line of body moves to the next page with it
 * rather than sitting alone at the foot of this one.
 */
function chainHeight(frags: Frag[], i: number): number {
  let h = 0
  let j = i
  // Guard against a run of keep-with-next longer than a page.
  while (j < frags.length && h <= CONTENT_H) {
    h += frags[j].h
    if (!frags[j].keepWithNext) break
    j++
  }
  return h
}

export function layoutDocument(m: Metrics, blocks: Block[], shell: Shell): DocLayout {
  const frags = blocks.flatMap((b) => blockFragments(m, b, shell.family))

  const pages: Op[][] = [[]]
  let y = CONTENT_TOP
  let headerOnPage: Frag | undefined
  const bottom = CONTENT_TOP + CONTENT_H

  const newPage = () => {
    pages.push([])
    y = CONTENT_TOP
    headerOnPage = undefined
  }

  for (let i = 0; i < frags.length; i++) {
    const frag = frags[i]

    if (frag.pagebreak) {
      if (pages[pages.length - 1].length > 0) newPage()
      continue
    }
    // A gap that would open a page is not a gap, it is a dent in the margin.
    if (frag.spacer && y === CONTENT_TOP) continue

    const needed = frag.keepWithNext ? chainHeight(frags, i) : frag.h
    if (y + needed > bottom && pages[pages.length - 1].length > 0) {
      newPage()
      if (frag.repeatHeader && frag.repeatHeader !== headerOnPage) {
        pages[pages.length - 1].push(...frag.repeatHeader.draw(y))
        y += frag.repeatHeader.h
        headerOnPage = frag.repeatHeader
      }
    }
    if (!frag.repeatHeader) headerOnPage = undefined
    else if (frag.repeatHeader === frags[i - 1]) headerOnPage = frag.repeatHeader

    pages[pages.length - 1].push(...frag.draw(y))
    y += frag.h
  }

  // Running header and footer, once the page count is known.
  const total = pages.length
  const family = shell.family
  const out: Page[] = pages.map((ops, idx) => {
    const furniture: Op[] = []
    if (idx > 0 && shell.runningTitle) {
      const title = clip(m, shell.runningTitle, 8, fid(family, 'b'), CONTENT_W - 70)
      furniture.push(text(CONTENT_X, MARGIN_TOP - 16, 8, fid(family, 'b'), title.toUpperCase(), FAINT))
      furniture.push({
        t: 'line',
        x: CONTENT_X,
        y: MARGIN_TOP - 11,
        x2: CONTENT_X + CONTENT_W,
        y2: MARGIN_TOP - 11,
        color: HAIR,
        lw: 0.6,
      })
    }
    const footY = PAGE_H - MARGIN_BOTTOM + 12
    if (shell.footerLeft) {
      furniture.push(
        text(CONTENT_X, footY, 7.5, fid(family, 'r'), clip(m, shell.footerLeft, 7.5, fid(family, 'r'), CONTENT_W - 90), FAINT)
      )
    }
    const page = `Page ${idx + 1} of ${total}`
    furniture.push(text(CONTENT_X + CONTENT_W - m.width(page, 7.5, fid(family, 'r')), footY, 7.5, fid(family, 'r'), page, FAINT))
    return { ops: [...ops, ...furniture] }
  })

  return { pages: out, width: PAGE_W, height: PAGE_H, family }
}

export { ASCENT, DESCENT }
