import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'An image of 1,000 × 1,000 pixels has three million numbers. Connecting every pixel to every neuron would need billions of weights and ignore the obvious fact that nearby pixels belong together. **Convolutional neural networks** instead slide small learned filters across the image, reusing the same weights everywhere, and build up from edges to textures to objects.',
  nutshell: [
    'A **convolution** slides a small kernel over the input, computing a weighted sum at each position.',
    '**Weight sharing**: the same filter is used at every location, so a cat is recognised wherever it appears.',
    '**Pooling** shrinks feature maps; stacking layers grows the **receptive field**.',
    'Famous architectures: LeNet, AlexNet, VGG, ResNet. Vision transformers now compete with them.',
  ],
  sections: [
    {
      id: 'lab',
      title: 'Convolution, animated',
      blocks: [{ t: 'ai-viz', viz: 'conv' }],
    },
    {
      id: 'maths',
      title: 'The maths of a convolutional layer',
      blocks: [
        {
          t: 'math',
          tex: String.raw`(I * K)[i, j] = \sum_{a=0}^{k-1}\sum_{b=0}^{k-1} I[i + a,\ j + b]\;K[a, b]`,
          where: [
            { sym: 'I, K', def: 'The input image and the kernel (filter): a small k × k grid of learned weights' },
            { sym: '(I * K)[i, j]', def: 'The output value at position (i, j)' },
          ],
          syntax: [
            { sym: String.raw`\sum_{a=0}^{k-1}\sum_{b=0}^{k-1}`, say: 'Read "the sum for a from 0 to k minus 1, and for b from 0 to k minus 1": do the thing after it for every row a and column b of the kernel, and add all the results.' },
            { sym: String.raw`I[i + a,\ j + b]`, say: 'Square brackets pick one cell: "I at row i plus a, column j plus b". The offsets a and b walk across the patch that starts at (i, j).' },
            { sym: '(I * K)', say: 'The star here is not ordinary multiplication: read "I convolved with K" (strictly, cross-correlated with K).' },
          ],
          worked: {
            title: 'A 4 × 4 image and a 2 × 2 kernel',
            steps: [
              String.raw`Given: the image \(I\) with rows \((1, 2, 0, 1)\), \((3, 1, 2, 0)\), \((0, 1, 3, 1)\), \((2, 0, 1, 2)\), and the kernel \(K\) with rows \((1, -1)\) and \((1, -1)\), which computes "left column minus right column".`,
              String.raw`Position \((0, 0)\): the patch is rows \((1, 2)\) and \((3, 1)\). Multiply matching cells and add: \(1\cdot1 + 2\cdot(-1) + 3\cdot1 + 1\cdot(-1) = 1 - 2 + 3 - 1 = 1\).`,
              String.raw`Position \((0, 1)\): the patch is \((2, 0)\) and \((1, 2)\): \(2 - 0 + 1 - 2 = 1\).`,
              String.raw`Position \((1, 2)\): the patch is \((2, 0)\) and \((3, 1)\): \(2 - 0 + 3 - 1 = 4\).`,
              String.raw`Slide to all positions. A 2 × 2 kernel fits 4 - 2 + 1 = 3 times along each side, so the output is 3 × 3 with rows \((1, 1, 1)\), \((1, -3, 4)\), \((1, -3, 1)\).`,
            ],
            answer: String.raw`The 4 × 4 image becomes a 3 × 3 feature map, and its largest response (4) sits exactly where the left column is much brighter than the right: the kernel's "vertical edge here" signal.`,
          },
          caption: 'Read it as: overlay the kernel on a k × k patch of the image starting at (i, j), multiply each overlapping pair, and sum, one number summarising how strongly that patch matches whatever pattern the kernel has learned to detect. Sliding this same kernel across every position produces a whole feature map at once, which is exactly the weight sharing that makes CNNs so parameter-efficient. Strictly this is cross-correlation (a true convolution flips the kernel), but deep-learning libraries call it convolution.',
        },
        {
          t: 'math',
          tex: String.raw`n_{\text{out}} = \left\lfloor\frac{n_{\text{in}} + 2p - k}{s}\right\rfloor + 1`,
          where: [
            { sym: 'k', def: 'Kernel size (e.g. 3)' },
            { sym: 'p', def: 'Padding: zeros added around the edge' },
            { sym: 's', def: 'Stride: how far the kernel jumps each step' },
          ],
          syntax: [
            { sym: String.raw`\left\lfloor\cdot\right\rfloor`, say: 'Read "floor of": round down to the nearest whole number, because the kernel can only make a whole number of stops.' },
            { sym: String.raw`n_{\text{in}},\ n_{\text{out}}`, say: 'The text subscripts are labels, not indices: "n in" and "n out" are the input and output widths.' },
            { sym: '2p', say: 'Padding is added on both sides of the image, so it counts twice.' },
          ],
          worked: {
            title: 'ResNet’s first layer',
            steps: [
              String.raw`Given: \(n_{\text{in}} = 224\), kernel \(k = 7\), padding \(p = 3\), stride \(s = 2\).`,
              String.raw`Padded width: \(224 + 2 \times 3 = 230\).`,
              String.raw`Room left for the kernel to travel: \(230 - 7 = 223\).`,
              String.raw`Divide by the stride and round down: \(\lfloor 223/2 \rfloor = \lfloor 111.5 \rfloor = 111\).`,
              String.raw`Add 1 for the starting position: \(n_{\text{out}} = 111 + 1 = 112\).`,
              String.raw`Check against the caption: \(n_{\text{in}} = 32\), \(k = 3\), \(p = 1\), \(s = 1\) gives \(\lfloor 31/1 \rfloor + 1 = 32\), unchanged.`,
            ],
            answer: 'A 224-wide input becomes a 112-wide feature map: stride 2 halves each side, so the next layer has a quarter as many positions to process.',
          },
          caption: 'A 32 × 32 input with a 3 × 3 kernel, padding 1 and stride 1 stays 32 × 32; with stride 2 it becomes 16 × 16.',
        },
        {
          t: 'math',
          tex: String.raw`\text{Parameters} = (k \times k \times C_{\text{in}} + 1) \times C_{\text{out}}`,
          syntax: [
            { sym: String.raw`k \times k \times C_{\text{in}}`, say: 'Read "k by k by C in": the number of weights in one filter. It is a 3-D block, a k × k window through every input channel, not a flat square.' },
            { sym: String.raw`C_{\text{in}},\ C_{\text{out}}`, say: 'Capital C stands for channels: C in is how many feature maps come in (3 for RGB), C out is how many filters, and so how many maps go out.' },
            { sym: '+ 1', say: 'The single extra weight per filter is its bias.' },
          ],
          worked: {
            title: 'The second layer of the digit CNN below',
            steps: [
              String.raw`Given: \(k = 3\), \(C_{\text{in}} = 32\), \(C_{\text{out}} = 64\).`,
              String.raw`Weights in one filter: \(3 \times 3 \times 32 = 288\).`,
              String.raw`Add its bias: \(288 + 1 = 289\).`,
              String.raw`One filter per output channel: \(289 \times 64 = 18{,}496\) parameters.`,
              String.raw`For comparison, the first layer (1 input channel, 32 filters) has \((3 \times 3 \times 1 + 1) \times 32 = 320\).`,
              String.raw`A dense layer joining the same \(14 \times 14 \times 32 = 6{,}272\) inputs to \(14 \times 14 \times 64 = 12{,}544\) outputs would need \(6{,}272 \times 12{,}544 = 78{,}675{,}968\) weights.`,
            ],
            answer: 'The convolution needs 18,496 parameters, over 4,000 times fewer than the dense equivalent, because the same small filters are reused at every position.',
          },
          caption: 'Each filter spans all input channels (3 for RGB) and produces one output channel. 64 filters of 3 × 3 on an RGB image: (3·3·3 + 1)·64 = 1,792 parameters, whatever the image size. A dense layer from a 224 × 224 × 3 image to just 64 units would need over 9.6 million.',
        },
        {
          t: 'example',
          title: 'Max pooling 2 × 2',
          lines: [
            { label: 'Input', text: '\\(\\begin{pmatrix} 1 & 3 & 2 & 0 \\\\ 4 & 6 & 1 & 1 \\\\ 0 & 2 & 5 & 7 \\\\ 1 & 1 & 3 & 2 \\end{pmatrix}\\)' },
            { label: 'Output', text: '\\(\\begin{pmatrix} 6 & 2 \\\\ 2 & 7 \\end{pmatrix}\\): the largest value in each 2 × 2 block' },
            { label: 'Why', text: 'halves the size, keeps the strongest responses, and adds a little tolerance to small shifts' },
          ],
        },
      ],
    },
    {
      id: 'architecture',
      title: 'Architecture',
      blocks: [
        {
          t: 'flow',
          title: 'A typical image classifier',
          nodes: [
            { label: 'Image', sub: '224 × 224 × 3', tone: 'data' },
            { label: 'Conv + ReLU', sub: 'edges, colours', tone: 'model' },
            { label: 'Pool', sub: '112 × 112', tone: 'process' },
            { label: 'Conv + ReLU', sub: 'textures, corners', tone: 'model' },
            { label: 'Pool', tone: 'process' },
            { label: '… deeper conv blocks', sub: 'parts, objects', tone: 'model' },
            { label: 'Global average pool', tone: 'process' },
            { label: 'Dense + softmax', sub: '1,000 class probabilities', tone: 'output' },
          ],
        },
        {
          t: 'table',
          head: ['Network', 'Year', 'Depth', 'Key idea'],
          rows: [
            ['LeNet-5', '1998', '7 layers', 'Convolution + pooling for handwritten digits (cheque reading)'],
            ['AlexNet', '2012', '8 layers, 60M parameters', 'ReLU, dropout, trained on two GPUs; won ImageNet by a huge margin'],
            ['VGG-16', '2014', '16 layers', 'Only 3 × 3 convolutions, stacked deep'],
            ['GoogLeNet / Inception', '2014', '22 layers', 'Parallel filters of several sizes'],
            ['ResNet', '2015', 'Up to 152 layers', 'Residual (skip) connections'],
            ['Vision Transformer', '2020', '12–32 blocks', 'Treat image patches as tokens; attention instead of convolution'],
          ],
        },
        {
          t: 'code',
          title: 'A small CNN in PyTorch (for 28 × 28 greyscale digits)',
          code: String.raw`import torch.nn as nn

model = nn.Sequential(
    nn.Conv2d(1, 32, kernel_size=3, padding=1), nn.ReLU(),   # 28x28x32
    nn.MaxPool2d(2),                                          # 14x14x32
    nn.Conv2d(32, 64, kernel_size=3, padding=1), nn.ReLU(),  # 14x14x64
    nn.MaxPool2d(2),                                          # 7x7x64
    nn.Flatten(),
    nn.Linear(7 * 7 * 64, 128), nn.ReLU(),
    nn.Dropout(0.25),
    nn.Linear(128, 10),          # one score per digit
)`,
        },
        { t: 'callout', tone: 'fact', title: 'Inspired by cats', text: 'In the late 1950s and 1960s Hubel and Wiesel found neurons in cats’ visual cortex that respond to edges at particular angles, in particular places, with more complex cells building on simpler ones. Kunihiko Fukushima’s Neocognitron (1980) copied this layered design, and CNNs descend from it. Hubel and Wiesel won the 1981 Nobel Prize in Physiology or Medicine.' },
        { t: 'callout', tone: 'fact', title: 'Better than people?', text: 'ResNet won the 2015 ImageNet challenge with a 3.57% top-5 error. Andrej Karpathy, labelling images himself in 2014, estimated human top-5 error at about 5.1%. Such comparisons are narrow: people still beat models on unusual images and new situations.' },
      ],
    },
  ],
  sources: ['LeCun, Y., Bottou, L., Bengio, Y., & Haffner, P. (1998). Gradient-based learning applied to document recognition. *Proceedings of the IEEE*, 86(11), 2278–2324.', 'Krizhevsky, A., Sutskever, I., & Hinton, G. E. (2012). ImageNet classification with deep convolutional neural networks. *NeurIPS*.', 'He, K., et al. (2016). Deep residual learning for image recognition. *CVPR*.', 'Hubel, D. H., & Wiesel, T. N. (1962). Receptive fields, binocular interaction and functional architecture in the cat’s visual cortex. *Journal of Physiology*, 160, 106–154.'],
  related: ['ai/neural/training', 'ai/neural/transformers', 'ai/practice/applications'],
}

export default guide
