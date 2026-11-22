import type { Guide } from '../../../../guide'
import { a, b, gk, shape } from '../../../../football-shapes'

const guide: Guide = {
  intro:
    'There is a long tradition in football of treating defence as the first priority and a long tradition of looking down on it. Diego Simeone, who took over Atlético Madrid in December 2011, made a team that finished in the top three of La Liga in nearly every season for a decade, won the title in 2014 and reached two Champions League finals (2014, 2016) with a compact 4-4-2 and a hard-working collective. Massimiliano Allegri’s Juventus (five consecutive titles and two Champions League finals), Antonio Conte’s Italy and Mourinho’s Inter and Chelsea belong to the same family. This guide describes the pragmatic school: the block, the mentality and the criticism, and why the best defensive teams are often also the best counter-attacking teams.',
  nutshell: [
    'Simeone’s Atlético: a **4-4-2** with two compact banks, **narrow** wide midfielders and quick **counters**; the mentality "**partido a partido**" (match by match).',
    '**Results**: La Liga **2013–14** (the first title outside Barcelona or Real Madrid since 2004), **Champions League finals** in 2014 and 2016 (lost both to Real Madrid).',
    '**Allegri’s Juventus** (2014–19): five Serie A titles in a row and finals in 2015 and 2017; adaptable between 4-3-1-2, 3-5-2 and 4-2-3-1.',
    '**Mourinho’s Inter 2010**: the treble, with a deep block and decisive transitions; the 3–2 aggregate win over Barcelona in the semi-final.',
    'Defending well is a **skill** in itself: reading the game, covering, communication and discipline.',
  ],
  sections: [
    {
      id: 'block',
      title: 'The Atlético block',
      lead: 'Narrow, compact, relentless.',
      blocks: [
        {
          t: 'pitch',
          title: 'Atlético’s 4-4-2 without the ball',
          view: 'full',
          players: [gk(6, 50), a(20, 12, 'RB'), a(20, 38, 'CB'), a(20, 62, 'CB'), a(20, 88, 'LB'), a(32, 24, 'M'), a(32, 44, 'M'), a(32, 56, 'M'), a(32, 76, 'M'), a(46, 40, 'F'), a(46, 60, 'F'), b(52, 50), b(60, 28), b(60, 72), b(44, 82)],
          zones: [{ x: 16, y: 6, w: 36, h: 88, label: 'two compact banks', tone: 'cool' }],
          caption: 'The four midfielders stay close to the four defenders, the wide midfielders tuck in, and the strikers press the centre-backs so as to push the ball wide. When the ball goes wide, the whole block slides towards it.',
        },
        {
          t: 'table',
          head: ['Feature', 'How it works'],
          rows: [
            ['Narrowness', 'The wide midfielders defend half-spaces and leave the flank to the full-back: the opponent has the width but not the middle'],
            ['Short distances', 'The distance between lines is small, so the opponent finds no space between them'],
            ['Collective effort', 'Everyone, including the strikers, defends; the forwards press the centre-backs'],
            ['Set pieces', 'A strong aerial team that scores from corners and free kicks'],
            ['Transition', 'On winning the ball the team plays vertically to its strikers or wingers, the pace of Griezmann, Costa or Morata'],
          ],
        },
      ],
    },
    {
      id: 'others',
      title: 'Other pragmatists: Allegri, Conte and Mourinho',
      lead: 'Defending as a skill.',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Allegri', tag: 'adaptive', body: 'Juventus 2014–19 and 2021–24: the team’s system changed with the players, from a 3-5-2 to a 4-2-3-1 to a 4-3-1-2; a rule he stressed was "winning is the only thing that matters".' },
            { title: 'Conte', tag: 'intense', body: 'A rigorous, high-intensity back-three system; Chelsea 2016–17 (93 points), Inter 2020–21 (first Serie A title in 11 years).' },
            { title: 'Mourinho', tag: 'transitions', body: 'Porto 2004 and Inter 2010 Champions League winners: organised defence, pressing in the right moments and quick counters.' },
            { title: 'Italy national teams', tag: 'tradition', body: 'Euro 2020 was won by Mancini’s Italy playing more fluidly than the "catenaccio" label suggests.' },
          ],
        },
        {
          t: 'pitch',
          title: 'A deep 5-4-1 against a team with the ball',
          view: 'full',
          players: shape([5, 4, 1], { team: 'a', shift: -8 }),
          caption: 'Five defenders and four midfielders, with a lone forward ready to receive a clearance. The aim is to keep the opponent out of the box and counter with pace.',
        },
        { t: 'callout', tone: 'note', title: 'The criticism, and a reply', text: 'The pragmatic school is often called negative, but defensive discipline is a form of teamwork that many fans undervalue. The best defensive teams are those that keep a shape for 90 minutes and score from the few chances they create, a harder task than it looks.' },
      ],
    },
  ],
  sources: [
    'Wilson, J. (2008). *Inverting the Pyramid: The History of Football Tactics*. Orion.',
    'Cox, M. (2019). *Zonal Marking*. Nation Books.',
    'La Liga, UEFA and Serie A official records (laliga.com; uefa.com; legaseriea.it).',
    'The Coaches’ Voice and The Athletic: tactical profiles of Atlético under Simeone (coachesvoice.com).',
  ],
  related: ['sports/football/tactics/low-block-and-compactness', 'sports/football/schools/catenaccio-and-the-italian-school', 'sports/football/tactics/transitions-and-counter-attacks'],
}

export default guide
