import { LineCapStyle, PDFDocument, StandardFonts, clip, endPath, popGraphicsState, pushGraphicsState, rectangle, rgb } from 'pdf-lib'
import type { PDFPage } from 'pdf-lib'
import type { Item, V2 } from './hand'
import { LETTERS, NUMBERS, signKeys } from './letters'
import type { Letter } from './letters'
import { palette, sortItems } from './render'
import type { Palette } from './render'
import { closeClip, closeFrame } from './scene'

// A printable A4 chart of the alphabet and numbers. The hands are drawn as vector paths,
// the same shapes as on the pages, so they stay sharp at any print size.

function colour(hex: string) {
  const n = (i: number) => parseInt(hex.slice(i, i + 2), 16) / 255
  return { color: rgb(n(1), n(3), n(5)), opacity: hex.length > 7 ? n(7) : 1 }
}

// Draws a frame into a square of `size` points whose top-left corner is at (x, top),
// clipped to that square. Line widths are in frame units: drawSvgPath scales them itself.
function drawItems(page: PDFPage, items: Item[], box: [number, number, number, number], pal: Palette, x: number, top: number, size: number) {
  const s = size / box[2]
  const at = { x: x - box[0] * s, y: top + box[1] * s, scale: s }
  const d = (pts: V2[], close = false) => 'M' + pts.map(([px, py]) => `${px} ${py}`).join(' L') + (close ? ' Z' : '')
  const stroke = (pts: V2[], w: number, hex: string, opacity = 1) => {
    const c = colour(hex)
    // One segment at a time: round caps fill the joints, which pdf-lib cannot round.
    for (let i = 0; i < Math.max(1, pts.length - 1); i++)
      page.drawSvgPath(d(pts.length > 1 ? [pts[i], pts[i + 1]] : [pts[0], pts[0]]), { ...at, borderColor: c.color, borderWidth: w, borderOpacity: opacity * c.opacity, borderLineCap: LineCapStyle.Round })
  }
  page.pushOperators(pushGraphicsState(), rectangle(x, top - size, size, size), clip(), endPath())
  for (const it of sortItems(items))
    for (const p of it.prims) {
      if (p.k === 'line') {
        if (p.outline) stroke(p.pts, p.w + p.outline * 2, pal.ink)
        stroke(p.pts, p.w, pal[p.fill], p.opacity ?? 1)
      } else if (p.k === 'poly') {
        const c = colour(pal[p.fill])
        page.drawSvgPath(d(p.pts, true), { ...at, color: c.color, borderColor: colour(pal.ink).color, borderWidth: (p.outline ?? 0) * 2 })
      } else if (p.k === 'circle') {
        const c = colour(pal[p.fill])
        page.drawCircle({ x: at.x + p.c[0] * s, y: at.y - p.c[1] * s, size: p.r * s, color: c.color, opacity: c.opacity })
      }
    }
  page.pushOperators(popGraphicsState())
}

type Cell = { label: string; note?: string; sign: Pick<Letter, 'shape' | 'rot' | 'move'> }

export async function buildChart(tone: number, mirror: boolean): Promise<Uint8Array> {
  const doc = await PDFDocument.create()
  doc.setTitle('ASL fingerspelling and numbers')
  doc.setProducer('StudyTubby')
  const font = await doc.embedFont(StandardFonts.Helvetica)
  const bold = await doc.embedFont(StandardFonts.HelveticaBold)
  const ink = rgb(0.11, 0.08, 0.06)
  const soft = rgb(0.42, 0.37, 0.32)
  const pal = palette(tone)

  function grid(page: PDFPage, cells: Cell[], top: number) {
    const cols = 5
    const w = (595 - 80) / cols
    const h = 112
    cells.forEach((c, i) => {
      const x = 40 + (i % cols) * w
      const y = top - Math.floor(i / cols) * h
      page.drawRectangle({ x: x + 3, y: y - h + 6, width: w - 6, height: h - 6, borderColor: ink, borderWidth: 1.2, color: rgb(1, 0.98, 0.95) })
      const { items, box } = closeFrame(closeClip(signKeys(c.sign, 0, 10)), 0, { mirror })
      drawItems(page, items, box, pal, x + (w - 80) / 2, y - 8, 80)
      page.drawText(c.label, { x: x + 10, y: y - 102, size: 14, font: bold, color: ink })
      if (c.note) page.drawText(c.note, { x: x + 10 + bold.widthOfTextAtSize(c.label, 14) + 6, y: y - 101, size: 8, font, color: soft })
    })
  }

  const p1 = doc.addPage([595, 842])
  p1.drawText('The ASL alphabet', { x: 40, y: 790, size: 24, font: bold, color: ink })
  p1.drawText('As you see it on someone facing you. J and Z are drawn in the air.', { x: 40, y: 770, size: 10, font, color: soft })
  grid(p1, Object.entries(LETTERS).map(([label, sign]) => ({ label, sign, note: sign.move ? 'moves' : undefined })), 755)
  p1.drawText('From the StudyTubby archive: Sign language. Practise with the animated pages.', { x: 40, y: 34, size: 8, font, color: soft })

  const p2 = doc.addPage([595, 842])
  p2.drawText('Numbers 0 to 10', { x: 40, y: 790, size: 24, font: bold, color: ink })
  p2.drawText('1 to 5 are shown with the palm facing the signer; 6 to 9 face out; 10 is shaken.', { x: 40, y: 770, size: 10, font, color: soft })
  grid(p2, NUMBERS.map((n) => ({ label: n.n, sign: n, note: n.move ? 'shake' : undefined })), 755)
  const tips = [
    'Hold your hand beside your shoulder, palm forward, with the elbow relaxed and low.',
    'Keep the hand still and change shapes smoothly; do not bounce on each letter.',
    'For a double letter (the LL in HELLO), slide the hand slightly to the side.',
    'Read the shape of the whole word, not one letter at a time. Watch the first and last letters.',
    'Fingerspelling is for names, places and words with no sign. Learn the signs for common words.',
  ]
  p2.drawText('Tips', { x: 40, y: 400, size: 14, font: bold, color: ink })
  tips.forEach((t, i) => p2.drawText(`${i + 1}.  ${t}`, { x: 40, y: 378 - i * 18, size: 10, font, color: ink }))
  p2.drawText('From the StudyTubby archive: Sign language.', { x: 40, y: 34, size: 8, font, color: soft })
  return doc.save()
}
