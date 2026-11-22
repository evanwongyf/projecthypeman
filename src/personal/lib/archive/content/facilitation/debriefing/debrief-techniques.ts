import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A model gives a debrief its shape; techniques give it life. Sitting in a circle answering questions works for some groups, but many people (especially young people) reflect better when they move, draw, choose a picture or use a metaphor. Roger Greenaway calls this “active reviewing”.',
  nutshell: [
    'Use a **questioning funnel**: open, then probing, then closing questions.',
    'Use **rounds** to hear everyone, with a right to pass.',
    'Use **objects and movement** (spectrums, picture cards, body sculpts) to lower the barrier to speaking.',
    'Match the technique to the group’s age, energy and trust.',
  ],
  sections: [
    {
      id: 'funnel',
      title: 'Questioning',
      blocks: [
        { t: 'levels', caption: 'A questioning funnel, from wide to narrow.', items: [
          { name: 'Open', body: 'Invite any response.', verbs: ['What happened?', 'What stood out?', 'Tell us about…'] },
          { name: 'Probing', body: 'Go deeper into one response.', verbs: ['What made that happen?', 'Say more about…', 'What did you notice in yourself?'] },
          { name: 'Linking', body: 'Connect to others and to the learning focus.', verbs: ['Who else noticed that?', 'Where else does this happen?'] },
          { name: 'Closing', body: 'Bring to commitments and summary.', verbs: ['What will you take away?', 'What is one thing you will do?'] },
        ] },
        { t: 'dodont', do: [
          'Wait at least five seconds after asking',
          'Ask “what” and “how” more than “why” (which can sound accusing)',
          'Use the group’s exact words when probing',
        ], dont: [
          'Ask two questions at once',
          'Fill silence with your own answer',
          'Ask leading questions whose answer you have already decided',
        ] },
      ],
    },
    {
      id: 'active',
      title: 'Active reviewing techniques',
      blocks: [
        { t: 'table', head: ['Technique', 'How it works', 'Good for'], rows: [
          ['Rounds', 'Each person in turn says one thing (a word, a high point, a rating)', 'Hearing everyone; opening and closing'],
          ['Spectrum line', 'A rope on the floor from “not at all” to “completely”; people stand where they are on a question', 'Seeing the range of views quickly; quiet groups'],
          ['Picture or metaphor cards', 'Spread postcards; each picks one that represents the activity or their role', 'Young people; emotional material; language learners'],
          ['Body sculpt / human graph', 'The group arranges itself to show how it worked (who was central, who was left out)', 'Group dynamics; making the invisible visible'],
          ['Action replay', 'Re-enact a key moment in slow motion, pausing to ask what each person was thinking', 'Decision points; leadership'],
          ['Story-line graph', 'Draw a line of energy or confidence over time, then compare', 'Long activities; expeditions'],
          ['Hot seat', 'One volunteer is interviewed by the group about their role', 'Leaders after a task'],
          ['Journal and pair share', 'Write privately, then share one part', 'Introverts; sensitive topics'],
          ['Objects', 'Each picks an item from the environment (a stick, a leaf) that represents a learning', 'Outdoor groups; transfer'],
          ['Head, heart, hands', 'Something I learned, felt, will do', 'Closing any session'],
        ] },
      ],
    },
    {
      id: 'example',
      title: 'An active debrief, step by step',
      blocks: [
        { t: 'example', title: 'After a raft-building challenge (25 minutes, 12 students)', lines: [
          { label: '2 min', text: 'Round: “In one word, how was that?”' },
          { label: '5 min', text: 'Spectrum: “Stand on the rope: how much did you feel your ideas were used?” Ask people at each end and the middle to explain.' },
          { label: '8 min', text: 'Story-line: the group draws one line on a flipchart of “how well we were working” across the hour, and labels the peaks and dips.' },
          { label: '6 min', text: 'Discussion at the biggest dip: what caused it, what got us out of it?' },
          { label: '4 min', text: 'Picture cards: “Choose a picture that shows something you will take back to class.” Quick round.' },
        ] },
      ],
    },
  ],
  sources: [
    'Greenaway, R. (1993). Playback: A Guide to Reviewing Activities. Duke of Edinburgh’s Award.',
    'Greenaway, R. Active Reviewing Guide (reviewing.co.uk).',
    'Cain, J., Cummings, M., & Stanchfield, J. (2005). A Teachable Moment. Kendall Hunt.',
  ],
  related: ['facilitation/debriefing/debrief-models', 'facilitation/debriefing/hard-debriefs', 'facilitation/growth/transfer'],
}

export default guide
