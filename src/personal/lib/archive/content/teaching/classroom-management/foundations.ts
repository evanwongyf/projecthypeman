import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Classroom management has been studied for more than fifty years and has produced a handful of named models, each with a charismatic founder and a slightly different emphasis. Strip away the branding and they agree on more than they disagree about. This page sets the major models side by side, shows where each is strong and where it is weak, and distils the evidence-based core that a new teacher can rely on.',
  nutshell: [
    'Classroom management is consistently among the **strongest school-level influences on learning**: a class cannot learn what it cannot attend to.',
    '**Kounin** (1970) found that effective teachers did not respond better to misbehaviour; they **prevented** it, through withitness, smooth transitions and momentum.',
    '**Canter, Rogers, Jones, Glasser and Dreikurs** differ on rewards, choices and democracy, but agree on **clear expectations, consistency and calm**.',
    'The **EEF’s six recommendations** (2019) give a practical summary: know your pupils, teach behaviours, use classroom management, use simple routines, target individuals, be consistent.',
    'The best predictor of a model working is **how well it is implemented**, not which one it is.',
  ],
  sections: [
    {
      id: 'kounin',
      title: 'Kounin: prevention beats reaction',
      blocks: [
        { t: 'p', text: 'Jacob Kounin studied videotapes of classrooms and expected to find that good managers dealt with misbehaviour better. He found instead that they had **fewer incidents to deal with**, because of how they ran lessons. His findings (*Discipline and Group Management in Classrooms*, 1970) remain the cornerstone of the field.' },
        {
          t: 'terms',
          items: [
            { term: 'Withitness', def: 'Showing the class that you know what is happening everywhere, and dealing with the right student at the right time, targeting the instigator and the more serious behaviour first.' },
            { term: 'Overlapping', def: 'Handling two things at once: for example answering a question at one table while giving a look to a student who has started talking at another.' },
            { term: 'Momentum', def: 'Keeping the lesson moving without slowdowns, long explanations, or stopping to deal with small things.' },
            { term: 'Smoothness', def: 'Avoiding jerky transitions, dangling activities and sudden changes of direction.' },
            { term: 'Group alerting', def: 'Keeping the whole class involved and uncertain who will be asked next, for example by questioning before naming the student.' },
            { term: 'Ripple effect', def: 'A correction to one student influences the behaviour of others nearby, so clear, calm corrections spread order.' },
          ],
        },
      ],
    },
    {
      id: 'models',
      title: 'The major models side by side',
      blocks: [
        {
          t: 'table',
          head: ['Model', 'Core idea', 'Strengths', 'Weaknesses'],
          rows: [
            ['Kounin (1970)', 'Prevention through lesson management: withitness, momentum, smoothness', 'Strong evidence base; applies to every classroom', 'Less guidance for managing serious incidents'],
            ['Canter: Assertive Discipline (1976)', 'Teachers have the right to teach: clear rules, consequences and positive recognition', 'Clarity and consistency; easy to implement', 'Can become punitive; relies on external control; “names on the board” can humiliate'],
            ['Rogers: Positive Behaviour Leadership', 'Calm, assertive language, directed choices, tactical ignoring, partial agreement, “follow-up”', 'Highly practical scripts; respects dignity', 'Needs practice; effects depend on skill'],
            ['Jones: Positive Classroom Discipline', 'Body language, proximity, limit-setting and efficient help give', 'Practical, non-verbal; saves time', 'Less on relationships and root causes'],
            ['Glasser: Choice Theory', 'Behaviour is a choice aimed at meeting five needs (survival, love and belonging, power, freedom, fun); build a quality school', 'Focus on relationships and responsibility', 'Evidence base thin; hard to apply with a crisis'],
            ['Dreikurs: Democratic discipline', 'Misbehaviour has four mistaken goals (attention, power, revenge, display of inadequacy); logical consequences; class meetings', 'Helps diagnose motive; encourages cooperation', 'Over-interpretation of motive risks mind-reading'],
            ['Skinner and ABA: Behaviourism', 'Behaviour is shaped by its consequences; reinforce what you want', 'Powerful and well evidenced for specific behaviours', 'Can reduce intrinsic motivation if overused; does not address causes'],
            ['Wong: The First Days of School', 'Procedures and routines taught early, the first two weeks decide the year', 'Concrete, teacher-friendly', 'Less on escalation and individual needs'],
          ],
        },
      ],
    },
    {
      id: 'core',
      title: 'What the evidence says all of them share',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'EEF 1', title: 'Know and understand your pupils', body: 'Behaviour is influenced by home, health, language and special needs. Building a picture of each pupil helps you predict and respond.' },
            { tag: 'EEF 2', title: 'Teach learner behaviours', body: 'Expectations such as listening, starting work and asking for help are taught like any other curriculum content.' },
            { tag: 'EEF 3', title: 'Use classroom management strategies', body: 'Routines, positioning, scanning, praise and clear instructions support good behaviour in the moment.' },
            { tag: 'EEF 4', title: 'Use simple approaches routinely', body: 'Small, predictable routines are more effective than complicated systems and are easier for everyone to follow.' },
            { tag: 'EEF 5', title: 'Use targeted approaches for individuals', body: 'A small number of pupils need individual plans, mentoring or specialist input.' },
            { tag: 'EEF 6', title: 'Consistency is key', body: 'Behaviour improves when all staff apply the same expectations in the same way, across classrooms and over time.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'The shared core', text: 'Clear expectations taught explicitly; routines practised until automatic; a calm adult who notices everything; a predictable, proportionate response; positive attention to the behaviour you want; and a relationship that survives correction. The models mainly differ in how much weight they give each.' },
      ],
    },
    {
      id: 'choose',
      title: 'Choosing and combining',
      blocks: [
        { t: 'p', text: 'You do not need to pick one model. A sensible new teacher borrows Kounin for lesson design, Wong for routines, Rogers for language, the EEF for school-wide consistency, and behaviourism for targeted individual plans. What matters is that your practice is coherent, that students can predict your responses, and that colleagues work in the same way.' },
        {
          t: 'dodont',
          do: ['Choose a small number of strategies and use them every lesson.', 'Align with the school’s behaviour policy rather than inventing your own.', 'Watch an experienced colleague for a full lesson and note what they do before a problem occurs.', 'Review your own practice with a trusted observer.'],
          dont: ['Do not adopt a system you cannot apply consistently.', 'Do not rely on charisma: management is a set of learnable routines.', 'Do not treat a model as a recipe; adapt it to your class and context.', 'Do not use a model to label students (“an attention-seeker”).'],
        },
      ],
    },
  ],
  sources: [
    'Kounin, J. S. (1970). Discipline and Group Management in Classrooms. Holt, Rinehart and Winston.',
    'Wang, M. C., Haertel, G. D., and Walberg, H. J. (1993). Toward a knowledge base for school learning. Review of Educational Research.',
    'Education Endowment Foundation (2019). Improving behaviour in schools: guidance report.',
    'Wong, H. K., and Wong, R. T. (2018). The First Days of School (5th ed.).',
    'Rogers, B. (2015). Classroom Behaviour (4th ed.). Sage.',
  ],
  related: ['teaching/classroom-management/routines-and-procedures', 'teaching/classroom-management/proactive-strategies', 'teaching/guides/classroom/management'],
}

export default guide
