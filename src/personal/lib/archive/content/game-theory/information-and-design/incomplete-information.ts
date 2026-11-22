import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'So far, everyone knew everything relevant: the payoffs and the options. Real strategic life is full of hidden information. The seller knows the car’s faults and the buyer does not. The job applicant knows their ability and the employer must guess. The other negotiator may be tough or soft. Games with private information explain why markets can collapse, why people pay for degrees that teach little, why peacocks have tails and why “cheap talk” is cheap. Three Nobel laureates (Akerlof, Spence and Stiglitz) shared the 2001 prize for this work.',
  nutshell: [
    '**Asymmetric information**: one side knows something relevant that the other does not.',
    '**Adverse selection**: bad types are more eager to trade, so the average quality in the market falls (Akerlof’s **lemons**). Markets can unravel.',
    '**Signalling**: informed players take costly actions that only good types find worthwhile (Spence’s **education** signal).',
    '**Screening**: uninformed players design offers (menus) that make types reveal themselves (insurance deductibles).',
    '**Cheap talk** is not credible when interests conflict. **Reputation** and **costly signals** make information believable.',
  ],
  sections: [
    {
      id: 'bayes',
      title: 'Beliefs and Bayesian games',
      blocks: [
        { t: 'p', text: 'In a game of incomplete information, each player has a **type** (their private information: cost, skill, toughness) and holds **beliefs** about others’ types. Harsanyi showed how to model this as a game in which nature first draws the types. Players then choose strategies that depend on their type and update beliefs by Bayes’ rule from what they observe. A Bayesian Nash equilibrium is a set of type-contingent strategies where each type does best given beliefs.' },
        {
          t: 'example',
          title: 'Is the opponent tough?',
          lines: [
            { label: 'Setting', text: 'A rival may be Tough (probability 0.2) or Weak (0.8). A Tough rival will fight if you enter; a Weak rival will not.' },
            { label: 'Entering', text: 'You gain 5 if the rival does not fight, and lose 3 if it does. Staying out gives 0.' },
            { label: 'Expected payoff', text: '\\(0.8 \\times 5 + 0.2 \\times (-3) = 4 - 0.6 = 3.4 > 0\\), so enter.' },
            { label: 'After a signal', text: 'If the rival has built a reputation for fighting, so that the chance it is Tough rises to 0.7, entering gives \\(0.3 \\times 5 + 0.7 \\times (-3) = 1.5 - 2.1 = -0.6 < 0\\), so stay out.' },
          ],
        },
      ],
    },
    {
      id: 'lemons',
      title: 'Adverse selection: the market for lemons',
      blocks: [
        { t: 'p', text: 'Akerlof (1970) imagined a used-car market where sellers know their car’s quality but buyers cannot tell good cars from “lemons”. Buyers will pay only the average value, which is too low for owners of good cars, who withdraw. That lowers the average quality of cars for sale, so buyers lower their offers, and more owners withdraw. The market can collapse completely.' },
        {
          t: 'math',
          tex: 'p \\le \\tfrac{3}{2}\\,E[q \\mid q \\le p] = \\tfrac{3}{2}\\cdot\\tfrac{p}{2} = \\tfrac{3}{4}\\,p',
          caption: 'Akerlof’s unravelling: with quality uniformly spread, the price buyers are willing to pay is always below the price at which sellers will sell.',
          plain: 'Suppose car quality q is spread evenly between 0 and 1, sellers value a car at q, and buyers value it at one and a half times q. If the price is p, only owners with q ≤ p sell, so the average quality on offer is p/2. Buyers, who cannot tell, will pay at most one and a half times that average, which is three quarters of p. That is below p, so no price works.',
          where: [
            { sym: 'q', def: 'quality of a car (a number between 0 and 1)' },
            { sym: 'p', def: 'the price' },
            { sym: 'E[q \\mid q \\le p]', def: 'the expected quality of cars whose owners are willing to sell at p' },
          ],
          syntax: [
            { sym: 'E[\\,\\cdot\\,]', say: '“the expected value of”: the average, weighted by probability.' },
            { sym: 'q \\mid q \\le p', say: '“q given that q is at most p”: the quality among cars that actually sell.' },
          ],
          worked: {
            title: 'Why the market empties',
            steps: [
              'Try a price of \\(p = 0.8\\). Owners of cars with \\(q \\le 0.8\\) will sell; average quality of those is \\(0.4\\).',
              'A buyer values an average car at \\(1.5 \\times 0.4 = 0.6\\), which is less than \\(0.8\\). Buyers refuse at 0.8.',
              'Buyers would pay at most \\(0.6\\); but at \\(p = 0.6\\) only cars below 0.6 sell, with average quality 0.3, worth \\(0.45\\) to buyers.',
              'This repeats: each price a buyer can accept drives away better cars.',
            ],
            answer: 'Even though every car is worth more to a buyer than to its owner, so that trade would help everyone, the market shrinks towards nothing. Information problems can destroy mutually beneficial trade.',
          },
        },
        {
          t: 'table',
          head: ['Remedy', 'How it helps', 'Example'],
          rows: [
            ['Warranties and guarantees', 'Sellers of good cars can afford them, lemons cannot', 'Manufacturers’ warranties'],
            ['Inspections and certification', 'Third parties reveal quality', 'Certified pre-owned programmes, vehicle history reports'],
            ['Reputation', 'Repeat sellers have reason to be honest', 'Established dealers, online seller ratings'],
            ['Standardisation and regulation', 'Disclosure rules, lemon laws', 'Consumer protection laws'],
            ['Mandatory participation', 'Pooling avoids selection', 'Compulsory health insurance'],
          ],
        },
      ],
    },
    {
      id: 'signal',
      title: 'Signalling and screening',
      blocks: [
        { t: 'p', text: 'To tell a skilled worker from an unskilled one, an employer needs something observable that the skilled can do more cheaply. Michael Spence (1973) showed that a costly signal like education can separate the types, even if it teaches nothing useful, provided it is cheaper for able people to obtain. The able get degrees because it pays them to; the less able find it not worth the cost. Employers then rationally pay degree holders more.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Signal', title: 'Costly and credible', body: 'A signal works if it is cheaper for the good type than the bad. Peacocks’ tails (Zahavi’s handicap principle), advertising by new firms, and degrees from tough universities are examples.' },
            { tag: 'Screen', title: 'Offer a menu', body: 'The uninformed side designs choices so that types pick differently: insurers offer low premiums with high deductibles for low-risk customers, and full coverage at high prices for high-risk ones.' },
            { tag: 'Cheap talk', title: 'Words cost nothing', body: 'When interests are aligned, talk can be informative. When they conflict, listeners discount it (Crawford and Sobel, 1982). “Trust me” is not a signal.' },
            { tag: 'Reputation', title: 'The long game', body: 'In repeated interaction, honesty builds a reputation, a valuable asset the dishonest cannot easily fake.' },
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Signalling can be wasteful',
          text: 'If education is mostly a signal, society may spend a lot on credentials that mainly sort people rather than raise skills, and an “arms race” of qualifications can result. In practice education does both: it builds skills and signals ability. How much is each is much debated.',
        },
      ],
    },
    {
      id: 'moral',
      title: 'Moral hazard and the principal-agent problem',
      blocks: [
        { t: 'p', text: 'A related problem arises after a deal is made: hidden action. A person who is insured may take less care; a manager acting for owners may pursue their own goals. This is **moral hazard**. Designing contracts that align incentives (bonuses, deductibles, equity stakes, monitoring) is the subject of principal-agent theory. Bengt Holmström and Oliver Hart received the 2016 Nobel Prize for work on contracts.' },
        {
          t: 'table',
          head: ['Problem', 'Hidden what?', 'When', 'Example', 'Typical fix'],
          rows: [
            ['Adverse selection', 'Type', 'Before the deal', 'Lemons, health insurance buyers', 'Screening, signalling, mandates'],
            ['Moral hazard', 'Action', 'After the deal', 'Careless driving once insured', 'Deductibles, monitoring, incentive pay'],
          ],
        },
        { t: 'links', items: [{ path: 'game-theory/information-and-design/mechanism-design-and-matching', note: 'Designing rules that make people tell the truth' }, { path: 'forensics/reliability/evidence-statistics', note: 'Bayes’ rule in practice' }] },
      ],
    },
  ],
  sources: [
    'Akerlof, G. A. (1970). The market for “lemons”: quality uncertainty and the market mechanism. Quarterly Journal of Economics.',
    'Spence, M. (1973). Job market signaling. Quarterly Journal of Economics.',
    'Harsanyi, J. C. (1967–68). Games with incomplete information played by “Bayesian” players. Management Science.',
    'Crawford, V. P., and Sobel, J. (1982). Strategic information transmission. Econometrica.',
    'Rothschild, M., and Stiglitz, J. (1976). Equilibrium in competitive insurance markets. Quarterly Journal of Economics.',
  ],
  related: ['game-theory/information-and-design/mechanism-design-and-matching', 'game-theory/society/trust-reputation-and-punishment', 'game-theory/information-and-design/auctions'],
}

export default guide
