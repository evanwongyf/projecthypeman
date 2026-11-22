import type { ArchiveNode } from '../topics'
import { F1 } from './f1'
import { FOOTBALL } from './football'

// Sport: a shelf for each sport (Formula 1, football, basketball) and the sports science
// that applies to all of them: the physics, physiology, maths and technology behind sport,
// from a thrown ball to a sprinter’s energy systems, with interactive diagrams throughout.

export const SPORTS: ArchiveNode = {
  slug: 'sports',
  title: 'Sports',
  blurb: 'A shelf for each sport (Formula 1, football and basketball) plus the sports science behind them all: projectile motion and spin, human performance, analytics, and the equipment that keeps changing the record books.',
  glyph: '⚡',
  color: 'color-mix(in srgb, var(--orange) 55%, var(--mustard))',
  tags: ['sports', 'sport', 'sports science', 'physics', 'biomechanics', 'physiology', 'analytics', 'football', 'soccer', 'basketball', 'f1', 'formula 1'],
  children: [
    { slug: 'start-here', title: 'Start here', blurb: 'What is on this shelf: the sports, the sports science behind them, and a route from a thrown ball to a sprinter’s energy systems.', minutes: 6, glyph: '★', tags: ['beginner', 'overview', 'roadmap'] },
    F1,
    FOOTBALL,
    {
      slug: 'basketball',
      title: 'Basketball',
      blurb: 'Hoops: how the game works, shooting physics, spacing and the three-point revolution.',
      glyph: '◍',
      color: 'color-mix(in srgb, var(--orange) 70%, var(--mustard))',
      tags: ['basketball', 'nba', 'fiba', 'shooting', 'three pointer', 'spacing', 'pick and roll'],
      children: [
        { slug: 'start-here', title: 'Start here', blurb: 'The court, the scoring and the clock, and a route through the basketball science already on the Sports shelf.', minutes: 7, glyph: '★', tags: ['beginner', 'overview', 'court', 'scoring', 'rules'] },
        { slug: 'rules-and-positions', title: 'The rules, the clock and the positions', blurb: 'Fouls, violations, the shot clock and what each of the five positions does.', minutes: 10, tags: ['shot clock', 'travelling', 'double dribble', 'fouls', 'point guard', 'centre', 'positions'] },
        { slug: 'shooting-physics', title: 'The physics of a shot', blurb: 'Release angle, backspin, the rim’s entry window and why a higher arc is more forgiving.', minutes: 11, tags: ['shooting', 'free throw', 'release angle', 'backspin', 'arc', 'entry angle', 'swish'] },
        { slug: 'spacing-and-the-three', title: 'Spacing and the three-point revolution', blurb: 'Why the league shoots more threes, how the numbers justified it, and what it did to the shape of the game.', minutes: 10, tags: ['three pointer', 'shot chart', 'expected points', 'analytics', 'spacing', 'moreyball'] },
        { slug: 'offence-and-defence', title: 'Offence and defence: screens, switches and zones', blurb: 'The pick and roll, switching, drop coverage and zone defence, explained as space and angles.', minutes: 11, tags: ['pick and roll', 'switch', 'zone defence', 'man to man', 'help defence', 'transition'] },
      ],
    },
    {
      slug: 'physics',
      title: 'The physics of sport',
      blurb: 'The mechanics behind every throw, kick, spin and swim stroke: projectile motion, friction, spin, drag and the body as a lever.',
      glyph: '∫',
      tags: ['physics', 'mechanics', 'biomechanics'],
      children: [
        { slug: 'projectile-motion', title: 'Projectile motion', blurb: 'Why 45° is the magic angle, and how a basketball, javelin or golf ball actually flies.', minutes: 12, tags: ['projectile motion', 'trajectory', 'range', 'launch angle', 'basketball', 'golf', 'javelin'] },
        { slug: 'friction-traction', title: 'Friction and traction', blurb: 'Why sprinters wear spikes, why braking distance matters, and the maths of grip.', minutes: 10, tags: ['friction', 'traction', 'coefficient of friction', 'spikes', 'grip', 'braking'] },
        { slug: 'spin-rotation', title: 'Spin and the Magnus effect', blurb: 'Why a curveball curves, a golf ball lifts, and a football swerves: backspin, topspin and the Magnus force.', minutes: 11, tags: ['magnus effect', 'spin', 'curveball', 'topspin', 'backspin', 'swerve', 'bernoulli'] },
        { slug: 'drag-fluid-dynamics', title: 'Drag and fluid dynamics', blurb: 'Why cyclists draft, swimmers shave, and sprinters feel the wind: drag through air and water.', minutes: 11, tags: ['drag', 'aerodynamics', 'drafting', 'fluid dynamics', 'swimming', 'cycling', 'reynolds number'] },
        { slug: 'collisions-energy', title: 'Collisions and energy', blurb: 'Momentum, elastic collisions and why a trampoline and a dead tennis ball behave so differently.', minutes: 10, tags: ['momentum', 'collision', 'elastic', 'energy', 'coefficient of restitution', 'impulse'] },
        { slug: 'levers-biomechanics', title: 'The body as a lever', blurb: 'Joints as levers, torque, and why technique beats raw strength in throwing and kicking.', minutes: 10, tags: ['biomechanics', 'lever', 'torque', 'kinetic chain', 'throwing', 'kicking'] },
      ],
    },
    {
      slug: 'physiology',
      title: 'Human performance',
      blurb: 'The body as an engine: energy systems, training zones, reaction time and the limits of strength and speed.',
      glyph: '♥',
      tags: ['physiology', 'performance', 'training', 'energy systems'],
      children: [
        { slug: 'energy-systems', title: 'The three energy systems', blurb: 'ATP-PCr, glycolysis and aerobic respiration: which one powers which sport, and for how long.', minutes: 12, tags: ['atp', 'phosphocreatine', 'glycolysis', 'aerobic', 'anaerobic', 'energy systems'] },
        { slug: 'vo2-training-zones', title: 'VO2 max and training zones', blurb: 'What VO2 max measures, the five heart-rate zones, and why Kenyan marathoners train slow to race fast.', minutes: 11, tags: ['vo2 max', 'heart rate zones', 'lactate threshold', 'aerobic training', 'polarised training'] },
        { slug: 'reaction-time', title: 'Reaction time and the nervous system', blurb: 'Why sprint starts are disqualified under 0.1 seconds, and how the brain turns a signal into a move.', minutes: 9, tags: ['reaction time', 'false start', 'nervous system', 'reflex', 'simple reaction time'] },
        { slug: 'strength-power-curve', title: 'Strength, power and the force-velocity curve', blurb: 'Why a powerlifter and a sprinter train so differently, from the same muscle physics.', minutes: 11, tags: ['force velocity curve', 'power', 'strength', 'explosive strength', 'rate of force development'] },
        { slug: 'fatigue-recovery', title: 'Fatigue and recovery', blurb: 'What actually causes fatigue, and the science (and myths) of recovering from it.', minutes: 10, tags: ['fatigue', 'recovery', 'doms', 'lactic acid myth', 'overtraining', 'supercompensation'] },
      ],
    },
    {
      slug: 'analytics',
      title: 'Sports analytics and statistics',
      blurb: 'How numbers changed sport: Moneyball, expected goals, Elo ratings and managing injury risk.',
      glyph: '%',
      tags: ['analytics', 'statistics', 'sabermetrics', 'moneyball'],
      children: [
        { slug: 'sabermetrics-moneyball', title: 'Sabermetrics and Moneyball', blurb: 'How on-base percentage beat batting average, and baseball started trusting the numbers.', minutes: 11, tags: ['sabermetrics', 'moneyball', 'billy beane', 'on-base percentage', 'baseball analytics'] },
        { slug: 'expected-goals', title: 'Expected goals and shot quality', blurb: 'Why a wasted tap-in matters more than a wonder strike, statistically speaking.', minutes: 10, tags: ['expected goals', 'xg', 'soccer analytics', 'football analytics', 'shot quality'] },
        { slug: 'elo-ratings', title: 'Elo and rating systems', blurb: 'The chess rating system that now ranks footballers, esports players and everything between.', minutes: 10, tags: ['elo rating', 'rating system', 'chess', 'win probability', 'glicko'] },
        { slug: 'load-management-injury', title: 'Load management and injury prediction', blurb: 'The acute:chronic workload ratio, and the data science of keeping athletes on the pitch.', minutes: 10, tags: ['load management', 'injury prediction', 'acute chronic workload ratio', 'sports science'] },
      ],
    },
    {
      slug: 'technology',
      title: 'Equipment and technology',
      blurb: 'How shoes, suits, bikes and timing technology have quietly rewritten the record books.',
      glyph: '⚙',
      tags: ['equipment', 'technology', 'sports tech'],
      children: [
        { slug: 'equipment-science', title: 'Super shoes, suits and bikes', blurb: 'Carbon plates, banned swimsuits and aerodynamic bikes: equipment that changed the sport.', minutes: 11, tags: ['super shoes', 'carbon plate', 'swimsuit', 'aerodynamic bike', 'marginal gains'] },
        { slug: 'timing-tracking-tech', title: 'Timing and tracking technology', blurb: 'Photo finishes, Hawk-Eye and GPS: how sport measures itself to the millisecond and the centimetre.', minutes: 9, tags: ['photo finish', 'hawk-eye', 'gps tracking', 'timing technology', 'var'] },
        { slug: 'altitude-weather', title: 'Altitude, heat and weather', blurb: 'Why marathons avoid altitude, F1 cars change set-up in the rain, and heat can be the real opponent.', minutes: 9, tags: ['altitude training', 'heat', 'weather', 'air density', 'humidity'] },
      ],
    },
  ],
}
