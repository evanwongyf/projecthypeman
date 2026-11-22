import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'What actually works in currency trading? The honest answer is less than the marketing suggests. Researchers have found that a few systematic strategies (carry, momentum and value) have earned returns across many currencies and decades, and that simple technical trading rules were profitable in the 1970s to the 1990s before their profits faded. Meanwhile, studies of retail traders find that the large majority lose money, mostly through costs, leverage and behaviour. This guide covers the practical side of the market (when liquidity is deep and spreads are tight, how news events work), the two schools of analysis (technical and fundamental), the factor evidence, the statistics on retail accounts and a short list of common mistakes. It is educational and not advice to trade.',
  nutshell: [
    '**Liquidity** is greatest in the **London–New York overlap**; spreads widen in thin hours, at rollover and around major news.',
    'Scheduled events: **central-bank decisions**, **US non-farm payrolls** (first Friday of the month), **CPI**, **GDP**: prices can jump within a second and spreads widen.',
    '**Factor evidence**: **carry**, **momentum** and **value** have earned premia in currencies, with drawdowns; **technical rules** profits have declined since the 1990s.',
    'Regulators’ disclosures show that about **65–80% of retail leveraged FX/CFD accounts lose money**.',
    'Costs (spread, swap, slippage) and leverage explain much of the loss; **discipline** explains the rest.',
  ],
  sections: [
    {
      id: 'liquidity',
      title: 'Liquidity, spreads and events',
      lead: 'When the market is deep, and when it is not.',
      blocks: [
        {
          t: 'table',
          head: ['Pair', 'Typical spread in liquid hours (pips)', 'In thin hours or news', 'Notes'],
          rows: [
            ['EUR/USD', '0.1 to 1.0', 'several pips', 'The deepest market'],
            ['USD/JPY', '0.1 to 1.0', 'several pips', 'Active in the Asia and New York sessions'],
            ['GBP/USD', '0.3 to 1.5', 'several pips', 'Volatile around UK data'],
            ['AUD/USD', '0.3 to 1.5', 'several pips', 'Follows commodities and China'],
            ['USD/SGD', '2 to 6', 'wider', 'Active in the Asian session; managed currency'],
            ['Exotics', '10 to 100', 'wider still', 'Costly for short-term trading'],
          ],
          caption: 'Typical values for a retail account at a competitive broker; actual spreads vary by provider and conditions.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'The rollover', tag: 'around 5 pm New York', body: 'At the daily rollover, liquidity thins, spreads widen and positions held overnight pay or earn the swap (the interest difference).' },
            { title: 'Scheduled news', tag: 'seconds matter', body: 'On release of a major number, quotes can disappear for a moment and spreads can widen sharply; stops can be filled well beyond their level.' },
            { title: 'Thin markets', tag: 'holidays and weekends', body: 'Holiday sessions and the Sunday open can have large gaps; an unexpected weekend event shows at the open.' },
            { title: 'A calendar', tag: 'preparation', body: 'An economic calendar lists the time, the consensus forecast and the impact of each release: knowing it avoids surprise.' },
          ],
        },
      ],
    },
    {
      id: 'evidence',
      title: 'What the evidence says',
      lead: 'Factors, technical rules and retail results.',
      blocks: [
        {
          t: 'table',
          head: ['Approach', 'Evidence', 'Caveat'],
          rows: [
            ['Carry', 'Positive average return in portfolios of currencies sorted by interest rate (Lustig et al., 2011)', 'Crashes in risk-off episodes; return partly a risk premium'],
            ['Momentum', 'Currencies that have risen over the past months tend to continue (Menkhoff et al., 2012); also in the 1990s–2010s', 'Reversals; costs; works best in less liquid currencies'],
            ['Value (PPP)', 'Currencies cheap on a real-exchange-rate basis tend to rise over several years', 'Deviations can persist for a decade'],
            ['Technical rules (moving averages, channels)', 'Neely, Weller and others found profits in the 1970s–1990s that declined afterwards', 'Data-mined rules often fail out of sample'],
            ['News and fundamentals', 'Surprises in macro data move prices on release', 'Hard to trade profitably given the speed of the response'],
          ],
        },
        {
          t: 'bars',
          title: 'Share of retail leveraged FX and CFD accounts that lose money (typical regulatory disclosures, approximate range)',
          items: [{ label: 'Lower range', value: 65 }, { label: 'Typical', value: 74 }, { label: 'Upper range', value: 80 }],
          unit: '%',
          min: 0,
          max: 100,
          decimals: 0,
          caption: 'Brokers in the EU and UK must publish this share; many disclose between about 65% and 80%. An ESMA study of retail CFD accounts found between 74% and 89% lost money over a year. Exact figures vary by firm and period.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Why most lose', tag: 'costs and behaviour', body: 'Spreads, swaps and slippage on frequent trading; high leverage; losing trades held and winners cut (the disposition effect); overtrading after losses.' },
            { title: 'Who wins', tag: 'a small share', body: 'A small share of traders profit over time; they tend to trade fewer times, size positions by risk, cut losses and keep records.' },
            { title: 'Technical or fundamental?', tag: 'complementary', body: 'Technical analysis finds levels and timing; fundamentals suggest direction over longer horizons; combining them with risk control is more useful than choosing one.' },
            { title: 'The base rate', tag: 'a sober anchor', body: 'Before trading, ask how you would be different from the large majority who lose; the answer should be about process, not confidence.' },
          ],
        },
        { t: 'dodont', do: ['Trade liquid pairs in liquid hours and know the economic calendar', 'Measure costs: spread, swap and slippage per trade', 'Use a regulated broker and check how the firm earns from clients', 'Test a strategy out of sample before trading it with real money'], dont: ['Trade exotic pairs with wide spreads on small accounts', 'Hold positions through major news without a plan', 'Use signals from social media or "gurus" without evidence', 'Assume a demo account result predicts a live result'] },
      ],
    },
  ],
  sources: [
    'Menkhoff, L., Sarno, L., Schmeling, M. & Schrimpf, A. (2012). Currency momentum strategies. *Journal of Financial Economics*, 106(3), 660–684.',
    'Neely, C. J., Weller, P. A. & Ulrich, J. M. (2009). The adaptive markets hypothesis: evidence from the foreign exchange market. *Journal of Financial and Quantitative Analysis*, 44(2), 467–488.',
    'Burnside, C., Eichenbaum, M., Kleshchelski, I. & Rebelo, S. (2011). Do peso problems explain the returns to the carry trade? *Review of Financial Studies*, 24(3), 853–891.',
    'European Securities and Markets Authority (2017–2018). Analyses of retail CFD client outcomes (esma.europa.eu).',
  ],
  related: ['finance/forex/interest-rate-parity-and-carry', 'finance/technical/evidence', 'finance/forex/fx-trading-process-and-psychology'],
}

export default guide
