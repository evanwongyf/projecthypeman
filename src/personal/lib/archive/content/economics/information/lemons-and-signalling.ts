import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The seller of a used car knows whether it is reliable; the buyer does not. The applicant for health insurance knows their own habits; the insurer does not. When one side of a market knows more about quality than the other, the market can shrink or collapse even though every trade would benefit both sides. George Akerlof showed this in 1970 with a paper about used cars, and with Michael Spence and Joseph Stiglitz shared the 2001 Nobel Prize for the economics of information. This guide works through adverse selection in cars and insurance, and the two ways markets fight back: signalling, where the informed side proves its type, and screening, where the uninformed side designs a menu that makes people reveal it.',
  nutshell: [
    '**Adverse selection**: when quality is hidden, the price reflects average quality, so the best sellers (or the lowest-risk buyers) **leave**, lowering average quality further.',
    'The market can **unravel** completely: only "lemons" are left.',
    'In insurance this is the **death spiral**: rising premiums drive out the healthy, which raises premiums again. Mandates such as **MediShield Life** break it.',
    '**Signalling**: the informed side takes a costly action that low types find too expensive to copy (education, warranties).',
    '**Screening**: the uninformed side offers a **menu** (deductibles, contract types) so that each type picks the one meant for it.',
  ],
  sections: [
    {
      id: 'lemons',
      title: 'The market for lemons',
      lead: 'How hidden quality destroys trade.',
      blocks: [
        {
          t: 'table',
          head: ['Car type', 'Share of cars', 'Worth to the owner (seller)', 'Worth to a buyer'],
          rows: [
            ['Good ("peach")', '50%', '$10,000', '$12,000'],
            ['Bad ("lemon")', '50%', '$4,000', '$5,000'],
          ],
          caption: 'Every car is worth more to a buyer than to its owner, so with full information every car would be sold: peaches for $10,000–12,000, lemons for $4,000–5,000.',
        },
        {
          t: 'math',
          tex: String.raw`\text{buyer pays at most } \;0.5 \times 12{,}000 + 0.5 \times 5{,}000 = 8{,}500 \;<\; 10{,}000`,
          plain: 'If buyers cannot tell the two types apart, they will pay only what an average car is worth to them. That is less than a good car is worth to its owner, so good cars are not offered. Buyers who reason this through realise that only lemons are for sale and pay only $5,000.',
          syntax: [{ sym: String.raw`0.5 \times 12{,}000 + 0.5 \times 5{,}000`, say: 'The expected value of a randomly chosen car to a buyer: each value times its probability.' }],
          worked: {
            steps: [
              String.raw`Buyers offer at most the expected value of an unknown car: $8,500.`,
              String.raw`Owners of good cars value them at $10,000, more than $8,500, so they keep them.`,
              String.raw`Only lemons are offered. A buyer who knows this values a car on offer at $5,000.`,
              String.raw`Lemons trade at $4,000–5,000. No good car is sold, although each would have been worth $2,000 more to a buyer than to its owner.`,
            ],
            why: ['pricing at the average', 'the best sellers exit', 'buyers update their beliefs', 'the market collapses to the bottom'],
            answer: 'Half the potential gains from trade, $2,000 on every good car, are lost purely because quality cannot be seen. Bad quality drives good quality out of the market.',
          },
        },
        {
          t: 'cycle',
          items: [
            { name: 'Price reflects average quality', body: 'Buyers cannot see quality, so they pay for the average.' },
            { name: 'Best sellers withdraw', body: 'Owners of above-average goods find the price too low.' },
            { name: 'Average quality falls', body: 'What remains on the market is worse.' },
            { name: 'Buyers lower their offer', body: 'And the next tier of good sellers leaves.' },
          ],
          caption: 'The unravelling loop. It stops only when the remaining sellers are content with the price or the market is empty.',
        },
        {
          t: 'math',
          tex: String.raw`q \sim U[0, 100], \;\; \text{seller values } q, \;\text{buyer } kq: \qquad \text{at price } p,\; \mathbb{E}[q \mid q \le p] = \tfrac{p}{2} \;\Rightarrow\; \text{buyers pay } \tfrac{kp}{2} \ge p \iff k \ge 2`,
          plain: 'With qualities spread evenly from 0 to 100, at any price p only cars worth less than p to their owners are offered, and their average quality is p/2. Buyers will pay k times that. Unless buyers value cars at least twice as much as sellers, the price they will pay is always below p, so the price keeps falling and the market shrinks towards nothing.',
          syntax: [
            { sym: String.raw`q \sim U[0, 100]`, say: 'Read "q is uniformly distributed between 0 and 100": every quality level equally common.' },
            { sym: String.raw`\mathbb{E}[q \mid q \le p]`, say: 'Read "the expected value of q given q is at most p": the average quality of the cars actually offered.' },
          ],
          worked: {
            steps: [
              String.raw`Let \(k = 1.5\). Start at the average of all cars: buyers pay \(1.5 \times 50 = 75\).`,
              String.raw`At 75, cars of quality up to 75 are offered, average 37.5: buyers now pay \(1.5 \times 37.5 = 56.25\).`,
              String.raw`Next: \(1.5 \times 28.1 = 42.2\), then \(31.6\), then \(23.7\)…`,
              String.raw`Each round multiplies the price by \(k/2 = 0.75\), so it falls towards zero.`,
            ],
            why: ['the first offer', 'only the worse cars stay', 'repeat', 'a geometric decline'],
            answer: 'With k = 1.5 the market unravels completely, even though every single car is worth 50% more to some buyer than to its owner.',
          },
        },
        { t: 'econ-viz', viz: 'lemons' },
        {
          t: 'cards',
          cols: 3,
          items: [
            { title: 'Warranties', body: 'A seller who offers a warranty bears the cost if the car is bad, so only confident sellers offer long ones.' },
            { title: 'Inspections and certification', body: 'Independent checks (dealer certification, vehicle evaluation reports) make quality visible.' },
            { title: 'Reputation', body: 'Dealers who sell many cars over many years lose more from cheating than they gain. Platforms add ratings to build reputation fast.' },
          ],
        },
      ],
    },
    {
      id: 'insurance',
      title: 'Adverse selection in insurance: the death spiral',
      lead: 'When the buyer knows the risk.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{pooled premium} = \sum_i s_i\,c_i, \qquad \text{type } i \text{ buys if } WTP_i \ge \text{premium}`,
          plain: 'An insurer that cannot tell risks apart must charge everyone the average expected claim. Low-risk people, for whom that is a bad deal, drop out, so the average claim of those who remain rises, and so must the premium.',
          syntax: [
            { sym: String.raw`s_i`, say: 'The share of insured people of type i.' },
            { sym: String.raw`c_i`, say: 'Type i’s expected yearly claims.' },
          ],
          worked: {
            title: 'Two risk groups',
            steps: [
              String.raw`60% are low risk with expected claims of $1,000 a year; 40% are high risk with $4,000.`,
              String.raw`Each is willing to pay up to 30% above their expected claims for peace of mind: $1,300 and $5,200.`,
              String.raw`Pooled premium: \(0.6 \times 1000 + 0.4 \times 4000 = \$2{,}200\).`,
              String.raw`Low-risk people will pay only $1,300, so they drop out.`,
              String.raw`Only high risks remain: the premium rises to $4,000. They still buy (WTP $5,200), but the low-risk 60% are uninsured.`,
            ],
            why: ['the risk pool', 'risk-averse people pay above expected cost', 'the average expected claim', 'the pooled price is a bad deal for them', 'the spiral ends with only the riskiest'],
            answer: 'A market that could insure everyone ends up insuring only the 40% who need it most, at nearly double the original premium. With many risk levels, the spiral can run through several rounds.',
          },
        },
        {
          t: 'plot',
          title: 'The death spiral, round by round (illustrative)',
          x: [0, 5],
          y: [0, 6000],
          xLabel: 'round of repricing',
          yLabel: '$ a year',
          data: [
            { pts: [[0, 2200], [1, 2900], [2, 3600], [3, 4300], [4, 4900], [5, 5300]], label: 'premium', dots: true },
            { pts: [[0, 5000], [1, 3900], [2, 2800], [3, 1900], [4, 1200], [5, 800]], label: 'people insured (thousands)', dots: true, dashed: true },
          ],
          caption: 'A stylised spiral with many risk levels: each premium rise pushes out the healthiest remaining customers, raising the average claim and the next premium. The number insured is drawn on the same scale (5,000 means 5 million people).',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Mandatory pooling', tag: 'Singapore', body: 'MediShield Life, introduced in 2015, covers every Singapore citizen and permanent resident for life, including those with pre-existing conditions, with premiums paid largely from CPF MediSave. Because everyone is in the pool, low risks cannot leave and the spiral cannot start.' },
            { title: 'The individual mandate', tag: 'United States', body: 'The 2010 Affordable Care Act barred insurers from rejecting people with pre-existing conditions and, to stop healthy people waiting until they fell ill, fined those without cover. The fine was set to zero from 2019, a natural test that economists still debate.' },
            { title: 'Group insurance', tag: 'pooling by employer', body: 'Insuring all employees of a firm creates a pool not chosen by health, which is why employer schemes can offer cover without medical checks.' },
            { title: 'Underwriting', tag: 'finding the type', body: 'Insurers ask questions, require medical checks and price by age. This reduces adverse selection but excludes or penalises the sick, which societies often find unacceptable for health cover.' },
          ],
        },
      ],
    },
    {
      id: 'signalling',
      title: 'Signalling: proving your type',
      lead: 'Costly actions that only the good can afford.',
      blocks: [
        { t: 'p', text: 'Michael Spence (1973) asked why employers pay more to graduates. Part of the answer is that education raises productivity (human capital). Spence showed it can pay even if education taught nothing: if able people find studying less costly, a degree **signals** ability. For a signal to work, it must be cheaper for high types than for low types, so low types do not find it worth copying.' },
        {
          t: 'math',
          tex: String.raw`\underbrace{W_H - c_L\,e^* \le W_L}_{\text{low types do not copy}} \quad\text{and}\quad \underbrace{W_H - c_H\,e^* \ge W_L}_{\text{high types do signal}} \;\;\Rightarrow\;\; \frac{W_H - W_L}{c_L} \le e^* \le \frac{W_H - W_L}{c_H}`,
          plain: 'Employers pay the high wage to anyone with at least e* years of education. Low-ability workers must find e* years too costly to be worth the higher wage, and high-ability workers must find it worth it. Any e* between the two limits works, and the separating equilibrium works only because studying is cheaper for the able.',
          syntax: [
            { sym: String.raw`W_H, W_L`, say: 'The wages paid to people believed to be high- and low-productivity.' },
            { sym: String.raw`c_L, c_H`, say: 'The cost of one year of education to a low and a high type (effort, stress, fees, time).' },
            { sym: String.raw`e^*`, say: 'The education level employers treat as the signal.' },
          ],
          worked: {
            steps: [
              String.raw`High types produce $80,000 a year, low types $40,000. The wage gap is $40,000.`,
              String.raw`A year of study costs a low type $40,000 in effort and forgone earnings, a high type $20,000.`,
              String.raw`Low types do not copy if \(40{,}000 \le 40{,}000\,e^*\), i.e. \(e^* \ge 1\).`,
              String.raw`High types signal if \(40{,}000 \ge 20{,}000\,e^*\), i.e. \(e^* \le 2\).`,
              String.raw`The cheapest separating signal is \(e^* = 1\) year.`,
            ],
            why: ['the productivity gap employers want to detect', 'the key: the signal is cheaper for the able', 'the copying condition', 'the participation condition', 'any longer requirement wastes resources'],
            answer: 'Requiring 1 to 2 years of education separates the types. Note the uncomfortable implication: if education were pure signalling, its cost would be a waste to society, since it sorts people without making anyone more productive.',
          },
        },
        {
          t: 'table',
          head: ['Signal', 'Who sends it', 'Why low types cannot copy cheaply'],
          rows: [
            ['A degree from a selective university', 'Job applicants', 'Getting in and through is harder for the less able or less diligent'],
            ['A long warranty', 'Manufacturers and dealers', 'A firm making unreliable products would pay out on many claims'],
            ['Expensive advertising', 'New brands', 'Only worth it if customers who try the product come back'],
            ['Paying dividends', 'Listed companies', 'A firm without steady cash flow cannot keep paying'],
            ['Retaining a stake in an IPO', 'Founders', 'Founders who know the firm is weak prefer to sell out'],
          ],
        },
        { t: 'callout', tone: 'fact', title: 'The sheepskin effect', text: 'Studies find that the final year of a degree, the one that earns the certificate, raises earnings much more than the years before it. Labour economists call this the sheepskin effect (diplomas were once printed on sheepskin) and treat it as evidence that part of the return to education is signalling.' },
      ],
    },
    {
      id: 'screening',
      title: 'Screening: menus that make people reveal themselves',
      lead: 'The uninformed side moves first.',
      blocks: [
        { t: 'p', text: 'Michael Rothschild and Joseph Stiglitz (1976) showed that an insurer can sort customers it cannot tell apart by offering a choice: full cover at a high price, or partial cover (a high deductible) at a low price. High-risk customers, who expect to claim, value full cover more and take it; low-risk customers prefer the cheap partial policy. The menu makes people reveal their type through their choice.' },
        {
          t: 'table',
          head: ['Policy', 'Deductible', 'Annual premium', 'Chosen by', 'Why'],
          rows: [
            ['Full cover', '$0', '$4,000', 'High risk (expect $4,000 of claims)', 'They will claim often, so paying the deductible would cost them a lot'],
            ['Basic cover', '$3,000', '$700', 'Low risk (expect $1,000 of claims, mostly small)', 'They rarely claim, so the deductible seldom bites'],
          ],
          caption: 'An illustrative menu. Each type prefers its own policy, so the insurer can price each to its risk without knowing who is who. The cost: low-risk customers end up under-insured, the price of keeping high risks from choosing their policy.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Airlines', body: 'Cheap fares with conditions (Saturday-night stays, no changes) screen out business travellers, who value flexibility and so pay full fare.' },
            { title: 'Loans', body: 'Lenders offer lower rates for larger down payments or collateral; borrowers who know they are risky avoid putting more of their own money at stake.' },
            { title: 'Employment', body: 'Probation periods, commission-heavy pay and up-or-out promotion rules attract workers confident in their ability.' },
            { title: 'Software versions', body: '"Pro" versions with features only heavy users need let firms charge more to those who value them most (second-degree price discrimination is screening).' },
          ],
        },
        {
          t: 'diagram',
          title: 'Responses to hidden quality',
          nodes: [
            { id: 'p', label: 'Hidden information about type', shape: 'pill', col: 1, row: 0, tone: 'ink' },
            { id: 's', label: 'Signalling', sub: 'informed side acts: degrees, warranties', col: 0, row: 1, tone: 'teal' },
            { id: 'sc', label: 'Screening', sub: 'uninformed side offers a menu', col: 1, row: 1, tone: 'lavender' },
            { id: 'm', label: 'Mandates and pooling', sub: 'everyone in: MediShield Life', col: 2, row: 1, tone: 'mustard' },
            { id: 'r', label: 'Reputation and disclosure', sub: 'ratings, inspections, law', col: 1, row: 2, tone: 'mint' },
          ],
          edges: [
            { from: 'p', to: 's' },
            { from: 'p', to: 'sc' },
            { from: 'p', to: 'm' },
            { from: 's', to: 'r', dashed: true },
            { from: 'sc', to: 'r', dashed: true },
          ],
        },
      ],
    },
  ],
  sources: [
    'Akerlof, G. A. (1970). The market for "lemons": Quality uncertainty and the market mechanism. *Quarterly Journal of Economics*, 84(3), 488–500.',
    'Spence, M. (1973). Job market signaling. *Quarterly Journal of Economics*, 87(3), 355–374.',
    'Rothschild, M., and Stiglitz, J. (1976). Equilibrium in competitive insurance markets. *Quarterly Journal of Economics*, 90(4), 629–649.',
    'Einav, L., and Finkelstein, A. (2011). Selection in insurance markets: Theory and empirics in pictures. *Journal of Economic Perspectives*, 25(1), 115–138.',
    'Ministry of Health, Singapore. MediShield Life. moh.gov.sg.',
  ],
  related: ['economics/information/moral-hazard-and-agency', 'economics/information/auctions', 'game-theory/information-and-design/incomplete-information'],
}

export default guide
