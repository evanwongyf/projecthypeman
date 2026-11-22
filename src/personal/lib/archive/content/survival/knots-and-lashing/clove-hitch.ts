import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The clove hitch ties a rope to a pole, post or rail in a few seconds, and just as quickly adjusts or unties. It is the knot that starts and finishes every lashing, and one of the most used knots in scouting, sailing and climbing. Its weakness is that it can loosen and roll if the load comes and goes, so you learn it together with its safer backups.',
  nutshell: [
    'A **hitch** ties a rope to an object. The clove hitch is the quickest: two turns round the pole with the end tucked under the last one.',
    'The finished knot looks like **two parallel ropes pinned down by one diagonal rope**, with the ends leaving on opposite sides.',
    'It grips when the load is steady and the pole is rough, but it can **slip or roll** on a smooth pole or when the load goes slack and tight again.',
    'It is easy to **adjust**: slide it along the pole, or release it by pushing the turns open.',
    'Add **two half hitches** on the standing part to make it safe for jobs that matter.',
  ],
  sections: [
    {
      id: 'tie',
      title: 'How to tie it round a pole',
      lead: 'Step through the diagram. The pole is vertical in the picture; the knot is exactly the same on a horizontal rail.',
      blocks: [
        { t: 'knot', id: 'clove-hitch' },
        {
          t: 'steps',
          items: [
            { title: 'Take one turn', body: 'Pass the rope in front of the pole, round the back and out the other side. The loose end comes round lower than where you started.' },
            { title: 'Cross over the standing part', body: 'Bring the working end across the front of the pole, over the rope you just laid. The two ropes cross in an X.' },
            { title: 'Go round again and tuck under', body: 'Take the working end round the back a second time, then slide it under the diagonal rope on the front and pull it through. It leaves on the opposite side to the standing part.' },
            { title: 'Check and tighten', body: 'Two parallel ropes pinned by one diagonal rope. Pull the standing part and the working end in opposite directions to snug it onto the pole.' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Memory aid', text: 'Turn, cross, turn, tuck. Or: **round, over, round, under**. The tail goes under the last rope you made, not the first.' },
      ],
    },
    {
      id: 'end',
      title: 'Tying it when you cannot slip it over the end',
      lead: 'If the pole has no free end (a rail already fixed in place), you tie the clove hitch directly round it as above. If the end is free, there is a quicker way.',
      blocks: [
        { t: 'p', text: 'Make two loops in a row, the same way round, by crossing the rope over itself twice. Stack the second loop on top of the first. Slip both loops over the end of the pole and pull them tight. This is the clove hitch **tied in the hand**, and it makes exactly the same knot. It is useful when you are tying to a stake you can lift, or when you are adding a hitch to a rope you can only reach one side of.' },
        { t: 'callout', tone: 'note', text: 'The finished knot is the same either way. If you are not sure which you tied, check the picture: two parallel ropes, one diagonal over them.' },
      ],
    },
    {
      id: 'use',
      title: 'What it is used for',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Starting and finishing lashings', body: 'Every lashing begins and ends with a clove hitch, which holds the rope in place while you wind the turns.' },
            { title: 'Guy lines and tarps', body: 'A quick way to attach a guy line to a pole or branch, or to a stake, and to adjust its position.' },
            { title: 'Temporary tie-off', body: 'Tying a boat to a piling, a horse to a rail or a bag to a branch while you do something else.' },
            { title: 'Adjusting on a carabiner', body: 'In climbing, a clove hitch on a carabiner lets a climber shorten or lengthen their tether to an anchor. This is trained instruction; see a qualified instructor.' },
          ],
        },
      ],
    },
    {
      id: 'fail',
      title: 'How it fails, and what to do',
      blocks: [
        {
          t: 'table',
          head: ['Failure', 'Why it happens', 'Fix'],
          rows: [
            ['Rolls and slips on a smooth pole', 'Slick rope on slick surface, steady pull in one direction', 'Add two half hitches, or tie it on a rough pole, or use more turns'],
            ['Loosens when the load goes slack', 'The turns loosen when the rope moves, and a loose clove hitch can fall off', 'Tie two half hitches on the standing part, or use a constrictor knot'],
            ['Pulled apart by a sideways tug', 'Pull along the pole instead of across it', 'Keep the pull square to the pole, or add a second hitch'],
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Never trust it alone', text: 'On its own the clove hitch is not secure enough to hold a boat in tidal water, a tent in a gale, or a person. Back it up with two half hitches, and use a proper knot for anything that must not fail.' },
      ],
    },
    {
      id: 'practice',
      title: 'Practice and common mistakes',
      blocks: [
        {
          t: 'checklist',
          items: [
            'I can recognise a correct clove hitch from the front: two parallel ropes pinned by one diagonal.',
            'I can tie it around a horizontal rail and a vertical pole.',
            'I can tie it with a loop dropped over the end of a stake.',
            'I add two half hitches when it matters.',
            'I can tie it one-handed on a pole, in gloves, with my eyes closed.',
          ],
        },
        {
          t: 'dodont',
          do: ['Check that the working end exits **under** the last diagonal turn.', 'Pull the two ends in opposite directions to set the hitch.'],
          dont: ['Do not tie it with the working end over the diagonal; that gives a different, loose knot.', 'Do not use it on a smooth round pole with a steady side pull without a backup.'],
        },
      ],
    },
  ],
  sources: [
    'Ashley, C. W. (1944). The Ashley Book of Knots. Doubleday. (Clove hitch, #1178.)',
    'The Scout Association. Knotting: the clove hitch.',
  ],
  related: ['survival/knots-and-lashing/square-lashing', 'survival/knots-and-lashing/bowline', 'survival/knots-and-lashing/choosing-a-knot'],
}

export default guide
