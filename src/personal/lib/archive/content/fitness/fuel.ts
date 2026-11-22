import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'You do not need a special diet to get fitter, but eating enough, with enough protein and carbohydrate for the training you do, makes a big difference. Here are the basics that the evidence supports.',
  nutshell: [
    '**Eat enough.** Under-eating while training hard harms performance, hormones and bones.',
    '**Protein**: about 1.6 g per kg of body weight a day helps build muscle, spread over 3–5 meals.',
    '**Carbohydrate** fuels hard and long training; the more you train, the more you need.',
    '**Fluids**: drink to thirst most of the time; plan drinking for long or hot sessions.',
    'Few supplements are worth it. Caffeine and creatine have the best evidence.',
  ],
  sections: [
    {
      id: 'macros',
      title: 'Protein, carbs and fat',
      blocks: [
        {
          t: 'table',
          head: ['Nutrient', 'Rough daily guide', 'Good sources'],
          rows: [
            ['Protein', '1.2–2.0 g/kg (about 1.6 g/kg for muscle gain); 20–40 g per meal', 'Eggs, dairy, fish, meat, tofu, tempeh, beans, lentils'],
            ['Carbohydrate', '3–5 g/kg for light training; 5–7 g/kg for an hour a day; more for heavy endurance training', 'Rice, noodles, bread, oats, potatoes, fruit'],
            ['Fat', 'The rest of your energy; at least 20% of calories', 'Nuts, seeds, olive oil, avocado, oily fish'],
          ],
          caption: 'g/kg = grams per kilogram of body weight. A 60 kg person aiming for 1.6 g/kg needs about 96 g of protein a day.',
        },
      ],
    },
    {
      id: 'timing',
      title: 'Around training',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Before', body: 'A carbohydrate-based meal 2–4 hours before, or a small snack (banana, toast) 30–60 minutes before.' },
            { title: 'During', body: 'Only needed for sessions over about 60–90 minutes: 30–60 g of carbohydrate an hour (gels, sports drink, banana), up to 90 g for long races if your gut is trained.' },
            { title: 'After', body: 'A meal or snack with protein and carbohydrate within a couple of hours, especially if you train again soon.' },
          ],
        },
      ],
    },
    {
      id: 'fluids',
      title: 'Fluids and heat',
      blocks: [
        {
          t: 'list',
          items: [
            'For most sessions, drinking to thirst is enough.',
            'In heat (Singapore and Malaysia, for example) and on long sessions, weigh yourself before and after: 1 kg lost is about 1 litre of fluid. Losing more than 2% of body weight hurts performance.',
            'Do not drink so much that you gain weight during a long race; over-drinking can dangerously dilute blood sodium (hyponatraemia).',
            'For long, sweaty sessions, add sodium (sports drinks or electrolyte tablets).',
          ],
        },
      ],
    },
    {
      id: 'supplements',
      title: 'Supplements worth knowing about',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Caffeine', body: 'About 3 mg per kg, 30–60 minutes before, improves endurance and power for most people. Avoid late in the day.' },
            { title: 'Creatine monohydrate', body: '3–5 g a day helps strength and sprint training. Well researched and safe for healthy adults.' },
            { title: 'Protein powder', body: 'Not magic: just convenient protein. Food works as well.' },
            { title: 'Most others', body: 'Fat burners, BCAAs and most "pre-workouts" have little good evidence. Choose third-party tested products if you compete.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'Not medical advice', text: 'This is general guidance for healthy adults. For eating disorders, medical conditions, pregnancy or young athletes, see a doctor or registered dietitian.' },
      ],
    },
  ],
  sources: [
    'Thomas, D. T., Erdman, K. A., & Burke, L. M. (2016). Nutrition and athletic performance: Joint position statement. *Medicine & Science in Sports & Exercise*, 48(3), 543–568.',
    'Morton, R. W., et al. (2018). A systematic review, meta-analysis and meta-regression of the effect of protein supplementation on resistance training-induced gains in muscle mass and strength. *British Journal of Sports Medicine*, 52(6), 376–384.',
    'Maughan, R. J., et al. (2018). IOC consensus statement: Dietary supplements and the high-performance athlete. *British Journal of Sports Medicine*, 52(7), 439–455.',
  ],
  related: ['fitness/recovery', 'fitness/strength/basics'],
}

export default guide
