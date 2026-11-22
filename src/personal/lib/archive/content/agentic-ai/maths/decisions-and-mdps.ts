import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Underneath every agent is a decision problem: in this situation, which action is best? Decision theory and reinforcement learning give precise tools for that question: expected utility for one-off choices, Markov decision processes for sequences of choices, the Bellman equation to compute the value of a situation, and bandit algorithms for balancing trying new things against using what works.',
  nutshell: [
    '**Expected utility**: weigh each outcome’s value by its probability and add.',
    'A **Markov decision process** (MDP) has states, actions, transition probabilities, rewards and a discount factor γ.',
    'The **Bellman equation**: a state’s value is the best immediate reward plus the discounted value of where you land.',
    '**Bandits** (UCB): try options in proportion to how promising and how uncertain they are.',
  ],
  sections: [
    {
      id: 'eu',
      title: 'Expected utility: act or ask?',
      blocks: [
        {
          t: 'math',
          tex: String.raw`EU(a) = \sum_{o} P(o \mid a)\, U(o)`,
          caption: 'The expected utility of action a: the probability-weighted average of the utilities of its outcomes.',
          plain: 'For each possible action, list what could happen, how likely each outcome is, and how good or bad it would be (its utility). Multiply and add. A rational agent picks the action with the highest total. This is how to decide whether an agent should act alone or stop and ask a human.',
          where: [
            { sym: 'a', def: 'an action' },
            { sym: 'o', def: 'a possible outcome' },
            { sym: String.raw`P(o \mid a)`, def: 'probability of outcome o if you take action a' },
            { sym: 'U(o)', def: 'utility (value) of outcome o' },
          ],
          syntax: [
            { sym: String.raw`\sum_{o}`, say: '“sum over all outcomes o”' },
            { sym: String.raw`\mid`, say: '“given”' },
          ],
          worked: {
            title: 'Should a booking agent ask before paying?',
            steps: [
              'Act now: 90% chance it books the right flight (+10), 10% it books the wrong one (−50, a costly refund).',
              String.raw`\(EU(\text{act}) = 0.9 \times 10 + 0.1 \times (-50) = 9 - 5 = 4\).`,
              'Ask first: costs −1 (the user’s time), then 99% right (+10), 1% wrong (−50).',
              String.raw`\(EU(\text{ask}) = -1 + 0.99 \times 10 + 0.01 \times (-50) = -1 + 9.9 - 0.5 = 8.4\).`,
            ],
            why: [
              'list the outcomes of acting with their values',
              'weight and add',
              'the same for asking, including its small cost',
              'weight and add',
            ],
            answer: 'Asking is better (8.4 against 4). Big downside risks justify human confirmation even when the agent is usually right; trivial actions do not.',
          },
        },
      ],
    },
    {
      id: 'mdp',
      title: 'Markov decision processes',
      blocks: [
        { t: 'terms', items: [
          { term: 'State s', def: 'The situation the agent is in (what is known so far, which files exist).' },
          { term: 'Action a', def: 'A choice (call a tool, reply, stop).' },
          { term: 'Transition P(s′ | s, a)', def: 'The probability of landing in state s′ after action a in state s.' },
          { term: 'Reward R(s, a)', def: 'The immediate payoff (or cost) of the action.' },
          { term: 'Discount γ', def: 'A number between 0 and 1: how much a reward one step later is worth compared with now.' },
          { term: 'Policy π', def: 'A rule for choosing actions in each state.' },
        ] },
        {
          t: 'math',
          tex: String.raw`G = r_0 + \gamma r_1 + \gamma^2 r_2 + \cdots = \sum_{t=0}^{\infty} \gamma^{t} r_t`,
          caption: 'The discounted return: the total reward, with later rewards shrunk by powers of γ.',
          plain: 'Add up all the rewards an agent collects, but count a reward t steps in the future as worth γᵗ of a reward now. With γ below 1, the agent prefers sooner rewards and long sums stay finite. A γ near 1 makes it patient; near 0 makes it short-sighted.',
          where: [
            { sym: 'G', def: 'the return' },
            { sym: String.raw`r_t`, def: 'reward at step t' },
            { sym: String.raw`\gamma`, def: 'discount factor, 0 ≤ γ < 1' },
          ],
          syntax: [
            { sym: String.raw`\gamma`, say: '“gamma”' },
            { sym: String.raw`\gamma^{t}`, say: '“gamma to the t”: γ multiplied by itself t times' },
            { sym: String.raw`\cdots`, say: '“and so on”' },
          ],
          worked: {
            title: 'A reward of 10 that arrives on step 2',
            steps: [
              String.raw`Rewards: \(r_0 = 0, r_1 = 0, r_2 = 10\); \(\gamma = 0.9\).`,
              String.raw`\(G = 0 + 0.9 \times 0 + 0.9^2 \times 10\).`,
              String.raw`\(0.9^2 = 0.81\), so \(G = 8.1\).`,
            ],
            why: [
              'the reward comes two steps after now',
              'plug into the sum',
              'two steps of discounting shrink 10 to 8.1',
            ],
            answer: 'G = 8.1. Reaching the same reward in one step would give 9, so the discounted agent prefers faster routes.',
          },
        },
        {
          t: 'math',
          tex: String.raw`V^*(s) = \max_{a} \Big[ R(s,a) + \gamma \sum_{s'} P(s' \mid s,a)\, V^*(s') \Big]`,
          caption: 'The Bellman optimality equation.',
          plain: 'The value of a state is what you can expect to collect from it if you act as well as possible from then on. That splits into the reward for the best next action, plus the discounted value of wherever that action is likely to take you. Solving these equations for every state tells the agent what to do.',
          where: [
            { sym: String.raw`V^*(s)`, def: 'the optimal value of state s' },
            { sym: 'R(s, a)', def: 'immediate reward of action a in state s' },
            { sym: String.raw`P(s' \mid s, a)`, def: 'chance of moving to state s′' },
          ],
          syntax: [
            { sym: String.raw`\max_{a}`, say: '“the maximum over actions a”: try each action and keep the best' },
            { sym: String.raw`V^*`, say: '“V star”: the best achievable value' },
            { sym: String.raw`s'`, say: '“s prime”: the next state' },
          ],
          worked: {
            title: 'Answer directly, or use a tool first?',
            steps: [
              'In state S the agent can answer directly (reward 4, then done) or call a tool (reward −1 for its cost) which leads to state T. In T, answering gives reward 6, then done. γ = 0.9.',
              String.raw`\(V^*(T) = 6\) (only one action, then the episode ends).`,
              String.raw`Direct: \(Q(S,\text{direct}) = 4 + 0.9 \times 0 = 4\).`,
              String.raw`Tool: \(Q(S,\text{tool}) = -1 + 0.9 \times V^*(T) = -1 + 5.4 = 4.4\).`,
              String.raw`\(V^*(S) = \max(4, 4.4) = 4.4\).`,
            ],
            why: [
              'set up the small decision problem',
              'work backwards from the end: T’s value is its only reward',
              'the end state is worth 0',
              'pay the tool cost now, collect the better answer one step later',
              'the Bellman equation keeps the better action',
            ],
            answer: 'Using the tool is worth it (4.4 against 4). If the tool cost rose above 1.4, or γ fell below 5/6, answering directly would win.',
          },
        },
      ],
    },
    {
      id: 'bandits',
      title: 'Exploration: bandits and UCB',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{UCB}_i = \bar x_i + \sqrt{\frac{2 \ln N}{n_i}}`,
          caption: 'The UCB1 score (Auer et al., 2002): pick the option with the highest score.',
          plain: 'Suppose an agent can choose between several prompts, tools or strategies, and learns how well each works only by trying them. Always picking the current best can lock in a lucky early result; always exploring wastes effort. UCB adds a bonus to each option’s average that is large when it has been tried rarely, so uncertain options get a fair chance, and the bonus shrinks as evidence builds up.',
          where: [
            { sym: String.raw`\bar x_i`, def: 'average reward of option i so far (between 0 and 1)' },
            { sym: String.raw`n_i`, def: 'times option i has been tried' },
            { sym: 'N', def: 'total tries of all options' },
          ],
          syntax: [
            { sym: String.raw`\ln N`, say: '“natural log of N”' },
            { sym: String.raw`\sqrt{\;}`, say: '“square root of”' },
          ],
          worked: {
            title: 'Two prompt templates',
            steps: [
              String.raw`Template A: 10 tries, success rate 0.7. Template B: 3 tries, success rate 0.6. \(N = 13\), \(\ln 13 \approx 2.565\).`,
              String.raw`A’s bonus: \(\sqrt{2 \times 2.565 / 10} = \sqrt{0.513} \approx 0.716\). Score \(0.7 + 0.716 = 1.416\).`,
              String.raw`B’s bonus: \(\sqrt{5.13 / 3} = \sqrt{1.71} \approx 1.308\). Score \(0.6 + 1.308 = 1.908\).`,
              'B has the higher score.',
            ],
            why: [
              'collect each option’s average and count',
              'A has been tried a lot, so its bonus is small',
              'B has been tried only three times, so it is uncertain and gets a large bonus',
              'choose the highest upper bound',
            ],
            answer: 'Try B next. Its average is lower but so poorly measured that it might really be better. As both are tried more, the bonuses shrink and the better template wins.',
          },
        },
      ],
    },
  ],
  sources: [
    'Sutton, R. S., & Barto, A. G. (2018). Reinforcement Learning: An Introduction (2nd ed.). MIT Press.',
    'Russell, S., & Norvig, P. (2021). Artificial Intelligence: A Modern Approach (4th ed.), chapters 16–17.',
    'Auer, P., Cesa-Bianchi, N., & Fischer, P. (2002). Finite-time analysis of the multiarmed bandit problem. Machine Learning, 47, 235–256.',
  ],
  related: ['ai/generative/reinforcement', 'agentic-ai/maths/search-and-planning', 'game-theory/start-here'],
}

export default guide
