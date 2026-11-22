import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Michaela Community School in north-west London is perhaps the most talked-about school in England. It has silent corridors, strict rules and public praise for hard work, and its pupils, from a largely disadvantaged and diverse area, have achieved some of the best results in the country. It has also attracted fierce criticism and, in 2024, a High Court challenge. Michaela belongs to a wider family of “no excuses” schools, which began in the United States with networks such as KIPP. This case study sets out what these schools do, what the evidence says about their results, the criticisms and what a teacher or school can take from them without adopting everything.',
  nutshell: [
    '**Michaela** (opened 2014 in Wembley, headteacher Katharine Birbalsingh) combines **strict behaviour**, **a knowledge-rich curriculum**, **explicit teaching** and a strong **school culture**.',
    '“**No excuses**” schools, such as **KIPP** in the US, set **high expectations**, **long days**, **tight discipline** and **intensive instruction**.',
    'Randomised **lottery studies** in Boston and elsewhere found **large gains** in maths and reading for pupils who won places in such charters.',
    'Critics point to **harsh sanctions**, **pupil stress**, **attrition**, **limited generalisability** and **narrow outcomes**; defenders point to **safety, order and results**.',
    'What travels: **clear routines**, **calm classrooms**, **explicit teaching** and **high expectations**; what needs care: **severity**, **uniformity** and **cost**.',
  ],
  sections: [
    {
      id: 'michaela',
      title: 'Michaela Community School',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Behaviour', title: 'Strict, consistent and public', body: 'Pupils walk in silence between lessons, line up in order, track the speaker in class and receive demerits and detentions for small breaches. Staff apply the system uniformly.' },
            { tag: 'Curriculum', title: 'Knowledge-rich', body: 'A traditional academic curriculum for all, with a great deal of memorisation, explicit teaching and regular quizzing. Few distinctions between pupils at the start.' },
            { tag: 'Culture', title: 'Gratitude, kindness and “family lunch”', body: 'Pupils eat lunch together at assigned tables, with staff, and take turns to serve and to give public thanks. The school stresses courtesy and “kindness”.' },
            { tag: 'Staff', title: 'A strong teaching team and shared approach', body: 'Teachers use common routines, prepare together and are supported by leaders. The school says that workload is managed by removing marking and data entry.' },
            { tag: 'Results', title: 'Very high attainment', body: 'The school reported very high Progress 8 scores in 2019 (the national measure of progress from age 11 to 16), among the highest in England, and it was rated outstanding by Ofsted in 2016.' },
            { tag: 'Politics', title: 'A lightning rod', body: 'Its approach was embraced by some in government and criticised by others, and its founder became a prominent voice in debates about education and behaviour.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'The 2024 court case', text: 'In 2023 and 2024 the school was challenged in the High Court by a pupil who objected to its ban on prayer rituals. The court rejected the challenge in 2024, finding that the policy was a proportionate means of promoting the school’s inclusive ethos. The case drew attention to the tension between a school’s rules and pupils’ religious freedom.' },
      ],
    },
    {
      id: 'kipp',
      title: '“No excuses” in the United States',
      blocks: [
        { t: 'p', text: 'The “no excuses” label describes charter schools, mostly in poor urban areas of the US, that insist that poverty is not an excuse for low expectations. KIPP (Knowledge Is Power Program), founded in 1994 by two Teach For America alumni, Mike Feinberg and Dave Levin, is the best known. Others include Uncommon Schools, Success Academy and Achievement First. They usually have a long school day and year, intensive tutoring, strict behaviour codes (the “SLANT” rules for sitting up, listening, asking, nodding and tracking the speaker), data-driven instruction and heavy investment in teacher training and coaching.' },
        {
          t: 'table',
          head: ['Feature', 'In practice'],
          rows: [
            ['High expectations', 'All pupils are expected to go to college, with classes named after the college’s year of graduation'],
            ['Extended time', 'A longer day and year, with Saturday and summer sessions'],
            ['Strict behaviour', 'Rules for the hallways, uniforms, demerits and rewards, and scripted routines'],
            ['Data and coaching', 'Frequent assessments, data meetings, and regular observation of teachers'],
            ['Selection', 'Admission by lottery where oversubscribed, with students from poorer families'],
          ],
        },
      ],
    },
    {
      id: 'evidence',
      title: 'The evidence on results',
      blocks: [
        {
          t: 'table',
          head: ['Study', 'Finding'],
          rows: [
            ['Angrist and colleagues (2010, 2012) on Boston charters (lottery-based)', 'Large gains: about a third of a standard deviation a year in maths and about a fifth in English for “no excuses” charters, far above the district average'],
            ['Mathematica studies of KIPP middle schools (2013, 2015)', 'Positive and significant effects on reading, maths and science over several years, using matched comparison and lottery methods'],
            ['Dobbie and Fryer (2011) on Harlem Children’s Zone charters', 'Large effects, comparable to closing the black-white achievement gap in maths'],
            ['Dobbie and Fryer (2013) on “best practices”', 'Five practices were associated with effectiveness: frequent teacher feedback, data-driven instruction, high-dosage tutoring, increased instructional time and high expectations'],
            ['Long-run outcomes', 'Evidence on college and adult outcomes is more mixed, with some positive results for college entry and smaller for persistence'],
          ],
          caption: 'Summarised from published studies; effect sizes vary with the setting.',
        },
        {
          t: 'table',
          head: ['Concern', 'Comment'],
          rows: [
            ['Attrition: some pupils leave, which could flatter results', 'Lottery studies compare winners and losers regardless of whether they stayed, which addresses this; critics say that pupils who leave may be those hardest to teach'],
            ['Generalisability: results come from high-poverty, urban settings and well-funded networks', 'The practices may work less well in other contexts and at scale'],
            ['Cost: longer days and intensive tutoring cost more', 'Part of the effect may simply be more time and more teacher support'],
            ['Narrow outcomes: tests, not creativity, well-being or character', 'Defenders point to college entry and safe, orderly environments; critics to stress and the loss of play'],
            ['Discipline: very high rates of suspension and strict codes in some schools', 'Some networks have since softened their approach, and research links harsh discipline to harms for some pupils'],
            ['Replication: the effects of the same practices in district schools are smaller', 'Efforts to introduce “no excuses” practices in public schools have had mixed results (Fryer, 2014: positive in Houston)'],
          ],
        },
      ],
    },
    {
      id: 'lessons',
      title: 'What to take, and what to take care with',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Take', title: 'Clear, consistent routines', body: 'A calm, predictable school makes learning possible, especially for pupils whose lives are less predictable.' },
            { tag: 'Take', title: 'Explicit teaching and practice', body: 'Clear explanation, modelling, retrieval and feedback.' },
            { tag: 'Take', title: 'High expectations for everyone', body: 'Believing that all pupils can succeed, and showing it in what you ask of them.' },
            { tag: 'Take', title: 'Teacher coaching and shared practice', body: 'Frequent observation, feedback and common methods.' },
            { tag: 'Care', title: 'Severity and public humiliation', body: 'Strictness is not the same as harshness. Sanctions should be proportionate and respectful, and pupils’ dignity protected.' },
            { tag: 'Care', title: 'Well-being and voice', body: 'Check the effect on stress, belonging and pupils’ ability to disagree, and give pupils a way to be heard.' },
            { tag: 'Care', title: 'Context and cost', body: 'Practices that work in one network may not transfer. Look at what you can sustain.' },
            { tag: 'Care', title: 'Individual needs', body: 'Uniform rules can fail pupils with special educational needs. Provide reasonable adjustments.' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Compare with Singapore', text: 'Singapore’s schools combine many of these elements (order, high expectations, strong teaching, an academic curriculum), with the national discipline framework setting a baseline. The debate in Singapore is less about strictness than about stress, tuition and early labelling.' },
        { t: 'links', items: [{ path: 'teaching/philosophies/essentialism', note: 'The philosophy behind knowledge-rich schooling' }, { path: 'teaching/classroom-management/foundations', note: 'Models of behaviour management' }, { path: 'teaching/singapore/discipline-framework', note: 'MOE’s discipline framework' }] },
      ],
    },
  ],
  sources: [
    'Birbalsingh, K. (ed.) (2016). Battle Hymn of the Tiger Teachers: The Michaela Way. John Catt.',
    'Angrist, J. D., Dynarski, S. M., Kane, T. J., Pathak, P. A., and Walters, C. R. (2012). Who benefits from KIPP? Journal of Policy Analysis and Management.',
    'Dobbie, W., and Fryer, R. G. (2013). Getting beneath the veil of effective schools: evidence from New York City. American Economic Journal: Applied Economics.',
    'Tuttle, C. C., et al. (2015). Understanding the effect of KIPP as it scales. Mathematica Policy Research.',
    'Fryer, R. G. (2014). Injecting charter school best practices into traditional public schools: evidence from field experiments. Quarterly Journal of Economics.',
  ],
  related: ['teaching/philosophies/essentialism', 'teaching/classroom-management/foundations', 'teaching/singapore/discipline-framework'],
}

export default guide
