import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Hobbies are where gifted children often do their deepest learning: they choose them, they persist at them, and they meet peers who share them. But no activity “raises IQ” in a lasting way, and the research on transfer is sobering. Choose hobbies for what they directly build, skill, discipline, joy, friends, and not for promised side effects.',
  nutshell: [
    '**Far transfer is weak**: chess, music and brain-training rarely improve general intelligence or school grades much (Sala and Gobet’s meta-analyses). They do build the specific skill, plus discipline and identity.',
    '**Reading for pleasure** is the hobby with the strongest link to later attainment.',
    'Pick **a few deep interests over many shallow ones**, follow the child’s curiosity, and protect free time.',
    'The best enrichment usually has three ingredients: **challenge, a community of peers, and a good teacher or mentor**.',
  ],
  sections: [
    {
      id: 'menu',
      title: 'What each hobby develops',
      blocks: [
        { t: 'table', head: ['Activity', 'Builds', 'Good starting age', 'Notes'], rows: [
          ['Reading widely', 'Vocabulary, knowledge, empathy, attention', 'Birth (shared reading)', 'Strongest link to later achievement; let them choose books, including “easy” ones'],
          ['Musical instrument', 'Auditory skills, fine motor control, practice habits, discipline', '4–7 (piano, violin, Suzuki methods earlier)', 'Small effects on IQ in randomised studies; large effect on musicianship. Daily short practice beats weekly long sessions'],
          ['Chess', 'Planning, pattern recognition, focus, handling losses', '5–8', 'Little transfer to maths in good studies; great for competitive, analytic children'],
          ['Maths circles and puzzles', 'Problem solving, proof, perseverance', '7+', 'Art of Problem Solving, Beast Academy, maths olympiad clubs; Singapore has SMO and SASMO'],
          ['Coding and robotics', 'Logic, debugging, building', '6+ (Scratch), 10+ (Python)', 'Projects beat tutorials; competitions like FIRST LEGO League'],
          ['Second or third language', 'Communication, cultural knowledge', 'Any age; earlier for accent', 'Bilingual “executive function advantage” is disputed; the language itself is the benefit'],
          ['Sport', 'Fitness, coordination, teamwork, resilience', 'Varied play first; specialise in mid-teens for most sports', 'Early single-sport specialisation raises injury and burnout risk (AAP)'],
          ['Art, drama, writing', 'Creativity, expression, observation', 'Any age', 'Valuable for intense, sensitive children who need an outlet'],
          ['Science and nature', 'Curiosity, observation, method', 'Any age', 'Collections, gardening, birdwatching, kitchen experiments, citizen science'],
          ['Building and making', 'Spatial reasoning (strongly linked to STEM success)', 'Toddlers (blocks) onward', 'Lego, models, woodwork, origami'],
        ] },
      ],
    },
    {
      id: 'transfer',
      title: 'Do hobbies make children smarter?',
      blocks: [
        { t: 'bars', title: 'Typical effects on general cognition or school grades in well-controlled studies', unit: 'd', decimals: 2, refs: [{ at: 0.2, label: 'small' }], items: [
          { label: 'Chess instruction', value: 0.1, note: 'Sala & Gobet 2016, near zero in high-quality studies' },
          { label: 'Music training', value: 0.05, note: 'Sala & Gobet 2020, near zero with active controls' },
          { label: 'Working-memory training', value: 0.05, note: 'Melby-Lervåg et al. 2016' },
          { label: 'Extra year of schooling', value: 0.2, note: 'about 1–5 IQ points per year (Ritchie & Tucker-Drob 2018)' },
        ], caption: 'Approximate standardised effects; the honest message is that education itself raises intelligence, while single hobbies mostly build themselves.' },
        { t: 'callout', tone: 'tip', title: 'So why bother?', text: 'Because the specific skill is worth having, because hobbies build self-discipline and identity, and because deep practice in anything teaches a child what mastery feels like. That lesson transfers even when IQ does not.' },
      ],
    },
    {
      id: 'choosing',
      title: 'Choosing and sustaining',
      blocks: [
        { t: 'dodont', do: [
          'Sample widely when young, then go deep where interest sticks.',
          'Let the child have a real say, especially from about age 8.',
          'Agree a trial period (for example one term) before quitting is allowed.',
          'Find a good teacher: warm and encouraging at first, more demanding later.',
          'Connect them with peers at their level through clubs, camps and competitions.',
          'Keep at least one activity purely for fun.',
        ], dont: [
          'Fill every weekday with lessons; children need unstructured time.',
          'Choose activities to impress school admissions.',
          'Make your approval depend on results.',
          'Force an instrument for years against persistent unhappiness.',
          'Specialise in one sport before puberty without a strong reason.',
          'Assume a gifted child should be gifted at everything they try.',
        ] },
      ],
    },
  ],
  sources: [
    'Sala, G. & Gobet, F. (2017). Does far transfer exist? Negative evidence from chess, music, and working memory training. Current Directions in Psychological Science 26(6).',
    'Sala, G. & Gobet, F. (2020). Cognitive and academic benefits of music training with children: a multilevel meta-analysis. Memory & Cognition 48.',
    'Ritchie, S. J. & Tucker-Drob, E. M. (2018). How much does education improve intelligence? A meta-analysis. Psychological Science 29(8).',
    'Wai, J., Lubinski, D. & Benbow, C. P. (2009). Spatial ability for STEM domains. Journal of Educational Psychology 101(4).',
    'Brenner, J. S. (2016). Sports specialization and intensive training in young athletes. Pediatrics 138(3).',
  ],
  related: ['parenting/gifted/nurturing-by-age', 'parenting/gifted/research'],
}

export default guide
