import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Most real quantities, a company\'s profit, a model\'s loss, depend on more than one variable at once. Multivariable calculus extends the derivative to handle this: a partial derivative asks "how does the output change if I nudge just one input, freezing the rest?", and the gradient vector collects every partial derivative into a single arrow pointing the way uphill.',
  nutshell: [
    'A **partial derivative**, \\(\\partial f/\\partial x\\), treats every variable except x as a constant, then differentiates normally.',
    'The **gradient**, \\(\\nabla f\\), is the vector of all partial derivatives: it points in the direction f increases fastest.',
    'Moving opposite the gradient, \\(-\\nabla f\\), is the direction of steepest *decrease*, exactly what gradient descent follows downhill.',
    'A function\'s minimum or maximum (if smooth) occurs where \\(\\nabla f = \\mathbf{0}\\): every partial derivative is zero at once.',
  ],
  sections: [
    {
      id: 'partial',
      title: 'Partial derivatives: one variable at a time',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\frac{\partial f}{\partial x} = \lim_{h\to0} \frac{f(x+h, y) - f(x,y)}{h}`,
          caption: 'The same limit definition as an ordinary derivative, just holding y fixed while x is nudged. The curly ∂ ("del" or "partial") signals "there are other variables in the room, and I am ignoring them for this one calculation".',
        },
        {
          t: 'example',
          title: 'Partial derivatives of \\(f(x,y) = x^2y + 3y^2\\)',
          lines: [
            { label: '∂f/∂x', text: 'treat y as a constant: \\(\\dfrac{\\partial f}{\\partial x} = 2xy\\) (the \\(3y^2\\) term, having no x, differentiates to 0)' },
            { label: '∂f/∂y', text: 'treat x as a constant: \\(\\dfrac{\\partial f}{\\partial y} = x^2 + 6y\\) (the power rule applied to each y-term)' },
            { label: 'At (2, 1)', text: '\\(\\partial f/\\partial x = 2(2)(1) = 4\\); \\(\\partial f/\\partial y = 2^2 + 6(1) = 10\\)' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'A real-world partial derivative', text: 'A café\'s weekly profit might depend on both the coffee price (p) and advertising spend (a): \\(\\text{profit}(p, a)\\). \\(\\partial \\text{profit}/\\partial p\\) answers "if I raise the price by $1, spending unchanged, how much does profit change?"exactly the kind of one-variable-at-a-time question a business actually asks.' },
      ],
    },
    {
      id: 'gradient',
      title: 'The gradient vector',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\nabla f(x,y) = \left(\frac{\partial f}{\partial x},\ \frac{\partial f}{\partial y}\right)`,
          caption: 'The gradient packages every partial derivative into one vector (see [vectors](@mathematics/linear-algebra/vectors)). It is the natural generalisation of "the derivative" to more than one input.',
        },
        {
          t: 'example',
          title: 'The gradient of \\(f(x,y) = x^2y + 3y^2\\) at (2, 1)',
          lines: [
            { text: 'From the partials computed above: \\(\\nabla f(2,1) = (4, 10)\\). This vector points in the direction (x increasing 4 units for every 10 of y) that increases f fastest from that point.' },
          ],
        },
        {
          t: 'math',
          tex: String.raw`\theta_{t+1} = \theta_t - \eta\,\nabla L(\theta_t)`,
          caption: 'Gradient descent, exactly as used to train every model on the [AI shelf](@ai/foundations/gradient-descent): since ∇L points towards steeper loss, stepping in the *opposite* direction, \\(-\\nabla L\\), reliably walks downhill towards a minimum.',
        },
        { t: 'ai-viz', viz: 'gradient-descent' },
        { t: 'ai-viz', viz: 'optimizers' },
      ],
    },
    {
      id: 'critical',
      title: 'Where the gradient is zero',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\nabla f(x,y) = \mathbf{0} \quad\Longleftrightarrow\quad \frac{\partial f}{\partial x}=0 \text{ and } \frac{\partial f}{\partial y}=0`,
          caption: 'A critical point: every partial derivative is simultaneously zero, so there is no direction that increases f (to first order). It could be a minimum (a valley floor), a maximum (a hilltop), or a saddle point (a mountain pass: up in one direction, down in another).',
        },
        {
          t: 'cards',
          items: [
            { title: 'Minimum', body: 'The point training usually aims for: the lowest nearby loss. Like the bottom of a bowl.' },
            { title: 'Maximum', body: 'The highest nearby value. Like the top of a dome.' },
            { title: 'Saddle point', body: 'Flat in every direction locally, but a minimum along one axis and a maximum along another, like the middle of a Pringle chip or a mountain pass. In high dimensions (many weights), these are far more common than true minima, and are a major reason plain gradient descent can stall.' },
          ],
        },
      ],
    },
  ],
  sources: ['Stewart, J. (2015). *Calculus: Early Transcendentals* (8th ed.). Cengage.', 'Dauphin, Y. N., et al. (2014). Identifying and attacking the saddle point problem in high-dimensional non-convex optimization. *NeurIPS*.'],
  related: ['ai/foundations/gradient-descent', 'mathematics/linear-algebra/vectors', 'mathematics/calculus/chain-rule'],
}

export default guide
