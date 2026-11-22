import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Most students are respectful, and MOE says that physical assault on staff is rare. But verbal abuse, intimidation and the occasional physical aggression do happen, and a teacher who has no clear plan can be left exposed and alone. This page sets out what MOE says, the line between rudeness and an offence, how to de-escalate and document, what school sanctions and legal routes exist, and how to look after yourself afterwards.',
  nutshell: [
    'MOE has said that **verbal abuse and physical aggression towards teachers and staff are serious disciplinary offences** under school rules, and that physical assaults on staff remain rare.',
    'Incidents are often linked to **de-escalation failures**, **breaking up fights** or **students with special educational needs** in distress, so training and context matter.',
    'A teacher’s priorities in order: **safety, de-escalate, document, report, get support**.',
    'Offences can include **criminal intimidation, hurt to a public servant, and harassment under POHA**. The school and the police work in parallel.',
    'A teacher should **never meet violence with violence** or humiliation. The strongest position is calm, documented and backed by the school.',
  ],
  sections: [
    {
      id: 'spectrum',
      title: 'From rudeness to an offence',
      blocks: [
        {
          t: 'levels',
          caption: 'A rough ladder, lowest first. The response should match the rung.',
          items: [
            { name: 'Low-level disruption and rudeness', body: 'Backchat, eye-rolling, ignoring instructions. A classroom-management matter.' },
            { name: 'Persistent defiance and disrespect', body: 'Refusing instructions, mocking the teacher, repeated abuse of the classroom. School sanction and parent contact.' },
            { name: 'Verbal abuse and insults', body: 'Swearing at a teacher, personal insults, discriminatory language. A serious disciplinary offence.' },
            { name: 'Threats and intimidation', body: 'Threatening to hurt a teacher or family, stalking or harassing online. Potentially an offence: criminal intimidation or harassment.' },
            { name: 'Physical aggression and assault', body: 'Hitting, throwing objects, pushing. A very serious offence; may be assault or hurt to a public servant. Call school leaders, and the police if needed.' },
          ],
        },
      ],
    },
    {
      id: 'deescalate',
      title: 'De-escalating in the moment',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Keep yourself safe', body: 'Stand at an angle, keep an arm’s length or more, keep an exit behind you, and do not corner the student or block their way out. If there is danger, get help and move others away.' },
            { title: 'Lower your voice, slow down', body: 'Calm, low, steady. Short sentences. Matching shouting with shouting adds fuel.' },
            { title: 'Acknowledge the feeling, not the behaviour', body: '“I can see you are really angry.” This often drops the temperature without agreeing to the demand.' },
            { title: 'Give a clear choice with a way out', body: '“You can step outside for two minutes and then come back, or we can talk with Mr Tan. Which one?” Choices give a student a way to save face.' },
            { title: 'Remove the audience', body: 'Many students escalate for an audience. Move the conversation away from the class, or move the class away.' },
            { title: 'Call for help early', body: 'Use the phone, the buzzer or a runner. Asking for help is not weakness; it is the protocol.' },
            { title: 'Debrief later, not now', body: 'Leave the consequences conversation until the student is calm, the next day if necessary.' },
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Physical intervention', text: 'Use physical intervention only to prevent immediate danger to a student or another person, using the minimum, trained response, and report it straight away. Without that, do not touch. Staff are trained in school protocols, and the school will support a teacher who has followed them.' },
      ],
    },
    {
      id: 'document',
      title: 'Documenting and reporting',
      blocks: [
        { t: 'p', text: 'A precise record protects you and turns an event into a case. Write it as soon as you can, in plain, factual language.' },
        {
          t: 'checklist',
          items: [
            'Date, time, place, lesson and who was present.',
            'The exact words used, as near as you can remember, in quotation marks.',
            'What the student did, with no adjectives (“threw the book at the wall” not “behaved wildly”).',
            'What you said and did in response.',
            'Any injuries or damage, with photographs through the school’s procedure.',
            'Names of witnesses and anything recorded on CCTV.',
            'Who you told, and when.',
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Tell leadership the same day', text: 'Inform the year head or vice-principal straight away. For threats or violence, they will decide on a response and, where needed, report to MOE and the police.' },
      ],
    },
    {
      id: 'support',
      title: 'Support, sanctions and the law',
      blocks: [
        {
          t: 'table',
          head: ['Level', 'School response', 'Legal route'],
          rows: [
            ['Verbal abuse or insults', 'A serious-misconduct response under the discipline framework: detention or suspension, conduct grade, parent meeting, counselling', 'Usually none, unless threatening or persistent'],
            ['Threats, stalking or online abuse of a teacher', 'Suspension, a firm warning to the family, support for the teacher, review of online contact', 'Police report; POHA protection order; Online Safety Commission for online harms'],
            ['Physical assault of staff', 'A very serious offence under the framework; suspension; for boys, possibly caning under MOE rules; referral to the police', 'Police report; prosecution under the Penal Code (hurt, hurt to a public servant)'],
            ['Student with special educational needs in crisis', 'Behaviour plan, trained staff, specialist input, safe space, and a response proportionate to the need', 'Rarely a criminal route; the focus is on support and safety'],
          ],
          caption: 'MOE has said that teachers can inform school leaders or MOE, and that the school and MOE will support a teacher who makes a police report where their safety is threatened. Counselling support is available.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'You are not alone', body: 'Tell your year head, your vice-principal or your reporting officer. Many teachers delay because they fear being seen as unable to cope. The system is designed for you to ask.' },
            { title: 'A police report is allowed', body: 'MOE has said it will support teachers in making a police report where their safety is threatened. You do not need to wait for the school to decide.' },
            { title: 'Counselling', body: 'MOE offers counselling support to affected teachers. Use it: repeated incidents wear people down.' },
            { title: 'Protect your data', body: 'Do not share the incident on social media, and keep your personal accounts private. If a student posts about you online, report it to school leaders, and to the platform.' },
          ],
        },
      ],
    },
    {
      id: 'prevent',
      title: 'Preventing the next one',
      blocks: [
        {
          t: 'list',
          items: [
            'Know the student: triggers, special needs, what happened before the lesson.',
            'Set clear routines and consequences at the start and apply them calmly and consistently.',
            'Greet students at the door and give them a way to start well; many incidents start in the first minute.',
            'Teach the class how conflicts are handled so that students know what happens next.',
            'Work in pairs or with a colleague on hard classes, and share the load.',
            'Review incidents as a team: what were the warning signs, and what would we do differently?',
          ],
        },
        { t: 'callout', tone: 'note', title: 'Context matters', text: 'Behaviour that looks like abuse can be a communication from a student in distress, with autism, ADHD, trauma or a crisis at home. That does not excuse an assault, but it changes the best response: safety and consequence together with support.' },
      ],
    },
  ],
  sources: [
    'Ministry of Education (14 October 2025). Parliamentary reply on cases where students physically assaulted teachers or school staff.',
    'Ministry of Education (13 January 2026). Parliamentary reply on abuse against teachers following the OECD TALIS 2024 findings.',
    'Ministry of Education (8 July 2019). Parliamentary reply on harassment of teachers by parents.',
  ],
  related: ['teaching/singapore/parent-conflict', 'teaching/singapore/attitude-and-defiance', 'teaching/singapore/escalation-ladder'],
}

export default guide
