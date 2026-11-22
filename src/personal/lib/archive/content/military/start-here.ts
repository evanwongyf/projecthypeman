import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'This shelf covers the infantry fieldcraft fundamentals most commonly taught in basic military training field camps, the kind of ground Singapore’s National Service field camp (often referred to as IFC, individual field craft) builds on: reacting to fire, moving as a buddy pair, reporting what you see, and understanding how casualties are classified. It is written for revision and understanding, not as a replacement for anything your instructors tell you.',
  nutshell: [
    'Every page covers **general, publicly known infantry fieldcraft concepts**, fire and movement, individual movement technique, contact drills, casualty terms, radio reporting, not any specific unit’s classified or restricted training material.',
    '**Always follow your actual instructors, current unit SOPs, and safety briefings over anything on this shelf**, live training safety rules, current doctrine and your chain of command’s directions always take priority over a conceptual revision page.',
    'The goal here is **understanding the "why"** behind each drill, once the logic clicks (why a rush is 3–5 seconds, why a buddy pair never moves together, why a report has a fixed order), the physical drill itself gets much easier to execute and remember under pressure.',
    'Several pages include **interactive, animated walkthroughs** you can step through at your own pace, a bounding-overwatch animation, a proning sequence, a branching contact-drill decision tool, and a SITREP builder you can practise with.',
  ],
  sections: [
    {
      id: 'what-this-is-and-isnt',
      title: 'What this is, and what it deliberately is not',
      blocks: [
        {
          t: 'table',
          head: ['This shelf is…', 'This shelf is NOT…'],
          rows: [
            ['A conceptual overview of widely taught, publicly documented infantry fieldcraft', 'A reproduction of any restricted, classified or unit-specific training manual'],
            ['Revision material to build understanding before or alongside real training', 'A substitute for your instructors, your unit’s current SOPs, or official safety briefings'],
            ['General enough to apply across most infantry training programmes (SAF’s fieldcraft, like many Commonwealth-influenced militaries, shares its roots with this common base)', 'An exact, verbatim description of current SAF doctrine, which can change and which this shelf has no special access to'],
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Safety always comes first, and always comes from your instructors', text: 'Field camp involves real physical risk: live or blank ammunition, pyrotechnics, difficult terrain, heat and fatigue. Nothing on this shelf overrides a safety instruction from a qualified instructor, a range safety officer, or your chain of command, if anything here ever seems to conflict with what you are told on the ground, what you are told on the ground is correct.' },
      ],
    },
    {
      id: 'route',
      title: 'A route through the shelf',
      blocks: [
        {
          t: 'links',
          items: [
            { path: 'military/fieldcraft/imt-and-contact-reaction', note: 'Start here: the first thing every recruit drills, reacting to fire' },
            { path: 'military/fieldcraft/reaction-to-enemy-fire', note: 'IFC 3 notes: what to do the moment you are fired on, day and night' },
            { path: 'military/fieldcraft/fire-and-movement', note: 'How a buddy pair advances under fire, animated step by step' },
            { path: 'military/battle-drills/contact-drills', note: 'How a whole section reacts, with a branching decision tool' },
            { path: 'military/communications/sitrep-and-radio-reports', note: 'Practise building a SALUTE report' },
          ],
        },
        { t: 'p', text: 'Fitness matters just as much as fieldcraft knowledge for field camp, see [military and uniformed-service fitness tests](@fitness/combat/military) on the fitness shelf for IPPT-specific training guidance.' },
      ],
    },
  ],
  sources: [],
  related: ['military/fieldcraft/fire-and-movement', 'military/battle-drills/contact-drills', 'fitness/combat/military'],
}

export default guide
