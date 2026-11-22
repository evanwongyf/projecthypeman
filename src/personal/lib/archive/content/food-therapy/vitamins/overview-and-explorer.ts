import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Vitamins and minerals are the small molecules that let the body use the big ones: they turn food into energy, build and repair tissue, carry oxygen, fight infection and run the nervous system. You need only tiny amounts, but you cannot make most of them, so they must come from food. The explorer below lets you look up 21 of them, filter by group or goal, and see what each does, how much an adult needs, the upper limit, food sources (with Japanese examples), signs of too little and cautions.',
  nutshell: [
    '**Vitamins** are organic compounds you need in small amounts: 13 in total. **Minerals** are elements such as calcium and iron.',
    '**Fat-soluble** vitamins (A, D, E, K) are stored in the body and can build up. **Water-soluble** vitamins (B vitamins and C) mostly pass out in urine, so you need them regularly.',
    'Values here are **adult reference intakes** from the US National Institutes of Health. Other countries publish similar tables with small differences, and your needs change with age, pregnancy and illness.',
    'The **upper limit** is the highest daily intake unlikely to cause harm. It mainly matters for supplements and a few foods.',
    'This is educational. It does not replace advice from a doctor or dietitian.',
  ],
  sections: [
    {
      id: 'explorer',
      title: 'The explorer',
      blocks: [
        { t: 'nutrient-explorer' },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Try this',
          text: 'Pick “Bones and teeth” as a goal and note how many nutrients appear (calcium, vitamin D and K, magnesium and more). Then pick “Blood”. A goal is rarely served by one nutrient, which is why a varied diet beats a single supplement.',
        },
      ],
    },
    {
      id: 'terms',
      title: 'The words on the labels',
      blocks: [
        {
          t: 'terms',
          items: [
            { term: 'RDA (recommended dietary allowance)', def: 'The average daily intake that meets the needs of nearly all (97 to 98 per cent) healthy people in a group.' },
            { term: 'AI (adequate intake)', def: 'Used when there is not enough evidence to set an RDA. A best estimate of what is enough.' },
            { term: 'EAR (estimated average requirement)', def: 'The intake that meets the needs of half of a group. Used to set the RDA.' },
            { term: 'UL (tolerable upper intake level)', def: 'The highest daily intake unlikely to cause harm in almost everyone. Not a target.' },
            { term: 'µg, mg, IU', def: 'A microgram (µg) is a thousandth of a milligram (mg). IU (international unit) is an older measure for some vitamins; 1 µg of vitamin D is 40 IU.' },
            { term: 'RAE, DFE, NE', def: 'Units that account for how well the body uses different forms: retinol activity equivalents (vitamin A), dietary folate equivalents (folate), niacin equivalents (niacin).' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'Tables differ', text: 'The explorer uses US values. Japan’s Dietary Reference Intakes, the UK’s and others differ in details, for example the exact figures for calcium or vitamin D. If you follow national guidance, use your country’s table.' },
      ],
    },
    {
      id: 'how',
      title: 'Getting what you need',
      blocks: [
        {
          t: 'table',
          head: ['Approach', 'Why'],
          rows: [
            ['Eat a variety of whole foods, including vegetables of different colours, fish, pulses, nuts and whole grains', 'Covers most vitamins and minerals, plus fibre and compounds that supplements lack'],
            ['Cook gently and do not overcook vegetables', 'Water-soluble vitamins leach into cooking water and are damaged by heat. Soup keeps the water; steaming loses less'],
            ['Eat fat-soluble vitamin sources with some fat', 'Vitamin A (carotenoids), D, E and K are absorbed better with a little oil or fat'],
            ['Pair plant iron with vitamin C', 'Vitamin C increases how much non-haem iron you absorb'],
            ['Store food properly', 'Light and air destroy some vitamins (riboflavin in light, vitamin C in air)'],
          ],
        },
        { t: 'links', items: [{ path: 'food-therapy/vitamins/fat-soluble', note: 'A, D, E and K in detail' }, { path: 'food-therapy/vitamins/b-vitamins', note: 'The B vitamins and choline' }, { path: 'food-therapy/minerals/trace-minerals', note: 'Iron, zinc, iodine and selenium' }, { path: 'food-therapy/safety', note: 'Before taking supplements' }] },
      ],
    },
  ],
  sources: [
    'US National Institutes of Health, Office of Dietary Supplements. Nutrient fact sheets for health professionals (vitamins and minerals).',
    'National Academies of Sciences, Engineering, and Medicine. Dietary Reference Intakes series.',
    'Ministry of Health, Labour and Welfare (Japan). Dietary Reference Intakes for Japanese (2020).',
  ],
  related: ['food-therapy/vitamins/fat-soluble', 'food-therapy/vitamins/b-vitamins', 'food-therapy/minerals/major-minerals'],
}

export default guide
