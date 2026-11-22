import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Every society has rules about what to do and not to do that are not written in any law: how close to stand, when to bow, what to eat, what not to say, whom to greet first. These norms are mostly followed without thought, and noticed mainly when broken. Anthropologists have studied how norms are learned and enforced, why some things are taboo, how people manage “face” in conversation, and why etiquette matters for cooperation. This guide combines the classic ideas (Durkheim, Douglas, Goffman, Brown and Levinson) with examples across cultures.',
  nutshell: [
    '**Norms** are shared expectations about behaviour, enforced mostly by **approval and disapproval**. Many are learned young and followed **automatically**.',
    '**Taboos** are strongly forbidden acts, objects or topics. Mary Douglas showed they often mark **boundaries and categories**: “dirt is matter out of place”.',
    '**Face** (Goffman) is the social image people claim. **Politeness** is the work of protecting each other’s face.',
    '**Etiquette** differs widely (personal space, gifts, eating, time) and works as a **coordination device** and a **signal** of respect and belonging.',
    'Norms are **not random**: they often solve coordination problems or signal commitment. But they can also entrench inequality.',
  ],
  sections: [
    {
      id: 'norms',
      title: 'What norms are and how they work',
      blocks: [
        {
          t: 'table',
          head: ['Level', 'What it is', 'Example'],
          rows: [
            ['Descriptive norm', 'What most people actually do', 'Most people queue at a bus stop'],
            ['Injunctive norm', 'What people think you should do (and will approve of)', 'You should not jump the queue'],
            ['Folkway', 'A custom with mild consequences if broken', 'Dress codes; saying thank you'],
            ['Mores', 'A norm with moral weight and strong reaction if broken', 'Honouring promises; respect for elders'],
            ['Law', 'A formal rule backed by the state', 'Traffic laws'],
          ],
          caption: 'William Graham Sumner’s distinction between folkways and mores (1906) is a classic starting point.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Learned', title: 'Socialisation', body: 'Children learn norms from parents, peers, teachers and media, partly by imitation and partly by correction. Many are never explicitly taught.' },
            { tag: 'Enforced', title: 'Sanctions, big and small', body: 'A frown, gossip, a joke at your expense, or exclusion. Few norms need a policeman.' },
            { tag: 'Internalised', title: 'Feeling it from inside', body: 'People feel shame, guilt or embarrassment when they break a norm, even when unobserved.' },
            { tag: 'Situational', title: 'Context decides', body: 'Behaviour acceptable at a party may not be at a funeral. Skilled people read the situation.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'Experiment: breaching', text: 'Harold Garfinkel asked students to behave in ways that breach everyday expectations, such as acting like a lodger in their own home. Families became upset and demanded explanations. The exercise revealed how much of everyday life rests on unspoken rules.' },
      ],
    },
    {
      id: 'taboo',
      title: 'Taboo, purity and pollution',
      blocks: [
        { t: 'p', text: 'The word taboo comes from Tongan (tabu), recorded by Captain James Cook in 1777. In Mary Douglas’s Purity and Danger (1966), taboos and ideas of pollution are ways of marking and defending the categories a culture uses to organise the world. Dirt, she wrote, is “matter out of place”: shoes are not dirty on the floor, but on the dining table they are. Things that fall between categories (like shellfish in the Hebrew Bible’s classification of animals, according to her reading) may be treated as anomalous and forbidden.' },
        {
          t: 'table',
          head: ['Domain', 'Examples of taboo or purity rules', 'What they may do'],
          rows: [
            ['Food', 'Pork avoidance in Jewish and Islamic law; beef avoidance for many Hindus; fasting rules', 'Mark group identity; express moral and religious values'],
            ['Body and bodily fluids', 'Rules about menstruation, birth, death, and what may be touched', 'Mark transitions and boundaries'],
            ['Death', 'Naming the dead avoided in some societies; rules for mourning', 'Manage grief and protect the living'],
            ['Speech', 'Words not spoken in some contexts; avoidance of in-laws’ names', 'Express respect and distance'],
            ['Sex and kin', 'Incest avoidance; rules on who may marry', 'Maintain family and alliance structures'],
          ],
        },
        {
          t: 'dodont',
          do: ['Ask what category or boundary a taboo protects.', 'Respect local taboos as a guest, even if they seem strange.', 'Notice taboos in your own society: topics you do not discuss at work, or foods you find disgusting.'],
          dont: ['Assume that your culture lacks taboos.', 'Mock others’ taboos.', 'Assume taboos have a single, practical purpose.'],
        },
      ],
    },
    {
      id: 'face',
      title: 'Interaction, face and politeness',
      blocks: [
        { t: 'p', text: 'Erving Goffman (The Presentation of Self in Everyday Life, 1956) compared social life to a stage. People perform roles in front of audiences, and drop the act backstage. “Face” is the positive social value a person claims in an interaction. Embarrassment is the discomfort of losing face; “tact” is the shared effort to avoid it. Penelope Brown and Stephen Levinson (1987) built a theory on this.' },
        {
          t: 'table',
          head: ['Concept', 'Meaning', 'Example'],
          rows: [
            ['Positive face', 'The wish to be liked, approved of and included', 'Compliments, shared jokes, using first names'],
            ['Negative face', 'The wish to act freely without imposition', 'Apologies for asking, indirect requests, “Sorry to bother you”'],
            ['Face-threatening act', 'An act that endangers someone’s face', 'Criticism, refusal, orders, requests'],
            ['Politeness strategies', 'Ways of softening the threat', 'Hints; hedges (“maybe”, “sort of”); positive politeness; apologies'],
          ],
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Culture', title: 'Different weights on face', body: 'In many East Asian settings, saving “face” (mianzi, mentsu) in public is very important, so direct refusal or criticism may be avoided. This is a tendency, not a rule for every person.' },
            { tag: 'Indirectness', title: 'Saying no without saying no', body: 'In some cultures “that would be difficult” or silence can mean no. The listener is expected to read it.' },
            { tag: 'Ranks', title: 'Greeting order and deference', body: 'Bowing depth, who is introduced first, who sits where: these show relationships and respect.' },
            { tag: 'Humour', title: 'Teasing as closeness', body: 'In some groups, mocking is a mark of intimacy, in others an insult. Context matters.' },
          ],
        },
      ],
    },
    {
      id: 'etiquette',
      title: 'Etiquette across cultures',
      blocks: [
        {
          t: 'table',
          head: ['Area', 'Variation', 'Note'],
          rows: [
            ['Personal space (Hall’s proxemics)', 'Edward Hall described four zones: intimate (up to about 0.5 m), personal (about 0.5 to 1.2 m), social (about 1.2 to 3.6 m) and public (beyond). Comfortable distances differ by culture and context', 'Treat the numbers as rough; individuals vary widely'],
            ['Time', 'Monochronic cultures treat time as linear and schedules as binding; polychronic cultures are more flexible with multiple activities at once (Hall)', 'A generalisation. Many people move between styles'],
            ['Eating', 'Hands, chopsticks, forks; who eats first; leaving a little food or finishing all of it', 'Each shows respect in its own system'],
            ['Gifts', 'Whether to open a gift in front of the giver; what colours and numbers are suitable; amounts in a red packet', 'Often involve symbolic meaning'],
            ['Eye contact', 'Direct gaze may signal honesty or may be rude to elders', 'Context-dependent'],
            ['Shoes and the home', 'Removing shoes is the norm in many Asian homes, and elsewhere', 'Boundaries of clean and unclean'],
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Beware of stereotypes', text: 'Etiquette guides can turn into stereotypes about “how X people are”. Individuals vary, and norms differ by region, class, generation and setting. Treat such guides as hints to be checked by observation and by asking, and be forgiving when others get it wrong.' },
        {
          t: 'p',
          text: 'Why does etiquette exist? Norms of politeness make interaction predictable and show goodwill. They are also costly signals of belonging: someone who has learnt the right way to eat or greet is showing they are part of the group. From a game-theoretic view, etiquette is a convention that coordinates expectations.',
        },
        { t: 'links', items: [{ path: 'game-theory/society/norms-as-equilibria', note: 'Norms as equilibria' }, { path: 'anthropology/conventions-and-conformity/conformity-and-obedience', note: 'Next: conformity and obedience' }] },
      ],
    },
  ],
  sources: [
    'Sumner, W. G. (1906). Folkways. Ginn.',
    'Douglas, M. (1966). Purity and Danger. Routledge.',
    'Goffman, E. (1956). The Presentation of Self in Everyday Life. University of Edinburgh.',
    'Brown, P., and Levinson, S. C. (1987). Politeness: Some Universals in Language Usage. Cambridge University Press.',
    'Hall, E. T. (1966). The Hidden Dimension. Doubleday; Hall, E. T. (1959). The Silent Language.',
    'Garfinkel, H. (1967). Studies in Ethnomethodology. Prentice-Hall.',
  ],
  related: ['game-theory/society/norms-as-equilibria', 'anthropology/conventions-and-conformity/conformity-and-obedience', 'anthropology/groups-and-difference/cultural-variation-in-mind'],
}

export default guide
