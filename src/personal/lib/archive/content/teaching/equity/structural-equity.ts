import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Not every barrier to equity sits inside a classroom. Funding formulas, which courses a school even offers, how students get sorted into classes, and who has reliable internet at home all shape outcomes before a teacher ever gets involved. This guide covers the structural layer: the parts of the system a school leader, policymaker, or informed teacher-advocate can work to change.',
  nutshell: [
    'US school funding is unusually **local**, tied heavily to local property taxes, which means richer neighbourhoods often fund their schools more generously than poorer ones in the same state, the opposite pattern from most other wealthy countries.',
    '**Tracking** (sorting students into different-level classes) can concentrate low expectations and weaker instruction in lower tracks, which disproportionately hold low-income and minority students; **detracking** research shows mixed but sometimes promising results when done well.',
    'Access to **advanced coursework** (AP, gifted programmes) is strongly predicted by income and race, independent of measured ability.',
    'The **digital divide**, reliable devices and broadband, became an acute, visible equity issue during pandemic remote learning, and remains unevenly closed.',
  ],
  sections: [
    {
      id: 'funding',
      title: 'How school funding (does and doesn\'t) equalise',
      blocks: [
        {
          t: 'p',
          text: 'In most US states, a substantial share of school funding comes from local property taxes, meaning districts in wealthier areas, with higher property values, can often raise more per student than districts in poorer areas, even at similar or higher tax *rates*. States vary enormously in how much state-level funding formulas offset this.',
        },
        {
          t: 'table',
          head: ['Funding model', 'How it works', 'Equity implication'],
          rows: [
            ['Pure local funding', 'Spending tied directly to local property tax base', 'Wealthy areas can spend far more per student than poor areas in the same state'],
            ['State equalisation formulas', 'State funding tops up poorer districts to narrow the gap', 'Reduces but, in most states studied, does not fully eliminate the gap'],
            ['Weighted student funding / Title I', 'Extra federal or state funding follows students with specific needs (low income, English learners, disabilities)', 'Targets extra resources at students who need them most, but the extra funding is often modest relative to the underlying local-funding gap'],
            ['Full state or national funding', 'Used in several other wealthy countries (e.g. much of Western Europe)', 'Removes local property wealth as a funding driver entirely'],
          ],
        },
        { t: 'callout', tone: 'fact', title: 'Does money even matter?', text: 'A once-influential 1966 US government report (the "Coleman Report") was widely read as showing school spending barely affected outcomes compared with family background, fuelling decades of scepticism about funding as a lever. More recent, more rigorous quasi-experimental research, notably work by C. Kirabo Jackson and colleagues using court-ordered school finance reforms as natural experiments, has found that sustained increases in school spending, especially for low-income districts, do produce real, measurable gains in graduation rates and adult earnings. The current research consensus leans towards "money matters, especially how and for whom it is spent", a shift from the mid-20th-century scepticism.' },
      ],
    },
    {
      id: 'tracking',
      title: 'Tracking and detracking',
      blocks: [
        {
          t: 'p',
          text: 'Tracking sorts students into different-level classes (e.g. "honours", "regular", "remedial") often starting in middle school, based on prior test scores, grades or teacher recommendation.',
        },
        {
          t: 'cards',
          items: [
            { title: 'The case for tracking', body: 'Lets instruction be pitched closer to a group\'s current level, potentially helping both struggling and advanced students avoid being under- or under-challenged (see [stretching advanced learners](@teaching/differentiation/advanced)).' },
            { title: 'The equity concern', body: 'Placement is imperfect and influenced by factors beyond ability, including teacher perception and family advocacy, so tracking can concentrate low-income and minority students in lower tracks even controlling for prior achievement; lower tracks are also documented in research to sometimes receive less experienced teachers and a narrower, slower curriculum.' },
            { title: 'What detracking studies find', body: 'Results are genuinely mixed: some well-implemented detracking efforts (pairing heterogeneous grouping with strong differentiated instruction) show gains for lower-track students with little or no cost to higher-track students; poorly implemented detracking (mixing groups without changing instruction) shows weaker or null results.' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'The real lesson is about instruction, not grouping alone', text: 'The research pattern across tracking and detracking studies suggests the *grouping policy itself* matters less than whether every group, tracked or not, receives genuinely strong instruction, high expectations, and access to rich content. Grouping without fixing instructional quality in the lower groups tends to simply relocate the problem.' },
      ],
    },
    {
      id: 'access',
      title: 'Access to advanced coursework',
      blocks: [
        {
          t: 'p',
          text: 'Access to Advanced Placement (AP) courses, gifted and talented programmes, and advanced maths sequences strongly predicts later college access, and access to these programmes is itself unevenly distributed.',
        },
        {
          t: 'table',
          head: ['Pattern widely reported in US research', 'Mechanism commonly cited'],
          rows: [
            ['Schools serving more low-income students offer fewer AP courses on average', 'Smaller schools and those with fewer resources struggle to staff low-enrolment advanced courses'],
            ['Within schools that do offer AP, low-income and some minority students are under-represented in enrolment relative to their share of qualified students', 'Teacher referral practices, lack of awareness of eligibility, and "undermatching" (qualified students not applying) all contribute'],
            ['Gifted-programme identification gaps', 'Multiple studies find Black and Hispanic students are identified as gifted at lower rates than white and Asian students with comparable test scores, linked partly to teacher-referral-based identification processes'],
          ],
          caption: 'A genuinely active area of policy experimentation: several districts have found that switching from teacher-referral to universal screening (testing every student, not only those referred) substantially increases identification of low-income and minority gifted students, without reducing the quality of the identified pool.',
        },
      ],
    },
    {
      id: 'digital-divide',
      title: 'The digital divide',
      blocks: [
        {
          t: 'p',
          text: 'The gap in reliable access to a computer and broadband internet became impossible to ignore during pandemic-era remote learning (2020–21), but it predates and outlasts that period.',
        },
        {
          t: 'checklist',
          items: [
            'Reliable, personal (not shared) device access for every student doing digital work',
            'Broadband internet access at home, not only a mobile data plan with caps',
            'A quiet, consistent place to work, which affects remote and homework completion alike',
            'Digital literacy instruction, not just access, having a device does not guarantee knowing how to use it for learning',
          ],
        },
        { t: 'p', text: 'Each of these, studied individually, has been linked in research to gaps in remote-learning engagement and homework completion along income lines.' },
      ],
    },
  ],
  sources: [
    'Coleman, J. S., et al. (1966). *Equality of Educational Opportunity*. U.S. Department of Health, Education, and Welfare.',
    'Jackson, C. K., Johnson, R. C., & Persico, C. (2016). The effects of school spending on educational and economic outcomes. *Quarterly Journal of Economics*, 131(1), 157–218.',
    'Card, D., & Giuliano, L. (2016). Universal screening increases the representation of low-income and minority students in gifted education. *Proceedings of the National Academy of Sciences*, 113(48), 13678–13683.',
    'Burris, C. C., Heubert, J. P., & Levin, H. M. (2006). Accelerating mathematics achievement using heterogeneous grouping. *American Educational Research Journal*, 43(1), 105–136.',
  ],
  related: ['teaching/equity/opportunity-gap', 'teaching/equity/interventions-evidence', 'teaching/differentiation/foundations'],
}

export default guide
