import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Where innate immunity treats every threat with roughly the same generic toolkit, adaptive immunity builds a response custom-shaped to one specific pathogen, and remembers that shape for years, sometimes a lifetime. It takes days to spin up the first time, but it is the reason you only get chickenpox once.',
  nutshell: [
    'Adaptive immunity has two coordinated branches: **T cells** (cell-mediated immunity) and **B cells**, which produce **antibodies** (humoral immunity).',
    'A pathogen fragment (an **antigen**) must be presented to T cells before the adaptive response can specifically target it, the bridge from innate to adaptive immunity.',
    'Every antibody is built from the same **Y-shaped unit**, but antibody classes differ in how many units are joined together and where in the body they work.',
    'After an infection clears, **memory B cells and T cells** persist, the reason a second exposure to the same pathogen produces a faster, stronger response than the first.',
  ],
  sections: [
    {
      id: 'the-full-sequence',
      title: 'The full sequence, step by step',
      blocks: [
        { t: 'med-viz', viz: 'immune-response' },
      ],
    },
    {
      id: 't-and-b-cells',
      title: 'T cells and B cells: two different jobs',
      blocks: [
        {
          t: 'table',
          head: ['Cell type', 'What it does'],
          rows: [
            ['Helper T cells (CD4+)', 'Coordinate the response, releasing chemical signals that activate and direct both killer T cells and B cells. Often described as the immune system’s "field commander."'],
            ['Cytotoxic / killer T cells (CD8+)', 'Directly destroy the body’s own cells once those cells are confirmed to be infected (identified via fragments displayed on the infected cell’s surface), essential against viruses, which hide inside cells where antibodies can’t reach them.'],
            ['B cells', 'Once activated, mature into plasma cells that mass-produce antibodies specific to the triggering antigen, the "humoral" (fluid-based) half of adaptive immunity.'],
            ['Memory T and B cells', 'A small population that persists long after the infection clears, specific to that exact pathogen, ready to respond far faster if it returns.'],
          ],
          caption: 'This is why HIV, which specifically infects and destroys helper T cells, is so devastating: it disables the coordinator of the entire adaptive response, not just one narrow part of it.',
        },
      ],
    },
    {
      id: 'antibodies',
      title: 'Antibody structure and binding',
      blocks: [
        { t: 'med-viz', viz: 'antibody-binding' },
        { t: 'p', text: 'An antibody doesn’t destroy a pathogen directly, it marks and disables it. Binding an antigen can block the pathogen from attaching to a cell in the first place (neutralisation), flag it for a phagocyte to eat (opsonisation), or clump multiple pathogens together so they’re easier to clear (agglutination).' },
      ],
    },
  ],
  sources: [
    'Murphy, K., & Weaver, C. (2016). *Janeway’s Immunobiology* (9th ed.). Garland Science.',
    'Abbas, A. K., Lichtman, A. H., & Pillai, S. (2021). *Cellular and Molecular Immunology* (10th ed.). Elsevier.',
    'Pier, G. B., Lyczak, J. B., & Wetzler, L. M. (2004). *Immunology, Infection, and Immunity*. ASM Press.',
  ],
  related: ['medicine/immunology/innate-immunity', 'medicine/immunology/vaccines-and-immunity', 'medicine/microbiology/virus-structure-and-types'],
}

export default guide
