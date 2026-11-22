import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The SOLO taxonomy describes how a learner’s understanding grows in **structure**: from missing the point, to one relevant idea, to several, to seeing how they connect, to going beyond them. It is especially good for judging answers and giving feedback.',
  nutshell: [
    'SOLO stands for **Structure of the Observed Learning Outcome** (Biggs & Collis, 1982).',
    'Five levels: **prestructural, unistructural, multistructural, relational, extended abstract**.',
    'The big jump is from multistructural (a list of points) to relational (the points connected into a whole).',
    'Because it describes the structure of an answer, SOLO works well for rubrics and feedback in any subject.',
  ],
  sections: [
    {
      id: 'levels',
      title: 'The five levels',
      lead: 'From no idea to going beyond.',
      blocks: [
        {
          t: 'levels',
          items: [
            { name: 'Prestructural', body: 'The learner misses the point. The answer is irrelevant, confused, or repeats the question.', verbs: ['misses the point'] },
            { name: 'Unistructural', body: 'One relevant aspect. The answer is correct as far as it goes but focuses on a single idea.', verbs: ['identify', 'name', 'define', 'follow a simple procedure'] },
            { name: 'Multistructural', body: 'Several relevant aspects, treated independently. A list of correct points with no connections between them.', verbs: ['describe', 'list', 'combine', 'enumerate', 'outline'] },
            { name: 'Relational', body: 'The aspects are integrated into a coherent whole. The learner explains how ideas connect, cause each other or fit a pattern.', verbs: ['explain causes', 'compare and contrast', 'relate', 'analyse', 'apply', 'sequence'] },
            { name: 'Extended abstract', body: 'The integrated whole is taken to a higher level of abstraction and applied to new areas. The learner generalises, theorises or makes a prediction beyond the given material.', verbs: ['generalise', 'hypothesise', 'theorise', 'reflect', 'create', 'predict'] },
          ],
        },
        {
          t: 'p',
          text: 'The first three levels are mostly about **quantity**: how much the learner knows. The last two are about **quality**: how deeply it is understood. Biggs described a shift from "surface" to "deep" learning as learners move from multistructural to relational.',
        },
      ],
    },
    {
      id: 'example',
      title: 'One question, five answers',
      lead: 'SOLO applied to real responses.',
      blocks: [
        {
          t: 'example',
          title: 'Why did the Roman Empire in the West fall?',
          lines: [
            { label: 'Prestructural', text: '"The Romans were in Italy and they had gladiators."' },
            { label: 'Unistructural', text: '"Because barbarian tribes invaded."' },
            { label: 'Multistructural', text: '"Barbarians invaded. The economy was weak. There were lots of different emperors. The empire was too big."' },
            { label: 'Relational', text: '"The empire was so large that defending its borders was very expensive. Heavy taxes to pay the army weakened the economy, and frequent civil wars between rival emperors pulled troops away from the frontier. This left it less able to resist the tribes that invaded."' },
            { label: 'Extended abstract', text: '"Rome’s fall suggests that very large empires may be vulnerable when the cost of holding them grows faster than the wealth they produce. You could test that idea against other empires, such as the Mongols or the British Empire."' },
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'The feedback writes itself',
          text: 'A multistructural answer needs connection: "You have four good causes. Now show how one led to another." A relational answer can be pushed to extended abstract: "Does this pattern apply anywhere else?"',
        },
      ],
    },
    {
      id: 'classroom',
      title: 'SOLO in the classroom',
      lead: 'Ways teachers use it.',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Rubrics', body: 'Level descriptors based on SOLO describe the quality of connections, not just the number of points, and apply across topics. See [rubrics](@teaching/assessment/rubrics).' },
            { title: 'Learning intentions', body: 'Write objectives at the level you want: "Explain how three factors combined to cause…" (relational) rather than "List factors…" (multistructural).' },
            { title: 'Hexagons', body: 'Learners write one idea per hexagon, then arrange the hexagons so touching edges share a link and explain each link. It turns a multistructural list into a relational map.' },
            { title: 'Self-assessment', body: 'Learners place their own answer on the SOLO scale using hand signs or icons, then plan how to move up a level.' },
          ],
        },
      ],
    },
    {
      id: 'vs-bloom',
      title: 'SOLO or Bloom’s?',
      lead: 'Different jobs.',
      blocks: [
        {
          t: 'table',
          head: ['', 'Bloom’s (revised)', 'SOLO'],
          rows: [
            ['Describes', 'The kind of thinking a task asks for', 'The structure of understanding shown in an answer'],
            ['Best for', 'Planning objectives and question types', 'Judging responses and giving feedback'],
            ['Levels', 'Six cognitive processes', 'Five levels of increasing complexity'],
            ['Key idea', 'Different verbs, different thinking', 'From more ideas to connected ideas'],
          ],
        },
        {
          t: 'p',
          text: 'They work well together. Use Bloom’s to design the task and SOLO to judge the answers. See [choosing a taxonomy](@teaching/taxonomies/compare).',
        },
      ],
    },
  ],
  sources: [
    'Biggs, J. B., & Collis, K. F. (1982). *Evaluating the quality of learning: The SOLO taxonomy*. Academic Press.',
    'Biggs, J., & Tang, C. (2011). *Teaching for quality learning at university* (4th ed.). Open University Press.',
    'Hook, P., & Mills, J. (2011). *SOLO taxonomy: A guide for schools*. Essential Resources.',
  ],
  related: ['teaching/taxonomies/blooms', 'teaching/taxonomies/compare', 'teaching/assessment/rubrics', 'teaching/assessment/alignment'],
}

export default guide
