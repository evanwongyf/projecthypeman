import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'For steady energy and a clear head, the useful ingredients are protein, B vitamins, omega-3 fats, folate and iron, all of which Japanese home cooking delivers cheaply. These three recipes are quick: a nattō rice bowl for breakfast, miso-simmered mackerel for dinner, and spinach with sesame dressing as a side. Each says what it gives you and what to watch.',
  nutshell: [
    '**Nattō rice bowl**: protein, fibre, vitamin K2 and B vitamins in a minute; warfarin users take care.',
    '**Saba no misoni** (miso-simmered mackerel): omega-3 fats, vitamin D and B12, with a savoury sauce.',
    '**Horenso no goma-ae** (spinach in sesame dressing): folate, vitamin K, iron, calcium and magnesium.',
    'Eat the three together with rice and miso soup for a complete brain-supporting meal.',
    'No single food makes you smarter; they support a good pattern.',
  ],
  sections: [
    {
      id: 'natto',
      title: 'Nattō rice bowl',
      blocks: [
        {
          t: 'recipe',
          name: 'Nattō gohan',
          photo: 'natto-gohan',
          jp: '納豆ご飯',
          serves: 1,
          time: '5 minutes',
          tags: ['breakfast', 'protein', 'fermented'],
          ingredients: [
            { qty: 1, unit: 'pack', item: 'nattō', note: 'about 45 g, with its sauce sachet' },
            { qty: 1, unit: 'bowl', item: 'warm cooked rice', note: 'about 150 g' },
            { qty: 1, item: 'spring onion, finely sliced' },
            { qty: 1, item: 'egg yolk', note: 'optional' },
            { item: 'A little karashi (Japanese mustard) from the sachet, optional' },
          ],
          steps: [
            'Open the nattō and stir with chopsticks 20 to 30 times until it turns sticky and pale.',
            'Add the sauce sachet and karashi. Stir again.',
            'Spoon over the warm rice. Top with spring onion and, if you like, an egg yolk.',
          ],
          why: 'A pack of nattō has about 8 g of protein, fibre, iron, B vitamins and a large amount of vitamin K2. The combination with rice makes a quick complete meal. The fermentation makes soy easier to digest.',
          note: 'Warfarin users: nattō can reduce the drug’s effect; ask your prescriber. Some people find the smell or texture strong; start with a small amount. The sauce sachet is salty, so use half if you are watching sodium.',
        },
      ],
    },
    {
      id: 'saba',
      title: 'Saba no misoni (mackerel simmered in miso)',
      blocks: [
        {
          t: 'recipe',
          name: 'Saba no misoni',
          photo: 'saba-misoni',
          jp: '鯖の味噌煮',
          serves: 2,
          time: '20 minutes',
          tags: ['omega-3', 'vitamin D', 'B12'],
          ingredients: [
            { qty: 2, item: 'mackerel fillets', note: 'about 100 g each, cut in two' },
            { qty: 150, unit: 'ml', item: 'water' },
            { qty: 2, unit: 'tbsp', item: 'sake' },
            { qty: 1, unit: 'tbsp', item: 'mirin' },
            { qty: 1, unit: 'tbsp', item: 'sugar', note: 'use less if you prefer a savoury taste' },
            { qty: 2, unit: 'tbsp', item: 'miso' },
            { qty: 1, unit: 'thumb', item: 'ginger', note: 'sliced thinly' },
            { item: 'Spring onion or shredded leek, to garnish' },
          ],
          steps: [
            'Pour boiling water over the mackerel pieces in a sieve to remove any fishy smell, then drain and pat dry.',
            'In a shallow pan, combine the water, sake, mirin, sugar and ginger. Bring to a boil.',
            'Add the mackerel skin-side up, cover with a drop-lid or a piece of baking paper, and simmer for 8 to 10 minutes.',
            'Mix the miso with a ladle of the hot liquid until smooth, then stir it into the pan. Spoon the sauce over the fish for 2 to 3 minutes until glossy.',
            'Serve with rice, garnished with spring onion.',
          ],
          why: 'Mackerel is one of the richest sources of EPA and DHA omega-3 fats, which are important for brain and heart, plus vitamin D and B12. Ginger helps with the fishy smell and adds warmth. The miso sauce is salty and sweet, so enjoy a small spoonful rather than drinking the sauce.',
          note: 'Pregnant women and young children should choose lower-mercury fish and follow local guidance. Reduce sugar and salt for blood pressure or diabetes. Use fresh fish; mackerel spoils quickly.',
        },
      ],
    },
    {
      id: 'goma-ae',
      title: 'Horenso no goma-ae (spinach with sesame)',
      blocks: [
        {
          t: 'recipe',
          name: 'Spinach goma-ae',
          photo: 'goma-ae',
          jp: 'ほうれん草の胡麻和え',
          serves: 2,
          time: '10 minutes',
          tags: ['folate', 'iron', 'side dish'],
          ingredients: [
            { qty: 200, unit: 'g', item: 'spinach' },
            { qty: 2, unit: 'tbsp', item: 'white sesame seeds', note: 'toasted and ground, or 1 tbsp sesame paste' },
            { qty: 1, unit: 'tsp', item: 'soy sauce' },
            { qty: 1, unit: 'tsp', item: 'sugar', note: 'or mirin' },
            { qty: 1, unit: 'tsp', item: 'dashi', note: 'optional, to loosen' },
          ],
          steps: [
            'Boil a pot of water. Blanch the spinach stems first for 20 seconds, then the leaves for 30 seconds more. Plunge into cold water.',
            'Squeeze out the water firmly and cut into 4 cm lengths.',
            'Toast the sesame seeds in a dry pan until fragrant and grind them in a mortar (suribachi) or with a spoon.',
            'Mix the sesame with soy sauce and sugar, add the spinach and toss gently.',
          ],
          why: 'Spinach gives folate, vitamin K, vitamin A and some iron; sesame adds calcium, magnesium, vitamin E and healthy fats. Grinding sesame releases the nutrients. Blanching reduces oxalates, though spinach is still not a good calcium source. The vitamin C is partly lost in cooking, so a squeeze of citrus helps iron absorption.',
          note: 'Spinach contains oxalate, which can matter for people prone to kidney stones. Vary the greens: komatsuna and small mustard greens are lower in oxalate.',
        },
        { t: 'links', items: [{ path: 'food-therapy/food-for-goals/brain-and-focus', note: 'Eating for the brain' }, { path: 'food-therapy/vitamins/b-vitamins', note: 'Folate and B12' }, { path: 'food-therapy/japanese/weekly-menu', note: 'Using these in a week of meals' }] },
      ],
    },
  ],
  sources: [
    'Ministry of Health, Labour and Welfare (Japan). Standard Tables of Food Composition in Japan.',
    'US National Institutes of Health, Office of Dietary Supplements. Fact sheets: Vitamin K, Folate.',
    'US Food and Drug Administration. Advice about eating fish (mercury levels in fish).',
  ],
  related: ['food-therapy/food-for-goals/brain-and-focus', 'food-therapy/food-for-goals/energy-and-fatigue', 'food-therapy/japanese/weekly-menu'],
}

export default guide
