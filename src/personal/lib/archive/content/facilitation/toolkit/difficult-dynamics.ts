import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Every facilitator meets the participant who talks over everyone, the one who never speaks, the cynic, the joker and the side conversation. Most “difficult participants” are responding sensibly to something: anxiety, boredom, a real grievance or a power imbalance. Respond to the behaviour, protect the group and keep everyone’s dignity.',
  nutshell: [
    'Start with **structure** (rounds, pairs, writing), which prevents most problems without singling anyone out.',
    'Escalate gently: **group-level** move, then **private word**, then **direct intervention**.',
    'Watch for **power**: the boss in the room, seniority, gender, language and culture shape who speaks.',
    'Guard against **groupthink**: appoint a devil’s advocate, ask for dissent, decide in private ballots.',
  ],
  sections: [
    {
      id: 'table',
      title: 'Behaviours and responses',
      blocks: [
        { t: 'table', head: ['Behaviour', 'Possible reason', 'Light touch', 'Firmer'], rows: [
          ['Dominating', 'Enthusiasm, expertise, anxiety', 'Rounds; stacking; “Let’s hear from someone new”', 'Private word at the break: “I need your help drawing others in”; give them a role'],
          ['Silent', 'Shyness, language, low trust, processing time', 'Writing first; pairs; online chat', 'Invite gently, never force; check in privately'],
          ['Cynical', 'Past bad experience, a real concern', '“What would make this worthwhile for you?”', 'Acknowledge; put the concern in the parking lot with an owner'],
          ['Side conversations', 'Boredom, confusion, a related point', 'Pause; move closer; “Is there something we should all hear?”', 'Restate the norm'],
          ['Joking and clowning', 'Discomfort, wanting attention', 'Laugh, then refocus', 'Give a job; private word'],
          ['Arguing with the facilitator', 'Disagreement with the process', 'Ask the group: “Is this process working for everyone?”', 'Offer an alternative or the parking lot'],
          ['Repeating the same point', 'Not feeling heard', 'Write it up visibly; paraphrase until they agree you have it', '“It’s recorded here; let’s look at other points now.”'],
          ['Phone use', 'Work pressure, boredom', 'Agree a phone norm at the start', 'Breaks to check phones'],
        ] },
      ],
    },
    {
      id: 'power',
      title: 'Power in the room',
      blocks: [
        { t: 'p', text: 'When a principal, manager or senior teacher is present, others often defer. When one gender, age group or language group dominates the airtime, the group loses information. Structure is the facilitator’s main defence.' },
        { t: 'list', items: [
          'Talk to the senior person beforehand: ask them to speak last, or to step out for parts.',
          'Use anonymous input (sticky notes collected and read aloud; online polls).',
          'Use rounds so speaking order is not by status.',
          'Split by role group first, then mix.',
          'Offer multiple languages or allow writing in the participant’s preferred language.',
        ] },
      ],
    },
    {
      id: 'groupthink',
      title: 'Groupthink',
      blocks: [
        { t: 'table', head: ['Janis’ symptoms', 'Antidotes'], rows: [
          ['Illusion of invulnerability and unanimity', 'Ask “What could go wrong?” (a pre-mortem)'],
          ['Self-censorship', 'Anonymous input; ask each person for one doubt'],
          ['Pressure on dissenters', 'Thank dissent explicitly; appoint a rotating devil’s advocate'],
          ['Mindguards who filter information', 'Bring in outside views or experts'],
          ['Stereotyping outsiders', 'Ask how the people affected would see the decision'],
        ] },
        { t: 'callout', tone: 'tip', title: 'The pre-mortem', text: 'Gary Klein’s technique: “Imagine it is a year from now and this plan has failed badly. Write down why.” It makes raising doubts the task rather than an act of disloyalty.' },
      ],
    },
  ],
  sources: [
    'Kaner, S. et al. (2014). Facilitator’s Guide to Participatory Decision-Making. Jossey-Bass.',
    'Janis, I. L. (1982). Groupthink (2nd ed.). Houghton Mifflin.',
    'Klein, G. (2007). Performing a project premortem. Harvard Business Review, 85(9), 18–19.',
  ],
  related: ['facilitation/foundations/psychological-safety', 'facilitation/unity/conflict', 'facilitation/debriefing/hard-debriefs'],
}

export default guide
