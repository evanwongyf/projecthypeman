import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Put the signs together. Watch short sentences signed in ASL word order, then sign them yourself and make new ones by swapping signs.',
  nutshell: [
    'The phrase player signs each sentence sign by sign and lights up the gloss as it goes.',
    'ASL order is often different from English: topic or time first, question words last.',
    'Make the signs into flashcards with the button at the end of this page, and review them over the coming days.',
  ],
  sections: [
    {
      id: 'phrases',
      title: 'Phrases',
      blocks: [
        { t: 'sign-tool', tool: 'settings' },
        { t: 'sign-tool', tool: 'phrases' },
        { t: 'p', text: 'Pause after each one and sign it yourself. Then try making new sentences by swapping one sign: PLEASE HELP ME → PLEASE WAIT.' },
      ],
    },
    {
      id: 'review',
      title: 'Keep them',
      blocks: [
        {
          t: 'p',
          text: 'Signs are vocabulary, so the same methods work: test yourself, space out your reviews, and use the signs in real conversations. See [learning vocabulary](@memory/vocabulary) and [spaced repetition](@memory/spaced-repetition).',
        },
        { t: 'signs', words: ['practice', 'again', 'sign-language'] },
      ],
    },
  ],
  sources: ['Roediger, H. L., & Karpicke, J. D. (2006). Test-enhanced learning. *Psychological Science*, 17(3), 249–255.'],
  related: ['memory/spaced-repetition', 'memory/vocabulary', 'sign-language/learning-plan'],
}

export default guide
