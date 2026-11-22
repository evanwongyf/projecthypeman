import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'Weather is what the atmosphere is doing now and over the next few days; climate is its long-run pattern. Meteorology is the physics, mathematics and observation that explain and forecast it. This shelf starts with the atmosphere itself (energy, pressure, moisture and stability), moves to reading weather charts, radar and forecasts, and then applies it all to Singapore, an equatorial island whose weather is shaped by monsoons, afternoon thunderstorms, heat and the occasional haze.',
  nutshell: [
    'Five ingredients make weather: **temperature, pressure, wind, moisture and stability**. Changes in any one change the others.',
    'The atmosphere is a **heat engine**: the sun heats the tropics more than the poles, and circulation (winds, storms) moves heat poleward.',
    'Charts, satellite and radar show **where** the atmosphere is doing something; models and forecasters decide **what happens next** and how sure to be.',
    '**Singapore** sits at 1.3°N: no seasons in temperature, two monsoons, frequent thunderstorms, no tropical cyclones, and no fronts.',
    'Forecasts are **probabilities**: judging them takes numbers (hit rates, Brier scores), not single hits and misses.',
  ],
  sections: [
    {
      id: 'map',
      title: 'What is on this shelf',
      lead: 'Three groups.',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'The atmosphere', tag: '5 guides', body: '[Energy and layers](@weather/atmosphere/energy-and-layers), [pressure and wind](@weather/atmosphere/pressure-and-wind), [moisture and clouds](@weather/atmosphere/moisture-and-clouds), [stability and thunderstorms](@weather/atmosphere/stability-and-convection), [fronts and cyclones](@weather/atmosphere/air-masses-and-fronts).' },
            { title: 'Charts and forecasts', tag: '5 guides', body: '[Surface charts](@weather/charts-and-forecasts/reading-surface-charts), [upper-air charts and soundings](@weather/charts-and-forecasts/upper-air-and-soundings), [radar and satellite](@weather/charts-and-forecasts/radar-and-satellite), [models and ensembles](@weather/charts-and-forecasts/models-and-ensembles), [forecast skill](@weather/charts-and-forecasts/forecast-skill).' },
            { title: 'Singapore', tag: '7 guides', body: '[Climate](@weather/singapore/singapore-climate), [rain](@weather/singapore/rain-in-singapore), [ENSO, IOD and MJO](@weather/singapore/large-scale-drivers), [heat and UV](@weather/singapore/heat-humidity-and-uv), [haze](@weather/singapore/haze-and-air-quality), [forecasts and warnings](@weather/singapore/forecasts-and-warnings), [climate change](@weather/singapore/climate-change-and-singapore).' },
            { title: 'Related shelves', tag: 'cross-links', body: 'Training in the heat is on the [fitness shelf](@fitness/endurance/training-in-the-heat). The statistics of extremes, such as fat tails and return periods, are the same mathematics as in the [quantitative finance shelf](@finance/quant/returns-and-distributions).' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'Numbers and sources', text: 'Climate figures for Singapore are rounded from published averages (Meteorological Service Singapore, 1991–2020) and vary by station and period. Check weather.gov.sg for current values and official forecasts and warnings; nothing on this shelf is a substitute for them.' },
      ],
    },
    {
      id: 'ideas',
      title: 'Six ideas that explain most weather',
      lead: 'Carry these through.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Uneven heating drives everything', body: 'The sun warms the equator more than the poles; warm air rises, cool air sinks, and winds redistribute heat.' },
            { title: 'Air moves from high to low pressure, and turns', body: 'The pressure-gradient force pushes air; Earth’s rotation (Coriolis) deflects it, except near the equator where the deflection is almost zero.' },
            { title: 'Rising air cools, and cooling air gives up water', body: 'Lifted air expands and cools (about 10 °C per km if dry). Once it reaches its dew point, vapour condenses into cloud and releases heat.' },
            { title: 'Stability decides whether air keeps rising', body: 'If a lifted parcel stays warmer than its surroundings it accelerates upward: thunderstorms. If it is cooler, it sinks back: calm, layered cloud.' },
            { title: 'The atmosphere is chaotic', body: 'Tiny errors in the starting state grow, so detailed forecasts lose skill after about one to two weeks. Ensembles map the uncertainty.' },
            { title: 'Climate is the statistics of weather', body: 'Averages, extremes and the shifts in them. Singapore’s climate is the repeated pattern of monsoons, thunderstorms and sunshine.' },
          ],
        },
        { t: 'wx-viz', viz: 'dewpoint' },
        { t: 'p', text: 'The lab above links temperature and humidity to the dew point and cloud base. Try Singapore-like numbers (31 °C and 75% humidity): the dew point is about 26 °C, so air lifted only a few hundred metres makes cloud, and the afternoon thunderstorm is rarely far away.' },
      ],
    },
  ],
  sources: [
    'Ahrens, C. D. & Henson, R. (2022). *Meteorology Today* (13th ed.). Cengage.',
    'Wallace, J. M. & Hobbs, P. V. (2006). *Atmospheric Science: An Introductory Survey* (2nd ed.). Academic Press.',
    'Stull, R. (2017). *Practical Meteorology: An Algebra-based Survey of Atmospheric Science*. UBC (free at www.eoas.ubc.ca/books/Practical_Meteorology).',
    'Meteorological Service Singapore (weather.gov.sg): climate of Singapore and forecast products.',
  ],
  related: ['weather/atmosphere/energy-and-layers', 'weather/singapore/singapore-climate', 'weather/charts-and-forecasts/reading-surface-charts', 'fitness/endurance/training-in-the-heat'],
}

export default guide
