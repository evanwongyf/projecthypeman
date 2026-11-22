import type { Guide } from '../../../../guide'
import { a, b, gk } from '../../../../football-shapes'

const guide: Guide = {
  intro:
    'In April and May 2013 Bayern Munich beat Barcelona 4–0 in Munich and 3–0 at the Camp Nou, a 7–0 aggregate in the Champions League semi-final. Barcelona, winners of the competition in 2009 and 2011, with Messi, Xavi and Iniesta, were the model of the possession game; Bayern, under Jupp Heynckes, played with a mix of pressing, width and pace, and went on to win the treble. The tie is usually read as the end of the tiki-taka era at the top of European football, though the reasons were as much about injuries and the details of the two teams as about a change of fashion. This guide shows how Bayern attacked Barcelona and what it meant.',
  nutshell: [
    '**23 April 2013**, Munich: **Bayern 4–0 Barcelona** (Müller 25’, Gómez 49’ and 73’, Müller 82’). **1 May**, Camp Nou: **Barcelona 0–3 Bayern**. Aggregate **7–0**.',
    'Heynckes’s Bayern: a **4-2-3-1** with Javi Martínez and Schweinsteiger as the double pivot and **Robben and Ribéry** on the wings.',
    'Barcelona’s **high line** and the space behind it were attacked by **Robben, Ribéry and Müller**.',
    'Bayern pressed Barcelona’s build-up and attacked the flanks, particularly through **Alaba and Ribéry on the left**.',
    '**Messi** was returning from a hamstring injury and played little part; **Barcelona** had also an injury to Puyol and a tired midfield.',
  ],
  sections: [
    {
      id: 'shapes',
      title: 'The two systems',
      lead: 'Press, width and pace against possession.',
      blocks: [
        {
          t: 'pitch',
          title: 'Bayern’s 4-2-3-1 (blue) against Barcelona’s 4-3-3 (red)',
          view: 'full',
          players: [gk(6, 50), a(22, 12, 'L'), a(20, 38, 'D'), a(20, 62, 'B'), a(24, 88, 'A'), a(40, 40, 'J'), a(40, 60, 'S'), a(62, 12, 'R'), a(60, 50, 'M'), a(62, 88, 'R'), a(76, 50, 'G'), b(60, 30), b(58, 50), b(60, 70), b(42, 20), b(40, 50), b(42, 80), b(28, 38), b(28, 62), b(36, 6), b(36, 94)],
          caption: 'Bayern: Neuer; Lahm, Boateng, Dante, Alaba; Javi Martínez, Schweinsteiger; Robben, Müller, Ribéry; Gómez or Mandžukić. Barcelona’s full-backs pushed up, leaving space behind them for Bayern’s wide forwards.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Pressing Barcelona’s build-up', tag: 'the first phase', body: 'Bayern’s front players pressed Barcelona’s defenders and Busquets, forcing mistakes and long passes.' },
            { title: 'Wide threats', tag: 'Robben and Ribéry', body: 'Bayern’s wingers ran at Barcelona’s full-backs and into the space behind them; the second leg’s goals came from such moves.' },
            { title: 'Set pieces', tag: 'physical advantage', body: 'Bayern’s height and strength helped at corners and crosses; Gómez’s first leg goals came in the penalty area.' },
            { title: 'Barcelona’s state', tag: 'injuries and fatigue', body: 'Messi was not fit, and Barcelona’s defence, without Puyol, was vulnerable.' },
          ],
        },
      ],
    },
    {
      id: 'meaning',
      title: 'What the tie meant',
      lead: 'The end of an era, or a coincidence?',
      blocks: [
        {
          t: 'pitch',
          title: 'A Bayern counter: Ribéry on the left beats the high line',
          view: 'full',
          players: [a(50, 50, 'S'), a(64, 10, 'R'), a(70, 50, 'G'), b(56, 20), b(56, 40), b(56, 60), b(56, 80), gk(94, 50)],
          arrows: [{ from: [50, 50], to: [66, 12], kind: 'pass' }, { from: [64, 10], to: [86, 22], kind: 'dribble' }, { from: [86, 22], to: [92, 46], kind: 'pass' }],
          caption: 'A long pass into the space behind the full-back, a run down the flank and a cross for the striker: Barcelona’s high line was vulnerable to these moves when the press was bypassed.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'The era', tag: 'the story told', body: 'Many saw 7–0 as the end of Barcelona’s era; the club won the league that season but did not win the Champions League again until 2015.' },
            { title: 'The counter-argument', tag: 'context', body: 'Messi’s injury, the age of the squad and the strength of Bayern all contributed; Guardiola, who had left in 2012, joined Bayern in 2013.' },
            { title: 'The legacy', tag: 'Bayern’s team', body: 'Heynckes’s side won the Champions League final against Dortmund (2–1 at Wembley) and the German double; Guardiola took over.' },
            { title: 'The lesson', tag: 'for coaches', body: 'A possession side can be beaten by a team that presses well, uses width and has the pace to exploit its high line.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'UEFA. Champions League 2012/13 semi-final match reports (uefa.com).',
    'Wilson, J. and Cox, M.: analyses of the Bayern–Barcelona tie (The Guardian; Zonal Marking).',
    'Honigstein, R. (2015). *Das Reboot*. Yellow Jersey Press.',
  ],
  related: ['sports/football/schools/cruyff-guardiola-and-positional-play', 'sports/football/schools/klopp-rangnick-and-the-german-school', 'sports/football/tactics/pressing-and-gegenpressing'],
}

export default guide
