import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Military and uniformed-service fitness tests check that you can run, push and hold your own body weight. Most combine a run with push-ups and a core test. The good news: they reward exactly the kind of steady, specific training that works.',
  nutshell: [
    'Singapore’s **IPPT** has three stations: **push-ups** and **sit-ups** (one minute each) and a **2.4 km run**, scored by age group.',
    'The **US Army Fitness Test**, which replaced the ACFT in 2025, includes a deadlift, hand-release push-ups, a sprint-drag-carry, a plank and a two-mile run.',
    'Standards and scoring change: always check the current official tables.',
    'Train the test events specifically, two to three times a week, and practise the exact technique the graders want.',
    'The run carries the most points for many people: build an easy base and add intervals at goal pace.',
  ],
  sections: [
    {
      id: 'ippt',
      title: 'IPPT (Singapore)',
      blocks: [
        {
          t: 'table',
          head: ['Station', 'What is tested', 'How to train'],
          rows: [
            ['Push-ups (1 min)', 'Upper-body strength endurance, at a set rhythm and depth', 'Sets of push-ups 3 times a week; one test-style set each week; slow lowering for strength'],
            ['Sit-ups (1 min)', 'Core endurance', 'Timed sets of sit-ups plus planks and dead bugs'],
            ['2.4 km run', 'Aerobic fitness', 'Easy runs, one interval session (for example 6 × 400 m at goal pace) and one tempo run a week'],
          ],
          caption: 'Points for each station add up to a total, with Gold, Silver and Pass awards. Check the current scoring tables on the official NS portal.',
        },
        { t: 'exercises', ids: ['push-up', 'crunch', 'plank', 'jog', 'sprint'] },
        {
          t: 'p',
          text: 'Work out your goal 2.4 km pace with the [pace calculator](@fitness/running/calculators): a 10:00 run needs 4:10 per kilometre, or 100 seconds per 400 m lap.',
        },
      ],
    },
    {
      id: 'army',
      title: 'Strength-based tests',
      blocks: [
        {
          t: 'p',
          text: 'Tests like the US Army Fitness Test add heavy and functional events. Train the deadlift with good technique, practise hand-release push-ups (chest to the floor, hands lifted, then press), build plank endurance, and prepare for the sprint-drag-carry with sled pushes or drags, shuttle runs and farmer’s carries.',
        },
        { t: 'exercises', ids: ['deadlift', 'push-up', 'plank', 'sprint'] },
      ],
    },
    {
      id: 'plan',
      title: 'An eight-week test plan',
      blocks: [
        {
          t: 'table',
          head: ['Day', 'Session'],
          rows: [
            ['Mon', 'Push-ups: 5 sets of about 60% of your max; sit-ups: 4 timed sets of 40 s'],
            ['Tue', 'Run intervals: 6–8 × 400 m at goal pace, 90 s jog between'],
            ['Wed', 'Easy run 30 min + core circuit'],
            ['Thu', 'Strength: squat, row, push-ups with slow lowering, plank'],
            ['Fri', 'Rest'],
            ['Sat', 'Tempo 15–20 min, or a full practice test every 2 weeks'],
            ['Sun', 'Easy run or walk'],
          ],
          caption: 'Reduce the volume in the final week and rest the day before the test.',
        },
        { t: 'fit-tool', tool: 'pace' },
      ],
    },
  ],
  sources: [
    'Ministry of Defence, Singapore. (n.d.). *IPPT*. ns.gov.sg.',
    'US Army. (2025). *Army Fitness Test*. army.mil.',
    'Knapik, J. J. (2015). The importance of physical fitness for injury prevention. *Journal of Special Operations Medicine*, 15(1), 123–127.',
  ],
  related: ['fitness/running/workouts', 'fitness/strength/upper-body', 'fitness/strength/core'],
}

export default guide
