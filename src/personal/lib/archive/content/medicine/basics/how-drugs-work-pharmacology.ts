import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Pharmacology splits cleanly into two questions: what does the body do to the drug (pharmacokinetics, absorption, distribution, metabolism, excretion), and what does the drug do to the body (pharmacodynamics, how it binds a target and produces an effect). Both questions have real, calculable answers, not just rules of thumb.',
  nutshell: [
    '**Pharmacokinetics (PK)** tracks a drug’s journey: absorption into the blood, distribution around the body, metabolism (usually by the liver), and excretion (usually by the kidneys), remembered as ADME.',
    'A drug’s **half-life** is the time for its blood concentration to fall by half, it determines dosing frequency and how long a drug stays detectable or active.',
    '**Pharmacodynamics (PD)** describes the dose-response relationship: how much effect a given dose produces, which follows a predictable S-shaped (sigmoid) curve for almost every drug.',
    '**Potency** and **efficacy** are different properties, a more potent drug works at a lower dose; a more effective drug has a higher ceiling on its maximum possible effect. A drug can have either without the other.',
  ],
  sections: [
    {
      id: 'adme',
      title: 'Pharmacokinetics: what the body does to the drug',
      blocks: [
        {
          t: 'flow',
          title: 'ADME: a drug’s journey through the body',
          nodes: [
            { label: 'Absorption', sub: 'crossing from the site of administration into the bloodstream', tone: 'process' },
            { label: 'Distribution', sub: 'spreading through blood and tissues, often unevenly', tone: 'process' },
            { label: 'Metabolism', sub: 'chemically broken down, mostly by liver enzymes', tone: 'process' },
            { label: 'Excretion', sub: 'removed from the body, mostly via the kidneys and urine', tone: 'output' },
          ],
        },
        { t: 'p', text: 'Every step can vary hugely between drugs and between people, a drug taken as a tablet must survive stomach acid and first pass through the liver before reaching general circulation (see [routes and forms](@medicine/basics/routes-and-forms) for how route changes this); a drug metabolised by a liver enzyme someone genetically lacks can build up to dangerous levels at a normal dose.' },
        {
          t: 'math',
          tex: String.raw`C(t) = C_0 \, e^{-kt} \qquad t_{1/2} = \frac{\ln 2}{k}`,
          where: [
            { sym: 'C(t)', def: 'Drug concentration in the blood at time t' },
            { sym: 'C_0', def: 'Initial concentration, right after a dose is fully absorbed' },
            { sym: 'k', def: 'The elimination rate constant, how fast the drug is cleared' },
            { sym: 't_{1/2}', def: 'The half-life: time for concentration to fall by half' },
          ],
          caption: 'Most drugs are cleared at a rate proportional to how much is currently present ("first-order kinetics"), so concentration decays exponentially, not linearly. Reading it: a drug with a short half-life (hours) needs frequent dosing to keep its effect steady; a drug with a long half-life (days) stays in the system, and keeps acting, long after the last dose, which matters when deciding how long to wait before starting a different, potentially interacting drug.',
        },
        {
          t: 'plot',
          title: 'Blood concentration after one dose, for two different half-lives',
          x: [0, 48],
          y: [0, 100],
          xLabel: 'hours since dose',
          yLabel: 'blood concentration (% of initial)',
          curves: [
            { f: (t: number) => 100 * 2 ** (-t / 4), label: 'short half-life (4 hours)', color: '#e07b2a' },
            { f: (t: number) => 100 * 2 ** (-t / 24), label: 'long half-life (24 hours)', color: '#3b6fd8' },
          ],
          caption: 'A drug with a 4-hour half-life is almost fully cleared within a day, needing several doses daily to stay effective. A drug with a 24-hour half-life is still at 50% after a full day, once-daily dosing keeps it roughly steady.',
        },
      ],
    },
    {
      id: 'pharmacodynamics',
      title: 'Pharmacodynamics: what the drug does to the body',
      blocks: [
        { t: 'p', text: 'Most drugs work by binding a specific receptor, a protein shaped to recognise one molecule (or a small family of similar ones), like a key fitting a lock. Binding either activates the receptor (an agonist, triggering the cell’s normal response) or blocks it (an antagonist, preventing the body’s own signal from getting through).' },
        { t: 'med-viz', viz: 'dose-response' },
        {
          t: 'metric',
          name: 'EC50 (potency)',
          shows: 'The dose required to produce 50% of a drug’s maximum possible effect, the standard way to measure and compare how potent different drugs are.',
          eli5: 'If two painkillers both eventually relieve pain fully, but one does it with a 10mg dose and the other needs 200mg to do the same job, the first is more potent, EC50 is just a precise number for "how little do you need."',
          higher: 'A higher EC50 means a less potent drug, a bigger dose is needed to reach the same effect. This is not automatically worse: potency says nothing about how effective, safe, or appropriate a drug actually is, only how much of it you need.',
          lower: 'A lower EC50 means a more potent drug, effective at a smaller dose. Higher potency can sometimes mean a smaller, more convenient dose, but it does not by itself mean a better or safer drug.',
          typical: 'EC50 values span an enormous range across drugs (micrograms to grams) because they depend entirely on how tightly a specific drug binds its specific receptor, comparing EC50 only makes sense between drugs acting on the same target.',
        },
        { t: 'callout', tone: 'tip', title: 'Potency and efficacy are genuinely different things', text: 'A drug can be highly potent (effective at a tiny dose) but have low maximum efficacy (even a huge dose never fully relieves the problem), or the reverse: a drug that needs a large dose but, once reached, fully resolves the issue. Choosing between two drugs often comes down to efficacy (the ceiling) far more than potency (the dose needed to get there), since a more "potent" drug that simply cannot reach full effect is not actually the better choice.' },
      ],
    },
  ],
  sources: [
    'Rang, H. P., Ritter, J. M., Flower, R. J., & Henderson, G. (2019). *Rang and Dale’s Pharmacology* (9th ed.). Elsevier.',
    'Rosenbaum, S. E. (2016). *Basic Pharmacokinetics and Pharmacodynamics* (2nd ed.). Wiley.',
  ],
  related: ['medicine/basics/drug-names-and-classes', 'medicine/basics/routes-and-forms', 'mathematics/functions/exponential-log-graphs'],
}

export default guide
