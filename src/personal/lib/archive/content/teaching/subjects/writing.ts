import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Writing is one of the hardest things we ask learners to do: they must juggle ideas, organisation, sentences, spelling and handwriting all at once. Effective writing instruction makes each part explicit and practised, so learners have attention left for what they want to say.',
  nutshell: [
    '**Transcription** (handwriting, typing, spelling) must become fluent, or it crowds out ideas.',
    'Teach **sentences** explicitly: combining, expanding, using conjunctions.',
    '**Model** writing live and show the thinking behind choices.',
    '**Strategy instruction** (especially SRSD) has some of the strongest evidence in writing research.',
  ],
  sections: [
    {
      id: 'evidence',
      title: 'What works',
      lead: 'From Graham and Perin’s Writing Next (2007).',
      blocks: [
        {
          t: 'table',
          head: ['Approach', 'What it involves'],
          rows: [
            ['Strategy instruction', 'Explicitly teaching strategies for planning, revising and editing, with the goal of independent use.'],
            ['Summarisation', 'Teaching learners to write summaries of texts.'],
            ['Peer assistance', 'Learners working together to plan, draft and revise.'],
            ['Specific product goals', 'Clear goals for the piece: "include three reasons and a counterargument".'],
            ['Word processing', 'Typing can help, especially for learners who struggle with handwriting.'],
            ['Sentence combining', 'Combining short sentences into more complex ones.'],
            ['Prewriting', 'Activities to generate and organise ideas before drafting.'],
            ['Study of models', 'Analysing good examples of the type of writing.'],
          ],
          caption: 'Among the approaches with the largest effects in their meta-analysis of writing instruction for older learners.',
        },
      ],
    },
    {
      id: 'sentences',
      title: 'Teaching sentences',
      blocks: [
        {
          t: 'p',
          text: 'Judith Hochman’s approach, described in *The Writing Revolution* (Hochman & Wexler, 2017), starts with sentence-level activities embedded in subject content, so writing practice also deepens understanding.',
        },
        {
          t: 'example',
          title: 'Because, but, so',
          lines: [
            { label: 'Stem', text: 'The Romans built roads…' },
            { label: 'because', text: '…because they needed to move armies quickly across the empire.' },
            { label: 'but', text: '…but building them required huge amounts of labour.' },
            { label: 'so', text: '…so trade and communication across the empire became much faster.' },
          ],
        },
        {
          t: 'list',
          items: [
            '**Sentence combining**: "The storm was loud. The storm lasted all night." → "The loud storm lasted all night."',
            '**Sentence expansion**: add who, what, when, where, why to a kernel sentence.',
            '**Appositives**: "Julius Caesar, *a Roman general*, crossed the Rubicon."',
            '**Fragments**: find and fix incomplete sentences.',
          ],
        },
      ],
    },
    {
      id: 'srsd',
      title: 'Self-regulated strategy development',
      lead: 'Karen Harris and Steve Graham.',
      blocks: [
        {
          t: 'p',
          text: 'SRSD teaches learners specific writing strategies (often with mnemonics) along with self-regulation: goal-setting, self-monitoring, self-instruction and self-reinforcement. It has large effects across many studies, including for learners with learning difficulties.',
        },
        {
          t: 'steps',
          items: [
            { title: 'Develop background knowledge', body: 'Teach what learners need to use the strategy: features of a good opinion essay, vocabulary.' },
            { title: 'Discuss it', body: 'Explain the strategy, why it helps, and when to use it.' },
            { title: 'Model it', body: 'Think aloud while using the strategy to write a piece.' },
            { title: 'Memorise it', body: 'Learners learn the steps (for example, POW: Pick my idea, Organise my notes, Write and say more).' },
            { title: 'Support it', body: 'Guided practice with gradually fading support.' },
            { title: 'Independent performance', body: 'Learners use the strategy on their own, and monitor their use.' },
          ],
        },
      ],
    },
    {
      id: 'transcription',
      title: 'Transcription and fluency',
      blocks: [
        {
          t: 'p',
          text: 'If a learner must think hard about letter formation or spelling, there is little working memory left for ideas. Explicit handwriting and spelling practice in the early years, and typing for learners who struggle, frees attention for composition. See [dyspraxia](@teaching/special-education/needs/dyspraxia) for motor difficulties.',
        },
      ],
    },
  ],
  sources: [
    'Graham, S., & Perin, D. (2007). *Writing next: Effective strategies to improve writing of adolescents in middle and high schools*. Alliance for Excellent Education.',
    'Hochman, J. C., & Wexler, N. (2017). *The writing revolution*. Jossey-Bass.',
    'Harris, K. R., Graham, S., Mason, L. H., & Friedlander, B. (2008). *Powerful writing strategies for all students*. Brookes.',
    'Education Endowment Foundation. (2021). *Improving literacy in key stage 2: Guidance report* (2nd ed.).',
  ],
  related: ['teaching/techniques/instruction/modelling', 'writing/essentials/paragraphs', 'teaching/subjects/reading'],
}

export default guide
