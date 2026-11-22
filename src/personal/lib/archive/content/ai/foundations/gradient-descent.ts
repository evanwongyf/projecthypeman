import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Almost every modern model learns the same way: compute how wrong it is (the loss), work out which direction of change in each parameter would reduce that loss (the gradient), and take a small step that way. Repeat. This is **gradient descent**, and improving on it has produced the optimisers that train today’s networks.',
  nutshell: [
    'Update rule: \\(\\theta \\leftarrow \\theta - \\eta\\,\\nabla L(\\theta)\\).',
    'The **learning rate** \\(\\eta\\) is the most important setting: too small is slow, too large diverges.',
    '**Stochastic** and **mini-batch** gradient descent use a few examples per step: noisier but far faster.',
    '**Momentum** smooths the path; **Adam** also adapts the step size for each parameter.',
  ],
  sections: [
    {
      id: 'rule',
      title: 'Walking downhill in the fog',
      blocks: [
        { t: 'p', text: 'Imagine standing on a hillside in thick fog, wanting to reach the valley. You cannot see it, but you can feel the slope under your feet. Step downhill, feel again, step again. The loss is the height, the parameters are your position, and the gradient is the slope.' },
        {
          t: 'math',
          tex: String.raw`\theta_{t+1} = \theta_t - \eta\,\nabla_\theta L(\theta_t)`,
          where: [
            { sym: '\\theta_t', def: 'The parameters after t steps' },
            { sym: '\\eta', def: 'The learning rate (step size), often 0.1 to 0.0001' },
            { sym: '\\nabla_\\theta L', def: 'The gradient of the loss: the uphill direction' },
          ],
          syntax: [
            { sym: String.raw`\theta_{t+1}`, say: String.raw`Read "theta sub t plus 1": the parameters at the next step. The subscript counts steps; it does not add to the value.` },
            { sym: String.raw`\nabla_\theta L(\theta_t)`, say: String.raw`Read "the gradient of L with respect to theta, evaluated at theta t": the slopes of the loss, calculated at the current parameters.` },
            { sym: String.raw`\theta_{t+1} = \theta_t - \cdots`, say: String.raw`The equals sign here means "becomes" (an update): compute the right-hand side with the old values, and that is the new \(\theta\).` },
          ],
          worked: {
            title: String.raw`One step of linear regression`,
            steps: [
              String.raw`Data \((x, y)\): \((1, 3)\), \((2, 5)\). Model \(\hat{y} = wx + b\) starting at \(w = 0\), \(b = 0\). Loss: mean squared error. \(\eta = 0.05\).`,
              String.raw`Errors \(\hat{y} - y\): \(0 - 3 = -3\) and \(0 - 5 = -5\). Loss \(= (9 + 25)/2 = 17\).`,
              String.raw`\(\partial L/\partial w = 2 \cdot \text{mean}(\text{error}\cdot x) = 2\,(-3 - 10)/2 = -13\).`,
              String.raw`\(\partial L/\partial b = 2 \cdot \text{mean}(\text{error}) = 2\,(-3 - 5)/2 = -8\).`,
              String.raw`Update: \(w = 0 - 0.05(-13) = 0.65\) and \(b = 0 - 0.05(-8) = 0.4\).`,
              String.raw`New predictions \(1.05\) and \(1.7\), errors \(-1.95\) and \(-3.3\), loss \(= (3.8025 + 10.89)/2 \approx 7.35\).`,
            ],
            answer: String.raw`One step moved \((w, b)\) from \((0, 0)\) to \((0.65, 0.4)\) and cut the loss from 17 to about 7.35.`,
          },
          caption: 'Read it right to left: compute the gradient (which way is uphill), flip its sign (downhill), shrink it by η, and subtract that from where you are now. Repeating this is the entire algorithm, every fancier optimiser below is just a smarter way of choosing that one subtracted step.',
        },
        { t: 'ai-viz', viz: 'gradient-descent' },
        {
          t: 'example',
          title: 'Three steps on L(w) = (w − 1)², η = 0.1',
          lines: [
            { label: 'Gradient', text: '\\(L\'(w) = 2(w - 1)\\)' },
            { label: 'Step 1', text: '\\(w = -2.5\\): \\(w \\leftarrow -2.5 - 0.1 \\times 2(-3.5) = -1.8\\)' },
            { label: 'Step 2', text: '\\(w \\leftarrow -1.8 - 0.1 \\times 2(-2.8) = -1.24\\)' },
            { label: 'Step 3', text: '\\(w \\leftarrow -1.24 - 0.1 \\times 2(-2.24) = -0.792\\): each step closes 20% of the gap to the minimum at 1' },
          ],
        },
        {
          t: 'math',
          tex: String.raw`w_{t+1} - 1 = (1 - 2\eta)(w_t - 1) \qquad |1 - 2\eta| < 1 \iff 0 < \eta < 1`,
          syntax: [
            { sym: String.raw`|1 - 2\eta| < 1`, say: String.raw`Read "the absolute value of one minus two eta is less than one": the multiplier, ignoring its sign, must be smaller than 1 in size so the distance shrinks.` },
            { sym: String.raw`\iff`, say: String.raw`Read "if and only if": the two statements on either side are equivalent.` },
            { sym: String.raw`0 < \eta < 1`, say: String.raw`Read "eta lies strictly between 0 and 1".` },
          ],
          worked: {
            title: String.raw`Four learning rates on L(w) = (w − 1)²`,
            steps: [
              String.raw`Start at \(w_0 = -2.5\), so the gap to the minimum is \(w_0 - 1 = -3.5\). Each step multiplies the gap by \(1 - 2\eta\).`,
              String.raw`\(\eta = 0.1\): factor 0.8, gaps \(-3.5, -2.8, -2.24, -1.792\), so \(w_3 = -0.792\) (matches the example above). Slow but steady.`,
              String.raw`\(\eta = 0.4\): factor 0.2, gaps \(-3.5, -0.7, -0.14\). Fast.`,
              String.raw`\(\eta = 0.8\): factor \(-0.4\), gaps \(-3.5, +1.4, -0.56\). It overshoots every time but still converges.`,
              String.raw`\(\eta = 1.05\): factor \(-1.1\), gaps \(-3.5, +3.85, -4.235\). Each step lands further away.`,
            ],
            answer: String.raw`Anything with \(|1 - 2\eta| < 1\) converges (0.1, 0.4 and 0.8 all do); \(\eta = 1.05\) has \(|{-1.1}| > 1\) and diverges.`,
          },
          caption: 'The left equation shows the distance to the minimum shrinking by a factor of (1 − 2η) every step; the right inequality is exactly when that factor is small enough to converge rather than diverge. For this bowl, η = 0.5 jumps to the minimum in one step; between 0.5 and 1 it overshoots and zigzags in; above 1 it diverges. Try η = 1.05 in the lab above.',
        },
        {
          t: 'metric',
          name: 'the learning rate (η)',
          shows: 'How big a step the model takes downhill at each update, the single most important setting in training any model, and often the first thing engineers tune when a model trains badly. It directly controls the trade-off between speed and stability: how fast you descend versus how likely you are to overshoot.',
          eli5: 'Imagine trying to find the lowest point in a valley while blindfolded, feeling the slope under your feet and taking a step downhill each time. A tiny step (low η) gets you there safely but it could take all day. A huge step (high η) covers ground fast, but you might stride right over the valley floor and end up partway up the other side, or even further from the bottom than when you started.',
          higher: 'Bigger steps each update, training moves faster when it is working, but risks overshooting the minimum, oscillating back and forth, or diverging entirely (the loss exploding to infinity or NaN). A learning rate that is too high is one of the most common reasons a model\'s training loss refuses to go down, or bounces around wildly instead of smoothly decreasing.',
          lower: 'Smaller, more cautious steps, training is more stable and less likely to overshoot, but it can take far more steps (and far more time) to reach a good solution, and can get stuck crawling along a nearly flat region of the loss surface for a long time (the "plateau" problem).',
          typical: 'Common starting points are around 0.1–0.01 for simple models trained with plain SGD, and around 0.001–0.0003 for Adam on neural networks; in practice, engineers rarely pick one fixed value, they use a schedule (like the warm-up-then-decay curve below) and often search across several values a factor of 3–10 apart to find one that works.',
        },
      ],
    },
    {
      id: 'batches',
      title: 'Batch, stochastic and mini-batch',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\nabla L(\theta) = \frac{1}{n}\sum_{i=1}^{n}\nabla \ell_i(\theta) \;\approx\; \frac{1}{|B|}\sum_{i \in B}\nabla \ell_i(\theta)`,
          where: [
            { sym: '\\ell_i(\\theta)', def: 'The loss on just training example i' },
            { sym: 'B', def: 'A random mini-batch: a small random subset of the n examples' },
          ],
          syntax: [
            { sym: String.raw`\ell_i`, say: String.raw`Read "ell sub i": the loss on the single example i (a lowercase script l, to tell it from the total loss \(L\)).` },
            { sym: String.raw`\approx`, say: String.raw`Read "is approximately": the right-hand side is an estimate, not an exact equality.` },
            { sym: String.raw`\sum_{i \in B}`, say: String.raw`Read "the sum over i in B": add the terms only for the examples in the batch, where \(\in\) means "is a member of".` },
            { sym: String.raw`|B|`, say: String.raw`Read "the size of B": how many examples are in the batch. Vertical bars around a set count its members.` },
          ],
          worked: {
            title: String.raw`Full gradient versus mini-batches`,
            steps: [
              String.raw`Model \(\hat{y} = wx\) at \(w = 1\), with data \((x, y)\): \((1,2)\), \((2,3)\), \((3,7)\), \((4,8)\). Per-example loss \(\ell_i = (wx_i - y_i)^2\), gradient \(2(wx_i - y_i)x_i\).`,
              String.raw`Per-example gradients: \(2(1-2)(1) = -2\); \(2(2-3)(2) = -4\); \(2(3-7)(3) = -24\); \(2(4-8)(4) = -32\).`,
              String.raw`Full gradient \(= (-2 - 4 - 24 - 32)/4 = -62/4 = -15.5\).`,
              String.raw`Mini-batch \(B = \{1, 3\}\): \((-2 - 24)/2 = -13\). Mini-batch \(B = \{2, 4\}\): \((-4 - 32)/2 = -18\).`,
              String.raw`Averaging the two batch estimates gives \((-13 - 18)/2 = -15.5\), the exact value.`,
            ],
            answer: String.raw`Each batch is off (\(-13\) and \(-18\) against the true \(-15.5\)), but both point downhill the same way, and over many random batches they average out to the true gradient.`,
          },
          caption: 'The full gradient averages over all n examples, exact, but it means touching every example just to take one step. A random mini-batch B gives a noisy but unbiased estimate at a fraction of the cost: "unbiased" means that on average, over many batches, the estimate points the same way as the true gradient, so the noise mostly cancels out over many steps rather than pulling training systematically off course.',
        },
        {
          t: 'table',
          head: ['Variant', 'Examples per step', 'Pros', 'Cons'],
          rows: [
            ['Batch', 'All n', 'Exact gradient, smooth path', 'Each step is slow; huge datasets do not fit in memory'],
            ['Stochastic (SGD)', '1', 'Very cheap steps; noise can escape shallow minima', 'Very noisy path'],
            ['Mini-batch', 'Typically 32–4,096', 'Fast on GPUs, reasonably smooth', 'Batch size becomes another setting'],
          ],
          caption: 'One full pass through the training data is an **epoch**. In practice "SGD" usually means mini-batch.',
        },
      ],
    },
    {
      id: 'optimisers',
      title: 'Momentum and Adam',
      blocks: [
        { t: 'ai-viz', viz: 'optimizers' },
        {
          t: 'math',
          tex: String.raw`\text{Momentum: } \mathbf{v}_{t} = \beta\,\mathbf{v}_{t-1} + \nabla L(\theta_t), \qquad \theta_{t+1} = \theta_t - \eta\,\mathbf{v}_t`,
          where: [
            { sym: '\\mathbf{v}_t', def: 'The accumulated "velocity": a running, decaying average of past gradients' },
            { sym: '\\beta', def: 'How much of the old velocity survives each step (its "memory"), typically 0.9' },
          ],
          syntax: [
            { sym: String.raw`\mathbf{v}_{t-1}`, say: String.raw`Read "v sub t minus 1": last step's velocity. The subscript \(t-1\) means "one step earlier".` },
            { sym: String.raw`\beta\,\mathbf{v}_{t-1} + \nabla L(\theta_t)`, say: String.raw`Read "keep a fraction beta of the old velocity, then add the new gradient": a running pile of recent gradients that gradually forgets.` },
            { sym: String.raw`\text{Momentum: } \cdots, \qquad \cdots`, say: String.raw`The comma separates two update rules that happen in order: first update \(\mathbf{v}\), then use it to move \(\theta\).` },
          ],
          worked: {
            title: String.raw`Momentum with β = 0.9, η = 0.1`,
            steps: [
              String.raw`Start from \(\theta_0 = 1\) and \(\mathbf{v}_0 = 0\). Case A: the gradient is steady at 2 for three steps.`,
              String.raw`\(v_1 = 0.9(0) + 2 = 2\); \(v_2 = 0.9(2) + 2 = 3.8\); \(v_3 = 0.9(3.8) + 2 = 5.42\).`,
              String.raw`Moves \(\eta v\): 0.2, 0.38, 0.542, so \(\theta\): \(1 \to 0.8 \to 0.42 \to -0.122\). Plain gradient descent would move only 0.2 each time.`,
              String.raw`Case B: the gradient flips sign each step: \(+2, -2, +2\). \(v_1 = 2\); \(v_2 = 0.9(2) - 2 = -0.2\); \(v_3 = 0.9(-0.2) + 2 = 1.82\).`,
            ],
            answer: String.raw`With a steady gradient the steps grow (0.2, 0.38, 0.542, heading towards ten times the plain step); with a flip-flopping gradient the velocity stays small (2, \(-0.2\), 1.82), so zigzags are damped.`,
          },
          caption: 'Like a ball rolling downhill: velocity accumulates along consistent directions and cancels in directions that flip back and forth. Stepping with v_t instead of the raw gradient means a dimension where the gradient keeps pointing the same way speeds up step after step, while a dimension that keeps flip-flopping (a common cause of zigzagging across a narrow valley) gets its oscillations averaged out towards zero. β ≈ 0.9 is typical.',
        },
        {
          t: 'math',
          tex: String.raw`\begin{aligned}
\mathbf{m}_t &= \beta_1\mathbf{m}_{t-1} + (1 - \beta_1)\,\mathbf{g}_t \\
\mathbf{v}_t &= \beta_2\mathbf{v}_{t-1} + (1 - \beta_2)\,\mathbf{g}_t^2 \\
\hat{\mathbf{m}}_t &= \frac{\mathbf{m}_t}{1 - \beta_1^t}, \quad \hat{\mathbf{v}}_t = \frac{\mathbf{v}_t}{1 - \beta_2^t} \\
\theta_{t+1} &= \theta_t - \eta\,\frac{\hat{\mathbf{m}}_t}{\sqrt{\hat{\mathbf{v}}_t} + \epsilon}
\end{aligned}`,
          where: [
            { sym: '\\mathbf{g}_t', def: 'The gradient at step t' },
            { sym: '\\mathbf{m}_t', def: 'Running average of gradients (momentum), β₁ = 0.9' },
            { sym: '\\mathbf{v}_t', def: 'Running average of squared gradients, β₂ = 0.999' },
            { sym: '\\epsilon', def: 'A tiny number (1e−8) to avoid dividing by zero' },
          ],
          syntax: [
            { sym: String.raw`\beta_1, \beta_2`, say: String.raw`Read "beta one, beta two": two separate decay rates, one for the gradient average and one for the squared-gradient average.` },
            { sym: String.raw`\mathbf{g}_t^2`, say: String.raw`Read "g sub t, squared": square each gradient entry separately (an element-wise square, not a dot product).` },
            { sym: String.raw`\beta_1^t`, say: String.raw`Read "beta one to the power t": here the t is an exponent, a step count, so \(0.9^t\) shrinks towards 0 as training goes on.` },
            { sym: String.raw`\hat{\mathbf{m}}_t`, say: String.raw`Read "m hat sub t": the bias-corrected version of \(\mathbf{m}_t\).` },
            { sym: String.raw`\frac{\hat{\mathbf{m}}_t}{\sqrt{\hat{\mathbf{v}}_t} + \epsilon}`, say: String.raw`Read "m hat over the square root of v hat, plus epsilon": a smoothed gradient divided by a typical gradient size, per parameter.` },
          ],
          worked: {
            title: String.raw`Two Adam steps for one parameter`,
            steps: [
              String.raw`Settings: \(\eta = 0.001\), \(\beta_1 = 0.9\), \(\beta_2 = 0.999\), \(m_0 = v_0 = 0\). Gradients \(g_1 = 0.5\), \(g_2 = 0.3\).`,
              String.raw`Step 1: \(m_1 = 0.1(0.5) = 0.05\), \(v_1 = 0.001(0.25) = 0.00025\).`,
              String.raw`Bias correction: \(\hat{m}_1 = 0.05/(1 - 0.9) = 0.5\), \(\hat{v}_1 = 0.00025/(1 - 0.999) = 0.25\). Update \(= 0.001 \times 0.5/\sqrt{0.25} = 0.001\).`,
              String.raw`Step 2: \(m_2 = 0.9(0.05) + 0.1(0.3) = 0.075\), \(v_2 = 0.999(0.00025) + 0.001(0.09) = 0.00033975\).`,
              String.raw`\(\hat{m}_2 = 0.075/(1 - 0.81) = 0.3947\), \(\hat{v}_2 = 0.00033975/(1 - 0.998001) = 0.16996\), \(\sqrt{\hat{v}_2} = 0.4123\).`,
              String.raw`Update \(= 0.001 \times 0.3947/0.4123 = 0.001 \times 0.957 = 0.000957\).`,
            ],
            answer: String.raw`Each step moves the parameter by roughly \(\eta = 0.001\) (0.00100, then 0.00096), however large the raw gradient is; if \(g_1\) had been 50 rather than 0.5 the first step would still be 0.001. That is the per-parameter step size normalising itself.`,
          },
          caption: 'Adam (Kingma and Ba, 2015). Dividing by the root of the squared-gradient average gives every parameter its own step size: big steps where gradients are small and steady, small steps where they are large. The hat terms correct the bias from starting the averages at zero.',
        },
        {
          t: 'code',
          title: 'Gradient descent for linear regression in NumPy',
          code: String.raw`import numpy as np

X = np.random.rand(100, 1) * 10
y = 1.5 + 0.8 * X[:, 0] + np.random.randn(100)

w, b, lr = 0.0, 0.0, 0.01
for epoch in range(2000):
    y_hat = w * X[:, 0] + b
    error = y_hat - y
    grad_w = 2 * np.mean(error * X[:, 0])   # dL/dw
    grad_b = 2 * np.mean(error)             # dL/db
    w -= lr * grad_w
    b -= lr * grad_b

print(w, b)   # close to 0.8 and 1.5`,
        },
        {
          t: 'plot',
          title: 'A common learning-rate schedule: warm-up, then cosine decay',
          x: [0, 100],
          y: [0, 1.1],
          xLabel: 'training progress (%)',
          yLabel: 'learning rate (× max)',
          curves: [{ f: (t: number) => (t < 5 ? t / 5 : 0.5 * (1 + Math.cos((Math.PI * (t - 5)) / 95))) }],
          caption: 'Large models usually ramp the learning rate up for the first few percent of training, then lower it gradually so the final steps settle into a good minimum.',
        },
        { t: 'callout', tone: 'fact', title: 'An old idea', text: 'Gradient descent was described by Augustin-Louis Cauchy in 1847, for solving astronomical equations. Stochastic approximation, the root of SGD, came from Robbins and Monro in 1951. Training a model with billions of parameters still uses essentially these ideas.' },
      ],
    },
  ],
  sources: ['Cauchy, A. (1847). Méthode générale pour la résolution des systèmes d’équations simultanées. *Comptes Rendus*, 25, 536–538.', 'Robbins, H., & Monro, S. (1951). A stochastic approximation method. *Annals of Mathematical Statistics*, 22(3), 400–407.', 'Kingma, D. P., & Ba, J. (2015). Adam: A method for stochastic optimization. *ICLR*.', 'Ruder, S. (2016). An overview of gradient descent optimization algorithms. *arXiv:1609.04747*.'],
  related: ['ai/foundations/maths', 'ai/neural/backprop', 'ai/neural/training'],
}

export default guide
