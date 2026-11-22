import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Parents are often the first to notice that a child learns unusually fast. This guide lists the signs that are common at each age, explains what formal assessments measure, and covers the children who are most often missed.',
  sections: [
    {
      id: 'signs',
      title: 'Common signs by age',
      blocks: [
        { t: 'table', head: ['Age', 'Signs often reported'], rows: [
          ['0–2', 'Unusual alertness, long attention to faces and objects, early speech or very large vocabulary, intense reactions'],
          ['2–5', 'Asks endless “why” and “how” questions; early reading or counting; complex sentences; vivid imagination; remembers details; strong interests; sense of humour beyond age'],
          ['5–11', 'Learns new material with little repetition; reasons abstractly; reads widely above age; prefers older children or adults; strong sense of justice; perfectionism; boredom with repetition'],
          ['11–18', 'Deep, self-directed interests; original ideas; questions authority; may underachieve if unchallenged; existential questions; intense friendships or isolation'],
        ] },
        { t: 'callout', tone: 'warn', title: 'Signs are not a diagnosis', text: 'Many of these traits are common in children who are not gifted, and gifted children do not show all of them. Early milestones vary widely. Treat signs as reasons to offer richer opportunities, not as labels.' },
      ],
    },
    {
      id: 'testing',
      title: 'What assessments measure',
      blocks: [
        { t: 'table', head: ['Assessment', 'Measures', 'Notes'], rows: [
          ['Individual IQ test (WISC-V, Stanford-Binet 5)', 'Verbal, visual-spatial, fluid reasoning, working memory, processing speed', 'Gold standard; given by a psychologist; best after about age 6'],
          ['Group ability tests (CogAT, NNAT)', 'Verbal, quantitative and non-verbal reasoning', 'Used by schools for screening; non-verbal tests help identify children learning the language'],
          ['Achievement tests', 'What has been learned', 'Shows readiness for acceleration in a subject'],
          ['Above-level testing (e.g. SAT at 12 in talent searches)', 'How far ahead a child is', 'Separates very able from profoundly able'],
          ['Portfolios and observation', 'Creativity, products, behaviour', 'Captures talent that tests miss'],
        ] },
        { t: 'p', text: 'In **Singapore**, the Gifted Education Programme (GEP) selected pupils through a two-stage screening in Primary 3 until 2023. From 2024, MOE replaced the centralised GEP with school-based programmes for high-ability learners in every primary school, identified through school-based assessment from Primary 4.' },
      ],
    },
    {
      id: 'missed',
      title: 'Who gets missed',
      blocks: [
        { t: 'checklist', items: [
          'Twice-exceptional children: high ability masked by dyslexia, ADHD or autism (and difficulties masked by ability).',
          'Girls, who often hide ability to fit in, especially in adolescence.',
          'Children from low-income families, whose ability is less likely to be nurtured or noticed.',
          'Children learning the school language.',
          'Underachievers: bored, disengaged or disruptive children whose ability is not visible in their work.',
          'Children whose talent is outside academics: music, art, sport, leadership.',
        ] },
      ],
    },
  ],
  sources: ['Silverman, L. K. (2013). Giftedness 101. Springer.', 'Ministry of Education Singapore (2022). Refreshed approach to gifted education (school-based programmes from 2024).', 'Peters, S. J. et al. (2019). Effect of local norms on racial and ethnic representation in gifted education. AERA Open 5(2).'],
  related: ['parenting/gifted/what-is-giftedness', 'teaching/special-education/needs/twice-exceptional'],
}

export default guide
