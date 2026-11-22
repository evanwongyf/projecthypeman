import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Training is the stimulus and recovery is where adaptation happens. A plan that varies its load over weeks (periodisation), a good night’s sleep, enough food and a manageable life all feed the same process, and each can be the limiting factor. This guide covers the main periodisation models and what research says about them, how long to rest between sets and sessions, sleep and stress, the signs of too much training, and how to plan a mesocycle with a volume ramp and a deload.',
  nutshell: [
    '**Periodisation** organises training into blocks (macro, meso, micro cycles) with planned changes in volume, intensity and exercises. Evidence shows a modest advantage over no planning, but **little difference between models** when volume and effort are matched.',
    '**Rest between sets of 2 to 3 minutes** for compounds supports more reps and, in trained people, slightly greater hypertrophy than 1 minute; shorter rests are fine for small isolation lifts.',
    '**Sleep** of 7 to 9 hours supports training performance, hormone balance and appetite; short sleep reduces strength endurance and raises injury risk.',
    'Recovery time depends on the muscle, the volume and your age and fitness; most people can train a muscle **2 to 3 times a week**.',
    'A **mesocycle** of 4 to 8 weeks ramps volume or load, then deloads: a repeating wave.',
  ],
  sections: [
    {
      id: 'models',
      title: 'Periodisation models',
      lead: 'Three ways to organise a plan.',
      blocks: [
        { t: 'fit-lab', viz: 'periodisation' },
        {
          t: 'table',
          head: ['Model', 'How it works', 'Suits', 'Evidence'],
          rows: [
            ['Linear', 'Start with higher volume and lower intensity, gradually shift to lower volume and higher intensity across weeks or months', 'Beginners and intermediates; a peak for a meet', 'Works well; modest advantage over non-periodised plans for strength'],
            ['Undulating (daily or weekly)', 'Vary reps, load and focus from session to session or week to week (heavy, moderate, light)', 'Intermediates; those who train a lift often; variety', 'Similar to linear in most comparisons; may be slightly better for strength in some meta-analyses'],
            ['Block', 'Concentrate on one quality at a time (accumulate volume, then intensify, then realise or peak)', 'Advanced lifters and athletes with a competition date', 'Mixed; hard to test; sensible for people with a goal date'],
            ['Autoregulated', 'Adjust load or sets each session from reps in reserve or bar speed', 'Anyone with variable sleep and stress', 'Promising: matches training to the day; similar or better outcomes'],
          ],
        },
        { t: 'p', text: 'The clear message of the research is that what matters is **progressive overload, enough volume and effort, and consistency**; the model is secondary. Choose a structure you will follow. For hypertrophy, a practical option is a 4 to 6 week mesocycle with rising volume, then a deload week, repeating with slightly higher starting points.' },
      ],
    },
    {
      id: 'rest',
      title: 'Rest between sets and between sessions',
      lead: 'How long and how often.',
      blocks: [
        {
          t: 'table',
          head: ['Type of exercise', 'Rest between sets', 'Why'],
          rows: [
            ['Heavy compounds (squat, deadlift, press)', '2 to 4 minutes', 'Restores the energy and force you need for another quality set'],
            ['Moderate compounds and machines', '2 to 3 minutes', 'Allows enough recovery for reps without wasting time'],
            ['Isolation and small muscles', '1 to 2 minutes', 'Less systemic fatigue; fast recovery'],
            ['Supersets of unrelated muscles (e.g. biceps and quads)', 'Minimal, then 1 to 2 minutes', 'Saves time at similar quality'],
          ],
        },
        { t: 'p', text: 'Schoenfeld and colleagues (2016) found that trained men resting 3 minutes between sets gained more thigh muscle thickness than those resting 1 minute, because they lifted more total volume. If you are short on time, supersets or fewer exercises are better than cutting every rest to 60 seconds. For session frequency, muscle protein synthesis stays elevated for 24 to 48 hours in novices and a shorter time in trained lifters, so most muscles can be trained twice a week and sometimes three times if volume per session is modest.' },
      ],
    },
    {
      id: 'sleep',
      title: 'Sleep, stress and the signs of overreaching',
      lead: 'The invisible half of training.',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Sleep', tag: '7 to 9 hours', body: 'Sleep restriction reduces performance, raises perceived effort and impairs protein synthesis and glucose handling. Regular sleep and wake times, a cool dark room, and avoiding late caffeine help. In Singapore’s heat and noise, air conditioning, a fan or earplugs can make a difference.' },
            { title: 'Stress', tag: 'total load', body: 'Your body does not separate gym stress from work, exam or relationship stress. A heavy month at work can lower the training volume you can recover from. Reduce volume rather than pushing through.' },
            { title: 'Food and hydration', tag: 'the raw materials', body: 'A prolonged calorie deficit, low protein or low carbohydrate each slow recovery. Dehydration of 2% of body weight reduces performance, important in humid conditions.' },
            { title: 'Soreness', tag: 'not the goal', body: 'Delayed-onset muscle soreness peaks 24 to 72 hours after unfamiliar work. It is a poor measure of a good session and fades as you adapt.' },
          ],
        },
        {
          t: 'checklist',
          items: [
            'Strength or reps on key lifts have fallen for two or more sessions.',
            'Resting heart rate is up by 5 or more beats for several mornings, or heart-rate variability is trending down.',
            'Persistent fatigue, low mood, irritability, poor sleep or loss of appetite.',
            'Aching joints or tendons that do not warm up.',
            'Frequent minor illnesses.',
          ],
        },
        { t: 'p', text: 'If several of these are present, take a few easier days or a deload week, review sleep, food and stress, and then rebuild. Persistent symptoms, weight loss, or missed periods in women should prompt a conversation with a doctor, as they can signal low energy availability (see the recovery guide in the endurance shelf).' },
      ],
    },
    {
      id: 'meso',
      title: 'A mesocycle template',
      lead: 'Put it together.',
      blocks: [
        {
          t: 'table',
          head: ['Week', 'Hard sets per muscle', 'Effort (RIR)', 'Note'],
          rows: [
            ['1', '10', '3', 'Learn the weights; moderate soreness'],
            ['2', '12', '2 to 3', 'Add a set where you recovered well'],
            ['3', '14', '2', 'Push the main lifts'],
            ['4', '16', '1 to 2', 'Peak volume; expect fatigue'],
            ['5 (deload)', '7 to 8', '4', 'Same weights, easier; sleep and eat well'],
          ],
          caption: 'An example, not a rule. Start the next mesocycle at the same or slightly higher volume as week 1 or 2 of this one, with heavier weights.',
        },
      ],
    },
  ],
  sources: [
    'Williams, T. D. et al. (2017). Comparison of periodized and non-periodized resistance training on maximal strength: a meta-analysis. *Sports Medicine*, 47(10).',
    'Grgic, J. et al. (2018). Effect of resistance training frequency on gains in muscular strength: a systematic review and meta-analysis. *Sports Medicine*, 48(5).',
    'Schoenfeld, B. J. et al. (2016). Longer interset rest periods enhance muscle strength and hypertrophy in resistance-trained men. *Journal of Strength and Conditioning Research*, 30(7).',
    'Watson, N. F. et al. (2015). Recommended amount of sleep for a healthy adult. *Sleep*, 38(6).',
    'Helms, E. R., Cronin, J., Storey, A. & Zourdos, M. C. (2016). Application of the repetitions in reserve-based rating of perceived exertion scale for resistance training. *Strength and Conditioning Journal*, 38(4).',
  ],
  related: ['fitness/muscle/progressive-overload-and-volume', 'fitness/recovery', 'fitness/endurance/recovery-and-overtraining', 'fitness/plans/intermediate-plan', 'fitness/principles'],
}

export default guide
