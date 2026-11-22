import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Wind is air moving from high to low pressure, bent by the Earth’s rotation and slowed by friction. This single idea explains why winds blow along isobars on a weather map, why storms spin, why the trade winds blow from the east, and why sea breezes arrive in the afternoon. It also explains something that matters for Singapore: close to the equator the rotation’s deflection disappears, so familiar rules from mid-latitude weather maps stop working. This guide sets out the forces, the geostrophic wind with a live calculator, the global circulation (Hadley cells and the ITCZ) and local winds.',
  nutshell: [
    '**Pressure-gradient force** pushes air from high to low pressure; **Coriolis force** deflects it to the right in the northern hemisphere and left in the southern; **friction** slows it near the ground.',
    'In **geostrophic balance** the two forces balance and wind blows **along the isobars**, with low pressure on the left in the northern hemisphere. Closer isobars mean stronger wind: \\(v_g=\\frac{1}{\\rho f}\\frac{\\partial p}{\\partial n}\\).',
    'The **Coriolis parameter** \\(f=2\\Omega\\sin\\varphi\\) is nearly zero near the equator, so geostrophic balance fails within about 5° of it; **tropical cyclones cannot form there**.',
    'The **Hadley cell** carries rising air at the equator (the **ITCZ**), poleward aloft, sinking at about 30° and returning as the **trade winds**.',
    '**Sea breezes** and **land breezes** are local circulations driven by the daily heating contrast between land and sea.',
  ],
  sections: [
    {
      id: 'forces',
      title: 'Forces on moving air',
      lead: 'Three that matter.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\frac{d\vec v}{dt}=-\frac1\rho\nabla p-f\,\hat k\times\vec v+\vec F_{\text{fric}},\qquad f=2\Omega\sin\varphi`,
          caption: 'The horizontal momentum equation: acceleration equals the pressure-gradient force, the Coriolis force and friction.',
          where: [{ sym: '\\vec v', def: 'the horizontal wind' }, { sym: '\\rho', def: 'air density (about 1.2 kg/m³ near the ground)' }, { sym: '\\nabla p', def: 'the pressure gradient: how fast pressure changes with distance' }, { sym: '\\Omega', def: 'Earth’s rotation rate, 7.29 × 10⁻⁵ rad/s' }, { sym: '\\varphi', def: 'latitude' }],
          syntax: [
            { sym: '-\\frac1\\rho\\nabla p', say: 'the force per unit mass pointing from high to low pressure. Effect: stronger pressure differences make stronger winds. Why: air is pushed from where pressure is higher to where it is lower.' },
            { sym: 'f\\hat k\\times\\vec v', say: 'the Coriolis force, perpendicular to the motion. Effect: bends moving air to the right in the northern hemisphere. Why: we observe motion from a rotating Earth; it is proportional to speed and to f, which is zero at the equator and largest at the poles.' },
            { sym: 'f=2\\Omega\\sin\\varphi', say: 'the Coriolis parameter. Effect: \\(1\\times10^{-4}\\ \\text{s}^{-1}\\) in mid-latitudes, but only \\(3.3\\times10^{-6}\\ \\text{s}^{-1}\\) at Singapore’s latitude, 30 times smaller. Why: sine of latitude: the vertical component of Earth’s rotation.' },
          ],
          worked: {
            title: 'Coriolis at two latitudes',
            steps: ['Mid-latitudes, 45°: \\(f=2\\times7.29\\times10^{-5}\\times\\sin45°=1.03\\times10^{-4}\\ \\text{s}^{-1}\\).', 'Singapore, 1.3°: \\(f=2\\times7.29\\times10^{-5}\\times\\sin1.3°=3.3\\times10^{-6}\\ \\text{s}^{-1}\\).', 'Ratio: about 31.'],
            answer: 'Near Singapore the Earth’s rotation hardly bends the wind, so pressure differences drive the air nearly straight from high to low, and storms do not spin up into cyclones.',
          },
        },
      ],
    },
    {
      id: 'geo',
      title: 'Geostrophic wind and the isobar rule',
      lead: 'Wind along the isobars.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`v_g=\frac{1}{\rho f}\,\frac{\Delta p}{\Delta n}`,
          caption: 'The geostrophic wind speed: pressure gradient divided by density and the Coriolis parameter.',
          where: [{ sym: '\\Delta p/\\Delta n', def: 'the pressure change over a distance across the isobars (Pa per metre)' }],
          syntax: [{ sym: '\\Delta p/\\Delta n', say: 'how tightly packed the isobars are. Effect: closer isobars mean a larger gradient and stronger wind. Why: a bigger push is balanced by a larger Coriolis force, which needs a higher speed.' }, { sym: '1/(\\rho f)', say: 'a conversion factor that grows as f falls. Effect: for the same gradient, wind speed is larger at low latitudes and goes to infinity at the equator, which means the balance is no longer valid there. Why: with little Coriolis force, a very high speed would be needed to balance the same push.' }],
          worked: {
            title: 'Mid-latitude low',
            steps: ['Isobars 4 hPa apart and 200 km apart: \\(\\Delta p/\\Delta n=400\\ \\text{Pa}/200{,}000\\ \\text{m}=0.002\\) Pa/m.', 'At 45° with \\(f=1.03\\times10^{-4}\\), \\(\\rho=1.2\\): \\(v_g=0.002/(1.2\\times1.03\\times10^{-4})=16.2\\) m/s = 31 knots.', 'If the isobars were 100 km apart the wind would double: 32 m/s (63 kt), a gale.'],
            answer: 'This is the rule used on every synoptic chart: tight isobars, strong winds. On the equator the rule cannot be used.',
          },
        },
        { t: 'wx-viz', viz: 'geostrophic' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Buys Ballot’s law', tag: 'northern hemisphere', body: 'Stand with your back to the wind: low pressure is on your left, high pressure on your right. (Reverse it in the southern hemisphere.)' },
            { title: 'Friction turns the wind', tag: 'near the ground', body: 'Near the surface, friction slows the wind, reduces the Coriolis deflection, and the wind blows across the isobars toward lower pressure (about 10 to 30° over the sea, more over land). Winds spiral in toward a low and out of a high.' },
            { title: 'Gradient wind', tag: 'curved flow', body: 'Around lows and highs, the extra centripetal force changes the balance: wind around a low is slower than geostrophic, around a high faster.' },
            { title: 'Winds in the tropics', tag: 'Singapore', body: 'Close to the equator, winds are set by pressure gradients, sea breezes, convection and the monsoon flow, and are best read from observations and satellite, not isobars.' },
          ],
        },
      ],
    },
    {
      id: 'global',
      title: 'The global circulation',
      lead: 'Hadley, Ferrel and polar cells.',
      blocks: [
        { t: 'p', text: 'Solar heating is strongest at the equator, so air there rises, in a band of cloud and rain called the **Intertropical Convergence Zone (ITCZ)**. It flows poleward at height, cools, and sinks at about 30° latitude, forming the dry subtropical highs (and the world’s great deserts). At the surface it returns to the equator as the **trade winds**, which blow from the north-east in the northern hemisphere and the south-east in the southern, deflected by the Coriolis force. This loop is the **Hadley cell**. A second cell (the Ferrel cell) drives the mid-latitude westerlies and storm tracks, and a polar cell sits above 60°.' },
        {
          t: 'table',
          head: ['Feature', 'Latitude', 'Weather'],
          rows: [
            ['ITCZ (equatorial trough)', '0 to ~10°, moving with the sun', 'Rising air, heavy showers and thunderstorms; light winds (the "doldrums")'],
            ['Trade winds', '~5 to 30°', 'Steady easterly winds; cumulus clouds over the oceans'],
            ['Subtropical highs', '~30°', 'Sinking air, clear skies, deserts'],
            ['Westerlies and storm tracks', '~30 to 60°', 'Travelling depressions and fronts'],
            ['Polar easterlies', '~60 to 90°', 'Cold, dry air'],
          ],
        },
        { t: 'p', text: 'The ITCZ moves north and south with the overhead sun, following it with a lag of one to two months, and this migration, together with the contrast between the heated Asian land mass in summer and cool in winter, drives the **monsoons**, winds that reverse seasonally. Singapore sits just north of the equator, in the zone where the ITCZ passes twice a year, giving two rainier periods around the inter-monsoon months and a pattern shaped by the monsoons.' },
      ],
    },
    {
      id: 'local',
      title: 'Local winds: sea breezes',
      lead: 'The daily cycle.',
      blocks: [
        { t: 'p', text: 'During the day, land heats faster than sea (it has a lower heat capacity and heat does not mix downward), the air over it warms and rises, pressure falls, and cooler air flows in from the sea: the **sea breeze**. It often begins around mid-morning, strengthens to 5 to 8 m/s by the afternoon and fades at night, when the flow reverses (a weaker **land breeze**). Where sea breezes from opposite coasts meet over land they force air upward and create thunderstorms. Singapore’s afternoon storms often form along such convergence lines over the island.' },
        {
          t: 'math',
          tex: String.raw`\Delta p\approx p_0\,\frac{g\,H}{R\,T}\,\frac{\Delta T}{T},\qquad \text{sea breeze speed}\sim\sqrt{g\,\frac{\Delta T}{T}\,H}`,
          caption: 'An order-of-magnitude estimate of the sea-breeze speed from the land–sea temperature contrast ΔT over a layer of depth H.',
          where: [{ sym: '\\Delta T', def: 'the temperature difference between land and sea air (about 3 to 6 K on a sunny day)' }, { sym: 'H', def: 'depth of the heated layer (about 500 to 1,000 m)' }],
          syntax: [{ sym: '\\sqrt{g(\\Delta T/T)H}', say: 'the speed at which a density current moves. Effect: larger temperature contrasts and deeper layers give faster breezes. Why: the speed comes from converting the buoyancy (potential) energy of the cooler air into motion.' }],
          worked: {
            title: 'A sunny afternoon',
            steps: ['ΔT = 4 K, T = 300 K, H = 700 m: \\(\\sqrt{9.8\\times(4/300)\\times700}=\\sqrt{91.5}=9.6\\) m/s as an upper-bound scale.', 'Observed sea-breeze speeds are 3 to 8 m/s because of friction and the changing contrast.'],
            answer: 'The estimate gives the right order of magnitude: a breeze of about 10 to 30 km/h that matters for ventilation, rain-triggering and the dispersal of haze.',
          },
        },
      ],
    },
  ],
  sources: [
    'Holton, J. R. & Hakim, G. J. (2012). *An Introduction to Dynamic Meteorology* (5th ed.). Academic Press.',
    'Wallace, J. M. & Hobbs, P. V. (2006). *Atmospheric Science* (2nd ed.), ch. 7. Academic Press.',
    'Chang, C.-P., Wang, Z. & Hendon, H. (2006). The Asian winter monsoon. In *The Asian Monsoon*, Springer.',
    'Simpson, J. E. (1994). *Sea Breeze and Local Wind*. Cambridge University Press.',
    'Meteorological Service Singapore (weather.gov.sg): winds and the monsoons.',
  ],
  related: ['weather/charts-and-forecasts/reading-surface-charts', 'weather/atmosphere/stability-and-convection', 'weather/singapore/singapore-climate', 'weather/atmosphere/air-masses-and-fronts'],
}

export default guide
