import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The overhand knot is the first knot almost everyone ties, usually without knowing its name: it is what you do to a loose thread or a shoelace to stop it pulling through. It is the simplest knot there is, and it is the building block of far more complicated ones, including the reef knot you will meet next.',
  nutshell: [
    'The overhand knot is a **stopper**: it makes a lump at the end of a rope so the rope cannot slip through a hole, a block or your fingers.',
    'Tie it by making a **loop**, then passing the working end **through** the loop and pulling tight.',
    'It is a **trefoil**, the simplest true knot in mathematics, with three crossings.',
    'It **jams**: under a heavy load it tightens so hard it can be very difficult to untie, and it weakens the rope by roughly a third.',
    'Tied in a **doubled** rope it makes a loop; two overhands, one the opposite way to the other, make a reef knot.',
  ],
  sections: [
    {
      id: 'tie',
      title: 'How to tie it',
      lead: 'Step through the diagram below. The orange part is the standing part and the blue part is the working end.',
      blocks: [
        { t: 'knot', id: 'overhand' },
        {
          t: 'steps',
          items: [
            { title: 'Make a loop', body: 'Lay the working end across the standing part, so the rope crosses over itself and makes a small loop.' },
            { title: 'Pass the end through', body: 'Take the working end round behind the standing part and up through the loop, from front to back.' },
            { title: 'Pull it tight', body: 'Hold the standing part in one hand and the working end in the other, and pull them apart. The knot closes into a small hard lump.' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Leave a tail', text: 'Leave a tail of at least a hand’s width after the knot. A knot at the very end of a rope has nothing to stop it from working loose in slick synthetic rope.' },
      ],
    },
    {
      id: 'use',
      title: 'What it is for',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Stopper', body: 'Tied in the end of a rope or cord it stops the end running through a hole, a block, a pulley or a sleeve. A lump of rope that is too big to pass is all a stopper has to be.' },
            { title: 'Stopping frays', body: 'A quick overhand in the end of an unwhipped rope keeps the strands from untwisting until you can whip it properly.' },
            { title: 'Doubled overhand loop', body: 'Tied in a doubled rope (a bight), it makes a quick fixed loop, fine for a handhold or a hook line, but weaker and harder to untie than a bowline.' },
            { title: 'Binding start', body: 'It is the first half of the reef knot, the sheet bend and many more. If you can tie it well, the others become pieces you already know.' },
          ],
        },
      ],
    },
    {
      id: 'limits',
      title: 'Strength, jamming and the better stopper',
      blocks: [
        { t: 'p', text: 'The overhand is quick and tidy, but it has two weaknesses. It **jams**: pull hard on a heavily loaded overhand and it turns into a lump that you may have to cut. And it keeps only about 55–65% of the rope’s strength, so the rope breaks at the knot long before it would break elsewhere.' },
        {
          t: 'table',
          head: ['Stopper', 'Size of lump', 'Jamming', 'Best for'],
          rows: [
            ['Overhand', 'Small', 'Jams under heavy load', 'Light jobs, thread, thin cord'],
            ['Double overhand', 'Bigger', 'Jams, harder still', 'Stopping a thick line from pulling through'],
            ['Figure of eight', 'Bigger and bulkier', 'Stays easier to undo', 'Ropes that will be loaded; climbing and sailing'],
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Not for loads that matter', text: 'A stopper is a convenience, not a load-bearing joint. If a person or a heavy load depends on the rope end staying put, use a figure of eight, and back it up with proper equipment and supervision.' },
      ],
    },
    {
      id: 'math',
      title: 'The knot mathematicians love',
      blocks: [
        { t: 'p', text: 'If you tie an overhand knot in a rope and then join the two ends together, you get the **trefoil knot**: the simplest nontrivial knot in mathematics, with a crossing number of three. No amount of wriggling will turn it back into a plain loop without cutting. That makes the overhand a nice example of what a knot actually is: a loop that cannot be undone by moving the rope alone.' },
        { t: 'callout', tone: 'fact', text: 'Knot theory is a branch of topology, the maths of shapes that stay the same when stretched. Crossing number is the fewest crossings a knot can be drawn with. The trefoil has 3, the figure-of-eight knot has 4, and the plain loop (the unknot) has 0.' },
      ],
    },
    {
      id: 'practice',
      title: 'Practice and common mistakes',
      blocks: [
        {
          t: 'checklist',
          items: [
            'I can tie it without looking, in under ten seconds.',
            'The working end passes through the loop from the same side each time.',
            'I leave a tail of at least a hand’s width.',
            'I can tie it in a doubled rope to make a loop.',
            'I can tie it with a thin cord, and with thick rope, and with gloves on.',
          ],
        },
        {
          t: 'dodont',
          do: ['Pull the knot slowly and watch it close, so you learn its shape.', 'Dress it so the strands lie parallel and uncrossed.'],
          dont: ['Do not leave it loose; a loose overhand falls apart in slick rope.', 'Do not tie it in the middle of a rope and rely on it to take a hard pull.'],
        },
      ],
    },
  ],
  sources: [
    'Ashley, C. W. (1944). The Ashley Book of Knots. Doubleday. (Overhand knot, #46.)',
    'Adams, C. (2004). The Knot Book. American Mathematical Society.',
  ],
  related: ['survival/knots-and-lashing/rope-basics', 'survival/knots-and-lashing/figure-of-8', 'survival/knots-and-lashing/reef-knot'],
}

export default guide
