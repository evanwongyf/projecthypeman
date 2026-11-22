import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Image generators like Stable Diffusion, DALL·E and Midjourney turn a sentence into a picture. Most today are **diffusion models**: trained to remove noise, they generate by starting from pure static and denoising step by step, steered by the text. Before them, **GANs** and **VAEs** led the way.',
  nutshell: [
    '**Forward process**: gradually add Gaussian noise until the image is pure noise.',
    '**Training**: a network learns to predict the noise that was added.',
    '**Generation**: start from noise and repeatedly subtract the predicted noise.',
    'Text conditioning plus **classifier-free guidance** steers the image towards the prompt.',
    '**GANs** pit a generator against a discriminator; **VAEs** learn a smooth latent space.',
  ],
  sections: [
    {
      id: 'lab',
      title: 'Watch noise take over',
      blocks: [{ t: 'ai-viz', viz: 'diffusion' }],
    },
    {
      id: 'maths',
      title: 'The maths of diffusion',
      blocks: [
        {
          t: 'math',
          tex: String.raw`q(\mathbf{x}_t \mid \mathbf{x}_{t-1}) = \mathcal{N}\big(\sqrt{1 - \beta_t}\,\mathbf{x}_{t-1},\ \beta_t I\big)`,
          syntax: [
            { sym: String.raw`q(\mathbf{x}_t \mid \mathbf{x}_{t-1})`, say: String.raw`Read "q of x sub t, given x sub t minus 1". The bar \(\mid\) means "given": this is the distribution of the noisier image \(\mathbf{x}_t\) when the previous image \(\mathbf{x}_{t-1}\) is known. The subscript is the step number.` },
            { sym: String.raw`\mathcal{N}(\mu,\ \beta_t I)`, say: String.raw`Read "a normal (Gaussian) distribution with mean \(\mu\) and variance \(\beta_t\) times the identity". It says: draw a random sample centred on the mean, with spread \(\sqrt{\beta_t}\) in every pixel independently (\(I\) is the identity matrix, meaning no correlation between pixels).` },
            { sym: String.raw`\sqrt{1-\beta_t}\,\mathbf{x}_{t-1}`, say: String.raw`The mean of that distribution: multiply every pixel of the previous image by \(\sqrt{1-\beta_t}\), a number just under 1, so the image is shrunk slightly before noise is added.` },
          ],
          worked: {
            steps: [
              String.raw`Take one pixel with value \(x_{t-1} = 0.8\) at a late step where \(\beta_t = 0.02\) (the largest value in the original schedule).`,
              String.raw`Shrink factor: \(\sqrt{1 - 0.02} = \sqrt{0.98} \approx 0.98995\).`,
              String.raw`Mean of the new pixel: \(0.98995 \times 0.8 \approx 0.79196\).`,
              String.raw`Noise standard deviation: \(\sqrt{\beta_t} = \sqrt{0.02} \approx 0.14142\).`,
              String.raw`Suppose the random draw is \(\epsilon = 0.5\) (half a standard deviation up). Then \(x_t = 0.79196 + 0.14142 \times 0.5 \approx 0.79196 + 0.07071\).`,
            ],
            answer: String.raw`\(x_t \approx 0.8627\): the pixel was nudged down by the shrink (0.8 to 0.792) and then pushed up by this particular noise draw, a net change of only about 0.06 in one step.`,
          },
          where: [
            { sym: '\\mathbf{x}_{t-1}, \\mathbf{x}_t', def: 'The image before and after one forward noising step' },
            { sym: '\\beta_t', def: 'How much noise is injected at step t' },
          ],
          caption: 'Each forward step shrinks the image slightly and adds a little noise of variance β_t (rising from 0.0001 to 0.02 over 1,000 steps in the original DDPM). Shrinking by √(1−β_t) matters as much as the noise added: it keeps the total "energy" of signal plus noise roughly constant, so after enough steps x_t is indistinguishable from pure noise rather than an ever-growing blur.',
        },
        {
          t: 'math',
          tex: String.raw`\mathbf{x}_t = \sqrt{\bar{\alpha}_t}\,\mathbf{x}_0 + \sqrt{1 - \bar{\alpha}_t}\,\boldsymbol{\epsilon}, \qquad \bar{\alpha}_t = \prod_{s=1}^{t}(1 - \beta_s), \qquad \boldsymbol{\epsilon} \sim \mathcal{N}(0, I)`,
          syntax: [
            { sym: String.raw`\prod_{s=1}^{t}(1-\beta_s)`, say: String.raw`Read "the product from s equals 1 to t of one minus beta sub s": work out \(1-\beta_s\) for s = 1, 2, ... t and multiply all the results together (the product sign \(\prod\) is the multiplying version of \(\sum\)).` },
            { sym: String.raw`\bar{\alpha}_t`, say: String.raw`Read "alpha bar sub t". The bar means "cumulative": it is the running product of the per-step keep-fractions, not a single step's value.` },
            { sym: String.raw`\boldsymbol{\epsilon} \sim \mathcal{N}(0, I)`, say: String.raw`Read "epsilon is distributed as a standard normal". The wavy \(\sim\) means "is drawn from": roll fresh Gaussian noise with mean 0 and variance 1 for every pixel.` },
          ],
          worked: {
            steps: [
              String.raw`Use a toy schedule of three steps with \(\beta_1 = 0.1,\ \beta_2 = 0.2,\ \beta_3 = 0.3\), one pixel \(x_0 = 0.8\) and noise draw \(\epsilon = -0.5\).`,
              String.raw`\(\bar{\alpha}_3 = (1-0.1)(1-0.2)(1-0.3) = 0.9 \times 0.8 \times 0.7 = 0.504\).`,
              String.raw`Signal weight: \(\sqrt{0.504} \approx 0.7099\). Noise weight: \(\sqrt{1 - 0.504} = \sqrt{0.496} \approx 0.7043\).`,
              String.raw`Blend: \(x_3 = 0.7099 \times 0.8 + 0.7043 \times (-0.5) \approx 0.5679 - 0.3521\).`,
            ],
            answer: String.raw`\(x_3 \approx 0.2158\): about half the original signal survives, so the pixel has been dragged a long way from 0.8 in a single jump, with no need to simulate steps 1 and 2.`,
          },
          where: [
            { sym: '\\mathbf{x}_0', def: 'The original, clean image' },
            { sym: '\\bar{\\alpha}_t', def: 'The fraction of the original signal still remaining by step t' },
            { sym: '\\boldsymbol{\\epsilon}', def: 'Fresh random noise, the same shape as the image' },
          ],
          caption: 'Because sums of Gaussians are Gaussian, you can jump straight to any step t without simulating every step in between. This is what the lab computes: the signal weight √ᾱ_t falls from 1 towards 0 as the noise weight √(1−ᾱ_t) rises towards 1, so x_t is literally a weighted blend of "the real image" and "pure static", and t is simply how far along that blend you are.',
        },
        {
          t: 'math',
          tex: String.raw`\mathcal{L} = \mathbb{E}_{\mathbf{x}_0,\,t,\,\boldsymbol{\epsilon}}\Big[\big\lVert\boldsymbol{\epsilon} - \boldsymbol{\epsilon}_\theta(\mathbf{x}_t, t)\big\rVert^2\Big]`,
          syntax: [
            { sym: String.raw`\mathbb{E}_{\mathbf{x}_0,\,t,\,\boldsymbol{\epsilon}}[\cdots]`, say: String.raw`Read "the expected value over x-zero, t and epsilon of ...": repeat the experiment many times with a random image, random step and random noise, work out the bracketed quantity each time, and average the results.` },
            { sym: String.raw`\lVert\mathbf{v}\rVert^2`, say: String.raw`Read "the squared norm of v": square every entry of the vector and add them up. It is the squared length, so a bigger miss in any pixel costs much more.` },
            { sym: String.raw`\boldsymbol{\epsilon}_\theta(\mathbf{x}_t, t)`, say: String.raw`Read "epsilon theta of x t and t": the network (parameters \(\theta\)) is a function you call with the noisy image and step number, and it returns its predicted noise.` },
          ],
          worked: {
            steps: [
              String.raw`Take a tiny image of 2 pixels. The true noise mixed in was \(\boldsymbol{\epsilon} = (0.5,\ -1.0)\); the network predicts \(\boldsymbol{\epsilon}_\theta = (0.3,\ -0.6)\).`,
              String.raw`Difference: \(\boldsymbol{\epsilon} - \boldsymbol{\epsilon}_\theta = (0.2,\ -0.4)\).`,
              String.raw`Square each entry: \(0.2^2 = 0.04\) and \((-0.4)^2 = 0.16\).`,
              String.raw`Add: \(0.04 + 0.16 = 0.20\). That is the loss for this one sample; training averages it over many random samples.`,
            ],
            answer: String.raw`Loss \(= 0.20\): a perfect prediction would give 0, so the network is close but under-estimates the size of the noise in both pixels.`,
          },
          where: [{ sym: '\\boldsymbol{\\epsilon}_\\theta(\\mathbf{x}_t, t)', def: 'The network\'s guess at exactly which noise was added, given the noisy image and the step number' }],
          caption: 'The training objective (Ho et al., 2020): pick a real image, a random step and random noise; make the noisy image; train the network ε_θ (usually a U-Net or transformer) to predict the noise. That is all. A smaller loss means the network\'s guessed noise is closer to the real noise that was mixed in, and since generation (below) works by subtracting that guess, a model that predicts noise well is, by construction, a model that can denoise well.',
        },
        {
          t: 'flow',
          title: 'Generating an image',
          nodes: [
            { label: 'Pure noise x_T', tone: 'data' },
            { label: 'Predict noise ε_θ(x_t, t, text)', tone: 'model' },
            { label: 'Remove a bit of it → x_{t−1}', tone: 'process' },
            { label: 'Image x₀', tone: 'output' },
          ],
          loop: 'repeat for each step, from t = T down to 1 (often 20–50 steps with fast samplers)',
        },
        {
          t: 'math',
          tex: String.raw`\hat{\boldsymbol{\epsilon}} = \boldsymbol{\epsilon}_\theta(\mathbf{x}_t, \varnothing) + w\,\big(\boldsymbol{\epsilon}_\theta(\mathbf{x}_t, c) - \boldsymbol{\epsilon}_\theta(\mathbf{x}_t, \varnothing)\big)`,
          syntax: [
            { sym: String.raw`\hat{\boldsymbol{\epsilon}}`, say: String.raw`Read "epsilon hat". The hat means "an estimate": this is the final noise prediction actually used for denoising, after guidance has been applied.` },
            { sym: String.raw`\varnothing`, say: String.raw`The empty-set symbol, used here as "no prompt": feed the network a blank text instead of \(c\).` },
            { sym: String.raw`\boldsymbol{\epsilon}_\theta(\mathbf{x}_t, c) - \boldsymbol{\epsilon}_\theta(\mathbf{x}_t, \varnothing)`, say: String.raw`Subtract the unprompted noise guess from the prompted one. The difference points in the direction the prompt pulls, and \(w\) then scales it.` },
          ],
          worked: {
            steps: [
              String.raw`Take one pixel. The unprompted prediction is \(\epsilon_\theta(x_t, \varnothing) = 0.2\) and the prompted one is \(\epsilon_\theta(x_t, c) = 0.5\). Use guidance scale \(w = 7.5\).`,
              String.raw`Direction the prompt pulls: \(0.5 - 0.2 = 0.3\).`,
              String.raw`Exaggerate it: \(7.5 \times 0.3 = 2.25\).`,
              String.raw`Add back to the unprompted guess: \(\hat{\epsilon} = 0.2 + 2.25 = 2.45\).`,
            ],
            answer: String.raw`\(\hat{\epsilon} = 2.45\), nearly five times the plain prompted prediction of 0.5: the denoiser is told to remove far more of whatever the prompt does not explain. With \(w = 1\) you would get exactly 0.5.`,
          },
          where: [
            { sym: '\\varnothing', def: 'No text prompt at all (unconditional)' },
            { sym: 'c', def: 'The text prompt' },
            { sym: 'w', def: 'The guidance scale: how hard to push towards the prompt' },
          ],
          caption: 'Classifier-free guidance: predict the noise with and without the text c, then exaggerate the difference by a guidance scale w (often 5–10). The bracketed term is "the direction the prompt pulls the image in"; adding w times more of it than the plain conditional prediction would is deliberately overshooting towards the prompt. Higher w follows the prompt more closely at some cost to variety and realism, push it too far and images start to look oversaturated or artefact-ridden.',
        },
        { t: 'callout', tone: 'note', title: 'Latent diffusion', text: 'Stable Diffusion runs the whole process not on pixels but in a compressed "latent" space produced by an autoencoder (a 512 × 512 image becomes 64 × 64 × 4), which makes it cheap enough to run on a home graphics card.' },
      ],
    },
    {
      id: 'others',
      title: 'GANs and VAEs',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\min_G\ \max_D\ \ \mathbb{E}_{\mathbf{x}\sim p_{\text{data}}}\big[\log D(\mathbf{x})\big] + \mathbb{E}_{\mathbf{z}\sim p(\mathbf{z})}\big[\log\big(1 - D(G(\mathbf{z}))\big)\big]`,
          syntax: [
            { sym: String.raw`\min_G\ \max_D`, say: String.raw`Read "minimise over G, maximise over D": two players with opposite goals. D tries to make the expression as big as possible; G tries to make it as small as possible.` },
            { sym: String.raw`\mathbb{E}_{\mathbf{x}\sim p_{\text{data}}}[\cdot]`, say: String.raw`Read "the expected value when x is drawn from the data distribution": average the bracket over real training images.` },
            { sym: String.raw`\log D(\mathbf{x})`, say: String.raw`The natural log of D's score. It is 0 when D is certain (score 1) and becomes very negative as D's score for the right answer drops towards 0.` },
          ],
          worked: {
            steps: [
              String.raw`Suppose for one real image D outputs \(D(x) = 0.9\), and for one fake image D outputs \(D(G(z)) = 0.2\).`,
              String.raw`Real term: \(\log 0.9 \approx -0.1054\).`,
              String.raw`Fake term: \(\log(1 - 0.2) = \log 0.8 \approx -0.2231\).`,
              String.raw`Sum: \(-0.1054 + (-0.2231) \approx -0.3285\).`,
              String.raw`At the equilibrium D cannot tell them apart and outputs 0.5 for everything: \(\log 0.5 + \log 0.5 \approx -1.3863\).`,
            ],
            answer: String.raw`D is currently winning (\(-0.33\) is much higher than the equilibrium value \(-1.39\)). G's updates will push the fake score \(D(G(z))\) upwards, which pulls the total back down towards \(-1.39\).`,
          },
          where: [
            { sym: 'D(\\mathbf{x})', def: 'The discriminator\'s estimate that x is real, between 0 and 1' },
            { sym: 'G(\\mathbf{z})', def: 'The generator\'s image, built from random noise z' },
          ],
          caption: 'A GAN: the generator G turns random noise z into images; the discriminator D tries to tell real from fake. D wants both terms large (confidently right about both real and fake images); G wants the second term small, meaning D is fooled into giving fakes a high score. Each improves by competing with the other, like a forger and a detective, and training is considered to be working when D can no longer do better than a coin flip at telling them apart.',
        },
        {
          t: 'math',
          tex: String.raw`\log p(\mathbf{x}) \ge \mathbb{E}_{q(\mathbf{z}\mid\mathbf{x})}\big[\log p(\mathbf{x}\mid\mathbf{z})\big] - \mathrm{KL}\big(q(\mathbf{z}\mid\mathbf{x})\,\Vert\,p(\mathbf{z})\big)`,
          syntax: [
            { sym: String.raw`\ge`, say: String.raw`Read "is greater than or equal to": the left side is at least as big as the right side, so the right side is a guaranteed lower bound that you can push upwards.` },
            { sym: String.raw`q(\mathbf{z}\mid\mathbf{x})`, say: String.raw`Read "q of z given x": the encoder's distribution over latent codes for a particular image.` },
            { sym: String.raw`\mathrm{KL}(q\,\Vert\,p)`, say: String.raw`Read "the KL divergence from q to p": a non-negative number measuring how different two distributions are (0 means identical). The double bar is just a separator, not a division.` },
          ],
          worked: {
            steps: [
              String.raw`Take one image whose decoder log-likelihood is \(\mathbb{E}_q[\log p(x \mid z)] = -2.0\). The encoder says \(q(z \mid x) = \mathcal{N}(\mu = 1,\ \sigma = 0.5)\) and the prior is \(p(z) = \mathcal{N}(0, 1)\).`,
              String.raw`For two Gaussians, \(\mathrm{KL} = \tfrac{1}{2}(\sigma^2 + \mu^2 - 1 - \ln\sigma^2)\).`,
              String.raw`Substitute: \(\tfrac{1}{2}(0.25 + 1 - 1 - \ln 0.25) = \tfrac{1}{2}(0.25 + 1.3863) \approx 0.8181\).`,
              String.raw`Bound: \(-2.0 - 0.8181 = -2.8181\).`,
            ],
            answer: String.raw`The lower bound on \(\log p(x)\) is about \(-2.82\). Moving \(\mu\) to 0 and \(\sigma\) to 1 would make the KL zero and raise the bound to \(-2.0\), but the encoder would then ignore the image, which hurts the reconstruction term.`,
          },
          where: [
            { sym: 'q(\\mathbf{z}\\mid\\mathbf{x})', def: 'The encoder: compresses image x into a latent code z' },
            { sym: 'p(\\mathbf{x}\\mid\\mathbf{z})', def: 'The decoder: reconstructs an image from a latent code' },
          ],
          caption: 'A VAE maximises this lower bound: reconstruct the input well (first term) while keeping the latent codes close to a simple normal distribution (second term, subtracted as a penalty), so that sampling new codes gives sensible new images. The two terms are in tension, reconstructing perfectly would let codes spread out however they like, but the KL term drags them back towards a tidy, known distribution you can actually sample new points from later.',
        },
        {
          t: 'table',
          head: ['Model', 'How it generates', 'Strengths', 'Weaknesses'],
          rows: [
            ['GAN (2014)', 'One pass: noise → generator → image', 'Sharp images; very fast', 'Unstable training; can collapse to few outputs'],
            ['VAE (2013)', 'Sample a latent code, decode', 'Stable; smooth latent space', 'Often blurry'],
            ['Diffusion (2020)', 'Many denoising steps', 'Top quality and variety; stable training', 'Slower to sample (improving fast)'],
          ],
        },
        { t: 'callout', tone: 'fact', title: 'Invented in a bar', text: 'Ian Goodfellow has said he came up with GANs in 2014 during an argument with friends at a Montreal bar about how to generate images, then went home and coded it that night. It worked the first time.' },
        { t: 'callout', tone: 'warn', title: 'Deepfakes and copyright', text: 'The same tools make convincing fake photos and videos of real people, and models trained on artists’ work without permission have prompted lawsuits and debate. Labelling and watermarking schemes, such as content credentials, aim to show when an image was AI-generated.' },
      ],
    },
  ],
  sources: ['Ho, J., Jain, A., & Abbeel, P. (2020). Denoising diffusion probabilistic models. *NeurIPS*.', 'Rombach, R., et al. (2022). High-resolution image synthesis with latent diffusion models. *CVPR*.', 'Ho, J., & Salimans, T. (2022). Classifier-free diffusion guidance. *arXiv:2207.12598*.', 'Goodfellow, I., et al. (2014). Generative adversarial nets. *NeurIPS*.', 'Kingma, D. P., & Welling, M. (2014). Auto-encoding variational Bayes. *ICLR*.'],
  related: ['ai/generative/llms', 'ai/neural/cnn', 'ai/practice/ethics'],
}

export default guide
