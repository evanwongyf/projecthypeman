import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'AI is already woven into everyday life, often invisibly: the photo search on your phone, the recommendations in your feeds, your email’s spam filter, fraud checks on your card. Here is a tour of major application areas, the techniques behind them, and some landmark results.',
  nutshell: [
    '**Vision**: recognising, detecting and segmenting objects; medical imaging; self-driving perception.',
    '**Language**: translation, search, chat, summarising; **speech**: transcription and synthesis.',
    '**Recommendations**: the models choosing what you watch, read and buy.',
    '**Science**: protein structures (AlphaFold), weather forecasting, materials and drug discovery.',
  ],
  sections: [
    {
      id: 'areas',
      title: 'Application areas',
      blocks: [
        {
          t: 'table',
          head: ['Area', 'Examples', 'Typical techniques'],
          rows: [
            ['Computer vision', 'Face unlock, photo search, quality inspection, X-ray and retinal screening', 'CNNs, vision transformers'],
            ['Natural language', 'Translation, chat assistants, search, summarising contracts', 'Transformers, embeddings'],
            ['Speech', 'Voice assistants, live captions, dubbing', 'Transformers (e.g. Whisper), neural text-to-speech'],
            ['Recommendations', 'Netflix, YouTube, Spotify, online shops', 'Embeddings, collaborative filtering, deep ranking models'],
            ['Finance', 'Fraud detection, credit scoring, algorithmic trading', 'Gradient boosting, anomaly detection'],
            ['Healthcare', 'Image screening, predicting deterioration, drug discovery', 'CNNs, boosted trees, generative chemistry'],
            ['Science', 'Protein structure, weather, fusion plasma control, new materials', 'Transformers, graph networks, RL'],
            ['Transport and robotics', 'Driver assistance, robotaxis, warehouse robots, route planning', 'Vision, sensor fusion, RL, planning'],
            ['Creative work', 'Image, music and video generation, writing help', 'Diffusion models, LLMs'],
          ],
        },
        {
          t: 'flow',
          title: 'How a recommendation system works',
          nodes: [
            { label: 'Millions of items', tone: 'data' },
            { label: 'Candidate generation', sub: 'fast: nearest embeddings to you', tone: 'process' },
            { label: 'Ranking model', sub: 'predicts P(you click/watch)', tone: 'model' },
            { label: 'Re-rank for variety and rules', tone: 'human' },
            { label: 'Your feed', tone: 'output' },
          ],
          loop: 'your clicks become new training data',
        },
        {
          t: 'math',
          tex: String.raw`\hat{r}_{ui} = \mathbf{p}_u\cdot\mathbf{q}_i + b_u + b_i + \mu`,
          syntax: [
            { sym: String.raw`\hat{r}_{ui}`, say: String.raw`Read "r hat sub u i": the hat means "predicted", and the subscripts say it is for user u and item i, not the true rating.` },
            { sym: String.raw`\mathbf{p}_u\cdot\mathbf{q}_i`, say: String.raw`Read "p u dot q i": multiply the two vectors entry by entry and add up the products. The result is one number measuring how well taste and item line up.` },
            { sym: String.raw`\mu`, say: String.raw`Read "mu": the average rating across everyone and everything, the starting guess before anything personal is added.` },
          ],
          worked: {
            steps: [
              String.raw`Give each user and item a 2-dimensional vector: user \(\mathbf{p}_u = (1.0,\ 0.5)\), item \(\mathbf{q}_i = (0.8,\ 1.2)\). The overall mean rating is \(\mu = 3.5\), this user rates generously (\(b_u = +0.3\)) and this film is slightly disliked in general (\(b_i = -0.4\)).`,
              String.raw`Dot product: \(1.0 \times 0.8 + 0.5 \times 1.2 = 0.8 + 0.6 = 1.4\).`,
              String.raw`Add the biases and mean: \(\hat{r} = 1.4 + 0.3 + (-0.4) + 3.5\).`,
            ],
            answer: String.raw`\(\hat{r}_{ui} = 4.8\) out of 5: a generous user whose tastes match the film well, despite the film's below-average reputation.`,
          },
          where: [
            { sym: '\\mathbf{p}_u, \\mathbf{q}_i', def: 'Learned embeddings for user u and item i' },
            { sym: 'b_u, b_i, \\mu', def: 'User bias, item bias and the overall average rating' },
          ],
          caption: 'Matrix factorisation, made famous by the Netflix Prize: a predicted rating is the dot product of user and item vectors plus biases. The dot product is the heart of it: if p_u and q_i point in a similar direction in this learned "taste space", the predicted rating is pulled up, exactly like the alignment reading of a dot product elsewhere on this shelf. The bias terms soak up the parts that have nothing to do with personal taste at all, some users rate everything high, some items are just broadly liked, so the dot product is left to capture only the genuine user-item match.',
        },
      ],
    },
    {
      id: 'landmarks',
      title: 'Landmark results',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'AlphaFold (2020)', body: 'Predicted protein 3D structures with accuracy rivalling experiments at the CASP14 competition; its database now covers over 200 million proteins. Demis Hassabis and John Jumper shared the 2024 Nobel Prize in Chemistry (with David Baker, for protein design).', tag: 'biology' },
            { title: 'GraphCast (2023)', body: 'A graph neural network that produces 10-day global weather forecasts in under a minute, beating a leading traditional system on most measures tested.', tag: 'weather' },
            { title: 'Whisper (2022)', body: 'An open speech-recognition model trained on 680,000 hours of audio, robust to accents and noise.', tag: 'speech' },
            { title: 'The Netflix Prize (2006–09)', body: 'A $1 million prize for beating Netflix’s recommender by 10%, won by an ensemble of hundreds of models; it popularised matrix factorisation.', tag: 'recommendations' },
          ],
        },
        { t: 'callout', tone: 'fact', title: '50 years in a few minutes', text: 'Determining one protein’s structure experimentally used to take months to years and could cost hundreds of thousands of dollars. Biologists had worked on the "protein folding problem" for about 50 years before AlphaFold 2’s result in 2020.' },
        { t: 'callout', tone: 'note', title: 'The hard last mile', text: 'Many systems that look excellent in a research paper struggle in deployment: hospital data differs from the training hospital, roads differ from the test city, and rare situations matter most. That is why evaluation in real conditions, and human oversight, remain essential.' },
      ],
    },
  ],
  sources: ['Jumper, J., et al. (2021). Highly accurate protein structure prediction with AlphaFold. *Nature*, 596, 583–589.', 'Lam, R., et al. (2023). Learning skillful medium-range global weather forecasting. *Science*, 382, 1416–1421.', 'Radford, A., et al. (2023). Robust speech recognition via large-scale weak supervision. *ICML*.', 'Koren, Y., Bell, R., & Volinsky, C. (2009). Matrix factorization techniques for recommender systems. *Computer*, 42(8), 30–37.'],
  related: ['ai/neural/cnn', 'ai/neural/embeddings', 'ai/practice/ethics'],
}

export default guide
