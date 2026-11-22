import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A quantum state is a list of amplitudes, written as a column vector. A quantum gate is a grid of numbers, a matrix, that turns one list into another. Measurement probabilities come from an inner product. Learn these three operations and every gate on this shelf becomes ordinary arithmetic.',
  nutshell: [
    'A **vector** is a column of numbers; a one-qubit state has two entries, n qubits have 2ⁿ.',
    'A **matrix times a vector**: each output entry is a row of the matrix multiplied entry by entry with the vector, then added.',
    'The **inner product** of two states measures how much they overlap; its squared size is a probability.',
    'Quantum gates are **unitary** matrices: they keep total probability equal to 1 and can always be undone.',
  ],
  sections: [
    {
      id: 'matvec',
      title: 'Multiplying a matrix by a vector',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\begin{pmatrix} a & b \\ c & d \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} ax + by \\ cx + dy \end{pmatrix}`,
          caption: 'A 2 × 2 matrix acting on a 2-entry vector. Every one-qubit gate works this way.',
          plain: 'To get the top entry of the answer, walk along the top row of the matrix and down the vector at the same time, multiplying the pairs you meet, then add them. Do the same with the bottom row for the bottom entry. The matrix is a recipe for mixing the old amplitudes into new ones.',
          where: [
            { sym: 'a, b, c, d', def: 'the entries of the matrix (the gate)' },
            { sym: 'x, y', def: 'the entries of the vector (the amplitudes of 0 and of 1)' },
          ],
          syntax: [
            { sym: String.raw`\begin{pmatrix}\cdots\end{pmatrix}`, say: 'round brackets around a grid of numbers: a matrix, or a vector if there is one column' },
            { sym: String.raw`\backslash\backslash`, say: 'in the TeX source, a new row; on screen it is simply the next line of the grid' },
            { sym: String.raw`\&`, say: 'in the source, the gap between columns' },
            { sym: 'ax + by', say: 'a times x plus b times y' },
          ],
          worked: {
            title: 'The NOT gate (X) acting on a state',
            steps: [
              String.raw`The X gate is \(\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}\). Take the state \(\begin{pmatrix} 0.6 \\ 0.8 \end{pmatrix}\).`,
              String.raw`Top entry: \(0 \times 0.6 + 1 \times 0.8 = 0.8\).`,
              String.raw`Bottom entry: \(1 \times 0.6 + 0 \times 0.8 = 0.6\).`,
              String.raw`Result: \(\begin{pmatrix} 0.8 \\ 0.6 \end{pmatrix}\).`,
              String.raw`Check probabilities before and after: \(0.6^2 + 0.8^2 = 0.36 + 0.64 = 1\), and \(0.8^2 + 0.6^2 = 1\).`,
            ],
            why: [
              'write the gate and the state; here a = 0, b = 1, c = 1, d = 0, x = 0.6, y = 0.8',
              'top row (0, 1) times the vector picks out the second amplitude',
              'bottom row (1, 0) picks out the first amplitude',
              'X swapped the two amplitudes, the quantum version of flipping 0 and 1',
              'a valid gate must keep the total probability at 1, and this one does',
            ],
            answer: String.raw`\(X\begin{pmatrix} 0.6 \\ 0.8 \end{pmatrix} = \begin{pmatrix} 0.8 \\ 0.6 \end{pmatrix}\): the chances of reading 0 and 1 (36% and 64%) swap to 64% and 36%.`,
          },
        },
        {
          t: 'math',
          tex: String.raw`\begin{pmatrix} a & b \\ c & d \end{pmatrix}\begin{pmatrix} e & f \\ g & h \end{pmatrix} = \begin{pmatrix} ae + bg & af + bh \\ ce + dg & cf + dh \end{pmatrix}`,
          caption: 'Multiplying two matrices: applying one gate after another.',
          plain: 'Each entry of the result is a row of the first matrix combined with a column of the second: multiply pairs and add. The entry in row r, column c uses row r of the left matrix and column c of the right one. In a circuit, the gate applied first is written on the right, because it is the one that touches the vector first.',
          where: [
            { sym: 'a … h', def: 'entries of the two matrices' },
          ],
          syntax: [
            { sym: 'AB', say: 'matrices written side by side are multiplied; order matters, AB is usually not BA' },
            { sym: 'ae + bg', say: 'row 1 of the left matrix (a, b) times column 1 of the right matrix (e, g)' },
          ],
          worked: {
            title: 'Applying X twice gives back the start',
            steps: [
              String.raw`\(XX = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}\).`,
              String.raw`Top left: \(0\cdot0 + 1\cdot1 = 1\). Top right: \(0\cdot1 + 1\cdot0 = 0\).`,
              String.raw`Bottom left: \(1\cdot0 + 0\cdot1 = 0\). Bottom right: \(1\cdot1 + 0\cdot0 = 1\).`,
              String.raw`\(XX = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = I\), the identity.`,
            ],
            why: [
              'two NOT gates in a row is one matrix multiplied by itself',
              'row 1 times column 1, then row 1 times column 2',
              'row 2 times column 1, then row 2 times column 2',
              'the identity matrix leaves every vector unchanged, so flipping twice undoes itself',
            ],
            answer: String.raw`\(X^2 = I\): two NOTs cancel. Many gates are their own inverse like this.`,
          },
        },
      ],
    },
    {
      id: 'inner',
      title: 'Inner products, unitarity and eigenvalues',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\langle u, v\rangle = \bar u_1 v_1 + \bar u_2 v_2, \qquad U^\dagger U = I`,
          caption: 'The inner product of two states, and the condition for a matrix to be a valid quantum gate (unitary).',
          plain: 'The inner product compares two states: conjugate the first state’s entries, multiply them pairwise with the second state’s entries, and add. If the result is 0 the states are completely distinguishable (orthogonal); if its size is 1 they are the same state. A gate U is unitary when its conjugate transpose U† undoes it. Unitary gates preserve inner products, so lengths stay 1 and probabilities still add up to 100%.',
          where: [
            { sym: 'u, v', def: 'two state vectors' },
            { sym: String.raw`\bar u_1`, def: 'complex conjugate of u’s first entry' },
            { sym: String.raw`U^\dagger`, def: 'U dagger: transpose U (swap rows and columns) and conjugate every entry' },
            { sym: 'I', def: 'the identity matrix: 1s on the diagonal, 0s elsewhere' },
          ],
          syntax: [
            { sym: String.raw`\langle u, v\rangle`, say: 'angle brackets: the inner product of u and v' },
            { sym: String.raw`u_1`, say: 'subscript 1: the first entry of u' },
            { sym: String.raw`\dagger`, say: '“dagger”: conjugate transpose' },
          ],
          worked: {
            title: 'Are these states orthogonal? Is the Hadamard unitary?',
            steps: [
              String.raw`Take \(u = \tfrac{1}{\sqrt2}\begin{pmatrix}1\\1\end{pmatrix}\) and \(v = \tfrac{1}{\sqrt2}\begin{pmatrix}1\\-1\end{pmatrix}\).`,
              String.raw`\(\langle u, v\rangle = \tfrac12(1\cdot1 + 1\cdot(-1)) = \tfrac12(0) = 0\).`,
              String.raw`\(\langle u, u\rangle = \tfrac12(1 + 1) = 1\).`,
              String.raw`Hadamard \(H = \tfrac1{\sqrt2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}\) is real and symmetric, so \(H^\dagger = H\).`,
              String.raw`\(H^\dagger H = \tfrac12\begin{pmatrix}1+1 & 1-1\\ 1-1 & 1+1\end{pmatrix} = \begin{pmatrix}1&0\\0&1\end{pmatrix}\).`,
            ],
            why: [
              'these are the two states the Hadamard gate creates, called |+⟩ and |−⟩',
              'the entries are real, so conjugating changes nothing; the +1 and −1 products cancel',
              'a state’s inner product with itself is its squared length, which must be 1',
              'transposing a symmetric matrix leaves it the same, and conjugating real numbers leaves them the same',
              'multiply row by column as in the previous section; getting the identity proves H is unitary',
            ],
            answer: String.raw`\(|+\rangle\) and \(|-\rangle\) are orthogonal (a measurement can tell them apart perfectly), and \(H\) is unitary, and its own inverse.`,
          },
        },
        {
          t: 'math',
          tex: String.raw`A\,\vec v = \lambda\,\vec v`,
          caption: 'An eigenvector v of a matrix A is only stretched by A, by the eigenvalue λ.',
          plain: 'Most vectors change direction when a matrix acts on them. A few special ones, the eigenvectors, come out pointing the same way, just scaled by a number λ. In quantum computing, gates multiply their eigenvectors by a phase (a λ of size 1), and measurements read out eigenvalues. Phase estimation, the heart of Shor’s algorithm, is a machine for finding λ.',
          where: [
            { sym: 'A', def: 'a square matrix' },
            { sym: String.raw`\vec v`, def: 'an eigenvector (not all zeros)' },
            { sym: String.raw`\lambda`, def: 'lambda, the eigenvalue: the scaling factor' },
          ],
          syntax: [
            { sym: String.raw`\vec v`, say: 'an arrow over a letter marks a vector' },
            { sym: String.raw`\lambda`, say: 'the Greek letter lambda' },
          ],
          worked: {
            title: 'Eigenvectors of the Z gate and of X',
            steps: [
              String.raw`\(Z = \begin{pmatrix}1&0\\0&-1\end{pmatrix}\). \(Z\begin{pmatrix}1\\0\end{pmatrix} = \begin{pmatrix}1\\0\end{pmatrix}\), so \(\lambda = +1\).`,
              String.raw`\(Z\begin{pmatrix}0\\1\end{pmatrix} = \begin{pmatrix}0\\-1\end{pmatrix} = -1\cdot\begin{pmatrix}0\\1\end{pmatrix}\), so \(\lambda = -1\).`,
              String.raw`\(X\begin{pmatrix}1\\1\end{pmatrix} = \begin{pmatrix}0\cdot1+1\cdot1\\1\cdot1+0\cdot1\end{pmatrix} = \begin{pmatrix}1\\1\end{pmatrix}\), so \(\lambda = +1\).`,
              String.raw`\(X\begin{pmatrix}1\\-1\end{pmatrix} = \begin{pmatrix}-1\\1\end{pmatrix} = -1\cdot\begin{pmatrix}1\\-1\end{pmatrix}\), so \(\lambda = -1\).`,
            ],
            why: [
              'multiply as usual; the output equals the input, so the stretch factor is 1',
              'the output is the input times −1, so this is an eigenvector with eigenvalue −1',
              'swapping two equal entries changes nothing',
              'swapping 1 and −1 is the same as multiplying the whole vector by −1',
            ],
            answer: String.raw`\(|0\rangle, |1\rangle\) are Z’s eigenvectors (eigenvalues \(\pm1\)), and \(|+\rangle, |-\rangle\) are X’s. Measuring “in the Z basis” or “in the X basis” means asking which eigenvector the state is.`,
          },
        },
      ],
    },
  ],
  sources: ['Nielsen & Chuang (2010), section 2.1.', 'Strang, G. (2016). Introduction to Linear Algebra (5th ed.). Wellesley-Cambridge.'],
  related: ['quantum/maths/complex-numbers', 'quantum/maths/dirac-and-tensors', 'quantum/core/gates-and-circuits'],
}

export default guide
