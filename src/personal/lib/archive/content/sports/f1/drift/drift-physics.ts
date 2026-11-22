import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'A drift looks like chaos but is a balance of forces the driver holds on purpose. The rear tyres are pushed past their peak grip and slide, the front tyres are kept near their peak by counter-steer, and throttle sets how much the rear slides. This guide builds that picture from slip angle, the tyre grip curve, the friction circle and weight transfer.',
  nutshell: [
    '**Slip angle** is the angle between where a tyre points and where it travels; a tyre makes sideways force only by running at one.',
    'Lateral force rises with slip angle up to a **peak** (a few to around ten degrees, depending on the tyre) and then falls away: past the peak the tyre is sliding.',
    'In a drift the **rear** tyres are deliberately past the peak while counter-steer keeps the **front** tyres near it, so the front can still steer the car.',
    'The **friction circle** means a tyre’s grip is shared between cornering and driving force: add enough throttle and the rear runs out of sideways grip.',
    '**Weight transfer** (braking, lifting, flicking the car) changes how much load, and so grip, each axle has, which is how drivers start slides.',
    'A steady drift is a balance: yaw rate, body slip angle and speed settle while the car circles at a big angle.',
  ],
  sections: [
    {
      id: 'slip-angle',
      title: 'Slip angle: the tyre is always sliding a little',
      blocks: [
        { t: 'p', text: 'A rubber tyre twists and deforms in its contact patch. To push the car sideways, the patch must travel at a small angle to the direction the wheel points: the **slip angle**. The car as a whole has its own angle too, the **body slip angle** (or sideslip), between where it points and where its centre of mass is going. In everyday driving both are small; in a drift the body slip angle is large.' },
        {
          t: 'math',
          tex: String.raw`\beta = \arctan\!\left(\frac{v_y}{v_x}\right)`,
          caption: 'The body slip angle from the car’s velocity measured in its own frame: forward component \\(v_x\\) and sideways component \\(v_y\\).',
          where: [
            { sym: '\\beta', def: 'Body slip angle (sideslip): angle between the car’s heading and its direction of travel' },
            { sym: 'v_x', def: 'Velocity along the car’s centreline, m/s' },
            { sym: 'v_y', def: 'Velocity sideways across the car, m/s' },
          ],
          syntax: [
            { sym: '\\beta', say: '“beta”: the usual symbol for body slip angle' },
            { sym: '\\arctan', say: '“arc-tan” or “inverse tangent”: the angle whose tangent is the number inside' },
            { sym: 'v_y / v_x', say: '“v y over v x”: sideways speed divided by forward speed' },
          ],
          worked: {
            title: 'A car sliding at a big angle',
            steps: [
              String.raw`Telemetry gives \(v_x = 20\) m/s forward and \(v_y = 8\) m/s sideways (relative to the car).`,
              String.raw`Ratio: \(8 / 20 = 0.4\).`,
              String.raw`\(\beta = \arctan(0.4) \approx 21.8^\circ\).`,
              String.raw`Actual speed: \(\sqrt{20^2 + 8^2} \approx 21.5\) m/s, about \(78\) km/h.`,
            ],
            answer: 'The car points about 22° away from the direction it is travelling. Competition drifts often run well beyond this, with the car close to sideways.',
          },
        },
        { t: 'callout', tone: 'note', title: 'Two different angles', text: 'Do not mix up the **tyre slip angle** (each wheel’s angle to its own path) with the **body slip angle** (the whole car’s angle to its path). In a drift the rear tyres’ slip angles are close to the body slip angle, but the front tyres’ are much smaller, because the driver has steered them to point where the car is going.' },
      ],
    },
    {
      id: 'grip-curve',
      title: 'The grip curve: peak, then slide',
      blocks: [
        {
          t: 'plot',
          title: 'Lateral force against slip angle (illustrative)',
          x: [0, 60],
          y: [0, 1.1],
          xLabel: 'tyre slip angle (degrees)',
          yLabel: 'lateral force / peak force',
          curves: [
            { f: (a: number) => Math.sin(1.9 * Math.atan(0.136 * a)), label: 'typical tyre', color: '#3b6fd8' },
          ],
          shade: [
            { from: 0, to: 4, label: 'linear range', color: '#3b6fd8' },
            { from: 25, to: 60, label: 'drift range (rear tyres)', color: '#e07b2a' },
          ],
          vlines: [{ x: 8, label: 'peak' }],
          caption: 'A schematic curve in the style of Pacejka’s “magic formula”, \\(F \\propto \\sin(C \\arctan(B\\alpha))\\) with \\(C = 1.9\\), \\(B = 0.136\\) per degree. Real peaks depend on tyre, load, temperature and surface. The shape is what matters: a steep, nearly straight rise, a rounded peak, then a slow fall. A sliding tyre still makes a lot of force, just less than its peak.',
        },
        {
          t: 'math',
          tex: String.raw`F_y \approx C_\alpha\,\alpha \quad (\text{small } \alpha)`,
          caption: 'In the linear range, lateral force is roughly proportional to slip angle. The constant \\(C_\\alpha\\) is the tyre’s cornering stiffness.',
          where: [
            { sym: 'F_y', def: 'Lateral (sideways) force from the tyre, newtons' },
            { sym: 'C_\\alpha', def: 'Cornering stiffness: newtons of force per degree (or radian) of slip' },
            { sym: '\\alpha', def: 'Tyre slip angle' },
          ],
          syntax: [
            { sym: '\\approx', say: '“is approximately”: true only for small angles' },
            { sym: 'C_\\alpha', say: '“C alpha”: the stiffness that goes with slip angle alpha' },
            { sym: '\\alpha', say: '“alpha”: the usual symbol for a tyre’s slip angle' },
          ],
          worked: {
            title: 'A rear tyre carrying 4,000 N of load',
            steps: [
              String.raw`Suppose \(C_\alpha = 1{,}000\) N per degree and peak force is \(\mu F_z = 1.0 \times 4{,}000 = 4{,}000\) N.`,
              String.raw`At \(\alpha = 2^\circ\): \(F_y \approx 1{,}000 \times 2 = 2{,}000\) N, half of peak.`,
              String.raw`The straight line would reach \(4{,}000\) N at \(4^\circ\), but the real curve bends over, so peak arrives later, here around \(8^\circ\).`,
              String.raw`At \(30^\circ\), the illustrative curve gives \(\sin(1.9\arctan(4.08)) \approx 0.58\), so about \(0.58 \times 4{,}000 \approx 2{,}300\) N.`,
            ],
            answer: 'Pushed to 30° the rear tyre still makes roughly 2,300 N sideways, about 58% of its peak in this model, which is why a drifting car still goes round the corner, just less efficiently than a gripping one.',
          },
        },
      ],
    },
    {
      id: 'friction-circle',
      title: 'The friction circle: why throttle breaks the rear loose',
      blocks: [
        { t: 'p', text: 'A tyre has one budget of grip, roughly \\(\\mu F_z\\), to share between sideways force (cornering) and fore-aft force (driving or braking). The combined force must stay inside a circle (more accurately an ellipse) of that size. A rear-wheel-drive car can spend some of the rear tyres’ budget on driving force with the throttle, leaving less for cornering. See [the friction circle and slip angle](@sports/f1/physics-theory/friction-circle-and-slip-angle).' },
        {
          t: 'math',
          tex: String.raw`\sqrt{F_x^2 + F_y^2} \;\le\; \mu F_z`,
          caption: 'The friction circle: the total force from a tyre cannot exceed the friction coefficient times the vertical load on it.',
          where: [
            { sym: 'F_x', def: 'Longitudinal (driving or braking) force, N' },
            { sym: 'F_y', def: 'Lateral (cornering) force, N' },
            { sym: '\\mu', def: 'Friction coefficient between tyre and road' },
            { sym: 'F_z', def: 'Vertical load on the tyre, N' },
          ],
          syntax: [
            { sym: '\\sqrt{\\;}', say: '“the square root of”: here the size of the combined force, by Pythagoras' },
            { sym: '\\le', say: '“is less than or equal to”: the limit cannot be exceeded' },
            { sym: '\\mu F_z', say: '“mu F z”: friction coefficient times load, the radius of the circle' },
          ],
          worked: {
            title: 'How much throttle the rear tyre can take',
            steps: [
              String.raw`Rear tyre budget: \(\mu F_z = 4{,}000\) N. The corner needs \(F_y = 3{,}500\) N from it.`,
              String.raw`Driving force left: \(F_x \le \sqrt{4{,}000^2 - 3{,}500^2} = \sqrt{16{,}000{,}000 - 12{,}250{,}000}\).`,
              String.raw`\(= \sqrt{3{,}750{,}000} \approx 1{,}936\) N.`,
              String.raw`Ask for more than about \(1{,}940\) N of drive and the total exceeds the circle: the tyre starts to slide.`,
            ],
            answer: 'Only about 1,900 N of drive is available before the rear lets go. A powerful car can far exceed that with the throttle, which is exactly how a power-over drift begins and how it is held.',
          },
        },
        { t: 'callout', tone: 'fact', title: 'Throttle steers the car', text: 'Once the rear is sliding, more throttle spins the rear wheels faster, lowers their sideways grip further and swings the rear out (more angle); less throttle lets them regain grip and pulls the angle in. Drivers say they steer a drift with their right foot as much as with their hands.' },
      ],
    },
    {
      id: 'weight-transfer',
      title: 'Weight transfer: moving grip around the car',
      blocks: [
        { t: 'p', text: 'Under braking, load shifts forward; under acceleration, backwards; in a corner, towards the outside. Since grip depends on load, shifting load shifts grip. Lifting off or braking into a corner takes load off the rear, so the rear grips less and can be made to slide with less effort.' },
        {
          t: 'math',
          tex: String.raw`\Delta F_z = \frac{m\,a\,h}{t}`,
          caption: 'Lateral load transfer: how much vertical load moves from the inside wheels to the outside wheels when the car corners.',
          where: [
            { sym: '\\Delta F_z', def: 'Load moved from inside to outside, N' },
            { sym: 'm', def: 'Car mass, kg' },
            { sym: 'a', def: 'Lateral acceleration, m/s²' },
            { sym: 'h', def: 'Height of the centre of mass above the road, m' },
            { sym: 't', def: 'Track width (distance between left and right wheels), m' },
          ],
          syntax: [
            { sym: '\\Delta', say: '“delta”: a change in a quantity' },
            { sym: 'm\\,a\\,h', say: '“m a h”: multiply mass, acceleration and height' },
          ],
          worked: {
            title: 'A grassroots drift car',
            steps: [
              String.raw`\(m = 1{,}300\) kg, \(a = 7.5\) m/s² (about \(0.76\,g\)), \(h = 0.5\) m, \(t = 1.5\) m.`,
              String.raw`\(\Delta F_z = 1{,}300 \times 7.5 \times 0.5 / 1.5\).`,
              String.raw`\(= 4{,}875 / 1.5 = 3{,}250\) N.`,
            ],
            answer: 'About 3,250 N, roughly a third of a tonne of weight, moves to the outside wheels. Because tyre grip grows less than proportionally with load, the pair of tyres loses some total grip as load transfers, which is part of why stiffening the rear of a car makes it more prone to oversteer.',
          },
        },
      ],
    },
    {
      id: 'steady-drift',
      title: 'Holding a steady drift: yaw and counter-steer',
      blocks: [
        { t: 'p', text: 'In a steady drift on a circle, the car rotates (yaws) at the same rate that its direction of travel turns. The rear is sliding at a large slip angle; the driver has counter-steered so the front wheels point roughly along the car’s path, keeping the front tyres near their peak slip angle and able to steer. Throttle keeps the rear spinning and sliding; the balance of the two holds the angle.' },
        {
          t: 'math',
          tex: String.raw`r = \frac{V}{R} \qquad a_{\text{lat}} = \frac{V^2}{R}`,
          caption: 'For a car following a circle of radius \\(R\\) at speed \\(V\\), the yaw rate and the lateral acceleration in a steady state.',
          where: [
            { sym: 'r', def: 'Yaw rate: how fast the car rotates about a vertical axis, rad/s' },
            { sym: 'V', def: 'Speed of the centre of mass, m/s' },
            { sym: 'R', def: 'Radius of the path, m' },
          ],
          syntax: [
            { sym: 'r', say: '“r”: in vehicle dynamics, the standard letter for yaw rate (not radius)' },
            { sym: '\\text{rad/s}', say: '“radians per second”: multiply by about 57.3 for degrees per second' },
          ],
          worked: {
            title: 'A drift round a 30 m radius',
            steps: [
              String.raw`\(V = 15\) m/s (54 km/h), \(R = 30\) m.`,
              String.raw`Yaw rate: \(r = 15 / 30 = 0.5\) rad/s \(\approx 28.6^\circ\)/s.`,
              String.raw`Lateral acceleration: \(15^2 / 30 = 7.5\) m/s² \(\approx 0.76\,g\).`,
              String.raw`Front tyres: suppose the front axle travels at \(20^\circ\) to the car’s centreline and the driver applies \(15^\circ\) of counter-steer; the front tyre slip angle is then about \(20 - 15 = 5^\circ\), close to peak grip.`,
            ],
            answer: 'The car turns at about 29° per second while sliding sideways, and counter-steer keeps the front tyres in their useful range. Lose the counter-steer and the front slip angle jumps; the front washes out or the car spins.',
          },
        },
        {
          t: 'table',
          head: ['If the driver…', 'Rear grip', 'Result'],
          rows: [
            ['Adds throttle', 'Falls (more wheelspin)', 'Angle grows; too much and the car spins'],
            ['Lifts off', 'Recovers', 'Angle shrinks; lift abruptly and the car may snap the other way'],
            ['Adds counter-steer', 'Unchanged', 'Front points further out; the car straightens'],
            ['Reduces counter-steer', 'Unchanged', 'Car rotates more; risk of spinning'],
            ['Brakes', 'Load moves forward, rear grip falls', 'Angle grows briefly, speed drops'],
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Closed courses only', text: 'These physics describe a car at the edge of control. Drifting is practised only on closed courses with run-off, marshals and safety equipment, never on public roads.' },
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
            { label: 'Q1', text: 'A car moves at 15 m/s forward and 15 m/s sideways in its own frame. What is its body slip angle?' },
            { label: 'A1', text: String.raw`\(\arctan(15/15) = \arctan(1) = 45^\circ\).` },
            { label: 'Q2', text: 'Why does counter-steer help, rather than fight, a drift?' },
            { label: 'A2', text: 'It lines the front wheels up with the car’s path, keeping the front tyres near their peak so they can steer and balance the sliding rear.' },
            { label: 'Q3', text: 'A rear tyre with a 5,000 N budget needs 4,000 N for cornering. How much drive can it take?' },
            { label: 'A3', text: String.raw`\(\sqrt{5{,}000^2 - 4{,}000^2} = 3{,}000\) N.` },
          ],
        },
      ],
    },
  ],
  sources: [
    'Milliken, W. F. and Milliken, D. L. (1995). *Race Car Vehicle Dynamics*. SAE International.',
    'Pacejka, H. B. (2012). *Tire and Vehicle Dynamics* (3rd ed.). Butterworth-Heinemann.',
    'Voser, C., Hindiyeh, R. Y. and Gerdes, J. C. (2010). Analysis and control of high sideslip manoeuvres. *Vehicle System Dynamics*, 48(S1).',
  ],
  related: [
    'sports/f1/physics-theory/friction-circle-and-slip-angle',
    'sports/f1/physics-theory/tyres-grip',
    'sports/f1/drift/drift-technique-and-setup',
    'sports/f1/drift/f1-vs-drift',
    'sports/physics/friction-traction',
  ],
}

export default guide
