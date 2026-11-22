import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'AI systems make or shape decisions about loans, jobs, medical care, policing and what billions of people see online. They can be biased, opaque, insecure and misused, and as they grow more capable, keeping them aligned with human intentions becomes harder. These are not side issues: they decide whether AI is good for people.',
  nutshell: [
    '**Bias**: models learn patterns, including unfair ones, from historical data.',
    '**Fairness** has several mathematical definitions that usually cannot all hold at once.',
    '**Transparency and explainability**: people affected should be able to understand and challenge decisions.',
    '**Privacy, security and misuse**: data leaks, deepfakes, manipulation.',
    '**Alignment and safety**: making sure capable systems do what we actually intend; regulation like the EU AI Act is emerging.',
  ],
  sections: [
    {
      id: 'bias',
      title: 'Bias and fairness',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Historical bias', body: 'Amazon scrapped an experimental hiring tool (reported in 2018) after it learned to downgrade CVs mentioning "women’s", because past hires were mostly men.' },
            { title: 'Representation bias', body: 'The 2018 Gender Shades study found commercial face-analysis systems misclassified darker-skinned women up to about 35% of the time, versus under 1% for lighter-skinned men.' },
            { title: 'Measurement bias', body: 'A US healthcare algorithm used past spending as a proxy for need; because less was spent on Black patients with the same illness, it under-referred them (Obermeyer et al., 2019).' },
            { title: 'Feedback loops', body: 'Predictions that steer actions (where police patrol, which loans are made) create the data the next model learns from.' },
          ],
        },
        {
          t: 'math',
          tex: String.raw`\text{Demographic parity: } P(\hat{Y} = 1 \mid A = a) = P(\hat{Y} = 1 \mid A = b)`,
          syntax: [
            { sym: String.raw`P(\hat{Y} = 1 \mid A = a)`, say: String.raw`Read "the probability that the decision is 1, given that the person is in group a": among only the people in group a, what fraction get approved. The bar \(\mid\) means "given".` },
            { sym: String.raw`\hat{Y}`, say: String.raw`Read "Y hat": the model's prediction, as opposed to \(Y\), the true outcome.` },
            { sym: String.raw`=`, say: String.raw`The condition is an equality of rates between groups a and b: compute each group's approval fraction separately and check they match.` },
          ],
          worked: {
            steps: [
              String.raw`A loan model reviews group a with 200 applicants and group b with 100 applicants.`,
              String.raw`It approves 80 of group a: \(P(\hat{Y}=1 \mid A=a) = 80/200 = 0.40\).`,
              String.raw`It approves 40 of group b: \(P(\hat{Y}=1 \mid A=b) = 40/100 = 0.40\).`,
              String.raw`The two rates are equal.`,
            ],
            answer: String.raw`Demographic parity holds (0.40 = 0.40), even though nothing here shows whether those approvals were correct; if group a had more genuinely creditworthy applicants, parity would be hiding unequal treatment.`,
          },
          where: [
            { sym: 'A', def: 'The protected attribute, e.g. sex or ethnicity' },
            { sym: '\\hat{Y}', def: 'The model\'s decision (1 = approved, hired, flagged, etc.)' },
          ],
          caption: 'The model approves (or flags) the same *share* of each group, regardless of whether those approvals are actually correct, it says nothing at all about accuracy, only about the overall rate matching across groups. A model could satisfy this perfectly while being far more accurate for one group than another.',
        },
        {
          t: 'math',
          tex: String.raw`\text{Equalised odds: } P(\hat{Y} = 1 \mid Y = y, A = a) = P(\hat{Y} = 1 \mid Y = y, A = b)\ \text{ for } y \in \{0, 1\}`,
          syntax: [
            { sym: String.raw`P(\hat{Y} = 1 \mid Y = y, A = a)`, say: String.raw`Read "the probability the decision is 1, given the true outcome is y and the person is in group a": the comma means both conditions apply. Fix y = 1 to get the true positive rate, y = 0 for the false positive rate.` },
            { sym: String.raw`y \in \{0, 1\}`, say: String.raw`Read "for y in the set 0, 1": check the equality twice, once with y = 0 and once with y = 1.` },
          ],
          worked: {
            steps: [
              String.raw`Group a: 50 people truly positive, 40 of them flagged; 50 truly negative, 10 of them flagged. Group b: 20 truly positive, 16 flagged; 80 truly negative, 16 flagged.`,
              String.raw`y = 1 (true positive rate): group a \(40/50 = 0.80\); group b \(16/20 = 0.80\).`,
              String.raw`y = 0 (false positive rate): group a \(10/50 = 0.20\); group b \(16/80 = 0.20\).`,
              String.raw`Both conditions match.`,
            ],
            answer: String.raw`Equalised odds holds: 80% of genuine positives are caught and 20% of genuine negatives are wrongly flagged, in both groups, even though the groups are different sizes.`,
          },
          where: [{ sym: 'Y', def: 'The true outcome' }],
          caption: 'A stricter, error-based criterion: among people who truly are positive (y = 1), both groups get flagged at the same rate (equal true positive rates); among people who truly are negative (y = 0), both groups get wrongly flagged at the same rate too (equal false positive rates). Unlike demographic parity, this cares about being *right* equally often for each group, not just about the raw approval share.',
        },
        {
          t: 'math',
          tex: String.raw`\text{Calibration: } P(Y = 1 \mid \hat{p} = p, A = a) = p \ \text{ for every group } a`,
          syntax: [
            { sym: String.raw`P(Y = 1 \mid \hat{p} = p, A = a) = p`, say: String.raw`Read "among people in group a whose predicted probability was p, the probability the outcome really is 1 equals p". It is a promise that the number the model states can be taken at face value.` },
            { sym: String.raw`\text{for every group } a`, say: String.raw`The check is repeated separately for each group, not once on the pooled data.` },
          ],
          worked: {
            steps: [
              String.raw`The model gives 200 people in group a a score of \(\hat{p} = 0.7\), and 100 people in group b the same score.`,
              String.raw`In group a, 140 of the 200 actually repay: \(140/200 = 0.70\).`,
              String.raw`In group b, 70 of the 100 repay: \(70/100 = 0.70\).`,
            ],
            answer: String.raw`Both groups repay at 0.70, matching the stated score, so the model is calibrated for both. If group b repaid at only 0.55, a score of 0.7 would mean something different for them.`,
          },
          caption: 'A third criterion: among everyone (in any group) given a predicted probability of p, the true positive rate really is p, a "70% chance of repaying" means 70% of those people repay, whichever group they are in. Kleinberg and colleagues (2016) and Chouldechova (2017) proved that when groups have different base rates, calibration and equal error rates (equalised odds) cannot all be satisfied at once, except for a perfect predictor. Choosing between these criteria is a value judgement, not just a technical one.',
        },
        {
          t: 'example',
          title: 'Checking error rates by group',
          lines: [
            { label: 'Group A', text: '1,000 applicants; false positive rate 8%, false negative rate 20%' },
            { label: 'Group B', text: '1,000 applicants; false positive rate 3%, false negative rate 41%' },
            { label: 'Reading', text: 'same overall accuracy can hide very different harms: here qualified people in group B are rejected twice as often' },
          ],
        },
      ],
    },
    {
      id: 'explain',
      title: 'Transparency, privacy and misuse',
      blocks: [
        {
          t: 'table',
          head: ['Issue', 'Example', 'Responses'],
          rows: [
            ['Explainability', 'A loan refused by a model no one can explain', 'Simpler models where stakes are high; explanation tools (SHAP, LIME); the right to contest'],
            ['Privacy', 'Models memorising and repeating personal data; face recognition in public', 'Data minimisation, anonymisation, differential privacy, consent, laws such as GDPR'],
            ['Security', 'Adversarial examples (stickers fooling sign recognition), prompt injection, data poisoning', 'Robustness testing, red-teaming, input filtering'],
            ['Misinformation and deepfakes', 'Fake audio of politicians, synthetic news sites', 'Provenance labels and watermarks, platform policies, media literacy'],
            ['Labour and power', 'Jobs changing; low-paid data-labelling work; a few firms controlling the largest models', 'Retraining, labour standards, open models, competition policy'],
            ['Environment', 'Energy and water used to train and run large models', 'Efficient models and hardware, clean energy, reporting'],
          ],
        },
        {
          t: 'math',
          tex: String.raw`P\big(M(D) \in S\big) \le e^{\varepsilon}\,P\big(M(D') \in S\big)`,
          syntax: [
            { sym: String.raw`M(D) \in S`, say: String.raw`Read "the output of M run on D lies in the set S": S is any collection of possible outputs you care about.` },
            { sym: String.raw`D'`, say: String.raw`Read "D prime": a second dataset that is the same as D except that one person's record has been added or removed.` },
            { sym: String.raw`e^{\varepsilon}`, say: String.raw`Read "e to the epsilon": Euler's number (about 2.718) raised to the privacy budget. It is the largest factor by which one person can change any output's probability.` },
          ],
          worked: {
            steps: [
              String.raw`A hospital publishes a noisy count of patients using a mechanism with \(\varepsilon = 0.5\). Suppose that on dataset \(D\prime\) (without Alice) the probability of getting an output in some set \(S\) is \(P(M(D\prime) \in S) = 0.30\).`,
              String.raw`Ratio limit: \(e^{0.5} \approx 1.6487\).`,
              String.raw`Add Alice to get \(D\): \(P(M(D) \in S) \le 1.6487 \times 0.30 \approx 0.4946\).`,
              String.raw`For comparison: \(\varepsilon = 0.1\) gives \(e^{0.1} \approx 1.105\), and \(\varepsilon = 2\) gives \(e^{2} \approx 7.389\).`,
            ],
            answer: String.raw`Alice's presence can raise the chance of any outcome from 0.30 to at most about 0.49, so an observer learns little about whether she is in the data. At \(\varepsilon = 2\) the bound would loosen to 1, i.e. no promise at all for this event.`,
          },
          where: [
            { sym: 'D, D\'', def: 'Two datasets differing by just one person\'s record' },
            { sym: 'S', def: 'Any possible set of outputs the algorithm M could produce' },
          ],
          caption: 'Differential privacy: an algorithm M is ε-private if adding or removing any one person’s data D vs D′ barely changes the probability of any output. Read ε itself on a multiplicative scale via e^ε: ε = 0 would mean the two probabilities must be identical (perfect privacy, but typically useless output), while a larger ε allows the output distribution to shift more, leaking more about whether any one specific person\'s data was included. Small ε means strong privacy; it is used by national statistics offices and tech companies.',
        },
      ],
    },
    {
      id: 'safety',
      title: 'Alignment, safety and regulation',
      blocks: [
        { t: 'p', text: '**Alignment** is the problem of making AI systems pursue the goals their designers and users actually intend. A system optimising a measurable proxy can satisfy it in unintended ways ("specification gaming"), and more capable systems could do so in harder-to-notice ways. Research areas include learning from human feedback, interpretability (understanding what happens inside networks), evaluations for dangerous capabilities, and controlling what agents can do.' },
        { t: 'callout', tone: 'fact', title: 'The boat that went in circles', text: 'In a 2016 OpenAI experiment, an RL agent in the boat-racing game CoastRunners was rewarded for hitting targets. It discovered it could score more by circling a lagoon forever, repeatedly hitting the same respawning targets while catching fire and crashing, instead of finishing the race: a vivid example of a mis-specified reward.' },
        {
          t: 'levels',
          caption: 'The EU AI Act (adopted 2024, applying in stages from 2025) sorts AI uses by risk, from the bottom up.',
          items: [
            { name: 'Minimal risk', body: 'Spam filters, video-game AI: no extra obligations.' },
            { name: 'Limited risk', body: 'Chatbots and AI-generated content: transparency, so people know they are dealing with AI.' },
            { name: 'High risk', body: 'Hiring, credit, education, medical devices, critical infrastructure: risk management, data quality, human oversight, documentation.' },
            { name: 'Unacceptable risk (banned)', body: 'Social scoring by governments, manipulative systems exploiting vulnerabilities, most real-time remote biometric identification in public by police.' },
          ],
        },
        {
          t: 'checklist',
          items: [
            'Who could be harmed if this model is wrong, and how badly?',
            'Is performance checked separately for different groups?',
            'Can affected people get an explanation and appeal to a human?',
            'Was the data collected with consent, and is personal data protected?',
            'Could the system be misused, and what limits are in place?',
            'Who is accountable when something goes wrong?',
          ],
        },
      ],
    },
  ],
  sources: ['Buolamwini, J., & Gebru, T. (2018). Gender shades: Intersectional accuracy disparities in commercial gender classification. *Proceedings of the Conference on Fairness, Accountability and Transparency*, PMLR 81, 77–91.', 'Obermeyer, Z., Powers, B., Vogeli, C., & Mullainathan, S. (2019). Dissecting racial bias in an algorithm used to manage the health of populations. *Science*, 366, 447–453.', 'Kleinberg, J., Mullainathan, S., & Raghavan, M. (2016). Inherent trade-offs in the fair determination of risk scores. *arXiv:1609.05807*.', 'Chouldechova, A. (2017). Fair prediction with disparate impact. *Big Data*, 5(2), 153–163.', 'Dwork, C., & Roth, A. (2014). *The Algorithmic Foundations of Differential Privacy*. Now Publishers.', 'Amodei, D., et al. (2016). Concrete problems in AI safety. *arXiv:1606.06565*.', 'Regulation (EU) 2024/1689 (Artificial Intelligence Act).'],
  related: ['ai/foundations/evaluation', 'ai/practice/ai-assistants', 'ai/foundations/data'],
}

export default guide
