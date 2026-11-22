import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'Heat and cold each produce two conditions worth telling apart fast: a milder, self-correcting one that responds to simple first aid, and a severe one that is a genuine emergency. The giveaway in both pairs is roughly the same, confusion and a change in consciousness mark the dangerous one.',
  nutshell: [
    '**Heat exhaustion**: heavy sweating, pale, weak, normal or slightly raised temperature, person is still alert, cool them down, give fluids.',
    '**Heat stroke**: hot, dry or minimally sweating skin, confusion or collapse, very high temperature, a life-threatening emergency, cool aggressively and call for help.',
    '**Hypothermia**: shivering, confusion, slurred speech, clumsiness as body temperature drops, warm gradually, handle gently.',
    '**Frostbite**: numbness, waxy-white or greyish skin on fingers, toes, nose or ears, rewarm gently and only if there is no risk of refreezing.',
    'The common thread: **confusion is the red flag** that moves any of these from “manage carefully” to “call for help now”.',
  ],
  sections: [
    {
      id: 'heat',
      title: 'Heat exhaustion versus heat stroke',
      blocks: [
        {
          t: 'diagram',
          title: 'Overheated: what to check first',
          nodes: [
            { id: 'hot', label: 'Overheated after exercise or heat exposure', shape: 'pill', tone: 'ink', col: 1, row: 0, w: 185 },
            { id: 'confused', label: 'Confused, collapsed, or skin hot and dry?', shape: 'diamond', tone: 'pink', col: 1, row: 1, w: 180 },
            { id: 'stroke', label: 'Heat stroke: call emergency services, cool aggressively now', shape: 'rect', tone: 'lavender', col: 2, row: 2, w: 185 },
            { id: 'exhaustion', label: 'Heat exhaustion: move to shade/cool area, loosen clothing, cool with water, give fluids', shape: 'rect', tone: 'mint', col: 0, row: 2, w: 185 },
            { id: 'improve', label: 'Improving within 30 minutes?', shape: 'diamond', tone: 'teal', col: 0, row: 3, w: 160 },
            { id: 'ok', label: 'Rest, continue fluids', shape: 'pill', tone: 'mint', col: 0, row: 4, w: 150 },
          ],
          edges: [
            { from: 'hot', to: 'confused' },
            { from: 'confused', to: 'stroke', label: 'yes', tone: 'lavender' },
            { from: 'confused', to: 'exhaustion', label: 'no', tone: 'mint' },
            { from: 'exhaustion', to: 'improve' },
            { from: 'improve', to: 'ok', label: 'yes', tone: 'mint' },
            { from: 'improve', to: 'stroke', label: 'no, worsening', dashed: true, tone: 'pink' },
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'How to cool someone aggressively',
          text: 'For suspected heat stroke: move to shade or air conditioning, remove excess clothing, and apply cold water or ice packs to the neck, armpits and groin, areas with major blood vessels close to the skin, while waiting for emergency help. Immersion in cold water, if available and safe to do, is the fastest method used by professionals.',
        },
      ],
    },
    {
      id: 'cold',
      title: 'Hypothermia versus frostbite',
      blocks: [
        {
          t: 'table',
          head: ['', 'Hypothermia (whole body)', 'Frostbite (localised)'],
          rows: [
            ['Early signs', 'Shivering, cold skin, clumsiness', 'Numbness, pins and needles, pale or red skin'],
            ['Worsening signs', 'Shivering stops, confusion, slurred speech, drowsiness', 'Waxy-white, greyish-yellow or blue-grey skin, hard or firm to the touch'],
            ['First aid', 'Move to warmth, remove wet clothing, warm gradually with blankets, warm (not hot) drinks if fully alert, handle gently', 'Do not rub the area. Rewarm gently in warm (not hot) water only if there is no risk of refreezing; loosely cover otherwise'],
            ['Seek urgent care if', 'Confusion, drowsiness, or no improvement with warming', 'Skin stays numb, discoloured, or blistered after rewarming'],
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Handle a hypothermic person gently',
          text: 'Rough handling or sudden exertion in someone with significant hypothermia can trigger a dangerous heart rhythm. Move them carefully, avoid vigorous rubbing of the limbs, and let core warming happen gradually rather than trying to warm the arms and legs quickly.',
        },
      ],
    },
  ],
}

export default guide
