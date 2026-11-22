import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The reef knot, also called the square knot, is two overhand knots tied one on top of the other, the second the opposite way round from the first. It lies flat and is easy to tie and untie, which makes it ideal for binding bundles, tying bandages and slings, and tying parcels. It is a poor choice for joining two ropes that carry a load, and learning to tell it from the granny knot is the whole point of this page.',
  nutshell: [
    'The mnemonic is **right over left, left over right**: tie one half knot, reverse it, tie another.',
    'A correct reef knot lies **flat and symmetrical**, with each rope’s two ends leaving on the same side. A **granny knot** is the same moves tied twice the same way, and it slips.',
    'It is the standard knot for **binding**: first-aid bandages and slings, a bundle of firewood, a parcel.',
    'It is **not a bend**. It can **capsize** and spill when one rope is loaded or when the two ropes differ in size or are slippery, and it keeps only about 45% of the rope’s strength.',
    'To untie it, push the two loops towards each other and pull one end back through.',
  ],
  sections: [
    {
      id: 'tie',
      title: 'How to tie it',
      lead: 'Step through the diagram. The orange rope comes from the left and the blue from the right. The finished knot is two bights hooked through each other.',
      blocks: [
        { t: 'knot', id: 'reef' },
        {
          t: 'steps',
          items: [
            { title: 'Right over left', body: 'Hold one end in each hand. Cross the right-hand end over the left-hand end.' },
            { title: 'Wrap it under and up', body: 'Take the right-hand end under the left and up through the middle. That is the first half knot.' },
            { title: 'Left over right', body: 'Now cross the left-hand end over the right, and take it under and up through the middle. This is the second half knot, the opposite way round.' },
            { title: 'Pull tight and check', body: 'Pull both standing parts. Each rope should enter and leave on the same side, tail beside standing part.' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Memory aid', text: '**Right over left, left over right, makes a knot both tidy and tight.** If you say it the same way twice (right over left, right over left) you have tied a granny knot.' },
      ],
    },
    {
      id: 'granny',
      title: 'Reef or granny? How to check',
      lead: 'The granny knot looks nearly the same until you look at where the tails go.',
      blocks: [
        {
          t: 'table',
          head: ['Check', 'Reef knot (correct)', 'Granny knot (wrong)'],
          rows: [
            ['Shape', 'Flat and symmetrical, two interlocked loops', 'Lopsided, twisted, bulky'],
            ['Where the ends leave', 'Each rope’s tail and standing part leave on the same side', 'Tail and standing part leave on opposite sides, diagonally'],
            ['Moves used', 'Right over left, then left over right', 'Right over left, then right over left again'],
            ['Under load', 'Holds, unless it capsizes', 'Slips and loosens, jams or comes undone'],
          ],
          caption: 'The granny knot is just two half knots tied the same way. It forms a twist, not a lock.',
        },
        { t: 'callout', tone: 'myth', title: 'Myth: the reef knot is a safe way to join two ropes', text: 'It is not. Used as a bend it can spill when one rope is loaded, and it is far weaker than a proper bend such as a sheet bend or a double fisherman’s. The reef knot is a binding knot: use it to tie round things, not to join ropes that carry a load.' },
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
            { title: 'First aid', body: 'The standard knot for tying slings and bandages, because it lies flat against the body and is easy to undo without pulling on an injury.' },
            { title: 'Bundles and parcels', body: 'Tying a bundle of sticks, a bedroll, a roll of tarp or a parcel. Its flat shape does not dig in.' },
            { title: 'Reefing a sail', body: 'It gets its name from reefing: tying the loose sailcloth of a shortened sail with its ties. Both ends are under only a light load.' },
            { title: 'Shoelaces', body: 'A shoelace bow is a reef knot, with the working ends tied as loops, which is why a shoelace that has been tied wrong, as a granny, slips undone.' },
          ],
        },
      ],
    },
    {
      id: 'untie',
      title: 'Strength and untying',
      blocks: [
        { t: 'p', text: 'A reef knot keeps only about 40–50% of the strength of the rope it is tied in, one of the poorest of the common knots, and it can capsize into a pair of loose half hitches if the load comes on one rope and not the other. For that reason, climbing and rescue manuals say not to use it for anything that carries weight.' },
        { t: 'p', text: 'To untie it, **push the two ends towards each other** to open the loops, then pull one end back through the other. Or, in a bandage, tug the standing parts apart gently and the knot spills.' },
        { t: 'callout', tone: 'warn', title: 'Not for loads', text: 'Do not use a reef knot to join two ropes you will climb, tow or hang from. Use a sheet bend, a double fisherman’s bend or a figure-of-eight bend, and have a qualified instructor check it.' },
      ],
    },
    {
      id: 'practice',
      title: 'Practice and common mistakes',
      blocks: [
        {
          t: 'checklist',
          items: [
            'I can tie it with two different colours, so I can see the pattern.',
            'I can tell a reef from a granny by looking at where the tails leave.',
            'I can tie it around a bundle, a bandage and a parcel.',
            'I can untie it by pushing the loops towards each other.',
            'I know it is not safe for joining two load-bearing ropes.',
          ],
        },
        {
          t: 'dodont',
          do: ['Use two ropes of the same size and material.', 'Dress it flat before you pull it tight.'],
          dont: ['Do not use it to join slippery rope under load.', 'Do not tie it twice the same way; that is a granny.'],
        },
      ],
    },
  ],
  sources: [
    'Ashley, C. W. (1944). The Ashley Book of Knots. Doubleday. (Reef or square knot, #1204.)',
    'St John Ambulance. First aid manual: slings and bandages.',
  ],
  related: ['survival/knots-and-lashing/overhand-knot', 'survival/knots-and-lashing/bowline', 'survival/knots-and-lashing/choosing-a-knot'],
}

export default guide
