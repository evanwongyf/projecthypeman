import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Eating for a healthy heart and steady blood sugar means plenty of fibre, potassium and unsaturated fats, and less salt, sugar and refined starch. Japanese side dishes are good at this: they use vegetables in small, flavourful portions, often with vinegar and dashi instead of salt and fat. These three recipes are kinpira gobo (burdock and carrot), sunomono (a vinegar salad with cucumber and wakame) and simmered kabocha. Each is easy to make in bulk.',
  nutshell: [
    '**Kinpira gobo**: burdock root and carrot stir-fried and simmered: soluble and insoluble fibre, with a little oil.',
    '**Sunomono**: cucumber and wakame in a sweet-sour dressing: refreshing, low in calories, potassium from cucumber and seaweed.',
    '**Kabocha no nimono**: simmered pumpkin: beta-carotene, potassium and fibre; sweeter, so watch the portion if you are managing blood sugar.',
    'Use **dashi** and **vinegar** for flavour, and reduce soy sauce, sugar and mirin.',
    'People taking medicines for blood pressure, cholesterol or diabetes should keep taking them.',
  ],
  sections: [
    {
      id: 'kinpira',
      title: 'Kinpira gobo',
      blocks: [
        {
          t: 'recipe',
          name: 'Kinpira gobo',
          photo: 'kinpira',
          jp: 'きんぴらごぼう',
          serves: 3,
          time: '20 minutes',
          tags: ['fibre', 'prebiotic', 'make-ahead'],
          ingredients: [
            { qty: 150, unit: 'g', item: 'burdock root (gobo)', note: 'scrubbed and cut into matchsticks' },
            { qty: 1, item: 'carrot', note: 'about 100 g, cut into matchsticks' },
            { qty: 1, unit: 'tsp', item: 'sesame oil' },
            { qty: 1, unit: 'tbsp', item: 'soy sauce' },
            { qty: 1, unit: 'tbsp', item: 'mirin' },
            { qty: 1, unit: 'tbsp', item: 'water or dashi' },
            { qty: 1, unit: 'tsp', item: 'toasted sesame seeds' },
            { item: 'Pinch of chilli, optional' },
          ],
          steps: [
            'Scrub the burdock with the back of a knife or a brush (do not peel off all the skin, where the flavour is). Cut into matchsticks and soak in water for 5 minutes to remove bitterness; drain.',
            'Heat the sesame oil in a pan. Stir-fry the burdock for 2 minutes, then add the carrot and cook 2 more minutes.',
            'Add the soy sauce, mirin and water. Cook over medium heat, stirring, until the liquid has almost gone (about 5 minutes).',
            'Sprinkle with sesame seeds and chilli. Serve warm or cold; it keeps for 3 to 4 days in the fridge.',
          ],
          why: 'Burdock is rich in fibre, including inulin, a prebiotic that feeds beneficial gut bacteria, and carrot adds beta-carotene. Fibre helps lower cholesterol and steady blood sugar and supports regular digestion. A little oil helps absorb the carotene.',
          note: 'Reduce the soy sauce and mirin if watching salt and sugar. Add fibre gradually if you are not used to it. Burdock can be hard to find outside Asian grocers; parsnip and carrot work as a substitute.',
        },
      ],
    },
    {
      id: 'sunomono',
      title: 'Sunomono (cucumber and wakame salad)',
      blocks: [
        {
          t: 'recipe',
          name: 'Sunomono',
          photo: 'sunomono',
          jp: '酢の物',
          serves: 2,
          time: '15 minutes',
          tags: ['low calorie', 'vinegar', 'refreshing'],
          ingredients: [
            { qty: 2, item: 'small Japanese or Persian cucumbers', note: 'about 200 g' },
            { qty: 0.5, unit: 'tsp', item: 'salt', note: 'to draw out water' },
            { qty: 1, unit: 'tbsp', item: 'dried wakame' },
            { qty: 3, unit: 'tbsp', item: 'rice vinegar' },
            { qty: 1, unit: 'tbsp', item: 'sugar', note: 'or less, to taste' },
            { qty: 1, unit: 'tsp', item: 'soy sauce' },
            { qty: 1, unit: 'tbsp', item: 'dashi', note: 'optional, to soften the dressing' },
          ],
          steps: [
            'Slice the cucumbers very thinly, toss with the salt and leave for 10 minutes. Squeeze out the water firmly.',
            'Soak the wakame in cold water for 5 minutes, drain and squeeze out the water. Cut into bite-sized pieces.',
            'Mix the vinegar, sugar, soy sauce and dashi until the sugar dissolves.',
            'Combine the cucumber and wakame with the dressing just before serving. Top with a pinch of sesame if you like.',
          ],
          why: 'Light, refreshing and very low in calories. Cucumber gives water and some potassium; wakame adds fibre and minerals; vinegar adds acidity, which in small studies slightly reduces the blood sugar rise after a starchy meal. Serving it alongside rice and fish balances a meal.',
          note: 'Salting the cucumber adds sodium, so squeeze it well and use less soy sauce. Wakame contains some iodine; this amount is fine for most people.',
        },
      ],
    },
    {
      id: 'kabocha',
      title: 'Kabocha no nimono (simmered pumpkin)',
      blocks: [
        {
          t: 'recipe',
          name: 'Kabocha no nimono',
          photo: 'kabocha',
          jp: 'かぼちゃの煮物',
          serves: 3,
          time: '25 minutes',
          tags: ['beta-carotene', 'potassium', 'comfort'],
          ingredients: [
            { qty: 300, unit: 'g', item: 'kabocha', note: 'seeds removed, cut into 3 cm chunks, skin partly left on' },
            { qty: 200, unit: 'ml', item: 'dashi' },
            { qty: 1, unit: 'tbsp', item: 'mirin' },
            { qty: 1, unit: 'tbsp', item: 'soy sauce' },
            { qty: 1, unit: 'tbsp', item: 'sugar', note: 'reduce to 2 tsp for less sweetness' },
          ],
          steps: [
            'Place the kabocha skin-side down in a single layer in a pot. Add the dashi, mirin, soy sauce and sugar.',
            'Bring to a boil, then cover with a drop-lid (otoshibuta) or baking paper and simmer on medium-low for 12 to 15 minutes until a skewer goes in easily.',
            'Turn off the heat and leave to cool in the pot so the flavour soaks in. Serve warm or at room temperature.',
          ],
          why: 'Kabocha provides beta-carotene (converted to vitamin A), vitamin C, potassium and fibre. It is sweet and starchy, so portion control matters for blood sugar; it counts as a starchy vegetable. The skin is edible and adds fibre.',
          note: 'The simmering liquid is salty and sweet; do not drink it all. If you are managing diabetes, count the pumpkin as part of your carbohydrate for the meal.',
        },
        { t: 'links', items: [{ path: 'food-therapy/food-for-goals/heart-and-blood-sugar', note: 'The principles behind these dishes' }, { path: 'food-therapy/minerals/major-minerals', note: 'Potassium and salt' }, { path: 'food-therapy/japanese/weekly-menu', note: 'A week of meals' }] },
      ],
    },
  ],
  sources: [
    'Ministry of Health, Labour and Welfare (Japan). Standard Tables of Food Composition in Japan.',
    'Johnston, C. S., Kim, C. M., and Buller, A. J. (2004). Vinegar improves insulin sensitivity to a high-carbohydrate meal in subjects with insulin resistance or type 2 diabetes. Diabetes Care.',
    'Reynolds, A., et al. (2019). Carbohydrate quality and human health. The Lancet.',
  ],
  related: ['food-therapy/food-for-goals/heart-and-blood-sugar', 'food-therapy/minerals/major-minerals', 'food-therapy/japanese/weekly-menu'],
}

export default guide
