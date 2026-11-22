import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'One-to-one and small-group tutoring is among the most effective ways to help a learner catch up or move ahead. The advantage is not magic; it is that a tutor can diagnose exactly what one learner needs and respond instantly. Used well, a tutor also builds the learner’s independence, not their dependence.',
  nutshell: [
    'Tutoring has strong evidence, especially when frequent, structured and linked to classroom learning.',
    'The learner should do most of the thinking and talking. Ask more; tell less.',
    'Diagnose before you teach: find the exact gap or misconception.',
    'End each session with the learner doing it alone and knowing what to practise.',
  ],
  sections: [
    {
      id: 'evidence',
      title: 'Why tutoring works',
      blocks: [
        {
          t: 'p',
          text: 'A meta-analysis of nearly 100 randomised trials found that tutoring programmes produce substantial gains in learning on average, with the largest effects for tutoring delivered by teachers or trained paraprofessionals, several times a week, during the school day (Nickow, Oreopoulos & Quan, 2020). Bloom’s famous "2 sigma" finding also came from tutoring combined with mastery methods (see [mastery learning](@teaching/techniques/instruction/mastery)).',
        },
      ],
    },
    {
      id: 'session',
      title: 'A session structure',
      lead: 'For a 45–60 minute session.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Check in (2–3 min)', body: 'How are they? What happened in class this week? Any homework or tests coming up?' },
            { title: 'Retrieval (5 min)', body: 'Quick questions on last session’s content, done from memory.' },
            { title: 'Diagnose (5 min)', body: 'Give a question on today’s focus and watch closely. Ask them to talk through their thinking. Find the exact point where it goes wrong.' },
            { title: 'Teach (10 min)', body: 'Target that specific gap: explain, model, use a worked example. Keep it short.' },
            { title: 'Guided practice (10–15 min)', body: 'Learner tries similar problems while you prompt with questions, not answers.' },
            { title: 'Independent attempt (5–10 min)', body: 'Learner does a problem alone. You watch without helping.' },
            { title: 'Summarise and plan (3 min)', body: 'Learner says in their own words what they learned. Agree what to practise before next time.' },
          ],
        },
      ],
    },
    {
      id: 'questioning',
      title: 'Questions over answers',
      blocks: [
        {
          t: 'table',
          head: ['Instead of telling…', 'Ask…'],
          rows: [
            ['"You need to divide both sides by 3."', '"What is stopping x from being on its own? What could undo that?"'],
            ['"That’s wrong."', '"Talk me through how you got that."'],
            ['"The answer is photosynthesis."', '"What do plants need light for?"'],
            ['"Good, next one."', '"How do you know it’s right? Could you check it another way?"'],
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Resist the rescue',
          text: 'The hardest part of tutoring is staying quiet while a learner struggles productively. Count to ten before stepping in, and step in with the smallest possible hint. See [scaffolding](@teaching/differentiation/scaffolding).',
        },
      ],
    },
    {
      id: 'independence',
      title: 'Building independence',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Teach study strategies alongside content: self-testing, spacing, how to use worked examples.',
            'Ask the learner to set the agenda sometimes: "What do you want to work on?"',
            'Link tutoring to what is happening in class.',
            'Keep notes on progress and gaps from session to session.',
          ],
          dont: [
            'Do homework for the learner.',
            'Talk for most of the session.',
            'Move on after one correct answer.',
            'Let the learner leave without having done it alone.',
          ],
        },
      ],
    },
  ],
  sources: [
    'Nickow, A., Oreopoulos, P., & Quan, V. (2020). *The impressive effects of tutoring on preK–12 learning: A systematic review and meta-analysis of the experimental evidence* (NBER Working Paper No. 27476).',
    'Education Endowment Foundation. *Teaching and Learning Toolkit: One to one tuition; Small group tuition*.',
    'Chi, M. T. H., Siler, S. A., Jeong, H., Yamauchi, T., & Hausmann, R. G. (2001). Learning from human tutoring. *Cognitive Science, 25*(4), 471–533.',
  ],
  related: ['teaching/techniques/instruction/mastery', 'teaching/differentiation/scaffolding', 'teaching/techniques/questioning/questioning'],
}

export default guide
