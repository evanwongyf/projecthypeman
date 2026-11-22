import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The most important equation in agentic AI is also the simplest: if each step succeeds with probability p, a task of n independent steps succeeds with probability pⁿ. Because multiplication shrinks numbers below 1 very quickly, an agent that looks excellent on a single step can be unreliable on long tasks. This guide works through that maths and the main ways to fight it: retries, verification and checkpoints.',
  nutshell: [
    '95% per step becomes **36%** over 20 steps.',
    'To get 90% over 50 steps you need about **99.8%** per step.',
    '**Retries with a reliable check** raise per-step success sharply: 1 − (1 − p)ᵏ.',
    '**pass@k** measures whether any of k tries succeeds; **pass^k** whether all k do (consistency). Real deployments need the second.',
    'A verifier is only as good as its error rates; Bayes’ rule tells you how much to trust its “approved”.',
  ],
  sections: [
    {
      id: 'compounding',
      title: 'Compounding errors',
      blocks: [
        {
          t: 'math',
          tex: String.raw`P(\text{task}) = p^{\,n}`,
          caption: 'Success probability of a task of n independent steps, each succeeding with probability p, with no recovery from mistakes.',
          plain: 'For the whole task to work, step 1 must work and step 2 must work and so on. For independent events, “and” means multiply. Multiplying many numbers a little below 1 gives a number much smaller than any of them.',
          where: [
            { sym: 'p', def: 'probability one step succeeds (between 0 and 1)' },
            { sym: 'n', def: 'number of steps' },
          ],
          syntax: [
            { sym: String.raw`p^{\,n}`, say: '“p to the power n”: p multiplied by itself n times' },
            { sym: String.raw`P(\cdot)`, say: '“the probability of”' },
          ],
          worked: {
            title: 'A 20-step task',
            steps: [
              String.raw`At \(p = 0.95\): \(0.95^{20}\). Take logs: \(20 \ln 0.95 = 20 \times (-0.0513) = -1.026\).`,
              String.raw`\(e^{-1.026} \approx 0.359\).`,
              String.raw`At \(p = 0.99\): \(0.99^{20} = e^{20 \times (-0.01005)} = e^{-0.201} \approx 0.818\).`,
              String.raw`At \(p = 0.999\): \(0.999^{20} \approx e^{-0.020} \approx 0.980\).`,
            ],
            why: [
              'logs turn a power into a multiplication, which is easier to do by hand',
              'undo the log with the exponential',
              'the same method for 99% per step',
              'and for 99.9%',
            ],
            answer: 'Per-step accuracy of 95% gives about 36% task success; 99% gives 82%; 99.9% gives 98%. Each extra “nine” per step matters enormously over long tasks.',
          },
        },
        { t: 'plot', title: 'Task success against number of steps', x: [0, 100], y: [0, 1], xLabel: 'steps n', yLabel: 'P(success)', curves: [
          { f: (n) => Math.pow(0.9, n), label: 'p = 0.90', color: 'var(--pink)' },
          { f: (n) => Math.pow(0.95, n), label: 'p = 0.95', color: 'var(--orange)' },
          { f: (n) => Math.pow(0.99, n), label: 'p = 0.99', color: 'var(--teal)' },
          { f: (n) => Math.pow(0.999, n), label: 'p = 0.999', color: 'var(--mint)' },
        ], caption: 'pⁿ for four per-step accuracies.' },
        { t: 'learn-lab', viz: 'agent-reliability' },
        {
          t: 'math',
          tex: String.raw`p_{\text{needed}} = T^{1/n}`,
          caption: 'The per-step accuracy needed to hit a target task success T over n steps.',
          plain: 'Run the first formula backwards. If you want the whole task to succeed with probability T, each step must succeed with the n-th root of T. Roots of numbers close to 1 are very close to 1.',
          where: [
            { sym: 'T', def: 'target task success rate' },
            { sym: 'n', def: 'number of steps' },
          ],
          syntax: [
            { sym: String.raw`T^{1/n}`, say: '“T to the power one over n”: the n-th root of T' },
          ],
          worked: {
            title: '90% success over 50 steps',
            steps: [
              String.raw`\(p = 0.9^{1/50}\).`,
              String.raw`\(\ln 0.9 = -0.1054\); divide by 50: \(-0.002107\).`,
              String.raw`\(e^{-0.002107} \approx 0.99790\).`,
              String.raw`Allowed failure per step: \(1 - 0.9979 = 0.0021\), about 1 in 475.`,
            ],
            why: [
              'the root reverses the power',
              'logs again: divide the log by n',
              'exponentiate back',
              'turn the success rate into a failure rate to make it concrete',
            ],
            answer: 'Each step must fail no more than about once in 475 tries. Real tasks are rescued by agents noticing and fixing mistakes, which breaks the independence assumption in our favour.',
          },
        },
      ],
    },
    {
      id: 'retries',
      title: 'Retries and recovery',
      blocks: [
        {
          t: 'math',
          tex: String.raw`p_{\text{step}} = 1 - (1 - p)^{k}`,
          caption: 'Per-step success with up to k independent attempts, if failures can be detected perfectly.',
          plain: 'If you can tell whether an attempt worked (a test passes, a file exists), you can retry. The step fails only if every attempt fails. The chance all k fail is (1 − p) multiplied by itself k times, so the chance at least one succeeds is 1 minus that.',
          where: [
            { sym: 'p', def: 'chance one attempt succeeds' },
            { sym: 'k', def: 'maximum number of attempts' },
          ],
          syntax: [
            { sym: '(1 − p)', say: 'chance one attempt fails' },
            { sym: String.raw`(1-p)^{k}`, say: 'chance all k attempts fail' },
          ],
          worked: {
            title: 'A 20-step task where each step succeeds 80% of the time',
            steps: [
              String.raw`No retries: \(0.8^{20} \approx 0.0115\).`,
              String.raw`Three attempts per step: \(p_{\text{step}} = 1 - 0.2^3 = 1 - 0.008 = 0.992\).`,
              String.raw`Task: \(0.992^{20} = e^{20 \ln 0.992} = e^{-0.1606} \approx 0.852\).`,
              'Average attempts per step: 1 + 0.2 + 0.04 = 1.24, so about 24% extra cost.',
            ],
            why: [
              'without retries the task almost always fails',
              'a step now fails only if all three attempts fail',
              'compound the improved per-step rate over 20 steps',
              'the second attempt happens 20% of the time, the third 4%',
            ],
            answer: 'Retries lift task success from about 1% to 85% for about a quarter more cost, but only if failures are detectable. Undetected errors are what sink agents.',
          },
        },
      ],
    },
    {
      id: 'pass-at-k',
      title: 'pass@k and pass^k',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{pass@}k = 1 - \frac{\binom{n-c}{k}}{\binom{n}{k}}`,
          caption: 'The unbiased estimator of pass@k from Chen et al. (2021): from n samples of which c were correct.',
          plain: 'pass@k asks: if you let the model try k times, how likely is at least one try to be correct? To estimate it, draw n ≥ k samples and count the c correct ones. The chance a random set of k samples contains no correct one is (ways to pick k from the n − c wrong ones) ÷ (ways to pick k from all n). One minus that is pass@k.',
          where: [
            { sym: 'n', def: 'samples drawn per problem' },
            { sym: 'c', def: 'how many of them were correct' },
            { sym: 'k', def: 'the budget of tries being scored' },
          ],
          syntax: [
            { sym: String.raw`\binom{a}{b}`, say: '“a choose b”: a! ÷ (b!(a − b)!), the number of ways to pick b items from a' },
          ],
          worked: {
            title: 'Ten samples, three correct, k = 5',
            steps: [
              String.raw`\(\binom{n-c}{k} = \binom{7}{5} = \frac{7!}{5!\,2!} = 21\).`,
              String.raw`\(\binom{n}{k} = \binom{10}{5} = 252\).`,
              String.raw`\(21/252 \approx 0.0833\).`,
              String.raw`\(\text{pass@}5 = 1 - 0.0833 \approx 0.917\).`,
            ],
            why: [
              'ways to choose five samples all from the seven wrong ones',
              'ways to choose any five of the ten',
              'the chance a random five has no correct answer',
              'the chance at least one of five is correct',
            ],
            answer: 'pass@5 ≈ 92%, although a single try is right only 30% of the time. pass@k is useful when a test can pick the right answer, as in coding.',
          },
        },
        {
          t: 'math',
          tex: String.raw`\text{pass}^{k} = p^{k}`,
          caption: 'pass^k (Yao et al., 2024, τ-bench): the chance that all k independent runs of the same task succeed.',
          plain: 'For a customer-service agent, it is not enough to succeed once in a while: it must succeed every time a customer asks. pass^k measures consistency: the chance it succeeds on every one of k tries. It falls as k grows, the opposite of pass@k.',
          where: [
            { sym: 'p', def: 'single-run success rate on the task' },
            { sym: 'k', def: 'number of runs that must all succeed' },
          ],
          syntax: [
            { sym: String.raw`\text{pass}^{k}`, say: '“pass hat k” or “pass to the k”' },
          ],
          worked: {
            title: 'An agent that succeeds 80% of the time',
            steps: [
              String.raw`\(k = 1\): \(0.8\).`,
              String.raw`\(k = 4\): \(0.8^4 = 0.4096\).`,
              String.raw`\(k = 8\): \(0.8^8 \approx 0.168\).`,
            ],
            why: [
              'one run is just the base rate',
              'four runs must all succeed',
              'eight runs must all succeed',
            ],
            answer: 'An 80% agent has only a 41% chance of handling the same request correctly four times in a row. Reported benchmark scores are usually pass@1; production reliability looks more like pass^k.',
          },
        },
      ],
    },
    {
      id: 'verification',
      title: 'How much to trust a verifier',
      blocks: [
        {
          t: 'math',
          tex: String.raw`P(\text{correct} \mid \text{accepted}) = \frac{p \cdot a}{p \cdot a + (1-p)\cdot f}`,
          caption: 'Bayes’ rule for a checker that accepts correct outputs at rate a and wrongly accepts incorrect outputs at rate f.',
          plain: 'Suppose a second model (or a test suite) checks the agent’s output. A checker can miss errors. Of all the outputs it approves, some are genuinely correct (correct and accepted) and some slipped through (incorrect but accepted). The share that are correct is the first group divided by both groups.',
          where: [
            { sym: 'p', def: 'base rate: chance the generator’s output is correct' },
            { sym: 'a', def: 'chance the checker accepts a correct output (sensitivity)' },
            { sym: 'f', def: 'chance it wrongly accepts an incorrect output (false-accept rate)' },
          ],
          syntax: [
            { sym: String.raw`P(A \mid B)`, say: '“the probability of A given B”' },
          ],
          worked: {
            title: 'A generator right 60% of the time and an imperfect checker',
            steps: [
              String.raw`\(p = 0.6\), \(a = 0.9\), \(f = 0.2\).`,
              String.raw`Correct and accepted: \(0.6 \times 0.9 = 0.54\).`,
              String.raw`Incorrect but accepted: \(0.4 \times 0.2 = 0.08\).`,
              String.raw`\(P = 0.54 / (0.54 + 0.08) = 0.54 / 0.62 \approx 0.871\).`,
            ],
            why: [
              'collect the three rates',
              'outputs that are right and pass the check',
              'outputs that are wrong but slip through',
              'the approved pile contains both; take the correct share',
            ],
            answer: 'After checking, 87% of approved outputs are correct, up from 60%. Lowering the false-accept rate f matters most: at f = 0.05, it becomes 0.54 ÷ 0.56 ≈ 96%.',
          },
        },
      ],
    },
  ],
  sources: [
    'Chen, M. et al. (2021). Evaluating large language models trained on code. arXiv:2107.03374.',
    'Yao, S. et al. (2024). τ-bench: A benchmark for tool-agent-user interaction in real-world domains. arXiv:2406.12045.',
    'Kwa, T. et al. (METR) (2025). Measuring AI ability to complete long tasks. arXiv:2503.14499.',
  ],
  related: ['agentic-ai/maths/evaluating-agents', 'agentic-ai/theory/planning-and-reasoning', 'mathematics/start-here'],
}

export default guide
