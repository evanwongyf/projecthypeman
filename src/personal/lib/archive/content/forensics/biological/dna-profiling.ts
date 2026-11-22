import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'DNA profiling is the most rigorously validated method in the forensic laboratory, and it is the standard others are now judged against. It does not read a person’s whole genome. It measures the lengths of a couple of dozen highly variable stretches of DNA and asks how often that combination would turn up by chance.',
  nutshell: [
    'A profile is built from **short tandem repeats (STRs)**: short DNA “words” repeated a variable number of times at fixed places (**loci**) in the genome.',
    '**PCR** copies those regions billions of times, so a few cells can be enough.',
    '**Capillary electrophoresis** sorts the copies by length; the result is an electropherogram of peaks, each peak an allele.',
    'The **product rule** multiplies genotype frequencies across loci into a **random match probability**, often smaller than one in a billion for a full single-source profile.',
    'The hard problems are **mixtures**, **tiny or degraded samples**, **transfer** (how the DNA got there), and the **statistics** being misread in court.',
  ],
  sections: [
    {
      id: 'strs',
      title: 'What is measured: short tandem repeats',
      blocks: [
        { t: 'p', text: 'At an STR locus, a 4-letter motif such as **GATA** repeats several times in a row. One person might inherit 8 repeats from their mother and 11 from their father, written as genotype **8,11**. Because there are many possible repeat counts and the loci are inherited independently, the combination across many loci is highly distinctive.' },
        { t: 'table', head: ['System', 'Loci', 'Notes'], rows: [
          ['US CODIS core set', '20 (since 2017; previously 13)', 'Plus amelogenin, a sex-typing marker'],
          ['UK / Europe (DNA-17, ESS)', '16–17', 'Shared core loci allow cross-border comparisons'],
          ['Y-STR', 'Varies', 'Male line only; shared by paternal relatives, so much less discriminating'],
          ['Mitochondrial DNA', 'Sequence, not STRs', 'Maternal line; used for hair shafts, bones, very degraded samples'],
        ] },
      ],
    },
    {
      id: 'pipeline',
      title: 'From swab to profile',
      blocks: [
        { t: 'flow', nodes: [
          { label: 'Extraction', sub: 'free DNA from cells', tone: 'data' },
          { label: 'Quantitation', sub: 'how much human DNA?', tone: 'process' },
          { label: 'PCR', sub: 'copy the STR loci', tone: 'process' },
          { label: 'Electrophoresis', sub: 'sort by length', tone: 'model' },
          { label: 'Interpretation', sub: 'call alleles, compare, weigh', tone: 'human' },
        ] },
        {
          t: 'math',
          tex: String.raw`N = N_0\,(1+E)^{n}`,
          caption: 'Each PCR cycle can at most double the number of copies, which is why a sample of a few cells becomes enough to analyse.',
          where: [
            { sym: 'N_0', def: 'Starting copies of the target region' },
            { sym: 'E', def: 'Efficiency per cycle, from 0 (no copying) to 1 (perfect doubling)' },
            { sym: 'n', def: 'Number of cycles, typically about 28–30 in forensic kits' },
          ],
          syntax: [
            { sym: '(1+E)^{n}', say: '“one plus E, to the power n”: multiply the growth factor by itself n times, once per cycle' },
            { sym: 'N_0\\,(\\ldots)', say: 'the small space just means multiply N-nought by the bracket' },
          ],
          worked: {
            title: '10 starting copies, 30 cycles',
            steps: [
              String.raw`Perfect efficiency: \(N = 10 \times 2^{30} = 10 \times 1{,}073{,}741{,}824\)`,
              String.raw`\(= 10{,}737{,}418{,}240\), about \(1.07 \times 10^{10}\) copies`,
              String.raw`At 90% efficiency: \(N = 10 \times 1.9^{30} \approx 2.30 \times 10^{9}\)`,
            ],
            answer: String.raw`Even at realistic efficiency, 30 cycles turn 10 copies into over two billion, and the same power amplifies any contaminating DNA too.`,
          },
        },
        { t: 'p', text: 'Fluorescent dyes on the PCR primers let several loci of overlapping size run in one capillary. The electropherogram shows one peak at a locus for a homozygote (both copies the same) and two for a heterozygote. Artefacts such as **stutter** (a small peak one repeat shorter than a true allele) must be recognised and discounted.' },
      ],
    },
    {
      id: 'statistics',
      title: 'How rare is the profile? The product rule',
      blocks: [
        { t: 'p', text: 'A match on its own means little until we know how many other people would match. Using allele frequencies from population databases and assuming the population is in Hardy–Weinberg equilibrium, the expected frequency of a genotype is \\(p^2\\) for a homozygote and \\(2pq\\) for a heterozygote. Because the loci are inherited independently, the frequencies multiply.' },
        {
          t: 'math',
          tex: String.raw`\text{RMP} = \prod_{i=1}^{L} f_i, \qquad f_i = \begin{cases} p_i^2 & \text{homozygote} \\ 2\,p_i\,q_i & \text{heterozygote} \end{cases}`,
          caption: 'Random match probability: the chance that an unrelated person chosen at random from the population would have this profile. The illustrative frequencies below are invented for teaching; real casework uses published database values and a correction for population substructure.',
          where: [
            { sym: 'p_i, q_i', def: 'Population frequencies of the two alleles seen at locus i' },
            { sym: 'f_i', def: 'Expected frequency of that genotype at locus i' },
            { sym: 'L', def: 'Number of loci typed' },
          ],
          syntax: [
            { sym: '\\prod_{i=1}^{L}', say: '“the product from i equals 1 to L”: multiply together one term for every locus' },
            { sym: '\\left\\{ \\begin{matrix} a \\\\ b \\end{matrix} \\right.', say: 'the big left brace means “one of these cases”: use the top line if the condition written on its right holds (a homozygote), otherwise the bottom line' },
            { sym: 'p_i^2', say: '“p sub i squared”: allele frequency times itself' },
          ],
          worked: {
            title: 'Three loci with made-up frequencies',
            steps: [
              String.raw`Locus 1, heterozygote with \(p = 0.10\), \(q = 0.20\): \(f_1 = 2 \times 0.10 \times 0.20 = 0.04\)`,
              String.raw`Locus 2, homozygote with \(p = 0.15\): \(f_2 = 0.15^2 = 0.0225\)`,
              String.raw`Locus 3, heterozygote with \(p = 0.08\), \(q = 0.12\): \(f_3 = 2 \times 0.08 \times 0.12 = 0.0192\)`,
              String.raw`Multiply: \(0.04 \times 0.0225 \times 0.0192 = 0.00001728\)`,
              String.raw`As “1 in N”: \(1 / 0.00001728 \approx 57{,}870\)`,
            ],
            answer: String.raw`About 1 in 58,000 from just three loci. Each further locus multiplies again by a fraction like 0.02–0.1, which is how 20 loci reach figures far below one in a billion.`,
          },
        },
        { t: 'callout', tone: 'warn', title: 'What the number is not', text: 'An RMP of 1 in a billion is *not* the probability that the defendant is innocent, and it does not apply to relatives (siblings share far more DNA) or to identical twins, who share a profile. Confusing these is the **prosecutor’s fallacy**, see [evidence statistics](@forensics/reliability/evidence-statistics).' },
      ],
    },
    {
      id: 'hard-cases',
      title: 'Mixtures, genealogy and limits',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Mixtures', body: 'Two or more contributors produce overlapping peaks. Working out who contributed what is hard; labs increasingly use **probabilistic genotyping** software (e.g. STRmix, TrueAllele) that reports a likelihood ratio. PCAST (2016) judged these methods validated only for limited mixture complexity.', tag: 'interpretation' },
            { title: 'Low template and transfer', body: 'Modern kits detect DNA from a handful of cells. That means DNA can be found on items a person never touched, via **secondary transfer**. A clean profile answers “whose DNA?”, not “how did it get there?”.', tag: 'activity' },
            { title: 'Degradation', body: 'Heat, moisture and UV break DNA into fragments; longer loci drop out first, leaving partial profiles with weaker statistics.', tag: 'quality' },
            { title: 'Forensic genetic genealogy', body: 'Hundreds of thousands of SNPs are compared against consumer genealogy databases that permit law-enforcement use, finding distant relatives and then building family trees. It identified the “Golden State Killer” in 2018 and raises real consent and privacy questions; the US DOJ issued an interim policy in 2019.', tag: 'investigative lead' },
          ],
        },
        { t: 'checklist', items: [
          'Was the profile single-source or a mixture, and how many contributors were assumed?',
          'Which population database and substructure correction were used?',
          'Were negative controls and staff elimination profiles clean?',
          'Could the DNA have arrived by innocent or secondary transfer?',
          'Is the reported statistic an RMP or a likelihood ratio, and is it being phrased correctly?',
        ] },
      ],
    },
  ],
  sources: [
    'Butler, J. M. (2015). *Advanced Topics in Forensic DNA Typing: Interpretation*. Academic Press.',
    'National Research Council (1996). *The Evaluation of Forensic DNA Evidence* (NRC II). National Academies Press.',
    'President’s Council of Advisors on Science and Technology (2016). *Forensic Science in Criminal Courts: Ensuring Scientific Validity of Feature-Comparison Methods*.',
    'Gill, P. (2014). *Misleading DNA Evidence: Reasons for Miscarriages of Justice*. Academic Press.',
  ],
  related: ['forensics/reliability/evidence-statistics', 'forensics/biological/bloodstain-patterns', 'forensics/start-here'],
}

export default guide
