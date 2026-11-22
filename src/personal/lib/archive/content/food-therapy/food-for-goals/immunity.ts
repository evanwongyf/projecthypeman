import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The immune system is not something to “boost”: it is a balanced network, and too much activity is as harmful as too little (allergy and autoimmune disease are examples). What food can do is make sure the system has the raw materials it needs, and support recovery when you are ill. This guide sets out the nutrients that matter, the pattern of eating that supports immunity, what helps during a cold, and which popular claims do not hold up.',
  nutshell: [
    'Immune cells need **protein**, **vitamins A, C, D, B6, B12, folate** and **iron, zinc, selenium**. **Deficiency** in any impairs defences; **extra** beyond need does not give extra protection.',
    'A **varied diet**, **sleep**, **exercise**, **not smoking**, **moderate alcohol** and **managing stress** support immunity more than any supplement.',
    'During a cold: **fluids, rest, easily eaten food**, honey for cough (not for infants under one), and warm broths for comfort and hydration.',
    '**Vitamin C** and **zinc** have small effects on cold duration in some trials; neither prevents colds in most people.',
    'Be sceptical of “immune-boosting” products. If you get frequent or severe infections, see a doctor.',
  ],
  sections: [
    {
      id: 'in-pictures',
      title: 'The key foods in pictures',
      blocks: [
        { t: 'food-photos', items: [
          { photo: 'f-peppers', title: 'Peppers', body: 'Very high in vitamin C' },
          { photo: 'f-kiwi', title: 'Kiwifruit', body: 'Vitamin C' },
          { photo: 'f-yogurt', title: 'Yoghurt', body: 'Live cultures and protein' },
          { photo: 'f-pumpkin-seeds', title: 'Seeds', body: 'Zinc' },
          { photo: 'f-salmon', title: 'Oily fish', body: 'Vitamin D' },
          { photo: 'f-garlic', title: 'Garlic and ginger', body: 'Warming flavour for sick days' },
        ] },
      ],
    },
    {
      id: 'nutrients',
      title: 'What immune cells need',
      blocks: [
        {
          t: 'table',
          head: ['Nutrient', 'Role in immunity', 'Foods'],
          rows: [
            ['Protein', 'Antibodies and immune cells are made of protein; illness raises needs', 'Fish, eggs, tofu, poultry, beans, dairy'],
            ['Vitamin A', 'Keeps skin and mucous membranes, the first barrier, intact', 'Carrots, pumpkin, greens, eggs, liver'],
            ['Vitamin C', 'Supports immune cells and tissue repair', 'Citrus, kiwi, peppers, broccoli'],
            ['Vitamin D', 'Helps regulate immune responses; low levels are associated with more respiratory infections', 'Oily fish, sunlight, fortified foods'],
            ['Zinc', 'Needed to develop and signal immune cells', 'Oysters, meat, pumpkin seeds, legumes'],
            ['Iron', 'Needed for immune cell growth; too much or too little both impair', 'Clams, meat, beans, tofu'],
            ['Selenium', 'Antioxidant enzymes in immune cells', 'Fish, eggs, a Brazil nut'],
            ['Fibre and fermented foods', 'Feed gut bacteria; a large share of immune tissue is in the gut', 'Vegetables, pulses, whole grains, miso, natto, yogurt, pickles'],
          ],
        },
        { t: 'callout', tone: 'fact', title: 'Malnutrition and infection', text: 'Poor nutrition and infection feed each other: undernourished people get more infections, and infections reduce appetite and absorption. This is why ensuring enough food and key nutrients is one of the most effective ways to reduce infection in the world.' },
      ],
    },
    {
      id: 'lifestyle',
      title: 'Beyond food',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Sleep', title: 'Sleep', body: 'In studies, people who sleep fewer than about six hours were more likely to catch a cold after exposure to the virus than those who slept seven or more.' },
            { tag: 'Move', title: 'Moderate exercise', body: 'Regular moderate exercise is linked with fewer respiratory infections. Very heavy exertion without recovery can temporarily depress immunity.' },
            { tag: 'Stress', title: 'Chronic stress', body: 'Long-term stress raises cortisol and is associated with weaker defences. Recovery time is part of health.' },
            { tag: 'Avoid', title: 'Smoking and heavy drinking', body: 'Both impair immune defences in the lungs and elsewhere.' },
            { tag: 'Prevent', title: 'Vaccines and hygiene', body: 'Vaccination and hand-washing are the strongest tools against infection; food is the supporting act.' },
          ],
        },
      ],
    },
    {
      id: 'ill',
      title: 'When you are ill',
      blocks: [
        {
          t: 'table',
          head: ['Remedy', 'What the evidence says'],
          rows: [
            ['Fluids (water, broth, tea, soup)', 'Prevents dehydration from fever and sweating, and warm drinks ease a sore throat and congestion'],
            ['Chicken soup or other warm broth', 'Comforting and hydrating; some lab work suggests mild anti-inflammatory effects. It is a good idea, not a cure'],
            ['Honey (for cough)', 'Some trials show honey reduces cough better than no treatment or placebo in children over one year and adults. Never give honey to infants under 12 months'],
            ['Ginger', 'Eases nausea in several trials; helps as a warm drink. It is not an antiviral'],
            ['Vitamin C', 'Does not prevent colds in most people; may shorten them a little when taken regularly'],
            ['Zinc lozenges', 'May shorten colds slightly if started early, in some trials; can cause nausea and a bad taste'],
            ['Garlic, echinacea, elderberry and others', 'Evidence is weak or inconsistent'],
            ['Appetite', 'Do not force food. Small, easy meals (okayu, soup, fruit) are fine. Fluids matter more'],
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'See a doctor if',
          text: 'There is difficulty breathing, chest pain, a fever above 39 °C or one that lasts more than three days, confusion, a stiff neck, dehydration (very little urine), or symptoms in a baby, an older person or someone with a long-term condition. Antibiotics do not work on viral colds.',
        },
        { t: 'links', items: [{ path: 'food-therapy/japanese/recipes-colds-and-immunity', note: 'Recipes: tori zosui, kuzuyu with ginger, yuzu tea' }, { path: 'food-therapy/vitamins/vitamin-c-and-antioxidants', note: 'Vitamin C and the common cold' }, { path: 'medicine/immunology/innate-immunity', note: 'How the immune system works' }] },
      ],
    },
  ],
  sources: [
    'Calder, P. C. (2020). Nutrition, immunity and COVID-19. BMJ Nutrition, Prevention and Health, and earlier reviews on nutrition and immune function.',
    'Prather, A. A., et al. (2015). Behaviorally assessed sleep and susceptibility to the common cold. Sleep.',
    'Hemilä, H., and Chalker, E. (2013). Vitamin C for preventing and treating the common cold. Cochrane Database of Systematic Reviews.',
    'Oduwole, O., et al. (2018). Honey for acute cough in children. Cochrane Database of Systematic Reviews.',
    'Martineau, A. R., et al. (2017). Vitamin D supplementation to prevent acute respiratory tract infections. BMJ.',
  ],
  related: ['food-therapy/vitamins/vitamin-c-and-antioxidants', 'food-therapy/japanese/recipes-colds-and-immunity', 'medicine/immunology/innate-immunity'],
}

export default guide
