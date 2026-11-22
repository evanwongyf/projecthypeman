import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Once you have a base of easy training, a small amount of hard work raises the ceiling. Intervals, repeated efforts with recovery between them, let you spend more total time at high intensity than a single continuous effort would allow. Different intervals train different things: long efforts near your lactate threshold raise the pace you can hold, 2 to 5 minute efforts at VO₂max raise your top aerobic capacity, and short sprints train speed and anaerobic power. This guide explains the main formats, how to set the pace and rest, how much to do, and how to avoid the usual mistakes.',
  nutshell: [
    '**Threshold work** (tempo runs, 3 × 10 min at "comfortably hard") raises the pace you can sustain; **VO₂max intervals** (3 to 5 min at about 90 to 100% of VO₂max, with equal or shorter recovery) raise your aerobic ceiling; **sprints** (10 to 30 s) train power.',
    '**Norwegian 4 × 4**: four 4-minute efforts at 90 to 95% of max heart rate with 3 minutes of easy recovery. In trials it raised VO₂max by about 7% in 8 weeks (Helgerud et al., 2007).',
    '**HIIT is time-efficient**: similar VO₂max gains to moderate training in about a third of the time, but it takes more recovery, so add it to a base rather than replacing it.',
    'Limit hard work to **about 10 to 20% of weekly time**, two sessions a week at most, on fresh legs, separated by at least 48 hours.',
    'Finish each session knowing you could do **one more repeat**: the last should be as good as the first.',
  ],
  sections: [
    {
      id: 'types',
      title: 'The main interval formats',
      lead: 'What each one is for.',
      blocks: [
        {
          t: 'table',
          head: ['Format', 'Example', 'Intensity', 'Rest', 'Trains'],
          rows: [
            ['Tempo / threshold', '20 to 30 min continuous, or 3 × 10 min', 'Comfortably hard (about 85 to 90% HRmax; pace you could hold for 40 to 60 min)', '2 to 3 min easy between reps', 'Lactate threshold, ability to hold pace'],
            ['Cruise intervals', '5 × 6 min, 4 × 8 min', 'At threshold', '1 to 2 min jog', 'Threshold with less fatigue than a continuous tempo'],
            ['VO₂max (long) intervals', '4 × 4 min, 5 × 3 min', '90 to 95% HRmax, about 3 km to 5 km race pace', 'Equal time or 3 min jog', 'VO₂max, stroke volume'],
            ['Short intervals, 30/30', '8 to 10 min of 30 s hard / 30 s easy, repeated 2 to 3 sets', 'About vVO₂max (the speed at VO₂max)', '30 s easy', 'VO₂max with less perceived effort'],
            ['Hill repeats', '8 × 60 to 90 s uphill', 'Hard', 'Walk or jog down', 'Strength, economy, VO₂max'],
            ['Sprint interval training', '4 to 6 × 30 s all-out', 'Maximal', '4 min easy', 'Anaerobic power, mitochondria (in very time-limited training)'],
            ['Repetitions', '8 × 200 m', 'Fast but relaxed', 'Full recovery', 'Speed and economy'],
          ],
        },
        { t: 'p', text: 'The evidence for high-intensity interval training (HIIT) is strong for fitness gains in short time. A systematic review (Milanović et al., 2015) found HIIT improved VO₂max about as much as, or more than, moderate continuous training in healthy adults, in less time. Sprint interval protocols raise endurance with only a few minutes of hard work a week, but they are demanding and not suitable for everyone. If you are new to intense exercise or have a health condition, build a base first and take advice from a doctor.' },
      ],
    },
    {
      id: 'dose',
      title: 'Choosing the pace, the rest and the dose',
      lead: 'The work-to-rest ratio.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{work:rest}=\frac{t_{\text{work}}}{t_{\text{rest}}},\qquad T_{\text{hard}}=n\times t_{\text{work}},\qquad \text{time at}\ \ge 90\%\,\dot VO_{2\max}\ \approx\ T_{\text{hard}}-\text{ramp-up }(\approx 1\text{ min per rep})`,
          caption: 'The structure of an interval session, and the time you actually spend near VO₂max.',
          where: [{ sym: 't_{\\text{work}},t_{\\text{rest}}', def: 'the time of one hard effort and its recovery' }, { sym: 'n', def: 'the number of repeats' }],
          syntax: [{ sym: 't_{\\text{work}}/t_{\\text{rest}}', say: 'how much recovery you get relative to work. Effect: 1:1 gives a more continuous stress; 1:0.5 is harder; 1:2 or more allows each effort to be faster. Why: rest restores phosphocreatine and clears metabolites so the next effort can be of high quality.' }, { sym: 'T_{\\text{hard}}-\\text{ramp-up}', say: 'oxygen uptake takes 1 to 2 minutes to reach its peak. Effect: in a 4-minute effort, you only reach VO₂max in the last 2 to 3 minutes, so very short efforts at moderate speed do not reach VO₂max. Why: oxygen uptake kinetics: a slow rise to a steady state.' }],
          worked: {
            title: 'Comparing two sessions',
            steps: ['A: 4 × 4 min at 92% HRmax with 3 min recovery. Hard time = 16 min. Near VO₂max ≈ 16 − 4 × 1 = 12 minutes.', 'B: 10 × 30 s at the speed at VO₂max with 30 s easy. Hard time = 5 min per set; oxygen uptake stays high through the easy part, so total time near VO₂max across two sets ≈ 12 to 14 minutes.', 'A continuous 20-minute effort at the same pace would be impossible: you could hold it for only 6 to 8 minutes.'],
            answer: 'Intervals let you accumulate 12 or more minutes near VO₂max in one session, which seems to be the stimulus that raises it; a single continuous effort would stop at 6 to 8 minutes.',
          },
        },
        {
          t: 'levels',
          caption: 'Progressing interval sessions over about 8 weeks (sequence for a runner with a base).',
          items: [
            { name: 'Weeks 1 to 2: introduce', body: '6 × 1 min pickups or 3 × 3 min at threshold with 2 min easy; stay below your limit.' },
            { name: 'Weeks 3 to 4: threshold', body: '3 × 8 min or 2 × 12 min at threshold, 2 min rest.' },
            { name: 'Weeks 5 to 6: VO₂max', body: '5 × 3 min at 3 to 5 km pace with 2 to 3 min jog, or 4 × 4 min.' },
            { name: 'Week 7: combine', body: 'One threshold session and one VO₂max session this week; keep the rest easy.' },
            { name: 'Week 8: recover and test', body: 'Cut volume by a third and run a 3 or 5 km time trial to measure change.' },
          ],
        },
      ],
    },
    {
      id: 'mist',
      title: 'Mistakes and safety',
      lead: 'How hard work goes wrong.',
      blocks: [
        {
          t: 'dodont',
          do: ['Warm up for 10 to 15 minutes, including a few short accelerations.', 'Pace the first repeat conservatively; the last should be as fast as the first.', 'Record pace or power and heart rate, and note how you felt.', 'Take easy days truly easy after intervals.'],
          dont: ['Do intervals with a base of only a few weeks or on days when you are ill or poorly slept.', 'Make every run "a bit hard": hard days become average and easy days too hard.', 'Run intervals on a hot, humid midday in Singapore without adapting the pace and rest; aim for early morning or an indoor session.', 'Chase pace if heart rate is much higher than usual for the effort.'],
        },
        { t: 'callout', tone: 'warn', title: 'Check your health first', text: 'Vigorous exercise raises the (small) risk of cardiac events in people with undiagnosed heart disease. If you are over about 40 and new to vigorous exercise, have chest pain, unusual breathlessness, fainting, or a family history of sudden cardiac death, see a doctor before starting. Stop and seek help if you have chest pain, dizziness or a feeling of impending collapse.' },
      ],
    },
  ],
  sources: [
    'Helgerud, J. et al. (2007). Aerobic high-intensity intervals improve VO2max more than moderate training. *Medicine & Science in Sports & Exercise*, 39(4).',
    'Milanović, Z., Sporiš, G. & Weston, M. (2015). Effectiveness of high-intensity interval training (HIT) and continuous endurance training for VO2max improvements: a systematic review and meta-analysis of controlled trials. *Sports Medicine*, 45(10).',
    'Billat, V. L. (2001). Interval training for performance: a scientific and empirical practice. *Sports Medicine*, 31(1) and 31(2).',
    'Gibala, M. J. et al. (2012). Physiological adaptations to low-volume, high-intensity interval training in health and disease. *The Journal of Physiology*, 590(5).',
    'Laursen, P. B. & Jenkins, D. G. (2002). The scientific basis for high-intensity interval training. *Sports Medicine*, 32(1).',
  ],
  related: ['fitness/circuits/hiit', 'fitness/endurance/building-aerobic-base', 'fitness/running/workouts', 'fitness/endurance/how-stamina-works', 'fitness/endurance/recovery-and-overtraining'],
}

export default guide
