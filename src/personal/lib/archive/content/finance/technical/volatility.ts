import type { Guide } from '../../../guide'

const normal = (x: number) => Math.exp(-(x * x) / 2) / Math.sqrt(2 * Math.PI)

const guide: Guide = {
  intro:
    'Volatility measures how much prices swing. It matters twice over: for reading the market (quiet periods often precede big moves) and for managing risk (how far to place a stop, how much to buy). The two classic tools are **Bollinger Bands**, built on the standard deviation, and the **average true range**.',
  nutshell: [
    '**Standard deviation** measures how spread out prices are around their average.',
    '**Bollinger Bands** sit 2 standard deviations above and below a 20-period SMA.',
    'A **squeeze** (narrow bands) shows low volatility, which often comes before a big move.',
    '**True range** includes gaps; **ATR** is its smoothed average, used to size stops and positions.',
    'Daily volatility scales to yearly roughly by \\(\\sqrt{252}\\).',
  ],
  sections: [
    {
      id: 'sd',
      title: 'Standard deviation',
      blocks: [
        {
          t: 'math',
          syntax: [
            { sym: String.raw`\bar P`, say: String.raw`Read "P bar": the average of P. A bar over a letter means "mean of".` },
            { sym: String.raw`\sum_{i=1}^{n}`, say: String.raw`Read "the sum from i equals 1 to n": do what follows for i = 1, 2, ... n and add the results.` },
            { sym: String.raw`\sigma`, say: String.raw`Read "sigma", the standard deviation.` },
            { sym: String.raw`\left(P_i - \bar P\right)^2`, say: String.raw`Read "P sub i minus P bar, all squared": each price's distance from the mean, squared so that negative gaps do not cancel positive ones.` },
            { sym: String.raw`\sqrt{\cdot}`, say: String.raw`Square root: undo the squaring at the end so σ is back in price units.` },
          ],
          worked: {
            title: String.raw`Six closing prices`,
            steps: [
              String.raw`Given closes: \(48,\ 50,\ 49,\ 52,\ 53,\ 48\), so \(n = 6\).`,
              String.raw`Mean: \(\bar P = (48 + 50 + 49 + 52 + 53 + 48)/6 = 300/6 = 50\).`,
              String.raw`Deviations from 50: \(-2,\ 0,\ -1,\ 2,\ 3,\ -2\). Squared: \(4,\ 0,\ 1,\ 4,\ 9,\ 4\).`,
              String.raw`Sum of squares: \(4 + 0 + 1 + 4 + 9 + 4 = 22\). Divide by \(n\): \(22/6 = 3.667\).`,
              String.raw`Square root: \(\sigma = \sqrt{3.667} = 1.91\).`,
            ],
            answer: String.raw`\(\sigma \approx 1.91\): these prices typically sit about \(\$1.91\) from their average of \(\$50\).`,
          },
          tex: String.raw`\bar P = \frac{1}{n}\sum_{i=1}^{n} P_i,\qquad \sigma = \sqrt{\frac{1}{n}\sum_{i=1}^{n}\left(P_i - \bar P\right)^2}`,
          where: [
            { sym: String.raw`\bar P`, def: 'The average (mean) of the last n prices' },
            { sym: String.raw`\sigma`, def: 'Standard deviation: the typical distance from the mean' },
          ],
          caption: 'Bollinger uses this "population" form, dividing by n rather than n − 1.',
        },
        {
          t: 'example',
          title: 'Five prices',
          lines: [
            { label: 'Prices', text: '10, 12, 11, 13, 14; mean \\(= 12\\)' },
            { label: 'Deviations', text: '\\(-2, 0, -1, 1, 2\\); squared: 4, 0, 1, 1, 4' },
            { label: 'Variance', text: '\\((4 + 0 + 1 + 1 + 4)/5 = 2\\)' },
            { label: 'σ', text: '\\(\\sqrt{2} \\approx 1.41\\)' },
          ],
        },
      ],
    },
    {
      id: 'bollinger',
      title: 'Bollinger Bands',
      blocks: [
        {
          t: 'math',
          syntax: [
            { sym: String.raw`\text{SMA}_{20}`, say: String.raw`Read "the 20-period simple moving average": the average of the last 20 closes.` },
            { sym: String.raw`\sigma_{20}`, say: String.raw`Read "sigma sub 20": the standard deviation of those same 20 closes. The subscript is the window length.` },
            { sym: String.raw`\text{SMA}_{20} \pm 2\sigma_{20}`, say: String.raw`Read "SMA plus two sigma" for the upper band and "SMA minus two sigma" for the lower: start from the average and step out two standard deviations each way.` },
          ],
          worked: {
            title: String.raw`Bollinger Bands for a share`,
            steps: [
              String.raw`Given: 20-day average close \(\text{SMA}_{20} = 84.50\) and standard deviation \(\sigma_{20} = 1.75\).`,
              String.raw`Two sigma: \(2 \times 1.75 = 3.50\).`,
              String.raw`Upper band: \(84.50 + 3.50 = 88.00\).`,
              String.raw`Lower band: \(84.50 - 3.50 = 81.00\).`,
            ],
            answer: String.raw`The bands are \(81.00 / 84.50 / 88.00\). If volatility doubled to \(\sigma = 3.50\) the bands would widen to \(77.50\) and \(91.50\) with no redrawing.`,
          },
          tex: String.raw`\text{Middle} = \text{SMA}_{20},\qquad \text{Upper} = \text{SMA}_{20} + 2\sigma_{20},\qquad \text{Lower} = \text{SMA}_{20} - 2\sigma_{20}`,
          where: [
            { sym: String.raw`\sigma_{20}`, def: 'Standard deviation of the last 20 closes' },
          ],
          caption: 'The bands breathe with volatility automatically: when σ rises, the bands widen on their own without anyone redrawing them, and when σ falls they pull back in, which is what makes a Bollinger squeeze visible at a glance, long before the %b and bandwidth readings below put a number on it.',
        },
        {
          t: 'math',
          syntax: [
            { sym: String.raw`\%b`, say: String.raw`Read "percent b": where price sits between the bands, as a fraction. The backslash only prints the % sign.` },
            { sym: String.raw`P - \text{Lower}`, say: String.raw`Price minus the lower band: how far up from the bottom of the channel price has climbed.` },
            { sym: String.raw`\text{Upper} - \text{Lower}`, say: String.raw`The total channel width. Dividing by it turns the distance into a fraction of the channel.` },
          ],
          worked: {
            title: String.raw`%b and bandwidth for the same bands`,
            steps: [
              String.raw`Given: Upper \(= 88.00\), Lower \(= 81.00\), Middle \(= 84.50\), and a close of \(P = 86.80\).`,
              String.raw`Channel width: \(88.00 - 81.00 = 7.00\).`,
              String.raw`Percent b: \((86.80 - 81.00)/7.00 = 5.80/7.00 = 0.829\).`,
              String.raw`Bandwidth: \(7.00 / 84.50 = 0.0828\), about 8.3% of the middle band.`,
            ],
            answer: String.raw`\(\%b = 0.83\): price is about 83% of the way up the channel, near but below the upper band. Bandwidth of 8.3% is the number to compare with the stock\'s own history to judge a squeeze.`,
          },
          tex: String.raw`\%b = \frac{P - \text{Lower}}{\text{Upper} - \text{Lower}},\qquad \text{Bandwidth} = \frac{\text{Upper} - \text{Lower}}{\text{Middle}}`,
          caption: '%b is 1 at the upper band, 0 at the lower band, 0.5 at the middle. Bandwidth measures how wide the bands are: low bandwidth is a squeeze.',
        },
        {
          t: 'metric',
          name: 'Bollinger Bandwidth (band width ÷ middle band)',
          shows: 'How wide the recent trading range is relative to price, a direct readout of how volatile (or how calm) a stock has been over the last 20 periods. Because the bands are built from a rolling standard deviation, bandwidth is really just volatility, drawn visually.',
          eli5: 'Think of the bands as guardrails on a road. When traffic (price) has been swerving wildly, the guardrails sit far apart to contain it, wide bandwidth. When traffic has been calm and steady, the guardrails pull in close, narrow bandwidth, a "squeeze". Roads with very narrow guardrails for a long time often see a burst of wild driving eventually, which is the logic behind trading squeezes.',
          higher: 'The stock has been swinging through a wide range recently, a volatile, emotional period, often during a strong trend, an earnings surprise, or general market stress. Wide bandwidth after a big move sometimes signals the move is overextended and volatility (and the bands) may start to contract again.',
          lower: 'The stock has been trading in an unusually tight range, a "squeeze". Low bandwidth does not say which way price will break, only that it has been unusually quiet and that calm periods are often (not always) followed by a burst of volatility in either direction, which is why squeezes attract traders\' attention as a setup to watch rather than a signal to act on immediately.',
          typical: 'There is no universal numeric threshold since it is scaled to each stock\'s own price and history; traders typically compare today\'s bandwidth with that stock\'s own bandwidth over the past several months to judge whether the current range is unusually tight or wide for it.',
        },
        {
          t: 'plot',
          title: 'Why 2σ? If changes were normally distributed…',
          x: [-3.5, 3.5],
          y: [0, 0.45],
          xLabel: 'Standard deviations from the mean',
          yLabel: 'Probability density',
          curves: [{ f: normal, label: 'Normal distribution' }],
          shade: [{ from: -2, to: 2, label: 'About 95% inside ±2σ', color: 'var(--mint)' }],
          caption: '…about 95% of prices would fall inside the bands. Real prices have "fat tails" (extreme moves happen far more often than the normal curve predicts), so touches of the bands are more common.',
        },
        { t: 'fin-tool', tool: 'indicators', focus: 'bollinger' },
        { t: 'callout', tone: 'note', title: 'Touching a band is not a signal', text: 'John Bollinger stresses that a close outside the upper band in a strong trend is a sign of strength, not automatically a sell. "Walking the band" is common in trends.' },
      ],
    },
    {
      id: 'atr',
      title: 'True range and ATR',
      blocks: [
        {
          t: 'math',
          syntax: [
            { sym: String.raw`\max(a,\ b,\ c)`, say: String.raw`Read "the maximum of a, b and c": work out all three and keep the largest.` },
            { sym: String.raw`|H_t - C_{t-1}|`, say: String.raw`Read "the absolute value of today's high minus yesterday's close": the size of the gap, ignoring the sign.` },
          ],
          worked: {
            title: String.raw`True range on a gap-down day`,
            steps: [
              String.raw`Given: yesterday\'s close \(C_{t-1} = 120\); today\'s high \(H_t = 118\) and low \(L_t = 113\).`,
              String.raw`High minus low: \(118 - 113 = 5\).`,
              String.raw`High minus yesterday\'s close: \(|118 - 120| = 2\).`,
              String.raw`Low minus yesterday\'s close: \(|113 - 120| = 7\).`,
              String.raw`Take the largest: \(TR_t = \max(5,\ 2,\ 7) = 7\).`,
            ],
            answer: String.raw`\(TR = 7\), not 5: the overnight gap down counts, so the day really covered 7 points of ground from yesterday\'s close.`,
          },
          tex: String.raw`TR_t = \max\big(H_t - L_t,\ |H_t - C_{t-1}|,\ |L_t - C_{t-1}|\big)`,
          where: [
            { sym: 'H_t, L_t', def: 'Today’s high and low' },
            { sym: 'C_{t-1}', def: 'Yesterday’s close' },
          ],
          caption: 'The high–low range, stretched to include any gap from yesterday’s close, so a stock that gapped up or down overnight still gets full credit for that move even though it never traded through the gap.',
        },
        {
          t: 'math',
          syntax: [
            { sym: String.raw`ATR_{t-1}`, say: String.raw`Yesterday's ATR. Subscript t−1 means "one step before t".` },
            { sym: String.raw`(n = 14)`, say: String.raw`Read "where n equals 14": the formula's length setting, fixed here at Wilder's standard 14.` },
            { sym: String.raw`\frac{(n-1)\,ATR_{t-1} + TR_t}{n}`, say: String.raw`Read "n minus 1 times yesterday's ATR, plus today's TR, all over n": a weighted blend, 13 parts old average to 1 part today.` },
          ],
          worked: {
            title: String.raw`Updating a 14-day ATR`,
            steps: [
              String.raw`Given: yesterday\'s \(ATR_{t-1} = 2.10\), today\'s \(TR_t = 3.50\), \(n = 14\).`,
              String.raw`Substitute: \(ATR_t = (13 \times 2.10 + 3.50)/14\).`,
              String.raw`Multiply: \(13 \times 2.10 = 27.30\); add today: \(27.30 + 3.50 = 30.80\).`,
              String.raw`Divide: \(30.80/14 = 2.20\).`,
              String.raw`As a share of an \(\$84.50\) share price: \(2.20/84.50 = 2.6\%\).`,
            ],
            answer: String.raw`\(ATR \approx 2.20\): a big day (\(TR = 3.50\)) nudged the average up from \(2.10\) to \(2.20\). A 2-ATR stop would sit \(\$4.40\) from entry.`,
          },
          tex: String.raw`ATR_t = \frac{(n-1)\,ATR_{t-1} + TR_t}{n}\qquad (n = 14)`,
          caption: 'Wilder’s smoothing again. ATR is in price units, so a $200 stock has a larger ATR than a $20 stock; divide by price to compare.',
        },
        {
          t: 'metric',
          name: 'the average true range (ATR)',
          shows: 'The typical size of a stock\'s daily price movement, including overnight gaps, averaged over the last 14 days and expressed in dollars (or whatever currency). Unlike Bollinger bandwidth, it is a single plain number you can use directly to size a stop-loss or a position"this stock typically moves $2.40 a day" is immediately actionable.',
          eli5: 'If you track how far a hiker typically walks each day, not in a straight line, but counting every bit of up, down and sideways they cover, you get their average daily "range". ATR does the same for a stock\'s price: how much ground it typically covers in a day, whichever direction.',
          higher: 'The stock moves a lot in a typical day, more dollars (or cents) of daily range. A high-ATR stock needs a wider stop-loss to avoid being shaken out by ordinary daily noise, and correspondingly a smaller position size for the same dollar risk, as covered in [position sizing](@finance/technical/risk-management).',
          lower: 'The stock moves relatively little in a typical day. A low-ATR stock can use a tighter stop without being stopped out by noise, and can support a larger position for the same dollar risk, though low ATR can also mean a stock that simply offers less opportunity for a short-term trader.',
          typical: 'ATR scales with price, so always compare it as a percentage of the stock\'s own price, not across different stocks directly, a $5 ATR on a $500 stock (1%) is actually calmer than a $2 ATR on a $40 stock (5%); many traders place stops at 2–3× ATR from entry to sit clearly outside normal day-to-day noise.',
        },
        {
          t: 'example',
          title: 'A gap day',
          lines: [
            { label: 'Yesterday', text: 'close 50' },
            { label: 'Today', text: 'high 54, low 52 (gapped up)' },
            { label: 'TR', text: '\\(\\max(54-52,\\ |54-50|,\\ |52-50|) = \\max(2, 4, 2) = 4\\)' },
            { label: 'Why', text: 'the high–low range (2) would understate the day’s true movement' },
          ],
        },
        { t: 'fin-tool', tool: 'indicators', focus: 'atr' },
        {
          t: 'p',
          text: '**Using ATR for stops**: a stop 2–3 ATRs from entry sits outside normal noise. Combine it with [position sizing](@finance/technical/risk-management) so a wider stop means a smaller position.',
        },
      ],
    },
    {
      id: 'annual',
      title: 'From daily to yearly volatility',
      blocks: [
        {
          t: 'math',
          syntax: [
            { sym: String.raw`\approx`, say: String.raw`Read "is approximately": the equality holds only under the assumption of independent daily returns.` },
            { sym: String.raw`\sigma_{\text{annual}}`, say: String.raw`Read "sigma annual": the standard deviation measured over a year. The word in the subscript is a label, not a number.` },
            { sym: String.raw`\sqrt{252}`, say: String.raw`Read "the square root of 252": work out the root (about 15.87) and multiply the daily figure by it.` },
          ],
          worked: {
            title: String.raw`Annualising a daily volatility`,
            steps: [
              String.raw`Given: a stock whose daily returns have \(\sigma_{\text{daily}} = 1.2\%\).`,
              String.raw`Square root: \(\sqrt{252} = 15.87\).`,
              String.raw`Multiply: \(1.2\% \times 15.87 = 19.05\%\).`,
              String.raw`Check against the caption: \(1\% \times 15.87 \approx 16\%\).`,
            ],
            answer: String.raw`About \(19\%\) a year: a typical one-standard-deviation yearly swing is roughly 19% either side of the expected return, if daily moves are independent.`,
          },
          tex: String.raw`\sigma_{\text{annual}} \approx \sigma_{\text{daily}}\sqrt{252}`,
          caption: 'If daily returns are independent, variances add up over time, so standard deviations grow with the square root of time. 252 is the number of trading days in a year. A 1% daily volatility is about 16% a year.',
        },
        { t: 'callout', tone: 'fact', title: 'The fear gauge', text: 'The VIX index measures the volatility that options prices imply for the S&P 500 over the next 30 days, in annual terms. It spiked above 80 in both the 2008 financial crisis and March 2020.' },
      ],
    },
  ],
  sources: [
    'Bollinger, J. (2001). *Bollinger on Bollinger Bands*. McGraw-Hill.',
    'Wilder, J. W., Jr. (1978). *New Concepts in Technical Trading Systems*. Trend Research.',
    'Mandelbrot, B., & Hudson, R. L. (2004). *The (Mis)behavior of Markets*. Basic Books.',
  ],
  related: ['finance/technical/risk-management', 'finance/foundations/risk-return', 'finance/technical/momentum'],
}

export default guide
