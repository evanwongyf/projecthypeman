import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Principles become clearer on real cases. This guide walks through six composite scenarios (invented, with names changed and details mixed) covering the situations teachers meet most: a pupil far behind in reading, a new arrival with little English, a learner whose behaviour hides a need, a bright pupil who is failing, a family under financial strain, and a learner with a diagnosis whose support is not working. For each case it sets out what is known, the questions to ask, the decisions and the reasoning, and what to monitor. They are practice in thinking, not recipes.',
  nutshell: [
    'In every case the sequence is the same: **notice → ask why → check basics → adapt the teaching → target the gap → monitor → involve others**.',
    '**Don’t jump to a label.** Rule out language, attendance, sensory needs, teaching and wellbeing before assuming a learning need.',
    '**Keep the learner in the curriculum**: adapt access and give extra teaching; avoid permanent removal to easier work.',
    '**Involve the learner and family** at each step; they hold information you do not.',
    '**Decide what you will measure and when you will review** before you start.',
  ],
  sections: [
    {
      id: 'c1',
      title: 'Case 1: Daniel, Primary 4, reading two years behind',
      lead: 'A decoding problem or an understanding problem?',
      blocks: [
        {
          t: 'example',
          title: 'What the teacher knows and what she does',
          lines: [
            { label: 'Situation', text: 'Daniel avoids reading aloud, guesses words from the first letter, and his written answers are short and often off-topic. He talks well in class and is good at maths when problems are read to him.' },
            { label: 'Hypotheses', text: 'Decoding difficulty (maybe dyslexia); language comprehension weakness; vision or hearing; low confidence. His spoken language and reasoning are strong, which points to decoding (simple view of reading).' },
            { label: 'Checks', text: 'Hearing and vision screening (clear). A short pseudo-word reading check: he fails on vowel teams and multisyllable words. One-minute oral reading: 38 words correct per minute against a typical 90 for the time of year.' },
            { label: 'Plan', text: 'Three 20-minute sessions a week of systematic phonics with a trained assistant (with the teacher choosing the sequence); a pre-read of class texts; read-aloud of problems and instructions; typing for longer writing. Keep him in the class lessons.' },
            { label: 'Monitor', text: 'Weekly one-minute probes. After 6 weeks: 52 words per minute, growth 2.3 a week, above the typical 1.5. The plan continues; a meeting with his parents discusses how to support at home and whether to request an educational psychologist assessment if progress stalls.' },
            { label: 'Reasoning', text: 'The diagnosis of the type of difficulty (decoding) shaped the intervention. Accommodations (read-aloud) allow him to show maths and science knowledge now while he catches up in reading.' },
          ],
        },
      ],
    },
    {
      id: 'c2',
      title: 'Case 2: Linh, Secondary 1, newly arrived, little English',
      lead: 'Language is not ability.',
      blocks: [
        {
          t: 'example',
          title: 'A new arrival in a mainstream class',
          lines: [
            { label: 'Situation', text: 'Linh joined in the middle of the year after schooling in another country. She has little English and says almost nothing in class. Her earlier school reports (translated) show strong maths.' },
            { label: 'First steps', text: 'Find out her home language, prior schooling and what she knows (with an interpreter or bilingual peer). Assign a friendly buddy. Make clear routines, and a picture timetable. Learn how to say her name correctly.' },
            { label: 'Assess fairly', text: 'Assess maths with symbolic or visual items and minimal text, and with the questions read in her home language where possible. She succeeds in algebra, so she is placed in the usual maths class with language support, not a lower set.' },
            { label: 'Teach language', text: 'Daily structured English support (bridging programme), pre-taught vocabulary for each lesson, sentence frames, and paired talk with a bilingual peer. Allow home-language notes and a bilingual dictionary.' },
            { label: 'Expectation', text: 'Social English in a year or two; academic English takes up to five to seven years, so support continues beyond the point at which she sounds fluent (Cummins).' },
            { label: 'Watch for', text: 'Silent period (normal); signs of distress or trauma from migration; isolation; a hidden special need that needs assessment in her first language.' },
          ],
        },
      ],
    },
    {
      id: 'c3',
      title: 'Case 3: Marcus, Primary 5, "disruptive"',
      lead: 'What is the behaviour telling us?',
      blocks: [
        {
          t: 'example',
          title: 'From punishment to understanding',
          lines: [
            { label: 'Situation', text: 'Marcus calls out, wanders, and refuses written work. He has lost break-times several times with no change. He is often late.' },
            { label: 'Ask', text: 'When does it happen? Pattern: worst in writing lessons and after weekends; better in practical lessons. Lateness: he walks his younger brother to a different school first.' },
            { label: 'Hypotheses', text: 'Difficulty with writing (fine motor, dysgraphia, spelling) leading to avoidance; attention difficulties; home pressures and tiredness; unmet need (ADHD or a language difficulty).' },
            { label: 'Actions', text: 'Meet his mother (not to complain: to ask and listen). Move the first lesson to a later slot, with a plan for the missed minutes. Offer oral rehearsal and a graphic organiser before writing, typing or voice-to-text, and shorter writing tasks with a visible checklist. A movement break pattern. Praise specific effort privately.' },
            { label: 'Behaviour plan', text: 'A short, positive plan with two or three observable goals (stays seated for 10 minutes; asks for help by raising a card), reinforced quickly. Consequences are calm and repair-focused.' },
            { label: 'Review', text: 'Track calling out and lateness for four weeks. Calling out falls from 12 a lesson to 4; lateness resolves. The learning support team considers an assessment for attention and writing difficulties, as some difficulty remains.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'The lesson', text: 'Behaviour is communication. Exclusion-style punishment had no effect because it did not address the cause. Behaviour improved when the barriers (writing demand, lateness) were reduced and positive skills were taught.' },
      ],
    },
    {
      id: 'c4',
      title: 'Case 4: Priya, Secondary 3, high ability, failing',
      lead: 'Twice-exceptional or something else.',
      blocks: [
        {
          t: 'example',
          title: 'A strong talker with weak written work',
          lines: [
            { label: 'Situation', text: 'Priya contributes insightful comments in discussion and scores top in oral tasks. Her written work is brief, disorganised and incomplete; she hands in around half of her homework; her results are in the bottom quarter.' },
            { label: 'Hypotheses', text: 'A specific writing difficulty (dysgraphia or dyslexia) masked by high verbal ability; ADHD (inattentive), particularly given girls are often missed; anxiety and perfectionism; boredom.' },
            { label: 'Checks', text: 'Parent and learner conversation. Samples of work show good ideas and many spelling errors; she says "my hand cannot keep up with my head" and starts many tasks without finishing. The assessment by an educational psychologist (requested by the learning support coordinator) finds a significant gap between verbal reasoning and writing speed and a profile consistent with dyslexia and attention difficulties.' },
            { label: 'Support', text: 'Keep her in the most demanding classes (high challenge). Accommodations: typed responses, extra time, planning scaffolds, task checklists, due dates split into stages, a mentor for organisation, and access to speech-to-text. Strengths-based goals, such as debate team leadership.' },
            { label: 'Risks avoided', text: 'Lowering the level of work, and attributing her results to laziness. Also being praised only for brains: her effort strategies are named explicitly.' },
          ],
        },
      ],
    },
    {
      id: 'c5',
      title: 'Case 5: The Tan family, Primary 2',
      lead: 'When the barrier is at home.',
      blocks: [
        {
          t: 'example',
          title: 'Absence and tiredness',
          lines: [
            { label: 'Situation', text: 'Wei Jie is often absent, arrives tired and has not returned several forms. Reading is below expectation. He had been quiet and friendly. His attendance is 83%.' },
            { label: 'Arithmetic', text: 'At 83%, he has missed 17% of the days: about 33 days of a 195-day year, over six weeks, in his first two years.' },
            { label: 'Approach', text: 'A phone call and a meeting at a time that works for the parents, who work irregular shifts. The family’s concerns: transport costs and a younger sibling who is often unwell. Ask what would help; do not blame.' },
            { label: 'Actions', text: 'Connect the family with financial assistance and the school’s student care arrangement; a named adult greets Wei Jie each morning; a breakfast option offered discreetly; paper copies of forms with a simple summary in the parents’ language; targeted reading support with pre-teaching for lessons he missed.' },
            { label: 'Monitor', text: 'Attendance and a weekly reading probe. By the end of term his attendance is 92% and he is gaining on the probes.' },
            { label: 'Principle', text: 'Treat the family as partners, and remove the practical barriers within the school’s control. Never publicise hardship, and be careful not to give the child the burden of the information.' },
          ],
        },
      ],
    },
    {
      id: 'c6',
      title: 'Case 6: Amir, Secondary 2, diagnosis and no progress',
      lead: 'The plan is not working.',
      blocks: [
        {
          t: 'example',
          title: 'Reviewing a support plan honestly',
          lines: [
            { label: 'Situation', text: 'Amir has a diagnosis of autism and a support plan with a daily teaching-assistant, a quiet room and a reduced workload. A year on, his progress is flat, his attendance has fallen and he spends much of the day away from classmates.' },
            { label: 'Review questions', text: 'Is the plan being delivered as intended? Does he understand it? Does it match his actual difficulties (sensory overload in corridors, unstructured breaks, social demands) or the label? Is permanent withdrawal from class making him less able to rejoin?' },
            { label: 'Findings', text: 'The assistant sits beside him and completes tasks. The quiet room is used for most of the day. The reduced workload means he is behind in content. The real triggers are noisy transitions and unstructured lunchtimes.' },
            { label: 'Changes', text: 'Agree the plan with Amir. A calm route between classes, and a set space at lunch with a chosen peer group or club; visual schedules and clear, advance warnings of changes; return to the full curriculum with scaffolds (written steps, checklists) and an expectation of independence; the assistant moves to prompting and fading; an occupational therapist and an educational psychologist advise on sensory supports; social skills taught explicitly.' },
            { label: 'Measure', text: 'Attendance, time in class, task completion with independence, Amir’s own ratings of how school feels each fortnight.' },
          ],
        },
        { t: 'dodont', do: ['Review the plan against the learner’s actual barriers, not the diagnosis alone.', 'Involve the learner in setting goals.', 'Fade support toward independence, deliberately.'], dont: ['Assume a plan works because it exists.', 'Let accommodations turn into isolation.', 'Reduce the curriculum without a clear reason and review date.'] },
      ],
    },
    {
      id: 'reflect',
      title: 'Questions to take to your own class',
      lead: 'A reflection routine.',
      blocks: [
        {
          t: 'checklist',
          items: [
            'Who in my class is behind, and do I know why for each learner?',
            'For each learner who struggles: have I checked language, attendance, hearing and vision, and the quality of the teaching they get?',
            'Have I asked the learner and family what would help?',
            'What is one adjustment, for the whole class, that would remove a barrier for several learners?',
            'What am I measuring to know if it works, and when do I review?',
            'Who else (a colleague, learning support, a specialist) should I consult?',
          ],
        },
      ],
    },
  ],
  sources: [
    'Gough, P. B. & Tunmer, W. E. (1986). Decoding, reading, and reading disability. *Remedial and Special Education*, 7(1).',
    'Cummins, J. (1981). *Bilingualism and Minority-Language Children*. OISE Press.',
    'Gersten, R. et al. (2009). *Assisting Students Struggling with Reading: Response to Intervention and Multi-Tier Intervention*. IES Practice Guide.',
    'Department for Education (2015). *SEND Code of Practice*, chapter 6.',
    'Rose, J. (2009). *Identifying and Teaching Children and Young People with Dyslexia and Literacy Difficulties*. DCSF.',
  ],
  related: ['teaching/inclusive-practice/send-graduated-approach', 'teaching/inclusive-practice/adaptive-teaching-toolkit', 'teaching/inclusive-practice/multilingual-learners', 'teaching/inclusive-practice/poverty-and-attendance', 'teaching/special-education/needs/autism'],
}

export default guide
