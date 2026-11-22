import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Trace minerals are needed in milligrams or micrograms a day, but they sit at the centre of some of the biggest nutrition problems in the world: iron deficiency anaemia, iodine deficiency and zinc deficiency affect billions of people. They are also minerals where the gap between too little and too much is narrow. This guide covers iron, zinc, iodine and selenium in detail, mentions copper, manganese and others, and highlights the Japanese-diet angles: seaweed and iodine, and the hijiki story.',
  nutshell: [
    '**Iron** carries oxygen. Deficiency anaemia is the most common nutritional deficiency worldwide, especially in menstruating and pregnant women. Haem iron (meat, fish) is absorbed well; plant iron needs **vitamin C**.',
    '**Zinc** supports immunity, wound healing and taste. Oysters, meat, seeds and pulses supply it; long-term high doses cause copper deficiency.',
    '**Iodine** makes thyroid hormones. Seaweed (kombu especially) can supply huge amounts: too little and too much both harm the thyroid.',
    '**Selenium** protects cells and helps thyroid hormone work. Brazil nuts contain a lot: easy to overdo.',
    'All have a **safe range**. Check before taking supplements, and do not take iron unless needed.',
  ],
  sections: [
    {
      id: 'iron',
      title: 'Iron',
      blocks: [
        { t: 'p', text: 'Iron sits at the centre of haemoglobin, the red blood cell protein that carries oxygen, and of myoglobin in muscle. It is also needed for energy production and brain development. The body recycles iron well but loses it in blood, so those who menstruate, are pregnant, donate blood often, or have gut bleeding are most at risk.' },
        {
          t: 'table',
          head: ['Type', 'Foods', 'Absorption'],
          rows: [
            ['Haem iron', 'Red meat, liver, clams, sardines, bonito, tuna, chicken thigh', 'About 15 to 35 per cent absorbed'],
            ['Non-haem iron', 'Beans, tofu, natto, spinach, komatsuna, seeds, dried fruit, fortified cereals', 'About 2 to 20 per cent; greatly improved by vitamin C and by meat in the same meal; reduced by tea, coffee and calcium'],
          ],
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Signs', title: 'Possible signs of low iron', body: 'Tiredness, pallor, breathlessness, headaches, poor concentration, brittle nails, cold hands. These are non-specific, so get a blood test (including ferritin) before assuming.' },
            { tag: 'Tip', title: 'Pair with vitamin C', body: 'A squeeze of yuzu or lemon on a spinach dish, or fruit with a bean meal, increases absorption.' },
            { tag: 'Tip', title: 'Time your tea', body: 'Tannins in tea and coffee bind iron. Drink them between meals rather than with them.' },
            { tag: 'Care', title: 'Do not self-prescribe', body: 'Iron supplements cause constipation and are dangerous in overdose, especially for children. Some people absorb too much (haemochromatosis). Take them only if tests show a need.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'The hijiki story', text: 'Hijiki seaweed was once praised as an iron-rich food. The iron came largely from the old iron pots in which it was simmered. Modern stainless-steel pots give much less. Separately, hijiki contains inorganic arsenic, and some health agencies (such as the UK Food Standards Agency) advise against eating it, while Japan’s ministry advises that occasional eating in small portions is not a concern. Prefer other seaweeds (wakame, nori) for regular eating, and see the safety page.' },
      ],
    },
    {
      id: 'zinc',
      title: 'Zinc',
      blocks: [
        { t: 'p', text: 'Zinc is part of more than 300 enzymes and is vital for immune cells, wound healing, taste and smell, and growth. Oysters are by far the richest source. Beef, crab, pumpkin seeds, cashews, chickpeas and dairy also contribute. Phytates in whole grains and pulses reduce absorption somewhat, which matters for vegetarians; soaking, sprouting, fermenting (as in miso and natto) and leavening reduce phytates.' },
        { t: 'list', items: ['Zinc lozenges taken at the start of a cold may shorten it in some trials, but evidence is mixed and they can cause nausea and a bad taste.', 'Taking 40 mg a day or more over long periods can cause copper deficiency, anaemia and nerve problems.', 'Low zinc signs: slow wound healing, loss of taste, hair loss, frequent infections.'] },
      ],
    },
    {
      id: 'iodine',
      title: 'Iodine',
      blocks: [
        { t: 'p', text: 'The thyroid gland uses iodine to make thyroxine, which sets the body’s metabolic rate and is essential for brain development in the foetus and infant. Iodine deficiency is a leading preventable cause of intellectual disability worldwide. Salt iodisation, introduced in many countries, has reduced goitre dramatically.' },
        {
          t: 'table',
          head: ['Situation', 'What to know'],
          rows: [
            ['Typical diet without seafood, in an area where salt is not iodised', 'At risk of low intake. Vegans and those avoiding dairy and fish are more at risk'],
            ['Japan, where seaweed is eaten often', 'Iodine intake from kombu and dashi can be very high, often cited as several times the recommended intake. Most people tolerate it, but too much can cause thyroid problems (underactive or overactive)'],
            ['Pregnancy and breastfeeding', 'Needs are higher (220 and 290 µg). Follow national advice; avoid daily kelp supplements'],
            ['Thyroid disease', 'Ask your doctor about seaweed intake'],
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Seaweed is not all equal', text: 'A single gram of dried kombu can contain several thousand micrograms of iodine, well above the daily upper limit of 1,100 µg. Using kombu to make dashi and then eating the kombu daily, or taking kelp tablets, can add up. Wakame and nori contain far less. Moderation, and variety, are sensible.' },
      ],
    },
    {
      id: 'selenium',
      title: 'Selenium and the others',
      blocks: [
        {
          t: 'table',
          head: ['Mineral', 'What it does', 'Sources', 'Note'],
          rows: [
            ['Selenium', 'Antioxidant enzymes; thyroid hormone activation', 'Brazil nuts, tuna, sardines, eggs, meat, whole grains', 'One or two Brazil nuts a day is plenty; too much causes hair and nail loss and nerve damage'],
            ['Copper', 'Iron use, connective tissue, nerves', 'Shellfish, nuts, seeds, liver, whole grains', 'Deficiency is rare; high zinc intake can cause it'],
            ['Manganese', 'Bone, metabolism, antioxidant enzymes', 'Whole grains, nuts, tea, legumes', 'Deficiency very rare; excess (from water or inhalation) can harm the nerves'],
            ['Fluoride', 'Strengthens tooth enamel', 'Fluoridated water, toothpaste, tea', 'Too much in childhood stains teeth'],
            ['Chromium, molybdenum, others', 'Small roles in metabolism', 'Mixed diet', 'Supplements, such as chromium for blood sugar, have not shown clear benefit'],
          ],
        },
        { t: 'links', items: [{ path: 'food-therapy/vitamins/vitamin-c-and-antioxidants', note: 'Vitamin C and iron' }, { path: 'food-therapy/food-for-goals/immunity', note: 'Zinc, iron and immunity' }, { path: 'food-therapy/safety', note: 'Seaweed, hijiki and supplements' }] },
      ],
    },
  ],
  sources: [
    'US National Institutes of Health, Office of Dietary Supplements. Fact sheets: Iron, Zinc, Iodine, Selenium, Copper.',
    'World Health Organization. Anaemia and iodine deficiency fact sheets.',
    'Zimmermann, M. B., and Andersson, M. (2012). Update on iodine status worldwide. Current Opinion in Endocrinology, Diabetes and Obesity.',
    'UK Food Standards Agency. Advice on hijiki seaweed (2004).',
    'Ministry of Health, Labour and Welfare (Japan). Dietary Reference Intakes for Japanese (2020), iodine entries.',
  ],
  related: ['food-therapy/minerals/major-minerals', 'food-therapy/food-for-goals/immunity', 'food-therapy/safety'],
}

export default guide
