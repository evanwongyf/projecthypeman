import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Teaching online uses the same principles as teaching in person: clear explanations, active practice, feedback and relationships. What changes is how easy it is for learners to drift off unseen. Good online teaching makes participation visible and keeps learners doing, not just watching.',
  nutshell: [
    '**Synchronous** (live) and **asynchronous** (self-paced) teaching each have strengths; most courses mix both.',
    'Quality of teaching matters more than the platform.',
    'Build interaction every few minutes: polls, chat, quick questions, short tasks.',
    'Keep videos short and focused, and make everything accessible.',
  ],
  sections: [
    {
      id: 'modes',
      title: 'Live and self-paced',
      blocks: [
        {
          t: 'table',
          head: ['', 'Synchronous (live)', 'Asynchronous (self-paced)'],
          rows: [
            ['Examples', 'Video lessons, live discussion, breakout rooms', 'Recorded videos, readings, discussion boards, quizzes'],
            ['Strengths', 'Immediate interaction and feedback; community; accountability', 'Flexibility; learners can pause and replay; time to think'],
            ['Challenges', 'Time zones, connection issues, screen fatigue', 'Isolation, procrastination, less immediate help'],
            ['Best for', 'Discussion, checking understanding, relationships', 'Presenting content, practice, reflection'],
          ],
        },
        {
          t: 'p',
          text: 'The Community of Inquiry framework (Garrison, Anderson & Archer, 2000) suggests that deep online learning needs three kinds of presence: **teaching presence** (design and facilitation), **social presence** (learners feel connected to real people) and **cognitive presence** (learners build meaning through reflection and discussion).',
        },
      ],
    },
    {
      id: 'live',
      title: 'Running a live session',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Start with a quick task in the first minute: a poll, a retrieval question in the chat.',
            'Share the plan and objective on a slide.',
            'Change activity every 5–10 minutes.',
            'Use the chat "waterfall": everyone types an answer but waits to press enter until you say "go".',
            'Give breakout rooms a precise task, a time limit and a product to share back.',
            'Cold call warmly by name, with thinking time first.',
            'Record sessions for learners who cannot attend, with permission.',
          ],
          dont: [
            'Lecture for 45 minutes with cameras off and no interaction.',
            'Assume silence means understanding.',
            'Send learners into breakouts with vague instructions.',
            'Require cameras on; some learners have good reasons not to share their home.',
          ],
        },
      ],
    },
    {
      id: 'async',
      title: 'Designing self-paced materials',
      blocks: [
        {
          t: 'list',
          items: [
            'Keep videos short. One large study of online course videos found engagement dropped sharply after about six minutes (Guo, Kim & Rubin, 2014).',
            'One idea per video; include a question or task after each.',
            'Follow [cognitive load](@teaching/theories/cognitive-load) principles: narrate over visuals rather than filling slides with text.',
            'Show your face or voice; learners engage more with a human presence.',
            'Use a consistent weekly structure so learners know where to find things.',
            'Include low-stakes quizzes for retrieval and feedback.',
            'Caption all videos and use accessible documents.',
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'What the evidence says',
          text: 'A rapid review of remote learning by the Education Endowment Foundation (2020) found that teaching quality matters more than how lessons are delivered, that peer interaction and support for independent work help, and that access to technology is a major equity issue.',
        },
      ],
    },
  ],
  sources: [
    'Garrison, D. R., Anderson, T., & Archer, W. (2000). Critical inquiry in a text-based environment: Computer conferencing in higher education. *The Internet and Higher Education, 2*(2–3), 87–105.',
    'Guo, P. J., Kim, J., & Rubin, R. (2014). How video production affects student engagement: An empirical study of MOOC videos. *Proceedings of the First ACM Conference on Learning @ Scale*, 41–50.',
    'Education Endowment Foundation. (2020). *Remote learning: Rapid evidence assessment*.',
  ],
  related: ['teaching/techniques/active-learning/flipped', 'teaching/theories/cognitive-load', 'teaching/techniques/questioning/checking-understanding'],
}

export default guide
