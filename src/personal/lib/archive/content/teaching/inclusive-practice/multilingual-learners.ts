import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A learner who is acquiring the language of instruction while learning the subject is doing two jobs at once, and the second job depends on the first. Misreading this produces two opposite mistakes: expecting too little because the learner’s spoken English sounds limited, or expecting too much because it sounds fluent. This guide explains Cummins’ distinction between conversational and academic language, the realistic timescales, how home languages help, and a set of teaching strategies, with Singapore’s bilingual policy as context.',
  nutshell: [
    '**BICS** (basic interpersonal communication skills) are the conversational language of the playground, acquired in about **1 to 3 years**. **CALP** (cognitive academic language proficiency) is the language of school texts, and typically takes **5 to 7 years** (Cummins; Collier).',
    'A learner who chats fluently may still struggle with textbooks: **fluency in conversation is not a sign that academic language has arrived.**',
    'The home language is an **asset**: skills in a first language transfer (Cummins’ common underlying proficiency), and using it for thinking and discussion supports learning.',
    '**Comprehensible input** (Krashen), **interaction and output** (Swain), **scaffolding** and explicit teaching of vocabulary and sentence structure all help.',
    'Do not mistake language difficulty for a special need; but multilingual learners can also have special needs, so assess in both languages where possible.',
  ],
  sections: [
    {
      id: 'bics',
      title: 'Conversational and academic language',
      lead: 'Cummins’ distinction.',
      blocks: [
        {
          t: 'table',
          head: ['', 'BICS: conversational', 'CALP: academic'],
          rows: [
            ['Context', 'Face-to-face, gestures, objects, shared situation (context-embedded)', 'Written, abstract, decontextualised: the text must carry all meaning'],
            ['Cognitive demand', 'Lower: familiar topics, short turns', 'Higher: abstract concepts, argument, classification, explanation'],
            ['Vocabulary', 'High-frequency everyday words', 'Subject words ("photosynthesis") and general academic words ("therefore", "evaluate", "evidence")'],
            ['Grammar', 'Short sentences, simple connectors', 'Long sentences, passive voice, nominalisation ("the heating of the metal"), subordinate clauses'],
            ['Time to develop', '≈ 1–3 years', '≈ 5–7 years (4–7 in some studies)'],
          ],
          caption: 'Cummins (1979, 1981); Collier (1987). The timescales are averages from North American immigrant samples and vary with age, prior schooling and support.',
        },
        {
          t: 'plot',
          title: 'Two language curves (illustrative)',
          x: [0, 8],
          y: [0, 100],
          xLabel: 'years of exposure',
          yLabel: 'proportion of native-peer proficiency (%)',
          curves: [
            { f: (t) => 100 * (1 - Math.exp(-t / 0.9)), label: 'conversational (BICS)' },
            { f: (t) => 100 * (1 - Math.exp(-t / 3.2)), label: 'academic (CALP)', dashed: true },
          ],
          hlines: [{ y: 80, label: 'approaching grade-level' }],
          caption: 'A stylised picture of the idea, not data: conversation levels off early, while academic language is still climbing years later. The learner at year 2 can chat, and still has far to go on the textbook.',
        },
        {
          t: 'math',
          tex: String.raw`P(t)=1-e^{-t/\tau},\qquad t_{80\%}=\tau\ln 5\approx1.61\,\tau`,
          caption: 'A simple saturating model of proficiency after t years, with a time constant τ.',
          where: [{ sym: '\\tau', def: 'the time constant: how quickly proficiency approaches its ceiling (smaller means faster)' }],
          syntax: [{ sym: 'e^{-t/\\tau}', say: 'the share of the gap that has not yet been closed. Effect: early gains are quick and later gains are slow. Why: each year closes a fixed fraction of what remains, so the last stretch takes longest.' }, { sym: '\\tau\\ln5', say: 'the time to reach 80% (solving 1−e^{−t/τ}=0.8). Effect: if τ for academic language is about 3.2 years, 80% takes about 5.1 years.' }],
          worked: {
            title: 'When is "fluent" fluent?',
            steps: ['Conversational τ ≈ 0.9 years: \\(t_{80}=0.9\\times1.61=1.4\\) years.', 'Academic τ ≈ 3.2 years: \\(t_{80}=3.2\\times1.61=5.1\\) years.', 'At 2 years: conversation \\(1-e^{-2.2}=89\\%\\), academic \\(1-e^{-0.63}=46\\%\\).'],
            answer: 'A two-year learner sounds near-native and is under halfway to academic proficiency (in this stylised model). Teachers who exit support at the first sign of fluent speech remove it just when academic demands are growing.',
          },
        },
      ],
    },
    {
      id: 'home',
      title: 'The home language is a resource',
      lead: 'Transfer, translanguaging and identity.',
      blocks: [
        { t: 'p', text: 'Cummins’ **common underlying proficiency** says that skills such as concepts, learning strategies and literacy knowledge developed in one language are available in another: once you know that a fraction is a part of a whole, you need only new words, not the idea again. Learners who are strong in their first language usually acquire the second more quickly. **Translanguaging** (García) treats a bilingual learner’s languages as one repertoire to be drawn on strategically: discussing in the home language, then writing in English; reading a bilingual text; comparing a word and its cognate. It is not the same as mixing out of weakness; it is a teaching tool.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Myth: "Use only English at home"', tag: 'evidence', body: 'There is no good evidence that speaking the home language at home slows English; children who maintain both generally do as well or better, and parents who speak richly in the language they know best give better language input.' },
            { title: 'Myth: "They will just pick it up"', tag: 'evidence', body: 'Social English is picked up; academic English needs explicit teaching of vocabulary, grammar and genres over years.' },
            { title: 'Silent period', tag: 'normal', body: 'New arrivals may say little for weeks or months while they listen. It is a normal stage, not a refusal; involve them nonverbally and with low-pressure speaking in pairs.' },
            { title: 'Identity', tag: 'belonging', body: 'Valuing home languages signals that the learner’s family and identity are welcome. Shaming or banning them damages belonging and participation.' },
          ],
        },
      ],
    },
    {
      id: 'teach',
      title: 'What to do in the classroom',
      lead: 'Make language visible and make talk plentiful.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Plan the language, not only the content', body: 'For each lesson, list the key vocabulary, the sentence structures the task needs ("The ___ causes ___ because ___"), and the language functions (compare, explain, justify).' },
            { title: 'Pre-teach and recycle vocabulary', body: 'Choose a small set of high-value words (Tier 2 academic words that appear across subjects, plus essential Tier 3 subject words), teach them with images and examples and revisit them over days.' },
            { title: 'Support comprehension', body: 'Use visuals, gestures, objects, diagrams, graphic organisers, simplified but not dumbed-down text, and glossaries. Read aloud while learners follow.' },
            { title: 'Plan structured talk', body: 'Learners need to *produce* language (Swain’s output hypothesis). Use paired talk with sentence frames before whole-class answers; rehearse orally before writing.' },
            { title: 'Give feedback on language', body: 'Recast errors naturally in speech; in writing, choose one or two patterns to focus on instead of marking everything.' },
            { title: 'Assess content separately from language', body: 'Allow a learner to show understanding with a diagram, a bilingual response or oral explanation, as well as in extended English writing.' },
          ],
        },
        { t: 'example', title: 'A sentence-frame ladder for explaining a science result', lines: [{ label: 'Level 1', text: 'The plant ___ (grew / did not grow).' }, { label: 'Level 2', text: 'The plant grew ___ because it had ___.' }, { label: 'Level 3', text: 'The plant in the light grew taller than the plant in the dark because light is needed for ___.' }, { label: 'Level 4', text: 'Because photosynthesis requires light, the plant kept in the dark ___, whereas ___.' }, { label: 'Fading', text: 'Provide the frame the first time; remove it when the learner uses the pattern unprompted.' }] },
      ],
    },
    {
      id: 'sg',
      title: 'Singapore context',
      lead: 'A bilingual system.',
      blocks: [
        { t: 'p', text: 'Singapore’s bilingual education policy has English as the common medium of instruction and a Mother Tongue Language (Chinese, Malay, Tamil, or another approved language) taught as a subject. Many learners speak a different language at home from either: dialects, Bahasa Indonesia, Hindi, Tagalog, Thai, or a mixture, and an increasing share of children speak mostly English at home. The English that learners hear ranges from Standard Singapore English to Singlish; most children move fluently between registers, and schools teach Standard English for academic purposes. Support for non-native speakers includes bridging programmes for new arrivals and, for learners who are weak in English, school-level literacy support. Check the current MOE pages for details, as provision changes.' },
        { t: 'callout', tone: 'tip', title: 'Singlish and Standard English', text: 'Treat Singlish as one of the learner’s languages, not as a deficiency. Teach the contrast: "In class and in writing we use this form; with friends, you can use that one", in the same way as you would teach register in any language.' },
      ],
    },
  ],
  sources: [
    'Cummins, J. (1979). Cognitive/academic language proficiency, linguistic interdependence, the optimum age question and some other matters. *Working Papers on Bilingualism*, 19.',
    'Collier, V. P. (1987). Age and rate of acquisition of second language for academic purposes. *TESOL Quarterly*, 21(4).',
    'Swain, M. (1985). Communicative competence: some roles of comprehensible input and comprehensible output in its development. In *Input in Second Language Acquisition*.',
    'García, O. & Li Wei (2014). *Translanguaging: Language, Bilingualism and Education*. Palgrave.',
    'Gibbons, P. (2015). *Scaffolding Language, Scaffolding Learning* (2nd ed.). Heinemann.',
    'Ministry of Education Singapore. Bilingual education policy and language programmes (moe.gov.sg).',
  ],
  related: ['teaching/differentiation/language-learners', 'teaching/inclusive-practice/diverse-backgrounds', 'teaching/subjects/languages', 'teaching/special-education/needs/speech-language', 'teaching/techniques/instruction/graphic-organisers'],
}

export default guide
