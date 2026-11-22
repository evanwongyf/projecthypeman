import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Behaviourism treats learning as a change in what someone *does*, shaped by what happens before and after they do it. It ignores what goes on inside the head and looks only at behaviour you can observe.',
  nutshell: [
    'Learning is a lasting change in behaviour caused by experience.',
    'Behaviour that is followed by something good tends to be repeated; behaviour followed by something unpleasant or by nothing tends to fade.',
    'Break skills into small steps, reinforce each one quickly, and practise until it is automatic.',
    'It works well for routines, habits and fluency. It says little about understanding, so pair it with other theories.',
  ],
  sections: [
    {
      id: 'idea',
      title: 'The core idea',
      lead: 'Stimulus, response, consequence.',
      blocks: [
        {
          t: 'p',
          text: 'Behaviourists argued that psychology should study only what can be seen and measured. A learner is exposed to a **stimulus**, gives a **response**, and a **consequence** follows. Over many repetitions, the consequences shape which responses become habits.',
        },
        {
          t: 'p',
          text: 'The theory grew in the first half of the twentieth century and shaped programmed instruction, drill and practice software, token economies and much of classroom behaviour management. It is still visible every time a teacher praises a specific action or an app awards a streak.',
        },
        {
          t: 'terms',
          items: [
            { term: 'Stimulus', def: 'Anything in the environment that triggers a response, such as a bell, a question or a sign.' },
            { term: 'Response', def: 'The behaviour that follows the stimulus.' },
            { term: 'Reinforcement', def: 'Any consequence that makes a behaviour **more** likely to happen again.' },
            { term: 'Punishment', def: 'Any consequence that makes a behaviour **less** likely to happen again.' },
            { term: 'Extinction', def: 'A behaviour fading away because it is no longer reinforced.' },
            { term: 'Shaping', def: 'Reinforcing closer and closer approximations of a target behaviour.' },
          ],
        },
      ],
    },
    {
      id: 'people',
      title: 'Four key figures',
      lead: 'From dogs and cats to pigeons and teaching machines.',
      blocks: [
        {
          t: 'cards',
          items: [
            {
              tag: 'Ivan Pavlov · 1890s–1900s',
              title: 'Classical conditioning',
              body: 'Dogs salivated at a sound that had been paired with food. A neutral stimulus, repeated alongside one that already causes a reflex, comes to cause the reflex on its own. This explains learned emotional reactions, like anxiety at the sight of an exam hall.',
            },
            {
              tag: 'Edward Thorndike · 1898',
              title: 'The law of effect',
              body: 'Cats in puzzle boxes escaped faster with each try. Responses followed by satisfaction are "stamped in"; those followed by discomfort are "stamped out". He also proposed the law of exercise: practice strengthens connections.',
            },
            {
              tag: 'John B. Watson · 1913',
              title: 'Behaviourism named',
              body: 'Watson’s manifesto argued that psychology should drop introspection and study behaviour alone. His "Little Albert" study, now seen as deeply unethical, conditioned fear in an infant.',
            },
            {
              tag: 'B. F. Skinner · 1938–1968',
              title: 'Operant conditioning',
              body: 'Behaviour "operates" on the environment and is shaped by its consequences. Skinner studied schedules of reinforcement and built teaching machines that presented small steps with instant feedback.',
            },
          ],
        },
      ],
    },
    {
      id: 'operant',
      title: 'Reinforcement and punishment',
      lead: 'Positive and negative mean adding and removing, not good and bad.',
      blocks: [
        {
          t: 'p',
          text: 'Skinner’s four consequences are the part of behaviourism most often misunderstood. **Positive** means something is *added*; **negative** means something is *taken away*. **Reinforcement** increases a behaviour; **punishment** decreases it.',
        },
        {
          t: 'table',
          head: ['', 'Something is added', 'Something is removed'],
          rows: [
            ['Behaviour increases', '**Positive reinforcement**: specific praise after a learner shows their working.', '**Negative reinforcement**: homework is dropped for learners who finish the task in class.'],
            ['Behaviour decreases', '**Positive punishment**: a learner who talks over others is given a task to redo.', '**Negative punishment**: break time is shortened after repeated disruption.'],
          ],
          caption: 'Negative reinforcement is not punishment. It strengthens a behaviour by removing something unpleasant.',
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Punishment is a weak teacher',
          text: 'Punishment can stop a behaviour in the moment but does not teach what to do instead, and it can damage the relationship and make the classroom feel unsafe. Behaviourists themselves, Skinner included, preferred reinforcing the behaviour you want.',
        },
        {
          t: 'terms',
          items: [
            { term: 'Continuous schedule', def: 'Reinforce every time. Best for learning a brand new behaviour quickly.' },
            { term: 'Fixed ratio / interval', def: 'Reinforce every *n* responses or every *n* minutes. Produces bursts of effort just before the reward.' },
            { term: 'Variable ratio / interval', def: 'Reinforce unpredictably. The most resistant to extinction, which is why slot machines and social media feeds use it.' },
          ],
        },
        {
          t: 'p',
          text: 'In practice: reinforce often while a behaviour is new, then thin the reinforcement out and make it less predictable so the behaviour lasts.',
        },
      ],
    },
    {
      id: 'classroom',
      title: 'In the classroom',
      lead: 'Where behaviourist ideas are still useful today.',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Specific praise', body: 'Name the behaviour you want repeated: "You checked your answer against the question. That is exactly what good mathematicians do." Vague praise ("good job") reinforces nothing in particular.' },
            { title: 'Routines', body: 'Entry routines, equipment routines and transitions are behaviours. Teach them, practise them, and reinforce them until they are automatic.' },
            { title: 'Small steps and quick feedback', body: 'Break a skill into steps and confirm each one straight away. This is the logic behind [worked examples](@teaching/techniques/instruction/worked-examples) and most learning apps.' },
            { title: 'Drill for fluency', body: 'Times tables, spellings, vocabulary and formulas benefit from repeated practice with feedback, so they become automatic and free up [working memory](@teaching/theories/cognitive-load).' },
            { title: 'Shaping', body: 'For a reluctant writer, reinforce one sentence, then three, then a paragraph. Reward progress toward the goal, not only the goal.' },
            { title: 'Behaviour plans', body: '[Positive behaviour support](@teaching/special-education/strategies/behaviour-support) grew out of applied behaviour analysis: look at what triggers a behaviour and what it gains the learner.' },
          ],
        },
        {
          t: 'example',
          title: 'Teaching a lining-up routine',
          lines: [
            { label: 'Model', text: 'Show exactly what lining up looks like: chairs in, bags on, silent, face the door.' },
            { label: 'Practise', text: 'Have the class do it. Time them.' },
            { label: 'Reinforce', text: '"Table three was ready in eight seconds, silent and facing the door. Thank you."' },
            { label: 'Repeat', text: 'Practise again until the whole class meets the standard, then acknowledge it less often as it becomes a habit.' },
          ],
        },
      ],
    },
    {
      id: 'limits',
      title: 'Strengths and limits',
      lead: 'A useful tool, not a full theory of learning.',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Use it for habits, routines, fluency and behaviour.',
            'Make reinforcement immediate and specific while a behaviour is new.',
            'Break complex skills into small, sequenced steps.',
            'Measure progress by what learners can actually do.',
          ],
          dont: [
            'Assume a correct response means real understanding.',
            'Rely on rewards for tasks learners already enjoy. External rewards can reduce interest in them (see [motivation](@teaching/theories/motivation)).',
            'Lean on punishment to teach.',
            'Ignore thinking, meaning and emotion entirely.',
          ],
        },
        {
          t: 'p',
          text: 'The biggest criticism came from the cognitive revolution of the 1950s and 60s. Noam Chomsky argued that children produce sentences they have never heard or been reinforced for, so language cannot be learned by reinforcement alone. Learners also clearly learn by watching others without being rewarded, which led Bandura to [social learning theory](@teaching/theories/social-learning).',
        },
      ],
    },
  ],
  sources: [
    'Pavlov, I. P. (1927). *Conditioned reflexes*. Oxford University Press.',
    'Thorndike, E. L. (1898). Animal intelligence. *Psychological Review Monograph Supplements, 2*(4).',
    'Watson, J. B. (1913). Psychology as the behaviorist views it. *Psychological Review, 20*(2), 158–177.',
    'Skinner, B. F. (1968). *The technology of teaching*. Appleton-Century-Crofts.',
    'Chomsky, N. (1959). A review of B. F. Skinner’s *Verbal Behavior*. *Language, 35*(1), 26–58.',
  ],
  related: ['teaching/theories/cognitivism', 'teaching/theories/social-learning', 'teaching/guides/classroom/management', 'teaching/special-education/strategies/behaviour-support'],
}

export default guide
