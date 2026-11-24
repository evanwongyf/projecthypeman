import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Naming a fallacy wins nothing. Judges mark the answer, not the label, and "that is a straw man" with no follow-up is itself an assertion. What the names are good for is **recognition speed**: eighteen patterns, each with a standard reply, so that when one goes past you do not have to think from scratch.',
  nutshell: [
    'The useful question is not "is this a fallacy" but "which step is missing, and can they supply it".',
    'Say the **answer**, not the name: "how often, compared to what" beats "anecdotal evidence".',
    'Fallacies cluster into five families: **relevance**, **causation**, **structure**, **language**, **statistics**.',
    'The statistical ones — base rates, cherry picking, anecdote as data — are the most common and the least often caught.',
    'Every fallacy is a [scheme](@debate/systems/argumentation-schemes) whose critical questions have no answer.',
  ],
  sections: [
    {
      id: 'spotter',
      title: 'The spotter',
      blocks: [
        { t: 'p', text: 'Quiz yourself on examples first, then read the reference. The point of the drill is recognition under time pressure, which is the only form in which this knowledge is ever useful.' },
        { t: 'debate-lab', viz: 'fallacy' },
      ],
    },
    {
      id: 'families',
      title: 'The five families',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Relevance', tag: 'Wrong target', body: 'The argument does not bear on the claim: straw man, ad hominem, appeal to authority or popularity. Answer by separating what is true from what was asked.' },
            { title: 'Causation', tag: 'Wrong direction', body: 'Post hoc, correlation as cause, single cause, slippery slope. Answer with a rival story: common cause, reverse causation, pre-existing trend.' },
            { title: 'Structure', tag: 'Broken form', body: 'False dilemma, begging the question, shifting the burden, moving the goalposts, perfect-solution. Answer by naming the missing option or the circularity.' },
            { title: 'Language', tag: 'Words doing two jobs', body: 'Equivocation, loaded terms. Answer by splitting the senses and showing the argument needs both.' },
            { title: 'Statistics', tag: 'Wrong number', body: 'Base-rate neglect, cherry picking, anecdote as data. Answer with the denominator, the full window, or the rate.' },
          ],
        },
      ],
    },
    {
      id: 'baserate',
      title: 'The one worth doing the arithmetic on',
      blocks: [
        { t: 'p', text: 'Base-rate neglect appears in almost every debate that touches screening, policing, security or diagnosis, and the number almost always reverses when the base rate is supplied out loud.' },
        {
          t: 'math',
          tex: 'P(H \\mid +) = \\frac{P(+ \\mid H)\\,P(H)}{P(+ \\mid H)\\,P(H) + P(+ \\mid \\lnot H)\\,P(\\lnot H)}',
          plain: 'The chance something is really true given a positive result depends not only on how accurate the test is, but on how rare the thing was to begin with. When it is rare, most positives are false.',
          where: [
            { sym: 'P(H)', def: 'the base rate: how common the condition is before testing' },
            { sym: 'P(+ \\mid H)', def: 'sensitivity: the chance of a positive when the condition is present' },
            { sym: 'P(+ \\mid \\lnot H)', def: 'the false positive rate' },
          ],
          worked: {
            title: 'A 99% accurate test for a 1-in-1000 condition',
            steps: [
              'Base rate \\(P(H) = 0.001\\); sensitivity \\(0.99\\); false positive rate \\(0.01\\).',
              'True positives: \\(0.99 \\times 0.001 = 0.00099\\).',
              'False positives: \\(0.01 \\times 0.999 = 0.00999\\).',
              '\\(P(H \\mid +) = 0.00099 / (0.00099 + 0.00999)\\)',
            ],
            why: ['the numbers usually quoted', 'the people who have it and test positive', 'the far larger group who do not and test positive anyway', 'divide the first by the total'],
            answer: 'About 9%. Nine in ten positives are false, with a test described in the round as "99% accurate".',
          },
          caption: 'Say this out loud in a round and it decides the issue, because it is arithmetic rather than assertion.',
        },
      ],
    },
    {
      id: 'using',
      title: 'How to use fallacies without sounding like a textbook',
      blocks: [
        {
          t: 'dodont',
          do: [
            'State the missing step: "nothing here shows the law caused the fall rather than the trend that preceded it".',
            'Offer the rival explanation, so the judge has somewhere to put their doubt.',
            'Use the name only as a label after the substance: "that is the base-rate problem" once you have done the arithmetic.',
            'Attack the strongest version of their argument first; a fallacy charge on a weak version looks evasive.',
          ],
          dont: [
            'Say "fallacy" as if it ends the matter. It does not, and judges find it grating.',
            'Call an argument fallacious when it is merely weak; overcharging costs credibility.',
            'Accuse them of ad hominem when they have made a legitimate point about an interested source.',
            'Catalogue four fallacies in one answer. Pick the one that kills the argument.',
          ],
        },
        { t: 'callout', tone: 'myth', title: '"Pointing out a fallacy wins the argument"', text: 'It shifts the burden, which is different. They can usually supply the missing step for at least a weakened version of their claim. Your job is to be ready for that version too, which is why [refutation techniques](@debate/techniques/refutation-techniques) layers denial, mitigation and even-if.' },
      ],
    },
  ],
  sources: [
    'Walton, D. (1995) A Pragmatic Theory of Fallacy. University of Alabama Press.',
    'Tindale, C. (2007) Fallacies and Argument Appraisal. Cambridge University Press.',
    'Kahneman, D. and Tversky, A. (1973) On the Psychology of Prediction, on base-rate neglect.',
  ],
  related: ['debate/systems/argumentation-schemes', 'debate/techniques/refutation-techniques', 'thinking/fallacies', 'thinking/numbers'],
}

export default guide
