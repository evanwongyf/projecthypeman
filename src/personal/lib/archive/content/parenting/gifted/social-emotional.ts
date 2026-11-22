import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'On average, gifted children are as well adjusted as their peers, or slightly better. But some face particular pressures: feeling different, perfectionism, intense emotions, boredom, and adults who expect maturity to match intellect. This guide covers the common challenges and practical ways to help.',
  sections: [
    {
      id: 'challenges',
      title: 'Common challenges',
      blocks: [
        { t: 'cards', cols: 2, items: [
          { title: 'Perfectionism', body: 'Healthy striving (high standards, enjoying improvement) is fine. Unhealthy perfectionism, fear of mistakes, avoiding tasks they might fail, harsh self-criticism, is linked to anxiety and depression.' },
          { title: 'Overexcitabilities', body: 'Kazimierz Dąbrowski described intellectual, emotional, imaginational, sensual and psychomotor intensities. Evidence that they are specific to giftedness is mixed, but many parents recognise the intensity.' },
          { title: 'Underachievement', body: 'Boredom, fear of failure, peer pressure, or undiagnosed learning difficulties can lead to coasting. It often starts when work first becomes hard.' },
          { title: 'Friendship', body: 'Children want friends who share their interests and level of thinking. Profoundly gifted children may struggle most; mixed-age and interest groups help.' },
          { title: 'Existential worries', body: 'Early awareness of death, injustice, climate change or war can be distressing without the emotional tools to cope. Answer honestly, at their level, and focus on what people can do.' },
          { title: 'Imposter feelings and burnout', body: 'Being labelled “the clever one” can make every struggle feel like exposure. High-pressure teens may burn out, especially around exams.' },
        ] },
      ],
    },
    {
      id: 'help',
      title: 'How parents can help',
      blocks: [
        { t: 'steps', items: [
          { title: 'Praise process, not labels', body: '“You worked out a clever strategy” rather than “You’re a genius.”' },
          { title: 'Model mistakes', body: 'Tell them about your own errors and how you fixed them; laugh at small ones.' },
          { title: 'Give them hard things', body: 'Children who never struggle never learn to cope with struggle. Offer challenge where failure is safe.' },
          { title: 'Name emotions', body: 'Help them label and manage strong feelings: “You’re frustrated because it’s not working yet.”' },
          { title: 'Find their people', body: 'Clubs, camps, olympiad teams and online communities with similar interests.' },
          { title: 'Watch the warning signs', body: 'Persistent sadness, withdrawal, sleep changes or self-criticism are reasons to talk to a counsellor or doctor.' },
        ] },
        { t: 'quote', text: 'The gifted child is not a miniature adult; he is a child who happens to be able to think in advanced ways.', by: 'Paraphrasing Leta Hollingworth, pioneer of gifted education' },
      ],
    },
  ],
  sources: [
    'Neihart, M. et al. (eds.) (2016). The Social and Emotional Development of Gifted Children (2nd ed.). Prufrock.',
    'Francis, R., Hawes, D. J. & Abbott, M. (2016). Intellectual giftedness and psychopathology in children and adolescents: a systematic literature review. Exceptional Children 82(3).',
    'Stoeber, J. & Otto, K. (2006). Positive conceptions of perfectionism. Personality and Social Psychology Review 10(4).',
    'Dąbrowski, K. (1964). Positive Disintegration. Little, Brown.',
  ],
  related: ['parenting/gifted/strict-and-intensive', 'teaching/special-education/approaches/co-occurring'],
}

export default guide
