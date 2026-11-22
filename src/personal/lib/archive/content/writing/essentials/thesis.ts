import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A thesis statement is the one or two sentences that state your main argument, usually at the end of your introduction. It answers the question, tells the reader what you will prove, and gives every paragraph something to support.',
  nutshell: [
    'A thesis is a **claim**, not a fact or a topic.',
    'It should be **specific** and **arguable**: someone could reasonably disagree.',
    'It often previews your main reasons.',
    'Draft a working thesis early, and refine it after you write.',
  ],
  sections: [
    {
      id: 'weak-strong',
      title: 'From weak to strong',
      blocks: [
        {
          t: 'table',
          head: ['Weak', 'Why', 'Stronger'],
          rows: [
            ['This essay is about social media and teenagers.', 'A topic, not a claim.', 'Social media harms teenagers’ sleep more than their mood, because evening use displaces rest.'],
            ['World War One started in 1914.', 'A fact; nothing to argue.', 'The alliance system turned a regional crisis into a world war by committing the great powers to fight.'],
            ['Macbeth is an interesting character.', 'Vague and hard to disagree with.', 'Shakespeare presents Macbeth as destroyed less by fate than by his own ambition, which the witches only awaken.'],
            ['There are good and bad sides to nuclear power.', 'Sits on the fence.', 'Despite its risks, nuclear power is the most practical way for densely populated countries to cut emissions quickly.'],
          ],
        },
      ],
    },
    {
      id: 'formula',
      title: 'A useful pattern',
      blocks: [
        {
          t: 'example',
          title: 'Claim + because + reasons',
          lines: [
            { label: 'Pattern', text: '[Answer to the question] because [reason 1], [reason 2] and [reason 3].' },
            { label: 'Example', text: 'The Treaty of Versailles was a major but not decisive cause of the Second World War, because it created resentment in Germany, but the Depression and the failure of appeasement turned that resentment into war.' },
            { label: 'Essay map', text: 'Paragraph 1: resentment from Versailles. Paragraph 2: the Depression. Paragraph 3: appeasement. Conclusion: weighing them.' },
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          text: 'For "to what extent" questions, your thesis should state the extent: "largely", "only partly", "to a limited extent", and why.',
        },
      ],
    },
    {
      id: 'test',
      title: 'Test your thesis',
      blocks: [
        {
          t: 'checklist',
          items: [
            'It directly answers the question.',
            'It makes a claim someone could disagree with.',
            'It is specific: it names the key ideas, not "various factors".',
            'It is one or two sentences.',
            'Every paragraph in my plan supports it.',
            'After drafting, I checked it still matches what I actually argued.',
          ],
        },
      ],
    },
  ],
  related: ['writing/essentials/the-question', 'writing/essentials/paragraphs', 'writing/essentials/intros-conclusions'],
}

export default guide
