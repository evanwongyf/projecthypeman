import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Group activities work when they are sequenced: low-risk games first, then activities that need more trust and co-operation, then real challenges. Jumping straight to a trust fall with a group that has just met is unsafe and usually counterproductive. This guide gives a sequenced bank of activities, each with a purpose, timing and debrief questions.',
  nutshell: [
    'Sequence by **risk**: physical, emotional and social.',
    'Every activity needs a **purpose**, a **safety brief** and a **debrief**.',
    'Start with **fun and names**, move to **co-operation**, then **trust**, then **problem-solving** and **challenge**.',
    'Adapt everything for disability, culture, gender and touch preferences.',
  ],
  sections: [
    {
      id: 'sequence',
      title: 'The sequence',
      blocks: [
        { t: 'levels', caption: 'Adapted from Project Adventure’s activity sequence.', items: [
          { name: 'Ice-breakers', body: 'Names and light fun. Low risk.' },
          { name: 'De-inhibitizers and energisers', body: 'Silly movement and laughter; it is fine to look a bit foolish.' },
          { name: 'Communication', body: 'Listening, giving instructions, describing.' },
          { name: 'Trust', body: 'Physical and emotional reliance on others, carefully spotted.' },
          { name: 'Problem-solving initiatives', body: 'Group tasks that need planning and every member.' },
          { name: 'Challenge', body: 'Ropes courses, expeditions, extended projects.' },
        ] },
      ],
    },
    {
      id: 'bank',
      title: 'An activity bank',
      blocks: [
        { t: 'table', head: ['Activity', 'Stage', 'How', 'Time', 'Debrief question'], rows: [
          ['Name and motion', 'Ice-breaker', 'In a circle each says their name with a gesture; everyone repeats', '10 min', 'How did it feel to have everyone copy you?'],
          ['Two truths and a lie', 'Ice-breaker', 'Each shares three statements; others guess the lie', '15 min', 'What surprised you about someone?'],
          ['Line-ups', 'Communication', 'Line up by birthday without talking', '10 min', 'How did you communicate without words?'],
          ['Back-to-back drawing', 'Communication', 'One describes a picture; partner draws it without seeing', '15 min', 'What made instructions clear or confusing?'],
          ['Human knot', 'Co-operation', 'Hold hands across the circle, untangle without letting go', '15 min', 'Who led? How were decisions made?'],
          ['Helium stick', 'Co-operation', 'Lower a light pole together using only index fingers', '15 min', 'Why did it keep rising? What fixed it?'],
          ['Minefield', 'Trust', 'Blindfolded partner guided through objects by voice', '20 min', 'What made you trust your guide?'],
          ['Trust lean (in pairs)', 'Trust', 'Lean back a short distance into a spotter’s hands', '15 min', 'What did your spotter do that helped?'],
          ['Marshmallow challenge', 'Problem-solving', 'Tallest free-standing spaghetti tower with a marshmallow on top in 18 minutes', '30 min', 'When did you first test your design?'],
          ['Toxic waste', 'Problem-solving', 'Move a bucket into a target using only ropes and a bungee, from outside a circle', '30 min', 'How did the plan change as you went?'],
          ['Stepping stones', 'Problem-solving', 'Cross a “river” on limited stones that vanish if left untouched', '25 min', 'How did you make sure nobody was left behind?'],
        ] },
        { t: 'callout', tone: 'note', title: 'The marshmallow challenge', text: 'Tom Wujec’s data from many groups: recent business school graduates did worst, kindergarteners did better, and architects and engineers best. Children prototype and test early; graduates spend time planning and competing for status, then put the marshmallow on at the last moment and the tower collapses. A good debrief theme: iterate early.' },
      ],
    },
    {
      id: 'safety',
      title: 'Safety and inclusion',
      blocks: [
        { t: 'checklist', items: [
          'Check medical information and physical limits before the programme',
          'Brief rules clearly, and stop the activity if they are broken',
          'Offer non-touch alternatives; never require hand-holding or lifting',
          'Spot every trust activity with trained spotters; no high trust falls without proper training',
          'Adapt for wheelchair users and sensory needs (e.g. verbal versions of visual tasks)',
          'Watch for exclusion: who is always at the edge?',
          'Respect cultural and religious norms about touch and mixed-gender activities',
        ] },
      ],
    },
  ],
  sources: [
    'Rohnke, K., & Butler, S. (1995). QuickSilver. Project Adventure.',
    'Frank, L. S. (2004). Journey Toward the Caring Classroom. Wood ’N’ Barnes.',
    'Wujec, T. (2010). Build a tower, build a team. TED talk.',
  ],
  related: ['facilitation/growth/challenge-and-growth', 'facilitation/debriefing/debrief-techniques', 'facilitation/project-management/risk-and-budget'],
}

export default guide
