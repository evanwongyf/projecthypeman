import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'In April 2026 the Ministry of Education announced that every school in Singapore will adopt a standardised set of disciplinary measures for serious misconduct, including bullying, by 2027. The aim is a common baseline so that the same act does not bring very different consequences in different schools, while leaving room for the principal’s judgement and for counselling. This page sets out the tiers, the consequences, the safeguards around caning, and the fair-process habits that make any sanction defensible.',
  nutshell: [
    'MOE’s framework sets **two tiers**: **serious** and **very serious** misconduct, each with a **baseline** of consequences that schools apply, and may add to.',
    'Consequences include **detention, suspension, a lowered conduct grade**, and, **for boys only**, **caning** in defined circumstances. Counselling and parent involvement run alongside.',
    'Caning is described as a **last resort**; schools must weigh **age, maturity, special educational needs and mental well-being** before using it.',
    'Bullying is assessed on **impact, intent and recalcitrance** (how persistent the behaviour is despite help), not just on a label.',
    'Any sanction is stronger when it is **proportionate, evidence-based, consistently applied and explained** to the student and parents.',
  ],
  sections: [
    {
      id: 'what',
      title: 'What the framework is',
      blocks: [
        { t: 'p', text: 'Until now, schools wrote their own consequences, which could differ widely. The framework sets a **baseline** that all schools must meet by 2027. Schools may add their own consequences and keep discretion in individual cases, but they cannot go below the baseline. MOE has said that it combines discipline with counselling, safety planning and structured intervention, and that parents are kept informed at key stages.' },
        { t: 'callout', tone: 'note', title: 'Reported from announcements', text: 'The figures below come from reports of MOE’s 15 April 2026 announcement. The detailed baseline is set out in MOE’s own annexes, and may be refined as it is implemented, so check moe.gov.sg for the current text.' },
      ],
    },
    {
      id: 'tiers',
      title: 'The tiers and the baseline consequences',
      blocks: [
        {
          t: 'table',
          head: ['Tier', 'Examples reported', 'Baseline for a first offence', 'Repeat'],
          rows: [
            ['Serious misconduct', 'Bullying, cheating, gambling, vaping, and other acts that break the law', '1 to 3 days of detention and/or suspension; conduct grade lowered; for older boys, possibly one stroke of the cane where there are aggravating factors', 'Escalates with repetition and severity'],
            ['Very serious misconduct', 'Arson, drug abuse, serious fighting or acts causing grievous hurt, vaping involving etomidate, and other criminal offences', '3 to 5 days of detention and/or suspension; conduct grade capped at “Fair”; for boys in upper primary and above, up to two strokes', 'Repeat: 5 to 14 days of detention and/or suspension (in school or at home); conduct grade “Poor”; up to three strokes'],
          ],
          caption: 'Reported figures. Detention and suspension can be served in school or at home. Caning applies to boys only.',
        },
        {
          t: 'levels',
          caption: 'A rough ladder of response in a school, from lowest to highest. The framework fixes the upper rungs; the lower rungs are the everyday work of teachers.',
          items: [
            { name: 'Classroom response', body: 'Reminders, a quiet word, seat change, reflection task, call to parents.' },
            { name: 'School-level support', body: 'Year head meeting, counselling, a behaviour contract, parent meeting.' },
            { name: 'Serious misconduct baseline', body: 'Detention or suspension, a lower conduct grade, counselling; for older boys, possibly one stroke in aggravated cases.' },
            { name: 'Very serious misconduct baseline', body: 'Longer suspension, conduct grade capped, up to two strokes for boys, and referral to the police where a crime is involved.' },
            { name: 'Repeat very serious', body: 'Five to fourteen days, “Poor” conduct, up to three strokes for boys, and a review of the student’s placement.' },
          ],
        },
      ],
    },
    {
      id: 'caning',
      title: 'Caning: who, when and the safeguards',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Only for boys', body: 'Corporal punishment in schools is limited to male students. Girls are not caned.' },
            { title: 'A last resort', body: 'MOE has said that caning is used only when other options are inadequate for the gravity of the misconduct.' },
            { title: 'Mitigating factors first', body: 'Schools must consider the student’s age, maturity, special educational needs and mental well-being before deciding.' },
            { title: 'A formal sanction, not a classroom tool', body: 'It is imposed through the school’s disciplinary process under the principal’s authority, by authorised staff, not by an individual teacher.' },
          ],
        },
        { t: 'callout', tone: 'warn', title: 'A teacher must not cane or hit a student', text: 'Where caning is allowed, it is a formal sanction decided and carried out under MOE rules by authorised staff. An individual teacher who strikes a student is committing misconduct and may be committing an offence. Reports of a teacher caning a pupil outside the rules have led to MOE investigations.' },
      ],
    },
    {
      id: 'bullying',
      title: 'How bullying cases are assessed',
      blocks: [
        { t: 'p', text: 'MOE distinguishes **bullying** (persistent and intentional hurtful behaviour, whether verbal, social, physical or cyber) from other hurtful behaviour such as a one-off insensitive remark or a fight. Under the standardised framework, bullying cases are assessed on three factors.' },
        {
          t: 'cards',
          cols: 3,
          items: [
            { tag: 'Impact', title: 'How much harm?', body: 'Physical injury, emotional distress, loss of attendance, effect on the victim’s well-being and learning.' },
            { tag: 'Intent', title: 'How deliberate?', body: 'Planned, targeted, and with an intention to hurt, humiliate or exclude, compared with careless or reactive behaviour.' },
            { tag: 'Recalcitrance', title: 'How persistent?', body: 'Whether the student continues after warnings and support, which separates a lapse from a pattern.' },
          ],
        },
        { t: 'p', text: 'The same act can therefore receive different responses depending on these three factors, within the baseline. A severe, planned and repeated act towards a vulnerable pupil is treated far more seriously than a one-off during a quarrel.' },
      ],
    },
    {
      id: 'fair',
      title: 'Making a sanction fair and defensible',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Gather the facts', body: 'Interview each student separately, check any recording, and record what each says, with dates and times, before deciding anything.' },
            { title: 'Check for special needs and context', body: 'Is there a diagnosed need (autism, ADHD, SEMH), a trauma history or recent bereavement? This does not excuse harm but shapes the response.' },
            { title: 'Match the response to the tier', body: 'Place the act in the framework, apply the baseline, and record the reasons for any departure.' },
            { title: 'Tell the student and parents', body: 'Explain what was found, which rule was broken, what the consequence is and what happens next. Parents are kept informed at key stages.' },
            { title: 'Add support and follow up', body: 'A counselling plan for the student who caused harm and for the student who was harmed. Check in after a week, a month and a term.' },
            { title: 'Review and learn', body: 'Did it stop? If not, escalate. If the same pattern keeps arising, change the system (supervision, seating, timetables), not just the sanction.' },
          ],
        },
        {
          t: 'dodont',
          do: ['Apply the same consequence to the same act, whoever the student is.', 'Write down the reasons for the decision.', 'Combine consequences with counselling and a plan to change the behaviour.', 'Offer the student a route back: a clear path to restore conduct and trust.'],
          dont: ['Do not decide on rumour or on one student’s account.', 'Do not impose consequences that are public or humiliating.', 'Do not skip counselling for the student who was harmed.', 'Do not treat a sanction as the end of the matter.'],
        },
      ],
    },
    {
      id: 'parents',
      title: 'Parents: what to expect, and what to do if you disagree',
      blocks: [
        { t: 'list', items: ['Expect to be told about serious incidents involving your child and the consequences that follow, and expect a meeting for the most serious cases.', 'If you disagree, ask the school to explain the facts and the framework, put your concerns in writing and ask for a meeting with the year head or principal.', 'If the matter is not resolved at school level, you can raise it with MOE through its feedback channels.', 'If your child is the victim, keep copies of messages and screenshots, and ask for the school’s safety plan in writing.'] },
        { t: 'callout', tone: 'tip', title: 'Stay calm and factual', text: 'An approach that sticks to facts and dates, and avoids insults, is both more likely to be heard and legally safer for you. Abusing school staff, even in a justified complaint, can itself become harassment.' },
      ],
    },
  ],
  sources: [
    'Ministry of Education Singapore (15 April 2026). Announcement of standardised disciplinary measures for schools by 2027; reported by The Straits Times, CNA, Yahoo News and others.',
    'Ministry of Education (14 October 2025). Parliamentary reply on standardising bullying incidents management and implementation across schools.',
    'Ministry of Education. Parliamentary replies on student discipline and corporal punishment (moe.gov.sg).',
  ],
  related: ['teaching/singapore/bullying-law-and-protocol', 'teaching/singapore/escalation-ladder', 'teaching/guides/classroom/restorative'],
}

export default guide
