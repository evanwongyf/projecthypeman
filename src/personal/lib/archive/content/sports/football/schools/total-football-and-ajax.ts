import type { Guide } from '../../../../guide'
import { a, b, gk } from '../../../../football-shapes'

const guide: Guide = {
  intro:
    'Total Football was not a formation but a principle: any player can take over the role of any other, so the team keeps its shape while the individuals move. It was shaped by Rinus Michels, who coached Ajax from 1965, and embodied by Johan Cruyff, the team’s thinker on the pitch. Ajax won three consecutive European Cups (1971, 1972, 1973), and the Netherlands reached the 1974 World Cup final playing the same way. The Dutch school’s principles (space, tempo, pressing as a unit, the offside trap, rotation, the technical development of every player) form the basis of modern football. This guide covers the history, the principles, how rotations worked, the 1974 team, Cruyff’s Barcelona and the legacy.',
  nutshell: [
    '**Principle**: players rotate and cover for each other, so any position can be filled by any teammate; the **shape stays**, the **players move**.',
    'Michels coached **Ajax from 1965**; **Stefan Kovács** followed in 1971; Ajax won the **European Cup in 1971, 1972 and 1973**.',
    '**The Netherlands 1974** reached the World Cup final, losing 2–1 to West Germany after going ahead in the first minute.',
    'Key ideas: **pressing as a team**, **a high line with the offside trap**, **compact space**, **technique in every position** (the goalkeeper as a sweeper).',
    '**Cruyff as manager** (Barcelona 1988–96) brought it to Spain, with the **Dream Team**, **La Masia** and the principles of **positional play**.',
  ],
  sections: [
    {
      id: 'ideas',
      title: 'The ideas',
      lead: 'Space, rotation and pressing.',
      blocks: [
        {
          t: 'pitch',
          title: 'Rotation: a full-back overlaps and a midfielder fills his place',
          view: 'full',
          players: [gk(6, 50), a(24, 30, 'CB'), a(24, 70, 'CB'), a(44, 10, 'FB'), a(44, 50, 'M'), a(60, 30, 'W'), a(62, 70, 'W'), a(78, 50, '9'), b(50, 20), b(58, 52)],
          arrows: [{ from: [44, 10], to: [66, 8], kind: 'run' }, { from: [44, 50], to: [30, 14], kind: 'run' }, { from: [24, 30], to: [40, 44], kind: 'run' }],
          caption: 'When the full-back goes forward, the midfielder drops into the full-back’s position and a centre-back steps into midfield. At any moment the team has the same shape, with different players in it.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Pressing as a team', tag: 'a unit', body: 'The whole team presses together in a compact space; the offside trap stops the opponent using the space behind.' },
            { title: 'Making the pitch small', tag: 'compactness', body: 'When defending, the team squeezes the space between the lines; when attacking, it stretches it with width and depth.' },
            { title: 'Technique everywhere', tag: 'Ajax’s school', body: 'Every player, including the keeper and the defenders, needed the technique of a midfielder.' },
            { title: 'Interchange', tag: 'positional flexibility', body: 'Defenders could attack, forwards could defend; players were trained in several positions.' },
          ],
        },
      ],
    },
    {
      id: 'history',
      title: 'Ajax, the Oranje and Barcelona',
      lead: 'From 1965 to the Dream Team.',
      blocks: [
        {
          t: 'levels',
          caption: 'The Dutch school through the decades.',
          items: [
            { name: '1965–71', body: 'Michels builds Ajax around Cruyff, Krol, Neeskens and Rep; Ajax reach the 1969 European Cup final (lose 4–1 to Milan).' },
            { name: '1971–73', body: 'Ajax win three consecutive European Cups; Kovács continues Michels’s work after he leaves for Barcelona.' },
            { name: '1974', body: 'The Netherlands (Michels as coach) reach the World Cup final; Cruyff turn against Sweden; lost 2–1 to West Germany in Munich.' },
            { name: '1988–96', body: 'Cruyff’s Barcelona: four consecutive La Liga titles (1991–94) and the 1992 European Cup (1–0 v Sampdoria, Koeman).' },
            { name: '1990s–2010s', body: 'Van Gaal’s Ajax (Champions League 1995), then Guardiola, Frank Rijkaard and Ten Hag carry the ideas.' },
          ],
        },
        {
          t: 'pitch',
          title: 'Cruyff’s Barcelona: a 3-4-3 with a diamond in midfield',
          view: 'full',
          players: [gk(6, 50), a(22, 30, 'CB'), a(22, 70, 'CB'), a(26, 50, 'K'), a(44, 50, 'G'), a(48, 28, 'M'), a(48, 72, 'M'), a(60, 50, 'L'), a(74, 12, 'W'), a(74, 88, 'W'), a(78, 50, '9')],
          caption: 'Cruyff often used a 3-4-3, with Koeman as the defender who built attacks, Guardiola as the pivot, and wingers who stayed wide. The idea: control the ball, control the space, and use the keeper as another player.',
        },
        {
          t: 'callout',
          tone: 'note',
          title: '1974: the final',
          text: 'The Netherlands kicked off, played 15 passes without a West German touch and won a penalty in the first minute (Neeskens, 1–0). West Germany then equalised from a penalty (Breitner) and took the lead through Gerd Müller before half-time. The Dutch dominated much of the game but lost 2–1. The match is a reminder that style does not guarantee results.',
        },
      ],
    },
    {
      id: 'legacy',
      title: 'What the Dutch school left',
      lead: 'Principles still used today.',
      blocks: [
        {
          t: 'table',
          head: ['Principle', 'Where it appears today'],
          rows: [
            ['Positional flexibility', 'Inverted full-backs, hybrid roles, midfield "boxes"'],
            ['Pressing as a unit', 'Gegenpressing, Guardiola’s teams, Klopp’s teams'],
            ['The keeper as an outfield player', 'Sweeper-keepers and build-up from the back'],
            ['Technical development for all', 'Academies: Ajax’s TIPS, La Masia'],
            ['Compact space and high line', 'High defensive line with the offside trap'],
          ],
        },
        { t: 'p', text: 'Cruyff’s own summary was that "playing football is very simple, but playing simple football is the hardest thing there is." The Dutch school influenced Sacchi in Italy, Guardiola in Spain and Germany, and through La Masia, Spain’s 2008–12 national team.' },
      ],
    },
  ],
  sources: [
    'Winner, D. (2000). *Brilliant Orange: The Neurotic Genius of Dutch Football*. Bloomsbury.',
    'Cruyff, J. (2016). *My Turn: The Autobiography*. Macmillan.',
    'Wilson, J. (2008). *Inverting the Pyramid: The History of Football Tactics*. Orion.',
    'Kuper, S. (2011 ed.). *Ajax, the Dutch, the War*. Orion.',
  ],
  related: ['sports/football/schools/cruyff-guardiola-and-positional-play', 'sports/football/methods/academies-and-youth-development', 'sports/football/schools/sacchi-and-the-modern-press'],
}

export default guide
