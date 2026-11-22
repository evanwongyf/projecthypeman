import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'L. Dee Fink’s taxonomy of significant learning (2003) asks a bigger question than "what should learners know?". It asks what would make a course **matter** to them years later, and answers with six kinds of learning that feed each other.',
  nutshell: [
    'Six kinds of learning: **foundational knowledge, application, integration, human dimension, caring, learning how to learn**.',
    'Unlike Bloom’s, it is **not a hierarchy**. The six interact, and each makes the others stronger.',
    'It deliberately includes feelings, values and self-knowledge, not just thinking.',
    'Useful for designing whole courses or units, especially at college level.',
  ],
  sections: [
    {
      id: 'six',
      title: 'Six kinds of significant learning',
      lead: 'Each with a planning question.',
      blocks: [
        {
          t: 'cards',
          items: [
            { tag: '1', title: 'Foundational knowledge', body: 'Understanding and remembering key information and ideas. *What key facts, concepts and perspectives should learners understand and remember?*' },
            { tag: '2', title: 'Application', body: 'Skills; critical, creative and practical thinking; managing projects. *What should learners be able to do with that knowledge?*' },
            { tag: '3', title: 'Integration', body: 'Connecting ideas across topics, subjects and life. *What connections should learners see, within the course, to other courses and to their lives?*' },
            { tag: '4', title: 'Human dimension', body: 'Learning about oneself and others. *What should learners learn about themselves, and about working with others, from this subject?*' },
            { tag: '5', title: 'Caring', body: 'Developing new feelings, interests and values. *What should learners come to care about, or care about more?*' },
            { tag: '6', title: 'Learning how to learn', body: 'Becoming a better, more self-directed learner. *What should learners learn about how to keep learning this subject after the course ends?*' },
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Interactive, not stacked',
          text: 'Fink drew the six as a circle with every kind connected to every other. Caring about a subject makes learners work at foundational knowledge; application reveals gaps that drive learning how to learn. A course that hits several kinds at once is more likely to produce lasting learning.',
        },
      ],
    },
    {
      id: 'design',
      title: 'Designing with Fink',
      lead: 'Integrated course design in brief.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Situational factors', body: 'Who are the learners, what is the context, what do they bring, what constraints are there?' },
            { title: 'Learning goals', body: 'Write one or two goals for each of the six kinds.' },
            { title: 'Feedback and assessment', body: 'Plan "educative assessment": forward-looking tasks with clear criteria, self-assessment and frequent, prompt feedback.' },
            { title: 'Learning activities', body: 'Plan activities that give learners information and ideas, experiences (doing and observing), and reflection.' },
            { title: 'Integration check', body: 'Make sure goals, assessment and activities support each other (see [constructive alignment](@teaching/assessment/alignment)).' },
          ],
        },
        {
          t: 'example',
          title: 'Six goals for an introductory statistics unit',
          lines: [
            { label: 'Foundational', text: 'Explain mean, median, variance and correlation.' },
            { label: 'Application', text: 'Choose and calculate the right summary statistic for a data set.' },
            { label: 'Integration', text: 'Spot statistical claims in news stories from other subjects and everyday life.' },
            { label: 'Human dimension', text: 'Recognise your own reactions to numbers, and explain statistics to someone else clearly.' },
            { label: 'Caring', text: 'Value evidence over anecdote when making decisions.' },
            { label: 'Learning how to learn', text: 'Know how to check an unfamiliar statistical method using reliable sources.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Fink, L. D. (2003). *Creating significant learning experiences: An integrated approach to designing college courses*. Jossey-Bass. (Revised edition 2013)',
  ],
  related: ['teaching/taxonomies/compare', 'teaching/taxonomies/affective', 'teaching/guides/planning/backward-design'],
}

export default guide
