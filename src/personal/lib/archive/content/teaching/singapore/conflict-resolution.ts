import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Conflict in a school is normal: between students, between a teacher and a student, between a parent and the school. What matters is whether it gets resolved, left to fester or made worse. This page gives you a small set of frameworks (interest-based talks, restorative conversations, mediation) with word-for-word scripts for the three most common situations, and a clear guide on when not to use them, especially where bullying involves a power imbalance.',
  nutshell: [
    'Resolve conflict by moving from **positions** (“I want…”) to **interests** (“I need…”) and then to **options** both sides can accept.',
    'A **restorative conversation** asks five questions: what happened, who is affected, what was the harm, what needs to happen to put it right, and how do we move on.',
    '**Mediation** works between roughly equal parties who both want a solution. It is **not suitable for bullying** where there is a power imbalance, or for threats and violence.',
    'Use **scripts**: when emotions are high, a prepared sentence keeps you calm, brief and fair.',
    'Some conflicts need **formal routes**: school discipline, MOE, mediation services, the police or a court.',
  ],
  sections: [
    {
      id: 'interests',
      title: 'Positions and interests',
      blocks: [
        { t: 'p', text: 'In a quarrel each side states a position (“He took my pen”, “She called me a liar”). Behind each position is an interest: respect, safety, fairness, face. Fisher and Ury’s interest-based approach, from *Getting to Yes*, asks people to look past the stated demand to what they actually need, and then to generate options that meet both sets of needs.' },
        {
          t: 'steps',
          items: [
            { title: 'Separate the people from the problem', body: 'Be hard on the issue, soft on the person. “I am worried about the group chat” rather than “You are cruel”.' },
            { title: 'Listen for interests', body: '“What matters to you here?” Repeat back what you hear to show you understand, before you respond.' },
            { title: 'Generate options', body: 'Brainstorm without judging. Ask: “What else could we do?”' },
            { title: 'Use fair criteria', body: 'Refer to the school rule, a fair standard, or what you would want if the roles were reversed.' },
            { title: 'Agree what happens next', body: 'Write it down: who does what, by when, and when you will check.' },
          ],
        },
      ],
    },
    {
      id: 'restorative',
      title: 'A restorative conversation',
      blocks: [
        {
          t: 'cycle',
          caption: 'Five restorative questions, used in a calm, structured meeting.',
          items: [
            { name: 'What happened?', body: 'Each person describes the events in their own words, without interruption.' },
            { name: 'What were you thinking and feeling?', body: 'At the time and since.' },
            { name: 'Who has been affected and how?', body: 'The person harmed says what the harm has been. The person who caused it listens.' },
            { name: 'What needs to happen to put it right?', body: 'An apology, a change, a repair, specific actions.' },
            { name: 'How do we move on?', body: 'An agreement, a follow-up date, and what happens if it recurs.' },
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Only when it is safe and fair', text: 'A restorative meeting between a target and the person who bullied them can re-traumatise the target, especially where there is a power imbalance. Use it only when the target freely wants it, when the other person accepts responsibility, and when a trained adult runs it. It never replaces a consequence for serious harm, and it is not for threats and violence.' },
      ],
    },
    {
      id: 'when',
      title: 'Choosing the right tool',
      blocks: [
        {
          t: 'table',
          head: ['Situation', 'Best tool', 'Avoid'],
          rows: [
            ['A quarrel between two friends of similar standing', 'A calm interest-based chat; peer or teacher mediation', 'Ignoring it until it escalates'],
            ['A one-off insult or minor shove', 'A restorative conversation and a small consequence', 'A heavy sanction without a conversation'],
            ['Persistent bullying with an imbalance of power', 'Investigation, consequence, safety plan, support; a restorative element only if the target wants it and it is safe', 'Mediation or “shake hands”'],
            ['Threats or violence', 'The discipline framework, parents, and the police if a crime', 'Informal sorting out'],
            ['A student and a teacher in dispute', 'A private reset conversation; a third party (year head) if not resolved', 'Arguing in front of the class'],
            ['A parent and the school', 'A structured meeting with a second staff member; escalation route', 'Texting and ad hoc phone calls'],
          ],
        },
      ],
    },
    {
      id: 'scripts',
      title: 'Scripts',
      blocks: [
        {
          t: 'example',
          title: 'Two students, an argument, roughly equal',
          lines: [
            { label: 'Open', text: '“I want to help you sort this out. Each of you will have a turn to speak, without interruption, and then we will see what to do.”' },
            { label: 'First student', text: '“Tell me what happened, from your side, and how it made you feel.”' },
            { label: 'Second student', text: '“Now your turn. Before you tell me yours, tell me what you heard.”' },
            { label: 'Interests', text: '“What would help you feel the problem is solved?”' },
            { label: 'Agreement', text: '“So you will each... and we will check on Friday. If it happens again, you come to me first.”' },
          ],
        },
        {
          t: 'example',
          title: 'A teacher and a student after an incident',
          lines: [
            { label: 'Open', text: '“I want to talk about yesterday. I think we both said things we did not mean.”' },
            { label: 'Own your part', text: '“I raised my voice in front of the class. I should not have. I am sorry about that.” (only if true)' },
            { label: 'Name theirs', text: '“And I did not like being told to shut up. That is not how we speak to each other.”' },
            { label: 'Ask', text: '“What was going on for you?”' },
            { label: 'Agree', text: '“Next time, tell me quietly that you need a minute and I will give you one. If you cannot do that, I will ask you to step out and we will continue later.”' },
          ],
        },
        {
          t: 'example',
          title: 'A teacher and an angry parent',
          lines: [
            { label: 'Open', text: '“Thank you for coming in. I want to understand what has worried you and see what we can do.”' },
            { label: 'Listen', text: '“So you feel she was singled out. Tell me more.” (summarise without arguing)' },
            { label: 'Facts', text: '“Here is what I saw, and what the record shows.”' },
            { label: 'Boundary', text: '“I cannot change the rule, but I can explain it and make sure she has support.”' },
            { label: 'Close', text: '“Here is what happens next, and I will email you by Thursday.”' },
          ],
        },
      ],
    },
    {
      id: 'formal',
      title: 'Formal routes when informal talks fail',
      blocks: [
        {
          t: 'table',
          head: ['Route', 'What it is', 'Good for'],
          rows: [
            ['School process', 'Year head, discipline team, principal, under MOE’s framework', 'Anything involving students and school rules'],
            ['MOE', 'Escalation and feedback channels for unresolved school issues', 'Parents unhappy with a school’s response; staff needing support'],
            ['Community mediation', 'Community Mediation Centres run by the Ministry of Law offer free or low-cost mediation between disputing parties; both must agree to take part', 'Disputes between neighbours, families and acquaintances, where both want to settle'],
            ['Police', 'A report for threats, violence and serious harassment', 'Offences, safety'],
            ['Protection from Harassment Court', 'Civil protection orders, including expedited orders', 'Persistent harassment, online or offline'],
            ['Online Safety Commission', 'Directions to remove harmful online content and restrict accounts', 'Online harassment, doxxing, stalking'],
          ],
          caption: 'Check the current role of each body on its own website. Community mediation is voluntary and is not a substitute for criminal law.',
        },
        { t: 'callout', tone: 'tip', title: 'Write the agreement down', text: 'A short written agreement, signed or acknowledged by all, with a review date, turns a good conversation into something you can come back to. If it is broken, you have a record and a basis for the next step.' },
      ],
    },
  ],
  sources: [
    'Fisher, R., and Ury, W. (1981). Getting to Yes: Negotiating Agreement Without Giving In. Houghton Mifflin.',
    'Wachtel, T., and McCold, P. (2001). Restorative justice in everyday life. Restorative practices.',
    'Ministry of Law Singapore. Community Mediation Centre (mlaw.gov.sg).',
    'Ttofi, M. M., and Farrington, D. P. (2011). Effectiveness of school-based programs to reduce bullying. Journal of Experimental Criminology.',
  ],
  related: ['teaching/singapore/bullying-playbook', 'teaching/guides/classroom/restorative', 'teaching/singapore/escalation-ladder'],
}

export default guide
