import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Robert Marzano and John Kendall’s new taxonomy (2007) reorganises thinking around **control**: which part of the mind is in charge. The self decides whether to engage, metacognition sets goals and monitors, and only then does cognition do the work.',
  nutshell: [
    'Three systems: the **self system** decides to engage, the **metacognitive system** plans and monitors, the **cognitive system** processes knowledge.',
    'Six levels: retrieval, comprehension, analysis, knowledge utilisation (cognitive), then metacognition, then self-system thinking.',
    'Levels are ordered by how much conscious control they need, not by difficulty.',
    'The taxonomy makes motivation and self-regulation part of the thinking process, not an extra.',
  ],
  sections: [
    {
      id: 'systems',
      title: 'Three systems of thought',
      lead: 'Engage, plan, then think.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Self system', body: 'Faced with a new task, the learner first decides whether to engage. How important is it? Do I think I can do it? How do I feel about it? If the answer is no, nothing else happens.' },
            { title: 'Metacognitive system', body: 'If the learner engages, this system sets goals, chooses strategies and monitors progress, clarity and accuracy.' },
            { title: 'Cognitive system', body: 'This system processes the knowledge: retrieving it, comprehending it, analysing it and using it.' },
          ],
        },
        {
          t: 'p',
          text: 'All three act on three **domains of knowledge**: information (facts, vocabulary, principles), mental procedures (like editing an essay or solving an equation) and psychomotor procedures (like typing or throwing).',
        },
      ],
    },
    {
      id: 'levels',
      title: 'Six levels of processing',
      lead: 'From retrieval to self-system thinking.',
      blocks: [
        {
          t: 'levels',
          items: [
            { name: 'Retrieval', body: 'Recognising, recalling and executing knowledge.', verbs: ['recognise', 'recall', 'execute'] },
            { name: 'Comprehension', body: 'Integrating knowledge into its key parts, and symbolising it (representing it in a graphic or model).', verbs: ['integrate', 'symbolise', 'summarise', 'represent'] },
            { name: 'Analysis', body: 'Going beyond comprehension to generate new insights.', verbs: ['match', 'classify', 'analyse errors', 'generalise', 'specify'] },
            { name: 'Knowledge utilisation', body: 'Using knowledge to accomplish a task.', verbs: ['decide', 'solve problems', 'experiment', 'investigate'] },
            { name: 'Metacognition', body: 'Setting goals and monitoring your own thinking.', verbs: ['specify goals', 'monitor process', 'monitor clarity', 'monitor accuracy'] },
            { name: 'Self-system thinking', body: 'Examining your own beliefs about the task.', verbs: ['examine importance', 'examine efficacy', 'examine emotional response', 'examine motivation'] },
          ],
        },
      ],
    },
    {
      id: 'classroom',
      title: 'In the classroom',
      lead: 'Questions for the top two levels.',
      blocks: [
        {
          t: 'p',
          text: 'The upper levels are the most distinctive part of Marzano’s taxonomy. Short prompts at the start and end of a task can bring them into any lesson:',
        },
        {
          t: 'table',
          head: ['Level', 'Prompt'],
          rows: [
            ['Metacognition: goals', 'What exactly are you trying to achieve in this task? How will you know you have done it?'],
            ['Metacognition: monitoring', 'Is your method working? Which parts are you unsure about?'],
            ['Self: importance', 'How important is this to you, and why?'],
            ['Self: efficacy', 'How confident are you that you can do this? What would raise your confidence?'],
            ['Self: emotion', 'How do you feel about this topic? Is that feeling helping or getting in the way?'],
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          text: 'If learners are not engaging, the problem may sit in the self system, not the cognitive one. No amount of clearer explanation helps a learner who has decided the task is pointless or impossible. See [motivation](@teaching/theories/motivation).',
        },
      ],
    },
  ],
  sources: [
    'Marzano, R. J., & Kendall, J. S. (2007). *The new taxonomy of educational objectives* (2nd ed.). Corwin Press.',
    'Marzano, R. J., & Kendall, J. S. (2008). *Designing and assessing educational objectives: Applying the new taxonomy*. Corwin Press.',
  ],
  related: ['teaching/taxonomies/blooms', 'teaching/techniques/learning-strategies/metacognition', 'teaching/theories/motivation'],
}

export default guide
