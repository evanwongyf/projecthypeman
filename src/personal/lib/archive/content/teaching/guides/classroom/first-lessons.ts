import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'The first few lessons with a new class set the tone for the whole year. Time spent teaching routines and building relationships now is repaid many times over. Learners are watching closely to find out who you are and what you will accept.',
  nutshell: [
    'Teach routines explicitly in the first lessons, then practise and reinforce them.',
    'Learn names as fast as possible.',
    'Teach real content from day one, so learners see that your lessons are about learning.',
    'Be consistent from the start. It is much easier to relax later than to tighten up.',
  ],
  sections: [
    {
      id: 'before',
      title: 'Before they arrive',
      blocks: [
        {
          t: 'checklist',
          items: [
            'Read any information on learners’ needs and plans.',
            'Make a seating plan with names (it helps learn names and sets the tone).',
            'Decide your key expectations and routines.',
            'Prepare the room: clear walls, equipment where learners can find it.',
            'Plan a first lesson with a short, doable, content-rich task.',
            'Plan exactly what you will say in the first two minutes.',
          ],
        },
      ],
    },
    {
      id: 'routines',
      title: 'Routines to teach first',
      blocks: [
        {
          t: 'cards',
          cols: 3,
          items: [
            { title: 'Entry', body: 'Line up or come in? What do learners do first? A "do now" task on the board every lesson.' },
            { title: 'Attention', body: 'Your signal for silence, and what learners do when they see it.' },
            { title: 'Equipment', body: 'Where things are, how to get them, what to do if you forgot something.' },
            { title: 'Asking for help', body: 'Hands up? Help cards? Ask three before me?' },
            { title: 'Transitions', body: 'Moving into pairs or groups, and back again, quickly and quietly.' },
            { title: 'Exit', body: 'Packing up, tidying, being dismissed by the teacher, not the bell.' },
          ],
        },
        {
          t: 'example',
          title: 'Teaching the attention signal',
          lines: [
            { label: 'Explain', text: '"When I raise my hand and say ‘eyes on me’, stop talking, put down pens and look at me. I’ll count down from three."' },
            { label: 'Why', text: '"This lets us switch quickly so we don’t waste learning time."' },
            { label: 'Model', text: 'Show what it looks like, and what it does not.' },
            { label: 'Practise', text: 'Let the class chat about a question, then use the signal. Time it.' },
            { label: 'Feedback', text: '"That took eight seconds, and nearly everyone was looking. Let’s get it to five."' },
            { label: 'Repeat', text: 'Use it constantly for the first weeks and acknowledge it when it is done well.' },
          ],
        },
      ],
    },
    {
      id: 'relationships',
      title: 'Starting relationships',
      blocks: [
        {
          t: 'list',
          items: [
            'Greet learners at the door by name.',
            'Use names often, and use a seating plan or name cards until you know them.',
            'Show interest: a short "tell me one thing about you" card in the first lesson helps you learn about them.',
            'Be warm and firm at the same time. See [relationships and belonging](@teaching/guides/classroom/relationships).',
            'Contact a few families early with good news.',
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Avoid a "fun" first lesson with no content',
          text: 'Icebreakers and posters about yourself can signal that this class is not about work. Get to real learning quickly, and weave relationship-building into it.',
        },
      ],
    },
  ],
  sources: [
    'Wong, H. K., & Wong, R. T. (2018). *The first days of school* (5th ed.). Harry K. Wong Publications.',
    'Emmer, E. T., & Evertson, C. M. (2016). *Classroom management for middle and high school teachers* (10th ed.). Pearson.',
    'Lemov, D. (2021). *Teach like a champion 3.0*. Jossey-Bass.',
  ],
  related: ['teaching/guides/classroom/management', 'teaching/guides/classroom/relationships'],
}

export default guide
