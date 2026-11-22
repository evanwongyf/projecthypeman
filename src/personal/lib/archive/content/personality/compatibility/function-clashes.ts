import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'In function terms, the deepest clashes happen across the four opposite axes, where one person’s strongest function is the other’s weakest. Milder friction comes from two people using the same function in opposite directions (Te and Ti, Fe and Fi, Ne and Ni, Se and Si).',
  sections: [
    {
      id: 'axes',
      title: 'The four opposite axes',
      blocks: [
        { t: 'cards', cols: 2, items: [
          { tag: 'Perceiving', title: 'Ni versus Se', body: 'Ni lives in a future vision; Se lives in the vivid present. Ni sees Se as reckless and shallow; Se sees Ni as detached and lost in the head. Together: the strategist and the operator, Ni sets the destination, Se drives.' },
          { tag: 'Perceiving', title: 'Ne versus Si', body: 'Ne craves novelty and possibility; Si values the familiar and proven. Ne sees Si as stuck; Si sees Ne as unreliable. Together: Ne generates options, Si checks which have actually worked.' },
          { tag: 'Judging', title: 'Ti versus Fe', body: 'Ti wants internal logical consistency; Fe wants group harmony. Ti sees Fe as fake or political; Fe sees Ti as tactless. Together: truth delivered kindly.' },
          { tag: 'Judging', title: 'Te versus Fi', body: 'Te wants efficient, measurable results; Fi wants decisions true to personal values. Te sees Fi as stubborn and impractical; Fi sees Te as heartless and bossy. Together: effective action that people believe in.' },
        ] },
      ],
    },
    {
      id: 'directions',
      title: 'Same function, opposite direction',
      blocks: [
        { t: 'table', head: ['Pair', 'Typical friction', 'Bridge'], rows: [
          ['Te and Ti', 'Te: “Does it work? Let’s ship.” Ti: “But is it correct? The definitions are wrong.”', 'Agree what “done” means before starting'],
          ['Fe and Fi', 'Fe: “How will everyone feel?” Fi: “What do I believe is right?”', 'Name both the group and personal values at stake'],
          ['Ne and Ni', 'Ne: “Here are ten ideas.” Ni: “There’s only one that matters.”', 'Brainstorm first, converge second'],
          ['Se and Si', 'Se: “Let’s try something new.” Si: “The usual place is good.”', 'Alternate: new one week, favourite the next'],
        ] },
      ],
    },
  ],
  sources: ['Beebe, J. (2017). Energies and Patterns in Psychological Type.', 'Quenk, N. L. (2002). Was That Really Me?'],
  related: ['personality/foundations/cognitive-functions', 'personality/compatibility/all-pairs'],
}

export default guide
