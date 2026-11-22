import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'A drift car and a Formula 1 car both live at the limit of tyre grip, but on opposite sides of it. An F1 driver tries to keep every tyre just below its peak slip angle, where it makes the most force; a drift driver pushes the rear tyres far past that peak on purpose. One is chasing time, the other is chasing a judged score, and the physics explains why sliding is never the quick way round.',
  nutshell: [
    'Tyre force peaks at a modest **slip angle**; beyond it the tyre slides and makes less force, so the car corners more slowly.',
    'An F1 car runs its tyres **at or just under the peak**: a small, controlled amount of slip, not a slide.',
    'A drift runs the rear tyres **far beyond the peak**, trading cornering force for angle and spectacle.',
    'Sliding turns energy into **heat and tyre wear** instead of speed, so it costs time and rubber.',
    'F1 cars are also aerodynamic machines: sliding disturbs the airflow under the floor and cuts downforce, making a slide even more costly.',
    'When an F1 car does oversteer, it is usually a brief **snap** that the driver catches, not a held drift.',
  ],
  sections: [
    {
      id: 'two-sides',
      title: 'Two sides of the grip peak',
      blocks: [
        {
          t: 'plot',
          title: 'Where each discipline runs on the grip curve (illustrative)',
          x: [0, 50],
          y: [0, 1.1],
          xLabel: 'tyre slip angle (degrees)',
          yLabel: 'lateral force / peak force',
          curves: [
            { f: (a: number) => Math.sin(1.6 * Math.atan(0.3 * a)), label: 'racing slick (sharper peak)', color: '#3b6fd8' },
            { f: (a: number) => Math.sin(1.9 * Math.atan(0.136 * a)), label: 'road or drift tyre (broader peak)', color: '#e07b2a', dashed: true },
          ],
          shade: [
            { from: 2, to: 6, label: 'F1 working range', color: '#3b6fd8' },
            { from: 25, to: 50, label: 'drift rear tyres', color: '#e07b2a' },
          ],
          caption: 'Schematic curves, not measured data. Racing slicks tend to reach their peak at smaller slip angles than road tyres, and every tyre loses force once well past its peak. The F1 driver lives in the narrow band near the top; a drift car’s rear tyres live far down the right-hand slope.',
        },
        {
          t: 'table',
          head: ['', 'Formula 1', 'Competition drift'],
          rows: [
            ['Goal', 'Minimum lap time', 'Maximum judged score'],
            ['Tyre slip angle', 'Small, near the peak', 'Rear far past the peak; front near peak through counter-steer'],
            ['Body slip angle', 'Small', 'Very large, often near sideways'],
            ['Downforce', 'Very high; essential for speed', 'Minor; most grip is mechanical'],
            ['Oversteer', 'A problem to minimise or catch', 'The point of the exercise'],
            ['Tyre life', 'Managed over a stint', 'Rear tyres consumed in a few runs'],
            ['Driven wheels', 'Rear', 'Rear'],
          ],
        },
      ],
    },
    {
      id: 'speed-cost',
      title: 'Why sliding is slower',
      blocks: [
        { t: 'p', text: 'A car going round a corner needs sideways force equal to \\(m v^2 / r\\). The more force the tyres can make, the faster it can go round. Past the peak, the tyres make less force, so the car must go slower for the same radius, or run wider at the same speed. A drift also points much of the rear tyres’ force across the car rather than towards the centre of the turn.' },
        {
          t: 'math',
          tex: String.raw`v_{\max} = \sqrt{k\,\mu\,g\,R}`,
          caption: 'Maximum speed round a flat corner of radius \\(R\\), where \\(k\\) is the fraction of peak grip the tyres are actually using (1 at the peak, less when sliding). Downforce is ignored here.',
          where: [
            { sym: 'k', def: 'Fraction of the tyres’ peak lateral force achieved (0 to 1)' },
            { sym: '\\mu', def: 'Peak friction coefficient' },
            { sym: 'g', def: 'Gravitational acceleration, 9.81 m/s²' },
            { sym: 'R', def: 'Corner radius, m' },
          ],
          syntax: [
            { sym: '\\sqrt{\\;}', say: '“the square root of”' },
            { sym: 'k\\,\\mu\\,g\\,R', say: '“k mu g R”: multiply all four together' },
          ],
          worked: {
            title: 'A 90° corner of 40 m radius, gripping against sliding',
            steps: [
              String.raw`Gripping at the peak: \(k = 1\), \(\mu = 1.0\). \(v = \sqrt{9.81 \times 40} \approx 19.8\) m/s (about \(71\) km/h).`,
              String.raw`Sliding at \(60\%\) of peak: \(v = \sqrt{0.6} \times 19.8 \approx 15.3\) m/s (about \(55\) km/h).`,
              String.raw`Arc length of a quarter circle: \(\tfrac{\pi}{2} \times 40 \approx 62.8\) m.`,
              String.raw`Times: \(62.8 / 19.8 \approx 3.17\) s gripping; \(62.8 / 15.3 \approx 4.09\) s sliding.`,
            ],
            answer: 'Sliding costs almost a second in a single modest corner. Over a lap of fifteen or twenty corners the drift would be many seconds slower, which is why lap-time racing avoids it.',
          },
        },
        {
          t: 'math',
          tex: String.raw`P_{\text{heat}} = F\,v_{\text{slip}}`,
          caption: 'The power turned into heat at a sliding tyre: friction force times the speed at which rubber slides over the road.',
          where: [
            { sym: 'P_{\\text{heat}}', def: 'Power dissipated as heat and wear, watts' },
            { sym: 'F', def: 'Friction force at the contact patch, N' },
            { sym: 'v_{\\text{slip}}', def: 'Sliding speed of the rubber over the road, m/s' },
          ],
          syntax: [
            { sym: 'F\\,v', say: '“F times v”: force multiplied by speed gives power' },
            { sym: 'v_{\\text{slip}}', say: '“v slip”: the subscript says this is the sliding speed, not the car’s speed' },
          ],
          worked: {
            title: 'Two rear tyres in a drift',
            steps: [
              String.raw`Each rear tyre makes about \(2{,}300\) N sideways, so the pair make \(F \approx 4{,}600\) N.`,
              String.raw`Suppose the rubber slides sideways over the road at \(v_{\text{slip}} \approx 8\) m/s.`,
              String.raw`\(P_{\text{heat}} = 4{,}600 \times 8 = 36{,}800\) W \(\approx 37\) kW.`,
            ],
            answer: 'Roughly 37 kW, around 50 horsepower, goes into heating and shredding the rear tyres and making smoke (simplified: wheelspin adds more). In F1 that energy would be lost speed and ruined tyres; in drifting it is the visible price of style.',
          },
        },
      ],
    },
    {
      id: 'f1-oversteer',
      title: 'When F1 cars do slide',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Snap oversteer', body: 'A sudden loss of rear grip, often in a fast corner or over a bump. The car rotates quickly and the driver has a fraction of a second to catch it with counter-steer. Caught well, it costs a little time; caught late, it ends in the barriers.', tag: 'brief' },
            { title: 'Traction-limited exits', body: 'Out of slow corners, especially in the wet, the rear wheels can spin when the driver applies power. Drivers feed the throttle in to keep the slip small; there is no traction control in modern F1.', tag: 'slow corners' },
            { title: 'Rotation on entry', body: 'Drivers sometimes let the rear move slightly on entry to help the car turn into a slow corner, a small and deliberate amount, not a drift.', tag: 'deliberate' },
            { title: 'Aero instability', body: 'Ground-effect floors need a stable, low platform; a big slide changes the floor’s angle to the airflow and can cost downforce suddenly.', tag: 'downforce' },
          ],
        },
        { t: 'callout', tone: 'myth', title: 'Myth: sliding looks fast, so it is fast', text: 'A sliding car looks dramatic and busy, but the quickest laps often look smooth, even slow, on television. The tyres are working hard, just not past their limit. See [the friction circle and slip angle](@sports/f1/physics-theory/friction-circle-and-slip-angle).' },
        { t: 'callout', tone: 'note', title: 'Rallying sits in between', text: 'On gravel or snow the surface itself shifts, and a sliding car can sometimes be quick by pointing the car early into the corner and using the loose surface. Even there, the fastest drivers use as much slide as needed and no more.' },
      ],
    },
    {
      id: 'shared-skills',
      title: 'What the two share',
      blocks: [
        {
          t: 'list',
          items: [
            '**Feel for the limit:** both read the car through the steering, seat and sound to sense how close the tyres are to the peak.',
            '**Counter-steer reflexes:** an F1 driver catching a snap and a drifter holding angle use the same correction.',
            '**Weight transfer:** both use braking and steering to load or unload axles, F1 to help the car turn, drifting to break grip.',
            '**Precision:** an F1 apex and a drift clipping point both demand centimetre accuracy.',
          ],
        },
        {
          t: 'dodont',
          do: [
            'Think of the grip curve: F1 lives at the top, drifting on the far slope.',
            'Treat oversteer in F1 as lost time, and in drifting as the score.',
            'Remember that downforce makes slides even more costly in F1.',
          ],
          dont: [
            'Assume that because a drift looks controlled it is quick.',
            'Assume F1 drivers never slide: they catch slides constantly.',
            'Try to explore the limit of grip on a public road.',
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Closed courses only', text: 'Both disciplines take place on closed courses with safety systems. Driving beyond the grip limit on public roads is dangerous and illegal.' },
      ],
    },
    {
      id: 'practice',
      title: 'Check yourself',
      blocks: [
        {
          t: 'example',
          title: 'Questions, with answers',
          lines: [
            { label: 'Q1', text: 'A driver slides at 50% of peak grip. By what factor does their maximum corner speed fall?' },
            { label: 'A1', text: String.raw`\(\sqrt{0.5} \approx 0.71\), so about 29% slower through the corner.` },
            { label: 'Q2', text: 'Why is a slide more costly for an F1 car than for a road car?' },
            { label: 'A2', text: 'It loses tyre force past the peak and also disturbs the floor’s airflow, cutting downforce.' },
            { label: 'Q3', text: 'Where does the energy of a drift go?' },
            { label: 'A3', text: 'Mostly into heat, wear and smoke at the sliding rear tyres.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Milliken, W. F. and Milliken, D. L. (1995). *Race Car Vehicle Dynamics*. SAE International.',
    'Pacejka, H. B. (2012). *Tire and Vehicle Dynamics* (3rd ed.). Butterworth-Heinemann.',
    'Smith, C. (1978). *Tune to Win*. Aero Publishers.',
  ],
  related: [
    'sports/f1/drift/drift-physics',
    'sports/f1/physics-theory/friction-circle-and-slip-angle',
    'sports/f1/physics-theory/tyres-grip',
    'sports/f1/physics-theory/downforce-aerodynamics',
    'sports/f1/drift/what-is-drifting',
  ],
}

export default guide
