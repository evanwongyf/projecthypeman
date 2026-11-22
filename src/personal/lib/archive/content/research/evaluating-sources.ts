import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'Not everything you find deserves your trust. Judging a source means asking who made it, why, and how they know, and checking what others say about it. Two approaches work well together: the **CRAAP test** for scholarly sources and **lateral reading** for anything online.',
  nutshell: [
    'CRAAP: **Currency, Relevance, Authority, Accuracy, Purpose**.',
    'Professional fact-checkers read **laterally**: they leave the page and see what other sources say about it.',
    'SIFT: **Stop, Investigate the source, Find better coverage, Trace claims** to their origin.',
    'Peer review, citations and a clear method are good signs, but not guarantees.',
  ],
  sections: [
    {
      id: 'craap',
      title: 'The CRAAP test',
      lead: 'Developed at California State University, Chico.',
      blocks: [
        {
          t: 'table',
          head: ['Criterion', 'Questions to ask'],
          rows: [
            ['Currency', 'When was it published or updated? Is that recent enough for your topic? (For technology or medicine, a few years can be too old; for history, age may not matter.)'],
            ['Relevance', 'Does it actually address your question? Is it at the right level for your work?'],
            ['Authority', 'Who is the author? What are their qualifications? Who published it? Is there contact information?'],
            ['Accuracy', 'Is the evidence cited? Can you verify it elsewhere? Was it peer reviewed? Are there obvious errors?'],
            ['Purpose', 'Why does it exist: to inform, sell, persuade, entertain? Is there a clear bias or conflict of interest?'],
          ],
        },
      ],
    },
    {
      id: 'lateral',
      title: 'Read laterally',
      lead: 'How professional fact-checkers do it.',
      blocks: [
        {
          t: 'p',
          text: 'Researchers at Stanford compared how historians, students and professional fact-checkers judged websites (Wineburg & McGrew, 2019). Historians and students read **vertically**: they stayed on the page, studying its design, "About" section and content. Fact-checkers read **laterally**: within seconds they opened new tabs to see what other sources said about the site and its authors. They reached better judgements far faster.',
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Looks can deceive',
          text: 'A professional design, a .org address, citations and an official-sounding name are easy to fake. An organisation’s "About" page tells you what it wants you to think. Find out what independent sources say.',
        },
      ],
    },
    {
      id: 'sift',
      title: 'SIFT',
      lead: 'Mike Caulfield’s four moves.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Stop', body: 'Before reading or sharing, pause. Do you know this source? What is your purpose? Strong emotional reactions are a signal to slow down.' },
            { title: 'Investigate the source', body: 'Spend a minute finding out who is behind it. Search the name of the site or author and read what others say (Wikipedia is often useful here).' },
            { title: 'Find better coverage', body: 'Look for trusted reporting or research on the same claim. If you cannot find it anywhere reliable, be wary.' },
            { title: 'Trace claims to the original', body: 'Follow quotes, statistics and images back to where they first appeared. Were they reported accurately, or taken out of context?' },
          ],
        },
      ],
    },
    {
      id: 'scholarly',
      title: 'Scholarly sources',
      blocks: [
        {
          t: 'list',
          items: [
            '**Peer review** means other experts checked the work before publication. It raises quality but does not guarantee correctness.',
            '**Primary sources** report original research or are first-hand evidence. **Secondary sources** interpret or summarise them. **Tertiary sources** (encyclopedias, textbooks) summarise the field.',
            'One study is rarely the final word. Look for reviews and meta-analyses, which combine many studies.',
            'Check who funded research, and whether the authors declare conflicts of interest.',
            'Beware of **predatory journals** that publish anything for a fee. Check whether the journal is indexed in major databases.',
          ],
        },
      ],
    },
  ],
  sources: [
    'Meriam Library, California State University, Chico. (2010). *Evaluating information: Applying the CRAAP test*.',
    'Wineburg, S., & McGrew, S. (2019). Lateral reading and the nature of expertise: Reading less and learning more when evaluating digital information. *Teachers College Record, 121*(11).',
    'Caulfield, M. (2019). *SIFT (the four moves)*. hapgood.us',
    'Wineburg, S., Breakstone, J., McGrew, S., Smith, M., & Ortega, T. (2022). Lateral reading on the open Internet: A district-wide field study in high school government classes. *Journal of Educational Psychology, 114*(5), 893–909.',
  ],
  related: ['research/finding-sources', 'thinking/numbers', 'thinking/biases'],
}

export default guide
