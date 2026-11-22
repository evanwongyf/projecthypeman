import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Some learning adds to what you know. Some learning changes how you see everything. Jack Mezirow’s theory of transformative learning is about the second kind: the moment a person’s assumptions about the world, themselves or their work are shaken by an experience they cannot explain and, after reflection, are rebuilt. It is mostly a theory of adult education, but it throws light on the way older students, trainee teachers, career-changers and anyone going through a major shift in outlook learn. This page explains frames of reference, the phases Mezirow described, how to create conditions for transformation and the criticisms.',
  nutshell: [
    'Mezirow (1978, 1991) said that adults learn by **changing their frames of reference**: the habits of mind and points of view through which they make sense of experience.',
    'A **disorienting dilemma**, such as a crisis, a death, a new culture or a challenging idea, can break an existing frame and trigger **critical reflection**.',
    'Transformation involves **critically examining assumptions**, **discussing them with others** and **acting** on the new perspective.',
    'Educators can create conditions: **safe, honest discussion**, **diverse perspectives**, **reflective writing** and **real experiences**.',
    'Critics note that the theory **over-stresses rational reflection**, **neglects emotion, context and power**, and is **hard to test**.',
  ],
  sections: [
    {
      id: 'frames',
      title: 'Frames of reference',
      blocks: [
        { t: 'p', text: 'Mezirow argued that people interpret experience through a frame of reference made up of two parts: habits of mind (broad, habitual ways of thinking shaped by culture, education and family) and the points of view they produce (specific beliefs, judgements and feelings). Most learning happens within a frame: we add facts and skills without changing how we see. Transformative learning changes the frame itself.' },
        {
          t: 'table',
          head: ['', 'Learning within a frame', 'Transformative learning'],
          rows: [
            ['What changes', 'What you know or can do', 'How you see the world and yourself'],
            ['Trigger', 'A task or a curriculum', 'A disorienting dilemma that the old frame cannot explain'],
            ['Process', 'Practice and study', 'Critical reflection, discussion and a revised perspective'],
            ['Example', 'A teacher learns a new marking technique', 'A teacher realises that she has assumed some students cannot learn, and begins to teach differently'],
          ],
        },
      ],
    },
    {
      id: 'phases',
      title: 'The phases of transformation',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: '1. A disorienting dilemma', body: 'An event or an idea that does not fit one’s assumptions: a failure, a loss, a different culture, a challenging reading.' },
            { title: '2. Self-examination', body: 'Feelings of fear, anger, guilt or shame as the old view is shaken.' },
            { title: '3. Critical assessment of assumptions', body: 'Asking where beliefs came from and whether they still hold.' },
            { title: '4. Recognition that others have shared similar change', body: 'Discussing with others and discovering one is not alone.' },
            { title: '5. Exploring new roles, relationships and actions', body: 'Trying out other ways of seeing and acting.' },
            { title: '6. Planning and acting', body: 'Gaining knowledge and skills to carry out a new course of action.' },
            { title: '7. Building competence and confidence', body: 'Trying the new roles and building confidence.' },
            { title: '8. Reintegration', body: 'Taking up a new life on the terms of the new perspective.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'Not a strict sequence', text: 'Mezirow listed ten phases and later work suggests people move through them unevenly. The central idea is that transformation involves a challenge, reflection and action.' },
      ],
    },
    {
      id: 'conditions',
      title: 'Creating the conditions',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'A safe space', body: 'Learners will not examine their assumptions if they fear ridicule. Establish respect and confidentiality.' },
            { title: 'Real experiences', body: 'Case studies, simulations, fieldwork and placements that put learners in situations that challenge their views.' },
            { title: 'Diverse perspectives', body: 'Readings, speakers and peers with different viewpoints, so that learners meet alternatives.' },
            { title: 'Critical reflection', body: 'Journals, learning conversations and structured questions: “What did I assume? How do I know? What else could be true?”' },
            { title: 'Dialogue', body: 'Discuss with others in groups where there is open, reasoned argument and time to listen.' },
            { title: 'Support to act', body: 'Help learners plan what to do differently, and follow up.' },
          ],
        },
        {
          t: 'example',
          title: 'A reflective prompt in a teacher-education course',
          lines: [
            { label: 'Event', text: 'During placement, a pupil you had judged as unmotivated showed you a notebook of drawings that he had filled at home.' },
            { label: 'Question 1', text: 'What did I assume about this pupil, and where did that come from?' },
            { label: 'Question 2', text: 'What did the notebook show that my assumption could not explain?' },
            { label: 'Question 3', text: 'What might I do differently, and what might I find out first?' },
          ],
        },
      ],
    },
    {
      id: 'critique',
      title: 'Criticisms',
      blocks: [
        {
          t: 'table',
          head: ['Criticism', 'Reply'],
          rows: [
            ['Over-rational: it underplays emotion, intuition and the body', 'Later writers added the role of emotion, relationships and spirituality'],
            ['Ignores context, culture and power: whose frames count?', 'Critical theorists (Brookfield, Freire) stress power and social action'],
            ['Individualistic: it focuses on the learner, not on social change', 'Mezirow later added the idea of collective, social transformation'],
            ['Hard to test and to measure', 'Research mostly uses interviews and narratives'],
            ['Can be used to push learners to adopt the educator’s views', 'Mezirow stressed open, critical, non-coercive discourse'],
          ],
        },
        { t: 'links', items: [{ path: 'teaching/guides/contexts/adults', note: 'Teaching adults' }, { path: 'teaching/guides/growth/reflection', note: 'Reflective practice' }, { path: 'teaching/philosophies/critical-pedagogy', note: 'Critical pedagogy' }] },
      ],
    },
  ],
  sources: [
    'Mezirow, J. (1991). Transformative Dimensions of Adult Learning. Jossey-Bass.',
    'Mezirow, J. and Associates (2000). Learning as Transformation. Jossey-Bass.',
    'Brookfield, S. D. (2017). Becoming a Critically Reflective Teacher (2nd ed.). Jossey-Bass.',
    'Taylor, E. W. (2007). An update of transformative learning theory: a critical review of the empirical research. International Journal of Lifelong Education.',
  ],
  related: ['teaching/guides/contexts/adults', 'teaching/guides/growth/reflection', 'teaching/philosophies/critical-pedagogy'],
}

export default guide
