import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A programme arranges exercises across the week so each muscle is trained about twice, with time to recover. Choose by how many days you can train; the best programme is the one you will actually do.',
  nutshell: [
    '**2–3 days**: full body each session.',
    '**4 days**: upper/lower split.',
    '**5–6 days**: push/pull/legs.',
    'No equipment? Bodyweight training builds real strength if you keep making it harder.',
    'Stick with a programme for at least 8–12 weeks before judging it.',
  ],
  sections: [
    {
      id: 'full-body',
      title: 'Beginner full body (3 days a week)',
      blocks: [
        {
          t: 'table',
          head: ['Day A', 'Day B'],
          rows: [
            ['Squat (goblet or back) 3 × 6–10', 'Deadlift or Romanian deadlift 3 × 5–8'],
            ['Bench press or push-up 3 × 6–10', 'Overhead press 3 × 6–10'],
            ['Bent-over row 3 × 8–12', 'Pull-up (or assisted) 3 × max'],
            ['Plank 2 × 30–45 s', 'Reverse lunge 2 × 8 each leg'],
          ],
          caption: 'Alternate A and B: week 1 is A, B, A; week 2 is B, A, B. Rest a day between sessions.',
        },
      ],
    },
    {
      id: 'splits',
      title: 'Splits for more days',
      blocks: [
        {
          t: 'table',
          head: ['Split', 'Week', 'Each session'],
          rows: [
            ['Upper / lower', 'Mon upper, Tue lower, Thu upper, Fri lower', 'Upper: bench, row, overhead press, pull-up, arms. Lower: squat, RDL, lunge, calves, core.'],
            ['Push / pull / legs', 'Push, pull, legs, rest, repeat (or 6 days in a row)', 'Push: chest, shoulders, triceps. Pull: back, biceps. Legs: squat, hinge, single-leg, calves.'],
          ],
        },
      ],
    },
    {
      id: 'home',
      title: 'No-equipment plan (3 days a week)',
      blocks: [
        {
          t: 'table',
          head: ['Exercise', 'Sets × reps', 'Make it harder'],
          rows: [
            ['Squat', '3 × 15–20', 'Slower lowering, pause at the bottom, jump'],
            ['Push-up', '3 × as many as possible', 'Feet raised, slow lowering'],
            ['Reverse lunge', '3 × 10 each leg', 'Hold a full backpack'],
            ['Glute bridge', '3 × 15', 'One leg at a time'],
            ['Plank', '3 × 30–60 s', 'Lift one arm or leg'],
            ['Burpee', '3 × 8–10', 'Add a push-up'],
          ],
        },
        { t: 'exercises', ids: ['squat', 'push-up', 'lunge', 'glute-bridge', 'plank', 'burpee'] },
        { t: 'fit-tool', tool: 'one-rep-max' },
      ],
    },
  ],
  sources: ['Schoenfeld, B. J., Ogborn, D., & Krieger, J. W. (2016). Effects of resistance training frequency on measures of muscle hypertrophy. *Sports Medicine*, 46(11), 1689–1697.'],
  related: ['fitness/strength/basics', 'fitness/circuits/circuit-training'],
}

export default guide
