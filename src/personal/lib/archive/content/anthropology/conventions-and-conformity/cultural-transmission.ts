import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Why does one custom, word or technology spread through a population while another fades? Why do some traditions last for centuries, and others disappear in a generation? Researchers in cultural evolution, diffusion studies and sociology have modelled how ideas and practices spread, using the idea that people copy others according to biases. This guide covers the main concepts: transmission biases, the S-curve of adoption, Granovetter’s threshold model (a clean mathematical picture of tipping), the meme idea and its limits, and why traditions persist or change.',
  nutshell: [
    'Practices spread by **social learning**, with biases for copying the **majority**, the **successful** and the **prestigious**.',
    'Adoption of an innovation often follows an **S-curve**: slow, then fast, then slow again (Rogers’ **diffusion of innovations**).',
    '**Granovetter’s threshold model**: each person joins when enough others have; a small change in the distribution of thresholds can mean the difference between a **cascade** and **nothing**.',
    '**Memes** (Dawkins) are a useful metaphor, but ideas are **transformed** as they spread, unlike genes.',
    'Traditions persist because they are **useful**, **coordinated**, **meaningful**, **costly to leave**, or **backed by power**, and change when conditions or expectations shift.',
  ],
  sections: [
    {
      id: 'biases',
      title: 'How practices spread',
      blocks: [
        {
          t: 'table',
          head: ['Mechanism', 'How it works', 'Example'],
          rows: [
            ['Vertical transmission', 'From parents to children', 'Language, religion, food habits'],
            ['Horizontal transmission', 'Between peers', 'Slang, fashions, technologies'],
            ['Oblique transmission', 'From non-parent adults such as teachers and elders', 'Craft skills, school norms'],
            ['One to many', 'From a source to a large audience', 'Broadcasts, social media influencers'],
          ],
        },
        { t: 'p', text: 'Combined with the biases described in the guide on cooperation and culture, such as copying the majority, the successful and the prestigious, these channels explain why customs cluster by region, family and social network.' },
      ],
    },
    {
      id: 'scurve',
      title: 'The S-curve of adoption',
      blocks: [
        { t: 'p', text: 'Everett Rogers (Diffusion of Innovations, 1962) studied how new practices, from hybrid corn in Iowa to new medicines, spread. Adoption typically follows an S-shaped curve: a few innovators start, early adopters follow, then comes the rapid middle, and finally laggards. Rogers named five groups by timing.' },
        {
          t: 'bars',
          title: 'Rogers’ adopter categories (share of the eventual population)',
          items: [
            { label: 'Innovators', value: 2.5 },
            { label: 'Early adopters', value: 13.5 },
            { label: 'Early majority', value: 34 },
            { label: 'Late majority', value: 34 },
            { label: 'Laggards', value: 16 },
          ],
          unit: '%',
          caption: 'Rogers’ proportions are conventional (based on a normal curve), not natural constants. The categories describe timing, not worth: a laggard may have good reasons to wait.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Advantage', title: 'What speeds adoption', body: 'Clear benefit, compatibility with existing practice, simplicity, trialability and visibility of results.' },
            { tag: 'Network', title: 'Social ties matter', body: 'Weak ties (Granovetter) spread information across groups; strong ties provide influence and trust.' },
            { tag: 'Critical mass', title: 'Tipping', body: 'For things with network effects, such as telephones or messaging apps, value rises with use, and there is a point after which adoption feeds itself.' },
            { tag: 'Resistance', title: 'Why not adopt', body: 'Cost, risk, lack of access, conflicting identity and sensible scepticism.' },
          ],
        },
      ],
    },
    {
      id: 'threshold',
      title: 'Granovetter’s threshold model',
      blocks: [
        { t: 'p', text: 'Mark Granovetter (1978) gave a vivid model of collective behaviour such as riots, strikes, fashions and the adoption of a practice. Each person has a threshold: the number of others who must already be doing something before they will join. A person with threshold zero acts alone (an instigator); someone with threshold 10 needs to see ten others first.' },
        {
          t: 'example',
          title: 'Two crowds with almost the same average',
          lines: [
            { label: 'Crowd A', text: '100 people with thresholds 0, 1, 2, 3, …, 99, one of each. The person with threshold 0 starts. Now one person has acted, so the person with threshold 1 joins, then 2 people have acted, so threshold 2 joins, and so on.' },
            { label: 'Result A', text: 'A full domino effect: all 100 join.' },
            { label: 'Crowd B', text: 'The same, except the person with threshold 1 is replaced by a second person with threshold 2. Thresholds: 0, 2, 2, 3, 4, …, 99.' },
            { label: 'Result B', text: 'The person with threshold 0 acts. Now one has acted, and nobody has a threshold of 1. The process stops with just one person, though the average threshold is almost the same.' },
            { label: 'Lesson', text: 'Outcomes can depend on the exact distribution of thresholds, not the average, so two apparently similar crowds, or two similar societies, can behave very differently. Small details can decide whether a cascade starts.' },
          ],
        },
        {
          t: 'dodont',
          do: ['Look at the distribution of readiness in a group, not just the average.', 'Look for instigators (low threshold) and bridges (people whose joining pushes others over).', 'Remember that visibility of how many have joined matters.'],
          dont: ['Judge a group’s mood by its average opinion.', 'Assume that cascades are inevitable or random.', 'Mistake the model for a full explanation of real riots, which also involve organisation, grievance and identity.'],
        },
      ],
    },
    {
      id: 'memes',
      title: 'Memes and cultural evolution',
      blocks: [
        { t: 'p', text: 'Richard Dawkins (1976) coined “meme” for a unit of cultural transmission analogous to a gene. The idea is vivid (it also gave the internet its word for viral images), but critics note that ideas are not copied exactly: they are rebuilt, simplified and reinterpreted each time (Dan Sperber’s “epidemiology of representations”). Cultural evolution is better studied as a process of variation, selection through the biases above, and transmission, with attention to the psychology of the receiver.' },
        {
          t: 'table',
          head: ['Why traditions persist', 'Why they change'],
          rows: [
            ['They work (technology, rules)', 'Conditions change'],
            ['Coordination: everyone expects them', 'A critical mass moves together'],
            ['Meaning and identity: they signal who we are', 'New identities or contact with other groups'],
            ['Power and enforcement', 'Power shifts, or enforcement lapses'],
            ['Cost of leaving: investment in the existing way', 'New options become cheaper'],
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Revival as well as loss',
          text: 'Cultures can recover what was lost. Modern Hebrew was revived as a spoken language in the late nineteenth and twentieth centuries. Māori language nests (kōhanga reo, from 1982) brought young children back into the language. Traditions are not fixed: communities choose what to keep, adapt and recreate.',
        },
        { t: 'links', items: [{ path: 'anthropology/origins/cooperation-and-cumulative-culture', note: 'Social learning and cumulative culture' }, { path: 'anthropology/conventions-and-conformity/herd-behaviour', note: 'Cascades and herds' }, { path: 'game-theory/society/norms-as-equilibria', note: 'Tipping norms' }] },
      ],
    },
  ],
  sources: [
    'Rogers, E. M. (2003). Diffusion of Innovations, 5th edition. Free Press.',
    'Granovetter, M. (1978). Threshold models of collective behavior. American Journal of Sociology.',
    'Granovetter, M. (1973). The strength of weak ties. American Journal of Sociology.',
    'Dawkins, R. (1976). The Selfish Gene. Oxford University Press.',
    'Sperber, D. (1996). Explaining Culture: A Naturalistic Approach. Blackwell.',
    'Mesoudi, A. (2011). Cultural Evolution. University of Chicago Press.',
  ],
  related: ['anthropology/origins/cooperation-and-cumulative-culture', 'anthropology/conventions-and-conformity/herd-behaviour', 'game-theory/society/norms-as-equilibria'],
}

export default guide
