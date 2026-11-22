import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Schools do not only teach subjects; they form people, and much of what teachers do every day (settling disputes, judging fairness, explaining why a rule exists) is moral education whether or not it is called that. Three influential theories describe how moral thinking develops: Lawrence Kohlberg’s stages of moral reasoning, Carol Gilligan’s ethic of care, and Jonathan Haidt’s moral foundations. This page sets out each, what the research supports, and what it suggests for building moral reasoning rather than only enforcing rules.',
  nutshell: [
    '**Kohlberg** (1958 onwards) proposed **three levels** and **six stages** of moral reasoning, from avoiding punishment to acting on universal principles; the level of reasoning matters, not the answer.',
    '**Gilligan** (1982) argued that Kohlberg’s scheme privileged **justice**, and that many people reason from an **ethic of care** that stresses relationships and responsibility.',
    '**Haidt** (2012) argues that moral judgement is mostly **intuitive and emotional**, built on several **moral foundations** (care, fairness, loyalty, authority, sanctity, liberty), with reasoning often coming afterward.',
    'Moral reasoning grows through **discussion of dilemmas**, **role-taking**, **fair and just school communities** and **good examples**.',
    'Good intentions are not enough: **character** needs habits, practice and a school climate where **doing right** is the norm.',
  ],
  sections: [
    {
      id: 'kohlberg',
      title: 'Kohlberg: stages of moral reasoning',
      blocks: [
        { t: 'p', text: 'Lawrence Kohlberg, building on Piaget, presented people with moral dilemmas, such as the famous Heinz dilemma (should a man steal a drug he cannot afford to save his dying wife?), and looked not at what they decided but at how they justified it. From the pattern of reasoning he proposed six stages in three levels.' },
        {
          t: 'levels',
          caption: 'Kohlberg’s levels and stages, from lowest to highest. Most adults reach level 2.',
          items: [
            { name: 'Level 1: Pre-conventional', body: 'Stage 1: obey to avoid punishment. Stage 2: act for your own interest and fair exchange (“what is in it for me?”). Typical of young children.' },
            { name: 'Level 2: Conventional', body: 'Stage 3: be a good person in the eyes of others, loyal and caring. Stage 4: obey laws and social order, do your duty. Typical of adolescents and most adults.' },
            { name: 'Level 3: Post-conventional', body: 'Stage 5: laws are social contracts that can be changed for the greater good. Stage 6: act on universal ethical principles of justice and human dignity, even against the law. Reached by few.' },
          ],
        },
        {
          t: 'table',
          head: ['Heinz dilemma response', 'Reasoning', 'Stage'],
          rows: [
            ['“He should not steal; he will go to jail.”', 'Fear of punishment', '1'],
            ['“He should steal it; his wife might do the same for him.”', 'Exchange of favours', '2'],
            ['“He should steal it; a good husband would.”', 'Being a good person in others’ eyes', '3'],
            ['“He should not; the law is the law, or society would fall apart.”', 'Duty and law and order', '4'],
            ['“He should steal it; a life is worth more than property.”', 'Principles above the law', '5 to 6'],
          ],
          caption: 'The stage depends on the reasoning, not on the conclusion.',
        },
      ],
    },
    {
      id: 'gilligan',
      title: 'Gilligan: an ethic of care',
      blocks: [
        { t: 'p', text: 'Carol Gilligan, who had worked with Kohlberg, argued in *In a Different Voice* (1982) that the scheme was based on boys and men and put justice and rights at the top. Many women, and many men, she said, reason from an ethic of care: attention to relationships, responsibility to others, and context. Later research found that differences between males and females on Kohlberg’s measures are small, but the ethic of care has become an important complement to justice in thinking about morality and teaching.' },
        {
          t: 'table',
          head: ['', 'Ethic of justice', 'Ethic of care'],
          rows: [
            ['Central question', 'What is fair? What are the rights?', 'Who is hurt? What do the relationships need?'],
            ['Approach', 'Principles, rules, impartiality', 'Context, particulars, responsiveness'],
            ['In a school dispute', 'Establish what happened and apply the rule', 'Repair the relationship and attend to each person’s needs'],
          ],
          caption: 'Most good judgement uses both. Nel Noddings developed an educational philosophy of care.',
        },
      ],
    },
    {
      id: 'haidt',
      title: 'Haidt: moral intuitions',
      blocks: [
        { t: 'p', text: 'Jonathan Haidt’s social intuitionist model argues that moral judgements are usually quick, emotional intuitions, and that reasoning is mostly used afterwards to justify them: “the emotional dog and its rational tail”. His moral foundations theory proposes several innate foundations, which cultures and individuals weigh differently.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Foundation', title: 'Care and harm', body: 'Concern for others’ suffering.' },
            { tag: 'Foundation', title: 'Fairness and cheating', body: 'Reciprocity and justice.' },
            { tag: 'Foundation', title: 'Loyalty and betrayal', body: 'Commitment to a group.' },
            { tag: 'Foundation', title: 'Authority and subversion', body: 'Respect for legitimate hierarchy and tradition.' },
            { tag: 'Foundation', title: 'Sanctity and degradation', body: 'The sense of the sacred and of purity.' },
            { tag: 'Foundation', title: 'Liberty and oppression', body: 'Concern about domination and the freedom of individuals.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'What this means for teaching', text: 'Telling students what is right rarely changes what they feel. Moral growth needs experiences that shape intuitions (belonging to a caring community, seeing good modelled), alongside discussion that develops reasoning.' },
      ],
    },
    {
      id: 'practice',
      title: 'Building moral reasoning in school',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Discuss real dilemmas', body: 'Use stories, news and class events. Ask “what would you do and why?” and let students hear reasoning one stage above their own (Blatt and Kohlberg found this raises reasoning).' },
            { title: 'Practise perspective-taking', body: 'Role-play, literature, drama: how would each person feel?' },
            { title: 'Run a just community', body: 'Involve students in making and reviewing class rules. Fair processes teach fairness (Kohlberg’s “just community” schools).' },
            { title: 'Model it', body: 'Be fair, admit mistakes, treat everyone with dignity. Students notice what teachers do far more than what they say.' },
            { title: 'Build habits of care', body: 'Service, buddy systems, helping younger children. Practice shapes character.' },
            { title: 'Connect reasoning and action', body: 'Knowing what is right does not guarantee doing it. Talk about courage, peer pressure and what makes it hard.' },
          ],
        },
        { t: 'links', items: [{ path: 'teaching/taxonomies/affective', note: 'The affective domain of Krathwohl' }, { path: 'teaching/singapore/conflict-resolution', note: 'Resolving conflict' }, { path: 'teaching/theories/social-learning', note: 'Learning from models' }] },
      ],
    },
  ],
  sources: [
    'Kohlberg, L. (1981). Essays on Moral Development, Vol. 1: The Philosophy of Moral Development. Harper and Row.',
    'Gilligan, C. (1982). In a Different Voice. Harvard University Press.',
    'Haidt, J. (2012). The Righteous Mind: Why Good People Are Divided by Politics and Religion. Pantheon.',
    'Noddings, N. (2013). Caring: A Relational Approach to Ethics and Moral Education (2nd ed.). University of California Press.',
  ],
  related: ['teaching/theories/psychosocial-development', 'teaching/taxonomies/affective', 'teaching/theories/social-learning'],
}

export default guide
