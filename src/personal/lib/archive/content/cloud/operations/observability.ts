import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'When a distributed system misbehaves you cannot attach a debugger; you have to infer what happened from what it emitted. Observability is the discipline of emitting the right signals, metrics, logs and traces, and reading them correctly. The most common mistake in reading them is trusting averages. This guide covers the three pillars, the four golden signals, the mathematics of percentiles, and why tail latency compounds when a request fans out to many services.',
  nutshell: [
    '**Metrics** (numbers over time) tell you *that* something is wrong; **logs** (events) tell you *what* happened; **traces** (a request’s path across services) tell you *where* time went.',
    'The four **golden signals**: latency, traffic, errors, saturation. The **RED** (rate, errors, duration) and **USE** (utilisation, saturation, errors) methods are checklists built on them.',
    'The **mean hides the tail**: report p50, p95, p99. Percentiles cannot be averaged; aggregate histograms instead.',
    '**Fan-out amplifies the tail:** if a request calls \\(n\\) services each slow with probability \\(p\\), then \\(1-(1-p)^n\\) of requests are slow. 100 calls at 1% each gives 63%.',
  ],
  sections: [
    {
      id: 'pillars',
      title: 'Metrics, logs, traces',
      lead: 'Three views of the same system.',
      blocks: [
        {
          t: 'table',
          head: ['Signal', 'What', 'Strength', 'Cost / caution'],
          rows: [
            ['Metrics', 'Numeric time series (counters, gauges, histograms) with labels', 'Cheap, fast to query, good for alerts and dashboards', 'High-cardinality labels (user ID) explode storage'],
            ['Logs', 'Timestamped records of events, ideally structured JSON', 'Detail for debugging and forensics', 'Volume and cost; may contain sensitive data'],
            ['Traces', 'A request’s journey as spans with timing and parent–child links (OpenTelemetry)', 'Shows which hop is slow in a microservice call tree', 'Sampling needed; instrumentation effort'],
            ['Profiles / events', 'CPU and memory profiles; business events', 'Find hotspots', 'Overhead'],
          ],
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Golden signals (Google SRE)', tag: 'user-facing', body: '**Latency** (of successes and errors separately), **traffic** (demand), **errors** (rate of failing requests), **saturation** (how full the most constrained resource is).' },
            { title: 'RED method', tag: 'services', body: '**Rate**, **Errors**, **Duration** per service: the request-oriented subset, easy to apply to every microservice.' },
            { title: 'USE method', tag: 'resources', body: '**Utilisation**, **Saturation**, **Errors** for each resource (CPU, memory, disk, network). Brendan Gregg’s checklist for finding the bottleneck.' },
            { title: 'Alert on symptoms', tag: 'pager', body: 'Page for user-visible symptoms (error budget burning) rather than causes (CPU 80%). Causes go on dashboards.' },
          ],
        },
      ],
    },
    {
      id: 'percentiles',
      title: 'Why averages lie',
      lead: 'The maths of percentiles.',
      blocks: [
        { t: 'cloud-viz', viz: 'percentiles' },
        {
          t: 'math',
          tex: String.raw`p_q=\inf\{x:\ F(x)\ge q\},\qquad \bar x=\frac1n\sum x_i,\qquad \text{p99 of merged}\ne\tfrac12(\text{p99}_A+\text{p99}_B)`,
          caption: 'The q-th percentile is the value below which a fraction q of observations fall; the mean can sit far from the typical experience; percentiles do not average.',
          where: [{ sym: 'F(x)', def: 'the cumulative distribution of latencies' }, { sym: 'q', def: 'the quantile (0.99 for the 99th percentile)' }],
          syntax: [
            { sym: 'p_q', say: 'the smallest value that at least a fraction q of requests do not exceed. Effect: p99 = 800 ms means 1 request in 100 takes at least that long. Why: it describes the experience of the unlucky tail the mean averages away.' },
            { sym: '\\bar x', say: 'the mean is pulled up by outliers and can match no real request. Effect: a service with 99% of requests at 20 ms and 1% at 2,000 ms has a mean of 39.8 ms and a p99 of about 2,000 ms.' },
            { sym: '\\text{p99 of merged}\\ne\\ldots', say: 'you cannot combine per-server p99s by averaging. Effect: store histograms (bucket counts) which can be summed and then compute the percentile. Why: a percentile is a position in a distribution, not an additive quantity.' },
          ],
          worked: {
            title: 'The mean of a mixed workload',
            steps: ['99% of requests take 20 ms and 1% take 2,000 ms.', 'Mean = 0.99×20 + 0.01×2,000 = 19.8 + 20 = **39.8 ms**.', 'p50 = 20 ms; p99 ≈ 2,000 ms; the mean of 39.8 ms describes nobody.'],
            answer: 'A dashboard showing "average latency 40 ms" hides the 1% who wait two seconds. Alert on p95/p99 and look at the full histogram.',
          },
        },
      ],
    },
    {
      id: 'fanout',
      title: 'Tail latency at scale',
      lead: 'Rare events become common.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`P(\text{request slow})=1-(1-p)^{n},\qquad n^{*}=\frac{\ln(1-P)}{\ln(1-p)}`,
          caption: 'A request that waits for n parallel calls is slow if any one is slow (Dean and Barroso, “The Tail at Scale”, 2013).',
          where: [{ sym: 'p', def: 'the probability that one call is in its slow tail (0.01 for p99)' }, { sym: 'n', def: 'the number of calls the request fans out to' }],
          syntax: [{ sym: '(1-p)^n', say: 'the chance that all n calls are fast. Effect: shrinks exponentially with n. Why: independent probabilities multiply. The request is as slow as its slowest part.' }],
          worked: {
            title: 'A page that calls many backends',
            steps: ['Each backend is slower than 500 ms 1% of the time (p99 = 500 ms).', 'Fan-out to 10: \\(1-0.99^{10}=9.6\\%\\) of pages are slow.', 'Fan-out to 100: \\(1-0.99^{100}=63\\%\\).', 'To make 99% of the pages fast with 100 calls, each call needs a tail of \\(p=1-0.99^{1/100}\\approx0.01\\%\\): the 99.99th percentile.'],
            answer: 'The tail of the parts becomes the typical case of the whole. Mitigations: hedged requests (send a second copy after the p95 delay and take whichever returns first), timeouts and retries with jitter, reducing fan-out, and caching.',
          },
        },
        { t: 'callout', tone: 'tip', title: 'Measure from the user’s side', text: 'Server-side timers miss queuing before the server and network delay. Coordinated omission is a classic benchmarking bug: if a load generator waits for a slow response before sending the next request, it under-samples the bad moments and understates the tail. Use open-loop load generators and record latency from the intended send time.' },
      ],
    },
  ],
  sources: [
    'Dean, J. & Barroso, L. A. (2013). The tail at scale. *Communications of the ACM*, 56(2).',
    'Beyer, B. et al. (2016). *Site Reliability Engineering*, ch. 6 “Monitoring Distributed Systems”. O’Reilly.',
    'Gregg, B. (2013). The USE method (brendangregg.com/usemethod.html); Wilkie, T. (2018), the RED method.',
    'OpenTelemetry documentation (opentelemetry.io).',
    'Tene, G. (2015). How NOT to measure latency (coordinated omission). Strange Loop talk.',
  ],
  related: ['cloud/scale-and-maths/reliability-and-slas', 'cloud/scale-and-maths/scaling-and-queueing', 'cybersecurity/red-and-blue/detection-and-logging', 'cloud/operations/devops-and-iac'],
}

export default guide
