import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Wind is the one weather element drawn as an arrow, and a wind chart has its own alphabet: a shaft, half-feathers, full feathers and flags. This guide teaches the alphabet. Wind direction is named for where the wind comes from, so a "northeasterly" blows toward the south-west; speed is read from the feathers in knots (nautical miles per hour); gusts and variable directions have their own codes. A wind rose summarises months or years of wind in one picture: a petal for each direction, as long as it is frequent, stacked by speed. The wind rose of Singapore shows the two monsoons, and the lab below lets you change season and watch the pattern turn.',
  nutshell: [
    'Wind **direction is where the wind comes from**: 270° is a westerly; a barb’s shaft points **toward** that direction.',
    'Each **half feather = 5 kt**, each **full feather = 10 kt**, each **flag (pennant) = 50 kt**; a **circle** means calm.',
    '**1 kt = 0.514 m/s = 1.85 km/h**; the Beaufort scale runs from 0 (calm) to 12 (hurricane force, 64 kt or more).',
    'Aviation reports write wind as **24012G25KT** (from 240° at 12 kt gusting 25) and **250V310** for a varying direction.',
    'A **wind rose** shows the frequency of each direction (16 petals, stacked by speed): Singapore’s shows **north-easterly winds** in the NE monsoon, **south-westerly** in the SW monsoon and variable winds in between.',
  ],
  sections: [
    {
      id: 'barb',
      title: 'Reading a barb',
      lead: 'The shaft, the feathers and the arc.',
      blocks: [
        { t: 'wx-chart', viz: 'wind-barb' },
        {
          t: 'table',
          head: ['Symbol', 'Meaning', 'Example'],
          rows: [
            ['Circle', 'Calm (under about 1 kt)', 'No wind'],
            ['Shaft', 'Points toward the direction the wind comes from', 'Shaft to the west = westerly'],
            ['Half feather', '5 kt', 'One short line = 5 kt'],
            ['Full feather', '10 kt', 'Two full feathers and one half = 25 kt'],
            ['Flag (pennant)', '50 kt', 'One flag and two full feathers = 70 kt'],
            ['Shaded arc', 'Variable direction between two bearings', '250V310 in a METAR'],
          ],
          caption: 'Feathers are drawn on the clockwise side of the shaft in the northern hemisphere charts of most services; some charts draw them on the left in the southern hemisphere.',
        },
      ],
    },
    {
      id: 'units',
      title: 'Units, Beaufort and gusts',
      lead: 'Speed in knots, metres per second, kilometres per hour.',
      blocks: [
        {
          t: 'table',
          head: ['Beaufort', 'Description', 'Speed (kt)', 'Speed (km/h)', 'On the sea and land'],
          rows: [
            ['0', 'Calm', 'under 1', 'under 2', 'Sea like a mirror; smoke rises vertically'],
            ['2', 'Light breeze', '4 to 6', '7 to 11', 'Wind felt on face; leaves rustle'],
            ['3', 'Gentle breeze', '7 to 10', '12 to 19', 'Leaves and twigs in motion'],
            ['4', 'Moderate breeze', '11 to 16', '20 to 28', 'Small branches move; dust raised'],
            ['5', 'Fresh breeze', '17 to 21', '29 to 38', 'Small trees sway; crested wavelets'],
            ['6', 'Strong breeze', '22 to 27', '39 to 49', 'Large branches move; umbrellas difficult'],
            ['7', 'Near gale', '28 to 33', '50 to 61', 'Whole trees in motion; walking is hard'],
            ['8', 'Gale', '34 to 40', '62 to 74', 'Twigs break from trees'],
            ['10', 'Storm', '48 to 55', '88 to 102', 'Trees uprooted; considerable damage'],
            ['12', 'Hurricane force', '64 or more', '118 or more', 'Devastation'],
          ],
          caption: 'The scale was devised by Admiral Francis Beaufort in 1805; speeds are standard 10-metre averages.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Mean wind', tag: '10-minute average', body: 'The reported wind speed is usually an average over the last 10 minutes (2 minutes in some aviation reports).' },
            { title: 'Gust', tag: 'peak over 3 seconds', body: 'A gust is the highest 3-second average in the period: 24012G25KT means a mean of 12 kt gusting to 25 kt.' },
            { title: 'Squall', tag: 'sudden increase', body: 'A sharp rise of at least 16 kt that lasts at least a minute: the signature of a thunderstorm outflow or a Sumatra squall.' },
            { title: 'Variable', tag: 'direction changes', body: 'If the direction varies by 60° or more in light winds it is reported as VRB, or as a range such as 250V310.' },
          ],
        },
      ],
    },
    {
      id: 'rose',
      title: 'The wind rose and Singapore’s monsoons',
      lead: 'A summary of a season.',
      blocks: [
        { t: 'wx-chart', viz: 'wind-rose' },
        {
          t: 'table',
          head: ['Season', 'Prevailing wind', 'Typical speed', 'Weather'],
          rows: [
            ['Northeast monsoon (Dec to early Mar)', 'North to north-east', '10 to 20 km/h; stronger in surges', 'Wet phase (Dec–Jan); the drier phase from Feb'],
            ['Inter-monsoon (Mar–May)', 'Light and variable; sea breezes', 'under 10 km/h', 'Hot; afternoon and evening thunderstorms'],
            ['Southwest monsoon (Jun–Sep)', 'South to south-west', '10 to 20 km/h', 'Sumatra squalls in the early morning; drier on average'],
            ['Inter-monsoon (Oct–Nov)', 'Light and variable, then north-easterly', 'under 10 km/h', 'Frequent afternoon thunderstorms; rainfall rising to November'],
          ],
          caption: 'Seasonal descriptions follow the Meteorological Service Singapore’s climate summary; check its pages for current definitions.',
        },
        { t: 'callout', tone: 'tip', title: 'Reading a rose', text: 'The longest petal is the most frequent direction. A narrow single petal means a steady wind (a monsoon); several similar petals mean variable winds. Petal colours show how often the wind is light or strong: a rose full of the lightest shade is a calm place with sea breezes. Compare the NE-monsoon and SW-monsoon roses to see why haze from fires in Sumatra tends to reach Singapore in the SW monsoon.' },
      ],
    },
  ],
  sources: [
    'World Meteorological Organization. *Guide to Instruments and Methods of Observation* (WMO-No. 8), wind measurement (wmo.int).',
    'WMO. *Manual on Codes* (WMO-No. 306): FM 12 SYNOP and FM 15 METAR conventions for wind.',
    'Meteorological Service Singapore: monsoon seasons and climate of Singapore (weather.gov.sg).',
    'Ahrens, C. D. & Henson, R. *Meteorology Today*. Cengage.',
  ],
  related: ['weather/chart-atlas/isobars-and-synoptic-charts', 'weather/chart-atlas/cloud-cover-and-metar', 'weather/singapore/singapore-climate'],
}

export default guide
