import type { Guide } from '../../../guide'
import { CHART } from '../../../../finance/examples'

const guide: Guide = {
  intro:
    'Technical analysis studies **price and volume** to judge where a market might go next. Where fundamental analysis asks "what is this worth?", technical analysis asks "what are buyers and sellers actually doing?" It rests on a few assumptions, and it is one of the most debated ideas in finance.',
  nutshell: [
    'Three core assumptions: **the price discounts everything**, **prices move in trends**, and **history tends to repeat** (because human behaviour does).',
    'Modern technical analysis grew from **Dow theory**, the ideas of Charles Dow around 1900.',
    'Tools include charts, trendlines, support and resistance, indicators, patterns and volume.',
    'Academic evidence is mixed: some effects (like momentum) are well documented; many chart patterns are not.',
    'Used well, it is mainly a framework for **timing and risk management**, not a crystal ball.',
  ],
  sections: [
    {
      id: 'assumptions',
      title: 'The three assumptions',
      blocks: [
        {
          t: 'cards',
          cols: 3,
          items: [
            { tag: '1', title: 'Price discounts everything', body: 'All known information (earnings, news, sentiment) is already reflected in the price, so studying price is studying the market’s combined judgement.' },
            { tag: '2', title: 'Prices move in trends', body: 'Once a trend is established, it is more likely to continue than to reverse. Most technical tools try to identify trends and their turning points.' },
            { tag: '3', title: 'History rhymes', body: 'Fear and greed repeat, so similar price patterns tend to recur and lead to similar outcomes.' },
          ],
        },
        {
          t: 'candles',
          rows: CHART.uptrend,
          title: 'An uptrend: higher highs and higher lows',
          points: [
            { i: 4, label: 'High 1', at: 'high' },
            { i: 14, label: 'Higher high', at: 'high' },
            { i: 24, label: 'Higher high', at: 'high' },
            { i: 9, label: 'Low 1', at: 'low' },
            { i: 19, label: 'Higher low', at: 'low' },
            { i: 29, label: 'Higher low', at: 'low' },
          ],
          segments: [{ from: [9, 93.6], to: [34, 106.2], label: 'Trendline', color: '#2f9e6e' }],
          caption: 'Dow’s definition of an uptrend: each peak and each trough higher than the last. The trend continues until that sequence breaks.',
        },
      ],
    },
    {
      id: 'dow',
      title: 'Dow theory',
      blocks: [
        {
          t: 'p',
          text: 'Charles Dow co-founded Dow Jones & Company and *The Wall Street Journal*, and created the first stock averages. His editorials (systematised later by William Hamilton and Robert Rhea) laid out six tenets:',
        },
        {
          t: 'steps',
          items: [
            { title: 'The averages discount everything', body: 'Every known and foreseeable factor is in the price.' },
            { title: 'There are three trends', body: 'The primary trend (months to years), secondary corrections (weeks to months) and minor moves (days).' },
            { title: 'Primary trends have three phases', body: 'Accumulation by informed investors, public participation as the trend becomes obvious, and distribution when the informed sell to the late crowd.' },
            { title: 'The averages must confirm each other', body: 'Originally, industrials and railroads: if goods were being made, they also had to be shipped.' },
            { title: 'Volume confirms the trend', body: 'Volume should rise in the direction of the main trend.' },
            { title: 'A trend lasts until a clear reversal', body: 'Assume the trend continues until the evidence says otherwise.' },
          ],
        },
        {
          t: 'plot',
          title: 'The three phases of a primary bull trend',
          x: [0, 30],
          y: [80, 160],
          xLabel: 'Time',
          yLabel: 'Price',
          curves: [{ f: (t: number) => 100 + 50 / (1 + Math.exp(-(t - 15) / 3.5)) + 3 * Math.sin(t * 1.3), label: 'Price' }],
          shade: [
            { from: 0, to: 9, label: 'Accumulation', color: 'var(--lavender)' },
            { from: 9, to: 21, label: 'Public participation', color: 'var(--mint)' },
            { from: 21, to: 30, label: 'Distribution', color: 'var(--pink)' },
          ],
        },
        { t: 'callout', tone: 'fact', title: 'Twelve stocks', text: 'The Dow Jones Industrial Average started in 1896 with just 12 companies, and is still price-weighted: a $500 stock moves it far more than a $50 stock, regardless of company size. General Electric, one of the original twelve, was the index’s longest-serving member until it was removed in 2018.' },
      ],
    },
    {
      id: 'debate',
      title: 'Why it is controversial',
      blocks: [
        {
          t: 'p',
          text: 'If markets are efficient (see [efficient markets](@finance/foundations/efficient-markets)), past prices are already reflected in today’s price, and chart patterns should not predict anything. Burton Malkiel famously argued in *A Random Walk Down Wall Street* that a blindfolded monkey throwing darts could pick a portfolio as well as the experts. Yet researchers have documented real effects, especially **momentum** (recent winners tend to keep winning for months). The fair summary: some technical signals have had modest value, many popular ones do not, and testing is harder than it looks. See [does technical analysis work?](@finance/technical/evidence).',
        },
        {
          t: 'dodont',
          do: ['Use charts to see trends, levels and risk clearly.', 'Define rules in advance and test them on data.', 'Combine price with fundamentals and good risk management.'],
          dont: ['Treat any pattern as certain.', 'Trust a backtest tuned on the same data it was tested on.', 'Forget trading costs and taxes.'],
        },
      ],
    },
  ],
  sources: [
    'Hamilton, W. P. (1922). *The Stock Market Barometer*. Harper & Brothers.',
    'Rhea, R. (1932). *The Dow Theory*. Barron’s.',
    'Murphy, J. J. (1999). *Technical Analysis of the Financial Markets*. New York Institute of Finance.',
    'Malkiel, B. G. (1973). *A Random Walk Down Wall Street*. W. W. Norton.',
  ],
  related: ['finance/technical/charts', 'finance/technical/trends', 'finance/technical/evidence'],
}

export default guide
