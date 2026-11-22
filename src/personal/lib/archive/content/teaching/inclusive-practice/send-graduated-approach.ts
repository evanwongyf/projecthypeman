import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Deciding that a learner has special educational needs is neither a diagnosis nor a label to be handed out; it is a judgement that the learner needs something additional to or different from what is ordinarily offered. The graduated approach is the working method for making it: assess, plan, do, review, repeated with increasing specificity and with the learner and family involved. This guide covers how difficulties are identified, how to distinguish difficulty from difference, how response-to-intervention data informs decisions, the risks of over- and under-identification, and how to work with specialists, with Singapore’s mainstream and specialist pathways as context.',
  nutshell: [
    'The **graduated approach** is a cycle: **Assess** (what is the need?) → **Plan** (outcomes, strategies, who, when) → **Do** (deliver, with the teacher still responsible) → **Review** (did it work? what next?).',
    'First rule out **inadequate teaching, language, attendance, vision and hearing**; a learner who has not had good teaching has not shown a special need.',
    '**Response to intervention**: if a learner does not progress despite high-quality teaching and a well-delivered, targeted intervention, that is evidence of a more persistent need.',
    '**Over-identification** (labelling learners who need better teaching) and **under-identification** (missing real need, especially in girls, multilingual learners and high-attaining learners) both do harm.',
    'A **diagnosis** (by a clinician or educational psychologist) is different from **identification of need** in school: support should not wait for a diagnosis.',
  ],
  sections: [
    {
      id: 'cycle',
      title: 'Assess, plan, do, review',
      lead: 'A cycle, not a one-off.',
      blocks: [
        {
          t: 'cycle',
          caption: 'The graduated approach, as set out in many national frameworks (for example the SEND Code of Practice in England).',
          items: [
            { name: 'Assess', body: 'Gather evidence from teachers, assessments, observation, the learner’s own view and the family’s. Include a check for sensory, language and attendance factors. Identify strengths as well as difficulties.' },
            { name: 'Plan', body: 'Agree specific, measurable outcomes with the learner and family; choose strategies and resources; decide who delivers what, how often, and how you will know it is working; set a review date.' },
            { name: 'Do', body: 'The class or subject teacher remains responsible for the learner’s progress, even when others deliver parts of the plan. Support staff are briefed and trained; the plan is used in daily teaching.' },
            { name: 'Review', body: 'Compare progress with the intended outcomes. If it worked, fade or continue; if not, ask whether the plan was delivered as intended and whether the need was correctly understood, then involve specialist advice.' },
          ],
        },
        {
          t: 'example',
          title: 'A plan that can be reviewed',
          lines: [
            { label: 'Need', text: 'Jun Wei (P3) reads accurately but slowly; comprehension of longer texts is poor; he avoids reading tasks.' },
            { label: 'Outcome', text: 'By the end of term, Jun Wei can read a grade-level 150-word passage at 70 words a minute and answer 4 of 5 literal and 2 of 3 inference questions.' },
            { label: 'Strategy', text: 'Three 20-minute sessions a week of repeated reading with a trained assistant; pre-taught vocabulary before class texts; chunked text and questions in class.' },
            { label: 'Measure', text: 'One-minute reading probe each week; comprehension quiz fortnightly.' },
            { label: 'Review', text: 'Week 6 meeting with parents and Jun Wei: probe scores and his view of what is helping.' },
          ],
        },
      ],
    },
    {
      id: 'rti',
      title: 'Difficulty, difference and response to intervention',
      lead: 'Telling them apart.',
      blocks: [
        { t: 'p', text: 'Many learners are behind for reasons that have nothing to do with a disability: poor prior teaching, interrupted schooling, language, health or circumstances. A principle in most frameworks is that need is identified only after good teaching and targeted help have been tried and the learner is still not making expected progress. Tiered models (RTI, MTSS) make this practical: **Tier 1** is high-quality teaching for all; **Tier 2** adds small-group targeted intervention; **Tier 3** is intensive, individual and often involves specialists. Progress monitoring data decide who moves between tiers.' },
        {
          t: 'math',
          tex: String.raw`\text{Growth rate}=\frac{y_{\text{end}}-y_{\text{start}}}{\text{weeks}},\qquad \text{Dual discrepancy: }\ \text{level}<\text{benchmark}\ \wedge\ \text{growth}<\text{expected}`,
          caption: 'Progress monitoring in response-to-intervention: the weekly growth rate on a probe, and the dual-discrepancy criterion.',
          where: [{ sym: 'y', def: 'the score on a regular, short, repeatable probe (for example words read correctly per minute)' }],
          syntax: [{ sym: '(y_{\\text{end}}-y_{\\text{start}})/\\text{weeks}', say: 'the average gain per week. Effect: compares a learner’s improvement rate with the typical rate for their age. Why: a learner can be below benchmark but growing fast (catching up), which is a different situation from being low and flat.' }, { sym: '\\wedge', say: 'both conditions must hold. Effect: separates "low but responding" from "low and not responding", the second pointing to a more persistent need.' }],
          worked: {
            title: 'Two learners on a reading probe',
            steps: ['Benchmark for the year is 90 words correct per minute (wcpm); typical growth in this grade is about 1.5 wcpm per week.', 'Aisha: starts at 40, after 10 weeks of intervention reaches 58. Growth = 1.8 per week: above typical; still below benchmark but closing the gap.', 'Ben: starts at 40, reaches 43 after 10 weeks. Growth = 0.3 per week: well below typical.'],
            answer: 'Aisha is responding and should continue the intervention. Ben shows a dual discrepancy: check the delivery and fit of the intervention, then seek specialist assessment.',
          },
        },
        { t: 'callout', tone: 'warn', title: 'Be cautious with single scores', text: 'A weekly probe has measurement error, so a single low or high score tells you little. Use at least 6 to 8 data points, look at the trend line, and see the fair-measurement guide for how big the noise is.' },
      ],
    },
    {
      id: 'errors',
      title: 'Over- and under-identification',
      lead: 'Two directions of error.',
      blocks: [
        {
          t: 'table',
          head: ['', 'Over-identification', 'Under-identification'],
          rows: [
            ['What happens', 'Learners labelled as having a need because of poor teaching, language or behaviour', 'Real need missed or attributed to laziness, language or personality'],
            ['Who is more at risk', 'Boys; some minority and low-income groups; summer-born and younger-in-year learners; multilingual learners in some systems', 'Girls with autism or ADHD (who may mask or be inattentive rather than disruptive); high-attaining learners with hidden difficulties (twice-exceptional); multilingual learners with real speech and language needs'],
            ['Harm', 'Lower expectations; a narrowed curriculum; stigma; separate provision; wasted specialist capacity', 'Years of struggle without support; anxiety and low self-esteem; later crisis'],
            ['Safeguard', 'Rule out teaching, language and attendance first; review labels regularly', 'Take parent and learner concerns seriously; look at patterns across settings; use assessments that are valid for the group'],
          ],
        },
        { t: 'p', text: 'Disproportionality (some groups being identified at much higher or lower rates than others with similar needs) is well documented in several countries and is a signal to examine referral practice, assessment tools and expectations rather than to assume the differences are real differences in need.' },
      ],
    },
    {
      id: 'working',
      title: 'Working with the learner, family and specialists',
      lead: 'The learner’s voice and the team.',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'The learner', tag: 'voice', body: 'Ask what helps and what makes it hard, in ways suited to their age and communication. A learner who has a say in their plan is more likely to use it. Avoid language that makes need a deficit of the person.' },
            { title: 'The family', tag: 'partnership', body: 'Families know the learner over time and in other settings. Share information regularly, listen first, use plain language and interpreters where needed, and avoid surprise at formal meetings.' },
            { title: 'Specialists', tag: 'advice', body: 'Educational psychologists, speech and language therapists, occupational therapists, and specialist teachers can assess and advise; the school delivers daily. Ask for specific, usable recommendations.' },
            { title: 'Records', tag: 'continuity', body: 'Keep a short, clear record of need, strategies tried, evidence of impact, and learner and parent views, so support continues across teachers and transitions.' },
          ],
        },
        { t: 'p', text: 'In Singapore, mainstream schools have teachers trained in special needs (Teachers trained in Special Needs, or TSNs) and Allied Educators (Learning and Behavioural Support) who support learners with mild special educational needs; learners with more significant needs may attend the SPED schools run by social service agencies, with government funding, and the Enabling Masterplan sets out national directions. Educational psychologists and the Special Educational Needs Officers support schools. A formal diagnosis from a clinician is not required for school-based support, though it can open further resources; check the current MOE pages for pathways, and speak to the school’s learning support coordinator.' },
      ],
    },
  ],
  sources: [
    'Department for Education and Department of Health (2015). *Special educational needs and disability code of practice: 0 to 25 years*.',
    'Fuchs, D. & Fuchs, L. S. (2006). Introduction to response to intervention: what, why, and how valid is it? *Reading Research Quarterly*, 41(1).',
    'Sullivan, A. L. & Bal, A. (2013). Disproportionality in special education: effects of individual and school variables on disability risk. *Exceptional Children*, 79(4).',
    'Hull, L. et al. (2017). “Putting on my best normal”: social camouflaging in adults with autism spectrum conditions. *Journal of Autism and Developmental Disorders*, 47.',
    'Ministry of Education Singapore. Special educational needs support in mainstream schools and SPED schools (moe.gov.sg); Enabling Masterplan 2030.',
  ],
  related: ['teaching/special-education/foundations/tiered-support', 'teaching/special-education/foundations/plans', 'teaching/inclusive-practice/diagnosing-gaps', 'teaching/special-education/foundations/inclusion', 'teaching/special-education/needs/twice-exceptional'],
}

export default guide
