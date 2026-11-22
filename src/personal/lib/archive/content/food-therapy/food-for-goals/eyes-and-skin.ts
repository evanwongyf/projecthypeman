import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Eyes and skin are very visible, and the supplement industry knows it. Marketing around “glowing skin” and “eye health” promises a lot. The reality is that a few nutrients really matter (vitamin A for vision, vitamin C for collagen, lutein for the macula), and one large trial shows a specific supplement formula slows an existing eye disease. Most other claims are weaker than they sound. Sun protection, not smoking and sleep do more for skin than anything in a bottle.',
  nutshell: [
    '**Vitamin A** is essential for vision: deficiency causes night blindness. A balanced diet gives enough; excess preformed vitamin A is harmful.',
    '**Lutein and zeaxanthin** (in spinach, kale, corn, egg yolk) concentrate in the macula. A specific supplement formula (AREDS2) slows progression in people who already have intermediate age-related macular degeneration, not in everyone.',
    '**Vitamin C** and **protein** are needed to make collagen. **Collagen supplements** show small short-term improvements in skin hydration in some trials, often funded by makers, and the evidence is not strong.',
    '**Sun protection** and **not smoking** are the biggest levers on skin ageing.',
    '**Biotin** helps hair and nails only if you are deficient, and can interfere with blood tests.',
  ],
  sections: [
    {
      id: 'in-pictures',
      title: 'The key foods in pictures',
      blocks: [
        { t: 'food-photos', items: [
          { photo: 'f-carrot', title: 'Carrots', body: 'Beta-carotene for vitamin A' },
          { photo: 'f-spinach', title: 'Spinach', body: 'Lutein and zeaxanthin' },
          { photo: 'f-sweet-potato', title: 'Sweet potato', body: 'Beta-carotene' },
          { photo: 'f-eggs', title: 'Egg yolks', body: 'Lutein, well absorbed' },
          { photo: 'f-orange', title: 'Citrus', body: 'Vitamin C for collagen' },
          { photo: 'f-salmon', title: 'Oily fish', body: 'Omega-3 for dry eyes' },
        ] },
      ],
    },
    {
      id: 'eyes',
      title: 'Eyes',
      blocks: [
        {
          t: 'table',
          head: ['Nutrient', 'Role', 'Food sources', 'Evidence'],
          rows: [
            ['Vitamin A', 'Makes rhodopsin, the light-sensing pigment; keeps the cornea moist', 'Carrots, pumpkin, greens, eggs, liver', 'Strong for preventing night blindness and xerophthalmia. Extra beyond need adds nothing'],
            ['Lutein and zeaxanthin', 'Pigments that filter light and protect the macula', 'Spinach, kale, komatsuna, corn, egg yolk, broccoli', 'Higher intake is linked with lower risk of cataract and AMD in observational studies; supplements help only in specific cases'],
            ['Omega-3 fats', 'Part of retinal cell membranes', 'Oily fish', 'Fish eating is linked with lower AMD risk; a trial of omega-3 supplements for dry eye found no benefit over placebo (DREAM, 2018)'],
            ['Vitamin C, E, zinc and copper', 'Antioxidants and enzyme cofactors', 'Fruit, nuts, seafood', 'In AREDS, a combination slowed progression of intermediate AMD'],
          ],
        },
        {
          t: 'callout',
          tone: 'fact',
          title: 'The AREDS2 result',
          text: 'In a large trial, people with intermediate or advanced AMD in one eye who took a daily formula (vitamins C and E, zinc, copper, with lutein and zeaxanthin) were less likely to progress to advanced AMD. It is a treatment for people with a diagnosed condition, not a preventive supplement for everyone. Eye checks matter more.',
        },
        {
          t: 'dodont',
          do: ['Eat leafy greens and colourful vegetables daily.', 'Wear sunglasses with UV protection.', 'Have regular eye tests, especially after 40 or with diabetes.', 'Do not smoke: it is the biggest modifiable risk for AMD and cataract.'],
          dont: ['Expect carrots to cure poor eyesight.', 'Take vitamin A supplements in large amounts.', 'Rely on supplements instead of an eye exam.'],
        },
      ],
    },
    {
      id: 'skin',
      title: 'Skin',
      blocks: [
        {
          t: 'table',
          head: ['Factor', 'What it does for skin', 'What the evidence says'],
          rows: [
            ['Sun protection', 'Ultraviolet light drives most visible skin ageing and skin cancer', 'The strongest factor by far: shade, clothing, hats and sunscreen'],
            ['Not smoking', 'Smoking damages collagen and blood supply', 'Clear link with wrinkling and slower healing'],
            ['Vitamin C', 'Needed for collagen formation', 'Deficiency causes scurvy; extra from supplements adds little if intake is adequate'],
            ['Protein', 'Skin, hair and nails are made of protein', 'Low intake slows wound healing and weakens hair'],
            ['Omega-3 fats', 'Reduce inflammation', 'May help some inflammatory skin conditions modestly'],
            ['Zinc', 'Wound healing and skin barrier', 'Deficiency causes rashes; supplements help only if low'],
            ['Collagen peptides', 'Marketed for firmness', 'Small trials show modest improvements in skin hydration and elasticity over weeks; many are industry-funded, and effects are small'],
            ['Hydration', 'Skin looks plumper when well hydrated', 'Drinking more water helps if you are dehydrated; extra beyond that adds little'],
            ['Diet and acne', 'High glycaemic load diets and dairy are linked with acne in some studies', 'Evidence is moderate and individual; seek dermatology advice for persistent acne'],
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Skin-friendly eating', text: 'A pattern rich in colourful vegetables, fruit, fish, nuts, olive or sesame oil and whole foods, with less sugar and ultra-processed food, supports skin as well as everything else. Eat it with enough sleep and sun protection.' },
      ],
    },
    {
      id: 'hair',
      title: 'Hair and nails',
      blocks: [
        { t: 'p', text: 'Hair thinning has many causes, including hormones, stress, illness, medicines, thyroid disease, genetics and pregnancy. Nutritional causes include iron deficiency, low protein, zinc deficiency and crash dieting. If you are losing a lot of hair, get a blood test (iron and ferritin, thyroid) before buying supplements. Biotin supplements help only people who are deficient, which is rare, and they can distort blood tests.' },
        { t: 'links', items: [{ path: 'food-therapy/vitamins/fat-soluble', note: 'Vitamin A and E' }, { path: 'food-therapy/vitamins/vitamin-c-and-antioxidants', note: 'Vitamin C and collagen' }, { path: 'food-therapy/japanese/recipes-bones-eyes-and-skin', note: 'Recipes: carrot shirishiri and more' }] },
      ],
    },
  ],
  sources: [
    'The AREDS2 Research Group (2013). Lutein + zeaxanthin and omega-3 fatty acids for age-related macular degeneration. JAMA.',
    'Asbell, P. A., et al. (2018). n-3 fatty acid supplementation for the treatment of dry eye disease (DREAM). New England Journal of Medicine.',
    'de Miranda, R. B., et al. (2021). Effects of hydrolyzed collagen supplementation on skin aging: a systematic review and meta-analysis. International Journal of Dermatology.',
    'US National Institutes of Health, Office of Dietary Supplements. Fact sheets: Vitamin A, Biotin.',
  ],
  related: ['food-therapy/vitamins/fat-soluble', 'food-therapy/vitamins/vitamin-c-and-antioxidants', 'food-therapy/japanese/recipes-bones-eyes-and-skin'],
}

export default guide
