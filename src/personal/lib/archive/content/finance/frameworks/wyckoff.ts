import type { Guide } from '../../../guide'
import { pathRows } from '../../../../finance/series'

// Accumulation: selling climax, automatic rally, secondary test, a range, the spring,
// a sign of strength, the last point of support, then markup.
const ACC = pathRows([120, 98, 108, 99.5, 106, 95.5, 104, 101, 110.5, 105, 121], 4, 51)

const guide: Guide = {
  intro:
    'Richard Wyckoff, a stock-market pioneer of the early 1900s, taught that markets move in cycles of **accumulation** and **distribution** by large, informed operators, which he personified as the "Composite Man". By reading price and volume in trading ranges, you can try to see what the big players are doing.',
  nutshell: [
    'Four market phases: **accumulation → markup → distribution → markdown**.',
    'Three laws: **supply and demand**, **cause and effect**, **effort versus result**.',
    'Key events in accumulation: selling climax, automatic rally, secondary test, **spring**, sign of strength, last point of support.',
    'Distribution mirrors it, with an **upthrust** in place of the spring.',
  ],
  sections: [
    {
      id: 'laws',
      title: 'The three laws',
      blocks: [
        {
          t: 'cards',
          cols: 3,
          items: [
            { title: 'Supply and demand', body: 'When demand exceeds supply, prices rise; when supply exceeds demand, they fall. Volume shows which side is active.' },
            { title: 'Cause and effect', body: 'The length of a trading range (the cause) relates to the size of the move that follows (the effect). Point-and-figure counts were used to estimate it.' },
            { title: 'Effort versus result', body: 'Volume is effort; price change is result. Huge volume with little price progress warns that the move is being absorbed.' },
          ],
        },
      ],
    },
    {
      id: 'accumulation',
      title: 'The accumulation schematic',
      blocks: [
        {
          t: 'candles',
          rows: ACC,
          title: 'Wyckoff accumulation, annotated',
          height: 380,
          points: [
            { i: 3, label: 'SC', at: 'low' },
            { i: 7, label: 'AR', at: 'high' },
            { i: 11, label: 'ST', at: 'low' },
            { i: 19, label: 'Spring', at: 'low' },
            { i: 31, label: 'SOS', at: 'high' },
            { i: 35, label: 'LPS', at: 'low' },
          ],
          boxes: [
            { from: 0, to: 11, label: 'Phase A', color: 'var(--pink)' },
            { from: 12, to: 17, label: 'B', color: 'var(--lavender)' },
            { from: 18, to: 23, label: 'C', color: 'var(--mustard)' },
            { from: 24, to: 35, label: 'Phase D', color: 'var(--mint)' },
            { from: 36, to: 39, label: 'E', color: 'var(--mint)' },
          ],
          lines: [
            { y: 108, label: 'Range top (AR)', at: 12 },
            { y: 98.5, label: 'Range bottom (SC)', at: 24 },
          ],
        },
        {
          t: 'terms',
          items: [
            { term: 'SC: selling climax', def: 'Panic selling on huge volume, absorbed by large buyers.' },
            { term: 'AR: automatic rally', def: 'A bounce as selling exhausts; its high sets the top of the range.' },
            { term: 'ST: secondary test', def: 'A retest of the SC area on lower volume.' },
            { term: 'Phase B', def: 'Building the cause: the range where large operators accumulate.' },
            { term: 'Spring', def: 'A brief break below support that quickly reverses, shaking out weak holders. The classic low-risk entry.' },
            { term: 'SOS: sign of strength', def: 'A rally through the range on expanding volume.' },
            { term: 'LPS: last point of support', def: 'A pullback that holds above the old range: another entry.' },
          ],
        },
        { t: 'callout', tone: 'fact', title: 'A man of many firsts', text: 'Wyckoff founded *The Magazine of Wall Street* in 1907, which reached hundreds of thousands of readers, and ran one of the first correspondence courses on trading. He was said to own nine and a half acres in the Hamptons next to General Motors’ founder.' },
      ],
    },
  ],
  sources: ['Wyckoff, R. D. (1931). *The Richard D. Wyckoff Method of Trading and Investing in Stocks*. Wyckoff Associates.', 'Pruden, H. O. (2007). *The Three Skills of Top Trading*. Wiley.'],
  related: ['finance/technical/volume', 'finance/technical/trends', 'finance/frameworks/elliott'],
}

export default guide
