import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Learning a new language takes a huge amount of exposure and practice, and classroom time is short. Effective language teaching makes every minute count: lots of understandable input, explicit teaching of sounds, words and grammar, and many chances to speak and write.',
  nutshell: [
    'Learners need lots of **comprehensible input**: language they can mostly understand.',
    'Teach **phonics** (sound–spelling links), high-frequency **vocabulary** and core **grammar** explicitly.',
    'Learners also need **output**: speaking and writing push them to notice gaps.',
    'Recycle language constantly with retrieval and spacing.',
  ],
  sections: [
    {
      id: 'input-output',
      title: 'Input, output, interaction',
      blocks: [
        {
          t: 'cards',
          cols: 3,
          items: [
            { title: 'Input', body: 'Stephen Krashen argued that acquisition comes from understanding messages just beyond current level. Plenty of listening and reading that learners mostly understand is essential.' },
            { title: 'Output', body: 'Merrill Swain (1985) showed that producing language makes learners notice what they cannot yet say, and push their grammar forward.' },
            { title: 'Interaction', body: 'Michael Long highlighted conversation: negotiating meaning ("sorry, what do you mean?") gives tailored input and feedback.' },
          ],
        },
      ],
    },
    {
      id: 'three-pillars',
      title: 'Three pillars',
      lead: 'From the MFL Pedagogy Review (Teaching Schools Council, 2016).',
      blocks: [
        {
          t: 'terms',
          items: [
            { term: 'Phonics', def: 'Teach how the language’s sounds map to spellings, so learners can pronounce new words they read and spell words they hear. Without it, learners guess, and their pronunciation fossilises.' },
            { term: 'Vocabulary', def: 'Prioritise high-frequency words. Use [spaced flashcards](@memory/spaced-repetition), both directions, and meet words repeatedly in context. See [learning vocabulary](@memory/vocabulary).' },
            { term: 'Grammar', def: 'Teach key structures explicitly, then practise them in meaningful tasks. A meta-analysis found explicit instruction more effective than implicit exposure alone (Norris & Ortega, 2000).' },
          ],
        },
      ],
    },
    {
      id: 'classroom',
      title: 'In the classroom',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Use the target language for routines and much of teaching, with visuals and gestures to keep it understandable.',
            'Recycle vocabulary and structures across lessons and topics.',
            'Plan lots of short, structured speaking practice: pair drills, information gaps, surveys.',
            'Read and listen to plenty of accessible texts.',
            'Give focused feedback on key errors, not every error.',
          ],
          dont: [
            'Rely on topic-by-topic word lists that are never revisited.',
            'Teach grammar only as terminology, without meaningful practice.',
            'Let a few confident learners do all the speaking.',
            'Speak so fast or complexly in the target language that most learners are lost.',
          ],
        },
        {
          t: 'example',
          title: 'An information-gap task',
          lines: [
            { label: 'Setup', text: 'Partner A has a timetable with some times missing; partner B has the missing times.' },
            { label: 'Task', text: 'They ask and answer in the target language: "At what time is the train to Paris?"' },
            { label: 'Why', text: 'They must understand and be understood to complete the task, so the practice is meaningful and everyone speaks.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Krashen, S. D. (1982). *Principles and practice in second language acquisition*. Pergamon.',
    'Swain, M. (1985). Communicative competence: Some roles of comprehensible input and comprehensible output in its development. In S. Gass & C. Madden (Eds.), *Input in second language acquisition* (pp. 235–253). Newbury House.',
    'Norris, J. M., & Ortega, L. (2000). Effectiveness of L2 instruction: A research synthesis and quantitative meta-analysis. *Language Learning, 50*(3), 417–528.',
    'Teaching Schools Council. (2016). *Modern foreign languages pedagogy review*.',
  ],
  related: ['memory/vocabulary', 'teaching/differentiation/language-learners', 'memory/spaced-repetition'],
}

export default guide
