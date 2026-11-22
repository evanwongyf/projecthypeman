import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Mnemonics are memory tricks that attach hard-to-remember information to something easier to remember: a word, a rhyme, a vivid image or a familiar place. They are excellent for lists, orders and vocabulary, and no substitute for understanding.',
  nutshell: [
    'Best for arbitrary information: lists, sequences, foreign words, names.',
    'The main types: **acronyms and acrostics, rhymes, the keyword method, the memory palace and peg systems**.',
    'Vivid, unusual, personal images work best.',
    'Use them to hold facts in place, then build understanding around the facts.',
  ],
  sections: [
    {
      id: 'types',
      title: 'Types of mnemonic',
      lead: 'From quick tricks to elaborate systems.',
      blocks: [
        {
          t: 'cards',
          items: [
            { tag: 'first letters', title: 'Acronyms', body: 'A word made from first letters. **ROY G BIV** for the colours of the rainbow. **HOMES** for the Great Lakes (Huron, Ontario, Michigan, Erie, Superior).' },
            { tag: 'first letters', title: 'Acrostics', body: 'A sentence whose words start with the letters you need. "**M**y **V**ery **E**ager **M**other **J**ust **S**erved **U**s **N**achos" for the planets in order.' },
            { tag: 'sound', title: 'Rhymes and songs', body: '"In fourteen hundred ninety-two, Columbus sailed the ocean blue." "Thirty days hath September…" Rhythm and rhyme constrain what can fit, which aids recall.' },
            { tag: 'images', title: 'Keyword method', body: 'For vocabulary: find an English word that sounds like the foreign word, and imagine an image linking it to the meaning. Spanish *pato* (duck) sounds like "pot": picture a duck wearing a pot on its head.' },
            { tag: 'places', title: 'Memory palace', body: 'Also called the **method of loci**. Picture a familiar route, like your home, and place each item at a location along it. To recall, walk the route in your mind.' },
            { tag: 'numbers', title: 'Peg system', body: 'Memorise rhyming pegs: one-bun, two-shoe, three-tree… Then link each item to its peg with an image. Item 2 is milk? Picture a shoe full of milk.' },
          ],
        },
      ],
    },
    {
      id: 'palace',
      title: 'Building a memory palace',
      lead: 'The technique memory champions use.',
      blocks: [
        {
          t: 'p',
          text: 'The method of loci is traditionally traced to the ancient Greek poet Simonides. It is still used by nearly all competitive memory athletes, and a study found that ordinary people trained in it for six weeks more than doubled their word-list recall (Dresler et al., 2017).',
        },
        {
          t: 'steps',
          items: [
            { title: 'Choose a place you know well', body: 'Your home, your route to school, a building you walk through daily.' },
            { title: 'Pick a fixed route with stops', body: 'Front door, hallway mirror, kitchen table, fridge, sofa… Always walk it in the same order.' },
            { title: 'Place a vivid image at each stop', body: 'To remember the first five elements: a giant **hydrogen** balloon tied to the front door, a squeaky-voiced **helium** clown in the mirror, a **lithium** battery sizzling on the table…' },
            { title: 'Make images strange', body: 'Exaggerated, funny, moving, even absurd images are more memorable than ordinary ones.' },
            { title: 'Walk it to recall', body: 'Mentally walk the route and "see" each image. Practise a few times, spaced out.' },
          ],
        },
      ],
    },
    {
      id: 'limits',
      title: 'Limits',
      lead: 'Know when to use them.',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Use for information with no natural logic: orders, lists, labels, vocabulary.',
            'Make your own mnemonics when you can; creating them adds processing.',
            'Pair with [retrieval practice](@teaching/techniques/learning-strategies/retrieval-practice) so the mnemonic itself is remembered.',
          ],
          dont: [
            'Use them instead of understanding. Knowing "ROY G BIV" is not knowing why light splits.',
            'Build elaborate systems for information that makes sense on its own; understanding it is faster.',
            'Assume they last forever without review. Dunlosky et al. (2013) found the keyword method helps short-term but can fade faster than expected.',
          ],
        },
      ],
    },
  ],
  sources: [
    'Atkinson, R. C., & Raugh, M. R. (1975). An application of the mnemonic keyword method to the acquisition of a Russian vocabulary. *Journal of Experimental Psychology: Human Learning and Memory, 1*(2), 126–133.',
    'Dresler, M., et al. (2017). Mnemonic training reshapes brain networks to support superior memory. *Neuron, 93*(5), 1227–1235.',
    'Yates, F. A. (1966). *The art of memory*. Routledge & Kegan Paul.',
    'Foer, J. (2011). *Moonwalking with Einstein*. Penguin.',
  ],
  related: ['teaching/techniques/learning-strategies/retrieval-practice', 'teaching/techniques/learning-strategies/dual-coding', 'teaching/techniques/learning-strategies/elaboration'],
}

export default guide
