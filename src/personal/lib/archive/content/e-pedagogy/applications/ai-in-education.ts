import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Generative AI can explain, question, give feedback and role-play at any hour, for any learner. That could finally deliver something close to a personal tutor for everyone. It can also do students’ thinking for them. Early randomised studies show both outcomes, and the difference is design.',
  nutshell: [
    '**Bloom’s two-sigma problem** (1984): one-to-one tutoring with mastery learning produced achievement about two standard deviations above conventional classes (later studies find smaller but still large effects).',
    'AI tutors **with pedagogical guardrails** produced large gains in randomised trials (Kestin et al., 2025; De Simone et al., 2025).',
    '**Unguarded** AI access improved practice scores but **harmed** later unaided exam performance (Bastani et al., 2025).',
    'Good use: AI that **asks rather than tells**, gives hints, checks understanding, and is used for practice and feedback, with clear rules.',
  ],
  sections: [
    {
      id: 'two-sigma',
      title: 'The two-sigma problem',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{Percentile} = \Phi(d) \times 100`,
          caption: 'The percentile of the control group reached by the average treated learner, for an effect size d (normal distribution assumed).',
          plain: 'An effect size says how many standard deviations a group improved. Φ (the normal curve’s cumulative area) turns that into “the average learner in the treated group now outscores this percentage of the comparison group”. Bloom’s two sigma means the average tutored student did better than about 98% of students taught conventionally.',
          where: [
            { sym: 'd', def: 'effect size in standard deviations' },
            { sym: String.raw`\Phi(d)`, def: 'the area under the standard normal curve to the left of d' },
          ],
          syntax: [
            { sym: String.raw`\Phi`, say: '“capital phi”: the standard normal cumulative distribution function, read from a z-table' },
          ],
          worked: {
            title: 'Bloom’s 2.0 against more typical tutoring effects',
            steps: [
              String.raw`\(d = 2.0\): \(\Phi(2.0) \approx 0.977\), so the 98th percentile.`,
              String.raw`\(d = 0.79\) (VanLehn’s human tutoring average): \(\Phi(0.79) \approx 0.785\), the 79th percentile.`,
              String.raw`\(d = 0.3\) (the Nigerian AI-tutor pilot): \(\Phi(0.3) \approx 0.618\), the 62nd percentile.`,
            ],
            why: [
              'read Φ(2) from a z-table',
              'the same for a more typical tutoring effect',
              'and for a recent AI-tutor trial',
            ],
            answer: 'Two sigma moves the average learner from the 50th to the 98th percentile; realistic tutoring effects move them to roughly the 60th–80th, which is still very large by education standards.',
          },
        },
      ],
    },
    {
      id: 'evidence',
      title: 'What the trials found',
      blocks: [
        { t: 'table', head: ['Study', 'Design', 'Finding'], rows: [
          ['Kestin et al. (2025), Harvard physics', 'Randomised crossover: AI tutor at home versus an active-learning class', 'AI group learned more than twice as much in less time, and reported more engagement'],
          ['De Simone et al. (2025), Nigeria (World Bank)', 'Randomised: six weeks of after-school sessions with GPT-4 and teachers', 'About 0.3 SD gain in English; benefits across ability levels'],
          ['Bastani et al. (2025), Turkish high-school maths', 'Randomised: no AI, open GPT-4 (“GPT Base”), or a tutor version with hints and no answers (“GPT Tutor”)', 'Practice scores up 48% (Base) and 127% (Tutor); on the later exam without AI, Base students did 17% worse than controls, Tutor students no worse'],
        ] },
        { t: 'callout', tone: 'warn', title: 'The lesson', text: 'AI that gives answers makes practice look better and learning worse. AI designed to make the learner think (Socratic questions, hints, checking steps) can help a lot.' },
      ],
    },
    {
      id: 'guardrails',
      title: 'Guardrails that protect learning',
      blocks: [
        { t: 'dodont', do: [
          'Configure tutors to ask questions and give hints before answers',
          'Use AI for explanations in different ways, practice questions, feedback on drafts, and role-play',
          'Require learners to show their own reasoning and to verify AI claims',
          'Teach how AI works, where it fails (hallucinations), and its biases',
          'Keep human relationships at the centre: AI supports teachers, not replaces them',
        ], dont: [
          'Allow unrestricted AI on tasks designed to build the skill the AI performs',
          'Rely on AI-text detectors, which have high false-positive rates and are biased against non-native writers',
          'Upload personal data about students into tools without approved data protection',
          'Assume access is equal: some students have paid tools, others none',
        ] },
        { t: 'example', title: 'A one-page classroom AI policy', lines: [
          { label: 'Green', text: 'Brainstorming, asking for explanations, generating practice questions, checking grammar after writing your own draft.' },
          { label: 'Amber (declare it)', text: 'Feedback on a draft; translating a source; help planning a structure.' },
          { label: 'Red', text: 'Generating work you submit as your own; using AI in assessments unless allowed.' },
          { label: 'Always', text: 'Check facts and sources; note which tool you used and how.' },
        ] },
      ],
    },
  ],
  sources: [
    'Bloom, B. S. (1984). The 2 sigma problem. Educational Researcher, 13(6), 4–16.',
    'VanLehn, K. (2011). The relative effectiveness of human tutoring, intelligent tutoring systems, and other tutoring systems. Educational Psychologist, 46(4), 197–221.',
    'Kestin, G. et al. (2025). AI tutoring outperforms in-class active learning. Scientific Reports, 15, 17458.',
    'De Simone, M. E. et al. (2025). From chalkboards to chatbots. World Bank Policy Research Working Paper.',
    'Bastani, H. et al. (2025). Generative AI without guardrails can harm learning. PNAS, 122(26).',
    'Liang, W. et al. (2023). GPT detectors are biased against non-native English writers. Patterns, 4(7).',
    'UNESCO (2023). Guidance for Generative AI in Education and Research.',
  ],
  related: ['agentic-ai/trends/work-and-learning', 'e-pedagogy/applications/online-assessment', 'ai/practice/ai-assistants'],
}

export default guide
