import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    '[Motivation theory](@teaching/theories/motivation) covers self-determination and expectancy-value for any learner. This page goes a layer deeper, into frameworks built or tested specifically around the extra psychological weight learners can carry when they belong to a group stereotyped as less capable, or when years of struggle have taught them that effort does not pay off. The encouraging finding across this research: some of the most-replicated, lowest-cost interventions in all of education research live here.',
  nutshell: [
    '**Achievement goal theory** distinguishes mastery goals ("get better") from performance goals ("look smart, avoid looking dumb"), the second is more fragile under pressure and failure.',
    '**Self-efficacy** (Bandura), belief in one\'s own capability for a specific task, predicts effort and persistence more reliably than general self-esteem.',
    '**Stereotype threat**: the fear of confirming a negative stereotype about one\'s group can itself measurably lower performance on a test, independent of actual ability.',
    'Brief, well-designed **belonging and values-affirmation interventions** (often under an hour, one-time) have shown real, sometimes surprisingly durable effects in large randomised studies, though effect sizes are typically modest, and they work best layered onto genuinely good teaching, not instead of it.',
  ],
  sections: [
    {
      id: 'goals',
      title: 'Achievement goal theory',
      blocks: [
        {
          t: 'p',
          text: 'Carol Ames and Carol Dweck\'s achievement goal theory (1980s onward) distinguishes why a learner is trying, not just how motivated they are.',
        },
        {
          t: 'table',
          head: ['Goal orientation', 'Internal question', 'Response to difficulty'],
          rows: [
            ['Mastery goal', '"Am I improving? Do I understand this?"', 'Treats struggle as information; tends to persist, try new strategies'],
            ['Performance-approach goal', '"Do I look smart compared with others?"', 'Can drive real effort, but is vulnerable when the work gets hard enough that looking smart is at risk'],
            ['Performance-avoidance goal', '"Please don\'t let me look stupid"', 'Associated with avoiding challenge, surface strategies, and anxiety'],
          ],
          caption: 'Most learners hold a mix of goals that can shift by subject, task and classroom climate, it is a state teachers influence, not only a fixed trait.',
        },
        {
          t: 'dodont',
          do: [
            'Praise and grade progress and strategy, not only correct answers relative to peers',
            'Make mistakes a normal, visible part of the room\'s culture (model your own)',
            'Set goals framed as "get better at X" rather than "beat classmate Y"',
          ],
          dont: [
            'Publicly rank or compare learners by score as routine practice',
            'Praise being "the best" or "the smartest" rather than the specific thing that was done well',
            'Treat every assessment as high-stakes; low-stakes practice supports mastery goals',
          ],
        },
        { t: 'p', text: 'This connects directly to [achievement and failure attributions](@teaching/theories/motivation): a performance-avoidance learner who fails is more likely to attribute it to low, fixed ability, exactly the explanation that shuts motivation down.' },
      ],
    },
    {
      id: 'self-efficacy',
      title: 'Self-efficacy',
      blocks: [
        {
          t: 'p',
          text: 'Albert Bandura (1977, 1997) distinguished self-efficacy"can I do *this specific task*?"from broader self-esteem. Self-efficacy predicts effort, persistence and strategy choice far more reliably than general self-esteem does, and critically, it is built in specific, teachable ways.',
        },
        {
          t: 'levels',
          caption: 'Bandura ranked these four sources from most to least powerful, though all four matter.',
          items: [
            { name: 'Verbal persuasion', body: '"I believe you can do this" from someone credible, weakest alone, but still useful, especially combined with the other three.' },
            { name: 'Vicarious experience', body: 'Watching someone similar to you succeed ("if they can do it, maybe I can too"), a peer or near-peer model is often more powerful than an expert.' },
            { name: 'Physiological and emotional state', body: 'Reframing anxiety as readiness rather than threat; reducing unnecessary stress around a task.' },
            { name: 'Mastery experience', body: 'Actually succeeding at the task yourself, the single strongest source. A well-sequenced early win matters more than any pep talk.' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Build the first win deliberately', text: 'Because mastery experience is the strongest source of self-efficacy, the single highest-leverage move with a learner who has a history of struggle is often simply to engineer a genuine, visible early success, a task pitched to be hard but achievable with effort, rather than to rely on encouragement alone.' },
      ],
    },
    {
      id: 'stereotype-threat',
      title: 'Stereotype threat',
      blocks: [
        {
          t: 'p',
          text: 'Claude Steele and Joshua Aronson\'s original 1995 study found that Black college students performed worse on a difficult verbal test than white students with equal prior scores, but only when the test was described as diagnostic of intellectual ability; when the identical test was described as not measuring ability, the gap largely disappeared. The theorised mechanism: the extra cognitive and emotional load of worrying about confirming a stereotype about one\'s group competes with the mental resources needed for the task itself.',
        },
        {
          t: 'metric',
          name: 'stereotype threat',
          shows: 'The measurable drop in test performance that can occur when a person is reminded, even subtly, of a negative stereotype about a group they belong to, right before or during a task relevant to that stereotype, a performance effect driven by the situation, not by any real difference in underlying ability.',
          eli5: 'Imagine being handed a balance beam to walk across, and right beforehand someone mentions, offhand, that "people like you aren\'t usually very good at balance". Even if it isn\'t true, and even if you try to ignore it, part of your attention is now spent monitoring yourself and worrying about confirming it, attention that would otherwise have gone entirely into balancing.',
          higher: 'A situation makes group identity and a negative stereotype about it more salient right before a relevant task, identifying race or gender on a form before a test, a token "only one of my group in the room" situation, or a teacher\'s own low-expectation signals, all increase measured threat and, in replicated lab and field studies, measurably depress performance on the stereotyped domain specifically.',
          lower: 'The stereotype is made less salient, or is actively countered, presenting a test as non-diagnostic of ability, affirming belonging and values beforehand, or exposure to visible counter-stereotypical role models, all reduce measured threat in studies, and performance differences shrink or disappear.',
          typical: 'Meta-analyses find a real, replicated average effect across many stereotype-threat studies, though, as with most social-psychology effects studied heavily since the 1990s, the size of the effect varies across replications and contexts more than the earliest, most dramatic single studies suggested; the responsible reading is "a real and actionable effect of moderate, variable size", not "a fixed, universal number".',
        },
        { t: 'callout', tone: 'tip', title: 'What reduces stereotype threat in practice', text: 'Research-supported, low-cost moves: present assessments as measuring growth or skill rather than fixed ability; avoid unnecessary group-identification prompts right before high-stakes tasks; make counter-stereotypical role models and peers visible; and explicitly teach that struggle is normal and does not confirm anything about a group.' },
      ],
    },
    {
      id: 'belonging',
      title: 'Belonging and values-affirmation interventions',
      blocks: [
        {
          t: 'p',
          text: 'A notable body of research tests brief, structured writing or reading exercises, sometimes a single 20–45 minute session, designed to reduce the psychological weight described above. Three well-known examples:',
        },
        {
          t: 'cards',
          items: [
            { title: 'Values affirmation', body: 'Students briefly write about a personal value that matters to them (e.g. relationships with friends, creativity), unrelated to the test subject. Geoffrey Cohen and colleagues found this reduced the Black–white achievement gap in a middle-school study, with effects still detectable years later for some students.' },
            { title: 'Belonging intervention', body: 'Students read (often anonymised) stories from older students describing early college worries about belonging that improved over time, then write their own reflection. Gregory Walton and Geoffrey Cohen\'s studies found improved grades and health outcomes for Black students years after a single session, in some but not all replications.' },
            { title: 'National Study of Learning Mindsets', body: 'A large, pre-registered US study (Yeager et al., 2019) of a brief online growth-mindset exercise with ~12,000 ninth-graders found small average effects on grades, concentrated among lower-achieving students and in schools with a supportive peer climate for the message, a more cautious, carefully measured result than earlier small studies had suggested.' },
          ],
        },
        {
          t: 'table',
          head: ['Honest summary of this literature', 'What it means in practice'],
          rows: [
            ['Effects are real but typically small on average', 'These are not a substitute for good instruction, curriculum or resources, they are a low-cost addition'],
            ['Effects concentrate among specific groups', 'Often strongest for students already facing stereotype threat or struggling academically, and weaker or absent for others'],
            ['Context matters enormously', 'A mindset message lands differently in a school where effort is genuinely supported versus one where it is not, the surrounding environment can amplify or erase the effect'],
            ['Some high-profile early results have not fully replicated', 'As with much of social psychology post-2010s, treat any single striking study cautiously and look for independent replication at scale'],
          ],
        },
        { t: 'callout', tone: 'note', title: 'Why these are worth doing anyway', text: 'Even "small" effects matter when an intervention costs almost nothing, one class period, free materials, and the downside risk is minimal. The honest, evidence-based pitch for belonging and values-affirmation work is not "this closes the gap by itself", but "this is a very cheap, well-evidenced addition that measurably helps on the margin, especially for students facing stereotype threat, layered onto everything else in this section".' },
      ],
    },
  ],
  sources: [
    'Ames, C. (1992). Classrooms: Goals, structures, and student motivation. *Journal of Educational Psychology*, 84(3), 261–271.',
    'Bandura, A. (1997). *Self-Efficacy: The Exercise of Control*. W. H. Freeman.',
    'Steele, C. M., & Aronson, J. (1995). Stereotype threat and the intellectual test performance of African Americans. *Journal of Personality and Social Psychology*, 69(5), 797–811.',
    'Cohen, G. L., Garcia, J., Apfel, N., & Master, A. (2006). Reducing the racial achievement gap: A social-psychological intervention. *Science*, 313(5791), 1307–1310.',
    'Walton, G. M., & Cohen, G. L. (2011). A brief social-belonging intervention improves academic and health outcomes of minority students. *Science*, 331(6023), 1447–1451.',
    'Yeager, D. S., et al. (2019). A national experiment reveals where a growth mindset improves achievement. *Nature*, 573, 364–369.',
  ],
  related: ['teaching/theories/motivation', 'teaching/equity/opportunity-gap', 'teaching/equity/equity-in-practice'],
}

export default guide
