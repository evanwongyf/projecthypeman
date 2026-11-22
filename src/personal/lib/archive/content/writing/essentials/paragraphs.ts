import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A good body paragraph makes one point and proves it. It opens with a topic sentence that states the point, supports it with evidence, explains how the evidence proves it, and links back to the argument. PEEL is a simple way to remember this.',
  nutshell: [
    '**P**oint: a topic sentence stating the paragraph’s claim.',
    '**E**vidence: a quote, fact, example or data.',
    '**E**xplain: how the evidence supports the point. This is where most marks are.',
    '**L**ink: connect back to the thesis or to the next paragraph.',
    'One main idea per paragraph.',
  ],
  sections: [
    {
      id: 'peel',
      title: 'PEEL in action',
      blocks: [
        {
          t: 'example',
          title: 'A paragraph on Macbeth',
          lines: [
            { label: 'Point', text: 'Shakespeare suggests that Macbeth’s ambition exists before the witches speak to him.' },
            { label: 'Evidence', text: 'When the witches predict he will be king, Banquo notices that Macbeth starts and seems to "fear / Things that do sound so fair".' },
            { label: 'Explain', text: 'Why would a loyal subject be startled by good news, unless he had already imagined it? His fear suggests the prophecy touches a thought he has already had and feels guilty about. The witches do not plant the idea; they name it.' },
            { label: 'Link', text: 'This supports the view that Macbeth’s downfall comes from within, which is reinforced by his own soliloquies.' },
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Explain more than you quote',
          text: 'A common weakness is a long quote followed by one sentence of explanation. Aim for the explanation to be at least as long as the evidence. Zoom in on individual words, and explain the effect.',
        },
      ],
    },
    {
      id: 'topic-sentences',
      title: 'Topic sentences',
      blocks: [
        {
          t: 'dodont',
          do: [
            'State the paragraph’s claim, linked to the question.',
            'Use the question’s key words to show relevance.',
            'Make it an argument, not a description.',
          ],
          dont: [
            'Start with a quote or a fact.',
            'Write "In this paragraph I will…".',
            'Describe what happens ("In Act 1, Macbeth meets the witches.").',
          ],
        },
        {
          t: 'p',
          text: 'Test: read only your topic sentences in order. They should form a summary of your whole argument.',
        },
      ],
    },
    {
      id: 'linking',
      title: 'Linking ideas',
      blocks: [
        {
          t: 'table',
          head: ['Purpose', 'Linking words'],
          rows: [
            ['Adding', 'Furthermore, Moreover, In addition, Similarly'],
            ['Contrasting', 'However, In contrast, On the other hand, Nevertheless'],
            ['Cause and effect', 'Therefore, Consequently, As a result, This led to'],
            ['Example', 'For example, For instance, This is shown by'],
            ['Emphasis', 'Crucially, Above all, Most importantly'],
            ['Concluding', 'Overall, Ultimately, Taken together'],
          ],
        },
      ],
    },
    {
      id: 'variants',
      title: 'Variations',
      blocks: [
        {
          t: 'p',
          text: 'You will see variants like PEE, PEA (Point, Evidence, Analysis), PETAL (Point, Evidence, Technique, Analysis, Link) or TEEL (Topic sentence, Explain, Evidence, Link). They all share the same core: a clear point, backed by evidence, with explanation. As you get more confident, go beyond the formula; strong paragraphs often weave several pieces of evidence together and consider alternative interpretations.',
        },
      ],
    },
  ],
  related: ['writing/essentials/thesis', 'writing/essentials/argument', 'writing/style/clarity'],
}

export default guide
