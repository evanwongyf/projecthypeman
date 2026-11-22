import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Connectivism, proposed by George Siemens and Stephen Downes in the mid-2000s, argues that in a digital, networked world, learning is about forming and navigating connections: between ideas, people and information sources. It inspired the first massive open online courses, and it remains debated.',
  nutshell: [
    'Knowledge is distributed across **networks** of people and resources, not just held in individual heads.',
    'Knowing **where** to find information and **how** to judge it becomes as important as knowing facts.',
    'It shaped early "connectivist" MOOCs, which encouraged learners to build their own networks.',
    'Critics argue it describes a view of education in a digital age more than a new theory of how learning happens.',
  ],
  sections: [
    {
      id: 'principles',
      title: 'Key principles',
      lead: 'From Siemens (2005).',
      blocks: [
        {
          t: 'list',
          items: [
            'Learning and knowledge rest in a diversity of opinions.',
            'Learning is a process of connecting specialised nodes or information sources.',
            'Learning may reside in non-human appliances (databases, tools).',
            'The capacity to know more is more critical than what is currently known.',
            'Nurturing and maintaining connections is needed to support continual learning.',
            'The ability to see connections between fields, ideas and concepts is a core skill.',
            'Currency (accurate, up-to-date knowledge) is the intent of connectivist learning activities.',
            'Decision-making is itself a learning process: what is right today may be wrong tomorrow.',
          ],
        },
      ],
    },
    {
      id: 'moocs',
      title: 'Connectivism in practice',
      blocks: [
        {
          t: 'p',
          text: 'In 2008 Siemens and Downes ran an open online course called "Connectivism and Connective Knowledge", often seen as the first MOOC. Thousands took part, blogging, discussing and linking to each other’s work rather than following a fixed syllabus. These "cMOOCs" differed from the later, more structured "xMOOCs" of platforms like Coursera and edX.',
        },
        {
          t: 'cards',
          items: [
            { title: 'Learning networks', body: 'Learners follow experts, join online communities and curate sources.' },
            { title: 'Information literacy', body: 'Finding and judging information becomes central. See [judging a source](@research/evaluating-sources).' },
            { title: 'Learner autonomy', body: 'Learners set goals and choose paths through a rich network of resources.' },
          ],
        },
      ],
    },
    {
      id: 'critique',
      title: 'Debate',
      blocks: [
        {
          t: 'p',
          text: 'Critics such as Verhagen (2006) and Kop and Hill (2008) argued that connectivism is better seen as a pedagogical perspective than a new learning theory: it says a lot about what to learn and where, but relatively little new about how learning happens in the mind. Research on novices also suggests that open, self-directed networked learning works best for learners who already have strong knowledge and self-regulation (see [cognitive load](@teaching/theories/cognitive-load) and [metacognition](@teaching/techniques/learning-strategies/metacognition)).',
        },
      ],
    },
  ],
  sources: [
    'Siemens, G. (2005). Connectivism: A learning theory for the digital age. *International Journal of Instructional Technology and Distance Learning, 2*(1).',
    'Downes, S. (2012). *Connectivism and connective knowledge*. National Research Council Canada.',
    'Kop, R., & Hill, A. (2008). Connectivism: Learning theory of the future or vestige of the past? *International Review of Research in Open and Distance Learning, 9*(3).',
  ],
  related: ['teaching/theories/situated', 'teaching/guides/contexts/online', 'research/evaluating-sources'],
}

export default guide
