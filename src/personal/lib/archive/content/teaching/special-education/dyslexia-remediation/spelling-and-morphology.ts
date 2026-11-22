import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Spelling is usually the most persistent difficulty in dyslexia: many adults who read adequately still spell poorly. English spelling is more regular than it looks once you know its patterns and its morphology (meaningful parts). Teaching both turns spelling from memorising strings into reasoning.',
  nutshell: [
    'About half of English words are spelled predictably by sound–letter rules, and many more are predictable once **morphology and word origin** are considered (Moats).',
    'Teach **spelling rules** explicitly: doubling, drop the e, change y to i, -ck/-k, -tch/-ch, -dge/-ge.',
    '**Simultaneous oral spelling (SOS)**: say the word, say each letter while writing it, read it back.',
    '**Morphology** instruction improves spelling, vocabulary and reading (Goodwin and Ahn, 2013).',
  ],
  sections: [
    {
      id: 'rules',
      title: 'High-value spelling rules',
      blocks: [
        { t: 'table', head: ['Rule', 'Pattern', 'Examples'], rows: [
          ['FLOSS', 'Double f, l, s, z after a short vowel in one-syllable words', 'off, bell, miss, buzz'],
          ['-ck / -k', '-ck straight after a short vowel; -k otherwise', 'duck, but milk, cake'],
          ['-tch / -ch', '-tch after a short vowel', 'catch, but beach, bench'],
          ['-dge / -ge', '-dge after a short vowel', 'badge, but cage, hinge'],
          ['Doubling (1-1-1)', 'One syllable, one vowel, one final consonant: double before a vowel suffix', 'hop → hopping, sit → sitter'],
          ['Drop the e', 'Drop silent e before a vowel suffix', 'make → making, hope → hoping'],
          ['Change y to i', 'Consonant + y → i before most suffixes', 'happy → happiness, cry → cried'],
          ['Soft c and g', 'c and g usually soft before e, i, y', 'city, gem; cat, go'],
        ] },
      ],
    },
    {
      id: 'sos',
      title: 'Simultaneous oral spelling',
      blocks: [
        { t: 'steps', items: [
          { title: 'Hear and say', body: 'Teacher says the word; student repeats it.' },
          { title: 'Segment', body: 'Student says each sound, tapping fingers.' },
          { title: 'Name and write', body: 'Student names each letter aloud while writing it.' },
          { title: 'Read back', body: 'Student reads the word, checking each letter.' },
          { title: 'Review', body: 'Spell it again later in the lesson and in the next session.' },
        ] },
      ],
    },
    {
      id: 'morphology',
      title: 'Morphology and word sums',
      blocks: [
        { t: 'example', title: 'Word sums (structured word inquiry)', lines: [
          { label: 'Sum', text: 'sign + al → signal; sign + ature → signature; de + sign → design' },
          { label: 'Insight', text: 'The silent g in sign is explained by its family: signal and signature pronounce it.' },
          { label: 'Sum', text: 'un + help + ful + ness → unhelpfulness' },
          { label: 'Sum', text: 'act + ion → action; act + ive → active; re + act → react' },
        ] },
        { t: 'table', head: ['Common morpheme', 'Meaning', 'Examples'], rows: [
          ['re-', 'again, back', 'rewrite, return'],
          ['un-', 'not', 'unhappy, unfair'],
          ['pre-', 'before', 'preview, prepay'],
          ['-ful', 'full of', 'hopeful, careful'],
          ['-less', 'without', 'careless, hopeless'],
          ['-tion / -sion', 'act or state of', 'action, decision'],
          ['spect (Latin)', 'look', 'inspect, spectator, respect'],
          ['port (Latin)', 'carry', 'transport, export, portable'],
          ['graph (Greek)', 'write', 'autograph, paragraph, graphic'],
        ] },
      ],
    },
  ],
  sources: [
    'Moats, L. C. (2005/06). How spelling supports reading. American Educator, Winter, 12–43.',
    'Goodwin, A. P., & Ahn, S. (2013). A meta-analysis of morphological interventions in English: Effects on literacy outcomes for school-age children. Scientific Studies of Reading, 17(4), 257–285.',
    'Bowers, P. N., Kirby, J. R., & Deacon, S. H. (2010). The effects of morphological instruction on literacy skills: A systematic review of the literature. Review of Educational Research, 80(2), 144–179.',
  ],
  related: ['teaching/special-education/dyslexia-remediation/decoding-routines', 'teaching/special-education/approaches/dyslexia-approaches', 'teaching/subjects/writing'],
}

export default guide
