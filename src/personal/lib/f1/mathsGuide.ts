// The long-form maths guide of the circuit atlas: every formula the lap model uses, explained
// symbol by symbol, with worked numbers taken from the model itself.

import type { Block, Guide } from '../archive/guide'
import { BASE_SETUP, analyse, sensitivities, setupForWing, trackFor } from './circuits'
import { airDensity, dynamics } from './circuitModel'

const G = 9.81
const f0 = (n: number) => n.toFixed(0)
const f1 = (n: number) => n.toFixed(1)
const f2 = (n: number) => n.toFixed(2)
const f3 = (n: number) => n.toFixed(3)
const f4 = (n: number) => n.toFixed(4)
const p = (text: string): Block => ({ t: 'p', text })
const deg = (r: number) => (r * 180) / Math.PI

export function mathsGuide(): Guide {
  // ── worked numbers ──
  const R_EARTH = 6371008.8
  const lat = 50.4372 // Spa-Francorchamps
  const cosLat = Math.cos((lat * Math.PI) / 180)
  const dLon = 0.01
  const xMetres = R_EARTH * cosLat * ((dLon * Math.PI) / 180)
  const yMetres = R_EARTH * ((dLon * Math.PI) / 180)

  const monza = analyse('monza')
  const para = monza.corners[monza.corners.length - 1]
  const mt = trackFor('monza')
  const ip = Math.round(para.sApex / mt.ds)
  const hd = (i: number) => {
    const a = (i - 1 + mt.n) % mt.n
    const b = (i + 1) % mt.n
    return Math.atan2(mt.y[b] - mt.y[a], mt.x[b] - mt.x[a])
  }
  const iA = ip - 2
  const iB = ip + 2
  const hA = hd(iA)
  const hB = hd(iB)
  let dTheta = hB - hA
  while (dTheta > Math.PI) dTheta -= 2 * Math.PI
  while (dTheta <= -Math.PI) dTheta += 2 * Math.PI
  const kPara = dTheta / (4 * mt.ds)
  const i1 = (ip - 1 + mt.n) % mt.n
  const i2 = (ip + 1) % mt.n

  // Gaussian weights for sigma = 6 m at 5 m spacing
  const sigma = 6
  const ds = 5
  const J = Math.ceil((3 * sigma) / ds)
  const w = Array.from({ length: J + 1 }, (_, j) => Math.exp(-((j * ds) ** 2) / (2 * sigma * sigma)))
  const wSum = w[0] + 2 * w.slice(1).reduce((a, b) => a + b, 0)

  // second difference on a circle
  const Rc = 50
  const dsC = 10
  const second = 2 * Rc * (1 - Math.cos(dsC / Rc))

  // geometric line radius
  const rc = 60
  const width = 13
  const h = width / 2 - 1
  const ri = rc - h
  const ro = rc + h
  const phi = Math.PI / 4
  const rLine = (ro - ri * Math.cos(phi)) / (1 - Math.cos(phi))

  // corner speed example: 100 m radius at a medium wing level, sea level
  const mid = setupForWing(0.6)
  const rho0 = airDensity(0)
  const R100 = 100
  const downTerm = (mid.mu * rho0 * mid.clA) / (2 * mid.mass)
  const denom = 1 / R100 - downTerm
  const vFree = Math.sqrt((mid.mu * G) / denom)
  const vCap = Math.sqrt((mid.latCap * G) / (1 / R100))
  const rStar = (2 * mid.mass) / (mid.mu * rho0 * mid.clA)
  const noWing = Math.sqrt(mid.mu * G * R100)

  // friction circle
  const aMax = 5.0 * G
  const aY = 0.7 * aMax
  const aX = aMax * Math.sqrt(1 - 0.7 ** 2)

  // straights: acceleration at 250 km/h, medium wing
  const dm = dynamics(mid, rho0)
  const v250 = 250 / 3.6
  const pLimit = (mid.power * 1000) / (mid.mass * v250)
  const nLoad = mid.mass * G + dm.kDown * v250 * v250
  const tracLimit = (mid.mu * 0.55 * nLoad) / mid.mass
  const drag250 = dm.dragK * v250 * v250
  const net250 = Math.min(pLimit, dm.latMax(v250) * 0.55) - drag250 - dm.crr
  const lowDrag = setupForWing(0)
  const vTop = Math.cbrt((2 * lowDrag.power * 1000) / (airDensity(142) * lowDrag.cdA))

  // braking: 330 km/h to 80 km/h
  const v1 = 330 / 3.6
  const v2 = 80 / 3.6
  const db = dynamics(mid, rho0)
  const a1 = db.decel(v1, 0)
  const a2 = db.decel(v2, 0)
  const abar = (a1 + a2) / 2
  const dbrake = (v1 * v1 - v2 * v2) / (2 * abar)

  // forward pass step
  const vStep = 80
  const aStep = 6
  const vNext = Math.sqrt(vStep * vStep + 2 * aStep * 5)

  // lap-time slices
  const sl = [
    { ds: 5, v1: 60, v2: 61 },
    { ds: 5, v1: 61, v2: 62.2 },
    { ds: 5, v1: 62.2, v2: 63.1 },
  ]
  const slT = sl.map((s) => (2 * s.ds) / (s.v1 + s.v2))

  // throttle example
  const vT = 70
  const aT = 3
  const needT = aT + dm.dragK * vT * vT + dm.crr
  const supT = (mid.power * 1000) / (mid.mass * vT)

  // sensitivity
  const sMonza = sensitivities('monza')
  const sMonaco = sensitivities('monaco')
  const grab = (list: ReturnType<typeof sensitivities>, key: string) => list.find((r) => r.key === key)!.dt * 1000

  return {
    intro:
      'The circuit atlas turns a map into a lap time with a short chain of formulas. Each is simple on its own; together they predict, to within a few per cent, how fast a Formula 1 car goes round every metre of a track. This page walks through the whole chain, explains what every symbol does to the answer and why it is there, and plugs real numbers from the model into each step.',
    nutshell: [
      '**Curvature** κ is how fast the direction of travel turns per metre; the **radius** is 1/κ. Everything about cornering follows from it.',
      'A car cannot use the centreline: it uses the track width to follow the **racing line**, the path of minimum curvature, which has a bigger radius and so a higher speed.',
      '**Cornering speed** comes from balancing the sideways force a corner demands (v²κ) against what the tyres and downforce can give: \\(v = \\sqrt{\\mu g / (\\kappa - \\mu\\rho C_L A/2m)}\\).',
      'On straights, **power and drag** set the acceleration; under braking, the **tyres, brakes and drag** set the deceleration; the **friction circle** says cornering and braking share the same grip.',
      'A **forward pass** (how fast can the car accelerate) and a **backward pass** (how late can it brake) are joined by taking the **minimum** at every point; adding up distance ÷ speed gives the lap time.',
    ],
    sections: [
      {
        id: 'chain',
        title: 'The chain at a glance',
        blocks: [
          {
            t: 'flow',
            title: 'From a map to a lap time',
            nodes: [
              { label: 'Centreline', sub: 'traced GPS points, in metres', tone: 'data' },
              { label: 'Racing line', sub: 'minimum curvature within the track width', tone: 'process' },
              { label: 'Curvature', sub: 'κ at every 5 m', tone: 'process' },
              { label: 'Speed limits', sub: 'what grip and downforce allow', tone: 'model' },
              { label: 'Two passes', sub: 'accelerate forward, brake backward', tone: 'model' },
              { label: 'Lap time', sub: 'sum of distance ÷ speed', tone: 'output' },
            ],
            caption: 'The steps are in the order the model runs them. Each has its own section below.',
          },
          {
            t: 'table',
            head: ['Quantity', 'Symbol', 'Value used', 'What it is'],
            rows: [
              ['Mass', 'm', `${BASE_SETUP.mass} kg`, 'car, driver and about half a tank of fuel'],
              ['Tyre grip', 'μ', `${BASE_SETUP.mu}`, 'sideways force per unit of load; a hot slick is a little over 2'],
              ['Downforce', 'C_L·A', `${f1(setupForWing(0).clA)} – ${f1(setupForWing(1).clA)} m²`, 'from the skinniest to the fullest wing package'],
              ['Drag', 'C_d·A', `${f2(setupForWing(0).cdA)} – ${f2(setupForWing(1).cdA)} m²`, 'rises with the wings, but much more slowly than downforce'],
              ['Power', 'P', `${BASE_SETUP.power} kW`, 'usable power at the wheels, averaged over a lap (engine plus electrical deployment)'],
              ['Braking', 'a_brk', `${BASE_SETUP.brakeG} g`, 'the most the brakes can add, whatever the tyres could take'],
              ['Sideways cap', 'a_cap', `${BASE_SETUP.latCap} g`, 'the most sideways force the car manages however much downforce it has'],
              ['Air density', 'ρ', `${f2(airDensity(0))} kg/m³ at sea level`, 'falls with altitude, so thin-air circuits get less downforce and drag'],
              ['Track width', 'w', '10 – 14 m', 'set per circuit; the car keeps 1 m clear of each edge'],
            ],
            caption: 'The few free constants were tuned once, against approximate recent qualifying lap times, then left alone. After that the only thing that changes between circuits is the wing level.',
          },
        ],
      },
      {
        id: 'map',
        title: 'From a map to metres',
        lead: 'Latitude and longitude are angles; curvature needs lengths.',
        blocks: [
          p('The circuit outlines come as latitude and longitude. Before any physics can happen they are turned into metres on a flat plane, measured east and north from the first point. Over a few kilometres, treating the Earth as flat costs far less accuracy than the tracing itself.'),
          {
            t: 'math',
            tex: String.raw`x = R_\oplus \cos\varphi_0\;\Delta\lambda, \qquad y = R_\oplus\;\Delta\varphi`,
            where: [
              { sym: 'x,\\ y', def: 'distance east and north of the first point, in metres' },
              { sym: 'R_\\oplus', def: 'mean radius of the Earth, 6,371 km' },
              { sym: '\\varphi_0', def: 'latitude of the first point' },
              { sym: '\\Delta\\lambda,\\ \\Delta\\varphi', def: 'differences in longitude and latitude from the first point, in radians' },
            ],
            syntax: [
              { sym: 'x,\\ y', say: '"x and y": east and north in metres. Effect: they let us treat the track as shapes on a page and measure bends in metres. Why: curvature (turning per metre) cannot be measured in degrees of longitude.' },
              { sym: 'R_\\oplus', say: '"R-earth": the radius of the Earth. Effect: it scales every length, so a 1% error here is a 1% error in every distance. Why: an angle at the centre of a circle times its radius is the length of the arc (arc = radius × angle).' },
              { sym: '\\cos\\varphi_0', say: '"cosine of the latitude". Effect: it shrinks east-west distances away from the equator: at 50° north a degree of longitude is only about 64% as long as a degree of latitude. Why: lines of longitude converge towards the poles, so the width of a degree shrinks.' },
              { sym: '\\Delta\\lambda', say: '"delta lambda": how far east or west of the start, as an angle. Effect: more degrees, more metres. Why: positions are stored as differences from one point, which keeps the numbers small and precise.' },
              { sym: '\\oplus', say: 'the symbol for the Earth, used as a subscript so \\(R_\\oplus\\) cannot be mistaken for any other R, such as a corner radius.' },
            ],
            worked: {
              title: 'Spa-Francorchamps, latitude 50.44° N',
              steps: [
                `\\(\\cos 50.44^\\circ = ${f3(cosLat)}\\).`,
                `A longitude step of \\(0.01^\\circ = ${f4((dLon * Math.PI) / 180)}\\) rad gives \\(x = 6{,}371{,}009 \\times ${f3(cosLat)} \\times ${f4((dLon * Math.PI) / 180)} = ${f0(xMetres)}\\) m.`,
                `The same angle in latitude gives \\(y = 6{,}371{,}009 \\times ${f4((dLon * Math.PI) / 180)} = ${f0(yMetres)}\\) m.`,
              ],
              answer: `At Spa a hundredth of a degree is ${f0(xMetres)} m east-west but ${f0(yMetres)} m north-south: without the cosine the map would be stretched sideways by ${f0((1 / cosLat - 1) * 100)}%.`,
            },
          },
          p('The traced polyline is then smoothed with a spline through its points and re-sampled every 5 m, and its length is scaled to the official lap length, so a track traced a little short or long still adds up to the right distance.'),
        ],
      },
      {
        id: 'curvature',
        title: 'Heading, curvature and radius',
        lead: 'The one number that decides how fast a corner can be.',
        blocks: [
          p('At every 5 m sample the model works out which way the track is heading, then how fast that heading is changing. Straights have a constant heading; bends do not.'),
          {
            t: 'math',
            tex: String.raw`\theta_i = \operatorname{atan2}\!\left(y_{i+1}-y_{i-1},\; x_{i+1}-x_{i-1}\right)`,
            where: [
              { sym: '\\theta_i', def: 'heading at sample i: the direction of travel, measured anticlockwise from east, in radians' },
              { sym: 'x_i,\\ y_i', def: 'position of sample i, in metres' },
            ],
            syntax: [
              { sym: '\\theta', say: '"theta": the direction the track points. Effect: a change of θ is a change of direction, which is what a bend is.' },
              { sym: '\\operatorname{atan2}(y,\\,x)', say: '"two-argument arc-tangent": the angle of the arrow \\((x, y)\\), correct in all four quadrants. Effect: it returns an angle from −180° to 180°. Why: plain \\(\\arctan(y/x)\\) cannot tell north-east from south-west, because the ratio is the same.' },
              { sym: 'i\\pm1', say: '"the sample before and after": the heading uses both neighbours. Effect: the heading belongs to the sample itself, not to the gap before or after it. Why: using one neighbour would shift every bend by half a step.' },
              { sym: 'y_{i+1}-y_{i-1}', say: 'north-south movement across two steps; with the matching east-west movement it forms the arrow whose angle we want. Effect: bigger gaps between neighbours would blur sharp bends.' },
            ],
            worked: {
              title: 'Parabolica (Monza turn 11)',
              steps: [
                `Around the apex the sample at ${f0(mt.s[i1])} m is at \\((${f1(mt.x[i1])},\\ ${f1(mt.y[i1])})\\) and the one at ${f0(mt.s[i2])} m is at \\((${f1(mt.x[i2])},\\ ${f1(mt.y[i2])})\\) metres.`,
                `The neighbouring heading is \\(\\operatorname{atan2}(${f1(mt.y[i2] - mt.y[i1])},\\ ${f1(mt.x[i2] - mt.x[i1])}) = ${f1(deg(Math.atan2(mt.y[i2] - mt.y[i1], mt.x[i2] - mt.x[i1])))}^\\circ\\).`,
              ],
              answer: `The car is pointing ${f1(deg(Math.atan2(mt.y[i2] - mt.y[i1], mt.x[i2] - mt.x[i1])))}° from east at this point.`,
            },
          },
          {
            t: 'math',
            tex: String.raw`\kappa = \frac{\mathrm{d}\theta}{\mathrm{d}s} \approx \frac{\theta_{i+1}-\theta_i}{\Delta s}, \qquad R = \frac{1}{|\kappa|}`,
            where: [
              { sym: '\\kappa', def: 'curvature, in 1/m (positive for a left turn, negative for a right)' },
              { sym: 's', def: 'distance along the track, metres' },
              { sym: '\\Delta s', def: 'the spacing between samples, 5 m' },
              { sym: 'R', def: 'radius of the circle that matches the bend, metres' },
            ],
            syntax: [
              { sym: '\\dfrac{\\mathrm{d}\\theta}{\\mathrm{d}s}', say: '"d-theta by d-s": heading change per metre. Effect: a constant value is a circular arc; zero is a straight. Why: curvature is a property of the track alone, independent of how fast the car goes.' },
              { sym: '\\approx', say: '"approximately equal": a real step is 5 m rather than infinitely small, so the derivative is replaced by a difference.' },
              { sym: '\\Delta s', say: '"delta s": the step along the track. Effect: a smaller step captures sharper details but amplifies the noise of the traced points. Why: 5 m is short enough to resolve a 15 m hairpin and long enough to stay stable.' },
              { sym: 'R = 1/|\\kappa|', say: 'radius is the reciprocal of curvature. Effect: halve the radius, double the curvature. Why: it turns the abstract rate into something you can picture, the size of the circle the car is driving round.' },
            ],
            worked: {
              title: 'Parabolica again',
              steps: [
                `Over four steps (${f0(4 * mt.ds)} m) the heading goes from ${f1(deg(hA))}° to ${f1(deg(hB))}°, a change of \\(\\Delta\\theta = ${f1(deg(dTheta))}^\\circ = ${f3(dTheta)}\\) rad.`,
                `Curvature \\(\\kappa = ${f3(dTheta)} \\div ${f0(4 * mt.ds)} = ${f4(kPara)}\\) 1/m.`,
                `Radius \\(R = 1 \\div |${f4(kPara)}| = ${f0(1 / Math.abs(kPara))}\\) m.`,
              ],
              answer: `The centreline radius at the Parabolica apex is about ${f0(1 / Math.abs(kPara))} m (a ${dTheta < 0 ? 'right' : 'left'}-hander: the sign of κ says which way it turns, negative for right).`,
            },
          },
          { t: 'f1-viz', viz: 'curvature', circuit: 'monza' },
          {
            t: 'math',
            tex: String.raw`\bar\kappa_i = \frac{\sum_{j=-J}^{J} w_j\,\kappa_{i+j}}{\sum_{j=-J}^{J} w_j}, \qquad w_j = e^{-\frac{(j\,\Delta s)^2}{2\sigma^2}}`,
            where: [
              { sym: '\\bar\\kappa_i', def: 'smoothed curvature at sample i' },
              { sym: 'J', def: 'how many neighbours on each side are used' },
              { sym: 'w_j', def: 'weight given to the neighbour j steps away' },
              { sym: '\\sigma', def: 'the width of the smoothing, in metres' },
            ],
            syntax: [
              { sym: '\\bar\\kappa', say: '"kappa bar": the smoothed value. Effect: it replaces a jittery curvature with a steady one. Why: a 0.5 m wobble in a traced point 5 m from its neighbour is a 6° error in heading, which would make a straight look like a chicane.' },
              { sym: '\\sum_{j=-J}^{J}', say: '"the sum over j from −J to J": add up the contribution of every neighbour, J on each side. Effect: more neighbours, more averaging.' },
              { sym: 'w_j', say: '"weight j": how much the neighbour j steps away counts. Effect: the sample itself counts most and distant ones count less. Why: a bend should be judged mostly from where you are.' },
              { sym: 'e^{-(j\\Delta s)^2/(2\\sigma^2)}', say: 'a Gaussian "bell curve": the weight falls off smoothly with distance. Effect: it never has a sharp edge, so it does not create fake corners. Why: it is the standard way to blur without adding artefacts.' },
              { sym: '\\sigma', say: '"sigma": the width of the bell, 6 m in the model. Effect: a bigger σ blurs more: noise disappears, but tight hairpins flatten and their radius grows. Why: 6 m keeps real 15 m hairpins while removing sub-metre tracing noise.' },
              { sym: '\\sum w_j', say: 'dividing by the sum of the weights makes them add up to one. Effect: the total angle turned in a corner is unchanged by smoothing, only spread out.' },
            ],
            worked: {
              title: 'Weights for σ = 6 m at 5 m spacing',
              steps: [
                `\\(J = \\lceil 3\\sigma/\\Delta s\\rceil = \\lceil 18/5\\rceil = ${J}\\): beyond three σ the weight is negligible.`,
                `Weights from the centre outwards: ${w.map((x, j) => `\\(w_{${j}} = ${f3(x)}\\)`).join(', ')}.`,
                `Their sum over both sides is \\(${f3(wSum)}\\).`,
              ],
              answer: `The sample itself gets ${f0((w[0] / wSum) * 100)}% of the weight, its two nearest neighbours ${f0((w[1] / wSum) * 100)}% each, and the next pair ${f0((w[2] / wSum) * 100)}% each.`,
            },
          },
        ],
      },
      {
        id: 'line',
        title: 'The racing line',
        lead: 'Why the car does not follow the middle of the track.',
        blocks: [
          p('A circuit\'s centreline is just the middle of the tarmac. A driver uses all of the width: entering a corner from the outside, clipping the inside at the apex and leaving on the outside again. That turns a tight bend into a gentler arc with a bigger radius, and because the speed limit grows with the radius, the line is faster. The model finds this path by mathematics, not by guessing.'),
          {
            t: 'math',
            tex: String.raw`\mathbf{p}_k = \mathbf{c}_k + \alpha_k\,\mathbf{n}_k, \qquad |\alpha_k| \le h = \frac{w}{2} - m`,
            where: [
              { sym: '\\mathbf{p}_k', def: 'the racing line\'s k-th point (a position, so a pair of coordinates)' },
              { sym: '\\mathbf{c}_k', def: 'the centreline\'s k-th point' },
              { sym: '\\mathbf{n}_k', def: 'a unit-length arrow pointing left, at right angles to the track' },
              { sym: '\\alpha_k', def: 'how far the line is shifted sideways at point k, in metres (left positive)' },
              { sym: 'w,\\ m', def: 'the track width and the margin the car keeps from the edge (1 m)' },
            ],
            syntax: [
              { sym: '\\mathbf{p},\\ \\mathbf{c},\\ \\mathbf{n}', say: 'bold letters are vectors: positions or directions, each with two numbers (east and north). Effect: the formula moves the whole point at once rather than one coordinate at a time.' },
              { sym: '\\alpha_k', say: '"alpha-k": the sideways shift at point k. These are the unknowns the model solves for: the only thing that can change is how far left or right of the centreline the car runs. Why: restricting the line to sideways shifts keeps every point on its own cross-section of the track, so the path cannot loop or double back.' },
              { sym: '\\mathbf{n}_k', say: 'a unit arrow pointing left of the track. Effect: multiplying by α slides the point along it; positive α is left, negative right.' },
              { sym: '|\\alpha_k|\\le h', say: 'the size of the shift can be at most h. Effect: this is the wall: the line may use the full usable width and not an inch more. Why: it is what stops the "ideal" line from simply cutting every corner through the grass.' },
              { sym: 'h = \\dfrac{w}{2}-m', say: 'half the width, less the margin. Effect: a narrower track or a bigger margin reduces what the line can gain. Why: a car is 2 m wide and runs about a metre inside the edge line.' },
            ],
          },
          {
            t: 'math',
            tex: String.raw`\min_{\alpha}\ \sum_k \left\lVert \mathbf{p}_{k-1} - 2\,\mathbf{p}_k + \mathbf{p}_{k+1} \right\rVert^{2}`,
            where: [
              { sym: '\\mathbf{p}_{k-1}-2\\mathbf{p}_k+\\mathbf{p}_{k+1}', def: 'the second difference of three neighbouring points: how far the middle point sits off the straight line through its neighbours' },
            ],
            syntax: [
              { sym: '\\min_{\\alpha}', say: '"minimise over alpha": choose the shifts that make what follows as small as possible. Effect: this is the instruction the solver obeys, subject to the width limits above.' },
              { sym: '\\sum_k', say: '"the sum over every point k": add up the value at every point of the lap. Effect: no point is allowed to be very bent just because the rest are gentle.' },
              { sym: '\\mathbf{p}_{k-1}-2\\mathbf{p}_k+\\mathbf{p}_{k+1}', say: '"the second difference". Effect: it is zero when three points lie on a straight line and grows with how sharply the path bends at the middle one. Why: for evenly spaced points it equals \\(\\Delta s^2\\kappa\\), the curvature times the spacing squared, so it is a measure of curvature that needs no trigonometry.' },
              { sym: '\\lVert\\cdot\\rVert^{2}', say: '"length squared": the length of that arrow, squared. Effect: squaring punishes one very sharp bend much more than several gentle ones. Why: it makes the problem a smooth quadratic that has one exact answer (no guessing, no local optima), and it pushes the line to even out the curvature.' },
            ],
            worked: {
              title: 'A check on a circle',
              steps: [
                `Take three points ${dsC} m apart on a circle of radius ${Rc} m.`,
                `The middle one sits \\(2R(1-\\cos(\\Delta s/R)) = ${f3(second)}\\) m off the line joining its neighbours.`,
                `The shortcut \\(\\Delta s^2/R = ${dsC * dsC} \\div ${Rc} = ${f3((dsC * dsC) / Rc)}\\) m agrees.`,
              ],
              answer: `So the second difference really is curvature (times ${dsC * dsC}), and minimising its square is minimising the curvature round the lap.`,
            },
          },
          p('Because every point moves only along its fixed normal, the squared second difference is a quadratic in the shifts: it is solved exactly, with any shift that would hit the edge pinned there and the rest re-solved, until nothing wants to move. This is the same method used for autonomous race-car path planning.'),
          { t: 'f1-viz', viz: 'line-demo' },
          {
            t: 'math',
            tex: String.raw`r = \frac{R_o - R_i\cos\varphi}{1-\cos\varphi}, \qquad \varphi = \frac{\theta}{2}`,
            where: [
              { sym: 'r', def: 'radius of the racing line through the corner, metres' },
              { sym: 'R_i,\\ R_o', def: 'radii of the inside and outside edges of the corner (less the margin)' },
              { sym: '\\theta', def: 'the angle the corner turns through' },
            ],
            syntax: [
              { sym: 'R_i,\\ R_o', say: '"inner and outer radius": the tightest and widest circles the car may use. Effect: the wider the track, the bigger the gap between them and the more the line can open up the corner.' },
              { sym: '\\varphi = \\theta/2', say: '"phi": half the angle the corner turns through. Effect: for a small angle the line is almost straight (r grows without limit); a long, wide corner leaves little to gain. Why: the line only has to bend as much as the road does, and a small bend can be taken almost as a straight cut.' },
              { sym: '\\cos\\varphi', say: '"cosine of phi": it is 1 when the corner is tiny and falls as the corner gets sharper. Why: the two outside edges meet at a point outside the corner at a distance \\(R_o/\\cos\\varphi\\) from the centre, and the racing circle has to fit inside that wedge.' },
              { sym: 'R_o - R_i\\cos\\varphi', say: 'in the numerator: roughly the width of the track as seen across the corner. Effect: a wider track makes it bigger, and so the racing line bigger.' },
              { sym: '1-\\cos\\varphi', say: 'in the denominator: small for gentle corners, which is what makes their racing line so much bigger than the road. Effect: halve a small corner angle and the line\'s radius roughly quadruples.' },
            ],
            worked: {
              title: 'A 90° corner with a 60 m centreline radius on a 13 m track',
              steps: [
                `Usable half-width \\(h = 13/2 - 1 = ${h}\\) m, so \\(R_i = ${ri}\\) m and \\(R_o = ${ro}\\) m; \\(\\varphi = 45^\\circ\\), \\(\\cos\\varphi = ${f3(Math.cos(phi))}\\).`,
                `Numerator: \\(${ro} - ${ri} \\times ${f3(Math.cos(phi))} = ${f2(ro - ri * Math.cos(phi))}\\).`,
                `Denominator: \\(1 - ${f3(Math.cos(phi))} = ${f3(1 - Math.cos(phi))}\\).`,
              ],
              answer: `\\(r = ${f0(rLine)}\\) m: the racing line is about ${f1(rLine / rc)} times as wide as the 60 m centreline, and, as the next section shows, that is worth a great deal of speed. (The lap model uses the full optimiser, not this single-arc formula, but the idea is the same.)`,
            },
          },
        ],
      },
      {
        id: 'cornering',
        title: 'How fast can a corner be taken?',
        lead: 'Balancing the force a bend demands against the grip available.',
        blocks: [
          p('A car going round a bend of radius R at speed v must be pushed towards the centre with an acceleration \\(v^2/R\\). The tyres can supply a sideways force proportional to the load on them, and an F1 car\'s load is not just its weight: the wings and floor press it into the road harder the faster it goes. The balance of the two decides the speed.'),
          {
            t: 'math',
            tex: String.raw`a_y = \frac{v^{2}}{R} = v^{2}\kappa`,
            where: [
              { sym: 'a_y', def: 'sideways (centripetal) acceleration needed to follow the bend, m/s²' },
              { sym: 'v', def: 'speed, m/s' },
            ],
            syntax: [
              { sym: 'a_y', say: '"a-y": sideways acceleration, usually quoted in g (multiples of 9.81 m/s²). Effect: a driver in a 5 g corner feels five times their own weight pushing sideways.' },
              { sym: 'v^{2}', say: '"v squared". Effect: double the speed and the sideways force needed is four times larger. Why: the car must change direction faster in proportion to how fast it is going, and the force needed grows with both.' },
              { sym: '\\dfrac{v^2}{R}=v^2\\kappa', say: 'the same thing in terms of radius or curvature. Effect: a tighter bend (smaller R, bigger κ) needs more force at the same speed.' },
            ],
          },
          {
            t: 'math',
            tex: String.raw`F_{\mathrm{down}} = \tfrac12\,\rho\, C_L A\, v^{2}`,
            where: [
              { sym: '\\rho', def: 'air density, kg/m³ (1.2 at sea level, less at altitude)' },
              { sym: 'C_L A', def: 'the lift coefficient times the frontal area, in m²: the car\'s downforce "rating". The lift is downward, so C_L here is positive' },
              { sym: 'F_{\\mathrm{down}}', def: 'downforce, newtons' },
            ],
            syntax: [
              { sym: '\\tfrac12\\rho v^{2}', say: '"dynamic pressure": the pressure of moving air. Effect: it is the energy per unit volume in the oncoming air, so more speed or denser air means more force. Why: aerodynamic forces are all this pressure times an area times a shape coefficient.' },
              { sym: 'C_L A', say: '"C-L times A". Effect: raise it with bigger or steeper wings and the same speed makes more downforce. Why: it packages the shape of the car into one number.' },
              { sym: 'v^2', say: 'downforce grows with the square of speed. Effect: a car makes four times the downforce at 300 km/h as at 150, which is why it grips far better in fast corners than slow ones.' },
              { sym: '\\rho', say: '"rho", the air density. Effect: at Mexico City (2,240 m) the air is about 22% thinner, so the same wings give about 22% less downforce.' },
            ],
          },
          {
            t: 'math',
            tex: String.raw`v_{\max} = \sqrt{\frac{\mu\, g}{\kappa - \dfrac{\mu\,\rho\, C_L A}{2m}}}, \qquad \text{from}\quad m\,v^{2}\kappa = \mu\left(m g + \tfrac12\rho C_L A\, v^{2}\right)`,
            where: [
              { sym: '\\mu', def: 'tyre grip coefficient: sideways force per unit of load' },
              { sym: 'm', def: 'mass of the car, kg' },
              { sym: 'g', def: '9.81 m/s²' },
            ],
            syntax: [
              { sym: 'm v^2 \\kappa', say: 'the sideways force the bend demands (mass times \\(v^2\\kappa\\)). Effect: grows fast with speed.' },
              { sym: '\\mu\\,(mg + \\tfrac12\\rho C_L A v^2)', say: 'the sideways force the tyres can give: grip times the total load, which is the weight plus the downforce. Effect: the faster the car goes, the more it can give.' },
              { sym: '\\mu\\, g', say: '"mu g": the grip from the car\'s weight alone, as an acceleration. Effect: a 10% grip gain raises low-speed corner speed by about 5%.' },
              { sym: '\\kappa-\\dfrac{\\mu\\rho C_LA}{2m}', say: 'curvature less a "downforce credit". Effect: the credit makes the corner seem gentler than it is, and the more wing, the more credit. Why: demand and supply both grow with \\(v^2\\), so downforce cancels part of the bend at every speed.' },
              { sym: '\\kappa<\\dfrac{\\mu\\rho C_LA}{2m}', say: 'if the credit is larger than the curvature the bracket is negative and the formula has no limit: the corner is flat out whatever the speed. Effect: bends wider than \\(R^* = 2m/(\\mu\\rho C_LA)\\) stop limiting the car (until the sideways cap or the top speed does).' },
              { sym: '\\sqrt{\\ }', say: 'square root, because speed is squared in the balance. Effect: four times the force for twice the speed.' },
            ],
            worked: {
              title: 'A 100 m bend, medium wings, sea level',
              steps: [
                `\\(C_LA = ${f2(mid.clA)}\\) m², \\(\\mu = ${mid.mu}\\), \\(\\rho = ${f2(rho0)}\\), \\(m = ${mid.mass}\\) kg, \\(\\kappa = 1/100 = 0.0100\\).`,
                `Downforce credit \\(\\mu\\rho C_LA / 2m = ${mid.mu} \\times ${f2(rho0)} \\times ${f2(mid.clA)} \\div ${2 * mid.mass} = ${f4(downTerm)}\\).`,
                `\\(v = \\sqrt{${mid.mu} \\times 9.81 \\div (0.0100 - ${f4(downTerm)})} = ${f1(vFree)}\\) m/s \\(= ${f0(vFree * 3.6)}\\) km/h.`,
                `But that needs \\(v^2\\kappa = ${f0(vFree ** 2 / R100)}\\) m/s² \\(= ${f1(vFree ** 2 / R100 / G)}\\) g, above the ${mid.latCap} g cap, so the cap wins: \\(v = \\sqrt{${mid.latCap} \\times 9.81 \\times 100} = ${f1(vCap)}\\) m/s \\(= ${f0(vCap * 3.6)}\\) km/h.`,
                `With no downforce at all the same bend would be \\(\\sqrt{\\mu g R} = ${f0(noWing * 3.6)}\\) km/h.`,
              ],
              answer: `About ${f0(vCap * 3.6)} km/h with wings, against ${f0(noWing * 3.6)} km/h without: downforce is worth ${f0((vCap / noWing - 1) * 100)}% in this bend. The critical radius for these wings is \\(R^* = ${f0(rStar)}\\) m.`,
            },
          },
          { t: 'f1-viz', viz: 'cornering-limit' },
        ],
      },
      {
        id: 'straights',
        title: 'Straights: power, drag and top speed',
        blocks: [
          p('On a straight the car accelerates until the force from the engine is used up by drag. Two limits cap the push at the wheels: the engine (power divided by speed, so the push falls as the car gets faster) and the tyres (how much force the driven wheels can transmit, which rises with speed through downforce).'),
          {
            t: 'math',
            tex: String.raw`a_x = \min\!\left(\frac{P}{m\,v},\ \frac{\mu\,\beta\,N}{m}\right) - \frac{\rho\, C_d A\, v^{2}}{2m} - C_{rr}\, g`,
            where: [
              { sym: 'P', def: 'power at the wheels, watts' },
              { sym: '\\beta', def: 'fraction of the load carried by the driven rear wheels (0.55)' },
              { sym: 'N', def: 'total load pressing the car onto the road: weight plus downforce' },
              { sym: 'C_d A', def: 'drag coefficient times frontal area, m²' },
              { sym: 'C_{rr}', def: 'rolling resistance coefficient (0.015)' },
            ],
            syntax: [
              { sym: '\\dfrac{P}{m v}', say: 'the acceleration the engine can give: power is force times speed, so force is power over speed. Effect: the faster the car, the less push each watt gives. Why: an engine does a fixed amount of work per second; at high speed that work is spread over more distance.' },
              { sym: '\\dfrac{\\mu\\beta N}{m}', say: 'the acceleration the rear tyres can transmit: grip times the rear share of the load. Effect: at low speed this is the lower of the two, so the car is traction-limited; downforce raises it as speed builds.' },
              { sym: '\\min(\\cdot,\\cdot)', say: '"the smaller of the two". Effect: whichever limit is lower governs. Why: you cannot use more force than the tyres will hold or than the engine can make.' },
              { sym: '\\dfrac{\\rho C_dA v^2}{2m}', say: 'drag deceleration. Effect: grows with the square of speed, so it overtakes the engine\'s push at the top speed. Why: pushing air out of the way takes force proportional to dynamic pressure.' },
              { sym: 'C_{rr}\\,g', say: 'rolling resistance, a small constant (about 0.15 m/s²) that is always there. Effect: almost negligible next to drag at speed.' },
            ],
            worked: {
              title: 'At 250 km/h with medium wings',
              steps: [
                `\\(v = ${f1(v250)}\\) m/s. Engine limit: \\(P/(mv) = ${mid.power * 1000} \\div (${mid.mass} \\times ${f1(v250)}) = ${f1(pLimit)}\\) m/s².`,
                `Load \\(N = mg + \\tfrac12\\rho C_LA v^2 = ${f0(nLoad)}\\) N, so the tyre limit is \\(${mid.mu} \\times 0.55 \\times ${f0(nLoad)} \\div ${mid.mass} = ${f1(tracLimit)}\\) m/s² (the model also caps this at the sideways cap).`,
                `Drag: \\(${f2(rho0)} \\times ${f2(mid.cdA)} \\times ${f1(v250)}^2 \\div (2 \\times ${mid.mass}) = ${f1(drag250)}\\) m/s², plus rolling ${f2(dm.crr)} m/s².`,
                `Net acceleration: \\(${f1(Math.min(pLimit, tracLimit))} - ${f1(drag250)} - ${f2(dm.crr)} = ${f1(Math.min(pLimit, tracLimit) - drag250 - dm.crr)}\\) m/s².`,
              ],
              answer: `${f2(net250 / G)} g at 250 km/h: still pulling hard, but the engine is now the limit and drag is eating over a third of what it makes.`,
            },
          },
          {
            t: 'plot',
            title: 'Straight-line acceleration against speed',
            x: [0, 360],
            y: [-0.2, 2],
            xLabel: 'speed (km/h)',
            yLabel: 'acceleration (g)',
            curves: [0, 0.5, 1].map((wl, i) => ({
              f: (v: number) => dynamics(setupForWing(wl), airDensity(0)).accel(Math.max(v / 3.6, 0.5), 0) / G,
              color: ['#3b6fd8', '#e07b2a', '#7b4fc9'][i],
              label: ['skinny wings', 'medium wings', 'full wings'][i],
            })),
            hlines: [{ y: 0, label: 'top speed where each curve crosses zero' }],
            caption: 'Below about 120 km/h the tyres limit acceleration (the curves are flat and close together); above that the engine does, and the curves fall away as drag grows. Where a curve crosses zero the car has reached its top speed. Skinny wings cross at the highest speed: less drag.',
          },
          {
            t: 'math',
            tex: String.raw`v_{\mathrm{top}} \approx \left(\frac{2P}{\rho\, C_d A}\right)^{1/3}`,
            where: [{ sym: 'v_{\\mathrm{top}}', def: 'speed at which drag uses all the power, m/s (ignoring rolling resistance)' }],
            syntax: [
              { sym: '\\dfrac{2P}{\\rho C_dA}', say: 'power over the drag "rating". Effect: more power or less drag both raise the top speed. Why: at top speed power equals drag force times speed, \\(P = \\tfrac12\\rho C_dA v^3\\), and this is that equation rearranged.' },
              { sym: '(\\cdot)^{1/3}', say: 'the cube root. Effect: a 10% power increase adds only about 3% to top speed. Why: drag grows with the cube of speed (force with \\(v^2\\), power with \\(v^3\\)), so each extra km/h costs much more than the last.' },
            ],
            worked: {
              title: 'Monza with the skinniest wings',
              steps: [`\\(P = ${lowDrag.power}\\) kW, \\(\\rho = ${f2(airDensity(142))}\\) at Monza’s altitude, \\(C_dA = ${f2(lowDrag.cdA)}\\) m².`, `\\(v_{\\mathrm{top}} = (2 \\times ${lowDrag.power * 1000} \\div (${f2(airDensity(142))} \\times ${f2(lowDrag.cdA)}))^{1/3} = ${f1(vTop)}\\) m/s \\(= ${f0(vTop * 3.6)}\\) km/h.`],
              answer: `${f0(vTop * 3.6)} km/h in theory; the simulated lap peaks a little lower because rolling resistance takes a little more and the straight ends before the car has fully run out of acceleration.`,
            },
          },
        ],
      },
      {
        id: 'braking',
        title: 'Braking and the friction circle',
        blocks: [
          p('A tyre has one budget of grip. It can spend it braking, cornering, or accelerating, but not all three at full strength at once. Drawn as a graph of sideways against forward force the budget is a circle, and the rest of the lap model respects it everywhere.'),
          {
            t: 'math',
            tex: String.raw`\left(\frac{a_x}{a_{\max}}\right)^{2} + \left(\frac{a_y}{a_{\max}}\right)^{2} \le 1 \;\Longrightarrow\; a_x = a_{\max}\sqrt{1-\left(\frac{a_y}{a_{\max}}\right)^{2}}`,
            where: [
              { sym: 'a_x', def: 'forward (+) or backward (−) acceleration available, m/s²' },
              { sym: 'a_y', def: 'sideways acceleration already being used, m/s²' },
              { sym: 'a_{\\max}', def: 'the most the tyres can give in any single direction, m/s²' },
            ],
            syntax: [
              { sym: '\\left(\\dfrac{a_x}{a_{\\max}}\\right)^{2}+\\left(\\dfrac{a_y}{a_{\\max}}\\right)^{2}\\le1', say: 'the equation of a circle (or its inside): fractions of the maximum, squared and added. Effect: it says forward and sideways grip trade off along a circle, not a straight line. Why: the tyre\'s force is one arrow, and an arrow\'s length (its total) is what is limited, by Pythagoras.' },
              { sym: '\\le 1', say: '"less than or equal to one": inside or on the circle. Effect: you can be anywhere inside, but not beyond: past it the tyre slides.' },
              { sym: '\\sqrt{1-(a_y/a_{\\max})^2}', say: 'the share of grip left for braking or accelerating. Effect: it is 1 on a straight and 0 at the cornering limit. Because it is a square root, the first bit of cornering costs little: at 50% cornering you still have 87% of your braking.' },
            ],
            worked: {
              title: 'Halfway through a corner',
              steps: [`The tyres can give \\(a_{\\max} = 5.0\\) g, and the corner is already using \\(a_y = 70\\%\\) of that, \\(${f1(aY / G)}\\) g.`, `The share left is \\(\\sqrt{1 - 0.7^2} = ${f3(Math.sqrt(1 - 0.49))}\\).`, `\\(a_x = 5.0 \\times ${f3(Math.sqrt(1 - 0.49))} = ${f1(aX / G)}\\) g.`],
              answer: `Using 70% of the grip for cornering still leaves ${f0((aX / aMax) * 100)}% for braking or accelerating, which is why drivers can trail the brakes into a corner and squeeze the throttle on at the apex.`,
            },
          },
          {
            t: 'math',
            tex: String.raw`a_{\mathrm{brk}}(v) = \min\!\left(a_{\mathrm{brk,max}},\ a_{\max}(v)\sqrt{1-\left(\tfrac{a_y}{a_{\max}}\right)^{2}}\right) + \frac{\rho\, C_dA\, v^{2}}{2m} + C_{rr}\, g`,
            where: [
              { sym: 'a_{\\mathrm{brk,max}}', def: 'strongest braking the discs can manage, 5.6 g' },
              { sym: 'a_{\\max}(v)', def: 'grip limit at speed v: \\(\\mu(g + F_{\\mathrm{down}}/m)\\), capped at 6.3 g' },
            ],
            syntax: [
              { sym: 'a_{\\mathrm{brk,max}}', say: 'the brake system\'s own ceiling. Effect: at very high speed the tyres could give more than the discs can turn into force, so this caps braking. Why: brakes, not tyres, are the limit up to about 200 km/h.' },
              { sym: '\\min(\\cdot,\\cdot)', say: 'the weaker of the tyre limit and the brake limit decides.' },
              { sym: '+\\ \\dfrac{\\rho C_dA v^2}{2m}', say: 'drag helps when braking. Effect: at 330 km/h drag alone slows the car by about 1 g, so early braking is gentler than late braking. Why: drag always opposes motion, whether or not the brakes are on.' },
            ],
            worked: {
              title: 'From 330 km/h to 80 km/h',
              steps: [`Straight-line braking at 330 km/h: ${f1(a1 / G)} g; at 80 km/h: ${f1(a2 / G)} g. Average \\(\\bar a = ${f1(abar)}\\) m/s².`, `\\(d = (v_1^2 - v_2^2)/(2\\bar a) = (${f0(v1 * v1)} - ${f0(v2 * v2)}) \\div ${f1(2 * abar)} = ${f0(dbrake)}\\) m.`],
              answer: `About ${f0(dbrake)} m of braking: a long enough zone that braking a few metres later than the car in front is the classic way to pass.`,
            },
          },
          { t: 'f1-viz', viz: 'gg', circuit: 'monza' },
        ],
      },
      {
        id: 'passes',
        title: 'Accelerate, brake, take the minimum',
        lead: 'How two simple passes make a whole lap.',
        blocks: [
          p('The cornering formula gives the fastest speed a car could hold at each point of the track. But a car cannot jump between speeds: after a slow corner it can only accelerate so hard, and before one it must start braking early enough. So the model makes two passes along the lap and keeps the lower speed at every point.'),
          {
            t: 'math',
            tex: String.raw`v_{i+1}\leftarrow\min\!\left(v_{i+1},\ \sqrt{v_i^{2}+2\,a_{\mathrm{acc}}(v_i)\,\Delta s_i}\right), \qquad v_i\leftarrow\min\!\left(v_i,\ \sqrt{v_{i+1}^{2}+2\,a_{\mathrm{brk}}(v_{i+1})\,\Delta s_i}\right)`,
            where: [
              { sym: 'v_i', def: 'the speed at sample i, which starts as the cornering limit and is lowered by each pass' },
              { sym: 'a_{\\mathrm{acc}},\\ a_{\\mathrm{brk}}', def: 'the acceleration and braking the car can manage at that speed' },
              { sym: '\\Delta s_i', def: 'distance from sample i to the next' },
            ],
            syntax: [
              { sym: 'v^2_{\\text{next}}=v^2+2a\\,\\Delta s', say: 'the constant-acceleration rule \\(v^2 = u^2 + 2as\\). Effect: it says how much speed you gain over a short step. Why: it needs distance (which the track gives) and not time (which is what we are trying to find).' },
              { sym: '\\leftarrow', say: '"is replaced by": the old speed is overwritten. Effect: each pass lowers some speeds and leaves the rest alone.' },
              { sym: '\\min(\\cdot,\\cdot)', say: '"the smaller of". Effect: a speed can never go above the cornering limit or what the car can reach from the previous point. Why: the real lap is limited by all of these at once, so the lowest wins.' },
              { sym: '\\text{forward pass}', say: 'first formula, run in the direction of travel: the car can only be as fast as it could accelerate to. Effect: it fixes the speed on the way out of every corner.' },
              { sym: '\\text{backward pass}', say: 'second formula, run against the direction of travel: the car can only be as fast as it can still slow down from. Effect: it fixes the speed on the way into every corner, which is why braking points come out.' },
            ],
            worked: {
              title: 'One step of the forward pass',
              steps: [`A car at \\(v = ${vStep}\\) m/s can accelerate at \\(${aStep}\\) m/s² and the step is 5 m.`, `\\(\\sqrt{${vStep}^2 + 2 \\times ${aStep} \\times 5} = ${f2(vNext)}\\) m/s.`],
              answer: `It gains only ${f2(vNext - vStep)} m/s per 5 m step, so catching up with a limit 7 m/s higher takes about ${f0((7 / (vNext - vStep)) * 5)} m: this is why straights after slow corners are so important.`,
            },
          },
          { t: 'f1-viz', viz: 'passes', circuit: 'monza' },
          {
            t: 'math',
            tex: String.raw`\text{throttle} = \frac{a_x + \dfrac{\rho C_dA\,v^{2}}{2m} + C_{rr}\,g}{P\,/\,(m\,v)}`,
            where: [{ sym: 'a_x', def: 'the acceleration the car actually achieves in the lap, from the change of speed' }],
            syntax: [
              { sym: 'a_x + \\dfrac{\\rho C_dA v^2}{2m} + C_{rr}g', say: 'the push needed from the engine: the acceleration the lap needs plus what drag and rolling resistance take away. Effect: holding a steady speed at high speed already needs a big push, which is why top-speed throttle is 100% but a coast is 0%.' },
              { sym: 'P/(mv)', say: 'the most the engine could give at this speed. Effect: dividing by it turns the need into a fraction of the engine, the pedal position. Where the tyres, not the engine, limit the acceleration the answer is below one: the driver is feathering the pedal.' },
            ],
            worked: {
              title: 'At 252 km/h, accelerating at 3 m/s²',
              steps: [`Needed push: \\(3 + ${f2(dm.dragK * vT * vT)} + ${f2(dm.crr)} = ${f2(needT)}\\) m/s².`, `Engine capacity: \\(${mid.power * 1000} \\div (${mid.mass} \\times ${vT}) = ${f2(supT)}\\) m/s².`],
              answer: `Throttle = ${f2(needT)} ÷ ${f2(supT)} = ${f0((needT / supT) * 100)}%.`,
            },
          },
          {
            t: 'math',
            tex: String.raw`T = \sum_{i=1}^{N}\frac{2\,\Delta s_i}{v_i+v_{i+1}}`,
            where: [{ sym: 'T', def: 'lap time, s' }],
            syntax: [
              { sym: '\\sum_{i=1}^{N}', say: '"sum from i = 1 to N": add the time of every slice of the lap. Effect: each slice counts equally, so one slow corner costs the same time as any other slow stretch of the same length.' },
              { sym: '\\dfrac{2\\Delta s_i}{v_i+v_{i+1}}', say: 'slice length divided by the average of its two end speeds. Effect: it is the time to cross that slice. Why: time is distance over average speed, and the speed changes along the slice, so we average it.' },
            ],
            worked: {
              title: 'Three slices',
              steps: sl.map((s, i) => `Slice ${i + 1}: \\(2 \\times ${s.ds} \\div (${s.v1} + ${s.v2}) = ${f4(slT[i])}\\) s.`),
              answer: `${f3(slT.reduce((x, y) => x + y, 0))} s for 15 m. The real lap is the same sum over a thousand or so slices.`,
            },
          },
        ],
      },
      {
        id: 'sensitivity',
        title: 'What changes the lap',
        blocks: [
          p('A lap model is most useful for questions of the form "what if?". Because a whole lap runs in a few milliseconds, the model can change one ingredient by 1% and see what the lap does. That tells you what a circuit pays for.'),
          {
            t: 'math',
            tex: String.raw`\Delta T \approx \frac{\partial T}{\partial x}\,\Delta x`,
            where: [
              { sym: 'x', def: 'one ingredient of the car: grip, downforce, drag, power, mass or braking' },
              { sym: '\\Delta x', def: 'a small change in it, here 1%' },
            ],
            syntax: [
              { sym: '\\Delta T', say: '"delta T": the change in lap time. Effect: negative means faster.' },
              { sym: '\\dfrac{\\partial T}{\\partial x}', say: '"partial T by partial x": how much the lap time changes per unit change of x, holding everything else fixed. Effect: it is the slope; a bigger slope means that ingredient matters more at this track. Why: the partial sign says "change only x".' },
              { sym: '\\approx', say: 'only valid for small changes: for large ones the slope itself changes, so each sensitivity here is for +1% only.' },
            ],
            worked: {
              title: 'Grip +1% and power +1%',
              steps: [`Monza: grip +1% = ${f0(grab(sMonza, 'mu'))} ms, power +1% = ${f0(grab(sMonza, 'power'))} ms.`, `Monaco: grip +1% = ${f0(grab(sMonaco, 'mu'))} ms, power +1% = ${f0(grab(sMonaco, 'power'))} ms.`],
              answer: `Monza gets ${f1(Math.abs(grab(sMonza, 'power') / grab(sMonaco, 'power')))} times as much from power as Monaco does; Monaco gets ${f1(Math.abs(grab(sMonaco, 'mu') / grab(sMonza, 'mu')))} times as much from grip as Monza does.`,
            },
          },
          { t: 'f1-viz', viz: 'sensitivity', circuit: 'monza' },
          { t: 'f1-viz', viz: 'sensitivity', circuit: 'monaco' },
        ],
      },
      {
        id: 'limits',
        title: 'What the model leaves out',
        blocks: [
          {
            t: 'dodont',
            do: [
              'Use it to compare circuits, and to see why one is fast or slow.',
              'Use the sensitivities to see what a track pays for.',
              'Use the speed, brake and g traces to understand how a lap is built.',
            ],
            dont: [
              'Do not expect it to match a real lap time to the tenth: it is typically within a few per cent.',
              'Do not read its throttle and gear traces as telemetry: both are derived and approximate.',
              'Do not treat its corner numbers as the official FIA numbering.',
            ],
          },
          {
            t: 'list',
            items: [
              '**Elevation and camber.** The centreline data is flat, so Eau Rouge\'s compression, COTA\'s uphill start and banked corners are not modelled (only the thinner air at altitude is).',
              '**Tyres.** Grip is one number: no warm-up, degradation, temperature or compound.',
              '**Energy and fuel.** Power is a constant average; battery deployment, harvesting, lifting and coasting are not modelled, which is why real full-throttle shares are somewhat lower.',
              '**Drivers, traffic and weather.** The lap is a perfect solo one in dry, windless conditions.',
              '**Data accuracy.** The outlines are traced from public data accurate to a few metres, so very tight bends and very fast kinks are the least certain parts.',
              '**Calibration.** The few free constants were tuned once against approximate recent qualifying times for 23 circuits. The match is partly by construction, so judge the model by whether its patterns make sense.',
            ],
          },
        ],
      },
    ],
    sources: [
      'Milliken, W. F., & Milliken, D. L. (1995). *Race Car Vehicle Dynamics*. SAE International.',
      'Brayshaw, D. L., & Harrison, M. F. (2005). A quasi steady state approach to race car lap simulation in order to understand the effects of racing line and centre of gravity location. *Proceedings of the IMechE, Part D*, 219(6), 725–739.',
      'Braghin, F., Cheli, F., Melzi, S., & Sabbioni, E. (2008). Race driver model. *Computers & Structures*, 86(13–14), 1503–1516.',
      'Heilmeier, A., Wischnewski, A., Hermansyah, L., Lienkamp, M., & Betz, J. (2020). Minimum curvature trajectory planning and control for an autonomous race car. *Vehicle System Dynamics*, 58(10), 1497–1527.',
      'Bacinger, T. f1-circuits (MIT licence). https://github.com/bacinger/f1-circuits',
    ],
    related: ['sports/f1/atlas/compare-circuits', 'sports/f1/circuits/tracks-racing-line', 'sports/f1/physics-theory/friction-circle-and-slip-angle', 'sports/f1/physics-theory/downforce-aerodynamics', 'mathematics/calculus/derivatives-meaning'],
  }
}
