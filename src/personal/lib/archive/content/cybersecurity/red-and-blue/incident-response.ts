import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Prevention fails sometimes. What decides how bad an incident becomes is how quickly it is noticed, how calmly it is handled and whether the team has practised. This guide covers the NIST incident-response lifecycle, containment decisions, the basics of forensic evidence handling, communications and legal duties (including Singapore’s notification rules), and the measures (MTTD, MTTR, dwell time) used to judge a team.',
  nutshell: [
    'NIST SP 800-61 lifecycle: **Preparation → Detection and analysis → Containment, eradication and recovery → Post-incident activity**, with lessons feeding back into preparation.',
    '**Containment** is a trade-off: act fast to limit damage, but not so fast that you destroy evidence or tip off an intruder before you understand the scope.',
    'Preserve **evidence** with a chain of custody; collect volatile data (memory, connections) before rebooting when you can.',
    '**Metrics:** time to detect (MTTD), time to respond/contain (MTTR) and **dwell time** (how long the intruder was inside). Shorter is better, and all three can be practised.',
  ],
  sections: [
    {
      id: 'lifecycle',
      title: 'The lifecycle',
      lead: 'Four phases, one loop.',
      blocks: [
        {
          t: 'cycle',
          caption: 'NIST SP 800-61 Rev. 2. (Rev. 3, 2025, aligns the same work with the six functions of the Cybersecurity Framework 2.0.)',
          items: [
            { name: 'Preparation', body: 'Plan, roles, contact lists, tooling, logging, backups, runbooks, and rehearsals (tabletop exercises). Most of the work is done before anything happens.' },
            { name: 'Detection and analysis', body: 'Spot an incident, validate it, scope it, classify severity, document timeline and facts. Decide who must be told.' },
            { name: 'Containment, eradication, recovery', body: 'Stop the spread (isolate hosts, disable accounts), remove the cause (malware, access, vulnerability) and restore from known-good state, verifying clean.' },
            { name: 'Post-incident activity', body: 'Blameless review: what happened, what worked, what did not, what to change. Update detections and plans.' },
          ],
        },
        {
          t: 'table',
          head: ['Severity', 'Example', 'Typical response'],
          rows: [
            ['Low', 'A single phishing email reported, no click', 'Triage queue; block sender; no escalation'],
            ['Medium', 'One user’s account compromised, no sensitive data accessed', 'Reset credentials, review activity, notify manager'],
            ['High', 'Malware on several servers; sensitive data possibly accessed', 'Incident team assembled; containment; legal and communications engaged'],
            ['Critical', 'Ransomware encrypting production, or confirmed theft of customer data', 'Executive crisis management; regulators; external responders; business continuity'],
          ],
        },
      ],
    },
    {
      id: 'containment',
      title: 'Containment, evidence and communication',
      lead: 'The hard decisions.',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Short-term containment', tag: 'stop the bleeding', body: 'Isolate a host from the network (not necessarily power it off, which loses memory), disable a compromised account, block a malicious address. Prefer reversible steps.' },
            { title: 'Eradication', tag: 'remove the cause', body: 'Find the entry point and persistence, remove malware, reset all credentials the intruder could have seen, patch the flaw. Rebuilding from a clean image is often safer than cleaning.' },
            { title: 'Recovery', tag: 'restore', body: 'Restore from backups you have verified are clean and predate the intrusion; monitor closely for re-entry. Test restoration regularly: untested backups fail.' },
            { title: 'Forensics basics', tag: 'evidence', body: 'Capture volatile data first (memory, network connections), then disk images using write blockers; hash evidence; document who handled it and when (chain of custody). Work on copies.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'Legal duties in Singapore', text: 'Under the Personal Data Protection Act, organisations must notify the PDPC (and affected individuals where there is significant harm) of notifiable data breaches within 3 calendar days of assessing that the breach is notifiable. Operators of Critical Information Infrastructure must report incidents to the Cyber Security Agency under the Cybersecurity Act (within 2 hours for some incident types). Check the current rules with your legal adviser: they change.' },
        {
          t: 'checklist',
          items: [
            'Is there one incident commander, one scribe and a single timeline everyone updates?',
            'Are communications out-of-band, in case email or chat is compromised?',
            'Have legal, communications, HR and executives been told, as the severity requires?',
            'Has law enforcement or the national CERT been considered?',
            'Is evidence being preserved before systems are rebuilt?',
          ],
        },
      ],
    },
    {
      id: 'metrics',
      title: 'Measuring a response team',
      lead: 'Time is the unit of damage.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{MTTD}=\overline{t_{\text{detected}}-t_{\text{start}}},\quad \text{MTTR}=\overline{t_{\text{contained}}-t_{\text{detected}}},\quad \text{Dwell}=\text{MTTD}+\text{MTTR}`,
          caption: 'Mean time to detect, mean time to respond, and the total time an intruder is active.',
          where: [{ sym: 't_{\\text{start}}', def: 'when the intrusion began (often estimated after the fact)' }, { sym: 't_{\\text{detected}},\\ t_{\\text{contained}}', def: 'when it was first noticed and when it was stopped' }],
          syntax: [
            { sym: '\\overline{\\,\\cdot\\,}', say: 'the average over incidents. Effect: a few very long incidents dominate a mean; report the median and a high percentile too.' },
            { sym: '\\text{MTTD}+\\text{MTTR}', say: 'the intruder’s window of opportunity. Effect: both terms matter; halving either halves the exposure. Why: damage grows with the time the attacker is active.' },
          ],
          worked: {
            title: 'Why dwell time matters',
            steps: ['Industry reports (Mandiant M-Trends) show median global dwell time falling from hundreds of days in the early 2010s to about 10 days in 2023.', 'Suppose an intruder steals data at a steady 500 MB per day. At 10 days dwell: 5 GB. At 200 days: 100 GB.', 'Ransomware operators often move from entry to encryption in days or even hours.'],
            answer: 'Every day shaved off detection and containment reduces data lost and options for the attacker. Drilling the plan (tabletop and live exercises) is the cheapest way to cut MTTR.',
          },
        },
        { t: 'dodont', do: ['Run blameless post-incident reviews and publish the lessons.', 'Practise with tabletop exercises at least twice a year.', 'Keep an up-to-date asset inventory and contact tree.'], dont: ['Pay a ransom without legal advice, or assume payment restores everything.', 'Wipe affected machines before capturing evidence.', 'Discuss the incident on a channel the intruder may be watching.'] },
      ],
    },
  ],
  sources: [
    'NIST (2012). *SP 800-61 Rev. 2: Computer Security Incident Handling Guide*; and Rev. 3 (2025).',
    'Mandiant (annual). *M-Trends Report*.',
    'Personal Data Protection Commission Singapore. *Guide on Managing and Notifying Data Breaches Under the PDPA* (pdpc.gov.sg).',
    'Cybersecurity Act 2018 (Singapore) and the Cybersecurity (Critical Information Infrastructure) Regulations.',
    'SANS Institute. *Incident Handler’s Handbook*.',
  ],
  related: ['cybersecurity/red-and-blue/detection-and-logging', 'cybersecurity/red-and-blue/red-vs-blue', 'cybersecurity/attack-surface/social-engineering', 'cloud/cloud-security/cloud-red-and-blue'],
}

export default guide
