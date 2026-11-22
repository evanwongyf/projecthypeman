import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The most familiar IoT is in the home: smart speakers, bulbs and plugs, thermostats, cameras, doorbells, locks, robot vacuums, TVs and appliances. These devices are convenient, and they are also the least visible part of your network and a growing part of your attack surface and privacy footprint. This guide covers how a smart home is put together (hubs, protocols, Matter), what to think about when choosing devices (local control, cloud dependence, updates), and practical steps to secure your home network, with notes on privacy and on the regulations that are starting to raise baseline standards.',
  nutshell: [
    'A smart home has **devices**, a **controller or hub**, a **network** and often a **cloud service**. **Matter** aims to let devices from different brands work together.',
    'Prefer devices with **local control** (they keep working if the Internet or the company goes away), a clear **update policy** and a good **security track record**.',
    '**Put IoT devices on a separate network** (guest network or VLAN), change default passwords, enable updates, disable features you do not use.',
    '**Cameras and microphones** carry real privacy risk: understand where recordings go and who can access them.',
    '**Regulation is catching up**: the UK has banned default passwords on consumer devices; Singapore’s Cybersecurity Labelling Scheme rates device security.',
  ],
  sections: [
    {
      id: 'parts',
      title: 'How a smart home fits together',
      blocks: [
        {
          t: 'table',
          head: ['Part', 'What it does', 'Examples'],
          rows: [
            ['Devices', 'Sense or act', 'Bulbs, plugs, locks, thermostats, sensors, cameras'],
            ['Radios', 'Connect devices to the home', 'Wi-Fi, Bluetooth LE, Zigbee, Thread, Z-Wave'],
            ['Hub or controller', 'Bridges radios, runs automations, connects to apps and voice assistants', 'A smart speaker with a Thread border router; a dedicated hub; a home server (Home Assistant)'],
            ['App and voice assistant', 'The user interface', 'Phone apps; voice assistants'],
            ['Cloud service', 'Remote access, accounts, backup, integrations', 'The maker’s servers; some devices stop working if the service shuts down'],
            ['Home network', 'Carries it all', 'Router, access points, switches'],
          ],
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Local', title: 'Works without the Internet', body: 'Matter, Zigbee, Z-Wave and local APIs let automations run inside your home. Faster, more private, more resilient.' },
            { tag: 'Cloud', title: 'Depends on the vendor', body: 'Cloud-only devices stop working when the Internet is down, or when the company changes terms or closes. Check the vendor’s track record.' },
            { tag: 'Matter', title: 'One standard', body: 'Choose Matter devices where you can, and check which device types and controllers your setup supports.' },
            { tag: 'Home Assistant', title: 'DIY control', body: 'Open-source platforms such as Home Assistant combine many brands with local control, at the cost of more setup and maintenance.' },
          ],
        },
      ],
    },
    {
      id: 'choose',
      title: 'Choosing devices',
      blocks: [
        {
          t: 'checklist',
          items: [
            'Does it work locally, or only through the maker’s cloud?',
            'How long does the maker promise security updates, and does it publish them?',
            'Does it support Matter or an open standard, so that you are not locked in?',
            'Does it require an account, and what data does it collect?',
            'Can you turn off features such as remote access, microphones and cameras?',
            'Is there a hardware switch for the microphone or camera shutter?',
            'Does it have an independent security label or certification (for example, Singapore’s Cybersecurity Labelling Scheme levels)?',
            'What happens if the company disappears? Can you still use it?',
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Fewer, better devices', text: 'Every device is another thing to update and another way in. Buy what you will use, from makers with a track record, and retire devices that no longer receive updates.' },
      ],
    },
    {
      id: 'network',
      title: 'Securing the home network',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Change the router’s admin password and update its firmware', body: 'Your router is the front door. Use a strong unique password, disable remote administration unless needed, and enable automatic updates.' },
            { title: 'Use WPA3 or WPA2-AES with a strong passphrase', body: 'Avoid open networks and WPS.' },
            { title: 'Separate IoT devices', body: 'Put smart devices on a guest network or an IoT VLAN, so that a compromised bulb cannot reach your laptop or NAS. Allow only what is needed (for example, the hub talking to the devices).' },
            { title: 'Change default credentials on every device', body: 'Default passwords were the main way the Mirai botnet recruited cameras and routers.' },
            { title: 'Keep devices updated and remove unsupported ones', body: 'Turn on automatic updates; replace devices that no longer get them.' },
            { title: 'Disable unneeded features', body: 'Turn off UPnP on the router, remote access you do not use, and old protocols.' },
            { title: 'Monitor', body: 'Look at the list of devices on your network occasionally. Unknown devices deserve investigation.' },
          ],
        },
        {
          t: 'dodont',
          do: ['Use unique, strong passwords with a password manager.', 'Turn on two-factor authentication on device accounts.', 'Back up your router and hub settings.'],
          dont: ['Forward ports from the Internet to cameras or hubs.', 'Reuse passwords across devices.', 'Ignore firmware update prompts for years.'],
        },
      ],
    },
    {
      id: 'privacy',
      title: 'Privacy and rules',
      blocks: [
        {
          t: 'table',
          head: ['Issue', 'Consider'],
          rows: [
            ['Voice assistants', 'They listen for a wake word. Check what is stored, how long, who reviews it, and how to delete it'],
            ['Cameras and doorbells', 'Where do recordings go? Who else can access them? Point cameras at your own property and tell visitors; local laws govern recording of others'],
            ['Behaviour data', 'Smart meters, thermostats and appliances reveal when you are home and asleep'],
            ['Children’s devices', 'Toys and monitors with cameras and microphones need extra scrutiny'],
            ['Selling or giving away devices', 'Factory-reset and remove from your account to wipe personal data'],
          ],
        },
        {
          t: 'table',
          head: ['Regulation or scheme', 'What it does'],
          rows: [
            ['UK Product Security and Telecommunications Infrastructure (PSTI) regime (in force from April 2024)', 'Requires makers of consumer connectable products sold in the UK to avoid universal default passwords, publish a vulnerability disclosure contact and state how long updates will be provided'],
            ['EU Cyber Resilience Act (adopted 2024, phased in)', 'Sets cybersecurity requirements for products with digital elements sold in the EU'],
            ['Singapore Cybersecurity Labelling Scheme (CLS), launched 2020 by the Cyber Security Agency', 'A label showing the security level of consumer IoT devices, with several levels from basic requirements to more rigorous testing; originally covered Wi-Fi routers and smart home hubs and expanded to other devices'],
            ['US Cyber Trust Mark (voluntary programme announced 2024)', 'A label for consumer smart devices meeting NIST-based criteria; details have been developing'],
            ['ETSI EN 303 645', 'A widely used international baseline standard for consumer IoT security'],
          ],
          caption: 'Check the current status of schemes, which are evolving.',
        },
        { t: 'links', items: [{ path: 'cybersecurity/attack-surface/iot-security', note: 'IoT security in depth' }, { path: 'networking/iot-connectivity/iot-short-range-radios', note: 'Matter and Thread' }, { path: 'networking/start-here', note: 'Back to the start' }] },
      ],
    },
  ],
  sources: [
    'Connectivity Standards Alliance. Matter specification.',
    'UK Government (2023). The Product Security and Telecommunications Infrastructure (Security Requirements for Relevant Connectable Products) Regulations.',
    'Cyber Security Agency of Singapore. Cybersecurity Labelling Scheme (CLS).',
    'ETSI EN 303 645 V2.1.1 (2020). Cyber Security for Consumer Internet of Things: Baseline Requirements.',
    'Antonakakis, M., et al. (2017). Understanding the Mirai botnet. USENIX Security Symposium.',
    'Apthorpe, N., et al. (2017). Spying on the smart home: privacy attacks and defenses on encrypted IoT traffic. arXiv.',
  ],
  related: ['cybersecurity/attack-surface/iot-security', 'networking/iot-connectivity/iot-short-range-radios', 'networking/start-here'],
}

export default guide
