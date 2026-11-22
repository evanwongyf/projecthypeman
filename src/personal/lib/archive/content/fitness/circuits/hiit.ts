import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'High-intensity interval training (HIIT) alternates short, hard efforts with recovery. It improves aerobic fitness in much less time than steady exercise, but "high intensity" really has to mean hard, and it should complement, not replace, easier training.',
  nutshell: [
    'Short hard bursts, full or partial recovery, repeated.',
    '**Tabata**: 8 × 20 seconds all-out, 10 seconds rest, 4 minutes in total. The original study used efforts at about 170% of VO2max.',
    'HIIT can raise VO2max and insulin sensitivity in a fraction of the time of steady training.',
    '2–3 sessions a week is plenty; more invites fatigue and injury.',
    'The "afterburn" (EPOC) is real but small: a few dozen extra calories, not hundreds.',
  ],
  sections: [
    {
      id: 'protocols',
      title: 'Common protocols',
      blocks: [
        {
          t: 'table',
          head: ['Protocol', 'Work / rest', 'Rounds', 'Intensity'],
          rows: [
            ['Tabata', '20 s / 10 s', '8 (4 min)', 'All-out'],
            ['Classic HIIT', '30–60 s / 30–90 s', '6–10', 'Very hard (RPE 8–9)'],
            ['Long intervals', '3–4 min / 2–3 min', '4–6', 'Hard (RPE 8)'],
            ['Sprint intervals (SIT)', '20–30 s / 2–4 min', '4–8', 'Maximal'],
            ['EMOM', 'A set of reps at the start of every minute; rest for the rest of it', '10–20', 'Moderate to hard'],
          ],
        },
        { t: 'fit-tool', tool: 'timer' },
      ],
    },
    {
      id: 'moves',
      title: 'Good HIIT exercises',
      blocks: [
        { t: 'exercises', ids: ['burpee', 'squat-jump', 'mountain-climber', 'high-knees', 'sprint', 'skater', 'jumping-jack', 'kettlebell-swing'] },
        {
          t: 'callout',
          tone: 'note',
          title: 'Is your "Tabata" really Tabata?',
          text: 'In Izumi Tabata’s 1996 study, trained athletes rode at about 170% of their VO2max: genuinely all-out. Most "Tabata classes" are excellent workouts, but at a lower intensity and with different results.',
        },
      ],
    },
    {
      id: 'who',
      title: 'Who it is for',
      blocks: [
        {
          t: 'dodont',
          do: ['Build a base of regular moderate exercise first.', 'Warm up thoroughly before hard efforts.', 'Choose low-impact options (bike, rower, hill walking) if joints complain.', 'Keep 48 hours between hard sessions.'],
          dont: ['Do HIIT every day.', 'Sacrifice form for speed on complex movements.', 'Start with all-out sprints if you have heart problems: get medical advice first.'],
        },
      ],
    },
  ],
  sources: [
    'Tabata, I., et al. (1996). Effects of moderate-intensity endurance and high-intensity intermittent training on anaerobic capacity and VO2max. *Medicine & Science in Sports & Exercise*, 28(10), 1327–1330.',
    'Gibala, M. J., et al. (2006). Short-term sprint interval versus traditional endurance training. *The Journal of Physiology*, 575(3), 901–911.',
    'Weston, K. S., Wisløff, U., & Coombes, J. S. (2014). High-intensity interval training in patients with lifestyle-induced cardiometabolic disease. *British Journal of Sports Medicine*, 48(16), 1227–1234.',
  ],
  related: ['fitness/circuits/circuit-training', 'fitness/running/workouts', 'fitness/running/physiology'],
}

export default guide
