import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Teachers can build retention into the structure of lessons and terms, so that students benefit from spacing and retrieval even if they never study on their own. The changes are small: start lessons with retrieval, set homework that revisits old topics, make quizzes cumulative, and mix problem types.',
  nutshell: [
    '**Retrieval starters**: begin lessons with questions on last lesson, last week and last term.',
    '**Spaced homework**: part of every homework revisits older topics.',
    '**Cumulative quizzes and tests**: every test includes earlier material, so nothing is “done”.',
    '**Interleaved practice**: once methods are learned, mix problem types.',
  ],
  sections: [
    {
      id: 'routines',
      title: 'Routines',
      blocks: [
        { t: 'table', head: ['Routine', 'How', 'Time'], rows: [
          ['Last lesson, last week, last term', 'Three or more questions at the start, from three time gaps', '5–8 min'],
          ['Brain dump', '“Write everything you remember about…”, then check notes in a different colour', '5 min'],
          ['Exit ticket', 'One or two questions at the end; used to plan the next lesson', '3 min'],
          ['Spaced homework', '60% current topic, 40% older topics', '-'],
          ['Cumulative weekly quiz', 'Low-stakes, includes all topics so far', '10 min'],
          ['Interleaved problem sets', 'After teaching three methods, mix them', 'In practice time'],
          ['Knowledge organisers', 'One page of key facts per unit, used for self-quizzing', 'Ongoing'],
        ] },
      ],
    },
    {
      id: 'term',
      title: 'A term plan with built-in spacing',
      blocks: [
        { t: 'table', head: ['Week', 'Main teaching', 'Retrieval of', 'Assessment'], rows: [
          ['1', 'Unit 1', 'Last year’s prerequisites', '-'],
          ['2', 'Unit 1', 'Unit 1 (week 1)', 'Quiz: unit 1'],
          ['3', 'Unit 2', 'Unit 1', '-'],
          ['4', 'Unit 2', 'Units 1–2', 'Quiz: units 1–2'],
          ['5', 'Unit 3', 'Unit 1 (spaced) and unit 2', '-'],
          ['6', 'Unit 3', 'Units 1–3 mixed', 'Cumulative test'],
          ['7', 'Unit 4', 'Units 2–3', '-'],
          ['8', 'Unit 4', 'Units 1–4 mixed', 'Cumulative quiz'],
          ['9–10', 'Consolidation, mixed problems', 'All units', 'End-of-term test'],
        ] },
      ],
    },
    {
      id: 'evidence',
      title: 'Evidence from classrooms',
      blocks: [
        { t: 'p', text: 'Classroom studies support these routines. Low-stakes quizzing in middle-school science and social studies raised later exam performance on quizzed material (Roediger, Agarwal and colleagues, 2011). Cumulative final exams led to better long-term retention than non-cumulative ones (Lawrence, 2013). Interleaved maths homework produced large gains on delayed tests in a randomised trial in US middle schools (Rohrer et al., 2020).' },
      ],
    },
  ],
  sources: [
    'Agarwal, P. K., & Bain, P. M. (2019). Powerful Teaching: Unleash the Science of Learning. Jossey-Bass.',
    'Roediger, H. L. et al. (2011). Test-enhanced learning in the classroom. Journal of Experimental Psychology: Applied, 17(4), 382–395.',
    'Rohrer, D. et al. (2020). A randomized controlled trial of interleaved mathematics practice. Journal of Educational Psychology, 112(1), 40–52.',
    'Lawrence, N. K. (2013). Cumulative exams in the introductory psychology course. Teaching of Psychology, 40(1), 15–19.',
  ],
  related: ['teaching/techniques/questioning/starters-plenaries', 'attention/retention/retrieval-practice', 'attention/retention/desirable-difficulties'],
}

export default guide
