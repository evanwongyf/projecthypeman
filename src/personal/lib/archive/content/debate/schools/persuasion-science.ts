import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Debate practice is mostly folk wisdom that happens to work. Some of it has been tested. This page covers the parts of the persuasion literature that bear directly on what debaters do — and is honest about the two places where the evidence says the folk wisdom is wrong, and the several places where the research itself has not held up.',
  nutshell: [
    '**Elaboration likelihood**: a motivated, able audience is persuaded by argument quality; an unmotivated one by cues. A judge is the first kind — mostly.',
    '**Two-sided messages** that answer the counter-argument outperform one-sided ones with informed audiences. This is pre-empting, validated.',
    '**Inoculation**: a weak counter-argument answered early makes an audience resistant to the strong version later.',
    'The **backfire effect** — corrections strengthening belief — largely failed to replicate. Correcting a false claim usually works.',
    'Speaking **faster** raises perceived competence up to a point; past it, comprehension falls and persuasion goes with it.',
    'Source credibility is domain-specific, and it decays: the argument outlives the memory of who made it.',
  ],
  sections: [
    {
      id: 'elm',
      title: 'Elaboration likelihood',
      blocks: [
        { t: 'p', text: 'Petty and Cacioppo’s model distinguishes two routes. On the **central** route, a motivated and able audience processes the argument itself, and quality determines the effect. On the **peripheral** route, an unmotivated or distracted audience uses cues: confidence, attractiveness, number of arguments, the speaker’s apparent authority.' },
        {
          t: 'table',
          head: ['Audience', 'Route', 'What persuades them'],
          rows: [
            ['Trained adjudicator', 'Central, strongly', 'Mechanism, engagement, comparison. Cues are actively discounted.'],
            ['Lay judge', 'Mixed', 'Argument quality, but filtered by clarity; cues matter when they cannot follow.'],
            ['Public audience', 'Peripheral, often', 'Narrative, concession, confidence, a named person they can picture.'],
            ['Opponent', 'Neither', 'Not your audience. Stop addressing them.'],
          ],
        },
        { t: 'callout', tone: 'fact', title: 'The practical reading', text: 'Central-route persuasion is durable and peripheral-route persuasion is not, which is why formats that reward argument quality produce decisions that can be explained — and why "sounding confident" transfers badly from a public debate to a competitive round.' },
      ],
    },
    {
      id: 'twosided',
      title: 'Two-sided messages and inoculation',
      blocks: [
        { t: 'p', text: 'The most useful validated finding for a debater: a message that states the counter-argument and answers it outperforms a one-sided message, for audiences who are informed or will later hear the other side. Both conditions always hold in a debate.' },
        {
          t: 'steps',
          items: [
            { title: 'Raise the objection yourself', body: '"The obvious worry is that this just moves the harm elsewhere."' },
            { title: 'State it at full strength', body: 'A weak version is a straw man and the audience notices. The strong version is also what makes the inoculation work.' },
            { title: 'Answer it', body: 'The answer need not be complete; it needs to be a real engagement.' },
            { title: 'Name what would change your mind', body: 'This is the credibility move, and it is cheap.' },
          ],
        },
        { t: 'p', text: 'McGuire’s inoculation research found that exposure to a weakened attack, with a refutation, produces resistance to the stronger attack later — the mechanism is the same as a vaccine. In competitive terms: a pre-empt in the first speech does not merely answer the argument, it makes the judge discount their later version of it. The strategic form is in [winning tricks](@debate/winning/winning-tricks).' },
      ],
    },
    {
      id: 'backfire',
      title: 'What did not replicate',
      blocks: [
        { t: 'p', text: 'Two widely repeated claims should be treated with care, and a debater who asserts them as established will be corrected by any judge who follows the literature.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'The backfire effect', tag: 'Largely did not replicate', body: 'The original finding — that corrections strengthen false beliefs — has mostly failed in larger samples. Corrections usually reduce false belief, if modestly. Do not claim that correcting misinformation makes things worse.' },
            { title: 'Mehrabian’s 7-38-55', tag: 'Misapplied', body: 'The "only 7% of communication is words" claim comes from a narrow study of inconsistent emotional signals and says nothing about argument. It is one of the most-cited errors in public-speaking advice.' },
            { title: 'Learning styles', tag: 'Not supported', body: 'Matching delivery to a listener’s supposed style does not improve outcomes. Clarity helps everyone.' },
            { title: 'Subliminal persuasion', tag: 'Negligible', body: 'Effects are tiny and fragile. Not a reason to do anything differently.' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'A rule for evidence in rounds', text: 'If a finding is famous, counter-intuitive and about psychology, check whether it replicated before you build a case on it. Opponents increasingly know, and being corrected on your headline study costs more than the argument was worth.' },
      ],
    },
    {
      id: 'delivery',
      title: 'Delivery findings that hold up',
      blocks: [
        {
          t: 'checklist',
          items: [
            'Moderately faster speech raises perceived competence, but comprehension falls once the listener is taking notes. The optimum for a judge is near 150 words per minute.',
            'Fluency — few fillers, steady rhythm — raises credibility more than volume or gesture.',
            'Concrete, specific examples are remembered and recalled far better than aggregate statistics; use both, in that order.',
            'Source credibility is domain-specific and decays faster than the argument itself: the point survives, the attribution does not.',
            'Primacy and recency both operate: your strongest material belongs at the start or the end, never in the middle.',
          ],
        },
        { t: 'p', text: 'The applied version of all of this is in [delivery and style](@debate/techniques/delivery-and-style).' },
      ],
    },
  ],
  sources: [
    'Petty, R. and Cacioppo, J. (1986) Communication and Persuasion: Central and Peripheral Routes to Attitude Change.',
    'McGuire, W. (1964) Inducing Resistance to Persuasion, on inoculation.',
    'Wood, T. and Porter, E. (2019) The Elusive Backfire Effect, Political Behavior.',
    'Allen, M. (1991) Meta-analysis comparing the persuasiveness of one-sided and two-sided messages, Western Journal of Speech Communication.',
    'Mehrabian, A. (1971) Silent Messages — read for what it actually claims, which is not the popular version.',
  ],
  related: ['debate/techniques/delivery-and-style', 'debate/winning/judge-adaptation', 'debate/winning/winning-tricks'],
}

export default guide
