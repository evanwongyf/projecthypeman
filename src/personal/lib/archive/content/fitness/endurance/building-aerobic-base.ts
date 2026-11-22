import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The largest and most reliable gains in stamina come from the plainest training: lots of easy aerobic work, done regularly, increased gradually. Elite endurance athletes in every sport do about 75 to 80% of their sessions at an easy, conversational pace and a small share hard, a pattern called polarised or 80/20 training. This guide explains the intensity zones, why easy training works, how to find your zones, the main ways to distribute training, how to build weekly volume safely, and a sample base-building plan for the first 8 weeks.',
  nutshell: [
    '**Zone 2** (easy, conversational, below the first lactate threshold, about 60 to 75% of maximum heart rate) builds the aerobic base: more capillaries, mitochondria and fat use, with low fatigue.',
    'Elite endurance athletes spend **about 80% of training time easy and about 20% hard** with little in the grey middle (Seiler); amateurs often train too hard on easy days and too easy on hard days.',
    '**Progress weekly volume gradually**: no hard evidence for a precise rule, but increases of about 5 to 10% a week and a lighter week every third or fourth week suit most people; jumps of more than about 30% in one week raise injury risk.',
    'A **long session** each week builds durability; **one or two hard sessions** add VO₂max and threshold; the rest is easy.',
    'Find zones by **heart rate, pace, power or the talk test**, and adjust for heat: in Singapore the same pace costs a higher heart rate.',
  ],
  sections: [
    {
      id: 'zones',
      title: 'Intensity zones',
      lead: 'Three zones are enough.',
      blocks: [
        {
          t: 'table',
          head: ['Zone (three-zone model)', 'Feels like', '% max HR (approx.)', 'Lactate', 'Used for'],
          rows: [
            ['1: easy (below LT1)', 'Can hold a conversation; breathing relaxed', '60 to 80%', 'Baseline (under 2 mmol/L)', 'Base, recovery, long runs'],
            ['2: moderate / threshold (LT1 to LT2)', '"Comfortably hard"; short sentences only', '80 to 90%', '2 to 4 mmol/L', 'Tempo runs, threshold intervals'],
            ['3: hard (above LT2)', 'Hard breathing; one or two words', '90 to 100%', 'Over 4 mmol/L', 'VO₂max intervals, sprints'],
          ],
          caption: 'Many coaches use five zones (Zone 1 recovery, Zone 2 aerobic, Zone 3 tempo, Zone 4 threshold, Zone 5 VO₂max). "Zone 2" in popular usage is the top of the easy zone, just below the first lactate threshold.',
        },
        {
          t: 'math',
          tex: String.raw`HR_{\max}\approx 208-0.7\,a\ (\text{Tanaka}),\qquad HR_{\text{target}}=HR_{\text{rest}}+p\,(HR_{\max}-HR_{\text{rest}})\ (\text{Karvonen})`,
          caption: 'A population estimate of maximum heart rate by age, and the heart-rate-reserve method for setting target zones.',
          where: [{ sym: 'a', def: 'age in years' }, { sym: 'p', def: 'the fraction of heart-rate reserve (0.5 to 0.7 for easy aerobic work)' }, { sym: 'HR_{\\text{rest}}', def: 'resting heart rate measured on waking' }],
          syntax: [
            { sym: '208-0.7a', say: 'an age-based estimate that fits large datasets better than the old 220 − age. Effect: it gives a mean, and individuals vary by ±10 bpm or more. Why: maximum heart rate declines about 0.7 beats per year on average. Use a measured value when you can: the end of a hard hill or a 3 km time trial.' },
            { sym: 'HR_{\\text{rest}}+p(HR_{\\max}-HR_{\\text{rest}})', say: 'a target between resting and maximum. Effect: accounts for fitness through resting heart rate: a fitter person with a lower resting rate has a wider reserve. Why: reserve is a better index of relative effort than percent of maximum.' },
          ],
          worked: {
            title: 'A 35-year-old, resting HR 60',
            steps: ['Estimated maximum: 208 − 0.7 × 35 = 183.5 bpm.', 'Reserve = 183.5 − 60 = 123.5.', 'Easy zone at 50 to 70% of reserve: 60 + 0.5 × 123.5 = 122 to 60 + 0.7 × 123.5 = 146 bpm.', 'The talk test should agree: you can speak full sentences at 140 bpm.'],
            answer: 'The easy zone is about 122 to 146 bpm. If the talk test says you are breathing hard at 140, trust the talk test and slow down: heat, poor sleep and dehydration push heart rate up for the same effort.',
          },
        },
      ],
    },
    {
      id: 'dist',
      title: 'How to distribute training',
      lead: 'Polarised, pyramidal and threshold.',
      blocks: [
        {
          t: 'table',
          head: ['Model', 'Share in zones 1 / 2 / 3', 'Evidence and notes'],
          rows: [
            ['Polarised', '~80 / ~5 / ~15', 'Seen in elite rowers, cross-country skiers and runners; produced larger VO₂max gains than threshold-heavy training in a 2014 trial of trained athletes (Stöggl and Sperlich)'],
            ['Pyramidal', '~75 / ~20 / ~5', 'The commonest pattern in elite runners and cyclists; evidence similar to polarised in several comparisons'],
            ['Threshold-heavy', '~50 / ~40 / ~10', 'Works in the short term, but is more fatiguing and tends to plateau; common among recreational athletes ("too much moderate")'],
            ['High-volume low-intensity', '~95 / ~3 / ~2', 'Best for beginners and for base phases; adding a little intensity usually helps'],
          ],
          caption: 'Studies are short and small; the safe takeaway is "mostly easy, some hard, not much in the middle", not an exact ratio.',
        },
        { t: 'p', text: 'Why is easy volume so effective? Aerobic adaptations (stroke volume, capillary density, mitochondria, fat oxidation) respond to the total time spent at moderate stress, and easy sessions give that stress without the recovery cost of hard ones. You can therefore do more of them, and be fresh for the sessions that need intensity. The common mistake is to turn every session into a moderate effort: it is too hard to recover from and too easy to drive the top-end adaptations.' },
      ],
    },
    {
      id: 'volume',
      title: 'Building weekly volume',
      lead: 'How much, how fast.',
      blocks: [
        { t: 'p', text: 'The "10% rule" (do not raise weekly mileage by more than 10%) is popular but has weak evidence: a randomised trial of novice runners (Buist et al., 2008) found no difference in injury between a graded programme and a standard one. Large jumps do seem to matter, though: a 2014 cohort study (Nielsen et al.) linked weekly distance increases above about 30% with higher risk of some running injuries. A reasonable approach is to increase by about 5 to 10% a week for three weeks, then reduce for a lighter week by about 20 to 30%, and to be careful with intensity increases at the same time as volume.' },
        {
          t: 'math',
          tex: String.raw`V_n=V_0\,(1+g)^{n},\qquad g\approx 0.05\text{ to }0.10,\qquad n_{\text{doubling}}=\frac{\ln 2}{\ln(1+g)}`,
          caption: 'Compounding growth in weekly volume, and how long it takes to double.',
          where: [{ sym: 'V_0', def: 'starting weekly volume (minutes or kilometres)' }, { sym: 'g', def: 'weekly growth rate' }, { sym: 'n', def: 'weeks' }],
          syntax: [{ sym: '(1+g)^n', say: 'compounding. Effect: 8% a week sounds small, but doubles volume in under 10 weeks. Why: each week’s increase is a percentage of an already larger base. A schedule with a lighter week every fourth week roughly halves the average growth.' }, { sym: '\\ln2/\\ln(1+g)', say: 'time to double. Effect: at 5% it takes 14 weeks; at 10% about 7. Why: logarithms turn repeated multiplication into time.' }],
          worked: {
            title: 'From 3 hours to 6 hours a week',
            steps: ['Start with 180 minutes a week. Grow by 8% in three weeks, then a lighter week (−25%).', 'Weeks 1 to 3: 180, 194, 210. Week 4: 158. Weeks 5 to 7: 227, 245, 265. Week 8: 199.', 'Reaching 360 minutes (twice the start) takes about 18 to 20 weeks with deload weeks.'],
            answer: 'Doubling volume safely takes four to five months. Adaptations take time; tendons, bones and ligaments adapt more slowly than the heart and muscle, and are where overuse injuries occur.',
          },
        },
        {
          t: 'table',
          head: ['Week', 'Easy sessions', 'Long session', 'Hard session', 'Total time'],
          rows: [
            ['1', '3 × 30 min', '45 min', 'none', '~2 h 15'],
            ['2', '3 × 30 min', '50 min', 'none', '~2 h 20'],
            ['3', '3 × 35 min', '55 min', '6 × 1 min pickups', '~2 h 40'],
            ['4 (lighter)', '3 × 25 min', '40 min', 'none', '~1 h 55'],
            ['5', '3 × 35 min', '60 min', '6 × 1 min pickups', '~2 h 50'],
            ['6', '3 × 40 min', '65 min', '4 × 3 min at threshold', '~3 h 05'],
            ['7', '3 × 40 min', '70 min', '4 × 3 min at threshold', '~3 h 10'],
            ['8 (lighter)', '3 × 30 min', '50 min', 'none', '~2 h 20'],
          ],
          caption: 'A cautious base plan for a runner or cyclist starting from three to four easy sessions a week. Add strength work twice a week (see the strength shelf).',
        },
      ],
    },
  ],
  sources: [
    'Seiler, S. (2010). What is best practice for training intensity and duration distribution in endurance athletes? *International Journal of Sports Physiology and Performance*, 5(3).',
    'Stöggl, T. & Sperlich, B. (2014). Polarized training has greater impact on key endurance variables than threshold, high intensity, or high volume training. *Frontiers in Physiology*, 5(33).',
    'Buist, I. et al. (2008). No effect of a graded training program on the number of running-related injuries in novice runners. *American Journal of Sports Medicine*, 36(1).',
    'Nielsen, R. Ø. et al. (2014). Excessive progression in weekly running distance and risk of running-related injuries. *Journal of Orthopaedic & Sports Physical Therapy*, 44(10).',
    'Tanaka, H., Monahan, K. D. & Seals, D. R. (2001). Age-predicted maximal heart rate revisited. *Journal of the American College of Cardiology*, 37(1).',
    'Casado, A. et al. (2022). Training periodization, methods, intensity distribution, and volume in highly trained and elite distance runners: a systematic review. *International Journal of Sports Physiology and Performance*, 17(6).',
  ],
  related: ['fitness/endurance/how-stamina-works', 'fitness/endurance/intervals-and-threshold', 'fitness/running/start-running', 'fitness/running/philosophies', 'fitness/running/calculators'],
}

export default guide
