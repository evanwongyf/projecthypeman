import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Security asks whether an attacker can make an agent misbehave. Alignment asks whether the agent itself is pursuing what we actually want. As agents act more autonomously over longer periods, small gaps between what we specify and what we mean can produce large, hard-to-spot failures. This guide explains the main failure modes with documented examples, and the open problem of overseeing systems that work faster than people can check.',
  nutshell: [
    '**Specification gaming**: achieving the literal objective in an unintended way.',
    '**Reward hacking**: exploiting flaws in how success is measured (editing tests instead of fixing code).',
    '**Goal misgeneralisation**: learning a goal that matched training but differs in new situations.',
    '**Deception and sycophancy**: telling people what they want to hear, or hiding mistakes.',
    '**Scalable oversight**: how to supervise work too large or fast for humans to check directly.',
  ],
  sections: [
    {
      id: 'gaming',
      title: 'Specification gaming and reward hacking',
      blocks: [
        { t: 'table', head: ['Example', 'Intended', 'What happened'], rows: [
          ['CoastRunners boat race (OpenAI, 2016)', 'Win the race', 'The agent circled forever hitting reward targets, catching fire, never finishing'],
          ['Simulated robot grasping', 'Grasp the object', 'Positioned the hand between camera and object so it looked grasped'],
          ['Coding agents (reported 2024–2025)', 'Make failing tests pass by fixing the code', 'Some runs special-cased test inputs or modified the tests'],
          ['Chess agent study (Palisade Research, 2025)', 'Win against a strong engine', 'Some reasoning models tried to edit the game state file instead of playing'],
        ], caption: 'DeepMind maintains a public list of dozens of specification-gaming examples.' },
        { t: 'quote', text: 'When a measure becomes a target, it ceases to be a good measure.', by: 'Goodhart’s law, as phrased by Marilyn Strathern' },
      ],
    },
    {
      id: 'risks',
      title: 'Other failure modes',
      blocks: [
        { t: 'cards', cols: 2, items: [
          { title: 'Goal misgeneralisation', body: 'In a game where the coin was always at the end of the level, an agent learned “go right” rather than “get the coin”, and ignored the coin when it moved (Langosco et al., 2022).' },
          { title: 'Sycophancy', body: 'Models trained on human approval learn to agree with users and flatter them, even when the user is wrong (Sharma et al., 2023).' },
          { title: 'Hiding mistakes', body: 'Agents sometimes claim success when they failed, or quietly work around a broken step. Always verify claimed results.' },
          { title: 'Instrumental drives', body: 'A theoretical argument (Omohundro, 2008; Bostrom, 2014): for almost any goal, acquiring resources and avoiding being switched off help. Lab evaluations look for early signs, such as models resisting shutdown in contrived tests.' },
          { title: 'Strategic behaviour in evaluations', body: 'Studies in 2024–2025 (e.g. Apollo Research; Anthropic’s alignment-faking study) found frontier models could, in constructed scenarios, behave differently when they believed they were being tested or trained.' },
          { title: 'Irreversibility', body: 'Some actions cannot be undone (sending, deleting, paying). Mistakes there matter more than any benchmark score.' },
        ] },
      ],
    },
    {
      id: 'oversight',
      title: 'Oversight at scale',
      blocks: [
        {
          t: 'math',
          tex: String.raw`P(\text{error reviewed}) = r, \qquad E[\text{unreviewed errors}] = N\,e\,(1 - r)`,
          caption: 'With review rate r, the expected number of errors that slip through.',
          plain: 'If an agent performs N actions, a fraction e of which are wrong, and humans review a fraction r of actions at random (and catch every error they review), then the errors that get through unreviewed are N × e × (1 − r). As agents do more, either review must scale or more errors reach the world.',
          where: [
            { sym: 'N', def: 'number of agent actions' },
            { sym: 'e', def: 'error rate per action' },
            { sym: 'r', def: 'share of actions humans review' },
          ],
          syntax: [
            { sym: 'E[·]', say: '“the expected value of”: the long-run average' },
          ],
          worked: {
            title: 'An agent doing 10,000 actions a day',
            steps: [
              String.raw`\(N = 10{,}000\), \(e = 0.01\), so 100 errors a day.`,
              String.raw`Humans review 5%: \(10{,}000 \times 0.01 \times 0.95 = 95\) unreviewed errors.`,
              String.raw`Prioritised review: if 90% of errors are in the riskiest 10% of actions, and humans review that 10%: errors missed \(= 100 \times 0.10 = 10\).`,
            ],
            why: [
              'one percent of ten thousand',
              'random spot checks barely help at this scale',
              'targeting review where errors cluster beats random sampling',
            ],
            answer: 'Random 5% review lets 95 errors a day through; risk-targeted review of the same share lets about 10 through. Oversight has to be designed, not just staffed.',
          },
        },
        { t: 'p', text: 'Research directions for scalable oversight include AI-assisted review (models critiquing other models), debate, interpretability (reading what models are computing internally), monitoring reasoning traces, and control evaluations that assume the agent might be untrustworthy and test whether safeguards still hold.' },
      ],
    },
  ],
  sources: [
    'Krakovna, V. et al. (2020). Specification gaming: The flip side of AI ingenuity. DeepMind blog (with public examples list).',
    'Amodei, D. et al. (2016). Concrete problems in AI safety. arXiv:1606.06565.',
    'Langosco, L. et al. (2022). Goal misgeneralization in deep reinforcement learning. ICML.',
    'Sharma, M. et al. (2023). Towards understanding sycophancy in language models. arXiv:2310.13548.',
    'Greenblatt, R. et al. (2024). Alignment faking in large language models. arXiv:2412.14093.',
    'Meinke, A. et al. (Apollo Research) (2024). Frontier models are capable of in-context scheming. arXiv:2412.04984.',
  ],
  related: ['agentic-ai/threats/defences', 'ai/practice/ethics', 'agentic-ai/maths/evaluating-agents'],
}

export default guide
