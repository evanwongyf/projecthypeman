import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Social constructivism adds other people to the picture. Lev Vygotsky argued that learning happens first **between** people, through talk and shared activity, and only then **inside** the learner’s own head.',
  nutshell: [
    'Learners can do more with help than alone. The gap between the two is the **zone of proximal development** (ZPD).',
    'Teach in the ZPD: work that is too easy teaches nothing new; work that is impossible even with help teaches nothing either.',
    '**Scaffolding** is the temporary help that lets a learner succeed in the ZPD, withdrawn as they grow able.',
    'Language is a tool for thinking. Talk in the classroom is not a break from learning; done well, it is learning.',
  ],
  sections: [
    {
      id: 'vygotsky',
      title: 'Learning is social first',
      lead: 'Vygotsky’s big idea.',
      blocks: [
        {
          t: 'p',
          text: 'Lev Vygotsky was a Soviet psychologist who died young, in 1934; his work reached English-speaking educators mainly through translations published decades later, notably *Thought and Language* (1962) and *Mind in Society* (1978). Where Piaget pictured a child exploring the world alone, Vygotsky pictured a child learning alongside parents, teachers and peers, using the tools of their culture: language, number systems, writing, diagrams.',
        },
        {
          t: 'quote',
          text: 'Every function in the child’s cultural development appears twice: first, on the social level, and later, on the individual level; first, between people, and then inside the child.',
          by: 'Vygotsky, Mind in Society (1978)',
        },
        {
          t: 'p',
          text: 'A young child talks themselves through a puzzle out loud ("this piece goes... no, this one"). Vygotsky saw this **private speech** as the social talk of adults turning inward, on its way to becoming silent thought. The way a teacher talks through a problem today becomes the voice in a learner’s head tomorrow.',
        },
      ],
    },
    {
      id: 'zpd',
      title: 'The zone of proximal development',
      lead: 'The sweet spot for teaching.',
      blocks: [
        {
          t: 'levels',
          items: [
            { name: 'Can do alone', body: 'Already mastered. Useful for fluency and confidence, but no new learning happens here.' },
            { name: 'Can do with help: the ZPD', body: 'Skills that are "ripening". With a hint, a model, a prompt or a partner, the learner succeeds. This is where teaching does the most good.' },
            { name: 'Cannot do yet, even with help', body: 'Too far ahead. Missing prerequisites mean help cannot bridge the gap. Frustration follows.' },
          ],
          caption: 'The ZPD moves: today’s "with help" becomes tomorrow’s "alone", and a new zone opens above it.',
        },
        {
          t: 'p',
          text: 'The help usually comes from a **more knowledgeable other** (MKO): a teacher, a parent, a more expert peer, or even a well-designed resource. The term MKO comes from later textbooks rather than Vygotsky himself, but it captures his point: learning is pulled forward by someone who can already do what the learner cannot.',
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Finding the zone',
          text: 'Aim for tasks where learners succeed most of the time but have to think. Rosenshine suggested a success rate of around 80% during guided practice. Much higher and it is too easy; much lower and learners are practising errors.',
        },
      ],
    },
    {
      id: 'scaffolding',
      title: 'Scaffolding',
      lead: 'Support that is built to come down.',
      blocks: [
        {
          t: 'p',
          text: 'The metaphor of **scaffolding** comes from Wood, Bruner and Ross (1976), who watched tutors help young children build a pyramid of blocks. Like the scaffolding on a building, it holds things up while the structure cannot stand alone, and is removed once it can. They identified six things a good tutor does:',
        },
        {
          t: 'steps',
          items: [
            { title: 'Recruit interest', body: 'Get the learner engaged with the task.' },
            { title: 'Reduce the degrees of freedom', body: 'Simplify the task so the learner can manage it, for example by doing some parts for them.' },
            { title: 'Keep direction', body: 'Keep the learner working toward the goal and motivated to continue.' },
            { title: 'Mark critical features', body: 'Point out what matters, including the gap between what they did and what is needed.' },
            { title: 'Control frustration', body: 'Keep the struggle productive, without doing the work for them.' },
            { title: 'Demonstrate', body: 'Model an idealised version of the step, for the learner to imitate.' },
          ],
        },
        {
          t: 'p',
          text: 'The crucial and often forgotten part is **fading**: taking the support away. Scaffolds that never come down become crutches. See [scaffolding strategies](@teaching/differentiation/scaffolding) for practical examples, and [I do, we do, you do](@teaching/techniques/instruction/i-do-we-do-you-do) for a lesson structure built on the same idea.',
        },
      ],
    },
    {
      id: 'bruner',
      title: 'Bruner’s additions',
      lead: 'The spiral curriculum and three modes.',
      blocks: [
        {
          t: 'cards',
          items: [
            {
              title: 'The spiral curriculum',
              body: 'Bruner (1960) claimed any subject can be taught in some honest form to any child. Big ideas are revisited again and again, each time at a deeper level: fractions as sharing a pizza, then as numbers on a line, then as algebraic ratios.',
            },
            {
              title: 'Enactive, iconic, symbolic',
              body: 'Bruner (1966) described three ways of representing knowledge: through **action** (handling objects), through **images** (pictures, diagrams) and through **symbols** (words, numbers). Unlike Piaget’s stages, all three stay available for life. Moving between them is the basis of the concrete-pictorial-abstract approach in maths.',
            },
          ],
        },
      ],
    },
    {
      id: 'classroom',
      title: 'In the classroom',
      lead: 'Putting talk and support to work.',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Plan talk: give pairs a precise question and a short time to discuss it (see [think, pair, share](@teaching/techniques/active-learning/think-pair-share)).',
            'Teach and model the language of the subject, with sentence stems like "The evidence suggests… because…".',
            'Pair learners so a slightly more expert peer can explain, and give the explainer a reason to explain well.',
            'Use hints and prompts that give the least help needed, then step back.',
            'Revisit big ideas at increasing depth across the year.',
          ],
          dont: [
            'Assume group work is automatically collaborative. Without structure one learner often does it all (see [cooperative learning](@teaching/techniques/active-learning/cooperative)).',
            'Scaffold so heavily that the learner does no thinking.',
            'Leave scaffolds in place after the learner has outgrown them.',
            'Set tasks far beyond reach and call the struggle "productive".',
          ],
        },
        {
          t: 'example',
          title: 'Graduated prompts while a learner solves 3x + 5 = 20',
          lines: [
            { label: 'Prompt 1', text: '"What is happening to x here?" (least help: a nudge to think)' },
            { label: 'Prompt 2', text: '"What could you do to both sides to get rid of the + 5?" (points to the strategy)' },
            { label: 'Prompt 3', text: '"Subtract 5 from both sides. What do you get?" (gives the step)' },
            { label: 'Model', text: 'Demonstrate the full step if still stuck, then give a near-identical problem to try alone.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Vygotsky, L. S. (1978). *Mind in society: The development of higher psychological processes*. Harvard University Press.',
    'Vygotsky, L. S. (1962). *Thought and language*. MIT Press. (Original work published 1934)',
    'Wood, D., Bruner, J. S., & Ross, G. (1976). The role of tutoring in problem solving. *Journal of Child Psychology and Psychiatry, 17*(2), 89–100.',
    'Bruner, J. S. (1960). *The process of education*. Harvard University Press.',
    'Bruner, J. S. (1966). *Toward a theory of instruction*. Harvard University Press.',
  ],
  related: ['teaching/theories/constructivism', 'teaching/differentiation/scaffolding', 'teaching/techniques/instruction/i-do-we-do-you-do', 'teaching/techniques/active-learning/cooperative', 'teaching/theories/situated'],
}

export default guide
