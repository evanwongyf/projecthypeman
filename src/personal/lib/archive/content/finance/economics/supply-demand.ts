import type { Guide } from '../../../guide'

const demand = (q: number) => 50 - q / 2
const demand2 = (q: number) => 65 - q / 2
const supply = (q: number) => 5 + q / 4

const guide: Guide = {
  intro:
    'Prices are set where the amount people want to buy meets the amount sellers want to sell. This simple model explains a remarkable amount: why concert tickets are resold for triple, why a bad harvest raises prices, and, in a crowded market of buyers and sellers, why a stock price moves.',
  nutshell: [
    'The **demand curve** slopes down: at lower prices, people buy more.',
    'The **supply curve** slopes up: at higher prices, producers offer more.',
    'Where they cross is the **equilibrium** price and quantity.',
    'A change in tastes, income or costs **shifts** a whole curve, moving the equilibrium.',
    '**Elasticity** measures how strongly quantity responds to price.',
  ],
  sections: [
    {
      id: 'equilibrium',
      title: 'Equilibrium',
      blocks: [
        {
          t: 'math',
          tex: String.raw`Q_d = 100 - 2P,\qquad Q_s = -20 + 4P\qquad\Longrightarrow\qquad 100 - 2P = -20 + 4P \;\Rightarrow\; P^{*} = 20,\ Q^{*} = 60`,
          syntax: [
            { sym: String.raw`Q_d, Q_s`, say: String.raw`Read "Q sub d" and "Q sub s": quantity demanded and quantity supplied. The subscripts say which side of the market.` },
            { sym: String.raw`P^{*}, Q^{*}`, say: String.raw`Read "P star", "Q star": the equilibrium values, where the curves cross.` },
            { sym: String.raw`\Rightarrow`, say: String.raw`Read "so": the next line follows by solving the equation just stated.` },
          ],
          worked: {
            steps: [
              String.raw`Given: \(Q_d = 100 - 2P\) and \(Q_s = -20 + 4P\).`,
              String.raw`Set equal: \(100 - 2P = -20 + 4P\), so \(120 = 6P\).`,
              String.raw`Solve: \(P^* = 120/6 = 20\).`,
              String.raw`Quantity: \(Q_d = 100 - 2(20) = 60\) and \(Q_s = -20 + 4(20) = 60\), which agree.`,
              String.raw`Try a price ceiling of \(P = 15\): \(Q_d = 70\) but \(Q_s = 40\), a shortage of 30 units.`,
            ],
            answer: String.raw`The market clears at a price of $20 with 60 units traded; capping the price at $15 leaves 30 units of unmet demand.`,
          },
          where: [
            { sym: 'Q_d, Q_s', def: 'Quantity demanded and quantity supplied at a given price' },
            { sym: 'P', def: 'Price' },
            { sym: 'P^*, Q^*', def: 'The equilibrium price and quantity, where the two curves cross' },
          ],
          caption: 'Set quantity demanded equal to quantity supplied and solve: that is the only price where buyers and sellers agree on how much to trade, with nothing left unsold and no one left wanting more at that price. Away from P*, the market is not at rest, a price above it leaves unsold stock (pushing price back down), a price below it leaves queues of unmet buyers (pushing price back up).',
        },
        {
          t: 'plot',
          title: 'Supply, demand and a demand shift',
          x: [0, 120],
          y: [0, 70],
          xLabel: 'Quantity',
          yLabel: 'Price',
          curves: [
            { f: demand, label: 'Demand D₁' },
            { f: supply, label: 'Supply' },
            { f: demand2, label: 'Demand D₂ (shifted out)', dashed: true },
          ],
          points: [
            { x: 60, y: 20, label: 'E₁: P = 20, Q = 60' },
            { x: 80, y: 25, label: 'E₂: P = 25, Q = 80' },
          ],
          caption: 'When demand rises (for example, a celebrity endorses the product), the demand curve shifts right: both price and quantity rise.',
        },
        {
          t: 'cards',
          items: [
            { title: 'Shortage', body: 'If price is held below equilibrium (a price cap), more is demanded than supplied: queues and black markets.' },
            { title: 'Surplus', body: 'If price is held above equilibrium (a price floor), more is supplied than demanded: unsold stock.' },
            { title: 'In markets', body: 'An exchange’s order book is supply and demand in real time: bids are demand, asks are supply.' },
          ],
        },
      ],
    },
    {
      id: 'elasticity',
      title: 'Elasticity',
      blocks: [
        {
          t: 'math',
          tex: String.raw`E_d = \frac{\%\Delta Q}{\%\Delta P} = \frac{(Q_2 - Q_1)\,/\,\tfrac{Q_1 + Q_2}{2}}{(P_2 - P_1)\,/\,\tfrac{P_1 + P_2}{2}}`,
          syntax: [
            { sym: String.raw`\%\Delta Q`, say: String.raw`Read "percent change in Q": the change divided by the average level, shown as a percentage.` },
            { sym: String.raw`\tfrac{Q_1 + Q_2}{2}`, say: String.raw`The midpoint: add the two quantities and halve. Using it as the base makes the answer the same in either direction.` },
            { sym: String.raw`E_d`, say: String.raw`Read "E sub d": price elasticity of demand. Usually negative because price and quantity move opposite ways; many texts quote the absolute value.` },
          ],
          worked: {
            steps: [
              String.raw`Given: petrol rises from $3.00 to $3.30 a gallon; weekly sales at a station fall from 1,000 to 950 gallons.`,
              String.raw`Quantity: \((950 - 1000)/975 = -50/975 \approx -5.13\%\).`,
              String.raw`Price: \((3.30 - 3.00)/3.15 = 0.30/3.15 \approx +9.52\%\).`,
              String.raw`Ratio: \(E_d = \frac{-5.13\%}{9.52\%} \approx -0.54\).`,
            ],
            answer: String.raw`The magnitude 0.54 is below 1, so demand is inelastic: a 10% price rise cuts sales only about 5%, and revenue goes up.`,
          },
          where: [
            { sym: 'Q_1, Q_2', def: 'Quantity before and after the price change' },
            { sym: 'P_1, P_2', def: 'Price before and after the change' },
          ],
          caption: 'The midpoint (arc) formula, which gives the same answer whichever direction you measure. The result is a single number telling you how much buyers’ behaviour moves for every 1% move in price, see the metric below for how to read its size.',
        },
        {
          t: 'example',
          title: 'Bubble tea',
          lines: [
            { label: 'Change', text: 'price rises from $4 to $5; cups sold fall from 200 to 150 a day' },
            { label: 'Quantity', text: '\\(-50 / 175 \\approx -28.6\\%\\)' },
            { label: 'Price', text: '\\(1 / 4.5 \\approx 22.2\\%\\)' },
            { label: 'Elasticity', text: '\\(-28.6 / 22.2 \\approx -1.29\\): elastic (above 1 in size), so revenue falls: $800 → $750' },
          ],
        },
        {
          t: 'table',
          head: ['|E|', 'Called', 'Examples', 'Raising price…'],
          rows: [
            ['Above 1', 'Elastic', 'Luxuries, goods with close substitutes', 'Lowers total revenue'],
            ['Below 1', 'Inelastic', 'Petrol, medicines, salt', 'Raises total revenue'],
            ['Exactly 1', 'Unit elastic', '', 'Leaves revenue unchanged'],
          ],
        },
        {
          t: 'metric',
          name: 'price elasticity of demand (E)',
          shows: 'How sensitive buyers are to a price change, the percentage change in quantity bought for each 1% change in price. It tells a seller whether raising prices will make more money (if buyers barely react) or lose money (if buyers desert in droves), and it is always negative for ordinary goods (price up, quantity down), so economists usually discuss its size, |E|, ignoring the sign.',
          eli5: 'If your favourite coffee shop raised prices by 10% and you kept buying the same amount, your demand is inelastic, you need your coffee. If a 10% price rise made you switch to instant coffee at home, your demand is elastic, you had an easy alternative.',
          higher: 'Buyers react strongly: a small price rise causes a big drop in quantity bought, so total revenue falls when price rises (and rises when price falls). This happens for goods with easy substitutes or that are not necessities, a specific brand of soft drink, a particular restaurant, a non-essential gadget.',
          lower: 'Buyers barely react: a price rise causes only a small drop in quantity, so total revenue rises when price rises. This happens for necessities with no easy substitute, insulin, petrol in the short run, salt, which is exactly why such goods are common targets for taxes (the tax raises revenue without destroying much of the market) and why their sellers have real pricing power.',
          typical: 'Rough real-world estimates: petrol in the short run |E| ≈ 0.2–0.3 (very inelastic); restaurant meals |E| ≈ 1–2 (elastic); a specific brand within a competitive category can be |E| ≈ 3+ (very elastic) even if the whole product category is not.',
        },
        { t: 'callout', tone: 'fact', title: 'The diamond–water paradox', text: 'Adam Smith asked why water, essential to life, is cheap, while diamonds, useless for survival, are expensive. The answer is at the margin: water is plentiful, so one more litre is worth little; diamonds are scarce, so one more is worth a lot.' },
      ],
    },
  ],
  sources: ['Mankiw, N. G. (2021). *Principles of Economics* (9th ed.). Cengage.', 'Smith, A. (1776). *An Inquiry into the Nature and Causes of the Wealth of Nations*. W. Strahan and T. Cadell.'],
  related: ['finance/economics/inflation-rates', 'finance/foundations/markets'],
}

export default guide
