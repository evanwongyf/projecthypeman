import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Whenever two sides can gain from agreeing but disagree about how to share the gain, they are bargaining: wages, prices, treaties, a division of household chores. Game theory identifies what decides the split. It is not simply toughness. It is patience, the outside options each side holds, and the risk of breakdown. This guide covers Nash’s and Rubinstein’s models and ends with practical lessons for negotiating well.',
  nutshell: [
    'Bargaining is a **mixed-motive** game: both gain from a deal, but they conflict over the split.',
    'Your power depends on your **outside option** (what you get if talks fail, your BATNA) and your **patience** (how little delay costs you).',
    '**Nash bargaining**: the split maximises the product of the gains over each side’s disagreement point.',
    '**Rubinstein** (alternating offers): with equal patience, a slight first-mover advantage; the more patient side gets more.',
    'Practical rule: **improve your alternatives**, **learn theirs**, **expand the pie** before dividing it, and **make credible commitments** carefully.',
  ],
  sections: [
    {
      id: 'outside',
      title: 'Outside options: where power comes from',
      blocks: [
        { t: 'p', text: 'Imagine a buyer values a house at 500 and the seller will not take less than 400. Any price between 400 and 500 is better for both than no sale; the gap is the surplus of 100. How it is divided depends on what each can do instead. A seller with a second buyer offering 480 is in a strong position. A buyer with another equally good house at 410 is in a strong position too.' },
        {
          t: 'table',
          head: ['Concept', 'Meaning', 'Effect on the split'],
          rows: [
            ['Disagreement point / BATNA', 'What you get if no deal is reached; your “best alternative to a negotiated agreement” (Fisher and Ury)', 'A better BATNA raises your share'],
            ['Reservation value', 'The worst deal you would accept', 'The overlap of both sides’ reservation values is the bargaining zone'],
            ['Patience', 'How little you lose by waiting', 'The more patient side can hold out longer'],
            ['Risk attitude', 'Willingness to risk a breakdown', 'A less risk-averse party tends to bargain harder'],
          ],
        },
      ],
    },
    {
      id: 'nash',
      title: 'The Nash bargaining solution',
      blocks: [
        {
          t: 'math',
          tex: '\\max_{x}\; (u_1(x) - d_1)\\,(u_2(x) - d_2)',
          caption: 'Nash’s bargaining solution: the agreement that maximises the product of each side’s gain over its disagreement payoff.',
          plain: 'Work out how much better off each side is compared with walking away. Multiply those two gains. Choose the deal that makes the product as large as possible. This rewards deals that are good for both, and it responds to how good your fall-back is.',
          where: [
            { sym: 'x', def: 'a possible agreement' },
            { sym: 'u_1(x), u_2(x)', def: 'each side’s payoff from the agreement' },
            { sym: 'd_1, d_2', def: 'each side’s payoff if no agreement is reached' },
          ],
          syntax: [
            { sym: '\\max_x', say: '“choose x to make the following as large as possible”.' },
            { sym: 'u_1(x) - d_1', say: '“Player 1’s gain”: payoff from the deal minus what they would have got anyway.' },
          ],
          worked: {
            title: 'Splitting 100 with different fall-backs',
            steps: [
              'Two people can share 100. If they fail to agree, Player 1 gets \\(d_1 = 0\\) and Player 2 gets \\(d_2 = 20\\).',
              'Let Player 1 receive \\(s\\), so Player 2 receives \\(100 - s\\). The product is \\((s - 0)((100 - s) - 20) = s(80 - s)\\).',
              'This is largest when \\(s = 40\\) (the midpoint of 0 and 80).',
              'So Player 1 gets \\(40\\) and Player 2 gets \\(60\\).',
            ],
            answer: 'The two surplus above disagreement is 80, and it is split equally (40 each): Player 1 gets 40, and Player 2 gets 20 + 40 = 60. Player 2’s better outside option earns them a larger share, though the surplus above it is shared equally.',
          },
        },
      ],
    },
    {
      id: 'rubinstein',
      title: 'Rubinstein: alternating offers and patience',
      blocks: [
        { t: 'p', text: 'Ariel Rubinstein (1982) modelled bargaining as taking turns. One side offers a split, the other accepts or makes a counter-offer. Each round of delay shrinks the pie, or is simply less valuable, by a discount factor. Backward induction gives a unique answer.' },
        {
          t: 'math',
          tex: 'x_1^{*} = \\frac{1 - \\delta_2}{1 - \\delta_1 \\delta_2}',
          caption: 'The share of the pie taken by the first proposer in Rubinstein’s alternating-offers game (infinite horizon).',
          plain: 'The first mover proposes a split that the other side will just accept. The other side compares it with what they would get by waiting a round and proposing themselves, after discounting for delay. Solving the two conditions gives the formula. The more patient you are (δ closer to 1), the bigger your share.',
          where: [
            { sym: 'x_1^{*}', def: 'the first proposer’s equilibrium share, as a fraction of the pie' },
            { sym: '\\delta_1, \\delta_2', def: 'discount factors of Player 1 (proposer) and Player 2: the fraction of value kept after one round of delay' },
          ],
          syntax: [
            { sym: '\\delta_1 \\delta_2', say: '“delta one times delta two”: the two patience levels multiplied together.' },
            { sym: 'x_1^{*}', say: '“x one star”: the equilibrium share for Player 1.' },
          ],
          worked: {
            title: 'Equal patience and unequal patience',
            steps: [
              'If \\(\\delta_1 = \\delta_2 = 0.9\\): \\(x_1^{\\star} = \\dfrac{1 - 0.9}{1 - 0.81} = \\dfrac{0.1}{0.19} \\approx 0.526\\). The proposer takes about 52.6%, the other 47.4%.',
              'If offers can be made quickly (δ close to 1, say 0.99 each), the first-mover advantage almost vanishes: \\(\\dfrac{0.01}{0.0199} \\approx 0.503\\).',
              'If Player 2 is impatient, \\(\\delta_2 = 0.5\\), while \\(\\delta_1 = 0.9\\): \\(x_1^{\\star} = \\dfrac{0.5}{1 - 0.45} = \\dfrac{0.5}{0.55} \\approx 0.909\\).',
            ],
            answer: 'Equal patience gives a near-even split with a small edge to whoever moves first. An impatient opponent loses badly: with δ₂ = 0.5 the proposer takes about 91 per cent. Impatience, whether from cost, deadlines or need, is a weakness.',
          },
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Theory versus practice',
          text: 'In the model there is no delay: the first offer is accepted. In real life delays, strikes and walk-outs happen, often because of private information about how much each side values the deal. Real bargaining also involves fairness, face and reputation.',
        },
      ],
    },
    {
      id: 'practice',
      title: 'Lessons for negotiating',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Know your BATNA, and improve it', body: 'Your best alternative sets your walk-away point. Work on it before negotiating: get a second quote, a second offer, a second option.' },
            { title: 'Learn theirs', body: 'The other side’s alternatives and deadlines explain their flexibility. Ask questions, listen, and look for pressures.' },
            { title: 'Expand the pie first', body: 'Look for trades where each side gives up something it values less than the other does (price for delivery date, salary for flexibility). Integrative bargaining beats pure haggling.' },
            { title: 'Anchor, with reasons', body: 'First offers influence the outcome. Make a well-supported first offer rather than an absurd one.' },
            { title: 'Mind patience and time', body: 'Do not reveal a deadline you cannot move. Create time for yourself.' },
            { title: 'Protect the relationship', body: 'If you will deal again, fairness and reputation matter more than squeezing the last unit.' },
          ],
        },
        {
          t: 'dodont',
          do: ['Prepare options and reasons for each side.', 'Look for items you value differently.', 'Keep commitments you make, so that your word has value.'],
          dont: ['Make a commitment you cannot keep to look tough.', 'Treat every negotiation as a one-off.', 'Hide information in a way that destroys a mutually beneficial deal.'],
        },
        { t: 'links', items: [{ path: 'game-theory/dynamics/sequential-games', note: 'Ultimatum and sequential bargaining' }, { path: 'game-theory/society/strategic-mentality', note: 'A practical toolkit' }] },
      ],
    },
  ],
  sources: [
    'Nash, J. F. (1950). The bargaining problem. Econometrica.',
    'Rubinstein, A. (1982). Perfect equilibrium in a bargaining model. Econometrica.',
    'Fisher, R., Ury, W., and Patton, B. (2011). Getting to Yes, 3rd edition. Penguin.',
    'Binmore, K., Rubinstein, A., and Wolinsky, A. (1986). The Nash bargaining solution in economic modelling. RAND Journal of Economics.',
    'Raiffa, H. (1982). The Art and Science of Negotiation. Harvard University Press.',
  ],
  related: ['game-theory/dynamics/sequential-games', 'game-theory/society/strategic-mentality', 'game-theory/classic-games/zero-sum-and-minimax'],
}

export default guide
