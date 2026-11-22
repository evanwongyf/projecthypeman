import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'A Formula 1 car is, before anything else, an aerodynamics experiment with four wheels. Every wing, vent and curve of the bodywork exists to manage two competing forces: downforce, which presses the car onto the track for grip, and drag, which resists forward motion, and almost the entire sport\'s technical rulebook exists to control how teams trade one against the other.',
  nutshell: [
    'Both **downforce** and **drag** grow with the square of speed, from the same aerodynamic equation behind every force in [drag and fluid dynamics](@sports/physics/drag-fluid-dynamics).',
    'Downforce pushes the car onto the track, increasing the grip available at the tyres, enough that, at high speed, a modern F1 car could in principle drive upside down.',
    'The front and rear wings, and especially the **floor** (using "ground effect"), are the three biggest sources of downforce on a modern car.',
    'More downforce means more cornering speed but more drag, which costs straight-line speed, every part of the car is a negotiated trade-off between the two.',
  ],
  sections: [
    {
      id: 'the-trade-off',
      title: 'The central trade-off',
      blocks: [
        { t: 'sports-viz', viz: 'downforce' },
        {
          t: 'math',
          tex: String.raw`F_{\text{downforce}} = \tfrac{1}{2}\,\rho\,C_L\,A\,v^2 \qquad F_{\text{drag}} = \tfrac{1}{2}\,\rho\,C_D\,A\,v^2`,
          where: [{ sym: 'C_L', def: 'Here, a negative-lift ("downforce") coefficient, the wings are shaped to push down, the opposite of an aircraft wing' }],
          caption: 'Identical in structure to an aircraft\'s lift equation, except an F1 wing is deliberately flipped to generate *negative* lift, pushing the car down rather than up. Both forces grow with the square of speed, which is why aerodynamics barely matters at 50 km/h in the pit lane but dominates everything at 300+ km/h on a straight.',
        },
        {
          t: 'metric',
          name: 'downforce',
          shows: 'How hard the car\'s aerodynamics press it onto the track surface, on top of its own weight, effectively making the car "heavier" from the tyres\' point of view without actually adding mass, which is the key trick: more vertical load means more available grip, without the extra inertia that comes from genuinely adding weight.',
          eli5: 'Imagine pressing a book down onto a table with your hand while trying to slide it sideways, the harder you press, the harder it is to slide. Downforce does exactly that to a race car\'s tyres: the aerodynamics "press" the car onto the track, without needing to add any actual weight to it, so the car can corner harder without becoming any more sluggish to accelerate or brake.',
          higher: 'More grip available at any given speed, allowing higher cornering speeds, but also more drag (since the same wings generating downforce also catch more air), which costs straight-line top speed and fuel efficiency. High-downforce set-ups are favoured at twisty circuits like Monaco or Hungary.',
          lower: 'Less grip in corners, but also less drag, allowing a higher top speed on long straights. Low-downforce set-ups are favoured at circuits with very long straights and few demanding corners, like Monza, where straight-line speed matters more than cornering grip.',
          typical: 'Modern F1 cars can generate roughly 1,500–2,000+ kg of downforce at top speed (figures vary by era, regulation and source), several times the car\'s own ~800 kg weight, the famous (if slightly simplified) claim that an F1 car could drive upside down through a tunnel at sufficient speed comes directly from this comparison.',
        },
      ],
    },
    {
      id: 'sources',
      title: 'The three main sources of downforce',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Front wing', body: 'The first part of the car to meet the air; shapes airflow for the rest of the car as much as it generates its own downforce. Highly sensitive to being followed closely by another car, see [DRS and overtaking](@sports/f1/physics-theory/drs-overtaking) for why.' },
            { title: 'Rear wing', body: 'Generates significant downforce at the back of the car, balancing the front wing so the car does not understeer (front slides) or oversteer (rear slides) unpredictably; this is also the wing DRS opens.' },
            { title: 'The floor and diffuser (ground effect)', body: 'Since 2022-era regulations reintroduced underbody "ground effect" tunnels, the floor itself generates a very large share of total downforce, often cited as over half, by accelerating air beneath the car to create a large low-pressure zone that sucks the car down, far more efficiently (less drag per unit of downforce) than wings alone.' },
          ],
        },
        { t: 'callout', tone: 'fact', title: 'Ground effect\'s wild past', text: 'Ground-effect "skirts" that sealed the underbody tunnels to the track were so effective in the late 1970s and early 1980s, generating cornering forces that could physically injure drivers\' necks and risked structural failure at speed, that they were banned by the FIA from 1983 for safety reasons. The technology returned, heavily regulated and re-engineered for safety, in F1\'s 2022 regulations, explicitly to reduce reliance on wings and improve the "dirty air" problem discussed in DRS and overtaking.' },
      ],
    },
    {
      id: 'why-it-matters',
      title: 'Why this defines the sport',
      blocks: [
        {
          t: 'p',
          text: 'Because downforce scales with the square of speed, it barely helps at low speed (a slow hairpin corner) but transforms what is possible at high speed (a fast, sweeping corner). This is exactly why F1 corners that look similarly sharp on a map can demand wildly different cornering speeds in practice, a slow corner is limited mostly by mechanical grip and tyre physics, while a fast corner is limited as much by aerodynamic downforce as by the tyres underneath it.',
        },
        { t: 'callout', tone: 'tip', title: 'A rule of thumb for watching a race', text: 'When commentators describe a circuit as "low downforce" (fewer, gentler corners, long straights, like Monza) versus "high downforce" (many tight corners, like Monaco or Singapore), they are describing exactly this trade-off being tuned by the team\'s wing angles and floor set-up for that specific track\'s balance of corners to straights.' },
      ],
    },
  ],
  sources: ['Katz, J. (2006). *Race Car Aerodynamics: Designing for Speed* (2nd ed.). Bentley Publishers.', 'FIA. *Formula 1 Technical Regulations* (annually published).'],
  related: ['sports/f1/physics-theory/drs-overtaking', 'sports/f1/physics-theory/tyres-grip', 'sports/physics/drag-fluid-dynamics'],
}

export default guide
