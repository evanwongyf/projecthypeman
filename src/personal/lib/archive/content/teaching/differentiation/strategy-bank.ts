import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Thirty differentiation strategies, grouped by what they adjust, with a one-line description, when to use each, and what to watch for. No class needs all of them; most teachers settle on five or six they know well.',
  nutshell: [
    'Pick strategies by the **evidence you have** (readiness data → tiering, compacting; interest data → choice, RAFT).',
    'Start with **low-preparation** strategies (scaffolds on request, choice of question sets, flexible grouping) before high-preparation ones (stations, contracts).',
  ],
  sections: [
    {
      id: 'readiness',
      title: 'Readiness strategies',
      blocks: [
        { t: 'table', head: ['Strategy', 'How', 'Use when', 'Watch for'], rows: [
          ['Tiered assignments', 'Same goal, 2–3 versions of a task differing in complexity or support', 'Pre-assessment shows a wide spread', 'Equal interest across tiers; same goal'],
          ['Curriculum compacting', 'Pre-test; skip mastered content; replace with enrichment', 'Some learners already know the unit', 'Enrichment must be real work, not busy work'],
          ['Tiered questions', 'Plan questions at different levels; direct them thoughtfully', 'Whole-class discussion', 'Push every learner up a level'],
          ['Mild, hot, spicy', 'Three sets of practice; learners choose and can move up', 'Practice phase', 'Coach choices if learners always pick mild'],
          ['Teacher table / small-group instruction', 'Pull 4–6 learners for reteaching or extension', 'Exit tickets show a cluster of errors', 'Others need an independent task'],
          ['Hint cards', 'Envelopes with graduated hints', 'Problem solving', 'Encourage trying first'],
          ['Worked-example fading', 'Full example, then partial, then none', 'New procedures', 'Fade at the learner’s pace'],
          ['Learning ladders', 'A sequence of steps with criteria; learners track progress', 'Skills that build cumulatively', 'Keep visible but private'],
          ['Peer tutoring (structured)', 'Trained pairs with roles and scripts', 'Practice and review', 'Tutors should also learn; rotate'],
          ['Entry and exit points', 'Different starting points into the same task', 'Open problems', 'Everyone reaches the core'],
        ] },
      ],
    },
    {
      id: 'interest',
      title: 'Interest and choice strategies',
      blocks: [
        { t: 'table', head: ['Strategy', 'How', 'Use when'], rows: [
          ['Choice boards (tic-tac-toe)', 'Nine tasks; learners complete three in a line', 'Consolidation, homework'],
          ['Learning menus', 'Appetiser (required), main (choose one), dessert (optional)', 'A unit of work'],
          ['RAFT', 'Choose a role, audience, format and topic', 'Writing for different purposes'],
          ['Interest centres', 'Stations on topics linked to the unit', 'Exploration and enrichment'],
          ['Orbital studies', 'Three-to-six-week independent investigations on a topic orbiting the curriculum', 'Advanced or highly interested learners'],
          ['Literature circles', 'Groups read different books on a theme, with roles', 'Reading'],
          ['Jigsaw by interest', 'Expert groups choose sub-topics, then teach home groups', 'Content-heavy units'],
          ['Genius hour / passion projects', 'Regular time for self-chosen inquiry', 'Building self-direction'],
        ] },
      ],
    },
    {
      id: 'process',
      title: 'Process and structure strategies',
      blocks: [
        { t: 'table', head: ['Strategy', 'How', 'Use when'], rows: [
          ['Anchor activities', 'Meaningful ongoing tasks learners go to when finished', 'Every differentiated lesson'],
          ['Learning stations', 'Rotating groups through different tasks', 'Practice of several skills'],
          ['Learning contracts', 'Agreed tasks, deadlines and criteria for a period', 'Independent learners; extended units'],
          ['Cubing', 'A cube with six prompts (describe, compare, associate, analyse, apply, argue); different cubes for different readiness', 'Thinking about a topic from several angles'],
          ['Think-dots', 'Six question cards chosen by dice roll', 'Review with variety'],
          ['Graphic organisers at different levels', 'More or less pre-filled structure', 'Reading and writing'],
          ['Flexible grouping', 'Groups by readiness, interest, mix or random, changed often', 'All the time'],
          ['Agenda or playlist', 'A personal list of tasks for the week', 'Blended and self-paced learning'],
          ['Socratic seminar with roles', 'Inner and outer circle, question stems', 'Discussion of texts'],
          ['Universal scaffolds', 'Word banks, sentence frames, models available to all', 'Language-heavy tasks'],
          ['Adaptive digital practice', 'Software adjusts difficulty to responses', 'Skills practice; frees teacher time'],
          ['Mastery checks with reteach/extend', 'Short check; regroup for reteaching or extension', 'Sequential skills'],
        ] },
      ],
    },
  ],
  sources: [
    'Tomlinson, C. A. (2017). How to Differentiate Instruction in Academically Diverse Classrooms (3rd ed.). ASCD.',
    'Heacox, D. (2012). Differentiating Instruction in the Regular Classroom (updated ed.). Free Spirit.',
    'Reis, S. M., & Renzulli, J. S. (1992). Using curriculum compacting to challenge the above-average. Educational Leadership, 50(2), 51–57.',
  ],
  related: ['teaching/differentiation/tiered', 'teaching/differentiation/choice', 'teaching/differentiation/managing-a-differentiated-class'],
}

export default guide
