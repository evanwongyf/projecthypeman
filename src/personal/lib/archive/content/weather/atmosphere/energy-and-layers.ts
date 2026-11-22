import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Every weather system is powered by sunlight. The atmosphere is a thin, layered skin of gas, mostly nitrogen and oxygen, heated unevenly by the sun and cooled by radiating heat to space. This guide covers the layers of the atmosphere, the energy balance that sets Earth’s temperature (with the 255 K and 288 K calculation that gives the greenhouse effect), how latitude and the sun’s angle control heating, why the tropics are warm and have no temperature seasons, and what that means for Singapore.',
  nutshell: [
    'The **troposphere** (surface to about 8 km at the poles, 12 km mid-latitudes, 16 to 17 km at the equator) holds most of the air and all the weather; temperature falls with height at about **6.5 °C per km**.',
    'Earth absorbs about **240 W/m²** of sunlight on average and must radiate the same to space: that sets an effective temperature of **255 K (−18 °C)**; the **greenhouse effect** raises the actual mean to **288 K (15 °C)**, about 33 K warmer.',
    'Heating depends on the **sun’s angle**: the tropics receive more per area and for a more even length of day.',
    'Near the equator the sun is high all year, so **temperature varies little**; the seasons are marked by rain and wind (monsoons), not temperature.',
  ],
  sections: [
    {
      id: 'layers',
      title: 'The layers of the atmosphere',
      lead: 'Four layers by temperature.',
      blocks: [
        {
          t: 'table',
          head: ['Layer', 'Height', 'Temperature trend', 'What happens there'],
          rows: [
            ['Troposphere', '0 to ~12 km (to 16–17 km at the equator)', 'Falls with height (~6.5 °C/km)', 'About 80% of the air’s mass and nearly all clouds and weather'],
            ['Stratosphere', '~12 to 50 km', 'Rises with height (ozone absorbs UV)', 'Ozone layer; very stable; jet aircraft cruise at the bottom'],
            ['Mesosphere', '~50 to 85 km', 'Falls again', 'Meteors burn up; coldest place in the atmosphere (about −90 °C)'],
            ['Thermosphere', '85 km up', 'Rises sharply', 'Aurora, International Space Station; very thin air'],
          ],
          caption: 'The boundary between the troposphere and stratosphere is the tropopause. It is highest in the tropics, where strong convection pushes the weather layer up.',
        },
        {
          t: 'math',
          tex: String.raw`p(z)=p_0\,e^{-z/H},\qquad H=\frac{R\,T}{g}\approx 8\ \text{km},\qquad \frac{dp}{dz}=-\rho g`,
          caption: 'The hydrostatic equation and the exponential fall of pressure with height.',
          where: [{ sym: 'p_0', def: 'pressure at the surface, about 1013 hPa at sea level on average' }, { sym: 'H', def: 'the scale height: the height over which pressure falls by a factor e' }, { sym: 'R,\\ T,\\ g', def: 'the gas constant for dry air (287 J/kg/K), the temperature in kelvin and gravity (9.8 m/s²)' }],
          syntax: [
            { sym: 'dp/dz=-\\rho g', say: 'the pressure falls with height because the weight of the air above decreases. Effect: pressure at any level equals the weight of the air column above it. Why: the air is in balance vertically (hydrostatic balance), and it holds to a very good approximation for large-scale weather.' },
            { sym: 'e^{-z/H}', say: 'pressure falls by about 12% per kilometre near the surface (e^(−1/8)). Effect: half of the atmosphere’s mass lies below about 5.5 km. Why: as you go up, air is less compressed, so its density falls with pressure.' },
          ],
          worked: {
            title: 'The height of the 500 hPa level',
            steps: ['\\(500=1013\\,e^{-z/8}\\) → \\(z=8\\ln(1013/500)=8\\times0.706=5.6\\) km.', 'The 850 hPa level: \\(8\\ln(1013/850)=1.4\\) km; the 200 hPa jet level: \\(8\\ln(1013/200)=13\\) km.'],
            answer: 'The standard upper-air charts at 850, 500 and 200 hPa correspond to roughly 1.5, 5.5 and 12 km, which is why meteorologists use pressure instead of height as a vertical coordinate.',
          },
        },
      ],
    },
    {
      id: 'balance',
      title: 'Earth’s energy balance',
      lead: 'What goes in must come out.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\frac{S}{4}(1-\alpha)=\sigma T_e^{4}\ \Rightarrow\ T_e=\Big[\frac{S(1-\alpha)}{4\sigma}\Big]^{1/4},\qquad \Delta T_{\text{greenhouse}}=T_s-T_e`,
          caption: 'The zero-dimensional energy balance: absorbed sunlight equals emitted thermal radiation, giving the effective temperature without an atmosphere’s greenhouse effect.',
          where: [{ sym: 'S', def: 'the solar constant: 1,361 W/m² at the top of the atmosphere' }, { sym: '\\alpha', def: 'albedo: the fraction of sunlight reflected (about 0.30 for Earth)' }, { sym: '\\sigma', def: 'the Stefan–Boltzmann constant, 5.67 × 10⁻⁸ W m⁻² K⁻⁴' }, { sym: 'T_e,\\ T_s', def: 'the effective and the actual surface temperature' }],
          syntax: [
            { sym: 'S/4', say: 'the sunlight spread over the whole sphere. Effect: Earth intercepts sunlight over a disc (area πR²) but has surface 4πR², so average incoming is one quarter of S, 340 W/m². Why: geometry of a sphere.' },
            { sym: '(1-\\alpha)', say: 'the fraction absorbed. Effect: clouds, ice and bright surfaces reflect 30% of sunlight back to space, so 238 W/m² is absorbed. Why: lowering the albedo raises the temperature.' },
            { sym: '\\sigma T^4', say: 'thermal emission rises with the fourth power of temperature. Effect: a small warming increases emission quickly, which stabilises the climate. Why: Stefan–Boltzmann law of black-body radiation.' },
          ],
          worked: {
            title: 'The 33-degree greenhouse effect',
            steps: ['Absorbed: \\(1361/4\\times0.70=238\\) W/m².', '\\(T_e=(238/5.67\\times10^{-8})^{1/4}=255\\) K = −18 °C.', 'Actual global mean surface temperature: about 288 K = 15 °C.', 'Greenhouse warming = 288 − 255 = 33 K.'],
            answer: 'Without greenhouse gases (water vapour, carbon dioxide, methane and others) the Earth would be a frozen planet. The extra warming comes from the atmosphere absorbing outgoing infrared and re-emitting some of it downward.',
          },
        },
        { t: 'p', text: 'The atmosphere has its own balance: of the incoming sunlight, about 30% is reflected, about 20% absorbed in the atmosphere and about 50% absorbed at the surface. The surface then loses heat by infrared radiation, by evaporation (latent heat, about 25% of the incoming energy) and by conduction and convection (about 5%). Latent heat is the main route by which the tropical ocean heats the air above it, and the source of energy for thunderstorms.' },
      ],
    },
    {
      id: 'latitude',
      title: 'Latitude, the sun’s angle and the tropics',
      lead: 'Why the equator is hot and Singapore has no summer.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`Q\propto\cos\theta_z,\qquad \cos\theta_z=\sin\varphi\sin\delta+\cos\varphi\cos\delta\cos h`,
          caption: 'Sunlight per unit area depends on the cosine of the solar zenith angle; the zenith angle depends on latitude φ, the sun’s declination δ and the hour angle h.',
          where: [{ sym: '\\theta_z', def: 'the solar zenith angle: the angle between the sun and the vertical' }, { sym: '\\varphi', def: 'latitude (1.3° N for Singapore)' }, { sym: '\\delta', def: 'solar declination: +23.4° at the June solstice, −23.4° at the December solstice, 0° at equinoxes' }, { sym: 'h', def: 'hour angle: 0 at solar noon, 15° per hour' }],
          syntax: [{ sym: '\\cos\\theta_z', say: 'the share of the beam that hits a horizontal surface. Effect: at zenith angle 0 (sun overhead) the full beam lands on one square metre; at 60° only half does. Why: the same beam is spread over a larger area when it is oblique.' }, { sym: '\\sin\\varphi\\sin\\delta+\\cos\\varphi\\cos\\delta\\cos h', say: 'the geometry of the sun’s position. Effect: at noon, \\(\\theta_z=|\\varphi-\\delta|\\); near the equator this changes little through the year. Why: spherical trigonometry.' }],
          worked: {
            title: 'Noon sun in Singapore and in London',
            steps: ['Singapore (φ = 1.3°): at the March equinox δ = 0 → \\(\\theta_z=1.3°\\), \\(\\cos=0.9997\\). At the June solstice \\(\\theta_z=|1.3-23.4|=22.1°\\), \\(\\cos=0.927\\). At the December solstice \\(\\theta_z=24.7°\\), \\(\\cos=0.908\\).', 'London (φ = 51.5°): June noon \\(\\theta_z=28.1°\\), cos 0.882; December noon \\(\\theta_z=74.9°\\), cos 0.26.'],
            answer: 'Singapore’s noon sunlight per area varies by under 10% between the extremes of the year; London’s varies by a factor of 3.4, hence summer and winter. Day length in Singapore varies by only about 10 minutes through the year.',
          },
        },
        { t: 'cards', cols: 2, items: [
          { title: 'Warm all year', tag: 'equatorial', body: 'Mean temperature near 27 to 28 °C in every month; the daily cycle (about 7 °C between night minimum and afternoon maximum) is larger than the annual cycle (about 1.5 °C).' },
          { title: 'The seasons are in the rain and wind', tag: 'monsoons', body: 'The sun’s overhead position shifts the rain belt (the Intertropical Convergence Zone) north and south through the year and with it the monsoon winds. See the Singapore climate guide.' },
          { title: 'Tall troposphere', tag: 'convection', body: 'Strong heating and moisture let thunderstorms grow up to 16 or 17 km, near the tropopause, and the cold cloud tops are visible on infrared satellite images.' },
          { title: 'Ocean heat reservoir', tag: 'moderating', body: 'The warm seas around Singapore (about 29 to 30 °C) store heat and moisture and reduce temperature extremes; the record high on the island is 37.0 °C and the record low 19.4 °C.' },
        ] },
      ],
    },
  ],
  sources: [
    'Kiehl, J. T. & Trenberth, K. E. (1997). Earth’s annual global mean energy budget. *Bulletin of the American Meteorological Society*, 78(2).',
    'Wallace, J. M. & Hobbs, P. V. (2006). *Atmospheric Science: An Introductory Survey* (2nd ed.), ch. 1 and 4. Academic Press.',
    'Stull, R. (2017). *Practical Meteorology*, chs. 1–2 (www.eoas.ubc.ca/books/Practical_Meteorology).',
    'Meteorological Service Singapore: Climate of Singapore (weather.gov.sg/climate-climate-of-singapore).',
    'Kopp, G. & Lean, J. L. (2011). A new, lower value of total solar irradiance. *Geophysical Research Letters*, 38.',
  ],
  related: ['weather/atmosphere/pressure-and-wind', 'weather/singapore/singapore-climate', 'weather/atmosphere/moisture-and-clouds', 'weather/singapore/climate-change-and-singapore'],
}

export default guide
