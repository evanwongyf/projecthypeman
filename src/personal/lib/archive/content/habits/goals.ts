import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'Setting goals helps, but only certain kinds. Specific, challenging goals beat vague "do your best" ones, and turning a goal into an if-then plan makes it far more likely you will act on it.',
  nutshell: [
    '**Specific and challenging** goals lead to better performance than vague ones.',
    'Set **process goals** (what you will do) as well as **outcome goals** (what you want).',
    '**Implementation intentions**: "If it is 4pm on Monday, then I will do 10 maths questions at my desk."',
    '**WOOP**: Wish, Outcome, Obstacle, Plan. Imagining the obstacle makes the plan stronger.',
  ],
  sections: [
    {
      id: 'specific',
      title: 'Specific beats vague',
      blocks: [
        {
          t: 'p',
          text: 'Edwin Locke and Gary Latham reviewed decades of research and found that specific, challenging goals consistently lead to higher performance than easy or vague goals like "do your best" (Locke & Latham, 2002). Specific goals focus attention, increase effort and persistence, and make progress visible.',
        },
        {
          t: 'table',
          head: ['Vague', 'Specific outcome', 'Specific process'],
          rows: [
            ['Do better in maths', 'Get at least a grade 7 in the June exam', 'Do 20 mixed practice questions every Tuesday and Thursday'],
            ['Read more', 'Finish 6 books this term', 'Read for 20 minutes before bed each night'],
            ['Revise biology', 'Score 80% on the next cells test', 'Blurt one topic and do 10 flashcards daily'],
          ],
          caption: 'Process goals are fully in your control; outcome goals give direction. Use both.',
        },
      ],
    },
    {
      id: 'if-then',
      title: 'Implementation intentions',
      blocks: [
        {
          t: 'p',
          text: 'Peter Gollwitzer showed that people who form "if-then" plans, specifying when, where and how they will act, are much more likely to follow through than those who simply intend to. A meta-analysis of 94 studies found a medium-to-large effect on reaching goals (Gollwitzer & Sheeran, 2006).',
        },
        {
          t: 'example',
          title: 'Turning intentions into if-then plans',
          lines: [
            { label: 'Intention', text: 'I will revise more.' },
            { label: 'If-then', text: 'If it is 5pm on a weekday, then I will sit at the kitchen table and do one 25-minute revision block.' },
            { label: 'Obstacle plan', text: 'If I feel like checking my phone, then I will write the thought down and keep going.' },
          ],
        },
      ],
    },
    {
      id: 'woop',
      title: 'WOOP',
      lead: 'Gabriele Oettingen’s mental contrasting.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Wish', body: 'What do you want to achieve? Make it challenging but possible. *I want to pass my driving theory test.*' },
            { title: 'Outcome', body: 'Imagine the best result vividly. *I’d feel proud and could book my practical test.*' },
            { title: 'Obstacle', body: 'What inside you is most likely to get in the way? *I put off revising because the questions feel boring.*' },
            { title: 'Plan', body: 'An if-then plan for the obstacle. *If I feel bored, then I will do just 10 questions on the app and stop.*' },
          ],
        },
        {
          t: 'p',
          text: 'Positive fantasies alone can actually reduce effort, because they feel like achievement already. Contrasting the wish with the real obstacle is what makes it motivating (Oettingen, 2014).',
        },
      ],
    },
  ],
  sources: [
    'Locke, E. A., & Latham, G. P. (2002). Building a practically useful theory of goal setting and task motivation. *American Psychologist, 57*(9), 705–717.',
    'Gollwitzer, P. M., & Sheeran, P. (2006). Implementation intentions and goal achievement: A meta-analysis of effects and processes. *Advances in Experimental Social Psychology, 38*, 69–119.',
    'Oettingen, G. (2014). *Rethinking positive thinking: Inside the new science of motivation*. Current.',
  ],
  related: ['habits/habits', 'habits/procrastination', 'teaching/theories/motivation'],
}

export default guide
