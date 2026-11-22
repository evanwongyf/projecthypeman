import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Motivation is why a learner starts, keeps going and comes back. Several theories each explain part of it; together they give a practical toolkit for making effort feel worthwhile.',
  nutshell: [
    '**Self-determination theory**: learners are most motivated when they feel **autonomy, competence and relatedness**.',
    '**Expectancy-value theory**: effort ≈ "can I succeed?" × "is it worth it?". If either is near zero, effort collapses.',
    'Rewards for things learners already enjoy can reduce their interest; rewards work better for dull but necessary tasks.',
    'How learners explain success and failure matters: effort and strategy are things they can change.',
    'Success often produces motivation, not only the other way round. Help learners get good, and interest follows.',
  ],
  sections: [
    {
      id: 'sdt',
      title: 'Self-determination theory',
      lead: 'Three needs behind lasting motivation.',
      blocks: [
        {
          t: 'p',
          text: 'Edward Deci and Richard Ryan developed self-determination theory (SDT) from the 1970s onward. It proposes three basic psychological needs. When a setting supports them, people tend to be more motivated, persistent and well.',
        },
        {
          t: 'cards',
          cols: 3,
          items: [
            { title: 'Autonomy', body: 'Feeling that you have a say and act by choice. Not the same as independence: you can choose to rely on a teacher. Support it with meaningful choices and reasons for tasks.' },
            { title: 'Competence', body: 'Feeling effective and able to improve. Support it with well-pitched challenge, clear goals and feedback showing progress.' },
            { title: 'Relatedness', body: 'Feeling connected to and cared for by others. Support it with warm relationships and a class where everyone belongs.' },
          ],
        },
        {
          t: 'levels',
          items: [
            { name: 'Amotivation', body: '"What’s the point?" No intention to act.' },
            { name: 'External regulation', body: '"I do it to get the reward or avoid trouble."' },
            { name: 'Introjected regulation', body: '"I do it because I’d feel guilty or ashamed not to."' },
            { name: 'Identified regulation', body: '"I do it because I see it matters for my goals."' },
            { name: 'Integrated regulation', body: '"It fits who I am and what I value."' },
            { name: 'Intrinsic motivation', body: '"I do it because it is interesting or enjoyable in itself."' },
          ],
          caption: 'SDT’s continuum from controlled to autonomous motivation. Not every task can be intrinsically fun, but you can help learners move from "because I have to" toward "because it matters to me".',
        },
      ],
    },
    {
      id: 'rewards',
      title: 'Rewards and the overjustification effect',
      lead: 'When rewards backfire.',
      blocks: [
        {
          t: 'p',
          text: 'In a classic study (Lepper, Greene & Nisbett, 1973), preschoolers who liked drawing were promised a certificate for drawing. Later, in free time, they drew **less** than children who had not been promised a reward. A large meta-analysis (Deci, Koestner & Ryan, 1999) found that expected, tangible rewards given for doing an interesting task tend to reduce intrinsic motivation.',
        },
        {
          t: 'dodont',
          do: [
            'Use informational praise: "Your topic sentences are much clearer now."',
            'Keep rewards for tasks that are not interesting in themselves, and fade them.',
            'Give unexpected recognition after the fact rather than promising rewards in advance.',
            'Explain *why* a dull task matters (supports identified motivation).',
          ],
          dont: [
            'Pay learners with points or prizes to read books they already enjoy.',
            'Use rewards as control: "if you finish, then you get…" for everything.',
            'Praise ability ("you’re so clever"), which can make learners avoid challenges that might disprove it.',
          ],
        },
      ],
    },
    {
      id: 'expectancy',
      title: 'Expectancy-value theory',
      lead: '"Can I do it?" and "Do I want to?"',
      blocks: [
        {
          t: 'p',
          text: 'Jacquelynne Eccles and colleagues (1983; Eccles & Wigfield, 2002) describe motivation as depending on two beliefs: **expectancy**, whether I think I can succeed, and **value**, whether success is worth it to me. The two multiply: high value with no hope of success still produces little effort.',
        },
        {
          t: 'terms',
          items: [
            { term: 'Intrinsic value', def: 'Enjoyment of the task itself.' },
            { term: 'Attainment value', def: 'Importance to my identity: "being good at this matters to who I am".' },
            { term: 'Utility value', def: 'Usefulness for my goals. Asking learners to write about how a topic connects to their lives has raised interest and grades in several studies (Hulleman & Harackiewicz, 2009).' },
            { term: 'Cost', def: 'What I give up: time, effort, the risk of looking foolish. High perceived cost reduces motivation.' },
          ],
        },
      ],
    },
    {
      id: 'beliefs',
      title: 'Attributions and mindset',
      lead: 'How learners explain their results.',
      blocks: [
        {
          t: 'p',
          text: 'Bernard Weiner’s **attribution theory** looks at how people explain success and failure. Explanations that are internal but changeable, like effort and strategy, keep motivation alive. Explanations that are stable and uncontrollable, like "I’m just not a maths person", shut it down.',
        },
        {
          t: 'table',
          head: ['Explanation', 'Can I control it?', 'Will it change?', 'Effect after failure'],
          rows: [
            ['"I didn’t revise enough"', 'Yes', 'Yes', 'Try harder next time'],
            ['"I used the wrong method"', 'Yes', 'Yes', 'Try a different strategy'],
            ['"The test was unfair"', 'No', 'Maybe', 'Frustration, little change'],
            ['"I’m not smart enough"', 'No', 'No', 'Give up'],
          ],
        },
        {
          t: 'p',
          text: 'Carol Dweck’s **growth mindset** work (2006) built on this: learners who believe ability can grow tend to persist more. Large studies since have found that brief mindset interventions have small average effects, somewhat larger for struggling learners (Sisk et al., 2018; Yeager et al., 2019). Posters about mindset do little; what counts is how teachers respond to effort, strategy and mistakes day to day.',
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Praise the process, and mean it',
          text: 'Praise effective effort and strategy ("You tried three methods before this one worked"), not effort alone. Praising effort that did not work, with no advice, can signal that you think the learner cannot do better.',
        },
      ],
    },
    {
      id: 'toolkit',
      title: 'A motivation toolkit',
      lead: 'Moves for everyday lessons.',
      blocks: [
        {
          t: 'checklist',
          items: [
            'Start new topics with a task learners can succeed at with effort.',
            'Make progress visible: before-and-after work, tracked scores, "a week ago you couldn’t do this".',
            'Explain why each task matters, in terms learners care about.',
            'Offer genuine choices where the learning goal allows it.',
            'Use learners’ names and interests; make everyone feel they belong.',
            'Respond to failure by discussing strategy, not ability.',
            'Keep extrinsic rewards small, occasional and linked to effort or progress.',
            'Set goals that are specific and close enough to see.',
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Success breeds motivation',
          text: 'It is tempting to think learners must be motivated before they can succeed. Often it runs the other way: getting good at something makes it more enjoyable. Good teaching is itself one of the strongest motivators.',
        },
      ],
    },
  ],
  sources: [
    'Ryan, R. M., & Deci, E. L. (2000). Self-determination theory and the facilitation of intrinsic motivation, social development, and well-being. *American Psychologist, 55*(1), 68–78.',
    'Deci, E. L., Koestner, R., & Ryan, R. M. (1999). A meta-analytic review of experiments examining the effects of extrinsic rewards on intrinsic motivation. *Psychological Bulletin, 125*(6), 627–668.',
    'Lepper, M. R., Greene, D., & Nisbett, R. E. (1973). Undermining children’s intrinsic interest with extrinsic reward. *Journal of Personality and Social Psychology, 28*(1), 129–137.',
    'Eccles, J. S., & Wigfield, A. (2002). Motivational beliefs, values, and goals. *Annual Review of Psychology, 53*, 109–132.',
    'Weiner, B. (1985). An attributional theory of achievement motivation and emotion. *Psychological Review, 92*(4), 548–573.',
    'Dweck, C. S. (2006). *Mindset: The new psychology of success*. Random House.',
    'Yeager, D. S., et al. (2019). A national experiment reveals where a growth mindset improves achievement. *Nature, 573*, 364–369.',
  ],
  related: ['teaching/theories/humanism', 'teaching/theories/social-learning', 'teaching/assessment/feedback'],
}

export default guide
