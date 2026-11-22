import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'The foreign exchange (forex, FX) market is where currencies are swapped for one another: the largest and most liquid market in the world. Every quote is a **pair**: the price of one currency in terms of another. Once you understand base and quote, pips and lots, everything else follows.',
  nutshell: [
    'In **EUR/USD = 1.0850**, the euro is the **base** and the US dollar the **quote**: 1 euro costs 1.0850 dollars.',
    'A **pip** is the smallest standard move: 0.0001 for most pairs, 0.01 for yen pairs.',
    'A **standard lot** is 100,000 units of the base currency; mini 10,000; micro 1,000.',
    'You always buy one currency and sell the other at the same time.',
    '**Cross rates** combine two pairs that share a currency.',
  ],
  sections: [
    {
      id: 'quotes',
      title: 'Reading a quote',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{EUR/USD} = 1.0850 \;\Longleftrightarrow\; 1\ \text{EUR} = 1.0850\ \text{USD} \;\Longleftrightarrow\; \text{USD/EUR} = \frac{1}{1.0850} = 0.9217`,
          syntax: [
            { sym: String.raw`\text{EUR/USD}`, say: String.raw`Read “euro dollar”, meaning the price of one euro measured in dollars. The slash separates base (first) from quote (second), and works like “per”: dollars per euro.` },
            { sym: String.raw`\Longleftrightarrow`, say: String.raw`Read “means exactly the same as”. Each statement on the line says the same thing in a different way.` },
            { sym: String.raw`\frac{1}{1.0850}`, say: String.raw`Read “one over 1.0850”: the reciprocal. Flipping a pair (EUR/USD to USD/EUR) means dividing 1 by the rate.` },
          ],
          worked: {
            title: 'A pound-dollar quote, both ways',
            steps: [
              String.raw`Given: GBP/USD \(= 1.2650\), so 1 pound costs 1.2650 dollars.`,
              String.raw`Convert \(\pounds 5{,}000\): \(5{,}000 \times 1.2650 = \$6{,}325\).`,
              String.raw`Flip the pair: USD/GBP \(= 1/1.2650 = 0.7905\).`,
              String.raw`Convert back: \(6{,}325 \times 0.7905 = \pounds 5{,}000\).`,
              String.raw`If GBP/USD rises to 1.2800: \(5{,}000 \times 1.28 = \$6{,}400\), a rise of \(1.28/1.265 - 1 = 1.19\%\) in the pound.`,
            ],
            answer: String.raw`The pound is stronger when GBP/USD rises, and the flipped quote 0.7905 carries exactly the same information.`,
          },
          caption: 'Read EUR/USD rising as "the euro is getting stronger" (it now buys more dollars) and falling as the euro weakening against the dollar, the number always moves with the base currency’s strength. Flipping the pair just takes the reciprocal, so a rate can never be read two different ways at once.',
        },
        {
          t: 'table',
          head: ['Quote', 'Bid', 'Ask', 'Spread'],
          rows: [['EUR/USD', '1.0849', '1.0851', '2 pips']],
          caption: 'You sell the base at the bid and buy it at the ask. Major pairs often have spreads of under a pip at big dealers.',
        },
        {
          t: 'math',
          tex: String.raw`\text{Pip value} = \text{units} \times \text{pip size} = 100{,}000 \times 0.0001 = 10 \text{ (in the quote currency)}`,
          syntax: [
            { sym: String.raw`100{,}000`, say: String.raw`Read “one hundred thousand”. The braces around the comma only fix the spacing when printed.` },
            { sym: String.raw`\text{units} \times \text{pip size}`, say: String.raw`Read “units times pip size”: the number of base-currency units in the position, multiplied by the size of one pip. The answer comes out in the quote currency.` },
          ],
          worked: {
            title: 'Pip values in two pairs',
            steps: [
              String.raw`GBP/USD mini lot (10,000 pounds), pip size 0.0001: \(10{,}000 \times 0.0001 = \$1\) per pip.`,
              String.raw`A move from 1.2650 to 1.2710 is \(0.0060\), i.e. 60 pips.`,
              String.raw`Long position gain: \(60 \times \$1 = \$60\).`,
              String.raw`USD/JPY standard lot, pip size 0.01: \(100{,}000 \times 0.01 = \yen 1{,}000\) per pip.`,
              String.raw`At USD/JPY 150.00 that is \(1{,}000/150 = \$6.67\) per pip.`,
            ],
            answer: String.raw`The same pip is worth $1 on a mini lot of GBP/USD but about $6.67 on a standard lot of USD/JPY, so always check pip value before sizing.`,
          },
          caption: 'For one standard lot of EUR/USD, each pip is worth $10. For USD/JPY, pip size is 0.01, so a lot moves ¥1,000 per pip.',
        },
      ],
    },
    {
      id: 'cross',
      title: 'Cross rates',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{EUR/SGD} = \text{EUR/USD} \times \text{USD/SGD} = 1.08 \times 1.34 = 1.4472`,
          syntax: [
            { sym: String.raw`\text{EUR/USD} \times \text{USD/SGD}`, say: String.raw`Read each pair as a fraction: “euro over dollar, times dollar over Singapore dollar”. The dollars cancel top and bottom, leaving euro over Singapore dollar, exactly as with units in physics.` },
            { sym: String.raw`\times`, say: String.raw`Read “times”. Multiply the rates when the shared currency is the quote of one pair and the base of the other; divide when it is the quote of both.` },
          ],
          worked: {
            title: 'Two cross rates from the dollar pairs',
            steps: [
              String.raw`Given: GBP/USD \(= 1.2650\), USD/JPY \(= 150.00\), EUR/USD \(= 1.0850\).`,
              String.raw`GBP/JPY: USD is the quote of the first and the base of the second, so multiply: \(1.2650 \times 150.00 = 189.75\) yen per pound.`,
              String.raw`EUR/GBP: USD is the quote of both pairs, so divide: \(1.0850/1.2650 = 0.8577\).`,
              String.raw`Unit check: (dollars per euro) divided by (dollars per pound) gives pounds per euro.`,
            ],
            answer: String.raw`GBP/JPY should be 189.75 and EUR/GBP 0.8577; a quote far from these would offer a triangular arbitrage.`,
          },
          caption: 'The shared currency (USD) cancels, like units in physics. If quoted cross rates drifted from this, traders would profit from "triangular arbitrage" until they lined up.',
        },
        { t: 'fin-tool', tool: 'forex' },
        { t: 'callout', tone: 'fact', title: 'The biggest market', text: 'According to the Bank for International Settlements’ 2022 survey, about $7.5 trillion of currency changes hands every day, and the US dollar is on one side of about 88% of all trades. London is the biggest trading centre; Singapore is among the top few.' },
      ],
    },
  ],
  sources: ['Bank for International Settlements. (2022). *Triennial Central Bank Survey of Foreign Exchange and OTC Derivatives Markets*.', 'Levich, R. M. (2001). *International Financial Markets* (2nd ed.). McGraw-Hill.'],
  related: ['finance/assets/forex/drivers', 'finance/assets/forex/trading', 'finance/economics/central-banks'],
}

export default guide
