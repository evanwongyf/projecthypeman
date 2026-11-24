import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A study gets quoted in a round in about eleven words: "a study found that X". Those eleven words hide a design, a sample, an effect size, an interval and a literature, and every one of them is a place the argument can be won or lost. This page is how to use a study honestly and how to break one fairly, with the six attacks that work and the three that only annoy judges.',
  nutshell: [
    '**Design** beats headline. A randomised trial, a natural experiment and a cross-sectional survey support very different claims.',
    'An **effect size** without a comparison is decoration. "Statistically significant" is not a synonym for "large".',
    'A **confidence interval** tells you the range the data is consistent with; if it crosses zero, the direction itself is in doubt.',
    'Ask about the **sample**: who, how many, recruited how, and for how long.',
    '**External validity** is the usual kill: the finding may be real and still not travel to the people in the motion.',
    'Attack the design or the generalisation, not the authors. Ad hominem on researchers reads badly and is usually unnecessary.',
  ],
  sections: [
    {
      id: 'ladder',
      title: 'The design ladder',
      blocks: [
        {
          t: 'levels',
          caption: 'What each design can and cannot establish. Higher is stronger for causal claims, not for every purpose.',
          items: [
            { name: 'Systematic review and meta-analysis', body: 'Pools studies to a weighted effect. Strongest evidence for an effect, and only as good as the studies in it — check inclusion criteria and heterogeneity.', verbs: ['synthesises'] },
            { name: 'Randomised controlled trial', body: 'Random assignment makes groups comparable, so a difference is attributable. The usual limits are size, duration and whether the trial population resembles the policy population.', verbs: ['establishes cause'] },
            { name: 'Natural experiment / quasi-experiment', body: 'Difference-in-differences, regression discontinuity, instrumental variables. Strong when the assignment really is as good as random; the whole weight sits on that assumption.', verbs: ['approximates'] },
            { name: 'Longitudinal cohort', body: 'Follows people over time; can establish sequence and dose-response, cannot rule out confounders.', verbs: ['tracks'] },
            { name: 'Cross-sectional survey', body: 'One moment in time. Good for prevalence and attitudes; cannot establish direction.', verbs: ['describes'] },
            { name: 'Case study and anecdote', body: 'Shows the mechanism can run at all, which is useful and not nothing. Says nothing about how often.', verbs: ['illustrates'] },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'The question that gets you most of this', text: '"Compared with what?" A study with no comparison group is a before-and-after story, and the honest version of your own evidence names its comparison out loud. See the likelihood-ratio treatment in [probability and evidence](@debate/advanced/probability-and-evidence).' },
      ],
    },
    {
      id: 'numbers',
      title: 'The numbers, and what they actually say',
      blocks: [
        {
          t: 'terms',
          items: [
            { term: 'Effect size (Cohen\u2019s d)', def: 'The difference between groups in standard deviations. Conventionally 0.2 small, 0.5 medium, 0.8 large — conventions, not laws, and context matters more.' },
            { term: 'Odds ratio / relative risk', def: 'A ratio, so it hides the base rate: a doubling of a one-in-a-million risk is still one in half a million.' },
            { term: 'Absolute risk reduction', def: 'The number that matters for policy, and the one press releases omit.' },
            { term: 'Confidence interval', def: 'The range of effects the data is reasonably consistent with. Read the whole interval, especially its lower bound.' },
            { term: 'p-value', def: 'How surprising the data would be if there were no effect. Not the probability the claim is true, and not a measure of size.' },
            { term: 'Statistical power', def: 'The chance of detecting a real effect. Underpowered studies both miss real effects and exaggerate the ones they find.' },
            { term: 'Pre-registration', def: 'The hypothesis was published before the data. A strong quality signal, and worth naming when your study has it.' },
            { term: 'Heterogeneity', def: 'In a meta-analysis, how much the studies disagree. High heterogeneity means the average is hiding something.' },
          ],
        },
        {
          t: 'math',
          tex: 'd = \\frac{\\bar{x}_1 - \\bar{x}_2}{s_p}, \\qquad CI_{95\\%} = d \\pm 1.96\\,SE(d)',
          plain: 'An effect size is the gap between two groups measured in how spread out the data is. The interval around it says how much the gap might really be, given the sample.',
          where: [
            { sym: '\\bar{x}_1 - \\bar{x}_2', def: 'the raw difference between group means' },
            { sym: 's_p', def: 'the pooled standard deviation: the natural spread of the measure' },
            { sym: 'SE(d)', def: 'the standard error, which shrinks roughly with the square root of the sample size' },
          ],
          worked: {
            title: 'A programme that "significantly improved outcomes"',
            steps: ['Raw gain 0.4 points, pooled SD 1.6, so \\(d = 0.25\\).', 'Sample of 60, so \\(SE \\approx \\sqrt{4/60} \\approx 0.26\\).', '\\(CI_{95\\%} = 0.25 \\pm 0.51\\)'],
            why: ['a quarter of a standard deviation: small', 'small samples give wide intervals', 'the interval runs from −0.26 to 0.76'],
            answer: 'The data is consistent with a small harm and with a large benefit. "Significant" in the press release was doing a lot of work, and this is the sentence that says so without calling anyone dishonest.',
          },
          caption: 'The facilitation shelf has the same arithmetic from the practitioner\u2019s side, with the response-shift and ceiling caveats: [measuring growth](@facilitation/growth/measuring-growth).',
        },
      ],
    },
    {
      id: 'attacks',
      title: 'The six attacks that work',
      blocks: [
        {
          t: 'table',
          head: ['Attack', 'What you say', 'When it is fair'],
          rows: [
            ['Design', '"That is a cross-sectional survey; it cannot tell us which way the arrow runs."', 'Almost always worth checking first.'],
            ['Comparison group', '"There is no control, so the trend they describe is also the trend without the policy."', 'Before-and-after studies, pilot evaluations.'],
            ['Sample', '"Forty undergraduates for six weeks is not a national policy."', 'Small, convenient or short-run samples.'],
            ['Effect size', '"The effect is a quarter of a standard deviation, and the interval includes nothing at all."', 'Whenever only significance was quoted.'],
            ['External validity', '"The trial population had a support service we are not funding."', 'The strongest attack on good studies.'],
            ['Replication and literature', '"That is one study; the meta-analysis of thirty finds half the effect."', 'When you know the literature. Devastating when true.'],
          ],
        },
        {
          t: 'dodont',
          do: [
            'Concede the study and attack the inference: "we accept the finding and deny that it travels".',
            'Name the specific feature of the trial that will not survive scale-up.',
            'Offer your own comparison: "the three cities without the scheme saw the same fall".',
            'Say what evidence would change your mind. Judges reward it, and it is cheap.',
          ],
          dont: [
            'Call the researchers biased without a mechanism; it reads as evasion and costs you credibility.',
            'Claim all social science is unreliable, then cite a study two minutes later.',
            'Quibble about p-values in front of a lay judge. Translate into "this could easily be nothing".',
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Publication bias, used honestly',
          text: 'Significant results are published more often than null ones, so a literature of small studies tends to overstate effects. This is a real phenomenon with real evidence behind it, and it is also a universal acid: if you use it, you must accept it against your own evidence. Use it where the pattern is specific — many small studies, no pre-registration, effect shrinking as samples grow — not as a blanket.',
        },
      ],
    },
    {
      id: 'using',
      title: 'Using a study well, as the side that has it',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Say what it is', body: '"A randomised trial of 4,000 households over three years." Design and scale first; it pre-empts half the attacks.' },
            { title: 'Say what it measured', body: 'The actual outcome, not your paraphrase of it. Judges notice the gap when the other side reads the abstract.' },
            { title: 'Give the effect, with its size', body: '"A 12% fall, with an interval from 7 to 17." Not "it worked".' },
            { title: 'Say which step of your mechanism it supports', body: 'A study is support for one link, not for the whole case. See [argument mapping](@debate/advanced/argument-mapping).' },
            { title: 'Name its limit before they do', body: '"It was run in a city with better transport than ours, which is why we are claiming a smaller effect than they found."' },
          ],
        },
        {
          t: 'example',
          title: 'The same evidence, used badly and well',
          lines: [
            { label: 'Badly', text: '"Studies show congestion charging reduces traffic." Unfalsifiable, unquotable, and worth nothing when contested.' },
            { label: 'Well', text: '"London\u2019s charge is the largest evaluated scheme we have: zone traffic fell about a fifth in the first years, and bus reliability rose with it. We are not claiming that transfers whole — London had a tube. We are claiming the mechanism is real, which is the step opposition said was speculative."' },
            { label: 'The difference', text: 'The second version has a design, a number, a named limit, and a specified job in the argument. It is also much harder to answer, because the obvious objections have been priced in already.' },
          ],
        },
      ],
    },
    {
      id: 'checklist',
      title: 'A thirty-second checklist',
      blocks: [
        {
          t: 'checklist',
          items: [
            'What design? What is the comparison?',
            'Who was in it, how many, how long?',
            'What outcome was actually measured, and is it the thing the motion cares about?',
            'How big is the effect, and what does the interval include?',
            'Was it pre-registered? Is it replicated? Is there a meta-analysis?',
            'Which single link of my argument does it support?',
            'What is the one feature of it that will not survive the motion\u2019s context?',
          ],
        },
        { t: 'p', text: 'Run this on your own evidence in prep and on theirs as they read it. The habit is cheap, and it means the sentence you say in the round is about design rather than about who has more studies — which is a contest nobody wins in seven minutes.' },
      ],
    },
  ],
  sources: [
    'Cohen, J. (1988) Statistical Power Analysis for the Behavioral Sciences, 2nd edition.',
    'Ioannidis, J. (2005) Why Most Published Research Findings Are False, PLoS Medicine.',
    'Open Science Collaboration (2015) Estimating the Reproducibility of Psychological Science, Science.',
    'Gelman, A. and Loken, E. (2014) The Statistical Crisis in Science, American Scientist.',
    'Deaton, A. and Cartwright, N. (2018) Understanding and Misunderstanding Randomized Controlled Trials, Social Science & Medicine, on external validity.',
  ],
  related: ['debate/advanced/probability-and-evidence', 'debate/techniques/prep-and-research', 'thinking/numbers', 'research/sources/evaluating-sources'],
}

export default guide
