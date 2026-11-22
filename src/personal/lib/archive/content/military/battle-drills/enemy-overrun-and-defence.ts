import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A good defensive plan assumes it might fail, and plans for that case in advance, not out of pessimism, but because the single worst time to improvise a withdrawal plan is during the chaos of actually being overrun.',
  nutshell: [
    'A defensive position is built in **depth**: positions covering each other’s blind spots, not just facing outward in one direction.',
    'Fire is held until the enemy reaches **effective range**, opening up too early reveals the position before it matters.',
    'The **final protective fire (FPF) line** is a last, pre-planned barrier of fire meant to break an assault before it reaches the position.',
    'Every defensive plan includes a **rally point**, agreed before contact starts, if the position is overrun, soldiers fight through individually rather than freezing, then move to the rally point rather than scattering.',
  ],
  sections: [
    {
      id: 'walkthrough',
      title: 'Watch it unfold',
      blocks: [
        { t: 'mil-viz', viz: 'overrun-response' },
      ],
    },
    {
      id: 'defence-in-depth',
      title: 'Why defence in depth matters',
      blocks: [
        { t: 'p', text: 'A single line of positions all facing the same direction has an obvious weakness: once breached anywhere, the whole line is exposed from behind. Positions arranged with overlapping arcs of fire, at different depths, mean that even if the enemy gets past the forward edge, they run into more defenders covering from a different angle, slowing an attack down rather than letting a single breakthrough collapse the whole position at once.' },
        {
          t: 'terms',
          items: [
            { term: 'Mutually supporting positions', def: 'Positions placed so each one can be covered by fire from at least one other position, a single position knocked out doesn’t leave a clean, unguarded gap.' },
            { term: 'Final protective fire (FPF)', def: 'A pre-registered line of fire (often combining section weapons with pre-planned indirect fire) that every defender knows to shift onto if the enemy crosses it, the last barrier before the position itself.' },
            { term: 'Rally point (RP)', def: 'A location agreed on before contact, known to everyone in the unit, used to regroup if the position is lost or the unit becomes separated, chosen for being identifiable, reachable from multiple directions, and defensible enough to hold briefly while regrouping.' },
          ],
        },
      ],
    },
    {
      id: 'if-overrun',
      title: 'If the position is actually overrun',
      blocks: [
        {
          t: 'dodont',
          do: ['Fight through at close quarters rather than freezing, hesitation at the moment of contact is far more dangerous than acting imperfectly', 'Move toward the rally point individually or in pairs once disengaged, using the same cover-and-move principles as any other movement under fire', 'Account for everyone at the rally point before deciding the next move, a commander needs an accurate picture of who is actually there'],
          dont: ['Scatter in random directions, without a shared rally point, a unit that breaks apart under pressure can take far longer to reorganise, if it reorganises at all', 'Assume an overrun position automatically means the fight is lost, reaching the rally point with most of the unit intact, able to reorganise and respond, is itself a successful outcome of a bad situation'],
        },
        { t: 'callout', tone: 'warn', title: 'This is conceptual, not a tactical manual', text: 'Real defensive planning, exactly where positions go, how FPF is coordinated with supporting units, what the specific withdrawal routes are, depends entirely on the actual ground, the mission, and current orders, set by a commander who can see the terrain and knows the plan. This page explains why these concepts exist, not how to execute them in a specific live exercise.' },
      ],
    },
  ],
  sources: [
    'U.S. Army. *FM 3-21.8: The Infantry Rifle Platoon and Squad* (publicly released field manual, defensive operations chapter).',
    'British Army. *Infantry Training Volume 1: Skill at Arms* (publicly referenced fieldcraft fundamentals).',
  ],
  related: ['military/battle-drills/contact-drills', 'military/fieldcraft/camouflage-and-concealment', 'military/battle-drills/casualty-care-and-classification'],
}

export default guide
