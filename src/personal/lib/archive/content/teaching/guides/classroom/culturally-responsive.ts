import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Culturally responsive teaching treats learners’ backgrounds, languages and experiences as strengths to build on, while holding high expectations for everyone. It asks whose stories the curriculum tells, and how learners experience the classroom.',
  nutshell: [
    'Gloria Ladson-Billings: **academic success**, **cultural competence** and **critical consciousness**.',
    'High expectations are central; lowering demands is not "responsive".',
    'Curriculum as **windows and mirrors**: learners should see themselves and see into other lives.',
    'Know your learners as individuals; avoid assumptions based on group identity.',
  ],
  sections: [
    {
      id: 'roots',
      title: 'Roots',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Culturally relevant pedagogy', body: 'Gloria Ladson-Billings (1995) studied teachers who were highly successful with African American students. They held three commitments: learners must achieve academically; they should keep and develop their cultural identity; and they should develop the ability to question inequities.' },
            { title: 'Culturally responsive teaching', body: 'Geneva Gay (2000) described teaching that uses the cultural knowledge, experiences and frames of reference of diverse learners to make learning more relevant and effective.' },
            { title: 'Warm demanders', body: 'Zaretta Hammond (2015) stresses relationships and high expectations together, and building learners’ independence as thinkers. See [relationships and belonging](@teaching/guides/classroom/relationships).' },
          ],
        },
      ],
    },
    {
      id: 'curriculum',
      title: 'Windows and mirrors',
      blocks: [
        {
          t: 'p',
          text: 'Rudine Sims Bishop (1990) described books as **mirrors**, where readers see their own lives reflected, **windows**, where they see into other lives, and **sliding glass doors**, where they can step into those worlds. Learners who never see themselves in what they study may conclude that learning is not for people like them; learners who only see themselves miss out on understanding others.',
        },
        {
          t: 'checklist',
          items: [
            'Whose voices, histories and examples appear in my units? Whose are missing?',
            'Do examples and problems draw on a range of contexts, including my learners’ lives?',
            'Are people from different backgrounds shown as experts, not only as victims or exceptions?',
            'Do learners get to bring their own knowledge and languages into lessons?',
          ],
        },
      ],
    },
    {
      id: 'practice',
      title: 'In practice',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Learn about each learner: interests, languages, families, communities.',
            'Keep expectations high and give the support to reach them.',
            'Pronounce names correctly.',
            'Connect new content to learners’ experiences and prior knowledge.',
            'Let learners use home languages to think and discuss (see [language learners](@teaching/differentiation/language-learners)).',
            'Examine your own assumptions and check data for patterns (who is praised, who is disciplined, who is in top sets).',
          ],
          dont: [
            'Assume a learner’s interests, abilities or views from their background.',
            'Treat culture as food and festivals only.',
            'Put one learner on the spot to speak for their whole group.',
            'Confuse cultural responsiveness with lowering standards, or with "cultural learning styles", which lack evidence.',
          ],
        },
        {
          t: 'p',
          text: 'Evidence on specific programmes is still growing. One well-known study found that a high school ethnic studies course in San Francisco improved attendance and grades for students at risk of dropping out (Dee & Penner, 2017).',
        },
      ],
    },
  ],
  sources: [
    'Ladson-Billings, G. (1995). Toward a theory of culturally relevant pedagogy. *American Educational Research Journal, 32*(3), 465–491.',
    'Gay, G. (2018). *Culturally responsive teaching: Theory, research, and practice* (3rd ed.). Teachers College Press.',
    'Hammond, Z. (2015). *Culturally responsive teaching and the brain*. Corwin.',
    'Bishop, R. S. (1990). Mirrors, windows, and sliding glass doors. *Perspectives: Choosing and Using Books for the Classroom, 6*(3), ix–xi.',
    'Dee, T. S., & Penner, E. K. (2017). The causal effects of cultural relevance: Evidence from an ethnic studies curriculum. *American Educational Research Journal, 54*(1), 127–166.',
  ],
  related: ['teaching/guides/classroom/relationships', 'teaching/differentiation/language-learners', 'teaching/special-education/foundations/inclusion'],
}

export default guide
