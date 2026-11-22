import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Every payment into or out of a country is recorded in its balance of payments: the cars it exports, the dividends it pays to foreign shareholders, the bonds it sells to foreign investors. The accounts must balance, which means a country that buys more from the world than it sells must borrow the difference or sell assets. This guide sets out the accounts, derives the identity that links the trade balance to saving and investment (and explains why tariffs rarely shrink a deficit), explains why Singapore has run some of the largest surpluses in the world, and then turns to the hardest choice in open-economy policy: the impossible trinity, which says a country can have only two of a fixed exchange rate, free capital movement and its own monetary policy.',
  nutshell: [
    'The **current account** records trade in goods and services and income flows; the **financial account** records purchases and sales of assets. They **mirror** each other.',
    'The current account equals **national saving minus investment**: **CA = S − I**. A deficit means a country invests more than it saves and borrows the rest.',
    'Singapore’s large surpluses reflect **very high national saving**, from CPF, government surpluses and corporate profits, not tariffs or a cheap currency alone.',
    '**Uncovered interest parity**: with free capital flows, a country’s interest rate equals the foreign rate plus expected depreciation.',
    'The **impossible trinity**: pick two of a fixed exchange rate, open capital flows and independent monetary policy. Singapore manages its **exchange rate** and accepts that its interest rates follow world rates.',
  ],
  sections: [
    {
      id: 'accounts',
      title: 'The accounts',
      lead: 'What goes where.',
      blocks: [
        {
          t: 'table',
          head: ['Account', 'Records', 'Example entries'],
          rows: [
            ['Current account: goods', 'Exports minus imports of goods', 'Exports of chips and pharmaceuticals; imports of oil and machinery'],
            ['Current account: services', 'Exports minus imports of services', 'Shipping, finance, tourism, consulting, intellectual property'],
            ['Current account: primary income', 'Investment income and wages earned across borders', 'Dividends paid to foreign owners of local firms; interest earned on foreign bonds'],
            ['Current account: secondary income', 'Transfers', 'Remittances sent home by foreign workers; aid'],
            ['Capital account', 'Small one-off capital transfers', 'Debt forgiveness, transfer of patents or land rights'],
            ['Financial account', 'Net acquisition of foreign assets minus foreign acquisition of local assets', 'Foreign direct investment, portfolio investment, bank flows, reserve assets'],
          ],
        },
        {
          t: 'math',
          tex: String.raw`\underbrace{CA}_{\text{current}} + \underbrace{KA}_{\text{capital}} = \underbrace{FA}_{\text{financial (net lending abroad)}} \quad (+\ \text{errors and omissions})`,
          plain: 'A country that earns more from the world than it spends (a current-account surplus) must be using the difference to buy foreign assets: lending to the rest of the world. A deficit must be financed by borrowing or by selling assets to foreigners. The two sides are the same flows seen from different angles.',
          syntax: [{ sym: String.raw`FA`, say: 'Net lending abroad: positive when residents acquire more foreign assets than foreigners acquire local ones.' }],
          worked: {
            steps: [
              String.raw`A country exports $500 billion of goods and services and imports $450 billion; it pays $20 billion more income abroad than it receives; workers send $5 billion home.`,
              String.raw`Current account: \(500 - 450 - 20 - 5 = +25\) billion.`,
              String.raw`So it must acquire $25 billion of net foreign assets: its central bank, pension funds or firms buy foreign bonds, shares or companies.`,
            ],
            why: ['the flows', 'the surplus', 'the mirror image'],
            answer: 'A $25 billion current-account surplus is $25 billion of lending to the rest of the world. Surplus countries are net creditors; deficit countries are net debtors.',
          },
        },
      ],
    },
    {
      id: 'saving',
      title: 'The saving–investment identity',
      lead: 'Why the deficit is a macroeconomic outcome.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`Y = C + I + G + NX, \quad S \equiv Y - C - G \;\;\Rightarrow\;\; NX = S - I`,
          plain: 'National saving is income not consumed by households or government. Rearranging the spending identity shows that net exports equal saving minus investment. (Adding net income from abroad turns this into the full current account.) If a country invests more than it saves, it must import the difference in goods, financed by foreign borrowing.',
          syntax: [
            { sym: String.raw`\equiv`, say: 'Read "is defined as".' },
            { sym: String.raw`S`, say: 'National saving: private plus public.' },
          ],
          worked: {
            steps: [
              String.raw`National income 100. Households consume 55, government buys 15: national saving \(S = 100 - 55 - 15 = 30\).`,
              String.raw`Investment \(I = 25\). Net exports \(= 30 - 25 = +5\): a surplus.`,
              String.raw`A tariff that shifts spending from imports to local goods but leaves saving and investment unchanged cannot change net exports: the currency appreciates or other imports and exports adjust.`,
            ],
            why: ['saving is what is not consumed', 'the identity', 'why tariffs rarely fix deficits'],
            answer: 'The trade balance is decided by saving and investment. To shrink a deficit, a country must save more (including the government running a smaller deficit) or invest less.',
          },
        },
        {
          t: 'math',
          tex: String.raw`CA = \underbrace{(S_{private} - I)}_{\text{private balance}} + \underbrace{(T - G - TR)}_{\text{government balance}}`,
          plain: 'Splitting saving into private and public parts shows the "twin deficits" link: if the government borrows more and private saving and investment do not change, the current account worsens by the same amount.',
          syntax: [{ sym: String.raw`T - G - TR`, say: 'The government budget balance: taxes minus purchases and transfers.' }],
          worked: {
            steps: [
              String.raw`Private saving 25, investment 25, government deficit 3: \(CA = 0 - 3 = -3\).`,
              String.raw`The government cuts its deficit to 0 and private behaviour is unchanged: \(CA = 0\).`,
              String.raw`If instead households save 2 more to offset (partial Ricardian behaviour), the original deficit gave \(CA = 2 - 3 = -1\).`,
            ],
            why: ['a balanced private sector', 'fiscal consolidation closes the gap', 'private saving can partly offset'],
            answer: 'Large budget deficits often go with current-account deficits (the US in the 1980s and 2000s), but the link is not one-for-one because private saving and investment respond.',
          },
        },
        {
          t: 'bars',
          title: 'Saving and investment: a Singapore-like economy against a deficit economy (% of GDP, stylised)',
          items: [
            { label: 'National saving', value: 42, group: 'Surplus economy (Singapore-like)' },
            { label: 'Investment', value: 24 },
            { label: 'Current account', value: 18 },
            { label: 'National saving', value: 17, group: 'Deficit economy' },
            { label: 'Investment', value: 21 },
            { label: 'Current account', value: -4 },
          ],
          unit: '% of GDP',
          zero: true,
          caption: 'Stylised figures to show the identity. Singapore’s gross national saving has been around 40% or more of national income and its current-account surplus roughly 15–20% of GDP in recent years (see the Department of Statistics for current data).',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Mandatory saving', body: 'CPF contributions of up to 37% of wages lift household saving far above most countries.' },
            { title: 'Government surpluses', body: 'Budgets balanced over each term plus retained investment returns make the public sector a large net saver. See [Singapore’s fiscal model](@economics/fiscal/singapore-fiscal-model).' },
            { title: 'Corporate saving', body: 'Highly profitable firms, including multinationals, retain earnings; some of their profits flow out as primary income, which is why the goods and services surplus is larger than the current account.' },
            { title: 'Demographics', body: 'A large working-age population saving for retirement raises saving; as the population ages and retirees draw down, saving may fall over time.' },
          ],
        },
      ],
    },
    {
      id: 'parity',
      title: 'Exchange rates and interest parity',
      lead: 'Linking rates across borders.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`i = i^* + \frac{\mathbb{E}[e_{t+1}] - e_t}{e_t} \qquad (e = \text{local currency per unit of foreign currency})`,
          plain: 'Uncovered interest parity says that if money can move freely, investing at home must pay the same as investing abroad once expected currency movements are counted. If the local currency is expected to appreciate (e to fall), local interest rates can be lower than foreign ones, because foreign investors gain on the currency.',
          syntax: [
            { sym: String.raw`i, i^*`, say: 'The domestic and foreign interest rates.' },
            { sym: String.raw`\mathbb{E}[e_{t+1}]`, say: 'The expected exchange rate a year from now.' },
          ],
          worked: {
            title: 'Singapore dollar rates against US rates',
            steps: [
              String.raw`US one-year rate: 5%.`,
              String.raw`MAS policy implies a gradual appreciation of the S$ trade-weighted exchange rate; suppose markets expect the S$ to appreciate about 1.5–2% a year against the US$.`,
              String.raw`Parity: \(i_{SG} \approx 5\% - 1.75\% \approx 3.25\%\).`,
            ],
            why: ['the foreign rate', 'expected appreciation is negative depreciation', 'the domestic rate that removes any arbitrage'],
            answer: 'Singapore interest rates have tended to sit below US rates by roughly the expected appreciation of the Singapore dollar. Parity holds only roughly in practice (risk premiums and the "carry trade" puzzle), but it explains the pattern. See the [forex guide](@finance/forex/interest-rate-parity-and-carry) for the covered version.',
          },
        },
        {
          t: 'math',
          tex: String.raw`\text{real exchange rate } \; q = \frac{e \cdot P^*}{P}`,
          plain: 'The real exchange rate compares the price of a basket of goods abroad, converted to local currency, with the same basket at home. A real appreciation (q falls) makes a country’s goods dearer to foreigners and imports cheaper. It can happen through the nominal rate or through faster inflation at home.',
          syntax: [{ sym: String.raw`P, P^*`, say: 'The domestic and foreign price levels.' }],
          worked: {
            steps: [
              String.raw`\(e = 1.35\) S$ per US$; a basket costs US$100 in the US and S$140 in Singapore.`,
              String.raw`\(q = 1.35 \times 100 / 140 \approx 0.96\): the US basket costs 96% of the Singapore one.`,
              String.raw`If Singapore inflation runs 2 points above US inflation with e unchanged, q falls about 2%: a real appreciation.`,
            ],
            why: ['the inputs', 'compare the baskets in one currency', 'inflation differentials move the real rate'],
            answer: 'Because the real rate matters for competitiveness, MAS can fight imported inflation by letting the nominal S$NEER rise.',
          },
        },
      ],
    },
    {
      id: 'trilemma',
      title: 'The impossible trinity',
      lead: 'Pick two.',
      blocks: [
        {
          t: 'diagram',
          title: 'The trilemma: three goals, any two at a time',
          nodes: [
            { id: 'f', label: 'Fixed or managed exchange rate', col: 1, row: 0, tone: 'teal' },
            { id: 'k', label: 'Free capital movement', col: 0, row: 2, tone: 'orange' },
            { id: 'm', label: 'Independent interest-rate policy', col: 3, row: 2, tone: 'lavender' },
            { id: 'hk', label: 'Hong Kong, euro members', sub: 'fixed + open: import foreign monetary policy', shape: 'pill', col: 0, row: 1, tone: 'mint' },
            { id: 'cn', label: 'China (largely)', sub: 'fixed-ish + own policy: capital controls', shape: 'pill', col: 3, row: 1, tone: 'mint' },
            { id: 'us', label: 'US, UK, Japan', sub: 'open + own policy: floating currency', shape: 'pill', col: 1, row: 3, tone: 'mint' },
          ],
          edges: [
            { from: 'f', to: 'k', dashed: true },
            { from: 'k', to: 'm', dashed: true },
            { from: 'm', to: 'f', dashed: true },
            { from: 'f', to: 'hk' },
            { from: 'k', to: 'hk' },
            { from: 'f', to: 'cn' },
            { from: 'm', to: 'cn' },
            { from: 'k', to: 'us' },
            { from: 'm', to: 'us' },
          ],
          caption: 'Each side of the triangle is a feasible combination; the third corner must be given up.',
        },
        {
          t: 'proof',
          claim: 'With a fixed exchange rate and free capital movement, the domestic interest rate must equal the foreign one.',
          given: ['Uncovered interest parity holds because capital moves freely; the exchange rate is credibly fixed.'],
          method: 'direct',
          steps: [
            { statement: String.raw`A credible peg means \(\mathbb{E}[e_{t+1}] = e_t\), so expected depreciation is zero.`, reason: 'Nobody expects the rate to move.' },
            { statement: String.raw`Interest parity then gives \(i = i^* + 0 = i^*\).`, reason: 'Substitute into UIP.' },
            { statement: String.raw`If the central bank tried to set \(i < i^*\), money would flow out to earn \(i^*\), pressuring the peg until the bank raised \(i\) or abandoned the peg.`, reason: 'Arbitrage.' },
          ],
          note: 'This is why Hong Kong’s interest rates track US rates under its currency board, and why giving up any one corner relaxes the constraint: float the currency, control capital, or accept the foreign interest rate.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Singapore’s choice', tag: 'managed float, open capital', body: 'MAS manages the S$NEER within an undisclosed band with a policy slope, and capital moves freely. So MAS gives up setting interest rates: domestic rates are determined largely by foreign rates and expected S$ appreciation. For an economy where imports are a large share of consumption, the exchange rate is the more powerful lever on inflation. See [MAS](@banking/theory/central-banking-singapore).' },
            { title: 'Hong Kong', tag: 'currency board', body: 'Since 1983 the Hong Kong dollar has been pegged to the US dollar (within 7.75–7.85 since 2005), with free capital flows, so Hong Kong imports US monetary policy, even when its own economy needs something different.' },
            { title: 'The 1997 Asian crisis', tag: 'when the trinity bites', body: 'Thailand pegged the baht to the dollar with open capital markets and large short-term foreign borrowing. When money rushed out in 1997, it could not hold both the peg and its interest rates; it floated in July 1997, and the crisis spread across the region.' },
            { title: 'The euro', tag: 'the extreme peg', body: 'Euro members share one currency and one interest rate set by the ECB. They gave up independent monetary policy entirely, which is why fiscal rules and transfers between members matter so much.' },
          ],
        },
        {
          t: 'metric',
          name: 'the current-account balance (% of GDP)',
          shows: 'Whether a country is saving more than it invests (a surplus, lending abroad) or investing more than it saves (a deficit, borrowing abroad), scaled by the size of the economy.',
          eli5: 'A household that spends more than it earns must borrow or sell something. A country is the same: a deficit means it is borrowing from, or selling assets to, the rest of the world.',
          higher: 'Large surpluses mean a country is accumulating foreign assets. They can reflect prudent saving for an ageing population or weak domestic demand; partners sometimes see them as a sign of an undervalued currency.',
          lower: 'Large, persistent deficits mean rising foreign debt. They are sustainable if financing productive investment in a fast-growing economy, but risky if financing consumption, especially in foreign currency, since lenders can stop lending suddenly ("sudden stops").',
          typical: 'Deficits above about 4–5% of GDP for several years are often treated as a warning sign. Singapore’s surplus has been far above that on the positive side; the US has run deficits of roughly 2–4% of GDP for most of the past four decades.',
        },
      ],
    },
  ],
  sources: [
    'International Monetary Fund (2009). *Balance of Payments and International Investment Position Manual* (6th ed.).',
    'Obstfeld, M., Shambaugh, J. C., and Taylor, A. M. (2005). The trilemma in history. *Review of Economics and Statistics*, 87(3), 423–438.',
    'Mundell, R. A. (1963). Capital mobility and stabilization policy under fixed and flexible exchange rates. *Canadian Journal of Economics and Political Science*, 29(4), 475–485.',
    'Monetary Authority of Singapore. Monetary policy framework and the S$NEER. mas.gov.sg.',
    'Department of Statistics Singapore. Balance of payments. singstat.gov.sg.',
  ],
  related: ['economics/trade/comparative-advantage', 'banking/theory/central-banking-singapore', 'finance/forex/interest-rate-parity-and-carry'],
}

export default guide
