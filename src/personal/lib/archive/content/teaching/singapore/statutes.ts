import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A teacher, a parent or a school leader rarely needs to know a statute by heart, but they need to know which law is relevant to which problem, so they can say “this is a police matter” or “this is a protection-order matter” with confidence. This page maps the Singapore statutes that touch school life, with the penalties as reported in the sources checked. Penalties and wording change, so always confirm on Singapore Statutes Online.',
  nutshell: [
    '**Education:** the Education Act (framework) and the **Compulsory Education Act 2000** (parents must ensure a child attends national primary school: a fine up to **S$5,000**, up to **12 months’ jail**, or both).',
    '**Violence and threats:** the **Penal Code 1871**: assault and criminal force, causing hurt, criminal intimidation, and tougher provisions when the victim is a **public servant** doing their duty.',
    '**Harassment:** the **Protection from Harassment Act 2014 (POHA)**: intentional harassment, harassment, fear or provocation of violence, and civil **protection orders**; the **Online Safety (Relief and Accountability) Act 2025** adds a Commission for online harm.',
    '**Smoking, vaping and drugs:** the **Tobacco (Control of Advertisements and Sale) Act**, the **Misuse of Drugs Act** (etomidate vapes) and MOE’s own penalties.',
    '**Children:** the **Children and Young Persons Act** (care, protection and young offenders) and the age of criminal responsibility, **10**.',
  ],
  sections: [
    {
      id: 'map',
      title: 'A map of the laws',
      blocks: [
        {
          t: 'table',
          head: ['Problem', 'Main law', 'Key points as reported', 'Who acts'],
          rows: [
            ['Pupil absent without good reason', 'Compulsory Education Act 2000', 'Applies to children above 6 and under 15 who are eligible; parent commits an offence if the child does not attend regularly without an exemption or accepted reason; fine up to S$5,000, up to 12 months’ jail, or both; the Director-General can compound for up to S$2,000', 'MOE (only on the Director-General’s complaint)'],
            ['Hitting, pushing, fighting', 'Penal Code: criminal force and hurt', 'Criminal force (s.352): up to 3 months’ jail or a fine up to S$1,500; hurt (s.323) and grievous hurt are more serious', 'Police, prosecution'],
            ['Assaulting a teacher or school officer doing their job', 'Penal Code: hurt to deter a public servant (s.332) and criminal force to deter (s.353)', 'Reported as up to 7 years, a fine and/or caning for s.332; a parent was jailed 6 weeks for punching a student welfare officer', 'Police, prosecution'],
            ['Threats (“I will kill you”)', 'Penal Code: criminal intimidation (s.506)', 'Up to 2 years, a fine or both; up to 10 years if the threat is of death or grievous hurt', 'Police'],
            ['Abuse, stalking, doxxing, cyber-harassment', 'Protection from Harassment Act 2014', 'Section 3 (intentional): up to S$5,000, 6 months or both; section 4: fine up to S$5,000; civil protection orders and expedited orders', 'Police; the Protection from Harassment Court'],
            ['Online harm to a person (harassment, doxxing, stalking, intimate-image abuse)', 'Online Safety (Relief and Accountability) Act 2025', 'The Online Safety Commission began operations on 29 June 2026 with five priority harms and can order takedowns and account restrictions', 'Online Safety Commission'],
            ['Student smokes or vapes', 'Tobacco Act; Misuse of Drugs Act; MOE rules', 'Minimum legal age 21; underage use or possession reported as a fine up to S$300; etomidate vapes treated as a Class C drug with rehabilitation and fines; school penalties up to suspension, caning for boys and expulsion for repeat offenders', 'Police, HSA, MOE'],
            ['Child at risk or beyond parental control', 'Children and Young Persons Act (as amended in 2019)', 'Care and protection orders, Family Guidance Orders (replacing the old Beyond Parental Control orders), protection of young offenders’ identity', 'MSF, Youth Court'],
            ['Defamatory statements', 'Penal Code (criminal) and the law of defamation (civil)', 'Untrue statements that damage reputation; relevant to both parents’ posts and complaints about teachers', 'Courts'],
            ['Filming and sharing images of students or staff', 'Personal Data Protection Act; POHA; MOE guidelines', 'Sharing videos of an incident can cause further harm and MOE has urged students not to record and share', 'PDPC, police, MOE'],
          ],
          caption: 'Penalties are drawn from published summaries and news reports; the current statutory text on Singapore Statutes Online is the authority.',
        },
      ],
    },
    {
      id: 'penal',
      title: 'The Penal Code: when school behaviour becomes a crime',
      blocks: [
        { t: 'p', text: 'A great deal of misbehaviour is a school matter and nothing more. But some acts are crimes whatever the age of the person who commits them, subject to the age of criminal responsibility. The ones that most often arise in schools are:' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Force', title: 'Criminal force, assault and hurt', body: 'Pushing, hitting, kicking and filmed beatings. Using criminal force carries up to 3 months’ jail or a fine; voluntarily causing hurt carries more; grievous hurt more again.' },
            { tag: 'Threats', title: 'Criminal intimidation', body: 'Threatening to hurt a person, their property or their reputation, to alarm them. Written, spoken or online. Death threats have a higher maximum.' },
            { tag: 'Staff', title: 'Hurting a public servant', body: 'Voluntarily causing hurt, or using force, to stop a public servant doing their duty is treated more seriously than an ordinary assault.' },
            { tag: 'Sexual', title: 'Outrage of modesty and sexual offences', body: 'Unwanted sexual touching or sexual messages. Always report and take seriously. Schools follow a strict child-protection protocol.' },
            { tag: 'Property', title: 'Vandalism and mischief', body: 'Damaging school property, including graffiti. Separate offences exist for vandalism.' },
            { tag: 'Reputation', title: 'Defamation', body: 'False statements of fact that harm reputation. Both a crime and a civil wrong. It matters when parents or students post allegations about a teacher.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'Age of criminal responsibility', text: 'In Singapore a child under 10 cannot be held criminally responsible. From 10 up to under 16, matters are generally dealt with in the Youth Court with a rehabilitative focus (probation, community service or placement). These are not “convictions” in the usual sense, and identities are protected. In practice, for very young pupils the school, MOE and family-support agencies carry the response.' },
      ],
    },
    {
      id: 'poha',
      title: 'Protection from Harassment Act and the Online Safety Act',
      blocks: [
        { t: 'p', text: 'POHA works on two tracks. **Criminal**: certain behaviours are offences. **Civil**: a victim can ask the court for a protection order to stop it, without waiting for a criminal case. The Act covers harassment by anyone, including students, parents, colleagues and strangers, and it explicitly includes online behaviour.' },
        {
          t: 'table',
          head: ['Provision', 'Covers', 'Reported penalty'],
          rows: [
            ['Section 3', 'Intentionally causing harassment, alarm or distress, by threatening, abusive or insulting words, behaviour or communications', 'Fine up to S$5,000, or up to 6 months’ jail, or both'],
            ['Section 4', 'Harassment, alarm or distress where intent need not be shown, subject to a defence of reasonableness', 'Fine up to S$5,000'],
            ['Section 5', 'Fear or provocation of violence through threatening or abusive behaviour', 'See the Act'],
            ['Protection order', 'A civil order against further acts (stop, remove material, no contact), and for urgent cases an expedited order of about 28 days', 'Breach: a fine up to S$5,000 and/or up to 6 months’ jail (reported)'],
          ],
          caption: 'The 2019 amendments added protections such as enhanced penalties in intimate relationships and for repeat offences, and provisions on doxxing and false statements. Check the current Act for the numbers.',
        },
        { t: 'p', text: 'The **Online Safety Commission** began operations on **29 June 2026** under the Online Safety (Relief and Accountability) Act 2025, with five priority harms to start with: intimate image abuse, image-based child abuse, doxxing, online harassment (including sexual harassment) and online stalking. The Commissioner can direct that harmful content be removed and can restrict a perpetrator’s account. Details on how minors and schools use it were not clear in the sources checked, so read the Commission’s own guidance.' },
      ],
    },
    {
      id: 'vape',
      title: 'Tobacco, e-cigarettes and etomidate',
      blocks: [
        {
          t: 'table',
          head: ['Rule', 'As reported'],
          rows: [
            ['Minimum legal age for tobacco', '21, reached in steps: 19 (2019), 20 (2020), 21 (2021)'],
            ['Underage use, purchase or possession of tobacco', 'Fine up to S$300 on conviction'],
            ['Selling to someone underage', 'Fine up to S$5,000 (first offence) and S$10,000 (repeat); licence revoked if sold to a child in school uniform or under 12'],
            ['Buying for, or giving tobacco to, a minor', 'Fines up to S$2,500 / S$5,000 (buying) and S$500 / S$1,000 (giving)'],
            ['Vaping (e-cigarettes)', 'Possession, use, purchase and sale of vapes are illegal in Singapore, with penalties increased in 2025'],
            ['Etomidate vapes (“Kpods”)', 'From 1 September 2025 treated as a Class C drug under the Misuse of Drugs Act on an interim basis; first-time user fines of S$500 (under 18) or S$700 (adults) plus rehabilitation up to 6 months; users under 16 face mandatory supervision and drug testing for a year; importers face at least 3 years’ jail and 5 strokes of the cane'],
          ],
          caption: 'Reported from news summaries of the August 2025 measures and later releases. Penalties may since have been amended: check current sources.',
        },
      ],
    },
    {
      id: 'cyp',
      title: 'Children and Young Persons Act',
      blocks: [
        { t: 'p', text: 'The Children and Young Persons Act protects children at risk of abuse and neglect and deals with young offenders. The 2019 amendments extended the definition of “child” to 18, introduced Enhanced Care and Protection Orders for abused children, replaced the old Beyond Parental Control orders with **Family Guidance Orders**, and extended protection of young people’s identities. For a school, the Act is the framework behind child-protection referrals to the Ministry of Social and Family Development and behind the juvenile justice process. If you suspect a child is being abused or neglected, follow your school’s child-protection protocol and contact MSF’s child protection service without delay.' },
        { t: 'callout', tone: 'tip', title: 'Where to get help now', text: '999 for police and 995 for an ambulance in an emergency. Tinkle Friend (1800 2744 788) is a helpline for primary-school children. Samaritans of Singapore (1767) offers 24-hour crisis support. Check each service for current numbers.' },
      ],
    },
  ],
  sources: [
    'Compulsory Education Act 2000, Singapore Statutes Online (sso.agc.gov.sg/Act/CEA2000).',
    'Penal Code 1871 (ss.323, 332, 352, 353, 506), Singapore Statutes Online; Singapore Police Force news releases on abuse of public servants.',
    'Protection from Harassment Act 2014 and the Protection from Harassment (Amendment) Act 2019; Ministry of Law factsheets.',
    'Ministry of Law (2026). Online Safety Commission and Online Safety (Relief and Accountability) Act 2025 to start on 29 June 2026.',
    'Ministry of Health. Minimum legal age for tobacco; Tobacco (Control of Advertisements and Sale) Act; and news reports of the September 2025 vaping and etomidate measures.',
    'Ministry of Social and Family Development. Children and Young Persons (Amendment) Act 2019.',
  ],
  related: ['teaching/singapore/overview', 'teaching/singapore/bullying-law-and-protocol', 'teaching/singapore/smoking-and-vaping'],
}

export default guide
