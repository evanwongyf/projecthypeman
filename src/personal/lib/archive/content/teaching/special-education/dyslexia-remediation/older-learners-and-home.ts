import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'It is never too late to improve reading, but older learners need remediation that respects their age, interests and dignity, and is efficient with limited time. Parents can help a great deal at home with short, positive routines. Singapore has specific school and community support worth knowing.',
  nutshell: [
    'Adolescents and adults still respond to structured literacy; gains are often slower and need more intensity.',
    'Use **age-appropriate materials**, focus on **multisyllabic words and morphology**, and connect to subject reading.',
    'Protect **self-esteem**: explain dyslexia, highlight strengths, give access to content.',
    'At home: **10–15 minutes daily**, paired reading, word games, reading aloud to the child, praise for effort.',
  ],
  sections: [
    {
      id: 'older',
      title: 'Remediation for older learners',
      blocks: [
        { t: 'table', head: ['Focus', 'Why', 'How'], rows: [
          ['Multisyllabic decoding', 'Secondary texts are full of long words', 'Syllable division, prefixes and suffixes, flexible vowel strategies'],
          ['Morphology', 'Unlocks subject vocabulary', 'Latin and Greek roots in science and history words'],
          ['Fluency on subject texts', 'Practice where it matters', 'Repeated reading of passages from their own textbooks'],
          ['Vocabulary', 'Builds comprehension', 'Explicit teaching of tier-2 and subject words'],
          ['Strategies and self-advocacy', 'Independence', 'Using technology, asking for accommodations, study skills'],
        ] },
        { t: 'callout', tone: 'tip', title: 'Dignity', text: 'Avoid baby-ish books and public reading aloud. Explain the science of dyslexia to the student; many teenagers are relieved to learn their difficulty has a name, a cause and a solution, and that it is unrelated to intelligence.' },
      ],
    },
    {
      id: 'home',
      title: 'What parents can do',
      blocks: [
        { t: 'checklist', items: [
          'Read aloud to your child daily, including books above their reading level',
          'Paired reading: read together; child signals to read alone; take over smoothly on hard words',
          'Short practice of the patterns taught at school (ask the teacher for the list)',
          'Word games: rhyming, “I spy” with sounds, Boggle, Scrabble Junior',
          'Audiobooks for enjoyment and knowledge',
          'Praise effort and progress, not just results',
          'Protect sleep and limit pressure before tests',
          'Keep in touch with the school about accommodations',
        ] },
      ],
    },
    {
      id: 'singapore',
      title: 'Support in Singapore',
      blocks: [
        { t: 'table', head: ['Support', 'What it is'], rows: [
          ['Learning Support Programme (LSP)', 'MOE early intervention in Primary 1–2 for pupils with weak literacy'],
          ['School-based Dyslexia Remediation (SDR)', 'MOE programme in many primary schools for Primary 3–4 pupils diagnosed with dyslexia'],
          ['DAS MOE-aided Literacy Programme (MAP)', 'Dyslexia Association of Singapore’s structured literacy programme for primary pupils, co-funded by MOE'],
          ['Access arrangements', 'Extra time, reader or other arrangements for national examinations, applied for through the school with evidence'],
          ['Allied educators (learning and behavioural support)', 'School staff who support students with special educational needs'],
        ], caption: 'Check the latest details with your school, MOE and DAS, as programmes and eligibility change.' },
      ],
    },
  ],
  sources: [
    'Vaughn, S., Wanzek, J. et al. (2010). Response to intervention for middle school students with reading difficulties. School Psychology Review, 39(1), 3–21.',
    'Topping, K. (1987). Paired reading: A powerful technique for parent use. The Reading Teacher, 40(7), 608–614.',
    'Ministry of Education Singapore. Support for students with special educational needs: dyslexia.',
    'Dyslexia Association of Singapore. MOE-aided DAS Literacy Programme.',
  ],
  related: ['teaching/special-education/approaches/dyslexia-approaches', 'teaching/special-education/dyslexia-remediation/remediation-cases', 'parenting/gifted/nurturing-by-age'],
}

export default guide
