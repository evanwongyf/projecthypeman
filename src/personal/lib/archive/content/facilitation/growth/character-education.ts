import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Character is the set of habits of thought, feeling and action that shape how a person treats others and meets difficulty. Facilitators cannot install character, but they can design experiences that call for it, name it when it appears, and help participants choose who they want to become.',
  nutshell: [
    'The **VIA classification** (Peterson and Seligman, 2004) lists 24 character strengths under six virtues.',
    'Character grows through **practice in real situations**, **reflection** and **relationships**, more than through lessons about values.',
    'Name strengths **specifically and when you see them** (“strength-spotting”).',
    'Singapore’s **Character and Citizenship Education** names six core values: respect, responsibility, resilience, integrity, care and harmony.',
  ],
  sections: [
    {
      id: 'via',
      title: 'The VIA strengths',
      blocks: [
        { t: 'table', head: ['Virtue', 'Strengths'], rows: [
          ['Wisdom', 'Creativity, curiosity, judgement, love of learning, perspective'],
          ['Courage', 'Bravery, perseverance, honesty, zest'],
          ['Humanity', 'Love, kindness, social intelligence'],
          ['Justice', 'Teamwork, fairness, leadership'],
          ['Temperance', 'Forgiveness, humility, prudence, self-regulation'],
          ['Transcendence', 'Appreciation of beauty, gratitude, hope, humour, spirituality'],
        ] },
      ],
    },
    {
      id: 'design',
      title: 'Designing for character',
      blocks: [
        { t: 'cards', cols: 2, items: [
          { title: 'Real responsibility', body: 'Give participants jobs that matter: cooking for the group, navigating, keeping someone safe. Character shows up when others depend on you.' },
          { title: 'Genuine dilemmas', body: 'Activities with trade-offs (share scarce resources, decide who goes first) make values visible and discussable.' },
          { title: 'Rotating leadership', body: 'Everyone leads something. Quiet participants often reveal strengths nobody had seen.' },
          { title: 'Service', body: 'Service-learning that is planned with, not for, the community, and reflected on afterwards.' },
          { title: 'Strength-spotting', body: 'Notice and name strengths in specific behaviour: “That was perseverance: you re-tied that knot five times.”' },
          { title: 'Role models and stories', body: 'Stories of real people facing choices, discussed rather than preached.' },
        ] },
        { t: 'dodont', do: [
          'Link praise to effort, choices and strategies',
          'Let participants name the strengths they used',
          'Revisit the same strength across several days',
        ], dont: [
          'Lecture on values before an activity, then grade compliance',
          'Praise traits as fixed (“You’re a natural leader”)',
          'Reward only the visible, loud strengths like leadership',
        ] },
      ],
    },
    {
      id: 'activity',
      title: 'A strengths debrief',
      blocks: [
        { t: 'example', title: 'Strengths circle after a two-day expedition', lines: [
          { label: 'Setup', text: 'Each person gets a set of 24 strength cards. Put them in the middle of the circle.' },
          { label: 'Round 1', text: '“Pick a strength you used on this expedition and tell us when.”' },
          { label: 'Round 2', text: '“Pick a strength you saw in the person on your left, and tell them when you saw it.”' },
          { label: 'Round 3', text: '“Pick a strength you want to grow. What will you try at school next week?”' },
          { label: 'Close', text: 'Participants keep their cards and write the commitment on the back.' },
        ] },
      ],
    },
    {
      id: 'cce',
      title: 'Singapore’s CCE framework',
      blocks: [
        { t: 'p', text: 'MOE’s Character and Citizenship Education places six core values (respect, responsibility, resilience, integrity, care, harmony) at the centre, surrounded by social-emotional competencies (self-awareness, self-management, social awareness, relationship management, responsible decision-making) and the 21st-century outcomes of a confident person, self-directed learner, active contributor and concerned citizen. CCAs, VIA (Values in Action) projects and camps are the main places these are practised.' },
      ],
    },
  ],
  sources: [
    'Peterson, C., & Seligman, M. E. P. (2004). Character Strengths and Virtues. Oxford University Press / APA.',
    'Lickona, T. (1991). Educating for Character. Bantam.',
    'Ministry of Education Singapore. Character and Citizenship Education Syllabus (2021).',
    'Berkowitz, M. W. (2021). PRIMED for Character Education. Routledge.',
  ],
  related: ['facilitation/growth/challenge-and-growth', 'facilitation/growth/transfer', 'teaching/theories/moral-development'],
}

export default guide
