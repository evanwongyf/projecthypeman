import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Six composite readers, from Primary 1 to adult, each with a profile, a plan, data and what changed. Names and details are invented; the patterns are typical.',
  nutshell: [
    'Each plan targeted the **weakest link** identified by assessment.',
    'Progress data drove **changes** when growth stalled.',
  ],
  sections: [
    {
      id: 'cases',
      title: 'Cases',
      blocks: [
        { t: 'example', title: '1. Hana, Primary 1: phonological awareness', lines: [
          { label: 'Profile', text: 'Could not blend three sounds or segment simple words; knew 12 letter sounds.' },
          { label: 'Plan', text: 'Daily 10-minute phonemic awareness drill plus letter–sound teaching in a small group (LSP).' },
          { label: 'Data', text: 'Letter sounds 12 → 32 in 10 weeks; blending secure by week 6.' },
          { label: 'Next', text: 'Moved on to CVC decoding and decodable books.' },
        ] },
        { t: 'example', title: '2. Jun Wei, Primary 3: slow decoding, strong language', lines: [
          { label: 'Profile', text: 'Listening comprehension above average; nonsense-word reading at the 5th percentile; 45 WCPM.' },
          { label: 'Plan', text: 'Explicit phonics (vowel teams onward), 4 × 30 minutes a week; audiobooks for class reading.' },
          { label: 'Data', text: 'ROI 0.6 WCPM/week for 8 weeks (below aimline 1.5).' },
          { label: 'Change', text: 'Added advanced phoneme manipulation and daily word-level speed drills; ROI rose to 1.6.' },
        ] },
        { t: 'example', title: '3. Priya, Primary 5: accurate but slow', lines: [
          { label: 'Profile', text: '97% accuracy but 70 WCPM; tired during tests.' },
          { label: 'Plan', text: 'Repeated reading with subject passages; reader’s theatre; extra time arrangement.' },
          { label: 'Data', text: '70 → 92 WCPM over a term.' },
        ] },
        { t: 'example', title: '4. Arjun, Secondary 2: spelling and long words', lines: [
          { label: 'Profile', text: 'Reads short words well; avoids long words; spelling very weak.' },
          { label: 'Plan', text: 'Syllable division, morphology with science and history words, word sums, dictation with spelling rules.' },
          { label: 'Result', text: 'More willing to attempt long words; spelling of taught patterns improved from 40% to 75%.' },
        ] },
        { t: 'example', title: '5. Mei, Primary 4: mixed profile', lines: [
          { label: 'Profile', text: 'Weak decoding and weak vocabulary (developmental language disorder suspected).' },
          { label: 'Plan', text: 'Structured literacy plus speech and language therapy referral; vocabulary teaching with pictures.' },
          { label: 'Lesson', text: 'The simple view of reading explained why decoding gains alone did not lift comprehension.' },
        ] },
        { t: 'example', title: '6. David, adult learner', lines: [
          { label: 'Profile', text: 'Left school with very limited reading; works as a technician.' },
          { label: 'Plan', text: 'Adult structured literacy course; workplace manuals as practice texts; text-to-speech on phone.' },
          { label: 'Result', text: 'After a year, reads manuals independently; describes renewed confidence.' },
        ] },
      ],
    },
  ],
  related: ['teaching/special-education/dyslexia-remediation/progress-monitoring', 'teaching/special-education/approaches/dyslexia-approaches', 'teaching/special-education/dyslexia-remediation/assessment-and-profile'],
}

export default guide
