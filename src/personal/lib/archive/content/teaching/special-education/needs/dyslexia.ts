import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Dyslexia is a specific learning difficulty that mainly affects accurate and fluent word reading and spelling. It is not linked to intelligence, it is not about seeing letters backwards, and it responds well to explicit, structured teaching.',
  nutshell: [
    'At its core is usually a difficulty with **phonological processing**: hearing and manipulating the sounds in words.',
    'It exists on a continuum and often occurs alongside other difficulties, such as with working memory or attention.',
    '**Structured literacy** (explicit, systematic teaching of sounds, letters, spelling patterns and word parts) is the best-supported approach.',
    'In class: reduce unnecessary reading and copying barriers, give access to content through audio, and keep expectations for thinking high.',
  ],
  sections: [
    {
      id: 'what',
      title: 'What dyslexia is',
      blocks: [
        {
          t: 'p',
          text: 'The Rose Review (2009) in England described dyslexia as "a learning difficulty that primarily affects the skills involved in accurate and fluent word reading and spelling", with characteristic difficulties in **phonological awareness, verbal memory and verbal processing speed**. It occurs across the range of intellectual abilities and is best thought of as a continuum rather than a distinct category.',
        },
        {
          t: 'p',
          text: 'Estimates of how many people have dyslexia vary widely, from around 5% to 10% or more, depending on where the line is drawn. In a class of 30, you may well teach two or three learners with significant difficulties.',
        },
        {
          t: 'cards',
          cols: 3,
          items: [
            { title: 'Myth: letters look backwards', body: 'Reversing b and d is common in all early readers. Dyslexia is mainly a language-processing difficulty, not a visual one.' },
            { title: 'Myth: coloured overlays fix it', body: 'Reviews find no reliable evidence that coloured lenses or overlays treat dyslexia. Some learners find them comfortable, which is fine, but they are not an intervention.' },
            { title: 'Myth: they will grow out of it', body: 'Dyslexia is lifelong, but skilled teaching greatly improves reading, and adults develop effective strategies.' },
          ],
        },
      ],
    },
    {
      id: 'signs',
      title: 'Signs to notice',
      lead: 'Patterns that suggest a closer look.',
      blocks: [
        {
          t: 'list',
          items: [
            'Slow, effortful reading, with a lot of guessing from first letters or pictures.',
            'Difficulty sounding out unfamiliar words, including nonsense words.',
            'Spelling that is very inconsistent, even for common words.',
            'Trouble with rhyme, splitting words into sounds, or remembering sequences like days of the week.',
            'A gap between spoken understanding (often good) and reading or writing.',
            'Tiring quickly with reading tasks; avoiding reading aloud.',
            'Family history of reading difficulties.',
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Teachers notice; specialists assess',
          text: 'If you see these signs, record specific examples and talk to your SENCO or special education team. A formal assessment is done by specialists. Do not wait for a diagnosis to start supporting the learner.',
        },
      ],
    },
    {
      id: 'teaching',
      title: 'Structured literacy',
      lead: 'How reading is taught to learners with dyslexia.',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Explicit', body: 'Every concept is taught directly: this letter pattern makes this sound. Nothing is left to be discovered.' },
            { title: 'Systematic and cumulative', body: 'Skills are taught in a planned order from simple to complex, each building on mastered earlier ones.' },
            { title: 'Phonology and phonics', body: 'Hearing sounds in words, and linking sounds to letters, practised to automaticity.' },
            { title: 'Morphology', body: 'Word parts (prefixes, roots, suffixes), which help with reading and spelling longer words: *un-help-ful*.' },
            { title: 'Diagnostic', body: 'Teaching responds continuously to what the learner has and has not mastered.' },
            { title: 'Lots of practice', body: 'Short, frequent sessions with plenty of successful repetition, including reading connected text.' },
          ],
        },
        {
          t: 'p',
          text: 'Programmes based on Orton-Gillingham principles are widely used. They are often described as **multisensory** (saying, seeing, writing and tracing letters together). The explicit, systematic structure is well supported; the evidence that the multisensory element adds extra benefit is less clear.',
        },
      ],
    },
    {
      id: 'classroom',
      title: 'Support in every lesson',
      lead: 'For subject teachers.',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Give access to texts in audio or with text-to-speech, so reading difficulty does not block learning the content.',
            'Provide printed notes or slides instead of copying from the board.',
            'Pre-teach key vocabulary, with the word written, spoken and explained.',
            'Use clear layouts: good spacing, short paragraphs, headings, a plain sans-serif font.',
            'Give extra time, or shorter reading tasks, where reading speed is not the point.',
            'Let learners show understanding orally, by typing, or with speech-to-text.',
            'Mark spelling separately from content, and focus spelling corrections on key subject words.',
          ],
          dont: [
            'Ask the learner to read aloud without warning in front of the class.',
            'Judge their understanding by their written work alone.',
            'Give long written instructions without also saying them.',
            'Cover work in red spelling corrections.',
            'Assume special "dyslexia fonts" solve the problem; studies have not found them better than standard clear fonts.',
          ],
        },
      ],
    },
  ],
  sources: [
    'Rose, J. (2009). *Identifying and teaching children and young people with dyslexia and literacy difficulties*. DCSF.',
    'Snowling, M. J., & Hulme, C. (2012). Interventions for children’s language and literacy difficulties. *International Journal of Language & Communication Disorders, 47*(1), 27–34.',
    'Griffiths, P. G., Taylor, R. H., Henderson, L. M., & Barrett, B. T. (2016). The effect of coloured overlays and lenses on reading: A systematic review of the literature. *Ophthalmic & Physiological Optics, 36*(5), 519–544.',
    'Kuster, S. M., et al. (2018). Dyslexie font does not benefit reading in children with or without dyslexia. *Annals of Dyslexia, 68*(1), 25–42.',
    'International Dyslexia Association. (2002). *Definition of dyslexia*.',
  ],
  related: ['teaching/special-education/strategies/assistive-tech', 'teaching/special-education/foundations/accommodations', 'teaching/special-education/needs/speech-language', 'teaching/subjects/reading'],
}

export default guide
