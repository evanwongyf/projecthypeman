import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A T-spin is a way of tucking a T piece into a gap that it could not simply be dropped into, by turning it at the last moment. In modern Tetris a T-spin that clears lines is worth much more than the same clear done normally, so it is the foundation of high-level play. This guide explains the rule the game uses to detect a T-spin, then walks through the double, single, triple and mini on boards you can step through, and finishes with how to recognise and build a slot.',
  nutshell: [
    'A T-spin needs two things: the **last move was a rotation**, and **at least three of the four corners** around the T’s centre are filled (walls and floor count).',
    'A **T-spin mini** is the weaker version: only one of the two corners the T points toward is filled (unless a special wall kick was used).',
    'The T-spin **double** is the classic: a slot with an **overhang** that stops the T dropping straight in.',
    'The T-spin **triple** needs a taller, narrow shaft and clears three rows at once.',
    'Scoring and attack rules vary between games. The diagrams here follow the standard guideline rotation rules.',
  ],
  sections: [
    {
      id: 'rule',
      title: 'The rule the game uses',
      blocks: [
        { t: 'p', text: 'Picture the T piece inside a 3×3 square. Its centre is the middle square, and there are four corners of that square. The game counts how many of these four corners are occupied by a block, the wall or the floor.' },
        {
          t: 'steps',
          items: [
            { title: 'The last move was a rotation', body: 'If you rotate the T and then move it, slide it or drop it further, the spin no longer counts. The rotation must be the last thing that happened before the piece locked.' },
            { title: 'Three of four corners are filled', body: 'Count the four corners of the 3×3 square around the T. Walls and the floor count as filled. Three or four means it is a T-spin.' },
            { title: 'Full or mini?', body: 'If both corners on the side the T points toward are filled, it is a full T-spin. If only one is, it is a T-spin mini, unless the rotation used the last, most extreme wall kick, in which case it is promoted to a full T-spin.' },
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Rules vary',
          text: 'This is the three-corner rule used by the guideline. Some games and older versions use a different test (for example, checking whether the piece can still move), and some count spins by other pieces too. The diagrams here follow the guideline.',
        },
        { t: 'tetris', id: 'no-spin' },
        { t: 'p', text: 'Above, the same shape of hole is filled by a straight drop. It clears two lines, but since the T was not rotated into place, it is only a double. Now compare the same hole with an overhang above it.' },
      ],
    },
    {
      id: 'tsd',
      title: 'The T-spin double',
      blocks: [
        { t: 'p', text: 'The first frame marks where the T will end up. The block jutting out above the right side of the slot is the **overhang**. It stops the T dropping straight into the slot, which is exactly why a rotation is needed.' },
        { t: 'tetris', id: 'tsd' },
        {
          t: 'table',
          head: ['Part of the slot', 'What it does'],
          rows: [
            ['A one-wide hole in the lower row', 'Takes the T’s tail, the single square that points down'],
            ['A three-wide space in the row above', 'Takes the T’s arms'],
            ['The overhang', 'Stops a straight drop and fills the third corner, so the spin counts'],
            ['Both rows otherwise full', 'So both rows clear when the T locks'],
          ],
        },
      ],
    },
    {
      id: 'tss',
      title: 'The T-spin single',
      blocks: [
        { t: 'p', text: 'If only one of the two rows can be completed, the same spin gives a T-spin single. It is worth more than a normal single, but a double is the better use of the slot.' },
        { t: 'tetris', id: 'tss' },
      ],
    },
    {
      id: 'tst',
      title: 'The T-spin triple',
      blocks: [
        { t: 'p', text: 'The triple needs a one-wide shaft three rows deep, with a notch beside the middle row, and an overhang above. The T goes in standing upright and clears three rows. It is harder to set up than the double, but it is the biggest T-spin clear.' },
        { t: 'tetris', id: 'tst' },
      ],
    },
    {
      id: 'mini',
      title: 'The T-spin mini',
      blocks: [
        { t: 'p', text: 'A mini fills only one of the two corners the T points toward. It still counts as a spin, but it scores less. Minis happen often by accident, when a T is wiggled into a tight notch against a wall.' },
        { t: 'tetris', id: 'tmini' },
        { t: 'callout', tone: 'tip', title: 'Do not chase minis', text: 'A mini single is not worth building a stack for. Treat it as a bonus when it happens, not a goal.' },
      ],
    },
    {
      id: 'recognise',
      title: 'Recognising and building a slot',
      blocks: [
        {
          t: 'list',
          items: [
            'Look for a **one-wide hole** with a **wider gap** next to it and an **overhang** over one side. That is the shape of the double slot.',
            'Check that the rows are **otherwise full**, so the clears count.',
            'Check that the T can be **rotated in**, not just dropped, and which side it comes from.',
            'Keep the surface around it flat so other pieces do not fall into the slot by accident.',
            'If you have no T, **do not wait**: fill the slot in a way that keeps the stack clean, or hold a T for later.',
          ],
        },
        {
          t: 'dodont',
          do: ['Build a slot only when a T is likely soon (the next queue and the 7-bag help).', 'Prefer the double slot until you can place pieces quickly and safely.', 'Practise spinning into a slot slowly first.'],
          dont: ['Leave a slot open and tall when no T has appeared for a long time.', 'Build a slot that covers holes you cannot reach.', 'Try to spin by habit when a plain drop would do.'],
        },
        { t: 'links', items: [{ path: 'games/tetris/attack-and-scoring', note: 'How spins score and attack' }, { path: 'games/tetris/openers-and-strategy', note: 'Setups that build spins automatically' }] },
      ],
    },
  ],
  sources: [
    'Tetris Wiki. “T-Spin” entry (three-corner rule, mini and wall kick promotion).',
    'The Tetris Company. The Tetris Guideline (T-spin detection), as summarised publicly.',
    'Hard Drop community wiki. “T-Spin Double”, “T-Spin Triple”.',
  ],
  related: ['games/tetris/basics', 'games/tetris/attack-and-scoring', 'games/tetris/openers-and-strategy'],
}

export default guide
