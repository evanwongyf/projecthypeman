import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Association football is two teams of eleven trying to put one ball in the other\'s goal, and almost everything else (the formations, the pressing, the set pieces) is a way of creating space to do it. This page is the map of the shelf: how a match works, who plays where, and which science pages elsewhere in Sports explain the game\'s most famous moments.',
  nutshell: [
    'A match is two halves of 45 minutes plus stoppage time, eleven players a side, one of them the goalkeeper, who alone may handle the ball inside their own penalty area.',
    'Most professional pitches are about 105 × 68 m, the goal is 7.32 m wide and 2.44 m high, and the penalty spot is 11 m from the goal line.',
    'The ball (size 5) weighs 410–450 g and is 68–70 cm round, light enough to be bent in flight and heavy enough to be struck at over 100 km/h.',
    'Formations such as 4-4-2 and 4-3-3 list the players from defence to attack; tactics are about how the shape moves with and without the ball.',
    'The shelf has pitch diagrams and live labs throughout: expected goals, formations, passing networks, pressing, offside and pitch control. Follow the route below, or jump to the shelf you need.',
  ],
  sections: [
    {
      id: 'match',
      title: 'How a match works',
      blocks: [
        {
          t: 'table',
          head: ['Element', 'The standard'],
          rows: [
            ['Duration', 'Two halves of 45 minutes; the referee adds stoppage time. Knockout games can add extra time and a penalty shoot-out.'],
            ['Players', 'Eleven a side. Most competitions allow up to five substitutions in three windows (plus half-time).'],
            ['The pitch', 'About 105 × 68 m in the top leagues. The laws allow a range, and international matches use 100–110 m by 64–75 m.'],
            ['The goal', '7.32 m wide and 2.44 m high (8 yards by 8 feet).'],
            ['Restarts', 'Kick-off, throw-in, goal kick, corner, free kick (direct or indirect) and penalty kick from 11 m.'],
            ['Cards', 'A yellow card is a caution; two in a match, or a straight red card, is a sending-off.'],
          ],
          caption: 'Competitions can vary these slightly. The Laws of the Game are maintained by the International Football Association Board (IFAB).',
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Offside in one sentence',
          text: 'A player is in an offside position if any part of their head, body or feet is in the opponents\' half and nearer to the goal line than both the ball and the second-last opponent (hands and arms do not count). Being there is not itself an offence: a player is only penalised if they take part in play from that position. This is why defenders step up as a line, and why attackers time their runs.',
        },
      ],
    },
    {
      id: 'positions',
      title: 'Who plays where',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Goalkeeper', tag: '1 player', body: 'The last line of defence and the first of attack: stops shots, commands the penalty area and starts moves with throws and kicks.' },
            { title: 'Defenders', tag: 'centre-backs and full-backs', body: 'Centre-backs defend the middle and win aerial duels; full-backs cover the flanks and, in modern teams, overlap to attack.' },
            { title: 'Midfielders', tag: 'defensive, central, attacking', body: 'Link defence and attack. A defensive midfielder shields the back line; an attacking midfielder looks for the pass that breaks it.' },
            { title: 'Forwards and wingers', tag: 'the finishers', body: 'A centre-forward leads the line and finishes chances; wingers stretch the pitch and deliver crosses or cut inside to shoot.' },
          ],
        },
        {
          t: 'p',
          text: 'A **formation** is read from the back to the front, leaving out the goalkeeper: **4-4-2** is four defenders, four midfielders and two forwards; **4-3-3** has three midfielders and three forwards. The numbers are a starting shape, not a fixed position: a team in possession may look like a 3-2-5 and out of it like a 4-4-2.',
        },
      ],
    },
    {
      id: 'route',
      title: 'A route through the football shelf',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'The game', body: 'The laws and offside (with a lab), the five phases of play, the zones and half-spaces, and how to watch a match tactically.' },
            { title: 'Positions and roles', body: 'Goalkeepers, centre-backs, full-backs and wing-backs, midfield roles and forwards.' },
            { title: 'Expected goals and data', body: 'xG from first principles with a live model, shot maps and luck, timelines and match probabilities, xT, PPDA and pitch control.' },
            { title: 'Tactics', body: 'Formations, pressing, low blocks, the offside trap, marking systems, build-up, overloads, crossing, transitions, back threes and set pieces.' },
            { title: 'Passing styles', body: 'The geometry of passing, types of pass, combinations and the third man, possession versus directness, and passing networks.' },
            { title: 'Schools and ideologies', body: 'From the pyramid and the WM through Hungary, Brazil, catenaccio, Total Football, Sacchi, Ferguson and Wenger, positional play, Gegenpressing and Bielsa to the 2020s.' },
            { title: 'Methods and matches', body: 'Rondos, tactical periodisation, academies and scouting; and ten famous matches analysed with diagrams.' },
          ],
        },
        {
          t: 'cards',
          cols: 3,
          items: [
            { title: 'Start with a lab', tag: 'hands on', body: 'Try the xG lab in the xG shelf, the formation lab in tactics and the offside lab in the game shelf.' },
            { title: 'Follow a club', tag: 'by era', body: 'Read the schools shelf in order: each coach built on, or reacted to, the one before.' },
            { title: 'Learn from a match', tag: 'case studies', body: 'The matches shelf shows the tactics at work in ten famous games.' },
          ],
        },
      ],
    },
    {
      id: 'science',
      title: 'The science of football, already on the shelf',
      blocks: [
        { t: 'p', text: 'A free kick is a projectile that spins. Try the launch explorer: the same equations that bend a free kick into the corner of the goal explain a basketball shot and a javelin throw.' },
        { t: 'sports-viz', viz: 'projectile' },
        {
          t: 'links',
          items: [
            { path: 'sports/physics/spin-rotation', note: 'Why a free kick bends round the wall and a knuckleball wobbles.' },
            { path: 'sports/physics/projectile-motion', note: 'Launch angle, speed and range for a long ball.' },
            { path: 'sports/physics/drag-fluid-dynamics', note: 'How air resistance shapes a ball\'s flight.' },
            { path: 'sports/analytics/expected-goals', note: 'Why a tap-in is worth more than a wonder strike.' },
            { path: 'sports/physiology/energy-systems', note: 'What powers a player over 90 minutes.' },
            { path: 'sports/analytics/load-management-injury', note: 'Keeping a squad fit across a season.' },
            { path: 'sports/technology/timing-tracking-tech', note: 'Goal-line technology, VAR and player tracking.' },
          ],
        },
      ],
    },
  ],
  sources: ['International Football Association Board. *Laws of the Game* (current edition).', 'Wilson, J. (2008). *Inverting the Pyramid: The History of Football Tactics*. Orion.'],
  related: ['sports/start-here', 'sports/physics/spin-rotation', 'sports/analytics/expected-goals', 'sports/basketball/start-here'],
}

export default guide
