import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Explicit, systematic phonics is the best-evidenced approach for dyslexia (Galuschka et al., 2014). “Explicit” means the teacher shows exactly how each pattern works; “systematic” means patterns are taught in a planned order, with cumulative review. This guide gives a scope and sequence, a model lesson and error-correction scripts.',
  nutshell: [
    'Follow a **scope and sequence** from simple to complex patterns.',
    'Each lesson: **review → new pattern → guided practice → decodable text → dictation**.',
    'Teach the **six syllable types** for multisyllabic words.',
    'Correct errors immediately and positively; track which patterns are secure.',
  ],
  sections: [
    {
      id: 'sequence',
      title: 'A scope and sequence',
      blocks: [
        { t: 'levels', items: [
          { name: 'Single consonants and short vowels', body: 'CVC words: sat, pin, hot.' },
          { name: 'Consonant digraphs', body: 'sh, ch, th, ck, ng: ship, chop, duck.' },
          { name: 'Blends', body: 'st, fl, br, -nd, -mp: stop, flag, hand.' },
          { name: 'Silent e (VCe)', body: 'make, ride, home.' },
          { name: 'Vowel teams', body: 'ai, ay, ee, ea, oa, ow: rain, seed, boat.' },
          { name: 'R-controlled vowels', body: 'ar, or, er, ir, ur: car, fork, bird.' },
          { name: 'Diphthongs and complex patterns', body: 'oi, oy, ou, ow, au, aw; -tch, -dge.' },
          { name: 'Multisyllable words and syllable division', body: 'rab-bit, ro-bot, cam-ping.' },
          { name: 'Morphology', body: 'Prefixes, suffixes, roots: un-help-ful.' },
        ] },
      ],
    },
    {
      id: 'lesson',
      title: 'A 30-minute decoding lesson',
      blocks: [
        { t: 'example', title: 'Teaching the vowel team “ai”', lines: [
          { label: 'Review (5 min)', text: 'Flashcards of known sounds; read 10 words with previous patterns.' },
          { label: 'Explicit teaching (5 min)', text: '“These two letters work together to say /ay/, as in rain. Watch me: r–ai–n, rain.” Underline the team.' },
          { label: 'Guided practice (8 min)', text: 'Students read a list: rain, paid, snail, train, chain; then mixed with earlier patterns (ran, rain; pan, pain) to force attention to the team.' },
          { label: 'Decodable text (7 min)', text: 'A short passage using only taught patterns plus a few taught high-frequency words.' },
          { label: 'Dictation (5 min)', text: 'Teacher says words and a sentence; students spell; check together.' },
        ] },
      ],
    },
    {
      id: 'syllables',
      title: 'The six syllable types',
      blocks: [
        { t: 'table', head: ['Type', 'Pattern', 'Vowel sound', 'Examples'], rows: [
          ['Closed', 'Vowel followed by a consonant', 'Short', 'cat, rab-bit'],
          ['Open', 'Ends in a vowel', 'Long', 'go, ro-bot'],
          ['Vowel-consonant-e', 'Silent e', 'Long', 'make, in-side'],
          ['Vowel team', 'Two letters, one vowel sound', 'Varies', 'rain, boat'],
          ['R-controlled', 'Vowel + r', 'Changed by r', 'car, bird'],
          ['Consonant-le', 'Final -ble, -tle, -dle…', 'Schwa + l', 'ta-ble, lit-tle'],
        ] },
      ],
    },
    {
      id: 'errors',
      title: 'Error correction scripts',
      blocks: [
        { t: 'table', head: ['Error', 'Script'], rows: [
          ['Misreads a sound (“rin” for rain)', '“Look at these letters [point to ai]. What sound do they make together? Now read it.”'],
          ['Guesses from the first letter', '“Touch each sound and read it all the way through.”'],
          ['Skips a word', '“You missed one. Find it and read it.”'],
          ['Correct after hesitating', '“Yes. Read it again smoothly.”'],
          ['Same error repeatedly', 'Note the pattern; reteach it next lesson; include it in review for a week.'],
        ] },
      ],
    },
  ],
  sources: [
    'Galuschka, K. et al. (2014). Effectiveness of treatment approaches for children and adolescents with reading disabilities: A meta-analysis of randomized controlled trials. PLoS ONE, 9(2), e89900.',
    'National Reading Panel (2000). Teaching Children to Read. NICHD.',
    'Moats, L. C. (2020). Speech to Print (3rd ed.). Brookes.',
    'Ehri, L. C. (2014). Orthographic mapping in the acquisition of sight word reading, spelling memory, and vocabulary learning. Scientific Studies of Reading, 18(1), 5–21.',
  ],
  related: ['teaching/special-education/dyslexia-remediation/fluency-building', 'teaching/special-education/approaches/dyslexia-approaches', 'teaching/special-education/dyslexia-remediation/spelling-and-morphology'],
}

export default guide
