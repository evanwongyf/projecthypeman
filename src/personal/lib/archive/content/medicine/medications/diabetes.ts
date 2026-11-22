import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Type 2 diabetes treatment is one of the clearer examples of stepped therapy in medicine: start with one well-tolerated drug, add a second from a different mechanism if that is not enough, and move to insulin when the body’s own capacity is too far reduced for pills to cover. Each class nudges a different part of glucose control, the liver’s output, the pancreas’s insulin release, the kidney’s glucose handling, or insulin itself.',
  nutshell: [
    '**Metformin** is almost always tried first: it lowers the liver’s glucose output and improves insulin sensitivity, with low hypoglycaemia risk on its own.',
    '**Sulfonylureas** and **insulin** directly push insulin into the blood, which is effective but carries real low-blood-sugar risk.',
    '**SGLT2 inhibitors** and **GLP-1 drugs** are newer and often added for their extra heart, kidney or weight benefits, not glucose control alone.',
    'Hypoglycaemia (low blood sugar) is an emergency in its own right: confusion, sweating, shakiness, and if untreated, loss of consciousness.',
    'Insulin is not a last resort or a sign of failure, type 1 diabetes always needs it, and many people with type 2 do best on it eventually.',
  ],
  sections: [
    {
      id: 'escalate',
      title: 'How treatment typically escalates',
      blocks: [
        {
          t: 'diagram',
          title: 'A typical type 2 diabetes treatment pathway',
          caption: 'Individual plans vary a great deal, this shows the general shape, not a fixed rule.',
          nodes: [
            { id: 'dx', label: 'Type 2 diabetes diagnosed', shape: 'pill', tone: 'ink', col: 0, row: 0, w: 170 },
            { id: 'life', label: 'Diet and exercise changes', shape: 'rect', tone: 'mint', col: 0, row: 1, w: 160 },
            { id: 'met', label: 'Metformin started', shape: 'rect', tone: 'teal', col: 0, row: 2, w: 150 },
            { id: 'q1', label: 'Target blood sugar reached?', shape: 'diamond', tone: 'pink', col: 1, row: 2, w: 150 },
            { id: 'maintain', label: 'Continue, monitor regularly', shape: 'pill', tone: 'mint', col: 1, row: 1, w: 160 },
            { id: 'add', label: 'Add a second drug: SGLT2, GLP-1, DPP-4 or sulfonylurea', shape: 'rect', tone: 'orange', col: 2, row: 2, w: 185 },
            { id: 'q2', label: 'Still not enough?', shape: 'diamond', tone: 'pink', col: 2, row: 3, w: 140 },
            { id: 'insulin', label: 'Insulin added or substituted', shape: 'rect', tone: 'lavender', col: 1, row: 3, w: 170 },
          ],
          edges: [
            { from: 'dx', to: 'life' },
            { from: 'life', to: 'met' },
            { from: 'met', to: 'q1' },
            { from: 'q1', to: 'maintain', label: 'yes', tone: 'mint' },
            { from: 'q1', to: 'add', label: 'no', tone: 'orange' },
            { from: 'add', to: 'q2' },
            { from: 'q2', to: 'insulin', label: 'yes', tone: 'lavender' },
          ],
        },
      ],
    },
    {
      id: 'hypo',
      title: 'Recognising low blood sugar',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Early signs', body: 'Shakiness, sweating, hunger, a fast heartbeat, irritability.' },
            { title: 'If able to swallow safely', body: 'Take a fast-acting sugar source: glucose tablets, juice, or regular (not diet) soda, then a longer-acting snack once improving.' },
            { title: 'Worsening signs', body: 'Confusion, slurred speech, clumsiness, drowsiness, these mean the brain is running low on fuel.' },
            { title: 'If unconscious or unable to swallow', body: 'This is an emergency: call for help immediately. A glucagon injection kit, if available and the person is trained to use it, can be given; never put food or liquid in the mouth of someone who cannot swallow safely.' },
          ],
        },
      ],
    },
    { id: 'browse', title: 'The medicines', blocks: [{ t: 'med-browser', cls: 'Diabetes' }] },
  ],
}

export default guide
