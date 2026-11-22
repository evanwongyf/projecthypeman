import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Elite sport has a cruel trade-off at its heart: the training needed to get better is, by its nature, a form of controlled stress on the body, and too much of it, especially too much too soon, is one of the strongest predictors of injury. Load management is the attempt to turn that trade-off into a measurable, manageable science rather than a guess.',
  nutshell: [
    'Training "load" can be measured several ways: total distance, GPS-tracked high-speed running, heart-rate-based effort, or simple session duration × perceived exertion.',
    'The **acute:chronic workload ratio (ACWR)** compares a short recent training window against a longer baseline, to flag dangerous spikes in load.',
    'Research broadly finds injury risk rises sharply with sudden, large increases in load relative to what an athlete is accustomed to, the "too much, too soon" pattern.',
    'This is a genuinely contested area of sports science: the exact numeric thresholds and even the ACWR method itself have faced serious methodological criticism in recent years.',
  ],
  sections: [
    {
      id: 'measuring-load',
      title: 'Measuring training load',
      blocks: [
        {
          t: 'table',
          head: ['Method', 'What it captures', 'Common in'],
          rows: [
            ['GPS distance / high-speed running', 'Total and high-intensity distance covered, tracked by wearable GPS units', 'Football, rugby, Australian rules football'],
            ['Session RPE (rating of perceived exertion × duration)', 'A simple, low-cost measure combining how hard a session felt with how long it lasted', 'Widely used across many sports, especially where GPS tracking is impractical'],
            ['Heart-rate-based load (e.g. TRIMP)', 'Time spent in different heart-rate zones, weighted by intensity', 'Endurance sports, cycling, running'],
            ['Jump count / landings', 'Cumulative mechanical stress on joints from repeated jumping', 'Basketball, volleyball'],
          ],
          caption: 'No single measure captures everything, most elite sports science teams combine several, since mechanical stress (jumps, sprints) and metabolic stress (overall exertion) can diverge even within the same session.',
        },
      ],
    },
    {
      id: 'acwr',
      title: 'The acute:chronic workload ratio',
      blocks: [
        {
          t: 'math',
          tex: String.raw`ACWR = \frac{\text{acute load (e.g. last 7 days)}}{\text{chronic load (e.g. rolling 28-day average)}}`,
          caption: 'A ratio comparing recent training (acute) against the longer-term pattern the body has adapted to (chronic). The idea: the body can tolerate a high absolute load if it has built up to it gradually, but a sudden spike relative to recent history is the real danger signal.',
        },
        {
          t: 'plot',
          title: 'A commonly cited (though contested) injury-risk pattern by ACWR (illustrative)',
          x: [0, 2.5],
          y: [0, 100],
          xLabel: 'acute:chronic workload ratio',
          yLabel: 'relative injury risk (illustrative)',
          curves: [{ f: (r: number) => 15 + 60 * Math.max(0, r - 1.5) ** 1.8 + 25 * Math.max(0, 0.8 - r) ** 1.5 }],
          shade: [{ from: 0.8, to: 1.3, label: '"sweet spot" commonly cited in early research', color: 'var(--mint)' }],
          caption: 'Early, influential research (notably Tim Gabbett and colleagues, 2010s) suggested both too-low ACWR (undertraining, "detraining") and too-high ACWR (sudden spikes) were associated with elevated injury risk, with a "sweet spot" in between, a specific claimed ratio range, illustrated here, that became widely cited and adopted across professional sport.',
        },
        { t: 'callout', tone: 'warn', title: 'A genuinely contested method', text: 'Since roughly 2018–20, several sports scientists and statisticians (notably Franco Impellizzeri and colleagues) have published serious methodological critiques of ACWR, arguing the ratio calculation itself can create statistical artefacts that produce the appearance of a risk relationship even in simulated random data, and that some published ACWR-injury studies were influenced by design and analysis choices. This is an active, unresolved debate, the general, more cautious "too much too soon" principle has wide support, but the specific numeric ACWR thresholds and even the ratio-based method itself are genuinely disputed in current sports science, not settled fact.' },
      ],
    },
    {
      id: 'practice',
      title: 'What teams do with this data',
      blocks: [
        {
          t: 'flow',
          title: 'A typical load-management workflow',
          nodes: [
            { label: 'Daily training/match data collected', sub: 'GPS, heart rate, RPE', tone: 'data' },
            { label: 'Individual load trends calculated', tone: 'process' },
            { label: 'Flag unusual spikes or athletes below baseline', tone: 'model' },
            { label: 'Coaching staff adjusts individual training', sub: 'rest, reduced volume, modified drills', tone: 'human' },
            { label: 'Ongoing monitoring continues', tone: 'output' },
          ],
          loop: 'repeated daily throughout a season',
        },
        {
          t: 'checklist',
          items: [
            'Build load gradually after injury, off-season, or a layoff, rather than returning straight to full training volume',
            'Monitor individual athletes, not just team averages, tolerance to load varies substantially between people',
            'Treat any single metric (including ACWR) as one input, combined with athlete-reported wellness, medical history and coaching judgement',
            'Be especially cautious around pre-season "catch-up" training blocks, a well-documented high-injury-risk period across many sports',
          ],
        },
      ],
    },
  ],
  sources: ['Gabbett, T. J. (2016). The training, injury prevention paradox: Should athletes be training smarter and harder? *British Journal of Sports Medicine*, 50(5), 273–280.', 'Impellizzeri, F. M., et al. (2020). Acute:chronic workload ratio: Conceptual issues and fundamental pitfalls. *International Journal of Sports Physiology and Performance*, 15(6), 907–913.'],
  related: ['sports/physiology/fatigue-recovery', 'sports/analytics/sabermetrics-moneyball', 'mathematics/probability/inference'],
}

export default guide
