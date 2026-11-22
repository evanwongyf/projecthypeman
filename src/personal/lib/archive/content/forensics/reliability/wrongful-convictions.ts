import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'DNA testing did more than solve crimes: from the 1990s onward it exposed hundreds of people convicted of crimes they did not commit. Reviewing those cases showed that flawed forensic evidence was a frequent contributor. Two major US reports, the National Academy of Sciences in 2009 and the President’s Council of Advisors on Science and Technology (PCAST) in 2016, then asked a basic question of each discipline: has anyone actually measured whether it works?',
  nutshell: [
    'Misapplied forensic science features in a large share of DNA-based exonerations, the Innocence Project has put it at roughly half of its cases, though categories and counting methods vary.',
    '**Bite-mark comparison** has no demonstrated scientific foundation for identifying individuals and has been linked to multiple wrongful convictions.',
    '**Microscopic hair comparison** testimony by FBI examiners overstated conclusions in more than 90% of the trial transcripts reviewed in a 2015 audit.',
    'PCAST defined **foundational validity**: a method must be shown, by appropriate empirical studies, to be repeatable, reproducible and accurate, with measured error rates.',
    'Errors also come from fraud, overstatement and poor lab management, not only from weak methods.',
  ],
  sections: [
    {
      id: 'nas',
      title: 'The 2009 wake-up call',
      blocks: [
        { t: 'quote', text: 'With the exception of nuclear DNA analysis, however, no forensic method has been rigorously shown to have the capacity to consistently, and with a high degree of certainty, demonstrate a connection between evidence and a specific individual or source.', by: 'National Research Council, *Strengthening Forensic Science in the United States* (2009)' },
        { t: 'list', items: [
          'Many disciplines grew up inside police agencies, not universities, and were never subjected to independent research.',
          'Testimony routinely used phrases such as “match”, “to a reasonable degree of scientific certainty” or “to the exclusion of all others”, which have no defined scientific meaning.',
          'The report recommended independent research, accreditation, certification of examiners and separation of labs from law enforcement.',
        ] },
      ],
    },
    {
      id: 'pcast',
      title: 'PCAST 2016: foundational validity',
      blocks: [
        { t: 'terms', items: [
          { term: 'Foundational validity', def: 'Empirical studies show the method, as a method, reliably gives correct answers, with known error rates.' },
          { term: 'Validity as applied', def: 'This examiner applied the method properly in this case, and the stated error rates are disclosed.' },
          { term: 'Black-box study', def: 'Many examiners judge test samples whose true answers the researchers know, treating the examiners’ reasoning as a “black box” and measuring only their accuracy.' },
        ] },
        {
          t: 'table',
          head: ['Discipline', 'PCAST view (2016)'],
          rows: [
            ['DNA, single source and simple mixtures', 'Foundationally valid'],
            ['DNA, complex mixtures', 'Valid only within limits tested by validation studies'],
            ['Latent fingerprints', 'Foundationally valid, but false positive rates higher than jurors would expect'],
            ['Firearms', 'Fell short, only one appropriately designed study at the time'],
            ['Footwear (specific shoe)', 'No appropriate studies'],
            ['Bite marks', 'Far from meeting the standard; prospects of developing it considered low'],
            ['Microscopic hair comparison', 'Not foundationally valid for individualisation'],
          ],
          caption: 'A summary; the report also set out how disciplines could become validated.',
        },
      ],
    },
    {
      id: 'discredited',
      title: 'Bite marks and hair: two discredited practices',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Bite marks', body: 'Skin is elastic and distorts, marks change as injuries heal, and studies show odontologists often cannot even agree whether an injury is a bite. Ray Krone (Arizona) was convicted largely on bite-mark evidence and freed by DNA in 2002; Keith Harward (Virginia) served 33 years before DNA exonerated him in 2016. A 2023 NIST review concluded bite-mark analysis lacks a sufficient scientific foundation.', tag: 'no foundation' },
            { title: 'Microscopic hair comparison', body: 'Examiners compared hairs under a microscope and sometimes gave statistics or certainty they had no basis for. In 2015 the FBI acknowledged that erroneous statements appeared in at least 90% of reviewed trial transcripts, involving 26 of 28 examiners. Hair microscopy is still useful for screening, species, body area, suitability for DNA, but not for identifying a person.', tag: 'overstated' },
          ],
        },
        { t: 'callout', tone: 'fact', title: 'Not only bad methods', text: 'In Massachusetts, chemist Annie Dookhan falsified drug test results, and courts eventually dismissed more than 21,000 drug cases in 2017. Fraud, backlogs and pressure to produce results are management failures that accreditation and independent oversight are meant to catch.' },
      ],
    },
    {
      id: 'safeguards',
      title: 'What reforms look like',
      blocks: [
        {
          t: 'checklist',
          items: [
            'Black-box studies measuring error rates for each discipline, published openly.',
            'Laboratory accreditation (e.g. ISO/IEC 17025) and proficiency testing that resembles real casework.',
            'Reporting with calibrated language or likelihood ratios instead of “match” and certainty claims.',
            'Shielding examiners from irrelevant case information (see [cognitive bias](@forensics/reliability/cognitive-bias)).',
            'Independent regulators, e.g. the UK’s Forensic Science Regulator, given statutory powers in 2021, and the Texas Forensic Science Commission.',
            'Post-conviction review when a method is discredited, with access to retesting.',
          ],
        },
        { t: 'links', items: [
          { path: 'forensics/reliability/evidence-statistics', note: 'How to state the strength of evidence properly' },
          { path: 'forensics/trace-and-pattern/fingerprints', note: 'A discipline that has engaged with error-rate research' },
          { path: 'forensics/toxicology/fire-and-explosives', note: 'Arson science and the Willingham case' },
        ] },
      ],
    },
  ],
  sources: [
    'National Research Council (2009). *Strengthening Forensic Science in the United States: A Path Forward*.',
    'PCAST (2016). *Forensic Science in Criminal Courts: Ensuring Scientific Validity of Feature-Comparison Methods*.',
    'Garrett, B. L., & Neufeld, P. J. (2009). Invalid forensic science testimony and wrongful convictions. *Virginia Law Review*, 95(1), 1–97.',
    'NIST (2023). *Bitemark Analysis: A NIST Scientific Foundation Review* (NISTIR 8352).',
    'FBI (2015). FBI testimony on microscopic hair analysis contained errors in at least 90 percent of cases in ongoing review (press release, 20 April).',
  ],
  related: ['forensics/reliability/evidence-statistics', 'forensics/reliability/cognitive-bias', 'forensics/start-here'],
}

export default guide
