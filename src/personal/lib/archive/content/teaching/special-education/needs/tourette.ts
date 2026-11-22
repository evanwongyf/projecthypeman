import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Tourette syndrome is a neurological condition involving tics: sudden, repeated movements or sounds that are hard to control. Tics are not deliberate and not bad behaviour. A calm, accepting classroom and a few practical adjustments make a big difference.',
  nutshell: [
    'Tics can be **motor** (blinking, shrugging) or **vocal** (sniffing, words). They change over time and get worse with stress, tiredness or excitement.',
    'Most people with Tourette’s do **not** swear involuntarily; that affects only a minority.',
    'Many also have ADHD, OCD or anxiety, which can affect learning more than the tics.',
    'Do not ask a learner to stop ticcing. Ignore tics, and agree a plan for breaks.',
  ],
  sections: [
    {
      id: 'understanding',
      title: 'Understanding tics',
      blocks: [
        {
          t: 'list',
          items: [
            'Tourette syndrome is diagnosed when multiple motor tics and at least one vocal tic have lasted over a year, starting in childhood.',
            'Many people feel an uncomfortable **urge** before a tic, relieved by the tic.',
            'Some people can hold tics back for a while, but it takes effort and concentration, and tics often come out more strongly afterwards.',
            'Tics wax and wane: better some weeks, worse others.',
          ],
        },
      ],
    },
    {
      id: 'support',
      title: 'In the classroom',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Ignore tics and carry on; your calm response sets the tone for the class.',
            'Agree a discreet signal or pass for a short break when tics build up.',
            'Offer a seat where the learner feels less watched, such as near the back or side.',
            'Arrange a separate room and extra time for exams if tics are disruptive.',
            'With the learner’s agreement, help classmates understand what tics are.',
            'Watch for tiredness from suppressing tics, and for anxiety.',
          ],
          dont: [
            'Tell the learner to stop or punish them for tics.',
            'Draw attention to tics in front of others.',
            'Assume that because a learner can suppress tics for a while, they can always control them.',
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          text: 'Behavioural therapies such as CBIT (Comprehensive Behavioral Intervention for Tics) can help reduce tics, but they are delivered by trained clinicians. The teacher’s role is to support the learner and reduce stress.',
        },
      ],
    },
  ],
  sources: [
    'American Psychiatric Association. (2022). *Diagnostic and statistical manual of mental disorders* (5th ed., text rev.): Tic disorders.',
    'Tourettes Action. *Information for schools*. tourettes-action.org.uk',
    'Piacentini, J., et al. (2010). Behavior therapy for children with Tourette disorder: A randomized controlled trial. *JAMA, 303*(19), 1929–1937.',
  ],
  related: ['teaching/special-education/needs/adhd', 'teaching/special-education/needs/semh', 'teaching/special-education/foundations/accommodations'],
}

export default guide
