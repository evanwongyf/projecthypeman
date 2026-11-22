import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Singapore is low-lying, tropical, densely built and surrounded by sea: a place where a warming climate shows up as hotter days and nights, heavier downpours and a rising sea. This guide explains what has already been observed, the physics that links warming to heavier rain (the Clausius–Clapeyron relation) and to sea-level rise, how a small rise in mean sea level multiplies the frequency of flood extremes (a worked calculation), what the national climate projections say in outline, and how Singapore is adapting and cutting emissions. Numbers are rounded and indicative; the Centre for Climate Research Singapore publishes the authoritative figures.',
  nutshell: [
    'Singapore’s mean temperature has risen by about **0.25 °C per decade** in recent decades, faster than the global land and ocean average, helped by the urban heat island; night-time temperatures have risen more.',
    'A warmer atmosphere holds about **6 to 7% more water vapour per °C**; short, heavy downpours can intensify by **7% per °C or more**.',
    'Mean sea level is rising by a few millimetres a year, and in high-emission scenarios could rise **of the order of a metre by 2100**, with larger rises possible later; because floods depend on extremes, **small rises in the mean multiply flood frequency**.',
    'Adaptation includes **raised land levels, coastal protection, drainage upgrades, green infrastructure and cooling**; mitigation includes a **carbon tax** and a **net-zero by 2050** aim.',
    'The uncertainties are mostly about **how much the world emits**, which choices today still influence.',
  ],
  sections: [
    {
      id: 'obs',
      title: 'What has already changed',
      lead: 'Observations.',
      blocks: [
        {
          t: 'table',
          head: ['Indicator', 'Observed change (approximate)', 'Notes'],
          rows: [
            ['Mean surface temperature', '+0.25 °C per decade over recent decades', 'Several recent years have been among the warmest on record; El Niño years add to the trend'],
            ['Night-time temperature', 'Rising faster than daytime', 'Urban heat island and humidity trap heat at night'],
            ['Annual rainfall', 'No clear long-term trend in the total', 'Large year-to-year variability from ENSO and the Dipole'],
            ['Heavy rain', 'Increases in the intensity of short-duration extremes in some analyses', 'Short-duration downpours are what overwhelm drains'],
            ['Mean sea level', 'A few mm per year in the regional record', 'Includes land movement and ocean warming; local tide gauges show the trend'],
          ],
          caption: 'Summaries of the Centre for Climate Research Singapore and published studies; the exact values depend on the period and dataset and are updated in each national climate assessment.',
        },
        {
          t: 'plot',
          title: 'Illustration: linear warming of 0.25 °C per decade',
          x: [1980, 2060],
          y: [0, 2.5],
          xLabel: 'year',
          yLabel: 'warming since 1980 (°C)',
          curves: [{ f: (x: number) => 0.025 * (x - 1980), label: '0.25 °C per decade', color: '#d9534f' }, { f: (x: number) => 0.045 * (x - 1980), label: '0.45 °C per decade (faster)', dashed: true, color: '#8a8478' }],
          caption: 'A simple linear extrapolation to illustrate scale, not a projection: at the recent rate, Singapore would be about 1 °C warmer than in 1980 by 2020 and 2 °C warmer by 2060. National projections use climate models and emissions scenarios.',
        },
      ],
    },
    {
      id: 'rain',
      title: 'Why heavier rain?',
      lead: 'Clausius–Clapeyron.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\frac{1}{e_s}\frac{de_s}{dT}=\frac{L_v}{R_vT^2}\approx0.065\ \text{K}^{-1}\ (\text{about }6\text{–}7\%\text{ per }^\circ\text{C}),\qquad \frac{R_{\text{new}}}{R_{\text{old}}}\approx(1.07)^{\Delta T}`,
          caption: 'The Clausius–Clapeyron relation: the fractional increase of saturation vapour pressure with temperature, and the resulting scaling of heavy rainfall with warming.',
          where: [{ sym: 'L_v', def: 'the latent heat of vaporisation, 2.5 × 10⁶ J/kg' }, { sym: 'R_v', def: 'the gas constant for water vapour, 461 J/kg/K' }, { sym: 'T', def: 'temperature in kelvin' }],
          syntax: [{ sym: 'L_v/(R_vT^2)', say: 'the fractional rate of increase of capacity with temperature. Effect: at 300 K, \\(2.5\\times10^6/(461\\times300^2)=0.060\\) per K, about 6% per degree. Why: warmer air can hold more vapour, and the capacity grows exponentially.' }, { sym: '(1.07)^{\\Delta T}', say: 'compounding the 7% rise. Effect: 2 °C of warming gives \\(1.07^2=1.145\\), about 15% more water in the air and, as the rain from a storm is limited by moisture supply, up to 15% more in an extreme downpour (sometimes more). Why: the extra vapour is released as rain in intense storms.' }],
          worked: {
            title: 'A 100 mm storm in a warmer world',
            steps: ['A storm that drops 100 mm in 3 hours today. With 1 °C of warming: about 107 mm; with 2 °C: 114 mm; with 3 °C: 123 mm.', 'Drainage designed for the old peak flows (Q ∝ intensity) would be exceeded by 7 to 15% or more.', 'Some studies of short-duration tropical storms find even larger increases (up to 2 times the CC rate), because stronger updrafts accompany the extra moisture.'],
            answer: 'The change per degree seems modest, but because drainage and flood defences are designed to a threshold, a 10 to 20% rise in extreme intensities can shift storms from "manageable" to "flooding".',
          },
        },
      ],
    },
    {
      id: 'sea',
      title: 'Sea level and flood extremes',
      lead: 'Small rise, big change in frequency.',
      blocks: [
        { t: 'p', text: 'Sea level rises because the ocean warms and expands, and because land ice melts. Singapore’s coastline and reclaimed land sit just a few metres above the sea, and high tides combined with storm surges and heavy rain can cause flooding. The relevant risk is the **extreme high water level**, not the average, and the extremes respond strongly to a rise in the mean.' },
        {
          t: 'math',
          tex: String.raw`P(X>z)\approx e^{-(z-\mu)/\beta},\qquad \frac{P_{\text{new}}}{P_{\text{old}}}=e^{h/\beta},\qquad T_{\text{new}}=T_{\text{old}}\,e^{-h/\beta}`,
          caption: 'Exceedance probability of an extreme water level (a Gumbel tail) and how it changes when mean sea level rises by h.',
          where: [{ sym: 'z', def: 'a flood-defence level' }, { sym: '\\mu,\\ \\beta', def: 'location and scale of the distribution of annual maximum water levels' }, { sym: 'h', def: 'the rise in mean sea level' }, { sym: 'T', def: 'the return period: the average years between exceedances' }],
          syntax: [{ sym: 'e^{h/\\beta}', say: 'the multiplier on flood frequency. Effect: if the spread of extremes (β) is small compared with the sea-level rise, the multiplier is large. Why: the tail of the distribution falls off exponentially, so shifting it up by h raises every exceedance probability by the same factor.' }, { sym: 'T_{\\text{old}}e^{-h/\\beta}', say: 'the new return period. Effect: a 1-in-100-year level becomes much more frequent. Why: a shorter wait between events.' }],
          worked: {
            title: 'An illustrative calculation (numbers for demonstration)',
            steps: ['Suppose annual maximum water levels have scale β = 0.15 m, and a sea wall is designed for the 1-in-100 level.', 'With a 0.3 m rise: \\(e^{0.3/0.15}=e^{2}=7.4\\): the old 1-in-100-year level is exceeded on average every 100/7.4 = 13.5 years.', 'With 0.6 m: \\(e^4=54.6\\): every 1.8 years; with 1 m: \\(e^{6.7}\\approx 790\\): about every month or two.'],
            answer: 'A rise that seems small compared with the tidal range turns rare floods into regular ones, which is why planners raise defences and platform levels ahead of the rise. The calculation assumes the shape of the distribution does not change, which is a simplification.',
          },
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Raised levels', tag: 'building and reclamation', body: 'Minimum platform levels for new development and reclamation have been raised over time, and critical infrastructure (such as new airport and port facilities) is built at higher levels.' },
            { title: 'Coastal protection', tag: 'defences and fund', body: 'Polders, sea walls, tidal gates and nature-based solutions such as mangroves. The government set up a multi-billion-dollar Coastal and Flood Protection Fund to pay for long-term works.' },
            { title: 'Drainage and storage', tag: 'inland', body: 'Wider canals, detention ponds, the Marina Barrage (which also stores freshwater and keeps tides out of the river) and the Stormwater Management Plan.' },
            { title: 'Heat', tag: 'cooling', body: 'More trees and shade, cool materials, district cooling, building design for ventilation and an effort to increase the share of green space.' },
          ],
        },
      ],
    },
    {
      id: 'mit',
      title: 'Projections and what can be done',
      lead: 'The range of futures.',
      blocks: [
        { t: 'p', text: 'Climate projections depend on future emissions: low-emission pathways keep warming and sea-level rise at the lower end of the ranges; high-emission pathways produce the highest. The national assessments by the Centre for Climate Research Singapore (including the Third National Climate Change Study) project further warming of Singapore through the century (roughly between 1 and 5 °C depending on the scenario), more frequent hot days and heavier extreme rainfall, and a mean sea-level rise of up to about a metre by 2100 in high-emission scenarios, with higher possible but uncertain outcomes beyond that. Check the latest report for exact ranges.' },
        {
          t: 'levels',
          caption: 'Singapore’s approach, from reducing the problem to living with it.',
          items: [
            { name: 'Mitigate', body: 'A net-zero emissions aim by 2050, a carbon tax (legislated at S$25 per tonne of CO₂ in 2024 and 2025, S$45 in 2026 and 2027, with a path to S$50 to 80 by 2030), solar energy, energy efficiency, electric vehicles and imports of low-carbon electricity.' },
            { name: 'Adapt', body: 'Coastal and flood protection, raised levels, resilient infrastructure, heat measures and managing water supply.' },
            { name: 'Monitor and plan', body: 'Continued observation, regular climate assessments and planning for a range of scenarios, including higher sea levels beyond 2100.' },
            { name: 'Individuals', body: 'Using public transport, saving electricity and water, reducing waste, and preparing for heat and heavy rain.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'Check the sources', text: 'Policy figures such as carbon-tax rates and coastal fund amounts change with each budget. Use the National Climate Change Secretariat, the Ministry of Sustainability and the Environment, PUB and the Centre for Climate Research Singapore for current numbers.' },
      ],
    },
  ],
  sources: [
    'Centre for Climate Research Singapore (2023). *Singapore’s Third National Climate Change Study (V3)* (ccrs.weather.gov.sg).',
    'Intergovernmental Panel on Climate Change (2021). *Climate Change 2021: The Physical Science Basis* (Working Group I, Sixth Assessment Report); Fox-Kemper, B. et al., ch. 9 on sea level.',
    'Trenberth, K. E., Dai, A., Rasmussen, R. M. & Parsons, D. B. (2003). The changing character of precipitation. *Bulletin of the American Meteorological Society*, 84(9).',
    'Lenderink, G. & van Meijgaard, E. (2008). Increase in hourly precipitation extremes beyond expectations from temperature changes. *Nature Geoscience*, 1.',
    'National Climate Change Secretariat Singapore (nccs.gov.sg): Singapore’s Climate Action Plan and the Singapore Green Plan 2030; PUB: Coastal and Flood Protection.',
    'Coles, S. (2001). *An Introduction to Statistical Modeling of Extreme Values*. Springer.',
  ],
  related: ['weather/singapore/singapore-climate', 'weather/singapore/rain-in-singapore', 'weather/singapore/heat-humidity-and-uv', 'finance/quant/returns-and-distributions'],
}

export default guide
