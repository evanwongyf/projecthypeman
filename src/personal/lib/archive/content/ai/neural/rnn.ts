import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Sentences, speech, music and stock prices are **sequences**: order matters and lengths vary. A **recurrent neural network** reads one item at a time, carrying a hidden state forward like a running memory. RNNs and their improved form, the **LSTM**, powered speech recognition and translation in the 2010s before transformers took over.',
  nutshell: [
    'An RNN updates a hidden state: \\(\\mathbf{h}_t = \\tanh(W_h\\mathbf{h}_{t-1} + W_x\\mathbf{x}_t + \\mathbf{b})\\).',
    'The same weights are reused at every time step.',
    'Training "unrolls" the network through time (backpropagation through time), where gradients vanish over long sequences.',
    '**LSTMs** add gates and a separate cell state so information can survive for hundreds of steps.',
  ],
  sections: [
    {
      id: 'rnn',
      title: 'A network with memory',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\mathbf{h}_t = \tanh\big(W_h\,\mathbf{h}_{t-1} + W_x\,\mathbf{x}_t + \mathbf{b}\big) \qquad \hat{\mathbf{y}}_t = \operatorname{softmax}(W_y\,\mathbf{h}_t)`,
          where: [
            { sym: '\\mathbf{x}_t', def: 'The input at step t (e.g. a word’s embedding)' },
            { sym: '\\mathbf{h}_t', def: 'The hidden state: a summary of everything read so far' },
            { sym: 'W_h, W_x, W_y', def: 'Weights shared across all time steps' },
          ],
          syntax: [
            { sym: String.raw`\mathbf{h}_{t-1}`, say: 'A subscript here is a time step: "h at t minus one" is the hidden state from the previous step.' },
            { sym: String.raw`\tanh`, say: 'Read "tanch": it squashes every entry into the range -1 to 1.' },
            { sym: String.raw`\operatorname{softmax}(\cdot)`, say: 'Read "softmax of": raise e to each entry, then divide by the total, so the outputs are positive and sum to 1 like probabilities.' },
          ],
          worked: {
            title: 'Two steps of a tiny RNN',
            steps: [
              String.raw`Given: \(W_h = \begin{pmatrix} 0.5 & -0.2 \\ 0.1 & 0.4 \end{pmatrix}\), \(W_x = (1, -1)^\top\) (one number comes in per step), \(\mathbf{b} = \mathbf{0}\), \(\mathbf{h}_0 = (0, 0)\), \(x_1 = 1\), \(x_2 = 0.5\). Three output classes with \(W_y\) rows \((1, 0)\), \((0, 1)\), \((1, 1)\).`,
              String.raw`Step 1: \(W_h\mathbf{h}_0 = (0, 0)\) and \(W_x x_1 = (1, -1)\), so \(\mathbf{h}_1 = \tanh(1, -1) = (0.7616,\ -0.7616)\).`,
              String.raw`Step 2: \(W_h\mathbf{h}_1 = (0.5 \times 0.7616 + 0.2 \times 0.7616,\ 0.1 \times 0.7616 - 0.4 \times 0.7616) = (0.5331,\ -0.2285)\).`,
              String.raw`Add the new input, \(W_x x_2 = (0.5, -0.5)\): the sum is \((1.0331,\ -0.7285)\), so \(\mathbf{h}_2 = (0.7752,\ -0.6221)\).`,
              String.raw`Output scores: \(W_y\mathbf{h}_2 = (0.7752,\ -0.6221,\ 0.1531)\).`,
              String.raw`Softmax: \(e^{0.7752} = 2.171\), \(e^{-0.6221} = 0.537\), \(e^{0.1531} = 1.166\); the total is 3.874, giving \((0.5605,\ 0.1386,\ 0.3009)\).`,
            ],
            answer: String.raw`After reading both inputs the network gives class 1 a 56% probability; the same \(W_h\) was reused at each step, and \(\mathbf{h}_2\) already mixes both inputs.`,
          },
          caption: 'The new hidden state blends the old one (via W_h) with the new input (via W_x), squashed through tanh, so h_t is never a fresh start, it is always last step\'s memory nudged by whatever just arrived. Because the same W_h, W_x, W_y are reused at every single step, an RNN can process sequences of any length with a fixed number of parameters, unlike a plain feed-forward network that would need a different set of weights for every position.',
        },
        {
          t: 'flow',
          title: 'Unrolled through time: predicting the next word',
          nodes: [
            { label: 'h₀ = 0', tone: 'process' },
            { label: '"the" → h₁', sub: 'predicts "cat"', tone: 'model' },
            { label: '"cat" → h₂', sub: 'predicts "sat"', tone: 'model' },
            { label: '"sat" → h₃', sub: 'predicts "on"', tone: 'model' },
            { label: '"on" → h₄', sub: 'predicts "the"', tone: 'model' },
          ],
          caption: 'The same cell, copied once per word. Each hidden state depends on the current word and the previous state.',
        },
        {
          t: 'math',
          tex: String.raw`\frac{\partial \mathbf{h}_t}{\partial \mathbf{h}_k} = \prod_{j=k+1}^{t} \operatorname{diag}\big(1 - \mathbf{h}_j^2\big)\,W_h`,
          syntax: [
            { sym: String.raw`\prod_{j=k+1}^{t}`, say: 'Read "the product from j equals k plus 1 up to t": multiply the factors for j = k+1, k+2, ... t together, like a sum but multiplying.' },
            { sym: String.raw`\operatorname{diag}(\cdot)`, say: String.raw`Read "diagonal matrix of": put the vector's entries down the diagonal of an otherwise empty matrix, so multiplying by it scales each component separately.` },
            { sym: String.raw`1 - \mathbf{h}_j^2`, say: 'Applied entry by entry: square each entry of the hidden state and take it from 1. This is the slope of tanh at that point.' },
            { sym: String.raw`\frac{\partial \mathbf{h}_t}{\partial \mathbf{h}_k}`, say: 'Read "the partial derivative of h t with respect to h k": how much the state now responds to a nudge in the state at an earlier step k.' },
          ],
          worked: {
            title: 'One hidden unit, many steps',
            steps: [
              String.raw`Take a one-unit RNN with \(W_h = 1.2\) and a hidden value \(h_j = 0.5\) at every step.`,
              String.raw`The tanh slope is \(1 - h_j^2 = 1 - 0.25 = 0.75\), so each step multiplies the gradient by \(0.75 \times 1.2 = 0.9\).`,
              String.raw`Across 50 steps: \(0.9^{50} = 0.0052\). Across 100 steps: \(0.9^{100} = 0.0000266\).`,
              String.raw`Now a stronger weight, \(W_h = 1.5\), with a small state \(h_j = 0.1\): the factor is \((1 - 0.01) \times 1.5 = 1.485\).`,
              String.raw`Across 20 steps: \(1.485^{20} \approx 2{,}720\).`,
            ],
            answer: 'A signal from 50 steps back arrives at about 0.5% strength (vanishing), and with a slightly bigger weight 20 steps of gradient grow about 2,700-fold (exploding): either way the product is unstable.',
          },
          caption: 'Backpropagation through time multiplies by W_h once per step. Over 50 or 100 steps this product usually shrinks to nothing or blows up, so plain RNNs struggle to link words far apart ("The **keys** that I left on the kitchen table last week **are**…").',
        },
      ],
    },
    {
      id: 'lstm',
      title: 'LSTM: gates that decide what to remember',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\begin{aligned}
\mathbf{f}_t &= \sigma(W_f[\mathbf{h}_{t-1}, \mathbf{x}_t] + \mathbf{b}_f) && \text{forget gate} \\
\mathbf{i}_t &= \sigma(W_i[\mathbf{h}_{t-1}, \mathbf{x}_t] + \mathbf{b}_i) && \text{input gate} \\
\tilde{\mathbf{c}}_t &= \tanh(W_c[\mathbf{h}_{t-1}, \mathbf{x}_t] + \mathbf{b}_c) && \text{candidate memory} \\
\mathbf{c}_t &= \mathbf{f}_t \odot \mathbf{c}_{t-1} + \mathbf{i}_t \odot \tilde{\mathbf{c}}_t && \text{update the cell} \\
\mathbf{o}_t &= \sigma(W_o[\mathbf{h}_{t-1}, \mathbf{x}_t] + \mathbf{b}_o) && \text{output gate} \\
\mathbf{h}_t &= \mathbf{o}_t \odot \tanh(\mathbf{c}_t) && \text{new hidden state}
\end{aligned}`,
          where: [
            { sym: '\\mathbf{c}_t', def: 'The cell state: a separate long-term memory, distinct from the hidden state h_t' },
            { sym: '[\\mathbf{h}_{t-1}, \\mathbf{x}_t]', def: 'The previous hidden state and current input, stacked together' },
            { sym: '\\odot', def: 'Element-wise multiplication, used to "gate" (scale down) a vector' },
          ],
          syntax: [
            { sym: String.raw`[\mathbf{h}_{t-1}, \mathbf{x}_t]`, say: String.raw`Square brackets with a comma mean concatenation: glue the two vectors end to end into one longer vector before multiplying by the gate's weights.` },
            { sym: String.raw`\sigma`, say: 'The sigmoid, giving a number between 0 and 1 for each entry: it acts as a dial from fully closed to fully open.' },
            { sym: String.raw`\tilde{\mathbf{c}}_t`, say: 'The tilde marks a proposed value, a candidate memory that the input gate decides how much of to write.' },
            { sym: String.raw`W_f,\ W_i,\ W_c,\ W_o`, say: 'The letter in the subscript names which gate owns the weights (forget, input, candidate, output); each gate has its own.' },
          ],
          worked: {
            title: 'One LSTM step with a single cell',
            steps: [
              String.raw`Given: \(h_{t-1} = 0.5\), \(x_t = 1\), \(c_{t-1} = 2\). For the forget gate take \(W_f = (0.5, 1)\), \(b_f = -0.5\): the pre-activation is \(0.5(0.5) + 1(1) - 0.5 = 0.75\). The other three come out as 0 (input), 0.5 (candidate) and 1.25 (output).`,
              String.raw`Forget gate: \(f_t = \sigma(0.75) = 0.6792\). Input gate: \(i_t = \sigma(0) = 0.5\).`,
              String.raw`Candidate memory: \(\tilde{c}_t = \tanh(0.5) = 0.4621\).`,
              String.raw`Update the cell: \(c_t = 0.6792 \times 2 + 0.5 \times 0.4621 = 1.3584 + 0.2311 = 1.5894\).`,
              String.raw`Output gate: \(o_t = \sigma(1.25) = 0.7773\), and \(\tanh(1.5894) = 0.9201\).`,
              String.raw`New hidden state: \(h_t = 0.7773 \times 0.9201 = 0.7152\).`,
            ],
            answer: String.raw`The cell kept 68% of its old memory of 2 (1.358) and added 0.231 of new information, giving \(c_t = 1.589\) and a hidden state of 0.715: the old value survived by simple addition, not repeated squashing.`,
          },
          caption: 'Each gate is a sigmoid between 0 (block) and 1 (pass), so f_t, i_t and o_t are not single numbers but whole vectors of per-feature dials. The cell state c is updated by addition rather than repeated multiplication (c_t = forget-gated old memory + input-gated new memory), so when the forget gate is near 1, information and gradients flow through many steps almost unchanged, exactly the additive highway that plain RNNs lack and that fixes the vanishing-gradient problem above.',
        },
        {
          t: 'cards',
          cols: 3,
          items: [
            { title: 'Forget gate', body: 'What to erase: e.g. a new sentence subject replaces the old one.' },
            { title: 'Input gate', body: 'What new information is worth storing.' },
            { title: 'Output gate', body: 'What part of the memory to reveal now.' },
          ],
        },
        {
          t: 'table',
          head: ['Model', 'Strengths', 'Weaknesses'],
          rows: [
            ['Simple RNN', 'Small, simple', 'Forgets after a few steps'],
            ['LSTM (1997)', 'Long memory; robust', 'Sequential: hard to parallelise; slow to train'],
            ['GRU (2014)', 'Fewer gates than LSTM, similar results', 'Same sequential limit'],
            ['Transformer (2017)', 'Sees all positions at once; trains in parallel on GPUs', 'Cost grows with the square of sequence length'],
          ],
        },
        {
          t: 'code',
          code: String.raw`import torch.nn as nn

class CharModel(nn.Module):
    def __init__(self, vocab, emb=64, hidden=256):
        super().__init__()
        self.embed = nn.Embedding(vocab, emb)
        self.lstm = nn.LSTM(emb, hidden, num_layers=2, batch_first=True)
        self.head = nn.Linear(hidden, vocab)

    def forward(self, tokens):            # tokens: (batch, time)
        out, _ = self.lstm(self.embed(tokens))
        return self.head(out)             # next-token scores at every step`,
        },
        { t: 'callout', tone: 'fact', title: 'From a thesis to your phone', text: 'Sepp Hochreiter analysed the vanishing gradient problem in his 1991 diploma thesis, and with Jürgen Schmidhuber published the LSTM in 1997. Two decades later LSTMs ran speech recognition on billions of phones and Google’s 2016 neural machine translation system.' },
      ],
    },
  ],
  sources: ['Hochreiter, S., & Schmidhuber, J. (1997). Long short-term memory. *Neural Computation*, 9(8), 1735–1780.', 'Cho, K., et al. (2014). Learning phrase representations using RNN encoder–decoder for statistical machine translation. *EMNLP*.', 'Olah, C. (2015). Understanding LSTM networks. *colah.github.io*.', 'Wu, Y., et al. (2016). Google’s neural machine translation system. *arXiv:1609.08144*.'],
  related: ['ai/neural/transformers', 'ai/neural/training', 'ai/neural/embeddings'],
}

export default guide
