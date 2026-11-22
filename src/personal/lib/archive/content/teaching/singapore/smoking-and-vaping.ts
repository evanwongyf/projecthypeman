import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Smoking and vaping by students is at once a rule-breaking problem, a legal problem and a health problem, and a school that treats it only as one of the three usually fails. Singapore has tightened its rules sharply since 2025, especially around vapes and etomidate pods (“Kpods”). This page sets out the laws and school penalties as reported, how nicotine dependence works, and a detect, help and enforce approach for teachers, school leaders and parents.',
  nutshell: [
    'The **minimum legal age for tobacco is 21**, and **vapes are illegal** to buy, use or possess in Singapore. Underage use or possession of tobacco was reported as a fine up to **S$300**.',
    'From **1 September 2025**, **etomidate vapes (“Kpods”)** were brought under the Misuse of Drugs Act, with **rehabilitation, fines and drug testing** for users and **long jail terms and caning** for suppliers.',
    'MOE reported about **3,100 students a year** caught vaping between 2022 and 2024, and **stricter school penalties**: counselling, a lowered conduct grade, detention, suspension, **caning for boys** and, for repeat offenders, expulsion.',
    'Nicotine is **highly addictive**, and young people are especially vulnerable; **telling a student to “just stop” rarely works**. The effective response combines a firm rule with help to quit.',
    'The aim is a school where it is **hard to vape, easy to get help, and certain that a breach has a consequence**.',
  ],
  sections: [
    {
      id: 'law',
      title: 'The law and the school penalties',
      blocks: [
        {
          t: 'table',
          head: ['Item', 'As reported'],
          rows: [
            ['Tobacco age', 'Minimum legal age 21 (since 1 January 2021)'],
            ['Underage use, purchase or possession of tobacco', 'Fine up to S$300'],
            ['Vapes (e-cigarettes)', 'Illegal to possess, use, buy or sell in Singapore'],
            ['Etomidate vapes (Kpods)', 'Class C drug under the Misuse of Drugs Act from 1 September 2025 (interim), with first-time user fines of S$500 (under 18) or S$700 (adults) and rehabilitation of up to six months; users under 16 face mandatory supervision and drug testing for a year'],
            ['Suppliers of etomidate', 'Importers: at least three years’ jail and five strokes; sellers and distributors: two to ten years’ jail and two to five strokes of the cane'],
            ['School penalties for vaping', 'Counselling, a lowered conduct grade, detention, suspension, caning for boys, and expulsion for recalcitrant offenders'],
            ['Under the standardised framework', 'Vaping is listed as serious misconduct; vaping involving etomidate is listed as very serious'],
          ],
          caption: 'Reported from news coverage of the August 2025 announcement and a May 2026 MOH-HSA release; the Misuse of Drugs Act classification was described as interim at first, so check its current status.',
        },
        { t: 'callout', tone: 'note', title: 'Scale', text: 'MOE reported that about 3,100 students a year were caught vaping from 2022 to 2024 in primary, secondary and junior college, and about 800 a year in institutes of higher learning. More than 270 youths received smoking and vaping cessation counselling in the first quarter of 2026.' },
      ],
    },
    {
      id: 'science',
      title: 'Why it is hard to stop: nicotine and the young brain',
      blocks: [
        { t: 'p', text: 'Nicotine acts on the brain’s reward system, releasing dopamine. With repeated use the brain adjusts, so the user needs nicotine to feel normal, and stopping brings irritability, poor concentration, restlessness and strong cravings. Adolescent brains, still developing, are more sensitive to this, and dependence can start with only a few exposures. Some vape pods can deliver nicotine at levels comparable to a pack of cigarettes.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Withdrawal looks like misbehaviour', body: 'A student who is irritable, restless, cannot concentrate or keeps asking to go to the toilet may be in nicotine withdrawal. Knowing this changes the response without lowering the rule.' },
            { title: 'Kpods are different', body: 'Etomidate is a medical anaesthetic. Misuse is associated with drowsiness, uncontrolled muscle movements, confusion and dependence. A student who is drowsy, jerking or confused after vaping needs urgent medical attention.' },
            { title: 'Peers and supply matter', body: 'Most young people start with a friend or older student who supplies. Reducing supply and changing the peer norm are as important as individual counselling.' },
            { title: 'Relapse is normal', body: 'Most quit attempts fail at first. A plan that expects relapse and gives another chance works better than one that treats it as final failure.' },
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Medical emergency', text: 'If a student is unresponsive, having seizure-like movements, or difficulty breathing after vaping, call 995 at once.' },
      ],
    },
    {
      id: 'approach',
      title: 'A detect, help and enforce approach',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: '1. Prevent: shape the norm', body: 'Teach the facts early (what is in a vape, what Kpods do, the law), and let students hear from health professionals and ex-users. Praise the majority who do not vape so that it is not seen as normal.' },
            { title: '2. Detect: make it hard to do unseen', body: 'Supervise hotspots (toilets, stairwells, behind blocks). Use the tools MOE provides, such as nicotine test kits, metal detectors and, as trialled with HSA, vape detectors. Act on student and parent reports.' },
            { title: '3. Respond: the same consequence every time', body: 'Confiscate according to the school’s procedure, hand over to the designated officer, record, tell the parents, and apply the consequence under the discipline framework. Certainty is more important than severity.' },
            { title: '4. Help: treat dependence', body: 'Refer to school counselling and to a cessation programme. Involve parents and, if needed, a doctor. A student who is dependent needs help to stop, not only a penalty.' },
            { title: '5. Follow up and prevent supply', body: 'Check in at a week, a month and a term. Report suppliers, including older students and adults, to the police or the authorities.' },
          ],
        },
        {
          t: 'dodont',
          do: [
            'Follow the school procedure for confiscation, and let authorised staff do any search.',
            'Talk to the student privately and calmly, with facts: where, when, what.',
            'Tell the parents and explain both the consequence and the support.',
            'Refer to cessation help. Ask the school counsellor about programmes run with HPB and other agencies.',
            'Report anyone supplying a minor.',
          ],
          dont: [
            'Do not search a student’s body yourself or take a device from a pocket.',
            'Do not test a student without the school’s procedure and parental involvement.',
            'Do not shame a student publicly or label them an addict.',
            'Do not treat a first lapse as the end: set a plan and review it.',
            'Do not buy or hand vapes or cigarettes to students, which is itself an offence.',
          ],
        },
      ],
    },
    {
      id: 'help',
      title: 'Helping a student quit',
      blocks: [
        {
          t: 'list',
          items: [
            'Talk about the reasons the student wants to quit, not only the reasons adults want them to.',
            'Plan around triggers: stress, certain friends, certain places, after meals.',
            'Offer an alternative for the moments: water, a walk, a conversation, a fidget.',
            'Involve a doctor about whether medication is appropriate for a young person; do not self-prescribe.',
            'Use support such as the Health Promotion Board’s quit programmes and the national quitline, and the school counsellor.',
            'Reward progress at small milestones and treat a slip as information, not failure.',
          ],
        },
        { t: 'callout', tone: 'tip', title: 'For parents', text: 'Stay calm: shouting rarely helps. Ask open questions, check in about the reasons, work with the school, and look for support together. If you find vapes at home, do not buy more and consider reporting the source.' },
      ],
    },
    {
      id: 'cases',
      title: 'What the news shows',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: '2025', title: 'The Kpod alarm', body: 'Parents and the authorities raised alarm after reports of children being approached near school with vape pods. The response was a whole-of-government approach: stricter laws on etomidate, rehabilitation for users, and heavier schools penalties from 1 September 2025.' },
            { tag: '2026', title: 'Where the numbers are', body: 'A May 2026 release reported 2,589 people caught in the first quarter of the year, of whom 206 were students, and more than 270 young people received cessation counselling.' },
          ],
        },
        { t: 'p', text: 'The lesson of these cases is that rules and enforcement alone did not fully solve the problem, and that the new approach combines a legal crackdown on supply, stronger school penalties and a health response for users.' },
      ],
    },
  ],
  sources: [
    'Ministry of Education (28 August 2025). Opening remarks at the press conference on whole-of-government efforts to tackle vaping.',
    'Ministry of Health and Health Sciences Authority (May 2026). Release on vaping enforcement; reported by Mothership.',
    'Ministry of Health. Minimum legal age for tobacco; Tobacco (Control of Advertisements and Sale) Act.',
    'The Straits Times and The Star (28 August 2025). Caning for Kpod suppliers, rehabilitation for vape users in Singapore among stiffer measures from 1 September.',
  ],
  related: ['teaching/singapore/statutes', 'teaching/singapore/discipline-framework', 'medicine/basics/how-drugs-work-pharmacology'],
}

export default guide
