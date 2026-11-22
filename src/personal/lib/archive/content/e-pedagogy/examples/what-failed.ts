import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Digital education has a long history of excited promises and disappointing results. Studying the failures is at least as useful as studying the successes: almost every one shows the same mistake, putting technology first and pedagogy, teachers and learners second.',
  nutshell: [
    '**Emergency remote teaching** in 2020–21 left students on average about a third of a school year behind (Betthäuser et al., 2023), with the poorest hit hardest.',
    '**MOOCs** promised to democratise higher education; completion rates were a few per cent, and most completers already had degrees.',
    '**Devices without pedagogy** (One Laptop per Child in Peru) produced no measurable gains in maths or reading.',
    'Other failures: slide-reading videos, unguarded AI chat, invasive proctoring, and gamification that rewarded the wrong behaviour.',
  ],
  sections: [
    {
      id: 'cases',
      title: 'Cases',
      blocks: [
        { t: 'table', head: ['Case', 'What happened', 'Why'], rows: [
          ['Pandemic school closures', 'A meta-analysis of 42 studies across 15 countries found a learning deficit of about 0.14 SD, roughly 35% of a school year, persisting over time', 'Rushed shift; unequal access to devices, internet and quiet space; little interaction; younger learners need adults'],
          ['MOOC completion', 'Completion around 3–6% of registrants; most learners already held degrees and lived in rich countries', 'Low commitment to free courses; little support; self-regulation demands'],
          ['One Laptop per Child, Peru', 'About 900,000 laptops; a randomised evaluation found no effect on maths or reading, small gains in computer skills', 'Devices given without teacher training or a plan for teaching with them'],
          ['Los Angeles iPad programme (2013)', 'A US$1.3 billion plan halted amid problems with curriculum software, security and procurement', 'Rushed rollout, unready content, students bypassed filters'],
          ['Unguarded AI chat for practice', 'Bastani et al. (2025): high-school students given open GPT-4 access did 48% better on practice but 17% worse on the later exam without AI', 'Students used it to get answers instead of thinking'],
          ['Remote proctoring', 'Webcam and room-scan software flagged students for looking away, failed on darker skin, and raised privacy complaints', 'Surveillance instead of assessment redesign'],
          ['Slide-reading video lectures', 'Low completion and engagement in hour-long recorded lectures', 'Passive; long; no interaction (Guo et al., 2014 found engagement drops sharply beyond about 6 minutes)'],
          ['Points-and-badges gamification', 'In some courses, gamified versions lowered motivation and exam scores (Hanus and Fox, 2015)', 'Extrinsic rewards crowded out interest; rewards tied to activity, not learning'],
        ] },
      ],
    },
    {
      id: 'patterns',
      title: 'Patterns of failure',
      blocks: [
        { t: 'cards', cols: 2, items: [
          { title: 'Technology first', body: 'Buying devices or platforms before deciding what learners will do with them.' },
          { title: 'Teachers left out', body: 'No training or time to redesign lessons; teachers then use new tools to do old things.' },
          { title: 'Passive content', body: 'Long videos and readings without practice, feedback or interaction.' },
          { title: 'Assumed self-regulation', body: 'Expecting learners (especially young or struggling ones) to manage their own time and attention.' },
          { title: 'Equity blind spots', body: 'Ignoring that some learners lack devices, data, quiet space or adult help.' },
          { title: 'Measuring the wrong thing', body: 'Counting log-ins and completions rather than learning.' },
        ] },
        { t: 'callout', tone: 'tip', title: 'A pre-mortem for any edtech project', text: 'Before launching, ask: Imagine it is a year later and this failed. Why? Common answers (teachers did not use it, students used it to avoid thinking, the poorest students could not access it) tell you what to fix first.' },
      ],
    },
  ],
  sources: [
    'Betthäuser, B. A., Bach-Mortensen, A. M., & Engzell, P. (2023). A systematic review and meta-analysis of the evidence on learning during the COVID-19 pandemic. Nature Human Behaviour, 7, 375–385.',
    'Reich, J., & Ruipérez-Valiente, J. A. (2019). The MOOC pivot. Science, 363(6423), 130–131.',
    'Cristia, J. et al. (2017). Technology and child development: Evidence from the One Laptop per Child program. American Economic Journal: Applied Economics, 9(3), 295–320.',
    'Bastani, H. et al. (2025). Generative AI without guardrails can harm learning. PNAS, 122(26), e2422633122.',
    'Guo, P. J., Kim, J., & Rubin, R. (2014). How video production affects student engagement. L@S ’14.',
    'Hanus, M. D., & Fox, J. (2015). Assessing the effects of gamification in the classroom. Computers & Education, 80, 152–161.',
    'Reich, J. (2020). Failure to Disrupt: Why Technology Alone Can’t Transform Education. Harvard University Press.',
  ],
  related: ['e-pedagogy/examples/what-worked', 'e-pedagogy/examples/side-by-side', 'e-pedagogy/brain/rewards-and-habits'],
}

export default guide
