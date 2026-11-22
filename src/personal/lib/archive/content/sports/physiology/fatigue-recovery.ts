import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Fatigue feels like one thing, tiredness, heaviness, a drop in performance, but exercise physiology has found it is actually caused by several different, overlapping mechanisms depending on the type and duration of effort. Understanding what is actually happening, and separating the real science from long-standing gym-floor myths, changes how recovery is best approached.',
  nutshell: [
    'Fatigue has multiple real causes: fuel depletion (glycogen), ion and pH changes in the muscle, central nervous system fatigue, and structural muscle micro-damage, rarely just one thing.',
    'The old "lactic acid causes soreness and fatigue" explanation has been substantially revised by modern exercise physiology, lactate is actually a useful fuel, not simply a waste product.',
    'Muscle soreness that appears **1–3 days after** hard exercise (DOMS) has a largely separate cause from the fatigue felt **during** exercise.',
    '**Supercompensation**: the principle that the body, given adequate recovery, rebuilds slightly stronger than before, the biological basis for why rest days are a genuine, necessary part of training, not time lost.',
  ],
  sections: [
    {
      id: 'myth',
      title: 'Retiring an old myth: lactic acid',
      blocks: [
        {
          t: 'p',
          text: 'For most of the 20th century, the standard explanation for muscle fatigue and the "burn" of hard exercise was lactic acid build-up. Modern exercise physiology has substantially revised this: lactate (the form lactic acid actually takes in the body) is now understood to be a valuable fuel the body produces and reuses, including being shuttled to and burned by the heart and other muscles, not simply a waste product causing fatigue.',
        },
        {
          t: 'table',
          head: ['Old (largely outdated) claim', 'Current understanding'],
          rows: [
            ['Lactic acid causes the "burn" and next-day soreness', 'Lactate clears from the blood within roughly an hour after exercise, far too quickly to explain soreness appearing a day or two later (see DOMS below), the in-exercise burning sensation is now linked more to accumulating hydrogen ions and other metabolic changes than lactate itself'],
            ['Lactate is a dead-end waste product', 'Lactate is an active fuel source, reused by muscle, heart and even the brain, research since the 1980s–90s (notably by George Brooks and colleagues) reframed it as part of an efficient "lactate shuttle" system, not a problem to be eliminated'],
            ['Higher lactate always means worse performance', 'Elite endurance athletes often tolerate and clear higher lactate levels more effectively than untrained people, lactate threshold training (see VO2 max and training zones) specifically improves this capacity rather than trying to avoid lactate production altogether'],
          ],
        },
      ],
    },
    {
      id: 'real-causes',
      title: 'What actually causes fatigue',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Fuel depletion', body: 'Glycogen (stored carbohydrate) in the muscles and liver is finite"hitting the wall" in a marathon is substantially explained by glycogen stores running critically low, forcing a shift to slower, less efficient fat metabolism.' },
            { title: 'Metabolic and ionic changes', body: 'Accumulating hydrogen ions, inorganic phosphate, and shifts in potassium and calcium handling within the muscle cell all interfere with the contraction mechanism itself during very intense, short-duration effort.' },
            { title: 'Central (nervous system) fatigue', body: 'The brain and nervous system\'s drive to the muscles can itself decline with prolonged effort, independent of the muscle\'s own remaining physical capacity, part of why mental fatigue and motivation genuinely affect measured physical output, not just perceived effort.' },
            { title: 'Dehydration and heat', body: 'Reduced blood volume (from fluid loss) and rising core temperature both impair performance directly, by reducing blood flow efficiency and forcing the body to divert blood toward cooling the skin.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'Which cause dominates depends on the effort', text: 'A 100m sprint\'s fatigue is dominated by ionic/metabolic changes in the muscle over a few seconds; a marathon\'s fatigue is dominated by fuel depletion, dehydration and central fatigue over hours, which is exactly why recovery strategies differ so much by sport and event duration.' },
      ],
    },
    {
      id: 'doms',
      title: 'DOMS: delayed onset muscle soreness',
      blocks: [
        {
          t: 'p',
          text: 'The soreness that peaks roughly 24–72 hours after unfamiliar or unusually hard exercise (especially eccentric, lengthening-under-load movements, like running downhill or the lowering phase of a heavy lift) is now understood as largely driven by microscopic structural damage to muscle fibres and the resulting inflammatory repair response, a genuinely different mechanism from the in-the-moment fatigue felt during exercise itself.',
        },
        {
          t: 'checklist',
          items: [
            'DOMS is most associated with eccentric (lengthening) muscle contractions specifically, more than concentric (shortening) ones',
            'It typically peaks 24–72 hours after the triggering exercise, then resolves within about a week',
            'The "repeated bout effect": doing the same exercise again soon after produces noticeably less soreness, evidence the muscle has adapted, not just that soreness has worn off',
            'Despite common belief, there is limited strong evidence that stretching before or after exercise meaningfully prevents DOMS',
          ],
        },
      ],
    },
    {
      id: 'supercompensation',
      title: 'Supercompensation: why rest is part of training',
      blocks: [
        {
          t: 'plot',
          title: 'The supercompensation cycle (illustrative)',
          x: [0, 10],
          y: [85, 115],
          xLabel: 'days',
          yLabel: 'fitness / performance capacity (relative)',
          curves: [{ f: (t: number) => 100 - 12 * Math.exp(-((t - 1) ** 2) / 0.6) + 8 * Math.exp(-((t - 4) ** 2) / 3) - (t > 6 ? 2 * (t - 6) : 0) }],
          points: [
            { x: 1, y: 89, label: 'hard session: temporary dip' },
            { x: 4, y: 106, label: 'supercompensation peak' },
          ],
          caption: 'A hard training session temporarily reduces capacity (fatigue). Given adequate recovery, the body does not just return to baseline, it briefly overshoots it, rebuilding slightly stronger than before, before gradually settling back down if not trained again. Training too soon (before recovery) or too late (after the supercompensation peak fades) both leave performance gains on the table, the entire logic behind periodised training schedules.',
        },
        { t: 'callout', tone: 'tip', title: 'Why overtraining happens', text: 'Stacking hard sessions without allowing this recovery-and-overshoot cycle to complete, always training again during the fatigue dip rather than near the supercompensation peak, is a well-documented path toward overtraining syndrome: a state of chronic fatigue, declining performance, and sometimes mood and immune disturbances, that can take weeks to months of reduced training to resolve.' },
      ],
    },
  ],
  sources: ['Brooks, G. A. (2018). The science and translation of lactate shuttle theory. *Cell Metabolism*, 27(4), 757–785.', 'Cheung, K., Hume, P. A., & Maxwell, L. (2003). Delayed onset muscle soreness: Treatment strategies and performance factors. *Sports Medicine*, 33(2), 145–164.', 'Bompa, T. O., & Buzzichelli, C. (2018). *Periodization: Theory and Methodology of Training* (6th ed.). Human Kinetics.'],
  related: ['sports/physiology/energy-systems', 'sports/physiology/vo2-training-zones', 'fitness/recovery'],
}

export default guide
