import type { Guide } from '../../../guide'
import { EX } from '../../../../finance/examples'

const guide: Guide = {
  intro:
    'Candlestick charts come from 18th-century Japan, where rice traders recorded the open, high, low and close of each session as a little picture. Two and a half centuries later, they are the default chart on almost every trading screen in the world.',
  nutshell: [
    'Candlestick charting is traditionally credited to **Munehisa Homma** (1724–1803), a rice merchant from Sakata.',
    'Homma traded at the **Dojima Rice Exchange** in Osaka, recognised in 1730 and often called the world’s first organised futures market.',
    'The charts as we know them took shape later, during Japan’s Meiji era; the link to Homma is tradition as much as record.',
    '**Steve Nison** introduced candlesticks to Western traders with his 1991 book *Japanese Candlestick Charting Techniques*.',
    'Many pattern names are poetic Japanese images: stars, soldiers, crows, windows and pregnant women.',
  ],
  sections: [
    {
      id: 'rice',
      title: 'Rice, Osaka and the first futures',
      blocks: [
        {
          t: 'p',
          text: 'In Edo-period Japan, samurai were paid in rice, and rice was the economy’s money. At Dojima in Osaka, merchants traded receipts for rice that had not yet been delivered: **rice coupons**, an early form of futures contract. Because prices swung with harvests, weather and rumour, traders who could read the market’s mood had a real edge.',
        },
        {
          t: 'p',
          text: 'Homma is said to have kept detailed records of prices, weather and traders’ psychology, and to have become enormously rich; legends credit him with dozens of consecutive winning trades. His ideas about the emotion behind prices are summarised in the "Sakata rules" (*Sakata goho*), named after his home town.',
        },
        { t: 'callout', tone: 'fact', title: 'A samurai, eventually', text: 'Legend has it that Homma’s wealth and advice to the government earned him the honorary rank of samurai: a remarkable status for a merchant in a strict class system.' },
      ],
    },
    {
      id: 'sakata',
      title: 'Sakata’s five methods',
      blocks: [
        {
          t: 'table',
          head: ['Japanese', 'Meaning', 'Modern equivalent'],
          rows: [
            ['San-zan', 'Three mountains', 'A triple top, or head and shoulders'],
            ['San-sen', 'Three rivers', 'A triple bottom'],
            ['San-ku', 'Three gaps', 'Three gaps in a row signal an exhausted trend'],
            ['San-pei', 'Three soldiers', 'Three white soldiers: steady advance'],
            ['San-po', 'Three methods', 'Rising and falling three methods: a pause within a trend'],
          ],
          caption: 'The number three appears everywhere in candlestick lore.',
        },
        {
          t: 'candles',
          rows: EX.whiteSoldiers,
          title: 'San-pei: three white soldiers after a decline',
          boxes: [
            { from: 0, to: 4, label: 'Decline', color: 'var(--pink)' },
            { from: 5, to: 7, label: 'Three soldiers', color: 'var(--mint)' },
          ],
          caption: 'Three long rising candles, each opening inside the previous body and closing near its high.',
        },
      ],
    },
    {
      id: 'west',
      title: 'How candles came west',
      blocks: [
        {
          t: 'p',
          text: 'Western traders used line charts and bar charts (open-high-low-close bars) for most of the 20th century. In the late 1980s Steve Nison, an American analyst, learned about candlesticks from a Japanese broker, spent years translating Japanese sources, and published *Japanese Candlestick Charting Techniques* in 1991. Within a decade, candles had largely replaced bar charts on trading software.',
        },
        {
          t: 'terms',
          items: [
            { term: 'Doji (同時)', def: 'Roughly "at the same time": the open and close are at the same price.' },
            { term: 'Marubozu (丸坊主)', def: '"Close-cropped" or "bald head": a candle with no shadows.' },
            { term: 'Harami (孕み)', def: '"Pregnant": a small candle inside the previous large one, like a baby inside its mother.' },
            { term: 'Window (窓)', def: 'The Japanese name for a price gap: "the window was closed" means the gap was filled.' },
            { term: 'Takuri', def: 'A dragonfly doji or hammer: "trying to gauge the depth" with the long lower shadow.' },
          ],
        },
        { t: 'callout', tone: 'fact', title: 'Why "candle"?', text: 'The body looks like the wax, and the thin lines above and below look like the wick: the English term "wick" for a shadow comes straight from that picture.' },
      ],
    },
  ],
  sources: [
    'Nison, S. (1991). *Japanese Candlestick Charting Techniques*. New York Institute of Finance.',
    'Moss, D. A., & Kintgen, E. (2009). The Dojima Rice Market and the origins of futures trading. *Harvard Business School Case* 709-044.',
    'West, M. D. (2000). Private ordering at the world’s first futures exchange. *Michigan Law Review*, 98(8), 2574–2615.',
  ],
  related: ['finance/candlesticks/anatomy', 'finance/candlesticks/single', 'finance/technical/what-is-ta'],
}

export default guide
