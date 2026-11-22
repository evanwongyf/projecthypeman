import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Qualifying asks one question: how fast can this car go for a single lap, on fresh soft tyres, with almost no fuel? The answer sets the grid, and at some circuits it nearly settles the race. A good lap starts well before the timing line, with tyre and brake preparation, a gap in traffic and the right moment in a session where the track is getting faster all the time.',
  nutshell: [
    'As of the 2022–2025 rules with 20 cars: **Q1** (18 min) drops five, **Q2** (15 min) drops five more, **Q3** (12 min) decides the top ten.',
    'A qualifying run is an **out-lap** to bring tyres and brakes into their window, a **push lap**, and a cool-down lap.',
    '**Track evolution**: rubber builds up and times fall through a session, so the last runs are usually the fastest, but late runs risk being ruined by a yellow or red flag.',
    'Low fuel is worth seconds: at a rule-of-thumb 0.03 s per kg per lap, 90 kg less fuel is about **2.7 s** a lap.',
    'Pole matters most where passing is hardest (Monaco, Singapore, Hungary) and least where the tow and DRS are strong (Monza, Spa, Bahrain).',
  ],
  sections: [
    {
      id: 'format',
      title: 'The format',
      blocks: [
        {
          t: 'table',
          head: ['Session', 'Length', 'Cars at start', 'Eliminated', 'Sets grid'],
          rows: [
            ['Q1', '18 min', '20', '5 slowest', 'P16–P20'],
            ['Q2', '15 min', '15', '5 slowest', 'P11–P15'],
            ['Q3', '12 min', '10', 'none', 'P1–P10'],
          ],
          caption: 'The format of the 2022–2025 seasons. With 22 cars from 2026, more drop out in the early sessions; check the current rules. Sprint qualifying used shorter sessions (12, 10 and 8 minutes in 2023–2025).',
        },
        {
          t: 'terms',
          items: [
            { term: 'Parc fermé', def: 'From the start of qualifying the car’s set-up is essentially frozen until the race, so the team must choose a set-up that works for one lap and for the race. See [the race weekend](@sports/f1/rules-penalties/race-weekend-and-points).' },
            { term: '107% rule', def: 'A driver slower than 107% of the fastest Q1 time may need the stewards’ permission to start. On a 90 s lap that is 96.3 s.' },
            { term: 'Lap deletion', def: 'A lap on which the driver exceeded track limits, or which was set under yellow flags without slowing, is deleted.' },
            { term: 'Tyre rule', def: 'Until 2021 the top ten had to start the race on the tyres they used in Q2; since 2022 every driver has a free choice of starting tyre.' },
            { term: 'Engine modes', def: 'Since late 2020 the FIA has required power units to use essentially the same combustion mode in qualifying and the race, ending special high-power “quali modes”.' },
          ],
        },
      ],
    },
    {
      id: 'the-lap',
      title: 'Anatomy of a qualifying run',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Leave the garage at the right moment', body: 'Teams time the release to find a gap: a few seconds behind the car in front is enough to avoid its dirty air but may be close enough for a tow on a long straight.' },
            { title: 'Out-lap', body: 'Bring the tyre surface and core into the operating window and warm the brakes, while harvesting energy so the battery is full. Too slow and the tyres are cold; too fast and they overheat before the lap.' },
            { title: 'Final corner and start line', body: 'Get the best exit onto the straight: the lap starts at the line, but the speed is carried from the last corner.' },
            { title: 'Push lap', body: 'Every corner at the limit, with full energy deployment. Soft tyres often give their best grip for only one lap, sometimes less at hot, high-energy tracks.' },
            { title: 'Cool-down lap', body: 'Lift-and-coast to cool tyres and brakes, and stay out of the way of others on push laps; impeding brings grid penalties.' },
          ],
        },
        {
          t: 'math',
          tex: String.raw`T_{\text{ideal}} = \sum_{i=1}^{3} \min\left(S_i\right)`,
          caption: 'The theoretical best lap: add the driver’s best time in each sector, from any lap.',
          where: [
            { sym: 'S_i', def: 'Times in sector i across all the driver’s laps' },
            { sym: String.raw`\min`, def: 'The smallest (fastest) value' },
          ],
          syntax: [
            { sym: String.raw`\sum_{i=1}^{3}`, say: '“the sum from i equals 1 to 3”: add up the three terms' },
            { sym: String.raw`\min(S_i)`, say: '“the minimum of S-i”: the best time in sector i' },
          ],
          worked: {
            title: 'How much was left on the table?',
            steps: [
              String.raw`Best sectors: S1 = 28.412 s, S2 = 33.105 s, S3 = 25.890 s.`,
              String.raw`\(T_{\text{ideal}} = 28.412 + 33.105 + 25.890 = 87.407\) s.`,
              String.raw`Best actual lap: 87.552 s. Difference: \(87.552 - 87.407 = 0.145\) s.`,
            ],
            answer: 'The driver left about 0.15 s on the table. Timing screens show the best sector by any driver in purple and a personal best in green, which is how engineers spot where time is being lost.',
          },
        },
        {
          t: 'example',
          title: 'How small a tenth is',
          lines: [
            { label: 'Lap', text: 'A 5.3 km lap in 90 s averages 5,300 ÷ 90 ≈ 58.9 m/s.' },
            { label: '0.1 s', text: '0.1 × 58.9 ≈ 5.9 m, a little over one car length.' },
            { label: 'Share', text: '0.1 ÷ 90 ≈ 0.11% of the lap.' },
            { label: 'Reality', text: 'In a close season the first ten cars can be covered by well under a second; one small mistake at one corner can cost several grid places.' },
          ],
        },
      ],
    },
    {
      id: 'evolution',
      title: 'Track evolution and timing your run',
      blocks: [
        {
          t: 'plot',
          title: 'Times fall as the track rubbers in',
          x: [0, 60],
          y: [87.8, 89.4],
          xLabel: 'minutes of running on the weekend so far',
          yLabel: 'lap time (s)',
          curves: [{ f: (x: number) => 88 + 1.2 * Math.exp(-x / 25), label: 'illustrative evolution' }],
          points: [
            { x: 10, y: 88.8, label: 'early run' },
            { x: 45, y: 88.2, label: 'late run' },
          ],
          caption: 'An illustrative model, 88 + 1.2e^(−t/25) s. Real evolution varies by circuit: big on street tracks and new surfaces, small on circuits used heavily all year. Temperature, wind and rain can outweigh it.',
        },
        {
          t: 'cards',
          items: [
            { title: 'Go late', body: 'The track is fastest at the end. In Q3 most drivers do their final run in the last few minutes, so all of them cross the line just before the flag.' },
            { title: 'But not too late', body: 'If someone crashes or stops, a red or yellow flag can wipe out everyone’s last lap. A driver who banked a good time early is protected; one who did not is exposed.' },
            { title: 'Traffic', body: 'Twenty cars on a short lap compete for clean air on their out-laps. Drivers slow down to make a gap, and a queue forms before the last corner.' },
            { title: 'The tow game', body: 'At a low-downforce track a tow is worth a few tenths, so no one wants to lead. At Monza in 2019 the Q3 cars dawdled so long that most of them failed to start a final lap before the flag.' },
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Deliberate interference is penalised',
          text: 'Stopping or slowing on purpose to bring out yellow flags is treated severely. At Monaco in 2006 Michael Schumacher stopped at Rascasse late in qualifying; the stewards ruled it deliberate, deleted his times and sent him to the back of the grid.',
        },
      ],
    },
    {
      id: 'fuel',
      title: 'Why qualifying is faster than the race',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\Delta T_{\text{fuel}} \approx s \times \Delta m`,
          caption: 'The fuel effect: lap time rises roughly in proportion to fuel mass carried.',
          where: [
            { sym: String.raw`\Delta T_{\text{fuel}}`, def: 'Lap time cost of the extra fuel, in seconds' },
            { sym: 's', def: 'Sensitivity, commonly taken as about 0.03 s per kg per lap; it depends on lap length and layout' },
            { sym: String.raw`\Delta m`, def: 'Extra fuel carried, in kg' },
          ],
          syntax: [
            { sym: String.raw`\approx`, say: '“is approximately”: a rule of thumb, not an exact law' },
            { sym: String.raw`s \times \Delta m`, say: '“s times delta m”: sensitivity times the extra mass' },
          ],
          worked: {
            title: 'Low fuel against a full race load',
            steps: [
              String.raw`Qualifying with roughly 10 kg; race start with roughly 100 kg: \(\Delta m = 90\) kg.`,
              String.raw`\(\Delta T = 0.03 \times 90 = 2.7\) s per lap.`,
              String.raw`At 0.035 s/kg the cost would be \(3.15\) s, so the answer is “roughly three seconds”.`,
            ],
            answer: 'Fuel alone explains most of the gap between a pole time and an opening race lap. Add soft tyres at their peak and full battery deployment, and qualifying laps are the fastest of the weekend.',
          },
        },
        {
          t: 'p',
          text: 'Set-up adds a twist. Parc fermé means the qualifying set-up is also the race set-up, so a team might give up a tenth in qualifying for a car that is kinder to its tyres over a race distance. See [how a circuit shapes the car](@sports/f1/circuits/circuit-setup-and-characteristics).',
        },
      ],
    },
    {
      id: 'value-of-pole',
      title: 'What pole is worth',
      blocks: [
        {
          t: 'table',
          head: ['Circuit', 'Overtaking', 'Value of pole', 'Why'],
          rows: [
            ['Monaco', 'Very hard', 'Very high', 'Narrow, slow, no real overtaking straight; races often decided on Saturday or in the pits'],
            ['Marina Bay (Singapore)', 'Hard', 'High', 'Street circuit with walls and high tyre temperatures in pursuit'],
            ['Hungaroring', 'Hard', 'High', 'Twisty, dusty off-line, one main straight'],
            ['Monza', 'Easier', 'Lower', 'Long straights, strong tow; pole can be passed at the start'],
            ['Spa', 'Easier', 'Lower', 'Long run from La Source to Les Combes'],
            ['Bahrain', 'Easier', 'Lower', 'Several long straights and heavy braking zones'],
          ],
          caption: 'General patterns; weather, safety cars and car performance change every race.',
        },
        {
          t: 'example',
          title: 'The grid in metres',
          lines: [
            { label: 'Grid slots', text: 'Grid positions are staggered, about 8 m apart, so the car directly behind on the same side is about 16 m back.' },
            { label: 'Clean side', text: 'The racing line has more rubber; the off-line side can be dusty and give less grip off the start. Sometimes P3 on the clean side starts better than P2.' },
            { label: 'Run to turn 1', text: 'A long run to the first corner (Barcelona, Monza) lets the car behind use the tow; a short one (Monaco) favours pole.' },
          ],
        },
        {
          t: 'dodont',
          do: [
            'Bank a safe lap early in each session before going for the big one.',
            'Watch sector colours on the timing screen to see where a driver is gaining.',
            'Expect bigger improvements late in a session at street circuits.',
          ],
          dont: [
            'Compare a qualifying time with race laps: fuel and tyres differ by seconds.',
            'Assume pole means victory: at Monza or Spa it often does not.',
            'Back off on the racing line during a cool-down lap; impeding a car on a push lap brings a grid penalty.',
          ],
        },
      ],
    },
    {
      id: 'practice',
      title: 'Practice',
      blocks: [
        {
          t: 'example',
          title: 'Questions with answers',
          lines: [
            { label: 'Q1', text: 'Best sectors 22.310, 30.874 and 21.006 s; best lap 74.402 s. How much was left?' },
            { label: 'A1', text: '22.310 + 30.874 + 21.006 = 74.190 s; 74.402 − 74.190 = 0.212 s.' },
            { label: 'Q2', text: 'The pole time is 80.000 s. What is the 107% cut-off?' },
            { label: 'A2', text: '1.07 × 80.000 = 85.600 s (strictly, the rule uses the fastest Q1 time).' },
            { label: 'Q3', text: 'At 0.03 s/kg, what does carrying 20 kg extra cost per lap?' },
            { label: 'A3', text: '0.6 s.' },
            { label: 'Q4', text: 'On a 3.3 km lap of 72 s, how many metres is 0.1 s?' },
            { label: 'A4', text: 'Average speed 3,337 ÷ 72 ≈ 46.3 m/s, so about 4.6 m.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'FIA. *Formula 1 Sporting Regulations*, 2022–2025 editions (qualifying, parc fermé, 107% rule).',
    'FIA technical directive on power unit operating modes (2020).',
    'Official F1 timing and stewards’ decisions for the sessions cited.',
  ],
  related: [
    'sports/f1/rules-penalties/race-weekend-and-points',
    'sports/f1/racecraft/race-strategy',
    'sports/f1/racecraft/overtaking-and-defending',
    'sports/f1/physics-theory/tyres-grip',
    'sports/f1/circuits/street-vs-permanent',
    'sports/f1/circuits/circuit-setup-and-characteristics',
  ],
}

export default guide
