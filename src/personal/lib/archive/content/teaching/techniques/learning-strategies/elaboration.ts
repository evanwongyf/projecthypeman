import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Elaboration means adding meaning to new information by asking how and why, explaining it in your own words and connecting it to what you already know. The more connections a memory has, the more ways there are to find it again.',
  nutshell: [
    '**Elaborative interrogation**: ask "why is this true?" and "how does this work?" about each fact.',
    '**Self-explanation**: explain each step of a worked example or text to yourself as you study it.',
    'Connect new ideas to your own experiences and to other topics.',
    'It helps most when you already know something about the topic; with no prior knowledge there is nothing to connect to.',
  ],
  sections: [
    {
      id: 'questions',
      title: 'Asking how and why',
      lead: 'Elaborative interrogation.',
      blocks: [
        {
          t: 'p',
          text: 'In studies of elaborative interrogation, learners who were prompted to explain *why* facts were true remembered them much better than those who simply read them. Dunlosky and colleagues (2013) rated it a "moderate utility" technique: well supported, especially for factual learning, but less tested with complex material.',
        },
        {
          t: 'example',
          title: 'Turning facts into questions',
          lines: [
            { label: 'Fact', text: 'Most deserts are on the western sides of continents around 30° north and south.' },
            { label: 'Why?', text: 'Why 30°? Air rises at the equator, cools and drops its rain, then sinks as dry air around 30°. Why the western sides? Cold ocean currents there cool the air above them, which makes rain less likely.' },
            { label: 'Connect', text: 'This is like the rain shadow of a mountain: rain falls on one side, dry air comes down the other.' },
          ],
        },
        {
          t: 'list',
          items: [
            'Why does this make sense?',
            'How does this work, step by step?',
            'Why is this true for X but not for Y?',
            'How does this connect to what I learned last week?',
            'What would happen if this were not true?',
            'Where have I seen this in real life?',
          ],
        },
      ],
    },
    {
      id: 'self-explanation',
      title: 'Self-explanation',
      lead: 'Talking yourself through each step.',
      blocks: [
        {
          t: 'p',
          text: 'Michelene Chi and colleagues found that the best physics students explained each line of a worked example to themselves ("so they used conservation of energy here because there is no friction"), while weaker students just read through. Prompting learners to self-explain improves understanding and helps them solve new problems (Chi et al., 1989; 1994).',
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Self-explanation prompts',
          text: 'After each step or paragraph, ask: What did this step do? Why was it done? How does it connect to the step before? What new information did this give me?',
        },
      ],
    },
    {
      id: 'connect',
      title: 'Making connections',
      lead: 'Building a web instead of a list.',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Compare and contrast', body: 'How is this similar to and different from something related? Mitosis vs meiosis; simile vs metaphor.' },
            { title: 'Link to experience', body: 'Where have I seen this? Friction when braking a bike; supply and demand when concert tickets sell out.' },
            { title: 'Cause and effect chains', body: 'What caused this, and what did it cause? Draw the chain.' },
            { title: 'Concrete examples', body: 'Find or invent an example of the idea. See [concrete examples](@teaching/techniques/learning-strategies/concrete-examples).' },
          ],
        },
      ],
    },
    {
      id: 'tips',
      title: 'Making it work',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Check your explanations against a reliable source. A confident wrong explanation can stick too.',
            'Combine elaboration with [retrieval](@teaching/techniques/learning-strategies/retrieval-practice): explain from memory, then check.',
            'Use it when you have some background knowledge to connect to.',
          ],
          dont: [
            'Just rephrase the sentence without adding any how or why.',
            'Spend so long on connections that you never learn the core facts.',
          ],
        },
      ],
    },
  ],
  sources: [
    'Pressley, M., McDaniel, M. A., Turnure, J. E., Wood, E., & Ahmad, M. (1987). Generation and precision of elaboration: Effects on intentional and incidental learning. *Journal of Experimental Psychology: Learning, Memory, and Cognition, 13*(2), 291–300.',
    'Chi, M. T. H., Bassok, M., Lewis, M. W., Reimann, P., & Glaser, R. (1989). Self-explanations: How students study and use examples in learning to solve problems. *Cognitive Science, 13*(2), 145–182.',
    'Dunlosky, J., et al. (2013). Improving students’ learning with effective learning techniques. *Psychological Science in the Public Interest, 14*(1), 4–58.',
  ],
  related: ['teaching/techniques/learning-strategies/feynman', 'teaching/techniques/learning-strategies/concrete-examples', 'teaching/techniques/instruction/worked-examples'],
}

export default guide
