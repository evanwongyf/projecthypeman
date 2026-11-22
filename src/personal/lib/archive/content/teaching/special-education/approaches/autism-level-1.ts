import type { Guide } from '../../../../guide'

const caseStudy = (title: string, lines: [string, string][]) => ({ t: 'example' as const, title, lines: lines.map(([label, text]) => ({ label, text })) })

const guide: Guide = {
  intro:
    'Many families and teachers still use the term Asperger’s, or “high-functioning autism”, for autistic learners with fluent language and average or above-average intellectual ability. This guide explains why the diagnosis changed, what this profile tends to look like in school, approaches that work, and six case studies.',
  nutshell: [
    'Asperger’s disorder was merged into **autism spectrum disorder** in DSM-5 (2013) and ICD-11 (2022). Learners with this profile are usually described as autistic with **level 1 support needs**, or simply autistic. Many people diagnosed earlier still identify as Aspies, use the words the learner prefers.',
    '“High-functioning” is misleading: strong language and grades often hide serious difficulties with anxiety, executive function, sensory overload and social exhaustion. Support needs fluctuate.',
    'Typical profile: deep interests, logical and literal thinking, strong vocabulary, difficulty with implicit social rules, group work, open-ended tasks, change and organisation.',
    'What works: explicit social understanding, structure for open tasks, executive-function scaffolds, anxiety support, and building on expertise.',
  ],
  sections: [
    {
      id: 'terms',
      title: 'Why the name changed',
      blocks: [
        { t: 'p', text: 'Hans Asperger described children with this profile in Vienna in 1944; Lorna Wing popularised the term in 1981, and Asperger’s disorder entered DSM-IV in 1994. Research found that clinicians could not reliably separate it from autism, so DSM-5 combined them into one spectrum with three levels of support need. Historical research (Sheffer, 2018; Czech, 2018) also showed that Asperger cooperated with the Nazi child “euthanasia” programme, which led many to stop using his name. Respect individual preference: some autistic adults keep “Aspie” as an identity.' },
        { t: 'table', head: ['Level', 'DSM-5 description', 'In practice'], rows: [
          ['Level 1', '“Requiring support”', 'Fluent speech, often academically able; difficulties with social reciprocity, flexibility, organisation; needs may be invisible'],
          ['Level 2', '“Requiring substantial support”', 'Marked difficulties even with support; more limited communication'],
          ['Level 3', '“Requiring very substantial support”', 'Severe difficulties; often minimally speaking'],
        ] },
      ],
    },
    {
      id: 'profile',
      title: 'What it often looks like in school',
      blocks: [
        { t: 'cards', cols: 2, items: [
          { tag: 'Strengths', title: 'Expertise and logic', body: 'Deep knowledge in areas of interest, strong memory for facts, attention to detail, honesty, systematic thinking, a strong sense of justice.' },
          { tag: 'Social', title: 'Implicit rules', body: 'Unwritten rules (when to stop talking, how to join a group, what teachers “really” mean) are hard to read. May seem blunt or pedantic; may be lonely despite wanting friends.' },
          { tag: 'Language', title: 'Literal and precise', body: 'Fluent, sometimes formal vocabulary, but difficulty with idioms, sarcasm, vague instructions and inference in texts.' },
          { tag: 'Executive function', title: 'Organisation and starting', body: 'Planning long tasks, managing homework, switching between tasks and starting open-ended work can be very hard, even for very able learners.' },
          { tag: 'Flexibility', title: 'Change and uncertainty', body: 'Unexpected changes, unclear marking criteria and “there’s no right answer” tasks provoke anxiety.' },
          { tag: 'Wellbeing', title: 'Anxiety and masking', body: 'High rates of anxiety and depression, especially in adolescence; masking to fit in is exhausting and contributes to burnout.' },
        ] },
      ],
    },
    {
      id: 'approaches',
      title: 'Approaches that work',
      blocks: [
        { t: 'steps', items: [
          { title: 'Explicit, literal instructions', body: 'Say exactly what is wanted: “Write three paragraphs. Each one gives one reason with one quotation.” Show a model of finished work. Avoid “Do your best” or “Write a bit more”.' },
          { title: 'Structure for open tasks', body: 'Turn “write a story” into choices and steps: a planning frame, a word count, a checklist. Give the marking criteria in plain language.' },
          { title: 'Teach social understanding explicitly', body: 'Explain the reasons behind social rules (“People stop listening after about a minute of one topic, so check by asking a question”). Use comic strip conversations to analyse misunderstandings. Social thinking groups, with the learner’s agreement.' },
          { title: 'Make group work work', body: 'Assign roles, give a written plan of who does what, let the learner choose partners where possible, allow solo alternatives for some tasks.' },
          { title: 'Executive-function scaffolds', body: 'Homework planner checked by a mentor, deadlines broken into milestones, a checklist for packing a bag, colour-coded folders.' },
          { title: 'Plan for change', body: 'Warn about changes; explain why; give a written plan B.' },
          { title: 'Use expertise', body: 'Let the learner teach a topic, run a club or mentor younger pupils. Competence builds status and confidence.' },
          { title: 'Protect wellbeing', body: 'A quiet base at break, a key adult, access to adapted CBT for anxiety, attention to sleep and burnout warning signs, and preparation for big transitions (to secondary, to university, to work).' },
        ] },
      ],
    },
    {
      id: 'cases',
      title: 'Case studies',
      blocks: [
        caseStudy('Noah, 11, “correcting the teacher”', [
          ['Situation', 'Noah regularly interrupts to correct factual errors, sometimes rudely. Teachers felt undermined.'],
          ['Understanding', 'For Noah, accuracy matters intensely and he did not read the social cost. He was not trying to challenge authority.'],
          ['What helped', 'A private agreement: he writes corrections on a sticky note for the end of the lesson, and the teacher thanks him. Explicit teaching about timing and tone. His teacher made “fact-checker” a real class role once a week.'],
          ['Outcome', 'Interruptions stopped within two weeks; the relationship improved.'],
        ]),
        caseStudy('Hannah, 16, top grades, no friends, rising anxiety', [
          ['Situation', 'Hannah achieves highly but eats alone and has started self-harming. Diagnosed autistic at 15.'],
          ['What helped', 'Counselling with an autism-informed therapist (adapted CBT); a lunchtime club around her interest in anime; reduced group presentations with an alternative recorded format; a mentor to plan university applications; teachers told about masking.'],
          ['Outcome', 'Self-harm stopped with support; she found two close friends in the club and later chose a university with an autism support service.'],
        ]),
        caseStudy('Marcus, 13, homework never handed in', [
          ['Situation', 'Bright, articulate, but almost no homework is submitted; sanctions have no effect.'],
          ['Understanding', 'Executive-function difficulty: he did not record tasks, could not judge time, and froze on open-ended projects.'],
          ['What helped', 'All homework posted online in one place; a five-minute end-of-day check with a mentor; projects split into dated milestones; a homework club with an adult.'],
          ['Outcome', 'Submission rose from about 20% to 85%.'],
        ]),
        caseStudy('Priya, 9, creative writing shutdown', [
          ['Situation', 'Priya writes superb non-fiction but freezes and cries when asked to write a story.'],
          ['What helped', 'Story writing framed as a structure: a planning grid, a choice of three openings, writing a story set in her area of interest (marine biology), and an exact length.'],
          ['Outcome', 'She produced her first complete story in weeks and now enjoys it.'],
        ]),
        caseStudy('Jonah, 17, exams and change', [
          ['Situation', 'Jonah panicked when his exam venue was changed and walked out of a paper.'],
          ['What helped', 'Exam access arrangements (smaller room, rest breaks, prior visit to the room), a written exam-day plan, and practice papers in the actual room.'],
          ['Outcome', 'Completed all remaining exams; strong results.'],
        ]),
        caseStudy('Liang, 14, “arguing” in group work', [
          ['Situation', 'Group members complained that Liang “takes over” and dismisses ideas.'],
          ['What helped', 'Explicit group roles with a rota, a rule card (“each person gives an idea before we decide”), teaching how to disagree politely with sentence stems, and feedback from the teacher on what went well.'],
          ['Outcome', 'Group work became workable; Liang became the group’s researcher, a role that matched his strengths.'],
        ]),
      ],
    },
  ],
  sources: [
    'American Psychiatric Association (2013). DSM-5. Autism spectrum disorder diagnostic criteria and severity levels.',
    'Wing, L. (1981). Asperger’s syndrome: a clinical account. Psychological Medicine 11(1).',
    'Sheffer, E. (2018). Asperger’s Children: The Origins of Autism in Nazi Vienna. W. W. Norton.',
    'Ashburner, J., Ziviani, J. & Rodger, S. (2010). Surviving in the mainstream: capacity of children with autism spectrum disorders to perform academically and regulate their emotions and behavior at school. Research in Autism Spectrum Disorders 4(1).',
  ],
  related: ['teaching/special-education/approaches/autism-approaches', 'teaching/special-education/needs/twice-exceptional'],
}

export default guide
