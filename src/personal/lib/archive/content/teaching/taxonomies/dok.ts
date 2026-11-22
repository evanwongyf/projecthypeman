import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Norman Webb’s Depth of Knowledge (DOK) describes how **complex** a task is: how much and what kind of thinking it takes to complete. It was built to check whether tests match the demands of standards, and is now widely used for planning rigour.',
  nutshell: [
    'Four levels: **recall and reproduction, skills and concepts, strategic thinking, extended thinking**.',
    'DOK is about the task, not the verb. "Describe" can be DOK 1 or DOK 3 depending on what it asks for.',
    'Harder is not the same as deeper: a difficult recall question is still DOK 1.',
    'DOK and Bloom’s answer different questions and can be combined in a cognitive rigour matrix.',
  ],
  sections: [
    {
      id: 'levels',
      title: 'The four levels',
      lead: 'What each level asks of the learner.',
      blocks: [
        {
          t: 'levels',
          items: [
            { name: 'DOK 1: Recall and reproduction', body: 'Recall a fact, term, definition or simple procedure. There is one right answer and learners either know it or do not. *Example: What is the formula for the area of a triangle?*' },
            { name: 'DOK 2: Skills and concepts', body: 'Use information or conceptual knowledge, often making a decision about how to approach a problem. Two or more steps. *Example: Compare the life cycles of a frog and a butterfly.*' },
            { name: 'DOK 3: Strategic thinking', body: 'Reasoning, planning and using evidence. More than one possible answer, with a justification required. *Example: Which of two proposals would better reduce traffic in our town? Support your choice with data.*' },
            { name: 'DOK 4: Extended thinking', body: 'Complex reasoning over an extended period, often synthesising multiple sources or conducting an investigation. *Example: Design and run a two-week study of plant growth under different light conditions and report your findings.*' },
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          text: 'Time alone does not make a task DOK 4. Copying facts into a poster for two weeks is still recall. DOK 4 needs sustained complex thinking, such as connecting and evaluating several sources or designing and interpreting an investigation.',
        },
      ],
    },
    {
      id: 'not-verbs',
      title: 'Depth, not difficulty',
      lead: 'Why DOK is not a verb list.',
      blocks: [
        {
          t: 'p',
          text: 'The verb in a question often misleads. Look at what the learner actually has to do:',
        },
        {
          t: 'table',
          head: ['Task', 'DOK', 'Why'],
          rows: [
            ['Describe the three states of matter.', '1', 'Recall of learned descriptions.'],
            ['Describe the difference between how particles move in a solid and a gas.', '2', 'Requires comparing and relating concepts.'],
            ['Describe a model that explains why ice floats, and the evidence for it.', '3', 'Requires reasoning and evidence to support an explanation.'],
          ],
        },
        {
          t: 'p',
          text: '**Difficulty** is how many learners get it right. **Depth** is the kind of thinking required. Naming all 118 elements in order is very difficult, but it is DOK 1.',
        },
      ],
    },
    {
      id: 'matrix',
      title: 'DOK with Bloom’s',
      lead: 'The cognitive rigour matrix.',
      blocks: [
        {
          t: 'p',
          text: 'Karin Hess (2009) combined the two frameworks into a **cognitive rigour matrix**, with Bloom’s levels down one side and DOK across the top. Bloom’s says what kind of thinking; DOK says how deep it goes. The cell tells you both.',
        },
        {
          t: 'table',
          head: ['', 'DOK 1', 'DOK 2', 'DOK 3', 'DOK 4'],
          rows: [
            ['Remember', 'Recall a date', '-', '-', '-'],
            ['Understand', 'Retell a story’s events', 'Summarise the main theme', 'Explain how the theme develops across the text, with evidence', 'Explain how the theme appears across several works by the author'],
            ['Apply', 'Follow a formula', 'Solve a routine two-step problem', 'Solve a non-routine problem and justify the method', 'Apply a model to a real-world investigation'],
            ['Analyse', 'Identify parts of a sentence', 'Classify characters by motive', 'Analyse how the author’s choices create tension', 'Analyse a pattern across multiple data sets'],
            ['Evaluate', '-', '-', 'Judge an argument’s strength using evidence', 'Evaluate competing solutions using research'],
            ['Create', 'Brainstorm ideas', 'Generate a simple hypothesis', 'Develop an original argument', 'Design and carry out a research project'],
          ],
          caption: 'Illustrative examples. A dash means the combination rarely makes sense.',
        },
      ],
    },
    {
      id: 'using',
      title: 'Using DOK in planning',
      lead: 'Balancing a unit and a test.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Match the standard', body: 'Decide what DOK level the standard or goal actually demands. A goal to "construct an argument" is at least DOK 3.' },
            { title: 'Tag your tasks', body: 'Label each task and test item with its DOK level. Many units turn out to be mostly DOK 1 and 2.' },
            { title: 'Build up, not only up', body: 'Learners need DOK 1 and 2 knowledge to succeed at DOK 3 and 4. A unit should contain all levels, in a sensible mix.' },
            { title: 'Plan at least one DOK 3 task', body: 'In most units, give learners at least one task that needs reasoning with evidence and allows more than one defensible answer.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Webb, N. L. (1997). *Criteria for alignment of expectations and assessments in mathematics and science education* (Research Monograph No. 6). Council of Chief State School Officers.',
    'Webb, N. L. (2002). *Depth-of-knowledge levels for four content areas*. Wisconsin Center for Education Research.',
    'Hess, K. K., Jones, B. S., Carlock, D., & Walkup, J. R. (2009). *Cognitive rigor: Blending the strengths of Bloom’s taxonomy and Webb’s depth of knowledge to enhance classroom-level processes*. ERIC ED517804.',
  ],
  related: ['teaching/taxonomies/blooms', 'teaching/taxonomies/compare', 'teaching/assessment/test-design'],
}

export default guide
