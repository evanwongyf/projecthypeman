import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Not every problem is a clash of interests. Often both sides want the same thing and the difficulty is picking the same answer: which side of the road to drive on, which standard to adopt, where to meet. These are coordination games. They have several equilibria and the question is which one gets chosen, and how. Thomas Schelling’s insight was that people often solve them with focal points: choices that stand out as natural. This is also where conventions, standards and much of culture come from.',
  nutshell: [
    'In a **coordination game** players do best when they choose the **same** thing, and there are **several equilibria**.',
    'The **stag hunt** adds risk: the best outcome needs trust, while the safe option needs none. The **battle of the sexes** adds disagreement over which equilibrium.',
    'A **focal point** is an option that stands out as obvious, so people converge on it without talking (Schelling).',
    '**Conventions**, **standards** and many **rules of etiquette** are equilibria of coordination games. Once most follow them, everyone prefers to follow too.',
    'The chosen equilibrium may be **inefficient** (QWERTY, the wrong standard) and hard to leave: **lock-in**.',
  ],
  sections: [
    {
      id: 'stag',
      title: 'The stag hunt: coordination with risk',
      blocks: [
        { t: 'p', text: 'Rousseau told of hunters who can cooperate to catch a stag (a big meal needing everyone) or each chase a hare alone (a small meal, guaranteed). If everyone hunts stag, everyone eats well. If one switches to hare, the stag escapes and the others starve. Both all-stag and all-hare are equilibria. All-stag is better, but all-hare is safe.' },
        { t: 'game-lab', viz: 'payoff', preset: 'stag' },
        {
          t: 'callout',
          tone: 'fact',
          title: 'Risk dominance versus payoff dominance',
          text: 'All-stag is payoff-dominant (best for both). All-hare is risk-dominant: it is the safer bet if you are unsure what the other will do. In the lab, the mixed equilibrium shows that you need to be at least 75 per cent sure the other will go for stag before stag is worth it. Trust is what moves a society from the safe equilibrium to the better one.',
        },
        { t: 'p', text: 'Many real problems are stag hunts: starting a bank run (everyone withdraws or no one does), adopting a new technology that is only useful if others do, joining a protest, investing in a joint venture, or cooperating in a society where you are unsure others will. Low-trust societies are stuck at hare; high-trust ones reach stag.' },
      ],
    },
    {
      id: 'bos',
      title: 'Battle of the sexes: coordination with conflict',
      blocks: [
        { t: 'game-lab', viz: 'payoff', preset: 'bos' },
        { t: 'p', text: 'A couple want to spend the evening together, but one prefers the opera and the other football. Both would rather go together than apart, and each prefers their own choice. There are two equilibria, and each player prefers a different one. Coordination needs a way to break the tie: a convention (“we alternate”), a coin toss, a norm (“the host chooses”), or a power imbalance. The mixed equilibrium is poor, since it often leads to miscoordination.' },
        {
          t: 'table',
          head: ['Tie-breaker', 'Example'],
          rows: [
            ['Convention', 'Cars keep to the right in one country and the left in another'],
            ['Alternation', 'Taking turns choosing the restaurant'],
            ['Randomisation', 'A coin toss'],
            ['Rank or rule', 'The elder or the organiser decides'],
            ['Precedent', 'We did it this way last time'],
          ],
        },
      ],
    },
    {
      id: 'focal',
      title: 'Schelling’s focal points',
      blocks: [
        { t: 'p', text: 'Schelling asked people: “You are to meet a stranger in New York City tomorrow. You have not been told where or when, and cannot communicate. Where and when do you go?” A common answer was Grand Central Station at noon. Nothing in the payoffs picks it out. It is chosen because it is prominent, and each person expects the other to think of it. Schelling called such a choice a **focal point**.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Salience', title: 'The standout option', body: 'A round number, a landmark, the first item in a list, the only odd one out. Prominence helps people converge.' },
            { tag: 'Precedent', title: 'What was done before', body: 'Past practice makes a choice focal. Tradition is a store of solved coordination problems.' },
            { tag: 'Fairness', title: 'The equal split', body: 'Splitting 50:50 is focal in many bargaining situations, even when other splits are equilibria.' },
            { tag: 'Boundaries', title: 'Natural dividing lines', body: 'A river, a mountain range or the 38th parallel: borders are often fixed at features that both sides can recognise.' },
          ],
        },
        {
          t: 'example',
          title: 'Try it with a friend (without talking)',
          lines: [
            { label: 'Task 1', text: 'Each of you secretly picks a number from 1 to 10. You win if you pick the same one.' },
            { label: 'Common answers', text: 'Many people choose 1, 7 or 10. Seven is chosen because people avoid obvious extremes and 7 feels random and special.' },
            { label: 'Task 2', text: 'Each secretly names a heads or tails for a coin. You win if you match. Most people say heads.' },
            { label: 'Lesson', text: 'Focality depends on shared culture. People from the same background converge faster than strangers.' },
          ],
        },
      ],
    },
    {
      id: 'lock',
      title: 'Standards, conventions and lock-in',
      blocks: [
        { t: 'p', text: 'Once a coordination equilibrium is established, no one has reason to leave it alone: if everyone drives on the left, you should too. That makes conventions stable, and sometimes stubborn. A better convention may exist but no individual gains from switching unless many switch together.' },
        {
          t: 'table',
          head: ['Example', 'The convention', 'Lock-in point'],
          rows: [
            ['Side of the road', 'Left or right-hand driving', 'Changing means everyone switching on one day; Sweden did so in 1967'],
            ['QWERTY keyboards', 'A layout designed in the 1870s', 'Everyone has learned it; the real advantage of alternatives is debated'],
            ['Language and spelling', 'Which words mean what', 'A language is useful only if others speak it'],
            ['Technical standards', 'USB, Wi-Fi, shipping containers', 'Network effects make the leading standard more attractive'],
            ['Social etiquette', 'Handshakes, bows, greetings', 'Doing otherwise signals disrespect or confusion'],
          ],
        },
        { t: 'callout', tone: 'note', title: 'Conventions are not arbitrary in every way', text: 'Which side of the road is arbitrary; that there is a side is not. In a coordination game, the content of the convention can be arbitrary, but the need for one is not.' },
        { t: 'links', items: [{ path: 'game-theory/society/norms-as-equilibria', note: 'Norms and conventions as equilibria' }, { path: 'anthropology/conventions-and-conformity/norms-taboos-and-etiquette', note: 'Etiquette and norms across cultures' }] },
      ],
    },
  ],
  sources: [
    'Schelling, T. C. (1960). The Strategy of Conflict. Harvard University Press.',
    'Lewis, D. (1969). Convention: A Philosophical Study. Harvard University Press.',
    'Skyrms, B. (2004). The Stag Hunt and the Evolution of Social Structure. Cambridge University Press.',
    'David, P. A. (1985). Clio and the economics of QWERTY. American Economic Review (and later critiques of the QWERTY story).',
  ],
  related: ['game-theory/foundations/nash-equilibrium', 'game-theory/society/norms-as-equilibria', 'anthropology/conventions-and-conformity/norms-taboos-and-etiquette'],
}

export default guide
