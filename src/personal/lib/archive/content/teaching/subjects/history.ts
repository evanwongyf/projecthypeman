import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'History, geography and other humanities ask learners to know a lot and to think in particular ways about it. Good teaching builds both: a secure framework of knowledge, and the disciplinary skills of historians and geographers, like weighing evidence and explaining causes.',
  nutshell: [
    '**Substantive knowledge**: the content (events, people, places, concepts like "empire").',
    '**Disciplinary knowledge**: how the subject builds knowledge (evidence, causation, change, significance, interpretation).',
    'Source work: **sourcing, contextualising, corroborating, close reading**.',
    'A strong chronological framework makes new knowledge easier to place and remember.',
  ],
  sections: [
    {
      id: 'knowledge',
      title: 'Two kinds of knowledge',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Substantive', body: 'What happened, where, when and to whom. Also substantive concepts that recur across topics: monarchy, revolution, trade, migration, empire.' },
            { title: 'Disciplinary', body: 'How historians know and argue: using evidence, explaining causes and consequences, judging significance, recognising change and continuity, comparing interpretations.' },
          ],
        },
        {
          t: 'p',
          text: 'Peter Seixas described six "historical thinking concepts": **historical significance, evidence, continuity and change, cause and consequence, historical perspectives, and the ethical dimension**. They make good organising questions for a unit.',
        },
      ],
    },
    {
      id: 'sources',
      title: 'Reading like a historian',
      lead: 'Sam Wineburg’s four habits.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Sourcing', body: 'Before reading, ask: Who made this? When? Why? For whom?' },
            { title: 'Contextualising', body: 'What was happening at the time? How might that shape the source?' },
            { title: 'Corroborating', body: 'What do other sources say? Where do they agree or disagree?' },
            { title: 'Close reading', body: 'What claims does it make? What words and tone does it use? What is left out?' },
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Utility, not just bias',
          text: 'Learners often dismiss a source as "biased" and move on. A biased source can be very useful: a propaganda poster is excellent evidence of what a government wanted people to believe. Ask "useful for what?".',
        },
        {
          t: 'p',
          text: 'The same habits help with modern information too; see [judging a source](@research/evaluating-sources).',
        },
      ],
    },
    {
      id: 'teaching',
      title: 'Teaching moves',
      blocks: [
        {
          t: 'list',
          items: [
            '**Build a timeline** early and return to it; place each new topic in the framework.',
            '**Tell stories**: narrative is memorable and gives facts a structure.',
            '**Ask enquiry questions**: "Why did the Roman Empire in the West fall?" gives a unit a destination.',
            '**Teach causal language**: "this led to", "a long-term cause", "a trigger", "the most important factor because…".',
            '**Compare interpretations**: why do historians disagree?',
            '**Revisit concepts** like "empire" across topics so learners build a richer understanding.',
          ],
        },
      ],
    },
  ],
  sources: [
    'Seixas, P., & Morton, T. (2013). *The big six historical thinking concepts*. Nelson Education.',
    'Wineburg, S. (2001). *Historical thinking and other unnatural acts*. Temple University Press.',
    'Wineburg, S., Martin, D., & Monte-Sano, C. (2013). *Reading like a historian: Teaching literacy in middle and high school history classrooms*. Teachers College Press.',
  ],
  related: ['research/evaluating-sources', 'teaching/subjects/talk', 'writing/essentials/argument'],
}

export default guide
