import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Strength training makes muscles, bones and tendons stronger, protects against injury, and helps nearly every sport. The fundamentals are simple: lift with good form, close enough to your limit that it is challenging, and add a little more over time.',
  nutshell: [
    'A **rep** is one lift; a **set** is a group of reps. "3 × 8" means 3 sets of 8.',
    '**Strength**: heavy sets of 1–6 reps. **Muscle size**: sets of about 6–30 reps taken close to failure. **Endurance**: lighter, higher reps.',
    'Most sets should end with **1–3 reps in reserve** (RIR): hard, but with good form.',
    'Aim for about **10 or more hard sets per muscle group per week**, spread over 2 or more sessions.',
    'Progress by adding a rep, then a little weight: **double progression**.',
  ],
  sections: [
    {
      id: 'goals',
      title: 'Reps, sets and goals',
      blocks: [
        {
          t: 'table',
          head: ['Goal', 'Reps per set', 'Load (% of 1RM)', 'Rest', 'Sets per exercise'],
          rows: [
            ['Maximal strength', '1–6', '80–100%', '2–5 min', '3–6'],
            ['Muscle size (hypertrophy)', '6–15 (up to 30 works)', '60–85%', '1–3 min', '3–5'],
            ['Muscular endurance', '15+', 'Under 60%', '30–90 s', '2–3'],
            ['Power', '1–5, fast', '30–70%, moved explosively', '2–5 min', '3–5'],
          ],
          caption: 'Muscle grows across a wide range of reps as long as sets are taken close to failure. Heavier loads build more maximal strength.',
        },
        { t: 'fit-tool', tool: 'one-rep-max' },
      ],
    },
    {
      id: 'effort',
      title: 'How hard should a set be?',
      blocks: [
        {
          t: 'terms',
          items: [
            { term: 'RIR (reps in reserve)', def: 'How many more good reps you could have done. RIR 2 means you stopped two short of failure.' },
            { term: 'RPE (for lifting)', def: '10 = no more reps possible; 9 = one left; 8 = two left.' },
            { term: 'Failure', def: 'When you cannot complete another rep with good form. Useful occasionally on safe exercises; not needed every set.' },
          ],
        },
      ],
    },
    {
      id: 'progress',
      title: 'Progressing',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Pick a rep range', body: 'For example, 8–12 reps.' },
            { title: 'Add reps', body: 'Use the same weight each session and try to add a rep or two.' },
            { title: 'Add weight', body: 'When you hit the top of the range on every set, increase the weight slightly (2.5–5% or the smallest jump available) and start again at the bottom.' },
            { title: 'Deload', body: 'Every 4–8 weeks, or when progress stalls and you feel run down, take a lighter week.' },
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Beginner gains',
          text: 'In your first 6–12 months, strength rises quickly, much of it from your nervous system learning to use the muscle. Simple programmes work brilliantly; save complexity for later.',
        },
      ],
    },
    {
      id: 'form',
      title: 'Form and safety',
      blocks: [
        {
          t: 'dodont',
          do: ['Learn each lift with a light weight or bodyweight first.', 'Brace your trunk on heavy lifts: breathe in, tighten, then lift.', 'Use safety bars or a spotter for heavy squats and bench presses.', 'Control the lowering; do not drop into positions.'],
          dont: ['Ego lift: add weight only when form is solid.', 'Train through sharp pain.', 'Copy advanced lifters’ programmes in your first year.'],
        },
        { t: 'exercises', ids: ['squat', 'push-up', 'deadlift'] },
      ],
    },
  ],
  sources: [
    'American College of Sports Medicine. (2009). Progression models in resistance training for healthy adults. *Medicine & Science in Sports & Exercise*, 41(3), 687–708.',
    'Schoenfeld, B. J., Grgic, J., Ogborn, D., & Krieger, J. W. (2017). Strength and hypertrophy adaptations between low- vs. high-load resistance training. *Journal of Strength and Conditioning Research*, 31(12), 3508–3523.',
    'Schoenfeld, B. J., Ogborn, D., & Krieger, J. W. (2017). Dose-response relationship between weekly resistance training volume and increases in muscle mass. *Journal of Sports Sciences*, 35(11), 1073–1082.',
    'Zourdos, M. C., et al. (2016). Novel resistance training-specific rating of perceived exertion scale measuring repetitions in reserve. *Journal of Strength and Conditioning Research*, 30(1), 267–275.',
  ],
  related: ['fitness/strength/programmes', 'fitness/strength/lower-body', 'fitness/fuel'],
}

export default guide
