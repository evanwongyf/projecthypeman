import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'A unit is a sequence of lessons on one topic, usually lasting a few weeks. Planning at unit level lets you decide what knowledge matters most, in what order it builds, and when it will be revisited, which a single lesson plan cannot.',
  nutshell: [
    'Decide the big goals and the end assessment first ([backward design](@teaching/guides/planning/backward-design)).',
    'Identify the **core knowledge** and put it in an order where each part builds on the last.',
    'Plan **when ideas come back**: retrieval, spacing and interleaving across the weeks.',
    'Mark **checkpoints** where you will find out what has stuck and adjust.',
  ],
  sections: [
    {
      id: 'steps',
      title: 'Planning a unit, step by step',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Set the destination', body: 'What should learners understand and be able to do at the end? What is the final assessment?' },
            { title: 'List the core knowledge', body: 'The facts, concepts, vocabulary and procedures learners must know. A **knowledge organiser**, one page listing them, helps teachers and learners.' },
            { title: 'Find the prerequisites', body: 'What must learners already know? Plan to check it early.' },
            { title: 'Sequence', body: 'Order the content so each idea builds on earlier ones. Simple before complex; concrete before abstract; foundational concepts before those that depend on them.' },
            { title: 'Identify tricky points', body: 'Threshold concepts and common misconceptions. Give these more time.' },
            { title: 'Plan revisiting', body: 'Schedule retrieval of earlier content in later lessons and homework. See [spaced practice](@teaching/techniques/learning-strategies/spaced-practice).' },
            { title: 'Plan checkpoints', body: 'Short assessments at key points, with time set aside to reteach.' },
            { title: 'Draft lesson outlines', body: 'One or two lines per lesson: objective and main task. Detail comes later.' },
          ],
        },
      ],
    },
    {
      id: 'organiser',
      title: 'A knowledge organiser',
      blocks: [
        {
          t: 'example',
          title: 'Unit: The Industrial Revolution (extract)',
          lines: [
            { label: 'Key dates', text: '1764 spinning jenny · 1769 Watt’s improved steam engine patent · 1825 Stockton and Darlington Railway · 1833 Factory Act' },
            { label: 'Key terms', text: 'urbanisation · factory system · textile · cottage industry · reform' },
            { label: 'Key people', text: 'Richard Arkwright · James Watt · George Stephenson' },
            { label: 'Big ideas', text: 'New power sources changed where and how people worked. Cities grew fast, bringing both opportunity and harsh living conditions. Reform came slowly, pushed by campaigners and workers.' },
            { label: 'Use', text: 'Learners self-quiz from it as homework; teachers use it to write retrieval questions.' },
          ],
        },
      ],
    },
    {
      id: 'timeline',
      title: 'Mapping the weeks',
      blocks: [
        {
          t: 'table',
          head: ['Week', 'New content', 'Revisited', 'Check'],
          rows: [
            ['1', 'Before industrialisation; cottage industry', 'Prerequisite check: what is a factory?', 'Baseline quiz'],
            ['2', 'Inventions and the factory system', 'Week 1 key terms', '-'],
            ['3', 'Urbanisation and living conditions', 'Inventions; factory system', 'Mid-unit quiz'],
            ['4', 'Reform and campaigners', 'Living conditions; inventions (mixed)', '-'],
            ['5', 'Extended writing: causes and consequences', 'Everything, interleaved', 'Final assessment'],
          ],
          caption: 'Each week both teaches new content and brings earlier content back.',
        },
      ],
    },
  ],
  sources: [
    'Wiggins, G., & McTighe, J. (2005). *Understanding by design* (2nd ed.). ASCD.',
    'Meyer, J. H. F., & Land, R. (2003). Threshold concepts and troublesome knowledge. In C. Rust (Ed.), *Improving student learning*. OCSLD.',
    'Myatt, M. (2018). *The curriculum: Gallimaufry to coherence*. John Catt.',
  ],
  related: ['teaching/guides/planning/backward-design', 'teaching/guides/planning/lesson-plan', 'teaching/techniques/learning-strategies/spaced-practice'],
}

export default guide
