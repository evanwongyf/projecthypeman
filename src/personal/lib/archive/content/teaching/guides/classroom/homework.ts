import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Homework can extend learning beyond the classroom, especially for older learners, but its value depends almost entirely on what is set and what happens to it afterwards. Short, purposeful tasks linked to lessons beat long, generic ones.',
  nutshell: [
    'Research finds a clearer link between homework and achievement in **secondary** school than in **primary**.',
    '**Quality over quantity**: a clear purpose matters more than time spent.',
    'Best purposes: **retrieval and spaced practice**, **fluency**, **preparation** for the next lesson.',
    'Give feedback or use homework in class; otherwise learners learn it does not matter.',
    'Watch for **equity**: not every learner has time, space, devices or help at home.',
  ],
  sections: [
    {
      id: 'evidence',
      title: 'What the evidence says',
      blocks: [
        {
          t: 'p',
          text: 'A review by Harris Cooper and colleagues (2006) found a positive link between homework and achievement that was stronger for secondary than primary learners. The Education Endowment Foundation’s Toolkit reports homework as having a moderate positive impact on average, larger in secondary, with the caveat that the quality of tasks and feedback matters most.',
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'The "10-minute rule"',
          text: 'Cooper suggested a rough guideline of about 10 minutes per night per grade level (for example, 60 minutes in grade 6). It is a guideline for total load across subjects, not a target.',
        },
      ],
    },
    {
      id: 'good-tasks',
      title: 'Good homework tasks',
      blocks: [
        {
          t: 'table',
          head: ['Purpose', 'Example'],
          rows: [
            ['Retrieval practice', 'A short quiz or flashcards covering last week’s and last month’s content. See [retrieval practice](@teaching/techniques/learning-strategies/retrieval-practice).'],
            ['Fluency', 'Times tables, vocabulary, spelling, short practice problems.'],
            ['Preparation', 'Reading a short text before a discussion lesson; watching a short video (see [flipped classroom](@teaching/techniques/active-learning/flipped)).'],
            ['Extension', 'Applying ideas to a real context: interviewing a family member, observing something at home.'],
            ['Redrafting', 'Improving a piece of work in response to feedback.'],
          ],
        },
        {
          t: 'dodont',
          do: [
            'Link every task to learning in class.',
            'Make tasks doable without adult help.',
            'Keep it short and clear, with a stated purpose.',
            'Use or check the homework in the next lesson.',
            'Offer a homework club or space in school for those who need it.',
          ],
          dont: [
            'Set "finish off" work that penalises slower learners.',
            'Set long craft projects that measure parents’ resources more than learning.',
            'Introduce brand-new content learners must teach themselves.',
            'Collect homework and never mention it again.',
          ],
        },
      ],
    },
  ],
  sources: [
    'Cooper, H., Robinson, J. C., & Patall, E. A. (2006). Does homework improve academic achievement? A synthesis of research, 1987–2003. *Review of Educational Research, 76*(1), 1–62.',
    'Education Endowment Foundation. *Teaching and Learning Toolkit: Homework*.',
  ],
  related: ['teaching/techniques/learning-strategies/retrieval-practice', 'teaching/guides/classroom/families', 'exams/revision-plan'],
}

export default guide
