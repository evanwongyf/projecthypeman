import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Socratic questioning uses a sequence of probing questions to help learners examine their own ideas: what they mean, why they believe them, and what follows from them. The teacher does not lecture; the questions do the teaching.',
  nutshell: [
    'Named after Socrates, who taught by questioning people until they saw the gaps in their own reasoning.',
    'Six kinds of question: **clarify, probe assumptions, probe evidence, explore viewpoints, examine consequences, question the question**.',
    'A **Socratic seminar** is a structured discussion of a text in which learners question each other.',
    'It works best when learners know enough about the topic to reason with.',
  ],
  sections: [
    {
      id: 'types',
      title: 'Six kinds of Socratic question',
      lead: 'Based on Richard Paul’s framework.',
      blocks: [
        {
          t: 'table',
          head: ['Kind', 'Purpose', 'Example questions'],
          rows: [
            ['Clarifying', 'Make the meaning precise', 'What do you mean by…? Can you give an example? Can you put that another way?'],
            ['Probing assumptions', 'Surface what is taken for granted', 'What are you assuming? Is that always true? Why would someone assume that?'],
            ['Probing reasons and evidence', 'Test the basis for a claim', 'How do you know? What evidence supports that? Is that evidence reliable?'],
            ['Viewpoints and perspectives', 'Consider alternatives', 'How might someone who disagrees see this? What is another way to look at it?'],
            ['Implications and consequences', 'Follow the idea through', 'If that is true, what follows? What would happen if…? How does that fit with what we learned before?'],
            ['Questions about the question', 'Reflect on the inquiry itself', 'Why is this question important? Is it the right question? What would help us answer it?'],
          ],
        },
      ],
    },
    {
      id: 'example',
      title: 'A short exchange',
      blocks: [
        {
          t: 'example',
          title: '"Is it ever right to break the law?"',
          lines: [
            { label: 'Learner', text: '"No, laws are there to keep people safe."' },
            { label: 'Clarify', text: '"When you say laws keep people safe, do you mean every law does?"' },
            { label: 'Learner', text: '"Well, most of them."' },
            { label: 'Assumption', text: '"So you’re assuming a law is right because it is the law. Can you think of a law that was not right?"' },
            { label: 'Learner', text: '"Segregation laws, I suppose."' },
            { label: 'Consequence', text: '"So if people had never broken those laws, what would have happened?"' },
            { label: 'Learner', text: '"They might not have changed. So maybe it can be right, if the law itself is wrong. But then who decides that?"' },
            { label: 'Note', text: 'The learner has reached a more careful position, and a better question, through their own reasoning.' },
          ],
        },
      ],
    },
    {
      id: 'seminar',
      title: 'Running a Socratic seminar',
      lead: 'Learners lead the questioning.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Choose a rich text', body: 'A passage, poem, image, source or problem that can be interpreted in more than one way.' },
            { title: 'Prepare', body: 'Learners read and annotate in advance and write two or three open questions of their own.' },
            { title: 'Set norms', body: 'Refer to the text; build on or challenge ideas, not people; invite quiet voices in; no hands needed.' },
            { title: 'Open with a question', body: 'Start with a genuinely open question. The teacher then steps back.' },
            { title: 'Fishbowl option', body: 'An inner circle discusses while an outer circle observes, tracking contributions or noting strong moves. Swap halfway.' },
            { title: 'Debrief', body: 'Reflect on both content and process: What did we understand better? How well did we listen?' },
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Sentence stems for learners',
          text: '"I agree with ___ because…", "I’d like to push back on that…", "Can you show us where in the text…?", "Building on what ___ said…", "I’m not sure I understand; could you explain…?"',
        },
      ],
    },
  ],
  sources: [
    'Paul, R., & Elder, L. (2007). *The thinker’s guide to the art of Socratic questioning*. Foundation for Critical Thinking.',
    'Copeland, M. (2005). *Socratic circles: Fostering critical and creative thinking in middle and high school*. Stenhouse.',
  ],
  related: ['teaching/techniques/questioning/questioning', 'teaching/taxonomies/blooms', 'teaching/techniques/active-learning/inquiry', 'teaching/subjects/talk'],
}

export default guide
