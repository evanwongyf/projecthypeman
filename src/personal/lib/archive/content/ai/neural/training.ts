import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Knowing backpropagation is one thing; getting a deep network to train well is another. Gradients can vanish or explode, networks overfit, and a bad learning rate wastes days of computing. A handful of techniques, most invented in the 2010s, turned deep learning from fragile to routine.',
  nutshell: [
    '**Initialise** weights with the right scale (Xavier/Glorot, He) so signals neither die nor blow up.',
    '**ReLU**, **residual connections** and **normalisation** keep gradients healthy in deep networks.',
    '**Dropout**, **weight decay**, **data augmentation** and **early stopping** fight overfitting.',
    'Watch the training and validation **loss curves**; they tell you what is going wrong.',
  ],
  sections: [
    {
      id: 'playground',
      title: 'Playground',
      blocks: [
        { t: 'p', text: 'Try: the spiral with no hidden layers (it cannot work), then 16-16; ReLU versus tanh; a learning rate of 0.1 versus 0.005. Watch the loss curve and the neurons’ pictures.' },
        { t: 'ai-viz', viz: 'playground' },
      ],
    },
    {
      id: 'gradients',
      title: 'Vanishing and exploding gradients',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\frac{\partial L}{\partial \mathbf{a}^{[1]}} = \frac{\partial L}{\partial \mathbf{a}^{[L]}}\prod_{\ell=2}^{L}\frac{\partial \mathbf{a}^{[\ell]}}{\partial \mathbf{a}^{[\ell-1]}}`,
          syntax: [
            { sym: String.raw`\frac{\partial L}{\partial \mathbf{a}^{[1]}}`, say: 'Read "the partial derivative of L with respect to the layer-1 activations": how the loss responds to a nudge at the very first layer.' },
            { sym: String.raw`\prod_{\ell=2}^{L}`, say: 'Read "the product from ell equals 2 to L": multiply one factor per layer, from layer 2 up to the last, together.' },
            { sym: String.raw`\frac{\partial \mathbf{a}^{[\ell]}}{\partial \mathbf{a}^{[\ell-1]}}`, say: String.raw`One layer's factor: how much its output moves when the previous layer's output is nudged.` },
          ],
          worked: {
            title: 'Twenty layers of the same factor',
            steps: [
              String.raw`Suppose the loss slope at the output is \(\partial L/\partial \mathbf{a}^{[L]} = 1\) and \(L = 21\), so the product has 20 factors.`,
              String.raw`If every factor is 0.8: \(0.8^{20} = 0.0115\).`,
              String.raw`If every factor is 1.2: \(1.2^{20} = 38.34\).`,
              String.raw`Compare with a sigmoid network, whose factor is at most 0.25 per layer: \(0.25^{20} \approx 9 \times 10^{-13}\).`,
            ],
            answer: 'A factor only 20% below 1 leaves the first layer with 1.2% of the signal, while 20% above 1 inflates it 38-fold: the product punishes any factor that is not very close to 1.',
          },
          caption: 'The gradient reaching early layers is a long product. If the factors are mostly below 1, it shrinks exponentially (vanishes); above 1, it grows exponentially (explodes).',
        },
        {
          t: 'example',
          title: 'Why sigmoid networks stalled',
          lines: [
            { label: 'Fact', text: 'the sigmoid’s slope is at most 0.25 (at z = 0)' },
            { label: '10 layers', text: '\\(0.25^{10} \\approx 9.5 \\times 10^{-7}\\): the first layer gets about a millionth of the signal' },
            { label: 'ReLU', text: 'slope exactly 1 for positive inputs, so the product does not shrink by itself' },
          ],
        },
        {
          t: 'math',
          tex: String.raw`\text{Xavier/Glorot: } \operatorname{Var}(w) = \frac{2}{n_{\text{in}} + n_{\text{out}}} \qquad \text{He (for ReLU): } \operatorname{Var}(w) = \frac{2}{n_{\text{in}}}`,
          syntax: [
            { sym: String.raw`\operatorname{Var}(w)`, say: 'Read "the variance of w": how spread out the initial weights are. Taking the square root gives the standard deviation, the usual way to draw them.' },
            { sym: String.raw`\frac{2}{n_{\text{in}} + n_{\text{out}}}`, say: 'Read "two over n in plus n out": wide layers get smaller random weights, so sums over many inputs do not blow up.' },
          ],
          worked: {
            title: 'Initialising a 256 → 128 layer',
            steps: [
              String.raw`Given: \(n_{\text{in}} = 256\), \(n_{\text{out}} = 128\).`,
              String.raw`Xavier: \(\operatorname{Var}(w) = 2/(256 + 128) = 2/384 = 0.00521\), so the standard deviation is \(\sqrt{0.00521} = 0.0722\).`,
              String.raw`He: \(\operatorname{Var}(w) = 2/256 = 0.00781\), so the standard deviation is \(\sqrt{0.00781} = 0.0884\).`,
              String.raw`Check He: with inputs of variance 1, each output sums 256 products, so \(\operatorname{Var}(z) = 256 \times 0.00781 \times 1 = 2\).`,
              String.raw`A ReLU zeroes the negative half, which halves the mean square: \(2 / 2 = 1\) again.`,
            ],
            answer: 'Draw each weight from a bell curve with mean 0 and standard deviation about 0.088 (He) for a ReLU layer: the signal then keeps a variance of about 1 as it moves to the next layer.',
          },
          caption: 'Chosen so each layer’s outputs have about the same variance as its inputs. ReLU zeroes half its inputs, hence the factor 2.',
        },
        {
          t: 'math',
          tex: String.raw`\mathbf{y} = \mathbf{x} + F(\mathbf{x}) \quad\Rightarrow\quad \frac{\partial \mathbf{y}}{\partial \mathbf{x}} = I + \frac{\partial F}{\partial \mathbf{x}}`,
          syntax: [
            { sym: String.raw`\Rightarrow`, say: 'Read "which implies": the equation on the right follows from the one on the left.' },
            { sym: 'I', say: 'The identity matrix: ones down the diagonal, zeros elsewhere. Multiplying by it changes nothing.' },
            { sym: String.raw`\frac{\partial \mathbf{y}}{\partial \mathbf{x}}`, say: 'The Jacobian: a grid giving the slope of every output with respect to every input. For a single number it is just an ordinary derivative.' },
          ],
          worked: {
            title: 'Ten blocks with and without a skip',
            steps: [
              String.raw`Take a block whose correction is \(F(x) = 0.1x\), so its slope is \(\partial F/\partial x = 0.1\). At \(x = 3\): \(F(3) = 0.3\).`,
              String.raw`With the skip: \(y = x + F(x) = 3 + 0.3 = 3.3\), and the slope is \(1 + 0.1 = 1.1\).`,
              String.raw`Without the skip: \(y = F(x) = 0.3\), and the slope is just \(0.1\).`,
              String.raw`Stack ten blocks. Without skips the gradient is multiplied ten times: \(0.1^{10} = 10^{-10}\).`,
              String.raw`With skips: \(1.1^{10} = 2.59\).`,
            ],
            answer: String.raw`Without skips the gradient reaching the first block is a ten-billionth of its original size; with skips it survives at about 2.6 times, because the \(I\) in each block's slope keeps the path open.`,
          },
          caption: 'Residual (skip) connections from ResNet: each block adds a correction to its input. The identity term gives gradients a direct highway backwards, which is why networks with 100+ layers (and every transformer) train.',
        },
      ],
    },
    {
      id: 'regularise',
      title: 'Normalisation and regularisation',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\hat{x}_i = \frac{x_i - \mu_B}{\sqrt{\sigma_B^2 + \epsilon}} \qquad y_i = \gamma\,\hat{x}_i + \beta`,
          where: [
            { sym: '\\mu_B, \\sigma_B^2', def: 'The mean and variance of this feature, measured over the current mini-batch' },
            { sym: '\\epsilon', def: 'A tiny constant that stops division by zero if σ_B² is near 0' },
            { sym: '\\gamma, \\beta', def: 'Learned scale and shift, letting the network undo the normalisation if that works better' },
          ],
          syntax: [
            { sym: String.raw`\hat{x}_i`, say: 'Read "x hat i": the hat marks a normalised value, and the subscript i picks the i-th example in the mini-batch.' },
            { sym: String.raw`\sqrt{\sigma_B^2 + \epsilon}`, say: 'The standard deviation of the batch, with the tiny epsilon added first so it can never be exactly zero.' },
            { sym: String.raw`\gamma\,\hat{x}_i + \beta`, say: String.raw`Like \(y = mx + c\): stretch by gamma, then slide by beta. These two are learned, so the network can choose its own scale and offset.` },
          ],
          worked: {
            title: 'One feature over a batch of four',
            steps: [
              String.raw`Given: a feature takes the values \(2, 4, 6, 8\) in a mini-batch; \(\epsilon = 10^{-5}\), \(\gamma = 2\), \(\beta = 1\).`,
              String.raw`Mean: \(\mu_B = (2 + 4 + 6 + 8)/4 = 5\).`,
              String.raw`Variance: \(\sigma_B^2 = (9 + 1 + 1 + 9)/4 = 5\), so \(\sqrt{5 + 0.00001} = 2.2361\).`,
              String.raw`Standardise: \(\hat{x} = (-3, -1, 1, 3)/2.2361 = (-1.3416,\ -0.4472,\ 0.4472,\ 1.3416)\).`,
              String.raw`Scale and shift: \(y = 2\hat{x} + 1 = (-1.6833,\ 0.1056,\ 1.8944,\ 3.6833)\).`,
            ],
            answer: String.raw`The raw values (mean 5, spread 2.2) are first forced to mean 0 and variance 1, then re-stretched to mean 1 and standard deviation 2 by the learned \(\gamma\) and \(\beta\).`,
          },
          caption: 'Batch normalisation (Ioffe and Szegedy, 2015): standardise each feature over the mini-batch, then let the network rescale with learned γ and β. Doing both matters: the standardising step keeps every layer\'s inputs on a predictable scale regardless of what earlier layers are doing, while γ and β give the network back the freedom to use a different scale if that genuinely helps, rather than being stuck at mean 0, variance 1 forever. It allows higher learning rates. Transformers use layer normalisation, which standardises across features within each example instead.',
        },
        {
          t: 'math',
          tex: String.raw`\text{Dropout (training): } \tilde{\mathbf{h}} = \frac{\mathbf{m} \odot \mathbf{h}}{1 - p}, \quad m_i \sim \text{Bernoulli}(1 - p)`,
          syntax: [
            { sym: String.raw`\tilde{\mathbf{h}}`, say: 'The tilde marks the modified version of h that is used only during training.' },
            { sym: String.raw`m_i \sim \text{Bernoulli}(1 - p)`, say: String.raw`Read "m i is drawn from a Bernoulli distribution with probability 1 minus p": a biased coin flip per unit that gives 1 (keep) with probability \(1 - p\) and 0 (drop) otherwise.` },
            { sym: String.raw`\mathbf{m} \odot \mathbf{h}`, say: 'Read "m times h, entry by entry": where the coin gave 0 the unit is zeroed, where it gave 1 the unit passes through.' },
          ],
          worked: {
            title: 'Dropout with p = 0.25',
            steps: [
              String.raw`Given: \(\mathbf{h} = (0.5,\ 1.2,\ -0.8,\ 2.0)\), \(p = 0.25\), and the coin flips came out \(\mathbf{m} = (1, 0, 1, 1)\).`,
              String.raw`Switch units off: \(\mathbf{m} \odot \mathbf{h} = (0.5,\ 0,\ -0.8,\ 2.0)\).`,
              String.raw`Rescale by \(1/(1 - p) = 1/0.75 = 1.3333\): \(\tilde{\mathbf{h}} = (0.6667,\ 0,\ -1.0667,\ 2.6667)\).`,
              String.raw`Why rescale: the first unit survives 75% of the time, giving 0.6667 then and 0 otherwise, so its average is \(0.75 \times 0.6667 = 0.5\), its original value.`,
            ],
            answer: 'This step the network sees one unit silenced and the others boosted by a third; averaged over many random masks every unit keeps its original expected value, so nothing needs changing at test time.',
          },
          caption: 'Each training step randomly switches off a fraction p of the units (often 0.1–0.5), so no unit can rely on specific others: like training an ensemble of thinned networks. Dividing by 1 − p keeps the expected value the same, and dropout is turned off at test time.',
        },
        {
          t: 'metric',
          name: 'the dropout rate (p)',
          shows: 'The fraction of neurons randomly switched off at each training step, a deliberate handicap that forces the network to spread what it learns across many redundant paths instead of relying on a few specific neurons memorising specific training examples. It is one of the simplest and most effective tools for fighting overfitting in neural networks.',
          eli5: 'Imagine a sports team practising with a random quarter of the players sent to the sidelines every single practice, never knowing in advance who will sit out. Over time, no single player can become the one indispensable piece everyone relies on, the whole team learns to work well together regardless of exactly who is on the field, making the team more robust when the real game (new, unseen data) throws something unexpected at them.',
          higher: 'More neurons are randomly disabled each step, stronger regularisation, pushing the network to learn more redundant, robust representations, which helps fight overfitting on the training data. Push it too high, though, and the network loses so much capacity on each step that it struggles to learn the pattern at all (underfitting), and training can become noisy and slow to converge.',
          lower: 'Fewer neurons are disabled, the network trains closer to its full, undiminished capacity, which can fit the training data more precisely but offers less protection against overfitting, especially on smaller datasets where memorisation is a real risk.',
          typical: 'Values of 0.2–0.5 are common for fully connected layers; convolutional layers often use lower dropout (0–0.2) since they already share weights across the image and overfit less easily; modern transformer architectures often use lower dropout (around 0.1) or rely more on other regularisation like weight decay and large training datasets instead.',
        },
        {
          t: 'plot',
          title: 'Learning curves and early stopping',
          x: [0, 100],
          y: [0, 1.2],
          xLabel: 'epoch',
          yLabel: 'loss',
          curves: [
            { f: (e: number) => 1.1 * Math.exp(-e / 18) + 0.05, label: 'training loss', color: '#e07b2a' },
            { f: (e: number) => 1.1 * Math.exp(-e / 18) + 0.18 + 0.00006 * Math.max(0, e - 30) ** 2, label: 'validation loss', color: '#3b6fd8' },
          ],
          vlines: [{ x: 36, label: 'stop here' }],
          caption: 'Training loss keeps falling; validation loss bottoms out and rises as the network starts to overfit. Early stopping keeps the weights from the best validation epoch.',
        },
        {
          t: 'cards',
          items: [
            { title: 'Weight decay', body: 'L2 regularisation: shrink weights a little every step. AdamW applies it correctly with Adam.' },
            { title: 'Data augmentation', body: 'Make new training examples by flipping, cropping, rotating or recolouring images, or paraphrasing text.' },
            { title: 'Label smoothing', body: 'Train towards 0.9 instead of 1.0 for the true class, discouraging over-confidence.' },
            { title: 'Gradient clipping', body: 'Cap the gradient’s size to stop occasional explosions, common in RNNs and transformers.' },
          ],
        },
      ],
    },
    {
      id: 'recipe',
      title: 'A training recipe',
      blocks: [
        {
          t: 'checklist',
          items: [
            'Start from a simple baseline (even logistic regression) to know what "good" means',
            'Check the data visually: inputs, labels, augmentations',
            'Overfit a single small batch: the loss should go to almost zero. If not, there is a bug',
            'Find a learning rate: try values a factor of 3–10 apart (e.g. 1e-2, 3e-3, 1e-3)',
            'Use Adam or AdamW to start, with a warm-up and decay schedule for big models',
            'Add regularisation only once the model can overfit',
            'Plot training and validation curves every run; save the best checkpoint',
            'Change one thing at a time, and keep notes',
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Reading loss curves', text: 'Both losses high and flat: underfitting or a bug (learning rate, data). Training low, validation high: overfitting. Loss jumping wildly or turning into NaN: learning rate too high, or exploding gradients.' },
        { t: 'callout', tone: 'fact', title: 'Dropout and a bank queue', text: 'Geoffrey Hinton said the idea for dropout came partly from his bank: the tellers kept changing, and he guessed it was because defrauding a bank needs several employees to cooperate. Randomly removing units similarly stops neurons "conspiring" to memorise the training data.' },
      ],
    },
  ],
  sources: ['Glorot, X., & Bengio, Y. (2010). Understanding the difficulty of training deep feedforward neural networks. *AISTATS*.', 'He, K., Zhang, X., Ren, S., & Sun, J. (2016). Deep residual learning for image recognition. *CVPR*.', 'Ioffe, S., & Szegedy, C. (2015). Batch normalization. *ICML*.', 'Srivastava, N., Hinton, G., Krizhevsky, A., Sutskever, I., & Salakhutdinov, R. (2014). Dropout. *JMLR*, 15, 1929–1958.', 'Karpathy, A. (2019). A recipe for training neural networks. *karpathy.github.io*.'],
  related: ['ai/neural/backprop', 'ai/foundations/bias-variance', 'ai/practice/pytorch'],
}

export default guide
