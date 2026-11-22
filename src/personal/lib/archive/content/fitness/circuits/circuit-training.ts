import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Circuit training moves from one exercise ("station") to the next with little rest, working different muscle groups in turn. It builds strength and fitness together in a short time, needs little equipment, and works brilliantly for groups and classes.',
  nutshell: [
    'Alternate body areas so one rests while another works: legs, push, core, pull, full body.',
    'Use **time** (for example 40 seconds on, 20 off) or **reps** at each station.',
    '6–10 stations, 2–4 rounds, 1–2 minutes of rest between rounds.',
    'Pick exercises everyone can do with good form; offer easier and harder versions.',
  ],
  sections: [
    {
      id: 'stations',
      title: 'Station exercises',
      blocks: [{ t: 'exercises', ids: ['jumping-jack', 'squat-jump', 'push-up', 'mountain-climber', 'lunge', 'burpee', 'skater', 'jump-rope', 'kettlebell-swing', 'box-jump'] }],
    },
    {
      id: 'design',
      title: 'Designing a circuit',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Pick a format', body: 'Time-based (40/20, 45/15) suits mixed groups; rep-based suits strength work.' },
            { title: 'Choose 6–10 stations', body: 'Rotate: lower body, upper push, core, upper pull, full body or cardio, then repeat.' },
            { title: 'Order them', body: 'Put the most technical or demanding exercises early.' },
            { title: 'Set rounds and rest', body: '2–4 rounds, 1–2 minutes between rounds.' },
            { title: 'Warm up and cool down', body: 'Five minutes of easy movement and drills before; easy walking and stretching after.' },
          ],
        },
        {
          t: 'example',
          title: 'Home circuit, no equipment (40 s on, 20 s off, 3 rounds)',
          lines: [
            { label: '1', text: 'Jumping jacks' },
            { label: '2', text: 'Squats' },
            { label: '3', text: 'Push-ups' },
            { label: '4', text: 'Reverse lunges' },
            { label: '5', text: 'Mountain climbers' },
            { label: '6', text: 'Glute bridges' },
            { label: '7', text: 'Plank' },
            { label: '8', text: 'Burpees' },
          ],
        },
      ],
    },
    {
      id: 'timer',
      title: 'Run it with the timer',
      blocks: [{ t: 'fit-tool', tool: 'timer' }],
    },
  ],
  sources: ['Morgan, R. E., & Adamson, G. T. (1957). *Circuit Training*. G. Bell and Sons.', 'Klika, B., & Jordan, C. (2013). High-intensity circuit training using body weight. *ACSM’s Health & Fitness Journal*, 17(3), 8–13.'],
  related: ['fitness/circuits/hiit', 'fitness/strength/programmes'],
}

export default guide
