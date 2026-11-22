import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A gifted child spends most of their waking hours at school, so the fit matters more than any hobby. The main options are acceleration (moving faster), enrichment (going deeper), grouping with similar learners, and alternatives outside the mainstream.',
  nutshell: [
    '**Acceleration** has some of the strongest evidence in all of education: accelerated students achieve more than equally able peers who were not accelerated, with little social harm (Steenbergen-Hu et al. 2016).',
    '**Ability grouping** within or across classes benefits high-ability students when the curriculum is actually adjusted.',
    'In Singapore, options include school-based gifted programmes, the **Integrated Programme**, DSA admissions for talents, and specialised schools such as the NUS High School of Mathematics and Science.',
  ],
  sections: [
    {
      id: 'options',
      title: 'Options compared',
      blocks: [
        { t: 'table', head: ['Option', 'What it is', 'Evidence', 'Best for'], rows: [
          ['Whole-grade acceleration', 'Skipping a year', 'Large academic gains; social effects neutral to positive when planned (Iowa Acceleration Scale)', 'Children ahead in all subjects and socially ready'],
          ['Subject acceleration', 'Taking one subject with an older class', 'Positive; low risk', 'Uneven profiles, e.g. strong in maths only'],
          ['Early entry', 'Starting school or university early', 'Positive for carefully selected students', 'Exceptionally ready children'],
          ['Curriculum compacting', 'Testing out of known material, using the time for extension', 'Positive, low cost', 'Bored children in mixed classes'],
          ['Enrichment', 'Deeper and broader projects', 'Modest positive effects; depends on quality', 'All able learners'],
          ['Ability grouping', 'Classes or groups of similar ability', 'Positive for gifted when curriculum differs', 'Schools with enough gifted students'],
          ['Homeschooling', 'Parent-led learning', 'Varies; flexible pacing, risk of isolation', 'Profoundly gifted or 2e children poorly served at school'],
          ['Competitions and mentors', 'Olympiads, science fairs, research', 'Strong motivation and peer effects', 'Older children with clear interests'],
        ] },
      ],
    },
    {
      id: 'talking',
      title: 'Talking to the school',
      blocks: [
        { t: 'checklist', items: [
          'Bring evidence: work samples, test results, observations of what they already know.',
          'Ask what is possible, compacting, extension, subject acceleration, rather than demanding a label.',
          'Describe the child, not just the scores: what bores them, what lights them up.',
          'Agree a review date to see whether changes work.',
          'Be a partner: teachers have 30 other children and respond better to collaboration.',
        ] },
      ],
    },
  ],
  sources: [
    'Steenbergen-Hu, S., Makel, M. C. & Olszewski-Kubilius, P. (2016). What one hundred years of research says about the effects of ability grouping and acceleration on K–12 students’ academic achievement. Review of Educational Research 86(4).',
    'Assouline, S. G. et al. (2015). A Nation Empowered: Evidence Trumps the Excuses Holding Back America’s Brightest Students. Belin-Blank Center.',
    'Reis, S. M. & Renzulli, J. S. (1992). Using curriculum compacting to challenge the above-average. Educational Leadership 50(2).',
  ],
  related: ['parenting/gifted/identifying', 'parenting/gifted/research'],
}

export default guide
