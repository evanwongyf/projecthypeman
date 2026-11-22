import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'When two poles cross at an angle, and not at a right angle, a square lashing will not hold: the poles will try to spring apart. The diagonal lashing is made for that job. It binds crossing poles with turns that run across the joint, so the poles cannot slide along each other or spring apart.',
  nutshell: [
    'A diagonal lashing joins two poles that **cross at an angle**, such as the X of a trestle or a brace.',
    'It starts with a **timber hitch** round both poles, then makes **three turns one way** and **three the other**, forming an X, then frapping turns and a clove hitch.',
    'The turns pull the two poles together **at the crossing** and also prevent them from sliding.',
    'It is used for **braces**, **trestles** and the crossing of an **A-frame tripod**.',
    'It is the lashing you use when a square lashing would slip, because the poles are not at right angles.',
  ],
  sections: [
    {
      id: 'tie',
      title: 'How to tie it',
      lead: 'Step through the diagram. The two poles cross in an X, and the turns lie across the crossing.',
      blocks: [
        { t: 'knot', id: 'diagonal-lashing' },
        {
          t: 'steps',
          items: [
            { title: 'Place the poles', body: 'Lay the poles across each other at the angle you want, with the crossing where the lashing will go.' },
            { title: 'Start with a timber hitch', body: 'Tie a timber hitch round both poles at the crossing, a turn of the rope round both, tucked back under itself, with the end wound round the standing part. This holds the poles together while you work.' },
            { title: 'Make three turns one way', body: 'Wind three or four tight turns round both poles, running across the crossing in one direction. Keep them beside each other and pull each tight.' },
            { title: 'Make three turns the other way', body: 'Now wind three or four turns running the other way across the crossing, so the two sets cross each other.' },
            { title: 'Frap and finish', body: 'Make two or three frapping turns between the poles, round the lashing turns, pulling them tight, then finish with a clove hitch on one pole.' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Rope length', text: 'A diagonal lashing takes a little more rope than a square lashing. For poles about 5 cm thick, allow around 3.5 to 4 m of cord and keep a little spare for the frapping.' },
      ],
    },
    {
      id: 'why',
      title: 'Why a different lashing?',
      blocks: [
        { t: 'p', text: 'In a square lashing the poles are at right angles, so turns running **round** the joint clamp them in both directions. When the poles cross at an acute angle, those turns would slide along the poles towards the narrow side and the joint would spring open. A diagonal lashing puts the turns **across** the crossing in two directions, so they hold the poles together at the crossing and resist both sliding and springing apart.' },
        {
          t: 'table',
          head: ['Lashing', 'Poles', 'Typical use'],
          rows: [
            ['Square', 'Cross at right angles', 'Gate, table, frame, platform'],
            ['Diagonal', 'Cross at an angle (not at 90°)', 'Braces, trestles, A-frame tripods'],
            ['Shear', 'Side by side, parallel', 'Bipod, A-frame, lengthening a pole'],
          ],
        },
      ],
    },
    {
      id: 'use',
      title: 'What to build with it',
      blocks: [
        {
          t: 'list',
          items: [
            'A **diagonal brace** across the corner of a square frame, which stops a rectangle from collapsing into a parallelogram.',
            'A **trestle**: two crossed pairs of poles, which carry a table or a platform.',
            'An **X-frame** to hold a ridge pole or a pot hanger over a fire.',
            'A **tripod** for a hanging rack or a cooking pot, with the three legs lashed at the crossing (a variation taught in scouting).',
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Build low and test it', text: 'Crossed-pole structures can twist suddenly under load. Keep them low, test them gently, and never stand on a structure you have not tested under supervision.' },
      ],
    },
    {
      id: 'mistakes',
      title: 'Common mistakes',
      blocks: [
        {
          t: 'checklist',
          items: [
            'The timber hitch is tight before you start winding.',
            'Both sets of turns are tight and lie side by side, not crossed.',
            'The two sets of turns cross at the centre, making an X.',
            'The frapping turns are between the poles, not round the outside.',
            'The structure does not spring or slide when you push the poles.',
          ],
        },
        {
          t: 'dodont',
          do: ['Start at the crossing, with the poles marked in place.', 'Pull each turn hard as you make it.'],
          dont: ['Do not use a square lashing for poles that are not at right angles.', 'Do not leave slack between the turns; it will loosen as soon as the structure is loaded.'],
        },
      ],
    },
  ],
  sources: [
    'The Scout Association. Pioneering: lashings.',
    'Ashley, C. W. (1944). The Ashley Book of Knots. Doubleday.',
  ],
  related: ['survival/knots-and-lashing/square-lashing', 'survival/knots-and-lashing/shear-lashing', 'survival/knots-and-lashing/clove-hitch'],
}

export default guide
