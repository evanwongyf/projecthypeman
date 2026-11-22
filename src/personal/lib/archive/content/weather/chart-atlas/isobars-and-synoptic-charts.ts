import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The surface pressure chart is the oldest weather map and still the first one forecasters read. Its lines of equal pressure, the isobars, draw the highs and lows, and their spacing tells you the wind: close together is windy, far apart is calm. In the mid-latitudes the wind blows nearly along the isobars with low pressure on its left in the northern hemisphere, a balance between the pressure-gradient force and the Coriolis force that gives the geostrophic wind. This guide teaches how to read an isobar chart, how to estimate wind speed from the spacing with a worked calculation, what friction does, why the rule fails in the tropics and what a chart of Singapore’s pressure looks like, with a live isobar chart in which you can change the strength of the systems, the latitude and the hemisphere.',
  nutshell: [
    '**Isobars** join points of equal **mean sea-level pressure**, usually every 4 hPa; **lows (L)** have closed isobars of falling pressure towards the centre, **highs (H)** the reverse.',
    'Close isobars mean a **strong pressure gradient** and **strong wind**; the **geostrophic wind** speed is \\(V_g=\\dfrac{1}{\\rho f}\\left|\\dfrac{\\Delta p}{\\Delta n}\\right|\\).',
    '**Buys Ballot’s law**: in the northern hemisphere, stand with your back to the wind and low pressure is on your **left**; in the southern hemisphere on your right.',
    '**Friction** slows the wind near the ground and turns it about **10 to 30°** across the isobars towards low pressure, so air spirals into lows and out of highs.',
    'Near the **equator** the Coriolis parameter is almost zero: the geostrophic balance fails, pressure differences are tiny (a few hPa), and the chart shows troughs and convergence rather than wind.',
  ],
  sections: [
    {
      id: 'lab',
      title: 'The isobar-chart lab',
      lead: 'Change the highs and lows and watch the wind.',
      blocks: [
        { t: 'wx-chart', viz: 'isobar-map' },
        {
          t: 'steps',
          items: [
            { title: 'Find the highs and lows', body: 'An H sits inside closed isobars of the highest pressure; an L inside closed isobars of the lowest. Note their central values.' },
            { title: 'Read the spacing', body: 'Where the isobars bunch up (for example between a high and a low) the wind is strongest.' },
            { title: 'Find the wind direction', body: 'Follow the isobar; keep the low on your left in the northern hemisphere. With friction, the wind angles inward toward the low.' },
            { title: 'Look for fronts and troughs', body: 'Fronts and troughs sit in kinks of the isobars (V shapes pointing away from the low centre) where the wind changes direction abruptly.' },
            { title: 'Check the time series', body: 'Compare consecutive charts: pressure falling means an approaching low or trough; rising means a high.' },
          ],
        },
      ],
    },
    {
      id: 'geo',
      title: 'The geostrophic wind',
      lead: 'Pressure-gradient force balanced by Coriolis.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`V_g=\frac{1}{\rho f}\left|\frac{\partial p}{\partial n}\right|,\qquad f=2\Omega\sin\varphi,\qquad \Omega=7.292\times10^{-5}\ \text{s}^{-1}`,
          caption: 'The geostrophic wind: the speed at which the Coriolis force balances the pressure-gradient force.',
          where: [{ sym: '\\rho', def: 'air density (about 1.2 kg/m³ near the surface)' }, { sym: 'f', def: 'the Coriolis parameter, which depends on latitude φ' }, { sym: '\\partial p/\\partial n', def: 'the pressure gradient across the isobars (Pa per metre)' }, { sym: '\\Omega', def: 'the Earth’s rotation rate' }],
          syntax: [{ sym: '1/(\\rho f)', say: 'a proportionality that depends on latitude. Effect: for the same pressure gradient the wind is stronger at low latitude. Why: a weaker Coriolis force needs a faster wind to balance the same pressure force.' }],
          worked: {
            title: 'Isobars 4 hPa apart and 200 km apart at 45°N',
            steps: ['Gradient = 400 Pa / 200,000 m = 0.002 Pa/m.', 'f = 2 × 7.292 × 10⁻⁵ × sin 45° = 1.03 × 10⁻⁴ s⁻¹.', 'V_g = 0.002/(1.2 × 1.03 × 10⁻⁴) = 16 m/s = 31 kt (about 58 km/h).'],
            answer: 'Isobars drawn 4 hPa apart and 200 km apart mean a gale-force wind aloft. At the surface, friction reduces the speed by about a quarter to a third (here to about 22 kt) and turns it toward low pressure. The same gradient at 10° latitude would give a geostrophic wind about four times faster, which shows why the idea is unreliable near the equator.',
          },
        },
        {
          t: 'table',
          head: ['Spacing of 4-hPa isobars', 'Gradient', 'Geostrophic wind at 45°', 'Typical weather'],
          rows: [
            ['600 km', '0.7 hPa per 100 km', 'about 11 kt', 'Light winds, fair weather'],
            ['300 km', '1.3 hPa per 100 km', 'about 21 kt', 'Breezy'],
            ['200 km', '2 hPa per 100 km', 'about 31 kt', 'Windy; near-gale at the surface in exposed places'],
            ['100 km', '4 hPa per 100 km', 'about 63 kt', 'Storm-force; a deep depression'],
          ],
          caption: 'Spacings are measured on the chart between neighbouring isobars; at 45° latitude, ρ = 1.2 kg/m³. Surface winds are lighter because of friction.',
        },
      ],
    },
    {
      id: 'tropics',
      title: 'Friction, highs and lows, and the tropics',
      lead: 'Why the rule fails at the equator.',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Friction and the spiral', tag: 'near the ground', body: 'Surface friction slows the wind, which weakens the Coriolis force, so the pressure force wins and the wind turns toward low pressure: air converges into lows (rising, cloudy, wet) and diverges from highs (sinking, clear, dry).' },
            { title: 'Mean sea-level pressure', tag: 'a reduction', body: 'Station pressure is reduced to sea level so that places at different heights can be compared; over high ground the reduction is uncertain.' },
            { title: 'Thickness and upper charts', tag: 'beyond the surface', body: 'Charts of 500 hPa height show the steering flow of weather systems; the thickness between 1000 and 500 hPa measures the mean temperature of the layer.' },
            { title: 'The tropics', tag: 'a different balance', body: 'Within about 5° of the equator f ≈ 0: air flows directly down the pressure gradient, convergence and convection dominate and the chart shows troughs, the ITCZ and cyclonic circulations rather than neat isobars.' },
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Singapore’s pressure',
          text: 'Singapore, at 1.3° N, has a mean sea-level pressure near 1,010 hPa with very little variation: day-to-day changes are usually a few hPa and there is a regular twice-daily rise and fall (the atmospheric tide) of about 1 to 2 hPa. Weather there is read from wind, cloud, radar and satellite far more than from the pressure map. The monsoon surges, however, show up as a strengthening of the pressure gradient across the South China Sea, with a high over East Asia.',
        },
      ],
    },
  ],
  sources: [
    'Holton, J. R. & Hakim, G. J. (2012). *An Introduction to Dynamic Meteorology*. Academic Press (geostrophic balance).',
    'Wallace, J. M. & Hobbs, P. V. (2006). *Atmospheric Science: An Introductory Survey*. Academic Press.',
    'Ahrens, C. D. & Henson, R. *Meteorology Today*. Cengage (isobar charts, Buys Ballot’s law).',
    'Meteorological Service Singapore: climate of Singapore (weather.gov.sg).',
  ],
  related: ['weather/charts-and-forecasts/reading-surface-charts', 'weather/atmosphere/pressure-and-wind', 'weather/chart-atlas/fronts-and-symbols'],
}

export default guide
