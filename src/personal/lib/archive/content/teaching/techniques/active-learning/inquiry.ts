import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Inquiry-based learning starts with a question and asks learners to investigate it, gathering evidence and drawing conclusions, much as scientists or historians do. The key design choice is how much guidance to give.',
  nutshell: [
    'Inquiry ranges from **confirmation** (method and answer given) to **open** (learners pose the question and design everything).',
    '**Guided inquiry** tends to beat both pure discovery and pure telling for learning.',
    'Learners need enough background knowledge to make sense of what they find.',
    'The 5E model (**engage, explore, explain, elaborate, evaluate**) is a popular structure.',
  ],
  sections: [
    {
      id: 'levels',
      title: 'Four levels of inquiry',
      lead: 'Banchi and Bell (2008).',
      blocks: [
        {
          t: 'levels',
          items: [
            { name: 'Confirmation inquiry', body: 'Learners confirm a known result by following a given method. Question, method and expected answer are all provided.' },
            { name: 'Structured inquiry', body: 'The teacher gives the question and method; learners work out the answer from their data.' },
            { name: 'Guided inquiry', body: 'The teacher gives the question; learners design the method and reach the answer.' },
            { name: 'Open inquiry', body: 'Learners pose their own question, design the investigation and draw conclusions.' },
          ],
          caption: 'From most to least teacher guidance, bottom to top. Learners usually need to work through the lower levels before open inquiry is productive.',
        },
      ],
    },
    {
      id: 'evidence',
      title: 'How much guidance?',
      lead: 'What the research says.',
      blocks: [
        {
          t: 'p',
          text: 'Studies of unassisted discovery, where learners are left to find things out alone, generally show weaker learning than explicit instruction, especially for novices (Kirschner, Sweller & Clark, 2006). But meta-analyses find that **enhanced or guided discovery**, with prompts, feedback, worked examples and explanations, outperforms other approaches (Alfieri et al., 2011; Lazonder & Harmsen, 2016).',
        },
        {
          t: 'callout',
          tone: 'note',
          text: 'The debate is less "inquiry versus direct instruction" than "how much guidance, and when". Novices need more; experienced learners can handle more openness. See [cognitive load theory](@teaching/theories/cognitive-load).',
        },
        {
          t: 'list',
          items: [
            'Give learners the key background knowledge first.',
            'Provide prompts: "What will you change? What will you keep the same? How will you measure it?"',
            'Check in often and give feedback on the process.',
            'Always finish with explicit explanation that connects findings to the concept.',
          ],
        },
      ],
    },
    {
      id: '5e',
      title: 'The 5E model',
      lead: 'A structure for an inquiry lesson or unit.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Engage', body: 'Spark curiosity and surface prior ideas: a puzzling demonstration, a question, a photo.' },
            { title: 'Explore', body: 'Learners investigate hands-on, collecting data and observations.' },
            { title: 'Explain', body: 'Learners share findings; the teacher introduces concepts and vocabulary that make sense of them.' },
            { title: 'Elaborate', body: 'Learners apply the concept to a new situation.' },
            { title: 'Evaluate', body: 'Learners and teacher assess understanding.' },
          ],
        },
        {
          t: 'p',
          text: 'The 5E model was developed by the Biological Sciences Curriculum Study (BSCS) in the 1980s. See [lesson models](@teaching/guides/planning/models) for more.',
        },
      ],
    },
  ],
  sources: [
    'Banchi, H., & Bell, R. (2008). The many levels of inquiry. *Science and Children, 46*(2), 26–29.',
    'Alfieri, L., Brooks, P. J., Aldrich, N. J., & Tenenbaum, H. R. (2011). Does discovery-based instruction enhance learning? *Journal of Educational Psychology, 103*(1), 1–18.',
    'Lazonder, A. W., & Harmsen, R. (2016). Meta-analysis of inquiry-based learning: Effects of guidance. *Review of Educational Research, 86*(3), 681–718.',
    'Bybee, R. W., et al. (2006). *The BSCS 5E instructional model: Origins and effectiveness*. BSCS.',
  ],
  related: ['teaching/theories/constructivism', 'teaching/techniques/active-learning/project-based', 'teaching/guides/planning/models'],
}

export default guide
