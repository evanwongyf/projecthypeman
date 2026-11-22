import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Spaced practice means spreading study of the same material across several sessions with gaps in between, instead of cramming it into one. The same total time produces much longer-lasting memory.',
  nutshell: [
    'We forget quickly at first, then more slowly. This is the **forgetting curve**.',
    'Each time you revisit material after some forgetting, the memory becomes more durable, and the curve flattens.',
    'Cramming can work for tomorrow’s test, but most of it is gone within weeks.',
    'A simple rule: review after about a day, then a few days, then a week or two, then a month, using retrieval each time.',
  ],
  sections: [
    {
      id: 'curve',
      title: 'The forgetting curve',
      lead: 'Ebbinghaus and his nonsense syllables.',
      blocks: [
        {
          t: 'p',
          text: 'In the 1880s Hermann Ebbinghaus memorised lists of nonsense syllables like "DAX" and "BOK" and tested himself at different delays. He found that forgetting is steep at first and then levels off: much of what is learned is lost within a day or two unless it is reviewed. He also found that reviewing spread-out sessions required less total effort to relearn. Later researchers replicated his curve closely (Murre & Dros, 2015).',
        },
        {
          t: 'levels',
          items: [
            { name: 'Day 0: learned', body: 'Freshly studied. Feels secure.' },
            { name: 'Day 1: first review', body: 'Some has faded. Recalling it with effort strengthens it more than an immediate review would.' },
            { name: 'Day 3–4: second review', body: 'Forgetting is slower now. Another retrieval.' },
            { name: 'Day 10–14: third review', body: 'The memory is more stable. The gap can grow again.' },
            { name: 'Day 30+: fourth review', body: 'Long-term retention. Occasional reviews keep it.' },
          ],
          caption: 'An example expanding schedule, from the bottom up. The exact gaps matter less than the principle: revisit before it is completely gone, and let the gaps grow.',
        },
      ],
    },
    {
      id: 'why',
      title: 'Why spacing works',
      lead: 'Forgetting a little helps you remember a lot.',
      blocks: [
        {
          t: 'p',
          text: 'Several mechanisms seem to be involved. When you review straight away, the material is still in mind and reviewing takes little effort, so little is gained. After a gap, retrieving it takes effort, and effortful retrieval strengthens memory more (a [desirable difficulty](@teaching/techniques/learning-strategies/retrieval-practice)). Spaced sessions also link the memory to more contexts, giving more routes back to it.',
        },
        {
          t: 'p',
          text: 'The effect is large and robust. A review of hundreds of studies (Cepeda et al., 2006) found spacing consistently beat massed practice. A later study found the best gap depends on how long you need to remember: longer retention needs longer gaps, roughly 10 to 20% of the time until the test (Cepeda et al., 2008).',
        },
      ],
    },
    {
      id: 'plan',
      title: 'Planning spaced study',
      lead: 'For learners.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Start early', body: 'Spacing needs calendar time. Begin reviewing weeks before an exam, not days.' },
            { title: 'Make short, frequent sessions', body: 'Three 20-minute sessions across a week beat one hour on Sunday.' },
            { title: 'Review with retrieval', body: 'Each session, quiz yourself first, then check. Re-reading on a schedule is much weaker than testing on a schedule.' },
            { title: 'Use a system', body: 'Flashcard apps with spaced repetition schedule reviews for you. Or use the **Leitner box**: cards you get right move to a box reviewed less often; cards you miss go back to box 1.' },
            { title: 'Mix old and new', body: 'In every session, include a few items from earlier topics. This also gives you [interleaving](@teaching/techniques/learning-strategies/interleaving).' },
          ],
        },
        {
          t: 'example',
          title: 'A Leitner box schedule',
          lines: [
            { label: 'Box 1', text: 'Every day. New cards and any card you got wrong.' },
            { label: 'Box 2', text: 'Every 2 days.' },
            { label: 'Box 3', text: 'Every 4 days.' },
            { label: 'Box 4', text: 'Every 9 days.' },
            { label: 'Box 5', text: 'Every 14 days. Get it right here and it is retired, with an occasional check.' },
            { label: 'Rule', text: 'Right answer: move up a box. Wrong answer: back to box 1.' },
          ],
        },
      ],
    },
    {
      id: 'teachers',
      title: 'For teachers',
      lead: 'Building spacing into a course.',
      blocks: [
        {
          t: 'list',
          items: [
            '**Retrieval starters** that include last week, last month and last term. See [retrieval practice](@teaching/techniques/learning-strategies/retrieval-practice).',
            '**Spiral homework**: each homework has a few questions on current work and a few on older topics.',
            '**Cumulative tests**: every test includes some earlier material, so learners know nothing is "done".',
            '**Plan returns**: in a unit plan, schedule when each key idea will be revisited. See [planning a unit](@teaching/guides/planning/unit-plan).',
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Blocked units hide forgetting',
          text: 'A topic taught in a block and tested at the end of the block will look well learned. Test it again two months later to see what really stuck.',
        },
      ],
    },
  ],
  sources: [
    'Ebbinghaus, H. (1913). *Memory: A contribution to experimental psychology* (H. A. Ruger & C. E. Bussenius, Trans.). Teachers College. (Original work published 1885)',
    'Cepeda, N. J., Pashler, H., Vul, E., Wixted, J. T., & Rohrer, D. (2006). Distributed practice in verbal recall tasks. *Psychological Bulletin, 132*(3), 354–380.',
    'Cepeda, N. J., Vul, E., Rohrer, D., Wixted, J. T., & Pashler, H. (2008). Spacing effects in learning: A temporal ridgeline of optimal retention. *Psychological Science, 19*(11), 1095–1102.',
    'Murre, J. M. J., & Dros, J. (2015). Replication and analysis of Ebbinghaus’ forgetting curve. *PLoS ONE, 10*(7), e0120644.',
    'Leitner, S. (1972). *So lernt man lernen*. Herder.',
  ],
  related: ['teaching/techniques/learning-strategies/retrieval-practice', 'teaching/techniques/learning-strategies/interleaving', 'teaching/guides/planning/unit-plan'],
}

export default guide
