import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'No food will add marks to an exam you have not revised for. But hunger, dehydration, sugar crashes, too much caffeine and poor sleep can all take marks away. This guide is about removing those handicaps during revision and on the day itself.',
  nutshell: [
    '**Regular meals** with protein, fibre and slow carbohydrate keep blood sugar and attention steady.',
    '**Hydration** matters: even mild dehydration (about 2% of body weight) can worsen attention and mood.',
    '**Caffeine** helps alertness in moderate doses (about 1–3 mg per kg body weight); stop by early afternoon to protect sleep, and do not try energy drinks for the first time on exam day.',
    '**Sleep beats cramming**: memory consolidates during sleep, so late-night study fuelled by caffeine often backfires.',
  ],
  sections: [
    {
      id: 'in-pictures',
      title: 'The key foods in pictures',
      blocks: [
        { t: 'food-photos', items: [
          { photo: 'f-oats', title: 'Oats', body: 'Steady energy for long mornings' },
          { photo: 'f-eggs', title: 'Eggs', body: 'Protein and choline' },
          { photo: 'f-banana', title: 'Bananas', body: 'Quick pre-exam snack' },
          { photo: 'f-walnuts', title: 'Nuts', body: 'Desk snack' },
          { photo: 'f-green-tea', title: 'Green tea', body: 'Gentle caffeine' },
          { photo: 'f-yogurt', title: 'Yoghurt', body: 'Protein snack' },
        ] },
      ],
    },
    {
      id: 'day',
      title: 'A revision day',
      blocks: [
        { t: 'table', head: ['When', 'Eat', 'Why'], rows: [
          ['Breakfast', 'Oats with milk and fruit, eggs on wholemeal toast, or yoghurt with nuts', 'Slow energy and protein for a long morning'],
          ['Mid-morning', 'Fruit and a handful of nuts; water', 'Avoid the mid-morning dip'],
          ['Lunch', 'Half plate vegetables, quarter protein, quarter wholegrains (e.g. chicken rice with greens, a grain bowl)', 'Avoid a heavy, greasy lunch that brings an afternoon slump'],
          ['Afternoon', 'Yoghurt, hummus with carrots, banana with peanut butter; green tea', 'Gentle caffeine and steady energy'],
          ['Dinner', 'Oily fish or tofu, vegetables, rice or potatoes', 'Omega-3, protein and carbs that help sleep'],
          ['Evening', 'Warm milk or a small snack if hungry; no caffeine after about 2 pm', 'Protects sleep'],
        ] },
      ],
    },
    {
      id: 'caffeine',
      title: 'Caffeine, honestly',
      blocks: [
        { t: 'table', head: ['Drink', 'Caffeine (approx.)'], rows: [
          ['Espresso shot', '60–80 mg'], ['Kopi (Singapore coffee, 1 cup)', '100–150 mg'], ['Black or milk tea', '40–60 mg'], ['Green tea', '25–40 mg'], ['Cola (330 ml)', '30–40 mg'], ['Energy drink (250 ml)', '80 mg; large cans 160 mg+'],
        ] },
        { t: 'callout', tone: 'warn', title: 'Limits', text: 'Health authorities advise no more than about 400 mg a day for healthy adults and about 3 mg per kg for teenagers. More causes jitters, anxiety, a racing heart and broken sleep, which all hurt exam performance.' },
      ],
    },
    {
      id: 'exam-day',
      title: 'The night before and exam day',
      blocks: [
        { t: 'checklist', items: [
          'Eat a normal, familiar dinner the night before, not a new dish or a heavy takeaway.',
          'Sleep beats one more hour of revision.',
          'Eat breakfast even if nervous: toast with peanut butter, a banana, yoghurt.',
          'Bring water and a quiet snack if allowed (banana, nuts, a cereal bar).',
          'Keep your usual caffeine; do not double it.',
          'For an afternoon paper, eat a lighter lunch 1–2 hours before.',
        ] },
      ],
    },
  ],
  sources: [
    'Adan, A. (2012). Cognitive performance and dehydration. Journal of the American College of Nutrition 31(2).',
    'McLellan, T. M., Caldwell, J. A. & Lieberman, H. R. (2016). A review of caffeine’s effects on cognitive, physical and occupational performance. Neuroscience & Biobehavioral Reviews 71.',
    'Adolphus, K., Lawton, C. L. & Dye, L. (2013). The effects of breakfast on behavior and academic performance in children and adolescents. Frontiers in Human Neuroscience 7.',
  ],
  related: ['food-therapy/food-for-goals/brain-and-focus', 'food-therapy/recipes/dorm'],
}

export default guide
