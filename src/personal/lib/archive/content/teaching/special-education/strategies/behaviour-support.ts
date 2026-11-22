import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Positive behaviour support starts from a simple idea: behaviour serves a purpose. If you work out what a behaviour gets or avoids for the learner, you can teach a better way to meet the same need, and change the situation so the behaviour is not needed.',
  nutshell: [
    'Use **ABC** records: what happens **before** (antecedent), the **behaviour**, and what happens **after** (consequence).',
    'Most behaviours serve one of four functions: **escape**, **attention**, **access to something**, or **sensory** feedback.',
    'Teach a **replacement behaviour** that meets the same need, and make it easier and more rewarding than the problem behaviour.',
    'Prevent more than you respond: change the antecedents.',
  ],
  sections: [
    {
      id: 'abc',
      title: 'ABC: looking at the pattern',
      blocks: [
        {
          t: 'table',
          head: ['Antecedent', 'Behaviour', 'Consequence'],
          rows: [
            ['Teacher hands out a long writing task.', 'Learner rips up the worksheet.', 'Learner is sent out of the room; does not do the writing.'],
            ['Teacher is helping another group.', 'Learner calls out jokes.', 'Class laughs; teacher turns to address the learner.'],
            ['Class moves to the noisy hall.', 'Learner hides under a table.', 'Learner is allowed to stay in the quiet classroom.'],
          ],
          caption: 'Record several incidents. Patterns across the ABCs point to the function.',
        },
      ],
    },
    {
      id: 'functions',
      title: 'Four functions of behaviour',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Escape or avoid', body: 'Getting away from something: a hard task, a person, a noisy place, a demand. In the first example above, being sent out gets the learner out of writing, so the behaviour is reinforced.' },
            { title: 'Attention', body: 'Getting a response from adults or peers, even a negative one. In the second example, laughter and teacher attention reinforce the calling out.' },
            { title: 'Access to something', body: 'Getting an object, activity or privilege: a toy, the computer, first place in line.' },
            { title: 'Sensory', body: 'The behaviour itself feels good or relieves discomfort: rocking, humming, chewing. The reward is automatic.' },
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'The consequence can make it worse',
          text: 'Sending a learner out for escape-driven behaviour gives them exactly what they wanted. Reacting strongly to attention-driven behaviour feeds it. The right response depends on the function.',
        },
      ],
    },
    {
      id: 'plan',
      title: 'Building a support plan',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Describe the behaviour precisely', body: '"Tears up worksheets and leaves seat", not "disruptive".' },
            { title: 'Gather ABC data', body: 'Over a week or two, across settings. A functional behaviour assessment (FBA) by a specialist formalises this.' },
            { title: 'Hypothesise the function', body: '"When given long writing tasks, Jay tears up the work to escape the task, because writing is very hard for him."' },
            { title: 'Change the antecedents', body: 'Prevent: break writing into chunks, offer a scribe or typing, start with a task he can succeed at.' },
            { title: 'Teach a replacement', body: 'Teach Jay to ask for a break or help with a card. It meets the same need (a pause from the task) in an acceptable way.' },
            { title: 'Change the consequences', body: 'Reinforce the replacement every time at first. Make sure the problem behaviour no longer gets the escape (the task is still there, in a manageable form).' },
            { title: 'Review', body: 'Track the behaviour and adjust.' },
          ],
        },
      ],
    },
    {
      id: 'pbis',
      title: 'School-wide positive behaviour',
      blocks: [
        {
          t: 'p',
          text: 'Positive Behavioral Interventions and Supports (PBIS) applies the same thinking to a whole school, organised in [three tiers](@teaching/special-education/foundations/tiered-support): clear, taught expectations and recognition for everyone; targeted support such as check-in/check-out for some; and individual function-based plans for a few. Large studies have linked school-wide PBIS with fewer exclusions and office referrals (Bradshaw et al., 2010).',
        },
      ],
    },
  ],
  sources: [
    'Carr, E. G., et al. (2002). Positive behavior support: Evolution of an applied science. *Journal of Positive Behavior Interventions, 4*(1), 4–16.',
    'Iwata, B. A., Dorsey, M. F., Slifer, K. J., Bauman, K. E., & Richman, G. S. (1994). Toward a functional analysis of self-injury. *Journal of Applied Behavior Analysis, 27*(2), 197–209. (Original work published 1982)',
    'Bradshaw, C. P., Mitchell, M. M., & Leaf, P. J. (2010). Examining the effects of schoolwide positive behavioral interventions and supports on student outcomes. *Journal of Positive Behavior Interventions, 12*(3), 133–148.',
  ],
  related: ['teaching/theories/behaviourism', 'teaching/special-education/needs/semh', 'teaching/guides/classroom/management'],
}

export default guide
