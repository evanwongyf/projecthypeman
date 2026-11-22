import type { Guide } from '../../../../guide'
import { a, b, gk } from '../../../../football-shapes'

const guide: Guide = {
  intro:
    'Every team chooses, implicitly, between keeping the ball and moving it quickly toward goal. At one end is the possession game of Barcelona and Spain, which can complete more than six hundred passes in a match; at the other is the direct game, route one, in which the ball goes long and forward in two or three passes. Neither is right. Charles Reep, an RAF officer who analysed thousands of matches in the 1950s, found that most goals followed short sequences and concluded that long possession was wasteful. The conclusion was flawed, but the debate he started is still alive. This guide sets out the styles, the arithmetic that shows why long sequences are risky, and the measures used to place a team on the spectrum.',
  nutshell: [
    'A pass sequence of \\(n\\) passes with completion rate \\(p\\) succeeds with probability \\(p^n\\): **0.9³ = 73%**, **0.9¹⁰ = 35%**, **0.9²⁰ = 12%**.',
    '**Reep’s finding**: most goals came from sequences of three passes or fewer; but most possessions are short anyway, so the finding says little about efficiency.',
    'Styles: **possession (positional)**, **vertical**, **direct (long ball)**, **counter-attacking**; real teams mix them.',
    '**Measures**: average pass length, share of long balls, **direct speed** (metres gained toward goal per second), sequence length, possession share.',
    '**Possession is a means, not an end**: it protects the team from conceding and creates attacks; it does not itself win matches.',
  ],
  sections: [
    {
      id: 'styles',
      title: 'The styles',
      lead: 'A spectrum from patient to direct.',
      blocks: [
        {
          t: 'table',
          head: ['Style', 'Idea', 'Exponents', 'Weakness'],
          rows: [
            ['Positional / possession', 'Control the ball and the space; the opponent defends while the team waits for the free player', 'Cruyff and Guardiola’s Barcelona, Spain 2008–12, Guardiola’s Bayern and City', 'Slow against deep blocks; vulnerable to counters if the rest defence fails'],
            ['Vertical', 'Move the ball forward quickly while keeping some control', 'Klopp’s Liverpool, Conte’s teams, Napoli under Spalletti', 'Needs players who can combine at speed'],
            ['Direct / route one', 'Play long to a target man and compete for the second ball', 'Wimbledon’s "Crazy Gang", Graham Taylor’s England, Bolton under Allardyce', 'Gives possession away; relies on aerial strength'],
            ['Counter-attacking', 'Defend deep, win the ball, attack at once', 'Mourinho’s Inter 2010, Leicester 2015–16, Italy', 'Gives the opponent the ball and the territory'],
            ['Hybrid', 'Possession in some phases, direct in others', 'Most modern teams', 'Requires versatility'],
          ],
        },
        {
          t: 'pitch',
          title: 'Two ways to get from goalkeeper to shot',
          view: 'full',
          players: [gk(8, 50), a(24, 30), a(24, 70), a(40, 50), a(60, 40), a(76, 50, '9'), b(56, 36), b(56, 64)],
          arrows: [{ from: [8, 50], to: [24, 32], kind: 'pass' }, { from: [24, 32], to: [40, 50], kind: 'pass' }, { from: [40, 50], to: [60, 42], kind: 'pass' }, { from: [60, 42], to: [76, 50], kind: 'pass' }, { from: [8, 52], to: [70, 50], kind: 'cross', label: 'direct' }],
          caption: 'A possession sequence with four passes (white) and a direct ball of 60 metres (curved). The second takes less time and carries less risk of a loss in your own half, but loses the ball more often.',
        },
      ],
    },
    {
      id: 'math',
      title: 'The arithmetic of long sequences',
      lead: 'Why possession is hard.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`P(\text{sequence of } n \text{ passes})=p^{n}`,
          caption: 'If each pass succeeds with probability p, a sequence of n passes succeeds with probability pⁿ.',
          where: [{ sym: 'p', def: 'the pass completion rate' }, { sym: 'n', def: 'the number of consecutive passes' }],
          syntax: [{ sym: 'p^{n}', say: 'the chance of completing every pass in the sequence. Effect: a small drop in p compounds quickly over many passes. Why: every pass is a chance to lose the ball.' }],
          worked: {
            title: 'A 90% passing team',
            steps: ['Three passes: 0.9³ = 0.729 (73%).', 'Ten passes: 0.9¹⁰ = 0.349 (35%).', 'Twenty passes: 0.9²⁰ = 0.122 (12%).'],
            answer: 'Even a good passing team loses most possessions before twenty passes; the best possession teams do it by making most of their passes easy ones (above 90 to 95% completion) and by pressing to win the ball back quickly when they lose it.',
          },
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Reep and the flawed conclusion',
          text: 'Charles Reep and Bernard Benjamin (1968) analysed thousands of matches and found that about 80% of goals came from moves with three passes or fewer. Reep concluded that teams should play long and direct. The logic fails: most possessions are short whatever the tactic, so most goals will follow short sequences; the number that matters is goals per possession of each length, which the data did not show. The idea nevertheless influenced English football for decades (the Charles Hughes era at the FA).',
        },
        { t: 'bars', title: 'Chance of completing n consecutive passes at 90% accuracy', items: [{ label: '3 passes', value: 73 }, { label: '5 passes', value: 59 }, { label: '10 passes', value: 35 }, { label: '15 passes', value: 21 }, { label: '20 passes', value: 12 }], unit: '%', min: 0, max: 100, decimals: 0 },
      ],
    },
    {
      id: 'measures',
      title: 'Measuring a style',
      lead: 'Numbers to place a team on the spectrum.',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Average pass length', tag: 'metres', body: 'Short for positional teams (about 17 to 19 m in many data sets), longer for direct ones.' },
            { title: 'Long-ball share', tag: 'proportion of passes over 30 m', body: 'A direct team plays a much higher share of long balls.' },
            { title: 'Direct speed', tag: 'metres per second', body: 'The speed at which the ball moves toward the opponent’s goal in a possession.' },
            { title: 'Sequence length', tag: 'passes per possession', body: 'The average number of passes in a sequence; positional teams have longer ones.' },
          ],
        },
        { t: 'ftbl-viz', viz: 'passing-network' },
      ],
    },
  ],
  sources: [
    'Reep, C. & Benjamin, B. (1968). Skill and chance in association football. *Journal of the Royal Statistical Society A*, 131(4), 581–585.',
    'Hughes, M. & Franks, I. (2005). Analysis of passing sequences, shots and goals in soccer. *Journal of Sports Sciences*, 23(5), 509–514.',
    'Anderson, C. & Sally, D. (2013). *The Numbers Game*. Penguin.',
    'Wilson, J. (2008). *Inverting the Pyramid: The History of Football Tactics*. Orion.',
  ],
  related: ['sports/football/passing/passing-networks', 'sports/football/schools/cruyff-guardiola-and-positional-play', 'sports/football/tactics/transitions-and-counter-attacks'],
}

export default guide
