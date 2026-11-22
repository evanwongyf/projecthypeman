import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'When your stomach is upset, or you are recovering from illness, the aim is food that is gentle, warm, easy to digest and still has some protein and salt. Japanese home cooking has a whole family of such dishes. These four are classics: okayu (rice porridge), miso soup, chawanmushi (savoury egg custard) and grilled fish with grated daikon. Quantities scale with the buttons. Each recipe says what it does for you, and where the evidence is traditional rather than proven.',
  nutshell: [
    '**Okayu** is rice simmered in extra water: gentle, hydrating and soothing. It is the standard first food after a stomach upset.',
    '**Miso soup** gives warmth, fluids, salt and a little protein. Add vegetables and tofu for a fuller meal.',
    '**Chawanmushi** is a soft steamed egg custard: easy to swallow, full of protein.',
    '**Grated daikon** with grilled fish is a traditional digestive pairing; the claim that daikon enzymes help digestion is plausible but not strongly proven.',
    'If symptoms are severe or last more than a few days, see a doctor.',
  ],
  sections: [
    {
      id: 'okayu',
      title: 'Okayu (rice porridge)',
      blocks: [
        {
          t: 'recipe',
          name: 'Okayu',
          photo: 'okayu',
          jp: 'お粥',
          serves: 2,
          time: '50 minutes',
          tags: ['stomach', 'recovery', 'low fat'],
          ingredients: [
            { qty: 0.5, unit: 'cup', item: 'short-grain rice', note: 'about 90 g' },
            { qty: 2.5, unit: 'cups', item: 'water', note: 'five times the rice by volume' },
            { qty: 1, unit: 'pinch', item: 'salt' },
            { item: 'Optional toppings: a small umeboshi, grated ginger, finely sliced spring onion, a beaten egg' },
          ],
          steps: [
            'Rinse the rice gently and drain. Put it in a heavy pot with the water.',
            'Bring to a boil, give one stir, then cover with the lid slightly open and cook on the lowest heat for 40 to 50 minutes, until the grains are soft and the porridge is creamy.',
            'Add a pinch of salt at the end. Rest 5 minutes covered.',
            'Serve warm, with a small amount of topping. For a richer version, stir in a beaten egg for the last minute (tamago-gayu).',
          ],
          why: 'The extra water makes it soft, hydrating and very easy to digest, which is why it is the traditional first food after nausea or diarrhoea. It is a simple carbohydrate to restart eating, but low in protein, so add egg, tofu or fish as you recover.',
          note: 'Umeboshi is very salty, so use half a small one if you are watching salt. For diarrhoea or vomiting in a baby or an older adult, use oral rehydration solution and call a doctor.',
        },
      ],
    },
    {
      id: 'miso',
      title: 'Miso soup with tofu and wakame',
      blocks: [
        {
          t: 'recipe',
          name: 'Miso soup',
          photo: 'miso-soup',
          jp: '味噌汁',
          serves: 2,
          time: '10 minutes',
          tags: ['everyday', 'fermented', 'warming'],
          ingredients: [
            { qty: 400, unit: 'ml', item: 'dashi', note: 'see the pantry guide' },
            { qty: 80, unit: 'g', item: 'firm or silken tofu', note: 'cubed' },
            { qty: 1, unit: 'tbsp', item: 'dried wakame' },
            { qty: 1.5, unit: 'tbsp', item: 'miso', note: 'about 25 g; use less if salt-sensitive' },
            { qty: 1, item: 'spring onion, sliced' },
          ],
          steps: [
            'Soak the wakame in a little cold water for 5 minutes and drain.',
            'Heat the dashi to a simmer. Add the tofu and wakame and warm for 2 minutes.',
            'Turn the heat to low. Put the miso in a ladle, dip it into the soup and stir to dissolve it. Never boil the soup after the miso is in.',
            'Serve at once with spring onion on top.',
          ],
          why: 'A warm, savoury soup that supplies fluid, salt, some protein and live cultures if the miso is not boiled. In a Japanese-style meal it is the “soup” of ichiju-sansai. Add any vegetables (daikon, onion, spinach, mushrooms) for fibre and vitamins.',
          note: 'A bowl contains about 1 to 1.5 g of salt. If you have high blood pressure, use less miso and leave some of the liquid.',
        },
      ],
    },
    {
      id: 'chawanmushi',
      title: 'Chawanmushi (savoury steamed egg custard)',
      blocks: [
        {
          t: 'recipe',
          name: 'Chawanmushi',
          photo: 'chawanmushi',
          jp: '茶碗蒸し',
          serves: 2,
          time: '25 minutes',
          tags: ['protein', 'soft', 'recovery'],
          ingredients: [
            { qty: 2, item: 'eggs', note: 'about 100 g, beaten' },
            { qty: 300, unit: 'ml', item: 'cool dashi', note: 'three times the volume of the egg' },
            { qty: 1, unit: 'tsp', item: 'soy sauce', note: 'light-coloured (usukuchi) if you have it' },
            { qty: 1, unit: 'tsp', item: 'mirin' },
            { qty: 1, unit: 'pinch', item: 'salt' },
            { item: 'Fillings: 2 small chicken pieces, 2 shiitake slices, a few cooked prawns or spinach leaves' },
          ],
          steps: [
            'Beat the eggs gently without making foam. Mix with the cool dashi, soy sauce, mirin and salt. Strain through a sieve for a smooth custard.',
            'Divide the fillings between two heatproof cups. Pour in the egg mixture. Skim off any bubbles.',
            'Cover each cup with foil or a lid. Place in a steamer over simmering water. Cover the steamer lid with a cloth to catch drips.',
            'Steam on low for 12 to 15 minutes, until the surface is set and a skewer releases a clear liquid. A too-hot steamer makes bubbles and a rough texture.',
          ],
          why: 'A soft, high-protein food that is easy to eat when appetite is poor. Eggs provide protein, choline, B12 and vitamin D; the fillings add variety. Good for older adults and people recovering from illness.',
          note: 'Pregnant women, older adults and people with weakened immunity should make sure the custard is fully set and eggs are fresh. The egg:dashi ratio of 1 to 3 gives a soft set.',
        },
      ],
    },
    {
      id: 'saba',
      title: 'Grilled mackerel with grated daikon',
      blocks: [
        {
          t: 'recipe',
          name: 'Saba shioyaki with daikon oroshi',
          photo: 'saba-shioyaki',
          jp: '鯖の塩焼き 大根おろし添え',
          serves: 2,
          time: '20 minutes',
          tags: ['omega-3', 'vitamin D', 'digestive'],
          ingredients: [
            { qty: 2, item: 'mackerel fillets', note: 'about 100 g each, skin on' },
            { qty: 0.5, unit: 'tsp', item: 'salt', note: 'sprinkled over both fillets, 15 minutes before cooking' },
            { qty: 100, unit: 'g', item: 'daikon radish', note: 'grated, lightly drained' },
            { qty: 1, unit: 'tsp', item: 'soy sauce', note: 'to season the daikon' },
            { item: 'Lemon or sudachi wedge, to serve' },
          ],
          steps: [
            'Pat the fillets dry. Salt both sides and rest 15 minutes, then pat dry again to remove water and surface salt.',
            'Heat a grill or griddle. Grill skin-side first for 4 to 5 minutes, then flip and cook 3 to 4 minutes until cooked through and the skin is crisp.',
            'Grate the daikon, press lightly to drain, and shape into a small mound. Add a few drops of soy sauce.',
            'Serve the fish with the daikon and a wedge of lemon.',
          ],
          why: 'Mackerel is one of the best food sources of omega-3 fats, vitamin D and B12. Grated daikon is a traditional accompaniment said to help digest fatty or grilled fish; it contains amylase and other enzymes, but how much this helps in the gut is not established. The citrus adds vitamin C.',
          note: 'Choose mackerel from sustainable sources. Large fish such as king mackerel contain more mercury; the small Atlantic or chub (saba) is lower. Pregnant women should check local guidance on oily fish. Grate the daikon just before serving, as the enzymes diminish quickly.',
        },
        { t: 'links', items: [{ path: 'food-therapy/food-for-goals/gut-and-digestion', note: 'More on digestion and the gut' }, { path: 'food-therapy/japanese/pantry', note: 'Dashi and other staples' }, { path: 'food-therapy/japanese/recipes-colds-and-immunity', note: 'Next: colds and immunity' }] },
      ],
    },
  ],
  sources: [
    'Ministry of Health, Labour and Welfare (Japan). Standard Tables of Food Composition in Japan.',
    'Tsuji, S. (2007). Japanese Cooking: A Simple Art. Kodansha International.',
    'Oral rehydration therapy guidance: World Health Organization.',
    'US Food and Drug Administration and Environmental Protection Agency. Advice about eating fish.',
  ],
  related: ['food-therapy/food-for-goals/gut-and-digestion', 'food-therapy/japanese/pantry', 'food-therapy/japanese/recipes-colds-and-immunity'],
}

export default guide
