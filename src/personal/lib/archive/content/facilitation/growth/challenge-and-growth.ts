import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'People grow when they meet a challenge slightly beyond what they believe they can do, succeed with effort, and then make sense of that success. Too little challenge and nothing changes; too much and people shut down. Facilitators manage this edge deliberately, for each person, in every activity.',
  nutshell: [
    '**Comfort, stretch and panic zones**: growth happens in the stretch zone.',
    '**Challenge by choice** (Project Adventure): participants choose their level of challenge, and that choice is itself part of the learning.',
    'The **Yerkes–Dodson** curve: performance rises with arousal up to a point, then falls, and the peak comes sooner for hard tasks.',
    '**Self-efficacy** (Bandura) grows most from **mastery experiences**: succeeding at something you were unsure you could do.',
  ],
  sections: [
    {
      id: 'zones',
      title: 'Comfort, stretch and panic',
      blocks: [
        { t: 'levels', caption: 'The learning zone model, often credited to Karl Rohnke and later popularised by Tom Senninger.', items: [
          { name: 'Comfort zone', body: 'Familiar, safe, little learning. Necessary for rest and recovery.' },
          { name: 'Stretch (learning) zone', body: 'Uncertain, effortful, a bit uncomfortable but manageable. Where growth happens.' },
          { name: 'Panic zone', body: 'Overwhelmed, frightened, survival mode. Learning stops; people may freeze, flee or lash out.' },
        ] },
        { t: 'p', text: 'The zones are different for every person and every activity. The same high ropes element can be comfort for one student, stretch for another and panic for a third. The facilitator’s job is to help each person find their own stretch.' },
      ],
    },
    {
      id: 'yerkes',
      title: 'Arousal and performance',
      blocks: [
        { t: 'plot', title: 'The Yerkes–Dodson pattern (schematic)', x: [0, 10], y: [0, 10], xLabel: 'arousal or challenge', yLabel: 'performance', curves: [
          { f: (x) => 9 * Math.exp(-((x - 6) ** 2) / 8), label: 'simple task', color: 'var(--teal)' },
          { f: (x) => 8 * Math.exp(-((x - 3.5) ** 2) / 5), label: 'complex task', color: 'var(--orange)', dashed: true },
        ], caption: 'Schematic: the original 1908 study used mice and electric shocks. The broad pattern (an inverted U, peaking earlier for harder tasks) is widely used, but the exact shape varies.' },
        { t: 'callout', tone: 'tip', title: 'In practice', text: 'Increase challenge for simple, practised tasks; lower the pressure for new, complex ones. A student learning to belay needs calm and clarity; a group playing a familiar game can take a timer and a twist.' },
      ],
    },
    {
      id: 'choice',
      title: 'Challenge by choice',
      blocks: [
        { t: 'p', text: 'Project Adventure’s principle: participants decide how far to go in an activity and how they participate. It does not mean opting out of everything: a participant who does not climb can still belay, encourage, or set themselves a lower target. The point is that choosing your challenge, and owning that choice, builds autonomy and trust.' },
        { t: 'example', title: 'Language that keeps choice real', lines: [
          { label: 'Say', text: '“You choose your goal today. It might be the top, it might be the second hold, it might be putting on the harness. All of those count.”' },
          { label: 'Say', text: '“What would be a stretch for you right now?”' },
          { label: 'Avoid', text: '“Come on, everyone else did it.” (Peer pressure removes choice.)' },
          { label: 'Avoid', text: '“You’re fine, just go.” (Dismisses fear instead of working with it.)' },
        ] },
      ],
    },
    {
      id: 'efficacy',
      title: 'How confidence actually grows',
      blocks: [
        { t: 'table', head: ['Bandura’s source of self-efficacy', 'In a programme'], rows: [
          ['Mastery experiences (strongest)', 'Graded challenges where participants succeed with real effort'],
          ['Vicarious experience', 'Seeing someone similar succeed (a peer, not the instructor)'],
          ['Verbal persuasion', 'Specific encouragement: “You read the map correctly three times today.”'],
          ['Physiological and emotional states', 'Teaching people to read their nerves as readiness, not danger'],
        ] },
        { t: 'callout', tone: 'note', title: 'The adventure wave', text: 'Programmes alternate challenge and reflection like waves: brief, challenge, debrief, brief, challenge. Each crest stretches; each trough consolidates. Without the troughs, challenge becomes mere exhaustion.' },
      ],
    },
    {
      id: 'evidence',
      title: 'What the evidence says',
      blocks: [
        { t: 'p', text: 'Meta-analyses of adventure education (Hattie et al., 1997; Bowen and Neill, 2013) find moderate positive effects on self-concept, leadership, locus of control and interpersonal skills, of roughly 0.3 to 0.5 standard deviations, with longer programmes and well-trained facilitators doing better. Hattie and colleagues also found effects that kept growing after the programme ended, which is unusual in education research.' },
      ],
    },
  ],
  sources: [
    'Yerkes, R. M., & Dodson, J. D. (1908). The relation of strength of stimulus to rapidity of habit-formation. Journal of Comparative Neurology and Psychology, 18, 459–482.',
    'Bandura, A. (1997). Self-Efficacy: The Exercise of Control. Freeman.',
    'Hattie, J., Marsh, H. W., Neill, J. T., & Richards, G. E. (1997). Adventure education and Outward Bound. Review of Educational Research, 67(1), 43–87.',
    'Bowen, D. J., & Neill, J. T. (2013). A meta-analysis of adventure therapy outcomes. Open Psychology Journal, 6, 28–53.',
    'Rohnke, K. (1989). Cowstails and Cobras II. Project Adventure.',
  ],
  related: ['facilitation/growth/character-education', 'facilitation/growth/measuring-growth', 'teaching/theories/social-learning'],
}

export default guide
