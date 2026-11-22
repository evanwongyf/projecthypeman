import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Game theory does not need thinking players. Animals, plants, microbes and even customs “play” games, with payoffs measured in offspring or in how widely a habit spreads. In evolutionary game theory, strategies that do better become more common, and the question is which strategies survive. The central idea, the evolutionarily stable strategy, was introduced by John Maynard Smith and George Price in 1973 to explain why animals fight less viciously than they could. It also explains why cooperation evolves, and it applies to cultures as well as genes.',
  nutshell: [
    'A strategy is **evolutionarily stable (ESS)** if, once most of a population uses it, no rare alternative can invade.',
    'In **hawk-dove**, if fighting costs more than the prize, the ESS is a **mix**: a stable share V/C of hawks.',
    '**Replicator dynamics**: a strategy grows when its payoff exceeds the population average.',
    'In the one-shot **prisoner’s dilemma**, defectors take over. Cooperation can evolve with **repetition, kin selection, reciprocity, group structure and reputation**.',
    'The same models apply to **cultural** evolution: practices spread if people copy those that seem to work.',
  ],
  sections: [
    {
      id: 'ess',
      title: 'Hawks and doves',
      blocks: [
        { t: 'p', text: 'Animals contest resources such as territory. Suppose there are two strategies. A **hawk** always escalates to a fight. A **dove** displays and retreats if the other escalates. Let the prize be worth V and let an injury from a fight cost C.' },
        {
          t: 'table',
          head: ['', 'Opponent is a hawk', 'Opponent is a dove'],
          rows: [
            ['You are a hawk', '(V − C)/2: win half the time, get hurt half the time', 'V: you take the prize'],
            ['You are a dove', '0: you retreat', 'V/2: you share the prize'],
          ],
          caption: 'Payoffs to the row strategy. V is the prize, C is the cost of injury.',
        },
        {
          t: 'math',
          tex: 'x^{*} = \\frac{V}{C} \\quad (\\text{if } C > V)',
          caption: 'The evolutionarily stable proportion of hawks in hawk-dove when injury costs exceed the prize.',
          plain: 'If fighting costs more than the prize is worth, hawks cannot take over, because hawks meeting hawks lose out. Doves cannot take over either, because a lone hawk would then win every contest. The population settles at the share of hawks where hawks and doves do equally well.',
          where: [
            { sym: 'x^{*}', def: 'the stable share of hawks in the population' },
            { sym: 'V', def: 'value of the prize' },
            { sym: 'C', def: 'cost of losing a fight (injury)' },
          ],
          syntax: [
            { sym: 'x^{*}', say: '“x star”: the equilibrium share.' },
            { sym: '\\frac{V}{C}', say: '“V over C”: the prize divided by the cost.' },
          ],
          worked: {
            title: 'A stable mix',
            steps: [
              'Let \\(V = 4\\) and \\(C = 6\\). Suppose a share \\(x\\) of the population are hawks.',
              'A hawk earns on average \\(x \\cdot \\dfrac{V-C}{2} + (1-x) \\cdot V = x(-1) + (1-x)(4)\\).',
              'A dove earns on average \\(x \\cdot 0 + (1-x)\\cdot \\dfrac{V}{2} = (1-x)(2)\\).',
              'Set equal: \\(-x + 4 - 4x = 2 - 2x\\), so \\(4 - 5x = 2 - 2x\\), so \\(2 = 3x\\), so \\(x = \\dfrac{2}{3}\\).',
            ],
            answer: 'Two thirds hawks, one third doves (that is V/C = 4/6). At that mix both strategies earn the same, so neither spreads at the other’s expense.',
          },
        },
        { t: 'game-lab', viz: 'evolution' },
        { t: 'callout', tone: 'note', title: 'What it explained', text: 'Why do animals use ritual displays rather than fighting to the death? Maynard Smith and Price showed that a population of unconditional fighters is not stable when injuries are costly. Restraint, or conditional strategies such as “fight only over what you already hold” (the bourgeois strategy), can be evolutionarily stable. It is a model, not proof about any one species, though many field studies find similar patterns of contest restraint.' },
      ],
    },
    {
      id: 'repl',
      title: 'Replicator dynamics',
      blocks: [
        { t: 'p', text: 'The lab above uses the replicator equation: the share of a strategy changes in proportion to how much its payoff exceeds the population average. It needs no thinking: it just says that successful strategies leave more copies. The equilibria of the dynamics are related to Nash equilibria, and the stable ones are evolutionarily stable.' },
        {
          t: 'table',
          head: ['Game', 'Dynamic result', 'Interpretation'],
          rows: [
            ['Prisoner’s dilemma', 'Defectors take over from any starting mix', 'Cooperation cannot evolve in a well-mixed one-shot population'],
            ['Stag hunt', 'Two stable states (all stag or all hare), separated by a threshold', 'History and starting conditions matter'],
            ['Hawk-dove (cost > prize)', 'A stable mix of the two', 'Coexistence of aggressive and peaceful types'],
            ['Rock-paper-scissors', 'Cycles', 'Strategies rise and fall in turn; seen in side-blotched lizards and in bacteria'],
          ],
        },
      ],
    },
    {
      id: 'coop',
      title: 'How cooperation evolves',
      blocks: [
        { t: 'p', text: 'Martin Nowak summarised five mechanisms by which natural selection can favour cooperation. All have counterparts in human society.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: '1', title: 'Kin selection', body: 'Helping relatives spreads shared genes. Hamilton’s rule: help if relatedness × benefit > cost.' },
            { tag: '2', title: 'Direct reciprocity', body: 'Help those who help you, in repeated encounters. The logic of tit for tat.' },
            { tag: '3', title: 'Indirect reciprocity', body: 'Help those with a good reputation. Gossip and reputation make this work.' },
            { tag: '4', title: 'Network reciprocity', body: 'Cooperators clustered in space or social networks benefit one another and resist invasion by defectors.' },
            { tag: '5', title: 'Group selection', body: 'Groups with more cooperators outcompete groups with fewer. Controversial for genes, plausible for cultures.' },
          ],
        },
        {
          t: 'math',
          tex: 'r\\,b > c',
          caption: 'Hamilton’s rule for the evolution of helping behaviour.',
          plain: 'A gene for helping can spread if the help is directed at relatives who share it. Weigh the benefit to the relative by how closely related they are, and compare it with the cost to the helper.',
          where: [
            { sym: 'r', def: 'relatedness: the chance the relative shares the gene (0.5 for a sibling or child, 0.125 for a first cousin)' },
            { sym: 'b', def: 'benefit to the recipient, in extra offspring' },
            { sym: 'c', def: 'cost to the helper, in lost offspring' },
          ],
          syntax: [{ sym: 'r\\,b > c', say: '“r times b is greater than c”: helping pays, in gene terms, when relatedness times the benefit exceeds the cost.' }],
          worked: {
            title: 'Would you help a sibling?',
            steps: [
              'A helper can give up \\(c = 1\\) offspring to let a full sibling have \\(b = 3\\) more. A full sibling has \\(r = 0.5\\).',
              '\\(r\\,b = 0.5 \\times 3 = 1.5\\), which is greater than \\(c = 1\\).',
              'For a cousin, \\(r = 0.125\\), so \\(r\\,b = 0.125 \\times 3 = 0.375\\), less than 1.',
            ],
            answer: 'Helping a sibling pays in gene terms (1.5 > 1), but helping a first cousin at the same cost does not (0.375 < 1). This is a statement about what natural selection favours, not about what anyone consciously calculates.',
          },
        },
        { t: 'callout', tone: 'warn', title: 'A caution', text: 'Evolutionary models are tools for explaining how traits can arise. They do not show that a behaviour is natural, good, or unchangeable. Human behaviour is also shaped by culture, institutions and choice.' },
        { t: 'links', items: [{ path: 'game-theory/dynamics/repeated-games', note: 'Direct reciprocity in depth' }, { path: 'anthropology/origins/cooperation-and-cumulative-culture', note: 'Cooperation and culture in humans' }] },
      ],
    },
  ],
  sources: [
    'Maynard Smith, J., and Price, G. R. (1973). The logic of animal conflict. Nature.',
    'Maynard Smith, J. (1982). Evolution and the Theory of Games. Cambridge University Press.',
    'Nowak, M. A. (2006). Five rules for the evolution of cooperation. Science.',
    'Hamilton, W. D. (1964). The genetical evolution of social behaviour. Journal of Theoretical Biology.',
    'Weibull, J. W. (1995). Evolutionary Game Theory. MIT Press.',
  ],
  related: ['game-theory/dynamics/repeated-games', 'game-theory/classic-games/prisoners-dilemma', 'anthropology/origins/cooperation-and-cumulative-culture'],
}

export default guide
