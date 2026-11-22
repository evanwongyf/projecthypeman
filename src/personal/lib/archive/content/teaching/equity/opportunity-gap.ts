import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Before any teaching technique, it helps to see the problem clearly in numbers. A child born into poverty does not start school a little behind: in many studies, the gap is already large by age three, and school tends to hold it roughly steady rather than close it. This guide lays out what the research actually measures, as a foundation for the frameworks and evidence-based interventions in the rest of this section.',
  nutshell: [
    'Family income and parent education predict test scores more strongly than almost any other single factor measured in education research.',
    'Vocabulary gaps between children from higher- and lower-income families are measurable by age 2–3, long before formal schooling starts.',
    'The income–achievement gap has **widened** since the 1960s–70s even as the gap by race has narrowed, as income inequality itself has grown (Reardon, 2011).',
    'Background predicts not just test scores but adult outcomes: researchers can now map a child\'s likely adult income down to the neighbourhood they grew up in.',
    'None of this is destiny, see [what actually closes the gap](@teaching/equity/interventions-evidence) for the interventions with real evidence behind them.',
  ],
  sections: [
    {
      id: 'word-gap',
      title: 'The early vocabulary gap',
      blocks: [
        {
          t: 'p',
          text: 'In the early 1980s–90s, Betty Hart and Todd Risley recorded hour-long conversations monthly in 42 American families, across a range of income levels, from when children were about 7 months old until age 3. They then extrapolated the recorded rates to estimate the number of words children had been exposed to by age 4.',
        },
        {
          t: 'metric',
          name: 'the Hart and Risley "word gap" estimate',
          shows: 'An extrapolated estimate of how many words children in the study had heard by age 4, projected from the words-per-hour rate recorded in a small sample of 42 families across income groups. It became one of the most cited (and most contested) numbers in early-childhood research.',
          eli5: 'Imagine two kids each listening to an hour of conversation around them every day from birth. If one hears roughly twice as many words in that hour as the other, day after day for four years, the running total pulls far apart, even though both children are hearing *some* conversation every single day.',
          higher: 'More words heard, and typically richer, more varied vocabulary and more "extra talk" (explanations, questions, elaborations) rather than only short directions, in the original study, children in professional families heard more encouragement relative to discouragement than children in families receiving welfare assistance.',
          lower: 'Fewer words heard overall, and relatively more short directives ("stop", "no") than explanatory talk, the original study found this pattern varied by family income, though the study\'s small size (42 families) and the specific "30 million word" extrapolation have been challenged by later, larger studies using all-day recordings (Sperry, Sperry & Miller, 2019), which found much smaller raw gaps, while still finding that the *quality and responsiveness* of talk mattered.',
          typical: 'The original study\'s most-quoted figure, a 30-million-word gap by age 4 between the highest- and lowest-income families, should be read as a single, small, dated study\'s extrapolation, not a precise universal constant; the more robust and widely replicated finding is the general direction: early language environment varies by family circumstance, and early vocabulary strongly predicts later reading and school success, not the exact headline number.',
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'A famous number, a contested study',
          text: 'The "30 million word gap" is probably the single most cited statistic in early-childhood education, but it comes from a small, 40-year-old study of 42 families, using only hour-long monthly samples rather than full days. Larger, more recent studies using day-long recordings (e.g. Sperry et al., 2019, and the LENA Foundation\'s work) find the raw word-count gap by income to be much smaller or inconsistent across communities, while still confirming that conversational turns, responsiveness and vocabulary richness predict later language outcomes. Treat the exact "30 million" figure as a famous but imprecise estimate, not a settled fact.',
        },
      ],
    },
    {
      id: 'achievement-gap',
      title: 'The achievement gap, and how it has moved',
      blocks: [
        {
          t: 'plot',
          title: 'The income achievement gap has grown since the 1960s (illustrative, after Reardon 2011)',
          x: [1960, 2020],
          y: [0.3, 1.1],
          xLabel: 'birth cohort year',
          yLabel: 'test-score gap, 90th vs 10th income percentile (standard deviations)',
          curves: [{ f: (t: number) => 0.6 + 0.35 * ((t - 1960) / 60), label: 'income achievement gap (illustrative trend)' }],
          caption: 'Sean Reardon\'s analysis of large US testing datasets found the achievement gap between children from families at the 90th and 10th income percentiles grew by roughly 40% for children born in 2001 compared with those born in 1970, and is now substantially larger than the Black–white achievement gap, which has narrowed over the same period. Numbers here are illustrative of the reported trend, not a reproduction of the original dataset.',
        },
        {
          t: 'table',
          head: ['Gap', 'What it measures', 'General direction since the 1960s–70s'],
          rows: [
            ['Income achievement gap', 'Test scores, highest- vs lowest-income families', 'Widened substantially (Reardon, 2011)'],
            ['Black–white achievement gap', 'Test scores by race, within the US', 'Narrowed significantly, though a gap remains'],
            ['College completion gap by income', 'Share completing a 4-year degree', 'Widened: high-income completion rose faster than low-income completion'],
          ],
          caption: 'A genuinely striking pattern in US research: the gap that has *grown* fastest in recent decades is the one tied to income and class, not race, even as the two obviously overlap.',
        },
        { t: 'callout', tone: 'note', title: 'Why the two gaps moved differently', text: 'Reardon and others suggest the income gap grew partly because rising income inequality let higher-income families invest far more in enrichment, tutoring, extracurriculars, books, high-quality childcare, while the returns to parental investment in children grew alongside the returns to education and skill in the labour market generally.' },
      ],
    },
    {
      id: 'mobility',
      title: 'Where you grow up: intergenerational mobility',
      blocks: [
        {
          t: 'p',
          text: 'Economist Raj Chetty and the Opportunity Insights team linked tens of millions of anonymised US tax records across generations, building a map of **intergenerational mobility**: given a child\'s parents\' income, how likely are they to reach a higher income bracket as an adult, and does it depend on where, down to the specific neighbourhood, they grew up?',
        },
        {
          t: 'metric',
          name: 'intergenerational income mobility',
          shows: 'The chance a child born to parents near the bottom of the income distribution reaches a much higher rung as an adult. It is the closest thing economics has to a single number for "how much does where (and to whom) you are born determine your economic life", separate from any one test score or school.',
          eli5: 'Imagine a ladder with 100 rungs, and every child starts standing on whichever rung their parents are on. Mobility asks: over the next 25 years, how far up (or down) the ladder does the typical child from the bottom rungs actually climb? In a highly mobile place, kids from the bottom regularly reach the middle or higher; in a low-mobility place, most stay near where they started.',
          higher: 'Children born to low-income parents in that place have a meaningfully better chance of reaching higher income as adults than otherwise-similar children born elsewhere, Chetty\'s data shows this varies enormously by US county and even by neighbourhood a few miles apart, correlating with school quality, family structure, social capital, and racial and economic segregation in the area.',
          lower: 'Children tend to stay near the income rung they were born into, low mobility areas in the US data are strongly associated with high residential segregation, low social capital (fewer cross-class social ties), weaker schools, and greater family instability in the surrounding community, not any single factor alone.',
          typical: 'The US as a whole has notably lower intergenerational mobility than several European and Nordic countries with more similar life outcomes across income groups, though mobility varies so much *within* the US by specific place that "the US rate" hides as much as it reveals.',
        },
        { t: 'callout', tone: 'fact', title: 'Moving to opportunity', text: 'A striking follow-up finding: when the Moving to Opportunity experiment (a 1990s US housing voucher programme) randomly assigned some low-income families vouchers to move to lower-poverty neighbourhoods, Chetty and colleagues later found that children who moved **before age 13** had meaningfully higher college attendance and earnings as adults than children in families offered no voucher, and the younger the child at the time of the move, the bigger the later gain. Neighbourhood effects, in other words, were not just correlation.' },
      ],
    },
    {
      id: 'why-matters',
      title: 'Why this belongs in a teaching archive',
      blocks: [
        {
          t: 'p',
          text: 'None of this is presented to suggest background is destiny, quite the opposite. The rest of this section exists because the research above also identifies, with real evidence, which specific levers actually narrow these gaps: see [the behavioural frameworks](@teaching/equity/behavioural-frameworks) and [motivation frameworks](@teaching/equity/motivation-equity) that work particularly well for learners facing these headwinds, [the interventions with the strongest evidence](@teaching/equity/interventions-evidence), and [the structural barriers](@teaching/equity/structural-equity) a school or system can actually remove.',
        },
        {
          t: 'checklist',
          items: [
            'Treat background as a headwind to plan around, not a verdict on a learner\'s potential',
            'Remember within-group variation is always far larger than between-group averages, any individual learner can defy the pattern',
            'Look for levers you actually control: instruction quality, relationships, access to rigorous content, and the structural barriers in your own setting',
            'Be sceptical of single dramatic statistics (like "30 million words") and look for the broader, replicated pattern behind them',
          ],
        },
      ],
    },
  ],
  sources: [
    'Hart, B., & Risley, T. R. (1995). *Meaningful Differences in the Everyday Experience of Young American Children*. Paul H. Brookes.',
    'Sperry, D. E., Sperry, L. L., & Miller, P. J. (2019). Reexamining the verbal environments of children from different socioeconomic backgrounds. *Child Development*, 90(4), 1303–1318.',
    'Reardon, S. F. (2011). The widening academic achievement gap between the rich and the poor. In G. J. Duncan & R. J. Murnane (Eds.), *Whither Opportunity?*. Russell Sage Foundation.',
    'Chetty, R., Hendren, N., & Katz, L. F. (2016). The effects of exposure to better neighborhoods on children. *American Economic Review*, 106(4), 855–902.',
    'Chetty, R., et al. (2014). Where is the land of opportunity? *Quarterly Journal of Economics*, 129(4), 1553–1623.',
  ],
  related: ['teaching/equity/interventions-evidence', 'teaching/equity/structural-equity', 'teaching/theories/motivation'],
}

export default guide
