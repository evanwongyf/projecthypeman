import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Everyday devices now record what people do: a smartwatch logs heart rate and movement, a doorbell stores video, a car keeps location and speed, a smart speaker retains voice commands, a thermostat knows when a home is empty. For investigators these are potential sources of evidence, and for defendants and victims they are also privacy risks. IoT and device forensics is difficult because devices use many formats, store little locally, and keep much of their data in the cloud. This guide covers what devices can hold, how evidence is preserved and extracted, the legal and ethical limits, how reliable the data is, and some reported cases. It describes lawful forensic practice, not intrusion.',
  nutshell: [
    'Devices hold **local data** (logs, files, settings), **cloud data** (account records, recordings) and **network traces** (what talked to what).',
    '**Preserve first**: document the scene, keep the device powered or isolated as appropriate, avoid changing evidence, and keep **chain of custody**.',
    'Extraction ranges from **logical** reads and **cloud requests** to **JTAG, chip-off** and other **hardware methods**, each with risk and legal requirements.',
    'Data is **not infallible**: clocks drift, sensors estimate, and formats are proprietary. Findings need validation and honest statements of uncertainty.',
    'Access needs **legal authority** (warrants, production orders). Cloud providers hold much of the data, and privacy law applies.',
  ],
  sections: [
    {
      id: 'sources',
      title: 'What devices can tell investigators',
      blocks: [
        {
          t: 'table',
          head: ['Device', 'Possible data', 'Where it lives'],
          rows: [
            ['Smartphones and tablets', 'Messages, location, app data, photos, sensor logs', 'Device, backups, cloud (see the mobile and cloud guide)'],
            ['Wearables and fitness trackers', 'Heart rate, steps, sleep, GPS tracks, timestamps', 'Device (limited), phone app, cloud account'],
            ['Smart speakers and voice assistants', 'Voice command transcripts and audio, device settings, linked accounts', 'Mostly the vendor’s cloud'],
            ['Smart home sensors, locks, thermostats', 'Door open and close times, motion events, occupancy patterns, temperature settings', 'Hub, cloud logs'],
            ['IP cameras, doorbells, DVRs and NVRs', 'Video, snapshots, motion alerts, access logs', 'Device storage (SD card, hard disk), cloud storage'],
            ['Vehicles (infotainment and telematics)', 'Location history, phone connections, speed, braking, door events, event data recorder', 'Vehicle modules, paired phones, manufacturer cloud'],
            ['Routers and network equipment', 'Connected-device lists, logs, DHCP leases, firewall logs', 'Device memory and flash'],
            ['Medical devices (pacemakers, pumps, monitors)', 'Rhythm and dosage logs, device events', 'Device, clinic and manufacturer systems'],
            ['Drones', 'Flight logs, GPS tracks, camera files, controller app data', 'Aircraft, controller, phone app, cloud'],
            ['Industrial controllers', 'Event logs, program changes, historian data', 'PLCs, SCADA servers'],
          ],
        },
        { t: 'callout', tone: 'note', title: 'The cloud holds most of it', text: 'Many devices keep only a short local buffer and rely on the vendor’s cloud. Obtaining that data requires a legal process directed at the provider, and the provider’s retention rules may mean it is deleted within days or weeks. Early preservation requests matter.' },
      ],
    },
    {
      id: 'preserve',
      title: 'Preserving evidence',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Secure and document the scene', body: 'Photograph the devices in place, with their connections, labels and visible screens. Note which are powered and connected.' },
            { title: 'Decide on power and connectivity', body: 'A connected device may be wiped remotely or overwrite logs. Isolating it (for example, in a shielded bag or by disabling its network) can protect evidence, but shutting it down may lose volatile data. The right choice depends on the device and training.' },
            { title: 'Identify linked accounts and cloud services', body: 'Record the account names, apps and services used, and send preservation requests to providers promptly.' },
            { title: 'Collect and label', body: 'Collect devices, chargers, storage media and any paired controllers, with a record of who handled them and when (chain of custody).' },
            { title: 'Acquire with the least change', body: 'Prefer methods that do not alter the original, use write-blockers where applicable, hash the data and record every step.' },
            { title: 'Analyse a copy', body: 'Work on the acquired copy, not the original, and document tools and versions.' },
          ],
        },
        {
          t: 'table',
          head: ['Acquisition method', 'How it works', 'Notes'],
          rows: [
            ['Logical or file-system extraction', 'Reads files and databases through the device’s normal interfaces or a backup', 'Least invasive; limited to what the interface exposes'],
            ['Cloud acquisition', 'Obtaining data from the provider (by legal process) or from the user’s account with authority', 'Needs authority and care with credentials and tokens'],
            ['Network and log analysis', 'Examining router logs, DNS records and traffic captures', 'Shows which devices talked and when, even without the devices'],
            ['Debug-port access (UART, JTAG, SWD)', 'Using a device’s test interfaces to read memory or storage', 'Specialist skills; may be locked on production devices'],
            ['Chip-off', 'Physically removing the flash memory chip and reading it', 'Destructive and risky; used as a last resort, with a decision to destroy the device recorded'],
            ['Vendor or manufacturer assistance', 'The maker provides data or tools under legal process', 'Varies by company and jurisdiction'],
          ],
        },
      ],
    },
    {
      id: 'reliable',
      title: 'Reliability: what can go wrong',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Time', title: 'Clocks and time zones', body: 'Device clocks drift, reset after power loss, and may use UTC, local time or an arbitrary epoch. Synchronise and verify timestamps against other sources before relying on a timeline.' },
            { tag: 'Sensors', title: 'Estimates, not facts', body: 'A step count or sleep stage is an algorithm’s estimate. Heart-rate sensors can misread with motion. Report accuracy limits.' },
            { tag: 'Formats', title: 'Proprietary and changing', body: 'Data structures vary by model and firmware version. Tools may misparse unfamiliar formats; validate against known test data.' },
            { tag: 'Context', title: 'Who was holding it?', body: 'A device records device activity, not necessarily the person’s. A smart-speaker command could come from anyone in the room, and a watch could be worn by someone else.' },
            { tag: 'Alteration', title: 'Overwritten or modified', body: 'Logs rotate, remote updates change firmware, and users or intruders can delete data. Look for signs of tampering.' },
            { tag: 'Bias', title: 'Confirmation bias', body: 'Data can be read to fit a theory. Test alternative explanations, as with any forensic evidence.' },
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Be honest about uncertainty', text: 'Present what the data shows, how it was obtained, what could affect it and what it cannot show. Overstating the certainty of device data has contributed to errors in investigations.' },
      ],
    },
    {
      id: 'law',
      title: 'Law, ethics and reported cases',
      blocks: [
        {
          t: 'table',
          head: ['Issue', 'Consideration'],
          rows: [
            ['Authority', 'Searching a device or requesting cloud data generally requires legal authority (a warrant or order, or valid consent). Rules differ by country and by the type of data'],
            ['Privacy and proportionality', 'Devices in homes capture the lives of other household members and visitors. Collection should be limited to what is relevant and authorised'],
            ['Cross-border data', 'Cloud data may be stored in other countries, creating legal complications'],
            ['Third-party data', 'A shared home may involve several people’s accounts and consent'],
            ['Admissibility and expert evidence', 'Courts expect reliable methods, documented procedure and qualified testimony'],
            ['Defendants’ rights', 'Defence teams may also need access to device data to test claims'],
          ],
        },
        {
          t: 'table',
          head: ['Reported case', 'What was reported'],
          rows: [
            ['Connecticut, USA (about 2015 to 2017): Fitbit data in a homicide investigation', 'Activity data from the victim’s wearable was reported to contradict the suspect’s account of the timeline'],
            ['Ohio, USA (2016): pacemaker data in an arson case', 'Data from the defendant’s pacemaker was reported to be used by investigators to question his account of the fire'],
            ['Vehicle data in crash investigations (various)', 'Event data recorders and telematics are routinely used to reconstruct speed and braking'],
            ['Smart speaker recordings in criminal cases (various, from about 2015)', 'Requests for voice assistant data have raised questions about privacy and the vendor’s role; outcomes have varied'],
          ],
          caption: 'Brief summaries of cases reported in news and legal commentary; details are contested or incomplete in places, so check primary sources.',
        },
        {
          t: 'dodont',
          do: ['Follow your jurisdiction’s law and your organisation’s procedures.', 'Document everything and keep the original intact.', 'Be open about limits and alternatives.', 'Consider the privacy of people who are not suspects.'],
          dont: ['Access a device or account without authority.', 'Assume device data is accurate without validation.', 'Use destructive methods without a recorded decision.', 'Overlook the chance that data was altered or planted.'],
        },
        { t: 'links', items: [{ path: 'forensics/digital-evidence/mobile-and-cloud', note: 'Mobile, browser, email and cloud artefacts' }, { path: 'forensics/digital-evidence/foundations-and-acquisition', note: 'Foundations and acquisition' }, { path: 'networking/iot-foundations/iot-architecture', note: 'How IoT systems are built' }, { path: 'cybersecurity/attack-surface/iot-security', note: 'Device security' }] },
      ],
    },
  ],
  sources: [
    'National Institute of Standards and Technology (2014). Guidelines on Mobile Device Forensics. NIST SP 800-101 Rev. 1; and NIST (2006). Guide to Integrating Forensic Techniques into Incident Response, SP 800-86.',
    'Oriwoh, E., et al. (2013). Internet of Things forensics: challenges and approaches. 9th IEEE International Conference on Collaborative Computing.',
    'Hossain, M., Karim, Y., and Hasan, R. (2018). FIF-IoT: a forensic investigation framework for IoT using a public digital ledger. IEEE International Congress on Internet of Things.',
    'Scientific Working Group on Digital Evidence (SWGDE). Best practices for mobile device and IoT evidence collection.',
    'Reporting by news outlets on the Connecticut Fitbit case (2017) and the Ohio pacemaker arson case (2017).',
  ],
  related: ['forensics/digital-evidence/mobile-and-cloud', 'forensics/digital-evidence/foundations-and-acquisition', 'cybersecurity/attack-surface/iot-security'],
}

export default guide
