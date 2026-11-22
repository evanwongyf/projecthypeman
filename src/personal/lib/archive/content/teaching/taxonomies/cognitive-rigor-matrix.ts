import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Bloom’s describes the kind of thinking; Webb’s Depth of Knowledge describes how complex the task is. Karin Hess put them on two axes of one grid, the Cognitive Rigor Matrix, so a teacher can see whether a unit only ever asks for shallow work, and plan tasks that are both higher-order and genuinely complex.',
  nutshell: [
    'Rows: Bloom’s six processes. Columns: DOK levels 1–4. Each cell is a type of task.',
    '“Analyse” can be DOK 1 (identify the parts in a labelled diagram) or DOK 4 (analyse several sources over weeks), the verb alone does not set the rigour.',
    'Use it to audit a unit’s tasks: most curricula cluster in the top-left (remember/understand × DOK 1–2).',
  ],
  sections: [
    {
      id: 'grid',
      title: 'The matrix (examples from a reading unit)',
      blocks: [
        { t: 'table', head: ['Bloom ↓ / DOK →', 'DOK 1 Recall', 'DOK 2 Skills & concepts', 'DOK 3 Strategic thinking', 'DOK 4 Extended thinking'], rows: [
          ['Remember', 'Recall the names of characters', 'Retrieve key events in order', '-', '-'],
          ['Understand', 'Define a word from context', 'Summarise a chapter', 'Explain how a theme develops with evidence', 'Explain how themes recur across several works'],
          ['Apply', 'Use a punctuation rule', 'Apply a reading strategy to a new text', 'Use evidence to support a claim in a new context', 'Apply a framework to a self-chosen set of texts'],
          ['Analyse', 'Identify the setting', 'Compare two characters', 'Analyse the author’s craft and its effect', 'Analyse several authors’ treatment of one idea'],
          ['Evaluate', '-', '-', 'Judge the strength of an argument with criteria', 'Evaluate an issue using multiple sources and perspectives over time'],
          ['Create', 'Brainstorm ideas', 'Write a paragraph with a model', 'Write an argument for a specific audience', 'Research and produce an extended piece that synthesises sources'],
        ] },
      ],
    },
    {
      id: 'use',
      title: 'Using it',
      blocks: [
        { t: 'steps', items: [
          { title: 'Map', body: 'Place every task in a unit into a cell.' },
          { title: 'Look for clustering', body: 'Most units are heavy in the top-left. Learners who are capable of more never get the chance.' },
          { title: 'Raise one dimension at a time', body: 'Turn “summarise the chapter” (Understand, DOK 2) into “explain how this chapter changes our view of the narrator, with two quotations” (Understand, DOK 3).' },
          { title: 'Scaffold, do not lower', body: 'For learners who struggle, keep the rigorous task and add supports (sentence stems, partially completed organisers) rather than moving them to a simpler cell.' },
        ] },
      ],
    },
  ],
  sources: ['Hess, K., Jones, B., Carlock, D. & Walkup, J. (2009). Cognitive rigor: blending the strengths of Bloom’s taxonomy and Webb’s depth of knowledge. ERIC ED517804.'],
  related: ['teaching/taxonomies/blooms', 'teaching/taxonomies/dok'],
}

export default guide
