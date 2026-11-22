import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Every airport in the world broadcasts its weather in a compact code called a METAR, updated every half hour, and every pilot learns to read it at a glance. It is the most efficient weather chart there is: wind, visibility, present weather, cloud, temperature, dew point and pressure in a single line. Cloud cover is stated in oktas (eighths of the sky), grouped as FEW, SCT, BKN and OVC with the height of the base in hundreds of feet. This guide explains oktas with a small lab, the cloud types and levels, a worked decoding of an illustrative Changi METAR group by group (with a cross-check: the temperature and dew point predict the cloud base), and the structure of the forecast version, the TAF.',
  nutshell: [
    'Cloud cover is reported in **oktas** (eighths): **FEW** 1–2, **SCT** 3–4, **BKN** 5–7, **OVC** 8, followed by the **base height** in hundreds of feet (BKN030 = broken at 3,000 ft).',
    'The **ceiling** is the height of the lowest broken or overcast layer; it matters for aircraft operations.',
    'A METAR reads: **station, time (UTC), wind, visibility, present weather, cloud, temperature/dew point, pressure (QNH)** and often a **trend**.',
    '**Cloud base ≈ 125 m per °C of dew-point depression** (the spread between temperature and dew point), a quick check on a METAR.',
    'A **TAF** is the airport’s forecast in similar code, with **BECMG** (becoming) and **TEMPO** (temporary) change groups.',
  ],
  sections: [
    {
      id: 'oktas',
      title: 'Oktas and cloud types',
      lead: 'How much cloud, and what kind.',
      blocks: [
        { t: 'wx-chart', viz: 'oktas' },
        {
          t: 'table',
          head: ['Level', 'Height (tropics)', 'Cloud types', 'Weather'],
          rows: [
            ['High', '6 to 18 km', 'Cirrus (Ci), cirrostratus (Cs), cirrocumulus (Cc)', 'Wispy ice cloud; a halo around the Sun; anvils of thunderstorms'],
            ['Middle', '2 to 8 km', 'Altocumulus (Ac), altostratus (As)', 'Patchy or sheet cloud; may thicken before rain'],
            ['Low', 'below 2 km', 'Stratus (St), stratocumulus (Sc), cumulus (Cu)', 'Grey layers; fair-weather cumulus; drizzle'],
            ['Vertical', 'surface to 16 km', 'Cumulonimbus (Cb), nimbostratus (Ns)', 'Showers, thunder, hail, steady rain'],
          ],
          caption: 'Levels are approximate and vary with latitude; in the tropics the high cloud base is higher than in the mid-latitudes.',
        },
      ],
    },
    {
      id: 'metar',
      title: 'Decoding a METAR',
      lead: 'One line, many weather elements.',
      blocks: [
        {
          t: 'example',
          title: 'An illustrative Changi report (not a real observation)',
          lines: [
            { label: 'Report', text: 'WSSS 280600Z 09008KT 9999 FEW020 BKN030 32/24 Q1009 TEMPO 3000 TSRA' },
          ],
        },
        {
          t: 'table',
          head: ['Group', 'Meaning', 'Notes'],
          rows: [
            ['WSSS', 'Airport code (ICAO): Singapore Changi', 'Four letters; W is the region, S the country, SS the airport'],
            ['280600Z', 'Day 28 at 06:00 UTC (14:00 Singapore time)', 'Z means UTC; add 8 hours'],
            ['09008KT', 'Wind from 090° (east) at 8 kt', 'KT means knots; gusts would follow as G; variable as 090V150'],
            ['9999', 'Visibility 10 km or more', 'In metres; 9999 is the maximum code'],
            ['FEW020', 'Few clouds (1–2 oktas) with base at 2,000 ft', 'About 600 m'],
            ['BKN030', 'Broken cloud (5–7 oktas) with base at 3,000 ft', 'The ceiling is 3,000 ft (900 m)'],
            ['32/24', 'Temperature 32 °C; dew point 24 °C', 'Negative values begin with M'],
            ['Q1009', 'QNH 1009 hPa', 'Pressure set on an aircraft altimeter to read height above sea level'],
            ['TEMPO 3000 TSRA', 'Temporarily visibility 3,000 m in a thunderstorm with rain', 'A trend forecast for the next two hours; NOSIG would mean no significant change'],
          ],
        },
        {
          t: 'math',
          tex: String.raw`z_{\text{base}}\approx 125\,(T-T_d)\ \text{m}`,
          caption: 'The cloud base of convective cloud from the dew-point depression.',
          where: [{ sym: 'T,\\ T_d', def: 'the surface temperature and dew point in °C' }],
          syntax: [{ sym: '125\\,(T-T_d)', say: 'about 125 metres of base height per degree of spread. Effect: moist air gives low cloud and dry air high cloud. Why: a rising parcel cools at about 8 °C/km faster than the dew point falls (1.8 °C/km), so the two meet 125 m higher for every degree.' }],
          worked: {
            title: 'Checking the METAR',
            steps: ['T − Td = 32 − 24 = 8 °C.', 'Base ≈ 125 × 8 = 1,000 m = 3,300 ft.', 'The METAR reports BKN030 (3,000 ft): consistent.'],
            answer: 'The temperature and dew point on the surface predict the base of convective cloud to within a few hundred feet, which is why the check works. When the reported base is much lower than the estimate, the cloud may be stratus formed by other processes, such as moist air lifted over a sea breeze.',
          },
        },
      ],
    },
    {
      id: 'taf',
      title: 'The TAF: the airport forecast',
      lead: 'The same code, looking ahead.',
      blocks: [
        {
          t: 'table',
          head: ['Element', 'Example', 'Meaning'],
          rows: [
            ['Valid period', '2806/2912', 'From 06 UTC on the 28th to 12 UTC on the 29th'],
            ['Initial conditions', '09008KT 9999 FEW020 BKN030', 'Wind, visibility and cloud as in a METAR'],
            ['BECMG', 'BECMG 2810/2812 18012KT', 'Becoming: a gradual change between 10 and 12 UTC on the 28th'],
            ['TEMPO', 'TEMPO 2808/2811 3000 TSRA FEW018CB', 'Temporary fluctuations lasting under an hour each time, together for less than half the period'],
            ['PROB30 / PROB40', 'PROB30 TEMPO 2812/2814 1500 +TSRA', 'A 30% or 40% chance of an event'],
            ['FM', 'FM291200 VRB05KT', 'From: a rapid change at that time'],
          ],
          caption: 'The example group is illustrative; for the format, see the WMO and ICAO references.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'CB and TCU', tag: 'convective cloud tags', body: 'After a cloud group, CB marks cumulonimbus and TCU towering cumulus: both signal thunderstorm risk.' },
            { title: 'Present weather codes', tag: 'RA, TS, SH, FG, HZ', body: 'RA rain, SH showers, TS thunderstorm, FG fog, BR mist, HZ haze, with + for heavy and − for light: +TSRA is a heavy thunderstorm with rain.' },
            { title: 'CAVOK', tag: 'ceiling and visibility OK', body: 'Visibility 10 km or more, no cloud below 5,000 ft, and no significant weather.' },
            { title: 'Using it', tag: 'beyond aviation', body: 'METARs from Changi and Seletar give an hourly, standardised record of Singapore’s weather: useful to check how a forecast turned out.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'ICAO. Annex 3 to the Convention on International Civil Aviation: *Meteorological Service for International Air Navigation*.',
    'WMO. *Manual on Codes* (WMO-No. 306): FM 15 METAR, FM 51 TAF (wmo.int).',
    'Meteorological Service Singapore: aviation weather products (weather.gov.sg).',
    'UK Met Office. *Meteorological Glossary: cloud, oktas and METAR* (metoffice.gov.uk).',
  ],
  related: ['weather/chart-atlas/wind-barbs-and-roses', 'weather/atmosphere/moisture-and-clouds', 'weather/chart-atlas/skew-t-and-stability'],
}

export default guide
