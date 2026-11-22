import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Two ideas keep large systems fast and balanced: keep popular data close, and spread requests evenly. Caching works because access is wildly uneven (a few items get most of the traffic), and load balancing works when requests are routed so that no server is overloaded. This guide covers the arithmetic of hit ratios, why Zipf’s law makes caches so effective, eviction policies, load-balancing algorithms including the surprisingly powerful "power of two choices", and consistent hashing, which lets a cluster grow without reshuffling everything.',
  nutshell: [
    '**Effective access time** \\(=h\\,t_{\\text{cache}}+(1-h)\\,t_{\\text{miss}}\\). With a 90% hit ratio, a cache 100× faster than its backing store gives ~9× speed-up, not 100×.',
    'Access popularity is **Zipf-like**: the k-th most popular item gets traffic ∝ \\(1/k^{s}\\), so a small cache holds a large share of requests.',
    '**Power of two choices:** picking two random servers and sending the request to the less loaded one cuts the maximum load from \\(\\sim\\ln n/\\ln\\ln n\\) to \\(\\sim\\ln\\ln n/\\ln 2\\).',
    '**Consistent hashing** maps keys and servers onto a ring so that adding or removing a server moves only about \\(1/n\\) of the keys, not nearly all of them.',
  ],
  sections: [
    {
      id: 'cache',
      title: 'Caching: hit ratios and Zipf',
      lead: 'Small caches, big effects.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`T_{\text{eff}}=h\,t_c+(1-h)\,t_m,\qquad \text{speed-up}=\frac{t_m}{T_{\text{eff}}},\qquad p_k=\frac{k^{-s}}{H_{N,s}},\ \ H_{N,s}=\sum_{j=1}^{N}j^{-s}`,
          caption: 'The effective access time with a cache, and the Zipf distribution of popularity over N items with exponent s.',
          where: [{ sym: 'h', def: 'hit ratio: the fraction of requests found in the cache' }, { sym: 't_c,\\ t_m', def: 'time for a hit and for a miss (going to the origin)' }, { sym: 's', def: 'the Zipf exponent; real workloads often have s between 0.7 and 1.2' }],
          syntax: [
            { sym: 'h\\,t_c+(1-h)\\,t_m', say: 'a weighted average of the fast and slow paths. Effect: the miss term dominates unless h is very close to 1. Why: a 1% miss rate times a 100× slower path contributes as much as the hits.' },
            { sym: 'k^{-s}', say: 'popularity falls as a power of rank. Effect: item 1 gets about twice as many requests as item 2 (s = 1), 10 times as many as item 10. Why: attention is concentrated: a few videos, products and pages dominate.' },
            { sym: 'H_{N,s}', say: 'the normalising sum so the probabilities add to 1.' },
          ],
          worked: {
            title: 'A 90% hit ratio',
            steps: ['Cache hit 1 ms, origin (database) 100 ms. h = 0.90: \\(T=0.9\\times1+0.1\\times100=10.9\\) ms; speed-up 100/10.9 = 9.2×.', 'h = 0.99: \\(T=0.99+1.0=1.99\\) ms; speed-up 50×.', 'Going from 90% to 99% hits makes the average 5.5 times faster.'],
            answer: 'The last few percent of hit ratio matter most: miss cost dominates. And because popularity is Zipf-distributed, caching the top 1% to 10% of items can reach those ratios.',
          },
        },
        { t: 'cloud-viz', viz: 'cache' },
        {
          t: 'table',
          head: ['Policy', 'Evicts', 'Good for', 'Weakness'],
          rows: [
            ['LRU', 'Least recently used', 'Temporal locality; the default for most workloads', 'A one-off big scan can flush the whole cache'],
            ['LFU', 'Least frequently used', 'Stable popularity', 'Slow to adapt; old popular items linger'],
            ['FIFO', 'Oldest inserted', 'Simplicity', 'Ignores usage'],
            ['TTL', 'Entries older than a set time', 'Bounding staleness', 'Wasted misses when data has not changed'],
            ['ARC / TinyLFU / S3-FIFO', 'Adaptive mixes of recency and frequency', 'Scan resistance, better hit ratio', 'More complex'],
          ],
          caption: 'Cache invalidation is the hard part: a cache is a copy, and stale copies cause bugs. Use TTLs, versioned keys or explicit purging, and decide what staleness you can tolerate.',
        },
      ],
    },
    {
      id: 'lb',
      title: 'Load balancing',
      lead: 'Spread the work.',
      blocks: [
        {
          t: 'table',
          head: ['Algorithm', 'Rule', 'Notes'],
          rows: [
            ['Round robin', 'Next server in turn', 'Simple; ignores differing request cost and server speed'],
            ['Weighted round robin', 'More turns for bigger servers', 'Static weights'],
            ['Least connections / least loaded', 'Send to the server with the fewest active requests', 'Adapts to slow requests; needs load information'],
            ['Random', 'Pick any server', 'Max load grows as ln n / ln ln n'],
            ['Power of two choices', 'Pick two at random, send to the less loaded', 'Nearly as good as least-loaded with far less coordination'],
            ['Hash-based (IP, session, key)', 'Same key → same server', 'Gives locality and cache affinity; uneven if keys are skewed'],
          ],
        },
        {
          t: 'math',
          tex: String.raw`\text{max load}_{\text{random}}\approx\frac{\ln n}{\ln\ln n},\qquad \text{max load}_{d\text{ choices}}\approx\frac{\ln\ln n}{\ln d}+O(1)`,
          caption: 'Throwing n balls into n bins (Azar, Broder, Karlin and Upfal, 1994; Mitzenmacher, 2001).',
          where: [{ sym: 'd', def: 'the number of random bins sampled; the ball goes in the least full' }],
          syntax: [{ sym: '\\ln\\ln n/\\ln d', say: 'doubly logarithmic: extraordinarily slow growth. Effect: with just d = 2 the imbalance falls exponentially compared with purely random choice. Why: each ball placed in a lighter bin shrinks the number of heavy bins squared, so the heavy tail collapses.' }],
          worked: {
            title: 'A million requests onto a thousand servers',
            steps: ['n = 1,000 servers, 1,000 requests at a time: random assignment gives a busiest server of about \\(\\ln1000/\\ln\\ln1000=6.9/1.93\\approx3.6\\) (in practice 5 to 6).', 'With two choices: \\(\\ln\\ln1000/\\ln2=1.93/0.693\\approx2.8\\), in practice 3.', 'The busiest server is about half as loaded.'],
            answer: 'Sampling only two servers captures most of the benefit of perfect knowledge. It is used in many production balancers, and avoids the herd effect of everyone picking the one "least loaded" server at the same moment.',
          },
        },
      ],
    },
    {
      id: 'ring',
      title: 'Consistent hashing',
      lead: 'Grow without reshuffling.',
      blocks: [
        { t: 'p', text: 'With the naive rule "server = hash(key) mod n", changing n from 10 to 11 remaps about 10/11 of all keys: a cache cluster loses nearly everything at once and the origin is flooded. **Consistent hashing** places servers and keys on a circle by hashing both; each key belongs to the next server clockwise. Adding a server takes over a slice from its neighbour only: on average \\(1/n\\) of the keys move. Giving each server many **virtual nodes** (100 to 200 points on the ring) evens out load.' },
        { t: 'cloud-viz', viz: 'ring' },
        {
          t: 'math',
          tex: String.raw`\Pr[\text{key moves}]_{\bmod}=\frac{n}{n+1},\qquad \Pr[\text{key moves}]_{\text{ring}}=\frac{1}{n+1},\qquad \text{load imbalance}\sim\sqrt{\frac{2\ln n}{v}}\ \ (v\text{ vnodes})`,
          caption: 'Keys remapped when going from n to n+1 servers, and how virtual nodes tame imbalance.',
          where: [{ sym: 'v', def: 'virtual nodes per server' }],
          syntax: [{ sym: '1/(n+1)', say: 'the new server owns one share of the ring. Effect: only that share of keys moves, and only to the new server. Why: a key changes owner only if the new point falls between it and its old owner.' }],
          worked: {
            title: 'Growing a cache cluster',
            steps: ['10 servers → 11. Modulo hashing: about 10/11 = 91% of keys change server.', 'Consistent hashing: about 1/11 = 9% of keys move.', 'With 1 point per server the busiest server can carry 2× to 3× the average; with 150 virtual nodes the spread is within about ±10%.'],
            answer: 'Ten times fewer cache misses during a scale-out. Memcached clients, Cassandra, DynamoDB and CDNs use the idea.',
          },
        },
      ],
    },
  ],
  sources: [
    'Karger, D. et al. (1997). Consistent hashing and random trees. *STOC 1997*.',
    'Mitzenmacher, M. (2001). The power of two choices in randomized load balancing. *IEEE TPDS*, 12(10).',
    'Breslau, L. et al. (1999). Web caching and Zipf-like distributions. *INFOCOM 1999*.',
    'Einziger, G., Friedman, R. & Manes, B. (2017). TinyLFU: a highly efficient cache admission policy. *ACM TOS*, 13(4).',
    'DeCandia, G. et al. (2007). Dynamo: Amazon’s highly available key-value store. *SOSP 2007*.',
  ],
  related: ['cloud/scale-and-maths/scaling-and-queueing', 'cloud/operations/observability', 'cloud/fundamentals/storage-and-databases', 'cloud/fundamentals/regions-and-latency'],
}

export default guide
