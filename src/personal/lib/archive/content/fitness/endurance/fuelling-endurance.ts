import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Over long efforts, performance is limited by fuel and fluid as much as by fitness. The body stores only enough carbohydrate for about 90 minutes to two hours of hard exercise, a large part of which is spent before you feel the wall. Eating and drinking well before, during and after training stretches that limit, speeds recovery and, in the heat, protects against dehydration. This guide covers glycogen, carbohydrate loading, how much to take per hour (30 to 90 g), why mixed sugars help, hydration and sodium, gut training, and a calculator to plan your own fuelling.',
  nutshell: [
    'Stored carbohydrate (about 400 to 500 g) lasts roughly **90 to 120 minutes of hard effort**. Beyond an hour, take in **30 to 60 g of carbohydrate per hour**, up to **90 g per hour** after 2.5 hours using glucose plus fructose.',
    '**Carbohydrate loading** (8 to 12 g/kg for 36 to 48 hours) helps events lasting over 90 minutes; **a normal meal 2 to 4 hours before** (1 to 4 g/kg) is enough for shorter ones.',
    '**Hydration:** replace about 60 to 80% of sweat losses and aim to finish within about 2% of starting weight; in long events, replace sodium. **Do not over-drink**: it can cause dangerous low blood sodium (hyponatraemia).',
    '**Gut training:** the digestive system adapts to carbohydrate intake during exercise over a few weeks; practise your race-day plan.',
    '**Recovery:** within 30 to 60 minutes, carbohydrate (about 1 g/kg) and protein (0.3 g/kg) if you must train again within eight hours.',
  ],
  sections: [
    {
      id: 'glycogen',
      title: 'Glycogen: the limited fuel',
      lead: 'Why the wall exists.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`t_{\text{empty}}\approx\frac{G_{\text{stored}}}{r_{\text{CHO}}-r_{\text{ingested}}},\qquad r_{\text{CHO}}=\frac{\dot E\times f_{\text{CHO}}}{4}`,
          caption: 'A simple model of how long glycogen lasts: stored carbohydrate divided by the net rate at which it is burnt.',
          where: [{ sym: 'G_{\\text{stored}}', def: 'glycogen stored in muscle and liver (about 400 to 500 g in a trained 70 kg athlete)' }, { sym: 'r_{\\text{CHO}}', def: 'rate of carbohydrate burning in grams per hour' }, { sym: '\\dot E', def: 'energy expenditure in kcal per hour' }, { sym: 'f_{\\text{CHO}}', def: 'the fraction of energy supplied by carbohydrate: about 0.5 at an easy pace and 0.9 or more near threshold' }],
          syntax: [{ sym: '\\dot E f_{\\text{CHO}}/4', say: 'carbohydrate used per hour. Effect: at 800 kcal/h with 80% from carbohydrate: 160 g/h. Why: carbohydrate gives 4 kcal per gram.' }, { sym: 'r_{\\text{CHO}}-r_{\\text{ingested}}', say: 'the net depletion rate. Effect: every gram you take in during the session extends the time. Why: the glycogen stores are only drawn down by the part you do not replace; but gut absorption limits intake to about 60 to 90 g/h.' }],
          worked: {
            title: 'A hard marathon effort',
            steps: ['A 70 kg runner uses about 900 kcal/h at marathon pace; 85% from carbohydrate: \\(900\\times0.85/4=191\\) g/h.', 'Stored: 450 g → 450/191 = 2.4 hours of carbohydrate without feeding.', 'Taking 60 g/h: net 131 g/h → 450/131 = 3.4 hours.', 'Taking 90 g/h: net 101 g/h → 4.5 hours.'],
            answer: 'A marathon of 3 to 4 hours is beyond unfed glycogen for most runners; eating 60 g an hour covers the gap. The calculation gives the right order of magnitude; real depletion also depends on fat use, fitness and pace.',
          },
        },
        { t: 'fit-lab', viz: 'fuelling' },
      ],
    },
    {
      id: 'amount',
      title: 'How much to eat and drink',
      lead: 'Targets by duration.',
      blocks: [
        {
          t: 'table',
          head: ['Duration of exercise', 'Carbohydrate during', 'Notes'],
          rows: [
            ['Under 45 minutes', 'None needed', 'A mouth rinse with a sports drink may help in a fasted state'],
            ['45 to 75 minutes', 'A small amount (about 15 to 30 g) or mouth rinse', 'For high-intensity sessions'],
            ['1 to 2.5 hours', '30 to 60 g per hour', 'From sports drinks, gels, chews, bananas, dates'],
            ['Over 2.5 hours', 'Up to 60 to 90 g per hour, mixed sugars (glucose:fructose about 2:1)', 'Different transporters in the gut mean more total absorption'],
          ],
          caption: 'Consensus recommendations of sports-nutrition bodies (Thomas et al., 2016; Jeukendrup, 2014). Start earlier than you feel you need it, and take small amounts often (every 15 to 20 minutes).',
        },
        {
          t: 'steps',
          items: [
            { title: 'Load in the last 2 days (events over 90 minutes)', body: '8 to 12 g of carbohydrate per kg per day for 36 to 48 hours, mostly low-fibre foods: rice, noodles, bread, potatoes, fruit and juice. A 70 kg runner needs 560 to 840 g a day.' },
            { title: 'Eat before', body: '1 to 4 g/kg of carbohydrate 1 to 4 hours before; the closer to the start, the smaller and simpler. A banana and toast an hour before is a common option.' },
            { title: 'Drink with the food', body: 'About 5 to 7 ml/kg of fluid in the 4 hours before; pale yellow urine is a sign of good hydration.' },
            { title: 'Fuel and drink during', body: 'Carbohydrate as in the table; fluid of about 400 to 800 ml per hour (up to 1 L in the heat), tailored to your sweat rate.' },
            { title: 'Recover quickly if needed', body: '1.0 to 1.2 g/kg of carbohydrate per hour for the first 4 hours if you train again the same day; with protein, about 0.3 g/kg.' },
          ],
        },
      ],
    },
    {
      id: 'hydr',
      title: 'Fluid and sodium',
      lead: 'Neither too little nor too much.',
      blocks: [
        { t: 'p', text: 'Sweat contains sodium, on average about 800 mg per litre but with a wide range between people (about 400 to 1,500 mg/L). In a long hot session, large sodium losses plus drinking only plain water can dilute blood sodium (**exercise-associated hyponatraemia**), which in extreme cases causes confusion, seizures and even death. This is rare but preventable: drink to thirst rather than a fixed schedule, do not drink far more than you sweat, and use drinks or salt tablets with sodium (300 to 600 mg an hour is typical for long, hot sessions) if you are a salty sweater. The opposite error, under-drinking, loses more than 2% of body mass and raises heat strain.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Know your sweat rate', tag: 'measure', body: 'Weigh yourself before and after a session in typical conditions; the difference plus fluid drunk is your sweat loss (see the heat guide).' },
            { title: 'Salty sweater clues', tag: 'sodium', body: 'White salt marks on clothes and skin, stinging eyes, craving salty food after sessions. Consider more sodium in long sessions.' },
            { title: 'Sports drinks', tag: 'carbs, sodium, fluid', body: 'Isotonic drinks have about 6 to 8% carbohydrate and 300 to 600 mg sodium per litre, supplying all three. In Singapore, 100PLUS and similar drinks fit; check the label.' },
            { title: 'Practise', tag: 'gut training', body: 'Take carbohydrate in training sessions longer than 90 minutes, starting at 30 to 40 g/h and building up over weeks, so that the stomach tolerates race-day amounts.' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Test everything in training', text: 'Nothing new on race day. The best fuelling plan is the one you have practised, in the heat, at race effort, and that your stomach tolerates.' },
      ],
    },
  ],
  sources: [
    'Burke, L. M., Hawley, J. A., Wong, S. H. S. & Jeukendrup, A. E. (2011). Carbohydrates for training and competition. *Journal of Sports Sciences*, 29(S1).',
    'Jeukendrup, A. (2014). A step towards personalized sports nutrition: carbohydrate intake during exercise. *Sports Medicine*, 44(S1).',
    'Thomas, D. T., Erdman, K. A. & Burke, L. M. (2016). Position of the Academy of Nutrition and Dietetics, Dietitians of Canada, and the American College of Sports Medicine: nutrition and athletic performance. *Journal of the Academy of Nutrition and Dietetics*, 116(3).',
    'Hew-Butler, T. et al. (2015). Statement of the third international exercise-associated hyponatremia consensus development conference. *Clinical Journal of Sport Medicine*, 25(4).',
    'Sawka, M. N. et al. (2007). ACSM position stand: exercise and fluid replacement. *Medicine & Science in Sports & Exercise*, 39(2).',
  ],
  related: ['fitness/endurance/best-foods-for-stamina', 'fitness/endurance/training-in-the-heat', 'fitness/fuel', 'fitness/muscle-nutrition/carbs-fats-and-micronutrients', 'fitness/endurance/stamina-plans'],
}

export default guide
