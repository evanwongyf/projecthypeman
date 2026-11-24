import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Half of all debates are arguments about how likely something is, and they are usually conducted by both sides asserting that their chain of events is plausible. There is a better way, and it does not require saying the word "Bayesian" in front of a judge. It requires three habits: state the base rate, ask what the evidence would look like if the claim were false, and never let a four-link chain be priced like a one-link one.',
  nutshell: [
    'Start from the **base rate**. A claim that is rare before the evidence needs strong evidence to become likely after it.',
    'Evidence is worth its **likelihood ratio**: how much more likely it is if the claim is true than if it is false. A ratio near 1 moves nothing.',
    'Probabilities **multiply** down a chain. Four steps at 70% is 24%, not 70%.',
    'The question that kills weak evidence: **what would we see if the opposite were true?**',
    'Conjunction is seductive: a detailed story feels more likely and is always less likely than the vaguer version of itself.',
    'Say all of this in English. "Their number would look the same either way" is a likelihood-ratio argument a lay judge will accept.',
  ],
  sections: [
    {
      id: 'baserate',
      title: 'Base rates',
      blocks: [
        { t: 'p', text: 'The commonest numerical error in debate rounds is quoting a conditional probability — the accuracy of a test, the share of cases with some feature — while ignoring how common the thing was in the first place. The correction is one line of arithmetic and it frequently reverses the conclusion.' },
        {
          t: 'math',
          tex: 'P(H \\mid E) = \\frac{P(E \\mid H)\\,P(H)}{P(E \\mid H)\\,P(H) + P(E \\mid \\lnot H)\\,P(\\lnot H)}',
          plain: 'The chance a claim is true after seeing some evidence depends on three things: how likely the evidence was if the claim is true, how likely it was anyway, and how common the claim was before you looked.',
          where: [
            { sym: 'P(H)', def: 'the base rate: how common the claim is before the evidence' },
            { sym: 'P(E \\mid H)', def: 'how likely the evidence is if the claim is true' },
            { sym: 'P(E \\mid \\lnot H)', def: 'how likely the same evidence is if the claim is false' },
          ],
          syntax: [
            { sym: 'P(A \\mid B)', say: 'say "the probability of A given B": how likely A is, in the world where B is true' },
            { sym: '\\lnot H', say: 'say "not H": the world in which the claim is false' },
          ],
          worked: {
            title: 'Security screening: a 99% accurate test for a 1-in-10,000 threat',
            steps: [
              'Base rate \\(P(H) = 0.0001\\). Sensitivity \\(P(E \\mid H) = 0.99\\). False positive rate \\(P(E \\mid \\lnot H) = 0.01\\).',
              'True positives per 100,000 people: \\(0.99 \\times 10 = 9.9\\).',
              'False positives: \\(0.01 \\times 99{,}990 \\approx 1000\\).',
              '\\(P(H \\mid E) = 9.9 / (9.9 + 1000)\\)',
            ],
            why: ['the figures the proposition quoted', 'the ten real cases, nearly all caught', 'the enormous number of innocent people flagged', 'divide the real ones by every flag raised'],
            answer: 'About 1%. Ninety-nine of every hundred people stopped are innocent — and that is the argument, not a quibble about the test.',
          },
          caption: 'This is the single most reusable piece of arithmetic in competitive debate: it appears in screening, policing, content moderation, fraud detection and medical motions.',
        },
        { t: 'callout', tone: 'tip', title: 'Say it in counts, not probabilities', text: 'Judges follow "out of 100,000 travellers, ten are threats and a thousand innocent people get stopped" far better than "the posterior is one per cent". Frequencies are understood; probabilities are nodded at. Research on risk communication finds the same thing with doctors and juries.' },
      ],
    },
    {
      id: 'lr',
      title: 'Likelihood ratios: which of your three numbers is worth saying',
      blocks: [
        { t: 'p', text: 'Evidence is only worth the **difference** it makes between the two worlds. The ratio of how likely it is if your claim is true, to how likely it is if your claim is false, is the whole value of a piece of evidence. Debaters routinely spend a minute on an impressive number with a ratio of 1.1 and ten seconds on an unremarkable one with a ratio of 5.' },
        { t: 'debate-lab', viz: 'bayes' },
        {
          t: 'table',
          head: ['Evidence', 'LR', 'What that means in a round'],
          rows: [
            ['"Experts warn that …"', '~1.1', 'Almost worthless. Experts warn about most things; it would look the same if the claim were false.'],
            ['"Offences fell after the policy"', '~1.5', 'Weak. Offences fall after many policies and after none.'],
            ['"The fall was only in the targeted offence"', '~4', 'Strong, because a general trend would not single out one offence type.'],
            ['"Neighbouring areas without the policy did not fall"', '~5', 'The comparison group. This is the number to build a minute on.'],
            ['"The fall began before implementation"', '~0.2', 'Evidence against your own case. Concede it and explain why it is not fatal.'],
          ],
          caption: 'Illustrative magnitudes, not published figures. The ranking is the point: comparison-group evidence dominates before-and-after evidence.',
        },
        {
          t: 'example',
          title: 'The move, in a round',
          lines: [
            { label: 'Them', text: '"Crime fell twelve per cent after the scheme was introduced."' },
            { label: 'Weak answer', text: '"Correlation is not causation." True, generic, and forgettable.' },
            { label: 'The likelihood-ratio answer', text: '"That figure would look exactly the same if the scheme had done nothing, because the trend was already running in the three boroughs that have no scheme. What would distinguish the two stories is a comparison area — and they have not given us one."' },
            { label: 'Why it wins', text: 'It names the observation that would have settled the question, which makes its absence their problem rather than a philosophical aside.' },
          ],
        },
      ],
    },
    {
      id: 'chains',
      title: 'Chains, conjunction and impact inflation',
      blocks: [
        { t: 'p', text: 'A story with five steps is more vivid and less likely than the same story with two. This is the **conjunction fallacy** in its practical debating form, and it is why escalating every impact to war or extinction loses to a modest, well-linked harm in front of an experienced judge.' },
        {
          t: 'math',
          tex: 'P(\\text{chain}) = \\prod_{i=1}^{n} p_i \\quad\\text{and}\\quad \\mathbb{E}[\\text{harm}] = P(\\text{chain}) \\times M',
          plain: 'The chance the whole story happens is every step multiplied together, and the weight of the impact is that chance times how bad the end state is.',
          where: [
            { sym: 'p_i', def: 'the chance of step \\(i\\) given the step before' },
            { sym: 'M', def: 'the magnitude of the final harm' },
          ],
          worked: {
            title: 'Comparing two impacts honestly',
            steps: [
              'Theirs: four steps at 0.7 each, magnitude 1000. \\(0.7^4 = 0.24\\).',
              'Weight: \\(0.24 \\times 1000 = 240\\).',
              'Yours: one step at 0.9, magnitude 100. \\(0.9 \\times 100 = 90\\).',
              'Now suppose one of their steps is really 0.3, not 0.7: \\(0.7^3 \\times 0.3 = 0.10\\), weight \\(100\\).',
            ],
            why: ['independent-ish steps multiply', 'their expected harm', 'yours is smaller but nearly certain', 'one broken link halves their advantage'],
            answer: 'Their dramatic impact is worth roughly 240 against your 90 — until one link is contested, at which point they are level. This is why attacking the weakest link beats attacking the magnitude.',
          },
        },
        {
          t: 'dodont',
          do: [
            'Count their links out loud: "this needs four things to happen in order".',
            'Name the weakest link and demand it be defended on its own.',
            'Prefer a two-link impact you can defend over a five-link one that sounds bigger.',
            'Concede that your own impact is smaller, then argue certainty and reversibility.',
          ],
          dont: [
            'Match their escalation. Two teams at extinction level cancel out and the judge decides on something else.',
            'Treat each link as independent when they share a cause; correlated steps are more likely, and saying so is honest.',
            'Give a probability to three decimal places. It invites a cross-examination you cannot win.',
          ],
        },
      ],
    },
    {
      id: 'calibration',
      title: 'Calibration, and words for probabilities',
      blocks: [
        { t: 'p', text: 'You will never say a number in most rounds. You will say "likely", "almost certain", "a real risk". Those words carry wildly different meanings between people — the intelligence community adopted standardised bands precisely because of it — so it is worth choosing them deliberately and defining the important one once.' },
        {
          t: 'table',
          head: ['Phrase', 'Rough band', 'Use when'],
          rows: [
            ['Almost certain', '90–99%', 'The mechanism is observed and uncontested.'],
            ['Likely / probable', '65–85%', 'One or two well-evidenced steps.'],
            ['Roughly even', '45–55%', 'Honest when it is honest; it buys credibility elsewhere.'],
            ['Unlikely', '15–35%', 'Use about their chain, with the link count attached.'],
            ['Remote', '1–10%', 'For tail risks you are arguing still matter because of magnitude.'],
          ],
          caption: 'Bands follow the convention used in intelligence estimative language (and, with different wording, the IPCC). Nobody will quiz you on them; the value is that your own usage stays consistent across a speech.',
        },
        { t: 'callout', tone: 'warn', title: 'The honest-uncertainty trap', text: 'Admitting that your impact is uncertain is credible exactly once per speech, on your weakest link. Do it on everything and you have argued yourself to a draw, and the judge will take the team that sounded like they had a case.' },
      ],
    },
    {
      id: 'motions',
      title: 'Where this wins rounds',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Screening and detection', tag: 'Base rates', body: 'Mass screening, facial recognition, fraud flags, content moderation. Opposition’s best line is almost always that most positives are false.' },
            { title: 'Policy evaluation', tag: 'Comparison groups', body: 'Did the law cause the fall? The side that names the counterfactual and the comparison area wins the empirical clash.' },
            { title: 'Prediction motions', tag: 'Base rates again', body: '"This time is different" has a base rate, and it is low. Make the historical analogue the default and force them to beat it.' },
            { title: 'Catastrophic risk', tag: 'Chains', body: 'Count the links, price the product, then argue irreversibility rather than magnitude. See [expected value and risk](@debate/advanced/expected-value-and-risk).' },
            { title: 'Rare-event policy', tag: 'Both', body: 'Terrorism, school shootings, aviation. Tiny base rates and enormous magnitudes: both sides must do arithmetic or neither is arguing.' },
            { title: 'Any "studies show"', tag: 'Evidence quality', body: 'Design beats headline. See [reading and attacking a study](@debate/advanced/reading-studies).' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Kahneman, D. and Tversky, A. (1973) On the Psychology of Prediction, Psychological Review.',
    'Gigerenzer, G. and Hoffrage, U. (1995) How to Improve Bayesian Reasoning Without Instruction: Frequency Formats, Psychological Review.',
    'Tetlock, P. and Gardner, D. (2015) Superforecasting, on calibration and granular probability estimates.',
    'US Office of the Director of National Intelligence, Intelligence Community Directive 203, on estimative language.',
  ],
  related: ['debate/advanced/expected-value-and-risk', 'debate/advanced/reading-studies', 'debate/systems/fallacies', 'debate/structure/weighing'],
}

export default guide
