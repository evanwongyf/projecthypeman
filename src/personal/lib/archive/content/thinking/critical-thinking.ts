import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'Critical thinking is careful, reasonable thinking about what to believe or do. It is not about being negative or criticising everything. It means asking good questions, weighing evidence, spotting weak reasoning (including your own) and changing your mind when the evidence says so.',
  nutshell: [
    'A mix of **skills** (analysing arguments, judging evidence) and **dispositions** (curiosity, open-mindedness, fairness).',
    'It depends heavily on **knowledge**: you think critically about things you know about.',
    'Key questions: What is being claimed? What is the evidence? What is assumed? What else could explain it?',
    'Apply it to your own beliefs as rigorously as to others’.',
  ],
  sections: [
    {
      id: 'definition',
      title: 'What it is',
      blocks: [
        {
          t: 'quote',
          text: 'Critical thinking is reasonable reflective thinking focused on deciding what to believe or do.',
          by: 'Robert Ennis (1987)',
        },
        {
          t: 'cards',
          items: [
            { title: 'Skills', body: 'Interpreting, analysing arguments, evaluating evidence, drawing inferences, explaining reasoning, and monitoring your own thinking (Facione, 1990).' },
            { title: 'Dispositions', body: 'Curiosity, open-mindedness, fair-mindedness, willingness to reconsider, honesty about bias, persistence, and respect for evidence.' },
          ],
        },
      ],
    },
    {
      id: 'questions',
      title: 'Questions critical thinkers ask',
      blocks: [
        {
          t: 'table',
          head: ['About…', 'Ask…'],
          rows: [
            ['The claim', 'What exactly is being claimed? What do the key words mean?'],
            ['The evidence', 'What is the evidence? How good is it? Where does it come from? See [judging a source](@research/evaluating-sources).'],
            ['The reasoning', 'Does the conclusion follow from the evidence? See [anatomy of an argument](@thinking/arguments).'],
            ['Assumptions', 'What is taken for granted? Is it justified?'],
            ['Alternatives', 'What other explanations or viewpoints are there?'],
            ['Implications', 'If this is true, what follows? What would it mean if it were false?'],
            ['Yourself', 'Do I want this to be true? Would I accept this evidence if it pointed the other way? See [cognitive biases](@thinking/biases).'],
          ],
        },
      ],
    },
    {
      id: 'knowledge',
      title: 'Why knowledge matters',
      blocks: [
        {
          t: 'p',
          text: 'Daniel Willingham (2007) argues that critical thinking is not a general skill you can learn once and apply anywhere. A historian can evaluate a historical source brilliantly and still be fooled by a flawed medical study, because evaluating evidence well requires knowing the field: what counts as good evidence, what the common mistakes are. So critical thinking grows alongside subject knowledge, and general habits (like asking "how do you know?") are a starting point, not the whole story.',
        },
      ],
    },
    {
      id: 'practice',
      title: 'Practising it',
      blocks: [
        {
          t: 'checklist',
          items: [
            'Before accepting a claim, ask "what is the evidence?"',
            'Find the strongest version of a view you disagree with.',
            'Notice when you feel strongly about a claim; slow down.',
            'Look for at least one alternative explanation.',
            'Say "I don’t know" when you don’t.',
            'Change your mind publicly when evidence warrants it.',
          ],
        },
      ],
    },
  ],
  sources: [
    'Ennis, R. H. (1987). A taxonomy of critical thinking dispositions and abilities. In J. B. Baron & R. J. Sternberg (Eds.), *Teaching thinking skills* (pp. 9–26). Freeman.',
    'Facione, P. A. (1990). *Critical thinking: A statement of expert consensus for purposes of educational assessment and instruction* (The Delphi Report). American Philosophical Association.',
    'Willingham, D. T. (2007). Critical thinking: Why is it so hard to teach? *American Educator, 31*(2), 8–19.',
  ],
  related: ['thinking/arguments', 'thinking/biases', 'research/evaluating-sources'],
}

export default guide
