import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Whether an outbreak fizzles out or grows into an epidemic comes down to one number, multiplied by itself over and over, and the routes a pathogen actually travels by (air, touch, water, insects) determine how large that number tends to be in the first place.',
  nutshell: [
    'Pathogens spread through a handful of main **routes**: airborne/droplet, direct contact, contaminated surfaces (fomites), food and water, and vector-borne (via an insect or animal).',
    'The **incubation period** is the gap between infection and the first symptoms, during which a person can sometimes already be contagious, which matters enormously for how fast a disease spreads undetected.',
    '**R0** (the basic reproduction number) is the average number of new infections caused by one infected person in a fully susceptible population, if R0 is above 1, an outbreak grows; below 1, it shrinks.',
    'R0 is not a fixed property of a pathogen alone, it depends on behaviour and environment too, which is exactly why measures like masks, distancing and isolation can push a real-world R0 below its "natural" value.',
  ],
  sections: [
    {
      id: 'routes',
      title: 'How pathogens actually travel',
      blocks: [
        {
          t: 'table',
          head: ['Route', 'How it works', 'Example'],
          rows: [
            ['Airborne / droplet', 'Expelled in respiratory droplets or fine aerosols when breathing, talking, coughing or sneezing', 'Influenza, measles, tuberculosis'],
            ['Direct contact', 'Skin-to-skin or mucous-membrane contact with an infected person', 'Common cold viruses, many sexually transmitted infections'],
            ['Fomites (contaminated surfaces)', 'Picked up by touching a contaminated object, then touching the eyes, nose or mouth', 'Norovirus, some cold viruses'],
            ['Faecal-oral / food and water', 'Contaminated food or water ingested directly', 'Cholera, many types of food poisoning, hepatitis A'],
            ['Vector-borne', 'Carried by an insect or animal that bites or otherwise transmits the pathogen', 'Malaria (mosquitoes), Lyme disease (ticks)'],
          ],
          caption: 'Many pathogens use more than one route at once, influenza spreads by both droplets and (to a lesser extent) contaminated surfaces, which is part of why both masks and handwashing are recommended together during flu season.',
        },
      ],
    },
    {
      id: 'incubation',
      title: 'The incubation period',
      blocks: [
        { t: 'p', text: 'The incubation period is the time between infection and the first noticeable symptoms. It is not the same as the "infectious period"for several important diseases, a person becomes contagious to others before they feel sick at all, which is exactly what makes those diseases so much harder to contain through symptom-based screening alone.' },
        {
          t: 'table',
          head: ['Disease', 'Typical incubation period', 'Contagious before symptoms?'],
          rows: [
            ['Influenza', '1–4 days', 'Yes, roughly 1 day before symptoms'],
            ['Measles', '10–14 days', 'Yes, about 4 days before the rash appears'],
            ['Common cold (rhinovirus)', '1–3 days', 'Yes, often 1–2 days before symptoms'],
            ['Chickenpox', '10–21 days', 'Yes, roughly 1–2 days before the rash'],
          ],
          caption: 'A long incubation period combined with pre-symptomatic contagiousness is one of the most dangerous combinations in infectious disease, it gives a pathogen a wide window to spread silently through a population before anyone realises an outbreak is even happening.',
        },
      ],
    },
    {
      id: 'r0',
      title: 'R0: the number that decides growth or decline',
      blocks: [
        {
          t: 'math',
          tex: String.raw`R_0 = \tau \times c \times d`,
          where: [
            { sym: '\\tau', def: 'Transmission probability per contact (how likely infection spreads during one contact)' },
            { sym: 'c', def: 'Average number of contacts per unit time' },
            { sym: 'd', def: 'Duration of infectiousness (how long a person remains able to infect others)' },
          ],
          caption: 'Reading it: R0 above 1 means each infected person infects more than one other person on average, so case counts grow; below 1, cases shrink and the outbreak dies out. Crucially, every one of the three factors on the right can be changed by human action, masks and ventilation lower τ, distancing and lockdowns lower c, and early isolation lowers d. R0 is a description of current conditions, not an unchangeable fact about the pathogen.',
        },
        {
          t: 'plot',
          title: 'New daily cases over time, for three different R0 values (illustrative)',
          x: [0, 30],
          y: [0, 500],
          xLabel: 'days since outbreak start',
          yLabel: 'new cases that day (illustrative)',
          curves: [
            { f: (d: number) => 10 * 1.25 ** d, label: 'R0 ≈ 2.5 (grows fast)', color: '#d9534f' },
            { f: (d: number) => 10 * 1.04 ** d, label: 'R0 ≈ 1.2 (grows slowly)', color: '#e07b2a' },
            { f: (d: number) => 10 * 0.9 ** d, label: 'R0 ≈ 0.6 (declines)', color: '#2f9e6e' },
          ],
          caption: 'This is a simplified, illustrative exponential model, not a real epidemiological simulation (real outbreaks slow down well before this as the pool of still-susceptible people shrinks), but it shows the core, genuinely important pattern: small differences in R0 compound dramatically over just a few weeks.',
        },
        {
          t: 'table',
          head: ['Disease', 'Approximate R0 (no interventions)'],
          rows: [
            ['Measles', '12–18'],
            ['Chickenpox', '10–12'],
            ['Seasonal influenza', '1.2–1.4'],
            ['SARS-CoV-2 (original strain)', '2–3'],
            ['Common cold', '2–3'],
          ],
          caption: 'Measles’s extraordinarily high R0 is exactly why it needs such a high vaccination rate to maintain herd immunity, covered with the actual formula on the [vaccines and herd immunity](@medicine/immunology/vaccines-and-immunity) page.',
        },
      ],
    },
  ],
  sources: [
    'Heesterbeek, J. A. P. (2002). A brief history of R0 and a recipe for its calculation. *Acta Biotheoretica*, 50(3), 189–204.',
    'Centers for Disease Control and Prevention. *Principles of Epidemiology in Public Health Practice*.',
    'Anderson, R. M., & May, R. M. (1991). *Infectious Diseases of Humans: Dynamics and Control*. Oxford University Press.',
  ],
  related: ['medicine/immunology/vaccines-and-immunity', 'medicine/microbiology/virus-structure-and-types', 'mathematics/functions/exponential-log-graphs'],
}

export default guide
