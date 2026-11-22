import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'The memory palace, or method of loci, stores information as vivid images placed along a route through a place you know well. It is the technique used by almost every memory champion, and with a little practice anyone can use it to remember ordered lists, speech outlines and key facts.',
  nutshell: [
    'Your spatial memory for familiar places is excellent. The palace borrows it.',
    'Choose a place, fix a route with distinct stops, and place one vivid image at each stop.',
    'To recall, walk the route in your mind and "look" at each stop.',
    'Best for ordered, arbitrary information. Not a substitute for understanding.',
  ],
  sections: [
    {
      id: 'build',
      title: 'Building a palace',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Choose a place', body: 'Somewhere you know extremely well: your home, school, a friend’s house, a walk you do every day.' },
            { title: 'Plan a route', body: 'Walk it in your mind in the same direction every time: front door, hallway, stairs, bathroom…' },
            { title: 'Pick distinct stops (loci)', body: 'Specific, different-looking spots: the doormat, the coat hook, the mirror, the bathtub. Ten to twenty per palace is a good start.' },
            { title: 'Rehearse the route', body: 'Walk through it in your mind a few times until the stops come automatically.' },
          ],
        },
      ],
    },
    {
      id: 'fill',
      title: 'Filling it',
      blocks: [
        {
          t: 'p',
          text: 'Turn each item into a concrete image and place it at the next stop. The image should **interact** with the location and be as strange, funny, exaggerated or vivid as possible. Ordinary images are forgotten; bizarre ones stick.',
        },
        {
          t: 'example',
          title: 'Remembering the first five US presidents',
          lines: [
            { label: 'Doormat', text: 'George **Washington** is **washing** a ton of laundry on the doormat, suds everywhere.' },
            { label: 'Coat hook', text: 'An **Adam**’s apple the size of a football hangs on the coat hook (John **Adams**).' },
            { label: 'Mirror', text: 'The mirror is covered in **Jeff**-erson’s signature, a quill still writing by itself (Thomas **Jefferson**).' },
            { label: 'Stairs', text: 'A **mad** **son** stomps angrily down the stairs (James **Madison**).' },
            { label: 'Bathtub', text: 'A **Monroe** lookalike is singing in a bathtub full of money (James **Monroe**).' },
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          text: 'Abstract words need a "sound-alike" or symbol. "Democracy" might become a ballot box; "Jefferson" becomes something with "Jeff". The [keyword method](@teaching/techniques/learning-strategies/mnemonics) uses the same trick.',
        },
      ],
    },
    {
      id: 'uses',
      title: 'Uses for students',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Essay plans', body: 'Store the main points and key quotes of a planned essay along a route, in order.' },
            { title: 'Speeches and presentations', body: 'One stop per point. Walk the palace as you speak instead of reading notes.' },
            { title: 'Sequences', body: 'Stages of a process, events in order, the periodic table.' },
            { title: 'Key quotes', body: 'An image for each quote’s key words at a different stop.' },
          ],
        },
        {
          t: 'list',
          items: [
            'Build several palaces, one per subject or topic, to avoid mixing things up.',
            'Review palaces with spaced recall, like flashcards.',
            'You can reuse a palace once old images have faded, but keep important ones in dedicated palaces.',
          ],
        },
      ],
    },
    {
      id: 'evidence',
      title: 'Evidence',
      blocks: [
        {
          t: 'p',
          text: 'In a study by Dresler and colleagues (2017), people with no memory training practised the method of loci for 30 minutes a day over six weeks. Their recall of word lists more than doubled, and the improvement was still there months later. Their brain connectivity patterns also shifted toward those of memory champions.',
        },
      ],
    },
  ],
  sources: [
    'Dresler, M., et al. (2017). Mnemonic training reshapes brain networks to support superior memory. *Neuron, 93*(5), 1227–1235.',
    'Foer, J. (2011). *Moonwalking with Einstein: The art and science of remembering everything*. Penguin.',
    'Yates, F. A. (1966). *The art of memory*. Routledge & Kegan Paul.',
  ],
  related: ['teaching/techniques/learning-strategies/mnemonics', 'memory/memorising-text', 'memory/vocabulary'],
}

export default guide
