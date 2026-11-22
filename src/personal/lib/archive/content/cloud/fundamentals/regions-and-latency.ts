import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Cloud providers divide the world into regions and availability zones, and where you place a workload decides its resilience, its legal position and, because light is slow, how fast it feels to users. This guide explains the geography of a cloud, how to reason about failure domains, how data residency rules shape placement, and does the physics: what the speed of light in fibre sets as the minimum possible latency between cities.',
  nutshell: [
    'A **region** is a geographic area with several **availability zones** (AZs): separate data centres with independent power, cooling and network, linked by fast low-latency connections (single-digit milliseconds).',
    'Spread across **AZs** to survive a data-centre failure; across **regions** to survive a regional disaster, for data residency or for lower latency to users.',
    'Light in optical fibre travels at about **200,000 km/s (200 km per ms)**, two thirds of c. Round-trip time (RTT) ≥ \\(2d/200\\) ms, before any routing, queuing or processing.',
    '**Data residency** and sovereignty rules may require data to stay in a country; a CDN and edge locations cut latency for static content.',
  ],
  sections: [
    {
      id: 'layout',
      title: 'Regions, zones and failure domains',
      lead: 'Where things fail together.',
      blocks: [
        {
          t: 'table',
          head: ['Unit', 'Typical meaning', 'Survives', 'Latency to peers'],
          rows: [
            ['Host / rack', 'One server or a rack with shared power and switch', 'Nothing beyond the machine', '< 0.5 ms'],
            ['Availability zone', 'One or more data centres, independent power and cooling', 'A rack, a data-centre fire or power failure', '~1–2 ms to other AZs in the region'],
            ['Region', 'A metro area with several AZs, kilometres to tens of kilometres apart', 'Loss of an AZ', '10s to 100s of ms to other regions'],
            ['Multi-region', 'Deployment in two or more regions', 'Loss of a region; political or legal events', 'Cross-region replication is slow and costly'],
          ],
        },
        { t: 'p', text: 'A **failure domain** is the set of things that fail together. Redundancy only works if replicas are in *different* failure domains: two servers in the same rack on the same power feed are one failure. Providers therefore spread a region’s AZs far enough apart to be independent but close enough for synchronous replication (round trip about a millisecond or two, which is roughly 100 to 200 km of fibre at most).' },
        { t: 'callout', tone: 'note', title: 'Singapore as a hub', text: 'Singapore is a major cloud region (AWS ap-southeast-1, Google asia-southeast1, Azure Southeast Asia) because of its subsea cable landings, power and connectivity. Cables from Singapore reach Hong Kong, Sydney, Mumbai and Europe; the physical route is longer than the straight line, which is why measured latencies exceed the theoretical minimum.' },
      ],
    },
    {
      id: 'physics',
      title: 'The speed of light sets a floor',
      lead: 'No amount of money beats it.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{RTT}_{\min}=\frac{2d}{v},\qquad v\approx\frac{c}{n}=\frac{299{,}792\ \text{km/s}}{1.468}\approx 204{,}000\ \text{km/s}\approx 200\ \text{km/ms}`,
          caption: 'The minimum round-trip time over a distance d of fibre.',
          where: [{ sym: 'd', def: 'the length of the fibre path, which is longer than the straight-line distance' }, { sym: 'n', def: 'the refractive index of glass fibre, about 1.47' }],
          syntax: [
            { sym: 'c/n', say: 'light in glass is slower than in vacuum by the refractive index. Effect: about 32% slower, so 200 km/ms, not 300. Why: the wave interacts with the glass.' },
            { sym: '2d/v', say: 'there and back. Effect: a request needs the signal in both directions, so RTT is twice the one-way time. Many protocols need several round trips (TCP handshake, TLS, then the request), multiplying it.' },
          ],
          worked: {
            title: 'Singapore to Sydney and to Frankfurt',
            steps: ['Great-circle distances: Singapore–Sydney about 6,300 km; Singapore–Frankfurt about 10,300 km.', 'Minimum RTT: \\(2\\times6{,}300/200=63\\) ms; \\(2\\times10{,}300/200=103\\) ms.', 'Real fibre routes are 20% to 50% longer, plus equipment delays, so measured RTTs are typically 90 to 100 ms and 160 to 180 ms.', 'A page that needs 3 round trips (TCP, TLS 1.3, request) to Frankfurt from Singapore costs at least \\(3\\times103=309\\) ms.'],
            answer: 'Placing servers near users matters more than faster servers. This is why content delivery networks and regional deployments exist.',
          },
        },
        { t: 'cloud-viz', viz: 'latency' },
        { t: 'p', text: 'Latency also constrains data consistency: a database that must wait for a replica on another continent before confirming a write adds that RTT to every write. Synchronous cross-region replication is rare for this reason; asynchronous replication is common, accepting that a regional failure can lose the last few seconds of writes (the recovery point objective).' },
      ],
    },
    {
      id: 'residency',
      title: 'Residency, sovereignty and edge',
      lead: 'Law and distance together.',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Data residency', tag: 'where it is stored', body: 'Some rules require certain data to be kept within a country (financial, health, government data in many jurisdictions). Choose regions accordingly and verify that backups and logs do not leave.' },
            { title: 'Data sovereignty', tag: 'whose law applies', body: 'Data is subject to the laws of the country where it sits and, for some laws (such as the US CLOUD Act), the provider’s home country. Customer-managed keys and confidential computing reduce, but do not remove, this exposure.' },
            { title: 'CDN and edge', tag: 'content close to users', body: 'A content delivery network caches static content in hundreds of locations so most requests are answered a few milliseconds away. Edge compute runs code there too.' },
            { title: 'Choosing a region', tag: 'checklist', body: 'Latency to users, legal requirements, service availability (new services arrive in large regions first), price (varies by 10% to 40%), and sustainability (grid carbon intensity).' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Bush, S. (2010). *Latency and the speed of light* in optical fibre (refractive index of SMF-28 ≈ 1.468; Corning product data).',
    'Submarine Cable Map (submarinecablemap.com), TeleGeography.',
    'AWS. *Regions and Availability Zones*; Google Cloud *Geography and regions*; Azure *Availability zones*.',
    'Bozkurt, I. N. et al. (2017). Why is the Internet so slow?! *PAM 2017* (median page-fetch times about 37× the speed-of-light bound).',
  ],
  related: ['cloud/fundamentals/cloud-networking', 'cloud/scale-and-maths/consensus-and-consistency', 'cloud/scale-and-maths/caching-and-load-balancing', 'cloud/scale-and-maths/reliability-and-slas'],
}

export default guide
