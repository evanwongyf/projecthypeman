import type { Guide } from '../../../guide'

const pref = (a: string, b: string, rows: [string, string, string][]) => ({ t: 'table' as const, head: ['', a, b], rows })

const guide: Guide = {
  intro:
    'Each of the four letters records a preference, like being right- or left-handed. You can use both sides, but one comes more naturally. Preferences describe how you like to work, not how well you can do something.',
  sections: [
    {
      id: 'ei',
      title: 'E or I: where you get your energy',
      blocks: [
        pref('Extraversion (E)', 'Introversion (I)', [
          ['Energy', 'Recharged by people, activity, the outer world', 'Recharged by solitude, reflection, the inner world'],
          ['Thinking', 'Thinks out loud; talks to find out what they think', 'Thinks first, then speaks'],
          ['Social', 'Many contacts, broad interests', 'Fewer, deeper relationships'],
          ['At work', 'Open-plan, meetings, collaboration', 'Quiet focus, written communication'],
          ['Misread as', 'Shallow or loud', 'Shy, aloof or unfriendly'],
        ]),
        { t: 'callout', tone: 'myth', title: 'Introvert ≠ shy', text: 'Shyness is anxiety about social judgement; introversion is a preference for less stimulation. Many introverts are confident speakers who simply need recovery time afterwards.' },
      ],
    },
    {
      id: 'sn',
      title: 'S or N: how you take in information',
      blocks: [
        pref('Sensing (S)', 'Intuition (N)', [
          ['Focus', 'Facts, details, what is real now', 'Patterns, meanings, what could be'],
          ['Trusts', 'Experience and evidence', 'Hunches and inspiration'],
          ['Learning', 'Step by step, concrete examples', 'Big picture first, theory'],
          ['Talk', 'Literal, specific, practical', 'Metaphorical, abstract, jumping between ideas'],
          ['Misread as', 'Unimaginative', 'Head in the clouds'],
        ]),
        { t: 'p', text: 'Keirsey and many practitioners consider S/N the most important difference for communication: two people with different S/N preferences may be talking about different things even when they use the same words. Note that about 70% of people in US samples prefer Sensing, while online type communities skew heavily Intuitive.' },
      ],
    },
    {
      id: 'tf',
      title: 'T or F: how you make decisions',
      blocks: [
        pref('Thinking (T)', 'Feeling (F)', [
          ['Decides by', 'Logic, consistency, objective criteria', 'Values, impact on people, harmony'],
          ['Fairness means', 'Same rules for everyone', 'Consider each person’s circumstances'],
          ['Feedback', 'Direct critique, focus on the task', 'Tactful, focus on the person'],
          ['Values', 'Truth, competence', 'Kindness, authenticity'],
          ['Misread as', 'Cold or heartless', 'Irrational or soft'],
        ]),
        { t: 'callout', tone: 'myth', title: 'Feelers still think; Thinkers still feel', text: 'T/F is about what you weigh first when deciding, not about intelligence or emotional depth. In US samples, more men report T and more women F (about 60/40 each way), which partly reflects social expectations.' },
      ],
    },
    {
      id: 'jp',
      title: 'J or P: how you approach the outer world',
      blocks: [
        pref('Judging (J)', 'Perceiving (P)', [
          ['Prefers', 'Plans, schedules, closure', 'Flexibility, options, spontaneity'],
          ['Deadlines', 'Starts early, steady pace', 'Bursts of energy near the deadline'],
          ['Decisions', 'Decide and move on', 'Keep gathering information'],
          ['Space', 'Tidy, organised', 'Organised chaos'],
          ['Misread as', 'Rigid or controlling', 'Lazy or unreliable'],
        ]),
        { t: 'p', text: 'J/P also marks which function you show the outside world. J types extravert a judging function (Te or Fe); P types extravert a perceiving function (Se or Ne). That is why INTJ and INTP, one letter apart, have completely different function stacks.' },
      ],
    },
  ],
  sources: ['Myers, I. B. et al. (1998). MBTI Manual (3rd ed.). CPP.', 'Keirsey, D. (1998). Please Understand Me II. Prometheus Nemesis.', 'Cain, S. (2012). Quiet: The Power of Introverts. Crown.'],
  related: ['personality/foundations/cognitive-functions', 'personality/compatibility/clashes-by-preference'],
}

export default guide
