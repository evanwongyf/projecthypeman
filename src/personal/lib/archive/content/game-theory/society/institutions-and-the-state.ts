import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'If norms and reputation can solve many dilemmas, why do we also have laws, courts, police and governments? Because informal enforcement has limits: it works best in small groups where everyone knows everyone, and it fails when strangers deal with each other, when stakes are large, or when the powerful can ignore the weak. Institutions are the formal and informal rules, and the organisations that enforce them, which change the payoffs in the games of social life. This guide looks at the state as a solution to a dilemma, at why enforcement is itself a problem (who guards the guardians?), and at why institutions differ so much between countries.',
  nutshell: [
    '**Institutions** are the rules of the game in a society, formal (laws, contracts) and informal (norms), plus the organisations that enforce them (Douglass North).',
    'Hobbes argued that without a **sovereign** to enforce agreements, life would be a war of all against all, a large-scale **prisoner’s dilemma**. A state **changes the payoffs** by punishing defection.',
    'Enforcement is itself a **public good**, and enforcers must be **constrained**: a state strong enough to protect you is strong enough to prey on you.',
    '**Third-party enforcement** (courts, police) lets strangers cooperate in large societies; informal sanctions are enough only in small ones.',
    'Institutions can be **good or bad equilibria**: the same incentives can sustain the rule of law in one country and corruption in another.',
  ],
  sections: [
    {
      id: 'hobbes',
      title: 'Hobbes and the state as a solution',
      blocks: [
        { t: 'p', text: 'Thomas Hobbes (Leviathan, 1651) imagined life without government as a “war of all against all”: everyone fears attack by others, so everyone strikes first. This is a prisoner’s dilemma, or a security dilemma, among many people. His solution was a sovereign with the power to enforce promises and punish violence, to which people give up some freedom in exchange for security. The sovereign changes the payoffs, so that peace becomes the best reply.' },
        {
          t: 'table',
          head: ['Without enforcement', 'With a credible enforcer'],
          rows: [
            ['Cooperating risks being exploited', 'Breaking a promise is punished, so cooperating is safe'],
            ['Everyone arms against everyone', 'Violence is monopolised and controlled, so arms are less needed'],
            ['Contracts rely on trust and reputation', 'Contracts can be enforced by a court, even between strangers'],
            ['Investment is risky (it can be taken)', 'Property rights protect those who invest'],
          ],
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Contractarian view', title: 'The state as agreement', body: 'Hobbes, Locke and Rousseau explained the state as a bargain: citizens accept rules and authority because everyone is better off. Rawls and Harsanyi updated this with the idea of choosing rules without knowing your place in society.' },
            { tag: 'Predatory view', title: 'The state as predator', body: 'Others (Charles Tilly, Mancur Olson) saw early states as “stationary bandits” who took taxes in exchange for protection, and protected because it was in their long-run interest to have a productive population.' },
          ],
        },
      ],
    },
    {
      id: 'enforce',
      title: 'Why formal enforcement matters',
      blocks: [
        { t: 'p', text: 'In a village, a cheat is known to all, and shunning is effective. In a city, among strangers, reputations are weak and exit is easy. As exchange expands, personal enforcement must give way to impersonal institutions: courts, written contracts, registries, regulators. Douglass North argued that the shift from personal to impersonal exchange is the key to economic development.' },
        {
          t: 'table',
          head: ['Type of enforcement', 'How it works', 'Limits'],
          rows: [
            ['First-party (conscience)', 'You keep promises because you feel guilty if you do not', 'Varies by person'],
            ['Second-party (retaliation)', 'The wronged person punishes', 'Risk of feuds; weak if the wrongdoer is stronger'],
            ['Informal third-party (gossip, shunning)', 'The community punishes', 'Works in small, close groups; can be unfair or capricious'],
            ['Formal third-party (courts, police)', 'A specialised body enforces rules', 'Costly; needs legitimacy and honest officials'],
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Who guards the guardians?', text: 'Enforcers are players too. If the police can extract bribes, if judges can be bought, or if rulers can seize property, the enforcement system becomes part of the problem. A durable institution must make it in the enforcers’ own interest to follow the rules. Constitutions, separation of powers, free press, independent courts, and the possibility of removing leaders are attempts at that.' },
      ],
    },
    {
      id: 'rule-of-law',
      title: 'Rule of law as an equilibrium',
      blocks: [
        { t: 'p', text: 'Barry Weingast argued that constitutional limits on power hold when the citizens will coordinate to resist a ruler who breaks them, a stag hunt among the governed. If citizens act together, a ruler who violates the rules is punished; if they are divided, the ruler can pick off targeted groups one at a time. So rules of law last when a broad cross-section of society treats violations as a violation against all.' },
        {
          t: 'table',
          head: ['Equilibrium', 'Expectations', 'Result'],
          rows: [
            ['Rule of law', 'Officials expect to be punished for breaking rules and citizens expect fair treatment', 'Low corruption, high trust and investment'],
            ['Systemic corruption', 'Everyone expects others to bribe and officials to demand bribes; honest behaviour is costly', 'Self-reinforcing: an honest official or citizen is at a disadvantage'],
          ],
        },
        { t: 'p', text: 'The corruption trap is a coordination problem. Persson, Rothstein and Teorell (2013) argued that where corruption is the norm, anti-corruption reforms fail because they assume “principals” (honest rulers) who will punish corruption, when the actors who would do so are themselves part of the system. Escape needs a coordinated shift, often triggered by a crisis, external pressure, or a credible new leadership.' },
        { t: 'callout', tone: 'note', title: 'An example worth studying', text: 'Singapore moved from widespread corruption in the 1950s to being ranked among the least corrupt countries in the world. The government’s approach combined a powerful independent anti-corruption agency, strong penalties, competitive public pay and consistent enforcement even against senior figures. Scholars debate how much of it generalises, since conditions differed, but it illustrates a shift between equilibria.' },
      ],
    },
    {
      id: 'diff',
      title: 'Why institutions differ',
      blocks: [
        { t: 'p', text: 'Why do some societies develop inclusive institutions, while others remain extractive? Daron Acemoglu and James Robinson (Why Nations Fail, 2012) argued that it depends on who can hold power accountable and on historical turning points (the Glorious Revolution in England, for instance). Critics point to geography, culture and other factors. The game-theoretic lesson is that institutions are equilibria: the people who benefit from them will defend them, so changing them requires shifting the balance of power or expectations.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Inclusive', title: 'Broad participation', body: 'Property rights, rule of law and open entry, protecting ordinary people. Wider groups benefit and support them.' },
            { tag: 'Extractive', title: 'Narrow benefit', body: 'Institutions designed to channel resources to a few. The elite resist reforms that would threaten their position.' },
            { tag: 'Path dependence', title: 'History matters', body: 'Early arrangements shape later options, because people invest in the existing rules.' },
            { tag: 'Critical junctures', title: 'Windows for change', body: 'Crises and shocks can unsettle old equilibria and allow new ones to form.' },
          ],
        },
        { t: 'links', items: [{ path: 'game-theory/society/norms-as-equilibria', note: 'Norms and lock-in' }, { path: 'game-theory/information-and-design/voting-and-collective-choice', note: 'Collective choice' }, { path: 'anthropology/society/power-status-and-hierarchy', note: 'Power and hierarchy across societies' }] },
      ],
    },
  ],
  sources: [
    'Hobbes, T. (1651). Leviathan.',
    'North, D. C. (1990). Institutions, Institutional Change and Economic Performance. Cambridge University Press.',
    'Olson, M. (1993). Dictatorship, democracy, and development. American Political Science Review.',
    'Weingast, B. R. (1997). The political foundations of democracy and the rule of law. American Political Science Review.',
    'Acemoglu, D., and Robinson, J. A. (2012). Why Nations Fail. Crown.',
    'Persson, A., Rothstein, B., and Teorell, J. (2013). Why anticorruption reforms fail. Governance.',
  ],
  related: ['game-theory/society/norms-as-equilibria', 'game-theory/society/social-dilemmas-and-the-commons', 'anthropology/society/power-status-and-hierarchy'],
}

export default guide
