import type { Guide } from '../../../guide'

const guide: Guide = {
  intro: 'Pick your type and someone else’s. The explorer reads the pair from type theory: the overall pattern, how your dominant functions meet, shared functions and blind spots, temperaments, and a list of where you are likely to click, where you are likely to clash, and what to try.',
  sections: [
    {
      id: 'explorer',
      title: 'Compare two types',
      blocks: [
        { t: 'mbti', viz: 'pair', a: 'INFJ', b: 'ENTP' },
        { t: 'callout', tone: 'tip', title: 'Using it well', text: 'Read it together and ask each other: “Is this true for us?” The useful part is the conversation. Pay most attention to the “Making it work” lines, they are habits, and habits beat letters.' },
      ],
    },
  ],
  related: ['personality/compatibility/how-it-works', 'personality/compatibility/all-pairs'],
}

export default guide
