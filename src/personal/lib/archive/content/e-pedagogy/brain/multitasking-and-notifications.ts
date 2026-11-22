import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The brain does not truly multitask on demanding tasks: it switches, and every switch has a cost. Digital devices make switching effortless and constant. This guide covers what the research says about task switching, laptops in lectures, notifications and phones, including which famous findings have and have not held up.',
  nutshell: [
    '**Switch costs**: switching between tasks slows people and increases errors, more so for complex tasks (Rubinstein, Meyer and Evans, 2001; Monsell, 2003).',
    'Students who multitasked on laptops in a lecture understood less, and so did **classmates who could see their screens** (Sana et al., 2013).',
    'Allowing devices in lectures for non-class use lowered final exam scores (Glass and Kang, 2019).',
    'The claim that a phone merely being nearby drains cognitive capacity (Ward et al., 2017) **has not replicated well**; notifications themselves do distract.',
  ],
  sections: [
    {
      id: 'switching',
      title: 'The cost of switching',
      blocks: [
        {
          t: 'math',
          tex: String.raw`T_{\text{total}} = \sum_i t_i + k\,(c + r)`,
          caption: 'Time to finish work with k interruptions, each costing the interruption itself c plus the time to refocus r.',
          plain: 'The work itself takes the sum of the task times. Every interruption adds the time spent on the interruption (reading a message) plus the time to get back to where you were (finding your place, reloading the problem into your head). Studies of office work found resumption can take minutes, so frequent small interruptions add up fast.',
          where: [
            { sym: String.raw`t_i`, def: 'time for each part of the actual work' },
            { sym: 'k', def: 'number of interruptions' },
            { sym: 'c', def: 'time spent on each interruption' },
            { sym: 'r', def: 'time to refocus after each one' },
          ],
          syntax: [
            { sym: String.raw`\sum_i t_i`, say: '“the sum of t-i”: total uninterrupted work time' },
          ],
          worked: {
            title: 'A 90-minute homework session',
            steps: [
              'Work needed: 60 minutes. Phone checks: every 6 minutes, so k = 10.',
              'Each check: c = 1 minute reading, r = 2 minutes refocusing.',
              String.raw`\(T = 60 + 10 \times (1 + 2) = 60 + 30 = 90\) minutes.`,
              'Without the checks: 60 minutes. Half an hour is lost, and switching also raises error rates.',
            ],
            why: [
              'the real work and the number of interruptions',
              'estimate each interruption’s cost (refocusing is the hidden part)',
              'add work time and interruption costs',
              'compare with focused work',
            ],
            answer: 'Constant checking turns an hour of work into an hour and a half. Phone in another room, notifications off, and a 25-minute focus block with a planned break recovers most of it.',
          },
        },
      ],
    },
    {
      id: 'studies',
      title: 'Key studies and how they held up',
      blocks: [
        { t: 'table', head: ['Study', 'Finding', 'Status'], rows: [
          ['Sana, Weston and Cepeda (2013)', 'Laptop multitaskers scored about 11% lower on a comprehension test; peers in view of a multitasker scored about 17% lower', 'Consistent with later classroom studies'],
          ['Glass and Kang (2019)', 'In a course where devices were allowed in some sessions, exam performance on that material was lower, for users and non-users', 'Field experiment; supports limits'],
          ['Ophir, Nass and Wagner (2009)', 'Heavy media multitaskers were worse at filtering distractions', 'Later studies and reviews found smaller, mixed effects'],
          ['Mueller and Oppenheimer (2014)', 'Handwritten notes beat laptop notes on conceptual questions', 'A large replication (Urry et al., 2021) found no clear advantage'],
          ['Ward et al. (2017), “brain drain”', 'A phone on the desk reduced working memory capacity', 'Several replications failed to find the effect'],
          ['Stothart, Mitchum and Yehnert (2015)', 'Receiving a notification, even without answering, impaired performance on an attention task', 'Supports turning notifications off'],
        ] },
      ],
    },
    {
      id: 'design',
      title: 'Designing for focus',
      blocks: [
        { t: 'dodont', do: [
          'Agree a devices norm (lids down, phones in bags) for parts of lessons',
          'Use devices for specific tasks, then put them away',
          'Turn off non-essential notifications on learning devices',
          'Teach focus blocks (25–50 minutes) with planned breaks',
          'Seat device users where their screens do not distract others',
        ], dont: [
          'Leave open laptops for the whole lesson without a task',
          'Assume “digital natives” can multitask well',
          'Ban all devices if they are needed for access (assistive technology)',
        ] },
      ],
    },
  ],
  sources: [
    'Rubinstein, J. S., Meyer, D. E., & Evans, J. E. (2001). Executive control of cognitive processes in task switching. Journal of Experimental Psychology: Human Perception and Performance, 27(4), 763–797.',
    'Sana, F., Weston, T., & Cepeda, N. J. (2013). Laptop multitasking hinders classroom learning for both users and nearby peers. Computers & Education, 62, 24–31.',
    'Glass, A. L., & Kang, M. (2019). Dividing attention in the classroom reduces exam performance. Educational Psychology, 39(3), 395–408.',
    'Urry, H. L. et al. (2021). Don’t ditch the laptop just yet. Psychological Science, 32(3), 326–339.',
    'Ward, A. F. et al. (2017). Brain drain. Journal of the Association for Consumer Research, 2(2), 140–154.',
    'Stothart, C., Mitchum, A., & Yehnert, C. (2015). The attentional cost of receiving a cell phone notification. Journal of Experimental Psychology: Human Perception and Performance, 41(4), 893–897.',
    'Mark, G., Gudith, D., & Klocke, U. (2008). The cost of interrupted work. CHI ’08.',
  ],
  related: ['attention/start-here', 'e-pedagogy/brain/rewards-and-habits', 'habits/focus'],
}

export default guide
