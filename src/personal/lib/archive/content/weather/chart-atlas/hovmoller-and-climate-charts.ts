import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Weather charts show the state of the atmosphere now; climate charts show how that state differs from the average and how it varies over months and years. This guide covers four of them. The Hovmöller diagram puts longitude on one axis and time on the other, so that a wave or an eastward-moving rain band becomes a slanted stripe: it is how the Madden–Julian Oscillation is displayed. The anomaly map shows the difference from the long-term mean, in a diverging colour scale. The climograph puts temperature and rainfall for the months of the year on one chart. And the index time series (such as the ONI for El Niño and La Niña) reduces a whole ocean to one number. Each has traps, mostly in the colour scale and the baseline, which are described here.',
  nutshell: [
    'A **Hovmöller diagram** has **longitude on x, time on y**: a feature moving east is a slanted stripe whose **slope is its speed**; the **MJO** moves east at about **5 m/s** (about 4° of longitude a day) over the Indian and Pacific oceans.',
    'An **anomaly map** shows value minus **climatological mean**; use a **diverging colour scale** centred on zero (brown/dry, green/wet; blue/cool, red/warm).',
    'A **climograph** shows monthly temperature and rainfall together: Singapore’s is nearly flat in temperature and wet in every month.',
    'The **ONI** (Oceanic Niño Index) is the three-month mean sea-surface temperature anomaly in the Niño 3.4 region: **≥ +0.5 °C El Niño**, **≤ −0.5 °C La Niña**.',
    'Always check the **baseline period** (for example 1991–2020) and the **colour scale limits**: a different baseline or a saturated scale can change the picture.',
  ],
  sections: [
    {
      id: 'hov',
      title: 'The Hovmöller diagram',
      lead: 'Following a wave through time.',
      blocks: [
        { t: 'wx-chart', viz: 'hovmoller' },
        {
          t: 'math',
          tex: String.raw`c=\frac{\Delta\lambda}{\Delta t},\qquad c_{\text{m/s}}=\frac{c_{\text{deg/day}}\times 111{,}000}{86{,}400},\qquad \tau=\frac{360^\circ}{k\,c_{\text{deg/day}}}`,
          caption: 'The phase speed of a feature read from the slope of its stripe, and the repeat period at one place for k waves around the globe.',
          where: [{ sym: '\\Delta\\lambda/\\Delta t', def: 'the change of longitude over the change of time (degrees per day)' }, { sym: 'k', def: 'the zonal wavenumber (the number of wave cycles around the Earth)' }, { sym: '\\tau', def: 'the time between successive wet phases at a fixed longitude' }],
          syntax: [{ sym: 'c_{\\text{deg/day}}\\times111{,}000/86{,}400', say: 'degrees a day converted to metres a second at the equator, where one degree is 111 km. Effect: 4.5° a day is about 5.8 m/s. Why: 4.5 × 111,000 m ÷ 86,400 s.' }],
          worked: {
            title: 'The MJO',
            steps: ['At about 5 m/s a rain band moves (5 × 86,400)/111,000 = 3.9° of longitude a day.', 'At a constant 5 m/s a one-wave pattern (k = 1) would take 360/3.9 = 92 days to circle the globe; the observed 30 to 60 days reflects faster eastward propagation outside the Indo-Pacific warm pool.', 'A wet phase over Singapore therefore returns about every 30 to 60 days.'],
            answer: 'When the MJO’s wet phase is over the Maritime Continent, Singapore’s rain increases; when the dry phase arrives, it eases. Forecasters watch the diagram to anticipate periods of increased or suppressed rain two to four weeks ahead.',
          },
        },
      ],
    },
    {
      id: 'anomaly',
      title: 'Anomaly maps and colour scales',
      lead: 'Difference from normal.',
      blocks: [
        {
          t: 'table',
          head: ['Choice', 'Good practice', 'Trap'],
          rows: [
            ['Baseline', 'A recent 30-year period (such as 1991–2020) stated on the chart', 'A different baseline changes the anomalies; warming trends make older baselines look "colder"'],
            ['Colour scale', 'Diverging and centred on zero; symmetrical limits', 'A rainbow scale invents boundaries and is hard for colour-blind readers; an asymmetric scale exaggerates one sign'],
            ['Units', 'Absolute (°C, mm), percent of normal, or standardised (σ)', 'Percent of normal is misleading in dry areas where the normal is small'],
            ['Saturation', 'Note the limits (for example ±4 °C)', 'Values beyond the limits are all drawn in the same deep colour'],
            ['Smoothing', 'State the averaging (monthly, seasonal)', 'Averaging can hide a short extreme'],
          ],
        },
        {
          t: 'bars',
          title: 'A climograph for Singapore: approximate monthly rainfall at Changi',
          unit: 'mm',
          min: 0,
          max: 320,
          decimals: 0,
          items: [
            { label: 'Jan', value: 220 }, { label: 'Feb', value: 110 }, { label: 'Mar', value: 170 }, { label: 'Apr', value: 170 }, { label: 'May', value: 170 }, { label: 'Jun', value: 130 },
            { label: 'Jul', value: 145 }, { label: 'Aug', value: 140 }, { label: 'Sep', value: 135 }, { label: 'Oct', value: 170 }, { label: 'Nov', value: 250 }, { label: 'Dec', value: 290 },
          ],
          caption: 'Rounded illustrative values (as in the Singapore climate guide); the average temperature varies by only about 2 °C through the year (about 27 to 29 °C), so on a climograph the temperature line is nearly flat while the rainfall bars show the monsoon pattern.',
        },
      ],
    },
    {
      id: 'index',
      title: 'Index charts: ENSO and the others',
      lead: 'An ocean in one number.',
      blocks: [
        {
          t: 'table',
          head: ['Index', 'What it measures', 'Thresholds', 'Typical effect on Singapore'],
          rows: [
            ['ONI (ENSO)', 'Three-month mean sea-surface-temperature anomaly in Niño 3.4 (5°N–5°S, 170°W–120°W)', '≥ +0.5 °C for El Niño; ≤ −0.5 °C for La Niña (for five overlapping seasons)', 'El Niño: tends to be drier and warmer, especially in the second half of the year; La Niña: wetter'],
            ['IOD (DMI)', 'Sea-surface-temperature difference between the western and eastern Indian Ocean', 'Positive above about +0.4 °C; negative below about −0.4 °C', 'A positive IOD often goes with a drier Maritime Continent in the second half of the year'],
            ['MJO (RMM)', 'Two indices describing the eastward-moving tropical rain band, with 8 phases', 'Amplitude above 1 means an active MJO', 'Phases 4 and 5 (convection over the Maritime Continent) tend to increase rain; phases 8, 1 and 2 reduce it'],
            ['AO / NAO (not tropical)', 'Pressure patterns in the mid- and high latitudes', 'Positive and negative phases', 'Affect the strength of cold surges that reach the South China Sea in winter'],
          ],
          caption: 'Relationships with local rainfall are statistical tendencies of modest strength; they shift the odds but rarely decide a single month.',
        },
        { t: 'callout', tone: 'tip', title: 'A caution on a single number', text: 'An index is a summary of a complex field: two El Niño events with the same ONI can have different patterns of ocean warming and different impacts. Use the index as a signal that the odds have shifted, then check the forecasts for the specific season.' },
      ],
    },
  ],
  sources: [
    'Hovmöller, E. (1949). The trough-and-ridge diagram. *Tellus*, 1(2), 62–66.',
    'Madden, R. A. & Julian, P. R. (1971, 1972). Detection of a 40–50 day oscillation in the zonal wind in the tropical Pacific; Description of global-scale circulation cells in the tropics with a 40–50 day period. *Journal of the Atmospheric Sciences*, 28 and 29.',
    'NOAA Climate Prediction Center: ONI and ENSO definitions (cpc.ncep.noaa.gov).',
    'Meteorological Service Singapore: ENSO, IOD and MJO pages (weather.gov.sg).',
  ],
  related: ['weather/singapore/large-scale-drivers', 'weather/singapore/singapore-climate', 'weather/chart-atlas/ensembles-and-probability-charts'],
}

export default guide
