import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Almost everything that goes wrong in Tetris starts with a hole: an empty square that a block now covers. Good stacking is mostly about not making holes, keeping the surface flat enough for any piece, and preparing a place for the I piece. This guide shows what a hole is, how one forms, and how to build and cash in a well.',
  nutshell: [
    'A **hole** is an empty square with a block somewhere above it. You cannot fill it until the rows above are cleared.',
    'Keep the **surface flat**: neighbouring columns should differ by no more than one or two squares.',
    'Keep the stack **low** so a bad run of pieces cannot reach the top. Aim to stay in the bottom half of the board while you learn.',
    'Keep **one column open** (usually at an edge) as a *well* for the I piece, and you can score four-line Tetrises.',
    'Think before each drop: *which way is flattest, and what does my next piece need?*',
  ],
  sections: [
    {
      id: 'holes',
      title: 'What a hole is, and how one forms',
      blocks: [
        { t: 'p', text: 'Step through these two boards. They begin with the same stack and the same piece. The only difference is how the T is turned.' },
        { t: 'tetris', id: 'holes' },
        { t: 'tetris', id: 'holes-bad' },
        {
          t: 'callout',
          tone: 'fact',
          title: 'The cost of a hole',
          text: 'Every row with a hole in it cannot be cleared until the squares above the hole are cleared. A single hole can lock a whole row for several pieces. Two or three holes in different rows can bury a stack.',
        },
      ],
    },
    {
      id: 'surface',
      title: 'Reading the surface',
      blocks: [
        {
          t: 'table',
          head: ['Surface feature', 'What it looks like', 'What fits it'],
          rows: [
            ['Flat', 'Several neighbouring columns the same height', 'O (two wide), I (flat), L and J (flat), T (flat)'],
            ['One-step', 'A step of one square between neighbours', 'S or Z (laid flat), L or J (against the step), T (flat with a nub)'],
            ['Valley, one wide', 'A narrow gap one square wide', 'An upright I, or a J/L standing on end only if it will not make a hole'],
            ['Valley, two wide', 'A gap two squares wide', 'O, or a pair of upright pieces'],
            ['Valley, three wide', 'A gap three wide and one deep', 'A flat-based T, J or L; not an S or Z'],
            ['Tower', 'A column much taller than neighbours', 'Nothing good: avoid creating one'],
          ],
          caption: 'A general guide. Nearby heights and the next piece decide the best choice.',
        },
        {
          t: 'dodont',
          do: [
            'Place a piece so that no square underneath it is empty.',
            'Keep the highest and lowest columns within a few squares.',
            'Look one or two pieces ahead and keep an option for each shape.',
            'Fill from the walls inwards when the middle is uncertain.',
          ],
          dont: [
            'Stand a piece on end in a gap unless you are sure it fits.',
            'Leave a one-wide column more than two deep in the middle of the board.',
            'Chase a line clear that creates a hole.',
            'Build a tall tower on one side.',
          ],
        },
      ],
    },
    {
      id: 'wells',
      title: 'Wells and Tetrises',
      blocks: [
        { t: 'p', text: 'A **well** is a column deliberately left open while the rest of the rows are filled. When an I piece arrives, dropped upright, it clears several rows at once. Four rows at once is a **Tetris**, the biggest standard clear. Most players keep the well at one edge, because a wall is a natural side, which keeps the rest of the stack easier to build.' },
        { t: 'tetris', id: 'well' },
        {
          t: 'steps',
          items: [
            { title: 'Choose the well', body: 'Pick one column, usually at an edge, and decide not to fill it.' },
            { title: 'Stack the rest flat', body: 'Fill the other nine columns row by row, avoiding holes. Use S, Z, T, J, L and O to keep it level.' },
            { title: 'Save the I', body: 'Use hold to keep an I piece for the well if one arrives early. Place any other I flat on the stack only if it fits.' },
            { title: 'Drop the I', body: 'When four rows are ready, drop an upright I down the well for the Tetris.' },
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Do not wait too long',
          text: 'A well makes the stack higher. If a long run of pieces without an I arrives, the stack can get dangerously tall. Know when to give up the Tetris, fill the well with something else and take a smaller clear.',
        },
      ],
    },
    {
      id: 'speed-and-height',
      title: 'Height and safety',
      blocks: [
        {
          t: 'levels',
          items: [
            { name: 'Safe', body: 'Stack below about the middle of the board. Any piece fits anywhere and there are no emergencies.', verbs: ['plan', 'build'] },
            { name: 'Alert', body: 'Stack at about the middle. Think about clearing. Avoid risky builds such as tall wells.', verbs: ['clear', 'simplify'] },
            { name: 'Danger', body: 'Stack in the top third. Take any safe clear, even a single. Do not worry about score or setups.', verbs: ['survive'] },
          ],
          caption: 'A rule of thumb: the higher the stack, the simpler your goal.',
        },
        { t: 'links', items: [{ path: 'games/tetris/t-spins', note: 'Next: T-spins, a way of clearing lines that makes use of overhangs' }, { path: 'games/tetris/attack-and-scoring', note: 'Combos and back-to-back' }] },
      ],
    },
  ],
  sources: [
    'Tetris Wiki. “Stacking”, “Well” and “Hole” entries.',
    'Hard Drop community wiki. “Beginner’s guide to Tetris”.',
  ],
  related: ['games/tetris/basics', 'games/tetris/t-spins', 'games/tetris/attack-and-scoring'],
}

export default guide
