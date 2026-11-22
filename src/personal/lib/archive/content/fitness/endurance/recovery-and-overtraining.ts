import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Fitness is made in recovery. Hard sessions break the body down; sleep, food and easier days let it rebuild stronger. When hard training outruns recovery for long enough, performance falls instead of rises, first in the short term (overreaching, which is useful if planned), then, if ignored, in a state that can take months to clear (overtraining syndrome). This guide explains the fitness–fatigue model with a simulator, distinguishes functional overreaching, non-functional overreaching and overtraining, gives the signs and measures that warn of trouble, covers sleep, heart-rate variability and the low-energy-availability problem (RED-S), and ends with a decision checklist.',
  nutshell: [
    'The **fitness–fatigue model** (Banister): each session adds slow-fading fitness and fast-fading fatigue; performance = fitness − fatigue. It explains why training heavily lowers form in the short term and why a taper raises it.',
    '**Functional overreaching** (planned, a few weeks of heavy training, recovery in days to two weeks) boosts fitness; **non-functional overreaching** takes weeks; **overtraining syndrome** takes months and is rare but serious.',
    'Warning signs: **persistent fatigue, falling performance, raised resting heart rate, poor sleep, mood change, frequent illness and loss of motivation**.',
    '**Sleep** (7 to 9 hours, and 9 or more in heavy blocks), **enough energy and protein** and **planned easy weeks** are the foundations; avoid sudden jumps in load.',
    '**Low energy availability (RED-S)**: not eating enough for your training harms bone, hormones, immunity and performance and requires medical attention.',
  ],
  sections: [
    {
      id: 'model',
      title: 'The fitness–fatigue model',
      lead: 'Why you feel worse before you feel better.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`p(t)=p_0+k_1\sum_{s<t}w(s)\,e^{-(t-s)/\tau_1}-k_2\sum_{s<t}w(s)\,e^{-(t-s)/\tau_2},\qquad \tau_1\approx42\text{ d},\ \tau_2\approx7\text{ d},\ k_2>k_1`,
          caption: 'Banister’s impulse–response model (1975): performance at time t is a baseline plus a slowly decaying fitness effect minus a quickly decaying fatigue effect of each past session.',
          where: [{ sym: 'w(s)', def: 'the training load on day s (for example TRIMP or session RPE × duration)' }, { sym: '\\tau_1,\\tau_2', def: 'time constants of fitness and fatigue decay in days' }, { sym: 'k_1,k_2', def: 'weights of fitness and fatigue; fatigue is usually larger per unit of load' }],
          syntax: [
            { sym: 'w(s)e^{-(t-s)/\\tau}', say: 'each session’s effect decays exponentially with time since it was done. Effect: the older the session, the smaller its contribution. Why: both fitness and fatigue are transient states that fade without more training.' },
            { sym: 'k_2>k_1', say: 'fatigue is bigger than fitness for each session. Effect: just after a hard session performance dips (the same session gives a big fatigue and a small fitness), then recovers above its start as fatigue fades. Why: this explains the sawtooth of hard blocks and the peak after a taper.' },
            { sym: '\\tau_2\\ll\\tau_1', say: 'fatigue fades much faster than fitness. Effect: a short rest removes fatigue but keeps most fitness. Why: this is the logic of the taper.' },
          ],
          worked: {
            title: 'One hard day',
            steps: ['A session of load 100 on day 0. With k₁ = 1, k₂ = 2, τ₁ = 42, τ₂ = 7:', 'Day 1: fitness 100·e^(−1/42) = 97.6; fatigue 200·e^(−1/7) = 173.4; performance effect = −75.8.', 'Day 7: fitness 84.7; fatigue 200·e^(−1) = 73.6; effect = +11.1.', 'Day 14: fitness 71.7; fatigue 27.1; effect = +44.6.'],
            answer: 'A single session makes you worse for about 4 days and better afterwards. A weekly pattern of training and rest therefore builds fitness in the long run.',
          },
        },
        { t: 'fit-lab', viz: 'banister' },
        { t: 'callout', tone: 'note', title: 'A useful model, not a law', text: 'The parameters differ between people and over time, and the model can be wrong in detail. Commercial "form" scores (TSS, CTL, ATL, TSB in training platforms) are versions of it with fixed time constants of 42 and 7 days. Use them to understand trends, not as a verdict.' },
      ],
    },
    {
      id: 'over',
      title: 'Overreaching and overtraining',
      lead: 'A spectrum.',
      blocks: [
        {
          t: 'table',
          head: ['State', 'Cause', 'Performance', 'Recovery'],
          rows: [
            ['Normal fatigue', 'A hard session or week', 'Down for hours or a day or two', 'Hours to days'],
            ['Functional overreaching (FOR)', 'A planned period of heavy training', 'Dip for days to two weeks, then rises above baseline ("supercompensation")', 'Days to 2 weeks with rest'],
            ['Non-functional overreaching (NFOR)', 'Heavy training plus inadequate rest, stress, poor sleep or fuelling', 'Falls and stays low; symptoms accumulate', 'Weeks to a few months'],
            ['Overtraining syndrome (OTS)', 'Prolonged imbalance of training and recovery with other stressors', 'Marked, persistent fall; many symptoms across body systems', 'Months to years; medical care'],
          ],
          caption: 'Consensus definitions of the European College of Sport Science and ACSM (Meeusen et al., 2013). OTS is hard to diagnose and requires excluding illness (infection, anaemia, thyroid problems, depression, low energy availability).',
        },
        {
          t: 'checklist',
          items: [
            'Performance is flat or falling for 2 or more weeks despite training.',
            'Persistent, heavy fatigue that sleep does not clear.',
            'Resting heart rate up by 5 to 10 beats for several days, or heart rate unusually low or high during exercise.',
            'Heart-rate variability (HRV) trending downward over a week or two.',
            'Sleep disturbed, mood low or irritable, motivation gone.',
            'Frequent colds, sore throats, minor injuries.',
            'Loss of appetite, weight loss, in women missed periods.',
          ],
        },
      ],
    },
    {
      id: 'tools',
      title: 'Monitoring and loading',
      lead: 'Simple measures that help.',
      blocks: [
        {
          t: 'table',
          head: ['Measure', 'How', 'Notes'],
          rows: [
            ['Session RPE × minutes (sRPE)', 'Rate the session 1 to 10 afterwards and multiply by minutes', 'Simple, validated load measure for any sport (Foster)'],
            ['Resting heart rate', 'Measure on waking, lying down', 'Look for trends of 5 or more bpm above your normal for several days'],
            ['Heart-rate variability', 'Morning measurement with a chest strap or a validated app', 'A trend of a week or more matters; single readings are noisy'],
            ['Sleep and mood', 'A one-line daily rating', 'The cheapest and most sensitive early warning'],
            ['Performance tests', 'A standard run or ride every 4 to 6 weeks', 'The most important indicator'],
            ['Acute:chronic workload ratio', 'This week’s load divided by the average of the last 4 weeks', 'Popular, but evidence for a "safe zone" of 0.8 to 1.3 is disputed; use for context only'],
          ],
        },
        {
          t: 'math',
          tex: String.raw`\text{load}_{\text{session}}=\text{RPE}\times t_{\text{min}},\qquad \text{ACWR}=\frac{\text{load}_{\text{week}}}{\tfrac14\sum_{k=1}^{4}\text{load}_{\text{week}-k}}`,
          caption: 'Session load as RPE times minutes, and the acute:chronic workload ratio.',
          where: [{ sym: '\\text{RPE}', def: 'rating of perceived exertion on a 1 to 10 scale' }, { sym: 't_{\\text{min}}', def: 'duration in minutes' }],
          syntax: [{ sym: '\\text{RPE}\\times t', say: 'effort times time. Effect: a 60-minute easy run (RPE 3) is 180 units; a 60-minute interval session (RPE 8) is 480. Why: it captures both volume and intensity.' }, { sym: '\\text{ACWR}', say: 'this week’s load compared with the recent average. Effect: a ratio above about 1.5 suggests a spike; below 0.8, detraining. Why: abrupt changes in load, rather than high load itself, were linked to injury in team sports; the evidence is mixed and the statistic has known flaws.' }],
          worked: {
            title: 'A load spike',
            steps: ['Last four weeks of load: 2,000, 2,100, 2,200, 1,900 (average 2,050).', 'A new week of 3,200 gives ACWR = 3,200/2,050 = 1.56.', 'A rise of 56% in one week is large; plan to bring it back and add a lighter week.'],
            answer: 'The calculation flags a big jump. Whether it is harmful depends on the athlete, but a smoother build is easier on tendons and bones.',
          },
        },
      ],
    },
    {
      id: 'reds',
      title: 'Sleep and low energy availability',
      lead: 'The foundations.',
      blocks: [
        { t: 'p', text: 'Sleep is the most effective recovery tool known: sleep restriction impairs endurance, reaction time, mood and the immune system, and extending sleep in athletes improved performance in several studies (Mah et al., 2011). Aim for 7 to 9 hours, more during heavy training; keep regular times, avoid caffeine after about 2 pm and use a cool, dark, quiet room. In Singapore’s heat, air conditioning or a fan helps.' },
        { t: 'p', text: '**Relative energy deficiency in sport (RED-S)**, a syndrome of low energy availability (energy intake minus exercise energy expenditure, relative to lean body mass), occurs when an athlete does not eat enough to support training and basic body functions. Energy availability below about 30 kcal per kg of lean mass per day, particularly in women, disrupts reproductive hormones (periods stop), bone density, immune function and performance. Signs include repeated stress fractures, loss of periods or low libido, frequent illness, and persistent fatigue. If you suspect it, see a doctor or sports dietitian; do not train through it.' },
        {
          t: 'math',
          tex: String.raw`EA=\frac{E_{\text{intake}}-E_{\text{exercise}}}{\text{FFM}},\qquad EA<30\ \text{kcal/kg FFM/day: risk}`,
          caption: 'Energy availability: the energy left for the body’s basic functions after exercise, per kilogram of fat-free mass.',
          where: [{ sym: '\\text{FFM}', def: 'fat-free mass in kilograms' }],
          syntax: [{ sym: 'E_{\\text{intake}}-E_{\\text{exercise}}', say: 'food energy minus the energy of the training. Effect: what remains must pay for heartbeat, breathing, immunity, hormones, bone and repair. Why: if too little remains, the body saves energy by shutting down those systems.' }],
          worked: {
            title: 'A runner eating too little',
            steps: ['FFM 45 kg; intake 1,800 kcal; exercise 700 kcal on a training day.', 'EA = (1,800 − 700)/45 = 24.4 kcal/kg FFM, below 30.', 'To reach 45 (the level for optimal health), the runner needs about 2,725 kcal.'],
            answer: 'This runner is at risk even though 1,800 kcal does not sound low. Raise intake and review training load with a sports dietitian.',
          },
        },
      ],
    },
  ],
  sources: [
    'Banister, E. W., Calvert, T. W., Savage, M. V. & Bach, T. (1975). A systems model of training for athletic performance. *Australian Journal of Sports Medicine*, 7.',
    'Meeusen, R. et al. (2013). Prevention, diagnosis and treatment of the overtraining syndrome: joint consensus statement of the ECSS and ACSM. *European Journal of Sport Science*, 13(1).',
    'Mountjoy, M. et al. (2018). IOC consensus statement on relative energy deficiency in sport (RED-S): 2018 update. *British Journal of Sports Medicine*, 52(11).',
    'Mah, C. D. et al. (2011). The effects of sleep extension on the athletic performance of collegiate basketball players. *Sleep*, 34(7).',
    'Impellizzeri, F. M. et al. (2020). Acute:chronic workload ratio: conceptual issues and fundamental pitfalls. *International Journal of Sports Physiology and Performance*, 15(6).',
    'Foster, C. et al. (2001). A new approach to monitoring exercise training. *Journal of Strength and Conditioning Research*, 15(1).',
  ],
  related: ['fitness/recovery', 'fitness/endurance/stamina-plans', 'fitness/muscle/periodisation-and-recovery', 'fitness/endurance/best-foods-for-stamina', 'fitness/principles'],
}

export default guide
