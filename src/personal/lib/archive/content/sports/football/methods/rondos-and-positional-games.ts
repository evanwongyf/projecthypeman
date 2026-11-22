import type { Guide } from '../../../../guide'
import { a, b } from '../../../../football-shapes'

const guide: Guide = {
  intro:
    'The rondo is the simplest exercise in football and the foundation of the Dutch and Spanish schools: a ring of players pass the ball while one or two in the middle try to win it. It looks like a warm-up, but it contains the whole game in miniature: the angle of support, the first touch, the scan, the pass that breaks the press and the press itself. From the rondo, coaches build positional games with goals, zones and rules, which teach the principles of the team’s game model in the situations in which they are used. This guide explains the rondo, positional games, the use of constraints and the evidence for training the game through games.',
  nutshell: [
    'A **rondo** is a possession game in a small space: outside players keep the ball from one or more defenders in the middle (4 v 1, 5 v 2, 4 v 2).',
    'It trains **first touch, scanning, angles of support, quick passing** and, for the defenders, **pressing and anticipation**.',
    '**Positional games** (e.g. 7 v 7 + 3 neutral players) add **zones, goals and rules** that reproduce parts of the match.',
    '**Constraints** (touch limits, zone rules, scoring conditions) steer what players learn without long verbal instruction.',
    'Research on **small-sided games** supports their use for technical and tactical learning and for fitness, if designed well.',
  ],
  sections: [
    {
      id: 'rondo',
      title: 'The rondo',
      lead: 'Keep the ball; win it back.',
      blocks: [
        {
          t: 'pitch',
          title: 'A 5 v 2 rondo in a 10 × 10 m grid',
          view: 'attack',
          players: [a(74, 28), a(86, 28), a(90, 54), a(80, 74), a(70, 54), b(80, 46), b(78, 54)],
          arrows: [{ from: [74, 28], to: [86, 28], kind: 'pass' }, { from: [86, 28], to: [90, 52], kind: 'pass' }],
          caption: 'Five players on the outside circulate the ball while two defenders in the middle press. Each pass must be quick and accurate; the player who loses the ball goes into the middle.',
        },
        {
          t: 'table',
          head: ['Variant', 'Typical size', 'What it trains'],
          rows: [
            ['4 v 1', '8 × 8 m', 'Introduction; quick first touch'],
            ['5 v 2', '10 × 10 m', 'Angles of support; passes that break the press'],
            ['4 v 2', '10 × 10 m', 'Higher pressure; one-touch passing'],
            ['6 v 3', '12 × 12 m', 'Moving the ball against a group press'],
            ['Rondo with a neutral', '–', 'Always an extra option: a numerical advantage that rewards patience'],
          ],
        },
        { t: 'callout', tone: 'note', title: 'The Cruyff and Barcelona rondo', text: 'At Ajax and Barcelona, rondos took up much of the training. Cruyff’s idea was that the players learn the game by playing it: the rondo develops the technique, the decision-making and the speed of thought they need in a match.' },
      ],
    },
    {
      id: 'positional',
      title: 'Positional games and constraints',
      lead: 'From the rondo to the match.',
      blocks: [
        {
          t: 'pitch',
          title: 'A positional game with zones and neutral players',
          view: 'full',
          zones: [
            { x: 10, y: 10, w: 26, h: 80, label: 'zone 1', tone: 'neutral' },
            { x: 36, y: 10, w: 28, h: 80, label: 'zone 2', tone: 'a' },
            { x: 64, y: 10, w: 26, h: 80, label: 'zone 3', tone: 'neutral' },
          ],
          players: [a(20, 30), a(20, 70), a(46, 34), a(50, 60), a(76, 40), b(26, 50), b(50, 48), b(78, 56), a(48, 20, 'N'), a(52, 80, 'N')],
          caption: 'The pitch is divided into zones with rules (for example, only two players of each team in a zone). Neutral players (N) join the team in possession, producing a numerical advantage that rewards moving the ball to the free player.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Touch limits', tag: 'constraint', body: 'Two touches maximum forces quick play and scanning before receiving.' },
            { title: 'Zone rules', tag: 'constraint', body: 'Players must stay in their zone, or pass through a zone before scoring, to teach structure and patience.' },
            { title: 'Scoring conditions', tag: 'constraint', body: 'A goal counts only after a certain number of passes, or only through a gate, to teach the intended pattern.' },
            { title: 'Neutral and overload', tag: 'superiority', body: 'Neutral players or numerical overloads teach the free-man principle.' },
          ],
        },
        { t: 'p', text: 'Research on **constraints-led** and **ecological-dynamics** approaches in coaching (Davids, Araújo, Renshaw and others) argues that players learn best by solving problems in realistic situations, with the coach modifying the task rather than instructing the movement. Studies of small-sided games find that smaller formats increase touches and decisions per minute, while larger formats better reproduce the match’s running demands.' },
      ],
    },
  ],
  sources: [
    'Cruyff, J. (2016). *My Turn: The Autobiography*. Macmillan.',
    'Davids, K., Araújo, D. & Shuttleworth, R. (2005). Applications of dynamical systems theory to football. In *Science and Football V*. Routledge.',
    'Clemente, F. M., Afonso, J. & Sarmento, H. (2021). Small-sided games: an umbrella review of systematic reviews and meta-analyses. *PLoS ONE*, 16(2), e0247067.',
    'Perarnau, M. (2014). *Pep Confidential*. Arena Sport.',
  ],
  related: ['sports/football/passing/combinations-and-third-man', 'sports/football/methods/tactical-periodisation', 'sports/football/schools/total-football-and-ajax'],
}

export default guide
