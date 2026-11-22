import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'A good first aid kit is less about having every possible item and more about having the handful of things you will actually reach for, organised so you can find them without thinking. This page browses a complete kit by category, with what each item is for and how to use it.',
  nutshell: [
    'A kit for home, a car and a hiking trip overlap heavily but are not identical, more splinting gear and an emergency blanket for the trail, more medication variety at home.',
    'Check and restock a kit every few months, adhesive loses its grip, antiseptic dries out, and medicines expire.',
    'Store it somewhere accessible to adults but out of reach of children, and make sure everyone in the household knows where it is.',
    'The few items worth having even in a minimal kit: adhesive bandages, gauze pads, tape, a triangular bandage, gloves, and any personal emergency medication (like an epinephrine auto-injector) a family member needs.',
    'Icons here are original schematics, not photographs, no usable public-domain photo set of first aid equipment could be found, and what matters is what each item does.',
  ],
  sections: [
    {
      id: 'browse',
      title: 'Browse the kit',
      blocks: [{ t: 'first-aid-kit' }],
    },
    {
      id: 'by-use',
      title: 'Building a kit for different situations',
      blocks: [
        {
          t: 'cards',
          cols: 3,
          items: [
            { title: 'Home kit', body: 'The full range: wound care, bandages, tools, medication, an emergency blanket. Kept somewhere every adult in the house knows.', tag: 'comprehensive' },
            { title: 'Car kit', body: 'Add a torch, reflective triangle, and consider a tourniquet and more substantial dressings, road trauma can be more severe than a household accident.', tag: 'roadside' },
            { title: 'Hiking or outdoor kit', body: 'Prioritise weight: a SAM splint, blister care, a space blanket, water purification, and enough dressing material for a wound you cannot get quick help for.', tag: 'lightweight' },
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'The item people forget',
          text: 'A pair of trauma shears or sturdy scissors. Clothing often needs to come off fast to see an injury properly, and trying to do that with kitchen scissors or by hand wastes precious time.',
        },
      ],
    },
  ],
}

export default guide
