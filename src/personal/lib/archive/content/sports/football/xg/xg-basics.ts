import type { Guide } from '../../../../guide'
import { a, gk } from '../../../../football-shapes'

const guide: Guide = {
  intro:
    'Not all shots are equal: a header from the penalty spot with the goalkeeper beaten is worth more than a speculative effort from 30 metres. Expected goals (xG) puts a number on that: the probability that a shot becomes a goal, estimated from how often shots from similar situations have scored in the past. Add the xG of every shot and you get the number of goals a team "should" have scored on the chances it made. This guide builds a simple xG model from the two things that matter most (distance and angle), lets you test it on a live pitch, and explains what real models add.',
  nutshell: [
    '**xG** is the probability that a shot will be a goal, from 0 to 1; a team’s xG is the sum over its shots.',
    'The two biggest drivers are **distance** to goal and the **angle** the goal subtends (the width of the target as seen from the ball).',
    'Further adjustments: **body part** (headers score less often than foot shots), **situation** (fast break, set piece, penalty ≈ 0.76) and, in richer models, the **position of defenders and goalkeeper**.',
    'xG is **not a prediction of the next shot**: it is an average over thousands of similar shots, so any single shot is a goal or not.',
    'Over a season, a team’s **xG difference** predicts later results better than its goal difference, because it is less affected by luck.',
  ],
  sections: [
    {
      id: 'idea',
      title: 'The idea: shot quality as a probability',
      lead: 'From one shot to the number.',
      blocks: [
        {
          t: 'p',
          text: 'Imagine a thousand shots taken from exactly the same spot, in the same situation. If 100 of them are goals, the xG of a shot from there is 0.10. In practice no two shots are identical, so a model estimates the probability from features: where the shot was taken from, with what body part, after what kind of pass, how many defenders were nearby. The most common method is **logistic regression**, which turns a weighted sum of features into a probability between 0 and 1.',
        },
        {
          t: 'math',
          tex: String.raw`\theta=\left|\arctan\frac{3.66-y}{x}-\arctan\frac{-3.66-y}{x}\right|,\qquad \text{xG}=\frac{1}{1+e^{-z}},\quad z=\beta_0+\beta_1\theta+\beta_2 d+\beta_3\ln d`,
          caption: 'A simple xG model: the angle θ the goal subtends and the distance d.',
          where: [
            { sym: 'x,\\ y', def: 'distance from the goal line and sideways offset from the centre of the goal (m); the goal posts are at ±3.66 m' },
            { sym: '\\theta', def: 'the angle subtended by the goal (radians)' },
            { sym: 'd', def: 'distance from the shot to the centre of the goal (m)' },
            { sym: '\\beta_0,\\ldots,\\beta_3', def: 'coefficients fitted to data' },
          ],
          syntax: [
            { sym: '\\tfrac{1}{1+e^{-z}}', say: 'the logistic function turns any number z into a probability. Effect: big positive z gives xG near 1, big negative z near 0. Why: probabilities must stay between 0 and 1.' },
            { sym: '\\beta_1\\theta', say: 'a wider angle raises the chance. Effect: a shot from the side of the box has a small angle and a low xG even if it is close. Why: the goalkeeper covers a smaller share of the visible goal when the angle is wide.' },
          ],
          worked: {
            title: 'A shot from the penalty spot',
            steps: ['Penalty spot: x = 11 m, y = 0. θ = 2·arctan(3.66/11) = 0.642 rad (37°), d = 11 m.', 'With the lab’s coefficients β = (−7.62, 4.12, −0.186, 2.45): z = −7.62 + 4.12×0.642 − 0.186×11 + 2.45×ln 11 = −1.15.', 'xG = 1/(1 + e^{1.15}) = 0.24 for an open-play shot from that spot.'],
            answer: 'About one such shot in four scores in this model. A real penalty is different: the keeper stands on the line and the shot is unopposed, so penalties are given a fixed xG of about 0.76.',
          },
        },
        { t: 'ftbl-viz', viz: 'xg-lab' },
      ],
    },
    {
      id: 'values',
      title: 'What the numbers look like',
      lead: 'A map of the pitch in probabilities.',
      blocks: [
        {
          t: 'pitch',
          title: 'xG of an open-play footed shot from selected places (the model above)',
          view: 'attack',
          marks: [
            { x: 99.5, y: 50, r: 2, label: '0.59' },
            { x: 91, y: 50, r: 2, label: '0.24' },
            { x: 82.7, y: 50, r: 2, label: '0.10' },
            { x: 76, y: 50, r: 2, label: '0.04' },
            { x: 97.5, y: 35, r: 2, label: '0.10' },
            { x: 85.5, y: 24, r: 2, label: '0.03' },
          ],
          players: [gk(97, 50)],
          caption: 'Six places on the pitch and their xG in the model. Central shots inside the six-yard box score more than half the time; a shot from 25 metres is a 4% chance; a shot from a tight angle on the edge of the area is worth about 3%.',
        },
        {
          t: 'table',
          head: ['Shot', 'Distance', 'Angle', 'xG'],
          rows: [
            ['Central, inside the six-yard box', '5.5 m', '67°', '0.59'],
            ['Penalty spot, open play', '11 m', '37°', '0.24'],
            ['Edge of the area, central', '18 m', '23°', '0.10'],
            ['Central, 25 m', '25 m', '17°', '0.04'],
            ['Central, 30 m', '30 m', '14°', '0.02'],
            ['Tight angle, 14 m out', '14 m', '7°', '0.04'],
          ],
          caption: 'Values from the model used in this guide. Real provider models differ in detail but agree on the order of magnitude.',
        },
      ],
    },
    {
      id: 'real',
      title: 'What real models add',
      lead: 'Features beyond distance and angle.',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Body part and technique', tag: 'headers, volleys', body: 'Headers score less often than shots with the foot from the same place; volleys and half-volleys are harder than a ground shot.' },
            { title: 'Assist type', tag: 'the pass before', body: 'Through balls and cutbacks create better chances than crosses from the same area; a shot after a dribble differs from one after a pass.' },
            { title: 'Defensive pressure', tag: 'freeze-frame data', body: 'Models with tracking or freeze-frame data include the positions of the keeper and defenders: a shot with a defender on the line is worth less.' },
            { title: 'Game situation', tag: 'play pattern', body: 'Fast breaks, set pieces and open play have different conversion rates; penalties are modelled separately.' },
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'What xG is not',
          text: 'xG does not say who "deserved" to win, does not measure how the chance was created, and is blind to chances that never became shots (a missed pass in the box). It is a summary of shot quality, nothing more, and different providers’ models give different numbers for the same shot.',
        },
        { t: 'pitch', title: 'Same distance, different quality', view: 'attack', players: [a(88, 50, 'A'), a(88, 14, 'B'), gk(97, 50)], arrows: [{ from: [88, 50], to: [105, 50], kind: 'shot', label: '0.10' }, { from: [88, 14], to: [105, 47], kind: 'shot', label: '0.03' }], caption: 'Two shots from about 17 metres: the central one has a wide angle (xG about 0.10); the one from the side has an angle of about a third of that (xG about 0.03).' },
      ],
    },
  ],
  sources: [
    'Rathke, A. (2017). An examination of expected goals and shot efficiency in soccer. *Journal of Human Sport and Exercise*, 12(2).',
    'Caley, M. (2013–15). Posts on shot location and expected goals models (Cartilage Free Captain).',
    'Eastwood, S. and StatsBomb: xG methodology articles (statsbomb.com).',
    'Anderson, C. & Sally, D. (2013). *The Numbers Game*. Penguin.',
  ],
  related: ['sports/football/xg/shot-maps-and-finishing', 'sports/football/xg/xg-timelines-and-match-probability', 'sports/analytics/expected-goals'],
}

export default guide
