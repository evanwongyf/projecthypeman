import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Few studies in education have been so widely cited, so fiercely criticised and so hard to kill as Rosenthal and Jacobson’s “Pygmalion in the Classroom”. Published in 1968, it told teachers that what they expect of a child can alter what the child achieves. It made headlines, entered teacher training and inspired a research programme. It also drew sharp methodological criticism and failed to replicate cleanly. This case study retells what was done, why it was challenged, what later research concluded and what the study should and should not teach us.',
  nutshell: [
    'At **Oak School** in California, teachers were told that certain pupils (chosen at random) would **“bloom”**, and those pupils later showed **larger IQ gains**, especially in the **youngest grades**.',
    'The study was **criticised** for an unreliable test, unclear procedures and small samples; **replications** found effects **inconsistently**.',
    'Later reviews found that teacher expectations **do** influence pupils, but the effects are **usually small**, **larger for some groups** and often **accurate predictions rather than causes**.',
    'The effect has also been found in **other settings**, such as military training courses (Eden) and management (the “Pygmalion effect” at work), and in reverse: the **Golem effect** of low expectations.',
    'The lasting value of the study lies in the **question**, not the **headline result**.',
  ],
  sections: [
    {
      id: 'study',
      title: 'What was done',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'The school', body: 'Oak School, an elementary school in a lower-income area of California, with 18 classes from kindergarten to grade 6.' },
            { title: 'The test', body: 'In the autumn all pupils took a non-verbal IQ test (a standard test, which teachers were told was the “Harvard Test of Inflected Acquisition” and predicted intellectual “blooming”).' },
            { title: 'The “bloomers”', body: 'Teachers were told that about 20% of pupils, listed by name, were likely to show unusual gains in the coming year. In fact these pupils had been chosen at random.' },
            { title: 'Follow-up', body: 'The same test was given after eight months and a year. The pupils labelled as “bloomers” were compared with the rest.' },
            { title: 'Result', body: 'Overall the bloomers gained more IQ points than controls (about 12 against 8). The difference was greatest in the first and second grades (reported gains of about 27 against 12, and 17 against 7). Teachers also rated bloomers as more curious, happier and more likely to succeed.' },
          ],
        },
      ],
    },
    {
      id: 'critique',
      title: 'The criticisms',
      blocks: [
        {
          t: 'table',
          head: ['Criticism', 'Who and what'],
          rows: [
            ['The IQ test was a group test with unreliable scoring, especially for young children; a few extreme gains drove the result', 'Thorndike (1968) and Elashoff and Snow (1971), *Pygmalion Reconsidered*'],
            ['No clear evidence that teachers actually remembered or acted on the labels', 'Critics of the procedures'],
            ['The gains in the first two grades may reflect regression to the mean or test unreliability', 'Statistical critics'],
            ['Effects were not found in the upper grades', 'The original data'],
            ['Many later experiments failed to reproduce the result', 'Reviews in the 1970s to 1990s'],
          ],
        },
        { t: 'callout', tone: 'note', title: 'The Snow verdict', text: 'Richard Snow (1995) argued that the evidence for an effect on IQ was weak, while accepting that expectations can matter in other ways. The study was influential because of the idea, which seemed plausible and important, more than because of the data.' },
      ],
    },
    {
      id: 'later',
      title: 'What later research found',
      blocks: [
        {
          t: 'table',
          head: ['Research', 'Conclusion'],
          rows: [
            ['Raudenbush (1984) meta-analysis of 18 experiments', 'Expectancy effects were larger when teachers had known the pupils for only a short time (about two weeks) and near zero when they had known them longer'],
            ['Jussim and Harber (2005) review', 'Self-fulfilling prophecies exist in classrooms but are small on average; teachers’ expectations are largely accurate because they reflect pupils’ actual performance; effects may be larger for stereotyped groups'],
            ['Eden and colleagues (Israeli Defence Forces training experiments, 1980s)', 'Instructors told that trainees had high potential (randomly chosen) saw trainees perform better on objective tests, a stronger effect'],
            ['Papageorge and colleagues (2020)', 'Teachers’ expectations of Black students’ college completion differed from those of other teachers, and were associated with later outcomes'],
            ['“Golem effect” (Babad)', 'Negative expectations lower performance, perhaps more than positive expectations raise it'],
          ],
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Lesson', title: 'Expectations matter, modestly', body: 'The average effect is small, and prior performance is the main driver of expectations.' },
            { tag: 'Lesson', title: 'They matter more at the margins', body: 'For pupils whom teachers underestimate because of stereotypes, even small effects can add up over years.' },
            { tag: 'Lesson', title: 'First impressions are sticky', body: 'Effects are largest when teachers know least about a pupil, so be careful at the start of the year and when taking over a class.' },
            { tag: 'Lesson', title: 'Science needs replication', body: 'A striking finding with a good story is not enough. The Pygmalion saga is a classic example of why replication matters.' },
          ],
        },
      ],
    },
    {
      id: 'questions',
      title: 'Questions for discussion',
      blocks: [
        {
          t: 'list',
          items: [
            'Is it ethical to mislead teachers in an experiment? What should the researchers have told them?',
            'Why did a flawed study become so influential? What made the idea attractive?',
            'How would you design a better study of teacher expectations today?',
            'If most expectations are accurate, what is the problem with them? When does accuracy shade into self-fulfilment?',
            'What would you do to ensure that you hold high expectations for pupils you find difficult?',
          ],
        },
        { t: 'links', items: [{ path: 'teaching/concepts/teacher-expectations', note: 'The concept and practical steps' }, { path: 'teaching/equity/motivation-equity', note: 'Stereotype threat' }] },
      ],
    },
  ],
  sources: [
    'Rosenthal, R., and Jacobson, L. (1968). Pygmalion in the Classroom: Teacher Expectation and Pupils’ Intellectual Development. Holt, Rinehart and Winston.',
    'Elashoff, J. D., and Snow, R. E. (1971). Pygmalion Reconsidered. Charles A. Jones.',
    'Raudenbush, S. W. (1984). Magnitude of teacher expectancy effects on pupil IQ as a function of the credibility of expectancy induction. Journal of Educational Psychology.',
    'Jussim, L., and Harber, K. D. (2005). Teacher expectations and self-fulfilling prophecies. Personality and Social Psychology Review.',
    'Eden, D. (1990). Pygmalion in Management. Lexington Books.',
  ],
  related: ['teaching/concepts/teacher-expectations', 'teaching/equity/motivation-equity', 'teaching/guides/growth/research'],
}

export default guide
