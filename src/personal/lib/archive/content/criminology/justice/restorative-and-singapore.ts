import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Conventional criminal justice asks three questions: what law was broken, who did it, and what do they deserve? Restorative justice asks different ones: who was harmed, what do they need, and whose obligation is it to put things right? This guide looks at restorative practice and its evidence, then at Singapore, a system known for strict laws that has also invested heavily in rehabilitation and reintegration.',
  nutshell: [
    '**Restorative justice** brings together those harmed, those responsible and their communities to repair harm, usually through a facilitated meeting.',
    'It is a **complement**, not usually a replacement, for the formal system, and it is always **voluntary** for victims.',
    'Reviews find it gives **high victim satisfaction**, can reduce victims’ fear and trauma symptoms, and **modestly reduces reoffending** on average.',
    '**Singapore** combines low crime and strict penalties with a large-scale reintegration effort, including the **Yellow Ribbon** movement and mandatory aftercare.',
    'Singapore’s **two-year recidivism rate** has fallen substantially since the late 1990s, according to official figures.',
  ],
  sections: [
    {
      id: 'rj',
      title: 'What restorative justice is',
      blocks: [
        {
          t: 'table',
          head: ['Question', 'Retributive lens', 'Restorative lens'],
          rows: [
            ['What is crime?', 'A violation of the law and the state', 'A violation of people and relationships'],
            ['Who is central?', 'The state and the offender', 'Victim, offender and community'],
            ['What is the goal?', 'Establish guilt and impose punishment', 'Understand harm and agree how to repair it'],
            ['What does accountability mean?', 'Receiving a punishment', 'Understanding the impact and taking responsibility for making amends'],
          ],
          caption: 'Adapted from Howard Zehr, Changing Lenses (1990). In practice, the two lenses overlap.',
        },
        {
          t: 'cards',
          cols: 3,
          items: [
            { title: 'Victim–offender mediation', body: 'A trained facilitator supports a direct or indirect (letters, shuttle) dialogue between the two parties.' },
            { title: 'Conferencing', body: 'Victim, offender and their supporters meet with a facilitator. New Zealand made family group conferences central to youth justice in 1989.' },
            { title: 'Circles', body: 'Community members, often including elders, discuss the harm and support plans, rooted partly in Indigenous practices in Canada.' },
          ],
        },
      ],
    },
    {
      id: 'how',
      title: 'How a conference typically runs',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Preparation', body: 'The facilitator meets each party separately, checks that the offender accepts responsibility, and makes sure the victim genuinely wants to take part and is safe.' },
            { title: 'Telling the story', body: 'The offender describes what happened and what they were thinking; the victim and supporters describe the impact.' },
            { title: 'Understanding harm', body: 'Everyone explores who was affected and how, often including families on both sides.' },
            { title: 'Agreement', body: 'The group agrees on actions, apology, repair, compensation, community work, treatment.' },
            { title: 'Follow-up', body: 'Someone checks the agreement is carried out.' },
          ],
        },
        { t: 'p', text: 'John Braithwaite’s theory of **reintegrative shaming** (1989) explains why this might work: disapproving of the *act* within a relationship of respect, then welcoming the person back, reduces offending; stigmatising shaming that brands the *person* as bad increases it, echoing [labelling theory](@criminology/theories/social-theories).' },
        {
          t: 'callout',
          tone: 'fact',
          title: 'The evidence',
          text: 'A Campbell systematic review of randomised trials of face-to-face conferencing (Strang and colleagues, 2013) found a modest average reduction in repeat offending, cost-effectiveness, and high victim satisfaction, with victims reporting less anger and fewer post-traumatic stress symptoms than those who went only through court. Effects appeared larger for violent than for property offences.',
        },
        { t: 'callout', tone: 'warn', title: 'Where caution is needed', text: 'Restorative processes in domestic and sexual violence remain controversial because of power imbalances and the risk of pressure on victims. Where used, they need specialist facilitators and robust safety checks.' },
      ],
    },
    {
      id: 'singapore',
      title: 'Singapore’s approach',
      blocks: [
        { t: 'p', text: 'Singapore consistently records some of the lowest crime rates in the world. Its approach combines several features that are often discussed separately.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Strict laws and certain enforcement', body: 'Penalties are severe by international standards, including caning for certain offences and the death penalty for some drug-trafficking and murder offences. Reforms in 2012 introduced limited judicial discretion in some cases. Supporters argue strict laws deter; human-rights organisations criticise capital and corporal punishment. Criminologists note that high certainty of detection and strong social controls are likely to matter a great deal too.', tag: 'deterrence' },
            { title: 'A rehabilitation mission', body: 'The Singapore Prison Service describes its officers as “Captains of Lives” and runs assessment-based programmes, education and work training in prison.', tag: 'rehabilitation' },
            { title: 'Yellow Ribbon', body: 'The Yellow Ribbon Project, started in 2004, campaigns for second chances for ex-offenders. Yellow Ribbon Singapore (formerly SCORE) provides training and links people to employers.', tag: 'reintegration' },
            { title: 'Structured release', body: 'Community-based programmes, home detention and the Mandatory Aftercare Scheme (from 2014) supervise and support higher-risk people after release.', tag: 'aftercare' },
          ],
        },
        { t: 'p', text: 'According to the Singapore Prison Service, the two-year recidivism rate fell from over 40% for people released in the late 1990s to roughly 20–25% for recent release cohorts. As with any national statistic, this reflects definitions (Singapore measures re-detention or re-imprisonment) and many simultaneous changes, so it cannot be credited to any single policy.' },
        { t: 'p', text: 'Singapore’s youth system also uses restorative elements: the Youth Court can order **family conferences**, and many young offenders are diverted into guidance programmes rather than prosecuted.' },
      ],
    },
    {
      id: 'compare',
      title: 'Thinking about comparisons',
      blocks: [
        {
          t: 'checklist',
          items: [
            'Is the recidivism measure the same (re-arrest, reconviction, re-imprisonment)?',
            'Is the follow-up period the same?',
            'Who is in the cohort, all releases, or only those who finished a programme?',
            'Could selection explain the result (people who volunteer for programmes may already be lower risk)?',
            'What else changed at the same time, the economy, policing, drug markets?',
          ],
        },
      ],
    },
  ],
  sources: [
    'Zehr, H. (1990). *Changing Lenses: A New Focus for Crime and Justice*. Herald Press.',
    'Braithwaite, J. (1989). *Crime, Shame and Reintegration*. Cambridge University Press.',
    'Strang, H., Sherman, L. W., Mayo-Wilson, E., Woods, D., & Ariel, B. (2013). Restorative justice conferencing (RJC) using face-to-face meetings of offenders and victims. *Campbell Systematic Reviews*, 9(1).',
    'Sherman, L. W., & Strang, H. (2007). *Restorative Justice: The Evidence*. The Smith Institute.',
    'Singapore Prison Service. *Annual Statistics Release* (yearly).',
    'Yellow Ribbon Singapore. About us and annual reports.',
  ],
  related: ['criminology/justice/sentencing-and-rehabilitation', 'criminology/theories/social-theories', 'criminology/prevention/victims-and-prevention'],
}

export default guide
