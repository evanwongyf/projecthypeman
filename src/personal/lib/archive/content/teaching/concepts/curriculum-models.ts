import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A curriculum is more than a list of topics. It is an answer to the question of what a society wants its young people to learn, in what order, and why. Different thinkers have answered it differently: as objectives to be met, as a process to be lived, as a spiral that returns to big ideas, or as a body of knowledge to be handed on. This page compares four influential models (Tyler’s objectives model, Stenhouse’s process model, Bruner’s spiral curriculum and the knowledge-rich curriculum) and the ways of thinking about a curriculum as content, product, process and praxis.',
  nutshell: [
    '**Ralph Tyler** (1949) proposed four questions: what **purposes**, what **experiences**, how to **organise** them, how to **evaluate**. This is the **objectives model**.',
    '**Lawrence Stenhouse** (1975) argued that curriculum is a **process** and a **proposal to be tested** by teachers, not a set of objectives to be hit.',
    '**Jerome Bruner** (1960) proposed a **spiral curriculum**: return to big ideas at increasing depth.',
    'The **knowledge-rich** view says a curriculum should **specify the powerful knowledge** and **sequence** it carefully.',
    'Curriculum can be seen as **content, product, process or praxis**; each answers a different question and has a different strength.',
  ],
  sections: [
    {
      id: 'tyler',
      title: 'Tyler: the objectives model',
      blocks: [
        { t: 'p', text: 'In *Basic Principles of Curriculum and Instruction* (1949), Ralph Tyler set out four questions that every curriculum should answer. The model is a rational, linear plan: begin with the aims, and let everything follow from them.' },
        {
          t: 'steps',
          items: [
            { title: '1. What educational purposes should the school seek to attain?', body: 'Set objectives, drawing on studies of learners, of contemporary life and on subject specialists, filtered through a philosophy and psychology of learning.' },
            { title: '2. What educational experiences will attain these purposes?', body: 'Select activities that give students the chance to practise the behaviour the objective names.' },
            { title: '3. How can they be effectively organised?', body: 'Sequence and integrate experiences so that they build: continuity, sequence and integration.' },
            { title: '4. How can we know the purposes are being attained?', body: 'Evaluate against the objectives.' },
          ],
        },
        {
          t: 'table',
          head: ['Strength', 'Limit'],
          rows: [
            ['Clear and systematic; links aims, teaching and assessment', 'Treats learning as achieving pre-set, measurable behaviours'],
            ['Basis of much modern planning (backward design, learning outcomes)', 'Can narrow learning to what can be measured and ignore unplanned outcomes'],
            ['Easy to communicate and to audit', 'Poorly suited to subjects of open inquiry, such as the arts and humanities'],
          ],
        },
      ],
    },
    {
      id: 'stenhouse',
      title: 'Stenhouse: the process model',
      blocks: [
        { t: 'p', text: 'Lawrence Stenhouse led the Humanities Curriculum Project in England in the 1960s and 70s and criticised the objectives model for subjects where the point is the quality of thinking, not a fixed outcome. In *An Introduction to Curriculum Research and Development* (1975) he argued that a curriculum is an attempt to communicate the essential principles and features of an educational proposal in a form open to critical scrutiny and capable of effective translation into practice. The curriculum specifies the content and the procedural principles (for example, that the teacher should act as a neutral chairman of discussion on controversial topics), and the teacher tests it in the classroom.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Curriculum as hypothesis', body: 'A proposal to be tested, not a prescription to be delivered. Teachers are researchers.' },
            { title: 'Teacher as researcher', body: '“There can be no curriculum development without teacher development.” Teachers investigate their own practice.' },
            { title: 'Content has intrinsic worth', body: 'The criterion is the quality of the experience and its worth as knowledge, not pre-set behavioural targets.' },
            { title: 'Procedural principles', body: 'The way of working (such as discussion, enquiry) is part of what is taught.' },
          ],
        },
      ],
    },
    {
      id: 'bruner',
      title: 'Bruner: the spiral curriculum',
      blocks: [
        { t: 'p', text: 'In *The Process of Education* (1960), Jerome Bruner proposed that any subject can be taught effectively in some intellectually honest form to any child at any stage of development. The way is to start with the fundamental structure, the big ideas, in a form the child can grasp, and to revisit them repeatedly at greater depth: a spiral.' },
        {
          t: 'example',
          title: 'A spiral for fractions',
          lines: [
            { label: 'Early primary', text: 'Share objects equally: halves and quarters of paper and pizza (enactive, concrete).' },
            { label: 'Upper primary', text: 'Fractions on a number line, and equivalent fractions with bars and pictures (iconic).' },
            { label: 'Lower secondary', text: 'Operations with fractions and algebraic fractions (symbolic).' },
            { label: 'Later', text: 'Rational functions and limits, built on the same idea of parts of a whole and ratio.' },
          ],
        },
        { t: 'links', items: [{ path: 'teaching/theories/social-constructivism', note: 'Bruner and scaffolding' }, { path: 'teaching/guides/planning/unit-plan', note: 'Planning a unit' }] },
      ],
    },
    {
      id: 'knowledge',
      title: 'The knowledge-rich curriculum',
      blocks: [
        { t: 'p', text: 'A recent view, associated with E. D. Hirsch and with Michael Young’s idea of “powerful knowledge”, holds that a curriculum should explicitly specify the substantive knowledge students are to learn, sequence it so that later learning builds on earlier, and ensure that all students, not only the advantaged, have access to it. It draws on cognitive science: knowledge is the basis for thinking, and prior knowledge drives comprehension.' },
        {
          t: 'table',
          head: ['Model', 'Core question', 'Planning starts with', 'Role of the teacher'],
          rows: [
            ['Tyler (objectives)', 'What do we want students to be able to do?', 'Measurable objectives', 'Implements the plan'],
            ['Stenhouse (process)', 'What worthwhile experiences will develop understanding?', 'Content and principles of procedure', 'Researcher who tests the proposal'],
            ['Bruner (spiral)', 'What are the big ideas, and how can they be revisited?', 'The structure of the subject', 'Guide who scaffolds'],
            ['Knowledge-rich', 'What knowledge should every student have?', 'A sequenced body of knowledge', 'Expert who teaches it explicitly'],
          ],
        },
      ],
    },
    {
      id: 'views',
      title: 'Four ways of seeing a curriculum',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Content', title: 'A body of knowledge to transmit', body: 'The syllabus is a list of topics. Strong on clarity and equal access; weak on how learning happens.' },
            { tag: 'Product', title: 'A set of outcomes to achieve', body: 'The Tyler view: objectives, assessment, accountability. Strong on clarity; weak on the unmeasurable.' },
            { tag: 'Process', title: 'The interaction of teachers and learners', body: 'The Stenhouse view: what actually happens in classrooms. Strong on quality of experience; harder to specify and compare.' },
            { tag: 'Praxis', title: 'Informed, committed action for change', body: 'The critical view: curriculum as a practice of freedom and a tool for change (Freire, Grundy).' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Use all four', text: 'A good curriculum states the knowledge and outcomes clearly (content and product), attends to what students actually do (process), and asks what it is for (praxis).' },
      ],
    },
  ],
  sources: [
    'Tyler, R. W. (1949). Basic Principles of Curriculum and Instruction. University of Chicago Press.',
    'Stenhouse, L. (1975). An Introduction to Curriculum Research and Development. Heinemann.',
    'Bruner, J. S. (1960). The Process of Education. Harvard University Press.',
    'Young, M. (2008). Bringing Knowledge Back In. Routledge.',
    'Kelly, A. V. (2009). The Curriculum: Theory and Practice (6th ed.). Sage.',
  ],
  related: ['teaching/guides/planning/backward-design', 'teaching/philosophies/essentialism', 'teaching/concepts/hidden-curriculum'],
}

export default guide
