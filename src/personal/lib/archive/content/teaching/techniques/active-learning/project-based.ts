import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'In project-based learning (PBL), learners spend an extended period investigating a real question or problem and produce something that is shared with an audience beyond the teacher. Done well, the project is the unit, not a fun extra at the end of it.',
  nutshell: [
    'Built around a **driving question** that the project answers.',
    'Learners must learn and apply knowledge and skills to complete it.',
    'Includes cycles of **critique and revision** and ends in a **public product**.',
    'Needs careful planning of what knowledge learners will need and when to teach it.',
  ],
  sections: [
    {
      id: 'elements',
      title: 'Gold Standard PBL',
      lead: 'Seven design elements from PBLWorks.',
      blocks: [
        {
          t: 'cards',
          items: [
            { tag: '1', title: 'Challenging problem or question', body: 'A meaningful problem to solve or question to answer, at the right level of challenge.' },
            { tag: '2', title: 'Sustained inquiry', body: 'A rigorous process of asking questions, finding resources and applying information over time.' },
            { tag: '3', title: 'Authenticity', body: 'A real-world context, tasks and tools, standards or impact, or it speaks to learners’ own concerns.' },
            { tag: '4', title: 'Learner voice and choice', body: 'Learners make some decisions about the project, including how they work and what they create.' },
            { tag: '5', title: 'Reflection', body: 'Learners and teacher reflect on the learning, the inquiry and the obstacles.' },
            { tag: '6', title: 'Critique and revision', body: 'Learners give, receive and use feedback to improve their work.' },
            { tag: '7', title: 'Public product', body: 'Learners share their work with people beyond the classroom.' },
          ],
        },
      ],
    },
    {
      id: 'plan',
      title: 'Planning a project',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Start from the learning goals', body: 'What knowledge and skills must learners gain? The project must require them.' },
            { title: 'Write a driving question', body: 'Open-ended, engaging and linked to the goals. *"How can we reduce food waste in our school canteen?"*' },
            { title: 'Decide the product and audience', body: 'A proposal to the head teacher, a museum exhibit, a podcast, a design prototype.' },
            { title: 'Map the knowledge', body: 'List what learners need to know, and plan explicit lessons, readings and workshops to teach it at the point they need it.' },
            { title: 'Build in checkpoints', body: 'Milestones with feedback, drafts and critique sessions.' },
            { title: 'Plan assessment', body: 'Assess individual learning as well as the group product. See [rubrics](@teaching/assessment/rubrics).' },
          ],
        },
        {
          t: 'example',
          title: 'Driving questions',
          lines: [
            { label: 'Science', text: 'How can we make our playground cooler on hot days?' },
            { label: 'History', text: 'Whose stories are missing from our town’s museum, and how can we tell them?' },
            { label: 'Maths', text: 'What is the best phone contract for a student, and how can we prove it?' },
            { label: 'English', text: 'How can we persuade our community to use the library more?' },
          ],
        },
      ],
    },
    {
      id: 'pitfalls',
      title: 'Pitfalls',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Teach key content explicitly inside the project.',
            'Hold individuals accountable for learning, not just the group for the product.',
            'Keep the focus on the learning goals, not the look of the product.',
          ],
          dont: [
            'Treat a "dessert project" (a poster at the end of a unit) as PBL.',
            'Assume learners will discover what they need to know on their own.',
            'Let the project run on without deadlines and feedback.',
          ],
        },
        {
          t: 'p',
          text: 'Evidence on PBL is mixed and depends heavily on design. Some large trials found no improvement over usual teaching, while recent well-designed curricula with strong teacher support have shown clear gains in science and social studies (e.g., Krajcik et al., 2023). Quality of design and support, not the label, is what matters.',
        },
      ],
    },
  ],
  sources: [
    'Larmer, J., Mergendoller, J., & Boss, S. (2015). *Setting the standard for project based learning*. ASCD.',
    'Krajcik, J., et al. (2023). Assessing the effect of project-based learning on science learning in elementary schools. *American Educational Research Journal, 60*(1), 70–102.',
    'Thomas, J. W. (2000). *A review of research on project-based learning*. Autodesk Foundation.',
  ],
  related: ['teaching/techniques/active-learning/inquiry', 'teaching/theories/experiential', 'teaching/guides/planning/backward-design'],
}

export default guide
