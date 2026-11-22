import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Contrarians go against the crowd: buying when others are fearful and selling when they are euphoric. Not because the crowd is always wrong, but because at extremes of sentiment, prices tend to have overshot. Sir John Templeton made a career of it.',
  nutshell: [
    '"Bull markets are born on pessimism, grow on scepticism, mature on optimism and die on euphoria." (John Templeton)',
    '"Be fearful when others are greedy, and greedy when others are fearful." (Warren Buffett)',
    'Look for **extremes** in sentiment, valuations and fund flows, not just unpopularity.',
    'Being early is hard to tell from being wrong: size positions to survive.',
  ],
  sections: [
    {
      id: 'cycle',
      title: 'The sentiment cycle',
      blocks: [
        {
          t: 'plot',
          title: 'Emotions through a market cycle (stylised)',
          x: [0, 24],
          y: [60, 160],
          xLabel: 'Time',
          yLabel: 'Price',
          curves: [{ f: (t: number) => 110 + 40 * Math.sin(((t - 3) * 2 * Math.PI) / 24), label: 'Price' }],
          points: [
            { x: 9, y: 150, label: 'Euphoria: maximum financial risk' },
            { x: 15, y: 110, label: 'Fear' },
            { x: 21, y: 70, label: 'Despair: maximum opportunity' },
            { x: 3, y: 110, label: 'Hope' },
          ],
        },
        {
          t: 'cards',
          items: [
            { title: 'Signs of euphoria', body: 'Record inflows, new investors boasting of easy profits, "this time is different", soaring margin debt, frenzied IPOs.' },
            { title: 'Signs of despair', body: 'Record outflows, capitulation selling on heavy volume, magazine covers declaring an asset dead, valuations at multi-decade lows.' },
          ],
        },
      ],
    },
    {
      id: 'measures',
      title: 'Measuring sentiment',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{Put/call ratio} = \frac{\text{Put volume}}{\text{Call volume}},\qquad \text{Bull–bear spread} = \%\text{bulls} - \%\text{bears}`,
          where: [
            { sym: 'Put volume', def: 'Number of put options (bets on a fall) traded over the period' },
            { sym: 'Call volume', def: 'Number of call options (bets on a rise) traded over the period' },
            { sym: String.raw`\%\text{bulls}, \%\text{bears}`, def: 'Share of surveyed investors describing themselves as bullish or bearish' },
          ],
          syntax: [
            { sym: String.raw`\frac{\text{Put volume}}{\text{Call volume}}`, say: 'Read "puts over calls". Divide the number of put contracts traded by the number of call contracts. Above 1 means more puts than calls.' },
            { sym: String.raw`\%\text{bulls} - \%\text{bears}`, say: 'Read "percent bulls minus percent bears". Subtract the bearish share from the bullish share of survey respondents. A negative answer means pessimists outnumber optimists.' },
          ],
          worked: {
            title: 'A fearful week',
            steps: [
              'Given: 1.2 million put contracts and 1.0 million call contracts traded on the week.',
              String.raw`Put/call ratio \(= 1.2/1.0 = 1.2\).`,
              'A survey of investors finds 25% bullish and 55% bearish (the remaining 20% neutral).',
              String.raw`Bull–bear spread \(= 25\% - 55\% = -30\) percentage points.`,
              'Compare with the normal range: if the put/call ratio usually sits near 0.8 and the spread near +10, both readings sit far outside it.',
            ],
            answer: 'A put/call ratio of 1.2 and a spread of −30 both signal extreme fear, which a contrarian reads as a possible bottom rather than a reason to sell.',
          },
          caption: 'Both are contrarian indicators: you read them backwards from how they sound. A high put/call ratio means the crowd is paying up to protect against or bet on a fall, exactly the fear that, at an extreme, often marks a bottom rather than confirms more downside ahead. A very negative bull–bear spread (far more bears than bulls) signals the same crowd pessimism. These only matter at genuine extremes, far from their normal everyday range; a mildly elevated reading most weeks is just noise.',
        },
        {
          t: 'metric',
          name: 'the put/call ratio',
          shows: 'the balance of options activity between bets on falling prices (puts) and bets on rising prices (calls). It is a direct read on how hedged or fearful options traders are at this moment, rather than a measure of where prices are actually headed.',
          eli5: 'Picture everyone at the casino betting on red or black. If suddenly almost everyone piles onto black (expecting a fall), that itself is information, not about which colour is "right", but about how one-sided the crowd has become, which is usually when the crowd is most likely to be caught wrong-footed.',
          higher: 'A high ratio (conventionally above roughly 1.0, meaning more puts traded than calls) signals heavy hedging or outright bearish betting. At a genuine extreme, this is read as a contrarian bullish sign: so much fear is already expressed that there may be few sellers left to push prices lower.',
          lower: 'A low ratio (well below roughly 0.7) signals complacency, few are bothering to hedge or bet on a fall, because everyone expects things to keep rising. At an extreme this is read as a contrarian warning sign, since there is little protection in place if sentiment turns.',
          typical: 'The equity put/call ratio typically drifts in a range of roughly 0.7–1.0 day to day; readings pushing towards 1.2–1.5 or beyond are the kind of extremes contrarians watch for, and they matter far more at market lows (panic) than at highs, where complacency readings are noisier and less reliable on their own.',
        },
        { t: 'callout', tone: 'fact', title: 'A dollar a share in 1939', text: 'As World War II began in 1939, John Templeton borrowed $10,000 and bought 100 shares of every company on the New York and American exchanges trading below $1, 104 companies. Within four years, most had risen sharply and only a handful had failed.' },
      ],
    },
  ],
  sources: ['Templeton, J., & Templeton, L. (2008). *Investing the Templeton Way*. McGraw-Hill.', 'Dreman, D. (1998). *Contrarian Investment Strategies: The Next Generation*. Simon & Schuster.', 'De Bondt, W. F. M., & Thaler, R. (1985). Does the stock market overreact? *The Journal of Finance*, 40(3), 793–805.'],
  related: ['finance/foundations/behavioural', 'finance/fundamental/value-investing'],
}

export default guide
