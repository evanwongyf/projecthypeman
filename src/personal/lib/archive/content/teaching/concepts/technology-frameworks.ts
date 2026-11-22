import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Every few years a new technology promises to transform education: radio, film, television, computers, interactive whiteboards, tablets, and now artificial intelligence. The evidence has been consistently more modest than the promises. Two frameworks help teachers think more clearly about it: SAMR, which asks how much a technology changes a task, and TPACK, which asks how technology, content and pedagogy fit together. This page explains both, summarises the evidence on devices and learning, and offers a simple test for choosing when technology is worth using.',
  nutshell: [
    '**SAMR** (Puentedura): **Substitution, Augmentation, Modification, Redefinition**: a ladder of how much technology changes a task. It is a **reflection tool**, not proof that higher is better.',
    '**TPACK** (Mishra and Koehler, 2006): good technology use sits where **technology, pedagogy and content knowledge** overlap.',
    'Large studies (OECD, 2015) find that **heavy computer use in school is not linked to better results**; **moderate, purposeful** use does better than none or too much.',
    '**Distraction** is the main risk: phones and laptops in class are linked to lower attention and achievement.',
    'Choose technology by **what it does for learning**: does it help explain, practise, give feedback or widen access better than the alternative?',
  ],
  sections: [
    {
      id: 'samr',
      title: 'SAMR',
      blocks: [
        {
          t: 'levels',
          caption: 'Ruben Puentedura’s SAMR model, from lowest to highest. The lower two “enhance” a task; the upper two “transform” it.',
          items: [
            { name: 'Substitution', body: 'Technology replaces a tool with no functional change. Typing an essay instead of writing it by hand.' },
            { name: 'Augmentation', body: 'Technology replaces a tool with some functional improvement. A word-processor with spell check, comments and word count.' },
            { name: 'Modification', body: 'Technology allows significant redesign of the task. Students write an essay collaboratively, receive comments from peers and revise online.' },
            { name: 'Redefinition', body: 'Technology allows tasks that were previously inconceivable. Students collect live data from their own sensors, analyse it, and share it with a school overseas.' },
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Higher is not always better', text: 'SAMR is often misused as a ladder to climb. A simple, well-chosen substitution can be just right (a digital quiz with immediate feedback). The test is whether learning improves, not how high on the ladder a task sits.' },
      ],
    },
    {
      id: 'tpack',
      title: 'TPACK',
      blocks: [
        { t: 'p', text: 'Punya Mishra and Matthew Koehler extended Shulman’s pedagogical content knowledge to include technology. Their model has three kinds of knowledge and their overlaps: content (C), pedagogy (P) and technology (T). Effective teaching with technology needs the combination: knowing what to teach, how to teach it and how technology can serve both.' },
        {
          t: 'table',
          head: ['Knowledge', 'Question', 'Example'],
          rows: [
            ['Content (CK)', 'What am I teaching?', 'Why the seasons happen'],
            ['Pedagogy (PK)', 'How do I teach and assess?', 'Predict, observe, explain; check misconceptions'],
            ['Technology (TK)', 'What can the tool do?', 'A simulation of the Earth’s orbit'],
            ['Pedagogical content (PCK)', 'How is this topic best taught?', 'Use a lamp and globe to confront the misconception'],
            ['Technological content (TCK)', 'How does technology shape the content?', 'Simulations let students see what cannot be seen'],
            ['Technological pedagogical (TPK)', 'How does technology change teaching?', 'Quizzes give instant feedback to every student'],
            ['TPACK (all three)', 'How should I use this technology to teach this topic to these students?', 'Students run the orbit simulation, predict the effect of tilt, and explain it to a partner'],
          ],
        },
      ],
    },
    {
      id: 'evidence',
      title: 'What the evidence says',
      blocks: [
        {
          t: 'table',
          head: ['Finding', 'Source'],
          rows: [
            ['Countries that invested heavily in computers in schools saw no appreciable improvement in reading, mathematics or science; students who use computers moderately do slightly better than those who rarely use them, but heavy users do worse', 'OECD (2015), Students, Computers and Learning'],
            ['Impact of digital technology is, on average, moderately positive (about 4 months’ additional progress), with very large variation: depends on how it is used', 'Education Endowment Foundation Toolkit'],
            ['Technology works best when it supports a clear teaching purpose: practice with feedback, adaptive tutoring, access to resources', 'EEF (2019) guidance on using digital technology'],
            ['Laptops and phones in lectures are associated with lower attention and lower grades for the user and for those nearby', 'Sana, Weston and Cepeda (2013); Ward and colleagues (2017) on the presence of a phone'],
            ['Handwriting notes can lead to better conceptual understanding than typing, though later studies show smaller effects', 'Mueller and Oppenheimer (2014); Morehead and colleagues (2019)'],
            ['One-to-one device programmes have mixed results, positive for writing and for engagement when well supported', 'Zheng and colleagues (2016) meta-analysis'],
          ],
          caption: 'The evidence suggests that how technology is used matters far more than whether it is used.',
        },
        { t: 'callout', tone: 'note', title: 'In Singapore', text: 'MOE’s National Digital Literacy Programme gave secondary students personal learning devices and promoted digital literacy, while MOE guidance also limits phone use in lessons. The line between purposeful use and distraction is a school-by-school decision.' },
      ],
    },
    {
      id: 'choose',
      title: 'A simple test',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Start with the learning goal', body: 'What do students need to understand or be able to do?' },
            { title: 'Ask what the best way to teach it is', body: 'Without technology, what would I do?' },
            { title: 'Ask what technology adds', body: 'Does it explain better, give practice with feedback, give access to something otherwise out of reach, or save time for the things that matter?' },
            { title: 'Check the costs', body: 'Set-up time, distraction, equity of access, privacy and data protection.' },
            { title: 'Try it, and check what students learned', body: 'Use a quick assessment, not only how engaged they looked.' },
          ],
        },
        {
          t: 'dodont',
          do: ['Use technology for retrieval practice, feedback, modelling and access.', 'Teach students how to use devices for learning.', 'Plan for off-task temptations, with routines and clear expectations.', 'Check that every student can take part.'],
          dont: ['Do not use technology because it is available or fashionable.', 'Do not confuse engagement with learning.', 'Do not let devices replace discussion and thinking.', 'Do not share students’ personal data without checking the privacy rules.'],
        },
        { t: 'links', items: [{ path: 'teaching/guides/contexts/ai', note: 'AI in the classroom' }, { path: 'teaching/classroom-management/space-seating-and-technology', note: 'Phones and devices' }, { path: 'teaching/concepts/pedagogical-content-knowledge', note: 'Pedagogical content knowledge' }] },
      ],
    },
  ],
  sources: [
    'Puentedura, R. R. (2006). Transformation, Technology, and Education. (SAMR.)',
    'Mishra, P., and Koehler, M. J. (2006). Technological pedagogical content knowledge: a framework for teacher knowledge. Teachers College Record.',
    'OECD (2015). Students, Computers and Learning: Making the Connection.',
    'Education Endowment Foundation (2019). Using Digital Technology to Improve Learning.',
    'Ward, A. F., et al. (2017). Brain drain: the mere presence of one’s own smartphone reduces available cognitive capacity. Journal of the Association for Consumer Research.',
  ],
  related: ['teaching/concepts/pedagogical-content-knowledge', 'teaching/guides/contexts/ai', 'teaching/classroom-management/space-seating-and-technology'],
}

export default guide
