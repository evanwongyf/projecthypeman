import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A learner who is behind is usually not a learner who is less able. Most low attainment is a story of missing building blocks, interrupted attendance, low confidence, language, or a mismatch between how something was taught and what the learner needed, and the longer it runs, the more it compounds. This guide explains the mechanisms that turn a small early gap into a large later one, uses simple models to show how fast that happens, and sets up the guides that follow on what to do about it.',
  nutshell: [
    '**Behind is not the same as less able.** Attainment is what a learner has learned so far; it reflects opportunity, attendance, prior teaching and health as much as potential.',
    'Learning is **cumulative**: new ideas hang on earlier ones, so a missing prerequisite quietly blocks everything built on it.',
    'The **Matthew effect** (Stanovich, 1986): early success in reading leads to more reading, more vocabulary and more success, while early struggle leads to avoidance and a widening gap.',
    'Gaps are **easiest to close early**. A learner’s position in the distribution is more stable than most teachers hope: in one classic study, 88% of weak Grade 1 readers were still weak readers in Grade 4 (Juel, 1988).',
    'Causes are usually **several and interacting**: knowledge gaps, attendance, language, attention, anxiety, home circumstances and unidentified need. The first job is to find which.',
  ],
  sections: [
    {
      id: 'behind',
      title: 'Behind, not less able',
      lead: 'Two ideas that are often confused.',
      blocks: [
        { t: 'p', text: '**Attainment** is what a learner currently knows and can do. **Potential** is what they could learn with good teaching and the right conditions. Tests measure the first and are used to guess at the second, which is where harm happens: a low score is read as a low ceiling, expectations fall, the work becomes easier and thinner, and the learner falls further behind. The evidence on teacher expectations is more modest than the famous Pygmalion study suggested, but it is consistent that low expectations matter most for learners who are already on the margin.' },
        {
          t: 'table',
          head: ['Looks like…', 'Could actually be…', 'First thing to check'],
          rows: [
            ['Cannot do long division', 'Shaky multiplication facts, place value or subtraction', 'Back up the prerequisite chain until the learner succeeds'],
            ['Will not read aloud', 'Decoding difficulty, anxiety, or English as an additional language', 'A short, private, low-stakes reading check'],
            ['Inattentive, drifting', 'Cannot follow the language of instruction; hearing or vision; tired; hungry', 'Basic needs and sensory screening, then language demands'],
            ['Lazy, work not handed in', 'Avoiding failure; unclear instructions; difficulty with organisation (executive function)', 'Ask what makes the task hard, and break it into steps'],
            ['Poor results on tests', 'Slow processing speed, test anxiety, or a test that measures reading rather than the subject', 'Does the learner do better when the questions are read aloud?'],
          ],
          caption: 'The same surface behaviour has many possible causes. A diagnosis comes before an intervention.',
        },
      ],
    },
    {
      id: 'cumulative',
      title: 'Why gaps compound',
      lead: 'Prerequisites, practice and confidence.',
      blocks: [
        { t: 'p', text: 'Three loops make a small gap grow. **A knowledge loop**: new content assumes old content, so a gap in one topic makes the next topic harder and leaves a bigger gap. **A practice loop**: the learner who finds reading hard reads less, so gets less practice, and falls behind peers who read more (Stanovich’s Matthew effect: "the rich get richer"). **A motivation loop**: repeated failure lowers a learner’s sense of competence, so they try less, avoid tasks and are labelled as unmotivated.' },
        {
          t: 'math',
          tex: String.raw`S_A(t)=S_0\,(1+g_A)^{t},\qquad S_B(t)=S_0\,(1+g_B)^{t},\qquad \frac{S_A(t)}{S_B(t)}=\Big(\frac{1+g_A}{1+g_B}\Big)^{t}`,
          caption: 'A deliberately simple compounding model: two learners start level but learn at slightly different proportional rates each year.',
          where: [{ sym: 'S_0', def: 'the starting level of both learners' }, { sym: 'g_A,\\ g_B', def: 'the proportional growth each year of learner A and learner B' }, { sym: 't', def: 'years' }],
          syntax: [
            { sym: '(1+g)^{t}', say: 'growth that builds on what is already there. Effect: each year’s gain is a percentage of a larger or smaller base. Why: learning uses earlier learning, so success feeds success.' },
            { sym: '\\Big(\\frac{1+g_A}{1+g_B}\\Big)^{t}', say: 'the ratio of the two learners after t years. Effect: any difference in growth rate, however small, makes the ratio grow without bound. Why: the ratio of exponentials is itself an exponential.' },
          ],
          worked: {
            title: 'A small difference in rate',
            steps: ['Learner A grows 20% a year, learner B 14%. Both start at 100.', 'After 6 years: A = 100 × 1.2⁶ = 298; B = 100 × 1.14⁶ = 219.', 'The ratio is 1.36: A is 36% ahead, from a 6-point difference in annual growth.', 'After 10 years: A = 619, B = 371: ratio 1.67.'],
            answer: 'This is a toy model (real learning is not a smooth percentage), but it shows the mechanism: gaps tend to widen in proportion to what is already known, so early help is worth far more than late help.',
          },
        },
        {
          t: 'plot',
          title: 'Compounding: the toy model, illustrative only',
          x: [0, 10],
          y: [80, 700],
          xLabel: 'years',
          yLabel: 'level (start = 100)',
          curves: [
            { f: (t) => 100 * Math.pow(1.2, t), label: 'grows 20% a year' },
            { f: (t) => 100 * Math.pow(1.14, t), label: 'grows 14% a year', dashed: true },
          ],
          caption: 'Not data: an illustration of the shape. Real trajectories vary and can be changed by good teaching at any point.',
        },
        { t: 'callout', tone: 'note', title: 'The evidence it is not all hopeless', text: 'Stability of rank is a statistical average, not destiny. Well-designed early intervention changes trajectories, particularly in reading, and later intervention can still help when it targets the actual gap. The point of the compounding argument is urgency, not pessimism.' },
      ],
    },
    {
      id: 'causes',
      title: 'The usual causes, sorted',
      lead: 'Four families to look through.',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Knowledge and skills', tag: 'what is missing', body: 'Prerequisite gaps, weak vocabulary, shaky foundations in reading, number or writing. Often the most fixable cause, and the one the rest of the unit assumes away.' },
            { title: 'Access and attendance', tag: 'what was missed', body: 'Absence, school moves, interrupted schooling, late arrivals. Missing 10% of days is about a whole year over a decade of schooling (see the attendance guide).' },
            { title: 'The learner’s needs', tag: 'how they learn', body: 'Language, hearing or vision, attention, dyslexia, dyscalculia, autism and other needs that go unrecognised and are read as low ability. See the graduated approach.' },
            { title: 'Motivation and wellbeing', tag: 'what it feels like', body: 'Anxiety, learned helplessness, low self-efficacy, stress at home. These reduce working memory and attention directly, apart from any effect on effort.' },
          ],
        },
        {
          t: 'checklist',
          items: [
            'When did this start? Has the learner always been behind, or did something change (a move, illness, bereavement, a new teacher)?',
            'Is the gap in one subject or across all? A single-subject gap suggests knowledge or a specific need; a general one suggests language, attendance, wellbeing or a broader need.',
            'Can the learner do it orally but not in writing (or the reverse)?',
            'What happens with the language demands removed (read aloud, simplified)?',
            'Have hearing and vision been checked recently?',
            'What does the learner say is hard? Ask, in a private, unhurried way.',
          ],
        },
      ],
    },
  ],
  sources: [
    'Stanovich, K. E. (1986). Matthew effects in reading: some consequences of individual differences in the acquisition of literacy. *Reading Research Quarterly*, 21(4), 360–407.',
    'Juel, C. (1988). Learning to read and write: a longitudinal study of 54 children from first through fourth grades. *Journal of Educational Psychology*, 80(4), 437–447.',
    'Jussim, L. & Harber, K. D. (2005). Teacher expectations and self-fulfilling prophecies: knowns and unknowns. *Personality and Social Psychology Review*, 9(2).',
    'Cunningham, A. E. & Stanovich, K. E. (1997). Early reading acquisition and its relation to reading experience and ability ten years later. *Developmental Psychology*, 33(6).',
  ],
  related: ['teaching/inclusive-practice/catch-up-evidence', 'teaching/inclusive-practice/diagnosing-gaps', 'teaching/equity/opportunity-gap', 'teaching/special-education/foundations/inclusion', 'teaching/theories/cognitive-load'],
}

export default guide
