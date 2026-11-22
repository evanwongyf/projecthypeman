import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Fingerspelling uses one handshape for each letter of the alphabet. It is how signers spell names, places, brands and words that have no sign. Pick any letter below to see it large, animated, with how to make it and what to watch for.',
  nutshell: [
    'Hold your dominant hand up beside your shoulder, palm facing forward, elbow relaxed and down.',
    'Most letters are still shapes; **J** and **Z** move, drawing the letter in the air.',
    'Several letters are almost the same as number signs: V is 2, W is 6, F is 9.',
    'Start by spelling your own name, slowly and smoothly, until you can do it without thinking.',
    'Fingerspelling is a tool for gaps, not a substitute for signs. Learn the signs for common words.',
  ],
  sections: [
    {
      id: 'settings',
      title: 'Your settings',
      blocks: [{ t: 'sign-tool', tool: 'settings' }],
    },
    {
      id: 'letters',
      title: 'A to Z',
      lead: 'Tap a letter. Then tap the big picture to play it (J and Z move).',
      blocks: [{ t: 'handshapes', set: 'alphabet' }],
    },
    {
      id: 'groups',
      title: 'Learn them in families',
      lead: 'Grouping letters by shape is quicker than learning 26 separate things.',
      blocks: [
        {
          t: 'table',
          head: ['Family', 'Letters', 'What they share'],
          rows: [
            ['Fists', 'A, S, T, M, N, E', 'All closed hands; the thumb’s position tells them apart.'],
            ['Flat and curved', 'B, C, O', 'All four fingers together: straight, curved, or closed into a circle.'],
            ['Fingers up', 'D, I, L, U, V, W, Y, K, R, F', 'One or more fingers stand up from a fist.'],
            ['Sideways', 'G, H', 'The fingers point to the side.'],
            ['Downward', 'P, Q', 'G and K turned to point down.'],
            ['Hooked', 'X', 'One bent finger.'],
            ['Moving', 'J, Z', 'The letter is drawn in the air.'],
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Learn the tricky ones side by side',
          text: 'The letters people mix up most are in [letters that look alike](@sign-language/fingerspelling/look-alikes), each shown next to its look-alikes.',
        },
      ],
    },
    {
      id: 'position',
      title: 'Where to hold your hand',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Beside the shoulder', body: 'Your hand sits just in front of the shoulder of your dominant side, about at chin height, not in front of your face.' },
            { title: 'Palm forward', body: 'The palm faces the person watching, apart from the letters that turn (C and O turn a little sideways; G, H, P and Q point to the side or down).' },
            { title: 'Elbow down and relaxed', body: 'Let your elbow rest near your side. A raised elbow tires quickly and looks stiff.' },
            { title: 'Keep the hand still', body: 'Only the fingers change between letters. The hand should not bounce, wave or drift.' },
          ],
        },
      ],
    },
    {
      id: 'chart',
      title: 'Printable chart',
      blocks: [
        { t: 'sign-tool', tool: 'chart' },
        { t: 'p', text: 'Stick it beside your desk and spell the words you see around you: on packets, signs and screens. Little and often beats one long session; see [spaced practice](@teaching/techniques/learning-strategies/spaced-practice).' },
      ],
    },
    {
      id: 'practice',
      title: 'First practice',
      blocks: [
        {
          t: 'checklist',
          items: [
            'Go through A to Z slowly, saying each letter as you make it.',
            'Do it again without looking at the pictures, then check the ones you were unsure of.',
            'Spell your first name ten times, slowly and evenly.',
            'Spell your family name and your town.',
            'Spell five short words: cat, dog, sun, book, fish.',
            'Try the [fingerspeller](@sign-language/fingerspelling/spelling-words) with your name and compare.',
          ],
        },
      ],
    },
  ],
  sources: [
    'Padden, C., & Gunsauls, D. C. (2003). How the alphabet came to be used in a sign language. *Sign Language Studies*, 4(1), 10–33.',
    'Vicars, W. (n.d.). *Fingerspelling*. Lifeprint ASL University. lifeprint.com.',
  ],
  related: ['sign-language/fingerspelling/look-alikes', 'sign-language/fingerspelling/spelling-words', 'sign-language/numbers'],
}

export default guide
