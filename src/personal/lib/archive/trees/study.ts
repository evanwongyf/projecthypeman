import type { ArchiveNode } from '../topics'

// The study-skills shelves: guides written for learners about their own studying.

export const RESEARCH: ArchiveNode = {
  slug: 'research',
  title: 'Research',
  blurb: 'Find, read and credit sources the right way.',
  glyph: '§',
  color: 'var(--orange)',
  tags: ['sources', 'citation', 'academic'],
  children: [
    {
      slug: 'references',
      title: 'References',
      blurb: 'How to cite a source in your paper and write the reference in APA, MLA, Chicago, Harvard, IEEE and Vancouver.',
      minutes: 12,
      tags: ['citation', 'bibliography', 'apa', 'mla', 'harvard', 'chicago', 'ieee', 'vancouver'],
      custom: 'references',
    },
    { slug: 'research-question', title: 'Asking a research question', blurb: 'Turn a broad topic into a focused question you can actually answer.', minutes: 7, tags: ['topic', 'narrowing', 'finer', 'inquiry', 'dissertation'] },
    { slug: 'finding-sources', title: 'Finding good sources', blurb: 'Search smarter: keywords, Boolean operators, databases and Google Scholar.', minutes: 9, tags: ['search', 'boolean', 'google scholar', 'database', 'library', 'keywords'] },
    { slug: 'evaluating-sources', title: 'Judging a source', blurb: 'The CRAAP test, lateral reading and SIFT for deciding what to trust.', minutes: 9, tags: ['craap', 'sift', 'lateral reading', 'reliability', 'misinformation', 'fake news', 'bias'] },
    { slug: 'primary-secondary', title: 'Primary and secondary sources', blurb: 'What counts as each in different subjects, and how to use both.', minutes: 6, tags: ['primary source', 'secondary source', 'tertiary', 'evidence'] },
    { slug: 'surveys', title: 'Designing a survey', blurb: 'Write clear questions and avoid the traps that bias answers.', minutes: 8, tags: ['questionnaire', 'survey', 'likert', 'sampling', 'leading questions', 'data collection'] },
    { slug: 'reading-papers', title: 'Reading a paper fast', blurb: 'Get the point of a research paper in ten minutes with the three-pass method.', minutes: 8, tags: ['journal article', 'three pass', 'abstract', 'imrad', 'academic reading'] },
    { slug: 'avoiding-plagiarism', title: 'Avoiding plagiarism', blurb: 'Quote, paraphrase and summarise safely, and why patchwriting is a trap.', minutes: 8, tags: ['plagiarism', 'paraphrase', 'quote', 'summarise', 'academic integrity', 'patchwriting'] },
    { slug: 'literature-review', title: 'Writing a literature review', blurb: 'Synthesise sources by theme instead of summarising them one by one.', minutes: 9, tags: ['lit review', 'synthesis matrix', 'dissertation', 'themes'] },
    { slug: 'ai-tools', title: 'Using AI tools responsibly', blurb: 'Where AI helps with research, where it misleads, and how to stay honest.', minutes: 8, tags: ['ai', 'chatgpt', 'claude', 'llm', 'hallucination', 'academic integrity'] },
  ],
}

export const NOTE_TAKING: ArchiveNode = {
  slug: 'note-taking',
  title: 'Note-taking',
  blurb: 'Capture ideas in a way you can use later.',
  glyph: '✎',
  color: 'var(--mint)',
  tags: ['notes', 'notebook'],
  children: [
    { slug: 'why-notes', title: 'What notes are for', blurb: 'Notes help twice: when you write them and when you study them.', minutes: 6, tags: ['encoding', 'storage', 'kiewra'] },
    {
      slug: 'methods',
      title: 'Methods',
      blurb: 'Five proven formats and when to use each.',
      glyph: '▤',
      children: [
        { slug: 'cornell', title: 'The Cornell method', blurb: 'Notes, cues and a summary on one page, built for review.', minutes: 8, tags: ['cornell', 'pauk', 'cue column', 'summary'] },
        { slug: 'outline', title: 'The outline method', blurb: 'Headings and indented points for well-structured material.', minutes: 5, tags: ['outline', 'bullet points', 'hierarchy'] },
        { slug: 'mapping', title: 'Mind maps and concept maps', blurb: 'Draw the connections between ideas.', minutes: 8, tags: ['mind map', 'concept map', 'buzan', 'novak', 'visual notes'] },
        { slug: 'charting', title: 'The charting method', blurb: 'Tables for comparing things across the same features.', minutes: 5, tags: ['table', 'matrix', 'compare', 'chart'] },
        { slug: 'sketchnoting', title: 'Sketchnoting', blurb: 'Words, simple drawings and structure together.', minutes: 6, tags: ['visual notes', 'doodle', 'drawing'] },
      ],
    },
    {
      slug: 'situations',
      title: 'Situations',
      blurb: 'Notes from lectures, from reading, and for the long term.',
      glyph: '◫',
      children: [
        { slug: 'lectures', title: 'Notes in lectures', blurb: 'Listening, selecting and writing fast, and laptop versus pen.', minutes: 8, tags: ['lecture', 'laptop', 'longhand', 'abbreviations', 'class'] },
        { slug: 'reading', title: 'Notes from reading', blurb: 'Annotate, then write notes in your own words.', minutes: 7, tags: ['annotation', 'textbook', 'highlighting', 'margin notes'] },
        { slug: 'review', title: 'Using your notes', blurb: 'Turn notes into questions and study from them properly.', minutes: 7, tags: ['review', 'revision', 'flashcards', 'questions'] },
        { slug: 'zettelkasten', title: 'Linked notes (Zettelkasten)', blurb: 'A system of small, linked notes that grows with you.', minutes: 8, tags: ['zettelkasten', 'luhmann', 'second brain', 'evergreen notes', 'obsidian', 'digital notes'] },
      ],
    },
  ],
}

export const MEMORY: ArchiveNode = {
  slug: 'memory',
  title: 'Memory',
  blurb: 'Techniques that make facts stick.',
  glyph: '◎',
  color: 'var(--lavender)',
  tags: ['remember', 'memorise', 'recall', 'revision'],
  children: [
    { slug: 'how-memory-works', title: 'How memory works', blurb: 'A learner’s guide to getting things in and getting them back out.', minutes: 8, tags: ['working memory', 'long-term memory', 'encoding', 'retrieval'] },
    { slug: 'forgetting', title: 'Why we forget', blurb: 'Decay, interference and retrieval failure, and what to do about each.', minutes: 7, tags: ['forgetting curve', 'interference', 'ebbinghaus', 'tip of the tongue'] },
    { slug: 'active-recall', title: 'Active recall', blurb: 'The single most useful study habit, step by step.', minutes: 7, tags: ['retrieval practice', 'self-testing', 'blurting', 'brain dump'] },
    { slug: 'flashcards', title: 'Making good flashcards', blurb: 'One fact per card, cloze deletions, pictures, and cards that actually teach.', minutes: 9, tags: ['flashcards', 'anki', 'cloze', 'minimum information', 'wozniak'] },
    { slug: 'spaced-repetition', title: 'Spaced repetition systems', blurb: 'How apps schedule reviews, and how to build a daily habit.', minutes: 8, tags: ['srs', 'anki', 'leitner', 'sm-2', 'fsrs', 'schedule'] },
    { slug: 'memory-palace', title: 'The memory palace in depth', blurb: 'Build, fill and reuse palaces for lists, speeches and exams.', minutes: 9, tags: ['method of loci', 'mind palace', 'journey method', 'memory champion'] },
    { slug: 'memorising-text', title: 'Memorising quotes and formulas', blurb: 'First-letter method, chunking and practising lines word for word.', minutes: 7, tags: ['quotes', 'lines', 'formulas', 'first letter', 'speech', 'poem'] },
    { slug: 'vocabulary', title: 'Learning vocabulary', blurb: 'Remember words in a new language, or new subject terms.', minutes: 8, tags: ['language learning', 'words', 'keyword method', 'spanish', 'french'] },
    { slug: 'sleep-and-body', title: 'Sleep, exercise and memory', blurb: 'What your body does to help, or hurt, what you learn.', minutes: 7, tags: ['sleep', 'exercise', 'stress', 'consolidation', 'nap', 'caffeine'] },
  ],
}

export const WRITING: ArchiveNode = {
  slug: 'writing',
  title: 'Writing',
  blurb: 'Plan, draft and edit clear essays.',
  glyph: '¶',
  color: 'var(--teal)',
  tags: ['essay', 'academic writing', 'english'],
  children: [
    {
      slug: 'essentials',
      title: 'Essay essentials',
      blurb: 'From reading the question to the final full stop.',
      glyph: '¶',
      children: [
        { slug: 'process', title: 'The writing process', blurb: 'Plan, draft, revise, edit: why doing them separately works.', minutes: 7, tags: ['planning', 'drafting', 'revising', 'editing', 'writer’s block'] },
        { slug: 'the-question', title: 'Understanding the question', blurb: 'Command words like analyse, evaluate and discuss, and what they want.', minutes: 8, tags: ['command words', 'analyse', 'evaluate', 'discuss', 'compare', 'task words'] },
        { slug: 'thesis', title: 'Writing a thesis statement', blurb: 'One sentence that makes your whole essay hang together.', minutes: 7, tags: ['thesis', 'argument', 'claim', 'main idea'] },
        { slug: 'paragraphs', title: 'Building paragraphs', blurb: 'Topic sentences, PEEL and linking ideas.', minutes: 8, tags: ['peel', 'pee', 'topic sentence', 'point evidence explain link'] },
        { slug: 'intros-conclusions', title: 'Introductions and conclusions', blurb: 'How to start strongly and finish with more than a summary.', minutes: 7, tags: ['introduction', 'conclusion', 'hook', 'funnel'] },
        { slug: 'argument', title: 'Building an argument', blurb: 'Claims, evidence, reasoning and counterarguments.', minutes: 9, tags: ['toulmin', 'counterargument', 'rebuttal', 'persuasive', 'evidence'] },
        { slug: 'persuasive', title: 'Persuasive writing', blurb: 'Ethos, pathos and logos, and techniques for speeches, letters and articles.', minutes: 7, tags: ['persuasive', 'rhetoric', 'ethos', 'pathos', 'logos', 'speech', 'aristotle'] },
      ],
    },
    {
      slug: 'style',
      title: 'Style and polish',
      blurb: 'Making writing clear, precise and correct.',
      glyph: '✧',
      children: [
        { slug: 'clarity', title: 'Clear academic style', blurb: 'Formal but readable: concise sentences, precise words, careful hedging.', minutes: 8, tags: ['academic style', 'concise', 'hedging', 'formal', 'wordiness', 'passive voice'] },
        { slug: 'editing', title: 'Revising and proofreading', blurb: 'A checklist for big-picture revision and line-by-line checks.', minutes: 7, tags: ['proofreading', 'editing', 'revising', 'checklist', 'grammar'] },
        { slug: 'punctuation', title: 'Punctuation that matters', blurb: 'Commas, semicolons, colons, apostrophes and dashes, clearly.', minutes: 8, tags: ['comma', 'semicolon', 'colon', 'apostrophe', 'grammar', 'comma splice'] },
      ],
    },
    {
      slug: 'forms',
      title: 'Kinds of writing',
      blurb: 'Formats you will meet in school and university.',
      glyph: '▭',
      children: [
        { slug: 'compare-contrast', title: 'Compare and contrast essays', blurb: 'Block and point-by-point structures.', minutes: 6, tags: ['comparison', 'comparative essay', 'similarities', 'differences'] },
        { slug: 'lab-report', title: 'Writing a lab report', blurb: 'Aim, method, results, discussion: the scientific format.', minutes: 8, tags: ['science', 'lab report', 'imrad', 'experiment', 'practical'] },
        { slug: 'summaries', title: 'Summaries', blurb: 'Capture the main ideas of a text in a fraction of the words.', minutes: 6, tags: ['summary', 'precis', 'abstract', 'paraphrase'] },
        { slug: 'reflective', title: 'Reflective writing', blurb: 'Write about your own experience and what you learned from it.', minutes: 6, tags: ['reflection', 'gibbs', 'journal', 'placement', 'portfolio'] },
        { slug: 'timed', title: 'Writing under time pressure', blurb: 'Planning and writing essays in exams.', minutes: 6, tags: ['exam essay', 'timed essay', 'exam writing'] },
      ],
    },
  ],
}

export const EXAMS: ArchiveNode = {
  slug: 'exams',
  title: 'Exams and revision',
  blurb: 'Plan your revision, handle the pressure and show what you know on the day.',
  glyph: '✓',
  color: 'var(--mustard)',
  tags: ['exam', 'test', 'revision', 'studying', 'finals', 'gcse', 'a level', 'sat'],
  children: [
    { slug: 'revision-plan', title: 'Making a revision plan', blurb: 'A timetable that spaces topics out and actually gets followed.', minutes: 8, tags: ['revision timetable', 'schedule', 'study plan'] },
    { slug: 'revision-methods', title: 'Revision methods that work', blurb: 'Ranked from most to least effective, with what to do instead of rereading.', minutes: 8, tags: ['study methods', 'rereading', 'highlighting', 'dunlosky', 'effective techniques'] },
    { slug: 'past-papers', title: 'Using past papers', blurb: 'Timed practice, mark schemes and learning from your mistakes.', minutes: 7, tags: ['past papers', 'mark scheme', 'examiner report', 'practice exam'] },
    { slug: 'exam-technique', title: 'Exam technique', blurb: 'Reading questions, managing time and picking up every mark.', minutes: 8, tags: ['timing', 'marks', 'command words', 'exam tips'] },
    { slug: 'multiple-choice', title: 'Multiple-choice strategies', blurb: 'Answer first, eliminate, and when to change your answer.', minutes: 6, tags: ['mcq', 'multiple choice', 'guessing'] },
    { slug: 'problem-subjects', title: 'Revising maths and science', blurb: 'Revising subjects that are about solving problems, not just knowing facts.', minutes: 7, tags: ['maths revision', 'science revision', 'physics', 'chemistry', 'problem solving', 'formulas'] },
    { slug: 'oral-exams', title: 'Oral exams and presentations', blurb: 'Preparing for speaking exams, vivas and assessed presentations.', minutes: 7, tags: ['oral exam', 'viva', 'speaking exam', 'presentation', 'interview'] },
    { slug: 'anxiety', title: 'Handling exam stress', blurb: 'Why nerves happen and evidence-based ways to calm them.', minutes: 8, tags: ['anxiety', 'stress', 'nerves', 'panic', 'reappraisal', 'expressive writing'] },
    { slug: 'the-day', title: 'The night before and the day', blurb: 'Sleep, food, what to pack and what to do in the first five minutes.', minutes: 5, tags: ['exam day', 'night before', 'checklist'] },
    { slug: 'after', title: 'Learning from results', blurb: 'Use a returned test to study better next time.', minutes: 6, tags: ['exam wrapper', 'results', 'feedback', 'mistakes'] },
  ],
}

export const THINKING: ArchiveNode = {
  slug: 'thinking',
  title: 'Thinking',
  blurb: 'Reason clearly, weigh evidence and solve problems.',
  glyph: '◇',
  color: 'color-mix(in srgb, var(--teal) 55%, var(--lavender))',
  tags: ['critical thinking', 'logic', 'reasoning', 'problem solving'],
  children: [
    { slug: 'critical-thinking', title: 'What critical thinking is', blurb: 'The habits of mind behind good judgement.', minutes: 7, tags: ['critical thinking', 'judgement', 'open-minded'] },
    { slug: 'arguments', title: 'Anatomy of an argument', blurb: 'Premises, conclusions, validity and hidden assumptions.', minutes: 8, tags: ['logic', 'premise', 'conclusion', 'valid', 'sound', 'deductive', 'inductive'] },
    { slug: 'fallacies', title: 'Logical fallacies', blurb: 'The common tricks and slips that make bad arguments look good.', minutes: 9, tags: ['fallacy', 'straw man', 'ad hominem', 'false dilemma', 'slippery slope'] },
    { slug: 'biases', title: 'Cognitive biases', blurb: 'Predictable ways our thinking goes wrong, and how to catch them.', minutes: 9, tags: ['bias', 'confirmation bias', 'anchoring', 'kahneman', 'dunning kruger'] },
    { slug: 'numbers', title: 'Reading numbers and statistics', blurb: 'Averages, percentages, risk and graphs that mislead.', minutes: 9, tags: ['statistics', 'percentages', 'relative risk', 'correlation', 'graphs'] },
    { slug: 'scientific-thinking', title: 'Thinking like a scientist', blurb: 'Hypotheses, controls, falsifiability and why one study is never the end.', minutes: 8, tags: ['scientific method', 'hypothesis', 'falsifiability', 'popper', 'control group', 'replication'] },
    { slug: 'problem-solving', title: 'Solving problems', blurb: 'Pólya’s four steps and strategies for when you are stuck.', minutes: 8, tags: ['polya', 'problem solving', 'heuristics', 'stuck', 'maths'] },
    { slug: 'creative', title: 'Creative thinking', blurb: 'Generating ideas: brainstorming, SCAMPER and constraints.', minutes: 7, tags: ['creativity', 'brainstorming', 'scamper', 'ideas', 'divergent thinking'] },
  ],
}

export const HABITS: ArchiveNode = {
  slug: 'habits',
  title: 'Habits and focus',
  blurb: 'Manage your time, beat procrastination and look after the brain that does the studying.',
  glyph: '◷',
  color: 'color-mix(in srgb, var(--orange) 55%, var(--pink))',
  tags: ['productivity', 'focus', 'time management', 'wellbeing'],
  children: [
    { slug: 'procrastination', title: 'Beating procrastination', blurb: 'Why we put things off, and small moves that get you started.', minutes: 8, tags: ['procrastination', 'motivation', 'starting', 'avoidance'] },
    { slug: 'focus', title: 'Focus and distraction', blurb: 'Phones, multitasking and building an environment for deep work.', minutes: 8, tags: ['focus', 'concentration', 'phone', 'multitasking', 'deep work', 'distraction'] },
    { slug: 'pomodoro', title: 'The Pomodoro technique', blurb: 'Work in focused sprints with short breaks.', minutes: 5, tags: ['pomodoro', 'timer', 'breaks', 'cirillo'] },
    { slug: 'time', title: 'Managing your time', blurb: 'Weekly planning, time blocking and deciding what matters.', minutes: 8, tags: ['time management', 'eisenhower', 'time blocking', 'planner', 'priorities'] },
    { slug: 'goals', title: 'Setting goals that work', blurb: 'Specific goals, implementation intentions and WOOP.', minutes: 7, tags: ['goals', 'smart', 'woop', 'implementation intentions', 'oettingen', 'gollwitzer'] },
    { slug: 'habits', title: 'Building study habits', blurb: 'Cues, routines and making studying automatic.', minutes: 7, tags: ['habits', 'routine', 'cue', 'streak', 'consistency'] },
    { slug: 'study-groups', title: 'Studying with others', blurb: 'Make study groups work: quizzing each other, explaining, and avoiding the chat trap.', minutes: 6, tags: ['study group', 'study buddy', 'peer learning', 'group revision'] },
    { slug: 'online-learning', title: 'Studying online', blurb: 'Online courses, recorded lectures and self-paced learning, without drifting off.', minutes: 7, tags: ['online course', 'mooc', 'recorded lectures', 'remote learning', 'e-learning', 'video'] },
    { slug: 'wellbeing', title: 'Rest and wellbeing', blurb: 'Sleep, breaks, movement and knowing when to ask for help.', minutes: 7, tags: ['wellbeing', 'burnout', 'rest', 'sleep', 'mental health', 'breaks'] },
  ],
}
