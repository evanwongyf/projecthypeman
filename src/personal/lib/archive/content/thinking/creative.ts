import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'Creative thinking is generating ideas that are new and useful. It is not a gift only some people have; it is a set of habits and techniques. The core rhythm is simple: first generate many ideas without judging, then evaluate and develop the best.',
  nutshell: [
    '**Diverge, then converge**: generate lots of options, then choose.',
    'Quantity leads to quality: the more ideas, the more good ones.',
    'Individuals writing ideas alone often generate more than groups talking; combine both.',
    'Techniques like **SCAMPER**, **constraints** and **random input** push you past obvious ideas.',
  ],
  sections: [
    {
      id: 'diverge',
      title: 'Diverge, then converge',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Divergent thinking', body: 'Generating many possible ideas. No criticism yet. Wild ideas welcome. Build on others’ ideas.' },
            { title: 'Convergent thinking', body: 'Evaluating, combining and choosing. Now judge ideas against criteria and develop the best.' },
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Brainstorming groups have a catch',
          text: 'Alex Osborn popularised group brainstorming in the 1950s, but studies found that people working alone, then pooling ideas, usually produce more and better ideas than the same people talking in a group (Diehl & Stroebe, 1987). In groups, people wait their turn, forget ideas, and hold back. **Brainwriting**, where everyone writes ideas silently first, fixes much of this.',
        },
      ],
    },
    {
      id: 'scamper',
      title: 'SCAMPER',
      lead: 'Seven prompts for changing an existing idea.',
      blocks: [
        {
          t: 'table',
          head: ['Letter', 'Prompt', 'Example: a school bag'],
          rows: [
            ['S', 'Substitute: what could you replace?', 'Recycled bottles instead of nylon'],
            ['C', 'Combine: what could you merge?', 'Bag + portable desk'],
            ['A', 'Adapt: what could you borrow from elsewhere?', 'Hiking pack straps to spread weight'],
            ['M', 'Modify: make bigger, smaller, different?', 'Expandable compartment for PE kit'],
            ['P', 'Put to other uses', 'Bag doubles as a seat cushion'],
            ['E', 'Eliminate: what could you remove?', 'Remove zips; use a roll-top'],
            ['R', 'Reverse or rearrange', 'Opens from the back so it can’t be pickpocketed'],
          ],
          caption: 'SCAMPER was developed by Bob Eberle (1971) from Osborn’s idea-spurring questions.',
        },
      ],
    },
    {
      id: 'more',
      title: 'More techniques',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Constraints', body: 'Limits can boost creativity: "Tell a story in six words." "Design it for under £5." Constraints block the obvious path.' },
            { title: 'Random input', body: 'Pick a random word or object and force a connection to your problem.' },
            { title: 'Worst possible idea', body: 'Brainstorm terrible ideas, then flip them. It lowers the pressure and often reveals good ones.' },
            { title: 'Change perspective', body: 'How would a child, an engineer, or someone from 100 years ago approach it?' },
            { title: 'Incubation', body: 'After working hard on a problem, take a break or sleep on it.' },
            { title: 'Borrow and combine', body: 'Many ideas are new combinations of existing ones. Collect ideas from other fields.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Osborn, A. F. (1953). *Applied imagination*. Scribner.',
    'Diehl, M., & Stroebe, W. (1987). Productivity loss in brainstorming groups: Toward the solution of a riddle. *Journal of Personality and Social Psychology, 53*(3), 497–509.',
    'Eberle, B. (1971). *SCAMPER: Games for imagination development*. D.O.K. Publishers.',
  ],
  related: ['thinking/problem-solving', 'note-taking/methods/mapping', 'writing/essentials/process'],
}

export default guide
