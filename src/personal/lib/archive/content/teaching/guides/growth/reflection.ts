import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Experience alone does not make a better teacher. Reflection, looking back at what happened, making sense of it and deciding what to change, is what turns experience into expertise. A few simple structures make reflection quicker and more useful.',
  nutshell: [
    '**Gibbs’ cycle**: description, feelings, evaluation, analysis, conclusion, action plan.',
    '**What? So what? Now what?** is a quick three-step version.',
    '**Brookfield’s four lenses**: yourself, your learners, your colleagues, and research.',
    'Reflect on evidence, not just impressions: learners’ work, exit tickets, video.',
  ],
  sections: [
    {
      id: 'gibbs',
      title: 'Gibbs’ reflective cycle',
      lead: 'Graham Gibbs (1988).',
      blocks: [
        {
          t: 'cycle',
          items: [
            { name: 'Description', body: 'What happened? Just the facts.' },
            { name: 'Feelings', body: 'What were you thinking and feeling at the time?' },
            { name: 'Evaluation', body: 'What went well? What went badly?' },
            { name: 'Analysis', body: 'Why did things go that way? What theory or research helps explain it?' },
            { name: 'Conclusion', body: 'What else could you have done? What have you learned?' },
            { name: 'Action plan', body: 'What will you do differently next time?' },
          ],
          caption: 'The action plan is tried out in practice, which becomes the next experience to reflect on.',
        },
        {
          t: 'example',
          title: 'A short Gibbs reflection',
          lines: [
            { label: 'Description', text: 'In period 3, the group task on the causes of WW1 descended into chatter after five minutes.' },
            { label: 'Feelings', text: 'I felt frustrated and a bit embarrassed as my mentor was observing.' },
            { label: 'Evaluation', text: 'The explanation beforehand went well; exit tickets show most understood the causes. The group work did not.' },
            { label: 'Analysis', text: 'Groups had no roles and no clear product, and one person could do it all. This lacks individual accountability (see [cooperative learning](@teaching/techniques/active-learning/cooperative)).' },
            { label: 'Conclusion', text: 'The problem was the task design, not the class.' },
            { label: 'Action plan', text: 'Next time: assigned roles, a 10-minute timer, and a random reporter from each group.' },
          ],
        },
      ],
    },
    {
      id: 'quick',
      title: 'Quick reflection',
      blocks: [
        {
          t: 'cards',
          cols: 3,
          items: [
            { title: 'What?', body: 'What happened? What did learners do and say? What evidence do I have?' },
            { title: 'So what?', body: 'Why does it matter? What does it tell me about their learning, or my teaching?' },
            { title: 'Now what?', body: 'What will I do next lesson because of this?' },
          ],
        },
        {
          t: 'p',
          text: 'Rolfe, Freshwater and Jasper (2001) proposed this three-question model. It fits into two minutes at the end of a lesson.',
        },
      ],
    },
    {
      id: 'lenses',
      title: 'Brookfield’s four lenses',
      lead: 'Checking your assumptions from different angles.',
      blocks: [
        {
          t: 'terms',
          items: [
            { term: 'Autobiographical', def: 'Your own experience as a learner and teacher. What do you remember about learning like this yourself?' },
            { term: 'Learners’ eyes', def: 'How do learners experience your teaching? Ask them: anonymous surveys, exit questions ("What was most confusing today?").' },
            { term: 'Colleagues', def: 'What do peers see? Observations, co-planning, lesson study, coaching.' },
            { term: 'Theory and research', def: 'What does the research say about why this happens and what might help? This archive is a starting point.' },
          ],
        },
        {
          t: 'p',
          text: 'Stephen Brookfield argues that we cannot see our own assumptions clearly from the inside. Each lens reveals things the others miss.',
        },
      ],
    },
    {
      id: 'habits',
      title: 'Making it a habit',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Keep a short reflection journal: a few lines after key lessons.',
            'Focus on one area at a time, such as questioning, for a few weeks.',
            'Video a lesson now and then and watch for one thing.',
            'Talk with a colleague or coach regularly.',
            'Base reflection on evidence of learning, not only on how the lesson felt.',
          ],
          dont: [
            'Only reflect on lessons that went badly.',
            'Stop at description and feelings without reaching an action.',
            'Try to change everything at once.',
          ],
        },
      ],
    },
  ],
  sources: [
    'Gibbs, G. (1988). *Learning by doing: A guide to teaching and learning methods*. Further Education Unit.',
    'Schön, D. A. (1983). *The reflective practitioner*. Basic Books.',
    'Brookfield, S. D. (2017). *Becoming a critically reflective teacher* (2nd ed.). Jossey-Bass.',
    'Rolfe, G., Freshwater, D., & Jasper, M. (2001). *Critical reflection for nursing and the helping professions*. Palgrave.',
  ],
  related: ['teaching/theories/experiential', 'teaching/guides/growth/research', 'teaching/techniques/learning-strategies/metacognition'],
}

export default guide
