import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Punctuation tells readers how to read your sentences: where to pause, what belongs together and what is being added or contrasted. A handful of rules covers most of what essays need.',
  nutshell: [
    '**Comma splice**: two full sentences joined by only a comma. Fix with a full stop, a semicolon or a joining word.',
    '**Semicolon**: joins two closely related full sentences.',
    '**Colon**: introduces something that explains, lists or completes what came before.',
    '**Apostrophes**: for missing letters (it’s = it is) and possession (the author’s view). Never for simple plurals.',
  ],
  sections: [
    {
      id: 'commas',
      title: 'Commas',
      blocks: [
        {
          t: 'table',
          head: ['Use', 'Example'],
          rows: [
            ['After an introductory phrase', 'After the war, prices rose sharply.'],
            ['Around extra information', 'The study, which lasted two years, involved 400 pupils.'],
            ['Between items in a list', 'The causes were militarism, alliances and nationalism.'],
            ['Before a joining word linking two sentences', 'The results were clear, but the sample was small.'],
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'The comma splice',
          text: '✕ *The experiment failed, the equipment was faulty.* Two full sentences cannot be joined by a comma alone. ✓ *The experiment failed. The equipment was faulty.* ✓ *The experiment failed; the equipment was faulty.* ✓ *The experiment failed because the equipment was faulty.*',
        },
      ],
    },
    {
      id: 'semi-colon',
      title: 'Semicolons and colons',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Semicolon ;', body: 'Joins two full sentences that are closely related: *Some historians blame the treaty; others blame the Depression.* Also separates items in a complex list that already contains commas.' },
            { title: 'Colon :', body: 'What comes before must be a full sentence. What follows explains, lists or completes it: *The results were striking: attendance rose by 20%.* / *Three factors mattered: cost, time and access.*' },
          ],
        },
        {
          t: 'p',
          text: 'Test for a semicolon: could you use a full stop instead? If yes, a semicolon works. Test for a colon: could you say "namely" or "that is" instead? If yes, a colon works.',
        },
      ],
    },
    {
      id: 'apostrophes',
      title: 'Apostrophes',
      blocks: [
        {
          t: 'table',
          head: ['Rule', 'Examples'],
          rows: [
            ['Missing letters', 'it’s (it is), don’t (do not), they’re (they are). Avoid contractions in formal essays.'],
            ['Possession, one owner', 'the student’s essay, the author’s argument, James’s book (or James’)'],
            ['Possession, plural ending in s', 'the students’ essays, the authors’ arguments'],
            ['Possession, plural not ending in s', 'the children’s books, the women’s movement'],
            ['Never for plurals', '✕ apple’s for sale → ✓ apples; ✕ the 1990’s → ✓ the 1990s'],
            ['Its vs it’s', '*its* = belonging to it (no apostrophe); *it’s* = it is'],
          ],
        },
      ],
    },
    {
      id: 'dashes',
      title: 'Dashes, brackets and hyphens',
      blocks: [
        {
          t: 'list',
          items: [
            '**Brackets** ( ) add extra information quietly: *The treaty (signed in 1919) was harsh.*',
            '**Dashes** add it with emphasis. Use sparingly in formal essays; commas or brackets are often better.',
            '**Hyphens** join words into one idea: *well-known author*, *long-term effects*, *twenty-one*. No hyphen when the phrase comes after the noun: *the effects were long term*.',
          ],
        },
      ],
    },
  ],
  sources: ['Truss, L. (2003). *Eats, shoots & leaves*. Profile Books.', 'Purdue Online Writing Lab. *Punctuation*. owl.purdue.edu'],
  related: ['writing/style/editing', 'writing/style/clarity'],
}

export default guide
