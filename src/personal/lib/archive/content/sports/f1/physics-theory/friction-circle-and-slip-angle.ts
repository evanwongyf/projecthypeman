import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'A tyre has a fixed amount of grip at any moment, and it can spend it on braking, accelerating or turning, but not on all of them at full strength at once. That budget is the friction circle. The way a tyre generates cornering force, by running at a small slip angle, explains understeer, oversteer and almost every complaint a driver makes on the radio.',
  nutshell: [
    String.raw`**Friction circle:** the combined acceleration cannot exceed the grip limit, \(\sqrt{a_x^2 + a_y^2} \le \mu g\) for a car with no downforce.`,
    String.raw`Downforce enlarges the circle with speed: the limit becomes \(\mu\,(g + D/m)\), which is why fast corners can be taken at over 4 g.`,
    'A tyre makes cornering force by pointing slightly away from the direction it is travelling. That small angle is the **slip angle**; force rises with it up to a peak, then falls away.',
    '**Understeer**: the front tyres run out of grip first and the car runs wide. **Oversteer**: the rears give up first and the back steps out.',
    'Weight transfer loads one tyre and unloads another, and because tyres are **load-sensitive** the pair loses total grip.',
  ],
  sections: [
    {
      id: 'circle',
      title: 'The friction circle',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\sqrt{a_x^2 + a_y^2} \;\le\; \mu\, g`,
          caption: 'The combined acceleration (braking or accelerating, plus cornering) must stay inside a circle whose radius is set by the grip.',
          where: [
            { sym: 'a_x', def: 'Longitudinal acceleration: braking (negative) or accelerating (positive), in m/s²' },
            { sym: 'a_y', def: 'Lateral (cornering) acceleration, in m/s²' },
            { sym: String.raw`\mu`, def: 'Coefficient of friction of tyre on track; racing slicks reach well above 1' },
            { sym: 'g', def: 'Gravitational acceleration, 9.81 m/s²' },
          ],
          syntax: [
            { sym: String.raw`\sqrt{a_x^2 + a_y^2}`, say: '“the square root of a-x squared plus a-y squared”: Pythagoras, the length of the combined acceleration arrow' },
            { sym: String.raw`\le`, say: '“is less than or equal to”' },
            { sym: String.raw`\mu`, say: '“mu”, the Greek letter used for friction' },
          ],
          worked: {
            title: 'Braking while turning at a slow corner',
            steps: [
              String.raw`Take \(\mu = 1.6\) at low speed, where downforce is small. The circle’s radius is \(1.6\) g.`,
              String.raw`The driver is still braking at \(1.0\) g on entry. Square both: \(1.6^2 = 2.56\), \(1.0^2 = 1.00\).`,
              String.raw`Lateral grip left: \(\sqrt{2.56 - 1.00} = \sqrt{1.56} \approx 1.25\) g.`,
              String.raw`Brake at \(1.2\) g instead: \(\sqrt{2.56 - 1.44} = \sqrt{1.12} \approx 1.06\) g.`,
            ],
            answer: 'Braking at 1.0 g leaves only 1.25 g for turning, not 1.6 g. Every bit of extra braking into the corner takes cornering grip away, which is why late, hard braking makes a car run wide.',
          },
        },
        {
          t: 'plot',
          title: 'The grip budget',
          x: [-2, 2],
          y: [-2, 2],
          xLabel: 'lateral acceleration (g)',
          yLabel: 'longitudinal (g): + accelerating, − braking',
          curves: [
            { f: (x: number) => Math.sqrt(Math.max(0, 2.56 - x * x)), label: 'limit, μ = 1.6', from: -1.6, to: 1.6 },
            { f: (x: number) => -Math.sqrt(Math.max(0, 2.56 - x * x)), from: -1.6, to: 1.6 },
          ],
          points: [
            { x: 0, y: -1.6, label: 'straight-line braking' },
            { x: 1.25, y: -1, label: 'trail braking' },
            { x: 1.6, y: 0, label: 'mid-corner' },
            { x: 1.06, y: 0.8, label: 'exit, traction-limited' },
          ],
          caption: 'Illustrative low-speed circle with no downforce. In reality the top half is flattened: a rear-wheel-drive car can only accelerate on two tyres and is limited by power at higher speed, so the shape is closer to a lopsided ellipse than a circle.',
        },
        {
          t: 'steps',
          items: [
            { title: 'Straight-line braking', body: 'All the grip goes into slowing down, at the bottom of the circle.' },
            { title: 'Trail braking', body: 'The driver releases the brake progressively while turning in, sliding round the edge of the circle from braking into cornering.' },
            { title: 'Apex', body: 'Pure cornering at the side of the circle; the car is at its minimum speed.' },
            { title: 'Exit', body: 'Throttle comes in as steering comes off, sliding round towards acceleration. Too much throttle too early pushes outside the circle: wheelspin or oversteer.' },
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'A quick way to picture it',
          text: 'Think of the circle as a fixed amount of money. You can spend it all on braking, all on turning or split between them, but the total is fixed. A good driver keeps the car on the edge of the circle the whole way round; a poor one wastes grip by braking, then turning, then accelerating as separate actions.',
        },
      ],
    },
    {
      id: 'downforce',
      title: 'How downforce grows the circle',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\frac{m v^2}{r} = \mu\left(m g + k v^2\right) \;\Longrightarrow\; v^2 = \frac{\mu g r}{1 - \mu k r / m}`,
          caption: 'Cornering at the limit with downforce D = kv². With k = 0 this reduces to the familiar v = √(μgr).',
          where: [
            { sym: 'r', def: 'Corner radius, in metres' },
            { sym: 'k', def: String.raw`Downforce constant, in N per (m/s)², so \(D = k v^2\)` },
            { sym: 'm', def: 'Car mass, in kg' },
          ],
          syntax: [
            { sym: String.raw`\frac{m v^2}{r}`, say: '“m v squared over r”: the force needed to keep a mass turning in a circle' },
            { sym: String.raw`\mu(mg + kv^2)`, say: '“mu times the total vertical load”: weight plus downforce' },
          ],
          worked: {
            title: 'A 100 m radius corner, with and without aero',
            steps: [
              String.raw`Take \(\mu = 1.6\), \(m = 800\) kg, \(r = 100\) m, \(k = 2.5\) N/(m/s)².`,
              String.raw`No downforce: \(v = \sqrt{1.6 \times 9.81 \times 100} = \sqrt{1{,}570} \approx 39.6\) m/s \(= 143\) km/h.`,
              String.raw`With downforce: \(\mu k r / m = 1.6 \times 2.5 \times 100 \div 800 = 0.5\).`,
              String.raw`\(v^2 = 1{,}570 \div (1 - 0.5) = 3{,}139\), so \(v \approx 56.0\) m/s \(\approx 202\) km/h.`,
              String.raw`Lateral acceleration: \(v^2/r = 31.4\) m/s² \(\approx 3.2\) g. Downforce there: \(2.5 \times 3{,}139 \approx 7{,}850\) N, almost exactly the car’s own weight.`,
            ],
            answer: String.raw`Downforce raises the cornering speed of this corner from about 143 to about 202 km/h. If \(\mu k r/m\) reaches 1, the formula blows up: in that idealised model, grip grows as fast as the need for it, and the corner is limited by engine power rather than grip. That is why some fast corners on modern circuits are taken flat out.`,
          },
        },
        {
          t: 'table',
          head: ['Corner (illustrative)', 'Radius', 'Rough speed', 'What limits it'],
          rows: [
            ['Tight hairpin', '15 m', '≈ 55 km/h (√(1.6 × 9.81 × 15))', 'Mechanical grip and traction'],
            ['Medium corner', '100 m', '≈ 200 km/h with aero', 'Tyres plus downforce'],
            ['Fast sweeper', '250 m and up', 'Near flat out', 'Downforce, driver commitment'],
          ],
          caption: 'Figures from the simple model above, not from real circuits; real speeds depend on banking, camber, the car and the set-up.',
        },
      ],
    },
    {
      id: 'slip-angle',
      title: 'Slip angle: how a tyre makes cornering force',
      blocks: [
        {
          t: 'p',
          text: 'A rolling tyre does not go exactly where it points. To push sideways, the contact patch must twist slightly, so the wheel points a little inside the direction it is travelling. That angle, between where the wheel points and where it goes, is the **slip angle** \\(\\alpha\\). Small slip angle, small force; more slip angle, more force, up to a peak. Past the peak the patch is mostly sliding and the force falls.',
        },
        {
          t: 'plot',
          title: 'Lateral force against slip angle',
          x: [0, 15],
          y: [0, 1.8],
          xLabel: 'slip angle α (degrees)',
          yLabel: 'lateral force ÷ vertical load',
          curves: [
            { f: (a: number) => 1.6 * Math.sin(1.6 * Math.atan(0.3 * a)), label: 'tyre curve' },
            { f: (a: number) => 0.768 * a, label: 'linear approximation', dashed: true, from: 0, to: 2.3 },
          ],
          points: [{ x: 5, y: 1.6, label: 'peak ≈ 5°' }],
          vlines: [{ x: 5 }],
          caption: 'An illustrative curve in the style of Pacejka’s “magic formula”. Real F1 tyres peak at a small slip angle (a few degrees) and their exact curves are confidential to Pirelli and the teams.',
        },
        {
          t: 'math',
          tex: String.raw`F_y \approx C_\alpha\,\alpha \quad (\text{small } \alpha)`,
          caption: 'In the linear region, lateral force is proportional to slip angle.',
          where: [
            { sym: 'F_y', def: 'Lateral (sideways) tyre force, in newtons' },
            { sym: String.raw`C_\alpha`, def: 'Cornering stiffness, in newtons per degree' },
            { sym: String.raw`\alpha`, def: 'Slip angle, in degrees' },
          ],
          syntax: [
            { sym: String.raw`\approx`, say: '“is approximately equal to”' },
            { sym: String.raw`C_\alpha`, say: '“C-alpha”: the subscript says this stiffness belongs to slip angle' },
          ],
          worked: {
            title: 'Where the straight line stops working',
            steps: [
              String.raw`From the plotted curve the initial slope is \(1.6 \times 1.6 \times 0.3 = 0.768\) per degree. With 4,000 N on the tyre, \(C_\alpha = 0.768 \times 4{,}000 \approx 3{,}070\) N per degree.`,
              String.raw`At \(\alpha = 1°\): linear gives \(3{,}070\) N; the curve gives \(0.719 \times 4{,}000 \approx 2{,}880\) N. Close.`,
              String.raw`At \(\alpha = 2°\): linear gives \(6{,}140\) N; the curve gives \(1.217 \times 4{,}000 \approx 4{,}870\) N. Already 20% out.`,
            ],
            answer: 'The linear rule is fine for gentle steering, but a car at the limit lives where the curve bends over. That is where a driver “feels” the grip fading through the steering.',
          },
        },
        {
          t: 'math',
          tex: String.raw`\kappa = \frac{\omega R - v}{v}`,
          caption: 'Slip ratio, the longitudinal cousin of slip angle: how much faster (or slower) the tyre surface moves than the car.',
          where: [
            { sym: String.raw`\kappa`, def: 'Slip ratio; positive under traction, negative under braking' },
            { sym: String.raw`\omega`, def: 'Wheel rotation speed, in radians per second' },
            { sym: 'R', def: 'Rolling radius of the tyre, in metres' },
            { sym: 'v', def: 'Car speed, in m/s' },
          ],
          syntax: [
            { sym: String.raw`\kappa`, say: '“kappa”' },
            { sym: String.raw`\omega R`, say: '“omega times R”: the speed of the tyre’s surface' },
          ],
          worked: {
            title: 'Wheelspin out of a slow corner',
            steps: [
              String.raw`Car at \(v = 30\) m/s; rear wheels spinning at \(\omega = 91.7\) rad/s with \(R = 0.36\) m.`,
              String.raw`Tyre surface speed: \(91.7 \times 0.36 \approx 33.0\) m/s.`,
              String.raw`\(\kappa = (33.0 - 30) \div 30 \approx 0.10\), so 10% slip.`,
            ],
            answer: 'A little slip (of the order of several per cent to around ten) is where peak traction lives. Much more and the tyre is spinning, overheating and giving less drive; locking under braking is the same thing in reverse, with κ = −1 at a full lock.',
          },
        },
      ],
    },
    {
      id: 'balance',
      title: 'Understeer and oversteer',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\delta \approx \frac{L}{R} + (\alpha_f - \alpha_r)`,
          caption: 'Steer angle needed for a corner of radius R: the geometric part, plus the difference between front and rear slip angles (angles in radians, then converted).',
          where: [
            { sym: String.raw`\delta`, def: 'Front-wheel steer angle' },
            { sym: 'L', def: 'Wheelbase, in metres' },
            { sym: String.raw`\alpha_f,\ \alpha_r`, def: 'Front and rear slip angles' },
          ],
          syntax: [
            { sym: String.raw`\delta`, say: '“delta” (lower case), here a steering angle' },
            { sym: String.raw`\alpha_f - \alpha_r`, say: '“alpha-f minus alpha-r”: front slip angle minus rear slip angle' },
          ],
          worked: {
            title: 'A 50 m corner with a 3.6 m wheelbase',
            steps: [
              String.raw`Geometric (Ackermann) steer: \(3.6 \div 50 = 0.072\) rad \(= 0.072 \times 57.3 \approx 4.1°\).`,
              String.raw`Fronts at \(3°\), rears at \(2°\): add \(3 - 2 = 1°\), so about \(5.1°\). The driver needs more lock than geometry alone: understeer.`,
              String.raw`Fronts at \(2°\), rears at \(3°\): subtract \(1°\), so about \(3.1°\). Less lock than geometry: oversteer, and at the limit the driver may need opposite lock.`,
            ],
            answer: 'Understeer and oversteer are just whichever axle is running the larger slip angle. Balanced (neutral) means the two are about equal.',
          },
        },
        {
          t: 'table',
          head: ['', 'Understeer', 'Oversteer'],
          rows: [
            ['What happens', 'Front slides; car runs wide', 'Rear slides; car rotates too much'],
            ['Driver feel', 'Steering goes light, car will not turn', 'Rear steps out; needs opposite lock'],
            ['Common cause', 'Too fast on entry, front wing stalled in dirty air, worn fronts', 'Too much throttle on exit, rear overheated, lift mid-corner'],
            ['Set-up fixes', 'More front wing, softer front anti-roll bar, brake balance rearward', 'More rear wing, softer rear, smoother torque map'],
            ['Is it fast?', 'Safe but slow; tyres scrub', 'Can be quick in small doses, but punished by tyre wear'],
          ],
        },
        {
          t: 'dodont',
          do: [
            'Diagnose by phase: entry, mid-corner and exit can each have a different balance.',
            'Link understeer behind another car to lost front downforce in [dirty air](@sports/f1/physics-theory/drs-overtaking).',
            'Remember that a small, controlled slide is fast and a big slide is slow; see [F1 versus drift](@sports/f1/drift/f1-vs-drift).',
          ],
          dont: [
            'Use “oversteer” to mean any spin: a spin is oversteer that was not caught.',
            'Assume more steering always helps understeer: past the peak slip angle it reduces grip.',
          ],
        },
      ],
    },
    {
      id: 'load-transfer',
      title: 'Weight transfer and load sensitivity',
      blocks: [
        {
          t: 'p',
          text: String.raw`In a corner, load moves from the inside tyres to the outside ones: \(\Delta F_z = m a_y h / t\), with \(t\) the track width. For 800 kg at 3 g, a centre of mass 0.3 m high and a track of about 1.6 m, that is \(800 \times 29.43 \times 0.3 \div 1.6 \approx 4{,}410\) N moved across the car.`,
        },
        {
          t: 'example',
          title: 'Why load transfer costs grip',
          lines: [
            { label: 'Model', text: 'Suppose a tyre’s friction falls with load: μ = 1.8 − 0.00005 × load (N). This load sensitivity is real, though the numbers here are illustrative.' },
            { label: 'Even', text: 'Two tyres at 4,000 N each: μ = 1.6, grip = 2 × 1.6 × 4,000 = 12,800 N.' },
            { label: 'Transferred', text: '6,000 N and 2,000 N: μ = 1.5 and 1.7. Grip = 1.5 × 6,000 + 1.7 × 2,000 = 9,000 + 3,400 = 12,400 N.' },
            { label: 'Result', text: 'Same total load, 3% less grip. This is why teams want a low centre of mass and why stiffening one end of the car (more load transfer there) reduces that end’s grip.' },
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'The set-up lever',
          text: 'The anti-roll bars do not change total load transfer much, but they decide how it is shared between front and rear. Stiffening the front bar makes the front take more of it, so the front loses more grip and the car understeers more. This is one of the main balance tools engineers use.',
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
            { label: 'Q1', text: 'With a 1.6 g circle, how much braking is allowed while cornering at 1.2 g?' },
            { label: 'A1', text: '√(2.56 − 1.44) = √1.12 ≈ 1.06 g.' },
            { label: 'Q2', text: 'A car brakes at 0.8 g and corners at 1.3 g. Is it inside a 1.6 g circle?' },
            { label: 'A2', text: '√(0.64 + 1.69) = √2.33 ≈ 1.53 g, so yes, just inside.' },
            { label: 'Q3', text: 'Without downforce, the limit speed for r = 15 m and μ = 1.6?' },
            { label: 'A3', text: '√(1.6 × 9.81 × 15) = √235 ≈ 15.3 m/s ≈ 55 km/h.' },
            { label: 'Q4', text: 'Front slip angle 4°, rear 3°. Understeer or oversteer?' },
            { label: 'A4', text: 'Understeer: the front is running the bigger slip angle.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Milliken, W. F. & Milliken, D. L. (1995). *Race Car Vehicle Dynamics*. SAE International.',
    'Pacejka, H. B. (2012). *Tire and Vehicle Dynamics* (3rd ed.). Butterworth-Heinemann.',
    'Smith, C. (1978). *Tune to Win*. Aero Publishers.',
  ],
  related: [
    'sports/f1/physics-theory/tyres-grip',
    'sports/f1/physics-theory/brakes-and-suspension',
    'sports/f1/physics-theory/downforce-aerodynamics',
    'sports/f1/drift/drift-physics',
    'sports/f1/drift/f1-vs-drift',
    'sports/f1/circuits/tracks-racing-line',
    'sports/physics/friction-traction',
  ],
}

export default guide
