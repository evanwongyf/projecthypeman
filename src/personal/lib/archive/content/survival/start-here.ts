import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'Survival skills are the small, practical abilities that decide whether a bad situation stays an inconvenience: staying dry, making a shelter, signalling for help, and using a rope properly. This shelf begins with knots and lashing, because almost every other outdoor skill, from pitching a tarp to building a stretcher, depends on them.',
  nutshell: [
    'Learn knots **by their job**, not by name: stop a rope end, tie to a post, join two ropes, make a loop, bind poles together.',
    'A knot you can tie in the dark, with cold hands, is worth ten you only know from a diagram.',
    'Every knot **weakens** the rope it is tied in, and each one has a way it fails. Knowing the failure is as important as knowing the tie.',
    'These pages teach the craft. Anything that carries a person (climbing, rescue, work at height) needs proper training and certified equipment, not a web page.',
    'Practise with a thick, soft rope about as long as your arm span, until the knots come without thinking.',
  ],
  sections: [
    {
      id: 'route',
      title: 'A route through the shelf',
      blocks: [
        { t: 'p', text: 'Start with the vocabulary, because every knot description uses it. Then learn the five core knots in the order below: each one builds on the last, and together they cover most jobs a camper or scout will meet.' },
        {
          t: 'steps',
          items: [
            { title: 'Rope, terms and safety', body: 'The words (working end, standing part, bight, turn) and the rules that keep you and your rope safe.' },
            { title: 'Overhand knot', body: 'The simplest knot: a stopper, and the root of the reef knot and many more.' },
            { title: 'Clove hitch', body: 'Tie a rope to a pole or post in seconds, and start a lashing.' },
            { title: 'Reef knot', body: 'Bind a bundle or a bandage, and learn why it must not join two load-bearing ropes.' },
            { title: 'Bowline', body: 'A loop that does not slip and unties after a load.' },
            { title: 'Figure of eight', body: 'The cleanest stopper and the basis of the climbing tie-in.' },
            { title: 'The three lashings', body: 'Square, diagonal and shear lashing: bind poles into frames, braces and A-frames.' },
          ],
        },
        {
          t: 'links',
          items: [
            { path: 'survival/knots-and-lashing/rope-basics', note: 'Start here: words, rope types, safety' },
            { path: 'survival/knots-and-lashing/overhand-knot', note: 'Your first knot' },
            { path: 'survival/knots-and-lashing/clove-hitch', note: 'Tie to a pole' },
            { path: 'survival/knots-and-lashing/bowline', note: 'The rescue loop' },
            { path: 'survival/knots-and-lashing/choosing-a-knot', note: 'Which knot for which job, and how to practise' },
          ],
        },
      ],
    },
    {
      id: 'rules',
      title: 'Four rules before you start',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Life safety is different', body: 'Climbing, abseiling, rescue, tree work and anything over a drop needs a qualified instructor, a certified rope and a partner who checks your knot. A knot learned from a page is for camping and play.' },
            { title: 'Check before you trust', body: 'Look at every knot after you tie it. Is it dressed (neat, no crossed strands)? Is it set (pulled tight)? Is there a tail long enough? Test it with a firm pull before it matters.' },
            { title: 'Know how it fails', body: 'Each knot has a weakness: the clove hitch can roll off a smooth pole, the reef knot can capsize, the bowline can shake loose when slack. Learn the failure and the fix together.' },
            { title: 'Practise slowly, then blind', body: 'First tie each knot slowly while looking. Then tie it behind your back, with your eyes closed, and with gloves on. That is the version that works at night in the rain.' },
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Not a substitute for training', text: 'This is a teaching shelf. It explains how knots work and shows how to tie them, but it cannot check your knot for you. For any use where a failure could hurt someone, learn from a qualified instructor, for example through a Scouts group, a school outdoor-education programme or a recognised outdoor-training provider.' },
      ],
    },
  ],
  sources: [
    'Ashley, C. W. (1944). The Ashley Book of Knots. Doubleday.',
    'Budworth, G. (1999). The Complete Book of Knots. Lorenz Books.',
    'The Scout Association. Pioneering and knotting resources for scouting.',
  ],
  related: ['survival/knots-and-lashing/rope-basics', 'survival/knots-and-lashing/overhand-knot', 'survival/knots-and-lashing/choosing-a-knot'],
}

export default guide
