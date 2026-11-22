import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Every country struggles with the same problems: bullying, defiant students, and conflict between families and schools, and each has tried different mixes of law, school policy and programmes. Looking abroad shows what worked, what backfired and what Singapore might borrow. This page analyses seven cases: South Korea’s teacher-protection laws, Japan’s anti-bullying act, France’s offence of school harassment, England’s statutory power to discipline, Finland’s KiVa programme, Norway’s duty to act and the Phoebe Prince case in the United States, with a short note on Australia’s eSafety Commissioner.',
  nutshell: [
    '**South Korea (2023):** the death of a young teacher after parental complaints led to a package of laws protecting teachers; surveys later showed many teachers still felt unprotected, so **law alone did not fix it**.',
    '**Japan (2013):** after a student’s suicide, the **Act for the Promotion of Measures to Prevent Bullying** required schools to act and report; it defined bullying by the **victim’s experience**.',
    '**France (2022):** school harassment became an **offence in the criminal code**, with penalties for the harasser.',
    '**England:** teachers have a **statutory power to discipline**, within limits; **corporal punishment is illegal**.',
    '**Finland’s KiVa programme** was tested in a large randomised trial and reduced bullying, using bystander training rather than only punishment.',
  ],
  sections: [
    {
      id: 'korea',
      title: 'South Korea: protecting teachers from parents (2023)',
      blocks: [
        {
          t: 'table',
          head: ['', 'As reported'],
          rows: [
            ['What happened', 'In July 2023 a 24-year-old elementary school teacher in southern Seoul died, reportedly after difficulties dealing with parents over a school violence case; hundreds of thousands of teachers protested in August and September'],
            ['Response', 'A package of laws amended the Framework Act on Education, the Elementary and Secondary Education Act, the Early Childhood Education Act and the Teacher Status Act (sources describe it as four or five laws); the Ministry planned school teams, led by the principal, to handle complaints, with parents prohibited from contacting teachers directly with complaints, and a distinction between legitimate teaching and child abuse'],
            ['Result', 'A survey presented in July 2025 reportedly found that 42.6% of teachers had experienced violations of their professional rights even after the laws; teacher groups pushed for further changes, and a lawmaker pursued amendments to shield teachers from frivolous complaints'],
          ],
          caption: 'From The Korea Times, Asiae and NPR coverage. The sources do not agree on how many laws or what they are called, so check the Korean law texts.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Idea', title: 'Route complaints through the school', body: 'A team handles the complaint, not the individual teacher. This protects the teacher and gives parents a defined process.' },
            { tag: 'Limit', title: 'Law alone did not change the culture', body: 'Teachers reported that protections existed on paper but were not felt in practice. Culture, leadership and enforcement matter as much as the statute.' },
            { tag: 'Link', title: 'For Singapore', body: 'MOE’s School-Home Partnership guidelines and its support for police reports address the same problem in a lighter way.' },
          ],
        },
      ],
    },
    {
      id: 'japan',
      title: 'Japan: a law after a suicide (2013)',
      blocks: [
        { t: 'p', text: 'In 2011 a 13-year-old boy in Otsu city took his own life after sustained bullying, and the school’s response was widely criticised. In 2013 Japan passed an Act for the Promotion of Measures to Prevent Bullying. It required schools to take measures to prevent bullying, to establish a response structure and to report incidents, and it defined bullying broadly, around the harm the pupil feels. It also set out a category of “serious situations”, such as suicide or long absence, that trigger a formal investigation and report to the authorities.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Idea', title: 'Define bullying by the victim’s experience', body: 'The test is whether the pupil feels physical or psychological harm, rather than the intention of the bully. This catches more cases but needs judgement to avoid over-labelling.' },
            { tag: 'Idea', title: 'A formal investigation for the worst cases', body: 'Serious cases trigger a required inquiry and report, which stops schools quietly closing a case.' },
            { tag: 'Limit', title: 'Bullying persists', body: 'Reported bullying figures in Japan have continued to rise, partly because more is recorded. Law improved reporting more than it stopped bullying.' },
            { tag: 'Link', title: 'For Singapore', body: 'MOE uses an intentional-and-persistent definition, with impact assessed. The Japanese approach shows the value of a clear trigger for formal review in the most serious cases.' },
          ],
        },
      ],
    },
    {
      id: 'france',
      title: 'France: school harassment as a crime (2022)',
      blocks: [
        { t: 'p', text: 'A law of 2 March 2022 made school harassment a specific offence in France’s criminal code, aimed at repeated acts of harassment against a pupil that harm their mental or physical health. It was reported as one of the first laws in Europe to criminalise school and cyber-bullying. Penalties, according to reports, rise with the harm done and the victim’s age, and become severe where the victim attempts suicide or dies. The law also required schools to have prevention measures and to take action. The exact terms should be checked on Légifrance.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Idea', title: 'Put a name on it in criminal law', body: 'A specific offence signals that school harassment is more than a school matter, and gives prosecutors a tool.' },
            { tag: 'Limit', title: 'Criminal law and children', body: 'Prosecuting minors raises questions about proportionality, and in most cases schools and families still do the daily work.' },
            { tag: 'Link', title: 'For Singapore', body: 'Singapore uses general offences (hurt, intimidation, harassment) and the new Online Safety Commission rather than a specific school-bullying offence.' },
          ],
        },
      ],
    },
    {
      id: 'england',
      title: 'England: a statutory power to discipline',
      blocks: [
        { t: 'p', text: 'The Education and Inspections Act 2006 gave teachers, for the first time, a specific statutory power to discipline pupils for breaking school rules, failing to follow instructions or other unacceptable behaviour, including when the pupil is off the school premises on a school visit. Sanctions must be reasonable, taking account of the pupil’s age and any special educational needs or disability. Corporal punishment is illegal. Staff may search with consent for banned items, and heads and authorised staff may search without consent for knives or weapons, alcohol, illegal drugs and stolen items. Schools must have a behaviour policy.' },
        {
          t: 'table',
          head: ['Power', 'Limit'],
          rows: [
            ['Discipline pupils, including detention', 'Reasonable, proportionate, with regard to age and needs; corporal punishment illegal'],
            ['Search for banned items with consent', 'Consent required'],
            ['Search without consent for weapons, alcohol, illegal drugs, stolen items', 'Only designated staff, on suspicion, following guidance'],
            ['Use reasonable force', 'Only to prevent injury, damage or disorder, and the minimum necessary'],
          ],
          caption: 'From the Act and Department for Education guidance as summarised in school policies; check the current guidance.',
        },
        { t: 'callout', tone: 'tip', title: 'For Singapore', text: 'The lesson is the clarity: a teacher knows exactly what they are allowed to do, and what they are not. Singapore’s MOE framework and the standardised baseline do the same job through policy rather than statute.' },
      ],
    },
    {
      id: 'kiva',
      title: 'Finland: KiVa, changing the audience',
      blocks: [
        { t: 'p', text: 'KiVa (from *kiusaamista vastaan*, “against bullying”) was developed at the University of Turku and tested in a randomised controlled trial in about 230 Finnish schools. Teachers deliver lessons on the roles of students in bullying, especially the bystander who can reinforce it or support the victim. There is a school team to deal with cases, discussions with those who bullied and support for the victim, and a school-wide approach with posters, a “virtual game” and parent materials. The trial found that victimisation and bullying were reduced in KiVa schools compared with controls, and the programme has been adopted in Finland and other countries.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Idea', title: 'Change the audience', body: 'Most bullying has onlookers. If they stop rewarding it and start defending, the bully loses status.' },
            { tag: 'Idea', title: 'A team with a protocol', body: 'Staff know exactly who handles a case, what to say, and when to follow up.' },
            { tag: 'Limit', title: 'Effects are modest', body: 'Reductions are real but not total, and effects are stronger in younger pupils and in schools that implement it faithfully.' },
            { tag: 'Link', title: 'For Singapore', body: 'The bystander work and the case team fit well alongside MOE’s framework and are a way to reduce the incidence that sanctions alone do not touch.' },
          ],
        },
      ],
    },
    {
      id: 'norway',
      title: 'Norway: a duty to act',
      blocks: [
        { t: 'p', text: 'Norway’s Education Act has a chapter on pupils’ right to a safe and good school environment. Under it, a school has a duty to act when a staff member suspects or learns that a pupil is being bullied or harassed, to investigate and to put in place measures, with a written plan, and a pupil or parent can complain to the County Governor if the school does not act. The reported effect is a shift in who bears the burden: the school must prove it acted, not the child prove they were bullied.' },
        { t: 'callout', tone: 'note', title: 'The principle', text: 'A duty to act, with a visible record and an outside body to complain to, is a strong lever for accountability. In Singapore the equivalent routes are the school protocol, MOE, and the police and courts.' },
      ],
    },
    {
      id: 'usa',
      title: 'United States: Phoebe Prince and the law of bullying',
      blocks: [
        { t: 'p', text: 'In January 2010, Phoebe Prince, a 15-year-old Irish immigrant in South Hadley, Massachusetts, took her life after months of bullying at school. Several students were criminally charged, and the case led Massachusetts to pass a comprehensive anti-bullying law in 2010. Every US state now has some form of anti-bullying law. Critics note that zero-tolerance suspensions have often been applied without effect on bullying, that definitions and enforcement vary, and that criminal charges against students are rare and contested.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Idea', title: 'Require every school to have a plan', body: 'Statutes require policies, reporting and training, rather than set particular sanctions.' },
            { tag: 'Limit', title: 'Zero tolerance is blunt', body: 'Automatic suspensions can push students out of school and do not change the behaviour, which is why programmes pair consequences with support.' },
            { tag: 'Link', title: 'For Singapore', body: 'MOE’s assessment of impact, intent and recalcitrance is a way of avoiding blunt automatic responses while keeping a firm baseline.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'Australia’s eSafety Commissioner', text: 'Australia created a federal eSafety Commissioner with powers to require platforms to remove serious cyberbullying material targeting an Australian child within a short time. Singapore’s Online Safety Commission, from June 2026, follows a similar idea of a specialist body with takedown powers.' },
      ],
    },
    {
      id: 'borrow',
      title: 'What Singapore can borrow, and what it already has',
      blocks: [
        {
          t: 'table',
          head: ['Idea', 'From', 'Singapore status'],
          rows: [
            ['Route complaints about teachers through the school, not the individual', 'South Korea', 'School-Home Partnership guidelines; leaders handle abusive parents; MOE supports police reports'],
            ['Formal review for the most serious cases', 'Japan', 'MOE oversight of serious cases; the standardised framework'],
            ['A specialist body for online harm', 'Australia', 'Online Safety Commission from 29 June 2026'],
            ['Clear statutory limits on teachers’ powers', 'England', 'MOE policy and the standardised framework rather than statute'],
            ['Bystander and whole-school programmes', 'Finland (KiVa)', 'Cyber wellness and character education; a bystander focus could be strengthened'],
            ['A duty to act with an outside complaint route', 'Norway', 'School protocol, MOE feedback and the police and courts'],
            ['Specific school-harassment offence', 'France', 'Not used; general offences and POHA apply'],
          ],
        },
        { t: 'callout', tone: 'tip', title: 'A caution about borrowing', text: 'Laws travel badly if the supporting culture does not. South Korea shows that a strong statute may not change teachers’ experience. Finland shows that a programme works only if it is implemented faithfully. Before copying a measure, ask what made it work where it started.' },
      ],
    },
  ],
  sources: [
    'The Korea Times (23 August 2023). Government unveils measures to strengthen teachers’ rights protection; NPR (29 September 2023); Asiae (July 2024, July 2025).',
    'Act for the Promotion of Measures to Prevent Bullying (Japan, 2013); background on the 2011 Otsu case.',
    'Loi du 2 mars 2022 visant à combattre le harcèlement scolaire (France), Légifrance.',
    'Education and Inspections Act 2006 (England); Department for Education guidance on behaviour and discipline and searching, screening and confiscation.',
    'Kärnä, A., et al. (2011). A large-scale evaluation of the KiVa antibullying program. Child Development.',
    'Norwegian Education Act, chapter 9A (pupils’ school environment).',
    'Massachusetts Act Relative to Bullying in Schools (2010); coverage of the Phoebe Prince case.',
  ],
  related: ['teaching/singapore/case-studies-singapore', 'teaching/singapore/bullying-playbook', 'teaching/singapore/bullying-law-and-protocol'],
}

export default guide
