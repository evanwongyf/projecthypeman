import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'What parents do in the early years matters for every child, gifted or not: language, play, curiosity and secure relationships build the brain’s architecture. For a child who learns quickly, the task changes as they grow, from enriching their world, to matching their pace, to handing them the reins. This guide goes stage by stage.',
  nutshell: [
    '**0–3**: talk constantly, read daily, follow their interests, “serve and return” conversation, safe exploration, secure attachment.',
    '**3–6**: rich play, books, music, puzzles, nature, answering questions with questions, early exposure to many domains.',
    '**6–12**: match challenge to ability, find a few deep interests, teach effort and study habits, protect free time.',
    '**12–18**: mentors, real projects and competitions, autonomy, resilience, and room to choose their own path.',
  ],
  sections: [
    {
      id: 'infants',
      title: '0–3: building the brain',
      blocks: [
        { t: 'cards', cols: 2, items: [
          { title: 'Serve and return', body: 'When a baby babbles, points or looks, respond: name what they see, copy their sounds, take turns. Harvard’s Center on the Developing Child calls this the single most important ingredient in early brain development.' },
          { title: 'Talk, a lot', body: 'Hart and Risley’s famous study found large differences in the number of words children heard; later research shows **conversational turns** (back-and-forth talk) matter more than raw word counts.' },
          { title: 'Read every day', body: 'Shared reading from birth builds vocabulary and attention. Point, name, ask, and let the child turn pages. Library cards are the best value enrichment there is.' },
          { title: 'Safe exploration', body: 'Objects to explore, safe spaces to move, chances to try and fail. Avoid screens under 18–24 months except video calls (American Academy of Pediatrics).' },
          { title: 'Secure attachment', body: 'Consistent, warm caregivers give children the security to explore. Anxious children learn less.' },
          { title: 'Sleep and food', body: 'See the diet and sleep guide: iron, iodine, omega-3 and enough sleep are foundations for brain development.' },
        ] },
      ],
    },
    {
      id: 'preschool',
      title: '3–6: curiosity and play',
      blocks: [
        { t: 'checklist', items: [
          'Plenty of open-ended play (blocks, Lego, pretend play, art materials), play builds executive function, language and creativity.',
          'Answer questions, and turn them back: “What do you think? How could we find out?”',
          'Wide exposure: museums, nature walks, music, building, cooking, gardening, simple experiments.',
          'Teach early literacy and numeracy playfully if the child is interested (letter sounds, counting games), never as drills against their will.',
          'Introduce an instrument or a second language if there is real interest, earlier starts help with pronunciation and pitch.',
          'Praise effort and strategies (“you kept trying different pieces”) more than intelligence (“you’re so clever”), following Carol Dweck’s findings.',
          'Model curiosity: let them see you read, learn and make mistakes.',
        ] },
      ],
    },
    {
      id: 'primary',
      title: '6–12: matching pace and building habits',
      blocks: [
        { t: 'steps', items: [
          { title: 'Find the right level of challenge', body: 'Work slightly above current ability (Vygotsky’s zone of proximal development). Bored gifted children learn to coast; talk to the school about differentiation or acceleration.' },
          { title: 'Go deep in a few areas', body: 'Two or three serious interests beat ten shallow activities. Watch for what the child chooses in free time.' },
          { title: 'Teach how to work', body: 'Many gifted children never learn to study because everything is easy. Give tasks hard enough to need effort, and teach planning, practice and persistence.' },
          { title: 'Reading, reading, reading', body: 'Unlimited access to books at and above level; discuss them together.' },
          { title: 'Real problems', body: 'Maths puzzles and circles, science fairs, coding projects, building things, writing for real audiences.' },
          { title: 'Protect unstructured time', body: 'Boredom and free play drive creativity. Over-scheduled children have less of both.' },
          { title: 'Friendship', body: 'Help them find intellectual peers through clubs, camps and programmes, as well as age peers.' },
        ] },
      ],
    },
    {
      id: 'teens',
      title: '12–18: autonomy and real work',
      blocks: [
        { t: 'cards', cols: 2, items: [
          { title: 'Mentors', body: 'Connect them with adults working in their field of interest: university outreach, internships, online communities. Bloom’s study of world-class performers found a progression from a warm first teacher to demanding master teachers.' },
          { title: 'Competitions and real projects', body: 'Olympiads, science fairs, hackathons, debating, publishing, performing. They give stretch, peers and feedback.' },
          { title: 'Hand over control', body: 'Intrinsic motivation grows with autonomy. Increasingly let them choose goals and methods; parents become consultants, not managers.' },
          { title: 'Resilience and failure', body: 'Many gifted teens meet real difficulty for the first time in secondary school or university. Normalise struggle; talk about your own failures.' },
          { title: 'Wellbeing', body: 'Watch for perfectionism, anxiety, burnout and isolation. Sleep, exercise and friendships matter as much as achievement.' },
          { title: 'Future paths', body: 'Avoid tying a child’s identity to one talent or one prestigious path; many prodigies change direction, and that is fine.' },
        ] },
      ],
    },
  ],
  sources: [
    'Center on the Developing Child, Harvard University. Serve and return; the science of early childhood development.',
    'Romeo, R. R. et al. (2018). Beyond the 30-million-word gap: children’s conversational exposure is associated with language-related brain function. Psychological Science 29(5).',
    'Bloom, B. S. (ed.) (1985). Developing Talent in Young People. Ballantine.',
    'Dweck, C. S. (2006). Mindset: The New Psychology of Success. Random House.',
    'American Academy of Pediatrics (2016). Media and young minds. Pediatrics 138(5).',
  ],
  related: ['parenting/gifted/hobbies-enrichment', 'parenting/gifted/diet-sleep-brain'],
}

export default guide
