import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'When a gun is fired, hard steel parts press and scrape against softer bullets and cartridge cases, leaving marks. Firearms examiners compare those marks to decide whether two items were fired from the same gun. The same reasoning applies to toolmarks left by screwdrivers, pry bars or bolt cutters. This page explains the comparison and the long-running debate over how reliable it is, it is not a guide to firearms themselves.',
  nutshell: [
    '**Rifling**, spiral lands and grooves inside a barrel, spins the bullet and engraves it.',
    '**Class characteristics** (calibre, number and twist of grooves) narrow the field to a make or model; **individual characteristics** (fine striations from wear and machining) are what examiners use to link a specific gun.',
    'Comparisons are done under a **comparison microscope**; cartridge case images can be searched in databases such as the US NIBIN network.',
    '**Gunshot residue (GSR)** particles containing lead, barium and antimony can be found by electron microscopy, but they transfer easily and say little about who fired.',
    'The field’s traditional claim of identification to “a practical certainty” has been criticised by the NAS (2009) and PCAST (2016); recent black-box studies report low but non-zero error rates and heavy use of “inconclusive”.',
  ],
  sections: [
    {
      id: 'marks',
      title: 'Where the marks come from',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Bullet: lands and grooves', body: 'Raised lands in the barrel cut grooves into the bullet surface; tiny imperfections leave parallel **striations**.', tag: 'barrel' },
            { title: 'Cartridge case: breech face', body: 'Pressure slams the case back against the breech face, impressing its machining marks into the primer.', tag: 'impressed' },
            { title: 'Firing pin, extractor, ejector', body: 'Each leaves its own impression or scrape on the case as it is struck, pulled out and thrown clear.', tag: 'mechanism' },
            { title: 'Toolmarks', body: 'A tool’s edge leaves impressions (pressed) or striations (dragged) on softer surfaces such as door frames or padlocks.', tag: 'tools' },
          ],
        },
        { t: 'terms', items: [
          { term: 'Calibre', def: 'The nominal internal diameter of the barrel, or the cartridge designation.' },
          { term: 'Twist', def: 'The direction (left or right) and rate of the rifling spiral, a class characteristic.' },
          { term: 'Subclass characteristics', def: 'Marks shared by a batch of tools or barrels made in sequence by the same worn cutter, a trap, because they can look individual.' },
          { term: 'Test fire', def: 'Firing a recovered gun into a water tank or similar trap in the laboratory to get reference bullets and cases.' },
        ] },
      ],
    },
    {
      id: 'comparison',
      title: 'How a comparison is made',
      blocks: [
        { t: 'steps', items: [
          { title: 'Check class characteristics', body: 'If calibre, rifling count or twist differ, the items are excluded at once.' },
          { title: 'Mount under a comparison microscope', body: 'Two microscopes joined by an optical bridge show the evidence and test items side by side in one view.' },
          { title: 'Look for agreement', body: 'Rotate to align striations; assess how many consecutive matching lines there are and the quality of the agreement.' },
          { title: 'Decide', body: 'Under the AFTE “theory of identification”, an identification is declared when there is “sufficient agreement”, a threshold defined by the examiner’s training and experience.' },
          { title: 'Verify', body: 'A second examiner checks, ideally without knowing the first result.' },
        ] },
        { t: 'callout', tone: 'note', title: 'Databases and 3D imaging', text: 'NIBIN in the US and the Integrated Ballistic Identification System (IBIS) technology used in many countries capture images of cartridge case marks and suggest possible links between shootings. Newer 3D topography scanners allow objective similarity scores, which may eventually move the field towards statistical reporting.' },
      ],
    },
    {
      id: 'gsr',
      title: 'Gunshot residue',
      blocks: [
        { t: 'p', text: 'Firing releases a plume of particles from the primer. Particles that fuse **lead, barium and antimony** in a characteristic spherical form are considered highly characteristic of primer residue and are identified by scanning electron microscopy with energy-dispersive X-ray analysis (SEM-EDX). Many modern “lead-free” primers produce different signatures.' },
        { t: 'list', items: [
          'GSR is lost quickly from hands, much of it within a few hours of normal activity.',
          'It transfers: from police officers, vehicles, or simply standing near a discharge.',
          'Finding GSR supports “was near a discharge or touched something that was” rather than “fired a gun”.',
        ] },
      ],
    },
    {
      id: 'validity',
      title: 'The validity debate',
      blocks: [
        {
          t: 'table',
          head: ['Source', 'Position'],
          rows: [
            ['NAS (2009)', 'The underlying assumption of uniqueness had not been rigorously tested; no defined standard for “sufficient agreement”.'],
            ['PCAST (2016)', 'Only one appropriately designed black-box study existed; method fell short of foundational validity at that time. Estimated false positive rate upper bound about 1 in 46 from that study.'],
            ['Later studies (e.g. Ames II, 2020s)', 'Low false-positive rates on the hardest comparisons but a large share of “inconclusive” answers, and imperfect repeatability when the same examiner saw the same items again.'],
            ['Courts', 'Many US courts now limit testimony, barring phrases like “to the exclusion of all other firearms” while still admitting the comparison.'],
          ],
        },
        { t: 'callout', tone: 'warn', title: 'The inconclusive problem', text: 'Whether to count an “inconclusive” on a pair that is actually from different guns as an error is hotly argued. Counted as correct, error rates look tiny; counted as errors, they look large. A good question to ask any error rate is how inconclusives were handled.' },
      ],
    },
  ],
  sources: [
    'PCAST (2016). *Forensic Science in Criminal Courts: Ensuring Scientific Validity of Feature-Comparison Methods*.',
    'National Research Council (2009). *Strengthening Forensic Science in the United States*, ch. 5.',
    'Association of Firearm and Tool Mark Examiners. *Theory of Identification as it Relates to Toolmarks* (AFTE Journal, 1992, revised 2011).',
    'Dror, I. E., & Scurich, N. (2020). (Mis)use of scientific measurements in forensic science. *Forensic Science International: Synergy*, 2, 333–338.',
  ],
  related: ['forensics/trace-and-pattern/fingerprints', 'forensics/reliability/wrongful-convictions', 'forensics/reliability/evidence-statistics'],
}

export default guide
