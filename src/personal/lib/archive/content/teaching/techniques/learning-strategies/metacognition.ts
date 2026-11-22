import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Metacognition is thinking about your own thinking: knowing how you learn, planning how to tackle a task, noticing when you are stuck, and judging how well it went. Learners who do this well learn more, and it can be taught.',
  nutshell: [
    'The cycle: **plan → monitor → evaluate**, before, during and after a task.',
    'Learners are often poor judges of what they know. Re-reading creates a feeling of knowing that is not real knowledge.',
    'Metacognition is not a separate subject. It is best taught inside real subject tasks, with teachers modelling their own thinking aloud.',
    'The Education Endowment Foundation rates metacognition and self-regulation as one of the highest-impact, lowest-cost approaches.',
  ],
  sections: [
    {
      id: 'what',
      title: 'What metacognition is',
      lead: 'Knowledge and regulation.',
      blocks: [
        {
          t: 'p',
          text: 'John Flavell introduced the term in the 1970s. It is usually split into two parts: **metacognitive knowledge** (what you know about yourself as a learner, about tasks and about strategies) and **metacognitive regulation** (how you plan, monitor and evaluate your learning in the moment).',
        },
        {
          t: 'terms',
          items: [
            { term: 'Knowledge of self', def: '"I lose focus after 25 minutes." "I often misread questions."' },
            { term: 'Knowledge of tasks', def: '"This essay question asks me to evaluate, not just describe."' },
            { term: 'Knowledge of strategies', def: '"Self-testing works better for me than re-reading." "I should draw a diagram for this kind of problem."' },
            { term: 'Self-regulation', def: 'Using that knowledge to manage your learning: setting goals, choosing strategies, keeping yourself going.' },
          ],
        },
      ],
    },
    {
      id: 'cycle',
      title: 'Plan, monitor, evaluate',
      lead: 'Questions for each stage.',
      blocks: [
        {
          t: 'cycle',
          items: [
            { name: 'Plan', body: 'What is the task asking? What do I already know that will help? Which strategy will I use? How long will it take? What does a good result look like?' },
            { name: 'Monitor', body: 'Is my strategy working? Do I understand what I just read? Am I still on task? Should I try a different approach? Where am I stuck?' },
            { name: 'Evaluate', body: 'How well did I do? Which strategies worked and which did not? What would I do differently next time?' },
          ],
          caption: 'What you learn at "evaluate" feeds into your next "plan".',
        },
      ],
    },
    {
      id: 'illusions',
      title: 'Illusions of knowing',
      lead: 'Why we misjudge our own learning.',
      blocks: [
        {
          t: 'p',
          text: 'We judge how well we know something by how **easy it feels**. Re-reading notes feels fluent, so it feels like learning. Effortful strategies like self-testing feel harder, so they feel less effective, even though they work better. This mismatch leads learners to choose weak strategies and to stop studying too soon (Bjork, Dunlosky & Kornell, 2013).',
        },
        {
          t: 'cards',
          items: [
            { title: 'Familiarity ≠ recall', body: 'Recognising your notes is not the same as being able to reproduce them in an exam.' },
            { title: 'Understanding now ≠ remembering later', body: 'Following an explanation today does not mean you will remember it next month.' },
            { title: 'Test yourself to calibrate', body: 'The cure for illusions is a real test: close the book and try. What you cannot recall is what you do not know yet.' },
          ],
        },
      ],
    },
    {
      id: 'teaching',
      title: 'Teaching metacognition',
      lead: 'Following the EEF’s recommendations.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Teach it inside subjects', body: 'Plan how to approach *this* essay or *this* problem. Generic "thinking skills" lessons transfer poorly.' },
            { title: 'Model your thinking aloud', body: 'Show how you plan, notice confusion and check your work: "I’m not sure this is right, so I’ll estimate first." See [modelling and think-alouds](@teaching/techniques/instruction/modelling).' },
            { title: 'Give explicit strategies', body: 'Teach specific strategies (self-testing, planning frames, checklists) and when to use them.' },
            { title: 'Support, then withdraw', body: 'Use prompts and planning sheets at first, then fade them so learners do it themselves.' },
            { title: 'Set challenging tasks', body: 'Metacognition is only needed when a task is hard enough to require it.' },
            { title: 'Talk about learning', body: 'Discuss what helped and what did not after tasks, and make it normal to say "I’m stuck, so I’m going to try…"' },
          ],
        },
        {
          t: 'example',
          title: 'Wrapper questions for a test',
          lines: [
            { label: 'Before', text: 'How did you prepare? How confident are you, from 1 to 5, for each topic?' },
            { label: 'After', text: 'Which questions did you lose marks on? Were errors from not knowing, misreading or running out of time? Were your confidence ratings accurate?' },
            { label: 'Next time', text: 'What will you do differently to prepare for the next test?' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Flavell, J. H. (1979). Metacognition and cognitive monitoring. *American Psychologist, 34*(10), 906–911.',
    'Education Endowment Foundation. (2021). *Metacognition and self-regulated learning: Guidance report* (2nd ed.).',
    'Bjork, R. A., Dunlosky, J., & Kornell, N. (2013). Self-regulated learning: Beliefs, techniques, and illusions. *Annual Review of Psychology, 64*, 417–444.',
    'Zimmerman, B. J. (2002). Becoming a self-regulated learner: An overview. *Theory Into Practice, 41*(2), 64–70.',
  ],
  related: ['teaching/taxonomies/blooms-knowledge', 'teaching/techniques/instruction/modelling', 'teaching/techniques/learning-strategies/retrieval-practice', 'teaching/taxonomies/marzano'],
}

export default guide
