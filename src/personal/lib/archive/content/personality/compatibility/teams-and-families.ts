import type { Guide } from '../../../guide'

const guide: Guide = {
  intro: 'Type language is most useful when it helps people work with difference rather than sort each other. This guide covers teams, meetings, parents and children, and siblings.',
  sections: [
    {
      id: 'teams',
      title: 'Teams',
      blocks: [
        { t: 'table', head: ['Team need', 'Who often enjoys it', 'Watch out for'], rows: [
          ['Vision and strategy', 'NT and NF types, especially Ni dominants', 'Ignoring practical constraints'],
          ['Brainstorming', 'Ne dominants (ENTP, ENFP)', 'Never deciding'],
          ['Planning and process', 'SJ types', 'Resisting change'],
          ['Crisis response and troubleshooting', 'SP types', 'Skipping documentation'],
          ['Team morale', 'Fe types (ENFJ, ESFJ, INFJ, ISFJ)', 'Avoiding hard feedback'],
          ['Quality and logic checks', 'Ti types (INTP, ISTP)', 'Perfectionism'],
        ] },
        { t: 'checklist', items: [
          'Send agendas in advance so introverts can prepare.',
          'Separate idea generation from decision-making.',
          'Give both the big picture and the details.',
          'Explicitly discuss the people impact of decisions.',
          'Set deadlines and checkpoints, but allow flexibility in how.',
        ] },
      ],
    },
    {
      id: 'families',
      title: 'Parents and children',
      blocks: [
        { t: 'cards', cols: 2, items: [
          { title: 'A child unlike you', body: 'The biggest parenting friction often comes from a child with opposite preferences. An ESTJ parent with an INFP child may push structure that crushes; an ENFP parent with an ISTJ child may offer chaos when the child wants routine.' },
          { title: 'Do not type children early', body: 'Children’s preferences are still developing, and children’s versions of the MBTI (the MMTIC) are less reliable. Use type ideas as hypotheses, never labels.' },
          { title: 'Siblings', body: 'Comparing siblings by type (“the logical one”, “the sensitive one”) can lock children into roles. Let each grow in all directions.' },
          { title: 'Teenagers', body: 'Adolescents may enjoy learning about type themselves, it can open conversations about why parent and child clash.' },
        ] },
        { t: 'links', items: [{ path: 'parenting/gifted/social-emotional', note: 'The emotional side of raising able children' }] },
      ],
    },
  ],
  sources: ['Tieger, P. D. & Barron-Tieger, B. (1997). Nurture by Nature.', 'Hirsh, S. K. & Kise, J. A. G. (2006). Work It Out: Using Personality Type to Improve Team Performance. Davies-Black.'],
  related: ['personality/compatibility/clashes-by-preference'],
}

export default guide
