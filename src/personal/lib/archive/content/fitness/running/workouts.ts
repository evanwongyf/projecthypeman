import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Each type of run trains something different. A good week mixes a lot of easy running with one or two harder sessions and a long run. Here is what each workout is for, how to do it, and an example.',
  nutshell: [
    '**Easy runs** are the foundation: most of your weekly running, at a conversational pace.',
    '**Long runs** build endurance and the ability to burn fat.',
    '**Tempo and threshold** runs raise the pace you can sustain.',
    '**Intervals** raise VO2max; **strides and hills** build speed, strength and economy.',
    '**Fartlek** is unstructured "speed play": a playful mix of fast and easy.',
    'Keep hard days hard and easy days easy. Do not let every run drift into the middle.',
  ],
  sections: [
    {
      id: 'table',
      title: 'Every type of run at a glance',
      blocks: [
        {
          t: 'table',
          head: ['Run', 'Effort', 'Purpose', 'Example'],
          rows: [
            ['Easy', 'RPE 3–4, chatty', 'Aerobic base, recovery, mileage', '30–60 min easy'],
            ['Recovery', 'RPE 2–3, very easy', 'Blood flow the day after a hard session', '20–30 min very slow'],
            ['Long', 'RPE 3–5', 'Endurance, fat use, durability', '25–30% of weekly distance, building gradually'],
            ['Progression', 'Starts easy, ends steady to hard', 'Running fast when tired', '40 min, each 10 min a bit faster'],
            ['Tempo (threshold)', 'RPE 6–7, comfortably hard', 'Raise lactate threshold', '20–30 min at about one-hour race pace'],
            ['Cruise intervals', 'RPE 7', 'Threshold work in chunks', '4 × 1.6 km at threshold, 1 min jog'],
            ['VO2max intervals', 'RPE 8–9', 'Raise VO2max', '5 × 3 min at 3K–5K pace, 2–3 min jog'],
            ['Fartlek', 'Mixed', 'Speed, rhythm changes, fun', '30 min easy with 8–10 surges of 30 s to 2 min'],
            ['Hill repeats', 'RPE 8', 'Strength, power, economy', '8 × 60 s up a steady hill, jog down'],
            ['Strides', 'Fast but relaxed', 'Speed and form without fatigue', '6 × 20 s accelerations, full recovery'],
            ['Race pace', 'Goal pace', 'Rehearse the race', '3 × 2 km at goal 10K pace'],
            ['Time trial', 'All-out for the distance', 'Test fitness and set paces', 'Solo 5K, or a parkrun'],
          ],
        },
      ],
    },
    {
      id: 'easy',
      title: 'Easy and long runs',
      blocks: [
        {
          t: 'p',
          text: 'Easy running builds more capillaries, more mitochondria and a stronger heart, and it lets you run more without getting hurt. Most successful runners, from beginners to Olympians, do about **80% of their running at an easy effort**. The most common mistake is running easy days too fast, which leaves you too tired to run the hard days properly.',
        },
        { t: 'exercises', ids: ['jog'] },
      ],
    },
    {
      id: 'fartlek',
      title: 'Fartlek: speed play',
      blocks: [
        {
          t: 'p',
          text: '*Fartlek* is Swedish for "speed play". Developed by the coach Gösta Holmér in the 1930s, it mixes faster bursts into a continuous run, often by feel or landmarks: "fast to the next lamp post, easy to the bridge". It trains speed, changes of pace and mental toughness, and is a gentle way to start faster running.',
        },
        {
          t: 'example',
          title: 'Three fartlek sessions',
          lines: [
            { label: 'Beginner', text: '20 min easy, with 6 × 30 s faster whenever you feel like it.' },
            { label: 'Classic', text: '10 min easy; then 1-2-3-2-1 minutes hard with half the time easy between; 10 min easy.' },
            { label: 'Landmark', text: 'In a park: run hard between two trees, easy to the next bench; repeat for 20 min.' },
          ],
        },
        { t: 'exercises', ids: ['sprint'] },
      ],
    },
    {
      id: 'quality',
      title: 'Tempo, intervals and hills',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Tempo', body: 'After a 10–15 minute warm-up, run 20–30 minutes at a "comfortably hard" pace you could hold for about an hour in a race. You can speak a few words. Finish feeling you could have done more.' },
            { title: 'Intervals', body: 'Repeats of 2–5 minutes at around 3K–5K race pace, with jogging recovery about as long as the repeat. Keep the total hard running to about 15–20 minutes, and each repeat about the same speed.' },
            { title: 'Hills', body: 'Find a steady hill. Run up for 30–90 seconds at a strong effort, driving the arms and knees, and jog back down. Hills build strength with less impact than flat speedwork.' },
            { title: 'Strides', body: 'After an easy run, accelerate smoothly for 15–20 seconds to about mile pace, then walk or jog back. Fast but relaxed, never a sprint.' },
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'One or two hard sessions a week',
          text: 'Most runners improve best with one or two quality sessions a week (plus a long run). More than that, and the easy days stop being easy.',
        },
      ],
    },
    {
      id: 'week',
      title: 'A sample week',
      blocks: [
        {
          t: 'table',
          head: ['Day', 'Session'],
          rows: [
            ['Mon', 'Rest or strength training'],
            ['Tue', 'Intervals: 5 × 3 min hard, 2 min jog'],
            ['Wed', 'Easy 30–40 min'],
            ['Thu', 'Tempo 20 min, or fartlek'],
            ['Fri', 'Rest or easy 20–30 min + strides'],
            ['Sat', 'Easy 30 min'],
            ['Sun', 'Long run'],
          ],
          caption: 'For someone running 4–6 days a week. Drop Wednesday and Saturday to run 4 days.',
        },
      ],
    },
  ],
  sources: [
    'Daniels, J. (2014). *Daniels’ Running Formula* (3rd ed.). Human Kinetics.',
    'Seiler, S. (2010). What is best practice for training intensity and duration distribution in endurance athletes? *International Journal of Sports Physiology and Performance*, 5(3), 276–291.',
    'Magness, S. (2014). *The Science of Running*. Origin Press.',
  ],
  related: ['fitness/running/philosophies', 'fitness/running/plans', 'fitness/running/physiology'],
}

export default guide
