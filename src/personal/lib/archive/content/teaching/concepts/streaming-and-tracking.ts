import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Should students be taught in groups based on how well they have done so far? The question is old, and the practice varies from country to country: England’s “sets”, America’s “tracks”, Singapore’s streams and bands. Supporters say that teaching a class of similar attainment lets the teacher pitch the lesson well; critics say that it labels children early, narrows the opportunities of those placed low and widens gaps. This page looks at what the research says, traces Singapore’s own journey from the Goh Report of 1979 to Full Subject-Based Banding in 2024, and offers principles for grouping fairly.',
  nutshell: [
    '**Between-class ability grouping** (streaming, tracking, setting) has, on average, **little or no benefit** for achievement, and may **harm lower groups**.',
    '**Within-class grouping**, flexible and for specific purposes, has **better evidence**, especially in mathematics.',
    'Placement in a low group often brings **lower expectations, weaker teaching and fewer chances to move up**: it can become a trap.',
    'Singapore introduced **streaming** after the **Goh Report (1979)**, moved to **subject-based banding** in stages, and from **2024** replaced the Express, Normal (Academic) and Normal (Technical) streams with **Full Subject-Based Banding**.',
    'Group **flexibly**, **by subject**, with **high expectations for every group**, and **review often**.',
  ],
  sections: [
    {
      id: 'terms',
      title: 'The terms',
      blocks: [
        {
          t: 'table',
          head: ['Term', 'Meaning', 'Where used'],
          rows: [
            ['Streaming / tracking', 'Students are placed in a class or programme by overall ability, and stay in it for most or all subjects', 'Singapore (to 2023), Germany, the United States (tracks), India'],
            ['Setting', 'Students are grouped by ability in each subject separately', 'England (maths, science, languages)'],
            ['Banding', 'A form of grouping in broad ability bands', 'Many schools'],
            ['Subject-based banding (SBB)', 'Students take some subjects at a higher or lower level, depending on strength in each', 'Singapore primary (from 2008) and now secondary'],
            ['Within-class grouping', 'Groups are formed inside a mixed-ability class for specific tasks', 'Everywhere'],
            ['Mixed-ability teaching', 'No grouping by prior attainment', 'Finland and others'],
          ],
        },
      ],
    },
    {
      id: 'evidence',
      title: 'What the research says',
      blocks: [
        {
          t: 'table',
          head: ['Finding', 'Source'],
          rows: [
            ['Between-class ability grouping has essentially zero effect on overall achievement', 'Slavin (1990), best-evidence synthesis; Hattie’s synthesis gives a very small average effect for tracking and streaming'],
            ['Effects vary: some studies find small gains for high groups and losses for low groups, so averages hide inequality', 'Kulik and Kulik (1992); Gamoran and colleagues'],
            ['Within-class grouping, flexible and brief, can improve outcomes, especially in mathematics', 'Slavin (1987); Lou and colleagues (1996)'],
            ['The EEF estimates the impact of setting or streaming at about 1 month’s negative progress, on average, with low-attaining pupils losing out', 'Education Endowment Foundation Teaching and Learning Toolkit'],
            ['Placement is often based on a single test at a young age and is only weakly reversible', 'Studies of tracking across countries; the OECD finds that early tracking increases inequality'],
          ],
          caption: 'Summarised from research syntheses; individual studies differ.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Mechanism', title: 'Expectations', body: 'Teachers expect less of lower groups and set less demanding work, so students fall further behind.' },
            { tag: 'Mechanism', title: 'Peers', body: 'Students learn from peers. A class where everyone is struggling has fewer models of success.' },
            { tag: 'Mechanism', title: 'Labels and identity', body: 'A student placed in a lower group may see themselves as less capable, and behave accordingly.' },
            { tag: 'Mechanism', title: 'Teacher allocation', body: 'Lower groups are sometimes taught by less experienced or less qualified teachers.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'Why teachers like it', text: 'It is much easier to pitch a lesson when the class is similar, and a high-attaining student may be stretched more. Effects on the top group are small but may be positive. The trade-off is that the average effect is zero and the costs fall on the groups that can least afford them.' },
      ],
    },
    {
      id: 'singapore',
      title: 'Singapore’s journey',
      blocks: [
        {
          t: 'levels',
          caption: 'A rough timeline of grouping in Singapore’s schools.',
          items: [
            { name: '1979: The Goh Report', body: 'A review led by Dr Goh Keng Swee found high wastage: many students left school without basic qualifications. It proposed streaming by ability from Primary 3 (EM1, EM2, EM3) and in secondary school into Special/Express, Normal Academic and Normal Technical.' },
            { name: '1980s to 2000s: Refinements', body: 'The system was refined repeatedly: for example, the Normal Technical stream gave a route into technical education, and the main primary streaming point moved to Primary 4 in 1992.' },
            { name: '2008: Subject-Based Banding in primary', body: 'Primary streaming was replaced by SBB: students could take Standard or Foundation level in some subjects from Primary 5, depending on strengths in each.' },
            { name: '2019 to 2024: Full SBB', body: 'MOE announced that the secondary streams (Express, Normal Academic, Normal Technical) would be replaced from 2024 by Full Subject-Based Banding, with students in mixed form classes and taking subjects at G1, G2 or G3 levels.' },
            { name: '2027: A single national certificate', body: 'The Singapore-Cambridge Secondary Education Certificate (SEC), replacing the O- and N-Level certificates, is to be awarded from 2027, with subjects at G1, G2 and G3.' },
          ],
        },
        {
          t: 'table',
          head: ['Before (to 2023)', 'Full SBB (from 2024)'],
          rows: [
            ['Placed in Express, Normal (Academic) or Normal (Technical) stream after PSLE', 'Placed in a school and a form class; subjects taken at G1, G2 or G3 level'],
            ['The same level for most subjects', 'Level can differ by subject, such as G3 maths and G2 English'],
            ['Limited chance to move between streams', 'Students can change levels in each subject during secondary school'],
            ['Streams are a label', 'Mixed form classes for subjects such as art, music, PE, CCA and character education'],
          ],
          caption: 'Summarised from MOE announcements. Check moe.gov.sg for current details.',
        },
        { t: 'callout', tone: 'tip', title: 'The aim', text: 'MOE has said the intent is to reduce the effect of early labels, let students learn at the level that suits each subject and foster mixing across backgrounds, while keeping standards.' },
      ],
    },
    {
      id: 'principles',
      title: 'Principles for grouping fairly',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Group by subject and by purpose', body: 'Different subjects, different groups. A student strong in maths can be weaker in languages.' },
            { title: 'Keep it flexible and short-lived', body: 'Regroup after each unit or half-term, using evidence of what students can now do.' },
            { title: 'Keep expectations high for every group', body: 'The curriculum goals are the same. The route and the support differ.' },
            { title: 'Put strong teachers with the groups that need them most', body: 'Do not assign the least experienced teacher to the lowest group by default.' },
            { title: 'Mix for most things', body: 'Keep many activities mixed so students work with different peers.' },
            { title: 'Monitor movement and outcomes', body: 'Track who moves up and down, and look for patterns by background.' },
          ],
        },
        { t: 'links', items: [{ path: 'teaching/differentiation/grouping', note: 'Flexible grouping' }, { path: 'teaching/concepts/teacher-expectations', note: 'Expectations and labels' }, { path: 'teaching/concepts/equity-and-meritocracy', note: 'Equity and meritocracy' }] },
      ],
    },
  ],
  sources: [
    'Slavin, R. E. (1990). Achievement effects of ability grouping in secondary schools: a best-evidence synthesis. Review of Educational Research.',
    'Education Endowment Foundation. Setting or streaming: Teaching and Learning Toolkit.',
    'Goh, K. S., et al. (1979). Report on the Ministry of Education 1978. Singapore: Ministry of Education.',
    'Ministry of Education Singapore (2019 onwards). Announcements on Full Subject-Based Banding and the Singapore-Cambridge Secondary Education Certificate.',
    'OECD (2012). Equity and Quality in Education: Supporting Disadvantaged Students and Schools.',
  ],
  related: ['teaching/concepts/equity-and-meritocracy', 'teaching/differentiation/grouping', 'teaching/case-studies/singapore-system'],
}

export default guide
