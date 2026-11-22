import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Anti-bullying advice often swings between two failures: a soft response that asks the target to “ignore it”, and a hard response that is loud but ineffective. What works is firm, certain and fair, and it uses every lever the law and the school framework give you. This page sets out ten strong but lawful moves for teachers, school leaders and parents, and the tempting shortcuts that backfire. It is a practical guide, not legal advice.',
  nutshell: [
    '**Certainty beats severity.** A small consequence that always follows beats a dramatic one that rarely does. Be swift, be sure, be proportionate.',
    'Use the **whole ladder**: classroom response, school sanction, parent accountability, MOE, and, where it is a crime, the **police and the courts**.',
    '**Change the situation, not only the child**: seating, supervision of hotspots, group design and who is where, when.',
    '**Protect the target first**, and never make them confront the person who hurt them as a way of “sorting it out” where there is a power imbalance.',
    'Strong does not mean unlawful: no violence, no public shaming, no vigilantism, no posting names online. Those create new victims and new liability.',
  ],
  sections: [
    {
      id: 'ten',
      title: 'Ten strong, lawful moves',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: '1. Keep a dated log', body: 'Write down what happened, when, where, who was there and what was said or done. Keep screenshots. A paper trail turns a he-said-she-said into a case, and protects everyone, including you.' },
            { title: '2. Separate and secure the target', body: 'Immediately change what you can: seat, line-up position, break supervision, route home, group chats. Tell the student what you are doing. Safety first, then fact-finding.' },
            { title: '3. Verify before you sanction', body: 'Speak to each student separately, check any recording, ask neutral witnesses. A firm sanction applied to the wrong student is the quickest way to lose the school’s authority.' },
            { title: '4. Make consequences certain and swift', body: 'Within the discipline framework: reflection, detention, parent meeting, a lowered conduct grade, suspension, or a referral to the police. Deterrence research consistently finds that certainty works better than severity.' },
            { title: '5. Escalate on recalcitrance', body: 'MOE assesses bullying on impact, intent and recalcitrance. If a student continues after warnings and support, move up a rung and say clearly that you are doing so and why.' },
            { title: '6. Hold parents to account', body: 'Meet the parents of the student who bullied, in person if possible. Give a written plan with specific home expectations and a review date. Parents are partners and, where they refuse to engage, the school escalates to MOE.' },
            { title: '7. Redesign the social field', body: 'Move seating, split groups, add adult presence at hotspots (toilets, stairwells, canteen, bus bays, changing rooms), shorten unsupervised time, and mix groups on purpose.' },
            { title: '8. Mobilise bystanders', body: 'Most bullying has an audience. Teach students to report, to support the target quietly, and not to film and share. Use anonymous reporting. Programmes such as KiVa train the bystanders as defenders.' },
            { title: '9. Use the law where warranted', body: 'Threats, assaults, serious online abuse and sexual conduct belong with the police. A protection order under POHA can stop harassment quickly. The Online Safety Commission can direct removal of harmful content. A school can support a family through each of these.' },
            { title: '10. Repair and follow up', body: 'Counselling for the target, a change plan for the student who bullied, and regular check-ins at a week, a month and a term. Do not close the case at the sanction.' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'One test for a good response', text: 'Ask: if the target’s parent and the bully’s parent both read my notes tomorrow, would each think I was firm, fair and factual? If yes, you are probably on firm ground.' },
      ],
    },
    {
      id: 'backfire',
      title: 'Tempting shortcuts that backfire',
      blocks: [
        {
          t: 'table',
          head: ['Shortcut', 'Why it feels right', 'Why it backfires'],
          rows: [
            ['Public shaming or naming the bully in class or online', 'It seems to deter others and to punish', 'It humiliates, can breach privacy and harassment law, and often makes the student angrier and the bullying go underground'],
            ['Making the target and the bully “talk it out” or shake hands', 'It looks restorative', 'With a real power imbalance it can re-victimise the target. Use mediation only for conflicts between roughly equal parties'],
            ['Punishing the whole class', 'It is quick and avoids the need to find the culprit', 'It punishes the innocent and turns the class against the target'],
            ['Telling the target to “toughen up” or ignore it', 'It sounds resilient', 'It tells the target the adults will not act, and bullying usually continues'],
            ['Retaliating physically, or encouraging the target to hit back', 'It feels like justice', 'It is an offence, and the target can end up as the one who is sanctioned'],
            ['Posting the incident or the bully’s name on social media', 'It feels powerful and gets attention', 'It can itself be harassment or defamation, may spread the victim’s humiliation, and can prejudice the school’s own process'],
            ['Confronting the bully’s parent aggressively', 'You want to protect your child', 'It invites a counter-complaint and a harassment claim. Go through the school, and then MOE and the police if needed'],
            ['A single severe sanction and then nothing', 'It feels like closure', 'The target is still unsafe and the bully has learned nothing. Pair sanctions with a plan and follow-up'],
          ],
        },
      ],
    },
    {
      id: 'evidence',
      title: 'What the evidence says works',
      blocks: [
        { t: 'p', text: 'Meta-analyses of school anti-bullying programmes (Ttofi and Farrington, 2011) found that, on average, programmes reduced bullying by about a fifth, with the most effective ones using a whole-school approach, firm sanctions, parent involvement, good playground supervision and training for staff. The Finnish KiVa programme, tested in a large randomised trial across Finnish schools, found reduced victimisation, with its emphasis on the bystander’s role.' },
        {
          t: 'table',
          head: ['Programme feature', 'Association with reduced bullying'],
          rows: [
            ['Parent training or meetings', 'Associated with reductions'],
            ['Improved playground supervision', 'Associated with reductions'],
            ['Firm, consistent disciplinary methods', 'Associated with reductions'],
            ['Classroom rules and management', 'Associated with reductions'],
            ['Whole-school anti-bullying policy', 'Associated with reductions'],
            ['Peer mediation or peer-support schemes', 'No clear benefit, and in some analyses an increase in victimisation'],
          ],
          caption: 'A qualitative summary of the pattern reported by Ttofi and Farrington (2011); the original paper gives the effect sizes.',
        },
        { t: 'callout', tone: 'note', title: 'Not a recipe for harshness', text: 'The “disciplinary methods” finding does not mean suspensions everywhere. It means consistent, proportionate, certain consequences. Programmes that rely only on punishment, with no work on climate, supervision and bystanders, do much worse.' },
      ],
    },
    {
      id: 'roles',
      title: 'What each person can do',
      blocks: [
        {
          t: 'cards',
          cols: 3,
          items: [
            { tag: 'Teacher', title: 'Notice, record, refer', body: 'Watch hotspots, respond to every report, log it, tell the year head, never promise secrecy you cannot keep, and follow up with the target discreetly.' },
            { tag: 'School leader', title: 'Decide, protect, back staff', body: 'Apply the framework consistently, give staff a clear process, support them against complaint abuse, and report crimes to the police.' },
            { tag: 'Parent of the target', title: 'Document, report, push', body: 'Keep evidence, report in writing, ask for a safety plan and a review date, escalate to MOE if not addressed, and go to the police if there are threats or violence.' },
            { tag: 'Parent of the bully', title: 'Own it', body: 'Listen without defending, set clear expectations at home, attend the meeting, support the school’s plan and check the outcome. Your child’s behaviour is your responsibility too.' },
            { tag: 'Bystander student', title: 'Do not join in, do tell', body: 'Do not laugh or film. Support the target quietly, and tell a trusted adult. Reporting is not “snitching”.' },
            { tag: 'Target', title: 'You did nothing wrong', body: 'Keep evidence, tell an adult you trust, avoid hitting back or replying online, and ask for what you need to feel safe.' },
          ],
        },
      ],
    },
    {
      id: 'scripts',
      title: 'Scripts',
      blocks: [
        {
          t: 'example',
          title: 'Speaking to a student who has been bullying',
          lines: [
            { label: 'Open', text: '“I want to talk about what happened on Tuesday. I have spoken to others and I have seen the messages.”' },
            { label: 'Name the behaviour', text: '“Calling her that name in front of the class, and leaving her out of the group chat, is bullying.”' },
            { label: 'Say the rule', text: '“That breaks our school rules and it is a serious matter. Here is what will happen: a meeting with your parents, a detention, and a conduct grade review.”' },
            { label: 'Separate the person', text: '“I know you can do better than this. What do you need so it does not happen again?”' },
            { label: 'Set the plan', text: '“No contact with her online, and you will sit here. We meet again on Friday and next month.”' },
          ],
        },
        {
          t: 'example',
          title: 'Speaking to a student who has been targeted',
          lines: [
            { label: 'Open', text: '“Thank you for telling me. You did the right thing and it is not your fault.”' },
            { label: 'Be honest', text: '“I cannot promise it will be a secret, because I need to keep you safe, but I will tell you who I tell.”' },
            { label: 'Say what next', text: '“I will speak to the year head. For now you can sit here and I will watch at break. Tell me straight away if anything happens.”' },
            { label: 'Follow up', text: '“I will check in tomorrow and on Friday.”' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Ttofi, M. M., and Farrington, D. P. (2011). Effectiveness of school-based programs to reduce bullying: a systematic and meta-analytic review. Journal of Experimental Criminology.',
    'Kärnä, A., et al. (2011). A large-scale evaluation of the KiVa antibullying program. Child Development.',
    'Ministry of Education Singapore. Standardised disciplinary measures and bullying management (2025, 2026).',
  ],
  related: ['teaching/singapore/bullying-law-and-protocol', 'teaching/singapore/ostracism-and-exclusion', 'teaching/singapore/conflict-resolution'],
}

export default guide
