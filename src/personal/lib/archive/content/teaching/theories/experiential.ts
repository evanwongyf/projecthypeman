import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Experiential learning is learning from doing, but only when the doing is followed by thinking. David Kolb’s cycle describes how a concrete experience turns into understanding, and then into better action.',
  nutshell: [
    'Experience alone does not teach. Reflection on the experience, and drawing out general ideas from it, is what turns it into learning.',
    'Kolb’s cycle: **experience → reflect → conceptualise → experiment**, and round again.',
    'Dewey: education should connect to real experience, but not every experience is educative.',
    'Kolb’s "learning styles" inventory is a separate idea with weak evidence; the cycle is the useful part.',
  ],
  sections: [
    {
      id: 'dewey',
      title: 'Roots in Dewey',
      lead: 'Learning through experience, carefully chosen.',
      blocks: [
        {
          t: 'p',
          text: 'John Dewey, the American philosopher, argued in *Experience and Education* (1938) that learning grows out of experience, but warned that some experiences are **mis-educative**: they bore, confuse or close down curiosity. The teacher’s job is to choose and shape experiences that lead to growth and connect to what comes next.',
        },
        {
          t: 'quote',
          text: 'We do not learn from experience… we learn from reflecting on experience.',
          by: 'Commonly attributed to Dewey; a fair summary of his view in How We Think (1910)',
        },
      ],
    },
    {
      id: 'cycle',
      title: 'Kolb’s learning cycle',
      lead: 'Four stages that feed each other.',
      blocks: [
        {
          t: 'cycle',
          items: [
            { name: 'Concrete experience', body: 'Do something or encounter something new: run the experiment, visit the site, teach the lesson, play the scene.' },
            { name: 'Reflective observation', body: 'Step back and review what happened. What did I notice? What surprised me? What did others see?' },
            { name: 'Abstract conceptualisation', body: 'Make sense of it. What general principle explains this? How does it link to theory?' },
            { name: 'Active experimentation', body: 'Plan how to use the idea. What will I try next time, and what do I expect to happen?' },
          ],
          caption: 'The plan from stage 4 becomes the next concrete experience, so learning spirals upward.',
        },
        {
          t: 'p',
          text: 'Kolb (1984) drew on Dewey, Lewin and Piaget. You can enter the cycle at any point. A lecture might start at abstract conceptualisation; a field trip at concrete experience. What matters is completing the loop.',
        },
        {
          t: 'callout',
          tone: 'myth',
          title: 'Kolb’s learning styles',
          text: 'Kolb also proposed four learning styles (diverging, assimilating, converging, accommodating) based on where people prefer to sit in the cycle. Like other learning style models, there is little evidence that matching teaching to these preferences improves learning. See [learning myths](@teaching/theories/myths).',
        },
      ],
    },
    {
      id: 'schon',
      title: 'Reflection in and on action',
      lead: 'Schön and the reflective practitioner.',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Reflection-in-action', body: 'Thinking on your feet while it is happening: noticing a group has stalled and changing the task mid-lesson.' },
            { title: 'Reflection-on-action', body: 'Thinking back afterwards: why did that group stall, and what will I do differently next time?' },
          ],
        },
        {
          t: 'p',
          text: 'Donald Schön (1983) argued that professionals learn largely through these two kinds of reflection. For teachers, see [reflective practice](@teaching/guides/growth/reflection) for structured ways to reflect.',
        },
      ],
    },
    {
      id: 'classroom',
      title: 'Designing experiential learning',
      lead: 'Making sure the doing leads to learning.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Name the learning goal first', body: 'Decide what principle or skill the experience should lead to. An activity without a clear target is just an activity.' },
            { title: 'Prepare learners', body: 'Give enough background that they can make sense of what they see. A field trip with no prior knowledge is mostly sightseeing.' },
            { title: 'Run the experience', body: 'Experiment, simulation, role-play, fieldwork, service project, placement.' },
            { title: 'Structure the reflection', body: 'Give specific prompts: What happened? Why do you think it happened? What does this remind you of?' },
            { title: 'Connect to the concept', body: 'Explicitly link the experience to the principle. This is the step most often skipped.' },
            { title: 'Apply it', body: 'Have learners use the idea in a new situation, which closes the loop.' },
          ],
        },
        {
          t: 'example',
          title: 'A science lesson through the cycle',
          lines: [
            { label: 'Experience', text: 'Learners roll a ball down ramps at different heights and time it.' },
            { label: 'Reflect', text: '"What pattern did you see? Were any results odd? Why might that be?"' },
            { label: 'Conceptualise', text: 'Teacher introduces gravitational potential energy converting to kinetic energy, and links it to their data.' },
            { label: 'Experiment', text: 'Learners predict the speed for a new height, then test the prediction.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Dewey, J. (1938). *Experience and education*. Kappa Delta Pi.',
    'Kolb, D. A. (1984). *Experiential learning: Experience as the source of learning and development*. Prentice Hall.',
    'Schön, D. A. (1983). *The reflective practitioner*. Basic Books.',
    'Kirschner, P. A., & Hendrick, C. (2020). *How learning happens*. Routledge.',
  ],
  related: ['teaching/guides/growth/reflection', 'teaching/techniques/active-learning/project-based', 'teaching/theories/constructivism'],
}

export default guide
