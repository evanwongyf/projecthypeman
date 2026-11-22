import type { Guide } from '../../../../guide'

const caseStudy = (title: string, lines: [string, string][]) => ({ t: 'example' as const, title, lines: lines.map(([label, text]) => ({ label, text })) })

const guide: Guide = {
  intro:
    'Eight case studies of autistic children and teenagers in mainstream and specialist settings. They are composites built from common situations described in the research and practice literature, not real individuals, and each follows the same structure: what was happening, what the adults first assumed, what was actually going on, what they changed, and what happened.',
  nutshell: [
    'In almost every case the turning point was **finding the function of the behaviour**: anxiety, sensory overload, unclear expectations or an unmet need to communicate.',
    'The most effective changes were usually **small and environmental**, a visual, a warning, a seat, a quiet exit, rather than consequences.',
    'Progress came from adults **changing first**, then teaching skills.',
  ],
  sections: [
    {
      id: 'aiden',
      title: '1. Aiden, 6, nonspeaking, and hitting',
      blocks: [
        caseStudy('Aiden (Year 1 / Primary 1, mainstream with a learning assistant)', [
          ['Situation', 'Aiden has few spoken words. Several times a day he hits the learning assistant, usually around snack time and when activities end.'],
          ['First assumption', '“He is aggressive and needs consequences.” Time out was tried; hitting increased.'],
          ['What was really happening', 'An ABC record (antecedent, behaviour, consequence) showed hitting happened when he wanted something he could not ask for, more snack, more time with the bubble tube, or when an activity ended unexpectedly. Hitting was communication.'],
          ['What changed', 'Functional communication training: a symbol board with “more”, “stop”, “help” and “break”, modelled by adults constantly (aided language input). A visual timer and a “finished” box warned of endings. A speech-language therapist introduced an AAC app.'],
          ['Outcome', 'Within six weeks hitting fell from about eight times a day to one or two; within a term Aiden was combining two symbols (“more bubbles”). He began using spoken words alongside the device.'],
          ['Lesson', 'When a child cannot communicate, behaviour becomes the message. Give a better way to say it before trying to stop the behaviour.'],
        ]),
      ],
    },
    {
      id: 'maya',
      title: '2. Maya, 9, transitions and meltdowns',
      blocks: [
        caseStudy('Maya (Primary 4, mainstream)', [
          ['Situation', 'Maya has screaming meltdowns, sometimes under a table, two or three times a week. They cluster on days with assemblies, supply teachers or a changed timetable.'],
          ['First assumption', '“She is being manipulative to get out of work.”'],
          ['What was really happening', 'Unpredictability. Maya coped with the normal routine; changes she was not warned about caused panic. Meltdowns were involuntary, not chosen.'],
          ['What changed', 'A personal visual timetable checked at the start of each session; a “change card” placed on the timetable with a picture of what would happen instead; a five-minute warning before every transition; a Social Story about supply teachers; a calm corner she could go to with a card. After a meltdown: no discussion until fully calm, then a short, kind repair.'],
          ['Outcome', 'Meltdowns fell to about one a month. Maya started to ask “is anything changing today?” herself, a self-advocacy skill.'],
          ['Lesson', 'Prediction reduces anxiety. Telling a learner what will happen is one of the cheapest and most powerful supports there is.'],
        ]),
      ],
    },
    {
      id: 'ethan',
      title: '3. Ethan, 12, refusing everything (a demand-avoidant profile)',
      blocks: [
        caseStudy('Ethan (Secondary 1, mainstream)', [
          ['Situation', 'Ethan refuses almost any direct instruction, even to do things he enjoys. He argues, negotiates, goes silent or walks out. Sanctions escalated; he was close to exclusion.'],
          ['First assumption', '“Oppositional and defiant; he needs firmer boundaries.”'],
          ['What was really happening', 'Ethan’s profile matched what is often called pathological (or persistent) demand avoidance: an anxiety-driven need for control, in which any demand, even internal ones, triggers threat. Firmer demands raised the anxiety.'],
          ['What changed', 'Adults reduced direct demands: “I wonder if…”, “Here’s a puzzle…”, “Could you help me with…”. Choices replaced instructions. Work was framed around his interest in aviation. A trusted key adult checked in daily. Non-negotiables (safety) were kept few and explained.'],
          ['Outcome', 'Walk-outs fell sharply. He began completing about half of his work and joined a model-making club. Exclusion was avoided.'],
          ['Lesson', 'For some autistic learners, traditional behaviour management backfires. Lower the threat, keep the relationship, and offer control through choices.'],
        ]),
        { t: 'callout', tone: 'note', title: 'About “PDA”', text: 'PDA is not a diagnosis in DSM-5 or ICD-11 and its status is debated, but the profile is widely recognised in the UK and the low-demand, collaborative approach is helpful whatever it is called.' },
      ],
    },
    {
      id: 'sofia',
      title: '4. Sofia, 14, masking and burnout',
      blocks: [
        caseStudy('Sofia (Secondary 3, high-achieving)', [
          ['Situation', 'Sofia was a model student until Secondary 3, when she began missing days, stopped handing in work and had panic attacks at home. Teachers were surprised: “She seems fine in class.”'],
          ['First assumption', '“Teenage issues; she needs to try harder.”'],
          ['What was really happening', 'Sofia was diagnosed autistic at 14. For years she had been camouflaging, copying peers’ behaviour, scripting conversations, suppressing stimming, which is exhausting. Rising social demands of adolescence pushed her into autistic burnout.'],
          ['What changed', 'Reduced timetable for six weeks; permission to eat lunch in the library; a quiet route between lessons; advance notice of group work with a choice of partner; a mentor; exam access arrangements (separate room). At home, recovery time after school without questions.'],
          ['Outcome', 'Attendance recovered over a term. Sofia said the most helpful thing was “not having to act normal all day”.'],
          ['Lesson', 'Autistic girls and high-achievers are often missed. A learner who “seems fine” may be paying a heavy hidden cost. Watch for exhaustion, school avoidance and sudden decline.'],
        ]),
      ],
    },
    {
      id: 'leo',
      title: '5. Leo, 7, dinosaurs everywhere',
      blocks: [
        caseStudy('Leo (Primary 2)', [
          ['Situation', 'Leo talks only about dinosaurs and refuses writing tasks on other topics. Peers find him “boring”.'],
          ['What changed', 'His teacher used dinosaurs as the vehicle: counting fossils, measuring the length of a T. rex on the playground, persuasive writing on the best dinosaur, a non-fiction class book he edited. Leo was made the class “expert” for a science topic on fossils and presented to the class.'],
          ['Outcome', 'Writing output tripled. Two classmates joined him in a dinosaur club; he learned turn-taking rules for the club with a visual.'],
          ['Lesson', 'Special interests are a route to learning and friendship, not an obstacle.'],
        ]),
      ],
    },
    {
      id: 'kai',
      title: '6. Kai, 13, refusing PE and the canteen',
      blocks: [
        caseStudy('Kai (Secondary 2)', [
          ['Situation', 'Kai refuses PE and will not eat in the canteen; he was recorded as defiant and given detentions.'],
          ['What was really happening', 'A sensory profile showed hypersensitivity to noise and smell. The echoing sports hall, whistles, crowded changing rooms and canteen smells were overwhelming.'],
          ['What changed', 'Ear defenders; changing before the rush; outdoor PE options and a role as scorekeeper during noisy hall games; lunch in a quiet room with a friend.'],
          ['Outcome', 'Kai joined PE most weeks, and later chose badminton as an after-school activity.'],
          ['Lesson', 'Ask “what is this like for them?” before deciding it is defiance.'],
        ]),
      ],
    },
    {
      id: 'amira',
      title: '7. Amira, 10, school refusal',
      blocks: [
        caseStudy('Amira (Primary 5)', [
          ['Situation', 'Amira cries and refuses to leave the car most mornings; attendance has fallen to 60%.'],
          ['What changed', 'A meet-and-greet with the same adult at a side gate; a predictable first ten minutes (a job feeding the class fish); a visual of the day sent home the evening before; a gradual return plan with a fixed weekly increase; school and parents agreeing one script.'],
          ['Outcome', 'Attendance above 90% after ten weeks. Mornings remain fragile after holidays, so the plan is restarted each term.'],
          ['Lesson', 'Emotionally based school avoidance is about anxiety, not truancy; a graded, predictable return works better than pressure.'],
        ]),
      ],
    },
    {
      id: 'daniel',
      title: '8. Daniel, 15, bullied and isolated',
      blocks: [
        caseStudy('Daniel (Secondary 4)', [
          ['Situation', 'Daniel, autistic and very literal, is teased; peers set him up to say inappropriate things. He reacted by shouting and was the one sanctioned.'],
          ['What changed', 'Staff investigated the pattern and treated it as bullying. Daniel had sessions on spotting manipulation and sarcasm with comic strip conversations; a peer-mentoring scheme and a tabletop gaming club gave him a social base; the class had an assembly on neurodiversity with his consent.'],
          ['Outcome', 'Incidents stopped; Daniel made two friends in the club.'],
          ['Lesson', 'Autistic pupils are bullied far more often than peers. Look at the whole interaction, not just the visible reaction.'],
        ]),
      ],
    },
    {
      id: 'patterns',
      title: 'Patterns across the cases',
      blocks: [
        { t: 'table', head: ['What adults first saw', 'What was underneath', 'What helped'], rows: [
          ['Aggression', 'No way to communicate', 'AAC, functional communication'],
          ['Tantrums', 'Unpredictability', 'Visual schedules, warnings'],
          ['Defiance', 'Anxiety and need for control', 'Low-demand language, choice'],
          ['Sudden decline', 'Masking and burnout', 'Reduced demands, recovery time'],
          ['Obsession', 'A passionate interest', 'Interest-led teaching'],
          ['Refusal', 'Sensory overload', 'Environmental adjustments'],
          ['Truancy', 'Anxiety', 'Graded return, predictable routines'],
          ['Outbursts', 'Bullying', 'Investigate, protect, teach peers'],
        ] },
      ],
    },
  ],
  sources: [
    'National Autistic Society (UK). Guidance on meltdowns, masking, demand avoidance and school.',
    'Hull, L. et al. (2017). “Putting on my best normal”: social camouflaging in adults with autism spectrum conditions. JADD 47.',
    'Raymaker, D. M. et al. (2020). “Having all of your internal resources exhausted beyond measure”: defining autistic burnout. Autism in Adulthood 2(2).',
    'Cappadocia, M. C., Weiss, J. A. & Pepler, D. (2012). Bullying experiences among children and youth with autism spectrum disorders. JADD 42.',
  ],
  related: ['teaching/special-education/approaches/autism-approaches', 'teaching/special-education/needs/autism'],
}

export default guide
