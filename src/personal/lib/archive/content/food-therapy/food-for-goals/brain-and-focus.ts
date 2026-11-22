import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The brain is about two per cent of body weight and uses around a fifth of the body’s energy, so what you eat matters to it. But brain food is a field full of hype. The best-supported advice is dull but powerful: a Mediterranean-style or Japanese-style pattern, enough of a few key nutrients, regular meals, and no extreme diets. This guide separates what the evidence supports from what it does not.',
  nutshell: [
    'The brain needs a **steady glucose supply**, **omega-3 (DHA) fats**, **B vitamins**, **choline**, **iron**, **iodine** and **zinc**. Missing them can impair thinking; extra beyond need adds little.',
    'Eating patterns **rich in vegetables, fruit, pulses, fish, nuts and olive oil** are linked with slower cognitive decline. Trials give mixed results, so treat it as supportive, not magic.',
    '**Fish** twice a week is a reasonable target. Omega-3 **supplements** have not helped healthy adults’ thinking in large trials.',
    '**Caffeine** and **tea’s L-theanine** modestly improve alertness and attention. Too much hurts sleep.',
    'Skipping meals, crash diets and heavy alcohol reduce concentration. Hydration matters: even mild dehydration can blunt attention.',
  ],
  sections: [
    {
      id: 'in-pictures',
      title: 'The key foods in pictures',
      blocks: [
        { t: 'food-photos', items: [
          { photo: 'f-salmon', title: 'Oily fish', body: 'DHA for brain cell membranes' },
          { photo: 'f-eggs', title: 'Eggs', body: 'Choline and B12' },
          { photo: 'f-walnuts', title: 'Walnuts', body: 'Plant omega-3 and polyphenols' },
          { photo: 'f-blueberries', title: 'Berries', body: 'Flavonoids linked to memory' },
          { photo: 'f-spinach', title: 'Leafy greens', body: 'Folate and vitamin K' },
          { photo: 'f-green-tea', title: 'Green tea', body: 'Caffeine with L-theanine' },
        ] },
      ],
    },
    {
      id: 'nutrients',
      title: 'The brain’s key nutrients',
      blocks: [
        {
          t: 'table',
          head: ['Nutrient', 'Why the brain needs it', 'Where to get it (Japanese examples)'],
          rows: [
            ['Glucose (carbohydrate)', 'The brain’s main fuel; supply must be steady', 'Whole grains, brown or barley rice, fruit, root vegetables'],
            ['Omega-3 fats (DHA and EPA)', 'DHA is a building block of brain cell membranes; EPA is linked with lower inflammation', 'Mackerel (saba), sardine (iwashi), salmon, sanma, tuna'],
            ['B vitamins (B6, B9, B12)', 'Make neurotransmitters and handle homocysteine, whose high levels are linked with decline', 'Fish, eggs, spinach, natto, nori, legumes'],
            ['Choline', 'Builds acetylcholine and cell membranes', 'Eggs, soy, tofu, fish, liver'],
            ['Iron', 'Oxygen delivery and myelin; deficiency in childhood impairs development', 'Clams, bonito, tofu, komatsuna with vitamin C'],
            ['Iodine', 'Thyroid hormone for brain development', 'Seaweed, fish (see the cautions on kombu)'],
            ['Zinc and magnesium', 'Signalling and enzyme function', 'Oysters, sesame, tofu, pumpkin seeds'],
          ],
        },
      ],
    },
    {
      id: 'patterns',
      title: 'Patterns that are linked with healthy ageing',
      blocks: [
        {
          t: 'table',
          head: ['Pattern', 'What it features', 'What the evidence shows'],
          rows: [
            ['Mediterranean', 'Vegetables, fruit, whole grains, pulses, nuts, olive oil, fish; little red meat', 'Observational studies link it with lower dementia risk and slower decline; randomised trials show benefits for heart health and some for cognition'],
            ['MIND diet', 'A hybrid that stresses leafy greens and berries', 'Observational studies were encouraging; a 2023 randomised trial in older adults found no significant difference in cognitive change compared with a control diet, though both groups improved'],
            ['Traditional Japanese', 'Fish, soy, vegetables, seaweed, green tea, rice', 'Observational cohorts link closer adherence to lower mortality and some lower dementia risk; salt and confounding are caveats'],
          ],
          caption: 'Observational studies cannot prove that diet is the cause. People who eat well also tend to exercise, not smoke and see doctors.',
        },
        { t: 'callout', tone: 'note', title: 'Fish oil, vitamins and “nootropics”', text: 'Large randomised trials of fish oil and of single vitamins in healthy older adults have mostly not improved cognition. A cocoa-and-multivitamin trial (COSMOS-Mind) found a small benefit from a daily multivitamin, which needs confirming. If you are deficient in something, correcting it helps; otherwise, food patterns are the better bet.' },
      ],
    },
    {
      id: 'focus',
      title: 'Focus through the day',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Breakfast', title: 'Pair carbohydrate with protein and fibre', body: 'Rice with egg and miso soup, or oats with yogurt, gives a slower release than sugary cereal or pastry, and many people find it keeps focus steadier.' },
            { tag: 'Caffeine', title: 'Useful, with limits', body: 'About 100 to 200 mg (one to two cups of coffee or several of tea) improves alertness and reaction time. Doses above about 400 mg a day, or any late in the day, tend to harm sleep and increase anxiety.' },
            { tag: 'Tea', title: 'Green tea and L-theanine', body: 'Green tea contains caffeine and L-theanine. Some trials show the combination improves attention and calm, but effects are modest.' },
            { tag: 'Water', title: 'Hydration', body: 'Even mild dehydration (one to two per cent of body weight) can impair attention and mood. Drink regularly, more in heat.' },
            { tag: 'Rhythm', title: 'Regular meals', body: 'Long gaps and large heavy meals both tend to blunt concentration. Smaller, regular meals suit many people.' },
            { tag: 'Alcohol', title: 'Avoid heavy drinking', body: 'Heavy drinking damages the brain and depletes thiamin; even moderate drinking disturbs sleep, which is vital for memory.' },
          ],
        },
        {
          t: 'dodont',
          do: ['Eat fish twice a week.', 'Include vegetables, pulses and nuts every day.', 'Drink water through the day.', 'Eat breakfast if it helps you focus.'],
          dont: ['Expect a single food to raise intelligence.', 'Take high-dose supplements without a reason.', 'Skip sleep and use caffeine to compensate.', 'Follow extreme fad diets: they can lack key nutrients.'],
        },
        { t: 'links', items: [{ path: 'medicine/neuroscience/optimising-intelligence', note: 'The wider evidence on improving thinking' }, { path: 'food-therapy/japanese/recipes-energy-and-brain', note: 'Recipes: natto bowl, miso mackerel, goma-ae' }, { path: 'food-therapy/vitamins/b-vitamins', note: 'B vitamins and choline' }] },
      ],
    },
  ],
  sources: [
    'Morris, M. C., et al. (2015). MIND diet associated with reduced incidence of Alzheimer’s disease. Alzheimer’s and Dementia.',
    'Barnes, L. L., et al. (2023). Trial of the MIND diet for prevention of cognitive decline in older persons. New England Journal of Medicine.',
    'Kurotani, K., et al. (2016). Quality of diet and mortality among Japanese men and women: Japan Public Health Center based prospective study. BMJ.',
    'Baker, L. D., et al. (2023). Effects of cocoa extract and a multivitamin on cognitive function: COSMOS-Mind. American Journal of Clinical Nutrition.',
    'Owen, L., et al. (2008) and later reviews on caffeine and L-theanine and attention.',
  ],
  related: ['medicine/neuroscience/optimising-intelligence', 'food-therapy/vitamins/b-vitamins', 'food-therapy/japanese/recipes-energy-and-brain'],
}

export default guide
