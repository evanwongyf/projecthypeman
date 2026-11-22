import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Shoe prints, tyre tracks and handwriting are all impressions of something that moved: a sole, a wheel, a hand. They are common at scenes and in fraud cases, and they share the same logic and the same weak points as other pattern evidence: class features narrow the field, while the claim that wear or habit points to one source needs careful support.',
  nutshell: [
    'Footwear marks are recovered by **photography with oblique light**, **lifting** (gel, adhesive, electrostatic for dust) and **casting** for 3D marks in soil or snow.',
    '**Class** features (tread design, size) are common; **randomly acquired characteristics** (cuts, nicks, embedded stones) are what may link a specific shoe.',
    '**Tyre** marks give tread design and sometimes vehicle dimensions such as track width.',
    '**Questioned document** examiners reveal indented writing (ESDA), alterations and different inks (spectral imaging), and compare handwriting.',
    'Handwriting comparison has measurable but non-trivial error rates; good practice demands plenty of comparable known samples.',
  ],
  sections: [
    {
      id: 'footwear',
      title: 'Footwear and tyre marks',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Find', body: 'Low-angle (oblique) torchlight reveals dust marks on hard floors invisible from above.' },
            { title: 'Photograph', body: 'Camera perpendicular to the mark, with a scale, before anything else is done.' },
            { title: 'Lift or cast', body: 'Electrostatic lifters for dust; gel lifters for residue; dental stone casts for impressions in soft ground.' },
            { title: 'Search', body: 'Pattern databases identify the brand and model from the tread design.' },
            { title: 'Compare', body: 'Test impressions from a seized shoe are compared for design, size, wear and acquired damage.' },
          ],
        },
        {
          t: 'table',
          head: ['Feature', 'Type', 'Strength as evidence'],
          rows: [
            ['Tread pattern', 'Class', 'Excludes other designs; popular trainers are worn by many thousands'],
            ['Size and mould features', 'Class / subclass', 'Narrows further, especially with manufacturing mould details'],
            ['General wear', 'Changes over time', 'Reflects gait; time between offence and seizure matters'],
            ['Randomly acquired characteristics', 'Potentially individual', 'Cuts and nicks can be distinctive; how distinctive is not well quantified'],
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Validity status', text: 'PCAST (2016) found no appropriate black-box studies supporting the claim that randomly acquired characteristics can tie a mark to one specific shoe. Class-level conclusions (“this design and size”) are well supported; source identifications are not yet backed by measured error rates.' },
        { t: 'p', text: 'Tyre marks are handled similarly. With several marks, examiners can also measure **track width** (distance between left and right wheels) and turning patterns, which helps narrow vehicle type.' },
      ],
    },
    {
      id: 'documents',
      title: 'Questioned documents',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Indented writing', body: 'Pressing on the top page of a pad leaves invisible dents on the sheet below. An **electrostatic detection apparatus (ESDA)** makes them visible without damaging the page, which is why exhibits are not written on.', tag: 'ESDA' },
            { title: 'Alterations and inks', body: 'A **video spectral comparator** views a document under infrared and ultraviolet light; inks that look identical in daylight often differ, revealing added digits or overwritten words.', tag: 'VSC' },
            { title: 'Printers and copiers', body: 'Many colour laser printers print faint yellow tracking dots encoding a serial number and time, a known source of evidence in leak investigations.', tag: 'machine' },
            { title: 'Paper and security features', body: 'Watermarks, fibres, fluorescence and printing methods help detect counterfeit banknotes and identity documents.', tag: 'substrate' },
          ],
        },
      ],
    },
    {
      id: 'handwriting',
      title: 'Handwriting comparison',
      blocks: [
        { t: 'p', text: 'Handwriting is a learned motor habit. Everyone shows **natural variation**, no two signatures are identical, so the task is to judge whether differences between questioned and known writing fall inside one person’s range of variation or outside it.' },
        { t: 'terms', items: [
          { term: 'Collected exemplars', def: 'Writing produced in the normal course of life (letters, forms). Natural, but may be hard to date.' },
          { term: 'Requested exemplars', def: 'Writing produced on request, often dictated. Comparable content, but the writer may disguise.' },
          { term: 'Simulation', def: 'An attempt to copy someone else’s writing; often shows slow, hesitant line quality and pen lifts.' },
          { term: 'Disguise', def: 'A writer altering their own hand; habits tend to leak through in less conscious features.' },
        ] },
        { t: 'callout', tone: 'note', title: 'What the research shows', text: 'A large 2022 black-box study of forensic document examiners (Hicklin and colleagues) found most conclusions were correct, but erroneous “written by” conclusions occurred in a few percent of different-writer comparisons, and performance varied widely between examiners. Courts in several countries now expect examiners to use graded opinion scales and to explain limitations.' },
        { t: 'checklist', items: [
          'Enough known writing, of the same type (cursive vs print, signature vs text)?',
          'Known samples from around the same time as the questioned writing?',
          'Original documents rather than photocopies, so line quality can be seen?',
          'Was the examiner shielded from irrelevant case information?',
        ] },
      ],
    },
  ],
  sources: [
    'Bodziak, W. J. (2017). *Forensic Footwear Evidence*. CRC Press.',
    'Hicklin, R. A., et al. (2022). Accuracy and reliability of forensic handwriting comparisons. *PNAS*, 119(32), e2119944119.',
    'Ellen, D., Day, S., & Davies, C. (2018). *Scientific Examination of Documents* (4th ed.). CRC Press.',
    'PCAST (2016). *Forensic Science in Criminal Courts*.',
  ],
  related: ['forensics/trace-and-pattern/fingerprints', 'forensics/trace-and-pattern/trace-evidence', 'forensics/reliability/cognitive-bias'],
}

export default guide
