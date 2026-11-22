import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Some barriers to learning sit outside the classroom: a child who has not eaten, who has slept badly in a crowded flat, who minds younger siblings, whose family cannot afford a device or fees, or who is too anxious to come to school. Teachers cannot fix housing or income, but they can notice, adjust, avoid making things worse and connect families to help. This guide covers how poverty and stress affect learning, the arithmetic of missed days, school refusal, trauma-informed practice (with its limits) and the support systems available.',
  nutshell: [
    'Poverty affects learning through **many routes**: nutrition, sleep, health, stress, housing, access to books and devices, and the time and energy families have, not through a lack of care or ability.',
    '**Attendance** compounds: missing 10% of days across a school career is about a year of missed teaching. Chronic absence is a strong early warning sign.',
    '**School refusal** (emotionally based) differs from truancy; punishment worsens it. The response is gradual, supported return and addressing the anxiety.',
    '**Trauma-informed practice** (predictability, relationships, choice) helps many learners, though the evidence for specific ACE-score-based programmes is limited; avoid labelling children by ACE counts.',
    'Never make hardship **visible**: avoid public collection of fees, "free meal" labels and assignments that assume a computer, printer or travel.',
  ],
  sections: [
    {
      id: 'how',
      title: 'How hardship reaches the classroom',
      lead: 'Mechanisms, not stereotypes.',
      blocks: [
        {
          t: 'table',
          head: ['Barrier', 'How it can affect learning', 'What the school can do'],
          rows: [
            ['Hunger or poor nutrition', 'Poor concentration and mood; absence due to illness', 'School meal and snack support; discreet breakfast; link to financial assistance schemes'],
            ['Sleep loss, crowded home, noise', 'Fatigue, irritability, poor memory consolidation', 'Allow quiet space; avoid penalising lateness without asking; homework club on site'],
            ['Chronic stress and instability', 'Raised alertness, reduced working memory, behaviour that looks like defiance', 'Predictable routines; a trusted adult; calm, private conversations'],
            ['No device, data or quiet study space', 'Incomplete homework, falling behind in online work', 'Loan devices; supervised homework time; paper alternatives'],
            ['Caring and work responsibilities', 'Late arrival, absence, exhaustion', 'Flexibility, referral to support services, recognition of young carers'],
            ['Cost of school (trips, uniforms, enrichment)', 'Exclusion from activities; embarrassment', 'Confidential assistance; check that costs do not block participation'],
          ],
        },
        { t: 'callout', tone: 'note', title: 'Singapore context', text: 'Support includes the MOE Financial Assistance Scheme for eligible students, Edusave and Opportunity Fund awards, school-based support such as meal assistance, student care centres, and referrals to social service agencies and Family Service Centres; the Community Link and school counsellors help coordinate. Eligibility and schemes change, so check with your school’s general office or the MOE website before advising a family.' },
        { t: 'p', text: 'Be careful about the evidence on "poverty makes poor parenting" or on the "word gap" (Hart and Risley’s claim of a 30-million-word gap). Later work found the original sample small and the claims overstated; what is robust is that **richer, more responsive conversation** helps language development at any income level, and that conditions of scarcity consume attention (Mullainathan and Shafir) rather than reflect character.' },
      ],
    },
    {
      id: 'attendance',
      title: 'The arithmetic of missed days',
      lead: 'Small percentages add up.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{days lost}=(1-a)\,D\,Y,\qquad \text{years of teaching lost}=(1-a)\,Y`,
          caption: 'Days of teaching lost over a school career at attendance rate a, with D school days a year over Y years.',
          where: [{ sym: 'a', def: 'the attendance rate (0.90 for 90%)' }, { sym: 'D', def: 'school days per year (about 190 to 200)' }, { sym: 'Y', def: 'years in school' }],
          syntax: [{ sym: '(1-a)', say: 'the share of days missed. Effect: 5% sounds trivial; over many years it is a large share. Why: absence accumulates across every year, not just in one.' }, { sym: 'D\\,Y', say: 'the total days in the career. Effect: multiplying the share by the total gives days lost. Why: simple proportion.' }],
          worked: {
            title: 'Ten per cent absence',
            steps: ['a = 0.90, D = 195 days, Y = 6 (primary): days lost = 0.10 × 195 × 6 = **117 days**, about 23 weeks.', 'Over 10 years of primary and secondary: 0.10 × 195 × 10 = **195 days**, a full school year.', 'Missing 2 days a month (about 10 a year) feels small yet is about 5%.'],
            answer: 'Chronic absence (commonly defined as missing 10% or more) removes a year of teaching over a career. It is also concentrated among learners who are already behind, and the lost content is cumulative, since absences interrupt chains of prerequisites.',
          },
        },
        {
          t: 'levels',
          caption: 'A graduated response to falling attendance, from universal to intensive.',
          items: [
            { name: 'Everyone', body: 'Warm welcome back, clear expectations, a school day that is worth attending, and visibility of attendance data to staff.' },
            { name: 'Early signs', body: 'A named adult checks in after 2 to 3 absences in a short period; ask, do not accuse; identify the cause (illness, transport, bullying, anxiety, caring duties).' },
            { name: 'Persistent', body: 'A meeting with the family, an attendance plan with small steps, and referral to a school counsellor or social worker where needed.' },
            { name: 'Severe', body: 'Multi-agency support and a tailored return plan; consider whether an unmet learning or mental-health need is behind the absence.' },
          ],
        },
      ],
    },
    {
      id: 'refusal',
      title: 'School refusal and anxiety',
      lead: 'When going to school feels impossible.',
      blocks: [
        { t: 'p', text: '**School refusal** (or emotionally based school avoidance) is a child’s distress about attending: stomach aches and panic on school mornings, tearfulness, pleading, often with the parents aware and the child not hiding. It differs from **truancy** (hidden absence, often with antisocial behaviour) and from **school withdrawal** by parents. It is linked to anxiety, separation worries, bullying, social difficulty, undiagnosed learning difficulties and autism. Punishment and pressure usually worsen it; early, gradual return with the child’s fears addressed gives the best results.' },
        { t: 'steps', items: [{ title: 'Understand the reasons', body: 'Talk with the child and family. Is it separation, social worries, a specific lesson, a teacher, bullying, sensory overload or fear of failure?' }, { title: 'Agree a plan', body: 'A small first step (arrive at a quiet entrance, attend for one lesson, see a trusted adult each morning), a safe space, and a named contact.' }, { title: 'Return gradually', body: 'Increase exposure in small steps, matched to the child’s tolerance. Avoid long gaps, which make it harder.' }, { title: 'Involve specialists', body: 'School counsellor, educational psychologist or clinician where anxiety is significant; a medical letter or a need for a formal support plan may be required.' }] },
        { t: 'dodont', do: ['Keep the learner connected to work and friends during absence.', 'Welcome them back without comment.', 'Share the plan with all staff so the child does not repeat their story.'], dont: ['Threaten consequences as the first step.', 'Send work home with no contact.', 'Treat each missed day as defiance.'] },
      ],
    },
    {
      id: 'ti',
      title: 'Trauma-informed practice, carefully',
      lead: 'Safety, predictability, relationships.',
      blocks: [
        { t: 'p', text: 'Children who have experienced abuse, neglect, violence, bereavement or other overwhelming stress may show hypervigilance, shutdown or outbursts that look like misbehaviour. Trauma-informed practice asks what happened to this child, not what is wrong with them, and offers **safety** (predictable routines, calm tone), **trusted relationships**, **choice and control** and **skill-building** for regulation. These are good practice for every learner. Two cautions: the evidence for specific school-wide trauma programmes is still limited, and counting "adverse childhood experiences" is a poor predictor for an individual child, so avoid using scores to label a learner. Teachers are not therapists: report concerns through safeguarding channels and the school’s counselling team.' },
        { t: 'checklist', items: ['Is the day predictable, with changes explained in advance?', 'Is there a calm, quiet place and a trusted adult for learners who are overwhelmed?', 'Do consequences repair relationships (see restorative practice) rather than shame?', 'Do all staff know how to respond to a disclosure and whom to tell?', 'Do staff have support for their own wellbeing? Supporting distressed children is demanding.'] },
      ],
    },
  ],
  sources: [
    'Mullainathan, S. & Shafir, E. (2013). *Scarcity: Why Having Too Little Means So Much*. Times Books.',
    'Gershoff, E. & Sattler, M. (2020). Reassessing the word gap: the evidence on Hart and Risley. See Sperry, D. E., Sperry, L. L. & Miller, P. J. (2019). Reexamining the verbal environments of children from different socioeconomic backgrounds. *Child Development*, 90(4).',
    'Gottfried, M. A. (2014). Chronic absenteeism and its effects on students’ academic and socioemotional outcomes. *Journal of Education for Students Placed at Risk*, 19(2).',
    'Kearney, C. A. & Silverman, W. K. (1990). A preliminary analysis of a functional model of assessment and treatment for school refusal behavior. *Behavior Modification*, 14(3).',
    'Anda, R. F. et al. (2006). The enduring effects of abuse and related adverse experiences in childhood. *European Archives of Psychiatry and Clinical Neuroscience*, 256; and Lacey, R. & Minnis, H. (2020), on the limits of ACE scores.',
    'Ministry of Education Singapore: Financial Assistance Scheme, Edusave; Ministry of Social and Family Development: ComLink+ and Family Service Centres.',
  ],
  related: ['teaching/equity/opportunity-gap', 'teaching/special-education/needs/semh', 'teaching/guides/classroom/restorative', 'teaching/guides/classroom/families', 'teaching/inclusive-practice/why-learners-fall-behind'],
}

export default guide
