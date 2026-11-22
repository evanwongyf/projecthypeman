import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Three educational traditions, all born in early twentieth-century Europe, shape early-years and primary education around the world: Montessori, Waldorf (Steiner) and Reggio Emilia. Each is a whole philosophy with its own materials, rhythm and view of the child, and each has loyal communities and critics. This page compares them side by side, says what each believes, and reviews what the research says, which is more encouraging for some features than for others.',
  nutshell: [
    '**Montessori** (1907): a **prepared environment**, self-chosen work with **specially designed materials**, mixed ages and uninterrupted work cycles; the teacher observes and guides.',
    '**Waldorf or Steiner** (1919): an arts-rich education following **stages of development**, with **delayed formal reading**, main-lesson blocks, handwork and rhythm; based on Steiner’s anthroposophy.',
    '**Reggio Emilia** (post-1945): a **community-run** approach built around **long projects**, the **“hundred languages”** of expression, the **environment as a third teacher** and documentation of learning.',
    'Research on **Montessori** gives some positive results; evidence for **Waldorf** and **Reggio** is mostly descriptive.',
    'In Singapore and across Asia, Montessori in particular is widespread in preschools, with varying fidelity to the original model.',
  ],
  sections: [
    {
      id: 'compare',
      title: 'The three approaches compared',
      blocks: [
        {
          t: 'table',
          head: ['', 'Montessori', 'Waldorf (Steiner)', 'Reggio Emilia'],
          rows: [
            ['Founder and date', 'Maria Montessori; first Casa dei Bambini, Rome, 1907', 'Rudolf Steiner; first school Stuttgart, 1919', 'Loris Malaguzzi and parents; Reggio Emilia, Italy, from 1945'],
            ['View of the child', 'An active learner with an “absorbent mind” and sensitive periods', 'A being with body, soul and spirit developing in seven-year phases', 'Competent, curious and full of potential: the “rich child”'],
            ['Environment', 'Prepared, ordered, child-sized, beautiful; materials in sequence', 'Homelike, natural materials, warm; rhythm of the day and year', 'The “third teacher”: light, open, with an atelier (art studio)'],
            ['Curriculum', 'Practical life, sensorial, language, mathematics, cultural; self-chosen', 'Main-lesson blocks; arts, music, eurythmy, handwork; delayed formal reading (about age 7)', 'Emergent long-term projects from children’s interests'],
            ['Teacher', 'Directress or director: prepares, observes, introduces materials', 'Class teacher who often stays with a class for years; storyteller and artist', 'Co-learner and researcher; works with an atelierista and a pedagogista'],
            ['Grouping', 'Mixed ages (three-year bands), three-hour uninterrupted work cycle', 'Same age, same teacher through the grades', 'Small groups on projects'],
            ['Assessment', 'Observation and records; no grades in early years', 'Narrative reports; few tests in early years', 'Documentation of children’s work and thinking'],
            ['Technology', 'Limited, depending on school', 'Minimal in the early years', 'Used as one of many languages'],
          ],
        },
      ],
    },
    {
      id: 'montessori',
      title: 'Montessori in more detail',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Idea', title: 'Freedom within limits', body: 'Children choose their work from the shelf, but within clear rules. Respect for others and for materials is the limit.' },
            { tag: 'Idea', title: 'Sensitive periods', body: 'Windows in which a child is especially ready for a skill: language, order, movement. The teacher watches and offers the right material.' },
            { tag: 'Idea', title: 'Self-correcting materials', body: 'Materials such as the pink tower or the number rods show their own error, so the child does not need an adult to say it is wrong.' },
            { tag: 'Idea', title: 'Normalisation', body: 'Deep, calm concentration is seen as the natural state of a child in a prepared environment. Interruption is avoided.' },
          ],
        },
        {
          t: 'dodont',
          do: ['Prepare an ordered, accessible environment.', 'Observe before intervening.', 'Teach each material’s use, then step back.', 'Protect long periods of uninterrupted work.'],
          dont: ['Do not treat freedom as no limits.', 'Do not interrupt a child who is concentrating to praise them.', 'Do not mix pieces of the method and call it Montessori; the name is not protected, so fidelity varies.', 'Do not assume every Montessori school follows the same practice.'],
        },
      ],
    },
    {
      id: 'waldorf-reggio',
      title: 'Waldorf and Reggio Emilia',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Waldorf', title: 'Rhythm and the arts', body: 'Days, weeks and years follow a rhythm. Painting, music, drama, movement and handwork are central, and academic content is taught through story and art.' },
            { tag: 'Waldorf', title: 'Delayed reading', body: 'Formal literacy starts at around seven, after oral language, story and rhythm are established, a point of debate among researchers.' },
            { tag: 'Reggio', title: 'The hundred languages', body: 'Malaguzzi’s poem says that a child has a hundred languages (drawing, clay, movement, speech) and school steals ninety-nine. Reggio teachers support many ways of expression.' },
            { tag: 'Reggio', title: 'Documentation', body: 'Teachers record children’s work and conversations on panels, which show learning to parents and to the children themselves and guide the next step.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'The Waldorf debate', text: 'Waldorf education grows from Steiner’s anthroposophy, a spiritual philosophy, and critics have questioned some of its beliefs and practices, including those on health and science. Many schools describe a more secular practice. Parents should look at what a particular school does.' },
      ],
    },
    {
      id: 'evidence',
      title: 'What the research says',
      blocks: [
        {
          t: 'table',
          head: ['Approach', 'Evidence in brief'],
          rows: [
            ['Montessori', 'A lottery-based study in Milwaukee (Lillard and Else-Quest, 2006) found that Montessori children did better on reading, mathematics and social measures at the end of kindergarten, and that 12-year-olds wrote more creative essays and showed a stronger sense of community. Later studies show positive but varied effects, and fidelity matters.'],
            ['Waldorf', 'Mostly descriptive and survey evidence, with few rigorous trials; some studies find positive outcomes for creativity and well-being and others find no advantage in academic skills.'],
            ['Reggio Emilia', 'Rich qualitative documentation and a strong reputation, but little controlled research on outcomes, partly because the approach is deliberately local and emergent.'],
          ],
          caption: 'The evidence base is thin. Parents and teachers should look at the quality of a particular school and not just the label.',
        },
        { t: 'callout', tone: 'tip', title: 'What travels', text: 'Montessori’s order, concentration and self-correcting materials; Waldorf’s arts, rhythm and storytelling; Reggio’s documentation and environment. Any classroom can borrow these without adopting the whole philosophy.' },
      ],
    },
  ],
  sources: [
    'Montessori, M. (1912). The Montessori Method. Frederick A. Stokes.',
    'Steiner, R. (1919/1996). The Foundations of Human Experience. Anthroposophic Press.',
    'Edwards, C., Gandini, L., and Forman, G. (eds.) (2012). The Hundred Languages of Children (3rd ed.). Praeger.',
    'Lillard, A., and Else-Quest, N. (2006). Evaluating Montessori education. Science.',
  ],
  related: ['teaching/philosophies/overview', 'teaching/philosophies/free-and-democratic-schools', 'teaching/theories/constructivism'],
}

export default guide
