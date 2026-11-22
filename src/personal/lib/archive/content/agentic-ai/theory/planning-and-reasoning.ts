import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'An agent that acts without thinking makes avoidable mistakes; one that thinks forever never acts. Research since 2022 has produced a family of techniques for getting models to reason and plan better, and since 2024 “reasoning models” have been trained to think at length before answering. This guide explains the main ideas and when they help.',
  nutshell: [
    '**Chain of thought** (Wei et al., 2022): writing intermediate steps improves multi-step reasoning.',
    '**Self-consistency** (Wang et al., 2022): sample several reasoning paths and take the majority answer.',
    '**Plan-and-execute**: write a plan first, then carry out steps, revising when reality differs.',
    '**Tree search** (Tree of Thoughts, MCTS): explore alternatives and back up from dead ends.',
    '**Reflection** (Reflexion, Shinn et al., 2023): critique a failed attempt and retry with the lesson in memory.',
  ],
  sections: [
    {
      id: 'techniques',
      title: 'The techniques',
      blocks: [
        { t: 'table', head: ['Technique', 'How', 'Helps with', 'Cost'], rows: [
          ['Chain of thought', '“Think step by step”, or a trained reasoning model', 'Maths, logic, multi-step problems', 'More tokens per answer'],
          ['Self-consistency', 'Sample n answers, vote', 'Questions with one checkable answer', 'n times the tokens'],
          ['Plan-and-execute', 'Plan, then do each step, re-plan on surprise', 'Long tasks with clear structure', 'Planning overhead; plans go stale'],
          ['Tree of Thoughts', 'Branch into several partial solutions, evaluate, expand the best', 'Puzzles, search problems', 'Many model calls'],
          ['Reflexion', 'After failure, write a critique; keep it in memory; retry', 'Tasks with a feedback signal (tests, rewards)', 'Extra attempts'],
          ['Verifier or critic', 'A second model or a program checks each step or the result', 'Code (tests), maths (proof checkers), facts (sources)', 'Extra calls; verifier must be reliable'],
        ] },
      ],
    },
    {
      id: 'self-consistency',
      title: 'Why voting helps',
      blocks: [
        {
          t: 'math',
          tex: String.raw`P(\text{majority correct}) = \sum_{k > n/2} \binom{n}{k} p^{k} (1-p)^{n-k}`,
          caption: 'If each independent sample is right with probability p, this is the chance more than half of n samples are right.',
          plain: 'Imagine asking the same question several times and taking the most common answer. If each try is right more often than not, and the tries are independent, the majority is right more often than any single try. The formula adds up the chances of every winning count of correct answers.',
          where: [
            { sym: 'n', def: 'number of independent samples (odd, to avoid ties)' },
            { sym: 'k', def: 'number of samples that are correct' },
            { sym: 'p', def: 'chance a single sample is correct' },
          ],
          syntax: [
            { sym: String.raw`\sum_{k > n/2}`, say: '“sum over all k greater than n over 2”: add the terms for every majority count' },
            { sym: String.raw`\binom{n}{k}`, say: '“n choose k”: the number of ways to pick which k samples are correct' },
            { sym: String.raw`p^{k}(1-p)^{n-k}`, say: 'the chance of one particular pattern with k right and n − k wrong' },
          ],
          worked: {
            title: 'Five samples, each 70% accurate',
            steps: [
              'n = 5, p = 0.7. The majority is right if k = 3, 4 or 5.',
              String.raw`\(k = 3\): \(\binom{5}{3}(0.7)^3(0.3)^2 = 10 \times 0.343 \times 0.09 = 0.3087\).`,
              String.raw`\(k = 4\): \(\binom{5}{4}(0.7)^4(0.3) = 5 \times 0.2401 \times 0.3 = 0.3602\).`,
              String.raw`\(k = 5\): \((0.7)^5 = 0.1681\).`,
              String.raw`Total: \(0.3087 + 0.3602 + 0.1681 = 0.837\).`,
            ],
            why: [
              'list the counts that make a majority of five',
              'ten ways to choose which three are right, times the chance of each pattern',
              'five ways to choose the four right ones',
              'only one way for all five to be right',
              'add the three cases',
            ],
            answer: 'Voting raises accuracy from 70% to about 84%. Real samples from one model are correlated (they make similar mistakes), so the gain in practice is smaller, and if p is below 0.5 voting makes things worse.',
          },
        },
      ],
    },
    {
      id: 'reasoning-models',
      title: 'Reasoning models',
      blocks: [
        { t: 'p', text: 'From late 2024, labs released models trained with reinforcement learning to produce long internal reasoning before answering (OpenAI’s o1 and o3, DeepSeek-R1, Anthropic’s extended thinking, Google’s Gemini thinking models). Performance on maths, coding and science benchmarks rose sharply with more thinking time: “test-time compute” became a second scaling axis alongside model size. For agents this means fewer prompting tricks are needed, but thinking costs tokens and time.' },
        { t: 'callout', tone: 'warn', title: 'Visible reasoning is not always faithful', text: 'Studies (for example Turpin et al., 2023; Anthropic, 2025) show a model’s written reasoning does not always reflect what actually drove its answer. Treat a chain of thought as useful evidence, not as a guaranteed explanation.' },
      ],
    },
  ],
  sources: [
    'Wei, J. et al. (2022). Chain-of-thought prompting elicits reasoning in large language models. NeurIPS.',
    'Wang, X. et al. (2022). Self-consistency improves chain of thought reasoning in language models. arXiv:2203.11171.',
    'Yao, S. et al. (2023). Tree of Thoughts: Deliberate problem solving with large language models. NeurIPS.',
    'Shinn, N. et al. (2023). Reflexion: Language agents with verbal reinforcement learning. NeurIPS.',
    'Turpin, M. et al. (2023). Language models don’t always say what they think. NeurIPS.',
  ],
  related: ['agentic-ai/maths/search-and-planning', 'agentic-ai/theory/the-agent-loop', 'agentic-ai/maths/reliability'],
}

export default guide
