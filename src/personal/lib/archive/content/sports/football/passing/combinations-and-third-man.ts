import type { Guide } from '../../../../guide'
import { a, b } from '../../../../football-shapes'

const guide: Guide = {
  intro:
    'A single pass moves the ball; a combination moves the defence. The simplest combination is the wall pass (the one-two), in which a player passes to a teammate, runs past the marker and takes the return. More complex is the third-man combination, in which the pass goes to a second player who sets the ball for a third arriving from deeper. Both work because defenders watch the ball and the player with it, and the move is faster than their reaction. This guide explains the one-two, the third-man run, the overlap as a combination, and the training exercises (rondos and positional games) used to teach them.',
  nutshell: [
    'The **wall pass (one-two)** beats a marker: pass to a teammate, run past, receive the return in the space behind.',
    'The **third-man combination** plays through a layoff to a player who was not involved in the first pass; defenders do not see it coming.',
    'Combinations work when **two players are close** (about 10 m), the first touch is quick and the receiver of the layoff **faces forward**.',
    '**Overlaps and underlaps** are combinations between a winger and a full-back.',
    'Teams train combinations with **rondos** and positional games so that the patterns become automatic.',
  ],
  sections: [
    {
      id: 'one-two',
      title: 'The wall pass',
      lead: 'Beat a marker with a return.',
      blocks: [
        {
          t: 'pitch',
          title: 'A wall pass: pass, run, return',
          view: 'attack',
          players: [a(66, 34, 'A'), a(76, 30, 'B'), b(72, 36, 'D'), b(78, 46), b(80, 20)],
          arrows: [{ from: [66, 34], to: [75, 31], kind: 'pass' }, { from: [66, 34], to: [80, 40], kind: 'run' }, { from: [76, 30], to: [82, 40], kind: 'pass' }],
          caption: 'A passes to B and runs past D; B returns the ball first time into the space behind D. D, watching A and the ball, cannot turn in time.',
        },
        {
          t: 'steps',
          items: [
            { title: 'The pass', body: 'Hard and accurate to the receiver’s feet or into his stride, so that he can return it in one touch.' },
            { title: 'The run', body: 'Starts the moment the pass is played, towards the space beyond the marker, not behind him.' },
            { title: 'The return', body: 'First-time, weighted for the runner, ideally to the foot farther from the marker.' },
            { title: 'The finish', body: 'The runner moves on to another pass, a shot or a cross, with the defender behind.' },
          ],
        },
      ],
    },
    {
      id: 'third',
      title: 'The third man',
      lead: 'The pass the defender does not expect.',
      blocks: [
        {
          t: 'pitch',
          title: 'A third-man combination through the middle',
          view: 'full',
          players: [a(34, 50, 'A'), a(54, 50, 'B'), a(50, 66, 'C'), b(50, 46), b(62, 54), b(62, 40), b(70, 70)],
          arrows: [{ from: [34, 50], to: [53, 50], kind: 'pass' }, { from: [54, 50], to: [51, 64], kind: 'pass' }, { from: [50, 66], to: [68, 62], kind: 'run' }],
          caption: 'A plays to B, who is pressed; B plays one touch to C, who was running from deep, and C carries the ball into space. The defender who closes on B has no time to see C.',
        },
        {
          t: 'table',
          head: ['Combination', 'Players', 'Effect'],
          rows: [
            ['Wall pass', 'Two', 'Beats one marker in a tight space'],
            ['Third-man', 'Three', 'Pulls a defender to the first receiver and releases a runner behind him'],
            ['Overlap', 'Winger + full-back', 'Gives the full-back space down the line and forces the opposing full-back to choose'],
            ['Underlap', 'Winger + full-back', 'Full-back runs inside, into the half-space, away from the opponent’s attention'],
            ['Rotation', 'Two to three', 'Players swap roles, moving markers out of place'],
            ['Set-up pass', 'Two', 'A pass back to a player facing forward who can shoot or play on first time'],
          ],
        },
        { t: 'callout', tone: 'note', title: 'Why it works', text: 'Defenders follow the ball and the nearest opponent. The third-man pass is invisible until it is played; by the time the defender turns, the attacker has already moved. The idea is as old as Total Football and is central to positional play.' },
      ],
    },
    {
      id: 'train',
      title: 'Training the patterns',
      lead: 'Rondos and positional games.',
      blocks: [
        { t: 'p', text: 'A **rondo** is a small-space exercise in which a group of players passes the ball around while one or two defenders try to win it. It trains the quick first touch, the angle of support and the scanning that combinations need, and it is the staple of the Dutch and Spanish schools. Positional games add goals, zones and rules (for example, a maximum of two touches or a requirement to pass through a zone). They are described in the guide to rondos and positional games.' },
        { t: 'dodont', do: ['Practise combinations in small spaces against live defenders', 'Make the first touch directional so that the next pass is ready', 'Vary the pattern so that defenders cannot predict it'], dont: ['Practise passing patterns with no opposition', 'Slow the play to make the pattern look neat', 'Use combinations when a simple pass would do'] },
      ],
    },
  ],
  sources: [
    'Cruyff, J. (2016). *My Turn: The Autobiography*. Macmillan.',
    'Perarnau, M. (2014). *Pep Confidential*. Arena Sport.',
    'Spielverlagerung.com: the third man and combinations (spielverlagerung.com).',
  ],
  related: ['sports/football/tactics/half-spaces-and-overloads', 'sports/football/methods/rondos-and-positional-games', 'sports/football/passing/passing-geometry'],
}

export default guide
