import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'ORID, also called the Focused Conversation method, comes from the Institute of Cultural Affairs’ Technology of Participation. It sequences questions so a group moves from facts to feelings to meaning to decisions. It is simple enough for a five-minute class review and robust enough for a board meeting.',
  nutshell: [
    '**O**bjective: what happened, what did we see and hear?',
    '**R**eflective: how did we feel; what surprised, pleased or worried us?',
    '**I**nterpretive: what does it mean, why does it matter, what are we learning?',
    '**D**ecisional: what will we do, what is our response?',
    'Each level builds on the one before; skipping levels leads to arguments about conclusions people reached from different facts.',
  ],
  sections: [
    {
      id: 'levels',
      title: 'The four levels',
      blocks: [
        { t: 'levels', items: [
          { name: 'Objective', body: 'Data and facts the senses can confirm. Gets everyone looking at the same thing.', verbs: ['What did you see?', 'What words stood out?', 'What happened first?'] },
          { name: 'Reflective', body: 'Immediate personal reactions: emotions, associations, memories.', verbs: ['What surprised you?', 'Where were you most engaged?', 'What frustrated you?'] },
          { name: 'Interpretive', body: 'Meaning, significance, implications, patterns.', verbs: ['What is this telling us?', 'Why did it go this way?', 'What are we learning?'] },
          { name: 'Decisional', body: 'Resolution: commitments, next steps, a response.', verbs: ['What will we do differently?', 'What is our first step?', 'Who will do what?'] },
        ] },
      ],
    },
    {
      id: 'scripts',
      title: 'Three full scripts',
      blocks: [
        { t: 'example', title: 'After a camp team challenge (10 minutes)', lines: [
          { label: 'O', text: 'What did your team actually do in the first five minutes? What words did you hear most?' },
          { label: 'R', text: 'When did you feel most stuck? When did you feel the team click?' },
          { label: 'I', text: 'What changed between being stuck and clicking? What does that say about how we work?' },
          { label: 'D', text: 'For tomorrow’s hike, what one thing will we keep doing, and what will we change?' },
        ] },
        { t: 'example', title: 'Reviewing a school event with staff (30 minutes)', lines: [
          { label: 'O', text: 'What are the numbers: attendance, feedback forms, incidents? What moments do you remember?' },
          { label: 'R', text: 'What was the high point for you? The low point?' },
          { label: 'I', text: 'What worked, and why? What were the underlying causes of the problems?' },
          { label: 'D', text: 'What three changes will we make next year? Who will own each?' },
        ] },
        { t: 'example', title: 'Discussing a film or text in class', lines: [
          { label: 'O', text: 'Which scenes or lines do you remember? Who were the characters?' },
          { label: 'R', text: 'Which part moved you? Who did you sympathise with?' },
          { label: 'I', text: 'What is the story saying about power, or loyalty? Is that true today?' },
          { label: 'D', text: 'If you could advise one character, what would you say? What would you title this lesson?' },
        ] },
      ],
    },
    {
      id: 'tips',
      title: 'Using ORID well',
      blocks: [
        { t: 'dodont', do: [
          'Spend real time on the objective level; it aligns everyone',
          'Ask two or three questions per level, not ten',
          'Accept every answer at the reflective level: feelings are not right or wrong',
          'Write the decisional answers up where everyone can see',
        ], dont: [
          'Open with “What did you learn?” (an interpretive question with no groundwork)',
          'Argue with reactions at the reflective level',
          'Run out of time before the decisional level',
          'Use ORID as a disguised lecture with the answers already fixed',
        ] },
      ],
    },
  ],
  sources: [
    'Stanfield, R. B. (Ed.) (2000). The Art of Focused Conversation. New Society Publishers / ICA Canada.',
  ],
  related: ['facilitation/debriefing/debrief-models', 'facilitation/frameworks/experiential-cycle', 'teaching/techniques/questioning/questioning'],
}

export default guide
