import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Scaffolds are temporary supports that let a learner do something they could not yet do alone. The skill is in choosing the right support, and then taking it away at the right time so the learner stands on their own.',
  nutshell: [
    'Scaffold the **task**, not the **goal**: learners still do the important thinking.',
    'Types: verbal (prompts, questions), visual (organisers, diagrams), written (frames, stems, word banks), procedural (checklists, chunked steps), social (partners).',
    'Plan the **fade**: how and when each support will be reduced.',
    'Offer scaffolds to anyone who needs them, not to fixed groups.',
  ],
  sections: [
    {
      id: 'idea',
      title: 'What scaffolding is',
      blocks: [
        {
          t: 'p',
          text: 'The idea comes from Wood, Bruner and Ross (1976) and connects to Vygotsky’s zone of proximal development: with the right help, learners can succeed at tasks just beyond their independent reach, and that success moves their reach forward. See [social constructivism](@teaching/theories/social-constructivism).',
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Scaffold, don’t simplify away',
          text: 'A scaffold helps a learner do the real task. If the support removes the thinking the task was meant to develop (for example, filling in blanks in a finished essay instead of writing one), it is no longer a scaffold; it is a different, easier task.',
        },
      ],
    },
    {
      id: 'types',
      title: 'A toolkit of scaffolds',
      blocks: [
        {
          t: 'table',
          head: ['Type', 'Examples', 'Helps with'],
          rows: [
            ['Sentence stems', '"The evidence suggests… because…" "One difference between X and Y is…"', 'Getting started; academic language'],
            ['Writing frames', 'A paragraph structure with headings: point, evidence, explanation, link.', 'Organising longer writing'],
            ['Word banks', 'Key vocabulary with definitions or pictures.', 'Precise vocabulary; language learners'],
            ['Graphic organisers', 'Venn diagrams, flow charts, cause-and-effect charts, story maps.', 'Seeing structure; planning'],
            ['Worked examples', 'A fully solved problem to refer to. See [worked examples](@teaching/techniques/instruction/worked-examples).', 'Learning a procedure'],
            ['Chunking', 'Breaking a task into numbered steps with separate checkpoints.', 'Working memory; getting overwhelmed'],
            ['Checklists', 'Success criteria as tick boxes.', 'Self-checking; independence'],
            ['Hint cards', 'Graded hints from a nudge to a near-answer, turned over one at a time.', 'Getting unstuck without being told'],
            ['Pre-teaching', 'Key vocabulary or background taught before the lesson.', 'Access to new content'],
            ['Models', 'Annotated examples of good work.', 'Knowing what the goal looks like'],
          ],
        },
      ],
    },
    {
      id: 'fade',
      title: 'Planning the fade',
      lead: 'Scaffolds that never come down become crutches.',
      blocks: [
        {
          t: 'example',
          title: 'Fading sentence stems for analytical writing',
          lines: [
            { label: 'Week 1', text: 'Full paragraph frame: "In the poem, the poet uses ___ to show ___. For example, ‘___’. This suggests ___ because ___."' },
            { label: 'Week 2', text: 'Just the opening stems: "The poet uses… This suggests…"' },
            { label: 'Week 3', text: 'A reminder list: point, quote, explain, link.' },
            { label: 'Week 4', text: 'No scaffold. Learners who need it can ask for the reminder list.' },
          ],
        },
        {
          t: 'list',
          items: [
            'Make scaffolds **optional** where possible: available on the side, not built into everyone’s sheet.',
            'Move from **more to less** support over a unit.',
            'Ask learners to **judge** whether they still need a scaffold.',
            'Check independent performance regularly: can they do it without?',
          ],
        },
      ],
    },
  ],
  sources: [
    'Wood, D., Bruner, J. S., & Ross, G. (1976). The role of tutoring in problem solving. *Journal of Child Psychology and Psychiatry, 17*(2), 89–100.',
    'van de Pol, J., Volman, M., & Beishuizen, J. (2010). Scaffolding in teacher–student interaction: A decade of research. *Educational Psychology Review, 22*(3), 271–296.',
    'Gibbons, P. (2015). *Scaffolding language, scaffolding learning* (2nd ed.). Heinemann.',
  ],
  related: ['teaching/theories/social-constructivism', 'teaching/techniques/instruction/i-do-we-do-you-do', 'teaching/differentiation/language-learners'],
}

export default guide
