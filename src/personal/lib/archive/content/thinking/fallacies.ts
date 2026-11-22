import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'A fallacy is a flaw in reasoning that can make a bad argument look convincing. Learning to name common fallacies helps you spot them in adverts, debates and your own essays.',
  nutshell: [
    'Some fallacies attack the **person** instead of the argument.',
    'Some **distort** the argument or the choices.',
    'Some make **faulty links** between cause and effect or from few cases to all.',
    'Naming a fallacy is not enough to win an argument; explain why the reasoning fails.',
  ],
  sections: [
    {
      id: 'relevance',
      title: 'Fallacies of relevance',
      lead: 'Reasons that do not actually bear on the claim.',
      blocks: [
        {
          t: 'table',
          head: ['Fallacy', 'What happens', 'Example'],
          rows: [
            ['Ad hominem', 'Attacking the person, not the argument.', '"Why listen to her views on climate? She drives a car."'],
            ['Tu quoque', '"You do it too" as a response to criticism.', '"You say I shouldn’t be on my phone, but you’re always on yours."'],
            ['Appeal to authority', 'Citing someone who is not an expert in the relevant field.', '"A famous actor says this diet works."'],
            ['Bandwagon', 'It must be true or good because many people believe or do it.', '"Everyone is buying this, so it must be good."'],
            ['Appeal to emotion', 'Using feelings instead of evidence.', '"Think of the children!" in place of reasons.'],
            ['Red herring', 'Changing the subject to distract.', '"Why worry about school funding when there’s crime?"'],
          ],
        },
      ],
    },
    {
      id: 'distortion',
      title: 'Fallacies of distortion',
      lead: 'Misrepresenting the argument or the options.',
      blocks: [
        {
          t: 'table',
          head: ['Fallacy', 'What happens', 'Example'],
          rows: [
            ['Straw man', 'Misrepresenting an opponent’s view to make it easier to attack.', '"You want less homework? So you think students shouldn’t learn anything."'],
            ['False dilemma', 'Presenting only two options when more exist.', '"Either we ban phones completely or students will never focus."'],
            ['Slippery slope', 'Claiming one step will inevitably lead to extreme results, without evidence.', '"If we allow one late submission, soon no one will meet deadlines."'],
            ['Begging the question', 'The conclusion is assumed in a premise.', '"This book is reliable because it says it tells the truth."'],
            ['Equivocation', 'Using a word in two different senses.', '"Evolution is just a theory, so it’s just a guess." (Scientific "theory" ≠ everyday "theory".)'],
            ['No true Scotsman', 'Redefining a group to exclude counterexamples.', '"No real student would enjoy exams." "But I do." "Then you’re not a real student."'],
          ],
        },
      ],
    },
    {
      id: 'causal',
      title: 'Faulty generalisations and causes',
      blocks: [
        {
          t: 'table',
          head: ['Fallacy', 'What happens', 'Example'],
          rows: [
            ['Hasty generalisation', 'A broad conclusion from too few or unrepresentative cases.', '"My two friends failed with that method, so it doesn’t work."'],
            ['Post hoc', 'Assuming that because B followed A, A caused B.', '"I wore my lucky socks and passed, so the socks helped."'],
            ['Correlation as causation', 'Assuming two things that go together are cause and effect.', '"Ice cream sales and drownings rise together, so ice cream causes drowning." (Both rise in summer.) See [reading numbers](@thinking/numbers).'],
            ['Anecdotal evidence', 'Using a personal story to override systematic evidence.', '"My grandad smoked and lived to 95."'],
          ],
        },
      ],
    },
    {
      id: 'using',
      title: 'Using this well',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Explain what is wrong with the reasoning, not just the label.',
            'Check your own essays for straw men and false dilemmas.',
            'Remember that an argument can contain a fallacy and still have a true conclusion.',
          ],
          dont: [
            'Shout "fallacy!" to dismiss views you dislike (that is itself a fallacy: the fallacy fallacy).',
            'Treat every appeal to expertise as a fallacy; relevant experts are good evidence.',
          ],
        },
      ],
    },
  ],
  sources: [
    'Walton, D. (2008). *Informal logic: A pragmatic approach* (2nd ed.). Cambridge University Press.',
    'Bennett, B. (2012). *Logically fallacious*. eBookIt.',
  ],
  related: ['thinking/arguments', 'thinking/biases', 'writing/essentials/argument'],
}

export default guide
