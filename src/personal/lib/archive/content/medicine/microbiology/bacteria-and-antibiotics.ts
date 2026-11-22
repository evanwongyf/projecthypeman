import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A bacterium is a complete living cell, it eats, grows, and divides entirely on its own, which is exactly what makes it structurally different from a virus, and exactly why antibiotics (which target features only real cells have) work against bacteria but do nothing to a virus.',
  nutshell: [
    'A bacterium is a single-celled organism with its own **cell wall, membrane and ribosomes**, unlike a virus, it can reproduce independently, without needing a host cell.',
    'The **Gram stain** sorts most bacteria into two broad groups based on cell wall structure, which strongly predicts which antibiotics will work against them.',
    'Antibiotics work by targeting something bacteria have that human cells don’t, a cell wall, bacteria-specific ribosomes, or bacteria-specific enzymes, which is exactly why they have no effect on viruses.',
    '**Antibiotic resistance** evolves through ordinary natural selection: random mutations (or genes borrowed from other bacteria) that happen to survive an antibiotic get passed on, and resistant bacteria gradually take over.',
  ],
  sections: [
    {
      id: 'bacterial-structure',
      title: 'What a bacterium actually is',
      blocks: [
        {
          t: 'table',
          head: ['Feature', 'Bacterium', 'Virus'],
          rows: [
            ['A real cell?', 'Yes, has its own membrane, cytoplasm, ribosomes and DNA', 'No, just a genome in a protein shell, no internal machinery of its own'],
            ['Can reproduce alone?', 'Yes, by dividing in two (binary fission)', 'No, must hijack a host cell’s machinery entirely'],
            ['Size', 'Roughly 1,000 nanometres, large enough to see with a standard light microscope', 'Roughly 20–300 nanometres, needs an electron microscope to see directly'],
            ['Killed by antibiotics?', 'Yes, if the antibiotic targets something the bacterium needs', 'No, antibiotics have no bacteria-specific target to act on in a virus'],
          ],
          caption: 'This table is also the direct answer to "why doesn’t my doctor give me antibiotics for a cold": a cold is viral, and antibiotics have nothing to act on in a virus, taking them anyway does nothing for the cold and only helps unrelated bacteria in the body practice resisting the drug.',
        },
        { t: 'callout', tone: 'note', title: 'Gram staining', text: 'A 140-year-old lab technique (developed by Hans Christian Gram in 1884) still used constantly today: bacteria are stained with a purple dye, then rinsed with alcohol. Bacteria with a thick outer peptidoglycan wall (Gram-positive) trap the purple dye and stay purple; bacteria with a thinner wall but an extra outer membrane (Gram-negative) lose the purple stain and show a pink counterstain instead. This single quick test strongly predicts which antibiotic classes are likely to work, since Gram-negative bacteria’s extra outer membrane blocks some antibiotics entirely.' },
      ],
    },
    {
      id: 'how-antibiotics-work',
      title: 'How different antibiotic classes work',
      blocks: [
        {
          t: 'table',
          head: ['Antibiotic class', 'Target', 'Example drugs'],
          rows: [
            ['Penicillins, cephalosporins (beta-lactams)', 'Block bacteria from building their cell wall, the wall weakens and the cell bursts', 'Amoxicillin, penicillin, cephalexin'],
            ['Macrolides', 'Block bacterial ribosomes (which differ structurally from human ribosomes) from making proteins', 'Azithromycin, erythromycin'],
            ['Tetracyclines', 'Also block bacterial ribosomes, at a different binding site than macrolides', 'Doxycycline, tetracycline'],
            ['Aminoglycosides', 'Bind bacterial ribosomes and cause them to misread genetic instructions', 'Gentamicin, streptomycin'],
            ['Fluoroquinolones', 'Block an enzyme bacteria need to unwind and copy their DNA', 'Ciprofloxacin, levofloxacin'],
            ['Sulfonamides', 'Block a step in folate (vitamin B9) synthesis that bacteria must make themselves, but humans get from diet', 'Sulfamethoxazole'],
          ],
          caption: 'Notice the common thread: every one of these targets something either unique to bacteria (a cell wall, a bacteria-specific ribosome structure) or something human cells don’t need to make themselves, which is exactly what lets antibiotics kill bacteria while mostly leaving human cells alone.',
        },
      ],
    },
    {
      id: 'resistance',
      title: 'How antibiotic resistance evolves',
      blocks: [
        {
          t: 'flow',
          title: 'Resistance through ordinary natural selection',
          nodes: [
            { label: 'A huge bacterial population, with random genetic variation', tone: 'data' },
            { label: 'Antibiotic exposure kills most bacteria', sub: 'but a rare few happen to carry a mutation that helps them survive', tone: 'process' },
            { label: 'Surviving resistant bacteria reproduce', sub: 'the antibiotic has just selected for exactly the trait it was trying to eliminate', tone: 'process' },
            { label: 'Resistant genes can also spread sideways', sub: 'between different bacteria, via plasmids, not just down to offspring', tone: 'process' },
            { label: 'A resistant strain becomes common', tone: 'output' },
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Why finishing a prescribed course matters', text: 'Stopping antibiotics early, right after symptoms improve, tends to leave behind exactly the bacteria that were most resistant to begin with (since the least-resistant ones died first), letting that partially-resistant survivor population regrow and potentially spread resistance further. This is the core reason doctors emphasise completing a full prescribed course even once you feel better.' },
        {
          t: 'checklist',
          items: [
            'Enzyme degradation: some resistant bacteria produce an enzyme (like beta-lactamase) that chemically destroys the antibiotic before it can act',
            'Efflux pumps: some bacteria pump the antibiotic back out of the cell faster than it can accumulate',
            'Target modification: some bacteria evolve a slightly different version of the protein the antibiotic was supposed to bind, so it no longer fits',
            'Reduced permeability: some bacteria thicken or modify their outer membrane so less of the antibiotic gets in at all',
          ],
        },
      ],
    },
  ],
  sources: [
    'Madigan, M. T., Bender, K. S., Buckley, D. H., Sattley, W. M., & Stahl, D. A. (2018). *Brock Biology of Microorganisms* (15th ed.). Pearson.',
    'World Health Organization. (2021). *Antimicrobial Resistance: Global Report on Surveillance*.',
    'Munita, J. M., & Arias, C. A. (2016). Mechanisms of antibiotic resistance. *Microbiology Spectrum*, 4(2).',
  ],
  related: ['medicine/microbiology/virus-structure-and-types', 'medicine/microbiology/how-infections-spread', 'medicine/basics/drug-names-and-classes'],
}

export default guide
