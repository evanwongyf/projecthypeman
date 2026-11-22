import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Knowing five knots is not the same as knowing which one to use. This page puts the knots on the shelf side by side, compares them by job, strength and the way each one fails, gives you a quick decision guide for the field, and ends with a practice routine that makes the knots stick.',
  nutshell: [
    'Pick a knot by its **job**: stop an end, tie to an object, make a loop, bind a bundle, join two ropes, or lash poles.',
    'Every knot trades **strength, security and ease of untying** against each other. There is no best knot, only a best knot for the job.',
    'Each knot has a **typical failure**: the overhand jams, the clove hitch rolls, the reef knot capsizes, the bowline shakes loose, the figure of eight is bulky.',
    'For anything that could hurt someone, use the **proper knot**, **back it up**, and get it **checked** by a second person.',
    'Practise little and often: ten minutes a day for a week beats an hour once.',
  ],
  sections: [
    {
      id: 'compare',
      title: 'The knots side by side',
      blocks: [
        {
          t: 'table',
          head: ['Knot', 'Job', 'Strength kept', 'Untying after load', 'Typical failure'],
          rows: [
            ['Overhand', 'Simple stopper', '55–65%', 'Hard, it jams', 'Jams under load; small, can pull through a big hole'],
            ['Figure of eight', 'Better stopper, loop (follow-through)', '75–80%', 'Fairly easy', 'Bulky; needs a proper tail'],
            ['Clove hitch', 'Quick tie to a pole or post', '60–75%', 'Easy', 'Rolls or slips on a smooth pole; loosens when slack'],
            ['Reef knot', 'Binding a bundle or bandage', '40–50%', 'Easy', 'Capsizes; not safe as a bend'],
            ['Bowline', 'Fixed loop that does not slip', '60–75%', 'Easy', 'Shakes loose when slack; capsizes if the tail is wrong'],
            ['Square lashing', 'Poles at right angles', 'Depends on rope', 'Moderate', 'Loose turns, no frapping'],
            ['Diagonal lashing', 'Poles crossing at an angle', 'Depends on rope', 'Moderate', 'Loose turns, springing apart'],
            ['Shear lashing', 'Parallel poles, A-frame', 'Depends on rope', 'Moderate', 'Feet slide; turns too tight'],
          ],
          caption: 'Strength figures are rough ranges from commonly quoted rope tests; they vary with the rope and the test method.',
        },
      ],
    },
    {
      id: 'decide',
      title: 'A decision guide',
      lead: 'Ask what you need the rope to do.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Do I just need to stop the end?', body: 'A thin line or light job: an overhand. A rope that will be loaded or must come undone: a figure of eight.' },
            { title: 'Do I need to tie to a pole or post?', body: 'Quick and adjustable: a clove hitch, backed up with two half hitches if it matters. Starting a lashing: a clove hitch.' },
            { title: 'Do I need a loop that will not slip?', body: 'A bowline for general use, finished with a stopper. For climbing, a figure-of-eight follow-through, taught by an instructor.' },
            { title: 'Do I need to bind a bundle or a bandage?', body: 'A reef knot. Check it is a reef, not a granny.' },
            { title: 'Do I need to join two ropes?', body: 'Not a reef knot. Use a sheet bend, a double fisherman’s or a figure-of-eight bend, and have someone check it.' },
            { title: 'Do I need to bind poles?', body: 'Right-angle poles: a square lashing. Crossing at an angle: a diagonal lashing. Side by side: a shear lashing.' },
          ],
        },
        {
          t: 'flow',
          title: 'Which knot?',
          nodes: [
            { label: 'What is the job?', tone: 'human' },
            { label: 'End needs stopping', sub: 'overhand or figure of eight', tone: 'process' },
            { label: 'Tie to a pole', sub: 'clove hitch, then two half hitches', tone: 'process' },
            { label: 'Fixed loop', sub: 'bowline with a stopper', tone: 'process' },
            { label: 'Bind a bundle', sub: 'reef knot', tone: 'process' },
            { label: 'Bind poles', sub: 'square, diagonal or shear', tone: 'output' },
          ],
        },
        { t: 'callout', tone: 'warn', title: 'If a failure could hurt someone', text: 'Use the proper knot, back it up, and have it checked. For climbing, rescue, work at height or anything that carries a person, learn from a qualified instructor and use certified equipment.' },
      ],
    },
    {
      id: 'practice',
      title: 'A practice routine that works',
      lead: 'Muscle memory comes from short, regular practice, not from one long session.',
      blocks: [
        {
          t: 'table',
          head: ['Day', 'Practice'],
          rows: [
            ['1', 'Overhand and figure of eight, slowly, looking, ten of each.'],
            ['2', 'Clove hitch on a rail and on a pole, then dropped over a stake.'],
            ['3', 'Reef knot with two colours, then deliberately tie a granny and spot the difference.'],
            ['4', 'Bowline with the rhyme; then without it; then behind your back.'],
            ['5', 'Review all five, against a timer: aim for ten seconds each.'],
            ['6', 'Eyes closed, and with gloves on.'],
            ['7', 'Teach someone else. Explaining is the best test.'],
          ],
        },
        {
          t: 'checklist',
          items: [
            'I can tie each of the five knots in under ten seconds.',
            'I can tie each one with my eyes closed.',
            'I can tell a reef from a granny and a correct clove hitch from a wrong one.',
            'I know how each knot fails and what to do about it.',
            'I can lash two poles at right angles with a square lashing.',
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Learn in a group', text: 'Knots are easier to learn with someone checking your work. Scouts, the National Cadet Corps and school outdoor-education programmes teach them as a matter of course.' },
      ],
    },
  ],
  sources: [
    'Ashley, C. W. (1944). The Ashley Book of Knots. Doubleday.',
    'Budworth, G. (1999). The Complete Book of Knots. Lorenz Books.',
    'The Scout Association. Knotting and pioneering resources.',
  ],
  related: ['survival/knots-and-lashing/rope-basics', 'survival/knots-and-lashing/overhand-knot', 'survival/knots-and-lashing/clove-hitch', 'survival/knots-and-lashing/bowline'],
}

export default guide
