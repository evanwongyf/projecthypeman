import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'An F1 car is not one car but a family of set-ups. The same chassis is trimmed for Monza with skinny wings and for Monaco with the biggest wings the team owns, and its springs, ride height, brakes and cooling all change with the track. That is why a team can win one weekend and struggle the next.',
  nutshell: [
    'The biggest set-up choice is **downforce level**: more wing means faster corners but slower straights, and every circuit has its own best compromise.',
    'Top speed falls only with the **cube root** of drag, so a small cut in drag buys a modest but valuable gain in top speed.',
    'Bumps and kerbs push teams to raise **ride height** and soften suspension, which costs floor downforce on a ground-effect car.',
    '**Tyre wear** depends on the energy a track puts through the tyres: long fast corners and abrasive asphalt are hardest.',
    'Brakes, cooling and engine deployment are tuned per track too; **altitude** (Mexico City) thins the air and changes all of them.',
    'A car with a narrow operating window can be quick at one type of track and lost at another.',
  ],
  sections: [
    {
      id: 'downforce-level',
      title: 'High downforce versus low drag',
      blocks: [
        { t: 'p', text: 'Downforce and drag come from the same wings and floor (see [downforce and aerodynamics](@sports/f1/physics-theory/downforce-aerodynamics)). Adding wing angle lets the car corner faster but slows it on the straights. A track with many slow and medium corners rewards wing; a track with long straights and few corners rewards cutting it.' },
        {
          t: 'plot',
          title: 'Choosing a wing level (illustrative)',
          x: [0, 10],
          y: [0, 3],
          xLabel: 'downforce level (low to high)',
          yLabel: 'lap time lost vs best (s)',
          curves: [
            { f: (x: number) => Math.min(3, 0.05 * (x - 2.5) * (x - 2.5)), label: 'Monza-type track', color: '#3b6fd8' },
            { f: (x: number) => Math.min(3, 0.06 * (x - 9) * (x - 9)), label: 'Monaco-type track', color: '#e07b2a' },
          ],
          points: [
            { x: 2.5, y: 0, label: 'best for Monza' },
            { x: 9, y: 0, label: 'best for Monaco' },
          ],
          caption: 'A schematic, not measured data: each circuit has its own optimum where the corner time gained by more downforce equals the straight-line time lost to drag. The curves are shallow near the optimum, so being slightly off costs little; being far off costs a lot.',
        },
        {
          t: 'table',
          head: ['Level', 'Typical tracks', 'What the car looks like'],
          rows: [
            ['Very low', 'Monza; often Las Vegas', 'Special thin rear wing, minimal flap angle'],
            ['Low to medium', 'Spa, Baku, Jeddah', 'Trimmed wings; Spa balances a fast middle sector against long straights'],
            ['Medium', 'Silverstone, Suzuka, COTA, Bahrain', 'Standard wings; efficiency matters most'],
            ['High', 'Hungaroring, Zandvoort, Barcelona', 'Larger wings, more flap angle'],
            ['Maximum', 'Monaco, Marina Bay, Mexico City', 'The biggest wings available; Mexico because thin air cuts downforce'],
          ],
          caption: 'Groupings are typical, not fixed: teams’ choices vary by year, car and weather.',
        },
        {
          t: 'math',
          tex: String.raw`P = \tfrac{1}{2}\,\rho\,C_D A\,v^3 \quad\Rightarrow\quad v_{\max} = \left(\frac{2P}{\rho\,C_D A}\right)^{1/3}`,
          caption: 'At top speed nearly all engine power goes into pushing air aside (rolling resistance ignored). Because power needed grows with the cube of speed, top speed grows only with the cube root of power divided by drag.',
          where: [
            { sym: 'P', def: 'Power delivered to the wheels, in watts' },
            { sym: '\\rho', def: 'Air density, about 1.225 kg/m³ at sea level' },
            { sym: 'C_D A', def: 'Drag coefficient times frontal area: the car’s drag area, which wing level changes' },
            { sym: 'v_{\\max}', def: 'Top speed, where power available equals power absorbed by drag' },
          ],
          syntax: [
            { sym: '\\rho', say: '“rho”: the Greek letter for density' },
            { sym: 'v^3', say: '“v cubed”: speed times speed times speed' },
            { sym: '(\\ldots)^{1/3}', say: '“to the one-third”: take the cube root' },
            { sym: '\\Rightarrow', say: '“which gives”: rearrange the first equation into the second' },
          ],
          worked: {
            title: 'What 10% more drag costs',
            steps: [
              String.raw`Start: a car tops out at \(340\) km/h. Add wing so that \(C_D A\) rises by \(10\%\), power unchanged.`,
              String.raw`New top speed scales by \((1/1.1)^{1/3} = 1.1^{-1/3} \approx 0.9687\).`,
              String.raw`\(340 \times 0.9687 \approx 329\) km/h.`,
              String.raw`The other way round: going from \(300\) to \(330\) km/h needs \((330/300)^3 = 1.1^3 \approx 1.33\) times the power, a third more, for a 10% gain.`,
            ],
            answer: 'Ten per cent more drag costs about 11 km/h at the top end. That is why low-drag set-ups are worth so much at Monza, and why big gains in top speed are so expensive in power.',
          },
        },
      ],
    },
    {
      id: 'mechanical',
      title: 'Ride height, suspension and kerbs',
      blocks: [
        { t: 'p', text: 'A ground-effect floor makes the most downforce when it runs close to the road and stays at a steady height. But the floor must not strike the track too hard (the plank underneath is measured for wear after the race), and the car must ride kerbs and bumps without bouncing. Each circuit pulls this compromise a different way. See [brakes and suspension](@sports/f1/physics-theory/brakes-and-suspension).' },
        {
          t: 'cards',
          items: [
            { title: 'Smooth, fast tracks', body: 'Silverstone and Suzuka let teams run low and stiff for maximum floor downforce, though the fastest corners load the springs heavily.', tag: 'run low' },
            { title: 'Bumpy tracks', body: 'Street circuits, and some permanent tracks with ageing asphalt, force a higher, softer car. Downforce is given away to keep the floor working at all.', tag: 'raise it' },
            { title: 'Kerb-heavy tracks', body: 'Where the fast line rides chicane kerbs (Monza, Montréal, Singapore), the car needs compliance to bounce over them and land straight.', tag: 'soften it' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'Porpoising', text: 'Ground-effect cars can bounce at high speed when the floor gets close to the road, loses downforce, rises, regains it and is sucked back down. Teams counter it with stiffer suspension and higher ride heights, which costs downforce. How badly a car suffers varies by track.' },
      ],
    },
    {
      id: 'tyres',
      title: 'Tyre wear by track',
      blocks: [
        { t: 'p', text: 'Pirelli brings three of its dry compounds to each event, chosen for that track: harder ones for high-energy circuits, softer ones where the tyres are worked gently. Wear comes from **energy**: the sideways and fore-aft forces times the distance the tyre slides. See [tyres: compounds, grip and degradation](@sports/f1/physics-theory/tyres-grip).' },
        {
          t: 'table',
          head: ['Track feature', 'Effect on tyres', 'Examples'],
          rows: [
            ['Long, fast corners', 'Heavy lateral load for seconds at a time; high temperature and wear, especially on the outside front', 'Silverstone, Suzuka, Barcelona turn 3'],
            ['Abrasive asphalt', 'Rough surface tears at the rubber', 'Bahrain, Losail'],
            ['Traction zones', 'Rear wear from wheelspin out of slow corners', 'Bahrain, Montréal'],
            ['Smooth, slow track', 'Low wear, but tyres can be hard to bring up to temperature', 'Monaco'],
            ['Cold conditions', 'Graining: rubber tears and rolls up on the surface', 'Las Vegas'],
            ['Heat', 'Overheating and blistering', 'Marina Bay, Hungaroring in summer'],
          ],
        },
        { t: 'callout', tone: 'tip', title: 'One-stop or two-stop', text: 'A track that is gentle on tyres and has a long pit-lane time loss tends towards fewer stops; a hard-on-tyres track with a short pit lane invites more. See [race strategy](@sports/f1/racecraft/race-strategy).' },
      ],
    },
    {
      id: 'brakes-cooling-power',
      title: 'Brakes, cooling, power and altitude',
      blocks: [
        {
          t: 'list',
          items: [
            '**Brakes:** tracks with repeated stops from very high speed (Monza, Montréal, Baku) are hardest on brakes, so teams open up brake ducts for cooling; at Monaco and Singapore the stops are frequent but slower.',
            '**Cooling:** hot races (Bahrain, Singapore, Hungary) need bigger cooling openings in the bodywork, which add drag; cool races let teams close them.',
            '**Energy:** circuits with long straights and few heavy braking zones are hard on the battery, because there is little chance to recover energy under braking. This matters more from 2026, when electrical power makes up a much larger share of the total.',
            '**Gearing:** teams nominate their gear ratios for the season rather than per race, so the top gear must work at every track.',
          ],
        },
        {
          t: 'math',
          tex: String.raw`\frac{F_{\text{high altitude}}}{F_{\text{sea level}}} = \frac{\rho_{\text{high altitude}}}{\rho_{\text{sea level}}}`,
          caption: 'Downforce and drag are both proportional to air density, so with the same wings at the same speed the car makes less of both in thin air.',
          where: [
            { sym: 'F', def: 'An aerodynamic force (downforce or drag) at a given speed and wing setting' },
            { sym: '\\rho', def: 'Air density in kg/m³' },
          ],
          syntax: [
            { sym: '\\frac{a}{b}', say: '“a over b”: the ratio, here how much of the sea-level force is left' },
            { sym: '\\rho_{\\text{sea level}}', say: '“rho at sea level”: the subscript names the place' },
          ],
          worked: {
            title: 'Mexico City, about 2,240 m above sea level',
            steps: [
              String.raw`Standard-atmosphere density at sea level: \(\rho_0 \approx 1.225\) kg/m³.`,
              String.raw`At about \(2{,}240\) m the standard atmosphere gives \(\rho \approx 0.98\) kg/m³.`,
              String.raw`Ratio: \(0.98 / 1.225 \approx 0.80\).`,
              String.raw`So roughly \(20\%\) less downforce and \(20\%\) less drag for the same wing at the same speed.`,
            ],
            answer: 'Teams fit their highest-downforce wings in Mexico and still have less grip than at Monaco, yet reach high top speeds because drag is low. Thin air also cools brakes, engines and turbos less well.',
          },
        },
      ],
    },
    {
      id: 'operating-window',
      title: 'Why the order changes from track to track',
      blocks: [
        {
          t: 'example',
          title: 'The same two cars at two circuits (a typical pattern)',
          lines: [
            { label: 'Car A', text: 'An efficient, low-drag concept with a stiff platform. Strong at Monza and Baku, fine at Silverstone.' },
            { label: 'Car B', text: 'Generates lots of downforce at low speed and rides kerbs well. Strong at Monaco, Singapore and Hungary.' },
            { label: 'At Monza', text: 'Car A wins the straights by several km/h; Car B cannot run its best wing without losing top speed.' },
            { label: 'At Monaco', text: 'Car B carries more speed through the slow corners; Car A’s efficiency barely matters.' },
            { label: 'Lesson', text: 'Read a team’s result against the type of track. A win at one extreme says little about the other.' },
          ],
        },
        {
          t: 'dodont',
          do: [
            'Classify each track by its downforce level, tyre energy and braking severity before predicting results.',
            'Watch speed-trap figures to see which teams have trimmed for straights.',
            'Remember that weather and temperature move the best set-up during a weekend.',
          ],
          dont: [
            'Assume the fastest car on the straights has the most power; it may just be running less wing.',
            'Expect set-up changes freely after qualifying: parc fermé rules lock most of the set-up once qualifying begins.',
            'Forget altitude when comparing Mexico City with other tracks.',
          ],
        },
        {
          t: 'example',
          title: 'Check yourself',
          lines: [
            { label: 'Q1', text: 'Why might a team bring a special rear wing just for Monza?' },
            { label: 'A1', text: 'Monza spends so long at full throttle that cutting drag is worth more than the corner speed it gives up.' },
            { label: 'Q2', text: 'A car is 4% short on drag-limited top speed. Roughly how much more power would close the gap with the same drag?' },
            { label: 'A2', text: String.raw`About \(1.04^3 \approx 1.12\) times the power, so roughly 12% more.` },
          ],
        },
      ],
    },
  ],
  sources: [
    'Katz, J. (2006). *Race Car Aerodynamics: Designing for Speed* (2nd ed.). Bentley Publishers.',
    'Milliken, W. F. and Milliken, D. L. (1995). *Race Car Vehicle Dynamics*. SAE International.',
    'Pirelli Motorsport. Pre-race tyre compound previews (published per event).',
    'FIA. *Formula 1 Technical and Sporting Regulations*.',
  ],
  related: [
    'sports/f1/physics-theory/downforce-aerodynamics',
    'sports/f1/physics-theory/tyres-grip',
    'sports/f1/physics-theory/brakes-and-suspension',
    'sports/f1/circuits/iconic-circuits',
    'sports/f1/circuits/street-vs-permanent',
  ],
}

export default guide
