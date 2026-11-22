import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Computers need numbers, but words, products and pictures are not numbers. An **embedding** maps each item to a list of numbers (a vector) learned so that similar items get similar vectors. Embeddings are the first layer of every language model and the engine of semantic search and recommendations.',
  nutshell: [
    '**One-hot** vectors are huge and treat every word as equally different; **dense embeddings** are small and capture meaning.',
    'Learned from context: "you shall know a word by the company it keeps".',
    'Similarity is measured by **cosine similarity**; relationships become directions (king − man + woman ≈ queen).',
    'Sentence and image embeddings power search, recommendations and retrieval for chatbots.',
  ],
  sections: [
    {
      id: 'lab',
      title: 'Explore a word map',
      blocks: [{ t: 'ai-viz', viz: 'embedding' }],
    },
    {
      id: 'onehot',
      title: 'From one-hot to dense',
      blocks: [
        {
          t: 'table',
          head: ['Word', 'One-hot (vocabulary of 50,000)', 'Dense embedding (e.g. 4 of 300 dims)'],
          rows: [
            ['cat', '[0, 0, …, 1, …, 0]', '[0.21, −0.43, 0.88, 0.05, …]'],
            ['kitten', '[0, …, 1, …, 0, 0]', '[0.25, −0.40, 0.81, 0.11, …]'],
            ['car', '[1, 0, …, 0, 0]', '[−0.62, 0.19, −0.07, 0.74, …]'],
          ],
          caption: 'Every pair of one-hot vectors is equally far apart. Dense vectors place cat near kitten and far from car.',
        },
        {
          t: 'math',
          tex: String.raw`\mathbf{e}_{\text{word}} = E^\top\mathbf{o}_{\text{word}} \qquad E \in \mathbb{R}^{|V|\times d}`,
          where: [
            { sym: '\\mathbf{o}_{\\text{word}}', def: 'The word\'s one-hot vector: all zeros except a single 1' },
            { sym: '|V|, d', def: 'The vocabulary size, and the (much smaller) embedding dimension' },
          ],
          syntax: [
            { sym: String.raw`E^\top`, say: String.raw`Read "E transpose": flip the matrix so rows become columns. Here it lets each word's one-hot vector pick out one row of E.` },
            { sym: String.raw`E \in \mathbb{R}^{|V|\times d}`, say: String.raw`Read "E is in R, V by d": E is a table of real numbers with \(|V|\) rows and \(d\) columns, one row per word.` },
            { sym: '|V|', say: 'Bars around a set mean its size: the number of different words in the vocabulary, not an absolute value.' },
          ],
          worked: {
            title: 'A four-word vocabulary',
            steps: [
              String.raw`Given: vocabulary (the, cat, sat, mat), so \(|V| = 4\), and \(d = 3\). The rows of \(E\) are the = \((0.1,\ 0.3,\ -0.2)\), cat = \((0.9,\ -0.4,\ 0.5)\), sat = \((0.2,\ 0.7,\ 0.1)\), mat = \((-0.6,\ 0.0,\ 0.8)\).`,
              String.raw`One-hot for "cat" (second word): \(\mathbf{o} = (0, 1, 0, 0)\).`,
              String.raw`First output entry: \(0 \times 0.1 + 1 \times 0.9 + 0 \times 0.2 + 0 \times (-0.6) = 0.9\).`,
              String.raw`Second entry: \(0 \times 0.3 + 1 \times (-0.4) + 0 + 0 = -0.4\). Third entry: \(0 \times (-0.2) + 0.5 + 0 + 0 = 0.5\).`,
              String.raw`So \(\mathbf{e}_{\text{cat}} = E^\top\mathbf{o} = (0.9,\ -0.4,\ 0.5)\), exactly row 2 of \(E\).`,
              String.raw`At realistic size, \(|V| = 50{,}000\) and \(d = 300\) make \(E\) a table of \(50{,}000 \times 300 = 15{,}000{,}000\) learned numbers.`,
            ],
            answer: String.raw`Multiplying by a one-hot vector just copies out one row: the 3 numbers (0.9, -0.4, 0.5) are the model's whole description of "cat" until training changes them.`,
          },
          caption: 'An embedding layer is a lookup table: row i of the matrix E is the vector for word i. Multiplying by a one-hot vector just selects that row, no real arithmetic happens, it is pure indexing, which is why embedding lookups are cheap even with a huge vocabulary. E is learned like any other weights, which is the whole point: the table starts random and training reshapes it until nearby meanings end up as nearby rows.',
        },
        {
          t: 'math',
          tex: String.raw`\cos(\mathbf{a}, \mathbf{b}) = \frac{\mathbf{a}\cdot\mathbf{b}}{\lVert\mathbf{a}\rVert\,\lVert\mathbf{b}\rVert} \in [-1, 1]`,
          where: [{ sym: '\\mathbf{a}, \\mathbf{b}', def: 'Two embedding vectors being compared' }],
          syntax: [
            { sym: String.raw`\mathbf{a}\cdot\mathbf{b}`, say: 'Read "a dot b": multiply matching entries of the two vectors and add them up, giving one number.' },
            { sym: String.raw`\lVert\mathbf{a}\rVert`, say: 'Read "the norm of a": its length, the square root of the sum of its squared entries.' },
            { sym: String.raw`\in [-1, 1]`, say: 'Read "is in the interval from minus one to one": the answer can never fall outside that range.' },
          ],
          worked: {
            title: 'Cat, kitten and car (first 4 dimensions)',
            steps: [
              String.raw`Given: cat \(= (0.21, -0.43, 0.88, 0.05)\), kitten \(= (0.25, -0.40, 0.81, 0.11)\), car \(= (-0.62, 0.19, -0.07, 0.74)\), the vectors from the table above.`,
              String.raw`Cat · kitten \(= 0.0525 + 0.1720 + 0.7128 + 0.0055 = 0.9428\).`,
              String.raw`Lengths: \(\lVert\text{cat}\rVert = \sqrt{1.0059} = 1.0029\) and \(\lVert\text{kitten}\rVert = \sqrt{0.8907} = 0.9438\).`,
              String.raw`\(\cos(\text{cat}, \text{kitten}) = 0.9428 / (1.0029 \times 0.9438) = 0.996\).`,
              String.raw`Cat · car \(= -0.1302 - 0.0817 - 0.0616 + 0.0370 = -0.2365\), and \(\lVert\text{car}\rVert = \sqrt{0.973} = 0.9864\).`,
              String.raw`\(\cos(\text{cat}, \text{car}) = -0.2365 / (1.0029 \times 0.9864) = -0.239\).`,
            ],
            answer: 'Cat and kitten score 0.996 (almost the same direction) while cat and car score -0.239 (slightly opposed), so the geometry matches the meaning.',
          },
          caption: 'Cosine similarity compares directions and ignores length: 1 means pointing exactly the same way (as similar as two distinct vectors can be), 0 means unrelated (at right angles), and −1 means pointing in opposite directions, which rarely happens in practice for word or sentence embeddings, most pairs land somewhere in the 0 to 1 range, with closeness to 1 marking real semantic similarity.',
        },
      ],
    },
    {
      id: 'word2vec',
      title: 'How word2vec learns',
      blocks: [
        {
          t: 'flow',
          nodes: [
            { label: 'Slide a window over text', sub: '"…the fluffy *cat* sat on…"', tone: 'data' },
            { label: 'Centre word → context words', sub: 'cat → fluffy, sat, the, on', tone: 'process' },
            { label: 'Predict context from centre', sub: 'raise P(real neighbours)', tone: 'model' },
            { label: 'Also push away random words', sub: 'negative sampling', tone: 'model' },
            { label: 'Vectors of words used alike end up close', tone: 'output' },
          ],
        },
        {
          t: 'math',
          tex: String.raw`\max\ \log\sigma(\mathbf{u}_{c}\cdot\mathbf{v}_{w}) + \sum_{k=1}^{K}\log\sigma(-\mathbf{u}_{n_k}\cdot\mathbf{v}_{w})`,
          where: [
            { sym: '\\mathbf{v}_w', def: 'The embedding of the centre word' },
            { sym: '\\mathbf{u}_c', def: 'The context vector of a real neighbour' },
            { sym: '\\mathbf{u}_{n_k}', def: 'Context vectors of K randomly sampled "negative" words' },
          ],
          syntax: [
            { sym: String.raw`\max`, say: 'Read "maximise": training nudges the vectors to make the whole expression as large as possible.' },
            { sym: String.raw`\log\sigma(\cdot)`, say: 'Read "log of sigma of": squash the dot product into a probability between 0 and 1 with the sigmoid, then take the natural log. The result is never positive, and the closer to 0 it is, the more confident the model.' },
            { sym: String.raw`\sum_{k=1}^{K}`, say: 'Read "the sum from k equals 1 to K": repeat for each of the K negative words in turn and add the results.' },
            { sym: String.raw`-\mathbf{u}\cdot\mathbf{v}`, say: String.raw`The minus sign flips the sense: \(\sigma(-s) = 1 - \sigma(s)\) is the probability that the pair are not neighbours, so a negative dot product is rewarded.` },
            { sym: String.raw`\mathbf{u}_{n_k}`, say: 'A subscript on a subscript: "u sub n sub k", the vector of the k-th negative word.' },
          ],
          worked: {
            title: 'One training pair with K = 2 negatives',
            steps: [
              String.raw`Given: centre word \(\mathbf{v}_w = (1, 0.5)\), real neighbour \(\mathbf{u}_c = (0.8, 0.6)\), negatives \(\mathbf{u}_{n_1} = (-1, 0.2)\) and \(\mathbf{u}_{n_2} = (0.6, 0.4)\).`,
              String.raw`Real pair: \(\mathbf{u}_c\cdot\mathbf{v}_w = 0.8 + 0.3 = 1.1\), \(\sigma(1.1) = 0.7503\), \(\log 0.7503 = -0.2873\).`,
              String.raw`Negative 1: \(\mathbf{u}_{n_1}\cdot\mathbf{v}_w = -1 + 0.1 = -0.9\), so \(\sigma(0.9) = 0.7109\) and \(\log 0.7109 = -0.3412\).`,
              String.raw`Negative 2: \(\mathbf{u}_{n_2}\cdot\mathbf{v}_w = 0.6 + 0.2 = 0.8\), so \(\sigma(-0.8) = 0.3100\) and \(\log 0.3100 = -1.1711\).`,
              String.raw`Add the terms: \(-0.2873 - 0.3412 - 1.1711 = -1.7996\).`,
            ],
            answer: 'The objective is about -1.80 (0 would be perfect). Negative 2 drags it down because that random word points the same way as the centre word (dot product 0.8), so a gradient step rotates it away, raising the objective.',
          },
          caption: 'Skip-gram with negative sampling (Mikolov et al., 2013): make the dot product large for words that really appear together and small for random pairs.',
        },
        { t: 'quote', text: 'You shall know a word by the company it keeps.', by: 'J. R. Firth, linguist (1957)' },
      ],
    },
    {
      id: 'uses',
      title: 'Embeddings everywhere',
      blocks: [
        {
          t: 'flow',
          title: 'Semantic search',
          nodes: [
            { label: 'Embed every document once', tone: 'data' },
            { label: 'Store vectors in an index', sub: 'a vector database', tone: 'process' },
            { label: 'Embed the question', tone: 'model' },
            { label: 'Find nearest vectors', sub: 'cosine similarity', tone: 'process' },
            { label: 'Return the best matches', tone: 'output' },
          ],
          caption: 'Finds documents by meaning, not exact words: "how do I fix a flat tyre" matches "repairing a punctured bike wheel".',
        },
        {
          t: 'code',
          code: String.raw`from sentence_transformers import SentenceTransformer, util

model = SentenceTransformer("all-MiniLM-L6-v2")
docs = ["Repairing a punctured bike wheel",
        "Best pasta recipes",
        "How tides are caused by the moon"]
doc_vecs = model.encode(docs)
query = model.encode("how do I fix a flat tyre")
print(util.cos_sim(query, doc_vecs))   # highest for the bike document`,
        },
        {
          t: 'cards',
          cols: 3,
          items: [
            { title: 'Recommendations', body: 'Users and products embedded in one space; recommend items near a user.' },
            { title: 'Retrieval for chatbots (RAG)', body: 'Find relevant passages to give a language model before it answers.' },
            { title: 'Images and text together', body: 'CLIP embeds pictures and captions in one space, enabling search and text-to-image guidance.' },
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Embeddings learn our biases', text: 'Bolukbasi and colleagues (2016) found that word2vec vectors trained on news text completed "man is to computer programmer as woman is to…" with "homemaker". Embeddings faithfully absorb stereotypes in their training text, which then flow into the systems built on them.' },
      ],
    },
  ],
  sources: ['Mikolov, T., Sutskever, I., Chen, K., Corrado, G., & Dean, J. (2013). Distributed representations of words and phrases and their compositionality. *NeurIPS*.', 'Firth, J. R. (1957). A synopsis of linguistic theory 1930–1955. *Studies in Linguistic Analysis*.', 'Bolukbasi, T., et al. (2016). Man is to computer programmer as woman is to homemaker? *NeurIPS*.', 'Radford, A., et al. (2021). Learning transferable visual models from natural language supervision (CLIP). *ICML*.'],
  related: ['ai/neural/transformers', 'ai/generative/prompting', 'ai/algorithms/knn'],
}

export default guide
