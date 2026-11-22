import type { FormatId } from './formats'
import type { SourceTypeId } from './sourceTypes'
import type { TemplateSet } from './templatesA'
import { BOOK, CHAPTER, JOURNAL, NOTE_BOOK, NOTE_CHAPTER, NOTE_JOURNAL } from './templatesA'
import { NOTE_REPORT, NOTE_THESIS, NOTE_WEBPAGE, REPORT, THESIS, WEBPAGE } from './templatesB'
import { CONFERENCE, NOTE_CONFERENCE, NOTE_VIDEO, VIDEO } from './templatesC'

const RAW: Record<SourceTypeId, TemplateSet> = {
  journal: JOURNAL,
  book: BOOK,
  chapter: CHAPTER,
  webpage: WEBPAGE,
  report: REPORT,
  thesis: THESIS,
  conference: CONFERENCE,
  video: VIDEO,
}

// Chicago cites in footnotes as well as the bibliography, so it gets a second template.
const NOTES: Record<SourceTypeId, string> = {
  journal: NOTE_JOURNAL,
  book: NOTE_BOOK,
  chapter: NOTE_CHAPTER,
  webpage: NOTE_WEBPAGE,
  report: NOTE_REPORT,
  thesis: NOTE_THESIS,
  conference: NOTE_CONFERENCE,
  video: NOTE_VIDEO,
}

// Places where a style has no official rule for a source type, so the layout follows its
// general pattern for online sources. Worth telling the reader.
const CAVEATS: Partial<Record<`${SourceTypeId}:${FormatId}`, string>> = {
  'video:ieee': 'IEEE has no dedicated video format. This follows its pattern for online sources.',
  'video:vancouver': 'Vancouver has no official YouTube format. This follows the NLM pattern for online videos.',
  'thesis:mla': 'MLA puts the title of a published thesis in italics. For an unpublished one, use quotation marks instead.',
  'webpage:apa': 'If the page has no author, start with the title. If the site name is the same as the author, leave the site name out.',
  'report:apa': 'If the publisher is also the author (for example a government agency), leave the publisher out.',
  'report:mla': 'If the publisher is also the author, leave the publisher out.',
  'conference:harvard': 'Schools vary a lot on conference papers. Check your own Harvard guide for this one.',
}

// Collapses accidental double spaces so the strings can stay readable.
const tidy = (s: string) => s.replace(/ {2,}/g, ' ').trim()

export function templateFor(type: SourceTypeId, format: FormatId): string {
  return tidy(RAW[type][format])
}

export function noteTemplateFor(type: SourceTypeId): string {
  return tidy(NOTES[type])
}

export function caveatFor(type: SourceTypeId, format: FormatId): string | undefined {
  return CAVEATS[`${type}:${format}`]
}
