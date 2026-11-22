import type { ArchiveNode } from '../topics'

// Criminology: the study of crime, offenders, victims and the justice response, with a
// strong thread on the psychology of offending ("the criminal mind"). Written to be
// educational and evidence-led: contested science is hedged, famous cases are limited to
// well-documented historical ones, and nothing here is operational guidance for offending.

export const CRIMINOLOGY: ArchiveNode = {
  slug: 'criminology',
  title: 'Criminology',
  blurb: 'Why people offend and how we know: the big theories, the psychology of offending (psychopathy, neutralisation, self-control), offender profiling as the evidence really stands, prevention, and what works in justice.',
  glyph: '⚖',
  color: 'color-mix(in srgb, var(--lavender) 55%, var(--teal))',
  tags: ['criminology', 'criminal psychology', 'criminal mind', 'crime', 'offending', 'psychopathy', 'profiling', 'justice', 'rehabilitation', 'victimology'],
  children: [
    {
      slug: 'start-here',
      title: 'Start here',
      blurb: 'What criminology is, how this shelf is organised, and the habits of mind that keep the subject honest.',
      minutes: 5,
      glyph: '★',
      tags: ['beginner', 'overview', 'roadmap'],
    },
    {
      slug: 'foundations',
      title: 'Foundations',
      blurb: 'Where the discipline came from, how crime is counted, and the simple triangle behind every offence.',
      glyph: '◆',
      tags: ['history', 'crime statistics', 'routine activity'],
      children: [
        { slug: 'what-is-criminology', title: 'What criminology is, and where it came from', blurb: 'Classical versus positivist thinking, Beccaria’s reforms, and why Lombroso’s “born criminal” was wrong.', minutes: 9, tags: ['beccaria', 'lombroso', 'classical school', 'positivism', 'history'] },
        { slug: 'measuring-crime', title: 'Measuring crime', blurb: 'Recorded crime, the dark figure, victimisation surveys, rates per 100,000 and clearance rates, with worked numbers.', minutes: 10, tags: ['crime rate', 'dark figure', 'victimisation survey', 'clearance rate', 'statistics'] },
        { slug: 'routine-activity', title: 'Routine activity and the crime triangle', blurb: 'A motivated offender, a suitable target, no capable guardian, and why everyday life shapes where crime happens.', minutes: 8, tags: ['routine activity theory', 'crime triangle', 'cohen and felson', 'hot spots'] },
      ],
    },
    {
      slug: 'theories',
      title: 'Why people offend',
      blurb: 'The major explanations, from strain and learning to choice, biology and the life course.',
      glyph: '◎',
      tags: ['theory', 'causes of crime', 'explanations'],
      children: [
        { slug: 'social-theories', title: 'Social theories: strain, learning, control and labels', blurb: 'Merton and Agnew’s strain, Sutherland and Akers on learning, Hirschi’s social bonds, labelling, and the broken-windows debate.', minutes: 11, tags: ['strain theory', 'differential association', 'social learning', 'hirschi', 'labelling', 'broken windows'] },
        { slug: 'choice-biology-life-course', title: 'Choice, biology and the life course', blurb: 'Rational choice, biosocial risk, the age–crime curve, and Moffitt’s two trajectories of offending.', minutes: 10, tags: ['rational choice', 'biosocial', 'life course', 'moffitt', 'age crime curve', 'desistance'] },
      ],
    },
    {
      slug: 'criminal-mind',
      title: 'Inside the criminal mind',
      blurb: 'The psychology of offending: personality, the stories offenders tell themselves, self-control, trauma and aggression.',
      glyph: '◐',
      tags: ['criminal psychology', 'forensic psychology', 'criminal mind'],
      children: [
        { slug: 'psychopathy-and-personality', title: 'Psychopathy, ASPD and the Dark Triad', blurb: 'What Hare’s PCL-R measures and what it does not, how psychopathy differs from antisocial personality disorder, and the Dark Triad traits.', minutes: 11, tags: ['psychopathy', 'pcl-r', 'hare', 'antisocial personality disorder', 'dark triad', 'narcissism', 'machiavellianism'] },
        { slug: 'neutralisation-and-disengagement', title: 'Neutralisation, distortions and moral disengagement', blurb: 'Sykes and Matza’s five techniques, Bandura’s moral disengagement, and the cognitive distortions that make harm feel acceptable.', minutes: 9, tags: ['neutralisation', 'sykes and matza', 'moral disengagement', 'bandura', 'cognitive distortions'] },
        { slug: 'self-control-and-development', title: 'Self-control, the adolescent brain and trauma', blurb: 'Gottfredson and Hirschi’s self-control, why teenagers take risks, and how adverse childhood experiences shape pathways into offending.', minutes: 10, tags: ['self-control', 'impulsivity', 'adolescent brain', 'aces', 'trauma', 'pathways'] },
        { slug: 'aggression-and-addiction', title: 'Aggression, emotion and addiction', blurb: 'Reactive versus instrumental aggression, the role of anger and shame, and the several different links between drugs, alcohol and crime.', minutes: 9, tags: ['aggression', 'reactive', 'instrumental', 'anger', 'addiction', 'alcohol', 'drugs and crime'] },
      ],
    },
    {
      slug: 'offenders',
      title: 'Offenders and profiling',
      blurb: 'Different kinds of offending, how people are drawn into extremism, and what offender profiling can and cannot do.',
      glyph: '◇',
      tags: ['offender types', 'profiling', 'investigation'],
      children: [
        { slug: 'offender-types', title: 'Kinds of offending: violent, serial, white-collar, cyber and gangs', blurb: 'What research says about violent and serial offenders, the fraud triangle, cybercrime offenders, and why people join gangs.', minutes: 11, tags: ['violent crime', 'serial offenders', 'white-collar crime', 'fraud triangle', 'cybercrime', 'gangs'] },
        { slug: 'radicalisation', title: 'Terrorism and radicalisation', blurb: 'Why there is no terrorist “profile”, the staircase and pyramid models, and what pulls people in and out of violent extremism.', minutes: 9, tags: ['terrorism', 'radicalisation', 'extremism', 'staircase model', 'deradicalisation'] },
        { slug: 'offender-profiling', title: 'Offender profiling: what the evidence says', blurb: 'The FBI organised/disorganised typology and its critics, behavioural investigative advice, geographic profiling with distance decay, and the base-rate trap.', minutes: 12, tags: ['offender profiling', 'fbi', 'organised disorganised', 'geographic profiling', 'distance decay', 'rossmo', 'base rate'] },
      ],
    },
    {
      slug: 'prevention',
      title: 'Victims and prevention',
      blurb: 'Who is harmed, and the approaches that actually reduce crime.',
      glyph: '☂',
      tags: ['victimology', 'crime prevention', 'deterrence'],
      children: [
        { slug: 'victims-and-prevention', title: 'Victimology, situational prevention and deterrence', blurb: 'Repeat victimisation, Clarke’s 25 techniques, CPTED, and why certainty of being caught matters more than severity of punishment.', minutes: 11, tags: ['victimology', 'repeat victimisation', 'situational crime prevention', 'cpted', 'deterrence', 'certainty'] },
      ],
    },
    {
      slug: 'justice',
      title: 'The justice response',
      blurb: 'What sentencing is for, what reduces reoffending, and restorative alternatives.',
      glyph: '⚑',
      tags: ['sentencing', 'rehabilitation', 'recidivism', 'restorative justice'],
      children: [
        { slug: 'sentencing-and-rehabilitation', title: 'Sentencing, rehabilitation and recidivism', blurb: 'The aims of punishment, the risk-need-responsivity model, how recidivism is measured, and what works to reduce reoffending.', minutes: 11, tags: ['sentencing', 'rnr', 'risk need responsivity', 'recidivism', 'rehabilitation', 'what works'] },
        { slug: 'restorative-and-singapore', title: 'Restorative justice and Singapore’s approach', blurb: 'Bringing victims and offenders together, what the evidence shows, and how Singapore combines strict laws with a strong reintegration system.', minutes: 9, tags: ['restorative justice', 'singapore', 'yellow ribbon', 'reintegration', 'community'] },
      ],
    },
    {
      slug: 'methods',
      title: 'Thinking critically about crime',
      blurb: 'The statistical habits that protect you from misleading crime claims.',
      glyph: '▤',
      tags: ['research methods', 'critical thinking', 'statistics'],
      children: [
        { slug: 'reading-crime-research', title: 'Reading crime statistics and research', blurb: 'Base rates, relative versus absolute risk, correlation versus causation, and how media coverage distorts our sense of crime.', minutes: 10, tags: ['base rates', 'relative risk', 'correlation causation', 'media', 'fear of crime', 'research methods'] },
      ],
    },
  ],
}
