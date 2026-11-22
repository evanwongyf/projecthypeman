import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Learners work harder for teachers they trust, and learn more in classrooms where they feel they belong. Strong relationships are not about being liked or being lenient; they come from showing learners that you care about them and believe they can do demanding work.',
  nutshell: [
    'The **warm demander**: high care and high expectations together.',
    'Belonging matters, especially for learners who worry they do not fit.',
    'Small, repeated actions build relationships: greetings, names, noticing, following up.',
    'After conflict, **repair**. The relationship is the teacher’s responsibility to restore.',
  ],
  sections: [
    {
      id: 'warm-demander',
      title: 'Warm and demanding',
      blocks: [
        {
          t: 'table',
          head: ['', 'Low expectations', 'High expectations'],
          rows: [
            ['High warmth', '**Sentimentalist**: kind, but lets learners off. "It’s fine, you’ve had a hard week."', '**Warm demander**: "I know you can do this, and I’m not going to let you settle for less. Let’s go through it together."'],
            ['Low warmth', '**Bystander**: disengaged, little care or challenge.', '**Technocrat**: demanding, but cold. Rules without relationship.'],
          ],
          caption: 'Adapted from Kleinfeld (1975) and later work by Bondy and Ross (2008) and others.',
        },
        {
          t: 'p',
          text: 'Judith Kleinfeld coined "warm demander" in 1975 to describe teachers who were most effective with Alaska Native and Inuit learners. The idea has since been developed especially in work on culturally responsive teaching. The key: expectations are themselves a form of care.',
        },
      ],
    },
    {
      id: 'belonging',
      title: 'Belonging',
      blocks: [
        {
          t: 'p',
          text: 'Learners who are unsure whether "people like me" belong in a class or subject may read every difficulty as evidence that they do not. In a well-known study, a short exercise helping first-year university students see that worries about belonging are common and temporary improved grades for Black students over the following years (Walton & Cohen, 2011).',
        },
        {
          t: 'list',
          items: [
            'Normalise struggle: "Everyone finds this part hard at first. That is how learning works."',
            'Show learners people like them in the subject: examples, role models, their own past successes.',
            'Make sure every learner is known: notice absences, ask about interests, follow up.',
            'Use learners’ names and pronounce them correctly.',
          ],
        },
      ],
    },
    {
      id: 'actions',
      title: 'Small actions that build trust',
      blocks: [
        {
          t: 'cards',
          cols: 3,
          items: [
            { title: 'Greet at the door', body: 'A study of positive greetings at the door found increased academic engagement and fewer disruptions (Cook et al., 2018).' },
            { title: '2 × 10', body: 'For a learner you struggle to connect with: two minutes of conversation about anything other than school, for ten days in a row.' },
            { title: 'Notice', body: '"You got your hair cut." "How was the match?" Being noticed signals being valued.' },
            { title: 'Positive contact home', body: 'A short message or call about something good. It changes how families, and learners, see you.' },
            { title: 'Keep promises', body: 'If you say you will look at something, do. Reliability builds trust.' },
            { title: 'Repair', body: 'After a conflict, reconnect: "Yesterday was hard. Today’s a fresh start. I’m glad you’re here."' },
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          text: 'Cook and colleagues describe **establish, maintain, restore**: build the relationship early, keep it going with regular positive contact, and deliberately restore it after harm. See also [humanism](@teaching/theories/humanism).',
        },
      ],
    },
  ],
  sources: [
    'Kleinfeld, J. (1975). Effective teachers of Eskimo and Indian students. *The School Review, 83*(2), 301–344.',
    'Bondy, E., & Ross, D. D. (2008). The teacher as warm demander. *Educational Leadership, 66*(1), 54–58.',
    'Walton, G. M., & Cohen, G. L. (2011). A brief social-belonging intervention improves academic and health outcomes of minority students. *Science, 331*(6023), 1447–1451.',
    'Cook, C. R., et al. (2018). Positive greetings at the door: Evaluation of a low-cost, high-yield proactive classroom management strategy. *Journal of Positive Behavior Interventions, 20*(3), 149–159.',
    'Cook, C. R., et al. (2018). Cultivating positive teacher–student relationships: Preliminary evaluation of the establish–maintain–restore (EMR) method. *School Psychology Review, 47*(3), 226–243.',
  ],
  related: ['teaching/theories/humanism', 'teaching/guides/classroom/management', 'teaching/theories/motivation', 'teaching/special-education/needs/semh', 'teaching/guides/classroom/culturally-responsive'],
}

export default guide
