import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Societies depend on trust: lending money without a contract, paying before delivery, leaving a bicycle unlocked. Trust is a strategic problem: why should the trusted person not take advantage? Game theory and experiments point to a few answers: you may meet again, others may find out, third parties may punish, or the person may genuinely care about fairness. This guide covers trust games, reputation and gossip, the surprising willingness of people to pay to punish, and cross-cultural findings on fairness, including the darker side of punishment.',
  nutshell: [
    'In the **trust game**, trust and trustworthiness are both observed far more than pure self-interest predicts.',
    '**Reputation** turns a one-shot game into a repeated one: your behaviour towards one person affects how others treat you (**indirect reciprocity**). **Gossip** spreads it.',
    'People will **pay a cost to punish** unfair behaviour, even strangers (**altruistic punishment**). This keeps cooperation high in public goods games.',
    '**Strong reciprocity**: some people reward cooperation and punish defection, even at a cost, in one-shot encounters. How common this is and why it evolved is debated.',
    'Punishment can **backfire**: in some societies people punish cooperators (**antisocial punishment**), especially where trust in institutions is low.',
  ],
  sections: [
    {
      id: 'trust',
      title: 'The trust game',
      blocks: [
        { t: 'p', text: 'Berg, Dickhaut and McCabe (1995) designed a simple experiment. A Sender has 10 and can send any amount to a Receiver; the amount is tripled. The Receiver then decides how much of what they got to send back. Pure self-interest says the Receiver will send back nothing, so the Sender should send nothing. In practice Senders send about half, and Receivers return roughly what was sent or a bit less.' },
        {
          t: 'table',
          head: ['Quantity', 'Typical finding'],
          rows: [
            ['Amount sent', 'About half of the endowment on average'],
            ['Amount returned', 'Often roughly equal to what the Sender sent; on average a little less than the Sender gave up'],
            ['Cross-country differences', 'Average trust and trustworthiness differ across societies and correlate with measures of institutional quality'],
            ['Betrayal aversion', 'People are less willing to take a risk when it depends on a person than when it depends on chance, suggesting betrayal itself is costly'],
          ],
        },
        { t: 'callout', tone: 'note', title: 'Trust is a bet', text: 'Trusting means taking a risk that someone will exploit you. It pays off when many are trustworthy, and trustworthiness is supported by norms, reputation and the fear of sanctions. High-trust societies are more productive: people spend less on contracts, guards and lawyers.' },
      ],
    },
    {
      id: 'rep',
      title: 'Reputation, gossip and indirect reciprocity',
      blocks: [
        { t: 'p', text: 'In small communities, nothing is anonymous. If you cheat Alice, Bob will hear. Direct reciprocity is “I help you because you helped me”. **Indirect reciprocity** is “I help you because you helped others”. Martin Nowak and Karl Sigmund (1998) showed that cooperation can evolve if people track each other’s reputations. Robin Dunbar has argued that gossip, which is largely talk about who did what to whom, is how human groups keep track of reputations, in groups too large for grooming.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Image scoring', title: 'Help the helpful', body: 'Helping someone with a good reputation raises your own. A good name is an asset worth protecting.' },
            { tag: 'Gossip', title: 'Information about behaviour', body: 'Gossip spreads reputation cheaply. Experiments show people share more about who cheated and avoid those with a bad reputation.' },
            { tag: 'Ratings', title: 'Online reputation', body: 'Seller ratings and reviews are modern reputation systems that make trade between strangers possible, though they can be gamed.' },
            { tag: 'Costly', title: 'Reputation needs observation', body: 'It works only if actions are seen and remembered. Anonymity weakens it.' },
          ],
        },
        {
          t: 'example',
          title: 'The medieval Maghribi traders',
          lines: [
            { label: 'Problem', text: 'In the 11th century, Jewish merchants around the Mediterranean sent goods with overseas agents they could not monitor. An agent could cheat and sell the goods himself.' },
            { label: 'Solution (Avner Greif)', text: 'The merchants formed a coalition: they shared information by letter, and any agent who cheated one was refused work by all.' },
            { label: 'Effect', text: 'An agent’s lifetime earnings depended on staying honest. The group’s reputation system, and the threat of collective exclusion, supported trade across long distances without courts.' },
            { label: 'Caution', text: 'The details are debated by historians, but the example illustrates how reputation and collective punishment can substitute for formal law.' },
          ],
        },
      ],
    },
    {
      id: 'punish',
      title: 'Costly punishment',
      blocks: [
        { t: 'p', text: 'Fehr and Gächter (2000) allowed players in a public goods game to pay 1 unit to reduce a free rider’s earnings by 3. Many did, though they would never meet those players again, and punishing cost them money. As a result contributions rose and stayed high, instead of decaying. People punish because they feel anger at unfairness, and the anticipation of punishment deters free riding. This is called **altruistic punishment**, because it benefits the group at a cost to the punisher.' },
        {
          t: 'table',
          head: ['Question', 'Answer from the research'],
          rows: [
            ['Does the threat of punishment raise cooperation?', 'Yes, strongly, in many public goods experiments'],
            ['Is it efficient?', 'Not always: punishment destroys resources, and when the cost is high, the net gain can be small or negative in the short run'],
            ['Is it universal?', 'Willingness to punish free riders is found in many societies but varies in strength'],
            ['Can it go wrong?', 'Yes. Herrmann, Thöni and Gächter (2008) found that in several societies people also punished cooperators (antisocial punishment), often in places with weaker rule of law and lower trust'],
            ['What replaces it?', 'Formal institutions such as courts and police that punish at lower cost, and norms that make informal sanctions proportionate'],
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Strong reciprocity: a debate',
          text: 'Bowles and Gintis argued that humans evolved a predisposition to cooperate and to punish those who do not, even at a cost and without expecting future return (“strong reciprocity”). Critics say that behaviour in the lab may reflect confusion about the one-shot nature of the game, and that long-run repeated play in small groups can explain much of it. The evidence on origins is unsettled; the evidence that many people behave this way is robust.',
        },
      ],
    },
    {
      id: 'culture',
      title: 'Fairness across cultures',
      blocks: [
        { t: 'p', text: 'Henrich and colleagues (2001, 2005) ran ultimatum and other games in small-scale societies on several continents. Behaviour varied widely. The more a society’s economic life involved cooperation and market exchange with strangers, the higher the offers and the stronger the fairness norms. Local norms mattered too: among the Lamalera whale hunters, who cooperate heavily, the average offer was above one half; among the Machiguenga farmers of Peru, who live in largely independent families, it was around a quarter.' },
        {
          t: 'dodont',
          do: ['Think of trust and fairness as products of institutions and experience, not fixed national traits.', 'Notice how reputation, repetition and enforcement support trust where you live.', 'Be cautious when comparing countries: methods and samples differ.'],
          dont: ['Draw stereotypes from the experimental averages.', 'Assume more punishment means more cooperation.', 'Ignore the role of transparent institutions in making trust rational.'],
        },
        { t: 'links', items: [{ path: 'game-theory/dynamics/repeated-games', note: 'Repetition and cooperation' }, { path: 'game-theory/society/institutions-and-the-state', note: 'Formal institutions as enforcement' }, { path: 'anthropology/origins/cooperation-and-cumulative-culture', note: 'Cooperation in human evolution' }] },
      ],
    },
  ],
  sources: [
    'Berg, J., Dickhaut, J., and McCabe, K. (1995). Trust, reciprocity, and social history. Games and Economic Behavior.',
    'Nowak, M. A., and Sigmund, K. (1998). Evolution of indirect reciprocity by image scoring. Nature.',
    'Fehr, E., and Gächter, S. (2002). Altruistic punishment in humans. Nature.',
    'Herrmann, B., Thöni, C., and Gächter, S. (2008). Antisocial punishment across societies. Science.',
    'Greif, A. (1989). Reputation and coalitions in medieval trade: evidence on the Maghribi traders. Journal of Economic History.',
    'Henrich, J., et al. (2005). “Economic man” in cross-cultural perspective. Behavioral and Brain Sciences.',
    'Dunbar, R. (1996). Grooming, Gossip, and the Evolution of Language. Harvard University Press.',
  ],
  related: ['game-theory/dynamics/repeated-games', 'game-theory/society/social-dilemmas-and-the-commons', 'anthropology/origins/cooperation-and-cumulative-culture'],
}

export default guide
