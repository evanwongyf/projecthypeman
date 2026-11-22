import type { ArchiveNode } from '../topics'

// Parenting and child development, starting with raising gifted and talented children: what
// giftedness is, how to nurture it from birth, food and sleep for a growing brain, hobbies,
// strict and intensive regimes and their evidence, famous case studies, and the emotional side.

export const PARENTING: ArchiveNode = {
  slug: 'parenting',
  title: 'Parenting & child development',
  blurb: 'Raising gifted and talented children: identification, nurturing from birth, diet and sleep, hobbies, strict and intensive regimes and what the evidence says about them, famous case studies, and the emotional needs of able children.',
  glyph: '✿',
  color: 'color-mix(in srgb, var(--mint) 60%, var(--mustard))',
  tags: ['parenting', 'gifted', 'talented', 'child development', 'prodigy', 'tiger parenting', 'enrichment'],
  children: [
    {
      slug: 'gifted',
      title: 'Raising gifted children',
      blurb: 'From spotting giftedness to nurturing it at every age, with the research, the regimes and the real stories.',
      glyph: '★',
      children: [
        { slug: 'what-is-giftedness', title: 'What giftedness is (and is not)', blurb: 'IQ and its limits, Renzulli’s three rings, Gagné’s gifts-to-talents model, asynchronous development, and the myths.', minutes: 12, tags: ['giftedness', 'iq', 'renzulli', 'gagne', 'dmgt', 'asynchronous development', 'myths'] },
        { slug: 'identifying', title: 'Spotting and assessing giftedness', blurb: 'Signs at each age, what tests measure, Singapore’s GEP selection, and why gifted children with disabilities are missed.', minutes: 10, tags: ['identification', 'signs', 'testing', 'gep', 'twice exceptional'] },
        { slug: 'nurturing-by-age', title: 'Nurturing from birth to adolescence', blurb: 'What helps at 0–3, 3–6, 6–12 and 12–18: talk, play, reading, curiosity, challenge, mentors and independence.', minutes: 16, tags: ['early years', 'serve and return', 'reading aloud', 'play', 'curiosity', 'mentors'] },
        { slug: 'diet-sleep-brain', title: 'Diet, sleep and the developing brain', blurb: 'The nutrients that matter (iron, iodine, omega-3, choline), breakfast, sugar and additives, sleep by age, exercise and screens, and what no diet can do.', minutes: 14, tags: ['diet', 'nutrition', 'brain development', 'iron', 'omega-3', 'sleep', 'screens', 'exercise'] },
        { slug: 'hobbies-enrichment', title: 'Hobbies and enrichment that build ability', blurb: 'Music, chess, languages, maths circles, coding, sport, reading and art: what each develops, when to start, and how to avoid over-scheduling.', minutes: 14, tags: ['hobbies', 'music', 'chess', 'languages', 'math circles', 'coding', 'competitions', 'enrichment'] },
        { slug: 'strict-and-intensive', title: 'Strict and intensive regimes: what they achieve and what they cost', blurb: 'The Polgár experiment, tiger parenting, the Suzuki and Kumon methods, elite training: the evidence on structure, pressure and harsh control, and where the lines are.', minutes: 18, tags: ['tiger parenting', 'strict parenting', 'polgar', 'authoritative', 'authoritarian', 'deliberate practice', 'suzuki', 'kumon', 'draconian'] },
        { slug: 'case-studies', title: 'Case studies: prodigies and how they were raised', blurb: 'The Polgár sisters, Terence Tao, Ruth Lawrence, William James Sidis, Kim Ung-yong, Mozart, Tiger Woods, the Williams sisters, Lang Lang and the long-term studies.', minutes: 20, tags: ['prodigy', 'case study', 'polgar', 'terence tao', 'sidis', 'mozart', 'tiger woods', 'lang lang'] },
        { slug: 'social-emotional', title: 'The emotional side: perfectionism, intensity and burnout', blurb: 'Asynchrony, overexcitabilities, perfectionism, underachievement, friendship, existential worries and burnout, and how parents can help.', minutes: 12, tags: ['perfectionism', 'overexcitability', 'dabrowski', 'underachievement', 'burnout', 'anxiety', 'friendship'] },
        { slug: 'school-options', title: 'School options: acceleration, enrichment and alternatives', blurb: 'Grade skipping and subject acceleration (and the evidence), enrichment, GEP and IP in Singapore, homeschooling, mentors and competitions.', minutes: 12, tags: ['acceleration', 'grade skipping', 'gep', 'integrated programme', 'homeschool', 'olympiad'] },
        { slug: 'research', title: 'What the research says', blurb: 'Terman’s Termites, SMPY’s 50-year study, Bloom’s Developing Talent, deliberate practice and its critics, and genes versus environment.', minutes: 12, tags: ['terman', 'smpy', 'deliberate practice', 'ericsson', 'heritability', 'bloom developing talent'] },
      ],
    },
  ],
}
