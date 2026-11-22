import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'An argument is a claim supported by reasons and evidence. Strong arguments also show why the evidence supports the claim, admit their limits, and deal fairly with the best objections. Stephen Toulmin’s model is a useful way to see all the parts.',
  nutshell: [
    '**Claim**: what you want the reader to accept.',
    '**Grounds**: the evidence. **Warrant**: why that evidence supports the claim.',
    '**Qualifier**: how certain you are. **Rebuttal**: the objections and your response.',
    'Engaging with counterarguments makes your case stronger, not weaker.',
  ],
  sections: [
    {
      id: 'toulmin',
      title: 'The Toulmin model',
      lead: 'Stephen Toulmin, The Uses of Argument (1958).',
      blocks: [
        {
          t: 'terms',
          items: [
            { term: 'Claim', def: 'The conclusion you are arguing for. *Schools should start later for teenagers.*' },
            { term: 'Grounds', def: 'Evidence and facts that support it. *Studies of schools that moved start times later found students slept more and attendance improved.*' },
            { term: 'Warrant', def: 'The link: why the grounds support the claim, often left unstated. *More sleep and better attendance are good for learning.*' },
            { term: 'Backing', def: 'Support for the warrant. *Research links sleep to memory and attention.*' },
            { term: 'Qualifier', def: 'How strong the claim is. *In most cases… probably… for secondary schools…*' },
            { term: 'Rebuttal', def: 'Exceptions and objections. *Later starts can clash with parents’ work and after-school jobs.*' },
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Check your warrants',
          text: 'Many weak arguments have solid evidence but a missing or shaky warrant. Ask: *why* does this evidence prove my point? If you cannot say, your reader will not see it either.',
        },
      ],
    },
    {
      id: 'counter',
      title: 'Handling counterarguments',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'State it fairly', body: 'Present the strongest version of the other side, not a weak version you can easily knock down (that would be a [straw man](@thinking/fallacies)).' },
            { title: 'Respond', body: 'Show why it is wrong, weaker than your point, or can be accommodated.' },
            { title: 'Concede if needed', body: 'Admit what is true in it. This shows judgement and makes you more credible.' },
          ],
        },
        {
          t: 'table',
          head: ['Move', 'Example phrase'],
          rows: [
            ['Introduce', 'Critics argue that… / It could be objected that…'],
            ['Concede', 'This is a fair point, and… / Admittedly,…'],
            ['Rebut', 'However, this overlooks… / Yet the evidence suggests…'],
            ['Accommodate', 'Even so, this strengthens the case for… / This can be addressed by…'],
          ],
        },
      ],
    },
    {
      id: 'evidence',
      title: 'Using evidence well',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Choose the most relevant, reliable evidence, not all of it.',
            'Explain every piece of evidence: what it shows and why it matters.',
            'Use different kinds: data, examples, expert views, quotations.',
            'Match your certainty to your evidence ("suggests", not "proves").',
          ],
          dont: [
            'Drop quotes in without explanation.',
            'Rely on one example to prove a general claim.',
            'Ignore evidence that does not fit.',
            'Confuse correlation with causation (see [reading numbers](@thinking/numbers)).',
          ],
        },
      ],
    },
  ],
  sources: [
    'Toulmin, S. E. (2003). *The uses of argument* (updated ed.). Cambridge University Press. (Original work published 1958)',
    'Graff, G., & Birkenstein, C. (2021). *They say / I say: The moves that matter in academic writing* (5th ed.). W. W. Norton.',
  ],
  related: ['thinking/arguments', 'thinking/fallacies', 'writing/essentials/paragraphs'],
}

export default guide
