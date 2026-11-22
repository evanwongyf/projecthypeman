import type { Guide } from '../../../guide'
import { pathRows } from '../../../../finance/series'

// Five waves up (1–5) and an A–B–C correction.
const WAVES = pathRows([100, 120, 108, 145, 132, 150, 135, 143, 125], 4, 61)

const guide: Guide = {
  intro:
    'Ralph Nelson Elliott argued in the 1930s that crowd psychology moves markets in repeating wave patterns: **five waves** in the direction of the main trend, then **three waves** against it. The patterns nest inside each other at every scale, like fractals. Elliott wave theory has passionate followers and sharp critics; here are its rules and guidelines precisely.',
  nutshell: [
    'An **impulse** has five waves (1–5): 1, 3 and 5 go with the trend; 2 and 4 correct.',
    'A **correction** has three waves (A–B–C).',
    'Three unbreakable rules govern impulses; Fibonacci ratios provide guidelines.',
    'Counts are often ambiguous in real time: the main criticism of the theory.',
  ],
  sections: [
    {
      id: 'shape',
      title: 'The basic pattern',
      blocks: [
        {
          t: 'candles',
          rows: WAVES,
          title: 'A five-wave impulse and an A–B–C correction',
          height: 380,
          points: [
            { i: 3, label: '1', at: 'high' },
            { i: 7, label: '2', at: 'low' },
            { i: 11, label: '3', at: 'high' },
            { i: 15, label: '4', at: 'low' },
            { i: 19, label: '5', at: 'high' },
            { i: 23, label: 'A', at: 'low' },
            { i: 27, label: 'B', at: 'high' },
            { i: 31, label: 'C', at: 'low' },
          ],
          boxes: [
            { from: 0, to: 19, label: 'Impulse (motive)', color: 'var(--mint)' },
            { from: 20, to: 31, label: 'Correction', color: 'var(--pink)' },
          ],
          lines: [{ y: 120, label: 'Top of wave 1: wave 4 must stay above it', at: 20 }],
        },
      ],
    },
    {
      id: 'rules',
      title: 'The three rules',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\begin{aligned}
&\text{1. } P_{\text{end of 2}} > P_{\text{start of 1}} && \text{(wave 2 never retraces more than 100\% of wave 1)} \\
&\text{2. } |W_3| > \min(|W_1|,\ |W_5|) && \text{(wave 3 is never the shortest impulse wave)} \\
&\text{3. } P_{\text{low of 4}} > P_{\text{high of 1}} && \text{(wave 4 never enters wave 1’s territory)}
\end{aligned}`,
          where: [
            { sym: String.raw`P_{\text{end of 2}}`, def: 'Price where wave 2 finishes' },
            { sym: 'W_1, W_3, W_5', def: 'The length (in price) of waves 1, 3 and 5' },
            { sym: String.raw`P_{\text{low of 4}}, P_{\text{high of 1}}`, def: 'The low of wave 4 and the high of wave 1' },
          ],
          syntax: [
            { sym: String.raw`|W_3|`, say: 'Read "the length of wave 3". The bars mean absolute value: the size of the move in price points, ignoring direction.' },
            { sym: String.raw`\min(a,\ b)`, say: 'Read "the smaller of a and b". Pick whichever of the two lengths is shorter.' },
            { sym: String.raw`>`, say: 'Read "is greater than". Each rule is a yes or no test; all three must be yes.' },
          ],
          worked: {
            title: 'Testing a count from the chart',
            steps: [
              'Wave 1 runs 100 to 120 (length 20). Wave 2 ends at 108. Wave 3 runs 108 to 145 (length 37). Wave 4 ends at 132. Wave 5 runs 132 to 150 (length 18).',
              String.raw`Rule 1: \(108 > 100\), so wave 2 did not retrace past the start of wave 1. Pass.`,
              String.raw`Rule 2: \(\min(20, 18) = 18\) and \(37 > 18\), so wave 3 is not the shortest. Pass.`,
              String.raw`Rule 3: \(132 > 120\), so wave 4 stayed above wave 1’s high. Pass.`,
              String.raw`Now suppose wave 4 had fallen to 117. Then \(117 > 120\) is false, so the count is invalid and must be re-drawn.`,
            ],
            answer: 'The count passes all three rules; a wave 4 low of 117 would overlap wave 1 and break rule 3.',
          },
          caption: 'These are the only three statements in the theory that are genuinely falsifiable: if a proposed count breaks any one of them, that count is wrong, full stop, no matter how good it otherwise looks. In the chart: wave 2 ends at 108, above wave 1’s start of 100 (rule 1 holds); wave 3 moves 37 points against 20 and 18 for waves 1 and 5 (rule 2 holds, since 37 is not the smallest); wave 4 ends at 132, above wave 1’s high of 120 (rule 3 holds). A count that violates any of these should be discarded and re-drawn, not defended.',
        },
        {
          t: 'metric',
          name: 'Elliott wave Fibonacci ratios (retracements and extensions)',
          shows: 'how long a corrective or extending wave tends to run compared with the wave before it, expressed as a percentage. A retracement ratio compares a correction (wave 2 or 4) with the move it is correcting; an extension ratio compares an impulse wave (wave 3 or 5) with an earlier one.',
          eli5: 'Think of a wave as a rubber band: after stretching one way, the market tends to snap back by a characteristic fraction of that stretch, often around a third, a half, or two-thirds, before resuming. Those favoured fractions are the Fibonacci ratios.',
          higher: 'A deep retracement (approaching or exceeding 61.8% of the prior wave) suggests the correction is strong relative to the move it is correcting, and raises the odds the count is wrong, a genuine wave 2 or 4 should not retrace all the way back into, or past, the previous wave (that is rule 1 or 3 again, not just a guideline).',
          lower: 'A shallow retracement (23.6–38.2%) suggests the underlying trend is powerful: the market barely paused before resuming, which is typical of a strong wave 3.',
          typical: 'Wave 2 commonly retraces 50–61.8% of wave 1; wave 4 commonly retraces 38.2% of wave 3; wave 3 is often 1.618× wave 1; wave 5 often equals wave 1 or 0.618× the net move of waves 1 through 3. These are tendencies drawn from past counts, not laws, unlike the three rules above, breaking a ratio guideline does not invalidate a count.',
        },
        {
          t: 'table',
          head: ['Guideline', 'Typical relationship'],
          rows: [
            ['Wave 2 retracement', '50–61.8% of wave 1'],
            ['Wave 3 length', 'Often 1.618 × wave 1 (sometimes 2.618)'],
            ['Wave 4 retracement', 'Often 38.2% of wave 3'],
            ['Wave 5', 'Often equal to wave 1, or 0.618 × (waves 1 to 3)'],
            ['Alternation', 'If wave 2 is sharp, wave 4 tends to be sideways, and vice versa'],
            ['Wave C', 'Often equal to wave A'],
          ],
          caption: 'Guidelines are tendencies, not rules.',
        },
        { t: 'callout', tone: 'fact', title: 'A famous call', text: 'Robert Prechter and A. J. Frost’s *Elliott Wave Principle* (1978) forecast a great bull market in the 1980s, which arrived, making Prechter famous. His later long-standing forecasts of a deep crash were far less successful, illustrating how hard the theory is to apply consistently.' },
      ],
    },
  ],
  sources: ['Elliott, R. N. (1938). *The Wave Principle*. Self-published.', 'Frost, A. J., & Prechter, R. R. (1978). *Elliott Wave Principle*. New Classics Library.'],
  related: ['finance/technical/fibonacci', 'finance/frameworks/wyckoff', 'finance/technical/evidence'],
}

export default guide
