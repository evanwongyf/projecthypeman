import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Why was one year in Singapore drier and hotter than another? Beyond the monsoon calendar, three large-scale patterns shift the rain and heat: El Niño and La Niña in the Pacific, the Indian Ocean Dipole, and the Madden–Julian Oscillation, a pulse of storm activity that crosses the tropics every month or two. All three work by moving the places where air rises and sinks along the equator. This guide explains the Walker circulation that connects them, how each pattern is defined and measured, what each tends to do to Singapore, how strong the connections really are (they explain only part of the variation), and how seasonal outlooks use them.',
  nutshell: [
    'The **Walker circulation** is an east–west loop along the equatorial Pacific: air rises over the warm western Pacific and Maritime Continent and sinks over the cool eastern Pacific.',
    '**El Niño** (warm central-eastern Pacific) weakens the Walker loop and tends to make Singapore and Indonesia **drier and warmer**; **La Niña** does the opposite, **wetter and slightly cooler**. Measured by the **Niño 3.4 index** (±0.5 °C threshold).',
    'The **Indian Ocean Dipole (IOD)**: when the west Indian Ocean is warmer than the east (positive), the Maritime Continent tends to be drier, increasing fire and haze risk in the dry season.',
    'The **Madden–Julian Oscillation (MJO)** is an eastward-moving cluster of storms with a 30 to 60-day cycle; when its active phase is over the Maritime Continent, Singapore tends to be **wetter** for one to two weeks.',
    'These effects are **tendencies**, not certainties: each explains perhaps 10 to 30% of rainfall variability and combine with the monsoon and chance.',
  ],
  sections: [
    {
      id: 'walker',
      title: 'The Walker circulation and ENSO',
      lead: 'A seesaw across the Pacific.',
      blocks: [
        { t: 'p', text: 'In normal conditions, trade winds pile warm water into the western Pacific, where the sea is 29 to 30 °C. Moist air rises there, creating the heavy rain of Indonesia and the Maritime Continent, and spreads east aloft before sinking over the cold-water region off South America. In an **El Niño**, the trade winds weaken, warm water slides east, and rising air shifts toward the central Pacific: the western Pacific and Maritime Continent have less upward motion and less rain. In a **La Niña**, the trades strengthen, the Walker circulation intensifies and the Maritime Continent is wetter. Together they form the **El Niño–Southern Oscillation (ENSO)**, which repeats irregularly every 2 to 7 years and peaks around December.' },
        {
          t: 'math',
          tex: String.raw`\text{ONI}_t=\frac13\sum_{k=-1}^{1}\big(\text{SST}^{\,3.4}_{t+k}-\overline{\text{SST}}^{\,3.4}_{\text{clim}}\big),\qquad \text{El Niño: ONI}\ge+0.5\,^\circ\text{C},\ \text{La Niña: ONI}\le-0.5\,^\circ\text{C}\ (\ge5\ \text{overlapping seasons})`,
          caption: 'The Oceanic Niño Index: a three-month running mean of sea-surface temperature anomalies in the Niño 3.4 region (5° N–5° S, 170° W–120° W).',
          where: [{ sym: '\\text{SST}^{3.4}', def: 'the sea-surface temperature averaged over the Niño 3.4 box in the central Pacific' }, { sym: '\\overline{\\text{SST}}_{\\text{clim}}', def: 'the 30-year climatological average for that month' }],
          syntax: [{ sym: '\\tfrac13\\sum', say: 'a three-month average. Effect: smooths month-to-month noise so that a signal of persistent warming or cooling stands out. Why: ENSO is a slow, seasonal phenomenon.' }, { sym: '\\ge+0.5\\,^\\circ\\text{C}', say: 'the threshold for El Niño conditions, which must persist for 5 consecutive overlapping seasons. Effect: strong events reach +2 °C or more (1997–98, 2015–16). Why: the threshold separates real events from small fluctuations.' }],
          worked: {
            title: 'Classifying a season',
            steps: ['Niño 3.4 anomalies for Oct, Nov, Dec: +1.8, +2.1, +2.2 °C. ONI (NDJ-style three-month mean) = (1.8 + 2.1 + 2.2)/3 = 2.03 °C.', 'ONI above +1.5 °C is "strong"; above +2.0, "very strong". If this lasts 5 overlapping seasons, it is an El Niño.', 'Over Singapore, the early part of the next year (January to April) tends to be warm; the dry-season months of the year of onset (June to October) tend to be drier.'],
            answer: 'The index reduces a complex ocean–atmosphere state to one number that has predictable (though not guaranteed) effects on the weather in distant places, called teleconnections.',
          },
        },
        {
          t: 'table',
          head: ['', 'El Niño', 'La Niña'],
          rows: [
            ['Pacific sea temperature', 'Warm in the central and eastern Pacific', 'Cool in the central and eastern Pacific'],
            ['Walker circulation', 'Weaker; rising air shifts east', 'Stronger; rising air stays over the Maritime Continent'],
            ['Singapore rainfall (tendency)', 'Below normal, mainly Jun to Nov of the developing year, and Dec to Mar after', 'Above normal, especially in Dec to Mar'],
            ['Singapore temperature', 'Warmer, sometimes record-hot (1998, 2016)', 'Slightly cooler than average'],
            ['Haze risk', 'Higher: dry conditions favour peat and forest fires (1997, 2015)', 'Lower'],
          ],
          caption: 'Tendencies seen in historical records; individual events differ.',
        },
      ],
    },
    {
      id: 'iod',
      title: 'The Indian Ocean Dipole',
      lead: 'An ocean seesaw west to east.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{DMI}=\overline{\text{SSTA}}_{\text{west}}-\overline{\text{SSTA}}_{\text{east}},\qquad \text{west: }50\text{–}70^\circ\text{E},10^\circ\text{S–}10^\circ\text{N};\ \ \text{east: }90\text{–}110^\circ\text{E},10^\circ\text{S–}0^\circ`,
          caption: 'The Dipole Mode Index: the difference in sea-surface temperature anomaly between the western and south-eastern tropical Indian Ocean (Saji et al., 1999).',
          where: [{ sym: '\\text{SSTA}', def: 'sea-surface temperature anomaly' }],
          syntax: [{ sym: '\\overline{\\text{SSTA}}_{\\text{west}}-\\overline{\\text{SSTA}}_{\\text{east}}', say: 'the east–west contrast. Effect: positive means warm in the west and cool near Sumatra; cool water there suppresses convection, so Indonesia gets less rain. Why: rain follows the warmest water; the pattern is amplified by winds that blow away from Sumatra.' }],
          worked: {
            title: 'A positive event',
            steps: ['West anomaly +0.6 °C, east −0.5 °C: DMI = +1.1 °C, a strong positive IOD (threshold about +0.4 to +0.5 °C).', 'Typical results: dry Sumatra and Kalimantan, wet east Africa, and in Singapore a drier second half of the year with greater haze risk, especially in combination with El Niño (2015, 2019 and 1997 were all positive IOD years).'],
            answer: 'The IOD peaks in September to November and can strengthen or offset ENSO, which is why dry years are worst when both are in their dry phases.',
          },
        },
      ],
    },
    {
      id: 'mjo',
      title: 'The Madden–Julian Oscillation',
      lead: 'A pulse that crosses the tropics.',
      blocks: [
        { t: 'p', text: 'The MJO is a large cluster of cloud and rain, thousands of kilometres across, that forms over the Indian Ocean and moves east at about 5 m/s (about 400 km a day), reaching the Maritime Continent after about 2 to 4 weeks and the Pacific after 4 to 8 weeks. Behind it lies a suppressed, drier phase. The full cycle takes 30 to 60 days. It is described by eight phases; phases 3 to 5 correspond to enhanced convection over the Indian Ocean and Maritime Continent. When the active MJO is near Singapore, rainfall tends to be heavier and more frequent for a week or two, and when it is elsewhere, drier and sunnier.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Why it matters', tag: 'sub-seasonal', body: 'The MJO gives skill at 2 to 4 weeks ahead, between weather forecasts and seasonal outlooks. Wet spells in December and January, flood risk and rainfall in the inter-monsoon months are modulated by it.' },
            { title: 'How it is tracked', tag: 'RMM index', body: 'The Real-time Multivariate MJO index combines outgoing longwave radiation and winds at 850 and 200 hPa into two components (RMM1 and RMM2), plotted as a phase diagram: amplitude above 1 means an active MJO, and the phase gives its location.' },
            { title: 'Interaction', tag: 'combined effects', body: 'The MJO is strongest in neutral and weak El Niño conditions; during a strong El Niño it can be weaker, but still affects rainfall locally.' },
            { title: 'Beyond Singapore', tag: 'global effects', body: 'It also modulates monsoon onsets, Indian Ocean cyclones, the Pacific and, through teleconnections, the weather in North America and Europe.' },
          ],
        },
      ],
    },
    {
      id: 'strength',
      title: 'How strong are these connections?',
      lead: 'Tendencies, not rules.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`r=\frac{\operatorname{Cov}(x,y)}{s_x s_y},\qquad \text{variance explained}=r^{2},\qquad \Delta y\approx r\,\frac{s_y}{s_x}\,\Delta x`,
          caption: 'The correlation between an index (say ONI) and Singapore rainfall, and the share of variance it explains.',
          where: [{ sym: 'r', def: 'the correlation coefficient, from −1 to +1' }, { sym: 's_x,s_y', def: 'standard deviations of the index and the rainfall' }],
          syntax: [{ sym: 'r^2', say: 'the share of rainfall variance linked to the index. Effect: a correlation of −0.4 explains 16% of the variance; 84% is left to other things. Why: squaring converts the correlation to a proportion of variance.' }, { sym: 'r\\,s_y/s_x', say: 'the typical change in rainfall per unit change in the index. Effect: lets you convert the index into an expected anomaly with an uncertainty. Why: the slope of the regression line.' }],
          worked: {
            title: 'An illustrative case (numbers are for demonstration)',
            steps: ['Suppose the correlation between the ONI and the June to October rainfall anomaly in Singapore is −0.4. Then ENSO explains 16% of the variance.', 'With the ONI at +1.5 (s_x = 1.0) and a rainfall standard deviation of 60 mm: expected anomaly = −0.4 × 60 × 1.5 = −36 mm. The chance of a below-normal season rises from 50% to about 65 to 70%, not to 100%.'],
            answer: 'Seasonal outlooks that give odds, such as "a 65% chance of below-normal rainfall", reflect this. They are most useful for planning (water use, haze preparedness) and should be read as odds, not predictions.',
          },
        },
        { t: 'callout', tone: 'note', title: 'Seasonal outlooks in Southeast Asia', text: 'The Meteorological Service Singapore and the ASEAN Specialised Meteorological Centre publish monthly and seasonal outlooks for the region, summarised at the ASEAN Climate Outlook Forum, using ENSO and IOD forecasts and dynamical models. Check their current statements: they update monthly.' },
      ],
    },
  ],
  sources: [
    'Saji, N. H., Goswami, B. N., Vinayachandran, P. N. & Yamagata, T. (1999). A dipole mode in the tropical Indian Ocean. *Nature*, 401.',
    'Madden, R. A. & Julian, P. R. (1971). Detection of a 40–50 day oscillation in the zonal wind in the tropical Pacific. *Journal of the Atmospheric Sciences*, 28(5).',
    'Wheeler, M. C. & Hendon, H. H. (2004). An all-season real-time multivariate MJO index. *Monthly Weather Review*, 132(8).',
    'McPhaden, M. J., Zebiak, S. E. & Glantz, M. H. (2006). ENSO as an integrating concept in Earth science. *Science*, 314.',
    'Meteorological Service Singapore and ASEAN Specialised Meteorological Centre (asmc.asean.org): climate outlooks.',
    'NOAA Climate Prediction Center. *Oceanic Niño Index* (cpc.ncep.noaa.gov).',
  ],
  related: ['weather/singapore/singapore-climate', 'weather/singapore/haze-and-air-quality', 'weather/atmosphere/pressure-and-wind', 'finance/quant/factor-models'],
}

export default guide
