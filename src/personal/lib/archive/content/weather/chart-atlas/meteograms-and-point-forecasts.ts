import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A map shows the weather everywhere at one time; a meteogram shows the weather at one place through time. For most people the second question is the practical one: what will it be like at my house tomorrow? A meteogram stacks the variables on a shared time axis, temperature and dew point at the top, rain rate and accumulated rain in the middle, wind and cloud below, so that you can see how they relate: the temperature peak before the afternoon storm, the cool-down as the rain starts, the wind shift when the storm’s cold pool arrives. This guide teaches you to read a meteogram, the signatures of Singapore’s three most typical days on one, and the ensemble version (a plume) that shows how sure the forecast is.',
  nutshell: [
    'A **meteogram** is a time series of weather at **one location**: temperature, dew point, rain, wind, pressure and cloud.',
    'Look at the **relationships**: temperature climbing to a peak, a rain burst, then a **drop of 4 to 6 °C** as the storm’s cold pool arrives.',
    'The **dew point** barely changes in tropical weather (24 to 25 °C): it is the temperature and the wind that move.',
    'Three Singapore days: the **afternoon thunderstorm**, the **monsoon surge** (steady rain, strong north-easterly) and the **Sumatra squall** before dawn.',
    'An **ensemble meteogram (plume)** shows many forecasts at once: a wide plume means low confidence; compare the median with the spread.',
  ],
  sections: [
    {
      id: 'lab',
      title: 'Three days in Singapore',
      lead: 'The meteogram lab.',
      blocks: [
        { t: 'wx-chart', viz: 'meteogram' },
        {
          t: 'table',
          head: ['Day', 'Temperature', 'Rain', 'Wind', 'What to notice'],
          rows: [
            ['Afternoon thunderstorm', 'Climbs from 25 to 32 °C by 2 pm, then falls about 5 °C within an hour', 'A burst of 30 to 40 mm/h for under an hour in the late afternoon', 'Light and variable, then a gust of 15 to 20 kt as the storm arrives', 'The temperature drop and the gust mark the cold pool'],
            ['Monsoon surge', 'Hardly varies (25 to 27 °C); cloudy all day', 'Steady rain of 3 to 8 mm/h for many hours', 'North-easterly 15 to 20 kt all day', 'A cool, damp, cloudy day with low diurnal range'],
            ['Sumatra squall', 'Falls to 23 or 24 °C in the early morning', 'A short burst of 20 mm/h around dawn', 'A gust from the south-west of 20 kt or more', 'The temperature falls then recovers; dry afternoon'],
          ],
          caption: 'Synthetic examples that illustrate typical signatures; real days vary.',
        },
      ],
    },
    {
      id: 'read',
      title: 'How to read one',
      lead: 'Five questions for any meteogram.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'What is the time zone?', body: 'Many global meteograms are in UTC: add 8 hours for Singapore time.' },
            { title: 'Is the rain in mm per hour or per 3 hours?', body: 'Bars can be rates or accumulations: check the unit. A 5 mm bar for 3 hours is light rain; 5 mm per hour is moderate.' },
            { title: 'How do temperature and rain relate?', body: 'A rain burst that follows a high temperature peak is convective; steady rain with little temperature variation is a surge.' },
            { title: 'Does the wind change at the rain?', body: 'A sudden gust and a shift of direction at the start of rain marks the storm’s outflow.' },
            { title: 'How wide is the plume?', body: 'If the meteogram has ensemble spread, a narrow band means the model members agree.' },
          ],
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'The dew point', tag: 'the humidity clue', body: 'A dew point of 24 to 25 °C is typical in Singapore; a dew point falling below 22 °C means unusually dry air (often with haze or a dry spell).' },
            { title: 'The cold pool', tag: 'storm outflow', body: 'Rain falling through dry air evaporates and cools the air, which descends and spreads out: temperature falls by 4 to 6 °C and the wind gusts.' },
            { title: 'Cloud and sunshine', tag: 'cloud cover bars', body: 'Many meteograms show low, mid and high cloud as bars; the sunshine curve explains why the temperature peaks.' },
            { title: 'Plume (ensemble) meteogram', tag: 'confidence', body: 'The ECMWF-style plume shows each ensemble member’s temperature or rain; the median and the spread give the best guess and the doubt.' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'A habit', text: 'Use the meteogram with the rain radar and the nowcast: the meteogram says when the rain is likely (a window), the radar says where it is now and the nowcast says where it is going in the next two hours.' },
      ],
    },
  ],
  sources: [
    'Meteorological Service Singapore: forecast products and the climate of Singapore (weather.gov.sg).',
    'ECMWF. Charts and meteograms (ensemble plumes) (charts.ecmwf.int).',
    'Ahrens, C. D. & Henson, R. *Meteorology Today*. Cengage.',
  ],
  related: ['weather/chart-atlas/ensembles-and-probability-charts', 'weather/singapore/rain-in-singapore', 'weather/singapore/forecasts-and-warnings'],
}

export default guide
