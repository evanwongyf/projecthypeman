import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Why does one humid afternoon pass without a cloud, and another produce a thunderstorm that floods a road within minutes? The answer is stability: whether a parcel of air, once pushed upward, keeps rising or sinks back. This guide develops the parcel method with a live lab, introduces CAPE (convective available potential energy) as the fuel of storms, traces the life cycle of a thunderstorm cell and the multicell and squall-line systems it can become, explains lightning and the safety rules around it, and applies all this to the typical Singapore afternoon storm.',
  nutshell: [
    'A parcel lifted from the surface cools at **9.8 °C/km** (dry) or **about 5 to 6 °C/km** (saturated, in the tropics). If the **environment** cools faster than the parcel, the parcel is warmer and keeps rising: **unstable**.',
    '**CAPE** is the area between the parcel and environment temperature curves: \\(\\text{CAPE}=\\int g\\,\\frac{T_p-T_e}{T_e}\\,dz\\) (J/kg). Values of 1,000 to 3,000 J/kg are typical in tropical thunderstorm environments; the theoretical updraft is \\(\\sqrt{2\\,\\text{CAPE}}\\).',
    'A typical single-cell storm goes through **cumulus, mature and dissipating** stages in 30 to 60 minutes; the rain-cooled downdraft spreads out and can trigger new cells (multicell storms).',
    '**Lightning** results from charge separation by ice particles; the time between flash and thunder estimates distance at **3 seconds per km**.',
    'In Singapore, thunderstorms form on **most afternoons** during the inter-monsoon periods, triggered by sea-breeze convergence over the island.',
  ],
  sections: [
    {
      id: 'parcel',
      title: 'The parcel method',
      lead: 'Lift it and compare.',
      blocks: [
        { t: 'p', text: 'Imagine a small parcel of air given a push upward. It rises, expands and cools adiabatically; the surrounding air at its new height has its own temperature, set by the environment. If the parcel is warmer, and so less dense, than the environment, buoyancy accelerates it upward; if it is colder, it sinks. The environmental lapse rate therefore decides the outcome. If it is steeper than the dry adiabatic rate, the atmosphere is **absolutely unstable**; if it is shallower than the moist rate, **absolutely stable**; in between, **conditionally unstable**: stable for dry air, unstable for saturated air that has been lifted above its condensation level.' },
        { t: 'wx-viz', viz: 'lapse-rate' },
        {
          t: 'table',
          head: ['Environmental lapse rate Γ', 'Stability', 'Weather'],
          rows: [
            ['Γ > 9.8 K/km', 'Absolutely unstable', 'Vigorous convection; very hot ground on clear days'],
            ['5.5 < Γ < 9.8 K/km', 'Conditionally unstable', 'The usual tropical situation: storms if air is lifted to its condensation level'],
            ['Γ < 5.5 K/km', 'Absolutely stable', 'Calm, layer cloud, fog or haze trapped near the ground'],
            ['Temperature rising with height (inversion)', 'Very stable "lid"', 'Traps pollution and haze; suppresses storms until broken'],
          ],
        },
      ],
    },
    {
      id: 'cape',
      title: 'CAPE: the fuel of a storm',
      lead: 'Buoyancy, added up.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{CAPE}=\int_{z_{\text{LFC}}}^{z_{\text{EL}}} g\,\frac{T_{v,p}-T_{v,e}}{T_{v,e}}\,dz,\qquad w_{\max}\approx\sqrt{2\,\text{CAPE}}`,
          caption: 'Convective available potential energy: the work done by buoyancy on a parcel rising from the level of free convection to the equilibrium level, and the theoretical maximum updraft speed.',
          where: [{ sym: 'z_{\\text{LFC}},\\ z_{\\text{EL}}', def: 'the level of free convection (above which the parcel is warmer than its surroundings) and the equilibrium level (where it stops being warmer)' }, { sym: 'T_{v,p},\\ T_{v,e}', def: 'virtual temperature of the parcel and the environment (temperature adjusted for moisture)' }],
          syntax: [
            { sym: 'g\\,(T_p-T_e)/T_e', say: 'the buoyant acceleration. Effect: a parcel 2 K warmer than a 280 K environment accelerates upward at 0.07 m/s². Why: the density contrast, which scales with the fractional temperature difference, times gravity.' },
            { sym: '\\int\\ldots dz', say: 'the sum of the buoyant acceleration over the depth the parcel is warmer. Effect: gives energy per unit mass (J/kg): the kinetic energy available. Why: work is force times distance.' },
            { sym: '\\sqrt{2\\,\\text{CAPE}}', say: 'the speed if all the energy became vertical motion. Effect: 2,000 J/kg gives 63 m/s. Why: kinetic energy \\(\\tfrac12w^2\\) = CAPE. Real updrafts reach about half of this because of entrainment and drag.' },
          ],
          worked: {
            title: 'A tropical afternoon sounding',
            steps: ['A parcel from the surface, 32 °C with a dew point of 25 °C, lifts to cloud base at 880 m, then follows a moist adiabat.', 'Over the roughly 10 km of buoyant depth, the parcel is typically 1 to 3 K warmer than its surroundings. Adding up \\(g\\,(T_p-T_e)/T_e\\) over that depth for a humid tropical sounding gives about 1,500 to 2,500 J/kg.', 'Theoretical updraft: \\(\\sqrt{2\\times2000}=63\\) m/s; observed peak updrafts: 15 to 30 m/s.'],
            answer: 'CAPE measures how much explosive potential exists. Large CAPE without a trigger gives no storm: some lifting (a sea-breeze front, a squall outflow, hot ground) must push the parcel past the level of free convection. CIN (convective inhibition) measures the barrier.',
          },
        },
      ],
    },
    {
      id: 'life',
      title: 'A thunderstorm’s life',
      lead: 'Three stages and what comes after.',
      blocks: [
        {
          t: 'levels',
          caption: 'The life cycle of an ordinary (single-cell) thunderstorm.',
          items: [
            { name: 'Cumulus stage (10 to 15 min)', body: 'A rising updraft builds a towering cumulus; there is no rain yet. Latent heat released in condensation feeds the growth.' },
            { name: 'Mature stage (15 to 30 min)', body: 'Rain and ice particles become heavy enough to fall, dragging air down: a downdraft. The cloud reaches the tropopause and flattens into an anvil. Heavy rain, lightning, gusty winds and sometimes hail.' },
            { name: 'Dissipating stage (20 to 30 min)', body: 'The downdraft takes over and cuts off the warm updraft; the storm weakens to light rain and then fades.' },
          ],
        },
        { t: 'p', text: 'Storms last longer when new cells keep forming. The cold downdraft spreads out at the ground as an **outflow boundary** (gust front); where it meets warm humid air it lifts it and triggers new storms, forming **multicell clusters**. When the wind shear (change of wind with height) is strong and organised, cells align into a **squall line**, with a leading line of intense updrafts and a trailing region of steady rain. **Sumatra squalls** that move across the Strait of Malacca into Singapore, mostly between April and November, are an example: lines of thunderstorms born over Sumatra at night and carried east by the winds.' },
        {
          t: 'table',
          head: ['Type', 'Lifetime', 'Typical in Singapore', 'Hazards'],
          rows: [
            ['Single cell ("pulse") storm', '30 to 60 min', 'Afternoon storms over the island', 'Heavy local rain, lightning, gusts'],
            ['Multicell cluster', 'Several hours', 'Afternoons on days with strong sea-breeze convergence', 'Repeated heavy rain over the same area, flash floods'],
            ['Squall line (e.g. Sumatra squall)', '3 to 8 hours', 'Pre-dawn to morning, Apr to Nov', 'Strong gusts (up to 50 to 80 km/h), heavy rain, lightning'],
            ['Supercell', 'Hours', 'Rare in the equatorial tropics', 'Large hail, tornadoes (rare locally)'],
          ],
        },
      ],
    },
    {
      id: 'lightning',
      title: 'Lightning and safety',
      lead: 'Sound, light and distance.',
      blocks: [
        { t: 'p', text: 'In a thunderstorm, collisions between ice particles (graupel) and ice crystals in the updraft separate electric charge: positive charge accumulates in the upper cloud and negative in the middle, with a smaller positive region near the base. When the electric field exceeds the air’s breakdown strength, a conducting channel forms and a lightning stroke discharges tens of kiloamperes in microseconds, heating the air to about 30,000 K. The sudden expansion creates thunder. Most strokes stay within or between clouds; about a quarter reach the ground. Singapore has one of the highest lightning densities in the world for a city, and thunder is heard on well over 100 days a year.' },
        {
          t: 'math',
          tex: String.raw`d\approx v_s\,\Delta t\approx0.343\,\Delta t\ \text{km},\qquad d\ (\text{km})\approx\frac{\Delta t\ (\text{s})}{3}`,
          caption: 'The distance to a lightning flash from the delay between flash and thunder.',
          where: [{ sym: 'v_s', def: 'the speed of sound in warm air, about 343 m/s (light arrives instantly in comparison)' }, { sym: '\\Delta t', def: 'the delay in seconds between seeing the flash and hearing the thunder' }],
          syntax: [{ sym: '0.343\\,\\Delta t', say: 'the sound travels about a third of a kilometre per second. Effect: a delay of 30 seconds means about 10 km. Why: the light arrives at once, so the delay is all sound travel time.' }],
          worked: {
            title: 'The 30–30 rule',
            steps: ['Delay 15 s → 5 km: take shelter. Delay 6 s → 2 km: the storm is overhead.', 'Rule: if the flash-to-bang delay is 30 seconds or less (about 10 km), go indoors; wait 30 minutes after the last thunder before resuming.'],
            answer: 'Lightning can strike up to 10 to 15 km from the storm centre, even where the sky above is clear. Shelter in a building or a hard-topped vehicle, not under a tree or in open water, a field, a sports pitch or on a bicycle.',
          },
        },
        { t: 'callout', tone: 'warn', title: 'Heed the alerts', text: 'The Meteorological Service Singapore issues lightning alerts for areas when lightning is detected near them, and many outdoor venues (pools, courses, fields) suspend activity under them. Treat them seriously: Singapore has regular lightning injuries each year.' },
      ],
    },
  ],
  sources: [
    'Emanuel, K. A. (1994). *Atmospheric Convection*. Oxford University Press.',
    'Markowski, P. & Richardson, Y. (2010). *Mesoscale Meteorology in Midlatitudes*. Wiley.',
    'Houze, R. A. (2014). *Cloud Dynamics* (2nd ed.). Academic Press.',
    'Williams, E. R. (2005). Lightning and climate: a review. *Atmospheric Research*, 76(1–4).',
    'Meteorological Service Singapore (weather.gov.sg): thunderstorms, lightning alerts and Sumatra squalls.',
  ],
  related: ['weather/atmosphere/moisture-and-clouds', 'weather/singapore/rain-in-singapore', 'weather/charts-and-forecasts/upper-air-and-soundings', 'weather/charts-and-forecasts/radar-and-satellite'],
}

export default guide
