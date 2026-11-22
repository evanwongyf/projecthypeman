import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Spaced-repetition software decides when to show each flashcard again so that you review it just before you would forget it. Behind the scenes are simple algorithms with a little maths. Understanding them helps you use apps like Anki well, and lets you run a paper version if you prefer.',
  nutshell: [
    '**Leitner system** (1972): boxes with growing intervals; a correct card moves up a box, a wrong one goes back to box 1.',
    '**SM-2** (Wozniak, 1987): each card has an ease factor; the next interval = previous interval × ease, and ease changes with how hard the recall felt.',
    '**FSRS** (2022 onwards, now an Anki option): models each card’s stability and difficulty and schedules reviews for a chosen target recall, typically 90%.',
  ],
  sections: [
    {
      id: 'leitner',
      title: 'The Leitner system',
      blocks: [
        { t: 'steps', items: [
          { title: 'Set up boxes', body: 'Box 1 reviewed every day, box 2 every 2 days, box 3 every 4 days, box 4 every 8 days, box 5 every 16 days.' },
          { title: 'New cards', body: 'Start in box 1.' },
          { title: 'Correct answer', body: 'Move the card up one box.' },
          { title: 'Wrong answer', body: 'Move the card back to box 1.' },
          { title: 'Graduation', body: 'A card correct in box 5 is retired (or reviewed rarely).' },
        ] },
        {
          t: 'math',
          tex: String.raw`\text{Daily load} \approx \sum_{k=1}^{K} \frac{N_k}{I_k}`,
          caption: 'Average cards reviewed per day: cards in each box divided by that box’s interval.',
          plain: 'Each box is reviewed every Iₖ days, so on an average day you see 1/Iₖ of the cards in it. Add up over boxes. Because the high boxes have long intervals, a large well-learned collection costs little time.',
          where: [
            { sym: String.raw`N_k`, def: 'number of cards in box k' },
            { sym: String.raw`I_k`, def: 'review interval of box k (days)' },
            { sym: 'K', def: 'number of boxes' },
          ],
          syntax: [
            { sym: String.raw`\sum_{k=1}^{K}`, say: '“sum over boxes k from 1 to K”' },
          ],
          worked: {
            title: 'A 500-card vocabulary collection',
            steps: [
              'Boxes 1–5 hold 40, 60, 100, 150, 150 cards; intervals 1, 2, 4, 8, 16 days.',
              String.raw`\(40/1 + 60/2 + 100/4 + 150/8 + 150/16 = 40 + 30 + 25 + 18.75 + 9.4\).`,
              String.raw`\(\approx 123\) cards a day.`,
            ],
            why: [
              'count the cards in each box',
              'each box contributes its cards divided by its interval',
              'add',
            ],
            answer: 'About 123 cards a day, roughly 15 minutes at 7 seconds a card. Box 1 is the heaviest per card, so fixing difficult cards (rewriting them, adding mnemonics) cuts the workload most.',
          },
        },
      ],
    },
    {
      id: 'sm2',
      title: 'SM-2',
      blocks: [
        {
          t: 'math',
          tex: String.raw`EF' = EF + \big(0.1 - (5-q)\,(0.08 + (5-q)\times 0.02)\big), \quad EF' \ge 1.3`,
          caption: 'SM-2’s ease-factor update after a review graded q from 0 (blackout) to 5 (perfect).',
          plain: 'Every card starts with an ease factor of 2.5. After each review you grade how well you recalled it. A perfect recall nudges ease up; a hesitant one nudges it down; a recall graded 4 leaves it unchanged. Ease never goes below 1.3. A grade below 3 counts as a failure: the card restarts its intervals.',
          where: [
            { sym: 'EF', def: 'ease factor before the review (starts at 2.5)' },
            { sym: "EF'", def: 'ease factor after the review' },
            { sym: 'q', def: 'quality of recall, 0 to 5' },
          ],
          syntax: [
            { sym: "EF'", say: '“EF prime”: the new value' },
            { sym: String.raw`\ge`, say: '“at least”' },
          ],
          worked: {
            title: 'Three grades from EF = 2.5',
            steps: [
              String.raw`\(q = 5\): \(5 - q = 0\), so the bracket is \(0.1 - 0 = 0.1\). \(EF' = 2.6\).`,
              String.raw`\(q = 4\): \(5 - q = 1\): \(0.1 - 1 \times (0.08 + 0.02) = 0.1 - 0.1 = 0\). \(EF' = 2.5\).`,
              String.raw`\(q = 3\): \(5 - q = 2\): \(0.1 - 2 \times (0.08 + 0.04) = 0.1 - 0.24 = -0.14\). \(EF' = 2.36\).`,
            ],
            why: [
              'a perfect recall adds 0.1',
              'a correct recall after some thought keeps ease the same',
              'a difficult correct recall lowers ease, so intervals grow more slowly',
            ],
            answer: 'Ease becomes 2.6, 2.5 or 2.36. Over many reviews, hard cards drift towards 1.3 and easy ones climb, so each card gets its own pace.',
          },
        },
        {
          t: 'math',
          tex: String.raw`I(1) = 1,\quad I(2) = 6,\quad I(n) = I(n-1) \times EF \;\; (n \ge 3)`,
          caption: 'SM-2 intervals in days for the n-th successful review in a row.',
          plain: 'After the first correct review wait 1 day, after the second wait 6 days, and from then on multiply the last interval by the card’s ease factor. Intervals grow geometrically, so a card answered correctly a handful of times is next seen months later.',
          where: [
            { sym: 'I(n)', def: 'interval after the n-th successful review (days)' },
            { sym: 'EF', def: 'current ease factor' },
          ],
          syntax: [
            { sym: 'I(n − 1)', say: 'the previous interval' },
          ],
          worked: {
            title: 'A card that stays at EF = 2.5',
            steps: [
              String.raw`\(I(1) = 1\), \(I(2) = 6\).`,
              String.raw`\(I(3) = 6 \times 2.5 = 15\).`,
              String.raw`\(I(4) = 15 \times 2.5 = 37.5 \to 38\).`,
              String.raw`\(I(5) = 37.5 \times 2.5 = 93.75 \to 94\). Total days covered: \(1 + 6 + 15 + 38 + 94 = 154\).`,
            ],
            why: [
              'the two fixed starting intervals',
              'from the third review, multiply by ease',
              'round to whole days',
              'add up the gaps to see the calendar span',
            ],
            answer: 'Five successful reviews take a card about five months into the future.',
          },
        },
      ],
    },
    {
      id: 'fsrs',
      title: 'FSRS: scheduling for a target recall',
      blocks: [
        {
          t: 'math',
          tex: String.raw`R(t, S) = \Big(1 + F\frac{t}{S}\Big)^{C}, \qquad F = \tfrac{19}{81},\; C = -0.5`,
          caption: 'The FSRS forgetting curve (from version 4.5): retrievability R after t days for a card with stability S.',
          plain: 'FSRS (the Free Spaced Repetition Scheduler, by Jarrett Ye and colleagues) estimates, for each card, a stability S: the number of days until the chance of recalling it falls to 90%. Its forgetting curve is a power curve built so that R is exactly 90% when t equals S. You pick a desired retention; the scheduler shows the card when R would fall to that level. Its parameters are fitted to your own review history.',
          where: [
            { sym: 'R', def: 'retrievability: probability of recall now' },
            { sym: 't', def: 'days since the last review' },
            { sym: 'S', def: 'stability in days (R = 0.9 when t = S)' },
            { sym: 'F, C', def: 'constants chosen so the curve passes through 90% at t = S' },
          ],
          syntax: [
            { sym: String.raw`\big(\cdot\big)^{C}`, say: '“to the power C”; C = −0.5 means one over the square root' },
          ],
          worked: {
            title: 'A card with stability 10 days',
            steps: [
              String.raw`At \(t = 10\): \(1 + \tfrac{19}{81} \times 1 = \tfrac{100}{81}\). \(\big(\tfrac{100}{81}\big)^{-0.5} = \tfrac{9}{10} = 0.9\).`,
              String.raw`At \(t = 30\): \(1 + \tfrac{19}{81} \times 3 = \tfrac{138}{81} \approx 1.704\). \(1.704^{-0.5} = 1/1.305 \approx 0.766\).`,
              String.raw`For a target of 0.8: solve \((1 + F t/S)^{-0.5} = 0.8\): \(1 + F t/S = 0.8^{-2} = 1.5625\).`,
              String.raw`\(t/S = 0.5625 \times \tfrac{81}{19} \approx 2.40\), so \(t \approx 24\) days.`,
            ],
            why: [
              'check the defining property: 90% at t = S',
              'three times as long gives about 77%',
              'invert the power by raising both sides to −2',
              'solve for t',
            ],
            answer: 'Aiming for 90% recall means reviewing every S days; accepting 80% stretches the interval to about 2.4S (24 days here), with fewer reviews but more forgotten cards to relearn. Most people find 85–90% a good balance.',
          },
        },
      ],
    },
  ],
  sources: [
    'Leitner, S. (1972). So lernt man lernen. Herder.',
    'Wozniak, P. A. (1990). Optimization of learning (master’s thesis); SuperMemo SM-2 algorithm description (supermemo.com).',
    'Ye, J., Su, J., & Cao, Y. (2022). A stochastic shortest path algorithm for optimizing spaced repetition scheduling. KDD ’22.',
    'Open Spaced Repetition (2024). The FSRS algorithm (github.com/open-spaced-repetition).',
  ],
  related: ['memory/spaced-repetition', 'memory/flashcards', 'attention/practice/planning-reviews'],
}

export default guide
