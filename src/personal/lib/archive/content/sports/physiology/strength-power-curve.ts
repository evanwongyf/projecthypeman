import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A powerlifter and a sprinter are both extraordinarily strong, but in different senses of the word, and the relationship between them is captured by one of the most useful diagrams in sports science: the force-velocity curve. It explains why a huge bench press does not automatically make someone fast, and why training for strength and training for speed are genuinely different pursuits.',
  nutshell: [
    'The **force-velocity curve** shows an inverse relationship: the heavier (slower) a muscle contraction, the more force it can produce; the faster the contraction, the less force is available.',
    '**Power** = force × velocity, so maximum power output actually occurs somewhere in the *middle* of the curve, not at either extreme.',
    'Different training styles deliberately target different regions of the curve: heavy lifting trains the high-force end, plyometrics and sprinting train the high-velocity end.',
    '**Rate of force development (RFD)**, how quickly force can be generated, matters more than maximum strength alone in many fast, explosive sporting actions.',
  ],
  sections: [
    {
      id: 'curve',
      title: 'The force-velocity curve',
      blocks: [
        {
          t: 'plot',
          title: 'A generalised force-velocity curve (illustrative)',
          x: [0, 10],
          y: [0, 100],
          xLabel: 'contraction velocity (relative)',
          yLabel: 'force available (% of maximum)',
          curves: [{ f: (v: number) => 100 * Math.exp(-v / 4), color: '#3b6fd8', label: 'force available' }],
          caption: 'A muscle can produce its absolute maximum force only at (or near) zero velocity, a maximal, barely-moving lift. As contraction speed increases, the force the muscle can generate drops off, a relationship first precisely described by A. V. Hill\'s classic 1938 muscle-physiology experiments.',
        },
        {
          t: 'math',
          tex: String.raw`P = F \times v`,
          caption: 'Power (the rate of doing work) is force multiplied by velocity. Because force falls as velocity rises (the curve above), multiplying the two together produces a curve that peaks somewhere in the *middle*, not at maximum force (near-zero velocity) and not at maximum velocity (near-zero force).',
        },
        {
          t: 'plot',
          title: 'Power output across the same curve',
          x: [0, 10],
          y: [0, 350],
          xLabel: 'contraction velocity (relative)',
          yLabel: 'power (relative)',
          curves: [{ f: (v: number) => v * 100 * Math.exp(-v / 4), color: '#e07b2a', label: 'power = force × velocity' }],
          points: [{ x: 4, y: 4 * 100 * Math.exp(-1), label: 'peak power, mid-curve' }],
          caption: 'This is why Olympic lifts, jump training and medicine-ball throws, all performed at moderate load and high velocity, are specifically chosen to train the region of the curve where power, not pure force, peaks: the region most sports actually need.',
        },
      ],
    },
    {
      id: 'training-for-the-curve',
      title: 'Training different regions of the curve',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'High-force end (heavy, slow)', body: 'Maximal and near-maximal strength training (e.g. a 1–3 rep max squat or deadlift), builds the top of the curve, raising absolute maximum force, which also tends to shift the whole curve upward over time.' },
            { title: 'Mid-curve (moderate load, fast)', body: 'Olympic-style lifts (cleans, snatches), jump squats and medicine-ball throws, trains the peak-power region most directly transferable to explosive sporting actions.' },
            { title: 'High-velocity end (light/no load, very fast)', body: 'Sprinting, plyometrics (bounding, depth jumps), unloaded throws, trains the far end of the curve, raw contraction speed with minimal external resistance.' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Why a powerlifter is not automatically a sprinter', text: 'A huge 1-rep-max squat demonstrates force at (near) zero velocity, the far left of the curve. Sprinting demands force at very high velocity, the far right. The curve genuinely does not transfer in a straight line between the two extremes, which is a core reason elite training programmes deliberately include work across multiple regions of the curve rather than training maximal strength alone and assuming speed will follow.' },
      ],
    },
    {
      id: 'rfd',
      title: 'Rate of force development',
      blocks: [
        {
          t: 'p',
          text: 'Many sporting actions, a sprint start, a punch, a volleyball spike, happen too fast (often under 300 milliseconds of ground or muscle contact) for an athlete to ever reach their *absolute* maximum strength during the movement at all. In these actions, **rate of force development (RFD)**, how quickly force climbs from zero towards its peak, often predicts performance better than maximum strength itself.',
        },
        {
          t: 'plot',
          title: 'Force building over time: two athletes with the same maximum strength',
          x: [0, 0.4],
          y: [0, 100],
          xLabel: 'time since contact (seconds)',
          yLabel: 'force (% of max)',
          curves: [
            { f: (t: number) => Math.min(100, 100 * (1 - Math.exp(-t / 0.08))), color: '#2f9e6e', label: 'high RFD athlete' },
            { f: (t: number) => Math.min(100, 100 * (1 - Math.exp(-t / 0.2))), color: '#d9534f', label: 'lower RFD athlete' },
          ],
          vlines: [{ x: 0.15, label: 'typical sprint ground-contact time' }],
          caption: 'Both athletes can eventually reach the same maximum force, but only one reaches most of it within the brief window (often well under 200 ms) available during an explosive action. In actions this fast, the athlete with higher RFD effectively has more usable strength, even with identical maximum strength on a slow test like a 1-rep-max lift.',
        },
        { t: 'callout', tone: 'fact', title: 'Why this reshaped strength coaching', text: 'Research distinguishing maximal strength from RFD, pioneered substantially by researchers like Carmelo Bosco and later popularised more widely from the 1990s–2000s onward, helped shift elite strength and conditioning away from pure maximal-strength training (powerlifting-style) toward explosive, Olympic-lift-based and plyometric methods for sports where actions are too brief to express full maximal strength, a genuinely significant, evidence-driven change in how athletes across many sports are now trained.' },
      ],
    },
  ],
  sources: ['Hill, A. V. (1938). The heat of shortening and the dynamic constants of muscle. *Proceedings of the Royal Society B*, 126(843), 136–195.', 'Cormie, P., McGuigan, M. R., & Newton, R. U. (2011). Developing maximal neuromuscular power. *Sports Medicine*, 41(1), 17–38.'],
  related: ['sports/physics/levers-biomechanics', 'sports/physiology/reaction-time', 'sports/physiology/fatigue-recovery'],
}

export default guide
