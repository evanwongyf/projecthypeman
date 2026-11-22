import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'VO2 max is the single number exercise physiologists reach for most often to describe aerobic fitness: the maximum rate at which your body can take in, transport and use oxygen during intense exercise. It sets a hard ceiling on sustained aerobic performance, and training "zones" are how athletes systematically chip away at raising that ceiling, and at how close to it they can sustain effort.',
  nutshell: [
    '**VO2 max** measures the maximum volume of oxygen the body can use per minute, usually per kilogram of body weight (mL/kg/min).',
    'It sets an upper bound on aerobic performance, but **running economy** and **lactate threshold** often separate similarly fit athletes more than VO2 max alone.',
    'Training **zones**, usually based on heart rate, target different physiological adaptations, not all training should be done hard.',
    'Elite endurance athletes famously spend the majority of their training at low intensity ("polarised training"), not the comfortably-hard pace many recreational athletes default to.',
  ],
  sections: [
    {
      id: 'vo2max',
      title: 'What VO2 max actually measures',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\dot{V}O_2 = Q \times (C_aO_2 - C_vO_2)`,
          where: [
            { sym: 'Q', def: 'Cardiac output: how much blood the heart pumps per minute' },
            { sym: 'C_aO_2 - C_vO_2', def: 'The arteriovenous oxygen difference: how much oxygen the muscles extract from the blood passing through them' },
          ],
          caption: 'The Fick equation: oxygen consumption is the product of how much blood reaches the muscles and how much oxygen those muscles actually pull out of it. Endurance training improves both halves, a bigger, more efficient heart (cardiac output) and muscles better at extracting and using oxygen.',
        },
        { t: 'fit-tool', tool: 'vo2' },
        {
          t: 'table',
          head: ['Sport', 'Elite VO2 max (illustrative, mL/kg/min)', 'Why it matters this much'],
          rows: [
            ['Cross-country skiing, elite', 'Often cited among the highest recorded of any sport, commonly 80–96+', 'Near-continuous, whole-body (arms and legs) aerobic effort over long durations'],
            ['Marathon running, elite', 'Commonly cited in the 70–85 range', 'Sustained aerobic effort at close to lactate threshold for 2+ hours'],
            ['Road cycling, elite', 'Commonly cited in the 70–85 range', 'Long, sustained aerobic power output, especially in mountain stages'],
            ['Untrained healthy adult', 'Roughly 35–45, varying by age and sex', 'Baseline for comparison'],
          ],
          caption: 'Figures are illustrative, drawn from the broad ranges commonly reported in exercise-physiology literature across different testing protocols and eras, individual values vary enormously, and VO2 max alone does not fully predict race results, as the next section explains.',
        },
      ],
    },
    {
      id: 'beyond-vo2max',
      title: 'Why VO2 max alone does not win races',
      blocks: [
        {
          t: 'p',
          text: 'A striking, well-documented finding in exercise physiology: elite distance runners with similar VO2 max values can have meaningfully different race times, because two other factors matter just as much, running economy (how efficiently the body uses the oxygen it takes in) and lactate (or "anaerobic") threshold (what percentage of VO2 max can be sustained for a long period without accumulating fatigue-inducing byproducts faster than the body clears them).',
        },
        {
          t: 'cards',
          items: [
            { title: 'VO2 max', body: 'The size of the engine, the absolute ceiling on aerobic power available.' },
            { title: 'Running (or sport) economy', body: 'The fuel efficiency of the engine, how much oxygen is needed to sustain a given pace. A more economical athlete goes further on the same "engine size".' },
            { title: 'Lactate threshold', body: 'How much of the engine\'s capacity can be used continuously without a rapid build-up of fatigue, often the single best predictor of actual endurance race performance, frequently expressed as a percentage of VO2 max (elite marathoners can often sustain roughly 80–90% of VO2 max for the full race).' },
          ],
        },
        { t: 'callout', tone: 'fact', title: 'A famous case study', text: 'Exercise physiologists studying elite Kenyan and Ethiopian distance runners have repeatedly found their VO2 max values, while high, are often not dramatically higher than many well-trained non-elite runners\'the research consensus instead points to exceptional running economy and lactate threshold, alongside favourable body composition and years of consistent high-volume training from a young age at altitude, as larger differentiators than raw VO2 max alone.' },
      ],
    },
    {
      id: 'zones',
      title: 'Training zones',
      blocks: [
        { t: 'fit-tool', tool: 'hr' },
        {
          t: 'levels',
          caption: 'A common five-zone model, based on percentage of maximum heart rate, exact boundaries and names vary by coach and sport.',
          items: [
            { name: 'Zone 1: recovery', body: '~50–60% max heart rate. Very easy; used for active recovery between hard sessions.' },
            { name: 'Zone 2: aerobic base', body: '~60–70%. Comfortable, conversational pace; the bulk of elite endurance athletes\' training volume happens here, building aerobic capacity and fat-burning efficiency with low fatigue cost.' },
            { name: 'Zone 3: tempo', body: '~70–80%. "Comfortably hard"; moderately challenging but sustainable for extended periods.' },
            { name: 'Zone 4: threshold', body: '~80–90%, close to lactate threshold. Hard, sustainable for perhaps 20–60 minutes; directly trains the threshold itself.' },
            { name: 'Zone 5: VO2 max / anaerobic', body: '~90–100%+. Very hard, sustainable only for a few minutes at most; directly trains the top end of aerobic capacity.' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Polarised training', text: 'Research on elite endurance athletes\' actual training logs (across running, cycling, rowing and cross-country skiing) repeatedly finds a striking pattern often called "polarised training": roughly 80% of training time spent in easy Zone 1–2 effort, and most of the remaining hard training concentrated in Zone 4–5, with comparatively little time in the "moderately hard" Zone 3, the opposite of what many recreational athletes do by default, who often spend most of their time in an unproductive "too hard to recover well, too easy to build threshold" middle zone.' },
      ],
    },
  ],
  sources: [
    'Bassett, D. R., & Howley, E. T. (2000). Limiting factors for maximum oxygen uptake and determinants of endurance performance. *Medicine & Science in Sports & Exercise*, 32(1), 70–84.',
    'Jones, A. M. (2006). The physiology of the world record holder for the women\'s marathon. *International Journal of Sports Science & Coaching*, 1(2), 101–116.',
    'Seiler, S. (2010). What is best practice for training intensity and duration distribution in endurance athletes? *International Journal of Sports Physiology and Performance*, 5(3), 276–291.',
  ],
  related: ['fitness/running/physiology', 'sports/physiology/energy-systems', 'sports/physiology/fatigue-recovery'],
}

export default guide
