import type { Guide } from '../../../../guide'
import { a, b, gk } from '../../../../football-shapes'

const guide: Guide = {
  intro:
    'The striker’s job once seemed simple, but the types are as varied as the defenders they face. The target man holds up long balls; the poacher lives in the six-yard box; the false nine drops deep and drags a centre-back out of position; the inside forward cuts in from the wing to shoot; the complete forward does a bit of everything. Wide players have their own vocabulary: the traditional winger who crosses, the inverted winger who cuts onto his stronger foot, the wide forward in a front three who presses. This guide describes each role with diagrams, its best-known exponents and what it asks of the team around it.',
  nutshell: [
    '**Target man**: holds the ball up and wins headers; **poacher**: positions himself for tap-ins; **false nine**: drops into midfield to create space behind; **complete forward**: combines all.',
    'A **traditional winger** takes on the full-back and crosses; an **inverted winger** or **inside forward** cuts inside to shoot or play through the half-space.',
    'A **second striker** plays off a main forward; a **pressing forward** leads the press and closes lines of pass.',
    'The role has to fit the **team’s idea**: a poacher in a possession side can starve; a false nine without a runner behind is wasted.',
    'Modern forwards are judged on **non-shot xG**, pressing actions and link-up as well as goals.',
  ],
  sections: [
    {
      id: 'strikers',
      title: 'The centre-forward types',
      lead: 'From target man to false nine.',
      blocks: [
        {
          t: 'pitch',
          title: 'The false nine drops deep and drags a defender out',
          view: 'attack',
          players: [b(76, 40, 'CB'), b(76, 60, 'CB'), b(64, 50, '6'), a(66, 50, '9'), a(80, 22, 'W'), a(80, 78, 'W'), gk(97, 50)],
          arrows: [{ from: [82, 50], to: [66, 50], kind: 'run' }, { from: [80, 22], to: [90, 38], kind: 'run' }, { from: [80, 78], to: [90, 62], kind: 'run' }],
          caption: 'If a centre-back follows the false nine into midfield, a gap opens behind him for the wingers to run into; if he does not, the false nine receives, turns and plays or shoots with time. Messi in 2009 and Fàbregas for Spain in 2012 used this idea.',
        },
        {
          t: 'table',
          head: ['Type', 'Examples', 'Strength', 'Needs'],
          rows: [
            ['Target man', 'Didier Drogba, Olivier Giroud, Peter Crouch', 'Holds the ball up; aerial threat', 'Service from wide and from deep'],
            ['Poacher', 'Filippo Inzaghi, Ruud van Nistelrooy, Gary Lineker', 'Positioning, finishing, one-touch', 'Chances created by others'],
            ['False nine', 'Nándor Hidegkuti (precursor), Francesco Totti, Lionel Messi, Roberto Firmino', 'Creates space; links', 'Runners from midfield and wide'],
            ['Complete forward', 'Karim Benzema, Robert Lewandowski, Zlatan Ibrahimović', 'Holds, links, finishes, presses', 'A team built around the number nine'],
            ['Second striker', 'Dennis Bergkamp, Wayne Rooney, Antoine Griezmann', 'Plays off a main striker, creates and scores', 'A partner who can hold up'],
            ['Pressing forward', 'Luis Suárez, Roberto Firmino, Thomas Müller (a "space investigator", the Raumdeuter)', 'Leads the press; positional intelligence', 'A team that presses as a unit'],
          ],
        },
      ],
    },
    {
      id: 'wide',
      title: 'Wingers and wide forwards',
      lead: 'Width versus the inside cut.',
      blocks: [
        {
          t: 'pitch',
          title: 'Traditional winger versus inverted winger',
          view: 'attack',
          players: [a(74, 10, 'W'), a(74, 90, 'W'), b(76, 14, 'LB'), b(76, 86, 'RB'), b(78, 38), b(78, 62), gk(97, 50)],
          arrows: [{ from: [74, 10], to: [92, 8], kind: 'dribble' }, { from: [92, 8], to: [90, 40], kind: 'cross' }, { from: [74, 90], to: [88, 66], kind: 'dribble' }, { from: [88, 66], to: [102, 54], kind: 'shot' }],
          caption: 'The traditional winger on the top flank beats the full-back on the outside and crosses; the inverted winger on the bottom flank cuts inside onto the stronger foot and shoots or passes.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Traditional winger', tag: 'width', body: 'Pace and skill on the outside; crosses and cutbacks. Examples: Ryan Giggs, Luís Figo, David Beckham (in crossing), Jadon Sancho in some roles.' },
            { title: 'Inverted winger', tag: 'cuts inside', body: 'Plays on the side of the weaker foot so that the cut inside opens the shot: Arjen Robben, Mohamed Salah, Lionel Messi on the right.' },
            { title: 'Inside forward', tag: 'plays in the channel', body: 'A wide forward who spends much of the game in the half-space, joining the striker. Cristiano Ronaldo for Real Madrid is the best-known example.' },
            { title: 'Wide playmaker', tag: 'creates from wide', body: 'Drifts inside to receive and create, leaving the full-back to take the flank: David Silva, Bernardo Silva.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'Why wide forwards press', text: 'In a 4-3-3 pressing system, the wide forwards cut the passing lane to the full-back while the central striker presses the centre-back. They run more without the ball than a traditional winger and are judged on pressing actions as well as goals.' },
      ],
    },
  ],
  sources: [
    'Wilson, J. (2008). *Inverting the Pyramid: The History of Football Tactics*. Orion.',
    'Spielverlagerung and The Coaches’ Voice: analyses of forward roles and the false nine (spielverlagerung.com; coachesvoice.com).',
    'Perarnau, M. (2014). *Pep Confidential*. Arena Sport.',
  ],
  related: ['sports/football/positions/midfield-roles', 'sports/football/xg/xg-basics', 'sports/football/tactics/wide-play-and-crossing'],
}

export default guide
