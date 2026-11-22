import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'An F1 driver under hard braking experiences deceleration that would make most people black out if it lasted more than a second or two. Understanding g-forces, and the decades of engineering built specifically to survive them, explains both how extreme the sport physically is, and why it has become dramatically safer since its deadliest era.',
  nutshell: [
    'A **g-force** measures acceleration (in any direction, braking, cornering or accelerating) as a multiple of normal gravity.',
    'F1 drivers regularly experience 4–6g under braking and in fast corners, compared with roughly 1g for a hard stop in a road car.',
    'The human body tolerates brief, repeated g-forces far better than sustained ones, which is part of why F1 racing (short, repeated high-g moments) differs physiologically from, say, fighter-pilot sustained-g manoeuvres.',
    'Modern F1 safety, the halo, the survival cell, crash structures and the HANS device, was built directly in response to specific, studied crashes and the forces measured in them.',
  ],
  sections: [
    {
      id: 'what-is-g',
      title: 'What a g-force actually is',
      blocks: [
        {
          t: 'math',
          tex: String.raw`g\text{-force} = \frac{a}{9.81\text{ m/s}^2}`,
          caption: 'Acceleration (the rate of change of velocity, in any direction, including slowing down or turning) expressed as a multiple of standard Earth gravity. 1g is what you feel standing still on Earth; 2g under braking feels, very roughly, like being pressed back into your seat with twice your own body weight.',
        },
        {
          t: 'table',
          head: ['Situation', 'Typical g-force (illustrative)'],
          rows: [
            ['A hard stop in a road car', '~1g'],
            ['A commercial airliner at takeoff', '~0.3–0.5g'],
            ['F1 car under maximum braking', '~5–6g, briefly'],
            ['F1 car in a fast corner (e.g. Copse at Silverstone, Eau Rouge at Spa)', '~4–6g lateral'],
            ['A fighter jet in a sustained hard turn', '~7–9g, sustained for several seconds'],
            ['A serious F1 crash (peak, momentary)', 'Can exceed 50g for a fraction of a second, well-documented examples include Robert Kubica\'s 2007 Canada crash, estimated around 75g peak'],
          ],
          caption: 'Figures are illustrative and vary by specific corner, car and incident, included to show the right order of magnitude rather than precise universal constants.',
        },
      ],
    },
    {
      id: 'tolerance',
      title: 'Why brief g-forces are survivable',
      blocks: [
        {
          t: 'p',
          text: 'The human body tolerates g-forces much better when they are brief than when sustained. Blood is forced away from the brain under sustained high g (which is what causes fighter pilots to risk G-induced loss of consciousness, or "G-LOC", during long hard turns), but F1\'s highest g-forces last only a second or two at a time, much less than the several seconds typically needed to meaningfully affect blood flow to the brain, which is part of why drivers can repeatedly experience 5g+ moments throughout a race without the physiological risks a sustained-g manoeuvre would carry.',
        },
        {
          t: 'cards',
          items: [
            { title: 'Neck strength', body: 'F1 drivers train their neck muscles specifically and intensively, since the head (and helmet) must resist repeated lateral g-forces through every corner of every lap, for the full race distance, an unusually specific and sport-specific strength requirement.' },
            { title: 'Seating position', body: 'A reclined, form-fitting seat spreads braking and cornering forces across more of the body and keeps the head\'s movement relative to the spine more controlled than an upright position would.' },
            { title: 'Fitness and repeated exposure', body: 'Much like any trained physical tolerance, repeated exposure over a career appears to improve drivers\' tolerance of brief high-g loads, which is one reason junior drivers are specifically trained up through lower, lower-g formulae before reaching F1.' },
          ],
        },
      ],
    },
    {
      id: 'safety-engineering',
      title: 'Engineering for the crash, not just the race',
      blocks: [
        {
          t: 'table',
          head: ['Safety feature', 'What it addresses', 'Introduced'],
          rows: [
            ['Survival cell (monocoque)', 'A rigid carbon-fibre safety cell around the driver, designed to remain intact in a severe crash, directly built from research after specific driver fatalities', 'Progressively from the 1980s–90s onward'],
            ['Crash structures (front, side, rear)', 'Deliberately designed to crush and absorb energy progressively, slowing the deceleration felt by the driver rather than transmitting it directly', 'Mandated and continually strengthened since the 1980s–90s'],
            ['HANS device (Head And Neck Support)', 'A collar connecting the helmet to the shoulders by tethers, preventing the head from snapping forward independently of the body in a frontal impact, specifically targeting basilar skull fractures, a historically common fatal injury', 'Mandatory in F1 from 2003'],
            ['The halo', 'A titanium structure around the cockpit protecting the driver\'s head from large flying debris or another car, directly developed following several serious head-injury incidents', 'Mandatory in F1 from 2018'],
            ['Wheel tethers', 'High-strength cables keeping a detached wheel attached to the car in a crash, preventing it from becoming a dangerous projectile toward other cars or spectators', 'Progressively introduced and strengthened since 1999'],
          ],
        },
        { t: 'callout', tone: 'fact', title: 'The halo\'s contested introduction', text: 'When the halo was first proposed, it was controversial among some fans and even some drivers, who felt it looked unaesthetic or was unnecessary. It was credited with likely saving driver Romain Grosjean\'s life in a severe, high-speed 2020 crash at the Bahrain Grand Prix, where the car split in two and burst into flames on impact with a barrier, a widely cited real-world case for a safety feature that had faced real public resistance before proving itself.' },
      ],
    },
  ],
  sources: ['FIA. *Formula 1 Safety Standards and Crash Test Regulations* (published and updated periodically).', 'Melvin, J. W., & Begeman, P. C. (2000). Biomechanical considerations in auto racing safety. *SAE Technical Paper*.'],
  related: ['sports/f1/physics-theory/downforce-aerodynamics', 'sports/physics/collisions-energy', 'sports/physiology/fatigue-recovery'],
}

export default guide
