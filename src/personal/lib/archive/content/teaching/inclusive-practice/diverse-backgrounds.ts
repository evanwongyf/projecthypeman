import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Every class contains learners from different families, languages, faiths, income levels and cultures. Teaching them well does not mean knowing every culture; it means treating background as a source of strength, checking your own assumptions, making the unwritten rules of school visible, and making sure every learner can see themselves in the learning. This guide covers asset-based versus deficit thinking, funds of knowledge, teacher expectations and bias, belonging, and the hidden curriculum, with a practical set of habits.',
  nutshell: [
    '**Asset-based** teaching starts from what learners and families already know and can do; **deficit** thinking starts from what they lack, and predicts lower expectations.',
    '**Funds of knowledge** (Moll et al., 1992): households hold rich, teachable knowledge (trade skills, languages, caring, cooking, money management) that teachers can connect to the curriculum.',
    '**Expectations matter**, modestly and unevenly: teacher beliefs shape opportunities, grouping and feedback, and the effects are largest for learners from stigmatised groups.',
    '**Belonging** is a precondition: small interventions that affirm values or address belonging uncertainty have produced lasting gains in some trials, but effects are context-dependent.',
    'Make the **hidden curriculum** visible: how to ask for help, what "show your working" means, how to take notes. Do not assume it was learned at home.',
  ],
  sections: [
    {
      id: 'frames',
      title: 'Two ways of seeing a learner',
      lead: 'The frame changes the teaching.',
      blocks: [
        {
          t: 'table',
          head: ['', 'Deficit frame', 'Asset frame'],
          rows: [
            ['Home language', '"Her English is poor"', '"She is fluent in two languages and is adding a third"'],
            ['Family circumstances', '"His parents do not care about school"', '"His parents work evening shifts; which times and channels suit them?"'],
            ['Background knowledge', '"They have no experience of books"', '"They have a lot of oral storytelling, which links to narrative writing"'],
            ['Behaviour', '"Defiant"', '"What is he communicating, and what does he need?"'],
            ['Typical response', 'Lower the demand; remediate the learner', 'Keep the demand high; adapt the teaching; draw on strengths'],
          ],
          caption: 'The point is not to deny real difficulties. It is to locate the barrier in the interaction between the learner and the teaching, where the teacher can act.',
        },
        { t: 'p', text: 'Deficit thinking is not malicious; it usually comes from noticing what is different from the teacher’s own experience. Its cost is that it hides capability, narrows the curriculum offered and invites unequal treatment. The asset approach is not "positive thinking": it is a practical stance that asks, for each barrier, what the learner can already do that might be a way in.' },
      ],
    },
    {
      id: 'funds',
      title: 'Funds of knowledge',
      lead: 'Learning from households.',
      blocks: [
        { t: 'p', text: 'Moll, Amanti, Neff and González (1992) studied working-class Mexican-American households in Arizona, and found rich bodies of knowledge about construction, agriculture, medicine, repairs, trade and economics. Teachers visited homes as learners, not inspectors, and then built units on those topics. The idea generalises: a pupil whose family runs a hawker stall knows costing, queuing, customer service and fractions-in-practice; a pupil who minds younger siblings knows planning and negotiation; a pupil who speaks Tamil, Malay, Mandarin or Hokkien at home has a literacy and a repertoire of stories.' },
        {
          t: 'steps',
          items: [
            { title: 'Ask, do not assume', body: 'A short, optional "About me" activity or family conversation prompt at the start of the year: what do you know how to do, who do you learn from, which languages do you use?' },
            { title: 'Look for curriculum links', body: 'Where does that knowledge connect to what you teach: ratios in cooking, area in a family shop, persuasive writing about a local issue?' },
            { title: 'Invite, do not exploit', body: 'Never ask a learner to represent their culture or speak for a group. Offer choices; let learners decide what to share.' },
            { title: 'Honour the language', body: 'Let learners use home languages for thinking and discussion, then bridge into the language of instruction (see the multilingual guide).' },
          ],
        },
      ],
    },
    {
      id: 'expect',
      title: 'Expectations, bias and belonging',
      lead: 'What teachers believe can shape what happens.',
      blocks: [
        { t: 'p', text: 'Rosenthal and Jacobson’s 1968 "Pygmalion" study claimed that teacher expectations raised pupils’ IQ; it was heavily criticised and its large effects did not replicate. The later, more careful literature (Jussim and Harber, 2005) finds that self-fulfilling prophecies in classrooms exist but are usually **small** (a few percent of variance), more important for already marginalised groups, and that teachers’ perceptions are mostly accurate but also biased by pupil background. The practical risk lies in the small daily decisions: who is asked a hard question, who is given extra time, who gets the benefit of the doubt, which groups are formed.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Monitor who you call on', tag: 'practice', body: 'A simple tally for one lesson, or a colleague’s observation, shows who is asked high-level questions, who is asked recall questions and who is never asked.' },
            { title: 'Wait time', tag: 'practice', body: 'Waiting 3 seconds (Rowe) improves the length and quality of answers; teachers give less wait time to learners they expect to be weak.' },
            { title: 'Name and grade blind', tag: 'assessment', body: 'Where possible, mark extended writing anonymously, and moderate with a colleague. Studies of anonymous versus named marking find that labels affect marks.' },
            { title: 'Belonging', tag: 'climate', body: 'Learners from groups who are stereotyped may read ambiguous feedback as bias. "Wise feedback" (high standards and an explicit assurance you believe they can meet them; Yeager et al., 2014) improved revision rates in a field experiment.' },
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Be careful with big claims', text: 'Short "growth mindset" or "values affirmation" exercises show positive effects in some large trials, particularly for lower-achieving or minoritised learners in supportive schools, and little or none in others. They are not a substitute for good teaching, and effects are modest on average (see the motivation evidence guide).' },
      ],
    },
    {
      id: 'hidden',
      title: 'The hidden curriculum',
      lead: 'The unwritten rules.',
      blocks: [
        { t: 'p', text: 'Schools run on unspoken assumptions: how to ask for help politely, that it is acceptable to disagree with the teacher, how to approach a long essay, that "revise" means self-test rather than reread, what a "discussion" is, how to apply for a scholarship. Learners whose families have experience of the system learn these informally; others may not. Bourdieu called the unequal distribution of this knowledge **cultural capital**. The remedy is to teach the rules explicitly, to everyone: not as a favour to some, but as part of the curriculum.' },
        {
          t: 'checklist',
          items: [
            'Do I explain what a good answer looks like, with a model, before I ask for one?',
            'Have I taught how to take notes, how to revise and how to ask for help, rather than assuming they are known?',
            'Are my examples, names and contexts drawn from a range of lives, not one?',
            'Do forms, letters and parent meetings work for families who work shifts, speak other languages or had a poor experience of school themselves?',
            'Do I know my learners’ circumstances well enough to avoid public embarrassment (fees, trips, devices, "what did you do in the holidays?")?',
            'Do all learners have access to the enrichment, trips, clubs and leadership roles on offer?',
          ],
        },
        { t: 'p', text: 'In Singapore’s multiethnic classrooms, the CMIO framework (Chinese, Malay, Indian, Others) is used in policy, but learners’ real backgrounds cut across it: language at home, religion, income, nationality, family structure and migration history differ widely within every category. Good practice avoids assuming that a learner’s race tells you their home language, diet, religion or expectations.' },
      ],
    },
  ],
  sources: [
    'Moll, L. C., Amanti, C., Neff, D. & González, N. (1992). Funds of knowledge for teaching. *Theory into Practice*, 31(2), 132–141.',
    'Jussim, L. & Harber, K. D. (2005). Teacher expectations and self-fulfilling prophecies. *Personality and Social Psychology Review*, 9(2).',
    'Yeager, D. S. et al. (2014). Breaking the cycle of mistrust: wise interventions to provide critical feedback across the racial divide. *Journal of Experimental Psychology: General*, 143(2).',
    'Ladson-Billings, G. (1995). Toward a theory of culturally relevant pedagogy. *American Educational Research Journal*, 32(3).',
    'Bourdieu, P. (1986). The forms of capital. In J. Richardson (Ed.), *Handbook of Theory and Research for the Sociology of Education*.',
    'Rowe, M. B. (1986). Wait time: slowing down may be a way of speeding up. *Journal of Teacher Education*, 37(1).',
  ],
  related: ['teaching/guides/classroom/culturally-responsive', 'teaching/equity/motivation-equity', 'teaching/inclusive-practice/multilingual-learners', 'teaching/equity/equity-in-practice', 'teaching/guides/classroom/families'],
}

export default guide
