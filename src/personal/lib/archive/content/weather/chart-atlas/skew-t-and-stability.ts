import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Twice a day, at the same hour around the world, a balloon carrying a radiosonde is released and sends back temperature, humidity and wind from the ground to about 30 km. Plotted on a skew-T log-p diagram, this sounding is the forecaster’s X-ray of the atmosphere: it shows whether the air is stable or unstable, how much moisture there is, where cloud will form, how tall a thunderstorm could grow and how much energy it would have. The key is to lift an imaginary parcel of surface air and ask whether it keeps rising on its own. This guide teaches the diagram, the lapse rates it displays, the lifting condensation level, CAPE and CIN, the stability indices, and gives a live lab with four soundings (a Singapore afternoon, a monsoon surge, a dry spell and a severe-storm day) where you can heat the parcel and watch the instability appear.',
  nutshell: [
    'A **sounding** plots **temperature** (red) and **dew point** (green) against **pressure** on a log axis; temperature lines are **skewed** so that the curves fit the page.',
    'Dry air cools at **9.8 °C/km** (dry adiabatic lapse rate); saturated air at about **4 to 7 °C/km** (moist adiabatic, smaller in the warm tropics); a column cooling faster than the moist rate is **conditionally unstable**.',
    'A lifted surface parcel reaches its **LCL** (cloud base), then the **LFC** (level of free convection), then rises until the **EL** (equilibrium level, cloud top).',
    '**CAPE** (J/kg) is the energy available for convection: under 300 is weak, 1,000 to 2,500 moderate to strong, over 2,500 very strong; the maximum updraft is about \\(\\sqrt{2\\,\\mathrm{CAPE}}\\) (in practice half of that).',
    '**CIN** is the energy barrier to be overcome; **surface heating** and **lifting** (sea-breeze convergence) are what remove it.',
  ],
  sections: [
    {
      id: 'lab',
      title: 'The skew-T lab',
      lead: 'Heat the parcel and watch the instability.',
      blocks: [
        { t: 'wx-chart', viz: 'skew-t' },
        {
          t: 'steps',
          items: [
            { title: 'Find the surface point', body: 'Read the temperature and dew point at the bottom: the gap between them (the dew-point depression) shows how moist the air is.' },
            { title: 'Lift the parcel dry', body: 'Follow the dry adiabat up from the surface temperature until it meets the line of constant mixing ratio from the dew point: this is the LCL, the cloud base.' },
            { title: 'Follow the moist adiabat', body: 'Above the LCL the parcel cools more slowly, because condensation releases heat.' },
            { title: 'Compare with the environment', body: 'Where the parcel is warmer than the red temperature curve, it is buoyant; the area between the curves is CAPE.' },
            { title: 'Look for barriers', body: 'A warm layer (an inversion) above the surface holds the parcel back; the area where the parcel is colder than the environment is CIN.' },
          ],
        },
      ],
    },
    {
      id: 'math',
      title: 'Lapse rates, CAPE and CIN',
      lead: 'The arithmetic behind the lines.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\Gamma_d=\frac{g}{c_p}\approx 9.8\ \text{K/km},\qquad \Gamma_m=\Gamma_d\,\frac{1+\dfrac{L_v r_s}{R_dT}}{1+\dfrac{L_v^{2}r_s\,\varepsilon}{c_pR_dT^{2}}},\qquad \mathrm{CAPE}=R_d\!\int_{p_{EL}}^{p_{LFC}}(T_p-T_e)\,d\ln p`,
          caption: 'The dry and moist adiabatic lapse rates, and CAPE as the integral of the parcel’s temperature excess over the environment.',
          where: [{ sym: 'g,\\ c_p,\\ R_d', def: 'gravity, the specific heat of air at constant pressure (1004 J/kg/K) and the gas constant of dry air (287 J/kg/K)' }, { sym: 'L_v', def: 'the latent heat of vaporisation (2.5 × 10⁶ J/kg)' }, { sym: 'r_s', def: 'the saturation mixing ratio' }, { sym: 'T_p,\\ T_e', def: 'the parcel and environment temperatures' }],
          syntax: [{ sym: '\\Gamma_m<\\Gamma_d', say: 'saturated air cools more slowly when it rises. Effect: a rising cloudy parcel stays warmer than an unsaturated one. Why: condensation releases latent heat, which offsets some of the cooling.' }, { sym: 'R_d\\int(T_p-T_e)\\,d\\ln p', say: 'the work done by buoyancy on the parcel. Effect: more area between the curves means more energy and a stronger updraft. Why: buoyant acceleration is proportional to the temperature excess.' }],
          worked: {
            title: 'From CAPE to updraft speed',
            steps: ['A Singapore-type afternoon sounding gives CAPE ≈ 2,400 J/kg in the lab.', 'The theoretical maximum updraft is w_max = √(2 × CAPE) = √4,800 = 69 m/s.', 'Real updrafts are about half of this (entrainment, precipitation drag): around 30 to 40 m/s.'],
            answer: 'Tropical updrafts of 20 to 40 m/s lift moisture to 15 km in 10 to 15 minutes, explaining the speed with which afternoon thunderstorms grow. High CAPE does not guarantee storms: with large CIN, the parcel needs a push such as heating or the sea-breeze front.',
          },
        },
        {
          t: 'table',
          head: ['CAPE (J/kg)', 'Instability', 'What to expect'],
          rows: [
            ['0 to 300', 'Marginal', 'Shallow showers at most'],
            ['300 to 1,000', 'Weak to moderate', 'Ordinary showers; short thunderstorms'],
            ['1,000 to 2,500', 'Moderate to strong', 'Vigorous thunderstorms; heavy rain'],
            ['2,500 to 4,000', 'Very strong', 'Severe storms with large hail in the right conditions'],
            ['over 4,000', 'Extreme', 'Violent storms; rare outside the mid-latitude plains'],
          ],
          caption: 'Thresholds are rules of thumb from mid-latitude forecasting; tropical storms can be intense with lower CAPE because of the deep, moist column.',
        },
      ],
    },
    {
      id: 'tropics',
      title: 'Reading tropical soundings and indices',
      lead: 'Singapore’s balloon.',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Warm and moist', tag: 'the tropical signature', body: 'A tropical sounding is warm and humid up to 600 hPa, with a surface dew point of 24 to 25 °C; the air is close to saturated, so little lifting brings cloud.' },
            { title: 'A shallow inversion', tag: 'the trade-wind inversion', body: 'Some soundings show a stable layer around 850 to 700 hPa that caps convection; when it is absent, cumulus can grow into cumulonimbus.' },
            { title: 'Weak shear', tag: 'wind profile', body: 'Wind changes little with height in the equatorial region, so storms are short-lived single cells rather than long-lived supercells.' },
            { title: 'Precipitable water', tag: 'moisture content', body: 'The total water vapour in the column is about 50 to 60 mm in Singapore, so even modest storms can produce heavy rain.' },
          ],
        },
        {
          t: 'table',
          head: ['Index', 'Formula idea', 'Reading'],
          rows: [
            ['K-index', 'Temperature at 850 − 500 hPa, plus dew point at 850, minus the dew-point depression at 700', 'Above about 30 means high thunderstorm chance in the tropics'],
            ['Lifted index', 'Environment temperature at 500 hPa minus the lifted parcel temperature', 'Negative means unstable; below −6 very unstable'],
            ['Total totals', 'T850 + Td850 − 2 × T500', 'Above about 50 suggests thunderstorms are likely'],
            ['Precipitable water', 'Integral of the specific humidity', 'High values favour heavy rain'],
          ],
          caption: 'Indices summarise the sounding in one number; they are guides, not substitutes for reading the diagram.',
        },
        { t: 'callout', tone: 'note', title: 'Where the soundings come from', text: 'Upper-air soundings are made from stations around the world at 00 and 12 UTC (about 8 am and 8 pm in Singapore). Singapore’s regular balloons are launched from the Changi area; the data are sent to the global network and used in forecast models. Satellites and aircraft add more observations between the balloons.' },
      ],
    },
  ],
  sources: [
    'Bluestein, H. B. (1992). *Synoptic-Dynamic Meteorology in Midlatitudes*, Vol. 1. Oxford University Press (skew-T diagrams).',
    'Emanuel, K. A. (1994). *Atmospheric Convection*. Oxford University Press (CAPE, moist adiabats).',
    'Wallace, J. M. & Hobbs, P. V. (2006). *Atmospheric Science*. Academic Press.',
    'Meteorological Service Singapore: upper-air observations (weather.gov.sg); WMO Integrated Global Observing System (wmo.int).',
  ],
  related: ['weather/charts-and-forecasts/upper-air-and-soundings', 'weather/atmosphere/stability-and-convection', 'weather/chart-atlas/ensembles-and-probability-charts'],
}

export default guide
