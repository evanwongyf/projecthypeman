import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'AI assistants can save teachers time and give learners new ways to practise and get feedback. They can also produce confident errors and let learners skip the thinking that learning depends on. The principles of good teaching still apply; AI changes the tools, not how memory and understanding work.',
  nutshell: [
    '**For teachers**: useful for drafting resources, examples, quizzes and differentiated texts, but check everything.',
    '**For learners**: helpful when it prompts thinking (quizzing, explaining back, feedback), harmful when it replaces thinking.',
    'Early evidence suggests unrestricted AI help can boost practice scores while **reducing** learning; guardrails that make learners think help.',
    'Redesign some assessment so it shows the learner’s own thinking, and teach AI literacy explicitly.',
  ],
  sections: [
    {
      id: 'teachers',
      title: 'Uses for teachers',
      blocks: [
        {
          t: 'table',
          head: ['Task', 'How AI can help', 'Watch out for'],
          rows: [
            ['Examples and non-examples', 'Generate varied examples of a concept quickly.', 'Subtle errors; check each one.'],
            ['Retrieval quizzes', 'Draft questions from your unit content, including misconception-based distractors.', 'Questions that test the wrong thing or have two right answers.'],
            ['Differentiated texts', 'Rewrite a text at different reading levels.', 'Meaning lost or changed in simplification.'],
            ['Model answers', 'Draft answers at different quality levels for learners to compare.', 'Answers that do not match your mark scheme.'],
            ['Feedback drafts', 'Suggest comments on common errors.', 'Generic feedback; privacy of learner work.'],
            ['Planning', 'Brainstorm activities or sequences.', 'Activities that are fun but do not target the objective.'],
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Privacy',
          text: 'Do not paste identifiable learner information into AI tools unless your school has approved the tool for that purpose. Follow your institution’s data protection policy.',
        },
      ],
    },
    {
      id: 'learners',
      title: 'Learners using AI',
      blocks: [
        {
          t: 'p',
          text: 'In a large field study in high school maths, students given unrestricted access to a chatbot during practice solved more practice problems, but did worse on a later exam without it than students who had no access. A version designed as a tutor, giving hints rather than answers, largely avoided the harm (Bastani et al., 2025). The lesson matches everything else in this archive: learning comes from the learner’s own effortful thinking.',
        },
        {
          t: 'dodont',
          do: [
            'Teach learners to use AI to quiz them, explain a concept differently, or critique a draft they wrote.',
            'Require learners to attempt tasks before asking AI.',
            'Teach them to verify facts and never cite sources they have not checked. See [using AI tools responsibly](@research/ai-tools).',
            'Be clear about what AI use is allowed on each task.',
          ],
          dont: [
            'Ban and ignore it; learners will use it anyway without guidance.',
            'Allow AI to do tasks whose purpose is to practise the skill being learned.',
            'Assume AI detectors are reliable; they produce false positives.',
          ],
        },
      ],
    },
    {
      id: 'assessment',
      title: 'Assessment in an AI world',
      blocks: [
        {
          t: 'list',
          items: [
            'More **in-class writing and problem solving**, where you can see the process.',
            '**Process evidence**: plans, drafts and reflections, not just the final product.',
            '**Oral checks**: short conversations where learners explain their work.',
            '**Personal and local tasks**: drawing on class discussions, local data or learners’ own experiences.',
            'Tasks that **use AI openly**: critique an AI answer, improve it, and explain the changes.',
          ],
        },
      ],
    },
  ],
  sources: [
    'Bastani, H., Bastani, O., Sungu, A., Ge, H., Kabakcı, Ö., & Mariman, R. (2025). Generative AI without guardrails can harm learning: Evidence from high school mathematics. *Proceedings of the National Academy of Sciences, 122*.',
    'UNESCO. (2023). *Guidance for generative AI in education and research*.',
    'Department for Education. (2023). *Generative artificial intelligence (AI) in education* (policy paper, updated since).',
  ],
  related: ['research/ai-tools', 'teaching/assessment/test-design', 'teaching/techniques/learning-strategies/retrieval-practice'],
}

export default guide
