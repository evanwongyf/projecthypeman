import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Phonemic awareness is the ability to notice and work with the individual sounds (phonemes) in spoken words. It is the foundation that most readers with dyslexia lack. It is taught orally, in short daily drills, and works best when soon linked to letters.',
  nutshell: [
    'The National Reading Panel (2000) found phonemic awareness instruction had a large effect on phonemic awareness and a moderate effect on reading, **largest when linked to letters** and kept short.',
    'Progression: **rhyme and syllables → onset–rime → blending phonemes → segmenting phonemes → manipulating phonemes** (deleting, substituting).',
    'Advanced manipulation (e.g. “say *stack* without /t/”) underpins **orthographic mapping**, the process by which words become sight words (Kilpatrick, 2015).',
    'Keep sessions to **5–10 minutes daily**.',
  ],
  sections: [
    {
      id: 'ladder',
      title: 'The progression',
      blocks: [
        { t: 'levels', items: [
          { name: 'Syllables and rhyme', body: 'Clap syllables (“ba-na-na”); “Does cat rhyme with hat?”' },
          { name: 'Onset and rime', body: '/c/ + /at/ = cat.' },
          { name: 'Blending phonemes', body: '/s/ /u/ /n/ → sun.' },
          { name: 'Segmenting phonemes', body: 'sun → /s/ /u/ /n/ (three sounds).' },
          { name: 'Deleting phonemes', body: '“Say *meat*. Now say it without /m/.” → eat.' },
          { name: 'Substituting phonemes', body: '“Say *meat*. Change /m/ to /s/.” → seat; “change /ee/ to /a/” → mat.' },
          { name: 'Advanced manipulation', body: 'Inside clusters: “Say *stack* without /t/.” → sack.' },
        ] },
      ],
    },
    {
      id: 'drill',
      title: 'A daily drill script (8 minutes)',
      blocks: [
        { t: 'example', title: 'Phonemic awareness warm-up', lines: [
          { label: '1 min', text: 'Blending: teacher says sounds, students say the word together (“/f/ /l/ /a/ /g/” → “flag”). Six words.' },
          { label: '2 min', text: 'Segmenting with fingers: students tap one finger per sound. “ship” → /sh/ /i/ /p/ (three sounds, not four letters).' },
          { label: '2 min', text: 'Elkonin boxes: push a counter into a box for each sound; then replace counters with letters.' },
          { label: '2 min', text: 'Deletion and substitution: “Say *clip*. Without /k/?” → lip. “Change /l/ to /r/.” → rip. “Change /i/ to /a/.” → rap.' },
          { label: '1 min', text: 'Quick check: each student segments one new word alone; note errors.' },
        ] },
        { t: 'callout', tone: 'tip', title: 'Error correction', text: 'Model, lead, test: “My turn: /s/ /t/ /o/ /p/, stop. Together. Your turn.” Then return to the missed item later in the session.' },
      ],
    },
    {
      id: 'tips',
      title: 'Tips',
      blocks: [
        { t: 'dodont', do: [
          'Use pure sounds (/m/, not “muh”)',
          'Move to letters as soon as possible (phoneme–grapheme mapping)',
          'Use mirrors and mouth pictures for articulation',
          'Revisit advanced manipulation even for older readers who blend well',
        ], dont: [
          'Spend weeks on rhyme alone',
          'Make sessions long; short and daily is better',
          'Confuse phonemes with letters (box has four letters but four sounds /b/ /o/ /k/ /s/; ship has four letters but three sounds)',
        ] },
      ],
    },
  ],
  sources: [
    'National Reading Panel (2000). Teaching Children to Read. NICHD.',
    'Ehri, L. C. et al. (2001). Phonemic awareness instruction helps children learn to read: Evidence from the National Reading Panel’s meta-analysis. Reading Research Quarterly, 36(3), 250–287.',
    'Kilpatrick, D. A. (2016). Equipped for Reading Success. Casey & Kirsch.',
  ],
  related: ['teaching/special-education/dyslexia-remediation/decoding-routines', 'teaching/special-education/approaches/dyslexia-approaches', 'teaching/subjects/reading'],
}

export default guide
