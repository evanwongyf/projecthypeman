/**
 * Font metrics for the Document Lab.
 *
 * The preview and the downloaded PDF are laid out once, in PostScript points,
 * from the same metrics: pdf-lib's standard fonts. Measuring with the font the
 * PDF will actually draw with is what makes the two agree. The preview then
 * draws that layout as SVG, where a baseline is a number rather than something
 * the browser works out from its own idea of the font, so a line cannot land
 * in a different place on screen than it does on the page.
 *
 * Helvetica and Arial are metric-compatible, as are Times-Roman and Times New
 * Roman, so naming both in the SVG font stack keeps the glyphs the right width
 * whichever one the machine has.
 */
import { PDFDocument, StandardFonts } from 'pdf-lib'
import type { PDFFont } from 'pdf-lib'

export type Family = 'sans' | 'serif'
/** r regular, b bold, i italic, bi bold italic. */
export type Face = 'r' | 'b' | 'i' | 'bi'
export type FontId = `${Family}-${Face}`

export const STANDARD_FONT: Record<FontId, StandardFonts> = {
  'sans-r': StandardFonts.Helvetica,
  'sans-b': StandardFonts.HelveticaBold,
  'sans-i': StandardFonts.HelveticaOblique,
  'sans-bi': StandardFonts.HelveticaBoldOblique,
  'serif-r': StandardFonts.TimesRoman,
  'serif-b': StandardFonts.TimesRomanBold,
  'serif-i': StandardFonts.TimesRomanItalic,
  'serif-bi': StandardFonts.TimesRomanBoldItalic,
}

export const FONT_IDS = Object.keys(STANDARD_FONT) as FontId[]

/** CSS stacks whose first two entries share the standard fonts' metrics. */
export const CSS_STACK: Record<Family, string> = {
  sans: 'Helvetica, Arial, "Liberation Sans", "Nimbus Sans", sans-serif',
  serif: '"Times New Roman", Times, "Liberation Serif", "Nimbus Roman", serif',
}

export const CSS_WEIGHT = (face: Face) => (face === 'b' || face === 'bi' ? 700 : 400)
export const CSS_STYLE = (face: Face) => (face === 'i' || face === 'bi' ? 'italic' : 'normal')

/**
 * Ascent and descent as a fraction of the em, from the fonts' own AFM metrics.
 * Used for line height and for the boxes drawn around text, never for placing
 * a baseline: baselines are computed by the layout and are exact.
 */
export const ASCENT: Record<Family, number> = { sans: 0.718, serif: 0.683 }
export const DESCENT: Record<Family, number> = { sans: 0.207, serif: 0.217 }

export type Metrics = {
  /** Advance width of a string, in points, at the given size. */
  width: (text: string, size: number, font: FontId) => number
}

let loading: Promise<Metrics> | null = null

/**
 * WinAnsi is all the standard fonts can encode, and pdf-lib throws on anything
 * outside it. Rather than fail a whole document over one pasted character,
 * fold the ones that have an obvious plain equivalent and drop the rest. This
 * runs before measuring, so the layout and the PDF see the same string.
 */
const FOLD: Record<string, string> = {
  '‘': "'",
  '’': "'",
  '‚': ',',
  '“': '"',
  '”': '"',
  '„': '"',
  '–': '-',
  '—': '-',
  '―': '-',
  '−': '-',
  '…': '...',
  ' ': ' ',
  ' ': ' ',
  ' ': ' ',
  ' ': ' ',
  ' ': ' ',
  '•': '·',
  '′': "'",
  '″': '"',
  '⁄': '/',
  '­': '',
  '﻿': '',
  '​': '',
}

// Printable WinAnsi: ASCII plus Latin-1 and the handful in 0x80..0x9f.
const WIN_EXTRA = new Set(
  '€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ'.split(
    ''
  )
)

export function winAnsi(input: string): string {
  let out = ''
  for (const ch of input) {
    const folded = FOLD[ch]
    if (folded !== undefined) {
      out += folded
      continue
    }
    const code = ch.codePointAt(0)!
    if (code === 9 || code === 10) {
      out += ch
      continue
    }
    if (code >= 32 && code <= 126) {
      out += ch
      continue
    }
    if (code >= 0xa0 && code <= 0xff) {
      out += ch
      continue
    }
    if (WIN_EXTRA.has(ch)) {
      out += ch
      continue
    }
    // Decompose accents where possible (e.g. a composed form of an accented
    // letter that is in WinAnsi only as a single code point).
    const nfc = ch.normalize('NFC')
    const nfcCode = nfc.codePointAt(0)!
    if (nfc.length === 1 && ((nfcCode >= 0xa0 && nfcCode <= 0xff) || WIN_EXTRA.has(nfc))) {
      out += nfc
      continue
    }
    out += '?'
  }
  return out
}

/**
 * Load the metrics once per session. pdf-lib only exposes widths through an
 * embedded font, so a throwaway document is created to read them from; the
 * document itself is discarded. Standard fonts carry no file bytes, so this
 * costs nothing beyond parsing the metrics tables.
 */
export function loadMetrics(): Promise<Metrics> {
  loading ??= (async () => {
    const doc = await PDFDocument.create()
    const fonts = {} as Record<FontId, PDFFont>
    for (const id of FONT_IDS) fonts[id] = await doc.embedFont(STANDARD_FONT[id])
    return {
      width: (text, size, font) => {
        if (!text) return 0
        try {
          return fonts[font].widthOfTextAtSize(winAnsi(text), size)
        } catch {
          // A width is never worth failing a render over; fall back to a rough
          // average so the line still breaks somewhere sensible.
          return text.length * size * 0.5
        }
      },
    }
  })()
  return loading
}
