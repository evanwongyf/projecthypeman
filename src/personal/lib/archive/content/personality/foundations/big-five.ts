import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The Big Five (Five-Factor Model) is the personality model most researchers use. It came from analysing the words people use to describe each other, and it measures five traits on continuous scales rather than putting people into types. It predicts real outcomes, health, job performance, relationships, better than the MBTI, and four of its traits line up closely with the MBTI scales.',
  sections: [
    {
      id: 'traits',
      title: 'The five traits',
      blocks: [
        { t: 'table', head: ['Trait', 'High scorers', 'Low scorers', 'MBTI link', 'Predicts'], rows: [
          ['Openness', 'Curious, imaginative, open to new ideas', 'Practical, conventional', 'N vs S', 'Creativity, interest in arts and ideas'],
          ['Conscientiousness', 'Organised, disciplined, reliable', 'Spontaneous, flexible, careless', 'J vs P', 'Grades, job performance, health, longevity'],
          ['Extraversion', 'Sociable, energetic, assertive', 'Reserved, quiet', 'E vs I', 'Leadership emergence, positive mood'],
          ['Agreeableness', 'Kind, trusting, cooperative', 'Competitive, sceptical, blunt', 'F vs T', 'Relationship quality, teamwork'],
          ['Neuroticism', 'Anxious, moody, sensitive to stress', 'Calm, emotionally stable', 'none (the “-A/-T” in some online tests)', 'Mental health, relationship satisfaction'],
        ] },
        { t: 'p', text: '**Neuroticism** is the trait most strongly linked to relationship dissatisfaction, and the MBTI leaves it out entirely. Its absence is one reason MBTI descriptions feel so positive.' },
      ],
    },
    {
      id: 'relationships',
      title: 'What the Big Five says about compatibility',
      blocks: [
        { t: 'list', items: [
          'Partners’ **own** traits matter far more than how similar they are: low neuroticism, high agreeableness and high conscientiousness in either partner predict happier relationships (Malouff et al. 2010).',
          'Similarity effects are small: being alike in personality adds very little to satisfaction once each person’s traits are accounted for (Dyrenforth et al. 2010).',
          'People do tend to pair with partners similar in values, education and attitudes more than personality.',
        ] },
        { t: 'callout', tone: 'fact', title: 'The upshot', text: 'Any two types can have a great relationship. Kindness, emotional stability, reliability and good communication matter more than letters.' },
      ],
    },
  ],
  sources: [
    'McCrae, R. R. & John, O. P. (1992). An introduction to the five-factor model and its applications. Journal of Personality 60(2).',
    'Malouff, J. M. et al. (2010). The Five-Factor Model of personality and relationship satisfaction of intimate partners: a meta-analysis. Journal of Research in Personality 44(1).',
    'Dyrenforth, P. S. et al. (2010). Predicting relationship and life satisfaction from personality in nationally representative samples from three countries. Journal of Personality and Social Psychology 99(4).',
    'Roberts, B. W. et al. (2007). The power of personality. Perspectives on Psychological Science 2(4).',
  ],
  related: ['personality/start-here', 'personality/compatibility/how-it-works'],
}

export default guide
