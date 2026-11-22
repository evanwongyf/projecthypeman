import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Academic writing should be formal, but formal does not mean complicated. The best academic prose is clear: precise words, direct sentences and claims that are exactly as strong as the evidence allows.',
  nutshell: [
    'Prefer short, direct sentences. One main idea per sentence.',
    'Choose precise words over impressive ones.',
    'Cut filler: "in order to" → "to"; "due to the fact that" → "because".',
    '**Hedge** claims to match your evidence: "suggests", "may", "in most cases".',
    'Use active voice unless there is a reason not to.',
  ],
  sections: [
    {
      id: 'concise',
      title: 'Be concise',
      blocks: [
        {
          t: 'table',
          head: ['Wordy', 'Concise'],
          rows: [
            ['in order to', 'to'],
            ['due to the fact that', 'because'],
            ['at this point in time', 'now'],
            ['a large number of', 'many'],
            ['it is important to note that', '(delete, and just say it)'],
            ['has the ability to', 'can'],
            ['in the event that', 'if'],
            ['make a decision', 'decide'],
            ['conduct an investigation into', 'investigate'],
          ],
        },
        {
          t: 'example',
          title: 'Rewriting a sentence',
          lines: [
            { label: 'Before', text: 'It is important to note that, due to the fact that a large number of students have a tendency to engage in the process of rereading, they may not be making the most effective use of their study time.' },
            { label: 'After', text: 'Because many students reread, they may not use their study time well.' },
          ],
        },
      ],
    },
    {
      id: 'precise',
      title: 'Be precise',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Use specific words: "increased by 12%" rather than "went up a lot".',
            'Use technical terms correctly, and define them the first time.',
            'Replace vague words: "thing", "stuff", "very", "a lot", "good", "bad".',
            'Make sure "this" and "it" clearly refer to something.',
          ],
          dont: [
            'Use long words to sound clever ("utilise" for "use").',
            'Use contractions (don’t, can’t) in formal essays.',
            'Use slang or clichés ("at the end of the day").',
            'Pile up nouns ("student study habit improvement strategies").',
          ],
        },
      ],
    },
    {
      id: 'hedging',
      title: 'Hedging: claim what you can prove',
      blocks: [
        {
          t: 'p',
          text: 'Academic writers match the strength of their claims to the strength of their evidence. Overclaiming ("this proves") invites criticism; underclaiming everything makes you sound unsure. Hedge where evidence is limited, and be direct where it is strong.',
        },
        {
          t: 'table',
          head: ['Too strong', 'Hedged'],
          rows: [
            ['This proves that sleep improves memory.', 'This suggests that sleep improves memory.'],
            ['Social media causes depression.', 'Heavy social media use is associated with higher rates of depression in some studies.'],
            ['Everyone agrees that…', 'Most researchers agree that…'],
            ['The policy failed.', 'The policy appears to have had little effect on…'],
          ],
        },
      ],
    },
    {
      id: 'voice',
      title: 'Active and passive voice',
      blocks: [
        {
          t: 'p',
          text: 'In the **active** voice the doer comes first: "The researchers tested 200 students." In the **passive**, the action comes first: "200 students were tested." Active is usually clearer and shorter. Passive is useful when the doer is unknown or unimportant, which is why it is common in science methods sections.',
        },
        {
          t: 'callout',
          tone: 'note',
          title: '"I" in academic writing',
          text: 'Many fields now accept "I" or "we" ("I argue that…"), especially in humanities and social sciences. Others prefer impersonal forms. Check your subject’s conventions or ask your teacher.',
        },
      ],
    },
  ],
  sources: [
    'Williams, J. M., & Bizup, J. (2016). *Style: Lessons in clarity and grace* (12th ed.). Pearson.',
    'Hyland, K. (1998). *Hedging in scientific research articles*. John Benjamins.',
  ],
  related: ['writing/style/editing', 'writing/style/punctuation', 'writing/essentials/argument'],
}

export default guide
