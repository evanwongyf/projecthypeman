import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Upper-body training balances **pushing** (moving a weight away from you) and **pulling** (towards you), both horizontally and vertically. Balancing them keeps the shoulders healthy and your posture good.',
  nutshell: [
    'Horizontal push: push-up, bench press. Vertical push: overhead press.',
    'Horizontal pull: rows. Vertical pull: pull-ups.',
    'Do at least as much pulling as pushing.',
    'Keep the shoulder blades controlled: set back and down for pressing, moving freely for pulling.',
  ],
  sections: [
    {
      id: 'push',
      title: 'Pushing',
      blocks: [{ t: 'exercises', ids: ['push-up', 'bench-press', 'overhead-press'] }],
    },
    {
      id: 'pull',
      title: 'Pulling',
      blocks: [{ t: 'exercises', ids: ['pull-up', 'bent-row'] }],
    },
    {
      id: 'arms',
      title: 'Arms and shoulders',
      blocks: [
        { t: 'exercises', ids: ['curl', 'lateral-raise'] },
        { t: 'p', text: 'The big pushing and pulling lifts already train the arms a lot. Add curls, triceps work and lateral raises at the end of a session if you want more.' },
      ],
    },
    {
      id: 'pullup',
      title: 'Getting your first pull-up',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Hang', body: 'Build up to hanging from the bar for 30 seconds, shoulders engaged.' },
            { title: 'Rows', body: 'Rows and inverted rows (under a low bar or table) build the pulling muscles.' },
            { title: 'Negatives', body: 'Jump or step up to the top and lower yourself as slowly as you can: 3 × 3–5.' },
            { title: 'Assistance', body: 'A resistance band looped under the feet takes some of your weight.' },
            { title: 'Practise often', body: 'A few good attempts, several times a week, beats one exhausting session.' },
          ],
        },
      ],
    },
  ],
  sources: ['American College of Sports Medicine. (2009). Progression models in resistance training for healthy adults. *Medicine & Science in Sports & Exercise*, 41(3), 687–708.'],
  related: ['fitness/strength/basics', 'fitness/strength/programmes', 'fitness/combat/military'],
}

export default guide
