import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'While decoding is being remediated, a student with dyslexia must not fall behind in knowledge, vocabulary and thinking. Two parallel tracks are needed: build the language and comprehension skills that reading will eventually need, and give access to grade-level content through other routes.',
  nutshell: [
    'Keep growing **vocabulary and background knowledge** through talk and read-alouds.',
    'Teach **comprehension strategies** (summarising, questioning, visualising, monitoring) on texts read aloud as well as read independently.',
    'Use **assistive technology** (text-to-speech, audiobooks, dictation) for access, alongside remediation, not instead of it.',
    'Support **writing** with planning frames, dictation and spelling tools so ideas are not limited by spelling.',
  ],
  sections: [
    {
      id: 'two-tracks',
      title: 'Two tracks',
      blocks: [
        { t: 'table', head: ['Track', 'Purpose', 'Examples'], rows: [
          ['Remediation', 'Fix the underlying skills', 'Phonemic awareness, decoding, fluency, spelling instruction'],
          ['Access', 'Learn grade-level content now', 'Audiobooks, text-to-speech, read-alouds, peer reading, extra time, oral responses'],
        ] },
        { t: 'callout', tone: 'note', title: 'Does access slow remediation?', text: 'No good evidence suggests audiobooks or text-to-speech weaken decoding growth when explicit decoding instruction continues. They prevent the “Matthew effect”, where poor readers read less and fall further behind in vocabulary and knowledge.' },
      ],
    },
    {
      id: 'comprehension',
      title: 'Comprehension strategies',
      blocks: [
        { t: 'cards', cols: 2, items: [
          { title: 'Activate and build knowledge', body: 'Preview key ideas and vocabulary before reading.' },
          { title: 'Question', body: 'Generate and answer questions while reading (who, what, why, how).' },
          { title: 'Summarise', body: 'After each section, say the main idea in one sentence.' },
          { title: 'Monitor', body: 'Notice when meaning breaks down; reread, ask, or look up.' },
          { title: 'Visualise and draw', body: 'Sketch what is happening; useful for science and stories.' },
          { title: 'Graphic organisers', body: 'Story maps, cause–effect chains, compare–contrast tables.' },
        ] },
      ],
    },
    {
      id: 'tech',
      title: 'Assistive technology',
      blocks: [
        { t: 'table', head: ['Tool', 'Use', 'Tip'], rows: [
          ['Text-to-speech', 'Read digital texts aloud', 'Follow along with highlighting'],
          ['Audiobooks', 'Access literature and textbooks', 'Pair with the printed text when possible'],
          ['Speech-to-text (dictation)', 'Draft writing', 'Then edit with spell-check'],
          ['Spell-checkers and word prediction', 'Spelling support', 'Teach students to check suggestions'],
          ['Reading pens and scanning apps', 'Read printed text aloud', 'Useful for worksheets and exams where allowed'],
          ['Dyslexia-friendly formatting', 'Larger spacing, clear fonts, off-white backgrounds', 'Readability matters more than special fonts'],
        ] },
        { t: 'callout', tone: 'myth', title: 'Coloured overlays and special fonts', text: 'Reviews have found no reliable evidence that coloured overlays or special “dyslexia fonts” improve reading. Clear formatting helps everyone; the core intervention remains structured literacy.' },
      ],
    },
  ],
  sources: [
    'Stanovich, K. E. (1986). Matthew effects in reading. Reading Research Quarterly, 21(4), 360–407.',
    'Wood, S. G. et al. (2018). Does use of text-to-speech and related read-aloud tools improve reading comprehension for students with reading disabilities? A meta-analysis. Journal of Learning Disabilities, 51(1), 73–84.',
    'Kuster, S. M. et al. (2018). Dyslexie font does not benefit reading in children with or without dyslexia. Annals of Dyslexia, 68(1), 25–42.',
    'Shanahan, T. et al. (2010). Improving Reading Comprehension in Kindergarten Through 3rd Grade. IES Practice Guide.',
  ],
  related: ['teaching/special-education/strategies/assistive-tech', 'teaching/special-education/foundations/accommodations', 'teaching/special-education/dyslexia-remediation/older-learners-and-home'],
}

export default guide
