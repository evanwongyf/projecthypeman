import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Social, emotional and mental health (SEMH) needs include anxiety, low mood, trauma, attachment difficulties and behaviour that is hard to manage. Behaviour is often a learner’s way of communicating a need they cannot put into words. Safe, predictable relationships are the foundation of support.',
  nutshell: [
    'Look beneath behaviour: "What is this behaviour telling me?" before "How do I stop it?".',
    'Adverse childhood experiences and trauma can keep the stress system on high alert, making learning and self-control harder.',
    'Regulate, then relate, then reason: calm comes before connection, and connection before discussion.',
    'Teachers are not therapists. Know your school’s safeguarding and mental health routes, and use them.',
  ],
  sections: [
    {
      id: 'what',
      title: 'What SEMH includes',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Anxiety', body: 'Worry, avoidance, stomach aches, perfectionism, school refusal, freezing in tests. Often quiet and easy to miss.' },
            { title: 'Low mood and depression', body: 'Withdrawal, tiredness, loss of interest, irritability, changes in work or friendships.' },
            { title: 'Trauma and adversity', body: 'Abuse, neglect, loss, domestic violence, displacement. Can show as hypervigilance, outbursts, shutdown or difficulty trusting adults.' },
            { title: 'Attachment difficulties', body: 'Difficulty forming trusting relationships, often after early disruption in care.' },
            { title: 'Behaviour that challenges', body: 'Disruption, aggression, defiance, withdrawal. The need behind it may be any of the above, or an unmet learning need.' },
          ],
        },
        {
          t: 'p',
          text: 'The Adverse Childhood Experiences study (Felitti et al., 1998) found that childhood adversity is common and linked with later physical and mental health problems. In school, chronic stress affects attention, memory and emotional control, the very capacities learning depends on.',
        },
      ],
    },
    {
      id: 'regulate',
      title: 'Regulate, relate, reason',
      lead: 'A sequence for responding in the moment.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Regulate', body: 'A learner in fight, flight or freeze cannot think or reason. Help them calm first: lower your voice, reduce demands, offer space, a drink of water, a calm corner, a familiar adult.' },
            { title: 'Relate', body: 'Connect: show you are on their side. "I can see this is really hard right now. I’m here." Name the feeling if appropriate.' },
            { title: 'Reason', body: 'Only once calm and connected can the learner reflect, discuss what happened, repair and plan for next time.' },
          ],
        },
        {
          t: 'p',
          text: 'This sequence comes from Bruce Perry’s neurosequential work. Most escalations happen when adults try to reason with a dysregulated learner, or demand an apology in the heat of the moment.',
        },
      ],
    },
    {
      id: 'classroom',
      title: 'Everyday classroom practice',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Greet learners at the door, by name, every day.',
            'Keep routines predictable, and warn of changes.',
            'Give ways to ask for help or a break without words (cards, signals).',
            'Correct privately, calmly and briefly. Separate the behaviour from the person.',
            'Repair after conflict: a fresh start each lesson.',
            'Notice changes in a learner and pass them on.',
            'Teach and practise emotional vocabulary and calming strategies with the whole class.',
          ],
          dont: [
            'Shame, sarcasm or public humiliation.',
            'Take behaviour personally; respond to the need, not the insult.',
            'Promise a learner you will keep a disclosure secret.',
            'Try to diagnose or provide therapy yourself.',
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Safeguarding comes first',
          text: 'If a learner discloses harm, or you are worried about their safety, follow your school’s safeguarding procedure immediately and tell the designated safeguarding lead. Listen, do not ask leading questions, do not promise confidentiality, and record what was said in the learner’s own words.',
        },
      ],
    },
  ],
  sources: [
    'Felitti, V. J., et al. (1998). Relationship of childhood abuse and household dysfunction to many of the leading causes of death in adults. *American Journal of Preventive Medicine, 14*(4), 245–258.',
    'Perry, B. D., & Szalavitz, M. (2017). *The boy who was raised as a dog* (rev. ed.). Basic Books.',
    'Department for Education. (2018). *Mental health and behaviour in schools*.',
    'Education Endowment Foundation. (2019). *Improving behaviour in schools: Guidance report*.',
  ],
  related: ['teaching/special-education/strategies/behaviour-support', 'teaching/theories/humanism', 'teaching/guides/classroom/relationships'],
}

export default guide
