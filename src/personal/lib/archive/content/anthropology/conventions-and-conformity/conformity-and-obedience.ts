import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Why do people go along with others, even when they privately disagree? Social psychology’s classic experiments (Sherif, Asch, Milgram, Zimbardo) made conformity and obedience vivid, and they are among the most cited studies in the social sciences. They are also among the most reinterpreted. This guide describes what each study did, what it found, what later work says, and what we can safely conclude: that social influence is powerful, that it depends on information, identity and context, and that people are not simply sheep.',
  nutshell: [
    '**Sherif** (1935): in an ambiguous task, people’s judgements converge on a **shared norm**.',
    '**Asch** (1951): in a clear task, about **a third of answers** went along with a unanimous wrong majority; a **single ally** greatly reduced conformity.',
    '**Milgram** (1963): about **two thirds** of participants in the baseline study gave what they thought were the strongest shocks. Rates depended heavily on setting and on the experimenter’s presence.',
    '**Zimbardo** (1971): the Stanford Prison Experiment is **heavily criticised**. Its conclusions about “ordinary people turning cruel” are not supported.',
    '**Cialdini’s** principles of influence, and the **social proof** found in everyday studies, show that people copy what others do, especially people like them.',
  ],
  sections: [
    {
      id: 'sherif',
      title: 'Sherif: building a norm',
      blocks: [
        { t: 'p', text: 'Muzafer Sherif (1935) used the autokinetic effect: a still point of light in a dark room appears to move. Participants individually estimated how far it moved. When they made estimates in a group, the estimates converged on a group norm, which persisted when people were later tested alone. This shows informational influence: when you are uncertain, you look to others for information about what is true.' },
      ],
    },
    {
      id: 'asch',
      title: 'Asch: going along with a clear error',
      blocks: [
        { t: 'p', text: 'Solomon Asch (1951) asked students to judge which of three lines matched a standard line, an easy task with an obvious answer. Each participant sat with several confederates who gave wrong answers on certain trials. The participants’ own eyes told them the majority was wrong.' },
        {
          t: 'bars',
          title: 'Wrong answers in Asch’s line judgement task (approximate)',
          items: [
            { label: 'Alone (control)', value: 0.7 },
            { label: 'Unanimous majority of confederates', value: 36.8 },
            { label: 'Majority, with one dissenting ally', value: 5.5 },
          ],
          unit: '% of critical trials',
          caption: 'Approximate figures commonly cited from Asch’s experiments. About three quarters of participants conformed at least once, and about a quarter never did.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Why', title: 'Two kinds of pressure', body: 'Informational influence (maybe they know something I do not) and normative influence (I do not want to stand out). Participants described both.' },
            { tag: 'Ally', title: 'One ally changes everything', body: 'A single dissenter reduced conformity sharply, even if the ally gave a different wrong answer. Breaking unanimity helps people trust their own eyes.' },
            { tag: 'Privacy', title: 'Private responses', body: 'When people answered in writing, privately, conformity fell, suggesting a large part of it was public compliance.' },
            { tag: 'Culture', title: 'Variation', body: 'A meta-analysis (Bond and Smith, 1996) found conformity to be higher in more collectivistic cultures and lower in the US in recent decades.' },
          ],
        },
      ],
    },
    {
      id: 'milgram',
      title: 'Milgram: obedience to authority',
      blocks: [
        { t: 'p', text: 'Stanley Milgram (1963) told volunteers they were part of a study of learning. An experimenter in a lab coat told them to deliver increasingly severe electric shocks to a “learner” (an actor) whenever he gave a wrong answer, up to a labelled 450 volts. No shocks were actually given. In the baseline version, 65 per cent (26 of 40) went to the end. Many protested and showed distress.' },
        {
          t: 'bars',
          title: 'Share who delivered the maximum shock in some of Milgram’s variations (approximate)',
          items: [
            { label: 'Baseline: learner heard, not seen', value: 65 },
            { label: 'Learner in the same room', value: 40 },
            { label: 'Participant presses the learner’s hand to the plate', value: 30 },
            { label: 'Experimenter gives orders by phone', value: 20.5 },
            { label: 'Two peers refuse to continue', value: 10 },
          ],
          unit: '% obeying to 450 V',
          caption: 'Approximate results from Milgram’s own reports. The conditions mattered a great deal: closeness to the victim and to the authority, and the example of others.',
        },
        {
          t: 'table',
          head: ['Question', 'What later work suggests'],
          rows: [
            ['Was it blind obedience?', 'Alex Haslam and Stephen Reicher argued that participants were engaged followers who identified with the scientific cause. The experimenter’s “prods” that appealed to the study’s importance worked more than the direct order “you have no choice”, which most participants refused'],
            ['Did participants believe it?', 'Gina Perry’s archival work (2012) and others found that many participants had doubts, and that the procedure varied from the published account'],
            ['Is it relevant to real atrocities?', 'It shows how situations push people, but real perpetrators often act with conviction and ideology, not only under orders'],
            ['Could it be repeated?', 'Modern ethics rules prevent it. Jerry Burger (2009) replicated up to the 150-volt point with similar rates, and a Polish study (2017) found similar results in a partial replication'],
          ],
        },
      ],
    },
    {
      id: 'zimbardo',
      title: 'Zimbardo: the Stanford Prison Experiment',
      blocks: [
        { t: 'p', text: 'In 1971 Philip Zimbardo had volunteers play guards and prisoners in a simulated prison. The study was stopped after six days because guards became abusive and prisoners distressed. It became a famous demonstration that situations can turn good people cruel. Later investigation weakened that conclusion.' },
        {
          t: 'list',
          items: [
            'Recordings and archives revealed that the guards had been coached by the experimenters to be tough (Le Texier, 2019).',
            'Participants knew what was expected: demand characteristics may explain behaviour better than hidden “evil”.',
            'A replication attempt, the BBC Prison Study (Reicher and Haslam, 2002), did not reproduce the abuse; instead, guards were reluctant to use authority and prisoners organised.',
            'Many scientists now consider the study a demonstration of leaders shaping behaviour, not of an inevitable slide into cruelty.',
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Treat famous studies with caution', text: 'Textbook accounts often leave out critiques. Use these studies as illustrations of influence, but check what later research says. In psychology’s replication crisis many headline findings did not hold up in the form first reported.' },
      ],
    },
    {
      id: 'proof',
      title: 'Social proof in everyday life',
      blocks: [
        {
          t: 'table',
          head: ['Principle (Cialdini)', 'Idea', 'Example'],
          rows: [
            ['Reciprocity', 'We feel obliged to return favours', 'Free samples increase purchases'],
            ['Commitment and consistency', 'We act to match our past statements and actions', 'A small request makes a larger one more likely to be accepted'],
            ['Social proof', 'We use what others do as a guide, especially when uncertain', 'Laugh tracks; “bestseller” labels; busy restaurants'],
            ['Authority', 'We defer to apparent experts', 'Uniforms, titles'],
            ['Liking', 'We say yes to people we like', 'Friendly salespeople; similarity'],
            ['Scarcity', 'Limited availability raises desire', '“Only two left”'],
          ],
        },
        { t: 'p', text: 'In a hotel study (Goldstein, Cialdini and Griskevicius, 2008), cards in rooms that said most guests reused their towels raised reuse from about 35 per cent (with a standard environmental message) to about 44 per cent, more than appeals to the environment alone. Messages that matched the guest’s own situation (“guests who stayed in this room”) worked better still. Social proof works best when the reference group is like you.' },
        {
          t: 'callout',
          tone: 'fact',
          title: 'The bystander effect',
          text: 'In 1968, John Darley and Bibb Latané found that people were less likely to help a person apparently having a seizure when more others were present: about 85 per cent helped when alone, 62 per cent with one other bystander present, and 31 per cent with four others present. Responsibility is diffused, and people look to others to judge whether it is an emergency. The famous “38 witnesses” account of Kitty Genovese’s murder (1964) was greatly exaggerated by the press. Later research, including with CCTV footage, finds that people often do help in real emergencies, especially when the danger is clear.',
        },
        { t: 'links', items: [{ path: 'anthropology/conventions-and-conformity/herd-behaviour', note: 'Next: herd behaviour' }, { path: 'forensics/reliability/cognitive-bias', note: 'Bias and pressure in expert judgement' }] },
      ],
    },
  ],
  sources: [
    'Sherif, M. (1935). A study of some social factors in perception. Archives of Psychology.',
    'Asch, S. E. (1956). Studies of independence and conformity. Psychological Monographs.',
    'Milgram, S. (1963). Behavioral study of obedience. Journal of Abnormal and Social Psychology.',
    'Haslam, S. A., Reicher, S. D., and Birney, M. E. (2014). Nothing by mere authority: evidence that in an experimental analogue of the Milgram paradigm participants are motivated not by orders but by appeals to science. Journal of Social Issues.',
    'Le Texier, T. (2019). Debunking the Stanford Prison Experiment. American Psychologist.',
    'Goldstein, N. J., Cialdini, R. B., and Griskevicius, V. (2008). A room with a viewpoint. Journal of Consumer Research.',
    'Darley, J. M., and Latané, B. (1968). Bystander intervention in emergencies: diffusion of responsibility. Journal of Personality and Social Psychology.',
    'Bond, R., and Smith, P. B. (1996). Culture and conformity: a meta-analysis of studies using Asch’s line judgment task. Psychological Bulletin.',
  ],
  related: ['anthropology/conventions-and-conformity/herd-behaviour', 'anthropology/conventions-and-conformity/norms-taboos-and-etiquette', 'forensics/reliability/cognitive-bias'],
}

export default guide
