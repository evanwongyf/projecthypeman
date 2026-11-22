import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Global macro investors bet on big-picture forces: interest rates, currencies, inflation, government policy and the flows of capital between countries. They trade anything (bonds, currencies, commodities, indices) and are famous for a few spectacular trades.',
  nutshell: [
    'Macro trades start from a view of the economy and policy, then find the cheapest way to express it.',
    '**George Soros**: reflexivity, where beliefs change the fundamentals they are about.',
    '**Ray Dalio**: the economy as a machine of short and long **debt cycles**.',
    'Asymmetric trades: when the odds are lopsided, bet big; when wrong, get out fast.',
  ],
  sections: [
    {
      id: 'reflexivity',
      title: 'Soros and reflexivity',
      blocks: [
        {
          t: 'cycle',
          items: [
            { name: 'Belief', body: 'Investors think a company (or country) is strong.' },
            { name: 'Price', body: 'They bid up its shares or currency.' },
            { name: 'Fundamentals', body: 'Higher prices let it borrow and raise money cheaply, so it really does get stronger.' },
            { name: 'Reinforcement', body: 'The improved fundamentals confirm the belief, until the gap between belief and reality becomes unsustainable and the loop reverses.' },
          ],
          caption: 'Reflexivity: perceptions and reality feed back on each other, producing booms and busts.',
        },
        { t: 'callout', tone: 'fact', title: 'Breaking the Bank of England', text: 'On "Black Wednesday", 16 September 1992, Soros’s Quantum Fund bet about $10 billion that the British pound would be forced out of the European Exchange Rate Mechanism. Britain withdrew that evening, and the fund made about $1 billion.' },
      ],
    },
    {
      id: 'dalio',
      title: 'Dalio and the debt cycle',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{Spending} = \text{Income} + \text{New credit},\qquad \frac{\text{Debt}}{\text{Income}} \text{ rises in booms, falls in deleveragings}`,
          where: [
            { sym: 'Spending', def: 'Total spending in the economy over a period' },
            { sym: 'Income', def: 'Income earned over the same period' },
            { sym: 'New credit', def: 'Fresh borrowing that funds spending beyond current income' },
          ],
          syntax: [
            { sym: String.raw`\frac{\text{Debt}}{\text{Income}}`, say: 'Read "debt over income" or "debt-to-income". How many dollars owed per dollar earned in a year; 150% means debts equal one and a half years of income.' },
            { sym: 'New credit < 0', say: 'A negative amount of new credit means net repayment. Spending then comes out below income, which is what a deleveraging is.' },
          ],
          worked: {
            title: 'One boom year and one bust year',
            steps: [
              String.raw`Start: income 100, debt 150, so debt-to-income \(= 150/100 = 150\%\).`,
              String.raw`Boom year: income grows to 103 and people borrow 8 more. Spending \(= 103 + 8 = 111\), debt \(= 158\), ratio \(= 158/103 \approx 153.4\%\).`,
              String.raw`Bust year: income stays at 103 and households repay 5. Spending \(= 103 + (-5) = 98\), debt \(= 153\).`,
              String.raw`Ratio \(= 153/103 \approx 148.5\%\).`,
            ],
            answer: 'Borrowing pushed the ratio up to 153%; repaying 5 pulled it back to 148.5% but forced spending 5 below income, which is why deleveraging feels like a slump.',
          },
          caption: 'Credit lets spending run ahead of income; repaying it later forces spending below income. A rising debt-to-income ratio marks a boom getting more fragile with every passing year, spending feels strong, but more and more of it depends on borrowing that eventually has to be serviced or repaid, not on income actually growing. A falling ratio marks the deleveraging that follows: spending must undershoot income for a stretch to pay that debt back down, which is why deleveragings feel like recessions even after the initial crisis has passed (the long flat stretch after year 60 in the chart below).',
        },
        {
          t: 'plot',
          title: 'Short-term cycles riding a long-term debt cycle (stylised)',
          x: [0, 75],
          y: [0, 4],
          xLabel: 'Years',
          yLabel: 'Debt / income',
          curves: [{ f: (t: number) => (t < 60 ? 1 + t * 0.04 : 3.4 - (t - 60) * 0.12) + 0.2 * Math.sin((t * 2 * Math.PI) / 7), label: 'Debt burden' }],
          shade: [{ from: 60, to: 75, label: 'Deleveraging', color: 'var(--pink)' }],
          caption: 'Dalio describes short-term (business) cycles of roughly 5–8 years within long-term debt cycles of roughly 50–75 years.',
        },
      ],
    },
    {
      id: 'tools',
      title: 'How macro traders express views',
      blocks: [
        {
          t: 'table',
          head: ['View', 'Possible trade'],
          rows: [
            ['Central bank will cut faster than expected', 'Buy short-dated government bond futures'],
            ['A currency peg will break', 'Sell the currency forward, or buy put options on it'],
            ['Inflation will surprise upward', 'Buy inflation-linked bonds, commodities; sell long bonds'],
            ['Emerging-market growth will beat developed', 'Long EM equity index, short developed index'],
          ],
        },
      ],
    },
  ],
  sources: ['Soros, G. (1987). *The Alchemy of Finance*. Simon & Schuster.', 'Dalio, R. (2018). *Principles for Navigating Big Debt Crises*. Bridgewater.', 'Mallaby, S. (2010). *More Money Than God*. Penguin.'],
  related: ['finance/economics/central-banks', 'finance/assets/forex/drivers', 'finance/philosophies/allocation'],
}

export default guide
