import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Modern forecasts begin with equations: the laws of motion, thermodynamics and mass conservation applied to the atmosphere on a grid, stepped forward in time on supercomputers. Why do forecasts still fail after a week or two, even though the equations are known? Because the atmosphere is chaotic: tiny errors in the starting state grow until they swamp the signal. This guide explains how numerical weather prediction works, what resolution means, Lorenz’s discovery of chaos and the doubling time of errors (with a plot), how ensembles turn that into probabilities, what "30% chance of rain" means, and why tropical thunderstorms are particularly hard to predict, with the Singapore models as examples.',
  nutshell: [
    '**Numerical weather prediction (NWP)** solves the primitive equations on a 3D grid. Global models have grid spacing of about 9 to 25 km; regional **convection-permitting** models use 1 to 4 km, including Singapore’s SINGV at 1.5 km.',
    'The atmosphere is **chaotic** (Lorenz, 1963): errors in the starting state roughly **double every 1.5 to 2 days**, setting a predictability limit of about **two weeks** for detailed weather.',
    '**Ensembles** run the model many times from slightly different starting states; the spread shows uncertainty and the fraction of members with rain gives a **probability**.',
    '**Probability of precipitation (PoP)** means the chance that measurable rain occurs at a given point in the forecast area during the period; it is not the fraction of the area or the time.',
    'In the tropics forecasts are harder because **convection is small, fast and sparse**, and models must represent it either with approximations (parametrisation) or at very high resolution.',
  ],
  sections: [
    {
      id: 'nwp',
      title: 'How a forecast model works',
      lead: 'Equations on a grid.',
      blocks: [
        {
          t: 'flow',
          title: 'The forecast cycle',
          nodes: [
            { label: 'Observations', sub: 'satellites, radiosondes, aircraft, surface stations, radar, buoys', tone: 'human' },
            { label: 'Data assimilation', sub: 'combine observations with the last forecast to get the best starting state', tone: 'process' },
            { label: 'Model integration', sub: 'step the equations forward: minutes per step, days ahead', tone: 'model' },
            { label: 'Post-processing', sub: 'correct biases; downscale to places; compute probabilities', tone: 'data' },
            { label: 'Forecaster and products', sub: 'maps, warnings, nowcasts, apps', tone: 'output' },
          ],
          loop: 'Every 6 to 12 hours the cycle restarts with new observations',
        },
        {
          t: 'math',
          tex: String.raw`\frac{D\vec v}{Dt}=-\frac1\rho\nabla p-2\vec\Omega\times\vec v+\vec g+\vec F,\quad \frac{D\rho}{Dt}=-\rho\nabla\!\cdot\vec v,\quad c_p\frac{DT}{Dt}-\frac{1}{\rho}\frac{Dp}{Dt}=\dot Q,\quad p=\rho R T`,
          caption: 'The primitive equations: momentum, mass, thermodynamic energy and the equation of state (with equations for water vapour and cloud added).',
          where: [{ sym: 'D/Dt', def: 'the derivative following a moving air parcel' }, { sym: '\\dot Q', def: 'heating from radiation, latent heat release and turbulence' }, { sym: '\\vec F', def: 'friction and turbulence' }],
          syntax: [
            { sym: 'D\\vec v/Dt', say: 'Newton’s second law for air. Effect: wind accelerates due to pressure gradients, rotation, gravity and friction. Why: momentum conservation.' },
            { sym: '\\dot Q', say: 'the heat sources: sunlight, infrared, condensation. Effect: much of the model’s skill depends on getting these right; condensation heating powers storms. Why: the atmosphere is a heat engine.' },
            { sym: 'p=\\rho RT', say: 'the ideal gas law connecting pressure, density and temperature. Effect: closes the system so that all variables can be stepped forward. Why: it relates state variables.' },
          ],
          worked: {
            title: 'The cost of resolution',
            steps: ['Halving the grid spacing doubles the number of points in each horizontal direction (×4), and the time step must also halve for stability (×2): about 8 times as much computing; in 3D more if vertical levels increase.', 'Going from 25 km to 1.5 km grid spacing: \\((25/1.5)^3\\approx4{,}600\\) times as many operations per unit area and time, which is why only small regions are run at high resolution.'],
            answer: 'Computing power sets the resolution, and resolution decides which weather is resolved: a 1.5 km model can represent individual thunderstorms, a 25 km model cannot.',
          },
        },
        { t: 'p', text: 'Phenomena smaller than the grid spacing, such as individual convective clouds in a coarse model, turbulence and cloud droplets, cannot be resolved and are represented by **parametrisations**: formulae that estimate their average effect from the grid-scale conditions. Errors in these schemes are a major source of error, particularly in the tropics. **Convection-permitting models** with spacing under about 4 km resolve the larger storms directly and give more realistic rain, at greater cost. The Meteorological Service Singapore’s SINGV model, developed locally with the UK Met Office, runs at 1.5 km over Singapore and its surroundings and is used for the short-range forecasts.' },
      ],
    },
    {
      id: 'chaos',
      title: 'Chaos and the limits of predictability',
      lead: 'The butterfly effect.',
      blocks: [
        { t: 'p', text: 'In 1961 the meteorologist Edward Lorenz re-ran a simple weather model from rounded-off starting values and found a completely different forecast within weeks of model time. He had discovered that deterministic systems can be extremely sensitive to initial conditions: the "butterfly effect" (Lorenz, 1963). For the real atmosphere, small-scale errors double in hours, and the error at larger scales doubles in a day or two, so beyond about two weeks the forecast contains no more information than the climate average, however good the model and the data.' },
        {
          t: 'math',
          tex: String.raw`e(t)=e_0\,2^{\,t/T_d},\qquad t_{\text{pred}}=T_d\,\log_2\!\frac{e_{\text{sat}}}{e_0}`,
          caption: 'Exponential growth of forecast error with a doubling time T_d, and the time to reach saturation (loss of skill).',
          where: [{ sym: 'e_0', def: 'the initial error as a fraction of natural variability' }, { sym: 'e_{\\text{sat}}', def: 'error when it saturates at the level of climatological variability (1 or 100%)' }, { sym: 'T_d', def: 'error doubling time: about 1.5 to 2 days for synoptic weather' }],
          syntax: [{ sym: '2^{t/T_d}', say: 'doubling every T_d. Effect: after 10 doubling times, the error is 1,000 times greater. Why: chaotic dynamics amplify small perturbations exponentially.' }, { sym: 'T_d\\log_2(e_{\\text{sat}}/e_0)', say: 'the time to grow from the initial error to saturation. Effect: a ten-fold reduction in the initial error buys only \\(\\log_2 10=3.3\\) doubling times, about 5 to 6 extra days. Why: logarithm: exponential growth makes improvements in measurement pay off slowly.' }],
          worked: {
            title: 'How long is the forecast useful?',
            steps: ['Initial error 2% of natural variability, doubling time 1.75 days: \\(t=1.75\\times\\log_2(1/0.02)=1.75\\times5.64=9.9\\) days.', 'Halve the initial error to 1%: \\(1.75\\times6.64=11.6\\) days, a gain of 1.75 days.', 'Cut it to 0.1%: 17.4 days.'],
            answer: 'Models and observations have improved, so skill now extends about a day further every decade; but the doubling-time argument says a hard limit exists near 2 weeks for synoptic weather. Thunderstorm-scale details are predictable only for hours.',
          },
        },
        {
          t: 'plot',
          title: 'Error growth in a chaotic forecast',
          x: [0, 16],
          y: [0, 1.05],
          xLabel: 'forecast lead time (days)',
          yLabel: 'error as a fraction of natural variability',
          curves: [
            { f: (t: number) => Math.min(1, 0.02 * Math.pow(2, t / 1.75)), label: 'initial error 2%' },
            { f: (t: number) => Math.min(1, 0.005 * Math.pow(2, t / 1.75)), label: 'initial error 0.5%', dashed: true },
          ],
          hlines: [{ y: 1, label: 'no skill beyond climatology' }],
          caption: 'The curves rise exponentially and then saturate. A 4-fold better starting state buys only about 3.5 days of useful forecast.',
        },
      ],
    },
    {
      id: 'ens',
      title: 'Ensembles and probabilities',
      lead: 'Embracing uncertainty.',
      blocks: [
        { t: 'p', text: 'An **ensemble forecast** runs the model many times (about 20 to 50 members) from slightly different starting states and with varied model physics. If the members stay together, the forecast is confident; if they spread apart, it is uncertain. The proportion of members that show rain gives a probability. A reliable ensemble produces probabilities that match how often events occur: when it says "70% chance of heavy rain", it should rain on about 70% of those occasions. Operational centres such as ECMWF (51 members) and the UK Met Office run global ensembles, and regional high-resolution ensembles are being introduced for short-range forecasts.' },
        {
          t: 'table',
          head: ['Phrase', 'What it means', 'What it does not mean'],
          rows: [
            ['"30% chance of rain"', 'At any given point in the forecast area, there is a 30% chance of measurable rain (usually ≥ 0.2 mm) in the period', 'That 30% of the area will get rain, or that it will rain for 30% of the time'],
            ['"Isolated thundery showers"', 'Scattered storms in some areas; many places stay dry', 'That the whole island will be wet'],
            ['"Heavy rain expected"', 'A high chance that rain exceeds a threshold somewhere in the area', 'That every place will receive it'],
            ['Ensemble spread', 'A measure of uncertainty', 'An error bar on the truth'],
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Use probabilities for decisions', text: 'If the cost of getting wet is low and the cost of cancelling an outdoor event is high, you might go ahead at 40%. If the cost is high (a long open-water swim, a rooftop event), you might prepare at 20%. The right threshold depends on your own costs and losses.' },
      ],
    },
    {
      id: 'trop',
      title: 'Why the tropics are hard',
      lead: 'Convection rules.',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Small, fast storms', tag: 'scale', body: 'Tropical thunderstorms are a few kilometres to tens of kilometres across and last under an hour; their exact location is nearly unpredictable beyond a few hours.' },
            { title: 'Weak balance constraints', tag: 'dynamics', body: 'With little Coriolis force, the large-scale wind and pressure fields are not tightly linked, so errors in one are not corrected by the other, and data assimilation is less effective.' },
            { title: 'Convection schemes', tag: 'physics', body: 'The behaviour of coarse models depends strongly on how convection is parametrised; errors in the diurnal cycle of rain are common.' },
            { title: 'Sparse observations', tag: 'data', body: 'Fewer radiosondes over the oceans and the Maritime Continent; satellites and radar fill in, but there are gaps in knowledge of moisture.' },
          ],
        },
        { t: 'p', text: 'Forecasting strategy in the tropics combines the models (especially convection-permitting and ensemble products) with observations: radar, satellite, lightning and surface data in nowcasting systems. For Singapore this means the long-lead forecast gives the general pattern (a wet spell, a dry spell, an active monsoon surge) while the 2-hour nowcast tells you where it will rain this afternoon.' },
      ],
    },
  ],
  sources: [
    'Lorenz, E. N. (1963). Deterministic nonperiodic flow. *Journal of the Atmospheric Sciences*, 20(2).',
    'Bauer, P., Thorpe, A. & Brunet, G. (2015). The quiet revolution of numerical weather prediction. *Nature*, 525.',
    'Palmer, T. N. (2019). The ECMWF ensemble prediction system: looking back (more than) 25 years and projecting forward 25 years. *Quarterly Journal of the Royal Meteorological Society*, 145(S1).',
    'Zhang, F. et al. (2019). What is the predictability limit of midlatitude weather? *Journal of the Atmospheric Sciences*, 76(4).',
    'Meteorological Service Singapore and Centre for Climate Research Singapore: SINGV, Singapore’s numerical weather prediction system (ccrs.weather.gov.sg).',
  ],
  related: ['weather/charts-and-forecasts/forecast-skill', 'weather/charts-and-forecasts/radar-and-satellite', 'weather/singapore/forecasts-and-warnings', 'finance/quant/random-walks-and-gbm'],
}

export default guide
