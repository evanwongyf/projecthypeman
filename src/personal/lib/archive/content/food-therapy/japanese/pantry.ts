import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A Japanese kitchen runs on a small set of ingredients used in many ways. Stocking them lets you cook the recipes on this shelf and a hundred variations. This guide describes each pantry staple, what it offers nutritionally, what to watch (salt, iodine, vitamin K), and how to buy and store it. It is a practical shopping list for a therapeutic Japanese pantry.',
  nutshell: [
    '**Dashi** (kombu, bonito, or shiitake stock) gives savoury depth with very little salt.',
    '**Miso, natto and tsukemono** are fermented, giving live cultures, protein and flavour, but miso and pickles are salty.',
    '**Seaweed** (nori, wakame, kombu) provides minerals, especially iodine; moderate kombu and avoid daily kelp supplements. Eat hijiki only occasionally.',
    '**Tofu, eggs, fish** supply protein; **ginger, umeboshi, sesame, citrus** add flavour and traditional remedies.',
    '**Green tea** gives catechins and L-theanine, with caffeine.',
  ],
  sections: [
    {
      id: 'stock',
      title: 'The pantry at a glance',
      blocks: [
        {
          t: 'table',
          head: ['Ingredient', 'What it offers', 'What to watch', 'Buy and store'],
          rows: [
            ['Kombu (kelp)', 'Glutamate (umami), iodine, minerals', 'Very high in iodine; do not eat in large amounts daily', 'Dried sheets; keep dry; use for dashi, then reuse once or twice'],
            ['Katsuobushi (dried bonito)', 'Umami, protein, B vitamins', 'Fish allergy', 'Small packs; keep sealed; shave or buy pre-shaved'],
            ['Dried shiitake', 'Umami (guanylate), vitamin D2 if sun-dried, fibre', 'Soak in cold water for a rich stock', 'Whole dried; keep dry'],
            ['Miso', 'Fermented soy: protein, B vitamins, live cultures if raw', 'Salty (about 12 per cent salt for typical miso); choose reduced-salt if needed', 'Refrigerate after opening; add at the end, off the boil'],
            ['Natto', 'Protein, vitamin K2, fibre, B vitamins, iron', 'Vitamin K and warfarin; some find the smell strong', 'Frozen or fridge packs; freeze for longer storage'],
            ['Tofu', 'Plant protein, calcium (if set with calcium sulphate), isoflavones', 'Soy allergy', 'Fridge; use within a few days of opening; silken, firm and fried (aburaage)'],
            ['Wakame', 'Minerals, fibre, iodine in moderate amounts', 'Iodine, salt in some packs', 'Dried; soak 5 minutes'],
            ['Nori', 'Fibre, B12-like compounds, iodine', 'Moderate iodine; B12 absorption uncertain', 'Keep dry; reseal'],
            ['Hijiki', 'Fibre, minerals', 'Contains inorganic arsenic; eat rarely, if at all (see the safety page)', 'Dried'],
            ['Ginger (shoga)', 'Aroma; traditional for warming and nausea', 'May interact with blood thinners at very large doses', 'Fresh root, fridge or freezer'],
            ['Umeboshi (pickled ume)', 'Sour; traditional for tired days and upset stomach', 'Very salty', 'Jar; a little goes far'],
            ['Sesame (goma)', 'Calcium, magnesium, vitamin E, healthy fats', 'Grind or use paste for absorption; allergen', 'Roasted seeds, dark or white; sesame oil'],
            ['Green tea (sencha, matcha, hojicha)', 'Catechins, L-theanine, small amounts of fluoride', 'Caffeine (hojicha has less)', 'Keep sealed and dark'],
            ['Mirin, sake, rice vinegar', 'Seasoning', 'Sugar in mirin; alcohol is cooked off but not entirely', 'Shelf-stable'],
            ['Soy sauce (shoyu)', 'Salty, umami', 'About 2.5 g salt per tablespoon; use reduced-salt for blood pressure', 'Refrigerate after opening for best flavour'],
          ],
        },
      ],
    },
    {
      id: 'dashi',
      title: 'Dashi: the foundation',
      blocks: [
        { t: 'p', text: 'Dashi is a light stock that gives savoury depth, which is why Japanese food can taste rich with little salt or fat. The umami comes from glutamate in kombu, inosinate in bonito and guanylate in dried shiitake; combining them is greater than the sum of the parts.' },
        {
          t: 'recipe',
          name: 'Awase dashi (kombu and bonito stock)',
          photo: 'dashi',
          jp: '合わせだし',
          serves: 4,
          time: '15 minutes',
          tags: ['basic', 'low salt', 'foundation'],
          ingredients: [
            { qty: 1, unit: 'litre', item: 'cold water' },
            { qty: 10, unit: 'g', item: 'kombu', note: 'a piece about 10 × 10 cm' },
            { qty: 15, unit: 'g', item: 'katsuobushi', note: 'bonito flakes, a large handful' },
          ],
          steps: [
            'Wipe the kombu with a dry cloth (do not wash off the white powder, which is umami). Put it in the water in a pot and soak for 30 minutes if you have time.',
            'Heat gently. Remove the kombu just before the water boils (about 5 to 10 minutes) to avoid bitterness.',
            'Bring to a boil, switch off the heat, add the katsuobushi and let it sink. Wait 2 minutes.',
            'Strain through a fine sieve without pressing. Use the same day, or refrigerate for up to 2 days.',
          ],
          why: 'Gives savoury depth with almost no salt, so soups and simmered dishes need less soy sauce or miso. The used kombu and bonito can be reused for a lighter second stock or chopped into dishes.',
          note: 'For a vegan stock, soak 10 g kombu and 2 dried shiitake in 1 litre of cold water overnight in the fridge, then warm gently. Instant dashi powders are convenient but often salty and contain flavour enhancers.',
        },
        { t: 'callout', tone: 'warn', title: 'Kombu and iodine', text: 'Kombu used to make dashi leaches iodine into the water. Making dashi daily is typical in Japan and is considered fine for most people, but eating large amounts of kombu or kelp tablets can exceed the upper limit. If you have thyroid disease, or are pregnant, ask your doctor.' },
      ],
    },
    {
      id: 'buy',
      title: 'Buying and using the pantry',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Start', title: 'A starter kit', body: 'Kombu, katsuobushi, miso, soy sauce, mirin, rice vinegar, sesame, dried wakame, tofu, eggs, ginger, nori. This covers most recipes here.' },
            { tag: 'Salt', title: 'Check the labels', body: 'Soy sauce, miso, pickles and instant dashi vary widely in salt. Compare labels and consider reduced-salt versions.' },
            { tag: 'Fresh', title: 'Buy the perishables little and often', body: 'Natto, tofu, fish and fresh vegetables are best bought fresh and used within days.' },
            { tag: 'Where', title: 'Where to shop', body: 'Asian supermarkets, Japanese grocers and larger supermarkets stock most items; online shops offer the rest.' },
          ],
        },
        { t: 'links', items: [{ path: 'food-therapy/japanese/recipes-digestion-and-recovery', note: 'Start with okayu and miso soup' }, { path: 'food-therapy/safety', note: 'Hijiki, kombu and other cautions' }, { path: 'food-therapy/food-for-goals/gut-and-digestion', note: 'Fermented foods and the gut' }] },
      ],
    },
  ],
  sources: [
    'Ministry of Health, Labour and Welfare (Japan). Standard Tables of Food Composition in Japan (8th revised edition).',
    'Ninomiya, K. (2002). Umami: a universal taste. Food Reviews International.',
    'UK Food Standards Agency (2004). Advice on hijiki seaweed; Japan Ministry of Health, Labour and Welfare (2004), Q&A on arsenic in hijiki.',
    'US National Institutes of Health, Office of Dietary Supplements. Iodine fact sheet.',
  ],
  related: ['food-therapy/japanese/principles', 'food-therapy/japanese/recipes-digestion-and-recovery', 'food-therapy/safety'],
}

export default guide
