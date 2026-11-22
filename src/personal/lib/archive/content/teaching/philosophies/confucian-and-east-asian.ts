import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Anyone teaching in Singapore, Hong Kong, Taiwan, Korea, Japan or China teaches inside a tradition that is more than two thousand years old, whether or not they know it. Confucian ideas about learning, effort, respect for teachers and the moral purpose of education are woven through classrooms, parenting and examinations. They explain much that outsiders find puzzling, such as the stress on effort over talent, the pressure of exams and the status of the teacher, and they are now in tension with calls for creativity and critical thinking. This page sets out the tradition, how it shows up in practice, the evidence and how Singapore and its neighbours are redefining it.',
  nutshell: [
    'For **Confucius**, learning is a lifelong path of **self-cultivation**: becoming a good person and a good member of society, not only knowing facts.',
    'The teacher is a **moral exemplar** as well as an instructor, and deserves **respect**; the relationship is **lifelong**.',
    'Success comes from **effort** more than innate ability: “If another can do it in one try, I will do it in a hundred” (Doctrine of the Mean).',
    'The **imperial examination** (*keju*) system shaped the social order for more than a thousand years and echoes in modern **high-stakes exams** and **meritocracy**.',
    'Reforms in Singapore, Hong Kong, Korea and China seek to **retain the strengths** (effort, respect, high standards) while building **creativity, inquiry and well-being**.',
  ],
  sections: [
    {
      id: 'ideas',
      title: 'Core ideas',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Aim', title: 'Self-cultivation and moral purpose', body: 'The learner develops virtue (*ren*, humaneness; *li*, propriety; *yi*, righteousness) alongside knowledge. Education makes a person fit to serve family and society.' },
            { tag: 'Teacher', title: 'Moral exemplar', body: 'The teacher teaches by example. “In walking with two others, I will always find a teacher among them” (Analects 7.22): everyone can learn from everyone.' },
            { tag: 'Learning', title: 'Effort and perseverance', body: 'Success depends on diligence. “To learn and at due times to practise what one has learned: is that not a pleasure?”' },
            { tag: 'Learning', title: 'Thought and study together', body: '“Learning without thought is labour lost; thought without learning is perilous” (Analects 2.15).' },
            { tag: 'Society', title: 'Harmony and hierarchy', body: 'Relationships (ruler-subject, parent-child, teacher-pupil) carry duties and respect, and harmony comes from each person fulfilling their role.' },
            { tag: 'Equality', title: 'Education for all', body: '“In teaching there should be no distinction of classes” (Analects 15.39): in principle anyone can become learned.' },
          ],
        },
      ],
    },
    {
      id: 'keju',
      title: 'The examination tradition',
      blocks: [
        { t: 'p', text: 'From the Sui and Tang dynasties and above all from the Song, China selected officials through the imperial examination (*keju*), open in principle to any male who could pass. It tested mastery of the Confucian classics and the ability to write essays, and it was the main route to status and wealth for over a thousand years, abolished in 1905. The system made education and hard work the route to advancement, which is a version of what is now called meritocracy, and it set patterns that endure: heavy investment by families, memorisation, preparation and a public ranking.' },
        {
          t: 'table',
          head: ['Strength', 'Cost'],
          rows: [
            ['Opened a route to status through study', 'Narrow memorisation of a fixed canon'],
            ['Taught the value of effort and discipline', 'Stress, a long and exclusive preparation, and the failure of many'],
            ['Made education a national priority', 'Teaching to the test; limited room for creativity or dissent'],
            ['Respect for teachers and learning', 'Hierarchy and deference that can discourage questioning'],
          ],
        },
      ],
    },
    {
      id: 'modern',
      title: 'In classrooms today',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Effort over ability', body: 'Cross-cultural studies (Stevenson and Stigler, 1992) found that East Asian parents and teachers attributed success more to effort, and American ones more to ability. This belief shapes persistence.' },
            { title: 'The Chinese learner paradox', body: 'Western observers assumed rote memorisation, yet East Asian students often outperform in understanding. John Biggs and others argued that repetition is used as a route to understanding, not a substitute.' },
            { title: 'Whole-class teaching', body: 'Well-structured, whole-class, teacher-led lessons with careful planning, as in Shanghai maths and Japanese lesson study.' },
            { title: 'Supplementary education', body: 'After-school tuition (hagwons in Korea, jukus in Japan, tuition centres in Singapore) is a major feature. See the case study on shadow education.' },
            { title: 'Respect and order', body: 'Students stand to greet the teacher; classroom discipline is generally strong; the teacher’s authority is rarely challenged openly.' },
            { title: 'Collective responsibility', body: 'Students clean the classroom in Japan; group responsibility is stressed over individual competition.' },
          ],
        },
      ],
    },
    {
      id: 'singapore',
      title: 'Singapore: a Confucian heritage in a plural society',
      blocks: [
        { t: 'p', text: 'Singapore’s education system draws on British colonial foundations, Confucian and other Asian values, and a pragmatic modern state. It emphasises effort, high standards and meritocracy, with a strong national examination system and the national value of “learning for life”. Since 1997 reforms, “Thinking Schools, Learning Nation”, “Teach Less, Learn More” (2005) and an emphasis on 21st-century competencies and holistic education, have tried to loosen the exam grip, to encourage inquiry and to value many routes of achievement. Changes to PSLE scoring and the move to Full Subject-Based Banding aim to reduce early labelling.' },
        {
          t: 'table',
          head: ['Inherited emphasis', 'Reform emphasis'],
          rows: [
            ['Examination results and rankings', 'Learning for life; wide range of strengths; reducing fine-grained ranking'],
            ['Teacher as authority and transmitter', 'Inquiry, student voice, applied learning'],
            ['Effort and diligence', 'Effort with well-being; creativity and resilience'],
            ['Streaming by ability at an early age', 'Subject-based banding and flexibility'],
            ['Moral education in school and family', 'Character and citizenship education'],
          ],
        },
        { t: 'links', items: [{ path: 'teaching/case-studies/singapore-system', note: 'Singapore’s reforms in detail' }, { path: 'teaching/concepts/equity-and-meritocracy', note: 'Meritocracy and its critics' }, { path: 'teaching/case-studies/shadow-education', note: 'Tuition and shadow education' }] },
      ],
    },
    {
      id: 'critique',
      title: 'Tensions and criticisms',
      blocks: [
        {
          t: 'list',
          items: [
            '**Stress and well-being.** High-stakes exams and heavy workloads are linked to student anxiety; governments have responded with limits on tuition hours, changes to exams and well-being initiatives.',
            '**Creativity and questioning.** Some argue that deference and exam focus discourage creative and critical thinking; others note that Asian systems have invested in these skills and that the contrast is overdrawn.',
            '**Inequality.** Meritocracy can mask advantage: families with more money buy more tuition. Merit is shaped by family resources.',
            '**Over-generalisation.** “Confucian” covers very different systems; Japan, Korea, China and Singapore differ greatly, and each is changing.',
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Keep the strengths', text: 'High expectations, belief in effort, respect for teachers, collective responsibility and serious attention to teaching quality are strengths that many Western systems have tried to learn from, such as maths mastery from Shanghai and lesson study from Japan.' },
      ],
    },
  ],
  sources: [
    'Confucius. The Analects (translated by Legge, or by Slingerland).',
    'Stevenson, H. W., and Stigler, J. W. (1992). The Learning Gap. Summit Books.',
    'Biggs, J. B., and Watkins, D. A. (eds.) (2001). Teaching the Chinese Learner. CERC, University of Hong Kong.',
    'Tan, C. (2017). Beyond Rote-Memorisation: Confucius’ Concept of Thinking. Educational Philosophy and Theory.',
    'Ministry of Education Singapore. Thinking Schools, Learning Nation (1997); Teach Less, Learn More (2005).',
  ],
  related: ['teaching/philosophies/overview', 'teaching/case-studies/singapore-system', 'teaching/case-studies/shadow-education'],
}

export default guide
