import type { Block, Guide } from '../archive/guide'
import { CODES, allPairs, pair } from './compat'
import { FUNCTIONS, TEMPERAMENTS, TYPE_BY_CODE } from './types'

// Builds the archive guides that are generated from the type data: one profile per type, and
// the long page that reads every pair.

const slug = (code: string) => code.toLowerCase()
const ROLES = ['Dominant', 'Auxiliary', 'Tertiary', 'Inferior']
const ROLE_NOTE = [
  'the lead function: most developed, most trusted, used without effort',
  'the support: balances the dominant (perceiving with judging), well developed by adulthood',
  'the relief function: playful, less reliable, grows through midlife',
  'the weak spot: least conscious, the source of stress reactions and of late-life growth',
]

export function typeGuide(code: string): Guide {
  const t = TYPE_BY_CODE[code]
  const temp = TEMPERAMENTS[t.temperament]
  const best = CODES.filter((c) => c !== code).map((c) => pair(code, c)).sort((x, y) => y.ease - x.ease)
  const easiest = best.slice(0, 3)
  const hardest = best.slice(-3).reverse()
  const stretch = [...best].sort((x, y) => y.stretch - x.stretch).slice(0, 3)
  const line = (p: ReturnType<typeof pair>) => `**[${p.b.code}](@personality/types/${slug(p.b.code)})**, ${p.relation.name} (ease ${p.ease}, stretch ${p.stretch}). ${p.dominant}`
  return {
    intro: `${t.code}, ${t.name}: ${t.tagline} ${t.code} is one of the four ${temp.name}, whose core need is ${temp.core}.`,
    nutshell: [
      `**Letters**: ${t.code.split('').map((l) => ({ E: 'Extraversion', I: 'Introversion', S: 'Sensing', N: 'Intuition', T: 'Thinking', F: 'Feeling', J: 'Judging', P: 'Perceiving' })[l]).join(', ')}.`,
      `**Function stack**: ${t.stack.join(' – ')} (${FUNCTIONS[t.stack[0]].name} leading, ${FUNCTIONS[t.stack[1]].name} supporting).`,
      `**At their best**: ${t.strengths.slice(0, 3).join('; ').toLowerCase()}.`,
      `**Watch for**: ${t.blindSpots.slice(0, 2).join('; ').toLowerCase()}.`,
    ],
    sections: [
      { id: 'overview', title: 'Overview', blocks: [
        { t: 'p', text: t.overview },
        { t: 'callout', tone: 'note', title: 'Read this as a mirror, not a measurement', text: 'People who test as the same type differ a great deal, and about half of people get a different type when they retake the test within weeks. Keep what fits you; drop what does not.' },
      ] },
      { id: 'functions', title: 'How an ' + t.code + ' mind works', blocks: [
        { t: 'table', head: ['Position', 'Function', 'What it does here'], rows: t.stack.map((f, i) => [`${ROLES[i]}`, `${f} · ${FUNCTIONS[f].name}`, `${FUNCTIONS[f].body} As the ${ROLES[i].toLowerCase()}, it is ${ROLE_NOTE[i]}.`]) },
      ] },
      { id: 'strengths', title: 'Strengths and blind spots', blocks: [
        { t: 'dodont', do: t.strengths, dont: t.blindSpots },
      ] },
      { id: 'work', title: 'At work', blocks: [
        { t: 'p', text: t.work },
        { t: 'p', text: `**Careers ${t.code}s often report enjoying**: ${t.careers.join(', ')}. Type does not predict job performance; use this as a list of things to try, not a limit.` },
      ] },
      { id: 'relationships', title: 'Love, friendship and family', blocks: [
        { t: 'cards', cols: 2, items: [
          { title: 'In love', body: t.love },
          { title: 'As a friend', body: t.friends },
          { title: `As a child (a young ${t.code})`, body: t.asChild },
          { title: `How to talk to an ${t.code}`, body: t.talkTo.join('. ') + '.' },
        ] },
      ] },
      { id: 'stress', title: 'Under stress, and how to grow', blocks: [
        { t: 'callout', tone: 'warn', title: `In the grip of ${t.stack[3]}`, text: t.stress },
        { t: 'checklist', items: t.growth },
      ] },
      { id: 'pairs', title: `${t.code} with every other type`, blocks: [
        { t: 'p', text: '**Easiest to understand**' },
        { t: 'list', items: easiest.map(line) },
        { t: 'p', text: '**Most stretching (covers your blind spots)**' },
        { t: 'list', items: stretch.map(line) },
        { t: 'p', text: '**Hardest to read at first**' },
        { t: 'list', items: hardest.map(line) },
        { t: 'mbti', viz: 'type-table', a: code },
      ] },
      { id: 'examples', title: 'Characters and people often typed this way', blocks: [
        { t: 'p', text: t.examples.join(' ') + ' Typing real and fictional people from the outside is guesswork and fans disagree constantly; these are illustrations, not data.' },
      ] },
    ],
    related: ['personality/compatibility/pair-explorer', 'personality/foundations/cognitive-functions', 'personality/start-here'],
  }
}

export function allPairsGuide(): Guide {
  const pairs = allPairs()
  const sections = CODES.map((code) => {
    const mine = pairs.filter((p) => p.a.code === code)
    const blocks: Block[] = mine.map((p) => ({
      t: 'example' as const,
      title: `${p.a.code} + ${p.b.code} · ${p.relation.name} · ease ${p.ease}, stretch ${p.stretch}`,
      lines: [
        { label: 'Pattern', text: p.relation.body },
        { label: 'Dominants', text: p.dominant },
        { label: 'Overlap', text: p.functions },
        ...(p.blind ? [{ label: 'Blind spots', text: p.blind }] : []),
        { label: 'Temperaments', text: p.temperament },
        ...p.click.map((c) => ({ label: 'Click', text: c })),
        ...p.clash.map((c) => ({ label: 'Clash', text: c })),
        ...p.tips.map((c) => ({ label: 'Try', text: c })),
      ],
    }))
    const t = TYPE_BY_CODE[code]
    return { id: slug(code), title: `${code} pairs`, lead: `${code} (${t.name}) with ${code === 'ESFP' ? 'itself' : 'itself and every type after it in the list; earlier pairs are under those types'}.`, blocks }
  })
  return {
    intro: 'Every one of the 136 possible pairings of the sixteen types (120 different-type pairs and 16 same-type pairs), each read the same way: the overall pattern, how the two dominant functions meet, which functions overlap, the temperaments, then where the pair tends to click and clash, with a concrete thing to try for each difference.',
    nutshell: [
      'Pairs are listed once: INTJ + ENFP appears under INTJ, not again under ENFP. Use the contents to jump to a type.',
      '**Ease** falls with each differing letter (S/N costs most) and rises with shared top functions; **stretch** rises when one person’s strengths sit in the other’s weaker functions.',
      'These readings come from type theory. They describe common friction points, not destinies.',
    ],
    sections: [{ id: 'matrix', title: 'The whole picture', blocks: [{ t: 'mbti', viz: 'matrix' }] }, ...sections],
    related: ['personality/compatibility/how-it-works', 'personality/compatibility/pair-explorer'],
  }
}
