import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Formula 1 looks like twenty cars driving in circles, but every lap is the result of physics (grip, downforce, energy), engineering (power units, brakes, wind tunnels), strategy (tyres and pit stops) and a rulebook that tries to keep it all fair and safe. This shelf takes each of those apart. Start with how a race weekend works, then follow the route below.',
  nutshell: [
    'A standard weekend runs **practice** (Friday and Saturday morning), **qualifying** (Saturday) and the **grand prix** (Sunday). Sprint weekends add a short Saturday race.',
    'Six groups: **physics and theory**, **circuits**, the **circuit atlas** (all 24 tracks on the calendar, mapped and analysed), **drifting**, **rules and penalties**, and **racecraft and strategy**.',
    'The physics pages use real equations with worked numbers: kinetic energy, the friction circle, power = force × speed, thermal efficiency.',
    'Rules change often. Unless a page says otherwise, regulation facts are for the 2022–2025 era; the 2026 rules changed power units and aerodynamics.',
  ],
  sections: [
    {
      id: 'weekend',
      title: 'How a grand prix weekend works',
      blocks: [
        {
          t: 'table',
          head: ['Day', 'Standard weekend', 'Sprint weekend (2024–2025 format)'],
          rows: [
            ['Friday', 'Practice 1 and Practice 2 (60 min each)', 'Practice 1, then Sprint Qualifying'],
            ['Saturday', 'Practice 3, then Qualifying (Q1, Q2, Q3)', 'Sprint (about 100 km), then Qualifying'],
            ['Sunday', 'Grand prix (just over 305 km, or about 260 km at Monaco)', 'Grand prix'],
          ],
          caption: 'A handful of rounds each season use the sprint format. Session lengths and the order have been changed several times; check the current calendar.',
        },
        {
          t: 'steps',
          items: [
            { title: 'Practice', body: 'Teams test set-ups, tyre wear and upgrades, and run long stints on heavy fuel to learn race pace. Drivers learn the circuit’s grip, which changes as rubber builds up.' },
            { title: 'Qualifying', body: 'Three knockout sessions set the grid. Low fuel and soft tyres make these the fastest laps of the weekend. See [qualifying and the perfect lap](@sports/f1/racecraft/qualifying-and-one-lap-pace).' },
            { title: 'Parc fermé', body: 'From qualifying onwards the set-up is largely frozen, so Saturday’s car is Sunday’s car.' },
            { title: 'The race', body: 'Standing start; at least two dry tyre compounds must be used in a dry race, so nearly everyone pits at least once. See [race strategy and pit stops](@sports/f1/racecraft/race-strategy).' },
            { title: 'After the flag', body: 'Cars are weighed and checked; a car that fails can be disqualified. See [technical and financial regulations](@sports/f1/rules-penalties/technical-and-financial-rules).' },
          ],
        },
        {
          t: 'table',
          head: ['Position', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
          rows: [
            ['Grand prix points', '25', '18', '15', '12', '10', '8', '6', '4', '2', '1'],
            ['Sprint points', '8', '7', '6', '5', '4', '3', '2', '1', '–', '–'],
          ],
          caption: 'Points as of 2022–2025. A bonus point for fastest lap (for a top-ten finisher) ran from 2019 to 2024 and was dropped for 2025.',
        },
      ],
    },
    {
      id: 'shelf',
      title: 'What is on this shelf',
      blocks: [
        {
          t: 'cards',
          cols: 3,
          items: [
            { title: 'Physics and theory', tag: '8 pages', body: 'Why an F1 car does what it does: downforce, tyres, the friction circle, power units, brakes and suspension, G-forces, and how teams develop cars.' },
            { title: 'Circuits', tag: '5 pages', body: 'The racing line, the parts of a circuit, street versus permanent tracks, famous circuits and how a track shapes the car’s set-up.' },
            { title: 'Circuit atlas', tag: '26 pages', body: 'Every circuit on the 2026 calendar drawn from real centreline data, with its racing line, corners, sectors, speed and g-force traces and a lap model that explains every number, plus the maths behind it.' },
            { title: 'Drifting', tag: '5 pages', body: 'The sport built on losing grip on purpose: its history, physics, technique and judging, and why it is the opposite of F1 driving.' },
            { title: 'Rules and penalties', tag: '5 pages', body: 'The weekend and points, flags and safety cars, every penalty, how stewards decide, and the technical and financial rules.' },
            { title: 'Racecraft and strategy', tag: '3 pages', body: 'Pit-stop strategy, overtaking and defending, and the single fast lap.' },
          ],
        },
        { t: 'p', text: '**Physics and theory**' },
        {
          t: 'links',
          items: [
            { path: 'sports/f1/physics-theory/downforce-aerodynamics', note: 'Wings, the floor and the downforce–drag trade-off.' },
            { path: 'sports/f1/physics-theory/tyres-grip', note: 'Compounds, operating windows and degradation.' },
            { path: 'sports/f1/physics-theory/friction-circle-and-slip-angle', note: 'The grip budget, understeer and oversteer.' },
            { path: 'sports/f1/physics-theory/drs-overtaking', note: 'Dirty air and the Drag Reduction System.' },
            { path: 'sports/f1/physics-theory/power-units-and-ers', note: 'The hybrid V6, energy recovery and 50% efficiency.' },
            { path: 'sports/f1/physics-theory/brakes-and-suspension', note: 'Megawatt stops and ride-height control.' },
            { path: 'sports/f1/physics-theory/g-forces-safety', note: 'What the driver feels, and the halo.' },
            { path: 'sports/f1/physics-theory/wind-tunnels-and-cfd', note: 'How teams find time, and why testing is rationed.' },
          ],
        },
        { t: 'p', text: '**Circuits**' },
        {
          t: 'links',
          items: [
            { path: 'sports/f1/circuits/tracks-racing-line' },
            { path: 'sports/f1/circuits/circuit-anatomy' },
            { path: 'sports/f1/circuits/street-vs-permanent' },
            { path: 'sports/f1/circuits/iconic-circuits' },
            { path: 'sports/f1/circuits/circuit-setup-and-characteristics' },
          ],
        },
        { t: 'p', text: '**Circuit atlas**' },
        {
          t: 'links',
          items: [
            { path: 'sports/f1/atlas/lap-simulation-maths', note: 'How a map becomes a lap time: every formula, symbol by symbol.' },
            { path: 'sports/f1/atlas/compare-circuits', note: 'All 24 circuits ranked, plotted and drawn at the same scale.' },
            { path: 'sports/f1/atlas/monza', note: 'A sample circuit: the fastest on the calendar.' },
            { path: 'sports/f1/atlas/monaco', note: 'A sample circuit: the slowest.' },
          ],
        },
        { t: 'p', text: '**Drifting**' },
        {
          t: 'links',
          items: [
            { path: 'sports/f1/drift/what-is-drifting' },
            { path: 'sports/f1/drift/drift-physics' },
            { path: 'sports/f1/drift/drift-technique-and-setup' },
            { path: 'sports/f1/drift/drift-competition-and-judging' },
            { path: 'sports/f1/drift/f1-vs-drift', note: 'The bridge back to F1 physics.' },
          ],
        },
        { t: 'p', text: '**Rules and penalties**' },
        {
          t: 'links',
          items: [
            { path: 'sports/f1/rules-penalties/race-weekend-and-points' },
            { path: 'sports/f1/rules-penalties/flags-and-safety-procedures' },
            { path: 'sports/f1/rules-penalties/penalties-explained' },
            { path: 'sports/f1/rules-penalties/stewards-and-protests' },
            { path: 'sports/f1/rules-penalties/technical-and-financial-rules' },
          ],
        },
        { t: 'p', text: '**Racecraft and strategy**' },
        {
          t: 'links',
          items: [
            { path: 'sports/f1/racecraft/race-strategy' },
            { path: 'sports/f1/racecraft/overtaking-and-defending' },
            { path: 'sports/f1/racecraft/qualifying-and-one-lap-pace' },
          ],
        },
      ],
    },
    {
      id: 'route',
      title: 'A suggested route',
      lead: 'Each stage builds on the one before; skip ahead if you already know the basics.',
      blocks: [
        {
          t: 'levels',
          items: [
            { name: '1. The weekend and the rules', body: 'Start with [the race weekend and points](@sports/f1/rules-penalties/race-weekend-and-points) and [flags and safety cars](@sports/f1/rules-penalties/flags-and-safety-procedures), so a broadcast makes sense.' },
            { name: '2. Grip', body: 'Then [tyres](@sports/f1/physics-theory/tyres-grip) and [the friction circle](@sports/f1/physics-theory/friction-circle-and-slip-angle): every other topic depends on how much grip a tyre has.' },
            { name: '3. Air', body: '[Downforce](@sports/f1/physics-theory/downforce-aerodynamics), then [DRS and dirty air](@sports/f1/physics-theory/drs-overtaking), then [wind tunnels and CFD](@sports/f1/physics-theory/wind-tunnels-and-cfd).' },
            { name: '4. The machine', body: '[Power units](@sports/f1/physics-theory/power-units-and-ers), [brakes and suspension](@sports/f1/physics-theory/brakes-and-suspension) and [G-forces and safety](@sports/f1/physics-theory/g-forces-safety).' },
            { name: '5. The track', body: '[The racing line](@sports/f1/circuits/tracks-racing-line), [circuit anatomy](@sports/f1/circuits/circuit-anatomy), then [how a circuit shapes the car](@sports/f1/circuits/circuit-setup-and-characteristics). The [circuit atlas](@sports/f1/atlas/compare-circuits) then lets you see all 24 on one page, and [the lap maths](@sports/f1/atlas/lap-simulation-maths) explains how the numbers are made.' },
            { name: '6. Racing', body: '[Qualifying](@sports/f1/racecraft/qualifying-and-one-lap-pace), [strategy](@sports/f1/racecraft/race-strategy) and [overtaking](@sports/f1/racecraft/overtaking-and-defending), with [penalties](@sports/f1/rules-penalties/penalties-explained) for when it goes wrong.' },
            { name: '7. The other side', body: '[Drifting](@sports/f1/drift/what-is-drifting) ends with [F1 versus drift](@sports/f1/drift/f1-vs-drift), a test of whether the grip ideas have stuck.' },
          ],
          caption: 'Seven stages, from watching to understanding.',
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Short of time?',
          text: 'Read three pages: [tyres](@sports/f1/physics-theory/tyres-grip), [downforce](@sports/f1/physics-theory/downforce-aerodynamics) and [race strategy](@sports/f1/racecraft/race-strategy). Between them they explain most of what decides a race.',
        },
      ],
    },
    {
      id: 'numbers',
      title: 'Numbers worth knowing',
      blocks: [
        {
          t: 'table',
          head: ['Quantity', 'Typical figure', 'Where it is explained'],
          rows: [
            ['Top speed', 'about 320–350 km/h, track-dependent', '[Downforce](@sports/f1/physics-theory/downforce-aerodynamics)'],
            ['Peak braking', 'about 5–6 g', '[Brakes and suspension](@sports/f1/physics-theory/brakes-and-suspension)'],
            ['Peak cornering', 'over 4 g in fast corners', '[G-forces](@sports/f1/physics-theory/g-forces-safety)'],
            ['Energy removed in a big stop', 'about 3 MJ', '[Brakes and suspension](@sports/f1/physics-theory/brakes-and-suspension)'],
            ['Power unit output', 'roughly 1,000 hp combined (2014–2025)', '[Power units](@sports/f1/physics-theory/power-units-and-ers)'],
            ['Thermal efficiency', 'reported above 50%', '[Power units](@sports/f1/physics-theory/power-units-and-ers)'],
            ['Minimum car mass', '798 kg without fuel (2023–2025)', '[Technical rules](@sports/f1/rules-penalties/technical-and-financial-rules)'],
            ['Pit stop (stationary)', 'about 2–3 s for a good stop', '[Race strategy](@sports/f1/racecraft/race-strategy)'],
          ],
          caption: 'Approximate figures for the 2022–2025 era; the 2026 cars are lighter and have a different power unit.',
        },
        {
          t: 'example',
          title: 'A taste of the maths: why speed is so costly',
          lines: [
            { label: 'Kinetic energy', text: 'E = ½mv². An 800 kg car at 320 km/h (88.9 m/s) carries ½ × 800 × 88.9² ≈ 3.16 MJ.' },
            { label: 'Double the speed', text: 'At twice the speed it would carry four times the energy, so the brakes would need four times the work.' },
            { label: 'Power', text: 'Drag grows with v², so the power to overcome it grows with v³: a 1% gain in top speed needs about 3% more power or 3% less drag.' },
            { label: 'Follow up', text: 'See [brakes and suspension](@sports/f1/physics-theory/brakes-and-suspension) and [power units](@sports/f1/physics-theory/power-units-and-ers).' },
          ],
        },
      ],
    },
    {
      id: 'words',
      title: 'Words you will hear on a broadcast',
      blocks: [
        {
          t: 'terms',
          items: [
            { term: 'Undercut / overcut', def: 'Gaining a place by pitting earlier (undercut) or later (overcut) than a rival.' },
            { term: 'Dirty air', def: 'The turbulent wake behind a car, which costs a follower downforce.' },
            { term: 'DRS', def: 'Drag Reduction System, a rear-wing flap a car within a second could open in set zones (2011–2025).' },
            { term: 'Deg', def: 'Tyre degradation: how fast lap times fall away as tyres wear and overheat.' },
            { term: 'Box', def: 'Radio call to come into the pits.' },
            { term: 'Lift and coast', def: 'Lifting off the throttle before the braking point to save fuel or cool the brakes.' },
            { term: 'Purple sector', def: 'The fastest time in that sector by any driver in the session.' },
            { term: 'Track limits', def: 'The white lines at the track edge; a car fully beyond them can have a lap deleted or be penalised.' },
            { term: 'SC / VSC', def: 'Safety car and virtual safety car, which slow the field after an incident.' },
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'About the figures on this shelf',
          text: 'Teams keep most real data secret. Where a page gives numbers, they are either published by the FIA, widely reported, or illustrative values chosen to show realistic orders of magnitude; the page says which. Related science lives on the [sports science shelf](@sports/start-here), especially [drag and fluid dynamics](@sports/physics/drag-fluid-dynamics) and [friction and traction](@sports/physics/friction-traction).',
        },
      ],
    },
  ],
  sources: [
    'FIA. *Formula 1 Sporting Regulations* and *Technical Regulations*, 2022–2025 and 2026 editions.',
    'Formula 1 official website: race weekend format and points explainers.',
  ],
  related: [
    'sports/f1/rules-penalties/race-weekend-and-points',
    'sports/f1/physics-theory/downforce-aerodynamics',
    'sports/f1/physics-theory/friction-circle-and-slip-angle',
    'sports/f1/racecraft/race-strategy',
    'sports/start-here',
  ],
}

export default guide
