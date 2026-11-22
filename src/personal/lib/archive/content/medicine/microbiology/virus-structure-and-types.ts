import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A virus is one of biology’s strangest categories, not quite alive by most definitions, since it cannot reproduce, metabolise, or do anything at all without first hijacking a living cell. Strip away the thousands of different viruses and they are all built from the same small set of parts.',
  nutshell: [
    'Every virus has a **genome** (DNA or RNA) carrying its genetic instructions, wrapped in a protein shell called a **capsid**.',
    'Some viruses also have an **envelope**, a lipid membrane stolen from a host cell’s own membrane, studded with **spike proteins** used to attach to and enter the next cell.',
    'Whether a virus is **enveloped** changes how it survives outside the body, the envelope is fragile and easily destroyed by soap, which is a major reason some viruses spread more by touch and others more by surfaces.',
    'A virus **cannot reproduce on its own**, it injects its genome into a host cell and hijacks that cell’s own machinery to make copies of itself.',
  ],
  sections: [
    {
      id: 'the-parts',
      title: 'The parts of a virus',
      blocks: [
        { t: 'med-viz', viz: 'virus-structure' },
        {
          t: 'terms',
          items: [
            { term: 'Capsid', def: 'A protein shell that every virus has, protecting its genome and often playing a direct role in attaching to and entering a host cell.' },
            { term: 'Genome', def: 'The virus’s genetic material, DNA or RNA, single- or double-stranded depending on the virus family. RNA genomes generally mutate faster, since RNA copying has far less built-in error correction than DNA copying.' },
            { term: 'Envelope', def: 'A lipid membrane some viruses wrap themselves in, taken from the membrane of the host cell they last budded out of, not built by the virus itself.' },
            { term: 'Spike proteins', def: 'Proteins studding an envelope (or, in non-enveloped viruses, the capsid surface) specifically shaped to latch onto a receptor on the surface of a host cell, the first step of infection.' },
          ],
        },
      ],
    },
    {
      id: 'the-lifecycle',
      title: 'How a virus hijacks a cell',
      blocks: [
        {
          t: 'flow',
          title: 'The basic viral lifecycle',
          nodes: [
            { label: 'Attachment', sub: 'spike proteins bind a matching receptor on a host cell', tone: 'process' },
            { label: 'Entry', sub: 'the virus (or just its genome) gets inside the cell', tone: 'process' },
            { label: 'Replication', sub: 'the cell’s own machinery is hijacked to copy the viral genome and build new viral proteins', tone: 'process' },
            { label: 'Assembly', sub: 'new copies of the virus are assembled inside the cell', tone: 'process' },
            { label: 'Release', sub: 'new viruses burst out (killing the cell) or bud out gently (stealing membrane to form an envelope)', tone: 'output' },
          ],
          loop: 'each released virus can now infect further cells',
        },
        { t: 'callout', tone: 'fact', title: 'Why a virus isn’t clearly "alive"', text: 'Outside a host cell, a virus does nothing, no metabolism, no movement, no reproduction. It is, by most strict biological definitions, inert: essentially a genetic payload in a protective shell, which only becomes "active" once it successfully hijacks a living cell’s machinery. This is exactly why viruses cannot be grown on a nutrient plate the way bacteria can, they need living host cells to replicate at all.' },
      ],
    },
    {
      id: 'why-envelope-matters',
      title: 'Why the envelope matters outside the body',
      blocks: [
        { t: 'p', text: 'A lipid envelope is structurally similar to a soap bubble, and soap genuinely destroys it the same way it breaks down any fatty membrane, disrupting the virus so it can no longer infect a cell. This single structural fact explains a surprising amount of real public health advice.' },
        {
          t: 'table',
          head: ['Virus type', 'Vulnerability to soap/alcohol', 'Example'],
          rows: [
            ['Enveloped', 'High, the envelope is easily disrupted, destroying the virus', 'Influenza, coronaviruses, HIV, herpesviruses'],
            ['Non-enveloped', 'Lower, the bare capsid is tougher and more chemically resistant', 'Norovirus, rhinovirus (a common-cold virus), poliovirus'],
          ],
          caption: 'This is one reason hand sanitiser (mostly alcohol) is less reliable against norovirus specifically than thorough soap-and-water handwashing, norovirus has no fragile envelope for alcohol to easily disrupt, but soap’s physical washing-away effect still works regardless.',
        },
      ],
    },
  ],
  sources: [
    'Flint, S. J., Racaniello, V. R., Rall, G. F., Hatziioannou, T., & Skalka, A. M. (2020). *Principles of Virology* (5th ed.). ASM Press.',
    'Louten, J. (2016). *Essential Human Virology*. Academic Press.',
  ],
  related: ['medicine/microbiology/bacteria-and-antibiotics', 'medicine/microbiology/how-infections-spread', 'medicine/immunology/innate-immunity'],
}

export default guide
