import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Once you can stack cleanly, the next limit is speed: how many pieces you place each second, with how few key presses. Speed is not frantic mashing. It is a set of settings, habits and drills that make the right placement cost as little time as possible. This guide covers the settings that matter, what finesse means, how to measure progress and a practice routine that avoids the usual traps.',
  nutshell: [
    '**DAS** (delayed auto shift) is how long you hold a direction before the piece starts sliding on its own. **ARR** (auto repeat rate) is how fast it then slides. Faster values mean fewer key presses.',
    '**Finesse** means placing a piece with the fewest key presses. It saves time and reduces mistakes.',
    '**PPS** (pieces per second) measures speed. Beginners are well below 1 PPS; strong players are much higher. **Accuracy first, speed second.**',
    'Practise **slowly and cleanly** before fast. Fast and sloppy trains the wrong habits.',
    'Take breaks. Fatigue makes you worse, and a short, focused session beats a long, tired one.',
  ],
  sections: [
    {
      id: 'settings',
      title: 'Settings that matter',
      blocks: [
        {
          t: 'terms',
          items: [
            { term: 'DAS', def: 'Delayed auto shift. The delay between pressing and holding a direction and the piece starting to slide automatically. A shorter DAS makes the piece respond faster but is easier to overshoot.' },
            { term: 'ARR', def: 'Auto repeat rate. The speed of the slide once DAS has passed. Very small values make the piece reach the wall almost at once, which many strong players prefer.' },
            { term: 'SDF', def: 'Soft drop factor. How much faster the piece falls while you hold soft drop. A high value is close to an instant drop.' },
            { term: 'Lock delay', def: 'How long a piece rests on the stack before it locks. It is usually fixed by the game, not your settings.' },
            { term: 'Gravity', def: 'How quickly pieces fall on their own. It rises with the level in marathon, and at the highest speeds a piece falls at once ("20G").' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Start with the defaults, then adjust', text: 'Competitive players tend to use a shorter DAS and a very short ARR, but there is no single correct value and it differs between games. Change one setting at a time, and give it a few days before you decide.' },
      ],
    },
    {
      id: 'finesse',
      title: 'Finesse: fewest key presses',
      blocks: [
        { t: 'p', text: '**Finesse** is placing a piece in the intended spot with as few key presses as possible. With DAS you can send a piece to the wall in one press, and with a rotation or two you can reach nearly any position with only a handful of presses. A piece placed with extra taps costs time, and each tap is a chance to make an error.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Use the wall', body: 'Slide to the wall with DAS, then use a short step to the final column. It is faster and more reliable than tapping several times.' },
            { title: 'Rotate early', body: 'Turn the piece while it is still falling, so it is in the right orientation when you move it.' },
            { title: 'Choose the shortest rotation', body: 'One clockwise turn for a right-facing piece, one anticlockwise for a left-facing one. Use 180° if your game has it.' },
            { title: 'Hard drop', body: 'Hard drop when the piece is in place instead of soft dropping, unless you need to slide it under something.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'Finesse is not a law', text: 'Sometimes extra presses are needed (a spin, a slide under an overhang). Finesse describes the best way to place a piece normally, not a rule that forbids anything else.' },
      ],
    },
    {
      id: 'measure',
      title: 'Measuring progress',
      blocks: [
        {
          t: 'table',
          head: ['Measure', 'What it tells you'],
          rows: [
            ['PPS (pieces per second)', 'How fast you place pieces. Raise it only while staying clean'],
            ['APM (attack per minute)', 'How much garbage you send in versus play'],
            ['Time to clear 40 lines', 'A common sprint test. A smooth time needs both speed and efficiency'],
            ['Holes per game', 'A clean stack has few. Rising holes mean you are going too fast'],
            ['Finesse errors', 'Extra key presses compared with the best way'],
          ],
        },
        { t: 'p', text: 'Track one or two numbers over weeks, not minutes. A single good or bad game tells you little.' },
      ],
    },
    {
      id: 'practice',
      title: 'A practice routine',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Warm up slowly (5 minutes)', body: 'Play at a speed where you make no holes. Focus on neat stacking and correct rotation.' },
            { title: 'Drill one skill (10 minutes)', body: 'For example: building a well and clearing a Tetris, or building and using a T-spin slot. Repeat the same setup until it is comfortable.' },
            { title: 'Sprint or play (10 minutes)', body: 'A 40-line sprint or a few versus games, with the new skill. Do not worry about the result.' },
            { title: 'Review one mistake (5 minutes)', body: 'Watch a replay if you can. Find one mistake that repeated, and decide on one change.' },
          ],
        },
        {
          t: 'dodont',
          do: ['Practise a little every day rather than a lot once a week.', 'Stop when you are tired or frustrated.', 'Change one thing at a time.'],
          dont: ['Mash keys to go faster.', 'Practise only the part you are already good at.', 'Blame luck for every loss; review the replay.'],
        },
        { t: 'links', items: [{ path: 'games/tetris/openers-and-strategy', note: 'Next: openers and strategy' }, { path: 'games/tetris/stacking', note: 'Back to clean stacking' }] },
      ],
    },
  ],
  sources: [
    'Tetris Wiki. “DAS”, “ARR”, “Finesse” and “Soft drop” entries.',
    'Hard Drop community wiki. “Finesse” and “Beginner’s guide to Tetris”.',
  ],
  related: ['games/tetris/stacking', 'games/tetris/attack-and-scoring', 'games/tetris/openers-and-strategy'],
}

export default guide
