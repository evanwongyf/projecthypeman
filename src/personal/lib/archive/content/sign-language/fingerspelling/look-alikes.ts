import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Most fingerspelling mistakes come from a few groups of letters that differ by one finger or by where the thumb goes. Learn each group side by side, with one question that tells them apart.',
  nutshell: [
    'For the fists (A, S, T, M, N, E), ask: **where is the thumb?**',
    'For two fingers up (U, V, R, H, K), ask: **together, apart, crossed, sideways, or with the thumb between?**',
    'G, H, P and Q are the "pointing" letters: sideways, or turned down.',
    'C and O differ only in whether the fingertips touch the thumb.',
    'D, F and 9 are all circles with fingers up; which finger stands up tells you which.',
  ],
  sections: [
    {
      id: 'fists',
      title: 'The fists: where is the thumb?',
      blocks: [
        {
          t: 'table',
          head: ['Letter', 'Thumb'],
          rows: [
            ['A', 'Straight up, against the side of the index finger'],
            ['S', 'Across the front of the curled fingers'],
            ['T', 'Tucked under the index finger, the tip peeking out'],
            ['N', 'Under the index and middle fingers'],
            ['M', 'Under the index, middle and ring fingers'],
            ['E', 'Folded across the palm, with the fingertips resting on it'],
          ],
        },
        { t: 'handshapes', set: 'alphabet', only: ['A', 'S', 'T'] },
        { t: 'handshapes', set: 'alphabet', only: ['M', 'N', 'E'] },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Count the humps',
          text: 'For M and N, count how many fingers lie over the thumb: three humps is M, two is N. M has three strokes when you write it; N has two.',
        },
      ],
    },
    {
      id: 'two-fingers',
      title: 'Two fingers: how are they held?',
      blocks: [
        {
          t: 'table',
          head: ['Letter', 'Index and middle fingers'],
          rows: [
            ['U', 'Up, together'],
            ['V', 'Up, apart'],
            ['R', 'Up, crossed'],
            ['H', 'Together, pointing sideways'],
            ['K', 'Apart, with the thumb tip between them'],
          ],
        },
        { t: 'handshapes', set: 'alphabet', only: ['U', 'V', 'R'] },
        { t: 'handshapes', set: 'alphabet', only: ['H', 'K'] },
      ],
    },
    {
      id: 'pointing',
      title: 'Sideways and downward: G, H, P, Q',
      blocks: [
        {
          t: 'p',
          text: 'These four come in pairs. **G** (index and thumb) and **H** (two fingers) point sideways. Turn them to point at the floor and you get **Q** (from G) and **P** (from K, which is close to H). Turn from the wrist, keeping the handshape.',
        },
        { t: 'handshapes', set: 'alphabet', only: ['G', 'Q'] },
        { t: 'handshapes', set: 'alphabet', only: ['K', 'P'] },
      ],
    },
    {
      id: 'round',
      title: 'Round: C and O',
      blocks: [{ t: 'handshapes', set: 'alphabet', only: ['C', 'O'] }],
    },
    {
      id: 'circles',
      title: 'Circles with fingers up: D and F',
      blocks: [
        { t: 'p', text: 'In **D**, the index stands up and the *other* fingers make the circle with the thumb. In **F**, the index makes the circle and the *other* fingers stand up. They are opposites.' },
        { t: 'handshapes', set: 'alphabet', only: ['D', 'F'] },
      ],
    },
    {
      id: 'singles',
      title: 'One finger: I, J, X and Y',
      blocks: [
        { t: 'handshapes', set: 'alphabet', only: ['I', 'J'] },
        { t: 'handshapes', set: 'alphabet', only: ['X', 'Y'] },
      ],
    },
  ],
  sources: ['Vicars, W. (n.d.). *Fingerspelling: Tips and tricks*. Lifeprint ASL University. lifeprint.com.'],
  related: ['sign-language/fingerspelling/alphabet', 'sign-language/fingerspelling/reading'],
}

export default guide
