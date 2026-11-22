import type { Guide } from '../../../../guide'
import { a, b, gk } from '../../../../football-shapes'

const guide: Guide = {
  intro:
    'Building from the back is football’s riskiest and most rewarding habit. Instead of kicking long, a team passes out of its own penalty area to draw the opponent’s press, then exploits the space that opens behind it. The idea has roots in Cruyff’s Barcelona and Guardiola’s teams, and it spread when goalkeepers learned to pass and goal-kick rules changed in 2019. The approach has a simple logic (numerical superiority in the first phase: keeper plus two centre-backs plus pivot against two or three pressers) and a simple risk (a mistake near the goal). This guide explains the structures (2-3, 3-2, back three), the triggers, how teams bypass the press, and when a team should go long.',
  nutshell: [
    'The aim of **build-up** is to create a **free player** against the opponent’s press and progress through the lines.',
    'Common structures: **back four with a dropping pivot**, **back three with two pivots (3-2)**, and **the goalkeeper as an extra player**.',
    'The **3-2-5** or **2-3-5** in possession keeps the team spread across five lanes with a rest defence behind.',
    '**Baiting the press**: the team invites the press to a place and then passes into the space behind it.',
    'The **alternative**: a long ball to a target player, a second-ball plan and a pressing structure to win it; the best teams have both.',
  ],
  sections: [
    {
      id: 'structures',
      title: 'Structures: 4-2, 3-2 and the goalkeeper',
      lead: 'The first phase.',
      blocks: [
        {
          t: 'pitch',
          title: 'Goal kick: back four with a dropping pivot against a front three',
          view: 'full',
          players: [gk(8, 50), a(16, 20, 'CB'), a(16, 80, 'CB'), a(22, 6, 'LB'), a(22, 94, 'RB'), a(24, 50, '6'), b(30, 30), b(30, 50), b(30, 70), b(44, 20), b(44, 80)],
          arrows: [{ from: [8, 50], to: [16, 22], kind: 'pass' }, { from: [16, 22], to: [24, 50], kind: 'pass' }],
          caption: 'The pivot drops into the line so the keeper and defenders make a 3+1 against the pressers. The free player is found by moving the ball and pulling the presser out.',
        },
        {
          t: 'pitch',
          title: 'A 3-2 build-up: full-backs move inside',
          view: 'full',
          players: [gk(8, 50), a(20, 24, 'CB'), a(18, 50, 'CB'), a(20, 76, 'CB'), a(36, 40, '6'), a(36, 60, '6'), a(52, 8, 'W'), a(52, 92, 'W'), a(54, 30, '8'), a(54, 70, '8'), a(62, 50, '9')],
          caption: 'Three at the back and two pivots form a W-shaped structure with the wide players high. Against a front three, this creates an extra player in the first line and two in the second.',
        },
        {
          t: 'table',
          head: ['Structure', 'How it is formed', 'Used for'],
          rows: [
            ['2-3 (back two, three midfielders)', 'Two centre-backs; the pivot and two full-backs or eights as a line', 'Versus a pressing front two'],
            ['3-2', 'Back three (a pivot or full-back drops) and two pivots', 'Versus a front three'],
            ['Goalkeeper-led', 'The keeper joins as the third centre-back', 'Versus one or two pressers'],
            ['Box midfield', 'Full-backs move inside to form a square with the pivot', 'To control the centre against a compact block'],
          ],
        },
      ],
    },
    {
      id: 'press',
      title: 'Beating the press',
      lead: 'Bait, bypass and break lines.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Bait', body: 'Pass back to the keeper or to a centre-back under apparent pressure, to make the press commit.' },
            { title: 'Find the free man', body: 'A pass that the press has left uncovered: a midfielder between the lines or a full-back.' },
            { title: 'Third man', body: 'Play to the dropping player so that a third player can play through the space the press has left.' },
            { title: 'Break the line', body: 'A pass to a forward player, or a carry, takes opposing players out of the game at once.' },
            { title: 'Go long if needed', body: 'If the press is well organised, a long ball to a target player is a safe option, supported by the second-ball players.' },
          ],
        },
        {
          t: 'pitch',
          title: 'A long alternative: knock-down and second ball',
          view: 'full',
          players: [gk(8, 50), a(60, 50, '9'), a(52, 30, '8'), a(52, 70, '8'), a(66, 14, 'W'), a(66, 86, 'W'), b(56, 50), b(44, 30), b(44, 70)],
          arrows: [{ from: [8, 50], to: [58, 50], kind: 'cross' }, { from: [60, 50], to: [54, 32], kind: 'pass' }],
          caption: 'The goalkeeper kicks long; the target player wins or flicks the ball and the midfielders compete for the second ball. The press is bypassed without risking a mistake near goal.',
        },
        { t: 'callout', tone: 'warn', title: 'The risk', text: 'A pass that goes astray near your own penalty area is more costly than almost any other mistake. Teams that build from the back accept this in exchange for control, and train the habit so that the risk is lower. Many teams change to a long game against opponents with a very strong press.' },
      ],
    },
  ],
  sources: [
    'Cox, M. (2019). *Zonal Marking: From Ajax to Zidane, the Making of Modern Soccer*. Nation Books.',
    'Perarnau, M. (2014). *Pep Confidential*. Arena Sport.',
    'IFAB. *Laws of the Game*, Law 16 (goal kick; changed in 2019 to allow receiving the ball inside the penalty area) (theifab.com).',
    'Spielverlagerung.com: analyses of build-up structures (spielverlagerung.com).',
  ],
  related: ['sports/football/tactics/pressing-and-gegenpressing', 'sports/football/positions/goalkeepers', 'sports/football/schools/cruyff-guardiola-and-positional-play'],
}

export default guide
