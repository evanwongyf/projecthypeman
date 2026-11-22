import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Singapore’s weather services publish a set of products that, read together, give an unusually complete picture of what is happening and what is about to: a rain-area radar image that updates every few minutes, a two-hour nowcast for each area of the island, a 24-hour forecast and a four-day outlook, lightning alerts, heat-stress and UV readings, and the air-quality index. Each product answers a different question over a different time horizon. The skill is knowing which to open for the question you have: whether it is raining at my house now, whether the football match will be washed out, whether it is safe to run outdoors, whether there is a flood risk. This guide maps the products, their time horizons and a simple method for combining them. Product names, update intervals and thresholds change, so check the current pages at weather.gov.sg and nea.gov.sg.',
  nutshell: [
    '**Rain-area radar**: where it is raining now and how it has moved over the last hour; updated about every 5 minutes; the best tool for the next **0 to 2 hours**.',
    '**2-hour nowcast**: area-by-area forecast of rain, updated about every 30 minutes; for decisions about the **next 2 hours**.',
    '**24-hour and 4-day forecasts**: the general outlook, with temperature, humidity, wind and the chance of thundery showers; for **planning**.',
    '**Lightning alerts**: warnings when lightning is detected within a few kilometres of a location; for outdoor events and sports.',
    '**Heat stress, UV and PSI**: heat-stress advisories (based on wet-bulb globe temperature), the UV index and the haze index: for **health**.',
  ],
  sections: [
    {
      id: 'map',
      title: 'The products and their time horizons',
      lead: 'Choose the tool for the question.',
      blocks: [
        {
          t: 'table',
          head: ['Product', 'Horizon', 'Update', 'Best for', 'Limitation'],
          rows: [
            ['Rain-area radar', 'Now to +1 h (extrapolation)', 'About every 5 min', 'Is it raining at my location? Is a cell approaching?', 'Cells grow and die; extrapolation fails for new storms'],
            ['2-hour nowcast', 'Next 2 h', 'About every 30 min', 'A short outing, an outdoor meal, a match', 'Area-wide labels (e.g. "light rain") do not describe every street'],
            ['24-hour forecast', 'Today and tonight, in time bands', 'A few times a day', 'The shape of the day: morning, afternoon, night', 'Thundery showers are scattered and short'],
            ['4-day outlook', 'Next 4 days', 'Daily', 'Planning a trip or event', 'Details beyond day 2 are uncertain'],
            ['Lightning alert', 'Now to +30 min', 'Continuous', 'Outdoor sports, construction, events', 'A warning area is a radius, not a certainty'],
            ['Heat stress and UV', 'Hourly and daily', 'Hourly', 'Exercise, outdoor work, children', 'Index categories simplify a continuous range'],
            ['PSI (haze)', '24-hour and hourly', 'Hourly', 'Respiratory health, haze periods', 'Needs separate readings for PM2.5 as well as PSI'],
          ],
          caption: 'A summary of the typical roles of the products; check the services’ pages for current names, intervals and thresholds.',
        },
        { t: 'wx-chart', viz: 'wind-rose' },
      ],
    },
    {
      id: 'combine',
      title: 'A method for combining them',
      lead: 'From the big picture to your street.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Start with the forecast', body: 'The 24-hour forecast tells you the day’s pattern: afternoon thundery showers, a surge of monsoon rain, or a hazy spell.' },
            { title: 'Check the nowcast', body: 'The two-hour nowcast for your area tells you whether rain is expected soon and how heavy.' },
            { title: 'Look at the radar loop', body: 'Watch the last hour: which way are the cells moving, are they growing, are they heading towards your area?' },
            { title: 'Add the lightning alert', body: 'If you are outdoors, a lightning alert overrides everything: go indoors.' },
            { title: 'Think about the surroundings', body: 'Storms in Singapore are small: the wind, the sea-breeze convergence and the cells upwind give you minutes of notice.' },
          ],
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Sumatra squalls', tag: 'early morning', body: 'On a SW-monsoon or inter-monsoon morning, check the radar and satellite west of the island before dawn: a line of storms over the Strait can arrive within hours.' },
            { title: 'Afternoon thunderstorms', tag: 'the usual pattern', body: 'A hot, humid morning with building cumulus is the signal; storms often form first over inland areas and the west.' },
            { title: 'Monsoon surges', tag: 'December to January', body: 'A strong north-easterly and a satellite picture of cloud from the South China Sea give days of warning; rain may last many hours.' },
            { title: 'Hazy days', tag: 'SW monsoon', body: 'Check the PSI and PM2.5 readings; the satellite and the wind direction show whether the smoke is coming from the region.' },
          ],
        },
        { t: 'dodont', do: ['Use two or three sources: nowcast, radar and a lightning alert together', 'Check again as the situation changes: nowcasts are updated every half hour', 'Take shelter before a thunderstorm arrives: lightning can strike several kilometres from the rain'], dont: ['Rely on a single "chance of rain" number for an outdoor event', 'Ignore a lightning alert because the rain has not started', 'Assume the forecast area-wide label applies to your exact location'] },
      ],
    },
  ],
  sources: [
    'Meteorological Service Singapore: weather forecasts, rain areas, lightning and nowcast pages (weather.gov.sg).',
    'National Environment Agency: PSI, heat stress and UV advisories (nea.gov.sg).',
    'PUB, Singapore’s National Water Agency: flood and water-level information (pub.gov.sg).',
    'WMO. *Guidelines for Nowcasting Techniques* (WMO-No. 1198).',
  ],
  related: ['weather/singapore/forecasts-and-warnings', 'weather/chart-atlas/radar-and-reflectivity', 'weather/chart-atlas/meteograms-and-point-forecasts'],
}

export default guide
