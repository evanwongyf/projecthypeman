import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Dyspraxia, also called developmental coordination disorder (DCD), affects how the brain plans and coordinates movement. It shows up in handwriting, sport, dressing, using equipment and often in organisation. It is not linked to intelligence.',
  nutshell: [
    'Around 5–6% of children are affected (DSM-5 estimate), with many going unidentified.',
    'Fine motor (handwriting, scissors, rulers) and gross motor (running, catching, balance) skills are affected.',
    'Organisation, planning and sequencing are often hard too.',
    'Reduce the motor load when it is not the point of the task: typing, printed notes, adapted equipment, extra time.',
  ],
  sections: [
    {
      id: 'signs',
      title: 'What you might notice',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Handwriting', body: 'Slow, effortful, messy or painful writing. Awkward pencil grip. Tiring quickly. Written work that does not reflect spoken ability.' },
            { title: 'Practical tasks', body: 'Difficulty with rulers, compasses, scissors, lab equipment, cooking tools, keyboards.' },
            { title: 'Physical activity', body: 'Clumsiness, difficulty with ball skills, balance, learning new movement sequences. Often avoids PE.' },
            { title: 'Organisation', body: 'Losing equipment, messy workspace, difficulty following multi-step instructions or planning work.' },
          ],
        },
      ],
    },
    {
      id: 'support',
      title: 'Support in class',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Allow typing or speech-to-text for extended writing.',
            'Provide printed notes and worksheets instead of copying from the board.',
            'Offer adapted equipment: pencil grips, sloped writing boards, easy-grip scissors, non-slip mats, rulers with handles.',
            'Break practical tasks into clear, demonstrated steps.',
            'Give extra time, and judge content separately from presentation.',
            'Use checklists and colour-coded folders for organisation.',
          ],
          dont: [
            'Make the learner rewrite work because it is messy.',
            'Pick teams publicly in PE.',
            'Give long spoken multi-step instructions without a written version.',
            'Assume clumsiness is carelessness.',
          ],
        },
        {
          t: 'p',
          text: 'Occupational therapists often use approaches like **CO-OP** (Cognitive Orientation to daily Occupational Performance), which teaches learners a problem-solving strategy, "Goal, Plan, Do, Check", to work out how to do the motor tasks they want to master.',
        },
      ],
    },
  ],
  sources: [
    'American Psychiatric Association. (2022). *Diagnostic and statistical manual of mental disorders* (5th ed., text rev.): Developmental coordination disorder.',
    'Blank, R., et al. (2019). International clinical practice recommendations on the definition, diagnosis, assessment, intervention, and psychosocial aspects of developmental coordination disorder. *Developmental Medicine & Child Neurology, 61*(3), 242–285.',
    'Polatajko, H. J., & Mandich, A. (2004). *Enabling occupation in children: The Cognitive Orientation to daily Occupational Performance (CO-OP) approach*. CAOT.',
  ],
  related: ['teaching/special-education/strategies/assistive-tech', 'teaching/special-education/strategies/executive-function', 'teaching/special-education/foundations/accommodations'],
}

export default guide
