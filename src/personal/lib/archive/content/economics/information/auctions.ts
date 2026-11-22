import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'An auction is a way of finding out what people are willing to pay when the seller does not know. Auctions sell art and fish, government bonds and mobile spectrum, online ad slots and Singapore’s Certificates of Entitlement. The rules matter: they change how people bid, who wins and how much the seller collects. This guide works through the four classic formats, proves that honest bidding is a dominant strategy in a second-price auction, derives how much to shade a bid in a first-price auction, shows the surprising result that the formats raise the same revenue on average, and explains the winner’s curse and why reserve prices and careful design are worth billions.',
  nutshell: [
    'Four classic formats: **English** (rising, open), **Dutch** (falling, open), **first-price sealed bid** and **second-price sealed bid** (Vickrey).',
    'In a **second-price** auction, bidding your true value is a **dominant strategy**.',
    'In a **first-price** auction you should **shade** your bid below your value: with n bidders and values spread evenly, bid **(n − 1)/n** of your value.',
    '**Revenue equivalence**: under standard assumptions all four formats give the seller the same expected revenue.',
    'When the item’s value is common but uncertain, the winner tends to be the one who **overestimated** most: the **winner’s curse**.',
  ],
  sections: [
    {
      id: 'formats',
      title: 'Four formats and two equivalences',
      lead: 'Open and sealed, first and second price.',
      blocks: [
        {
          t: 'table',
          head: ['Format', 'How it works', 'Winner pays', 'Used for'],
          rows: [
            ['English (ascending)', 'Price rises; bidders drop out; last one left wins', 'Roughly the second-highest value (just above where the last rival quit)', 'Art, antiques, property, eBay (via proxy bidding)'],
            ['Dutch (descending)', 'Price falls until someone shouts "mine"', 'Their own bid', 'Dutch flower auctions, fish markets'],
            ['First-price sealed bid', 'Everyone submits one secret bid; highest wins', 'Their own bid', 'Government procurement, many tenders, display ads since 2019'],
            ['Second-price sealed bid (Vickrey)', 'Secret bids; highest wins', 'The second-highest bid', 'Theory benchmark; the logic behind many online ad auctions'],
          ],
        },
        {
          t: 'diagram',
          title: 'Strategic equivalences (private values)',
          nodes: [
            { id: 'e', label: 'English auction', col: 0, row: 0, tone: 'teal' },
            { id: 's', label: 'Second-price sealed bid', col: 2, row: 0, tone: 'teal' },
            { id: 'd', label: 'Dutch auction', col: 0, row: 2, tone: 'orange' },
            { id: 'f', label: 'First-price sealed bid', col: 2, row: 2, tone: 'orange' },
          ],
          edges: [
            { from: 'e', to: 's', label: 'same outcome: stay in to your value' },
            { from: 'd', to: 'f', label: 'identical: you pick a price before you learn others’' },
          ],
          caption: 'In a Dutch auction you decide in advance at what price to claim the item, and learn nothing until someone claims it: exactly like writing that price as a sealed first-price bid. In an English auction with private values you stay in until the price reaches your value, so the winner pays the second-highest value, as in a Vickrey auction.',
        },
      ],
    },
    {
      id: 'vickrey',
      title: 'Second-price auctions: honesty is the best policy',
      lead: 'William Vickrey’s 1961 result.',
      blocks: [
        {
          t: 'proof',
          claim: 'In a second-price sealed-bid auction, bidding your true value v is a weakly dominant strategy.',
          given: ['You value the item at v. The highest rival bid is m, which you do not know. The highest bid wins and pays the second-highest bid.'],
          method: 'direct',
          steps: [
            { statement: 'If m < v and you bid v, you win and pay m, gaining v − m > 0.', reason: 'Your bid exceeds m; the price is m.' },
            { statement: 'Bidding more than v changes nothing when m < v (you still win and pay m), and when m > v it can make you win and pay m > v: a loss.', reason: 'Overbidding only adds bad wins.' },
            { statement: 'Bidding less than v changes nothing when m is below your bid, and when m lies between your bid and v you lose an item you would have bought at a profit.', reason: 'Underbidding only adds lost good wins.' },
            { statement: 'So bidding v does at least as well as any other bid, whatever m is, and strictly better for some m.', reason: 'The definition of weak dominance.' },
          ],
          note: 'The price you pay does not depend on your own bid, only on whether you win. That separates "do I want it at this price?" from "what will I pay?", and makes honesty optimal. It is why eBay’s proxy bidding asks for your maximum.',
        },
        {
          t: 'example',
          title: 'Three bidders for a painting',
          lines: [
            { label: 'Values', text: 'Ana $900, Ben $700, Chen $400' },
            { label: 'Second-price', text: 'Everyone bids their value; Ana wins and pays $700' },
            { label: 'English', text: 'Chen drops at $400, Ben at $700; Ana wins at about $700' },
            { label: 'First-price', text: 'Ana bids below $900 (say $750), Ben below $700; Ana wins and pays her own bid' },
          ],
        },
      ],
    },
    {
      id: 'first-price',
      title: 'First-price auctions: how much to shade',
      lead: 'Trading the chance of winning against the profit if you do.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\max_b \;(v - b)\cdot \Pr(\text{win} \mid b), \qquad \text{values } \sim U[0, 1] \;\Rightarrow\; b^*(v) = \frac{n - 1}{n}\,v`,
          plain: 'In a first-price auction you pay what you bid, so bidding your value guarantees zero profit. Bid lower and you profit if you win, but win less often. The best bid balances the two. With values spread evenly between 0 and 1 and n bidders, everyone bids (n − 1)/n of their value: half with two bidders, nine-tenths with ten.',
          syntax: [
            { sym: String.raw`\max_b`, say: 'Read "choose b to maximise".' },
            { sym: String.raw`\Pr(\text{win} \mid b)`, say: 'The probability of winning if you bid b.' },
            { sym: String.raw`U[0, 1]`, say: 'Values uniformly distributed between 0 and 1 (think: 0 to $1,000).' },
          ],
          where: [
            { sym: 'v', def: 'Your private value' },
            { sym: 'b', def: 'Your bid' },
            { sym: 'n', def: 'The number of bidders' },
          ],
          worked: {
            title: 'Deriving the two-bidder case',
            steps: [
              String.raw`Guess that your rival bids half their value: \(b_2 = v_2 / 2\).`,
              String.raw`You win with bid b if \(v_2/2 < b\), i.e. \(v_2 < 2b\), which happens with probability \(2b\).`,
              String.raw`Expected profit: \((v - b) \cdot 2b = 2vb - 2b^2\).`,
              String.raw`Derivative: \(2v - 4b = 0\), so \(b = v/2\). Your best response is also to bid half your value, confirming the guess.`,
              String.raw`With a value of $800, bid $400. With ten rivals (n = 11) bid \(10/11 \times 800 \approx \$727\).`,
            ],
            why: ['a candidate equilibrium', 'a uniform value is below 2b with probability 2b', 'profit if you win times the chance of winning', 'maximise', 'more competition, less shading'],
            answer: 'Bid half your value against one rival. As rivals multiply, competition forces bids up towards true values.',
          },
        },
        {
          t: 'plot',
          title: 'Equilibrium bids in a first-price auction',
          x: [0, 1],
          y: [0, 1],
          xLabel: 'your value v',
          yLabel: 'your bid',
          curves: [
            { f: (v: number) => v, label: 'bid = value (second-price)', dashed: true },
            { f: (v: number) => v / 2, label: 'n = 2' },
            { f: (v: number) => (3 * v) / 4, label: 'n = 4' },
            { f: (v: number) => (9 * v) / 10, label: 'n = 10' },
          ],
        },
      ],
    },
    {
      id: 'revenue',
      title: 'Revenue equivalence and reserve prices',
      lead: 'Why the format often does not matter, and when it does.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\mathbb{E}[\text{revenue}] = \mathbb{E}[v_{(2)}] = \frac{n - 1}{n + 1} \quad\text{(first- and second-price, values } \sim U[0,1])`,
          plain: 'In a second-price auction the seller collects the second-highest value. In a first-price auction the winner bids (n − 1)/n of the highest value. Averaged over all possible values, the two come to exactly the same number. This is the revenue equivalence theorem: with risk-neutral bidders, independent private values and the same rule for who wins, every standard format raises the same expected revenue.',
          syntax: [
            { sym: String.raw`v_{(2)}`, say: 'The second-highest of the n values (the second order statistic from the top).' },
            { sym: String.raw`\frac{n - 1}{n + 1}`, say: 'The average second-highest of n uniform draws.' },
          ],
          worked: {
            steps: [
              String.raw`For n uniform draws, the expected highest value is \(n/(n + 1)\) and the expected second-highest is \((n - 1)/(n + 1)\).`,
              String.raw`Second-price revenue: \((n - 1)/(n + 1)\).`,
              String.raw`First-price revenue: \(\tfrac{n - 1}{n} \times \tfrac{n}{n + 1} = \tfrac{n - 1}{n + 1}\). The same.`,
              String.raw`n = 2: \(1/3\). n = 5: \(4/6 = 0.667\). n = 10: \(9/11 = 0.818\).`,
            ],
            why: ['a standard order-statistics result', 'pay the second value', 'bid shading times the highest value', 'competition raises revenue fast'],
            answer: 'More bidders matter far more than the choice of format: going from 2 to 10 bidders raises expected revenue by about 145%.',
          },
        },
        {
          t: 'plot',
          title: 'Expected revenue against the number of bidders (values uniform on 0–1)',
          x: [1, 20],
          y: [0, 1],
          xLabel: 'bidders n',
          yLabel: 'expected price',
          data: [
            { pts: Array.from({ length: 20 }, (_, i) => [i + 1, i / (i + 2)] as [number, number]), label: 'no reserve', dots: true },
            { pts: [[1, 0.25], [2, 0.4167], [3, 0.5312], [4, 0.6125], [5, 0.6719], [6, 0.7165], [8, 0.7782], [10, 0.8183], [15, 0.875], [20, 0.9048]], label: 'optimal reserve 0.5', dots: true },
          ],
          caption: 'A reserve price adds the most when bidders are few. With one bidder and no reserve the item would go for nothing; a reserve of 0.5 earns 0.25 on average.',
        },
        {
          t: 'math',
          tex: String.raw`\text{optimal reserve } r^*: \quad r^* - \frac{1 - F(r^*)}{f(r^*)} = v_0 \;\;\Rightarrow\;\; r^* = \tfrac12 \;\text{ for } U[0,1],\ v_0 = 0`,
          plain: 'A seller can do better than any standard auction by setting a minimum price. It risks not selling, but forces the winner to pay more when only one bid is high. Roger Myerson (1981) showed the best reserve depends only on the value distribution and the seller’s own value, not on the number of bidders. For uniform values and a seller who values the item at nothing, it is one half.',
          syntax: [
            { sym: String.raw`F, f`, say: 'The cumulative distribution and the density of bidders’ values.' },
            { sym: String.raw`v_0`, say: 'The seller’s own value of keeping the item.' },
          ],
          worked: {
            steps: [
              String.raw`Uniform values: \(F(r) = r\), \(f(r) = 1\). The condition is \(r - (1 - r) = 0\), so \(r^* = 0.5\).`,
              String.raw`Two bidders with reserve 0.5: expected revenue \(5/12 \approx 0.417\), against \(1/3 \approx 0.333\) with no reserve.`,
              String.raw`The cost: with probability \(0.5^2 = 25\%\) both values are below 0.5 and the item goes unsold.`,
            ],
            why: ['solve Myerson’s condition', 'a 25% gain', 'the risk the seller accepts'],
            answer: 'A reserve at half the top value raises expected revenue by a quarter with two bidders. It is inefficient (sometimes a bidder who values the item does not get it), the monopolist’s trade-off again.',
          },
        },
      ],
    },
    {
      id: 'curse',
      title: 'The winner’s curse',
      lead: 'Winning is bad news about your estimate.',
      blocks: [
        { t: 'p', text: 'When the item is worth the same to everyone but nobody knows exactly how much (oil under a plot of seabed, a jar of coins, a company being taken over), each bidder has a noisy estimate. The winner is whoever estimated highest, and the highest of many noisy estimates is usually an overestimate. Bidders who bid their estimate therefore lose money on average when they win: the **winner’s curse**. Rational bidders shade more, the more rivals there are.' },
        {
          t: 'math',
          tex: String.raw`s_i = V + \varepsilon_i, \;\; \varepsilon_i \sim U[-10, 10]: \qquad \mathbb{E}\big[\max_i \varepsilon_i\big] = 10\,\frac{n - 1}{n + 1}`,
          plain: 'Each bidder’s estimate is the true value plus an error of up to $10 either way. The winner is the one with the most optimistic error. With 2 bidders it averages $3.33 too high; with 10 bidders $8.18 too high.',
          syntax: [
            { sym: String.raw`s_i`, say: 'Bidder i’s signal (estimate).' },
            { sym: String.raw`\max_i \varepsilon_i`, say: 'The largest error among the n bidders: the winner’s error.' },
          ],
          worked: {
            steps: [
              String.raw`The largest of n uniform draws on \([-10, 10]\) averages \(-10 + 20 \cdot \tfrac{n}{n + 1} = 10 \cdot \tfrac{n - 1}{n + 1}\).`,
              String.raw`n = 2: \(10 \times 1/3 \approx 3.33\). n = 10: \(10 \times 9/11 \approx 8.18\).`,
              String.raw`A bidder who bids their estimate in a 10-bidder first-price auction loses about $8.18 every time they win.`,
            ],
            why: ['an order-statistics result, like the revenue formula', 'more bidders, more optimistic winners', 'the curse'],
            answer: 'In common-value auctions, bid as if your estimate is the highest, because if you win, it was. The more bidders, the more you should shade.',
          },
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Oil leases', tag: 'Capen, Clapp and Campbell, 1971', body: 'Engineers at Atlantic Richfield argued that oil companies winning US offshore lease auctions in the 1950s and 60s earned poor returns because the winners systematically overestimated reserves. The paper gave the curse its name.' },
            { title: 'The jar of coins', tag: 'Bazerman and Samuelson, 1983', body: 'MBA students bid for jars of coins worth $8. The average bid was below $8, but the average winning bid was over $10: the winners lost money.' },
            { title: 'Takeovers', tag: 'paying too much', body: 'Acquirers in competitive bidding contests often see their own share price fall when they win, a sign the market thinks they overpaid.' },
            { title: 'Free agents in sport', tag: 'the highest bidder', body: 'The team that pays most for a star is the one most optimistic about them, so big contracts often disappoint.' },
          ],
        },
      ],
    },
    {
      id: 'design',
      title: 'Auctions in practice',
      lead: 'Design worth billions.',
      blocks: [
        {
          t: 'table',
          head: ['Auction', 'Design', 'Lesson'],
          rows: [
            ['Singapore COE (since 1990)', 'Multi-unit, open online bidding with revisions, uniform price (all winners pay the lowest successful bid)', 'A uniform price lets each bidder for one car bid close to their value. See [COE](@economics/market-failure/singapore-cars-roads-carbon).'],
            ['US spectrum auctions (from 1994)', 'Simultaneous multiple-round ascending auction designed by Milgrom and Wilson', 'Selling related licences together lets bidders build sensible packages; it raised far more than lotteries had. Milgrom and Wilson shared the 2020 Nobel Prize.'],
            ['UK 3G auction (2000)', 'Ascending auction with more licences reserved for newcomers', 'Raised about £22.5 billion, around 2.5% of GDP, partly because the design guaranteed real competition.'],
            ['Online search ads', 'Generalised second-price, then quality-weighted versions', 'Billions of auctions a day; bid shading and reserve prices tuned by machine learning.'],
            ['Government bonds', 'Sealed-bid auctions for Treasury bills and bonds', 'Many issuers moved to uniform-price auctions to encourage participation and reduce the winner’s curse.'],
          ],
        },
        {
          t: 'dodont',
          do: ['In a second-price or English auction, bid (or stay in up to) your true value', 'In a first-price auction, shade your bid, less as rivals multiply', 'In a common-value auction, ask what your estimate implies if it is the highest', 'As a seller, attract more bidders before fiddling with the format'],
          dont: ['Get caught up in an English auction and go past your value ("auction fever")', 'Bid your estimate in a common-value auction', 'Forget collusion: bidders can signal to each other to keep prices low, which design must prevent'],
        },
      ],
    },
  ],
  sources: [
    'Vickrey, W. (1961). Counterspeculation, auctions, and competitive sealed tenders. *Journal of Finance*, 16(1), 8–37.',
    'Myerson, R. B. (1981). Optimal auction design. *Mathematics of Operations Research*, 6(1), 58–73.',
    'Klemperer, P. (2004). *Auctions: Theory and Practice*. Princeton University Press.',
    'Milgrom, P. (2004). *Putting Auction Theory to Work*. Cambridge University Press.',
    'Capen, E. C., Clapp, R. V., and Campbell, W. M. (1971). Competitive bidding in high-risk situations. *Journal of Petroleum Technology*, 23(6), 641–653.',
    'Bazerman, M. H., and Samuelson, W. F. (1983). I won the auction but don’t want the prize. *Journal of Conflict Resolution*, 27(4), 618–634.',
  ],
  related: ['economics/market-failure/singapore-cars-roads-carbon', 'economics/information/lemons-and-signalling', 'game-theory/information-and-design/auctions'],
}

export default guide
