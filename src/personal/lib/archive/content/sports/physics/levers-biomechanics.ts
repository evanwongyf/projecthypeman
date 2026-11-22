import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Every joint in the human body is a lever, and every throw, kick or swing is a sequence of levers firing in order. Understanding torque and the body\'s lever systems explains why technique, not just raw strength, decides how hard a punch lands or how far a javelin flies.',
  nutshell: [
    '**Torque** (rotational force) equals force times the perpendicular distance from the pivot, a small force far from a joint can out-torque a large force close to it.',
    'The body uses all three classes of lever, but most sporting movements (the elbow throwing, the ankle pushing off) are **third-class levers**: built for speed and range of motion, at the cost of raw force.',
    'The **kinetic chain** sequences body segments from the ground up, each one handing momentum to the next, a baseball pitch or golf swing is this chain made visible.',
    'Longer limbs (longer lever arms) can generate more linear speed at the same rotational (angular) speed, part of why height and limb length matter in throwing and striking sports.',
  ],
  sections: [
    {
      id: 'torque',
      title: 'Torque: force with leverage',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\tau = F \cdot d \cdot \sin(\theta)`,
          where: [
            { sym: '\\tau', def: 'Torque: the rotational "twisting" effect of a force' },
            { sym: 'F', def: 'The applied force' },
            { sym: 'd', def: 'The distance from the pivot (joint) to where the force is applied' },
            { sym: '\\theta', def: 'The angle between the force and the lever arm, torque is maximised when the force is applied perpendicular to the lever (\\(\\theta = 90°\\))' },
          ],
          caption: 'This is why a longer wrench turns a stuck bolt more easily than a short one for the same hand force, and why a straight-armed golf swing (a longer effective lever) can generate more clubhead speed than a bent-armed one for the same muscular effort, up to the point where control is lost.',
        },
        {
          t: 'example',
          title: 'A bicep curl versus a straight-arm raise',
          lines: [
            { text: 'Holding a weight at the hand, the torque at the elbow or shoulder depends on the full length of the arm as the lever (d), and on the angle between the arm and gravity\'s pull (θ). The torque, and so the perceived effort, peaks when the arm is horizontal (θ = 90° to gravity) and is lowest when the arm points straight up or down, even though the muscle force needed to merely hold the weight still barely changes.' },
          ],
        },
      ],
    },
    {
      id: 'lever-classes',
      title: 'The three classes of lever in the body',
      blocks: [
        {
          t: 'table',
          head: ['Class', 'Arrangement', 'Sporting example', 'Trade-off'],
          rows: [
            ['First class', 'Pivot between the force and the load', 'The head nodding on the neck (as in heading a football)', 'Can favour force or speed depending on exact proportions'],
            ['Second class', 'Load between the pivot and the force', 'Standing on tiptoes, pushing off the ball of the foot', 'Favours force over speed: mechanical advantage > 1'],
            ['Third class', 'Force between the pivot and the load, by far the most common in the body', 'The elbow throwing a ball, the knee kicking', 'Favours speed and range of motion over raw force: mechanical advantage < 1'],
          ],
          caption: 'Most human limbs are built as third-class levers, which is a deliberate biological trade-off: the body sacrifices mechanical force advantage for the ability to move a hand or foot very fast, exactly what throwing, striking and kicking need.',
        },
        { t: 'callout', tone: 'tip', title: 'Why this is counter-intuitive', text: 'A third-class lever actually requires *more* muscular force than the force eventually delivered at the hand or foot, the muscle is working at a mechanical disadvantage. What it buys in return is speed: a small, fast contraction near the joint translates into a much larger, faster motion at the far end of the limb, which is exactly what a 100 mph baseball pitch or a fast punch needs.' },
      ],
    },
    {
      id: 'kinetic-chain',
      title: 'The kinetic chain',
      blocks: [
        {
          t: 'p',
          text: 'Powerful sporting movements rarely come from one joint alone, they sequence through the body, each segment accelerating, peaking, and transferring its momentum to the next segment just as that next one begins to accelerate. This sequencing is called the kinetic (or "summation of speed") chain.',
        },
        {
          t: 'flow',
          title: 'A baseball pitch (simplified kinetic chain)',
          nodes: [
            { label: 'Legs and hips rotate first', sub: 'the largest, slowest-moving segments', tone: 'process' },
            { label: 'Trunk rotates', sub: 'picking up speed from the hips', tone: 'process' },
            { label: 'Shoulder rotates', sub: 'faster still, timed to the trunk\'s peak', tone: 'process' },
            { label: 'Elbow extends', sub: 'even faster', tone: 'process' },
            { label: 'Wrist snaps last', sub: 'the ball leaves the hand at the chain\'s peak speed', tone: 'output' },
          ],
          caption: 'A golf swing, a tennis serve, a punch and a football kick all follow the same large-to-small, slow-to-fast sequencing, each segment is lighter and faster than the one before it, letting speed build up through the chain like the tip of a cracking whip.',
        },
        { t: 'callout', tone: 'fact', title: 'The whip is not just a metaphor', text: 'A bullwhip\'s crack is literally the tip breaking the sound barrier, produced by exactly this physics: a large, slow motion at the handle transfers its energy down a tapering mass, speeding up at each narrower section until the lightweight tip moves fast enough to create a small sonic boom. Coaches use "like cracking a whip" as a real biomechanical description of the kinetic chain, not just a figure of speech.' },
        {
          t: 'checklist',
          items: [
            'Larger, closer-to-the-ground segments (legs, hips) move first and generate the most raw force',
            'Each subsequent segment is lighter and moves faster than the one before it',
            'Timing, each segment firing just as the previous one peaks, matters as much as raw strength in any segment alone',
            'A broken or mistimed chain (e.g. an "all-arm" throw with no hip and trunk rotation) loses most of the available power, however strong the arm itself is',
          ],
        },
      ],
    },
  ],
  sources: ['McGinnis, P. M. (2020). *Biomechanics of Sport and Exercise* (4th ed.). Human Kinetics.', 'Putnam, C. A. (1993). Sequential motions of body segments in striking and throwing skills. *Journal of Biomechanics*, 26(S1), 125–135.'],
  related: ['sports/physics/projectile-motion', 'sports/physics/collisions-energy', 'sports/physiology/strength-power-curve'],
}

export default guide
