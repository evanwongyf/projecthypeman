import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The textbook game theorist assumes players who calculate perfectly, care only about their own payoffs and expect everyone else to do the same. People are not like that. They care about fairness, reciprocate kindness, think only a few steps ahead, are swayed by how a choice is framed and hate losses more than they like gains. Behavioural game theory keeps the structure of games but replaces the textbook player with the evidence from experiments. This guide covers what experiments show and the models that capture it.',
  nutshell: [
    '**Fairness and reciprocity**: many people reject unfair offers, reward kindness and punish selfishness, even at a cost.',
    '**Inequity aversion** (Fehr-Schmidt): people dislike unequal outcomes, and dislike being behind more than being ahead.',
    '**Bounded rationality** (Simon): people use rules of thumb, not full optimisation. **Level-k thinking** describes how many steps ahead people reason.',
    '**Prospect theory** (Kahneman and Tversky): people judge outcomes relative to a reference point, and losses loom larger than gains.',
    'Behaviour moves toward equilibrium with **experience and feedback**, and stays far from it when problems are hard, new or unrepeated.',
  ],
  sections: [
    {
      id: 'beauty',
      title: 'How many steps ahead? The beauty contest',
      blocks: [
        { t: 'p', text: 'Rosemarie Nagel (1995) asked people to pick a number from 0 to 100. The winner is the person whose number is closest to two thirds of the average. The Nash equilibrium is 0: if everyone picks 0, nobody can do better. How would real people play? The average is typically around 30 to 35 in the first round.' },
        {
          t: 'table',
          head: ['Type of player', 'Reasoning', 'Pick'],
          rows: [
            ['Level 0', 'Picks a number at random; the average of such guesses is 50', 'About 50'],
            ['Level 1', 'Thinks others are level 0, so picks two thirds of 50', 'About 33'],
            ['Level 2', 'Thinks others are level 1, so picks two thirds of 33', 'About 22'],
            ['Level 3', 'Two thirds of 22', 'About 15'],
            ['Perfect reasoning (equilibrium)', 'Everyone reasons infinitely deep', '0'],
          ],
          caption: 'In experiments, many people are level 1 or 2. Spikes appear near 33 and 22. With experience, guesses move closer to 0 over repeated rounds.',
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Why this matters',
          text: 'Keynes likened financial markets to a beauty contest in which judges pick the face they think others will pick. The best strategy is to guess the average guess, not to pick what you think is best. Level-k models formalise “I think that you think that I think”, with a finite number of steps. Be one step ahead of the people around you, not ten.',
        },
      ],
    },
    {
      id: 'fair',
      title: 'Fairness and inequity aversion',
      blocks: [
        {
          t: 'math',
          tex: 'U_i = x_i - \\alpha_i \\max(x_j - x_i,\\,0) - \\beta_i \\max(x_i - x_j,\\,0)',
          caption: 'The Fehr-Schmidt model of inequity aversion for two players.',
          plain: 'Your satisfaction is your own money, reduced when you are behind the other player (envy) and reduced, usually by a smaller amount, when you are ahead (guilt). The size of each reduction measures how much you dislike inequality.',
          where: [
            { sym: 'U_i', def: 'player i’s utility' },
            { sym: 'x_i, x_j', def: 'monetary payoffs of player i and the other player j' },
            { sym: '\\alpha_i', def: 'dislike of disadvantageous inequality (envy)' },
            { sym: '\\beta_i', def: 'dislike of advantageous inequality (guilt), usually smaller than α' },
          ],
          syntax: [
            { sym: '\\max(a, 0)', say: '“the larger of a and zero”: use a if it is positive; otherwise count nothing.' },
            { sym: 'x_j - x_i', say: '“how far the other is ahead of you”: only counts when positive.' },
          ],
          worked: {
            title: 'Rejecting a low offer',
            steps: [
              'In an ultimatum game over 10, the Proposer offers you 2 and keeps 8. If you accept, \\(x_i = 2\\), \\(x_j = 8\\).',
              'Suppose \\(\\alpha_i = 0.6\\) and \\(\\beta_i = 0.2\\). Then \\(U_i = 2 - 0.6 \\times (8 - 2) - 0.2 \\times 0 = 2 - 3.6 = -1.6\\).',
              'If you reject, both get 0 and \\(U_i = 0\\).',
              'Since \\(0 > -1.6\\), you reject, even though you give up 2.',
            ],
            answer: 'With these preferences a person rationally rejects an offer of 2 out of 10, because the unfairness hurts more than the money helps. A Proposer who knows this offers more. The model rationalises ultimatum behaviour without abandoning rational choice.',
          },
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Reciprocity', title: 'Kindness for kindness', body: 'Rabin (1993) modelled people who reward those who are kind to them and punish those who are unkind, judging intentions rather than just outcomes.' },
            { tag: 'Intentions', title: 'Why it was done matters', body: 'People reject unfair offers from a person more than the same offers from a computer or a fair-looking process.' },
            { tag: 'Social image', title: 'Being seen to be fair', body: 'Giving rises when others are watching, and falls when choices are anonymous or when a convenient excuse allows selfishness.' },
            { tag: 'Heterogeneity', title: 'People differ', body: 'In experiments, there are conditional cooperators, free riders and some unconditional givers, in varying proportions.' },
          ],
        },
      ],
    },
    {
      id: 'prospect',
      title: 'Reference points, framing and loss aversion',
      blocks: [
        { t: 'p', text: 'Kahneman and Tversky’s prospect theory (1979) says people judge outcomes as gains or losses relative to a reference point, not as final wealth. Losses hurt roughly twice as much as equal gains please. This changes strategic behaviour: a negotiation framed as avoiding a loss produces tougher bargaining than one framed as a gain, and people cling to what they have (the endowment effect).' },
        {
          t: 'table',
          head: ['Effect', 'What happens', 'Strategic consequence'],
          rows: [
            ['Loss aversion', 'A loss of 100 feels worse than a gain of 100 feels good', 'Concessions are painful, so negotiators resist giving up things already “owned”'],
            ['Framing', 'The same choice described differently gets different answers (a “10% surcharge” versus a “10% discount lost”)', 'How a proposal is framed shapes acceptance'],
            ['Endowment effect', 'People value what they own more than identical things they do not', 'Sellers ask more than buyers will pay, and deals fail'],
            ['Anchoring', 'Initial numbers pull later estimates', 'First offers matter in bargaining'],
            ['Present bias', 'People overweight the near term', 'Commitment devices help people stick to plans'],
          ],
        },
      ],
    },
    {
      id: 'learn',
      title: 'Learning towards equilibrium',
      blocks: [
        { t: 'p', text: 'In many experiments, behaviour starts far from equilibrium and moves closer with repetition and feedback. Players adjust by reinforcement (repeat what worked), belief learning (best-reply to what others did) or a mix. Experienced participants, such as professional soccer players in penalty kicks, can be very close to equilibrium; novices facing a new problem are not.' },
        {
          t: 'dodont',
          do: ['Use equilibrium as a benchmark, and check where people really are.', 'Ask how many steps of reasoning the other side is likely to use.', 'Put fairness and reputation in the payoffs.', 'Design systems for real people, with simple rules and sensible defaults.'],
          dont: ['Assume the other side is perfectly rational, or perfectly irrational.', 'Treat departures from the textbook as “mistakes” without asking what people care about.', 'Overgeneralise from student samples in a lab.'],
        },
        { t: 'links', items: [{ path: 'game-theory/dynamics/sequential-games', note: 'Ultimatum and centipede' }, { path: 'game-theory/society/strategic-mentality', note: 'Using this in practice' }, { path: 'medicine/neuroscience/emotion-circuits', note: 'The brain side of fairness and reward' }] },
      ],
    },
  ],
  sources: [
    'Nagel, R. (1995). Unraveling in guessing games: an experimental study. American Economic Review.',
    'Fehr, E., and Schmidt, K. M. (1999). A theory of fairness, competition, and cooperation. Quarterly Journal of Economics.',
    'Rabin, M. (1993). Incorporating fairness into game theory and economics. American Economic Review.',
    'Kahneman, D., and Tversky, A. (1979). Prospect theory: an analysis of decision under risk. Econometrica.',
    'Camerer, C. F. (2003). Behavioral Game Theory: Experiments in Strategic Interaction. Princeton University Press.',
    'Simon, H. A. (1955). A behavioral model of rational choice. Quarterly Journal of Economics.',
  ],
  related: ['game-theory/dynamics/sequential-games', 'game-theory/society/strategic-mentality', 'medicine/neuroscience/emotion-circuits'],
}

export default guide
