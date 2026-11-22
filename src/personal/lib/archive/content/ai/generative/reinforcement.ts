import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'In **reinforcement learning (RL)** nobody gives the right answers. An agent acts in an environment, receives rewards, and must work out which actions lead to the most reward over time, even when the payoff comes much later. RL mastered Go and video games, controls robots, and fine-tunes chatbots from human feedback.',
  nutshell: [
    'Formalised as a **Markov decision process**: states, actions, transitions, rewards and a discount factor.',
    'The goal is to maximise the **expected discounted return** \\(\\sum_t \\gamma^t r_t\\).',
    'The **Bellman equation** expresses a state’s value in terms of the next state’s value.',
    '**Q-learning** learns action values from experience; **policy gradients** improve the policy directly.',
    'Agents must balance **exploration** (try new things) and **exploitation** (use what works).',
  ],
  sections: [
    {
      id: 'lab',
      title: 'An agent learning a maze',
      blocks: [{ t: 'ai-viz', viz: 'qlearning' }],
    },
    {
      id: 'mdp',
      title: 'The setting',
      blocks: [
        {
          t: 'flow',
          nodes: [
            { label: 'Agent observes state sₜ', tone: 'data' },
            { label: 'Chooses action aₜ', sub: 'from its policy π', tone: 'model' },
            { label: 'Environment responds', sub: 'new state sₜ₊₁', tone: 'process' },
            { label: 'Reward rₜ₊₁', tone: 'output' },
          ],
          loop: 'repeat until the episode ends',
        },
        {
          t: 'math',
          tex: String.raw`G_t = r_{t+1} + \gamma r_{t+2} + \gamma^2 r_{t+3} + \dots = \sum_{k=0}^{\infty}\gamma^k r_{t+k+1}`,
          syntax: [
            { sym: String.raw`G_t`, say: String.raw`Read "G sub t": the return starting from time t. The subscript is the time step at which you start counting.` },
            { sym: String.raw`\gamma^2`, say: String.raw`Read "gamma squared": the discount multiplied in twice. The exponent counts how many steps into the future that reward is.` },
            { sym: String.raw`\sum_{k=0}^{\infty}\gamma^k r_{t+k+1}`, say: String.raw`Read "the sum from k equals 0 to infinity of gamma to the k times r sub t plus k plus 1": for k = 0, 1, 2, ... take the reward k+1 steps ahead, weight it by \(\gamma^k\), and add up everything.` },
          ],
          worked: {
            steps: [
              String.raw`An agent receives rewards \(r_1 = 1,\ r_2 = 0,\ r_3 = 10\) and then the episode ends. Use \(\gamma = 0.9\), starting at \(t = 0\).`,
              String.raw`Weights: \(\gamma^0 = 1,\ \gamma^1 = 0.9,\ \gamma^2 = 0.81\).`,
              String.raw`Terms: \(1 \times 1 = 1\), \(0.9 \times 0 = 0\), \(0.81 \times 10 = 8.1\).`,
              String.raw`Add: \(G_0 = 1 + 0 + 8.1 = 9.1\).`,
            ],
            answer: String.raw`\(G_0 = 9.1\): the big reward of 10 two steps away is worth only 8.1 today. With \(\gamma = 1\) the return would be 11; with \(\gamma = 0\) the agent would care about nothing beyond the 1.`,
          },
          caption: 'The return. A discount γ between 0 and 1 makes near rewards worth more than distant ones (and keeps the sum finite). With γ = 0.9 a reward 10 steps away is worth 0.9¹⁰ ≈ 0.35 of the same reward now.',
        },
        {
          t: 'metric',
          name: 'the discount factor (γ)',
          shows: 'How much the agent values future rewards compared with immediate ones, the reinforcement-learning equivalent of the discount rate in [the time value of money](@finance/foundations/time-value), and it plays exactly the same role: converting a stream of future payoffs into one comparable number today. It also directly controls how far-sighted or short-sighted the agent\'s behaviour becomes.',
          eli5: 'Would you rather have a candy right now, or two candies in ten minutes? A very impatient kid (low γ) grabs the candy now without a second thought. A very patient kid (high γ) happily waits for the bigger reward later. γ is the dial that sets exactly how "patient" the agent is when weighing an immediate reward against a bigger one further in the future.',
          higher: 'The agent cares almost as much about rewards far in the future as about immediate ones, it will happily take a worse immediate outcome (even several steps of negative reward) if it leads to a much better long-term payoff, which is essential in the maze lab above, where the agent must walk through several −1 steps before reaching the +10 goal.',
          lower: 'The agent heavily favours immediate rewards and barely cares what happens many steps ahead, useful for tasks where only short-term outcomes matter, but dangerous for long-horizon problems, where a myopic agent might grab a small, easy reward and completely ignore a much larger one just a few steps further away.',
          typical: 'γ = 0.9 to 0.99 is typical for most RL problems; γ closer to 1 (like 0.99 or 0.999) is used for tasks where rewards are sparse and far in the future (like winning a long game), since a low γ would make such distant rewards nearly worthless and give the agent almost nothing useful to learn from.',
        },
        {
          t: 'math',
          tex: String.raw`Q^{*}(s, a) = \mathbb{E}\Big[\,r + \gamma\max_{a'}Q^{*}(s', a')\ \Big|\ s, a\Big]`,
          syntax: [
            { sym: String.raw`Q^{*}`, say: String.raw`Read "Q star": the star marks the optimal version, the value if you play the best possible way from here on.` },
            { sym: String.raw`\max_{a'}Q^{*}(s', a')`, say: String.raw`Read "the maximum over a prime of Q star of s prime and a prime": look at every action a' available in the next state s', and take the best of their values. The prime marks "next".` },
            { sym: String.raw`\mathbb{E}[\,\cdot\mid s, a]`, say: String.raw`Read "the expected value given s and a": average over whatever randomness there is in the reward and the next state after taking action a in state s.` },
          ],
          worked: {
            steps: [
              String.raw`Suppose from state \(s\) the action \(a\) gives reward \(r = 1\) and always lands in state \(s'\), where the optimal values of the two available actions are \(Q^{*}(s', a_1') = 2.0\) and \(Q^{*}(s', a_2') = 5.0\). Take \(\gamma = 0.9\).`,
              String.raw`Best next action: \(\max(2.0, 5.0) = 5.0\).`,
              String.raw`Discount it: \(0.9 \times 5.0 = 4.5\).`,
              String.raw`Add the immediate reward: \(Q^{*}(s, a) = 1 + 4.5 = 5.5\).`,
            ],
            answer: String.raw`\(Q^{*}(s, a) = 5.5\): taking \(a\) is worth 1 now plus 4.5 of discounted future. Q-learning (next) turns this equation into a repeated update.`,
          },
          where: [
            { sym: 'Q^{*}(s, a)', def: 'The best possible expected return from taking action a in state s, then acting optimally forever after' },
            { sym: 's\', a\'', def: 'The next state, and the best action available there' },
          ],
          caption: 'The Bellman optimality equation: the value of taking action a in state s is the immediate reward plus the discounted value of acting optimally afterwards. Read it as a recipe for breaking one hard, long-horizon problem ("how good is this whole future?") into one easy step ("what reward do I get right now?") plus one smaller copy of the same problem one step later, which is exactly what lets Q-learning below learn it from single steps of experience rather than needing to see whole episodes play out.',
        },
      ],
    },
    {
      id: 'qlearning',
      title: 'Q-learning',
      blocks: [
        {
          t: 'math',
          tex: String.raw`Q(s, a) \leftarrow Q(s, a) + \alpha\Big[\underbrace{r + \gamma\max_{a'}Q(s', a')}_{\text{target}} - Q(s, a)\Big]`,
          syntax: [
            { sym: String.raw`\leftarrow`, say: String.raw`Read "is replaced by" or "gets": it is assignment, not equality. Compute the right side with the old value, then overwrite Q(s, a) with it.` },
            { sym: String.raw`\underbrace{\cdots}_{\text{target}}`, say: String.raw`The brace just labels the part inside it as the target: what the estimate should be, judged from the reward just seen.` },
            { sym: String.raw`\alpha[\text{target} - Q(s,a)]`, say: String.raw`Take the gap between the target and the current estimate, and move the estimate a fraction \(\alpha\) of the way towards the target.` },
          ],
          worked: {
            steps: [
              String.raw`The current estimate is \(Q(s, a) = 2.0\). The agent takes the action, receives \(r = 1\), and lands in \(s'\) where the best known value is \(\max_{a'} Q(s', a') = 5.0\). Use \(\alpha = 0.5\) and \(\gamma = 0.9\).`,
              String.raw`Target: \(1 + 0.9 \times 5.0 = 5.5\).`,
              String.raw`Error: \(5.5 - 2.0 = 3.5\).`,
              String.raw`Step: \(\alpha \times 3.5 = 0.5 \times 3.5 = 1.75\).`,
              String.raw`New value: \(Q(s, a) \leftarrow 2.0 + 1.75 = 3.75\).`,
            ],
            answer: String.raw`\(Q(s, a)\) moves from 2.0 to 3.75, halfway to the target of 5.5. Repeating this over many visits pulls it all the way to 5.5.`,
          },
          where: [
            { sym: '\\alpha', def: 'The learning rate (0.5 in the lab)' },
            { sym: '\\gamma', def: 'The discount factor' },
            { sym: 'r + \\gamma\\max Q(s\', a\')', def: 'A better estimate, using the reward actually received' },
          ],
          caption: 'Watkins (1989). Each move nudges the estimate towards the target. Repeated over many episodes, values spread backwards from the goal, which you can see in the lab as the green squares growing from the star.',
        },
        {
          t: 'example',
          title: 'One update',
          lines: [
            { label: 'Situation', text: 'one step from the goal; \\(Q(s, \\rightarrow) = 2\\); moving right reaches the goal: \\(r = 10\\), episode ends' },
            { label: 'Target', text: '\\(10 + 0 = 10\\) (nothing after the goal)' },
            { label: 'Update', text: '\\(Q \\leftarrow 2 + 0.5(10 - 2) = 6\\)' },
          ],
        },
        {
          t: 'math',
          tex: String.raw`a_t = \begin{cases}\text{a random action} & \text{with probability } \varepsilon \\ \arg\max_a Q(s_t, a) & \text{otherwise}\end{cases}`,
          syntax: [
            { sym: String.raw`\arg\max_a Q(s_t, a)`, say: String.raw`Read "arg max over a of Q": not the biggest value itself but the action a that achieves it. If the Q-values are 1, 3 and 2, the max is 3 but the argmax is the action that scored 3.` },
            { sym: String.raw`\begin{cases}\dots\end{cases}`, say: String.raw`The big brace means "pick one of these rows": use the top row when its condition holds and the bottom row otherwise.` },
            { sym: String.raw`\varepsilon`, say: String.raw`Read "epsilon": a small probability such as 0.1, the chance of exploring on any step.` },
          ],
          worked: {
            steps: [
              String.raw`There are 4 actions with \(Q(s_t, \cdot) = [1.0,\ 3.0,\ 2.0,\ 0.5]\) and \(\varepsilon = 0.1\).`,
              String.raw`The argmax is action 2 (value 3.0).`,
              String.raw`With probability \(1 - 0.1 = 0.9\) the agent plays action 2 greedily.`,
              String.raw`With probability 0.1 it picks uniformly at random, i.e. \(0.1 / 4 = 0.025\) for each action (including action 2).`,
              String.raw`Total for action 2: \(0.9 + 0.025 = 0.925\). Each other action: \(0.025\). Check: \(0.925 + 3 \times 0.025 = 1\).`,
            ],
            answer: String.raw`The agent plays its best-known action 92.5% of the time and each alternative 2.5% of the time, so it keeps testing the others without ignoring what it has learned.`,
          },
          caption: 'ε-greedy exploration. Without it, the agent might lock onto the first route it finds and never discover a better one.',
        },
        {
          t: 'metric',
          name: 'the exploration rate (ε)',
          shows: 'The probability the agent tries a random action instead of what it currently believes is best, the deliberate dial controlling the fundamental tension in reinforcement learning between exploring (trying new things to discover if they\'re better) and exploiting (using what has already been learned to work). Without ε > 0, an agent that stumbles onto a mediocre route early can get permanently stuck never discovering a better one exists.',
          eli5: 'Imagine choosing where to eat lunch. Always picking your current favourite restaurant (ε = 0) guarantees a reliably decent meal, but you\'ll never discover if the new place down the street is actually better. Picking somewhere completely random every single time (ε = 1) means you\'ll discover every restaurant eventually, but you\'ll also eat a lot of bad meals along the way instead of enjoying the good one you already found. ε sets how often you gamble on trying somewhere new versus sticking with what you know works.',
          higher: 'The agent explores more, trying random actions more often, which helps it discover better strategies it might otherwise never stumble upon, but at the direct cost of acting on its current best knowledge less often, meaning slower, noisier progress towards good performance in the short run.',
          lower: 'The agent exploits more, sticking closer to its current best-known strategy, which performs more consistently in the short run, but risks settling permanently on a mediocre strategy if it never explores enough to discover something better exists, especially early in training before it has learned much at all.',
          typical: 'A common approach starts with a high ε (like 1.0, almost pure exploration, since the agent knows nothing useful yet) and gradually decays it towards a small value (like 0.01–0.1) as training progresses and the agent\'s knowledge becomes more trustworthy, exploring heavily at first, then increasingly relying on what it has learned.',
        },
        {
          t: 'math',
          tex: String.raw`\nabla_\theta J(\theta) = \mathbb{E}_{\pi_\theta}\big[\nabla_\theta\log\pi_\theta(a_t \mid s_t)\,G_t\big]`,
          syntax: [
            { sym: String.raw`\nabla_\theta J`, say: String.raw`Read "the gradient of J with respect to theta" (nabla is the upside-down triangle): the list of slopes telling you how J changes if you nudge each parameter. Stepping along it increases J.` },
            { sym: String.raw`\mathbb{E}_{\pi_\theta}[\cdot]`, say: String.raw`Read "the expected value when actions are chosen by the policy pi theta": average over the trajectories the current policy actually produces.` },
            { sym: String.raw`\log\pi_\theta(a_t \mid s_t)`, say: String.raw`Read "log pi theta of a t given s t": the log of the probability the policy gave to the action it took. Its gradient says how to change \(\theta\) to make that action more likely.` },
          ],
          worked: {
            steps: [
              String.raw`A policy picks between two actions with softmax over logits \(z = (0,\ 0)\), so \(\pi(a) = \pi(b) = 0.5\). It takes action \(a\) and the return is \(G = 4\). Use learning rate 0.1.`,
              String.raw`For softmax, \(\partial \log\pi(a)/\partial z_a = 1 - \pi(a) = 0.5\) and \(\partial \log\pi(a)/\partial z_b = -\pi(b) = -0.5\).`,
              String.raw`Scale by the return: gradient \(= (0.5 \times 4,\ -0.5 \times 4) = (2,\ -2)\).`,
              String.raw`Step: \(z \leftarrow (0,0) + 0.1 \times (2, -2) = (0.2,\ -0.2)\).`,
              String.raw`New probability of \(a\): \(e^{0.2}/(e^{0.2} + e^{-0.2}) \approx 0.5987\).`,
            ],
            answer: String.raw`One good outcome moves \(\pi(a)\) from 0.50 to about 0.60. With \(G = -4\) the move would go the other way, making \(a\) less likely.`,
          },
          where: [
            { sym: 'J(\\theta)', def: 'The expected return of the policy, the quantity being maximised' },
            { sym: '\\pi_\\theta(a_t \\mid s_t)', def: 'The policy\'s probability of choosing action a_t in state s_t' },
            { sym: 'G_t', def: 'The actual return that followed that action' },
          ],
          caption: 'Policy gradient (REINFORCE, Williams 1992): nudge θ in the direction that increases the log-probability of whatever action was taken, scaled by how good the outcome turned out to be (G_t). An action followed by a large return gets pushed to become more likely; one followed by a poor return barely moves (or, with a negative G_t, is pushed to become less likely), unlike Q-learning, this adjusts the policy directly rather than learning action values first. Modern methods like PPO, used in RLHF, refine this idea.',
        },
        {
          t: 'code',
          code: String.raw`import numpy as np

Q = np.zeros((n_states, n_actions))
for episode in range(500):
    s, done = env.reset(), False
    while not done:
        if np.random.rand() < eps:
            a = np.random.randint(n_actions)       # explore
        else:
            a = int(np.argmax(Q[s]))               # exploit
        s2, r, done = env.step(a)
        target = r + (0 if done else gamma * Q[s2].max())
        Q[s, a] += alpha * (target - Q[s, a])
        s = s2`,
        },
      ],
    },
    {
      id: 'milestones',
      title: 'Milestones',
      blocks: [
        {
          t: 'table',
          head: ['Year', 'System', 'Achievement'],
          rows: [
            ['1992', 'TD-Gammon (Tesauro)', 'Near world-class backgammon by self-play'],
            ['2015', 'DQN (DeepMind)', 'Human-level play on many Atari games from raw pixels, with a neural network for Q'],
            ['2016', 'AlphaGo', 'Beat Lee Sedol 4–1 at Go'],
            ['2017', 'AlphaZero', 'Mastered chess, shogi and Go from self-play alone, in hours to days'],
            ['2019', 'AlphaStar, OpenAI Five', 'Top-level StarCraft II and Dota 2'],
            ['2022+', 'RLHF', 'Tuning chat models to human preferences'],
          ],
        },
        { t: 'callout', tone: 'fact', title: 'Move 37', text: 'In game 2 against Lee Sedol, AlphaGo played a move on the fifth line that commentators first thought was a mistake; AlphaGo estimated a human would play it about 1 time in 10,000. It proved decisive. In game 4, Lee Sedol’s own surprising move 78 won him the only game a human took from it.' },
      ],
    },
  ],
  sources: ['Sutton, R. S., & Barto, A. G. (2018). *Reinforcement Learning: An Introduction* (2nd ed.). MIT Press (free online).', 'Watkins, C. J. C. H., & Dayan, P. (1992). Q-learning. *Machine Learning*, 8, 279–292.', 'Mnih, V., et al. (2015). Human-level control through deep reinforcement learning. *Nature*, 518, 529–533.', 'Silver, D., et al. (2016). Mastering the game of Go with deep neural networks and tree search. *Nature*, 529, 484–489.', 'Williams, R. J. (1992). Simple statistical gradient-following algorithms for connectionist reinforcement learning. *Machine Learning*, 8, 229–256.'],
  related: ['ai/foundations/learning-types', 'ai/generative/llms', 'ai/foundations/history'],
}

export default guide
