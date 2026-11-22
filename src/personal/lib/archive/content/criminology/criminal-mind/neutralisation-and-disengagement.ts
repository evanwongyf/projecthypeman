import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Most people who offend know the rules and, at some level, agree with them. So how do they break them and still feel like decent people? Criminologists Gresham Sykes and David Matza (1957) argued that offenders use “techniques of neutralisation”, justifications that switch off guilt in advance. Albert Bandura’s theory of moral disengagement later showed the same mental moves at work in everything from bullying to corporate fraud to atrocities.',
  nutshell: [
    'Neutralisations are **justifications used before or during** an offence, not just excuses afterwards, they free a person to act.',
    'Sykes and Matza’s **five techniques**: denial of responsibility, denial of injury, denial of the victim, condemnation of the condemners, appeal to higher loyalties.',
    'Matza’s idea of **drift**: young people are not committed to crime; they drift between conventional and deviant behaviour as neutralisations allow.',
    'Bandura’s **moral disengagement** mechanisms, euphemism, displacing responsibility, dehumanising victims, explain how ordinary people take part in serious harm.',
    'Challenging these distortions is a core part of **cognitive-behavioural** offender programmes.',
  ],
  sections: [
    {
      id: 'techniques',
      title: 'The five techniques of neutralisation',
      blocks: [
        {
          t: 'table',
          head: ['Technique', 'The inner voice', 'What it does'],
          rows: [
            ['Denial of responsibility', '“It wasn’t my fault, I was drunk / I was pushed into it.”', 'Shifts the cause outside the self'],
            ['Denial of injury', '“No one really got hurt; the company is insured.”', 'Minimises the harm'],
            ['Denial of the victim', '“They had it coming.” / “They’ll never notice.”', 'Recasts the victim as deserving or absent'],
            ['Condemnation of the condemners', '“The police and politicians are more corrupt than me.”', 'Attacks the moral standing of critics'],
            ['Appeal to higher loyalties', '“I did it for my friends / my family / the cause.”', 'Ranks group loyalty above the law'],
          ],
          caption: 'Sykes and Matza (1957). Later researchers added others, such as “metaphor of the ledger” (I’ve done enough good to earn this) and “defence of necessity”.',
        },
        { t: 'callout', tone: 'note', title: 'Everyone does this a little', text: 'Taking office supplies home (“everyone does it”), speeding (“the limit is too low here”), or pirating films (“the studios are rich”) use the same mental moves. That is the point of the theory: offenders are not a different species of thinker, they lean harder on ordinary rationalisations.' },
      ],
    },
    {
      id: 'drift',
      title: 'Drift: between two worlds',
      blocks: [
        { t: 'p', text: 'Matza’s *Delinquency and Drift* (1964) argued that most delinquent youths are not committed to a criminal subculture. They hold conventional values, feel shame, and admire law-abiding people, which is exactly why they need neutralisations. With guilt switched off, they “drift” into offending occasionally, and most drift back out as they mature. This fits the [age–crime curve](@criminology/theories/choice-biology-life-course).' },
        { t: 'p', text: 'Evidence for the theory is mixed but supportive: people who endorse neutralisations report more offending, though it is hard to prove the neutralisation came *before* the act rather than as an after-the-fact excuse. Researchers now think both happen and may reinforce each other.' },
      ],
    },
    {
      id: 'bandura',
      title: 'Moral disengagement',
      blocks: [
        { t: 'p', text: 'Bandura identified eight mechanisms people use to disengage their moral standards from their conduct. They operate at four points: the behaviour itself, the sense of agency, the consequences, and the victim.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Moral justification', body: 'Framing harm as serving a worthy purpose.', tag: 'behaviour' },
            { title: 'Euphemistic labelling', body: '“Collateral damage”, “creative accounting”, “teaching them a lesson”.', tag: 'behaviour' },
            { title: 'Advantageous comparison', body: '“Compared with what they did, this is nothing.”', tag: 'behaviour' },
            { title: 'Displacement and diffusion of responsibility', body: '“I was just following orders.” / “Everyone in the group did it.”', tag: 'agency' },
            { title: 'Distorting consequences', body: 'Ignoring, minimising or disbelieving the harm caused.', tag: 'consequences' },
            { title: 'Dehumanisation and blaming the victim', body: 'Describing victims as animals, vermin or objects; holding them responsible.', tag: 'victim' },
          ],
        },
        { t: 'callout', tone: 'fact', title: 'The language of atrocity', text: 'Historians of genocide, from the Holocaust to Rwanda in 1994, document how propaganda dehumanised victims, calling them vermin or “cockroaches”, before mass violence. Moral disengagement helps explain how ordinary people can participate in extraordinary harm.' },
      ],
    },
    {
      id: 'distortions',
      title: 'Cognitive distortions and treatment',
      blocks: [
        {
          t: 'terms',
          items: [
            { term: 'Hostile attribution bias', def: 'Reading ambiguous actions as deliberately hostile (“he bumped me on purpose”). Strongly linked to reactive aggression.' },
            { term: 'Self-centred thinking', def: 'Putting one’s own needs and views first, with little thought for others’ perspectives.' },
            { term: 'Minimising / mislabelling', def: 'Describing harmful behaviour as trivial or even positive.' },
            { term: 'Assuming the worst', def: 'Expecting bad outcomes or treatment, which then justifies pre-emptive action.' },
          ],
        },
        {
          t: 'cycle',
          caption: 'How cognitive-behavioural programmes work on distorted thinking.',
          items: [
            { name: 'Notice', body: 'Identify the automatic thought behind an offence.' },
            { name: 'Challenge', body: 'Test it against evidence and the victim’s perspective.' },
            { name: 'Replace', body: 'Practise an alternative, more accurate thought.' },
            { name: 'Rehearse', body: 'Role-play high-risk situations using the new thinking.' },
          ],
        },
        { t: 'p', text: 'Meta-analyses find well-run cognitive-behavioural programmes reduce reoffending on average, with larger effects when they follow the [risk-need-responsivity principles](@criminology/justice/sentencing-and-rehabilitation).' },
      ],
    },
  ],
  sources: [
    'Sykes, G. M., & Matza, D. (1957). Techniques of neutralization: A theory of delinquency. *American Sociological Review*, 22(6), 664–670.',
    'Matza, D. (1964). *Delinquency and Drift*. Wiley.',
    'Bandura, A. (1999). Moral disengagement in the perpetration of inhumanities. *Personality and Social Psychology Review*, 3(3), 193–209.',
    'Maruna, S., & Copes, H. (2005). What have we learned from five decades of neutralization research? *Crime and Justice*, 32, 221–320.',
    'Lipsey, M. W., Landenberger, N. A., & Wilson, S. J. (2007). Effects of cognitive-behavioral programs for criminal offenders. *Campbell Systematic Reviews*, 3(1).',
  ],
  related: ['criminology/criminal-mind/psychopathy-and-personality', 'criminology/offenders/offender-types', 'thinking/biases'],
}

export default guide
