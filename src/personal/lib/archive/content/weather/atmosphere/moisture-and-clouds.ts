import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Water is the atmosphere’s great variable: it makes clouds and rain, it carries the latent heat that fuels storms, and it controls how hot a day feels. This guide explains how humidity is measured (vapour pressure, relative humidity, dew point, mixing ratio), why warmer air holds so much more water (the Clausius–Clapeyron relation, about 6 to 7% per °C), how rising air cools and clouds form, the main cloud types and what each means for the weather, and why Singapore’s air is close to saturated for most of the year.',
  nutshell: [
    '**Relative humidity** is the vapour pressure as a percentage of the saturation vapour pressure; it changes with temperature even when the water content does not. **Dew point** is a direct measure of water content.',
    'Saturation vapour pressure rises exponentially with temperature: about **6 to 7% more water vapour per °C**. At 30 °C air can hold about 30 g of water per cubic metre, at 10 °C about 9 g.',
    '**Clouds form when air is cooled to its dew point**, usually by rising and expanding. Rising air cools at **9.8 °C per km** until saturated, then about 4 to 6 °C per km.',
    'Cloud base is roughly **125 m × (T − Td)**.',
    'Main types: **cumulus** (heaped, fair weather), **cumulonimbus** (storm), **stratus** (layer), **cirrus** (ice, high). Singapore’s dew point of about 24 to 26 °C makes clouds form readily.',
  ],
  sections: [
    {
      id: 'humidity',
      title: 'Measuring humidity',
      lead: 'Four ways to say how moist.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`e_s(T)=6.112\exp\!\Big(\frac{17.67\,T}{T+243.5}\Big)\ \text{hPa},\qquad RH=\frac{e}{e_s(T)}\times100\%,\qquad e_s(T_d)=e`,
          caption: 'The Magnus approximation for saturation vapour pressure (T in °C), relative humidity and the definition of the dew point.',
          where: [{ sym: 'e', def: 'the actual vapour pressure: the partial pressure of water vapour in the air, in hPa' }, { sym: 'e_s(T)', def: 'the saturation vapour pressure at temperature T: the most vapour the air can hold' }, { sym: 'T_d', def: 'the dew point: the temperature at which e equals the saturation value' }],
          syntax: [
            { sym: 'e_s(T)', say: 'the capacity of air for water vapour. Effect: it rises exponentially with temperature: 6.1 hPa at 0 °C, 23.4 at 20 °C, 42.4 at 30 °C, 56.2 at 35 °C. Why: the Clausius–Clapeyron relation: a warmer surface lets more molecules escape as vapour.' },
            { sym: 'RH=e/e_s(T)', say: 'the fraction of capacity in use. Effect: cooling air without changing its water content raises RH, until it reaches 100% at the dew point. Why: \\(e\\) stays the same while \\(e_s\\) falls.' },
            { sym: 'e_s(T_d)=e', say: 'the definition of the dew point: the temperature at which the air would be saturated. Effect: a high dew point means a lot of water in the air. Why: it converts vapour pressure to a temperature that you can feel (above about 24 °C is oppressive).' },
          ],
          worked: {
            title: 'A Singapore afternoon',
            steps: ['T = 31 °C: \\(e_s=6.112\\exp(17.67\\times31/274.5)=6.112\\,e^{1.995}=44.9\\) hPa.', 'RH = 75%: \\(e=0.75\\times44.9=33.7\\) hPa.', 'Dew point: the temperature at which \\(e_s=33.7\\) hPa: about 26.0 °C.', 'Spread \\(T-T_d=5.0\\) °C → cloud base ≈ 125 × 5.0 = 625 m.'],
            answer: 'The air holds about 24 g of water per cubic metre. Only a small amount of lifting or cooling makes cloud, and cloud bases of about 600 m are common on humid afternoons.',
          },
        },
        { t: 'wx-viz', viz: 'dewpoint' },
        {
          t: 'table',
          head: ['Measure', 'Meaning', 'Typical use'],
          rows: [
            ['Relative humidity (RH)', 'Percentage of the maximum vapour the air could hold at its temperature', 'Common in forecasts; varies through the day as T changes'],
            ['Dew point', 'Temperature at which air becomes saturated', 'Best guide to how humid it feels; stable through the day'],
            ['Mixing ratio / specific humidity', 'Grams of water vapour per kilogram of air', 'Conserved when air moves up and down (until condensation)'],
            ['Wet-bulb temperature', 'The lowest temperature reached by evaporating water into the air', 'Heat stress and cooling limits; it lies between the dew point and the temperature'],
          ],
        },
      ],
    },
    {
      id: 'lift',
      title: 'Rising air, cooling and cloud',
      lead: 'Adiabatic processes.',
      blocks: [
        { t: 'p', text: 'A parcel of air that rises moves into lower pressure, expands and does work against its surroundings, and so cools without exchanging heat (an **adiabatic** process). While unsaturated it cools at the **dry adiabatic lapse rate**, \\(\\Gamma_d=g/c_p=9.8\\) °C per kilometre. When it reaches its dew point (the **lifting condensation level**), vapour condenses, releasing latent heat that offsets some of the cooling, and it follows the smaller **moist adiabatic lapse rate** (about 4 to 7 °C per km, smaller in warm air). Air can be lifted by heating from below (convection), by hills (orographic lift), by converging winds or by fronts.' },
        {
          t: 'math',
          tex: String.raw`\Gamma_d=\frac{g}{c_p}=\frac{9.81}{1004}\approx 9.8\ \text{K/km},\qquad z_{\text{LCL}}\approx125\,(T-T_d)\ \text{m}`,
          caption: 'The dry adiabatic lapse rate and the approximate height of the cloud base for rising surface air.',
          where: [{ sym: 'c_p', def: 'the specific heat of air at constant pressure, 1004 J/kg/K' }],
          syntax: [{ sym: 'g/c_p', say: 'the rate at which a rising dry parcel cools. Effect: for every kilometre of ascent the temperature falls about 10 °C. Why: the parcel’s expansion work comes from its internal energy.' }, { sym: '125(T-T_d)', say: 'the height at which cooling at 9.8 K/km while the dew point falls about 1.8 K/km, closes the gap. Effect: the smaller the spread, the lower the cloud base. Why: the temperature falls 8 K/km faster than the dew point, so the spread closes at 8 K/km, or 1 K per 125 m.' }],
          worked: {
            title: 'Fog or high cloud?',
            steps: ['Spread 2 °C: cloud base at 250 m; spread 15 °C (dry desert air): 1,875 m.', 'Singapore afternoon spreads of 4 to 6 °C: cloud bases of 500 to 750 m.'],
            answer: 'Humid tropical air makes low cloud easily; once it rises through the cloud base, the latent heat released makes the cloud even more buoyant, leading to deep convection.',
          },
        },
      ],
    },
    {
      id: 'types',
      title: 'The main cloud types',
      lead: 'What the shape tells you.',
      blocks: [
        {
          t: 'table',
          head: ['Family', 'Types', 'Height (tropics)', 'What it means'],
          rows: [
            ['High (cirro-)', 'Cirrus, cirrostratus, cirrocumulus', '6 to 18 km', 'Ice crystals; cirrus can precede an approaching system; thin cirrus in the tropics comes from storm anvils'],
            ['Middle (alto-)', 'Altostratus, altocumulus', '2 to 7 km', 'Layer cloud; thickening altostratus signals a rain-bearing system'],
            ['Low', 'Stratus, stratocumulus, nimbostratus', 'Below 2 km', 'Overcast, drizzle or steady rain; nimbostratus brings continuous rain (as in the monsoon surge)'],
            ['Vertical', 'Cumulus, towering cumulus, cumulonimbus', 'Base 0.5 km, top up to 16 km', 'Convection; cumulonimbus brings thunderstorms, heavy rain, lightning and gusts'],
          ],
          caption: 'Names combine Latin roots: cirrus (curl), cumulus (heap), stratus (layer), nimbus (rain).',
        },
        { t: 'p', text: 'Rain forms in two ways. In **warm-rain** processes common in the tropics, cloud droplets (about 20 µm across) collide and merge, growing until they fall. In the **ice-crystal** process, supercooled water and ice coexist in cold cloud; ice crystals grow at the expense of the droplets, and fall, melting into rain below. Deep tropical cumulonimbus use both: the heavy rain in a Singapore storm is a mix of these. The most intense downpours come from clouds with strong updrafts, which carry lots of water high and release it quickly.' },
        { t: 'callout', tone: 'tip', title: 'A quick field rule', text: 'A cumulus cloud that is building upward quickly (a cauliflower top with a sharp edge), with a flat, dark base, is a developing storm. When the top flattens into an anvil, the storm has reached the tropopause and is at its mature stage.' },
      ],
    },
  ],
  sources: [
    'Bolton, D. (1980). The computation of equivalent potential temperature. *Monthly Weather Review*, 108(7) (Magnus-type saturation vapour pressure formula).',
    'Ahrens, C. D. & Henson, R. (2022). *Meteorology Today* (13th ed.), chs. 4–5. Cengage.',
    'Rogers, R. R. & Yau, M. K. (1989). *A Short Course in Cloud Physics* (3rd ed.). Pergamon.',
    'World Meteorological Organization (2017). *International Cloud Atlas* (cloudatlas.wmo.int).',
    'Stull, R. (2011). Wet-bulb temperature from relative humidity and air temperature. *Journal of Applied Meteorology and Climatology*, 50(11).',
  ],
  related: ['weather/atmosphere/stability-and-convection', 'weather/singapore/rain-in-singapore', 'weather/singapore/heat-humidity-and-uv', 'weather/charts-and-forecasts/radar-and-satellite'],
}

export default guide
