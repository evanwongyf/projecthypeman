import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'KIA, WIA and MIA are reporting categories, not just grim vocabulary, a commander needs to know exactly what happened to every person in a unit, in standard terms everyone up the chain understands the same way, and casualty triage exists to make sure limited first-aid resources go where they save the most lives.',
  nutshell: [
    '**KIA** (killed in action), **WIA** (wounded in action) and **MIA** (missing in action) are standard casualty-reporting categories, used so every level of command understands a casualty report the same way.',
    '**Triage** sorts multiple casualties by urgency, not severity alone, the goal is saving the most lives with the resources actually available, which sometimes means treating a less severely injured person first.',
    'The widely taught **START method** (Simple Triage and Rapid Treatment) sorts casualties into four categories in under a minute each, using only whether they can walk, whether they’re breathing, their breathing rate, and whether they have a pulse at the wrist.',
    'Basic buddy first aid follows a fixed priority order (often remembered as **MARCH**: massive bleeding, airway, respiration, circulation, head/hypothermia), stopping severe bleeding comes first because it is the most common preventable cause of death from survivable wounds.',
  ],
  sections: [
    {
      id: 'the-terms',
      title: 'The reporting terms',
      blocks: [
        {
          t: 'table',
          head: ['Term', 'Meaning'],
          rows: [
            ['KIA, Killed in action', 'Died as a direct result of hostile action, at the time of or very shortly after the incident'],
            ['DOW, Died of wounds', 'Survived the initial incident but later died of the wounds sustained, often after evacuation or treatment had begun'],
            ['WIA, Wounded in action', 'Injured by hostile action but alive, covers everything from minor to critical, which is exactly why triage categories exist underneath this broader label'],
            ['MIA, Missing in action', 'Unaccounted for after an engagement, status genuinely unknown, which is treated with real urgency precisely because it isn’t yet known whether the person is a casualty at all'],
            ['DNBI, Disease and non-battle injury', 'Illness or injury not caused by enemy action (heat injury, accidents, sickness), historically responsible for a very large share of total casualties in many conflicts, which is part of why fitness, hydration and basic safety discipline matter so much in training'],
          ],
          caption: 'These categories exist so a report moving up the chain means exactly the same thing at every level, a section leader, a company commander and a hospital all need to interpret "2 WIA, 1 MIA" identically.',
        },
      ],
    },
    {
      id: 'triage',
      title: 'Triage: sorting by urgency, not just severity',
      blocks: [
        { t: 'mil-viz', viz: 'casualty-triage' },
        { t: 'p', text: 'Triage exists because, with multiple casualties and limited hands and supplies, treating people strictly in the order they’re found, or spending all available time on the most severely injured person regardless of their odds, can cost more lives overall than a quick, deliberate sort first.' },
      ],
    },
    {
      id: 'buddy-aid',
      title: 'Buddy aid priority order',
      blocks: [
        {
          t: 'levels',
          items: [
            { name: 'Massive haemorrhage', body: 'Stop severe, life-threatening bleeding first, direct pressure, a tourniquet on a limb if needed, since uncontrolled bleeding is one of the most common preventable causes of death from an otherwise survivable wound, and it can kill in minutes.', verbs: ['press', 'pack', 'tourniquet'] },
            { name: 'Airway', body: 'Check the airway is clear, a casualty who can speak clearly generally has an open airway; an unconscious casualty needs the airway checked and positioned to prevent choking.', verbs: ['check', 'clear', 'position'] },
            { name: 'Respiration', body: 'Check breathing is present and effective, certain chest injuries need specific treatment to stop air building up where it shouldn’t.', verbs: ['watch', 'listen', 'treat'] },
            { name: 'Circulation', body: 'Check for shock (pale, cold, clammy skin; rapid weak pulse) and treat other, less urgent bleeding once the massive haemorrhage step is already handled.', verbs: ['check pulse', 'treat shock'] },
            { name: 'Head injury / hypothermia', body: 'Protect against further head injury and against heat loss, a casualty lying still, possibly in shock, loses body heat fast even in a warm climate, and hypothermia makes every other injury harder to survive.', verbs: ['protect', 'insulate', 'monitor'] },
          ],
          caption: 'Often remembered by the mnemonic MARCH. This is the widely taught, publicly documented priority order behind most modern combat first-aid training, always follow your own unit’s current first-aid training and any qualified medic’s direction over a general summary like this one.',
        },
        { t: 'callout', tone: 'fact', title: 'Why bleeding control comes before airway', text: 'This ordering can look surprising next to older civilian first-aid training (which historically taught airway first), but combat medicine specifically prioritises stopping massive bleeding first because, on a battlefield, uncontrolled haemorrhage from a limb wound was found to be a leading cause of preventable death, and a tourniquet applied in seconds can be the difference-maker in a way that most other interventions can’t match for speed of effect.' },
      ],
    },
  ],
  sources: [
    'Committee on Tactical Combat Casualty Care (CoTCCC). *Tactical Combat Casualty Care Guidelines* (publicly published).',
    'Benson, M., Koenig, K. L., & Schultz, C. H. (1996). Disaster triage: START, then SAVE. *Prehospital and Disaster Medicine*, 11(2), 117–124.',
  ],
  related: ['military/battle-drills/enemy-overrun-and-defence', 'military/battle-drills/contact-drills', 'military/communications/sitrep-and-radio-reports'],
}

export default guide
