import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Mastery learning holds that nearly all learners can reach a high standard if they get enough time and the right help. Instead of moving the whole class on after a fixed period, learners move on when they have shown they have mastered the current unit.',
  nutshell: [
    'Hold the **standard** fixed and let **time and support** vary, instead of the reverse.',
    'Teach a unit, give a short formative check, then **correctives** for those who need them and **enrichment** for those who do not.',
    'Re-check before moving on. Gaps are fixed when they appear, not years later.',
    'The EEF rates mastery learning as moderate impact for low cost, with the biggest gains when done carefully.',
  ],
  sections: [
    {
      id: 'origins',
      title: 'Origins',
      lead: 'Carroll, Bloom and Keller.',
      blocks: [
        {
          t: 'p',
          text: 'John Carroll (1963) proposed that aptitude is really a measure of **how much time** a learner needs to learn something, not whether they can learn it. Benjamin Bloom (1968) turned this into "Learning for Mastery": if most learners can master most content given enough time and good instruction, schools should organise for that. Fred Keller’s Personalized System of Instruction (1968) applied similar ideas in university courses.',
        },
        {
          t: 'p',
          text: 'In 1984 Bloom reported that learners tutored one-to-one with mastery methods performed about **two standard deviations** better than those in conventional classes: the average tutored learner outperformed 98% of the conventional group. He called it the **"2 sigma problem"**: how to get close to that in a normal classroom. Later research suggests the real effect of tutoring is usually smaller, but the challenge still shapes the field.',
        },
      ],
    },
    {
      id: 'cycle',
      title: 'The mastery cycle',
      lead: 'Teach, check, correct or enrich, re-check.',
      blocks: [
        {
          t: 'cycle',
          items: [
            { name: 'Teach the unit', body: 'High-quality initial instruction on a clear, small set of objectives.' },
            { name: 'Formative check', body: 'A short, ungraded test on exactly those objectives, often after one or two weeks.' },
            { name: 'Correctives or enrichment', body: 'Learners who have not mastered it get **different** teaching, not just the same again: new explanations, examples, peer tutoring. Those who have mastered it get enrichment that deepens or extends it.' },
            { name: 'Second check', body: 'A parallel test to confirm mastery. Then everyone moves to the next unit.' },
          ],
          caption: 'Thomas Guskey’s description of Bloom’s model. The mastery threshold is usually set at around 80–90%.',
        },
      ],
    },
    {
      id: 'practice',
      title: 'In practice',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Break the curriculum into small units with precise objectives.',
            'Keep formative checks low stakes and quick to mark.',
            'Plan correctives in advance, using a different approach from the first teaching.',
            'Make enrichment genuinely worthwhile, not just more of the same.',
            'Build in [spaced review](@teaching/techniques/learning-strategies/spaced-practice) so mastered content stays mastered.',
          ],
          dont: [
            'Let the fastest learners wait around with nothing to do.',
            'Repeat the same explanation as a "corrective".',
            'Set the threshold so low that "mastery" means partial understanding.',
            'Treat one test as proof of permanent mastery.',
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Maths mastery',
          text: 'In the UK, "teaching for mastery" in maths draws on East Asian practice: the whole class moves through content together, with small steps, deep understanding, concrete-pictorial-abstract representations, and same-day intervention for those falling behind. It shares the belief that all learners can succeed, but differs from Bloom’s model of learners moving at different speeds.',
        },
      ],
    },
  ],
  sources: [
    'Carroll, J. B. (1963). A model of school learning. *Teachers College Record, 64*(8), 723–733.',
    'Bloom, B. S. (1968). Learning for mastery. *Evaluation Comment, 1*(2).',
    'Bloom, B. S. (1984). The 2 sigma problem. *Educational Researcher, 13*(6), 4–16.',
    'Guskey, T. R. (2010). Lessons of mastery learning. *Educational Leadership, 68*(2), 52–57.',
    'Kulik, C.-L. C., Kulik, J. A., & Bangert-Drowns, R. L. (1990). Effectiveness of mastery learning programs: A meta-analysis. *Review of Educational Research, 60*(2), 265–299.',
  ],
  related: ['teaching/assessment/formative-summative', 'teaching/techniques/instruction/rosenshine', 'teaching/special-education/foundations/tiered-support'],
}

export default guide
