import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'CPR (cardiopulmonary resuscitation) keeps a small amount of oxygenated blood moving to the brain and heart when the heart has stopped beating effectively, buying time until an AED or paramedics can restore a normal rhythm. It will not restart a heart by itself in most cases, what it does is keep someone alive long enough for something that can.',
  nutshell: [
    '**Push hard and fast** in the centre of the chest, about 5-6 cm deep, at 100-120 compressions per minute, roughly the tempo of the song “Stayin’ Alive”.',
    '**30 compressions to 2 rescue breaths** is the standard adult ratio; compression-only CPR (no breaths) is a reasonable and often-recommended alternative for an untrained bystander.',
    'An **AED talks you through it**, turn it on and follow the prompts; it will not shock someone who does not need it.',
    'Keep going **without stopping** until the person shows signs of life, an AED tells you to stop, paramedics take over, or you are physically too exhausted to continue.',
    'Even imperfect CPR started immediately is far better than perfect CPR started late, or none at all.',
  ],
  sections: [
    {
      id: 'flow',
      title: 'The full sequence, from collapse to handover',
      blocks: [
        {
          t: 'diagram',
          title: 'CPR and AED: the full algorithm',
          nodes: [
            { id: 'unresp', label: 'Unresponsive, not breathing normally', shape: 'pill', tone: 'ink', col: 1, row: 0, w: 185 },
            { id: 'call', label: 'Call emergency services, send for an AED', shape: 'rect', tone: 'lavender', col: 1, row: 1, w: 175 },
            { id: 'comp', label: '30 chest compressions', sub: 'centre of chest, hard and fast', shape: 'rect', tone: 'teal', col: 1, row: 2, w: 165 },
            { id: 'breaths', label: '2 rescue breaths', sub: 'skip if untrained or unwilling: compression-only is fine', shape: 'rect', tone: 'teal', col: 1, row: 3, w: 175 },
            { id: 'aed', label: 'AED arrived?', shape: 'diamond', tone: 'pink', col: 1, row: 4, w: 140 },
            { id: 'attach', label: 'Turn it on, attach pads as shown, follow its voice prompts', shape: 'rect', tone: 'orange', col: 0, row: 5, w: 180 },
            { id: 'continue', label: 'Keep cycling 30:2 without stopping', shape: 'rect', tone: 'mint', col: 2, row: 4.5, w: 170 },
            { id: 'signs', label: 'Signs of life, or paramedics take over?', shape: 'diamond', tone: 'pink', col: 1, row: 6, w: 170 },
            { id: 'stop', label: 'Stop and hand over', shape: 'pill', tone: 'mint', col: 1, row: 7, w: 150 },
          ],
          edges: [
            { from: 'unresp', to: 'call' },
            { from: 'call', to: 'comp' },
            { from: 'comp', to: 'breaths' },
            { from: 'breaths', to: 'aed' },
            { from: 'aed', to: 'attach', label: 'yes', tone: 'orange' },
            { from: 'aed', to: 'continue', label: 'not yet', tone: 'mint' },
            { from: 'continue', to: 'comp', dashed: true },
            { from: 'attach', to: 'comp', dashed: true, label: 'resume as directed' },
            { from: 'comp', to: 'signs' },
            { from: 'signs', to: 'stop', label: 'yes', tone: 'mint' },
            { from: 'signs', to: 'comp', label: 'no, continue', dashed: true },
          ],
        },
      ],
    },
    {
      id: 'technique',
      title: 'The technique',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Position', body: 'Kneel beside the person on a firm surface. Place the heel of one hand in the centre of the chest, the other hand on top, fingers interlaced, elbows straight.' },
            { title: 'Compress', body: 'Push straight down about 5-6cm, then let the chest fully recoil between compressions, do not lean on the chest between pushes. Aim for 100-120 compressions per minute.' },
            { title: 'Rescue breaths (if trained and willing)', body: 'Tilt the head back, lift the chin, pinch the nose, seal your mouth over theirs and give 2 breaths, each enough to see the chest rise, taking about 1 second each.' },
            { title: 'Compression-only CPR', body: 'If untrained, unwilling, or uncomfortable giving breaths, continuous chest compressions alone are a well-supported alternative that current guidelines explicitly endorse for bystanders.' },
            { title: 'Using an AED', body: 'Turn it on as soon as it arrives, it will talk you through everything else. Attach the pads to bare, dry skin exactly where the pictures show, make sure no one is touching the person when it analyses or shocks, and resume CPR immediately after a shock or if it says “no shock advised”.' },
            { title: 'Swap if there are two of you', body: 'Compressions get less effective as you tire; swap every 2 minutes if someone else can take over, with minimal interruption to compressions.' },
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'An AED will not shock someone who does not need it',
          text: 'The device analyses the heart’s rhythm itself and will only advise a shock if one is actually needed. You cannot hurt someone by attaching one and following its instructions, which is exactly why they are designed for bystanders with no medical training to use.',
        },
      ],
    },
  ],
}

export default guide
