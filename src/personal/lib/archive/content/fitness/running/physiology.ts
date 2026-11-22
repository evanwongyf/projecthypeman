import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Three things decide how fast you can run for a given distance: how much oxygen your body can use (**VO2max**), how much of that you can sustain (**lactate threshold**), and how much oxygen each step costs (**running economy**). Different workouts train each one.',
  nutshell: [
    '**VO2max** is the most oxygen your body can take in and use, in ml per kg of body weight per minute.',
    '**Lactate threshold** is the fastest pace you can hold for a long time (roughly your one-hour race pace).',
    '**Running economy** is how much oxygen you use at a given pace: like miles per litre for a car.',
    'Most training should be easy, aerobic running; it builds the base for all three.',
    'Heart rate zones and the talk test help you keep easy runs easy and hard runs hard.',
  ],
  sections: [
    {
      id: 'systems',
      title: 'Energy systems',
      blocks: [
        {
          t: 'table',
          head: ['System', 'Fuel', 'Main role', 'Example'],
          rows: [
            ['Phosphocreatine', 'Stored ATP and creatine phosphate', 'All-out efforts up to ~10 seconds', 'A 60 m sprint, a jump'],
            ['Anaerobic glycolysis', 'Glucose, without enough oxygen; produces lactate', 'Hard efforts from ~10 seconds to ~2 minutes', 'A 400 m race, a hard 1-minute interval'],
            ['Aerobic', 'Carbohydrate and fat, with oxygen', 'Everything longer; recovery between efforts', 'A 5K, a marathon, an easy run'],
          ],
          caption: 'All three work together all the time; the mix shifts with intensity and duration. From about 2 minutes onwards, aerobic energy dominates.',
        },
      ],
    },
    {
      id: 'vo2',
      title: 'VO2max',
      blocks: [
        {
          t: 'p',
          text: 'VO2max sets the ceiling for aerobic performance. Untrained adults are often in the 30s and 40s (ml/kg/min); trained runners in the 50s and 60s; elite distance runners 70–85. It is partly genetic but rises with training, especially with intervals of 3–5 minutes near 3K–5K pace.',
        },
        { t: 'fit-tool', tool: 'vo2' },
        {
          t: 'callout',
          tone: 'note',
          title: 'VO2max is not everything',
          text: 'Among runners with similar VO2max, race times vary a lot, because threshold and economy differ. That is why training is never just intervals.',
        },
      ],
    },
    {
      id: 'threshold',
      title: 'Lactate threshold',
      blocks: [
        {
          t: 'p',
          text: 'As you run faster, lactate in the blood stays low and steady until a point where it starts to climb quickly. Below that point you can keep going for a long time; above it, fatigue builds within minutes. Trained runners can hold their threshold for about an hour: it feels "comfortably hard". Tempo runs and cruise intervals push the threshold up, so a bigger share of your VO2max becomes usable.',
        },
        {
          t: 'terms',
          items: [
            { term: 'First threshold (LT1, aerobic threshold)', def: 'The top of truly easy running; around 2 mmol/L of lactate. Below it, you can talk easily.' },
            { term: 'Second threshold (LT2, anaerobic threshold)', def: 'The fastest steady-state pace; often 3–4 mmol/L in tests, about one-hour race pace.' },
            { term: 'Running economy', def: 'Oxygen used at a given speed. Improved by years of running, strides, hill work, strength and plyometric training.' },
            { term: 'VDOT', def: 'Jack Daniels’ score that combines VO2max and economy, worked out from a race time. See the [calculators](@fitness/running/calculators).' },
          ],
        },
      ],
    },
    {
      id: 'zones',
      title: 'Heart rate zones',
      blocks: [
        { t: 'fit-tool', tool: 'hr' },
        {
          t: 'p',
          text: 'Heart rate lags behind effort in short intervals and drifts upward in heat and on long runs, so use it mainly for easy and steady running. For intervals, use pace or effort.',
        },
      ],
    },
  ],
  sources: [
    'Joyner, M. J., & Coyle, E. F. (2008). Endurance exercise performance: The physiology of champions. *The Journal of Physiology*, 586(1), 35–44.',
    'Daniels, J. (2014). *Daniels’ Running Formula* (3rd ed.). Human Kinetics.',
    'Cooper, K. H. (1968). A means of assessing maximal oxygen intake. *JAMA*, 203(3), 201–204.',
    'Tanaka, H., Monahan, K. D., & Seals, D. R. (2001). Age-predicted maximal heart rate revisited. *Journal of the American College of Cardiology*, 37(1), 153–156.',
  ],
  related: ['fitness/running/workouts', 'fitness/running/philosophies', 'fitness/running/calculators'],
}

export default guide
