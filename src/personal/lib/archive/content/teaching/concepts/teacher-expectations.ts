import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'In 1968 Robert Rosenthal and Lenore Jacobson reported that when teachers were told that certain children were “about to bloom”, those children made greater gains in IQ over the year, even though they had been chosen at random. The claim that what a teacher expects shapes what a student achieves, a self-fulfilling prophecy, has been one of the most famous and most argued-over ideas in education. This page summarises the original study, what later research found, how expectations are transmitted in the classroom, and what teachers can do to hold high expectations without bias.',
  nutshell: [
    'A **self-fulfilling prophecy** (Merton, 1948) is a false expectation that leads to behaviour that makes it come true.',
    'The **Pygmalion study** (Rosenthal and Jacobson, 1968) claimed that teacher expectations raised pupils’ IQ gains; it was **criticised** on method, and later studies found **smaller effects**.',
    'A careful review (Jussim and Harber, 2005) concluded that **self-fulfilling prophecies in classrooms are real but usually small**, and **larger for stereotyped groups**; most expectations are largely **accurate**.',
    'Expectations are transmitted through **climate**, **input** (what is taught), **output** (opportunities to respond) and **feedback** (Rosenthal’s four-factor theory).',
    'The practical response is to **hold high, flexible expectations for everyone**, check for **bias**, and avoid **early fixed labels**.',
  ],
  sections: [
    {
      id: 'pygmalion',
      title: 'The Pygmalion study',
      blocks: [
        { t: 'p', text: 'At Oak School, an elementary school in California, Rosenthal and Jacobson gave all children a test they said predicted “intellectual blooming”. They then told teachers which children, about one in five, were likely to bloom, but the children had been chosen at random. At the end of the year, the children labelled as bloomers had gained more on an IQ test than the others (about 12 points against 8 overall, with the largest differences in the first two grades, where the reported gains were about 27 points against 12 in grade 1 and 17 against 7 in grade 2). The authors concluded that teachers’ expectations had influenced pupils’ performance. The book, *Pygmalion in the Classroom*, caught the public imagination.' },
        { t: 'links', items: [{ path: 'teaching/case-studies/pygmalion', note: 'The Pygmalion study as a full case study' }] },
      ],
    },
    {
      id: 'later',
      title: 'What later research found',
      blocks: [
        {
          t: 'table',
          head: ['Finding', 'Source'],
          rows: [
            ['The original study had weaknesses: a test with unreliable scoring, small samples in some classes and effects that were not found for older children', 'Thorndike (1968) and later critics; Snow (1995)'],
            ['Many replications found no effect, or an effect only in some conditions', 'Raudenbush (1984): effects larger in the first two weeks of school, when teachers know pupils least'],
            ['A review of experimental and natural studies found that self-fulfilling prophecies exist but are small, and that expectations are largely accurate (they predict because they reflect real differences)', 'Jussim and Harber (2005)'],
            ['Effects may be larger for students from stereotyped groups and for those with lower attainment', 'Jussim and colleagues; Papageorge and colleagues (2020) found that teachers’ expectations of Black students’ college completion differed by the teacher’s race, and that expectations were associated with outcomes'],
            ['Sustained expectations over years can accumulate', 'Studies tracking teachers’ judgement and later attainment'],
          ],
        },
        { t: 'callout', tone: 'note', title: 'A fair summary', text: 'Expectations do matter, but the effect is modest for most students and most of the time. Where it can matter more is for those whom teachers are quick to underestimate. The practical stakes lie less in a single act of labelling than in thousands of small daily interactions.' },
      ],
    },
    {
      id: 'how',
      title: 'How expectations are transmitted',
      blocks: [
        { t: 'p', text: 'Rosenthal’s four-factor theory of how teachers communicate expectations, and Brophy and Good’s studies of classroom interaction, point to the same set of behaviours.' },
        {
          t: 'table',
          head: ['Factor', 'With high expectations', 'With low expectations'],
          rows: [
            ['Climate', 'Warmer: more smiling, eye contact, nodding, closer seating', 'Cooler, more distant'],
            ['Input', 'Teach more material, and harder', 'Teach less, simplify, repeat basics'],
            ['Output', 'Give more chances to respond, more wait time, more challenging questions', 'Call on less, give less time, ask easier questions'],
            ['Feedback', 'More specific, more praise for good answers, more detail on errors', 'Less feedback, praise for poor work, criticise failures more or ignore them'],
          ],
          caption: 'Brophy and Good (1970) found teachers gave less response time and feedback to students they thought were low achievers.',
        },
      ],
    },
    {
      id: 'practice',
      title: 'Holding high expectations without bias',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Treat expectations as hypotheses', body: 'Predictions about a student are provisional: “this is how she has been performing”, not “this is what she can do”.' },
            { title: 'Check your interactions', body: 'Ask a colleague to count, or record a lesson: whom do I call on, wait for, challenge and praise? Is there a pattern?' },
            { title: 'Give everyone the hard questions', body: 'Use cold calling and random selection so that opportunities are even.' },
            { title: 'Give specific, honest feedback', body: 'Say what is good and what to improve. Vague praise for weak work signals low expectations.' },
            { title: 'Look for growth, not a ceiling', body: 'Use flexible grouping and revisit placement often. Do not fix a label early.' },
            { title: 'Know your own biases', body: 'Reflect on assumptions linked to gender, race, language, class, appearance and previous teachers’ notes.' },
          ],
        },
        {
          t: 'dodont',
          do: ['Set challenging, achievable goals for every student.', 'Give students strategies and support to meet them.', 'Be wary of passing on labels from one teacher to the next.', 'Notice and celebrate surprising progress.'],
          dont: ['Do not equate high expectations with pressure; support must match the standard.', 'Do not reduce challenge to protect a struggling student.', 'Do not assume that a lack of response means a lack of ability.', 'Do not rely on first impressions.'],
        },
        { t: 'links', items: [{ path: 'teaching/equity/motivation-equity', note: 'Stereotype threat and belonging' }, { path: 'teaching/concepts/streaming-and-tracking', note: 'Grouping and labels' }, { path: 'teaching/techniques/questioning/questioning', note: 'Questioning techniques' }] },
      ],
    },
  ],
  sources: [
    'Rosenthal, R., and Jacobson, L. (1968). Pygmalion in the Classroom. Holt, Rinehart and Winston.',
    'Jussim, L., and Harber, K. D. (2005). Teacher expectations and self-fulfilling prophecies: knowns and unknowns, resolved and unresolved controversies. Personality and Social Psychology Review.',
    'Brophy, J. E., and Good, T. L. (1970). Teachers’ communication of differential expectations for children’s classroom performance. Journal of Educational Psychology.',
    'Papageorge, N. W., Gershenson, S., and Kang, K. M. (2020). Teacher expectations matter. Review of Economics and Statistics.',
    'Merton, R. K. (1948). The self-fulfilling prophecy. Antioch Review.',
  ],
  related: ['teaching/case-studies/pygmalion', 'teaching/equity/motivation-equity', 'teaching/concepts/hidden-curriculum'],
}

export default guide
