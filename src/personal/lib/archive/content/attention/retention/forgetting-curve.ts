import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'In the 1880s Hermann Ebbinghaus spent years memorising lists of nonsense syllables (like DAX, BUP, ZOL) and testing himself after different delays. He found that forgetting is fast at first and then slows: the forgetting curve. His results have been replicated (Murre and Dros, 2015), and the curve is the starting point for every spacing schedule.',
  nutshell: [
    'Forgetting is **steep at first, then flattens**.',
    'Ebbinghaus measured **savings**: how much less time it takes to relearn a list than to learn it originally.',
    'Two common models: **exponential** R = e^(−t/S) and **power** R = a(1 + bt)^(−c). Real data fit power curves better over long periods.',
    'Every successful review **raises stability**, flattening the next curve.',
  ],
  sections: [
    {
      id: 'savings',
      title: 'Ebbinghaus and savings',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{Savings} = \frac{T_{\text{learn}} - T_{\text{relearn}}}{T_{\text{learn}}} \times 100\%`,
          caption: 'Ebbinghaus’s savings score.',
          plain: 'Even when you cannot recall something, it may not be fully gone: relearning is faster than learning from scratch. Savings is the share of the original learning time you saved when relearning. It detects memories too weak to be recalled.',
          where: [
            { sym: String.raw`T_{\text{learn}}`, def: 'time (or trials) to learn the list perfectly the first time' },
            { sym: String.raw`T_{\text{relearn}}`, def: 'time to relearn it perfectly after a delay' },
          ],
          syntax: [
            { sym: String.raw`\times 100\%`, say: 'turn the fraction into a percentage' },
          ],
          worked: {
            title: 'A list relearned after one day',
            steps: [
              'First learning took 1,200 seconds.',
              'Relearning the next day took 800 seconds.',
              String.raw`Savings \(= (1{,}200 - 800)/1{,}200 = 400/1{,}200 \approx 0.33 = 33\%\).`,
            ],
            why: [
              'the original learning time',
              'the relearning time after the delay',
              'the share of the work that memory saved',
            ],
            answer: 'A third of the effort was saved. Ebbinghaus found savings of roughly 58% after 20 minutes, 44% after an hour, 34% after a day and about 21% after a month.',
          },
        },
        { t: 'plot', title: 'Ebbinghaus’s savings data (1885)', x: [0, 31], y: [0, 100], xLabel: 'days since learning', yLabel: 'savings (%)', data: [{ pts: [[0, 100], [0.014, 58], [0.042, 44], [0.375, 36], [1, 34], [2, 28], [6, 25], [31, 21]], dots: true, label: 'Ebbinghaus' }], caption: 'Points at 20 minutes, 1 hour, 9 hours, 1, 2, 6 and 31 days.' },
      ],
    },
    {
      id: 'models',
      title: 'Models of forgetting',
      blocks: [
        {
          t: 'math',
          tex: String.raw`R(t) = e^{-t/S}`,
          caption: 'The exponential forgetting model: retention R after time t, with memory stability S.',
          plain: 'Retention starts at 100% and falls by the same proportion in each equal stretch of time. S, the stability, is the time it takes for retention to fall to about 37% (1/e). Bigger S means slower forgetting. Spaced-repetition apps use models like this to decide when to show a card again.',
          where: [
            { sym: 'R(t)', def: 'probability of recalling the item after time t' },
            { sym: 't', def: 'time since the last review (days)' },
            { sym: 'S', def: 'stability (days)' },
          ],
          syntax: [
            { sym: String.raw`e^{-t/S}`, say: '“e to the minus t over S”' },
            { sym: 'e', say: 'Euler’s number, about 2.718' },
          ],
          worked: {
            title: 'When will recall drop to 90%?',
            steps: [
              String.raw`Stability \(S = 10\) days. Recall after 3 days: \(e^{-0.3} \approx 0.741\).`,
              String.raw`To find when \(R = 0.9\): \(e^{-t/S} = 0.9 \Rightarrow -t/S = \ln 0.9\).`,
              String.raw`\(t = -S \ln 0.9 = -10 \times (-0.1054) \approx 1.05\) days.`,
              String.raw`For 80%: \(t = -10 \ln 0.8 = 2.23\) days.`,
            ],
            why: [
              'plug in t = 3',
              'set R to the target and take the natural log of both sides',
              'solve for t',
              'a lower target allows a longer wait',
            ],
            answer: 'With S = 10 days, recall falls to 90% after about a day and to 80% after about 2.2 days. Choosing a target recall level sets the review interval.',
          },
        },
        {
          t: 'math',
          tex: String.raw`R(t) = a\,(1 + b t)^{-c}`,
          caption: 'A power-law forgetting model (Wixted and Ebbesen, 1991), which fits long-term data better.',
          plain: 'In the power model, forgetting slows down more and more over time: older memories that have survived are lost at a slower rate. It fits Ebbinghaus’s data and later studies better than a single exponential, partly because a group’s average of many exponential curves with different stabilities looks like a power curve.',
          where: [
            { sym: 'a', def: 'initial level of recall' },
            { sym: 'b', def: 'time scaling' },
            { sym: 'c', def: 'how fast forgetting happens' },
          ],
          syntax: [
            { sym: String.raw`(1+bt)^{-c}`, say: '“one plus b t, to the power minus c”' },
          ],
          worked: {
            title: 'Exponential versus power after 1 and 30 days',
            steps: [
              String.raw`Exponential with \(S = 2\): day 1: \(e^{-0.5} = 0.61\); day 30: \(e^{-15} \approx 0.0000003\).`,
              String.raw`Power with \(a = 1, b = 1, c = 0.5\): day 1: \(2^{-0.5} = 0.71\).`,
              String.raw`Day 30: \(31^{-0.5} = 1/\sqrt{31} = 1/5.57 \approx 0.18\).`,
            ],
            why: [
              'the exponential model drops to almost nothing within a month',
              'the power model starts similarly',
              'but keeps a long tail',
            ],
            answer: 'Both drop quickly at first, but the power curve keeps about 18% after a month while the exponential predicts essentially zero. Real long-term memory has that long tail.',
          },
        },
      ],
    },
    {
      id: 'lab',
      title: 'Explore: reviews reshape the curve',
      blocks: [
        { t: 'learn-lab', viz: 'forgetting-curve' },
      ],
    },
  ],
  sources: [
    'Ebbinghaus, H. (1885/1913). Memory: A Contribution to Experimental Psychology. Teachers College.',
    'Murre, J. M. J., & Dros, J. (2015). Replication and analysis of Ebbinghaus’ forgetting curve. PLoS ONE, 10(7), e0120644.',
    'Wixted, J. T., & Ebbesen, E. B. (1991). On the form of forgetting. Psychological Science, 2(6), 409–415.',
  ],
  related: ['attention/retention/spacing', 'memory/forgetting', 'attention/practice/spaced-repetition-algorithms'],
}

export default guide
