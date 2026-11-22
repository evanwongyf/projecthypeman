import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A front is the boundary between two air masses of different density: the line on the chart along which cold, dense air undercuts warm, light air, or warm air slides up over cold. The drawing conventions are among the oldest in meteorology and are understood everywhere: a blue line with triangles for a cold front, a red line with semicircles for a warm front, a purple line with both for an occluded front. The weather at a front follows from the slope and the speed of the boundary: a steep cold front gives a narrow band of heavy showers, a gentle warm front gives a broad shield of layered cloud and steady rain. This guide shows the four symbols, the structure of each front, the slope calculation and, since Singapore has no fronts in this sense, the tropical features that play the same role.',
  nutshell: [
    '**Cold front** (blue, triangles): cold air advances; slope steep (about **1:50**); narrow band of heavy showers, then cooler, drier air and a wind shift.',
    '**Warm front** (red, semicircles): warm air rises over cold; slope gentle (about **1:150**); widespread layered cloud and steady rain ahead of it.',
    '**Occluded front** (purple): the cold front overtakes the warm front and lifts the warm sector off the ground; marks the mature or dying stage of a depression.',
    '**Stationary front** (alternating blue and red): a boundary with little motion; can bring days of cloud and rain.',
    'Symbols sit on the side **toward which the front is moving**; the **Margules** relation links the front’s slope to the wind and temperature contrasts.',
  ],
  sections: [
    {
      id: 'symbols',
      title: 'The four symbols',
      lead: 'Shapes that survive a black-and-white print.',
      blocks: [
        { t: 'wx-chart', viz: 'front-symbols' },
        {
          t: 'table',
          head: ['Front', 'Colour and symbol', 'Slope', 'Typical weather ahead', 'After passage'],
          rows: [
            ['Cold', 'Blue line, triangles', 'steep, about 1:50', 'Cumulus building, then a band of showers or thunderstorms', 'Cooler, drier, gusty, clearing; pressure rises; wind veers'],
            ['Warm', 'Red line, semicircles', 'gentle, about 1:150', 'Cirrus, then altostratus, then steady rain', 'Warmer and more humid; the rain eases; wind veers'],
            ['Occluded', 'Purple line, both', 'varies', 'A mix of the two', 'Cooler; the depression is decaying'],
            ['Stationary', 'Alternating blue and red', 'little motion', 'Extensive cloud, drizzle or rain along the front', 'Little change until it moves'],
          ],
        },
      ],
    },
    {
      id: 'slope',
      title: 'The slope of a front',
      lead: 'Why cold fronts are sharp and warm fronts are broad.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\tan\alpha\approx\frac{f\,\bar T}{g}\,\frac{\Delta v}{\Delta T}`,
          caption: 'Margules’s relation: the slope α of a front in geostrophic balance.',
          where: [{ sym: 'f', def: 'the Coriolis parameter (about 10⁻⁴ s⁻¹ at mid-latitudes)' }, { sym: '\\bar T', def: 'the mean temperature of the two air masses (K)' }, { sym: '\\Delta v', def: 'the difference of wind speed along the front across it (m/s)' }, { sym: '\\Delta T', def: 'the temperature difference across the front (K)' }, { sym: 'g', def: '9.8 m/s²' }],
          syntax: [{ sym: 'f\\bar T/g', say: 'a constant of about 3 K·s·m⁻¹·10⁻³ at mid-latitudes. Effect: the larger the wind contrast for the temperature contrast, the steeper the front. Why: the thermal-wind balance ties the tilt of the boundary to the wind shear across it.' }],
          worked: {
            title: 'A front with an 8 K contrast and a 10 m/s wind shear',
            steps: ['f = 10⁻⁴ s⁻¹, T̄ = 280 K, g = 9.8 m/s².', 'tan α ≈ (10⁻⁴ × 280/9.8) × (10/8) = 0.0036.', 'The slope is 1:280: rising 1 km takes 280 km of horizontal distance.'],
            answer: 'This is a gentle, warm-front-like slope: warm air rising over 1,000 km of the cold air reaches 3.6 km. A cold front with stronger shear has a slope of about 1:50 to 1:100: warm air is lifted 2 km within 100 km, a rapid ascent that produces towering cumulonimbus.',
          },
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Cold-front weather', tag: 'a narrow band', body: 'Warm air is lifted abruptly; a line of showers or thunderstorms 50 to 100 km wide may precede the surface front; behind it the sky clears.' },
            { title: 'Warm-front weather', tag: 'a broad shield', body: 'Warm air slides up over a wedge of cold air; high cirrus 1,000 km ahead of the front thickens to altostratus and then nimbostratus with steady rain over several hundred kilometres.' },
            { title: 'The warm sector', tag: 'between the fronts', body: 'The area between the warm and cold fronts is warm and humid, often with low stratus or drizzle.' },
            { title: 'Occlusion', tag: 'the cold front catches up', body: 'The cold front moves faster than the warm front, closing the warm sector until the warm air is lifted entirely off the ground.' },
          ],
        },
      ],
    },
    {
      id: 'tropics',
      title: 'Fronts and the tropics',
      lead: 'Where Singapore’s rain comes from.',
      blocks: [
        {
          t: 'table',
          head: ['Mid-latitude feature', 'Tropical equivalent near Singapore', 'What it does'],
          rows: [
            ['Cold front', 'Monsoon surge (cold surge in East Asia pushing north-easterlies south)', 'A burst of strong north-easterly winds, cloud and widespread rain across the South China Sea in the NE monsoon'],
            ['Front or trough', 'Monsoon trough and the Intertropical Convergence Zone (ITCZ)', 'A band of convergence and cloud where the winds from the two hemispheres meet; it migrates north and south with the Sun'],
            ['Squall line ahead of a cold front', 'Sumatra squall', 'A line of storms formed over Sumatra, moving east across the Strait in the early morning in the SW monsoon and inter-monsoon periods'],
            ['Sea-breeze front', 'The same, on a local scale', 'Sea breezes from the Singapore Strait, Johor Strait and Malacca Strait converge over the island and trigger afternoon storms'],
            ['Tropical cyclone', 'Almost never within about 5° of the equator', 'Coriolis is too weak to spin up a cyclone; Singapore is sometimes affected by the winds of storms far to the north'],
          ],
          caption: 'A simplified mapping. The tropics have no sharp temperature fronts, but have important convergence lines.',
        },
        { t: 'callout', tone: 'note', title: 'Why the symbols still matter', text: 'Singapore’s weather depends on mid-latitude systems far away: the cold surge that strengthens the north-easterly monsoon begins as a cold front and a strong high over Siberia and China. Forecasters read mid-latitude charts, with fronts and highs, to anticipate surges days in advance.' },
      ],
    },
  ],
  sources: [
    'Bjerknes, J. & Solberg, H. (1922). Life cycle of cyclones and the polar front theory of atmospheric circulation. *Geofysiske Publikasjoner*, 3(1).',
    'Margules, M. (1906). Über Temperaturschichtung in stationär bewegter und in ruhender Luft. *Meteorologische Zeitschrift*, 243–254.',
    'Wallace, J. M. & Hobbs, P. V. (2006). *Atmospheric Science*. Academic Press.',
    'Meteorological Service Singapore: monsoon surges, Sumatra squalls and sea breezes (weather.gov.sg).',
  ],
  related: ['weather/atmosphere/air-masses-and-fronts', 'weather/chart-atlas/isobars-and-synoptic-charts', 'weather/singapore/rain-in-singapore'],
}

export default guide
