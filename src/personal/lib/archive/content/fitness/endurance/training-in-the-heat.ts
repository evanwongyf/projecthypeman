import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Singapore’s climate is hot and humid all year, with daily maximum temperatures of about 31 to 33 °C and relative humidity of 70 to 90%. Humidity is the problem: sweat only cools you when it evaporates, and in saturated air it mostly drips off. Training here is therefore as much a matter of managing heat as of managing effort. This guide explains how the body handles heat, how heat acclimatisation works and how long it takes, how to read wet-bulb and WBGT figures, what to do about timing, hydration and sodium, and how to recognise and respond to heat illness.',
  nutshell: [
    'The body cools mainly by **evaporating sweat**. High humidity limits evaporation, so core temperature rises faster for the same effort; **WBGT** (wet-bulb globe temperature) combines humidity, sun and wind into one guide.',
    '**Heat acclimatisation** takes about **10 to 14 days** of regular exposure and produces earlier, greater sweating, lower heart rate and core temperature, and larger plasma volume. Residents are largely acclimatised; visitors are not.',
    'Expect **slower paces** (a few per cent, often more than 5% at midday) and a **higher heart rate** for the same pace; **train by effort and heart rate**, not pace.',
    '**Drink to thirst** plus planned fluids on long sessions; replace sweat sodium when sessions exceed an hour; avoid over-drinking.',
    '**Heat stroke is an emergency** (hot skin, confusion, collapse): cool the body immediately with cold water and ice and call 995.',
  ],
  sections: [
    {
      id: 'physiology',
      title: 'How the body copes with heat',
      lead: 'Heat balance.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`S = M - W \pm R \pm C - E,\qquad E_{\max}\propto(P_{\text{skin}}-P_{\text{air}})\,h_e`,
          caption: 'The heat balance equation: heat stored in the body (S) equals metabolic heat produced (M) minus external work (W), plus or minus heat exchanged by radiation (R) and convection (C), minus evaporative loss (E).',
          where: [{ sym: 'M', def: 'metabolic heat production: about 75% of the energy used in exercise becomes heat' }, { sym: 'E_{\\max}', def: 'the maximum evaporative cooling the air allows' }, { sym: 'P_{\\text{skin}},\\ P_{\\text{air}}', def: 'water vapour pressure at the skin and in the air' }, { sym: 'h_e', def: 'the evaporative heat transfer coefficient (increased by wind)' }],
          syntax: [
            { sym: 'M-W', say: 'heat produced by the work you do. Effect: running hard at 15 km/h produces about 1,000 W of heat in a 70 kg person, ten times the resting rate. Why: muscle is only about 20 to 25% efficient; the rest is heat.' },
            { sym: 'P_{\\text{skin}}-P_{\\text{air}}', say: 'the vapour pressure gradient that drives evaporation. Effect: when the air is already close to saturated (high humidity), the gradient is small and sweat cannot evaporate fast enough, so E is limited even if you sweat a lot. Why: evaporation needs room in the air for more water vapour.' },
            { sym: 'S>0', say: 'positive storage means core temperature rises. Effect: if M exceeds E, body temperature climbs steadily at about 1 °C per 10 to 15 minutes in hard exercise in the heat. Why: the body has a large heat capacity but cannot lose heat fast enough.' },
          ],
          worked: {
            title: 'Why humidity matters more than temperature',
            steps: ['Dry air at 35 °C and 30% humidity: wet-bulb about 22 °C. Sweat evaporates quickly: a runner’s core temperature stabilises.', 'Singapore at 32 °C and 85% humidity: wet-bulb about 29.8 °C, close to skin temperature (about 33 to 35 °C). Evaporation is much slower.', 'In the humid case, the same pace makes core temperature rise much faster and exhaustion arrives sooner.'],
            answer: 'A 32 °C day in Singapore is physiologically harder than a 38 °C dry day. The wet-bulb temperature, not the dry-bulb, is the guide.',
          },
        },
        { t: 'wx-viz', viz: 'heat-stress' },
      ],
    },
    {
      id: 'acc',
      title: 'Acclimatisation',
      lead: 'Training the body to cope.',
      blocks: [
        {
          t: 'table',
          head: ['Adaptation', 'Time course', 'Effect'],
          rows: [
            ['Lower heart rate at a given pace', '3 to 5 days', 'Less cardiovascular strain'],
            ['Increased plasma volume', '3 to 6 days; 4 to 12% rise', 'Better stroke volume and cooling'],
            ['Earlier, higher sweat rate; more dilute sweat', '5 to 10 days', 'More evaporative cooling; sodium conserved'],
            ['Lower core and skin temperature during exercise', '7 to 14 days', 'Greater tolerance and performance'],
            ['Perceived effort falls', '1 to 2 weeks', 'Exercise feels easier'],
          ],
          caption: 'Typical changes with 60 to 100 minutes a day of exercise in the heat for 10 to 14 days (Périard et al., 2015). The adaptations decay within one to three weeks of leaving the heat.',
        },
        { t: 'p', text: 'Residents of Singapore are mostly heat acclimatised, but air-conditioned lives reduce the effect. People who arrive from cooler climates should reduce intensity and volume for the first week, train in the cooler hours and build up over two weeks. An athlete training for a race in a hot place can use **heat training**: sauna after sessions, hot baths (30 minutes at 40 °C) or deliberate sessions in the heat, which can cut heart rate and increase plasma volume, and may also help performance in cool conditions, although this effect is less certain.' },
      ],
    },
    {
      id: 'plan',
      title: 'Planning sessions in Singapore',
      lead: 'Timing, pace, fluids.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Choose the time', body: 'Early morning (before about 8 am) or after 7 pm, when the sun is low. Check the Meteorological Service Singapore’s weather app for the heat stress advisory and WBGT readings, and the NEA PSI for haze.' },
            { title: 'Lower the pace, not the effort', body: 'Run by heart rate or perceived exertion. Expect 15 to 30 seconds per kilometre slower than the same effort in cool weather.' },
            { title: 'Plan for shade and water', body: 'Pick routes with tree cover (park connectors, reservoirs) and water points. Carry a bottle; a soft flask is easy.' },
            { title: 'Dress for evaporation', body: 'Light, loose, light-coloured and breathable. A cap with a sweatband and sunscreen (SPF 30 or higher) for sun; avoid heavy cotton that stays wet.' },
            { title: 'Cool the head and neck', body: 'Water over the head, cold towels and sponges at aid stations all help; ice cubes in a cap are used in elite races.' },
            { title: 'Use indoor sessions for hard intervals', body: 'On very hot or hazy days, move intervals to an air-conditioned gym, treadmill or evening.' },
          ],
        },
        {
          t: 'math',
          tex: String.raw`\text{sweat rate (L/h)}=\frac{m_{\text{pre}}-m_{\text{post}}+V_{\text{drunk}}-V_{\text{urine}}}{t},\qquad \text{aim}\ \Delta m\le2\%\ \text{of body mass}`,
          caption: 'Measuring your sweat rate with a pre- and post-session weigh-in, and a rule for the acceptable fluid deficit.',
          where: [{ sym: 'm_{\\text{pre}},m_{\\text{post}}', def: 'body mass before and after the session, in kilograms (nude or in the same dry clothes)' }, { sym: 'V_{\\text{drunk}}', def: 'fluid consumed in the session, in litres' }, { sym: 't', def: 'duration in hours' }],
          syntax: [{ sym: 'm_{\\text{pre}}-m_{\\text{post}}', say: 'weight lost, which is almost all water (1 kg ≈ 1 L). Effect: add what you drank to find the total sweat loss. Why: the mass lost is the fluid deficit.' }, { sym: '\\Delta m\\le2\\%', say: 'the guide for a tolerable deficit. Effect: for 70 kg that is 1.4 kg. Why: losses above about 2% of body mass impair performance and raise heat strain.' }],
          worked: {
            title: 'A 60-minute run in the morning',
            steps: ['Before: 70.0 kg. After: 69.0 kg. Drunk: 0.4 L. No urine.', 'Sweat rate = (70.0 − 69.0 + 0.4 − 0)/1 = 1.4 L/h.', 'Deficit = 1.0 kg = 1.4% of body mass: acceptable.', 'Sodium lost at about 800 mg per litre: 1.4 × 800 = 1,120 mg an hour.'],
            answer: 'This runner sweats heavily. In a 3-hour session they would lose 4.2 L and 3.4 g of sodium, so they would need a plan to replace much of both. Repeat the test in different weather.',
          },
        },
      ],
    },
    {
      id: 'ill',
      title: 'Heat illness: recognise and respond',
      lead: 'When to stop.',
      blocks: [
        {
          t: 'table',
          head: ['', 'Heat exhaustion', 'Heat stroke (medical emergency)'],
          rows: [
            ['Core temperature', 'Up to about 40 °C', 'Above 40 °C'],
            ['Symptoms', 'Heavy sweating, weakness, headache, nausea, dizziness, fast pulse, cramps, pale clammy skin', 'Confusion, irritability, slurred speech, hot dry or sweaty skin, collapse, seizures, loss of consciousness'],
            ['What to do', 'Stop; move to shade or air conditioning; lie down with legs raised; sip cool fluids; cool with wet cloths and a fan; seek medical help if no improvement within 30 minutes', 'Call 995 immediately. Cool the person right away: immerse in cold water or cover with ice-water towels and ice packs on neck, armpits and groin; do not give fluids if confused'],
          ],
          caption: 'The best treatment for exertional heat stroke is cooling first, transport second. Survival is excellent if core temperature is brought below 40 °C within 30 minutes.',
        },
        { t: 'callout', tone: 'warn', title: 'Risk factors', text: 'Lack of acclimatisation, illness or fever, poor sleep, dehydration, alcohol the night before, certain medications (diuretics, some antidepressants and ADHD drugs), obesity, previous heat illness, and very competitive effort in a race. Do not train through a fever or stomach upset in the heat.' },
      ],
    },
  ],
  sources: [
    'Périard, J. D., Racinais, S. & Sawka, M. N. (2015). Adaptations and mechanisms of human heat acclimation. *Scandinavian Journal of Medicine & Science in Sports*, 25(S1).',
    'Sawka, M. N. et al. (2007). American College of Sports Medicine position stand: exercise and fluid replacement. *Medicine & Science in Sports & Exercise*, 39(2).',
    'Casa, D. J. et al. (2015). National Athletic Trainers’ Association position statement: exertional heat illnesses. *Journal of Athletic Training*, 50(9).',
    'Meteorological Service Singapore (weather.gov.sg): heat stress advisory and WBGT readings; Ministry of Manpower: heat stress measures for outdoor workers.',
    'Ely, M. R. et al. (2007). Impact of weather on marathon-running performance. *Medicine & Science in Sports & Exercise*, 39(3).',
  ],
  related: ['fitness/endurance/fuelling-endurance', 'weather/singapore/heat-humidity-and-uv', 'fitness/fuel', 'fitness/endurance/stamina-plans', 'weather/atmosphere/moisture-and-clouds'],
}

export default guide
