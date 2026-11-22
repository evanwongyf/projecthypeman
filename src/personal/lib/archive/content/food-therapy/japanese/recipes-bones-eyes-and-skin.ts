import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'For bones, eyes and skin, the nutrients to aim for are calcium, vitamin D, vitamin K, vitamin A and vitamin C, with enough protein. These three Japanese dishes deliver them with everyday ingredients: cold tofu topped with shirasu (tiny whitebait), komatsuna greens simmered with fried tofu, and carrot shirishiri (carrot and egg stir-fry, from Okinawa). They are quick, cheap and flexible.',
  nutshell: [
    '**Hiyayakko with shirasu**: tofu, calcium and protein, with the whitebait adding vitamin D and more calcium.',
    '**Komatsuna no nibitashi**: a leafy green with high calcium that the body absorbs well, plus vitamins K, A and C.',
    '**Ninjin shirishiri**: carrot (beta-carotene) cooked in oil with egg for protein and vitamin D.',
    'Fat-soluble vitamins (A, D, K) are absorbed better with a little oil or fat.',
    'Check the tofu label: tofu set with calcium sulphate has much more calcium than tofu set with nigari.',
  ],
  sections: [
    {
      id: 'hiyayakko',
      title: 'Hiyayakko with shirasu',
      blocks: [
        {
          t: 'recipe',
          name: 'Hiyayakko with shirasu',
          photo: 'hiyayakko',
          jp: '冷奴 しらす添え',
          serves: 2,
          time: '5 minutes',
          tags: ['calcium', 'vitamin D', 'no cooking'],
          ingredients: [
            { qty: 1, unit: 'block', item: 'silken or soft tofu', note: 'about 300 g, chilled' },
            { qty: 2, unit: 'tbsp', item: 'shirasu', note: 'tiny boiled whitebait; rinse in hot water to reduce salt' },
            { qty: 1, item: 'spring onion, sliced' },
            { qty: 1, unit: 'tsp', item: 'grated ginger' },
            { qty: 1, unit: 'tsp', item: 'soy sauce', note: 'or ponzu' },
            { item: 'A pinch of toasted sesame seeds' },
          ],
          steps: [
            'Drain the tofu on kitchen paper for a few minutes and cut it into two portions.',
            'Place on plates. Top with shirasu, spring onion and ginger.',
            'Dribble soy sauce over, sprinkle with sesame and serve cold.',
          ],
          why: 'Tofu is a source of protein and (if set with calcium) calcium. Shirasu, eaten whole with their bones, adds calcium and vitamin D. A no-cook, 5-minute dish that works as a side or light meal. Ginger and spring onion add flavour without much salt.',
          note: 'Shirasu is salty; blanching in hot water for a few seconds reduces the salt. Check that the tofu is fresh and consumed within a day or two of opening. Fish and soy allergy are the main cautions.',
        },
      ],
    },
    {
      id: 'komatsuna',
      title: 'Komatsuna and aburaage simmered in dashi',
      blocks: [
        {
          t: 'recipe',
          name: 'Komatsuna no nibitashi',
          photo: 'komatsuna',
          jp: '小松菜の煮浸し',
          serves: 2,
          time: '12 minutes',
          tags: ['calcium', 'vitamin K', 'vitamin A'],
          ingredients: [
            { qty: 200, unit: 'g', item: 'komatsuna', note: 'or spinach or bok choy; cut into 4 cm lengths' },
            { qty: 1, item: 'aburaage (fried tofu pouch)', note: 'blanched in hot water to remove oil; cut in strips' },
            { qty: 200, unit: 'ml', item: 'dashi' },
            { qty: 1, unit: 'tbsp', item: 'soy sauce' },
            { qty: 1, unit: 'tbsp', item: 'mirin' },
          ],
          steps: [
            'Pour boiling water over the aburaage to remove surface oil; drain and cut into strips.',
            'Bring the dashi, soy sauce and mirin to a simmer. Add the komatsuna stems and the aburaage and cook 1 minute.',
            'Add the leaves and cook 1 to 2 minutes more until just tender.',
            'Turn off the heat and leave to steep in the liquid for 5 minutes. Serve warm or chilled.',
          ],
          why: 'Komatsuna (Japanese mustard spinach) is unusual among leafy greens in being high in calcium that is well absorbed, because it is low in oxalate. It also gives vitamin K for bone, vitamin A for eyes and skin, and vitamin C. The aburaage adds protein and a little fat to help absorb the fat-soluble vitamins.',
          note: 'Spinach contains much more oxalate, so its calcium is poorly absorbed. Warfarin users should keep green vegetable intake steady from day to day.',
        },
      ],
    },
    {
      id: 'shirishiri',
      title: 'Ninjin shirishiri (carrot and egg)',
      blocks: [
        {
          t: 'recipe',
          name: 'Ninjin shirishiri',
          photo: 'ninjin-shirishiri',
          jp: 'にんじんしりしり',
          serves: 2,
          time: '10 minutes',
          tags: ['vitamin A', 'protein', 'Okinawan'],
          ingredients: [
            { qty: 1, item: 'large carrot', note: 'about 150 g, grated or shredded' },
            { qty: 1, unit: 'tsp', item: 'oil', note: 'sesame, olive or neutral' },
            { qty: 2, item: 'eggs', note: 'beaten' },
            { qty: 1, unit: 'tsp', item: 'soy sauce' },
            { item: 'Pinch of salt, black pepper, and bonito flakes (optional)' },
          ],
          steps: [
            'Heat the oil in a frying pan. Add the carrot and stir-fry for 2 to 3 minutes until soft.',
            'Season with the soy sauce and a pinch of salt.',
            'Pour in the beaten eggs and stir gently until just set and moist.',
            'Finish with pepper and bonito flakes if you like. Serve warm.',
          ],
          why: 'Carrot gives beta-carotene, which the body converts to vitamin A for the eyes and skin; cooking it in oil makes it much more absorbable. Eggs add protein, vitamin D, B12 and choline. A simple dish from Okinawa, where “shirishiri” means grated.',
          note: 'Large amounts of carotene-rich foods can tint the skin orange (harmless). Use a drizzle of oil rather than a lot.',
        },
        { t: 'links', items: [{ path: 'food-therapy/food-for-goals/bones-and-muscles', note: 'Feeding bones and muscles' }, { path: 'food-therapy/food-for-goals/eyes-and-skin', note: 'Eyes and skin' }, { path: 'food-therapy/vitamins/fat-soluble', note: 'Vitamins A, D, E and K' }] },
      ],
    },
  ],
  sources: [
    'Ministry of Health, Labour and Welfare (Japan). Standard Tables of Food Composition in Japan.',
    'Weaver, C. M., and Plawecki, K. L. (1994). Dietary calcium: adequacy of a vegetarian diet. American Journal of Clinical Nutrition (oxalate and calcium bioavailability).',
    'US National Institutes of Health, Office of Dietary Supplements. Fact sheets: Calcium, Vitamin A, Vitamin D.',
  ],
  related: ['food-therapy/food-for-goals/bones-and-muscles', 'food-therapy/food-for-goals/eyes-and-skin', 'food-therapy/vitamins/fat-soluble'],
}

export default guide
