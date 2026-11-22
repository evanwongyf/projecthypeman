import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Game theory usually asks: given the rules, what will people do? Mechanism design turns the question round: given what we want, what rules should we write? It is “reverse game theory”, the engineering of incentives. The aim is a system in which people, pursuing their own interests, reveal the truth and produce good outcomes. It has shaped auctions, school admissions, kidney exchange, the allocation of doctors to hospitals and the design of voting rules. This guide explains the core ideas, then walks through the matching algorithm that won a Nobel Prize.',
  nutshell: [
    '**Mechanism design** chooses the rules of a game so that self-interested players produce a desired outcome.',
    'A mechanism is **incentive compatible** if telling the truth is each player’s best strategy.',
    'The **revelation principle**: any outcome that some mechanism can achieve in equilibrium can be achieved by one where everyone reports truthfully. So design can focus on truth-telling rules.',
    '**Gale-Shapley deferred acceptance** finds **stable matchings** (no pair wants to break away). It is used to place medical graduates, assign school places and more.',
    'Hurwicz, Maskin and Myerson shared the 2007 Nobel Prize for mechanism design; Roth and Shapley the 2012 prize for matching.',
  ],
  sections: [
    {
      id: 'idea',
      title: 'Designing the game',
      blocks: [
        {
          t: 'table',
          head: ['Goal', 'Challenge', 'Mechanism'],
          rows: [
            ['Sell an item to the person who values it most', 'Bidders hide their value', 'Second-price auction: honest bidding is best'],
            ['Decide whether to build a public park', 'People may under-report the benefit to avoid paying', 'Pivot (Clarke-Groves) rules'],
            ['Assign students to schools', 'Parents may game their rankings', 'Deferred acceptance'],
            ['Match donors to patients', 'Medical compatibility and consent', 'Exchange chains and cycles'],
            ['Elect a candidate', 'Voters may vote strategically', 'No perfect rule exists (Gibbard-Satterthwaite)'],
          ],
        },
        {
          t: 'callout',
          tone: 'fact',
          title: 'The revelation principle',
          text: 'Suppose some complicated game, with strategic behaviour, leads to a desirable outcome. Then there is a simple game, where each person reports their private information and the system works out what they would have done, with the same outcome and with honesty as the best strategy. This means we can study truthful mechanisms without losing generality.',
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Impossibility results',
          text: 'Gibbard and Satterthwaite showed that, with three or more options, every reasonable voting rule is open to strategic manipulation in some situations (unless it is a dictatorship). Myerson and Satterthwaite showed that efficient trade between a buyer and seller with private values cannot always be achieved without a subsidy. Perfection is not possible; design means trading off goals.',
        },
      ],
    },
    {
      id: 'gs',
      title: 'Stable matching: Gale-Shapley',
      blocks: [
        { t: 'p', text: 'Matching problems pair two sides: students and schools, doctors and hospitals, kidney donors and patients. A matching is **stable** if no two people would both prefer each other to their assigned partners. Instability is costly: it encourages people to make private deals outside the system. David Gale and Lloyd Shapley (1962) gave a simple algorithm that always finds a stable matching.' },
        {
          t: 'steps',
          items: [
            { title: 'Proposals', body: 'Each person on one side (say, applicants) proposes to their favourite choice on the other side.' },
            { title: 'Hold the best', body: 'Each receiver holds the best proposal they have so far (by their own ranking) and rejects the rest. Nothing is final yet.' },
            { title: 'Rejected proposers try again', body: 'Anyone rejected proposes to their next favourite.' },
            { title: 'Repeat', body: 'Continue until no one is rejected. Everyone now holds the match they were offered. Those are final.' },
          ],
        },
        {
          t: 'example',
          title: 'A small example',
          lines: [
            { label: 'Applicants', text: 'Ann ranks Hospital X first, then Y. Ben ranks X first, then Y. Cara ranks Y first, then X. Each hospital has one place.' },
            { label: 'Hospitals', text: 'X ranks Ben, then Ann, then Cara. Y ranks Ann, then Ben, then Cara.' },
            { label: 'Round 1', text: 'Ann and Ben propose to X; Cara proposes to Y. X holds Ben (its favourite of the two) and rejects Ann. Y holds Cara (the only proposal).' },
            { label: 'Round 2', text: 'Ann proposes to Y. Y prefers Ann to Cara, so it holds Ann and rejects Cara.' },
            { label: 'Round 3', text: 'Cara proposes to X. X prefers Ben to Cara, so it rejects her. Cara has no more choices and stays unmatched (because there are only two places).' },
            { label: 'Result', text: 'Ben–X and Ann–Y. Stable: Cara would prefer Y, but Y prefers Ann; nobody can form a pair that both prefer.' },
          ],
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Proposer-optimal', title: 'Who gets the best?', body: 'The side that proposes gets the best stable match it could get; the receiving side gets its worst stable match. So the design choice matters.' },
            { tag: 'Truthful for proposers', title: 'Honesty is safe for one side', body: 'In deferred acceptance, no proposer can gain by misreporting their ranking. The receivers may gain by misreporting in some cases.' },
          ],
        },
      ],
    },
    {
      id: 'applied',
      title: 'Matching in the world',
      blocks: [
        {
          t: 'table',
          head: ['Market', 'Problem', 'What changed'],
          rows: [
            ['US medical residents', 'Hospitals and graduates made early, unstable offers (unravelling)', 'The National Resident Matching Program adopted a Gale-Shapley-type algorithm in 1952, which Alvin Roth later analysed and redesigned'],
            ['School choice (Boston, New York)', 'The “Boston mechanism” rewarded parents who gamed rankings', 'Boston switched to deferred acceptance in 2005 after work by Abdulkadiroğlu, Pathak, Roth and Sönmez'],
            ['Kidney exchange', 'Willing donors with incompatible patients', 'Exchanges allow cycles and chains of swaps (Roth, Sönmez and Ünver)'],
            ['Ride-hailing and ad auctions', 'Matching and pricing in real time', 'Platform algorithms with incentive properties'],
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Markets are designed',
          text: 'Roth called this “market design”. Many markets we think of as natural, such as stock exchanges, spectrum markets and school systems, are heavily shaped by rules. Studying the incentives these rules create lets us repair markets that fail.',
        },
        { t: 'links', items: [{ path: 'game-theory/information-and-design/auctions', note: 'Auctions as mechanisms' }, { path: 'game-theory/information-and-design/voting-and-collective-choice', note: 'Voting rules' }] },
      ],
    },
  ],
  sources: [
    'Gale, D., and Shapley, L. S. (1962). College admissions and the stability of marriage. American Mathematical Monthly.',
    'Hurwicz, L. (1960); Myerson, R. B. (1981). Optimal auction design. Mathematics of Operations Research.',
    'Roth, A. E. (2015). Who Gets What and Why. Houghton Mifflin Harcourt.',
    'Abdulkadiroğlu, A., and Sönmez, T. (2003). School choice: a mechanism design approach. American Economic Review.',
    'Roth, A. E., Sönmez, T., and Ünver, M. U. (2004). Kidney exchange. Quarterly Journal of Economics.',
  ],
  related: ['game-theory/information-and-design/auctions', 'game-theory/information-and-design/voting-and-collective-choice', 'game-theory/society/institutions-and-the-state'],
}

export default guide
