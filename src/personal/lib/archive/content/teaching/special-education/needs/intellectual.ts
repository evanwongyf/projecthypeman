import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Learners with an intellectual disability learn more slowly and find abstract thinking harder than their peers, and they also need support with everyday adaptive skills. With clear, structured teaching and high expectations, they make real and meaningful progress.',
  nutshell: [
    'Defined by significant difficulties in **intellectual functioning** and **adaptive behaviour** (everyday conceptual, social and practical skills), starting in childhood.',
    'Terms differ: "intellectual disability" (international, US) is called "learning disability" in the UK. In the US, "learning disability" means a specific difficulty like dyslexia.',
    'Break skills into small steps (**task analysis**), teach explicitly, practise a lot, and build towards independence.',
    'Keep the curriculum as rich as possible, and include functional life skills.',
  ],
  sections: [
    {
      id: 'what',
      title: 'Understanding intellectual disability',
      blocks: [
        {
          t: 'p',
          text: 'Current definitions (such as DSM-5) focus on **adaptive functioning**, not only IQ, to describe how much support someone needs. Needs range from mild, where a learner may follow an adapted mainstream curriculum, to profound and multiple, where learning focuses on communication, sensory experience and daily living. Down syndrome is the most common known genetic cause, but many causes are unknown.',
        },
        {
          t: 'terms',
          items: [
            { term: 'Conceptual skills', def: 'Language, reading, number, money, time, memory, reasoning.' },
            { term: 'Social skills', def: 'Communication, friendships, understanding social rules, judgement, keeping safe.' },
            { term: 'Practical skills', def: 'Personal care, travel, using a phone, following a schedule, work skills.' },
          ],
        },
      ],
    },
    {
      id: 'task-analysis',
      title: 'Task analysis and chaining',
      lead: 'Breaking any skill into teachable steps.',
      blocks: [
        {
          t: 'example',
          title: 'Task analysis: washing hands',
          lines: [
            { label: '1', text: 'Turn on the tap.' },
            { label: '2', text: 'Wet hands.' },
            { label: '3', text: 'Press soap once.' },
            { label: '4', text: 'Rub palms, backs and between fingers while counting to 20.' },
            { label: '5', text: 'Rinse hands.' },
            { label: '6', text: 'Turn off the tap.' },
            { label: '7', text: 'Dry hands with a towel.' },
          ],
        },
        {
          t: 'cards',
          items: [
            { title: 'Forward chaining', body: 'Teach step 1 until mastered, then add step 2, and so on. The adult completes the remaining steps.' },
            { title: 'Backward chaining', body: 'The adult does all but the last step; the learner does the last step and gets the satisfaction of finishing. Then the last two steps, and so on.' },
            { title: 'Errorless learning', body: 'Prompt enough to prevent errors from the start, then fade prompts, so incorrect patterns are not practised.' },
            { title: 'Visual task strips', body: 'A picture for each step, so the learner can follow the sequence independently. See [visual supports](@teaching/special-education/strategies/visual-supports).' },
          ],
        },
      ],
    },
    {
      id: 'teaching',
      title: 'Teaching principles',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Teach explicitly, in small steps, with modelling and guided practice.',
            'Use concrete materials, real objects and real-life contexts.',
            'Build in lots of repetition and overlearning, spaced over time.',
            'Teach skills in the setting where they will be used, and practise in varied settings so they transfer.',
            'Give extra time to process and respond.',
            'Use clear, simple language, with visuals and signing if the learner uses it.',
            'Celebrate progress against the learner’s own goals.',
          ],
          dont: [
            'Lower expectations or assume a learner cannot learn something.',
            'Teach a skill once and assume it will be remembered.',
            'Use age-inappropriate materials for older learners (baby books for teenagers).',
            'Do everything for the learner to save time.',
          ],
        },
      ],
    },
  ],
  sources: [
    'American Psychiatric Association. (2022). *Diagnostic and statistical manual of mental disorders* (5th ed., text rev.): Intellectual developmental disorder.',
    'Schalock, R. L., Luckasson, R., & Tassé, M. J. (2021). *Intellectual disability: Definition, diagnosis, classification, and systems of supports* (12th ed.). AAIDD.',
    'Browder, D. M., & Spooner, F. (Eds.). (2011). *Teaching students with moderate and severe disabilities*. Guilford.',
  ],
  related: ['teaching/special-education/strategies/visual-supports', 'teaching/special-education/foundations/plans', 'teaching/techniques/instruction/i-do-we-do-you-do'],
}

export default guide
