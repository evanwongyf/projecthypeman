import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Most theories ask why someone becomes willing to offend. Routine activity theory asks a different question: given that some people are willing, when and where does crime actually happen? Lawrence Cohen and Marcus Felson’s 1979 answer was that a crime needs three things to meet in time and space, and that ordinary daily life decides how often they meet.',
  nutshell: [
    'A direct-contact crime needs a **likely offender**, a **suitable target** and the **absence of a capable guardian** at the same place and time.',
    'Social change can raise crime **without anyone becoming more criminal**, e.g. more empty homes during the day, more portable valuables.',
    'Crime clusters: a small share of places (**hot spots**) accounts for a large share of crime.',
    'The **crime triangle** gives three levers for prevention: handlers for offenders, guardians for targets, managers for places.',
  ],
  sections: [
    {
      id: 'triangle',
      title: 'The three ingredients',
      blocks: [
        {
          t: 'cards',
          cols: 3,
          items: [
            { title: 'Likely offender', body: 'Anyone with some inclination and ability to offend. The theory takes motivation as given rather than explaining it.', tag: 'who' },
            { title: 'Suitable target', body: 'A person or object that is attractive and reachable. Felson summarised suitability as **VIVA**: Value, Inertia (how easy to move), Visibility, Access.', tag: 'what' },
            { title: 'No capable guardian', body: 'Not just police: neighbours, staff, passers-by, cameras, even the owner being at home. Guardianship is mostly informal and everyday.', tag: 'where' },
          ],
        },
        {
          t: 'flow',
          title: 'When the elements converge',
          nodes: [
            { label: 'Offender’s routine', sub: 'commute, school, leisure', tone: 'human' },
            { label: 'Target’s routine', sub: 'where people and goods are', tone: 'data' },
            { label: 'Convergence', sub: 'same place and time', tone: 'process' },
            { label: 'Guardian absent?', sub: 'no one watching or caring', tone: 'model' },
            { label: 'Crime opportunity', tone: 'output' },
          ],
        },
      ],
    },
    {
      id: 'social-change',
      title: 'Explaining crime trends without blaming people',
      blocks: [
        { t: 'p', text: 'Cohen and Felson noticed that US crime rose sharply from the 1960s even as poverty fell and education improved, the opposite of what many theories predicted. Their explanation was that routines had changed: more women working outside the home and more single-person households meant more homes empty in the daytime, while consumer goods such as TVs and stereos became lighter and more valuable. More targets, fewer guardians, same pool of offenders.' },
        { t: 'callout', tone: 'fact', title: 'Smartphones followed the same logic', text: 'When phones became valuable and easy to carry, phone theft rose in many cities. When manufacturers introduced remote locking and “kill switches” that make stolen phones much less useful, several studies found phone robbery and theft fell, a change in target suitability, not in human nature.' },
      ],
    },
    {
      id: 'hot-spots',
      title: 'Hot spots and the law of crime concentration',
      blocks: [
        { t: 'p', text: 'Because the ingredients cluster around particular places (busy transport hubs, certain bars, poorly managed housing blocks), crime does too. David Weisburd’s “law of crime concentration” summarises studies across many cities: roughly **half of crime occurs on around 3–6% of street segments**, and a small share of places tends to stay hot year after year.' },
        { t: 'callout', tone: 'tip', title: 'Why this matters for policing', text: 'Randomised trials of **hot-spots policing**, focusing patrols and problem-solving on these few places, generally find modest reductions in crime there, and usually little evidence of crime simply moving around the corner; nearby areas sometimes even benefit (“diffusion of benefits”). The open questions are about community relations and fairness, not just effectiveness.' },
      ],
    },
    {
      id: 'levers',
      title: 'The expanded crime triangle',
      blocks: [
        { t: 'p', text: 'John Eck later added an outer ring of “controllers” for each element, which turns the theory into a practical prevention tool.' },
        {
          t: 'table',
          head: ['Inner element', 'Controller', 'Example lever'],
          rows: [
            ['Offender', 'Handler (parent, coach, probation officer)', 'Mentoring, supervision, curfew conditions'],
            ['Target / victim', 'Guardian (owner, friend, security staff)', 'Lighting, locks, travelling together'],
            ['Place', 'Manager (landlord, shop owner, transit operator)', 'Licensing conditions, maintenance, design'],
          ],
        },
        { t: 'p', text: 'This leads directly into [situational crime prevention and CPTED](@criminology/prevention/victims-and-prevention), which redesign the situation rather than the person.' },
      ],
    },
  ],
  sources: [
    'Cohen, L. E., & Felson, M. (1979). Social change and crime rate trends: A routine activity approach. *American Sociological Review*, 44(4), 588–608.',
    'Felson, M., & Eckert, M. (2019). *Crime and Everyday Life* (6th ed.). SAGE.',
    'Weisburd, D. (2015). The law of crime concentration and the criminology of place. *Criminology*, 53(2), 133–157.',
    'Braga, A. A., Turchan, B., Papachristos, A. V., & Hureau, D. M. (2019). Hot spots policing of small geographic areas effects on crime. *Campbell Systematic Reviews*, 15(3), e1046.',
  ],
  related: ['criminology/prevention/victims-and-prevention', 'criminology/theories/choice-biology-life-course', 'criminology/offenders/offender-profiling'],
}

export default guide
