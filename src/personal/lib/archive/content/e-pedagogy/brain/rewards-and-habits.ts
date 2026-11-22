import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Apps are designed to be returned to. Many use the same learning machinery the brain uses for any reward: dopamine neurons that signal when things go better than expected, and schedules of reward that make behaviour persistent. Understanding that machinery helps teachers use rewards wisely and helps learners build better digital habits.',
  nutshell: [
    'Dopamine neurons signal **reward prediction error**: better than expected → burst; as expected → no change; worse → dip (Schultz, Dayan and Montague, 1997).',
    '**Variable rewards** (unpredictable, like feeds and loot boxes) produce the most persistent behaviour.',
    '**Gamification** has small-to-moderate average benefits for learning (Sailer and Homner, 2020), but rewards tied to activity rather than mastery can backfire.',
    '“Dopamine detox” and “addiction” language oversimplifies; the useful idea is **habit design**: cues, routines, rewards and friction.',
  ],
  sections: [
    {
      id: 'rpe',
      title: 'Reward prediction error',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\delta = r - V, \qquad V \leftarrow V + \alpha\,\delta`,
          caption: 'The Rescorla–Wagner (temporal-difference) learning rule: expectation V moves towards the actual reward r by a fraction α of the surprise δ.',
          plain: 'The brain keeps an expectation of how rewarding something will be. When the real reward arrives, the difference (the prediction error) is the signal for learning. A positive surprise strengthens the habit and raises the expectation; when rewards become fully expected the surprise disappears, which is why novelty and unpredictability keep apps compelling.',
          where: [
            { sym: String.raw`\delta`, def: 'reward prediction error (the surprise)' },
            { sym: 'r', def: 'reward actually received' },
            { sym: 'V', def: 'expected reward (value)' },
            { sym: String.raw`\alpha`, def: 'learning rate between 0 and 1' },
          ],
          syntax: [
            { sym: String.raw`\delta`, say: '“delta”' },
            { sym: String.raw`\leftarrow`, say: '“is updated to”: replace V with the right-hand side' },
            { sym: String.raw`\alpha`, say: '“alpha”' },
          ],
          worked: {
            title: 'A new app’s streak reward',
            steps: [
              String.raw`Start: \(V = 0\), each day’s reward \(r = 10\), \(\alpha = 0.5\).`,
              String.raw`Day 1: \(\delta = 10 - 0 = 10\); \(V = 0 + 0.5 \times 10 = 5\).`,
              String.raw`Day 2: \(\delta = 10 - 5 = 5\); \(V = 7.5\). Day 3: \(\delta = 2.5\); \(V = 8.75\).`,
              String.raw`Day 4: \(\delta = 1.25\). The surprise halves each day.`,
            ],
            why: [
              'set up a reward that is the same every day',
              'the first reward is a big surprise',
              'each day the expectation catches up',
              'a predictable reward stops surprising, so its pull weakens',
            ],
            answer: 'Fixed rewards lose their surprise quickly. Apps keep prediction errors alive with variable rewards (random bonuses, unpredictable feeds), which is why they are harder to put down than a predictable textbook.',
          },
        },
      ],
    },
    {
      id: 'schedules',
      title: 'Schedules of reward',
      blocks: [
        { t: 'table', head: ['Schedule', 'Example', 'Behaviour it produces'], rows: [
          ['Fixed ratio', 'A badge every 10 exercises', 'Bursts of effort, then pauses'],
          ['Variable ratio', 'Random rewards; refreshing a feed; loot boxes', 'High, steady, persistent responding: hardest to stop'],
          ['Fixed interval', 'A weekly quiz', 'Effort just before the deadline'],
          ['Variable interval', 'Unannounced quizzes; checking messages', 'Steady moderate checking'],
        ] },
      ],
    },
    {
      id: 'gamification',
      title: 'Gamification: help or harm?',
      blocks: [
        { t: 'bars', title: 'Gamification effects (Sailer and Homner, 2020)', unit: 'g', decimals: 2, refs: [{ at: 0.2, label: 'small' }, { at: 0.5, label: 'medium' }], items: [
          { label: 'Cognitive learning outcomes', value: 0.49 },
          { label: 'Motivational outcomes', value: 0.36 },
          { label: 'Behavioural outcomes', value: 0.25 },
        ], caption: 'Average effects across studies; the cognitive effect was less robust in the most rigorous studies. Effects depend heavily on design.' },
        { t: 'dodont', do: [
          'Reward mastery and improvement, not clicks and time spent',
          'Use challenge, story and immediate feedback, the game elements tied to learning',
          'Allow co-operation, not only competition',
          'Let rewards fade as interest grows',
        ], dont: [
          'Use public leaderboards that shame the lowest',
          'Use streaks that punish a missed day so harshly learners give up',
          'Rely on random rewards to keep learners coming back',
        ] },
      ],
    },
    {
      id: 'habits',
      title: 'Healthier digital habits',
      blocks: [
        { t: 'checklist', items: [
          'Add friction to distractions: log out, move apps off the home screen, phone in another room',
          'Remove friction from good habits: the study app on the home screen, materials ready',
          'Turn off non-essential notifications',
          'Use greyscale mode at night',
          'Replace, do not just remove: plan what you will do instead of scrolling',
          'Track use for a week to see real patterns',
        ] },
      ],
    },
  ],
  sources: [
    'Schultz, W., Dayan, P., & Montague, P. R. (1997). A neural substrate of prediction and reward. Science, 275(5306), 1593–1599.',
    'Rescorla, R. A., & Wagner, A. R. (1972). A theory of Pavlovian conditioning. In Classical Conditioning II.',
    'Sailer, M., & Homner, L. (2020). The gamification of learning: A meta-analysis. Educational Psychology Review, 32, 77–112.',
    'Ferster, C. B., & Skinner, B. F. (1957). Schedules of Reinforcement. Appleton-Century-Crofts.',
  ],
  related: ['teaching/motivation/rewards-and-overjustification', 'teaching/theories/behaviourism', 'habits/focus'],
}

export default guide
