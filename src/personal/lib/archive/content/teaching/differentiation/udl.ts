import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Universal Design for Learning (UDL) asks teachers to design lessons that work for the full range of learners from the start, instead of designing for an average learner and retrofitting adjustments. It borrows from architecture: a ramp built into the design helps wheelchair users, parents with prams and delivery workers alike.',
  nutshell: [
    'Developed by CAST (David Rose and Anne Meyer) from the 1990s.',
    'Three principles: multiple means of **engagement** (the why), **representation** (the what) and **action and expression** (the how).',
    'Barriers are in the design of the lesson, not in the learner.',
    'Keep the goal firm and make the means flexible.',
  ],
  sections: [
    {
      id: 'principles',
      title: 'Three principles',
      lead: 'The why, the what and the how of learning.',
      blocks: [
        {
          t: 'cards',
          cols: 3,
          items: [
            { tag: 'the why', title: 'Engagement', body: 'Provide options for **recruiting interest**, **sustaining effort** and **self-regulation**. Choice, relevance, varied challenge, collaboration, feedback on progress, and support for managing frustration.' },
            { tag: 'the what', title: 'Representation', body: 'Provide options for **perception**, **language and symbols**, and **building understanding**. Text plus audio, captions, diagrams, vocabulary support, background knowledge, highlighted key ideas.' },
            { tag: 'the how', title: 'Action and expression', body: 'Provide options for **physical action**, **expression and communication**, and **strategy development**. Typing or writing, speech-to-text, different product formats, planning templates, checklists.' },
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          text: 'CAST released version 3.0 of the UDL guidelines in 2024, putting more emphasis on learner identity, belonging and removing bias. The three core principles are unchanged.',
        },
      ],
    },
    {
      id: 'goals',
      title: 'Firm goals, flexible means',
      blocks: [
        {
          t: 'p',
          text: 'UDL starts by separating the goal from the method. If the goal is "explain the causes of the French Revolution", the means of getting information (reading, video, a lecture) and of showing understanding (essay, presentation, annotated timeline) can vary without changing the goal. If the goal is specifically "write an essay", then writing is not flexible, but supports for planning and spelling can be.',
        },
        {
          t: 'example',
          title: 'A UDL lens on one lesson: the causes of the French Revolution',
          lines: [
            { label: 'Goal', text: 'Explain how at least three causes combined to bring about the revolution.' },
            { label: 'Engagement', text: 'Open with a question: "When is it right to overthrow a government?" Offer a choice of case study (bread prices, the Estates-General, Enlightenment ideas).' },
            { label: 'Representation', text: 'Key text available in print and audio, with a glossary. Timeline visual on the wall. Short video summary for background.' },
            { label: 'Expression', text: 'Explain the causes as a written paragraph, a recorded explanation or an annotated cause map. Same success criteria for all.' },
            { label: 'Support', text: 'Sentence stems and a planning organiser available to all; checklist of success criteria.' },
          ],
        },
      ],
    },
    {
      id: 'udl-vs-diff',
      title: 'UDL and differentiation',
      blocks: [
        {
          t: 'table',
          head: ['', 'UDL', 'Differentiation'],
          rows: [
            ['When', 'Proactive: at the design stage, for everyone', 'Responsive: adapting to particular learners as you learn about them'],
            ['Focus', 'Removing barriers from the environment', 'Responding to individual readiness, interest, profile'],
            ['Result', 'Options built in and available to all', 'Adjustments for groups or individuals'],
          ],
          caption: 'They work together: UDL reduces how much individual adjustment is needed; differentiation handles what remains.',
        },
      ],
    },
    {
      id: 'evidence',
      title: 'Evidence and cautions',
      blocks: [
        {
          t: 'p',
          text: 'UDL is widely adopted and written into law and policy in several countries, and reviews find promising results. But research on its overall effect on learning is still limited and varied, partly because UDL is a framework rather than one specific intervention (Capp, 2017; Al-Azawei et al., 2016). Use it as a design checklist, and check whether your choices actually help learners learn.',
        },
        {
          t: 'callout',
          tone: 'warn',
          text: 'Offering "multiple means" is not the same as endorsing learning styles. The aim is to remove barriers (a learner who cannot see the board, cannot yet decode the text, or needs to hear instructions twice), not to match teaching to a preferred style. See [learning myths](@teaching/theories/myths).',
        },
      ],
    },
  ],
  sources: [
    'CAST. (2024). *Universal Design for Learning guidelines version 3.0*. udlguidelines.cast.org',
    'Meyer, A., Rose, D. H., & Gordon, D. (2014). *Universal design for learning: Theory and practice*. CAST.',
    'Capp, M. J. (2017). The effectiveness of universal design for learning: A meta-analysis of literature between 2013 and 2016. *International Journal of Inclusive Education, 21*(8), 791–807.',
  ],
  related: ['teaching/differentiation/foundations', 'teaching/special-education/foundations/inclusion', 'teaching/special-education/strategies/assistive-tech'],
}

export default guide
