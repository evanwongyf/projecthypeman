import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'A hinge question is a single, carefully designed multiple-choice question asked at the turning point of a lesson. Every learner answers at once, and the pattern of answers tells you, in seconds, whether to move on or reteach, and who needs what.',
  nutshell: [
    'Asked at the "hinge" of the lesson: the point where the next step depends on understanding this one.',
    'Every learner answers within a minute or two (fingers, cards, whiteboards). You read the room in under 30 seconds.',
    'Each wrong option is a **diagnostic distractor**: choosing it reveals a specific misconception.',
    'Decide in advance what you will do for each result.',
  ],
  sections: [
    {
      id: 'what',
      title: 'What makes a hinge question',
      lead: 'Dylan Wiliam’s criteria.',
      blocks: [
        {
          t: 'list',
          items: [
            'It focuses on **one key idea** that the rest of the lesson depends on.',
            'All learners respond at the same time, in about **two minutes** or less.',
            'The teacher can see and interpret all responses in about **30 seconds**.',
            'It is very hard to get right for the wrong reason: learners who answer correctly almost certainly understand.',
            'Each wrong answer points to a known misconception.',
          ],
        },
      ],
    },
    {
      id: 'distractors',
      title: 'Writing diagnostic distractors',
      lead: 'Every wrong answer should tell you something.',
      blocks: [
        {
          t: 'example',
          title: 'Which fraction is the largest?',
          lines: [
            { label: 'A', text: '1/3' },
            { label: 'B', text: '1/5' },
            { label: 'C', text: '1/8' },
            { label: 'D', text: 'They are all the same size' },
            { label: 'Reading it', text: 'A is correct. **C** suggests the learner thinks a bigger denominator means a bigger fraction. **D** suggests they think all unit fractions are equal because each has a 1 on top. **B** is less informative, so a better version might replace it.' },
          ],
        },
        {
          t: 'example',
          title: 'Science: a ball is thrown straight up. At the top of its flight, what forces act on it?',
          lines: [
            { label: 'A', text: 'No forces, because it has stopped.' },
            { label: 'B', text: 'Only gravity, downward.' },
            { label: 'C', text: 'Gravity down, and the force of the throw up, balanced.' },
            { label: 'D', text: 'The force of the throw, upward.' },
            { label: 'Reading it', text: 'B is correct (ignoring air resistance). A, C and D each reveal the very common idea that motion needs a continuing force, or that stopped means no force.' },
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Where distractors come from',
          text: 'Collect the wrong answers learners actually give in past lessons and tests. Lists of common misconceptions in your subject are a rich source too.',
        },
      ],
    },
    {
      id: 'using',
      title: 'Using it in the lesson',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Ask', body: 'Display the question and give a short silent thinking time.' },
            { title: 'All respond at once', body: 'On "3, 2, 1, show me", learners hold up fingers, ABCD cards or whiteboards. Simultaneous response stops copying.' },
            { title: 'Scan', body: 'Look at the spread. Note which learners chose which distractors.' },
            { title: 'Decide', body: 'Mostly right: move on, and quickly support the few who were wrong. Split: ask learners with different answers to explain and discuss. Mostly wrong: reteach differently.' },
          ],
        },
        {
          t: 'p',
          text: 'Set your decision rule before the lesson. Wiliam suggests moving on if roughly 80% or more are right, while planning something for the rest.',
        },
      ],
    },
  ],
  sources: [
    'Wiliam, D. (2011). *Embedded formative assessment*. Solution Tree.',
    'Millar, R., & Hames, V. (2003). Using diagnostic assessment to enhance teaching and learning. *Evidence-based Practice in Science Education (EPSE) Research Network*.',
  ],
  related: ['teaching/techniques/questioning/checking-understanding', 'teaching/assessment/test-design', 'teaching/assessment/formative-summative'],
}

export default guide
