import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Starlings turn together in swirling clouds, fish school, locusts march, and people queue at the shop that already has a queue. Humans also follow the crowd in ways that are sometimes sensible and sometimes disastrous: bank runs, speculative bubbles, fashions, panics, and the pile-on of online outrage. This guide separates the mechanisms: copying what others do because their choices carry information (informational cascades), because we want to belong (normative pressure), or because of strategic complementarities (it pays to do what others do). It includes a cascade simulator, the famous episodes, the evidence for “wisdom of crowds” and the conditions under which it fails.',
  nutshell: [
    'Following others is often **rational**: when you lack information, other people’s choices are evidence (**social proof**).',
    'In an **information cascade**, people ignore their own information and follow the crowd, and everyone can end up **wrong**. Cascades start **early** and are **fragile**.',
    '**Bank runs** and **bubbles** are herds where each person’s best action depends on what others do (a coordination game).',
    'Crowds can be **wise** (Galton’s ox) when judgements are **independent** and **diverse**; they become **mad** when people influence each other.',
    'Crowd **panic** is rarer than films suggest: in disasters, people mostly **cooperate**. Crush deaths are usually due to density and design.',
  ],
  sections: [
    {
      id: 'cascade',
      title: 'Information cascades',
      blocks: [
        { t: 'p', text: 'Imagine choosing between two restaurants in a strange town. You think A is slightly better from a review. You see that most people are queuing at B. You may reasonably decide the crowd knows more and join B. The next person sees an even longer queue at B. In 1992 Sushil Bikhchandani, David Hirshleifer and Ivo Welch showed formally that when people decide in sequence, seeing earlier choices but not the private information behind them, a cascade can begin: after a couple of people choose the same, everyone rationally follows, ignoring their own information. The outcome can be wrong.' },
        { t: 'game-lab', viz: 'cascade' },
        {
          t: 'steps',
          items: [
            { title: 'Early choices reveal signals', body: 'The first people’s choices reflect their own hints. A choice reveals the hint, because they had nothing else to go on.' },
            { title: 'A lead of two', body: 'When one option leads by two choices, a new person’s single hint is outweighed by what the crowd has revealed.' },
            { title: 'Cascade', body: 'From then on every follower ignores their own hint. Their choices reveal nothing new, so information stops accumulating.' },
            { title: 'Fragile', body: 'A single publicly visible new piece of information can shatter a cascade, and the crowd may switch abruptly.' },
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Try it',
          text: 'Set the hint accuracy to 70 per cent. In the simulation roughly one run in six ends in a wrong cascade, even though each person’s hint is right 70 per cent of the time. Lower the accuracy to 55 per cent and see how the wrong-cascade rate changes. Everyone behaves rationally; the group still goes wrong.',
        },
      ],
    },
    {
      id: 'runs',
      title: 'Bank runs, bubbles and panics in markets',
      blocks: [
        {
          t: 'table',
          head: ['Episode', 'What happened', 'The herd mechanism'],
          rows: [
            ['Bank runs (Diamond and Dybvig, 1983)', 'A bank holds only part of deposits as cash. If depositors fear others will withdraw, it is rational to withdraw first, and the bank fails even if it was sound', 'A stag-hunt-style coordination problem: belief in a run causes a run'],
            ['Northern Rock (UK, 2007)', 'The first run on a British bank in over a century, after news of emergency funding', 'News triggered queues, which looked like evidence to others'],
            ['Silicon Valley Bank (US, 2023)', 'Customers tried to withdraw about 42 billion dollars in a single day, mostly electronically, and the bank failed', 'Fast information on social media and messaging, and concentrated depositors speed up herding'],
            ['South Sea Bubble (1720)', 'Shares in a British trading company soared and collapsed; Isaac Newton is said to have lost money and remarked that he could calculate the movement of heavenly bodies but not the madness of people', 'Buying because prices rise; fear of missing out'],
            ['Tulip mania (Netherlands, 1630s)', 'Prices of tulip bulb contracts surged and fell. Modern historians (Anne Goldgar; Peter Garber) argue it was smaller and more limited than the legend suggests', 'A cautionary tale that may be exaggerated'],
            ['Dot-com and housing bubbles', 'Asset prices rose far above fundamentals, then crashed', 'Extrapolating past gains; social reinforcement'],
            ['Meme stocks (2021)', 'Coordinated buying through online forums pushed up some stocks sharply', 'Online coordination; a mix of speculation and a collective game against short sellers'],
          ],
          caption: 'Historical episodes are summarised in broad terms. Several famous accounts are debated by historians.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Complementarity', title: 'It pays to do what others do', body: 'In a run or a bubble, your best action depends on what others do. Expectations become self-fulfilling.' },
            { tag: 'Reputation', title: 'Herding by professionals', body: 'Fund managers and analysts may follow the pack because being wrong with the crowd is less costly to a career than being wrong alone (“nobody gets fired for buying IBM”).' },
            { tag: 'Feedback', title: 'Rising prices attract buyers', body: 'Price rises are taken as evidence of value, drawing more buyers and pushing prices higher until the story breaks.' },
            { tag: 'Safeguards', title: 'Deposit insurance and circuit breakers', body: 'Rules that remove the incentive to run (deposit insurance) or pause trading reduce herd dynamics.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'Not investment advice', text: 'This is a general account of herd behaviour in markets. Spotting a bubble in advance is hard, and “the crowd is wrong” can be wrong for a long time.' },
      ],
    },
    {
      id: 'wisdom',
      title: 'Wisdom and madness of crowds',
      blocks: [
        { t: 'p', text: 'In 1907 Francis Galton recorded the guesses of about 800 people at a livestock fair for the weight of an ox. The median guess was 1,207 pounds; the true weight was 1,198. The average of many independent guesses beat nearly all individuals. James Surowiecki (The Wisdom of Crowds, 2004) described the conditions: diversity of opinion, independence of judgements, decentralisation and a way of aggregating the results.' },
        {
          t: 'table',
          head: ['Condition', 'Wise crowd', 'Mad crowd'],
          rows: [
            ['Independence', 'People judge separately and errors cancel', 'People see one another’s choices; errors spread'],
            ['Diversity', 'Different information and methods', 'Everyone uses the same sources'],
            ['Incentives', 'Rewards for being right', 'Rewards for being popular or consistent'],
            ['Aggregation', 'A fair way of combining (averages, markets)', 'A leader or loud voice dominates'],
          ],
        },
        {
          t: 'example',
          title: 'The Music Lab experiment (Salganik, Dodds and Watts, 2006)',
          lines: [
            { label: 'Set-up', text: 'Over 14,000 participants listened to and could download unknown songs. In some worlds they saw how often others had downloaded each song; in others they did not.' },
            { label: 'Finding', text: 'Social influence made hits much bigger and more unequal, and which song became a hit differed between parallel worlds that started identically.' },
            { label: 'Lesson', text: 'Popularity is partly quality and partly path-dependent social amplification. It also makes success hard to predict.' },
          ],
        },
      ],
    },
    {
      id: 'panic',
      title: 'Panics and the myth of mass panic',
      blocks: [
        { t: 'p', text: 'Gustave Le Bon’s The Crowd (1895) portrayed crowds as irrational and suggestible, and the picture stuck. Modern research (E. L. Quarantelli on disasters, Stephen Reicher on crowds) finds that in emergencies people usually help one another, and that “mass panic” is rare. Fires, evacuations and bombings show orderly cooperation more often than stampede. Deadly crushes (such as at stadiums and festivals) typically result from overcrowding, design and poor control, with people unable to move or breathe, not from selfish panic.' },
        {
          t: 'dodont',
          do: ['Design venues and events for safe crowd density and exits.', 'Give clear, early, trusted information in emergencies.', 'Treat crowds as made up of people who often look after each other.'],
          dont: ['Assume that telling people the truth will cause panic.', 'Blame victims of a crush for “panicking”.', 'Ignore that fear of an unseen danger can be rational.'],
        },
      ],
    },
    {
      id: 'avoid',
      title: 'Thinking independently in a herd',
      blocks: [
        {
          t: 'checklist',
          items: [
            'Ask: what information do the others have that I do not, and is anyone just copying someone else?',
            'Seek independent sources before deciding, rather than counting how many people agree.',
            'Notice when you feel fear of missing out or fear of standing apart.',
            'Make a decision in private first (write it down) and then compare with others.',
            'Look for an ally: even one dissenter makes independence easier, as Asch showed.',
            'Beware of unanimous crowds on things that are hard to judge.',
            'When you are the one setting the example, remember others may copy you without thinking.',
          ],
        },
        { t: 'links', items: [{ path: 'anthropology/conventions-and-conformity/conformity-and-obedience', note: 'Asch, Milgram and social proof' }, { path: 'game-theory/classic-games/coordination-and-focal-points', note: 'Stag hunt and coordination' }, { path: 'finance/start-here', note: 'Markets and behaviour' }] },
      ],
    },
  ],
  sources: [
    'Bikhchandani, S., Hirshleifer, D., and Welch, I. (1992). A theory of fads, fashion, custom, and cultural change as informational cascades. Journal of Political Economy.',
    'Diamond, D. W., and Dybvig, P. H. (1983). Bank runs, deposit insurance, and liquidity. Journal of Political Economy.',
    'Surowiecki, J. (2004). The Wisdom of Crowds. Doubleday.',
    'Salganik, M. J., Dodds, P. S., and Watts, D. J. (2006). Experimental study of inequality and unpredictability in an artificial cultural market. Science.',
    'Galton, F. (1907). Vox populi. Nature.',
    'Goldgar, A. (2007). Tulipmania: Money, Honor, and Knowledge in the Dutch Golden Age. University of Chicago Press.',
    'Reicher, S. (2011). Mass action and mundane reality: an argument for putting crowd analysis at the center of the social sciences. Journal of Social Issues.',
  ],
  related: ['anthropology/conventions-and-conformity/conformity-and-obedience', 'anthropology/conventions-and-conformity/cultural-transmission', 'game-theory/classic-games/coordination-and-focal-points'],
}

export default guide
