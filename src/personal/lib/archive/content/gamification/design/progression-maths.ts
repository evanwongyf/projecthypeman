import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'How fast learners level up shapes how a gamified course feels. Too fast and levels become meaningless; too slow and learners stall and give up. Game designers use simple formulas for experience-point (XP) curves. This guide works through them, along with pacing a course and the expected value of random rewards.',
  nutshell: [
    '**Linear** curves (same XP per level) feel slow later; **polynomial** curves (XP grows as a power of the level) are the common middle ground; **exponential** curves grow very fast.',
    'Invert the curve to find **which level** a learner reaches with a given XP.',
    '**Pace** the curve so levels line up with curriculum milestones.',
    'For random rewards, the **expected value** is probability × value summed over outcomes.',
  ],
  sections: [
    {
      id: 'curves',
      title: 'Level curves',
      blocks: [
        { t: 'plot', title: 'Total XP needed to reach each level', x: [1, 15], y: [0, 6000], xLabel: 'level', yLabel: 'total XP', curves: [
          { f: (L) => 300 * (L - 1), label: 'linear: 300(L − 1)', color: 'var(--teal)' },
          { f: (L) => 100 * Math.pow(L - 1, 1.5), label: 'polynomial: 100(L − 1)^1.5', color: 'var(--orange)' },
          { f: (L) => 100 * (Math.pow(1.35, L - 1) - 1) / 0.35, label: 'exponential: ratio 1.35', color: 'var(--pink)', dashed: true },
        ] },
        {
          t: 'math',
          tex: String.raw`XP(L) = a\,(L-1)^{b}`,
          caption: 'A polynomial XP curve: total XP needed to reach level L.',
          plain: 'Level 1 needs nothing. Each later level needs more total XP, growing as a power b of the level. With b = 1 the steps are equal (linear); with b around 1.5 to 2 each level takes a bit longer than the last, which keeps levels meaningful without making the end impossible.',
          where: [
            { sym: 'XP(L)', def: 'total XP to reach level L' },
            { sym: 'a', def: 'scale: XP to reach level 2' },
            { sym: 'b', def: 'steepness (1 = linear)' },
            { sym: 'L', def: 'level' },
          ],
          syntax: [
            { sym: String.raw`(L-1)^{b}`, say: '“L minus one, to the power b”' },
          ],
          worked: {
            title: 'a = 100, b = 1.5',
            steps: [
              String.raw`Level 2: \(100 \times 1^{1.5} = 100\) XP.`,
              String.raw`Level 5: \(100 \times 4^{1.5} = 100 \times 8 = 800\) XP.`,
              String.raw`Level 10: \(100 \times 9^{1.5} = 100 \times 27 = 2{,}700\) XP.`,
              String.raw`XP from level 9 to 10: \(2{,}700 - 100 \times 8^{1.5} = 2{,}700 - 2{,}263 = 437\) XP, versus 100 from 1 to 2.`,
            ],
            why: [
              'one level after the start needs a XP',
              'four to the power 1.5 is the square root of 4 cubed: 8',
              'nine to the power 1.5 is 3 cubed: 27',
              'later levels cost more, but not explosively',
            ],
            answer: 'Levels 2, 5 and 10 need 100, 800 and 2,700 XP. Late levels take about four times the XP of early ones, a gentle slope suited to a school term.',
          },
        },
        {
          t: 'math',
          tex: String.raw`L(XP) = 1 + \left\lfloor \Big(\frac{XP}{a}\Big)^{1/b} \right\rfloor`,
          caption: 'The inverse: which level a learner with a given XP has reached.',
          plain: 'Run the curve backwards: divide the XP by a, take the b-th root, add 1, and round down to a whole level.',
          where: [
            { sym: String.raw`\lfloor x \rfloor`, def: 'floor: round down to a whole number' },
          ],
          syntax: [
            { sym: String.raw`(\cdot)^{1/b}`, say: '“to the power one over b”: the b-th root' },
            { sym: String.raw`\lfloor\;\rfloor`, say: '“floor of”' },
          ],
          worked: {
            title: 'Pacing a 30-lesson term',
            steps: [
              String.raw`A learner earns about 150 XP per lesson, so 4,500 XP over 30 lessons.`,
              String.raw`\(4{,}500/100 = 45\). \(45^{1/1.5} = 45^{0.667} = e^{0.667 \ln 45} = e^{0.667 \times 3.807} = e^{2.538} \approx 12.7\).`,
              String.raw`\(L = 1 + \lfloor 12.7 \rfloor = 13\).`,
              'If the unit has 8 milestones, choose a or b so that typical learners reach level 8 or 9 at the end, with room above for those who do extra.',
            ],
            why: [
              'estimate typical XP from the activities planned',
              'divide by a and take the 1.5th root using logs',
              'add one and round down',
              'tune the curve to the curriculum rather than the other way round',
            ],
            answer: 'With these settings a typical learner reaches level 13, too high for an 8-milestone unit. Raising a to 200 gives 1 + ⌊22.5^0.667⌋ = 1 + ⌊7.97⌋ = 8, a better match.',
          },
        },
      ],
    },
    {
      id: 'exponential',
      title: 'Exponential curves',
      blocks: [
        {
          t: 'math',
          tex: String.raw`XP_{\text{total}}(L) = a\,\frac{r^{\,L-1} - 1}{r - 1}`,
          caption: 'Total XP when each level costs r times the previous level (a geometric series).',
          plain: 'If level 2 costs a, level 3 costs a × r, level 4 costs a × r², and so on, the total is a geometric series. Common in commercial games, it makes high levels very slow, which suits long-term hobbies more than a school term.',
          where: [
            { sym: 'r', def: 'growth ratio per level (e.g. 1.2)' },
            { sym: 'a', def: 'XP for the first level-up' },
          ],
          syntax: [
            { sym: String.raw`r^{L-1}`, say: '“r to the power L minus 1”' },
          ],
          worked: {
            title: 'a = 100, r = 1.35',
            steps: [
              String.raw`Level 5: \(100 \times (1.35^4 - 1)/0.35 = 100 \times (3.32 - 1)/0.35 = 663\).`,
              String.raw`Level 10: \(100 \times (1.35^9 - 1)/0.35 = 100 \times (14.89 - 1)/0.35 \approx 3{,}969\).`,
              String.raw`Level 15: \(100 \times (1.35^{14} - 1)/0.35 = 100 \times (66.8 - 1)/0.35 \approx 18{,}800\).`,
            ],
            why: [
              'sum of the first four level costs',
              'sum of the first nine',
              'the last five levels cost over three times everything before them',
            ],
            answer: 'Exponential curves explode: level 15 needs nearly 19,000 XP. For a course, use polynomial curves or cap the levels.',
          },
        },
      ],
    },
    {
      id: 'ev',
      title: 'Random rewards and expected value',
      blocks: [
        {
          t: 'math',
          tex: String.raw`E[V] = \sum_i p_i\, v_i`,
          caption: 'Expected value of a random reward: each outcome’s value weighted by its probability.',
          plain: 'A mystery chest that sometimes gives a big bonus feels exciting, but on average it gives its expected value. Calculating it lets you keep random rewards from distorting progression, and shows learners (as a maths lesson in itself) what “random” really pays.',
          where: [
            { sym: String.raw`p_i`, def: 'probability of outcome i' },
            { sym: String.raw`v_i`, def: 'value of outcome i (XP)' },
          ],
          syntax: [
            { sym: 'E[V]', say: '“the expected value of V”' },
          ],
          worked: {
            title: 'A mystery-question chest',
            steps: [
              'Outcomes: 70% → 10 XP, 25% → 30 XP, 5% → 100 XP.',
              String.raw`\(E[V] = 0.70 \times 10 + 0.25 \times 30 + 0.05 \times 100 = 7 + 7.5 + 5 = 19.5\) XP.`,
              'A normal question gives 15 XP; the chest pays 30% more on average.',
            ],
            why: [
              'list outcomes with their chances',
              'weight and add',
              'compare with the fixed reward to keep the economy balanced',
            ],
            answer: 'About 19.5 XP on average. Keep random rewards modest and occasional; they tap curiosity, but heavy reliance on them resembles gambling mechanics.',
          },
        },
      ],
    },
  ],
  sources: [
    'Schell, J. (2019). The Art of Game Design: A Book of Lenses (3rd ed.). CRC Press.',
    'Adams, E., & Dormans, J. (2012). Game Mechanics: Advanced Game Design. New Riders.',
  ],
  related: ['gamification/design/design-process', 'gamification/theory/game-elements', 'mathematics/start-here'],
}

export default guide
