import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The **transformer**, introduced in 2017, is the architecture behind GPT, Claude, Gemini, BERT, modern translation, and increasingly vision and audio models. Its key idea is **self-attention**: every token looks at every other token and decides how much each matters, all in parallel.',
  nutshell: [
    'Each token makes a **query**, a **key** and a **value** vector.',
    'Attention weights = softmax of query–key dot products, scaled by \\(\\sqrt{d_k}\\); the output is the weighted average of the values.',
    '**Multi-head** attention runs several attentions in parallel, each free to track a different relationship.',
    'Blocks of attention + feed-forward layers, with residual connections and layer norm, are stacked dozens of times.',
    '**Positional encodings** tell the model about word order, which attention alone ignores.',
  ],
  sections: [
    {
      id: 'lab',
      title: 'Attention, interactively',
      blocks: [
        { t: 'p', text: 'Tap a word to make it the query. Notice how "it" points at different nouns depending on the last word: exactly the kind of long-range link that RNNs found hard.' },
        { t: 'ai-viz', viz: 'attention' },
      ],
    },
    {
      id: 'attention',
      title: 'Scaled dot-product attention',
      blocks: [
        {
          t: 'math',
          tex: String.raw`Q = XW_Q,\quad K = XW_K,\quad V = XW_V`,
          where: [
            { sym: 'X', def: 'The sequence of token embeddings, one row per token' },
            { sym: 'W_Q, W_K, W_V', def: 'Three separate learned weight matrices, shared across every token in the sequence' },
          ],
          syntax: [
            { sym: 'Q = XW_Q', say: String.raw`Matrix product: every row of X (one token) is multiplied by \(W_Q\) to give that token's query row.` },
            { sym: String.raw`W_Q,\ W_K,\ W_V`, say: 'The subscripts are labels, not indices: "W sub Q" is the matrix that makes Queries, and so on. They are three different matrices.' },
          ],
          worked: {
            title: 'Two tokens, three dimensions',
            steps: [
              String.raw`Given: \(X\) with rows \((1, 0, 1)\) and \((0, 1, 1)\); \(W_Q = W_V = \begin{pmatrix} 1 & 0 \\ 0 & 1 \\ 1 & 1 \end{pmatrix}\); \(W_K = \begin{pmatrix} 1 & 0 \\ 0 & 1 \\ 0 & 0 \end{pmatrix}\).`,
              String.raw`Token 1 query: \((1, 0, 1)W_Q = (1 + 1,\ 0 + 1) = (2, 1)\). Token 2 query: \((0, 1, 1)W_Q = (1,\ 1 + 1) = (1, 2)\).`,
              String.raw`Keys: token 1 gives \((1, 0)\) and token 2 gives \((0, 1)\) (the third input dimension is ignored by \(W_K\)).`,
              String.raw`Values equal the queries here: token 1 is \((2, 1)\) and token 2 is \((1, 2)\).`,
              String.raw`Match token 1's query to both keys: \((2, 1)\cdot(1, 0) = 2\) and \((2, 1)\cdot(0, 1) = 1\), so token 1 prefers key 1.`,
            ],
            answer: String.raw`Three small weight matrices turned each 3-number token into three different 2-number roles; \(Q\) and \(K\) decide who attends to whom, and \(V\) is what gets passed along.`,
          },
          caption: 'Each row of X is one token’s embedding. Three learned matrices project it into a query (what am I looking for?), a key (what do I contain?) and a value (what do I pass on?). Because the same three matrices are applied to every token identically, the model learns one general notion of "how to ask" and "how to answer" that works regardless of a word\'s position in the sentence.',
        },
        {
          t: 'math',
          tex: String.raw`\operatorname{Attention}(Q, K, V) = \operatorname{softmax}\!\left(\frac{QK^\top}{\sqrt{d_k}}\right)V`,
          where: [
            { sym: 'QK^\\top', def: 'An n × n table of scores: how well each query matches each key' },
            { sym: '\\sqrt{d_k}', def: 'Scaling by the key dimension keeps scores from growing with d_k and saturating the softmax' },
            { sym: '\\operatorname{softmax}', def: 'Applied to each row, so each token’s weights sum to 1' },
          ],
          syntax: [
            { sym: String.raw`QK^\top`, say: 'Read "Q times K transpose": dot every query row with every key row, producing a table with one score per (query, key) pair.' },
            { sym: String.raw`\sqrt{d_k}`, say: 'Read "square root of d sub k": divide every score by this number before the softmax.' },
            { sym: String.raw`\operatorname{softmax}\!\left(\cdot\right)V`, say: 'Read "softmax of the scores, times V": turn each row of scores into weights summing to 1, then use those weights to blend the rows of V.' },
          ],
          worked: {
            title: 'One token attending to three',
            steps: [
              String.raw`Given \(d_k = 2\), query \(\mathbf{q} = (1, 1)\), keys \((1, 0)\), \((0, 1)\), \((1, 1)\), values \((1, 0)\), \((0, 1)\), \((2, 2)\).`,
              String.raw`Raw scores \(\mathbf{q}\cdot\mathbf{k}\): \(1,\ 1,\ 2\).`,
              String.raw`Scale by \(\sqrt{2} = 1.4142\): \(0.7071,\ 0.7071,\ 1.4142\).`,
              String.raw`Exponentiate: \(2.0281,\ 2.0281,\ 4.1133\), with total 8.1695. Divide: weights \(0.2483,\ 0.2483,\ 0.5035\) (they sum to 1).`,
              String.raw`Blend the values: \(0.2483(1, 0) + 0.2483(0, 1) + 0.5035(2, 2) = (1.255,\ 1.255)\).`,
              String.raw`Without the scaling the softmax of \((1, 1, 2)\) would be \((0.212, 0.212, 0.576)\): sharper, which gets worse as \(d_k\) grows.`,
            ],
            answer: String.raw`The third token matches the query best, so it receives half the weight (0.50) and pulls the output to \((1.255, 1.255)\) rather than the plain average of the three values.`,
          },
          caption: 'The heart of the transformer, from "Attention Is All You Need" (Vaswani et al., 2017). Read the output one token at a time: softmax turns that token\'s raw scores against every other token into a set of weights summing to 1, and the final output is simply those weights used to blend the value vectors, a token that matches well gets a big weight and dominates the blend, one that matches poorly is almost ignored, but (like softmax everywhere) never entirely zeroed out.',
        },
        {
          t: 'metric',
          name: 'an attention weight',
          shows: 'How much one token leans on another specific token when building its new representation, one entry in the softmax output above, read as "of all the tokens I could draw information from, what share comes from this one?"',
          eli5: 'Picture a student answering "What colour is it?" in the sentence "The cat sat on the mat, which was red." To resolve "it", the model needs to look back and decide which earlier word to lean on. A high attention weight from "it" to "mat" means the model is confidently treating "mat" as what "it" refers to; a high weight to "cat" instead would mean it (wrongly, here) thinks the question is about the cat.',
          higher: 'This particular token is dominating the blend of values being gathered, the model has decided this relationship matters a lot for understanding the current token. Visualised as in the lab above, a bright, concentrated line between two tokens is exactly this: high confidence that this one connection matters.',
          lower: 'This token is contributing little to the output at this position, it may be irrelevant here even if it mattered for a different token\'s attention, or the query simply did not find a strong match. Because softmax weights always sum to 1 across the row, every weight being low except one or two just means attention has sharply focused rather than spread evenly.',
          typical: 'Early or lower layers often spread attention more broadly (picking up syntax, nearby words); later layers tend to show a few very high, sharply focused weights picking out specific long-range relationships, like a pronoun finally locking onto its noun, which is exactly the behaviour to look for when tapping different words in the lab above.',
        },
        {
          t: 'example',
          title: 'Two tokens, by hand (d_k = 2)',
          lines: [
            { label: 'Vectors', text: '\\(\\mathbf{q}_1 = (1, 0)\\); keys \\(\\mathbf{k}_1 = (1, 0)\\), \\(\\mathbf{k}_2 = (0, 1)\\); values \\(\\mathbf{v}_1 = (1, 2)\\), \\(\\mathbf{v}_2 = (3, 0)\\)' },
            { label: 'Scores', text: '\\(\\mathbf{q}_1\\cdot\\mathbf{k}_1/\\sqrt{2} = 0.707\\), \\(\\mathbf{q}_1\\cdot\\mathbf{k}_2/\\sqrt{2} = 0\\)' },
            { label: 'Softmax', text: '\\(e^{0.707}/(e^{0.707} + e^{0}) = 2.028/3.028 = 0.67\\), and 0.33' },
            { label: 'Output', text: '\\(0.67(1, 2) + 0.33(3, 0) = (1.66, 1.34)\\): mostly token 1’s value, with some of token 2’s' },
          ],
        },
        {
          t: 'math',
          tex: String.raw`\operatorname{MultiHead}(X) = \operatorname{Concat}(\text{head}_1, \dots, \text{head}_h)\,W_O, \qquad \text{head}_i = \operatorname{Attention}(XW_Q^{(i)}, XW_K^{(i)}, XW_V^{(i)})`,
          where: [
            { sym: 'h', def: 'The number of heads running in parallel' },
            { sym: 'W_O', def: 'A learned matrix that mixes the concatenated heads back into one output' },
          ],
          syntax: [
            { sym: String.raw`\operatorname{Concat}(\text{head}_1, \dots, \text{head}_h)`, say: String.raw`Read "concatenate head one through head h": place the heads' outputs side by side to make one wider vector for each token.` },
            { sym: 'W_Q^{(i)}', say: String.raw`A superscript in round brackets is the head number, not a power: every head \(i\) has its own set of Q, K and V matrices.` },
            { sym: String.raw`\text{head}_i = \operatorname{Attention}(\cdots)`, say: 'Each head is the full attention formula run on its own projections, independently of the other heads.' },
          ],
          worked: {
            title: 'Two heads merged by W_O',
            steps: [
              String.raw`Given: one token's output from head 1 is \((1.0,\ 0.5)\) and from head 2 is \((0.2,\ -0.4)\); \(W_O\) has rows \((1, 0)\), \((0, 1)\), \((0.5, 0)\), \((0, 0.5)\).`,
              String.raw`Concatenate: \((1.0,\ 0.5,\ 0.2,\ -0.4)\).`,
              String.raw`First output entry: \(1.0 \times 1 + 0.5 \times 0 + 0.2 \times 0.5 + (-0.4) \times 0 = 1.1\).`,
              String.raw`Second output entry: \(1.0 \times 0 + 0.5 \times 1 + 0.2 \times 0 + (-0.4) \times 0.5 = 0.3\).`,
              String.raw`At real scale, GPT-3 uses \(h = 96\) heads of 128 dimensions each, so the concatenated vector has \(96 \times 128 = 12{,}288\) entries.`,
            ],
            answer: String.raw`The two 2-number head outputs become one 2-number result \((1.1,\ 0.3)\), with \(W_O\) deciding how much each head's finding contributes.`,
          },
          caption: 'With h heads (e.g. 12 or 96), one head might track grammar, another which noun a pronoun refers to, another nearby words. Each head has its own small Q, K, V projections and runs the exact same attention formula independently; concatenating them side by side and passing the result through W_O lets the model combine whatever each head noticed into one representation, rather than forcing every relationship to be squeezed through a single attention pattern.',
        },
        {
          t: 'math',
          tex: String.raw`\text{Causal mask: } \text{score}_{ij} = -\infty \ \text{ for } j > i`,
          where: [{ sym: '\\text{score}_{ij}', def: 'The raw attention score of query token i against key token j, before softmax' }],
          syntax: [
            { sym: String.raw`-\infty`, say: String.raw`Read "minus infinity": a score so negative that \(e\) raised to it is exactly 0, so the softmax gives that position no weight at all.` },
            { sym: String.raw`\text{score}_{ij}`, say: 'Row i, column j of the score table: how strongly query token i matches key token j.' },
            { sym: String.raw`\text{ for } j > i`, say: 'Read "for every j greater than i": every position after token i, that is, its future.' },
          ],
          worked: {
            title: 'The second token of three',
            steps: [
              String.raw`Given: token 2 (\(i = 2\)) has raw scores \((2.0,\ 1.0,\ 3.0)\) against tokens 1, 2 and 3.`,
              String.raw`Without a mask: \(e^{2} = 7.389\), \(e^{1} = 2.718\), \(e^{3} = 20.086\), total 30.193, giving weights \((0.245,\ 0.090,\ 0.665)\).`,
              String.raw`With the mask, \(j = 3 > i = 2\) is set to \(-\infty\): scores \((2.0,\ 1.0,\ -\infty)\).`,
              String.raw`Exponentiate: \((7.389,\ 2.718,\ 0)\), with total 10.107.`,
              String.raw`Divide: weights \((0.731,\ 0.269,\ 0)\).`,
            ],
            answer: 'Unmasked, token 2 would have put 66.5% of its attention on token 3, a word it is supposed to predict; masked, that weight is exactly 0 and the remaining two share it 73% to 27%.',
          },
          caption: 'In GPT-style (decoder) models a token may only attend to earlier tokens, so the model cannot peek at the word it is trying to predict. Setting a score to −∞ before the softmax is the trick: e^{-∞} = 0, so that position gets exactly zero weight in the output, as if it were never there at all. Toggle the causal mask in the lab to see the matrix become triangular.',
        },
      ],
    },
    {
      id: 'block',
      title: 'The transformer block',
      blocks: [
        {
          t: 'flow',
          title: 'A decoder-only transformer (GPT-style)',
          nodes: [
            { label: 'Tokens', sub: '"The cat sat"', tone: 'data' },
            { label: 'Embeddings + positions', tone: 'process' },
            { label: 'Masked multi-head attention', sub: '+ residual, layer norm', tone: 'model' },
            { label: 'Feed-forward network', sub: '+ residual, layer norm', tone: 'model' },
            { label: 'Linear + softmax', sub: 'next-token probabilities', tone: 'output' },
          ],
          loop: 'the attention + feed-forward block repeats N times (12 in GPT-2 small, 96 in GPT-3)',
        },
        {
          t: 'math',
          tex: String.raw`\mathbf{x} \leftarrow \mathbf{x} + \operatorname{Attention}(\operatorname{LN}(\mathbf{x})) \qquad \mathbf{x} \leftarrow \mathbf{x} + \operatorname{FFN}(\operatorname{LN}(\mathbf{x})) \qquad \operatorname{FFN}(\mathbf{x}) = W_2\,\operatorname{GELU}(W_1\mathbf{x} + \mathbf{b}_1) + \mathbf{b}_2`,
          where: [
            { sym: '\\operatorname{LN}', def: 'Layer norm: rescales a token\'s values to a consistent range before each sub-layer' },
            { sym: 'W_1, W_2', def: 'The feed-forward network\'s two weight matrices, expanding then shrinking back' },
          ],
          syntax: [
            { sym: String.raw`\leftarrow`, say: String.raw`Read "is replaced by": x is overwritten with x plus the sub-layer's output. The sub-layer's result is added to the original x, not to the normalised copy.` },
            { sym: String.raw`\operatorname{LN}(\mathbf{x})`, say: String.raw`Read "layer norm of x": the normalised copy goes into the sub-layer first, and only the sub-layer's output is added back onto x.` },
            { sym: String.raw`\operatorname{GELU}`, say: String.raw`Read "gell-you": a smooth ReLU that multiplies its input by \(\Phi(z)\), the probability that a standard bell-curve value is below z.` },
          ],
          worked: {
            title: 'One block on a two-number token',
            steps: [
              String.raw`Given: a token with \(\mathbf{x} = (2, 4)\). To keep it short, layer norm is the plain version (no learned scale, \(\epsilon\) ignored).`,
              String.raw`\(\operatorname{LN}(\mathbf{x})\): mean 3, deviations \(\mp 1\), standard deviation 1, so it is \((-1, 1)\). Suppose attention returns \((0.5, -0.25)\); then \(\mathbf{x} \leftarrow (2.5,\ 3.75)\).`,
              String.raw`\(\operatorname{LN}\) again: mean 3.125, deviations \(\mp 0.625\), standard deviation 0.625, giving \((-1, 1)\).`,
              String.raw`Expand to 3 units with \(W_1\) rows \((1,0)\), \((0,1)\), \((1,1)\) and \(\mathbf{b}_1 = \mathbf{0}\): \((-1,\ 1,\ 0)\). GELU: \((-0.1587,\ 0.8413,\ 0)\).`,
              String.raw`Shrink back with \(W_2\) rows \((1,0,0.5)\), \((0,1,0.5)\): \((-0.1587,\ 0.8413)\).`,
              String.raw`Add to x: \(\mathbf{x} \leftarrow (2.5 - 0.1587,\ 3.75 + 0.8413) = (2.3413,\ 4.5913)\).`,
            ],
            answer: String.raw`Both sub-layers only nudged x (by about 0.5 and 0.8 at most), never replaced it: the token's original information passes through the whole block untouched.`,
          },
          caption: 'Attention mixes information between tokens; the feed-forward network (typically 4× wider in the middle) processes each token on its own, with no mixing across positions. The "x ← x + …" pattern is the key readability trick: each sub-layer only has to learn a small *refinement* to add on top of x, not recompute the whole representation from scratch, which is what makes stacking dozens of these blocks trainable at all rather than the signal degrading layer by layer.',
        },
        {
          t: 'math',
          tex: String.raw`PE_{(pos,\,2i)} = \sin\!\left(\frac{pos}{10000^{2i/d}}\right) \qquad PE_{(pos,\,2i+1)} = \cos\!\left(\frac{pos}{10000^{2i/d}}\right)`,
          where: [
            { sym: 'pos', def: 'The token\'s position in the sequence (0, 1, 2, …)' },
            { sym: 'i, d', def: 'Which pair of embedding dimensions this is, out of d total' },
          ],
          syntax: [
            { sym: String.raw`PE_{(pos,\,2i)}`, say: 'Read "P E at position pos, dimension 2 i": even-numbered dimensions use sine, odd-numbered ones (2i + 1) use cosine.' },
            { sym: '10000^{2i/d}', say: 'Read "ten thousand to the power 2 i over d": as i grows, this divisor grows, so the waves get longer and slower.' },
            { sym: String.raw`\sin,\ \cos`, say: 'Both take their input in radians, not degrees.' },
          ],
          worked: {
            title: 'Position 2 with d = 4',
            steps: [
              String.raw`Given: \(d = 4\), so there are two pairs of dimensions, \(i = 0\) and \(i = 1\), and the position is \(pos = 2\).`,
              String.raw`Pair \(i = 0\): the divisor is \(10000^{0} = 1\), so \(\sin(2) = 0.9093\) and \(\cos(2) = -0.4161\).`,
              String.raw`Pair \(i = 1\): the divisor is \(10000^{2/4} = 100\), so \(\sin(0.02) = 0.0200\) and \(\cos(0.02) = 0.9998\).`,
              String.raw`So \(PE_2 = (0.9093,\ -0.4161,\ 0.0200,\ 0.9998)\).`,
              String.raw`Position 0 gives \(\sin 0 = 0\), \(\cos 0 = 1\) in both pairs: \(PE_0 = (0, 1, 0, 1)\).`,
            ],
            answer: 'Position 2 differs from position 0 by a lot in the fast pair (0.91 versus 0) and only slightly in the slow pair (0.02 versus 0), so the pairs act like the second hand and hour hand of a clock.',
          },
          caption: 'The original sinusoidal positional encoding, added to each embedding: every position gets a unique pattern of waves at different frequencies. Low dimensions (small i) oscillate fast with position, like a clock\'s second hand distinguishing neighbouring positions; high dimensions oscillate slowly, like an hour hand distinguishing far-apart positions, together, every position ends up with its own distinctive fingerprint across all d dimensions, which is plotted below. Many modern models use learned or rotary (RoPE) position encodings instead.',
        },
        {
          t: 'plot',
          title: 'Positional encoding: a few dimensions across positions',
          x: [0, 50],
          y: [-1.2, 1.2],
          xLabel: 'position in the sequence',
          curves: [
            { f: (p: number) => Math.sin(p), label: 'dim 0 (fast)' },
            { f: (p: number) => Math.sin(p / 10000 ** (4 / 64)), label: 'dim 4', color: '#e07b2a' },
            { f: (p: number) => Math.sin(p / 10000 ** (16 / 64)), label: 'dim 16 (slow)', color: '#2f9e6e' },
          ],
        },
        {
          t: 'table',
          head: ['Family', 'Attention', 'Trained to', 'Examples'],
          rows: [
            ['Encoder-only', 'Every token sees every token', 'Fill in masked words', 'BERT, RoBERTa: classification, search'],
            ['Decoder-only', 'Causal: only earlier tokens', 'Predict the next token', 'GPT, Claude, Llama, Gemini'],
            ['Encoder–decoder', 'Encoder full; decoder causal + cross-attention to the encoder', 'Map one sequence to another', 'Original transformer, T5: translation, summarising'],
          ],
        },
      ],
    },
    {
      id: 'code',
      title: 'Attention in a few lines',
      blocks: [
        {
          t: 'code',
          title: 'NumPy',
          code: String.raw`import numpy as np

def softmax(z):
    z = z - z.max(axis=-1, keepdims=True)    # for numerical stability
    e = np.exp(z)
    return e / e.sum(axis=-1, keepdims=True)

def attention(Q, K, V, causal=False):
    d_k = K.shape[-1]
    scores = Q @ K.T / np.sqrt(d_k)          # (n, n)
    if causal:
        n = scores.shape[0]
        scores[np.triu_indices(n, k=1)] = -np.inf
    weights = softmax(scores)                # each row sums to 1
    return weights @ V, weights

Q = np.array([[1.0, 0.0]])
K = np.array([[1.0, 0.0], [0.0, 1.0]])
V = np.array([[1.0, 2.0], [3.0, 0.0]])
out, w = attention(Q, K, V)
print(w.round(2), out.round(2))   # [[0.67 0.33]] [[1.66 1.34]]`,
        },
        {
          t: 'math',
          tex: String.raw`\text{Cost of self-attention} = O(n^2 d)`,
          where: [
            { sym: 'n', def: 'The sequence length (number of tokens)' },
            { sym: 'd', def: 'The embedding dimension' },
          ],
          syntax: [
            { sym: 'O(n^2 d)', say: String.raw`Read "big-O of n squared d": the cost grows in proportion to \(n^2 \times d\). It describes how the cost scales and ignores constant factors, so it is not an exact count.` },
          ],
          worked: {
            title: 'Counting the multiplications in QKᵀ',
            steps: [
              String.raw`Given: \(n = 1{,}000\) tokens and \(d = 768\). Each of the \(n^2\) query-key pairs takes a dot product of \(d\) multiplications.`,
              String.raw`Cost: \(1{,}000^2 \times 768 = 768{,}000{,}000\) multiplications.`,
              String.raw`Double the context to \(n = 2{,}000\): \(2{,}000^2 \times 768 = 3{,}072{,}000{,}000\), four times as many.`,
              String.raw`Double the embedding size instead, \(d = 1{,}536\): \(1{,}000^2 \times 1{,}536 = 1{,}536{,}000{,}000\), only twice as many.`,
              String.raw`A 100,000-token context: \(100{,}000^2 \times 768 = 7.68 \times 10^{12}\).`,
            ],
            answer: 'Doubling the length quadruples the work while doubling the width only doubles it, and at 100,000 tokens the score table alone costs about 7.7 trillion multiplications per layer.',
          },
          caption: 'Every token compares with every other, so doubling the context length quadruples the attention cost (the n² term) while cost only grows linearly with how rich each embedding is (the d term). This is why long documents or conversations get expensive fast, and why much research (sparse attention, FlashAttention, state-space models) specifically targets the n² term rather than d.',
        },
        { t: 'callout', tone: 'fact', title: 'A Beatles title', text: 'The paper’s title, "Attention Is All You Need", nods to the Beatles’ "All You Need Is Love". Its eight authors, all then at Google, are listed as equal contributors in random order. It has become one of the most cited papers of the century.' },
      ],
    },
  ],
  sources: ['Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A. N., Kaiser, Ł., & Polosukhin, I. (2017). Attention is all you need. *NeurIPS*.', 'Alammar, J. (2018). The illustrated transformer. *jalammar.github.io*.', 'Devlin, J., Chang, M.-W., Lee, K., & Toutanova, K. (2019). BERT. *NAACL*.', 'Su, J., et al. (2021). RoFormer: Enhanced transformer with rotary position embedding. *arXiv:2104.09864*.'],
  related: ['ai/generative/llms', 'ai/neural/embeddings', 'ai/neural/rnn'],
}

export default guide
