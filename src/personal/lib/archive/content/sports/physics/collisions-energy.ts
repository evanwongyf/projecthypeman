import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A tennis ball bouncing off a racket, two rugby players colliding, a golf club striking a ball: every impact in sport is governed by the same two conservation laws, momentum and energy, and by one number, the coefficient of restitution, that decides how "bouncy" the collision is.',
  nutshell: [
    '**Momentum** (mass × velocity) is always conserved in a collision with no outside forces; **kinetic energy** usually is not.',
    'A perfectly **elastic** collision conserves kinetic energy (a superball bounce); a perfectly **inelastic** collision loses the most (two wrestlers colliding and staying together).',
    'The **coefficient of restitution (e)** measures how much "bounciness" survives a collision, from 0 (totally inelastic) to 1 (perfectly elastic).',
    'Sports equipment is engineered, and regulated, around this number, a baseball bat, golf club or squash ball all have a legal maximum or minimum "trampoline effect".',
  ],
  sections: [
    {
      id: 'momentum',
      title: 'Momentum: always conserved',
      blocks: [
        {
          t: 'math',
          tex: String.raw`p = mv \qquad m_1v_1 + m_2v_2 = m_1v_1' + m_2v_2'`,
          where: [
            { sym: 'p', def: 'Momentum: mass times velocity' },
            { sym: 'v_1\', v_2\'', def: 'The velocities after the collision' },
          ],
          caption: 'Total momentum before a collision always equals total momentum after, provided no outside force (like the ground) interferes, this holds whether the collision is bouncy or dead.',
        },
        {
          t: 'example',
          title: 'A rugby tackle (a simplified, one-dimensional model)',
          lines: [
            { label: 'Before', text: 'attacker 95 kg running at 7 m/s; defender 100 kg running at −5 m/s (opposite direction)' },
            { label: 'Total momentum', text: '\\(95(7) + 100(-5) = 665 - 500 = 165\\text{ kg·m/s}\\)' },
            { label: 'If they stick together (perfectly inelastic)', text: 'combined velocity \\(= 165 / 195 \\approx 0.85\\text{ m/s}\\): the pair continues slowly in the attacker\'s original direction' },
          ],
        },
      ],
    },
    {
      id: 'restitution',
      title: 'The coefficient of restitution',
      blocks: [
        {
          t: 'math',
          tex: String.raw`e = \frac{v_{\text{separation}}}{v_{\text{approach}}} = -\frac{v_2' - v_1'}{v_2 - v_1}`,
          caption: 'The ratio of how fast the two objects fly apart after impact to how fast they came together before, a pure, dimensionless measure of "bounciness" that does not depend on the objects\' masses.',
        },
        {
          t: 'metric',
          name: 'the coefficient of restitution (e)',
          shows: 'How much of a collision\'s relative speed survives the impact, a direct measure of how "bouncy" a collision between two objects is, from a ball on a bat to two athletes colliding.',
          eli5: 'Drop a ball from shoulder height onto different floors. On a trampoline, it rockets almost back to where it started, a high e, close to 1. Drop a ball of wet clay onto concrete and it just stays there, e of essentially 0. The coefficient of restitution is simply how high (as a fraction of the drop) the ball bounces back.',
          higher: 'More of the collision\'s energy and relative speed is preserved and returned, the equipment or surface feels "lively" or "springy". Golf clubs, tennis rackets and baseball bats are all engineered to maximise a legal e within their sport\'s rules, since a higher e sends the ball away faster for the same swing effort.',
          lower: 'More of the collision\'s energy is absorbed or lost, as heat, sound, or deformation, and the objects separate more slowly relative to how fast they arrived. This matters for safety equipment (helmets and pads are deliberately low-e, absorbing impact energy rather than bouncing it back into the body) as much as for performance.',
          typical: 'A superball has e close to 0.9; a basketball is regulated to bounce to roughly 49–54% of its drop height when dropped from 1.8 m (implying e around 0.7–0.75); a new tennis ball must similarly bounce within a regulated height range; a lump of clay or a bag of sand has e close to 0.',
        },
        {
          t: 'table',
          head: ['Collision type', 'e', 'Example'],
          rows: [
            ['Perfectly elastic', '1', 'An idealised, frictionless collision (no real sporting example is perfectly elastic, but a superball bounce comes close)'],
            ['Partially elastic', '0 < e < 1', 'Almost every real sporting bounce or impact: a basketball dribble, a golf strike, a tennis serve'],
            ['Perfectly inelastic', '0', 'Objects stick together after impact: two tackling rugby players who end up moving as one mass'],
          ],
        },
      ],
    },
    {
      id: 'regulated',
      title: 'Why restitution is a regulated number',
      blocks: [
        {
          t: 'p',
          text: 'Because a higher coefficient of restitution sends a ball away faster for the same input effort, effectively acting like a "trampoline" built into the equipment, many sports explicitly cap it in their rules, to keep the game about athletic skill rather than equipment engineering.',
        },
        {
          t: 'cards',
          items: [
            { title: 'Golf clubs', body: 'Governing bodies (the R&A and USGA) cap the clubface\'s "coefficient of restitution" (tested as a bounce-back ratio) at 0.830, specifically to stop driver technology alone from making the ball fly indefinitely further.' },
            { title: 'Baseball bats (metal, amateur level)', body: 'Youth and college baseball regulate a related measure (the "bat-ball coefficient of restitution", BBCOR) to keep metal bats performing closer to the dead, lower-e feel of a traditional wooden bat, after metal bats were found to hit balls dangerously fast.' },
            { title: 'Squash and tennis balls', body: 'Ball bounce height off a standard surface at a standard temperature is tightly regulated, which indirectly fixes e within a narrow legal range for fair, consistent play.' },
          ],
        },
        { t: 'callout', tone: 'fact', title: 'The "trampoline effect" scandal', text: 'In the early 2000s, thin-faced titanium golf drivers were found to flex on impact like a tiny trampoline, measurably exceeding the then-informal understanding of acceptable restitution, and sending balls noticeably further than traditional designs. The resulting governing-body crackdown, explicitly capping the coefficient of restitution at 0.830 in 2008, is a clean, well-documented real-world case of physics directly rewriting a sport\'s equipment rules.' },
      ],
    },
  ],
  sources: ['McGinnis, P. M. (2020). *Biomechanics of Sport and Exercise* (4th ed.). Human Kinetics.', 'USGA & The R&A. (2003). *Procedure for Measuring the Flexibility of a Golf Clubhead*.'],
  related: ['sports/physics/friction-traction', 'sports/technology/equipment-science', 'sports/physics/levers-biomechanics'],
}

export default guide
