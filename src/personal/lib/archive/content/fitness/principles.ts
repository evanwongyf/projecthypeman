import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'Every effective training plan, for running, lifting or anything else, follows the same few principles. Training is a stress; the body adapts to it during recovery; and to keep improving, the stress has to grow, gradually, in the way you want to improve.',
  nutshell: [
    '**Overload**: to improve, do a little more than your body is used to.',
    '**Progression**: increase it gradually: a bit more weight, distance or speed over weeks.',
    '**Specificity**: you get better at what you train. Runners run; lifters lift.',
    '**Recovery**: adaptation happens after training. Without rest, you just get tired.',
    '**Reversibility**: stop training and fitness fades, slowly at first.',
    '**Consistency** beats intensity: months of steady training beat a few heroic weeks.',
  ],
  sections: [
    {
      id: 'cycle',
      title: 'Stress, recover, adapt',
      blocks: [
        {
          t: 'cycle',
          items: [
            { name: 'Stress', body: 'A training session tires you and causes small amounts of damage and depletion.' },
            { name: 'Fatigue', body: 'Straight after, you are temporarily less fit.' },
            { name: 'Recovery', body: 'With rest, sleep and food, the body repairs itself.' },
            { name: 'Adaptation', body: 'It rebuilds a little stronger than before, ready for a bigger stress: supercompensation.' },
          ],
          caption: 'Train again once you have recovered, and the cycle repeats from a higher starting point.',
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Why rest days matter',
          text: 'If the next hard session comes before you have recovered, fatigue stacks up instead of fitness. Hard days should be followed by easy days.',
        },
      ],
    },
    {
      id: 'fitt',
      title: 'FITT: the four dials',
      blocks: [
        {
          t: 'cards',
          items: [
            { tag: 'F', title: 'Frequency', body: 'How often: sessions per week.' },
            { tag: 'I', title: 'Intensity', body: 'How hard: pace, heart rate, weight lifted, or how hard it feels.' },
            { tag: 'T', title: 'Time', body: 'How long: minutes, distance, or sets and reps.' },
            { tag: 'T', title: 'Type', body: 'What kind: running, cycling, lifting, circuits.' },
          ],
        },
        { t: 'p', text: 'To progress, turn **one dial at a time**, a little. Adding more runs, longer runs and faster runs all in the same week is a recipe for injury.' },
      ],
    },
    {
      id: 'effort',
      title: 'Measuring effort',
      blocks: [
        {
          t: 'table',
          head: ['RPE (0–10)', 'How it feels', 'Talk test', 'Typical use'],
          rows: [
            ['1–3', 'Very easy to easy', 'Can sing', 'Warm-up, recovery'],
            ['4–5', 'Comfortable', 'Full sentences', 'Easy runs, most endurance training'],
            ['6–7', 'Comfortably hard', 'Short sentences', 'Tempo, steady circuits'],
            ['8–9', 'Hard to very hard', 'A few words', 'Intervals, heavy sets'],
            ['10', 'Maximal', 'Cannot talk', 'Sprints, max attempts'],
          ],
          caption: 'Rating of perceived exertion (RPE) on a 0–10 scale. For lifting, "reps in reserve" (RIR) works well: an RPE 8 set leaves about 2 reps in the tank.',
        },
      ],
    },
    {
      id: 'periodise',
      title: 'Planning over months',
      blocks: [
        {
          t: 'levels',
          items: [
            { name: 'Base', body: 'Build volume and the habit, mostly at easy effort, with good technique.' },
            { name: 'Build', body: 'Add harder, more specific work: intervals, heavier lifting.' },
            { name: 'Peak', body: 'The most race- or test-specific training.' },
            { name: 'Taper', body: 'Cut volume, keep some intensity, arrive fresh.' },
          ],
          caption: 'Periodisation: training is organised in blocks that build on each other. Every 3–5 weeks, an easier "deload" week helps you absorb the work.',
        },
      ],
    },
  ],
  sources: [
    'American College of Sports Medicine. (2021). *ACSM’s Guidelines for Exercise Testing and Prescription* (11th ed.). Wolters Kluwer.',
    'Borg, G. (1998). *Borg’s Perceived Exertion and Pain Scales*. Human Kinetics.',
    'Issurin, V. B. (2010). New horizons for the methodology and physiology of training periodization. *Sports Medicine*, 40(3), 189–206.',
  ],
  related: ['fitness/recovery', 'fitness/running/plans', 'fitness/strength/basics'],
}

export default guide
