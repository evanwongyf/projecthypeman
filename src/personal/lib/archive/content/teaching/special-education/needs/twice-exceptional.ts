import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Twice-exceptional ("2e") learners are gifted and also have a disability or learning difficulty, such as dyslexia, ADHD or autism. Their strengths can hide their difficulties, and their difficulties can hide their strengths, so many are never identified as either.',
  nutshell: [
    '**Masking** cuts both ways: ability compensates for difficulty, and difficulty lowers visible achievement.',
    'Typical profile: very uneven. Advanced reasoning or vocabulary alongside slow reading, poor organisation or messy writing.',
    'Support needs a **strength-based** approach: challenge their gifts **and** support their difficulties.',
    'Watch for frustration, anxiety and behaviour that come from the gap between what they can think and what they can produce.',
  ],
  sections: [
    {
      id: 'masking',
      title: 'Three patterns of masking',
      blocks: [
        {
          t: 'cards',
          cols: 3,
          items: [
            { title: 'Gifts noticed, difficulty hidden', body: 'The learner works around their difficulty and performs at an average or above-average level, so no one sees the struggle, or the potential being held back.' },
            { title: 'Difficulty noticed, gifts hidden', body: 'The learner is identified for their disability; their high ability goes unnoticed and they get little challenge.' },
            { title: 'Both hidden', body: 'Ability and difficulty cancel each other out, and the learner looks "average". Often the most overlooked group.' },
          ],
        },
      ],
    },
    {
      id: 'signs',
      title: 'Signs to notice',
      blocks: [
        {
          t: 'list',
          items: [
            'A large gap between spoken and written work.',
            'Deep knowledge or reasoning in areas of interest, with weak basic skills.',
            'Frustration, perfectionism or avoidance of tasks that expose weaknesses.',
            'Boredom with repetitive work combined with difficulty completing it.',
            'Strong performance on complex tasks but errors on simple ones.',
            'Behaviour problems that appear when tasks are either too easy or blocked by a difficulty.',
          ],
        },
      ],
    },
    {
      id: 'support',
      title: 'Support',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Provide challenge in the learner’s areas of strength, even if basic skills lag.',
            'Remove barriers with accommodations (typing, audio texts, extra time) so ideas can show. See [accommodations](@teaching/special-education/foundations/accommodations).',
            'Teach compensatory strategies explicitly: organisation, note-taking, [executive function](@teaching/special-education/strategies/executive-function) tools.',
            'Use interests as a route into harder skills.',
            'Help the learner understand their own profile.',
          ],
          dont: [
            'Withhold advanced work until basic skills catch up.',
            'Assume high ability means no support is needed.',
            'Assume a diagnosis means a learner cannot handle challenge.',
            'Judge understanding only by written work.',
          ],
        },
      ],
    },
  ],
  sources: [
    'Reis, S. M., Baum, S. M., & Burke, E. (2014). An operational definition of twice-exceptional learners: Implications and applications. *Gifted Child Quarterly, 58*(3), 217–230.',
    'Baum, S. M., Schader, R. M., & Owen, S. V. (2017). *To be gifted and learning disabled* (3rd ed.). Prufrock Press.',
  ],
  related: ['teaching/differentiation/advanced', 'teaching/special-education/needs/dyslexia', 'teaching/special-education/needs/adhd'],
}

export default guide
