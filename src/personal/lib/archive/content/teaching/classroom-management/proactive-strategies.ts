import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The most skilful classroom management is the kind you do not see: the problem that never arose because the teacher stood in the right place, scanned the room at the right moment, and had the next activity ready before the last one ended. This page collects the proactive habits that prevent most misbehaviour: withitness and scanning, positioning, narrating the positive, transitions and pacing, and the small verbal and non-verbal moves that correct without disruption.',
  nutshell: [
    'Most misbehaviour appears in the **gaps**: at the start, in transitions, when work is too easy or too hard, and when the teacher is not looking.',
    '**Scan the room** continuously, stand where you can see everyone, and **circulate** during independent work.',
    '**Narrate the positive**: name the students doing the right thing so others follow.',
    'Make **transitions short and rehearsed**: unplanned time is the biggest source of low-level disruption.',
    'Correct at the **lowest level that works**: a look, proximity, a name, a quiet word, so that the lesson keeps moving.',
  ],
  sections: [
    {
      id: 'withitness',
      title: 'Withitness, scanning and positioning',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Scan', body: 'Look around the whole room every few seconds, including the back and corners, even when helping one student. Students notice the teacher who sees everything.' },
            { title: 'Position', body: 'Stand where you can see all students, usually near the back or side while students work. Avoid teaching with your back to the class.' },
            { title: 'Circulate', body: 'Move around during independent work, checking and praising. Start at the problem area, and vary the route so it is not predictable.' },
            { title: 'Proximity', body: 'Standing near a student who is off task often fixes it without a word. Use it first.' },
            { title: 'Target the right student', body: 'Deal with the instigator, not just the one who is caught reacting, and deal with the more serious behaviour first.' },
            { title: 'Anticipate', body: 'Know the students, times and tasks most likely to cause trouble, and be ready.' },
          ],
        },
      ],
    },
    {
      id: 'ladder',
      title: 'Correct at the lowest effective level',
      blocks: [
        {
          t: 'levels',
          caption: 'From least to most intrusive. Start at the bottom, and move up only if needed.',
          items: [
            { name: 'Plan ignoring', body: 'For minor attention-seeking that has no effect on others, deliberately ignore, then praise the moment it stops.' },
            { name: 'Non-verbal', body: 'Eye contact, a pause, a gesture, a hand on the desk, proximity.' },
            { name: 'Name and praise others', body: 'Use the student’s name in the flow of the lesson, or narrate the positive: “Ayesha is ready. Thank you, Ben.”' },
            { name: 'Quiet private word', body: 'Crouch beside the student: “I need you to start now.” Give them a moment to comply and walk away.' },
            { name: 'Directed choice', body: '“You can work here, or at the front. Which would you like?” Then leave it.' },
            { name: 'Consequence', body: 'Apply the planned consequence calmly (see the next page).' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Say less, say it low', text: 'Raising your voice shows the class that you have lost control. A low, slow voice and a pause suggest calm and signal that you are not afraid.' },
      ],
    },
    {
      id: 'narrate',
      title: 'Narrating the positive',
      blocks: [
        { t: 'p', text: 'Narrating the positive means saying out loud what students are doing right, specifically and briefly, so that others join in. It focuses attention on the behaviour you want and avoids drawing attention to the student who is off task. It is a small habit with a large effect.' },
        {
          t: 'example',
          title: 'Examples of positive narration',
          lines: [
            { label: 'Entering', text: '“Row two are seated with their books open. Thank you. Table four, I like how quickly you started.”' },
            { label: 'Transition', text: '“I can see that Kai and Mei have already put their pens down and are looking at me.”' },
            { label: 'Group work', text: '“This group is sharing the roles and everyone is writing. Very effective.”' },
            { label: 'Praise the effort', text: '“I noticed that you rewrote that when it was not clear. That is how you improve.”' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'Make praise specific and sincere', text: 'Vague praise (“good boy”) teaches little. Specific praise (“you checked your working”) names the behaviour you want. Students quickly notice insincere praise.' },
      ],
    },
    {
      id: 'transitions',
      title: 'Transitions and pacing',
      blocks: [
        { t: 'p', text: 'Transitions, such as moving from the teacher’s explanation to independent work, handing out materials, packing up, are the most vulnerable minutes of a lesson. Kounin found that smooth, quick transitions and a lesson with momentum went hand in hand with fewer problems.' },
        {
          t: 'steps',
          items: [
            { title: 'Plan them', body: 'Write the transitions into your lesson plan, as you would any activity.' },
            { title: 'Prepare materials', body: 'Have everything ready so that no one has to wait.' },
            { title: 'Give a warning', body: '“In one minute we will move to group work.” Then count down.' },
            { title: 'Use a clear sequence', body: '“Stop. Pens down. Eyes on me. Now stand and move to your groups.”' },
            { title: 'Give an immediate task', body: 'Start the next activity at once so there is no gap.' },
            { title: 'Reinforce', body: 'Thank the class for a quick transition, or time it as a challenge.' },
          ],
        },
        {
          t: 'dodont',
          do: ['Keep explanations short and the pace brisk.', 'Have a spare task for the early finisher.', 'Plan the last two minutes so you are not caught by the bell.', 'Match the difficulty to the class: too hard or too easy both produce disruption.'],
          dont: ['Do not stop the lesson to deal with a minor issue for everyone to watch.', 'Do not leave students waiting with nothing to do.', 'Do not change direction suddenly without a warning.', 'Do not run over: students stop listening when the bell has gone.'],
        },
      ],
    },
    {
      id: 'moves',
      title: 'Small moves that help',
      blocks: [
        {
          t: 'cards',
          cols: 3,
          items: [
            { title: 'Meet and greet', body: 'Stand at the door, say hello and use names. It sets the tone and lets you read the mood.' },
            { title: 'A starter task', body: 'A silent, written task on the board that students begin as they enter.' },
            { title: 'Cold call', body: 'Ask the question, pause, then name the student. Everyone has to think.' },
            { title: 'Pre-correct', body: 'Before a tricky activity, remind the class what you expect: “In a moment we move. This is what that will look like.”' },
            { title: 'Seating plans', body: 'You decide where students sit. It reduces conflict and helps you manage hotspots.' },
            { title: 'Exit routines', body: 'End calmly: pack up, check the floor, dismiss by table.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Kounin, J. S. (1970). Discipline and Group Management in Classrooms.',
    'Lemov, D. (2021). Teach Like a Champion 3.0. Jossey-Bass.',
    'Education Endowment Foundation (2019). Improving behaviour in schools.',
  ],
  related: ['teaching/classroom-management/routines-and-procedures', 'teaching/classroom-management/escalation-and-consequences', 'teaching/classroom-management/de-escalation'],
}

export default guide
