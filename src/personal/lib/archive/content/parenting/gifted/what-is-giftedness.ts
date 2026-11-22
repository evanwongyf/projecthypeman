import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Giftedness is not one thing. Researchers disagree about whether it means a high IQ, outstanding performance, or potential that needs the right environment to become talent. What they agree on is that ability alone is not enough: development depends on opportunity, effort, motivation, and the support of adults who understand that a gifted child is still a child.',
  nutshell: [
    'The traditional definition is an IQ around **130 or above** (top 2%); “highly” and “profoundly” gifted are often put at 145 and 160+. IQ predicts school success well but misses creativity, motivation and specific talents.',
    '**Renzulli’s three-ring model**: gifted behaviour appears where above-average ability, task commitment and creativity overlap.',
    '**Gagné’s Differentiated Model of Giftedness and Talent**: natural gifts become developed talents through learning and practice, shaped by personality and environment.',
    'Gifted children often show **asynchronous development**: intellect far ahead of emotional, social and physical development.',
  ],
  sections: [
    {
      id: 'models',
      title: 'Models of giftedness',
      blocks: [
        { t: 'cards', cols: 2, items: [
          { tag: 'Psychometric', title: 'IQ-based', body: 'Lewis Terman (1920s) defined giftedness as IQ 140+. Many school systems still use cut-offs between 125 and 135. Strengths: reliable, predicts academic achievement. Weaknesses: one number, culturally loaded, misses talent in arts and sport.' },
          { tag: 'Behavioural', title: 'Renzulli’s three rings', body: 'Above-average (not necessarily exceptional) ability + task commitment + creativity. Giftedness is something people do at certain times, not just something they are. Used for broad enrichment programmes (the Schoolwide Enrichment Model).' },
          { tag: 'Developmental', title: 'Gagné’s DMGT', body: 'Gifts (natural abilities in the top 10% of age peers) are transformed into talents (systematically developed skills) through a developmental process, with catalysts: intrapersonal (motivation, temperament) and environmental (family, school, chance).' },
          { tag: 'Multiple domains', title: 'Gardner and Sternberg', body: 'Gardner’s multiple intelligences and Sternberg’s successful intelligence (analytical, creative, practical) broaden the idea, though multiple intelligences has weak psychometric support.' },
        ] },
        { t: 'math', tex: 'z = \\frac{IQ - 100}{15},\\quad P(IQ \\ge 130) \\approx 2.3\\%,\\ P(IQ \\ge 145) \\approx 0.13\\%,\\ P(IQ \\ge 160) \\approx 0.003\\%', caption: 'How rare different IQ levels are on a normal distribution (mean 100, SD 15)', plain: 'About 1 in 44 children score 130+, 1 in 750 score 145+, and roughly 1 in 30 000 score 160+, so a “profoundly gifted” child may never meet an intellectual peer of the same age at school.',
          where: [
            { sym: 'z', def: 'the z-score: how many standard deviations a score is above the average' },
            { sym: 'IQ', def: 'the test score, scaled so the average is 100 and the standard deviation is 15' },
            { sym: 'P(IQ ≥ 130)', def: 'the share of people scoring 130 or more' },
          ],
          syntax: [
            { sym: String.raw`\frac{IQ - 100}{15}`, say: 'subtract the average, then divide by the spread' },
            { sym: String.raw`\ge`, say: '“greater than or equal to”' },
            { sym: String.raw`\%`, say: 'per cent: out of every hundred' },
          ],
          worked: {
            title: 'How rare is an IQ of 145 in a school of 1,500?',
            steps: [
              String.raw`\(z = (145 - 100)/15 = 45/15 = 3\).`,
              String.raw`A normal-distribution table gives \(P(z \ge 3) \approx 0.00135\).`,
              String.raw`\(1/0.00135 \approx 740\), so about 1 child in 740.`,
              String.raw`In a school of 1,500: \(1500 \times 0.00135 \approx 2\) children.`,
              String.raw`Spread across 6 year groups, that is about one such child every three year groups.`,
            ],
            why: [
              'how many standard deviations above average the score is',
              'the area of the bell curve beyond 3 standard deviations; tables and calculators give this',
              'one over a probability gives “one in how many”',
              'multiply the probability by the number of children to get the expected count',
              'divide the expected count by the number of year groups',
            ],
            answer: String.raw`An IQ of 145 is about 1 in 740: roughly two children in a 1,500-pupil school, often in different year groups, which is why profoundly gifted children can feel isolated.`,
          } },
      ],
    },
    {
      id: 'asynchrony',
      title: 'Asynchronous development',
      blocks: [
        { t: 'p', text: 'The Columbus Group (1991) defined giftedness as **asynchronous development** in which advanced abilities and heightened intensity combine to create experiences that are qualitatively different from the norm. A 7-year-old may read like a 12-year-old, reason about death and justice like a teenager, and still cry like a 7-year-old when tired. Parents and teachers who expect emotional maturity to match intellect are often disappointed, and the child is often confused by the gap.' },
      ],
    },
    {
      id: 'myths',
      title: 'Myths',
      blocks: [
        { t: 'cards', cols: 2, items: [
          { tag: 'Myth', title: '“Gifted kids will be fine on their own”', body: 'Many underachieve, become bored or disengaged, or develop poor study habits because school was too easy. They need challenge and support like any learner.' },
          { tag: 'Myth', title: '“Giftedness is all genes”, or “all practice”', body: 'Twin studies put the heritability of general cognitive ability at around 50% in adulthood (lower in childhood). Environment, opportunity and practice matter enormously. Neither extreme is true.' },
          { tag: 'Myth', title: '“Acceleration damages children socially”', body: 'Decades of research (see School options) find well-planned acceleration is academically effective and rarely socially harmful.' },
          { tag: 'Myth', title: '“Gifted children are good at everything”', body: 'Profiles are often uneven; twice-exceptional children combine high ability with dyslexia, ADHD or autism.' },
          { tag: 'Myth', title: '“Early readers are always gifted”', body: 'Early reading is a common sign but not proof; some children read early and settle at an average level, and many gifted children read at a typical age.' },
          { tag: 'Myth', title: '“You can make any child a genius”', body: 'Intensive training can produce extraordinary skill (see the Polgár sisters), but children differ in ability, interest and temperament, and pushing against those carries real costs.' },
        ] },
      ],
    },
  ],
  sources: [
    'Renzulli, J. S. (1978). What makes giftedness? Reexamining a definition. Phi Delta Kappan 60(3).',
    'Gagné, F. (2004). Transforming gifts into talents: the DMGT as a developmental theory. High Ability Studies 15(2).',
    'Columbus Group (1991). Definition of giftedness as asynchronous development.',
    'Plomin, R. & Deary, I. J. (2015). Genetics and intelligence differences: five special findings. Molecular Psychiatry 20.',
    'Subotnik, R. F., Olszewski-Kubilius, P. & Worrell, F. C. (2011). Rethinking giftedness and gifted education. Psychological Science in the Public Interest 12(1).',
  ],
  related: ['parenting/gifted/identifying', 'parenting/gifted/research'],
}

export default guide
