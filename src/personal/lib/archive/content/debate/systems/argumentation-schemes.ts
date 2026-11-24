import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Most real arguments are neither valid deductions nor fallacies. They are **presumptive**: they shift the burden onto whoever disagrees, and they hold unless specific objections apply. Argumentation theory catalogues these forms as schemes, and each scheme comes with the list of questions that defeat it. For a debater this is a rebuttal generator you can memorise.',
  nutshell: [
    'A **scheme** is a recurring argument form with a conclusion that holds *defeasibly* — unless certain objections apply.',
    'Each scheme has **critical questions**. Asking them is not pedantry; it is the standard way to attack that form of argument.',
    'Deduction, induction and **presumption** are three different standards. Debate runs almost entirely on the third.',
    'A scheme used honestly is an argument; the same scheme with the critical questions unanswerable is the corresponding [fallacy](@debate/systems/fallacies).',
    'Knowing the scheme tells you where to attack before you have heard the content.',
  ],
  sections: [
    {
      id: 'idea',
      title: 'Why schemes, rather than logic',
      blocks: [
        { t: 'p', text: 'Formal logic evaluates whether a conclusion follows necessarily. Almost nothing in a debate does. "Experts say X, so probably X" is not valid, but it is not worthless either: it is a reasonable default that can be beaten by showing the experts are biased, unqualified, or disagree among themselves.' },
        {
          t: 'levels',
          caption: 'Three standards of support, from strongest to most common.',
          items: [
            { name: 'Deductive', body: 'The conclusion cannot be false if the premises are true. Rare, and usually about definitions.', verbs: ['entails'] },
            { name: 'Inductive', body: 'The premises make the conclusion probable, in a way you could in principle quantify.', verbs: ['supports'] },
            { name: 'Presumptive', body: 'The conclusion stands as a default, subject to named objections. Almost all debate argument.', verbs: ['presumes', 'shifts'] },
          ],
        },
        { t: 'callout', tone: 'fact', title: 'The practical consequence', text: 'You do not have to prove an argument false to beat it. You have to show that one of its critical questions has no good answer — which moves the burden back to them, in front of a judge who can see it happen.' },
      ],
    },
    {
      id: 'catalogue',
      title: 'The schemes you will meet every round',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Expert opinion', tag: 'Critical questions', body: 'Is the source actually an expert in *this* field? Is the field one with consensus? Are they quoted accurately? Is there a competing expert view?' },
            { title: 'Analogy', tag: 'Critical questions', body: 'Are the cases alike in the respect that matters? What disanalogy would break it? Is there a closer analogy that goes the other way?' },
            { title: 'Consequences', tag: 'Critical questions', body: 'How likely is the consequence? Is it caused by this policy or by something else? Are there offsetting consequences?' },
            { title: 'Practical reasoning', tag: 'Critical questions', body: 'Is this the best available means? Are there side effects? Is the goal itself the right one?' },
            { title: 'Popular opinion', tag: 'Critical questions', body: 'Does popularity track truth here? Is the majority informed? Does it matter for legitimacy rather than for correctness?' },
            { title: 'Sign or correlation', tag: 'Critical questions', body: 'Could the relationship run the other way? Is there a common cause? How strong is the association?' },
            { title: 'Slippery slope', tag: 'Critical questions', body: 'Which step is weakest? Is there a stopping point? Has the first step been taken elsewhere without the slide?' },
            { title: 'Precedent and rules', tag: 'Critical questions', body: 'Is the rule the right one? Is this case within it? Is there a recognised exception?' },
            { title: 'Position to know', tag: 'Critical questions', body: 'Was the source in a position to observe? Honest? Reporting or interpreting?' },
            { title: 'Ad hominem (circumstantial)', tag: 'Critical questions', body: 'Does the interest actually bias the claim? Would the claim stand if made by someone else? Sometimes legitimate: motive is evidence about testimony.' },
          ],
        },
        { t: 'debate-lab', viz: 'fallacy' },
      ],
    },
    {
      id: 'using',
      title: 'Using schemes in a round',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Identify the form while they speak', body: 'Write it in your flow: "analogy", "consequences", "expert". Two seconds, and it sets up your answer.' },
            { title: 'Pick the critical question with no good answer', body: 'Not all of them. One, the one they cannot address without conceding something.' },
            { title: 'Ask it as a claim, not a question', body: 'Not "is this really analogous?" but "the analogy breaks on the one feature that matters: in their case the decision was voluntary, in ours it is not".' },
            { title: 'Say what the argument is now worth', body: 'A scheme defeated on a critical question is usually not dead, only weakened. Price it.' },
          ],
        },
        {
          t: 'example',
          title: 'A scheme answered properly',
          lines: [
            { label: 'Their argument', text: '"Portugal decriminalised and use did not rise, so decriminalisation is safe."' },
            { label: 'Scheme', text: 'Argument from analogy, resting on a single case.' },
            { label: 'The critical question with teeth', text: 'Are the cases alike in the respect that matters? Portugal paired decriminalisation with a large treatment expansion.' },
            { label: 'As a claim', text: '"Their example is not decriminalisation alone; it is decriminalisation plus treatment capacity we are not funding. They have to show the first half works without the second."' },
            { label: 'Pricing it', text: '"So the example supports their model only if they adopt the whole package, which doubles its cost — and that cost is what we are weighing against."' },
          ],
        },
      ],
    },
    {
      id: 'honest',
      title: 'Schemes and fallacies are the same forms',
      blocks: [
        { t: 'p', text: 'This is the insight that makes the catalogue useful rather than pedantic. "Appeal to authority" is a fallacy when the critical questions fail and a perfectly good argument when they do not. The question is never "is this a fallacy", it is "does this instance survive its own critical questions".' },
        {
          t: 'table',
          head: ['Scheme', 'Legitimate when', 'Fallacious when'],
          rows: [
            ['Expert opinion', 'The claim is factual, in-field, and the field agrees.', 'Used for a value judgement, or the expert is out of field.'],
            ['Popular opinion', 'The issue is legitimacy or feasibility.', 'The issue is truth.'],
            ['Consequences', 'The causal chain is short and evidenced.', 'The chain is long and each link assumed.'],
            ['Analogy', 'The shared feature is the operative one.', 'The cases differ exactly where it matters.'],
            ['Circumstantial ad hominem', 'Assessing testimony where interest distorts it.', 'Replacing the argument with the arguer.'],
          ],
        },
        { t: 'p', text: 'The fallacy-by-fallacy list, with the sentence you actually say in a round, is in [fallacies](@debate/systems/fallacies). The theory behind "argument as a regulated discussion with rules" is in [pragma-dialectics](@debate/schools/pragma-dialectics).' },
      ],
    },
  ],
  sources: [
    'Walton, D., Reed, C. and Macagno, F. (2008) Argumentation Schemes. Cambridge University Press.',
    'Walton, D. (2006) Fundamentals of Critical Argumentation. Cambridge University Press.',
    'Hastings, A. (1962) A Reformulation of the Modes of Reasoning in Argumentation, the origin of the scheme catalogue in debate pedagogy.',
  ],
  related: ['debate/systems/fallacies', 'debate/techniques/refutation-techniques', 'debate/schools/toulmin-and-informal-logic'],
}

export default guide
