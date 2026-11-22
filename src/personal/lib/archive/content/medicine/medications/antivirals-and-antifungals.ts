import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'There are far fewer antiviral and antifungal drugs than antibacterial ones, for a structural reason: a virus uses your own cells’ machinery to copy itself, so a drug that stops it risks damaging your cells too, and a fungus is built from cells much more like ours than bacteria are, which narrows the list of safe targets. The result is a smaller, more specialised toolkit.',
  nutshell: [
    'Antivirals mostly block one specific step of a virus copying itself, often a viral enzyme human cells do not have.',
    'Timing matters more for antivirals than for most antibiotics: oseltamivir and valacyclovir work best started within 24-72 hours of symptoms.',
    'Antifungals mostly target the fungal cell membrane, built from a different sterol than human cell membranes, which is why azoles (fluconazole) and allylamines (terbinafine) both aim there.',
    'HIV antivirals are typically combined in twos or threes specifically to make resistance much harder to develop than any single drug would allow.',
    'A topical antifungal (cream, lozenge) reaches the problem directly with very little absorbed into the rest of the body, which is why side effects are mostly local.',
  ],
  sections: [
    {
      id: 'why',
      title: 'Why this toolkit is smaller',
      blocks: [
        {
          t: 'diagram',
          title: 'Why antivirals are harder to make than antibacterials',
          nodes: [
            { id: 'bact', label: 'Bacterium', shape: 'circle', tone: 'teal', col: 0, row: 0 },
            { id: 'bactwall', label: 'Has its own cell wall, ribosomes and enzymes, targets with no human equivalent', shape: 'rect', tone: 'mint', col: 0, row: 1, w: 185 },
            { id: 'many', label: 'Many safe targets → many antibiotic classes', shape: 'pill', tone: 'mint', col: 0, row: 2, w: 175 },
            { id: 'virus', label: 'Virus', shape: 'circle', tone: 'pink', col: 1, row: 0 },
            { id: 'hijack', label: 'Hijacks the host cell’s own machinery to copy itself', shape: 'rect', tone: 'orange', col: 1, row: 1, w: 180 },
            { id: 'few', label: 'Few targets unique to the virus → few antiviral classes', shape: 'pill', tone: 'orange', col: 1, row: 2, w: 185 },
          ],
          edges: [
            { from: 'bact', to: 'bactwall' },
            { from: 'bactwall', to: 'many' },
            { from: 'virus', to: 'hijack' },
            { from: 'hijack', to: 'few' },
          ],
        },
      ],
    },
    { id: 'browse', title: 'The medicines', blocks: [{ t: 'med-browser', cls: 'Antivirals and antifungals' }] },
  ],
}

export default guide
