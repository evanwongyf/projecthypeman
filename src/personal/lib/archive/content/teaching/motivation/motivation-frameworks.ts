import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'There is no single theory of motivation. Each framework answers a different question: why people start, why they choose one task over another, why they persist, what they blame when things go wrong. This guide lays the main ones side by side, shows the mathematics behind two of them, and gives a way to choose which to reach for.',
  nutshell: [
    '**Expectancy-value** says effort comes from "can I succeed?" **times** "is it worth it?": if either is near zero, so is motivation.',
    '**Atkinson’s risk model** predicts that people who want success more than they fear failure prefer tasks of **medium difficulty**, because that is where the information about their ability is greatest.',
    '**Goal-setting theory** finds that specific, difficult, accepted goals with feedback beat vague "do your best" goals.',
    '**Self-efficacy** (Bandura), **attribution** (Weiner) and **mindset** (Dweck) explain how beliefs about ability and causes shape persistence.',
    '**ARCS** (Keller) and **TARGET** (Ames) are design frameworks that turn motivation research into lesson checklists.',
  ],
  sections: [
    {
      id: 'map',
      title: 'The frameworks side by side',
      lead: 'The question each one answers.',
      blocks: [
        {
          t: 'table',
          head: ['Framework', 'Main question', 'Core idea', 'A classroom lever'],
          rows: [
            ['Self-determination theory (Deci, Ryan)', 'What makes motivation autonomous and lasting?', 'Three needs: autonomy, competence, relatedness', 'Choice, rationale, optimal challenge, belonging'],
            ['Expectancy-value (Eccles, Wigfield)', 'Will they try, and which task will they choose?', 'Motivation depends on expectancy of success and the value of the task', 'Raise success expectations and show relevance'],
            ['Achievement motivation (Atkinson)', 'Why prefer some tasks to others?', 'Approach-success versus avoid-failure motives, with task difficulty', 'Pitch tasks at a medium difficulty'],
            ['Goal-setting (Locke, Latham)', 'How do goals drive effort?', 'Specific, hard, accepted goals plus feedback raise performance', 'Clear targets and progress feedback'],
            ['Achievement goals (Dweck, Nicholls, Elliot)', 'What is the learner trying to show?', 'Mastery goals (improve) versus performance goals (look able, or not look unable)', 'Emphasise improvement over ranking'],
            ['Self-efficacy (Bandura)', 'Do they believe they can do this?', 'Confidence in a specific task predicts effort and persistence', 'Mastery experiences, models, encouragement'],
            ['Attribution (Weiner)', 'What do they blame success and failure on?', 'Causes differ in locus, stability and controllability', 'Teach attributions to effort and strategy'],
            ['Mindset (Dweck)', 'Is ability fixed or growable?', 'Beliefs about ability shape responses to challenge', 'Process praise; treat errors as information'],
            ['Flow (Csikszentmihalyi)', 'When do people get absorbed?', 'Balance of challenge and skill with clear goals and feedback', 'Calibrate difficulty'],
            ['ARCS (Keller)', 'How do I design for motivation?', 'Attention, Relevance, Confidence, Satisfaction', 'A four-step design checklist'],
            ['TARGET (Ames)', 'Which classroom structures shape goals?', 'Task, Authority, Recognition, Grouping, Evaluation, Time', 'Audit your classroom structures'],
          ],
        },
      ],
    },
    {
      id: 'ev',
      title: 'Expectancy times value: a multiplicative model',
      lead: 'Why one zero kills effort.',
      blocks: [
        { t: 'p', text: 'Jacquelynne Eccles and Allan Wigfield’s expectancy-value model says that motivation to engage in a task depends on two beliefs: the **expectancy** that you can succeed, and the **value** you attach to the task. Value itself has components: attainment value (it matters to my identity), intrinsic value (I enjoy it), utility value (it is useful for my goals) and **cost** (what I give up, effort and anxiety).' },
        {
          t: 'math',
          tex: String.raw`M = E \times V`,
          caption: 'The multiplicative form of expectancy-value: motivation is the product of the expectancy of success and the task’s value.',
          where: [
            { sym: 'M', def: 'motivation to engage, on an arbitrary scale' },
            { sym: 'E', def: 'expectancy of success (0 = certain failure, 1 = certain success)' },
            { sym: 'V', def: 'value of the task to the learner (0 = worthless)' },
          ],
          syntax: [
            { sym: 'E \\times V', say: '"E times V": the two beliefs multiply rather than add. Effect: if either is zero the product is zero, so a learner who sees no chance of success or no value in the task will not try, however strong the other belief. Why: effort is wasted if the goal is unreachable and pointless if it is worthless.' },
            { sym: 'M', say: 'the resulting motivation. Effect: the same M can come from many (E, V) pairs; the curves below connect pairs with equal motivation.' },
          ],
          worked: {
            title: 'Two learners facing the same essay',
            steps: ['Aisha thinks she will probably do well (E = 0.8) but sees little use in it (V = 0.2): \\(M = 0.16\\).', 'Ben thinks it will be hard (E = 0.3) but wants a top grade for a scholarship (V = 0.9): \\(M = 0.27\\).'],
            answer: 'Ben is more motivated despite lower confidence. Aisha needs a reason to care (raise V); Ben needs a way to succeed (raise E). One intervention does not fit both.',
          },
        },
        {
          t: 'plot',
          title: 'Combinations of expectancy and value that give the same motivation',
          x: [0, 1],
          y: [0, 1],
          xLabel: 'expectancy of success E',
          yLabel: 'value of the task V',
          curves: [0.1, 0.25, 0.5].map((c, i) => ({ f: (x: number) => (x > 0.02 ? c / x : NaN), color: ['#d9534f', '#e07b2a', '#2f9e6e'][i], label: `M = ${c}` })),
          caption: 'Each curve is a hyperbola E × V = M. Pulling a learner from the lower-left corner needs one of the two to rise, and the closer either is to zero, the more it must rise to matter.',
        },
      ],
    },
    {
      id: 'atkinson',
      title: 'Why medium difficulty is attractive',
      lead: 'Atkinson’s risk-taking model.',
      blocks: [
        { t: 'p', text: 'John Atkinson (1957) modelled the choice of how hard a task to attempt. Let \\(P_s\\) be the probability of success. The **incentive value** of success is higher the harder the task: \\(I_s = 1 - P_s\\), because succeeding at something difficult is more satisfying. The tendency to approach success is the person’s **motive for success** \\(M_s\\) times probability times incentive; the tendency to avoid failure is built the same way from the **motive to avoid failure** \\(M_{af}\\), with the incentive for failure being larger for easy tasks.' },
        {
          t: 'math',
          tex: String.raw`T = M_s\,P_s\,(1-P_s) \;-\; M_{af}\,P_s\,(1-P_s) \;=\; (M_s - M_{af})\,P_s\,(1-P_s)`,
          caption: 'The net tendency to attempt a task of difficulty P_s, in Atkinson’s simplified model.',
          where: [
            { sym: 'P_s', def: 'the probability of success at the task (0 to 1)' },
            { sym: 'M_s', def: 'the person’s motive to achieve success' },
            { sym: 'M_{af}', def: 'the person’s motive to avoid failure' },
          ],
          syntax: [
            { sym: 'P_s(1-P_s)', say: 'the product of the chance of success and the chance of failure. Effect: it is largest at \\(P_s = 0.5\\) (value 0.25) and falls to zero at 0 and 1. Why: a sure thing and an impossible task both tell you nothing about your ability; a 50-50 task is where the outcome is most informative.' },
            { sym: 'M_s - M_{af}', say: 'the difference between the two motives. Effect: if positive, T is highest at medium difficulty, so the person prefers moderate challenges. If negative, T is most negative at medium difficulty, so the person prefers the very easy or very hard (where failure is explainable). Why: for fear-of-failure people the most threatening task is one they could plausibly fail.' },
          ],
          worked: {
            title: 'A success-oriented learner',
            steps: ['\\(M_s = 2\\), \\(M_{af} = 1\\), so \\(M_s - M_{af} = 1\\).', 'At \\(P_s = 0.5\\): \\(T = 1 \\times 0.5 \\times 0.5 = 0.25\\).', 'At \\(P_s = 0.9\\): \\(T = 1 \\times 0.9 \\times 0.1 = 0.09\\).'],
            answer: 'The learner’s tendency to attempt peaks at a 50% chance of success and is much lower for easy (90%) tasks: they find moderate challenge most attractive.',
          },
        },
        {
          t: 'plot',
          title: 'Atkinson’s predicted task preference',
          x: [0, 1],
          y: [-0.3, 0.3],
          xLabel: 'probability of success at the task',
          yLabel: 'tendency to attempt',
          curves: [
            { f: (p: number) => p * (1 - p), color: '#2f9e6e', label: 'success-oriented (M_s − M_af = +1)' },
            { f: () => 0, color: '#8a8478', label: 'balanced (0)', dashed: true },
            { f: (p: number) => -p * (1 - p), color: '#d9534f', label: 'failure-avoiding (−1)' },
          ],
          caption: 'A model, not a measurement: later research found that failure-avoiding learners sometimes choose extreme difficulty, as the model predicts, but that real preferences depend on goals and beliefs the model leaves out. Its lasting lesson is that tasks need to be pitched so that success is possible but not guaranteed.',
        },
      ],
    },
    {
      id: 'beliefs',
      title: 'Beliefs about ability and causes',
      lead: 'Self-efficacy, attribution, mindset and goals.',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Self-efficacy', tag: 'Bandura', body: 'Confidence that you can do a **specific** task. It comes from four sources, in rough order of strength: **mastery experiences** (past success), **vicarious experience** (watching similar others succeed), **verbal persuasion** and physiological states. Efficacy is task-specific: confidence in algebra does not guarantee confidence in essays.' },
            { title: 'Attribution theory', tag: 'Weiner', body: 'Learners explain outcomes by causes that differ on three dimensions: **locus** (inside or outside), **stability** (fixed or changeable) and **controllability**. "I failed because I am stupid" is internal, stable, uncontrollable and demotivating; "I failed because I used the wrong strategy" is changeable and controllable.' },
            { title: 'Mindset', tag: 'Dweck', body: 'Learners who believe ability is fixed tend to avoid challenge and read errors as verdicts; those who believe it can grow tend to seek challenge and learn from errors. Effects of mindset **interventions** have proved much smaller than early claims: see the evidence guide.' },
            { title: 'Achievement goals', tag: 'Nicholls, Elliot', body: '**Mastery goals** aim to improve and understand; **performance-approach goals** aim to outdo others; **performance-avoidance goals** aim not to look incompetent. Mastery goals are associated with deeper learning; performance-avoidance goals with anxiety and giving up.' },
          ],
        },
      ],
    },
    {
      id: 'goals',
      title: 'Goals and design frameworks',
      blocks: [
        { t: 'p', text: 'Edwin Locke and Gary Latham’s goal-setting theory, developed from hundreds of studies, finds that **specific, difficult goals** produce higher performance than "do your best", provided the person accepts the goal and gets feedback. The effect arises because goals direct attention, energise effort and increase persistence. Goals stop working when they exceed ability, when commitment lapses, or when a complex task needs learning strategies rather than effort, in which case a **learning goal** ("find three strategies") beats a performance goal ("score 90%").' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'ARCS (Keller)', tag: 'design checklist', body: '**A**ttention (gain and hold interest: surprise, variety), **R**elevance (link to goals and experience), **C**onfidence (success expectations and control), **S**atisfaction (reward, feedback and fairness). Use it to plan or fix a lesson.' },
            { title: 'TARGET (Ames)', tag: 'classroom structures', body: 'Six structures that shape learners’ goals: **T**ask (varied, meaningful), **A**uthority (shared decisions), **R**ecognition (private, for improvement), **G**rouping (cooperative), **E**valuation (progress not rank), **T**ime (flexible). Mastery-oriented structures support mastery goals.' },
          ],
        },
      ],
    },
    {
      id: 'choose',
      title: 'Which one to reach for',
      blocks: [
        {
          t: 'table',
          head: ['If you notice…', 'Think about…', 'Try'],
          rows: [
            ['A capable learner who does nothing', 'Value (expectancy-value), autonomy', 'Show relevance; offer choice; ask what would make it worth doing'],
            ['A learner who says "I can’t do this"', 'Self-efficacy, attribution, competence', 'Small mastery experiences; tie failure to strategy; model coping'],
            ['Learners avoiding hard tasks', 'Mindset, performance-avoidance goals', 'Treat errors as information; make improvement the visible measure'],
            ['Vague effort, drifting work', 'Goal-setting', 'Specific, difficult, shared targets with feedback'],
            ['A class that is bored or restless', 'Flow, ARCS (Attention)', 'Calibrate challenge; vary the task; hook with a problem'],
            ['A class that competes for rank', 'TARGET (Recognition, Evaluation)', 'Private, progress-based feedback; cooperative tasks'],
          ],
          caption: 'Frameworks overlap. Treat them as lenses for diagnosis, not rival teams: the same learner can be low on efficacy, value and autonomy at once.',
        },
      ],
    },
  ],
  sources: [
    'Eccles, J. S., & Wigfield, A. (2002). Motivational beliefs, values, and goals. *Annual Review of Psychology*, 53, 109–132.',
    'Atkinson, J. W. (1957). Motivational determinants of risk-taking behavior. *Psychological Review*, 64(6), 359–372.',
    'Locke, E. A., & Latham, G. P. (2002). Building a practically useful theory of goal setting and task motivation. *American Psychologist*, 57(9), 705–717.',
    'Bandura, A. (1997). *Self-Efficacy: The Exercise of Control*. W. H. Freeman.',
    'Weiner, B. (1985). An attributional theory of achievement motivation and emotion. *Psychological Review*, 92(4), 548–573.',
    'Keller, J. M. (2010). *Motivational Design for Learning and Performance: The ARCS Model Approach*. Springer.',
    'Ames, C. (1992). Classrooms: Goals, structures, and student motivation. *Journal of Educational Psychology*, 84(3), 261–271.',
  ],
  related: ['teaching/motivation/intrinsic-motivation', 'teaching/motivation/evidence-on-methods', 'teaching/motivation/designing-for-motivation', 'teaching/theories/motivation', 'teaching/theories/social-learning'],
}

export default guide
