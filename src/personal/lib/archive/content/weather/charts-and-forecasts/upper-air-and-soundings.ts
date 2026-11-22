import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The weather at the ground is steered and fed by what happens above it. Upper-air charts show the winds and temperatures at constant pressure levels, such as 850 hPa (about 1.5 km), 500 hPa (5.5 km) and 200 hPa (12 km), and soundings, vertical profiles measured by balloons, show how temperature and moisture change with height, which tells you whether storms will grow. This guide explains geopotential height and the thermal wind, the jet streams, how to read a skew-T log-p diagram and use it to find the cloud base, the level of free convection and CAPE, and what a typical tropical sounding over Singapore looks like.',
  nutshell: [
    'Upper-air charts use **pressure as the vertical coordinate**: they show the height of a pressure surface (**geopotential height**), with winds flowing along the contours as in geostrophic balance.',
    'The **thermal wind** says winds increase with height where there is a horizontal temperature gradient; that is why the **jet streams** lie above the strongest temperature contrasts (the mid-latitude fronts).',
    'A **radiosonde** is a balloon-borne instrument that measures pressure, temperature, humidity and wind up to about 30 km; the profile is plotted on a **skew-T log-p diagram**.',
    'On a skew-T, the **dew-point and temperature lines** tell you about moisture; lifting a parcel along dry and moist adiabats shows **CAPE** and **CIN**.',
    'Tropical soundings are **warm, moist and almost moist-adiabatic**; the tropopause is high (16 to 17 km) and cold (about −75 °C); **precipitable water** is 50 to 60 mm.',
  ],
  sections: [
    {
      id: 'charts',
      title: 'Constant-pressure charts',
      lead: 'Height of a pressure level.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\Phi=\int_0^{z}g\,dz',\qquad Z_g=\frac{\Phi}{g_0},\qquad v_g=\frac{g}{f}\,\frac{\partial Z}{\partial n},\qquad \frac{\partial \vec v_g}{\partial \ln p}=-\frac{R}{f}\,\hat k\times\nabla_p T`,
          caption: 'Geopotential and geopotential height, the geostrophic wind from the slope of a pressure surface, and the thermal wind relation.',
          where: [{ sym: 'Z', def: 'the height of the pressure surface in metres' }, { sym: '\\partial Z/\\partial n', def: 'the slope of the pressure surface across the contours' }, { sym: '\\nabla_p T', def: 'the horizontal temperature gradient on a pressure surface' }],
          syntax: [
            { sym: 'v_g=(g/f)\\,\\partial Z/\\partial n', say: 'on a pressure chart, the geostrophic wind is proportional to the slope of the surface. Effect: closer height contours mean stronger wind; and density no longer appears. Why: using pressure as the coordinate simplifies the balance.' },
            { sym: '\\partial \\vec v_g/\\partial\\ln p', say: 'the vertical change in wind. Effect: where there is a horizontal temperature contrast, the wind changes with height; in mid-latitudes where it is warm to the south and cold to the north, westerlies strengthen with height, peaking in the jet stream near the tropopause. Why: warm air is less dense, so pressure falls more slowly with height there, tilting the pressure surfaces.' },
          ],
          worked: {
            title: 'A 500 hPa trough',
            steps: ['Height contours drawn every 60 m. Where contours are 400 km apart at 45°: \\(\\partial Z/\\partial n=60/400{,}000\\); \\(v_g=(9.81/1.03\\times10^{-4})\\times1.5\\times10^{-4}=14.3\\) m/s (28 kt).', 'Where the contours are 200 km apart: 28.6 m/s (56 kt), a jet-stream-like wind.'],
            answer: 'The 500 hPa chart (about 5.5 km) is used to identify waves in the westerlies, troughs bringing storms and ridges bringing fine weather; the 200 hPa chart locates the jets.',
          },
        },
        {
          t: 'table',
          head: ['Level', 'Approx. height', 'Used for'],
          rows: [
            ['925 / 850 hPa', '0.8 to 1.5 km', 'Low-level winds, moisture transport, monsoon flow, temperature advection'],
            ['700 hPa', '3 km', 'Mid-level moisture, vertical motion'],
            ['500 hPa', '5.5 km', 'Steering of systems, troughs and ridges; reference for the "mid-troposphere"'],
            ['300 / 250 hPa', '9 to 10 km', 'Jet streams'],
            ['200 hPa', '12 km', 'Upper-level divergence and tropical outflow; tropical easterly jet in summer'],
          ],
        },
      ],
    },
    {
      id: 'skewt',
      title: 'Reading a skew-T diagram',
      lead: 'A sounding on one page.',
      blocks: [
        { t: 'p', text: 'On a skew-T log-p diagram, pressure runs up the vertical axis (logarithmic, so height is roughly linear), and temperature lines slant upward to the right (skewed). Two curves are plotted from the balloon’s ascent: the **temperature** (right) and the **dew point** (left). Where they come together, the air is nearly saturated, and the gap between them shows dryness. Additional guide lines show the dry adiabats (descending to the right), moist adiabats (curved) and lines of constant mixing ratio. A reader traces a surface parcel up the dry adiabat to the condensation level, then up the moist adiabat, and compares it with the temperature curve.' },
        {
          t: 'table',
          head: ['Feature on the diagram', 'How to find it', 'What it tells you'],
          rows: [
            ['LCL (cloud base)', 'Where the dry adiabat from the surface temperature meets the mixing-ratio line from the surface dew point', 'Height of cumulus bases'],
            ['LFC (level of free convection)', 'Where the lifted parcel first becomes warmer than the environment', 'The lift needed to start a storm'],
            ['EL (equilibrium level)', 'Where the parcel again matches the environment', 'The approximate cloud top'],
            ['CAPE', 'The area between the parcel and environment curves above the LFC', 'Storm energy'],
            ['CIN', 'The area where the parcel is colder than the environment below the LFC', 'The "cap" which suppresses storms'],
            ['Inversion', 'A layer where temperature increases with height', 'A stable lid; traps haze and storms below'],
            ['Freezing level', 'Where the temperature curve crosses 0 °C', 'Where rain forms from melting ice; about 5 km in the tropics'],
          ],
        },
        { t: 'wx-viz', viz: 'lapse-rate' },
      ],
    },
    {
      id: 'trop',
      title: 'A tropical sounding',
      lead: 'What Singapore’s atmosphere looks like from a balloon.',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Warm and moist', tag: 'surface to 5 km', body: 'Surface temperature 27 to 32 °C, dew point 24 to 26 °C, and a moist layer through the lower troposphere: the temperature and dew point curves are close together.' },
            { title: 'Nearly moist-adiabatic', tag: 'lapse rate', body: 'The atmosphere is stable relative to dry air but only weakly stable relative to saturated parcels, so small lifts produce deep convection.' },
            { title: 'High, cold tropopause', tag: '16 to 17 km', body: 'The tropopause is at about 100 hPa with a temperature near −75 °C: the coldest place in the lower atmosphere, so cloud tops reaching it are very cold on infrared images.' },
            { title: 'Weak steering flow', tag: 'low shear', body: 'Winds are light in the monsoon transitions, so storms move slowly and can drop heavy rain on one place; in other months shear organises storms into squalls.' },
          ],
        },
        {
          t: 'math',
          tex: String.raw`\text{PW}=\frac1g\int_{p_{\text{top}}}^{p_{\text{sfc}}}q\,dp\ \ \approx\ \frac{1}{\rho_w}\,\bar q\,\frac{\Delta p}{g}\ \ (\text{mm of liquid water})`,
          caption: 'Precipitable water: the depth of liquid water if all the vapour in a column condensed.',
          where: [{ sym: 'q', def: 'specific humidity (kg of vapour per kg of air)' }, { sym: 'p', def: 'pressure' }],
          syntax: [{ sym: '\\frac1g\\int q\\,dp', say: 'the mass of water vapour in a column. Effect: moist columns hold much more water. Why: the air’s mass in a layer is \\(\\Delta p/g\\); multiplying by q gives the vapour mass per unit area.' }],
          worked: {
            title: 'Tropical against temperate',
            steps: ['A tropical column: 900 hPa of air has a mass of \\(90{,}000/9.8\\approx9{,}200\\) kg per square metre. With a mass-weighted mean specific humidity of about 0.006 kg/kg (moist near the ground, much drier aloft), the vapour mass is about 55 kg/m², which is 55 mm of water.', 'A mid-latitude winter column: mean q ≈ 0.002: PW ≈ 15 to 20 mm.'],
            answer: 'Singapore’s air holds three to four times as much water as a cool-season mid-latitude column. A thunderstorm that converts a large fraction of it into rain in an hour can deliver 50 to 100 mm, and this is why intense tropical downpours are so heavy.',
          },
        },
      ],
    },
  ],
  sources: [
    'Holton, J. R. & Hakim, G. J. (2012). *An Introduction to Dynamic Meteorology* (5th ed.), chs. 3 and 5. Academic Press.',
    'Stull, R. (2017). *Practical Meteorology*, ch. 5 (thermodynamic diagrams). UBC.',
    'University of Wyoming. *Atmospheric soundings* archive (weather.uwyo.edu/upperair/sounding.html): real soundings including Singapore.',
    'Riehl, H. & Malkus, J. S. (1958). On the heat balance in the equatorial trough zone. *Geophysica*, 6.',
    'World Meteorological Organization: radiosonde guidance and the Global Observing System.',
  ],
  related: ['weather/atmosphere/stability-and-convection', 'weather/atmosphere/pressure-and-wind', 'weather/charts-and-forecasts/radar-and-satellite', 'weather/singapore/rain-in-singapore'],
}

export default guide
