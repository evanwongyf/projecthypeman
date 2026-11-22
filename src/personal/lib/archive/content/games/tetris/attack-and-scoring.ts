import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Every clear in Tetris is worth something, and what it is worth depends on how many lines you clear, how you cleared them, and what you did just before. Marathon-style games turn this into a score. Versus games turn it into garbage lines sent to your opponent. This guide sets out the standard values, explains combos and back-to-back chains, and shows a perfect clear.',
  nutshell: [
    'In guideline scoring, a **single** is worth 100 times your level, a **double** 300, a **triple** 500 and a **Tetris** 800.',
    'A **T-spin** is worth more than the same clear done normally: a T-spin double is 1200 times the level against 300 for a plain double.',
    'A **combo** is clearing lines with consecutive pieces. A **back-to-back** bonus rewards two difficult clears in a row (Tetrises and T-spins) without a simple clear in between.',
    'A **perfect clear** (an empty board after a clear) earns a large bonus in many games.',
    'Versus games convert clears to **garbage lines** sent to your opponent. The exact numbers differ by game, so use the tables here as a guide.',
  ],
  sections: [
    {
      id: 'scoring',
      title: 'Guideline scoring (marathon-style)',
      blocks: [
        {
          t: 'table',
          head: ['Action', 'Points (× level)'],
          rows: [
            ['Single', '100'],
            ['Double', '300'],
            ['Triple', '500'],
            ['Tetris (four lines)', '800'],
            ['T-spin mini, no lines', '100'],
            ['T-spin mini single', '200'],
            ['T-spin, no lines', '400'],
            ['T-spin single', '800'],
            ['T-spin double', '1200'],
            ['T-spin triple', '1600'],
            ['Soft drop', '1 per square'],
            ['Hard drop', '2 per square'],
          ],
          caption: 'Standard guideline values. Many games add bonuses for combos, back-to-back and perfect clears, and some games change the numbers.',
        },
        { t: 'p', text: 'A back-to-back bonus multiplies the score of a Tetris or T-spin clear by one and a half when the previous difficult clear was also a Tetris or T-spin. A combo adds 50 times the combo count times the level.' },
        {
          t: 'bars',
          items: [
            { label: 'Single', value: 100 },
            { label: 'Double', value: 300 },
            { label: 'Triple', value: 500 },
            { label: 'Tetris', value: 800 },
            { label: 'T-spin double', value: 1200 },
            { label: 'T-spin triple', value: 1600 },
          ],
          unit: 'points per level',
          caption: 'Value of a single clear at level one. The bars show why players aim for Tetrises and spins.',
        },
      ],
    },
    {
      id: 'combo',
      title: 'Combos',
      blocks: [
        { t: 'p', text: 'A **combo** is a chain of pieces that each clear at least one line. The counter goes up with each consecutive clear and resets the moment a piece locks without clearing. Combos matter most in versus play, where a long combo can send many garbage lines even from single clears.' },
        { t: 'tetris', id: 'combo' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'The idea', body: 'Keep clearing. Build a stack with a narrow gap and keep placing pieces that complete rows in it.' },
            { title: 'The risk', body: 'A combo only works while you have a piece to clear with. If you run out of good pieces, the combo ends, and the stack may be messy.' },
          ],
        },
      ],
    },
    {
      id: 'b2b',
      title: 'Back-to-back',
      blocks: [
        { t: 'p', text: 'A **back-to-back** (B2B) chain rewards two difficult clears in a row. Difficult clears are usually Tetrises and T-spins that clear lines. A single, double or triple without a spin breaks the chain, though placing a piece that clears nothing does not.' },
        {
          t: 'table',
          head: ['Sequence', 'Back-to-back?'],
          rows: [
            ['Tetris, then a Tetris', 'Yes, the second gets the bonus'],
            ['Tetris, then a T-spin double', 'Yes, both are difficult clears'],
            ['Tetris, then a plain double', 'No, the chain ends'],
            ['Tetris, a piece with no clear, then a Tetris', 'Yes, a piece with no clear does not break it'],
          ],
          caption: 'In the guideline, a lock that clears no lines does not break the chain. Check your own game’s rules.',
        },
      ],
    },
    {
      id: 'pc',
      title: 'Perfect clears',
      blocks: [
        { t: 'p', text: 'A **perfect clear** (also called an all clear) is a clear that leaves the board completely empty. It is hard to arrange by chance, and many games reward it heavily. Strong players learn set sequences of pieces that produce one. The toy example below uses two O pieces so you can see the idea.' },
        { t: 'tetris', id: 'perfect-clear' },
      ],
    },
    {
      id: 'attack',
      title: 'From clears to attack (versus play)',
      blocks: [
        { t: 'p', text: 'In a versus game, clearing lines sends garbage rows to your opponent, who must clear them or be buried. The amounts depend on the game, but a common pattern in guideline-style versus modes is roughly as below. Treat the numbers as a guide, not a rule.' },
        {
          t: 'table',
          head: ['Clear', 'Typical garbage sent'],
          rows: [
            ['Single', '0'],
            ['Double', '1'],
            ['Triple', '2'],
            ['Tetris', '4'],
            ['T-spin single', '2'],
            ['T-spin double', '4'],
            ['T-spin triple', '6'],
            ['Back-to-back bonus', '+1 on top, for qualifying clears'],
            ['Combo', 'Extra lines that grow with the combo'],
            ['Perfect clear', 'A large fixed bonus'],
          ],
          caption: 'Typical values only. Always check the game you play; some modes differ.',
        },
        { t: 'callout', tone: 'tip', title: 'Why spins and Tetrises dominate', text: 'A Tetris sends four lines for four rows of work, while a double sends one. A T-spin double sends four for just two rows. That efficiency is why high-level games revolve around Tetrises, T-spins and combos.' },
        { t: 'links', items: [{ path: 'games/tetris/speed-and-finesse', note: 'Speed you need to build attack' }, { path: 'games/tetris/openers-and-strategy', note: 'Strategy: when to attack, when to defend' }] },
      ],
    },
  ],
  sources: [
    'Tetris Wiki. “Scoring” and “Back-to-Back” entries (guideline values).',
    'Tetris Wiki. “Combo” and “Perfect Clear”.',
    'Game documentation for guideline-style versus modes (attack tables differ between games).',
  ],
  related: ['games/tetris/t-spins', 'games/tetris/stacking', 'games/tetris/speed-and-finesse'],
}

export default guide
