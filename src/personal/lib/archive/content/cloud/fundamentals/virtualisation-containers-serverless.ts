import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The cloud works by slicing physical machines into many isolated pieces. Virtual machines slice at the hardware level, containers at the operating-system level, and serverless functions at the level of a single call. Each trades isolation, startup time and control differently. This guide explains the mechanics of each, the idea of an orchestrator such as Kubernetes, and the cold-start problem of serverless.',
  nutshell: [
    'A **hypervisor** (KVM, Xen, Hyper-V, Nitro) lets many **virtual machines** share one server, each with its own kernel. Strong isolation; startup in seconds to minutes.',
    '**Containers** share the host kernel but are isolated with **namespaces** (what a process can see) and **cgroups** (how much it can use). Light; start in well under a second; weaker isolation.',
    '**Kubernetes** schedules containers across a cluster, restarts failed ones, scales them and routes traffic: you declare the desired state, a controller loop makes it so.',
    '**Serverless (FaaS)** runs code per event with no servers to manage, billed per execution; the cost is **cold starts**, time limits and less control.',
  ],
  sections: [
    {
      id: 'compare',
      title: 'VMs, containers and functions',
      lead: 'Three levels of slicing.',
      blocks: [
        {
          t: 'table',
          head: ['', 'Virtual machine', 'Container', 'Function (serverless)'],
          rows: [
            ['Isolation boundary', 'Hardware (own kernel)', 'OS kernel (namespaces, cgroups)', 'Per invocation, usually in a micro-VM (Firecracker)'],
            ['Startup', 'Seconds to minutes', 'Milliseconds to seconds', 'Milliseconds (warm) to seconds (cold)'],
            ['Size', 'Gigabytes', 'Megabytes to hundreds of MB', 'Small package, limited memory and time'],
            ['You manage', 'OS, patches, software', 'Image, application', 'Function code only'],
            ['Billing', 'Per second while running', 'Per node or per task', 'Per request and per GB-second'],
            ['Best for', 'Legacy apps, strong isolation, long-running', 'Microservices, portable deployment', 'Event-driven, spiky or low-volume work'],
          ],
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Namespaces', tag: 'what it sees', body: 'The kernel gives a process its own view of process IDs, network interfaces, mounts and users, so it believes it is alone on the machine.' },
            { title: 'cgroups', tag: 'what it uses', body: 'Limit and account CPU, memory and I/O per group of processes, so one container cannot starve the others (the "noisy neighbour" problem).' },
            { title: 'Image layers', tag: 'packaging', body: 'A container image is a stack of read-only filesystem layers shared between images, so pulling a new version downloads only what changed.' },
            { title: 'Isolation caveat', tag: 'security', body: 'A kernel flaw can let a container escape to the host. For untrusted multi-tenant code, providers use micro-VMs or sandboxed runtimes (gVisor, Kata) for stronger boundaries.' },
          ],
        },
      ],
    },
    {
      id: 'k8s',
      title: 'Kubernetes in one page',
      lead: 'A control loop.',
      blocks: [
        {
          t: 'flow',
          title: 'How a deployment becomes running containers',
          nodes: [
            { label: 'You declare', sub: '"3 replicas of image v2" (YAML)', tone: 'human' },
            { label: 'API server', sub: 'stores desired state', tone: 'process' },
            { label: 'Controller', sub: 'compares desired with actual', tone: 'model' },
            { label: 'Scheduler', sub: 'picks a node with room', tone: 'process' },
            { label: 'Kubelet on the node', sub: 'starts the containers', tone: 'data' },
            { label: 'Service', sub: 'stable address that load-balances to pods', tone: 'output' },
          ],
          loop: 'Continuous reconciliation: if a pod dies, the loop starts another',
        },
        { t: 'p', text: 'The key idea is **declarative desired state and reconciliation**: you do not tell the cluster what steps to take, you say what should be true. The unit of scheduling is the **pod** (one or more tightly coupled containers). A **Deployment** keeps N replicas running and rolls out updates; a **Service** gives them a stable name; an **Ingress** exposes them outside the cluster; a **HorizontalPodAutoscaler** changes the replica count with load. A Kubernetes cluster is also a security surface: its API server, dashboards and service accounts have been the entry point in real incidents.' },
      ],
    },
    {
      id: 'faas',
      title: 'Serverless and the cold start',
      lead: 'Pay only when it runs.',
      blocks: [
        { t: 'p', text: 'In a function-as-a-service platform (AWS Lambda, Azure Functions, Cloud Functions) you upload a function and a trigger. The platform keeps no instance running when there is no traffic; when a request arrives it starts an execution environment, loads your code, runs the handler and keeps the environment warm for a while for reuse. That first request pays a **cold start**: download the package, start the runtime, run initialisation code.' },
        {
          t: 'math',
          tex: String.raw`\text{Cost}=N_{\text{req}}\cdot c_{\text{req}}+N_{\text{req}}\cdot\frac{M}{1024}\cdot\frac{d}{1000}\cdot c_{\text{GB-s}},\qquad \text{Mean latency}=t_{\text{warm}}+f_{\text{cold}}\,t_{\text{cold}}`,
          caption: 'A serverless bill and the average latency including cold starts.',
          where: [{ sym: 'N_{\\text{req}}', def: 'number of invocations' }, { sym: 'M,\\ d', def: 'memory in MB and duration in ms per invocation' }, { sym: 'f_{\\text{cold}}', def: 'the fraction of invocations that hit a cold start' }, { sym: 't_{\\text{cold}}', def: 'the extra time of a cold start' }],
          syntax: [
            { sym: '\\tfrac{M}{1024}\\cdot\\tfrac{d}{1000}', say: 'gigabytes times seconds: the compute you used. Effect: doubling memory or runtime doubles cost; but more memory often also gives more CPU and shortens the run. Why: billing is per GB-second.' },
            { sym: 'f_{\\text{cold}}\\,t_{\\text{cold}}', say: 'the average penalty from cold starts. Effect: for a rarely used function f is near 1 and every user waits; for a busy one f is small. Mitigations: provisioned concurrency, smaller packages, lighter runtimes.' },
          ],
          worked: {
            title: 'Serverless against a small server',
            steps: ['Assume $0.20 per million requests and $0.0000167 per GB-second. A function with 512 MB running 100 ms, at 3 million requests a month:', 'Requests: 3 × 0.20 = $0.60. Compute: 3,000,000 × 0.5 GB × 0.1 s = 150,000 GB-s × 0.0000167 = $2.51.', 'Total ≈ $3.11 a month. A small always-on VM costs roughly $15 to $30 a month.', 'At 300 million requests, the function costs ≈ $311 a month and a fleet of VMs may be cheaper.'],
            answer: 'Serverless wins at low or spiky volume and loses at sustained high volume. (Prices are illustrative; check the provider’s current price list.)',
          },
        },
      ],
    },
  ],
  sources: [
    'Burns, B., Grant, B., Oppenheimer, D., Brewer, E. & Wilkes, J. (2016). Borg, Omega, and Kubernetes. *ACM Queue*, 14(1).',
    'Agache, A. et al. (2020). Firecracker: lightweight virtualization for serverless applications. *NSDI 2020*.',
    'Barham, P. et al. (2003). Xen and the art of virtualization. *SOSP 2003*.',
    'Kubernetes documentation (kubernetes.io/docs/concepts).',
    'Jonas, E. et al. (2019). *Cloud Programming Simplified: A Berkeley View on Serverless Computing*. UC Berkeley.',
  ],
  related: ['cloud/fundamentals/what-is-cloud', 'cloud/operations/devops-and-iac', 'cloud/scale-and-maths/scaling-and-queueing', 'cloud/cloud-security/cloud-red-and-blue'],
}

export default guide
