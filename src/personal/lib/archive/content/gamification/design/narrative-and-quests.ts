import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Points and badges reward; stories give reasons. A narrative frame turns a unit into a mission, tasks into quests, and assessment into a final challenge. Quest structures also offer something learning often lacks: visible choices and a sense of a journey.',
  nutshell: [
    'A **story frame** gives purpose and memory hooks; keep it short and tied to the content.',
    '**Quests** are tasks with a clear objective, reward and place on a map.',
    '**Quest chains** and **side quests** combine required learning with choice.',
    'The **hero’s journey** offers a ready structure for project units.',
  ],
  sections: [
    {
      id: 'frames',
      title: 'Story frames',
      blocks: [
        { t: 'table', head: ['Subject', 'Frame', 'How tasks fit'], rows: [
          ['Maths', 'Space station engineers', 'Fix systems with geometry and algebra; each repair is a problem set'],
          ['History', 'Time detectives', 'Investigate sources to solve a historical mystery'],
          ['English', 'A publishing house', 'Write, edit and pitch pieces for an anthology'],
          ['Science', 'Disease investigators', 'Gather evidence, test hypotheses, diagnose an outbreak'],
          ['Languages', 'Travellers on a journey', 'Each city requires new vocabulary and conversations'],
        ] },
        { t: 'callout', tone: 'warn', title: 'The chocolate-covered broccoli problem', text: 'If the story is the fun part and the learning is the medicine hidden inside, learners notice. Better: make the story require the learning (you cannot diagnose the outbreak without understanding transmission).' },
      ],
    },
    {
      id: 'quests',
      title: 'Designing quests',
      blocks: [
        { t: 'example', title: 'A quest card', lines: [
          { label: 'Title', text: 'The Leaking Reservoir (Main quest 3)' },
          { label: 'Objective', text: 'Calculate the volume of the cylindrical reservoir and how long it takes to drain at 2 m³ per minute.' },
          { label: 'Skills', text: 'Volume of cylinders; rates; units.' },
          { label: 'Reward', text: '150 XP; unlocks side quest “Design a better tank”.' },
          { label: 'Help', text: 'Hint scroll (costs 20 XP) or ask your crew.' },
          { label: 'Evidence', text: 'Working shown in your mission log; checked by a crew member, then by the teacher.' },
        ] },
        { t: 'checklist', items: [
          'Main quests cover every required learning goal',
          'Side quests offer choice and extension, never required content',
          'A visible quest map shows the journey and progress',
          'Quests unlock in a sensible learning order',
          'A final “boss” quest integrates the unit',
        ] },
      ],
    },
    {
      id: 'hero',
      title: 'The hero’s journey as a unit structure',
      blocks: [
        { t: 'cycle', caption: 'Simplified from Campbell and Vogler.', items: [
          { name: 'Call to adventure', body: 'A problem or question launches the unit.' },
          { name: 'Mentor and training', body: 'Explicit teaching of the key knowledge and skills.' },
          { name: 'Trials', body: 'Graduated challenges and practice.' },
          { name: 'Ordeal', body: 'The big challenge: an investigation, performance or test.' },
          { name: 'Return with the elixir', body: 'Share the product; reflect on what was learned.' },
        ] },
      ],
    },
  ],
  sources: [
    'Sheldon, L. (2020). The Multiplayer Classroom: Game Plans (2nd ed.). CRC Press.',
    'Vogler, C. (2007). The Writer’s Journey (3rd ed.). Michael Wiese Productions.',
    'Kapp, K. M. (2012). The Gamification of Learning and Instruction. Pfeiffer.',
  ],
  related: ['gamification/design/design-process', 'teaching/techniques/active-learning/project-based', 'gamification/applications/case-studies'],
}

export default guide
