import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'There is no single agreed definition of intelligence, so there is none of artificial intelligence either. A practical one: AI is the study of building systems that perceive their situation and act to achieve goals well. Today almost all of it is done with **machine learning**.',
  nutshell: [
    'AI textbooks frame it as building **rational agents**: systems that choose actions that best achieve their goals.',
    'All AI deployed today is **narrow**: good at specific tasks. **General** AI, as capable as people across the board, does not yet exist and is debated.',
    'Older **symbolic AI** used hand-written rules; **machine learning** finds the rules from data.',
    'A model is just a mathematical function with adjustable numbers; learning means adjusting them.',
  ],
  sections: [
    {
      id: 'definitions',
      title: 'Four ways to define AI',
      blocks: [
        { t: 'p', text: 'Russell and Norvig’s classic textbook sorts definitions along two questions: is the goal to think or to act, and to be like humans or to be rational (to do the right thing)?' },
        {
          t: 'table',
          head: ['', 'Like humans', 'Rationally'],
          rows: [
            ['Thinking', 'Model human thought (cognitive science)', 'Reason correctly (logic)'],
            ['Acting', 'Behave indistinguishably from a person (the Turing test)', 'Act to best achieve goals (the rational agent): the modern view'],
          ],
        },
        {
          t: 'flow',
          title: 'An agent in its environment',
          nodes: [
            { label: 'Environment', sub: 'the world: a road, a chessboard, a conversation', tone: 'data' },
            { label: 'Sensors', sub: 'cameras, text input, game state', tone: 'process' },
            { label: 'Agent', sub: 'decides what to do', tone: 'model' },
            { label: 'Actuators', sub: 'steering, moves, words', tone: 'output' },
          ],
          loop: 'actions change the environment, which the agent senses again',
        },
      ],
    },
    {
      id: 'narrow-general',
      title: 'Narrow, general and super',
      blocks: [
        {
          t: 'levels',
          items: [
            { name: 'Narrow AI', body: 'Excellent at one task or a family of tasks: playing Go, recognising faces, translating, writing text. Everything deployed today.' },
            { name: 'Artificial general intelligence (AGI)', body: 'Able to learn and perform most intellectual tasks a person can. Large language models are broad, but whether and when AGI arrives is hotly debated.' },
            { name: 'Superintelligence', body: 'Far beyond human ability in nearly every domain. Hypothetical; a central topic in AI safety discussions.' },
          ],
        },
      ],
    },
    {
      id: 'ml-vs-programming',
      title: 'Programming versus machine learning',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Traditional programming', body: 'Rules + data → answers. A person writes the rules: "if the email contains *free money*, mark it as spam".' },
            { title: 'Machine learning', body: 'Data + answers → rules. Show the program thousands of emails labelled spam or not, and it works out the rules itself.' },
          ],
        },
        {
          t: 'math',
          tex: String.raw`\hat{y} = f_\theta(x)`,
          where: [
            { sym: 'x', def: 'The input: an email, an image, a row of numbers' },
            { sym: '\\theta', def: 'The parameters, learned from data (a straight line has 2; GPT-3 has 175 billion)' },
            { sym: '\\hat{y}', def: 'The output: a label, a number, the next word' },
          ],
          syntax: [
            { sym: String.raw`\hat{y}`, say: String.raw`Read "y hat": the model's prediction, as opposed to \(y\), the true answer.` },
            { sym: String.raw`f_\theta(x)`, say: String.raw`Read "f sub theta of x": run the function \(f\) on input \(x\), where the subscript \(\theta\) says its behaviour depends on the parameters.` },
          ],
          worked: {
            title: String.raw`A two-parameter house-price model`,
            steps: [
              String.raw`Let \(f_\theta(x) = wx + b\) with parameters \(\theta = (w, b) = (2.5, 20)\): £2.5k per m\(^2\) plus a £20k base.`,
              String.raw`Input \(x = 120\) m\(^2\): \(\hat{y} = 2.5(120) + 20 = 300 + 20 = 320\).`,
              String.raw`If the true price is \(y = 335\), the error is \(\hat{y} - y = -15\) (£k), a £15k underestimate.`,
              String.raw`This model has 2 parameters; changing \(\theta\) changes \(f\) but never its form.`,
            ],
            answer: String.raw`\(\hat{y} = \)£320k against a true £335k; learning means finding \(\theta\) that shrinks such errors across many houses.`,
          },
          caption: 'Every model, however large, is a function from inputs to outputs, shaped by its parameters.',
        },
        {
          t: 'table',
          head: ['Approach', 'How it works', 'Strengths', 'Weaknesses'],
          rows: [
            ['Symbolic AI (rules, logic, search)', 'People encode knowledge as rules and the computer reasons with them', 'Transparent; exact; needs no data', 'Brittle; hard to write rules for messy problems like vision'],
            ['Machine learning', 'Learns patterns from examples', 'Handles messy, high-dimensional data', 'Needs lots of data; can be opaque; can learn biases'],
            ['Hybrid (neuro-symbolic)', 'Combines learned models with rules or search', 'AlphaGo combined networks with tree search', 'More complex to build'],
          ],
        },
      ],
    },
    {
      id: 'moravec',
      title: 'What is easy and what is hard',
      blocks: [
        { t: 'callout', tone: 'fact', title: 'Moravec’s paradox', text: 'In the 1980s Hans Moravec noted that computers find "hard" things like chess and algebra easy, but "easy" things a toddler does, like recognising faces or walking across a messy room, extremely hard. Skills that evolution polished over millions of years are the hardest to copy. Deep learning has narrowed the gap for perception; robotics still feels it.' },
        { t: 'callout', tone: 'myth', title: 'Myth: AI understands like we do', text: 'Whether models "understand" is a live philosophical question, but they work very differently from brains, and can fail in ways no person would: confidently inventing facts, or misreading an image after a few pixels change.' },
      ],
    },
  ],
  sources: ['Russell, S., & Norvig, P. (2021). *Artificial Intelligence: A Modern Approach* (4th ed.). Pearson.', 'Turing, A. M. (1950). Computing machinery and intelligence. *Mind*, 59(236), 433–460.', 'Moravec, H. (1988). *Mind Children*. Harvard University Press.'],
  related: ['ai/foundations/history', 'ai/foundations/learning-types', 'ai/practice/ethics'],
}

export default guide
