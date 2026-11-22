import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Experts do most of their thinking silently and automatically, so beginners never see it. Modelling with a **think-aloud** makes that thinking visible: the teacher does the task live while narrating the decisions, doubts and checks along the way.',
  nutshell: [
    'Show the process, not just the product. A finished model answer hides every decision that produced it.',
    'Narrate choices, not actions: say *why* you do each step, not just *what* you do.',
    'Include mistakes and fix them, so learners see how experts recover.',
    'Tell learners what to watch for before you start.',
  ],
  sections: [
    {
      id: 'why',
      title: 'Why model live',
      lead: 'The expert blind spot.',
      blocks: [
        {
          t: 'p',
          text: 'Collins, Brown and Newman (1989) described **cognitive apprenticeship**: in a traditional apprenticeship, the apprentice can watch the master work, but in academic subjects the work happens in the head. Their answer was to bring thinking into the open through modelling, coaching and scaffolding, then fade the support.',
        },
        {
          t: 'table',
          head: ['', 'Showing a finished model', 'Live modelling with think-aloud'],
          rows: [
            ['Learners see', 'What a good answer looks like', 'How a good answer gets made'],
            ['Hidden from learners', 'Planning, choices, rejected ideas, checking', 'Very little'],
            ['Best for', 'Setting a standard; analysing features', 'Teaching a process learners must do themselves'],
          ],
        },
        {
          t: 'p',
          text: 'Both have a place. A common sequence: show a finished model, discuss what makes it good, then model live how to produce one.',
        },
      ],
    },
    {
      id: 'how',
      title: 'How to think aloud',
      lead: 'Narrating the invisible.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Set a focus', body: '"Watch how I decide which quote to use." Learners know where to look.' },
            { title: 'Plan aloud', body: '"The question says *how*, so I need to talk about methods, not just what happens."' },
            { title: 'Narrate decisions', body: '"I could start with the storm scene, but the opening shows the tension first, so I’ll start there."' },
            { title: 'Voice doubts', body: '"I’m not sure this word is strong enough. Let me try another."' },
            { title: 'Make and fix a mistake', body: '"Wait, I said the ratio was 2:3, but I put the numbers the wrong way round. Let me check the question again."' },
            { title: 'Check the work', body: '"Before I finish, does my answer actually respond to the question? Let me re-read it."' },
            { title: 'Recap the process', body: 'Summarise the steps you took, and leave them visible for learners to use.' },
          ],
        },
        {
          t: 'example',
          title: 'Think-aloud while annotating a poem',
          lines: [
            { label: 'Read', text: '"First I read the whole poem once without stopping, just to get the gist. It seems to be about a father, and the mood feels sad."' },
            { label: 'Notice', text: '"This line ‘the cold house’ stands out. Why cold? Maybe it is literally cold, but maybe it is emotionally cold too. I’ll underline it and write both ideas."' },
            { label: 'Question', text: '"I don’t understand ‘offices’ here. It doesn’t seem to mean workplaces. Let me look at the context… duties, perhaps? I’ll note that as a question to check."' },
            { label: 'Connect', text: '"The cold at the start and the warmth later. That’s a contrast. The poem might be about realising someone’s love too late."' },
          ],
        },
      ],
    },
    {
      id: 'tips',
      title: 'Tips',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Model with a visualiser or on the board, writing in real time.',
            'Keep it short: model one skill or step, then have learners try it.',
            'Invite learners into the thinking gradually ("What should I check next?"), moving toward [we do](@teaching/techniques/instruction/i-do-we-do-you-do).',
            'Leave the finished model and the list of steps visible during practice.',
          ],
          dont: [
            'Pre-prepare a perfect answer and read it out; learners will not see the process.',
            'Narrate only actions ("Now I write the next sentence").',
            'Model for so long that learners stop watching.',
          ],
        },
      ],
    },
  ],
  sources: [
    'Collins, A., Brown, J. S., & Newman, S. E. (1989). Cognitive apprenticeship: Teaching the crafts of reading, writing, and mathematics. In L. B. Resnick (Ed.), *Knowing, learning, and instruction* (pp. 453–494). Erlbaum.',
    'Education Endowment Foundation. (2021). *Metacognition and self-regulated learning: Guidance report*.',
  ],
  related: ['teaching/techniques/instruction/i-do-we-do-you-do', 'teaching/techniques/learning-strategies/metacognition', 'teaching/theories/social-learning', 'teaching/techniques/instruction/worked-examples'],
}

export default guide
