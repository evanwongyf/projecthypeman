import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'In *The Intelligent Investor*, Benjamin Graham gave two sets of rules: strict, simple criteria for the **defensive investor** who wants safety with little effort, and bargain-hunting methods for the **enterprising investor** willing to do more work. The numbers come from the 1970s, but the logic still holds.',
  nutshell: [
    'Seven tests for defensive stock selection: size, financial strength, earnings stability, dividend record, earnings growth, moderate P/E, moderate price to assets.',
    'The P/E × P/B ≤ 22.5 rule combines the last two (the basis of the Graham number).',
    'Enterprising investors hunted **net-nets**: stocks below two-thirds of net current asset value.',
    'Graham also advised a 25–75% split between stocks and bonds, never outside that range.',
  ],
  sections: [
    {
      id: 'defensive',
      title: 'The defensive investor’s seven criteria',
      blocks: [
        {
          t: 'table',
          head: ['#', 'Test', 'Graham’s rule'],
          rows: [
            ['1', 'Adequate size', 'Large, established companies (he suggested at least $100 million in sales for industrials, in 1970s dollars)'],
            ['2', 'Strong financial condition', 'Current ratio ≥ 2; long-term debt ≤ net current assets'],
            ['3', 'Earnings stability', 'Positive earnings in each of the past 10 years'],
            ['4', 'Dividend record', 'Uninterrupted dividends for at least 20 years'],
            ['5', 'Earnings growth', 'At least a one-third rise in EPS over 10 years, using 3-year averages at each end'],
            ['6', 'Moderate P/E', 'Price ≤ 15 × average earnings of the past 3 years'],
            ['7', 'Moderate price to assets', 'Price ≤ 1.5 × book value, or P/E × P/B ≤ 22.5'],
          ],
        },
        {
          t: 'math',
          tex: String.raw`\frac{\overline{EPS}_{\text{last 3 yrs}}}{\overline{EPS}_{\text{first 3 yrs of the decade}}} \ge \frac{4}{3},\qquad \frac{P}{\overline{EPS}_3} \le 15,\qquad \frac{P}{\overline{EPS}_3}\times\frac{P}{BVPS} \le 22.5`,
          where: [
            { sym: String.raw`\overline{EPS}_3`, def: 'Average earnings per share over the trailing three years' },
            { sym: 'P', def: 'Current share price' },
            { sym: 'BVPS', def: 'Book value per share' },
          ],
          syntax: [
            { sym: String.raw`\overline{EPS}`, say: 'Read "E P S bar". The bar means average: the mean earnings per share over the years named.' },
            { sym: String.raw`\frac{P}{\overline{EPS}_3}`, say: 'Read "price over three-year average earnings". A P/E that uses the smoothed earnings, not just last year’s.' },
            { sym: String.raw`\times`, say: 'Read "times". The last test multiplies the P/E by the price-to-book ratio and asks for a total of 22.5 or less.' },
          ],
          worked: {
            title: 'A stock at 30',
            steps: [
              'Given: average EPS of 1.80 over the first three years of the decade and 2.52 over the last three; current price 30; book value per share 24.',
              String.raw`Growth test: \(2.52/1.80 = 1.40 \ge 4/3 \approx 1.333\). Pass.`,
              String.raw`P/E test: \(30/2.52 \approx 11.9 \le 15\). Pass.`,
              String.raw`Price to book: \(30/24 = 1.25\). Combined: \(11.9 \times 1.25 \approx 14.9 \le 22.5\). Pass.`,
              String.raw`For comparison, a P/E of 20 with a price-to-book of 1.1 gives \(20 \times 1.1 = 22\), only just passing.`,
            ],
            answer: 'The stock passes all three, with a combined score of 14.9 against the 22.5 ceiling, so it clears Graham’s bar comfortably.',
          },
          caption: 'Criteria 5, 6 and 7 as formulas. Averaging earnings over three years smooths out a single good or bad year, so a lucky quarter cannot sneak a stock past the P/E test. The last term is the one worth watching closely: it is a single combined score of cheapness on earnings and on assets, and Graham’s cutoff of 22.5 is deliberately loose, a stock can pass with a P/E of 20 and a P/B of only 1.1, or a P/E of 9 and a P/B of 2.5, trading expensiveness in one for cheapness in the other. A score comfortably under 22.5, with both ratios individually reasonable, is the safer read than one that just scrapes under by being extreme on one side.',
        },
        {
          t: 'metric',
          name: 'the Graham number',
          shows: 'the P/E × P/B ≤ 22.5 test rearranged into a single price ceiling: \\(\\sqrt{22.5 \\times EPS \\times BVPS}\\), the most you could pay and still satisfy Graham’s combined earnings-and-assets rule. It folds two separate cheapness checks (versus earnings, versus book value) into one dollar figure you can compare straight against the market price.',
          eli5: 'Instead of checking two separate price tags"is it cheap on earnings?" and "is it cheap on assets?"the Graham number gives you one all-in price tag. If the stock trades below it, it clears both checks at once; if it trades above, it has failed at least one of them.',
          higher: 'A current price well above the Graham number means the stock has failed criteria 6 or 7 (or both) by a wide margin, it is priced for more growth and quality than Graham’s defensive rules were ever designed to pay for. That does not make it a bad business, just outside the circle this particular checklist was built to find.',
          lower: 'A current price at or below the Graham number means the stock clears the combined earnings-and-assets bar. The further below, the larger the apparent discount, but check why: a price that low relative to both earnings and book value sometimes reflects a real problem (declining earnings, impaired assets) rather than a genuine bargain.',
          typical: 'Graham number screens built from this test tend to surface small, unglamorous, out-of-favour companies, exactly the kind the market pays little attention to, and almost never surface fast-growing or high-margin businesses, since high growth and high quality are usually priced well above what a 22.5 ceiling allows.',
        },
      ],
    },
    {
      id: 'enterprising',
      title: 'The enterprising investor: net-nets',
      blocks: [
        {
          t: 'math',
          tex: String.raw`NCAV = \text{Current assets} - \text{Total liabilities},\qquad \text{Buy if } P \le \tfrac{2}{3}\cdot\frac{NCAV}{\text{shares}}`,
          where: [
            { sym: 'P', def: 'Current share price' },
            { sym: 'NCAV', def: 'Net current asset value: current assets minus all liabilities, including long-term debt' },
          ],
          syntax: [
            { sym: String.raw`\tfrac{2}{3}`, say: 'Read "two thirds". Multiply by 2 and divide by 3; it is a one-third discount to the asset value.' },
            { sym: String.raw`\frac{NCAV}{\text{shares}}`, say: 'Read "NCAV per share". Divide the total net current asset value by the number of shares to compare it with a share price.' },
          ],
          worked: {
            title: 'A struggling manufacturer (millions)',
            steps: [
              'Given: current assets 120, total liabilities 70 (including long-term debt), 10 million shares, share price 3.20.',
              String.raw`\(NCAV = 120 - 70 = 50\).`,
              String.raw`Per share: \(50/10 = 5.00\).`,
              String.raw`Buy ceiling: \(\tfrac{2}{3} \times 5.00 \approx 3.33\).`,
              String.raw`Compare: \(3.20 \le 3.33\), and the price is \(3.20/5.00 = 64\%\) of NCAV.`,
            ],
            answer: 'At 3.20 the share is below the 3.33 ceiling, so it qualifies as a net-net, with a 36% discount to NCAV.',
          },
          caption: 'At such prices you pay less than the liquidation value of current assets alone, getting factories, brands and future profits for free. The two-thirds discount is the margin of safety: NCAV itself is already a conservative floor (it ignores fixed assets entirely and assumes current assets are worth less than book in a forced sale), so paying only two-thirds of that floor means the market would have to be wrong twice over for the trade to lose money. The closer the price creeps toward 100% of NCAV, the thinner that cushion gets and the less margin for error remains.',
        },
        {
          t: 'example',
          title: 'A net-net',
          lines: [
            { label: 'Balance sheet', text: 'current assets $90m; total liabilities $30m; 10m shares' },
            { label: 'NCAV per share', text: '\\((90 - 30)/10 = \\$6.00\\)' },
            { label: 'Buy below', text: '\\(\\tfrac{2}{3} \\times 6 = \\$4.00\\)' },
          ],
        },
        { t: 'callout', tone: 'fact', title: 'Graham’s worst and best', text: 'Graham nearly went broke in the 1929–1932 crash, an experience that shaped his obsession with safety. His single best investment was in the insurer GEICO, bought in 1948, which made more money than all his other investments combined.' },
      ],
    },
  ],
  sources: ['Graham, B. (1973). *The Intelligent Investor* (4th rev. ed.). Harper & Row.', 'Oppenheimer, H. R. (1986). Ben Graham’s net current asset values: A performance update. *Financial Analysts Journal*, 42(6), 40–47.'],
  related: ['finance/fundamental/value-investing', 'finance/frameworks/buffett', 'finance/frameworks/magic-formula'],
}

export default guide
