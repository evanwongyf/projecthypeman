import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Agent demos are easy to make and easy to be fooled by. Serious evaluation runs an agent on many tasks, many times, and reports success rates with honest uncertainty. This guide covers the main benchmarks, the statistics you need to read their numbers, and the newer “time horizon” way of measuring progress.',
  nutshell: [
    'A success rate from n tasks has a **margin of error** of roughly ±2√(p(1 − p)/n); use the **Wilson interval** for small n.',
    'A gap between two agents is only meaningful if it is large compared with the **standard error of the difference**.',
    'You need roughly **385 tasks** for ±5 percentage points at 95% confidence when p ≈ 50%.',
    'Beware **contamination** (test tasks seen in training), **LLM-judge bias** and benchmarks that reward gaming.',
  ],
  sections: [
    {
      id: 'benchmarks',
      title: 'Benchmarks',
      blocks: [
        { t: 'table', head: ['Benchmark', 'What the agent does', 'Measured by'], rows: [
          ['SWE-bench (Verified)', 'Fix real GitHub issues in Python repositories', 'Hidden tests pass'],
          ['τ-bench (tau-bench)', 'Customer service with tools and a simulated user, following policy', 'Database state correct; pass^k'],
          ['WebArena, OSWorld', 'Complete tasks in websites or a desktop operating system', 'Task checkers'],
          ['GAIA', 'Answer questions needing browsing, files and reasoning', 'Exact answer'],
          ['METR task suite', 'Software and research tasks timed against human experts', '50% time horizon'],
          ['Terminal-Bench', 'Tasks in a command-line environment', 'Tests pass'],
        ] },
      ],
    },
    {
      id: 'ci',
      title: 'Confidence intervals for a success rate',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\frac{\hat p + \frac{z^2}{2n} \pm z\sqrt{\frac{\hat p(1-\hat p)}{n} + \frac{z^2}{4n^2}}}{1 + \frac{z^2}{n}}`,
          caption: 'The Wilson score interval for a proportion (z = 1.96 for 95% confidence).',
          plain: 'If an agent solves 35 of 50 tasks, its true success rate is probably near 70%, but it could easily be 60% or 80%: another 50 tasks would give a different count. The Wilson interval gives a range that contains the true rate 95% of the time. It behaves better than the simple “plus or minus two standard errors” when n is small or the rate is near 0% or 100%.',
          where: [
            { sym: String.raw`\hat p`, def: 'the observed success rate (successes ÷ n)' },
            { sym: 'n', def: 'number of tasks' },
            { sym: 'z', def: '1.96 for a 95% interval' },
          ],
          syntax: [
            { sym: String.raw`\hat p`, say: '“p hat”: an estimate of p from data' },
            { sym: String.raw`\pm`, say: '“plus or minus”: compute both the lower and upper end' },
          ],
          worked: {
            title: '35 successes out of 50',
            steps: [
              String.raw`\(\hat p = 0.7\), \(n = 50\), \(z^2 = 3.8416\). So \(z^2/n = 0.0768\) and \(z^2/2n = 0.0384\).`,
              String.raw`Centre: \((0.7 + 0.0384)/1.0768 = 0.7384/1.0768 \approx 0.686\).`,
              String.raw`Inside the root: \(0.21/50 + 3.8416/10{,}000 = 0.0042 + 0.00038 = 0.00458\); \(\sqrt{0.00458} \approx 0.0677\).`,
              String.raw`Half-width: \(1.96 \times 0.0677 / 1.0768 \approx 0.123\).`,
              String.raw`Interval: \(0.686 \pm 0.123 = [0.563,\ 0.809]\).`,
            ],
            why: [
              'collect the pieces',
              'the Wilson centre is pulled slightly towards 50%',
              'the variance term plus a small correction',
              'scale by z and the same denominator',
              'lower and upper ends',
            ],
            answer: 'The true rate is plausibly anywhere from about 56% to 81%. Fifty tasks cannot distinguish a 65% agent from a 75% one.',
          },
        },
        {
          t: 'math',
          tex: String.raw`z = \frac{\hat p_A - \hat p_B}{\sqrt{\frac{\hat p_A(1-\hat p_A)}{n_A} + \frac{\hat p_B(1-\hat p_B)}{n_B}}}`,
          caption: 'A two-proportion z-test for whether agent A really beats agent B.',
          plain: 'Divide the difference in success rates by its standard error, the amount it would wobble by chance. If the result is bigger than about 2, the difference is unlikely to be luck. If the two agents ran on the same tasks, a paired test (comparing task by task) is more powerful.',
          where: [
            { sym: String.raw`\hat p_A, \hat p_B`, def: 'observed success rates' },
            { sym: String.raw`n_A, n_B`, def: 'number of tasks each was run on' },
          ],
          syntax: [
            { sym: 'z', say: 'how many standard errors apart the two rates are' },
          ],
          worked: {
            title: 'A: 35/50, B: 30/50',
            steps: [
              String.raw`Difference: \(0.70 - 0.60 = 0.10\).`,
              String.raw`Standard error: \(\sqrt{0.21/50 + 0.24/50} = \sqrt{0.0042 + 0.0048} = \sqrt{0.009} \approx 0.0949\).`,
              String.raw`\(z = 0.10 / 0.0949 \approx 1.05\).`,
            ],
            why: [
              'the gap in success rates',
              'each agent’s sampling wobble, combined',
              'the gap in standard-error units',
            ],
            answer: 'z ≈ 1.05, well below 2: a 10-point lead on 50 tasks is consistent with luck. Run more tasks, or several trials per task, before claiming one agent is better.',
          },
        },
        {
          t: 'math',
          tex: String.raw`n \ge \frac{z^2\, p(1-p)}{E^2}`,
          caption: 'Tasks needed so the margin of error is at most E.',
          plain: 'Rearrange the margin-of-error formula to plan an evaluation: how many tasks do I need for my number to be accurate to within ±E? The worst case is p = 0.5.',
          where: [
            { sym: 'E', def: 'desired margin of error (e.g. 0.05 for ±5 points)' },
            { sym: 'p', def: 'expected success rate (use 0.5 if unsure)' },
          ],
          syntax: [
            { sym: String.raw`\ge`, say: '“at least”' },
          ],
          worked: {
            title: '±5 points at 95% confidence',
            steps: [
              String.raw`\(z^2 = 3.8416\), \(p(1-p) = 0.25\), \(E^2 = 0.0025\).`,
              String.raw`\(n \ge 3.8416 \times 0.25 / 0.0025 = 384.2\).`,
              'Round up: 385 tasks.',
            ],
            why: [
              'worst case p = 0.5 gives the largest variance',
              'plug in',
              'you cannot run part of a task',
            ],
            answer: 'About 385 tasks. For ±2 points you would need about 2,400.',
          },
        },
      ],
    },
    {
      id: 'pitfalls',
      title: 'Pitfalls',
      blocks: [
        { t: 'cards', cols: 2, items: [
          { title: 'Contamination', body: 'If benchmark tasks or solutions appeared in training data, scores overstate ability. Fresh or private test sets help.' },
          { title: 'LLM-as-judge bias', body: 'Model graders prefer longer answers, their own style, and the first option shown. Calibrate judges against human ratings.' },
          { title: 'Reward hacking', body: 'Agents have been observed editing tests, special-casing expected outputs or exploiting grader bugs. Inspect transcripts, not just scores.' },
          { title: 'One run per task', body: 'Agents are stochastic. Run each task several times and report variance and pass^k.' },
          { title: 'Cost blindness', body: 'Report cost and time alongside accuracy; a 2-point gain at ten times the cost may not be worth it.' },
          { title: 'Benchmark–reality gap', body: 'Clean, well-specified tasks are easier than messy real work with vague goals.' },
        ] },
      ],
    },
  ],
  sources: [
    'Jimenez, C. E. et al. (2024). SWE-bench: Can language models resolve real-world GitHub issues? ICLR.',
    'Yao, S. et al. (2024). τ-bench. arXiv:2406.12045.',
    'Mialon, G. et al. (2023). GAIA: A benchmark for general AI assistants. arXiv:2311.12983.',
    'Wilson, E. B. (1927). Probable inference, the law of succession, and statistical inference. JASA, 22(158), 209–212.',
    'Miller, E. (2024). Adding error bars to evals: A statistical approach to language model evaluations. arXiv:2411.00640.',
  ],
  related: ['agentic-ai/maths/reliability', 'agentic-ai/trends/trends', 'ai/foundations/evaluation'],
}

export default guide
