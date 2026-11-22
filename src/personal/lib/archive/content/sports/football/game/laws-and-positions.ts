import type { Guide } from '../../../../guide'
import { a, b, gk, shape } from '../../../../football-shapes'

const guide: Guide = {
  intro:
    'Football’s laws fit on a few pages, yet most arguments about the game are about two of them: offside and what counts as a foul. This guide sets out the laws that shape tactics (the pitch, the offside law, fouls and cards, restarts and VAR), shows offside with a live lab, and then maps the eleven positions: what each is for, how the numbers on the shirt became roles, and how they combine into a formation.',
  nutshell: [
    'A match has **two 45-minute halves** and **eleven players a side**; the **Laws of the Game** are set by IFAB and applied by the referee, assistants and VAR.',
    '**Offside** is judged at the moment the ball is played: a player is offside if any part of the head, body or feet they can score with is nearer the goal line than **both the ball and the second-last opponent**.',
    'There is **no offside from a goal kick, throw-in or corner**, and none in your own half.',
    'Fouls give **direct** or **indirect** free kicks, or a **penalty** in the area; a **yellow card** cautions and a **red card** sends off.',
    'Positions are defined by **what a player does with and without the ball**; numbers (4-3-3) describe a starting shape, not fixed jobs.',
  ],
  sections: [
    {
      id: 'pitch',
      title: 'The pitch and the restarts',
      lead: 'The geometry every tactic is built on.',
      blocks: [
        {
          t: 'pitch',
          title: 'Dimensions that shape the game',
          view: 'attack',
          zones: [
            { x: 83.5, y: 20.3, w: 16.5, h: 59.3, label: 'penalty area 16.5 × 40.3 m', tone: 'hot' },
            { x: 94.8, y: 36.5, w: 5.2, h: 27, label: 'goal area 5.5 m', tone: 'cool' },
          ],
          marks: [{ x: 89.5, y: 50, r: 8.5, label: 'penalty spot 11 m' }],
          caption: 'The pitch in the top leagues is about 105 × 68 m (the laws allow domestic pitches from 90 to 120 m long and 45 to 90 m wide; international matches use 100 to 110 m by 64 to 75 m). The goal is 7.32 m wide and 2.44 m high.',
        },
        {
          t: 'table',
          head: ['Restart', 'How it works', 'Tactical meaning'],
          rows: [
            ['Kick-off', 'Starts each half and follows a goal; the ball must move forward', 'Often a pre-planned pass back or long ball'],
            ['Throw-in', 'Taken with both hands over the head when the ball crosses the touchline; no offside', 'A set piece in its own right: clubs now employ throw-in coaches'],
            ['Goal kick', 'Taken inside the goal area; since 2019 the ball may be received inside the area', 'The start of playing out from the back'],
            ['Corner', 'Awarded when the defending team last touches the ball over their own goal line; no offside', 'The most common attacking set piece'],
            ['Free kick (direct or indirect)', 'A direct kick can score straight away; an indirect kick needs a second touch', 'Walls, set routines and the swerve of the ball'],
            ['Penalty', 'Awarded for a direct free-kick offence by the defending team inside its own area; struck from 11 m', 'Conversion is around three in four in most leagues'],
          ],
        },
      ],
    },
    {
      id: 'offside',
      title: 'Offside, fouls and VAR',
      lead: 'The rules that decide the lines.',
      blocks: [
        { t: 'ftbl-viz', viz: 'offside-lab' },
        {
          t: 'pitch',
          title: 'A through ball and the offside line',
          view: 'attack',
          players: [a(66, 60, 'M'), a(79, 35, 'F'), b(78, 25, 'D'), b(78, 50), b(80, 72), gk(97, 50)],
          arrows: [{ from: [66, 60], to: [82, 38], kind: 'pass' }, { from: [79, 35], to: [84, 38], kind: 'run' }],
          caption: 'The forward starts level with the last defender and runs as the pass is played: timing the run so that the player is behind the line only after the ball is played is how attackers beat an offside trap.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Fouls', tag: 'direct free kick or penalty', body: 'Careless, reckless or excessive force when kicking, tripping, charging, jumping at, pushing, striking or tackling an opponent; holding; and handling the ball deliberately. A foul inside the penalty area is a penalty.' },
            { title: 'Yellow and red cards', tag: 'discipline', body: 'A yellow card is a caution (two in one match mean a red). A direct red card is for serious foul play, violent conduct, spitting, denying an obvious goal-scoring opportunity by a foul, or offensive language.' },
            { title: 'Advantage', tag: 'referee’s judgement', body: 'The referee may play on when stopping the game would favour the offender, and can return to the foul if no advantage arises.' },
            { title: 'VAR', tag: 'since 2018 at the World Cup', body: 'A video assistant referee reviews goals, penalty decisions, direct red cards and mistaken identity. It corrects clear and obvious errors; offside is checked with lines drawn on the video.' },
          ],
        },
      ],
    },
    {
      id: 'positions',
      title: 'The eleven positions',
      lead: 'A map before the detail.',
      blocks: [
        {
          t: 'pitch',
          title: 'A 4-3-3 with the numbers of the traditional shirts',
          players: shape([4, 3, 3], { numbers: true }),
          caption: 'The traditional shirt numbers: 1 goalkeeper, 2 right-back, 3 left-back, 4 and 5 centre-backs, 6 holding midfielder, 7 right winger, 8 central midfielder, 9 striker, 10 playmaker, 11 left winger. Numbers vary by country and era; here they are shown in order.',
        },
        {
          t: 'table',
          head: ['Position', 'With the ball', 'Without the ball'],
          rows: [
            ['Goalkeeper', 'Starts moves by throwing, kicking or passing; supports build-up', 'Saves shots, claims crosses, commands the area, sweeps behind the line'],
            ['Centre-back', 'Passes out of defence, carries or lofts the ball forward', 'Wins aerial duels, blocks shots, marks the striker, covers'],
            ['Full-back / wing-back', 'Provides width, overlaps or underlaps, crosses, or tucks inside', 'Marks the winger, defends the flank, tracks the runner'],
            ['Defensive midfielder', 'Receives from defenders, spreads the play, sets the tempo', 'Shields the back line, breaks up attacks, blocks passes between the lines'],
            ['Central midfielder', 'Links, carries, joins attacks, switches play', 'Presses, covers, tracks runners'],
            ['Attacking midfielder', 'Receives between the lines, creates and shoots', 'Presses the opposing holder, drops to help'],
            ['Winger', 'Stretches the defence, takes on the full-back, crosses or cuts inside', 'Tracks the full-back, presses the centre-back'],
            ['Striker', 'Finishes, holds up the ball, runs in behind, links', 'Leads the press, blocks the pass to the opponent’s pivot'],
          ],
        },
      ],
    },
  ],
  sources: [
    'International Football Association Board (IFAB). *Laws of the Game* (current edition), laws 1 (the field of play), 11 (offside), 12 (fouls and misconduct), 14 (the penalty kick) (theifab.com).',
    'FIFA. *Football Technology: Video Assistant Referee (VAR)* explanatory documents (fifa.com).',
    'Wilson, J. (2008). *Inverting the Pyramid: The History of Football Tactics*. Orion.',
  ],
  related: ['sports/football/game/phases-of-play', 'sports/football/positions/goalkeepers', 'sports/football/tactics/formations-and-tactics'],
}

export default guide
