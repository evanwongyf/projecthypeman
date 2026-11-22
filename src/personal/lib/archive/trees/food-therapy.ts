import type { ArchiveNode } from '../topics'

// Food therapy: what each vitamin and mineral does and where to find it, how to eat for
// particular goals (brain, energy, immunity, bones, eyes and skin, heart, gut, sleep and
// mood), and the Japanese tradition of food as care (shokuyo) with practical recipes. An
// education resource, not medical advice; foods support health but do not replace treatment.

export const FOOD_THERAPY: ArchiveNode = {
  slug: 'food-therapy',
  title: 'Food therapy & nutrition',
  blurb: 'What each vitamin and mineral does, which foods supply it, how to eat for a goal (brain, energy, immunity, bones, eyes, heart, gut, sleep, exams, inflammation), a photo gallery of therapeutic foods, Japanese recipes grouped by the kind of care they give, and detailed budget, dorm and accessible recipes.',
  glyph: '🍱',
  color: 'color-mix(in srgb, var(--mint) 55%, var(--mustard))',
  tags: ['food', 'nutrition', 'vitamins', 'minerals', 'diet', 'japanese', 'recipes', 'food therapy', 'shokuyo', 'washoku', 'health', 'healthy eating'],
  children: [
    {
      slug: 'start-here',
      title: 'Start here',
      blurb: 'What food therapy is and is not, how to use this shelf, and a route through the vitamins, the goals and the recipes.',
      minutes: 6,
      glyph: '★',
      tags: ['beginner', 'overview', 'roadmap'],
    },
    {
      slug: 'vitamins',
      title: 'Vitamins',
      group: 'Nutrients',
      blurb: 'The thirteen vitamins, what each does, how much you need, and the foods that supply them, with an interactive explorer.',
      glyph: '💊',
      tags: ['vitamin a', 'vitamin d', 'vitamin c', 'b12', 'folate', 'vitamin k', 'vitamin e'],
      children: [
        { slug: 'overview-and-explorer', title: 'Vitamins and minerals: the explorer', blurb: 'An interactive table of 21 nutrients: what each does, adult intake, upper limit, food sources (with Japanese examples), signs of too little and cautions.', minutes: 12, tags: ['explorer', 'rda', 'upper limit', 'deficiency'] },
        { slug: 'fat-soluble', title: 'Fat-soluble vitamins: A, D, E and K', blurb: 'Why these four are stored in the body, what each one does, and why more is not better.', minutes: 11, tags: ['vitamin a', 'vitamin d', 'vitamin e', 'vitamin k', 'sunlight'] },
        { slug: 'b-vitamins', title: 'The B vitamins and choline', blurb: 'Eight B vitamins and choline: energy, nerves, blood and the brain, and who is at risk of low B12 or folate.', minutes: 12, tags: ['b12', 'folate', 'thiamin', 'riboflavin', 'niacin', 'b6', 'biotin', 'choline'] },
        { slug: 'vitamin-c-and-antioxidants', title: 'Vitamin C and antioxidants', blurb: 'What vitamin C really does (and does not do for colds), and what an “antioxidant” is.', minutes: 9, tags: ['vitamin c', 'antioxidant', 'free radical', 'scurvy', 'colds'] },
      ],
    },
    {
      slug: 'minerals',
      title: 'Minerals',
      blurb: 'The minerals the body needs in larger and in tiny amounts, with the foods that supply them and the risks of too much.',
      glyph: '⚙',
      tags: ['calcium', 'iron', 'zinc', 'magnesium', 'iodine', 'selenium', 'potassium', 'sodium'],
      children: [
        { slug: 'major-minerals', title: 'Calcium, magnesium, potassium and sodium', blurb: 'The bulk minerals: bones, muscle, nerves, blood pressure and fluid balance.', minutes: 11, tags: ['calcium', 'magnesium', 'potassium', 'sodium', 'salt', 'blood pressure'] },
        { slug: 'trace-minerals', title: 'Iron, zinc, iodine, selenium and the trace minerals', blurb: 'Needed in small amounts, important in every cell: blood, immunity, thyroid and antioxidants.', minutes: 11, tags: ['iron', 'zinc', 'iodine', 'selenium', 'copper', 'anaemia', 'thyroid'] },
      ],
    },
    {
      slug: 'food-for-goals',
      title: 'Eating for a goal',
      group: 'Eating well',
      blurb: 'Eight guides that start from what you want (a clear head, steady energy, strong bones, good sleep) and work back to the foods and nutrients that help, and what the evidence says.',
      glyph: '🎯',
      tags: ['goal', 'brain food', 'energy', 'immunity', 'bones', 'eyes', 'skin', 'heart', 'gut', 'sleep', 'mood'],
      children: [
        { slug: 'brain-and-focus', title: 'Brain and focus', blurb: 'Foods and patterns linked to sharper thinking and healthy ageing: omega-3 fats, B vitamins, choline, iron, and what is hype.', minutes: 11, tags: ['brain', 'focus', 'omega-3', 'memory', 'mediterranean'] },
        { slug: 'energy-and-fatigue', title: 'Steady energy and fatigue', blurb: 'How meals shape energy through the day, the common nutritional causes of tiredness, and when fatigue needs a doctor.', minutes: 10, tags: ['energy', 'fatigue', 'glycaemic', 'iron', 'b12', 'tired'] },
        { slug: 'immunity', title: 'Immunity and recovery', blurb: 'What the immune system needs from food, what helps during a cold, and which immunity claims fall short.', minutes: 10, tags: ['immunity', 'cold', 'flu', 'zinc', 'vitamin c', 'vitamin d', 'recovery'] },
        { slug: 'bones-and-muscles', title: 'Bones and muscles', blurb: 'Calcium, vitamin D, vitamin K, protein and magnesium, and how to build and keep bone and muscle at every age.', minutes: 11, tags: ['bones', 'osteoporosis', 'calcium', 'protein', 'muscle', 'sarcopenia'] },
        { slug: 'eyes-and-skin', title: 'Eyes and skin', blurb: 'Vitamin A, lutein, vitamin C, zinc and omega-3 for eyes, skin and hair, and which claims are marketing.', minutes: 9, tags: ['eyes', 'skin', 'hair', 'lutein', 'collagen', 'vitamin a'] },
        { slug: 'heart-and-blood-sugar', title: 'Heart and blood sugar', blurb: 'Fibre, fish, potassium, less salt and refined starch: eating for blood pressure, cholesterol and blood sugar.', minutes: 12, tags: ['heart', 'cholesterol', 'blood pressure', 'blood sugar', 'diabetes', 'fibre', 'salt'] },
        { slug: 'gut-and-digestion', title: 'Gut and digestion', blurb: 'Fibre, fermented foods, the gut microbiome, and what to eat when your stomach is upset.', minutes: 11, tags: ['gut', 'digestion', 'fibre', 'probiotics', 'fermented', 'microbiome', 'constipation'] },
        { slug: 'exams-and-study', title: 'Exams and long study days', blurb: 'Eating for concentration and memory during revision and exams: meal timing, caffeine done right, snacks that do not crash, hydration and the night before.', minutes: 11, tags: ['exams', 'study', 'concentration', 'caffeine', 'snacks', 'students', 'revision'] },
        { slug: 'anti-inflammatory', title: 'Anti-inflammatory eating', blurb: 'What chronic inflammation is, the eating patterns linked to lower inflammation (Mediterranean, Japanese, Nordic), turmeric, ginger and omega-3, and what the trials show.', minutes: 12, tags: ['inflammation', 'anti-inflammatory', 'turmeric', 'omega-3', 'mediterranean', 'arthritis'] },
        { slug: 'sleep-and-mood', title: 'Sleep and mood', blurb: 'What eating does to sleep and mood: timing, caffeine, alcohol, tryptophan, magnesium, and the diet-and-depression evidence.', minutes: 10, tags: ['sleep', 'mood', 'caffeine', 'alcohol', 'depression', 'tryptophan'] },
      ],
    },
    {
      slug: 'japanese',
      title: 'Japanese food therapy',
      group: 'Japanese food therapy',
      blurb: 'The ideas behind washoku and shokuyo, the therapeutic pantry (miso, natto, seaweed, ginger, umeboshi, green tea), and recipes grouped by the care they give.',
      glyph: '🍙',
      tags: ['japanese', 'washoku', 'shokuyo', 'miso', 'natto', 'dashi', 'okayu', 'recipes', 'seaweed'],
      children: [
        { slug: 'principles', title: 'Shokuyo and washoku: food as care', blurb: 'Where the Japanese idea of food as medicine comes from, the meal pattern of one soup and three dishes, and what the research on the Japanese diet shows (including its salt problem).', minutes: 12, tags: ['shokuyo', 'washoku', 'ichiju-sansai', 'longevity', 'hara hachi bu', 'yojokun'] },
        { slug: 'pantry', title: 'The therapeutic pantry', blurb: 'Miso, natto, seaweed, dashi, tofu, ginger, umeboshi, green tea, shiitake, sesame: what each offers and how to buy and use it.', minutes: 12, tags: ['miso', 'natto', 'kombu', 'wakame', 'dashi', 'tofu', 'ginger', 'umeboshi', 'matcha', 'shiitake'] },
        { slug: 'recipes-digestion-and-recovery', title: 'Recipes for digestion and recovery', blurb: 'Okayu (rice porridge), chawanmushi, miso soup and grilled fish with grated daikon: gentle meals for an upset stomach or a slow recovery.', minutes: 12, tags: ['okayu', 'chawanmushi', 'miso soup', 'recipe', 'recovery', 'stomach'] },
        { slug: 'recipes-colds-and-immunity', title: 'Recipes for colds and immunity', blurb: 'Tori zosui (chicken rice soup), kuzuyu with ginger, and yuzu tea: warm, simple dishes for when you are run down.', minutes: 9, tags: ['zosui', 'kuzu', 'ginger', 'yuzu', 'cold', 'recipe'] },
        { slug: 'recipes-energy-and-brain', title: 'Recipes for energy and the brain', blurb: 'Nattō rice bowl, miso-simmered mackerel and spinach goma-ae: B vitamins, omega-3 fats, folate and protein.', minutes: 10, tags: ['natto', 'mackerel', 'goma-ae', 'recipe', 'omega-3', 'brain'] },
        { slug: 'recipes-heart-and-blood-sugar', title: 'Recipes for the heart and blood sugar', blurb: 'Kinpira gobo, sunomono and simmered kabocha: fibre, potassium and less salt.', minutes: 10, tags: ['kinpira', 'sunomono', 'kabocha', 'recipe', 'fibre'] },
        { slug: 'recipes-bones-eyes-and-skin', title: 'Recipes for bones, eyes and skin', blurb: 'Hiyayakko with shirasu, komatsuna simmered with fried tofu, and carrot shirishiri: calcium, vitamin D, vitamin A and vitamin K.', minutes: 10, tags: ['tofu', 'komatsuna', 'carrot', 'shirasu', 'recipe', 'calcium'] },
        { slug: 'weekly-menu', title: 'A week of Japanese-style meals', blurb: 'A seven-day plan using the ichiju-sansai pattern, with shopping and prep notes and swaps for different needs.', minutes: 10, tags: ['menu', 'meal plan', 'week', 'ichiju-sansai', 'shopping'] },
      ],
    },
    {
      slug: 'foods-gallery',
      title: 'Therapeutic foods in pictures',
      group: 'Eating well',
      blurb: 'Forty-odd everyday foods with real photographs: what each one offers, the nutrients it is richest in, and simple ways to eat more of it.',
      glyph: '📷',
      minutes: 12,
      tags: ['gallery', 'photos', 'superfoods', 'salmon', 'eggs', 'lentils', 'berries', 'kimchi'],
    },
    {
      slug: 'recipes',
      title: 'Everyday recipes',
      group: 'Recipes',
      blurb: 'Detailed recipes with ingredients, equipment, steps, costs and photos: bistro dishes on a budget, dorm cooking with a microwave and kettle, and accessible healthy meals for low energy or limited mobility.',
      glyph: '🍳',
      tags: ['recipes', 'budget', 'student', 'dorm', 'microwave', 'accessible', 'easy', 'healthy'],
      children: [
        { slug: 'budget-posh', title: 'Posh food on a budget', blurb: 'Steak frites, coq au vin, moules marinières, salmon en papillote, cacio e pepe, mushroom risotto, French onion soup and crème brûlée, with bistro techniques that make cheap ingredients sing.', minutes: 25, tags: ['budget', 'posh', 'bistro', 'french', 'italian', 'date night', 'steak', 'risotto'] },
        { slug: 'dorm', title: 'Dorm food: microwave, kettle, rice cooker', blurb: 'Mug omelette, microwave fried rice, jacket potatoes, mug cake, upgraded instant noodles, couscous salad, overnight oats and rice-cooker chicken rice, plus a dorm pantry list.', minutes: 18, tags: ['dorm', 'student', 'microwave', 'kettle', 'rice cooker', 'cheap', 'hostel'] },
        { slug: 'accessible-healthy', title: 'Accessible healthy recipes', blurb: 'Low-effort, low-chopping, sit-down-friendly meals for fatigue, pain, limited mobility or low mood: yoghurt bowls, no-cook salads, tray bakes, lentil soup, slow cooker chilli.', minutes: 18, tags: ['accessible', 'disability', 'fatigue', 'arthritis', 'easy', 'one pan', 'slow cooker', 'no cook'] },
      ],
    },
    {
      slug: 'safety',
      title: 'Safety, supplements and when food is not enough',
      group: 'Using it safely',
      blurb: 'Who should be careful (pregnancy, medicines, kidney and thyroid disease, allergies), how supplements go wrong, and when to see a doctor or dietitian.',
      glyph: '⚠',
      tags: ['safety', 'supplements', 'interactions', 'pregnancy', 'allergy', 'warfarin', 'dietitian'],
      minutes: 11,
    },
  ],
}
