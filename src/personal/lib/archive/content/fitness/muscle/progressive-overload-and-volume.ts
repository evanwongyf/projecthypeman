import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Progressive overload means asking your body to do slightly more than it has done before, week after week, so there is always a reason to adapt. It sounds obvious and is the single most common thing missing from stalled programmes. This guide explains the ways to overload (load, reps, sets, quality), a simple system called double progression, how to use reps in reserve to control effort, how to set and adjust weekly volume per muscle, and when to take a deload.',
  nutshell: [
    '**Overload** can be more weight, more reps with the same weight, more sets, better technique through a fuller range of motion, or shorter rest. The simplest and most reliable is **adding reps, then weight**.',
    '**Double progression**: work in a rep range (for example 8 to 12). When you reach the top of the range on all sets, raise the weight and start at the bottom again.',
    'Control effort with **reps in reserve (RIR)**: most working sets at RIR 1 to 3, with effort rising across a block.',
    'Start around **10 hard sets per muscle per week**, add sets when progress stalls and you are recovering well, and **cut back or deload** when performance falls for two sessions in a row.',
    '**Log every session.** If you cannot say what you lifted last week, you cannot progress it on purpose.',
  ],
  sections: [
    {
      id: 'overload',
      title: 'Ways to overload',
      lead: 'There is more than one lever.',
      blocks: [
        {
          t: 'table',
          head: ['Lever', 'How', 'Best for', 'Watch out for'],
          rows: [
            ['Load', 'Add weight (smallest plates, 1 to 2.5 kg for lower body, 0.5 to 2 kg for upper)', 'Compound lifts', 'Technique breakdown if increments are too big'],
            ['Reps', 'Do one more rep with the same weight', 'Isolation lifts, bodyweight work', 'Reps at the cost of range of motion or control do not count'],
            ['Sets', 'Add a set to a muscle’s weekly volume', 'When load and reps have plateaued and you recover well', 'Recovery limits; diminishing returns'],
            ['Range of motion and control', 'Deeper, with a pause or a slower lowering phase', 'Joint-friendly progress; technique', 'Harder to measure'],
            ['Density', 'Same work in less time (shorter rests)', 'Time-limited sessions', 'Too little rest reduces performance on the next set'],
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Count only clean reps', text: 'A rep counts when it is done through the full planned range, at a controlled speed, with the same form as your first rep. Progress achieved by shortening the movement or bouncing the weight is not progress: it just makes the exercise easier.' },
      ],
    },
    {
      id: 'double',
      title: 'Double progression and reps in reserve',
      lead: 'A system you can use tomorrow.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Choose a rep range per exercise', body: 'Typically 5 to 8 for heavy compounds, 8 to 12 for most lifts, 12 to 20 for isolation and joints that dislike heavy loads.' },
            { title: 'Pick a weight and stop at about RIR 2', body: 'On the first session, use a load you can do for the bottom of the range with about 2 reps left.' },
            { title: 'Add reps each session', body: 'Try for one more rep on one or more sets each session, keeping RIR in the same zone.' },
            { title: 'Add weight at the top of the range', body: 'When every set reaches the top of the range at the target RIR, add the smallest increment of weight. Reps will fall to the bottom of the range; repeat.' },
            { title: 'Reset if stuck', body: 'If you cannot add a rep for three sessions, check sleep, food and technique; then try a deload or a small change in exercise.' },
          ],
        },
        {
          t: 'example',
          title: 'Eight weeks of a dumbbell press (range 8 to 12, three sets)',
          lines: [
            { label: 'Week 1', text: '20 kg: 8, 8, 7 reps (RIR 2 on the last set).' },
            { label: 'Week 2', text: '20 kg: 9, 8, 8.' },
            { label: 'Week 3', text: '20 kg: 10, 9, 9.' },
            { label: 'Week 4', text: '20 kg: 11, 10, 9.' },
            { label: 'Week 5', text: '20 kg: 12, 11, 10 (one set short of the top).' },
            { label: 'Week 6', text: '20 kg: 12, 12, 12. All sets at the top: add weight.' },
            { label: 'Week 7', text: '22 kg: 9, 8, 8 (back near the bottom of the range).' },
            { label: 'Result', text: 'In six weeks, the load rose about 10% and total reps rose too. That is how a plan accumulates progress without any single big jump.' },
          ],
        },
        {
          t: 'math',
          tex: String.raw`e1RM \approx w\,(1+\tfrac{r}{30})\ \ \text{(Epley)},\qquad \text{volume load}=\sum_{\text{sets}} w\times r`,
          caption: 'An estimate of your one-rep max from a set, and the total load lifted.',
          where: [{ sym: 'w', def: 'the weight lifted' }, { sym: 'r', def: 'the number of repetitions completed' }],
          syntax: [
            { sym: '1+r/30', say: 'a rough correction for the number of reps. Effect: a set of 10 estimates a maximum about 33% above the weight. Why: empirical: as reps rise, the weight you can use falls in a regular way. It is less accurate above about 10 reps.' },
            { sym: '\\sum w\\times r', say: 'volume load: weight times reps, added across sets. Effect: a single number for how much work was done. Why: useful for comparing weeks with different sets and reps, though it ignores proximity to failure.' },
          ],
          worked: {
            title: 'Comparing two sessions',
            steps: ['Week 1: 3 × (20 kg × 8, 8, 7) = 20 × 23 = 460 kg of volume load; best set estimates \\(20(1+8/30)=25.3\\) kg.', 'Week 6: 3 × (20 kg × 12) = 720 kg; best set \\(20(1+12/30)=28\\) kg.'],
            answer: 'Volume load rose 57% and the estimated maximum rose 11% over five weeks. Log both: the second is easier to compare across exercises.',
          },
        },
      ],
    },
    {
      id: 'volume',
      title: 'Setting weekly volume',
      lead: 'Sets per muscle, per week.',
      blocks: [
        { t: 'p', text: 'Think of volume in terms of **hard sets** (taken within about 0 to 3 reps of failure) per muscle group per week. Practitioners describe landmarks, which are heuristics rather than laws: a **maintenance** volume (about 4 to 6 sets a week keeps the muscle you have), a **minimum effective** volume (about 6 to 10 sets, where growth starts), an **adaptive range** (roughly 10 to 20 sets for most people) and a **maximum recoverable** volume (beyond which performance and mood fall). Where you sit depends on your experience, sleep, nutrition and stress.' },
        { t: 'fit-lab', viz: 'volume' },
        {
          t: 'levels',
          caption: 'A way to build volume across a 4 to 6 week block, from conservative to heavy.',
          items: [
            { name: 'Week 1: start low', body: 'About 8 to 10 sets per muscle at RIR 3. A baseline to see how you recover.' },
            { name: 'Weeks 2 to 3: add sets', body: 'Add 1 to 2 sets for muscles that recovered fully and feel under-trained; keep RIR 2.' },
            { name: 'Weeks 4 to 5: push', body: 'Close to your top volume, RIR 1 to 2. Expect soreness and fatigue to creep up.' },
            { name: 'Week 6: deload', body: 'Cut sets by about half and stop at RIR 4 or more; keep the weight. Come back fresh and start the next block a little higher than the last.' },
          ],
        },
        { t: 'dodont', do: ['Add volume gradually, a set or two at a time.', 'Prioritise one or two lagging muscles with more volume and give others maintenance-to-moderate volume.', 'Keep a record of sets per muscle per week.'], dont: ['Jump from 6 to 25 weekly sets.', 'Count warm-up sets or very easy sets as hard sets.', 'Add volume when the real problem is sleep or food.'] },
      ],
    },
    {
      id: 'deload',
      title: 'When to cut back',
      lead: 'Signs and fixes.',
      blocks: [
        {
          t: 'checklist',
          items: [
            'Performance has fallen for two or more sessions in a row on the same exercises.',
            'Joints or tendons ache beyond normal muscle soreness.',
            'You dread sessions, your sleep is poor, or your resting heart rate is up for several days.',
            'Weights that felt like RIR 2 now feel like RIR 0.',
            'You have trained hard for 4 to 8 weeks without a lighter week.',
          ],
        },
        { t: 'p', text: 'A **deload** is a planned easier week: reduce sets by 30 to 50%, keep the exercises and technique, stop well short of failure. Evidence for deloads is limited (they are mostly practitioner experience), but taking one costs little and many trainees find they return stronger. An alternative is to reduce volume only when your data say so. See the next guide on periodisation for planning blocks.' },
      ],
    },
  ],
  sources: [
    'Schoenfeld, B. J., Ogborn, D. & Krieger, J. W. (2017). Dose-response relationship between weekly resistance training volume and increases in muscle mass. *Journal of Sports Sciences*, 35(11).',
    'Zourdos, M. C. et al. (2016). Novel resistance training-specific rating of perceived exertion scale measuring repetitions in reserve. *Journal of Strength and Conditioning Research*, 30(1).',
    'Epley, B. (1985). *Poundage Chart*. Boyd Epley Workout.',
    'Israetel, M., Hoffmann, J. & Smith, C. (2015). *Scientific Principles of Hypertrophy Training* (volume landmarks; practitioner framework).',
    'Bell, L. et al. (2023). Integrating deloading into strength and physique sports training programmes: an international Delphi consensus approach. *Sports Medicine – Open*, 9.',
  ],
  related: ['fitness/muscle/hypertrophy-science', 'fitness/muscle/periodisation-and-recovery', 'fitness/plans/intermediate-plan', 'fitness/principles', 'fitness/plans/tracking-and-troubleshooting'],
}

export default guide
