import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A training split is how you divide the muscles across the week. Full body, upper and lower, push-pull-legs and body-part splits all work; they differ in how often each muscle is trained, how many exercises fit into a session and how well they suit your schedule. The research finding that matters most is that weekly volume and effort decide results, not the split, so the best one is the one you can follow consistently. This guide compares the main options, shows the arithmetic of sets per muscle, and helps you choose by days available and experience.',
  nutshell: [
    '**Full body** (2 to 4 days): every muscle each session; high frequency, lower volume per session; ideal for beginners and busy weeks.',
    '**Upper / lower** (4 days): each muscle twice a week; balanced volume and recovery; a good default for intermediates.',
    '**Push / pull / legs** (3 or 6 days): groups muscles by movement; 6 days gives each twice a week with higher volume, 3 days once.',
    '**Body-part split** (5 days): one muscle per day, once a week; easy to focus but frequency is low and missed days cost more.',
    'Choose by **days you can train reliably**, aiming for **each muscle two times a week** with about 10 or more hard sets a week.',
  ],
  sections: [
    {
      id: 'compare',
      title: 'The main splits',
      lead: 'What you do on each day.',
      blocks: [
        {
          t: 'table',
          head: ['Split', 'Days', 'Frequency per muscle', 'Example', 'Strengths', 'Weaknesses'],
          rows: [
            ['Full body', '2 to 4', '2 to 4 times', 'A: squat, press, row, curl; B: deadlift, incline press, pulldown, triceps', 'Frequent practice; flexible; missed day costs little', 'Long sessions if you add volume; fatigue accumulates'],
            ['Upper / lower', '4', '2 times', 'Upper A, Lower A, Upper B, Lower B', 'Balanced, efficient, flexible', 'Sessions can be long; abs, arms need space'],
            ['Push / pull / legs', '3 or 6', '1 (3 days) or 2 (6 days)', 'Push: chest, shoulders, triceps; Pull: back, biceps; Legs', 'Clear organisation; high volume at 6 days', '6 days is a big commitment; one missed day hurts'],
            ['Body-part ("bro") split', '5', '1 time', 'Chest, back, legs, shoulders, arms', 'Lots of volume and focus per muscle in one session', 'Low frequency; each session is very long and tiring'],
            ['Hybrid or custom', '3 to 5', '2 times', 'Upper, lower, push, pull, legs', 'Flexible', 'Needs planning to avoid overlap'],
          ],
        },
        {
          t: 'bars',
          title: 'Times each muscle is trained per week',
          unit: 'sessions',
          min: 0,
          max: 4,
          decimals: 0,
          items: [
            { label: 'Full body, 3 days', value: 3 },
            { label: 'Upper / lower, 4 days', value: 2 },
            { label: 'Push / pull / legs, 6 days', value: 2 },
            { label: 'Push / pull / legs, 3 days', value: 1 },
            { label: 'Body-part split, 5 days', value: 1 },
          ],
          caption: 'A frequency of two or more is a convenient way to spread weekly volume without very long sessions, though total volume matters more than the split.',
        },
      ],
    },
    {
      id: 'maths',
      title: 'Sets per session and per week',
      lead: 'The arithmetic that guides a choice.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{sets per session (per muscle)}=\frac{\text{weekly sets}}{\text{sessions per week for that muscle}},\qquad \text{session length}\approx N_{\text{sets}}\times(t_{\text{set}}+t_{\text{rest}})`,
          caption: 'Splitting a weekly volume across sessions, and estimating how long a session takes.',
          where: [{ sym: 'N_{\\text{sets}}', def: 'the total number of working sets in the session' }, { sym: 't_{\\text{set}},t_{\\text{rest}}', def: 'time per set (about 40 to 60 seconds) and rest between sets (about 2 to 3 minutes)' }],
          syntax: [
            { sym: '\\text{weekly sets}/\\text{sessions}', say: 'dividing weekly sets by how often the muscle is trained. Effect: 12 sets once a week is 12 in one session, which is hard to do well; the same 12 spread across two sessions is 6 each. Why: sets beyond about 6 to 10 for one muscle in a session add less growth and more fatigue.' },
            { sym: 'N_{\\text{sets}}(t_{\\text{set}}+t_{\\text{rest}})', say: 'the session length. Effect: 20 sets with 3 minutes per set (work plus rest) is 60 minutes; 30 sets is 90. Why: time is also a limit, so there is a ceiling on volume per session.' },
          ],
          worked: {
            title: 'Fitting 12 weekly sets for chest',
            steps: ['Body-part split (chest once a week): 12 sets in one session: tiring, with later sets of poor quality.', 'Upper/lower (chest twice): 6 + 6 sets, each session also training back and shoulders.', 'Full body three days: 4 sets a session: easy to recover from.', 'A 20-set upper session at about 3 minutes per set lasts about an hour.'],
            answer: 'For most people two to three sessions per muscle per week is the most practical way to reach 10 to 15 weekly sets with good effort on each set.',
          },
        },
      ],
    },
    {
      id: 'choose',
      title: 'Choosing by days and experience',
      lead: 'A quick guide.',
      blocks: [
        {
          t: 'table',
          head: ['If you can train…', 'Beginner', 'Intermediate'],
          rows: [
            ['2 days', 'Full body A / B', 'Full body with higher volume, or one upper and one lower'],
            ['3 days', 'Full body A / B / A', 'Full body, or push / pull / legs as a once-a-week split'],
            ['4 days', 'Upper / lower, once the basics are learned', 'Upper / lower (twice a week each)'],
            ['5 days', 'Upper / lower + one full-body or specialisation day', 'Upper / lower / push / pull / legs'],
            ['6 days', 'Not recommended at the start; add easy cardio instead', 'Push / pull / legs twice'],
          ],
        },
        {
          t: 'checklist',
          items: [
            'Can I attend at least 80% of planned sessions for 12 weeks?',
            'Does each major muscle get about 10 hard sets a week, in two or three sessions?',
            'Do hard sessions for the same muscle have at least a day and a half between them?',
            'Do the sessions fit in the time I have (about 45 to 75 minutes)?',
            'Is there a plan for missed sessions: do I move on, or repeat the day?',
          ],
        },
        { t: 'p', text: 'If you miss a day, do the missed session next rather than shifting the whole week, and skip an accessory exercise if you are short on time. Start with the beginner plan if you have not trained consistently, and move to an intermediate plan when you have followed a beginner plan for about 6 months and can no longer add weight or reps every week.' },
      ],
    },
  ],
  sources: [
    'Schoenfeld, B. J., Grgic, J. & Krieger, J. (2019). How many times per week should a muscle be trained to maximize muscle hypertrophy? *Journal of Sports Sciences*, 37(11).',
    'Schoenfeld, B. J., Ogborn, D. & Krieger, J. W. (2016). Effects of resistance training frequency on measures of muscle hypertrophy: a systematic review and meta-analysis. *Sports Medicine*, 46(11).',
    'Rhea, M. R. et al. (2003). A meta-analysis to determine the dose response for strength development. *Medicine & Science in Sports & Exercise*, 35(3).',
    'Kassiano, W. et al. (2022). Does varying resistance exercises promote superior muscle hypertrophy and strength gains? *Journal of Strength and Conditioning Research*, 36(6).',
  ],
  related: ['fitness/plans/beginner-plan', 'fitness/plans/intermediate-plan', 'fitness/muscle/progressive-overload-and-volume', 'fitness/strength/programmes', 'fitness/muscle/exercise-selection'],
}

export default guide
