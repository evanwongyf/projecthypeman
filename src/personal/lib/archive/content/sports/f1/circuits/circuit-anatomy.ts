import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Every Formula 1 circuit is built from the same small kit of parts: straights, corners of a handful of recognisable types, kerbs, run-off, a pit lane and a timing system that slices the lap into sectors. Learn to name the parts and any track map starts to read like a sentence.',
  nutshell: [
    'A lap is a chain of **straights** (where power and drag decide speed) and **corners** (where grip decides speed); most circuits mix slow, medium and fast corners on purpose.',
    'Corner types (hairpin, chicane, sweeper, kink, esses, double apex, banked, off-camber) each ask something different of the car and driver.',
    '**Kerbs** mark the edge of the track and **run-off** (gravel, grass or asphalt) catches cars that leave it; the white lines define track limits.',
    'The lap is split into **three timing sectors** plus many mini-sectors and speed traps, which is how you can tell where a driver gains or loses time.',
    'The **pit lane** is a speed-limited road parallel to the main straight, with its own entry and exit lines and rules.',
    'Overtaking aids sit on chosen straights: DRS zones until 2025, and from 2026 active-aero straight-line mode and an electrical overtake boost.',
  ],
  sections: [
    {
      id: 'straights-and-corners',
      title: 'Straights and corners: the two halves of a lap',
      blocks: [
        { t: 'p', text: 'On a straight the car is limited by **power and drag**: the engine pushes, the air pushes back, and top speed is where they balance. In a corner the car is limited by **grip**: the tyres can only supply so much sideways force, so the tighter the corner, the slower it must be taken. A circuit designer controls the character of a track mainly by choosing how much of the lap is straight and what kinds of corner sit between the straights.' },
        {
          t: 'math',
          tex: String.raw`a_{\text{lat}} = \frac{v^2}{r}`,
          caption: 'The sideways (lateral) acceleration needed to follow a curve of radius \\(r\\) at speed \\(v\\). The tyres, helped by downforce, must supply it, so for a given grip the tighter the curve, the lower the speed.',
          where: [
            { sym: 'a_{\\text{lat}}', def: 'Lateral (sideways) acceleration, in metres per second squared' },
            { sym: 'v', def: 'Speed in metres per second (km/h divided by 3.6)' },
            { sym: 'r', def: 'Radius of the path the car actually follows, in metres' },
          ],
          syntax: [
            { sym: 'a_{\\text{lat}}', say: '“a lat”: acceleration, with the subscript saying which direction (lateral)' },
            { sym: 'v^2', say: '“v squared”: multiply the speed by itself' },
            { sym: '\\frac{v^2}{r}', say: '“v squared over r”: divide the squared speed by the radius' },
          ],
          worked: {
            title: 'A hairpin against a fast sweeper',
            steps: [
              String.raw`Hairpin: \(50\) km/h on a \(15\) m radius. Convert: \(50 / 3.6 \approx 13.89\) m/s.`,
              String.raw`\(a = 13.89^2 / 15 \approx 192.9 / 15 \approx 12.86\) m/s², or \(12.86 / 9.81 \approx 1.3\,g\).`,
              String.raw`Fast sweeper: \(250\) km/h on a \(150\) m radius. Convert: \(250 / 3.6 \approx 69.44\) m/s.`,
              String.raw`\(a = 69.44^2 / 150 \approx 4822 / 150 \approx 32.15\) m/s², or about \(3.3\,g\).`,
            ],
            answer: 'The fast corner demands roughly two and a half times the lateral acceleration of the hairpin. Only downforce, which grows with speed, makes that possible: at hairpin speed the car has little downforce and relies on mechanical grip.',
          },
        },
        { t: 'callout', tone: 'tip', title: 'Read a map by speed, not shape', text: 'Two corners that look equally sharp on a map can be taken at 80 km/h and 250 km/h. The radius, the camber and what comes before and after matter far more than the angle the road turns through.' },
      ],
    },
    {
      id: 'corner-types',
      title: 'The corner types',
      blocks: [
        {
          t: 'table',
          head: ['Type', 'What it is', 'What it asks for', 'Real example'],
          rows: [
            ['Hairpin', 'A turn of around 180° at low speed', 'Hard straight-line braking, good traction on exit', 'Grand Hotel hairpin, Monaco; La Source, Spa'],
            ['Chicane', 'A quick left-right or right-left, often added to slow a straight', 'Riding kerbs, a car that changes direction quickly', 'Variante del Rettifilo, Monza; Bus Stop, Spa'],
            ['Sweeper', 'A long, fast, constant-radius curve', 'Downforce, a stable platform, commitment', 'Parabolica (Curva Alboreto), Monza'],
            ['Kink', 'A slight bend taken flat out', 'Confidence; usually no lift on a dry track', 'Courbe Paul Frère to Blanchimont, Spa'],
            ['Esses', 'A rapid sequence of alternating bends', 'Rhythm: a bad first corner ruins the next three', 'S Curves, Suzuka; Maggotts–Becketts, Silverstone'],
            ['Double apex', 'One long corner with two clipping points', 'Patience: a mid-corner lift or second turn-in', 'Pouhon, Spa'],
            ['Banked', 'The road tilts into the corner', 'Gravity helps the tyres, so speeds rise', 'Hugenholtzbocht and the final turn, Zandvoort'],
            ['Off-camber', 'The road tilts away from the corner', 'Gentle inputs; grip is lower than it looks', 'Several turns at Interlagos and COTA'],
            ['Decreasing radius', 'A corner that tightens as you go round', 'A late turn-in and late apex', 'Common at the end of long sweepers'],
          ],
          caption: 'Corner names are as given on official track maps; turn numbers can change when a layout is revised.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Compression', body: 'Where a descent meets a climb, the car is squashed onto its springs. Eau Rouge into Raidillon at Spa is the famous one: the floor and suspension are loaded heavily for a moment, which is why ride height matters there.', tag: 'elevation' },
            { title: 'Crest', body: 'The opposite: the road falls away and the car goes light, losing grip just as the driver wants to turn or brake. Blind crests make braking points hard to judge.', tag: 'elevation' },
            { title: 'Combination', body: 'Two corners close enough that the line through the first is chosen to suit the second. Drivers often sacrifice the first to gain on the exit of the second.', tag: 'linking' },
            { title: 'Signature corner', body: 'Most great tracks have one corner that defines them: Eau Rouge, 130R, Parabolica, Copse. They are usually fast, because fast corners separate brave, precise drivers from the rest.', tag: 'character' },
          ],
        },
      ],
    },
    {
      id: 'edges',
      title: 'Kerbs, track limits and run-off',
      blocks: [
        { t: 'p', text: 'The racing surface is bounded by **white lines**. Under the sporting regulations a driver is judged to have left the track when no part of the car remains on it; the white lines count as part of the track, the kerbs beyond them do not. Repeated offences bring warnings, lap times deleted and then penalties (see [penalties explained](@sports/f1/rules-penalties/penalties-explained)).' },
        {
          t: 'terms',
          items: [
            { term: 'Flat kerb', def: 'A low, painted strip just outside the line, often in red and white. Drivers use it freely to widen their line.' },
            { term: 'Sawtooth or rumble kerb', def: 'A ridged kerb that shakes the car, discouraging drivers from using too much of it.' },
            { term: 'Sausage kerb', def: 'A raised, rounded block placed further out to stop corner cutting. It can launch a car or damage the floor, so its use is debated.' },
            { term: 'Gravel trap', def: 'Loose stones that slow a car quickly but can trap it, ending the race. Drivers respect it, which helps track limits police themselves.' },
            { term: 'Asphalt run-off', def: 'Paved run-off lets a car slow without digging in or flipping, and lets it rejoin. Safer for some accidents, but it invites drivers to exceed track limits.' },
            { term: 'Barrier', def: 'Armco steel rails, concrete walls, tyre walls and energy-absorbing barriers such as TecPro, chosen for each spot by the expected impact speed and angle.' },
            { term: 'Debris fence', def: 'High mesh fencing that keeps wheels and parts away from spectators.' },
          ],
        },
        {
          t: 'example',
          title: 'Why some tracks went back to gravel',
          lines: [
            { label: 'The problem', text: 'Wide asphalt run-off meant a mistake cost little: drivers ran wide, kept their foot down and rejoined.' },
            { label: 'Policing', text: 'Stewards then had to judge track limits by camera and sensor loop at every corner, producing many deleted lap times.' },
            { label: 'The fix', text: 'Several circuits, Spa among them, have reintroduced gravel at selected corners so that running wide costs time naturally.' },
            { label: 'The trade-off', text: 'Gravel is better at punishing errors but can be worse in some crashes, so each corner is assessed individually by the FIA.' },
          ],
        },
      ],
    },
    {
      id: 'timing',
      title: 'Sectors, speed traps and the timing screen',
      blocks: [
        { t: 'p', text: 'Timing loops buried in the track split each lap into **three sectors**, each in turn divided into many **mini-sectors**. On television and timing apps a sector is coloured **purple** for the fastest of anyone in the session, **green** for a driver’s own best, and **yellow** when slower than their best. **Speed traps** record top speed at fixed points, usually at the end of the longest straight.' },
        {
          t: 'example',
          title: 'Reading a qualifying lap from the sectors',
          lines: [
            { label: 'Driver A', text: 'Purple sector 1, yellow sector 2, green sector 3.' },
            { label: 'Driver B', text: 'Yellow sector 1, purple sector 2, yellow sector 3, highest speed trap figure.' },
            { label: 'Inference', text: 'If sector 2 is mostly corners, Driver B has the better cornering car or the better tyres there; a high speed trap suggests a low-drag set-up.' },
            { label: 'Caution', text: 'Track evolution, traffic and wind can colour a sector on their own, so a single lap proves little.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'Average speed', text: 'Dividing lap length by lap time gives average speed. A Monza lap of about 5.8 km in roughly 81 seconds averages about 257 km/h; Monaco, about 3.3 km in roughly 72 seconds, averages around 167 km/h. The figures change every year, but the gap between the two shows how different circuits can be.' },
      ],
    },
    {
      id: 'pit-lane',
      title: 'The pit lane and the grid',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Pit entry', body: 'A road splitting from the track before the final corner or on the main straight. A solid line marks where drivers must not cross on the way in.' },
            { title: 'Speed limit line', body: 'From here a speed limiter holds the car to the pit-lane limit, typically 80 km/h, lower at tight venues such as Monaco. Exceeding it brings a penalty.' },
            { title: 'Fast lane and working lane', body: 'Garages and pit boxes sit on the working lane; cars travel down the fast lane. Releasing a car into the path of another is an unsafe release.' },
            { title: 'Pit exit', body: 'Another solid line keeps the rejoining car out of the racing line until it is safely up to speed.' },
            { title: 'Safety car lines', body: 'Painted lines near pit entry and exit define where overtaking rules under the safety car begin and end.' },
          ],
        },
        { t: 'p', text: 'The **pit-lane time loss** (how much longer it takes to drive through the pits and stop than to stay out) shapes strategy at every track. It is short where the pit lane is short and the limit high, and long where it is the opposite, which is one reason some races are one-stop and others two-stop. See [race strategy](@sports/f1/racecraft/race-strategy).' },
        { t: 'p', text: 'The **grid** sits on the main straight in staggered pairs, 8 m apart under the current regulations. Pole position is usually on the side of the racing line into turn 1, where the rubbered-in surface gives more grip at the start.' },
      ],
    },
    {
      id: 'overtaking-zones',
      title: 'Overtaking zones: from DRS to active aero',
      blocks: [
        { t: 'p', text: 'From 2011 to 2025 a following car within one second at a detection point could open its rear-wing flap in a marked **DRS zone**, cutting drag on that straight. The 2026 regulations replace DRS with **active aerodynamics**: movable front and rear wing elements that all cars switch to a low-drag mode on designated straights, plus an extra electrical deployment for a car close behind. The mechanics are covered in [DRS and overtaking](@sports/f1/physics-theory/drs-overtaking).' },
        {
          t: 'dodont',
          do: [
            'Look for the longest straight followed by a heavy braking zone: that is where most passes happen.',
            'Notice where the zones are placed: designers put them where they expect passing to be possible but not automatic.',
            'Check pit-lane length and speed limit when predicting strategy.',
          ],
          dont: [
            'Assume a long track means more overtaking: Monaco is short and impossible to pass on, Spa long and easy, but length is not the reason.',
            'Treat kerbs as part of the track for track limits; the white line is the edge.',
            'Compare sector times between different circuits; sectors are drawn differently at each.',
          ],
        },
      ],
    },
    {
      id: 'practice',
      title: 'Check yourself',
      blocks: [
        {
          t: 'example',
          title: 'Quick questions, with answers',
          lines: [
            { label: 'Q1', text: 'A chicane is added halfway down a long straight. What happens to top speed and to braking-zone overtaking?' },
            { label: 'A1', text: 'Top speed falls, because the straight is now shorter, but a new heavy braking zone is created, which is often where passes happen.' },
            { label: 'Q2', text: 'Why does a banked corner allow a higher speed for the same tyres?' },
            { label: 'A2', text: 'Part of the car’s weight now pushes towards the centre of the turn, adding to the tyres’ sideways grip.' },
            { label: 'Q3', text: 'A driver’s sector 1 is purple but the lap is still slower than the leader’s. How?' },
            { label: 'A3', text: 'They lost more in sectors 2 and 3 than they gained in sector 1; purple only means fastest in that one sector.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'FIA. *Formula 1 Sporting Regulations* and *International Sporting Code*, Appendix O (circuit standards).',
    'Official F1 circuit guides at formula1.com (lap lengths, corner numbers).',
    'Smith, C. (1978). *Tune to Win*. Aero Publishers.',
  ],
  related: [
    'sports/f1/circuits/tracks-racing-line',
    'sports/f1/circuits/street-vs-permanent',
    'sports/f1/circuits/iconic-circuits',
    'sports/f1/circuits/circuit-setup-and-characteristics',
    'sports/f1/physics-theory/drs-overtaking',
  ],
}

export default guide
