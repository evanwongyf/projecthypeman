import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Fire scenes are among the hardest in forensic science: the event destroys much of its own evidence, and for decades investigators relied on folklore about burn patterns that later proved false. Modern fire investigation is built around the scientific method. This page also touches on post-blast investigation at a deliberately high level, how scenes are examined, not how anything is made.',
  nutshell: [
    'Fire needs **fuel, heat, oxygen and a chemical chain reaction** (the fire tetrahedron); investigators look for where and how these came together first.',
    '**NFPA 921** (US, first published 1992) sets out a scientific method: collect data, form hypotheses about origin and cause, and test each one against the evidence.',
    'Old “arson indicators” such as crazed glass and certain floor patterns can be produced by ordinary fires, particularly after **flashover**.',
    '**Ignitable liquid residues** are confirmed in the lab by GC-MS and classified by standards such as ASTM E1618; detection dog alerts need lab confirmation.',
    'Post-blast work locates the seat of an explosion, recovers fragments and identifies residues; it is specialist work done under strict safety rules.',
  ],
  sections: [
    {
      id: 'fire-basics',
      title: 'How fires develop',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Fuel', body: 'Anything combustible: furnishings, building materials, flammable liquids.', tag: 'tetrahedron' },
            { title: 'Heat', body: 'An ignition source: electrical fault, cooking, smoking materials, open flame.', tag: 'tetrahedron' },
            { title: 'Oxygen', body: 'Ventilation shapes how a fire grows; opening a door can transform it.', tag: 'tetrahedron' },
            { title: 'Chain reaction', body: 'Self-sustaining combustion chemistry; many extinguishing agents work by interrupting it.', tag: 'tetrahedron' },
          ],
        },
        {
          t: 'levels',
          caption: 'Compartment fire stages. Flashover is the key moment for investigators, because afterwards burn damage spreads across the whole room.',
          items: [
            { name: 'Ignition', body: 'A fuel first starts to burn.' },
            { name: 'Growth', body: 'Fire spreads across the first item; a hot smoke layer collects under the ceiling.' },
            { name: 'Flashover', body: 'Radiant heat from the smoke layer ignites nearly everything exposed in the room almost at once.' },
            { name: 'Fully developed', body: 'Burning limited by ventilation; damage can be heaviest far from the origin.' },
            { name: 'Decay', body: 'Fuel or oxygen runs out.' },
          ],
        },
      ],
    },
    {
      id: 'method',
      title: 'The scientific method in fire investigation',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Recognise the need and define the problem', body: 'Establish what must be determined: origin, cause, responsibility.' },
            { title: 'Collect data', body: 'Scene examination, witness accounts, photographs, building plans, electrical systems, weather.' },
            { title: 'Analyse and hypothesise', body: 'Propose possible origins and ignition sequences based on fire patterns and fuels present.' },
            { title: 'Test', body: 'Check each hypothesis against all the data, including fire modelling or experiments; reject those that do not fit.' },
            { title: 'Conclude', body: 'Select a final hypothesis only if it survives testing; otherwise the cause is “undetermined”.' },
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Negative corpus', text: 'Calling a fire incendiary simply because no accidental cause was found, without positive evidence of deliberate ignition, is known as **negative corpus**. NFPA 921 has discouraged it since its 2011 edition: an absence of evidence for one cause is not evidence for another.' },
      ],
    },
    {
      id: 'myths',
      title: 'Arson myths and a cautionary case',
      blocks: [
        {
          t: 'table',
          head: ['Old belief', 'What research showed'],
          rows: [
            ['Crazed (finely cracked) glass means an accelerant made the fire unusually hot', 'Crazing is caused by rapid cooling, typically water from firefighting hitting hot glass'],
            ['Irregular “pour patterns” on floors show liquid was spread', 'Similar patterns form from radiant heat and dropping debris after flashover'],
            ['Spalling (chipped concrete) proves an accelerant', 'Spalling comes from heat and moisture in concrete, with or without accelerants'],
            ['Deep “alligator” charring means fast, accelerated burning', 'Char depth depends on many factors and is not a reliable rate indicator'],
          ],
        },
        { t: 'example', title: 'Cameron Todd Willingham (Texas)', lines: [
          { label: '1991', text: 'A house fire killed Willingham’s three young daughters. Investigators cited pour patterns, multiple origins and crazed glass as signs of arson.' },
          { label: '2004', text: 'He was executed. Shortly before, fire scientist Gerald Hurst had submitted a report saying the indicators were consistent with an accidental fire.' },
          { label: 'Later', text: 'An expert review commissioned by the Texas Forensic Science Commission (2009) found the original analysis did not meet the standards of modern fire science.' },
          { label: 'Lesson', text: 'Pattern-based conclusions must be tested against fire science, especially in post-flashover rooms.' },
        ] },
      ],
    },
    {
      id: 'lab',
      title: 'Lab analysis and post-blast work (overview)',
      blocks: [
        { t: 'p', text: 'Debris from suspected origin areas is sealed in airtight cans and sent to the laboratory, where vapours are concentrated (often onto activated charcoal) and analysed by GC-MS. The resulting pattern is compared against reference classes, gasoline, light or heavy petroleum distillates, and so on. Many household materials produce compounds of their own when they burn, so comparison samples from unaffected areas are important.' },
        { t: 'list', items: [
          'Post-blast investigation treats the scene as dangerous until specialist bomb disposal teams have cleared it.',
          'Investigators locate the **seat** of the explosion, map how far fragments travelled, and recover pieces of any device.',
          'Residues are analysed by techniques such as ion chromatography, ion mobility spectrometry and mass spectrometry.',
          'The aim is to identify what was used, link incidents, and support prosecution, the same evidence-handling rules apply as at any other scene.',
        ] },
        { t: 'callout', tone: 'note', title: 'Scope', text: 'This page deliberately stays at the level of how investigators work. It does not describe explosive compositions or how devices function.' },
      ],
    },
  ],
  sources: [
    'National Fire Protection Association. *NFPA 921: Guide for Fire and Explosion Investigations* (current edition).',
    'Lentini, J. J. (2019). *Scientific Protocols for Fire Investigation* (3rd ed.). CRC Press.',
    'Beyler, C. (2009). *Analysis of the Fire Investigation Methods and Procedures Used in the Criminal Arson Cases Against Ernest Ray Willis and Cameron Todd Willingham*. Report to the Texas Forensic Science Commission.',
    'ASTM E1618. *Standard Test Method for Ignitable Liquid Residues in Extracts from Fire Debris Samples by Gas Chromatography-Mass Spectrometry*.',
  ],
  related: ['forensics/toxicology/drugs-and-alcohol', 'forensics/reliability/wrongful-convictions', 'forensics/reliability/cognitive-bias'],
}

export default guide
