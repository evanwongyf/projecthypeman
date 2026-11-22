import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Not all bullying is loud. Ostracism, being ignored, left out, frozen out of the group chat, is among the most common and the most corrosive forms, and the hardest to catch because the aggressor does nothing visible. MOE counts social behaviour as one of the four forms of bullying, alongside verbal, physical and cyber. This page explains why exclusion hurts, how to spot it, and the structured, lawful tools that break it up, including seating, group design, cooperative learning, shared-concern meetings and consequences.',
  nutshell: [
    '**Social exclusion is bullying** when it is persistent and intended to hurt. MOE lists **social** bullying among its four forms.',
    'Being ostracised **hurts in the same brain regions as physical pain** and threatens four basic needs: belonging, self-esteem, control and a sense of meaningful existence (Williams’ need-threat model).',
    'It is **hard to see**: look for a student who is alone at break, last to be picked, absent from group photos and chats, or suddenly reluctant to come.',
    'Fix the **structure** as well as the people: seating, groups, supervised break, cooperative tasks that make students depend on each other.',
    'Some responses fail: forcing friendship, making the group “include” someone in front of everyone, or asking the targeted student to confront the group.',
  ],
  sections: [
    {
      id: 'why',
      title: 'Why exclusion hurts so much',
      blocks: [
        { t: 'p', text: 'Humans are social animals, and for most of history being cast out of the group was dangerous. Experiments in which participants are ostracised, even by strangers and even in a simple online ball-tossing game, show immediate distress and activity in regions of the brain that also process physical pain. Kipling Williams’ research describes four needs that ostracism threatens, and long-term ostracism can lead to depression, withdrawal, anger and, for some, aggression.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Need 1', title: 'Belonging', body: 'The sense of being part of something. Exclusion removes it at once.' },
            { tag: 'Need 2', title: 'Self-esteem', body: 'Being left out says “there is something wrong with you”.' },
            { tag: 'Need 3', title: 'Control', body: 'The excluded person cannot make it stop and does not know the rules.' },
            { tag: 'Need 4', title: 'Meaningful existence', body: 'Being ignored feels like being invisible, as though one does not matter.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'It is relational aggression', text: 'Researchers call it relational aggression: harming someone through the relationship, with exclusion, rumours, silent treatment and alliance-switching. It is common in friendship groups, often among girls but by no means only girls, and it is easily dismissed as “just a fall-out”.' },
      ],
    },
    {
      id: 'spot',
      title: 'How to spot it',
      blocks: [
        {
          t: 'checklist',
          items: [
            'A student who is regularly alone at break, in the canteen, or in the queue.',
            'Last to be picked for groups, or left to the teacher to place.',
            'A group that goes silent when a particular student arrives or speaks.',
            'Changes in a student: reluctance to come to school, headaches, a drop in grades or mood.',
            'Being left out of group chats, events, photos and shared jokes.',
            'A friendship group that has suddenly turned on one member.',
            'Eye-rolling, whispering or sniggering when a student speaks.',
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Ask, in private', text: 'A gentle, private question often brings it out: “Who do you sit with at break? Who do you talk to online?” Ask both the student and a trusted bystander.' },
      ],
    },
    {
      id: 'tools',
      title: 'Strong, lawful tools',
      blocks: [
        {
          t: 'table',
          head: ['Tool', 'How it works', 'When to use it'],
          rows: [
            ['Seating and grouping by the teacher', 'The teacher decides who sits and works with whom, so nobody chooses and nobody is left out', 'Any class; always for group work'],
            ['Cooperative learning (jigsaw)', 'Each student holds a piece the group needs; everyone must listen to everyone', 'Mixed groups where one student is isolated'],
            ['Circle of Friends', 'A small, willing group of peers meets with an adult to support a student who is isolated', 'A student with few friends, especially one with special needs'],
            ['Method of Shared Concern (Pikas)', 'The adult meets each person in the group alone, states the concern without blame, and asks for a step to help; then a joint meeting', 'A group acting against one student, mild to moderate'],
            ['KiVa-style bystander work', 'Teach the class that standing by is part of the problem; support defenders; use a short, firm talk with the leaders', 'Whole class or year'],
            ['Supervised break and clubs', 'An adult presence and structured activities so no one is left on the edge', 'Hotspots; students who are alone at break'],
            ['A consequence, if it is bullying', 'The discipline framework applies when exclusion is persistent and intended to hurt', 'Repeated, deliberate exclusion despite warning'],
          ],
          caption: 'The Method of Shared Concern and the KiVa programme both have evidence of effect in schools; forcing friendship does not.',
        },
        {
          t: 'steps',
          items: [
            { title: '1. Check with the student alone', body: 'Ask what is happening, and what they want. Do not promise to fix everything, but promise to act and to keep them informed.' },
            { title: '2. Change the structure first', body: 'Seat, group, supervise. This helps the student at once and does not need anyone to confess.' },
            { title: '3. Talk to the group members one by one', body: '“I am worried that X is having a hard time. I do not think you want that. What could you do to help?” Ask for a concrete step.' },
            { title: '4. Bring in a bridge student', body: 'Quietly ask a kind, respected student to include the targeted student in an activity.' },
            { title: '5. Apply a consequence if it persists', body: 'If one or more students persist after warning, apply the discipline framework and tell the parents.' },
            { title: '6. Rebuild the target’s social base', body: 'Clubs, interests, new peer groups. Counselling to rebuild confidence and skills for friendship.' },
          ],
        },
      ],
    },
    {
      id: 'dont',
      title: 'What not to do',
      blocks: [
        {
          t: 'dodont',
          do: ['Act on structure first: it works even when nobody admits anything.', 'Talk to the aggressors one by one, not as a gang.', 'Give the excluded student real roles and skills, not only sympathy.', 'Follow up for weeks, not days.'],
          dont: ['Do not force friendship or make students apologise insincerely.', 'Do not ask the target to confront the group.', 'Do not announce to the class that “nobody is to leave anyone out”: it can single the student out.', 'Do not say “just ignore them” or “find new friends”.', 'Do not treat it as a mere falling-out when it is persistent.'],
        },
        { t: 'callout', tone: 'warn', title: 'When it becomes online', text: 'Exclusion from group chats, mocking posts, and pile-ons can fall under cyberbullying and, in serious cases, harassment law. Keep screenshots, report to the school and, where needed, to the police or the Online Safety Commission.' },
      ],
    },
    {
      id: 'law',
      title: 'Is ostracism ever a legal matter?',
      blocks: [
        { t: 'p', text: 'Pure exclusion, by itself, is rarely a crime. It is a school-discipline matter. But it often travels with other behaviour that can be: threats, harassment, doxxing, or targeted online abuse. If the exclusion involves threats, persistent abusive messages or the sharing of humiliating material, the Protection from Harassment Act and the Penal Code may apply, as described in the bullying pages.' },
        { t: 'links', items: [{ path: 'teaching/singapore/bullying-law-and-protocol', note: 'MOE’s definition and the school protocol' }, { path: 'teaching/singapore/bullying-playbook', note: 'Ten firm, lawful moves' }, { path: 'teaching/techniques/active-learning/jigsaw', note: 'The jigsaw method in detail' }] },
      ],
    },
  ],
  sources: [
    'Williams, K. D. (2007). Ostracism. Annual Review of Psychology.',
    'Eisenberger, N. I., Lieberman, M. D., and Williams, K. D. (2003). Does rejection hurt? An fMRI study of social exclusion. Science.',
    'Pikas, A. (2002). New developments of the Shared Concern Method. School Psychology International.',
    'Aronson, E. (1978). The Jigsaw Classroom. Sage.',
  ],
  related: ['teaching/singapore/bullying-playbook', 'teaching/singapore/conflict-resolution', 'teaching/guides/classroom/relationships'],
}

export default guide
