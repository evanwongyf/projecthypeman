import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Muscle is built from protein, but the energy to build it, and the freedom to train hard and recover, come from calories. Eat too little and growth stalls; eat far too much and the extra turns mostly into fat. This guide explains how to estimate your maintenance calories, how big a surplus supports muscle gain, what you can expect from the scale, why a "dirty bulk" is not faster, and how cutting and body recomposition work, with an interactive calculator.',
  nutshell: [
    '**Maintenance calories (TDEE)** = resting energy (BMR) × activity factor. The Mifflin–St Jeor equation gives BMR within about ±10% for most people.',
    'A **small surplus (about 5 to 15% above maintenance, roughly 250 to 500 kcal a day)** supports lean gain; larger surpluses add mostly fat, not faster muscle.',
    'Weight gain of **0.25 to 0.5% of body weight a week** suits a novice, 0.1 to 0.25% an experienced lifter.',
    '**Cutting** (a deficit of about 15 to 25%, losing 0.5 to 1% of body weight a week) with high protein and continued lifting preserves muscle; beginners and those returning to training can partly **recompose**, gaining muscle while losing fat.',
    'Calculators are a starting guess. **Track the weekly average of your weight and adjust** every two to three weeks.',
  ],
  sections: [
    {
      id: 'tdee',
      title: 'Estimating maintenance calories',
      lead: 'Where you start.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{BMR}=10\,m+6.25\,h-5\,a+s,\qquad \text{TDEE}=\text{BMR}\times\text{PAL},\qquad s=+5\ (\text{men}),\ -161\ (\text{women})`,
          caption: 'The Mifflin–St Jeor equation (1990) for resting metabolic rate, and total daily energy expenditure as a multiple of it.',
          where: [{ sym: 'm,\\ h,\\ a', def: 'mass in kilograms, height in centimetres, age in years' }, { sym: '\\text{PAL}', def: 'physical activity level: 1.2 (mostly sedentary), 1.375 (light exercise), 1.55 (moderate), 1.725 (hard daily training)' }],
          syntax: [
            { sym: '10m+6.25h-5a', say: 'a linear fit of resting energy to size and age. Effect: heavier and taller people burn more at rest; each year of age lowers it by about 5 kcal. Why: bigger bodies have more tissue to maintain, and metabolic rate drifts down with age and lean mass.' },
            { sym: '\\times\\text{PAL}', say: 'scaling by activity. Effect: a hard-training person can burn 70% more than at rest. Why: movement, training and digesting food (the thermic effect, about 10% of intake) add to the resting rate. People tend to over-estimate their activity level, so choose the lower of two options when unsure.' },
          ],
          worked: {
            title: 'A 25-year-old man, 172 cm, 68 kg, training 4 days a week',
            steps: ['BMR = 10 × 68 + 6.25 × 172 − 5 × 25 + 5 = 680 + 1,075 − 125 + 5 = 1,635 kcal.', 'PAL 1.55: TDEE = 1,635 × 1.55 = 2,534 kcal.', 'A lean-gain target of +8%: about 2,740 kcal a day (+200 kcal).'],
            answer: 'About 2,500 kcal maintains his weight; about 2,700 to 2,850 supports gain at about 0.25 to 0.4 kg a month in muscle and some fat. Check the weekly average weight after two to three weeks and adjust.',
          },
        },
        { t: 'fit-lab', viz: 'macros' },
      ],
    },
    {
      id: 'surplus',
      title: 'How big a surplus?',
      lead: 'More is not faster.',
      blocks: [
        { t: 'p', text: 'Building muscle takes energy: a kilogram of new lean mass stores a few thousand calories of energy in protein and water, and training itself raises demands. But muscle gain is limited by how fast the body can synthesise new tissue, not by how much you eat. A modest surplus gives the body what it needs; a big surplus mostly adds fat. Studies of resistance-trained people eating 10 to 20% above maintenance (Garthe et al., 2013; Iraki et al., 2019) find that moderate surpluses give similar lean gain to larger ones, with less fat added.' },
        {
          t: 'table',
          head: ['Experience', 'Surplus', 'Target weight gain', 'Notes'],
          rows: [
            ['Novice (under 1 year)', '+10 to 15% (about 300 to 500 kcal)', '0.25 to 0.5% of body weight a week', 'Fastest gains; some fat will come with it'],
            ['Intermediate (1 to 3 years)', '+5 to 10% (about 150 to 300 kcal)', '0.1 to 0.25% a week', 'Slower; smaller surplus'],
            ['Advanced (3+ years)', '+3 to 5% (about 100 to 200 kcal)', '0.05 to 0.15% a week', 'Gains are slow; patience and small surpluses'],
            ['Underweight or "hard gainer"', '+15 to 20%', 'To the point of appetite', 'Eat more often; liquid calories help'],
          ],
        },
        {
          t: 'math',
          tex: String.raw`\Delta m_{\text{weekly}}\approx\frac{7\,(E_{\text{in}}-\text{TDEE})}{E_{\text{tissue}}},\qquad E_{\text{tissue}}\approx 7{,}700\ \text{kcal/kg (fat)};\ \text{lean gain costs roughly 2{,}000 to 3{,}000 kcal/kg}`,
          caption: 'A rough link between a daily calorie surplus and weekly weight change.',
          where: [{ sym: 'E_{\\text{in}}', def: 'daily energy intake' }, { sym: '\\text{TDEE}', def: 'daily energy expenditure (maintenance)' }],
          syntax: [{ sym: '7(E_{\\text{in}}-\\text{TDEE})', say: 'the surplus over a week. Effect: 300 kcal a day is 2,100 kcal a week. Why: seven days of daily surplus.' }, { sym: 'E_{\\text{tissue}}', say: 'the energy value of the tissue gained. Effect: if it is all fat, 2,100 kcal is about 0.27 kg; if it is largely lean tissue (water and protein) less energy per kg is needed, so weight rises more. Real gains mix the two, and the maintenance figure itself rises as you gain weight.' }],
          worked: {
            title: 'A 300 kcal surplus',
            steps: ['Weekly surplus: 300 × 7 = 2,100 kcal.', 'If gain were all fat: 2,100/7,700 = 0.27 kg a week. If a quarter were lean tissue at about 2,500 kcal per kg: the weekly gain would be about 0.35 kg.', 'Over 12 weeks: roughly 3 to 4 kg. A novice could reasonably have 1 to 2 kg of that as muscle.'],
            answer: 'So the realistic goal for a lean gain is a weight rise of 0.25 to 0.5 kg a week for a novice, not more. Gaining 1 kg a week mostly means gaining fat.',
          },
        },
      ],
    },
    {
      id: 'cut',
      title: 'Cutting and recomposition',
      lead: 'Losing fat without losing the muscle.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Set a moderate deficit', body: 'About 15 to 25% below maintenance, or a loss of 0.5 to 1% of body weight a week. Faster cuts lose more muscle and make training harder.' },
            { title: 'Keep protein high', body: 'About 1.8 to 2.7 g per kg of body weight (higher the leaner you are and the bigger the deficit), spread over the day.' },
            { title: 'Keep lifting heavy', body: 'Maintain weights and sets; resistance training signals the body to keep muscle. Reduce volume if recovery suffers.' },
            { title: 'Add steps before more cardio', body: 'Walking more raises energy use with little fatigue.' },
            { title: 'Plan diet breaks', body: 'After 8 to 12 weeks, a week at maintenance helps adherence and recovery.' },
          ],
        },
        { t: 'p', text: '**Body recomposition**, gaining muscle and losing fat at once, is realistic in untrained people, people returning after a layoff, and those with higher body fat, especially at maintenance or a small deficit with high protein and good training. It becomes slow in experienced, lean lifters, who do better alternating a short surplus and a short cut. Weight on the scale can stay flat during recomposition, so track measurements, photos and strength.' },
        { t: 'callout', tone: 'warn', title: 'A note on very low calories', text: 'Crash diets below about 1,200 to 1,500 kcal a day without supervision cost muscle, energy and bone health, and are linked to rebound weight gain. Women who lose their period, anyone with fatigue and frequent illness, or anyone with a history of disordered eating should seek advice from a doctor or dietitian.' },
      ],
    },
  ],
  sources: [
    'Mifflin, M. D. et al. (1990). A new predictive equation for resting energy expenditure in healthy individuals. *American Journal of Clinical Nutrition*, 51(2).',
    'Garthe, I., Raastad, T., Refsnes, P. E. & Sundgot-Borgen, J. (2013). Effect of nutritional intervention on body composition and performance in elite athletes. *European Journal of Sport Science*, 13(3).',
    'Iraki, J., Fitschen, P., Espinar, S. & Helms, E. (2019). Nutrition recommendations for bodybuilders in the off-season: a narrative review. *Sports*, 7(7).',
    'Slater, G. J. et al. (2019). Is an energy surplus required to maximize skeletal muscle hypertrophy associated with resistance training? *Frontiers in Nutrition*, 6.',
    'Barakat, C. et al. (2020). Body recomposition: can trained individuals build muscle and lose fat at the same time? *Strength and Conditioning Journal*, 42(5).',
    'Health Promotion Board Singapore: Energy and Nutrient Composition of Food (focos.hpb.gov.sg).',
  ],
  related: ['fitness/muscle-nutrition/protein-for-muscle', 'fitness/muscle-nutrition/best-foods-for-muscle', 'fitness/plans/tracking-and-troubleshooting', 'fitness/fuel', 'fitness/muscle/hypertrophy-science'],
}

export default guide
