import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The figure of eight is a stopper that does the overhand knot’s job better. It is bigger, it does not jam as badly, it loses less of the rope’s strength, and it is easy to check at a glance. The figure-of-eight follow-through, a loop made by retracing the knot, is the standard way climbers tie into a rope. This page teaches the knot; for any use where a person’s weight depends on it, learn from a qualified instructor.',
  nutshell: [
    'A figure of eight is a **stopper** with one more twist than the overhand: the working end goes round the standing part **once more** before it passes through the loop.',
    'It keeps about **75–80% of the rope’s strength**, the best of the common knots, and it **does not jam** as hard as an overhand.',
    'It is easy to **inspect**: a correct knot looks like a neat figure 8, with two parallel ropes on each side.',
    'The **follow-through** version makes a fixed loop that retraces the knot, used for climbing tie-in, and the **bight** version makes a loop in the middle of a rope.',
    'Leave a **tail** of at least 10 cm, longer on slippery rope.',
  ],
  sections: [
    {
      id: 'tie',
      title: 'How to tie it',
      lead: 'Step through the diagram. It begins like an overhand, with one extra turn.',
      blocks: [
        { t: 'knot', id: 'figure8' },
        {
          t: 'steps',
          items: [
            { title: 'Make a loop', body: 'Make a loop with the working end crossing over the standing part, and leave a good length of tail.' },
            { title: 'Round the standing part', body: 'Take the working end round behind the standing part. This extra half turn is what makes it a figure of eight, not an overhand.' },
            { title: 'Down through the loop', body: 'Pass the working end down through the loop, from the front to the back.' },
            { title: 'Dress and pull tight', body: 'Pull the standing part and the tail apart until the knot closes. Check it is a neat figure 8 with no crossed strands.' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Memory aid', text: 'Overhand: round and through. Figure of eight: **round, round, and through**. If the working end only goes through once you have an overhand.' },
      ],
    },
    {
      id: 'versions',
      title: 'The figure of eight family',
      blocks: [
        {
          t: 'table',
          head: ['Version', 'What it makes', 'Used for'],
          rows: [
            ['Figure of eight (stopper)', 'A stopper at the end of a rope', 'Stopping a rope running through a block, ring or belay device'],
            ['Figure of eight on a bight', 'A fixed loop in the middle or end of a rope, tied with a doubled rope', 'Attaching to a point, or a loop to clip into'],
            ['Figure of eight follow-through', 'A fixed loop at the end of a rope, tied round an object by retracing the knot', 'Climbing tie-in to a harness, taught by instructors'],
            ['Figure-of-eight bend', 'A knot joining two ropes, by tying two figure eights through each other', 'Joining two ropes of the same kind'],
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Learn climbing knots from a qualified instructor', text: 'The follow-through is the standard climbing tie-in, but a web diagram cannot check your knot, your harness or your partner. If you are going to climb or abseil, learn properly, and always do a partner check.' },
      ],
    },
    {
      id: 'why',
      title: 'Why it is better than the overhand',
      blocks: [
        {
          t: 'bars',
          title: 'Rough knot efficiency (share of straight-rope strength kept)',
          unit: '%',
          min: 0,
          max: 100,
          decimals: 0,
          items: [
            { label: 'Figure of eight', value: 78, lo: 75, hi: 80 },
            { label: 'Bowline', value: 68, lo: 60, hi: 75 },
            { label: 'Overhand knot', value: 62, lo: 55, hi: 65 },
            { label: 'Reef knot', value: 45, lo: 40, hi: 50 },
          ],
          caption: 'Ranges from commonly quoted rope-testing figures; they depend on the rope and the test.',
        },
        {
          t: 'list',
          items: [
            '**Strong.** The curves are gentler, so fewer fibres take the strain at one point.',
            '**Easier to untie.** After a hard pull it still unties; an overhand may need cutting.',
            '**Easy to check.** A correct figure of eight is symmetrical; a wrong one shows at once.',
            '**Bulky.** The bigger lump makes a better stopper, and a bigger knot is harder to pull through a hole.',
          ],
        },
      ],
    },
    {
      id: 'check',
      title: 'Checking it',
      blocks: [
        {
          t: 'checklist',
          items: [
            'The knot looks like a figure 8, with two **parallel** ropes on each side and no crossed strands.',
            'The tail is at least 10 cm (a hand’s width), more for slippery rope.',
            'The knot is **dressed** (strands straight) and **set** (pulled tight).',
            'For a follow-through, the rope retraces the original knot exactly, with both strands side by side.',
            'The knot has been checked by a second person if it carries weight.',
          ],
        },
        {
          t: 'dodont',
          do: ['Dress the knot so the strands lie side by side.', 'Set it with a firm pull before you load it.'],
          dont: ['Do not leave a short tail; a knot with only a few centimetres of tail can pull through.', 'Do not use a figure of eight as a joining knot between ropes of very different size.'],
        },
      ],
    },
    {
      id: 'practice',
      title: 'Practice',
      blocks: [
        {
          t: 'list',
          items: [
            'Tie the stopper ten times, then ten more without looking.',
            'Tie the stopper in a rope of a different thickness.',
            'Tie a figure of eight on a bight, then clip it round a pole.',
            'Draw the knot from memory, and compare it with the diagram.',
            'Tie the figure of eight then the overhand side by side, and compare their size and shape.',
          ],
        },
      ],
    },
  ],
  sources: [
    'Ashley, C. W. (1944). The Ashley Book of Knots. Doubleday. (Figure-eight knot, #520.)',
    'British Mountaineering Council. Knots and rope technique guidance.',
    'Budworth, G. (1999). The Complete Book of Knots. Lorenz Books.',
  ],
  related: ['survival/knots-and-lashing/overhand-knot', 'survival/knots-and-lashing/bowline', 'survival/knots-and-lashing/choosing-a-knot'],
}

export default guide
