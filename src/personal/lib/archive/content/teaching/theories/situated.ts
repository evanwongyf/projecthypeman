import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Situated learning theory says that learning is not just something that happens inside a head; it happens through taking part in the real activities of a community. Newcomers learn by gradually joining in, moving from the edges of a practice toward its centre.',
  nutshell: [
    'Jean Lave and Etienne Wenger (1991): learning as **legitimate peripheral participation** in a community of practice.',
    'A **community of practice** is a group that shares a domain, a community and a practice: midwives, tailors, a school maths department.',
    'Knowledge learned in authentic contexts may transfer more readily to those contexts.',
    'Critics warn against overstating it: abstract instruction and practice out of context also work well.',
  ],
  sections: [
    {
      id: 'lpp',
      title: 'Legitimate peripheral participation',
      blocks: [
        {
          t: 'p',
          text: 'Lave and Wenger studied apprenticeships: Yucatec midwives, Liberian tailors, US Navy quartermasters, butchers, and members of Alcoholics Anonymous. Newcomers began with simple, low-risk but real tasks at the edge of the practice (a tailor’s apprentice sewing hems before cutting cloth). Over time they took on more central tasks and became full members. Learning was inseparable from becoming part of the community.',
        },
        {
          t: 'terms',
          items: [
            { term: 'Legitimate', def: 'Newcomers are accepted as genuine, if junior, members.' },
            { term: 'Peripheral', def: 'They start at the edges, with simpler or lower-stakes tasks.' },
            { term: 'Participation', def: 'They learn by doing real work of the community, not by exercises about it.' },
          ],
        },
      ],
    },
    {
      id: 'communities',
      title: 'Communities of practice',
      lead: 'Wenger (1998).',
      blocks: [
        {
          t: 'cards',
          cols: 3,
          items: [
            { title: 'Domain', body: 'A shared area of interest and competence that gives the community its identity.' },
            { title: 'Community', body: 'Members who interact, help each other and share information.' },
            { title: 'Practice', body: 'A shared repertoire of resources: methods, tools, stories, ways of handling problems.' },
          ],
        },
        {
          t: 'p',
          text: 'Teachers belong to communities of practice too. Much of what new teachers learn comes from working alongside colleagues, which is why mentoring, co-planning and [reflection](@teaching/guides/growth/reflection) with others matter.',
        },
      ],
    },
    {
      id: 'classroom',
      title: 'In education',
      blocks: [
        {
          t: 'list',
          items: [
            '**Authentic tasks**: work that resembles what practitioners actually do, such as analysing real data or writing for a real audience ([project-based learning](@teaching/techniques/active-learning/project-based)).',
            '**Cognitive apprenticeship**: making expert thinking visible and gradually handing over responsibility ([modelling](@teaching/techniques/instruction/modelling)).',
            '**Classroom as community**: shared norms, roles and ways of talking that learners grow into ([classroom talk](@teaching/subjects/talk)).',
            '**Placements and internships**: structured participation in real workplaces.',
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'A useful caution',
          text: 'Anderson, Reder and Simon (1996) argued that some claims made for situated learning were overstated: knowledge does often transfer across contexts, and abstract instruction and practice outside real contexts can be very effective. The theory is a helpful reminder about identity, community and authenticity, not a reason to abandon explicit teaching.',
        },
      ],
    },
  ],
  sources: [
    'Lave, J., & Wenger, E. (1991). *Situated learning: Legitimate peripheral participation*. Cambridge University Press.',
    'Wenger, E. (1998). *Communities of practice: Learning, meaning, and identity*. Cambridge University Press.',
    'Brown, J. S., Collins, A., & Duguid, P. (1989). Situated cognition and the culture of learning. *Educational Researcher, 18*(1), 32–42.',
    'Anderson, J. R., Reder, L. M., & Simon, H. A. (1996). Situated learning and education. *Educational Researcher, 25*(4), 5–11.',
  ],
  related: ['teaching/theories/social-constructivism', 'teaching/techniques/instruction/modelling', 'teaching/theories/experiential'],
}

export default guide
