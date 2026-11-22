import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Albert Bandura showed that people learn a great deal simply by **watching others** and seeing what happens to them. No reward is needed to learn; rewards mostly decide whether we choose to act on what we learned.',
  nutshell: [
    'We learn by observing models: teachers, peers, parents, people on screens.',
    'Observational learning needs four things: **attention, retention, reproduction and motivation**.',
    '**Self-efficacy**, a learner’s belief that they can succeed at a task, shapes whether they try and how long they persist.',
    'Success on real tasks is the strongest builder of self-efficacy, so design for early, genuine wins.',
  ],
  sections: [
    {
      id: 'bobo',
      title: 'Learning by watching',
      lead: 'The Bobo doll studies.',
      blocks: [
        {
          t: 'p',
          text: 'In the early 1960s Bandura and colleagues had children watch an adult either attack an inflatable "Bobo" doll or play quietly beside it. Children who had watched the aggressive model were far more likely to copy the specific aggressive acts, including novel ones, even though they had never been rewarded for them.',
        },
        {
          t: 'p',
          text: 'Later versions showed children the model being rewarded or punished. Children who saw the model punished copied less. But when later offered a reward to copy, all groups could reproduce the behaviour. They had **learned** it regardless; consequences affected **performance**, not learning. This was a direct challenge to [behaviourism](@teaching/theories/behaviourism).',
        },
        {
          t: 'terms',
          items: [
            { term: 'Model', def: 'The person being observed. Models who are seen as competent, similar to the learner or high status are copied more.' },
            { term: 'Vicarious reinforcement', def: 'Seeing someone else rewarded for a behaviour makes you more likely to do it.' },
            { term: 'Reciprocal determinism', def: 'Person, behaviour and environment all influence each other. Learners are not just shaped by their surroundings; they shape them too.' },
          ],
        },
      ],
    },
    {
      id: 'process',
      title: 'Four processes of observational learning',
      lead: 'Each is a place a demonstration can succeed or fail.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Attention', body: 'The learner has to notice the right things. Point out what to watch: "Watch where my thumb goes."' },
            { title: 'Retention', body: 'The learner has to remember what they saw. Name the steps, give a mnemonic, keep a visual reminder up.' },
            { title: 'Reproduction', body: 'The learner has to be physically and mentally able to do it. Break it down and give practice with feedback.' },
            { title: 'Motivation', body: 'The learner has to want to do it. Show why it matters, and let them see peers succeed with it.' },
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          text: 'Most failed demonstrations fail at **attention**: learners watch the teacher’s face, not their hands, or look at the answer, not the method. Tell them exactly what to look for before you start. See [modelling and think-alouds](@teaching/techniques/instruction/modelling).',
        },
      ],
    },
    {
      id: 'efficacy',
      title: 'Self-efficacy',
      lead: '"I can do this" is a powerful predictor.',
      blocks: [
        {
          t: 'p',
          text: 'Bandura (1977) defined **self-efficacy** as a person’s belief in their ability to succeed at a specific task. It is not the same as self-esteem. A learner can feel good about themselves overall and still be sure they cannot do algebra. Self-efficacy affects which tasks learners attempt, how much effort they put in and how long they persist after a setback.',
        },
        {
          t: 'levels',
          items: [
            { name: 'Emotional and physical states', body: 'How the learner reads their own feelings. Racing heart before a test can be read as "I am failing" or "I am ready". Help learners reinterpret stress.' },
            { name: 'Verbal persuasion', body: '"You can do this" from someone credible helps a little, especially when it is specific and realistic.' },
            { name: 'Vicarious experience', body: 'Seeing a similar peer succeed: "if they can, I can". Models similar to the learner work best.' },
            { name: 'Mastery experience', body: 'Actually succeeding at a challenging task. The strongest source by far, especially when success follows effort.' },
          ],
          caption: 'Bandura’s four sources of self-efficacy, from weakest (bottom) to strongest (top).',
        },
      ],
    },
    {
      id: 'classroom',
      title: 'In the classroom',
      lead: 'Using models and building belief.',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Model everything once', body: 'Routines, how to annotate a text, how to set out a calculation, how to disagree politely. Learners copy what they see far more than what they are told.' },
            { title: 'Use peer models', body: 'Share a classmate’s strong answer (with permission) and discuss what makes it work. A peer model is more believable than a teacher’s perfect one.' },
            { title: 'Coping models', body: 'Show yourself making a mistake and fixing it. Models who struggle and recover build more self-efficacy than flawless ones.' },
            { title: 'Engineer early success', body: 'Start a new topic with a task learners can complete with effort. Mastery experiences build the belief that sustains harder work later.' },
            { title: 'Specific encouragement', body: '"Your first two steps are right, so you know the method; now check the sign" is persuasion grounded in evidence.' },
            { title: 'Watch what you model', body: 'Your reactions to mistakes, to difficulty and to other people are being learned too.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Bandura, A., Ross, D., & Ross, S. A. (1961). Transmission of aggression through imitation of aggressive models. *Journal of Abnormal and Social Psychology, 63*(3), 575–582.',
    'Bandura, A. (1977). Self-efficacy: Toward a unifying theory of behavioral change. *Psychological Review, 84*(2), 191–215.',
    'Bandura, A. (1977). *Social learning theory*. Prentice Hall.',
    'Schunk, D. H. (1987). Peer models and children’s behavioral change. *Review of Educational Research, 57*(2), 149–174.',
  ],
  related: ['teaching/theories/behaviourism', 'teaching/theories/motivation', 'teaching/techniques/instruction/modelling'],
}

export default guide
