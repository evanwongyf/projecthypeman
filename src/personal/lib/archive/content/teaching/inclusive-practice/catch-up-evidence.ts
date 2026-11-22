import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'There are dozens of things a school can do for learners who are behind, and they differ a great deal in how much they help and what they cost. This guide compares the main approaches using the Education Endowment Foundation’s "months of progress" summaries, explains how those figures are built and where they mislead, and draws out what the strongest approaches have in common: they are targeted, structured, frequent and delivered by someone who has been trained.',
  nutshell: [
    'Roughly, in EEF Toolkit terms: **feedback ≈ +6 months, metacognition ≈ +7, one-to-one tuition ≈ +5, small-group tuition ≈ +4, mastery learning ≈ +5, teaching-assistant interventions ≈ +4**; these are averages and vary by study.',
    '**How** the money is spent matters more than **whether**. General classroom deployment of teaching assistants shows little average gain; trained TAs delivering a structured programme to small groups show gains of about 4 months.',
    '**Setting or streaming** has a slightly negative average effect on low attainers, and **repeating a year** is among the most harmful common practices (about −3 months).',
    'Effective catch-up is **targeted** (a diagnosed gap), **structured** (a scripted sequence), **frequent** (3 or more times a week for 20 to 60 minutes) and **connected** to what is taught in class.',
  ],
  sections: [
    {
      id: 'chart',
      title: 'The approaches side by side',
      lead: 'Months of additional progress over a year, as the EEF reports them.',
      blocks: [
        { t: 'p', text: 'The figures below are rounded values from the EEF Teaching and Learning Toolkit, which pools meta-analyses and trials into an estimated number of **additional months of progress** over a school year. The Toolkit is revised regularly, so treat the numbers as rough, and check the current site before quoting them. Many of the top-ranked approaches are cheap to adopt but hard to do well.' },
        {
          t: 'bars',
          title: 'Approximate additional months of progress (EEF Toolkit, rounded)',
          unit: 'months',
          zero: true,
          min: -4,
          max: 8,
          decimals: 0,
          items: [
            { label: 'Metacognition and self-regulation', value: 7, group: 'Strong, low to moderate cost' },
            { label: 'Feedback', value: 6, note: 'depends heavily on quality (see the feedback guide)' },
            { label: 'Reading comprehension strategies', value: 6 },
            { label: 'One-to-one tuition', value: 5, group: 'Targeted support' },
            { label: 'Mastery learning', value: 5 },
            { label: 'Phonics (early reading)', value: 5 },
            { label: 'Small-group tuition', value: 4 },
            { label: 'Teaching-assistant interventions (structured)', value: 4 },
            { label: 'Behaviour interventions', value: 4 },
            { label: 'Reducing class size', value: 2, group: 'Modest or costly' },
            { label: 'Teaching assistants (general deployment)', value: 0, note: 'average; depends strongly on how they are used' },
            { label: 'Setting or streaming (effect on low attainers)', value: -1, group: 'Little or negative' },
            { label: 'Repeating a year', value: -3, note: 'also raises dropout risk' },
          ],
          caption: 'Rounded from the EEF Toolkit; indicative only. Effects are averages across very different studies, and an average hides large differences in quality of delivery.',
        },
      ],
    },
    {
      id: 'read',
      title: 'How to read "months of progress"',
      lead: 'A convenient conversion with caveats.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{months}\approx\frac{d}{d_{\text{month}}},\qquad d=\frac{\bar x_{T}-\bar x_{C}}{s_{\text{pooled}}}`,
          caption: 'Converting an effect size d (in standard deviations) to months of progress, using the typical amount of learning in a month.',
          where: [{ sym: 'd', def: 'the effect size: difference between treatment and control groups in standard deviations of the outcome' }, { sym: 'd_{\\text{month}}', def: 'the typical standard-deviation gain per month of schooling; the EEF’s conversion is roughly 0.08 to 0.09, and it is larger for younger children and smaller for older ones' }],
          syntax: [
            { sym: 'd', say: 'how far apart the two groups ended up, measured in the spread of the scores. Effect: puts a reading test and a maths test on one scale. Why: dividing by the standard deviation removes the units.' },
            { sym: 'd/d_{\\text{month}}', say: 'how many months of ordinary schooling that gap equals. Effect: the same d is worth more months in older children, whose natural yearly growth is smaller. Why: the conversion depends on a typical growth rate that falls with age.' },
          ],
          worked: {
            title: 'A tutoring trial',
            steps: ['A trial finds \\(d=0.30\\) for small-group tuition in reading.', 'With roughly 0.085 SD per month: \\(0.30/0.085\\approx3.5\\), so about **4 months** after rounding.', 'The same d = 0.30 in secondary school, where yearly growth is slower, would be worth more months.'],
            answer: 'Months of progress is a communication device, not a measurement of a child. A group average of +4 months does not mean each child gains 4 months: some gain much more, some nothing.',
          },
        },
        {
          t: 'dodont',
          do: ['Compare approaches by cost per month gained, not only by size of effect.', 'Look at the quality of the evidence: a few trials versus many; independent evaluation versus developer-run.', 'Look for effects on *low-attaining* learners specifically; averages can hide a different result.'],
          dont: ['Assume a programme will reproduce its trial effect with less training or dosage.', 'Compare an effect size from a narrow test with one from a broad test.', 'Treat the ranking as a menu to pick from independently: effective approaches combine.'],
        },
      ],
    },
    {
      id: 'ta',
      title: 'Teaching assistants and the deployment lesson',
      lead: 'Same people, different results.',
      blocks: [
        { t: 'p', text: 'The Deployment and Impact of Support Staff study (Blatchford and colleagues, 2009) followed thousands of pupils in England and found a counter-intuitive result: pupils who received more support from teaching assistants made *less* progress, after adjusting for prior attainment and need. The cause was not the assistants but how they were used. They were most often attached to the lowest-attaining pupils for long stretches, so those pupils spent less time with the teacher, had fewer chances to discuss ideas, and got answers supplied rather than being helped to think.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Weak deployment', tag: 'avoid', body: 'The assistant sits permanently beside the lowest-attaining pupils; completes tasks for them; the teacher spends most time with others; no planning time or briefing.' },
            { title: 'Strong deployment', tag: 'aim for', body: 'The teacher spends time with the lowest-attaining pupils while the assistant supervises or extends others; assistants deliver short, scripted, trained interventions; they are briefed before, and debriefed after, the lesson.' },
            { title: 'Training matters', tag: 'quality', body: 'Interventions with training, a manual, and fidelity checks reach about 4 months; untrained "helping" does not.' },
            { title: 'Ask the question', tag: 'prompting', body: 'Assistants learn to ask "what do you think?", wait, and give a hint before the answer, to build independence rather than dependence.' },
          ],
        },
      ],
    },
    {
      id: 'what',
      title: 'What the strong approaches have in common',
      lead: 'A recipe.',
      blocks: [
        {
          t: 'levels',
          caption: 'A rough order of how a catch-up programme is built, from foundation to quality control.',
          items: [
            { name: 'Diagnose', body: 'Know exactly which skill or knowledge is missing; do not guess (see the diagnosing-gaps guide).' },
            { name: 'Target', body: 'Teach that specific gap, in small steps, in a short, regular slot: 20 to 40 minutes, three to five times a week for 6 to 12 weeks.' },
            { name: 'Structure', body: 'Use a sequenced programme with clear routines: review, new step, guided practice, independent practice, retrieval. Fidelity to the sequence is a predictor of impact.' },
            { name: 'Connect', body: 'Link to what the class is doing, so that catch-up does not mean missing the lesson. Pre-teaching vocabulary often works better than re-teaching afterwards.' },
            { name: 'Measure', body: 'Re-test the specific skill, compare with a similar group where possible, and stop or change if no progress after the planned dose (see the fair-measurement guide for the pitfalls).' },
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Do not remove the learner from the best teaching', text: 'Withdrawing learners from the curriculum to catch up can widen the gap in the subjects they miss. Schedule interventions where they replace low-value time, and keep the learner in class for core teaching.' },
      ],
    },
  ],
  sources: [
    'Education Endowment Foundation. *Teaching and Learning Toolkit* (educationendowmentfoundation.org.uk), figures rounded and subject to revision.',
    'Blatchford, P., Russell, A. & Webster, R. (2012). *Reassessing the Impact of Teaching Assistants*. Routledge.',
    'Sharples, J., Webster, R. & Blatchford, P. (2015). *Making Best Use of Teaching Assistants*. EEF guidance report.',
    'Nickow, A., Oreopoulos, P. & Quan, V. (2020). The impressive effects of tutoring on PreK–12 learning: a systematic review and meta-analysis. *NBER Working Paper 27476*.',
    'Allen, S. (2020). Grade retention and its effects: meta-analytic evidence. *Review of Educational Research*.',
  ],
  related: ['teaching/inclusive-practice/why-learners-fall-behind', 'teaching/inclusive-practice/teaching-low-attainers', 'teaching/equity/interventions-evidence', 'teaching/special-education/foundations/tiered-support', 'teaching/assessment/feedback'],
}

export default guide
