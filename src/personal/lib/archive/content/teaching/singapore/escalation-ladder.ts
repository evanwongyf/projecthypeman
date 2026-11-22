import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'When a problem is bigger than you, the hardest question is often simply: who do I call, and in what order? This page is one map of the whole system, from the classroom to the courts. It shows each rung, who sits on it, what they can do and when to go up, and ends with a quick table of problem against lever, so that you can be firm without skipping steps, and quick without being reckless.',
  nutshell: [
    'Go **up the ladder one rung at a time** unless there is danger, a crime or a child at risk, in which case go **straight to the top**.',
    'Rungs: **classroom → year head and discipline team → principal → MOE → police → Youth Court / protection order / Online Safety Commission**.',
    'Always **document**, **tell the person above you**, and **follow up in writing**.',
    '**Emergencies** (violence, weapons, self-harm, abuse) go to **999 or 995 and school leaders at once**.',
    'Escalating is not failure. It is the system working as designed.',
  ],
  sections: [
    {
      id: 'ladder',
      title: 'The ladder',
      blocks: [
        {
          t: 'levels',
          caption: 'Lowest rung first. Most problems are resolved on the first three.',
          items: [
            { name: '1. Classroom', body: 'The teacher: clear expectations, reminders, warnings and in-class consequences; a call to the parents.' },
            { name: '2. Form teacher, year head, discipline team', body: 'Investigation, meetings with student and parents, behaviour contracts, counselling referral, school-level sanctions.' },
            { name: '3. Vice-principal and principal', body: 'Serious sanctions (suspension), conduct grade decisions, meetings with parents, authorisation of formal measures under MOE’s framework.' },
            { name: '4. MOE (cluster and headquarters)', body: 'Guidance and support for schools in difficult cases, handling of unresolved complaints, support for staff who face abuse.' },
            { name: '5. Police', body: 'Investigation of crimes: assault, threats, harassment, sexual offences, vandalism, drug offences.' },
            { name: '6. Courts and statutory bodies', body: 'Youth Court (for young offenders), Protection from Harassment Court (protection orders), Online Safety Commission (online harms), family-support and child-protection processes.' },
          ],
        },
        {
          t: 'flow',
          title: 'When to go straight to the top',
          nodes: [
            { label: 'Is anyone in danger?', sub: 'violence, weapon, self-harm', tone: 'human' },
            { label: 'Call 999 / 995', sub: 'and tell school leaders', tone: 'process' },
            { label: 'Is a child at risk?', sub: 'abuse or neglect', tone: 'human' },
            { label: 'Child protection', sub: 'school protocol and MSF', tone: 'process' },
            { label: 'Otherwise', sub: 'climb one rung at a time', tone: 'output' },
          ],
        },
      ],
    },
    {
      id: 'table',
      title: 'Problem against lever',
      blocks: [
        {
          t: 'table',
          head: ['Problem', 'First lever', 'Stronger lever', 'Legal lever'],
          rows: [
            ['Low-level disruption and backchat', 'Ladder in class; private talk', 'Detention, parent contact, behaviour contract', 'None'],
            ['Persistent defiance', 'Year head, parents, plan', 'Discipline framework, counselling', 'None, unless threats'],
            ['Bullying', 'Safety, investigation, sanction', 'Parents, conduct grade, suspension', 'Police report; protection order; Online Safety Commission'],
            ['Exclusion and cliques', 'Seating, group design, shared-concern meetings', 'Consequence where persistent and intended', 'Only if harassment or threats'],
            ['Student abusing a teacher', 'De-escalate, record, tell leaders', 'Serious-misconduct response, support for the teacher', 'Police report; POHA; Penal Code'],
            ['Difficult or abusive parent', 'Boundaries, second person, written record', 'Principal’s letter, restricted contact, MOE', 'Police report; protection order'],
            ['Smoking or vaping', 'Confiscate by procedure, parents, counselling', 'Framework consequences, cessation referral', 'Tobacco Act; Misuse of Drugs Act'],
            ['Truancy or absenteeism', 'Attendance conversation, parents', 'Contract, school and MOE follow-up', 'Compulsory Education Act (primary), as a last resort'],
            ['Child at risk of abuse or neglect', 'School child-protection protocol', 'MSF referral', 'Children and Young Persons Act'],
            ['Serious online harm', 'Evidence, report to platform, school', 'Online Safety Commission', 'POHA; Online Safety Act'],
          ],
        },
      ],
    },
    {
      id: 'rules',
      title: 'Rules for using the ladder',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Document at every rung', body: 'Dates, facts, who said what, what was done. A good record makes every next step easier.' },
            { title: 'Give each rung a chance, except in danger', body: 'Allow a reasonable time for a response, say when you will follow up, and then follow up.' },
            { title: 'Write it down', body: 'Follow a phone call with an email summarising what was said and agreed.' },
            { title: 'Protect the vulnerable first', body: 'In any case involving a child at risk, safety comes before process.' },
            { title: 'Stay proportionate', body: 'The more severe the step, the stronger the evidence you should hold. Wrongly accusing someone harms them and weakens your case.' },
            { title: 'Keep confidential what is confidential', body: 'Do not share names and details beyond those who need to know. Do not post about it online.' },
          ],
        },
        { t: 'callout', tone: 'warn', title: 'A parent’s police report is always available', text: 'Nothing in the school ladder stops a parent, a teacher or a student from making a police report where a crime may have been committed, such as an assault, a threat or serious harassment. MOE has said that it will support a teacher who makes a police report when their safety is threatened.' },
      ],
    },
    {
      id: 'contacts',
      title: 'Numbers and places to start',
      blocks: [
        {
          t: 'table',
          head: ['Need', 'Contact'],
          rows: [
            ['Police emergency', '999'],
            ['Ambulance and fire', '995'],
            ['Primary-school child helpline', 'Tinkle Friend, 1800 2744 788'],
            ['Crisis support, 24 hours', 'Samaritans of Singapore, 1767'],
            ['Mental-health helpline', 'Institute of Mental Health helpline, 6389 2222'],
            ['Child protection', 'Ministry of Social and Family Development (msf.gov.sg)'],
            ['School discipline policy and feedback', 'moe.gov.sg and your school’s office'],
            ['Law texts', 'Singapore Statutes Online (sso.agc.gov.sg)'],
          ],
          caption: 'Numbers and services change; check each organisation’s website.',
        },
      ],
    },
  ],
  sources: [
    'Ministry of Education Singapore. Parliamentary replies and press releases on discipline and bullying (moe.gov.sg).',
    'Ministry of Law Singapore. Protection from Harassment Court; Online Safety Commission.',
    'Ministry of Social and Family Development. Child protection services.',
  ],
  related: ['teaching/singapore/overview', 'teaching/singapore/bullying-playbook', 'teaching/singapore/statutes'],
}

export default guide
