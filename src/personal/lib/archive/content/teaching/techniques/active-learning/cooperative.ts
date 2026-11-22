import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Putting learners in groups does not make them cooperate. Often one does the work, one coasts and the rest chat. Cooperative learning is group work designed so that everyone needs everyone else and everyone is accountable.',
  nutshell: [
    'Johnson and Johnson’s five elements: **positive interdependence, individual accountability, face-to-face interaction, social skills, group processing**.',
    'Without individual accountability, group work often lets some learners do nothing.',
    'Assign roles, structure the task and teach the social skills explicitly.',
    'Well-structured cooperative learning has solid evidence for achievement and relationships.',
  ],
  sections: [
    {
      id: 'five',
      title: 'Five essential elements',
      lead: 'David and Roger Johnson.',
      blocks: [
        {
          t: 'cards',
          items: [
            { tag: '1', title: 'Positive interdependence', body: 'The group succeeds only if every member does. Create it with shared goals, divided resources (each has one piece of information) or complementary roles.' },
            { tag: '2', title: 'Individual accountability', body: 'Each learner’s contribution and learning is checked: individual quizzes, random reporter, named sections of work.' },
            { tag: '3', title: 'Promotive interaction', body: 'Learners help, explain to and encourage each other, face to face. Arrange seating so they can.' },
            { tag: '4', title: 'Social skills', body: 'Listening, taking turns, disagreeing politely, giving and receiving help. These must be taught, not assumed.' },
            { tag: '5', title: 'Group processing', body: 'Groups reflect on how well they worked together and what to improve next time.' },
          ],
        },
        {
          t: 'p',
          text: 'Spencer Kagan offers a similar set summarised as **PIES**: Positive interdependence, Individual accountability, Equal participation, Simultaneous interaction. His "structures", like *Numbered Heads Together* and *RallyRobin*, build these features into short routines.',
        },
      ],
    },
    {
      id: 'roles',
      title: 'Group roles',
      lead: 'Give everyone a job.',
      blocks: [
        {
          t: 'terms',
          items: [
            { term: 'Facilitator', def: 'Keeps the group on task and makes sure everyone contributes.' },
            { term: 'Recorder', def: 'Writes down the group’s ideas and answers.' },
            { term: 'Timekeeper', def: 'Tracks time and warns the group about deadlines.' },
            { term: 'Reporter', def: 'Shares the group’s work with the class.' },
            { term: 'Checker', def: 'Makes sure everyone understands and can explain the answer.' },
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          text: 'Rotate roles over time, and choose the reporter at random at the end ("the person whose birthday is next"). If anyone might have to explain, everyone has to understand.',
        },
      ],
    },
    {
      id: 'structures',
      title: 'Quick structures',
      blocks: [
        {
          t: 'table',
          head: ['Structure', 'How it works'],
          rows: [
            ['Numbered heads together', 'Members number off 1–4. Teacher asks a question, groups make sure everyone knows the answer, then calls a number. That person answers.'],
            ['Round robin', 'Each member in turn gives one idea aloud, going round the group.'],
            ['Placemat', 'Each learner writes ideas in their corner of a shared sheet, then the group agrees the best in the middle.'],
            ['Think, pair, share', 'See [think, pair, share](@teaching/techniques/active-learning/think-pair-share).'],
            ['Jigsaw', 'Each member masters a piece and teaches it. See [jigsaw](@teaching/techniques/active-learning/jigsaw).'],
            ['Pairs check', 'Partners take turns solving and coaching, then check with another pair.'],
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
          text: 'Meta-analyses by the Johnsons and by Robert Slavin found that cooperative learning tends to improve achievement compared with competitive or individual learning, **when it includes group goals and individual accountability**. Without those, effects shrink or vanish (Slavin, 1996). It also improves relationships between learners from different backgrounds. The Education Endowment Foundation rates collaborative learning approaches as moderate impact for very low cost.',
        },
      ],
    },
  ],
  sources: [
    'Johnson, D. W., & Johnson, R. T. (2009). An educational psychology success story: Social interdependence theory and cooperative learning. *Educational Researcher, 38*(5), 365–379.',
    'Slavin, R. E. (1996). Research on cooperative learning and achievement. *Contemporary Educational Psychology, 21*(1), 43–69.',
    'Kagan, S., & Kagan, M. (2009). *Kagan cooperative learning*. Kagan Publishing.',
    'Education Endowment Foundation. *Teaching and Learning Toolkit: Collaborative learning approaches*.',
  ],
  related: ['teaching/techniques/active-learning/jigsaw', 'teaching/techniques/active-learning/think-pair-share', 'teaching/differentiation/grouping'],
}

export default guide
