import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'When two adults share a classroom, whether a general and a special education teacher or a teacher and a teaching assistant, the way they divide the work makes a large difference. Used well, a second adult multiplies what a class can do. Used badly, it can quietly separate the learners who most need the teacher from the teacher.',
  nutshell: [
    'Six co-teaching models, from **one teach, one observe** to **team teaching**. Vary them by purpose.',
    'Teaching assistants should **add to** teaching from the teacher, not replace it for learners with needs.',
    'Structured interventions delivered by trained assistants can have strong effects.',
    'Plan together, even briefly. The second adult needs to know the goal of the lesson.',
  ],
  sections: [
    {
      id: 'models',
      title: 'Six co-teaching models',
      lead: 'Marilyn Friend and Lynne Cook.',
      blocks: [
        {
          t: 'cards',
          cols: 3,
          items: [
            { title: 'One teach, one observe', body: 'One leads while the other gathers specific data on learners (who participates, where misconceptions arise). Good for planning next steps.' },
            { title: 'One teach, one assist', body: 'One leads; the other circulates and helps. Easy but overused; the assisting adult can become a helper rather than a teacher.' },
            { title: 'Parallel teaching', body: 'The class splits in two and each teacher teaches the same content to half. Lower ratio, more participation.' },
            { title: 'Station teaching', body: 'Content is split into stations; groups rotate between the two teachers and an independent station.' },
            { title: 'Alternative teaching', body: 'One teaches most of the class; the other takes a small group for pre-teaching, reteaching or extension. Rotate who is in the small group.' },
            { title: 'Team teaching', body: 'Both teach the whole class together, trading off, modelling discussion, debating, demonstrating.' },
          ],
        },
      ],
    },
    {
      id: 'tas',
      title: 'Teaching assistants',
      lead: 'What the evidence says.',
      blocks: [
        {
          t: 'p',
          text: 'A large English study (the DISS project, Blatchford et al., 2009) found that learners who received the most support from teaching assistants made **less** progress than similar learners with less support. The reason was not the assistants themselves but how they were deployed: learners with the greatest needs spent much of their time with an assistant instead of the teacher, and assistants often focused on task completion rather than learning.',
        },
        {
          t: 'p',
          text: 'The Education Endowment Foundation’s guidance on making best use of teaching assistants recommends:',
        },
        {
          t: 'list',
          items: [
            'Teaching assistants should not be used as an informal teacher for low-attaining learners.',
            'Use them to add value to what teachers do, not replace them.',
            'Help them develop learners’ independence: prompt, scaffold, then step back.',
            'Make sure they are fully prepared for their role in each lesson.',
            'Use them to deliver high-quality structured interventions in one-to-one or small groups, with training.',
            'Connect learning from interventions back to classroom teaching.',
          ],
        },
      ],
    },
    {
      id: 'prompting',
      title: 'A prompting ladder',
      lead: 'From least help to most.',
      blocks: [
        {
          t: 'levels',
          items: [
            { name: 'Self-scaffolding', body: 'Give time. Let the learner work it out. Adult watches.' },
            { name: 'Prompt', body: '"What do you need to do first?" "What could help you?"' },
            { name: 'Clue', body: '"Look at the example on the board." "Think about what we did yesterday."' },
            { name: 'Modelling', body: 'Show the step, then have the learner try it.' },
            { name: 'Correcting', body: 'Give the answer and have the learner practise it. A last resort.' },
          ],
          caption: 'Based on the scaffolding framework of Bosanquet, Radford and Webster (2016), used in EEF guidance. Start at the bottom and move up only as needed.',
        },
      ],
    },
    {
      id: 'planning',
      title: 'Planning together',
      blocks: [
        {
          t: 'checklist',
          items: [
            'The second adult knows the lesson’s learning goal, not just the task.',
            'We have agreed which co-teaching model we are using and why.',
            'We know which learners each of us will focus on, and that it changes over time.',
            'We have agreed how to respond to likely difficulties.',
            'We have a way to share what we noticed after the lesson, even two minutes.',
          ],
        },
      ],
    },
  ],
  sources: [
    'Friend, M., & Cook, L. (2017). *Interactions: Collaboration skills for school professionals* (8th ed.). Pearson.',
    'Blatchford, P., et al. (2009). *Deployment and impact of support staff in schools*. Institute of Education, University of London.',
    'Education Endowment Foundation. (2018). *Making best use of teaching assistants: Guidance report*.',
    'Bosanquet, P., Radford, J., & Webster, R. (2016). *The teaching assistant’s guide to effective interaction*. Routledge.',
  ],
  related: ['teaching/special-education/foundations/inclusion', 'teaching/differentiation/scaffolding', 'teaching/special-education/foundations/tiered-support'],
}

export default guide
