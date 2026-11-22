import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Lower-body training is built on two movement patterns: the **squat** (knees and hips bend together) and the **hinge** (hips move back with the knees only slightly bent). Add a single-leg exercise and some calf and glute work, and you have covered everything.',
  nutshell: [
    '**Squat** pattern: bodyweight squat, goblet squat, back squat, lunge.',
    '**Hinge** pattern: deadlift, Romanian deadlift, kettlebell swing, glute bridge.',
    'Single-leg work (lunges) builds balance and evens out left–right differences.',
    'Calves matter, especially for runners: they absorb much of the load of each stride.',
  ],
  sections: [
    {
      id: 'squat',
      title: 'Squats and lunges',
      lead: 'Watch from the side at slow speed to see hips and knees bend together.',
      blocks: [{ t: 'exercises', ids: ['squat', 'goblet-squat', 'back-squat', 'lunge'] }],
    },
    {
      id: 'hinge',
      title: 'Hinges',
      lead: 'In a hinge, the hips travel back while the back stays flat. Compare the deadlift and the Romanian deadlift.',
      blocks: [
        { t: 'exercises', ids: ['deadlift', 'rdl', 'kettlebell-swing', 'glute-bridge'] },
        {
          t: 'table',
          head: ['', 'Squat', 'Hinge'],
          rows: [
            ['Movement', 'Hips down, knees forward', 'Hips back, knees soft'],
            ['Torso', 'More upright', 'Leans forward, back flat'],
            ['Main muscles', 'Quads, glutes', 'Glutes, hamstrings, back'],
            ['Feels like', 'Sitting down', 'Shutting a car door with your bottom'],
          ],
        },
      ],
    },
    {
      id: 'calves',
      title: 'Calves',
      blocks: [{ t: 'exercises', ids: ['calf-raise'] }],
    },
    {
      id: 'session',
      title: 'A lower-body session',
      blocks: [
        {
          t: 'table',
          head: ['Exercise', 'Sets × reps', 'Rest'],
          rows: [
            ['Goblet or back squat', '3–4 × 6–10', '2–3 min'],
            ['Romanian deadlift', '3 × 8–10', '2 min'],
            ['Reverse lunge', '3 × 8 each leg', '90 s'],
            ['Glute bridge', '3 × 12–15', '60 s'],
            ['Calf raise', '3 × 15', '60 s'],
          ],
        },
      ],
    },
  ],
  sources: ['Schoenfeld, B. J. (2010). Squatting kinematics and kinetics and their application to exercise performance. *Journal of Strength and Conditioning Research*, 24(12), 3497–3506.', 'Rippetoe, M. (2011). *Starting Strength* (3rd ed.). Aasgaard.'],
  related: ['fitness/strength/basics', 'fitness/strength/programmes', 'fitness/running/injuries'],
}

export default guide
