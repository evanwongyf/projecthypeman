import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'Knowing a little about how memory works helps you study smarter. The short version: you remember what you pay attention to and think about, and you keep what you practise pulling back out.',
  nutshell: [
    '**Attention** is the gate. What you do not notice, you cannot remember.',
    '**Working memory** is small and brief: a few items for a few seconds. Do not overload it.',
    '**Long-term memory** is huge. Things get in by being processed for meaning, and connected to what you know.',
    '**Retrieval**, pulling things back out, is what makes memories strong and easy to find.',
  ],
  sections: [
    {
      id: 'journey',
      title: 'The journey of a memory',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Attention', body: 'Your senses take in far more than you can process. Only what you focus on goes further. Studying with your phone buzzing means much of what you "read" never gets in.' },
            { title: 'Working memory', body: 'Your mental workspace. It holds only about four new chunks at once, for seconds. It is why long instructions are hard to follow and why cramming in lots of new terms at once fails.' },
            { title: 'Encoding into long-term memory', body: 'Information is stored when you process it: think about what it means, connect it to what you know, explain it, picture it. Simply repeating it is weak.' },
            { title: 'Storage', body: 'Long-term memory is organised into networks of connected knowledge. The more connections a fact has, the more ways you can find it.' },
            { title: 'Retrieval', body: 'Getting it back out. Every successful retrieval strengthens the memory and the route to it.' },
          ],
        },
      ],
    },
    {
      id: 'lessons',
      title: 'What this means for studying',
      blocks: [
        {
          t: 'table',
          head: ['Principle', 'What to do'],
          rows: [
            ['Attention is limited', 'Study without distractions; one thing at a time. See [focus](@habits/focus).'],
            ['Working memory is small', 'Break topics into small chunks; master the basics before the complex parts.'],
            ['Meaning beats repetition', 'Ask "why?" and "how?"; connect to what you know; use examples.'],
            ['Knowledge builds on knowledge', 'The more you know about a subject, the easier new learning in it becomes.'],
            ['Retrieval strengthens', 'Test yourself instead of rereading. See [active recall](@memory/active-recall).'],
            ['Forgetting is normal', 'Plan reviews before you forget completely. See [why we forget](@memory/forgetting).'],
          ],
        },
        {
          t: 'quote',
          text: 'Memory is the residue of thought.',
          by: 'Daniel Willingham',
        },
        {
          t: 'p',
          text: 'In other words, you remember what you **think about**. If you spend a study session thinking about colours for your notes, you will remember the colours. For the full picture, see [cognitivism and memory](@teaching/theories/cognitivism).',
        },
      ],
    },
  ],
  sources: [
    'Willingham, D. T. (2009). *Why don’t students like school?* Jossey-Bass.',
    'Brown, P. C., Roediger, H. L., & McDaniel, M. A. (2014). *Make it stick: The science of successful learning*. Harvard University Press.',
  ],
  related: ['memory/forgetting', 'memory/active-recall', 'teaching/theories/cognitivism'],
}

export default guide
