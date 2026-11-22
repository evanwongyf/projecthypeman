import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Getting real participation from 50, 200 or 500 people needs different methods from a meeting of ten. The large-group methods share one principle: break the crowd into many small conversations, then connect the conversations so ideas travel across the whole room.',
  nutshell: [
    '**World Café**: tables of four or five, several rounds, people move between tables and carry ideas with them.',
    '**Open Space Technology**: participants create the agenda themselves and go where they can contribute or learn.',
    '**Fishbowl**: a small inner circle talks while an outer circle listens, with seats to rotate in.',
    '**Gallery walk**: groups post work on walls and the room circulates, commenting.',
  ],
  sections: [
    {
      id: 'world-cafe',
      title: 'World Café',
      blocks: [
        { t: 'steps', items: [
          { title: 'Set the café', body: 'Small tables of 4–5 with paper tablecloths and markers, an informal atmosphere. One host stays at each table.' },
          { title: 'Round 1 (20 min)', body: 'Explore a question that matters. Everyone writes and doodles on the tablecloth.' },
          { title: 'Rounds 2 and 3 (20 min each)', body: 'Everyone except the host moves to a new table. The host summarises the last conversation; newcomers link in their ideas.' },
          { title: 'Harvest (20–30 min)', body: 'The whole room shares themes, patterns and surprises. Walk the tablecloths like a gallery.' },
        ] },
        { t: 'callout', tone: 'tip', title: 'Good café questions', text: 'Open, simple and with energy: “What would it take for every student to feel they belong here?” Avoid yes/no questions and questions with one correct answer.' },
      ],
    },
    {
      id: 'open-space',
      title: 'Open Space Technology',
      lead: 'Developed by Harrison Owen in the 1980s after he noticed the best part of conferences was the coffee breaks.',
      blocks: [
        { t: 'cards', cols: 2, items: [
          { title: 'Four principles', body: 'Whoever comes are the right people. Whatever happens is the only thing that could have. Whenever it starts is the right time. When it is over, it is over.' },
          { title: 'One law: the law of two feet', body: 'If you are neither learning nor contributing, use your two feet and go somewhere you can. “Bumblebees” move between sessions cross-pollinating; “butterflies” rest and chat.' },
          { title: 'The marketplace', body: 'Anyone who cares about an issue writes it on a sheet, announces it and posts it on the agenda wall in a time and space slot.' },
          { title: 'Reports', body: 'Each session’s convener records the key points and actions; all reports are compiled for everyone.' },
        ] },
        { t: 'p', text: 'Open Space works best when the issue is complex, people are diverse, there is real passion and conflict, and the decision needs to be made quickly. It fails when leaders already know the answer.' },
      ],
    },
    {
      id: 'fishbowl',
      title: 'Fishbowl and gallery walk',
      blocks: [
        { t: 'table', head: ['Method', 'How', 'Good for', 'Watch for'], rows: [
          ['Open fishbowl', '4–5 inner chairs, one always empty; anyone from the outer circle can take it, and someone leaves', 'Panels that become conversations; contentious topics', 'The same people staying in'],
          ['Closed fishbowl', 'Fixed inner group for a round, then swap', 'Modelling a discussion skill; student debates', 'Outer circle disengaging: give them observation tasks'],
          ['Gallery walk', 'Posters on walls; groups rotate every 3–5 min, adding sticky-note comments', 'Sharing group work; peer feedback', 'Crowding: stagger start points'],
        ] },
      ],
    },
  ],
  sources: [
    'Brown, J., & Isaacs, D. (2005). The World Café. Berrett-Koehler.',
    'Owen, H. (2008). Open Space Technology: A User’s Guide (3rd ed.). Berrett-Koehler.',
  ],
  related: ['facilitation/frameworks/liberating-structures', 'facilitation/frameworks/session-design', 'facilitation/toolkit/online-and-hybrid'],
}

export default guide
