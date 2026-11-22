import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Dual momentum, popularised by Gary Antonacci, combines relative momentum (pick the stronger of two equity markets) with absolute momentum (only hold equities if they beat cash; otherwise hold bonds). The aim is to capture strong equity trends while stepping aside in prolonged bear markets.',
  nutshell: [
    '**Relative**: choose between US and international equities by 12-month return.',
    '**Absolute**: if the chosen market’s 12-month return is below T-bills, hold bonds instead.',
    'Rebalance **monthly**; one position at a time.',
    'Historically lower drawdowns than buy-and-hold; long periods of lagging and whipsaws are common.',
  ],
  sections: [
    {
      id: 'rules',
      title: 'The rule',
      blocks: [
        {
          t: 'math',
          tex: String.raw`k^* = \arg\max_{k \in \{\text{US},\,\text{Intl}\}} R_k^{12m}, \qquad \text{hold } \begin{cases} k^* & \text{if } R_{k^*}^{12m} > R_{\text{bills}}^{12m} \\ \text{bonds} & \text{otherwise}\end{cases}`,
          caption: 'Dual momentum: pick the stronger equity market, then check it beats cash.',
          plain: 'Each month, compare the past 12-month returns of US and international equities and pick the higher (relative momentum). Then check whether that market beat Treasury bills over the same 12 months (absolute momentum). If yes, hold it; if not, hold bonds.',
          where: [
            { sym: String.raw`R_k^{12m}`, def: 'total return of market k over the past 12 months' },
            { sym: String.raw`R_{\text{bills}}^{12m}`, def: '12-month return of Treasury bills' },
          ],
          syntax: [
            { sym: String.raw`\arg\max`, say: '“the choice that gives the largest value”' },
            { sym: String.raw`\begin{cases}\end{cases}`, say: '“if … otherwise …”' },
          ],
          worked: {
            title: 'Three month-ends',
            steps: [
              'January: US +14%, international +9%, bills +4%. Pick US; 14 > 4 → hold US.',
              'June: US +6%, international +11%, bills +4%. Pick international; 11 > 4 → switch to international.',
              'November: US −3%, international −5%, bills +4%. Pick US (higher); −3 < 4 → hold bonds.',
            ],
            why: [
              'relative then absolute check',
              'leadership changed: switch',
              'both markets lag cash: step aside',
            ],
            answer: 'The rule rotates to the leader and exits equities in sustained declines. It trades a few times a year; each switch has tax and cost implications.',
          },
        },
      ],
    },
    {
      id: 'variants',
      title: 'Variants and cautions',
      blocks: [
        { t: 'list', items: [
          'Sector or factor rotation: rank sectors by momentum, hold the top few with an absolute filter.',
          'Multiple lookbacks (3, 6, 12 months averaged) reduce sensitivity to one parameter.',
          'The original backtests are partly in-sample; results since publication have been mixed, with sharp whipsaws in 2018–2020 style V-shaped markets.',
        ] },
      ],
    },
  ],
  sources: [
    'Antonacci, G. (2014). Dual Momentum Investing. McGraw-Hill.',
    'Antonacci, G. (2017). Risk premia harvesting through dual momentum. Journal of Management & Entrepreneurship, 2(1), 27–55.',
  ],
  related: ['finance/quant/momentum-strategies', 'finance/strategy-library/moving-average-trend', 'finance/philosophies/trend-following'],
}

export default guide
