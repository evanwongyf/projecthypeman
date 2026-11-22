import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'For a few weeks in some years, Singapore’s sky turns white-grey, the sun looks orange and the air smells of smoke. The haze comes mostly from fires on peatland and cleared forest in Sumatra and Kalimantan, carried across the sea by the dry-season winds. This guide explains where it comes from and why some years are worse than others, how the Pollutant Standards Index (PSI) and PM2.5 are calculated and reported (with a worked conversion), what the health bands mean and what to do at each level, the role of the monsoon winds and El Niño, the regional and legal frameworks that address it, and the history of the major haze episodes.',
  nutshell: [
    'Haze is **smoke particles** (mostly PM2.5, particles under 2.5 µm that reach deep into the lungs) from **peat and forest fires**, usually lit to clear land, and blown to Singapore by **south-westerly or southerly winds** in the dry season (Jun to Oct).',
    'Worst years coincide with **El Niño and a positive Indian Ocean Dipole**, which make the region dry: 1997, 2015 and 2019, and the record **PSI of 401 on 21 June 2013**.',
    'The **PSI** is a 0 to 500 index; bands: **0 to 50 good, 51 to 100 moderate, 101 to 200 unhealthy, 201 to 300 very unhealthy, above 300 hazardous**. The 24-hour PSI and the hourly PM2.5 concentration are both published.',
    'At unhealthy levels, **reduce prolonged outdoor exertion**, stay indoors with windows closed (use air purifiers if available), and consider **N95 respirators** for essential outdoor exposure.',
    '**Responses**: the ASEAN Agreement on Transboundary Haze Pollution (2002) and Singapore’s Transboundary Haze Pollution Act (2014); satellite fire monitoring; regional cooperation on peatland management.',
  ],
  sections: [
    {
      id: 'source',
      title: 'Where the haze comes from',
      lead: 'Fires, peat and wind.',
      blocks: [
        { t: 'p', text: 'Much of the smoke comes from burning **peatland**: drained, carbon-rich soil that smoulders underground, hard to extinguish, and releases dense smoke full of fine particles. Fires are often lit to clear land for plantations, and in dry periods they spread out of control. When the Southwest Monsoon sets in (June to September), the prevailing winds over Sumatra and Kalimantan blow from the south-east to south-west, carrying smoke toward Peninsular Malaysia and Singapore. Whether the smoke reaches Singapore depends on the wind direction on a given day, on how many fires burn, and on rainfall, which can wash it out.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Dry years', tag: 'El Niño and IOD', body: 'El Niño and a positive Indian Ocean Dipole reduce rainfall across Indonesia, drying peat and vegetation and extending the fire season into October and November. See the climate-drivers guide.' },
            { title: 'Winds', tag: 'where it goes', body: 'South-westerly winds bring smoke to Singapore; south-easterly winds carry it toward Peninsular Malaysia; a change of wind clears the air within hours.' },
            { title: 'Fire detection', tag: 'hotspots', body: 'Satellites detect heat from fires (hotspots). The ASEAN Specialised Meteorological Centre in Singapore publishes daily hotspot maps and smoke forecasts for the region.' },
            { title: 'Not only Indonesia', tag: 'local sources', body: 'Local air quality also depends on traffic, industry and power generation; on non-haze days, ozone, nitrogen dioxide and PM2.5 from these dominate.' },
          ],
        },
        {
          t: 'table',
          head: ['Year', 'What happened', 'Notes'],
          rows: [
            ['1997', 'Severe regional haze for weeks', 'Strong El Niño; fires across Indonesia; large health and economic costs in the region'],
            ['2013', 'Record 3-hour PSI of 401 on 21 June', 'Fires in Riau, Sumatra; haze lasted days and led to the stricter legal framework'],
            ['2015', 'Prolonged haze in September to October', 'Strong El Niño and positive IOD; schools closed on several days'],
            ['2019', 'Haze episode in September to October', 'Positive IOD; hotspot counts high in Sumatra and Kalimantan'],
          ],
          caption: 'Condensed from official records; PSI peaks and dates vary with the measure used (3-hour or 24-hour).',
        },
      ],
    },
    {
      id: 'psi',
      title: 'Measuring air quality: PSI and PM2.5',
      lead: 'Concentration to index.',
      blocks: [
        { t: 'p', text: 'The **Pollutant Standards Index** converts the concentrations of six pollutants (PM2.5, PM10, sulphur dioxide, nitrogen dioxide, carbon monoxide and ozone) into sub-indices on a common 0 to 500 scale; the overall PSI is the **highest** sub-index. During haze, PM2.5 almost always dominates. Each sub-index is a piecewise-linear function of concentration: between published breakpoints, the index rises in proportion to the concentration.' },
        {
          t: 'math',
          tex: String.raw`I=\frac{I_{\text{hi}}-I_{\text{lo}}}{C_{\text{hi}}-C_{\text{lo}}}\,(C-C_{\text{lo}})+I_{\text{lo}},\qquad \text{PSI}=\max_k I_k`,
          caption: 'Linear interpolation of a pollutant’s sub-index between concentration breakpoints, and the overall PSI as the maximum over pollutants.',
          where: [{ sym: 'C', def: 'the 24-hour average concentration of the pollutant (µg/m³ for PM2.5)' }, { sym: 'C_{\\text{lo}},C_{\\text{hi}}', def: 'the breakpoint concentrations bracketing C' }, { sym: 'I_{\\text{lo}},I_{\\text{hi}}', def: 'the index values at those breakpoints' }],
          syntax: [{ sym: '(I_{\\text{hi}}-I_{\\text{lo}})/(C_{\\text{hi}}-C_{\\text{lo}})', say: 'the slope within the band. Effect: in the 12 to 55 µg/m³ band the index rises about 1.2 points per µg/m³, in the 55 to 150 band about 1.0, and in the 350 to 500 band about 0.7. Why: the breakpoints are set from health evidence, so the bands are not equally steep.' }, { sym: '\\max_k I_k', say: 'the worst pollutant decides. Effect: a clean reading for ozone does not offset a very bad reading for PM2.5. Why: health risk is determined by the pollutant of greatest concern.' }],
          worked: {
            title: 'A 24-hour PM2.5 of 80 µg/m³',
            steps: ['Breakpoints (PM2.5 24-hour): 55 → index 101 and 150 → index 200.', '\\(I=\\dfrac{200-101}{150-55}(80-55)+101=\\dfrac{99}{95}\\times25+101=26.1+101=127\\).', 'Band: 101 to 200, "unhealthy". At 150 µg/m³ the index would be 200; at 250, 300.'],
            answer: 'A PM2.5 of 80 µg/m³ is a PSI of about 127. The World Health Organization’s 2021 24-hour guideline for PM2.5 is 15 µg/m³, so even "moderate" days (PSI 51 to 100) exceed it.',
          },
        },
        {
          t: 'plot',
          title: 'PSI sub-index against 24-hour PM2.5',
          x: [0, 400],
          y: [0, 500],
          xLabel: 'PM2.5 (µg/m³, 24-hour average)',
          yLabel: 'PSI sub-index',
          data: [{ pts: [[0, 0], [12, 50], [55, 100], [150, 200], [250, 300], [350, 400], [400, 434]], color: '#d9534f', label: 'piecewise linear', dots: true }],
          hlines: [{ y: 100, label: 'moderate / unhealthy edge' }, { y: 200, label: 'unhealthy / very unhealthy' }, { y: 300, label: 'hazardous' }],
          caption: 'Breakpoints from the Singapore PSI scheme (aligned with earlier US EPA breakpoints); check the National Environment Agency for current definitions. The index is capped at 500.',
        },
      ],
    },
    {
      id: 'act',
      title: 'What to do at each level',
      lead: 'Health advisory bands.',
      blocks: [
        {
          t: 'table',
          head: ['24-hour PSI', 'Band', 'Healthy people', 'Elderly, children, those with heart or lung disease'],
          rows: [
            ['0 to 50', 'Good', 'Normal activity', 'Normal activity'],
            ['51 to 100', 'Moderate', 'Normal activity', 'Reduce prolonged or strenuous outdoor exertion'],
            ['101 to 200', 'Unhealthy', 'Reduce prolonged or heavy exertion outdoors', 'Avoid prolonged or heavy exertion; minimise outdoor activity'],
            ['201 to 300', 'Very unhealthy', 'Avoid prolonged or heavy exertion; minimise outdoor activity', 'Avoid outdoor activity'],
            ['Above 300', 'Hazardous', 'Avoid outdoor activity; stay indoors with windows closed', 'Remain indoors and avoid physical exertion'],
          ],
          caption: 'Based on the National Environment Agency’s health advisories; check nea.gov.sg or the myENV app for current guidance, including hourly PM2.5 bands (normal up to 55, elevated 56 to 150, high 151 to 250, very high above 250 µg/m³).',
        },
        {
          t: 'steps',
          items: [
            { title: 'Check the readings', body: 'Use the 24-hour PSI for the daily band and the 1-hour PM2.5 for what the air is like now.' },
            { title: 'Adjust activities', body: 'Move hard training indoors or to a clean-air period; postpone outdoor events at unhealthy levels.' },
            { title: 'Reduce indoor smoke', body: 'Keep windows and doors closed, run air-conditioning on recirculate, and use an air purifier with a HEPA filter in one room if possible. Avoid candles, incense and frying.' },
            { title: 'Masks', body: 'Surgical masks do not filter fine smoke. N95 (or equivalent) respirators, properly fitted, reduce exposure for essential outdoor work; they are uncomfortable in the heat and not for prolonged use by people with heart or lung conditions without medical advice.' },
            { title: 'Seek care if needed', body: 'Wheezing, chest tightness, shortness of breath or worsening symptoms in people with asthma, COPD or heart disease need medical attention.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'Regional and legal responses', text: 'The ASEAN Agreement on Transboundary Haze Pollution (2002) commits member states to prevent and monitor haze; Singapore’s Transboundary Haze Pollution Act (2014) allows action against entities responsible for haze that affects Singapore. The Singapore-hosted ASEAN Specialised Meteorological Centre provides fire monitoring and smoke forecasts to the region. Prevention at the source (peatland restoration and fire-free land clearing) is the lasting solution.' },
      ],
    },
  ],
  sources: [
    'National Environment Agency Singapore (nea.gov.sg): PSI, PM2.5 bands, health advisories and the haze pages.',
    'ASEAN Specialised Meteorological Centre (asmc.asean.org): hotspot and smoke forecasts and the ASEAN Agreement on Transboundary Haze Pollution (2002).',
    'Transboundary Haze Pollution Act 2014 (Singapore), Singapore Statutes Online (sso.agc.gov.sg).',
    'World Health Organization (2021). *WHO Global Air Quality Guidelines: Particulate Matter (PM2.5 and PM10), Ozone, Nitrogen Dioxide, Sulfur Dioxide and Carbon Monoxide*.',
    'Koplitz, S. N. et al. (2016). Public health impacts of the severe haze in Equatorial Asia in September–October 2015. *Environmental Research Letters*, 11.',
    'Reid, J. S. et al. (2012). Multi-scale meteorological conceptual analysis of observed active fire hotspot activity and smoke optical depth in the Maritime Continent. *Atmospheric Chemistry and Physics*, 12.',
  ],
  related: ['weather/singapore/large-scale-drivers', 'weather/atmosphere/pressure-and-wind', 'weather/singapore/forecasts-and-warnings', 'fitness/endurance/training-in-the-heat'],
}

export default guide
