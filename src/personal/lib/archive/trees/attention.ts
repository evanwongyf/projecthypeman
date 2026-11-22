import type { ArchiveNode } from '../topics'

// Attention and retention: how attention works and fails, the myths about attention spans,
// sustaining attention in lessons and in self-study, measuring it, and how memories are
// encoded, consolidated, forgotten and kept, with the maths of forgetting curves, spacing
// schedules and spaced-repetition algorithms, worked step by step.

export const ATTENTION: ArchiveNode = {
  slug: 'attention',
  title: 'Attention and retention',
  blurb: 'How attention works and why it wanders, the myths about attention spans, keeping a class focused, and the science and maths of remembering: forgetting curves, spacing, retrieval, sleep and spaced-repetition algorithms, with worked examples and interactive models.',
  glyph: '◉',
  color: 'color-mix(in srgb, var(--orange) 50%, var(--pink))',
  tags: ['attention', 'focus', 'concentration', 'attention span', 'retention', 'forgetting curve', 'spaced repetition', 'retrieval practice', 'memory', 'mind wandering', 'vigilance'],
  children: [
    { slug: 'start-here', title: 'Start here: attention gets it in, retention keeps it', glyph: '★', blurb: 'The pipeline from attention to long-term memory in one page, the shelf map and the five most useful findings.', minutes: 8, tags: ['overview', 'roadmap'] },
    {
      slug: 'attention',
      title: 'Attention',
      glyph: '◉',
      group: 'Attention',
      blurb: 'How attention works, myths about attention spans, keeping a class with you, focusing on your own, and how attention is measured.',
      children: [
        { slug: 'how-attention-works', title: 'How attention works', blurb: 'Selective, sustained and divided attention, Posner’s three networks, the bottleneck, inattentional blindness and working memory limits.', minutes: 13, tags: ['selective attention', 'posner', 'alerting orienting executive', 'inattentional blindness', 'working memory', 'cocktail party'] },
        { slug: 'attention-span-myths', title: 'Attention spans: myths and evidence', blurb: 'The goldfish statistic, the 10-minute rule, vigilance decrement and mind wandering: what is real and what is not.', minutes: 11, tags: ['attention span', 'goldfish myth', '10 minute rule', 'vigilance decrement', 'mind wandering'] },
        { slug: 'sustaining-attention-in-class', title: 'Sustaining attention in class', blurb: 'Changes of activity, retrieval breaks, cold calling, pace, novelty and a model of attention across a lesson.', minutes: 12, tags: ['engagement', 'lesson pace', 'cold calling', 'active breaks', 'classroom attention'] },
        { slug: 'focus-for-learners', title: 'Focusing on your own', blurb: 'Focus blocks, environment design, phones, breaks, implementation intentions and attention differences such as ADHD.', minutes: 11, tags: ['focus', 'pomodoro', 'deep work', 'distraction', 'adhd', 'self-control'] },
        { slug: 'measuring-attention', title: 'Measuring attention', blurb: 'Reaction times, vigilance tasks, thought probes and signal detection theory, with d′ worked out step by step.', minutes: 12, tags: ['signal detection', 'd prime', 'vigilance task', 'thought probes', 'reaction time'] },
      ],
    },
    {
      slug: 'retention',
      title: 'Retention',
      glyph: '↻',
      group: 'Retention',
      blurb: 'How memories are made and kept: encoding, the forgetting curve, spacing, retrieval practice, interleaving and sleep.',
      children: [
        { slug: 'encoding', title: 'Getting it in: encoding', blurb: 'Levels of processing, elaboration, the generation effect, dual coding and why meaning beats repetition.', minutes: 11, tags: ['encoding', 'levels of processing', 'generation effect', 'elaboration', 'dual coding'] },
        { slug: 'forgetting-curve', title: 'The forgetting curve', blurb: 'Ebbinghaus’s experiments, savings, the exponential and power models of forgetting, with worked maths and an interactive model.', minutes: 14, tags: ['ebbinghaus', 'forgetting curve', 'savings', 'exponential decay', 'power law'] },
        { slug: 'spacing', title: 'Spacing: when to review', blurb: 'The spacing effect, the optimal gap, expanding versus equal intervals, and the arithmetic of review schedules.', minutes: 13, tags: ['spacing effect', 'distributed practice', 'optimal gap', 'cepeda', 'review schedule'] },
        { slug: 'retrieval-practice', title: 'Retrieval practice: the testing effect', blurb: 'Why recalling beats rereading, the key experiments, feedback, and formats that work.', minutes: 12, tags: ['testing effect', 'retrieval practice', 'roediger', 'karpicke', 'quizzing'] },
        { slug: 'desirable-difficulties', title: 'Desirable difficulties and interleaving', blurb: 'Bjork’s storage and retrieval strength, interleaving, varied practice and why fluency misleads.', minutes: 11, tags: ['desirable difficulties', 'bjork', 'interleaving', 'variation', 'illusion of fluency'] },
        { slug: 'sleep-and-consolidation', title: 'Sleep and consolidation', blurb: 'What sleep does for memory, the cost of all-nighters, naps and timing study around sleep.', minutes: 10, tags: ['sleep', 'consolidation', 'naps', 'all-nighter', 'hippocampus'] },
      ],
    },
    {
      slug: 'practice',
      title: 'Putting it to work',
      glyph: '✦',
      group: 'Practice',
      blurb: 'Spaced-repetition algorithms and their maths, designing lessons for retention, a study plan calculator and case studies.',
      children: [
        { slug: 'spaced-repetition-algorithms', title: 'Spaced-repetition algorithms', blurb: 'The Leitner system, SuperMemo’s SM-2 and modern models (FSRS), with every formula worked through.', minutes: 15, tags: ['leitner', 'sm-2', 'supermemo', 'anki', 'fsrs', 'algorithm'] },
        { slug: 'planning-reviews', title: 'Planning reviews: the workload maths', blurb: 'How many reviews a day a flashcard habit costs, how far ahead to start before an exam, and a worked revision plan.', minutes: 12, tags: ['study plan', 'workload', 'revision timetable', 'exam preparation'] },
        { slug: 'lessons-for-retention', title: 'Designing lessons for retention', blurb: 'Retrieval starters, spaced homework, cumulative quizzes, interleaved practice and a term plan.', minutes: 11, tags: ['retrieval starters', 'cumulative assessment', 'spaced homework', 'lesson design'] },
        { slug: 'case-studies', title: 'Case studies', blurb: 'Six learners and classes: the crammer, the rereader, the distracted class, the language learner, the medical student and the revision term.', minutes: 12, tags: ['case studies', 'examples'] },
      ],
    },
  ],
}
