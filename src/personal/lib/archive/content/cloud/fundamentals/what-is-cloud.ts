import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Cloud computing is a way of buying computing the way we buy electricity: as a metered service, drawn from a shared supply, in as much quantity as needed at the moment. This guide gives NIST’s definition, the three service models and four deployment models, what actually changes economically, and the shared responsibility model, which determines who must secure what and is the source of many misunderstandings.',
  nutshell: [
    'NIST’s five **essential characteristics**: on-demand self-service, broad network access, resource pooling, rapid elasticity, measured service.',
    '**IaaS** gives you virtual machines, networks and storage; **PaaS** gives you a runtime to deploy code; **SaaS** gives you finished applications. Each step up hands more management to the provider.',
    '**Public, private, hybrid** and **multi-cloud** describe where workloads run and who owns the hardware.',
    '**Shared responsibility:** the provider secures the cloud *itself* (data centres, hypervisors); you secure what you put *in* it (identity, data, configuration).',
  ],
  sections: [
    {
      id: 'def',
      title: 'The definition',
      lead: 'Five properties.',
      blocks: [
        {
          t: 'terms',
          items: [
            { term: 'On-demand self-service', def: 'You provision resources yourself, through a console or API, without talking to a person.' },
            { term: 'Broad network access', def: 'Resources are reached over the network from many kinds of device.' },
            { term: 'Resource pooling', def: 'The provider serves many customers (multi-tenancy) from shared hardware, assigned dynamically.' },
            { term: 'Rapid elasticity', def: 'Capacity grows and shrinks quickly, often automatically, so it appears unlimited.' },
            { term: 'Measured service', def: 'Usage is metered and billed (per second, per request, per GB), which is also what enables cost optimisation.' },
          ],
        },
      ],
    },
    {
      id: 'models',
      title: 'Service and deployment models',
      lead: 'How much you manage.',
      blocks: [
        {
          t: 'table',
          head: ['Layer', 'On-premises', 'IaaS', 'PaaS', 'SaaS'],
          rows: [
            ['Application and data', 'You', 'You', 'You', 'Provider (you configure and own data)'],
            ['Runtime, middleware', 'You', 'You', 'Provider', 'Provider'],
            ['Operating system', 'You', 'You', 'Provider', 'Provider'],
            ['Virtualisation, servers, storage, network', 'You', 'Provider', 'Provider', 'Provider'],
            ['Physical data centre', 'You', 'Provider', 'Provider', 'Provider'],
            ['Example', 'Your own server room', 'EC2, Azure VMs, Compute Engine', 'App Service, Cloud Run, Heroku', 'Microsoft 365, Gmail, Salesforce'],
          ],
          caption: 'Who manages each layer. FaaS / serverless sits near PaaS and is covered in the next guide.',
        },
        {
          t: 'table',
          head: ['Deployment', 'Description', 'Why'],
          rows: [
            ['Public cloud', 'Shared infrastructure owned by a provider (AWS, Azure, Google Cloud, Alibaba)', 'Scale, speed, no capital cost'],
            ['Private cloud', 'Cloud-style infrastructure dedicated to one organisation, on-premises or hosted', 'Control, specific regulation'],
            ['Hybrid', 'A connected mix of private and public', 'Keep sensitive systems close, burst into the public cloud'],
            ['Multi-cloud', 'Using more than one public provider', 'Avoid lock-in, use best-of-breed, resilience; costs complexity'],
          ],
        },
      ],
    },
    {
      id: 'shared',
      title: 'The shared responsibility model',
      lead: 'Who secures what.',
      blocks: [
        { t: 'p', text: 'The provider is responsible for security **of** the cloud: physical facilities, hardware, the hypervisor and the managed service platforms. The customer is responsible for security **in** the cloud: identities and permissions, data, network configuration, operating-system patching (in IaaS), and application code. The line moves with the service model: in SaaS the provider does more, but you are *always* responsible for your data, your users and your access settings.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Always yours', tag: 'every model', body: 'Who has accounts and what they can do; data classification and encryption choices; whether storage is public; MFA; logging turned on and monitored.' },
            { title: 'Yours in IaaS', tag: 'more work', body: 'Operating-system patches, host firewalls, installed software, antivirus/EDR, and the network rules of your virtual network.' },
            { title: 'Provider’s', tag: 'trust and verify', body: 'Data-centre security, hardware lifecycle, hypervisor isolation, availability of the managed service, compliance attestations (ISO 27001, SOC 2).' },
            { title: 'The common failure', tag: 'assumption', body: 'Assuming "the cloud provider handles security." Most real incidents are customer misconfigurations: public buckets, permissive roles, exposed keys.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'Singapore context', text: 'Regulated sectors face extra expectations. The Monetary Authority of Singapore’s Technology Risk Management Guidelines and outsourcing guidelines apply to financial institutions using the cloud; the PDPA sets duties for personal data wherever it is hosted; and the Cyber Security Agency’s Cloud Security Companion Guide and the Multi-Tier Cloud Security (MTCS) standard are local references.' },
      ],
    },
  ],
  sources: [
    'Mell, P. & Grance, T. (2011). *The NIST Definition of Cloud Computing*. SP 800-145.',
    'AWS. *Shared Responsibility Model*; Microsoft Azure *Shared responsibility in the cloud*; Google Cloud *Shared responsibility and shared fate*.',
    'Cloud Security Alliance (2021). *Security Guidance for Critical Areas of Focus in Cloud Computing v4.0*.',
    'Monetary Authority of Singapore (2021). *Technology Risk Management Guidelines*; Cyber Security Agency of Singapore, *Cloud Security Companion Guide*.',
  ],
  related: ['cloud/fundamentals/virtualisation-containers-serverless', 'cloud/cloud-security/iam-and-zero-trust', 'cybersecurity/foundations/cia-and-risk', 'cloud/scale-and-maths/cloud-economics'],
}

export default guide
