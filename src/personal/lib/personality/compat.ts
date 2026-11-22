import { FUNCTIONS, TEMPERAMENTS, TYPE_BY_CODE, TYPES } from './types'
import type { Fn, Temperament, TypeProfile } from './types'

// Compatibility between any two of the sixteen types, built from parts: which of the four
// letters they share, how their dominant functions meet, how their function stacks overlap,
// and their temperaments. Two scores come out, ease (how naturally they understand each
// other) and stretch (how much each covers the other's blind spots). Both are heuristics drawn
// from type theory, not findings: research has not shown that type similarity or difference
// predicts how happy a couple, friendship or team will be.

const LETTERS = [
  { key: 'EI', same: { E: 'Both Extraverts: you recharge with people and activity, think out loud, and enjoy a busy social life together.', I: 'Both Introverts: you respect each other’s need for quiet, enjoy deep one-to-one time, and rarely push each other to overbook.' } as Record<string, string>, diff: 'Extravert and Introvert: one recharges with people and thinks out loud, the other recharges alone and thinks before speaking. The Extravert can feel shut out; the Introvert can feel drained or talked over.', tip: 'Agree a rhythm of social and quiet time; the Extravert asks questions and waits, the Introvert says “give me a minute” rather than going silent.', cost: 10 },
  { key: 'SN', same: { S: 'Both Sensors: you talk about the same concrete world, facts, plans, what happened, and trust experience.', N: 'Both Intuitives: you enjoy ideas, theories and possibilities together and can talk for hours about what things mean.' } as Record<string, string>, diff: 'Sensor and Intuitive: one notices facts, details and what is; the other notices patterns, meanings and what could be. This is the difference that most often makes conversation feel like two languages.', tip: 'The Intuitive gives concrete examples; the Sensor allows time for the big picture. Name it: “are we talking details or direction right now?”', cost: 18 },
  { key: 'TF', same: { T: 'Both Thinkers: you prefer logic, directness and fairness by principle, and do not take blunt feedback personally.', F: 'Both Feelers: you prioritise harmony, values and each other’s feelings, and read emotional cues easily.' } as Record<string, string>, diff: 'Thinker and Feeler: one decides by logic and principle, the other by values and impact on people. The Thinker can seem cold; the Feeler can seem “too sensitive”, both are judging well, by different measures.', tip: 'The Thinker acknowledges feelings before solving; the Feeler explains the values behind a decision so it can be weighed.', cost: 12 },
  { key: 'JP', same: { J: 'Both Judgers: you like plans, closure and order, so you rarely fight over schedules, but can clash over whose plan wins.', P: 'Both Perceivers: you are flexible and spontaneous together, though bills and deadlines may slip.' } as Record<string, string>, diff: 'Judger and Perceiver: one wants decisions, plans and finished tasks, the other wants options, flexibility and openness. Expect friction over time, chores and last-minute changes.', tip: 'Plan the essentials, leave room for spontaneity; set “decide by” dates for open questions.', cost: 10 },
]

// The sixteen relationship patterns, by which letters differ (E/I, S/N, T/F, J/P).
export const RELATIONS: Record<string, { name: string; body: string }> = {
  '0000': { name: 'Twins', body: 'Same type: instant understanding, shared values and humour, and a sense of being seen. The risk is shared blind spots, no one covers what you both miss, and fierce competition in the same arena.' },
  '1000': { name: 'Companions', body: 'Same four functions in a different order: you value the same things, but one leads with the outer form and the other with the inner. Very easy understanding; one tends to lead socially while the other anchors.' },
  '0100': { name: 'Different worlds', body: 'You share three letters but perceive differently, facts and experience versus patterns and possibilities. You agree on how to decide and live, but may struggle to find shared topics and can find each other’s attention to detail (or to theory) baffling.' },
  '0010': { name: 'Head and heart', body: 'Same way of seeing, different way of deciding: one weighs logic, the other values. Often a strong, balanced pair once both learn to treat the other’s reasoning as valid.' },
  '0001': { name: 'Look-alikes', body: 'Only J/P differs, yet in function terms you share none of the same functions in the same attitude, your stacks are built differently. You look similar on paper but think differently under the hood, which can be stimulating or puzzling.' },
  '1100': { name: 'Distant cousins', body: 'Different in energy and perception, alike in judgement and lifestyle. You will agree on values and organising, and need effort to share conversation topics and social rhythms.' },
  '1010': { name: 'Mirror partners', body: 'Different in energy and judgement, alike in perception and lifestyle. You see the world the same way and run life similarly, but recharge and decide differently, a common, balanced pairing.' },
  '1001': { name: 'Rhythm partners', body: 'Different in energy and lifestyle, alike in perception and judgement. Shared outlook and values, with friction over social calendars and plans.' },
  '0110': { name: 'Complementary minds', body: 'Alike in energy and lifestyle, different in perceiving and judging. Each brings a different half of the picture; rich if you value it, frustrating if you expect the other to think like you.' },
  '0101': { name: 'Sideways match', body: 'Alike in energy and judgement, different in perception and lifestyle. You decide by the same principles but see and organise life differently.' },
  '0011': { name: 'Mismatched methods', body: 'Alike in energy and perception, different in judgement and lifestyle. You notice the same things and recharge the same way, but decide and organise very differently.' },
  '1110': { name: 'Near opposites (shared lifestyle)', body: 'Three letters differ; only J/P is shared. Little natural overlap in conversation or values, but you may organise daily life similarly. High learning, high effort.' },
  '1101': { name: 'Near opposites (shared judgement)', body: 'Three letters differ; only T/F is shared. You agree on how decisions should be made, and little else comes naturally.' },
  '1011': { name: 'Near opposites (shared perception)', body: 'Three letters differ; only S/N is shared. You see the world the same way, often the basis of famous “opposites attract” pairings like INTJ–ENFP or INFJ–ENTP, but differ in energy, decisions and lifestyle.' },
  '0111': { name: 'Near opposites (shared energy)', body: 'Three letters differ; only E/I is shared. Similar social rhythms, very different minds.' },
  '1111': { name: 'Full opposites', body: 'Every letter differs, yet your four functions are the same set in reverse order: your strongest function is their weakest. You can be each other’s greatest teachers, and greatest irritants, because each lives in the other’s blind spot.' },
}

// How two dominant functions meet. Keys are alphabetical pairs.
const DOM: Record<string, string> = {
  'Ni|Ni': 'Two Ni dominants: you both see far ahead and trust your intuitions, which feels like telepathy until your visions disagree, then neither easily yields.',
  'Ne|Ne': 'Two Ne dominants: an explosion of ideas, jokes and plans, and nobody keeping track of the details.',
  'Si|Si': 'Two Si dominants: shared love of tradition, routine and detail; comfortable, stable, sometimes stuck.',
  'Se|Se': 'Two Se dominants: adventure, action and fun; plenty of energy and risk, little planning.',
  'Ti|Ti': 'Two Ti dominants: precise, logical conversations and debates; you may argue definitions endlessly.',
  'Te|Te': 'Two Te dominants: efficient and ambitious together, but you may clash over who runs things.',
  'Fi|Fi': 'Two Fi dominants: deep mutual respect for values and authenticity, but each keeps feelings private, misunderstandings can fester unspoken.',
  'Fe|Fe': 'Two Fe dominants: warm, harmonious and attentive to each other, though you may both avoid conflict and neglect your own needs.',
  'Ne|Ni': 'Ni and Ne: one converges on a single insight, the other diverges into many possibilities. Exciting idea partners, Ne offers options, Ni chooses, once you stop calling each other scattered or stubborn.',
  'Ni|Si': 'Ni and Si: both introverted perceivers, one looking to the future, the other to the past. Thoughtful and calm together; may disagree on change versus tradition.',
  'Ni|Se': 'Ni and Se: opposite perceivers (each other’s inferior). Se brings the present moment, Ni the long view; strong attraction and strong friction, the classic “visionary and doer”.',
  'Ni|Ti': 'Ni and Ti: two introverted minds, insight and analysis; deep, quiet conversations about how things work and where they lead.',
  'Ni|Te': 'Ni and Te: vision meets execution; often a powerful working partnership (and the same axis INTJs and ENTJs use).',
  'Fi|Ni': 'Ni and Fi: intuition and values, both inward; deep, meaningful connection, but both may keep a lot unsaid.',
  'Fe|Ni': 'Ni and Fe: insight and empathy; Fe reads the room, Ni reads the future. Often a supportive, understanding match.',
  'Ne|Si': 'Ne and Si: opposite perceivers (each other’s inferior). Ne craves novelty, Si stability. Si grounds Ne’s ideas; Ne loosens Si’s routines, if neither tries to convert the other.',
  'Ne|Se': 'Ne and Se: both extraverted perceivers, curious and energetic; one about ideas, the other about experiences. Fun, spontaneous, sometimes chaotic.',
  'Ne|Ti': 'Ne and Ti: possibilities and logic, a natural brainstorming pair (the ENTP and INTP axis).',
  'Ne|Te': 'Ne and Te: ideas meet organisation; Te turns Ne’s possibilities into plans, though Te may find Ne unfocused.',
  'Fi|Ne': 'Ne and Fi: imagination and values; creative, warm, idealistic (the ENFP and INFP axis).',
  'Fe|Ne': 'Ne and Fe: possibilities and people; lively, social, encouraging conversations.',
  'Se|Si': 'Si and Se: both sensors, one remembering, the other experiencing. Practical, grounded pair; may clash over routine versus spontaneity.',
  'Si|Ti': 'Si and Ti: detail and analysis, both inward; careful, precise, reliable together.',
  'Si|Te': 'Si and Te: tradition meets efficiency; organised, dependable (the ISTJ and ESTJ axis).',
  'Fi|Si': 'Si and Fi: memory and values, both inward; loyal, gentle, private.',
  'Fe|Si': 'Si and Fe: tradition and care; warm, dependable, family-centred (the ISFJ and ESFJ axis).',
  'Se|Ti': 'Se and Ti: action and analysis; practical problem solvers (the ISTP and ESTP axis).',
  'Se|Te': 'Se and Te: action and organisation; get-it-done energy, sometimes impatient.',
  'Fi|Se': 'Se and Fi: experience and values; aesthetic, spontaneous, warm (the ISFP and ESFP axis).',
  'Fe|Se': 'Se and Fe: action and people; lively, social, fun-loving.',
  'Te|Ti': 'Ti and Te: two thinking styles, understanding versus results. Ti asks “is it true?”, Te asks “does it work?” Productive debates, sometimes frustrating.',
  'Fi|Ti': 'Ti and Fi: logic and values, both inward; principled, private, independent. Respectful but may rarely share feelings.',
  'Fe|Ti': 'Ti and Fe: opposite judges (each other’s inferior). Ti seeks truth, Fe harmony; each balances the other but may misread intentions.',
  'Fi|Te': 'Te and Fi: opposite judges (each other’s inferior). Te organises the world, Fi guards inner values; strong attraction and clashes over efficiency versus authenticity.',
  'Fe|Te': 'Te and Fe: both extraverted judges, results versus relationships; good leaders together if they divide roles.',
  'Fe|Fi': 'Fi and Fe: two feeling styles, personal values versus group harmony. Deep empathy, with misunderstandings about expression (Fi private, Fe expressive).',
}

const TEMP_PAIRS: Record<string, string> = {
  'NT|NT': 'Two Rationals: shared love of competence, debate and ideas.',
  'NF|NF': 'Two Idealists: shared quest for meaning and authenticity.',
  'SJ|SJ': 'Two Guardians: shared sense of duty, order and tradition.',
  'SP|SP': 'Two Artisans: shared appetite for freedom, action and fun.',
  'NF|NT': 'Rational and Idealist: both intuitive and abstract; NTs bring logic, NFs bring meaning, a common pairing in Keirsey’s data.',
  'NT|SJ': 'Rational and Guardian: strategy meets duty; NT questions rules SJ respects.',
  'NT|SP': 'Rational and Artisan: theory meets practice; independent spirits who both dislike pointless rules.',
  'NF|SJ': 'Idealist and Guardian: values meet duty; both care about people, in different ways.',
  'NF|SP': 'Idealist and Artisan: meaning meets experience; warm, creative, but NF may find SP shallow and SP may find NF intense.',
  'SJ|SP': 'Guardian and Artisan: stability meets spontaneity; practical partners who share a concrete world.',
}

function key(a: string, b: string) {
  return [a, b].sort().join('|')
}

export type PairResult = {
  a: TypeProfile
  b: TypeProfile
  mask: string
  relation: { name: string; body: string }
  ease: number
  stretch: number
  click: string[]
  clash: string[]
  tips: string[]
  dominant: string
  temperament: string
  functions: string
  blind: string | null
}

function stackOverlap(a: Fn[], b: Fn[]) {
  // Shared functions in the top two (the conscious, preferred functions).
  return a.slice(0, 2).filter((f) => b.slice(0, 2).includes(f))
}

export function pair(codeA: string, codeB: string): PairResult {
  const a = TYPE_BY_CODE[codeA]
  const b = TYPE_BY_CODE[codeB]
  let mask = ''
  let ease = 100
  const click: string[] = []
  const clash: string[] = []
  const tips: string[] = []
  LETTERS.forEach((L, i) => {
    const x = a.code[i]
    const y = b.code[i]
    if (x === y) {
      mask += '0'
      click.push(L.same[x])
    } else {
      mask += '1'
      ease -= L.cost
      clash.push(L.diff)
      tips.push(L.tip)
    }
  })
  const shared = stackOverlap(a.stack, b.stack)
  ease += shared.length * 4
  // Opposite dominants (one's dominant is the other's inferior) are hard to read at first.
  const aDomIsBInf = a.stack[0] === b.stack[3]
  const bDomIsAInf = b.stack[0] === a.stack[3]
  if (aDomIsBInf || bDomIsAInf) ease -= 6
  ease = Math.max(20, Math.min(100, Math.round(ease)))
  // Stretch: how much of each person's weak side the other has strong.
  let stretch = 0
  if (a.stack.slice(0, 2).some((f) => b.stack.slice(2).includes(f))) stretch += 30
  if (b.stack.slice(0, 2).some((f) => a.stack.slice(2).includes(f))) stretch += 30
  stretch += (mask.split('1').length - 1) * 10
  stretch = Math.min(100, stretch)

  const dominant = DOM[key(a.stack[0], b.stack[0])]
  const temperament = TEMP_PAIRS[key(a.temperament, b.temperament)]
  const sharedText = shared.length
    ? `You share ${shared.map((f) => `${f} (${FUNCTIONS[f].short})`).join(' and ')} among your top two functions, a natural common language.`
    : 'You share none of your top two functions, so your strongest ways of thinking are different, more to learn, less taken for granted.'
  let blind: string | null = null
  if (aDomIsBInf && bDomIsAInf) blind = `${a.code}’s strongest function (${a.stack[0]}) is ${b.code}’s weakest, and the reverse is also true. Each of you is easiest at exactly what the other finds hardest: expect admiration and irritation in equal measure.`
  else if (aDomIsBInf) blind = `${a.code}’s strongest function (${a.stack[0]}) is ${b.code}’s weakest. ${a.code} can help ${b.code} grow here, or overwhelm them.`
  else if (bDomIsAInf) blind = `${b.code}’s strongest function (${b.stack[0]}) is ${a.code}’s weakest. ${b.code} can help ${a.code} grow here, or overwhelm them.`
  return { a, b, mask, relation: RELATIONS[mask], ease, stretch, click, clash, tips, dominant, temperament, functions: sharedText, blind }
}

export const CODES = TYPES.map((t) => t.code)

export function allPairs(): PairResult[] {
  const out: PairResult[] = []
  for (let i = 0; i < CODES.length; i++) for (let j = i; j < CODES.length; j++) out.push(pair(CODES[i], CODES[j]))
  return out
}

export function temperamentName(t: Temperament) {
  return TEMPERAMENTS[t].name
}
