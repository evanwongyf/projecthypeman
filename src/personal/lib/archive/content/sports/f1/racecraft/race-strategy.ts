import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'An F1 race is, beneath the noise and the overtakes, a continuously re-solved optimisation problem: given current tyre wear, gaps to other cars, fuel load and the chance of a safety car, what is the fastest way to finish? Strategy teams run exactly this calculation, thousands of times over a race weekend, using models much like the one in the interactive lab below.',
  nutshell: [
    'A pit stop costs real time, the stop itself plus time lost entering and leaving the pit lane, commonly totalling somewhere around 20–25 seconds depending on the circuit.',
    'The **undercut**: pitting before a rival, so your fresh, faster tyres gain enough time on their worn ones to emerge ahead once they also stop.',
    'The **overcut**: the opposite, staying out longer than a rival on still-reasonable tyres while they struggle in traffic after their own earlier stop.',
    'A **safety car** can instantly and dramatically change optimal strategy, since every car behind it is temporarily bunched up, making the pit-stop time penalty effectively much smaller.',
  ],
  sections: [
    {
      id: 'the-model',
      title: 'The strategy model',
      blocks: [
        { t: 'sports-viz', viz: 'tyre-strategy' },
        {
          t: 'math',
          tex: String.raw`T_{\text{stint}}(L) = L \cdot b + d \cdot \frac{L(L-1)}{2}`,
          where: [
            { sym: 'L', def: 'Number of laps in the stint' },
            { sym: 'b', def: 'Base (fresh-tyre) lap time for the compound' },
            { sym: 'd', def: 'Degradation: extra seconds added per lap, accumulating lap on lap' },
          ],
          caption: 'The total time for a stint of L laps, an arithmetic series exactly like the one proved in [sequences and series](@mathematics/notation/sequences-series): each lap is a little slower than the last, and summing those small additions gives the familiar \\(\\tfrac{L(L-1)}{2}\\) term.',
        },
        {
          t: 'example',
          title: 'Comparing two strategies for a 56-lap race',
          lines: [
            { label: 'One-stop (e.g. soft → hard)', text: 'fewer pit-stop penalties (1 × ~22s), but the long hard-tyre stint accumulates more total degradation time' },
            { label: 'Two-stop (e.g. soft → medium → medium)', text: 'an extra pit-stop penalty (2 × ~22s), but each stint is shorter, so less total degradation accumulates and average lap times are faster' },
            { label: 'Which wins', text: 'depends entirely on the specific degradation rates (d) for that circuit and that race\'s tyre compounds, explore it directly in the lab above by changing compound and stint length' },
          ],
        },
      ],
    },
    {
      id: 'undercut-overcut',
      title: 'The undercut and the overcut',
      blocks: [
        {
          t: 'flow',
          title: 'The undercut',
          nodes: [
            { label: 'Car B is just behind Car A on track', tone: 'data' },
            { label: 'Car B pits early, onto fresh tyres', sub: 'loses ~22s in the pits', tone: 'process' },
            { label: 'Car B\'s fresh tyres are much faster than A\'s worn ones', sub: 'gains back time every lap', tone: 'model' },
            { label: 'Car A pits a lap or two later', tone: 'process' },
            { label: 'If B gained enough before A pitted, B emerges ahead', tone: 'output' },
          ],
          caption: 'The undercut works because the pace gap between fresh and worn tyres is often large enough, for a few laps, to outweigh the time lost in the pit stop itself, timed well, it can jump a car ahead of a rival without ever actually overtaking them on track.',
        },
        {
          t: 'p',
          text: 'The **overcut** is the mirror image: Car A deliberately stays out past the "ideal" pit lap, hoping their tyres hold up well enough, and that Car B (now on fresh tyres but stuck in traffic, or simply not as fast as hoped) does not gain as much as the undercut model would predict, then A pits later, onto tyres that only need to last the remaining, shorter stint.',
        },
      ],
    },
    {
      id: 'safety-car',
      title: 'Why a safety car changes everything',
      blocks: [
        {
          t: 'p',
          text: 'Under a safety car, the whole field slows and bunches up tightly together. Crucially, the *time* lost driving through the pit lane does not change, but the *track position* lost does, because every car is now close together, pitting under a safety car costs far fewer net positions than pitting during green-flag racing, when a 20+ second real-time penalty can mean losing several places to cars that did not stop.',
        },
        {
          t: 'table',
          head: ['Situation', 'Effective cost of a pit stop'],
          rows: [
            ['Green-flag racing', 'Close to the full real-time pit-lane loss (often 20–25s), usually costing real track positions'],
            ['Behind a safety car', 'Much smaller effective position loss, since the whole field is bunched and slowed, often described as a "free" or heavily discounted pit stop'],
          ],
          caption: 'This single fact is why teams sometimes pit a car the very lap a safety car is deployed, even if that car\'s tyres had plenty of life left, the strategic value of a cheap stop can outweigh the cost of tyres that were not yet due for a change.',
        },
        { t: 'callout', tone: 'fact', title: 'Strategy software exists for exactly this', text: 'Every F1 team runs dedicated race-strategy software, continuously fed live timing, tyre and weather data, that recalculates the optimal remaining strategy in close to real time throughout a race, including running thousands of simulated scenarios for "what if a safety car comes out on lap X". The pit wall engineer\'s job during a race is, in large part, interpreting and acting on exactly this kind of live optimisation.' },
      ],
    },
  ],
  sources: ['Heilmeier, A., et al. (2020). Application of optimal control theory in Formula 1 race strategy development. *International Journal of Automotive Engineering*.', 'FIA. *Formula 1 Sporting Regulations* (pit lane and safety car procedures).'],
  related: ['sports/f1/physics-theory/tyres-grip', 'mathematics/notation/sequences-series', 'sports/f1/physics-theory/drs-overtaking'],
}

export default guide
