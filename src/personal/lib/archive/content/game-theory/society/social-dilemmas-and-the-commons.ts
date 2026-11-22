import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The prisoner’s dilemma has two players. Most social problems have thousands. When everyone benefits from a shared resource or a public good, each person is tempted to let others pay. A meadow is overgrazed, a fishery collapses, the air stays dirty, volunteers are scarce. The logic is the same as in the dilemma, but it grows worse with numbers. This guide explains the tragedy of the commons, public goods games, free riding and the logic of collective action, and then Elinor Ostrom’s discovery that real communities often solve these problems without either a central government or privatisation.',
  nutshell: [
    '**Tragedy of the commons** (Hardin, 1968): when a shared resource is open to all, each user gains fully from using more but bears only a fraction of the damage. The result is overuse.',
    '**Public goods** are non-excludable (you cannot stop non-payers using them) and non-rival. Each person has a motive to **free ride**.',
    '**Olson’s logic of collective action**: large groups find it harder to organise than small ones, because each member’s contribution matters less.',
    '**Ostrom** (Nobel 2009) showed that communities worldwide manage commons sustainably with **clear rules, monitoring and graduated sanctions**.',
    'The tragedy is **not inevitable**: it depends on the rules and the community, and the resource.',
  ],
  sections: [
    {
      id: 'commons',
      title: 'The tragedy of the commons',
      blocks: [
        { t: 'p', text: 'Garrett Hardin’s 1968 essay pictured herders sharing a pasture. Each reasons: if I add one more animal, I receive all the gain from selling it, and the cost of the extra grazing is shared among all herders. So each adds animals, and the pasture is destroyed. It is a many-player prisoner’s dilemma.' },
        {
          t: 'table',
          head: ['Example', 'Private gain', 'Shared cost'],
          rows: [
            ['Fisheries', 'Extra catch', 'Depleted stock for all'],
            ['Groundwater', 'Water for my crops', 'Falling water table'],
            ['Atmosphere', 'Cheap energy', 'Climate change'],
            ['Antibiotics', 'Treating my own infection', 'Resistance spreads'],
            ['Congested roads and servers', 'My trip or request', 'Slower for everyone'],
            ['Open-plan office noise', 'My loud call', 'Everyone’s concentration'],
          ],
        },
        { t: 'callout', tone: 'note', title: 'A misreading of Hardin', text: 'Hardin imagined an open-access pasture with no rules. Commons with defined users and rules are different, and many have lasted for centuries. The tragedy is a result of open access, not of sharing as such.' },
      ],
    },
    {
      id: 'public',
      title: 'Public goods and free riding',
      blocks: [
        { t: 'p', text: 'In experiments, a standard public goods game gives each of a group of people an endowment. Each decides how much to put into a common pot. The pot is multiplied (say by 1.6) and divided equally among all, whether or not they contributed. The group does best if everyone contributes everything, but each individual does best by contributing nothing.' },
        {
          t: 'math',
          tex: '\\pi_i = (E - g_i) + m \\cdot \\frac{\\sum_{j} g_j}{n}',
          caption: 'Payoff of person i in a linear public goods game.',
          plain: 'You keep whatever you do not contribute. You also receive an equal share of the multiplied pot. Because the multiplier is smaller than the number of players, each unit you contribute returns less than a unit to you, even though it returns more than a unit to the group.',
          where: [
            { sym: '\\pi_i', def: 'person i’s total payoff' },
            { sym: 'E', def: 'each person’s endowment' },
            { sym: 'g_i', def: 'what person i contributes' },
            { sym: 'm', def: 'the multiplier applied to the pot (for example 1.6)' },
            { sym: 'n', def: 'the number of players' },
          ],
          syntax: [
            { sym: '\\sum_{j} g_j', say: '“the sum over j of g j”: add up everyone’s contribution.' },
            { sym: '\\frac{m}{n}', say: '“m over n”: the marginal per-capita return, what you get back from each unit you put in.' },
          ],
          worked: {
            title: 'Four players, multiplier 1.6',
            steps: [
              'Each player has \\(E = 20\\). With \\(n = 4\\) and \\(m = 1.6\\), the marginal per-capita return is \\(\\dfrac{1.6}{4} = 0.4\\).',
              'If you put in 1 more unit, you lose 1 and gain 0.4 back: a net loss of 0.6. So you do not contribute.',
              'But the group as a whole gains \\(1.6 - 1 = 0.6\\) from that unit.',
              'If all four give everything: each gets \\(\\dfrac{1.6 \\times 80}{4} = 32\\). If nobody gives: each keeps 20.',
              'If three give everything and you give nothing: you get \\(20 + \\dfrac{1.6 \\times 60}{4} = 20 + 24 = 44\\), while each contributor gets \\(0 + 24 = 24\\).',
            ],
            answer: 'The free rider earns 44, the contributors 24 each, and full cooperation would give 32 each. Contributing is individually costly (0.4 back per unit) but collectively valuable (1.6), the signature of a public goods dilemma.',
          },
        },
        {
          t: 'table',
          head: ['Finding from experiments', 'Detail'],
          rows: [
            ['Initial contributions', 'People contribute about 40 to 60 per cent of their endowment in the first round, more than theory predicts'],
            ['Decay with repetition', 'Contributions fall round by round as cooperators see free riders and reduce their own giving'],
            ['Conditional cooperators', 'Many people are willing to give if others do, and many are not'],
            ['Effect of punishment', 'Allowing players to pay to punish free riders raises contributions sharply and keeps them high (Fehr and Gächter, 2000)'],
            ['Group size', 'Contributions tend to fall as groups grow, especially when the per-capita return is lower'],
          ],
        },
      ],
    },
    {
      id: 'olson',
      title: 'Olson: why large groups struggle',
      blocks: [
        { t: 'p', text: 'Mancur Olson’s The Logic of Collective Action (1965) pointed out that shared interests do not automatically produce collective action. In a large group each person’s contribution makes a negligible difference, but their cost is real. So large, diffuse groups (consumers, taxpayers) are hard to organise, while small, concentrated groups (industry lobbies) find it easy. Organisations overcome the problem through **selective incentives** that benefit only members: insurance for union members, discounts for club members, social approval.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Small group', title: 'Easier', body: 'Each member’s share is large, monitoring is easy and everyone knows each other.' },
            { tag: 'Large group', title: 'Harder', body: 'Each contribution is small, free riding is hard to detect and anonymity weakens pressure.' },
            { tag: 'Selective incentive', title: 'A private reward', body: 'Benefits only for members or contributors: pensions in a union, a membership card.' },
            { tag: 'Coercion', title: 'Compulsion', body: 'Taxes and mandatory dues solve free riding by force, with the standard consent and fairness issues.' },
          ],
        },
      ],
    },
    {
      id: 'ostrom',
      title: 'Ostrom: governing the commons',
      blocks: [
        { t: 'p', text: 'Elinor Ostrom studied thousands of cases: Swiss alpine meadows, Japanese common forests, Spanish irrigation systems, Maine lobster fisheries, Philippine irrigators. Many had managed shared resources successfully for centuries. She identified design principles that tend to be present in the durable ones, and received the Nobel Memorial Prize in Economics in 2009 (the first woman to do so).' },
        {
          t: 'table',
          head: ['Design principle', 'In practice'],
          rows: [
            ['1. Clearly defined boundaries', 'Who may use the resource, and the limits of the resource itself, are known'],
            ['2. Rules fit local conditions', 'Rules on timing, amounts and technology match local conditions, and costs match benefits'],
            ['3. Collective-choice arrangements', 'Those affected can take part in changing the rules'],
            ['4. Monitoring', 'Monitors are accountable to the users, or are users themselves'],
            ['5. Graduated sanctions', 'Violations are met with penalties that start small and rise for repeat offences'],
            ['6. Conflict-resolution mechanisms', 'Cheap, accessible ways to resolve disputes'],
            ['7. Recognition of the right to organise', 'External authorities do not undermine local rule-making'],
            ['8. Nested enterprises', 'For larger systems, governance is organised in layers'],
          ],
        },
        {
          t: 'callout',
          tone: 'fact',
          title: 'The lesson',
          text: 'The choice is not only between a central authority and the market. Communities with clear rules, mutual monitoring and proportionate punishments often sustain shared resources. This works best in smaller groups with shared norms and repeated interaction, and less well for global problems such as climate, which is why they need international institutions.',
        },
        { t: 'links', items: [{ path: 'game-theory/society/trust-reputation-and-punishment', note: 'Punishment and cooperation' }, { path: 'game-theory/society/institutions-and-the-state', note: 'Institutions and the state' }, { path: 'anthropology/society/economies-and-exchange', note: 'Commons and exchange across cultures' }] },
      ],
    },
  ],
  sources: [
    'Hardin, G. (1968). The tragedy of the commons. Science.',
    'Olson, M. (1965). The Logic of Collective Action. Harvard University Press.',
    'Ostrom, E. (1990). Governing the Commons. Cambridge University Press.',
    'Fehr, E., and Gächter, S. (2000). Cooperation and punishment in public goods experiments. American Economic Review.',
    'Ledyard, J. O. (1995). Public goods: a survey of experimental research. In Handbook of Experimental Economics.',
  ],
  related: ['game-theory/classic-games/prisoners-dilemma', 'game-theory/society/trust-reputation-and-punishment', 'game-theory/society/institutions-and-the-state'],
}

export default guide
