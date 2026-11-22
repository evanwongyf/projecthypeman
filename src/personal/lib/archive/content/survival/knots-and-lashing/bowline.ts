import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The bowline (say “BOH-lin”) makes a loop in the end of a rope that does not slip, does not tighten round what it holds, and can be untied after a heavy load. That combination has made it the rescuer’s and sailor’s loop for centuries, and it is the knot taught with the story of a rabbit, a hole and a tree. It also has limits: it can shake loose when slack and it must not be trusted alone where a life depends on it.',
  nutshell: [
    'The bowline is a **fixed loop**: the loop stays the same size under load and does not choke.',
    'The rhyme: **the rabbit comes out of the hole, goes round the tree, and back down the hole.**',
    'It holds a heavy load, yet it **unties easily** afterwards, which is why rescuers and sailors love it. It keeps roughly 60–75% of the rope’s strength.',
    'It can **shake loose** if the rope goes slack and is flexed repeatedly. Add a **stopper knot** in the tail, or use the Yosemite finish or a double bowline.',
    'It is a general-purpose loop, **not a climbing tie-in**: for climbing, use the figure-of-eight follow-through taught by a qualified instructor.',
  ],
  sections: [
    {
      id: 'tie',
      title: 'How to tie it',
      lead: 'Step through the diagram. The standing part comes down from the top; the eye is the big loop on the left.',
      blocks: [
        { t: 'knot', id: 'bowline' },
        {
          t: 'steps',
          items: [
            { title: 'Make the rabbit hole', body: 'Leave a long tail. Twist a small loop into the standing part, with the rope crossing over itself. This small loop is the hole.' },
            { title: 'The rabbit comes out of the hole', body: 'Make the eye as large as you need, then bring the tail up through the hole from underneath.' },
            { title: 'Round the tree', body: 'Take the tail round behind the standing part (the tree).' },
            { title: 'Back down the hole', body: 'Take the tail back down through the hole, the way it came up.' },
            { title: 'Pull tight', body: 'Hold the eye and the tail together in one hand, and pull the standing part with the other. The knot closes, and the tail finishes inside the eye, running alongside it.' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Left-handed? The mirror image works too', text: 'A bowline can be tied with the hole on either side. What matters is that the tail finishes **inside** the eye, alongside the loop. If the tail is on the outside, you have tied a weaker “cowboy” bowline, which shakes out more easily.' },
      ],
    },
    {
      id: 'check',
      title: 'How to check it',
      blocks: [
        {
          t: 'checklist',
          items: [
            'The tail is on the **inside** of the eye, not the outside.',
            'The eye is the size you need, and the tail loop wraps neatly round the standing part.',
            'The knot is dressed, with no crossed strands.',
            'There is a tail of at least a hand’s width (a longer tail if the rope is slippery).',
            'The collar (the loop around the standing part) is snug.',
          ],
        },
        { t: 'callout', tone: 'warn', title: 'A bowline can capsize', text: 'If the tail is pulled hard, or the rope is slippery and the loop is loaded across the knot, a bowline can turn itself inside out into a weak slip. This is why, for anything important, you finish it with a stopper or a Yosemite finish.' },
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
            { title: 'Mooring and boating', body: 'A loop to drop over a post or cleat, and to hold sails and sheets.' },
            { title: 'Rescue and recovery', body: 'A loop to pass round a person in the water or a load to be hauled. It is easy to untie after a load, which matters if the rope is wet and tight.' },
            { title: 'Hauling gear', body: 'Hoisting a bag, a tarp or a pack up a bank or over a branch, where a loop that stays open helps.' },
            { title: 'Camp rigging', body: 'A loop at the end of a guy line or ridge line to slip over a stake or tree.' },
          ],
        },
      ],
    },
    {
      id: 'safe',
      title: 'Making it safer',
      lead: 'The ordinary bowline works well under steady load. These variations fix its weak points.',
      blocks: [
        {
          t: 'table',
          head: ['Variation', 'What it adds', 'When to use it'],
          rows: [
            ['Bowline with a stopper', 'An overhand knot in the tail, tied round the standing part, stops the tail from pulling through', 'Any time the rope may go slack or move about'],
            ['Yosemite bowline', 'Tail is passed back round and through the knot to lock it in place', 'Climbers’ tie-in variation, taught by instructors only'],
            ['Double bowline', 'The rope is wrapped round the collar twice, for a more secure knot', 'Slippery rope or a load that changes direction'],
            ['Left-handed (cowboy) bowline', 'Tied with the tail on the outside of the eye, which is a weaker, less secure form', 'Avoid it, unless you have a reason and a backup']
          ],
        },
        { t: 'callout', tone: 'note', title: 'About climbing', text: 'Some climbers still tie in with a Yosemite bowline, but the figure-of-eight follow-through is the standard, easier to check, and taught first. Do not learn to climb from a web page: use a qualified instructor.' },
      ],
    },
    {
      id: 'practice',
      title: 'Practice and common mistakes',
      blocks: [
        {
          t: 'list',
          items: [
            'Tie it with a rope in two colours: the tail one colour and the standing part another, so you can see where each goes.',
            'Say the rhyme out loud until you can tie it without it.',
            'Practise tying round a post or tree, with the eye already around it.',
            'Tie it with your weaker hand, then behind your back.',
            'Tie it, load it, then untie it. If it jams, the knot was probably tied wrong.',
          ],
        },
        {
          t: 'dodont',
          do: ['Check the tail finishes inside the loop.', 'Back it up with a stopper for anything that matters.'],
          dont: ['Do not tie it in a rope that is too thick for you to dress properly.', 'Do not trust an unchecked bowline with a person’s weight.'],
        },
      ],
    },
  ],
  sources: [
    'Ashley, C. W. (1944). The Ashley Book of Knots. Doubleday. (Bowline, #1010.)',
    'Budworth, G. (1999). The Complete Book of Knots. Lorenz Books.',
    'International Guild of Knot Tyers. Knot safety information.',
  ],
  related: ['survival/knots-and-lashing/figure-of-8', 'survival/knots-and-lashing/clove-hitch', 'survival/knots-and-lashing/choosing-a-knot'],
}

export default guide
