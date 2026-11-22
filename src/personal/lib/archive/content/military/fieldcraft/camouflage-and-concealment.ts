import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Camouflage is not just "wearing a patterned uniform"it is a deliberate set of habits for defeating the specific ways the human eye and brain notice things. Most of what breaks camouflage in the field is behaviour, not equipment.',
  nutshell: [
    '**Cover** stops incoming rounds (a wall, a bank, a solid tree trunk); **concealment** only hides you from being seen (grass, a bush, a shadow), the two are not the same, and confusing them gets people killed in a real fight.',
    'The human eye is drawn to **outline, contrast, movement and symmetry**, camouflage discipline is mostly about defeating these specific triggers, not just colour-matching the surroundings.',
    'A single still, well-concealed soldier is extremely hard to spot, **movement is by far the easiest way to give yourself away**, more than colour or pattern mismatch.',
    'Good fieldcraft habits (irregular spacing, varied pace, no shiny objects, breaking up your outline) matter in **every environment**, not just dense jungle or forest.',
  ],
  sections: [
    {
      id: 'cover-vs-concealment',
      title: 'Cover vs. concealment',
      blocks: [
        {
          t: 'table',
          head: ['', 'Cover', 'Concealment'],
          rows: [
            ['Stops bullets/fragments?', 'Yes, that is the defining feature', 'No, it only prevents being seen'],
            ['Examples', 'A thick wall, an earth bank, a solid tree trunk, a vehicle’s engine block', 'Tall grass, foliage, a shadow, smoke, darkness'],
            ['When it matters most', 'Under direct fire, when something physically needs to stop incoming rounds', 'Before contact, when the priority is not being seen or located at all'],
          ],
          caption: 'The best positions offer both at once (a position in thick foliage behind a solid bank, for instance), but when only one is available, understanding which one you actually have changes what it’s safe to do from that position.',
        },
        { t: 'callout', tone: 'warn', title: 'Concealment is not protection', text: 'A bush, a pile of leaves or tall grass can make you very hard to see, but does nothing to stop a round. Treating concealment as if it were cover, standing confidently behind foliage during an actual firefight, is a mistake that gets made under stress precisely because the position "feels" safe.' },
      ],
    },
    {
      id: 'what-gives-people-away',
      title: 'What actually gives a position away',
      blocks: [
        {
          t: 'terms',
          items: [
            { term: 'Shape', def: 'The human outline (head, shoulders, rifle) is instantly recognisable even in poor light or at distance, breaking up that distinctive silhouette with foliage or a poncho matters more than colour-matching.' },
            { term: 'Shine', def: 'Any reflective surface, a watch face, sunglasses, a scope lens, bare skin, catches light and draws the eye from a surprising distance, even a brief glint.' },
            { term: 'Shadow', def: 'Both the shadow a person casts, and standing in deep shadow being mistaken for safety when light shifting through the day can expose a previously-shadowed position.' },
            { term: 'Silhouette', def: 'Being outlined against a lighter background (a skyline, a clearing, a pale wall) makes a shape stand out regardless of how good the camouflage pattern itself is, staying off ridgelines and skylines matters more than most people expect.' },
            { term: 'Spacing', def: 'Evenly spaced soldiers moving in a tidy line look obviously man-made against a naturally irregular background, irregular spacing blends in far better.' },
            { term: 'Movement', def: 'By a wide margin the single biggest giveaway. The eye is built to detect motion even in peripheral vision; a motionless, poorly camouflaged soldier is often genuinely harder to spot than a well-camouflaged one who is moving.' },
          ],
        },
        { t: 'p', text: 'Different training traditions group these principles under slightly different names or acronyms, and some add sound and smell (noise discipline, and the smell of food, smoke or insect repellent carrying further than expected), the underlying ideas are consistent even where the exact mnemonic taught varies.' },
      ],
    },
    {
      id: 'practical-habits',
      title: 'Practical habits',
      blocks: [
        {
          t: 'checklist',
          items: [
            'Break up your outline deliberately, foliage worked into webbing and helmet covers, not just the base uniform pattern',
            'Keep any reflective item covered or removed before moving into an area where you could be observed',
            'Move deliberately and slowly when in view of likely observation points, fast, jerky movement is far more noticeable than slow, smooth movement',
            'Avoid silhouetting on ridgelines, doorways, and open ground against a plain background',
            'Stay still and let a moving threat pass if spotted at a distance, the instinct to run is often exactly wrong, since movement is what gets noticed',
          ],
        },
        { t: 'callout', tone: 'fact', title: 'Why stillness so often beats hiding', text: 'Peripheral human vision is highly tuned to detect motion specifically, more than it resolves fine colour or pattern detail, which is a large part of why a motionless, imperfectly camouflaged person can go unnoticed at distances that would seem impossible, while even slight movement from a well-camouflaged position draws the eye immediately.' },
      ],
    },
  ],
  sources: [
    'U.S. Army. *FM 21-75: Combat Skills of the Soldier* (publicly released field manual, camouflage chapter).',
    'British Army. *Infantry Training Volume 1: Skill at Arms* (publicly referenced fieldcraft fundamentals).',
  ],
  related: ['military/fieldcraft/imt-and-contact-reaction', 'military/fieldcraft/fire-and-movement', 'military/battle-drills/enemy-overrun-and-defence'],
}

export default guide
