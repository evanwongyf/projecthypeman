import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Bloom’s original project had three domains: cognitive (thinking), affective (feelings and values) and psychomotor (physical skills). The affective domain, published by Krathwohl, Bloom and Masia in 1964, describes how an attitude or value grows from simple awareness to something that shapes a person’s life.',
  nutshell: [
    'Five levels: **receiving, responding, valuing, organisation, characterisation**.',
    'Each level describes deeper internalisation: from noticing a value to living by it.',
    'Useful for subjects and goals where attitudes matter: safety, respect, curiosity, scientific honesty, love of reading.',
    'Affective goals are harder to assess and should be assessed sensitively, often through behaviour and reflection rather than grades.',
  ],
  sections: [
    {
      id: 'levels',
      title: 'The five levels',
      lead: 'From noticing to living by a value.',
      blocks: [
        {
          t: 'levels',
          items: [
            { name: 'Receiving', body: 'Being aware of and willing to attend to something. *Listens attentively when others share views.*', verbs: ['attend', 'notice', 'listen', 'be aware'] },
            { name: 'Responding', body: 'Actively taking part, first when asked and then willingly, with some satisfaction. *Takes part in class discussion; volunteers to help.*', verbs: ['participate', 'comply', 'discuss', 'volunteer', 'respond'] },
            { name: 'Valuing', body: 'Attaching worth to something and showing it consistently without being told. *Chooses to check sources before sharing news.*', verbs: ['value', 'choose', 'support', 'justify', 'initiate'] },
            { name: 'Organisation', body: 'Bringing different values together, resolving conflicts between them and building a consistent value system. *Balances personal freedom with responsibility to others in an argument.*', verbs: ['compare values', 'prioritise', 'integrate', 'reconcile', 'formulate'] },
            { name: 'Characterisation', body: 'A value system that consistently guides behaviour; it is part of who the person is. *Acts with scientific honesty even when no one is checking.*', verbs: ['act consistently', 'display', 'influence', 'practise', 'live by'] },
          ],
          caption: 'Krathwohl, Bloom and Masia (1964): each level internalises the value more deeply.',
        },
      ],
    },
    {
      id: 'objectives',
      title: 'Writing affective objectives',
      lead: 'Observable signs of an inner change.',
      blocks: [
        {
          t: 'p',
          text: 'You cannot see an attitude directly, but you can see what people do because of it. Write affective objectives in terms of observable behaviour, and look for it over time rather than in a single lesson.',
        },
        {
          t: 'table',
          head: ['Level', 'Example objective (science)'],
          rows: [
            ['Receiving', 'Learners listen without interrupting while a peer explains a different result.'],
            ['Responding', 'Learners follow lab safety rules and remind others when needed.'],
            ['Valuing', 'Learners report unexpected results honestly rather than adjusting them.'],
            ['Organisation', 'Learners weigh the benefits of an experiment against ethical concerns and explain their position.'],
            ['Characterisation', 'Learners habitually ask "what is the evidence?" in and outside science lessons.'],
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Assess with care',
          text: 'Grading someone’s values is ethically awkward and invites performance ("saying the right thing"). Use affective objectives to plan experiences and discussions, and gather evidence through observation, self-reflection and anonymous surveys rather than marks.',
        },
      ],
    },
    {
      id: 'teaching',
      title: 'Teaching for attitudes and values',
      blocks: [
        {
          t: 'list',
          items: [
            'Model the value yourself, consistently. Learners pick up attitudes from what teachers do (see [social learning](@teaching/theories/social-learning)).',
            'Give real choices where the value matters, so learners can practise acting on it.',
            'Use discussion of dilemmas where values conflict, to build organisation.',
            'Invite reflection: "What mattered most to you in that decision? Why?"',
            'Notice and name the behaviour when it happens: "You re-checked your data even though it looked fine. That is what careful scientists do."',
          ],
        },
      ],
    },
  ],
  sources: [
    'Krathwohl, D. R., Bloom, B. S., & Masia, B. B. (1964). *Taxonomy of educational objectives: Handbook II, the affective domain*. David McKay.',
  ],
  related: ['teaching/taxonomies/blooms', 'teaching/taxonomies/psychomotor', 'teaching/taxonomies/fink'],
}

export default guide
