import type { Guide } from '../../../../guide'
import { a, b, gk } from '../../../../football-shapes'

const guide: Guide = {
  intro:
    'The 2005 Champions League final in Istanbul is the great comeback. Milan, with Maldini, Pirlo, Kaká, Shevchenko and Crespo, led 3–0 at half-time. Six minutes into the second half Liverpool had scored three times, through Steven Gerrard, Vladimír Šmicer and Xabi Alonso, and the match went to extra time and penalties; Liverpool won the shoot-out 3–2 after Jerzy Dudek saved from Shevchenko. The tactical story is often told through Rafael Benítez’s half-time change, which moved Liverpool to a back three and put Dietmar Hamann on to hold the midfield, but the match is also a reminder of how emotion and chance affect a final. This guide looks at the tactics and the numbers.',
  nutshell: [
    '**25 May 2005**, Istanbul: **Liverpool 3–3 Milan**, Liverpool won **3–2 on penalties**.',
    'Milan led **3–0** at half-time (Maldini 1’, Crespo 39’ and 44’). Liverpool scored **Gerrard 54’, Šmicer 56’, Alonso 60’**.',
    'At half-time **Hamann replaced Finnan**; Liverpool moved to a **back three** with Gerrard further forward and Alonso and Hamann in the middle.',
    'Milan’s midfield was **overrun** in the second half as Liverpool pressed and committed numbers to the centre.',
    'In extra time **Dudek** saved twice from Shevchenko; in the shoot-out he saved again from Shevchenko to win it.',
  ],
  sections: [
    {
      id: 'first',
      title: 'The first half: Milan’s control',
      lead: 'Three goals and a plan.',
      blocks: [
        {
          t: 'pitch',
          title: 'Liverpool’s first-half shape (blue, 4-4-1-1) against Milan’s 4-3-1-2 (red)',
          view: 'full',
          players: [gk(6, 50), a(24, 14, 'F'), a(22, 38, 'C'), a(22, 62, 'H'), a(24, 86, 'T'), a(44, 20, 'G'), a(44, 42, 'A'), a(44, 58, 'S'), a(44, 82, 'R'), a(62, 50, 'B'), b(34, 50, 'K'), b(48, 30), b(48, 50), b(48, 70), b(60, 38), b(60, 62)],
          caption: 'Liverpool’s two banks left space for Kaká between the lines; Milan’s midfield (Pirlo, Gattuso, Seedorf) controlled the ball and Kaká’s passes created Crespo’s goals.',
        },
        {
          t: 'table',
          head: ['Minute', 'Event'],
          rows: [
            ['1', 'Maldini scores from a free kick (1–0)'],
            ['23', 'Kewell injured; Šmicer replaces him'],
            ['39', 'Crespo scores from Shevchenko’s pass (2–0)'],
            ['44', 'Crespo scores again from Kaká’s through ball (3–0)'],
            ['45', 'Half-time: Liverpool changes shape'],
          ],
        },
      ],
    },
    {
      id: 'second',
      title: 'The second half: six minutes',
      lead: 'Three goals and a new shape.',
      blocks: [
        {
          t: 'pitch',
          title: 'Liverpool’s second-half 3-5-2: Gerrard higher, Hamann at the base',
          view: 'full',
          players: [gk(6, 50), a(24, 28, 'C'), a(22, 50, 'H'), a(24, 72, 'T'), a(44, 50, 'M'), a(52, 38, 'A'), a(60, 24, 'G'), a(46, 10, 'Š'), a(48, 90, 'R'), a(70, 40, 'B'), a(72, 62, 'G'), b(46, 38), b(46, 62), b(36, 50)],
          caption: 'With three at the back, Hamann holding in front, Gerrard further forward, Alonso and Šmicer in midfield, Liverpool had more players in the centre where Milan’s three midfielders were outnumbered.',
        },
        {
          t: 'table',
          head: ['Minute', 'Goal', 'Detail'],
          rows: [
            ['54', 'Gerrard (3–1)', 'A header from John Arne Riise’s cross'],
            ['56', 'Šmicer (3–2)', 'A long-range shot that bounced past Dida'],
            ['60', 'Alonso (3–3)', 'A rebound after Dida saved his penalty (awarded for a foul on Gerrard)'],
          ],
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Why the change worked', tag: 'numbers in midfield', body: 'The back three and the wide players let Liverpool dominate the centre and press, while Milan, in shock, lost control.' },
            { title: 'Milan’s response', tag: 'not enough', body: 'Milan’s changes did not restore control; the team later admitted the shock of the three goals.' },
            { title: 'Dudek’s saves', tag: 'extra time', body: 'In the 117th minute Dudek saved Shevchenko’s header and then his follow-up from close range.' },
            { title: 'The shoot-out', tag: '3–2', body: 'Dudek’s "spaghetti legs" distracted Serginho and Pirlo, and he saved from Shevchenko; Liverpool scored three.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'Skill and chance', text: 'Benítez’s change is a good tactical story, but the match also needed the 6 minutes of Liverpool’s luck and Milan’s collapse. A fair summary is that the change gave Liverpool a chance to come back, and the players did the rest.' },
      ],
    },
  ],
  sources: [
    'UEFA. Champions League 2004/05 final match report (uefa.com).',
    'Cox, M. (2019). *Zonal Marking*. Nation Books (tactical reading of the match).',
    'Benítez, R. and Gerrard, S. memoirs and interviews on the final (various).',
  ],
  related: ['sports/football/schools/english-football-ferguson-wenger-and-after', 'sports/football/tactics/back-three-and-wing-backs', 'sports/football/matches/liverpool-barcelona-2019'],
}

export default guide
