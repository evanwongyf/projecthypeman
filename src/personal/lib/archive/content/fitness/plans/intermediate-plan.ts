import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Once you have trained consistently for six months or so, simple weight increases every session stop working. Progress needs more weekly volume, planned effort and a longer view. This guide gives a four-day upper–lower plan in full, with the weekly set count for each muscle calculated, a six-day push–pull–legs outline, a six-week mesocycle with a volume ramp and a deload, and rules for when to add sets, change exercises or reduce volume.',
  nutshell: [
    '**Upper / lower, four days**: each muscle twice a week, about 17 to 18 sets per session.',
    'The plan gives roughly **8 to 12 direct weekly sets** for most muscles (more for back and quads, fewer for arms, which also get indirect work).',
    'Use **double progression** and **reps in reserve**: 3 RIR in week 1 of a block, 1 RIR by week 4 or 5.',
    '**Ramp volume** by one set per exercise across the block, then deload; start the next block slightly above the last.',
    'Move to **push–pull–legs (6 days)** only if you can recover from the higher volume and attend reliably.',
  ],
  sections: [
    {
      id: 'ul',
      title: 'A four-day upper–lower plan',
      lead: 'Two upper and two lower sessions.',
      blocks: [
        {
          t: 'table',
          head: ['Upper A', 'Sets × reps', 'Upper B', 'Sets × reps'],
          rows: [
            ['Incline dumbbell press', '3 × 6 to 10', 'Flat bench press', '3 × 6 to 10'],
            ['Chest-supported row', '3 × 8 to 12', 'One-arm dumbbell row', '3 × 8 to 12'],
            ['Lat pulldown', '3 × 8 to 12', 'Pull-up (or assisted)', '3 × 6 to 10'],
            ['Seated dumbbell overhead press', '2 × 8 to 12', 'Cable fly', '2 × 12 to 15'],
            ['Lateral raise', '3 × 12 to 20', 'Rear-delt fly', '3 × 12 to 20'],
            ['Overhead triceps extension', '2 × 10 to 15', 'Triceps pushdown', '2 × 10 to 15'],
            ['Incline dumbbell curl', '2 × 10 to 15', 'Hammer curl', '2 × 10 to 15'],
          ],
        },
        {
          t: 'table',
          head: ['Lower A', 'Sets × reps', 'Lower B', 'Sets × reps'],
          rows: [
            ['Back squat', '3 × 6 to 10', 'Hip thrust', '3 × 6 to 10'],
            ['Romanian deadlift', '3 × 8 to 12', 'Bulgarian split squat', '3 × 8 to 12 each leg'],
            ['Leg press', '2 × 10 to 15', 'Leg extension', '3 × 12 to 15'],
            ['Seated leg curl', '3 × 10 to 15', 'Lying leg curl', '2 × 10 to 15'],
            ['Standing calf raise', '3 × 8 to 15', 'Seated calf raise', '3 × 12 to 20'],
            ['Cable crunch', '3 × 10 to 15', 'Hanging leg raise', '3 × 10 to 15'],
          ],
          caption: 'Schedule: Monday Upper A, Tuesday Lower A, Thursday Upper B, Friday Lower B. Rest between sets 2 to 3 minutes for the first exercises, 1 to 2 for the rest. A session takes about 60 to 75 minutes.',
        },
        {
          t: 'bars',
          title: 'Direct hard sets per muscle per week in this plan',
          unit: 'sets',
          min: 0,
          max: 14,
          decimals: 0,
          items: [
            { label: 'Back', value: 12 },
            { label: 'Quadriceps', value: 11 },
            { label: 'Chest', value: 8 },
            { label: 'Shoulders (lateral and rear delts, press)', value: 8 },
            { label: 'Hamstrings', value: 8 },
            { label: 'Calves', value: 6 },
            { label: 'Abdominals', value: 6 },
            { label: 'Triceps (plus about 10 indirect from pressing)', value: 4 },
            { label: 'Biceps (plus indirect from rows and pulldowns)', value: 4 },
            { label: 'Glutes (plus squats and RDL)', value: 3 },
          ],
          caption: 'Counted from the tables above: each set is counted for its main muscle. Arms and glutes also receive indirect work from compound lifts, so their totals are higher in practice. If you want to prioritise a muscle, add 2 to 4 sets to it.',
        },
      ],
    },
    {
      id: 'block',
      title: 'A six-week block with a volume ramp',
      lead: 'Wave your training.',
      blocks: [
        {
          t: 'table',
          head: ['Week', 'Sets', 'Effort', 'Progression'],
          rows: [
            ['1', 'As in the table (baseline)', 'RIR 3', 'Start the double progression at the bottom of each rep range'],
            ['2', 'Same sets', 'RIR 2 to 3', 'Add reps; hold weights'],
            ['3', 'Add 1 set to each main exercise (not abs)', 'RIR 2', 'Add reps; increase weight when the top of the range is reached on all sets'],
            ['4', 'Same as week 3', 'RIR 1 to 2', 'Push the main lifts; last set close to failure on isolation lifts'],
            ['5', 'Add 1 set to the muscles that recovered well', 'RIR 1', 'Peak volume and effort'],
            ['6 (deload)', 'Half the sets', 'RIR 4', 'Weights as week 3; recover; test new maxes if you like'],
          ],
        },
        {
          t: 'math',
          tex: String.raw`\text{weekly sets}_{n+1}=\text{weekly sets}_n+\Delta,\qquad \Delta\in\{1,2\}\ \text{per muscle, if recovery allows}`,
          caption: 'A rule for ramping volume across a block: add one or two sets per muscle, only when the previous week was recovered from.',
          where: [{ sym: '\\Delta', def: 'the number of sets added per muscle group in a week' }],
          syntax: [{ sym: '+\\Delta', say: 'a small, steady increase. Effect: gives progressive overload through sets when reps and weight rise more slowly. Why: a few extra sets are a modest stimulus; jumping up many at once risks excess fatigue.' }],
          worked: {
            title: 'Back volume over six weeks',
            steps: ['Week 1: 12 sets. Week 3: +1 set on three exercises = 15. Week 5: +1 on two more = 17. Week 6: deload to about 8 or 9.', 'Next block begins at 13 or 14 sets, an increase of one or two sets over the last block’s start.'],
            answer: 'Over 18 weeks, baseline volume rises from 12 to 15 sets per week, with matching increases in load: a sustainable path for an intermediate.',
          },
        },
      ],
    },
    {
      id: 'ppl',
      title: 'Push–pull–legs, six days',
      lead: 'An option for higher volume.',
      blocks: [
        {
          t: 'table',
          head: ['Day', 'Session', 'Main work'],
          rows: [
            ['1', 'Push A', 'Incline press, overhead press, cable fly, lateral raise, triceps extension'],
            ['2', 'Pull A', 'Pull-up or pulldown, chest-supported row, rear-delt fly, hammer curl'],
            ['3', 'Legs A', 'Squat, Romanian deadlift, leg extension, leg curl, calf raise'],
            ['4', 'Push B', 'Flat press, dips or machine press, lateral raise, pushdown'],
            ['5', 'Pull B', 'Row, pulldown, face pull, incline curl'],
            ['6', 'Legs B', 'Hip thrust, split squat, leg press, leg curl, calf raise'],
            ['7', 'Rest', ''],
          ],
          caption: 'Each muscle twice a week with 12 to 20 sets per week. Takes about 6 hours of gym time a week; recovery and nutrition must keep up.',
        },
        { t: 'callout', tone: 'warn', title: 'More is not automatically better', text: 'Six days adds volume, which helps only if you recover from it. If sleep, food or stress are limited, upper–lower with the same exercises usually gives similar results with less fatigue. Run six days for a short block, and return to four if performance falls.' },
      ],
    },
  ],
  sources: [
    'Schoenfeld, B. J., Ogborn, D. & Krieger, J. W. (2017). Dose-response relationship between weekly resistance training volume and increases in muscle mass. *Journal of Sports Sciences*, 35(11).',
    'Israetel, M. et al. (2019–2021). Renaissance Periodization volume landmarks and mesocycle templates (practitioner framework).',
    'Helms, E. R., Cronin, J., Storey, A. & Zourdos, M. C. (2016). Application of the repetitions in reserve-based rating of perceived exertion scale for resistance training. *Strength and Conditioning Journal*, 38(4).',
    'Pelland, J. C. et al. (2024). The resistance training dose-response: meta-regressions exploring the effects of weekly volume and frequency on muscle hypertrophy and strength gain. *SportRxiv* preprint.',
  ],
  related: ['fitness/plans/choosing-a-split', 'fitness/plans/beginner-plan', 'fitness/muscle/progressive-overload-and-volume', 'fitness/muscle/periodisation-and-recovery', 'fitness/plans/tracking-and-troubleshooting'],
}

export default guide
