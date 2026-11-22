import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Cloud storage and databases come in a few shapes, each suited to a pattern of access, and each makes different promises about durability and consistency. This guide separates block, file and object storage, relational and NoSQL databases, explains replication and sharding, the arithmetic of "eleven nines" durability, and the CAP theorem that governs how replicated data behaves when the network fails.',
  nutshell: [
    '**Block** storage is a raw disk (low latency, one machine); **file** storage is a shared filesystem; **object** storage (S3-style) holds immutable blobs at huge scale with an HTTP API and very high durability.',
    '**Relational** databases give transactions and joins; **NoSQL** families (key-value, document, wide-column, graph) trade some of that for scale and flexibility.',
    '**Replication** copies data for availability and read scale; **sharding** splits it for write scale. Both bring consistency questions.',
    '**CAP:** during a network partition you must choose between **consistency** and **availability**; with no partition you still trade latency against consistency (PACELC).',
  ],
  sections: [
    {
      id: 'types',
      title: 'Kinds of storage',
      lead: 'Pick by access pattern.',
      blocks: [
        {
          t: 'table',
          head: ['Type', 'Interface', 'Strengths', 'Typical use', 'Example'],
          rows: [
            ['Block', 'A disk attached to one VM (read/write blocks)', 'Low latency, high IOPS, can be snapshotted', 'Databases, boot volumes', 'EBS, Persistent Disk, Managed Disks'],
            ['File', 'Network filesystem (NFS/SMB) shared by many', 'Familiar semantics, shared access', 'Shared content, home directories, legacy apps', 'EFS, Filestore, Azure Files'],
            ['Object', 'HTTP API over named blobs in buckets', 'Virtually unlimited, cheap, extremely durable, versioning and lifecycle rules', 'Backups, media, data lakes, static websites, logs', 'S3, GCS, Azure Blob'],
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Public buckets', text: 'Object storage buckets have been the source of many data leaks, almost always because access policies were set to public or too broad. Block public access at the account level, and review who can read what.' },
      ],
    },
    {
      id: 'durability',
      title: 'Durability arithmetic: what "eleven nines" means',
      lead: 'Rare events at scale.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{Expected objects lost per year}=N\cdot(1-D),\qquad \text{Years per lost object}=\frac{1}{N(1-D)}`,
          caption: 'Durability D is the probability an object survives a year; the number of losses expected across N objects follows directly.',
          where: [{ sym: 'D', def: 'annual durability (0.99999999999 for "11 nines")' }, { sym: 'N', def: 'the number of stored objects' }],
          syntax: [
            { sym: '1-D', say: 'the annual probability that one object is lost: \\(10^{-11}\\) for eleven nines. Effect: very small per object.' },
            { sym: 'N(1-D)', say: 'multiplied by the number of objects, the expected losses. Effect: durability that sounds perfect still means a loss every so often at large N. Why: expected value is linear.' },
          ],
          worked: {
            title: 'Ten million objects at eleven nines',
            steps: ['\\(N=10^{7}\\), \\(1-D=10^{-11}\\): expected losses per year \\(=10^{-4}\\).', 'One lost object every \\(1/10^{-4}=10{,}000\\) years on average.', 'With 10 billion objects: \\(10^{10}\\times10^{-11}=0.1\\) a year: one every 10 years.'],
            answer: 'Eleven nines protects against hardware failure, not against deletion, overwriting, ransomware or a bad script. Those are the real risks, so use versioning, object lock and separate-account backups.',
          },
        },
        { t: 'p', text: 'How is it achieved? By **replication** (three or more copies across zones) or **erasure coding** (split an object into k data fragments plus m parity fragments, any k of the k+m recover it). Erasure coding with k = 10, m = 4 survives the loss of any 4 fragments at 1.4× storage overhead, compared with 3× for triple replication, and is why cold storage is cheap.' },
      ],
    },
    {
      id: 'db',
      title: 'Databases, replication and CAP',
      lead: 'Scale and consistency pull apart.',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Relational (SQL)', tag: 'ACID', body: 'Tables, joins, and transactions that are Atomic, Consistent, Isolated, Durable. Scales up easily, out with effort. PostgreSQL, MySQL, Aurora, Cloud SQL, Spanner.' },
            { title: 'Key-value and document', tag: 'scale', body: 'Look up by key; flexible schema; scales out by partitioning on the key. DynamoDB, Cosmos DB, MongoDB, Firestore. Queries beyond the key need planning.' },
            { title: 'Wide-column and time-series', tag: 'write-heavy', body: 'Huge write throughput and range scans by key: Cassandra, Bigtable, Timestream, InfluxDB.' },
            { title: 'Caches and search', tag: 'speed', body: 'In-memory stores (Redis, Memcached) for hot data; search engines (OpenSearch, Elasticsearch) for text. Usually a copy, not the source of truth.' },
          ],
        },
        {
          t: 'table',
          head: ['Technique', 'Idea', 'Gives', 'Costs'],
          rows: [
            ['Primary–replica replication', 'One node accepts writes; replicas copy and serve reads', 'Read scale, failover', 'Replica lag: a read may return old data'],
            ['Multi-leader / leaderless', 'Several nodes accept writes; conflicts resolved later', 'Write availability across regions', 'Conflict resolution; weaker consistency'],
            ['Sharding (partitioning)', 'Split data by key across nodes', 'Write and storage scale', 'Cross-shard queries and transactions are hard; hot shards'],
            ['Quorum reads/writes', 'Require R of N replicas to read, W to write, with R + W > N', 'Tunable consistency (see the consensus guide)', 'Latency of the slowest needed replica'],
          ],
        },
        {
          t: 'math',
          tex: String.raw`\text{CAP: in a partition, choose } C \text{ or } A;\qquad \text{PACELC: if Partition then (A or C), Else (Latency or Consistency)}`,
          caption: 'The CAP theorem (Gilbert and Lynch, 2002) and its extension by Abadi (2012).',
          where: [{ sym: 'C', def: 'consistency: every read sees the latest write (linearizability)' }, { sym: 'A', def: 'availability: every request to a working node gets a response' }, { sym: 'P', def: 'partition tolerance: the system keeps working when the network drops messages between nodes' }],
          syntax: [{ sym: 'C\\text{ or }A', say: 'when nodes cannot talk, a replica must either refuse to answer (keeping consistency) or answer with possibly stale data (keeping availability). Effect: you cannot have both during a partition. Partitions are unavoidable in real networks, so the real choice is C or A when they happen.' }],
          worked: {
            title: 'Two replicas, a broken link',
            steps: ['A user updates a profile on replica 1 in Singapore. The link to replica 2 in Frankfurt is cut.', 'Option C: replica 2 refuses reads and writes until the link returns. Consistent, but unavailable in Frankfurt.', 'Option A: replica 2 serves the old profile. Available, but inconsistent; merge later.'],
            answer: 'A bank ledger chooses C (refuse rather than be wrong); a social-media feed chooses A (stale is fine). Even without partitions, consistent replication costs a round trip (PACELC).',
          },
        },
      ],
    },
  ],
  sources: [
    'Kleppmann, M. (2017). *Designing Data-Intensive Applications*, chs. 5, 6, 9. O’Reilly.',
    'Gilbert, S. & Lynch, N. (2002). Brewer’s conjecture and the feasibility of consistent, available, partition-tolerant web services. *SIGACT News*, 33(2).',
    'Abadi, D. (2012). Consistency tradeoffs in modern distributed database system design. *IEEE Computer*, 45(2).',
    'DeCandia, G. et al. (2007). Dynamo: Amazon’s highly available key-value store. *SOSP 2007*.',
    'AWS. *Amazon S3 data protection and durability* documentation.',
  ],
  related: ['cloud/scale-and-maths/consensus-and-consistency', 'cloud/scale-and-maths/caching-and-load-balancing', 'cloud/cloud-security/cloud-encryption', 'cloud/scale-and-maths/reliability-and-slas'],
}

export default guide
