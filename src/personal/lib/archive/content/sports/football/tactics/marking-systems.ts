import type { Guide } from '../../../../guide'
import { a, b, gk } from '../../../../football-shapes'

const guide: Guide = {
  intro:
    'Defending teams have three basic ways to organise marking. In man-marking each defender follows an opponent; in zonal marking each defender guards an area and picks up whoever enters it; and in a hybrid, some defenders are in zones and others are tied to dangerous attackers. Which is best depends on the situation: man-marking is common in the 1960s catenaccio and in some modern pressing systems, zonal marking dominates open play in most leagues, and corners are defended with a mix. This guide explains how each works, the weaknesses of each, and how it applies at set pieces, in open play and in pressing.',
  nutshell: [
    '**Man-marking**: each defender follows a specific opponent wherever he goes; it is simple but vulnerable to rotations and leaves holes.',
    '**Zonal marking**: each defender guards an area; it keeps the shape but depends on communication and on attackers arriving at speed.',
    '**Hybrid**: zones for most players with one or two man-markers on the best aerial threats (common in corners).',
    '**Man-oriented pressing** (Gasperini, Bielsa) uses man-marking tied to a pressing scheme across the pitch.',
    'The best systems **match the opponents’ strengths**: against rotating attackers, zones; against a single dominant striker, a man-marker.',
  ],
  sections: [
    {
      id: 'open',
      title: 'Open play: zones, men and hybrids',
      lead: 'Three ways to defend the same attack.',
      blocks: [
        {
          t: 'pitch',
          title: 'Man-marking: defenders follow their opponents',
          view: 'defence',
          players: [gk(5, 50), a(14, 24, 'M'), a(14, 50, 'M'), a(14, 76, 'M'), b(20, 24), b(22, 50), b(20, 76)],
          arrows: [{ from: [14, 24], to: [20, 24], kind: 'press' }, { from: [14, 50], to: [22, 50], kind: 'press' }, { from: [14, 76], to: [20, 76], kind: 'press' }],
          caption: 'Each defender picks one attacker and follows him: a swap of positions between attackers drags defenders out of line.',
        },
        {
          t: 'pitch',
          title: 'Zonal marking: defenders guard areas',
          view: 'defence',
          players: [gk(5, 50), a(14, 24, 'Z'), a(14, 50, 'Z'), a(14, 76, 'Z'), b(20, 24), b(22, 50), b(20, 76)],
          zones: [{ x: 5, y: 10, w: 20, h: 28, tone: 'cool' }, { x: 5, y: 38, w: 20, h: 24, tone: 'cool' }, { x: 5, y: 62, w: 20, h: 28, tone: 'cool' }],
          caption: 'Each defender holds a zone and picks up whichever attacker enters it: the line stays organised when attackers swap, but an unmarked runner can arrive from deep.',
        },
        {
          t: 'table',
          head: ['System', 'Strengths', 'Weaknesses'],
          rows: [
            ['Man-marking', 'Clear responsibility; follows dangerous players; strong in duels', 'Rotations pull defenders out; leaves a free man elsewhere; needs athletic defenders'],
            ['Zonal marking', 'Keeps the shape; defenders face the ball; flexible', 'Needs communication; runners from deep can beat the zone; blame is diffuse'],
            ['Hybrid', 'Combines both: zones for most, man-markers for the best threats', 'Complex; requires clear rules about who does what'],
            ['Man-oriented press', 'Wins duels high up the pitch; denies the passing outlets', 'Space behind if beaten; relies on fitness and one-v-one strength'],
          ],
        },
      ],
    },
    {
      id: 'corners',
      title: 'Corners: the clearest test',
      lead: 'Zones, men or both.',
      blocks: [
        {
          t: 'pitch',
          title: 'Zonal marking at a corner',
          view: 'attack',
          players: [b(92, 40), b(94, 52), b(90, 64), b(98, 30), gk(98, 50), a(99, 38, 'Z'), a(99, 44, 'Z'), a(99, 56, 'Z'), a(96, 36, 'Z'), a(94, 46, 'Z'), a(94, 60, 'Z'), a(90, 52, 'Z')],
          arrows: [{ from: [104, 0], to: [96, 46], kind: 'cross' }],
          caption: 'Defenders stand in a line along the six-yard box and in zones near and far post; each attacks the ball in his zone. The attackers must run into the zones at speed to beat them.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Pure zonal', tag: 'Benítez’s Liverpool', body: 'All players hold zones; strong at attacking the ball, weak against blockers and runners. Rafael Benítez’s Liverpool used it extensively in the 2000s.' },
            { title: 'Pure man-marking', tag: 'Italian tradition', body: 'Each attacker has a marker; strong against blocks if the markers are tough, weak against clever attackers who lose their marker.' },
            { title: 'Hybrid', tag: 'the modern standard', body: 'Three or four zonal defenders at the edge of the six-yard box, plus man-markers on the best aerial attackers, plus a player at each post.' },
            { title: 'Blocking and screening', tag: 'offence', body: 'Attackers block defenders to free a team-mate: defenders must be taught how to beat blocks.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'What the evidence says', text: 'Published analyses of corners suggest little consistent difference between man-marking and zonal systems in goals conceded; execution seems to matter more than the system. Teams choose according to their personnel and the opponent’s routines.' },
      ],
    },
  ],
  sources: [
    'Cox, M. (2019). *Zonal Marking: From Ajax to Zidane, the Making of Modern Soccer*. Nation Books.',
    'Wilson, J. (2008). *Inverting the Pyramid: The History of Football Tactics*. Orion.',
    'Spielverlagerung.com and The Coaches’ Voice: analyses of marking systems and corner defence (spielverlagerung.com; coachesvoice.com).',
  ],
  related: ['sports/football/tactics/set-pieces', 'sports/football/schools/bielsa-gasperini-and-man-oriented-football', 'sports/football/tactics/low-block-and-compactness'],
}

export default guide
