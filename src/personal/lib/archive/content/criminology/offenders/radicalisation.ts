import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'After major attacks, the first public question is usually “what kind of person does this?”. Decades of research give an unsatisfying but important answer: there is no reliable terrorist profile. Instead researchers describe processes, grievances, identity, belonging, ideology and opportunity, through which a small number of people move from extreme beliefs to violent action, and through which many also move back out.',
  nutshell: [
    'There is **no single psychological or demographic profile** of a terrorist; most are not mentally ill, though rates are higher among lone actors.',
    '**Radical beliefs and violent action are different things**: most people with extreme views never act on them.',
    'Models such as Moghaddam’s **staircase** and McCauley and Moskalenko’s **two pyramids** describe a narrowing funnel from grievance to violence.',
    '**Social networks**, a search for **significance**, and a sense of **injustice** recur across studies.',
    '**Disengagement** (stopping violence) and **deradicalisation** (changing beliefs) are distinct; programmes often aim for the first.',
  ],
  sections: [
    {
      id: 'no-profile',
      title: 'Why there is no terrorist profile',
      blocks: [
        { t: 'p', text: 'Early research looked for a “terrorist personality”. It did not find one. John Horgan and others concluded that people involved in terrorism are, psychologically, mostly unremarkable, and that their backgrounds vary widely in education, wealth and religiosity. The search shifted from *who* to *how*: the pathways and group dynamics that draw people in.' },
        {
          t: 'callout',
          tone: 'note',
          title: 'Mental health: a nuanced picture',
          text: 'Group-based terrorists rarely show higher rates of mental disorder than the general population. Lone-actor terrorists, however, show substantially higher rates in some studies (Corner and Gill, 2015). Mental illness is better seen as one possible contributing factor among many, not an explanation.',
        },
        { t: 'callout', tone: 'warn', title: 'Why profiles do harm', text: 'Because terrorism is extremely rare, any profile broad enough to include most attackers would also flag huge numbers of innocent people, the [base-rate problem](@criminology/methods/reading-crime-research). Profiling by religion or ethnicity also alienates the communities whose cooperation is most valuable for prevention.' },
      ],
    },
    {
      id: 'staircase',
      title: 'Moghaddam’s staircase to terrorism',
      blocks: [
        {
          t: 'levels',
          caption: 'Fathali Moghaddam (2005). Each floor has fewer people on it; most never climb beyond the lower floors.',
          items: [
            { name: 'Ground floor: perceived injustice', body: 'Feelings of unfair treatment or relative deprivation, widely shared in a population.' },
            { name: 'First floor: seeking remedies', body: 'People look for legitimate ways to improve their situation. If they see none, some climb further.' },
            { name: 'Second floor: displaced aggression', body: 'Frustration is directed at an outside enemy, often encouraged by leaders.' },
            { name: 'Third floor: moral engagement', body: 'An extremist group’s morality comes to seem justified; mainstream morality is rejected.' },
            { name: 'Fourth floor: us-versus-them thinking', body: 'Commitment to the group solidifies; the world is seen in rigid categories; leaving becomes hard.' },
            { name: 'Fifth floor: the act', body: 'Psychological barriers to violence are overcome through [moral disengagement](@criminology/criminal-mind/neutralisation-and-disengagement) and dehumanisation.' },
          ],
        },
        { t: 'p', text: 'The staircase is a metaphor rather than a tested causal model, but it makes a practical point: the most effective prevention happens on the lower floors, by addressing grievances and keeping legitimate paths open.' },
      ],
    },
    {
      id: 'pyramids',
      title: 'Two pyramids: opinion and action',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Opinion pyramid', body: 'From the neutral base, through sympathisers who agree with the cause, to justifiers who believe violence is warranted, to a small apex who feel a personal moral obligation.', tag: 'beliefs' },
            { title: 'Action pyramid', body: 'From inert people at the base, through activists (legal action), radicals (illegal action), to a very small group of terrorists who target civilians.', tag: 'behaviour' },
          ],
        },
        { t: 'p', text: 'Clark McCauley and Sophia Moskalenko separated the pyramids because survey data show many people hold radical opinions without ever acting, while some people who act have surprisingly thin ideological knowledge. Prevention and counter-terrorism therefore need different tools for beliefs and for behaviour.' },
      ],
    },
    {
      id: 'drivers',
      title: 'Recurring drivers',
      blocks: [
        {
          t: 'table',
          head: ['Driver', 'What it means', 'Key researchers'],
          rows: [
            ['Social networks', 'People are usually drawn in through friends, family or online communities rather than recruited cold', 'Sageman'],
            ['Quest for significance', 'A need to matter, triggered by humiliation or loss, that an ideology promises to satisfy', 'Kruglanski'],
            ['Identity and belonging', 'Uncertainty about who one is makes groups with clear identities attractive', 'Hogg'],
            ['Grievance and injustice', 'Perceived discrimination, foreign policy, or local injustices framed by an ideology', 'Moghaddam; McCauley & Moskalenko'],
            ['Opportunity', 'Access to a group, materials or a setting; without it, intent rarely becomes action', 'Situational researchers'],
          ],
        },
      ],
    },
    {
      id: 'leaving',
      title: 'Ways out: disengagement and rehabilitation',
      blocks: [
        { t: 'p', text: 'People leave extremist groups for many reasons: disillusionment with leaders, burnout, the pull of family or a career, and the gap between the ideology and the reality of violence. Programmes try to support these exits.' },
        {
          t: 'list',
          items: [
            '**Singapore’s Religious Rehabilitation Group (RRG)**, set up in 2003 by Islamic scholars and teachers, counsels detainees held over links to the Jemaah Islamiyah network, alongside psychological counselling and support for their families. Officials report low rates of re-detention among those released, though independent outcome data are limited.',
            '**The UK’s Channel programme** offers voluntary support to people referred as at risk of being drawn into terrorism. It is part of the wider, often debated, Prevent strategy.',
            '**Evaluation is hard**: terrorism is rare, so recidivism is low and difficult to measure, and programmes vary widely. Reviews describe the evidence base as promising but thin.',
          ],
        },
      ],
    },
  ],
  sources: [
    'Horgan, J. (2014). *The Psychology of Terrorism* (2nd ed.). Routledge.',
    'Moghaddam, F. M. (2005). The staircase to terrorism: A psychological exploration. *American Psychologist*, 60(2), 161–169.',
    'McCauley, C., & Moskalenko, S. (2017). Understanding political radicalization: The two-pyramids model. *American Psychologist*, 72(3), 205–216.',
    'Sageman, M. (2004). *Understanding Terror Networks*. University of Pennsylvania Press.',
    'Kruglanski, A. W., et al. (2014). The psychology of radicalization and deradicalization. *Political Psychology*, 35(S1), 69–93.',
    'Corner, E., & Gill, P. (2015). A false dichotomy? Mental illness and lone-actor terrorism. *Law and Human Behavior*, 39(1), 23–34.',
  ],
  related: ['criminology/criminal-mind/neutralisation-and-disengagement', 'criminology/offenders/offender-types', 'criminology/justice/restorative-and-singapore'],
}

export default guide
