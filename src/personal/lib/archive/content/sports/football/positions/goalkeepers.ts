import type { Guide } from '../../../../guide'
import { a, b, ball, gk } from '../../../../football-shapes'

const guide: Guide = {
  intro:
    'The goalkeeper is the only player allowed to use their hands, and for most of football’s history was judged only on saves. Two changes altered the job. In 1992 the back-pass rule stopped keepers handling deliberate passes from teammates’ feet, so they needed to play with their feet. Then pressing teams began to use the keeper as an extra outfield player in build-up and as a sweeper behind a high line. Today a keeper is assessed on three things: stopping shots, commanding the area and starting attacks. This guide explains each with diagrams and the statistics that measure them.',
  nutshell: [
    'The keeper’s job has three parts: **shot-stopping**, **commanding the area** (crosses, one-on-ones) and **distribution**.',
    'The **1992 back-pass rule** forced keepers to play with their feet; the **sweeper-keeper** (Neuer, Ederson, Alisson) now acts as a last defender and first attacker.',
    '**Post-shot xG minus goals conceded** estimates goals prevented: it compares the shots faced (after they are struck, so including placement) with the goals allowed.',
    'In build-up the keeper creates a **numerical advantage** (the extra man against the opponent’s press).',
    'Penalty saves are rare: keepers stop roughly **one in four** penalties, so most of the value is in open play.',
  ],
  sections: [
    {
      id: 'stop',
      title: 'Shot-stopping and positioning',
      lead: 'Narrowing the angle.',
      blocks: [
        {
          t: 'pitch',
          title: 'Narrowing the angle: moving off the line reduces the shooter’s view of goal',
          view: 'attack',
          players: [a(86, 40, 'S'), gk(97, 50), gk(93.5, 45.5)],
          arrows: [{ from: [86, 40], to: [105, 47], kind: 'shot' }, { from: [86, 40], to: [105, 53], kind: 'shot' }],
          caption: 'A keeper who steps forward to meet the shooter covers more of the goal in the shooter’s eyeline: the target seen by the shooter is smaller. The risk is a chip over the keeper.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Reflex saves', tag: 'shots at close range', body: 'Stopping shots with little reaction time depends on strong starting positions and fast hands.' },
            { title: 'One-on-ones', tag: 'narrowing and spreading', body: 'Coming out, staying big and delaying the shot until the defender can recover.' },
            { title: 'Crosses', tag: 'command of the area', body: 'Deciding early whether to claim the ball; a keeper who hesitates blocks his own defenders.' },
            { title: 'Penalties', tag: 'a minority of saves', body: 'The keeper guesses, or reads the shooter’s run-up and body shape; the shooter usually has the advantage.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'Measuring a goalkeeper', text: 'Goals prevented = post-shot xG faced − goals conceded. Post-shot xG uses where the shot is heading as well as where it was struck from, so it rewards keepers who save hard-to-reach shots. The number is noisy over one season; it takes several seasons to separate a good keeper from a lucky one.' },
      ],
    },
    {
      id: 'feet',
      title: 'The keeper with the ball',
      lead: 'From the 1992 rule to the sweeper-keeper.',
      blocks: [
        {
          t: 'pitch',
          title: 'The extra man: the keeper joins the build-up',
          view: 'full',
          players: [gk(8, 50), a(14, 28, 'CB'), a(14, 72, 'CB'), a(20, 6, 'LB'), a(20, 94, 'RB'), a(30, 50, '6'), b(30, 40), b(30, 60), b(40, 20), b(40, 80)],
          arrows: [{ from: [8, 50], to: [14, 30], kind: 'pass' }, { from: [14, 30], to: [30, 50], kind: 'pass' }],
          caption: 'Against a two-man press the keeper and two centre-backs make three against two: one is always free, and the press must either commit more players (leaving space behind) or stand off.',
        },
        {
          t: 'pitch',
          title: 'The sweeper-keeper behind a high line',
          view: 'full',
          players: [a(62, 20, 'CB'), a(62, 40, 'CB'), a(62, 60, 'CB'), a(62, 80, 'CB'), gk(52, 50), b(80, 50), ball(68, 50)],
          arrows: [{ from: [68, 50], to: [78, 50], kind: 'pass' }, { from: [52, 50], to: [68, 50], kind: 'run' }],
          caption: 'A defence that holds a high line leaves space behind it. A keeper standing 25 to 30 metres from goal can clear through balls, as Neuer did in the 2014 World Cup.',
        },
        {
          t: 'steps',
          items: [
            { title: '1992', body: 'The back-pass rule: a keeper may not pick up a deliberate pass from a teammate’s foot, so feet matter.' },
            { title: '1990s to 2000s', body: 'Keepers such as René Higuita and Edwin van der Sar show what controlling the ball with feet can offer.' },
            { title: '2010s', body: 'Neuer, Ederson and Alisson combine sweeping and distribution; goalkeepers are recruited for their passing.' },
            { title: 'Today', body: 'Many clubs use keeper statistics: pass completion under pressure, long-pass accuracy, sweeper actions and post-shot xG.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'IFAB. *Laws of the Game*, Law 12 (the back-pass provision introduced in 1992) (theifab.com).',
    'Wilson, J. (2012). *The Outsider: A History of the Goalkeeper*. Orion.',
    'Statsbomb and FBref: post-shot expected goals and goalkeeping metrics (statsbomb.com; fbref.com).',
  ],
  related: ['sports/football/positions/centre-backs', 'sports/football/xg/shot-maps-and-finishing', 'sports/football/tactics/build-up-and-playing-out'],
}

export default guide
