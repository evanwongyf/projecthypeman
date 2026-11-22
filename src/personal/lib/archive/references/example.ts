import type { FormatId } from './formats'

// A fictional source paper, so no real author is ever misquoted.
export const SOURCE_PAPER = {
  title: 'Sleep and Memory in University Students',
  authors: 'Maya R. Okafor and Daniel J. Lindqvist',
  journal: 'Journal of Learning and Cognition',
  volume: '14',
  issue: '3',
  year: '2021',
  pages: '201 to 218',
  doi: 'https://doi.org/10.1234/jlc.2021.014',
  abstract:
    'We tracked 240 first-year students across one exam period and measured how much they slept before each test.',
  // The two passages the student uses. Page numbers matter for quotes.
  quoted: {
    page: '207',
    text: 'Participants who slept at least seven hours before the test recalled 23% more items than participants who slept fewer than five hours.',
  },
  paraphrased: {
    page: '210',
    text: 'The sleep benefit was strongest for material studied on the day of the test.',
  },
}

// The student's essay. The words inside the quotation marks match the source exactly.
export const ESSAY = {
  title: 'Study Habits and Exam Performance',
  intro: 'Many students believe that last-minute cramming is the best way to prepare, but the evidence points elsewhere.',
  quoteLead: 'One large study reports: "',
  quoteText: SOURCE_PAPER.quoted.text,
  paraphraseLead: 'The same study suggests that ',
  paraphraseText: "the advantage of a good night's sleep is greatest for content learned on the day of the test",
}

// How the essay cites each passage in each style. `cite` uses the field markup so the
// pieces can be colour coded to match the source paper.
export type InText = { quote: string; paraphrase: string; note: string }

export const IN_TEXT: Record<FormatId, InText> = {
  apa: {
    quote: '({au||Okafor & Lindqvist}, {yr||2021}, {pg||p. 207})',
    paraphrase: '({au||Okafor & Lindqvist}, {yr||2021})',
    note: 'A quote needs the page number. A paraphrase only needs author and year. You can also write the author into the sentence: Okafor and Lindqvist (2021) found that...',
  },
  mla: {
    quote: '({au||Okafor and Lindqvist} {pg||207})',
    paraphrase: '({au||Okafor and Lindqvist} {pg||210})',
    note: 'MLA uses the page number for both quotes and paraphrases, and leaves out the year and any "p."',
  },
  chicago: {
    quote: '{ot||1}',
    paraphrase: '{ot||2}',
    note: 'The raised number points to a footnote at the bottom of the page. The footnotes are shown below.',
  },
  harvard: {
    quote: '({au||Okafor and Lindqvist} {yr||2021}, {pg||p. 207})',
    paraphrase: '({au||Okafor and Lindqvist} {yr||2021})',
    note: 'Harvard looks like APA without the comma after the author. Add the page number for quotes.',
  },
  ieee: {
    quote: '[{ot||1}, {pg||p. 207}]',
    paraphrase: '[{ot||1}]',
    note: 'The number is the entry number in your reference list. Cite the same source again and you reuse the same number.',
  },
  vancouver: {
    quote: '({ot||1})',
    paraphrase: '({ot||1})',
    note: 'The number is the entry number in your reference list. Some schools allow a page after it, such as (1, p. 207). Check yours.',
  },
}

// Chicago footnotes, in the order they appear on the page.
export const CHICAGO_NOTES = [
  '{au||Maya R. Okafor and Daniel J. Lindqvist}, "{ti||Sleep and Memory in University Students}," *{ct||Journal of Learning and Cognition}* {vo||14}, no. {is||3} ({yr||2021}): {pg||207}, {id||https://doi.org/10.1234/jlc.2021.014}.',
  '{au||Okafor and Lindqvist}, "{ti||Sleep and Memory}," {pg||210}.',
]
