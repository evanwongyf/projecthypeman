/**
 * Display list -> PDF file.
 *
 * Nothing is laid out here. The pages arrive already measured and positioned
 * by layout.ts, and this only replays them with pdf-lib, which is why the
 * downloaded file matches the preview line for line. Text is drawn as text, so
 * the result is selectable, searchable and sharp at any zoom rather than a
 * picture of a document.
 */
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'
import type { PDFFont, PDFImage } from 'pdf-lib'
import { FONT_IDS, STANDARD_FONT, winAnsi, type FontId } from './fonts'
import type { DocLayout } from './layout'

function colour(hex: string) {
  const h = hex.replace('#', '')
  const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h
  const n = Number.parseInt(full, 16)
  if (!Number.isFinite(n)) return rgb(0, 0, 0)
  return rgb(((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255)
}

async function embedImage(doc: PDFDocument, src: string): Promise<PDFImage | null> {
  try {
    const comma = src.indexOf(',')
    if (!src.startsWith('data:') || comma === -1) return null
    const meta = src.slice(5, comma)
    const bytes = Uint8Array.from(atob(src.slice(comma + 1)), (c) => c.charCodeAt(0))
    return meta.includes('png') ? await doc.embedPng(bytes) : await doc.embedJpg(bytes)
  } catch {
    // A photo that will not embed is left out rather than taken as a reason to
    // refuse the whole document.
    return null
  }
}

export async function renderPdf(layout: DocLayout, meta: { title: string; author: string }): Promise<Uint8Array> {
  const doc = await PDFDocument.create()
  doc.setTitle(meta.title)
  doc.setAuthor(meta.author)
  doc.setProducer('Project Hypeman Document Lab')
  doc.setCreationDate(new Date())

  const fonts = {} as Record<FontId, PDFFont>
  for (const id of FONT_IDS) fonts[id] = await doc.embedFont(STANDARD_FONT[id])

  // One embed per distinct picture, however many pages show it.
  const images = new Map<string, PDFImage | null>()
  for (const page of layout.pages) {
    for (const op of page.ops) {
      if (op.t === 'image' && !images.has(op.src)) images.set(op.src, await embedImage(doc, op.src))
    }
  }

  for (const page of layout.pages) {
    const pdfPage = doc.addPage([layout.width, layout.height])
    // The display list measures y downwards from the top of the page; PDF
    // measures upwards from the bottom. One flip, in one place.
    const flip = (y: number) => layout.height - y

    for (const op of page.ops) {
      switch (op.t) {
        case 'rect':
          pdfPage.drawRectangle({
            x: op.x,
            y: flip(op.y + op.h),
            width: op.w,
            height: op.h,
            color: op.fill ? colour(op.fill) : undefined,
            borderColor: op.stroke ? colour(op.stroke) : undefined,
            borderWidth: op.stroke ? (op.lw ?? 0.7) : undefined,
          })
          break
        case 'line':
          pdfPage.drawLine({
            start: { x: op.x, y: flip(op.y) },
            end: { x: op.x2, y: flip(op.y2) },
            thickness: op.lw,
            color: colour(op.color),
          })
          break
        case 'image': {
          const image = images.get(op.src)
          if (image) pdfPage.drawImage(image, { x: op.x, y: flip(op.y + op.h), width: op.w, height: op.h })
          break
        }
        case 'text':
          if (!op.text) break
          pdfPage.drawText(winAnsi(op.text), {
            x: op.x,
            y: flip(op.y),
            size: op.size,
            font: fonts[op.font],
            color: colour(op.color),
          })
          break
      }
    }
  }

  return doc.save()
}

/** A filename that is safe on every platform and still recognisable. */
export function pdfFilename(name: string): string {
  const base = name
    .normalize('NFKD')
    .replace(/[^\w\s.-]+/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\s/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 80)
  return `${base || 'document'}.pdf`
}

/** Build the file and hand it to the browser as a download. */
export async function downloadPdf(layout: DocLayout, meta: { title: string; author: string }): Promise<void> {
  const bytes = await renderPdf(layout, meta)
  const blob = new Blob([bytes as BlobPart], { type: 'application/pdf' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = pdfFilename(meta.title)
  document.body.append(link)
  link.click()
  link.remove()
  // Give the browser a moment to start the download before the blob goes.
  setTimeout(() => URL.revokeObjectURL(url), 10_000)
}

export { StandardFonts }
