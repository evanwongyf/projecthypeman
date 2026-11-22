import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A training plan arranges the right workouts in the right order so you arrive at race day fit, healthy and fresh. Build your own below, then read how the phases work and how to pace the race itself.',
  nutshell: [
    'Plans run **base → build → race-specific → taper**, with an easier week every 3–4 weeks.',
    'Increase the long run by about 1–2 km a week, not more.',
    'Taper: cut volume by about 40–60% over the last 1–3 weeks while keeping some faster running.',
    'Race at an **even pace**, or slightly faster in the second half (a negative split).',
    'Missed a week? Do not cram; pick up where you can and adjust the goal if needed.',
  ],
  sections: [
    {
      id: 'builder',
      title: 'Build a plan',
      blocks: [{ t: 'fit-tool', tool: 'plan' }],
    },
    {
      id: 'phases',
      title: 'How the phases work',
      blocks: [
        {
          t: 'levels',
          items: [
            { name: 'Base', body: 'Easy running, a growing long run, strides and hills. Builds the engine and the legs.' },
            { name: 'Build', body: 'Add tempo runs and intervals. Volume keeps rising gently.' },
            { name: 'Race-specific', body: 'Workouts at goal race pace, and the longest long runs.' },
            { name: 'Taper', body: 'Less volume, a little sharp running, lots of rest.' },
          ],
          caption: 'Every 3–4 weeks, a lighter week lets the training sink in.',
        },
        {
          t: 'table',
          head: ['Goal', 'Typical plan length', 'Peak long run', 'Taper'],
          rows: [
            ['5K', '6–10 weeks', '8–12 km', '1 week'],
            ['10K', '8–12 weeks', '12–16 km', '1 week'],
            ['Half marathon', '10–16 weeks', '16–21 km', '1–2 weeks'],
            ['Marathon', '16–20 weeks', '29–35 km (or about 3 hours)', '2–3 weeks'],
          ],
        },
      ],
    },
    {
      id: 'race',
      title: 'Race-day pacing',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Even or negative split', body: 'Most records are set at an even pace or with a slightly faster second half. Starting too fast costs more later than it gains early.' },
            { title: 'Use your numbers', body: 'Set a realistic goal pace from a recent race with the [race predictor](@fitness/running/calculators), and check it at each kilometre marker.' },
            { title: 'Warm up for short races', body: 'For a 5K or 10K, jog 10–15 minutes and do a few strides. For a marathon, a few minutes of walking and easy jogging is enough.' },
            { title: 'Nothing new on race day', body: 'Same shoes, same breakfast, same gels as in training.' },
          ],
        },
        { t: 'fit-tool', tool: 'pace' },
      ],
    },
  ],
  sources: [
    'Bosquet, L., Montpetit, J., Arvisais, D., & Mujika, I. (2007). Effects of tapering on performance: A meta-analysis. *Medicine & Science in Sports & Exercise*, 39(8), 1358–1365.',
    'Pfitzinger, P., & Douglas, S. (2019). *Advanced Marathoning* (3rd ed.). Human Kinetics.',
    'Abbiss, C. R., & Laursen, P. B. (2008). Describing and understanding pacing strategies during athletic competition. *Sports Medicine*, 38(3), 239–252.',
  ],
  related: ['fitness/running/workouts', 'fitness/running/philosophies', 'fitness/running/calculators'],
}

export default guide
