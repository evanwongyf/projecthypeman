import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Many learners are studying subjects in a language they are still learning. They need to learn the content and the language at the same time. With the right support, they can do both, and their home language is a resource, not an obstacle.',
  nutshell: [
    'Everyday conversational language develops much faster than the academic language needed for school subjects.',
    'Make input **comprehensible**: visuals, gestures, simplified structure, context, not simplified content.',
    'Teach vocabulary and language structures explicitly, and give many chances to talk.',
    'Let learners use their home language to think, plan and make connections.',
  ],
  sections: [
    {
      id: 'bics-calp',
      title: 'Two kinds of language',
      lead: 'Jim Cummins’ distinction.',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'BICS: basic interpersonal communication skills', body: 'Everyday social language: chatting with friends, following classroom routines. Supported by context, gestures and shared situations. Often fluent within **one to three years**.' },
            { title: 'CALP: cognitive academic language proficiency', body: 'The language of textbooks and exams: "analyse", "consequently", passive voice, subject vocabulary. Less context, more abstract. Typically takes **five to seven years** or more to reach age-level.' },
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Fluent is not finished',
          text: 'A learner who chats easily in the playground may still struggle to read a science textbook. Do not mistake social fluency for academic proficiency, and do not mistake academic language difficulty for a learning difficulty.',
        },
      ],
    },
    {
      id: 'input',
      title: 'Comprehensible input',
      blocks: [
        {
          t: 'p',
          text: 'Stephen Krashen argued that language is acquired through input learners can understand, just beyond their current level ("i + 1"), and that anxiety raises an "affective filter" that blocks acquisition. Not every part of his theory is accepted, but the classroom advice holds up: make meaning clear, keep anxiety low and give plenty of exposure.',
        },
        {
          t: 'list',
          items: [
            'Use **visuals**: pictures, diagrams, real objects, gestures, demonstrations.',
            'Speak clearly, at a natural but not rushed pace, and repeat key phrases.',
            'Write key instructions and vocabulary on the board.',
            'Give **context** before detail: a picture or video before the text.',
            'Check understanding with actions or choices, not "do you understand?".',
          ],
        },
      ],
    },
    {
      id: 'strategies',
      title: 'Classroom strategies',
      blocks: [
        {
          t: 'cards',
          cols: 3,
          items: [
            { title: 'Content and language objectives', body: 'Alongside the content goal, set a language goal: "Use ‘because’ and ‘therefore’ to explain a cause." (as in the SIOP model).' },
            { title: 'Pre-teach vocabulary', body: 'Teach key words before the lesson, with visuals and examples. Focus on high-use academic words, not just technical terms.' },
            { title: 'Sentence frames', body: 'Give the structure for the thinking: "I predict ___ because ___." "Compared to ___, ___ is…"' },
            { title: 'Structured talk', body: 'Planned pair and group talk with roles and stems. Learners need to *use* academic language, not just hear it.' },
            { title: 'Home language', body: 'Let learners discuss ideas in their home language first, use bilingual glossaries, or draft in their home language. This is sometimes called translanguaging.' },
            { title: 'Graphic organisers', body: 'Show the structure of ideas visually, reducing the language load of understanding it.' },
            { title: 'Wait time', body: 'Allow extra processing time before expecting an answer.' },
            { title: 'Peer support', body: 'A buddy who shares the home language, where possible, especially for new arrivals.' },
            { title: 'Adapted texts', body: 'Same content with simpler sentences, glossaries and headings, alongside the original.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Cummins, J. (1979). Cognitive/academic language proficiency, linguistic interdependence, the optimum age question and some other matters. *Working Papers on Bilingualism, 19*, 121–129.',
    'Krashen, S. D. (1982). *Principles and practice in second language acquisition*. Pergamon.',
    'Echevarría, J., Vogt, M., & Short, D. J. (2017). *Making content comprehensible for English learners: The SIOP model* (5th ed.). Pearson.',
    'García, O., & Wei, L. (2014). *Translanguaging: Language, bilingualism and education*. Palgrave Macmillan.',
  ],
  related: ['teaching/differentiation/scaffolding', 'teaching/differentiation/udl', 'teaching/special-education/needs/speech-language'],
}

export default guide
