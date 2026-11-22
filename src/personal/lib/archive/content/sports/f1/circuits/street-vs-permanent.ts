import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Some Formula 1 races are held on roads that carry buses and taxis the rest of the year; others on circuits built only for racing. The difference changes almost everything: grip, bumps, the price of a mistake, how often the safety car comes out and how the race is won.',
  nutshell: [
    'A **street circuit** uses public roads closed for the event; a **permanent circuit** is purpose-built and used for racing all year; some venues sit in between.',
    'Street tracks start **green and dusty** and gain grip sharply over the weekend as rubber goes down, so practice times can be misleading.',
    'Walls instead of run-off mean a small error ends a race, so street tracks see more **safety cars** and reward precision and confidence.',
    'Narrow roads make overtaking hard, so **qualifying position** and strategy around safety cars matter more.',
    'Permanent tracks have smoother surfaces, wide run-off and stable grip, and usually allow more wheel-to-wheel racing.',
  ],
  sections: [
    {
      id: 'three-kinds',
      title: 'Three kinds of venue',
      blocks: [
        {
          t: 'table',
          head: ['Kind', 'What it is', 'Examples'],
          rows: [
            ['Pure street circuit', 'Public city roads, closed for the event, lined with temporary walls and fences', 'Monaco, Marina Bay (Singapore), Baku, Las Vegas'],
            ['Semi-permanent or park circuit', 'Roads in a park or around a venue that are not normal through-traffic streets, with some permanent facilities', 'Albert Park (Melbourne), Circuit Gilles Villeneuve (Montréal), Miami'],
            ['Purpose-built street-style', 'A new, dedicated venue designed to feel like a street track: walls close to the racing line, high speeds', 'Jeddah Corniche Circuit'],
            ['Permanent circuit', 'A closed racing facility used for many series all year', 'Silverstone, Spa-Francorchamps, Monza, Suzuka, Interlagos'],
          ],
          caption: 'The boundaries are fuzzy; organisers and the FIA use the labels loosely. Montréal’s Île Notre-Dame, for example, is a public park road most of the year.',
        },
        { t: 'callout', tone: 'fact', title: 'Same safety standard, different tools', text: 'Every F1 venue, street or permanent, must hold the FIA’s highest circuit licence, Grade 1. Street tracks meet it with barriers, fences and carefully placed escape roads instead of wide run-off.' },
      ],
    },
    {
      id: 'surface',
      title: 'Grip, bumps and track evolution',
      blocks: [
        { t: 'p', text: 'Public roads are laid for cars and lorries, not for racing. The asphalt is often smoother in some places and patched in others, crossed by drains, manhole covers (which are welded or fixed down for the event), painted road markings and camber built to shed rainwater. Each changes grip from one metre to the next.' },
        {
          t: 'cards',
          items: [
            { title: 'Green track', body: 'At the start of the weekend the surface is dirty and carries no rubber. Grip is low and drivers slide.', tag: 'Friday' },
            { title: 'Rubbering in', body: 'Every lap leaves a thin layer of rubber on the racing line. On a street track, grip can improve by seconds a lap across the weekend.', tag: 'Saturday' },
            { title: 'Off line', body: 'Away from the racing line the surface stays dusty and full of rubber pieces (“marbles”), so going off line to overtake costs grip.', tag: 'Race' },
          ],
        },
        {
          t: 'example',
          title: 'Why Friday times mislead at a street track',
          lines: [
            { label: 'Observation', text: 'A team tops first practice but is fifth in qualifying.' },
            { label: 'Track evolution', text: 'Everyone gets faster as grip builds; whoever ran latest on the cleanest track looks best.' },
            { label: 'Fuel and tyres', text: 'Programmes differ: one team may run light fuel and soft tyres while another runs heavy.' },
            { label: 'Lesson', text: 'Compare long runs and the last qualifying runs, not single Friday laps.' },
          ],
        },
        { t: 'p', text: 'Bumps force teams to raise ride height and soften the suspension, which on a ground-effect car costs downforce from the floor. A permanent track, resurfaced to racing standard, lets the car run lower and stiffer. See [how a circuit shapes the car](@sports/f1/circuits/circuit-setup-and-characteristics).' },
      ],
    },
    {
      id: 'walls',
      title: 'Walls, mistakes and safety cars',
      blocks: [
        { t: 'p', text: 'On a permanent circuit a driver who runs wide usually loses a second in the run-off. On a street circuit the same error means a wall, a broken suspension and, often, a safety car while the car is recovered. That changes how drivers drive (a margin is left in places) and how teams plan the race.' },
        {
          t: 'table',
          head: ['Factor', 'Street circuit', 'Permanent circuit'],
          rows: [
            ['Price of an error', 'Contact with a wall, usually race over', 'Time lost in run-off or gravel'],
            ['Safety car likelihood', 'High, because stricken cars are hard to recover', 'Lower, because cars can often be moved behind barriers'],
            ['Overtaking', 'Hard: narrow, few long braking zones', 'Easier: wider, more braking zones'],
            ['Qualifying importance', 'Very high', 'High, but recoverable'],
            ['Strategy', 'Plan around a likely safety car; a “cheap” pit stop under it is valuable', 'Tyre degradation usually decides the plan'],
            ['Visibility', 'Blind corners between walls', 'Long sight lines'],
          ],
        },
        { t: 'callout', tone: 'tip', title: 'The cheap pit stop', text: 'Under a safety car the field slows, so a pit stop costs much less time than at racing speed. At tracks where a safety car is likely, teams keep options open for one, sometimes staying out longer on old tyres and hoping to pit under it. See [race strategy](@sports/f1/racecraft/race-strategy).' },
      ],
    },
    {
      id: 'case-studies',
      title: 'Street circuits in practice',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Monaco', body: 'About 3.3 km of harbour-side streets, the slowest and narrowest track on the calendar. Overtaking in the race is close to impossible, so Saturday decides most Sundays. The tunnel takes cars from bright light into shade and back at high speed.', tag: 'since 1950 in the championship' },
            { title: 'Marina Bay, Singapore', body: 'The first F1 night race (2008). Heat, humidity and a long, bumpy lap make it one of the most physically demanding races; a safety car has been a regular feature.', tag: 'night' },
            { title: 'Baku', body: 'A mix of extremes: a very long flat-out run along the seafront where cars reach well over 300 km/h, and a narrow, twisting section past the walls of the Old City.', tag: 'since 2016' },
            { title: 'Las Vegas', body: 'A night race on and around the Strip, with long straights and cold desert-night temperatures that make it hard to bring tyres up to their working temperature.', tag: 'since 2023' },
            { title: 'Jeddah', body: 'A purpose-built venue with street-track walls and one of the highest average speeds of any street-style circuit. Blind, fast corners between walls raised safety debates when it arrived.', tag: 'since 2021' },
            { title: 'Albert Park', body: 'Roads around a lake in a Melbourne park. Its 2021–22 redesign widened corners and removed a chicane to help overtaking; it has often opened the season.', tag: 'park circuit' },
          ],
        },
      ],
    },
    {
      id: 'permanent',
      title: 'What permanent circuits offer',
      blocks: [
        {
          t: 'list',
          items: [
            '**Wide run-off** (asphalt or gravel) lets drivers attack without risking a wall, so they can drive right to the limit.',
            '**Smooth, consistent surfaces** let teams run lower ride heights and stiffer suspension for more downforce.',
            '**Fast, open corners** at circuits like Silverstone, Suzuka and Spa would be too dangerous between walls.',
            '**Year-round use** means the surface is rarely as green at the start of a weekend; grip still evolves, but less dramatically.',
            '**Testing and other series** use the same track, so teams have more data on it.',
          ],
        },
        {
          t: 'dodont',
          do: [
            'Expect qualifying to matter most at Monaco, Singapore and other narrow tracks.',
            'Expect bigger jumps in lap time across a street-circuit weekend.',
            'Weigh the chance of a safety car when judging a strategy call on a street track.',
          ],
          dont: [
            'Assume a street track is slow: Jeddah, Baku and Las Vegas have some of the highest top speeds of the year.',
            'Assume walls make a track unsafe: barrier design and escape roads are tuned to each corner.',
            'Read Friday street-circuit times as a reliable pecking order.',
          ],
        },
      ],
    },
    {
      id: 'practice',
      title: 'Check yourself',
      blocks: [
        {
          t: 'example',
          title: 'Questions, with answers',
          lines: [
            { label: 'Q1', text: 'Why might a team choose a softer suspension set-up for a street race?' },
            { label: 'A1', text: 'To ride bumps, drains and kerbs without the car bouncing off the road or damaging the floor.' },
            { label: 'Q2', text: 'A driver qualifies tenth in Monaco with the fastest car. What is their best hope in the race?' },
            { label: 'A2', text: 'Strategy and luck: a well-timed pit stop, ideally under a safety car, rather than overtakes on track.' },
            { label: 'Q3', text: 'Las Vegas has long straights. Why is it still not easy for teams?' },
            { label: 'A3', text: 'Cold night temperatures make it hard to get tyres warm, so grip is low and graining is common.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'FIA. *International Sporting Code*, Appendix O: circuit licensing and safety requirements.',
    'Formula 1 official circuit guides at formula1.com.',
  ],
  related: [
    'sports/f1/circuits/iconic-circuits',
    'sports/f1/circuits/circuit-anatomy',
    'sports/f1/circuits/circuit-setup-and-characteristics',
    'sports/f1/racecraft/race-strategy',
    'sports/f1/rules-penalties/flags-and-safety-procedures',
  ],
}

export default guide
