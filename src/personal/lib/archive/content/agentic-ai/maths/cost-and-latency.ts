import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Agents are billed and slowed by tokens. Every turn of the loop re-reads the whole growing context, so a long agent run can cost far more than a chat of the same length. This guide gives the arithmetic of tokens, the quadratic growth of input cost, prompt caching, latency, and the limits of parallel speed-ups. Prices below are illustrative round numbers, not any provider’s current price list.',
  nutshell: [
    'Cost = input tokens × input price + output tokens × output price.',
    'If each turn adds a roughly fixed amount to the context, **total input grows with the square of the number of turns**.',
    '**Prompt caching** charges much less for re-reading an unchanged prefix, often cutting agent costs several-fold.',
    '**Amdahl’s law**: parallel agents only speed up the parallel part; the serial part sets a ceiling.',
  ],
  sections: [
    {
      id: 'tokens',
      title: 'Tokens and price',
      blocks: [
        { t: 'p', text: 'A token is a chunk of text, roughly three-quarters of an English word on average (about 4 characters). Providers charge per million tokens, with output usually several times the price of input. Code, other languages and numbers can use more tokens per word.' },
        {
          t: 'math',
          tex: String.raw`I_{\text{total}} = \sum_{t=1}^{T} \big(c_0 + (t-1)\Delta\big) = T c_0 + \Delta \frac{T(T-1)}{2}`,
          caption: 'Total input tokens over T turns, when the context starts at c₀ tokens and grows by Δ each turn.',
          plain: 'On turn 1 the model reads the starting context. On turn 2 it reads that plus everything added on turn 1, and so on. Adding up a list that grows by the same amount each time gives the number of turns times the starting size, plus Δ times the triangle number T(T − 1)/2. The second term grows like T², so doubling the number of turns roughly quadruples the reading cost.',
          where: [
            { sym: String.raw`I_{\text{total}}`, def: 'total input tokens across the run' },
            { sym: 'T', def: 'number of turns (model calls)' },
            { sym: String.raw`c_0`, def: 'starting context size (instructions, tool definitions, task)' },
            { sym: String.raw`\Delta`, def: 'tokens added per turn (tool results plus the model’s own output)' },
          ],
          syntax: [
            { sym: String.raw`\sum_{t=1}^{T}`, say: '“sum for t from 1 to T”' },
            { sym: String.raw`\frac{T(T-1)}{2}`, say: '0 + 1 + 2 + … + (T − 1), a triangle number' },
            { sym: String.raw`\Delta`, say: '“delta”: the change per turn' },
          ],
          worked: {
            title: 'A 30-turn coding run',
            steps: [
              String.raw`\(c_0 = 5{,}000\), \(\Delta = 2{,}000\), \(T = 30\).`,
              String.raw`\(T c_0 = 30 \times 5{,}000 = 150{,}000\).`,
              String.raw`\(\Delta\, T(T-1)/2 = 2{,}000 \times 435 = 870{,}000\).`,
              String.raw`\(I_{\text{total}} = 1{,}020{,}000\) tokens.`,
              String.raw`At an illustrative \$3 per million input tokens: \(1.02 \times 3 = \$3.06\). Output: \(30 \times 500 = 15{,}000\) tokens at \$15 per million \(= \$0.23\).`,
            ],
            why: [
              'set the starting size, growth per turn and number of turns',
              'every turn reads the starting context',
              '30 × 29 ÷ 2 = 435 rounds of accumulated growth',
              'add the two parts',
              'multiply by the prices; output is small because the agent writes little per turn',
            ],
            answer: 'About $3.29 for the run, of which 93% is re-reading context. A 60-turn run would read about 3.8 million tokens: nearly four times as much.',
          },
        },
        {
          t: 'math',
          tex: String.raw`\text{Cost}_{\text{cached}} = I_{\text{new}}\,\pi_{\text{in}} + I_{\text{hit}}\,\rho\,\pi_{\text{in}}`,
          caption: 'Input cost with prompt caching: new tokens at full price, cache hits at a fraction ρ of it.',
          plain: 'Most of what an agent re-reads each turn is identical to last turn. With prompt caching the provider keeps the processed prefix and charges a small fraction of the normal price to read it again (often around a tenth, with a surcharge when first written). Only the genuinely new tokens pay full price.',
          where: [
            { sym: String.raw`I_{\text{new}}`, def: 'tokens read for the first time' },
            { sym: String.raw`I_{\text{hit}}`, def: 'tokens served from the cache' },
            { sym: String.raw`\pi_{\text{in}}`, def: 'normal input price per token' },
            { sym: String.raw`\rho`, def: 'cache-read price as a fraction of normal (illustrative 0.1)' },
          ],
          syntax: [
            { sym: String.raw`\pi`, say: '“pi”, used here for price' },
            { sym: String.raw`\rho`, say: '“rho”' },
          ],
          worked: {
            title: 'The same 30-turn run with caching',
            steps: [
              String.raw`New tokens: the first 5,000 plus 2,000 new per later turn: \(5{,}000 + 29 \times 2{,}000 = 63{,}000\).`,
              String.raw`Cache hits: \(1{,}020{,}000 - 63{,}000 = 957{,}000\).`,
              String.raw`Cost: \(0.063 \times \$3 + 0.957 \times 0.1 \times \$3 = \$0.19 + \$0.29 = \$0.48\).`,
            ],
            why: [
              'only the growth is new each turn',
              'everything else was read before',
              'full price for new, a tenth for cached',
            ],
            answer: 'Input cost falls from $3.06 to about $0.48 (ignoring cache-write surcharges and expiry). Keeping the context prefix stable, and appending rather than editing, makes caching work.',
          },
        },
      ],
    },
    {
      id: 'latency',
      title: 'Latency',
      blocks: [
        {
          t: 'math',
          tex: String.raw`L = \sum_{t=1}^{T} \Big( \tau_{\text{first}} + \frac{o_t}{r} + \tau_{\text{tool},t} \Big)`,
          caption: 'Wall-clock time of a sequential agent run.',
          plain: 'Each turn costs the wait for the first token, the time to generate the output at the model’s speed, and the time the tool takes to run. In a sequential agent these add up over every turn.',
          where: [
            { sym: 'L', def: 'total latency (seconds)' },
            { sym: String.raw`\tau_{\text{first}}`, def: 'time to first token' },
            { sym: String.raw`o_t`, def: 'output tokens on turn t' },
            { sym: 'r', def: 'generation speed (tokens per second)' },
            { sym: String.raw`\tau_{\text{tool},t}`, def: 'time the tool takes on turn t' },
          ],
          syntax: [
            { sym: String.raw`\tau`, say: '“tau”, a time' },
          ],
          worked: {
            title: '30 turns',
            steps: [
              String.raw`Per turn: \(\tau_{\text{first}} = 1\) s, \(o = 500\) tokens at \(r = 50\) tokens/s \(= 10\) s, tool 2 s.`,
              String.raw`Per turn total \(= 1 + 10 + 2 = 13\) s.`,
              String.raw`\(L = 30 \times 13 = 390\) s \(= 6.5\) minutes.`,
            ],
            why: [
              'estimate each part',
              'add them',
              'thirty sequential turns',
            ],
            answer: 'About 6.5 minutes. Generation dominates, so shorter outputs, faster models for simple steps, and parallel tool calls cut latency most.',
          },
        },
        {
          t: 'math',
          tex: String.raw`S = \frac{1}{(1-f) + \dfrac{f}{k}}`,
          caption: 'Amdahl’s law: speed-up from running the parallel fraction f of the work on k agents.',
          plain: 'Only part of a job can be split between workers. The rest (planning, merging results) must happen in sequence. Amdahl’s law says the speed-up from k parallel workers is limited by that serial part: even infinitely many workers cannot beat 1 ÷ (1 − f).',
          where: [
            { sym: 'S', def: 'speed-up compared with one agent' },
            { sym: 'f', def: 'fraction of the work that can run in parallel' },
            { sym: 'k', def: 'number of parallel agents' },
          ],
          syntax: [
            { sym: String.raw`\dfrac{f}{k}`, say: 'the parallel part, shared k ways' },
          ],
          worked: {
            title: 'A research task, 80% parallelisable',
            steps: [
              String.raw`\(f = 0.8\), \(k = 5\).`,
              String.raw`\(S = 1 / (0.2 + 0.8/5) = 1 / (0.2 + 0.16) = 1/0.36\).`,
              String.raw`\(S \approx 2.78\).`,
              String.raw`Limit as \(k \to \infty\): \(1/0.2 = 5\).`,
            ],
            why: [
              'set the parallel share and the number of subagents',
              'serial part plus the parallel part divided five ways',
              'invert',
              'with unlimited agents the parallel part vanishes and only the serial 20% remains',
            ],
            answer: 'Five subagents make it about 2.8 times faster, not 5, while costing about five times the tokens for the parallel part. The orchestration overhead often makes the real gain smaller still.',
          },
        },
      ],
    },
  ],
  sources: [
    'Amdahl, G. M. (1967). Validity of the single processor approach to achieving large scale computing capabilities. AFIPS Conference Proceedings, 30, 483–485.',
    'Provider documentation on prompt caching (Anthropic, OpenAI, Google), 2024–2025.',
  ],
  related: ['agentic-ai/theory/memory-and-context', 'agentic-ai/theory/multi-agent', 'cloud/start-here'],
}

export default guide
