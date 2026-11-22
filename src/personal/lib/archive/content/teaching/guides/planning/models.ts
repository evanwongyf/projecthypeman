import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Several well-known models describe the phases of an effective lesson. They come from different traditions but agree more than they differ: gain attention, connect to prior knowledge, present new material, practise with feedback, and check learning.',
  nutshell: [
    '**Gagné’s nine events**: a sequence from gaining attention to enhancing retention and transfer.',
    '**The 5E model**: engage, explore, explain, elaborate, evaluate. Popular in science and inquiry.',
    '**Hunter’s lesson design**: anticipatory set, objective, input, modelling, checking, guided and independent practice.',
    'Pick the model that fits your content and learners; they are frameworks, not scripts.',
  ],
  sections: [
    {
      id: 'gagne',
      title: 'Gagné’s nine events of instruction',
      lead: 'Robert Gagné, The Conditions of Learning (1965).',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Gain attention', body: 'A question, problem, surprising fact or demonstration.' },
            { title: 'Inform learners of the objective', body: 'Say what they will be able to do and why it matters.' },
            { title: 'Stimulate recall of prior learning', body: 'Connect to what they already know.' },
            { title: 'Present the content', body: 'In organised, meaningful chunks, with examples.' },
            { title: 'Provide learning guidance', body: 'Worked examples, analogies, mnemonics, prompts.' },
            { title: 'Elicit performance', body: 'Learners practise.' },
            { title: 'Provide feedback', body: 'Specific, immediate feedback on performance.' },
            { title: 'Assess performance', body: 'Check that the objective has been met.' },
            { title: 'Enhance retention and transfer', body: 'Varied practice, real contexts and later review.' },
          ],
        },
      ],
    },
    {
      id: '5e',
      title: 'The 5E model',
      lead: 'BSCS, 1980s.',
      blocks: [
        {
          t: 'cycle',
          items: [
            { name: 'Engage', body: 'Spark interest and surface prior ideas and misconceptions.' },
            { name: 'Explore', body: 'Learners investigate, observe and gather data, usually hands-on.' },
            { name: 'Explain', body: 'Learners share findings; the teacher introduces the concepts and vocabulary that explain them.' },
            { name: 'Elaborate', body: 'Learners apply the concept to a new situation.' },
            { name: 'Evaluate', body: 'Learners and teacher check understanding.' },
          ],
          caption: 'Evaluation often happens throughout. A unit can loop through the cycle several times.',
        },
        {
          t: 'callout',
          tone: 'note',
          text: 'The 5E model places exploration before explanation. This works well when learners have enough background to make sense of what they explore; otherwise, strengthen the Explain phase or add guidance. See [inquiry-based learning](@teaching/techniques/active-learning/inquiry).',
        },
      ],
    },
    {
      id: 'hunter',
      title: 'Hunter’s lesson design',
      lead: 'Madeline Hunter, 1970s–80s.',
      blocks: [
        {
          t: 'terms',
          items: [
            { term: 'Anticipatory set', def: 'A short activity that focuses attention and connects to prior learning.' },
            { term: 'Objective and purpose', def: 'What learners will learn and why.' },
            { term: 'Input', def: 'The new information and skills, presented clearly.' },
            { term: 'Modelling', def: 'Showing what the skill or product looks like.' },
            { term: 'Checking for understanding', def: 'Checking before moving to practice.' },
            { term: 'Guided practice', def: 'Practice under the teacher’s supervision.' },
            { term: 'Independent practice', def: 'Practice without help, to build fluency.' },
          ],
        },
      ],
    },
    {
      id: 'compare',
      title: 'Side by side',
      blocks: [
        {
          t: 'table',
          head: ['Phase', 'Gagné', '5E', 'Hunter'],
          rows: [
            ['Hook and connect', 'Gain attention; inform objective; recall prior learning', 'Engage', 'Anticipatory set; objective'],
            ['New learning', 'Present content; learning guidance', 'Explore; Explain', 'Input; modelling'],
            ['Practice', 'Elicit performance; feedback', 'Elaborate', 'Checking; guided practice; independent practice'],
            ['Assess and consolidate', 'Assess; enhance retention', 'Evaluate', '(closure)'],
          ],
          caption: 'The biggest difference: 5E puts exploration before explanation; Gagné and Hunter explain first.',
        },
      ],
    },
  ],
  sources: [
    'Gagné, R. M. (1985). *The conditions of learning and theory of instruction* (4th ed.). Holt, Rinehart and Winston.',
    'Bybee, R. W., et al. (2006). *The BSCS 5E instructional model: Origins and effectiveness*. BSCS.',
    'Hunter, M. (1982). *Mastery teaching*. TIP Publications.',
  ],
  related: ['teaching/guides/planning/lesson-plan', 'teaching/techniques/instruction/rosenshine', 'teaching/techniques/active-learning/inquiry'],
}

export default guide
