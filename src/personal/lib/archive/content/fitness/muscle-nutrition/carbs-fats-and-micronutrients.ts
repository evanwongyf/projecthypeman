import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'After protein and total calories, carbohydrate and fat decide how well you train and how you feel, and a handful of vitamins and minerals decide whether the rest of the diet works. Carbohydrate fuels hard sets and refills glycogen; fat supports hormones, absorbs vitamins and supplies a lot of energy in a small volume; micronutrients such as iron, calcium, vitamin D, zinc and magnesium are the ones lifters most often fall short on. This guide gives targets, sources and the reasoning, with a Singapore lens.',
  nutshell: [
    '**Carbohydrate:** about **3 to 6 g per kg a day** for most lifters (more with a lot of cardio). It fuels training; after protein and fat are set, carbohydrate fills the rest of the calories.',
    '**Fat:** about **20 to 35% of calories**; do not go below roughly 20% for long. Prefer unsaturated sources (nuts, olive oil, fish) and include fish or another omega-3 source twice a week.',
    '**Fibre** of about 25 to 38 g a day; **fluids** of about 35 ml per kg plus sweat losses, more in Singapore’s humidity.',
    'Common gaps: **vitamin D**, **iron** (especially for women and vegetarians), **calcium**, **zinc**, **magnesium**, **vitamin B12** (vegans) and **omega-3**. Food first; supplement if a test or your diet shows a gap.',
  ],
  sections: [
    {
      id: 'carbs',
      title: 'Carbohydrate',
      lead: 'Fuel for hard sets.',
      blocks: [
        { t: 'p', text: 'Carbohydrate is stored as glycogen in muscle and liver (about 400 to 500 g in total) and provides the fast energy for lifting and intervals. A heavy session can use a quarter to a third of the glycogen in the trained muscles. Low-carbohydrate diets can build muscle if protein and calories are adequate, but they tend to lower training quality at higher volumes, so most lifters do better with moderate to high carbohydrate. Choose mostly minimally refined sources, and use simpler carbohydrate around training.' },
        {
          t: 'table',
          head: ['Situation', 'Carbohydrate target', 'Examples'],
          rows: [
            ['Light training or a deficit', '2 to 4 g/kg a day', 'Rice, oats, potatoes, fruit in moderate portions'],
            ['Regular lifting, 3 to 5 sessions a week', '3 to 6 g/kg a day', 'Rice, noodles, bread, oats, fruit, root vegetables'],
            ['Lifting plus a lot of cardio', '5 to 8 g/kg a day', 'As above, plus extra servings and sports drinks if needed'],
            ['Before training (1 to 3 hours)', '1 to 2 g/kg', 'Rice with chicken, banana and yoghurt, oats and milk, toast and honey'],
            ['After training', '0.5 to 1 g/kg if you train again within 8 hours', 'Rice, fruit, milk, a smoothie'],
          ],
        },
        {
          t: 'math',
          tex: String.raw`C=\frac{E-4P-9F}{4},\qquad P=g_p\,m,\qquad F=\frac{f\,E}{9}`,
          caption: 'Setting carbohydrate as what is left after calories (E), protein (P) and fat (F) have been fixed; energy values are 4 kcal per gram of carbohydrate or protein, 9 per gram of fat.',
          where: [{ sym: 'E', def: 'target daily calories' }, { sym: 'g_p', def: 'protein target in g per kg' }, { sym: 'f', def: 'the fraction of calories from fat (0.2 to 0.35)' }, { sym: 'm', def: 'body mass in kilograms' }],
          syntax: [{ sym: '4P', say: 'calories from protein. Effect: 140 g of protein supplies 560 kcal. Why: each gram of protein gives about 4 kcal.' }, { sym: '9F', say: 'calories from fat, 9 per gram. Effect: fat is dense: 70 g of fat is 630 kcal, about the same as 160 g of carbohydrate. Why: energy density of the nutrient.' }, { sym: '(E-4P-9F)/4', say: 'the remaining calories divided by 4 give the carbohydrate grams. Effect: carbohydrate is the flexible part of the diet that flexes with calorie targets.' }],
          worked: {
            title: 'A 75 kg lifter eating 2,800 kcal',
            steps: ['Protein: 1.8 × 75 = 135 g = 540 kcal.', 'Fat at 25% of calories: 0.25 × 2,800 = 700 kcal = 78 g.', 'Carbohydrate: (2,800 − 540 − 700)/4 = 390 g, which is 5.2 g/kg.'],
            answer: 'This fits the 3 to 6 g/kg range. In a deficit of 2,200 kcal, carbohydrate would be (2,200 − 540 − 550)/4 = 278 g, or 3.7 g/kg: still enough for lifting.',
          },
        },
      ],
    },
    {
      id: 'fats',
      title: 'Fat and fibre',
      lead: 'Hormones, vitamins and fullness.',
      blocks: [
        { t: 'p', text: 'Dietary fat is needed for cell membranes, hormone production and absorption of vitamins A, D, E and K. Very low-fat diets (under about 15 to 20% of calories) have been linked to lower testosterone in some studies, though the effect on muscle gain is small. Most guidelines suggest 20 to 35% of calories, with saturated fat under 10%. Include sources of omega-3 fats (EPA and DHA from oily fish such as mackerel, sardines or salmon, or an algae supplement), which support heart health and may modestly help recovery.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Good fat sources', tag: 'unsaturated', body: 'Olive and canola oil, nuts, seeds, avocado, peanut butter, oily fish, eggs. A handful of nuts is about 170 kcal; a tablespoon of oil is about 120 kcal.' },
            { title: 'In hawker food', tag: 'Singapore', body: 'Coconut milk (nasi lemak, laksa), fried foods, gravies and the skin and oil on chicken rice add large amounts of saturated and total fat. Choose soup-based or steamed dishes more often, and ask for less gravy and oil.' },
            { title: 'Fibre', tag: '25 to 38 g a day', body: 'Vegetables, fruit, legumes, oats, wholemeal bread and brown or mixed rice. Fibre supports digestion and fullness; very large amounts before training may upset the stomach.' },
            { title: 'Fluids', tag: 'about 35 ml/kg', body: 'A 70 kg person needs about 2.5 L a day from drinks and food, plus 0.5 to 1.5 L or more for each hour of sweaty exercise in Singapore’s humidity. Pale urine is a practical guide.' },
          ],
        },
      ],
    },
    {
      id: 'micro',
      title: 'The micronutrients that matter most',
      lead: 'Where lifters often fall short.',
      blocks: [
        {
          t: 'table',
          head: ['Nutrient', 'Why it matters', 'Typical adult need', 'Good sources'],
          rows: [
            ['Vitamin D', 'Bone and muscle function; many indoor workers have low levels despite living near the equator', '600 to 800 IU (15 to 20 µg); more only on advice', 'Oily fish, egg yolks, fortified milk; sun exposure; supplement if a blood test is low'],
            ['Iron', 'Oxygen transport; low iron causes fatigue and poor training', 'About 8 mg (men) and 18 mg (premenopausal women) a day', 'Red meat, liver, shellfish, legumes, tofu, fortified cereals; vitamin C aids absorption'],
            ['Calcium', 'Bones, muscle contraction', 'About 1,000 mg', 'Milk, yoghurt, cheese, calcium-set tofu, small fish eaten with bones, bok choy'],
            ['Zinc', 'Growth, immunity, testosterone production', '8 to 11 mg', 'Meat, shellfish (oysters), seeds, legumes'],
            ['Magnesium', 'Muscle and nerve function, energy', '310 to 420 mg', 'Nuts, seeds, legumes, whole grains, leafy vegetables'],
            ['Vitamin B12', 'Red blood cells and nerves; absent from plant foods', 'About 2.4 µg', 'Meat, fish, eggs, dairy; vegans need fortified foods or a supplement'],
            ['Omega-3 (EPA and DHA)', 'Heart health, possibly recovery', 'About 250 to 500 mg a day, or 2 fish meals a week', 'Salmon, mackerel, sardines; algae oil for vegetarians'],
          ],
          caption: 'Typical adult reference values; individual needs differ. Women who menstruate, vegetarians, endurance athletes and those eating very little are at higher risk of gaps.',
        },
        { t: 'callout', tone: 'tip', title: 'Test, do not guess', text: 'A doctor can check iron (ferritin), vitamin D and B12 with a blood test. High-dose supplements can cause harm (iron overload, vitamin D toxicity), so take them on advice. A varied diet with vegetables, fruit, dairy or alternatives, whole grains, lean protein and fish covers most needs.' },
      ],
    },
  ],
  sources: [
    'Kerksick, C. M. et al. (2018). ISSN exercise & sports nutrition review update: research & recommendations. *Journal of the International Society of Sports Nutrition*, 15(38).',
    'Thomas, D. T., Erdman, K. A. & Burke, L. M. (2016). Position of the Academy of Nutrition and Dietetics, Dietitians of Canada, and the American College of Sports Medicine: nutrition and athletic performance. *Journal of the Academy of Nutrition and Dietetics*, 116(3).',
    'Whittaker, J. & Wu, K. (2021). Low-fat diets and testosterone in men: systematic review and meta-analysis of intervention studies. *Journal of Steroid Biochemistry and Molecular Biology*, 210.',
    'Institute of Medicine (2011). *Dietary Reference Intakes for Calcium and Vitamin D*; Health Promotion Board Singapore, Recommended Dietary Allowances (hpb.gov.sg).',
    'Maughan, R. J. et al. (2018). IOC consensus statement: dietary supplements and the high-performance athlete. *British Journal of Sports Medicine*, 52(7).',
  ],
  related: ['fitness/muscle-nutrition/protein-for-muscle', 'fitness/muscle-nutrition/best-foods-for-muscle', 'fitness/fuel', 'fitness/endurance/fuelling-endurance', 'fitness/muscle-nutrition/supplements-timing-and-menus'],
}

export default guide
