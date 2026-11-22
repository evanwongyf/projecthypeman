import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Most of the educational philosophies taught in teacher education come from Europe and North America. But people have been raising children and passing on knowledge for far longer, in traditions that start from different assumptions: that a person is formed through relationships, that knowledge belongs to a community and a place, and that elders and stories are teachers. This page introduces Ubuntu in southern Africa, Māori education in Aotearoa New Zealand and other Indigenous approaches, not as exotic alternatives, but as serious bodies of thought about learning that have much to teach any classroom.',
  nutshell: [
    '**Ubuntu** (“I am because we are”) sees a person as formed through **relationship**: education is a communal project.',
    'Indigenous education typically treats knowledge as **relational, place-based and holistic**, held by **elders** and passed on by **story, practice and example**.',
    '**Māori education** in Aotearoa New Zealand centres on **whanaungatanga** (relationships), **ako** (reciprocal teaching and learning) and **mana**; Māori-medium schools (*kura kaupapa*) revive language and culture.',
    'These traditions challenge **individualistic** assumptions in Western schooling and push for **culturally sustaining** practice.',
    'They also warn against **tokenism**: using a few symbols or stories without changing relationships, power or curriculum.',
  ],
  sections: [
    {
      id: 'ubuntu',
      title: 'Ubuntu',
      blocks: [
        { t: 'p', text: 'Ubuntu is a Nguni word from southern Africa often summarised as “umuntu ngumuntu ngabantu”: a person is a person through other persons. It names a way of understanding human beings as defined by their relationships, with the obligation to care for, share with and respect others. Thinkers such as Desmond Tutu, who invoked it in the Truth and Reconciliation Commission, and philosophers such as Mogobe Ramose have developed it as a philosophy of its own.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Idea', title: 'Personhood through community', body: 'A child becomes a person by taking part in family and community life. Schools are one place where this happens.' },
            { tag: 'Idea', title: 'Interdependence', body: 'Learning is shared. Your success is tied to the success of others, which favours cooperation over competition.' },
            { tag: 'Idea', title: 'Respect and dignity', body: 'Every person has dignity and a contribution to make. Discipline repairs relationships rather than isolating the offender.' },
            { tag: 'Practice', title: 'Restorative approaches', body: 'Community circles, storytelling and shared responsibility fit naturally. The restorative practice movement draws on similar ideas from several traditions.' },
          ],
        },
      ],
    },
    {
      id: 'maori',
      title: 'Māori education',
      blocks: [
        { t: 'p', text: 'In Aotearoa New Zealand, Māori education has been shaped by colonisation, which suppressed te reo Māori (the language) in schools, and by a revival from the 1980s: *kōhanga reo* (language nests) for young children, then *kura kaupapa Māori* (Māori-medium schools). Education policy, including the strategy Ka Hikitia, now aims to support Māori students to succeed as Māori. Several concepts shape practice.' },
        {
          t: 'terms',
          items: [
            { term: 'Whanaungatanga', def: 'Relationships and a sense of belonging, built through connection to family, place and community. In class, getting to know each learner and their whānau.' },
            { term: 'Ako', def: 'Both to teach and to learn: a reciprocal relationship in which the teacher learns from the student and the student from the teacher.' },
            { term: 'Mana', def: 'Authority, dignity and standing; a person’s and a community’s.' },
            { term: 'Manaakitanga', def: 'Care, hospitality and respect for others.' },
            { term: 'Whakapapa', def: 'Genealogy and connection; who you are, where you come from and to whom and what you are related.' },
            { term: 'Kaupapa', def: 'Purpose, agenda or philosophy; kura kaupapa schools operate on Māori principles.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'Evidence from Te Kotahitanga', text: 'The Te Kotahitanga professional development project in New Zealand secondary schools, led by Russell Bishop and colleagues, found that when teachers built relationships of care and high expectations with Māori students, “culturally responsive relationships of interdependence”, the students’ engagement and achievement improved.' },
      ],
    },
    {
      id: 'others',
      title: 'Other Indigenous approaches',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Story', title: 'Story as curriculum', body: 'Oral stories carry history, law, ethics and science. They are told in particular ways, at particular times, by those who have the right to tell them.' },
            { tag: 'Place', title: 'Learning in and from place', body: 'Knowledge is tied to land and waters. Learning happens outdoors and the community and its landscape are the classroom.' },
            { tag: 'Elders', title: 'Elders as teachers', body: 'Elders hold knowledge and are respected as teachers; schools invite them in as partners, not as guests.' },
            { tag: 'Holistic', title: 'Body, mind, spirit and community', body: 'Many traditions (for example the medicine wheel in some Canadian First Nations) treat learning as the growth of the whole person.' },
            { tag: 'Observation', title: 'Learning by watching and doing', body: 'Children take part in adult work from early on, and learn through observation and gradual participation, an idea studied as “learning by observing and pitching in” (Rogoff).' },
            { tag: 'Collective', title: 'Group responsibility', body: 'Learning is shared, with older children caring for younger, and work done together.' },
          ],
        },
      ],
    },
    {
      id: 'practice',
      title: 'What this means for any classroom',
      blocks: [
        {
          t: 'list',
          items: [
            'Build relationships first. Learn about students’ families, languages and communities, and use that knowledge.',
            'Treat students’ home knowledge as a resource: what Moll called “funds of knowledge”.',
            'Use stories, circles and community links to teach, not only as decoration.',
            'Teach cooperation as a value and a skill, not only competition.',
            'Learn the local context: the Malay, Chinese, Indian and Orang Asli heritage of Singapore and Malaysia, and the place of languages in identity.',
            'Be honest about history, including colonisation and its effect on education.',
          ],
        },
        {
          t: 'dodont',
          do: ['Invite community members as co-teachers, with respect and, where fitting, payment.', 'Learn the language and protocols, and ask before sharing stories.', 'Link school learning to real needs of the community.', 'Listen to those who belong to the tradition.'],
          dont: ['Do not reduce a tradition to a craft activity or a festival.', 'Do not speak for a culture you do not belong to.', 'Do not treat Indigenous knowledge as folklore.', 'Do not assume that one community’s practice applies to another.'],
        },
        { t: 'links', items: [{ path: 'teaching/inclusive-practice/diverse-backgrounds', note: 'Teaching learners from diverse backgrounds' }, { path: 'teaching/guides/classroom/culturally-responsive', note: 'Culturally responsive teaching' }] },
      ],
    },
  ],
  sources: [
    'Ramose, M. B. (1999). African Philosophy through Ubuntu. Mond Books.',
    'Bishop, R., Berryman, M., Cavanagh, T., and Teddy, L. (2009). Te Kotahitanga: Addressing educational disparities facing Māori students in New Zealand. Teaching and Teacher Education.',
    'Battiste, M. (2013). Decolonizing Education: Nourishing the Learning Spirit. Purich Publishing.',
    'Rogoff, B. (2014). Learning by observing and pitching in to family and community endeavors. Human Development.',
    'Moll, L. C., et al. (1992). Funds of knowledge for teaching. Theory Into Practice.',
  ],
  related: ['teaching/philosophies/overview', 'teaching/inclusive-practice/diverse-backgrounds', 'teaching/guides/classroom/culturally-responsive'],
}

export default guide
