import type { Guide } from '../../../guide'
import { RELATIONS } from '../../../../personality/compat'

const guide: Guide = {
  intro:
    'Ask online which types are “compatible” and you will find confident charts that contradict each other. This guide explains the ideas underneath, similarity, complementarity, shared functions, opposite functions, sets out the sixteen relationship patterns used on this shelf, and is honest about what research does and does not support.',
  nutshell: [
    '**Similarity** makes understanding easy: shared letters mean shared assumptions. **Difference** brings balance and growth, and friction.',
    'S/N is usually treated as the most important letter for easy conversation; E/I and J/P shape daily rhythms; T/F shapes how conflicts feel.',
    'Research finds that **each partner’s kindness, stability and reliability** predict relationship happiness far better than any type match.',
  ],
  sections: [
    {
      id: 'scores',
      title: 'How the readings are built',
      blocks: [
        { t: 'list', items: [
          '**Ease** starts at 100 and drops for each differing letter (E/I 10, S/N 18, T/F 12, J/P 10), rises 4 for each shared function in the top two, and drops 6 when one person’s dominant function is the other’s inferior.',
          '**Stretch** rises when one person’s top functions sit in the other’s bottom two (each covers the other’s blind side) and with each differing letter.',
          'Neither score means “good” or “bad”: high ease means comfort; high stretch means growth and friction.',
        ] },
        { t: 'mbti', viz: 'matrix' },
      ],
    },
    {
      id: 'patterns',
      title: 'The sixteen relationship patterns',
      blocks: [
        { t: 'table', head: ['Letters that differ', 'Pattern', 'What it means'], rows: Object.entries(RELATIONS).map(([mask, r]) => [
          mask === '0000' ? 'none' : mask.split('').map((d, i) => (d === '1' ? ['E/I', 'S/N', 'T/F', 'J/P'][i] : '')).filter(Boolean).join(', '),
          r.name,
          r.body,
        ]) },
      ],
    },
    {
      id: 'popular',
      title: 'Popular pairings, examined',
      blocks: [
        { t: 'cards', cols: 2, items: [
          { tag: 'Popular claim', title: '“Golden pairs” (INTJ–ENFP, INFJ–ENTP, ISTJ–ESFP…)', body: 'Online folklore says types sharing S/N but differing on the other three are ideal. The logic: shared perception means easy conversation, while differences balance each other. A reasonable story, never tested.' },
          { tag: 'Popular claim', title: '“Intuitives and Sensors can’t date”', body: 'S/N differences are real and can make conversation effortful, but plenty of mixed couples thrive. Effort spent understanding each other is a feature, not a flaw.' },
          { tag: 'Popular claim', title: '“Same type is best”', body: 'Same-type pairs understand each other quickly but share blind spots. Studies of MBTI couples find a slight tendency toward similarity in choosing partners and no clear link to satisfaction.' },
          { tag: 'Popular claim', title: '“Socionics duality”', body: 'Socionics, a separate system from the Soviet Union, defines a “dual” relationship as ideal. Its letters do not map cleanly onto MBTI for introverts, and its claims are also untested.' },
        ] },
      ],
    },
  ],
  sources: [
    'Tieger, P. D. & Barron-Tieger, B. (2000). Just Your Type: Create the Relationship You’ve Always Wanted Using the Secrets of Personality Type. Little, Brown.',
    'Marioles, N. S., Strickert, D. P. & Hammer, A. L. (1996). Attraction, satisfaction, and psychological types of couples. Journal of Psychological Type 36.',
    'Malouff, J. M. et al. (2010). The Five-Factor Model of personality and relationship satisfaction. Journal of Research in Personality 44(1).',
  ],
  related: ['personality/compatibility/pair-explorer', 'personality/compatibility/all-pairs'],
}

export default guide
