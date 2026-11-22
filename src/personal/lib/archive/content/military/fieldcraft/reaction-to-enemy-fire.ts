import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'IFC 3 teaches what you do in the first seconds after you are fired on, and then what the group does next. The order is always the same: get down, get into cover, work out where the fire is coming from, then either win the firefight or break away from it. These are study notes in my own words from the IFC 3 e-learning slides, so use them to revise, not as a replacement for the module or your instructors.',
  nutshell: [
    '**First move: prone down and get into the nearest cover.** Go down immediately to shrink your body’s exposure, then move quickly to cover by low crawl, keeping your body close to the ground.',
    '**Report what you see in a fixed order** (the slides list Group, Indication, Range, Location) so others can find the target fast.',
    '**Pin the enemy down with continuous suppressive fire**, then **fire and movement**: covering fire always alternates, and each move is covered by fire. The **4-second rule**: run for only 4 seconds, then low crawl to cover.',
    '**If the enemy cannot be overcome, disengage:** raise your rate of fire, fire and move to the rear, use a smoke screen to hide the group, and extricate promptly.',
    '**Artillery is different:** go face-down at once, shout "ARTY! ARTY! ARTY!", and leave the impact area once the fire lifts. **At night**, the rules shift because you cannot see: fire back to pin them, then get out of the killing zone; for a flare, get out of the light or freeze.',
  ],
  sections: [
    {
      id: 'sequence',
      title: 'The whole reaction at a glance',
      lead: 'This is the day, direct-fire sequence from the slides.',
      blocks: [
        {
          t: 'flow',
          nodes: [
            { label: 'Prone down', sub: 'immediately, to cut exposure', tone: 'human' },
            { label: 'Move to cover', sub: 'quickly, low crawl, body close to the ground', tone: 'process' },
            { label: 'Locate the enemy', sub: 'good cover with a good view of the target', tone: 'process' },
            { label: 'Target indication', sub: 'prompt and in a fixed order', tone: 'data' },
            { label: 'Pin the enemy down', sub: 'continuous suppressive fire', tone: 'model' },
            { label: 'Fire and movement', sub: 'or disengage if you cannot overcome them', tone: 'output' },
          ],
          title: 'When fired upon by the enemy (day)',
        },
        { t: 'p', text: 'The first two steps are individual and happen in seconds. The rest are done as a group and depend on a quick, accurate report from whoever spots the enemy first. See [individual movement technique](@military/fieldcraft/imt-and-contact-reaction) for the physical drill.' },
      ],
    },
    {
      id: 'cover-and-target-indication',
      title: 'Cover, then tell the group where the enemy is',
      blocks: [
        {
          t: 'list',
          items: [
            '**A good position does two jobs:** it protects you from enemy fire, and it lets you see the enemy target. Cover with no view is no use for fighting back.',
            '**Target indication must be prompt**, because everyone else is waiting on it before they can engage.',
          ],
        },
        {
          t: 'table',
          head: ['Letter', 'Stands for', 'What you say'],
          rows: [
            ['G', 'Group', 'Who is firing at the enemy (which of our elements is engaging)'],
            ['I', 'Indication', 'The direction of the target'],
            ['R', 'Range', 'The distance to the target'],
            ['L', 'Location', 'Where the target is, using something others can see'],
          ],
          caption: 'As listed on the slide. Your instructors may give the order or wording slightly differently, so use theirs.',
        },
        { t: 'callout', tone: 'tip', title: 'Why a fixed order helps', text: 'Under fire, your heart is racing and the noise is loud. A fixed sequence means you never have to think about what to say next, and the listener always knows what is coming. It is the same reason for the [SALUTE report](@military/communications/sitrep-and-radio-reports).' },
      ],
    },
    {
      id: 'win-the-firefight',
      title: 'Option 1: win it with fire and movement',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Pin the enemy down', body: 'Continuous suppressive fire keeps their heads down so they cannot aim properly at you.' },
            { title: 'Alternate covering fire and movement', body: 'One part of the group moves forward while another covers it. Movement must always be covered by fire, never the other way round.' },
            { title: 'Apply the 4-second rule', body: 'Run for only 4 seconds, then low crawl to your next cover. Staying up longer gives the enemy time to aim.' },
            { title: 'Keep covering fire alternating', body: 'There must always be somebody firing at the enemy while others move, so the enemy never gets a free moment.' },
            { title: 'Stay in line with your group IC', body: 'Group members keep level with the group IC (individual commander) so the group moves together and the IC can control it.' },
          ],
        },
        { t: 'p', text: 'The 4 seconds in your slides sits inside the usual 3-to-5-second range explained in [fire and movement](@military/fieldcraft/fire-and-movement), where you can also step through the animation.' },
      ],
    },
    {
      id: 'disengage',
      title: 'Option 2: where the enemy cannot be overcome',
      blocks: [
        {
          t: 'cycle',
          items: [
            { name: 'Appreciate the situation', body: 'Judge your chances of coming out on top. If the enemy cannot be overcome, decide to break away promptly rather than keep fighting a losing firefight.' },
            { name: 'Disengage', body: 'Raise your rate of fire so the enemy is kept down while you break contact.' },
            { name: 'Fire and movement to the rear', body: 'Same principle as moving forward, but backwards. Group members move before the ICs.' },
            { name: 'Screen with smoke', body: 'A smoke grenade forms a screen that reduces how much of your group or section the enemy can see.' },
            { name: 'Extricate promptly', body: 'Get away from the firefight as quickly as you can.' },
          ],
          caption: 'Not a loop in real life, but the stages run in this order.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Why the IC moves last', body: 'The slides give the reason: the IC moves after the rest of the group in order to maximise situational awareness, so they can see everyone go and keep control as the group pulls back.', tag: 'order of movement' },
            { title: 'Check before you throw smoke', body: 'Check the wind direction and confirm where the enemy is before throwing the grenade. A screen blowing the wrong way hides the enemy from you instead of you from the enemy.', tag: 'smoke screen' },
          ],
        },
      ],
    },
    {
      id: 'artillery',
      title: 'Indirect (artillery) fire',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Prone down immediately, face-down', body: 'Do not look up to see where it is landing.' },
            { title: 'Echo out the warning', body: 'Shout "ARTY! ARTY! ARTY!" so the others also get down.' },
            { title: 'Protect yourself', body: 'Keep your legs close together and link your hands at the back of your neck.' },
            { title: 'Extricate once it lifts', body: 'When the artillery fire is lifted, get out of the impact area as quickly as you can.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'Different from direct fire', text: 'Against rifle fire you move to cover and fight back. Against artillery you cannot see or shoot the source, so the reaction is to protect yourself, warn the others, and leave the impact area afterwards.' },
      ],
    },
    {
      id: 'night',
      title: 'Reaction at night',
      blocks: [
        {
          t: 'table',
          head: ['Situation', 'What to do'],
          rows: [
            ['Fired upon, enemy location or strength unclear because of poor visibility', 'Fire back at the enemy to pin them down, then evacuate from the killing zone and away from the enemy fire as soon as possible'],
            ['Enemy flare goes up', 'Quickly move away from the lit zone and into cover'],
            ['Caught in the open when a flare is lit', 'Squat down and freeze'],
          ],
        },
        { t: 'p', text: 'The flare advice follows from how your eyes and an observer’s eyes work: sudden movement in a lit area is what gets noticed, and cover outside the light is where you want to be. See [camouflage and concealment](@military/fieldcraft/camouflage-and-concealment).' },
      ],
    },
    {
      id: 'revise',
      title: 'Quick self-test',
      blocks: [
        {
          t: 'checklist',
          items: [
            'What are the first two things you do when fired upon?',
            'What does each letter of the target indication mnemonic stand for?',
            'What is the 4-second rule, and what do you do after the 4 seconds?',
            'Why must covering fire always alternate?',
            'When do you disengage instead of pressing on, and who moves first?',
            'What do you check before throwing a smoke grenade?',
            'What do you shout and do for artillery fire?',
            'At night: what is different when the enemy’s position is unclear, and what do you do for a flare?',
          ],
        },
      ],
    },
  ],
  sources: [
    'SAF IFC 3 (Reaction to Enemy Fire) e-learning module, slides 4 to 10. Slides 1–3 and 11–12 (overview, locating enemy fire and target indication) were not included, so those parts are not covered here.',
  ],
  related: ['military/fieldcraft/imt-and-contact-reaction', 'military/fieldcraft/fire-and-movement', 'military/battle-drills/contact-drills', 'military/communications/sitrep-and-radio-reports'],
}

export default guide
