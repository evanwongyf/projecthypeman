import type { Guide } from '../../../guide'
import { CHART } from '../../../../finance/examples'

const guide: Guide = {
  intro:
    'CAN SLIM is William O’Neil’s system for finding growth stocks before their biggest moves, built from studying the market leaders of the past century. It blends fundamentals (fast-rising earnings) with technicals (chart bases and breakouts) and a strict rule for cutting losses.',
  nutshell: [
    'Seven letters, each a test: Current earnings, Annual earnings, New, Supply and demand, Leader, Institutional sponsorship, Market direction.',
    'Buy as the stock breaks out of a sound base, such as a **cup with handle**, on heavy volume.',
    'Cut every loss at **7–8%** below your buy price, no exceptions.',
    'Three out of four stocks follow the general market, so only buy in a confirmed uptrend.',
  ],
  sections: [
    {
      id: 'letters',
      title: 'The seven letters',
      blocks: [
        {
          t: 'table',
          head: ['Letter', 'Stands for', 'Rule of thumb'],
          rows: [
            ['C', 'Current quarterly earnings', 'EPS up at least 25% on the same quarter a year ago, ideally accelerating'],
            ['A', 'Annual earnings growth', 'EPS growth of 25%+ a year over 3 years; ROE above 17%'],
            ['N', 'New', 'A new product, management, or industry condition; buying near new price highs'],
            ['S', 'Supply and demand', 'Volume rising on up days; share buybacks; reasonable share count'],
            ['L', 'Leader or laggard', 'Buy the leader in a leading industry: relative strength rating of 80+'],
            ['I', 'Institutional sponsorship', 'Some, rising, high-quality fund ownership'],
            ['M', 'Market direction', 'Only buy when the overall market is in a confirmed uptrend'],
          ],
        },
        {
          t: 'math',
          tex: String.raw`g_{\text{EPS, quarter}} = \frac{EPS_q - EPS_{q-4}}{|EPS_{q-4}|} \ge 25\%`,
          where: [
            { sym: 'EPS_q', def: 'Earnings per share in the latest reported quarter' },
            { sym: 'EPS_{q-4}', def: 'Earnings per share four quarters earlier: the same quarter last year' },
          ],
          syntax: [
            { sym: 'EPS_{q-4}', say: String.raw`Read "E P S, q minus 4". The subscript steps back four quarters from the latest quarter \(q\), landing on the same quarter last year.` },
            { sym: String.raw`|EPS_{q-4}|`, say: 'Read "the absolute value of". The bars strip off any minus sign. It keeps the sign of the growth sensible when last year’s quarter was a loss.' },
            { sym: String.raw`\ge 25\%`, say: 'Read "at least 25 percent". The result must be 0.25 or more to pass.' },
          ],
          worked: {
            title: 'Three quarterly reports',
            steps: [
              String.raw`Stock A: \(EPS_q = 1.80\) against \(EPS_{q-4} = 1.20\). Growth \(= (1.80 - 1.20)/1.20 = 0.50 = 50\%\): pass.`,
              String.raw`Stock B: \(EPS_q = 1.45\) against \(1.20\). Growth \(= 0.25/1.20 \approx 20.8\%\): fail.`,
              String.raw`Stock C turned a loss into a profit: \(EPS_q = 0.20\) against \(EPS_{q-4} = -0.40\). Growth \(= (0.20 - (-0.40))/|-0.40| = 0.60/0.40 = 150\%\).`,
              'Without the absolute value the denominator would be negative and the growth would wrongly come out as −150%.',
            ],
            answer: 'A clears the 25% bar comfortably, B misses it, and C shows 150% growth, though one turnaround quarter still needs confirming.',
          },
          caption: 'Comparing with the same quarter a year earlier removes seasonal effects (a toy retailer always does better in Q4). The 25% bar is a floor, not a target: O’Neil looked for growth that was accelerating quarter to quarter, not just clearing 25% once. A single blowout quarter against an unusually weak comparison a year earlier can clear 25% without the business actually improving, so check two or three quarters, not one.',
        },
      ],
    },
    {
      id: 'chart',
      title: 'The buy point',
      blocks: [
        {
          t: 'candles',
          rows: CHART.cupHandle,
          title: 'Breakout from a cup with handle',
          height: 340,
          boxes: [
            { from: 0, to: 23, label: 'Cup (7+ weeks in O’Neil’s rules)', color: 'var(--mint)' },
            { from: 24, to: 31, label: 'Handle', color: 'var(--lavender)' },
            { from: 32, to: 35, label: 'Buy on breakout', color: 'var(--mustard)' },
          ],
          lines: [
            { y: 108, label: 'Pivot (buy point)' },
            { y: 108 * 0.93, label: 'Stop: 7% below' },
          ],
        },
        {
          t: 'math',
          tex: String.raw`\text{Stop} = P_{\text{buy}} \times (1 - 0.07),\qquad \text{Profit target (O’Neil)} \approx P_{\text{buy}} \times 1.20\text{–}1.25`,
          where: [{ sym: String.raw`P_{\text{buy}}`, def: 'The price paid at the breakout (the pivot)' }],
          syntax: [
            { sym: String.raw`P_{\text{buy}} \times (1 - 0.07)`, say: 'Read "buy price times 0.93". Subtracting 7% means keeping 93% of the price, so multiply by 1 − 0.07.' },
            { sym: String.raw`1.20\text{–}1.25`, say: 'Read "1.20 to 1.25". A range: multiply the buy price by 1.20 for a 20% gain or by 1.25 for 25%.' },
          ],
          worked: {
            title: 'A breakout bought at 50',
            steps: [
              String.raw`Given: \(P_{\text{buy}} = 50\).`,
              String.raw`Stop: \(50 \times (1 - 0.07) = 50 \times 0.93 = 46.50\). Risk per share \(= 3.50\).`,
              String.raw`Target range: \(50 \times 1.20 = 60\) to \(50 \times 1.25 = 62.50\). Reward per share \(= 10\) to \(12.50\).`,
              String.raw`Reward to risk: \(10/3.5 \approx 2.9\) to \(12.5/3.5 \approx 3.6\).`,
            ],
            answer: 'Risking 3.50 to make 10 to 12.50 gives roughly 3:1 odds, so you can be wrong about twice as often as you are right and still profit.',
          },
          caption: 'With a 7–8% stop and a 20–25% target, the reward-to-risk ratio is roughly 3:1, you can be wrong twice for every time you are right and still come out ahead. The point of the fixed 7–8% stop is not that it is always the right exit, but that it is small and automatic: it caps any single mistake before it becomes a portfolio-wrecking loss, which is what lets a CAN SLIM investor keep taking new breakouts even after a string of losers.',
        },
        { t: 'callout', tone: 'fact', title: 'Studying the winners', text: 'O’Neil founded *Investor’s Business Daily* in 1984 and built CAN SLIM from a study of the biggest winning stocks back to the 1880s, looking for what they had in common just before their major advances.' },
      ],
    },
  ],
  sources: ['O’Neil, W. J. (2009). *How to Make Money in Stocks* (4th ed.). McGraw-Hill.', 'Lutey, M., Crum, M., & Rayome, D. (2014). CANSLIM investing: A performance review. *Journal of Accounting and Finance*, 14(5).'],
  related: ['finance/philosophies/growth', 'finance/technical/chart-patterns', 'finance/technical/risk-management'],
}

export default guide
