import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'The fastest way around a corner is almost never the geometrically shortest path. The racing line, where to brake, turn in, touch the apex and get back on the power, is pure applied physics: maximising the radius of the turn to maximise the speed you can carry through it.',
  nutshell: [
    'Maximum cornering speed depends on the **radius** of the turn: a wider, gentler arc allows a higher speed than a tight one, for the same available grip.',
    'The classic racing line uses the full width of the track to turn a tight corner into the widest, gentlest curve geometrically possible"straightening" the corner.',
    'The **apex** is the single point where the car is closest to the inside of the corner; "late apex" and "early apex" lines trade entry speed for a better exit.',
    'Braking happens almost entirely in a straight line, before the turn, trying to brake and turn simultaneously demands grip for both at once, which the tyres cannot fully provide.',
  ],
  sections: [
    {
      id: 'radius',
      title: 'Why a wider line is a faster line',
      blocks: [
        {
          t: 'math',
          tex: String.raw`v_{\max} = \sqrt{\mu g r}`,
          where: [
            { sym: 'r', def: 'The radius of the curve being driven, not the corner itself, but the actual curved path the car follows' },
            { sym: '\\mu g', def: 'The maximum lateral acceleration available from tyre grip (ignoring downforce here for simplicity, see tyres and grip for the full version including downforce)' },
          ],
          caption: 'Maximum cornering speed grows with the *square root* of the radius: doubling the radius of your line through a corner lets you carry about 41% more speed through it (√2 ≈ 1.41) for the same available grip, which is why racing drivers obsess over using every inch of track width.',
        },
        {
          t: 'example',
          title: 'Straightening a 90° corner',
          lines: [
            { label: 'Driving the inside edge tightly', text: 'a small radius, forcing a low maximum cornering speed' },
            { label: 'Using the full track width (out-in-out)', text: 'entering wide, touching the inside briefly at the apex, exiting wide, geometrically, this traces a much larger radius arc through the same corner' },
            { label: 'Result', text: 'a meaningfully higher minimum speed through the corner, for the same tyres and the same grip available' },
          ],
        },
      ],
    },
    {
      id: 'the-line',
      title: 'The classic racing line',
      blocks: [
        {
          t: 'flow',
          title: 'Out-in-out: the classic single-apex line',
          nodes: [
            { label: 'Brake in a straight line', sub: 'before turning, using maximum available grip for braking alone', tone: 'process' },
            { label: 'Turn in from the outside edge', sub: 'begin the wide arc', tone: 'process' },
            { label: 'Touch the apex', sub: 'the single point closest to the inside of the corner', tone: 'model' },
            { label: 'Track out to the exit', sub: 'use the full width again, straightening the car as early as possible', tone: 'process' },
            { label: 'Accelerate hard', sub: 'from as early and as straight a position as the line allows', tone: 'output' },
          ],
        },
        {
          t: 'table',
          head: ['Apex choice', 'Trade-off', 'When drivers use it'],
          rows: [
            ['Early apex', 'Faster into the corner, but the car runs wide and must slow more on exit', 'Rarely ideal alone, usually a sign of a mistake, unless followed immediately by another corner in the same direction'],
            ['Geometric (middle) apex', 'A balanced, "textbook" line', 'A reasonable default for an isolated, standalone corner'],
            ['Late apex', 'Slower into the corner, but allows earlier, harder acceleration on exit, onto a straight', 'Strongly preferred before any straight, since exit speed is carried all the way down the following straight, a small gain on exit compounds over a long straight'],
          ],
          caption: 'The general principle: exit speed before a straight is worth more than entry speed into a corner, because exit speed is carried (and compounds) over the entire following straight, while entry speed is only relevant for an instant.',
        },
      ],
    },
    {
      id: 'braking',
      title: 'Why braking happens in a straight line',
      blocks: [
        {
          t: 'p',
          text: 'A tyre has a roughly fixed total amount of grip available at any instant (approximated by a "friction circle": the combined braking/accelerating force and the cornering force can together only add up to so much, from the same contact patch described in [tyres and grip](@sports/f1/physics-theory/tyres-grip)). Braking hard **and** turning hard at the same time asks the tyre for more combined grip than it has, risking a slide, which is why drivers brake in a straight line, release the brake progressively as they turn in, and only apply full throttle once the car is straight again on exit.',
        },
        {
          t: 'callout', tone: 'tip', title: 'The "friction circle" idea', text: 'Picture a circle representing a tyre\'s total available grip. Braking uses up some of that circle in the "backward" direction; cornering uses some in the "sideways" direction. The two combine like vector addition, using 100% of the circle for braking leaves 0% for turning, and vice versa, which is exactly why a smooth driver releases the brake gradually while turning in, trading braking grip for cornering grip bit by bit, rather than slamming from one to the other.',
        },
      ],
    },
  ],
  sources: ['Milliken, W. F., & Milliken, D. L. (1995). *Race Car Vehicle Dynamics*. SAE International.', 'Bentley, R. (1998). *Speed Secrets: Professional Race Driving Techniques*. Motorbooks.'],
  related: ['sports/f1/physics-theory/tyres-grip', 'sports/f1/physics-theory/downforce-aerodynamics', 'mathematics/algebra/exponents-roots'],
}

export default guide
