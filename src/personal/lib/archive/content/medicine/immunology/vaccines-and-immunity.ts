import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A vaccine doesn’t need to be dangerous to work, it only needs to show the immune system enough of a pathogen to trigger the same memory-building process a real infection would, without the actual disease. That one idea, refined over two centuries, is the basis of every vaccine.',
  nutshell: [
    'A vaccine trains **adaptive immunity in advance**, the body builds memory cells against a pathogen before ever meeting the real, dangerous version.',
    'Different vaccine types show the immune system the pathogen in different ways: **live-attenuated, inactivated, subunit, and genetic (mRNA/viral vector)**.',
    '**Herd immunity** happens when enough of a population is immune that a pathogen can no longer find enough new hosts to sustain an outbreak, directly calculable from R0.',
    'The **herd immunity threshold** is higher for more contagious diseases, which is exactly why measles, with one of the highest known R0 values, needs such a high vaccination rate to stay controlled.',
  ],
  sections: [
    {
      id: 'how-vaccines-work',
      title: 'How a vaccine trains immunity without the disease',
      blocks: [
        { t: 'p', text: 'A vaccine exposes the immune system to an antigen, some recognisable piece or weakened version of a pathogen, triggering the same adaptive immune sequence covered on the [adaptive immunity](@medicine/immunology/adaptive-immunity) page: antigen presentation, T and B cell activation, antibody production, and crucially, memory cell formation. The difference from a real infection is that the antigen is chosen or engineered specifically not to cause serious disease.' },
        {
          t: 'table',
          head: ['Vaccine type', 'How it works', 'Example'],
          rows: [
            ['Live-attenuated', 'A weakened version of the actual pathogen, still able to replicate a little but not cause serious disease, produces strong, long-lasting immunity, closest to a real infection', 'MMR (measles, mumps, rubella), oral polio vaccine'],
            ['Inactivated', 'The pathogen is killed/deactivated entirely, safer for immunocompromised people, but usually needs booster doses since the immune response is weaker', 'Inactivated polio vaccine, most flu shots'],
            ['Subunit / protein', 'Only a specific piece of the pathogen (often a key surface protein) is used, not the whole organism', 'Hepatitis B vaccine, most HPV vaccines'],
            ['mRNA', 'Delivers genetic instructions telling the body’s own cells to temporarily produce one pathogen protein, which the immune system then responds to', 'Pfizer/Moderna COVID-19 vaccines'],
            ['Viral vector', 'A harmless, unrelated virus is engineered to carry genetic instructions for a pathogen protein into cells', 'Oxford/AstraZeneca and Johnson & Johnson COVID-19 vaccines'],
          ],
        },
        { t: 'callout', tone: 'fact', title: 'Why some vaccines need boosters and others don’t', text: 'Live-attenuated vaccines closely mimic a real infection, often producing immunity lasting decades with just one or two doses. Inactivated, subunit and most mRNA vaccines produce a real but typically shorter-lived response, needing periodic booster doses to keep memory cell populations and antibody levels high, a direct, mechanistic reason booster schedules differ so much between vaccines.' },
      ],
    },
    {
      id: 'herd-immunity',
      title: 'Herd immunity',
      blocks: [
        {
          t: 'math',
          tex: String.raw`HIT = 1 - \frac{1}{R_0}`,
          where: [
            { sym: 'HIT', def: 'Herd immunity threshold, the fraction of a population that needs to be immune to stop sustained spread' },
            { sym: 'R_0', def: 'The pathogen’s basic reproduction number (see [how infections spread](@medicine/microbiology/how-infections-spread))' },
          ],
          caption: 'Reading it: a higher R0 pushes HIT closer to 100%, a more contagious pathogen needs a larger immune fraction of the population before it runs out of susceptible people to infect. Below the threshold, each new case still infects more than one other person on average and the outbreak keeps growing even with substantial immunity already present.',
        },
        {
          t: 'table',
          head: ['Disease', 'R0 (approx.)', 'Herd immunity threshold'],
          rows: [
            ['Measles', '15 (mid-range of 12–18)', '≈93%'],
            ['Chickenpox', '11 (mid-range of 10–12)', '≈91%'],
            ['SARS-CoV-2 (original strain)', '2.5', '≈60%'],
            ['Seasonal influenza', '1.3', '≈23%'],
          ],
          caption: 'This is exactly why measles vaccination coverage below roughly 93–95% repeatedly leads to local outbreaks even in otherwise well-vaccinated countries, the threshold for this particular disease is simply that unforgiving.',
        },
        { t: 'callout', tone: 'warn', title: 'A threshold, not a guarantee', text: 'Herd immunity is a population-level statistical effect, not a protective field, it does not make any specific unvaccinated individual personally immune, and pockets of low vaccination within an otherwise well-covered population can still sustain local outbreaks even when the overall national average looks safely above threshold. Real-world calculations are also more complex than this simplified formula, accounting for uneven mixing between groups and immunity that fades over time.' },
      ],
    },
  ],
  sources: [
    'Plotkin, S. A., Orenstein, W. A., Offit, P. A., & Edwards, K. M. (2017). *Plotkin’s Vaccines* (7th ed.). Elsevier.',
    'Fine, P., Eames, K., & Heymann, D. L. (2011). "Herd immunity": A rough guide. *Clinical Infectious Diseases*, 52(7), 911–916.',
    'World Health Organization. *Vaccine Safety Basics* and *Immunization Coverage* reports.',
  ],
  related: ['medicine/immunology/adaptive-immunity', 'medicine/microbiology/how-infections-spread', 'medicine/immunology/innate-immunity'],
}

export default guide
