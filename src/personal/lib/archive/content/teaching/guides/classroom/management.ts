import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Classroom management is everything a teacher does to create a calm, orderly space where learning can happen. Most of it is invisible: clear routines, well-planned lessons and small, early responses that stop problems growing. Big confrontations are usually a sign that the small things were missed.',
  nutshell: [
    '**Prevention beats reaction**: clear expectations, taught routines and engaging, well-paced lessons.',
    'Kounin’s **withitness**: know what is happening everywhere in the room, and show that you know.',
    'Respond with the **least intrusive** intervention that works, and escalate calmly.',
    'Consistency matters more than severity. Follow through every time.',
  ],
  sections: [
    {
      id: 'kounin',
      title: 'What effective managers do',
      lead: 'Jacob Kounin’s findings (1970).',
      blocks: [
        {
          t: 'p',
          text: 'Kounin filmed hundreds of classrooms expecting to find that good managers responded better to misbehaviour. Instead he found they did not differ much in how they responded; they differed in how they **prevented** it.',
        },
        {
          t: 'terms',
          items: [
            { term: 'Withitness', def: 'Being aware of everything happening in the room, and letting learners know it. Scanning, positioning yourself to see everyone, catching small things early.' },
            { term: 'Overlapping', def: 'Handling two things at once: helping one learner while signalling to another to get back on task.' },
            { term: 'Momentum', def: 'Keeping the lesson moving without long gaps, over-explaining or dwelling on minor issues.' },
            { term: 'Smoothness', def: 'Clean transitions between activities without abrupt stops, backtracking or distractions.' },
            { term: 'Group alerting', def: 'Keeping all learners involved and accountable, for example by asking a question before naming who answers.' },
          ],
        },
      ],
    },
    {
      id: 'routines',
      title: 'Expectations and routines',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Decide a few clear expectations', body: 'Three to five, stated positively: "Follow instructions first time", "Respect everyone’s right to learn".' },
            { title: 'Turn them into routines', body: 'How to enter, get equipment, get attention, hand in work, move into groups, leave.' },
            { title: 'Teach them explicitly', body: 'Explain, model, practise, and give feedback, like any other content. See [the first lessons](@teaching/guides/classroom/first-lessons).' },
            { title: 'Reinforce them', body: 'Notice and name when routines are done well. Re-teach when they slip.' },
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          text: 'An attention signal (a raised hand, a countdown, a call and response) that is practised until automatic saves minutes every lesson and avoids shouting over the class.',
        },
      ],
    },
    {
      id: 'responding',
      title: 'Responding to low-level disruption',
      lead: 'Least intrusive first.',
      blocks: [
        {
          t: 'levels',
          items: [
            { name: 'The look', body: 'Eye contact, a pause. Often enough.' },
            { name: 'Proximity', body: 'Move near the learner while continuing to teach.' },
            { name: 'Non-verbal signal', body: 'A gesture, a tap on the desk, pointing to the task.' },
            { name: 'Positive narration', body: 'Name learners who are doing the right thing: "Ahmed has started. Priya has her book open."' },
            { name: 'Quiet word', body: 'A private, brief redirect: "I need you to start question 2 now. Thanks."' },
            { name: 'Rule reminder', body: 'Privately and calmly refer to the expectation and the choice.' },
            { name: 'Consequence', body: 'Apply the agreed consequence calmly, without a lecture, then move on and restore the relationship.' },
          ],
          caption: 'Climb only as far as needed. Many teachers start at the top, which leaves nowhere to go.',
        },
        {
          t: 'dodont',
          do: [
            'Stay calm and brief. Correct the behaviour, not the person.',
            'Correct privately where possible.',
            'Follow through on what you say you will do.',
            'Give a fresh start next lesson.',
            'Look for patterns: is the behaviour telling you the work is too hard, too easy or unclear? See [positive behaviour support](@teaching/special-education/strategies/behaviour-support).',
          ],
          dont: [
            'Argue in front of the class; take the discussion outside the audience.',
            'Use sarcasm or humiliation.',
            'Threaten consequences you will not or cannot apply.',
            'Punish the whole class for the actions of a few.',
          ],
        },
      ],
    },
    {
      id: 'evidence',
      title: 'What the evidence says',
      blocks: [
        {
          t: 'p',
          text: 'The Education Endowment Foundation’s guidance on improving behaviour (2019) makes six recommendations: know and understand your learners and their influences; teach learning behaviours alongside managing misbehaviour; use classroom management strategies to support good behaviour; use simple approaches as part of your regular routine; tailor targeted approaches to individual needs; and be consistent.',
        },
      ],
    },
  ],
  sources: [
    'Kounin, J. S. (1970). *Discipline and group management in classrooms*. Holt, Rinehart and Winston.',
    'Education Endowment Foundation. (2019). *Improving behaviour in schools: Guidance report*.',
    'Bennett, T. (2020). *Running the room: The teacher’s guide to behaviour*. John Catt.',
    'Marzano, R. J. (2003). *Classroom management that works*. ASCD.',
  ],
  related: ['teaching/guides/classroom/first-lessons', 'teaching/guides/classroom/relationships', 'teaching/special-education/strategies/behaviour-support', 'teaching/theories/behaviourism'],
}

export default guide
