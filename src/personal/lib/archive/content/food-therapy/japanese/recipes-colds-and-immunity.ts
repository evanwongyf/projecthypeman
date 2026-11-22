import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'When you have a cold, you want warmth, fluids and food that is easy to eat. Three Japanese home remedies fit that: tori zosui (chicken and rice soup), kuzuyu (a warm kuzu starch drink with ginger), and yuzu tea. None of them is a cure, and the evidence for their effects is traditional or small, but they are hydrating, comforting and gentle, and they give you something nutritious when your appetite is low.',
  nutshell: [
    '**Tori zosui** is a savoury rice soup with chicken, egg and ginger: fluids, protein, carbohydrate and warmth.',
    '**Kuzuyu** is a warm drink thickened with kuzu starch and flavoured with ginger and honey, a traditional remedy for cold and a sore throat.',
    '**Yuzu tea** (yuzu-cha) is a warm citrus drink: soothing, with some vitamin C.',
    '**Honey** may ease cough, but **never give honey to a baby under 12 months**.',
    'See a doctor for difficulty breathing, high or prolonged fever, or symptoms in babies, older adults or anyone with a long-term illness.',
  ],
  sections: [
    {
      id: 'zosui',
      title: 'Tori zosui (chicken and rice soup)',
      blocks: [
        {
          t: 'recipe',
          name: 'Tori zosui',
          photo: 'tori-zosui',
          jp: '鶏雑炊',
          serves: 2,
          time: '25 minutes',
          tags: ['cold', 'protein', 'warming'],
          ingredients: [
            { qty: 1, unit: 'cup', item: 'cooked rice', note: 'about 150 g, rinsed briefly under water to remove stickiness' },
            { qty: 500, unit: 'ml', item: 'dashi or light chicken stock' },
            { qty: 100, unit: 'g', item: 'chicken thigh', note: 'bite-sized pieces' },
            { qty: 1, item: 'egg', note: 'lightly beaten' },
            { qty: 2, unit: 'slices', item: 'fresh ginger', note: 'finely shredded' },
            { qty: 1, unit: 'tsp', item: 'soy sauce' },
            { qty: 1, unit: 'tsp', item: 'mirin' },
            { qty: 1, item: 'spring onion, sliced' },
          ],
          steps: [
            'Bring the dashi to a boil. Add the chicken and ginger and simmer for 5 minutes, skimming any foam.',
            'Add the rinsed rice, soy sauce and mirin and simmer gently for 5 minutes until the rice softens.',
            'Drizzle in the beaten egg in a thin stream and turn off the heat. Cover for 1 minute so the egg sets softly.',
            'Serve in bowls with spring onion on top.',
          ],
          why: 'Warm fluid, easily digested carbohydrate, protein from chicken and egg, and ginger for warmth. It is a one-bowl meal that is easy to eat with a sore throat or low appetite. Chicken soup in general has some lab evidence for mild anti-inflammatory effects, but it is mainly a comfort and hydration food.',
          note: 'Use a low-salt stock if you are watching sodium. Cook the chicken through (no pink). Zosui is made from cooked rice, unlike okayu, which cooks raw rice in a lot of water.',
        },
      ],
    },
    {
      id: 'kuzuyu',
      title: 'Kuzuyu with ginger',
      blocks: [
        {
          t: 'recipe',
          name: 'Kuzuyu',
          photo: 'kuzuyu',
          jp: '葛湯',
          serves: 1,
          time: '5 minutes',
          tags: ['sore throat', 'cold', 'warming'],
          ingredients: [
            { qty: 1, unit: 'tbsp', item: 'kuzu powder' },
            { qty: 2, unit: 'tbsp', item: 'cold water', note: 'to dissolve the kuzu' },
            { qty: 200, unit: 'ml', item: 'water' },
            { qty: 1, unit: 'tsp', item: 'grated ginger', note: 'or ginger juice' },
            { qty: 1, unit: 'tsp', item: 'honey', note: 'or sugar to taste; no honey for infants under 12 months' },
          ],
          steps: [
            'Dissolve the kuzu thoroughly in 2 tablespoons of cold water in a small saucepan, breaking up any lumps.',
            'Add 200 ml of water and heat gently, stirring constantly, until the liquid turns translucent and thickens (2 to 3 minutes).',
            'Stir in the ginger and honey. Drink warm in small sips.',
          ],
          why: 'A warm, soothing drink that coats the throat, and it is gentle on the stomach. In Japan it is the traditional drink for the start of a cold. Ginger warms and eases nausea, and honey can soften a cough. The evidence is traditional and small, so treat it as comfort rather than medicine.',
          note: 'Kuzu is a starch from the root of the kudzu vine. Real kuzu is expensive; some products are mixed with potato starch. It thickens only when heated. Ginger can interact at very high doses with blood thinners; normal food amounts are fine.',
        },
      ],
    },
    {
      id: 'yuzu',
      title: 'Yuzu tea',
      blocks: [
        {
          t: 'recipe',
          name: 'Yuzu-cha',
          photo: 'yuzu-cha',
          jp: '柚子茶',
          serves: 1,
          time: '3 minutes',
          tags: ['vitamin C', 'sore throat', 'quick'],
          ingredients: [
            { qty: 1, unit: 'tbsp', item: 'yuzu-cha (yuzu marmalade)', note: 'sold in jars at Asian grocers' },
            { qty: 200, unit: 'ml', item: 'hot water', note: 'just off the boil' },
            { item: 'A slice of fresh ginger (optional)' },
          ],
          steps: [
            'Put the yuzu marmalade in a mug.',
            'Pour in the hot water and stir until dissolved. Add ginger if you like.',
            'Drink warm, eating the peel pieces.',
          ],
          why: 'A warm, hydrating citrus drink. Yuzu peel and juice contain vitamin C and aromatic oils, though cooking and sugar in the marmalade reduce the amount and add sweetness. It is a pleasant, soothing way to drink fluids with a sore throat.',
          note: 'Yuzu-cha is sweet (it is mostly sugar and fruit), so use sparingly if you are watching blood sugar. Lemon and honey is a close substitute.',
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'When a cold is not just a cold',
          text: 'See a doctor for difficulty breathing, chest pain, a fever above 39 °C or lasting more than three days, severe sore throat with difficulty swallowing, confusion, dehydration, or any symptoms in babies, older adults, pregnant women or people with chronic illnesses.',
        },
        { t: 'links', items: [{ path: 'food-therapy/food-for-goals/immunity', note: 'What helps immunity, and what does not' }, { path: 'food-therapy/vitamins/vitamin-c-and-antioxidants', note: 'Vitamin C' }, { path: 'food-therapy/japanese/recipes-digestion-and-recovery', note: 'More gentle recipes' }] },
      ],
    },
  ],
  sources: [
    'Rennard, B. O., et al. (2000). Chicken soup inhibits neutrophil chemotaxis in vitro. Chest.',
    'Oduwole, O., et al. (2018). Honey for acute cough in children. Cochrane Database of Systematic Reviews.',
    'Ernst, E., and Pittler, M. H. (2000). Efficacy of ginger for nausea and vomiting: a systematic review of randomized clinical trials. British Journal of Anaesthesia.',
    'Ministry of Health, Labour and Welfare (Japan). Standard Tables of Food Composition in Japan.',
  ],
  related: ['food-therapy/food-for-goals/immunity', 'food-therapy/japanese/recipes-digestion-and-recovery', 'food-therapy/vitamins/vitamin-c-and-antioxidants'],
}

export default guide
