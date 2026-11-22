import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Bullying is one of the few school problems that sits where discipline, safeguarding and the criminal law all meet. A school must act on it as a matter of duty; a victim has rights; and some bullying is also a crime. This page explains how MOE defines bullying, what the figures say, what a school’s protocol looks like when a report arrives, and the legal routes that sit behind it, including those for online abuse.',
  nutshell: [
    'MOE defines **bullying** as **persistent, intentional hurtful behaviour**; one-off insensitive comments and fights are hurtful but are handled as other misconduct. Bullying may be **verbal, social, physical or cyber**.',
    'MOE’s April 2026 figures show **about 3 cases per 1,000 pupils in primary** (up from 2) and **about 8 per 1,000 in secondary** (up from 6) between 2021 and 2025.',
    'The school protocol is: **take the report, secure the victim’s safety, investigate fairly, apply consequences within the framework, involve parents, support everyone, and follow up.**',
    'Some bullying is also a crime: assault, criminal intimidation and **harassment under POHA**. Children under 10 cannot be prosecuted, so the school and family-support routes matter most for young pupils.',
    '**Do not film and share** bullying incidents. MOE has asked students who witness bullying to report it, not record and post it.',
  ],
  sections: [
    {
      id: 'define',
      title: 'What counts as bullying',
      blocks: [
        {
          t: 'table',
          head: ['', 'Bullying', 'Other hurtful behaviour'],
          rows: [
            ['Pattern', 'Repeated or persistent', 'One-off'],
            ['Intent', 'Intentional: to hurt, humiliate or exclude', 'May be careless or reactive'],
            ['Power', 'Often an imbalance (numbers, size, status)', 'Often between equals'],
            ['Examples', 'Name-calling, threats, spreading rumours, excluding, hitting, cyberbullying', 'A single insensitive remark; a fight between two pupils of similar strength'],
            ['Response', 'Bullying protocol and the discipline framework', 'Other disciplinary and restorative responses'],
          ],
          caption: 'MOE’s distinction, reported from its 2025 parliamentary reply. A one-off act can still be serious misconduct or a crime.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Verbal', title: 'Words', body: 'Insults, mocking, threats, taunts about appearance, race, religion, disability or family.' },
            { tag: 'Social', title: 'Exclusion and rumours', body: 'Leaving someone out, turning others against them, spreading lies. Often missed because nothing is “done”.' },
            { tag: 'Physical', title: 'Hitting and property', body: 'Hitting, kicking, tripping, taking or damaging belongings.' },
            { tag: 'Cyber', title: 'Online', body: 'Insulting messages, group chats that exclude, doxxing, edited images, fake accounts, sharing videos of a fight.' },
          ],
        },
      ],
    },
    {
      id: 'data',
      title: 'What the numbers say',
      blocks: [
        {
          t: 'bars',
          title: 'Reported bullying incidence per 1,000 students (MOE, 2021 and 2025)',
          unit: ' per 1,000',
          min: 0,
          max: 10,
          decimals: 0,
          items: [
            { label: 'Primary, 2021', value: 2, group: 'Primary' },
            { label: 'Primary, 2025', value: 3 },
            { label: 'Secondary, 2021', value: 6, group: 'Secondary' },
            { label: 'Secondary, 2025', value: 8 },
          ],
          caption: 'As reported from MOE’s April 2026 figures. A rise in reported cases can reflect more bullying or more reporting, so numbers must be read with care.',
        },
        { t: 'callout', tone: 'note', title: 'What a rate of 8 in 1,000 means', text: 'That is under 1% of students in a year being involved in a recorded bullying incident, which sounds small. But the true experience is wider than the recorded cases: surveys of students usually show higher numbers, because many incidents are never reported.' },
      ],
    },
    {
      id: 'protocol',
      title: 'The school protocol, step by step',
      lead: 'Schools follow MOE’s guidance and their own written procedure. The steps below describe the typical sequence.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: '1. Receive the report', body: 'Any staff member who hears of bullying records it and passes it to the designated person (often the year head or discipline team). A student, parent or bystander can report, and an anonymous route may exist.' },
            { title: '2. Secure safety', body: 'Check the immediate safety of the student who was targeted. Separate the students where needed, and adjust supervision, seating and travel. Tell the student what will happen next.' },
            { title: '3. Investigate fairly', body: 'Talk to the targeted student, the student alleged to have bullied, and any witnesses, separately. Collect any messages or recordings through the school’s procedure. Decide on the balance of the evidence.' },
            { title: '4. Decide the response', body: 'If it is bullying, apply the consequences under the discipline framework, assessed on impact, intent and recalcitrance. If it is a different kind of misconduct, apply that response.' },
            { title: '5. Involve parents', body: 'Inform the parents of both students at key stages. Explain what happened, what the school is doing, and what the family can do.' },
            { title: '6. Support everyone', body: 'Counselling or a school counsellor for the student targeted. A plan for the student who bullied: what to learn, what support they need, what happens if it continues.' },
            { title: '7. Monitor and follow up', body: 'Check in regularly. If the behaviour continues, escalate: stronger sanctions, more intensive support, MOE and, where a crime has been committed, the police.' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'A parent whose child is bullied', text: 'Write down dates, what was said and done, who saw it, and keep screenshots. Report to the form teacher and year head, in writing. Ask what the school will do and by when, and ask for a follow-up date. If it is not resolved, go to the principal and then MOE. If a crime or threat is involved, you can make a police report at any time.' },
      ],
    },
    {
      id: 'law',
      title: 'When bullying is a crime or a civil wrong',
      blocks: [
        {
          t: 'table',
          head: ['Behaviour', 'Relevant law', 'Route'],
          rows: [
            ['Hitting, kicking, beating, a filmed assault', 'Penal Code: criminal force, hurt, grievous hurt', 'Police report'],
            ['Threats to hurt or kill', 'Penal Code: criminal intimidation (s.506)', 'Police report'],
            ['Persistent abuse, insults, spreading humiliating material', 'Protection from Harassment Act: ss.3, 4, 5', 'Police report; protection order from the Protection from Harassment Court'],
            ['Doxxing, impersonation, online harassment, intimate-image abuse', 'POHA; Online Safety (Relief and Accountability) Act 2025', 'Online Safety Commission (from 29 June 2026) and police'],
            ['Sexual comments or touching', 'Penal Code; school child-protection protocol', 'Report immediately to school leaders and the police; MSF for child protection'],
          ],
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Under 10: no criminal liability', body: 'A child under 10 cannot be charged. A police report may still be made and investigated, but the response will be through the school, MOE and family and social services.' },
            { title: '10 to under 16: the Youth Court', body: 'Cases are generally handled with a rehabilitative focus: warnings, diversion programmes, probation and community service rather than a conventional conviction. Identities are protected.' },
            { title: 'Protection orders', body: 'A victim (or a parent for a child) can apply under POHA for an order to stop the behaviour or remove material, without waiting for a prosecution.' },
            { title: 'Online Safety Commission', body: 'From 29 June 2026 a new Commission can direct removal of harmful content and restrict a perpetrator’s account for certain online harms, including harassment and doxxing.' },
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Do not film and share', text: 'Posting a video of a bullying incident can add to the victim’s humiliation and may itself break the law. The Education Minister has asked students who witness bullying not to record and share it, and to tell a trusted adult. Keep a copy for the school or police, but do not post it.' },
      ],
    },
    {
      id: 'cyber',
      title: 'Cyberbullying in practice',
      blocks: [
        {
          t: 'list',
          items: [
            'Keep evidence: take screenshots with dates, usernames and links. Do not delete them.',
            'Do not retaliate. Replying often makes things worse and can put the victim in the wrong.',
            'Report the content to the platform and block the account.',
            'Tell the school if it involves students, and tell the police if there are threats or sexual content.',
            'Consider an application to the Protection from Harassment Court or a report to the Online Safety Commission for serious cases.',
            'Look after the student’s well-being: sleep, friendships and mood. Seek counselling if needed.',
          ],
        },
      ],
    },
  ],
  sources: [
    'Ministry of Education (14 October 2025). Parliamentary reply: Standardising bullying incidents management and implementation across schools.',
    'Ministry of Education (April 2026). Standardised disciplinary measures and bullying incidence figures; reported by The Straits Times, CNA, The Star and Yahoo News.',
    'Protection from Harassment Act 2014; Online Safety (Relief and Accountability) Act 2025; Penal Code 1871, Singapore Statutes Online.',
  ],
  related: ['teaching/singapore/bullying-playbook', 'teaching/singapore/discipline-framework', 'teaching/singapore/escalation-ladder'],
}

export default guide
