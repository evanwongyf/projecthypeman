import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'No food makes a child gifted. But the brain grows fastest in pregnancy and the first years of life, and shortages of a handful of nutrients, iron, iodine, omega-3 fats, choline, can measurably lower cognitive development. Sleep, exercise and screen habits matter at every age. This guide sets out what the evidence supports, and what it does not.',
  nutshell: [
    'The biggest dietary risks to brain development are **deficiencies**: iron (attention and learning), iodine (IQ), and to a lesser extent DHA omega-3, choline, vitamin B12 and zinc.',
    'A varied diet with fish, eggs, meat or iron-rich alternatives, dairy or fortified substitutes, whole grains, fruit and vegetables covers almost all of it.',
    '**Sleep** is the most underrated factor: school-age children need 9–12 hours, teenagers 8–10.',
    'Regular **exercise** improves attention and executive function; heavy recreational screen time is linked to poorer sleep and language.',
  ],
  sections: [
    {
      id: 'nutrients',
      title: 'Nutrients that matter for the brain',
      blocks: [
        { t: 'table', head: ['Nutrient', 'Why it matters', 'Good sources', 'Watch for'], rows: [
          ['Iron', 'Myelination, dopamine; deficiency in infancy is linked to lower cognitive and motor scores, sometimes lasting', 'Red meat, liver, fish, beans and lentils, fortified cereals, leafy greens (with vitamin C)', 'Toddlers drinking lots of cow’s milk; vegetarian diets; teenage girls'],
          ['Iodine', 'Thyroid hormones for brain development; deficiency in pregnancy can lower a child’s IQ', 'Fish, dairy, eggs, seaweed, iodised salt', 'Pregnancy and breastfeeding; plant-based diets'],
          ['DHA (omega-3)', 'A major structural fat in the brain and retina', 'Oily fish (salmon, sardines, mackerel) twice a week; algae oil', 'Children who never eat fish'],
          ['Choline', 'Memory development; synthesis of acetylcholine', 'Eggs, meat, fish, soy, dairy', 'Many diets fall short; eggs are an easy fix'],
          ['Vitamin B12', 'Nerve function', 'Animal foods, fortified foods', 'Vegan children need supplements'],
          ['Zinc', 'Growth, attention', 'Meat, shellfish, seeds, legumes', 'Picky eaters'],
          ['Protein and energy', 'Overall growth', 'Varied diet', 'Restrictive diets'],
        ] },
        { t: 'callout', tone: 'note', title: 'Supplements', text: 'Most well-fed children do not need supplements beyond those recommended by health authorities (for example vitamin D in some countries, and B12 for vegans). Omega-3 supplements show small or no cognitive benefits in well-nourished children. Ask a doctor before supplementing iron, which is harmful in excess.' },
      ],
    },
    {
      id: 'patterns',
      title: 'Eating patterns and myths',
      blocks: [
        { t: 'cards', cols: 2, items: [
          { tag: 'Evidence', title: 'Breakfast', body: 'Children who eat a regular breakfast tend to do better in school, especially undernourished children. A breakfast with protein and fibre (eggs, wholegrain toast, oats, yoghurt) gives steadier energy.' },
          { tag: 'Evidence', title: 'Breastfeeding', body: 'Associated with slightly higher IQ in observational studies; the PROBIT randomised trial found a modest benefit. Formula-fed children develop normally too, do not let guilt drive decisions.' },
          { tag: 'Myth', title: 'Sugar makes children hyperactive', body: 'Double-blind trials find no effect of sugar on behaviour. Too much sugar is still bad for teeth and long-term health.' },
          { tag: 'Mixed', title: 'Food colourings', body: 'The Southampton study found small increases in hyperactivity from some artificial colours and preservatives; the effect is small and varies between children.' },
          { tag: 'Evidence', title: 'Fish, not fish-oil pills', body: 'Eating fish is linked to better outcomes; supplements show weaker effects. Choose low-mercury fish (salmon, sardines, mackerel) and avoid shark, swordfish, king mackerel.' },
          { tag: 'Myth', title: '“Brain foods” and superfood powders', body: 'Blueberries, nuts and dark chocolate are healthy, but no single food boosts intelligence. Variety matters more.' },
        ] },
      ],
    },
    {
      id: 'sleep',
      title: 'Sleep',
      blocks: [
        { t: 'table', head: ['Age', 'Recommended sleep per 24 h (AASM)'], rows: [
          ['4–12 months', '12–16 hours including naps'], ['1–2 years', '11–14 hours'], ['3–5 years', '10–13 hours'], ['6–12 years', '9–12 hours'], ['13–18 years', '8–10 hours'],
        ] },
        { t: 'p', text: 'Sleep consolidates memory and regulates mood and attention. Gifted children are often said to need less sleep, but evidence is anecdotal, keep to the recommended ranges. Teenagers’ body clocks shift later, so early school starts cause chronic sleep debt; screens in bedrooms make it worse.' },
      ],
    },
    {
      id: 'movement-screens',
      title: 'Exercise and screens',
      blocks: [
        { t: 'list', items: [
          '**Exercise**: at least 60 minutes of moderate-to-vigorous activity a day for children (WHO). Physical activity improves attention, executive function and mood; team sports also build social skills.',
          '**Screens**: avoid under 18–24 months except video calls; about an hour a day of high-quality content for ages 2–5, watched together. For older children, protect sleep, exercise, homework and family time first; no screens in bedrooms at night.',
          '**Outdoors**: time in daylight helps sleep and may protect against short-sightedness, which is very common in East Asian children who study intensively.',
        ] },
      ],
    },
  ],
  sources: [
    'Georgieff, M. K. (2007). Nutrition and the developing brain: nutrient priorities and measurement. American Journal of Clinical Nutrition 85(2).',
    'Bleichrodt, N. & Born, M. P. (1994). A meta-analysis of research on iodine and its relationship to cognitive development.',
    'Kramer, M. S. et al. (2008). Breastfeeding and child cognitive development: new evidence from a large randomized trial (PROBIT). Archives of General Psychiatry 65(5).',
    'Wolraich, M. L., Wilson, D. B. & White, J. W. (1995). The effect of sugar on behavior or cognition in children: a meta-analysis. JAMA 274(20).',
    'McCann, D. et al. (2007). Food additives and hyperactive behaviour in 3-year-old and 8/9-year-old children. The Lancet 370.',
    'Paruthi, S. et al. (2016). Recommended amount of sleep for pediatric populations. Journal of Clinical Sleep Medicine 12(6).',
  ],
  related: ['food-therapy/food-for-goals/brain-and-focus', 'parenting/gifted/nurturing-by-age'],
}

export default guide
