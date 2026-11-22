import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A basketball, a javelin, a golf ball and a long jumper all follow the same curve once they leave contact with a surface: a parabola, shaped entirely by gravity pulling straight down while the object keeps coasting sideways. Splitting motion into these two independent directions is the single idea that unlocks every trajectory in sport.',
  nutshell: [
    'Horizontal and vertical motion are independent: gravity only acts vertically, so horizontal speed never changes (ignoring air resistance).',
    'With no air resistance, a **45° launch angle** gives the maximum range for a given speed, a direct consequence of the trigonometric identity \\(\\sin(2\\theta)\\).',
    'Real sports rarely use exactly 45°: a shot put is thrown from above head height, and air resistance and spin change the optimum for a javelin or golf ball.',
    'The same equations describe a basketball shot, a cannonball, and (with the right numbers) a satellite, this is literally how Newton first described orbital motion.',
  ],
  sections: [
    {
      id: 'splitting',
      title: 'Splitting the motion in two',
      blocks: [
        {
          t: 'math',
          tex: String.raw`x(t) = v_0\cos(\theta)\,t \qquad y(t) = v_0\sin(\theta)\,t - \tfrac{1}{2}g t^2`,
          where: [
            { sym: 'v_0, \\theta', def: 'Launch speed and launch angle' },
            { sym: 'g', def: 'Gravitational acceleration, 9.81 m/s² on Earth' },
          ],
          caption: 'Horizontal position grows at a constant rate (no horizontal force, ignoring air resistance); vertical position follows the same quadratic you met in [quadratics and parabolas](@mathematics/functions/quadratics), because gravity is a constant downward acceleration.',
        },
        { t: 'sports-viz', viz: 'projectile' },
        {
          t: 'math',
          tex: String.raw`R = \frac{v_0^2 \sin(2\theta)}{g} \qquad H = \frac{v_0^2 \sin^2(\theta)}{2g} \qquad T = \frac{2 v_0 \sin(\theta)}{g}`,
          caption: 'Range, maximum height and total flight time, found by solving y(t) = 0 for the landing time, then substituting back. Because \\(\\sin(2\\theta)\\) peaks at \\(2\\theta = 90°\\), range is maximised exactly at \\(\\theta = 45°\\).',
        },
        {
          t: 'example',
          title: 'A basketball free throw',
          lines: [
            { label: 'Launch', text: 'speed 7 m/s at 52° (a typical free-throw release angle, steeper than 45° to drop into the hoop from above)' },
            { label: 'Range', text: '\\(R = \\dfrac{7^2 \\sin(104°)}{9.81} = \\dfrac{49 \\times 0.970}{9.81} \\approx 4.85\\text{ m}\\)' },
            { label: 'Reading', text: 'close to the roughly 4.6 m from the free-throw line to the hoop, with the small gap explained by release height and the ball\'s own arc into the rim' },
          ],
        },
      ],
    },
    {
      id: 'not-always-45',
      title: 'Why real sports rarely use exactly 45°',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Release height', body: 'A shot put or basketball free throw launches from well above the landing height (the ground, or the hoop). The optimal angle for maximum distance is then slightly *below* 45°, the extra height gives the throw more time in the air even at a flatter angle.' },
            { title: 'Air resistance', body: 'For light, draggy objects like a javelin or a badminton shuttlecock, air resistance changes the maths substantially; real optimal javelin release angles are typically 30–35°, well below the no-drag ideal.' },
            { title: 'Lift from spin', body: 'A golf ball and a well-thrown discus both generate aerodynamic lift from backspin (see [spin and the Magnus effect](@sports/physics/spin-rotation)), which lets a flatter launch angle still achieve a long, high trajectory, golf drives typically launch around 10–15°, far below 45°.' },
          ],
        },
        {
          t: 'math',
          tex: String.raw`\theta^{*} = \arcsin\left(\frac{1}{\sqrt{2 + \frac{gh}{v_0^2}}}\right)`,
          where: [{ sym: 'h', def: 'Release height above the landing surface' }],
          caption: 'The optimal angle correcting for release height. As h grows (relative to v₀²/g), the optimal angle drops below 45°. At h = 0 this reduces back to exactly 45°.',
        },
        {
          t: 'example',
          title: 'A shot put from 2.2 m up, at 13 m/s',
          lines: [
            { label: 'Plug in', text: '\\(gh/v_0^2 = (9.81)(2.2)/169 \\approx 0.128\\)' },
            { label: 'Optimal angle', text: '\\(\\theta^{*} = \\arcsin\\left(1/\\sqrt{2.128}\\right) \\approx 43.3°\\)' },
            { label: 'Reading', text: 'only slightly below 45° here, but elite shot putters often throw closer to 35–40° in practice, since real technique trades a little optimal-angle distance for more achievable release speed at a flatter angle' },
          ],
        },
      ],
    },
  ],
  sources: ['McGinnis, P. M. (2020). *Biomechanics of Sport and Exercise* (4th ed.). Human Kinetics.', 'Bartlett, R. (2007). *Introduction to Sports Biomechanics* (2nd ed.). Routledge.'],
  related: ['mathematics/functions/quadratics', 'sports/physics/spin-rotation', 'sports/physics/drag-fluid-dynamics'],
}

export default guide
