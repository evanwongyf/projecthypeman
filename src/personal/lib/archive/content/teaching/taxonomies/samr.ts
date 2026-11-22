import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'SAMR, from Ruben Puentedura, is a ladder for describing how technology changes a learning task: from simply replacing paper to making possible something that could not be done before. TPACK sits alongside it and describes the knowledge a teacher needs to do that well.',
  nutshell: [
    '**Substitution** → **Augmentation** → **Modification** → **Redefinition**.',
    'S and A enhance a task; M and R transform it.',
    'Higher is not automatically better: the right level depends on the learning goal. Text-to-speech for a learner with dyslexia is “only” substitution, and transformative for that learner.',
  ],
  sections: [
    {
      id: 'ladder',
      title: 'The ladder',
      blocks: [
        { t: 'levels', items: [
          { name: 'Substitution', body: 'Technology replaces a tool with no functional change. Typing an essay instead of handwriting it.' },
          { name: 'Augmentation', body: 'Direct replacement with functional improvement. Spell-check, comments, dictation, a quiz that marks itself.' },
          { name: 'Modification', body: 'Significant task redesign. The essay becomes a shared document that classmates comment on and the writer revises in response.' },
          { name: 'Redefinition', body: 'New tasks that were inconceivable without the technology. Learners publish an audio documentary interviewing experts abroad, edited from their own recordings.' },
        ] },
      ],
    },
    {
      id: 'tpack',
      title: 'TPACK',
      blocks: [
        { t: 'p', text: 'Mishra and Koehler’s **TPACK** says effective tech use sits where three kinds of knowledge overlap: **content** (the subject), **pedagogy** (how to teach it) and **technology** (what the tools can do). Knowing an app well is not enough; the question is which tool, used how, makes this particular idea easier to learn.' },
        { t: 'mindmap', center: 'TPACK', branches: [
          { label: 'Content knowledge', tone: 'teal', items: ['Concepts', 'Misconceptions', 'Disciplinary ways of thinking'] },
          { label: 'Pedagogical knowledge', tone: 'orange', items: ['Explanation', 'Practice', 'Assessment', 'Behaviour'] },
          { label: 'Technological knowledge', tone: 'lavender', items: ['Tools', 'Affordances', 'Limits', 'Accessibility'] },
          { label: 'The overlap', tone: 'mint', items: ['Which tool for this idea', 'For these learners', 'At this moment'] },
        ] },
      ],
    },
  ],
  sources: ['Puentedura, R. (2006). Transformation, technology, and education. Hippasus.', 'Mishra, P. & Koehler, M. J. (2006). Technological pedagogical content knowledge. Teachers College Record 108(6).', 'Hamilton, E. R., Rosenberg, J. M. & Akcaoglu, M. (2016). The SAMR model: a critical review and suggestions for its use. TechTrends 60.'],
  related: ['teaching/taxonomies/digital-blooms', 'teaching/special-education/strategies/assistive-tech'],
}

export default guide
