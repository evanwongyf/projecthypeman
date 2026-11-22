import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'In mid-latitude weather, life is organised by air masses with distinct temperature and humidity, and the fronts where they meet. Depressions form along fronts and sweep across continents; their passage brings the familiar sequence of falling pressure, thickening cloud, rain, a wind shift and clearing. The tropics are different: there are no sharp fronts, and the organising structures are monsoon troughs, convective clusters and, over the open warm oceans, tropical cyclones. This guide explains air masses, the structure of warm, cold and occluded fronts, the life cycle of a depression, how tropical cyclones form and why they cannot form near Singapore.',
  nutshell: [
    '**Air masses** take on the temperature and humidity of their source regions (polar, tropical, maritime, continental). A **front** is the boundary between two air masses.',
    'A **cold front** (cold air advancing under warm) is steep and brings a narrow band of showers and a sharp wind shift; a **warm front** is shallow (slope about 1:150) and brings widespread layered cloud and steady rain ahead of it.',
    'A **depression** forms when a wave develops on a front, then deepens as air rises in the centre; the cold front catches the warm front and **occludes**.',
    '**Tropical cyclones** need warm sea (≥ 26.5 °C), moist air, low wind shear and enough Coriolis force, and so do not form within about 5° of the equator.',
    'Near Singapore, weather is driven by **monsoon surges, equatorial waves, the diurnal cycle and sea-breeze convergence**, not fronts.',
  ],
  sections: [
    {
      id: 'masses',
      title: 'Air masses and fronts',
      lead: 'Where hot meets cold.',
      blocks: [
        {
          t: 'table',
          head: ['Front', 'Structure', 'Passage brings', 'Symbol on a chart'],
          rows: [
            ['Cold front', 'Cold air pushes under warm; steep slope (1:50 to 1:100); moves fast (30 to 60 km/h)', 'A narrow band of heavy showers or thunderstorms, a sharp wind shift (veering), a fall in temperature, clearing behind', 'Blue line with triangles pointing in the direction of motion'],
            ['Warm front', 'Warm air rides over cold; shallow slope (about 1:150); moves slowly (10 to 30 km/h)', 'Cirrus then thickening layered cloud, steady rain over 6 to 12 hours, then a rise in temperature', 'Red line with semicircles'],
            ['Occluded front', 'The cold front overtakes the warm front, lifting the warm sector off the ground', 'Mixed: rain from both fronts, and a gradual drop in temperature', 'Purple line with alternating triangles and semicircles'],
            ['Stationary front', 'A boundary that is not moving', 'Prolonged cloud and rain along the boundary', 'Alternating red semicircles and blue triangles pointing opposite ways'],
          ],
        },
        {
          t: 'math',
          tex: String.raw`\text{slope}=\frac{\Delta z}{\Delta x},\qquad t_{\text{passage}}=\frac{W}{c},\qquad \tan\alpha\approx\frac{f\,\bar T}{g}\,\frac{\Delta v}{\Delta T}\ \ (\text{Margules})`,
          caption: 'The slope of a frontal surface, the time a band of weather takes to pass, and Margules’ formula for the slope from the temperature and wind contrasts.',
          where: [{ sym: 'W', def: 'the width of the weather band in kilometres' }, { sym: 'c', def: 'the speed of the front' }, { sym: '\\Delta v,\\ \\Delta T', def: 'the wind speed difference and temperature difference across the front' }],
          syntax: [{ sym: 't=W/c', say: 'duration equals width divided by speed. Effect: a rain band 150 km wide on a front moving at 50 km/h passes in 3 hours; a 300 km band on a warm front at 20 km/h takes 15. Why: simple kinematics.' }, { sym: '\\tan\\alpha', say: 'the tilt of the frontal surface, set by the balance of Coriolis and buoyancy forces. Effect: the slope depends on the Coriolis parameter, so fronts are weak or absent near the equator. Why: no rotation, no sloping fronts: the cold air spreads out rather than forming a wedge.' }],
          worked: {
            title: 'How long is the rain?',
            steps: ['Cold front: 80 km band of heavy showers moving at 40 km/h → 2 hours.', 'Warm front: 250 km band of steady rain moving at 25 km/h → 10 hours.'],
            answer: 'The contrast between short, heavy cold-frontal rain and long, steady warm-frontal rain is familiar on weather maps in Europe and East Asia, and arises from the slope of the frontal surface.',
          },
        },
      ],
    },
    {
      id: 'dep',
      title: 'A depression’s life',
      lead: 'The Norwegian cyclone model.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: '1. A wave on the front', body: 'A small disturbance on the polar front, with warm air bulging poleward and cold air equatorward. The pressure at the centre starts to fall.' },
            { title: '2. A mature depression', body: 'A warm sector sits between the warm front ahead and the cold front behind. Winds circulate anticlockwise (northern hemisphere) around the low, with rain along both fronts.' },
            { title: '3. Occlusion', body: 'The cold front moves faster and catches the warm front, lifting the warm air aloft. The depression reaches its lowest pressure and begins to fill.' },
            { title: '4. Decay', body: 'The low fills as the temperature contrast disappears. The upper-level jet stream supplies the energy and steering for the whole life cycle.' },
          ],
        },
        { t: 'p', text: 'Pressure falls and rises in sequence as a depression passes: a falling barometer with cirrus signals an approaching warm front; a steady low reading in the warm sector; a rapid rise after the cold front with showery, clearing weather. Wind direction backs (turns anticlockwise) before the warm front and veers (clockwise) after each front. These are the foundation of the observer’s rules of thumb before forecast models existed.' },
      ],
    },
    {
      id: 'tc',
      title: 'Tropical cyclones, and why not here',
      lead: 'Hurricanes, typhoons and cyclones are the same thing.',
      blocks: [
        {
          t: 'checklist',
          items: [
            'Sea-surface temperature of at least about 26.5 °C to a depth of 50 m.',
            'A moist lower and middle troposphere, with conditionally unstable air.',
            'Low vertical wind shear (under about 10 m/s between 850 and 200 hPa), so the warm core can build.',
            'A pre-existing disturbance (an easterly wave or a monsoon trough).',
            'Enough Coriolis force: latitude of at least about 5° from the equator.',
          ],
        },
        { t: 'p', text: 'A tropical cyclone is a heat engine: warm humid air spirals in at the surface, rises in the eyewall, releases latent heat that warms the core and lowers surface pressure, drawing in more air. It needs rotation to organise inflow into a vortex, so it cannot form in the first 5° or so on either side of the equator. Singapore (1.3° N) is therefore effectively free of tropical cyclones, though it sometimes feels the distant effects of typhoons in the Philippines or the South China Sea, such as stronger winds and rain bands, and of cyclones in the Bay of Bengal. Typhoon Vamei in December 2001, which formed at about 1.5° N in the South China Sea close to Singapore, was an extraordinarily rare exception: a strong cold surge supplied the spin that Earth’s rotation cannot at that latitude.' },
        { t: 'cards', cols: 2, items: [
          { title: 'What drives Singapore rain', tag: 'instead of fronts', body: 'Monsoon surges and cold surges from Siberia, the Intertropical Convergence Zone, equatorial waves and the Madden–Julian Oscillation, local sea breezes and, for squalls, Sumatra convection.' },
          { title: 'Cold surges', tag: 'Dec to Jan', body: 'Pushes of cold dry air from the Siberian high strengthen the Northeast Monsoon, bringing a few days of widespread rain to Singapore and cooler temperatures (down to 23 or 24 °C).' },
          { title: 'Wind shear', tag: 'organisation', body: 'Strong wind shear organises storms into squall lines; weak shear gives scattered storms.' },
          { title: 'The takeaway', tag: 'use the right model', body: 'Mid-latitude rules (fronts, isobars, geostrophic wind) do not transfer to equatorial weather; learn the tropical patterns instead.' },
        ] },
      ],
    },
  ],
  sources: [
    'Bjerknes, J. & Solberg, H. (1922). Life cycle of cyclones and the polar front theory of atmospheric circulation. *Geofysiske Publikasjoner*, 3(1).',
    'Emanuel, K. (2003). Tropical cyclones. *Annual Review of Earth and Planetary Sciences*, 31.',
    'Chang, C.-P., Liu, C.-H. & Kuo, H.-C. (2003). Typhoon Vamei: an equatorial tropical cyclone formation. *Geophysical Research Letters*, 30(3).',
    'Wallace, J. M. & Hobbs, P. V. (2006). *Atmospheric Science* (2nd ed.), ch. 9. Academic Press.',
    'Meteorological Service Singapore: monsoon surges and Sumatra squalls (weather.gov.sg).',
  ],
  related: ['weather/charts-and-forecasts/reading-surface-charts', 'weather/atmosphere/pressure-and-wind', 'weather/singapore/rain-in-singapore', 'weather/singapore/large-scale-drivers'],
}

export default guide
