import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'AI has swung between bold promises and bitter disappointment several times. Knowing the history explains why today’s methods look the way they do, and why some researchers are cautious about hype.',
  nutshell: [
    '1950s–60s: the birth of the field, symbolic reasoning and the first neural network, the perceptron.',
    '1970s and late 1980s: two **AI winters**, when funding dried up after promises were not met.',
    '1990s–2000s: statistical machine learning takes over; Deep Blue beats Kasparov at chess.',
    '2012 onwards: **deep learning** wins on images, then speech, games and language; 2017 brings the transformer, 2022 ChatGPT.',
  ],
  sections: [
    {
      id: 'timeline',
      title: 'Timeline',
      blocks: [
        {
          t: 'table',
          head: ['Year', 'Event', 'Why it mattered'],
          rows: [
            ['1943', 'McCulloch and Pitts model a neuron as a logic unit', 'The first mathematical artificial neuron'],
            ['1950', 'Turing’s "Computing Machinery and Intelligence"', 'Proposes the imitation game (Turing test)'],
            ['1956', 'Dartmouth workshop', 'AI named and founded as a field'],
            ['1958', 'Rosenblatt’s perceptron', 'A machine that learns from examples'],
            ['1966', 'ELIZA chatbot', 'People confided in a simple pattern-matching program'],
            ['1969', 'Minsky and Papert’s *Perceptrons*', 'Shows single-layer networks cannot learn XOR; neural research cools'],
            ['1974–80', 'First AI winter', 'Funding cut after slow progress (e.g. the UK’s Lighthill report, 1973)'],
            ['1980s', 'Expert systems boom', 'Rule-based systems sold to businesses'],
            ['1986', 'Backpropagation popularised (Rumelhart, Hinton, Williams)', 'Multi-layer networks become trainable'],
            ['1987–93', 'Second AI winter', 'Expert-systems market collapses'],
            ['1997', 'IBM Deep Blue beats Garry Kasparov', 'Chess falls to search plus hand-tuned evaluation'],
            ['1998', 'LeNet-5 reads handwritten digits (LeCun)', 'Convolutional networks work in practice'],
            ['2012', 'AlexNet wins ImageNet by a wide margin', 'The deep-learning era begins, powered by GPUs and big data'],
            ['2016', 'AlphaGo beats Lee Sedol at Go', 'Deep learning plus reinforcement learning and search'],
            ['2017', '"Attention Is All You Need": the transformer', 'The architecture behind modern language models'],
            ['2020', 'GPT-3 (175 billion parameters); AlphaFold 2 the same year', 'Scale brings few-shot abilities; protein structures predicted'],
            ['2022', 'ChatGPT; Stable Diffusion released openly', 'Generative AI reaches the public'],
          ],
        },
      ],
    },
    {
      id: 'why-now',
      title: 'Why deep learning took off in the 2010s',
      blocks: [
        {
          t: 'cards',
          cols: 3,
          items: [
            { title: 'Data', body: 'The internet produced huge labelled datasets, like ImageNet’s 14 million images.' },
            { title: 'Compute', body: 'Graphics cards (GPUs), built for games, turned out to be ideal for the matrix multiplications neural networks need.' },
            { title: 'Algorithms', body: 'ReLU activations, better initialisation, dropout and later batch norm and residual connections made deep networks trainable.' },
          ],
        },
        { t: 'quote', text: 'The biggest lesson that can be read from 70 years of AI research is that general methods that leverage computation are ultimately the most effective, and by a large margin.', by: 'Rich Sutton, "The Bitter Lesson" (2019)' },
        { t: 'callout', tone: 'fact', title: 'The 2018 Turing Award', text: 'Geoffrey Hinton, Yoshua Bengio and Yann LeCun shared the 2018 Turing Award for deep learning, after decades of working on neural networks when most of the field had given up on them. Hinton later shared the 2024 Nobel Prize in Physics with John Hopfield for foundational work on neural networks.' },
      ],
    },
  ],
  sources: ['Nilsson, N. J. (2010). *The Quest for Artificial Intelligence*. Cambridge University Press.', 'Krizhevsky, A., Sutskever, I., & Hinton, G. E. (2012). ImageNet classification with deep convolutional neural networks. *NeurIPS*.', 'Vaswani, A., et al. (2017). Attention is all you need. *NeurIPS*.', 'Sutton, R. (2019). The bitter lesson. *incompleteideas.net*.'],
  related: ['ai/foundations/what-is-ai', 'ai/neural/perceptron', 'ai/neural/transformers'],
}

export default guide
