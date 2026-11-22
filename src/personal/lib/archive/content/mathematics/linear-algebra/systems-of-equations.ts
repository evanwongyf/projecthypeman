import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A system of linear equations is several straight-line conditions that must all hold at once, and solving it means finding the one point (or line, or nothing) where they all agree. Gaussian elimination turns the search into a mechanical, repeatable procedure: a systematic way to simplify many equations down to one answer at a time.',
  nutshell: [
    'A system of two linear equations in two unknowns is, geometrically, two lines: a solution is wherever they cross.',
    '**Gaussian elimination** combines equations (multiply one, add to another) to progressively eliminate variables, one at a time.',
    'A system can have exactly **one** solution (lines cross once), **no** solution (parallel lines), or **infinitely many** (the same line twice).',
    'Written as a matrix equation \\(A\\mathbf{x}=\\mathbf{b}\\), a unique solution exists exactly when \\(\\det(A) \\ne 0\\).',
  ],
  sections: [
    {
      id: 'picture',
      title: 'The geometric picture',
      blocks: [
        {
          t: 'plot',
          title: 'Two lines, one intersection',
          x: [-2, 8],
          y: [-2, 8],
          curves: [
            { f: (x: number) => (10 - 2 * x) / 1, color: '#3b6fd8', label: '2x + y = 10' },
            { f: (x: number) => x - 1, color: '#e07b2a', label: 'x − y = 1' },
          ],
          points: [{ x: 3.667, y: 2.667, label: 'solution ≈ (3.67, 2.67)' }],
          caption: 'Each equation is a line (see [linear functions](@mathematics/functions/linear-functions)); the system\'s solution is the single point lying on both at once.',
        },
        {
          t: 'table',
          head: ['Number of solutions', 'Geometric picture (2 lines)', 'Algebraic sign'],
          rows: [
            ['Exactly one', 'Lines cross at a single point', '\\(\\det(A) \\ne 0\\)'],
            ['None', 'Parallel, non-identical lines', 'Elimination produces a false statement like 0 = 5'],
            ['Infinitely many', 'The same line, written two different ways', 'Elimination produces a true but empty statement like 0 = 0'],
          ],
        },
      ],
    },
    {
      id: 'elimination',
      title: 'Gaussian elimination, step by step',
      blocks: [
        {
          t: 'example',
          title: 'Solving \\(2x+y=10\\) and \\(x-y=1\\)',
          lines: [
            { label: 'System', text: '(1) \\(2x+y=10\\), (2) \\(x-y=1\\)' },
            { label: 'Add (1) and (2)', text: 'the y terms cancel: \\(3x = 11 \\Rightarrow x = \\tfrac{11}{3}\\)' },
            { label: 'Back-substitute', text: 'from (2): \\(y = x - 1 = \\tfrac{11}{3} - 1 = \\tfrac{8}{3}\\)' },
            { label: 'Solution', text: '\\((x,y) = \\left(\\tfrac{11}{3},\\ \\tfrac{8}{3}\\right) \\approx (3.67, 2.67)\\)' },
          ],
        },
        {
          t: 'p',
          text: 'With three or more equations, the same idea scales up: systematically multiply and add equations to eliminate one variable at a time, working through the list, then back-substitute from the simplest equation up to the most complex.',
        },
        {
          t: 'math',
          tex: String.raw`A\mathbf{x} = \mathbf{b} \qquad \mathbf{x} = A^{-1}\mathbf{b} \quad (\text{if } A^{-1} \text{ exists})`,
          caption: 'The whole system written as one matrix equation, from [matrices](@mathematics/linear-algebra/matrices): A holds the coefficients, x the unknowns, b the right-hand-side constants. If A has an inverse, multiplying both sides by \\(A^{-1}\\) solves the entire system in one step.',
        },
        {
          t: 'example',
          title: 'The system above, as a matrix equation',
          lines: [
            { text: '\\(\\begin{pmatrix}2&1\\\\1&-1\\end{pmatrix}\\begin{pmatrix}x\\\\y\\end{pmatrix} = \\begin{pmatrix}10\\\\1\\end{pmatrix}\\), with \\(\\det\\begin{pmatrix}2&1\\\\1&-1\\end{pmatrix} = (2)(-1)-(1)(1) = -3 \\ne 0\\), confirming a unique solution exists, before even solving for it.' },
          ],
        },
      ],
    },
    {
      id: 'why',
      title: 'Why this matters beyond homework',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Linear regression', body: 'Fitting a line\'s slope and intercept to data is, under the hood, solving a system of equations, the [normal equation](@ai/algorithms/linear-regression) is exactly this, scaled up to many variables.' },
            { title: 'Economic equilibrium', body: 'Supply equals demand is one equation; adding more goods, each with their own supply-demand balance, turns the whole economy into a system to solve at once.' },
            { title: 'Circuit analysis and engineering', body: 'Any network of linear constraints (currents, forces, flows) that must all balance simultaneously reduces to the same kind of system.' },
          ],
        },
      ],
    },
  ],
  sources: ['Strang, G. (2016). *Introduction to Linear Algebra* (5th ed.). Wellesley-Cambridge Press.'],
  related: ['mathematics/linear-algebra/matrices', 'mathematics/functions/linear-functions', 'ai/algorithms/linear-regression'],
}

export default guide
