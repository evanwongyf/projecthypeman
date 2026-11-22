import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Over fifty years, security engineers have repeated the same handful of design principles because the same failures keep recurring. They are shortcuts for reasoning: when you meet a new system you can ask whether it follows least privilege, fails safely, relies on secrecy of design, or trusts what it should verify. This guide covers Saltzer and Schroeder’s principles, Kerckhoffs’s principle, defence in depth and zero trust, and how to think like an attacker without becoming one.',
  nutshell: [
    '**Least privilege:** every user and program should have only the access it needs, for only as long as it needs it.',
    '**Fail safe:** when something breaks, default to denying access.',
    '**Kerckhoffs’s principle:** a system should stay secure even if everything about it except the key is public. Do not rely on secret designs.',
    '**Defence in depth** layers controls so one failure does not mean total failure; **zero trust** removes the assumption that being "inside the network" earns trust.',
  ],
  sections: [
    {
      id: 'ss',
      title: 'Saltzer and Schroeder’s principles',
      lead: 'Eight rules from 1975 that still hold.',
      blocks: [
        {
          t: 'table',
          head: ['Principle', 'Meaning', 'Violation'],
          rows: [
            ['Economy of mechanism', 'Keep the design small and simple', 'A huge, complex permission system nobody can reason about'],
            ['Fail-safe defaults', 'Base access on permission, not exclusion; default deny', 'A firewall that allows everything except listed bad hosts'],
            ['Complete mediation', 'Check every access, every time', 'Checking a user’s rights at login and never again'],
            ['Open design', 'Do not depend on secrecy of the design (Kerckhoffs)', 'A home-made cipher kept secret'],
            ['Separation of privilege', 'Require more than one condition (two keys, two people)', 'One administrator can approve and pay'],
            ['Least privilege', 'Minimum access necessary', 'A web app running as the database administrator'],
            ['Least common mechanism', 'Minimise shared components between users', 'Tenants sharing one writable temp directory'],
            ['Psychological acceptability', 'Make the secure way the easy way', 'Rules so painful that staff write passwords on notes'],
          ],
        },
      ],
    },
    {
      id: 'layers',
      title: 'Defence in depth and zero trust',
      lead: 'No single wall.',
      blocks: [
        { t: 'p', text: 'A castle had a moat, walls, a keep and guards because any one could fail. Modern defence in depth does the same: network controls, host hardening, application checks, data encryption, monitoring and people-training. The maths of layering is simple: if each of three independent layers stops 90% of attacks, the chance an attack passes all three is \\(0.1^3 = 0.1\\%\\). In practice layers share failure causes (the same misconfigured admin account), so the independence assumption flatters the defender.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'The old model', tag: 'castle and moat', body: 'Trust everything inside the corporate network, scrutinise what comes from outside. Once an attacker is inside (a stolen laptop, a phished employee), they move freely.' },
            { title: 'Zero trust', tag: 'never trust, always verify', body: 'Every request is authenticated, authorised and encrypted, wherever it comes from, using identity, device health and context. Network location alone grants nothing (NIST SP 800-207).' },
          ],
        },
      ],
    },
    {
      id: 'think',
      title: 'Thinking like an attacker',
      lead: 'A reasoning skill, not a licence.',
      blocks: [
        { t: 'p', text: 'To defend a system you need to see what an adversary sees: the assumptions you made without noticing. Good habits of mind: ask what happens if an input is larger, smaller, negative, empty, repeated, concurrent, or from someone else; ask what the system trusts that it should verify; and look for the place where two components disagree about what a value means (a parsing difference), because attacks often live in the gaps.' },
        { t: 'example', title: 'Reasoning about a password reset', lines: [{ label: 'Claim', text: 'The reset link is emailed, so only the account owner can use it.' }, { label: 'Assumption 1', text: 'The link’s token is unguessable. Check: is it random, long enough (128 bits), single-use and short-lived?' }, { label: 'Assumption 2', text: 'Only the owner reads the mailbox. Check: a compromised email account compromises every service that resets by email.' }, { label: 'Assumption 3', text: 'The site builds the link from its own domain. Check: if it trusts a request header, a forged header could point the link elsewhere.' }, { label: 'Result', text: 'Three checks, each a small property to verify or test. This is the habit of mind, applied to a system you own or are authorised to test.' }] },
      ],
    },
  ],
  sources: [
    'Saltzer, J. H. & Schroeder, M. D. (1975). The protection of information in computer systems. *Proceedings of the IEEE*, 63(9).',
    'Kerckhoffs, A. (1883). La cryptographie militaire. *Journal des sciences militaires*, 9.',
    'Rose, S. et al. (2020). *NIST SP 800-207: Zero Trust Architecture*.',
    'Anderson, R. (2020). *Security Engineering* (3rd ed.). Wiley.',
  ],
  related: ['cybersecurity/foundations/threat-modelling', 'cybersecurity/cryptography/crypto-foundations', 'cybersecurity/maths-and-reasoning/attacker-economics', 'cloud/cloud-security/iam-and-zero-trust'],
}

export default guide
