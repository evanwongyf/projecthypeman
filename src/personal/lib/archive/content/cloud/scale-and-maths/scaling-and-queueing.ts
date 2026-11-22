import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Why does a service that handled Tuesday easily collapse on Wednesday at only a little more traffic? Queueing theory answers: delay does not grow in proportion to load, it explodes as utilisation approaches 100%. This guide derives Little’s law, the M/M/1 queue and Erlang C for multiple servers, explains why headroom is not waste, covers Amdahl’s law on parallel speed-up, and shows how autoscaling reacts.',
  nutshell: [
    '**Little’s law:** \\(L=\\lambda W\\). The average number in the system equals the arrival rate times the average time each spends there. It holds for any stable system.',
    '**M/M/1:** with utilisation \\(\\rho=\\lambda/\\mu\\), mean time in system \\(W=1/(\\mu-\\lambda)=\\tfrac{1}{\\mu}\\cdot\\tfrac{1}{1-\\rho}\\). At 90% utilisation, delay is 10× service time; at 99%, 100×.',
    '**Erlang C** gives the probability a request must wait with \\(c\\) servers; pooling servers makes queues far shorter than separate queues at the same utilisation.',
    '**Amdahl’s law:** the serial fraction \\(s\\) caps speed-up at \\(1/s\\), however many servers you add.',
  ],
  sections: [
    {
      id: 'little',
      title: 'Little’s law',
      lead: 'The most useful identity in systems.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`L=\lambda\,W`,
          caption: 'Little’s law (1961): for a stable system, average number in the system = arrival rate × average time in the system.',
          where: [{ sym: 'L', def: 'average number of requests in the system (in service plus waiting)' }, { sym: '\\lambda', def: 'average arrival rate (requests per second)' }, { sym: 'W', def: 'average time a request spends in the system' }],
          syntax: [{ sym: '\\lambda W', say: 'rate times duration gives a count. Effect: three measurements are tied by one equation; any two give the third, without needing to know the distribution of arrivals or service times. Why: it is conservation of requests in a steady state.' }],
          worked: {
            title: 'How many threads or connections?',
            steps: ['A service receives 500 requests per second; each takes 80 ms on average.', '\\(L=500\\times0.08=40\\) requests are in flight on average.', 'A connection pool or thread pool of 40 is the average; to handle bursts (say 3× the average) plan for ≥ 120.', 'If latency rises to 400 ms under load, \\(L\\) grows to 200, which can exhaust the pool and push latency up further: a feedback spiral.'],
            answer: 'Little’s law is how you size pools, queues and concurrency limits, and why slow dependencies cause resource exhaustion upstream.',
          },
        },
      ],
    },
    {
      id: 'mm1',
      title: 'Why latency explodes near saturation',
      lead: 'The M/M/1 queue.',
      blocks: [
        { t: 'cloud-viz', viz: 'queue' },
        {
          t: 'math',
          tex: String.raw`\rho=\frac{\lambda}{\mu},\qquad W=\frac{1}{\mu-\lambda}=\frac{1}{\mu(1-\rho)},\qquad L=\frac{\rho}{1-\rho},\qquad W_q=\frac{\rho}{\mu(1-\rho)}`,
          caption: 'Mean values for a single server with random (Poisson) arrivals and exponential service times.',
          where: [{ sym: '\\mu', def: 'service rate: requests the server can complete per second when busy' }, { sym: '\\rho', def: 'utilisation, which must be below 1 for a stable queue' }, { sym: 'W_q', def: 'average time spent waiting before service starts' }],
          syntax: [
            { sym: '1-\\rho', say: 'the spare capacity. Effect: it is in the denominator, so as ρ → 1 the delay grows without bound. Why: every random burst adds to a backlog that can only drain with spare capacity.' },
            { sym: '\\rho/(1-\\rho)', say: 'the average number in the system. Effect: 0.5 → 1, 0.8 → 4, 0.9 → 9, 0.95 → 19, 0.99 → 99. Why: the queue grows hyperbolically.' },
          ],
          worked: {
            title: 'A server that does 100 requests/s (10 ms each)',
            steps: ['At 50 req/s (ρ = 0.5): \\(W=1/(100-50)=20\\) ms.', 'At 90 req/s (ρ = 0.9): \\(W=1/10=100\\) ms.', 'At 99 req/s (ρ = 0.99): \\(W=1/1=1{,}000\\) ms.', 'A 10% rise in traffic from 90 to 99 req/s makes the delay 10 times worse.'],
            answer: 'This is why operators target utilisation of 50% to 70% and not 95%: the last slice of capacity buys little throughput and costs a lot of latency. Headroom is what keeps tail latency bounded.',
          },
        },
        {
          t: 'math',
          tex: String.raw`C(c,a)=\frac{\dfrac{a^{c}}{c!}\cdot\dfrac{1}{1-\rho}}{\displaystyle\sum_{k=0}^{c-1}\frac{a^{k}}{k!}+\dfrac{a^{c}}{c!}\cdot\dfrac{1}{1-\rho}},\qquad a=\frac{\lambda}{\mu},\ \rho=\frac{a}{c}`,
          caption: 'Erlang C: the probability that an arriving request has to wait with c identical servers sharing one queue.',
          where: [{ sym: 'a', def: 'offered load in "erlangs": the average number of servers that would be busy' }, { sym: 'c', def: 'the number of servers' }],
          syntax: [
            { sym: 'a^{k}/k!', say: 'a Poisson-style weight for k servers being busy. Effect: sums the likelihood of all states. Why: it comes from the balance equations of the birth–death chain.' },
            { sym: '1/(1-\\rho)', say: 'the weight of the "all servers busy" states, which have an unbounded tail. Effect: the term that blows up as utilisation → 1.' },
          ],
          worked: {
            title: 'Pooling beats splitting',
            steps: ['Offered load a = 8 erlangs. Option A: one pool of c = 10 servers (ρ = 0.8). Option B: two separate pools of 5 servers each taking half the traffic (a = 4, ρ = 0.8).', 'Erlang C: pool A has ≈ 41% wait probability; each pool in B has ≈ 55%, and mean waits are about 2.7 times as long (0.55 against 0.20 service times).', 'Same utilisation, different outcomes.'],
            answer: 'A shared queue in front of many workers beats many small queues (the supermarket checkout problem). This is why load balancers should feed a common pool, or use "least-loaded" routing.',
          },
        },
      ],
    },
    {
      id: 'amdahl',
      title: 'Amdahl’s law and autoscaling',
      lead: 'Limits to scale-out.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`S(n)=\frac{1}{s+\dfrac{1-s}{n}},\qquad S(\infty)=\frac1s`,
          caption: 'Amdahl’s law (1967): speed-up with n processors when a fraction s of the work is serial.',
          where: [{ sym: 's', def: 'the fraction of work that cannot be parallelised (a lock, a single database, coordination)' }, { sym: 'n', def: 'number of workers' }],
          syntax: [{ sym: '(1-s)/n', say: 'the parallel part shrinks with n. Effect: it vanishes as n grows, leaving only s. Why: adding workers speeds up only the parallel part.' }],
          worked: {
            title: 'A 5% serial fraction',
            steps: ['s = 0.05. With n = 10: \\(S=1/(0.05+0.095)=6.9\\).', 'n = 100: \\(S=1/(0.05+0.0095)=16.8\\).', 'n = ∞: \\(S=20\\).'],
            answer: 'One hundred servers deliver under 17× the speed, and no number of servers gets past 20×. To scale further, remove the serial part: shard the database, remove locks, make work independent.',
          },
        },
        { t: 'cloud-viz', viz: 'autoscale' },
        { t: 'p', text: 'Autoscalers compare a metric (CPU, queue length, requests per instance) with a target and change the instance count: target tracking sets \\(n_{\\text{new}}=\\lceil n\\cdot m/m_{\\text{target}}\\rceil\\). They lag: metrics are averaged over a window, new instances take tens of seconds to minutes to start and warm up, and scale-in is made slower than scale-out to avoid flapping. Keep headroom for the lag, use **queue depth** or request rate as the signal for bursty work, and scale on the **bottleneck** (a database does not autoscale because the web tier did).' },
      ],
    },
  ],
  sources: [
    'Little, J. D. C. (1961). A proof for the queuing formula L = λW. *Operations Research*, 9(3).',
    'Harchol-Balter, M. (2013). *Performance Modeling and Design of Computer Systems*. Cambridge University Press.',
    'Amdahl, G. M. (1967). Validity of the single processor approach to achieving large scale computing capabilities. *AFIPS*.',
    'Gunther, N. J. (2007). *Guerrilla Capacity Planning*. Springer (Universal Scalability Law).',
  ],
  related: ['cloud/scale-and-maths/caching-and-load-balancing', 'cloud/operations/observability', 'cloud/scale-and-maths/reliability-and-slas', 'cloud/scale-and-maths/cloud-economics'],
}

export default guide
