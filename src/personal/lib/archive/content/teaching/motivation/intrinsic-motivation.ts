import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Intrinsic motivation is doing something because the activity itself is interesting or satisfying, not for a reward or to avoid a penalty. It is among the best-studied ideas in educational psychology, and one of the most misunderstood: it is not a personality trait that learners either have or lack, but a state that classrooms can support or smother. This guide covers self-determination theory in depth, how motivation is measured, what the research says supports it, and the limits of the claims.',
  nutshell: [
    '**Self-determination theory** (Deci and Ryan) says people are most intrinsically motivated when three needs are met: **autonomy**, **competence** and **relatedness**.',
    'Motivation is not on or off. It runs along a **continuum** from amotivation through external, introjected and identified regulation to intrinsic: the more internalised, the better the quality of learning and persistence.',
    'Intrinsic motivation is measured by **behaviour** (free-choice time on a task) and by **self-report** scales such as the Intrinsic Motivation Inventory, whose reliability is checked with Cronbach’s alpha.',
    'Teacher training in autonomy-supportive behaviours has a **medium-to-large effect** in a meta-analysis (d = 0.63), based on a modest number of studies.',
    'Structure and autonomy support are **not opposites**: the best-supported teaching combines clear expectations with choice and rationale.',
  ],
  sections: [
    {
      id: 'what',
      title: 'What intrinsic motivation is',
      lead: 'Doing it for its own sake.',
      blocks: [
        { t: 'p', text: 'Psychologists began to take intrinsic motivation seriously because behaviourism could not explain it. Harry Harlow found in 1950 that rhesus monkeys would repeatedly solve mechanical puzzles with no food reward at all. Robert White (1959) proposed that people have an innate drive for **effectance**: the pleasure of producing an effect on the environment and getting better at it. Edward Deci’s early experiments (1971) showed that paying people to do a puzzle they already enjoyed made them spend less of their free time on it afterwards, the first hint that rewards could change why people act.' },
        {
          t: 'table',
          head: ['', 'Intrinsic motivation', 'Extrinsic motivation'],
          rows: [
            ['Why you act', 'The activity is interesting, enjoyable or challenging in itself', 'A separable outcome: a reward, a grade, approval or avoiding a penalty'],
            ['Typical thought', '"I want to find out how this works."', '"I need this for the exam." / "I’ll get a sticker."'],
            ['Where the satisfaction is', 'In doing it', 'In what it leads to'],
            ['Typical risk', 'Not all necessary tasks are interesting', 'Effort stops when the reward stops'],
          ],
          caption: 'The simple split is a useful starting point; self-determination theory refines it, because some extrinsic motivation is much more self-directed than the label suggests (see the continuum below).',
        },
        { t: 'callout', tone: 'note', title: 'A state, not a trait', text: 'The same learner can be intrinsically motivated for football and indifferent to algebra, and can be keen on algebra with one teacher and switched off with another. That is the key claim: the **context** supports or undermines motivation, so teachers have real influence over it.' },
      ],
    },
    {
      id: 'sdt',
      title: 'Self-determination theory: the three needs',
      lead: 'What the research says people need.',
      blocks: [
        { t: 'p', text: 'Deci and Ryan’s self-determination theory (SDT) grew out of decades of experiments and is summarised in Ryan and Deci (2000). Its central claim is that humans have three basic psychological needs. When a setting supports them, people show more interest, persistence, deeper learning and wellbeing; when it thwarts them, motivation turns controlled or collapses.' },
        {
          t: 'table',
          head: ['Need', 'What it feels like', 'What supports it', 'What thwarts it'],
          rows: [
            ['Autonomy', '"I have a say; this is my choice."', 'Meaningful choice, a rationale for tasks, acknowledging feelings, inviting rather than commanding', 'Pressure, surveillance, controlling language ("you must"), rewards used to control'],
            ['Competence', '"I can do this and I am getting better."', 'Optimal challenge, clear goals, informational feedback, visible progress', 'Tasks far too hard or too easy, vague feedback, social comparison, public failure'],
            ['Relatedness', '"I belong and others care about me."', 'Warmth, interest in the learner, cooperative work, a safe place to be wrong', 'Coldness, exclusion, sarcasm, being ignored'],
          ],
          caption: 'Autonomy does not mean independence or doing whatever you like. A learner can follow a teacher’s instruction autonomously if they understand and endorse it.',
        },
        { t: 'teach-viz', viz: 'motivation-audit' },
      ],
    },
    {
      id: 'continuum',
      title: 'The continuum from controlled to autonomous',
      lead: 'Why "extrinsic" is not one thing.',
      blocks: [
        { t: 'p', text: 'SDT’s organismic integration sub-theory says an externally-prompted behaviour can become part of the self through **internalisation**. A learner who studies maths "because the teacher will be angry" and one who studies it "because I want to become an engineer" are both extrinsically motivated, but their experience and results differ greatly.' },
        {
          t: 'levels',
          items: [
            { name: 'Amotivation', body: 'No intention to act: "What is the point?" Caused by not valuing the task, feeling incompetent or not expecting it to work.' },
            { name: 'External regulation', body: 'Acting to gain a reward or avoid punishment: "I do it because I have to." Behaviour stops when the contingency stops.' },
            { name: 'Introjected regulation', body: 'Acting to avoid guilt or shame or to protect self-worth: "I should." Internal pressure, which can bring anxiety.' },
            { name: 'Identified regulation', body: 'Acting because you value the goal: "This matters for what I want." A consciously endorsed, autonomous reason.' },
            { name: 'Integrated regulation', body: 'The value fits with the rest of your values and identity: "This is the kind of person I am."' },
            { name: 'Intrinsic motivation', body: 'Acting for the enjoyment and interest of the activity itself.' },
          ],
          caption: 'Controlled forms (external, introjected) are on the lower rungs; autonomous forms (identified, integrated, intrinsic) are on the upper rungs. Research links more autonomous forms with deeper processing, persistence and wellbeing.',
        },
        { t: 'callout', tone: 'tip', title: 'The practical aim', text: 'You cannot make a dull but necessary task intrinsically fun. What you can do is help learners **internalise** its value: explain why it matters in terms they care about, acknowledge that it is tedious, give some choice in how it is done, and let them see progress. That moves them from "because I have to" toward "because it matters to me".' },
      ],
    },
    {
      id: 'measure',
      title: 'How intrinsic motivation is measured',
      lead: 'Behaviour, self-report and the statistics that check them.',
      blocks: [
        { t: 'p', text: 'Because motivation is internal, researchers measure it indirectly. The two main approaches answer different questions, and the better studies use both.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'The free-choice paradigm', tag: 'behaviour', body: 'After the main task, participants are left alone for a few minutes with the activity and alternatives, and observers record how long they spend on the original task by choice. It is hard to fake, but it is a measure of persistence in a single situation.' },
            { title: 'Self-report scales', tag: 'questionnaire', body: 'For example the Intrinsic Motivation Inventory (interest/enjoyment, perceived competence, effort, value, pressure/tension, perceived choice) or the Academic Motivation Scale. Cheap and detailed, but people may report what they think they should feel.' },
          ],
        },
        { t: 'p', text: 'A questionnaire scale combines several items into one score, and its **reliability** says how consistently the items measure the same thing. The standard statistic is Cronbach’s alpha.' },
        {
          t: 'math',
          tex: String.raw`\alpha = \frac{k}{k-1}\left(1-\frac{\sum_{i=1}^{k}\sigma_i^{2}}{\sigma_T^{2}}\right)`,
          caption: 'Cronbach’s alpha for a scale of k items. It rises when the items vary together.',
          where: [
            { sym: 'k', def: 'the number of items in the scale' },
            { sym: '\\sigma_i^{2}', def: 'the variance of the scores on item i across respondents' },
            { sym: '\\sigma_T^{2}', def: 'the variance of respondents’ total scores' },
          ],
          syntax: [
            { sym: '\\alpha', say: '"alpha": a number usually between 0 and 1. Effect: higher means the items hang together. A value of 0.7 to 0.9 is usual for research scales. Why: if all items measure one thing, a person who scores high on one will score high on the others, which inflates the variance of the total relative to the sum of item variances.' },
            { sym: '\\dfrac{k}{k-1}', say: 'a small correction factor that keeps alpha between 0 and 1. Effect: with more items it approaches 1. Why: a total of many items has more room for the item variances to be small relative to it.' },
            { sym: '\\sum_{i=1}^{k}\\sigma_i^{2}', say: '"the sum of the item variances": add up how much each item varies on its own. Effect: if items are independent, the total variance equals this sum and alpha is 0.' },
            { sym: '\\sigma_T^{2}', say: 'the variance of the total score. Effect: if items move together, the total varies much more than the items add up to, pushing the bracket toward 1 and alpha up. Why: variances of correlated quantities add covariance terms on top.' },
          ],
          worked: {
            title: 'Four enjoyment items',
            steps: [
              'Four items each have variance 1.0, so \\(\\sum\\sigma_i^2 = 4.0\\).',
              'The total scores have variance \\(\\sigma_T^2 = 9.0\\) (the items are positively correlated).',
              '\\(\\alpha = \\frac{4}{3}\\left(1 - \\frac{4.0}{9.0}\\right) = 1.333 \\times 0.556 = 0.74\\).',
            ],
            answer: 'Alpha of 0.74 is acceptable reliability for a short scale. If the items were unrelated, \\(\\sigma_T^2\\) would be 4.0 and alpha would be 0.',
          },
        },
      ],
    },
    {
      id: 'support',
      title: 'What supports autonomy: the research',
      lead: 'Reeve’s behaviours, and the evidence for teaching them.',
      blocks: [
        { t: 'p', text: 'Johnmarshall Reeve and colleagues turned SDT into a list of teacher behaviours that students experience as autonomy-supportive. A meta-analysis of programmes that trained people (mostly teachers and parents) in these behaviours, by Su and Reeve (2011), pooled 19 studies and found a weighted effect size of **d = 0.63**: a medium-to-large effect on outcomes such as motivation and engagement. Programmes that trained several elements together, in brief sessions of one to three hours, did best. The authors cautioned that the number of studies is small.' },
        {
          t: 'bars',
          title: 'Teacher training in autonomy support (Su and Reeve, 2011)',
          items: [{ label: 'Autonomy-support training, weighted effect size', value: 0.63, note: '19 studies' }],
          refs: [{ at: 0.2, label: 'small 0.2' }, { at: 0.5, label: 'medium 0.5' }, { at: 0.8, label: 'large 0.8' }],
          min: 0,
          max: 1,
          caption: 'Cohen’s d against his conventional benchmarks. Treat the benchmarks as rough: see the guide on [the evidence on motivation methods](@teaching/motivation/evidence-on-methods).',
        },
        {
          t: 'table',
          head: ['Behaviour', 'Autonomy-supportive version', 'Controlling version'],
          rows: [
            ['Wording', '"You might try…", "Let’s…", "What would you like to do first?"', '"You must…", "You should…", "Do it this way."'],
            ['Rationale', 'Explains why the task is useful in the learner’s terms', 'Gives no reason, or "because I said so"'],
            ['Feelings', 'Acknowledges that the task is boring or hard', 'Dismisses complaints'],
            ['Choice', 'Offers options about what, how or when', 'Dictates every step'],
            ['Errors', 'Treats mistakes as information; asks "what happened?"', 'Criticises, compares, lectures'],
            ['Pace', 'Allows time to work independently, then helps', 'Takes over and gives the answer quickly'],
          ],
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Autonomy support and structure together', tag: 'not opposites', body: 'In a 2×2 of low or high autonomy support against low or high structure, the best outcomes come from high both: clear goals, expectations and guidance delivered in an autonomy-supportive way. Chaos (low structure) is not autonomy support; it leaves learners without the competence they need.' },
            { title: 'Controlling is different from structured', tag: 'caution', body: 'A teacher can be firm about standards and still invite and explain. Control means pressuring learners to think, feel or behave in particular ways, using guilt, threats or conditional regard.' },
          ],
        },
      ],
    },
    {
      id: 'flow',
      title: 'Competence, challenge and flow',
      lead: 'Matching the task to the learner.',
      blocks: [
        { t: 'p', text: 'Mihaly Csikszentmihalyi studied people absorbed in challenging activities and described **flow**: an intense involvement in which attention narrows, goals are clear, feedback is immediate, and time seems to pass differently. A core condition is a balance between the **challenge** of the task and the **skill** of the person. Too much challenge produces anxiety; too little produces boredom; both channels lead away from the activity. The interactive map below shows the eight-region version. It is a model for thinking about design, not a measuring device.' },
        { t: 'teach-viz', viz: 'flow-map' },
        { t: 'callout', tone: 'warn', title: 'Challenge is relative', text: 'The same task can sit in different regions for different learners, and for one learner it moves as they improve. This is the practical reason to differentiate and scaffold: see [scaffolding](@teaching/differentiation/scaffolding) and the [zone of proximal development](@teaching/theories/social-constructivism).' },
      ],
    },
    {
      id: 'interest',
      title: 'How interest develops',
      lead: 'From a spark to a lasting passion.',
      blocks: [
        { t: 'p', text: 'Suzanne Hidi and Ann Renninger’s four-phase model of interest development describes how a passing spark becomes something durable. It matters for teaching because the early phases depend heavily on the environment, and the later ones increasingly on the learner.' },
        {
          t: 'levels',
          items: [
            { name: 'Triggered situational interest', body: 'A surprising fact, an intriguing problem or a vivid demonstration catches attention. Short-lived without support.' },
            { name: 'Maintained situational interest', body: 'The topic stays engaging through meaningful, personally relevant tasks and often through working with others.' },
            { name: 'Emerging individual interest', body: 'The learner starts to seek out the topic on their own, asks questions and values it. Positive feelings and knowledge are both growing.' },
            { name: 'Well-developed individual interest', body: 'A lasting disposition: the person re-engages again and again, with substantial knowledge and a sense that the subject matters to who they are.' },
          ],
          caption: 'Interest and knowledge grow together: it is hard to be fascinated by something you know nothing about, and knowing more makes finer questions possible.',
        },
      ],
    },
    {
      id: 'limits',
      title: 'Limits and open questions',
      blocks: [
        {
          t: 'list',
          items: [
            '**Correlation is not causation.** Many findings come from questionnaires, where motivated learners also describe their teachers more favourably. The experimental evidence (training studies, lab experiments) is stronger but narrower.',
            '**The three needs are claimed to be universal.** Cross-cultural work supports this in part, but the way autonomy is expressed differs, and there is debate about whether choice matters as much in cultures that emphasise obligation and harmony.',
            '**More intrinsic is not always better.** For routine, necessary tasks, well-internalised extrinsic motivation can be as effective as intrinsic, and learners need both to complete a long course.',
            '**Effect sizes depend on the outcome.** Motivation measures often move more than test scores do, so a claim about motivation is not automatically a claim about achievement.',
          ],
        },
      ],
    },
  ],
  sources: [
    'Ryan, R. M., & Deci, E. L. (2000). Self-determination theory and the facilitation of intrinsic motivation, social development, and well-being. *American Psychologist*, 55(1), 68–78.',
    'Ryan, R. M., & Deci, E. L. (2017). *Self-Determination Theory: Basic Psychological Needs in Motivation, Development, and Wellness*. Guilford Press.',
    'Su, Y.-L., & Reeve, J. (2011). A meta-analysis of the effectiveness of intervention programs designed to support autonomy. *Educational Psychology Review*, 23(1), 159–188.',
    'Reeve, J., & Jang, H. (2006). What teachers say and do to support students’ autonomy during a learning activity. *Journal of Educational Psychology*, 98(1), 209–218.',
    'Csikszentmihalyi, M. (1990). *Flow: The Psychology of Optimal Experience*. Harper & Row.',
    'Hidi, S., & Renninger, K. A. (2006). The four-phase model of interest development. *Educational Psychologist*, 41(2), 111–127.',
  ],
  related: ['teaching/motivation/rewards-and-overjustification', 'teaching/motivation/motivation-frameworks', 'teaching/motivation/evidence-on-methods', 'teaching/motivation/designing-for-motivation', 'teaching/theories/motivation', 'teaching/differentiation/choice'],
}

export default guide
