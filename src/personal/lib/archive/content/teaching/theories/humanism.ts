import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Humanism looks at the **whole person**: their needs, feelings and drive to grow. It reminds teachers that a learner who is hungry, frightened or unseen is not ready to learn, however good the lesson.',
  nutshell: [
    'Maslow: basic needs like food, safety and belonging must be reasonably met before learners can focus on higher goals.',
    'Rogers: learning flourishes in a relationship built on **genuineness, acceptance and empathy**, with the teacher as facilitator.',
    'Learners have a natural drive to grow; teaching should work with it rather than against it.',
    'Use humanism to set the conditions for learning, alongside theories that explain how learning itself works.',
  ],
  sections: [
    {
      id: 'maslow',
      title: 'Maslow’s hierarchy of needs',
      lead: 'Why safety comes before study.',
      blocks: [
        {
          t: 'p',
          text: 'In 1943 Abraham Maslow proposed that human motivation is organised around needs, and that more basic needs tend to dominate until they are reasonably satisfied. He did not draw the famous pyramid himself; it was popularised later by others. His own later writing stressed that the levels overlap and that people pursue several at once.',
        },
        {
          t: 'levels',
          items: [
            { name: 'Physiological', body: 'Food, water, sleep, warmth. A learner who skipped breakfast or slept four hours is running on empty.' },
            { name: 'Safety', body: 'Physical and emotional security, predictability. Chaos, bullying or fear of humiliation keeps attention on threats.' },
            { name: 'Love and belonging', body: 'Being known, liked and part of a group. Feeling like an outsider in class undermines effort.' },
            { name: 'Esteem', body: 'Feeling competent and respected, by others and by oneself.' },
            { name: 'Self-actualisation', body: 'Becoming the fullest version of yourself: curiosity, creativity, pursuing what matters to you.' },
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Not a strict ladder',
          text: 'Research has not supported a rigid sequence where one level must be complete before the next matters (Wahba & Bridwell, 1976). People study while hungry and create art in hardship. Use the hierarchy as a checklist of conditions, not as a rule that learning must wait.',
        },
      ],
    },
    {
      id: 'rogers',
      title: 'Carl Rogers and student-centred learning',
      lead: 'The teacher as facilitator.',
      blocks: [
        {
          t: 'p',
          text: 'Carl Rogers, a therapist, brought ideas from client-centred therapy into education in *Freedom to Learn* (1969). He believed that people learn most deeply what they see as relevant to their own goals, and that a supportive relationship removes the threat that makes people defensive and closed to new ideas.',
        },
        {
          t: 'cards',
          cols: 3,
          items: [
            { title: 'Genuineness', body: 'Being real rather than hiding behind the role of teacher. Admitting what you do not know.' },
            { title: 'Unconditional positive regard', body: 'Accepting and valuing the learner as a person, even when rejecting a behaviour or an answer.' },
            { title: 'Empathic understanding', body: 'Trying to see the learning from the learner’s side: what is confusing, what feels risky.' },
          ],
        },
        {
          t: 'p',
          text: 'Rogers argued that significant learning happens when threats to the self are low. A learner afraid of looking stupid will not risk a guess, and guessing is how much learning starts.',
        },
      ],
    },
    {
      id: 'classroom',
      title: 'In the classroom',
      lead: 'Creating the conditions.',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Check basic needs', body: 'Water bottles, a snack drawer, a warm room, a quiet word with the learner who seems exhausted. These are not distractions from teaching; they make it possible.' },
            { title: 'Make it safe to be wrong', body: 'Treat errors as useful information. "Thank you, that is a really common idea, let’s test it" makes mistakes normal.' },
            { title: 'Learn names fast', body: 'Being known is the start of belonging. Use names often and warmly.' },
            { title: 'Predictable routines', body: 'Knowing what will happen reduces anxiety, especially for learners whose lives outside school are unpredictable. See [classroom management](@teaching/guides/classroom/management).' },
            { title: 'Offer real choices', body: 'Choice of topic, format or order gives learners some ownership, and connects to autonomy in [motivation](@teaching/theories/motivation).' },
            { title: 'Separate person from behaviour', body: '"I like having you in this class. Shouting out stops others thinking, so I need you to stop."' },
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Warm and demanding',
          text: 'Humanism is sometimes misread as "be nice and lower expectations". The research on effective teachers suggests the opposite: high warmth combined with high expectations, sometimes called being a **warm demander**. See [relationships and belonging](@teaching/guides/classroom/relationships).',
        },
      ],
    },
    {
      id: 'limits',
      title: 'Strengths and limits',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Remember that wellbeing, safety and relationships are preconditions for learning.',
            'Build a classroom where learners can take intellectual risks.',
            'Connect learning to learners’ goals and interests.',
          ],
          dont: [
            'Treat the hierarchy as a strict sequence backed by strong evidence.',
            'Confuse a warm relationship with low expectations.',
            'Assume learners always know what is best to learn next. Novices often cannot judge what they need.',
          ],
        },
      ],
    },
  ],
  sources: [
    'Maslow, A. H. (1943). A theory of human motivation. *Psychological Review, 50*(4), 370–396.',
    'Rogers, C. R. (1969). *Freedom to learn*. Charles E. Merrill.',
    'Wahba, M. A., & Bridwell, L. G. (1976). Maslow reconsidered: A review of research on the need hierarchy theory. *Organizational Behavior and Human Performance, 15*(2), 212–240.',
    'Cornelius-White, J. (2007). Learner-centered teacher–student relationships are effective: A meta-analysis. *Review of Educational Research, 77*(1), 113–143.',
  ],
  related: ['teaching/theories/motivation', 'teaching/guides/classroom/relationships', 'teaching/special-education/needs/semh'],
}

export default guide
