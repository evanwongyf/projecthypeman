import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Modern criminology grew out of two very different answers to the question “why do people commit crime?”. The classical answer said: because they choose to, so make the choice less attractive. The positivist answer said: because something, in their bodies, minds or surroundings, pushes them, so find and measure it. Most of today’s criminology is a negotiation between those two ideas.',
  nutshell: [
    '**Classical school (late 1700s)**: people are rational; punishment should be certain, swift and proportionate. Key figures: Cesare Beccaria and Jeremy Bentham.',
    '**Positivist school (late 1800s)**: crime has causes that science can measure. Key figure: Cesare Lombroso, whose specific theory was wrong.',
    'Lombroso’s “born criminal” failed because of **no proper control group, circular reasoning and confusing poverty and illness with innate criminality**.',
    'The 20th century added **sociological** explanations (neighbourhoods, inequality, peers) and **critical** questions about who makes the rules.',
    'Today criminology is **interdisciplinary**: sociology, psychology, law, economics, biology and data science all contribute.',
  ],
  sections: [
    {
      id: 'definition',
      title: 'What counts as crime?',
      blocks: [
        { t: 'p', text: 'A crime, legally, is an act (or failure to act) that the law forbids and attaches a punishment to. That sounds tidy, but it means the boundary moves: homosexuality, blasphemy and some forms of drug use have been crimes in some places and eras and not in others. Criminologists therefore study both **behaviour** (harmful acts) and **criminalisation** (how and why certain acts are labelled crimes).' },
        {
          t: 'terms',
          items: [
            { term: 'Mala in se', def: 'Acts seen as wrong in themselves almost everywhere, murder, rape, theft.' },
            { term: 'Mala prohibita', def: 'Acts wrong because the law says so, licensing offences, many regulatory and traffic offences.' },
            { term: 'Deviance', def: 'Behaviour that breaks social norms; it may or may not be illegal.' },
            { term: 'Criminology vs criminal justice', def: 'Criminology asks why crime happens and what it means; criminal justice studies the police, courts and prisons that respond to it. The fields overlap heavily.' },
          ],
        },
      ],
    },
    {
      id: 'classical',
      title: 'The classical school: punishment that makes sense',
      blocks: [
        { t: 'p', text: 'In 1764 the Italian thinker **Cesare Beccaria** published *On Crimes and Punishments*, attacking the torture, secret trials and arbitrary death sentences common in Europe at the time. His argument was Enlightenment logic applied to justice: people weigh pleasure against pain, so the law should make offending a bad bargain, no more and no less than needed.' },
        {
          t: 'list',
          items: [
            'Punishment should be **proportionate** to the harm done.',
            '**Certainty and promptness** deter better than cruelty.',
            'Laws should be **written, public and clear**, applied equally to all.',
            'Torture and (Beccaria argued) the death penalty are both unjust and ineffective.',
          ],
        },
        { t: 'quote', text: 'It is better to prevent crimes than to punish them.', by: 'Cesare Beccaria, On Crimes and Punishments (1764)' },
        { t: 'callout', tone: 'note', title: 'Why it still matters', text: 'Beccaria’s idea that certainty beats severity has held up remarkably well: modern deterrence research finds the chance of being caught matters far more than the length of the sentence. See [deterrence](@criminology/prevention/victims-and-prevention).' },
      ],
    },
    {
      id: 'positivist',
      title: 'The positivist turn, and why Lombroso was wrong',
      blocks: [
        { t: 'p', text: 'A century later the Italian physician **Cesare Lombroso** (*L’uomo delinquente*, 1876) claimed that many offenders were “born criminals”, evolutionary throwbacks (*atavists*) identifiable by physical “stigmata” such as sloping foreheads, large jaws or unusual ears. His work mattered historically because it insisted crime could be studied scientifically. His conclusions, however, collapsed.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'No proper comparison group', body: 'He measured prisoners and asylum patients but did not systematically compare them with similar non-offenders. When Charles Goring did that in England (*The English Convict*, 1913), the supposed physical differences largely vanished.', tag: 'method' },
            { title: 'Confounding', body: 'Poverty, malnutrition, illness and disability affect appearance, and also affect who ends up in prison. Lombroso read the effects of hardship as signs of innate criminality.', tag: 'method' },
            { title: 'Circular reasoning', body: 'A stigma counted as evidence because criminals had it; criminals were identified partly by having it.', tag: 'logic' },
            { title: 'Harmful legacy', body: 'Biological determinism fed into eugenics and racist “criminal type” thinking. It is a warning about how bad science can be used to justify discrimination.', tag: 'ethics' },
          ],
        },
        { t: 'callout', tone: 'myth', title: 'Myth: you can spot a criminal by their face', text: 'Modern studies that claim to “predict criminality from faces” using machine learning repeat Lombroso’s mistakes: the training photos usually differ in source, expression or image quality, so the algorithm learns those artefacts rather than anything about behaviour.' },
      ],
    },
    {
      id: 'since',
      title: 'From then to now',
      blocks: [
        {
          t: 'table',
          head: ['Era', 'Main idea', 'Example thinkers'],
          rows: [
            ['1760s–1800s', 'Classical: rational choice, proportionate punishment', 'Beccaria, Bentham'],
            ['1870s–1910s', 'Positivism: measurable causes, often biological', 'Lombroso, Ferri, Goring (critic)'],
            ['1920s–1960s', 'Sociological: neighbourhoods, strain, learning', 'Chicago School (Shaw & McKay), Merton, Sutherland'],
            ['1960s–1970s', 'Labelling and critical criminology: who defines crime?', 'Becker, Lemert, Taylor/Walton/Young'],
            ['1970s–1990s', 'Opportunity and situation; control theory', 'Cohen & Felson, Clarke, Hirschi'],
            ['1990s–now', 'Developmental, biosocial and evidence-based policy', 'Moffitt, Sampson & Laub, Sherman'],
          ],
        },
        { t: 'p', text: 'The classical and positivist ideas never fully went away. Modern rational-choice theory is a descendant of Beccaria; developmental and biosocial criminology are careful, evidence-based descendants of the positivist project, studying risk factors that *shift probabilities* rather than claiming anyone is born to offend.' },
      ],
    },
  ],
  sources: [
    'Beccaria, C. (1764/1986). *On Crimes and Punishments* (D. Young, Trans.). Hackett.',
    'Gibson, M. (2002). *Born to Crime: Cesare Lombroso and the Origins of Biological Criminology*. Praeger.',
    'Goring, C. (1913). *The English Convict: A Statistical Study*. HMSO.',
    'Rafter, N. (2008). *The Criminal Brain: Understanding Biological Theories of Crime*. NYU Press.',
  ],
  related: ['criminology/theories/social-theories', 'criminology/theories/choice-biology-life-course', 'criminology/foundations/measuring-crime'],
}

export default guide
