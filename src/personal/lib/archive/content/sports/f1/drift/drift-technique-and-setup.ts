import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Every drift has three parts: breaking rear grip (initiation), holding the slide (sustain) and either linking into the next corner (transition) or straightening up (exit). This guide explains, at the level of the physics, what the named techniques do, and how a competition drift car is built to make them repeatable. It describes a closed-course sport; it is not a how-to for public roads.',
  nutshell: [
    'A drift is **initiated** by reducing rear grip or increasing rear force: weight transfer, a sudden surge of drive, or locking the rear wheels.',
    'Named initiations (power-over, clutch kick, handbrake, feint or Scandinavian flick, braking drift, lift-off) are different ways of doing that.',
    'The slide is **held** with throttle (rear slip) and counter-steer (front alignment), with small, continuous corrections.',
    'Drift cars use a **locked or limited-slip differential**, much more **steering angle**, a hydraulic handbrake, strong cooling and high power.',
    'Tyre choice and pressures balance a grippy front against a rear that slides predictably.',
    'Learning happens with instruction, on skid pans and closed venues, building from low speed.',
  ],
  sections: [
    {
      id: 'phases',
      title: 'The anatomy of a drift',
      blocks: [
        {
          t: 'flow',
          title: 'From approach to exit',
          nodes: [
            { label: 'Approach', sub: 'set speed and position, often on the outside of the course', tone: 'process' },
            { label: 'Initiation', sub: 'break rear grip deliberately', tone: 'model' },
            { label: 'Catch', sub: 'counter-steer as the rear steps out', tone: 'human' },
            { label: 'Sustain', sub: 'balance throttle and steering to hold the angle and line', tone: 'process' },
            { label: 'Transition or exit', sub: 'swing to the next corner or straighten up', tone: 'output' },
          ],
        },
        { t: 'p', text: 'The physics behind each phase is in [the physics of a drift](@sports/f1/drift/drift-physics): initiation pushes the rear tyres past the peak of their grip curve, the catch keeps the front near its peak, and the sustain phase holds the balance of yaw and slide.' },
      ],
    },
    {
      id: 'initiation',
      title: 'Initiation techniques, explained by physics',
      blocks: [
        {
          t: 'table',
          head: ['Technique', 'What it does to the car', 'Physical principle', 'Typical use'],
          rows: [
            ['Power-over', 'Enough throttle mid-corner to spin the rear tyres', 'Drive force uses up the rear friction circle', 'Powerful cars, slower corners'],
            ['Clutch kick', 'A sharp burst of torque to the rear wheels', 'Sudden wheelspin pushes the rear past peak grip', 'When power alone is not enough'],
            ['Handbrake (e-brake)', 'Briefly locks the rear wheels', 'A locked tyre has little sideways grip, so the rear swings out', 'Tight corners, adjusting angle'],
            ['Feint (Scandinavian flick)', 'A swing away from the corner, then into it', 'The car’s own momentum and a load swing unsettle the rear', 'Fast entries, big angle'],
            ['Braking drift', 'Brake into the corner, then turn', 'Load moves forward, the rear goes light', 'Corner entries after straights'],
            ['Lift-off oversteer', 'Lifting off the throttle while turning', 'Load moves forward; the rear loses grip', 'Gentle starts, smaller angles'],
            ['Inertia or momentum drift', 'High entry speed and a sharp turn-in', 'Rear simply exceeds its grip in the corner', 'Fast sweepers'],
          ],
          caption: 'Professional drivers combine these freely; the names describe the main mechanism, not strict rules.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Why a flick works', body: 'Swinging the car away from the corner compresses the outside springs on that side. When the driver turns back, the load swings across hard and the car’s rotation carries the rear past its grip, so the car arrives at the corner already yawing.', tag: 'momentum' },
            { title: 'Why the handbrake works', body: 'A locked wheel is sliding in every direction at once: its whole friction budget is spent on the skid, so it has almost nothing left to resist sideways movement, and the rear swings out.', tag: 'friction circle' },
            { title: 'Why a clutch kick works', body: 'Releasing the clutch suddenly with the engine revving delivers a brief spike of torque, far beyond what a steady throttle gives, which breaks traction at once.', tag: 'torque spike' },
            { title: 'Why weight transfer matters', body: 'Every technique is easier when the rear is lightly loaded. Braking, lifting or a flick moves load forward or across, reducing the rear’s grip budget for a moment.', tag: 'load' },
          ],
        },
      ],
    },
    {
      id: 'sustain',
      title: 'Holding and linking the slide',
      blocks: [
        {
          t: 'list',
          items: [
            '**Throttle sets the angle:** more throttle, more wheelspin, more angle; less throttle, less angle.',
            '**Steering keeps the front aligned:** counter-steer points the front tyres along the car’s path. Good drivers let the wheel self-centre through their hands rather than fighting it.',
            '**Eyes lead the car:** drivers look where they want the car to go, not at the wall they are trying to miss.',
            '**Transitions:** to swing from one direction to the other, the driver lets the rear regain grip briefly, the car snaps across, and a new slide begins the other way. Linking corners smoothly is a large part of style scores.',
            '**Exit:** reduce throttle gradually and unwind the counter-steer together; doing one without the other causes a spin or a snap the other way.',
          ],
        },
        {
          t: 'dodont',
          do: [
            'Learn on a wet skid pan or circle at low speed, with an instructor.',
            'Build up one variable at a time: speed, angle, then line.',
            'Keep inputs smooth and small once the car is sliding.',
          ],
          dont: [
            'Try to drift on public roads, ever.',
            'Snap off the throttle mid-drift: the rear can regrip violently and throw the car the other way.',
            'Fight the steering wheel; a tight grip slows the car’s natural correction.',
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Safety and the law', text: 'Drifting on public roads is dangerous to everyone around and illegal in most places. Learn it at organised events and driving schools on closed venues, with a helmet, an inspected car, marshals and run-off.' },
      ],
    },
    {
      id: 'setup',
      title: 'What makes a drift car different',
      blocks: [
        {
          t: 'table',
          head: ['Component', 'Drift set-up', 'Why'],
          rows: [
            ['Drive layout', 'Rear-wheel drive', 'The driven wheels must be the ones that slide'],
            ['Differential', 'Locked or tight limited-slip', 'Both rear wheels spin together, so the slide is predictable; an open diff spins only the inside wheel'],
            ['Steering angle', 'Modified knuckles and arms for far more lock', 'Very large drift angles need very large counter-steer'],
            ['Handbrake', 'Hydraulic lever on its own rear brake circuit', 'Strong, instant rear lock for initiations and corrections'],
            ['Power', 'Professional cars often have very high outputs, many around 1,000 hp or more', 'To spin the rear tyres at high speed and on demand'],
            ['Cooling', 'Large radiators, often rear-mounted', 'The car spends long periods at high revs and low forward speed'],
            ['Suspension', 'Adjustable coilovers; front set to grip, rear to slide predictably', 'Balance between steering and sliding'],
            ['Safety', 'Roll cage, bucket seat, harness, fire suppression', 'Contact with walls and other cars is a risk in tandem'],
          ],
          caption: 'Typical of professional series such as Formula Drift and D1 Grand Prix; grassroots cars use milder versions.',
        },
        {
          t: 'cards',
          items: [
            { title: 'Front tyres', body: 'Chosen for grip, because the front must steer and hold the line while the rear slides.', tag: 'grip' },
            { title: 'Rear tyres', body: 'Chosen to slide progressively and survive heat and wear. Series rules often specify approved tyres; consumption is high.', tag: 'slide' },
            { title: 'Pressures', body: 'Teams adjust rear pressures to tune how much grip, and so how much speed, the rear keeps while sliding. More rear grip means more speed but needs more power to hold the angle.', tag: 'tuning' },
          ],
        },
        {
          t: 'example',
          title: 'Grassroots versus professional build',
          lines: [
            { label: 'Grassroots', text: 'An older rear-drive coupé with a welded or limited-slip diff, modest power, a hydraulic handbrake, a bucket seat and a helmet. Run on drift days.' },
            { label: 'Club competition', text: 'Adds a roll cage, harness, extra steering angle and better cooling, often required by the event rules.' },
            { label: 'Professional', text: 'A production body around a full cage, a very high-output engine, sequential gearbox, extensive steering geometry work and data logging.' },
          ],
        },
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
            { label: 'Q1', text: 'Why is an open differential a problem for drifting?' },
            { label: 'A1', text: 'Under power it sends drive to the inside, lightly loaded wheel, which spins uselessly; the slide becomes unpredictable.' },
            { label: 'Q2', text: 'Which initiation uses the car’s momentum and a load swing rather than the brakes or engine?' },
            { label: 'A2', text: 'The feint, or Scandinavian flick.' },
            { label: 'Q3', text: 'Why do drift cars need more steering lock than racing cars?' },
            { label: 'A3', text: 'At big drift angles the front wheels must point far round towards the car’s path to keep the front tyres near their best slip angle.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Formula Drift. *Official Rulebook* (vehicle and safety regulations, published annually).',
    'Milliken, W. F. and Milliken, D. L. (1995). *Race Car Vehicle Dynamics*. SAE International.',
  ],
  related: [
    'sports/f1/drift/drift-physics',
    'sports/f1/drift/what-is-drifting',
    'sports/f1/drift/drift-competition-and-judging',
    'sports/f1/physics-theory/friction-circle-and-slip-angle',
  ],
}

export default guide
