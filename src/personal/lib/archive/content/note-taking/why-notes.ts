import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'Notes do two jobs. Writing them helps you process and remember information as you hear or read it. Having them gives you something to study later. Good note-taking is designed for both.',
  nutshell: [
    'The **encoding** function: selecting, organising and rephrasing makes you think, which builds memory.',
    'The **storage** function: notes are a record you can review later. Research suggests reviewing notes matters at least as much as taking them.',
    'Copying word for word does neither job well. Put things in your own words and structure.',
    'Plan to **use** your notes: turn them into questions and test yourself.',
  ],
  sections: [
    {
      id: 'two-functions',
      title: 'Two functions',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Encoding: writing helps you learn', body: 'Deciding what matters, summarising it and connecting it to what you know is active processing, which helps memory (see [how memory works](@memory/how-memory-works)). Passive copying skips this step.' },
            { title: 'Storage: notes you can study', body: 'Memory fades fast. Notes preserve what you would otherwise forget, so you can review, test yourself and prepare for exams. Kenneth Kiewra’s research found that learners who review their notes do better than those who only take them.' },
          ],
        },
      ],
    },
    {
      id: 'good-notes',
      title: 'What good notes look like',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Capture main ideas and how they connect, not every word.',
            'Write in your own words, except for definitions and quotes you mark clearly.',
            'Use structure: headings, numbering, indentation, arrows.',
            'Add examples, especially ones the teacher gives.',
            'Leave space to add to and question your notes later.',
            'Write down where each idea came from (lecture date, book page).',
          ],
          dont: [
            'Try to transcribe everything.',
            'Copy slides that you will receive anyway.',
            'Highlight whole pages.',
            'File notes away until the night before the exam.',
          ],
        },
      ],
    },
    {
      id: 'choose',
      title: 'Choosing a method',
      blocks: [
        {
          t: 'table',
          head: ['Material', 'Method'],
          rows: [
            ['Anything you will need to revise', '[Cornell](@note-taking/methods/cornell)'],
            ['Well-organised lectures or textbooks', '[Outline](@note-taking/methods/outline)'],
            ['Topics full of connections', '[Mind maps and concept maps](@note-taking/methods/mapping)'],
            ['Comparisons across several things', '[Charting](@note-taking/methods/charting)'],
            ['Visual subjects, or to stay engaged', '[Sketchnoting](@note-taking/methods/sketchnoting)'],
            ['Ideas you want to build on for years', '[Linked notes](@note-taking/situations/zettelkasten)'],
          ],
        },
      ],
    },
  ],
  sources: [
    'Kiewra, K. A. (1985). Investigating notetaking and review: A depth of processing alternative. *Educational Psychologist, 20*(1), 23–32.',
    'Di Vesta, F. J., & Gray, G. S. (1972). Listening and note taking. *Journal of Educational Psychology, 63*(1), 8–14.',
  ],
  related: ['note-taking/methods/cornell', 'note-taking/situations/review', 'memory/how-memory-works'],
}

export default guide
