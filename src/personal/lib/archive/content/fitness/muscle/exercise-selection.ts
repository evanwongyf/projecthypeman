import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Good exercise selection means choosing movements that load the muscle you want through a long range, that you can perform safely and progress for months, and that fit the equipment you have. There is no single best exercise, but there are good principles: base the programme on a few compound lifts, add isolation work for muscles the big lifts under-train, favour exercises that stretch the muscle under load, and keep the ones you can progress. This guide gives a muscle-by-muscle selection table, explains compound and isolation work, summarises the research on the stretched position and range of motion, and gives technique rules that apply to every lift.',
  nutshell: [
    '**Compound** lifts (squat, press, row, deadlift variations) train several muscles together and allow heavy loading; **isolation** lifts (curls, lateral raises, leg extensions) fill gaps and add volume with less fatigue.',
    'Pick exercises that put the **target muscle under tension through a large range of motion, especially the lengthened position**: emerging evidence shows stretched-position loading can be especially effective.',
    'Choose **movements you can progress and repeat**, with a stable base and a path of motion that suits your body; the "best" exercise is the one you can do well and keep doing.',
    'A good week covers **every major muscle at least twice** using 2 to 3 exercises per muscle group.',
    'Technique rules: control the lowering phase, use a full range you can own, keep joints stacked, and stop a set when form breaks.',
  ],
  sections: [
    {
      id: 'types',
      title: 'Compound and isolation lifts',
      lead: 'Different jobs.',
      blocks: [
        {
          t: 'table',
          head: ['', 'Compound', 'Isolation'],
          rows: [
            ['Joints moved', 'Several (e.g. hip, knee and ankle in a squat)', 'One (e.g. elbow in a curl)'],
            ['Muscles trained', 'Many at once', 'Mainly one'],
            ['Loading', 'Heavy; strength can rise quickly', 'Lighter; finer control of the target'],
            ['Fatigue cost', 'High: systemic and joint load', 'Low: easy to add volume'],
            ['Examples', 'Squat, leg press, bench or dumbbell press, overhead press, row, pull-up, Romanian deadlift', 'Leg extension, leg curl, lateral raise, cable fly, biceps curl, triceps extension, calf raise'],
            ['Role in a plan', 'The foundation of most sessions', 'Fill-ins for lagging or small muscles'],
          ],
        },
        { t: 'p', text: 'Compounds give the most return for the time, but they have limits: the weakest muscle in the chain limits the load (arms and shoulders in a bench press, the lower back in a heavy row), so the muscle you want to grow may not be trained to its limit. Adding isolation exercises makes up for that and also lets you train close to failure with less fatigue. A reasonable split is two to three compound exercises and one to three isolation exercises per session.' },
      ],
    },
    {
      id: 'stretch',
      title: 'The lengthened position and range of motion',
      lead: 'Where the muscle is loaded matters.',
      blocks: [
        { t: 'p', text: 'Muscles produce force in a stretched position too, and several studies suggest that training at **long muscle lengths** produces more growth than the same training at short lengths. Maeo and colleagues (2021, 2023) found that overhead triceps extensions, which stretch the long head, produced greater triceps growth than pushdowns; research on leg curls (seated versus lying), calf raises and others points the same way. Training through a **full range** is generally at least as good as partial reps for hypertrophy, and **lengthened partials** (using only the bottom half) look promising. The research is short-term and mostly on single muscles, so treat it as a useful preference, not a rule.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Pick the stretched variation', tag: 'when you can', body: 'Incline dumbbell curls over standing curls; overhead cable triceps extensions over pushdowns; seated leg curls over lying; Romanian deadlifts over stiff-legged raises with a short range.' },
            { title: 'Own the bottom position', tag: 'control', body: 'Pause briefly in the stretched position, or lower slowly, to avoid bouncing out of it; this also protects joints.' },
            { title: 'Do not force range', tag: 'safety', body: 'A range you cannot control, or that pinches a joint, is not better. Use the range where the target muscle works and the joint is comfortable.' },
            { title: 'Variety over time', tag: 'practical', body: 'Rotating between two or three variations for a muscle over a year covers different parts of it and reduces repetitive-strain risks.' },
          ],
        },
      ],
    },
    {
      id: 'table',
      title: 'A muscle-by-muscle guide',
      lead: 'Choose one or two from each row.',
      blocks: [
        {
          t: 'table',
          head: ['Muscle', 'Compound options', 'Isolation or stretch options', 'Notes'],
          rows: [
            ['Quadriceps', 'Back or goblet squat, leg press, split squat', 'Leg extension', 'Deep range, knees tracking over toes'],
            ['Hamstrings', 'Romanian deadlift, good morning (light)', 'Seated leg curl, Nordic curl', 'Hinge with a flat back; stretch under load'],
            ['Glutes', 'Hip thrust, split squat, deep squat, Romanian deadlift', 'Cable kickback, hip abduction', 'Full hip extension; do not hyperextend the lower back'],
            ['Calves', '(Walking and jumping)', 'Standing and seated calf raise', 'Pause at the stretch; high reps (10 to 20)'],
            ['Chest', 'Dumbbell or barbell bench (flat and incline), dips', 'Cable fly, pec-deck', 'Shoulders set back and down; deep stretch with control'],
            ['Back', 'Pull-up or lat pulldown, chest-supported row, one-arm row', 'Straight-arm pulldown, rear-delt fly', 'Vertical and horizontal pulls both; pull the elbows, not the hands'],
            ['Shoulders', 'Overhead press (dumbbell or machine)', 'Lateral raise (cable or dumbbell), rear-delt fly', 'Lateral and rear delts often need extra volume'],
            ['Biceps', 'Chin-up, row (helps)', 'Incline curl, preacher curl, hammer curl', 'Stretched-position curls look best'],
            ['Triceps', 'Close-grip press, dips', 'Overhead extension, pushdown', 'Overhead extension for the long head'],
            ['Abdominals and trunk', 'Carries, loaded planks, deadlifts', 'Cable crunch, hanging leg raise, ab wheel', 'Brace; avoid just doing high-rep floor crunches'],
          ],
        },
        { t: 'p', text: 'For most people, a sensible starting set is: one squat or leg-press pattern, one hinge, one horizontal press, one vertical or incline press, one horizontal row, one vertical pull, then lateral raises, a curl, a triceps extension, a calf raise and an ab exercise. They fit comfortably into two or three sessions a week (see the plans). See the strength section of this shelf for form guides and 3D animations of the lifts.' },
      ],
    },
    {
      id: 'tech',
      title: 'Technique rules that apply everywhere',
      lead: 'A short checklist.',
      blocks: [
        {
          t: 'checklist',
          items: [
            'Stable base: feet, back or seat set before the first rep.',
            'Brace the trunk (a deep breath into the belly, tight abdominals) for heavy lower-body and pressing lifts.',
            'Lower under control for about 2 to 3 seconds; do not drop the weight.',
            'Use a range you can control, and do the same range each session so progress is comparable.',
            'Keep the wrist over the elbow, and the knee in line with the toes.',
            'Stop the set when technique fails, not just when the muscle burns.',
            'Warm up with two or three lighter sets of the first exercise.',
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Training in Singapore', text: 'Public ActiveSG gyms, condo gyms and CCs mostly stock dumbbells, cable stations and a few selectorised machines, which cover most of the table. If barbell space is crowded, dumbbell and machine versions of the compounds are good substitutes. Plan around the heat if you train outdoors (see the endurance shelf).' },
      ],
    },
  ],
  sources: [
    'Maeo, S. et al. (2021). Triceps brachii hypertrophy is substantially greater after elbow extension training performed in the overhead versus neutral arm position. *European Journal of Sport Science*, 23(7).',
    'Pedrosa, G. F. et al. (2022). Partial range of motion training elicits favorable improvements in muscular adaptations when carried out at long muscle lengths. *European Journal of Sport Science*, 22(8).',
    'Schoenfeld, B. J. & Grgic, J. (2020). Effects of range of motion on muscle development during resistance training interventions: a systematic review. *SAGE Open Medicine*, 8.',
    'Oranchuk, D. J. et al. (2019). Isometric training and long-term adaptations: effects of muscle length, intensity, and intent. *Scandinavian Journal of Medicine & Science in Sports*, 29(4).',
    'Contreras, B. (2013). *Bodyweight Strength Training Anatomy*; Schoenfeld, B. (2016). *Science and Development of Muscle Hypertrophy*. Human Kinetics.',
  ],
  related: ['fitness/muscle/hypertrophy-science', 'fitness/strength/lower-body', 'fitness/strength/upper-body', 'fitness/strength/core', 'fitness/plans/choosing-a-split'],
}

export default guide
