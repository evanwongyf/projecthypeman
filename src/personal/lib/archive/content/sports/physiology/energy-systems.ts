import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Every muscle contraction, in every sport, is powered by the same single molecule: ATP. The interesting part is that the body has three distinct chemical pathways to keep making it, each with a different trade-off between how fast it can supply energy and how long it can keep going, and which sport you watch largely determines which system is doing most of the work.',
  nutshell: [
    'All muscle contraction is directly powered by **ATP**; the body only stores a few seconds\' worth at a time, so it must be continuously regenerated.',
    'The **ATP-PCr system** regenerates ATP almost instantly but only lasts about 10 seconds, powers a 100m sprint or a single maximal lift.',
    'The **glycolytic system** kicks in next, lasting roughly 30 seconds to 2 minutes, producing lactate as a byproduct, powers a 400m sprint or a wrestling bout.',
    'The **aerobic system** is slower to ramp up but can run for hours, using oxygen to burn carbohydrate and fat, powers a marathon or a long cycling stage.',
  ],
  sections: [
    {
      id: 'atp',
      title: 'ATP: the one currency every muscle spends',
      blocks: [
        {
          t: 'p',
          text: 'Adenosine triphosphate (ATP) is the direct energy source for muscle contraction, no pathway in the body powers movement any other way. The muscle only stores enough ATP for a couple of seconds of all-out effort at a time, so every sustained effort, from a tennis serve to a marathon, depends on how fast the body can regenerate it.',
        },
        {
          t: 'flow',
          title: 'Three pathways, one job: regenerating ATP',
          nodes: [
            { label: 'ATP used by the muscle', tone: 'output' },
            { label: 'ATP-PCr system', sub: 'instant, ~10 s supply', tone: 'process' },
            { label: 'Glycolytic system', sub: 'fast, ~30 s–2 min supply', tone: 'process' },
            { label: 'Aerobic system', sub: 'slower to start, hours of supply', tone: 'process' },
          ],
          caption: 'All three systems are active to some degree at almost all times, sport-specific demands determine which one is doing the *majority* of the work at any given moment, not an on/off switch between them.',
        },
      ],
    },
    {
      id: 'three-systems',
      title: 'The three systems, compared',
      blocks: [
        {
          t: 'table',
          head: ['System', 'Speed of ATP supply', 'Duration before depleted/limited', 'Needs oxygen?', 'Example sport moment'],
          rows: [
            ['ATP-PCr (phosphocreatine)', 'Fastest', '~8–10 seconds of maximal effort', 'No', 'A 100m sprint, a single maximal weightlifting attempt, a golf swing'],
            ['Glycolytic (anaerobic glycolysis)', 'Fast, but slower than ATP-PCr', 'Roughly 30 seconds to 2 minutes of high intensity', 'No (produces lactate as a byproduct)', 'A 400–800m run, a wrestling or judo bout, a hockey shift'],
            ['Aerobic (oxidative)', 'Slowest to ramp up', 'Hours, as long as fuel and oxygen supply allow', 'Yes', 'A marathon, a long cycling stage, a 90-minute football match'],
          ],
          caption: 'Most real sporting efforts blend all three, a football match is mostly aerobic overall, but every sprint for the ball during it is powered predominantly by the ATP-PCr and glycolytic systems layered on top.',
        },
        {
          t: 'plot',
          title: 'Relative contribution of each system over time (illustrative, after classic exercise-physiology models)',
          x: [0, 180],
          y: [0, 100],
          xLabel: 'seconds of maximal effort',
          yLabel: 'approximate % of energy from this system',
          curves: [
            { f: (t: number) => Math.max(0, 100 * Math.exp(-t / 4)), color: '#d9534f', label: 'ATP-PCr' },
            { f: (t: number) => 85 * Math.exp(-((t - 40) ** 2) / 3500), color: '#e07b2a', label: 'glycolytic' },
            { f: (t: number) => Math.min(95, 100 * (1 - Math.exp(-t / 50))), color: '#2f9e6e', label: 'aerobic' },
          ],
          caption: 'A simplified, illustrative picture of a classic exercise-physiology model: ATP-PCr dominates in the first seconds, glycolysis takes over through roughly the first couple of minutes, and the aerobic system progressively takes on more of the load the longer an effort continues, the exact curves vary by individual fitness and training.',
        },
      ],
    },
    {
      id: 'training-implication',
      title: 'Why this matters for training',
      blocks: [
        {
          t: 'p',
          text: 'Because the three systems are genuinely different biochemical pathways, training one does not automatically improve the others much, which is why elite training plans are built around the specific system (or blend of systems) that sport actually demands, rather than one generic "fitness" programme.',
        },
        {
          t: 'checklist',
          items: [
            'Sprinters and power athletes train to maximise ATP-PCr capacity and its recovery speed between efforts',
            'Middle-distance athletes specifically train tolerance to the glycolytic system\'s lactate accumulation, since that system dominates their event',
            'Endurance athletes train to maximise aerobic capacity (see VO2 max and training zones) and fuel efficiency over long durations',
            'Team-sport athletes often need all three, trained together, since a match repeatedly demands sprints (ATP-PCr), sustained high-intensity periods (glycolytic) and overall match duration (aerobic)',
          ],
        },
        { t: 'callout', tone: 'warn', title: 'A common myth: "lactic acid causes the burn"', text: 'For decades, lactic acid build-up was blamed for the burning sensation and fatigue in hard exercise. More recent exercise physiology research has significantly revised this picture: lactate itself is actually a useful fuel the body can reuse, and the "burn" and fatigue are now understood to be driven more by other factors (like hydrogen ion accumulation and changes in muscle cell chemistry) than lactate itself, see [fatigue and recovery](@sports/physiology/fatigue-recovery) for the fuller, more current picture.' },
      ],
    },
  ],
  sources: ['Baechle, T. R., & Earle, R. W. (Eds.). (2008). *Essentials of Strength Training and Conditioning* (3rd ed.). Human Kinetics (National Strength and Conditioning Association).', 'Gastin, P. B. (2001). Energy system interaction and relative contribution during maximal exercise. *Sports Medicine*, 31(10), 725–741.'],
  related: ['sports/physiology/vo2-training-zones', 'sports/physiology/fatigue-recovery', 'sports/physiology/strength-power-curve'],
}

export default guide
