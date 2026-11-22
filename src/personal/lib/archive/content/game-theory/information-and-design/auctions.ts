import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Auctions sell everything from art and oil leases to radio spectrum, government bonds, online ads and the right to run a franchise. They are games of incomplete information: each bidder knows their own valuation and guesses at the others’. The choice of auction format changes how people bid, who wins and how much the seller earns. This guide explains the four classic formats, why the second-price auction rewards honesty, why winners often overpay, and a surprising equivalence theorem.',
  nutshell: [
    'Four classic formats: **English** (ascending), **Dutch** (descending), **first-price sealed-bid** and **second-price sealed-bid (Vickrey)**.',
    'In a **second-price** auction, **bidding your true value is a weakly dominant strategy**: it is a simple, honest rule.',
    'In a **first-price** auction you should **shade** your bid below your value; the more rivals, the less shading.',
    'The **winner’s curse**: in common-value auctions the winner tends to be the one who most overestimated, and so overpays unless they shade their bid.',
    '**Revenue equivalence**: under standard assumptions, the common formats give the seller the same expected revenue. Real-world differences come from relaxing those assumptions.',
  ],
  sections: [
    {
      id: 'formats',
      title: 'The four formats',
      blocks: [
        {
          t: 'table',
          head: ['Format', 'How it works', 'Equivalent to', 'Where used'],
          rows: [
            ['English (open ascending)', 'Price rises until one bidder remains; they pay their final bid', 'Second-price (pay roughly the runner-up’s drop-out price)', 'Art, estates, many online auctions'],
            ['Dutch (descending)', 'Price falls until someone shouts “mine”; they pay that price', 'First-price sealed-bid', 'Flowers in the Netherlands, some fish and bond markets'],
            ['First-price sealed-bid', 'Everyone bids secretly; the highest bid wins and pays their own bid', 'Dutch auction', 'Construction contracts, some government sales'],
            ['Second-price sealed-bid (Vickrey)', 'Everyone bids secretly; the highest bid wins but pays the second-highest bid', 'English auction', 'Philately; the basis of many online ad auctions'],
          ],
        },
      ],
    },
    {
      id: 'vickrey',
      title: 'Why honesty works in a second-price auction',
      blocks: [
        { t: 'p', text: 'William Vickrey (Nobel 1996) showed that in a sealed-bid auction where the winner pays the second-highest bid, the best strategy is to bid exactly what the item is worth to you. Here is the reasoning in plain language.' },
        {
          t: 'steps',
          items: [
            { title: 'If you bid too high', body: 'You might win at a price above your value (if someone bids between your value and your bid). You then lose money. You gain nothing from the extra bid in the cases where you would have won anyway, since you pay the second-highest bid regardless.' },
            { title: 'If you bid too low', body: 'You might lose an auction that you would have won profitably (if someone bids between your bid and your value). You gain nothing in the cases where you would have lost anyway.' },
            { title: 'If you bid your value', body: 'You win exactly when the highest rival bid is below your value, and you pay that rival bid, which is a profit. You never win at a loss and never lose a profitable win.' },
          ],
        },
        { t: 'callout', tone: 'fact', title: 'Truth-telling as a dominant strategy', text: 'Because honesty is best whatever others do, you need not guess their bids. That makes the auction simple for bidders and informative for the seller. Many online ad auctions (such as variations on second-price rules) use this idea.' },
      ],
    },
    {
      id: 'first',
      title: 'First-price auctions: shading your bid',
      blocks: [
        { t: 'p', text: 'In a first-price auction, bidding your true value guarantees zero profit, because you pay what you would pay. You do better by bidding below value: you win less often, but with some profit when you do. How much to shade depends on how many rivals there are.' },
        {
          t: 'math',
          tex: 'b(v) = \\frac{n-1}{n}\\, v',
          caption: 'Equilibrium bid in a first-price sealed-bid auction with n risk-neutral bidders whose values are drawn independently and uniformly between 0 and 1.',
          plain: 'Each bidder bids a fixed fraction of their own value. With two bidders you bid half your value; with many bidders you bid close to your full value, because competition leaves little room to shade.',
          where: [
            { sym: 'b(v)', def: 'the bid you place when your value is v' },
            { sym: 'v', def: 'your value for the item' },
            { sym: 'n', def: 'the number of bidders including you' },
          ],
          syntax: [
            { sym: '\\frac{n-1}{n}', say: '“n minus one over n”: the fraction of your value that you bid. For n = 2 it is one half; for n = 10 it is nine tenths.' },
          ],
          worked: {
            title: 'Four bidders',
            steps: [
              'Four bidders, so \\(n = 4\\) and the shading factor is \\(\\dfrac{n-1}{n} = \\dfrac{3}{4}\\).',
              'Your value is \\(v = 0.80\\). You bid \\(0.75 \\times 0.80 = 0.60\\).',
              'If you win, you pay your bid of \\(0.60\\) and earn \\(0.80 - 0.60 = 0.20\\).',
              'Compare with a second-price auction: you would bid \\(0.80\\) and, if you win, pay the second-highest bid.',
            ],
            answer: 'You bid 0.60: shading by 25 per cent. With 10 bidders the factor would be 0.9 and you would bid 0.72; as the number of rivals grows, you bid closer to your value and your expected profit shrinks.',
          },
        },
        {
          t: 'math',
          tex: 'E[\\text{revenue}] = \\frac{n-1}{n+1}',
          caption: 'Expected seller revenue under both a first-price and a second-price auction, in the same uniform setting.',
          plain: 'The seller’s expected revenue is the expected second-highest value among the bidders, which grows towards the maximum value of 1 as more bidders arrive. Both formats give the same result: this is revenue equivalence.',
          where: [{ sym: 'n', def: 'number of bidders' }],
          syntax: [{ sym: '\\frac{n-1}{n+1}', say: '“n minus one over n plus one”: for n = 2 it is one third; for n = 9 it is eight tenths.' }],
          worked: {
            title: 'More bidders, more revenue',
            steps: ['\\(n = 2\\): \\(\\dfrac{1}{3} \\approx 0.33\\).', '\\(n = 4\\): \\(\\dfrac{3}{5} = 0.60\\).', '\\(n = 9\\): \\(\\dfrac{8}{10} = 0.80\\).'],
            answer: 'Adding bidders raises the seller’s revenue substantially, more than clever format choice. This is why seller attention often goes to attracting bidders.',
          },
        },
        { t: 'callout', tone: 'note', title: 'The revenue equivalence theorem', text: 'Vickrey, Myerson, Riley and Samuelson showed that, with independent private values, risk-neutral bidders and no reserve effects, any auction in which the highest bidder wins and the lowest type expects zero gives the same expected revenue. Real auctions differ because bidders can be risk averse (which favours first-price), values can be common or correlated (favouring open formats) and bidders may collude.' },
      ],
    },
    {
      id: 'curse',
      title: 'The winner’s curse',
      blocks: [
        { t: 'p', text: 'In a common-value auction, such as bidding for an oil lease, the item has the same true value to everyone, but each bidder has only a noisy estimate. The winner is the bidder with the highest estimate, who is likely to have overestimated. Winning is therefore bad news about your estimate. In the 1970s, oil companies found that their winning bids often earned less than expected (Capen, Clapp and Campbell, 1971).' },
        {
          t: 'list',
          items: [
            '**Shade your bid** more as the number of bidders and the noise in estimates increase.',
            '**Condition on winning**: ask “if I win, what does that imply about everyone else’s estimates?”',
            'Open ascending auctions reveal other bidders’ information as they drop out, which reduces the curse.',
            'Examples: corporate takeovers, sports free agents, spectrum licences, publishing rights, house sales with hidden defects.',
          ],
        },
      ],
    },
    {
      id: 'real',
      title: 'Real auction design',
      blocks: [
        { t: 'p', text: 'Auction theory has shaped real policy. The simultaneous ascending auctions designed by Paul Milgrom, Robert Wilson and Preston McAfee for US spectrum licences from 1994 raised tens of billions of dollars and put licences in the hands of firms that valued them most. Milgrom and Wilson received the 2020 Nobel Prize for this work. Poorly designed auctions have led to failures: the British 3G auction (2000) raised about £22 billion, but some other European auctions fell short, partly due to design and bidding collusion.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Reserve price', title: 'A minimum', body: 'Sellers can set a reserve to avoid selling cheaply when few bidders show. It can raise expected revenue by excluding low bids.' },
            { tag: 'Entry', title: 'Attract bidders', body: 'More bidders usually matter more than the format. Lower barriers to entry.' },
            { tag: 'Collusion', title: 'Rings and signals', body: 'Bidders can collude, even through bid signals in open auctions. Sealed bids make it harder.' },
            { tag: 'Online ads', title: 'Auctions at scale', body: 'Search engines run billions of generalised second-price auctions a day for ad positions, with quality scores and reserve prices.' },
          ],
        },
        { t: 'links', items: [{ path: 'game-theory/information-and-design/mechanism-design-and-matching', note: 'Designing the rules' }, { path: 'finance/start-here', note: 'Auctions in financial markets' }] },
      ],
    },
  ],
  sources: [
    'Vickrey, W. (1961). Counterspeculation, auctions, and competitive sealed tenders. Journal of Finance.',
    'Milgrom, P. (2004). Putting Auction Theory to Work. Cambridge University Press.',
    'Krishna, V. (2009). Auction Theory, 2nd edition. Academic Press.',
    'Capen, E. C., Clapp, R. V., and Campbell, W. M. (1971). Competitive bidding in high-risk situations. Journal of Petroleum Technology.',
    'Klemperer, P. (2002). How (not) to run auctions: the European 3G telecom auctions. European Economic Review.',
  ],
  related: ['game-theory/information-and-design/mechanism-design-and-matching', 'game-theory/information-and-design/incomplete-information', 'game-theory/applications/markets-and-firms'],
}

export default guide
