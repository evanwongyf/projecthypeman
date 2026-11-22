import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'Almost all bleeding, even quite dramatic-looking bleeding, is controlled by firm direct pressure held for long enough without lifting to check. A tourniquet is for the rare case direct pressure genuinely cannot control, a life-threatening limb bleed, and reaching for one too early, or not using one when truly needed, are both real mistakes.',
  nutshell: [
    '**Direct pressure controls almost all bleeding.** Press firmly, hold it continuously, do not peek.',
    'Raise the injured part above heart level if possible, in addition to pressure, to help slow the bleeding.',
    'If blood is spurting rhythmically (arterial) or soaking through dressings faster than you can keep up, treat it as life-threatening.',
    'A **tourniquet** is for severe limb bleeding that direct pressure has not controlled, applied above the wound, tightened until bleeding stops, with the time noted.',
    'Never remove an object embedded in a wound, pad firmly around it instead and get the person to emergency care.',
  ],
  sections: [
    {
      id: 'severity',
      title: 'Judging how serious it is',
      blocks: [
        {
          t: 'diagram',
          title: 'Bleeding: what to do',
          nodes: [
            { id: 'bleed', label: 'Visible bleeding', shape: 'pill', tone: 'ink', col: 1, row: 0, w: 140 },
            { id: 'severe', label: 'Spurting, soaking through dressings fast, or from a major vessel area?', shape: 'diamond', tone: 'pink', col: 1, row: 1, w: 190 },
            { id: 'pressure', label: 'Firm direct pressure, raise if possible', shape: 'rect', tone: 'teal', col: 0, row: 2, w: 170 },
            { id: 'controlled', label: 'Controlled within a few minutes?', shape: 'diamond', tone: 'teal', col: 0, row: 3, w: 160 },
            { id: 'dress', label: 'Dress and bandage, seek care as appropriate', shape: 'rect', tone: 'mint', col: 0, row: 4, w: 175 },
            { id: 'pressure2', label: 'Firm direct pressure + call emergency services now', shape: 'rect', tone: 'orange', col: 2, row: 2, w: 175 },
            { id: 'stillbleeding', label: 'Still uncontrolled, limb wound?', shape: 'diamond', tone: 'pink', col: 2, row: 3, w: 170 },
            { id: 'tourniquet', label: 'Apply a tourniquet above the wound, note the time', shape: 'rect', tone: 'lavender', col: 2, row: 4, w: 180 },
          ],
          edges: [
            { from: 'bleed', to: 'severe' },
            { from: 'severe', to: 'pressure', label: 'no', tone: 'teal' },
            { from: 'pressure', to: 'controlled' },
            { from: 'controlled', to: 'dress', label: 'yes', tone: 'mint' },
            { from: 'controlled', to: 'pressure2', label: 'no', tone: 'orange' },
            { from: 'severe', to: 'pressure2', label: 'yes', tone: 'orange' },
            { from: 'pressure2', to: 'stillbleeding' },
            { from: 'stillbleeding', to: 'tourniquet', label: 'yes', tone: 'lavender' },
          ],
        },
      ],
    },
    {
      id: 'dressing',
      title: 'The pressure dressing technique',
      blocks: [{ t: 'bandage', id: 'pressure-dressing' }],
    },
    {
      id: 'wounds',
      title: 'Smaller wounds',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Clean hands or gloves first', body: 'Reduces infection risk to both of you.' },
            { title: 'Rinse the wound', body: 'Clean running water for several minutes removes dirt and debris better than antiseptic poured straight on.' },
            { title: 'Pat dry around the edges', body: 'Not inside the wound itself.' },
            { title: 'Cover', body: 'A non-stick dressing or adhesive bandage sized to the wound, changed daily or when wet or dirty.' },
            { title: 'Watch for infection', body: 'Increasing redness, warmth, swelling, pus or spreading red streaks over the following days mean it needs medical attention.' },
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Tetanus',
          text: 'Deep or dirty wounds, especially from rust, soil, or animal bites, carry a tetanus risk. If vaccination status is unclear or it has been more than 5-10 years since the last booster, this is worth mentioning when seeking care.',
        },
      ],
    },
  ],
}

export default guide
