import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A week of meals turns the ideas on this shelf into habit. This plan uses the ichiju-sansai pattern (rice, soup, a main and two sides), draws on the recipes in the previous guides, and rotates protein sources through fish, soy, egg and a little meat. It is a flexible template, not a prescription: swap freely, use leftovers, and adjust portions to your appetite and needs. It follows no single diet and is not designed for any medical condition.',
  nutshell: [
    'Each day aims for **one soup, one protein main, two vegetable sides and rice** at dinner, with lighter breakfasts and lunches.',
    'Over the week: **fish three or four times**, **soy foods daily**, **seaweed and mushrooms often**, **a variety of colours**, **fermented foods most days**.',
    'Batch-cook **dashi, rice and two or three sides** on one day, then assemble meals in minutes.',
    'Use the **swaps** at the end for vegetarians, low-salt, warfarin, gluten-free and other needs.',
    'Portions: moderate. Stop at about 80 per cent full.',
  ],
  sections: [
    {
      id: 'plan',
      title: 'The week',
      blocks: [
        {
          t: 'table',
          head: ['Day', 'Breakfast', 'Lunch', 'Dinner (rice, soup, main, two sides)'],
          rows: [
            ['Mon', 'Nattō rice bowl, miso soup', 'Onigiri (salmon or umeboshi), cucumber sticks, fruit', 'Rice; miso soup with tofu and wakame; saba shioyaki with daikon oroshi; spinach goma-ae; sunomono'],
            ['Tue', 'Toast or rice with egg, yogurt and fruit', 'Leftover saba shioyaki on rice with vegetables', 'Rice; miso soup with daikon; tofu and vegetable stir-fry; kinpira gobo; sliced tomato'],
            ['Wed', 'Okayu with egg and spring onion, pickled plum', 'Soba noodles with vegetables and egg', 'Rice; clear soup with mushrooms; chicken teriyaki (small portion); kabocha no nimono; komatsuna no nibitashi'],
            ['Thu', 'Nattō rice bowl, fruit', 'Tofu hiyayakko with shirasu, rice, pickled cabbage', 'Rice; miso soup with potato and onion; saba no misoni; ninjin shirishiri; sunomono'],
            ['Fri', 'Rice, miso soup, grilled fish leftover', 'Vegetable and tofu stir-fry with brown rice', 'Rice; miso soup with spinach; chawanmushi; kinpira gobo; steamed broccoli with sesame'],
            ['Sat', 'Tamago-kake gohan or tamagoyaki with rice, fruit', 'Udon with egg, spring onion and spinach (go easy on the broth)', 'Nabe (hot pot) with tofu, fish, vegetables and mushrooms; rice or noodles at the end'],
            ['Sun', 'Tori zosui or okayu, tea', 'Cold soba with grated daikon and wakame', 'Rice; miso soup; grilled salmon; simmered vegetables; goma-ae; fruit'],
          ],
          caption: 'A template. Replace any dish with another of similar type.',
        },
        { t: 'callout', tone: 'tip', title: 'Eat the rainbow, over the week', text: 'Across the days you will have white (rice, tofu, daikon), green (spinach, komatsuna, wakame), orange (carrot, kabocha), red (tomato, salmon), and dark (seaweed, mushrooms, sesame). It is an easy check that you are covering a range of nutrients.' },
      ],
    },
    {
      id: 'prep',
      title: 'Prep and shopping',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Shopping list (basics)', body: 'Rice, barley or brown rice, miso, soy sauce, kombu, katsuobushi, dried wakame, nori, tofu (silken and firm), aburaage, natto (freeze extra), eggs, mackerel, salmon, shirasu, chicken thigh, spinach, komatsuna, carrots, burdock, daikon, cucumber, kabocha, spring onion, ginger, mushrooms, sesame, rice vinegar, mirin, yuzu-cha, green tea.' },
            { title: 'Batch on the weekend (about an hour)', body: 'Make a litre of dashi, cook rice (portion and freeze), prepare kinpira gobo, sunomono (dress it on the day), and blanch spinach and komatsuna.' },
            { title: 'Midweek assembly (15 to 20 minutes)', body: 'Heat soup with miso, grill or simmer the fish, plate the sides, serve with rice.' },
            { title: 'Store smart', body: 'Fish: use within a day or two or freeze. Cooked sides: 3 to 4 days in the fridge. Natto and tofu: check dates.' },
          ],
        },
      ],
    },
    {
      id: 'swaps',
      title: 'Swaps for different needs',
      blocks: [
        {
          t: 'table',
          head: ['If you…', 'Try'],
          rows: [
            ['Are vegetarian or vegan', 'Use kombu and shiitake dashi; swap fish for tofu, nattō, edamame, eggs (if vegetarian); take a B12 supplement or fortified foods; check iodine and omega-3 (algae oil)'],
            ['Need less salt', 'Reduced-salt miso and soy sauce; less miso per bowl; leave some soup; rinse pickles; use more ginger, vinegar and citrus'],
            ['Take warfarin', 'Keep nattō and green vegetable amounts the same each day, and speak to your prescriber'],
            ['Avoid gluten', 'Soy sauce usually contains wheat; use tamari labelled gluten-free; check miso and mirin labels'],
            ['Are managing blood sugar', 'Smaller portion of rice with barley, more vegetables first, less sugar in simmered dishes; ask your dietitian about carbohydrate counts'],
            ['Are pregnant', 'Cook fish and eggs fully (no raw fish or runny egg); limit high-mercury fish; avoid liver; limit kombu; take folic acid as advised; see the safety page'],
            ['Are older with small appetite', 'Smaller, protein-rich meals more often (chawanmushi, tofu, fish, egg); softer textures; keep up fluids and vitamin D'],
            ['Have thyroid or kidney disease', 'Ask your doctor about seaweed (iodine) and about potassium and protein'],
          ],
        },
        { t: 'links', items: [{ path: 'food-therapy/safety', note: 'Safety, supplements and medicines' }, { path: 'food-therapy/japanese/pantry', note: 'The pantry list' }, { path: 'food-therapy/start-here', note: 'Back to the start' }] },
      ],
    },
  ],
  sources: [
    'Ministry of Health, Labour and Welfare, and Ministry of Agriculture, Forestry and Fisheries (Japan). Japanese Food Guide Spinning Top.',
    'Ministry of Health, Labour and Welfare (Japan). Dietary Reference Intakes for Japanese (2020).',
    'World Health Organization. Healthy diet fact sheet.',
  ],
  related: ['food-therapy/japanese/principles', 'food-therapy/japanese/pantry', 'food-therapy/safety'],
}

export default guide
