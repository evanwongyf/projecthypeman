import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Can two years of good preschool change the course of a child’s life? In the 1960s a small experiment in Ypsilanti, Michigan tried to find out, and then followed its 123 children for more than four decades. The Perry Preschool Project became the most cited evidence in the case for early childhood education, and an economist’s calculation of its return on investment has been used in arguments about public spending ever since. It is also a case about the limits of small studies, the problem of fade-out and the difficulty of reproducing a boutique programme at scale. This page tells the story, the findings, the critiques and what later programmes show.',
  nutshell: [
    'The **Perry Preschool Project** (1962 to 1967) gave **123 low-income African American children** a **high-quality preschool** programme and a control group nothing; the children were **randomly assigned**.',
    'Gains in **IQ faded** within a few years, but by **age 40** the programme group had **higher education, employment and earnings** and **fewer arrests**.',
    'James Heckman’s economic analysis estimated a **high return** (7 to 10% a year) on the investment.',
    'Critics note the **small sample**, **multiple outcomes** and a **very high-quality**, intensive programme unlike most at scale.',
    'Large programmes such as **Head Start** show **smaller** and sometimes **fading** effects, though **long-run** follow-ups are more positive; quality matters.',
  ],
  sections: [
    {
      id: 'study',
      title: 'The study',
      blocks: [
        {
          t: 'table',
          head: ['Feature', 'Detail'],
          rows: [
            ['Place and time', 'Ypsilanti, Michigan; five cohorts from 1962 to 1967'],
            ['Children', '123 African American children aged 3 and 4 from low-income families, with IQ scores between 70 and 85 and thus at risk of school failure'],
            ['Assignment', 'About 58 randomly assigned to the programme and 65 to a no-programme group (assignment adjusted slightly, for example for siblings and working mothers)'],
            ['Programme', 'Daily classes of about 2.5 hours, for one or two school years, taught by certified teachers with small groups (about 6 children per adult), plus weekly home visits of about 90 minutes'],
            ['Approach', 'A “plan-do-review” cycle in which children planned activities, carried them out and reviewed them; the origin of the HighScope curriculum'],
            ['Follow-up', 'Interviews and records at ages 5 to 11, 14, 15, 19, 27, 40 and, in work still continuing, 50'],
          ],
        },
      ],
    },
    {
      id: 'findings',
      title: 'What it found',
      blocks: [
        {
          t: 'table',
          head: ['Outcome', 'Programme group', 'No-programme group', 'Approximate age'],
          rows: [
            ['IQ gain at the end of the programme', 'About 12 points higher', '', '5'],
            ['IQ difference', 'Gone', '', 'By about 8 to 10'],
            ['Graduated from high school', 'About 77% (reported)', 'About 60%', '19 to 40'],
            ['Arrested five or more times', 'About 36%', 'About 55%', '40'],
            ['Employed', 'Higher', 'Lower', '40'],
            ['Median earnings', 'Higher', 'Lower', '40'],
          ],
          caption: 'Approximate figures as reported by Schweinhart and colleagues (2005) for the age-40 study. See the original for exact values and statistical tests.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Pattern', title: 'IQ faded, but life outcomes improved', body: 'The IQ gain disappeared, so the benefits cannot be explained by being “smarter”. Researchers point to non-cognitive skills: motivation, behaviour and self-control.' },
            { tag: 'Economics', title: 'A high return on investment', body: 'Heckman and colleagues (2010) estimated a return of 7 to 10% a year, from better education, less crime, higher earnings and lower welfare costs, measured against the cost of the programme.' },
            { tag: 'Mechanism', title: 'Character skills', body: 'Heckman argued that the programme raised non-cognitive skills, which matter for adult success, and that early investment is cheaper than later remediation.' },
            { tag: 'Policy', title: 'A rallying case', body: 'The study was used to argue for public pre-kindergarten, home visiting and early-years investment in many countries.' },
          ],
        },
      ],
    },
    {
      id: 'critique',
      title: 'Critiques and cautions',
      blocks: [
        {
          t: 'table',
          head: ['Critique', 'Comment'],
          rows: [
            ['A small sample from one place and time', 'Results may not apply to other groups; sampling error is large'],
            ['Many outcomes were examined, so some “significant” results may be chance', 'Anderson (2008) re-analysed with corrections and found that effects for girls were stronger and for boys weaker; Heckman and colleagues (2010) used methods to address this'],
            ['Assignment was not perfectly random', 'Some adjustments for siblings and mothers’ employment, so the control group may not be fully comparable'],
            ['The programme was unusually intensive and expensive', 'High-quality teachers, small groups and home visits; costs far above typical programmes'],
            ['The 1960s context was different', 'Few alternatives for poor children; less availability of other services'],
          ],
        },
      ],
    },
    {
      id: 'scale',
      title: 'What larger programmes show',
      blocks: [
        {
          t: 'table',
          head: ['Programme', 'Result in brief'],
          rows: [
            ['Abecedarian (North Carolina, 1972)', 'Randomised, intensive from infancy to school entry, 111 children; follow-ups to age 30 show more education and better health markers; again small and intensive'],
            ['Head Start (USA, national programme)', 'The national Head Start Impact Study (2010) found gains at the end of the programme that mostly faded by the end of grade 3; later analyses of long-term data suggest benefits in adulthood for some groups'],
            ['Tennessee Voluntary Pre-K (2009 onwards)', 'A randomised study found early gains reversed, with the pre-K group doing slightly worse by grade 6 (Durkin and colleagues, 2022), a warning that scaled programmes can disappoint'],
            ['Boston and Tulsa universal pre-K', 'Positive effects on school readiness and, in Boston, on later outcomes such as college enrolment (Gray-Lobe and colleagues, 2021)'],
            ['Quality and curriculum', 'Studies suggest that the quality of teaching, curriculum and follow-through in later grades matter as much as the preschool year itself'],
          ],
          caption: 'The evidence suggests that quality matters, that effects can fade without support in later grades, and that a result from an intensive demonstration may not scale.',
        },
        { t: 'callout', tone: 'note', title: 'Singapore context', text: 'Singapore has expanded the early-childhood sector through the Early Childhood Development Agency (from 2013) and anchor operators, and targets support to lower-income families through initiatives such as KidSTART. The international evidence supports a focus on the quality of staff and curriculum, and on continuity into primary school.' },
        { t: 'links', items: [{ path: 'teaching/equity/interventions-evidence', note: 'What actually closes the gap' }, { path: 'teaching/case-studies/project-star', note: 'Project STAR' }, { path: 'teaching/guides/growth/research', note: 'Using education research' }] },
      ],
    },
  ],
  sources: [
    'Schweinhart, L. J., et al. (2005). Lifetime Effects: The High/Scope Perry Preschool Study Through Age 40. HighScope Press.',
    'Heckman, J. J., Moon, S. H., Pinto, R., Savelyev, P. A., and Yavitz, A. (2010). The rate of return to the HighScope Perry Preschool Program. Journal of Public Economics.',
    'Anderson, M. L. (2008). Multiple inference and gender differences in the effects of early intervention. Journal of the American Statistical Association.',
    'Puma, M., et al. (2010). Head Start Impact Study: Final Report. US Department of Health and Human Services.',
    'Durkin, K., Lipsey, M. W., Farran, D. C., and Wiesen, S. E. (2022). Effects of a statewide pre-kindergarten program on children’s achievement and behavior through sixth grade. Developmental Psychology.',
  ],
  related: ['teaching/equity/interventions-evidence', 'teaching/case-studies/project-star', 'teaching/equity/opportunity-gap'],
}

export default guide
