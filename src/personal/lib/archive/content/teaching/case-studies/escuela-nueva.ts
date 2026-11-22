import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'In the 1970s, rural Colombia had thousands of tiny schools where one teacher taught children of every age at once, with few books and little training. Two education officials, Vicky Colbert and colleagues, built a model that turned this weakness into a design: self-paced learning guides, children working in groups, a student government and a close link between school and community. Escuela Nueva (“New School”) spread to some 20,000 schools in Colombia and was adopted in dozens of countries. This case study describes the model, what the evidence shows, what happened when it was copied elsewhere and why it matters to anyone who teaches mixed-age or under-resourced classes.',
  nutshell: [
    '**Escuela Nueva** began in Colombia in the 1970s to improve **multigrade rural schools** where one teacher teaches several grades.',
    'Core elements: **learning guides** that children use **at their own pace**, **flexible promotion**, **cooperative groups**, **student government**, **community involvement** and **teacher training** in these methods.',
    'Evaluations found **better results in Spanish and maths** and **better self-esteem and civic behaviour** than ordinary rural schools.',
    'It spread across Colombia (to about **20,000 schools** by the 1980s) and abroad, including **Vietnam’s VNEN**, with **mixed** results when copied.',
    'Lessons: **active, cooperative learning can work with few resources**, but **scale needs teacher training, good guides and support**.',
  ],
  sections: [
    {
      id: 'model',
      title: 'The model',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Guides', title: 'Self-learning guides', body: 'Illustrated workbooks that lead pupils through a unit step by step, linking to their own lives and communities. Children work on them on their own or in groups, and the teacher moves around.' },
            { tag: 'Pace', title: 'Flexible promotion', body: 'Children move on when they have mastered a unit, not at the end of the year. A child who misses school can catch up, and one who is ahead can move on.' },
            { tag: 'Groups', title: 'Cooperative learning', body: 'Pupils of different ages work together, helping each other, which suits a multigrade class.' },
            { tag: 'Democracy', title: 'Student government', body: 'Children elect a council with responsibilities for school life, and learn democratic practice.' },
            { tag: 'Community', title: 'Community and parents', body: 'The school is linked to its community: parents help, children study local problems and share knowledge with families.' },
            { tag: 'Space', title: 'Learning corners and a library', body: 'Simple learning corners and a small library with a few books for all grades.' },
          ],
        },
        {
          t: 'table',
          head: ['Traditional rural multigrade school', 'Escuela Nueva'],
          rows: [
            ['Teacher lectures and moves between grades, leaving some idle', 'Children work from guides, teacher facilitates'],
            ['Fixed annual promotion; repetition and drop-out are common', 'Mastery-based, flexible promotion'],
            ['Rote and copying from the board', 'Active, applied and cooperative learning'],
            ['School isolated from the community', 'Community and parents involved'],
            ['Teacher feels isolated and unsupported', 'Training, networks and microcentres support teachers'],
          ],
        },
      ],
    },
    {
      id: 'evidence',
      title: 'What the evidence shows',
      blocks: [
        {
          t: 'table',
          head: ['Finding', 'Source'],
          rows: [
            ['Third- and fifth-grade pupils in Escuela Nueva schools scored higher in Spanish and mathematics than those in comparable traditional rural schools, with larger gains in the early grades', 'McEwan (1998); Psacharopoulos and colleagues (1993), using national assessments and controls'],
            ['Pupils showed greater self-esteem, creativity and civic behaviour (such as cooperation and participation)', 'Evaluations by the World Bank and the Colombian government'],
            ['Lower repetition and drop-out in the early grades', 'Colombian Ministry of Education data'],
            ['Where the model was implemented only in part (guides without training or student government), effects were smaller', 'Evaluations of the programme’s expansion'],
            ['The programme won international recognition, including the 2013 WISE Prize for Education for Vicky Colbert', 'WISE (World Innovation Summit for Education)'],
          ],
          caption: 'Evaluations used comparisons with similar schools, not random assignment, so some selection effects cannot be ruled out.',
        },
      ],
    },
    {
      id: 'spread',
      title: 'Spread and setbacks',
      blocks: [
        { t: 'p', text: 'By the late 1980s Escuela Nueva was Colombia’s national policy for rural primary schools, and the model was adapted in countries from Guatemala to the Philippines. In Colombia, funding and political support fell away in the 1990s and quality slipped, until the Fundación Escuela Nueva, led by Colbert, revived and updated it. In Vietnam, the Escuela Nueva model was adopted as VNEN (Vietnam Escuela Nueva) from 2012 and rolled out to thousands of schools. Evaluations were mixed, and the programme was scaled down after problems with teacher preparation, large classes and guides that were hard to use in practice.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Lesson', title: 'Do not copy the form without the substance', body: 'Guides and groups without teacher training, ongoing support and a supportive climate produce little gain.' },
            { tag: 'Lesson', title: 'Scale needs system support', body: 'Training, supervision, materials, local networks and political continuity are as important as the idea.' },
            { tag: 'Lesson', title: 'Adapt to context', body: 'The model fits small multigrade rural classes; large urban classes are different.' },
            { tag: 'Lesson', title: 'Teacher agency matters', body: 'Teachers who understand and believe in the model do better than those who simply follow it.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'Relevance beyond Colombia', text: 'Mixed-age classes, small rural schools and large classes with few resources exist in many places. The ideas of mastery-based progress, cooperative groups and student responsibility apply well beyond them, and link to what the research says about cooperative learning and mastery learning.' },
        { t: 'links', items: [{ path: 'teaching/techniques/instruction/mastery', note: 'Mastery learning' }, { path: 'teaching/techniques/active-learning/cooperative', note: 'Cooperative learning' }, { path: 'teaching/philosophies/progressivism', note: 'Progressive education' }] },
      ],
    },
  ],
  sources: [
    'Colbert, V. (1999). Improving the quality of rural education: the Escuela Nueva experience in Colombia. Prospects.',
    'McEwan, P. J. (1998). The effectiveness of multigrade schools in Colombia. International Journal of Educational Development.',
    'Psacharopoulos, G., Rojas, C., and Velez, E. (1993). Achievement evaluation of Colombia’s Escuela Nueva: is multigrade the answer? Comparative Education Review.',
    'Colbert, V., and Arboleda, J. (2016). Universalizing Rural Secondary Education Through Innovation: Colombia’s Escuela Nueva. Brookings.',
  ],
  related: ['teaching/techniques/instruction/mastery', 'teaching/techniques/active-learning/cooperative', 'teaching/philosophies/progressivism'],
}

export default guide
