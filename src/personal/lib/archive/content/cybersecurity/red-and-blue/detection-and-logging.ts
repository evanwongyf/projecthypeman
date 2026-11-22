import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'You cannot respond to what you cannot see. Detection turns raw logs into alerts a person can act on, and it is harder than it sounds because attacks are rare and ordinary activity is vast. This guide covers what to log, how a SIEM and detection rules work, how detection engineers build and test detections, and the Bayesian arithmetic that explains why most alerts are false and what to do about it.',
  nutshell: [
    'Log what answers "who did what, to what, when, from where": authentication, privilege changes, process starts, network connections, access to sensitive data, configuration changes.',
    'A **SIEM** collects and normalises logs from many sources and runs **rules** and **analytics** on them; **EDR** watches endpoints; **NDR** watches network traffic.',
    'Because real attacks are rare, even an accurate detector produces **mostly false alerts** (the base-rate problem). Tune for **precision**, and measure it.',
    'Good detections target attacker **behaviour** (hard to change) more than **indicators** like hashes and IPs (trivial to change): the "Pyramid of Pain".',
  ],
  sections: [
    {
      id: 'logs',
      title: 'What to log, and how',
      lead: 'Visibility before analytics.',
      blocks: [
        {
          t: 'table',
          head: ['Source', 'Answers', 'Example events'],
          rows: [
            ['Authentication / identity', 'Who logged in, from where, with which factor', 'Failed logins, impossible travel, new MFA device, privileged role assigned'],
            ['Endpoint (EDR, OS logs)', 'What ran on a machine', 'Process creation with command line, script execution, new service, file writes in startup locations'],
            ['Network (flow, DNS, proxy, firewall)', 'Who talked to whom', 'Connections to rare destinations, large outbound transfers, DNS queries to newly registered domains'],
            ['Application and database', 'What users did with data', 'Bulk exports, admin actions, repeated authorisation failures'],
            ['Cloud control plane', 'Changes to infrastructure', 'Policy changes, new access keys, disabled logging, public storage'],
          ],
        },
        { t: 'dodont', do: ['Synchronise clocks (NTP) so events line up across systems.', 'Send logs off the host quickly: an intruder who controls a machine can erase its local logs.', 'Protect log integrity and restrict who may change them.', 'Keep retention long enough to investigate: breaches are often discovered months later.'], dont: ['Log secrets, passwords, tokens or unnecessary personal data.', 'Collect everything and look at nothing: unused logs are cost without value.', 'Rely on a single data source.'] },
      ],
    },
    {
      id: 'engineering',
      title: 'Detection engineering',
      lead: 'Rules as tested software.',
      blocks: [
        { t: 'p', text: 'A detection rule is a hypothesis: "if an attacker does X, the logs will show Y". Detection engineering treats rules like code. State the behaviour and the ATT&CK technique it covers; write the rule (Sigma is a common vendor-neutral format); test that it fires on a safe simulation of the behaviour and does **not** fire on normal activity; document triage steps; deploy; and review its false-positive rate regularly.' },
        {
          t: 'levels',
          caption: 'David Bianco’s Pyramid of Pain, lowest (easiest for the attacker to change) first.',
          items: [
            { name: 'Hash values', body: 'Trivial to change: recompile or add a byte. Blocking a hash helps for hours.' },
            { name: 'IP addresses', body: 'Easy: rent another server.' },
            { name: 'Domain names', body: 'Simple but a small cost.' },
            { name: 'Network / host artifacts', body: 'Annoying: a distinctive user-agent, registry key or file path must be redesigned.' },
            { name: 'Tools', body: 'Challenging: the attacker needs a new tool.' },
            { name: 'Tactics, techniques and procedures', body: 'Tough: a change in how they work. Detections here last the longest.' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Test your detections', text: 'Purple-team exercises and safe simulation frameworks (for example Atomic Red Team) replay known techniques in a lab to check whether alerts fire. A rule that has never been tested is a hope, not a control.' },
      ],
    },
    {
      id: 'bayes',
      title: 'The base-rate problem',
      lead: 'Why most alerts are false.',
      blocks: [
        { t: 'sec-viz', viz: 'base-rate' },
        {
          t: 'math',
          tex: String.raw`\Pr[\text{attack}\mid\text{alert}]=\frac{\Pr[\text{alert}\mid\text{attack}]\,\Pr[\text{attack}]}{\Pr[\text{alert}\mid\text{attack}]\Pr[\text{attack}]+\Pr[\text{alert}\mid\text{benign}]\Pr[\text{benign}]}`,
          caption: 'Bayes’ rule applied to an alert.',
          where: [{ sym: '\\Pr[\\text{alert}\\mid\\text{attack}]', def: 'sensitivity (true positive rate)' }, { sym: '\\Pr[\\text{alert}\\mid\\text{benign}]', def: 'the false positive rate' }, { sym: '\\Pr[\\text{attack}]', def: 'the base rate: how common attacks are among events' }],
          syntax: [
            { sym: '\\Pr[\\text{attack}]', say: 'the prior: how likely an attack is before seeing the alert. Effect: it is tiny for most events, and that dominates the result.' },
            { sym: '\\Pr[\\text{alert}\\mid\\text{benign}]\\Pr[\\text{benign}]', say: 'false alarms among the huge number of benign events. Effect: even a 0.1% false positive rate times millions of events produces thousands of false alerts.' },
          ],
          worked: {
            title: 'A daily alert queue',
            steps: ['A rule runs on 2,000,000 events a day. Attacks are 1 in 200,000 events: 10 per day. Sensitivity 90%, false positive rate 0.05%.', 'True alerts: 10 × 0.9 = 9. False alerts: 1,999,990 × 0.0005 ≈ 1,000.', 'Precision = 9/(9 + 1,000) = 0.9%.', 'Analyst time: 1,009 alerts × 10 minutes ≈ 168 hours a day.'],
            answer: 'The rule needs a dozen analysts and still produces 99% noise. Cutting the false positive rate a hundred-fold to 0.0005% (about 10 false alerts a day) raises precision to 47% and the load to about 3 hours. Tuning the false-positive rate is worth far more than raising the sensitivity.',
          },
        },
        { t: 'cards', cols: 2, items: [
          { title: 'Levers that raise precision', tag: 'tune', body: 'Add context (asset criticality, user role), combine weak signals into one correlated alert, allow-list known-good, and require two independent indicators.' },
          { title: 'Alert fatigue', tag: 'human', body: 'When most alerts are false, real ones are missed. Several major breaches had alerts that fired and were ignored. Count alerts per analyst per shift and treat overload as a risk.' },
        ] },
      ],
    },
  ],
  sources: [
    'Axelsson, S. (2000). The base-rate fallacy and the difficulty of intrusion detection. *ACM TISSEC*, 3(3), 186–205.',
    'Bianco, D. (2013). The Pyramid of Pain. *Enterprise Detection & Response* blog.',
    'Chuvakin, A., Schmidt, K. & Phillips, C. (2013). *Logging and Log Management*. Syngress.',
    'SigmaHQ. *Sigma: generic signature format for SIEM systems* (github.com/SigmaHQ/sigma).',
    'NIST (2006). *SP 800-92: Guide to Computer Security Log Management*.',
  ],
  related: ['cybersecurity/red-and-blue/red-vs-blue', 'cybersecurity/red-and-blue/incident-response', 'cybersecurity/attack-surface/network-security', 'cybersecurity/maths-and-reasoning/security-maths'],
}

export default guide
