import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Research on motivation only helps if it changes what happens on Monday morning. This guide turns the evidence on this shelf into a method: audit the class against the three needs, design with Keller’s ARCS steps, set task difficulty with the flow map in mind, rewrite a dull instruction in an autonomy-supportive way, and check the result with a short list.',
  nutshell: [
    'Start by **diagnosing**: which of autonomy, competence or relatedness is weakest in this class? The audit below gives a starting point.',
    '**ARCS** gives four design steps: gain **Attention**, show **Relevance**, build **Confidence**, secure **Satisfaction**.',
    'Set **difficulty** so that success is possible but not certain, and revisit it as learners improve.',
    'The three behaviours with the best research support are giving a **rationale**, offering **choice** and **acknowledging feelings**.',
    'Arousal matters: **moderate stress** helps well-practised tasks, while **new, hard tasks** need calm.',
  ],
  sections: [
    {
      id: 'diagnose',
      title: 'Step 1: diagnose',
      lead: 'Find the weakest need.',
      blocks: [
        { t: 'p', text: 'It is tempting to reach for a motivation technique before knowing what is wrong. Different problems need different fixes: a learner who does not see the point needs relevance and autonomy; one who thinks they cannot succeed needs competence experiences; one who feels they do not belong needs relatedness. The audit scores a class against the three needs from self-determination theory. It is a reflection tool, not a validated scale.' },
        { t: 'teach-viz', viz: 'motivation-audit' },
      ],
    },
    {
      id: 'arcs',
      title: 'Step 2: design with ARCS',
      lead: 'Keller’s four conditions.',
      blocks: [
        { t: 'p', text: 'John Keller’s ARCS model (1987, updated 2010) draws on expectancy-value, attribution, self-efficacy and curiosity research. It says learners are motivated when four conditions hold, and it gives a design process: analyse the audience, set objectives for each condition, choose strategies, build and test.' },
        {
          t: 'table',
          head: ['Condition', 'The learner’s question', 'Strategies', 'A quick example'],
          rows: [
            ['Attention', '"Is this worth noticing?"', 'Surprise or a puzzle, variety, concrete examples, inquiry', 'Start a statistics lesson with a coin that lands heads 9 times in 10: "Is it rigged?"'],
            ['Relevance', '"Why should I care?"', 'Link to goals, past experience and interests; choices; show how it is used', 'Show how a bakery uses ratios to scale a recipe before teaching ratios'],
            ['Confidence', '"Can I do it?"', 'Clear expectations, small steps with early success, give control over difficulty, attribute success to effort and strategy', 'Give a worked example, then a half-completed one, then a full problem'],
            ['Satisfaction', '"Was it worth it?"', 'Chances to use new skills, informational feedback, consistent standards, fairness', 'Let learners solve a real problem for someone, then give specific feedback'],
          ],
        },
        {
          t: 'flow',
          title: 'The ARCS design process',
          nodes: [
            { label: 'Analyse the learners', sub: 'prior knowledge, attitude, context', tone: 'data' },
            { label: 'Set motivational goals', sub: 'one for each of A, R, C, S', tone: 'process' },
            { label: 'Choose strategies', sub: 'a few per condition, not all', tone: 'model' },
            { label: 'Build and run', sub: 'integrate into the lesson', tone: 'process' },
            { label: 'Evaluate', sub: 'did attention, relevance, confidence and satisfaction improve?', tone: 'output' },
          ],
          loop: 'refine and repeat',
        },
      ],
    },
    {
      id: 'difficulty',
      title: 'Step 3: pitch the difficulty',
      lead: 'Between boredom and anxiety.',
      blocks: [
        { t: 'p', text: 'Competence is built by successes that took effort. Tasks that are far too easy give no information and no satisfaction; tasks that are far too hard give only failure. The flow map of challenge and skill, and Atkinson’s finding that success-oriented learners prefer medium difficulty, both point the same way. The practical tool is **adjustable challenge**: let learners pick a starting level, add scaffolds that fade, and offer extensions.' },
        { t: 'teach-viz', viz: 'flow-map' },
        { t: 'p', text: 'Arousal interacts with difficulty. The Yerkes–Dodson picture below is conceptual and the human evidence for it is mixed, but it captures a real classroom pattern: a little pressure helps with something well practised, and the same pressure hurts a new, complex task.' },
        { t: 'teach-viz', viz: 'arousal-curve' },
      ],
    },
    {
      id: 'rewrite',
      title: 'Step 4: rewrite the instruction',
      lead: 'Rationale, choice and acknowledged feelings.',
      blocks: [
        {
          t: 'example',
          title: 'Making a dull task autonomy-supportive',
          lines: [
            { label: 'Controlling', text: '"Copy these ten definitions into your books. You must have them done by the end of the lesson."' },
            { label: 'Rationale added', text: '"Exam questions use these ten terms constantly, and if you can write them without looking, you save time on every question."' },
            { label: 'Feelings acknowledged', text: '"I know copying is not exciting."' },
            { label: 'Choice added', text: '"You could write them out, make flashcards, or draw each one. Pick whichever you will actually use to revise."' },
            { label: 'Structure kept', text: '"I would like all ten done by the end of the lesson. I will come round and check, and tell you which ones to practise."' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Choice does not need to be big', text: 'Research on choice finds that it supports motivation most when it is meaningful and not overwhelming: two or three options about **how** or **in what order**, within a task you have set, beat an open "do what you like", which can overload novices.' },
      ],
    },
    {
      id: 'check',
      title: 'A checklist',
      blocks: [
        {
          t: 'checklist',
          items: [
            'I can say why this lesson matters in terms my learners care about.',
            'There is at least one real choice (how, what or in what order).',
            'The first task is one every learner can start, and one can finish with effort.',
            'There is a visible next step for those who finish quickly and for those who struggle.',
            'Feedback tells learners what to do next, not just how well they did.',
            'Mistakes are discussed openly as information.',
            'Learners work with each other at least once.',
            'I am not using a contingent reward for something learners already enjoy.',
            'Success criteria are clear enough that effort can lead to success.',
            'I know something about at least a few learners that I can use in the next lesson.',
          ],
        },
        { t: 'p', text: 'To plan the rest of the lesson, see [backward design](@teaching/guides/planning/backward-design) and [lesson plan models](@teaching/guides/planning/models); to check understanding along the way, [hinge questions](@teaching/techniques/questioning/hinge-questions).' },
      ],
    },
  ],
  sources: [
    'Keller, J. M. (2010). *Motivational Design for Learning and Performance: The ARCS Model Approach*. Springer.',
    'Reeve, J. (2009). Why teachers adopt a controlling motivating style toward students and how they can become more autonomy supportive. *Educational Psychologist*, 44(3), 159–175.',
    'Csikszentmihalyi, M. (1997). *Finding Flow: The Psychology of Engagement with Everyday Life*. Basic Books.',
    'Jang, H., Reeve, J., & Deci, E. L. (2010). Engaging students in learning activities: It is not autonomy support or structure but autonomy support and structure. *Journal of Educational Psychology*, 102(3), 588–600.',
  ],
  related: ['teaching/motivation/intrinsic-motivation', 'teaching/motivation/motivation-frameworks', 'teaching/motivation/evidence-on-methods', 'teaching/differentiation/scaffolding', 'teaching/guides/planning/lesson-plan'],
}

export default guide
