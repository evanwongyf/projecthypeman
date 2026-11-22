import type { Guide } from '../../../../guide'
import { a, b, gk } from '../../../../football-shapes'

const guide: Guide = {
  intro:
    'Where Sacchi and Guardiola organised defence in zones, Marcelo Bielsa and Gian Piero Gasperini asked players to follow opponents across the pitch. In a man-oriented system each defender takes responsibility for a specific opponent and goes wherever he goes, so the pitch is turned into a set of duels in which the most athletic and best-prepared team wins. Bielsa’s teams (Argentina, Chile, Athletic Bilbao, Marseille, Leeds) were known for their intensity and for the unusual 3-3-1-3; Gasperini’s Atalanta, with a 3-4-1-2 or 3-4-2-1, finished in the Champions League places repeatedly and won the 2024 Europa League by beating Bayer Leverkusen 3–0. This guide describes the system, who followed it, and why Bielsa has been so influential beyond his trophies.',
  nutshell: [
    '**Man-oriented pressing**: each defender marks a specific opponent across the pitch; the opposing team’s passes are denied by close contact.',
    '**Bielsa’s 3-3-1-3**: three centre-backs, three midfielders, a number 10 and three forwards, with fast vertical passing and heavy running.',
    '**Gasperini’s Atalanta**: a 3-4-1-2 or 3-4-2-1 with man-marking in midfield; **Europa League winners in 2024** (3–0 v Leverkusen, ending its 51-match unbeaten run).',
    'The idea needs **very fit players**, **one-v-one strength** and **a keeper and centre-backs who can defend alone**.',
    'Bielsa’s influence on **Guardiola, Pochettino, Simeone and Sampaoli** is greater than his trophy list.',
  ],
  sections: [
    {
      id: 'system',
      title: 'The system',
      lead: 'Duels across the pitch.',
      blocks: [
        {
          t: 'pitch',
          title: 'Man-oriented pressing: a back three and wing-backs against a 4-3-3',
          view: 'full',
          players: [gk(6, 50), a(24, 30, 'CB'), a(26, 50, 'CB'), a(24, 70, 'CB'), a(44, 8, 'WB'), a(44, 92, 'WB'), a(46, 40, 'M'), a(46, 60, 'M'), a(60, 50, '10'), a(76, 34, 'F'), a(76, 66, 'F'), b(32, 34), b(32, 66), b(40, 50, '6'), b(50, 20), b(50, 80), b(60, 44)],
          arrows: [{ from: [24, 30], to: [32, 36], kind: 'press' }, { from: [24, 70], to: [32, 64], kind: 'press' }, { from: [46, 40], to: [50, 22], kind: 'press' }, { from: [60, 50], to: [42, 50], kind: 'press' }],
          caption: 'Each opponent is matched by a player: the centre-backs step out to the strikers, the midfielders follow the central players and the wing-backs the full-backs. There is no spare player: if a duel is lost, the nearest teammate must cover.',
        },
        {
          t: 'table',
          head: ['', 'Zonal press (Sacchi, Klopp)', 'Man-oriented press (Bielsa, Gasperini)'],
          rows: [
            ['Responsibility', 'A zone and the ball', 'A specific opponent'],
            ['Defensive shape', 'Lines and compact distances', 'Follows the opponent; shape depends on his movement'],
            ['Strengths', 'Keeps the shape; economical', 'Very hard to pass through; denies options at once'],
            ['Weaknesses', 'Gaps between zones; needs timing', 'Rotations and swaps pull defenders out; large running load'],
            ['Typical formation', '4-4-2, 4-3-3', '3-3-1-3, 3-4-1-2, 3-4-2-1'],
          ],
        },
      ],
    },
    {
      id: 'bielsa',
      title: 'Bielsa’s career and influence',
      lead: 'From Newell’s to Leeds.',
      blocks: [
        {
          t: 'levels',
          caption: 'Marcelo Bielsa’s main posts.',
          items: [
            { name: '1990s', body: 'Newell’s Old Boys and Vélez Sarsfield win titles in Argentina; Pochettino plays under him at Newell’s.' },
            { name: '1998–2004', body: 'Argentina national coach; 2002 World Cup group-stage exit, 2004 Olympic gold.' },
            { name: '2007–11', body: 'Chile: qualified for the 2010 World Cup and changed the identity of the national team.' },
            { name: '2011–12', body: 'Athletic Bilbao: reached the 2012 Europa League final (lost 3–0 to Atlético) and the Copa del Rey final.' },
            { name: '2013–15', body: 'Marseille; 2017 Lille; 2018–22 Leeds United: promoted to the Premier League in 2020 after 16 years.' },
          ],
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Pep’s visit', tag: '2006', body: 'Guardiola, then a former player, spent about 11 hours talking to Bielsa in Argentina and later described him as the best coach in the world.' },
            { title: 'Physical and mental preparation', tag: 'the demand', body: 'Bielsa’s sessions are famously intense; players run more than in almost any other team.' },
            { title: 'Analysis', tag: 'video and detail', body: 'Bielsa is known for analysing opponents in great detail (he reportedly built a huge video library); the preparation is part of the method.' },
            { title: 'Influence', tag: 'on others', body: 'Pochettino, Guardiola and Sampaoli are among those who have acknowledged him as a model.' },
          ],
        },
      ],
    },
    {
      id: 'gasperini',
      title: 'Gasperini’s Atalanta',
      lead: 'A provincial club in the Champions League.',
      blocks: [
        {
          t: 'p',
          text: 'Gian Piero Gasperini coached Atalanta from 2016. The club from Bergamo, with a modest budget, finished in the Serie A top four several times, reached the Champions League quarter-finals in 2020 and won the Europa League in 2024 (3–0 over Bayer Leverkusen in Dublin, with a hat-trick by Ademola Lookman). The system: a back three, wing-backs, two creative players behind a striker and man-marking from front to back. The team scored heavily and pressed hard; critics said it was open at the back, but results showed the model’s strength.',
        },
        {
          t: 'pitch',
          title: 'Atalanta’s 3-4-2-1: the same shape in attack and in the press',
          view: 'full',
          players: [gk(6, 50), a(26, 28, 'CB'), a(24, 50, 'CB'), a(26, 72, 'CB'), a(46, 8, 'WB'), a(46, 40, 'M'), a(46, 60, 'M'), a(46, 92, 'WB'), a(66, 34, '10'), a(66, 66, '10'), a(80, 50, '9')],
          caption: 'The two attacking midfielders play between the lines and the striker holds the ball; in defence the three at the back, the two central midfielders and the wing-backs mark the opposing line.',
        },
        { t: 'dodont', do: ['Prepare the players physically for a high running load', 'Use man-marking when the team has the advantage in one-v-one duels', 'Have a plan for opponents who rotate positions'], dont: ['Apply man-marking with players who are slower than their opponents', 'Forget the space behind when a marker follows his man', 'Use the method without the preparation it demands'] },
      ],
    },
  ],
  sources: [
    'Wilson, J. (2008). *Inverting the Pyramid: The History of Football Tactics*. Orion.',
    'Perarnau, M. (2014). *Pep Confidential*. Arena Sport.',
    'Wilson, J. (2016). *Angels with Dirty Faces: The Footballing History of Argentina*. Orion (on Bielsa and the Argentine schools).',
    'The Athletic and The Coaches’ Voice profiles of Bielsa and Gasperini (coachesvoice.com).',
    'UEFA Europa League 2024 final report (uefa.com).',
  ],
  related: ['sports/football/tactics/marking-systems', 'sports/football/tactics/back-three-and-wing-backs', 'sports/football/schools/modern-trends-2020s'],
}

export default guide
