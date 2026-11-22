import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'How do you rank competitors who never play each other directly, chess players across decades, national football teams across continents, esports players across regions? Arpad Elo, a physics professor and chess player, built an elegant statistical answer in the 1960s that has since spread into almost every competitive domain with a ranking problem.',
  nutshell: [
    'The **Elo system** gives every competitor a single rating number; the difference between two ratings directly predicts the probability of each winning a head-to-head match.',
    'After a match, both ratings update: the winner gains points, the loser loses them, and the size of the swing depends on how **surprising** the result was.',
    'Beating a much higher-rated opponent gains far more rating points than beating a much lower-rated one, the system is self-correcting toward accurate relative strength over time.',
    'Elo-style systems (and refinements like Glicko and TrueSkill) now rank chess, football, esports, and are built into many online games\' matchmaking.',
  ],
  sections: [
    {
      id: 'the-maths',
      title: 'The maths of Elo',
      blocks: [
        {
          t: 'math',
          tex: String.raw`E_A = \frac{1}{1 + 10^{(R_B - R_A)/400}}`,
          where: [
            { sym: 'R_A, R_B', def: 'The current ratings of players A and B' },
            { sym: 'E_A', def: 'The expected score (win probability, in a two-outcome game) for player A' },
          ],
          caption: 'A 400-point rating gap corresponds to the higher-rated player being expected to win about 10 times out of 11 (≈91%); a 200-point gap to roughly 76%; equal ratings predict a 50/50 outcome. The constant 400 was chosen by Elo so that rating differences map onto intuitive, roughly familiar win-probability figures.',
        },
        {
          t: 'math',
          tex: String.raw`R_A' = R_A + K\,(S_A - E_A)`,
          where: [
            { sym: 'S_A', def: 'The actual result: 1 for a win, 0.5 for a draw, 0 for a loss' },
            { sym: 'K', def: 'The "K-factor": how much a single result can move the rating (larger K = faster-reacting ratings, more volatility)' },
          ],
          caption: 'The update rule: if a player does better than expected (S_A > E_A), their rating rises; worse than expected, it falls. Crucially, the size of the swing is proportional to *how surprising* the result was, a heavy favourite winning barely moves their rating, while a huge upset moves it substantially.',
        },
        {
          t: 'example',
          title: 'An upset win',
          lines: [
            { label: 'Ratings', text: 'Player A: 2400, Player B: 2000 (a big gap)' },
            { label: 'Expected score for B', text: '\\(E_B = \\dfrac{1}{1 + 10^{(2400-2000)/400}} = \\dfrac{1}{1+10} \\approx 0.091\\): B is expected to win only about 9% of the time' },
            { label: 'B wins anyway (S_B = 1), K = 32', text: '\\(R_B\' = 2000 + 32(1 - 0.091) \\approx 2029\\): a large jump, since the result was very surprising' },
            { label: 'Compare: if B had been expected to win (E_B = 0.7) and did', text: '\\(R_B\' = 2000 + 32(1 - 0.7) = 2010\\): a much smaller rise, since winning was already expected' },
          ],
        },
      ],
    },
    {
      id: 'spread',
      title: 'Where Elo (and its relatives) are used today',
      blocks: [
        {
          t: 'table',
          head: ['Domain', 'System used', 'Notes'],
          rows: [
            ['Chess', 'Elo (the original application)', 'Adopted officially by FIDE (the international chess federation) in 1970'],
            ['International football', 'A widely followed independent Elo-style ranking (distinct from FIFA\'s own official ranking formula)', 'Often cited by analysts as tracking team strength more consistently over time than FIFA\'s official points system, which has used several different formulas over the years'],
            ['Esports (many titles)', 'Elo or closely related systems (often Glicko-2 or similar)', 'Used directly for competitive matchmaking, pairing players of similar skill in real time'],
            ['Online multiplayer games broadly', 'TrueSkill (Microsoft) and similar Bayesian rating systems', 'Extended Elo\'s two-player idea to team games and matches with more than two competitors at once'],
          ],
        },
        {
          t: 'metric',
          name: 'an Elo rating',
          shows: 'A single number summarising a competitor\'s estimated relative skill, calibrated so that the *difference* between any two ratings directly converts into a predicted win probability between them, not an absolute measure of skill in isolation, but a comparative one.',
          eli5: 'Imagine everyone in a huge, informal tournament wearing a number on their shirt that updates after every single match: win and your number goes up (more if you beat someone with a much bigger number than you), lose and it goes down (more if you lost to someone with a much smaller number). After enough matches, the numbers settle into an order that reliably predicts who beats whom.',
          higher: 'Stronger relative performance against the pool of opponents actually played, a rating only means something relative to other ratings in the same system, not as an absolute, portable score (a 2000-rated chess player and an "elo 2000" in an unrelated video game have no comparable meaning to each other).',
          lower: 'Weaker relative performance against the opponents played, or a player new to the system who has not yet accumulated enough results to have their rating settle near their true strength (most systems use a higher initial K-factor, or extra rating uncertainty, for new or provisional players specifically to let their rating adjust faster at first).',
          typical: 'Rating meaning is entirely system- and era-specific: a "2500 Elo" chess grandmaster rating today is not directly comparable to a "2500" rating from the 1970s, since the overall population\'s average strength and the number of active rated players has shifted substantially over decades, ratings measure *relative* standing within a population at a point in time, not a fixed, universal unit.',
        },
      ],
    },
  ],
  sources: ['Elo, A. E. (1978). *The Rating of Chessplayers, Past and Present*. Arco Publishing.', 'Glickman, M. E. (1999). Parameter estimation in large dynamic paired comparison experiments. *Applied Statistics*, 48(3), 377–394.', 'Herbrich, R., Minka, T., & Graepel, T. (2007). TrueSkill: A Bayesian skill rating system. *NeurIPS*.'],
  related: ['sports/analytics/sabermetrics-moneyball', 'mathematics/probability/probability-rules', 'ai/algorithms/logistic-regression'],
}

export default guide
