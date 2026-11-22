import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Six composite cases showing common attention and retention problems and how the research changes what people do. Names and details are invented.',
  nutshell: [
    'Most problems come from **passive study**, **cramming** or **distraction**.',
    'The fixes are usually **retrieval, spacing, focus blocks and sleep**.',
  ],
  sections: [
    {
      id: 'cases',
      title: 'Cases',
      blocks: [
        { t: 'example', title: '1. The crammer', lines: [
          { label: 'Situation', text: 'Darren studies the night before every test and does well, but fails the end-of-year exam on the same content.' },
          { label: 'Diagnosis', text: 'Massed study builds retrieval strength for a day, not storage strength. Nothing was revisited.' },
          { label: 'Change', text: 'Three 20-minute sessions a week of self-quizzing on old topics; flashcards with a 1, 4, 10, 25-day schedule.' },
          { label: 'Result', text: 'Less stress before tests and higher marks on the cumulative exam.' },
        ] },
        { t: 'example', title: '2. The rereader', lines: [
          { label: 'Situation', text: 'Aisha rereads and highlights her notes three times and feels she knows them, but blanks in exams.' },
          { label: 'Diagnosis', text: 'Illusion of fluency: recognising notes feels like knowing them.' },
          { label: 'Change', text: 'Cover the notes, write what she remembers, then check (brain dump); turn headings into questions.' },
          { label: 'Result', text: 'Study feels harder; recall improves. She keeps the method after seeing her quiz scores rise.' },
        ] },
        { t: 'example', title: '3. The distracted class', lines: [
          { label: 'Situation', text: 'A Secondary 3 class drifts after about 15 minutes of explanation; phones appear.' },
          { label: 'Change', text: 'Explanations in 8-minute segments, each ending with a mini-whiteboard question; phones in bags at the start; a retrieval starter every lesson.' },
          { label: 'Result', text: 'Thought probes (“Were you thinking about the lesson just now?”) show on-task responses rising from about 55% to about 75% over a term.' },
        ] },
        { t: 'example', title: '4. The language learner', lines: [
          { label: 'Situation', text: 'Mei adds 80 new words a day to her flashcard app and quits after three weeks, buried in 400 reviews a day.' },
          { label: 'Diagnosis', text: 'Review load grows to roughly new cards × reviews per card; she never did the arithmetic.' },
          { label: 'Change', text: 'Cut to 15 new words a day; reviews level off near 80 a day (about 12 minutes).' },
          { label: 'Result', text: 'Slower start, but she is still going six months later with 2,700 words learned.' },
        ] },
        { t: 'example', title: '5. The all-nighter', lines: [
          { label: 'Situation', text: 'Ravi stays up all night before a chemistry exam and cannot recall reactions he knew well.' },
          { label: 'Diagnosis', text: 'Sleep deprivation impairs retrieval and reasoning; last-night learning was barely consolidated.' },
          { label: 'Change', text: 'A revision plan that finishes new learning three days before exams; sleep protected; light review in the morning.' },
        ] },
        { t: 'example', title: '6. The revision term', lines: [
          { label: 'Situation', text: 'A department reteaches each unit in turn during the last term before national exams.' },
          { label: 'Change', text: 'Weekly cumulative quizzes from the start of the year; revision term uses interleaved past-paper questions instead of reteaching.' },
          { label: 'Result', text: 'Students spend revision on retrieval rather than listening again; teachers target the most-missed topics from quiz data.' },
        ] },
      ],
    },
  ],
  related: ['attention/practice/planning-reviews', 'attention/retention/retrieval-practice', 'attention/attention/sustaining-attention-in-class'],
}

export default guide
