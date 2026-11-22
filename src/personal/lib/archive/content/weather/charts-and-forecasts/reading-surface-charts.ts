import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A surface weather chart compresses the state of the lower atmosphere over a region into lines, symbols and numbers. Read properly it shows where the highs and lows are, how strong the winds are, where the fronts lie and what is happening at individual stations. This guide teaches the elements one at a time: how pressure is reduced to sea level and contoured as isobars, what highs and lows mean, how to read wind from isobar spacing, the symbols for fronts, how to decode the station model (with an interactive decoder), and how reading charts changes in the tropics, where isobars say little about the wind.',
  nutshell: [
    '**Isobars** join points of equal sea-level pressure, usually every 4 hPa (2 hPa on some charts). **Close isobars mean strong wind**; wind blows nearly parallel to them outside the tropics.',
    '**Highs** (anticyclones) bring subsiding air, clear skies and light winds; **lows** (cyclones, depressions) bring rising air, cloud and rain. Northern hemisphere wind circulates **clockwise around highs and anticlockwise around lows**.',
    '**Fronts** are drawn as lines with triangles (cold), semicircles (warm) or both (occluded), pointing in the direction of motion.',
    'The **station model** gives temperature, dew point, wind (barbs), cloud cover (filled circle), pressure and more for each observation.',
    'In the **tropics**, pressure differences are small and the Coriolis force is weak, so **wind and streamline charts and satellite imagery** are used in place of isobars.',
  ],
  sections: [
    {
      id: 'isobars',
      title: 'Isobars, highs and lows',
      lead: 'Pressure at sea level.',
      blocks: [
        { t: 'p', text: 'Station pressure depends on altitude, so before contouring, each pressure is **reduced to mean sea level (MSLP)** by adding the weight of the imagined air column between the station and the sea. Contours are then drawn at fixed steps (typically every 4 hPa, labelled with the last two digits, so "08" means 1008 hPa; "96" means 996). The patterns are named: **highs** (closed contours of high pressure), **lows**, **troughs** (elongated lows, where fronts and showers often lie), **ridges** (elongated highs) and **cols** (the saddle between two highs and two lows, with light winds).' },
        {
          t: 'math',
          tex: String.raw`p_{\text{MSL}}=p_{\text{stn}}\exp\!\Big(\frac{g\,z}{R\,\bar T}\Big),\qquad \text{about }1\text{ hPa per }8\text{ m near sea level}`,
          caption: 'The reduction of station pressure to mean sea level, using the mean temperature of the imagined column.',
          where: [{ sym: 'z', def: 'station height above sea level in metres' }, { sym: '\\bar T', def: 'the mean temperature of the column below the station, in kelvin' }, { sym: 'R', def: 'gas constant for dry air, 287 J/kg/K' }],
          syntax: [{ sym: '\\exp(gz/R\\bar T)', say: 'the factor by which pressure increases going down from the station to sea level. Effect: a station at 160 m reads about 20 hPa lower than the sea-level value. Why: the hydrostatic equation integrated downward.' }],
          worked: {
            title: 'Bukit Timah Hill (about 160 m)',
            steps: ['Station pressure 990.0 hPa, mean column temperature 300 K.', '\\(gz/R\\bar T=9.81\\times160/(287\\times300)=0.01823\\); factor \\(e^{0.01823}=1.0184\\).', '\\(p_{\\text{MSL}}=990.0\\times1.0184=1008.2\\) hPa.'],
            answer: 'Without the reduction, hill stations would always look like deep lows. Charts show the sea-level value so that pressure patterns are comparable across terrain.',
          },
        },
        {
          t: 'table',
          head: ['Feature', 'Appearance', 'Weather'],
          rows: [
            ['High (anticyclone)', 'Closed isobars, "H"; wide spacing', 'Descending air, clear or fair weather, light winds; may bring haze and fog under an inversion'],
            ['Low (depression, cyclone)', 'Closed isobars, "L"; closer spacing', 'Rising air, cloud and rain; stronger winds'],
            ['Trough', 'U-shaped or V-shaped isobars pointing away from the low', 'Showers, a line of convergence; fronts lie along troughs'],
            ['Ridge', 'Isobars bulging outward from a high', 'Settled weather'],
            ['Col', 'Saddle between two highs and two lows', 'Light, variable winds; fog or thunderstorms'],
          ],
        },
      ],
    },
    {
      id: 'symbols',
      title: 'Fronts and wind symbols',
      lead: 'Drawing the boundaries.',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Cold front', tag: 'blue triangles', body: 'The triangles point in the direction of movement. Expect a narrow band of showers, a wind shift and falling temperature.' },
            { title: 'Warm front', tag: 'red semicircles', body: 'The semicircles point in the direction of movement. Expect a broad area of layered cloud and steady rain.' },
            { title: 'Occluded front', tag: 'purple', body: 'Alternating triangles and semicircles on the same side; the cold front has overtaken the warm front.' },
            { title: 'Trough or convergence line', tag: 'dashed or heavy line', body: 'Not a temperature boundary but a line of converging winds: the usual feature in the tropics, where thunderstorms line up.' },
          ],
        },
        {
          t: 'table',
          head: ['Barb element', 'Meaning', 'Example'],
          rows: [
            ['Half feather', '5 knots', 'One half barb = 5 kt'],
            ['Full feather', '10 knots', 'Two full feathers = 20 kt'],
            ['Pennant (triangle)', '50 knots', 'A pennant and a full feather = 60 kt'],
            ['Shaft direction', 'Points to where the wind comes from', 'Shaft pointing to the west: a westerly wind'],
            ['Open circle with no shaft', 'Calm', 'Wind speed below 1 to 2 knots'],
          ],
          caption: '1 knot = 1.852 km/h = 0.514 m/s; a 15-knot wind is about 28 km/h.',
        },
      ],
    },
    {
      id: 'station',
      title: 'Decoding the station model',
      lead: 'One observation, drawn.',
      blocks: [
        { t: 'wx-viz', viz: 'station-model' },
        {
          t: 'steps',
          items: [
            { title: 'Circle and cloud cover', body: 'The circle is filled in proportion to the cloud covering the sky, from empty (clear) to fully filled (8 oktas, overcast). A circle with a cross means sky obscured.' },
            { title: 'Wind barb', body: 'The shaft points toward the direction the wind comes from; the feathers give the speed.' },
            { title: 'Temperature and dew point', body: 'Temperature at top left (red), dew point at bottom left (green), in °C on most international charts. A small gap between them means near-saturated air.' },
            { title: 'Pressure', body: 'Top right, three digits: tenths of hPa with the leading 9 or 10 omitted. If the first digit is 5 or more, add 9 in front ("986" → 998.6 hPa); otherwise add 10 ("094" → 1009.4 hPa).' },
            { title: 'Present weather and tendency', body: 'Symbols for rain, showers, thunderstorms and haze; below the pressure, the three-hour tendency (rising or falling) with its amount in tenths of hPa.' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'A quick check', text: 'Whenever the temperature and dew point are within 2 °C, expect fog, low cloud or rain; when the spread is large (over 15 °C), expect dry air and a high cloud base.' },
      ],
    },
    {
      id: 'trop',
      title: 'Charts in the tropics',
      lead: 'Why isobars lose power.',
      blocks: [
        { t: 'p', text: 'Over the equatorial region pressure varies by only a couple of hectopascals across hundreds of kilometres, and a daily semi-diurnal pressure tide of about 1 hPa is as big as the synoptic changes. With the Coriolis force near zero, wind does not follow isobars. For Singapore and the Maritime Continent, forecasters therefore use: **streamline analyses** (lines drawn along the wind direction at 850 hPa and the surface, showing convergence and the monsoon flow); **satellite imagery** (cloud clusters and their motion); **radar**; and **upper-level charts** for wind shear. The Singapore-based ASEAN Specialised Meteorological Centre and the Meteorological Service Singapore publish such charts for the region.' },
        {
          t: 'table',
          head: ['Tool', 'Mid-latitudes', 'Equatorial tropics'],
          rows: [
            ['Isobars', 'Main guide to wind and systems', 'Weak guide; pressure differences small'],
            ['Fronts', 'Organise weather', 'Absent or weak'],
            ['Streamlines and convergence lines', 'Secondary', 'Primary: monsoon trough, shear lines, convergence'],
            ['Satellite and radar loops', 'Complementary', 'Essential: convection is the weather'],
            ['Upper-level winds', 'Jet streams steer systems', 'Wind shear and divergence aloft matter'],
          ],
        },
      ],
    },
  ],
  sources: [
    'World Meteorological Organization (2018). *Manual on Codes, Volume I.1* (station model and synoptic code, FM 12 SYNOP).',
    'Ahrens, C. D. & Henson, R. (2022). *Meteorology Today* (13th ed.), chs. 8–11. Cengage.',
    'Met Office (UK). *Fact Sheet 1: Water in the Atmosphere* and *Weather Map Symbols* (metoffice.gov.uk/weather/learn-about).',
    'Meteorological Service Singapore and ASEAN Specialised Meteorological Centre (asmc.asean.org): regional charts and analyses.',
    'Holton, J. R. & Hakim, G. J. (2012). *An Introduction to Dynamic Meteorology* (5th ed.). Academic Press.',
  ],
  related: ['weather/atmosphere/pressure-and-wind', 'weather/atmosphere/air-masses-and-fronts', 'weather/charts-and-forecasts/radar-and-satellite', 'weather/charts-and-forecasts/upper-air-and-soundings'],
}

export default guide
