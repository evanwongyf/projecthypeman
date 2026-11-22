import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A large language model (LLM) such as GPT, Claude, Gemini or Llama is a transformer trained to do one thing: predict the next token of text. Trained on trillions of words with billions of parameters, that simple objective produces systems that can write, summarise, translate, code and reason through problems, along with real limitations worth understanding.',
  nutshell: [
    'Text is split into **tokens** (pieces of words); the model outputs a probability for every possible next token.',
    '**Pre-training** on huge text corpora teaches language and knowledge; **fine-tuning** and **RLHF** teach it to follow instructions helpfully and safely.',
    'Text is generated one token at a time by **sampling**, controlled by temperature and top-p.',
    '**Scaling laws**: loss falls predictably as parameters, data and compute grow.',
    'LLMs can state falsehoods fluently (**hallucination**): always check facts that matter.',
  ],
  sections: [
    {
      id: 'tokens',
      title: 'Tokens',
      blocks: [
        { t: 'ai-viz', viz: 'bpe' },
        { t: 'p', text: 'Real tokenisers learn tens of thousands to a few hundred thousand merges from huge corpora. In English a token averages roughly four characters, or about three-quarters of a word. Models see token IDs, not letters, which is why they can struggle to count the letters in a word.' },
      ],
    },
    {
      id: 'objective',
      title: 'Next-token prediction',
      blocks: [
        {
          t: 'math',
          tex: String.raw`P(t_1, t_2, \dots, t_n) = \prod_{i=1}^{n} P(t_i \mid t_1, \dots, t_{i-1})`,
          syntax: [
            { sym: String.raw`P(t_1, t_2, \dots, t_n)`, say: String.raw`Read "the probability of the whole sequence t sub 1, t sub 2, up to t sub n". The subscripts number the tokens by position.` },
            { sym: String.raw`\prod_{i=1}^{n}`, say: String.raw`Read "the product from i equals 1 to n": do what follows for i = 1, 2, ... n and multiply all the results together.` },
            { sym: String.raw`P(t_i \mid t_1, \dots, t_{i-1})`, say: String.raw`Read "the probability of token i, given all the tokens before it". The bar \(\mid\) means "given", and \(t_{i-1}\) is the token just before position i.` },
          ],
          worked: {
            steps: [
              String.raw`Score the three-token text "the cat sat". Suppose the model gives \(P(\text{the}) = 0.1\), \(P(\text{cat} \mid \text{the}) = 0.02\) and \(P(\text{sat} \mid \text{the cat}) = 0.25\).`,
              String.raw`Chain: \(P = 0.1 \times 0.02 \times 0.25\).`,
              String.raw`\(0.1 \times 0.02 = 0.002\), then \(0.002 \times 0.25 = 0.0005\).`,
            ],
            answer: String.raw`The text has probability \(0.0005\) (1 in 2,000). Every extra token multiplies in another number below 1, so long texts always get tiny probabilities, which is why practitioners add up logs instead.`,
          },
          where: [{ sym: 't_i', def: 'The i-th token of the text' }],
          caption: 'Any text’s probability factorises into a chain of next-token predictions, multiplying one conditional probability per token, each one conditioned on every token before it. This is exactly why a model only ever has to be trained to do one thing, predict the next token well, to end up able to assign a probability (and generate) to entire documents, conversations or essays: the whole is just this product applied one step at a time.',
        },
        {
          t: 'math',
          tex: String.raw`\mathcal{L}(\theta) = -\frac{1}{n}\sum_{i=1}^{n}\log P_\theta(t_i \mid t_{<i}) \qquad \text{Perplexity} = e^{\mathcal{L}}`,
          syntax: [
            { sym: String.raw`-\frac{1}{n}\sum_{i=1}^{n}`, say: String.raw`Read "minus one over n times the sum from i equals 1 to n": do the thing after the sigma for each position i, add the results, divide by n to average, and flip the sign.` },
            { sym: String.raw`P_\theta(t_i \mid t_{<i})`, say: String.raw`Read "P theta of t i given everything before i". The subscript \(\theta\) means these probabilities come from the model with parameters \(\theta\); \(t_{<i}\) means "all tokens at positions less than i".` },
            { sym: String.raw`e^{\mathcal{L}}`, say: String.raw`Read "e to the power L": raise Euler's number (about 2.718) to the loss, which undoes the natural log.` },
          ],
          worked: {
            steps: [
              String.raw`Three tokens, and the model gave the true next token probabilities \(0.5,\ 0.25,\ 0.125\).`,
              String.raw`Per-token surprise \(-\ln p\): \(0.6931,\ 1.3863,\ 2.0794\).`,
              String.raw`Average: \(\mathcal{L} = (0.6931 + 1.3863 + 2.0794)/3 = 4.1589/3 \approx 1.3863\).`,
              String.raw`Perplexity: \(e^{1.3863} = 4.0\).`,
            ],
            answer: String.raw`Perplexity 4: the model was, on average, as unsure as if it were choosing uniformly between 4 equally likely tokens (the probabilities were 1/2, 1/4, 1/8, whose geometric mean is 1/4).`,
          },
          where: [
            { sym: '\\theta', def: 'The model\'s parameters' },
            { sym: 't_{<i}', def: 'Every token before position i' },
          ],
          caption: 'The training loss is the average cross-entropy of the true next token, in plain terms, how surprised the model was by what actually came next, averaged over every position in the text. Perplexity simply undoes the log and the averaging (e^L), turning that abstract loss number back into something readable: roughly "how many tokens the model is choosing between": lower is better, and the metric below reads it in full.',
        },
        {
          t: 'metric',
          name: 'perplexity',
          shows: 'How surprised the model is by real text, on average, measured as an effective number of equally likely choices it was juggling at each step. A perplexity of 1 would mean the model was always 100% certain of the correct next token; a perplexity equal to the vocabulary size would mean it was essentially guessing at random.',
          eli5: 'Imagine a multiple-choice test where some questions have 2 options and others have 50. If a model\'s perplexity is 8, it\'s roughly as if, on average, it were choosing the right answer out of about 8 equally plausible options each time, the lower that number, the less "confused" the model generally was about what word should come next.',
          higher: 'The model found the text more surprising or unpredictable, it was less sure what word should come next, on average. High perplexity can mean the model is still early in training, is too small to capture the patterns in the text, or is being tested on text very different from what it was trained on (out-of-domain text).',
          lower: 'The model found the text easier to predict, it is confidently anticipating the right next word most of the time. Lower perplexity on held-out text (text the model was not trained on) is the standard way researchers compare how well different language models have learned the structure of language, though it does not by itself guarantee the model is more helpful, truthful, or safe, scaling laws research (below) is built largely on tracking this one number as models grow.',
          typical: 'Modern large language models achieve perplexities in the single digits on general English text, down from the tens or hundreds of early 2010s language models; perplexity is always measured relative to a specific tokeniser and test set, so raw numbers are only directly comparable between models evaluated the same way.',
        },
        {
          t: 'example',
          title: 'One training step on "The cat sat on the mat"',
          lines: [
            { label: 'Input', text: '"The cat sat on the" → model gives P("mat") = 0.30' },
            { label: 'Loss', text: '\\(-\\ln 0.30 = 1.20\\)' },
            { label: 'Update', text: 'backpropagation nudges every weight to make "mat" a little more likely in this context' },
            { label: 'In parallel', text: 'thanks to the causal mask, every position in the sentence is a training example in the same pass' },
          ],
        },
        { t: 'ai-viz', viz: 'sampling' },
      ],
    },
    {
      id: 'stages',
      title: 'From text predictor to assistant',
      blocks: [
        {
          t: 'flow',
          nodes: [
            { label: 'Pre-training', sub: 'next-token prediction on trillions of tokens of web, books, code', tone: 'data' },
            { label: 'Base model', sub: 'continues any text; not yet an assistant', tone: 'model' },
            { label: 'Supervised fine-tuning', sub: 'example conversations written by people', tone: 'human' },
            { label: 'Preference training', sub: 'RLHF, constitutional AI, DPO', tone: 'human' },
            { label: 'Assistant model', sub: 'helpful, honest, harmless (aimed for)', tone: 'output' },
          ],
        },
        {
          t: 'math',
          tex: String.raw`P(A \succ B) = \sigma\big(r_\phi(x, A) - r_\phi(x, B)\big)`,
          syntax: [
            { sym: String.raw`A \succ B`, say: String.raw`Read "A is preferred to B". The curved \(\succ\) is a ranking symbol, like "greater than" but for preference rather than size.` },
            { sym: String.raw`\sigma(z)`, say: String.raw`Read "sigma of z", the sigmoid \(\frac{1}{1+e^{-z}}\): feed in any number and get a value between 0 and 1. Input 0 gives 0.5.` },
            { sym: String.raw`r_\phi(x, A) - r_\phi(x, B)`, say: String.raw`Subtract B's score from A's. Only the gap matters, not the absolute scores.` },
          ],
          worked: {
            steps: [
              String.raw`For one prompt, the reward model scores answer A as \(r(x, A) = 2.0\) and answer B as \(r(x, B) = 0.5\).`,
              String.raw`Gap: \(2.0 - 0.5 = 1.5\).`,
              String.raw`Sigmoid: \(\sigma(1.5) = 1/(1 + e^{-1.5}) = 1/(1 + 0.2231) \approx 0.8176\).`,
            ],
            answer: String.raw`The model says A beats B with probability about 0.82. If human labellers actually preferred B, training would shrink that gap; a gap of 0 would give 0.5, meaning no preference.`,
          },
          where: [
            { sym: 'r_\\phi(x, A)', def: 'The reward model\'s score for answer A to prompt x' },
            { sym: '\\sigma', def: 'The sigmoid, turning the score gap into a probability between 0 and 1' },
          ],
          caption: 'RLHF: people compare two answers A and B to a prompt x. A reward model r is trained so the preferred answer scores higher (the Bradley–Terry model), read it as "the bigger the gap between the two scores, the more confidently the model should prefer A over B", exactly the same sigmoid-of-a-difference shape as logistic regression. The language model is then tuned with reinforcement learning to produce answers the reward model rates highly, while a penalty keeps it close to its original behaviour.',
        },
        {
          t: 'math',
          tex: String.raw`\max_{\pi}\ \mathbb{E}_{y \sim \pi(\cdot\mid x)}\big[r_\phi(x, y)\big] - \beta\,\mathrm{KL}\big(\pi \,\Vert\, \pi_{\text{ref}}\big)`,
          syntax: [
            { sym: String.raw`\max_{\pi}`, say: String.raw`Read "maximise over pi": search over possible versions of the policy (the language model) for the one that makes the whole expression biggest.` },
            { sym: String.raw`\mathbb{E}_{y \sim \pi(\cdot\mid x)}[\cdot]`, say: String.raw`Read "the expected value when y is drawn from pi given x": let the model write many replies y to prompt x, score each, and average. The dot in \(\pi(\cdot\mid x)\) is a placeholder for "any reply".` },
            { sym: String.raw`\mathrm{KL}(\pi \,\Vert\, \pi_{\text{ref}})`, say: String.raw`Read "the KL divergence from pi to pi-ref": a non-negative drift meter that is 0 only when the tuned model behaves identically to the reference model.` },
          ],
          worked: {
            steps: [
              String.raw`Compare two candidate tuned models using \(\beta = 0.1\). Model A has average reward \(3.0\) and drift \(\mathrm{KL} = 0.4\). Model B has average reward \(4.5\) and drift \(\mathrm{KL} = 25\).`,
              String.raw`Model A objective: \(3.0 - 0.1 \times 0.4 = 3.0 - 0.04 = 2.96\).`,
              String.raw`Model B objective: \(4.5 - 0.1 \times 25 = 4.5 - 2.5 = 2.0\).`,
            ],
            answer: String.raw`Model A wins (2.96 vs 2.0) even though B earns more raw reward: B drifted so far from the original model, probably exploiting the reward model, that the penalty outweighs its gain.`,
          },
          where: [
            { sym: '\\pi', def: 'The language model being tuned, as a distribution over possible replies y' },
            { sym: '\\pi_{\\text{ref}}', def: 'The original model, before this tuning' },
            { sym: '\\mathrm{KL}(\\pi \\Vert \\pi_{\\text{ref}})', def: 'How far the tuned model\'s behaviour has drifted from the original' },
            { sym: '\\beta', def: 'How strongly drifting away from the original model is penalised' },
          ],
          caption: 'This is what the reinforcement-learning step actually optimises: get a high reward (the first term) without straying far from how the original base model behaved (the second term, subtracted). Without that KL penalty, the model would happily find degenerate replies the reward model over-scores (reward hacking) rather than genuinely better ones; β is the knob that trades "chase the reward" against "stay sane and fluent like the original model".',
        },
      ],
    },
    {
      id: 'scale',
      title: 'Scale',
      blocks: [
        {
          t: 'math',
          tex: String.raw`C \approx 6\,N\,D \qquad L(N, D) \approx E + \frac{A}{N^{\alpha}} + \frac{B}{D^{\beta}}`,
          syntax: [
            { sym: String.raw`C \approx 6ND`, say: String.raw`Read "C is approximately 6 times N times D". The wavy equals means "roughly equal"; adjacent letters are multiplied.` },
            { sym: String.raw`\frac{A}{N^{\alpha}}`, say: String.raw`Read "A over N to the alpha": N raised to the power \(\alpha\) (about 0.34), then A divided by that. As N grows the denominator grows, so the term shrinks.` },
            { sym: String.raw`L(N, D)`, say: String.raw`Read "L of N and D": the loss as a function of both model size and data size.` },
          ],
          worked: {
            steps: [
              String.raw`Take a 7-billion-parameter model trained on 20 tokens per parameter: \(N = 7 \times 10^{9}\), \(D = 1.4 \times 10^{11}\). Use the fitted Hoffmann et al. constants \(E = 1.69,\ A = 406.4,\ B = 410.7,\ \alpha = 0.34,\ \beta = 0.28\).`,
              String.raw`Compute: \(C \approx 6 \times 7 \times 10^{9} \times 1.4 \times 10^{11} = 5.88 \times 10^{21}\) FLOPs.`,
              String.raw`Parameter term: \(406.4 / (7 \times 10^{9})^{0.34} \approx 0.1827\).`,
              String.raw`Data term: \(410.7 / (1.4 \times 10^{11})^{0.28} \approx 0.3109\).`,
              String.raw`Loss: \(L \approx 1.69 + 0.1827 + 0.3109 \approx 2.183\).`,
              String.raw`Double both \(N\) and \(D\) (to 14 billion and 280 billion tokens): the loss becomes about \(2.090\).`,
            ],
            answer: String.raw`Loss \(\approx 2.18\) for about \(5.9 \times 10^{21}\) FLOPs. Quadrupling the compute (doubling both N and D) only buys a drop of about 0.09 on a loss that can never go below E = 1.69: classic diminishing returns.`,
          },
          where: [
            { sym: 'C', def: 'Training compute in floating-point operations' },
            { sym: 'N, D', def: 'Number of parameters and number of training tokens' },
            { sym: 'E', def: 'The irreducible loss (the entropy of text itself)' },
            { sym: 'A, B, \\alpha, \\beta', def: 'Fitted constants: A and B set the scale of each gain, α and β how fast it fades' },
          ],
          caption: 'Scaling laws (Kaplan et al. 2020; Hoffmann et al. 2022): loss falls as a smooth power law in model size and data, read the two fraction terms as "how much headroom above the text\'s own irreducible entropy E is left to close", shrinking as N or D grow, but never reaching zero. Because the exponents α and β are well below 1, this is a story of steady diminishing returns: doubling parameters or data each buys a smaller loss improvement than the previous doubling did, which is exactly why ever-larger models need ever-larger data and compute budgets to keep improving at the same rate. The "Chinchilla" result suggests about 20 training tokens per parameter for a compute-optimal model.',
        },
        {
          t: 'plot',
          title: 'Loss falls as a power law in compute (illustrative)',
          x: [18, 26],
          y: [1.5, 4.5],
          xLabel: 'log₁₀ training compute (FLOPs)',
          yLabel: 'test loss',
          curves: [{ f: (c: number) => 1.7 + 2.6 * 10 ** (-(c - 18) * 0.12) }],
          caption: 'On log axes such curves are nearly straight lines, which let labs predict a big model’s performance from small experiments.',
        },
        {
          t: 'table',
          head: ['Model', 'Year', 'Parameters', 'Training tokens'],
          rows: [
            ['GPT-2', '2019', '1.5 billion', '~10 billion (40 GB of text)'],
            ['GPT-3', '2020', '175 billion', '300 billion'],
            ['Chinchilla', '2022', '70 billion', '1.4 trillion'],
            ['Llama 3 (largest)', '2024', '405 billion', 'over 15 trillion'],
          ],
          caption: 'Published figures. Many recent frontier models do not disclose their sizes.',
        },
        {
          t: 'code',
          title: 'Generate text with a small open model',
          code: String.raw`from transformers import pipeline

generator = pipeline("text-generation", model="gpt2")
out = generator("The cat sat on the", max_new_tokens=20,
                do_sample=True, temperature=0.8, top_p=0.95)
print(out[0]["generated_text"])`,
        },
      ],
    },
    {
      id: 'limits',
      title: 'Strengths and limits',
      blocks: [
        {
          t: 'dodont',
          do: ['Drafting, summarising, explaining and rephrasing', 'Brainstorming and getting unstuck', 'Writing and explaining code (then testing it)', 'Translating and adjusting tone'],
          dont: ['Trust citations, quotes, numbers or facts without checking', 'Assume knowledge of events after its training cut-off', 'Rely on precise arithmetic or letter counting without tools', 'Share private or confidential data without checking the policy'],
        },
        { t: 'callout', tone: 'warn', title: 'Why hallucinations happen', text: 'The model is trained to produce plausible continuations, not to look things up. When it does not know, the most plausible-sounding answer can be invented. Giving it source documents (retrieval), tools, and asking it to cite and to say when it is unsure all help, but none removes the risk.' },
        { t: 'callout', tone: 'fact', title: 'Too dangerous to release?', text: 'In February 2019 OpenAI initially withheld the full 1.5-billion-parameter GPT-2, citing misuse concerns, and released it in stages over nine months. Today models over a hundred times larger are routine.' },
      ],
    },
  ],
  sources: ['Radford, A., et al. (2019). Language models are unsupervised multitask learners. *OpenAI*.', 'Brown, T., et al. (2020). Language models are few-shot learners. *NeurIPS*.', 'Kaplan, J., et al. (2020). Scaling laws for neural language models. *arXiv:2001.08361*.', 'Hoffmann, J., et al. (2022). Training compute-optimal large language models. *NeurIPS*.', 'Ouyang, L., et al. (2022). Training language models to follow instructions with human feedback. *NeurIPS*.', 'Bai, Y., et al. (2022). Constitutional AI: Harmlessness from AI feedback. *arXiv:2212.08073*.'],
  related: ['ai/neural/transformers', 'ai/generative/prompting', 'ai/practice/ai-assistants'],
}

export default guide
