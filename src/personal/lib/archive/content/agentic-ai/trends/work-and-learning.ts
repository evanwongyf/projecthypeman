import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Agents change work not by replacing whole jobs at once but by taking over tasks: the well-specified, checkable, digital parts of a job go first. For students and teachers, the question is what to learn when an agent can do a growing share of the routine work, and how to use agents without losing the skills needed to supervise them.',
  nutshell: [
    'Tasks most exposed: **digital, well-specified, checkable, repetitive**.',
    'Tasks least exposed: **physical, relational, high-stakes judgement, ambiguous goals**.',
    'Human roles shift towards **specifying, supervising, verifying and taking responsibility**.',
    'For learners: build **fundamentals and judgement first**, then learn to direct and check agents.',
  ],
  sections: [
    {
      id: 'tasks',
      title: 'Which tasks change first',
      blocks: [
        { t: 'table', head: ['Task feature', 'More exposed', 'Less exposed'], rows: [
          ['Medium', 'Digital (text, code, data)', 'Physical, in-person'],
          ['Specification', 'Clear goal and success test', 'Vague or contested goals'],
          ['Checkability', 'Easy to verify (tests, totals)', 'Hard to verify (strategy, care)'],
          ['Stakes', 'Low, reversible', 'High, irreversible'],
          ['Relationships', 'Transactional', 'Trust-based (teaching, nursing, counselling)'],
        ] },
      ],
    },
    {
      id: 'teaming',
      title: 'Human–agent teaming',
      blocks: [
        { t: 'levels', caption: 'Levels of human involvement, from most to least.', items: [
          { name: 'Human does, agent suggests', body: 'Autocomplete, suggestions.' },
          { name: 'Agent drafts, human approves each step', body: 'The human is “in the loop”.' },
          { name: 'Agent acts, human reviews results', body: 'The human is “on the loop”: a pull request, a report.' },
          { name: 'Agent acts, human audits samples', body: 'Spot checks and monitoring.' },
          { name: 'Agent acts alone', body: 'Only for low-stakes, reversible, well-tested tasks.' },
        ] },
        { t: 'callout', tone: 'warn', title: 'Automation complacency', text: 'Decades of research on autopilots and automated systems (Parasuraman and Manzey, 2010) show that people supervising reliable automation stop checking carefully, and lose the skill to take over. The more reliable the agent, the more deliberate the human checks need to be.' },
      ],
    },
    {
      id: 'learning',
      title: 'What students should learn',
      blocks: [
        { t: 'cards', cols: 2, items: [
          { title: 'Fundamentals', body: 'You cannot check what you do not understand. Reading, maths, writing and subject knowledge matter more, not less.' },
          { title: 'Specification', body: 'Saying precisely what you want, with success criteria and constraints.' },
          { title: 'Verification', body: 'Testing claims, checking sources, spotting plausible-looking errors.' },
          { title: 'Decomposition', body: 'Breaking a big goal into checkable steps.' },
          { title: 'Judgement and ethics', body: 'Deciding what should be done, and taking responsibility.' },
          { title: 'Collaboration', body: 'Working with people, which agents cannot replace.' },
        ] },
        { t: 'dodont', do: [
          'Learn a skill by hand before handing it to an agent',
          'Use agents to get feedback, explanations and practice questions',
          'Check every factual claim and citation an agent gives you',
          'Be open about when you used AI, following your school’s rules',
        ], dont: [
          'Let an agent do the thinking the assignment was designed to build',
          'Trust confident output without verification',
          'Give agents access to accounts, data or money you cannot afford to lose',
        ] },
      ],
    },
  ],
  sources: [
    'Eloundou, T. et al. (2024). GPTs are GPTs: Labor market impact potential of LLMs. Science, 384, 1306–1308.',
    'Brynjolfsson, E., Li, D., & Raymond, L. (2025). Generative AI at work. Quarterly Journal of Economics, 140(2), 889–942.',
    'Parasuraman, R., & Manzey, D. H. (2010). Complacency and bias in human use of automation. Human Factors, 52(3), 381–410.',
  ],
  related: ['e-pedagogy/start-here', 'ai/practice/ai-assistants', 'agentic-ai/threats/misuse-and-society'],
}

export default guide
