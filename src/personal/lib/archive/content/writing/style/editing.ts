import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Revising and proofreading are different jobs. **Revising** improves the ideas, argument and structure. **Proofreading** fixes errors in sentences, spelling and formatting. Do them in that order; there is no point polishing a paragraph you are about to delete.',
  nutshell: [
    'Take a break before revising; fresh eyes see problems you cannot see straight after writing.',
    'Revise top-down: argument, then structure, then paragraphs, then sentences.',
    'Proofread slowly, on paper or aloud; spellcheck misses real words used wrongly.',
    'Know your own common errors and hunt for them.',
  ],
  sections: [
    {
      id: 'revise',
      title: 'Revising: the big picture',
      blocks: [
        {
          t: 'checklist',
          items: [
            'The essay answers the question that was set, and every part of it.',
            'The thesis is clear and matches what the essay actually argues.',
            'Reading only the topic sentences gives a clear summary of the argument.',
            'Each paragraph has one main point that supports the thesis.',
            'Paragraphs are in a logical order, with links between them.',
            'Every piece of evidence is explained, not just quoted.',
            'Counterarguments are acknowledged and answered.',
            'Nothing is irrelevant or repeated.',
            'The conclusion answers "so what?" without adding new evidence.',
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Reverse outline',
          text: 'After drafting, write a one-line summary of each paragraph in the margin. Read the list. Gaps, repetition and paragraphs in the wrong place become obvious.',
        },
      ],
    },
    {
      id: 'proofread',
      title: 'Proofreading: the details',
      blocks: [
        {
          t: 'checklist',
          items: [
            'Sentences are complete, and not run together with commas (comma splices).',
            'Subjects and verbs agree ("the results show", "the data suggest" or "suggests" consistently).',
            'Tenses are consistent.',
            'Commonly confused words are right: their/there/they’re, its/it’s, affect/effect, then/than.',
            'Apostrophes are correct.',
            'Names, dates, numbers and quotations are accurate.',
            'Every in-text citation has a reference, and vice versa, in the right style.',
            'Formatting matches the instructions: font, spacing, headings, word count.',
          ],
        },
        {
          t: 'list',
          items: [
            '**Read aloud**, or use text-to-speech; your ear catches what your eye skips.',
            '**Change the format**: print it, or change the font, so it looks unfamiliar.',
            '**Read backwards**, sentence by sentence, to focus on each sentence alone.',
            '**Do one pass per error type**: one for apostrophes, one for references.',
            '**Use tools, then check them**: spell and grammar checkers help but miss plenty and sometimes suggest wrong changes.',
          ],
        },
      ],
    },
    {
      id: 'feedback',
      title: 'Getting feedback',
      blocks: [
        {
          t: 'p',
          text: 'Ask someone to read your draft with a specific question: "Is my argument clear?" or "Where did you get lost?" Feedback on specific points is more useful than "Is it good?". See [self and peer assessment](@teaching/assessment/self-peer).',
        },
      ],
    },
  ],
  related: ['writing/style/clarity', 'writing/style/punctuation', 'writing/essentials/process'],
}

export default guide
