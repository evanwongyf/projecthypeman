import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Attackers are, for the most part, rational actors with limited time and money. Seen that way, security stops being a binary of safe and unsafe and becomes a question of whose costs are higher: if breaking in costs more than the prize is worth, most attackers go elsewhere. This guide uses cost–benefit analysis and simple game theory to explain the asymmetry between attackers and defenders, why perfect security is the wrong goal, and where defence spending does the most good.',
  nutshell: [
    'An attacker proceeds if **expected gain > cost**: \\(p\\cdot V - C > 0\\). Defences work by raising \\(C\\), lowering \\(p\\), or lowering \\(V\\).',
    'Attackers choose the **cheapest path** (the weakest link); strengthening anything else changes nothing.',
    'The **defender’s dilemma**: the defender must succeed everywhere, always; the attacker needs one success. Detection and response restore balance.',
    'In a **Stackelberg game** the defender commits first and the attacker best-responds; randomisation and unpredictability can beat predictable defence.',
  ],
  sections: [
    {
      id: 'cba',
      title: 'The attacker’s calculation',
      lead: 'Profit, probability, cost.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\mathbb E[\text{profit}]=p\,V-C-q\,F,\qquad \text{attack iff }\ pV>C+qF`,
          caption: 'A simple model of an attacker’s decision.',
          where: [{ sym: 'p', def: 'probability the attack succeeds' }, { sym: 'V', def: 'value of the prize if it does' }, { sym: 'C', def: 'cost of the attempt (tools, time, infrastructure)' }, { sym: 'q,\\ F', def: 'probability of being caught and the penalty if caught' }],
          syntax: [
            { sym: 'p\\,V', say: 'the expected prize. Effect: halving the success probability halves it. Defences such as patching and MFA act here.' },
            { sym: 'C', say: 'what the attempt costs, including time. Effect: raising it (friction, rate limits, unique credentials) prices out low-value targets first. Why: commodity attacks are run at scale on thin margins.' },
            { sym: 'q\\,F', say: 'expected punishment. Effect: it varies enormously by jurisdiction and attacker type, which is why deterrence has limited effect on attackers abroad. Detection and cooperation raise q.' },
          ],
          worked: {
            title: 'Ransomware as a business',
            steps: ['A criminal group spends $2,000 of effort to compromise a small business (C), succeeds 5% of the time (p), and extracts $40,000 when it does (V).', '\\(pV = 0.05 \\times 40{,}000 = \\$2{,}000\\): break-even. Raising success to 10% makes it $4,000, profitable.', 'If widespread MFA halves p back to 5%, or backups cut V to $10,000, the attack loses money.'],
            answer: 'Defences need not stop every attack. Pushing pV below C across a population makes a whole class of attack unprofitable. This is why basic controls such as MFA, patching and tested backups have an outsized effect.',
          },
        },
        { t: 'p', text: 'The model also explains **opportunism**. Most attackers scan for easy targets (a known unpatched flaw, a default password) rather than hunting a specific victim. "You do not need to outrun the bear, only the other hiker" is wrong for a targeted attacker with a strong motive, but is a decent description of the bulk of automated crime. Targeted attacks (nation-states, determined criminals) have higher budgets, which is why the threat model should name who you expect.' },
      ],
    },
    {
      id: 'asym',
      title: 'Asymmetry, and weakest links',
      lead: 'Why defence is hard.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`P(\text{breach})=1-\prod_{i=1}^{m}(1-p_i)\;\approx\;\sum_i p_i\ \ \text{(small }p_i\text{)}`,
          caption: 'With m independent weaknesses, each exploitable with probability p_i, the chance at least one is exploited.',
          where: [{ sym: 'm', def: 'the number of independent ways in' }],
          syntax: [{ sym: '1-\\prod(1-p_i)', say: 'the attacker needs only one success. Effect: the defender’s combined risk grows with every weakness. Why: any one failure is enough. With small p_i it is about the sum.' }],
          worked: {
            title: 'A large estate',
            steps: ['100 internet-facing services, each with a 1% chance per year of a successful attack.', '\\(1-0.99^{100}=63\\%\\).', 'Retiring 60 unnecessary services: \\(1-0.99^{40}=33\\%\\).'],
            answer: 'Attack surface reduction is among the most effective controls: every service removed is a term removed from the product.',
          },
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Defender’s dilemma', tag: 'asymmetry', body: 'Defenders must protect everything; an attacker needs one flaw. Remedy: reduce what can be attacked, assume breach, and invest in detection and response so a single failure is survivable.' },
            { title: 'Attacker’s dilemma', tag: 'the other side', body: 'Attackers must avoid detection at every step of a long chain. A defender with good detection only has to notice one step. Make each step noisy.' },
            { title: 'Weakest link', tag: 'security is a chain', body: 'The strongest lock on the front door does nothing if the back window is open. Fix the cheapest path first, as the attack-tree arithmetic shows.' },
            { title: 'Misaligned incentives', tag: 'economics', body: 'Often the party who could prevent harm does not bear its cost (negative externalities): a vendor ships insecure software, the customer pays. Regulation, liability and insurance are attempts to realign incentives (Anderson, 2001).' },
          ],
        },
      ],
    },
    {
      id: 'game',
      title: 'Game theory: committing first',
      lead: 'Defender and attacker as players.',
      blocks: [
        { t: 'p', text: 'In a **Stackelberg security game** the defender commits to a (possibly randomised) strategy, the attacker observes it and best-responds. Airport screening, patrol schedules and random inspections use this reasoning. The result: a **predictable** defender can be exploited, because the attacker simply picks the unguarded option; a defender who **randomises** according to the value of targets makes every target unattractive in expectation.' },
        {
          t: 'table',
          head: ['', 'Attacker hits A', 'Attacker hits B'],
          rows: [['Defender guards A', 'Defender +5 / Attacker −5', 'Defender −10 / Attacker +10'], ['Defender guards B', 'Defender −4 / Attacker +4', 'Defender +6 / Attacker −6']],
          caption: 'Payoffs (defender / attacker). Target B is more valuable. No pure strategy is stable: whatever the defender picks, the attacker hits the other.',
        },
        {
          t: 'math',
          tex: String.raw`x^{*}:\ 5x-4(1-x)=-10x+6(1-x)\;\Rightarrow\;x^{*}=\frac{10}{25}=0.4`,
          caption: 'The defender’s mixed strategy that makes the attacker indifferent between the two targets (x = probability of guarding A).',
          where: [{ sym: 'x', def: 'the probability that the defender guards A (and so guards B with probability 1 − x)' }],
          syntax: [{ sym: '5x-4(1-x)=-10x+6(1-x)', say: 'sets the defender’s expected payoff against "attacker hits A" equal to that against "attacker hits B". Effect: the attacker has no preferred target. Why: this is the mixed-strategy equilibrium (the attacker must be indifferent so that the defender cannot be exploited).' }],
          worked: {
            title: 'Solving it',
            steps: ['Defender payoff if attacker hits A: \\(5x-4(1-x)=9x-4\\). If B: \\(-10x+6(1-x)=6-16x\\).', 'Equate: \\(9x-4=6-16x\\) → \\(25x=10\\) → \\(x=0.4\\).', 'Expected defender payoff: \\(9(0.4)-4=-0.4\\).'],
            answer: 'Guard the lesser-valued A 40% of the time and the more valuable B 60%, unpredictably. The defender expects a small loss of 0.4 rather than a 10-point loss against a predictable plan.',
          },
        },
        { t: 'callout', tone: 'note', title: 'Why perfect security is the wrong goal', text: 'Each extra unit of security costs more than the last, while the loss it prevents shrinks. The optimum is where the marginal cost of a control equals the marginal reduction in expected loss (Gordon and Loeb, 2002 showed that a firm should spend at most about 37%, or 1/e, of the expected loss on protecting an asset). Zero risk is unobtainable; the aim is risk that is understood, owned and acceptable.' },
      ],
    },
  ],
  sources: [
    'Anderson, R. (2001). Why information security is hard: an economic perspective. *ACSAC 2001*.',
    'Gordon, L. A. & Loeb, M. P. (2002). The economics of information security investment. *ACM TISSEC*, 5(4).',
    'Tambe, M. (2011). *Security and Game Theory*. Cambridge University Press.',
    'Herley, C. (2014). Security, cybercrime, and scale. *Communications of the ACM*, 57(9).',
    'Schneier, B. (1999). Attack trees. *Dr. Dobb’s Journal*.',
  ],
  related: ['cybersecurity/foundations/threat-modelling', 'cybersecurity/foundations/cia-and-risk', 'cybersecurity/maths-and-reasoning/security-maths', 'cybersecurity/attack-surface/social-engineering'],
}

export default guide
