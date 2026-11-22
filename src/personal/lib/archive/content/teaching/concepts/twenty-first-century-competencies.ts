import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'For two decades governments and employers have asked schools to teach “21st-century skills”: critical thinking, creativity, communication, collaboration. Singapore has a formal Framework for 21st Century Competencies and Student Outcomes; the OECD, UNESCO and many countries have their own versions. The aims are hard to quarrel with. The difficulty lies in how: whether these skills can be taught directly, and whether they transfer from one subject to another. This page sets out Singapore’s framework, the main international lists, what cognitive science says about whether general skills exist, and how to build the competencies through the content of ordinary lessons.',
  nutshell: [
    'Singapore’s **Framework for 21st Century Competencies and Student Outcomes** (2010) puts **core values** at the centre, then **social and emotional competencies**, then three outer **competencies**, aimed at four **outcomes**.',
    'Other lists include the **“4Cs”** (critical thinking, creativity, communication, collaboration) of the Partnership for 21st Century Learning and the OECD **Learning Compass 2030**.',
    'Cognitive scientists (Willingham, 2007) argue that **critical thinking is not a general skill** that can be taught in the abstract; it **depends on domain knowledge** and practice.',
    'Evidence for **transfer** of skills from one context to another is **weak**, so skills should be **taught within subjects** and then practised in new contexts.',
    'The practical conclusion: **teach the knowledge**, **model the thinking**, **give practice with feedback**, and **make the competency explicit in each subject**.',
  ],
  sections: [
    {
      id: 'singapore',
      title: 'Singapore’s framework',
      blocks: [
        { t: 'p', text: 'MOE’s Framework for 21st Century Competencies and Student Outcomes was launched in 2010 and sets out how values, skills and outcomes fit together. It is often drawn as concentric rings.' },
        {
          t: 'levels',
          caption: 'The framework from the centre outwards, as described by MOE.',
          items: [
            { name: 'Core values (centre)', body: 'Respect, responsibility, resilience, integrity, care and harmony. The foundation of character.' },
            { name: 'Social and emotional competencies', body: 'Self-awareness, self-management, social awareness, relationship management and responsible decision-making.' },
            { name: '21st-century competencies (outer ring)', body: 'Civic literacy, global awareness and cross-cultural skills; critical and inventive thinking; communication, collaboration and information skills.' },
            { name: 'Desired outcomes of education', body: 'A confident person, a self-directed learner, a concerned citizen and an active contributor.' },
          ],
        },
      ],
    },
    {
      id: 'others',
      title: 'Other frameworks',
      blocks: [
        {
          t: 'table',
          head: ['Framework', 'Main elements'],
          rows: [
            ['Partnership for 21st Century Learning (US)', 'The 4Cs: critical thinking, creativity, communication, collaboration; plus information, media and technology skills and life and career skills'],
            ['OECD Learning Compass 2030', 'Knowledge, skills, attitudes and values, and the transformative competencies: creating new value, reconciling tensions and dilemmas, taking responsibility'],
            ['Assessment and Teaching of 21st Century Skills (ATC21S)', 'Ways of thinking, ways of working, tools for working, and living in the world'],
            ['UNESCO', 'Learning to know, to do, to be and to live together (the Delors report, 1996)'],
          ],
          caption: 'The lists overlap heavily. The differences are of emphasis, not substance.',
        },
      ],
    },
    {
      id: 'critical',
      title: 'Can critical thinking be taught as a general skill?',
      blocks: [
        { t: 'p', text: 'Daniel Willingham’s influential 2007 article argued that critical thinking is not a skill like riding a bicycle that, once learned, can be applied anywhere. Thinking critically about a historical source needs knowledge of the period; thinking critically about a statistical claim needs knowledge of statistics. Experts in a field think critically because they know a lot, and they spot problems that a novice, however well trained in “critical thinking”, cannot. Studies of attempts to teach general thinking skills find that students do well on tasks similar to those taught and much less well on dissimilar ones.' },
        {
          t: 'table',
          head: ['Claim', 'Evidence'],
          rows: [
            ['General thinking skills can be taught and will transfer anywhere', 'Weak. Transfer is hard and typically narrow (Barnett and Ceci, 2002)'],
            ['Thinking skills depend on subject knowledge', 'Strong. Experts differ from novices mainly in knowledge organised in memory'],
            ['Thinking skills can be taught within a subject', 'Good. Explicit teaching of reasoning in a domain works, with practice and feedback'],
            ['Collaboration and communication improve with explicit teaching and practice', 'Good. Structured group work and oral language teaching have positive effects'],
            ['Dispositions and values (curiosity, resilience) can be encouraged', 'Moderate. Climate, models and practice matter; short courses have small effects'],
          ],
        },
        { t: 'callout', tone: 'note', title: 'Not a reason to drop the aims', text: 'The critique is of a method (teaching skills in isolation), not of the aim. A school can and should aim to develop thoughtful, collaborative, creative people. The way to do it runs through content, not around it.' },
      ],
    },
    {
      id: 'practice',
      title: 'Teaching competencies through content',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Critical thinking', title: 'Within the subject', body: 'Teach students how a historian, scientist or mathematician checks a claim: what counts as evidence in this field? Practise with examples and non-examples.' },
            { tag: 'Creative thinking', title: 'With knowledge as the raw material', body: 'Give a problem with constraints and real knowledge to draw on. Creativity depends on having something to combine.' },
            { tag: 'Communication', title: 'Talk and writing', body: 'Teach oral language explicitly: sentence stems, discussion structures, presentations. Give feedback on the quality of explanation.' },
            { tag: 'Collaboration', title: 'Structured group work', body: 'Roles, individual accountability, tasks that need everyone. Teach the skills of listening, disagreeing and deciding.' },
            { tag: 'Self-direction', title: 'Metacognition', body: 'Teach planning, monitoring and evaluating one’s learning, with scaffolds that fade.' },
            { tag: 'Character', title: 'Habits and models', body: 'Model integrity and care, discuss real dilemmas, give responsibility, and reward the behaviours you want.' },
          ],
        },
        { t: 'links', items: [{ path: 'teaching/techniques/learning-strategies/metacognition', note: 'Metacognition' }, { path: 'teaching/techniques/active-learning/cooperative', note: 'Cooperative learning' }, { path: 'teaching/techniques/questioning/socratic', note: 'Socratic questioning' }, { path: 'teaching/concepts/pedagogical-content-knowledge', note: 'PCK' }] },
      ],
    },
  ],
  sources: [
    'Ministry of Education Singapore (2010). Framework for 21st Century Competencies and Student Outcomes.',
    'Willingham, D. T. (2007). Critical thinking: why is it so hard to teach? American Educator.',
    'Barnett, S. M., and Ceci, S. J. (2002). When and where do we apply what we learn? A taxonomy for far transfer. Psychological Bulletin.',
    'OECD (2019). OECD Learning Compass 2030.',
    'Griffin, P., McGaw, B., and Care, E. (eds.) (2012). Assessment and Teaching of 21st Century Skills. Springer.',
  ],
  related: ['teaching/concepts/curriculum-models', 'teaching/techniques/learning-strategies/metacognition', 'teaching/taxonomies/marzano'],
}

export default guide
