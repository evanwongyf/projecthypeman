import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'The Myers-Briggs Type Indicator sorts people into sixteen types from four pairs of preferences. Millions of people take it every year, and many find the language genuinely useful for understanding themselves and others. Most personality psychologists, though, regard it as a weak scientific instrument. This shelf takes both facts seriously: it explains type theory fully and richly, and it is honest about where the evidence stops.',
  nutshell: [
    'Created by **Katharine Cook Briggs** and her daughter **Isabel Briggs Myers** from the 1940s, based on Carl Jung’s *Psychological Types* (1921).',
    'Four pairs: **E/I** (energy), **S/N** (information), **T/F** (decisions), **J/P** (lifestyle), giving 16 four-letter types.',
    'Research problems: preferences are **continuous, not two boxes**; around **a third to a half of people** get a different type on retest within weeks; and the four letters predict behaviour less well than the **Big Five**.',
    'Good uses: self-reflection, conversations about difference, team discussions. Bad uses: hiring, deciding who to date, or telling anyone what they can be.',
  ],
  sections: [
    {
      id: 'history',
      title: 'Where it came from',
      blocks: [
        { t: 'steps', items: [
          { title: '1921 · Jung’s Psychological Types', body: 'Carl Jung proposed that people differ in attitude (extraversion, introversion) and in four functions: two ways of perceiving (sensation, intuition) and two of judging (thinking, feeling). One function leads.' },
          { title: '1940s · Briggs and Myers', body: 'Katharine Briggs had been building her own type system; with her daughter Isabel she turned Jung’s ideas into a questionnaire, hoping to help women entering wartime jobs find work that suited them. They added the J/P scale to identify which function leads.' },
          { title: '1962 · Educational Testing Service', body: 'ETS published the MBTI as a research instrument; it later moved to Consulting Psychologists Press (now The Myers-Briggs Company).' },
          { title: '1978 · Keirsey', body: 'David Keirsey’s *Please Understand Me* grouped the types into four temperaments, popularising type further.' },
          { title: 'Today', body: 'The official MBTI is a paid assessment; many free online tests (including the popular 16Personalities, which actually uses a Big Five-like model with a fifth “assertive/turbulent” letter) borrow the letters.' },
        ] },
      ],
    },
    {
      id: 'evidence',
      title: 'What the research says',
      blocks: [
        { t: 'table', head: ['Question', 'Finding'], rows: [
          ['Are people really two types per scale?', 'No: scores pile up in the middle (a bell curve), not in two humps. Someone just over the line on T/F is more like someone just under it than like a strong T.'],
          ['Is the result stable?', 'Test–retest studies find that roughly 40–75% of people get the same four letters after a few weeks (Pittenger 1993; McCarley & Carskadon 1983). Individual scales are more stable than the whole type.'],
          ['Do the four scales hold together?', 'Factor analyses find four factors roughly matching the scales, and they line up closely with four of the Big Five (McCrae & Costa 1989).'],
          ['Does it predict job performance?', 'Little to none. The publisher itself says it should not be used for hiring or selection.'],
          ['Why does it feel so accurate?', 'Partly because profiles are flattering and broad (the **Barnum** or Forer effect), partly because you chose your own answers, and partly because it does capture real differences on E/I, S/N, T/F and J/P.'],
        ] },
        { t: 'table', caption: 'How the MBTI scales map to the Big Five (McCrae & Costa 1989; approximate correlations in men and women)', head: ['MBTI scale', 'Big Five trait', 'Correlation'], rows: [
          ['E/I', 'Extraversion', 'about .7 (I with low E)'],
          ['S/N', 'Openness to experience', 'about .7 (N with high O)'],
          ['T/F', 'Agreeableness', 'about .4 (F with high A)'],
          ['J/P', 'Conscientiousness', 'about .5 (J with high C)'],
          ['-', 'Neuroticism', 'not measured by the MBTI'],
        ] },
        { t: 'callout', tone: 'tip', title: 'A fair way to hold it', text: 'Treat the type as a hypothesis about your preferences, not a fact about your brain. If the description fits, it gives you words; if parts do not, trust yourself over the letters. Remember that everyone uses all eight functions.' },
      ],
    },
    {
      id: 'uses',
      title: 'Good and bad uses',
      blocks: [
        { t: 'dodont', do: [
          'Reflect on how you recharge, take in information, decide and organise.',
          'Understand why a partner, parent or colleague does things differently.',
          'Give a team neutral words for different working styles.',
          'Notice your stress patterns and blind spots.',
        ], dont: [
          'Hire, promote or reject people by type.',
          'Rule out a partner or friend by their letters.',
          'Excuse bad behaviour (“I’m a T, so I’m blunt”).',
          'Label children and limit what they try.',
          'Treat online quizzes as clinical assessments.',
        ] },
        { t: 'links', items: [
          { path: 'personality/foundations/four-preferences', note: 'The four pairs in depth' },
          { path: 'personality/foundations/cognitive-functions', note: 'The eight functions and how they stack' },
          { path: 'personality/compatibility/pair-explorer', note: 'Compare any two types' },
          { path: 'personality/foundations/big-five', note: 'The research model' },
        ] },
      ],
    },
  ],
  sources: [
    'Jung, C. G. (1921/1971). Psychological Types. Princeton University Press.',
    'Myers, I. B. & Myers, P. B. (1980). Gifts Differing. Davies-Black.',
    'McCrae, R. R. & Costa, P. T. (1989). Reinterpreting the Myers-Briggs Type Indicator from the perspective of the five-factor model of personality. Journal of Personality 57(1).',
    'Pittenger, D. J. (1993). The utility of the Myers-Briggs Type Indicator. Review of Educational Research 63(4).',
    'Stein, R. & Swan, A. B. (2019). Evaluating the validity of Myers-Briggs Type Indicator theory. Social and Personality Psychology Compass 13(2).',
    'Emre, M. (2018). The Personality Brokers: The Strange History of Myers-Briggs. Doubleday.',
  ],
}

export default guide
