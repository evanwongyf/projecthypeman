import type { Guide } from '../../../guide'


const guide: Guide = {
  intro:
    'Colours are a gentle place to practise handshapes, because several of them are simply the first letter of the colour, shaken by twisting the wrist.',
  nutshell: [
    'Shaken letters: **B**lue, **G**reen, **Y**ellow, **P**urple.',
    'At the lips: *red* (index finger) and *pink* (P hand).',
    '*Black* draws a line across the forehead; *white* pulls away from the shirt.',
    '*Orange* squeezes an orange at the chin, and means the fruit too.',
  ],
  sections: [
    {
      id: 'letters',
      title: 'First-letter colours',
      blocks: [
        { t: 'sign-tool', tool: 'settings' },
        { t: 'signs', words: ['blue', 'green', 'yellow', 'purple'] },
      ],
    },
    {
      id: 'others',
      title: 'The others',
      blocks: [
        { t: 'signs', words: ['red', 'pink', 'orange', 'black', 'white', 'brown'] },
        {
          t: 'callout',
          tone: 'note',
          title: 'Colour signs vary',
          text: 'Colours are one of the areas where signs differ most between countries and regions. If you are not in the USA, check these with local signers.',
        },
      ],
    },
    {
      id: 'practice',
      title: 'Practise',
      blocks: [
        { t: 'checklist', items: ['Look around the room and sign the colour of five things.', 'Describe your clothes: SHIRT BLUE, SHOES BLACK.'] },
      ],
    },
  ],
  sources: ['Vicars, W. (n.d.). *Colors*. Lifeprint ASL University. lifeprint.com.'],
  related: ['sign-language/fingerspelling/alphabet', 'sign-language/everyday/practice'],
}

export default guide
