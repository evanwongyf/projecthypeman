import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Rain in Singapore comes in a few recognisable kinds: the afternoon thunderstorm that builds over the island, the early-morning Sumatra squall that sweeps in from the west, the long, steady monsoon surge rain, and the very rare event of a record deluge. Each has its own cause, season, size and warning signs. This guide describes them, explains the physics of the afternoon storm and of orographic and sea-breeze triggering, how heavy rain becomes a flood (rainfall intensity, runoff and drainage capacity, with a worked example), what the intensity and return-period numbers mean, and how to read the signs on radar and in the sky.',
  nutshell: [
    '**Afternoon convective storms**: short (30 to 90 min), localised, intense; triggered by sea-breeze convergence and surface heating; most common in the inter-monsoon months.',
    '**Sumatra squalls**: lines of thunderstorms from Sumatra that cross the Strait of Malacca, mainly at night or early morning from April to November; gusts of 50 to 80 km/h, rain for 1 to 2 hours.',
    '**Monsoon surge rain** (Dec to Jan): widespread, steady, sometimes continuous over several days, with embedded heavy bursts; linked to cold surges and equatorial vortices.',
    '**Flash floods** occur when rain intensity exceeds drainage capacity, typically **50 mm in an hour or more** in the affected catchment; the first drains to overflow are those in the lowest, most built-up areas.',
    'Rainfall is **highly local**: one place can receive 100 mm while another 5 km away stays dry.',
  ],
  sections: [
    {
      id: 'types',
      title: 'The types of rain',
      lead: 'Four patterns.',
      blocks: [
        {
          t: 'table',
          head: ['Type', 'When', 'Where it comes from', 'Duration and size', 'Hazards'],
          rows: [
            ['Afternoon convective storms', 'Year-round, most in Mar to May and Oct to Nov; 2 to 7 pm', 'Surface heating and sea-breeze convergence over the island; moist, unstable air', '30 to 90 minutes; cells 5 to 20 km across; often several storms', 'Intense local rain, lightning, gusts, localised flooding'],
            ['Sumatra squalls', 'Apr to Nov (mostly SW Monsoon); pre-dawn to morning', 'Organised thunderstorm lines that form over Sumatra and move east', '1 to 3 hours of rain; line up to 100 to 300 km long', 'Strong winds up to 50 to 80 km/h, heavy rain, lightning, fallen trees'],
            ['Monsoon surge (wet phase)', 'Dec to Jan', 'Cold surge from the north strengthens the NE monsoon flow; convergence over the South China Sea', 'Several hours to days; widespread', 'Long-lasting rain, flooding when persistent; cooler weather'],
            ['Widespread or stalled thunderstorms', 'Occasional, especially in inter-monsoon periods', 'Convective clusters that move slowly in light winds, or repeated development along a boundary', '1 to 3 hours over the same area', 'Flash floods, as in June 2010 and December 2011'],
          ],
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'A typical afternoon', tag: 'timeline', body: 'Sunny morning; cumulus builds by midday over the middle of the island; sea breezes converge about 2 pm; towering clouds and a dark base by 3 pm; downpour and thunder for an hour; clearing by 5 pm with cooler air and a rain-fresh smell.' },
            { title: 'Warning signs', tag: 'sky', body: 'Rapidly growing cauliflower clouds with sharp edges; a dark flat base; a sudden cool breeze (the outflow); distant thunder; a wall of rain.' },
            { title: 'Sumatra squall', tag: 'early morning', body: 'A line of cloud sweeping in from the west, with a sudden gust front, then heavy rain; often a sharp drop in temperature, strong winds and thunder for a short time.' },
            { title: 'Monsoon surge', tag: 'Dec to Jan', body: 'A grey sky with continuous, moderate rain, cooler temperatures, strong north-easterly winds on the east coast; embedded heavy showers can still flood.' },
          ],
        },
      ],
    },
    {
      id: 'flood',
      title: 'From rain to flood',
      lead: 'Intensity, runoff and drainage.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`Q=C\,i\,A\,/\,3.6\ \ (\text{m}^3/\text{s};\ i\ \text{in mm/h},\ A\ \text{in km}^2),\qquad \text{flooding when}\ Q>Q_{\text{capacity}}`,
          caption: 'The rational method: peak runoff from a catchment is proportional to the runoff coefficient, rainfall intensity and area.',
          where: [{ sym: 'C', def: 'the runoff coefficient: the fraction of rain that runs off (about 0.2 for park, 0.9 for roads and roofs)' }, { sym: 'i', def: 'rainfall intensity over the time of concentration (mm/h)' }, { sym: 'A', def: 'catchment area in km²' }, { sym: 'Q_{\\text{capacity}}', def: 'the flow that the drains and canals can carry' }],
          syntax: [
            { sym: 'C', say: 'how much water the ground sheds. Effect: replacing grass (C ≈ 0.2) with paved surfaces (C ≈ 0.9) multiplies runoff by 4. Why: water cannot soak into impervious surfaces.' },
            { sym: 'i', say: 'rain rate. Effect: doubling the intensity doubles the peak flow. Why: more water per hour to drain; the storm’s duration also matters through the catchment’s response time.' },
            { sym: 'Q>Q_{\\text{capacity}}', say: 'the flooding condition. Effect: when inflow exceeds what drains carry, water spreads above ground. Why: conservation of volume; a short intense burst can overwhelm drains even if the daily total is not exceptional.' },
          ],
          worked: {
            title: 'A downtown catchment',
            steps: ['Catchment 2 km², C = 0.85 (dense urban), storm intensity 80 mm/h over 30 minutes.', '\\(Q=0.85\\times80\\times2/3.6=37.8\\ \\text{m}^3/\\text{s}\\).', 'If drains carry 30 m³/s: excess 7.8 m³/s; over 30 minutes that is \\(7.8\\times1800=14{,}000\\) m³: a lake 1.4 m deep over 1 hectare, or about 7 mm over the whole catchment.', 'Singapore’s drainage is designed for about 1-in-50-year storms in many areas, with local variations.'],
            answer: 'Floods follow from the combination of intensity, impervious surface and capacity. That is why Singapore builds detention ponds, deep tunnels and raised platform levels in addition to bigger drains, and why a short burst at 80 to 100 mm/h in a low-lying area can flood roads in under an hour.',
          },
        },
        {
          t: 'table',
          head: ['Rain rate', 'Description', 'Typical effect'],
          rows: [
            ['Under 2.5 mm/h', 'Light', 'Surfaces wet; no disruption'],
            ['2.5 to 10 mm/h', 'Moderate', 'Puddles; visibility reduced'],
            ['10 to 50 mm/h', 'Heavy', 'Roads wet, spray; drains full'],
            ['Over 50 mm/h', 'Very heavy', 'Flash flooding likely where drainage is limited'],
            ['100+ mm in 3 hours or 50+ mm in 1 hour', 'Extreme', 'Widespread flash floods, e.g. Orchard Road in June 2010'],
          ],
          caption: 'Categories used in many forecast services; local warning thresholds are set by the Meteorological Service Singapore and PUB.',
        },
      ],
    },
    {
      id: 'safe',
      title: 'Reading and using the signs',
      lead: 'Practical points.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Check the 2-hour nowcast and rain radar', body: 'Look at where the red and magenta cells are and which way they are moving; estimate when they reach you.' },
            { title: 'Note the lightning alerts', body: 'Use the 30–30 rule if there is no alert; seek shelter indoors if thunder is heard.' },
            { title: 'Avoid low spots when heavy rain is forecast', body: 'Underpasses, basements, car parks and drains near canals fill quickly; PUB flood alerts and the myENV app give warnings.' },
            { title: 'Never drive or wade through floodwater', body: 'Half a metre of moving water can sweep a car away; shallow-looking water may hide open drains.' },
            { title: 'Plan for the pattern', body: 'On inter-monsoon days, do outdoor activities in the morning and have a backup for 2 to 6 pm.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Meteorological Service Singapore (weather.gov.sg): Sumatra squalls, thunderstorms and rainfall climatology.',
    'PUB Singapore (pub.gov.sg): flood management and drainage design (Code of Practice on Surface Water Drainage).',
    'Johnson, R. H. & Houze, R. A. (1987). Precipitating cloud systems of the Asian monsoon. In *Monsoon Meteorology*. Oxford University Press.',
    'Kuichling, E. (1889). The relation between the rainfall and the discharge of sewers in populous districts. *Transactions of the American Society of Civil Engineers*, 20 (the rational method).',
  ],
  related: ['weather/atmosphere/stability-and-convection', 'weather/charts-and-forecasts/radar-and-satellite', 'weather/singapore/forecasts-and-warnings', 'weather/singapore/singapore-climate'],
}

export default guide
