import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Field camp is where Basic Military Training moves the fieldcraft concepts covered on this shelf out of the classroom and onto real ground, usually for several days and nights continuously, it tests fieldcraft, teamwork and stamina together, under fatigue, which is deliberately part of the point.',
  nutshell: [
    'Field camp (often where **individual field craft, IFC**, is put into practice) typically combines fieldcraft lessons, section and platoon tactics, and a culminating exercise, often over several consecutive days with limited sleep.',
    'Singapore’s hot, humid climate makes **heat injury prevention** a genuinely serious safety priority in SAF training, not a formality, hydration discipline and the buddy system both exist specifically because of this.',
    'The physical demands (route marches, carrying load, digging, limited rest) matter as much as the fieldcraft knowledge, **fitness preparation beforehand genuinely changes how field camp feels**.',
    'For exact schedules, safety rules, equipment lists and current standards, **always use official NS/SAF channels and your unit cadre**, this page is general orientation, not a substitute for official information.',
  ],
  sections: [
    {
      id: 'what-to-expect',
      title: 'What field camp generally covers',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Individual fieldcraft', body: 'Practising the individual movement techniques, camouflage discipline and contact reactions covered elsewhere on this shelf, under supervision and with blank ammunition or simulated contact.' },
            { title: 'Section and platoon drills', body: 'Scaling individual skills up to group tactics, fire and movement as a section, contact drills, and basic defensive positions.' },
            { title: 'Navigation and movement', body: 'Moving as a team over unfamiliar terrain, often at night, often carrying a loaded pack, map and compass skills, pacing and maintaining formation in low visibility.' },
            { title: 'A culminating exercise', body: 'A longer, more continuous exercise near the end that combines everything learned, typically the most physically and mentally demanding part of the camp.' },
          ],
          cols: 2,
        },
      ],
    },
    {
      id: 'heat-and-safety',
      title: 'Why heat and hydration discipline is taken so seriously',
      blocks: [
        { t: 'p', text: 'Singapore’s consistently hot, humid climate makes heat injury a real and well-documented risk during sustained physical exertion in full gear, not a hypothetical one. Over the years, heat-injury incidents in SAF training (including some tragic fatalities that received significant public attention) led directly to major, lasting reforms in training safety protocols, hydration monitoring, and the buddy system’s emphasis on actively watching for early warning signs in each other, not just yourself.' },
        {
          t: 'checklist',
          items: [
            'Hydrate consistently in the days before intense training starts, not just on the day itself, arriving already dehydrated removes your margin for error',
            'Learn to recognise early heat-injury warning signs in yourself and your buddy: unusual fatigue, confusion, stopping sweating, dizziness, nausea',
            'Speak up immediately if you or a buddy shows warning signs, hesitating to "not make a fuss" is exactly the wrong instinct here',
            'Rest and recovery (sleep, nutrition) in the days leading up to a demanding exercise matter as much as any single training session',
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Follow official safety guidance, always', text: 'Current SAF safety protocols, hydration schedules and medical guidance are set and updated by official channels for good reason, they reflect lessons learned, climate conditions, and current best practice. Nothing on this archive page is a substitute for that official guidance, your unit’s safety briefings, or your medical officer’s advice.' },
      ],
    },
    {
      id: 'preparing',
      title: 'Preparing beforehand',
      blocks: [
        { t: 'p', text: 'Fieldcraft knowledge matters, but field camp is also simply physically demanding, carrying load over distance, limited sleep, and repeated exertion in heat. Building a reasonable fitness base beforehand (see [military and uniformed-service fitness tests](@fitness/combat/military) for IPPT-specific training, plus general load-carriage and endurance work) genuinely changes how much of your attention and energy is left over for the fieldcraft itself, rather than just surviving the physical load.' },
        {
          t: 'dodont',
          do: ['Build a running and load-carriage base in the weeks beforehand rather than starting from zero', 'Practise the individual drills (going prone, basic movement) enough that they feel automatic, not effortful', 'Get genuine rest in the final days before a demanding exercise rather than cramming extra training'],
          dont: ['Try to dramatically increase fitness in the last few days before camp, that mainly adds fatigue and injury risk without real benefit', 'Skip hydration in the lead-up because "it’s not the actual exercise day yet"', 'Assume knowing the concepts on this shelf replaces practising the physical drills themselves, understanding why a drill works and being able to execute it instantly under fatigue are different skills'],
        },
      ],
    },
  ],
  sources: [],
  related: ['military/start-here', 'fitness/combat/military', 'military/fieldcraft/imt-and-contact-reaction'],
}

export default guide
