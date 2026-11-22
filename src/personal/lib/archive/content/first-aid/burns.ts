import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'Cool, cover, and judge the severity, most burns respond to the same simple first step, and what changes is what comes after. Depth tells you how serious the injury is; size tells you how urgently it needs more than first aid.',
  nutshell: [
    '**Cool a burn with cool (not ice-cold) running water for 20 minutes**, as soon as possible, this is the single most effective first aid step there is.',
    '**Remove jewellery and tight clothing** near the burn before swelling makes it difficult.',
    '**Never apply butter, oil, ice, or toothpaste**, all popular folk remedies, all of which can worsen the injury or increase infection risk.',
    'A burn **larger than the person’s palm, on the face/hands/feet/genitals, or that looks white/charred/leathery** needs medical assessment.',
    'Do not burst blisters deliberately, an intact blister is a natural, sterile dressing.',
  ],
  sections: [
    {
      id: 'depth',
      title: 'Judging depth and size',
      blocks: [
        {
          t: 'table',
          head: ['Depth', 'Looks like', 'First aid'],
          rows: [
            ['Superficial (first-degree)', 'Red, painful, no blisters, like typical sunburn', 'Cool, moisturise, pain relief if needed; usually heals in days without scarring'],
            ['Partial thickness (second-degree)', 'Red, blistered, very painful, weeping', 'Cool for 20 minutes, cover with a non-stick dressing, seek care if large or on a sensitive area'],
            ['Full thickness (third-degree)', 'White, leathery, charred, or waxy, can be surprisingly painless because nerve endings are destroyed', 'Cool the surrounding area, cover loosely, call emergency services, this always needs hospital care'],
          ],
        },
        {
          t: 'diagram',
          title: 'What a burn needs',
          nodes: [
            { id: 'burn', label: 'Burn or scald', shape: 'pill', tone: 'ink', col: 1, row: 0, w: 140 },
            { id: 'cool', label: 'Cool under running water, 20 minutes', shape: 'rect', tone: 'teal', col: 1, row: 1, w: 180 },
            { id: 'q1', label: 'Full thickness (white/charred/leathery), or electrical/chemical cause?', shape: 'diamond', tone: 'pink', col: 1, row: 2, w: 195 },
            { id: 'call', label: 'Call emergency services', shape: 'rect', tone: 'lavender', col: 0, row: 3, w: 165 },
            { id: 'q2', label: 'Larger than their palm, or on face/hands/feet/genitals/joints?', shape: 'diamond', tone: 'pink', col: 2, row: 3, w: 190 },
            { id: 'medical', label: 'Seek medical care', shape: 'rect', tone: 'orange', col: 2, row: 4, w: 150 },
            { id: 'home', label: 'Cover loosely, manage at home, watch for infection', shape: 'rect', tone: 'mint', col: 1, row: 4, w: 180 },
          ],
          edges: [
            { from: 'burn', to: 'cool' },
            { from: 'cool', to: 'q1' },
            { from: 'q1', to: 'call', label: 'yes', tone: 'lavender' },
            { from: 'q1', to: 'q2', label: 'no', tone: 'mint' },
            { from: 'q2', to: 'medical', label: 'yes', tone: 'orange' },
            { from: 'q2', to: 'home', label: 'no', tone: 'mint' },
          ],
        },
      ],
    },
    {
      id: 'special',
      title: 'Special cases',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Chemical burns', body: 'Brush off any dry chemical powder first, then flush with large amounts of water for at least 20 minutes. Remove contaminated clothing, avoiding contact with the chemical yourself.', tag: 'chemical' },
            { title: 'Electrical burns', body: 'Do not touch the person until you are certain the power source is off, the current can pass through them to you. These often look small on the surface but can be severe internally; always seek medical care.', tag: 'electrical' },
            { title: 'Clothing stuck to a burn', body: 'Do not try to peel it off. Cool through or around it and let medical staff remove it safely.', tag: 'important' },
            { title: 'Burns in young children or older adults', body: 'Their skin is thinner, so a given temperature and duration causes a deeper burn than it would in a healthy adult, have a lower threshold for seeking care.', tag: 'important' },
          ],
        },
      ],
    },
  ],
}

export default guide
