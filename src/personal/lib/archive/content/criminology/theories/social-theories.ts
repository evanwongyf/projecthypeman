import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Sociological theories look for the causes of crime in people’s relationships, communities and the wider society rather than inside individuals. Each one answers a slightly different question, why some people feel pushed towards crime, how they learn it, what stops most people, and what happens once society brands someone a criminal.',
  nutshell: [
    '**Strain** (Merton, Agnew): crime as a response to blocked goals and painful experiences.',
    '**Differential association and social learning** (Sutherland, Akers): crime is learned from others, like any behaviour.',
    '**Social control** (Hirschi): the real question is why most people *don’t* offend, strong bonds hold them back.',
    '**Labelling** (Becker, Lemert): being officially branded an offender can push people further into crime.',
    '**Broken windows** (Wilson & Kelling): visible disorder invites crime, an influential idea with mixed evidence.',
  ],
  sections: [
    {
      id: 'strain',
      title: 'Strain: when goals and means do not match',
      blocks: [
        { t: 'p', text: 'Robert Merton (1938) argued that societies such as the US promote a shared goal, material success, while unequally distributing the legitimate means to reach it. The gap produces **strain**, and people adapt in different ways.' },
        {
          t: 'table',
          head: ['Adaptation', 'Accepts goals?', 'Accepts legitimate means?', 'Example'],
          rows: [
            ['Conformity', 'Yes', 'Yes', 'Studies hard, works, saves'],
            ['Innovation', 'Yes', 'No', 'Pursues wealth through fraud or theft'],
            ['Ritualism', 'No (gives up)', 'Yes', 'Follows rules mechanically without ambition'],
            ['Retreatism', 'No', 'No', 'Withdraws, e.g. through heavy substance use'],
            ['Rebellion', 'Replaces them', 'Replaces them', 'Seeks a new social order'],
          ],
          caption: 'Merton’s typology of adaptations to strain.',
        },
        { t: 'p', text: 'Robert Agnew’s **general strain theory** (1992) broadened this to any painful experience, losing something valued, being treated badly, failing to reach goals, and stressed that strain leads to crime mainly through **negative emotions such as anger**, especially when people lack coping resources and support.' },
      ],
    },
    {
      id: 'learning',
      title: 'Learning crime: differential association and social learning',
      blocks: [
        { t: 'p', text: 'Edwin Sutherland (1939, 1947) rejected the idea that offenders are biologically different. Crime, he said, is learned in intimate groups, including the techniques, motives and attitudes that favour breaking the law. A person offends when they have learned an **excess of definitions favourable to law violation**. His concept of white-collar crime came from the same insight: respectable executives learn corporate crime from colleagues.' },
        {
          t: 'terms',
          items: [
            { term: 'Differential association', def: 'Sutherland: the balance of pro- and anti-crime attitudes you are exposed to, weighted by frequency, duration, priority (how early) and intensity.' },
            { term: 'Differential reinforcement', def: 'Akers: behaviour that is rewarded (money, status, thrills) is repeated; behaviour that is punished fades.' },
            { term: 'Imitation', def: 'Copying behaviour you see modelled, especially by admired people.' },
            { term: 'Definitions', def: 'Your own attitudes about whether an act is right, wrong or excusable.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'The peer puzzle', text: 'Having delinquent friends is one of the strongest correlates of offending. But the causal direction runs both ways: friends influence us, and we also pick friends like ourselves (“birds of a feather”). Longitudinal studies suggest both processes operate.' },
      ],
    },
    {
      id: 'control',
      title: 'Social control: why don’t we all offend?',
      blocks: [
        { t: 'p', text: 'Travis Hirschi’s *Causes of Delinquency* (1969) flipped the question. Crime is often tempting and rewarding, so what needs explaining is conformity. His answer: the **social bond**. When bonds to society are weak, people are freer to offend.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Attachment', body: 'Caring about what parents, teachers and friends think of you.' },
            { title: 'Commitment', body: 'Having investments, education, a job, a reputation, that crime would put at risk.' },
            { title: 'Involvement', body: 'Being busy with conventional activities, leaving less time for offending.' },
            { title: 'Belief', body: 'Accepting that society’s rules are morally right and should be obeyed.' },
          ],
        },
        { t: 'p', text: 'Hirschi later co-authored a different theory focused on individual [self-control](@criminology/criminal-mind/self-control-and-development). Sampson and Laub’s life-course work extended bond theory to adulthood: a stable job or a good marriage can act as a **turning point** that helps people desist.' },
      ],
    },
    {
      id: 'labelling',
      title: 'Labelling: the danger of a criminal identity',
      blocks: [
        { t: 'quote', text: 'Deviant behavior is behavior that people so label.', by: 'Howard Becker, Outsiders (1963)' },
        {
          t: 'steps',
          items: [
            { title: 'Primary deviance', body: 'An initial act of rule-breaking, common and often minor (Edwin Lemert’s term).' },
            { title: 'Official reaction', body: 'Arrest, conviction, school exclusion, a public label.' },
            { title: 'Closed doors', body: 'The label reduces access to jobs, education and non-offending friends.' },
            { title: 'Secondary deviance', body: 'The person comes to see themselves as an offender and offends further, partly because of the label.' },
          ],
        },
        { t: 'p', text: 'This is part of the reasoning behind **diversion** programmes, which steer young people away from formal prosecution for minor offences. Evaluations generally find diversion produces reoffending outcomes at least as good as formal processing, often better, at lower cost.' },
      ],
    },
    {
      id: 'broken-windows',
      title: 'Broken windows: an influential, contested idea',
      blocks: [
        { t: 'p', text: 'James Q. Wilson and George Kelling (1982) argued that visible disorder, broken windows, graffiti, public drinking, signals that nobody cares, inviting more serious crime. The idea shaped “order maintenance” policing in New York and elsewhere in the 1990s.' },
        {
          t: 'dodont',
          do: [
            'Recognise that fixing physical disorder (cleaning, lighting, repairing vacant lots) has some good evidence: a large Philadelphia trial greening vacant lots found reductions in gun violence nearby.',
            'Note that problem-solving, community-focused disorder policing shows modest crime reductions in reviews.',
          ],
          dont: [
            'Assume mass arrests for minor offences (“zero tolerance”) caused the 1990s crime drop, crime fell similarly in many cities that did not adopt it.',
            'Ignore the costs: aggressive stop-and-frisk tactics damaged trust, especially in minority communities, with little added crime reduction.',
          ],
        },
      ],
    },
  ],
  sources: [
    'Merton, R. K. (1938). Social structure and anomie. *American Sociological Review*, 3(5), 672–682.',
    'Agnew, R. (1992). Foundation for a general strain theory of crime and delinquency. *Criminology*, 30(1), 47–88.',
    'Sutherland, E. H. (1947). *Principles of Criminology* (4th ed.). Lippincott.',
    'Akers, R. L. (1998). *Social Learning and Social Structure*. Northeastern University Press.',
    'Hirschi, T. (1969). *Causes of Delinquency*. University of California Press.',
    'Becker, H. S. (1963). *Outsiders: Studies in the Sociology of Deviance*. Free Press.',
    'Braga, A. A., Welsh, B. C., & Schnell, C. (2015). Can policing disorder reduce crime? A systematic review and meta-analysis. *Journal of Research in Crime and Delinquency*, 52(4), 567–588.',
    'Branas, C. C., et al. (2018). Citywide cluster randomized trial to restore blighted vacant land and its effects on violence, crime, and fear. *PNAS*, 115(12), 2946–2951.',
  ],
  related: ['criminology/theories/choice-biology-life-course', 'criminology/criminal-mind/neutralisation-and-disengagement', 'criminology/justice/restorative-and-singapore'],
}

export default guide
