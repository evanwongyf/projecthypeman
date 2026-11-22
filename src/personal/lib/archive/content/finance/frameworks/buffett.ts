import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Warren Buffett never published a checklist, but Robert Hagstrom distilled his letters into twelve tenets in *The Warren Buffett Way*. They group into four questions: is it a good business, run by good people, with good economics, at a good price?',
  nutshell: [
    'Stay within your **circle of competence**: businesses you understand.',
    'Judge managers on rationality, candour and independence from the herd.',
    'Focus on **return on equity**, **owner earnings** and **margins**, not just EPS growth.',
    'The **one-dollar test**: every dollar retained should create at least a dollar of market value.',
    'Buy at a discount to intrinsic value, and be prepared to hold for a very long time.',
  ],
  sections: [
    {
      id: 'tenets',
      title: 'The twelve tenets',
      blocks: [
        {
          t: 'table',
          head: ['Group', 'Tenet'],
          rows: [
            ['Business', 'Is it simple and understandable?'],
            ['', 'Does it have a consistent operating history?'],
            ['', 'Does it have favourable long-term prospects?'],
            ['Management', 'Is management rational (about allocating capital)?'],
            ['', 'Is management candid with shareholders?'],
            ['', 'Does management resist the "institutional imperative" (copying peers)?'],
            ['Financial', 'Focus on return on equity, not earnings per share'],
            ['', 'Calculate owner earnings'],
            ['', 'Look for high profit margins'],
            ['', 'For every dollar retained, has at least one dollar of market value been created?'],
            ['Value', 'What is the value of the business?'],
            ['', 'Can it be bought at a significant discount to that value?'],
          ],
        },
      ],
    },
    {
      id: 'owner',
      title: 'Owner earnings and the one-dollar test',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{Owner earnings} = \text{Net income} + D\&A - \text{Maintenance CapEx} - \Delta\text{Working capital}`,
          where: [
            { sym: String.raw`D\&A`, def: 'Depreciation and amortisation added back, since it is a non-cash charge' },
            { sym: 'Maintenance CapEx', def: 'Capital spending needed just to keep the existing business competitive, not to grow it' },
            { sym: String.raw`\Delta\text{Working capital}`, def: 'Cash tied up (or freed) by changes in inventory, receivables and payables' },
          ],
          syntax: [
            { sym: String.raw`D\&A`, say: 'Read "D and A": depreciation and amortisation. An accounting charge that reduces profit but sends no cash out the door, so you add it back.' },
            { sym: String.raw`\Delta`, say: String.raw`Read "delta" or "the change in". \(\Delta\text{Working capital}\) is this year’s working capital minus last year’s. A rise ties up cash, so you subtract it.` },
          ],
          worked: {
            title: 'A mid-sized manufacturer (millions)',
            steps: [
              String.raw`Given: net income 800, D&A 300, maintenance capex 350, working capital up by 40 (so \(\Delta = +40\)).`,
              String.raw`Substitute: \(800 + 300 - 350 - 40\).`,
              String.raw`Add back D&A: \(800 + 300 = 1{,}100\).`,
              String.raw`Subtract capex and the working-capital build: \(1{,}100 - 350 - 40 = 710\).`,
              String.raw`With a market value of 9,000, owner earnings yield \(710/9{,}000 \approx 7.9\%\).`,
            ],
            answer: 'Owner earnings are 710, about 11% below reported net income of 800, because the business must spend more (350) than it depreciates (300) to stand still.',
          },
          caption: 'From Buffett’s 1986 letter: the cash an owner could take out each year without harming the business. Close to free cash flow, but counting only the capital spending needed to stay competitive, not grow. When owner earnings run well below net income for years, depreciation is understating what the business must reinvest just to stand still; when they run above it, the business is cheaper than the earnings line suggests.',
        },
        {
          t: 'metric',
          name: 'owner earnings',
          shows: 'the cash a hands-off owner could pocket each year once the business has spent what it genuinely needs to defend its position, not what management chooses to spend on growth. It strips out the main way reported earnings mislead: depreciation assumptions or working-capital swings that make net income look better or worse than the cash actually coming out the other end.',
          eli5: 'If you owned the whole business outright, owner earnings is the cheque you could write yourself every year without it slowly falling apart. Net income is what the accountants say you made; owner earnings is what you could actually spend.',
          higher: 'Owner earnings running above net income means accounting understates a cash machine, heavy non-cash depreciation or shrinking working-capital needs suppress reported profit relative to the real cash thrown off. These businesses often look more expensive on P/E than they really are.',
          lower: 'Owner earnings running well below net income is the warning sign: the business needs heavy, recurring capital spending just to stay in place (airlines, telecoms, heavy manufacturing), so reported profit overstates what an owner could extract. A low or negative figure despite positive net income means dig into the capex line, not the headline EPS.',
          typical: 'Asset-light, high-margin businesses (software, branded goods) often show owner earnings close to or above net income; capital-intensive ones routinely run 20–40% below net income once maintenance capex is backed out.',
        },
        {
          t: 'math',
          tex: String.raw`\frac{\Delta\,\text{Market value over } n \text{ years}}{\sum \text{Retained earnings over } n \text{ years}} \ge 1`,
          where: [
            { sym: 'n', def: 'Number of years measured, typically five or ten' },
            { sym: 'Retained earnings', def: 'Profit kept in the business rather than paid out as dividends' },
          ],
          syntax: [
            { sym: String.raw`\Delta\,\text{Market value}`, say: String.raw`Read "the change in market value". End value minus start value over the \(n\)-year window.` },
            { sym: String.raw`\sum \text{Retained earnings}`, say: 'Read "the sum of retained earnings". Add up the profit kept each year across the whole window.' },
          ],
          worked: {
            title: 'Five years of retained profit (millions)',
            steps: [
              'Given: retained earnings of 90, 100, 110, 95 and 105 in five successive years. Market value rose from 6,000 to 6,800.',
              String.raw`Sum of retained earnings: \(90 + 100 + 110 + 95 + 105 = 500\).`,
              String.raw`Change in market value: \(6{,}800 - 6{,}000 = 800\).`,
              String.raw`Ratio: \(800/500 = 1.6\).`,
              String.raw`Had market value risen only 300, the ratio would be \(300/500 = 0.6\).`,
            ],
            answer: 'Each retained dollar created 1.60 of market value, so management allocated capital well; a ratio of 0.6 would mean shareholders were better off with the cash.',
          },
          caption: 'Buffett’s one-dollar test. If a company kept $500 million of profit over five years and its market value rose by $800 million, each retained dollar created $1.60 of value: management allocated capital well. A ratio below 1 means the business destroyed value with the money it kept, shareholders would have been better off receiving that cash as a dividend than having it reinvested.',
        },
        { t: 'callout', tone: 'fact', title: 'From Graham to See’s Candies', text: 'Buffett’s 1972 purchase of See’s Candies for $25 million, about three times book value, marked his shift from Graham’s cheap stocks to great businesses. See’s went on to generate over $2 billion of pre-tax profit for Berkshire, with little extra capital.' },
      ],
    },
  ],
  sources: ['Hagstrom, R. G. (2013). *The Warren Buffett Way* (3rd ed.). Wiley.', 'Buffett, W. E. (1986). Chairman’s letter. *Berkshire Hathaway Annual Report*.', 'Cunningham, L. A. (Ed.). (2019). *The Essays of Warren Buffett* (5th ed.). Carolina Academic Press.'],
  related: ['finance/fundamental/value-investing', 'finance/fundamental/quality', 'finance/frameworks/graham'],
}

export default guide
