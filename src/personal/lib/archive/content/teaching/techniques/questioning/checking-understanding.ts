import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Checking for understanding means gathering evidence of what every learner has grasped, during the lesson, so you can adjust while it still matters. Asking "does everyone get it?" is not a check. These techniques are.',
  nutshell: [
    'Get responses from **all** learners, not just volunteers.',
    'Ask learners to **show** understanding by doing or explaining, not to report it.',
    'Check little and often, especially after each new step.',
    'Act on what you see: move on, reteach, or group learners for support.',
  ],
  sections: [
    {
      id: 'why',
      title: 'Why "does that make sense?" fails',
      blocks: [
        {
          t: 'p',
          text: 'Learners who do not understand often do not know they do not understand, and those who do know rarely say so in front of the class. Nods and silence tell you very little. A real check asks learners to produce something you can look at.',
        },
      ],
    },
    {
      id: 'toolkit',
      title: 'A toolkit of checks',
      lead: 'Quick ways to see everyone’s thinking.',
      blocks: [
        {
          t: 'cards',
          cols: 3,
          items: [
            { title: 'Mini whiteboards', body: 'Everyone writes an answer and shows it on your signal. Scan the room in seconds. Great for calculations, short answers, diagrams.' },
            { title: 'Hinge question', body: 'One diagnostic multiple-choice question with fingers or cards. See [hinge questions](@teaching/techniques/questioning/hinge-questions).' },
            { title: 'Exit ticket', body: 'One to three questions at the end of the lesson on a slip of paper. Sort them into piles to plan the next lesson.' },
            { title: 'Cold call with follow-up', body: 'Ask several learners to explain, and bounce between them. See [questioning techniques](@teaching/techniques/questioning/questioning).' },
            { title: 'Explain it back', body: '"Turn to your partner and explain the three steps." Listen in to several pairs.' },
            { title: 'Show me', body: '"Point to the verb in sentence 3." "Hold up the shape that has a right angle."' },
            { title: 'Circulate and look', body: 'During practice, walk the room and look at work, not faces. Mark a few answers as you go.' },
            { title: 'Error hunt', body: 'Show a worked answer with a deliberate mistake. Can learners find and fix it?' },
            { title: 'Confidence rating', body: 'Learners rate confidence 1–5 with fingers, but always pair it with a real question; confidence alone is unreliable.' },
          ],
        },
      ],
    },
    {
      id: 'exit',
      title: 'Exit tickets that work',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Target the key idea', body: 'Ask about the one thing learners most needed to get from the lesson.' },
            { title: 'Keep it short', body: 'One to three questions, answerable in two or three minutes.' },
            { title: 'Include a diagnostic item', body: 'A question that reveals a common misconception.' },
            { title: 'Sort, do not mark', body: 'Sort into three piles: got it, nearly, not yet. It takes minutes.' },
            { title: 'Use the piles', body: 'Start the next lesson by addressing the "not yet" pile, perhaps by grouping those learners for a short reteach.' },
          ],
        },
      ],
    },
    {
      id: 'responding',
      title: 'Responding to what you see',
      blocks: [
        {
          t: 'table',
          head: ['What you see', 'What to do'],
          rows: [
            ['Nearly everyone is right', 'Move on. Quickly check in with the few who were not.'],
            ['A split, with two common answers', 'Ask a learner from each camp to explain, and let the class decide. Then clarify.'],
            ['Many are wrong in the same way', 'Reteach, with a different explanation or example that targets the misconception.'],
            ['Many are wrong in different ways', 'The step was too big. Go back to the last point of success and break it down further.'],
          ],
        },
      ],
    },
  ],
  sources: [
    'Fisher, D., & Frey, N. (2014). *Checking for understanding: Formative assessment techniques for your classroom* (2nd ed.). ASCD.',
    'Wiliam, D. (2011). *Embedded formative assessment*. Solution Tree.',
    'Lemov, D. (2021). *Teach like a champion 3.0*. Jossey-Bass.',
  ],
  related: ['teaching/techniques/questioning/hinge-questions', 'teaching/techniques/questioning/questioning', 'teaching/assessment/formative-summative'],
}

export default guide
