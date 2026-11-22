import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Building one connected device is a project; running ten thousand for ten years is an operation. Devices must be given identities, enrolled, configured, monitored, updated, and eventually retired, mostly without anyone touching them. The most important and most dangerous part is the over-the-air (OTA) firmware update: it fixes security holes and bugs, and a bad update can brick the entire fleet. This guide describes the device lifecycle, how identity and provisioning work, how to design safe OTA updates (signing, A/B partitions, rollback, staged rollout), how to monitor a fleet, and how to handle end of life.',
  nutshell: [
    'The lifecycle: **manufacture → provision identity → enrol → configure → monitor → update → retire**.',
    'Every device needs a unique **identity** (a certificate or key) injected securely; **shared secrets** across devices are a serious weakness.',
    '**Desired state versus reported state** (device shadows or twins) lets you manage devices that are offline most of the time.',
    '**OTA updates** must be **signed**, **verified**, **atomic**, **recoverable** (A/B slots, rollback) and **staged** (canary rollout).',
    '**Plan end of life**: how long will you support the device, how do you tell customers, and how do you wipe and retire it?',
  ],
  sections: [
    {
      id: 'life',
      title: 'The device lifecycle',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Manufacture and identity', body: 'Each device receives a unique identity at manufacture: a key pair generated inside a secure element (so that the private key never leaves it) and a certificate, or a unique secret.' },
            { title: 'Provisioning and enrolment', body: 'On first connection, the device proves its identity and is registered with the platform, receiving its configuration. Methods include claim-by-QR code, fleet provisioning with a bootstrap certificate, or zero-touch enrolment.' },
            { title: 'Configuration', body: 'The cloud stores the desired settings (reporting interval, thresholds). The device applies them and reports what it actually uses.' },
            { title: 'Operation and monitoring', body: 'Devices send heartbeats, battery levels, signal strength and error counts, and the platform watches for devices that go silent.' },
            { title: 'Updates', body: 'Security patches and features are delivered over the air, in stages.' },
            { title: 'Retirement', body: 'The device’s credentials are revoked, data is wiped, and ownership is transferred or recycled.' },
          ],
        },
        {
          t: 'table',
          head: ['Identity approach', 'How it works', 'Trade-off'],
          rows: [
            ['Unique X.509 certificate per device, key in a secure element', 'The device authenticates with its certificate over TLS; the key cannot be copied', 'Best security; adds hardware cost and a PKI to manage'],
            ['Pre-shared key per device', 'A unique secret provisioned at the factory', 'Simple; must be stored securely, and rotation is harder'],
            ['Shared credentials across all devices', 'One password in firmware', 'Unacceptable: one extracted password compromises every device (a root cause of past botnets)'],
            ['Claim code or QR sticker', 'The user enrols the device into an account by scanning', 'Good for consumer products; the code must be unique and unguessable'],
          ],
        },
      ],
    },
    {
      id: 'state',
      title: 'Desired state, reported state and device twins',
      blocks: [
        { t: 'p', text: 'Many devices sleep and are online only briefly. If you send a command when the device is offline, it is lost. The pattern used by IoT platforms is the device twin or shadow: a document stored in the cloud with two sections. The desired state is what you want the device to be; the reported state is what the device last said it is. The device fetches the desired state when it connects, applies it, and updates the reported state. The difference between them shows what is pending.' },
        {
          t: 'example',
          title: 'Changing a reporting interval',
          lines: [
            { label: 'Desired', text: '{"interval_s": 300} is written by an operator; the previous value was 600.' },
            { label: 'Reported', text: 'The device is asleep, so its reported state still says 600. The platform shows “pending”.' },
            { label: 'Device wakes', text: 'It reads the desired state, sets its interval to 300, and reports {"interval_s": 300}.' },
            { label: 'Converged', text: 'Desired and reported match. If the device never reports, an alarm shows it as stale.' },
          ],
        },
      ],
    },
    {
      id: 'ota',
      title: 'Over-the-air updates done safely',
      blocks: [
        {
          t: 'table',
          head: ['Requirement', 'Why', 'How'],
          rows: [
            ['Authenticity', 'Only your firmware may run', 'Sign images with a private key held in a hardware module; devices verify with an embedded public key (secure boot)'],
            ['Integrity', 'Detect corruption in transit', 'Hashes and signatures over the whole image; verify before applying'],
            ['Atomic and recoverable', 'A failed update must not brick the device', 'A/B partitions: write to the inactive slot, switch only after verification, and fall back if the new image fails to boot'],
            ['Rollback', 'Bad releases must be reversible', 'Keep the previous version; mark the new one “good” only after it has run healthily'],
            ['Anti-rollback', 'Attackers must not install old vulnerable versions', 'Version counters protected in hardware'],
            ['Resilience to power loss', 'Batteries die mid-update', 'Write-then-switch design; resumable downloads'],
            ['Bandwidth and energy', 'Large images are costly on constrained links', 'Delta updates, compression, scheduled updates when power and signal are good'],
            ['Staged rollout', 'Limit the damage of a faulty release', 'Release to 1 per cent, watch metrics, then 10 per cent, then everyone'],
          ],
        },
        {
          t: 'flow',
          title: 'A safe A/B update',
          nodes: [
            { label: 'Download', sub: 'new image to slot B', tone: 'data' },
            { label: 'Verify', sub: 'hash and signature', tone: 'process' },
            { label: 'Reboot into B', sub: 'bootloader switches once', tone: 'process' },
            { label: 'Self-test', sub: 'connects, reports healthy', tone: 'model' },
            { label: 'Commit', sub: 'B becomes the default', tone: 'output' },
          ],
          loop: 'If the self-test fails or times out, the bootloader reverts to slot A automatically.',
        },
        {
          t: 'example',
          title: 'Rollout arithmetic',
          lines: [
            { label: 'Fleet', text: '20,000 devices, a 600 KB firmware image.' },
            { label: 'Data', text: '\\(20{,}000 \\times 0.6\\) MB \\(= 12{,}000\\) MB \\(\\approx 12\\) GB if every device downloads the full image. With a delta update of 60 KB, about 1.2 GB.' },
            { label: 'Stages', text: '1 per cent (200 devices) for a day, 10 per cent (2,000) for two days, then the rest in waves, pausing automatically if error rates or reboot loops rise.' },
            { label: 'Cellular cost', text: 'If each megabyte costs a few cents on a cellular plan, a full push of 12 GB is not trivial. Deltas and Wi-Fi-only updates save money.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'Standards and tools', text: 'The IETF SUIT work (software updates for IoT, RFC 9019 architecture) defines a signed manifest format. Open-source tools include MCUboot (a secure bootloader for microcontrollers), Mender and RAUC (for Linux devices), and Uptane (a framework for automotive updates). Cloud IoT services provide job and rollout features.' },
      ],
    },
    {
      id: 'ops',
      title: 'Monitoring a fleet and end of life',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Heartbeat', title: 'Know who is alive', body: 'Expect each device to report at an interval. Alert on devices that miss several in a row.' },
            { tag: 'Health', title: 'Battery, signal, errors', body: 'Report battery voltage, radio signal strength, reboot counts and error codes. Trends predict failures.' },
            { tag: 'Logs', title: 'Remote diagnostics', body: 'Capture crash dumps and recent logs, with a size and privacy budget. Services such as Memfault specialise in this.' },
            { tag: 'Fleet views', title: 'Cohorts and versions', body: 'Group by firmware version, hardware revision and location, to compare behaviour and target updates.' },
          ],
        },
        {
          t: 'checklist',
          items: [
            'Publish a support period (for example, security updates for 5 or 10 years) and tell customers.',
            'Provide a way to transfer ownership and to factory-reset safely.',
            'Revoke certificates and wipe data when a device is decommissioned.',
            'Plan for vendor, network and standard changes: sunsets of 2G and 3G stranded many devices.',
            'Follow relevant rules: for example, regulations in several countries now require manufacturers to state a support period and provide security updates.',
            'Recycle responsibly: batteries and electronics are hazardous waste.',
          ],
        },
        { t: 'links', items: [{ path: 'networking/iot-operations/industrial-iot', note: 'Next: industrial IoT' }, { path: 'cybersecurity/attack-surface/iot-security', note: 'Secure boot and device identity' }, { path: 'cloud/operations/devops-and-iac', note: 'Release engineering and rollouts' }] },
      ],
    },
  ],
  sources: [
    'Moran, B., et al. (2021). A Firmware Update Architecture for Internet of Things. RFC 9019.',
    'Kuppusamy, T. K., et al. (2018). Uptane: securing software updates for automobiles. ESCAR.',
    'MCUboot project documentation; Mender and RAUC documentation.',
    'Open Mobile Alliance. LwM2M firmware update object.',
    'ETSI EN 303 645: Cyber Security for Consumer Internet of Things: Baseline Requirements (software update provisions).',
  ],
  related: ['networking/iot-operations/edge-data-and-digital-twins', 'cybersecurity/attack-surface/iot-security', 'cloud/operations/devops-and-iac'],
}

export default guide
