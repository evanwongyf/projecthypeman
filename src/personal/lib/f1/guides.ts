// Builds the circuit atlas guides. The prose that is the same for every circuit lives here;
// the numbers in it come from the lap model, so a guide can never disagree with its graphs.

import type { Block, Guide, GuideSection } from '../archive/guide'
import { BASE_SETUP, CIRCUIT_IDS, allSummaries, analyse, featureFor, mmss, ordinal, rankOf, sensitivities, setupForWing, shortName, summary, trackWidth } from './circuits'
import type { Analysis, CornerStats } from './circuits'
import { airDensity, dynamics } from './circuitModel'

const G = 9.81
const f0 = (n: number) => n.toFixed(0)
const f1 = (n: number) => n.toFixed(1)
const f2 = (n: number) => n.toFixed(2)
const f3 = (n: number) => n.toFixed(3)
const km = (m: number) => `${(m / 1000).toFixed(2)} km`
const p = (text: string): Block => ({ t: 'p', text })
const kmh = (v: number) => v * 3.6
const N = CIRCUIT_IDS.length

const KIND_TEXT = { street: 'a street circuit', hybrid: 'a part-street, part-purpose-built circuit', permanent: 'a purpose-built circuit' }
const SPEED_WORD = { slow: 'slow', medium: 'medium-speed', fast: 'fast', flat: 'flat-out' }

const lapsFor = (id: string, length: number) => (id === 'monaco' ? Math.ceil(260000 / length) : Math.ceil(305000 / length))

const range = (list: number[]) => (list.length === 0 ? 'none' : list.length === 1 ? `Turn ${list[0]}` : `Turns ${list[0]}–${list[list.length - 1]}`)

// ── one circuit ───────────────────────────────────────────────────────────

function sectorSection(a: Analysis, k: number): GuideSection {
  const sec = a.sectors[k]
  const lapAvg = a.sim.vAvg
  const inside = a.corners.filter((c) => sec.corners.includes(c.n))
  const straightsHere = a.straights.filter((s) => s.s0 >= sec.s0 && s.s0 < sec.s1)
  const longest = [...straightsHere].sort((x, y) => y.length - x.length)[0]
  const slowest = [...inside].sort((x, y) => x.vApex - y.vApex)[0]
  const fastest = [...inside].sort((x, y) => y.vApex - x.vApex)[0]
  const biggest = [...inside].filter((c) => c.brakeFrom).sort((x, y) => (y.brakeFrom ?? 0) - y.vApex - ((x.brakeFrom ?? 0) - x.vApex))[0]
  const diff = (sec.avgSpeed / lapAvg - 1) * 100
  const parts: string[] = []
  parts.push(
    `Sector ${sec.n} runs from ${km(sec.s0)} to ${km(sec.s1)} and takes about ${f1(sec.time)} s in the model, at an average of ${f0(kmh(sec.avgSpeed))} km/h (${Math.abs(diff) < 1 ? 'about the lap average' : `${f0(Math.abs(diff))}% ${diff > 0 ? 'faster' : 'slower'} than the lap average`}). It contains ${range(sec.corners).toLowerCase()}.`,
  )
  if (slowest && fastest && slowest.n !== fastest.n) parts.push(`The slowest point is Turn ${slowest.n} (${f0(slowest.vApex)} km/h, ${SPEED_WORD[slowest.speed]}); the fastest bend is Turn ${fastest.n} (${f0(fastest.vApex)} km/h).`)
  else if (slowest) parts.push(`Its only real bend is Turn ${slowest.n}, taken at ${f0(slowest.vApex)} km/h.`)
  if (biggest?.brakeFrom) parts.push(`The heaviest stop is for Turn ${biggest.n}: from ${f0(biggest.brakeFrom)} km/h down to ${f0(biggest.vApex)} km/h over about ${f0(biggest.brakeDist)} m.`)
  if (longest) parts.push(`The longest full-throttle run starts at ${km(longest.s0)} and lasts ${f0(longest.length)} m, ending at ${f0(longest.vEnd)} km/h.`)
  const features = (a.notes.features ?? []).filter((f) => sec.corners.includes(f.at[0]))
  const blocks: Block[] = [p(parts.join(' '))]
  if (features.length)
    blocks.push({ t: 'cards', cols: features.length > 2 ? 3 : 2, items: features.map((f) => ({ title: f.name, tag: f.at[0] === f.at[1] ? `Turn ${f.at[0]}` : `Turns ${f.at[0]}–${f.at[1]}`, body: f.note })) })
  blocks.push({ t: 'f1-viz', viz: 'sector', circuit: a.id, sector: sec.n })
  return { id: `sector-${sec.n}`, title: `Sector ${sec.n}`, lead: `${range(sec.corners)} · ${f1(sec.time)} s`, blocks }
}

const worstFirst = (cs: CornerStats[], key: (c: CornerStats) => number) => [...cs].sort((x, y) => key(y) - key(x))

export function circuitGuide(id: string): Guide {
  const a = analyse(id)
  const n = a.notes
  const t = a.track
  const sim = a.sim
  const S = summary(id)
  const idx = CIRCUIT_IDS.indexOf(id)
  const prev = CIRCUIT_IDS[(idx + N - 1) % N]
  const next = CIRCUIT_IDS[(idx + 1) % N]
  const laps = lapsFor(id, t.length)
  const setup = a.setup
  const d = dynamics(setup, sim.rho)
  const downAt250 = (d.kDown * (250 / 3.6) ** 2) / (setup.mass * G)
  const seaLevel = airDensity(0)
  const longest = [...a.straights].sort((x, y) => y.length - x.length)[0]
  const slow = [...a.corners].sort((x, y) => x.vApex - y.vApex)[0]
  const fast = [...a.corners].sort((x, y) => y.vApex - x.vApex)[0]
  const stops = worstFirst(a.corners.filter((c) => c.brakeFrom), (c) => (c.brakeFrom ?? 0) - c.vApex)
  const stop = stops[0]
  const maxLat = S.peakLat

  const insights: string[] = [
    `**Speed.** The model averages ${f0(S.vAvg)} km/h (${ordinal(rankOf(id, (s) => s.vAvg))} fastest of ${N}) and tops out at ${f0(S.vMax)} km/h (${ordinal(rankOf(id, (s) => s.vMax))}), after ${longest ? `its longest full-throttle run of ${f0(longest.length)} m` : 'its longest straight'}.`,
    `**Throttle and brakes.** The car is at full throttle for ${f0(S.fullThrottle)}% of the lap (${ordinal(rankOf(id, (s) => s.fullThrottle))} highest) and braking for ${f1(S.brakingTime)}% of the lap time (${ordinal(rankOf(id, (s) => s.brakingTime))} highest).`,
  ]
  if (slow && fast) insights.push(`**Corners.** The slowest point is Turn ${slow.n} at ${f0(slow.vApex)} km/h and the fastest bend is Turn ${fast.n} at ${f0(fast.vApex)} km/h, a spread of ${f0(fast.vApex - slow.vApex)} km/h.`)
  if (stop?.brakeFrom) insights.push(`**Braking.** The biggest speed shed is before Turn ${stop.n}: ${f0(stop.brakeFrom)} km/h down to ${f0(stop.vApex)} km/h in about ${f0(stop.brakeDist)} m. The hardest braking of the lap is about ${f1(S.peakBrake)} g.`)
  insights.push(`**Cornering force.** The peak sideways force is ${f1(maxLat)} g (${ordinal(rankOf(id, (s) => s.peakLat))} highest), set by how fast the quickest corners are and how much downforce the car has there.`)
  insights.push(
    `**Set-up.** A typical wing level here is ${f2(n.wing)} on a scale from 0 (Monza-skinny) to 1 (Monaco-full), which gives the car about ${f1(downAt250)} times its own weight in downforce at 250 km/h.`,
  )
  if (t.altitude > 300) insights.push(`**Altitude.** At ${f0(t.altitude)} m above sea level the air is ${f0((1 - sim.rho / seaLevel) * 100)}% thinner than at sea level (${f2(sim.rho)} against ${f2(seaLevel)} kg/m³), so the same wings make ${f0((1 - sim.rho / seaLevel) * 100)}% less downforce and drag, and cooling is harder.`)

  const sens = sensitivities(id)
  const best = [...sens].sort((x, y) => x.dt - y.dt)[0]

  const sections: GuideSection[] = [
    {
      id: 'the-circuit',
      title: 'The circuit',
      blocks: [
        p(n.character),
        {
          t: 'callout',
          tone: 'note',
          title: 'How the drawings are made',
          text: 'The outline is traced from public centreline data. From it the lap model works out the racing line (the smoothest path a car can take within the track width), the curvature of that line, and the fastest speed the car can carry at every metre. Everything below is that model\'s output: it is an estimate of an ideal lap, not telemetry from any real car.',
        },
        { t: 'f1-viz', viz: 'map', circuit: id },
        {
          t: 'list',
          items: [
            '**Numbers on the map** are the corners, counted in order from the start line. The official FIA map can number a few bends differently: it can count a gentle kink the traced line does not show, or treat a complex as one turn.',
            '**The coloured line** is the modelled racing line. Switch what colours it to see speed, throttle and brake, corner speed class, sideways g-force or sector.',
            '**S/F** is the start-finish line and the arrows show the direction of travel.',
            `**Sectors** are drawn as thirds of the lap by time (the model's ${f1(a.sectors[0].time)}, ${f1(a.sectors[1].time)} and ${f1(a.sectors[2].time)} s). The official timing lines are set by the FIA and differ a little.`,
            `**Track width** is assumed to be ${trackWidth(id)} m, with a metre of margin each side; this is what the racing line is solved within.`,
          ],
        },
      ],
    },
    {
      id: 'numbers',
      title: 'What the numbers say',
      lead: `${km(t.length)} · ${S.turns} turns · about ${laps} laps in a race · modelled lap ${mmss(sim.lapTime)}`,
      blocks: [
        {
          t: 'cards',
          cols: 3,
          items: [
            { title: 'What kind of circuit', tag: n.kind, body: `${n.name} is ${KIND_TEXT[n.kind]} in ${n.place}.` },
            { title: 'Race distance', tag: `${laps} laps`, body: `A grand prix is run over the smallest number of laps that passes ${id === 'monaco' ? '260' : '305'} km, so ${laps} laps of ${km(t.length)} is about ${f0((laps * t.length) / 1000)} km.` },
            { title: 'Air density', tag: `${f2(sim.rho)} kg/m³`, body: t.altitude > 300 ? `At ${f0(t.altitude)} m the air is thin, which cuts both downforce and drag.` : `At ${f0(t.altitude)} m above sea level the air is close to full density.` },
          ],
        },
        { t: 'list', items: insights },
        { t: 'p', text: '**What decides a lap here**' },
        { t: 'list', items: n.decides },
        ...(a.straights.length
          ? [
              {
                t: 'table' as const,
                head: ['Full-throttle run', 'Starts at', 'Length', 'Speed at the end'],
                rows: [...a.straights].sort((x, y) => y.length - x.length).slice(0, 4).map((s, i) => [i === 0 ? 'Longest' : ordinal(i + 1) + ' longest', km(s.s0), `${f0(s.length)} m`, `${f0(s.vEnd)} km/h`]),
                caption: 'The longest stretches the model has the throttle fully open. These are where the slipstream and electrical deployment matter and, usually, where overtaking happens.',
              },
            ]
          : []),
        ...(id === 'madring' ? [{ t: 'callout' as const, tone: 'warn' as const, title: 'A brand-new circuit', text: 'Madring first appears on the calendar in 2026, so this is the youngest and least-tested drawing here. Its traced outline and numbering are the most likely to need correcting as the real circuit is lapped.' }] : []),
      ],
    },
    sectorSection(a, 0),
    sectorSection(a, 1),
    sectorSection(a, 2),
    {
      id: 'graphs',
      title: 'The lap in graphs',
      lead: 'Speed, pedals, gears, g-force and radius, all against distance.',
      blocks: [
        p('These are the same numbers the map colours show, laid out against distance so you can see how they relate: a dip in the radius graph is a bend, a dip in the speed graph follows it, and the brake trace lights up just before. The sectors are tinted behind each graph.'),
        { t: 'f1-viz', viz: 'traces', circuit: id },
        { t: 'f1-viz', viz: 'gg', circuit: id },
        p('The **g-g diagram** above plots the car\'s sideways acceleration against its forward and backward acceleration. The tyres can only give so much grip in total, so a lap is a long walk around the rim of a rounded shape: braking uses grip that cornering also wants, which is why drivers release the brake as they turn in.'),
      ],
    },
    {
      id: 'corners',
      title: 'Corner by corner',
      lead: `${a.corners.length} corners in the atlas numbering`,
      blocks: [
        { t: 'f1-viz', viz: 'corners', circuit: id },
        ...(stops.length
          ? [
              {
                t: 'table' as const,
                head: ['Turn', 'Brakes from', 'Down to', 'Distance', 'Speed shed'],
                rows: stops.slice(0, 5).map((c) => [`${c.n}${featureFor(id, c.n) ? ` (${featureFor(id, c.n)!.name})` : ''}`, `${f0(c.brakeFrom ?? 0)} km/h`, `${f0(c.vApex)} km/h`, `${f0(c.brakeDist)} m`, `${f0((c.brakeFrom ?? 0) - c.vApex)} km/h`]),
                caption: 'The five biggest braking zones by speed shed. These are the places a driver can pass by braking later than the car in front.',
              },
            ]
          : []),
      ],
    },
    {
      id: 'whatif',
      title: 'Build a car for this track',
      lead: 'Change the car and watch the lap change.',
      blocks: [
        p(`Different circuits pay for different things. The bars show what one percent more of each ingredient is worth at ${n.name}: the biggest is **${best.label.toLowerCase()}** at about ${f0(Math.abs(best.dt) * 1000)} ms a lap. Then try your own car below.`),
        { t: 'f1-viz', viz: 'sensitivity', circuit: id },
        { t: 'f1-viz', viz: 'explorer', circuit: id },
      ],
    },
    mathsSection(a, slow, stop),
  ]

  return {
    intro: `${n.name} in ${n.place} is ${KIND_TEXT[n.kind]}: ${km(t.length)}, ${S.turns} turns and a modelled lap of about ${mmss(sim.lapTime)}. This page draws it from real centreline data and takes it apart: the racing line, three sectors, every corner, and the maths behind each speed.`,
    nutshell: [
      `${km(t.length)} lap, ${S.turns} turns, about ${laps} race laps. The model laps it in ${mmss(sim.lapTime)} at an average of ${f0(S.vAvg)} km/h, ${ordinal(rankOf(id, (s) => s.vAvg))} fastest of the ${N} circuits.`,
      `At full throttle for ${f0(S.fullThrottle)}% of the lap and braking for ${f1(S.brakingTime)}% of its time. Top speed about ${f0(S.vMax)} km/h; slowest corner ${slow ? `${f0(slow.vApex)} km/h` : '–'}.`,
      `The key to the lap here. ${n.decides[0]}`,
      `The lap model is a simplified, calibrated estimate, not team data. The maths page explains every step: [the maths of a lap](@sports/f1/atlas/lap-simulation-maths).`,
    ],
    sections,
    sources: [
      'Bacinger, T. f1-circuits: GeoJSON of Formula 1 circuit centrelines. https://github.com/bacinger/f1-circuits (MIT licence). The traced centreline used for every drawing here.',
      'Milliken, W. F., & Milliken, D. L. (1995). *Race Car Vehicle Dynamics*. SAE International.',
      'Brayshaw, D. L., & Harrison, M. F. (2005). A quasi steady state approach to race car lap simulation in order to understand the effects of racing line and centre of gravity location. *Proceedings of the IMechE, Part D*, 219(6), 725–739.',
      'Heilmeier, A., Wischnewski, A., Hermansyah, L., Lienkamp, M., & Betz, J. (2020). Minimum curvature trajectory planning and control for an autonomous race car. *Vehicle System Dynamics*, 58(10), 1497–1527.',
    ],
    related: ['sports/f1/atlas/lap-simulation-maths', 'sports/f1/atlas/compare-circuits', `sports/f1/atlas/${prev}`, `sports/f1/atlas/${next}`, 'sports/f1/circuits/tracks-racing-line'],
  }
}

// The three or four formulas the circuit's own numbers can be plugged into.
function mathsSection(a: Analysis, slow: CornerStats | undefined, stop: CornerStats | undefined): GuideSection {
  const { sim, setup, track: t } = a
  const d = dynamics(setup, sim.rho)
  const blocks: Block[] = [
    p(`Every speed and time on this page comes from a short chain of formulas, each of which is explained symbol by symbol in [the maths of a lap](@sports/f1/atlas/lap-simulation-maths). Here are the four that matter most, with the numbers from ${a.notes.name} plugged in.`),
  ]

  if (slow) {
    const kLine = 1 / slow.rLine
    const wider = slow.rLine >= slow.rMin
    const turned = (slow.angle * Math.PI) / 180
    const lineLen = (() => {
      let sum = 0
      for (let i = Math.round(slow.s0 / t.ds); i <= Math.round(slow.s1 / t.ds); i++) sum += t.dsl[i % t.n]
      return sum
    })()
    blocks.push(p(`**1 · How sharp is the sharpest bend?** Turn ${slow.n} is the slowest point of the lap. Curvature is how fast the direction of travel turns per metre, and the radius is its reciprocal.`))
    blocks.push({
      t: 'math',
      tex: String.raw`\kappa = \frac{\mathrm{d}\theta}{\mathrm{d}s} \approx \frac{\Delta\theta}{\Delta s}, \qquad R = \frac{1}{|\kappa|}`,
      where: [
        { sym: '\\kappa', def: 'curvature of the path, in 1/m: how much the heading changes per metre' },
        { sym: '\\theta', def: 'heading, the direction of travel, in radians' },
        { sym: 's', def: 'distance travelled along the path, in metres' },
        { sym: 'R', def: 'radius of the circle that matches the bend, in metres' },
      ],
      syntax: [
        { sym: '\\kappa', say: '"kappa". Effect: a bigger κ is a tighter bend; κ = 0 is a straight. Why: it is the one number that sets how hard the car must be pushed sideways, through \\(a = v^2\\kappa\\).' },
        { sym: '\\dfrac{\\mathrm{d}\\theta}{\\mathrm{d}s}', say: '"d-theta by d-s": the change in heading per tiny step of distance. Effect: the steeper the heading changes, the sharper the corner. Why: curvature is defined as turning per unit length, not turning per second, so it belongs to the track, not to the car\'s speed.' },
        { sym: '\\approx', say: '"is approximately": on a computer the step is a real 5 m, not infinitely small, so the smooth derivative is replaced by a difference between neighbouring samples.' },
        { sym: '|\\kappa|', say: '"the size of kappa": ignores whether the bend is left or right. Effect: speed limits do not care which way you turn. Why: left and right bends of the same radius need the same sideways force.' },
        { sym: 'R = 1/|\\kappa|', say: 'radius is the reciprocal of curvature. Effect: halve the radius and the curvature doubles. Why: it turns the number into something you can picture: the size of the circle the car is driving round.' },
      ],
      worked: {
        title: `Turn ${slow.n} at ${a.notes.name}`,
        steps: [
          `The bend turns the car through \\(\\Delta\\theta = ${f0(slow.angle)}^\\circ = ${f2(turned)}\\) rad.`,
          `The racing line covers about \\(\\Delta s = ${f0(lineLen)}\\) m through it.`,
          `The average curvature is \\(\\bar\\kappa = ${f2(turned)} \\div ${f0(lineLen)} = ${f3(turned / lineLen)}\\) 1/m.`,
          `The curvature peaks at \\(\\kappa_{\\max} = 1/${f0(slow.rLine)} = ${f3(kLine)}\\) 1/m on the racing line. The centreline peaks at ${f0(slow.rMin)} m radius${wider ? ', so the line uses the width of the track to make the bend gentler' : ', and here the line is slightly tighter at its sharpest point: through a chicane the smoothest path trades a little at one apex to straighten the rest'}.`,
        ],
        answer: `Radius of the racing line \\(R = 1/\\kappa_{\\max} \\approx ${f0(slow.rLine)}\\) m, against ${f0(slow.rMin)} m for the centreline${wider ? `: ${f0((slow.rLine / slow.rMin - 1) * 100)}% wider` : ''}.`,
      },
    })

    const k = kLine
    const downTerm = (setup.mu * sim.rho * setup.clA) / (2 * setup.mass)
    const denom = k - downTerm
    const free = denom > 0 ? Math.sqrt((setup.mu * G) / denom) : Infinity
    const capV = Math.sqrt((setup.latCap * G) / k)
    blocks.push(p(`**2 · How fast can that bend be taken?** Grip and downforce set a limit on sideways force, and the radius sets how much sideways force a given speed needs. Where they balance is the corner speed.`))
    blocks.push({
      t: 'math',
      tex: String.raw`v_{\max} = \sqrt{\frac{\mu\, g}{\kappa - \dfrac{\mu\,\rho\, C_L A}{2m}}}`,
      where: [
        { sym: '\\mu', def: 'tyre grip: the most sideways force the tyres give per unit of load on them' },
        { sym: 'g', def: 'gravity, 9.81 m/s²' },
        { sym: '\\kappa', def: 'curvature of the racing line, 1/m' },
        { sym: '\\rho', def: 'air density, kg/m³' },
        { sym: 'C_L A', def: 'lift coefficient times frontal area: how much downforce the wings and floor make per unit of dynamic pressure, m²' },
        { sym: 'm', def: 'mass of the car and driver, kg' },
      ],
      syntax: [
        { sym: 'v_{\\max}', say: 'the fastest steady speed round this bend. Effect: it is the ceiling the lap model uses before any braking or acceleration is considered.' },
        { sym: '\\mu\\, g', say: '"mu g": the grip the tyres give just from the car\'s own weight, as a sideways acceleration. Effect: raise μ by 10% and the speed limit in a slow corner rises about 5% (the square root). Why: grip is what turns the car.' },
        { sym: '\\kappa', say: 'in the denominator: tighter bends (bigger κ) shrink the speed limit. Effect: halve the radius and, in a slow corner, the speed falls by about 30%.' },
        { sym: '\\dfrac{\\mu\\rho C_L A}{2m}', say: 'the downforce term. Effect: it is subtracted from the curvature, as if the bend were gentler than it really is. More wing, thicker air or a lighter car all make the subtraction bigger. Why: downforce grows with v², and so does the sideways force the corner demands, so downforce can cancel part of the corner.' },
        { sym: '\\sqrt{\\ }', say: 'the square root, because the force the corner demands grows with the square of speed (\\(v^2\\kappa\\)). Effect: you need four times the grip to take a corner twice as fast.' },
      ],
      worked: {
        title: `Turn ${slow.n}, using this circuit's own numbers`,
        steps: [
          `Curvature of the racing line: \\(\\kappa = 1/${f0(slow.rLine)} = ${f3(k)}\\) 1/m.`,
          `Downforce term: \\(\\mu\\rho C_L A / 2m = ${f2(setup.mu)} \\times ${f2(sim.rho)} \\times ${f2(setup.clA)} \\div ${f0(2 * setup.mass)} = ${f3(downTerm)}\\) 1/m.`,
          `Denominator: \\(${f3(k)} - ${f3(downTerm)} = ${f3(denom)}\\) 1/m.`,
          Number.isFinite(free)
            ? `\\(v_{\\max} = \\sqrt{${f2(setup.mu)} \\times ${G} \\div ${f3(denom)}} = ${f1(free)}\\) m/s \\(= ${f0(kmh(free))}\\) km/h.`
            : 'The denominator is not positive, so downforce alone beats the bend and there is no limit.',
          `Check against the cap on sideways acceleration (${f1(setup.latCap)} g): \\(\\sqrt{${f1(setup.latCap)} \\times ${G} \\div ${f3(k)}} = ${f0(kmh(capV))}\\) km/h. The lower of the two wins.`,
        ],
        answer: `Corner speed ≈ ${f0(kmh(Math.min(free, capV)))} km/h; the lap model's slowest point here is ${f0(slow.vApex)} km/h.`,
      },
    })
  }

  if (stop?.brakeFrom) {
    const v1 = stop.brakeFrom / 3.6
    const v2 = stop.vApex / 3.6
    const a1 = d.decel(v1, 0)
    const a2 = d.decel(v2, 0)
    const abar = (a1 + a2) / 2
    const dist = (v1 * v1 - v2 * v2) / (2 * abar)
    blocks.push(p(`**3 · How far before the corner must the car brake?** The biggest speed shed of the lap is before Turn ${stop.n}. Braking is limited by the brakes, by the tyres, and is helped by drag, which grows with speed.`))
    blocks.push({
      t: 'math',
      tex: String.raw`d = \frac{v_1^{2} - v_2^{2}}{2\,\bar a}, \qquad \bar a \approx \frac{a(v_1)+a(v_2)}{2}`,
      where: [
        { sym: 'd', def: 'braking distance, m' },
        { sym: 'v_1,\\ v_2', def: 'speed when braking starts and when it ends, m/s' },
        { sym: '\\bar a', def: 'average deceleration over the stop, m/s²' },
      ],
      syntax: [
        { sym: 'v_1^{2} - v_2^{2}', say: 'the difference of the squares of the speeds. Effect: stopping distance grows with the square of the speed, so going 10% faster adds about 21% to the distance. Why: the energy to be removed is half the mass times v².' },
        { sym: '2\\,\\bar a', say: 'twice the average deceleration, in the denominator. Effect: braking twice as hard halves the distance. Why: it comes from the rule \\(v_2^2 = v_1^2 - 2 a d\\) for constant deceleration, rearranged for d.' },
        { sym: '\\bar a', say: '"a-bar": the mean of the deceleration at the start of the stop and at the end. Effect: it is highest at the start, because drag and downforce both help at high speed, and falls as the car slows. Why: using one average is a fair shortcut; the model itself recomputes it every 5 m.' },
      ],
      worked: {
        title: `Turn ${stop.n}`,
        steps: [
          `Braking starts at \\(v_1 = ${f0(stop.brakeFrom)}\\) km/h \\(= ${f1(v1)}\\) m/s and ends at \\(v_2 = ${f0(stop.vApex)}\\) km/h \\(= ${f1(v2)}\\) m/s.`,
          `Deceleration at the start: ${f1(a1)} m/s² (${f1(a1 / G)} g). At the end: ${f1(a2)} m/s² (${f1(a2 / G)} g). Average \\(\\bar a = ${f1(abar)}\\) m/s².`,
          `\\(d = (${f0(v1 * v1)} - ${f0(v2 * v2)}) \\div (2 \\times ${f1(abar)}) = ${f0(dist)}\\) m.`,
        ],
        answer: `About ${f0(dist)} m of braking in a straight line. The model's own braking zone is ${f0(stop.brakeDist)} m (it also keeps trailing the brakes into the first part of the corner).`,
      },
    })
  }

  const slices = Math.round(t.n)
  blocks.push(p(`**4 · How the lap time is added up.** The lap is cut into ${slices} slices of about ${f1(t.length / slices)} m. Each slice takes its length divided by the average of the speeds at its two ends, and the lap time is the sum.`))
  blocks.push({
    t: 'math',
    tex: String.raw`T = \sum_{i=1}^{N} \frac{2\,\Delta s_i}{v_i + v_{i+1}}`,
    where: [
      { sym: 'T', def: 'lap time, s' },
      { sym: 'N', def: 'number of slices round the lap' },
      { sym: '\\Delta s_i', def: 'length of slice i along the racing line, m' },
      { sym: 'v_i,\\ v_{i+1}', def: 'speed at the start and end of slice i, m/s' },
    ],
    syntax: [
      { sym: '\\sum_{i=1}^{N}', say: '"the sum from i equals 1 to N": add up the value for every slice. Effect: every slice counts, so one slow corner costs time no matter how fast the rest is.' },
      { sym: '\\dfrac{2\\,\\Delta s_i}{v_i+v_{i+1}}', say: 'distance divided by average speed, which is the time to cross the slice (the 2 turns the sum into an average). Effect: a slice at half the speed takes twice as long. Why: time is distance over speed, and speed changes along the slice, so we use its average.' },
    ],
    worked: {
      title: a.notes.name,
      steps: [
        `The racing line is ${f0(sim.lineLength)} m long, cut into ${slices} slices.`,
        `Adding up the time of every slice gives \\(T = ${f2(sim.lapTime)}\\) s.`,
        `Average speed is the line length divided by the time: \\(${f0(sim.lineLength)} \\div ${f2(sim.lapTime)} = ${f1(sim.vAvg)}\\) m/s \\(= ${f0(kmh(sim.vAvg))}\\) km/h.`,
        `The three sectors take ${a.sectors.map((s) => `${f1(s.time)} s`).join(', ')}.`,
      ],
      answer: `Modelled lap: ${mmss(sim.lapTime)}.`,
    },
  })
  return { id: 'maths', title: 'The maths behind these graphs', lead: 'Four formulas, with this circuit\'s numbers in them.', blocks }
}

// ── comparing every circuit ───────────────────────────────────────────────

export function compareGuide(): Guide {
  const rows = allSummaries()
  const by = (pick: (s: ReturnType<typeof summary>) => number, dir: 1 | -1 = -1) => [...rows].sort((x, y) => (pick(x) - pick(y)) * dir)
  const name = (s: { id: string }) => shortName(s.id)
  const fastest = by((s) => s.vAvg)[0]
  const slowest = by((s) => s.vAvg)[N - 1]
  const mostFull = by((s) => s.fullThrottle)[0]
  const leastFull = by((s) => s.fullThrottle)[N - 1]
  const longest = by((s) => s.length)[0]
  const shortest = by((s) => s.length)[N - 1]
  const topPeak = by((s) => s.vMax)[0]
  const sensAll = CIRCUIT_IDS.map((id) => ({ id, s: sensitivities(id) }))
  const most = (key: string) => [...sensAll].sort((x, y) => (x.s.find((r) => r.key === key)!.dt) - (y.s.find((r) => r.key === key)!.dt))[0]
  const mostPower = most('power')
  const mostGrip = most('mu')
  const mostDrag = [...sensAll].sort((x, y) => y.s.find((r) => r.key === 'cdA')!.dt - x.s.find((r) => r.key === 'cdA')!.dt)[0]
  return {
    intro: `Twenty-four circuits, one model. Putting every track through the same lap simulation, with a typical set-up for each, makes the differences between them measurable: how fast they are, how much of the lap is spent on the throttle or the brakes, and what each one pays for.`,
    nutshell: [
      `Fastest on average: **${name(fastest)}** (${f0(fastest.vAvg)} km/h). Slowest: **${name(slowest)}** (${f0(slowest.vAvg)} km/h).`,
      `Most time at full throttle: **${name(mostFull)}** (${f0(mostFull.fullThrottle)}% of the lap). Least: **${name(leastFull)}** (${f0(leastFull.fullThrottle)}%).`,
      `Longest lap: **${name(longest)}** (${km(longest.length)}). Shortest: **${name(shortest)}** (${km(shortest.length)}).`,
      `The model is simplified, so compare circuits with each other, not against any one real lap time.`,
    ],
    sections: [
      {
        id: 'scale',
        title: 'The same scale',
        blocks: [p('Drawing every circuit at one scale shows how different they really are in size. Spa-Francorchamps and Jeddah sprawl; Monaco and Zandvoort are compact. Tap any track to open its guide.'), { t: 'f1-viz', viz: 'atlas-grid' }],
      },
      {
        id: 'ranked',
        title: 'Every circuit, ranked',
        blocks: [
          p(`Pick a measure to rank all ${N} circuits. Average speed is the best single summary of a track: ${name(fastest)} leads and ${name(slowest)} trails by ${f0(fastest.vAvg - slowest.vAvg)} km/h. Top speeds span a narrower band than average speeds (${f0(by((s) => s.vMax)[N - 1].vMax)} to ${f0(topPeak.vMax)} km/h, against ${f0(slowest.vAvg)} to ${f0(fastest.vAvg)} km/h on average) because almost every circuit has a straight long enough to reach near the car’s limit at its wing level; what differs is how often the car has to slow down.`),
          { t: 'f1-viz', viz: 'atlas-rank' },
        ],
      },
      {
        id: 'families',
        title: 'Families of circuits',
        blocks: [
          p('Plotting one measure against another shows the circuits falling into families. Try **time braking** against **full throttle**: low-speed street circuits with many slow corners sit in one corner of the graph, fast power circuits in the other. Street circuits, hybrids and purpose-built tracks are coloured differently so you can see how much the type of circuit matters.'),
          { t: 'f1-viz', viz: 'atlas-scatter' },
          {
            t: 'cards',
            cols: 3,
            items: [
              { title: 'Power circuits', tag: 'high full throttle', body: `${by((s) => s.fullThrottle).slice(0, 4).map(name).join(', ')}: long straights and few corners, so the engine and low drag set the lap.` },
              { title: 'Stop-and-go circuits', tag: 'high braking share', body: `${by((s) => s.brakingTime).slice(0, 4).map(name).join(', ')}: lots of braking and traction, with downforce and mechanical grip worth the most.` },
              { title: 'Flowing circuits', tag: 'high peak g', body: `${by((s) => s.peakLat).slice(0, 4).map(name).join(', ')}: sustained fast corners where aerodynamic downforce and tyre wear matter.` },
            ],
          },
        ],
      },
      {
        id: 'pays',
        title: 'What each circuit pays for',
        blocks: [
          p(`The model can also say what an improvement is worth where. A 1% gain in power is worth the most at ${name(mostPower)} (${f0(Math.abs(mostPower.s.find((r) => r.key === 'power')!.dt) * 1000)} ms a lap); a 1% gain in grip at ${name(mostGrip)} (${f0(Math.abs(mostGrip.s.find((r) => r.key === 'mu')!.dt) * 1000)} ms); and 1% more drag costs the most at ${name(mostDrag)} (${f0(mostDrag.s.find((r) => r.key === 'cdA')!.dt * 1000)} ms). That is why teams bring different wings to different circuits.`),
          { t: 'f1-viz', viz: 'atlas-sensitivity' },
        ],
      },
      { id: 'table', title: 'The numbers', blocks: [{ t: 'f1-viz', viz: 'atlas-table' }] },
      {
        id: 'notes',
        title: 'How to read the comparison',
        blocks: [
          {
            t: 'callout',
            tone: 'warn',
            title: 'A model, not a measurement',
            text: `Every number on this page comes from the same simplified lap model, with a typical wing level for each track. It leaves out elevation, banking, tyre temperature, fuel and energy management, and the driver. The few free constants were tuned once so that the modelled laps land within a few per cent of recent qualifying times, which makes it good for comparing circuits and for seeing why, but not for predicting a lap to the tenth. See [the maths of a lap](@sports/f1/atlas/lap-simulation-maths).`,
          },
          { t: 'p', text: `A reminder that no single measure tells the whole story: the highest top speed (${name(topPeak)}, ${f0(topPeak.vMax)} km/h) is not on the circuit with the highest average speed (${name(fastest)}), and the shortest lap (${name(shortest)}) is not the fastest or the slowest. What matters is the mix of straights and corners. Each circuit's own page has a car explorer, so you can change the wings, power and grip and see how its lap responds.` },
        ],
      },
    ],
    sources: ['Bacinger, T. f1-circuits (MIT licence). https://github.com/bacinger/f1-circuits', 'Milliken, W. F., & Milliken, D. L. (1995). *Race Car Vehicle Dynamics*. SAE International.'],
    related: ['sports/f1/atlas/lap-simulation-maths', 'sports/f1/circuits/iconic-circuits', 'sports/f1/circuits/circuit-setup-and-characteristics', 'sports/f1/atlas/monza', 'sports/f1/atlas/monaco'],
  }
}

export { BASE_SETUP, setupForWing }
