import type { Guide } from '../../../../guide'
import { a } from '../../../../football-shapes'

const guide: Guide = {
  intro:
    'Tactical periodisation is the training method developed by the Portuguese professor Vítor Frade at the University of Porto and made famous by José Mourinho, who studied under Frade’s ideas and applied them at Porto, Chelsea and Inter. Its central idea is that football is a whole, and that the technical, physical, psychological and tactical sides of the game cannot be separated: training should always have the team’s game model at its core, and the physical load is organised around it. This guide explains the game model, the weekly cycle (the "morphocycle") with its patterns of acquisition, recuperation and activation, and how the method differs from conventional fitness periodisation.',
  nutshell: [
    'The **game model** is the team’s idea of how it wants to play in each phase; every exercise should serve it.',
    'The **morphocycle** is the weekly training cycle: each day emphasises a different **tactical dimension** and a different **load**.',
    'Typical patterns: a **recovery** day after the match, then **strength/tension**, **endurance/duration**, **speed**, and **activation** before the next match.',
    'Fitness is **trained within the game**: no isolated running; the ball is almost always present.',
    'The method is a **philosophy**, with limited peer-reviewed testing against conventional approaches.',
  ],
  sections: [
    {
      id: 'model',
      title: 'The game model',
      lead: 'The idea that organises training.',
      blocks: [
        {
          t: 'table',
          head: ['Phase of the game', 'What the model specifies'],
          rows: [
            ['Organisation in attack', 'Shape, roles, patterns of play, how the team builds up and creates'],
            ['Organisation in defence', 'Block, line height, pressing triggers, marking rules'],
            ['Transition to attack', 'What to do when the ball is won: first pass, runners, support'],
            ['Transition to defence', 'What to do when the ball is lost: counter-press or recovery'],
            ['Set pieces', 'Routines for attacking and defending'],
          ],
        },
        { t: 'p', text: 'Frade’s principle of **specificity** says that training exercises should reproduce the game’s demands in every dimension at once: a pressing drill is a technical, tactical, physical and psychological exercise together. A session that isolates fitness (laps around the pitch) is, in this view, not training for football.' },
      ],
    },
    {
      id: 'cycle',
      title: 'The weekly cycle',
      lead: 'Acquisition, recuperation and activation.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Day after the match: recovery', body: 'Low-load activity and analysis; the starters recover, others play a match or intensive session.' },
            { title: 'Strength (tension) day', body: 'Small spaces and high-intensity actions with short durations: many accelerations and decelerations.' },
            { title: 'Endurance (duration) day', body: 'Larger spaces, longer exercise blocks and a moderate intensity; the team practises the model’s phases for longer.' },
            { title: 'Speed day', body: 'Large spaces, high-speed actions with long recoveries; quick transitions and finishing.' },
            { title: 'Activation before the match', body: 'Low volume, specific tactical rehearsal and set pieces; players arrive fresh.' },
          ],
        },
        {
          t: 'pitch',
          title: 'A tension-day exercise: small area with high intensity',
          view: 'attack',
          zones: [{ x: 70, y: 30, w: 20, h: 40, label: '20 × 27 m area', tone: 'a' }],
          players: [a(74, 40), a(80, 36), a(84, 52), a(76, 58), a(86, 44)],
          caption: 'A small pitch with few players produces many sprints, turns and decisions in a short time: the tension of the match in miniature.',
        },
        { t: 'callout', tone: 'note', title: 'Evidence', text: 'Tactical periodisation has strong support among practitioners but limited randomised testing; most studies of training load use other frameworks (acute:chronic workload, periodised blocks). Treat the method as a coherent philosophy, and compare with the guide on load management.' },
      ],
    },
  ],
  sources: [
    'Tamarit, X. (2013). *What is Tactical Periodization?* Bennion Kearny.',
    'Frade, V. (various): lectures and interviews on tactical periodisation, University of Porto.',
    'Mourinho, J. interviews on training methodology; Delgado-Bordonau, J. L. & Mendez-Villanueva, A. (2012). Tactical periodization: Mourinho’s best-kept secret? *Soccer NSCAA Journal*, 3(1), 28–34.',
  ],
  related: ['sports/football/methods/rondos-and-positional-games', 'sports/analytics/load-management-injury', 'sports/football/schools/english-football-ferguson-wenger-and-after'],
}

export default guide
