import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Kickboxing and Muay Thai add kicks, knees and more hip mobility to boxing’s punches. For fitness, they are superb for the legs, core, balance and conditioning.',
  nutshell: [
    'The **roundhouse kick** strikes with the shin, turning the hips over while the standing foot pivots.',
    'The **teep** (push kick) is a straight push with the sole of the foot, used to keep distance.',
    'Knees are thrown with the hips driving forward.',
    'The **sprawl** defends takedowns and makes a brutal conditioning drill.',
    'Mobility in the hips makes kicks easier and safer: warm up well.',
  ],
  sections: [
    {
      id: 'moves',
      title: 'The moves',
      lead: 'Use slow motion and turn the camera to see the pivot of the standing foot in the roundhouse.',
      blocks: [{ t: 'exercises', ids: ['roundhouse', 'teep', 'knee-strike', 'sprawl', 'stance', 'jab-cross-hook'] }],
    },
    {
      id: 'session',
      title: 'A kickboxing conditioning session',
      blocks: [
        {
          t: 'table',
          head: ['Block', 'What to do'],
          rows: [
            ['Warm-up (8 min)', 'Skipping 3 min; leg swings, hip circles, lunges with a reach; slow kicks'],
            ['Technique (3 × 3 min)', 'Shadowbox: jab-cross into a rear roundhouse; teeps; knees'],
            ['Power rounds (4 × 1 min)', '30 s alternating knees, 30 s kicks on one side; swap sides each round'],
            ['Finisher (3 rounds)', '20 s sprawls, 20 s fast punches, 20 s rest'],
            ['Cool-down (5 min)', 'Hip flexor, hamstring and quad stretches'],
          ],
        },
        { t: 'exercises', ids: ['leg-swings', 'hip-flexor-stretch', 'hamstring-stretch'] },
      ],
    },
  ],
  related: ['fitness/combat/boxing', 'fitness/warm-up'],
}

export default guide
