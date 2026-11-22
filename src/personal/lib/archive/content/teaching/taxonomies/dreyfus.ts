import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Stuart and Hubert Dreyfus described how people move from following rules as novices to acting intuitively as experts. The model is widely used in nursing, medicine, teaching and professional training to decide what kind of support and teaching suits someone at each stage.',
  nutshell: [
    'Five stages: **novice, advanced beginner, competent, proficient, expert**.',
    'Novices need clear rules and procedures; experts act on intuition built from experience.',
    'Teach differently at each stage: rules and checklists early, cases and judgement later.',
    'Patricia Benner applied it famously to nursing in *From Novice to Expert* (1984).',
  ],
  sections: [
    {
      id: 'stages',
      title: 'Five stages',
      blocks: [
        {
          t: 'levels',
          items: [
            { name: 'Novice', body: 'Follows context-free rules rigidly. Little sense of what matters most. Needs clear procedures. *A new driver changing gear at set speeds.*' },
            { name: 'Advanced beginner', body: 'Starts to recognise recurring situations from experience, but treats all aspects as equally important. Needs guidance on priorities.' },
            { name: 'Competent', body: 'Plans deliberately, chooses which elements matter, feels responsible for outcomes. Can cope with crowded situations, but slowly.' },
            { name: 'Proficient', body: 'Sees situations as wholes and notices what is important, but still decides what to do analytically.' },
            { name: 'Expert', body: 'Sees what needs to be done and does it, intuitively and fluidly. Can explain rules but no longer relies on them. *An experienced teacher who senses a class is about to lose focus.*' },
          ],
        },
      ],
    },
    {
      id: 'teaching',
      title: 'Teaching at each stage',
      blocks: [
        {
          t: 'table',
          head: ['Stage', 'What helps'],
          rows: [
            ['Novice', 'Explicit rules, procedures, checklists, [worked examples](@teaching/techniques/instruction/worked-examples), close supervision.'],
            ['Advanced beginner', 'Guidance on what to notice and prioritise; examples of typical situations.'],
            ['Competent', 'Practice planning and decision-making; case studies; feedback on choices.'],
            ['Proficient', 'Complex, varied cases; reflection on intuitive judgements; coaching.'],
            ['Expert', 'Challenging novel situations; opportunities to mentor others and articulate tacit knowledge.'],
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          text: 'This matches [cognitive load theory](@teaching/theories/cognitive-load)’s expertise reversal effect: structured guidance helps novices and can hinder experts.',
        },
      ],
    },
  ],
  sources: [
    'Dreyfus, S. E., & Dreyfus, H. L. (1980). *A five-stage model of the mental activities involved in directed skill acquisition*. University of California, Berkeley.',
    'Benner, P. (1984). *From novice to expert: Excellence and power in clinical nursing practice*. Addison-Wesley.',
  ],
  related: ['teaching/taxonomies/psychomotor', 'teaching/guides/contexts/adults', 'teaching/theories/cognitive-load'],
}

export default guide
