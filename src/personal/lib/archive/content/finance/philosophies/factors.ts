import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Factor investing explains returns with a handful of characteristics, "factors", that have historically earned a premium: the market itself, small companies, cheap (value) stocks, profitable companies, conservative investors, and momentum. "Smart beta" funds tilt towards them systematically.',
  nutshell: [
    'CAPM had one factor: the market. **Fama–French** added **size (SMB)** and **value (HML)** in 1993.',
    '**Carhart** added **momentum (UMD)**; Fama–French’s 2015 model added **profitability (RMW)** and **investment (CMA)**.',
    'A fund’s **alpha** is the return left over after accounting for its factor exposures.',
    'Factor premiums are long-run averages with long, painful droughts (value lagged badly from about 2007 to 2020).',
  ],
  sections: [
    {
      id: 'models',
      title: 'The models',
      blocks: [
        {
          t: 'math',
          tex: String.raw`R_i - R_f = \alpha_i + \beta_i\,(R_m - R_f) + s_i\,SMB + h_i\,HML + \varepsilon_i`,
          where: [
            { sym: 'R_i - R_f', def: 'The fund or stock’s return above the risk-free rate' },
            { sym: 'R_m - R_f', def: 'The market’s return above the risk-free rate' },
            { sym: String.raw`\beta_i, s_i, h_i`, def: 'How strongly the fund is exposed to the market, size and value factors' },
            { sym: 'SMB', def: 'Small minus big: return of small companies minus large ones' },
            { sym: 'HML', def: 'High minus low: return of high book-to-market (value) minus low (growth) stocks' },
            { sym: String.raw`\alpha_i`, def: 'Return not explained by the factors' },
            { sym: String.raw`\varepsilon_i`, def: 'Leftover noise the model does not explain' },
          ],
          syntax: [
            { sym: 'R_i - R_f', say: String.raw`Read "R i minus R f". The subscript \(i\) tags the fund, \(f\) tags the risk-free asset. Subtract what cash would have paid to get the reward for taking risk.` },
            { sym: String.raw`\beta_i,\ s_i,\ h_i`, say: String.raw`Read "beta i, s i, h i". Each is a multiplier on the factor beside it: a loading of 1.1 means the fund gains or loses 1.1 times as much as that factor does.` },
            { sym: String.raw`\varepsilon_i`, say: 'Read "epsilon i". A random leftover that averages zero; ignore it when you want the fund’s expected return.' },
          ],
          worked: {
            title: 'Explaining a fund that returned 12%',
            steps: [
              String.raw`Given: risk-free rate 3%, market return 9%, so \(R_m - R_f = 6\%\). SMB \(= 2\%\), HML \(= 3\%\). The fund’s loadings are \(\beta = 1.1\), \(s = 0.4\), \(h = 0.3\), and it returned 12%.`,
              String.raw`Fund excess return: \(R_i - R_f = 12\% - 3\% = 9\%\).`,
              String.raw`Market piece: \(1.1 \times 6\% = 6.6\%\).`,
              String.raw`Size piece: \(0.4 \times 2\% = 0.8\%\); value piece: \(0.3 \times 3\% = 0.9\%\).`,
              String.raw`Explained by factors: \(6.6 + 0.8 + 0.9 = 8.3\%\). Left over: \(9\% - 8.3\% = 0.7\% = \alpha_i + \varepsilon_i\).`,
            ],
            answer: 'Of the fund’s 9% excess return, 8.3 points come from cheap factor exposures and only 0.7 points could be skill (or luck).',
          },
          caption: 'The Fama–French three-factor model (1993): it splits a fund’s return into pieces explained by known, cheaply-replicable exposures (market, size, value) and a leftover, alpha. Read the loadings as a fingerprint of what the fund actually is, a high s means it behaves like a small-cap fund, a high h means it behaves like a value fund, whatever it calls itself.',
        },
        {
          t: 'math',
          tex: String.raw`R_i - R_f = \alpha + \beta\,MKT + s\,SMB + h\,HML + r\,RMW + c\,CMA + m\,UMD + \varepsilon`,
          where: [
            { sym: 'MKT', def: 'Market excess return (the market factor)' },
            { sym: String.raw`\beta, s, h, r, c, m`, def: 'The fund’s exposure (loading) to each respective factor' },
            { sym: 'RMW', def: 'Robust minus weak profitability' },
            { sym: 'CMA', def: 'Conservative minus aggressive investment (asset growth)' },
            { sym: 'UMD', def: 'Up minus down: past 12-month winners minus losers (momentum)' },
          ],
          syntax: [
            { sym: 'RMW,\\ CMA,\\ UMD', say: 'These are names, not products. Read each as the return of a long–short portfolio: long the first group, short the second (robust minus weak, conservative minus aggressive, up minus down).' },
            { sym: String.raw`\beta\,MKT`, say: 'Read "beta times MKT". Written side by side with no sign, the loading multiplies the factor; the whole right-hand side is a sum of such products.' },
          ],
          worked: {
            title: 'The same fund, six factors',
            steps: [
              String.raw`Given factor returns for the year: MKT 6%, SMB 2%, HML 3%, RMW 2.5%, CMA 1%, UMD 4%. Fund loadings: \(\beta = 1.0\), \(s = 0.3\), \(h = 0.2\), \(r = 0.1\), \(c = 0\), \(m = 0.15\). Fund excess return 8.5%.`,
              String.raw`Market \(1.0 \times 6 = 6.0\); size \(0.3 \times 2 = 0.6\); value \(0.2 \times 3 = 0.6\).`,
              String.raw`Profitability \(0.1 \times 2.5 = 0.25\); investment \(0 \times 1 = 0\); momentum \(0.15 \times 4 = 0.6\).`,
              String.raw`Total explained: \(6.0 + 0.6 + 0.6 + 0.25 + 0 + 0.6 = 8.05\%\).`,
              String.raw`Leftover: \(8.5 - 8.05 = 0.45\%\).`,
            ],
            answer: 'With six factors, only 0.45 points of the 8.5% remain unexplained, a stricter and smaller estimate of skill.',
          },
          caption: 'The five-factor model plus momentum, as commonly used today. More factors mean a stricter test of skill: the more of a fund’s return these common, low-cost exposures can explain, the less is left over to call genuine stock-picking ability.',
        },
        {
          t: 'example',
          title: 'Reading a regression',
          lines: [
            { label: 'Fund', text: 'returned 11% a year; risk-free 2%; market excess return 7%' },
            { label: 'Loadings', text: '\\(\\beta = 1.0,\\ s = 0.3,\\ h = 0.4\\); SMB averaged 2%, HML 3%' },
            { label: 'Explained', text: '\\(2 + 1.0(7) + 0.3(2) + 0.4(3) = 10.8\\%\\)' },
            { label: 'Alpha', text: '\\(11 - 10.8 = 0.2\\%\\): almost all the "skill" was factor exposure' },
          ],
        },
        {
          t: 'metric',
          name: 'alpha (α)',
          shows: 'the slice of a fund’s return left over once its exposure to known, easily replicated factors (market, size, value, and so on) has been subtracted out. It answers a sharper question than raw return does: not "did this fund make money?" but "did it make more money than you would expect just from its mechanical tilts, which you could buy cheaply yourself?"',
          eli5: 'If a fund says it beat the market by being brilliant, but it turns out it just quietly held smaller, cheaper stocks the whole time (which have historically paid off on their own), that is not skill, that is a tilt you could have bought directly in a cheap index fund. Alpha is what remains after you take that tilt away.',
          higher: 'A reliably positive, statistically significant alpha means the fund is doing something beyond just riding known factor premiums, genuine security selection or timing skill. This is rare and, when real, usually commands high fees, since replicating factor tilts alone is cheap.',
          lower: 'An alpha near or below zero, as in the worked example (0.2%, essentially noise), means the fund’s apparently good absolute return was almost entirely explained by exposures you could buy far more cheaply through index funds, the manager was not adding value beyond the tilts.',
          typical: 'Across the whole universe of actively managed funds, average alpha after fees is close to zero or negative, by definition, since all investors together must earn close to the market return before costs (see passive investing), and the hunt for genuine, persistent positive alpha is what most of active management is really chasing.',
        },
      ],
    },
    {
      id: 'why',
      title: 'Why might factors pay?',
      blocks: [
        {
          t: 'table',
          head: ['Factor', 'Risk story', 'Behavioural story'],
          rows: [
            ['Value', 'Cheap firms are distressed and riskier in bad times', 'Investors overreact to bad news and extrapolate'],
            ['Size', 'Small firms are less liquid and more fragile', 'Less analyst attention'],
            ['Momentum', 'Crash risk', 'Under-reaction, then herding'],
            ['Profitability', 'Less clear', 'Investors underappreciate steady profits'],
            ['Low volatility', 'Leverage constraints push investors into risky stocks', 'Lottery preference'],
          ],
        },
        { t: 'callout', tone: 'fact', title: 'The factor zoo', text: 'By the late 2010s, researchers had published over 300 "factors" that supposedly predicted returns. Harvey, Liu and Zhu (2016) argued that, given so much data mining, a new factor should clear a much higher statistical bar (a t-statistic above 3, not 2).' },
      ],
    },
  ],
  sources: [
    'Fama, E. F., & French, K. R. (1993). Common risk factors in the returns on stocks and bonds. *Journal of Financial Economics*, 33(1), 3–56.',
    'Carhart, M. M. (1997). On persistence in mutual fund performance. *The Journal of Finance*, 52(1), 57–82.',
    'Fama, E. F., & French, K. R. (2015). A five-factor asset pricing model. *Journal of Financial Economics*, 116(1), 1–22.',
    'Harvey, C. R., Liu, Y., & Zhu, H. (2016). … and the cross-section of expected returns. *The Review of Financial Studies*, 29(1), 5–68.',
  ],
  related: ['finance/foundations/risk-return', 'finance/philosophies/quant', 'finance/technical/evidence'],
}

export default guide
