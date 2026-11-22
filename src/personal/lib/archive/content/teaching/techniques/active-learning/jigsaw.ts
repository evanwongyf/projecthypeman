import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'In a jigsaw, each member of a group learns one piece of a topic in depth, then teaches it to the rest of their group. Nobody can complete the picture alone, so everyone depends on everyone else.',
  nutshell: [
    'Home groups split a topic; each member joins an **expert group** to master one piece; experts return **home** to teach it.',
    'Designed by Elliot Aronson in 1971 to reduce competition and prejudice in newly desegregated classrooms.',
    'Builds interdependence: every piece is needed.',
    'Watch quality: learners teaching each other can spread errors, so check the experts before they return.',
  ],
  sections: [
    {
      id: 'steps',
      title: 'Running a jigsaw',
      lead: 'Step by step.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Divide the topic', body: 'Split the content into 4–5 roughly equal pieces. Each should make sense alone. *Example: causes of WW1 split into militarism, alliances, imperialism, nationalism, the assassination.*' },
            { title: 'Form home groups', body: 'Groups of 4–5, with one member per piece.' },
            { title: 'Expert groups', body: 'All learners with the same piece meet together to read, discuss and master it. Give them a guide sheet with key questions.' },
            { title: 'Check the experts', body: 'Circulate, or give a short quiz, to make sure each expert group has got it right before they teach.' },
            { title: 'Teach at home', body: 'Experts return and teach their piece to their home group, who take notes on a shared organiser.' },
            { title: 'Pull it together', body: 'A task that requires all pieces: rank the causes, write a summary, answer a question that links them.' },
            { title: 'Individual check', body: 'Everyone is assessed on all pieces, so each learner is accountable for listening, not only for teaching.' },
          ],
        },
      ],
    },
    {
      id: 'origins',
      title: 'Where it came from',
      blocks: [
        {
          t: 'p',
          text: 'In 1971 Elliot Aronson was asked to help schools in Austin, Texas, where newly integrated classrooms were tense and competitive. He designed the jigsaw so that learners had to cooperate and listen to each other to succeed. Studies reported increased liking across groups, higher self-esteem and reduced prejudice, with academic results at least as good as traditional teaching (Aronson et al., 1978).',
        },
      ],
    },
    {
      id: 'tips',
      title: 'Tips and pitfalls',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Give expert groups a clear guide: key questions, key terms, what to teach.',
            'Provide a note-taking organiser with a section for each piece.',
            'Mix learners thoughtfully; support weaker readers in expert groups with adapted texts.',
            'Test individually on everything.',
          ],
          dont: [
            'Assume experts have understood their piece correctly.',
            'Use it for content where each piece depends on the one before (a jigsaw works best with parallel pieces).',
            'Let the home-group phase become reading notes aloud.',
          ],
        },
      ],
    },
  ],
  sources: [
    'Aronson, E., Blaney, N., Stephan, C., Sikes, J., & Snapp, M. (1978). *The jigsaw classroom*. Sage.',
    'Aronson, E., & Patnoe, S. (2011). *Cooperation in the classroom: The jigsaw method* (3rd ed.). Pinter & Martin.',
  ],
  related: ['teaching/techniques/active-learning/cooperative', 'teaching/techniques/learning-strategies/feynman', 'teaching/differentiation/grouping'],
}

export default guide
