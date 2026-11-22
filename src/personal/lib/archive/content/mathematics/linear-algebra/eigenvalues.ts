import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Most vectors get knocked off their original direction when a matrix transforms them, rotated, sheared, sent somewhere new entirely. An eigenvector is special: a matrix only stretches or shrinks it, never rotates it off its own line. Finding these special directions is how PCA finds the axes along which data actually varies, and how Google\'s original PageRank found the most important pages on the web.',
  nutshell: [
    'An eigenvector \\(\\mathbf{v}\\) of matrix A satisfies \\(A\\mathbf{v} = \\lambda\\mathbf{v}\\): the matrix only scales it, by a factor λ (the eigenvalue), never rotates it.',
    'Eigenvalues are found by solving the **characteristic equation**, \\(\\det(A-\\lambda I) = 0\\).',
    'A matrix\'s eigenvectors mark out the directions where its transformation is just stretching, everything else is some mix of those directions.',
    'PCA\'s "principal components" are exactly the eigenvectors of a dataset\'s covariance matrix.',
  ],
  sections: [
    {
      id: 'picture',
      title: 'The idea, visually',
      blocks: [
        { t: 'math-viz', viz: 'matrix-transform' },
        { t: 'p', text: 'Try the "scale ×2" preset above: every vector you could draw just doubles in length, with no rotation at all, so *every* direction is an eigenvector, each with eigenvalue 2. Now try "shear": most directions get tilted, but the horizontal direction (col 1\'s row) stays exactly horizontal, just possibly rescaled, that unrotated direction is a genuine eigenvector of the shear matrix.' },
        {
          t: 'math',
          tex: String.raw`A\mathbf{v} = \lambda\mathbf{v}`,
          where: [
            { sym: '\\mathbf{v}', def: 'An eigenvector: a nonzero vector whose direction A leaves unchanged' },
            { sym: '\\lambda', def: 'The eigenvalue: the factor by which A stretches (λ>1), shrinks (0<λ<1), or flips (λ<0) that eigenvector' },
          ],
        },
      ],
    },
    {
      id: 'finding',
      title: 'Finding eigenvalues by hand',
      blocks: [
        {
          t: 'proof',
          claim: 'For a 2×2 matrix A, the eigenvalues satisfy \\(\\lambda^2 - \\text{tr}(A)\\,\\lambda + \\det(A) = 0\\).',
          method: 'direct',
          steps: [
            { statement: '\\(A\\mathbf{v} = \\lambda\\mathbf{v}\\)', reason: 'The defining equation for an eigenvector' },
            { statement: '\\(A\\mathbf{v} - \\lambda\\mathbf{v} = \\mathbf{0}\\)', reason: 'Move everything to one side' },
            { statement: '\\((A - \\lambda I)\\mathbf{v} = \\mathbf{0}\\)', reason: 'Factor out v, inserting the identity matrix I so the subtraction is matrix-valid' },
            { statement: 'This has a nonzero solution v only if \\(\\det(A-\\lambda I) = 0\\)', reason: 'If \\((A-\\lambda I)\\) had an inverse, the only solution would be \\(\\mathbf{v}=\\mathbf{0}\\) (not a valid eigenvector), so for a genuine eigenvector to exist, \\((A-\\lambda I)\\) must have no inverse, i.e. determinant 0' },
            { statement: 'For \\(A=\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}\\): \\(\\det\\begin{pmatrix}a-\\lambda&b\\\\c&d-\\lambda\\end{pmatrix} = (a-\\lambda)(d-\\lambda)-bc = 0\\)', reason: 'Expand the determinant of the 2×2 matrix \\(A-\\lambda I\\)' },
            { statement: '\\(\\lambda^2 - (a+d)\\lambda + (ad-bc) = 0\\)', reason: 'Expand and collect, note \\(a+d\\) is the trace of A (sum of the diagonal) and \\(ad-bc\\) is \\(\\det(A)\\)' },
          ],
        },
        {
          t: 'example',
          title: 'Eigenvalues and eigenvectors of \\(A=\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}\\)',
          lines: [
            { label: 'Characteristic equation', text: '\\(\\lambda^2 - 4\\lambda + 3 = 0\\) (trace = 4, det = 3)' },
            { label: 'Factor', text: '\\((\\lambda-1)(\\lambda-3)=0\\), so \\(\\lambda=1\\) or \\(\\lambda=3\\)' },
            { label: 'Eigenvector for λ=3', text: 'solve \\((A-3I)\\mathbf{v}=0\\): \\(\\begin{pmatrix}-1&1\\\\1&-1\\end{pmatrix}\\mathbf{v}=0 \\Rightarrow v_1=v_2\\), e.g. \\(\\mathbf{v}=(1,1)\\)' },
            { label: 'Eigenvector for λ=1', text: 'solve \\((A-I)\\mathbf{v}=0\\): \\(\\begin{pmatrix}1&1\\\\1&1\\end{pmatrix}\\mathbf{v}=0 \\Rightarrow v_1=-v_2\\), e.g. \\(\\mathbf{v}=(1,-1)\\)' },
            { label: 'Check', text: '\\(A(1,1)^\\top = (3,3)^\\top = 3(1,1)^\\top\\) ✓; the two eigenvectors are perpendicular, as they always are for a symmetric matrix like this one' },
          ],
        },
      ],
    },
    {
      id: 'pca',
      title: 'Why PCA needs eigenvectors',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\Sigma\mathbf{v}_j = \lambda_j\mathbf{v}_j`,
          caption: 'From [PCA](@ai/algorithms/pca): the eigenvectors of a dataset\'s covariance matrix Σ are its principal components, the directions of greatest spread in the data. The eigenvalues are exactly how much variance lies along each direction, which is why they can be ranked and the smallest ones safely dropped.',
        },
        {
          t: 'cards',
          items: [
            { title: 'Why eigenvectors specifically', body: 'PCA wants directions where projecting the data loses the least information, these turn out, by a short proof using Lagrange multipliers, to be exactly the eigenvectors of the covariance matrix.' },
            { title: 'Why the eigenvalues matter too', body: 'Each eigenvalue is the variance captured along its eigenvector\'s direction, so ranking eigenvalues from largest to smallest ranks the components from most to least important.' },
          ],
        },
        { t: 'callout', tone: 'fact', title: 'Google\'s first trick', text: 'The original PageRank algorithm (1998) models a web surfer randomly clicking links, and finds the long-run probability of being on any given page as the dominant eigenvector of a giant matrix describing the web\'s link structure, the same eigenvector idea, applied at the scale of the entire internet.' },
      ],
    },
  ],
  sources: ['Strang, G. (2016). *Introduction to Linear Algebra* (5th ed.). Wellesley-Cambridge Press.', 'Page, L., Brin, S., Motwani, R., & Winograd, T. (1999). The PageRank citation ranking. *Stanford InfoLab*.'],
  related: ['ai/algorithms/pca', 'mathematics/linear-algebra/matrices', 'mathematics/linear-algebra/vectors'],
}

export default guide
