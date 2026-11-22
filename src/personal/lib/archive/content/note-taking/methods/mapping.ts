import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Maps show ideas as a network instead of a list. **Mind maps** radiate outward from one central topic. **Concept maps** link ideas with labelled arrows that say exactly how they are connected. Both make relationships visible, and drawing them makes you think about those relationships.',
  nutshell: [
    '**Mind map**: one central idea, branches for subtopics, words and images. Quick and good for brainstorming and overviews.',
    '**Concept map**: ideas in boxes, joined by arrows with **linking words** that form sentences ("plants → *produce* → oxygen").',
    'Concept maps have good evidence for learning, especially when you build them yourself.',
    'Drawing a map from memory is a powerful form of [active recall](@memory/active-recall).',
  ],
  sections: [
    {
      id: 'mind-maps',
      title: 'Mind maps',
      lead: 'Popularised by Tony Buzan in the 1970s.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Start in the centre', body: 'Write or draw the main topic in the middle of a landscape page.' },
            { title: 'Add main branches', body: 'One thick branch per main subtopic, each with a keyword.' },
            { title: 'Add smaller branches', body: 'Details branch off the main branches.' },
            { title: 'Use one or two words per branch', body: 'Keywords force you to distil ideas.' },
            { title: 'Add colour and images', body: 'Use a colour per main branch and small sketches to help recall.' },
          ],
        },
      ],
    },
    {
      id: 'concept-maps',
      title: 'Concept maps',
      lead: 'Developed by Joseph Novak in the 1970s.',
      blocks: [
        {
          t: 'p',
          text: 'In a concept map, each connection is labelled, so two linked ideas form a statement called a **proposition**. This forces you to say exactly how ideas relate, which is where understanding lives.',
        },
        {
          t: 'example',
          title: 'Propositions from a concept map of photosynthesis',
          lines: [
            { label: '→', text: 'Plants **carry out** photosynthesis' },
            { label: '→', text: 'Photosynthesis **requires** light, water and carbon dioxide' },
            { label: '→', text: 'Photosynthesis **produces** glucose and oxygen' },
            { label: '→', text: 'Glucose **is used in** respiration' },
            { label: '→', text: 'Respiration **releases** energy' },
          ],
        },
        {
          t: 'p',
          text: 'A meta-analysis found that learners who studied or built concept maps generally learned more than those who read texts or lists or attended lectures (Nesbit & Adesope, 2006). Building your own tends to beat studying a finished one.',
        },
        {
          t: 'callout',
          tone: 'tip',
          text: 'Your modules in Studytubby have a concept map tool. Try building one from memory after a lesson, then check it against your notes.',
        },
      ],
    },
    {
      id: 'compare',
      title: 'Which to use',
      blocks: [
        {
          t: 'table',
          head: ['', 'Mind map', 'Concept map'],
          rows: [
            ['Shape', 'Radial, one centre', 'Network, many connections'],
            ['Links', 'Unlabelled branches', 'Labelled arrows'],
            ['Best for', 'Brainstorming, overviews, planning an essay', 'Understanding how ideas relate; science and systems'],
            ['Speed', 'Fast', 'Slower, more thinking'],
          ],
        },
      ],
    },
  ],
  sources: [
    'Novak, J. D., & Gowin, D. B. (1984). *Learning how to learn*. Cambridge University Press.',
    'Nesbit, J. C., & Adesope, O. O. (2006). Learning with concept and knowledge maps: A meta-analysis. *Review of Educational Research, 76*(3), 413–448.',
    'Buzan, T. (1974). *Use your head*. BBC Books.',
  ],
  related: ['teaching/techniques/learning-strategies/dual-coding', 'memory/active-recall', 'note-taking/methods/sketchnoting'],
}

export default guide
