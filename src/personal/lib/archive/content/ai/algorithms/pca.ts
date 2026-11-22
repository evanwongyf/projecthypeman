import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Real datasets can have hundreds or thousands of features, many of them redundant. **Principal component analysis** finds new axes, ordered by how much of the data’s spread they capture, so you can keep the few that matter. It is used to compress, to visualise, to remove noise and to speed up other models.',
  nutshell: [
    'The first principal component is the direction of **greatest variance**; each next one is the greatest remaining, at right angles to the previous.',
    'They are the **eigenvectors** of the covariance matrix; the **eigenvalues** are the variances along them.',
    'Keep enough components to explain, say, 95% of the variance.',
    'Standardise features first. For visualising clusters, non-linear **t-SNE** and **UMAP** are popular.',
  ],
  sections: [
    {
      id: 'lab',
      title: 'Find the best direction',
      blocks: [{ t: 'ai-viz', viz: 'pca' }],
    },
    {
      id: 'maths',
      title: 'The maths',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\Sigma = \frac{1}{n-1}\,X_c^\top X_c \qquad \Sigma\,\mathbf{v}_j = \lambda_j\mathbf{v}_j \qquad \text{explained}_j = \frac{\lambda_j}{\sum_k\lambda_k}`,
          where: [
            { sym: 'X_c', def: 'The data with each feature’s mean subtracted (centred)' },
            { sym: '\\Sigma', def: 'The covariance matrix: variances on the diagonal, covariances off it' },
            { sym: '\\mathbf{v}_j, \\lambda_j', def: 'Eigenvectors (the new axes) and eigenvalues (variance along each)' },
            { sym: '\\text{explained}_j', def: 'The share of the data\'s total variance captured by axis j' },
          ],
          syntax: [
            { sym: String.raw`X_c^\top X_c`, say: String.raw`Read "X c transpose times X c": flip the centred data matrix and multiply, which adds up products of feature deviations over all examples.` },
            { sym: String.raw`\frac{1}{n-1}`, say: String.raw`Divide by \(n - 1\), not \(n\), the usual correction for a sample.` },
            { sym: String.raw`\Sigma`, say: String.raw`Here a capital sigma is the covariance matrix, not a sum (a sum has limits and a term after it).` },
            { sym: String.raw`\Sigma\,\mathbf{v}_j = \lambda_j\mathbf{v}_j`, say: String.raw`The eigenvector equation: multiplying \(\mathbf{v}_j\) by \(\Sigma\) merely stretches it by \(\lambda_j\) without turning it. Read "sigma v equals lambda v".` },
          ],
          worked: {
            title: String.raw`PCA of four points`,
            steps: [
              String.raw`Points \((1, 1), (2, 3), (3, 2), (4, 4)\) have mean \((2.5, 2.5)\). Centred: \((-1.5, -1.5), (-0.5, 0.5), (0.5, -0.5), (1.5, 1.5)\).`,
              String.raw`Variance of each feature: \((2.25 + 0.25 + 0.25 + 2.25)/3 = 5/3\). Covariance: \((2.25 - 0.25 - 0.25 + 2.25)/3 = 4/3\).`,
              String.raw`So \(\Sigma = \begin{pmatrix} 5/3 & 4/3 \\ 4/3 & 5/3 \end{pmatrix}\).`,
              String.raw`Test \(\mathbf{v}_1 = (1, 1)/\sqrt{2}\): \(\Sigma(1, 1) = (3, 3)\), so \(\lambda_1 = 3\). Test \(\mathbf{v}_2 = (1, -1)/\sqrt{2}\): \(\Sigma(1, -1) = (1/3, -1/3)\), so \(\lambda_2 = 1/3\).`,
              String.raw`Explained variance: \(3/(3 + 1/3) = 0.90\) and \(0.10\).`,
            ],
            answer: String.raw`The diagonal axis \((1, 1)\) carries 90% of the variance, so the 2D data can be squashed onto one axis while keeping most of its spread.`,
          },
          caption: 'Each eigenvector v_j is a direction through the data; its eigenvalue λ_j is how spread out the data is along that direction. Sorting by λ_j and dividing by their sum turns raw spread into a tidy percentage: explained_j always lies between 0 and 1, and the explained_j values for all axes add up to exactly 1 (100% of the variance, split across every axis).',
        },
        {
          t: 'metric',
          name: 'explained variance ratio',
          shows: 'What share of the data\'s total spread a given principal component captures on its own, the number used to decide how many components are worth keeping when compressing or visualising data.',
          eli5: 'Imagine photographing a 3D object from its single most flattering angle. If that one photo captures 80% of what makes the object recognisable, "explained variance" for that angle is 0.8. A second photo from the next-best angle might capture another 15% that the first missed, together, two photos (two components) now explain 95% of the object, even though you started with a full 3D shape.',
          higher: 'That component is carrying a lot of the dataset\'s real structure on its own, the first principal component usually has the highest explained variance by construction, since it is chosen specifically to maximise it. A dataset with one or two components explaining almost everything has strong underlying redundancy: many original features were measuring roughly the same thing.',
          lower: 'That component contributes little beyond what earlier components already captured, often close to noise by the time you reach the last few components. Dropping low-explained-variance components is how PCA compresses data with minimal real information loss.',
          typical: 'A common rule of thumb is to keep however many components are needed for the *cumulative* explained variance to cross 90–95%; a scree plot (below) showing a sharp "elbow" after the first few components is the visual version of the same idea, components past the elbow are mostly diminishing returns.',
        },
        {
          t: 'math',
          tex: String.raw`\mathbf{v}_1 = \arg\max_{\lVert\mathbf{v}\rVert = 1}\ \operatorname{Var}(X_c\mathbf{v}) = \arg\max_{\lVert\mathbf{v}\rVert = 1}\ \mathbf{v}^\top\Sigma\,\mathbf{v}`,
          where: [{ sym: '\\mathbf{v}', def: 'A candidate unit-length direction being tried' }],
          syntax: [
            { sym: String.raw`\arg\max_{\lVert\mathbf{v}\rVert = 1}`, say: String.raw`Read "the arg max over unit-length v": among all directions \(\mathbf{v}\) of length 1, pick the one maximising what follows. The condition below the "max" is the rule candidates must obey.` },
            { sym: String.raw`\operatorname{Var}(X_c\mathbf{v})`, say: String.raw`Project every centred point onto \(\mathbf{v}\) (a dot product each), then take the variance of those numbers.` },
            { sym: String.raw`\mathbf{v}^\top\Sigma\,\mathbf{v}`, say: String.raw`A row times a matrix times a column gives one number: the variance along \(\mathbf{v}\).` },
          ],
          worked: {
            title: String.raw`Trying some directions`,
            steps: [
              String.raw`Use the same centred points and \(\Sigma = \begin{pmatrix} 5/3 & 4/3 \\ 4/3 & 5/3 \end{pmatrix}\).`,
              String.raw`\(\mathbf{v} = (1, 0)\): \(\mathbf{v}^\top\Sigma\mathbf{v} = 5/3 = 1.667\).`,
              String.raw`\(\mathbf{v} = (1, 1)/\sqrt{2}\): the projections are \(-2.121, 0, 0, 2.121\), with variance \((4.5 + 4.5)/3 = 3\). Via the formula: \(\tfrac12(5/3 + 4/3 + 4/3 + 5/3) = 3\).`,
              String.raw`\(\mathbf{v} = (1, -1)/\sqrt{2}\): \(\tfrac12(5/3 - 4/3 - 4/3 + 5/3) = 1/3\).`,
            ],
            answer: String.raw`The diagonal direction gives variance 3, the largest of the three, and equal to the top eigenvalue.`,
          },
          caption: 'Why eigenvectors? Maximising the variance of the projection, with v kept to unit length (otherwise you could cheat by just stretching v forever), gives exactly the eigenvalue equation (via a Lagrange multiplier). The maximum variance achievable is the largest eigenvalue, and the direction achieving it is the first principal component, the single best 1D summary of the data you could possibly choose.',
        },
        {
          t: 'example',
          title: 'Two correlated features',
          lines: [
            { label: 'Covariance', text: '\\(\\Sigma = \\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix}\\)' },
            { label: 'Eigenvalues', text: 'solve \\((2 - \\lambda)^2 - 1 = 0\\): \\(\\lambda_1 = 3\\), \\(\\lambda_2 = 1\\)' },
            { label: 'Eigenvectors', text: '\\(\\mathbf{v}_1 = \\tfrac{1}{\\sqrt{2}}(1, 1)\\) (the diagonal), \\(\\mathbf{v}_2 = \\tfrac{1}{\\sqrt{2}}(1, -1)\\)' },
            { label: 'Explained', text: 'PC1 holds \\(3/4 = 75\\%\\) of the variance; dropping PC2 keeps three-quarters of the information in one number' },
          ],
        },
        {
          t: 'flow',
          nodes: [
            { label: 'Standardise features', tone: 'data' },
            { label: 'Covariance matrix', tone: 'process' },
            { label: 'Eigenvectors & eigenvalues', sub: 'or SVD of the data', tone: 'model' },
            { label: 'Keep top k', sub: 'e.g. 95% of variance', tone: 'human' },
            { label: 'Project: Z = X_c V_k', tone: 'output' },
          ],
        },
      ],
    },
    {
      id: 'practice',
      title: 'In practice',
      blocks: [
        {
          t: 'code',
          code: String.raw`from sklearn.decomposition import PCA
from sklearn.preprocessing import StandardScaler

X_std = StandardScaler().fit_transform(X)
pca = PCA(n_components=0.95)        # keep 95% of the variance
Z = pca.fit_transform(X_std)
print(Z.shape, pca.explained_variance_ratio_.round(3))`,
        },
        {
          t: 'plot',
          title: 'A scree plot: variance explained by each component',
          x: [0.5, 10.5],
          y: [0, 0.5],
          xLabel: 'component',
          yLabel: 'share of variance',
          data: [{ pts: [[1, 0.44], [2, 0.19], [3, 0.12], [4, 0.08], [5, 0.06], [6, 0.04], [7, 0.03], [8, 0.02], [9, 0.012], [10, 0.008]], dots: true }],
          caption: 'Often a few components hold most of the variance; the rest is largely noise.',
        },
        {
          t: 'cards',
          cols: 3,
          items: [
            { title: 'PCA', body: 'Linear, fast, reversible, preserves global structure. Good first choice.' },
            { title: 't-SNE', body: 'Non-linear; keeps nearby points nearby for 2D pictures. Distances between clusters are not meaningful.' },
            { title: 'UMAP', body: 'Non-linear, faster than t-SNE, keeps more global structure. Popular for embeddings and genomics.' },
          ],
        },
        { t: 'callout', tone: 'fact', title: 'Eigenfaces', text: 'In 1991 Turk and Pentland ran PCA on face photos. The principal components, viewed as images, looked like ghostly faces ("eigenfaces"), and any face could be approximately rebuilt from a weighted sum of a few dozen of them: an early face-recognition method. PCA itself goes back to Karl Pearson in 1901.' },
      ],
    },
  ],
  sources: ['Pearson, K. (1901). On lines and planes of closest fit to systems of points in space. *Philosophical Magazine*, 2(11), 559–572.', 'Jolliffe, I. T., & Cadima, J. (2016). Principal component analysis: A review and recent developments. *Phil. Trans. R. Soc. A*, 374.', 'Turk, M., & Pentland, A. (1991). Eigenfaces for recognition. *Journal of Cognitive Neuroscience*, 3(1), 71–86.', 'McInnes, L., Healy, J., & Melville, J. (2018). UMAP. *arXiv:1802.03426*.'],
  related: ['ai/foundations/maths', 'ai/algorithms/clustering', 'ai/neural/embeddings'],
}

export default guide
