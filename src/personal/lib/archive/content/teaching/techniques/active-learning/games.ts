import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Games can make practice more engaging and give instant feedback, but they can also swap learning for excitement. The question is not "is it fun?" but "what are learners thinking about while they play?".',
  nutshell: [
    '**Quiz games** can be a good form of retrieval practice, if designed for accuracy over speed.',
    '**Gamification** (points, badges, leaderboards) has mixed effects; leaderboards can demotivate those at the bottom.',
    '**Serious games** that embed the learning in play can work well for some content.',
    'Always ask: does winning depend on the thinking we want learners to practise?',
  ],
  sections: [
    {
      id: 'quiz-games',
      title: 'Quiz games',
      blocks: [
        {
          t: 'p',
          text: 'Platforms like Kahoot and Quizizz turn questions into a game. Because learners must answer from memory, they can deliver the benefits of [retrieval practice](@teaching/techniques/learning-strategies/retrieval-practice). But common settings reward speed, which favours fast processors and encourages guessing.',
        },
        {
          t: 'dodont',
          do: [
            'Turn off or reduce speed-based points; reward accuracy.',
            'Include questions on older content for spacing.',
            'Pause after tricky questions to discuss the wrong answers.',
            'Use team modes so everyone contributes.',
          ],
          dont: [
            'Use the same game every lesson until the novelty wears off.',
            'Only ask recall questions; include explanation and application.',
            'Let the excitement replace discussion of misconceptions.',
          ],
        },
      ],
    },
    {
      id: 'gamification',
      title: 'Points, badges and leaderboards',
      blocks: [
        {
          t: 'p',
          text: 'Reviews of gamification in education find small to moderate positive effects on average, with wide variation depending on design and context (Sailer & Homner, 2020). Rewards can reduce interest in tasks learners already enjoy (see [motivation](@teaching/theories/motivation)), and public leaderboards tend to motivate those near the top and discourage those near the bottom.',
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Better game elements',
          text: 'Progress bars toward mastery, personal bests, streaks and team goals recognise improvement and effort without ranking learners against each other. Studytubby’s own streaks work on this principle.',
        },
      ],
    },
    {
      id: 'serious',
      title: 'Serious games and simulations',
      blocks: [
        {
          t: 'p',
          text: 'A meta-analysis of "serious games" (games designed for learning) found they were more effective than conventional instruction for learning and retention, though not more motivating, and worked best when combined with other instruction and played over several sessions (Wouters et al., 2013). Simulations of experiments, economies or ecosystems let learners explore systems that would be impossible to try for real.',
        },
      ],
    },
  ],
  sources: [
    'Sailer, M., & Homner, L. (2020). The gamification of learning: A meta-analysis. *Educational Psychology Review, 32*(1), 77–112.',
    'Wouters, P., van Nimwegen, C., van Oostendorp, H., & van der Spek, E. D. (2013). A meta-analysis of the cognitive and motivational effects of serious games. *Journal of Educational Psychology, 105*(2), 249–265.',
  ],
  related: ['teaching/techniques/learning-strategies/retrieval-practice', 'teaching/theories/motivation', 'teaching/techniques/active-learning/peer-instruction'],
}

export default guide
