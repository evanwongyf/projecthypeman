import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Anthropology is the study of humanity: where we came from, how we differ and what we share. It is unusual among the social sciences for its scope, which covers deep time and the present, biology and culture, tiny communities and global systems, and for its commitment to learning people’s own perspectives. This guide introduces the discipline’s fields, its core ideas (holism, comparison, relativism, the emic and etic views) and the concept of culture, which is its most important and most contested idea.',
  nutshell: [
    'In the United States tradition, anthropology has **four fields**: **cultural** (or social), **biological** (physical), **archaeology** and **linguistic**.',
    '**Holism**: understanding a practice by seeing how it fits with the rest of life (economy, kinship, religion, politics).',
    '**Comparison**: testing general claims across many societies, past and present.',
    '**Emic** (the insider’s view) and **etic** (the outsider’s analytic view) are both needed.',
    '**Culture** is learned, shared, and shapes behaviour, but cultures are not fixed boxes: they change, overlap and are disputed from within.',
  ],
  sections: [
    {
      id: 'fields',
      title: 'The four fields',
      blocks: [
        {
          t: 'table',
          head: ['Field', 'Asks', 'Methods'],
          rows: [
            ['Cultural and social anthropology', 'How do people live, organise themselves and make meaning?', 'Fieldwork, participant observation, interviews, comparison'],
            ['Biological (physical) anthropology', 'How did humans evolve and how do bodies vary and adapt?', 'Fossils, genetics, primatology, skeletal analysis'],
            ['Archaeology', 'What can material remains tell us about past societies?', 'Excavation, dating, analysis of artefacts and landscapes'],
            ['Linguistic anthropology', 'How is language used in social life, and how does it relate to thought and identity?', 'Recording, discourse analysis, comparison of languages'],
          ],
          caption: 'British and European traditions use “social anthropology” and treat archaeology and biological anthropology as separate disciplines. Applied anthropology works in health, development, business, design and policy.',
        },
      ],
    },
    {
      id: 'ideas',
      title: 'Core ideas',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Holism', title: 'Everything connects', body: 'A marriage custom involves property, kinship, religion and politics. To understand one, you follow the links.' },
            { tag: 'Comparison', title: 'Many societies, not one', body: 'A claim about “human nature” needs to be checked against evidence from many cultures, not only the researcher’s own.' },
            { tag: 'Relativism', title: 'Context before judgment', body: 'Boas and his students argued that beliefs and practices must be understood in terms of their own cultural context before being evaluated. This is a method, not the claim that anything goes.' },
            { tag: 'Reflexivity', title: 'The observer is part of it', body: 'The anthropologist’s background and presence shape what they see. Good work states this openly.' },
          ],
        },
        {
          t: 'table',
          head: ['Term', 'Meaning', 'Example'],
          rows: [
            ['Emic', 'The insiders’ categories and meanings', 'How Japanese speakers distinguish uchi (inside, one’s own group) and soto (outside)'],
            ['Etic', 'The analyst’s comparative categories', 'Classing both as a form of in-group and out-group distinction'],
            ['Ethnocentrism', 'Judging others by the standards of your own culture and assuming yours is the norm', 'Calling another society’s food “disgusting”'],
            ['Cultural relativism (methodological)', 'Understanding practices in context before judging', 'Learning why a ritual is performed before evaluating it'],
            ['Moral relativism (a philosophical claim)', 'No cultural practice can be judged better or worse', 'A stronger claim than the method needs, and one many anthropologists reject'],
          ],
        },
      ],
    },
    {
      id: 'culture',
      title: 'What is culture?',
      blocks: [
        { t: 'p', text: 'Edward Tylor (1871) defined culture as “that complex whole which includes knowledge, belief, art, morals, law, custom, and any other capabilities and habits acquired by man as a member of society”. The key points are that culture is learned, not inherited biologically, shared within a group, and covers everything from language to table manners. Anthropologists have since refined, and criticised, the idea.' },
        {
          t: 'table',
          head: ['View', 'Claim', 'Comment'],
          rows: [
            ['Culture as shared learned patterns', 'Groups share ways of thinking and acting that are passed on', 'Useful, but risks treating cultures as uniform'],
            ['Culture as meaning (Geertz)', 'Culture is a web of significance that people spin and live in', 'Stresses interpretation of meaning'],
            ['Culture as practice', 'Culture is what people do, and it changes as they do it', 'Highlights change and improvisation'],
            ['Critique of “culture” (Abu-Lughod)', 'The term can exaggerate difference and fix people into groups', 'A reminder to write about individuals and variation'],
          ],
        },
        {
          t: 'dodont',
          do: ['Treat culture as shared but varied: not everyone in a group thinks or acts alike.', 'Expect change, borrowing and disagreement within any culture.', 'Look at power: who decides what counts as “our tradition”?'],
          dont: ['Explain individual behaviour by saying “it is their culture”.', 'Treat cultures as sealed boxes or as timeless.', 'Confuse culture with race or nationality.'],
        },
        { t: 'links', items: [{ path: 'anthropology/foundations/methods-and-ethics', note: 'Next: how anthropologists work' }, { path: 'anthropology/foundations/theories-of-culture', note: 'Big theories of culture' }] },
      ],
    },
  ],
  sources: [
    'Tylor, E. B. (1871). Primitive Culture. John Murray.',
    'Geertz, C. (1973). The Interpretation of Cultures.',
    'Abu-Lughod, L. (1991). Writing against culture. In R. Fox (ed.), Recapturing Anthropology. School of American Research Press.',
    'Boas, F. (1911). The Mind of Primitive Man. Macmillan.',
    'Eriksen, T. H. (2015). Small Places, Large Issues.',
  ],
  related: ['anthropology/start-here', 'anthropology/foundations/methods-and-ethics', 'anthropology/foundations/theories-of-culture'],
}

export default guide
