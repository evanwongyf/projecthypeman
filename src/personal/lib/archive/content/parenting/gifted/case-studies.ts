import type { Guide } from '../../../guide'

const cs = (title: string, lines: [string, string][]) => ({ t: 'example' as const, title, lines: lines.map(([label, text]) => ({ label, text })) })

const guide: Guide = {
  intro:
    'These are real, publicly documented lives, summarised from biographies, interviews and research. They show how different the routes to exceptional achievement can be, and how often early brilliance leads somewhere unexpected. Remember survivorship bias: we hear about the prodigies who became famous, not the many who were pushed and did not.',
  sections: [
    {
      id: 'made',
      title: 'Intensive training from early childhood',
      blocks: [
        cs('The Polgár sisters (Hungary, chess)', [
          ['Upbringing', 'Homeschooled by László and Klára Polgár; chess for many hours a day from about age 4; also languages and maths.'],
          ['Outcome', 'Susan: women’s world champion. Sofia: international master. Judit: reached world number 8 overall, beat Kasparov and Karpov.'],
          ['Key ingredients', 'Warmth, play-like early training, siblings as peers, a huge chess library, strong parental belief.'],
          ['Lesson', 'Intensive, loving, interest-led training can produce world-class skill. Note the sisters also had different results despite the same regime.'],
        ]),
        cs('Tiger Woods (USA, golf)', [
          ['Upbringing', 'Given a club before age 1 by his father Earl; on TV putting at age 2; structured practice and psychological “toughening” drills.'],
          ['Outcome', '15 major championships; one of the greatest golfers ever. Later public struggles with injuries and personal life.'],
          ['Lesson', 'Early specialisation worked here, but Roger Federer (who played many sports and specialised late) shows a different path to the top (David Epstein, *Range*).'],
        ]),
        cs('Venus and Serena Williams (USA, tennis)', [
          ['Upbringing', 'Richard Williams wrote a 78-page plan before they were born; coached them on public courts in Compton from age 4; pulled them out of junior tournaments to avoid burnout.'],
          ['Outcome', 'Serena: 23 Grand Slam singles titles; Venus: 7. Both remained close to their family.'],
          ['Lesson', 'Structure plus protection: he limited junior competition and insisted on schooling.'],
        ]),
        cs('Lang Lang (China, piano)', [
          ['Upbringing', 'Piano from age 3; his father gave up his career, moved with him to Beijing, and pushed relentlessly; after a lost lesson he told 9-year-old Lang Lang to kill himself.'],
          ['Outcome', 'World-famous concert pianist, who says he forgave his father and also describes lasting pain.'],
          ['Lesson', 'Achievement despite, not because of, cruelty. His own advice to parents now is to make music joyful.'],
        ]),
        cs('Wolfgang Amadeus Mozart (Austria, music)', [
          ['Upbringing', 'Trained by his father Leopold, a leading music teacher; toured Europe as a child performer from age 6.'],
          ['Outcome', 'One of the greatest composers; his first works now considered masterpieces came after more than ten years of training.'],
          ['Lesson', 'Even the archetypal “natural” had an intense, expert teacher and years of practice (Ericsson’s ten-year rule).'],
        ]),
      ],
    },
    {
      id: 'accelerated',
      title: 'Very early academic acceleration',
      blocks: [
        cs('Terence Tao (Australia, mathematics)', [
          ['Upbringing', 'Taught himself to read at 2; parents (a physician and a maths teacher) sought expert advice and chose **flexible, partial acceleration** rather than putting him straight into university.'],
          ['Path', 'Primary school with acceleration in maths; olympiad gold at 13; university at 14; PhD at Princeton at 21.'],
          ['Outcome', 'Fields Medal 2006; widely considered one of the greatest living mathematicians; describes a balanced, happy childhood.'],
          ['Lesson', 'Pacing matters: acceleration matched to readiness, with time for social development.'],
        ]),
        cs('Ruth Lawrence (UK, mathematics)', [
          ['Upbringing', 'Homeschooled by her father, who left his job to teach her; passed O-level maths at 9; Oxford at 12, accompanied by her father to lectures.'],
          ['Outcome', 'Professor of mathematics at the Hebrew University of Jerusalem. She later said she would not hothouse her own children in the same way.'],
          ['Lesson', 'Success, but isolation from peers was a real cost.'],
        ]),
        cs('William James Sidis (USA)', [
          ['Upbringing', 'Raised by psychologist Boris Sidis to prove early training creates genius; reportedly reading at 18 months; Harvard at 11 amid intense press attention.'],
          ['Outcome', 'Withdrew from public life, worked in low-level clerical jobs and died at 46. Often cited as a cautionary tale.'],
          ['Lesson', 'Extreme publicity and parental project-making, with little attention to emotional needs, can turn a prodigy away from achievement.'],
        ]),
        cs('Kim Ung-yong (South Korea)', [
          ['Upbringing', 'Reported speaking several languages as a toddler; worked with NASA in the US as a child.'],
          ['Outcome', 'Returned to Korea, chose an ordinary career as a civil engineer and university professor, and said he was happy. The press called him a “failed genius”; he rejected the label.'],
          ['Lesson', 'A prodigy choosing a quieter life is not failure.'],
        ]),
      ],
    },
    {
      id: 'patterns',
      title: 'Patterns across cases',
      blocks: [
        { t: 'table', head: ['Factor', 'Seen in good outcomes', 'Seen in poor outcomes'], rows: [
          ['Parental warmth', 'Polgárs, Tao, Williams', 'Absent or conditional (Sidis; Lang Lang’s early years)'],
          ['Child’s own interest', 'Strong and growing', 'Interest replaced by obligation'],
          ['Peers', 'Siblings, clubs, olympiad teams', 'Isolated among much older students'],
          ['Publicity', 'Shielded', 'Intense media spotlight (Sidis)'],
          ['Pacing', 'Flexible acceleration', 'All-at-once leaps with no support'],
          ['Identity', 'Allowed to change direction', 'Tied entirely to being a prodigy'],
        ] },
      ],
    },
  ],
  sources: [
    'Forbes, C. (1992). The Polgar Sisters: Training or Genius? Henry Holt.',
    'Epstein, D. (2019). Range: Why Generalists Triumph in a Specialized World. Riverhead.',
    'Wallace, A. (1986). The Prodigy: A Biography of William James Sidis. Dutton.',
    'Gross, M. U. M. (2003). Exceptionally Gifted Children (2nd ed.). RoutledgeFalmer.',
    'Lang Lang & Ritz, D. (2008). Journey of a Thousand Miles. Spiegel & Grau.',
  ],
  related: ['parenting/gifted/strict-and-intensive', 'parenting/gifted/research'],
}

export default guide
