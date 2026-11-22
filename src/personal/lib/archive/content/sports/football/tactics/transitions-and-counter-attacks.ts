import type { Guide } from '../../../../guide'
import { a, b, ball, gk } from '../../../../football-shapes'

const guide: Guide = {
  intro:
    'Possession changes hands many times in a match, and the moment it does is the most dangerous: the team that just won the ball is organised for attack against defenders who are out of position, while the team that just lost it has players in the wrong places. Coaches call these moments transitions and spend much of their time on them. Winning the ball and attacking quickly is the counter-attack; losing the ball and pressing at once is the counter-press; and the structure kept behind the ball to survive a lost ball is the rest defence. This guide shows each with diagrams and the arithmetic of numbers up.',
  nutshell: [
    'A **transition** is the moment after possession changes; the time window is a few seconds before both teams are organised.',
    'A **counter-attack** goes forward quickly after winning the ball; the first pass is usually vertical, to a runner in space.',
    '**Rest defence** is the shape held behind the ball while attacking: usually two centre-backs and a pivot, so a lost ball does not give a free counter.',
    'The **numbers** matter: attacks with more players than defenders (3 v 2) have a much higher success rate.',
    'Counter-attacking teams are not "defensive": they plan where to win the ball and where the runners will be.',
  ],
  sections: [
    {
      id: 'counter',
      title: 'The counter-attack',
      lead: 'Win it, go forward, finish quickly.',
      blocks: [
        {
          t: 'pitch',
          title: 'A 3 v 2 counter from midfield',
          view: 'full',
          players: [a(50, 50, '8'), a(62, 20, 'W'), a(60, 80, 'W'), a(54, 50, '9'), b(76, 34), b(76, 62), b(60, 50), gk(94, 50), ball(50, 50)],
          arrows: [{ from: [50, 50], to: [64, 22], kind: 'pass' }, { from: [54, 50], to: [78, 48], kind: 'run' }, { from: [60, 80], to: [82, 72], kind: 'run' }],
          caption: 'The midfielder wins the ball and plays out to the winger; the striker and the other winger run beyond. Two defenders face three attackers; the third is chasing.',
        },
        {
          t: 'steps',
          items: [
            { title: 'Win the ball in the right place', body: 'The team’s press or block is designed so that the ball is won where there are runners ahead of it.' },
            { title: 'The first pass', body: 'The most important: forward, quick, to a player who can carry or play the next pass.' },
            { title: 'Support and width', body: 'Runners spread across the pitch so that the defence has to choose.' },
            { title: 'Finish quickly', body: 'A counter that slows down gives the defence time to recover; shoot or play the final pass within a few touches.' },
          ],
        },
        {
          t: 'table',
          head: ['Attackers v defenders', 'What it means', 'Typical result'],
          rows: [
            ['1 v 1', 'A duel; the defender can delay', 'Rarely a shot unless the attacker is much faster'],
            ['2 v 1', 'The defender must choose one', 'A good chance in most cases'],
            ['3 v 2', 'The classic counter', 'A shot is likely; the quality depends on speed and passing'],
            ['4 v 3 and 5 v 3', 'Large numerical advantage', 'High-quality chances; defenders can only delay'],
          ],
          caption: 'Qualitative; actual conversion rates depend on the speed of the play and the position on the pitch.',
        },
      ],
    },
    {
      id: 'rest',
      title: 'Rest defence and the counter-press',
      lead: 'Preparing for the lost ball.',
      blocks: [
        {
          t: 'pitch',
          title: 'Rest defence: three behind the ball',
          view: 'full',
          players: [gk(8, 50), a(46, 30, 'CB'), a(46, 70, 'CB'), a(52, 50, '6'), a(66, 10, 'W'), a(70, 34, '8'), a(72, 66, '8'), a(66, 90, 'W'), a(80, 50, '9'), b(66, 50), b(60, 24), b(60, 76)],
          caption: 'While five players attack, two centre-backs and a pivot stay behind the ball in a triangle, ready to meet a counter. The opponent’s three forwards are faced by three defenders.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Counter-press', tag: 'first reaction', body: 'The nearest players press the new ball carrier immediately to prevent the counter-attack from starting.' },
            { title: 'Delay', tag: 'if the press fails', body: 'The nearest defender slows the ball and shepherds it wide while the team recovers.' },
            { title: 'Tactical foul', tag: 'last resort', body: 'A deliberate foul that stops a dangerous counter at the price of a free kick (and often a yellow card).' },
            { title: 'Compact recovery', tag: 'return to shape', body: 'Players sprint back to get between the ball and the goal, protecting the centre first.' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'A team’s attack is built from its defence', text: 'Good attacking teams usually have strong rest defences: they keep three or four players behind the ball so that they can attack with the others without fear. Teams that attack with everyone are usually punished, which is why the structure behind the ball is as important as the attackers.' },
      ],
    },
  ],
  sources: [
    'Wilson, J. (2008). *Inverting the Pyramid: The History of Football Tactics*. Orion.',
    'Cox, M. (2019). *Zonal Marking: From Ajax to Zidane, the Making of Modern Soccer*. Nation Books.',
    'Coaches’ Voice and Spielverlagerung: rest defence and transitions (coachesvoice.com; spielverlagerung.com).',
  ],
  related: ['sports/football/tactics/pressing-and-gegenpressing', 'sports/football/matches/leicester-2015-16', 'sports/football/game/phases-of-play'],
}

export default guide
