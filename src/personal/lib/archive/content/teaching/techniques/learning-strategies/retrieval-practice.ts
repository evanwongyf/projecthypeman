import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Retrieval practice means deliberately recalling what you have learned, instead of re-reading it. Every time you pull a memory out, it becomes stronger and easier to find next time. It is one of the most reliable findings in learning science.',
  nutshell: [
    'Testing is not just a way to measure learning; it **causes** learning. This is called the testing effect.',
    'Retrieval beats re-reading and highlighting for long-term memory, even though re-reading feels more productive.',
    'It works best when it is effortful, low-stakes, spaced out over time and followed by feedback.',
    'Easy ways in: flashcards, brain dumps, practice questions, and quick quizzes at the start of lessons.',
  ],
  sections: [
    {
      id: 'evidence',
      title: 'The testing effect',
      lead: 'Why getting it out beats putting it in.',
      blocks: [
        {
          t: 'p',
          text: 'In a well-known study, Roediger and Karpicke (2006) had students read a prose passage. Some then re-read it; others took a recall test with no feedback. Five minutes later, the re-readers remembered slightly more. But a week later the picture flipped: the students who had practised retrieval remembered far more.',
        },
        {
          t: 'table',
          head: ['Strategy', 'Feels like', 'Long-term result'],
          rows: [
            ['Re-reading notes', 'Smooth and familiar. "I know this."', 'Weak. Familiarity is mistaken for knowing.'],
            ['Highlighting', 'Busy and productive.', 'Weak on its own (Dunlosky et al., 2013).'],
            ['Retrieval practice', 'Effortful. Some answers will not come.', 'Strong. Rated "high utility" in the same review.'],
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Desirable difficulties',
          text: 'Robert Bjork coined this term for conditions that make learning feel harder but make it last longer: retrieval, spacing, interleaving. The struggle to recall is not a sign of failure; it is the workout that builds the memory.',
        },
      ],
    },
    {
      id: 'methods',
      title: 'Ways to practise retrieval',
      lead: 'Pick a few and use them often.',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Brain dump', body: 'Blank page, set a timer for five minutes, write everything you remember about a topic. Then check your notes and fill gaps in another colour.' },
            { title: 'Flashcards', body: 'Question on one side, answer on the other. Say or write the answer **before** flipping. Keep cards you get wrong in play until you get them right several times.' },
            { title: 'Practice questions', body: 'Past papers, end-of-chapter questions, or questions you write yourself while studying.' },
            { title: 'Retrieval grids', body: 'A grid of questions from last lesson, last week and last term, answered in the first ten minutes of a lesson.' },
            { title: 'Explain it', body: 'Explain a topic from memory to someone else or to a blank page. See [the Feynman technique](@teaching/techniques/learning-strategies/feynman).' },
            { title: 'Concept maps from memory', body: 'Draw a map of the topic without notes, then compare with the source.' },
          ],
        },
      ],
    },
    {
      id: 'doing-it-well',
      title: 'Doing it well',
      lead: 'Five principles.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Recall before you check', body: 'Commit to an answer, even a guess, before looking. Recognising the right answer is much easier than producing it and teaches much less.' },
            { title: 'Get feedback', body: 'Check your answers and correct mistakes, or wrong answers can stick. Feedback can come right after, or a little later.' },
            { title: 'Space it out', body: 'Retrieve the same material again after a day, a week, a month. See [spaced practice](@teaching/techniques/learning-strategies/spaced-practice).' },
            { title: 'Keep stakes low', body: 'Retrieval is practice, not judgement. Frequent, ungraded quizzes build learning without anxiety.' },
            { title: 'Go beyond definitions', body: 'Mix in questions that ask why, how and what if, so you retrieve understanding and not only facts.' },
          ],
        },
      ],
    },
    {
      id: 'classroom',
      title: 'In the classroom',
      lead: 'Low effort, high return.',
      blocks: [
        {
          t: 'example',
          title: 'A five-minute retrieval starter',
          lines: [
            { label: 'Q1', text: 'From last lesson: What is the function of the mitochondria?' },
            { label: 'Q2', text: 'From last week: Name two differences between plant and animal cells.' },
            { label: 'Q3', text: 'From last month: What does a catalyst do?' },
            { label: 'Q4', text: 'Stretch: Why might a muscle cell have more mitochondria than a skin cell?' },
            { label: 'Then', text: 'Learners answer alone, in silence, on mini whiteboards or paper. Reveal answers, learners self-mark, teacher notes common gaps.' },
          ],
        },
        {
          t: 'dodont',
          do: [
            'Make it routine: a quiz at the start of most lessons.',
            'Include material from weeks and months ago, not just last lesson.',
            'Have every learner answer (whiteboards, paper) rather than taking hands up.',
            'Use the results to decide what to reteach.',
          ],
          dont: [
            'Grade every quiz; it turns practice into pressure.',
            'Only ask for single-word definitions.',
            'Give the answers before learners have tried.',
          ],
        },
      ],
    },
  ],
  sources: [
    'Roediger, H. L., & Karpicke, J. D. (2006). Test-enhanced learning: Taking memory tests improves long-term retention. *Psychological Science, 17*(3), 249–255.',
    'Karpicke, J. D., & Blunt, J. R. (2011). Retrieval practice produces more learning than elaborative studying with concept mapping. *Science, 331*(6018), 772–775.',
    'Dunlosky, J., et al. (2013). Improving students’ learning with effective learning techniques. *Psychological Science in the Public Interest, 14*(1), 4–58.',
    'Agarwal, P. K., & Bain, P. M. (2019). *Powerful teaching: Unleash the science of learning*. Jossey-Bass.',
    'Bjork, E. L., & Bjork, R. A. (2011). Making things hard on yourself, but in a good way. In *Psychology and the real world* (pp. 56–64). Worth.',
  ],
  related: ['teaching/techniques/learning-strategies/spaced-practice', 'teaching/techniques/learning-strategies/feynman', 'teaching/techniques/questioning/checking-understanding', 'teaching/theories/cognitivism'],
}

export default guide
