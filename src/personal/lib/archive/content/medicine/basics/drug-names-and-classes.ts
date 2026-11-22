import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Every drug has at least two names, a brand name a company chose for marketing, and a generic name assigned through an international system specifically designed so that one glance at the ending tells a pharmacist or doctor what class of drug it is. Learning to read that system turns an endless list of unfamiliar words into a much smaller set of patterns.',
  nutshell: [
    'A drug’s **brand name** (like Lipitor) is chosen by its manufacturer for marketing; its **generic name** (atorvastatin) is assigned by an international naming body and shared by every manufacturer once the patent expires.',
    'The **World Health Organization’s International Nonproprietary Name (INN)** system builds generic names largely from standardised **word stems** that signal drug class.',
    'Recognising a handful of common stems (**-statin, -olol, -pril, -mab, -cillin**, and more) lets you identify what an unfamiliar drug does without looking it up.',
    'Some stems even encode finer detail, the sub-syllable in a monoclonal antibody’s name (**-ximab, -zumab, -umab**) reveals how "human" the antibody was engineered to be.',
  ],
  sections: [
    {
      id: 'brand-vs-generic',
      title: 'Brand names vs. generic names',
      blocks: [
        { t: 'p', text: 'When a pharmaceutical company develops a new drug, they give it a memorable, trademarked brand name for marketing, but regulators and pharmacists worldwide also need one standard, non-proprietary name that uniquely identifies the actual chemical, usable by any manufacturer once the original patent expires and generic versions appear.' },
        {
          t: 'table',
          head: ['Brand name', 'Generic (INN) name', 'Class'],
          rows: [
            ['Lipitor', 'atorvastatin', 'statin (cholesterol-lowering)'],
            ['Advil / Motrin', 'ibuprofen', 'NSAID (anti-inflammatory painkiller)'],
            ['Prozac', 'fluoxetine', 'SSRI (antidepressant)'],
            ['Ozempic', 'semaglutide', 'GLP-1 receptor agonist (diabetes/weight)'],
            ['Humira', 'adalimumab', 'monoclonal antibody (anti-inflammatory)'],
          ],
          caption: 'Once a patent expires, any manufacturer can sell the same chemical under the generic name (or their own new brand name), which is why a pharmacy shelf often has several differently-branded packages of literally the same drug.',
        },
        { t: 'callout', tone: 'tip', title: 'Why this system exists at all', text: 'Before standardised naming, the same drug could be sold under dozens of different brand names across different countries and companies, creating real risk of dangerous dosing errors when a patient or doctor didn’t realise two differently-named products were the same active chemical. The WHO’s INN programme, running since 1953, exists specifically to prevent that.' },
      ],
    },
    {
      id: 'the-stems',
      title: 'Decoding the stem',
      blocks: [
        { t: 'med-viz', viz: 'drug-names' },
        { t: 'p', text: 'The pattern above, a shared ending signalling a shared class and mechanism, covers a large share of commonly prescribed drugs. It is not a perfect, universal rule (some older drugs predate the modern stem system, and a few stems are reused across loosely related classes), but it is reliable enough to be genuinely useful at a glance.' },
      ],
    },
    {
      id: 'reading-deeper',
      title: 'What a generic name can tell you beyond the stem',
      blocks: [
        {
          t: 'terms',
          items: [
            { term: 'Prefix', def: 'Often arbitrary or company-chosen (to keep names distinct and pronounceable), though sometimes it hints at the specific target"ator-" in atorvastatin has no deep meaning, just distinguishes it from other statins.' },
            { term: 'Stem (the ending)', def: 'The standardised part that reveals drug class, as explored above, usually the most informative part of the name.' },
            { term: 'Sub-stem (for complex classes)', def: 'A more specific marker within a larger stem family, for monoclonal antibodies specifically, the syllable just before "-mab" reveals the antibody’s origin: "-o-" (murine, mouse-derived), "-xi-" (chimeric, part mouse/part human), "-zu-" (humanised, mostly human), or "-u-" (fully human), a direct trace of how the drug was engineered.' },
          ],
        },
        { t: 'callout', tone: 'fact', title: 'A naming system under real strain', text: 'The explosion of new monoclonal antibody drugs in recent years has pushed the INN stem system to its limits, in 2021 the WHO actually retired the detailed sub-stem distinctions for antibody origin (-o-/-xi-/-zu-/-u-) for newly named drugs, judging that modern antibody engineering techniques had made the old categories less meaningful. Existing drug names keep their established endings, but the system itself continues to evolve as medicine does.' },
      ],
    },
  ],
  sources: [
    'World Health Organization. *Guidance on INN*. World Health Organization, International Nonproprietary Names Programme.',
    'USAN Council (American Medical Association, USP, FDA). *USAN Stem List*.',
    'Jordan, M. A. (2021). Nomenclature of monoclonal antibodies. *mAbs*, 13(1).',
  ],
  related: ['medicine/basics/how-drugs-work-pharmacology', 'medicine/basics/routes-and-forms', 'medicine/immunology/adaptive-immunity'],
}

export default guide
