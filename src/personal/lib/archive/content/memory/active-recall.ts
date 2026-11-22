import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'Active recall means testing yourself: closing the book and trying to bring the information back from memory. It is the single most useful change most learners can make, because every act of recall strengthens the memory.',
  nutshell: [
    'Close the book. Ask yourself a question. Answer from memory. Then check.',
    'It feels harder than rereading, and it works much better. The struggle is the point.',
    'Always check your answers so mistakes do not stick.',
    'Recall a topic several times, spaced across days and weeks.',
  ],
  sections: [
    {
      id: 'methods',
      title: 'Five ways to do it',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Blurting', body: 'Pick a topic, set a timer for 5–10 minutes, and write everything you remember on a blank page. Then check your notes and add what you missed in a different colour. Those gaps are what to study next.' },
            { title: 'Flashcards', body: 'Question on the front, answer on the back. Answer out loud or on paper **before** flipping. See [making good flashcards](@memory/flashcards).' },
            { title: 'Practice questions', body: 'Textbook questions, past papers, or questions you write for yourself while studying.' },
            { title: 'Question-based notes', body: 'Write questions in the margin of your notes, cover the notes, and answer ([Cornell method](@note-taking/methods/cornell)).' },
            { title: 'Teach it', body: 'Explain the topic aloud to someone, or to an empty room, without notes.' },
          ],
        },
      ],
    },
    {
      id: 'why',
      title: 'Why it works',
      blocks: [
        {
          t: 'p',
          text: 'In one well-known experiment, students who read a passage once and then practised recalling it remembered far more a week later than students who spent the same time rereading it (Roediger & Karpicke, 2006). Pulling information out strengthens the memory and the path to it. It also shows you honestly what you do and do not know. See [retrieval practice](@teaching/techniques/learning-strategies/retrieval-practice) for the research.',
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'The illusion of knowing',
          text: 'Rereading makes material feel familiar, and familiarity feels like knowing. It is not the same as being able to recall it in an exam. If you can only recognise it with the page in front of you, you do not know it yet.',
        },
      ],
    },
    {
      id: 'session',
      title: 'A recall study session',
      blocks: [
        {
          t: 'example',
          title: '45 minutes on one topic',
          lines: [
            { label: '0–10', text: 'Blurt everything you remember about the topic from memory.' },
            { label: '10–15', text: 'Check against notes; mark gaps and errors in red.' },
            { label: '15–30', text: 'Study the gaps: reread just those parts, make flashcards for them.' },
            { label: '30–40', text: 'Practice questions on the topic, without notes.' },
            { label: '40–45', text: 'Check, and write down what to revisit in 3 days.' },
          ],
        },
      ],
    },
    {
      id: 'try',
      title: 'Try it today',
      blocks: [
        {
          t: 'checklist',
          items: [
            'Pick one topic you studied this week.',
            'Blurt it onto a blank page for five minutes.',
            'Check against your notes and mark the gaps.',
            'Make three flashcards for the biggest gaps.',
            'Put a reminder in your calendar to blurt it again in three days.',
          ],
        },
      ],
    },
  ],
  sources: [
    'Roediger, H. L., & Karpicke, J. D. (2006). Test-enhanced learning. *Psychological Science, 17*(3), 249–255.',
    'Brown, P. C., Roediger, H. L., & McDaniel, M. A. (2014). *Make it stick*. Harvard University Press.',
  ],
  related: ['teaching/techniques/learning-strategies/retrieval-practice', 'memory/flashcards', 'exams/revision-methods'],
}

export default guide
