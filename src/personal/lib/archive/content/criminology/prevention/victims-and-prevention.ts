import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'For much of its history criminology studied offenders and ignored victims. Victimology changed that, and in doing so revealed something practically useful: crime falls disproportionately on a small number of people and places, often repeatedly. That insight, combined with rational choice and routine activity theory, produced the most consistently effective crime-prevention approaches we have, and a clear lesson about deterrence: being caught matters more than how harshly you are punished.',
  nutshell: [
    '**Repeat victimisation**: a small share of victims experiences a large share of crime, and repeats tend to happen soon after the first incident.',
    'Early victimology’s idea of **victim precipitation** is now treated carefully, because it slides easily into **victim blaming**.',
    '**Situational crime prevention** (Clarke) reduces opportunities by increasing effort and risk, reducing rewards and provocations, and removing excuses.',
    '**CPTED** applies the same thinking to the design of buildings and streets.',
    'Crime usually **does not simply move elsewhere**; often nearby areas benefit too.',
    'For deterrence, **certainty of being caught** has much stronger evidence than **severity of punishment**.',
  ],
  sections: [
    {
      id: 'victimology',
      title: 'Victimology',
      blocks: [
        {
          t: 'terms',
          items: [
            { term: 'Victim precipitation', def: 'Early idea (von Hentig, Wolfgang) that some victims contribute to the event, e.g. by starting a fight. Useful for understanding violent disputes, but dangerous when applied to sexual or domestic violence, where it becomes victim blaming.' },
            { term: 'Lifestyle–exposure theory', def: 'Hindelang and colleagues (1978): routines that expose people to likely offenders (late nights out, certain jobs) raise risk. A cousin of routine activity theory.' },
            { term: 'Secondary victimisation', def: 'Further harm caused by how victims are treated by police, courts, media or their community after the crime.' },
            { term: 'Hidden victims', def: 'Those least likely to report, victims of domestic abuse, modern slavery, elder abuse, or crimes against people who distrust the authorities.' },
          ],
        },
        { t: 'p', text: '**Repeat victimisation** is one of the most useful findings in the field. Graham Farrell and Ken Pease showed that once a home is burgled, its risk of being burgled again is sharply raised for weeks afterwards, and that a small proportion of victims accounts for a large proportion of all incidents. The **Kirkholt project** in Rochdale (late 1980s) focused security upgrades and “cocoon” neighbourhood watch on recently burgled homes and recorded large falls in burglary.' },
        { t: 'callout', tone: 'tip', title: 'Why repeats matter', text: 'Repeat victimisation tells you *where to put prevention next*: protecting a recent victim quickly is one of the most efficient ways to prevent the next crime, and it supports the people who need it most.' },
      ],
    },
    {
      id: 'scp',
      title: 'Situational crime prevention',
      lead: 'Ronald Clarke grouped 25 techniques under five aims.',
      blocks: [
        {
          t: 'table',
          head: ['Aim', 'Examples'],
          rows: [
            ['Increase the effort', 'Steering locks, secure entrances, screens at bank counters'],
            ['Increase the risks', 'Better lighting, staffed car parks, extending natural surveillance'],
            ['Reduce the rewards', 'Removable car stereos, phone kill switches, marking property'],
            ['Reduce provocations', 'Managing queues and crowds, closing times, avoiding disputes in pubs'],
            ['Remove excuses', 'Clear rules and signs, easy bins and toilets, alerting conscience (“shoplifting is stealing”)'],
          ],
          caption: 'Based on Cornish and Clarke (2003).',
        },
        { t: 'callout', tone: 'fact', title: 'A classic natural experiment', text: 'When Britain switched from toxic coal gas to non-toxic natural gas in the 1960s–70s, suicides by gas almost disappeared, and the overall suicide rate fell substantially for years, rather than people simply switching methods. Clarke and Mayhew used this to argue that removing an easy opportunity can prevent harm, not just move it.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Displacement', body: 'The worry that prevented crime simply moves to another place, time, target or method. A review of 102 studies (Guerette and Bowers, 2009) found displacement in about a quarter of observations, and when it occurred it was usually smaller than the original reduction.', tag: 'concern' },
            { title: 'Diffusion of benefits', body: 'The opposite effect, found about as often: nearby areas or targets also see falls, because offenders overestimate how far the measures extend.', tag: 'bonus' },
          ],
        },
      ],
    },
    {
      id: 'cpted',
      title: 'CPTED: designing out crime',
      blocks: [
        { t: 'p', text: 'Crime Prevention Through Environmental Design grew from C. Ray Jeffery’s 1971 book of that name and Oscar Newman’s *Defensible Space* (1972), which compared public housing projects and argued that design shapes whether residents can watch over and feel ownership of shared space.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Natural surveillance', body: 'Windows overlooking paths, clear sightlines, good lighting, active ground floors.' },
            { title: 'Access control', body: 'Clear, limited entry points; paths that guide people; no easy “through routes” behind homes.' },
            { title: 'Territorial reinforcement', body: 'Signals that a space is owned and cared for, boundaries, front gardens, well-defined public and private areas.' },
            { title: 'Maintenance and activity', body: 'Quick repairs and legitimate use of spaces, linking to the [broken-windows](@criminology/theories/social-theories) debate.' },
          ],
        },
        { t: 'p', text: 'Systematic reviews by Welsh and Farrington found improved **street lighting** was associated with a reduction in crime of around a fifth, and **CCTV** with a smaller average reduction that was largest in car parks and when combined with other measures.' },
      ],
    },
    {
      id: 'deterrence',
      title: 'Deterrence: certainty beats severity',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Increase the **visible likelihood of being caught**, the most consistent finding in deterrence research (Nagin, 2013).',
            'Use **swift, predictable** responses; long delays weaken the link between act and consequence.',
            'Combine deterrence with real alternatives, as in [focused deterrence](@criminology/offenders/offender-types).',
          ],
          dont: [
            'Expect much from longer sentences alone: the evidence for marginal deterrent effects of extra prison time is weak, partly because most offenders do not know the sentence lengths.',
            'Assume the death penalty deters more than long imprisonment: a US National Research Council review (2012) concluded existing studies cannot answer the question either way.',
            'Forget that prison can be criminogenic: some studies find custody slightly *increases* reoffending compared with community sentences for similar people.',
          ],
        },
        { t: 'quote', text: 'The certainty of a punishment, even if it be moderate, will always make a stronger impression than the fear of another which is more terrible but combined with the hope of impunity.', by: 'Cesare Beccaria, On Crimes and Punishments (1764)' },
      ],
    },
  ],
  sources: [
    'Farrell, G., & Pease, K. (1993). *Once Bitten, Twice Bitten: Repeat Victimisation and its Implications for Crime Prevention*. Home Office Police Research Group.',
    'Hindelang, M. J., Gottfredson, M. R., & Garofalo, J. (1978). *Victims of Personal Crime*. Ballinger.',
    'Cornish, D. B., & Clarke, R. V. (2003). Opportunities, precipitators and criminal decisions. *Crime Prevention Studies*, 16, 41–96.',
    'Clarke, R. V., & Mayhew, P. (1988). The British gas suicide story and its criminological implications. *Crime and Justice*, 10, 79–116.',
    'Guerette, R. T., & Bowers, K. J. (2009). Assessing the extent of crime displacement and diffusion of benefits. *Criminology*, 47(4), 1331–1368.',
    'Newman, O. (1972). *Defensible Space*. Macmillan.',
    'Welsh, B. C., & Farrington, D. P. (2008). Effects of improved street lighting on crime. *Campbell Systematic Reviews*, 4(1).',
    'Nagin, D. S. (2013). Deterrence in the twenty-first century. *Crime and Justice*, 42(1), 199–263.',
    'National Research Council. (2012). *Deterrence and the Death Penalty*. National Academies Press.',
  ],
  related: ['criminology/foundations/routine-activity', 'criminology/theories/choice-biology-life-course', 'criminology/justice/sentencing-and-rehabilitation'],
}

export default guide
