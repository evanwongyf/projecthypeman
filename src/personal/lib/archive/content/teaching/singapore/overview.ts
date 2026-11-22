import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Discipline in a Singapore school sits on three layers that are easy to confuse: the law passed by Parliament, the policy set by the Ministry of Education (MOE), and the rules each school writes for itself. A teacher who knows which layer a problem belongs to knows what they may do alone, what needs a school leader, and what needs the police. This page maps the layers, the people in them and the limits on each.',
  nutshell: [
    'Three layers: **statute law** (Parliament), **MOE policy** (the Ministry) and **school rules** (each school). A school rule cannot override a statute, and a school cannot ignore MOE policy.',
    'Discipline is a **school responsibility**, decided by the principal and the school’s discipline or leadership team, within MOE’s framework.',
    'A teacher has the authority to **manage a classroom**: set expectations, give warnings and in-class sanctions, refer to the year head or discipline team, and call for help. A teacher does **not** have a general power to use force or to cane.',
    'Serious wrongs can also be **crimes**. The school’s discipline process and the criminal process run side by side and do not replace each other.',
    'Everything on this shelf is **educational information, not legal advice**. Laws and MOE policy change; check the official sources named in each guide.',
  ],
  sections: [
    {
      id: 'layers',
      title: 'Three layers of rules',
      blocks: [
        {
          t: 'table',
          head: ['Layer', 'Who makes it', 'Examples', 'What it can do'],
          rows: [
            ['Statute law', 'Parliament', 'Penal Code 1871, Protection from Harassment Act 2014, Compulsory Education Act 2000, Tobacco Act, Misuse of Drugs Act', 'Create crimes and civil remedies; bind everyone, including students, parents and staff'],
            ['MOE policy', 'The Ministry of Education', 'Standardised disciplinary framework, guidelines for School-Home Partnership, cyberwellness and counselling policies, code of conduct for staff', 'Set the baseline for every school; direct school leaders and teachers'],
            ['School rules', 'Each school, under the principal', 'Uniform, phones, attendance, classroom rules, school-specific consequences', 'Set expectations and consequences for students, within MOE’s baseline'],
          ],
          caption: 'A rule at a lower layer cannot contradict a higher one. A school cannot, for example, authorise a punishment that the law or MOE policy forbids.',
        },
        { t: 'callout', tone: 'note', title: 'Public schools and public servants', text: 'Teachers in government and government-aided schools are generally treated as public servants for some purposes in the Penal Code, which is why an assault on a teacher or school officer doing their job can be charged more seriously than an ordinary assault. See the statutes page.' },
      ],
    },
    {
      id: 'people',
      title: 'Who does what',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Class or subject teacher', body: 'First line: sets the climate and rules, notices problems early, gives warnings and in-class consequences, records incidents, informs the form teacher or year head.' },
            { title: 'Form teacher / year head / discipline team', body: 'Investigate incidents, speak to students and parents, decide school-level consequences, refer to counsellors and to school leadership.' },
            { title: 'School counsellors and student welfare staff', body: 'Support students involved (victims and the students who caused harm), assess risk, and link families to community help.' },
            { title: 'Vice-principal and principal', body: 'Decide serious sanctions, including suspension, and authorise any caning under MOE’s rules; liaise with MOE headquarters and the police for serious incidents.' },
            { title: 'MOE (cluster and headquarters)', body: 'Sets the framework, supports schools in serious cases, handles appeals and feedback, and supports staff who face abuse.' },
            { title: 'Police and the courts', body: 'Investigate and prosecute crimes. For young offenders, the Youth Court and diversion programmes emphasise rehabilitation.' },
          ],
        },
      ],
    },
    {
      id: 'teacher',
      title: 'What a teacher can and cannot do',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Set, teach and consistently enforce clear classroom expectations.',
            'Give verbal warnings, move a seat, set a reflection task or short detention within school policy, and phone or message parents.',
            'Refer a student to the year head, discipline team or counsellor and write up what happened, factually and promptly.',
            'Confiscate an item that is banned by school rules (a vape, for example), following the school’s procedure, and hand it to the designated staff.',
            'Use minimal, reasonable physical intervention only when needed to stop immediate danger to a student or others, as trained, and report it at once.',
            'Call the police in an emergency (999) and tell school leaders straight away.',
          ],
          dont: [
            'Do not hit, slap, pinch or throw things at a student. Corporal punishment, where it exists, is a formal sanction by authorised staff under MOE’s framework, not a classroom tool.',
            'Do not humiliate students in front of the class, name-call or use insults. MOE treats such conduct as misconduct by the teacher.',
            'Do not punish a whole class for one student’s act, or use academic marks as a punishment.',
            'Do not search a student’s body or private phone on your own. Follow the school’s procedure and involve school leaders.',
            'Do not film, share or post incidents online, or name a student on social media.',
            'Do not retaliate against an abusive parent. Document it and take it to school leadership.',
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Staff are held to standards too', text: 'MOE investigates teacher misconduct, including verbal abuse of pupils and unauthorised physical punishment. Firm discipline and respect for students go together, and the strongest position a teacher can be in is one where their own conduct is beyond criticism.' },
      ],
    },
    {
      id: 'parallel',
      title: 'School discipline and the criminal law run in parallel',
      lead: 'A single incident can start two separate processes.',
      blocks: [
        {
          t: 'flow',
          title: 'One incident, two tracks',
          nodes: [
            { label: 'Incident', sub: 'assault, threat, vandalism, vaping', tone: 'human' },
            { label: 'School track', sub: 'investigate, sanction, counsel, inform parents', tone: 'process' },
            { label: 'Criminal track', sub: 'police report, investigation, charge or caution', tone: 'process' },
            { label: 'Outcome', sub: 'each decided separately', tone: 'output' },
          ],
          caption: 'A police investigation does not stop the school acting, and school discipline does not replace the criminal process. For very young children (under 10) there is no criminal liability, so the school and family-support routes carry the weight.',
        },
        { t: 'callout', tone: 'tip', title: 'Where to read next', text: 'The [statutes](@teaching/singapore/statutes) page maps the laws, the [discipline framework](@teaching/singapore/discipline-framework) page sets out MOE’s consequences, and the [escalation ladder](@teaching/singapore/escalation-ladder) shows when to call whom.' },
      ],
    },
    {
      id: 'sources',
      title: 'Where the official information lives',
      blocks: [
        {
          t: 'table',
          head: ['Need', 'Official source'],
          rows: [
            ['The text of a law', 'Singapore Statutes Online (sso.agc.gov.sg), which carries the current version of every Act'],
            ['MOE policy and announcements', 'moe.gov.sg: press releases, speeches and parliamentary replies'],
            ['Police reports and advice', 'police.gov.sg, and 999 for emergencies'],
            ['Harassment orders and online harm', 'The Ministry of Law (mlaw.gov.sg) and the Online Safety Commission'],
            ['Child protection', 'The Ministry of Social and Family Development (msf.gov.sg)'],
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Not legal advice', text: 'This shelf explains how the system works so that educators and parents can act sensibly. It is not legal advice and it can be out of date. If you face a legal problem, speak to the school leadership, the Ministry, or a qualified lawyer, and check the current text of the law.' },
      ],
    },
  ],
  sources: [
    'Ministry of Education Singapore. Parliamentary replies and press releases on discipline and bullying (moe.gov.sg).',
    'Singapore Statutes Online (Attorney-General’s Chambers): Penal Code 1871, Protection from Harassment Act 2014, Compulsory Education Act 2000.',
  ],
  related: ['teaching/singapore/statutes', 'teaching/singapore/discipline-framework', 'teaching/singapore/escalation-ladder'],
}

export default guide
