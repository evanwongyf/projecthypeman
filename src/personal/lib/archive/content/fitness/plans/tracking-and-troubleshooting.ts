import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Progress in the gym is slow, noisy and easy to misread. A scale weight swings by a kilo from one day to the next, strength dips on a bad night’s sleep, and a stall of two weeks may be nothing or may be the first sign of a problem. This guide explains what to record, how to read the trends instead of single days, realistic rates of gain and loss, the most common reasons progress stalls and what to try in order, with a decision checklist.',
  nutshell: [
    'Record **exercise, weight, reps and effort (RIR)** for every set, plus **bodyweight, sleep and a note** if the day felt unusual.',
    'Judge progress on **4-week trends**: average weekly body weight, best sets on key lifts, and waist and limb measurements.',
    'Realistic lean gain is **about 0.25 to 0.5% of body weight per week** in a surplus for beginners and less for the experienced; faster gain adds mostly fat.',
    'Common stall causes, in order to check: **not enough food or sleep, too little or too much volume, poor logging, joint pain, unrealistic expectations**.',
    'Change **one variable at a time**, wait two to four weeks, and use the data to decide.',
  ],
  sections: [
    {
      id: 'log',
      title: 'What to track',
      lead: 'The data worth having.',
      blocks: [
        {
          t: 'table',
          head: ['What', 'How often', 'Why it helps'],
          rows: [
            ['Sets, reps, weight, RIR', 'Every session', 'Shows whether you are progressing and how hard you are working'],
            ['Bodyweight', 'Daily or 3 times a week, same conditions, then take the weekly average', 'Weight fluctuates by 0.5 to 2 kg from water, food and salt; the weekly average smooths it'],
            ['Waist and limb measurements', 'Every 2 to 4 weeks', 'Shows where weight is gaining or leaving'],
            ['Photos', 'Every 4 weeks, same light, pose and time', 'Visual change is slow; photos catch what the mirror misses'],
            ['Sleep, mood, soreness', 'Daily, a one-line rating', 'Explains bad sessions and warns of overreaching'],
            ['Food (if gaining or cutting)', 'A week at a time, or by habit', 'Calories and protein are the most common cause of stalls'],
          ],
        },
        {
          t: 'math',
          tex: String.raw`\bar w_{\text{week}}=\frac1n\sum_{i=1}^{n}w_i,\qquad \text{rate}=\frac{\bar w_{k}-\bar w_{k-1}}{\bar w_{k-1}}\times100\%\ \text{per week}`,
          caption: 'The weekly average of body weight, and the percentage change in it from week to week.',
          where: [{ sym: 'w_i', def: 'individual weigh-ins in the week' }, { sym: 'n', def: 'the number of weigh-ins in the week (3 to 7)' }],
          syntax: [{ sym: '\\bar w_{\\text{week}}', say: 'the mean of the week’s weigh-ins. Effect: smooths random day-to-day swings. Why: the noise in single weigh-ins has a standard deviation around 0.5 to 1 kg; averaging n of them reduces it by about √n.' }, { sym: '(\\bar w_k-\\bar w_{k-1})/\\bar w_{k-1}', say: 'the proportional change. Effect: a gain of 0.3 kg on a 70 kg person is 0.43% a week.' }],
          worked: {
            title: 'Reading a four-week trend',
            steps: ['Weekly averages: 68.2, 68.5, 68.6, 69.1 kg.', 'Change over three weeks: +0.9 kg, an average of 0.3 kg (0.44%) a week.', 'Target for a novice in a lean surplus: 0.25 to 0.5% a week, so this is on track; for an experienced lifter it would be too fast.'],
            answer: 'A rate at the high end suggests that more of the gain may be fat; lower the surplus by 100 to 200 kcal a day if the waist is growing faster than the arms.',
          },
        },
      ],
    },
    {
      id: 'stall',
      title: 'Why progress stalls',
      lead: 'Check in this order.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: '1. Did it really stall?', body: 'Look at 3 to 4 weeks of data, not one session. Compare estimated one-rep max or volume load, not just the top set.' },
            { title: '2. Food', body: 'Are you in a calorie surplus and getting about 1.6 to 2.2 g of protein per kg? Weekly bodyweight not rising is the usual giveaway.' },
            { title: '3. Sleep and stress', body: 'Seven to nine hours and manageable stress. A bad month at work can undo a good plan.' },
            { title: '4. Effort', body: 'Are the last sets really at RIR 1 to 3? Many people coast at RIR 5 or more and call it hard.' },
            { title: '5. Volume', body: 'Too little (below about 8 to 10 sets per muscle) or too much (high volume with poor recovery). Make a change of one to three sets and wait.' },
            { title: '6. Exercise and technique', body: 'Poor technique, joint pain, or an exercise that no longer suits you. Swap a variation or reduce the range that bothers the joint.' },
            { title: '7. Time and expectations', body: 'Gains slow with experience. A year-three trainee gaining 0.25 kg a month is on a normal curve.' },
          ],
        },
        {
          t: 'checklist',
          items: [
            'Do I log every session and compare with last time?',
            'Is my weekly bodyweight moving in the direction I want?',
            'Do I average at least 7 hours of sleep?',
            'Do I reach RIR 1 to 3 on working sets?',
            'Have I changed my plan too often (more than every 4 weeks)?',
            'Has pain, illness or life stress changed in the past month?',
          ],
        },
      ],
    },
    {
      id: 'fixes',
      title: 'Fixes, in order',
      lead: 'Smallest changes first.',
      blocks: [
        {
          t: 'table',
          head: ['If…', 'Try'],
          rows: [
            ['Weight is flat on a "bulk"', 'Add 150 to 250 kcal a day (a bit more carbohydrate) and recheck in 2 to 3 weeks'],
            ['A lift stalls for 3 weeks', 'Deload (reduce load and sets for a week), then restart 5% lighter; check technique; change rep range or variation'],
            ['Fatigue and aches grow', 'Reduce volume 30 to 50% for a week; add rest days; check sleep and food'],
            ['Muscle X lags', 'Add 2 to 4 weekly sets for it, move it earlier in the session, and use stretched-position exercises'],
            ['Gaining mostly fat', 'Slow the rate to 0.25% per week; check portions; consider a short cut'],
            ['Losing motivation', 'Shorten sessions, change exercises, train with a friend, set a short-term target'],
          ],
        },
        { t: 'callout', tone: 'tip', title: 'The 2-for-2 rule', text: 'A simple, old rule: if you can do two or more extra reps than the target on the last set for two sessions in a row, increase the weight. It stops you from adding weight too early or too late.' },
      ],
    },
  ],
  sources: [
    'McDonald, L. (2009). *A Guide to Flexible Dieting and Muscle Gain Rate Models* (practitioner framework).',
    'Helms, E. R. et al. (2014). Evidence-based recommendations for natural bodybuilding contest preparation: nutrition and supplementation. *Journal of the International Society of Sports Nutrition*, 11.',
    'Trexler, E. T., Smith-Ryan, A. E. & Norton, L. E. (2014). Metabolic adaptation to weight loss: implications for the athlete. *Journal of the International Society of Sports Nutrition*, 11.',
  ],
  related: ['fitness/plans/intermediate-plan', 'fitness/muscle/progressive-overload-and-volume', 'fitness/muscle-nutrition/energy-and-surplus', 'fitness/muscle/periodisation-and-recovery', 'fitness/principles'],
}

export default guide
