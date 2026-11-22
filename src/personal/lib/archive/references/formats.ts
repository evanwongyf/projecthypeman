export type FormatId = 'apa' | 'mla' | 'chicago' | 'harvard' | 'ieee' | 'vancouver'

export type CitationFormat = {
  id: FormatId
  name: string
  edition: string
  usedIn: string
  inTextRule: string
  listTitle: string
  listOrder: string
  tip: string
}

export const FORMATS: CitationFormat[] = [
  {
    id: 'apa',
    name: 'APA',
    edition: '7th edition',
    usedIn: 'Psychology, education, nursing, social sciences',
    inTextRule: 'Author and year, with a page number for quotes',
    listTitle: 'References',
    listOrder: 'Alphabetical by author surname',
    tip: 'Use sentence case for article and book titles. Italicise the journal name and volume.',
  },
  {
    id: 'mla',
    name: 'MLA',
    edition: '9th edition',
    usedIn: 'Literature, languages, cultural studies',
    inTextRule: 'Author and page number, with no year',
    listTitle: 'Works Cited',
    listOrder: 'Alphabetical by author surname',
    tip: 'Use title case. Article titles go in quotation marks and the journal name is italic.',
  },
  {
    id: 'chicago',
    name: 'Chicago',
    edition: '18th edition, notes and bibliography',
    usedIn: 'History, arts, theology, some humanities',
    inTextRule: 'A small raised number that points to a footnote',
    listTitle: 'Bibliography',
    listOrder: 'Alphabetical by author surname',
    tip: 'Each footnote gives the full source the first time, then a short form after that. Chicago also has an author-date version that looks more like APA.',
  },
  {
    id: 'harvard',
    name: 'Harvard',
    edition: 'Cite Them Right layout',
    usedIn: 'Business, sciences, and many UK, Australian and Singapore universities',
    inTextRule: 'Author and year, with a page number for quotes',
    listTitle: 'Reference list',
    listOrder: 'Alphabetical by author surname',
    tip: 'Harvard has no single official version, so schools differ in small details. Follow your own school guide if it disagrees with this one.',
  },
  {
    id: 'ieee',
    name: 'IEEE',
    edition: 'Current author guide',
    usedIn: 'Engineering, computing, electronics',
    inTextRule: 'A number in square brackets',
    listTitle: 'References',
    listOrder: 'Numbered in the order you first cite each source',
    tip: 'Authors appear as initials then surname. Journal names are abbreviated.',
  },
  {
    id: 'vancouver',
    name: 'Vancouver',
    edition: 'NLM and ICMJE layout',
    usedIn: 'Medicine, nursing, health sciences',
    inTextRule: 'A number in brackets or superscript',
    listTitle: 'References',
    listOrder: 'Numbered in the order you first cite each source',
    tip: 'Authors appear as surname then initials with no full stops. Journal names are abbreviated.',
  },
]

export function formatById(id: FormatId): CitationFormat {
  return FORMATS.find((f) => f.id === id) ?? FORMATS[0]
}
