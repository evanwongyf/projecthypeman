import type { Guide } from '../../../guide'
import { TYPES } from '../../../../personality/types'

const guide: Guide = {
  intro:
    'Under ordinary pressure people overuse their strengths. Under serious stress, type theory says something stranger happens: the inferior function, the least developed, erupts in a crude form, and people act “not like themselves”. Naomi Quenk called this being “in the grip”. Recognising it in yourself and others is one of the most practical uses of type.',
  sections: [
    {
      id: 'stages',
      title: 'Three stages of stress',
      blocks: [
        { t: 'steps', items: [
          { title: 'Exaggerating the dominant', body: 'An INTJ over-plans, an ESFJ over-helps, an ENTP over-argues.' },
          { title: 'The inferior erupts', body: 'The opposite function takes over in an immature form: the logical INTP becomes emotionally flooded; the warm ENFJ becomes coldly critical.' },
          { title: 'Return', body: 'With rest, a change of scene or support, the person recovers, sometimes with new insight into their weaker side.' },
        ] },
      ],
    },
    {
      id: 'grip',
      title: 'Every type in the grip',
      blocks: [
        { t: 'table', head: ['Type', 'Inferior', 'What it looks like'], rows: TYPES.map((t) => [t.code, t.stack[3], t.stress]) },
      ],
    },
    {
      id: 'development',
      title: 'Type development across a lifetime',
      blocks: [
        { t: 'list', items: [
          '**Childhood to young adulthood**: the dominant develops first, then the auxiliary.',
          '**Midlife**: the tertiary and inferior come forward; many people develop interests that surprise them (the analytical engineer who takes up painting).',
          '**Healthy growth** means using the right function for the job, not changing type.',
        ] },
        { t: 'callout', tone: 'tip', title: 'Helping someone in the grip', text: 'Do not argue with them or point out they are acting oddly. Give space, reduce demands, and offer something that engages their dominant function again: a quiet problem for an INTJ, a social outing for an ESFP.' },
      ],
    },
  ],
  sources: ['Quenk, N. L. (2002). Was That Really Me? How Everyday Stress Brings Out Our Hidden Personality. Davies-Black.'],
  related: ['personality/foundations/cognitive-functions'],
}

export default guide
