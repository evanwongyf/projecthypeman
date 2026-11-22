import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Beside every formal education system lies a second one, paid for by families: private tuition, cram schools, enrichment classes. Mark Bray called it “shadow education”, because it mimics the school system and grows as the school system grows. In Singapore it is a visible part of childhood; in South Korea the hagwon is an institution; in China the government tried in 2021 to ban much of it. This case study looks at its scale, why it exists, what it does for results and equity, and what governments have tried.',
  nutshell: [
    '**Shadow education** is **private supplementary tutoring** that mirrors the school curriculum. It exists wherever **examinations** decide a pupil’s future.',
    'Singapore households spend **over a billion dollars** a year on tuition; in South Korea, a **large majority** of pupils attend **hagwons** and spending is among the highest in the world.',
    'Evidence on its effect on **marks** is **mixed but modestly positive**; its effect on **equity** is clearer: it tends to **widen gaps**, since richer families buy more.',
    'It also raises **stress**, **time pressure** and a kind of **arms race**: if others have tuition, you feel you must.',
    'Governments have tried **curfews**, **bans**, **free public alternatives** and **reducing the exam stakes**, with limited success: the demand comes from the **system** as well as the tutors.',
  ],
  sections: [
    {
      id: 'scale',
      title: 'The scale',
      blocks: [
        {
          t: 'table',
          head: ['Place', 'Reported picture'],
          rows: [
            ['Singapore', 'Household surveys have reported spending on private tuition of well over a billion Singapore dollars a year, and large shares of primary and secondary pupils taking some tuition; the tuition industry includes tuition centres, home tutors and enrichment providers'],
            ['South Korea', 'Government surveys have reported that most pupils (roughly three in four or more) take private lessons, often at hagwons; total private education spending of the order of tens of trillions of won a year'],
            ['Japan', 'The juku industry serves large numbers of pupils, especially at lower secondary level before high-school entrance exams'],
            ['China', 'Before 2021 the for-profit tutoring industry was enormous; in July 2021 the “double reduction” policy banned for-profit tutoring in core academic subjects and cut homework'],
            ['Elsewhere', 'Shadow education is large in India, Egypt, Turkey and the Caribbean, and growing in the UK and US'],
          ],
          caption: 'Figures differ by survey and year and are reported in broad terms here. Check the latest government statistics.',
        },
      ],
    },
    {
      id: 'why',
      title: 'Why it exists',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Exams', title: 'High-stakes selection', body: 'Where a single exam decides which school or university a child enters, families invest heavily in the marginal advantage tuition may give.' },
            { tag: 'Arms race', title: 'Positional competition', body: 'If others have tuition, a child who does not feels behind. Everyone spends more and relative positions barely change.' },
            { tag: 'Pace', title: 'The school curriculum moves fast', body: 'Where school moves quickly and class sizes are large, parents want individual attention and extra practice.' },
            { tag: 'Culture', title: 'Belief in effort and investment', body: 'In Confucian-heritage societies, education is a family project, and spending on it is a mark of care.' },
            { tag: 'Anxiety', title: 'Parental worry', body: 'Parents fear their child will miss out. Tuition is bought as insurance.' },
            { tag: 'Supply', title: 'A market grows', body: 'Tutors, centres and apps market their services, with advertising that feeds the worry.' },
          ],
        },
      ],
    },
    {
      id: 'effects',
      title: 'What it does',
      blocks: [
        {
          t: 'table',
          head: ['Question', 'What the evidence suggests'],
          rows: [
            ['Does tuition raise marks?', 'Studies find small to moderate positive effects on test scores on average, with large variation by tutor, intensity and pupil; very hard to isolate from selection, since pupils who get tuition differ from those who do not. The EEF finds one-to-one and small-group tuition inside school effective, but that is a different thing from market tuition.'],
            ['Does it widen inequality?', 'Yes, in most studies: richer families buy more and better tuition, and it is associated with greater gaps in achievement and access to selective schools'],
            ['Does it harm well-being?', 'Long hours of study and tuition are linked to stress, sleep loss and less time for play and family; evidence of causal harm is mixed'],
            ['Does it affect schools?', 'It can lead teachers to teach to the test, can lead pupils to pay less attention in school if they have learned the content, and in some countries teachers tutor their own pupils, which creates a conflict of interest'],
            ['Does it have benefits beyond marks?', 'Some pupils gain confidence and individual help; tutors can fill gaps and support those who struggle'],
          ],
        },
        { t: 'callout', tone: 'note', title: 'Not all tuition is the same', text: 'Free or low-cost community tuition, school-based tutoring and tuition for those with special needs raise different questions from expensive exam-focused cram classes. Equity looks at who gets what.' },
      ],
    },
    {
      id: 'responses',
      title: 'What governments have tried',
      blocks: [
        {
          t: 'table',
          head: ['Response', 'Where', 'Result'],
          rows: [
            ['Curfews on tutoring hours (for example 10 pm)', 'South Korea (since the 1990s, enforced in some regions)', 'Modest effects: some activity moves to earlier hours or underground'],
            ['Banning for-profit tutoring in core subjects and reducing homework', 'China (2021 “double reduction”)', 'Large drop in the formal industry, but evidence of a shadow market continuing and some families paying more for private tutors; policy later eased'],
            ['Making school better and reducing the stakes of exams', 'Singapore (removing weighted assessments, wider PSLE bands, Full SBB)', 'Aims to reduce the demand; tuition has remained widespread'],
            ['Free or subsidised extra classes in school', 'Korea (after-school programmes, EBS broadcast lessons), Singapore (learning support programmes, school-based support)', 'Help some pupils and reduce costs; do not replace the private market'],
            ['Regulating quality and advertising', 'Various', 'Small effect on demand'],
            ['Teaching how to learn and mastering basics early', 'Singapore (Learning Support for English and Mathematics in early primary school)', 'Reduces some need for later remedial tuition'],
          ],
          caption: 'Descriptions are broad and the results debated; check recent reviews.',
        },
        { t: 'p', text: 'The common lesson is that bans and curfews treat the symptom. As long as exams determine life chances and families compete, demand will find a way. Lasting change needs a reduction in the stakes of exams and the early sorting of children, the kind of changes Singapore has begun to make, along with a school system good enough that families do not feel they must buy a second one.' },
      ],
    },
    {
      id: 'think',
      title: 'Questions for discussion',
      blocks: [
        {
          t: 'list',
          items: [
            'Is tuition a private choice or a public problem? Where is the line?',
            'If every family in a class buys tuition, who gains? Who loses?',
            'What should a school do for a child who has had tuition and is bored, and one who has had none and is behind?',
            'How would you tell parents what they should and should not do?',
            'What would have to change for demand to fall?',
          ],
        },
        { t: 'links', items: [{ path: 'teaching/concepts/equity-and-meritocracy', note: 'Equity and meritocracy' }, { path: 'teaching/case-studies/singapore-system', note: 'Singapore’s system' }, { path: 'teaching/philosophies/confucian-and-east-asian', note: 'East Asian traditions' }] },
      ],
    },
  ],
  sources: [
    'Bray, M. (2009). Confronting the Shadow Education System: What Government Policies for What Private Tutoring? UNESCO IIEP.',
    'Bray, M., and Kobakhidze, M. N. (2014). Measurement issues in research on shadow education. Comparative Education Review.',
    'Statistics Korea and Ministry of Education (annual). Survey on private education expenditures.',
    'Department of Statistics Singapore. Household Expenditure Survey (private tuition spending).',
    'Zhang, W., and Bray, M. (2020). Comparative research on shadow education. Comparative Education Review.',
  ],
  related: ['teaching/concepts/equity-and-meritocracy', 'teaching/case-studies/singapore-system', 'teaching/philosophies/confucian-and-east-asian'],
}

export default guide
