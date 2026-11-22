import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Attention deficit hyperactivity disorder (ADHD) affects attention, activity and impulse control. It is not a lack of effort or bad parenting. Learners with ADHD often know what to do but struggle to do it consistently, and classroom structure can make a big difference.',
  nutshell: [
    'Three presentations: **predominantly inattentive, predominantly hyperactive-impulsive, and combined**.',
    'Around 5% of children worldwide are thought to have ADHD, and it often continues into adulthood.',
    'Difficulties with **executive functions** (working memory, planning, starting and switching tasks) are central.',
    'Helpful: structure, short tasks, frequent feedback, movement, reduced distractions, and relationships that separate the learner from the behaviour.',
  ],
  sections: [
    {
      id: 'what',
      title: 'What ADHD looks like',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Inattention', body: 'Losing focus, missing details, not seeming to listen, losing things, difficulty organising work, avoiding tasks that need sustained effort, forgetfulness. Often missed, especially in girls, because it is quiet.' },
            { title: 'Hyperactivity', body: 'Fidgeting, leaving the seat, restlessness, talking a lot, being "on the go". Often reduces with age but may become inner restlessness.' },
            { title: 'Impulsivity', body: 'Calling out, interrupting, difficulty waiting, acting before thinking through consequences.' },
            { title: 'Strengths', body: 'Many learners with ADHD show energy, creativity, curiosity and intense focus (hyperfocus) on things that interest them. Build on these.' },
          ],
        },
        {
          t: 'p',
          text: 'Russell Barkley describes ADHD as fundamentally a difficulty with self-regulation and **executive functions**: knowing what to do is not the problem; doing it at the right moment is. This is why a learner can seem to "choose" when they concentrate. They are not choosing; interest and urgency provide the regulation their brain struggles to supply.',
        },
        {
          t: 'callout',
          tone: 'note',
          text: 'Diagnosis and decisions about medication are made by doctors with families. The teacher’s role is to notice and describe what they see, share observations, and make the classroom work for the learner.',
        },
      ],
    },
    {
      id: 'structure',
      title: 'Structure the environment',
      blocks: [
        {
          t: 'list',
          items: [
            'Seat the learner away from high-traffic areas and windows, near where you usually teach, with a good role model nearby.',
            'Keep routines predictable, and give warning before transitions: "Two minutes until we pack away."',
            'Keep instructions short, one or two steps at a time, and written as well as spoken.',
            'Keep desks clear of anything not needed for the task.',
            'Use visual timers so time is visible, not abstract.',
          ],
        },
      ],
    },
    {
      id: 'tasks',
      title: 'Structure the work',
      blocks: [
        {
          t: 'cards',
          cols: 3,
          items: [
            { title: 'Chunk tasks', body: 'Break work into short pieces with a checkpoint after each. A numbered checklist the learner ticks off. See [executive function](@teaching/special-education/strategies/executive-function).' },
            { title: 'Quick feedback', body: 'Check in early and often. Delayed consequences and distant deadlines do not regulate well; immediate ones do.' },
            { title: 'Build in movement', body: 'Jobs like handing out books, standing work stations, brain breaks, fidget tools that are silent and not distracting.' },
            { title: 'Start strong', body: 'Help the learner begin: do the first question together, or give a clear first step. Starting is often the hardest part.' },
            { title: 'Novelty and choice', body: 'Varied activities and some choice help sustain attention.' },
            { title: 'Reduce copying', body: 'Provide printed notes and outlines so energy goes into thinking, not transcribing.' },
          ],
        },
      ],
    },
    {
      id: 'behaviour',
      title: 'Responding to behaviour',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Notice and praise specific on-task behaviour, often.',
            'Use private, agreed signals to redirect instead of public reprimands.',
            'Keep consequences calm, immediate and proportionate.',
            'Plan for known difficult times, such as after lunch or during long independent work.',
            'Talk with the learner about what helps them.',
          ],
          dont: [
            'Remove break time or PE as punishment; movement is exactly what helps.',
            'Assume forgetfulness or losing things is laziness.',
            'Rely on long-term rewards ("if you behave all week…").',
            'Let a cycle of constant correction damage the relationship.',
          ],
        },
      ],
    },
  ],
  sources: [
    'American Psychiatric Association. (2022). *Diagnostic and statistical manual of mental disorders* (5th ed., text rev.).',
    'Barkley, R. A. (2015). *Attention-deficit hyperactivity disorder: A handbook for diagnosis and treatment* (4th ed.). Guilford.',
    'Polanczyk, G., de Lima, M. S., Horta, B. L., Biederman, J., & Rohde, L. A. (2007). The worldwide prevalence of ADHD: A systematic review and metaregression analysis. *American Journal of Psychiatry, 164*(6), 942–948.',
    'DuPaul, G. J., & Stoner, G. (2014). *ADHD in the schools* (3rd ed.). Guilford.',
  ],
  related: ['teaching/special-education/strategies/executive-function', 'teaching/special-education/strategies/behaviour-support', 'teaching/guides/classroom/management'],
}

export default guide
