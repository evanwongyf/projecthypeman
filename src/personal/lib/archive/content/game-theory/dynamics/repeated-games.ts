import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The prisoner’s dilemma predicts defection when played once. But most relationships are repeated: neighbours, colleagues, trading partners and nations meet again. When there is a tomorrow, a betrayal today can be punished tomorrow, and cooperation can be an equilibrium of self-interested players. This is the “shadow of the future”. Robert Axelrod’s famous tournaments showed that simple, forgiving strategies like tit for tat can flourish. This guide explains the logic, works out when cooperation is sustainable, and gives you a tournament to run.',
  nutshell: [
    'In a **repeated** game, today’s choices can depend on history, so players can **reward cooperation and punish defection**.',
    'Cooperation is sustainable if players are **patient enough**: the future gains outweigh the temptation to defect now (the **discount factor** must be high enough).',
    'The **folk theorem**: with patient players, almost any outcome better than the worst-case can be an equilibrium. Repetition creates **many** equilibria, including cooperation.',
    '**Tit for tat** won Axelrod’s tournaments: it is **nice**, **retaliatory**, **forgiving** and **clear**. With **noise**, more forgiving strategies do better.',
    'A known **final round** unravels cooperation by backward induction in theory; in practice people still cooperate until near the end.',
  ],
  sections: [
    {
      id: 'shadow',
      title: 'The shadow of the future',
      blocks: [
        { t: 'p', text: 'Suppose the dilemma is played every round, and after each round there is a chance of another. A player can adopt a strategy such as: “I cooperate as long as you do. If you ever defect, I defect forever.” This is the **grim trigger**. If both use it, neither wants to defect. The one-time gain from betrayal is outweighed by the loss of all future cooperation, provided the future matters enough.' },
        {
          t: 'math',
          tex: '\\delta \\ge \\frac{T - R}{T - P}',
          caption: 'Condition for grim trigger to sustain cooperation in a repeated prisoner’s dilemma.',
          plain: 'Defecting once gives a bigger payoff now (T instead of R), but then you get the poor punishment payoff P forever instead of R forever. The discount factor δ says how much a payoff next round is worth compared with one now. If δ is large enough, the lost future cooperation outweighs the one-time gain.',
          where: [
            { sym: '\\delta', def: 'discount factor between 0 and 1: the weight on next round compared with this one (also the probability the game continues, or how patient you are)' },
            { sym: 'T', def: 'temptation payoff for defecting on a cooperator' },
            { sym: 'R', def: 'reward payoff when both cooperate' },
            { sym: 'P', def: 'punishment payoff when both defect' },
          ],
          syntax: [
            { sym: '\\delta', say: '“delta”: a number like 0.9. Close to 1 means the future matters almost as much as now.' },
            { sym: '\\ge', say: '“at least”: cooperation holds when δ is at or above the threshold.' },
            { sym: '\\frac{T-R}{T-P}', say: '“T minus R over T minus P”: the extra gain from defecting, divided by the total difference between temptation and punishment.' },
          ],
          worked: {
            title: 'With the lab’s payoffs',
            steps: [
              'Payoffs: \\(T = 5\\), \\(R = 3\\), \\(P = 1\\), \\(S = 0\\).',
              'Cooperating forever is worth \\(R + \\delta R + \\delta^2 R + \\dots = \\dfrac{R}{1-\\delta} = \\dfrac{3}{1-\\delta}\\).',
              'Defecting once and being punished forever is worth \\(T + \\delta P + \\delta^2 P + \\dots = 5 + \\dfrac{\\delta}{1-\\delta}\\).',
              'Cooperation is better when \\(\\dfrac{3}{1-\\delta} \\ge 5 + \\dfrac{\\delta}{1-\\delta}\\). Multiply by \\(1-\\delta\\): \\(3 \\ge 5(1-\\delta) + \\delta = 5 - 4\\delta\\), so \\(4\\delta \\ge 2\\), so \\(\\delta \\ge 0.5\\).',
              'Check with the formula: \\(\\dfrac{T-R}{T-P} = \\dfrac{5-3}{5-1} = \\dfrac{2}{4} = 0.5\\).',
            ],
            answer: 'Cooperation can be sustained if the players value the future at least half as much as the present. If there is a 60 per cent chance each round that the game continues, they will cooperate. If the chance is 40 per cent, they will not.',
          },
        },
        { t: 'callout', tone: 'note', title: 'Where the “discount” comes from', text: 'δ can reflect impatience, the chance the relationship ends, or both. Relationships that are expected to last, with frequent interaction, support more cooperation. That is why long-term business partners, neighbours and close-knit communities cooperate more readily than strangers on a one-off deal.' },
      ],
    },
    {
      id: 'axelrod',
      title: 'Axelrod’s tournaments',
      blocks: [
        { t: 'p', text: 'In 1980 political scientist Robert Axelrod invited experts to submit computer programs to play a repeated prisoner’s dilemma against each other. The winner was the simplest entry, submitted by Anatol Rapoport: tit for tat, which cooperates on the first move and then copies the opponent’s previous move. A second, larger tournament with 62 entries had the same result. Axelrod drew four lessons from the top performers.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Nice', title: 'Do not be the first to defect', body: 'All the top programs were “nice”: they never defected first.' },
            { tag: 'Retaliatory', title: 'Punish defection', body: 'Programs that did not retaliate were exploited by those that defect.' },
            { tag: 'Forgiving', title: 'Return to cooperation', body: 'The best programs stopped punishing once the other returned to cooperation, avoiding endless feuds.' },
            { tag: 'Clear', title: 'Be easy to read', body: 'A pattern that others can understand makes cooperation easier to sustain.' },
          ],
        },
        { t: 'game-lab', viz: 'tournament' },
        {
          t: 'checklist',
          items: [
            'Run the default group with no noise. Tit-for-tat variants and grim trigger do well; always defect does poorly because it meets many retaliators.',
            'Add noise of 5 or 10 per cent. Strict tit for tat can fall into long feuds after a single error; generous and two-tats strategies recover.',
            'Remove all the nice strategies and leave always defect with a few others. Notice how it does when there are suckers to exploit.',
            'Use the head-to-head box to see how two strategies behave round by round.',
          ],
        },
        { t: 'callout', tone: 'fact', title: 'Noise and Pavlov', text: 'With errors, tit for tat can get stuck retaliating. In 1993 Nowak and Sigmund showed that “win-stay, lose-shift” (Pavlov) beats it in noisy environments by correcting mistakes within two rounds. Forgiveness is more valuable the noisier the world.' },
      ],
    },
    {
      id: 'folk',
      title: 'The folk theorem and its meaning',
      blocks: [
        { t: 'p', text: 'The folk theorem (so called because it was known before it was published) says that in an infinitely repeated game with patient players, any outcome that gives each player more than their minimum guaranteed payoff can be sustained as an equilibrium. This is good news and bad news. Cooperation is possible. But so are many other outcomes, including bad ones such as endless mutual punishment. Theory does not say which will occur; history, culture and norms decide.' },
        {
          t: 'table',
          head: ['Mechanism', 'How it supports cooperation', 'Real-world example'],
          rows: [
            ['Trigger strategies', 'A defection ends cooperation for good', 'A supplier that never deals again with a cheat'],
            ['Reputation', 'Defection with one partner damages relations with all', 'Merchant networks, credit ratings'],
            ['Third-party punishment', 'Others join in punishing a defector', 'Community shunning, trade embargoes'],
            ['Long horizons', 'The future outweighs the short-term gain', 'Family firms, small towns'],
            ['Observability', 'Defection can be detected and attributed', 'Accounting, audits, monitoring'],
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'The last round',
          text: 'If everyone knows the final round, defection is rational there. Then the second-last round becomes the last that matters, and so on: cooperation unravels back to round one. In experiments, people do cooperate for most of a finite game and defect near the end. Uncertainty about when the game ends, or a small share of players who cooperate unconditionally, restores cooperation in theory.',
        },
        { t: 'links', items: [{ path: 'game-theory/classic-games/prisoners-dilemma', note: 'The one-shot dilemma' }, { path: 'game-theory/society/trust-reputation-and-punishment', note: 'Reputation and punishment in societies' }, { path: 'game-theory/dynamics/evolutionary-game-theory', note: 'How cooperation evolves' }] },
      ],
    },
  ],
  sources: [
    'Axelrod, R. (1980). Effective choice in the prisoner’s dilemma. Journal of Conflict Resolution; and More effective choice in the prisoner’s dilemma.',
    'Axelrod, R. (1984). The Evolution of Cooperation. Basic Books.',
    'Nowak, M., and Sigmund, K. (1993). A strategy of win-stay, lose-shift that outperforms tit-for-tat in the prisoner’s dilemma game. Nature.',
    'Fudenberg, D., and Maskin, E. (1986). The folk theorem in repeated games with discounting or with incomplete information. Econometrica.',
    'Mailath, G. J., and Samuelson, L. (2006). Repeated Games and Reputations. Oxford University Press.',
  ],
  related: ['game-theory/classic-games/prisoners-dilemma', 'game-theory/dynamics/evolutionary-game-theory', 'game-theory/society/trust-reputation-and-punishment'],
}

export default guide
