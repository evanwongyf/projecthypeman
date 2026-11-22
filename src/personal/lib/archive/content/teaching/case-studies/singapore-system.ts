import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Singapore became independent in 1965 with no natural resources, high unemployment and a population that spoke several languages. Within a generation its pupils were topping international rankings, and its education system was being studied around the world. But the same system has kept changing: from a survival-driven drive to universal basic schooling, to a push for thinking and creativity, to a more recent effort to cut the stress of testing and the early labelling of children. This case study follows that journey, looks at the features that made it work, and at the criticisms, including stress, tuition and inequality.',
  nutshell: [
    'The system developed in **phases**: survival (1965 to 1978), efficiency (1979 to 1996), ability-driven (1997 to 2011) and student-centric, values-driven (2012 onwards).',
    'Key reports and reforms: the **Goh Report (1979)**, **Thinking Schools, Learning Nation (1997)**, **Teach Less, Learn More (2005)**, the **21st Century Competencies framework (2010)**, **PSLE scoring change (2021)** and **Full Subject-Based Banding (2024)**.',
    'Strengths: **selective, well-trained and well-paid teachers**, a coherent **curriculum**, a strong **school leadership pipeline** and **continuous policy review**.',
    'Costs: **high-stakes exams**, a large **tuition industry**, stress and concerns about **inequality** and early labelling.',
    'The most recent reforms aim to **keep high standards while loosening early sorting and exam pressure**.',
  ],
  sections: [
    {
      id: 'phases',
      title: 'A system that keeps redesigning itself',
      blocks: [
        {
          t: 'levels',
          caption: 'Phases of development as described by MOE and in the literature, oldest first.',
          items: [
            { name: 'Survival-driven (1965 to 1978)', body: 'Build enough schools and teachers, teach basic literacy and numeracy, adopt English as the working language alongside the mother tongues (the bilingual policy of 1966), and link schooling to jobs.' },
            { name: 'Efficiency-driven (1979 to 1996)', body: 'The Goh Report found high wastage and introduced streaming by ability, to bring each pupil to the level they could reach. Technical education was strengthened with the Institute of Technical Education.' },
            { name: 'Ability-driven (1997 to 2011)', body: '“Thinking Schools, Learning Nation” (1997) aimed to build a creative, thinking population. “Teach Less, Learn More” (2005) cut content so teachers could teach for understanding, and subject-based banding began in primary school (2008).' },
            { name: 'Student-centric, values-driven (2012 onwards)', body: 'The 21st Century Competencies framework (2010), focus on character, SkillsFuture for lifelong learning, removal of some exams, the PSLE scoring change (2021) and Full SBB (2024).' },
          ],
        },
      ],
    },
    {
      id: 'features',
      title: 'What made it work',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Teachers', title: 'Careful selection and training', body: 'Trainee teachers are selected from the upper part of each cohort, receive a stipend while training at the National Institute of Education and are guaranteed a career. Teachers have an entitlement to around 100 hours of professional development a year.' },
            { tag: 'Careers', title: 'Three career tracks', body: 'Teachers can progress as classroom teachers, senior specialists or school leaders, with regular appraisal, so strong teachers need not leave the classroom to advance.' },
            { tag: 'Leadership', title: 'A pipeline of leaders', body: 'Potential leaders are identified early, rotated and trained through the Leaders in Education Programme.' },
            { tag: 'Coherence', title: 'Alignment', body: 'Policy, curriculum, assessment, teacher training and school support are planned together by one ministry and one national institute.' },
            { tag: 'Standards', title: 'High expectations and mastery of the basics', body: 'A strong emphasis on mathematics, English and mother tongue, and carefully designed textbooks and approaches, such as the Singapore maths model.' },
            { tag: 'Review', title: 'Constant adjustment', body: 'Policies are piloted, evaluated and changed, and long-term planning is linked to economic needs.' },
          ],
        },
        {
          t: 'table',
          head: ['International result', 'Detail'],
          rows: [
            ['TIMSS and PIRLS', 'Singapore’s pupils have been among the top performers in mathematics and science for many years'],
            ['PISA 2022', 'Singapore ranked first in mathematics, reading and science, with mean scores of roughly 575, 543 and 561'],
          ],
          caption: 'Approximate figures from the OECD’s PISA 2022 results and the IEA’s TIMSS reports; check the originals.',
        },
      ],
    },
    {
      id: 'reforms',
      title: 'Recent reforms: loosening the grip',
      blocks: [
        {
          t: 'table',
          head: ['Change', 'What it does'],
          rows: [
            ['Removal of mid-year exams and weighted assessments (from 2019, in stages)', 'Reduce the number of high-stakes tests, encourage learning over scoring'],
            ['No class and level rankings on report cards (from 2019)', 'Reduce comparison between pupils'],
            ['PSLE Achievement Levels (from 2021)', 'Replace the aggregate score, a fine-grained ranking, with wider bands from AL1 to AL8'],
            ['Full Subject-Based Banding (from 2024)', 'Replace Express, Normal (Academic) and Normal (Technical) streams with subjects at G1, G2 or G3, in mixed form classes'],
            ['Singapore-Cambridge Secondary Education Certificate (from 2027)', 'Replace the O- and N-Level certificates with one certificate'],
            ['Applied Learning Programme, Learning for Life Programme, Character and Citizenship Education', 'Broaden the experience beyond academics'],
          ],
          caption: 'As announced by MOE; check moe.gov.sg for current details.',
        },
      ],
    },
    {
      id: 'critique',
      title: 'Costs and criticisms',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Stress', title: 'Exam pressure and well-being', body: 'High-stakes national exams at 12 and 16 are linked to stress and anxiety. International surveys have found high levels of fear of failure among Singapore pupils.' },
            { tag: 'Tuition', title: 'A shadow education system', body: 'A large private tuition industry. Families who can pay more get more, which raises questions of fairness. See the shadow education case.' },
            { tag: 'Equity', title: 'Advantage and labels', body: 'Early streaming, elite school pathways and social stratification have been criticised. Full SBB and wider PSLE bands are attempts to address this.' },
            { tag: 'Creativity', title: 'Teach to the test?', body: 'Critics say that exam emphasis limits creativity and risk-taking, even though the policy rhetoric is of thinking schools. Others say that Singapore’s teaching increasingly builds inquiry and application.' },
            { tag: 'Teachers', title: 'Workload', body: 'Teachers report long working hours and administrative load; the Ministry has taken steps to reduce non-teaching work.' },
            { tag: 'Context', title: 'Transferability', body: 'Singapore is a small city-state with a single ministry and rapid policy change; many of its features may not travel.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'Questions for discussion', text: 'Can a system be both high-performing and low-stress? What is lost and gained by reducing early ranking? How much of Singapore’s success is explained by teacher quality, and how much by culture and family investment in education?' },
        { t: 'links', items: [{ path: 'teaching/concepts/streaming-and-tracking', note: 'Streaming and Full SBB' }, { path: 'teaching/concepts/equity-and-meritocracy', note: 'Meritocracy refreshed' }, { path: 'teaching/case-studies/shadow-education', note: 'Tuition in Singapore and Korea' }, { path: 'teaching/philosophies/confucian-and-east-asian', note: 'Confucian traditions' }] },
      ],
    },
  ],
  sources: [
    'Goh, K. S., et al. (1979). Report on the Ministry of Education 1978. Ministry of Education, Singapore.',
    'Ministry of Education Singapore. Thinking Schools, Learning Nation (1997); Teach Less, Learn More (2005); Framework for 21st Century Competencies (2010); Full Subject-Based Banding (2024).',
    'Tucker, M. (2011). Surpassing Shanghai: An Agenda for American Education Built on the World’s Leading Systems. Harvard Education Press.',
    'Deng, Z., and Gopinathan, S. (2016). PISA and high-performing education systems: explaining Singapore’s education success. Comparative Education.',
    'OECD (2023). PISA 2022 Results (Volume I).',
  ],
  related: ['teaching/case-studies/finland', 'teaching/concepts/streaming-and-tracking', 'teaching/philosophies/confucian-and-east-asian'],
}

export default guide
