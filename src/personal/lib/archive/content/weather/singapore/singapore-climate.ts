import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Singapore’s climate is equatorial: hot and humid all year, wet in every month, with no season of cold, no frost and no tropical cyclone. What changes through the year is the wind and the rain: two monsoons and two shorter inter-monsoon periods give the year its shape. This guide gives the main numbers (temperature, humidity, rainfall), draws the monsoon calendar and the monthly rainfall pattern, explains how the year divides and why, introduces the ideas of climate normals and anomalies with a worked example, and lists the records and what they say. Figures are rounded and approximate; check the Meteorological Service Singapore for current values.',
  nutshell: [
    '**Temperature** is warm all year: mean about 27 to 28 °C, daily maximum 31 to 33 °C, minimum 24 to 26 °C. The annual range of monthly means is only about 1.5 °C; the daily range is about 7 °C.',
    '**Humidity** is high: mean about 80%, from about 60% in the afternoon to 95% before dawn. **Rainfall** is about 2,100 to 2,300 mm a year, on about 160 to 170 rain days.',
    'Calendar: **Northeast Monsoon (Dec to early Mar)**, **inter-monsoon (Mar to May)**, **Southwest Monsoon (Jun to Sep)**, **inter-monsoon (Oct to Nov)**.',
    '**Wettest** months: November to January; **driest**: February, with a secondary lull in June to July. The wet phase of the Northeast Monsoon (Dec to Jan) brings the longest rain.',
    'Climate is described relative to **normals** (30-year averages, currently 1991–2020); an **anomaly** is the difference from normal.',
  ],
  sections: [
    {
      id: 'numbers',
      title: 'The main numbers',
      lead: 'Temperature, humidity and rainfall.',
      blocks: [
        {
          t: 'table',
          head: ['Variable', 'Typical value', 'Notes'],
          rows: [
            ['Mean temperature', '27 to 28 °C', 'Warmest months May to June (about 28.4 °C); coolest December to January (about 26.6 °C)'],
            ['Daily maximum', '31 to 33 °C', 'Reached around 1 to 3 pm; higher on dry, sunny days'],
            ['Daily minimum', '24 to 26 °C', 'Just before dawn; urban areas are warmer than the nature reserves at night'],
            ['Relative humidity', 'About 80% mean', 'Varies from about 60% in the afternoon to over 95% at dawn'],
            ['Rainfall', 'About 2,100 to 2,300 mm a year', 'Compared with London (about 600 mm) and Sydney (about 1,200 mm)'],
            ['Rain days (≥ 1 mm)', 'About 160 to 170 a year', 'Roughly one day in 2 or 3'],
            ['Winds', 'Mostly light (about 5 to 15 km/h)', 'Gusts above 50 km/h occur in squalls; sea-breeze cycle most days'],
            ['Sunshine', 'About 5 to 6 hours a day (about 45 to 50% of possible)', 'Cloud builds through the day'],
            ['Record high / low', '37.0 °C (Tengah, 1983) / 19.4 °C (Changi, 1934)', 'Hottest days are in April to May and during El Niño years'],
            ['Record daily rain', 'About 512 mm (2 December 1978)', 'The wettest day on record; typical heavy-rain days exceed 100 mm'],
          ],
          caption: 'Rounded, based on published Meteorological Service Singapore climatology; exact values depend on the station and the averaging period.',
        },
        {
          t: 'bars',
          title: 'Monthly rainfall at Changi (approximate climatological averages, rounded)',
          unit: 'mm',
          min: 0,
          max: 320,
          decimals: 0,
          items: [
            { label: 'January', value: 220, group: 'Northeast Monsoon' },
            { label: 'February', value: 110 },
            { label: 'March', value: 170, group: 'Inter-monsoon I' },
            { label: 'April', value: 170 },
            { label: 'May', value: 170 },
            { label: 'June', value: 130, group: 'Southwest Monsoon' },
            { label: 'July', value: 145 },
            { label: 'August', value: 140 },
            { label: 'September', value: 135 },
            { label: 'October', value: 170, group: 'Inter-monsoon II' },
            { label: 'November', value: 250 },
            { label: 'December', value: 290, group: 'Northeast Monsoon (wet phase)' },
          ],
          caption: 'Illustrative values that capture the shape (a wet November to January, a drier February and June to September, in-between months of afternoon thunderstorms); the sum is about 2,100 mm. Exact monthly values differ between stations and 30-year periods: Singapore’s rainfall also varies a lot from year to year and from one part of the island to another.',
        },
      ],
    },
    {
      id: 'monsoon',
      title: 'The monsoon calendar',
      lead: 'Four periods.',
      blocks: [
        {
          t: 'table',
          head: ['Period', 'Months', 'Winds', 'Weather'],
          rows: [
            ['Northeast Monsoon', 'Early Dec to mid-Mar', 'North-easterly, 10 to 20 km/h; stronger during cold surges', 'Wet phase (Dec to Jan): widespread, long-lasting afternoon rain, some thunder, cooler (about 24 to 26 °C at night); dry phase (late Jan to Mar): windy, drier and sunnier'],
            ['Inter-monsoon I', 'Mid-Mar to May', 'Light and variable; winds shift from north-easterly to south-easterly', 'Hottest, most humid; frequent afternoon and early evening thunderstorms'],
            ['Southwest Monsoon', 'Jun to Sep', 'South-easterly to south-westerly, 10 to 20 km/h', 'Generally drier; showers and thunderstorms in the early morning, including Sumatra squalls; hazy periods during fire season'],
            ['Inter-monsoon II', 'Oct to Nov', 'Light and variable; winds shift to north-easterly', 'Hot, humid, frequent afternoon thunderstorms, increasing rainfall toward November'],
          ],
          caption: 'The Meteorological Service Singapore’s four-period division. The dates are approximate and change from year to year.',
        },
        { t: 'p', text: 'The monsoons arise because the large land mass of Asia heats and cools more than the surrounding oceans. In the northern winter, cold air builds over Siberia and pushes southeast over the South China Sea as the **Northeast Monsoon**, crossing the equator. In the northern summer, heated land draws air from the southern Indian Ocean and across the Maritime Continent: the **Southwest Monsoon**. The overhead position of the sun, and hence the Intertropical Convergence Zone, passes over Singapore twice a year (March to April and October to November); at those times the winds are weak and convection dominates.' },
        { t: 'callout', tone: 'tip', title: 'Planning by season', text: 'For outdoor events, February to September mornings are generally the driest; December to January afternoons are the wettest; inter-monsoon afternoons (March to May and October to November) have the highest chance of thunderstorms and lightning delays. Always check the 2-hour nowcast on the day.' },
      ],
    },
    {
      id: 'normals',
      title: 'Normals, anomalies and extremes',
      lead: 'How climate is described.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{normal}=\frac1{30}\sum_{y=1991}^{2020}x_y,\qquad \text{anomaly}=x-\text{normal},\qquad z=\frac{x-\bar x}{s}`,
          caption: 'A climatological normal (30-year mean), an anomaly relative to it, and a standardised anomaly in units of the year-to-year standard deviation.',
          where: [{ sym: 'x_y', def: 'the value of the quantity (monthly rainfall, mean temperature) in year y' }, { sym: 's', def: 'the standard deviation of the 30 values' }],
          syntax: [
            { sym: '\\frac1{30}\\sum x_y', say: 'the 30-year mean, the WMO standard "normal" (updated each decade). Effect: it defines "usual". Why: 30 years is long enough to average out much of the year-to-year variability but short enough to track change.' },
            { sym: 'x-\\text{normal}', say: 'the anomaly: how far the observation lies from the usual. Effect: removes the seasonal cycle so that unusual months stand out. Why: a 28 °C month is cool in May and warm in January.' },
            { sym: 'z=(x-\\bar x)/s', say: 'the anomaly in standard deviations. Effect: a z of +2 happens only about 2.3% of the time if the distribution is roughly normal. Why: puts rainfall and temperature on a common scale of "how unusual".' },
          ],
          worked: {
            title: 'A very wet December',
            steps: ['December normal 290 mm, standard deviation 110 mm. A December with 520 mm: anomaly +230 mm (+79%); \\(z=230/110=2.1\\).', 'About 1 in 50 Decembers would be this wet if rainfall were normally distributed; rainfall is skewed, so the real chance is closer to 1 in 30.', 'A record 24-hour fall of 512 mm in December 1978 is well outside this range.'],
            answer: 'Reporting an anomaly together with its z-score tells readers how unusual the month was. Rainfall extremes are better described by return periods: the average interval between events of a given size.',
          },
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Return periods', tag: 'extremes', body: 'A "1-in-50-year" rainfall is one with a 2% chance of being reached or exceeded in any year. Drainage is designed with such values in mind. Heavier storms are becoming more frequent in many places as the climate warms.' },
            { title: 'Station differences', tag: 'local', body: 'Rainfall varies across Singapore: the west and parts of the north-west often receive more than the east in some months, and individual storms are only a few kilometres across, so two stations 10 km apart can differ greatly in a day.' },
            { title: 'Year-to-year variability', tag: 'drivers', body: 'El Niño, La Niña, the Indian Ocean Dipole and the Madden–Julian Oscillation change rain and heat from year to year (see the climate drivers guide).' },
            { title: 'Urban effect', tag: 'heat island', body: 'Dense areas can be several degrees warmer than green areas at night. The long-term warming trend and the urban effect combine.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Meteorological Service Singapore. *Climate of Singapore* and *Climatological Information* (weather.gov.sg/climate-climate-of-singapore).',
    'Chang, C.-P., Wang, Z. & Hendon, H. (2006). The Asian winter monsoon. In *The Asian Monsoon* (Ed. B. Wang). Springer.',
    'Wang, B. (Ed.) (2006). *The Asian Monsoon*. Springer.',
    'World Meteorological Organization (2017). *WMO Guidelines on the Calculation of Climate Normals* (WMO-No. 1203).',
    'Lim, Y. K. & Sheng, Y. (2011). Singapore weather and climate (Meteorological Service Singapore reports; Centre for Climate Research Singapore).',
  ],
  related: ['weather/singapore/rain-in-singapore', 'weather/singapore/large-scale-drivers', 'weather/atmosphere/pressure-and-wind', 'weather/singapore/climate-change-and-singapore'],
}

export default guide
