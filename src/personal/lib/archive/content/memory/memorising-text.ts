import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'Sometimes you need exact words: quotations for an English exam, lines in a play, a definition, a formula. Word-for-word memory needs slightly different techniques from remembering ideas, but the same principles apply: understand it, recall it, space it out.',
  nutshell: [
    '**Understand it first.** Know what every word means and why it matters.',
    '**Chunk it**: learn a line or phrase at a time, then join chunks.',
    '**First-letter method**: write only the first letter of each word and recite from that.',
    '**Say it aloud**: speaking helps memory more than silent reading.',
    'Test yourself on it across several days.',
  ],
  sections: [
    {
      id: 'quotes',
      title: 'Quotes and passages',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Understand it', body: 'What does it mean? Why is it important? Which words matter most? Meaning gives you a structure to hang the words on.' },
            { title: 'Chunk it', body: 'Break it into short phrases. Learn the first chunk, then the second, then both together, and so on.' },
            { title: 'Use first letters', body: 'Write the first letter of each word, with punctuation. Recite the full text from the letters. Then try without.' },
            { title: 'Say it aloud', body: 'Reading aloud improves memory compared with reading silently (the **production effect**, MacLeod et al., 2010).' },
            { title: 'Write it from memory', body: 'Cover it and write it out. Check every word.' },
            { title: 'Space it', body: 'Recite it tomorrow, in three days, in a week.' },
          ],
        },
        {
          t: 'example',
          title: 'First-letter method',
          lines: [
            { label: 'Quote', text: '"All the world’s a stage, and all the men and women merely players."' },
            { label: 'Letters', text: 'A t w a s, a a t m a w m p.' },
            { label: 'Practice', text: 'Recite the whole line using only the letters as prompts. When it is easy, drop the letters.' },
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Choose fewer, better quotes',
          text: 'For literature exams, learn a small number of short, flexible quotes that can support several themes. A few words you know perfectly beat a long passage you half-remember.',
        },
      ],
    },
    {
      id: 'formulas',
      title: 'Formulas and equations',
      blocks: [
        {
          t: 'list',
          items: [
            '**Understand each symbol** and its units. Know what the formula is for.',
            '**Derive it** if you can; a formula you can rebuild is hard to forget.',
            '**Use it**: solve problems with it, rather than just rereading it.',
            '**Write it from memory** at the start of each study session.',
            '**Check with units**: if the units do not balance, the formula is wrong.',
            '**Group related formulas** and learn their differences, to avoid mixing them up.',
          ],
        },
      ],
    },
    {
      id: 'lines',
      title: 'Lines and speeches',
      blocks: [
        {
          t: 'list',
          items: [
            'Learn the meaning and intention of each line, not only the words.',
            'Learn your cue lines too, so you know when to speak.',
            'Practise while moving through the actions or gestures that go with the words.',
            'Record the other parts and rehearse with the recording.',
            'For speeches, a [memory palace](@memory/memory-palace) for the outline, plus key phrases, often works better than word-for-word memorisation.',
          ],
        },
      ],
    },
  ],
  sources: [
    'MacLeod, C. M., Gopie, N., Hourihan, K. L., Neary, K. R., & Ozubko, J. D. (2010). The production effect: Delineation of a phenomenon. *Journal of Experimental Psychology: Learning, Memory, and Cognition, 36*(3), 671–685.',
  ],
  related: ['memory/memory-palace', 'memory/active-recall', 'teaching/techniques/learning-strategies/mnemonics'],
}

export default guide
