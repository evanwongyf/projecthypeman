import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Classroom talk can be a powerful tool for thinking, or just noise. The difference lies in the kind of talk. Learning to reason together out loud is a skill that can be taught, and teachers can shape discussion with a few simple "talk moves".',
  nutshell: [
    'Neil Mercer describes three kinds of talk: **disputational**, **cumulative** and **exploratory**. Exploratory talk is where reasoning happens.',
    'Agree **ground rules** for talk with the class.',
    '**Dialogic teaching** (Robin Alexander) uses talk to extend thinking, not just to test recall.',
    '**Talk moves** like revoicing, "say more" and "who agrees and why?" deepen discussion.',
  ],
  sections: [
    {
      id: 'kinds',
      title: 'Three kinds of talk',
      lead: 'Mercer (1995, 2000).',
      blocks: [
        {
          t: 'table',
          head: ['Kind', 'What it sounds like', 'Effect'],
          rows: [
            ['Disputational', '"No it isn’t." "Yes it is." Short assertions, competition, no reasons.', 'Little learning.'],
            ['Cumulative', '"Yeah, and…" "Good idea." Uncritical agreement and adding on.', 'Shares ideas but does not test them.'],
            ['Exploratory', '"I think… because…" "What if…?" "Why do you think that?" Reasons given, ideas challenged and built on.', 'Reasoning becomes visible and shared; groups solve problems better.'],
          ],
        },
        {
          t: 'p',
          text: 'In Mercer’s "Thinking Together" research, teaching learners ground rules for exploratory talk improved their group reasoning, and later their individual reasoning scores too.',
        },
      ],
    },
    {
      id: 'rules',
      title: 'Ground rules for talk',
      blocks: [
        {
          t: 'checklist',
          items: [
            'Everyone in the group is invited to contribute.',
            'We give reasons for our ideas.',
            'We ask for others’ reasons: "Why do you think that?"',
            'We listen and respond to each other.',
            'We can challenge ideas, respectfully.',
            'We try to reach agreement, or understand why we disagree.',
          ],
        },
      ],
    },
    {
      id: 'moves',
      title: 'Talk moves for teachers',
      lead: 'From Michaels, O’Connor and Resnick’s Accountable Talk.',
      blocks: [
        {
          t: 'table',
          head: ['Move', 'Example'],
          rows: [
            ['Wait time', 'Pause after asking, and after the answer.'],
            ['Say more', '"Can you say more about that?"'],
            ['Revoicing', '"So you’re saying that the character lies to protect her sister. Is that right?"'],
            ['Restate someone else’s reasoning', '"Who can put what Sam said in their own words?"'],
            ['Agree or disagree, and why', '"Do you agree or disagree with Priya? Why?"'],
            ['Add on', '"Who can add to that?"'],
            ['Press for reasoning', '"What’s your evidence?" "How did you get that?"'],
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Dialogic teaching',
          text: 'Robin Alexander argues for talk that is collective, reciprocal, supportive, cumulative and purposeful. A large English trial of his dialogic teaching programme found learners made around two months’ additional progress in English, maths and science (EEF, 2017).',
        },
      ],
    },
    {
      id: 'oracy',
      title: 'Oracy',
      blocks: [
        {
          t: 'p',
          text: 'Oracy means learning **to** talk as well as learning **through** talk. The Oracy Framework (Voice 21 and University of Cambridge) sets out four strands: **physical** (voice, body language), **linguistic** (vocabulary, structure), **cognitive** (reasoning, content) and **social and emotional** (listening, turn-taking, confidence). Teaching these explicitly helps learners who get fewer chances to practise formal talk at home.',
        },
        {
          t: 'p',
          text: 'Simple structures for everyone: [think, pair, share](@teaching/techniques/active-learning/think-pair-share), [Socratic seminars](@teaching/techniques/questioning/socratic), talk roles (builder, challenger, summariser), and sentence stems on the wall.',
        },
      ],
    },
  ],
  sources: [
    'Mercer, N. (2000). *Words and minds: How we use language to think together*. Routledge.',
    'Alexander, R. (2020). *A dialogic teaching companion*. Routledge.',
    'Michaels, S., O’Connor, C., & Resnick, L. B. (2008). Deliberative discourse idealized and realized: Accountable talk in the classroom and in civic life. *Studies in Philosophy and Education, 27*(4), 283–297.',
    'Education Endowment Foundation. (2017). *Dialogic teaching: Evaluation report and executive summary*.',
  ],
  related: ['teaching/techniques/questioning/socratic', 'teaching/techniques/active-learning/cooperative', 'teaching/theories/social-constructivism'],
}

export default guide
