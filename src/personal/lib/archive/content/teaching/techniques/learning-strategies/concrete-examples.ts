import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Abstract ideas are hard to grasp and easy to forget. Concrete examples, specific cases you can picture, give them something to hold on to. The trick is to use several different examples so learners see the idea underneath, not just the surface details.',
  nutshell: [
    'Pair every abstract idea with specific, vivid examples.',
    'Use **several varied examples**, so learners can separate the core idea from surface features.',
    'Add **non-examples** that look similar but are not, to sharpen the boundary.',
    'Ask learners to explain what the examples have in common, and to create their own.',
  ],
  sections: [
    {
      id: 'why',
      title: 'Why examples matter',
      lead: 'From concrete to abstract.',
      blocks: [
        {
          t: 'p',
          text: 'People understand abstract principles by first meeting concrete cases. An explanation of "opportunity cost" as "the value of the next best alternative forgone" means little until you think: "If I spend Saturday working, the cost is not just my time; it is the football match I did not go to."',
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'The transfer problem',
          text: 'Learners who see one example tend to remember the surface story rather than the principle, and then fail to recognise the same principle in a different story (Gick & Holyoak, 1983). Two or more varied examples, compared side by side, help them extract the principle.',
        },
      ],
    },
    {
      id: 'how',
      title: 'Using examples well',
      lead: 'Five moves.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Give several examples', body: 'Choose examples that differ in surface details but share the key idea. For *irony*: a fire station burning down; a traffic cop getting a parking ticket; a story where a character’s plan to escape fate causes it.' },
            { title: 'Make the link explicit', body: 'Say what the examples have in common and how each one shows the idea. Do not leave learners to guess.' },
            { title: 'Add non-examples', body: 'Show cases that look similar but are not: "a sad event" is not irony just because it is unfortunate. Non-examples mark the boundary of the concept.' },
            { title: 'Compare side by side', body: 'Put examples next to each other and ask what is the same and what is different.' },
            { title: 'Have learners generate their own', body: 'Ask for a new example and an explanation of why it fits. Their examples show whether they have the concept or just the vocabulary.' },
          ],
        },
      ],
    },
    {
      id: 'example',
      title: 'An example about examples',
      blocks: [
        {
          t: 'example',
          title: 'Teaching "negative feedback loop" in biology',
          lines: [
            { label: 'Example 1', text: 'Body temperature: too hot, you sweat and cool down; too cold, you shiver and warm up.' },
            { label: 'Example 2', text: 'Blood sugar: after a meal, insulin lowers it; when it falls, glucagon raises it.' },
            { label: 'Example 3', text: 'A home thermostat: when the room reaches the set temperature, the heating switches off.' },
            { label: 'Common idea', text: 'In each case, a change triggers a response that **reverses** the change, keeping things near a set point.' },
            { label: 'Non-example', text: 'Childbirth contractions: each contraction triggers more, pushing the change further. That is a **positive** feedback loop.' },
            { label: 'Your turn', text: 'Learners suggest another negative feedback loop, from biology or daily life, and explain the set point and response.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Gick, M. L., & Holyoak, K. J. (1983). Schema induction and analogical transfer. *Cognitive Psychology, 15*(1), 1–38.',
    'Rawson, K. A., Thomas, R. C., & Jacoby, L. L. (2015). The power of examples: Illustrative examples enhance conceptual learning of declarative concepts. *Educational Psychology Review, 27*(3), 483–504.',
    'Weinstein, Y., Madan, C. R., & Sumeracki, M. A. (2018). Teaching the science of learning. *Cognitive Research: Principles and Implications, 3*, 2.',
  ],
  related: ['teaching/techniques/instruction/explaining', 'teaching/techniques/learning-strategies/elaboration', 'teaching/techniques/learning-strategies/dual-coding'],
}

export default guide
