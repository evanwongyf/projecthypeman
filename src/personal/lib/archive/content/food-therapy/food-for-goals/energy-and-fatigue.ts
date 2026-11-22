import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Feeling tired is one of the most common complaints in medicine, and food is only one of many causes. But two things about eating really do affect energy: the pattern of your meals through the day, and a short list of nutrient shortfalls (above all iron and B12) that cause fatigue that no amount of coffee will fix. This guide covers both, and sets out when tiredness needs a doctor, not a better diet.',
  nutshell: [
    'Energy comes from **calories**, but how you feel depends on **how steadily** they arrive. Meals with **protein, fibre and slow carbohydrates** release energy more evenly than sugary snacks.',
    'The classic nutritional causes of fatigue are **iron deficiency**, **B12 or folate deficiency**, **low vitamin D** and **not eating enough**.',
    '**Sleep, depression, thyroid disease, anaemia, diabetes, infection and sleep apnoea** are all common causes that food does not fix. Persistent unexplained tiredness needs a medical check.',
    '**Hydration** and **regular movement** have real effects on energy and are cheap to try.',
    '**Caffeine** boosts alertness but does not create energy; it blocks the signal of tiredness and can ruin the sleep that restores you.',
  ],
  sections: [
    {
      id: 'in-pictures',
      title: 'The key foods in pictures',
      blocks: [
        { t: 'food-photos', items: [
          { photo: 'f-oats', title: 'Oats', body: 'Slow-release carbohydrate' },
          { photo: 'f-lentils', title: 'Lentils', body: 'Iron, folate and fibre' },
          { photo: 'f-beef', title: 'Lean red meat', body: 'Easily absorbed iron and B12' },
          { photo: 'f-banana', title: 'Bananas', body: 'Quick energy and potassium' },
          { photo: 'f-pumpkin-seeds', title: 'Pumpkin seeds', body: 'Magnesium and iron' },
          { photo: 'f-orange', title: 'Oranges', body: 'Vitamin C helps absorb plant iron' },
        ] },
      ],
    },
    {
      id: 'meals',
      title: 'How meals shape your energy',
      blocks: [
        { t: 'p', text: 'After a meal, blood glucose rises and the pancreas releases insulin to move it into cells. Refined carbohydrates (sweets, white bread, sugary drinks) cause a quick, high rise and a fast fall that some people feel as a slump. Protein, fibre, fat and vinegar slow digestion and flatten the curve.' },
        {
          t: 'table',
          head: ['Meal', 'Likely effect', 'Better option'],
          rows: [
            ['Sweet pastry and sugary coffee', 'Quick rise, then a dip', 'Egg on whole-grain toast, or rice, egg and miso soup'],
            ['A large plate of white rice or noodles alone', 'Large rise, then drowsy', 'Smaller portion with fish or tofu and plenty of vegetables; mixing barley into rice'],
            ['Skipping lunch then eating a huge dinner', 'Fatigue, poor focus, overeating', 'Regular meals with a protein source in each'],
            ['A light meal with protein, vegetables and whole grains', 'Steadier energy', 'This is the one to repeat'],
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Eat vegetables and protein before the rice',
          text: 'In small studies of people with and without type 2 diabetes, eating vegetables and protein before carbohydrate lowered the after-meal blood sugar spike. It is a free change that matches the Japanese way of eating soup, side dishes and the main dish alongside the rice.',
        },
      ],
    },
    {
      id: 'causes',
      title: 'Nutritional causes of tiredness',
      blocks: [
        {
          t: 'table',
          head: ['Cause', 'Who is at risk', 'What to do'],
          rows: [
            ['Iron deficiency (with or without anaemia)', 'Menstruating or pregnant women, vegetarians, endurance athletes, frequent blood donors', 'Ask for a blood test including ferritin. Eat haem iron and plant iron with vitamin C; take supplements only if advised'],
            ['Vitamin B12 deficiency', 'Vegans, older adults, people on metformin or acid-suppressing drugs, bowel disease', 'Blood test. Fortified foods or supplements; injections for absorption problems'],
            ['Folate deficiency', 'Poor diet, heavy drinkers, pregnancy', 'Leafy greens, pulses; supplements if advised'],
            ['Vitamin D deficiency', 'Little sun, older, darker skin at high latitudes', 'Oily fish, fortified food, sun, supplements if advised'],
            ['Eating too little (low energy availability)', 'Dieters, athletes, people with eating disorders', 'Eat enough; seek help if food restriction feels hard to stop'],
            ['Dehydration', 'Hot weather, heavy sweating, low fluid intake', 'Drink regularly; pale-yellow urine is a sign'],
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'See a doctor if',
          text: 'Tiredness lasts more than two to four weeks, is getting worse, or comes with weight loss, fever, night sweats, breathlessness, chest pain, low mood, heavy bleeding, black stools, or sleepiness during the day despite long sleep. Thyroid disease, anaemia, diabetes, depression, sleep apnoea and many other conditions are treatable once found.',
        },
      ],
    },
    {
      id: 'daily',
      title: 'Everyday habits that help',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Food', title: 'Build the plate', body: 'Half vegetables, a quarter protein (fish, egg, tofu, chicken, beans), a quarter whole grain or rice, with a little healthy fat.' },
            { tag: 'Food', title: 'Snack smart', body: 'Nuts, fruit, yogurt, an onigiri, edamame or boiled egg beat sweets for lasting energy.' },
            { tag: 'Drink', title: 'Caffeine timing', body: 'Have it earlier in the day and stop about eight hours before bed. Caffeine’s half-life is around five hours, and varies widely between people.' },
            { tag: 'Body', title: 'Move', body: 'A short walk often boosts energy more than a snack or a coffee.' },
            { tag: 'Body', title: 'Sleep', body: 'Chronic sleep shortage is the commonest cause of tiredness. No diet makes up for it.' },
            { tag: 'Mind', title: 'Stress', body: 'Long-term stress is exhausting. Rest and recovery are part of eating well.' },
          ],
        },
        { t: 'links', items: [{ path: 'food-therapy/vitamins/b-vitamins', note: 'B vitamins' }, { path: 'food-therapy/minerals/trace-minerals', note: 'Iron' }, { path: 'food-therapy/japanese/recipes-energy-and-brain', note: 'Energy recipes' }] },
      ],
    },
  ],
  sources: [
    'Imai, S., et al. (2014). Eating vegetables before carbohydrates improves postprandial glucose excursions. Diabetic Medicine.',
    'Nutrition Reviews and national guidance on fatigue assessment (NICE guideline on tiredness).',
    'US National Institutes of Health, Office of Dietary Supplements. Fact sheets: Iron, Vitamin B12.',
    'Doyle, M. P., and Walker, K. (2018). Caffeine and sleep (reviews).',
  ],
  related: ['food-therapy/vitamins/b-vitamins', 'food-therapy/minerals/trace-minerals', 'food-therapy/food-for-goals/sleep-and-mood'],
}

export default guide
