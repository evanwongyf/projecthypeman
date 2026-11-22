import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'What you remember depends heavily on what you did with information when you first met it. Repeating words over and over does little; thinking about their meaning, linking them to what you know, generating answers yourself and pairing words with images all make memories stronger and easier to find later.',
  nutshell: [
    '**Levels of processing** (Craik and Lockhart, 1972): deeper, meaning-based processing produces better memory than shallow processing of appearance or sound.',
    '**Elaboration**: asking how and why, and connecting to prior knowledge, creates more retrieval routes.',
    'The **generation effect**: information you produce yourself is remembered better than information you read (Slamecka and Graf, 1978).',
    '**Dual coding**: words plus a relevant image give two codes for the same idea.',
  ],
  sections: [
    {
      id: 'levels',
      title: 'Levels of processing',
      blocks: [
        { t: 'p', text: 'In Craik and Tulving’s 1975 experiments, people answered questions about words without knowing they would be tested. Some questions were about appearance (“Is the word in capital letters?”), some about sound (“Does it rhyme with weight?”) and some about meaning (“Does it fit the sentence ‘He met a ___ in the street’?”). On a surprise recognition test, meaning-based questions led to by far the best memory, with appearance questions worst.' },
      ],
    },
    {
      id: 'methods',
      title: 'Encoding methods that work',
      blocks: [
        { t: 'table', head: ['Method', 'How', 'Example'], rows: [
          ['Elaborative interrogation', 'Ask “Why is this true?” and answer it', '“Why do hot-air balloons rise?” → hot air is less dense'],
          ['Self-explanation', 'Explain each step of a worked example to yourself', '“I multiply here because…”'],
          ['Generation', 'Produce the answer before seeing it', 'Try the problem before reading the solution'],
          ['Concrete examples', 'Link the idea to specific cases', 'Opportunity cost: choosing study over a party'],
          ['Dual coding', 'Draw or find a diagram for the idea', 'Sketch the water cycle while reading about it'],
          ['Organisation', 'Group and structure information', 'A concept map or table of similarities and differences'],
          ['Self-reference', 'Relate it to your own life', '“When have I seen inertia?”'],
        ] },
        { t: 'callout', tone: 'myth', title: 'Highlighting and rereading', text: 'Dunlosky and colleagues’ 2013 review rated highlighting and rereading as low-utility: they feel productive but produce little lasting learning, largely because they are shallow.' },
      ],
    },
  ],
  sources: [
    'Craik, F. I. M., & Lockhart, R. S. (1972). Levels of processing. Journal of Verbal Learning and Verbal Behavior, 11(6), 671–684.',
    'Craik, F. I. M., & Tulving, E. (1975). Depth of processing and the retention of words in episodic memory. Journal of Experimental Psychology: General, 104(3), 268–294.',
    'Slamecka, N. J., & Graf, P. (1978). The generation effect. Journal of Experimental Psychology: Human Learning and Memory, 4(6), 592–604.',
    'Dunlosky, J. et al. (2013). Improving students’ learning with effective learning techniques. Psychological Science in the Public Interest, 14(1), 4–58.',
  ],
  related: ['teaching/techniques/learning-strategies/elaboration', 'teaching/techniques/learning-strategies/dual-coding', 'attention/retention/retrieval-practice'],
}

export default guide
