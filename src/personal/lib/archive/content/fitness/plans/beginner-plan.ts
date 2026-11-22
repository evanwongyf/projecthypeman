import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A beginner needs very little: a few basic movements, practised three times a week, with weights that rise a little each session. Most of the early gains come from learning the lifts and being consistent, not from clever programming. This guide gives a 12-week full-body plan in three phases, with sets, reps and the progression rule for each exercise, a home version using dumbbells and bands, how to warm up, how to know the weight is right, and what to expect from the first three months.',
  nutshell: [
    '**Three full-body sessions a week** on non-consecutive days (for example Monday, Wednesday, Friday), alternating Workout A and Workout B.',
    'Six to eight exercises per session; **2 sets in weeks 1 to 2, 3 sets from week 3**; stop most sets **2 to 3 reps short of failure** at first.',
    '**Progression rule:** when you complete all sets at the top of the rep range, add the smallest weight increase next session.',
    'Expect to **add weight or reps almost every session for 8 to 12 weeks**, then slow. Muscle gain of roughly 1 to 1.5% of body weight a month is realistic for a well-fed novice.',
    'A **home version** with dumbbells, a pull-up bar or a band gives the same pattern and results with a little more planning.',
  ],
  sections: [
    {
      id: 'setup',
      title: 'Before you start',
      lead: 'Safety and setup.',
      blocks: [
        {
          t: 'checklist',
          items: [
            'Complete a readiness questionnaire (the PAR-Q+) and talk to a doctor first if you have a heart or joint condition, are pregnant, or have not exercised for years and have symptoms.',
            'Learn each movement with light weights first, ideally with a coach or a gym induction (many ActiveSG gyms offer one).',
            'Warm up: 5 minutes of light cardio, then 1 to 2 lighter sets of the first exercise (see the warm-up guide).',
            'Write down every session: exercise, weight, reps.',
            'Eat enough protein (about 1.6 g per kg of body weight a day) and sleep 7 to 9 hours.',
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Pick the weight', text: 'For the first session, choose a weight you could lift about 5 times more than the target reps (an effort of RIR 4 to 5). Learning technique matters more than load. By week 3, aim for RIR 2 to 3 on all sets.' },
      ],
    },
    {
      id: 'plan',
      title: 'The 12-week plan (gym)',
      lead: 'Two workouts, alternating.',
      blocks: [
        {
          t: 'table',
          head: ['Workout A', 'Sets × reps', 'Workout B', 'Sets × reps'],
          rows: [
            ['Goblet squat or leg press', '3 × 8 to 12', 'Romanian deadlift (dumbbell or barbell)', '3 × 8 to 12'],
            ['Dumbbell bench press', '3 × 8 to 12', 'Seated dumbbell overhead press', '3 × 8 to 12'],
            ['Seated cable row', '3 × 8 to 12', 'Lat pulldown (or assisted pull-up)', '3 × 8 to 12'],
            ['Walking lunge or split squat', '2 × 8 to 12 each leg', 'Leg curl or glute bridge', '2 × 10 to 15'],
            ['Lateral raise', '2 × 12 to 15', 'Triceps pushdown', '2 × 10 to 15'],
            ['Plank', '3 × 30 to 45 s', 'Biceps curl', '2 × 10 to 15'],
            ['Calf raise', '2 × 12 to 20', 'Dead bug or cable crunch', '2 × 10 to 15'],
          ],
          caption: 'Week 1: Workout A on Monday, B on Wednesday, A on Friday; the next week begins with B. In weeks 1 to 2 do only two sets per exercise.',
        },
        {
          t: 'levels',
          caption: 'The three phases.',
          items: [
            { name: 'Weeks 1 to 4: learn', body: 'Two sets in weeks 1 and 2, three from week 3. Effort at RIR 3. Focus on technique and a full, controlled range. Expect soreness in the first two weeks.' },
            { name: 'Weeks 5 to 8: build', body: 'Three sets, RIR 2. Use double progression: add reps until the top of the range, then weight. Add a fourth set to one or two exercises if recovery is good.' },
            { name: 'Weeks 9 to 12: push, then deload', body: 'RIR 1 to 2 on the last set. In week 12 do two sets per exercise at the same weights (deload), then test: add a heavy-ish set of 5 to see how much stronger you are.' },
          ],
        },
        {
          t: 'example',
          title: 'What good progress looks like on the goblet squat',
          lines: [
            { label: 'Week 1', text: '10 kg × 10 reps × 2 sets, easy.' },
            { label: 'Week 3', text: '14 kg × 10 reps × 3 sets (RIR 3).' },
            { label: 'Week 6', text: '20 kg × 12, 12, 11 reps (top of range nearly reached).' },
            { label: 'Week 8', text: '24 kg × 10, 9, 9 after adding weight.' },
            { label: 'Week 12', text: '28 kg × 10 × 3. A 2.8× rise in the working weight across three months: typical for a novice.' },
          ],
        },
      ],
    },
    {
      id: 'home',
      title: 'The home version (dumbbells, bands, a bar)',
      lead: 'Same pattern, different tools.',
      blocks: [
        {
          t: 'table',
          head: ['Pattern', 'Gym exercise', 'Home alternative'],
          rows: [
            ['Squat', 'Goblet squat, leg press', 'Goblet squat with a dumbbell or backpack, then rear-foot-elevated split squat'],
            ['Hinge', 'Romanian deadlift', 'Dumbbell Romanian deadlift, single-leg RDL, band good morning'],
            ['Horizontal press', 'Dumbbell bench', 'Push-up (incline at first), dumbbell floor press'],
            ['Vertical press', 'Overhead press', 'Dumbbell overhead press, pike push-up'],
            ['Horizontal pull', 'Cable row', 'One-arm dumbbell row, band row, inverted row under a sturdy table'],
            ['Vertical pull', 'Lat pulldown', 'Band-assisted pull-up, doorway pull-up bar, band pulldown'],
            ['Shoulders, arms', 'Lateral raise, curls, pushdowns', 'Dumbbell lateral raise, curls, band pushdown or overhead extension'],
            ['Trunk', 'Cable crunch, plank', 'Plank, dead bug, hollow hold, hanging knee raise'],
          ],
        },
        { t: 'p', text: 'Adjustable dumbbells (2 to 24 kg or more) cover most of the plan. Because the weight steps are larger, progress by adding reps first, slowing the lowering phase to 3 seconds, adding a pause at the stretch, or using single-limb versions to increase the load on each limb. A resistance band set and a pull-up bar fill the remaining gaps cheaply. In a Singapore apartment, a mat, a pair of adjustable dumbbells and a band take little space, and heat and humidity favour an indoor session near a fan or air-conditioner.' },
      ],
    },
    {
      id: 'expect',
      title: 'What to expect',
      lead: 'Realistic outcomes.',
      blocks: [
        {
          t: 'table',
          head: ['After', 'Typical changes for a novice who trains consistently and eats enough protein'],
          rows: [
            ['2 to 4 weeks', 'Strength rises quickly from learning; movements feel smoother; soreness fades'],
            ['6 to 8 weeks', 'Noticeable strength gains (often 20 to 40% on the main lifts); some visible muscle in the arms and shoulders'],
            ['12 weeks', 'A clearer change in shape; 1 to 3 kg of lean mass is typical; confidence with the lifts'],
          ],
          caption: 'Individual results vary with sleep, diet, genetics and consistency.',
        },
        { t: 'p', text: 'After 12 weeks, repeat the plan with heavier weights, or move to an upper–lower split if you can train four days. If you stall for several weeks, see the troubleshooting guide. If progress is slower than described, check calories and protein, sleep and that sets are close to failure.' },
      ],
    },
  ],
  sources: [
    'American College of Sports Medicine (2009). Progression models in resistance training for healthy adults. *Medicine & Science in Sports & Exercise*, 41(3).',
    'Warburton, D. E. R., Jamnik, V. K., Bredin, S. S. D. & Gledhill, N. (2011). The Physical Activity Readiness Questionnaire for Everyone (PAR-Q+). *Health & Fitness Journal of Canada*, 4(2).',
    'Rhea, M. R., Alvar, B. A., Burkett, L. N. & Ball, S. D. (2003). A meta-analysis to determine the dose response for strength development. *Medicine & Science in Sports & Exercise*, 35(3).',
    'Morton, R. W. et al. (2018). A systematic review, meta-analysis and meta-regression of the effect of protein supplementation on resistance training-induced gains in muscle mass and strength. *British Journal of Sports Medicine*, 52(6).',
    'Sport Singapore (ActiveSG): gym induction and programmes (activesg.gov.sg).',
  ],
  related: ['fitness/plans/choosing-a-split', 'fitness/plans/intermediate-plan', 'fitness/warm-up', 'fitness/strength/basics', 'fitness/muscle-nutrition/protein-for-muscle'],
}

export default guide
