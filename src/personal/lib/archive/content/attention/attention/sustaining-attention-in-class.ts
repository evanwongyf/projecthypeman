import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Teachers cannot make students pay attention, but they can make attention easier and wandering harder. The levers are well known: clear purpose, short segments, frequent questions that everyone answers, changes of activity, pace that matches the material, and a room with few distractions.',
  nutshell: [
    'Break explanations into **segments**, each ending with a task or question.',
    'Make **everyone respond** (mini whiteboards, cold calling, think-pair-share), not just volunteers.',
    'Use **retrieval breaks**, not only energisers: they restore attention and strengthen memory.',
    'Control **pace**: too slow invites wandering, too fast overloads.',
  ],
  sections: [
    {
      id: 'model',
      title: 'A model of attention across a lesson',
      blocks: [
        { t: 'p', text: 'The model below shows a stylised version of the research: attention to passive input decays, and an active task restores part of it. Try different lesson lengths and break patterns.' },
        { t: 'learn-lab', viz: 'attention-lesson' },
        {
          t: 'math',
          tex: String.raw`A(t) = b + (A_0 - b)\,e^{-t/\tau}`,
          caption: 'The model’s decay rule: attention A falls from its starting level A₀ towards a baseline b, with time constant τ.',
          plain: 'Right after a change of activity, attention is high. During continuous passive input it slides down towards a lower floor. The time constant τ is how many minutes it takes to lose about 63% of the gap between the start and the floor. A break resets A₀ higher again.',
          where: [
            { sym: 'A(t)', def: 'attention t minutes after the last active break (relative scale 0 to 1)' },
            { sym: String.raw`A_0`, def: 'attention right after the break' },
            { sym: 'b', def: 'the baseline it decays towards' },
            { sym: String.raw`\tau`, def: 'time constant in minutes' },
          ],
          syntax: [
            { sym: String.raw`e^{-t/\tau}`, say: '“e to the minus t over tau”: a factor that starts at 1 and shrinks towards 0' },
            { sym: String.raw`\tau`, say: '“tau”' },
          ],
          worked: {
            title: 'Fifteen minutes of talk',
            steps: [
              String.raw`Take \(A_0 = 0.95\), \(b = 0.35\), \(\tau = 18\) minutes, \(t = 15\).`,
              String.raw`Gap: \(A_0 - b = 0.60\).`,
              String.raw`\(e^{-15/18} = e^{-0.833} \approx 0.435\).`,
              String.raw`\(A(15) = 0.35 + 0.60 \times 0.435 = 0.35 + 0.261 = 0.61\).`,
              String.raw`After 45 minutes without a break: \(0.35 + 0.60 \times e^{-2.5} = 0.35 + 0.60 \times 0.082 \approx 0.40\).`,
            ],
            why: [
              'illustrative values (the model in the lab uses these)',
              'how far above the floor attention starts',
              'the share of the gap still left after 15 minutes',
              'floor plus the remaining gap',
              'without breaks attention sits near the floor for most of the lesson',
            ],
            answer: 'In this model, attention falls from 0.95 to about 0.61 after 15 minutes of talk and to 0.40 after 45. The numbers are illustrative, but the shape matches the research: change and activity reset attention.',
          },
        },
      ],
    },
    {
      id: 'techniques',
      title: 'Techniques',
      blocks: [
        { t: 'table', head: ['Technique', 'How', 'Why it helps attention'], rows: [
          ['Segment and check', 'Teach 5–10 minutes, then a quick question for everyone', 'Resets attention; reveals misunderstanding'],
          ['Cold calling (warm)', 'Ask, pause, then name a student; make it safe to be wrong', 'Everyone must think, not just volunteers'],
          ['Mini whiteboards', 'All students show an answer at once', '100% participation; instant data'],
          ['Think, pair, share', 'Alone, then a partner, then whole class', 'Active processing; quiet students engage'],
          ['Retrieval starters', 'Three questions on earlier lessons as students arrive', 'Settles the class; strengthens memory'],
          ['Signal and pause', '“Pens down, eyes here” before key explanations', 'Alerting network; clear moment'],
          ['Change of medium', 'Move from talk to a diagram, a demonstration, a video clip', 'Novelty restores orienting'],
          ['Movement', 'Stand to vote; walk to a gallery; stretch', 'Physical alertness'],
          ['Purpose up front', 'State the question the lesson will answer', 'Gives a reason to attend'],
        ] },
        { t: 'callout', tone: 'warn', title: 'Not entertainment', text: 'Novelty and fun capture attention, but if the fun is irrelevant (a joke video unrelated to the content), attention goes to the wrong thing and the memory of the lesson becomes the joke. Make the interesting part the content itself: a puzzle, a surprising result, a real problem.' },
      ],
    },
  ],
  sources: [
    'Bunce, D. M., Flens, E. A., & Neiles, K. Y. (2010). How long can students pay attention in class? Journal of Chemical Education, 87(12), 1438–1443.',
    'Lemov, D. (2021). Teach Like a Champion 3.0. Jossey-Bass.',
    'Rosenshine, B. (2012). Principles of instruction. American Educator, 36(1), 12–19.',
    'Szpunar, K. K., Khan, N. Y., & Schacter, D. L. (2013). Interpolated memory tests reduce mind wandering and improve learning of online lectures. PNAS, 110(16), 6313–6317.',
  ],
  related: ['teaching/techniques/questioning/checking-understanding', 'teaching/techniques/instruction/rosenshine', 'attention/attention/attention-span-myths'],
}

export default guide
