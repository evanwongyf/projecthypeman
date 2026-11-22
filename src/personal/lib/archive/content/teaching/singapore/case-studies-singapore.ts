import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Rules are easiest to understand through cases. This page takes five episodes reported in Singapore, from pupil bullying with police reports to a mother jailed for hitting a school officer, and analyses each for what happened (as reported), which rule or law was in play, how it was handled and what it teaches. The facts are drawn from news reports and MOE statements; the reports are brief, so where they are silent we say so and do not fill the gap.',
  nutshell: [
    '**Sengkang Green Primary (2025):** three Primary 3 pupils were suspended over threats connected to a bullying report; the parent made a **police report**; children **under 10 cannot be prosecuted**, so school and MOE levers carry the weight.',
    '**Filmed bullying (2024):** videos of pupils being hit or kicked led to **police investigations**, and the Education Minister asked students **not to record and share**.',
    '**A mother jailed (six weeks):** a parent who **punched a student welfare officer** at the school gate pleaded guilty to hurting a public servant. A genuine grievance did not excuse violence.',
    '**MOE’s data and framework (2025 to 2026):** incidence rates rose, and MOE responded with **standardised discipline by 2027** and statements on **abuse of teachers**.',
    '**Patterns across cases:** early reports, a paper trail, parental involvement, a mix of sanction and support, and the law as the backstop.',
  ],
  sections: [
    {
      id: 'sengkang',
      title: 'Case 1: Sengkang Green Primary, threats and a police report (August 2025)',
      blocks: [
        {
          t: 'table',
          head: ['', 'As reported'],
          rows: [
            ['What happened', 'Three Primary 3 pupils were suspended over bullying of a classmate; death threats connected to the incident were sent to the classmate’s mother after she reported the bullying; reports said one of the pupils was caned'],
            ['Who acted', 'The mother filed a police report and informed the school, MOE and her Member of Parliament; the police confirmed they were investigating; MOE suspended the pupils'],
            ['What else MOE said', 'The ministry added that the classmate had also engaged in hurtful behaviour on some occasions'],
            ['Open question', 'The sources checked do not say whether the police investigation concluded or what it found'],
          ],
          caption: 'Reported by Malay Mail and The Star (August 2025). Not every detail is in the public record.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Rule', title: 'What applied', body: 'School discipline for bullying (suspension); the criminal law on threats (criminal intimidation); the rule that a child under 10 cannot be prosecuted; the framework on caning for boys, with its safeguards.' },
            { tag: 'Lesson', title: 'What it shows', body: 'A parent can use several routes at once (school, MOE, an MP and the police). The involvement of very young children means that school and MOE sanctions carry the weight, because criminal prosecution is not available.' },
            { tag: 'Complexity', title: 'Mutual harm', body: 'MOE’s remark that the target had also been hurtful on occasions reminds us that cases are rarely simple. An investigation has to establish the pattern, intent and impact, which is what the framework asks.' },
            { tag: 'Question', title: 'For discussion', body: 'How should a school weigh a pupil’s own earlier behaviour against persistent targeting? Does it change the sanction, the support, or neither?' },
          ],
        },
      ],
    },
    {
      id: 'video',
      title: 'Case 2: Filmed bullying and police investigations (2024)',
      blocks: [
        {
          t: 'table',
          head: ['', 'As reported'],
          rows: [
            ['What happened', 'In September 2024, videos circulated online showing boys hitting a primary school pupil, and (in a separate case) a secondary school pupil being taunted and kicked to the ground; police confirmed that reports were lodged and that investigations were under way'],
            ['What the Minister said', 'The Education Minister told Parliament that students who witness bullying should be reminded not to record and share the incidents online, and noted that what students perceive as bullying may or may not correspond to what others perceive as bullying'],
            ['Legal angle', 'Assault and criminal force; harassment where the video is shared to humiliate; the privacy and harm to the victim of circulating the video'],
          ],
          caption: 'Reported by The Star and Mothership (September to October 2024).',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Rule', title: 'What applied', body: 'The Penal Code on hurt and force; the discipline framework; the duty of a school to act once it knows; the guidance not to share videos.' },
            { tag: 'Lesson', title: 'The double harm', body: 'A recording captures evidence but, when posted, repeats the harm to the victim every time it is watched. Keep a copy for the school and police; do not post it.' },
            { tag: 'Lesson', title: 'Why witnesses matter', body: 'Bystanders can end an incident by telling an adult at once, or prolong it by filming. School anti-bullying work should train students in the first and not the second.' },
            { tag: 'Question', title: 'For discussion', body: 'Is posting a video of bullying ever justified? Who decides, and what are the alternatives?' },
          ],
        },
      ],
    },
    {
      id: 'mother',
      title: 'Case 3: A mother jailed for punching a school officer',
      blocks: [
        {
          t: 'table',
          head: ['', 'As reported'],
          rows: [
            ['What happened', 'A mother punched a student welfare officer at her son’s school gate, in front of other parents and students, after the officer had nudged her seven-year-old son towards the assembly hall; the officer needed hospital treatment'],
            ['Charge and sentence', 'She pleaded guilty to voluntarily causing hurt to a public servant and was jailed for six weeks; the prosecution had asked for two months; she had previously been jailed for a week for using criminal force on a public servant'],
            ['Defence', 'Her lawyer argued that she overreacted because she believed her son was being mistreated'],
          ],
          caption: 'Reported by Yahoo News Singapore and The Educator. The year of sentencing is not given in the extracts checked.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Rule', title: 'What applied', body: 'Penal Code: causing hurt to a public servant to deter them from their duty, which carries a higher maximum than an ordinary assault.' },
            { tag: 'Lesson', title: 'Grievance is not licence', body: 'The court treated an attack on a school staff member in front of children as serious, even where the parent honestly believed her child was being treated badly.' },
            { tag: 'Lesson', title: 'The right route', body: 'A complaint to the principal and MOE would have been the proper way to challenge how her son was handled.' },
            { tag: 'Question', title: 'For discussion', body: 'How can schools reduce the chance of such confrontations: arrival routines, parent liaison, a second adult at gates, early contact?' },
          ],
        },
      ],
    },
    {
      id: 'moe',
      title: 'Case 4: MOE’s data and the move to standard discipline (2025 to 2026)',
      blocks: [
        {
          t: 'bars',
          title: 'Reported bullying incidence per 1,000 students',
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
          caption: 'As reported from MOE’s April 2026 figures.',
        },
        {
          t: 'steps',
          items: [
            { title: 'October 2025', body: 'MOE’s parliamentary reply sets out the definition of bullying and how schools manage cases, and states that verbal abuse and physical aggression towards staff are serious disciplinary offences while physical assaults on staff are rare.' },
            { title: 'January 2026', body: 'A reply on abuse of teachers, after the OECD TALIS 2024 findings, says that abuse by parents remains low, that the School-Home Partnership guidelines were refreshed in 2024, and that firm action, including under POHA, will be taken in serious cases.' },
            { title: 'April 2026', body: 'MOE announces standardised disciplinary measures for serious and very serious misconduct, including bullying, in all schools by 2027, with detention, suspension, conduct grade changes and, for boys, caning in defined cases, alongside counselling.' },
            { title: 'June 2026', body: 'The Online Safety Commission begins operations, adding a route for serious online harms.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'Policy as a response to pressure', text: 'The sequence shows a system responding to rising reported cases, public concern after widely shared videos, and teachers’ reports, with tougher, more uniform consequences and new legal remedies. Whether the changes reduce bullying is the empirical question, and the evidence from other countries (see the international case studies) suggests that sanctions work best alongside supervision, bystander programmes and parent involvement.' },
      ],
    },
    {
      id: 'teacher',
      title: 'Case 5: Teacher conduct under scrutiny',
      blocks: [
        { t: 'p', text: 'Discipline applies to staff too. Reports have described MOE investigating teachers, for example after allegations that a primary school teacher called pupils offensive names. The public detail in these reports is limited and outcomes are not always reported, so they are best read as an illustration of a principle: MOE expects staff conduct to be beyond reproach, and will investigate allegations of abuse of pupils.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Rule', title: 'What applies', body: 'Staff codes of conduct and MOE’s disciplinary processes; the rule that corporal punishment is a formal sanction by authorised staff only; the law on assault.' },
            { tag: 'Lesson', title: 'Authority needs integrity', body: 'A teacher who insults or hits students loses the moral standing to enforce rules and exposes themselves to discipline and, in serious cases, prosecution.' },
          ],
        },
      ],
    },
    {
      id: 'patterns',
      title: 'Patterns across the cases',
      blocks: [
        {
          t: 'table',
          head: ['Pattern', 'What it means in practice'],
          rows: [
            ['Early and written reporting', 'Parents and teachers who report promptly and in writing are taken seriously and are protected by the record'],
            ['Several routes at once', 'School, MOE, an MP and the police can all be involved; each has a different power'],
            ['Age matters', 'Children under 10 cannot be prosecuted, so school sanctions and family support do the work'],
            ['Sanction plus support', 'The framework pairs consequences with counselling and structured intervention'],
            ['Violence against staff is serious', 'Courts treat attacks on school staff as attacks on public servants'],
            ['Videos are double-edged', 'They preserve evidence, and extend the harm if posted'],
            ['The law is the backstop', 'Most cases are resolved at school level; the police and courts step in for crimes and persistent harassment'],
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Use the cases to rehearse', text: 'Take each case and ask: what would I have done in the first hour, the first day and the first week? Who would I have told? What would I have written down? What would I have refused to do?' },
      ],
    },
  ],
  sources: [
    'Malay Mail and The Star (August 2025). Three Singapore Primary 3 pupils suspended over threats to a classmate’s mother, one caned; police investigating.',
    'The Star (23 September 2024). Singapore police investigating incident involving boys filmed hitting primary school pupil.',
    'Yahoo News Singapore and The Educator. Mother jailed six weeks for punching student welfare officer at school gate.',
    'Ministry of Education (14 October 2025; 13 January 2026; April 2026). Parliamentary replies and announcements on bullying, teacher abuse and standardised discipline.',
  ],
  related: ['teaching/singapore/bullying-law-and-protocol', 'teaching/singapore/parent-conflict', 'teaching/singapore/case-studies-international'],
}

export default guide
