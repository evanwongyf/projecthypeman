import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Agent capability has been rising quickly on several fronts at once: the length of tasks agents can finish, the price of a given level of performance, and how much reasoning they can do before acting. This guide summarises the measurable trends, works through the doubling-time maths, and lists what to watch.',
  nutshell: [
    'METR (2025) found the length of tasks frontier agents complete with 50% success had been **doubling about every 7 months** since 2019, reaching roughly an hour for software tasks in early 2025, with faster doubling in 2024–2025.',
    'The price to reach a fixed benchmark score has been falling by **large factors each year**.',
    '**Reasoning models**, **standard protocols** (MCP, A2A) and **background agents** are the main 2025 shifts.',
    'Extrapolating exponentials is risky: watch reliability, cost and real-world adoption, not just headline benchmarks.',
  ],
  sections: [
    {
      id: 'horizon',
      title: 'The time-horizon trend',
      blocks: [
        { t: 'p', text: 'METR timed skilled humans on a suite of software and research tasks, then measured the task length (in human time) at which an AI agent succeeds half the time: its **50% time horizon**. Plotted over model release dates, the horizon grew exponentially, from seconds for GPT-2-era models to around an hour for the best models in early 2025. At 80% success, horizons were several times shorter.' },
        {
          t: 'math',
          tex: String.raw`h(t) = h_0 \cdot 2^{\,t / T_d}`,
          caption: 'Exponential growth with doubling time T_d.',
          plain: 'If something doubles every T_d months, then after t months it has doubled t ÷ T_d times, so multiply the starting value by 2 that many times. Solving for t tells you how long until a target is reached, if the trend continues, which is a big if.',
          where: [
            { sym: 'h(t)', def: 'time horizon t months from now' },
            { sym: String.raw`h_0`, def: 'horizon now' },
            { sym: String.raw`T_d`, def: 'doubling time (months)' },
          ],
          syntax: [
            { sym: String.raw`2^{t/T_d}`, say: '“2 to the power t over T-d”: the number of doublings' },
            { sym: String.raw`\log_2`, say: '“log base 2”: how many doublings make a number' },
          ],
          worked: {
            title: 'From one hour to a 40-hour work week',
            steps: [
              String.raw`\(h_0 = 1\) hour, target 40 hours, \(T_d = 7\) months.`,
              String.raw`Solve \(2^{t/7} = 40\): \(t/7 = \log_2 40\).`,
              String.raw`\(\log_2 40 = \ln 40/\ln 2 = 3.689/0.693 \approx 5.32\).`,
              String.raw`\(t = 7 \times 5.32 \approx 37\) months, about 3 years. With \(T_d = 4\) months, \(t \approx 21\) months.`,
            ],
            why: [
              'set the start, target and doubling time',
              'divide both sides by h₀ and take log base 2',
              'compute with natural logs',
              'multiply back; the answer is very sensitive to the doubling time',
            ],
            answer: 'If the trend held, 50%-success week-long software tasks would arrive in roughly 2 to 3 years from early 2025. That says nothing about 99% reliability, messier real work or other domains.',
          },
        },
      ],
    },
    {
      id: 'shifts',
      title: 'The main shifts',
      blocks: [
        { t: 'cards', cols: 2, items: [
          { title: 'Reasoning at test time', body: 'Models trained to think longer do far better on maths and coding; agents spend more tokens thinking and fewer correcting mistakes.' },
          { title: 'Falling prices', body: 'For a fixed level of benchmark performance, prices have dropped by roughly an order of magnitude or more per year (Epoch AI), making long agent runs affordable.' },
          { title: 'Standard protocols', body: 'MCP for tools and A2A for agent-to-agent communication let any agent use any tool, which also spreads the attack surface.' },
          { title: 'Background agents', body: 'Agents assigned tasks like a colleague, working asynchronously in sandboxes and returning a pull request or report.' },
          { title: 'Computer use', body: 'Agents that see screens and use mouse and keyboard, unlocking software that has no API.' },
          { title: 'Smaller specialised models', body: 'Cheap, fast models for routing and simple steps, with big models only where needed.' },
        ] },
      ],
    },
    {
      id: 'watch',
      title: 'What to watch',
      blocks: [
        { t: 'checklist', items: [
          'Reliability (pass^k), not just best-case success',
          'Performance on messy, open-ended real tasks versus clean benchmarks',
          'Cost and energy per completed task',
          'Security incidents involving agents (prompt injection in the wild)',
          'Regulation: the EU AI Act’s obligations (phasing in 2025–2027), national AI safety institutes',
          'Evidence of real productivity gains in randomised studies, which so far are mixed',
        ] },
        { t: 'callout', tone: 'note', title: 'A mixed result', text: 'A 2025 METR randomised trial found experienced open-source developers working on their own large repositories took about 19% longer with early-2025 AI tools, though they believed they were faster. Benchmarks and lived productivity can diverge, and both are moving.' },
      ],
    },
  ],
  sources: [
    'Kwa, T. et al. (METR) (2025). Measuring AI ability to complete long tasks. arXiv:2503.14499.',
    'Becker, J. et al. (METR) (2025). Measuring the impact of early-2025 AI on experienced open-source developer productivity. arXiv:2507.09089.',
    'Epoch AI (2025). LLM inference prices trends.',
    'Stanford HAI (2025). AI Index Report.',
  ],
  related: ['agentic-ai/maths/evaluating-agents', 'agentic-ai/trends/work-and-learning', 'agentic-ai/threats/safety-and-alignment'],
}

export default guide
