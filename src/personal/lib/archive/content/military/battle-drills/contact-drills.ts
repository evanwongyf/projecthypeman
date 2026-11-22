import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A contact drill is what a whole section does, together and in a fixed order, the moment contact with the enemy happens, the same logic as individual movement technique and fire and movement, scaled up to a group with a commander making decisions in real time.',
  nutshell: [
    'The first three steps are almost always the same regardless of what happens next: **take cover, return fire, and the commander assesses** the situation.',
    'The assessment decides everything that follows: has the section achieved **fire superiority**, is the fight **even**, or is the section **badly outnumbered**?',
    'Each of those three readings leads to a genuinely different, correct response, **assault, call for support, or break contact**, and all three are legitimate tactical choices, not one "brave" option and two "weak" ones.',
    'Breaking contact (disengaging and falling back) is often the **correct** decision when outnumbered, not a failure, fighting a battle a section cannot win is how units take unnecessary casualties.',
  ],
  sections: [
    {
      id: 'walkthrough',
      title: 'Walk through the decision',
      blocks: [
        { t: 'mil-viz', viz: 'contact-drill' },
      ],
    },
    {
      id: 'three-outcomes',
      title: 'The three outcomes, compared',
      blocks: [
        {
          t: 'table',
          head: ['Situation', 'Decision', 'Why'],
          rows: [
            ['Section is clearly winning the firefight', 'Fire and movement forward, then assault', 'Fire superiority means the enemy is suppressed enough that closing the distance is survivable, and finishing the engagement quickly denies the enemy time to reinforce or reposition'],
            ['Firefight is roughly even, neither side dominant', 'Hold position, call for support, keep suppressing', 'Advancing into an unresolved firefight risks casualties for no gain; holding and calling for indirect fire or a flanking element from elsewhere lets the section win without taking unnecessary risk'],
            ['Section is badly outnumbered or outgunned', 'Break contact: cover, then fall back to the rally point', 'No amount of individual courage reliably overcomes a serious numbers or firepower disadvantage, disengaging preserves the section to fight another time, on better terms'],
          ],
        },
        { t: 'callout', tone: 'tip', title: 'The decision is the commander’s job, not a vote', text: 'Everyone in the section keeps doing their individual job (covering, moving, reloading) while this assessment happens, the commander is reading the situation and giving the order, not polling the section. Knowing your own role well enough that you can execute it without needing the full picture yourself is exactly why individual drills are rehearsed so heavily beforehand.' },
      ],
    },
    {
      id: 'break-contact',
      title: 'Breaking contact, specifically',
      blocks: [
        { t: 'p', text: 'Breaking contact uses the exact same fire-and-movement principle as advancing, just pointed the other way: one element covers while the rest fall back, then they swap, bounding away from the enemy rather than toward it, until the section reaches a pre-agreed rally point.' },
        {
          t: 'flow',
          title: 'Breaking contact',
          nodes: [
            { label: 'Commander orders break contact', tone: 'process' },
            { label: 'Nearest element to the enemy covers', tone: 'process' },
            { label: 'Rest of the section falls back in bounds', sub: 'same alternating cover-and-move pattern as advancing', tone: 'process' },
            { label: 'Section reassembles at the rally point', tone: 'output' },
            { label: 'Commander accounts for everyone and reports the contact', tone: 'human' },
          ],
        },
      ],
    },
  ],
  sources: [
    'U.S. Army. *FM 3-21.8: The Infantry Rifle Platoon and Squad* (publicly released field manual, battle drills chapter).',
    'British Army. *Infantry Training Volume 1: Skill at Arms* (publicly referenced fieldcraft fundamentals).',
  ],
  related: ['military/fieldcraft/fire-and-movement', 'military/battle-drills/enemy-overrun-and-defence', 'military/communications/sitrep-and-radio-reports'],
}

export default guide
