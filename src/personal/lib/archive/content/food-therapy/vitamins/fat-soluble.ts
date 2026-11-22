import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Vitamins A, D, E and K dissolve in fat, not water. That has two consequences. They are absorbed best with some fat in the meal, and they can be stored, in the liver and fatty tissue, so a surplus builds up instead of washing out. This is why deficiency can take months to appear and also why long-term high doses of supplements can do harm. This guide explains what each of the four does, where to get it and where the cautions lie.',
  nutshell: [
    '**Vitamin A** keeps vision, skin and the linings of the body healthy. It comes ready-made from animal foods and as carotenoids from orange and green plants.',
    '**Vitamin D** helps absorb calcium and keeps bones and muscles strong. Sunlight makes it in the skin, and many people living indoors or at high latitudes run low.',
    '**Vitamin E** is an antioxidant found in nuts, seeds and oils. Deficiency is rare, and supplements have not been shown to prevent disease.',
    '**Vitamin K** is needed for blood clotting and for the proteins that put calcium into bone. Natto is exceptionally rich in K2. **Warfarin users must keep intake steady.**',
    'Because they are stored, **more is not better**, especially preformed vitamin A and vitamin D.',
  ],
  sections: [
    {
      id: 'a',
      title: 'Vitamin A',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Job', title: 'Vision and body linings', body: 'Retinal, made from vitamin A, is part of the light-detecting pigment in the retina. Vitamin A also keeps the skin and the linings of the gut, lungs and eyes healthy, and supports immune cells.' },
            { tag: 'Sources', title: 'Two kinds', body: 'Preformed vitamin A (retinol) is in liver, eggs, dairy and oily fish. Carotenoids such as beta-carotene, in carrots, sweet potato, pumpkin and dark leafy greens, are converted by the body as needed.' },
            { tag: 'Low', title: 'Night blindness first', body: 'Difficulty seeing in dim light is the first sign. Severe deficiency, still a major cause of childhood blindness in some countries, dries the eye surface and weakens defences against infection.' },
            { tag: 'High', title: 'Toxic in excess', body: 'Too much preformed vitamin A is harmful: headache, liver damage and, in pregnancy, birth defects. Pregnant women are advised to avoid liver and high-dose supplements. Plant carotenoids do not carry the same risk.' },
          ],
        },
      ],
    },
    {
      id: 'd',
      title: 'Vitamin D',
      blocks: [
        { t: 'p', text: 'Vitamin D works more like a hormone than a typical vitamin. In the skin, ultraviolet B light from the sun turns a cholesterol derivative into vitamin D. The liver and kidneys then convert it to its active form, which tells the gut to absorb calcium. Without enough, bones become soft (rickets in children, osteomalacia in adults).' },
        {
          t: 'table',
          head: ['Source', 'Notes'],
          rows: [
            ['Sunshine', 'Short, regular exposure of the face and arms is enough for many people in the tropics. At high latitudes in winter the sun is too weak. Darker skin makes less, and sunscreen and covering clothes reduce it. Balance with skin-cancer risk'],
            ['Oily fish', 'Salmon, mackerel, sardines, herring, sanma: among the best food sources'],
            ['Egg yolk, liver', 'Smaller amounts'],
            ['Mushrooms', 'Mushrooms exposed to sunlight or UV light (for example sun-dried shiitake) make vitamin D2'],
            ['Fortified foods', 'Milk, some cereals, plant drinks and margarine in many countries'],
            ['Supplements', 'Commonly used when sun or diet is not enough; 10 to 25 µg (400 to 1,000 IU) a day is typical. The upper limit is 100 µg (4,000 IU)'],
          ],
        },
        { t: 'callout', tone: 'note', title: 'Do you need a test?', text: 'People at higher risk of low vitamin D (older adults, those who are housebound, people with darker skin in northern climates, some with bowel disease) may be advised to have a blood test or take a supplement. Very high doses should be taken only on advice, because they can raise blood calcium dangerously.' },
      ],
    },
    {
      id: 'e',
      title: 'Vitamin E',
      blocks: [
        { t: 'p', text: 'Vitamin E protects the fatty membranes of cells from oxidation. It is easy to get from nuts, seeds and cooking oils, so deficiency in healthy people is very rare. Large trials of vitamin E supplements, once hoped to prevent heart disease and cancer, did not show benefit, and high doses can increase bleeding risk, especially alongside blood thinners. Food sources are the better choice.' },
        { t: 'list', items: ['Good sources: sunflower seeds, almonds, hazelnuts, wheat germ, vegetable oils, avocado, spinach.', 'Eat a small handful of nuts and seeds regularly, rather than supplements.'] },
      ],
    },
    {
      id: 'k',
      title: 'Vitamin K',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Clotting', title: 'Why you need it', body: 'Vitamin K activates the proteins that make blood clot. Newborns are given a dose at birth because they have low stores.' },
            { tag: 'Bone', title: 'And for bone', body: 'It also activates proteins (such as osteocalcin) that bind calcium to bone. Research on whether extra K2 reduces fractures is still developing.' },
            { tag: 'K1', title: 'In leafy greens', body: 'Kale, spinach, komatsuna, broccoli and other green vegetables are the main sources of K1.' },
            { tag: 'K2', title: 'In natto', body: 'Natto, fermented soybeans, is exceptionally rich in K2 (menaquinone-7). Some cheeses and animal foods also provide it.' },
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Warfarin', text: 'Warfarin works by blocking vitamin K. People on it are advised to keep their vitamin K intake consistent from day to day, and natto in particular can counter the drug. Newer anticoagulants (such as apixaban and rivaroxaban) are not affected in the same way, but confirm with the prescriber.' },
      ],
    },
    {
      id: 'summary',
      title: 'Summary table',
      blocks: [
        {
          t: 'table',
          head: ['Vitamin', 'Main jobs', 'Best food sources', 'Main caution'],
          rows: [
            ['A', 'Vision, skin, immunity', 'Liver, eggs, carrots, sweet potato, greens', 'Excess preformed A in pregnancy'],
            ['D', 'Calcium absorption, bones, muscle', 'Oily fish, egg yolk, fortified foods, sunlight', 'High-dose supplements raise blood calcium'],
            ['E', 'Antioxidant', 'Nuts, seeds, oils', 'High doses and bleeding'],
            ['K', 'Clotting, bone proteins', 'Leafy greens, natto', 'Warfarin interaction'],
          ],
        },
        { t: 'links', items: [{ path: 'food-therapy/food-for-goals/bones-and-muscles', note: 'Putting D, K and calcium together' }, { path: 'food-therapy/vitamins/overview-and-explorer', note: 'Back to the explorer' }] },
      ],
    },
  ],
  sources: [
    'US National Institutes of Health, Office of Dietary Supplements. Fact sheets: Vitamin A, Vitamin D, Vitamin E, Vitamin K.',
    'Holick, M. F. (2007). Vitamin D deficiency. New England Journal of Medicine.',
    'Miller, E. R., et al. (2005). Meta-analysis: high-dosage vitamin E supplementation may increase all-cause mortality. Annals of Internal Medicine.',
  ],
  related: ['food-therapy/vitamins/overview-and-explorer', 'food-therapy/food-for-goals/bones-and-muscles', 'food-therapy/safety'],
}

export default guide
