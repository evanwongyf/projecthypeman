import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'When data lives on several machines, they must agree: on who is the leader, on the order of writes, on what a read should return. Agreement is hard because messages can be delayed or lost and machines can crash without telling anyone. This guide covers the impossibility results that frame the problem, quorums and the R + W > N rule, how consensus protocols such as Raft elect leaders and replicate logs, and the menu of consistency models with their costs.',
  nutshell: [
    '**Two Generals** shows that no finite protocol can guarantee agreement over an unreliable channel; **FLP** shows that in a purely asynchronous system consensus cannot be guaranteed if even one process may crash.',
    'A **quorum** is a majority. With N replicas, writing to W and reading from R guarantees you see the latest write when **R + W > N**, because the sets must overlap.',
    '**Raft/Paxos** make a cluster of \\(2f+1\\) nodes agree on a log and survive \\(f\\) failures, using leader election and majority acknowledgement.',
    'Stronger consistency (linearizability) costs latency and availability; weaker models (eventual) are fast and always available but need care in the application.',
  ],
  sections: [
    {
      id: 'why',
      title: 'Why agreement is hard',
      lead: 'Two impossibility results.',
      blocks: [
        { t: 'p', text: 'Two armies must attack together, signalling by messenger across enemy land. General A sends "attack at dawn"; to be sure, A needs an acknowledgement; B, sending it, now needs to know it arrived, and so on forever. No finite exchange yields certainty (the **Two Generals problem**). Distributed systems live with this by settling for agreement with high probability, or agreement that tolerates delay: timeouts, retries and idempotent operations.' },
        { t: 'p', text: 'Fischer, Lynch and Paterson (1985) proved that in an **asynchronous** network (no bound on message delay) no deterministic protocol can guarantee consensus if even one process may crash, because a slow process cannot be told apart from a dead one. Practical protocols work around it with **timeouts** (partial synchrony) and randomisation, giving up guaranteed liveness in rare adversarial schedules but never giving up safety.' },
        { t: 'callout', tone: 'note', title: 'Safety and liveness', text: '**Safety**: nothing bad happens (two nodes never decide different values). **Liveness**: something good eventually happens (a decision is reached). Consensus protocols always preserve safety; liveness holds when the network is stable enough.' },
      ],
    },
    {
      id: 'quorum',
      title: 'Quorums',
      lead: 'Overlap guarantees freshness.',
      blocks: [
        { t: 'cloud-viz', viz: 'quorum' },
        {
          t: 'math',
          tex: String.raw`R+W>N\ \Rightarrow\ \text{every read quorum intersects every write quorum},\qquad W>\tfrac N2\ \Rightarrow\ \text{no two writes proceed on disjoint sets}`,
          caption: 'The quorum intersection conditions for N replicas, with read quorum R and write quorum W.',
          where: [{ sym: 'N', def: 'number of replicas holding a copy' }, { sym: 'R,\\ W', def: 'how many replicas must respond to a read or acknowledge a write' }],
          syntax: [
            { sym: 'R+W>N', say: 'by the pigeonhole principle, any R replicas and any W replicas must share at least one. Effect: at least one replica in every read has the latest write, so with version numbers the reader can pick it. Why: the two sets cannot fit disjointly in N.' },
            { sym: 'W>N/2', say: 'two writes both needing more than half must overlap, so conflicting writes cannot both succeed independently. Effect: prevents split-brain writes.' },
          ],
          worked: {
            title: 'N = 5',
            steps: ['W = 3, R = 3 (majority quorums): R + W = 6 > 5 ✓. Tolerates 2 failures for both reads and writes.', 'W = 5, R = 1: reads are fast (any replica), but one failure blocks writes.', 'W = 1, R = 1: R + W = 2 < 5, fast and always available, but reads can be stale ("eventual consistency").'],
            answer: 'The knobs trade latency, availability and consistency. DynamoDB, Cassandra and Riak expose them directly.',
          },
        },
      ],
    },
    {
      id: 'raft',
      title: 'Consensus: Raft in outline',
      lead: 'A replicated log by majority.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Leader election', body: 'Nodes start as followers. If a follower hears nothing from a leader within a randomised timeout (say 150–300 ms), it becomes a candidate, increments the **term** and asks for votes. A candidate with votes from a majority becomes leader. Each node votes once per term, so at most one leader per term.' },
            { title: 'Log replication', body: 'Clients send commands to the leader, which appends them to its log and sends them to followers. When a **majority** has stored an entry, it is **committed** and applied to the state machine.' },
            { title: 'Safety rule', body: 'A candidate can win only if its log is at least as up to date as a majority’s, so a new leader always has every committed entry. Committed entries are never lost.' },
            { title: 'Membership and failure', body: 'The cluster of 2f + 1 nodes tolerates f failures: 3 nodes tolerate 1, 5 nodes tolerate 2. If a majority is unreachable, the cluster stops accepting writes rather than risk split-brain.' },
          ],
        },
        {
          t: 'math',
          tex: String.raw`n=2f+1,\qquad \text{majority}=\left\lfloor\frac n2\right\rfloor+1=f+1,\qquad A_{\text{cluster}}=\sum_{k=f+1}^{n}\binom nk a^{k}(1-a)^{n-k}`,
          caption: 'Cluster size for f tolerated failures, the majority size, and the availability of a majority cluster when each node is up with probability a.',
          where: [{ sym: 'a', def: 'availability of one node, independent of the others' }],
          syntax: [{ sym: '\\binom nk a^k(1-a)^{n-k}', say: 'the probability that exactly k nodes are up. Effect: summing from f+1 up gives the probability that a majority is up. Why: the cluster can work whenever more than half are alive.' }],
          worked: {
            title: 'Three or five nodes at 99% each',
            steps: ['n = 3, majority 2: \\(A=a^3+3a^2(1-a)=0.970299+0.029403=99.97\\%\\).', 'n = 5, majority 3: \\(A\\approx 99.999\\%\\) (about 10 failures per million).', 'The jump from 99% to 99.97% needs three nodes; two more add another ~1.5 nines.'],
            answer: 'Odd sizes are used because a 4-node cluster tolerates the same single failure as 3, with more cost. Put nodes in separate zones: independence is what the calculation assumes.',
          },
        },
      ],
    },
    {
      id: 'models',
      title: 'Consistency models',
      lead: 'What can a reader see?',
      blocks: [
        {
          t: 'levels',
          caption: 'From strongest (and slowest) to weakest (and fastest).',
          items: [
            { name: 'Linearizability', body: 'Operations appear instantaneous, in an order consistent with real time: once a write completes, every later read sees it. Needs coordination on every operation: a round trip to a majority. Spanner, etcd, ZooKeeper.' },
            { name: 'Sequential / serializable', body: 'All clients see the same order of operations, perhaps not matching real time; serializable transactions behave as if run one at a time.' },
            { name: 'Causal', body: 'If A happened before B (A may have caused B), everyone sees A before B; unrelated events may be seen in different orders. No coordination across the whole system.' },
            { name: 'Read-your-writes / session', body: 'You always see your own updates (and monotonic reads: never go back in time). Cheap and what users expect.' },
            { name: 'Eventual', body: 'If writes stop, replicas converge. In the meantime, reads may be stale or out of order. Fast, always available; conflicts must be resolved (last-writer-wins, CRDTs).' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'A practical rule', text: 'Use strong consistency for what must be right (balances, inventory, uniqueness, leader election) and weaker models for what can be slightly stale (likes, feeds, caches). Design your user experience around the staleness you accept.' },
      ],
    },
  ],
  sources: [
    'Ongaro, D. & Ousterhout, J. (2014). In search of an understandable consensus algorithm (Raft). *USENIX ATC 2014*. See raft.github.io.',
    'Fischer, M., Lynch, N. & Paterson, M. (1985). Impossibility of distributed consensus with one faulty process. *Journal of the ACM*, 32(2).',
    'Lamport, L. (1998). The part-time parliament (Paxos). *ACM TOCS*, 16(2).',
    'Kleppmann, M. (2017). *Designing Data-Intensive Applications*, chs. 5, 7, 9. O’Reilly.',
    'Corbett, J. et al. (2013). Spanner: Google’s globally distributed database. *ACM TOCS*, 31(3).',
  ],
  related: ['cloud/fundamentals/storage-and-databases', 'cloud/scale-and-maths/reliability-and-slas', 'cloud/fundamentals/regions-and-latency', 'cloud/scale-and-maths/caching-and-load-balancing'],
}

export default guide
