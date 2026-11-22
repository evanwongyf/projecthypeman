import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Conflict in groups is normal and often useful: it means people care and see things differently. The facilitator’s job is not to prevent conflict but to keep it about the task rather than about people, to help the group find the interests under the positions, and to repair relationships after a rupture.',
  nutshell: [
    '**Task conflict** (about ideas) can sharpen decisions when trust is high; **relationship conflict** (about people) reliably hurts. De Dreu and Weingart’s meta-analysis found both were, on average, linked to lower team performance, so the facilitator’s job is to keep disagreement safe and focused.',
    'The **Thomas–Kilmann** model: competing, collaborating, compromising, avoiding, accommodating.',
    '**Interests, not positions** (Fisher and Ury): find what each side needs.',
    'The **ladder of inference** shows how people jump from data to conclusions.',
  ],
  sections: [
    {
      id: 'tki',
      title: 'Five conflict modes',
      blocks: [
        { t: 'table', head: ['Mode', 'Assertive', 'Co-operative', 'When it fits', 'Risk'], rows: [
          ['Competing', 'High', 'Low', 'Emergencies, safety rules', 'Damaged relationships'],
          ['Collaborating', 'High', 'High', 'Important issues where both sides’ needs matter', 'Slow'],
          ['Compromising', 'Medium', 'Medium', 'Time pressure, equal power', 'Nobody gets what they need'],
          ['Avoiding', 'Low', 'Low', 'Trivial issues, cooling off', 'Problems grow'],
          ['Accommodating', 'Low', 'High', 'When you are wrong, or the relationship matters more', 'Resentment, being taken for granted'],
        ] },
      ],
    },
    {
      id: 'interests',
      title: 'Interests beneath positions',
      blocks: [
        { t: 'example', title: 'Two student leaders and the camp schedule', lines: [
          { label: 'Position A', text: '“We must have the night walk on day 1.”' },
          { label: 'Position B', text: '“No, the night walk has to be day 3.”' },
          { label: 'Facilitator', text: '“What would having it on day 1 give us?” → “The new students will bond early.”' },
          { label: 'Facilitator', text: '“And day 3?” → “Everyone will be tired on day 1 after the travel, and someone might get hurt.”' },
          { label: 'Shared interests', text: 'Early bonding and safety. Options: a short, easy evening activity on day 1 and the full night walk on day 2.' },
        ] },
      ],
    },
    {
      id: 'ladder',
      title: 'The ladder of inference',
      blocks: [
        { t: 'levels', caption: 'Chris Argyris’ ladder, from bottom to top: each rung happens in seconds and mostly unconsciously.', items: [
          { name: 'Observable data', body: 'Wei arrived ten minutes late.' },
          { name: 'Selected data', body: 'I notice only the lateness, not that he brought the equipment.' },
          { name: 'Meanings', body: 'Late means he doesn’t take this seriously.' },
          { name: 'Assumptions', body: 'He never takes group work seriously.' },
          { name: 'Conclusions', body: 'He is unreliable.' },
          { name: 'Beliefs', body: 'You can’t rely on people like him.' },
          { name: 'Actions', body: 'I give him nothing important to do, which confirms my belief.' },
        ] },
        { t: 'p', text: 'In a conflict, ask each side to walk down their ladder: “What did you actually see or hear?” Often the data is shared; the stories built on it are not.' },
      ],
    },
    {
      id: 'repair',
      title: 'Facilitating a repair conversation',
      blocks: [
        { t: 'steps', items: [
          { title: 'Prepare separately', body: 'Meet each person first. Do they want to repair? What do they need?' },
          { title: 'Set ground rules', body: 'Speak for yourself, one at a time, no name-calling, either can call a pause.' },
          { title: 'Each tells their story', body: 'Uninterrupted. The other then summarises what they heard, until the speaker feels understood.' },
          { title: 'Impact, not intent', body: 'Each says how the events affected them.' },
          { title: 'Needs and options', body: 'What does each need going forward? Generate options together.' },
          { title: 'Agreement and check-in', body: 'Write down specific agreements; agree a date to check how it is going.' },
        ] },
        { t: 'callout', tone: 'note', title: 'Restorative questions', text: 'Many schools use restorative questions: What happened? What were you thinking at the time? Who has been affected and how? What do you need to do to make things right? These are the same steps in a form young people can use.' },
      ],
    },
  ],
  sources: [
    'Thomas, K. W., & Kilmann, R. H. (1974). Thomas–Kilmann Conflict Mode Instrument. Xicom.',
    'Fisher, R., Ury, W., & Patton, B. (2011). Getting to Yes (3rd ed.). Penguin.',
    'Argyris, C. (1990). Overcoming Organizational Defenses. Allyn and Bacon.',
    'De Dreu, C. K. W., & Weingart, L. R. (2003). Task versus relationship conflict, team performance, and team member satisfaction: A meta-analysis. Journal of Applied Psychology, 88(4), 741–749.',
  ],
  related: ['facilitation/debriefing/hard-debriefs', 'facilitation/toolkit/difficult-dynamics', 'game-theory/start-here'],
}

export default guide
