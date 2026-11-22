import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'In 2012 Barak Rosenshine summarised decades of research into ten principles of effective instruction. They come from three sources that agree remarkably well: cognitive science, studies of what the most effective teachers do, and research on supports that help learners with hard tasks.',
  nutshell: [
    'Review daily. Present new material in small steps. Ask lots of questions and check everyone’s answers.',
    'Model, then guide practice, then check understanding, aiming for a high success rate.',
    'Scaffold hard tasks, then move to independent practice, and review weekly and monthly.',
    'Together they describe a lesson rhythm of **review, explain, model, practise, check, repeat**.',
  ],
  sections: [
    {
      id: 'ten',
      title: 'The ten principles',
      lead: 'In Rosenshine’s own order.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Begin with a short review of previous learning', body: 'Five to eight minutes of recall from earlier lessons strengthens connections and makes new learning easier. See [retrieval practice](@teaching/techniques/learning-strategies/retrieval-practice).' },
            { title: 'Present new material in small steps, with practice after each step', body: 'Working memory is small (see [cognitive load](@teaching/theories/cognitive-load)). Teach a little, let learners practise, then teach the next piece.' },
            { title: 'Ask a large number of questions and check the responses of all learners', body: 'Questions reveal how well material has been learned and what needs reteaching. Get answers from everyone, not only volunteers.' },
            { title: 'Provide models', body: 'Worked examples and think-alouds show learners exactly how to do a task. See [worked examples](@teaching/techniques/instruction/worked-examples) and [modelling](@teaching/techniques/instruction/modelling).' },
            { title: 'Guide learner practice', body: 'Spend more time on guided practice than you think: learners rehearse, restate and summarise with the teacher close by to correct errors.' },
            { title: 'Check for learner understanding', body: 'Ask learners to explain what they have learned, not just "any questions?". Catch misconceptions before they settle.' },
            { title: 'Obtain a high success rate', body: 'The most effective teachers had success rates around **80%** in guided practice: challenging, but mostly right. Much lower means learners are practising errors.' },
            { title: 'Provide scaffolds for difficult tasks', body: 'Temporary supports, such as prompts, checklists and model answers, which are gradually withdrawn. See [scaffolding strategies](@teaching/differentiation/scaffolding).' },
            { title: 'Require and monitor independent practice', body: 'Learners need lots of practice to become fluent, and it works best after guided practice, with the teacher circulating and checking.' },
            { title: 'Engage learners in weekly and monthly review', body: 'Knowledge needs to be revisited to be retained and to become fluent. See [spaced practice](@teaching/techniques/learning-strategies/spaced-practice).' },
          ],
        },
      ],
    },
    {
      id: 'strands',
      title: 'Four strands',
      lead: 'Tom Sherrington’s grouping.',
      blocks: [
        {
          t: 'p',
          text: 'In his short guide to the principles, Sherrington (2019) groups them into four strands, which is an easier way to hold them in mind while planning.',
        },
        {
          t: 'cards',
          items: [
            { title: 'Sequencing concepts and modelling', body: 'Principles 2, 4 and 8: small steps, models, scaffolds.' },
            { title: 'Questioning', body: 'Principles 3 and 6: lots of questions, checking everyone’s understanding.' },
            { title: 'Reviewing material', body: 'Principles 1 and 10: daily, weekly and monthly review.' },
            { title: 'Stages of practice', body: 'Principles 5, 7 and 9: guided practice, high success, independent practice.' },
          ],
        },
      ],
    },
    {
      id: 'lesson',
      title: 'A lesson built on the principles',
      lead: 'What it can look like in 50 minutes.',
      blocks: [
        {
          t: 'table',
          head: ['Time', 'Phase', 'What happens', 'Principle'],
          rows: [
            ['0–8', 'Review', 'Five retrieval questions from last lesson and last month, answered in silence and self-marked.', '1, 10'],
            ['8–18', 'Explain and model', 'New idea taught in two small chunks. Teacher works an example aloud after each.', '2, 4'],
            ['18–23', 'Check', 'Cold-called questions and mini whiteboards. A hinge question decides whether to move on.', '3, 6'],
            ['23–35', 'Guided practice', 'Learners try similar problems with a partly worked example on the board; teacher circulates.', '5, 7, 8'],
            ['35–47', 'Independent practice', 'Mixed problems, including a few from earlier topics.', '9'],
            ['47–50', 'Exit check', 'Two questions on today’s idea to plan tomorrow’s review.', '6'],
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Not a script',
          text: 'Rosenshine was describing what effective teachers tend to do, not a fixed lesson template. The balance shifts with the content and how expert learners are: the more they know, the less modelling and guidance they need.',
        },
      ],
    },
  ],
  sources: [
    'Rosenshine, B. (2012). Principles of instruction: Research-based strategies that all teachers should know. *American Educator, 36*(1), 12–19, 39.',
    'Sherrington, T. (2019). *Rosenshine’s principles in action*. John Catt.',
    'Rosenshine, B., & Stevens, R. (1986). Teaching functions. In M. C. Wittrock (Ed.), *Handbook of research on teaching* (3rd ed., pp. 376–391). Macmillan.',
  ],
  related: ['teaching/techniques/instruction/i-do-we-do-you-do', 'teaching/techniques/instruction/worked-examples', 'teaching/techniques/questioning/checking-understanding', 'teaching/guides/planning/lesson-plan'],
}

export default guide
