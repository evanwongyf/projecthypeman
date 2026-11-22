import type { Guide } from '../../../../guide'
import { a, b, gk } from '../../../../football-shapes'

const guide: Guide = {
  intro:
    'A football in flight is acted on by gravity, drag and, if it spins, the Magnus force that bends its path. These three forces explain every famous free kick: Roberto Carlos’s 1997 strike against France, which started far to the right of the goal and curved in; Beckham’s dipping free kicks; and the knuckleball, a shot with almost no spin that wobbles unpredictably. This guide puts numbers on each force, shows the curve of a bent free kick, and explains why a ball with no spin can be harder to save than one with a lot. The detailed physics is on the Sports shelf, in the guides on spin and the Magnus effect and on drag; here we apply it to the free kick and its relatives.',
  nutshell: [
    'A size-5 ball has a mass of about **0.43 kg**, radius **0.11 m** and cross-section **0.038 m²**; its weight is **4.2 N**.',
    '**Drag** \\(F_D=\\tfrac12\\rho C_D A v^2\\) is about **5 N at 30 m/s**, more than the ball’s weight, so a hard-struck ball slows quickly.',
    'The **Magnus force** \\(F_M=\\tfrac12\\rho C_L A v^2\\) acts at right angles to the direction of travel and the spin axis; sidespin bends the ball sideways.',
    'A typical bent free kick curves **several metres** sideways over about 30 metres.',
    'A **knuckleball** has little spin; the airflow on the seams makes the force change as the ball flies, so the ball moves erratically.',
  ],
  sections: [
    {
      id: 'forces',
      title: 'The forces on the ball',
      lead: 'Gravity, drag and the Magnus force.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`F_D=\tfrac12\rho C_D A v^{2},\qquad F_M=\tfrac12\rho C_L A v^{2},\qquad S=\frac{r\omega}{v}`,
          caption: 'Drag, the Magnus force and the spin parameter S.',
          where: [{ sym: '\\rho', def: 'air density, about 1.2 kg/m³ at sea level' }, { sym: 'A', def: 'the ball’s cross-sectional area, πr² ≈ 0.038 m²' }, { sym: 'C_D,\\ C_L', def: 'drag and lift coefficients (about 0.25 at high speed and 0.2 for typical sidespin)' }, { sym: '\\omega', def: 'the spin rate in radians per second' }],
          syntax: [{ sym: 'v^{2}', say: 'both forces grow with the square of speed. Effect: doubling the speed quadruples the drag and the sideways force. Why: the ball meets four times as much air momentum per second.' }, { sym: 'S=r\\omega/v', say: 'the ratio of the ball’s surface speed to its forward speed. Effect: a larger S means a bigger lift coefficient. Why: more spin drags more air around one side.' }],
          worked: {
            title: 'A bent free kick from 30 metres',
            steps: ['Speed 30 m/s, so the flight time is about 1.0 s. Spin about 8 revolutions a second: S = 0.11 × 50.3/30 = 0.18.', 'Take C_L = 0.2: F_M = ½ × 1.2 × 0.2 × 0.038 × 900 = 4.1 N; lateral acceleration a = 4.1/0.43 = 9.6 m/s².', 'Sideways displacement ≈ ½ a t² = ½ × 9.6 × 1.0² ≈ 4.8 m.'],
            answer: 'A ball struck with sidespin and moderate pace can curve nearly five metres sideways over 30 metres, enough to start outside a post and finish inside it, or to bend around a wall. Roberto Carlos’s kick was reported to travel at well over 120 km/h, which magnifies the effect.',
          },
        },
        {
          t: 'pitch',
          title: 'A bent free kick: the path curves around the wall',
          view: 'attack',
          players: [a(78, 22, 'S'), b(92, 30), b(92, 34), b(92, 38), b(92, 42), gk(98, 56)],
          arrows: [{ from: [78, 22], to: [105, 44], kind: 'cross', label: 'curved' }],
          caption: 'The ball starts wide of the wall and bends back in, dipping under the bar. The keeper must judge a path that curves late in the flight.',
        },
      ],
    },
    {
      id: 'knuckle',
      title: 'The knuckleball and the dip',
      lead: 'When the spin is nearly zero.',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Knuckleball', tag: 'little or no spin', body: 'Struck with the instep through the centre of the ball. Without spin the airflow separates asymmetrically around the seams and panels, so the force on the ball changes as it rotates slowly: the ball moves unpredictably. Cristiano Ronaldo and Juninho made it famous.' },
            { title: 'The drag crisis', tag: 'speed matters', body: 'At lower speeds the ball has a high drag coefficient (about 0.45); beyond a critical speed it drops (to about 0.25). A ball that slows through that speed suddenly experiences more drag and dips late: a possible reason for the "dip" of some long-range shots.' },
            { title: 'Topspin dip', tag: 'a shot that drops', body: 'Topspin makes the Magnus force point downward, so a strongly topspun shot drops sharply late in its flight: a good way to get it under the crossbar.' },
            { title: 'The Jabulani', tag: '2010 World Cup', body: 'A ball with fewer, smoother panels flew with less drag in a straight line and then changed behaviour at lower speeds, and goalkeepers criticised its unpredictable path.' },
          ],
        },
        { t: 'sports-viz', viz: 'projectile' },
        {
          t: 'links',
          items: [
            { path: 'sports/physics/spin-rotation', note: 'The Magnus effect in detail.' },
            { path: 'sports/physics/drag-fluid-dynamics', note: 'Drag, Reynolds number and the drag crisis.' },
            { path: 'sports/physics/projectile-motion', note: 'The trajectory of a kicked ball without spin.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Goff, J. E. (2013). *Gold Medal Physics: The Science of Sports*. Johns Hopkins University Press.',
    'Carré, M. J., Asai, T., Akatsuka, T. & Haake, S. J. (2002). The curve kick of a football II: flight through the air. *Sports Engineering*, 5, 193–200.',
    'Goff, J. E. & Carré, M. J. (2009). Trajectories of spinning baseballs and soccer balls. *American Journal of Physics*, 77(11), 1020.',
    'Hong, S. & Asai, T. (2014). Effect of panel shape of soccer ball on its flight characteristics. *Scientific Reports*, 4, 5068.',
  ],
  related: ['sports/physics/spin-rotation', 'sports/football/tactics/set-pieces', 'sports/physics/drag-fluid-dynamics'],
}

export default guide
