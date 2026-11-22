import type { Guide } from '../../../guide'

const btcSupply = (year: number) => {
  // New coins per block halve every 210,000 blocks (about four years), starting at 50 in 2009.
  let supply = 0
  for (let era = 0; era < 40; era++) {
    const start = 2009 + era * 4
    if (year <= start) break
    const span = Math.min(4, year - start)
    supply += (span / 4) * 210000 * (50 / 2 ** era)
  }
  return supply / 1e6
}

const guide: Guide = {
  intro:
    'Cryptocurrencies are digital tokens recorded on a **blockchain**, a shared ledger kept in sync by a network of computers rather than a bank. Bitcoin, launched in 2009, was the first. They are among the most volatile assets ever traded, and opinions about them range from "digital gold" to "worthless". This guide explains how they work and what the risks are, without taking sides.',
  nutshell: [
    'A blockchain is a chain of blocks of transactions, each linked to the previous one by a cryptographic hash.',
    'Bitcoin’s supply is capped at **21 million**; new issuance **halves** about every four years.',
    'Ethereum runs programs ("smart contracts") and switched from mining to **proof of stake** in 2022.',
    '**Stablecoins** aim to hold a fixed value, usually $1, backed by reserves.',
    'Typical risks: extreme volatility, exchange failures and fraud, hacks, lost keys and changing regulation.',
  ],
  sections: [
    {
      id: 'how',
      title: 'How a blockchain works',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Transactions', body: 'Users sign transfers with their private key; anyone can verify the signature with the public key.' },
            { title: 'Blocks', body: 'Transactions are grouped into a block, which includes the hash of the previous block, linking them into a chain.' },
            { title: 'Consensus', body: 'In proof of work (bitcoin), miners race to find a number that makes the block’s hash small enough; in proof of stake, validators lock up coins and are chosen to add blocks.' },
            { title: 'Immutability', body: 'Changing an old block would change its hash and break every link after it, so rewriting history would require redoing all the work (or controlling most of the stake).' },
          ],
        },
        {
          t: 'math',
          tex: String.raw`H(\text{block header} \,\|\, \text{nonce}) < \text{target}`,
          where: [
            { sym: 'H(\\cdot)', def: 'The SHA-256 hash function: scrambles any input into a fixed-length, unpredictable number' },
            { sym: String.raw`\|`, def: 'Concatenation: the nonce is stuck onto the end of the block header before hashing' },
            { sym: 'nonce', def: 'A number miners change over and over, trying each guess' },
            { sym: 'target', def: 'A threshold set by the network; a smaller target means a harder puzzle' },
          ],
          syntax: [
            { sym: String.raw`H(\text{block header} \,\|\, \text{nonce})`, say: String.raw`Read “H of block header, then nonce”. Glue the nonce onto the end of the header, run it through the hash function \(H\), and treat the scrambled 256-bit result as one enormous number.` },
            { sym: String.raw`< \text{target}`, say: String.raw`Read “is less than target”: the miner wins only if that enormous number is smaller than the network’s threshold, so a smaller target means fewer winning outputs.` },
          ],
          worked: {
            title: 'How hard is a 16-bit puzzle?',
            steps: [
              String.raw`Toy setup: a hash is a uniformly random number from 0 up to \(2^{256}\), and the target is \(2^{240}\) (the hash must begin with 16 zero bits).`,
              String.raw`Chance per guess: \(2^{240}/2^{256} = 2^{-16} = 1/65{,}536\).`,
              String.raw`Expected guesses: \(65{,}536\).`,
              String.raw`At one million hashes per second: \(65{,}536/1{,}000{,}000 \approx 0.066\) seconds.`,
              String.raw`Halve the target (17 zero bits) and the expected guesses double to \(131{,}072\).`,
            ],
            answer: String.raw`Each halving of the target doubles the expected work, which is how the network keeps blocks coming about every 10 minutes; the real target is astronomically smaller than this toy.`,
          },
          caption: 'Bitcoin mining: try nonces until the SHA-256 hash falls below a target. There is no shortcut, because a hash’s output is unpredictable from its input, miners can only guess nonces at random and check each one, which is why mining is pure brute-force computing power. A smaller target means fewer of the possible hash outputs qualify, so it takes more guesses (and more electricity) on average to find one that works. The target adjusts every 2,016 blocks so blocks arrive about every 10 minutes regardless of how much total computing power joins the network.',
        },
      ],
    },
    {
      id: 'supply',
      title: 'Bitcoin’s fixed supply',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{Total supply} = 210{,}000 \times 50 \times \left(1 + \tfrac12 + \tfrac14 + \cdots\right) = 210{,}000 \times 50 \times 2 = 21{,}000{,}000`,
          syntax: [
            { sym: String.raw`\left(1 + \tfrac12 + \tfrac14 + \cdots\right)`, say: String.raw`Read “one plus a half plus a quarter, and so on”. The \(\cdots\) means the pattern continues forever; this series adds up to exactly 2.` },
            { sym: String.raw`210{,}000 \times 50`, say: String.raw`Read “two hundred and ten thousand blocks times fifty coins”: the coins issued in the first era. The braces around the comma only fix the spacing.` },
          ],
          worked: {
            title: 'Adding up the eras',
            steps: [
              String.raw`Era 1: \(210{,}000 \times 50 = 10{,}500{,}000\) coins.`,
              String.raw`Era 2: \(210{,}000 \times 25 = 5{,}250{,}000\). Era 3: \(210{,}000 \times 12.5 = 2{,}625{,}000\).`,
              String.raw`After three eras: \(18{,}375{,}000\), which is \(87.5\%\) of 21 million.`,
              String.raw`Era 4 adds \(210{,}000 \times 6.25 = 1{,}312{,}500\), reaching \(19{,}687{,}500\) (93.75%).`,
              String.raw`After \(k\) eras the total is \(21{,}000{,}000 \times (1 - 1/2^k)\), which approaches 21 million.`,
            ],
            answer: String.raw`Each era closes half the remaining gap to 21 million, so the supply never exceeds the cap.`,
          },
          caption: 'A geometric series: each era of 210,000 blocks issues half as many coins as the last.',
        },
        {
          t: 'plot',
          title: 'Bitcoin in circulation over time (schedule)',
          x: [2009, 2041],
          y: [0, 22],
          xLabel: 'Year',
          yLabel: 'Millions of BTC',
          curves: [{ f: btcSupply, label: 'Issued supply' }],
          hlines: [{ y: 21, label: '21 million cap' }],
          caption: 'Approximate: about 94% of all bitcoin had been issued by 2024.',
        },
        { t: 'callout', tone: 'fact', title: 'The most expensive pizzas', text: 'On 22 May 2010, programmer Laszlo Hanyecz paid 10,000 bitcoins for two pizzas, the first well-known purchase with bitcoin. "Bitcoin Pizza Day" is still celebrated; at later prices those coins were worth hundreds of millions of dollars.' },
      ],
    },
    {
      id: 'risks',
      title: 'Volatility and risks',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Volatility', body: 'Annualised volatility has often been 60–80%, several times that of stocks; falls of more than 70% from peak have happened repeatedly.' },
            { title: 'Custody', body: '"Not your keys, not your coins": coins held on an exchange are only as safe as the exchange. FTX’s collapse in 2022 left customers with billions in losses.' },
            { title: 'Valuation', body: 'Most tokens produce no cash flow, so their price rests on adoption, scarcity and belief; there is no agreed way to value them.' },
            { title: 'Regulation', body: 'Rules differ by country and change quickly. In Singapore, the MAS restricts how crypto services may be marketed to the public and warns retail investors of the risks.' },
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Only what you can afford to lose', text: 'Treat any crypto holding as a high-risk speculation, size it accordingly, and beware of promises of guaranteed returns, which are a hallmark of scams.' },
      ],
    },
  ],
  sources: [
    'Nakamoto, S. (2008). *Bitcoin: A Peer-to-Peer Electronic Cash System*. bitcoin.org.',
    'Buterin, V. (2014). *Ethereum White Paper*. ethereum.org.',
    'Liu, Y., & Tsyvinski, A. (2021). Risks and returns of cryptocurrency. *The Review of Financial Studies*, 34(6), 2689–2727.',
    'Monetary Authority of Singapore. (2022). *Guidelines on Provision of Digital Payment Token Services to the Public*.',
  ],
  related: ['finance/assets/overview', 'finance/foundations/behavioural'],
}

export default guide
