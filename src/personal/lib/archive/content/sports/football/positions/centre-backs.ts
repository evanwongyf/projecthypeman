import type { Guide } from '../../../../guide'
import { a, b, gk } from '../../../../football-shapes'

const guide: Guide = {
  intro:
    'The centre-back’s job changed from clearing the ball to starting the move. The first centre-backs were stoppers who attacked the ball; Italian football added the libero who swept behind the line; the Dutch and then Spanish schools asked centre-backs to pass; and back threes added the wide centre-back who carries the ball forward. Today a good centre-back needs to defend the penalty area, play progressive passes and cover large spaces if the team’s line is high. This guide explains these roles with diagrams and the pairs and trios that make them work.',
  nutshell: [
    'The classic pair is a **stopper** (steps up to win the ball) and a **cover** defender (protects the space behind).',
    'The **libero** (sweeper) played behind the marking defenders; Beckenbauer made it a ball-playing role, Baresi perfected it as the organiser of a line.',
    'The **ball-playing defender** passes through the lines; high-pressing teams need defenders who are comfortable in space.',
    'In a **back three**, the wide centre-backs step out to defend the half-spaces and carry the ball.',
    'Tall, strong centre-backs matter at **set pieces**; fast ones matter behind a high line.',
  ],
  sections: [
    {
      id: 'roles',
      title: 'The roles',
      lead: 'Stopper, cover, libero, ball-player.',
      blocks: [
        {
          t: 'pitch',
          title: 'Stopper and cover',
          view: 'defence',
          players: [gk(6, 50), a(15, 40, 'S'), a(10, 62, 'C'), b(24, 40, 'F'), b(30, 62)],
          arrows: [{ from: [15, 40], to: [22, 40], kind: 'press' }],
          caption: 'The stopper steps to the striker with the ball; the cover defender stays deeper, ready to deal with a ball played over or beside the stopper. A mistake by the stopper is then not a goal.',
        },
        {
          t: 'pitch',
          title: 'The libero behind a man-marking line',
          view: 'defence',
          players: [gk(6, 50), a(20, 20, 'M'), a(20, 50, 'M'), a(20, 80, 'M'), a(12, 50, 'L'), b(24, 20), b(26, 50), b(24, 80)],
          caption: 'In Italian catenaccio and the German version of the 1970s, three defenders marked the three forwards man-to-man and the libero (L) swept behind them, free of marking duties.',
        },
        {
          t: 'table',
          head: ['Role', 'Famous examples', 'What it asks'],
          rows: [
            ['Stopper', 'Tony Adams, Jaap Stam (in a back four)', 'Aggression, strength, timing in the tackle'],
            ['Cover defender', 'Alessandro Nesta, Rio Ferdinand', 'Pace, reading, positioning'],
            ['Libero', 'Franz Beckenbauer, Franco Baresi, Matthias Sammer', 'Sees the whole pitch; passes well; leads the line'],
            ['Ball-playing defender', 'Gerard Piqué, Rúben Dias, Virgil van Dijk', 'Passing range, composure under pressure'],
            ['Wide centre-back (back three)', 'Giorgio Chiellini, César Azpilicueta, Alessandro Bastoni', 'Defending wide channels and stepping out; carrying the ball'],
          ],
        },
      ],
    },
    {
      id: 'modern',
      title: 'The modern centre-back',
      lead: 'In and out of possession.',
      blocks: [
        {
          t: 'pitch',
          title: 'Stepping into midfield: the defender who joins the pivot',
          view: 'full',
          players: [gk(8, 50), a(26, 30, 'CB'), a(30, 50, 'CB'), a(26, 70, 'CB'), a(44, 40, '6'), a(44, 60, '6'), b(48, 30), b(48, 70)],
          arrows: [{ from: [30, 50], to: [48, 50], kind: 'dribble' }],
          caption: 'A centre-back who steps forward with the ball draws an opponent out and creates a free player. Teams use this to turn a 4-3-3 into a back three with a double pivot in possession.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Defending the box', tag: 'the basics', body: 'Blocking shots, heading clear, marking the striker and covering crosses; the first duty, whatever else is asked.' },
            { title: 'Defending space', tag: 'behind a high line', body: 'Sprinting back to meet through balls; recovery speed and good communication with the keeper.' },
            { title: 'Progressive passing', tag: 'on the ball', body: 'Passing through the first line of the press and playing long diagonals to the wide players.' },
            { title: 'Leadership', tag: 'organising', body: 'Shouting, pointing, setting the line, deciding when to step out: the centre-back is the team’s voice at the back.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Wilson, J. (2008). *Inverting the Pyramid: The History of Football Tactics*. Orion.',
    'Baresi, F. and Beckenbauer, F. biographies and coaching accounts; UEFA Technical Reports (uefa.com).',
    'Hughes, C. & Wilson, J. on the evolution of the sweeper; The Coaches’ Voice (coachesvoice.com).',
  ],
  related: ['sports/football/positions/goalkeepers', 'sports/football/tactics/back-three-and-wing-backs', 'sports/football/tactics/offside-trap-and-defensive-lines'],
}

export default guide
