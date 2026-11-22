import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A crime scene can only be examined once in its original state. Everything done there, who walks where, what is photographed before it is moved, how an item is bagged, decides what the laboratory can later say. This page covers the routine of scene work and the record that follows each exhibit to court.',
  nutshell: [
    'Preserve life first, then **secure** the scene with cordons and a scene log of everyone who enters.',
    '**Document before touching**: overall, mid-range and close-up photographs (with and without a scale), notes and measured sketches or 3D scans.',
    'Choose a **search pattern** to fit the space, and collect the most fragile, easily lost evidence first.',
    'Package by evidence type: **paper for wet or biological items** (plastic traps moisture and breeds mould), airtight containers for fire debris, rigid boxes for sharps.',
    'The **chain of custody**, a signed, dated record of every handover, is what lets a court trust that the exhibit tested is the one seized.',
  ],
  sections: [
    {
      id: 'securing',
      title: 'Arriving and securing the scene',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Safety and life', body: 'Check for danger and give first aid. Saving a life always outranks preserving evidence; responders note what they moved and touched.' },
            { title: 'Cordons', body: 'An **inner cordon** around the scene itself and an **outer cordon** to hold the public and media back. Scenes are usually drawn larger at first; shrinking a cordon is easy, recovering trampled ground is not.' },
            { title: 'Scene log', body: 'One officer records every person entering and leaving, with times and reasons. It doubles as the list of elimination samples needed later.' },
            { title: 'Common approach path', body: 'A single marked route in and out, chosen where offenders were unlikely to walk, so all traffic damages as little as possible.' },
            { title: 'Protective clothing', body: 'Suits, masks, gloves and overshoes protect the scene from the examiners as much as the reverse.' },
          ],
        },
      ],
    },
    {
      id: 'documenting',
      title: 'Documenting and searching',
      blocks: [
        {
          t: 'levels',
          caption: 'Photography moves from context to detail, so every close-up can be placed in the room.',
          items: [
            { name: 'Overall', body: 'Wide views of the scene and its approaches from several corners.' },
            { name: 'Mid-range', body: 'An item in relation to nearby fixed landmarks (a door, a table).' },
            { name: 'Close-up', body: 'The item filling the frame, first without and then with a scale and an evidence marker.' },
          ],
        },
        { t: 'p', text: 'Sketches record measurements photographs cannot. Positions are fixed by **triangulation** (distances from two fixed points) or from a **baseline**. Many services now add laser 3D scanning, which captures the whole room as a measurable point cloud.' },
        {
          t: 'table',
          head: ['Search pattern', 'Best for', 'How it works'],
          rows: [
            ['Line / strip', 'Open ground, many searchers', 'People walk side by side at arm’s length across the area.'],
            ['Grid', 'Thorough coverage of a defined area', 'A strip search done twice, the second at right angles to the first.'],
            ['Zone / quadrant', 'Rooms, vehicles', 'The area is split into sections, each searched in turn by a named person.'],
            ['Spiral', 'Small scenes, one searcher', 'Circling inward from the edge or outward from a focal point.'],
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Fragile first', text: 'Footwear marks in dust, trace on a doorway, and anything that weather or traffic will destroy are recorded and recovered before sturdier items.' },
      ],
    },
    {
      id: 'evidence-types',
      title: 'Kinds of evidence',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Biological', body: 'Blood, saliva, semen, hair roots, touch DNA. Prone to degradation by heat, moisture and sunlight.', tag: 'dna' },
            { title: 'Trace', body: 'Fibres, glass, paint, soil, gunshot residue, tiny, easily lost, easily cross-contaminated.', tag: 'microscopic' },
            { title: 'Impression and pattern', body: 'Fingerprints, footwear and tyre marks, toolmarks, bloodstain patterns. Often photographed and cast or lifted.', tag: 'marks' },
            { title: 'Physical items', body: 'Weapons, documents, clothing, drugs, containers.', tag: 'objects' },
            { title: 'Digital', body: 'Phones, computers, storage media, CCTV, and data held remotely by providers.', tag: 'data' },
            { title: 'Testimonial context', body: 'Not lab evidence, but witness accounts decide which questions the lab is asked.', tag: 'people' },
          ],
        },
        { t: 'terms', items: [
          { term: 'Class characteristics', def: 'Features shared by a group (a shoe size and tread design, a fibre type). They can narrow a pool, not single out one source.' },
          { term: 'Individual (or randomly acquired) characteristics', def: 'Wear, damage or manufacturing accidents that may distinguish one item, how distinguishing is the scientific question.' },
          { term: 'Control / reference sample', def: 'Known material collected for comparison, such as a sample of carpet from the room or a suspect’s DNA swab.' },
          { term: 'Elimination sample', def: 'From people with legitimate access (officers, residents) so their traces can be set aside.' },
        ] },
      ],
    },
    {
      id: 'packaging',
      title: 'Packaging and chain of custody',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Air-dry wet biological items, then package in paper bags or boxes.',
            'Put fire debris in airtight metal cans or special nylon bags so volatile residues do not escape.',
            'Package each item separately so items cannot transfer material to each other.',
            'Seal with tamper-evident tape and sign across the seal.',
            'Label with case number, item number, description, location, date, time and collector.',
          ],
          dont: [
            'Seal damp clothing in plastic: bacteria and mould will degrade DNA.',
            'Put a suspect’s and a victim’s clothing in the same bag, or let the same officer handle both before packaging.',
            'Write on a bag after the item is inside if pressure could damage indented writing or prints.',
            'Leave an item unaccounted for between handovers, even overnight.',
          ],
        },
        {
          t: 'example',
          title: 'A chain-of-custody record',
          lines: [
            { label: 'Item', text: 'JS/04, grey hooded top, recovered from bedroom floor, 14:32' },
            { label: '14:50', text: 'Sealed by J. Smith (scene examiner), seal no. 0041877' },
            { label: '17:10', text: 'Handed to P. Tan (exhibits officer), seal intact, signed by both' },
            { label: 'Next day 09:05', text: 'Received at laboratory store, seal intact, booked in' },
            { label: 'Next day 11:40', text: 'Opened by analyst in clean lab, new seal applied after sampling' },
          ],
        },
        { t: 'callout', tone: 'fact', title: 'Why it matters', text: 'The defence does not need to prove contamination happened, only that the record leaves room for it. An unbroken, specific chain removes that doubt. Digital exhibits get the same treatment plus a hash value recorded at seizure (see [hashing](@forensics/digital-evidence/foundations-and-acquisition)).' },
      ],
    },
  ],
  sources: [
    'Fisher, B. A. J., & Fisher, D. R. (2012). *Techniques of Crime Scene Investigation* (8th ed.). CRC Press.',
    'National Institute of Justice (2013). *Crime Scene Investigation: A Guide for Law Enforcement*. US Department of Justice.',
    'Houck, M. M., & Siegel, J. A. (2015). *Fundamentals of Forensic Science* (3rd ed.). Academic Press.',
  ],
  related: ['forensics/start-here', 'forensics/biological/dna-profiling', 'forensics/trace-and-pattern/trace-evidence'],
}

export default guide
