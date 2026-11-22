import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The eight B vitamins work as a team. Most are “coenzymes”: helpers that let the body’s enzymes turn carbohydrate, fat and protein into energy, build DNA and red blood cells, and make neurotransmitters. They are water-soluble, so most are not stored for long, and you need a steady supply. Choline, not strictly a vitamin, is covered here too. Most healthy people who eat a varied diet get enough, with three well-known exceptions: B12, folate (before pregnancy) and B6 or B1 in particular circumstances.',
  nutshell: [
    'The B vitamins are **B1 (thiamin), B2 (riboflavin), B3 (niacin), B5 (pantothenic acid), B6, B7 (biotin), B9 (folate) and B12 (cobalamin)**.',
    'Together they run **energy metabolism**, **red blood cell** formation and **nerve** function.',
    '**B12** is found only in animal foods (and fortified foods), so **vegans need a supplement or fortified foods**. Older adults and some medicine users absorb less.',
    '**Folate** protects against birth defects of the brain and spine: women planning pregnancy are usually advised to take **folic acid**.',
    'Excess of most is excreted, but **high-dose B6 can damage nerves**, and biotin can **distort blood tests**.',
  ],
  sections: [
    {
      id: 'table',
      title: 'The B vitamins at a glance',
      blocks: [
        {
          t: 'table',
          head: ['Vitamin', 'Main job', 'Good food sources', 'If low'],
          rows: [
            ['B1 thiamin', 'Turns carbohydrate into energy; nerves', 'Pork, whole grains, brown rice, legumes, seeds', 'Beriberi (nerve and heart); alcohol dependence increases risk'],
            ['B2 riboflavin', 'Energy release; skin, eyes', 'Milk, eggs, liver, mushrooms, natto', 'Cracked lips, sore throat'],
            ['B3 niacin', 'Energy; DNA repair', 'Chicken, tuna, salmon, peanuts, mushrooms', 'Pellagra: rash, diarrhoea, confusion'],
            ['B5 pantothenic acid', 'Part of coenzyme A (many reactions)', 'Widespread: mushrooms, eggs, avocado, whole grains', 'Very rare'],
            ['B6 pyridoxine', 'Neurotransmitters, haemoglobin, protein use', 'Tuna, salmon, chicken, potatoes, bananas', 'Anaemia, irritability, confusion'],
            ['B7 biotin', 'Fat, carbohydrate and protein metabolism', 'Egg yolk, salmon, nuts, sweet potato', 'Hair thinning, rash (rare)'],
            ['B9 folate', 'DNA, red cells, early brain and spine development', 'Leafy greens, legumes, asparagus, liver, fortified grains', 'Anaemia; birth defects in pregnancy'],
            ['B12 cobalamin', 'Red cells, DNA, nerve insulation', 'Shellfish, fish, meat, eggs, dairy, fortified foods', 'Anaemia, tingling, memory problems'],
          ],
        },
        { t: 'callout', tone: 'fact', title: 'Beriberi and white rice in Japan', text: 'In Meiji-era Japan, polishing rice removed the thiamin-rich bran. Beriberi (kakke) became widespread, especially in the army and the cities. Researchers eventually linked it to diet. The story is a classic example of a deficiency disease being solved by food: whole grains, barley mixed with rice, pork and later enriched foods.' },
      ],
    },
    {
      id: 'b12',
      title: 'Vitamin B12: the one to watch',
      blocks: [
        { t: 'p', text: 'B12 is made by bacteria, not plants or animals, and reaches us through animal foods. It needs stomach acid and a protein called intrinsic factor to be absorbed. Because the liver stores several years’ worth, deficiency develops slowly, then affects blood and nerves. The nerve damage can be permanent if untreated.' },
        {
          t: 'table',
          head: ['Who is at risk', 'Why'],
          rows: [
            ['Vegans, and many vegetarians', 'No reliable plant source. Use fortified foods or a supplement'],
            ['Adults over about 50', 'Less stomach acid reduces release of B12 from food. Fortified foods and supplements are absorbed better'],
            ['People on metformin or long-term acid-suppressing medicines', 'These can reduce absorption'],
            ['People with pernicious anaemia, gastric surgery, coeliac or Crohn’s disease', 'Absorption is impaired. May need injections'],
          ],
        },
        { t: 'callout', tone: 'note', title: 'What about nori?', text: 'Seaweeds such as nori contain some B12-like compounds, but how well they are absorbed varies and some are inactive analogues. Do not rely on seaweed as your only source.' },
      ],
    },
    {
      id: 'folate',
      title: 'Folate and folic acid',
      blocks: [
        { t: 'p', text: '**Folate** is the natural form found in food; **folic acid** is the synthetic form in supplements and fortified foods and is absorbed more reliably. Folate is needed to make DNA, so it matters most in rapidly dividing cells: red blood cells and the early embryo. Adequate intake **before and in the first weeks of pregnancy** greatly lowers the risk of neural tube defects such as spina bifida. Many countries advise women who could become pregnant to take a folic acid supplement, in addition to eating folate-rich foods. Check your national advice.' },
        { t: 'list', items: ['Food sources: spinach, komatsuna, asparagus, broccoli, edamame, lentils, chickpeas, oranges, liver (avoid liver in pregnancy because of vitamin A), nori.', 'Heat and long cooking destroy folate. Steam or eat some vegetables raw.', 'High-dose folic acid can mask the anaemia of B12 deficiency, so do not self-treat anaemia.'] },
      ],
    },
    {
      id: 'choline',
      title: 'Choline',
      blocks: [
        { t: 'p', text: 'Choline is used to build cell membranes and acetylcholine, a neurotransmitter for memory and muscle control. The body makes some, but not enough, so it is an essential nutrient. Eggs (yolks) and liver are the richest common sources, followed by soy, fish, meat and some vegetables. Surveys suggest many people eat less than the adequate intake. It matters particularly in pregnancy, for the baby’s brain development.' },
        { t: 'links', items: [{ path: 'food-therapy/food-for-goals/energy-and-fatigue', note: 'When tiredness is nutritional' }, { path: 'food-therapy/food-for-goals/brain-and-focus', note: 'B vitamins, choline and the brain' }, { path: 'food-therapy/vitamins/overview-and-explorer', note: 'The explorer' }] },
      ],
    },
  ],
  sources: [
    'US National Institutes of Health, Office of Dietary Supplements. Fact sheets: Thiamin, Riboflavin, Niacin, Vitamin B6, Biotin, Folate, Vitamin B12, Pantothenic acid, Choline.',
    'MRC Vitamin Study Research Group (1991). Prevention of neural tube defects: results of the Medical Research Council Vitamin Study. The Lancet.',
    'Takaki, K. and the history of kakke (beriberi) research in Japan.',
  ],
  related: ['food-therapy/vitamins/overview-and-explorer', 'food-therapy/food-for-goals/energy-and-fatigue', 'food-therapy/safety'],
}

export default guide
