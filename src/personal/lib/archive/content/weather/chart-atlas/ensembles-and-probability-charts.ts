import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'In 1961 Edward Lorenz re-ran a weather simulation from a printout rounded to three decimal places instead of six and found that the new run diverged completely from the old after a few simulated weeks. The atmosphere is chaotic: small errors in the starting state grow until they swamp the forecast. Forecasters respond by running the model many times from slightly different starting points, an ensemble, and reading the spread. When the members agree, the forecast is confident; when they scatter, it is not. This guide uses Lorenz’s own equations as a toy atmosphere to show the effect, then explains how to read the products of an ensemble: the spaghetti plot, the ensemble mean and spread, the plume, the probability map and the tropical-cyclone cone.',
  nutshell: [
    '**Chaos**: tiny differences in the initial state grow exponentially; **predictability** ends after about **two weeks** for large-scale weather and sooner for storms.',
    'An **ensemble** runs a model 20 to 50 times from perturbed starts (and with perturbed physics); the **spread** is a measure of confidence.',
    'A **spaghetti plot** draws one line (for example a contour) from each member: **tight bundle = confident**, **fan = uncertain**.',
    'A **probability map** shows the **share of members** that exceed a threshold (such as 20 mm of rain): 70% is not a promise but a frequency.',
    'The **cone of uncertainty** around a tropical-cyclone track covers the centre’s position about **two-thirds of the time** (it does not show the storm’s size).',
  ],
  sections: [
    {
      id: 'lab',
      title: 'The ensemble lab',
      lead: 'A toy atmosphere: the Lorenz system.',
      blocks: [
        { t: 'wx-chart', viz: 'ensemble' },
        {
          t: 'math',
          tex: String.raw`\dot x=\sigma(y-x),\qquad \dot y=x(\rho-z)-y,\qquad \dot z=xy-\beta z,\qquad \delta(t)\approx\delta_0\,e^{\lambda t}`,
          caption: 'The Lorenz (1963) equations and the exponential growth of a small initial error δ₀ at rate λ (the largest Lyapunov exponent).',
          where: [{ sym: '\\sigma,\\ \\rho,\\ \\beta', def: 'the classic constants 10, 28 and 8/3' }, { sym: '\\delta_0', def: 'the size of the initial error' }, { sym: '\\lambda', def: 'the Lyapunov exponent (about 0.9 per unit time for the Lorenz system)' }],
          syntax: [{ sym: 'e^{\\lambda t}', say: 'errors grow exponentially. Effect: reducing the initial error by 10 gains only a fixed extra time of ln(10)/λ, about 2.5 model units here. Why: each factor of 10 in accuracy buys the same increment of lead time.' }],
          worked: {
            title: 'How long until the forecast is useless?',
            steps: ['With an initial error of 0.01 and a saturation error of about 10 (the size of the attractor), the growth needed is a factor of 1,000.', 'Time = ln(1,000)/0.9 = 6.9/0.9 = 7.7 model units.', 'Improving the initial error by 10 (to 0.001) extends this to ln(10,000)/0.9 = 10.2 units: a gain of 2.5 units.'],
            answer: 'In weather forecasting the same logic means that a tenfold improvement in observations and models buys only a few days. This is why useful deterministic forecasts end at about two weeks, however good the computers become: after that, only probabilities (and slow signals such as ENSO and the MJO) are useful.',
          },
        },
      ],
    },
    {
      id: 'products',
      title: 'Ensemble products',
      lead: 'Five ways to display the spread.',
      blocks: [
        {
          t: 'table',
          head: ['Product', 'What it shows', 'How to read it'],
          rows: [
            ['Spaghetti plot', 'One contour (for example the 5,520 m height at 500 hPa) from every member', 'A tight bundle means confidence; a fan means uncertainty; outliers show alternative scenarios'],
            ['Ensemble mean and spread', 'The average of the members and its standard deviation', 'The mean is smoother and often more accurate than any member; large spread means low confidence'],
            ['Plume (meteogram)', 'Each member’s time series at a location', 'The median is the best guess; the box shows the likely range'],
            ['Probability map', 'The percentage of members exceeding a threshold', '60% of members above 20 mm means a 60% chance in the model world, to be calibrated'],
            ['Cone of uncertainty', 'The area where the centre of a tropical cyclone may pass', 'The centre stays inside the cone about 2/3 of the time; impacts extend beyond it'],
          ],
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'The big ensembles', tag: 'real-world systems', body: 'The European Centre (ECMWF) runs a 51-member ensemble; the US GEFS has about 31 members; many national services run smaller regional ensembles with finer grids.' },
            { title: 'The spread-skill relation', tag: 'a useful property', body: 'In a well-calibrated ensemble, a larger spread goes with larger forecast errors, so the spread tells you how much to trust the forecast.' },
            { title: 'Probability and calibration', tag: 'is 70% really 70%?', body: 'If an ensemble says 70%, it should rain on about 70% of those occasions. Raw ensembles are often over-confident (too narrow); forecasters calibrate them against past results.' },
            { title: 'Tropics and convection', tag: 'a harder case', body: 'Afternoon storms in Singapore are small and short; global ensembles cannot resolve them, so convective-scale ensembles, radar nowcasting and observation are used for the next few hours.' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Reading "30% chance of rain"', text: 'The standard meaning is a 30% chance of measurable rain at a given point in the forecast area during the period. It is not "30% of the area" and not "30% of the time". For an island like Singapore with scattered storms, the forecast "afternoon thundery showers" with a high chance somewhere may still leave many places dry: check the radar for your area.' },
      ],
    },
  ],
  sources: [
    'Lorenz, E. N. (1963). Deterministic nonperiodic flow. *Journal of the Atmospheric Sciences*, 20(2), 130–141.',
    'Palmer, T. N. (2019). The ECMWF ensemble prediction system: looking back (more than) 25 years and projecting forward 25 years. *Quarterly Journal of the Royal Meteorological Society*, 145(S1), 12–24.',
    'Wilks, D. S. (2019). *Statistical Methods in the Atmospheric Sciences*. Elsevier.',
    'National Hurricane Center: cone of uncertainty explanation (nhc.noaa.gov).',
  ],
  related: ['weather/charts-and-forecasts/models-and-ensembles', 'weather/charts-and-forecasts/forecast-skill', 'weather/chart-atlas/meteograms-and-point-forecasts'],
}

export default guide
