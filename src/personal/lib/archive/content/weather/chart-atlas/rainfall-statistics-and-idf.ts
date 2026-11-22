import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Rain is measured in millimetres, and a millimetre is a litre of water on every square metre. A rainfall chart can show the amount that fell (accumulation), the rate at which it is falling (intensity), or how unusual it was (return period). Flood engineers care about the last: they design drains for the rain that is exceeded on average once in 5, 10 or 50 years, using intensity–duration–frequency (IDF) curves that give the rain rate for each duration and return period. This guide explains the accumulation maps and their colour scales, how radar and rain gauges are combined, what a return period really means (a 1% chance each year is not a once-a-century rain), and gives a live IDF lab.',
  nutshell: [
    '**1 mm of rain = 1 litre per square metre**; a 100 mm day on a 1 km² catchment is **100,000 m³** (100 million litres).',
    '**Intensity** is the rate (mm/h): light under 2.5, moderate 2.5 to 7.6, heavy 7.6 to 50, very heavy above 50 (a common scale); **accumulation** is the depth over a period.',
    'A **return period T** is the average interval between events of a given size: the chance in any one year is **1/T**, and in n years it is \\(1-(1-1/T)^n\\).',
    '**IDF curves** show that **short bursts are much more intense** than long spells: 5-minute intensities can be three to five times the hourly rate.',
    '**Gauges** give accurate point values; **radar** gives the pattern; operational rainfall maps **merge** them.',
  ],
  sections: [
    {
      id: 'lab',
      title: 'The IDF lab',
      lead: 'How heavy is a heavy rain?',
      blocks: [
        { t: 'wx-chart', viz: 'idf' },
        {
          t: 'math',
          tex: String.raw`P(\text{at least one event in } n \text{ years})=1-\Big(1-\frac1T\Big)^{n},\qquad d=\frac{i\,t}{60}`,
          caption: 'The chance of at least one T-year event in n years, and the rain depth d from the intensity i (mm/h) over a duration t (min).',
          where: [{ sym: 'T', def: 'the return period in years' }, { sym: 'n', def: 'the number of years considered' }, { sym: 'i', def: 'the rain intensity (mm/h)' }, { sym: 't', def: 'the duration (min)' }],
          syntax: [{ sym: '1-(1-1/T)^{n}', say: 'the chance that the event occurs at least once. Effect: a 100-year event has a 26% chance in a 30-year mortgage. Why: each year has a 1% chance, and the chances accumulate.' }],
          worked: {
            title: 'A 100-year rain',
            steps: ['Chance in any year: 1/100 = 1%.', 'Chance in 30 years: 1 − 0.99³⁰ = 26%; in 100 years: 63%.', 'In the lab, the 1-hour, 100-year intensity is about 99 mm/h (depth 99 mm); the 5-minute intensity is 315 mm/h (depth 26 mm).'],
            answer: 'A "once in 100 years" rain is not one that will not happen for a century: it can happen in two consecutive years. Design standards are set by balancing the cost of a larger drain against the damage from the rain that exceeds it. The IDF curves in the lab are an illustration of the shape; use the official design values from PUB for real work.',
          },
        },
      ],
    },
    {
      id: 'maps',
      title: 'Accumulation maps and colour scales',
      lead: 'What the colours mean.',
      blocks: [
        {
          t: 'table',
          head: ['Rain intensity (mm/h)', 'Name', 'Colour on many radar rainfall maps', 'Effect'],
          rows: [
            ['under 2.5', 'Light', 'Light blue or green', 'Damp; umbrellas optional'],
            ['2.5 to 7.6', 'Moderate', 'Green to yellow', 'Wet; puddles form'],
            ['7.6 to 50', 'Heavy', 'Yellow to orange', 'Poor visibility; drains fill'],
            ['over 50', 'Very heavy or violent', 'Red to purple', 'Flash-flood risk in urban areas'],
          ],
          caption: 'Thresholds follow the WMO and UK Met Office conventions; Singapore’s heavy-rain warnings use their own thresholds (see the forecasts guide).',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Rain gauges', tag: 'ground truth', body: 'A tipping-bucket gauge counts each 0.2 mm tip. Singapore has a dense network of gauges, so point rainfall is well measured; gauges can miss small storms between sites and are affected by wind.' },
            { title: 'Radar estimates', tag: 'the pattern', body: 'Radar gives a map of rain every few minutes but with errors from the Z–R relation, beam height and clutter.' },
            { title: 'Merged products', tag: 'the best of both', body: 'Radar fields are adjusted by gauges to produce accumulations (1 hour, 3 hours, 24 hours) used for flood warnings and climate studies.' },
            { title: 'Daily totals', tag: 'the record', body: 'Singapore’s highest daily rainfall is reported as about 512 mm (2 December 1978); heavy days of over 100 mm occur in most years.' },
          ],
        },
        {
          t: 'bars',
          title: 'Rain depth for a 100-year event by duration (illustrative curves in the lab)',
          items: [{ label: '5 minutes', value: 26 }, { label: '15 minutes', value: 54 }, { label: '1 hour', value: 99 }, { label: '3 hours', value: 141 }, { label: '24 hours', value: 245 }],
          unit: 'mm',
          min: 0,
          max: 260,
          decimals: 0,
          caption: 'Depth = intensity × duration. The depth grows with duration but far more slowly than duration itself.',
        },
        { t: 'callout', tone: 'note', title: 'Why extremes are getting heavier', text: 'Warmer air holds about 7% more water vapour per degree Celsius (the Clausius–Clapeyron relation) and short-duration extremes in the tropics have been found to increase at the same or a faster rate. This is one reason why drainage design standards are reviewed periodically; see the climate-change guide.' },
      ],
    },
  ],
  sources: [
    'PUB, Singapore’s National Water Agency. *Code of Practice on Surface Water Drainage* (pub.gov.sg).',
    'World Meteorological Organization. *Guide to Hydrological Practices* (WMO-No. 168); *Guide to Instruments and Methods of Observation*, precipitation measurement.',
    'Chow, V. T., Maidment, D. R. & Mays, L. W. (1988). *Applied Hydrology*. McGraw-Hill (IDF curves and return periods).',
    'Meteorological Service Singapore: climate of Singapore, extreme rainfall (weather.gov.sg).',
  ],
  related: ['weather/chart-atlas/radar-and-reflectivity', 'weather/singapore/rain-in-singapore', 'weather/singapore/climate-change-and-singapore'],
}

export default guide
