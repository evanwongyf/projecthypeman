import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Vitamin C is the best-known vitamin, and one of the most over-promised. It has a clear, important job: building collagen and helping the body absorb iron. It also works as an antioxidant. But it does not prevent colds in most people, and taking huge doses does not make you healthier. This guide explains what vitamin C and antioxidants actually do, why the word “antioxidant” on a label tells you little, and how to get enough from food.',
  nutshell: [
    'Vitamin C builds **collagen** (skin, blood vessels, tendons, bone), helps absorb **iron** from plants, and is an **antioxidant**.',
    'Humans cannot make it, so it must come from food. **Scurvy** is the disease of long-term deficiency.',
    'Most people get enough from fruit and vegetables. **Citrus, kiwi, peppers, strawberries and broccoli** are rich sources.',
    '**Colds**: regular supplements do not reduce how often most people catch colds, and may shorten them slightly. Taking it after symptoms start does not help much.',
    '**Antioxidant supplements** have not been shown to prevent chronic disease, and some trials found harm. Eating antioxidant-rich foods is a different thing.',
  ],
  sections: [
    {
      id: 'c',
      title: 'What vitamin C does',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Build', title: 'Collagen', body: 'Needed to make collagen, the protein that holds skin, blood vessels, tendons and cartilage together. Without it, wounds heal slowly, gums bleed and old scars reopen: scurvy.' },
            { tag: 'Absorb', title: 'Iron', body: 'Vitamin C turns plant (non-haem) iron into a form the gut absorbs much better. A glass of juice with an iron-rich plant meal can make a real difference.' },
            { tag: 'Protect', title: 'Antioxidant', body: 'It neutralises reactive molecules and helps recycle vitamin E.' },
            { tag: 'Make', title: 'Neurotransmitters and carnitine', body: 'Used in making noradrenaline and carnitine, which carries fat into cells for energy.' },
          ],
        },
        {
          t: 'table',
          head: ['Food', 'Typical vitamin C (per 100 g, approximate)'],
          rows: [
            ['Guava', 'about 230 mg'],
            ['Red and yellow pepper', 'about 120–190 mg'],
            ['Kiwi fruit', 'about 90 mg'],
            ['Yuzu fruit', 'high; the juice and peel are rich, but typical amounts used are small'],
            ['Strawberries', 'about 60 mg'],
            ['Orange or mikan', 'about 30–50 mg'],
            ['Broccoli (raw)', 'about 90 mg'],
            ['Potato (boiled)', 'about 10–20 mg, but a useful source because of how much is eaten'],
          ],
          caption: 'Approximate values from food composition databases; they vary with variety, ripeness and storage. For comparison, the adult recommendation is 75 to 90 mg a day.',
        },
        { t: 'callout', tone: 'tip', title: 'Cooking tip', text: 'Vitamin C is damaged by heat and dissolves in water. Eat some fruit and vegetables raw, steam rather than boil, and keep cooking water for soups.' },
      ],
    },
    {
      id: 'colds',
      title: 'Vitamin C and the common cold',
      blocks: [
        { t: 'p', text: 'A large Cochrane review of trials found that taking vitamin C every day does not reduce how many colds the general population catches. It slightly shortened colds (by about 8 per cent in adults, 14 per cent in children). Starting vitamin C only once symptoms begin did not help. The exception is people under heavy short-term physical stress, such as marathon runners and soldiers in cold conditions, in whom regular supplements halved the risk of colds. Overall, the evidence supports eating enough, not megadoses.' },
        { t: 'callout', tone: 'myth', title: '“Mega-doses of vitamin C prevent illness”', text: 'Taking grams of vitamin C does not give extra protection. The body excretes the excess, and doses above 2,000 mg a day can cause diarrhoea and, in some people, kidney stones.' },
      ],
    },
    {
      id: 'antioxidants',
      title: 'What “antioxidant” really means',
      blocks: [
        { t: 'p', text: 'Normal metabolism produces reactive molecules called free radicals, which can damage cells. Antioxidants are substances that neutralise them. Foods rich in antioxidants (berries, vegetables, nuts, tea, beans) are linked with better health, but that is likely because of the whole food pattern, with fibre and many other compounds, not because of the antioxidants alone.' },
        {
          t: 'table',
          head: ['Claim', 'Evidence'],
          rows: [
            ['Antioxidant-rich foods are good for you', 'Yes, as part of a varied diet; eating more fruit and vegetables is linked with lower risk of heart disease and some cancers'],
            ['Antioxidant supplements prevent disease', 'Not supported. Large trials of beta-carotene (in smokers), vitamin E and others found no benefit, and beta-carotene raised lung cancer risk in smokers'],
            ['A higher ORAC score means a better food', 'Not a reliable guide. It is a lab measure that does not predict effects in the body, and the US government stopped publishing the database'],
            ['“Detox” juices neutralise toxins', 'No evidence. The liver and kidneys do that job'],
          ],
        },
        { t: 'links', items: [{ path: 'food-therapy/food-for-goals/immunity', note: 'What helps immunity, and what does not' }, { path: 'food-therapy/food-for-goals/eyes-and-skin', note: 'Vitamin C and skin' }, { path: 'food-therapy/minerals/trace-minerals', note: 'Iron and vitamin C' }] },
      ],
    },
  ],
  sources: [
    'US National Institutes of Health, Office of Dietary Supplements. Vitamin C fact sheet.',
    'Hemilä, H., and Chalker, E. (2013). Vitamin C for preventing and treating the common cold. Cochrane Database of Systematic Reviews.',
    'Bjelakovic, G., et al. (2007). Mortality in randomized trials of antioxidant supplements. JAMA.',
    'The Alpha-Tocopherol, Beta-Carotene Cancer Prevention Study Group (1994). New England Journal of Medicine.',
  ],
  related: ['food-therapy/vitamins/overview-and-explorer', 'food-therapy/food-for-goals/immunity', 'food-therapy/minerals/trace-minerals'],
}

export default guide
