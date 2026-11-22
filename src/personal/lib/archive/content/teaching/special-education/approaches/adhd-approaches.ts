import type { Guide } from '../../../../guide'

const caseStudy = (title: string, lines: [string, string][]) => ({ t: 'example' as const, title, lines: lines.map(([label, text]) => ({ label, text })) })

const guide: Guide = {
  intro:
    'ADHD is a difference in the brain’s self-regulation, of attention, activity, impulses and especially of executive functions like working memory and getting started. Russell Barkley’s summary is that ADHD is not a problem of knowing what to do but of doing what you know. The school approaches that work therefore change the environment around the learner: shorter tasks, faster feedback, external reminders and more movement.',
  nutshell: [
    'The best-evidenced school interventions are **behavioural classroom management** (clear rules, frequent specific praise, immediate consequences), the **daily report card**, **organisational skills training** and **self-monitoring**.',
    'Interventions work while they are in place: build them into routines rather than expecting a “cure”.',
    'Medication is a medical decision for families and doctors; it is effective for core symptoms in most children. A teacher’s role is to observe and report, not to recommend.',
    'Shame and criticism are common in ADHD lives. A positive ratio (at least 4:1 praise to correction) protects motivation.',
  ],
  sections: [
    {
      id: 'evidence',
      title: 'What the evidence supports',
      blocks: [
        { t: 'table', head: ['Intervention', 'How it works', 'Evidence'], rows: [
          ['Behavioural classroom management', 'Clear rules, routines, frequent specific praise, consistent mild consequences, token systems', 'Strong; many RCTs and meta-analyses'],
          ['Daily report card', '2–4 target behaviours rated each lesson, sent home, linked to home rewards', 'Strong; cheap and effective'],
          ['Organisational skills training', 'Explicit teaching of materials management, planning and time management (e.g. HOPS, OST)', 'Moderate to strong, especially for adolescents'],
          ['Self-monitoring', 'Learner records their own on-task behaviour at intervals (e.g. a vibrating watch prompt)', 'Moderate'],
          ['Parent training', 'Parents learn consistent routines and positive reinforcement', 'Strong for younger children'],
          ['Medication', 'Stimulants (methylphenidate, amphetamines) and non-stimulants', 'Strong for core symptoms; prescribed by doctors'],
          ['Exercise', 'Physical activity before or during learning', 'Small to moderate short-term benefits'],
          ['Cognitive training (working memory apps)', 'Computer games training working memory', 'Weak; gains rarely transfer to school'],
          ['Elimination diets, supplements', 'Removing colourings, omega-3', 'Small effects for some; not a substitute'],
        ] },
      ],
    },
    {
      id: 'drc',
      title: 'Setting up a daily report card',
      blocks: [
        { t: 'steps', items: [
          { title: 'Pick 2–4 targets', body: 'Specific and observable: “Starts work within 2 minutes”, “Raises hand before speaking”, “Has homework diary signed”.' },
          { title: 'Set a reachable criterion', body: 'Start where the learner is (e.g. 3 interruptions or fewer per lesson), so success is likely in the first week.' },
          { title: 'Rate every lesson', body: 'A quick yes/no or 0–2 rating, with a word of praise when met.' },
          { title: 'Link to home', body: 'Parents give a small, immediate reward for meeting a set number of targets: screen time, choosing dinner, a later bedtime on Friday.' },
          { title: 'Raise the bar gradually', body: 'When a target is met consistently, make it harder or replace it.' },
        ] },
      ],
    },
    {
      id: 'classroom',
      title: 'Classroom strategies',
      blocks: [
        { t: 'cards', cols: 2, items: [
          { title: 'Point of performance', body: 'Put reminders where the behaviour happens: a checklist on the desk, a timer visible, the instruction written on the board. Working memory cannot hold them.' },
          { title: 'Shrink the task', body: 'Short chunks with a check after each; “do these 5, then show me”. Cover the rest of the page.' },
          { title: 'Make time visible', body: 'Countdown timers, visual clocks. Time blindness is common in ADHD.' },
          { title: 'Move', body: 'Movement jobs, standing options, a fidget, a brain break every 15–20 minutes.' },
          { title: 'Start together', body: 'Do the first item with the learner. Initiation is often the hardest part.' },
          { title: 'Immediate feedback', body: 'Quick, frequent, specific: delayed rewards lose their power with ADHD.' },
          { title: 'Seat strategically', body: 'Near the teacher, away from doors and windows, next to a calm peer.' },
          { title: 'Prompt quietly', body: 'A tap on the desk or a pre-agreed signal instead of public correction.' },
        ] },
      ],
    },
    {
      id: 'cases',
      title: 'Case studies',
      blocks: [
        caseStudy('Jayden, 8, out of seat all day', [
          ['Situation', 'Jayden wanders, calls out and disrupts; he loses break time almost daily.'],
          ['What helped', 'Removing break-time sanctions (he needs the movement); a daily report card with two targets; movement jobs (taking messages, handing out books); a wobble cushion; praise for every few minutes of seated work at first.'],
          ['Outcome', 'Call-outs halved in three weeks; on-task time rose from about 40% to 70%.'],
          ['Lesson', 'Taking away movement from a child with ADHD makes things worse.'],
        ]),
        caseStudy('Chloe, 12, the dreamer', [
          ['Situation', 'Quiet, polite, often “miles away”; work unfinished; teachers saw her as lazy. Diagnosed with ADHD (predominantly inattentive presentation) at 12.'],
          ['What helped', 'Written instructions; check-ins after the first instruction; a self-monitoring app vibrating every 5 minutes (“Was I working?”); seating near the front.'],
          ['Outcome', 'Completion improved markedly; Chloe said the diagnosis helped her stop thinking she was stupid.'],
          ['Lesson', 'Inattentive ADHD, especially in girls, is often missed because it is not disruptive.'],
        ]),
        caseStudy('Omar, 15, failing despite ability', [
          ['Situation', 'Forgets homework, loses equipment, misses deadlines; marks well when work is done.'],
          ['What helped', 'Organisational skills training with a mentor: one binder system, a checklist for packing his bag, weekly planning sessions, deadlines broken into stages, phone reminders.'],
          ['Outcome', 'Missing assignments fell from 60% to 15% over a term.'],
        ]),
        caseStudy('Lily, 6, impulsive and hurting others', [
          ['Situation', 'Grabs, pushes and snatches toys; other children avoid her.'],
          ['What helped', 'Parent training for consistent routines at home; at school, teaching “stop, think, do” with a visual, practising waiting games, and praising each time she waited; structured play with a supervising adult.'],
          ['Outcome', 'Incidents fell over a term; she was invited to a birthday party for the first time.'],
        ]),
        caseStudy('Ryan, 17, exams and medication', [
          ['Situation', 'On medication that wears off by mid-afternoon; afternoon exams go badly.'],
          ['What helped', 'Teacher noted the pattern and shared it with parents; the doctor adjusted timing; exam arrangements included rest breaks and a separate room.'],
          ['Outcome', 'Afternoon performance matched mornings.'],
          ['Lesson', 'Teachers’ observations are valuable to families and doctors, share what you see, without recommending treatment.'],
        ]),
      ],
    },
  ],
  sources: [
    'Barkley, R. A. (2015). Attention-Deficit Hyperactivity Disorder: A Handbook for Diagnosis and Treatment, 4th ed. Guilford.',
    'DuPaul, G. J., Eckert, T. L. & Vilardo, B. (2012). The effects of school-based interventions for ADHD: a meta-analysis 1996–2010. School Psychology Review 41(4).',
    'Pelham, W. E. & Fabiano, G. A. (2008). Evidence-based psychosocial treatments for ADHD. Journal of Clinical Child & Adolescent Psychology 37(1).',
    'Evans, S. W. et al. (2018). Evidence-based psychosocial treatments for children and adolescents with ADHD. JCCAP 47(2).',
    'Cortese, S. et al. (2018). Comparative efficacy and tolerability of medications for ADHD: a systematic review and network meta-analysis. Lancet Psychiatry 5(9).',
  ],
  related: ['teaching/special-education/needs/adhd', 'teaching/special-education/strategies/executive-function'],
}

export default guide
