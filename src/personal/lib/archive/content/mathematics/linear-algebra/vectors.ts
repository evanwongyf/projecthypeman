import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A vector is a list of numbers that is also an arrow: it has a size and a direction, not just a value. That double life, numbers you can calculate with, and an arrow you can picture, is what makes vectors the natural language for anything with multiple components at once: a position in space, a stock\'s multiple risk factors, or a word\'s embedding.',
  nutshell: [
    'A vector \\(\\mathbf{v} = (v_1, v_2, \\dots, v_n)\\) is an ordered list of numbers, drawn as an arrow from the origin.',
    'Vectors **add** tip-to-tail; a **scalar** (plain number) multiplying a vector stretches or shrinks (and flips, if negative) it.',
    'The **magnitude** \\(\\lVert\\mathbf{v}\\rVert\\) is the vector\'s length, found with Pythagoras.',
    'The **dot product** turns two vectors into a single number measuring how aligned they are, zero exactly when they are perpendicular.',
  ],
  sections: [
    {
      id: 'basics',
      title: 'What a vector is',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\mathbf{v} = (v_1, v_2) \qquad \lVert\mathbf{v}\rVert = \sqrt{v_1^2 + v_2^2}`,
          caption: 'A 2D vector and its magnitude, by Pythagoras\' theorem: the vector is the hypotenuse of a right triangle with legs \\(v_1\\) and \\(v_2\\).',
        },
        { t: 'math-viz', viz: 'vector-ops' },
        { t: 'callout', tone: 'tip', title: 'A vector is not a point', text: 'A vector describes a displacement"3 right, 2 up"not a fixed location. The same vector (3, 2) can be drawn starting anywhere; what matters is its length and direction, not where its tail happens to sit. Only when we agree to always draw it starting at the origin does it correspond to a single point (its tip).' },
      ],
    },
    {
      id: 'ops',
      title: 'Addition and scalar multiplication',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\mathbf{a} + \mathbf{b} = (a_1+b_1,\ a_2+b_2) \qquad k\mathbf{v} = (kv_1,\ kv_2)`,
          caption: 'Addition: add component by component (geometrically, place b\'s tail at a\'s tip). Scalar multiplication: multiply every component by k, which stretches (|k|>1), shrinks (|k|<1), or flips (k<0) the vector, without changing its direction otherwise.',
        },
        {
          t: 'example',
          title: 'Combining forces, or combining risk factors',
          lines: [
            { label: 'Two forces', text: '\\(\\mathbf{a}=(3,1)\\) newtons and \\(\\mathbf{b}=(1,2)\\) newtons pushing an object' },
            { label: 'Net force', text: '\\(\\mathbf{a}+\\mathbf{b} = (4,3)\\) newtons' },
            { label: 'Net magnitude', text: '\\(\\lVert(4,3)\\rVert = \\sqrt{16+9} = 5\\) newtons' },
          ],
        },
      ],
    },
    {
      id: 'dot',
      title: 'The dot product',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\mathbf{a}\cdot\mathbf{b} = a_1b_1 + a_2b_2 = \lVert\mathbf{a}\rVert\,\lVert\mathbf{b}\rVert\cos\theta`,
          caption: 'Two equivalent formulas: multiply matching components and add (easy to compute), or multiply the lengths by the cosine of the angle between them (easy to interpret). Since cos(90°) = 0, perpendicular vectors always have a dot product of exactly 0.',
        },
        {
          t: 'example',
          title: 'Checking perpendicularity',
          lines: [
            { label: 'Vectors', text: '\\(\\mathbf{a}=(2,3)\\), \\(\\mathbf{b}=(3,-2)\\)' },
            { label: 'Dot product', text: '\\((2)(3) + (3)(-2) = 6-6 = 0\\)' },
            { label: 'Conclusion', text: 'exactly perpendicular, confirmed algebraically without ever drawing or measuring an angle' },
          ],
        },
        {
          t: 'p',
          text: 'The dot product is everywhere in this archive: it is the core operation inside [an artificial neuron](@ai/neural/perceptron) (\\(\\mathbf{w}\\cdot\\mathbf{x}+b\\)), inside [attention](@ai/neural/transformers) (comparing a query vector to a key vector), and inside [cosine similarity](@ai/neural/embeddings) for comparing word embeddings.',
        },
        { t: 'callout', tone: 'fact', title: 'A reluctant invention', text: 'Vector notation and the dot product were developed in the 1880s by the physicist Josiah Willard Gibbs for his Yale lectures, adapting and simplifying earlier, more cumbersome "quaternion" methods from William Rowan Hamilton. Many mathematicians of the era saw vectors as an inelegant shortcut; they are now foundational.' },
      ],
    },
  ],
  sources: ['Gibbs, J. W., & Wilson, E. B. (1901). *Vector Analysis*. Yale University Press.', 'Strang, G. (2016). *Introduction to Linear Algebra* (5th ed.). Wellesley-Cambridge Press.'],
  related: ['mathematics/linear-algebra/matrices', 'ai/foundations/maths', 'ai/neural/embeddings'],
}

export default guide
