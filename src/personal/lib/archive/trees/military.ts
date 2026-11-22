import type { ArchiveNode } from '../topics'

// Military fieldcraft: general infantry fieldcraft and battle-drill concepts, written for
// someone revising ahead of Singapore National Service field training (commonly called
// IFC, individual field craft). This covers publicly known, widely taught infantry
// fundamentals (fire and movement, individual movement technique, contact drills, casualty
// classification, radio reporting) at a conceptual level, it is not a reproduction of any
// restricted training manual, and it is never a substitute for live instruction, your
// unit's current SOPs, or your instructors' safety directions.

export const MILITARY: ArchiveNode = {
  slug: 'military',
  title: 'Military fieldcraft',
  blurb: 'General infantry fieldcraft for Singapore NS field camp revision: fire and movement, individual movement technique, contact drills, SITREPs, and casualty classification, concepts, not a substitute for your instructors.',
  glyph: '✪',
  color: 'color-mix(in srgb, var(--mustard) 50%, var(--teal))',
  tags: ['military', 'national service', 'ns', 'ifc', 'field camp', 'bmt', 'fieldcraft', 'sitrep', 'fire and movement', 'saf'],
  children: [
    {
      slug: 'start-here',
      title: 'Start here',
      blurb: 'What is on this shelf, how it relates to actual field camp, and what it is not.',
      minutes: 5,
      glyph: '★',
      tags: ['beginner', 'overview', 'roadmap', 'safety'],
    },
    {
      slug: 'fieldcraft',
      title: 'Individual fieldcraft',
      blurb: 'Reacting to fire, moving under observation, and staying hidden, the individual skills everything else builds on.',
      glyph: '☗',
      tags: ['fieldcraft', 'imt', 'camouflage', 'movement'],
      children: [
        { slug: 'imt-and-contact-reaction', title: 'Individual movement technique: reacting to effective fire', blurb: 'Going from standing to a stable firing position fast, and why the first move under fire is always down, with a step-by-step animated sequence.', minutes: 8, tags: ['imt', 'proning', 'react to fire', 'contact'] },
        { slug: 'reaction-to-enemy-fire', title: 'IFC 3: Reaction to enemy fire', blurb: 'Prone down, cover, target indication, fire and movement or disengaging, plus artillery and night reactions, revision notes from the IFC 3 module.', minutes: 8, tags: ['ifc 3', 'reaction to enemy fire', 'target indication', '4 second rule', 'disengage', 'smoke screen', 'artillery', 'night', 'flare'] },
        { slug: 'fire-and-movement', title: 'Fire and movement', blurb: 'Bounding overwatch, the 3-to-5-second rush, and why a buddy pair never moves together, with an interactive animated walkthrough.', minutes: 9, tags: ['fire and movement', 'bounding overwatch', 'buddy pair', 'rush'] },
        { slug: 'camouflage-and-concealment', title: 'Camouflage and concealment', blurb: 'The difference between cover and concealment, and the checklist (shape, shine, shadow, silhouette, spacing, movement) used to break up a human outline.', minutes: 7, tags: ['camouflage', 'concealment', 'cover', 'observation'] },
      ],
    },
    {
      slug: 'battle-drills',
      title: 'Battle drills',
      blurb: 'What a section does, together, when contact happens, including the hardest case: a defended position being overrun.',
      glyph: '⚑',
      tags: ['battle drills', 'contact drill', 'overrun', 'casualties'],
      children: [
        { slug: 'contact-drills', title: 'Contact drills: reacting as a section', blurb: 'The sequence from first contact to a decision, fight through, call for support, or break contact, with an interactive branching walkthrough.', minutes: 9, tags: ['contact drill', 'fire superiority', 'break contact'] },
        { slug: 'enemy-overrun-and-defence', title: 'If a position is overrun', blurb: 'Defence in depth, the final protective fire line, and why every defensive plan needs a rally point, with a step-by-step diagram.', minutes: 8, tags: ['overrun', 'defence', 'final protective fire', 'rally point'] },
        { slug: 'casualty-care-and-classification', title: 'Casualty classification: KIA, WIA, MIA and triage', blurb: 'What each casualty term actually means, the standard triage categories, and an interactive triage tool based on the publicly documented START method.', minutes: 9, tags: ['kia', 'wia', 'mia', 'triage', 'casualty', 'start'] },
      ],
    },
    {
      slug: 'communications',
      title: 'Reports and radio',
      blurb: 'Getting information up the chain quickly and in a fixed, predictable order.',
      glyph: '◈',
      tags: ['sitrep', 'radio', 'communications', 'salute'],
      children: [
        { slug: 'sitrep-and-radio-reports', title: 'SITREPs, SALUTE reports and radio basics', blurb: 'The SALUTE format for reporting the enemy, the structure of a SITREP, and basic radio discipline and prowords, with an interactive report builder.', minutes: 9, tags: ['sitrep', 'salute report', 'radio procedure', 'prowords'] },
      ],
    },
    {
      slug: 'singapore-ns',
      title: 'Singapore NS context',
      blurb: 'How this all fits into BMT and field camp specifically.',
      glyph: '◉',
      tags: ['bmt', 'field camp', 'singapore', 'ns'],
      children: [
        { slug: 'bmt-field-camp-overview', title: 'BMT field camp: what to expect', blurb: 'How field camp is generally structured, what it is testing for, and how to prepare physically and mentally, general orientation, not official scheduling or safety information.', minutes: 8, tags: ['bmt', 'field camp', 'ifc', 'preparation'] },
      ],
    },
  ],
}
