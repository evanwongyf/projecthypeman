import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'William Perry interviewed Harvard students across their four years and found their beliefs about knowledge itself changed in a predictable sequence: from “there are right answers and the teacher has them” to “I have to commit to a position while knowing it could be wrong.” His scheme explains a lot of frustration in older learners and adults.',
  sections: [
    {
      id: 'positions',
      title: 'The four broad positions',
      blocks: [
        { t: 'levels', items: [
          { name: 'Dualism', body: 'Knowledge is right or wrong; authorities know the answers; the learner’s job is to absorb them. “Just tell us what will be on the test.”' },
          { name: 'Multiplicity', body: 'Where answers are not known, all opinions are equally valid. “That’s just your opinion.”' },
          { name: 'Relativism', body: 'Knowledge is contextual; some views are better supported than others, and evidence and reasoning decide which.' },
          { name: 'Commitment within relativism', body: 'The learner takes responsible positions, values and identity commitments, while staying open to revising them.' },
        ] },
        { t: 'p', text: 'Belenky and colleagues’ “Women’s Ways of Knowing” (1986) extended Perry with silence, received, subjective, procedural and constructed knowing. Both models help teachers recognise that a learner asking for the single right answer may need to be taught how judgement works, not just given more content.' },
      ],
    },
  ],
  sources: ['Perry, W. G. (1970). Forms of Intellectual and Ethical Development in the College Years. Holt, Rinehart and Winston.', 'Belenky, M. F. et al. (1986). Women’s Ways of Knowing. Basic Books.'],
  related: ['teaching/taxonomies/compare', 'teaching/guides/contexts/adults'],
}

export default guide
