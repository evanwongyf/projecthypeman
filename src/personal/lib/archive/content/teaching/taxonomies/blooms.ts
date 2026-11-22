import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Bloom’s taxonomy sorts thinking into six levels, from remembering facts to creating something new. Teachers use it to write objectives, pitch questions and check that a unit asks for more than recall.',
  nutshell: [
    'The revised taxonomy (2001) has six levels: **Remember, Understand, Apply, Analyse, Evaluate, Create**.',
    'Each level is named by a verb, which makes it easy to write objectives and questions at the level you want.',
    'Higher levels depend on lower ones: you cannot evaluate an argument you do not understand.',
    'It is a classification, not a rule that lessons must climb the levels in order, or that "higher" is always better.',
  ],
  sections: [
    {
      id: 'history',
      title: 'Where it came from',
      lead: 'From 1956 to the 2001 revision.',
      blocks: [
        {
          t: 'p',
          text: 'In 1956 Benjamin Bloom and a committee of university examiners published a *Taxonomy of Educational Objectives* to help them share and compare test questions. It sorted cognitive objectives into six categories: Knowledge, Comprehension, Application, Analysis, Synthesis and Evaluation.',
        },
        {
          t: 'p',
          text: 'In 2001 a group led by Lorin Anderson (a student of Bloom) and David Krathwohl (a member of the original committee) revised it. They made three main changes:',
        },
        {
          t: 'list',
          items: [
            'The categories became **verbs** (Remember, not Knowledge) because objectives describe what learners *do*.',
            '**Create** (formerly Synthesis) moved to the top, above Evaluate.',
            'A second dimension was added: the **kind of knowledge** involved (factual, conceptual, procedural, metacognitive). See [the knowledge dimension](@teaching/taxonomies/blooms-knowledge).',
          ],
        },
        {
          t: 'table',
          head: ['Original (1956)', 'Revised (2001)', 'Position in the revision'],
          rows: [
            ['Knowledge', 'Remember', '1st (lowest)'],
            ['Comprehension', 'Understand', '2nd'],
            ['Application', 'Apply', '3rd'],
            ['Analysis', 'Analyse', '4th'],
            ['Evaluation', 'Evaluate', '5th (was 6th)'],
            ['Synthesis', 'Create', '6th, the top (was 5th)'],
          ],
          caption: 'Synthesis and Evaluation swapped places: Create now sits above Evaluate.',
        },
      ],
    },
    {
      id: 'levels',
      title: 'The six levels',
      lead: 'With verbs you can use in objectives.',
      blocks: [
        {
          t: 'levels',
          items: [
            { name: 'Remember', body: 'Retrieve relevant knowledge from long-term memory: recognising and recalling facts, terms, dates, definitions.', verbs: ['define', 'list', 'name', 'recall', 'recognise', 'state', 'label', 'match'] },
            { name: 'Understand', body: 'Construct meaning: interpret, give examples, classify, summarise, infer, compare, explain.', verbs: ['explain', 'summarise', 'paraphrase', 'classify', 'compare', 'give an example', 'interpret', 'predict'] },
            { name: 'Apply', body: 'Carry out or use a procedure in a given situation, familiar or new.', verbs: ['use', 'solve', 'calculate', 'carry out', 'demonstrate', 'implement', 'apply'] },
            { name: 'Analyse', body: 'Break material into parts and work out how the parts relate to each other and to the whole: differentiate, organise, attribute.', verbs: ['analyse', 'distinguish', 'organise', 'deconstruct', 'compare and contrast', 'attribute', 'outline'] },
            { name: 'Evaluate', body: 'Make judgements based on criteria and standards: check and critique.', verbs: ['evaluate', 'judge', 'justify', 'critique', 'assess', 'argue', 'defend', 'rank'] },
            { name: 'Create', body: 'Put elements together into a coherent or original whole: generate, plan, produce.', verbs: ['design', 'compose', 'construct', 'plan', 'invent', 'formulate', 'hypothesise', 'produce'] },
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'The verb is not enough',
          text: 'The same verb can sit at different levels. "Explain photosynthesis" is Remember if the learner is repeating a memorised explanation, and Understand if they are explaining it in their own words. "Compare" can be Understand or Analyse. Always ask what thinking the task actually requires of *this* learner.',
        },
      ],
    },
    {
      id: 'questions',
      title: 'Question stems for each level',
      lead: 'Ready-made prompts for any subject.',
      blocks: [
        {
          t: 'table',
          head: ['Level', 'Question stems', 'Example: the water cycle'],
          rows: [
            ['Remember', 'What is…? Name the… When did…? List the…', 'Name the four main stages of the water cycle.'],
            ['Understand', 'Explain in your own words… What is the main idea…? Why does…?', 'Explain why puddles disappear on a sunny day.'],
            ['Apply', 'How would you use…? What would happen if…? Solve…', 'Use the water cycle to explain why a cold can of drink "sweats".'],
            ['Analyse', 'What are the parts of…? How is… related to…? What evidence…?', 'How does cutting down a forest affect each stage of the local water cycle?'],
            ['Evaluate', 'Which is better, and why? Do you agree…? How would you judge…?', 'Is building a dam a good way to deal with drought? Justify your answer.'],
            ['Create', 'Design a… How could you…? Propose a…', 'Design a device that collects drinking water from air in a desert.'],
          ],
        },
      ],
    },
    {
      id: 'using',
      title: 'Using Bloom’s in practice',
      lead: 'Objectives, questions and assessment.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Write objectives with a clear verb', body: '"Learners will be able to **compare** the causes of the two world wars" tells you what to teach and what to assess. Avoid verbs you cannot observe, like "know" or "appreciate". See [objectives and success criteria](@teaching/assessment/objectives).' },
            { title: 'Plan a spread of questions', body: 'Write a few questions at each level before the lesson. Most classes drift toward Remember unless higher questions are planned.' },
            { title: 'Build the base first', body: 'Learners need solid knowledge to analyse, evaluate or create well. Higher-order tasks on thin knowledge produce thin answers.' },
            { title: 'Check alignment', body: 'If your objective says "evaluate" but your test only asks learners to list, the two do not match. See [constructive alignment](@teaching/assessment/alignment).' },
            { title: 'Audit a unit', body: 'Tag each task or test question with its level. Are some levels missing? Is everything at one level?' },
          ],
        },
        {
          t: 'p',
          text: 'For a complete walkthrough of one topic taught and assessed at every level, see [Bloom’s in a real lesson](@teaching/guides/planning/blooms-in-practice).',
        },
        { t: 'tool', tool: 'objective-builder' },
      ],
    },
    {
      id: 'criticism',
      title: 'Common misuses',
      lead: 'What Bloom’s is not.',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Use it to check the range of thinking in your lessons and assessments.',
            'Treat knowledge as the foundation that makes higher thinking possible.',
            'Remember that a single rich task can involve several levels at once.',
          ],
          dont: [
            'Think "Remember" is bad teaching. Knowledge is essential and fluency in it frees up thinking.',
            'Force every lesson to climb all six levels in order.',
            'Rely on verb lists alone to judge the level of a task.',
            'Treat the levels as a strict hierarchy of difficulty; a hard recall question can be harder than an easy creative one.',
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          text: 'Critics point out that the cumulative hierarchy is not strictly supported: people sometimes evaluate or create without full analysis, and categories blur. Anderson and Krathwohl themselves loosened the hierarchy in the revision. It remains a useful vocabulary for talking about thinking, which was always its main purpose.',
        },
      ],
    },
  ],
  sources: [
    'Bloom, B. S. (Ed.), Engelhart, M. D., Furst, E. J., Hill, W. H., & Krathwohl, D. R. (1956). *Taxonomy of educational objectives: Handbook I, the cognitive domain*. David McKay.',
    'Anderson, L. W., & Krathwohl, D. R. (Eds.). (2001). *A taxonomy for learning, teaching, and assessing: A revision of Bloom’s taxonomy of educational objectives*. Longman.',
    'Krathwohl, D. R. (2002). A revision of Bloom’s taxonomy: An overview. *Theory Into Practice, 41*(4), 212–218.',
  ],
  related: ['teaching/taxonomies/blooms-knowledge', 'teaching/taxonomies/solo', 'teaching/taxonomies/dok', 'teaching/guides/planning/blooms-in-practice', 'teaching/assessment/objectives'],
}

export default guide
