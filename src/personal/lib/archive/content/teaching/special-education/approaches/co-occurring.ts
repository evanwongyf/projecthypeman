import type { Guide } from '../../../../guide'

const caseStudy = (title: string, lines: [string, string][]) => ({ t: 'example' as const, title, lines: lines.map(([label, text]) => ({ label, text })) })

const guide: Guide = {
  intro:
    'Neurodevelopmental differences rarely come alone. Between 30% and 80% of autistic people also meet criteria for ADHD; around a third of children with dyslexia also have ADHD; anxiety accompanies most of them. Supporting one label while ignoring the other is a common reason plans fail. This guide covers the most frequent combinations and the tensions between their needs.',
  sections: [
    {
      id: 'combos',
      title: 'Common combinations',
      blocks: [
        { t: 'table', head: ['Combination', 'Why it is tricky', 'What helps'], rows: [
          ['Autism + ADHD (“AuDHD”)', 'Needs pull in opposite directions: autism craves routine and sameness, ADHD craves novelty; one needs low stimulation, the other movement.', 'Predictable structure with built-in variety inside it (same routine, different tasks); planned movement; interest-led tasks serve both.'],
          ['Dyslexia + ADHD', 'Reading is slow and effortful and attention runs out first; easy to mislabel as laziness.', 'Short reading bursts, text-to-speech, fluency work in small doses, immediate feedback.'],
          ['Autism + anxiety', 'Anxiety drives much “behaviour”; standard CBT needs adapting.', 'Predictability, visual anxiety scales, adapted CBT, a safe base.'],
          ['ADHD + dyscalculia/dyspraxia', 'Working memory and motor demands compound.', 'Manipulatives, reduced copying, keyboard instead of handwriting, step checklists.'],
          ['Twice-exceptional (gifted + any of the above)', 'Ability hides difficulty and difficulty hides ability; learners may be bored and struggling at once.', 'Teach to the strength, support the weakness: advanced content with scaffolds for organisation and output.'],
        ] },
      ],
    },
    {
      id: 'cases',
      title: 'Case studies',
      blocks: [
        caseStudy('Sam, 10, autistic and ADHD', [
          ['Situation', 'Sam needs a strict routine but gets bored within minutes; visual timetables help but he rushes through work and then wanders.'],
          ['What helped', 'A fixed lesson structure with a “choice slot” of three varied tasks; movement breaks scheduled on the timetable so they were predictable; noise-cancelling headphones plus a fidget.'],
          ['Outcome', 'Calmer and more productive: structure met his autistic needs, variety and movement his ADHD ones.'],
        ]),
        caseStudy('Isla, 14, dyslexia and ADHD', [
          ['Situation', 'Very slow reader who gives up after a paragraph; labelled as unmotivated.'],
          ['What helped', 'Audio versions of all texts; reading in 5-minute bursts with a timer and a short reward; structured literacy for spelling; ADHD diagnosis and medication through her doctor.'],
          ['Outcome', 'Completion and grades rose; she described reading as “possible now”.'],
        ]),
        caseStudy('Arjun, 12, gifted and dyslexic', [
          ['Situation', 'Extraordinary verbal reasoning, very poor spelling; placed in a low set because of written work.'],
          ['What helped', 'Moved to a top set with speech-to-text, a scribe for tests, and specialist spelling support.'],
          ['Outcome', 'Thrived academically; his behaviour problems, which had come from boredom and frustration, disappeared.'],
        ]),
      ],
    },
  ],
  sources: [
    'Rong, Y. et al. (2021). Prevalence of ADHD in individuals with autism spectrum disorder: a meta-analysis. Research in Autism Spectrum Disorders 83.',
    'Willcutt, E. G. & Pennington, B. F. (2000). Comorbidity of reading disability and attention-deficit/hyperactivity disorder. Journal of Learning Disabilities 33(2).',
    'Reis, S. M., Baum, S. M. & Burke, E. (2014). An operational definition of twice-exceptional learners. Gifted Child Quarterly 58(3).',
  ],
  related: ['teaching/special-education/needs/twice-exceptional', 'teaching/special-education/approaches/engagement-toolkit'],
}

export default guide
