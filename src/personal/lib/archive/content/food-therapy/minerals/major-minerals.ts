import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Calcium, magnesium, potassium and sodium are the minerals the body needs in the largest amounts. Together they build bone, run every muscle and nerve, and set the balance of fluid inside and outside your cells. Two of them (calcium and magnesium) are often short in the diet. A third, sodium, is usually in excess, and a fourth, potassium, is the quiet partner that helps offset it. This guide explains what each does, how to get it, and where the cautions are.',
  nutshell: [
    '**Calcium** builds bones and teeth and lets muscles and nerves work. Dairy, calcium-set tofu, small fish eaten with their bones and some greens are good sources.',
    '**Magnesium** powers hundreds of enzymes. Nuts, seeds, beans, tofu, whole grains and greens supply it; supplements can cause diarrhoea.',
    '**Potassium** lowers blood pressure and keeps the heart steady. Most people eat too little, from too few vegetables, fruit and pulses.',
    '**Sodium** (from salt) is essential, but most people eat well above what they need, which raises blood pressure. Japan’s traditional diet is high in salt.',
    'People with **kidney disease** or certain medicines must be careful with potassium and magnesium.',
  ],
  sections: [
    {
      id: 'calcium',
      title: 'Calcium',
      blocks: [
        { t: 'p', text: 'About 99 per cent of the body’s calcium is in bones and teeth, which act as a bank. Blood calcium is held tightly constant, because the heart, nerves and muscles depend on it. If the diet runs short, the body takes it from bone. Over decades, shortfalls and low vitamin D contribute to osteoporosis. The peak bone mass you reach by about age 30 matters for the rest of life, so calcium and exercise in childhood and the teens pay long-term dividends.' },
        {
          t: 'table',
          head: ['Food', 'Approximate calcium', 'Notes'],
          rows: [
            ['Milk (1 cup, 250 ml)', 'about 300 mg', 'Well absorbed'],
            ['Yogurt (150 g)', 'about 180–250 mg', 'Well absorbed'],
            ['Tofu set with calcium sulphate (100 g)', 'about 200–350 mg', 'Check the label: tofu set with nigari (magnesium chloride) has less calcium'],
            ['Iriko or small dried fish eaten whole (10 g)', 'about 220 mg', 'Bones are eaten; also supply vitamin D'],
            ['Sardines or tinned salmon with bones (100 g)', 'about 300 mg', 'Also vitamin D'],
            ['Komatsuna, cooked (100 g)', 'about 150 mg', 'Well absorbed (low oxalate)'],
            ['Kale, bok choy', 'about 100–150 mg per cooked 100 g', 'Well absorbed'],
            ['Sesame seeds (1 tbsp)', 'about 90 mg', 'Grind or use paste so the body can absorb it'],
            ['Spinach, cooked (100 g)', 'about 100 mg', 'Mostly not absorbed: high in oxalate'],
          ],
          caption: 'Approximate values; labels and varieties differ. Adult needs are about 1,000 to 1,200 mg a day.',
        },
        {
          t: 'dodont',
          do: ['Spread calcium over the day: the body absorbs less from large doses.', 'Eat vitamin D foods and get some sun.', 'Do weight-bearing exercise: bones respond to load.'],
          dont: ['Rely on spinach as a calcium source.', 'Take large calcium supplements without need.', 'Forget that too much salt and caffeine can increase calcium loss in urine (modestly).'],
        },
      ],
    },
    {
      id: 'magnesium',
      title: 'Magnesium',
      blocks: [
        { t: 'p', text: 'Magnesium is a cofactor in more than 300 enzyme reactions. It helps muscles relax after contracting, keeps the heartbeat regular, helps make energy and DNA, and forms part of bone. Most diets are adequate, but surveys in several countries show many adults eat less than the recommendation, mainly because whole grains, nuts, seeds and green vegetables are scarce. Refining grains removes much of the magnesium.' },
        { t: 'list', items: ['Good sources: pumpkin seeds, almonds, cashews, spinach, black beans, tofu, natto, brown rice, wakame, dark chocolate.', 'Low levels: usually from illness, heavy alcohol use or some medicines, not diet alone. Symptoms include cramps, tremor, tiredness and, in severe cases, abnormal heart rhythm.', 'Supplements: the upper limit from supplements is 350 mg a day, mainly because larger doses cause diarrhoea. People with kidney disease should avoid them without advice.'] },
      ],
    },
    {
      id: 'potassium',
      title: 'Potassium',
      blocks: [
        { t: 'p', text: 'Potassium works in opposition to sodium. It keeps the right fluid balance inside cells, carries nerve signals and drives muscle contraction, including the heart. In trials, increasing potassium intake lowers blood pressure, especially in people who eat plenty of salt. Most adults in most countries eat less than the recommended intake.' },
        {
          t: 'table',
          head: ['Food', 'Approximate potassium per serving'],
          rows: [
            ['Baked potato with skin (medium)', 'about 900 mg'],
            ['Kabocha, cooked (100 g)', 'about 450 mg'],
            ['Spinach, cooked (100 g)', 'about 500 mg'],
            ['White beans, cooked (100 g)', 'about 500 mg'],
            ['Banana (medium)', 'about 420 mg'],
            ['Salmon (100 g)', 'about 400 mg'],
            ['Wakame, dried (small handful)', 'varies; also a good source'],
          ],
          caption: 'Approximate values from food composition tables.',
        },
        { t: 'callout', tone: 'warn', title: 'Kidney disease and some medicines', text: 'When the kidneys are not working well, or with certain medicines (ACE inhibitors, angiotensin receptor blockers, spironolactone), blood potassium can climb to dangerous levels. These people need individual advice and should not use potassium salt substitutes unless told.' },
      ],
    },
    {
      id: 'sodium',
      title: 'Sodium and salt',
      blocks: [
        { t: 'p', text: 'Sodium is essential for fluid balance and nerves, but you need only a small amount: about 500 mg a day (about 1.25 g of salt). Typical intakes are many times that. The World Health Organization advises less than 2,000 mg sodium (5 g salt) a day for adults. Japan’s national target is somewhat higher (under about 7.5 g salt for men and 6.5 g for women in the 2020 Dietary Reference Intakes), reflecting that actual intake is high. High intakes raise blood pressure and the risk of stroke and stomach cancer.' },
        {
          t: 'table',
          head: ['Source of salt in a Japanese-style diet', 'Notes'],
          rows: [
            ['Miso soup', 'About 1 to 1.5 g of salt per bowl'],
            ['Soy sauce', 'About 2.5 g salt per tablespoon (15 ml); low-salt versions have about half'],
            ['Pickles (tsukemono), umeboshi', 'Very salty: umeboshi can be 1 to 2 g each or more'],
            ['Noodle soups (ramen, udon)', 'Drinking the broth adds several grams'],
            ['Salted fish, dried fish', 'Moderate to high'],
            ['Processed foods and sauces', 'A large share of salt in most modern diets'],
          ],
          caption: 'Approximate values; labels vary.',
        },
        { t: 'callout', tone: 'tip', title: 'Cutting salt without losing flavour', text: 'Use dashi, ginger, sesame, vinegar, citrus (yuzu), shiso and spring onion for flavour. Dilute soy sauce in a small dish for dipping instead of pouring. Leave some of the soup in the bowl. Eat more potassium-rich vegetables.' },
        { t: 'links', items: [{ path: 'food-therapy/food-for-goals/heart-and-blood-sugar', note: 'Eating for blood pressure' }, { path: 'food-therapy/food-for-goals/bones-and-muscles', note: 'Calcium and bone in practice' }, { path: 'food-therapy/vitamins/overview-and-explorer', note: 'The explorer' }] },
      ],
    },
  ],
  sources: [
    'US National Institutes of Health, Office of Dietary Supplements. Fact sheets: Calcium, Magnesium, Potassium.',
    'National Academies (2019). Dietary Reference Intakes for Sodium and Potassium.',
    'World Health Organization (2012). Guideline: Sodium intake for adults and children.',
    'Ministry of Health, Labour and Welfare (Japan). Dietary Reference Intakes for Japanese (2020).',
    'Aburto, N. J., et al. (2013). Effect of increased potassium intake on cardiovascular risk factors and disease. BMJ.',
  ],
  related: ['food-therapy/minerals/trace-minerals', 'food-therapy/food-for-goals/bones-and-muscles', 'food-therapy/food-for-goals/heart-and-blood-sugar'],
}

export default guide
