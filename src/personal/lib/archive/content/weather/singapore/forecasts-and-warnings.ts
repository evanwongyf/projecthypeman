import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Singapore’s weather service publishes more forecast products than most people use: a nowcast for the next two hours, a 24-hour outlook, a multi-day forecast, radar and satellite images, lightning information, and warnings of heavy rain, strong winds and haze. Choosing the right product for the decision in front of you, and using probabilities properly, makes a big difference. This guide describes the main products and their time scales, how to combine them into a plan, a simple decision rule (the cost–loss model) for acting on a probability forecast, how warnings differ from forecasts, and what to do when a warning is issued.',
  nutshell: [
    'Use **nowcasts and radar** for the next 0 to 2 hours, the **24-hour forecast** for the day, and the **multi-day outlook** for planning; skill falls with lead time.',
    '**Rain radar** shows where it is raining now; **lightning alerts** tell you when to stop outdoor activity; **PSI and PM2.5** show air quality; **heat stress and UV** readings guide exertion.',
    'A **forecast** says what is likely; a **warning** says that dangerous weather is occurring or imminent and calls for action.',
    'The **cost–loss rule**: take protective action if the forecast probability exceeds \\(C/L\\), the ratio of the cost of acting to the loss avoided.',
    'Verify **at the time you act**: check the radar loop before leaving, and re-check if plans last more than an hour.',
  ],
  sections: [
    {
      id: 'products',
      title: 'What is published, and when to use it',
      lead: 'A guide to the products.',
      blocks: [
        {
          t: 'table',
          head: ['Product', 'Lead time', 'Detail', 'Best for'],
          rows: [
            ['Rain-area radar', 'Now to +1 h', 'Shows rain intensity every few minutes; animate to see motion', 'Deciding whether to leave now or wait 20 minutes'],
            ['2-hour nowcast', '0 to 2 h', 'Area-by-area forecast of fair, cloudy, showers, thundery showers; updated frequently', 'Outdoor events, commutes, sports'],
            ['24-hour forecast', 'Today and tonight', 'General weather, temperature range, humidity and winds for the island, with periods of the day', 'Daily planning'],
            ['4-day outlook', 'Up to 4 days', 'Daily summary and a rain probability range; less reliable for individual afternoons', 'Planning events and trips'],
            ['Fortnightly outlook', '1 to 2 weeks', 'Expected wet or dry spells, temperature tendency', 'Agriculture, construction, major events'],
            ['Monthly and seasonal outlooks', 'Weeks to months', 'Odds of above- or below-normal rainfall and temperature', 'Water resources, haze preparedness, energy'],
            ['Lightning observations and alerts', 'Real time', 'Lightning detected near a location', 'Stopping outdoor activity'],
            ['PSI, PM2.5, UV, heat stress', 'Real time and 24 h', 'Hourly and daily air-quality, UV and WBGT readings', 'Outdoor exertion, health protection'],
          ],
          caption: 'Names and update intervals change over time; check the Meteorological Service Singapore (weather.gov.sg), the NEA (nea.gov.sg) and the myENV app for the current list.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Beyond four days', tag: 'caution', body: 'Individual thunderstorms cannot be predicted beyond a few hours. A 4-day rain probability is a statement about the likelihood of showers somewhere on the island, not a promise about your location at 4 pm.' },
            { title: 'Localisation', tag: 'island', body: 'Rain is patchy: it may pour in Jurong and be dry in Tampines. Use the area forecasts and radar to decide for your own location.' },
            { title: 'Apps', tag: 'official first', body: 'Many weather apps use global models that do not resolve local thunderstorms well. For decisions with consequences, use the official Singapore sources and the radar.' },
            { title: 'Official numbers', tag: 'PUB', body: 'For floods, PUB publishes alerts and water level information. For aviation and marine uses there are dedicated forecasts.' },
          ],
        },
      ],
    },
    {
      id: 'decide',
      title: 'Using probabilities: the cost–loss rule',
      lead: 'When should you carry the umbrella?',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{act if } p>\frac{C}{L},\qquad \text{expected expense}=\begin{cases}C & \text{if you act}\\ p\,L & \text{if you do not}\end{cases}`,
          caption: 'The simple cost–loss decision model (Richardson, 1962; Murphy, 1977): protect when the forecast probability exceeds the ratio of protection cost to avoidable loss.',
          where: [{ sym: 'p', def: 'the forecast probability of the adverse event' }, { sym: 'C', def: 'the cost of taking protective action (carrying an umbrella, rescheduling, buying a tent)' }, { sym: 'L', def: 'the loss if the event happens and you did not protect' }],
          syntax: [{ sym: 'p>C/L', say: 'the decision threshold. Effect: cheap protection against a big loss (low C/L) justifies action even at a low probability; costly protection against a modest loss needs a high probability. Why: it compares the certain cost of acting with the expected loss from not acting.' }, { sym: 'pL', say: 'the expected loss if you do nothing. Effect: probability times consequence. Why: expected-value reasoning.' }],
          worked: {
            title: 'Three decisions with the same forecast of 40%',
            steps: ['Umbrella: carrying costs C = 1 (inconvenience), getting soaked loses L = 5: threshold C/L = 0.2. At 40% you carry it.', 'An outdoor wedding photo session: a tent costs 400, rain would ruin 2,000 of value: threshold 0.2. At 40% you book the tent.', 'A lunch outdoors: moving indoors costs C = 8 in lost atmosphere; rain costs L = 10: threshold 0.8. At 40% you stay outside.'],
            answer: 'The same forecast leads to different actions because costs differ. Forecasters give probabilities so that each user can apply their own threshold; "will it rain?" has no single right answer.',
          },
        },
        { t: 'wx-viz', viz: 'brier' },
        { t: 'p', text: 'A rule of thumb for decisions on Singapore days: for events where lightning or rain would be dangerous or costly (open-water swims, outdoor concerts, working at height), act at probabilities of 20 to 30% and rely on nowcast and lightning alerts on the day; for casual plans, act at 60 to 70%. Remember that the forecast probability applies to the chosen area and time window, and that your location may differ from the area average.' },
      ],
    },
    {
      id: 'warn',
      title: 'Forecasts, advisories and warnings',
      lead: 'Different levels of urgency.',
      blocks: [
        {
          t: 'table',
          head: ['Type', 'Meaning', 'Typical action'],
          rows: [
            ['Forecast', 'Expected weather and its likelihood', 'Plan; prepare a backup'],
            ['Advisory', 'A condition that may affect health or safety (high UV, high heat stress, unhealthy PSI)', 'Adjust activities; take precautions'],
            ['Alert', 'A hazard is detected near you (lightning, heavy rain moving in)', 'Stop outdoor activity; move to shelter'],
            ['Warning', 'Hazardous weather is occurring or imminent (heavy rain with flood risk, strong winds)', 'Follow instructions; avoid low-lying areas; secure belongings'],
          ],
        },
        {
          t: 'checklist',
          items: [
            'Sign up for the myENV app or follow official channels for alerts.',
            'Know where the nearest sheltered area is on your regular outdoor routes.',
            'In heavy rain, avoid underpasses and basements, and do not walk or drive through floodwater.',
            'In a thunderstorm, stay indoors until 30 minutes after the last thunder.',
            'In a strong wind, move away from trees, scaffolding and signs, and secure loose objects on balconies.',
            'In a medical emergency (including heat stroke), call 995; for police, call 999.',
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Build your own routine', text: 'Before an outdoor plan: check the 24-hour forecast the night before, the radar and nowcast 30 minutes before, and the lightning and heat readings on arrival. Re-check every hour for long events.' },
      ],
    },
  ],
  sources: [
    'Meteorological Service Singapore (weather.gov.sg): forecasts, nowcasts, lightning, rain-area radar and warnings.',
    'National Environment Agency (nea.gov.sg) and PUB (pub.gov.sg): PSI, myENV app and flood alerts.',
    'Murphy, A. H. (1977). The value of climatological, categorical and probabilistic forecasts in the cost-loss ratio situation. *Monthly Weather Review*, 105(7).',
    'Katz, R. W. & Murphy, A. H. (Eds.) (1997). *Economic Value of Weather and Climate Forecasts*. Cambridge University Press.',
    'World Meteorological Organization (2015). *Guidelines on Multi-hazard Impact-based Forecast and Warning Services*.',
  ],
  related: ['weather/charts-and-forecasts/forecast-skill', 'weather/charts-and-forecasts/radar-and-satellite', 'weather/singapore/rain-in-singapore', 'weather/singapore/haze-and-air-quality'],
}

export default guide
