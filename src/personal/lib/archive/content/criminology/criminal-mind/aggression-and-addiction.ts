import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Violence is not one thing. A bar fight that erupts from a perceived insult and a robbery planned for days are both “aggressive”, but they come from different psychological places and call for different responses. The same is true of drugs and crime: substances can be linked to offending in several distinct ways, and lumping them together hides what actually helps.',
  nutshell: [
    '**Reactive (hostile) aggression** is hot, angry and provoked; **instrumental (proactive) aggression** is cold and used as a tool to get something.',
    'The **General Aggression Model** links personal factors and situations through thoughts, feelings and arousal to an appraisal and a choice.',
    '**Shame, humiliation and threatened status** are powerful triggers for reactive violence.',
    'Goldstein’s model splits drugs-and-crime into **psychopharmacological**, **economic-compulsive** and **systemic** links.',
    '**Alcohol** is the substance most consistently tied to violence; treating addiction reduces offending for many people.',
  ],
  sections: [
    {
      id: 'two-types',
      title: 'Reactive versus instrumental aggression',
      blocks: [
        {
          t: 'table',
          head: ['', 'Reactive (hostile)', 'Instrumental (proactive)'],
          rows: [
            ['Goal', 'Hurting someone in response to provocation', 'Getting something, money, compliance, status'],
            ['Emotion', 'High anger, arousal', 'Often low arousal, calm'],
            ['Planning', 'Little; impulsive', 'Some to a lot'],
            ['Typical thinking', 'Hostile attribution bias (“he meant to disrespect me”)', 'Expectation that aggression pays off'],
            ['Linked traits', 'Poor emotion regulation, trauma history', 'Callous-unemotional and psychopathic traits'],
            ['Helpful interventions', 'Anger management, emotion regulation, de-escalation skills', 'Changing rewards, supervision, challenging pro-violence beliefs'],
          ],
        },
        { t: 'p', text: 'In practice many violent acts mix both. A robbery (instrumental) can turn reactive if the victim resists. Kenneth Dodge’s work on children showed the two types have different developmental roots and respond to different treatments, which is why assessments try to tell them apart.' },
      ],
    },
    {
      id: 'gam',
      title: 'The General Aggression Model',
      blocks: [
        {
          t: 'flow',
          title: 'Anderson and Bushman’s General Aggression Model (simplified)',
          nodes: [
            { label: 'Inputs', sub: 'person (traits, beliefs) + situation (provocation, heat, alcohol)', tone: 'data' },
            { label: 'Internal state', sub: 'hostile thoughts, anger, arousal', tone: 'process' },
            { label: 'Appraisal', sub: 'quick automatic read, or slower reappraisal', tone: 'model' },
            { label: 'Action', sub: 'thoughtful restraint or impulsive aggression', tone: 'output' },
          ],
          loop: 'outcomes reshape beliefs and scripts',
        },
        { t: 'p', text: 'The model explains why situations matter: heat, crowding, pain, alcohol and provocation all increase the odds of aggression, and why the *same* person may react very differently on different days. It also explains learning: each episode that “works” strengthens aggressive scripts.' },
        { t: 'callout', tone: 'note', title: 'What about violent video games?', text: 'Lab studies find small short-term increases in aggressive thoughts and minor aggressive behaviour after violent games, but there is little evidence linking games to real-world serious violence. The American Psychological Association’s 2020 resolution said the evidence is insufficient to attribute violent crime to video games. Treat claims in either direction with caution.' },
      ],
    },
    {
      id: 'emotion',
      title: 'Shame, status and the emotional fuel of violence',
      blocks: [
        { t: 'p', text: 'The prison psychiatrist James Gilligan, after years of interviewing violent men, argued in *Violence* (1996) that serious violence is almost always preceded by feelings of shame and humiliation. The claim is deliberately sweeping, but research supports a narrower version: perceived **disrespect and threats to status** are common triggers for violence among young men, especially in settings where reputation offers protection. Elijah Anderson’s ethnography *Code of the Street* (1999) describes how, where people feel the police cannot protect them, a reputation for toughness becomes a survival strategy.' },
        {
          t: 'terms',
          items: [
            { term: 'Frustration–aggression', def: 'Classic idea (Dollard et al., 1939; revised by Berkowitz) that blocked goals produce negative feelings that can trigger aggression.' },
            { term: 'Excitation transfer', def: 'Arousal from one source (exercise, a near-miss) can intensify anger at a later, unrelated provocation.' },
            { term: 'Weapons effect', def: 'The mere presence of a weapon can prime aggressive thoughts, a debated but replicated lab finding.' },
          ],
        },
      ],
    },
    {
      id: 'drugs',
      title: 'Drugs, alcohol and crime: three different links',
      blocks: [
        {
          t: 'cards',
          cols: 3,
          items: [
            { title: 'Psychopharmacological', body: 'The substance itself changes behaviour, disinhibition, paranoia, irritability. Alcohol is the clearest example; it is involved in a large share of violent incidents in many countries.', tag: 'the drug' },
            { title: 'Economic-compulsive', body: 'Offending, usually acquisitive (shoplifting, burglary, theft), to fund a dependence. Offending often falls during treatment.', tag: 'the habit' },
            { title: 'Systemic', body: 'Violence arising from illegal markets: disputes over territory and debts, with no legal way to settle them.', tag: 'the market' },
          ],
        },
        { t: 'p', text: 'Paul Goldstein’s 1985 framework is still widely used because it shows that “drug-related crime” needs different responses: treatment for compulsive offending, alcohol policy and licensing for intoxication-driven violence, and market and policing strategies for systemic violence.' },
        {
          t: 'checklist',
          items: [
            'Opioid substitution treatment (methadone, buprenorphine) is associated with reduced offending and deaths, including after prison release.',
            'Drug courts, which combine supervision with treatment, show modest reductions in reoffending on average in reviews.',
            'Minimum unit pricing and earlier closing times for bars are associated with lower alcohol-related harm in several evaluations.',
            'Correlation is not causation: substance use and offending share risk factors (low self-control, trauma, peers), so not all the overlap is the drug’s doing.',
          ],
        },
      ],
    },
  ],
  sources: [
    'Anderson, C. A., & Bushman, B. J. (2002). Human aggression. *Annual Review of Psychology*, 53, 27–51.',
    'Dodge, K. A., & Coie, J. D. (1987). Social-information-processing factors in reactive and proactive aggression in children’s peer groups. *Journal of Personality and Social Psychology*, 53(6), 1146–1158.',
    'Gilligan, J. (1996). *Violence: Our Deadly Epidemic and Its Causes*. Putnam.',
    'Anderson, E. (1999). *Code of the Street*. W. W. Norton.',
    'Goldstein, P. J. (1985). The drugs/violence nexus: A tripartite conceptual framework. *Journal of Drug Issues*, 15(4), 493–506.',
    'Mitchell, O., Wilson, D. B., Eggers, A., & MacKenzie, D. L. (2012). Assessing the effectiveness of drug courts on recidivism: A meta-analytic review. *Journal of Criminal Justice*, 40(1), 60–71.',
    'American Psychological Association. (2020). *APA Resolution on Violent Video Games*.',
  ],
  related: ['criminology/criminal-mind/self-control-and-development', 'criminology/criminal-mind/psychopathy-and-personality', 'criminology/offenders/offender-types'],
}

export default guide
