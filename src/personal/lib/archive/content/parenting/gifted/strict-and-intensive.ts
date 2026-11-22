import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Some of the most famous prodigies were raised under intense, even draconian regimes: hours of daily practice from early childhood, little free play, high expectations enforced firmly. Others were raised with gentle support. This guide looks honestly at what strict and intensive approaches achieve, what the research says about their costs, and where the line falls between demanding and harmful.',
  nutshell: [
    '**Intensity and structure** (lots of practice, high expectations, clear routines) can produce extraordinary skill, as the Polgár sisters showed.',
    '**Harsh control** (shaming, threats, conditional love, physical punishment) is a different thing, and the research consistently links it to anxiety, depression and worse outcomes, including academically.',
    'The best-supported style is **authoritative**: high demands *and* high warmth, with explanation and growing autonomy.',
    'Children differ: the same regime that suits a driven, interested child can break one who did not choose it.',
  ],
  sections: [
    {
      id: 'styles',
      title: 'Parenting styles: the research frame',
      blocks: [
        { t: 'table', head: ['Style (Baumrind; Maccoby & Martin)', 'Demands', 'Warmth', 'Typical outcomes'], rows: [
          ['Authoritative', 'High', 'High', 'Best overall: achievement, self-regulation, wellbeing, across many cultures'],
          ['Authoritarian', 'High', 'Low', 'Obedience but more anxiety, lower self-esteem, sometimes rebellion; academic results often worse than authoritative'],
          ['Permissive', 'Low', 'High', 'Warmth but weaker self-control and achievement'],
          ['Neglectful', 'Low', 'Low', 'Worst outcomes on most measures'],
        ] },
        { t: 'p', text: '**Tiger parenting**, popularised by Amy Chua’s *Battle Hymn of the Tiger Mother* (2011), mixes high demands with strict control. Su Yeong Kim’s eight-year study of Chinese American families (2013) found “tiger” profiles were linked to *lower* grades and *more* depression and alienation than supportive profiles. Some argue Chinese parenting (guan, training) is warmer than Western labels suggest, and context matters: the same rules feel different when a child sees them as caring.' },
      ],
    },
    {
      id: 'regimes',
      title: 'Famous intensive regimes',
      blocks: [
        { t: 'cards', cols: 2, items: [
          { tag: 'Experiment', title: 'The Polgár sisters', body: 'László Polgár believed “geniuses are made, not born” and homeschooled his three daughters in chess from about age 4, with many hours a day. Susan became a world champion, Judit the strongest female player in history, Sofia an international master. The sisters describe their childhood as happy and loving, chess was a game, and their parents were warm. Their success shows what intensive, loving training can achieve, but they were also unusually interested.' },
          { tag: 'Method', title: 'Suzuki method', body: 'Shinichi Suzuki taught violin from age 3 through listening, imitation and daily practice with heavy parental involvement, like learning a mother tongue. Structured but encouraging; produces many skilled players, and criticised for weak reading of notation early on.' },
          { tag: 'Method', title: 'Kumon', body: 'Daily worksheets with mastery before moving on; builds speed and accuracy in arithmetic. Criticised for repetition, little conceptual understanding, and boredom. Useful for fluency, not a full maths education.' },
          { tag: 'Sport', title: 'Elite sports academies', body: 'Gymnastics, tennis and football academies start children young with intense training. Produces champions, but also high rates of injury, eating disorders and, in some programmes, abuse (the USA Gymnastics scandal).' },
          { tag: 'Exam culture', title: 'Hagwon and tuition', body: 'In South Korea, Singapore and China, many children attend tuition late into the evening. Results on international tests are high, but surveys report high stress, short sleep and low life satisfaction; China banned for-profit tutoring in 2021.' },
          { tag: 'Extreme', title: 'Harsh “training” regimes', body: 'Some well-known prodigies (see Case studies) were trained through fear: Lang Lang’s father, at one point, told him to kill himself after a missed practice. He became a great pianist and also describes the damage. Survivor stories are not evidence the method works, we do not hear from those it broke.' },
        ] },
      ],
    },
    {
      id: 'works',
      title: 'What strictness can legitimately include',
      blocks: [
        { t: 'checklist', items: [
          'High expectations, said out loud: “I know you can do hard things.”',
          'Daily practice routines, held to firmly, and done together when young.',
          'Limits on screens and junk food, explained.',
          'Finishing commitments (the term, the season) before quitting.',
          'Honest feedback on quality, not empty praise.',
          'Consequences that are predictable, proportionate and calm.',
          'Saying no to some activities to protect sleep, health and focus.',
        ] },
      ],
    },
    {
      id: 'lines',
      title: 'Where the lines are',
      blocks: [
        { t: 'dodont', do: [
          'Keep love unconditional: your approval of the child must not depend on results.',
          'Explain reasons, listen, and negotiate more as they grow.',
          'Watch sleep, appetite, mood and enjoyment; pull back when they fall.',
          'Let the child own the goal by adolescence.',
          'Get help if you notice yourself shouting, threatening or hitting.',
        ], dont: [
          'Use physical punishment: it is linked to worse behaviour and mental health and is illegal in more than 60 countries.',
          'Shame, insult, or compare them with siblings and cousins.',
          'Threaten to withdraw love, food or belonging.',
          'Deprive them of sleep or food for practice.',
          'Isolate them from friends and play entirely.',
          'Hide signs of anxiety, self-harm or eating problems behind achievement.',
        ] },
        { t: 'callout', tone: 'warn', title: 'Warning signs', text: 'Persistent anxiety, stomach aches before lessons, sleep problems, perfectionism that stops them starting, self-harm, eating changes, or saying they are only worth their results. These are reasons to stop and seek help from a doctor or counsellor, whatever the achievements.' },
      ],
    },
  ],
  sources: [
    'Baumrind, D. (1971). Current patterns of parental authority. Developmental Psychology Monographs 4(1).',
    'Kim, S. Y. et al. (2013). Does “tiger parenting” exist? Parenting profiles of Chinese Americans and adolescent developmental outcomes. Asian American Journal of Psychology 4(1).',
    'Chao, R. K. (1994). Beyond parental control and authoritarian parenting style: understanding Chinese parenting through the cultural notion of training. Child Development 65(4).',
    'Gershoff, E. T. & Grogan-Kaylor, A. (2016). Spanking and child outcomes: old controversies and new meta-analyses. Journal of Family Psychology 30(4).',
    'Polgár, L. (1989). Nevelj zsenit! (Raise a genius!).',
    'Lang Lang & Ritz, D. (2008). Journey of a Thousand Miles. Spiegel & Grau.',
  ],
  related: ['parenting/gifted/case-studies', 'parenting/gifted/social-emotional'],
}

export default guide
