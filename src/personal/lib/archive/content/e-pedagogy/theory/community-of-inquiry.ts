import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The biggest risk online is not that learners cannot get information; it is that they feel alone, drift and drop out. Three frameworks explain what keeps people engaged at a distance: the Community of Inquiry, Moore’s transactional distance and Gilly Salmon’s five-stage model of online moderation.',
  nutshell: [
    '**Community of Inquiry** (Garrison, Anderson and Archer, 2000): teaching presence, social presence and cognitive presence.',
    '**Transactional distance** (Moore, 1993): the psychological gap between learner and teacher, shrinking with more dialogue and appropriate structure.',
    '**Salmon’s five stages**: access and motivation, online socialisation, information exchange, knowledge construction, development.',
    'Presence is built deliberately: welcome videos, quick feedback, structured discussions, visible teacher activity.',
  ],
  sections: [
    {
      id: 'coi',
      title: 'The Community of Inquiry',
      blocks: [
        { t: 'cards', cols: 3, items: [
          { title: 'Teaching presence', body: 'Design, facilitation and direct instruction: setting the curriculum, guiding discussion, giving feedback. The strongest predictor of the other two.' },
          { title: 'Social presence', body: 'Learners projecting themselves as real people: open communication, group cohesion, emotional expression.' },
          { title: 'Cognitive presence', body: 'Constructing meaning through sustained reflection and discourse, in four phases: triggering event, exploration, integration, resolution.' },
        ] },
        { t: 'table', head: ['Presence', 'Concrete moves'], rows: [
          ['Teaching', 'Clear weekly overview; a short teacher video each week; reply to forum posts within a day; summarise discussions'],
          ['Social', 'Introductions with a photo or object; small groups that stay together; informal channel; name-calling in replies'],
          ['Cognitive', 'Discussion prompts with a genuine dilemma; require replies that build on others; a final synthesis task'],
        ] },
      ],
    },
    {
      id: 'moore',
      title: 'Transactional distance',
      blocks: [
        { t: 'p', text: 'Michael Moore argued that distance in education is pedagogical, not geographical. It depends on **dialogue** (how much learners and teachers interact), **structure** (how rigid the course is) and **learner autonomy**. A recorded lecture series with no interaction has high transactional distance even for students on the same campus; a well-run live seminar online can have low distance.' },
        { t: 'table', head: ['', 'Low structure', 'High structure'], rows: [
          ['**High dialogue**', 'Lowest distance: a tutorial', 'Low distance: a guided online course with active discussion'],
          ['**Low dialogue**', 'High distance: independent reading', 'Highest distance: a fixed self-paced module, no contact'],
        ] },
      ],
    },
    {
      id: 'salmon',
      title: 'Salmon’s five-stage model',
      blocks: [
        { t: 'levels', items: [
          { name: '1. Access and motivation', body: 'Can everyone log in, find things and feel welcome? E-moderator: technical help, a warm welcome.' },
          { name: '2. Online socialisation', body: 'Learners get to know each other. E-moderator: icebreakers, small groups, model friendly posts.' },
          { name: '3. Information exchange', body: 'Learners share and find information. E-moderator: tasks that need sharing; summarise.' },
          { name: '4. Knowledge construction', body: 'Learners debate and build ideas together. E-moderator: provocative questions; step back.' },
          { name: '5. Development', body: 'Learners reflect and take responsibility for their own learning. E-moderator: support independence.' },
        ] },
        { t: 'callout', tone: 'tip', title: 'E-tivities', text: 'Salmon’s “e-tivities” are short structured online tasks with a spark (a prompt or picture), a purpose, a clear task, a request to respond to others, and a summary from the moderator. They move learners through the stages.' },
      ],
    },
  ],
  sources: [
    'Garrison, D. R., Anderson, T., & Archer, W. (2000). Critical inquiry in a text-based environment. The Internet and Higher Education, 2(2–3), 87–105.',
    'Moore, M. G. (1993). Theory of transactional distance. In D. Keegan (Ed.), Theoretical Principles of Distance Education. Routledge.',
    'Salmon, G. (2013). E-tivities: The Key to Active Online Learning (2nd ed.). Routledge.',
  ],
  related: ['e-pedagogy/theory/course-design', 'facilitation/toolkit/online-and-hybrid', 'teaching/theories/social-constructivism'],
}

export default guide
