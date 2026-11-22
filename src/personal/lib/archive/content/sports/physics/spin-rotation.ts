import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A spinning ball curves through the air in a way a non-spinning one never would, a baseball pitcher\'s curveball, a footballer\'s banana free kick, a golfer\'s towering drive, and a table-tennis player\'s vicious topspin are all the same physics: the Magnus effect, named after the 19th-century scientist who first explained it.',
  nutshell: [
    'A spinning ball drags a thin layer of air around with it, speeding airflow up on one side and slowing it on the other.',
    'Faster airflow means lower pressure (Bernoulli\'s principle), pushing the ball towards the faster-air side, the **Magnus force**.',
    'Backspin lifts (golf), topspin dips (table tennis), sidespin curves sideways (football, baseball), same force, different spin axis.',
    'The Magnus force grows with both spin rate and forward speed, which is why curves become more dramatic at higher pitch or shot speeds.',
  ],
  sections: [
    {
      id: 'magnus',
      title: 'The Magnus effect',
      blocks: [
        {
          t: 'p',
          text: 'As a ball moves through the air while spinning, the air on one side moves faster relative to the ball\'s surface than on the other side (the spinning surface drags a thin layer of air around with it, adding to or subtracting from the airflow depending on which side). By Bernoulli\'s principle, faster-moving air exerts lower pressure, so the side with faster relative airflow has lower pressure, and the ball is pushed towards that side.',
        },
        {
          t: 'flow',
          title: 'Why a spinning ball curves',
          nodes: [
            { label: 'Ball spins while moving forward', tone: 'data' },
            { label: 'Surface drags a thin air layer with it', tone: 'process' },
            { label: 'Airflow speeds up on one side, slows on the other', tone: 'process' },
            { label: 'Faster side = lower pressure (Bernoulli)', tone: 'model' },
            { label: 'Net sideways force: the Magnus force', tone: 'output' },
          ],
        },
        {
          t: 'math',
          tex: String.raw`F_{\text{Magnus}} = \tfrac{1}{2}\,\rho\,A\,C_L\,v^2`,
          where: [
            { sym: '\\rho', def: 'Air density' },
            { sym: 'A', def: 'The ball\'s cross-sectional area' },
            { sym: 'C_L', def: 'The lift coefficient, which depends on spin rate relative to forward speed' },
            { sym: 'v', def: 'The ball\'s forward speed through the air' },
          ],
          caption: 'The same structural form as drag and downforce (see [drag and fluid dynamics](@sports/physics/drag-fluid-dynamics) and [downforce and aerodynamics](@sports/f1/physics-theory/downforce-aerodynamics)): a force proportional to air density, the ball\'s size, and the *square* of its speed, spin matters more and more as the ball goes faster.',
        },
      ],
    },
    {
      id: 'examples',
      title: 'Spin across different sports',
      blocks: [
        {
          t: 'table',
          head: ['Sport', 'Spin type', 'Effect'],
          rows: [
            ['Baseball curveball', 'Topspin (from the pitcher\'s release) combined with sideways spin', 'The ball drops and curves sideways more sharply than gravity alone would explain'],
            ['Football (soccer) banana kick', 'Sidespin, from striking off-centre', 'The ball curves sideways in flight, famously used to bend a free kick around a defensive wall'],
            ['Golf drive', 'Backspin, from the clubface loft', 'Backspin generates genuine aerodynamic lift, letting the ball carry far further than a spin-free trajectory would, without backspin, a typical drive would fall roughly half as far'],
            ['Table tennis topspin', 'Heavy topspin, from a brushing stroke', 'Topspin creates a *downward* Magnus force, letting the ball be hit hard while still dropping onto the table'],
            ['Cricket swing bowling', 'Seam-driven turbulence rather than pure Magnus spin', 'A related but distinct effect: the ball\'s raised seam trips the air into turbulence on one side, causing sideways swing through the air, separate from spin bowling\'s very different grip-and-spin mechanism off the pitch'],
          ],
        },
        {
          t: 'metric',
          name: 'spin rate',
          shows: 'How fast a ball rotates, usually measured in revolutions per minute (RPM), the main driver of how strong the Magnus force on it will be, alongside the ball\'s forward speed.',
          eli5: 'Think of spin rate like the speed of a fan blade. A slowly turning fan barely moves the air; a fast-spinning one creates a strong, noticeable breeze. A ball\'s spin works the same way for dragging air around itself: more RPM means a stronger sideways (or up/down) push.',
          higher: 'A stronger Magnus force for a given forward speed, a baseball curveball thrown with more spin breaks more sharply; a golf drive with more backspin (up to a point) carries further; a table-tennis topspin shot dips more aggressively onto the table. Modern tracking technology (like baseball\'s Statcast) measures pitchers\' spin rates precisely, and spin rate is now a standard part of how pitchers and golf equipment are evaluated.',
          lower: 'A weaker Magnus force, a "flat" throw or shot travels closer to a simple, undisturbed parabola (see [projectile motion](@sports/physics/projectile-motion)). Pitchers sometimes deliberately minimise spin for certain pitches (like a knuckleball), aiming for unpredictable, turbulence-driven movement instead of the smooth, repeatable Magnus curve.',
          typical: 'Elite baseball curveballs spin at roughly 2,000–3,000 RPM; elite golf drives carry backspin typically in the 2,000–3,000 RPM range as well (though the numbers measure different physical setups); table-tennis topspin shots can exceed 9,000 RPM given the ball\'s tiny size and the sport\'s short, fast strokes.',
        },
      ],
    },
    {
      id: 'knuckleball',
      title: 'The exception: the knuckleball',
      blocks: [
        {
          t: 'p',
          text: 'A baseball knuckleball is thrown with deliberately almost **no** spin. With so little rotation, the ball\'s seams interact unpredictably with the airflow as it travels, causing the turbulent wake behind it to shift unevenly from moment to moment, producing an erratic, hard-to-predict wobble rather than the smooth Magnus curve of a normal spinning pitch. It is a genuinely different physical mechanism: an unstable interaction with the seams instead of a steady Magnus force.',
        },
        { t: 'callout', tone: 'fact', title: 'Named after a 19th-century scientist', text: 'The Magnus effect is named after German physicist Heinrich Gustav Magnus, who studied it in 1852, originally investigating why spinning artillery shells and rifle bullets veered off their expected path, a military ballistics question that turned out to explain curveballs, banana kicks and golf drives more than a century later.' },
      ],
    },
  ],
  sources: ['Magnus, G. (1852). Über die Abweichung der Geschosse. *Abhandlungen der Königlichen Akademie der Wissenschaften zu Berlin*.', 'Mehta, R. D. (1985). Aerodynamics of sports balls. *Annual Review of Fluid Mechanics*, 17, 151–189.'],
  related: ['sports/physics/drag-fluid-dynamics', 'sports/physics/projectile-motion', 'sports/f1/physics-theory/downforce-aerodynamics'],
}

export default guide
