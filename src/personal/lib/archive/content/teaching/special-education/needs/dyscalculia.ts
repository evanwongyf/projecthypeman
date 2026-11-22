import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Dyscalculia is a specific learning difficulty with number: understanding quantities, learning number facts and carrying out calculations. It goes beyond ordinary struggles with maths, and it improves with teaching that builds number sense from concrete experience.',
  nutshell: [
    'At its core is a weak **number sense**: an intuitive grasp of quantity and how numbers relate.',
    'Estimates suggest around 3–7% of learners have dyscalculia.',
    'Teach through **concrete, then pictorial, then abstract** representations (CPA).',
    'Reduce memory and time pressure where fact recall is not the goal, and watch for maths anxiety.',
  ],
  sections: [
    {
      id: 'what',
      title: 'What dyscalculia is',
      blocks: [
        {
          t: 'p',
          text: 'Brian Butterworth and others describe dyscalculia as a core difficulty in representing and comparing quantities. A learner may count "1, 2, 3, 4, 5" fluently but not grasp that 5 is a set of five things, or that 8 is more than 6. Without this foundation, everything built on it is fragile.',
        },
        {
          t: 'list',
          items: [
            'Difficulty judging which of two numbers is larger, or estimating quantities.',
            'Counting objects one by one when others would recognise small groups instantly (subitising).',
            'Heavy reliance on finger counting well beyond when peers have stopped.',
            'Difficulty remembering number facts, even after lots of practice.',
            'Confusion with place value (writing 1003 for "one hundred and three").',
            'Difficulty with money, time and measurement in daily life.',
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Dyscalculia and maths anxiety',
          text: 'Maths anxiety is common and can look similar, but it is a fear response rather than a core number-processing difficulty. The two often go together, and anxiety makes any difficulty worse. Specialists can help tell them apart.',
        },
      ],
    },
    {
      id: 'cpa',
      title: 'Concrete, pictorial, abstract',
      lead: 'Building meaning before symbols.',
      blocks: [
        {
          t: 'levels',
          items: [
            { name: 'Concrete', body: 'Handle real objects: counters, Dienes blocks, Cuisenaire rods, bead strings. *Make 3 groups of 4 counters.*' },
            { name: 'Pictorial', body: 'Draw or view representations: dots, bar models, number lines, ten frames. *Draw 3 bars of 4 squares.*' },
            { name: 'Abstract', body: 'Use numbers and symbols. *3 × 4 = 12.*' },
          ],
          caption: 'Based on Bruner’s enactive, iconic and symbolic modes (see [social constructivism](@teaching/theories/social-constructivism)). Move back and forth, and link the stages explicitly.',
        },
      ],
    },
    {
      id: 'support',
      title: 'Support in class',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Use manipulatives and visuals at any age, not only in early years.',
            'Teach number relationships explicitly: 7 is 5 and 2; 9 is one less than 10.',
            'Teach a small number of efficient strategies instead of rote memorising all facts.',
            'Allow number lines, multiplication grids or calculators when the goal is reasoning, not recall.',
            'Give extra time and fewer, well-chosen questions.',
            'Check understanding of vocabulary: "difference", "product", "less than".',
          ],
          dont: [
            'Use timed tests as the main practice.',
            'Rush to abstract symbols before quantities are understood.',
            'Assume more of the same drill will fix it.',
            'Call a learner "not a maths person" (see [motivation](@teaching/theories/motivation)).',
          ],
        },
      ],
    },
  ],
  sources: [
    'Butterworth, B. (2018). *Dyscalculia: From science to education*. Routledge.',
    'Butterworth, B., Varma, S., & Laurillard, D. (2011). Dyscalculia: From brain to education. *Science, 332*(6033), 1049–1053.',
    'Education Endowment Foundation. (2022). *Improving mathematics in the early years and key stage 1: Guidance report*.',
  ],
  related: ['teaching/special-education/needs/dyslexia', 'teaching/techniques/instruction/worked-examples', 'teaching/special-education/foundations/accommodations', 'teaching/subjects/maths'],
}

export default guide
