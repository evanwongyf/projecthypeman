import type { Guide } from '../../../../guide'

const caseStudy = (title: string, lines: [string, string][]) => ({ t: 'example' as const, title, lines: lines.map(([label, text]) => ({ label, text })) })

const guide: Guide = {
  intro:
    'Dyslexia responds to teaching. The core difficulty is phonological, linking sounds to letters quickly and accurately, and the approaches with the best evidence teach those links explicitly, systematically and with lots of practice. This guide goes beyond the basics: named programmes, multisensory techniques that work, fluency and spelling methods, assistive technology, and six case studies.',
  nutshell: [
    '**Structured literacy** (explicit, systematic, cumulative, diagnostic) is the core. Orton–Gillingham-based programmes are the best known.',
    '“Multisensory” helps when it means saying, tapping and writing sounds together, not when it means vague learning-styles activities.',
    'Intervention is most effective early, but it is never too late: older learners also benefit, especially from morphology and fluency work.',
    'Accommodations (extra time, text-to-speech, reduced copying) remove barriers while skills are built, use both, not either.',
  ],
  sections: [
    {
      id: 'programmes',
      title: 'Structured literacy programmes',
      blocks: [
        { t: 'table', head: ['Approach', 'Key features', 'Typical use'], rows: [
          ['Orton–Gillingham', 'Teacher-led, explicit phonics in strict sequence; simultaneous visual, auditory, kinaesthetic practice; diagnostic and prescriptive', 'One-to-one or small group, by trained tutors'],
          ['Wilson Reading System', 'OG-based, 12 steps, word structure and syllable types; finger tapping of sounds', 'Upper primary to adult'],
          ['Alpha to Omega; Toe by Toe; Units of Sound', 'UK structured programmes from beginning phonics to fluency', 'Schools and home'],
          ['Systematic synthetic phonics', 'Whole-class phonics taught in order with decodable books (e.g. Letters and Sounds, Read Write Inc.)', 'All early readers; the first wave of prevention'],
          ['Morphology instruction', 'Prefixes, roots, suffixes (un-help-ful), Latin and Greek roots', 'Older learners: spelling and vocabulary'],
          ['MOE School-based Dyslexia Remediation (Singapore)', 'Structured literacy groups in primary schools for P3–P4 pupils identified with dyslexia; DAS (Dyslexia Association of Singapore) provides MOE-subsidised programmes', 'Primary pupils in Singapore'],
        ] },
      ],
    },
    {
      id: 'techniques',
      title: 'Techniques that work',
      blocks: [
        { t: 'terms', items: [
          { term: 'Sound tapping', def: 'Tap one finger to the thumb for each sound in a word (c-a-t: three taps), then sweep to blend. Makes segmenting physical and countable.' },
          { term: 'Elkonin boxes', def: 'Push a counter into a box for each sound, then write the letters for each sound in the boxes.' },
          { term: 'Simultaneous Oral Spelling (SOS)', def: 'Look at the word, say it, say each letter name while writing it, say the word again, check. A multisensory spelling routine from Orton–Gillingham.' },
          { term: 'Syllable types', def: 'Teach the six syllable types (closed, open, silent-e, vowel team, r-controlled, consonant-le) so learners can decode long words.' },
          { term: 'Repeated reading', def: 'Read the same short passage several times with feedback until fluent; chart words correct per minute. One of the best-supported fluency methods.' },
          { term: 'Paired reading', def: 'Reading aloud together with an adult or peer; the learner signals to read alone and the partner rejoins on errors.' },
          { term: 'Look–cover–write–check (with care)', def: 'Useful for practising irregular words, but weak on its own; pair it with explaining the sound–letter links first.' },
        ] },
        { t: 'callout', tone: 'myth', title: 'What does not work', text: 'Coloured overlays and lenses, vision therapy, special fonts, “brain gym”, and teaching to learning styles have no good evidence for improving reading. Some dyslexic readers prefer a certain font or background for comfort, allow it, but do not expect it to teach reading.' },
      ],
    },
    {
      id: 'classroom',
      title: 'Classroom accommodations',
      blocks: [
        { t: 'checklist', items: [
          'Provide printed notes so the learner does not copy from the board.',
          'Pre-teach key vocabulary and spellings before a topic.',
          'Do not ask the learner to read aloud without preparation.',
          'Mark for content separately from spelling; give two or three spelling targets at a time.',
          'Allow text-to-speech, speech-to-text, audiobooks and spell-checkers.',
          'Allow extra time and a reader or reader pen in tests (access arrangements).',
          'Use clear, sans-serif fonts, generous spacing and short paragraphs in handouts.',
          'Let learners show understanding orally or visually.',
          'Protect self-esteem: notice effort and strengths; dyslexic learners often feel “stupid” despite good ability.',
        ] },
      ],
    },
    {
      id: 'cases',
      title: 'Case studies',
      blocks: [
        caseStudy('Ben, 7, not “catching up”', [
          ['Situation', 'Ben still cannot blend three-letter words at the end of Year 2 / Primary 2 despite whole-class phonics.'],
          ['What helped', 'Daily 20-minute small-group structured literacy with sound tapping and decodable books; parents given a five-minute home routine.'],
          ['Outcome', 'After two terms, he was reading decodable books fluently; reading age rose by 14 months in 6 months.'],
          ['Lesson', 'Early, intensive, systematic intervention is the most effective response.'],
        ]),
        caseStudy('Aisha, 10, reads slowly, hates reading', [
          ['Situation', 'Accurate but very slow decoding; avoids reading; falling behind in all subjects.'],
          ['What helped', 'Repeated reading with a fluency chart three times a week, audiobooks of class novels alongside print, and choice of high-interest texts.'],
          ['Outcome', 'Words correct per minute rose from 55 to 90 in a term; she started reading graphic novels independently.'],
        ]),
        caseStudy('Tom, 13, spelling disaster', [
          ['Situation', 'Strong verbal ideas; writing full of misspellings; refuses to write.'],
          ['What helped', 'Morphology instruction (prefixes, suffixes, roots), speech-to-text for longer pieces, marking for ideas with three spelling targets each week.'],
          ['Outcome', 'Writing quantity doubled; spelling of taught patterns improved; confidence rose.'],
        ]),
        caseStudy('Mei Ling, 9, dyslexia and Chinese', [
          ['Situation', 'Struggles with both English reading and Chinese characters (Singapore).'],
          ['What helped', 'English: MOE School-based Dyslexia Remediation group. Chinese: teaching character components (radicals) explicitly, linking components to meaning and sound, and spaced practice of a few characters at a time.'],
          ['Outcome', 'Improvement in both; the radical approach reduced character confusions.'],
          ['Lesson', 'Dyslexia affects learning to read in any script, but its look differs by language: phonological difficulties in English, more visual-orthographic and morphological difficulties in Chinese.'],
        ]),
        caseStudy('Josh, 16, exams', [
          ['Situation', 'Bright but cannot finish papers in time; runs out of time reading questions.'],
          ['What helped', 'Formal assessment for access arrangements: 25% extra time and a computer reader; practice with them in mock exams.'],
          ['Outcome', 'Completed all papers; grades improved by a band in essay subjects.'],
        ]),
        caseStudy('Ruth, 35, adult learner', [
          ['Situation', 'An adult returning to study, hiding her reading difficulty for decades.'],
          ['What helped', 'Diagnostic assessment and a dyslexia tutor; assistive technology at work; a structured programme at an adult literacy centre.'],
          ['Outcome', 'Passed a vocational qualification; described the diagnosis as a relief.'],
        ]),
      ],
    },
  ],
  sources: [
    'International Dyslexia Association (2019). Structured Literacy: An Introductory Guide.',
    'Snowling, M. J. & Hulme, C. (2012). Interventions for children’s language and literacy difficulties. IJLCD 47(1).',
    'Galuschka, K. et al. (2014). Effectiveness of treatment approaches for children and adolescents with reading disabilities: a meta-analysis of randomized controlled trials. PLoS ONE 9(2).',
    'Ministry of Education Singapore. School-based Dyslexia Remediation programme; Dyslexia Association of Singapore.',
    'Ho, C. S.-H. et al. (2004). Cognitive profiling and preliminary subtyping in Chinese developmental dyslexia. Cognition 91(1).',
  ],
  related: ['teaching/special-education/needs/dyslexia', 'teaching/subjects/reading'],
}

export default guide
