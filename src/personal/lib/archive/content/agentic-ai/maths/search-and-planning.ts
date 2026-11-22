import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Planning means looking ahead: if I do this, then that, where will I end up? The trouble is that the number of possible futures explodes. This guide gives the arithmetic of that explosion, and of the main ways agents tame it: beam search, best-of-n sampling, and Monte Carlo tree search, the method behind AlphaGo.',
  nutshell: [
    'With b choices per step and depth d, there are **bᵈ** possible paths.',
    '**Beam search** keeps only the best k partial paths at each depth: about k × b evaluations per level.',
    '**Best-of-n**: sample n answers and keep the best by a scorer; gains depend on the scorer.',
    '**MCTS** grows a search tree where it looks promising, balancing exploration with the **UCT** formula.',
  ],
  sections: [
    {
      id: 'explosion',
      title: 'The combinatorial explosion',
      blocks: [
        {
          t: 'math',
          tex: String.raw`N_{\text{paths}} = b^{\,d}`,
          caption: 'Number of distinct action sequences with branching factor b and depth d.',
          plain: 'If an agent has b sensible choices at every step, then after one step there are b possible situations, after two steps b × b, and after d steps b multiplied by itself d times. Even small b and d give enormous numbers, which is why agents cannot simply try everything.',
          where: [
            { sym: 'b', def: 'branching factor: choices per step' },
            { sym: 'd', def: 'depth: number of steps looked ahead' },
          ],
          syntax: [
            { sym: String.raw`b^{\,d}`, say: '“b to the power d”' },
          ],
          worked: {
            title: 'An agent with 10 possible tool calls per step',
            steps: [
              String.raw`\(d = 3\): \(10^3 = 1{,}000\) paths.`,
              String.raw`\(d = 6\): \(10^6 = 1{,}000{,}000\).`,
              String.raw`\(d = 10\): \(10^{10}\) paths. At one second per path, that is \(10^{10}/(3.15 \times 10^7) \approx 317\) years.`,
            ],
            why: [
              'three steps of ten choices',
              'double the depth, square the number',
              'convert to years: about 31.5 million seconds per year',
            ],
            answer: 'Exhaustive search is hopeless beyond a few steps. Agents rely on good heuristics (the model’s judgement of which branch is promising) to prune almost all of the tree.',
          },
        },
      ],
    },
    {
      id: 'beam',
      title: 'Beam search and best-of-n',
      blocks: [
        {
          t: 'math',
          tex: String.raw`C_{\text{beam}} = k \cdot b \cdot d`,
          caption: 'Evaluations needed by beam search with beam width k.',
          plain: 'Beam search keeps only the k most promising partial plans at each step. It expands each into its b children, scores all k × b of them, and keeps the best k again. Over d steps that is k × b × d evaluations: it grows linearly with depth instead of exponentially, at the risk of discarding the branch that would have won.',
          where: [
            { sym: 'k', def: 'beam width: how many partial paths are kept' },
            { sym: 'b, d', def: 'branching factor and depth, as before' },
          ],
          syntax: [
            { sym: String.raw`\cdot`, say: '“times”' },
          ],
          worked: {
            title: 'Same agent, beam width 5, depth 10',
            steps: [
              String.raw`\(C = 5 \times 10 \times 10 = 500\) evaluations.`,
              String.raw`Compare exhaustive: \(10^{10}\).`,
              String.raw`Ratio: \(10^{10} / 500 = 2 \times 10^{7}\).`,
            ],
            why: [
              'five kept paths, ten children each, ten levels',
              'from the previous section',
              'how many times cheaper',
            ],
            answer: '500 evaluations instead of ten billion. The quality of the result now depends almost entirely on how good the scoring function is.',
          },
        },
        {
          t: 'math',
          tex: String.raw`P(\text{best-of-}n \text{ finds a correct answer}) = 1 - (1-p)^{n}`,
          caption: 'With a perfect scorer, best-of-n succeeds if any sample is correct.',
          plain: 'Best-of-n draws n complete answers and lets a scorer (tests, a reward model, a checker) choose. With a perfect scorer this is the same maths as retries. With an imperfect scorer the gains flatten and can even reverse: a reward model that can be fooled will pick confidently wrong answers more often as n grows (“reward hacking”).',
          where: [
            { sym: 'p', def: 'chance one sample is correct' },
            { sym: 'n', def: 'number of samples' },
          ],
          syntax: [
            { sym: String.raw`(1-p)^{n}`, say: 'chance all n samples are wrong' },
          ],
          worked: {
            title: 'A maths problem solved 20% of the time',
            steps: [
              String.raw`\(n = 1\): \(0.2\).`,
              String.raw`\(n = 8\): \(1 - 0.8^8 = 1 - 0.168 = 0.832\).`,
              String.raw`\(n = 32\): \(1 - 0.8^{32} \approx 1 - 0.0008 = 0.999\).`,
            ],
            why: [
              'one try',
              'eight tries: at least one is right 83% of the time',
              'thirty-two tries: almost certainly one is right',
            ],
            answer: 'With a reliable checker, sampling more is a powerful lever, which is why test-time compute helps so much in coding and maths, where answers can be checked.',
          },
        },
      ],
    },
    {
      id: 'mcts',
      title: 'Monte Carlo tree search',
      blocks: [
        { t: 'cycle', caption: 'One iteration of MCTS, repeated thousands of times.', items: [
          { name: 'Select', body: 'From the root, follow the child with the highest UCT score until reaching a node not fully expanded.' },
          { name: 'Expand', body: 'Add one new child (a new action).' },
          { name: 'Simulate', body: 'Play out (or estimate with a value model) to get a result.' },
          { name: 'Back-propagate', body: 'Update the win counts and visit counts of every node on the path.' },
        ] },
        {
          t: 'math',
          tex: String.raw`\text{UCT}(j) = \frac{w_j}{n_j} + c\sqrt{\frac{\ln N}{n_j}}`,
          caption: 'Upper confidence bound for trees (Kocsis and Szepesvári, 2006).',
          plain: 'At each node the search picks the child that looks best by its win rate, plus an exploration bonus that is big for rarely tried children. The constant c sets the balance. It is the bandit formula applied at every node of the tree.',
          where: [
            { sym: String.raw`w_j`, def: 'wins (or total reward) through child j' },
            { sym: String.raw`n_j`, def: 'visits to child j' },
            { sym: 'N', def: 'visits to the parent' },
            { sym: 'c', def: 'exploration constant (√2 in theory; tuned in practice)' },
          ],
          syntax: [
            { sym: String.raw`\frac{w_j}{n_j}`, say: 'win rate of child j' },
            { sym: String.raw`c\sqrt{\cdot}`, say: 'the exploration bonus' },
          ],
          worked: {
            title: 'Choosing between two moves',
            steps: [
              String.raw`Parent visited \(N = 50\) times; \(\ln 50 \approx 3.912\); take \(c = 1.41\).`,
              String.raw`Child A: 30 visits, 18 wins. Win rate 0.60; bonus \(1.41\sqrt{3.912/30} = 1.41 \times 0.361 = 0.509\). UCT \(= 1.109\).`,
              String.raw`Child B: 20 visits, 10 wins. Win rate 0.50; bonus \(1.41\sqrt{3.912/20} = 1.41 \times 0.442 = 0.624\). UCT \(= 1.124\).`,
              'Pick B (1.124 > 1.109).',
            ],
            why: [
              'collect the parent’s visit count and choose c',
              'A has a better record and more evidence, so a smaller bonus',
              'B has a worse record but less evidence, so a bigger bonus',
              'the higher upper bound wins this round',
            ],
            answer: 'The search visits B next. It is close: a few more good results for A would tip it back. Over many iterations, visits concentrate on the genuinely best move.',
          },
        },
      ],
    },
  ],
  sources: [
    'Russell, S., & Norvig, P. (2021). Artificial Intelligence: A Modern Approach (4th ed.), chapters 3 and 5.',
    'Kocsis, L., & Szepesvári, C. (2006). Bandit based Monte-Carlo planning. ECML.',
    'Silver, D. et al. (2016). Mastering the game of Go with deep neural networks and tree search. Nature, 529, 484–489.',
    'Snell, C. et al. (2024). Scaling LLM test-time compute optimally can be more effective than scaling model parameters. arXiv:2408.03314.',
  ],
  related: ['agentic-ai/maths/decisions-and-mdps', 'agentic-ai/theory/planning-and-reasoning', 'agentic-ai/maths/reliability'],
}

export default guide
