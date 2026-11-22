import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'Feeling nervous before an exam is normal, and some arousal helps you focus. But for some learners, anxiety becomes so strong that it blocks their thinking and hides what they know. There are simple, evidence-based ways to keep nerves working for you.',
  nutshell: [
    'Worry uses up **working memory**, the same space you need to think.',
    '**Preparation with self-testing** reduces anxiety, because you know what you know.',
    '**Reappraise** the racing heart as your body getting ready, not as a sign of failure.',
    '**Write out your worries** for ten minutes before an exam; it can free up mental space.',
    'If anxiety is severe or lasting, talk to someone; help is available.',
  ],
  sections: [
    {
      id: 'why',
      title: 'Why anxiety hurts performance',
      blocks: [
        {
          t: 'p',
          text: 'Anxious thoughts ("I’m going to fail", "everyone else knows this") compete for working memory, the limited mental space you use to reason and recall. Sian Beilock’s research on "choking under pressure" shows that worry can take up exactly the resources a hard problem needs.',
        },
        {
          t: 'cards',
          cols: 3,
          items: [
            { title: 'Thoughts', body: 'Worry, catastrophising, comparing yourself with others, blanking.' },
            { title: 'Body', body: 'Racing heart, sweating, butterflies, shaky hands, trouble sleeping.' },
            { title: 'Behaviour', body: 'Avoiding revision, cramming all night, rushing, rereading one question over and over.' },
          ],
        },
      ],
    },
    {
      id: 'before',
      title: 'Weeks before',
      blocks: [
        {
          t: 'list',
          items: [
            '**Revise with self-testing.** Learners who practise retrieval report feeling less anxious about tests (Agarwal et al., 2014). You know what you can do because you have done it.',
            '**Practise under exam conditions** with past papers, so the real thing feels familiar.',
            '**Make a plan** so you are not worrying about what you have not covered. See [revision plans](@exams/revision-plan).',
            '**Look after sleep, exercise and food.** See [sleep and memory](@memory/sleep-and-body).',
            '**Challenge catastrophic thoughts**: "If this exam goes badly, what would actually happen? What would I do then?"',
          ],
        },
      ],
    },
    {
      id: 'day',
      title: 'On the day',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Reappraise the arousal', body: 'Tell yourself: "This is my body getting ready to perform." In one study, students told that arousal can improve performance scored higher on a maths test (Jamieson et al., 2010).' },
            { title: 'Expressive writing', body: 'Spend ten minutes writing freely about your worries just before the exam. In a study by Ramirez and Beilock (2011), this improved the scores of highly anxious students.' },
            { title: 'Slow breathing', body: 'Breathe in for 4 seconds, hold for 4, out for 4, hold for 4. Slow, longer out-breaths calm the body.' },
            { title: 'Start with a win', body: 'Begin with a question you can answer, to build momentum.' },
            { title: 'Blank mind?', body: 'Move to another question, jot down anything related to the topic, and come back. Memories often return with a cue.' },
            { title: 'Avoid the crowd', body: 'Skip the anxious last-minute chatter outside the exam room if it winds you up.' },
          ],
        },
      ],
    },
    {
      id: 'help',
      title: 'When to get help',
      blocks: [
        {
          t: 'callout',
          tone: 'note',
          text: 'If anxiety is stopping you revising, sleeping or eating, causes panic attacks, or lasts well beyond exams, talk to a teacher, school counsellor, doctor or someone you trust. Schools can often arrange support or exam access arrangements. You do not have to handle it alone.',
        },
      ],
    },
  ],
  sources: [
    'Ramirez, G., & Beilock, S. L. (2011). Writing about testing worries boosts exam performance in the classroom. *Science, 331*(6014), 211–213.',
    'Jamieson, J. P., Mendes, W. B., Blackstock, E., & Schmader, T. (2010). Turning the knots in your stomach into bows: Reappraising arousal improves performance on the GRE. *Journal of Experimental Social Psychology, 46*(1), 208–212.',
    'Agarwal, P. K., D’Antonio, L., Roediger, H. L., McDermott, K. B., & McDaniel, M. A. (2014). Classroom-based programs of retrieval practice reduce middle school and high school students’ test anxiety. *Journal of Applied Research in Memory and Cognition, 3*(3), 131–139.',
    'Beilock, S. (2010). *Choke: What the secrets of the brain reveal about getting it right when you have to*. Free Press.',
  ],
  related: ['exams/the-day', 'habits/wellbeing', 'memory/sleep-and-body'],
}

export default guide
