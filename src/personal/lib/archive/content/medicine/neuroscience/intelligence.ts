import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Intelligence is one of the most studied and most argued-over ideas in psychology. People who do well on one kind of mental test tend to do well on others, which suggests something general at work. But tests capture only part of what “smart” means, and the roles of genes, environment and the brain are all more subtle than headlines suggest. This guide sets out what is well established, what is uncertain, and what it means for anyone hoping to improve their own thinking.',
  nutshell: [
    'Scores on different cognitive tests correlate, so researchers describe a general factor, **g**. **IQ tests** estimate it, and predict school and work outcomes moderately well.',
    'Useful distinctions: **fluid intelligence** (reasoning with new problems, which declines with age) and **crystallised intelligence** (accumulated knowledge and skill, which keeps growing).',
    'Genes and environment both matter. Estimates of **heritability** rise from childhood to adulthood, but they describe a population, not an individual’s limits.',
    'In the brain, intelligence is linked to **efficient, well-connected networks** (frontoparietal and others) more than to simple size. Brain volume has only a modest correlation with IQ.',
    'IQ is **not fixed**. Education, health, nutrition and practice all shift cognitive performance, and average scores rose through the twentieth century (the **Flynn effect**).',
  ],
  sections: [
    {
      id: 'what',
      title: 'What “intelligence” means to researchers',
      blocks: [
        { t: 'p', text: 'In 1904 Charles Spearman noticed that children’s school marks in different subjects correlated, and proposed a single underlying factor, **g**. Modern models, such as the Cattell-Horn-Carroll model, arrange abilities in layers: g at the top, broad abilities beneath it, and narrow skills beneath those.' },
        {
          t: 'table',
          head: ['Broad ability', 'What it covers', 'Typical change with age'],
          rows: [
            ['Fluid reasoning', 'Solving new problems, spotting patterns, abstract logic', 'Peaks in early adulthood, declines gradually'],
            ['Crystallised knowledge', 'Vocabulary, general knowledge, learned skills', 'Keeps growing into later life'],
            ['Working memory and processing speed', 'Holding and manipulating information; mental quickness', 'Decline from early adulthood'],
            ['Visual-spatial', 'Mental rotation, navigation, imagining shapes', 'Varies; trainable to a degree'],
            ['Long-term memory and retrieval', 'Storing and recalling information', 'Varies with practice and health'],
          ],
          caption: 'A simplified summary of the Cattell-Horn-Carroll model.',
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'What IQ tests do and do not say',
          text: 'An IQ score is relative to others of the same age, set so that the average is 100 and about two thirds of people score between 85 and 115. It predicts school performance and, more weakly, job performance and some health outcomes. It does not measure creativity, wisdom, character, motivation or practical skill, and it should not be read as a fixed worth.',
        },
      ],
    },
    {
      id: 'genes',
      title: 'Genes, environment and the Flynn effect',
      blocks: [
        {
          t: 'bars',
          title: 'Typical heritability estimates of IQ by age (illustrative)',
          items: [
            { label: 'Childhood', value: 0.3 },
            { label: 'Adolescence', value: 0.5 },
            { label: 'Adulthood', value: 0.7 },
          ],
          unit: 'share of variation',
          min: 0,
          max: 1,
          decimals: 1,
          caption: 'Illustrative round figures from twin and adoption studies, which vary by sample. The pattern that matters is that estimated heritability tends to rise with age. A high heritability does not mean a trait cannot be changed, and it describes differences in a population, not how much of one person’s IQ is “from genes”.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Genes', title: 'Many small effects', body: 'Intelligence is influenced by thousands of genetic variants, each with a tiny effect. No single “intelligence gene” exists.' },
            { tag: 'Environment', title: 'Opportunity matters', body: 'Nutrition, health, schooling, stimulation and stress all shape development. In poorer conditions, environment accounts for more of the differences between children.' },
            { tag: 'Education', title: 'Schooling raises scores', body: 'A review of studies found that each additional year of education raises IQ by a few points on average.' },
            { tag: 'Flynn effect', title: 'Scores rose in the 20th century', body: 'Average IQ scores increased by roughly three points per decade in many countries, too fast for genes to explain. More recently the trend has stalled or reversed in some countries, and the reasons are debated.' },
          ],
        },
      ],
    },
    {
      id: 'brain',
      title: 'What the brain has to do with it',
      blocks: [
        { t: 'p', text: 'Larger brains are only weakly associated with higher IQ: meta-analyses put the correlation at roughly 0.2 to 0.4, which means size explains only a small part of the differences between people. What seems to matter more is how the brain is wired and how it works.' },
        {
          t: 'list',
          items: [
            '**The P-FIT idea**: intelligence relies on a network linking frontal and parietal regions with temporal and occipital areas. People with better-connected networks tend to score higher.',
            '**Efficiency**: people who solve problems well often show less, not more, brain activation for the same task, suggesting more efficient processing.',
            '**White matter**: the integrity of the fibre tracts that link regions (insulated by myelin) relates to processing speed and reasoning.',
            '**Development**: the cortex thins and connections are pruned through adolescence; the pace and pattern of this development relates to later ability.',
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Be sceptical of brain-scan claims', text: 'Studies that link a brain feature to IQ often use small samples and find small effects that do not always replicate. Beware headlines that claim a scan can read intelligence in an individual.' },
      ],
    },
    {
      id: 'limits',
      title: 'Other kinds of smart',
      blocks: [
        {
          t: 'table',
          head: ['Idea', 'What it claims', 'Status'],
          rows: [
            ['Multiple intelligences (Gardner)', 'Several independent intelligences, such as musical, spatial and interpersonal', 'Popular in education, but research finds general ability underlies many of them; weak as a scientific theory, though useful as a reminder of variety'],
            ['Emotional intelligence', 'Skill in perceiving and managing emotions', 'Some measures predict social outcomes modestly; overlaps with personality and general ability'],
            ['Grit and conscientiousness', 'Persistence and discipline predict achievement', 'Conscientiousness predicts achievement; whether “grit” adds beyond it is debated'],
            ['Growth mindset', 'Believing ability can grow improves learning', 'Mixed: strong claims have not always replicated, but small benefits for some students in some contexts'],
            ['Wisdom and judgement', 'Good decisions in complex, uncertain situations', 'Poorly captured by IQ tests; develops with experience and reflection'],
          ],
        },
        { t: 'links', items: [{ path: 'medicine/neuroscience/optimising-intelligence', note: 'Next: what the evidence says about improving it' }, { path: 'teaching/theories/myths', note: 'Myths about learning' }] },
      ],
    },
  ],
  sources: [
    'Deary, I. J. (2012). Intelligence. Annual Review of Psychology.',
    'Plomin, R., and von Stumm, S. (2018). The new genetics of intelligence. Nature Reviews Genetics.',
    'Ritchie, S. J., and Tucker-Drob, E. M. (2018). How much does education improve intelligence? A meta-analysis. Psychological Science.',
    'Pietschnig, J., et al. (2015). Meta-analysis of associations between human brain volume and intelligence differences. Neuroscience and Biobehavioral Reviews.',
    'Jung, R. E., and Haier, R. J. (2007). The parieto-frontal integration theory (P-FIT) of intelligence. Behavioral and Brain Sciences.',
    'Bratsberg, B., and Rogeberg, O. (2018). Flynn effect and its reversal are both environmentally caused. PNAS.',
  ],
  related: ['medicine/neuroscience/optimising-intelligence', 'medicine/neuroscience/making-sense', 'teaching/theories/myths'],
}

export default guide
