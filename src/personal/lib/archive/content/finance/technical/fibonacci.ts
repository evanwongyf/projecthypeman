import type { Guide } from '../../../guide'
import { CHART } from '../../../../finance/examples'

const FIB = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]
const PHI = (1 + Math.sqrt(5)) / 2
const level = (f: number) => 120 - f * 30

const guide: Guide = {
  intro:
    'Fibonacci retracements are horizontal lines at 23.6%, 38.2%, 50%, 61.8% and 78.6% of a move, where traders expect pullbacks might pause. The numbers come from the Fibonacci sequence and the golden ratio, which is beautiful mathematics. Whether markets respect them is another question.',
  nutshell: [
    'The Fibonacci sequence: each number is the sum of the two before: 1, 1, 2, 3, 5, 8, 13, …',
    'The ratio of neighbours tends to the **golden ratio** \\(\\varphi = (1+\\sqrt5)/2 \\approx 1.618\\).',
    'The key levels are powers of \\(1/\\varphi\\): 61.8%, 38.2%, 23.6%. The 50% level is not a Fibonacci number at all.',
    'Evidence that prices respect these levels more than any others is weak; they may work partly because many traders watch them.',
  ],
  sections: [
    {
      id: 'maths',
      title: 'The mathematics',
      blocks: [
        {
          t: 'math',
          tex: String.raw`F_1 = F_2 = 1,\qquad F_{n} = F_{n-1} + F_{n-2}`,
          where: [
            { sym: 'F_n', def: 'The nth Fibonacci number' },
          ],
          caption: 'Leonardo of Pisa (Fibonacci) used it in 1202 to model breeding rabbits.',
          syntax: [
            { sym: String.raw`F_n`, say: String.raw`Read "F sub n" or "the nth Fibonacci number": the subscript is a position in the list, not a multiplication.` },
            { sym: String.raw`F_{n-1} + F_{n-2}`, say: String.raw`Read "F of n minus one plus F of n minus two": to get the next number, add the two numbers before it.` },
            { sym: String.raw`\qquad`, say: String.raw`Just a gap: the formula states two separate facts, the starting values and the rule.` },
          ],
          worked: {
            title: String.raw`Building the sequence`,
            steps: [
              String.raw`Start: \(F_1 = 1\), \(F_2 = 1\).`,
              String.raw`\(F_3 = F_2 + F_1 = 1 + 1 = 2\).`,
              String.raw`\(F_4 = 2 + 1 = 3\), \(F_5 = 3 + 2 = 5\), \(F_6 = 5 + 3 = 8\), \(F_7 = 8 + 5 = 13\).`,
              String.raw`\(F_8 = 21\), \(F_9 = 34\), \(F_{10} = 21 + 34 = 55\).`,
            ],
            answer: String.raw`The first ten numbers are 1, 1, 2, 3, 5, 8, 13, 21, 34, 55: each one is the sum of the previous two.`,
          },
        },
        {
          t: 'math',
          tex: String.raw`\lim_{n\to\infty}\frac{F_{n+1}}{F_n} = \varphi = \frac{1+\sqrt5}{2} \approx 1.6180,\qquad \varphi^2 = \varphi + 1`,
          where: [
            { sym: String.raw`\varphi`, def: 'The golden ratio, approximately 1.618' },
          ],
          caption: 'Why: if the ratio settles at x, then F(n+1)/F(n) = 1 + F(n−1)/F(n) gives x = 1 + 1/x, so x² = x + 1, whose positive root is φ.',
          syntax: [
            { sym: String.raw`\lim_{n\to\infty}`, say: String.raw`Read "the limit as n tends to infinity": watch what the expression settles towards as \(n\) gets bigger and bigger, even if it never exactly arrives.` },
            { sym: String.raw`\varphi`, say: String.raw`Greek letter phi, read "phi" (rhymes with "fly"). Here it names the golden ratio.` },
            { sym: String.raw`\sqrt5`, say: String.raw`Read "root five": the number which multiplied by itself gives 5, about 2.236.` },
            { sym: String.raw`\approx`, say: String.raw`Read "is approximately": equal to the precision shown, not exactly.` },
          ],
          worked: {
            title: String.raw`Watching the ratio settle on phi`,
            steps: [
              String.raw`Compute the ratios of neighbours: \(F_8/F_7 = 21/13 \approx 1.6154\) and \(F_9/F_8 = 34/21 \approx 1.6190\).`,
              String.raw`Next, \(F_{10}/F_9 = 55/34 \approx 1.6176\), then \(F_{11}/F_{10} = 89/55 \approx 1.6182\).`,
              String.raw`The target: \(\sqrt5 \approx 2.236068\), so \(\varphi = (1 + 2.236068)/2 = 1.618034\).`,
              String.raw`Check the identity: \(\varphi^2 = 1.618034^2 \approx 2.618034\), and \(\varphi + 1 = 2.618034\).`,
            ],
            answer: String.raw`The ratios wobble either side of 1.618 and close in on \(\varphi\); the identity \(\varphi^2 = \varphi + 1\) holds.`,
          },
        },
        {
          t: 'plot',
          title: 'Ratios of neighbouring Fibonacci numbers home in on φ',
          x: [1, 11],
          y: [0.9, 2.1],
          xLabel: 'n',
          yLabel: 'Fₙ₊₁ / Fₙ',
          data: [{ pts: FIB.slice(0, 11).map((f, i) => [i + 1, FIB[i + 1] / f] as [number, number]), label: 'Ratio', dots: true }],
          hlines: [{ y: PHI, label: 'φ ≈ 1.618' }],
        },
        {
          t: 'math',
          tex: String.raw`\frac{1}{\varphi} \approx 0.618,\qquad \frac{1}{\varphi^2} = 1 - \frac{1}{\varphi} \approx 0.382,\qquad \frac{1}{\varphi^3} \approx 0.236,\qquad \frac{1}{\sqrt{\varphi}} \approx 0.786`,
          caption: 'The retracement ratios. 0.382 + 0.618 = 1 exactly, a neat property of the golden ratio.',
          syntax: [
            { sym: String.raw`\frac{1}{\varphi}`, say: String.raw`Read "one over phi": the reciprocal. Divide 1 by \(\varphi\).` },
            { sym: String.raw`\varphi^2, \varphi^3`, say: String.raw`Read "phi squared", "phi cubed": multiply \(\varphi\) by itself two or three times.` },
            { sym: String.raw`\sqrt{\varphi}`, say: String.raw`Read "the square root of phi": the number which multiplied by itself gives \(\varphi\).` },
          ],
          worked: {
            title: String.raw`Deriving the ratios from phi`,
            steps: [
              String.raw`Given \(\varphi = 1.618034\).`,
              String.raw`\(1/\varphi = 1/1.618034 \approx 0.6180\).`,
              String.raw`\(\varphi^2 = 2.618034\), so \(1/\varphi^2 \approx 0.3820\); and \(1 - 0.6180 = 0.3820\), the same.`,
              String.raw`\(\varphi^3 = 4.236068\), so \(1/\varphi^3 \approx 0.2361\).`,
              String.raw`\(\sqrt{\varphi} \approx 1.27202\), so \(1/\sqrt{\varphi} \approx 0.7862\).`,
            ],
            answer: String.raw`The retracement levels 61.8%, 38.2%, 23.6% and 78.6% all come from powers and roots of \(\varphi\).`,
          },
        },
      ],
    },
    {
      id: 'levels',
      title: 'Drawing retracements',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{Level}_f = H - f\,(H - L),\qquad f \in \{0.236,\ 0.382,\ 0.5,\ 0.618,\ 0.786\}`,
          where: [
            { sym: 'H, L', def: 'The high and low of the move (for an uptrend, the swing low and swing high)' },
            { sym: 'f', def: 'The retracement ratio' },
          ],
          caption: 'Each f gives one horizontal price level between the high and the low. Traders read these as possible pause points on a pullback: the closer the pullback holds to the swing high (a small f, like 23.6%), the stronger the underlying trend is read as being; a pullback all the way past 61.8% is often read as a sign the original move may be failing, not just pausing.',
          syntax: [
            { sym: String.raw`\text{Level}_f`, say: String.raw`Read "level f": the price level for retracement ratio \(f\). The subscript says which ratio you used.` },
            { sym: String.raw`f \in \{\dots\}`, say: String.raw`Read "f is in the set": \(f\) may be any one of the listed values. Work out the formula once for each.` },
            { sym: String.raw`f\,(H-L)`, say: String.raw`Read "f times the range": the juxtaposition means multiply. Take that fraction of the move and subtract it from the high.` },
          ],
          worked: {
            title: String.raw`Retracement levels for a rally from 90 to 120`,
            steps: [
              String.raw`Given: swing low \(L = 90\), swing high \(H = 120\), so \(H - L = 30\).`,
              String.raw`\(f = 0.236\): \(120 - 0.236 \times 30 = 120 - 7.08 = 112.92\).`,
              String.raw`\(f = 0.382\): \(120 - 11.46 = 108.54\). \(f = 0.5\): \(120 - 15 = 105.00\).`,
              String.raw`\(f = 0.618\): \(120 - 18.54 = 101.46\). \(f = 0.786\): \(120 - 23.58 = 96.42\).`,
            ],
            answer: String.raw`Watch 112.92, 108.54, 105.00, 101.46 and 96.42 as possible pause points; a pullback that holds above 108.54 is read as strong.`,
          },
        },
        {
          t: 'candles',
          rows: CHART.fibUp,
          title: 'Retracement levels on a rally from 90 to 120',
          height: 380,
          points: [
            { i: 0, label: 'Low 90', at: 'low' },
            { i: 6, label: 'High 120', at: 'high' },
            { i: 13, label: 'Pullback holds near 38.2%', at: 'low' },
          ],
          lines: [
            { y: level(0.236), label: `23.6%: ${level(0.236).toFixed(1)}` },
            { y: level(0.382), label: `38.2%: ${level(0.382).toFixed(1)}` },
            { y: level(0.5), label: `50%: ${level(0.5).toFixed(1)}` },
            { y: level(0.618), label: `61.8%: ${level(0.618).toFixed(1)}` },
          ],
          caption: 'The range is 30, so the 38.2% level is 120 − 0.382 × 30 = 108.54. Here the pullback stopped near it and the rally resumed.',
        },
        {
          t: 'p',
          text: '**Extensions** project beyond the old high: common targets are 127.2% and 161.8% of the first move, measured from the end of the pullback.',
        },
      ],
    },
    {
      id: 'evidence',
      title: 'Do the levels work?',
      blocks: [
        {
          t: 'p',
          text: 'There is no known mechanism that would make markets respect the golden ratio, and studies that look for unusual turning points at Fibonacci levels generally find little or nothing beyond what nearby round numbers and ordinary support and resistance explain. The levels may matter a little because many traders place orders at them: a self-fulfilling prophecy.',
        },
        { t: 'callout', tone: 'fact', title: 'Older than Fibonacci', text: 'The sequence appeared centuries earlier in Indian mathematics, in Pingala’s work on poetic metres and later in Virahanka and Hemachandra, where it counts the ways to combine short and long syllables.' },
        { t: 'callout', tone: 'myth', title: 'Golden ratio everywhere', text: 'Claims that the Parthenon, the Mona Lisa and the human body are built on φ are mostly myths: with enough measurements, some ratio near 1.618 can always be found.' },
      ],
    },
  ],
  sources: [
    'Livio, M. (2002). *The Golden Ratio: The Story of Phi*. Broadway Books.',
    'Sigler, L. E. (2002). *Fibonacci’s Liber Abaci* (translation). Springer.',
    'Murphy, J. J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance.',
  ],
  related: ['finance/technical/trends', 'finance/technical/chart-patterns'],
}

export default guide
