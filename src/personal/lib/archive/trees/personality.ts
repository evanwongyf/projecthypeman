import type { ArchiveNode } from '../topics'

// Personality: the Myers-Briggs Type Indicator read honestly (what it is, what the research
// says about it, and how it maps to the Big Five), the four preferences, Jung's eight cognitive
// functions, Keirsey's temperaments, a profile of each of the sixteen types, and compatibility
// and clashes between every pair of types.

export const PERSONALITY: ArchiveNode = {
  slug: 'personality',
  title: 'Personality types (MBTI)',
  blurb: 'The sixteen Myers-Briggs types in depth: the four preferences, the eight cognitive functions, temperaments, a profile of every type, and compatibility and clashes for all 136 pairs, with an honest look at the evidence and the Big Five.',
  glyph: '◐',
  color: 'color-mix(in srgb, var(--lavender) 70%, var(--sky))',
  tags: ['mbti', 'myers-briggs', 'personality', '16 types', 'jung', 'cognitive functions', 'compatibility', 'big five', 'keirsey', 'temperament'],
  children: [
    { slug: 'start-here', title: 'Start here: MBTI, honestly', glyph: '★', blurb: 'Where the MBTI came from, how it works, what the research says about its reliability and validity, how it lines up with the Big Five, and good and bad uses.', minutes: 14, tags: ['history', 'validity', 'reliability', 'criticism', 'barnum effect'] },
    {
      slug: 'foundations',
      title: 'Foundations',
      glyph: '◇',
      blurb: 'The building blocks: the four preference pairs, the eight cognitive functions and how they stack, Keirsey’s four temperaments, stress and development, and the Big Five alternative.',
      children: [
        { slug: 'four-preferences', title: 'The four preference pairs', blurb: 'E/I, S/N, T/F and J/P explained in depth, with everyday examples, misconceptions and what each looks like at work and at home.', minutes: 14, tags: ['extraversion', 'introversion', 'sensing', 'intuition', 'thinking', 'feeling', 'judging', 'perceiving'] },
        { slug: 'cognitive-functions', title: 'The eight cognitive functions', blurb: 'Ni, Ne, Si, Se, Ti, Te, Fi and Fe: what each does, how the stack works (dominant to inferior), and how to tell look-alike types apart.', minutes: 16, tags: ['cognitive functions', 'function stack', 'jung', 'dominant', 'inferior', 'ni', 'ne', 'ti', 'fe'] },
        { slug: 'temperaments', title: 'Keirsey’s four temperaments', blurb: 'Rationals, Idealists, Guardians and Artisans: core needs, values, communication styles and how they see each other.', minutes: 10, tags: ['keirsey', 'temperament', 'rational', 'idealist', 'guardian', 'artisan'] },
        { slug: 'stress-and-growth', title: 'Stress, the inferior function and growth', blurb: 'What “in the grip” means, each type’s stress pattern, and type development across a lifetime.', minutes: 11, tags: ['stress', 'grip', 'inferior function', 'type development', 'quenk'] },
        { slug: 'big-five', title: 'The Big Five: the research model', blurb: 'Openness, Conscientiousness, Extraversion, Agreeableness and Neuroticism, what they predict, and how MBTI letters map onto them.', minutes: 12, tags: ['big five', 'ocean', 'five factor model', 'neuroticism', 'hexaco'] },
      ],
    },
    {
      slug: 'types',
      title: 'The sixteen types',
      glyph: '▦',
      blurb: 'A full profile for every type, with its function stack, strengths and blind spots, work and love, how it looks in a child, stress and growth, and a table of how it gets on with every other type.',
      children: [
        { slug: 'intj', title: 'INTJ: The Strategist', group: 'Rationals (NT)', blurb: 'Profile, function stack, strengths and blind spots, work, love, friendship, childhood, stress and growth, and how INTJ gets on with all sixteen types.', minutes: 14, tags: ['intj', 'the strategist', 'nt', 'personality type'] },
        { slug: 'intp', title: 'INTP: The Theorist', group: 'Rationals (NT)', blurb: 'Profile, function stack, strengths and blind spots, work, love, friendship, childhood, stress and growth, and how INTP gets on with all sixteen types.', minutes: 14, tags: ['intp', 'the theorist', 'nt', 'personality type'] },
        { slug: 'entj', title: 'ENTJ: The Chief', group: 'Rationals (NT)', blurb: 'Profile, function stack, strengths and blind spots, work, love, friendship, childhood, stress and growth, and how ENTJ gets on with all sixteen types.', minutes: 14, tags: ['entj', 'the chief', 'nt', 'personality type'] },
        { slug: 'entp', title: 'ENTP: The Challenger', group: 'Rationals (NT)', blurb: 'Profile, function stack, strengths and blind spots, work, love, friendship, childhood, stress and growth, and how ENTP gets on with all sixteen types.', minutes: 14, tags: ['entp', 'the challenger', 'nt', 'personality type'] },
        { slug: 'infj', title: 'INFJ: The Counsellor', group: 'Idealists (NF)', blurb: 'Profile, function stack, strengths and blind spots, work, love, friendship, childhood, stress and growth, and how INFJ gets on with all sixteen types.', minutes: 14, tags: ['infj', 'the counsellor', 'nf', 'personality type'] },
        { slug: 'infp', title: 'INFP: The Idealist', group: 'Idealists (NF)', blurb: 'Profile, function stack, strengths and blind spots, work, love, friendship, childhood, stress and growth, and how INFP gets on with all sixteen types.', minutes: 14, tags: ['infp', 'the idealist', 'nf', 'personality type'] },
        { slug: 'enfj', title: 'ENFJ: The Mentor', group: 'Idealists (NF)', blurb: 'Profile, function stack, strengths and blind spots, work, love, friendship, childhood, stress and growth, and how ENFJ gets on with all sixteen types.', minutes: 14, tags: ['enfj', 'the mentor', 'nf', 'personality type'] },
        { slug: 'enfp', title: 'ENFP: The Spark', group: 'Idealists (NF)', blurb: 'Profile, function stack, strengths and blind spots, work, love, friendship, childhood, stress and growth, and how ENFP gets on with all sixteen types.', minutes: 14, tags: ['enfp', 'the spark', 'nf', 'personality type'] },
        { slug: 'istj', title: 'ISTJ: The Steward', group: 'Guardians (SJ)', blurb: 'Profile, function stack, strengths and blind spots, work, love, friendship, childhood, stress and growth, and how ISTJ gets on with all sixteen types.', minutes: 14, tags: ['istj', 'the steward', 'sj', 'personality type'] },
        { slug: 'isfj', title: 'ISFJ: The Guardian', group: 'Guardians (SJ)', blurb: 'Profile, function stack, strengths and blind spots, work, love, friendship, childhood, stress and growth, and how ISFJ gets on with all sixteen types.', minutes: 14, tags: ['isfj', 'the guardian', 'sj', 'personality type'] },
        { slug: 'estj', title: 'ESTJ: The Organiser', group: 'Guardians (SJ)', blurb: 'Profile, function stack, strengths and blind spots, work, love, friendship, childhood, stress and growth, and how ESTJ gets on with all sixteen types.', minutes: 14, tags: ['estj', 'the organiser', 'sj', 'personality type'] },
        { slug: 'esfj', title: 'ESFJ: The Host', group: 'Guardians (SJ)', blurb: 'Profile, function stack, strengths and blind spots, work, love, friendship, childhood, stress and growth, and how ESFJ gets on with all sixteen types.', minutes: 14, tags: ['esfj', 'the host', 'sj', 'personality type'] },
        { slug: 'istp', title: 'ISTP: The Craftsperson', group: 'Artisans (SP)', blurb: 'Profile, function stack, strengths and blind spots, work, love, friendship, childhood, stress and growth, and how ISTP gets on with all sixteen types.', minutes: 14, tags: ['istp', 'the craftsperson', 'sp', 'personality type'] },
        { slug: 'isfp', title: 'ISFP: The Artist', group: 'Artisans (SP)', blurb: 'Profile, function stack, strengths and blind spots, work, love, friendship, childhood, stress and growth, and how ISFP gets on with all sixteen types.', minutes: 14, tags: ['isfp', 'the artist', 'sp', 'personality type'] },
        { slug: 'estp', title: 'ESTP: The Troubleshooter', group: 'Artisans (SP)', blurb: 'Profile, function stack, strengths and blind spots, work, love, friendship, childhood, stress and growth, and how ESTP gets on with all sixteen types.', minutes: 14, tags: ['estp', 'the troubleshooter', 'sp', 'personality type'] },
        { slug: 'esfp', title: 'ESFP: The Performer', group: 'Artisans (SP)', blurb: 'Profile, function stack, strengths and blind spots, work, love, friendship, childhood, stress and growth, and how ESFP gets on with all sixteen types.', minutes: 14, tags: ['esfp', 'the performer', 'sp', 'personality type'] },
      ],
    },
    {
      slug: 'compatibility',
      title: 'Compatibility and clashes',
      glyph: '⚭',
      blurb: 'How type pairs work, an interactive explorer for any two types, a heatmap of all 136 pairs, a reading of every pair, and deep dives on each kind of clash.',
      children: [
        { slug: 'how-it-works', title: 'How type compatibility works (and its limits)', blurb: 'The four ways pairs differ, similarity versus complementarity, what research on personality and relationships actually finds, and the heatmap of all pairs.', minutes: 12, tags: ['compatibility', 'similarity', 'complementarity', 'relationships', 'heatmap'] },
        { slug: 'pair-explorer', title: 'Pair explorer', blurb: 'Pick any two types and read where they click, where they clash and what to try.', minutes: 5, tags: ['explorer', 'interactive', 'pairs', 'compatibility'] },
        { slug: 'all-pairs', title: 'Every pair, one by one', blurb: 'All 136 pairings read in full: pattern, dominant functions, overlap, blind spots, temperaments, clicks, clashes and fixes.', minutes: 60, tags: ['all pairs', '136', 'compatibility chart', 'relationships'] },
        { slug: 'clashes-by-preference', title: 'Clashes by preference: E/I, S/N, T/F, J/P', blurb: 'What each difference looks like in a fight, in a couple, at work and between parent and child, with scripts that help.', minutes: 16, tags: ['conflict', 'clash', 'communication', 'scripts'] },
        { slug: 'function-clashes', title: 'Function clashes and the opposite axes', blurb: 'Ni versus Se, Ne versus Si, Ti versus Fe, Te versus Fi, and same-function-different-direction pairs like Te and Ti.', minutes: 13, tags: ['functions', 'axes', 'ni se', 'ti fe', 'te fi', 'ne si'] },
        { slug: 'temperament-pairs', title: 'Temperament pairs', blurb: 'All ten pairings of Rationals, Idealists, Guardians and Artisans, as couples, friends, colleagues and parent and child.', minutes: 11, tags: ['temperament', 'keirsey', 'pairs'] },
        { slug: 'teams-and-families', title: 'Types in teams and families', blurb: 'Using type language to divide work, run meetings, parent a child unlike you and settle family friction, without boxing anyone in.', minutes: 12, tags: ['teams', 'workplace', 'family', 'parenting', 'siblings'] },
      ],
    },
  ],
}
