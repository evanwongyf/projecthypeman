import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Tetris looks simple: seven shapes fall, you slide and turn them, and complete rows vanish. Underneath, it is a precise system with a fixed set of pieces, a standard rotation scheme and a randomiser that limits bad luck. Learn these basics first and every later idea, from clean stacking to T-spins, will make sense.',
  nutshell: [
    'There are **seven pieces**, each made of four squares (a *tetromino*): I, O, T, S, Z, J and L.',
    'The board is **10 squares wide**. Filling a whole row clears it. Clearing **four rows at once** (a Tetris) is the biggest standard clear.',
    'Modern versions share a rulebook called the **Tetris Guideline**: a standard rotation system (SRS), a hold box, a next queue, a ghost piece and a 7-bag randomiser.',
    'The **7-bag** deals every piece once per bag of seven, so you never wait very long for any one piece.',
    'Rules differ between games and eras. Older versions have no hold and different rotation, so check which rules you are playing.',
  ],
  sections: [
    {
      id: 'pieces',
      title: 'The seven pieces',
      lead: 'Each piece has four orientations. Use the buttons to rotate all seven at once.',
      blocks: [
        { t: 'tetris', id: 'pieces' },
        {
          t: 'table',
          head: ['Piece', 'Shape', 'What it is good for'],
          rows: [
            ['I', 'Four in a line', 'The only piece that clears four rows at once; fills a deep well; needs a long, flat space'],
            ['O', 'A 2×2 square', 'Perfect for a flat two-wide space; awkward on uneven ground; never changes with rotation'],
            ['T', 'A line of three with a bump', 'The most flexible piece, and the only one used for the standard T-spin'],
            ['S and Z', 'Two stacked pairs offset by one', 'Fit steps in the surface; mirror images of each other; the usual cause of holes'],
            ['J and L', 'A line of three with a corner', 'Fit against a wall or a step; mirror images of each other'],
          ],
        },
      ],
    },
    {
      id: 'controls',
      title: 'The controls',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Move', title: 'Left and right', body: 'Slide the piece sideways. Holding the key repeats the move, controlled by two settings you will meet in the speed guide: DAS and ARR.' },
            { tag: 'Rotate', title: 'Clockwise and anticlockwise', body: 'Most versions have both. Many also have a 180° turn. Using the shorter turn saves key presses.' },
            { tag: 'Drop', title: 'Soft drop and hard drop', body: 'Soft drop speeds the fall while you steer. Hard drop slams the piece straight down and locks it at once.' },
            { tag: 'Hold', title: 'Hold', body: 'Swap the current piece with the one in the hold box, once per piece. Use it to save an I for a well, or to fix an awkward piece.' },
            { tag: 'Preview', title: 'The next queue', body: 'Shows the next few pieces (often three to six). Plan with it; do not just react.' },
            { tag: 'Aid', title: 'The ghost piece', body: 'A faint outline showing where the piece will land. Check it before you drop.' },
          ],
        },
        {
          t: 'p',
          text: 'A piece **locks** (stops being movable) shortly after it touches the stack. That short window is the **lock delay**. In the guideline it is usually around half a second, and in many versions moving or turning the piece resets it, up to a limit, so you can still slide a piece into a tight spot after it lands. The exact timing and limit vary by game.',
        },
      ],
    },
    {
      id: 'rotation',
      title: 'How rotation works: the Super Rotation System',
      blocks: [
        { t: 'p', text: 'The guideline’s **Super Rotation System (SRS)** rotates each piece around a fixed centre. If the turned piece would overlap a block or the wall, the game tries a short list of nearby positions, called **wall kicks**, and uses the first one that fits. Kicks are why a piece can twist into a gap that looks too tight for it, and they are what make T-spins possible.' },
        {
          t: 'callout',
          tone: 'note',
          title: 'Why this matters later',
          text: 'The step-through T-spin diagrams in this shelf were checked with a simulator of SRS, so every rotation shown is one the real rules allow. A game with different rotation rules (older games, or some clones) may not allow the same moves.',
        },
      ],
    },
    {
      id: 'bag',
      title: 'What comes next: the 7-bag',
      blocks: [
        { t: 'p', text: 'The guideline randomiser works like drawing from a bag. All seven pieces go into a bag in random order, you receive them one by one, and when the bag is empty a new one is filled. This has real consequences you can plan around.' },
        {
          t: 'list',
          items: [
            'You will never get more than **two of the same piece in a row** (only when one bag ends and the next begins).',
            'The longest wait for a particular piece is **12 pieces** (last in one bag, first in the one after next).',
            'In any group of seven pieces that starts at the start of a bag, you see **each piece exactly once**. Once you know where the bag boundaries are, you can predict what remains.',
            'If you have seen six of the seven pieces in the current bag, the next piece is **certain**. Skilled players use this to keep an I or a T in reserve.',
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Count the bag', text: 'Early on, simply notice which pieces you have seen since the start of the game, in groups of seven. It is one of the easiest ways to start planning ahead.' },
      ],
    },
    {
      id: 'first-goals',
      title: 'Your first goals',
      blocks: [
        {
          t: 'checklist',
          items: [
            'Know all seven pieces and which way each rotates.',
            'Always check the ghost piece before dropping.',
            'Keep the stack flat and low. The next guide shows how.',
            'Use hold on purpose, not by reflex.',
            'Look at the next piece before you place the current one.',
          ],
        },
        { t: 'links', items: [{ path: 'games/tetris/stacking', note: 'Next: how to stack without holes' }, { path: 'games/tetris/t-spins', note: 'Later: T-spins, with step-through boards' }] },
      ],
    },
  ],
  sources: [
    'The Tetris Company. The Tetris Guideline (summarised publicly on the Tetris Wiki).',
    'Tetris Wiki. “SRS”, “Random Generator” and “Lock delay” entries.',
    'Hard Drop community wiki. “Super Rotation System” and “Tetris Guideline”.',
  ],
  related: ['games/tetris/stacking', 'games/tetris/t-spins', 'games/start-here'],
}

export default guide
