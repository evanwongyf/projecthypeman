import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A matrix is a rectangular grid of numbers, and also a machine that transforms space: feed it a vector, and it hands back a new, repositioned vector. Learning to see both faces at once (a table of numbers you can compute with; a stretch, rotation or flip you can picture) is the key to everything from systems of equations to how a neural network layer actually works.',
  nutshell: [
    'A matrix is an \\(m \\times n\\) grid of numbers: m rows, n columns.',
    'Multiplying a matrix by a vector transforms that vector; multiplying two matrices chains two transformations into one.',
    'Matrix multiplication is **row times column**: it is not component-by-component like vector addition, and (unlike ordinary numbers) \\(AB \\ne BA\\) in general.',
    'The **determinant** is a single number measuring how much a matrix scales area (in 2D) or volume (in 3D), and whether it flips orientation.',
  ],
  sections: [
    {
      id: 'as-grid',
      title: 'A matrix as a grid, and as a transformation',
      blocks: [
        {
          t: 'math',
          tex: String.raw`A = \begin{pmatrix} 1 & 2 \\ 0 & -1 \\ 3 & 1 \end{pmatrix}`,
          caption: 'A 3×2 matrix: 3 rows, 2 columns. \\(A_{ij}\\) refers to the entry in row i, column j, so \\(A_{21} = 0\\) here (row 2, column 1).',
        },
        {
          t: 'math',
          tex: String.raw`A\mathbf{x} = \begin{pmatrix} 1 & 2 \\ 0 & -1 \\ 3 & 1 \end{pmatrix}\begin{pmatrix} 4 \\ 5 \end{pmatrix} = \begin{pmatrix} 1(4)+2(5) \\ 0(4)+(-1)(5) \\ 3(4)+1(5) \end{pmatrix} = \begin{pmatrix} 14 \\ -5 \\ 17 \end{pmatrix}`,
          caption: 'Multiplying a matrix by a vector: each output entry is the dot product of a matrix row with the vector. A 3×2 matrix turns a 2D vector into a 3D one, matrices can change how many numbers describe something, not just reposition them.',
        },
        { t: 'math-viz', viz: 'matrix-transform' },
      ],
    },
    {
      id: 'multiply',
      title: 'Multiplying two matrices',
      blocks: [
        {
          t: 'math',
          tex: String.raw`(AB)_{ij} = \sum_{k} A_{ik}B_{kj}`,
          caption: 'Each entry of the product is a dot product: row i of A against column j of B. The number of columns in A must match the number of rows in B, or the multiplication is not defined at all.',
        },
        {
          t: 'example',
          title: 'Two 2×2 matrices, by hand',
          lines: [
            { label: 'Given', text: '\\(A = \\begin{pmatrix}1&2\\\\3&4\\end{pmatrix}\\), \\(B=\\begin{pmatrix}5&6\\\\7&8\\end{pmatrix}\\)' },
            { label: 'Top-left of AB', text: 'row 1 of A · column 1 of B: \\((1)(5)+(2)(7)=19\\)' },
            { label: 'Top-right', text: '\\((1)(6)+(2)(8)=22\\)' },
            { label: 'Bottom-left', text: '\\((3)(5)+(4)(7)=43\\)' },
            { label: 'Bottom-right', text: '\\((3)(6)+(4)(8)=50\\)' },
            { label: 'Result', text: '\\(AB = \\begin{pmatrix}19&22\\\\43&50\\end{pmatrix}\\)' },
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Order matters: AB ≠ BA', text: 'Unlike multiplying ordinary numbers, matrix multiplication is not commutative. Geometrically this makes sense: rotating a shape 90° then stretching it horizontally gives a different result from stretching it first, then rotating. Try swapping the order in the matrix above, by hand, to see the product change.' },
      ],
    },
    {
      id: 'determinant',
      title: 'The determinant',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\det\begin{pmatrix}a&b\\c&d\end{pmatrix} = ad - bc`,
          caption: 'For a 2×2 matrix, the determinant is this simple combination. Geometrically, it is exactly the factor by which the matrix scales area, the unit square (area 1) gets mapped to a parallelogram of area |det|.',
        },
        {
          t: 'example',
          title: 'Reading determinants',
          lines: [
            { label: 'Scale ×2 in both directions', text: '\\(\\begin{pmatrix}2&0\\\\0&2\\end{pmatrix}\\): det = 4, area scales by 4, since both directions doubled' },
            { label: 'A shear', text: '\\(\\begin{pmatrix}1&1\\\\0&1\\end{pmatrix}\\): det = 1, slants the square into a parallelogram of the exact same area' },
            { label: 'A flip', text: '\\(\\begin{pmatrix}-1&0\\\\0&1\\end{pmatrix}\\): det = −1, area preserved (|−1|=1), but orientation flips (mirrored)' },
            { label: 'Flatten to a line', text: '\\(\\begin{pmatrix}1&0\\\\0&0\\end{pmatrix}\\): det = 0, the whole plane gets squashed onto a line: no inverse exists' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Why det = 0 matters so much', text: 'A determinant of exactly 0 means the matrix destroys information, it squashes 2D space down onto a line (or a 3D space onto a plane), so there is no way to undo the transformation and recover the original input. This is precisely why a matrix with det = 0 has no inverse, and why [systems of linear equations](@mathematics/linear-algebra/systems-of-equations) built from such a matrix have no unique solution.' },
      ],
    },
  ],
  sources: ['Strang, G. (2016). *Introduction to Linear Algebra* (5th ed.). Wellesley-Cambridge Press.', 'Cayley, A. (1858). A memoir on the theory of matrices. *Philosophical Transactions of the Royal Society*, 148, 17–37.'],
  related: ['mathematics/linear-algebra/vectors', 'mathematics/linear-algebra/systems-of-equations', 'mathematics/linear-algebra/eigenvalues'],
}

export default guide
