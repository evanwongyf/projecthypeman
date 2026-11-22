import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Crime is not one behaviour, and offenders are not one kind of person. The research on a teenager in a street gang, an accountant falsifying books and someone running online scams draws on different theories and points to different kinds of prevention. This guide surveys the main kinds of offending criminologists study and what the evidence says about the people involved, with the myths cleared away.',
  nutshell: [
    'Most **violence** happens between people who know each other, and is concentrated among young men, often linked to alcohol and disputes.',
    '**Serial offenders** are rare, and most popular stereotypes about them (genius, loner, always white male, wants to be caught) are unreliable.',
    '**White-collar crime** causes enormous harm but is under-detected and under-punished; Cressey’s **fraud triangle**, pressure, opportunity, rationalisation, explains much of it.',
    '**Cybercrime offenders** are often young and motivated as much by skill, status and online community as by money.',
    'People join **gangs** for protection, belonging, status and income; **focused deterrence** programmes have reasonable evidence for reducing gang violence.',
  ],
  sections: [
    {
      id: 'violence',
      title: 'Violent offending',
      blocks: [
        {
          t: 'list',
          items: [
            'In most countries the majority of homicide victims are killed by someone they know, partners, family members, acquaintances, rather than strangers.',
            'Men commit the large majority of homicides worldwide; the UN’s global homicide studies put the figure around 90% of known perpetrators.',
            'Much violence is **reactive**: an argument escalates, often with alcohol involved. See [aggression types](@criminology/criminal-mind/aggression-and-addiction).',
            '**Intimate partner violence** is a major, under-reported form, with women killed by partners at much higher rates than men are.',
          ],
        },
        { t: 'callout', tone: 'myth', title: 'Myth: stranger danger is the main risk', text: 'Fear of crime focuses on random attacks by strangers, but for most violent crime, and especially for women and children, the greater risk comes from people already in the victim’s life. Prevention therefore leans heavily on family and relationship services, not just public-space safety.' },
      ],
    },
    {
      id: 'serial',
      title: 'Serial offenders: separating fact from fiction',
      blocks: [
        { t: 'p', text: 'An FBI-convened symposium (2005) defined serial murder as the unlawful killing of two or more victims by the same offender(s) in separate events. It is very rare, a tiny fraction of all homicides, which is part of why it attracts so much attention and so much myth.' },
        {
          t: 'table',
          head: ['Popular belief', 'What the research says'],
          rows: [
            ['They are dysfunctional loners', 'Many hold jobs, have families and appear ordinary to neighbours'],
            ['They are all white men', 'They come from all ethnic groups, roughly in line with the general population; a minority are women'],
            ['They travel widely', 'Most operate in a comfort zone near home or work (see geographic profiling)'],
            ['They are criminal geniuses', 'Most are of average intelligence; they often evade capture because victims are not linked or are from neglected groups'],
            ['They want to be caught', 'Most continue until they are caught, die or are otherwise stopped'],
          ],
          caption: 'Based on the FBI Behavioral Analysis Unit’s 2008 report on the 2005 symposium.',
        },
        { t: 'callout', tone: 'fact', title: 'A case about systems, not monsters', text: 'Harold Shipman, an English family doctor convicted in 2000 of murdering 15 patients, was found by the official Shipman Inquiry to have probably killed around 250 people over more than two decades. The inquiry’s lasting lessons were about weak oversight, death certification, controlled-drug monitoring and complaints, showing how detection depends on systems, not on spotting a “type”.' },
      ],
    },
    {
      id: 'white-collar',
      title: 'White-collar crime and the fraud triangle',
      blocks: [
        { t: 'p', text: 'Edwin Sutherland coined “white-collar crime” in 1939 for crime committed by respectable, high-status people in the course of their occupation. Its total financial cost is often estimated to exceed that of street property crime, yet it is less often detected, reported or prosecuted.' },
        {
          t: 'cards',
          cols: 3,
          items: [
            { title: 'Pressure', body: 'A financial problem the person feels they cannot share, debt, targets, a failing business, lifestyle expectations.', tag: '1' },
            { title: 'Opportunity', body: 'Trusted access with weak controls: no separation of duties, little auditing, unchecked authority.', tag: '2' },
            { title: 'Rationalisation', body: '“I’m only borrowing it”, “they underpay me”, “everyone in this industry does it”, classic [neutralisations](@criminology/criminal-mind/neutralisation-and-disengagement).', tag: '3' },
          ],
        },
        { t: 'p', text: 'Donald Cressey developed the triangle from interviews with imprisoned embezzlers (*Other People’s Money*, 1953). Organisations use it to design controls: reducing opportunity is the side they can most directly change. Corporate scandals such as Enron (2001), where senior executives were convicted of fraud, show how pressure to hit targets and a permissive culture can scale fraud up to whole organisations.' },
      ],
    },
    {
      id: 'cyber',
      title: 'Cybercrime offenders',
      blocks: [
        {
          t: 'terms',
          items: [
            { term: 'Cyber-dependent crime', def: 'Crime that only exists because of computers, malware, intrusion, denial-of-service attacks.' },
            { term: 'Cyber-enabled crime', def: 'Traditional crime made bigger or easier online, fraud, harassment, child sexual exploitation.' },
            { term: 'Pathways', def: 'Research by the UK National Crime Agency found young offenders often started in gaming and online forums, motivated by challenge, peer recognition and a sense that online offending was low-risk and victimless.' },
          ],
        },
        { t: 'p', text: 'Because many cyber-dependent offenders are young and skill-motivated, some prevention programmes redirect them towards legitimate cyber-security careers and use warning letters or workshops rather than prosecution for first-time, low-level offences.' },
      ],
    },
    {
      id: 'gangs',
      title: 'Gangs',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Push factors', body: 'Neighbourhood violence, poverty, school exclusion, family difficulties.' },
            { title: 'Pull factors', body: 'Protection, belonging, status, excitement, money, gangs often meet real needs.' },
            { title: 'Joining raises risk', body: 'Studies find offending, especially violence, increases while young people are in a gang and falls after they leave.' },
            { title: 'Most leave', body: 'Gang membership is usually short, often a year or two, for most young people.' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'What works', text: '**Focused deterrence** (“group violence intervention”) combines a direct message from police and community members that violence will bring swift consequences for the whole group, with genuine offers of support. A 2018 meta-analysis found moderate reductions in crime, especially gang violence.' },
      ],
    },
  ],
  sources: [
    'UNODC. (2019). *Global Study on Homicide*. United Nations Office on Drugs and Crime.',
    'Morton, R. J., & Hilts, M. A. (Eds.). (2008). *Serial Murder: Multi-Disciplinary Perspectives for Investigators*. FBI Behavioral Analysis Unit.',
    'Smith, J. (2002–2005). *The Shipman Inquiry* (Reports 1–6). HMSO.',
    'Sutherland, E. H. (1940). White-collar criminality. *American Sociological Review*, 5(1), 1–12.',
    'Cressey, D. R. (1953). *Other People’s Money: A Study in the Social Psychology of Embezzlement*. Free Press.',
    'National Crime Agency. (2017). *Pathways into Cyber Crime*. NCA.',
    'Braga, A. A., Weisburd, D., & Turchan, B. (2018). Focused deterrence strategies and crime control. *Criminology & Public Policy*, 17(1), 205–250.',
    'Pyrooz, D. C., & Sweeten, G. (2015). Gang membership between ages 5 and 17 years in the United States. *Journal of Adolescent Health*, 56(4), 414–419.',
  ],
  related: ['criminology/offenders/offender-profiling', 'criminology/offenders/radicalisation', 'criminology/criminal-mind/neutralisation-and-disengagement'],
}

export default guide
