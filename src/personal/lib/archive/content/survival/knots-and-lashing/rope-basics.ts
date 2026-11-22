import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Before you tie anything, you need the words. Every knot description, from a scout handbook to a rescue manual, is written in the same small vocabulary, and a rope behaves differently depending on how it was made. This page covers the parts of a rope, the four families of knot, how rope is built, how much a knot weakens it, and how to look after it.',
  nutshell: [
    'A rope has three parts you name constantly: the **working end** (the end you tie with), the **standing part** (the long, loaded part) and the **bight** (a U-shaped bend anywhere along it).',
    'Knots come in families by job: **stoppers**, **hitches** (rope to object), **bends** (rope to rope), **loops** and **binding** knots, plus **lashings** that bind poles.',
    'Every knot **reduces a rope’s breaking strength**, often to between half and three quarters of the straight rope. The bends in a knot, not the rope, are the weak point.',
    'Kernmantle rope has a load-bearing core and a protective sheath; three-strand laid rope is twisted. Natural fibre grips better, synthetic is stronger and slippery.',
    'Keep rope clean, dry, out of the sun, away from sharp edges and chemicals, and never use rope you do not trust.',
  ],
  sections: [
    {
      id: 'terms',
      title: 'The words every knot uses',
      lead: 'Learn these seven terms and a written knot description becomes readable.',
      blocks: [
        {
          t: 'terms',
          items: [
            { term: 'Working end', def: 'The end of the rope you are using to tie the knot. It does the moving. Shown in blue in the diagrams on this shelf.' },
            { term: 'Standing part', def: 'The long part of the rope that is not being moved, usually the part that will carry the load. Shown in orange.' },
            { term: 'Tail', def: 'The short length of working end left sticking out after the knot is tied. A tail that is too short can pull through.' },
            { term: 'Bight', def: 'A U-shaped bend in the rope, made without crossing the rope over itself. You can make a bight anywhere along a rope, not only at the end.' },
            { term: 'Loop', def: 'A bend where the rope crosses itself, making a ring. An overhand loop is where the working end crosses the standing part.' },
            { term: 'Turn and round turn', def: 'A turn takes the rope once around an object. A round turn takes it around fully, so the rope crosses itself on the far side.' },
            { term: 'Elbow', def: 'Two crossings of the rope, a sort of double loop. A figure of eight has an elbow in it.' },
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Three words for the finish',
          text: '**Dress** a knot by straightening its strands so none are crossed or twisted. **Set** it by pulling it snug. **Check** it by pulling firmly on each part. Most knot failures are knots that were not dressed or not set.',
        },
      ],
    },
    {
      id: 'families',
      title: 'The families of knot',
      lead: 'A knot is easier to remember when you know what job it belongs to.',
      blocks: [
        {
          t: 'table',
          head: ['Family', 'Job', 'Example on this shelf'],
          rows: [
            ['Stopper', 'Keeps a rope end from slipping through a hole, block or another knot', 'Overhand knot, figure of eight'],
            ['Hitch', 'Ties a rope to an object (a post, ring or pole), usually relying on the object to hold the knot', 'Clove hitch'],
            ['Bend', 'Joins two rope ends', 'Reef knot (a binding knot, not a safe bend)'],
            ['Loop', 'Makes a loop in a rope that does not slip', 'Bowline, figure-of-eight loop'],
            ['Binding knot', 'Squeezes a bundle, parcel or bandage', 'Reef knot'],
            ['Lashing', 'Binds two or more poles together with a series of turns', 'Square, diagonal and shear lashing'],
          ],
          caption: 'The same knot can do more than one job. The clove hitch is a hitch, but its turns also start and finish every lashing.',
        },
      ],
    },
    {
      id: 'rope',
      title: 'How rope is made',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Twisted', title: 'Laid rope', body: 'Three strands twisted together, the classic rope. Easy to splice and inspect, and a hard-wearing natural-feeling grip. The twist can untwist under load, and cut strands show.' },
            { tag: 'Braided', title: 'Braided rope', body: 'Strands braided into a round cord. Smooth, flexible and less likely to twist or kink, but harder to inspect inside.' },
            { tag: 'Core and sheath', title: 'Kernmantle', body: 'A strong core (the kern) inside a woven sheath (the mantle). Used for climbing and rescue. The sheath protects the core, and the core carries the load.' },
            { tag: 'Natural', title: 'Hemp, sisal, jute, cotton', body: 'Grips well and holds a knot, which is why traditional lashing uses it. Weaker, rots if left wet, and cannot be trusted for loads that matter.' },
            { tag: 'Synthetic', title: 'Nylon, polyester, polypropylene', body: 'Strong, rot-proof and light, but slippery. Nylon stretches, polyester stretches less, polypropylene floats but weakens in sun. Knots in slick synthetic rope may need an extra tuck.' },
          ],
        },
      ],
    },
    {
      id: 'strength',
      title: 'What a knot does to a rope',
      lead: 'A rope is strongest when it is straight. Bending it around the tight curve of a knot loads the outside fibres more than the inside, and that is where it breaks.',
      blocks: [
        { t: 'p', text: 'Knot efficiency is the strength of a knotted rope as a fraction of the straight rope. Published figures differ with the rope and the test method, so the numbers below are rough ranges, useful for ranking knots and not for engineering.' },
        {
          t: 'bars',
          title: 'Rough knot efficiency (share of straight-rope strength kept)',
          unit: '%',
          min: 0,
          max: 100,
          decimals: 0,
          items: [
            { label: 'Straight rope', value: 100 },
            { label: 'Figure of eight', value: 78, lo: 75, hi: 80 },
            { label: 'Bowline', value: 68, lo: 60, hi: 75 },
            { label: 'Clove hitch', value: 68, lo: 60, hi: 75 },
            { label: 'Overhand knot', value: 62, lo: 55, hi: 65 },
            { label: 'Reef knot', value: 45, lo: 40, hi: 50 },
          ],
          caption: 'Ranges from commonly quoted rope-testing figures; they vary with rope type and test. The pattern is stable: the figure of eight keeps the most, the reef knot the least.',
        },
        { t: 'callout', tone: 'warn', title: 'Why this matters', text: 'If a rope is rated for 1,000 kg straight and you tie a knot that keeps 60%, its working strength is about 600 kg before you apply any safety margin. Safe working loads are a small fraction of breaking strength for exactly this reason.' },
      ],
    },
    {
      id: 'care',
      title: 'Looking after rope',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Coil it loosely and store it dry, out of direct sunlight, away from fuel and chemicals.',
            'Wash dirty rope in clean water and dry it in the shade.',
            'Inspect it by running it through your hands. Look and feel for stiffness, soft spots, cuts, glazing or fuzzing.',
            'Keep a separate rope for things that carry people, and retire it when in doubt.',
          ],
          dont: [
            'Do not step on rope, or drag it over sharp rock or concrete.',
            'Do not use a rope you have seen shock-loaded or cut, for anything that matters.',
            'Do not leave rope wet in a bag for days. It rots, especially natural fibre.',
            'Do not tie critical knots in rope that is old, glazed or of unknown history.',
          ],
        },
        { t: 'callout', tone: 'note', title: 'Whipping the ends', text: 'Cut synthetic rope ends are melted (carefully, away from skin) or whipped with thin cord so they do not fray. A frayed end makes knots harder to tie and weakens the rope.' },
      ],
    },
  ],
  sources: [
    'Ashley, C. W. (1944). The Ashley Book of Knots. Doubleday.',
    'Budworth, G. (1999). The Complete Book of Knots. Lorenz Books.',
    'Bluewater/Samson and other rope-maker technical guides on knot efficiency (figures vary by rope type and test).',
  ],
  related: ['survival/knots-and-lashing/overhand-knot', 'survival/knots-and-lashing/clove-hitch', 'survival/knots-and-lashing/choosing-a-knot'],
}

export default guide
