import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Stamina, in the sense of how long you can keep going at a given pace, comes down to three numbers: how much oxygen your body can use at its maximum (VO₂max), the fraction of that you can sustain for a long time (the lactate threshold), and how cheaply you move (economy). A fourth, durability, describes how well you hold those numbers late in a long effort. This guide explains each, how they are measured, the oxygen-delivery equation that links the heart, blood and muscle, how fast they respond to training, and what limits them, so you can decide what to train.',
  nutshell: [
    '**VO₂max** is the highest rate at which you can use oxygen (ml per kg per minute). Typical: about 35 to 45 in untrained young adults, 50 to 60 in trained, 70 to 85 in elite endurance athletes.',
    'The **Fick equation**: \\(\\dot VO_2=HR\\times SV\\times(a\\text{-}\\bar v)O_2\\). Heart rate, stroke volume and oxygen extraction all matter; stroke volume and muscle adaptation are the trainable parts.',
    '**Lactate threshold** (the highest steady pace you can hold) is usually 75 to 90% of VO₂max in trained people and is a better predictor of race pace than VO₂max alone.',
    '**Economy** is the oxygen cost of a given speed; it improves with strength training, technique and mileage. **Durability** is how little these decline in the third hour.',
    'Most of the gain in the first months comes from the **aerobic system** (heart, capillaries, mitochondria), which responds to **volume of easy-to-moderate training** and to **a little hard work**.',
  ],
  sections: [
    {
      id: 'fick',
      title: 'How the body delivers and uses oxygen',
      lead: 'Heart, blood, muscle.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\dot V O_{2}=\dot Q\times(\text{CaO}_2-\text{C}\bar{v}\text{O}_2),\qquad \dot Q=HR\times SV`,
          caption: 'The Fick principle: oxygen uptake equals cardiac output times the difference in oxygen content between arterial and venous blood.',
          where: [{ sym: '\\dot Q', def: 'cardiac output: litres of blood pumped per minute' }, { sym: 'HR,\\ SV', def: 'heart rate (beats a minute) and stroke volume (millilitres per beat)' }, { sym: '\\text{CaO}_2-\\text{C}\\bar v\\text{O}_2', def: 'the oxygen extracted from each 100 ml of blood passing through the tissues (arteriovenous difference), about 15 to 17 ml at maximum in trained people' }],
          syntax: [
            { sym: 'HR\\times SV', say: 'the pump’s output. Effect: maximum heart rate is set by age and genetics and is hardly trainable; stroke volume rises with endurance training, from about 100 to over 150 ml in athletes. Why: a larger, more compliant left ventricle and a bigger blood volume fill more per beat.' },
            { sym: '\\text{CaO}_2-\\text{C}\\bar v\\text{O}_2', say: 'extraction at the muscle. Effect: trained muscle has more capillaries and mitochondria, so it pulls more oxygen from each litre. Why: shorter diffusion distances and more oxygen-using machinery.' },
          ],
          worked: {
            title: 'Two people, one 70 kg',
            steps: ['Untrained: HR 190, SV 100 ml → cardiac output 19.0 L/min. Extraction 13 ml/100 ml → \\(\\dot VO_2=19.0\\times0.13\\times10=\\) 2.47 L/min → for 70 kg: 35 ml/kg/min.', 'Trained: HR 190, SV 150 ml → 28.5 L/min. Extraction 16 ml/100 ml → 4.56 L/min → 65 ml/kg/min.', 'The heart rate is the same; the output and extraction are what changed.'],
            answer: 'Stroke volume and extraction explain almost the whole difference in VO₂max, which is why training raises it without raising the maximum heart rate.',
          },
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Central: delivery', tag: 'heart and blood', body: 'Cardiac output, blood volume and haemoglobin. Limits VO₂max in most people, particularly at sea level.' },
            { title: 'Peripheral: use', tag: 'muscle', body: 'Capillary density, mitochondria number and enzymes. Mostly determines the pace you can hold below VO₂max (threshold and economy).' },
            { title: 'Heredity', tag: 'a big share', body: 'About half of the variation in VO₂max and the response to training is genetic: some people gain 5% and others 30% from the same programme. Pace and goal should be set against your own history.' },
            { title: 'Age', tag: 'declines slowly', body: 'VO₂max falls about 5 to 10% per decade after 30 in the inactive and more slowly in people who keep training.' },
          ],
        },
      ],
    },
    {
      id: 'threshold',
      title: 'Lactate threshold and economy',
      lead: 'The pace you can hold.',
      blocks: [
        { t: 'p', text: 'Muscles always make lactate; at low intensities it is cleared as fast as it is made. Above the **lactate threshold**, production outpaces clearance, blood lactate climbs and effort feels progressively harder. The threshold is not a cliff and has several definitions (the first rise above baseline, LT1; the maximal steady state, LT2 or critical speed). Roughly, LT1 sits near the pace you can talk at, and LT2 near the pace you could hold for 30 to 60 minutes. Because race pace in events from 10 km to the marathon lies close to LT2, raising it is the most direct way to run, ride or swim faster over distance.' },
        {
          t: 'math',
          tex: String.raw`v_{\text{race}}\approx\frac{\%\,\dot VO_{2}\,\text{sustained}\times\dot VO_{2\max}}{C_{r}},\qquad C_r\approx 200\ \text{ml}\cdot\text{kg}^{-1}\cdot\text{km}^{-1}\ (\text{running})`,
          caption: 'A simple model of endurance performance: the speed you can hold equals the oxygen you can use divided by the oxygen cost of each kilometre.',
          where: [{ sym: '\\%\\dot VO_2\\ \\text{sustained}', def: 'the fraction of VO₂max you can hold for the race duration: about 0.95 for 5 km, 0.85 for 10 km, 0.80 for the half marathon, 0.75 for the marathon in trained people' }, { sym: 'C_r', def: 'running economy: oxygen cost per kilometre per kilogram, close to 200 ml in most runners (about 180 in the most economical)' }],
          syntax: [
            { sym: '\\%\\dot VO_2\\times\\dot VO_{2\\max}', say: 'the oxygen supply you can use for the whole race. Effect: raising either VO₂max or the fraction improves speed. Why: aerobic energy supplies nearly all of the energy in events over about 10 minutes.' },
            { sym: '\\div C_r', say: 'dividing supply by cost per kilometre gives kilometres per minute. Effect: a 5% better economy gives a 5% faster speed at the same oxygen use. Why: you spend less oxygen per kilometre, so the same supply covers more distance.' },
          ],
          worked: {
            title: 'Predicting a 10 km pace',
            steps: ['VO₂max 50 ml/kg/min, sustained fraction 0.85 → 42.5 ml/kg/min available.', 'Cost 200 ml/kg/km → 42.5/200 = 0.2125 km/min = 12.75 km/h.', '10 km in 47.1 min; pace 4:42 per km.', 'Raise VO₂max to 55 and nothing else: 14.0 km/h, 42:47. Improve economy by 3% instead: 13.1 km/h, 45:48.'],
            answer: 'A 10% higher VO₂max gives a 10% faster speed in this model, and the equivalent economy gain is smaller but cheaper to get. Real predictions are less exact; use the model to see what each variable is worth.',
          },
        },
      ],
    },
    {
      id: 'dura',
      title: 'Durability and what trains each quality',
      lead: 'Which workout builds what.',
      blocks: [
        {
          t: 'table',
          head: ['Quality', 'Best trained by', 'Time scale of change'],
          rows: [
            ['Stroke volume, capillaries, mitochondria (base)', 'Lots of easy and moderate aerobic training (zone 1 to 2)', 'Weeks to months; continues for years'],
            ['VO₂max', 'Intervals of 2 to 6 minutes at 90 to 100% of VO₂max, and a good base', '6 to 12 weeks for a large part of the gain'],
            ['Lactate threshold', 'Tempo and threshold intervals near LT2, and high volume', '4 to 12 weeks; continues for years'],
            ['Running economy', 'Mileage, hill sprints, plyometrics and heavy strength training, technique', 'Months to years'],
            ['Durability', 'Long runs and rides, fuelling practice, progressive weekly volume', 'Months; improves with long training history'],
            ['Anaerobic capacity, speed', 'Short sprints and repetitions (10 to 60 seconds)', 'Weeks'],
          ],
        },
        { t: 'p', text: 'Durability is the newer idea: studies in elite cyclists and runners show that two athletes with the same VO₂max and threshold can differ by 5 to 15% in how much of those they keep after three hours of work. Athletes with more durable physiology are those with a high weekly volume, a good fuelling strategy and sufficient strength. If your aim is the marathon or longer, durability is as important as raw VO₂max. The following guides turn these qualities into training.' },
        { t: 'callout', tone: 'tip', title: 'Test yourself, cheaply', text: 'You do not need a lab to estimate fitness: a recent 5 km or 3 km time trial gives a good estimate, the talk test finds the aerobic threshold (you can speak in sentences but not sing), and a heart-rate zone chart (see the calculators) helps to set targets. Retest every 6 to 8 weeks.' },
      ],
    },
  ],
  sources: [
    'Bassett, D. R. & Howley, E. T. (2000). Limiting factors for maximum oxygen uptake and determinants of endurance performance. *Medicine & Science in Sports & Exercise*, 32(1).',
    'Joyner, M. J. & Coyle, E. F. (2008). Endurance exercise performance: the physiology of champions. *The Journal of Physiology*, 586(1).',
    'Jones, A. M., Burnley, M., Black, M. I., Poole, D. C. & Vanhatalo, A. (2019). The maximal metabolic steady state: redefining the ‘gold standard’. *Physiological Reports*, 7(10).',
    'Maunder, E., Seiler, S., Mildenhall, M. J., Kilding, A. E. & Plews, D. J. (2021). The importance of ‘durability’ in the physiological profiling of endurance athletes. *Sports Medicine*, 51.',
    'Daniels, J. (2014). *Daniels’ Running Formula* (3rd ed.). Human Kinetics.',
  ],
  related: ['fitness/running/physiology', 'fitness/endurance/building-aerobic-base', 'fitness/endurance/intervals-and-threshold', 'fitness/running/calculators', 'fitness/principles'],
}

export default guide
