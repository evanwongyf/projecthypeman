import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Executive functions are the mental skills that manage other skills: holding information in mind, stopping and thinking before acting, switching between tasks, planning and organising. Many learners with ADHD, autism, dyspraxia and other needs find these hard, and all learners are still developing them into their twenties.',
  nutshell: [
    'Three core executive functions: **working memory, inhibitory control, cognitive flexibility** (Diamond, 2013).',
    'From these come planning, organisation, time management, getting started and self-monitoring.',
    'Support them from the outside with **external structure**: checklists, timers, routines, visual plans.',
    'Then teach learners to use those tools themselves, and fade your support.',
  ],
  sections: [
    {
      id: 'what',
      title: 'What executive functions are',
      blocks: [
        {
          t: 'terms',
          items: [
            { term: 'Working memory', def: 'Holding information in mind while using it: remembering the steps of an instruction, keeping track while doing mental maths.' },
            { term: 'Inhibitory control', def: 'Stopping an automatic response: waiting your turn, not calling out, resisting distraction.' },
            { term: 'Cognitive flexibility', def: 'Switching between tasks or ways of thinking; adapting when plans change.' },
            { term: 'Planning and organisation', def: 'Breaking a goal into steps, ordering them, gathering what you need.' },
            { term: 'Task initiation', def: 'Getting started, especially on tasks that are not immediately interesting.' },
            { term: 'Time management', def: 'Estimating how long things take and pacing work toward a deadline.' },
          ],
        },
      ],
    },
    {
      id: 'tools',
      title: 'Tools that help',
      lead: 'Putting executive function outside the head.',
      blocks: [
        {
          t: 'cards',
          cols: 3,
          items: [
            { title: 'Checklists', body: 'Numbered steps for a task, ticked as completed. Reduces working memory load and shows progress.' },
            { title: 'Chunking', body: 'Big tasks split into small parts with mini deadlines: "By 10:15, finish your plan."' },
            { title: 'Visual timers', body: 'Show time passing so it is concrete. Useful for starting and pacing.' },
            { title: 'Routines', body: 'Consistent entry, equipment and homework routines reduce decisions and forgetting.' },
            { title: 'Planners and calendars', body: 'Teach how to break a project into steps and schedule them backward from the deadline.' },
            { title: 'Colour-coded folders', body: 'One colour per subject, with a "to do" and "done" pocket.' },
            { title: 'Written instructions', body: 'Always give a written version of verbal instructions, visible during the task.' },
            { title: 'First step given', body: 'Remove the barrier to starting by giving or modelling the very first step.' },
            { title: 'Check-ins', body: 'A short check with an adult at the start and end of the day to plan and review.' },
          ],
        },
      ],
    },
    {
      id: 'teach',
      title: 'Teaching, not just supporting',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Model it', body: 'Think aloud as you plan a task: "First I’ll check the success criteria, then list the parts…" See [metacognition](@teaching/techniques/learning-strategies/metacognition).' },
            { title: 'Do it together', body: 'Plan the next task with the learner, using the tool.' },
            { title: 'Let them try with prompts', body: '"What is your plan? What will you do first?"' },
            { title: 'Fade the support', body: 'Move from adult-made checklists to learner-made ones; from adult check-ins to self-review.' },
            { title: 'Reflect', body: '"Did your plan work? What would you change?"' },
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          text: 'Estimating time is a skill: ask learners to predict how long a task will take, then compare with how long it actually took. Most people underestimate, and practice improves calibration.',
        },
      ],
    },
  ],
  sources: [
    'Diamond, A. (2013). Executive functions. *Annual Review of Psychology, 64*, 135–168.',
    'Dawson, P., & Guare, R. (2018). *Executive skills in children and adolescents* (3rd ed.). Guilford.',
    'Center on the Developing Child at Harvard University. (2011). *Building the brain’s "air traffic control" system* (Working Paper 11).',
  ],
  related: ['teaching/special-education/needs/adhd', 'teaching/techniques/learning-strategies/metacognition', 'teaching/special-education/strategies/visual-supports'],
}

export default guide
