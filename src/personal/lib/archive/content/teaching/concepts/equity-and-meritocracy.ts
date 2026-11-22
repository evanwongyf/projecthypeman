import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Few ideas are more important to a modern school system, and more loosely used, than fairness. Does fairness mean treating everyone the same, giving everyone a fair chance, giving more to those who need more, or ending up with equal results? And what happens when a system that rewards merit finds that merit is itself shaped by advantage? Singapore has built its national story around meritocracy, and its leaders have begun to speak of refreshing it. This page sets out equality, equity and the different meanings of equal opportunity, Michael Young’s warning, Michael Sandel’s critique, and how Singapore is refining its approach.',
  nutshell: [
    '**Equality** means treating all alike; **equity** means giving people what they need to reach a fair outcome; they can **conflict**.',
    'Equal opportunity has **thin** versions (no formal barriers), **fair** versions (similar life chances for similar talent) and **radical** versions (compensating for unequal starting points).',
    '**Meritocracy** rewards talent and effort. **Michael Young** coined the word in 1958 as a **satire** on a society that would harden into a new aristocracy of the successful.',
    '**Michael Sandel** (*The Tyranny of Merit*, 2020) argues that merit breeds **arrogance in winners and humiliation in losers**, and ignores luck.',
    'Singapore’s leaders have spoken of **“refreshing” meritocracy**, with more routes to success, less early ranking and more help for those who start behind.',
  ],
  sections: [
    {
      id: 'terms',
      title: 'Equality, equity, opportunity and outcome',
      blocks: [
        {
          t: 'table',
          head: ['Term', 'Meaning', 'Example in school'],
          rows: [
            ['Formal equality', 'The same rules and treatment for everyone', 'Everyone sits the same exam under the same conditions'],
            ['Equal opportunity (thin)', 'No barriers by gender, race or background in access', 'Anyone may apply to any school'],
            ['Equal opportunity (fair)', 'People with the same talent and effort have the same chances, whatever their background', 'A child from a poor family with the same ability should do as well as a rich one'],
            ['Equity', 'Giving people what they need to have a fair chance, which may differ', 'Extra reading help for a child who has had less exposure to books; a ramp for a wheelchair user'],
            ['Equality of outcome', 'Equal results across groups', 'No gap in average achievement between groups'],
          ],
          caption: 'Fairness can pull in different directions: the same treatment can produce unequal results, and unequal treatment can be needed to produce a fair chance.',
        },
        { t: 'callout', tone: 'note', title: 'The fence picture', text: 'A popular cartoon shows three people of different heights watching a game over a fence. Equality gives each the same box, so the shortest still cannot see. Equity gives each the box they need. Critics point out that the picture quietly assumes the goal is seeing the game, and that someone might ask why there is a fence at all.' },
      ],
    },
    {
      id: 'young',
      title: 'Michael Young and the rise of the meritocracy',
      blocks: [
        { t: 'p', text: 'The word “meritocracy” was coined by the British sociologist Michael Young in *The Rise of the Meritocracy* (1958), a dystopian satire set in 2033. In it, a society sorts people by intelligence plus effort, and the result is a new elite that believes it deserves its position and a lower class told that it deserves its own. Young was a founder of the Open University and a Labour policy-maker, and was dismayed when the word was later adopted as an ideal. In 2001 he wrote that Tony Blair’s use of it as a goal was a misunderstanding.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Merit = IQ + effort', body: 'Young’s formula: those who rise are those with intelligence and effort, so inequality becomes justified.' },
            { title: 'The danger', body: 'The successful can believe they deserve everything, and the unsuccessful that they deserve nothing, with no one left to speak for them.' },
          ],
        },
      ],
    },
    {
      id: 'sandel',
      title: 'Sandel: the tyranny of merit',
      blocks: [
        { t: 'p', text: 'The philosopher Michael Sandel argued in *The Tyranny of Merit* (2020) that the meritocratic ideal, that people should rise by talent and hard work, has a dark side. It breeds hubris among winners who forget how luck, family and circumstance helped them, and humiliation among losers, who are told that they deserved to lose. It also turns education into a sorting machine, makes college admission a source of great anxiety and makes it hard to value jobs that do not need a degree.' },
        {
          t: 'table',
          head: ['Claim', 'Response'],
          rows: [
            ['Merit is partly luck: talent, health, family, the era you are born in', 'Granted: but effort and choices also matter, and reward for them can be justified'],
            ['Meritocracy produces arrogance and resentment', 'It may, but so did systems of inherited privilege; the answer is to reduce the stakes, not abandon fairness'],
            ['Education has become a high-stakes sorting contest', 'A reason to widen routes to success and to value different kinds of work'],
            ['Rich families buy advantage with tuition and connections', 'A reason to improve equity, not to remove opportunity based on ability'],
          ],
        },
      ],
    },
    {
      id: 'singapore',
      title: 'Singapore: meritocracy refreshed',
      blocks: [
        { t: 'p', text: 'Meritocracy is one of Singapore’s founding principles: opportunity and reward based on ability and effort, regardless of race, language or religion. Its education system has been a key engine of mobility. Government leaders have acknowledged the challenges Sandel and others describe: that advantaged families can invest heavily in their children, that early labels can stick and that those who succeed can lose touch with others. In recent years policy has aimed to refresh meritocracy.' },
        {
          t: 'table',
          head: ['Measure', 'Aim'],
          rows: [
            ['Wider scoring bands for the PSLE (Achievement Levels from 2021)', 'Reduce fine distinctions of a single mark and the stress of ranking at age 12'],
            ['Full Subject-Based Banding in secondary school (from 2024)', 'Replace early streams (Express, Normal) with subjects at different levels, so students are not labelled for all subjects'],
            ['Support for lower-income students (school fee assistance, financial support, early-years support)', 'Reduce the gap at the start'],
            ['Expanding paths in applied learning, ITE and polytechnics, SkillsFuture', 'Value many kinds of success'],
            ['Reducing weighted assessments and mid-year exams in some levels', 'Reduce the pressure of high-stakes testing'],
          ],
          caption: 'Policy descriptions as announced by MOE and reported in the press; check current details.',
        },
        { t: 'links', items: [{ path: 'teaching/case-studies/singapore-system', note: 'Singapore’s reforms in detail' }, { path: 'teaching/concepts/streaming-and-tracking', note: 'Streaming and Full SBB' }, { path: 'teaching/equity/opportunity-gap', note: 'The opportunity gap: what the data shows' }] },
      ],
    },
    {
      id: 'practice',
      title: 'What a teacher can do',
      blocks: [
        {
          t: 'list',
          items: [
            'Give each student what they need to reach the same high standard (equity), rather than the same treatment.',
            'Be wary of reading merit from a single test score. Ask what luck and advantage played a part.',
            'Value many kinds of success and say so, in assemblies and in comments.',
            'Notice who has access to extra help (tuition, books, quiet space) and compensate where you can.',
            'Talk with students about effort and luck honestly, without letting them think that effort is irrelevant.',
            'Keep standards high: lowering them is not equity, it is a different kind of inequality.',
          ],
        },
      ],
    },
  ],
  sources: [
    'Young, M. (1958). The Rise of the Meritocracy. Thames and Hudson.',
    'Young, M. (2001). Down with meritocracy. The Guardian (29 June 2001).',
    'Sandel, M. J. (2020). The Tyranny of Merit: What’s Become of the Common Good? Farrar, Straus and Giroux.',
    'Ministry of Education Singapore. Announcements on PSLE scoring (2021) and Full Subject-Based Banding (2024).',
  ],
  related: ['teaching/concepts/streaming-and-tracking', 'teaching/equity/opportunity-gap', 'teaching/case-studies/singapore-system'],
}

export default guide
