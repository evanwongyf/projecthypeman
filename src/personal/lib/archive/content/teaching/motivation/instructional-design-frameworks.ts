import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Instructional design frameworks are planning tools: they say what to decide, in what order, when building a lesson, course or training programme. They are mostly **process models and checklists** rather than tested theories, and the honest question to ask of each is "what is it good for?". This guide compares the six you are most likely to meet: ADDIE, Gagné’s nine events, Merrill’s first principles, the 5E model, Understanding by Design and ARCS.',
  nutshell: [
    '**ADDIE** (Analyse, Design, Develop, Implement, Evaluate) is a project process for building whole courses; **SAM** is its iterative, prototype-driven cousin.',
    '**Gagné’s nine events** is a sequence for **a single lesson**, from gaining attention to enhancing transfer.',
    '**Merrill’s first principles** distil what many design theories share: learning is promoted by **real tasks**, activation, demonstration, application and integration.',
    '**5E** (Engage, Explore, Explain, Elaborate, Evaluate) is an inquiry cycle widely used in science teaching.',
    '**Understanding by Design** plans **backwards** from desired results to evidence to activities; **ARCS** designs for motivation.',
    'Frameworks are heuristics: they help you avoid forgetting something, but few have been tested against alternatives.',
  ],
  sections: [
    {
      id: 'compare',
      title: 'The frameworks at a glance',
      blocks: [
        {
          t: 'table',
          head: ['Framework', 'Scope', 'Core steps', 'Best for', 'Weakness'],
          rows: [
            ['ADDIE', 'A whole course or programme', 'Analyse, Design, Develop, Implement, Evaluate', 'Large, formal training projects with stakeholders and sign-offs', 'Linear and slow; can lock in assumptions before testing them'],
            ['SAM (Successive Approximation Model)', 'A whole course, iteratively', 'Preparation, then repeated cycles of design, prototype, review', 'Projects where requirements are unclear', 'Needs fast feedback from real learners'],
            ['Gagné’s nine events', 'One lesson', 'Attention, objectives, recall, content, guidance, practice, feedback, assessment, transfer', 'Direct, skill-based teaching', 'Can be mechanical for open-ended inquiry'],
            ['Merrill’s first principles', 'Any instruction', 'Task, activation, demonstration, application, integration', 'Checking a design against what research agrees on', 'Principles, not a procedure'],
            ['5E model', 'A unit or lesson cycle', 'Engage, Explore, Explain, Elaborate, Evaluate', 'Science and inquiry lessons', 'Exploration needs good scaffolding or it wastes time'],
            ['Understanding by Design', 'A unit', 'Desired results, assessment evidence, learning plan', 'Aligning objectives, assessment and activities', 'Front-loads planning effort'],
            ['ARCS', 'The motivational layer', 'Attention, Relevance, Confidence, Satisfaction', 'Fixing or designing for engagement', 'Says little about content or sequencing'],
          ],
        },
      ],
    },
    {
      id: 'addie',
      title: 'ADDIE and SAM: building a course',
      blocks: [
        {
          t: 'flow',
          title: 'ADDIE',
          nodes: [
            { label: 'Analyse', sub: 'who are the learners? what is the gap? what are the constraints?', tone: 'data' },
            { label: 'Design', sub: 'objectives, assessment, structure, strategies', tone: 'process' },
            { label: 'Develop', sub: 'build materials and tests', tone: 'process' },
            { label: 'Implement', sub: 'deliver, train facilitators', tone: 'model' },
            { label: 'Evaluate', sub: 'did it work? (see Kirkpatrick’s levels)', tone: 'output' },
          ],
          loop: 'evaluation feeds back into analysis',
          caption: 'In practice evaluation happens at every stage, not only at the end, and ADDIE is rarely strictly one-way.',
        },
        { t: 'p', text: 'ADDIE’s origins are in military and industrial training in the 1970s. It is a useful **project-management skeleton** for building something large, because it forces the analysis questions up front (what is the real problem? is training even the solution?). Its main criticism is that a strict waterfall delays contact with real learners. The Successive Approximation Model (Allen) answers this with short iterative cycles of design, prototype and review. Match the model to the project: stable requirements favour ADDIE, uncertain ones SAM.' },
        { t: 'p', text: 'To evaluate the finished course, see [Kirkpatrick’s evaluation levels](@teaching/taxonomies/kirkpatrick).' },
      ],
    },
    {
      id: 'gagne',
      title: 'Gagné’s nine events of instruction',
      lead: 'A sequence for one lesson.',
      blocks: [
        { t: 'p', text: 'Robert Gagné matched events of instruction to the internal processes of learning described by information-processing theory. The nine events are a checklist for the shape of a lesson.' },
        {
          t: 'steps',
          items: [
            { title: '1. Gain attention', body: 'A problem, a surprise or a question that prepares the mind to learn.' },
            { title: '2. State the objective', body: 'Tell learners what they will be able to do, so they can see the point.' },
            { title: '3. Stimulate recall of prior learning', body: 'Activate what they already know that the new material builds on.' },
            { title: '4. Present the content', body: 'Show the new material in clear chunks with examples and non-examples.' },
            { title: '5. Provide learning guidance', body: 'Support with worked examples, analogies, mnemonics and prompts.' },
            { title: '6. Elicit performance', body: 'Have learners practise, so that understanding is shown, not assumed.' },
            { title: '7. Provide feedback', body: 'Tell them what was right, what was not, and what to do next.' },
            { title: '8. Assess performance', body: 'A check, separate from practice, of whether the objective is met.' },
            { title: '9. Enhance retention and transfer', body: 'Spaced review and varied application to new situations.' },
          ],
        },
        { t: 'p', text: 'The nine events line up well with research on explicit instruction: see [Rosenshine’s principles](@teaching/techniques/instruction/rosenshine), [worked examples](@teaching/techniques/instruction/worked-examples) and [retrieval practice](@teaching/techniques/learning-strategies/retrieval-practice). For the kinds of outcome each event is designed to produce, see [Gagné’s learning outcomes](@teaching/taxonomies/gagne-outcomes).' },
      ],
    },
    {
      id: 'merrill',
      title: 'Merrill’s first principles',
      lead: 'What the theories agree on.',
      blocks: [
        { t: 'p', text: 'M. David Merrill (2002) reviewed a range of instructional design theories and found five principles on which they largely agree. Unlike a procedure, they are a test you can put any design through: if a course lacks one of them, expect learning to suffer.' },
        {
          t: 'cards',
          cols: 3,
          items: [
            { title: 'Task-centred', tag: 'principle 1', body: 'Learning is promoted when learners tackle real-world problems, graded from simple to complex.' },
            { title: 'Activation', tag: 'principle 2', body: 'Learning is promoted when existing knowledge is activated as a foundation for new knowledge.' },
            { title: 'Demonstration', tag: 'principle 3', body: 'Learning is promoted when the skill is demonstrated, not only told.' },
            { title: 'Application', tag: 'principle 4', body: 'Learning is promoted when learners apply new knowledge, with feedback and coaching that fades.' },
            { title: 'Integration', tag: 'principle 5', body: 'Learning is promoted when learners show, reflect on and discuss what they have learned and use it in their own lives.' },
          ],
        },
      ],
    },
    {
      id: 'fivee',
      title: 'The 5E model',
      lead: 'An inquiry cycle.',
      blocks: [
        { t: 'p', text: 'Developed by Rodger Bybee and colleagues at the Biological Sciences Curriculum Study in the late 1980s, building on a learning-cycle tradition, the 5E model organises a sequence of lessons around inquiry.' },
        {
          t: 'cycle',
          items: [
            { name: 'Engage', body: 'Raise a question or phenomenon that connects to prior knowledge and surfaces misconceptions.' },
            { name: 'Explore', body: 'Learners investigate hands-on, with the teacher as facilitator, before the concept is named.' },
            { name: 'Explain', body: 'Learners put the ideas into words, and the teacher introduces the vocabulary and the formal concept.' },
            { name: 'Elaborate', body: 'Apply and extend the concept to new situations, deepening understanding.' },
            { name: 'Evaluate', body: 'Check understanding and the learners’ ability, throughout and at the end.' },
          ],
          caption: 'A caution from cognitive load research: exploring before explaining can waste time for novices, so the Explore phase needs guidance and clear aims. See [inquiry learning](@teaching/techniques/active-learning/inquiry) and [cognitive load](@teaching/theories/cognitive-load).',
        },
      ],
    },
    {
      id: 'ubd',
      title: 'Understanding by Design',
      blocks: [
        { t: 'p', text: 'Grant Wiggins and Jay McTighe’s **backward design** plans in three stages: (1) identify the desired results, (2) determine acceptable evidence, and (3) plan learning experiences and instruction. Putting assessment before activities keeps the plan aligned: every activity should help learners meet the objective or produce the evidence. The full treatment, with templates, is in [backward design](@teaching/guides/planning/backward-design) and [alignment](@teaching/assessment/alignment).' },
      ],
    },
    {
      id: 'choose',
      title: 'Choosing and combining',
      blocks: [
        { t: 'p', text: 'The frameworks work at different levels, so they combine well. A typical stack: **ADDIE** or **SAM** to manage the project; **Understanding by Design** to align objectives, assessment and activities for each unit; **Gagné** or **5E** to shape each lesson; **Merrill** to check the whole design; and **ARCS** to make sure learners will care. Keep the choice proportionate: a single lesson needs a checklist, not a design project.' },
        { t: 'callout', tone: 'warn', title: 'About the evidence', text: 'These frameworks have been influential for decades, but they are mostly planning conventions. Few have been tested head-to-head, and "following the framework" is not the same as effective teaching. Judge a design by what the research says about its parts (retrieval, worked examples, feedback, motivation) rather than by the label on the template.' },
      ],
    },
  ],
  sources: [
    'Gagné, R. M., Wager, W. W., Golas, K. C., & Keller, J. M. (2005). *Principles of Instructional Design* (5th ed.). Wadsworth.',
    'Merrill, M. D. (2002). First principles of instruction. *Educational Technology Research and Development*, 50(3), 43–59.',
    'Bybee, R. W., et al. (2006). *The BSCS 5E Instructional Model: Origins and Effectiveness*. BSCS.',
    'Wiggins, G., & McTighe, J. (2005). *Understanding by Design* (2nd ed.). ASCD.',
    'Allen, M. W. (2012). *Leaving ADDIE for SAM*. ASTD Press.',
    'Keller, J. M. (2010). *Motivational Design for Learning and Performance*. Springer.',
  ],
  related: ['teaching/guides/planning/backward-design', 'teaching/guides/planning/models', 'teaching/taxonomies/gagne-outcomes', 'teaching/taxonomies/kirkpatrick', 'teaching/motivation/designing-for-motivation'],
}

export default guide
