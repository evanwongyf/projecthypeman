import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'Finding good sources is a skill, not luck. A few search techniques and knowing where to look will get you better material in less time than scrolling through the first page of a web search.',
  nutshell: [
    'Turn your question into **keywords**, plus synonyms and related terms.',
    'Use **Boolean operators**: AND narrows, OR widens, NOT excludes, "quotes" match exact phrases.',
    'Search where scholarly sources live: **library databases** and **Google Scholar**, not just the open web.',
    'Follow the trail: a good source’s reference list and "cited by" links lead to more.',
  ],
  sections: [
    {
      id: 'keywords',
      title: 'From question to keywords',
      blocks: [
        {
          t: 'example',
          title: 'Question: How does phone use at night affect sleep in teenagers?',
          lines: [
            { label: 'Concept 1', text: 'phone · smartphone · screen time · mobile device · bedtime media' },
            { label: 'Concept 2', text: 'sleep · sleep quality · sleep duration · insomnia' },
            { label: 'Concept 3', text: 'teenagers · adolescents · young people · youth · secondary students' },
          ],
        },
        {
          t: 'p',
          text: 'Researchers often use more formal terms than everyday speech: "adolescents" rather than "teens". When you find a useful source, look at its title, abstract and listed keywords for more search terms.',
        },
      ],
    },
    {
      id: 'boolean',
      title: 'Search operators',
      blocks: [
        {
          t: 'table',
          head: ['Operator', 'What it does', 'Example'],
          rows: [
            ['AND', 'Both terms must appear. Narrows results.', 'sleep AND adolescents'],
            ['OR', 'Either term. Widens results; use for synonyms.', 'smartphone OR "mobile phone"'],
            ['NOT', 'Excludes a term.', 'sleep NOT apnea'],
            ['"Quotes"', 'Exact phrase.', '"screen time"'],
            ['( )', 'Groups terms.', '(smartphone OR "screen time") AND sleep AND (adolescents OR teenagers)'],
            ['*', 'Truncation: different endings. Works in most databases.', 'adolescen* finds adolescent, adolescents, adolescence'],
            ['site:', 'Web search: limit to a domain.', 'sleep adolescents site:gov'],
            ['filetype:', 'Web search: limit to a file type.', 'sleep report filetype:pdf'],
          ],
        },
      ],
    },
    {
      id: 'where',
      title: 'Where to search',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Library catalogue and databases', body: 'Your school or university library pays for databases of journals, newspapers and e-books. Examples include JSTOR, EBSCO, ProQuest, PubMed (medicine) and ERIC (education). Ask a librarian; it is their job and they are good at it.' },
            { title: 'Google Scholar', body: 'Searches scholarly literature across disciplines. Use "Cited by" to find newer work that builds on a source, and "Related articles" for similar ones. Some results are behind paywalls.' },
            { title: 'Open access', body: 'Many papers are free legally: look for PDF links in Scholar, repositories like arXiv or PubMed Central, or tools like Unpaywall.' },
            { title: 'Reference works', body: 'Encyclopedias (including Wikipedia) are great for background and for finding keywords and sources in their references. Do not usually cite them as your main evidence.' },
            { title: 'Official sources', body: 'Government statistics, reports from international bodies (WHO, UN, OECD), court records, company filings.' },
            { title: 'Books', body: 'For big overviews and deep arguments, especially in humanities. Check the index and the bibliography.' },
          ],
        },
      ],
    },
    {
      id: 'trail',
      title: 'Following the trail',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Find one good source', body: 'Ideally a recent review article or book chapter that surveys the topic.' },
            { title: 'Look backward', body: 'Check its reference list for the key sources it relies on.' },
            { title: 'Look forward', body: 'Use "Cited by" in Google Scholar to find newer work that cites it.' },
            { title: 'Note names', body: 'Authors who appear again and again are the key researchers. Search for their other work.' },
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Keep a search log',
          text: 'Note the database, search terms and date for each search, and save sources as you go with full citation details. It saves hours when you write your [references](@research/references).',
        },
      ],
    },
  ],
  sources: [
    'Booth, W. C., et al. (2016). *The craft of research* (4th ed.). University of Chicago Press.',
    'Google Scholar Help. *Search tips*. scholar.google.com/intl/en/scholar/help.html',
  ],
  related: ['research/evaluating-sources', 'research/reading-papers', 'research/references'],
}

export default guide
